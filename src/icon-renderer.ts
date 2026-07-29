import { App, setIcon } from "obsidian";
import { assetUrl, parseIcon } from "./model";

function emojiFromAssetName(assetName: string): string | null {
  try {
    const codepoints = assetName.split("-").map((value) => Number.parseInt(value, 16));
    if (!codepoints.length || codepoints.some((value) => !Number.isFinite(value))) return null;
    return String.fromCodePoint(...codepoints);
  } catch {
    return null;
  }
}

export function renderPageIcon(app: App, container: HTMLElement, raw: string | undefined, size: "small" | "large" = "small"): void {
  container.empty();
  container.addClass("naitflow-icon", `naitflow-icon--${size}`);
  const icon = parseIcon(raw);
  if (!icon) {
    setIcon(container, "file-text");
    container.addClass("naitflow-icon--default");
    return;
  }
  if (icon.kind === "emoji") {
    container.createSpan({ cls: "naitflow-emoji", text: icon.value });
  } else if (icon.kind === "lucide") {
    setIcon(container, icon.value);
  } else {
    const cachedEmoji = icon.value.match(/(?:^|\/)Emoji\/([0-9a-f-]+)\.(?:webp|svg|png)$/i)?.[1];
    const nativeEmoji = cachedEmoji ? emojiFromAssetName(cachedEmoji) : null;
    if (nativeEmoji) {
      container.createSpan({ cls: "naitflow-emoji", text: nativeEmoji });
      return;
    }
    const img = container.createEl("img", { attr: { src: assetUrl(app, icon.value), alt: "" } });
    img.draggable = false;
  }
}
