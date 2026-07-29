import { App, PluginSettingTab, Setting } from "obsidian";
import type NaitFlowPlugin from "./main";
import { t } from "./i18n";

export interface NaitFlowSettings {
  assetsFolder: string;
  unsplashAccessKey: string;
  recentEmoji: string[];
  recentIcons: string[];
  openTreeOnStartup: boolean;
}

export const DEFAULT_SETTINGS: NaitFlowSettings = {
  assetsFolder: "Assets/NaitFlow",
  unsplashAccessKey: "",
  recentEmoji: [],
  recentIcons: [],
  openTreeOnStartup: true
};

export class NaitFlowSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: NaitFlowPlugin) {
    super(app, plugin);
  }

  override display(): void {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "NaitFlow" });
    this.containerEl.createEl("p", { text: t("settingsIntro") });

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
