import { MarkdownView, setIcon, setTooltip, TFile } from "obsidian";
import type NaitFlowPlugin from "./main";
import { CoverPickerModal, renderCoverImage } from "./cover-picker";
import { renderPageIcon } from "./icon-renderer";
import { FIELDS, readPageMeta, setField } from "./model";
import { t } from "./i18n";

const MET_COVER_FILE = /(?:^|\/)(?:woodcuts_(?:\d+|sekka_\d+)|hudson-river-scene-kensett|river-scene-durand|landscape-lagoon-new-rochelle|on-hudson-near-idlewild|hackensack-meadows|the-oxbow|heart-of-the-andes|the-parthenon)\.(?:jpe?g|png|webp)$/i;

export class PageHeaderManager {
  private scheduled = 0;

  constructor(private readonly plugin: NaitFlowPlugin) {}

  schedule(): void {
    window.clearTimeout(this.scheduled);
    this.scheduled = window.setTimeout(() => this.refresh(), 80);
  }

  refresh(): void {
    for (const leaf of this.plugin.app.workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      if (!(view instanceof MarkdownView) || !view.file) continue;
      this.decorate(view, view.file);
      this.decorateTab(leaf as unknown as { tabHeaderEl?: HTMLElement }, view.file);
    }
  }

  private decorate(view: MarkdownView, file: TFile): void {
    const targets = [
      view.containerEl.querySelector<HTMLElement>(".markdown-source-view .cm-sizer"),
      view.containerEl.querySelector<HTMLElement>(".markdown-preview-view .markdown-preview-sizer")
    ].filter((item): item is HTMLElement => Boolean(item));
    for (const target of targets) {
      const fluidHost = target.closest<HTMLElement>(".cm-scroller, .markdown-preview-view");
      if (fluidHost) {
        fluidHost.addClass("naitflow-fluid-cover-host");
        const hostStyle = window.getComputedStyle(fluidHost);
        fluidHost.style.setProperty("--naitflow-cover-gutter-left", hostStyle.paddingLeft);
        fluidHost.style.setProperty("--naitflow-cover-gutter-right", hostStyle.paddingRight);
        if (!fluidHost.style.getPropertyValue("--naitflow-cover-gutter-top")) {
          const hostRect = fluidHost.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const topGutter = Math.max(0, targetRect.top - hostRect.top + fluidHost.scrollTop);
          fluidHost.style.setProperty("--naitflow-cover-gutter-top", `${topGutter}px`);
        }
      }
      let header = target.querySelector<HTMLElement>(":scope > .naitflow-page-header");
      if (!header) {
        header = createDiv({ cls: "naitflow-page-header" });
        target.prepend(header);
      }
      this.renderHeader(header, file);
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
