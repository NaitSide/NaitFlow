import { App, requestUrl } from "obsidian";
import { t } from "./i18n";
import { ImportDownloadError, ImportSource, NaitFlowImportPlan, NotionPageMetadata, prepareNotionSources } from "./importer";

type Json = Record<string, any>;
export interface NotionImportIssue { page: string; type: string }
export interface NotionPreview { plan: NaitFlowImportPlan; issues: NotionImportIssue[] }

export function notionPageId(value: string): string {
  const trimmed = value.trim();
  const direct = trimmed.match(/^[0-9a-f]{32}$/i) ?? trimmed.match(/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i);
  if (direct) return trimmed.replace(/-/g, "").toLowerCase();
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" || !/(^|\.)(notion\.so|notion\.site|notion\.com)$/i.test(url.hostname)) throw new Error();
    const match = url.pathname.match(/([0-9a-f]{32}|[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})\/?$/i);
    if (match?.[1]) return match[1].replace(/-/g, "").toLowerCase();
  } catch { /* A URL must identify a page on a Notion host. */ }
  throw new Error("notion-page-id");
}

function active(signal: AbortSignal): void {
  if (signal.aborted) throw new Error("notion-cancelled");
}

async function pause(ms: number, signal: AbortSignal): Promise<void> {
  active(signal);
  await new Promise<void>((resolve, reject) => {
    const stop = (): void => { clearTimeout(timer); reject(new Error("notion-cancelled")); };
    const timer = setTimeout(() => { signal.removeEventListener("abort", stop); resolve(); }, ms);
    signal.addEventListener("abort", stop, { once: true });
  });
}

export class NotionReader {
  private nextRequest = 0;
  constructor(private token: string, private readonly signal: AbortSignal) {}

  dispose(): void { this.token = ""; }

  async get(path: string): Promise<Json> {
    for (let attempt = 0; attempt < 5; attempt++) {
      active(this.signal);
      await pause(Math.max(0, this.nextRequest - Date.now()), this.signal);
      this.nextRequest = Date.now() + 350;
      let response;
      try {
        response = await requestUrl({ url: `https://api.notion.com/v1/${path}`, method: "GET", throw: false,
          headers: { Authorization: `Bearer ${this.token}`, "Notion-Version": "2026-03-11" } });
      } catch { active(this.signal); throw new Error("notion-network"); }
      active(this.signal);
      if (response.status === 200) return response.json as Json;
      if (response.status === 401) throw new Error("notion-auth");
      if (response.status === 403 || response.status === 404) throw new Error("notion-access");
      if (response.status === 429 && response.json?.additional_data?.rate_limit_reason === "public_api_request_blocked") throw new Error("notion-access");
      if (response.status === 429 || response.status === 529 || response.status >= 500) {
        const header = Object.entries(response.headers).find(([key]) => key.toLowerCase() === "retry-after")?.[1];
        const seconds = Number(header);
        // Bound a single server-directed pause; never retry earlier than Retry-After.
        if (Number.isFinite(seconds) && seconds > 300) throw new Error("notion-rate");
        if (attempt < 4) await pause(Math.max(Number.isFinite(seconds) ? seconds * 1000 : 0, 1000 * 2 ** attempt), this.signal);
        continue;
      }
      throw new Error("notion-request");
    }
    throw new Error("notion-rate");
  }

  async children(id: string): Promise<Json[]> {
    const result: Json[] = [];
    const cursors = new Set<string>();
    let cursor = "";
    do {
      const data = await this.get(`blocks/${id}/children?page_size=100${cursor ? `&start_cursor=${encodeURIComponent(cursor)}` : ""}`);
      if (!Array.isArray(data.results)) throw new Error("notion-request");
      result.push(...data.results);
      if (result.length > 50000) throw new Error("notion-limit");
      cursor = data.has_more ? String(data.next_cursor ?? "") : "";
      if (data.has_more && (!cursor || cursors.has(cursor))) throw new Error("notion-request");
      cursors.add(cursor);
    } while (cursor);
    return result;
  }

  async download(resolve: () => Promise<string>, signed: boolean, allowHtml: boolean): Promise<ArrayBuffer> {
    for (let attempt = 0; ; attempt++) {
      active(this.signal);
      let url: string;
      try { url = await resolve(); }
      catch (error) {
        if (error instanceof Error && error.message === "notion-access") throw new ImportDownloadError("source");
        throw error;
      }
      active(this.signal);
      if (!/^https:\/\//i.test(url)) throw new ImportDownloadError("url");
      let response;
      try { response = await requestUrl({ url, method: "GET", throw: false }); }
      catch {
        active(this.signal);
        if (attempt >= 2) throw new ImportDownloadError("network");
        await pause(1000 * 2 ** attempt, this.signal);
        continue;
      }
      active(this.signal);
      const header = (name: string): string | undefined => Object.entries(response.headers)
        .find(([key]) => key.toLowerCase() === name)?.[1];
      if (response.status === 200) {
        const bytes = response.arrayBuffer;
        if (!allowHtml && /^\s*(?:text\/html|application\/xhtml\+xml)\b/i.test(header("content-type") ?? "")) {
          throw new ImportDownloadError("html");
        }
        if (bytes.byteLength > 100 * 1024 * 1024) throw new ImportDownloadError("size");
        return bytes;
      }
      const status = response.status;
      const retryable = status === 408 || status === 429 || status >= 500 || (signed && status === 403);
      if (attempt >= 2 || !retryable) throw new ImportDownloadError("http", status);
      const retryAfter = header("retry-after");
      const delay = retryAfter && /^\d+$/.test(retryAfter)
        ? Number(retryAfter) * 1000
        : (retryAfter ? Date.parse(retryAfter) - Date.now() : 0);
      if (delay > 30_000) throw new ImportDownloadError("http", status);
      await pause(Math.max(Number.isFinite(delay) ? delay : 0, 1000 * 2 ** attempt), this.signal);
    }
  }
}

function source(path: string, text: string, binary?: () => Promise<ArrayBuffer>): ImportSource {
  return { path, name: path.split("/").pop()!, extension: path.split(".").pop()!.toLowerCase(),
    readText: async () => text,
    readBinary: binary ?? (async () => new TextEncoder().encode(text).buffer as ArrayBuffer) };
}

function escapeText(value: string): string {
  return value.replace(/([\\`*_[\]<>~])/g, "\\$1");
}

function link(text: string, url: string, image = false): string {
  return `${image ? "!" : ""}[${text.replace(/\n/g, " ").replace(/(?<!\\)([\[\]])/g, "\\$1")}](${url.replace(/ /g, "%20").replace(/\(/g, "%28").replace(/\)/g, "%29")})`;
}

function rich(items: Json[] = []): string {
  return items.map((item) => {
    if (item.type === "equation") return `$${item.equation?.expression ?? ""}$`;
    const raw = String(item.plain_text ?? item.text?.content ?? "");
    let text = escapeText(raw);
    const annotations = item.annotations ?? {};
    if (annotations.code) {
      const fence = "`".repeat(Math.max(0, ...Array.from(raw.matchAll(/`+/g), (match) => match[0].length)) + 1);
      text = `${fence} ${raw.replace(/\n/g, " ")} ${fence}`;
    } else {
      if (annotations.bold) text = `**${text}**`;
      if (annotations.italic) text = `*${text}*`;
      if (annotations.strikethrough) text = `~~${text}~~`;
    }
    const page = item.mention?.page?.id;
    const url = item.href ?? item.text?.link?.url ?? (page ? `https://www.notion.so/${page.replace(/-/g, "")}` : "");
    return url ? link(text, url) : text;
  }).join("");
}

function mediaUrl(media: Json | undefined): string {
  return String(media?.file?.url ?? media?.external?.url ?? media?.custom_emoji?.url ?? "");
}

function listItem(text: string, marker: string, indent: number): string {
  // Notion newlines inside an item are intentional. Keep them within its Markdown list item.
  return marker + text.replace(/\r?\n/g, `  \n${" ".repeat(indent)}`);
}

export async function prepareNotionApi(
  app: App, token: string, pageInput: string, signal: AbortSignal, progress: (label: string) => void
): Promise<NotionPreview> {
  const rootId = notionPageId(pageInput);
  if (!token.trim() || /[\r\n]/.test(token)) throw new Error("notion-auth");
  const reader = new NotionReader(token.trim(), signal);
  token = "";
  let closed = false;
  const files: ImportSource[] = [];
  const metadata = new Map<string, NotionPageMetadata>();
  const issues: NotionImportIssue[] = [];
  const visited = new Set<string>();
  let blocksCount = 0;
  let textSize = 0;
  const warn = (page: string, type: string): void => {
    if (!issues.some((issue) => issue.page === page && issue.type === type)) issues.push({ page, type });
  };
  const addMedia = (folder: string, id: string, kind: string, initial: Json, resolve: () => Promise<string>): string => {
    const url = mediaUrl(initial);
    if (!url) throw new Error("notion-media");
    let ext = "";
    try { ext = new URL(url).pathname.match(/\.([a-z0-9]{1,8})$/i)?.[1] ?? ""; } catch { /* Validated when downloading. */ }
    const name = `${id.replace(/-/g, "")}-${kind}.${ext || (kind === "image" || kind === "icon" || kind === "cover" ? "png" : "bin")}`;
    const path = `${folder}/${name}`;
    const signed = Boolean(initial.file);
    const resolveDownload = initial.external ? async () => url : resolve;
    if (!files.some((file) => file.path === path)) {
      files.push(source(path, "", () => reader.download(resolveDownload, signed, /^html?$/i.test(ext))));
    }
    return `${folder.split("/").pop()}/${name}`;
  };

  const visitPage = async (id: string, parentFolder: string, depth: number): Promise<void> => {
    active(signal);
    id = id.replace(/-/g, "").toLowerCase();
    if (visited.has(id)) return;
    if (depth > 64 || visited.size >= 1000) throw new Error("notion-limit");
    visited.add(id);
    const page = await reader.get(`pages/${id}`);
    const titleProperty = Object.values(page.properties ?? {}).find((value: any) => value?.type === "title") as Json | undefined;
    const title = (titleProperty?.title ?? []).map((part: Json) => part.plain_text ?? part.text?.content ?? "").join("") || t("untitled");
    progress(t("notionReadingPage", { count: visited.size, title }));
    const folder = parentFolder ? `${parentFolder}/${id}` : id;
    const meta: NotionPageMetadata = { title, created: page.created_time, edited: page.last_edited_time };
    metadata.set(id, meta);
    if (page.icon?.type === "emoji") meta.icon = `emoji:${page.icon.emoji}`;
    else if (mediaUrl(page.icon)) meta.icon = `image:${addMedia(folder, id, "icon", page.icon, async () => mediaUrl((await reader.get(`pages/${id}`)).icon))}`;
    else if (page.icon) warn(title, "icon");
    if (mediaUrl(page.cover)) meta.cover = addMedia(folder, id, "cover", page.cover, async () => mediaUrl((await reader.get(`pages/${id}`)).cover));
    else if (page.cover) warn(title, "cover");

    const activeBlocks = new Set<string>();
    const render = async (parent: string, nesting: number): Promise<string> => {
      if (nesting > 64 || activeBlocks.has(parent)) throw new Error("notion-limit");
      activeBlocks.add(parent);
      try {
        const blocks = await reader.children(parent);
        const output: string[] = [];
        for (const block of blocks) {
          active(signal);
          if (++blocksCount > 50000) throw new Error("notion-limit");
          const type = String(block.type ?? "unsupported");
          const data: Json = block[type] ?? {};
          let text = rich(data.rich_text);
          let nested = "";
          if (type === "child_page") {
            await visitPage(block.id, folder, depth + 1);
            output.push(link(escapeText(data.title ?? t("untitled")), `https://www.notion.so/${String(block.id).replace(/-/g, "")}`));
            continue;
          }
          if (type === "table") {
            const rows = await reader.children(block.id);
            blocksCount += rows.length;
            if (blocksCount > 50000) throw new Error("notion-limit");
            const width = Number(data.table_width) || 1;
            const cells = rows.map((row) => Array.from({ length: width }, (_, i) => rich(row.table_row?.cells?.[i]).replace(/\|/g, "\\|").replace(/\n/g, "<br>")));
            if (!data.has_column_header) cells.unshift(Array.from({ length: width }, () => ""));
            const lines = cells.map((row) => `| ${row.join(" | ")} |`);
            lines.splice(1, 0, `| ${Array.from({ length: width }, () => "---").join(" | ")} |`);
            output.push(lines.join("\n"));
            if (data.has_row_header) warn(title, "table_row_header");
            continue;
          }
          if (type === "synced_block" && data.synced_from?.block_id) nested = await render(data.synced_from.block_id, nesting + 1);
          else if (block.has_children && type !== "child_database") nested = await render(block.id, nesting + 1);
          switch (type) {
            case "paragraph": break;
            case "heading_1": case "heading_2": case "heading_3": text = `${"#".repeat(Number(type.slice(-1)))} ${text}`; break;
            case "bulleted_list_item": text = listItem(text, "- ", 2); break;
            case "numbered_list_item": text = listItem(text, "1. ", 3); break;
            case "to_do": text = listItem(text, data.checked ? "- [x] " : "- [ ] ", 2); break;
            case "quote": text = text.split("\n").map((line) => `> ${line}`).join("\n"); break;
            case "callout": text = `> [!note]\n${text.split("\n").map((line) => `> ${line}`).join("\n")}`; break;
            case "code": {
              const raw: string = (data.rich_text ?? []).map((item: Json) => item.plain_text ?? item.text?.content ?? "").join("");
              const fence = "`".repeat(Math.max(2, ...Array.from(raw.matchAll(/`+/g), (match) => match[0].length)) + 1);
              text = `${fence}${String(data.language ?? "").replace(/[^a-z0-9_+-]/gi, "")}\n${raw}\n${fence}`;
              break;
            }
            case "equation": text = `$$\n${data.expression ?? ""}\n$$`; break;
            case "divider": text = "---"; break;
            case "image": case "file": case "pdf": case "audio": case "video": {
              if (!mediaUrl(data)) { warn(title, type); text = link(type, `https://www.notion.so/${id}#${String(block.id).replace(/-/g, "")}`); break; }
              if (type === "video" && data.type === "external" && !/\.(mp4|webm|mov|m4v|ogv)(?:[?#]|$)/i.test(mediaUrl(data))) {
                text = link(rich(data.caption) || mediaUrl(data), mediaUrl(data));
                warn(title, "embed");
                break;
              }
              const path = addMedia(folder, block.id, type, data, async () => mediaUrl((await reader.get(`blocks/${block.id}`))[type]));
              text = link(rich(data.caption) || String(data.name ?? type), path, type !== "file");
              break;
            }
            case "bookmark": case "embed": case "link_preview": text = link(rich(data.caption) || String(data.url ?? type), String(data.url ?? "")); warn(title, type); break;
            case "link_to_page": text = link(t("notionLinkedPage"), `https://www.notion.so/${String(data.page_id ?? data.database_id ?? "").replace(/-/g, "")}`); break;
            case "toggle": text = `**${text}**`; warn(title, type); break;
            case "column_list": case "column": if (type === "column_list") warn(title, type); break;
            case "synced_block": warn(title, type); break;
            case "table_of_contents": warn(title, type); text = link(t("notionLinkedPage"), `https://www.notion.so/${id}`); break;
            default: warn(title, type); text = `${text ? `${text}\n\n` : ""}${link(t("notionUnsupported", { type }), `https://www.notion.so/${id}#${String(block.id).replace(/-/g, "")}`)}`;
          }
          if (nested) {
            if (["bulleted_list_item", "numbered_list_item", "to_do"].includes(type)) text += `\n${nested.trimEnd().split("\n").map((line) => `    ${line}`).join("\n")}`;
            else if (["quote", "callout"].includes(type)) text += `\n>\n${nested.trimEnd().split("\n").map((line) => `> ${line}`).join("\n")}`;
            else text += `\n\n${nested}`;
          }
          if ((data.rich_text ?? []).some((item: Json) => item.annotations?.underline || (item.annotations?.color && item.annotations.color !== "default"))) warn(title, "text_style");
          output.push(text);
        }
        return output.join("\n\n");
      } finally { activeBlocks.delete(parent); }
    };
    const body = await render(id, 0);
    textSize += body.length;
    if (textSize > 20 * 1024 * 1024) throw new Error("notion-limit");
    // Insert parent before descendants for a stable root marker and target assignment.
    files.push(source(`${folder}.md`, body));
  };
  try {
    await visitPage(rootId, "", 0);
    files.sort((a, b) => a.path.split("/").length - b.path.split("/").length || a.path.localeCompare(b.path));
    const plan = await prepareNotionSources(app, files, metadata, async () => { closed = true; reader.dispose(); files.length = 0; metadata.clear(); }, () => {
      active(signal);
      if (closed) throw new Error("notion-cancelled");
    });
    return { plan, issues };
  } catch (error) { reader.dispose(); throw error; }
}
