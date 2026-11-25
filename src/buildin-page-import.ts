import { App, getFrontMatterInfo, normalizePath, parseYaml, TFile } from "obsidian";
import { t } from "./i18n";
import { BUILDIN_ID_FIELD, BuildinImportedNote, downloadImportImage, ImportImageResult } from "./importer";
import { ensureFolder, FIELDS } from "./model";

export const BUILDIN_PAGE_ID = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;

interface RestoreOptions {
  signal: AbortSignal;
  pluginDir?: string;
  log: (line: string) => void;
  onProgress: (completed: number, total: number) => void;
  readPage: (id: string) => Promise<Record<string, unknown>>;
  resolveMediaKey: (id: string, key: string) => Promise<string | undefined>;
}

export interface BuildinArtworkFailure {
  path: string;
  message: string;
}

type MediaRole = "icon" | "cover";
type MediaResult = ImportImageResult | { kind: "absent" } | { kind: "resolve-error"; reason: string };

export function buildinPageId(input: string): string | undefined {
  const value = input.trim();
  if (BUILDIN_PAGE_ID.test(value)) return value.toLowerCase();
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !["buildin.ai", "www.buildin.ai"].includes(url.hostname)) return;
    const id = url.pathname.split("/").filter(Boolean).pop();
    return id && BUILDIN_PAGE_ID.test(id) ? id.toLowerCase() : undefined;
  } catch {
    return;
  }
}

export async function restoreBuildinAppearance(
  app: App, destination: string, notes: readonly BuildinImportedNote[], options: RestoreOptions
): Promise<{ icons: number; covers: number; failures: BuildinArtworkFailure[] }> {
  const { signal, log, onProgress } = options;
  const result = { icons: 0, covers: 0, failures: [] as BuildinArtworkFailure[] };
  const recordFailure = (path: string, message: string): void => {
    result.failures.push({ path, message });
    log(`${path}\n${message}`);
  };
  const folder = normalizePath(destination + "/_buildin_appearance");
  for (const [index, note] of notes.entries()) {
    signal.throwIfAborted();
    onProgress(index, notes.length);
    const title = note.path.split("/").pop()!.slice(0, -3);
    log(t("buildinAppearanceProgress", { current: index + 1, total: notes.length, title }));
    const file = app.vault.getAbstractFileByPath(note.path);
    let properties: Record<string, unknown> | undefined;
    try {
      if (file instanceof TFile) {
        const info = getFrontMatterInfo(await app.vault.read(file));
        if (info.exists) properties = asRecord(parseYaml(info.frontmatter));
      }
    } catch {
      signal.throwIfAborted();
    }
    if (!(file instanceof TFile) || properties?.[BUILDIN_ID_FIELD] !== note.id) {
      recordFailure(note.path, t("buildinArtworkPageError", { reason: t("buildinNoteMissing") }));
      continue;
    }

    let page: Record<string, unknown>;
    try {
      page = await options.readPage(note.id);
    } catch (error) {
      signal.throwIfAborted();
      recordFailure(note.path, t("buildinArtworkPageError", { reason: error instanceof Error ? error.message : t("buildinNetworkError") }));
      continue;
    }
    signal.throwIfAborted();

    const values: Partial<Record<MediaRole, string>> = {};
    for (const role of ["icon", "cover"] as const) {
      const roleLabel = t(role === "icon" ? "buildinIconNotImported" : "buildinCoverNotImported");
      try {
        const emoji = role === "icon" ? asRecord(page.icon)?.emoji : undefined;
        if (typeof emoji === "string" && emoji.trim()) {
          values.icon = "emoji:" + emoji.trim();
          continue;
        }
        const image = await downloadMedia(page[role], role, signal, (key) => options.resolveMediaKey(note.id, key), role === "cover"
          ? { adapter: app.vault.adapter, pluginDir: options.pluginDir } : undefined);
        signal.throwIfAborted();
        if (image.kind === "absent") continue;
        if (image.kind !== "saved") {
          if (role === "icon" && image.kind === "url") log(`${note.path}\n${describeBuildinIcon(page.icon)}`);
          if (image.kind === "format") log(`${note.path}\n${role}.response ${JSON.stringify({ contentType: image.contentType, bytes: image.byteLength })}`);
          recordFailure(note.path, t("buildinArtworkItemError", { role: roleLabel, reason: mediaError(image) }));
          continue;
        }
        const path = await saveAppearanceImage(app, folder, note.id, role, image, signal);
        values[role] = role === "icon" ? "image:" + path : path;
      } catch {
        signal.throwIfAborted();
        recordFailure(note.path, t("buildinArtworkItemError", { role: roleLabel, reason: t("buildinArtworkWriteError") }));
      }
    }

    signal.throwIfAborted();
    const { icon, cover } = values;
    if (!icon && !cover) continue;
    try {
      if (app.vault.getAbstractFileByPath(note.path) !== file) throw new Error();
      if ((icon && properties[FIELDS.icon] !== icon) || (cover && properties[FIELDS.cover] !== cover)) {
        await app.fileManager.processFrontMatter(file, (fm) => {
          if (fm[BUILDIN_ID_FIELD] !== note.id) throw new Error();
          if (icon) fm[FIELDS.icon] = icon;
          if (cover) fm[FIELDS.cover] = cover;
        });
      }
      if (icon) result.icons++;
      if (cover) result.covers++;
    } catch {
      recordFailure(note.path, t("buildinArtworkPageError", { reason: t("buildinArtworkWriteError") }));
    }
  }
  signal.throwIfAborted();
  onProgress(notes.length, notes.length);
  return result;
}

async function saveAppearanceImage(
  app: App, folder: string, id: string, role: MediaRole, image: Extract<ImportImageResult, { kind: "saved" }>, signal: AbortSignal
): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", image.bytes);
  const key = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  signal.throwIfAborted();
  await ensureFolder(app, folder);
  const stem = folder + "/" + id + "-" + role + "-" + key;
  for (let index = 1; ; index++) {
    signal.throwIfAborted();
    const path = stem + (index === 1 ? "" : "-" + index) + "." + image.extension;
    const existing = app.vault.getAbstractFileByPath(path);
    if (!existing) {
      await app.vault.createBinary(path, image.bytes);
      return path;
    }
    if (existing instanceof TFile) {
      const bytes = new Uint8Array(await app.vault.readBinary(existing));
      const incoming = new Uint8Array(image.bytes);
      if (bytes.length === incoming.length && bytes.every((byte, offset) => byte === incoming[offset])) return path;
    }
  }
}

function mediaError(value: Exclude<MediaResult, { kind: "saved" | "absent" }>): string {
  if (value.kind === "http") return t("buildinMediaHttp", { status: value.status });
  if (value.kind === "resolve-error") return value.reason;
  const key = {
    url: "buildinMediaNoUrl", network: "buildinMediaUnavailable", timeout: "buildinMediaTimeout",
    format: "buildinMediaFormat", size: "buildinMediaSize"
  } as const;
  return t(key[value.kind]);
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : undefined;
}

function mediaReferences(value: unknown, role: MediaRole): Set<string> {
  const record = asRecord(value);
  const type = typeof record?.type === "string" ? record.type : undefined;
  const references = new Set<string>();
  if (typeof value === "string") references.add(value);
  const fields = role === "icon" ? ["url", "file_url", "src", "path"] : ["url", "file_url", "src"];
  for (const key of new Set([type, "", "file", "external", "image"])) {
    if (key === undefined) continue;
    const payload = key ? record?.[key] : record;
    if (role === "icon" && typeof payload === "string") references.add(payload);
    const entry = asRecord(payload);
    for (const field of fields) {
      const address = entry?.[field];
      if (typeof address === "string") references.add(address);
    }
  }
  return references;
}

function iconSchema(value: unknown, depth = 0): unknown {
  if (Array.isArray(value)) return "array";
  const record = asRecord(value);
  if (!record || depth === 2) return value === null ? "null" : typeof value;
  return Object.fromEntries(Object.entries(record)
    .filter(([key]) => /^[a-z][a-z0-9_-]{0,39}$/i.test(key)).slice(0, 12)
    .map(([key, field]) => [key, iconSchema(field, depth + 1)]));
}

export function describeBuildinIcon(value: unknown): string {
  const refs = [...mediaReferences(value, "icon")].slice(0, 8).map((raw) => {
    const reference = raw.trim();
    if (!reference) return "empty";
    if (/^data:/i.test(reference)) return "data URL";
    if (/^blob:/i.test(reference)) return "blob URL";
    const kind = /^https:/i.test(reference) ? "HTTPS" : /^http:/i.test(reference) ? "HTTP"
      : reference.startsWith("//") ? "scheme-relative" : /^[a-z][a-z0-9+.-]*:/i.test(reference) ? "custom scheme" : "relative";
    const path = (reference.split(/[?#]/, 1)[0] ?? "").replace(/^(?:https?:)?\/\/[^/]*/i, "");
    const family = /^\/?(?:assets\/)?(byte-icon|emoji|icon|s3|attachment|uploads)(?:\/|:)/i.exec(path)?.[1]?.toLowerCase();
    const extension = /\.(svg|png|jpe?g|webp|gif|ico)$/i.exec(path)?.[1]?.toLowerCase();
    return { kind, family, extension, segments: path.split("/").filter(Boolean).length };
  });
  return `icon.schema ${JSON.stringify(iconSchema(value))}\nicon.references ${JSON.stringify(refs)}`;
}

async function downloadMedia(
  value: unknown,
  role: MediaRole,
  signal: AbortSignal,
  resolveKey?: (key: string) => Promise<string | undefined>,
  presets?: { adapter: App["vault"]["adapter"]; pluginDir?: string }
): Promise<MediaResult> {
  if (!value) return { kind: "absent" };
  const candidates = mediaReferences(value, role);
  let failure: MediaResult = { kind: "url" };
  for (const candidate of candidates) {
    signal.throwIfAborted();
    const reference = role === "icon" ? candidate.trim().replace(/^\/(?=s3\/)/, "") : candidate.trim();
    let address: string | undefined = reference;
    const builtinIcon = role === "icon" && /^\/?(?:assets\/)?(byte-icon\/(?:light|dark)\/[a-z0-9-]+\/[a-z0-9-]+\.svg)$/i.exec(reference);
    const shortIcon = role === "icon" && asRecord(value)?.type === "external" &&
      /^\/?((?:grey|gray|blue|green|red|orange|yellow|pink|purple|brown|black|white)\/[a-z0-9-]+\.svg)$/i.exec(reference);
    const fileIconKey = role === "icon" && asRecord(value)?.type === "file" &&
      /^[^:/\\?#\s\u0000-\u001f]+(?:\/[^:\/\\?#\u0000-\u001f]+)+$/.test(reference) &&
      !reference.split("/").some((part) => part === "." || part === "..");
    const preset = presets && /^cover\/((?:flowus|photo|emoji|graphs|img)[0-9]+)$/.exec(reference);
    if (builtinIcon) {
      address = `https://cdn2.buildin.ai/assets/${builtinIcon[1]}`;
    } else if (shortIcon) {
      address = `https://cdn2.buildin.ai/assets/byte-icon/light/${shortIcon[1]!.replace(/^gray\//i, "grey/")}`;
    } else if (role === "icon" && /^\/\/(?:cdn2\.buildin\.ai|buildin-static\.flowus\.space)\//i.test(reference)) {
      address = `https:${reference}`;
    } else if (preset) {
      const name = preset[1]!;
      if (presets.pluginDir && /^(?:flowus|photo)/.test(name)) {
        const isPhoto = name.startsWith("photo");
        const extension = isPhoto ? "jpeg" : "png";
        const group = isPhoto ? "nasa-spacex" : "buildin-ai";
        const path = normalizePath(`${presets.pluginDir}/presets/covers/${group}/${name}.${extension}`);
        try {
          const bytes = await presets.adapter.readBinary(path);
          if (bytes.byteLength) {
            return { kind: "saved", bytes, extension };
          }
        } catch {
          // The installed package may not have this preset.
        }
      }
      address = `https://buildin-static.flowus.space/${reference}`;
    } else if (resolveKey && (fileIconKey || /^s3\/[^/\s]+\/[^\r\n]+$/.test(reference))) {
      try {
        address = await resolveKey(reference);
      } catch (error) {
        signal.throwIfAborted();
        failure = { kind: "resolve-error", reason: error instanceof Error ? error.message : t("buildinNetworkError") };
        continue;
      }
    }
    if (!address || !/^https:\/\//i.test(address)) continue;
    try {
      const url = new URL(address);
      if (url.username || url.password || !/\.[a-z]{2,}$/i.test(url.hostname) || /\.(?:local|localhost|internal|test)$/i.test(url.hostname)) continue;
      const result = await downloadImportImage(url.href, { detectRasterFormat: true });
      if (result.kind === "saved") return result;
      failure = result;
    } catch {
      continue;
    }
  }
  return failure;
}
