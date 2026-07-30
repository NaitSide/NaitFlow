import { App, FileSystemAdapter, ItemView, Menu, Notice, normalizePath, Platform, setIcon, TFile, TFolder, WorkspaceLeaf } from "obsidian";
import { displayName, ensureFolder, pageFolderPath, readPageMeta } from "./model";
import { renderPageIcon } from "./icon-renderer";
import { localeCode, t } from "./i18n";

export const VIEW_TYPE_NAITFLOW = "naitflow-pages";

interface PageNode {
  file: TFile;
  children: PageNode[];
}

function buildPageTree(app: App): PageNode[] {
  const files = app.vault.getMarkdownFiles();
  const byPath = new Map(files.map((file) => [file.path, { file, children: [] as PageNode[] }]));
  const roots: PageNode[] = [];
  for (const node of byPath.values()) {
    const parent = getPhysicalParent(app, node.file, byPath) ?? getLegacyParent(app, node.file, byPath);
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

function getPhysicalParent(app: App, file: TFile, nodes: Map<string, PageNode>): PageNode | undefined {
  const folderPath = file.parent?.path;
  if (!folderPath) return undefined;
  const parentFile = app.vault.getAbstractFileByPath(`${folderPath}.md`);
  return parentFile instanceof TFile ? nodes.get(parentFile.path) : undefined;
}

function getLegacyParent(app: App, file: TFile, nodes: Map<string, PageNode>): PageNode | undefined {
  const parentRef = readPageMeta(app, file).parent;
  if (!parentRef) return undefined;
  const parentFile = app.metadataCache.getFirstLinkpathDest(parentRef, file.path);
  return parentFile ? nodes.get(parentFile.path) : undefined;
}

export class NaitFlowTreeView extends ItemView {
  private readonly expanded = new Set<string>();
  private treeResizeObserver?: ResizeObserver;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  override getViewType(): string { return VIEW_TYPE_NAITFLOW; }
  override getDisplayText(): string { return t("pagesView"); }
  override getIcon(): string { return "panels-top-left"; }

  override async onOpen(): Promise<void> {
    this.treeResizeObserver = new ResizeObserver(() => this.syncScrollbarState());
    this.treeResizeObserver.observe(this.contentEl);
    this.render();
  }

  override async onClose(): Promise<void> {
    this.treeResizeObserver?.disconnect();
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
    this.syncScrollbarState();
  }

  private syncScrollbarState(): void {
    const viewport = this.contentEl.closest<HTMLElement>(".view-content") ?? this.contentEl;
    const hasVerticalScrollbar = viewport.scrollHeight > viewport.clientHeight && viewport.offsetWidth > viewport.clientWidth;
    this.contentEl.toggleClass("naitflow-tree--scrollable", hasVerticalScrollbar);
  }

  syncActiveFile(): void {
    const activePath = this.app.workspace.getActiveFile()?.path;
    this.contentEl.querySelectorAll<HTMLElement>(".naitflow-tree-row").forEach((row) => {
      row.classList.toggle("is-active", row.dataset.path === activePath);
    });
  }

  private buildTree(): PageNode[] {
    return buildPageTree(this.app);
  }

  private renderNode(parent: HTMLElement, node: PageNode, depth: number): void {
    const row = parent.createDiv("naitflow-tree-row");
    row.dataset.path = node.file.path;
    row.style.setProperty("--naitflow-depth", String(depth));
    if (this.app.workspace.getActiveFile()?.path === node.file.path) row.addClass("is-active");
    const isExpanded = this.expanded.has(node.file.path);
    const icon = row.createEl("button", { cls: "naitflow-tree-icon" });
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
      this.openPageMenu(event, node.file);
    };

    const add = row.createEl("button", { cls: "naitflow-tree-add", attr: { "aria-label": t("nestedPage") } });
    setIcon(add, "plus");
    add.onclick = (event) => { event.stopPropagation(); void this.createPage(node.file); };

    row.oncontextmenu = (event) => this.openPageMenu(event, node.file);

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
      const rawFolder = parent ? pageFolderPath(parent.path) : "";
      const folder = rawFolder === "/" ? "" : normalizePath(rawFolder);
      if (folder) await this.app.vault.createFolder(folder).catch((error) => {
        if (!String(error).toLocaleLowerCase().includes("already exists")) throw error;
      });
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
        this.expanded.add(parent.path);
      }
      await this.app.workspace.getLeaf(false).openFile(file);
      this.render();
    } catch (error) {
      new Notice(t("createPageFailed", { error: String(error) }));
    }
  }

  private openPageMenu(event: MouseEvent, file: TFile): void {
    event.preventDefault();
    event.stopPropagation();
    const menu = new Menu();
    menu.addItem((item) => item.setTitle(t("openInNewTab")).setIcon("file-plus").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("tab"))));
    menu.addItem((item) => item.setTitle(t("openInRightPane")).setIcon("panel-right").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("split", "vertical"))));
    menu.addItem((item) => item.setTitle(t("openInNewWindow")).setIcon("external-link").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("window"))));
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(t("renamePage")).setIcon("pencil").onClick(() => new RenamePagePopover(this.app, file).open(event)));
    menu.addItem((item) => item.setTitle(t("movePage")).setIcon("folder-input").onClick(() => new MovePagePopover(this.app, file).open(event)));
    menu.addItem((item) => item.setTitle(t("duplicatePage")).setIcon("copy").onClick(() => void this.duplicatePage(file)));
    menu.addItem((item) => item.setTitle(t("addBookmark")).setIcon("bookmark-plus").onClick(() => void this.addBookmark(file)));
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(t("copyPath")).setIcon("clipboard-copy").onClick(() => void this.copyText(this.getAbsolutePath(file))));
    if (Platform.isDesktopApp && this.app.vault.adapter instanceof FileSystemAdapter) {
      menu.addItem((item) => item.setTitle(t("showInExplorer")).setIcon("folder-open").onClick(() => this.showInExplorer(file)));
    }
    menu.showAtMouseEvent(event);
  }

  private async openInLeaf(file: TFile, leaf: WorkspaceLeaf): Promise<void> {
    try {
      await leaf.openFile(file);
    } catch (error) {
      new Notice(String(error));
    }
  }

  private async copyText(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      new Notice(t("copied"));
    } catch (error) {
      console.error("NaitFlow: failed to copy to clipboard", error);
      new Notice(t("copyFailed"));
    }
  }

  private getAbsolutePath(file: TFile): string {
    const adapter = this.app.vault.adapter;
    if (!(adapter instanceof FileSystemAdapter)) return file.path;
    const separator = adapter.getBasePath().includes("\\") ? "\\" : "/";
    return `${adapter.getBasePath()}${separator}${file.path.split("/").join(separator)}`;
  }

  private showInExplorer(file: TFile): void {
    try {
      const electron = require("electron") as { shell?: { showItemInFolder(path: string): void } };
      if (!electron.shell) throw new Error("Electron shell is unavailable");
      electron.shell.showItemInFolder(this.getAbsolutePath(file));
    } catch (error) {
      console.error("NaitFlow: failed to show file in Explorer", error);
      new Notice(t("showInExplorerFailed"));
    }
  }

  private async duplicatePage(file: TFile): Promise<void> {
    const parentPath = file.parent?.path ?? "";
    const sourceFolder = this.app.vault.getAbstractFileByPath(pageFolderPath(file.path));
    let targetFilePath = "";
    for (let index = 1; index < 10_000; index++) {
      const suffix = index === 1 ? t("copySuffix") : `${t("copySuffix")} ${index}`;
      const name = `${file.basename} ${suffix}`;
      const candidate = normalizePath(parentPath ? `${parentPath}/${name}.${file.extension}` : `${name}.${file.extension}`);
      if (!this.app.vault.getAbstractFileByPath(candidate) && !this.app.vault.getAbstractFileByPath(pageFolderPath(candidate))) {
        targetFilePath = candidate;
        break;
      }
    }
    if (!targetFilePath) {
      new Notice(t("duplicatePageFailed", { error: t("noFreeFilename") }));
      return;
    }

    try {
      await this.app.vault.copy(file, targetFilePath);
      if (sourceFolder instanceof TFolder) await this.copyFolder(sourceFolder, pageFolderPath(targetFilePath));
      const copy = this.app.vault.getAbstractFileByPath(targetFilePath);
      if (copy instanceof TFile) await this.app.workspace.getLeaf(false).openFile(copy);
    } catch (error) {
      new Notice(t("duplicatePageFailed", { error: String(error) }));
    }
  }

  private async copyFolder(source: TFolder, targetPath: string): Promise<void> {
    await ensureFolder(this.app, targetPath);
    for (const child of source.children) {
      const childTargetPath = normalizePath(`${targetPath}/${child.name}`);
      if (child instanceof TFolder) await this.copyFolder(child, childTargetPath);
      else await this.app.vault.copy(child, childTargetPath);
    }
  }

  private async addBookmark(file: TFile): Promise<void> {
    const commands = (this.app as unknown as {
      commands?: { commands?: Record<string, unknown>; executeCommandById?: (id: string) => boolean };
    }).commands;
    const commandId = commands?.commands && "bookmarks:bookmark" in commands.commands ? "bookmarks:bookmark" : undefined;
    if (!commandId || !commands?.executeCommandById) {
      new Notice(t("bookmarkUnavailable"));
      return;
    }
    if (this.app.workspace.getActiveFile()?.path !== file.path) await this.app.workspace.getLeaf(false).openFile(file);
    if (!commands.executeCommandById(commandId)) new Notice(t("bookmarkUnavailable"));
  }
}

class RenamePagePopover {
  private popover: HTMLElement | null = null;
  private outsideHandler: ((event: PointerEvent) => void) | null = null;

  constructor(private readonly app: App, private readonly file: TFile) {}

  open(anchor: MouseEvent): void {
    this.close();
    const popover = document.body.createDiv("naitflow-rename-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 356))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 58))}px`;
    const form = popover.createEl("form", { cls: "naitflow-rename-popover-form" });
    const input = form.createEl("input", { attr: { type: "text", value: this.file.basename, "aria-label": t("renamePagePrompt") } });
    form.onsubmit = (event) => {
      event.preventDefault();
      void this.rename(input.value);
    };
    input.onkeydown = (event) => {
      if (event.key === "Escape") this.close();
    };
    this.popover = popover;
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target as Node)) this.close();
    };
    window.setTimeout(() => {
      input.focus();
      input.select();
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
    }, 0);
  }

  private async rename(value: string): Promise<void> {
    const name = value.trim();
    if (!name) return;
    const parentPath = this.file.parent?.path ?? "";
    const nextPath = normalizePath(parentPath ? `${parentPath}/${name}.${this.file.extension}` : `${name}.${this.file.extension}`);
    if (nextPath === this.file.path) {
      this.close();
      return;
    }
    try {
      await this.app.fileManager.renameFile(this.file, nextPath);
      this.close();
    } catch (error) {
      new Notice(t("renamePageFailed", { error: String(error) }));
    }
  }

  private close(): void {
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    this.outsideHandler = null;
    this.popover?.remove();
    this.popover = null;
  }
}

class MovePagePopover {
  private readonly expanded = new Set<string>();
  private popover: HTMLElement | null = null;
  private outsideHandler: ((event: PointerEvent) => void) | null = null;

  constructor(private readonly app: App, private readonly file: TFile) {}

  open(anchor: MouseEvent): void {
    this.close();
    const popover = document.body.createDiv("naitflow-move-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 344))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 454))}px`;
    const searchWrap = popover.createDiv("naitflow-search-wrap naitflow-move-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    setIcon(searchIcon, "search");
    const search = searchWrap.createEl("input", {
      cls: "naitflow-search",
      attr: { type: "search", placeholder: t("movePageSearch") }
    });
    const list = popover.createDiv("naitflow-move-list");
    const render = (): void => this.renderList(list, search.value);
    search.oninput = render;
    search.onkeydown = (event) => {
      if (event.key === "Escape") this.close();
    };
    render();
    this.popover = popover;
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target as Node)) this.close();
    };
    window.setTimeout(() => search.focus(), 0);
    window.setTimeout(() => {
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
    }, 0);
  }

  private renderList(list: HTMLElement, query: string): void {
    list.empty();
    const normalizedQuery = query.trim().toLocaleLowerCase(localeCode());
    if (!normalizedQuery) list.createDiv({ cls: "naitflow-move-heading", text: t("movePageSuggested") });
    const nodes = this.filterNodes(buildPageTree(this.app), normalizedQuery);
    if (!nodes.length) {
      list.createDiv({ cls: "naitflow-move-empty", text: t("nothingFound") });
      return;
    }
    this.renderNodes(list, nodes, 0, Boolean(normalizedQuery), query);
  }

  private renderNodes(parent: HTMLElement, nodes: PageNode[], depth: number, forceExpanded: boolean, query: string): void {
    for (const node of nodes) {
      const row = parent.createDiv("naitflow-move-tree-row");
      row.style.setProperty("--naitflow-depth", String(depth));
      const expanded = forceExpanded || this.expanded.has(node.file.path);
      if (node.children.length) {
        const toggle = row.createEl("button", { cls: "naitflow-move-toggle", attr: { type: "button", "aria-expanded": String(expanded) } });
        setIcon(toggle, expanded ? "chevron-down" : "chevron-right");
        toggle.onclick = (event) => {
          event.stopPropagation();
          if (this.expanded.has(node.file.path)) this.expanded.delete(node.file.path);
          else this.expanded.add(node.file.path);
          const list = this.popover?.querySelector<HTMLElement>(".naitflow-move-list");
          if (list) this.renderList(list, query);
        };
      } else {
        row.createSpan("naitflow-move-toggle naitflow-move-toggle--empty");
      }
      const page = row.createEl("button", { cls: "naitflow-move-row", attr: { type: "button" } });
      const icon = page.createSpan("naitflow-move-icon");
      renderPageIcon(this.app, icon, readPageMeta(this.app, node.file).icon);
      page.createDiv({ cls: "naitflow-move-label", text: displayName(node.file) });
      page.onclick = () => void this.moveToPage(node.file);
      if (expanded && node.children.length) this.renderNodes(parent, node.children, depth + 1, forceExpanded, query);
    }
  }

  private filterNodes(nodes: PageNode[], query: string): PageNode[] {
    const pageFolder = pageFolderPath(this.file.path);
    const filter = (items: PageNode[]): PageNode[] => items.flatMap((node) => {
      const folderPath = pageFolderPath(node.file.path);
      if (node.file.path === this.file.path || folderPath === pageFolder || folderPath.startsWith(`${pageFolder}/`)) return [];
      const children = filter(node.children);
      const matches = !query || displayName(node.file).toLocaleLowerCase(localeCode()).includes(query);
      return matches || children.length ? [{ file: node.file, children }] : [];
    });
    return filter(nodes);
  }

  private async moveToPage(destination: TFile): Promise<void> {
    await this.moveToFolder(pageFolderPath(destination.path));
  }

  private async moveToFolder(folderPath: string): Promise<void> {
    try {
      if (folderPath) await ensureFolder(this.app, folderPath);
      const nextPath = normalizePath(folderPath ? `${folderPath}/${this.file.name}` : this.file.name);
      if (nextPath === this.file.path) return;
      await this.app.fileManager.renameFile(this.file, nextPath);
      this.close();
    } catch (error) {
      new Notice(t("movePageFailed", { error: String(error) }));
    }
  }

  private close(): void {
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    this.outsideHandler = null;
    this.popover?.remove();
    this.popover = null;
  }
}
