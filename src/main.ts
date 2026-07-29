import { Notice, Plugin, TFile } from "obsidian";
import { CoverPickerModal } from "./cover-picker";
import { IconPickerModal } from "./icon-picker";
import { t } from "./i18n";
import { PageHeaderManager } from "./page-header";
import { NaitFlowTreeView, VIEW_TYPE_NAITFLOW } from "./page-tree";
import { DEFAULT_SETTINGS, NaitFlowSettings, NaitFlowSettingTab } from "./settings";

export default class NaitFlowPlugin extends Plugin {
  override settings: NaitFlowSettings = { ...DEFAULT_SETTINGS, recentEmoji: [], recentIcons: [] };
  private headers!: PageHeaderManager;
  private emojiFont?: FontFace;

  override async onload(): Promise<void> {
    await this.loadSettings();
    this.loadEmojiFont();
    this.headers = new PageHeaderManager(this);
    this.registerView(VIEW_TYPE_NAITFLOW, (leaf) => new NaitFlowTreeView(leaf));
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
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshUi()));
    this.registerEvent(this.app.metadataCache.on("changed", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("create", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("delete", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("rename", () => this.refreshUi()));
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

  refreshUi(): void {
    this.headers.schedule();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)) {
      const view = leaf.view;
      if (view instanceof NaitFlowTreeView) view.render();
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
