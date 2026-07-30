import { Modal, Notice, Platform, setIcon } from "obsidian";
import type NaitFlowPlugin from "./main";
import { t } from "./i18n";
import { ImportFormat, NaitFlowImportPlan, prepareImport } from "./importer";

declare global {
  interface Window {
    electron?: {
      remote?: {
        dialog?: {
          showOpenDialogSync(options: {
            title: string;
            properties: string[];
            filters: Array<{ name: string; extensions: string[] }>;
          }): string[] | undefined;
        };
      };
    };
    require?: NodeRequire;
  }
}

export function chooseImportArchive(plugin: NaitFlowPlugin): void {
  if (Platform.isDesktopApp && window.electron?.remote?.dialog) {
    const paths = window.electron.remote.dialog.showOpenDialogSync({
      title: t("importChooseArchive"),
      properties: ["openFile", "dontAddToRecent"],
      filters: [{ name: "ZIP", extensions: ["zip"] }]
    });
    const path = paths?.[0];
    if (path) void openDesktopArchive(plugin, path);
    return;
  }
  chooseWebArchive(plugin);
}

async function openDesktopArchive(plugin: NaitFlowPlugin, path: string): Promise<void> {
  try {
    const fs = window.require("node:original-fs") as typeof import("node:fs") | undefined;
    if (!fs) throw new Error("filesystem-unavailable");
    const buffer = await fs.promises.readFile(path);
    const bytes = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
    const name = path.split(/[\\/]/).pop() || "archive.zip";
    await openImportPreview(plugin, new File([bytes], name, { type: "application/zip" }));
  } catch (error) {
    console.error("NaitFlow: failed to read import archive", error);
    new Notice(t("importFailed"), 8000);
  }
}

function chooseWebArchive(plugin: NaitFlowPlugin): void {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".zip,application/zip";
  input.style.display = "none";
  document.body.appendChild(input);
  input.onchange = () => {
    const file = input.files?.[0];
    input.remove();
    if (!file) return;
    void openImportPreview(plugin, file);
  };
  input.click();
}

async function openImportPreview(plugin: NaitFlowPlugin, file: File): Promise<void> {
  const notice = new Notice(t("importReading"), 0);
  try {
    const plan = await prepareImport(plugin.app, file);
    notice.hide();
    new ImportPreviewModal(plugin, plan).open();
  } catch (error) {
    notice.hide();
    console.error("NaitFlow: failed to inspect import archive", error);
    new Notice(t(importErrorKey(error)), 8000);
  }
}

class ImportPreviewModal extends Modal {
  private running = false;
  private finished = false;

  constructor(private readonly plugin: NaitFlowPlugin, private readonly plan: NaitFlowImportPlan) {
    super(plugin.app);
  }

  override onOpen(): void {
    this.modalEl.addClass("naitflow-modal", "naitflow-import-modal");
    this.setTitle(t("importData"));
    this.renderPreview();
  }

  override onClose(): void {
    this.contentEl.empty();
    if (!this.running) void this.plan.close();
  }

  private renderPreview(): void {
    this.contentEl.empty();
    const source = this.contentEl.createDiv("naitflow-import-source");
    const sourceIcon = source.createSpan("naitflow-import-source-icon");
    setIcon(sourceIcon, "archive");
    const sourceText = source.createDiv();
    sourceText.createDiv({ cls: "naitflow-import-source-format", text: formatLabel(this.plan.format) });
    sourceText.createDiv({ cls: "naitflow-import-source-name", text: this.plan.sourceName });

    const stats = this.contentEl.createDiv("naitflow-import-stats");
    this.addStat(stats, t("importPages"), this.plan.pagesCount);
    this.addStat(stats, t("importAttachments"), this.plan.attachmentsCount);
    this.addStat(stats, t("importRenamed"), this.plan.renamedCount);
    this.addStat(stats, t("importBrokenLinks"), this.plan.unresolvedLinksCount);

    const warnings = this.warnings();
    if (warnings.length) {
      const list = this.contentEl.createDiv("naitflow-import-warnings");
      for (const warning of warnings) {
        const row = list.createDiv("naitflow-import-warning");
        const icon = row.createSpan("naitflow-import-warning-icon");
        setIcon(icon, "triangle-alert");
        row.createSpan({ text: warning });
      }
    }

    const destination = this.contentEl.createDiv("naitflow-import-destination");
    destination.createEl("label", { text: t("importDestination") });
    const input = destination.createEl("input", {
      type: "text",
      value: this.plan.defaultDestination,
      attr: { spellcheck: "false" }
    });

    const error = this.contentEl.createDiv("naitflow-import-error");
    const footer = this.contentEl.createDiv("naitflow-import-footer");
    const cancel = footer.createEl("button", { text: t("cancel") });
    cancel.onclick = () => this.close();
    const start = footer.createEl("button", { cls: "mod-cta", text: t("importStart") });
    start.onclick = () => void this.startImport(input.value, input, cancel, start, error);
  }

  private addStat(parent: HTMLElement, label: string, value: number): void {
    const item = parent.createDiv("naitflow-import-stat");
    item.createSpan({ text: label });
    item.createEl("strong", { text: String(value) });
  }

  private warnings(): string[] {
    const warnings: string[] = [];
    if (this.plan.format !== "notion-html") warnings.push(t("importVisualMissing"));
    if (this.plan.renamedCount > 0) warnings.push(t("importDuplicatesWarning", { count: this.plan.renamedCount }));
    if (this.plan.unresolvedLinksCount > 0) warnings.push(t("importBrokenLinksWarning", { count: this.plan.unresolvedLinksCount }));
    if (this.plan.format === "notion-html" && this.plan.coversCount > 0) warnings.push(t("importRemoteCovers", { count: this.plan.coversCount }));
    return warnings;
  }

  private async startImport(
    destination: string,
    input: HTMLInputElement,
    cancel: HTMLButtonElement,
    start: HTMLButtonElement,
    error: HTMLElement
  ): Promise<void> {
    if (this.running || this.finished) return;
    error.empty();
    this.running = true;
    input.disabled = true;
    cancel.disabled = true;
    start.disabled = true;
    start.setText(t("importing"));
    const progress = this.contentEl.createDiv("naitflow-import-progress");
    const progressTrack = progress.createDiv("naitflow-import-progress-track");
    const progressBar = progressTrack.createDiv("naitflow-import-progress-bar");
    const progressLabel = progress.createDiv("naitflow-import-progress-label");
    try {
      const result = await this.plan.execute(destination, ({ current, total, label }) => {
        progressBar.style.width = `${total ? Math.round(current / total * 100) : 0}%`;
        progressLabel.setText(`${current}/${total} · ${label}`);
      });
      await this.plan.close();
      this.plugin.refreshUi();
      this.running = false;
      this.finished = true;
      this.renderSuccess(result.destination, result.pages, result.attachments);
    } catch (caught) {
      this.running = false;
      console.error("NaitFlow: import failed", caught);
      error.setText(t(importErrorKey(caught)));
      input.disabled = false;
      cancel.disabled = false;
      start.disabled = false;
      start.setText(t("importStart"));
      progress.remove();
    }
  }

  private renderSuccess(destination: string, pages: number, attachments: number): void {
    this.contentEl.empty();
    const success = this.contentEl.createDiv("naitflow-import-success");
    const icon = success.createSpan("naitflow-import-success-icon");
    setIcon(icon, "circle-check-big");
    success.createEl("h3", { text: t("importComplete") });
    success.createEl("p", { text: t("importCompleteSummary", { pages, attachments }) });
    success.createEl("code", { text: destination });
    const close = success.createEl("button", { cls: "mod-cta", text: t("close") });
    close.onclick = () => this.close();
  }
}

function formatLabel(format: ImportFormat): string {
  if (format === "notion-html") return "Notion (HTML)";
  if (format === "notion-md") return "Notion (MD)";
  return "Buildin AI (MD)";
}

function importErrorKey(error: unknown): Parameters<typeof t>[0] {
  const message = error instanceof Error ? error.message : "";
  if (message === "format-unknown") return "importUnknownFormat";
  if (message === "pages-not-found") return "importNoPages";
  if (message === "destination-empty") return "importDestinationEmpty";
  if (message === "destination-exists") return "importDestinationExists";
  return "importFailed";
}
