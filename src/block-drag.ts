import { EditorSelection, StateEffect, StateField, Text } from "@codemirror/state";
import { Decoration, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";
import { editorInfoField, editorLivePreviewField, Menu, Notice, setIcon, setTooltip } from "obsidian";
import { t } from "./i18n";
import { markdownBlocks, MarkdownBlock, moveMarkdownBlock } from "./markdown-blocks";
import { setNotionIcon } from "./notion-icons";

interface DragState {
  doc: Text;
  source: number;
  pointer: number;
  startX: number;
  startY: number;
  x: number;
  y: number;
  moved: boolean;
  boundary: number | null;
}

const selectBlock = StateEffect.define<readonly MarkdownBlock[] | null>();
const bulletBlockStart = Decoration.line({ class: "naitflow-bullet-block-start" });
const bulletBlockEnd = Decoration.line({ class: "naitflow-bullet-block-end" });
const paragraphBlockStart = Decoration.line({ class: "naitflow-paragraph-block-start" });
const paragraphBlockEnd = Decoration.line({ class: "naitflow-paragraph-block-end" });
const selectedBlock = StateField.define<readonly MarkdownBlock[] | null>({
  create: () => null,
  update(block, tr) {
    for (const effect of tr.effects) if (effect.is(selectBlock)) return effect.value;
    return tr.docChanged ? null : block;
  },
  provide: field => EditorView.decorations.compute([field], state => {
    const blocks = state.field(field);
    if (!blocks) return Decoration.none;
    const rows = [];
    for (const block of blocks) {
      const first = state.doc.lineAt(block.from).number;
      const last = state.doc.lineAt(block.to).number;
      const type = block.listKind === "bullet" ? " is-bulleted" : block.kind === "paragraph" ? " is-paragraph" : "";
      for (let n = first; n <= last; n++) {
        const edges = `${n === first ? " is-first" : ""}${n === last ? " is-last" : ""}`;
        rows.push(Decoration.line({ class: `naitflow-block-selected${type}${edges}` }).range(state.doc.line(n).from));
      }
    }
    return Decoration.set(rows);
  })
});

class BlockDragView {
  blockSpacing = Decoration.none;
  private readonly document: Document;
  private readonly win: Window;
  private readonly controls: HTMLElement;
  private readonly add: HTMLButtonElement;
  private readonly handle: HTMLButtonElement;
  private readonly indicator: HTMLElement;
  private blocks: MarkdownBlock[] | null = null;
  private current: number | null = null;
  private drag: DragState | null = null;
  private rangeDrag?: { pointer: number; anchor: number; end: number | null; x: number; y: number; fromBelow: boolean };
  private menu?: Menu;
  private frame = 0;
  private leaveTimer?: number;

  constructor(private readonly view: EditorView) {
    this.document = view.dom.ownerDocument;
    this.win = this.document.defaultView!;
    this.controls = this.document.createElement("div");
    this.controls.className = "naitflow-block-controls";
    this.add = this.document.createElement("button");
    this.add.type = "button";
    this.add.className = "clickable-icon naitflow-block-add";
    this.add.setAttribute("aria-label", t("blockAddLabel"));
    setIcon(this.add, "plus");
    setTooltip(this.add, t("blockAddHint"), { placement: "bottom" });
    this.handle = this.document.createElement("button");
    this.handle.type = "button";
    this.handle.className = "clickable-icon naitflow-block-handle";
    setTooltip(this.handle, t("blockDragHint"), { placement: "bottom", classes: ["naitflow-block-handle-tooltip"], gap: 6 });
    this.handle.setAttribute("aria-haspopup", "menu");
    this.handle.setAttribute("aria-keyshortcuts", "Alt+ArrowUp Alt+ArrowDown");
    this.handle.draggable = false;
    setNotionIcon(this.handle, "drag-handle");
    this.indicator = this.document.createElement("div");
    this.indicator.className = "naitflow-block-drop-line";
    this.indicator.setAttribute("aria-hidden", "true");
    this.controls.hidden = this.indicator.hidden = true;
    this.controls.append(this.add, this.handle);
    this.document.body.append(this.controls, this.indicator);
    this.document.addEventListener("pointerdown", this.clearBlockOnPointer, true);
    view.dom.addEventListener("pointermove", this.onHover);
    view.dom.addEventListener("pointerdown", this.onRangeStart, true);
    view.dom.addEventListener("pointerup", this.onRangeEnd);
    view.dom.addEventListener("lostpointercapture", this.onRangeEnd);
    view.dom.addEventListener("pointerleave", this.onLeave);
    view.scrollDOM.addEventListener("scroll", this.onScroll, { passive: true });
    view.contentDOM.addEventListener("pointerdown", this.onMarkerPointer, true);
    view.dom.addEventListener("keydown", this.clearBlockOnKey);
    this.handle.addEventListener("pointerdown", this.onPointerDown);
    this.handle.addEventListener("keydown", this.onHandleKey);
    this.controls.addEventListener("pointerleave", this.onLeave);
    this.controls.addEventListener("pointerenter", this.cancelLeave);
    this.add.addEventListener("pointerdown", this.keepEditorFocus);
    this.add.addEventListener("click", this.onAdd);
    this.win.addEventListener("resize", this.onScroll);
    this.updateBlockSpacing();
  }

  update(update: ViewUpdate): void {
    if (update.docChanged) {
      this.stopRange();
      this.blocks = null;
      this.menu?.hide();
      if (this.drag) { this.stopDrag(); new Notice(t("blockDragChanged")); }
    }
    if (update.docChanged ||
        update.startState.field(editorLivePreviewField, false) !== update.state.field(editorLivePreviewField, false) ||
        update.startState.field(editorInfoField, false)?.file !== update.state.field(editorInfoField, false)?.file) {
      this.updateBlockSpacing();
    }
    if (update.docChanged || update.viewportChanged || update.geometryChanged || update.selectionSet) this.hide();
  }

  private editable(): boolean {
    return !this.view.state.readOnly && this.view.state.facet(EditorView.editable) &&
      this.view.state.field(editorInfoField, false)?.file?.extension.toLowerCase() === "md";
  }

  private getBlocks(): MarkdownBlock[] {
    return this.blocks ??= markdownBlocks(this.view.state.doc.toString());
  }

  private updateBlockSpacing(): void {
    const { state } = this.view;
    if (!state.field(editorLivePreviewField, false) || state.field(editorInfoField, false)?.file?.extension.toLowerCase() !== "md") {
      this.blockSpacing = Decoration.none;
      return;
    }
    const rows = [];
    for (const block of this.getBlocks()) {
      if (block.listKind === "bullet") {
        rows.push(bulletBlockStart.range(block.from), bulletBlockEnd.range(state.doc.lineAt(block.to).from));
      } else if (block.kind === "paragraph") {
        rows.push(paragraphBlockStart.range(block.from), paragraphBlockEnd.range(state.doc.lineAt(block.to).from));
      }
    }
    this.blockSpacing = Decoration.set(rows);
  }

  private readonly onHover = (event: PointerEvent): void => {
    if (this.rangeDrag) { this.extendRange(event); return; }
    if (this.drag || this.menu || event.buttons || event.pointerType === "touch") return;
    this.cancelLeave();
    if (!this.editable()) { this.hide(); return; }
    if (!this.view.contentDOM.contains(event.target as Node)) {
      // Keep the controls reachable while crossing the small gap from text into the gutter.
      const controls = this.controls.getBoundingClientRect();
      const content = this.view.contentDOM.getBoundingClientRect();
      if (this.current !== null && event.clientX >= controls.left - 4 && event.clientX <= content.left + 8 &&
        event.clientY >= controls.top - 4 && event.clientY <= controls.bottom + 4) return;
      this.hide(); return;
    }
    const position = this.view.posAtCoords({ x: event.clientX, y: event.clientY });
    if (position === null) { this.hide(); return; }
    const blocks = this.getBlocks();
    const index = blocks.findIndex(block => position >= block.from && position <= block.to);
    if (index < 0) { this.hide(); return; }
    const block = blocks[index]!;
    const coordinates = this.view.coordsAtPos(block.from);
    const clip = this.view.scrollDOM.getBoundingClientRect();
    if (!coordinates || coordinates.top < clip.top || coordinates.top >= clip.bottom) { this.hide(); return; }
    const startNode = this.view.domAtPos(block.from).node;
    const line = (startNode.nodeType === 1 ? startNode as Element : startNode.parentElement)?.closest(".cm-line");
    const lineLeft = line?.getBoundingClientRect().left ?? coordinates.left;
    const gutters = this.view.scrollDOM.querySelector(":scope > .cm-gutters")?.getBoundingClientRect();
    const controlsRight = Math.min(lineLeft - 18, gutters?.width ? gutters.left - 6 : Infinity);
    this.controls.hidden = false;
    const controlsLeft = controlsRight - this.controls.offsetWidth;
    if (controlsLeft < clip.left + 8) { this.hide(); return; }
    this.current = index;
    this.handle.dataset.blockFrom = String(block.from);
    const hasWiderHighlight = block.kind === "paragraph" || block.listKind === "bullet";
    const highlightInset = hasWiderHighlight && this.view.state.field(editorLivePreviewField, false) ? 1 : 0;
    this.controls.style.left = `${controlsLeft - highlightInset}px`;
    this.controls.style.top = `${coordinates.top}px`;
  };

  private readonly onLeave = (event: PointerEvent): void => {
    if (this.drag) return;
    const next = event.relatedTarget as Node | null;
    if (next && (this.controls.contains(next) || this.view.dom.contains(next))) return;
    this.cancelLeave();
    this.leaveTimer = this.win.setTimeout(() => this.hide(), 120);
  };

  private readonly cancelLeave = (): void => {
    if (this.leaveTimer !== undefined) this.win.clearTimeout(this.leaveTimer);
    this.leaveTimer = undefined;
  };

  private readonly onScroll = (): void => { if (!this.drag) this.hide(); };

  private hide(): void {
    if (this.drag) return;
    this.cancelLeave();
    this.controls.hidden = true;
    this.current = null;
  }

  private readonly keepEditorFocus = (event: PointerEvent): void => { event.preventDefault(); };

  private readonly onRangeStart = (event: PointerEvent): void => {
    if (event.button !== 0 || event.shiftKey || event.pointerType === "touch" || this.menu || this.drag || !this.editable() ||
        !this.view.state.field(editorLivePreviewField, false)) return;
    const target = event.target as Element;
    if (!target.closest(".cm-content, .cm-contentContainer, .cm-sizer, .cm-scroller") ||
        target.closest(".cm-gutters, button, a, input, .cm-fold-indicator, .naitflow-page-header, .inline-title")) return;
    const scroller = this.view.scrollDOM;
    const viewport = scroller.getBoundingClientRect();
    const left = viewport.left + scroller.clientLeft;
    const right = left + scroller.clientWidth;
    if (event.clientX < left || event.clientX >= right) return;
    const content = this.view.contentDOM.getBoundingClientRect();
    const blocks = this.getBlocks();
    const last = blocks.at(-1);
    const fromBelow = !!last && event.clientY >= this.view.documentTop + this.view.lineBlockAt(last.to).bottom;
    const fromSide = (event.clientX >= content.left - 40 && event.clientX < content.left) || event.clientX >= content.right;
    if (!fromBelow && !fromSide) return;
    const anchor = fromBelow ? blocks.length - 1 : this.blockByHeight(event.clientY);
    if (anchor < 0) return;
    event.preventDefault();
    this.view.focus();
    this.rangeDrag = { pointer: event.pointerId, anchor, end: null, x: event.clientX, y: event.clientY, fromBelow };
    this.view.dom.setPointerCapture(event.pointerId);
  };

  private blockByHeight(y: number): number {
    const line = this.view.lineBlockAtHeight(y - this.view.documentTop);
    return this.getBlocks().findIndex(block => line.from >= block.from && line.from <= block.to);
  }

  private extendRange(event: PointerEvent): void {
    const range = this.rangeDrag;
    if (!range || range.pointer !== event.pointerId) return;
    const displacement = event.clientY - range.y;
    if (range.end === null && (range.fromBelow ? displacement > -4 : Math.abs(displacement) < 4)) return;
    const end = this.blockByHeight(event.clientY);
    if (end < 0 || end === range.end) return;
    range.end = end;
    const blocks = this.getBlocks().slice(Math.min(range.anchor, end), Math.max(range.anchor, end) + 1);
    this.view.dispatch({ selection: EditorSelection.cursor(this.view.state.selection.main.head), effects: selectBlock.of(blocks) });
  }

  private readonly onRangeEnd = (event: PointerEvent): void => {
    const range = this.rangeDrag;
    if (!range || event.pointerId !== range.pointer) return;
    this.stopRange();
    if (event.type === "pointerup" && range.fromBelow && range.end === null &&
        Math.hypot(event.clientX - range.x, event.clientY - range.y) < 4) {
      const pos = this.view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
      this.view.dispatch({ selection: EditorSelection.cursor(pos), userEvent: "select.pointer" });
    }
  };

  private stopRange(): void {
    const range = this.rangeDrag;
    this.rangeDrag = undefined;
    if (range && this.view.dom.hasPointerCapture(range.pointer)) this.view.dom.releasePointerCapture(range.pointer);
  }

  private readonly clearBlockOnPointer = (event: PointerEvent): void => {
    // Keep selection on the click that dismisses the native menu.
    if (this.menu || this.controls.contains(event.target as Node) || !this.view.state.field(selectedBlock)) return;
    this.view.dispatch({ effects: selectBlock.of(null) });
  };

  private readonly clearBlockOnKey = (event: KeyboardEvent): void => {
    if (!this.menu && this.view.state.field(selectedBlock) && (event.key === "Escape" || event.key.startsWith("Arrow"))) {
      this.view.dispatch({ effects: selectBlock.of(null) });
    }
  };

  private readonly onMarkerPointer = (event: PointerEvent): void => {
    if (event.button !== 0 || event.shiftKey || !this.view.state.field(editorLivePreviewField, false) || !this.editable()) return;
    const element = event.target as HTMLElement;
    const marker = element.closest?.(".cm-formatting-list-ul");
    const row = marker?.closest(".HyperMD-list-line:not(.HyperMD-task-line, .HyperMD-codeblock)");
    if (!row) return;
    const line = this.view.state.doc.lineAt(this.view.posAtDOM(row));
    const prefix = /^[ \t]*[-+*][ \t]+/.exec(line.text)?.[0];
    if (!prefix) return;
    event.preventDefault();
    this.view.focus();
    this.view.dispatch({ selection: EditorSelection.cursor(line.from + prefix.length), userEvent: "select.pointer" });
  };

  private readonly onAdd = (event: MouseEvent): void => {
    if (this.drag || this.current === null || !this.editable()) return;
    const block = this.getBlocks()[this.current];
    if (!block) return;
    const { doc } = this.view.state;
    const from = event.altKey ? block.from : block.to;
    const before = doc.sliceString(Math.max(0, from - 2), from);
    const after = doc.sliceString(from, from + 2);
    const prefix = event.altKey ? (before && !before.endsWith("\n\n") ? "\n" : "") : "\n\n";
    const suffix = event.altKey ? "\n\n" : after === "\n\n" || !after ? "" : "\n";
    this.view.focus();
    this.view.dispatch({
      changes: { from, insert: `${prefix}/${suffix}` },
      selection: EditorSelection.cursor(from + prefix.length + 1),
      userEvent: "input.type",
      scrollIntoView: true
    });
  };

  private readonly onPointerDown = (event: PointerEvent): void => {
    if (event.button !== 0 || this.current === null || !this.editable()) return;
    event.preventDefault();
    event.stopPropagation();
    this.drag = { doc: this.view.state.doc, source: this.current, pointer: event.pointerId, startX: event.clientX, startY: event.clientY, x: event.clientX, y: event.clientY, moved: false, boundary: null };
    this.handle.setPointerCapture(event.pointerId);
    this.document.addEventListener("pointermove", this.onPointerMove, true);
    this.document.addEventListener("pointerup", this.onPointerUp, true);
    this.document.addEventListener("pointercancel", this.onCancel, true);
    this.document.addEventListener("keydown", this.onDragKey, true);
    this.win.addEventListener("blur", this.onCancel);
    this.frame = this.win.requestAnimationFrame(this.autoScroll);
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    const drag = this.drag;
    if (!drag || event.pointerId !== drag.pointer) return;
    event.preventDefault();
    event.stopPropagation();
    drag.x = event.clientX; drag.y = event.clientY;
    if (!drag.moved && Math.hypot(drag.x - drag.startX, drag.y - drag.startY) < 4) return;
    if (!drag.moved) {
      drag.moved = true;
      this.handle.classList.add("is-dragging");
      this.document.body.classList.add("naitflow-is-block-dragging");
    }
    this.placeDrop();
  };

  private placeDrop(): void {
    const drag = this.drag;
    if (!drag?.moved) return;
    const clip = this.view.scrollDOM.getBoundingClientRect();
    const blocks = this.getBlocks();
    drag.boundary = null;
    this.indicator.hidden = true;
    if (drag.x < clip.left || drag.x > clip.right || drag.y < clip.top || drag.y > clip.bottom) return;
    const content = this.view.contentDOM.getBoundingClientRect();
    const x = Math.max(content.left + 4, Math.min(drag.x, content.right - 4));
    const pos = this.view.posAtCoords({ x, y: drag.y });
    if (pos === null || !blocks.length) return;
    let index = blocks.findIndex(block => pos <= block.to);
    if (index === -1) index = blocks.length - 1;
    const block = blocks[index]!;
    const top = this.view.coordsAtPos(block.from)?.top ?? this.view.documentTop + this.view.lineBlockAt(block.from).top;
    const bottom = this.view.coordsAtPos(block.to)?.bottom ?? this.view.documentTop + this.view.lineBlockAt(block.to).bottom;
    const before = drag.y < (top + bottom) / 2;
    const boundary = before ? index : index + 1;
    if (boundary === drag.source || boundary === drag.source + 1) return;
    drag.boundary = boundary;
    const style = this.win.getComputedStyle(this.view.contentDOM);
    const left = content.left + parseFloat(style.paddingLeft || "0");
    const width = content.width - parseFloat(style.paddingLeft || "0") - parseFloat(style.paddingRight || "0");
    this.indicator.style.left = `${left}px`;
    this.indicator.style.width = `${Math.max(0, width)}px`;
    this.indicator.style.top = `${Math.max(clip.top, Math.min(before ? top - 3 : bottom + 3, clip.bottom - 3))}px`;
    this.indicator.hidden = false;
  }

  private readonly autoScroll = (): void => {
    const drag = this.drag;
    if (!drag) return;
    if (drag.moved) {
      const rect = this.view.scrollDOM.getBoundingClientRect();
      if (drag.x >= rect.left && drag.x <= rect.right) {
        const speed = drag.y < rect.top + 36 ? -Math.min(14, (rect.top + 36 - drag.y) / 3) :
          drag.y > rect.bottom - 36 ? Math.min(14, (drag.y - rect.bottom + 36) / 3) : 0;
        if (speed) { this.view.scrollDOM.scrollTop += speed; this.placeDrop(); }
      }
    }
    this.frame = this.win.requestAnimationFrame(this.autoScroll);
  };

  private readonly onPointerUp = (event: PointerEvent): void => {
    const drag = this.drag;
    if (!drag || event.pointerId !== drag.pointer) return;
    event.preventDefault(); event.stopPropagation();
    const anchor = this.handle.getBoundingClientRect();
    this.stopDrag();
    if (!this.editable() || this.view.state.doc !== drag.doc) return;
    if (drag.moved && drag.boundary !== null) this.move(drag.source, drag.boundary);
    else if (!drag.moved) this.openBlockMenu(drag.source, anchor);
  };

  private readonly onCancel = (): void => { this.stopDrag(); };
  private readonly onDragKey = (event: KeyboardEvent): void => {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); this.stopDrag(); }
  };

  private readonly onHandleKey = (event: KeyboardEvent): void => {
    if (this.current === null || !this.editable()) return;
    if (event.altKey && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
      event.preventDefault();
      this.move(this.current, event.key === "ArrowUp" ? this.current - 1 : this.current + 2);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); this.openBlockMenu(this.current, this.handle.getBoundingClientRect());
    }
  };

  private openBlockMenu(index: number, anchor: DOMRect): void {
    const blocks = this.getBlocks();
    const block = blocks[index];
    if (!block) return;
    this.menu?.hide();
    this.view.dispatch({ selection: EditorSelection.cursor(this.view.state.selection.main.head), effects: selectBlock.of([block]) });
    const doc = this.view.state.doc;
    const menu = this.menu = new Menu().setUseNativeMenu(false);
    menu.addItem(item => item.setTitle(t("blockCopy")).setIcon("copy").onClick(() => {
      void this.copyBlock(doc.sliceString(block.from, block.to));
    }));
    menu.addItem(item => item.setTitle(t("blockMoveUp")).setIcon("arrow-up").setDisabled(index === 0).onClick(() => {
      if (this.view.state.doc === doc && this.editable()) this.move(index, index - 1);
    }));
    menu.addItem(item => item.setTitle(t("blockMoveDown")).setIcon("arrow-down").setDisabled(index === blocks.length - 1).onClick(() => {
      if (this.view.state.doc === doc && this.editable()) this.move(index, index + 2);
    }));
    menu.onHide(() => { if (this.menu === menu) this.menu = undefined; });
    menu.showAtPosition({ x: anchor.right + 4, y: anchor.top }, this.document);
  }

  private async copyBlock(text: string): Promise<void> {
    try { await this.win.navigator.clipboard.writeText(text); }
    catch { new Notice(t("blockCopyFailed")); }
  }

  private move(source: number, boundary: number): void {
    const change = moveMarkdownBlock(this.view.state.doc.toString(), this.getBlocks(), source, boundary);
    if (!change) return;
    this.view.dispatch({ changes: { from: change.from, to: change.to, insert: change.insert }, selection: EditorSelection.cursor(change.selection), userEvent: "move.drop", scrollIntoView: true });
    this.view.focus();
  }

  private stopDrag(): void {
    const drag = this.drag;
    this.drag = null;
    this.win.cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.document.removeEventListener("pointermove", this.onPointerMove, true);
    this.document.removeEventListener("pointerup", this.onPointerUp, true);
    this.document.removeEventListener("pointercancel", this.onCancel, true);
    this.document.removeEventListener("keydown", this.onDragKey, true);
    this.win.removeEventListener("blur", this.onCancel);
    if (drag && this.handle.hasPointerCapture(drag.pointer)) this.handle.releasePointerCapture(drag.pointer);
    this.handle.classList.remove("is-dragging");
    if (!this.document.querySelector(".naitflow-block-handle.is-dragging")) this.document.body.classList.remove("naitflow-is-block-dragging");
    this.indicator.hidden = true;
    this.hide();
  }

  destroy(): void {
    this.menu?.hide();
    this.stopDrag();
    this.stopRange();
    this.document.removeEventListener("pointerdown", this.clearBlockOnPointer, true);
    this.view.dom.removeEventListener("pointermove", this.onHover);
    this.view.dom.removeEventListener("pointerdown", this.onRangeStart, true);
    this.view.dom.removeEventListener("pointerup", this.onRangeEnd);
    this.view.dom.removeEventListener("lostpointercapture", this.onRangeEnd);
    this.view.dom.removeEventListener("pointerleave", this.onLeave);
    this.view.scrollDOM.removeEventListener("scroll", this.onScroll);
    this.view.contentDOM.removeEventListener("pointerdown", this.onMarkerPointer, true);
    this.view.dom.removeEventListener("keydown", this.clearBlockOnKey);
    this.win.removeEventListener("resize", this.onScroll);
    this.handle.removeEventListener("pointerdown", this.onPointerDown);
    this.handle.removeEventListener("keydown", this.onHandleKey);
    this.controls.removeEventListener("pointerleave", this.onLeave);
    this.controls.removeEventListener("pointerenter", this.cancelLeave);
    this.add.removeEventListener("pointerdown", this.keepEditorFocus);
    this.add.removeEventListener("click", this.onAdd);
    this.controls.remove(); this.indicator.remove();
  }
}

const textSelectionClass = EditorView.editorAttributes.of(view =>
  view.state.selection.ranges.some(range => !range.empty) ? { class: "naitflow-text-selected" } : null
);

export const blockDragExtension = [selectedBlock, textSelectionClass, ViewPlugin.fromClass(BlockDragView, {
  decorations: view => view.blockSpacing
})];
