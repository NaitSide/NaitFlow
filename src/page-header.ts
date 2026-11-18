import { MarkdownView, setIcon, setTooltip, TFile } from "obsidian";
import type NaitFlowPlugin from "./main";
import { CoverPickerModal, renderCoverImage } from "./cover-picker";
import { renderPageIcon } from "./icon-renderer";
import { FIELDS, readPageMeta, setField } from "./model";
import { t } from "./i18n";

const MET_COVER_FILE = /(?:^|\/)(?:woodcuts_(?:\d+|sekka_\d+)|hudson-river-scene-kensett|river-scene-durand|landscape-lagoon-new-rochelle|on-hudson-near-idlewild|hackensack-meadows|the-oxbow|heart-of-the-andes|the-parthenon)\.(?:jpe?g|png|webp)$/i;

export class PageHeaderManager {
  private scheduled = false;
  private destroyed = false;
  private readonly views = new Map<HTMLElement, { structure: MutationObserver; size: ResizeObserver }>();
  private readonly documents = new Set<Document>();

  constructor(private readonly plugin: NaitFlowPlugin) {}

  schedule(): void {
    if (this.scheduled || this.destroyed) return;
    this.scheduled = true;
    // Coalesce synchronous Obsidian updates before the browser paints a frame.
    queueMicrotask(() => {
      this.scheduled = false;
      if (!this.destroyed) this.refresh();
    });
  }

  refresh(): void {
    for (const [container, observers] of this.views) {
      if (container.isConnected) continue;
      observers.structure.disconnect();
      observers.size.disconnect();
      this.views.delete(container);
    }
    for (const leaf of this.plugin.app.workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      if (!(view instanceof MarkdownView) || !view.file) continue;
      this.decorate(view, view.file);
      this.decorateBreadcrumbs(view, view.file);
      this.decorateTab(leaf as unknown as { tabHeaderEl?: HTMLElement }, view.file);
    }
  }

  destroy(): void {
    this.destroyed = true;
    for (const observers of this.views.values()) {
      observers.structure.disconnect();
      observers.size.disconnect();
    }
    this.views.clear();
    for (const doc of this.documents) {
      doc.querySelectorAll(".naitflow-page-header, .naitflow-tab-icon, .naitflow-breadcrumb-icon").forEach((element) => element.remove());
      doc.querySelectorAll(".naitflow-note, .naitflow-tab-icon-host").forEach((element) => {
        element.removeClass("naitflow-note", "naitflow-tab-icon-host");
      });
      doc.querySelectorAll<HTMLElement>(".naitflow-fluid-cover-host").forEach((element) => {
        element.removeClass("naitflow-fluid-cover-host");
        for (const side of ["left", "right"]) element.style.removeProperty(`--naitflow-cover-gutter-${side}`);
      });
    }
    this.documents.clear();
  }

  private decorate(view: MarkdownView, file: TFile): void {
    view.containerEl.addClass("naitflow-note");
    this.documents.add(view.containerEl.ownerDocument);
    if (!this.views.has(view.containerEl)) {
      const structure = new MutationObserver((records) => {
        const selector = ".cm-sizer, .markdown-preview-view, .markdown-preview-sizer, .naitflow-page-header, .view-header-title, .view-header-breadcrumb";
        const changed = records.some((record) => [...record.addedNodes, ...record.removedNodes].some((node) =>
          node.nodeType === 1 && ((node as Element).matches(selector) || (node as Element).querySelector(selector))
        ));
        if (changed) this.schedule();
      });
      structure.observe(view.containerEl, { childList: true, subtree: true });
      const size = new ResizeObserver(() => this.schedule());
      size.observe(view.containerEl);
      this.views.set(view.containerEl, { structure, size });
    }
    const targets = [
      view.containerEl.querySelector<HTMLElement>(".markdown-source-view .cm-sizer"),
      view.containerEl.querySelector<HTMLElement>(".markdown-preview-view")
    ].filter((item): item is HTMLElement => Boolean(item));
    for (const target of targets) {
      const fluidHost = target.closest<HTMLElement>(".cm-scroller, .markdown-preview-view");
      if (fluidHost) {
        const hostWindow = fluidHost.ownerDocument.defaultView;
        if (!hostWindow) continue;
        fluidHost.addClass("naitflow-fluid-cover-host");
        const hostStyle = hostWindow.getComputedStyle(fluidHost);
        fluidHost.style.setProperty("--naitflow-cover-gutter-left", hostStyle.paddingLeft);
        fluidHost.style.setProperty("--naitflow-cover-gutter-right", hostStyle.paddingRight);
      }
      let header = target.querySelector<HTMLElement>(":scope > .naitflow-page-header");
      if (!header) {
        header = target.ownerDocument.createElement("div");
        header.addClass("naitflow-page-header");
        if (target.hasClass("cm-sizer")) {
          // The editor sizer is a native flex column; CSS owns the visual order.
          target.append(header);
        } else {
          // Keep our header outside the preview renderer's managed content.
          target.prepend(header);
        }
      }
      this.renderHeader(header, file);
    }
  }

  private decorateBreadcrumbs(view: MarkdownView, file: TFile): void {
    const header = view.containerEl.querySelector<HTMLElement>(":scope > .view-header .view-header-title-container");
    const title = header?.querySelector<HTMLElement>(":scope > .view-header-title");
    if (!header || !title) return;
    const app = this.plugin.app;
    const crumbs = header.querySelectorAll<HTMLElement>(":scope > .view-header-title-parent > .view-header-breadcrumb");
    const folders = file.parent?.path.split("/").filter(Boolean) ?? [];
    let folderPath = "";
    crumbs.forEach((crumb, index) => {
      const folder = folders[index];
      if (folder) folderPath = folderPath ? `${folderPath}/${folder}` : folder;
      const page = folder && crumbs.length === folders.length ? app.vault.getFileByPath(`${folderPath}.md`) : null;
      this.updateBreadcrumbIcon(crumb, page ? readPageMeta(app, page).icon : undefined);
    });
    // The native title may be editable. Keep its text and caret in Obsidian's element.
    this.updateBreadcrumbIcon(header, readPageMeta(app, file).icon, title);
  }

  private updateBreadcrumbIcon(host: HTMLElement, raw: string | undefined, before = host.firstChild): void {
    const existing = host.querySelector<HTMLElement>(":scope > .naitflow-breadcrumb-icon");
    if (!raw) { existing?.remove(); return; }
    const icon = existing ?? host.ownerDocument.createElement("span");
    if (!existing) {
      icon.className = "naitflow-breadcrumb-icon";
      icon.setAttribute("aria-hidden", "true");
      host.insertBefore(icon, before);
    }
    if (icon.dataset.naitflowSignature !== raw) {
      icon.dataset.naitflowSignature = raw;
      renderPageIcon(this.plugin.app, icon, raw);
    }
  }

  private renderHeader(header: HTMLElement, file: TFile): void {
    const meta = readPageMeta(this.plugin.app, file);
    const signature = JSON.stringify([file.path, meta.icon ?? "", meta.cover ?? "", meta.coverY]);
    if (header.dataset.naitflowSignature === signature) return;
    header.dataset.naitflowSignature = signature;
    header.empty();
    header.contentEditable = "false";

    if (meta.cover) {
      const cover = header.createDiv("naitflow-page-cover");
      if (MET_COVER_FILE.test(meta.cover)) cover.addClass("is-met-cover");
      const image = cover.createEl("img", { attr: { alt: "" } });
      image.draggable = false;
      image.ondragstart = (event) => event.preventDefault();
      renderCoverImage(this.plugin.app, image, meta.cover);
      image.style.objectPosition = `center ${meta.coverY}%`;
      const controls = cover.createDiv("naitflow-cover-controls");
      const change = controls.createEl("button", { text: t("change") });
      change.onclick = () => new CoverPickerModal(this.plugin.app, this.plugin, file).open();
      const position = controls.createEl("button", { text: t("position") });
      position.onclick = () => this.enablePositioning(cover, image, position, file, meta.coverY);
    }

    const inner = header.createDiv("naitflow-page-header-inner");
    if (meta.icon) {
      inner.addClass("has-icon");
      const icon = inner.createEl("button", { cls: "naitflow-page-icon-button", attr: { "aria-label": t("changeIcon") } });
      setTooltip(icon, t("changeIcon"), { placement: "top" });
      renderPageIcon(this.plugin.app, icon, meta.icon, "large");
      icon.onclick = () => this.plugin.openIconPicker(file);
    }
    if (!meta.icon || !meta.cover) {
      const actions = inner.createDiv("naitflow-page-actions");
      if (!meta.icon) {
        const iconAction = actions.createEl("button");
        setIcon(iconAction, "smile-plus");
        iconAction.createSpan({ text: t("addIcon") });
        iconAction.onclick = () => this.plugin.openIconPicker(file);
      }
      if (!meta.cover) {
        const coverAction = actions.createEl("button");
        setIcon(coverAction, "image");
        coverAction.createSpan({ text: t("addCover") });
        coverAction.onclick = () => this.plugin.openCoverPicker(file);
      }
    }
  }

  private enablePositioning(cover: HTMLElement, image: HTMLImageElement, button: HTMLButtonElement, file: TFile, initial: number): void {
    if (cover.hasClass("is-positioning")) return;
    cover.addClass("is-positioning");
    button.setText(t("save"));
    const hint = cover.createDiv("naitflow-cover-position-hint");
    setIcon(hint, "move-vertical");
    hint.createSpan({ text: t("dragPhoto") });
    let value = initial;
    let startY = 0;
    let startValue = value;
    const move = (event: PointerEvent): void => {
      if (!cover.hasClass("is-dragging")) return;
      const delta = (event.clientY - startY) / Math.max(1, cover.clientHeight) * 100;
      value = Math.max(0, Math.min(100, startValue - delta));
      image.style.objectPosition = `center ${value}%`;
    };
    const up = (event: PointerEvent): void => {
      cover.removeClass("is-dragging");
      if (image.hasPointerCapture(event.pointerId)) image.releasePointerCapture(event.pointerId);
    };
    image.onpointerdown = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      startY = event.clientY;
      startValue = value;
      cover.addClass("is-dragging");
      image.setPointerCapture(event.pointerId);
    };
    image.onpointermove = move;
    image.onpointerup = up;
    image.onpointercancel = up;
    button.onclick = () => {
      void setField(this.plugin.app, file, FIELDS.coverY, Math.round(value)).then(() => {
        hint.remove();
        cover.removeClass("is-positioning", "is-dragging");
        this.schedule();
      });
    };
  }

  private decorateTab(leaf: { tabHeaderEl?: HTMLElement }, file: TFile): void {
    const tab = leaf.tabHeaderEl;
    if (!tab) return;
    const stock = tab.querySelector<HTMLElement>(".workspace-tab-header-inner-icon");
    if (!stock) return;
    let icon = stock.querySelector<HTMLElement>(".naitflow-tab-icon");
    if (!icon) icon = stock.createSpan("naitflow-tab-icon");
    const rawIcon = readPageMeta(this.plugin.app, file).icon;
    const signature = `${file.path}\u0000${rawIcon ?? ""}`;
    if (icon.dataset.naitflowSignature !== signature) {
      icon.dataset.naitflowSignature = signature;
      renderPageIcon(this.plugin.app, icon, rawIcon);
    }
    stock.addClass("naitflow-tab-icon-host");
  }
}
