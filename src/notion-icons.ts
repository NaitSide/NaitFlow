import icon0 from "./icons/type.svg";
import icon1 from "./icons/heading-1.svg";
import icon2 from "./icons/heading-2.svg";
import icon3 from "./icons/heading-3.svg";
import icon4 from "./icons/list.svg";
import icon5 from "./icons/list-ordered.svg";
import icon6 from "./icons/square-check.svg";
import icon7 from "./icons/file-text.svg";
import icon8 from "./icons/quote.svg";
import icon9 from "./icons/minus.svg";
import icon10 from "./icons/image.svg";
import icon11 from "./icons/video.svg";
import icon12 from "./icons/music.svg";
import icon13 from "./icons/code.svg";
import icon14 from "./icons/paperclip.svg";
import icon15 from "./icons/drag-handle.svg";

// Original SVG markup captured from app.notion.com; see THIRD_PARTY_NOTICES.md.
const ICONS: Record<string, string> = {
  "type": icon0,
  "heading-1": icon1,
  "heading-2": icon2,
  "heading-3": icon3,
  "list": icon4,
  "list-ordered": icon5,
  "square-check": icon6,
  "file-text": icon7,
  "quote": icon8,
  "minus": icon9,
  "image": icon10,
  "video": icon11,
  "music": icon12,
  "code": icon13,
  "paperclip": icon14,
  "drag-handle": icon15
};

export function setNotionIcon(container: HTMLElement, name: string): void {
  const source = ICONS[name];
  if (!source) return;
  const parsed = new DOMParser().parseFromString(source.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '), "image/svg+xml");
  const svg = parsed.documentElement;
  // Retain the original geometry, but do not import Notion's CSS classes or paint variables.
  svg.removeAttribute("class");
  svg.removeAttribute("style");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("focusable", "false");
  container.replaceChildren(container.ownerDocument.importNode(svg, true));
}
