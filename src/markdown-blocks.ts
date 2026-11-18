export interface MarkdownBlock {
  from: number;
  to: number;
  kind: "paragraph" | "heading" | "list" | "code" | "quote" | "embed" | "divider" | "html" | "math";
  listKind?: "bullet" | "ordered";
}

const listMarker = (line: string): RegExpExecArray | null => /^( {0,3})([-+*]|\d+[.)])[ \t]+/.exec(line);
const fenceMarker = (line: string): RegExpExecArray | null => /^ {0,3}(`{3,}|~{3,})/.exec(line);
const heading = (line: string): boolean => /^ {0,3}#{1,6}(?:\s|$)/.test(line);
const divider = (line: string): boolean => /^ {0,3}(?:(?:\*\s*){3,}|(?:-\s*){3,}|(?:_\s*){3,})$/.test(line);
const setext = (line: string): boolean => /^ {0,3}(?:=+|-+)\s*$/.test(line);
const quote = (line: string): boolean => /^ {0,3}>/.test(line);
const embed = (line: string): boolean => /^\s*!(?:\[\[[^\n]+\]\]|\[[^\n]*\]\([^\n]+\))\s*$/.test(line);
const indented = (line: string): boolean => /^(?: {4}|\t)/.test(line);
const indentation = (line: string): number => (line.match(/^[ \t]*/)?.[0] ?? "").replace(/\t/g, "    ").length;
const math = (line: string): boolean => /^\s*\$\$/.test(line);
const html = (line: string): RegExpExecArray | null => /^ {0,3}<(script|style|pre|textarea|details|div|table|iframe|video|audio|section|article|figure)(?:\s|>)/i.exec(line);
const startsBlock = (line: string): boolean => heading(line) || divider(line) || !!fenceMarker(line) || quote(line) || !!listMarker(line) || embed(line) || math(line) || !!html(line) || /^\s*<!--/.test(line);

/** Conservative top-level units: nested list contents and code are never split into individual lines. */
export function markdownBlocks(text: string): MarkdownBlock[] {
  const lines = text.split("\n");
  const offsets: number[] = [];
  let offset = 0;
  for (const line of lines) { offsets.push(offset); offset += line.length + 1; }
  const result: MarkdownBlock[] = [];
  let i = 0;
  // Metadata is a fixed prefix, not a draggable block. An unfinished header is also protected.
  if (lines[0]?.trim() === "---") {
    i = 1;
    while (i < lines.length && !/^(---|\.\.\.)\s*$/.test(lines[i]!)) i++;
    if (i === lines.length) return result;
    i++;
  }
  while (i < lines.length) {
    if (!lines[i]!.trim()) { i++; continue; }
    const start = i;
    const first = lines[i]!;
    // Obsidian block IDs on their own line belong to the preceding block, including tables/code/lists.
    if (/^\^[a-zA-Z0-9-]+\s*$/.test(first) && result.length) {
      let previous = result[result.length - 1]!;
      if (previous.kind === "list") {
        while (result.length > 1) {
          const before = result[result.length - 2]!;
          if (before.kind !== "list" || before.listKind !== previous.listKind) break;
          result.pop(); previous = before;
        }
      }
      previous.to = offsets[i]! + first.replace(/\r$/, "").length;
      i++;
      continue;
    }
    let kind: MarkdownBlock["kind"] = "paragraph";
    let listKind: MarkdownBlock["listKind"];
    const fence = fenceMarker(first), list = listMarker(first), tag = html(first);
    if (fence) {
      kind = "code";
      const marker = fence[1]!;
      i++;
      while (i < lines.length) {
        const end = /^ {0,3}(`+|~+)\s*$/.exec(lines[i++]!);
        if (end && end[1]![0] === marker[0] && end[1]!.length >= marker.length) break;
      }
    } else if (math(first)) {
      kind = "math"; i++;
      if (!/^\s*\$\$.*\$\$\s*$/.test(first)) {
        while (i < lines.length && !/\$\$\s*$/.test(lines[i++]!)) { /* keep display math intact */ }
      }
    } else if (tag || /^\s*<!--/.test(first)) {
      kind = "html";
      const closing = tag ? new RegExp(`</${tag[1]}\\s*>`, "i") : /-->/;
      i++;
      if (!closing.test(first)) while (i < lines.length && !closing.test(lines[i++]!)) { /* whole raw block */ }
    } else if (heading(first)) { kind = "heading"; i++; }
    else if (divider(first)) { kind = "divider"; i++; }
    else if (embed(first)) { kind = "embed"; i++; }
    else if (list) {
      kind = "list"; listKind = /^\d/.test(list[2]!) ? "ordered" : "bullet";
      const indent = list[1]!.length;
      i++;
      while (i < lines.length) {
        const next = lines[i]!;
        if (!next.trim()) {
          let after = i + 1;
          while (after < lines.length && !lines[after]!.trim()) after++;
          if (after < lines.length && indentation(lines[after]!) > indent) { i = after; continue; }
          break;
        }
        const sibling = listMarker(next);
        if (sibling && sibling[1]!.length <= indent) break;
        if (indentation(next) <= indent && startsBlock(next)) break;
        i++;
      }
    } else if (quote(first)) {
      kind = "quote"; i++;
      while (i < lines.length && lines[i]!.trim() && (quote(lines[i]!) || !startsBlock(lines[i]!))) i++;
    } else if (indented(first)) {
      kind = "code"; i++;
      while (i < lines.length) {
        if (indented(lines[i]!)) { i++; continue; }
        if (!lines[i]!.trim()) {
          let after = i + 1;
          while (after < lines.length && !lines[after]!.trim()) after++;
          if (after < lines.length && indented(lines[after]!)) { i = after; continue; }
        }
        break;
      }
    } else {
      i++;
      while (i < lines.length && lines[i]!.trim()) {
        if (setext(lines[i]!)) { kind = "heading"; i++; break; }
        if (startsBlock(lines[i]!)) break;
        i++;
      }
    }
    const last = i - 1;
    result.push({ from: offsets[start]!, to: offsets[last]! + lines[last]!.replace(/\r$/, "").length, kind, listKind });
  }
  return result;
}

export interface BlockMove {
  from: number;
  to: number;
  insert: string;
  selection: number;
}

/** Keep every block's bytes, metadata and surrounding text; add separators only when needed to avoid merging blocks. */
export function moveMarkdownBlock(text: string, blocks: readonly MarkdownBlock[], source: number, boundary: number): BlockMove | null {
  if (!Number.isInteger(source) || !Number.isInteger(boundary) || !blocks[source] || boundary < 0 || boundary > blocks.length || boundary === source || boundary === source + 1) return null;
  const order = blocks.map((_, index) => index);
  order.splice(source, 1);
  const destination = boundary > source ? boundary - 1 : boundary;
  order.splice(destination, 0, source);
  // Include neighbours so a moved heading/list cannot accidentally join two surrounding paragraphs.
  const lo = Math.max(0, Math.min(source, destination) - 1);
  const hi = Math.min(blocks.length - 1, Math.max(source, destination) + 1);
  let insert = "", selection = 0;
  const newline = text.includes("\r\n") ? "\r\n" : "\n";
  for (let slot = lo; slot <= hi; slot++) {
    const originalIndex = order[slot]!;
    const block = blocks[originalIndex]!;
    if (originalIndex === source) selection = blocks[lo]!.from + insert.length;
    insert += text.slice(block.from, block.to);
    if (slot < hi) {
      let gap = text.slice(blocks[slot]!.to, blocks[slot + 1]!.from);
      const next = blocks[order[slot + 1]!]!;
      const minBreaks = block.kind === "list" && next.kind === "list" && block.listKind === next.listKind ? 1 : 2;
      for (let n = (gap.match(/\n/g) ?? []).length; n < minBreaks; n++) gap += newline;
      insert += gap;
    }
  }
  return { from: blocks[lo]!.from, to: blocks[hi]!.to, insert, selection };
}
