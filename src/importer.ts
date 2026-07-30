import { App, htmlToMarkdown, normalizePath, TFile } from "obsidian";
import { BlobReader, BlobWriter, configure, Entry, TextWriter, ZipReader } from "@zip.js/zip.js";
import { ensureFolder, FIELDS } from "./model";

configure({ useWebWorkers: false });

export type ImportFormat = "buildin-md" | "notion-md" | "notion-html";

interface ReadableZipEntry extends Entry {
  directory: false;
  getData: NonNullable<Entry["getData"]>;
}

class ArchiveFile {
  readonly path: string;
  readonly name: string;
  readonly extension: string;

  constructor(private readonly entry: ReadableZipEntry) {
    this.path = normalizeSourcePath(entry.filename);
    this.name = basename(this.path);
    this.extension = extension(this.name);
  }

  async readText(): Promise<string> {
    return this.entry.getData(new TextWriter());
  }

  async readBinary(): Promise<ArrayBuffer> {
    return (await this.entry.getData(new BlobWriter())).arrayBuffer();
  }
}

class LoadedArchive {
  readonly files: ArchiveFile[] = [];
  private readonly readers: ZipReader<unknown>[] = [];

  static async open(file: Blob): Promise<LoadedArchive> {
    const archive = new LoadedArchive();
    await archive.readZip(file);
    return archive;
  }

  async close(): Promise<void> {
    await Promise.all(this.readers.map(async (reader) => {
      try {
        await reader.close();
      } catch {
        // The archive is already closed or the reader does not need cleanup.
      }
    }));
  }

  private async readZip(blob: Blob): Promise<void> {
    const reader = new ZipReader(new BlobReader(blob));
    this.readers.push(reader as ZipReader<unknown>);
    const entries = await reader.getEntries();
    for (const entry of entries) {
      if (entry.directory || !entry.getData) continue;
      const readable = entry as ReadableZipEntry;
      if (isNotionPartZip(readable.filename)) {
        const nested = await readable.getData(new BlobWriter());
        await this.readZip(nested);
      } else {
        this.files.push(new ArchiveFile(readable));
      }
    }
  }
}

interface ImportPage {
  readonly source: ArchiveFile;
  readonly sourcePath: string;
  readonly sourceId: string;
  readonly sourceFolderPath: string;
  readonly rawContent: string;
  title: string;
  parent?: ImportPage;
  targetTitle: string;
  targetPath: string;
  targetFolderPath: string;
  icon?: string;
  cover?: string;
  coverY?: number;
}

interface ImportAttachment {
  readonly source: ArchiveFile;
  readonly sourcePath: string;
  readonly targetPath: string;
}

interface ResolvedTarget {
  readonly kind: "page" | "attachment";
  readonly targetPath: string;
  readonly page?: ImportPage;
}

export interface ImportProgress {
  readonly current: number;
  readonly total: number;
  readonly label: string;
}

export interface ImportResult {
  readonly destination: string;
  readonly pages: number;
  readonly attachments: number;
}

export class NaitFlowImportPlan {
  readonly format: ImportFormat;
  readonly sourceName: string;
  readonly defaultDestination: string;
  readonly pagesCount: number;
  readonly attachmentsCount: number;
  readonly renamedCount: number;
  readonly unresolvedLinksCount: number;
  readonly iconsCount: number;
  readonly coversCount: number;

  private readonly pageById = new Map<string, ImportPage>();
  private readonly pageBySourcePath = new Map<string, ImportPage>();
  private readonly attachmentBySourcePath = new Map<string, ImportAttachment>();

  constructor(
    private readonly app: App,
    private readonly archive: LoadedArchive,
    format: ImportFormat,
    sourceName: string,
    private readonly pages: ImportPage[],
    private readonly attachments: ImportAttachment[],
    renamedCount: number,
    unresolvedLinksCount: number
  ) {
    this.format = format;
    this.sourceName = sourceName;
    this.pagesCount = pages.length;
    this.attachmentsCount = attachments.length;
    this.renamedCount = renamedCount;
    this.unresolvedLinksCount = unresolvedLinksCount;
    this.iconsCount = pages.filter((page) => page.icon).length;
    this.coversCount = pages.filter((page) => page.cover).length;
    this.defaultDestination = uniqueImportName(app, "_import");
    for (const page of pages) {
      this.pageById.set(page.sourceId, page);
      this.pageBySourcePath.set(sourceKey(page.sourcePath), page);
    }
    for (const attachment of attachments) {
      this.attachmentBySourcePath.set(sourceKey(attachment.sourcePath), attachment);
    }
  }

  async close(): Promise<void> {
    await this.archive.close();
  }

  async execute(destinationInput: string, onProgress: (progress: ImportProgress) => void): Promise<ImportResult> {
    const requestedName = normalizeImportName(destinationInput);
    if (!requestedName) throw new Error("destination-empty");
    const destination = uniqueImportName(this.app, requestedName);

    const folders = new Set<string>([destination]);
    for (const page of this.pages) {
      const target = normalizePath(`${destination}/${page.targetPath}`);
      const parent = dirname(target);
      if (parent) folders.add(parent);
    }
    for (const attachment of this.attachments) {
      const target = normalizePath(`${destination}/${attachment.targetPath}`);
      const parent = dirname(target);
      if (parent) folders.add(parent);
    }
    for (const folder of [...folders].sort((a, b) => pathDepth(a) - pathDepth(b))) {
      await ensureFolder(this.app, folder);
    }
    await this.app.vault.create(`${destination}.md`, "");

    const total = this.pages.length + this.attachments.length;
    let current = 0;
    for (const page of this.pages) {
      onProgress({ current, total, label: page.title });
      const body = this.format === "notion-html"
        ? this.convertHtml(page, destination)
        : this.convertMarkdown(page, destination);
      const targetPath = normalizePath(`${destination}/${page.targetPath}`);
      const created = await this.app.vault.create(targetPath, body);
      await this.applyPageMeta(created, page, destination);
      current += 1;
      onProgress({ current, total, label: page.title });
    }

    for (const attachment of this.attachments) {
      onProgress({ current, total, label: basename(attachment.targetPath) });
      const targetPath = normalizePath(`${destination}/${attachment.targetPath}`);
      await this.app.vault.createBinary(targetPath, await attachment.source.readBinary());
      current += 1;
      onProgress({ current, total, label: basename(attachment.targetPath) });
    }

    return { destination, pages: this.pages.length, attachments: this.attachments.length };
  }

  private convertMarkdown(page: ImportPage, destination: string): string {
    let markdown = page.rawContent.replace(/\r\n?/g, "\n");
    if (this.format === "notion-md") markdown = removeMatchingTitle(markdown, page.title);
    return rewriteOutsideFences(markdown, (chunk) => chunk.replace(
      /(!?)\[([^\]]*)\]\(([^)\n]+)\)/g,
      (original: string, embed: string, label: string, rawTarget: string) => {
        const target = cleanMarkdownTarget(rawTarget);
        const resolved = this.resolveTarget(page, target);
        if (!resolved) return original;
        return renderResolvedLink(resolved, destination, label, embed === "!");
      }
    )).trimEnd() + "\n";
  }

  private convertHtml(page: ImportPage, destination: string): string {
    const document = new DOMParser().parseFromString(page.rawContent, "text/html");
    const body = document.querySelector<HTMLElement>("div.page-body");
    if (!body) throw new Error(`page-body-missing:${page.sourcePath}`);
    const tokens = new Map<string, string>();
    let tokenIndex = 0;
    const makeToken = (value: string): string => {
      const token = `NAITFLOWIMPORTTOKEN${tokenIndex++}X`;
      tokens.set(token, value);
      return token;
    };

    for (const image of Array.from(body.querySelectorAll<HTMLImageElement>("img[src]"))) {
      const source = image.getAttribute("src") ?? "";
      const resolved = this.resolveTarget(page, source);
      if (!resolved) continue;
      const replacement = document.createTextNode(makeToken(renderResolvedLink(resolved, destination, image.alt, true)));
      const linked = image.closest("a");
      (linked ?? image).replaceWith(replacement);
    }

    for (const link of Array.from(body.querySelectorAll<HTMLAnchorElement>("a[href]"))) {
      const href = link.getAttribute("href") ?? "";
      const resolved = this.resolveTarget(page, href);
      if (!resolved) continue;
      const label = (link.textContent ?? "").trim();
      link.replaceWith(document.createTextNode(makeToken(renderResolvedLink(resolved, destination, label, false))));
    }

    let markdown = htmlToMarkdown(body.innerHTML).replace(/\r\n?/g, "\n");
    for (const [token, value] of tokens) markdown = markdown.split(token).join(value);
    return markdown.trim() + "\n";
  }

  private resolveTarget(page: ImportPage, rawTarget: string): ResolvedTarget | null {
    const target = stripQueryAndHash(decodeSourcePath(rawTarget));
    const id = knownIdInTarget(target, this.pageById);
    if (isExternalTarget(target)) {
      const linkedPage = id ? this.pageById.get(id) : undefined;
      return linkedPage ? { kind: "page", targetPath: linkedPage.targetPath, page: linkedPage } : null;
    }
    if (target.startsWith("#")) return null;
    const resolvedPath = target.startsWith("/")
      ? normalizeSourcePath(target.slice(1))
      : normalizeSourcePath(`${dirname(page.sourcePath)}/${target}`);
    const linkedPage = this.pageBySourcePath.get(sourceKey(resolvedPath));
    if (linkedPage) return { kind: "page", targetPath: linkedPage.targetPath, page: linkedPage };
    const attachment = this.attachmentBySourcePath.get(sourceKey(resolvedPath));
    if (attachment) return { kind: "attachment", targetPath: attachment.targetPath };
    const linkedPageById = id ? this.pageById.get(id) : undefined;
    if (linkedPageById) return { kind: "page", targetPath: linkedPageById.targetPath, page: linkedPageById };
    return null;
  }

  private async applyPageMeta(file: TFile, page: ImportPage, destination: string): Promise<void> {
    let cover = page.cover;
    if (cover && !isExternalTarget(cover)) {
      const resolved = this.resolveTarget(page, cover);
      if (resolved?.kind === "attachment") cover = normalizePath(`${destination}/${resolved.targetPath}`);
    }
    if (!page.icon && !cover) return;
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      if (page.icon) frontmatter[FIELDS.icon] = `emoji:${page.icon}`;
      if (cover) frontmatter[FIELDS.cover] = cover;
      if (cover && page.coverY !== undefined) frontmatter[FIELDS.coverY] = page.coverY;
    });
  }
}

export async function prepareImport(app: App, file: File): Promise<NaitFlowImportPlan> {
  const archive = await LoadedArchive.open(file);
  try {
    const format = detectFormat(archive.files);
    const pages = await readPages(archive.files, format);
    if (!pages.length) throw new Error("pages-not-found");
    if (format === "buildin-md") applyBuildinLinkTitles(pages);
    const renamedCount = assignTargets(pages, format);
    const attachments = assignAttachments(archive.files, pages, format);
    const unresolvedLinksCount = countUnresolvedLinks(pages, attachments, format);
    return new NaitFlowImportPlan(app, archive, format, file.name, pages, attachments, renamedCount, unresolvedLinksCount);
  } catch (error) {
    await archive.close();
    throw error;
  }
}

function detectFormat(files: ArchiveFile[]): ImportFormat {
  if (files.some((file) => file.extension === "html" && notionId(file.name))) return "notion-html";
  if (files.some((file) => file.extension === "md" && buildinId(file.name))) return "buildin-md";
  if (files.some((file) => file.extension === "md" && notionId(file.name))) return "notion-md";
  throw new Error("format-unknown");
}

async function readPages(files: ArchiveFile[], format: ImportFormat): Promise<ImportPage[]> {
  const pageExtension = format === "notion-html" ? "html" : "md";
  const candidates = files.filter((file) => file.extension === pageExtension && (format === "buildin-md" ? buildinId(file.name) : notionId(file.name)));
  const pages: ImportPage[] = [];
  for (const source of candidates) {
    const rawContent = await source.readText();
    const id = format === "buildin-md" ? buildinId(source.name) : notionId(source.name);
    if (!id) continue;
    const rawStem = stripExtension(source.name);
    const fallbackTitle = format === "buildin-md" ? buildinTitle(rawStem) : notionTitle(rawStem);
    const title = format === "notion-html"
      ? htmlTitle(rawContent) || fallbackTitle
      : format === "notion-md"
        ? markdownTitle(rawContent) || fallbackTitle
        : fallbackTitle;
    const sourceParent = dirname(source.path);
    const folderName = format === "buildin-md" ? rawStem : notionTitle(rawStem);
    const page: ImportPage = {
      source,
      sourcePath: source.path,
      sourceId: id,
      sourceFolderPath: normalizeSourcePath(`${sourceParent}/${folderName}`),
      rawContent,
      title: sanitizePageName(title),
      targetTitle: "",
      targetPath: "",
      targetFolderPath: ""
    };
    if (format === "notion-html") readHtmlMeta(page);
    pages.push(page);
  }
  return pages;
}

function applyBuildinLinkTitles(pages: ImportPage[]): void {
  const byId = new Map(pages.map((page) => [page.sourceId, page]));
  for (const sourcePage of pages) {
    for (const match of sourcePage.rawContent.matchAll(/!?\[([^\]]+)\]\(([^)\n]+)\)/g)) {
      const label = plainLinkLabel(match[1] ?? "");
      const target = match[2] ?? "";
      const id = knownIdInTarget(target, byId);
      const page = id ? byId.get(id) : undefined;
      if (page && label) page.title = sanitizePageName(label);
    }
  }
}

function assignTargets(pages: ImportPage[], format: ImportFormat): number {
  const bySourceFolder = new Map<string, ImportPage>();
  for (const page of pages) bySourceFolder.set(sourceKey(page.sourceFolderPath), page);
  for (const page of pages) page.parent = bySourceFolder.get(sourceKey(dirname(page.sourcePath)));

  const children = new Map<ImportPage | null, ImportPage[]>();
  for (const page of pages) {
    const key = page.parent ?? null;
    const group = children.get(key) ?? [];
    group.push(page);
    children.set(key, group);
  }

  let renamedCount = 0;
  const assignGroup = (parent: ImportPage | null, parentTargetFolder: string): void => {
    const group = children.get(parent) ?? [];
    const used = new Set<string>();
    for (const page of group) {
      let title = page.title;
      let suffix = 2;
      while (used.has(title.toLocaleLowerCase())) title = `${page.title} ${suffix++}`;
      if (title !== page.title) renamedCount += 1;
      used.add(title.toLocaleLowerCase());
      page.targetTitle = title;
      const fallbackParent = page.parent ? parentTargetFolder : cleanUnpairedParent(dirname(page.sourcePath), format, bySourceFolder);
      page.targetPath = normalizeSourcePath(`${fallbackParent}/${title}.md`);
      page.targetFolderPath = stripExtension(page.targetPath);
      assignGroup(page, page.targetFolderPath);
    }
  };
  assignGroup(null, "");
  return renamedCount;
}

function assignAttachments(files: ArchiveFile[], pages: ImportPage[], format: ImportFormat): ImportAttachment[] {
  const pageExtensions = new Set(["md", "html"]);
  const pageSources = new Set(pages.map((page) => sourceKey(page.sourcePath)));
  const owners = [...pages].sort((a, b) => b.sourceFolderPath.length - a.sourceFolderPath.length);
  const usedNames = new Map<string, Set<string>>();
  const attachments: ImportAttachment[] = [];
  for (const source of files) {
    if (pageSources.has(sourceKey(source.path))) continue;
    if (pageExtensions.has(source.extension) && basename(source.path).toLocaleLowerCase() === "index.html") continue;
    const owner = owners.find((page) => sourceKey(source.path).startsWith(`${sourceKey(page.sourceFolderPath)}/`));
    const folder = owner ? `${owner.targetFolderPath}/Вложенные файлы` : "Вложенные файлы";
    const originalName = sanitizeAttachmentName(decodeSourceSegment(source.name), format);
    const used = usedNames.get(folder) ?? new Set<string>();
    let name = originalName;
    let suffix = 2;
    while (used.has(name.toLocaleLowerCase())) name = appendFilenameSuffix(originalName, suffix++);
    used.add(name.toLocaleLowerCase());
    usedNames.set(folder, used);
    attachments.push({ source, sourcePath: source.path, targetPath: normalizeSourcePath(`${folder}/${name}`) });
  }
  return attachments;
}

function countUnresolvedLinks(pages: ImportPage[], attachments: ImportAttachment[], format: ImportFormat): number {
  const pageById = new Map(pages.map((page) => [page.sourceId, page]));
  const knownPaths = new Set<string>();
  for (const page of pages) knownPaths.add(sourceKey(page.sourcePath));
  for (const attachment of attachments) knownPaths.add(sourceKey(attachment.sourcePath));
  let count = 0;
  for (const page of pages) {
    const targets = format === "notion-html" ? htmlTargets(page.rawContent) : markdownTargets(page.rawContent);
    for (const rawTarget of targets) {
      const target = stripQueryAndHash(decodeSourcePath(cleanMarkdownTarget(rawTarget)));
      const id = knownIdInTarget(target, pageById);
      if (isExternalTarget(target)) {
        if (format === "buildin-md" && /^https?:\/\/(?:www\.)?buildin\.ai\//i.test(target)) {
          const linkedId = buildinId(target);
          if (linkedId && !pageById.has(linkedId)) count += 1;
        }
        continue;
      }
      if (target.startsWith("#")) continue;
      const resolved = target.startsWith("/")
        ? normalizeSourcePath(target.slice(1))
        : normalizeSourcePath(`${dirname(page.sourcePath)}/${target}`);
      if (!knownPaths.has(sourceKey(resolved)) && !id) count += 1;
    }
  }
  return count;
}

function readHtmlMeta(page: ImportPage): void {
  const document = new DOMParser().parseFromString(page.rawContent, "text/html");
  const emoji = document.querySelector<HTMLElement>(".page-header-icon [data-emoji]")?.getAttribute("data-emoji")?.trim();
  const cover = document.querySelector<HTMLImageElement>("img.page-cover-image");
  if (emoji) page.icon = emoji;
  if (cover?.src) page.cover = cover.getAttribute("src") ?? cover.src;
  const position = cover?.style.objectPosition ?? "";
  const y = position.match(/(-?\d+(?:\.\d+)?)%\s*$/)?.[1];
  if (y !== undefined) page.coverY = Math.max(0, Math.min(100, Math.round(Number(y))));
}

function markdownTargets(markdown: string): string[] {
  const targets: string[] = [];
  rewriteOutsideFences(markdown, (chunk) => {
    for (const match of chunk.matchAll(/!?\[[^\]]*\]\(([^)\n]+)\)/g)) targets.push(match[1] ?? "");
    return chunk;
  });
  return targets;
}

function htmlTargets(html: string): string[] {
  const document = new DOMParser().parseFromString(html, "text/html");
  const body = document.querySelector<HTMLElement>("div.page-body");
  if (!body) return [];
  return [
    ...Array.from(body.querySelectorAll<HTMLAnchorElement>("a[href]"), (element) => element.getAttribute("href") ?? ""),
    ...Array.from(body.querySelectorAll<HTMLImageElement>("img[src]"), (element) => element.getAttribute("src") ?? "")
  ];
}

function renderResolvedLink(target: ResolvedTarget, destination: string, rawLabel: string, embed: boolean): string {
  const fullPath = normalizePath(`${destination}/${target.targetPath}`);
  if (target.kind === "attachment") {
    const label = plainLinkLabel(rawLabel);
    if (embed) return `![[${fullPath}]]`;
    return label ? `[[${fullPath}|${escapeWikiAlias(label)}]]` : `[[${fullPath}]]`;
  }
  const pagePath = fullPath.replace(/\.md$/i, "");
  const label = plainLinkLabel(rawLabel) || target.page?.targetTitle || "";
  return label ? `[[${pagePath}|${escapeWikiAlias(label)}]]` : `[[${pagePath}]]`;
}

function rewriteOutsideFences(markdown: string, rewrite: (chunk: string) => string): string {
  const lines = markdown.split(/(?<=\n)/);
  let fence: string | null = null;
  let plain = "";
  let result = "";
  const flush = (): void => {
    if (!plain) return;
    result += rewrite(plain);
    plain = "";
  };
  for (const line of lines) {
    const marker = line.match(/^\s*(```+|~~~+)/)?.[1];
    if (marker) {
      flush();
      result += line;
      if (!fence) fence = marker[0] ?? null;
      else if (marker[0] === fence) fence = null;
    } else if (fence) {
      result += line;
    } else {
      plain += line;
    }
  }
  flush();
  return result;
}

function removeMatchingTitle(markdown: string, title: string): string {
  const match = markdown.match(/^\uFEFF?#\s+([^\r\n]+)(?:\r?\n(?:\r?\n)?|$)/);
  if (!match) return markdown;
  return sanitizePageName(plainLinkLabel(match[1] ?? "")) === sanitizePageName(title)
    ? markdown.slice(match[0].length)
    : markdown;
}

function isNotionPartZip(path: string): boolean {
  return !path.includes("/") && /(?:ExportBlock|Export).*Part-\d+\.zip$/i.test(path);
}

function buildinId(value: string): string | undefined {
  return value.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:\.[^.]+)?$/i)?.[1]?.toLocaleLowerCase();
}

function notionId(value: string): string | undefined {
  return value.match(/([0-9a-f]{32})(?:\.[^.]+)?$/i)?.[1]?.toLocaleLowerCase();
}

function knownIdInTarget<T>(target: string, pages: Map<string, T>): string | undefined {
  for (const id of pages.keys()) if (target.toLocaleLowerCase().includes(id)) return id;
  return undefined;
}

function buildinTitle(stem: string): string {
  return stem.replace(/\+?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "").replace(/\+/g, " ").trim();
}

function notionTitle(stem: string): string {
  return stem.replace(/\s+[0-9a-f]{32}$/i, "").trim();
}

function markdownTitle(markdown: string): string {
  return plainLinkLabel(markdown.match(/^\uFEFF?#\s+([^\r\n]+)/)?.[1] ?? "");
}

function htmlTitle(html: string): string {
  return new DOMParser().parseFromString(html, "text/html").title.replace(/\s+/g, " ").trim();
}

function cleanUnpairedParent(path: string, format: ImportFormat, pageFolders: Map<string, ImportPage>): string {
  if (!path) return "";
  const segments = normalizeSourcePath(path).split("/").filter(Boolean);
  const result: string[] = [];
  let current = "";
  for (const segment of segments) {
    current = normalizeSourcePath(`${current}/${segment}`);
    const paired = pageFolders.get(sourceKey(current));
    if (paired) result.push(paired.targetTitle || paired.title);
    else result.push(sanitizePageName(format === "buildin-md" ? decodeSourceSegment(segment).replace(/\+/g, " ") : decodeSourceSegment(segment).replace(/\s+[0-9a-f]{32}$/i, "")));
  }
  return result.join("/");
}

function uniqueImportName(app: App, requestedName: string): string {
  const base = sanitizePageName(requestedName);
  let path = base;
  let suffix = 2;
  while (app.vault.getAbstractFileByPath(path) || app.vault.getAbstractFileByPath(`${path}.md`)) {
    path = `${base} ${suffix++}`;
  }
  return path;
}

function normalizeImportName(value: string): string {
  const trimmed = value.trim();
  return trimmed ? sanitizePageName(trimmed) : "";
}

function sanitizePageName(value: string): string {
  return value.replace(/[\\/:*?"<>|\0]/g, "-").replace(/[. ]+$/g, "").replace(/\s+/g, " ").trim() || "Без названия";
}

function sanitizeAttachmentName(value: string, format: ImportFormat): string {
  const decoded = format === "buildin-md" ? value.replace(/\+/g, " ") : value;
  const cleaned = decoded.replace(/[\\/:*?"<>|\0]/g, "-").replace(/[. ]+$/g, "").trim();
  return cleaned || "file";
}

function appendFilenameSuffix(name: string, suffix: number): string {
  const ext = name.match(/(\.[^.]+)$/)?.[1] ?? "";
  const stem = ext ? name.slice(0, -ext.length) : name;
  return `${stem} ${suffix}${ext}`;
}

function cleanMarkdownTarget(value: string): string {
  const trimmed = value.trim();
  const unwrapped = trimmed.startsWith("<") && trimmed.endsWith(">") ? trimmed.slice(1, -1) : trimmed;
  return unwrapped.replace(/\s+["'][^"']*["']\s*$/, "");
}

function stripQueryAndHash(value: string): string {
  if (value.startsWith("#")) return value;
  return value.replace(/[?#].*$/, "");
}

function isExternalTarget(value: string): boolean {
  return /^(?:https?:|mailto:|obsidian:|data:)/i.test(value);
}

function plainLinkLabel(value: string): string {
  return value.replace(/[`*_~]/g, "").replace(/\\([\\`*_[\]{}()#+.!|-])/g, "$1").replace(/\s+/g, " ").trim();
}

function escapeWikiAlias(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\]/g, "\\]");
}

function decodeSourcePath(value: string): string {
  return value.replace(/\\/g, "/").split("/").map(decodeSourceSegment).join("/");
}

function decodeSourceSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizeSourcePath(value: string): string {
  const result: string[] = [];
  for (const segment of value.replace(/\\/g, "/").split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") result.pop();
    else result.push(segment);
  }
  return result.join("/");
}

function sourceKey(value: string): string {
  return decodeSourcePath(normalizeSourcePath(value)).toLocaleLowerCase();
}

function dirname(value: string): string {
  const normalized = normalizeSourcePath(value);
  const index = normalized.lastIndexOf("/");
  return index < 0 ? "" : normalized.slice(0, index);
}

function basename(value: string): string {
  return normalizeSourcePath(value).split("/").pop() ?? "";
}

function extension(value: string): string {
  return value.match(/\.([^.]+)$/)?.[1]?.toLocaleLowerCase() ?? "";
}

function stripExtension(value: string): string {
  return value.replace(/\.[^.]+$/, "");
}

function pathDepth(value: string): number {
  return value.split("/").filter(Boolean).length;
}
