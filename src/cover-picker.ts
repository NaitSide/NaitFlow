import { App, Modal, Notice, normalizePath, requestUrl, setIcon, TFile } from "obsidian";
import type NaitFlowPlugin from "./main";
import { assetUrl, ensureFolder, FIELDS, setField, uniqueAssetPath } from "./model";
import { errorMessage, extensionFromMime } from "./icon-picker";
import { t } from "./i18n";

interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  urls: { small: string; regular: string };
  links: { download_location: string };
  user: { name: string; links: { html: string } };
}

interface BuiltInCover {
  file: string;
  title: string;
  position?: string;
}

const NASA_ARCHIVE_COVER_ROOT = "presets/covers/nasa";
const ARTEMIS_COVER_ROOT = "presets/covers/artemis-ii";
const WEBB_COVER_ROOT = "presets/covers/webb";
const MET_HUDSON_COVER_ROOT = "presets/covers/met-hudson";
const MET_JAPANESE_COVER_ROOT = "presets/covers/met-japanese";
const COLOR_GRADIENT_COVER_ROOT = "presets/covers/gradients";
const COLOR_GRADIENT_COVERS: BuiltInCover[] = [
  { file: "solid-red.svg", title: t("red") },
  { file: "solid-yellow.svg", title: t("yellow") },
  { file: "solid-blue.svg", title: t("blue") },
  { file: "solid-beige.svg", title: t("beige") },
  { file: "superfamous-gradient-11.png", title: t("gradient", { number: 11 }) },
  { file: "superfamous-gradient-14.png", title: t("gradient", { number: 14 }) },
  { file: "superfamous-gradient-15.png", title: t("gradient", { number: 15 }) },
  { file: "superfamous-gradient-24.png", title: t("gradient", { number: 24 }) },
  { file: "superfamous-gradient-26.png", title: t("gradient", { number: 26 }) },
  { file: "superfamous-gradient-27.png", title: t("gradient", { number: 27 }) },
  { file: "superfamous-gradient-32.png", title: t("gradient", { number: 32 }) }
];
const ARTEMIS_COVERS: BuiltInCover[] = [
  { file: "sls_maf_20260401_artemisiilaunch_03.jpg", title: t("artemisSlsLaunch") },
  { file: "artemis-distant-crescent-earth.jpg", title: "Crescent Earth" },
  { file: "artemis-near-far-moon.jpg", title: "Near Side and Far Side of the Moon" },
  { file: "artemis-shadows-lunar-day.jpg", title: "Shadows at the Edge of Lunar Day" },
  { file: "artemis-vavilov-crater.jpg", title: "Shadows Across Vavilov Crater" },
  { file: "artemis-earthset-orion.jpg", title: "Earthset" },
  { file: "artemis-eclipse.jpg", title: "Artemis II in Eclipse" },
  { file: "artemis-edge-of-darkness.jpg", title: "The Edge of Darkness" },
  { file: "artemis-craters-of-time.jpg", title: "Craters of Time" }
];
const WEBB_COVERS: BuiltInCover[] = [
  { file: "webb-cosmic-cliffs-carina.jpg", title: "Cosmic Cliffs in Carina" },
  { file: "webb-stephans-quintet.png", title: "Stephan’s Quintet" },
  { file: "webb-southern-ring-nebula.jpg", title: "Southern Ring Nebula", position: "50% 50%" },
  { file: "webb-first-deep-field.jpg", title: "Webb’s First Deep Field" }
];
const NASA_ARCHIVE_COVERS: BuiltInCover[] = [
  { file: "nasa-pillars-of-creation.jpg", title: t("pillarsOfCreation") },
  { file: "nasa-saturn.jpg", title: t("saturn") },
  { file: "nasa-earthrise.jpg", title: t("earthrise") },
  { file: "nasa-hubble-deep-field.jpg", title: "Hubble Deep Field" },
  { file: "nasa-sls-night-launch.jpg", title: t("nightSlsLaunch") },
  { file: "nasa-blue-marble.jpg", title: "Blue Marble" }
];
const MET_HUDSON_COVERS: BuiltInCover[] = [
  { file: "hudson-river-scene-kensett.jpg", title: "Hudson River Scene — John Frederick Kensett" },
  { file: "river-scene-durand.jpg", title: "River Scene — Asher Brown Durand" },
  { file: "landscape-lagoon-new-rochelle.jpg", title: "Landscape and Lagoon, New Rochelle — David Johnson" },
  { file: "on-hudson-near-idlewild.jpg", title: "On the Hudson River, Near Idlewild — Eliza Pratt Greatorex" },
  { file: "hackensack-meadows.jpg", title: "Hackensack Meadows — Jasper Francis Cropsey" },
  { file: "the-oxbow.jpg", title: "The Oxbow — Thomas Cole" },
  { file: "heart-of-the-andes.jpg", title: "Heart of the Andes — Frederic Edwin Church" },
  { file: "the-parthenon.jpg", title: "The Parthenon — Frederic Edwin Church" }
];
const MET_JAPANESE_COVERS: BuiltInCover[] = [
  { file: "woodcuts_1.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 10%" },
  { file: "woodcuts_2.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 80%" },
  { file: "woodcuts_3.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 80%" },
  { file: "woodcuts_4.jpg", title: "Japanese print — Keisai Eisen", position: "50% 40%" },
  { file: "woodcuts_5.jpg", title: "Japanese print — Kobayashi Kiyochika", position: "50% 0%" },
  { file: "woodcuts_6.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_7.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 30%" },
  { file: "woodcuts_8.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_9.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_10.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 10%" },
  { file: "woodcuts_11.jpg", title: "Japanese print — Itō Jakuchū", position: "50% 0%" },
  { file: "woodcuts_13.jpg", title: "Japanese print — Utagawa Hiroshige", position: "50% 0%" },
  { file: "woodcuts_14.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 40%" },
  { file: "woodcuts_15.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 70%" },
  { file: "woodcuts_16.jpg", title: "Japanese print — Katsushika Hokusai", position: "50% 0%" },
  { file: "woodcuts_sekka_1.jpg", title: "Japanese print — Kamisaka Sekka", position: "50% 90%" },
  { file: "woodcuts_sekka_2.jpg", title: "Japanese print — Kamisaka Sekka", position: "50% 20%" },
  { file: "woodcuts_sekka_3.jpg", title: "Japanese print — Kamisaka Sekka", position: "50% 80%" }
];

export class CoverPickerModal extends Modal {
  private tab: "gallery" | "upload" | "link" | "unsplash" = "gallery";
  private unsplashSearchTimer: number | null = null;
  private unsplashRequestId = 0;
  private readonly unsplashCache = new Map<string, UnsplashPhoto[]>();

  constructor(app: App, private readonly plugin: NaitFlowPlugin, private readonly file: TFile) {
    super(app);
  }

  override onOpen(): void {
    this.modalEl.addClass("naitflow-modal", "naitflow-cover-modal");
    this.render();
  }

  private render(): void {
    if (this.unsplashSearchTimer !== null) {
      window.clearTimeout(this.unsplashSearchTimer);
      this.unsplashSearchTimer = null;
    }
    this.unsplashRequestId += 1;
    this.contentEl.empty();
    const tabs = this.contentEl.createDiv("naitflow-tabs");
    this.addTab(tabs, "gallery", t("gallery"));
    this.addTab(tabs, "upload", t("upload"));
    this.addTab(tabs, "link", t("link"));
    this.addTab(tabs, "unsplash", "Unsplash", "unsplash");
    const clear = tabs.createEl("button", { cls: "naitflow-tab naitflow-tab--clear" });
    const clearIcon = clear.createSpan("naitflow-tab-icon");
    setIcon(clearIcon, "circle-minus");
    clear.createSpan({ cls: "naitflow-tab-clear-label", text: t("clear") });
    clear.onclick = () => void this.choose(null);
    if (this.tab === "gallery") this.renderGallery();
    if (this.tab === "upload") this.renderUpload();
    if (this.tab === "link") this.renderLink();
    if (this.tab === "unsplash") this.renderUnsplash();
  }

  private addTab(parent: HTMLElement, id: typeof this.tab, label: string, icon?: string): void {
    const button = parent.createEl("button", { cls: `naitflow-tab${this.tab === id ? " is-active" : ""}` });
    if (icon) {
      const iconEl = button.createSpan("naitflow-tab-icon");
      if (icon === "unsplash") iconEl.addClass("naitflow-unsplash-mark");
      else setIcon(iconEl, icon);
    }
    button.createSpan({ text: label });
    button.onclick = () => { this.tab = id; this.render(); };
  }

  private renderGallery(): void {
    const viewport = this.contentEl.createDiv("naitflow-cover-gallery");
    const gallery = viewport.createDiv("naitflow-cover-gallery-inner");
    this.renderBuiltInGallery(gallery);
    const folder = normalizePath(`${this.plugin.settings.assetsFolder}/Covers`);
    const files = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${folder}/`) && /\.(png|jpe?g|webp|gif|svg)$/i.test(file.path));
    if (!files.length) return;
    gallery.createDiv({ cls: "naitflow-gallery-heading", text: t("myCovers") });
    const grid = gallery.createDiv("naitflow-cover-grid");
    for (const file of files) {
      const button = grid.createEl("button", { attr: { title: file.basename } });
      button.createEl("img", { attr: { src: this.app.vault.getResourcePath(file), alt: file.basename } });
      button.onclick = () => void this.choose(file.path);
    }
  }

  private renderBuiltInGallery(parent: HTMLElement): void {
    if (!this.plugin.manifest.dir) return;
    this.renderBuiltInGroup(
      parent,
      t("colorGradient"),
      "https://cargocollective.com/superfamousimages/36-Gradients",
      COLOR_GRADIENT_COVER_ROOT,
      COLOR_GRADIENT_COVERS
    );
    this.renderBuiltInGroup(parent, "Artemis II", "https://www.nasa.gov/mission/artemis-ii/", ARTEMIS_COVER_ROOT, ARTEMIS_COVERS);
    this.renderBuiltInGroup(parent, "James Webb Telescope", "https://science.nasa.gov/mission/webb/", WEBB_COVER_ROOT, WEBB_COVERS);
    this.renderBuiltInGroup(parent, "NASA Archive", "https://www.flickr.com/photos/nasacommons/", NASA_ARCHIVE_COVER_ROOT, NASA_ARCHIVE_COVERS);
    this.renderBuiltInGroup(parent, "The MET Museum · Japanese Prints", "https://www.metmuseum.org/art/collection", MET_JAPANESE_COVER_ROOT, MET_JAPANESE_COVERS);
    this.renderBuiltInGroup(parent, "The MET Museum · Hudson River School", "https://www.metmuseum.org/art/collection", MET_HUDSON_COVER_ROOT, MET_HUDSON_COVERS);
  }

  private renderBuiltInGroup(parent: HTMLElement, title: string, href: string, root: string, presets: BuiltInCover[]): void {
    const heading = parent.createEl("a", { cls: "naitflow-gallery-heading naitflow-gallery-heading--link", text: title, href });
    heading.setAttrs({ target: "_blank", rel: "noopener noreferrer" });
    const grid = parent.createDiv("naitflow-cover-grid");
    for (const preset of presets) {
      const sourcePath = normalizePath(`${this.plugin.manifest.dir}/${root}/${preset.file}`);
      const button = grid.createEl("button", { attr: { title: preset.title } });
      const image = button.createEl("img", { attr: { src: this.app.vault.adapter.getResourcePath(sourcePath), alt: preset.title } });
      if (preset.position) image.style.objectPosition = preset.position;
      button.onclick = () => void this.chooseBuiltInCover(root, preset);
    }
  }

  private async chooseBuiltInCover(root: string, preset: BuiltInCover): Promise<void> {
    try {
      if (!this.plugin.manifest.dir) throw new Error(t("pluginFolderMissing"));
      const folder = normalizePath(`${this.plugin.settings.assetsFolder}/Covers`);
      const targetPath = normalizePath(`${folder}/${preset.file}`);
      await ensureFolder(this.app, folder);
      if (!this.app.vault.getAbstractFileByPath(targetPath)) {
        const sourcePath = normalizePath(`${this.plugin.manifest.dir}/${root}/${preset.file}`);
        await this.app.vault.createBinary(targetPath, await this.app.vault.adapter.readBinary(sourcePath));
      }
      await this.choose(targetPath);
    } catch (error) {
      new Notice(t("builtInCoverFailed", { error: errorMessage(error) }));
    }
  }

  private renderUpload(): void {
    const wrap = this.contentEl.createDiv("naitflow-upload");
    wrap.createEl("p", { text: t("uploadCoverHint") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("chooseImage") });
    const input = wrap.createEl("input", { type: "file", attr: { accept: "image/*" } });
    input.hidden = true;
    button.onclick = () => input.click();
    input.onchange = () => { const picked = input.files?.[0]; if (picked) void this.saveBrowserFile(picked); };
  }

  private renderLink(): void {
    const wrap = this.contentEl.createDiv("naitflow-link-form naitflow-link-form--stacked");
    const input = wrap.createEl("input", { type: "url", placeholder: t("imageUrlPlaceholder") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("set") });
    wrap.createEl("p", { cls: "naitflow-link-hint", text: t("webImageHint") });
    button.disabled = true;
    input.oninput = () => { button.disabled = !input.value.trim(); };
    const submit = (): void => { if (!button.disabled) void this.downloadCover(input.value); };
    button.onclick = submit;
    input.onkeydown = (event) => { if (event.key === "Enter") submit(); };
  }

  private renderUnsplash(): void {
    if (!this.plugin.settings.unsplashAccessKey) {
      const box = this.contentEl.createDiv("naitflow-empty");
      box.setText(t("unsplashKeyRequired"));
      return;
    }
    const form = this.contentEl.createDiv("naitflow-link-form");
    const input = form.createEl("input", { type: "search", placeholder: t("searchImages") });
    input.oninput = () => {
      if (this.unsplashSearchTimer !== null) window.clearTimeout(this.unsplashSearchTimer);
      this.unsplashRequestId += 1;
      const query = input.value;
      this.unsplashSearchTimer = window.setTimeout(() => {
        this.unsplashSearchTimer = null;
        void this.searchUnsplash(query);
      }, 400);
    };
    input.onkeydown = (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      if (this.unsplashSearchTimer !== null) {
        window.clearTimeout(this.unsplashSearchTimer);
        this.unsplashSearchTimer = null;
      }
      void this.searchUnsplash(input.value);
    };
    window.setTimeout(() => input.focus(), 0);
    void this.searchUnsplash("");
  }

  private async searchUnsplash(query: string): Promise<void> {
    const normalizedQuery = query.trim();
    const cacheKey = normalizedQuery.toLocaleLowerCase() || "__editorial__";
    const requestId = ++this.unsplashRequestId;
    let result = this.contentEl.querySelector<HTMLElement>(".naitflow-unsplash-results");
    result?.remove();
    result = this.contentEl.createDiv("naitflow-unsplash-results");
    const renderPhotos = (photos: UnsplashPhoto[]): void => {
      result.empty();
      const grid = result.createDiv("naitflow-cover-grid");
      for (const photo of photos) {
        const button = grid.createEl("button", { attr: { title: t("photoBy", { name: photo.user.name }) } });
        button.createEl("img", { attr: { src: photo.urls.small, alt: photo.alt_description ?? "Unsplash cover" } });
        button.createSpan({ text: photo.user.name });
        button.onclick = () => void this.downloadUnsplash(photo);
      }
      if (!photos.length) result.setText(t("nothingFound"));
    };
    const cached = this.unsplashCache.get(cacheKey);
    if (cached) {
      renderPhotos(cached);
      return;
    }
    result.setText(t("loading"));
    try {
      const endpoint = new URL(normalizedQuery ? "https://api.unsplash.com/search/photos" : "https://api.unsplash.com/photos");
      endpoint.searchParams.set("per_page", "24");
      if (normalizedQuery) {
        endpoint.searchParams.set("query", normalizedQuery);
        endpoint.searchParams.set("orientation", "landscape");
      }
      const response = await requestUrl({ url: endpoint.toString(), headers: { Authorization: `Client-ID ${this.plugin.settings.unsplashAccessKey}` } });
      if (requestId !== this.unsplashRequestId) return;
      const photos = normalizedQuery
        ? (response.json as { results?: UnsplashPhoto[] }).results ?? []
        : response.json as UnsplashPhoto[];
      this.unsplashCache.set(cacheKey, photos);
      renderPhotos(photos);
    } catch (error) {
      if (requestId !== this.unsplashRequestId) return;
      result.setText(t("unsplashError", { error: errorMessage(error) }));
    }
  }

  private async downloadUnsplash(photo: UnsplashPhoto): Promise<void> {
    try {
      await requestUrl({ url: photo.links.download_location, headers: { Authorization: `Client-ID ${this.plugin.settings.unsplashAccessKey}` } });
      await this.downloadCover(photo.urls.regular, `unsplash-${photo.id}`);
    } catch (error) {
      new Notice(t("downloadCoverFailed", { error: errorMessage(error) }));
    }
  }

  private async saveBrowserFile(file: File): Promise<void> {
    try {
      const folder = `${this.plugin.settings.assetsFolder}/Covers`;
      await ensureFolder(this.app, folder);
      const ext = file.name.split(".").pop() ?? extensionFromMime(file.type);
      const path = uniqueAssetPath(this.app, folder, file.name.replace(/\.[^.]+$/, ""), ext);
      await this.app.vault.createBinary(path, await file.arrayBuffer());
      await this.choose(path);
    } catch (error) {
      new Notice(t("saveCoverFailed", { error: errorMessage(error) }));
    }
  }

  private async downloadCover(raw: string, preferredName?: string): Promise<void> {
    try {
      const url = new URL(raw.trim());
      if (!/^https?:$/.test(url.protocol)) throw new Error(t("httpOnly"));
      const response = await requestUrl({ url: url.toString() });
      const mime = response.headers["content-type"] ?? "image/jpeg";
      if (!mime.startsWith("image/")) throw new Error(t("notImage"));
      const folder = `${this.plugin.settings.assetsFolder}/Covers`;
      await ensureFolder(this.app, folder);
      const base = preferredName ?? decodeURIComponent(url.pathname.split("/").pop() || "cover").replace(/\.[^.]+$/, "");
      const path = uniqueAssetPath(this.app, folder, base, extensionFromMime(mime));
      await this.app.vault.createBinary(path, response.arrayBuffer);
      await this.choose(path);
    } catch (error) {
      new Notice(t("loadCoverFailed", { error: errorMessage(error) }));
    }
  }

  private async choose(path: string | null): Promise<void> {
    await setField(this.app, this.file, FIELDS.cover, path);
    if (path) await setField(this.app, this.file, FIELDS.coverY, 50);
    this.plugin.refreshUi();
    this.close();
  }
}

export function renderCoverImage(app: App, image: HTMLImageElement, path: string): void {
  image.src = assetUrl(app, path);
}
