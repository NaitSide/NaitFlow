import { normalizePath, Notice, Plugin, TAbstractFile, TFile, TFolder } from "obsidian";
import { CoverPickerModal } from "./cover-picker";
import { IconPickerModal } from "./icon-picker";
import { chooseImportArchive } from "./import-modal";
import { t } from "./i18n";
import { ensureFolder, FIELDS, pageFolderPath, readPageMeta, relocatePageMedia, setField } from "./model";
import { PageHeaderManager } from "./page-header";
import { SlashMenuSuggest } from "./slash-menu";
import { blockDragExtension } from "./block-drag";
import { selectionToolbarExtension } from "./selection-toolbar";
import { addSubpageLink, registerSubpageLinkHover } from "./subpage-link-hover";
import { NaitFlowTreeView, VIEW_TYPE_NAITFLOW } from "./page-tree";
import { DEFAULT_SETTINGS, NaitFlowSettings, NaitFlowSettingTab, NaitFlowTrashRecord } from "./settings";

export default class NaitFlowPlugin extends Plugin {
  override settings: NaitFlowSettings = { ...DEFAULT_SETTINGS, recentEmoji: [], recentIcons: [], trashRecords: [] };
  private headers!: PageHeaderManager;
  private slashMenu?: SlashMenuSuggest;
  private emojiFont?: FontFace;
  private readonly emojiFontDocuments = new WeakSet<Document>();
  private settingsSave: Promise<void> = Promise.resolve();
  private movingPage?: TFile;

  override async onload(): Promise<void> {
    await this.loadSettings();
    this.loadEmojiFont(document, window);
    this.registerEvent(this.app.workspace.on("window-open", (_workspaceWindow, popoutWindow) => {
      this.loadEmojiFont(popoutWindow.document, popoutWindow);
    }));
    this.headers = new PageHeaderManager(this);
    this.slashMenu = new SlashMenuSuggest(this.app);
    this.registerEditorSuggest(this.slashMenu);
    this.registerEditorExtension([blockDragExtension, selectionToolbarExtension]);
    registerSubpageLinkHover(this);
    this.registerView(VIEW_TYPE_NAITFLOW, (leaf) => new NaitFlowTreeView(leaf, this));
    this.addRibbonIcon("panels-top-left", t("openPagesRibbon"), () => void this.activateTree());
    this.addSettingTab(new NaitFlowSettingTab(this.app, this));

    this.addCommand({ id: "open-pages", name: t("openPagesCommand"), callback: () => void this.activateTree() });
    this.addCommand({ id: "choose-page-icon", name: t("chooseIconCommand"), checkCallback: (checking) => {
      const file = this.app.workspace.getActiveFile();
      if (!file) return false;
      if (!checking) this.openIconPicker(file);
      return true;
    }});
    this.addCommand({ id: "choose-page-cover", name: t("chooseCoverCommand"), checkCallback: (checking) => {
      const file = this.app.workspace.getActiveFile();
      if (!file) return false;
      if (!checking) this.openCoverPicker(file);
      return true;
    }});

    this.registerEvent(this.app.workspace.on("layout-change", () => this.headers.schedule()));
    this.registerEvent(this.app.workspace.on("file-open", () => this.headers.schedule()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshActiveTreeState()));
    this.registerEvent(this.app.metadataCache.on("changed", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("create", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("delete", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      this.updatePageOrderPaths(file, oldPath);
      this.refreshUi();
      if (file !== this.movingPage) void this.renamePairedFolder(file, oldPath);
    }));

    this.app.workspace.onLayoutReady(() => {
      this.headers.schedule();
      if (this.settings.openTreeOnStartup && !this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW).length) void this.activateTree();
      const conflicts = ["iconic", "obsidian-icon-folder", "banners-reloaded", "pixel-banner"].filter((id) => this.isPluginEnabled(id));
      if (conflicts.length) new Notice(t("pluginConflict"), 7000);
    });
  }

  override onunload(): void {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_NAITFLOW);
    this.headers?.destroy();
    this.slashMenu?.destroy();
    if (this.emojiFont) document.fonts.delete(this.emojiFont);
  }

  openIconPicker(file: TFile): void { new IconPickerModal(this.app, this, file).open(); }
  openCoverPicker(file: TFile): void { new CoverPickerModal(this.app, this, file).open(); }
  openImporter(): void { chooseImportArchive(this); }

  refreshUi(): void {
    this.headers.schedule();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)) {
      const view = leaf.view;
      if (view instanceof NaitFlowTreeView) view.render();
    }
  }

  private refreshActiveTreeState(): void {
    this.headers.schedule();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)) {
      const view = leaf.view;
      if (view instanceof NaitFlowTreeView) view.syncActiveFile();
    }
  }

  async activateTree(): Promise<void> {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeftLeaf(false) ?? undefined;
      if (!leaf) return;
      await leaf.setViewState({ type: VIEW_TYPE_NAITFLOW, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
  }

  pushRecent(kind: "emoji" | "icons", value: string): void {
    const key = kind === "emoji" ? "recentEmoji" : "recentIcons";
    this.settings[key] = [value, ...this.settings[key].filter((item) => item !== value)].slice(0, 24);
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<NaitFlowSettings>);
    if (!Array.isArray(this.settings.pageOrder)) this.settings.pageOrder = [];
  }

  async saveSettings(): Promise<void> {
    this.settingsSave = this.settingsSave.catch(() => {}).then(() => this.saveData(this.settings));
    await this.settingsSave;
  }

  async savePageOrder(siblings: TFile[]): Promise<void> {
    const previous = this.settings.pageOrder;
    const paths = siblings.map((file) => file.path);
    const updated = new Set(paths);
    const next = [...paths, ...previous.filter((path) => !updated.has(path))];
    this.settings.pageOrder = next;
    try {
      await this.saveSettings();
    } catch (error) {
      if (this.settings.pageOrder === next) this.settings.pageOrder = previous;
      throw error;
    } finally {
      this.refreshUi();
    }
  }

  private updatePageOrderPaths(file: TAbstractFile, oldPath: string): void {
    const previous = this.settings.pageOrder;
    const next = previous.map((path) =>
      path === oldPath || (file instanceof TFolder && path.startsWith(`${oldPath}/`))
        ? file.path + path.slice(oldPath.length)
        : path
    );
    if (next.every((path, index) => path === previous[index])) return;
    this.settings.pageOrder = next;
    void this.saveSettings().catch(() => new Notice(t("pageOrderSaveFailed")));
  }

  async linkSubpage(parent: TFile, child: TFile): Promise<void> {
    try {
      await addSubpageLink(this.app, parent, child);
    } catch {
      new Notice(t("subpageLinkFailed"));
    }
  }

  async movePage(file: TFile, parent?: TFile): Promise<void> {
    if (this.movingPage) throw new Error(t("movePageBusy"));
    this.movingPage = file;
    const from = file.path;
    const fromFolder = pageFolderPath(from);
    const folderPath = parent ? pageFolderPath(parent.path) : "";
    const to = normalizePath(folderPath ? `${folderPath}/${file.name}` : file.name);
    const toFolder = pageFolderPath(to);
    const vault = this.app.vault;
    try {
      if (folderPath === fromFolder || folderPath.startsWith(`${fromFolder}/`)) throw new Error(t("movePageInvalid"));
      if (vault.getAbstractFileByPath(from) !== file) throw new Error(t("movePageInvalid"));
      if (parent && vault.getAbstractFileByPath(parent.path) !== parent) throw new Error(t("movePageInvalid"));
      const legacyParent = readPageMeta(this.app, file).parent;
      if (from === to) {
        if (legacyParent) await setField(this.app, file, FIELDS.parent, null);
        if (parent) await this.linkSubpage(parent, file);
        return;
      }
      if (await vault.adapter.exists(to) || await vault.adapter.exists(toFolder)) throw new Error(t("movePageConflict"));
      const paired = vault.getAbstractFileByPath(fromFolder);
      const legacyChildren = vault.getMarkdownFiles().flatMap((child) => {
        const reference = readPageMeta(this.app, child).parent;
        const parent = reference ? this.app.metadataCache.getFirstLinkpathDest(reference, child.path) : null;
        return parent && child !== file && (parent === file || parent.path.startsWith(`${fromFolder}/`))
          ? [{ child, parent }]
          : [];
      });
      const needsFolder = Boolean(folderPath && !vault.getAbstractFileByPath(folderPath));
      try {
        if (folderPath) await ensureFolder(this.app, folderPath);
        await this.app.fileManager.renameFile(file, to);
        if (paired instanceof TFolder) await this.app.fileManager.renameFile(paired, toFolder);
      } catch (error) {
        try {
          if (paired instanceof TFolder && paired.path === toFolder) await this.app.fileManager.renameFile(paired, fromFolder);
          if (file.path === to) await this.app.fileManager.renameFile(file, from);
        } catch {
          new Notice(t("movePageRollbackFailed"), 8000);
        }
        const created = needsFolder ? vault.getAbstractFileByPath(folderPath) : null;
        if (created instanceof TFolder && !created.children.length) await vault.delete(created).catch(() => {});
        throw error;
      }
      const metadata = legacyChildren.map(({ child, parent }) => setField(this.app, child, FIELDS.parent, pageFolderPath(parent.path)));
      if (legacyParent) metadata.push(setField(this.app, file, FIELDS.parent, null));
      // Media updates run after the parent fields to avoid concurrent changes to the same frontmatter.
      const updates = await Promise.allSettled(metadata);
      if (paired instanceof TFolder) updates.push(...await Promise.allSettled([relocatePageMedia(this.app, fromFolder, toFolder)]));
      if (updates.some((update) => update.status === "rejected")) new Notice(t("movePageMetadataFailed"), 8000);
      if (parent) await this.linkSubpage(parent, file);
    } finally {
      this.movingPage = undefined;
      this.refreshUi();
    }
  }

  async addTrashRecord(record: NaitFlowTrashRecord): Promise<void> {
    this.settings.trashRecords = [record, ...this.settings.trashRecords.filter((item) => item.id !== record.id)].slice(0, 500);
    await this.saveSettings();
  }

  async removeTrashRecord(id: string): Promise<void> {
    this.settings.trashRecords = this.settings.trashRecords.filter((item) => item.id !== id);
    await this.saveSettings();
  }

  async clearTrashRecords(): Promise<void> {
    this.settings.trashRecords = [];
    await this.saveSettings();
  }

  /** Keeps `Page.md` and its sibling `Page/` together after a native rename or move. */
  private async renamePairedFolder(file: TAbstractFile, oldPath: string): Promise<void> {
    if (!(file instanceof TFile) || file.extension.toLowerCase() !== "md") return;
    const previousPath = pageFolderPath(oldPath);
    const oldFolder = this.app.vault.getAbstractFileByPath(previousPath);
    if (!(oldFolder instanceof TFolder)) return;

    const nextPath = pageFolderPath(file.path);
    const existing = this.app.vault.getAbstractFileByPath(nextPath);
    if (existing && existing !== oldFolder) {
      new Notice("NaitFlow: the matching page folder was not renamed because the destination already exists.", 8000);
      return;
    }

    try {
      await this.app.fileManager.renameFile(oldFolder, nextPath);
    } catch (error) {
      console.error("NaitFlow: failed to rename matching page folder", error);
      new Notice("NaitFlow: could not rename the matching page folder.", 8000);
      return;
    }
    try {
      await relocatePageMedia(this.app, previousPath, nextPath);
    } catch (error) {
      console.error("NaitFlow: failed to update page media paths", error);
      new Notice(t("renameMediaFailed"), 8000);
    }
  }

  private loadEmojiFont(targetDocument: Document, targetWindow: Window): void {
    if (!this.manifest.dir || this.emojiFontDocuments.has(targetDocument)) return;
    const fontPath = `${this.manifest.dir}/NotoColorEmoji.ttf`;
    const fontUrl = this.app.vault.adapter.getResourcePath(fontPath);
    const FontFaceConstructor = (targetWindow as Window & typeof globalThis).FontFace;
    this.emojiFont = new FontFaceConstructor("NaitFlow Noto Color Emoji", `url("${fontUrl}")`, { display: "block" });
    targetDocument.fonts.add(this.emojiFont);
    this.emojiFontDocuments.add(targetDocument);
    void this.emojiFont.load().catch((error) => console.error("NaitFlow: failed to load Noto Color Emoji", error));
  }

  private isPluginEnabled(id: string): boolean {
    const plugins = (this.app as unknown as { plugins?: { enabledPlugins?: Set<string> } }).plugins;
    return plugins?.enabledPlugins?.has(id) ?? false;
  }
}
