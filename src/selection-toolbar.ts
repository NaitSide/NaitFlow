import { EditorSelection, Text } from "@codemirror/state";
import { EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { editorInfoField, Menu, Platform, setIcon, setTooltip } from "obsidian";
import { t } from "./i18n";
import { markdownBlocks, MarkdownBlock } from "./markdown-blocks";

const formats = [
  { label: "selectionBold", icon: "bold", marker: "**" },
  { label: "selectionItalic", icon: "italic", marker: "_" },
  { label: "selectionStrike", icon: "strikethrough", marker: "~~" },
  { label: "selectionCode", icon: "code", marker: "`" }
] as const;

const blockTypes = [
  { label: "slashText", icon: "type", prefix: "", match: /^/ },
  { label: "slashHeading1", icon: "heading-1", prefix: "# ", match: /^#[ \t]+/ },
  { label: "slashHeading2", icon: "heading-2", prefix: "## ", match: /^##[ \t]+/ },
  { label: "slashHeading3", icon: "heading-3", prefix: "### ", match: /^###[ \t]+/ },
  { label: "slashBullet", icon: "list", prefix: "- ", match: /^[-+*][ \t]+(?!\[[ xX]\](?:\s|$))/ },
  { label: "slashNumbered", icon: "list-ordered", prefix: "1. ", match: /^\d+[.)][ \t]+/ },
  { label: "slashTodo", icon: "square-check", prefix: "- [ ] ", match: /^[-+*][ \t]+\[[ xX]\][ \t]+/ },
  { label: "slashQuote", icon: "quote", prefix: "> ", match: /^>[ \t]?/ }
] as const;

class SelectionToolbar {
  private readonly doc: Document;
  private readonly win: Window;
  private readonly events = new AbortController();
  private readonly toolbar: HTMLElement;
  private readonly typeButton: HTMLButtonElement;
  private readonly typeLabel: HTMLElement;
  private readonly formatButtons: HTMLButtonElement[];
  private menu?: Menu;
  private frame = 0;
  private pointerSelecting = false;
  private dismissed = false;
  private blockDoc?: Text;
  private blocks: MarkdownBlock[] = [];

  constructor(private readonly view: EditorView) {
    this.doc = view.dom.ownerDocument;
    this.win = this.doc.defaultView!;
    this.toolbar = this.doc.createElement("div");
    this.toolbar.className = "naitflow-selection-toolbar";
    this.toolbar.setAttribute("role", "group");
    this.toolbar.setAttribute("aria-label", t("selectionFormat"));
    this.toolbar.hidden = true;
    this.typeButton = this.button("selectionBlockType", "chevron-down", () => this.openTypeMenu());
    this.typeButton.setAttribute("aria-haspopup", "menu");
    this.typeLabel = this.doc.createElement("span");
    this.typeButton.prepend(this.typeLabel);
    this.formatButtons = formats.map(format => this.button(format.label, format.icon, () => this.format(format.marker)));
    this.formatButtons.push(this.button("selectionLink", "link", () => this.insertLink()));
    this.doc.body.append(this.toolbar);

    const { signal } = this.events;
    view.contentDOM.addEventListener("pointerdown", event => {
      this.pointerSelecting = event.button === 0;
      this.dismissed = false;
      this.hide();
    }, { signal });
    this.doc.addEventListener("pointerup", this.finishSelecting, { signal });
    this.doc.addEventListener("pointercancel", this.finishSelecting, { signal });
    this.doc.addEventListener("keydown", this.onKey, { signal, capture: true });
    this.toolbar.addEventListener("pointerdown", event => event.preventDefault(), { signal });
    this.toolbar.addEventListener("focusout", this.schedule, { signal });
    this.view.scrollDOM.addEventListener("scroll", this.schedule, { signal, passive: true });
    this.win.addEventListener("resize", this.schedule, { signal });
    this.win.addEventListener("blur", () => { this.pointerSelecting = false; this.hide(); }, { signal });
  }

  private button(label: Parameters<typeof t>[0], icon: string, action: () => void): HTMLButtonElement {
    const button = this.doc.createElement("button");
    button.type = "button";
    button.className = "clickable-icon";
    button.setAttribute("aria-label", t(label));
    setIcon(button, icon);
    setTooltip(button, t(label));
    button.addEventListener("click", action, { signal: this.events.signal });
    this.toolbar.append(button);
    return button;
  }

  update(update: ViewUpdate): void {
    if (update.selectionSet || update.docChanged) {
      this.dismissed = false;
      this.hide();
    }
    if (update.selectionSet || update.docChanged || update.focusChanged || update.geometryChanged || update.viewportChanged) this.schedule();
  }

  private readonly finishSelecting = (): void => {
    if (!this.pointerSelecting) return;
    this.pointerSelecting = false;
    this.schedule();
  };

  private readonly onKey = (event: KeyboardEvent): void => {
    if (this.toolbar.hidden || this.menu || (!this.view.hasFocus && !this.toolbar.contains(this.doc.activeElement))) return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      this.dismissed = true;
      this.hide();
      this.view.focus();
    } else if (event.key === "F10" && event.altKey && this.view.hasFocus) {
      event.preventDefault();
      this.toolbar.querySelector<HTMLButtonElement>("button:not(:disabled)")?.focus();
    }
  };

  private readonly schedule = (): void => {
    if (this.frame) return;
    this.frame = this.win.requestAnimationFrame(() => { this.frame = 0; this.render(); });
  };

  private get context() {
    const { state } = this.view;
    const { from, to } = state.selection.main;
    if (state.readOnly || !state.facet(EditorView.editable) || state.selection.ranges.length !== 1 || from === to ||
      state.field(editorInfoField, false)?.file?.extension.toLowerCase() !== "md") return null;
    const selection = state.sliceDoc(from, to);
    const value = selection.trim();
    if (!value) return null;
    if (this.blockDoc !== state.doc) {
      this.blockDoc = state.doc;
      this.blocks = markdownBlocks(state.doc.toString());
    }
    const start = from + selection.length - selection.trimStart().length;
    const end = to - (selection.length - selection.trimEnd().length);
    const block = this.blocks.find(item => start >= item.from && end <= item.to);
    if (!block || !["paragraph", "heading", "list", "quote"].includes(block.kind)) return null;
    return { from: start, to: end, value, block };
  }

  private getLineType(position: number) {
    const line = this.view.state.doc.lineAt(position);
    const indent = /^[ \t]*/.exec(line.text)![0].length;
    const text = line.text.slice(indent);
    // Leave setext headings, deeper headings and tables alone.
    const next = line.number < this.view.state.doc.lines ? this.view.state.doc.line(line.number + 1).text : "";
    if (/^#{4,6}\s|^\||^[:| -]+\|/.test(text) || /^\s*(?:=+|-{2,})\s*$/.test(next)) return null;
    const type = blockTypes.slice(1).find(item => item.match.test(text)) ?? blockTypes[0];
    const from = line.from + indent;
    return { type, from, to: from + type.match.exec(text)![0].length };
  }

  private render(): void {
    if (this.menu) return;
    if (this.dismissed || this.pointerSelecting || (!this.view.hasFocus && !this.toolbar.contains(this.doc.activeElement))) { this.hide(); return; }
    const context = this.context;
    if (!context) { this.hide(); return; }
    const start = this.view.coordsAtPos(context.from, 1);
    const end = this.view.coordsAtPos(context.to, -1);
    const pane = this.view.scrollDOM.getBoundingClientRect();
    const lineType = context.value.includes("\n") ? null : this.getLineType(context.from);
    this.typeButton.disabled = !lineType;
    this.typeLabel.textContent = t(lineType?.type.label ?? "slashText");
    const multiline = context.value.includes("\n");
    for (const [index, button] of this.formatButtons.entries()) button.disabled = multiline && (index >= 3 || context.block.kind !== "paragraph");
    if (!start || !end || pane.width < 100) { this.hide(); return; }
    const anchor = start.bottom > pane.top && start.top < pane.bottom ? start : end;
    if (anchor.bottom <= pane.top || anchor.top >= pane.bottom) { this.hide(); return; }
    this.toolbar.style.maxWidth = `${pane.width - 16}px`;
    this.toolbar.hidden = false;
    const { width, height } = this.toolbar.getBoundingClientRect();
    this.toolbar.style.left = `${Math.max(pane.left + 8, Math.min(anchor.left, pane.right - width - 8))}px`;
    this.toolbar.style.top = `${anchor.top - height - 8 >= pane.top ? anchor.top - height - 8 : Math.min(end.bottom + 8, pane.bottom - height)}px`;
  }

  private openTypeMenu(): void {
    const context = this.context;
    const line = context && this.getLineType(context.from);
    if (!line || !context || this.typeButton.disabled) return;
    const { doc, selection } = this.view.state;
    const menu = this.menu = new Menu().setUseNativeMenu(false);
    this.typeButton.setAttribute("aria-expanded", "true");
    for (const option of blockTypes) menu.addItem(item => item.setTitle(t(option.label)).setIcon(option.icon).setChecked(line.type === option)
      .onClick(() => {
        if (this.view.state.doc !== doc || !this.view.state.selection.eq(selection) || !this.context) return;
        if (line.type === option) { this.view.focus(); return; }
        this.view.dispatch({ changes: { from: line.from, to: line.to, insert: option.prefix }, userEvent: "input.format" });
        this.view.focus();
      }));
    menu.onHide(() => { this.menu = undefined; this.typeButton.removeAttribute("aria-expanded"); this.schedule(); });
    const { left, bottom } = this.typeButton.getBoundingClientRect();
    menu.showAtPosition({ x: left, y: bottom + 4 }, this.doc);
  }

  private format(marker: string): void {
    const context = this.context;
    if (!context) return;
    let { from, to, value } = context;
    const { state } = this.view;
    let prefix = marker;
    let suffix = marker;
    if (marker === "`") {
      let longest = 0;
      for (const run of value.matchAll(/`+/g)) longest = Math.max(longest, run[0].length);
      const before = /(`+) ?$/.exec(state.sliceDoc(state.doc.lineAt(from).from, from))?.[0];
      const after = /^ ?(`+)/.exec(state.sliceDoc(to, state.doc.lineAt(to).to))?.[0];
      if (before && after && before.trim() === after.trim() && before.trim().length > longest) {
        return this.replace(from - before.length, to + after.length, value, 0, value.length);
      }
      prefix = "`".repeat(longest + 1);
      suffix = prefix;
      if (/^`|`$/.test(value)) { prefix += " "; suffix = ` ${suffix}`; }
    } else {
      const size = marker.length;
      if (from >= size && state.sliceDoc(from - size, from) === marker && state.sliceDoc(to, to + size) === marker) {
        return this.replace(from - size, to + size, value, 0, value.length);
      }
      if (value.length > size * 2 && value.startsWith(marker) && value.endsWith(marker)) {
        value = value.slice(size, -size);
        return this.replace(from, to, value, 0, value.length);
      }
    }
    this.replace(from, to, `${prefix}${value}${suffix}`, prefix.length, prefix.length + value.length);
  }

  private insertLink(): void {
    const context = this.context;
    if (!context || context.value.includes("\n")) return;
    const label = context.value.replace(/([\[\]\\])/g, "\\$1");
    const cursor = label.length + 3;
    this.replace(context.from, context.to, `[${label}]()`, cursor, cursor);
  }

  private replace(from: number, to: number, insert: string, anchor: number, head: number): void {
    this.view.dispatch({ changes: { from, to, insert }, selection: EditorSelection.range(from + anchor, from + head), userEvent: "input.format" });
    this.view.focus();
  }

  private hide(): void {
    this.toolbar.hidden = true;
    this.menu?.hide();
  }

  destroy(): void {
    this.events.abort();
    this.hide();
    this.win.cancelAnimationFrame(this.frame);
    this.toolbar.remove();
  }
}

export const selectionToolbarExtension = Platform.isMobile ? [] : ViewPlugin.fromClass(SelectionToolbar);
