import { App, getFrontMatterInfo, Platform, Plugin, TFile } from "obsidian";
import { renderPageIcon } from "./icon-renderer";
import { displayName, readPageMeta } from "./model";

export const subpageTargetAttribute = "data-naitflow-subpage-target";
const rowSelector = `[${subpageTargetAttribute}]`;

function rowAt(target: EventTarget | null): HTMLElement | null {
  const node = target as Element | null;
  return node?.closest?.<HTMLElement>(rowSelector) ?? null;
}

function excerpt(markdown: string): string {
  const start = getFrontMatterInfo(markdown).contentStart;
  return markdown.slice(start, start + 2600)
    .replace(/!\[\[[^\]\n]+\]\]|!\[[^\]\n]*\]\([^\n)]*\)/g, "")
    .replace(/^\s*\r?\n/gm, "\n")
    .replace(/^ {0,3}(?:#{1,6}|>|[-*+]|\d+\.)[ \t]+/gm, "")
    .replace(/\[\[([^\]\n|]+)(?:\|([^\]\n]*))?\]\]/g, (_match: string, path: string, alias?: string) => alias || path.split("/").pop() || "")
    .replace(/\[([^\]\n]+)\]\([^\n)]*\)/g, "$1")
    .replace(/\*\*|__|`|~~/g, "").trim().slice(0, 420);
}

function breadcrumb(file: TFile): string {
  const segments = file.path.split("/").slice(0, -1);
  return (segments.length > 2 ? [segments[0], "…", segments[segments.length - 1]] : segments).join(" › ");
}

class SubpagePreview {
  private readonly listeners = new AbortController();
  private readonly win: Window;
  private row?: HTMLElement;
  private target?: TFile;
  private timer?: number;
  private card?: HTMLElement;
  private generation = 0;

  constructor(private readonly app: App, private readonly doc: Document, win: Window) {
    this.win = win;
    const capture = { capture: true, signal: this.listeners.signal };
    doc.addEventListener("mouseover", this.onOver, capture);
    doc.addEventListener("mouseout", this.onOut, capture);
    doc.addEventListener("mouseleave", this.onDocumentLeave, capture);
    doc.addEventListener("pointerdown", this.hide, capture);
    doc.addEventListener("focusin", this.hide, capture);
    doc.addEventListener("scroll", this.hide, capture);
    doc.addEventListener("keydown", this.onKey, capture);
    win.addEventListener("resize", this.hide, capture);
    win.addEventListener("blur", this.hide, capture);
  }

  private readonly onOver = (event: MouseEvent): void => {
    const row = rowAt(event.target);
    const path = row?.getAttribute(subpageTargetAttribute);
    const target = path ? this.app.vault.getFileByPath(path) : null;
    if (!row || !target || event.buttons || !this.win.matchMedia("(hover: hover)").matches) return;
    // Obsidian's editor and reading view open Page preview on mouseover.
    // Consume only this event for decorated rows. Click and editor input stay native.
    event.stopPropagation();
    if (this.row === row && this.target === target) return;
    this.hide();
    this.row = row;
    this.target = target;
    const generation = this.generation;
    this.timer = this.win.setTimeout(() => {
      this.timer = undefined;
      void this.show(row, target, generation);
    }, 360);
  };

  private readonly onOut = (event: MouseEvent): void => {
    if (this.row && rowAt(event.target) === this.row && rowAt(event.relatedTarget) !== this.row) this.hide();
  };

  private readonly onDocumentLeave = (event: MouseEvent): void => { if (event.target === this.doc) this.hide(); };

  private readonly onKey = (event: KeyboardEvent): void => { if (event.key === "Escape") this.hide(); };

  private async show(row: HTMLElement, file: TFile, generation: number): Promise<void> {
    let text: string;
    try { text = excerpt(await this.app.vault.cachedRead(file)); }
    catch { return; }
    if (generation !== this.generation || !row.isConnected ||
        row.getAttribute(subpageTargetAttribute) !== file.path) return;
    const meta = readPageMeta(this.app, file);
    const card = this.doc.body.createDiv({ cls: "naitflow-subpage-preview", attr: { "aria-hidden": "true" } });
    this.card = card;
    const cover = meta.cover ? this.app.vault.getFileByPath(meta.cover) : null;
    if (cover) {
      const image = card.createEl("img", { cls: "naitflow-subpage-preview-cover", attr: { src: this.app.vault.getResourcePath(cover), alt: "" } });
      image.style.objectPosition = `center ${meta.coverY}%`;
    }
    const content = card.createDiv("naitflow-subpage-preview-content");
    renderPageIcon(this.app, content.createSpan("naitflow-subpage-preview-icon"), meta.icon);
    const path = breadcrumb(file);
    if (path) content.createDiv({ cls: "naitflow-subpage-preview-path", text: path });
    content.createDiv({ cls: "naitflow-subpage-preview-title", text: displayName(file) });
    if (text) content.createDiv({ cls: "naitflow-subpage-preview-text", text });

    const edge = 8;
    const anchor = row.getBoundingClientRect();
    const below = anchor.bottom + 6;
    const above = anchor.top - 6;
    const spaceBelow = this.win.innerHeight - edge - below;
    const spaceAbove = above - edge;
    const placeBelow = spaceBelow >= card.offsetHeight || spaceBelow >= spaceAbove;
    const available = placeBelow ? spaceBelow : spaceAbove;
    if (available < 64) { this.hide(); return; }
    card.style.maxHeight = `${available}px`;
    const box = card.getBoundingClientRect();
    const top = placeBelow ? below : above - box.height;
    card.style.left = `${Math.max(edge, Math.min(anchor.left + 4, this.win.innerWidth - box.width - edge))}px`;
    card.style.top = `${Math.max(edge, Math.min(top, this.win.innerHeight - box.height - edge))}px`;
  }

  dismissWithin(root: HTMLElement): void { if (this.row && root.contains(this.row)) this.hide(); }

  private readonly hide = (): void => {
    this.generation++;
    if (this.timer !== undefined) this.win.clearTimeout(this.timer);
    this.timer = undefined;
    this.card?.remove();
    this.card = this.row = this.target = undefined;
  };

  destroy(): void {
    this.hide();
    this.listeners.abort();
  }
}

export function createSubpagePreviews(plugin: Plugin): (doc: Document, create?: boolean) => SubpagePreview | undefined {
  const previews = new Map<Document, SubpagePreview>();
  let disposed = false;
  plugin.registerEvent(plugin.app.workspace.on("window-close", (_workspaceWindow, window) => {
    previews.get(window.document)?.destroy();
    previews.delete(window.document);
  }));
  plugin.register(() => {
    disposed = true;
    for (const preview of previews.values()) preview.destroy();
    previews.clear();
  });
  return (doc, create = true) => {
    if (disposed || Platform.isMobile || !doc.defaultView) return;
    let preview = previews.get(doc);
    if (!preview && create) {
      preview = new SubpagePreview(plugin.app, doc, doc.defaultView);
      previews.set(doc, preview);
    }
    return preview;
  };
}
