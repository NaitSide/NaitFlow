import { App, getFrontMatterInfo, htmlToMarkdown, normalizePath, parseYaml, requestUrl, TAbstractFile, TFile, TFolder } from "obsidian";
import { BlobReader, BlobWriter, configure, Entry, TextWriter, ZipReader } from "@zip.js/zip.js";
import { ensureFolder, FIELDS } from "./model";

configure({ useWebWorkers: false });

export type ImportFormat = "buildin-md" | "notion-md" | "notion-html" | "notion-api";

export interface ImportSource {
  readonly path: string;
  readonly name: string;
  readonly extension: string;
  readText(): Promise<string>;
  readBinary(): Promise<ArrayBuffer>;
}

export interface NotionPageMetadata {
  title: string;
  icon?: string;
  cover?: string;
  created?: string;
  edited?: string;
}

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
    try {
      await archive.readZip(file);
      return archive;
    } catch (error) {
      await archive.close();
      throw error;
    }
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
  readonly source: ImportSource;
  readonly sourcePath: string;
  readonly sourceId: string;
  readonly sourceFolderPath: string;
  readonly rawContent: string;
  title: string;
  parent?: ImportPage;
  targetTitle: string;
  targetPath: string;
  targetFolderPath: string;
  filesFolder?: string;
  icon?: string;
  cover?: string;
  coverY?: number;
  notionMeta?: NotionPageMetadata;
}

interface ImportAttachment {
  readonly source: ImportSource;
  readonly sourcePath: string;
  readonly targetPath: string;
  readonly owner?: ImportPage;
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
  readonly covers?: { readonly saved: number; readonly linked: number };
  readonly attachmentFailures?: ReadonlyArray<{ path: string; error: ImportDownloadError }>;
  readonly buildinNotes?: readonly BuildinImportedNote[];
}

export interface BuildinImportedNote {
  readonly id: string;
  readonly path: string;
}

export const BUILDIN_ID_FIELD = "naitflow-buildin-id";

export class ImportDownloadError extends Error {
  constructor(readonly reason: "http" | "network" | "url" | "size" | "html" | "source", readonly status?: number) {
    super(`notion-media-${reason}`);
  }
}

const coverExtensions: ReadonlyMap<string, string> = new Map([
  ["image/jpeg", "jpg"], ["image/png", "png"], ["image/webp", "webp"],
  ["image/gif", "gif"], ["image/avif", "avif"], ["image/svg+xml", "svg"],
  ["image/bmp", "bmp"], ["image/x-icon", "ico"], ["image/vnd.microsoft.icon", "ico"]
]);

export type ImportImageResult =
  | { kind: "saved"; bytes: ArrayBuffer; extension: string }
  | { kind: "http"; status: number }
  | { kind: "format"; contentType: string; byteLength: number }
  | { kind: "network" | "timeout" | "size" | "url" };

export async function downloadImportImage(source: string, options?: { detectRasterFormat?: boolean }): Promise<ImportImageResult> {
  let timer: number | undefined;
  try {
    const url = new URL(source);
    if (url.username || url.password || !/^https?:$/.test(url.protocol)) return { kind: "url" };
    const response = await Promise.race([
      requestUrl({ url: url.href, throw: false }),
      new Promise<undefined>((resolve) => { timer = setTimeout(resolve, 8000); })
    ]);
    if (!response) return { kind: "timeout" };
    if (response.status !== 200) return { kind: "http", status: response.status };
    const contentType = Object.entries(response.headers)
      .find(([key]) => key.toLowerCase() === "content-type")?.[1].split(";")[0]?.trim().toLowerCase() ?? "";
    const bytes = response.arrayBuffer;
    let extension = coverExtensions.get(contentType);
    if (options?.detectRasterFormat && (!contentType || contentType === "application/octet-stream" || contentType === "binary/octet-stream")) {
      const header = new Uint8Array(bytes, 0, Math.min(8, bytes.byteLength));
      if (header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff) extension = "jpg";
      if ([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((byte, index) => header[index] === byte)) extension = "png";
    }
    if (!extension || !bytes.byteLength) {
      return { kind: "format", contentType: /^[a-z0-9.+-]{1,40}\/[a-z0-9.+-]{1,50}$/.test(contentType) ? contentType : "", byteLength: bytes.byteLength };
    }
    if (bytes.byteLength > 20 * 1024 * 1024) return { kind: "size" };
    return { kind: "saved", bytes, extension };
  } catch {
    return { kind: "network" };
  } finally {
    clearTimeout(timer);
  }
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
  readonly remoteCoversCount: number;

  private readonly pageById = new Map<string, ImportPage>();
  private readonly pageBySourcePath = new Map<string, ImportPage>();
  private readonly attachmentBySourcePath = new Map<string, ImportAttachment>();
  private readonly attachmentsByPage = new Map<ImportPage, Map<string, ImportAttachment>>();

  constructor(
    private readonly app: App,
    private readonly archive: { close(): Promise<void> },
    format: ImportFormat,
    sourceName: string,
    private readonly pages: ImportPage[],
    private readonly attachments: ImportAttachment[],
    renamedCount: number,
    unresolvedLinksCount: number,
    private readonly checkActive: () => void = () => {},
    private readonly recordBuildinIds = false
  ) {
    this.format = format;
    this.sourceName = sourceName;
    this.pagesCount = pages.length;
    this.attachmentsCount = attachments.length;
    this.renamedCount = renamedCount;
    this.unresolvedLinksCount = unresolvedLinksCount;
    this.iconsCount = pages.filter((page) => page.icon).length;
    this.remoteCoversCount = pages.filter((page) => /^https?:\/\//i.test(page.cover ?? "")).length;
    const destination = format === "notion-api" ? "_import" : `_import_${format.replace("-", "_")}`;
    this.defaultDestination = uniqueImportName(app, destination);
    for (const page of pages) {
      this.pageById.set(page.sourceId, page);
      this.pageBySourcePath.set(sourceKey(page.sourcePath), page);
    }
    for (const attachment of attachments) {
      const key = sourceKey(attachment.sourcePath);
      if (!this.attachmentBySourcePath.has(key)) this.attachmentBySourcePath.set(key, attachment);
      if (attachment.owner) {
        const owned = this.attachmentsByPage.get(attachment.owner) ?? new Map<string, ImportAttachment>();
        owned.set(key, attachment);
        this.attachmentsByPage.set(attachment.owner, owned);
      }
    }
  }

  async close(): Promise<void> {
    await this.archive.close();
  }

  async execute(destinationInput: string, onProgress: (progress: ImportProgress) => void): Promise<ImportResult> {
    this.checkActive();
    const requestedName = normalizeImportName(destinationInput);
    if (!requestedName) throw new Error("destination-empty");
    if (this.format === "notion-api") return this.executeNotion(requestedName, onProgress);
    const destination = uniqueImportName(this.app, requestedName);
    const created = this.recordBuildinIds ? [] as TAbstractFile[] : undefined;
    try {
      return await this.executeArchive(destination, onProgress, created);
    } catch (error) {
      for (const item of created?.reverse() ?? []) {
        if (this.app.vault.getAbstractFileByPath(item.path) !== item || (item instanceof TFolder && item.children.length)) continue;
        try { await this.app.vault.delete(item); } catch { /* Preserve the original failure. */ }
      }
      throw error;
    }
  }

  private async executeArchive(destination: string, onProgress: (progress: ImportProgress) => void, created?: TAbstractFile[]): Promise<ImportResult> {
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
    if (created) {
      for (const folder of folders) {
        const parent = dirname(folder);
        if (parent) folders.add(parent);
      }
    }
    for (const folder of [...folders].sort((a, b) => pathDepth(a) - pathDepth(b))) {
      this.checkActive();
      if (created) created.push(await this.app.vault.createFolder(folder));
      else await ensureFolder(this.app, folder);
    }
    this.checkActive();
    const root = await this.app.vault.create(`${destination}.md`, "");
    created?.push(root);

    const total = this.pages.length + this.attachments.length;
    let current = 0;
    const downloadedCovers = new Map<string, { file: TFile; extension: string } | undefined>();
    const attachmentPaths = new Set(this.attachments.map(({ targetPath }) => sourceKey(targetPath)));
    let savedCovers = 0;
    let linkedCovers = 0;
    for (const page of this.pages) {
      this.checkActive();
      onProgress({ current, total, label: page.title });
      const body = this.format === "notion-html"
        ? this.convertHtml(page, destination)
        : this.convertMarkdown(page, destination);
      const targetPath = normalizePath(`${destination}/${page.targetPath}`);
      const file = await this.app.vault.create(targetPath, body);
      created?.push(file);
      let localCover: string | undefined;
      if (this.format === "notion-html" && page.cover && /^https?:\/\//i.test(page.cover)) {
        const cached = downloadedCovers.get(page.cover);
        const image = cached
          ? { kind: "saved" as const, bytes: await this.app.vault.readBinary(cached.file), extension: cached.extension }
          : downloadedCovers.has(page.cover) ? undefined : await downloadImportImage(page.cover);
        if (image?.kind === "saved") {
          const folder = page.filesFolder ?? `${page.targetFolderPath}/_files`;
          const name = `_cover.${image.extension}`;
          let target = `${folder}/${name}`;
          for (let suffix = 2; attachmentPaths.has(sourceKey(target)); suffix++) {
            target = `${folder}/${appendFilenameSuffix(name, suffix)}`;
          }
          localCover = normalizePath(`${destination}/${target}`);
          await ensureFolder(this.app, dirname(localCover));
          const file = await this.app.vault.createBinary(localCover, image.bytes);
          if (!cached) downloadedCovers.set(page.cover, { file, extension: image.extension });
          savedCovers++;
        } else {
          downloadedCovers.set(page.cover, undefined);
          linkedCovers++;
        }
      }
      await this.applyPageMeta(file, page, destination, localCover);
      current += 1;
      onProgress({ current, total, label: page.title });
    }

    for (const attachment of this.attachments) {
      this.checkActive();
      onProgress({ current, total, label: basename(attachment.targetPath) });
      const targetPath = normalizePath(`${destination}/${attachment.targetPath}`);
      const bytes = await attachment.source.readBinary();
      this.checkActive();
      const file = await this.app.vault.createBinary(targetPath, bytes);
      created?.push(file);
      current += 1;
      onProgress({ current, total, label: basename(attachment.targetPath) });
    }

    this.checkActive();
    const buildinNotes = this.recordBuildinIds ? this.pages.map((page) => ({
      id: page.sourceId, path: normalizePath(`${destination}/${page.targetPath}`)
    })) : undefined;
    return {
      destination, pages: this.pages.length, attachments: this.attachments.length,
      ...(buildinNotes ? { buildinNotes } : {}),
      ...(this.remoteCoversCount && this.format === "notion-html" ? { covers: { saved: savedCovers, linked: linkedCovers } } : {})
    };
  }

  private async executeNotion(destination: string, onProgress: (progress: ImportProgress) => void): Promise<ImportResult> {
    const rootId = this.pages[0]?.sourceId;
    const marker = this.app.vault.getAbstractFileByPath(`${destination}.md`);
    const folder = this.app.vault.getAbstractFileByPath(destination);
    // Only resume a destination created for this exact page set. Never overwrite user notes.
    const signature = this.pages.map((page) => `${page.sourceId}:${page.targetPath}`).sort().join("\n");
    if (marker || folder) {
      if (!(marker instanceof TFile)) throw new Error("destination-exists");
      if (folder && !(folder instanceof TFolder)) throw new Error("destination-exists");
      const data = await this.readImportProperties(marker);
      if (data?.["naitflow-notion-root"] !== rootId || data?.["naitflow-notion-plan"] !== signature) throw new Error("destination-exists");
    }
    const existing = new Set<string>();
    for (const page of this.pages) {
      const path = normalizePath(`${destination}/${page.targetPath}`);
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!file) continue;
      if (!(file instanceof TFile) || (await this.readImportProperties(file))?.["naitflow-notion-id"] !== page.sourceId) throw new Error("destination-exists");
      existing.add(path);
    }
    this.checkActive();
    if (!marker) {
      const file = await this.app.vault.create(`${destination}.md`, "");
      try {
        await this.app.fileManager.processFrontMatter(file, (fm) => {
          fm["naitflow-notion-root"] = rootId;
          fm["naitflow-notion-plan"] = signature;
        });
      } catch (error) { await this.app.vault.delete(file); throw error; }
    }
    this.checkActive();
    await ensureFolder(this.app, destination);
    const total = this.pages.length + this.attachments.length;
    let current = 0;
    const attachmentFailures: NonNullable<ImportResult["attachmentFailures"]>[number][] = [];
    // Media go first, but unavailable files should not block the notes. Keep local
    // link targets stable so a retry can fill the gaps without rewriting notes.
    for (const attachment of this.attachments) {
      this.checkActive();
      const path = normalizePath(`${destination}/${attachment.targetPath}`);
      onProgress({ current, total, label: attachment.source.name });
      const existingAttachment = this.app.vault.getAbstractFileByPath(path);
      if (existingAttachment && !(existingAttachment instanceof TFile)) throw new Error("destination-exists");
      if (!existingAttachment) {
        let bytes: ArrayBuffer;
        try {
          bytes = await attachment.source.readBinary();
        } catch (error) {
          this.checkActive();
          if (!(error instanceof ImportDownloadError)) throw error;
          attachmentFailures.push({ path, error });
          onProgress({ current: ++current, total, label: attachment.source.name });
          continue;
        }
        this.checkActive();
        await ensureFolder(this.app, dirname(path));
        this.checkActive();
        await this.app.vault.createBinary(path, bytes);
      }
      onProgress({ current: ++current, total, label: attachment.source.name });
    }
    for (const page of this.pages) {
      this.checkActive();
      const path = normalizePath(`${destination}/${page.targetPath}`);
      if (!existing.has(path)) {
        await ensureFolder(this.app, dirname(path));
        this.checkActive();
        const file = await this.app.vault.create(path, this.convertMarkdown(page, destination));
        try { await this.applyPageMeta(file, page, destination); }
        catch (error) { await this.app.vault.delete(file); throw error; }
      }
      onProgress({ current: ++current, total, label: page.title });
    }
    return { destination, pages: this.pages.length, attachments: this.attachments.length - attachmentFailures.length, attachmentFailures };
  }

  private async readImportProperties(file: TFile): Promise<Record<string, unknown> | undefined> {
    // The metadata cache can lag behind an import that has just written a file.
    const info = getFrontMatterInfo(await this.app.vault.read(file));
    if (!info.exists) return undefined;
    try { return parseYaml(info.frontmatter) as Record<string, unknown> | undefined; }
    catch { return undefined; }
  }

  private convertMarkdown(page: ImportPage, destination: string): string {
    let markdown = page.rawContent.replace(/\r\n?/g, "\n");
    if (this.format === "notion-md") markdown = removeMatchingTitle(markdown, page.title);
    return rewriteOutsideFences(markdown, (chunk) => {
      let result = "";
      let copied = 0;
      for (const link of markdownLinks(chunk)) {
        const resolved = this.resolveTarget(page, cleanMarkdownTarget(link.target));
        if (!resolved) continue;
        result += chunk.slice(copied, link.from) + renderResolvedLink(resolved, destination, plainLinkLabel(link.label), link.embed, page.filesFolder);
        copied = link.to;
      }
      return result + chunk.slice(copied);
    }).trimEnd() + "\n";
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

    // Notion puts the page icon inside the anchor of a subpage block.
    // Remove it before processing images so the anchor keeps its destination.
    for (const icon of body.querySelectorAll(".link-to-page a[href] img.icon")) icon.remove();

    for (const image of Array.from(body.querySelectorAll<HTMLImageElement>("img[src]"))) {
      const source = image.getAttribute("src") ?? "";
      const resolved = this.resolveTarget(page, source);
      if (!resolved) continue;
      const replacement = document.createTextNode(makeToken(renderResolvedLink(resolved, destination, image.alt, true, page.filesFolder)));
      const linked = image.closest("a");
      (linked ?? image).replaceWith(replacement);
    }

    for (const link of Array.from(body.querySelectorAll<HTMLAnchorElement>("a[href]"))) {
      const href = link.getAttribute("href") ?? "";
      const resolved = this.resolveTarget(page, href);
      if (!resolved) continue;
      const label = (link.textContent ?? "").trim();
      link.replaceWith(document.createTextNode(makeToken(renderResolvedLink(resolved, destination, label, false, page.filesFolder))));
    }

    for (const span of body.querySelectorAll<HTMLSpanElement>("span[style]")) {
      // Notion's HTML exporter represents underlining as a thin bottom border.
      if (span.style.borderBottomWidth !== "0.05em" || span.style.borderBottomStyle !== "solid") continue;
      span.before(makeToken("<u>"));
      span.after(makeToken("</u>"));
    }

    let markdown = htmlToMarkdown(body.innerHTML).replace(/\r\n?/g, "\n");
    for (const [token, value] of tokens) markdown = markdown.split(token).join(value);
    return markdown.trim() + "\n";
  }

  private resolveTarget(page: ImportPage, rawTarget: string): ResolvedTarget | null {
    const target = decodeSourcePath(stripQueryAndHash(rawTarget));
    const id = this.format === "buildin-md" ? buildinLinkId(target)
      : knownIdInTarget(this.format === "notion-api" ? target.replace(/-/g, "") : target, this.pageById);
    if (isExternalTarget(target)) {
      const linkedPage = id ? this.pageById.get(id) : undefined;
      return linkedPage ? { kind: "page", targetPath: linkedPage.targetPath, page: linkedPage } : null;
    }
    for (const path of sourceLinkKeys(page.sourcePath, rawTarget)) {
      const linkedPage = this.pageBySourcePath.get(path);
      if (linkedPage) return { kind: "page", targetPath: linkedPage.targetPath, page: linkedPage };
      const attachment = this.attachmentsByPage.get(page)?.get(path) ?? this.attachmentBySourcePath.get(path);
      if (attachment) return { kind: "attachment", targetPath: attachment.targetPath };
    }
    if (target.startsWith("#")) return null;
    const linkedPageById = id ? this.pageById.get(id) : undefined;
    if (linkedPageById) return { kind: "page", targetPath: linkedPageById.targetPath, page: linkedPageById };
    return null;
  }

  private async applyPageMeta(file: TFile, page: ImportPage, destination: string, localCover?: string): Promise<void> {
    let cover = page.cover;
    if (cover && !isExternalTarget(cover)) {
      const resolved = this.resolveTarget(page, cover);
      if (resolved?.kind === "attachment") cover = normalizePath(`${destination}/${resolved.targetPath}`);
    }
    cover = localCover ?? cover;
    let icon = page.icon;
    if (icon?.startsWith("image:")) {
      const source = icon.slice(6);
      const resolved = this.resolveTarget(page, source);
      if (resolved?.kind === "attachment") icon = `image:${normalizePath(`${destination}/${resolved.targetPath}`)}`;
      else if (this.format !== "notion-html" || !/^https?:\/\//i.test(source)) icon = undefined;
    }
    if (!icon && !cover && !page.notionMeta && !this.recordBuildinIds) return;
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      if (this.recordBuildinIds) frontmatter[BUILDIN_ID_FIELD] = page.sourceId;
      if (icon) frontmatter[FIELDS.icon] = icon;
      if (cover) frontmatter[FIELDS.cover] = cover;
      if (cover && page.coverY !== undefined) frontmatter[FIELDS.coverY] = page.coverY;
      if (page.notionMeta) {
        frontmatter["naitflow-notion-id"] = page.sourceId;
        if (page.notionMeta.created) frontmatter["naitflow-notion-created"] = page.notionMeta.created;
        if (page.notionMeta.edited) frontmatter["naitflow-notion-edited"] = page.notionMeta.edited;
      }
    });
  }
}

export async function prepareNotionSources(
  app: App, files: ImportSource[], metadata: Map<string, NotionPageMetadata>,
  close: () => Promise<void>, checkActive: () => void
): Promise<NaitFlowImportPlan> {
  const pages = await readPages(files, "notion-api");
  for (const page of pages) {
    const meta = metadata.get(page.sourceId);
    if (!meta) throw new Error("pages-not-found");
    page.title = sanitizePageName(meta.title);
    page.notionMeta = meta;
    page.cover = meta.cover;
    page.icon = meta.icon;
  }
  if (!pages.length) throw new Error("pages-not-found");
  const renamed = assignTargets(pages, "notion-api");
  const attachments = assignAttachments(files, pages, "notion-api");
  return new NaitFlowImportPlan(app, { close }, "notion-api", pages[0]!.title, pages, attachments, renamed,
    countUnresolvedLinks(pages, attachments, "notion-api"), checkActive);
}

export function prepareImport(app: App, file: File): Promise<NaitFlowImportPlan> {
  return prepareArchive(app, file);
}

export function prepareBuildinImport(app: App, file: File, signal: AbortSignal): Promise<NaitFlowImportPlan> {
  return prepareArchive(app, file, signal);
}

async function prepareArchive(app: App, file: File, buildinSignal?: AbortSignal): Promise<NaitFlowImportPlan> {
  buildinSignal?.throwIfAborted();
  const archive = await LoadedArchive.open(file);
  try {
    const format = detectFormat(archive.files);
    if (buildinSignal && format !== "buildin-md") throw new Error("buildin-archive-format");
    const pages = await readPages(archive.files, format);
    buildinSignal?.throwIfAborted();
    if (!pages.length) throw new Error("pages-not-found");
    if (format === "buildin-md") applyBuildinLinkTitles(pages);
    const renamedCount = assignTargets(pages, format);
    const attachments = assignAttachments(archive.files, pages, format);
    const unresolvedLinksCount = countUnresolvedLinks(pages, attachments, format);
    return new NaitFlowImportPlan(app, archive, format, file.name, pages, attachments, renamedCount, unresolvedLinksCount,
      () => buildinSignal?.throwIfAborted(), Boolean(buildinSignal));
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

async function readPages(files: ImportSource[], format: ImportFormat): Promise<ImportPage[]> {
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
    for (const link of markdownLinks(sourcePage.rawContent)) {
      if (link.embed) continue;
      const label = plainLinkLabel(link.label);
      const id = buildinLinkId(decodeSourcePath(stripQueryAndHash(cleanMarkdownTarget(link.target))));
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

function assignAttachments(files: ImportSource[], pages: ImportPage[], format: ImportFormat): ImportAttachment[] {
  const pageExtensions = new Set(["md", "html"]);
  const pageSources = new Set(pages.map((page) => sourceKey(page.sourcePath)));
  const owners = [...pages].sort((a, b) => b.sourceFolderPath.length - a.sourceFolderPath.length);
  const references = new Map<string, Set<ImportPage>>();
  const coverNames = new Map<ImportPage, { source: ImportSource; name: string }>();
  const usedNames = new Map<string, Set<string>>();
  let sharedFolder = "Вложенные файлы";
  if (format !== "notion-api") {
    const reserved = new Set<string>();
    for (const page of pages) {
      reserved.add(sourceKey(page.targetPath));
      for (let folder = page.targetFolderPath; folder; folder = dirname(folder)) {
        reserved.add(sourceKey(folder));
      }
    }
    const allocate = (parent: string): string => {
      const base = parent ? `${parent}/_files` : "_files";
      let folder = base;
      for (let suffix = 2; reserved.has(sourceKey(folder)); suffix++) folder = `${base} ${suffix}`;
      reserved.add(sourceKey(folder));
      return folder;
    };
    sharedFolder = allocate("");
    const filesByKey = new Map(files.map((file) => [sourceKey(file.path), file]));
    for (const page of pages) {
      page.filesFolder = allocate(page.targetFolderPath);
      const targets = format === "notion-html" ? htmlTargets(page.rawContent) : markdownTargets(page.rawContent).map(cleanMarkdownTarget);
      if (page.cover) {
        targets.push(page.cover);
        if (format === "notion-html" && !isExternalTarget(page.cover)) {
          const coverKey = sourceLinkKeys(page.sourcePath, page.cover).find((path) => filesByKey.has(path));
          const source = coverKey && !pageSources.has(coverKey) ? filesByKey.get(coverKey) : undefined;
          if (source) {
            const original = sanitizeAttachmentName(decodeSourceSegment(source.name), format);
            const name = `_cover${original.match(/(\.[^.]+)$/)?.[1] ?? ""}`;
            coverNames.set(page, { source, name });
            usedNames.set(page.filesFolder, new Set([name.toLocaleLowerCase()]));
          }
        }
      }
      if (page.icon?.startsWith("image:")) targets.push(page.icon.slice(6));
      for (const target of targets) {
        if (isExternalTarget(target)) continue;
        const key = sourceLinkKeys(page.sourcePath, target).find((path) => filesByKey.has(path));
        if (!key || pageSources.has(key)) continue;
        const referencedBy = references.get(key) ?? new Set<ImportPage>();
        referencedBy.add(page);
        references.set(key, referencedBy);
      }
    }
  }
  const attachments: ImportAttachment[] = [];
  for (const source of files) {
    if (pageSources.has(sourceKey(source.path))) continue;
    if (pageExtensions.has(source.extension) && basename(source.path).toLocaleLowerCase() === "index.html") continue;
    const referencedBy = references.get(sourceKey(source.path));
    const inferred = owners.find((page) => sourceKey(source.path).startsWith(`${sourceKey(page.sourceFolderPath)}/`));
    for (const owner of referencedBy ?? [inferred]) {
      const folder = owner?.filesFolder ?? (owner ? `${owner.targetFolderPath}/Вложенные файлы` : sharedFolder);
      const originalName = sanitizeAttachmentName(decodeSourceSegment(source.name), format);
      const used = usedNames.get(folder) ?? new Set<string>();
      const cover = owner && coverNames.get(owner);
      let name = cover && cover.source === source ? cover.name : originalName;
      if (!cover || cover.source !== source) {
        let suffix = 2;
        while (used.has(name.toLocaleLowerCase())) name = appendFilenameSuffix(originalName, suffix++);
      }
      used.add(name.toLocaleLowerCase());
      usedNames.set(folder, used);
      attachments.push({ source, sourcePath: source.path, targetPath: normalizeSourcePath(`${folder}/${name}`), owner });
    }
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
      const source = format === "notion-html" ? rawTarget : cleanMarkdownTarget(rawTarget);
      const target = decodeSourcePath(stripQueryAndHash(source));
      const id = knownIdInTarget(target, pageById);
      if (isExternalTarget(target)) {
        if (format === "buildin-md" && /^https?:\/\/(?:www\.)?buildin\.ai\//i.test(target)) {
          const linkedId = buildinId(target);
          if (linkedId && !pageById.has(linkedId)) count += 1;
        }
        continue;
      }
      if (target.startsWith("#")) continue;
      if (!sourceLinkKeys(page.sourcePath, source).some((path) => knownPaths.has(path)) && !id) count += 1;
    }
  }
  return count;
}

function readHtmlMeta(page: ImportPage): void {
  const document = new DOMParser().parseFromString(page.rawContent, "text/html");
  if (!document.querySelector("div.page-body")) throw new Error(`page-body-missing:${page.sourcePath}`);
  const emoji = document.querySelector<HTMLElement>(".page-header-icon [data-emoji]")?.getAttribute("data-emoji")?.trim();
  const image = document.querySelector<HTMLImageElement>(".page-header-icon img.icon[src]")?.getAttribute("src")?.trim();
  const cover = document.querySelector<HTMLImageElement>("img.page-cover-image");
  if (emoji) page.icon = `emoji:${emoji}`;
  else if (image) page.icon = `image:${image}`;
  if (cover?.src) page.cover = cover.getAttribute("src") ?? cover.src;
  const position = cover?.style.objectPosition ?? "";
  const y = position.match(/(-?\d+(?:\.\d+)?)%\s*$/)?.[1];
  if (y !== undefined) page.coverY = Math.max(0, Math.min(100, Math.round(Number(y))));
}

function markdownTargets(markdown: string): string[] {
  const targets: string[] = [];
  rewriteOutsideFences(markdown, (chunk) => {
    for (const link of markdownLinks(chunk)) targets.push(link.target);
    return chunk;
  });
  return targets;
}

function* markdownLinks(markdown: string) {
  const opening = /(!?)\[([^\]\n]*)\]\([ \t]*/g;
  for (let match = opening.exec(markdown); match; match = opening.exec(markdown)) {
    const start = opening.lastIndex;
    let end = start;
    let depth = 1;
    let inAngleDestination = markdown[start] === "<";
    for (; end < markdown.length && markdown[end] !== "\n"; end++) {
      const char = markdown[end];
      if (char === "\\" && /[()<>\\]/.test(markdown[end + 1] ?? "")) end++;
      else if (inAngleDestination) inAngleDestination = char !== ">";
      else if (char === "(") depth++;
      else if (char === ")" && --depth === 0) break;
    }
    if (depth !== 0 || end === start) continue;
    opening.lastIndex = end + 1;
    yield { from: match.index, to: end + 1, label: match[2]!, target: markdown.slice(start, end), embed: match[1] === "!" };
  }
}

function htmlTargets(html: string): string[] {
  const document = new DOMParser().parseFromString(html, "text/html");
  const body = document.querySelector<HTMLElement>("div.page-body");
  if (!body) return [];
  return [
    ...Array.from(body.querySelectorAll<HTMLAnchorElement>("a[href]"), (element) => element.getAttribute("href") ?? ""),
    ...Array.from(body.querySelectorAll<HTMLImageElement>("img[src]"))
      .filter((element) => !element.matches(".link-to-page a[href] img.icon"))
      .map((element) => element.getAttribute("src") ?? "")
  ];
}

export function renderImportPageLink(destination: string, targetPath: string, label: string): string {
  return renderResolvedLink({ kind: "page", targetPath }, destination, label, false, undefined, label.includes("|"));
}

function renderResolvedLink(
  target: ResolvedTarget, destination: string, label: string, embed: boolean, filesFolder?: string, useMarkdown = false
): string {
  const fullPath = normalizePath(`${destination}/${target.targetPath}`);
  label = label.trim() || target.page?.targetTitle || "";
  const local = target.kind === "attachment" && filesFolder && target.targetPath.startsWith(`${filesFolder}/`);
  if (local || useMarkdown || /[#[\]]/.test(fullPath)) {
    const parent = local ? dirname(dirname(filesFolder)) : "";
    const path = local ? `./${target.targetPath.slice(parent ? parent.length + 1 : 0)}` : fullPath;
    const url = path.split("/").map((segment) => encodeURIComponent(segment).replace(/\(/g, "%28").replace(/\)/g, "%29")).join("/");
    const text = label.replace(/[\\[\]]/g, "\\$&");
    return `${target.kind === "attachment" && embed ? "!" : ""}[${text || basename(fullPath)}](${url})`;
  }
  if (target.kind === "attachment") {
    if (embed) return `![[${fullPath}]]`;
    return label ? `[[${fullPath}|${escapeWikiAlias(label)}]]` : `[[${fullPath}]]`;
  }
  const pagePath = fullPath.replace(/\.md$/i, "");
  return label ? `[[${pagePath}|${escapeWikiAlias(label)}]]` : `[[${pagePath}]]`;
}

function rewriteOutsideFences(markdown: string, rewrite: (chunk: string) => string): string {
  const lines = markdown.split(/(?<=\n)/);
  let fence: { character: string; length: number } | null = null;
  let plain = "";
  let result = "";
  const flush = (): void => {
    if (!plain) return;
    result += rewriteOutsideInlineCode(plain, rewrite);
    plain = "";
  };
  for (const line of lines) {
    const marker = line.match(/^\s*(```+|~~~+)/)?.[1];
    if (marker) {
      flush();
      result += line;
      if (!fence) fence = { character: marker[0]!, length: marker.length };
      else if (marker[0] === fence.character && marker.length >= fence.length && /^\s*(?:`+|~+)\s*$/.test(line)) fence = null;
    } else if (fence) {
      result += line;
    } else {
      plain += line;
    }
  }
  flush();
  return result;
}

function rewriteOutsideInlineCode(text: string, rewrite: (chunk: string) => string): string {
  let result = "";
  let copied = 0;
  const markers = Array.from(text.matchAll(/`+/g));
  for (let i = 0; i < markers.length; i++) {
    const opening = markers[i]!;
    const end = markers.findIndex((marker, j) => j > i && marker[0].length === opening[0].length);
    if (end < 0) continue;
    const closing = markers[end]!;
    result += rewrite(text.slice(copied, opening.index)) + text.slice(opening.index, closing.index + closing[0].length);
    copied = closing.index + closing[0].length;
    i = end;
  }
  return result + rewrite(text.slice(copied));
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

function buildinLinkId(target: string): string | undefined {
  if (isExternalTarget(target) && !/^https?:\/\/(?:www\.)?buildin\.ai\//i.test(target)) return;
  const name = basename(target.replace(/\/$/, ""));
  if (!name.includes(".") || /\.md$/i.test(name)) return buildinId(name);
  return undefined;
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

export function uniqueImportName(app: App, requestedName: string): string {
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

export function sanitizePageName(value: string): string {
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
  const trimmed = value.trim().replace(/\s+["'][^"']*["']\s*$/, "");
  const unwrapped = trimmed.startsWith("<") && trimmed.endsWith(">") ? trimmed.slice(1, -1) : trimmed;
  return unwrapped.replace(/\\([()<>])/g, "$1");
}

function stripQueryAndHash(value: string): string {
  if (value.startsWith("#")) return value;
  return value.replace(/[?#].*$/, "");
}

function sourceLinkKeys(sourcePath: string, target: string): string[] {
  const relativeKey = (value: string): string => {
    const decoded = decodeSourcePath(value);
    return sourceKey(decoded.startsWith("/") ? decoded : `${dirname(sourcePath)}/${decoded}`);
  };
  // Some Notion archives leave literal '#' characters in exported filenames.
  const clean = stripQueryAndHash(target);
  return clean === target ? [relativeKey(target)] : [relativeKey(target), relativeKey(clean)];
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
