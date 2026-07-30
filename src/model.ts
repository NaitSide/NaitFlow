import { App, normalizePath, TFile, TFolder } from "obsidian";
import { t } from "./i18n";

export const FIELDS = {
  icon: "naitflow-icon",
  cover: "naitflow-cover",
  coverY: "naitflow-cover-y",
  parent: "naitflow-parent"
} as const;

export type IconKind = "emoji" | "lucide" | "image";

export interface IconValue {
  kind: IconKind;
  value: string;
}

export interface PageMeta {
  icon?: string;
  cover?: string;
  coverY: number;
  parent?: string;
}

export function parseIcon(raw: unknown): IconValue | null {
  if (typeof raw !== "string") return null;
  const split = raw.indexOf(":");
  if (split < 1) return { kind: "emoji", value: raw };
  const kind = raw.slice(0, split) as IconKind;
  if (!["emoji", "lucide", "image"].includes(kind)) return null;
  return { kind, value: raw.slice(split + 1) };
}

export function readPageMeta(app: App, file: TFile): PageMeta {
  const fm = app.metadataCache.getFileCache(file)?.frontmatter ?? {};
  const y = Number(fm[FIELDS.coverY]);
  return {
    icon: typeof fm[FIELDS.icon] === "string" ? fm[FIELDS.icon] : undefined,
    cover: typeof fm[FIELDS.cover] === "string" ? unwrapLink(fm[FIELDS.cover]) : undefined,
    coverY: Number.isFinite(y) ? Math.max(0, Math.min(100, y)) : 50,
    parent: typeof fm[FIELDS.parent] === "string" ? unwrapLink(fm[FIELDS.parent]) : undefined
  };
}

function unwrapLink(value: string): string {
  const match = value.match(/^\[\[(.*?)(?:\|.*?)?\]\]$/);
  return match?.[1] ?? value;
}

export async function setField(app: App, file: TFile, field: string, value: string | number | null): Promise<void> {
  await app.fileManager.processFrontMatter(file, (fm) => {
    if (value === null || value === "") delete fm[field];
    else fm[field] = value;
  });
}

export async function ensureFolder(app: App, path: string): Promise<void> {
  const normalized = normalizePath(path);
  if (!normalized || app.vault.getAbstractFileByPath(normalized)) return;
  const parts = normalized.split("/");
  let current = "";
  for (const part of parts) {
    current = normalizePath(current ? `${current}/${part}` : part);
    const existing = app.vault.getAbstractFileByPath(current);
    if (!existing) await app.vault.createFolder(current);
    else if (!(existing instanceof TFolder)) throw new Error(`${current}: ${t("pluginFolderMissing")}`);
  }
}

export function uniqueAssetPath(app: App, folder: string, baseName: string, extension: string): string {
  const safe = baseName.replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/^-+|-+$/g, "") || "image";
  const ext = extension.replace(/^\./, "").toLowerCase() || "png";
  let path = normalizePath(`${folder}/${safe}.${ext}`);
  let index = 2;
  while (app.vault.getAbstractFileByPath(path)) path = normalizePath(`${folder}/${safe}-${index++}.${ext}`);
  return path;
}

export function assetUrl(app: App, path: string): string {
  const file = app.vault.getAbstractFileByPath(normalizePath(path));
  return file instanceof TFile ? app.vault.getResourcePath(file) : path;
}

export function displayName(file: TFile): string {
  return file.basename || t("untitled");
}

export function pageFolderPath(filePath: string): string {
  return normalizePath(filePath.replace(/\.md$/i, ""));
}
