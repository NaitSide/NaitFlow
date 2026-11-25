import { App, PluginSettingTab, Setting } from "obsidian";
import type NaitFlowPlugin from "./main";
import { t } from "./i18n";
import { NotionImportSettings } from "./notion-import-settings";
import { BuildinImportModal, BuildinImportState } from "./buildin-import-settings";

export interface NaitFlowSettings {
  assetsFolder: string;
  unsplashAccessKey: string;
  recentEmoji: string[];
  recentIcons: string[];
  openTreeOnStartup: boolean;
  pageOrder: string[];
  trashRecords: NaitFlowTrashRecord[];
  buildinImport?: BuildinImportState;
}

export interface NaitFlowTrashRecord {
  id: string;
  title: string;
  icon?: string;
  originalFilePath: string;
  originalFolderPath?: string;
  trashedFilePath: string;
  trashedFolderPath?: string;
  cacheRootPath?: string;
  deletedAt: number;
}

export const DEFAULT_SETTINGS: NaitFlowSettings = {
  assetsFolder: "Assets/NaitFlow",
  unsplashAccessKey: "",
  recentEmoji: [],
  recentIcons: [],
  openTreeOnStartup: true,
  pageOrder: [],
  trashRecords: []
};

export class NaitFlowSettingTab extends PluginSettingTab {
  private notionImport?: NotionImportSettings;
  private buildinImport?: BuildinImportModal;
  constructor(app: App, private readonly plugin: NaitFlowPlugin) {
    super(app, plugin);
    plugin.register(() => this.hide());
  }

  override display(): void {
    this.hide();
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "NaitFlow" });
    this.containerEl.createEl("p", { cls: "naitflow-settings-intro", text: t("settingsIntro") });

    this.containerEl.createEl("h3", { text: t("importData") });
    new Setting(this.containerEl)
      .setName(t("importFormats"))
      .setDesc(t("importFormatsDesc"))
      .addButton((button) => button
        .setButtonText(t("importZip"))
        .setCta()
        .onClick(() => this.plugin.openImporter()));

    this.notionImport = new NotionImportSettings(this.plugin, this.containerEl);

    new Setting(this.containerEl)
      .setName(t("buildinImport"))
      .setDesc(t("buildinImportDesc"))
      .addButton((button) => button.setButtonText(t("importStart")).onClick(() => {
        if (this.buildinImport) return;
        const state = this.plugin.settings.buildinImport ??= { log: [] };
        this.buildinImport = new BuildinImportModal(this.app, this.plugin.manifest.dir, state,
          () => this.plugin.saveSettings(), () => this.plugin.refreshUi(), () => {
            this.buildinImport = undefined;
            if (button.buttonEl.isConnected) button.buttonEl.focus();
          });
        this.buildinImport.open();
      }));

    this.containerEl.createEl("h3", { text: t("otherSettings") });
    new Setting(this.containerEl)
      .setName(t("mediaFolder"))
      .setDesc(t("mediaFolderDesc"))
      .addText((text) => text.setValue(this.plugin.settings.assetsFolder).onChange(async (value) => {
        this.plugin.settings.assetsFolder = value.trim() || DEFAULT_SETTINGS.assetsFolder;
        await this.plugin.saveSettings();
      }));

    new Setting(this.containerEl)
      .setName("Unsplash Access Key")
      .setDesc(t("unsplashKeyDesc"))
      .addText((text) => {
        text.inputEl.type = "password";
        text.setPlaceholder(t("unsplashKeyPlaceholder")).setValue(this.plugin.settings.unsplashAccessKey).onChange(async (value) => {
          this.plugin.settings.unsplashAccessKey = value.trim();
          await this.plugin.saveSettings();
        });
      });

    new Setting(this.containerEl)
      .setName(t("openTreeOnStartup"))
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.openTreeOnStartup).onChange(async (value) => {
        this.plugin.settings.openTreeOnStartup = value;
        await this.plugin.saveSettings();
      }));
  }

  override hide(): void {
    this.notionImport?.dispose();
    this.notionImport = undefined;
    this.buildinImport?.close();
  }
}

