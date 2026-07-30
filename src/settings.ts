import { App, PluginSettingTab, Setting } from "obsidian";
import type NaitFlowPlugin from "./main";
import { t } from "./i18n";

export interface NaitFlowSettings {
  assetsFolder: string;
  unsplashAccessKey: string;
  recentEmoji: string[];
  recentIcons: string[];
  openTreeOnStartup: boolean;
  trashRecords: NaitFlowTrashRecord[];
}

export interface NaitFlowTrashRecord {
  id: string;
  title: string;
  originalFilePath: string;
  originalFolderPath?: string;
  trashedFilePath: string;
  trashedFolderPath?: string;
  deletedAt: number;
}

export const DEFAULT_SETTINGS: NaitFlowSettings = {
  assetsFolder: "Assets/NaitFlow",
  unsplashAccessKey: "",
  recentEmoji: [],
  recentIcons: [],
  openTreeOnStartup: true,
  trashRecords: []
};

export class NaitFlowSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: NaitFlowPlugin) {
    super(app, plugin);
  }

  override display(): void {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "NaitFlow" });
    this.containerEl.createEl("p", { text: t("settingsIntro") });

    this.containerEl.createEl("h3", { text: t("importData") });
    new Setting(this.containerEl)
      .setName(t("importFormats"))
      .setDesc(t("importFormatsDesc"))
      .addButton((button) => button
        .setButtonText(t("importZip"))
        .setCta()
        .onClick(() => this.plugin.openImporter()));

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
}
