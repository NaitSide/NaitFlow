import { Notice, Plugin, TAbstractFile, TFile, TFolder } from "obsidian";
import { CoverPickerModal } from "./cover-picker";
import { IconPickerModal } from "./icon-picker";
import { chooseImportArchive } from "./import-modal";
import { t } from "./i18n";
import { pageFolderPath } from "./model";
import { PageHeaderManager } from "./page-header";
import { NaitFlowTreeView, VIEW_TYPE_NAITFLOW } from "./page-tree";
import { DEFAULT_SETTINGS, NaitFlowSettings, NaitFlowSettingTab, NaitFlowTrashRecord } from "./settings";

export default class NaitFlowPlugin extends Plugin {
  override settings: NaitFlowSettings = { ...DEFAULT_SETTINGS, recentEmoji: [], recentIcons: [], trashRecords: [] };
  private headers!: PageHeaderManager;
  private emojiFont?: FontFace;

  override async onload(): Promise<void> {
    await this.loadSettings();
    this.loadEmojiFont();
    this.headers = new PageHeaderManager(this);
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
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshActiveTreeState()));
    this.registerEvent(this.app.metadataCache.on("changed", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("create", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("delete", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      this.refreshUi();
      void this.renamePairedFolder(file, oldPath);
    }));
    this.registerInterval(window.setInterval(() => this.headers.schedule(), 1500));

    this.app.workspace.onLayoutReady(() => {
      this.headers.schedule();
      if (this.settings.openTreeOnStartup && !this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW).length) void this.activateTree();
      const conflicts = ["iconic", "obsidian-icon-folder", "banners-reloaded", "pixel-banner"].filter((id) => this.isPluginEnabled(id));
      if (conflicts.length) new Notice(t("pluginConflict"), 7000);
    });
  }

  override onunload(): void {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_NAITFLOW);
    document.querySelectorAll(".naitflow-page-header, .naitflow-tab-icon").forEach((element) => element.remove());
    document.querySelectorAll<HTMLElement>(".naitflow-fluid-cover-host").forEach((element) => {
      element.removeClass("naitflow-fluid-cover-host");
      element.style.removeProperty("--naitflow-cover-gutter-left");
      element.style.removeProperty("--naitflow-cover-gutter-right");
      element.style.removeProperty("--naitflow-cover-gutter-top");
    });
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
  }

  async saveSettings(): Promise<void> { await this.saveData(this.settings); }

  async addTrashRecord(record: NaitFlowTrashRecord): Promise<void> {
    this.settings.trashRecords = [record, ...this.settings.trashRecords.filter((item) => item.id !== record.id)].slice(0, 500);
    await this.saveSettings();
  }

  async removeTrashRecord(id: string): Promise<void> {
    this.settings.trashRecords = this.settings.trashRecords.filter((item) => item.id !== id);
    await this.saveSettings();
  }

  /** Keeps `Page.md` and its sibling `Page/` together after a native rename or move. */
  private async renamePairedFolder(file: TAbstractFile, oldPath: string): Promise<void> {
    if (!(file instanceof TFile) || file.extension.toLowerCase() !== "md") return;
    const oldFolder = this.app.vault.getAbstractFileByPath(pageFolderPath(oldPath));
    if (!(oldFolder instanceof TFolder)) return;

    const nextPath = pageFolderPath(file.path);
    const existing = this.app.vault.getAbstractFileByPath(nextPath);
    if (existing && existing !== oldFolder) {
      new Notice("NaitFlow: the matching page folder was not renamed because the destination already exists.", 8000);
      return;
    }

    try {
      await this.app.vault.rename(oldFolder, nextPath);
    } catch (error) {
      console.error("NaitFlow: failed to rename matching page folder", error);
      new Notice("NaitFlow: could not rename the matching page folder.", 8000);
    }
  }

  private loadEmojiFont(): void {
    if (!this.manifest.dir) return;
    const fontPath = `${this.manifest.dir}/NotoColorEmoji.ttf`;
    const fontUrl = this.app.vault.adapter.getResourcePath(fontPath);
    this.emojiFont = new FontFace("NaitFlow Noto Color Emoji", `url("${fontUrl}")`, { display: "block" });
    document.fonts.add(this.emojiFont);
    void this.emojiFont.load().catch((error) => console.error("NaitFlow: failed to load Noto Color Emoji", error));
  }

  private isPluginEnabled(id: string): boolean {
    const plugins = (this.app as unknown as { plugins?: { enabledPlugins?: Set<string> } }).plugins;
    return plugins?.enabledPlugins?.has(id) ?? false;
  }
}
