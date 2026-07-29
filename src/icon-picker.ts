import emojiData from "@emoji-mart/data";
import { App, getIconIds, Modal, Notice, requestUrl, setIcon, TFile } from "obsidian";
import type NaitFlowPlugin from "./main";
import { ensureFolder, FIELDS, setField, uniqueAssetPath } from "./model";
import { t } from "./i18n";

type EmojiRecord = { id: string; name: string; keywords?: string[]; skins: Array<{ native: string }> };
type EmojiCategory = { id: string; name: string; emojis: string[] };
type EmojiMartData = { emojis: Record<string, EmojiRecord>; categories: EmojiCategory[] };
type EmojiItem = { record: EmojiRecord; native: string };
type EmojiSection = { id: string; name: string; items: EmojiItem[]; top: number; end: number };
type VirtualBlock =
  | { kind: "heading"; top: number; height: number; section: EmojiSection }
  | { kind: "emoji-row"; top: number; height: number; section: EmojiSection; items: EmojiItem[] }
  | { kind: "icon-row"; top: number; height: number; ids: string[] };

const EMOJI_CATEGORY_ICONS: Record<string, string> = {
  recent: "clock",
  people: "smile",
  nature: "leaf",
  foods: "utensils",
  activity: "dumbbell",
  places: "plane",
  objects: "lightbulb",
  symbols: "shapes",
  flags: "flag"
};

export class IconPickerModal extends Modal {
  private tab: "emoji" | "icons" | "upload" | "link" = "emoji";
  private query = "";
  private category = "recent";
  private pickerResizeObserver: ResizeObserver | null = null;
  private virtualFrame = 0;

  constructor(app: App, private readonly plugin: NaitFlowPlugin, private readonly file: TFile) {
    super(app);
  }

  override onOpen(): void {
    this.modalEl.addClass("naitflow-modal", "naitflow-icon-modal");
    this.render();
  }

  override onClose(): void {
    this.teardownVirtualization();
  }

  private render(): void {
    this.teardownVirtualization();
    const content = this.contentEl;
    content.empty();
    const tabs = content.createDiv("naitflow-tabs");
    this.addTab(tabs, "emoji", t("emoji"));
    this.addTab(tabs, "icons", t("icons"));
    this.addTab(tabs, "upload", t("upload"));
    this.addTab(tabs, "link", t("link"));
    const clear = tabs.createEl("button", { cls: "naitflow-tab naitflow-tab--clear" });
    const clearIcon = clear.createSpan("naitflow-tab-icon");
    setIcon(clearIcon, "circle-minus");
    clear.createSpan({ cls: "naitflow-tab-clear-label", text: t("clear") });
    clear.onclick = () => void this.choose(null);

    if (this.tab === "emoji" || this.tab === "icons") this.renderGrid(content);
    else if (this.tab === "upload") this.renderUpload(content);
    else this.renderLink(content);
  }

  private addTab(parent: HTMLElement, id: typeof this.tab, label: string): void {
    const button = parent.createEl("button", { cls: `naitflow-tab${this.tab === id ? " is-active" : ""}` });
    button.createSpan({ text: label });
    button.onclick = () => { this.tab = id; this.query = ""; this.render(); };
  }

  private renderGrid(content: HTMLElement): void {
    const tools = content.createDiv("naitflow-picker-tools");
    const searchWrap = tools.createDiv("naitflow-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    setIcon(searchIcon, "search");
    const search = searchWrap.createEl("input", { cls: "naitflow-search", type: "search", placeholder: this.tab === "emoji" ? t("searchEmoji") : t("searchIcons"), value: this.query });
    search.oninput = () => { this.query = search.value; this.renderGridBody(content); };
    this.renderGridBody(content);
    window.setTimeout(() => search.focus(), 0);
  }

  private renderGridBody(content: HTMLElement): void {
    this.teardownVirtualization();
    let old = content.querySelector(".naitflow-picker-body");
    old?.remove();
    old = content.querySelector(".naitflow-categories");
    old?.remove();

    const body = content.createDiv("naitflow-picker-body");
    const query = this.query.trim().toLocaleLowerCase();
    if (this.tab === "emoji") this.renderEmojiBrowser(content, body, query);
    else this.renderIconBrowser(body, query);
  }

  private renderEmojiBrowser(content: HTMLElement, body: HTMLElement, query: string): void {
    const data = emojiData as unknown as EmojiMartData;
    const allRecords = Object.values(data.emojis);
    const byNative = new Map<string, EmojiRecord>();
    for (const record of allRecords) {
      const native = record.skins[0]?.native;
      if (native) byNative.set(native, record);
    }

    const matches = (record: EmojiRecord): boolean => !query || `${record.id} ${record.name} ${(record.keywords ?? []).join(" ")}`.toLocaleLowerCase().includes(query);
    const sections: EmojiSection[] = [];
    const recentItems: EmojiItem[] = [];
    const seenRecent = new Set<string>();
    for (const native of this.plugin.settings.recentEmoji) {
      if (seenRecent.has(native)) continue;
      const record = byNative.get(native);
      if (!record || !matches(record)) continue;
      seenRecent.add(native);
      recentItems.push({ record, native });
    }
    if (recentItems.length) sections.push({ id: "recent", name: t("recent"), items: recentItems, top: 0, end: 0 });

    for (const source of data.categories) {
      const items: EmojiItem[] = [];
      for (const id of source.emojis) {
        const record = data.emojis[id];
        const native = record?.skins[0]?.native;
        if (!record || !native || !matches(record)) continue;
        items.push({ record, native });
      }
      if (items.length) sections.push({ id: source.id, name: categoryName(source.id, source.name), items, top: 0, end: 0 });
    }

    const categories = content.createDiv("naitflow-categories");
    const categoryButtons = new Map<string, HTMLButtonElement>();
    const options = [{ id: "recent", name: t("recent") }, ...data.categories.map((item) => ({ id: item.id, name: categoryName(item.id, item.name) }))];
    const surface = body.createDiv("naitflow-virtual-surface");
    let currentSections = sections;

    const updatePressed = (): void => {
      for (const [id, button] of categoryButtons) {
        const active = id === this.category;
        button.toggleClass("is-active", active);
        button.setAttr("aria-pressed", String(active));
      }
    };

    for (const option of options) {
      const button = categories.createEl("button", { attr: { "aria-label": option.name, "aria-pressed": "false" } });
      setIcon(button, EMOJI_CATEGORY_ICONS[option.id] ?? "circle");
      categoryButtons.set(option.id, button);
      button.disabled = !sections.some((section) => section.id === option.id);
      button.onclick = () => {
        const section = currentSections.find((item) => item.id === option.id);
        if (!section) return;
        this.category = option.id;
        body.scrollTo({ top: section.top });
        updatePressed();
      };
    }
    body.after(categories);

    let blocks: VirtualBlock[] = [];
    let lastRange = "";
    const rebuildLayout = (): void => {
      const columns = this.columnCount(body);
      const nextBlocks: VirtualBlock[] = [];
      let top = 2;
      for (const section of sections) {
        section.top = top;
        nextBlocks.push({ kind: "heading", top, height: 24, section });
        top += 24;
        for (let index = 0; index < section.items.length; index += columns) {
          nextBlocks.push({ kind: "emoji-row", top, height: 40, section, items: section.items.slice(index, index + columns) });
          top += 42;
        }
        top += 6;
        section.end = top;
      }
      currentSections = sections;
      blocks = nextBlocks;
      surface.style.height = `${Math.max(top + 2, 80)}px`;
      lastRange = "";
      renderVisible();
    };

    const renderVisible = (): void => {
      const viewportTop = body.scrollTop;
      const viewportBottom = viewportTop + body.clientHeight;
      const visible = blocks.filter((block) => block.top + block.height >= viewportTop - 120 && block.top <= viewportBottom + 120);
      const range = visible.map((block) => `${block.kind}:${block.top}`).join("|");
      if (range !== lastRange) {
        lastRange = range;
        surface.empty();
        for (const block of visible) {
          if (block.kind === "heading") {
            const heading = surface.createDiv({ cls: "naitflow-virtual-heading", text: block.section.name });
            heading.style.top = `${block.top}px`;
            continue;
          }
          if (block.kind !== "emoji-row") continue;
          const row = surface.createDiv("naitflow-virtual-row");
          row.style.top = `${block.top}px`;
          row.style.gridTemplateColumns = `repeat(${this.columnCount(body)}, minmax(0, 1fr))`;
          for (const item of block.items) {
            const button = row.createEl("button", { cls: "naitflow-emoji-button", attr: { "aria-label": item.record.name } });
            button.createSpan({ cls: "naitflow-emoji", text: item.native });
            button.onclick = () => void this.choose(`emoji:${item.native}`);
          }
        }
      }

      const active = [...sections].reverse().find((section) => section.top <= viewportTop + 28) ?? sections[0];
      if (active && this.category !== active.id) {
        this.category = active.id;
        updatePressed();
      }
    };

    if (!sections.length) {
      surface.style.height = "80px";
      surface.createDiv({ cls: "naitflow-empty", text: t("nothingFound") });
    } else {
      if (!sections.some((section) => section.id === this.category)) this.category = sections[0]?.id ?? "recent";
      updatePressed();
      rebuildLayout();
      body.onscroll = () => this.scheduleVirtualRender(renderVisible);
      this.pickerResizeObserver = new ResizeObserver(rebuildLayout);
      this.pickerResizeObserver.observe(body);
    }
  }

  private renderIconBrowser(body: HTMLElement, query: string): void {
    const ids = getIconIds().filter((id) => !query || id.toLocaleLowerCase().includes(query));
    const recent = new Set(this.plugin.settings.recentIcons);
    ids.sort((a, b) => Number(recent.has(b)) - Number(recent.has(a)) || a.localeCompare(b));
    const surface = body.createDiv("naitflow-virtual-surface");
    let blocks: VirtualBlock[] = [];
    let lastRange = "";

    const rebuildLayout = (): void => {
      const columns = this.columnCount(body);
      const nextBlocks: VirtualBlock[] = [];
      let top = 2;
      for (let index = 0; index < ids.length; index += columns) {
        nextBlocks.push({ kind: "icon-row", top, height: 40, ids: ids.slice(index, index + columns) });
        top += 42;
      }
      blocks = nextBlocks;
      surface.style.height = `${Math.max(top + 2, 80)}px`;
      lastRange = "";
      renderVisible();
    };

    const renderVisible = (): void => {
      const viewportTop = body.scrollTop;
      const viewportBottom = viewportTop + body.clientHeight;
      const visible = blocks.filter((block) => block.kind === "icon-row" && block.top + block.height >= viewportTop - 120 && block.top <= viewportBottom + 120);
      const range = visible.map((block) => block.top).join("|");
      if (range === lastRange) return;
      lastRange = range;
      surface.empty();
      for (const block of visible) {
        if (block.kind !== "icon-row") continue;
        const row = surface.createDiv("naitflow-virtual-row");
        row.style.top = `${block.top}px`;
        row.style.gridTemplateColumns = `repeat(${this.columnCount(body)}, minmax(0, 1fr))`;
        for (const id of block.ids) {
          const button = row.createEl("button", { cls: "naitflow-lucide-button", attr: { "aria-label": id } });
          setIcon(button, id);
          button.onclick = () => void this.choose(`lucide:${id}`);
        }
      }
    };

    if (!ids.length) {
      surface.style.height = "80px";
      surface.createDiv({ cls: "naitflow-empty", text: t("nothingFound") });
      return;
    }
    rebuildLayout();
    body.onscroll = () => this.scheduleVirtualRender(renderVisible);
    this.pickerResizeObserver = new ResizeObserver(rebuildLayout);
    this.pickerResizeObserver.observe(body);
  }

  private columnCount(body: HTMLElement): number {
    const available = Math.max(40, body.clientWidth - 24);
    return Math.max(1, Math.floor((available + 2) / 42));
  }

  private scheduleVirtualRender(render: () => void): void {
    window.cancelAnimationFrame(this.virtualFrame);
    this.virtualFrame = window.requestAnimationFrame(render);
  }

  private teardownVirtualization(): void {
    this.pickerResizeObserver?.disconnect();
    this.pickerResizeObserver = null;
    window.cancelAnimationFrame(this.virtualFrame);
    this.virtualFrame = 0;
  }

  private renderUpload(content: HTMLElement): void {
    const wrap = content.createDiv("naitflow-upload");
    wrap.createEl("p", { text: t("uploadIconHint") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("chooseImage") });
    const input = wrap.createEl("input", { type: "file", attr: { accept: "image/png,image/jpeg,image/webp,image/gif,image/svg+xml" } });
    input.hidden = true;
    button.onclick = () => input.click();
    input.onchange = () => { const picked = input.files?.[0]; if (picked) void this.saveBrowserFile(picked); };
  }

  private renderLink(content: HTMLElement): void {
    const wrap = content.createDiv("naitflow-link-form naitflow-link-form--stacked");
    const input = wrap.createEl("input", { type: "url", placeholder: t("imageUrlPlaceholder") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("set") });
    wrap.createEl("p", { cls: "naitflow-link-hint", text: t("directImageHint") });
    button.disabled = true;
    input.oninput = () => { button.disabled = !input.value.trim(); };
    const submit = (): void => { if (!button.disabled) void this.downloadUrl(input.value); };
    button.onclick = submit;
    input.onkeydown = (event) => { if (event.key === "Enter") submit(); };
  }

  private async saveBrowserFile(file: File): Promise<void> {
    try {
      const folder = `${this.plugin.settings.assetsFolder}/Icons`;
      await ensureFolder(this.app, folder);
      const ext = file.name.split(".").pop() ?? extensionFromMime(file.type);
      const path = uniqueAssetPath(this.app, folder, file.name.replace(/\.[^.]+$/, ""), ext);
      await this.app.vault.createBinary(path, await file.arrayBuffer());
      await this.choose(`image:${path}`);
    } catch (error) {
      new Notice(t("saveIconFailed", { error: errorMessage(error) }));
    }
  }

  private async downloadUrl(raw: string): Promise<void> {
    try {
      const url = new URL(raw.trim());
      if (!/^https?:$/.test(url.protocol)) throw new Error(t("httpOnly"));
      const response = await requestUrl({ url: url.toString() });
      const mime = response.headers["content-type"] ?? "image/png";
      if (!mime.startsWith("image/")) throw new Error(t("notImage"));
      const folder = `${this.plugin.settings.assetsFolder}/Icons`;
      await ensureFolder(this.app, folder);
      const name = decodeURIComponent(url.pathname.split("/").pop() || "icon").replace(/\.[^.]+$/, "");
      const path = uniqueAssetPath(this.app, folder, name, extensionFromMime(mime));
      await this.app.vault.createBinary(path, response.arrayBuffer);
      await this.choose(`image:${path}`);
    } catch (error) {
      new Notice(t("downloadIconFailed", { error: errorMessage(error) }));
    }
  }

  private async choose(value: string | null): Promise<void> {
    await setField(this.app, this.file, FIELDS.icon, value);
    if (value?.startsWith("emoji:")) this.plugin.pushRecent("emoji", value.slice(6));
    if (value?.startsWith("lucide:")) this.plugin.pushRecent("icons", value.slice(7));
    await this.plugin.saveSettings();
    this.plugin.refreshUi();
    this.close();
  }
}

function categoryName(id: string, fallback: string): string {
  const names: Record<string, string> = { people: t("people"), nature: t("animals"), foods: t("food"), activity: t("activity"), places: t("places"), objects: t("objects"), symbols: t("symbols"), flags: t("flags") };
  return names[id] ?? fallback;
}

export function extensionFromMime(mime: string): string {
  if (mime.includes("svg")) return "svg";
  if (mime.includes("jpeg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  return "png";
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
