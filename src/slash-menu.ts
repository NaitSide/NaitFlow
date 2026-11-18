import { App, Editor, EditorPosition, EditorSuggest, EditorSuggestContext, EditorSuggestTriggerInfo, FuzzySuggestModal, MarkdownView, Notice, TFile } from "obsidian";
import { t } from "./i18n";
import { setNotionIcon } from "./notion-icons";

type Label = Parameters<typeof t>[0];
type AttachmentKind = "page" | "image" | "video" | "audio" | "file";
interface BlockItem {
  label: Label;
  icon: string;
  aliases: string;
  hint?: string;
  snippet?: string;
  caret?: number;
  kind?: AttachmentKind;
  group: "basic" | "media";
}

const BLOCKS: BlockItem[] = [
  { label: "slashText", icon: "type", aliases: "text paragraph текст абзац", snippet: "", group: "basic" },
  ...[1, 2, 3].map((level): BlockItem => ({ label: `slashHeading${level}` as Label, icon: `heading-${level}`, aliases: `heading ${level} h${level} заголовок ${level}`, hint: "#".repeat(level), snippet: `${"#".repeat(level)} `, group: "basic" })),
  { label: "slashBullet", icon: "list", aliases: "bulleted bullet list список маркированный", hint: "-", snippet: "- ", group: "basic" },
  { label: "slashNumbered", icon: "list-ordered", aliases: "numbered ordered list список нумерованный", hint: "1.", snippet: "1. ", group: "basic" },
  { label: "slashTodo", icon: "square-check", aliases: "todo to-do task checklist задача задачи чеклист", hint: "[ ]", snippet: "- [ ] ", group: "basic" },
  { label: "slashPage", icon: "file-text", aliases: "page link страница ссылка", kind: "page", group: "basic" },
  { label: "slashQuote", icon: "quote", aliases: "quote цитата", hint: ">", snippet: "> ", group: "basic" },
  { label: "slashDivider", icon: "minus", aliases: "divider separator разделитель линия", hint: "---", snippet: "---\n", group: "basic" },
  { label: "slashImage", icon: "image", aliases: "image picture изображение картинка фото", kind: "image", group: "media" },
  { label: "slashVideo", icon: "video", aliases: "video видео", kind: "video", group: "media" },
  { label: "slashAudio", icon: "music", aliases: "audio music аудио музыка", kind: "audio", group: "media" },
  { label: "slashCode", icon: "code", aliases: "code код блок кода", hint: "```", snippet: "```\n\n```", caret: 4, group: "media" },
  { label: "slashFile", icon: "paperclip", aliases: "file attachment файл вложение", kind: "file", group: "media" }
];
const EXTENSIONS: Partial<Record<AttachmentKind, RegExp>> = {
  image: /^(avif|bmp|gif|jpe?g|png|svg|webp)$/i,
  video: /^(mp4|m4v|mov|webm|ogv|mkv)$/i,
  audio: /^(mp3|m4a|wav|ogg|oga|opus|flac|webm|3gp)$/i
};

/** Use the host's editor suggestion lifecycle, positioning and keyboard navigation. */
export class SlashMenuSuggest extends EditorSuggest<BlockItem> {
  private destroyed = false;
  private picker: VaultFilePicker | null = null;
  private menu: HTMLElement | null = null;
  private previousGroup = "";

  constructor(app: App) {
    super(app);
    this.limit = BLOCKS.length;
  }

  override onTrigger(cursor: EditorPosition, editor: Editor, file: TFile | null): EditorSuggestTriggerInfo | null {
    if (this.destroyed || this.picker || !file || editor.somethingSelected() || editor.listSelections().length !== 1) return null;
    const match = /^( {0,3})\/([^/\n]{0,60})$/.exec(editor.getLine(cursor.line).slice(0, cursor.ch));
    if (!match || this.insideLiteral(editor, cursor.line)) return null;
    return { start: { line: cursor.line, ch: match[1]!.length }, end: cursor, query: match[2]! };
  }

  override getSuggestions(context: EditorSuggestContext): BlockItem[] {
    this.previousGroup = "";
    const words = context.query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const items = BLOCKS.filter(item => words.every(word => `${t(item.label)} ${item.aliases}`.toLocaleLowerCase().includes(word)));
    return items.length ? items : [{ label: "slashNoResults", icon: "search", aliases: "", group: "basic" }];
  }

  override renderSuggestion(item: BlockItem, el: HTMLElement): void {
    el.addClass("naitflow-slash-row");
    if (item.label === "slashNoResults") {
      el.addClass("naitflow-slash-empty");
      el.setText(t(item.label));
    } else {
      if (this.previousGroup !== item.group) {
        const heading = el.ownerDocument.createElement("div");
        heading.className = "naitflow-slash-group";
        heading.textContent = t(this.context?.query.trim() ? "slashFiltered" : item.group === "basic" ? "slashBasic" : "slashMedia");
        // A filtered result set needs one heading rather than duplicate group labels.
        if (!this.previousGroup || !this.context?.query.trim()) el.before(heading);
      }
      const icon = el.createSpan("naitflow-slash-icon");
      icon.setAttribute("aria-hidden", "true");
      setNotionIcon(icon, item.icon);
      el.createSpan({ cls: "naitflow-slash-label", text: t(item.label) });
      if (item.hint) el.createSpan({ cls: "naitflow-slash-hint", text: item.hint });
    }
    this.previousGroup = item.group;
    this.decorate(el);
  }

  private decorate(row: HTMLElement): void {
    const menu = row.closest<HTMLElement>(".suggestion-container");
    if (!menu) return;
    this.menu = menu;
    menu.addClass("naitflow-slash-menu");
    menu.setAttribute("aria-label", t("slashMenu"));
    if (menu.querySelector(".naitflow-slash-footer")) return;
    const footer = menu.createDiv("naitflow-slash-footer");
    const button = footer.createEl("button", { cls: "naitflow-slash-close", attr: { type: "button" } });
    button.createSpan({ text: t("slashClose") });
    button.createSpan({ cls: "naitflow-slash-hint", text: "esc" });
    button.onpointerdown = event => event.preventDefault();
    button.onclick = () => this.close();
  }

  override selectSuggestion(item: BlockItem): void {
    const context = this.context;
    if (!context || item.label === "slashNoResults") return;
    const saved = { ...context, start: { ...context.start }, end: { ...context.end } };
    this.close();
    if (item.kind) {
      this.picker = new VaultFilePicker(this.app, item.kind, file => {
        if (!this.canInsert(saved)) return;
        const link = this.app.fileManager.generateMarkdownLink(file, saved.file.path);
        this.insert(saved, item.kind === "page" || item.kind === "file" ? link : `!${link}`);
      }, () => { this.picker = null; });
      this.picker.open();
      return;
    }
    if (this.canInsert(saved)) this.insert(saved, item.snippet ?? "", item.caret);
  }

  private canInsert(context: EditorSuggestContext): boolean {
    const sameFile = this.app.workspace.getLeavesOfType("markdown").some(leaf =>
      leaf.view instanceof MarkdownView && leaf.view.editor === context.editor && leaf.view.file === context.file);
    if (this.destroyed || !sameFile || context.editor.getRange(context.start, context.end) !== `/${context.query}`) {
      if (!this.destroyed) new Notice(t("slashContextChanged"));
      return false;
    }
    return true;
  }

  private insert(context: EditorSuggestContext, text: string, caret = text.length): void {
    const beforeCaret = text.slice(0, caret).split("\n");
    const target = { line: context.start.line + beforeCaret.length - 1, ch: (beforeCaret.length === 1 ? context.start.ch : 0) + beforeCaret[beforeCaret.length - 1]!.length };
    // One host transaction keeps replacement and cursor movement in the same undo step.
    context.editor.transaction({ changes: [{ from: context.start, to: context.end, text }], selection: { from: target } }, "input.autocomplete");
    context.editor.focus();
  }

  private insideLiteral(editor: Editor, line: number): boolean {
    let fence: { character: string; length: number } | null = null;
    let frontmatter = editor.getLine(0).trim() === "---";
    for (let index = frontmatter ? 1 : 0; index < line; index++) {
      const text = editor.getLine(index);
      if (frontmatter) {
        if (/^(---|\.\.\.)\s*$/.test(text)) frontmatter = false;
        continue;
      }
      const match = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(text);
      if (!match) continue;
      const marker = match[1]!;
      if (!fence) fence = { character: marker[0]!, length: marker.length };
      else if (marker[0] === fence.character && marker.length >= fence.length && !match[2]!.trim()) fence = null;
    }
    return frontmatter || fence !== null;
  }

  override close(): void {
    super.close();
    this.menu?.querySelector(".naitflow-slash-footer")?.remove();
    this.menu?.removeClass("naitflow-slash-menu");
    this.menu = null;
  }

  destroy(): void {
    this.destroyed = true;
    this.picker?.close();
    this.picker = null;
    this.close();
  }
}

class VaultFilePicker extends FuzzySuggestModal<TFile> {
  constructor(app: App, private readonly kind: AttachmentKind, private readonly choose: (file: TFile) => void, private readonly finish: () => void) {
    super(app);
    this.setPlaceholder(t(kind === "page" ? "slashChoosePage" : "slashChooseAttachment"));
    this.emptyStateText = t("slashNoFiles");
  }

  override getItems(): TFile[] {
    return this.app.vault.getFiles().filter(file => this.kind === "page" ? file.extension.toLowerCase() === "md" :
      this.kind === "file" ? file.extension.toLowerCase() !== "md" : EXTENSIONS[this.kind]!.test(file.extension));
  }
  override getItemText(file: TFile): string { return file.path; }
  override onChooseItem(file: TFile): void { this.choose(file); }
  override onClose(): void { super.onClose(); this.finish(); }
}
