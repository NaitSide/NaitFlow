import { ItemView, Notice, normalizePath, setIcon, TFile, WorkspaceLeaf } from "obsidian";
import { displayName, FIELDS, readPageMeta, setField } from "./model";
import { renderPageIcon } from "./icon-renderer";
import { localeCode, t } from "./i18n";

export const VIEW_TYPE_NAITFLOW = "naitflow-pages";

interface PageNode {
  file: TFile;
  children: PageNode[];
}

export class NaitFlowTreeView extends ItemView {
  private readonly expanded = new Set<string>();

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  override getViewType(): string { return VIEW_TYPE_NAITFLOW; }
  override getDisplayText(): string { return t("pagesView"); }
  override getIcon(): string { return "panels-top-left"; }

  override async onOpen(): Promise<void> {
    this.render();
  }

  render(): void {
    const root = this.contentEl;
    root.empty();
    root.addClass("naitflow-tree");
    const header = root.createDiv("naitflow-tree-header");
    header.createEl("strong", { text: t("pages") });
    const add = header.createEl("button", { attr: { "aria-label": t("newPage") } });
    setIcon(add, "plus");
    add.onclick = () => void this.createPage();

    const nodes = this.buildTree();
    const list = root.createDiv("naitflow-tree-list");
    for (const node of nodes) this.renderNode(list, node, 0);
    if (!nodes.length) list.createDiv({ cls: "naitflow-empty", text: t("createFirstPage") });
  }

  private buildTree(): PageNode[] {
    const files = this.app.vault.getMarkdownFiles();
    const byPath = new Map(files.map((file) => [file.path, { file, children: [] as PageNode[] }]));
    const roots: PageNode[] = [];
    for (const node of byPath.values()) {
      const parentRef = readPageMeta(this.app, node.file).parent;
      const parentFile = parentRef ? this.app.metadataCache.getFirstLinkpathDest(parentRef, node.file.path) : null;
      const parent = parentFile ? byPath.get(parentFile.path) : undefined;
      if (parent && parent !== node) parent.children.push(node);
      else roots.push(node);
    }
    const sort = (items: PageNode[]): void => {
      items.sort((a, b) => displayName(a.file).localeCompare(displayName(b.file), localeCode()));
      items.forEach((item) => sort(item.children));
    };
    sort(roots);
    return roots;
  }

  private renderNode(parent: HTMLElement, node: PageNode, depth: number): void {
    const row = parent.createDiv("naitflow-tree-row");
    row.style.setProperty("--naitflow-depth", String(depth));
    if (this.app.workspace.getActiveFile()?.path === node.file.path) row.addClass("is-active");
    const isExpanded = this.expanded.has(node.file.path);
    const icon = row.createEl("button", { cls: "naitflow-tree-icon", attr: { "aria-label": isExpanded ? t("collapse") : t("expand") } });
    const visual = icon.createSpan("naitflow-tree-icon-visual");
    renderPageIcon(this.app, visual, readPageMeta(this.app, node.file).icon);
    const chevron = icon.createSpan("naitflow-tree-icon-chevron");
    setIcon(chevron, isExpanded ? "chevron-down" : "chevron-right");
    icon.onclick = (event) => {
      event.stopPropagation();
      if (isExpanded) this.expanded.delete(node.file.path);
      else this.expanded.add(node.file.path);
      this.render();
    };

    const title = row.createEl("button", { cls: "naitflow-tree-title", text: displayName(node.file) });
    title.onclick = () => void this.app.workspace.getLeaf(false).openFile(node.file);

    const more = row.createEl("button", { cls: "naitflow-tree-more", attr: { "aria-label": t("pageMenu") } });
    setIcon(more, "ellipsis");
    more.onclick = (event) => {
      event.stopPropagation();
      void this.openStandardFileMenu(event, node.file);
    };

    const add = row.createEl("button", { cls: "naitflow-tree-add", attr: { "aria-label": t("nestedPage") } });
    setIcon(add, "plus");
    add.onclick = (event) => { event.stopPropagation(); void this.createPage(node.file); };

    row.oncontextmenu = (event) => void this.openStandardFileMenu(event, node.file);

    if (isExpanded) {
      const children = parent.createDiv("naitflow-tree-children");
      for (const child of node.children) this.renderNode(children, child, depth + 1);
      const addChild = children.createEl("button", { cls: "naitflow-tree-add-child" });
      addChild.style.setProperty("--naitflow-depth", String(depth + 1));
      setIcon(addChild, "plus");
      addChild.createSpan({ text: t("addSubpage") });
      addChild.onclick = () => void this.createPage(node.file);
    }
  }

  private async createPage(parent?: TFile): Promise<void> {
    try {
      const rawFolder = parent?.parent?.path ?? "";
      const folder = rawFolder === "/" ? "" : normalizePath(rawFolder);
      const prefix = folder ? `${folder}/` : "";
      let file: TFile | null = null;

      for (let index = 1; index < 10_000; index++) {
        const name = index === 1 ? t("untitled") : `${t("untitled")} ${index}`;
        const path = normalizePath(`${prefix}${name}.md`);
        if (this.app.vault.getAbstractFileByPath(path)) continue;
        try {
          file = await this.app.vault.create(path, "");
          break;
        } catch (error) {
          if (!String(error).toLocaleLowerCase().includes("already exists")) throw error;
        }
      }

      if (!file) throw new Error(t("noFreeFilename"));
      if (parent) {
        await setField(this.app, file, FIELDS.parent, parent.path);
        this.expanded.add(parent.path);
      }
      await this.app.workspace.getLeaf(false).openFile(file);
      this.render();
    } catch (error) {
      new Notice(t("createPageFailed", { error: String(error) }));
    }
  }

  private async openStandardFileMenu(event: MouseEvent, file: TFile): Promise<void> {
    event.preventDefault();
    event.stopPropagation();
    const explorerLeaf = this.app.workspace.getLeavesOfType("file-explorer")[0];
    if (!explorerLeaf) return;
    await explorerLeaf.loadIfDeferred();
    const explorer = explorerLeaf?.view as unknown as {
      onFileContextMenu?: (event: MouseEvent, file: TFile) => void;
      fileItems?: Record<string, unknown>;
    } | undefined;
    if (!explorer?.onFileContextMenu) return;

    const fileItems = explorer.fileItems;
    const nativeItem = fileItems?.[file.path];
    if (fileItems && nativeItem) delete fileItems[file.path];
    try {
      explorer.onFileContextMenu(event, file);
    } finally {
      if (fileItems && nativeItem) fileItems[file.path] = nativeItem;
    }
  }
}
