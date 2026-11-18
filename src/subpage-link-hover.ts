import { EditorState, StateEffect, Text } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate, WidgetType } from "@codemirror/view";
import { App, editorInfoField, editorLivePreviewField, Keymap, MarkdownRenderChild, parseLinktext, Plugin, TFile } from "obsidian";
import { renderPageIcon } from "./icon-renderer";
import { markdownBlocks } from "./markdown-blocks";
import { pageFolderPath, readPageMeta } from "./model";
import { createSubpagePreviews, subpageTargetAttribute } from "./subpage-preview";

const rowClass = "naitflow-subpage-link-row";
const spacer = Decoration.line({ class: "naitflow-subpage-link-spacer" });
const refreshTargets = StateEffect.define<null>();

function findSubpage(app: App, link: string, source: string, encoded = false): TFile | undefined {
  let { path, subpath } = parseLinktext(link);
  if (!path || subpath || /^[a-z][a-z\d+.-]*:/i.test(path)) return;
  if (encoded) {
    try { path = decodeURIComponent(path); }
    catch { return; }
  }
  const target = app.metadataCache.getFirstLinkpathDest(path, source);
  if (!target || target.extension !== "md" || target.path === source) return;
  if (target.parent?.path === pageFolderPath(source)) return target;
  // Match the tree: a physical parent takes precedence over the legacy property.
  if (target.parent && app.vault.getFileByPath(`${target.parent.path}.md`)) return;
  const parent = readPageMeta(app, target).parent;
  return parent && app.metadataCache.getFirstLinkpathDest(parent, target.path)?.path === source ? target : undefined;
}

function createIcon(app: App, document: Document, icon: string | undefined): HTMLElement {
  const el = document.createElement("span");
  el.className = "naitflow-subpage-link-icon";
  el.setAttribute("aria-hidden", "true");
  renderPageIcon(app, el, icon);
  return el;
}

function openSubpage(app: App, event: MouseEvent, target: TFile, source: string): void {
  if (event.type === "auxclick" && event.button !== 1) return;
  event.preventDefault();
  event.stopPropagation();
  void app.workspace.openLinkText(target.path, source, Keymap.isModEvent(event) || event.button === 1);
}

class SubpageLink extends WidgetType {
  private readonly path: string;
  constructor(private readonly app: App, private readonly target: TFile, private readonly source: string,
    private readonly icon: string | undefined) {
    super();
    this.path = target.path;
  }

  override eq(other: SubpageLink): boolean {
    return this.target === other.target && this.path === other.path && this.source === other.source && this.icon === other.icon;
  }

  override toDOM(view: EditorView): HTMLElement {
    const doc = view.dom.ownerDocument;
    const link = doc.createElement("a");
    link.className = "internal-link naitflow-subpage-link";
    link.setAttribute("href", this.path);
    link.draggable = false;
    link.append(createIcon(this.app, doc, this.icon), this.target.basename);
    link.onclick = link.onauxclick = (event) => openSubpage(this.app, event, this.target, this.source);
    return link;
  }
}

function standaloneLinks(doc: string): Map<number, { target: string; encoded: boolean }> {
  const links = new Map<number, { target: string; encoded: boolean }>();
  for (const block of markdownBlocks(doc)) {
    if (block.kind !== "paragraph") continue;
    let from = block.from;
    for (const line of doc.slice(block.from, block.to).split("\n")) {
      const text = line.trim();
      const wiki = /^\[\[([^\]\n|]+)(?:\|[^\]\n]*)?\]\]$/.exec(text)?.[1];
      const markdown = /^\[[^\]\n]*\]\((?:<([^<>\n]+)>|([^\s()]+))\)$/.exec(text);
      const target = wiki ?? markdown?.[1] ?? markdown?.[2];
      if (target) links.set(from, { target, encoded: !wiki });
      from += line.length + 1;
    }
  }
  return links;
}

function readingPageLinks(paragraph: HTMLElement): HTMLElement[] {
  const links: HTMLElement[] = [];
  let startsLine = true;
  for (const node of paragraph.childNodes) {
    if (node.nodeType === 3 && !node.textContent?.trim()) {
      if (node.textContent?.includes("\n")) startsLine = true;
    } else if (node.nodeType === 1 && (node as Element).matches("br")) {
      startsLine = true;
    } else if (startsLine && node.nodeType === 1 && (node as Element).matches("a.internal-link")) {
      links.push(node as HTMLElement);
      startsLine = false;
    } else return [];
  }
  return links;
}

export function registerSubpageLinkHover(plugin: Plugin): void {
  const { app } = plugin;
  const previewFor = createSubpagePreviews(plugin);
  const editors = new Set<EditorView>();
  const linkCache = new WeakMap<Text, ReturnType<typeof standaloneLinks>>();
  const linksFor = (doc: Text): ReturnType<typeof standaloneLinks> => {
    const cached = linkCache.get(doc);
    if (cached) return cached;
    const links = standaloneLinks(doc.toString());
    linkCache.set(doc, links);
    return links;
  };
  const targetAt = (state: EditorState, from: number, source: string): TFile | undefined => {
    const link = linksFor(state.doc).get(from);
    return link && findSubpage(app, link.target, source, link.encoded);
  };
  const moveCaret = EditorState.transactionFilter.of(tr => {
    const { startState } = tr;
    const source = startState.field(editorInfoField, false)?.file?.path;
    if (!source || !startState.field(editorLivePreviewField, false)) return tr;
    const { doc } = startState;
    if (tr.docChanged || !tr.selection || !tr.isUserEvent("select") || tr.selection.ranges.length !== 1 || !tr.selection.main.empty) return tr;
    const cursor = tr.selection.main.head;
    const line = doc.lineAt(cursor);
    if (!targetAt(startState, line.from, source)) return tr;
    // Jump across whole rows without including the line breaks in the deletable atomic range.
    const direction = cursor < startState.selection.main.head ? -1 : 1;
    for (const step of [direction, -direction]) {
      for (let n = line.number + step; n >= 1 && n <= doc.lines; n += step) {
        const other = doc.line(n);
        if (!targetAt(startState, other.from, source)) {
          return [tr, { selection: { anchor: step > 0 ? other.from : other.to } }];
        }
      }
    }
    return tr;
  });
  const linkWidgets = ViewPlugin.fromClass(class {
    decorations = Decoration.none;
    hideCaret = false;
    private source: string | undefined;

    constructor(private readonly view: EditorView) { editors.add(view); this.refresh(view); }

    destroy(): void {
      editors.delete(this.view);
      previewFor(this.view.dom.ownerDocument, false)?.dismissWithin(this.view.dom);
    }

    update(update: ViewUpdate): void {
      const source = update.state.field(editorInfoField, false)?.file?.path;
      const modeChanged = update.startState.field(editorLivePreviewField, false) !== update.state.field(editorLivePreviewField, false);
      const targetsChanged = update.transactions.some(tr => tr.effects.some(effect => effect.is(refreshTargets)));
      if (update.docChanged || update.viewportChanged || source !== this.source || modeChanged || targetsChanged) {
        previewFor(update.view.dom.ownerDocument, false)?.dismissWithin(update.view.dom);
      }
      if (update.docChanged || update.viewportChanged || update.selectionSet || source !== this.source || modeChanged || targetsChanged) {
        this.refresh(update.view);
      }
    }

    private refresh(view: EditorView): void {
      this.source = view.state.field(editorInfoField, false)?.file?.path;
      const source = this.source;
      if (!source || !view.state.field(editorLivePreviewField, false)) {
        this.decorations = Decoration.none;
        this.hideCaret = false;
        return;
      }
      previewFor(view.dom.ownerDocument);
      const { main, ranges } = view.state.selection;
      this.hideCaret = ranges.length === 1 && main.empty && !!targetAt(view.state, view.state.doc.lineAt(main.head).from, source);
      this.decorations = this.visibleDecorations(view, source);
    }

    private visibleDecorations(view: EditorView, source: string): DecorationSet {
      const { doc } = view.state;
      const decorations = [];
      let previous = 0;
      for (const [from, link] of linksFor(doc)) {
        if (!view.visibleRanges.some(range => from >= range.from && from < range.to)) continue;
        const target = findSubpage(app, link.target, source, link.encoded);
        if (!target) continue;
        const line = doc.lineAt(from);
        if (previous && line.number === previous + 2 && !doc.line(previous + 1).text.trim()) {
          const gap = doc.line(previous + 1);
          if (!view.state.selection.ranges.some(range => range.from <= gap.to && range.to >= gap.from)) {
            decorations.push(spacer.range(gap.from));
          }
        }
        decorations.push(Decoration.line({ class: rowClass, attributes: { [subpageTargetAttribute]: target.path } }).range(line.from));
        const widget = new SubpageLink(app, target, source, readPageMeta(app, target).icon);
        decorations.push(Decoration.replace({ widget }).range(line.from, line.to));
        previous = line.number;
      }
      return Decoration.set(decorations, true);
    }
  }, {
    decorations: view => view.decorations,
    provide: extension => [
      EditorView.atomicRanges.of(view => view.plugin(extension)?.decorations ?? Decoration.none),
      EditorView.editorAttributes.of(view => view.plugin(extension)?.hideCaret ? { class: "naitflow-subpage-caret-hidden" } : null),
      EditorView.inputHandler.of((view, from, to) => from === to && view.plugin(extension)?.hideCaret === true)
    ]
  });
  plugin.registerEditorExtension([linkWidgets, moveCaret]);

  const readingRows = new Map<HTMLElement, { target: TFile; refresh: () => void; restore: () => void }>();
  const cleanRow = (row: HTMLElement, restore: () => void): void => {
    previewFor(row.ownerDocument, false)?.dismissWithin(row);
    restore();
    row.classList.remove(rowClass);
    row.removeAttribute(subpageTargetAttribute);
    const group = row.parentElement;
    if (group?.classList.contains("naitflow-subpage-link-group") && !group.querySelector(`:scope > .${rowClass}`)) {
      group.classList.remove("naitflow-subpage-link-group");
    }
    readingRows.delete(row);
  };
  let refreshQueued = false;
  let disposed = false;
  const refreshEditors = (): void => {
    if (refreshQueued) return;
    refreshQueued = true;
    queueMicrotask(() => {
      refreshQueued = false;
      if (!disposed) for (const editor of editors) editor.dispatch({ effects: refreshTargets.of(null) });
    });
  };
  plugin.registerEvent(app.metadataCache.on("resolved", refreshEditors));
  plugin.registerEvent(app.vault.on("rename", file => {
    refreshEditors();
    for (const entry of readingRows.values()) if (entry.target === file) entry.refresh();
  }));
  plugin.registerMarkdownPostProcessor((el, ctx) => {
    if (!ctx.sourcePath.endsWith(".md")) return;
    const paragraphs = el.matches("p") ? [el] : Array.from(el.querySelectorAll<HTMLElement>("p"));
    for (const paragraph of paragraphs) {
      if (paragraph.closest("li, blockquote") || readingRows.has(paragraph)) continue;
      const links = readingPageLinks(paragraph);
      if (!links.length || links.some(link => readingRows.has(link))) continue;
      const targets = links.map(link => {
        const href = link.getAttribute("data-href") ?? link.getAttribute("href");
        return href ? findSubpage(app, href, ctx.sourcePath) : undefined;
      });
      if (targets.some(target => !target)) continue;
      const grouped = links.length > 1;
      if (grouped) paragraph.classList.add("naitflow-subpage-link-group");
      const child = new MarkdownRenderChild(paragraph);
      for (const [index, link] of links.entries()) {
        const target = targets[index]!;
        const row = grouped ? link : paragraph;
        const original = Array.from(link.childNodes);
        const refresh = (): void => {
          previewFor(row.ownerDocument, false)?.dismissWithin(row);
          link.replaceChildren(createIcon(app, row.ownerDocument, readPageMeta(app, target).icon), target.basename);
          if (previewFor(row.ownerDocument)) row.setAttribute(subpageTargetAttribute, target.path);
        };
        const open = (event: MouseEvent): void => openSubpage(app, event, target, ctx.sourcePath);
        link.addEventListener("click", open);
        link.addEventListener("auxclick", open);
        row.classList.add(rowClass);
        refresh();
        const restore = (): void => {
          link.removeEventListener("click", open);
          link.removeEventListener("auxclick", open);
          link.replaceChildren(...original);
        };
        readingRows.set(row, { target, refresh, restore });
        child.register(() => {
          if (readingRows.get(row)?.restore === restore) cleanRow(row, restore);
        });
      }
      ctx.addChild(child);
    }
  });
  plugin.register(() => {
    disposed = true;
    for (const [row, entry] of readingRows) cleanRow(row, entry.restore);
  });
}
