import { ButtonComponent, Modal, Setting } from "obsidian";
import type NaitFlowPlugin from "./main";
import { t } from "./i18n";
import { ImportDownloadError } from "./importer";
import { NotionPreview, prepareNotionApi } from "./notion-api";

export class NotionImportSettings {
  private modal?: NotionImportModal;
  private disposed = false;

  constructor(private readonly plugin: NaitFlowPlugin, parent: HTMLElement) {
    new Setting(parent).setName(t("notionImport")).setDesc(t("notionImportDesc"))
      .addButton((button) => {
        button.setButtonText(t("importStart")).onClick(() => {
          if (this.modal || this.disposed) return;
          this.modal = new NotionImportModal(this.plugin, () => {
            this.modal = undefined;
            if (!this.disposed && button.buttonEl.isConnected) button.buttonEl.focus();
          });
          this.modal.open();
        });
      });
  }

  dispose(): void {
    this.disposed = true;
    this.modal?.close();
    this.modal = undefined;
  }
}

class NotionImportModal extends Modal {
  private form?: NotionImportForm;

  constructor(private readonly plugin: NaitFlowPlugin, private readonly closed: () => void) {
    super(plugin.app);
  }

  override onOpen(): void {
    this.modalEl.addClass("naitflow-modal", "naitflow-notion-modal");
    this.setTitle(t("notionImport"));
    this.form = new NotionImportForm(this.plugin, this.contentEl);
  }

  override onClose(): void {
    this.form?.dispose();
    this.form = undefined;
    this.contentEl.empty();
    this.closed();
  }
}

class NotionImportForm {
  private controller?: AbortController;
  private preview?: NotionPreview;
  private busy = false;
  private disposed = false;
  private token!: HTMLInputElement;
  private page!: HTMLInputElement;
  private destination!: HTMLInputElement;
  private inspect!: ButtonComponent;
  private start!: ButtonComponent;
  private cancel!: ButtonComponent;
  private status!: HTMLElement;
  private results!: HTMLElement;
  private transferReport!: HTMLElement;

  constructor(private readonly plugin: NaitFlowPlugin, parent: HTMLElement) {
    const panel = parent.createDiv("naitflow-notion-panel");
    const help = panel.createEl("p", { cls: "naitflow-notion-help", text: t("notionSetup") + " " });
    help.createEl("a", { text: t("notionCreateIntegration"), href: "https://www.notion.so/developers",
      attr: { target: "_blank", rel: "noopener noreferrer" } });
    this.token = this.field(panel, t("notionToken"), "password", t("notionTokenHint"));
    this.token.autocomplete = "off";
    this.token.spellcheck = false;
    this.page = this.field(panel, t("notionSourcePage"), "text", "https://www.notion.so/…");
    this.destination = this.field(panel, t("importDestination"), "text", "_notion");
    this.destination.value = "_notion";
    for (const input of [this.token, this.page]) input.oninput = () => this.invalidate();
    const actions = panel.createDiv("naitflow-notion-actions");
    this.inspect = new ButtonComponent(actions).setButtonText(t("notionPreview")).onClick(() => void this.read());
    this.start = new ButtonComponent(actions).setButtonText(t("importStart")).setCta().setDisabled(true).onClick(() => void this.run());
    this.cancel = new ButtonComponent(actions).setButtonText(t("cancel")).setDisabled(true).onClick(() => this.clear());
    this.status = panel.createDiv({ cls: "naitflow-notion-status", attr: { role: "status", "aria-live": "polite" } });
    this.results = panel.createDiv("naitflow-notion-results");
    this.transferReport = panel.createDiv("naitflow-notion-results");
    const limitations = panel.createEl("details", { cls: "naitflow-notion-help" });
    limitations.createEl("summary", { text: t("notionLimitations") });
    limitations.createEl("p", { text: t("notionScope") });
    this.token.focus();
  }

  dispose(): void {
    this.disposed = true;
    this.clear();
    this.token.oninput = null;
    this.page.oninput = null;
  }

  private field(parent: HTMLElement, label: string, type: string, placeholder: string): HTMLInputElement {
    const row = parent.createEl("label", { cls: "naitflow-notion-field" });
    row.createSpan({ text: label });
    return row.createEl("input", { type, placeholder, attr: { spellcheck: "false" } });
  }

  private invalidate(): void {
    this.controller?.abort();
    void this.preview?.plan.close();
    this.preview = undefined;
    this.start.setDisabled(true);
    this.results.empty();
    this.transferReport.empty();
    this.status.empty();
    this.status.removeClass("is-ready");
    this.start.setButtonText(t("importStart"));
  }

  private clear(): void {
    this.invalidate();
    this.token.value = "";
    // The pending operation owns busy until its in-flight request settles.
    this.status.setText(this.busy ? t("notionCancelling") : "");
    if (!this.busy) this.controls(false);
  }

  private controls(busy: boolean): void {
    this.busy = busy;
    this.token.disabled = busy;
    this.page.disabled = busy;
    this.destination.disabled = busy;
    this.inspect.setDisabled(busy);
    this.start.setDisabled(busy || !this.preview);
    this.cancel.setDisabled(!busy && !this.preview);
  }

  private async read(): Promise<void> {
    if (this.busy || this.disposed) return;
    this.invalidate();
    this.controller = new AbortController();
    const signal = this.controller.signal;
    this.controls(true);
    this.status.setText(t("notionReading"));
    try {
      const preview = await prepareNotionApi(this.plugin.app, this.token.value, this.page.value, signal,
        (label) => { if (!signal.aborted && !this.disposed) this.status.setText(label); });
      if (signal.aborted || this.disposed) { await preview.plan.close(); return; }
      this.preview = preview;
      const { plan, issues } = preview;
      this.status.setText(t("notionPreviewReady", { pages: plan.pagesCount, attachments: plan.attachmentsCount }));
      this.status.addClass("is-ready");
      if (plan.renamedCount) this.results.createEl("p", { text: t("importDuplicatesWarning", { count: plan.renamedCount }) });
      if (issues.length) {
        const details = this.results.createEl("details");
        details.createEl("summary", { text: t("notionIssues", { count: issues.length }) });
        const list = details.createEl("ul");
        for (const issue of issues) list.createEl("li", { text: `${issue.page} · ${issueLabel(issue.type)}` });
      }
    } catch (error) {
      if (!this.disposed) this.status.setText(notionImportError(error));
    } finally {
      if (signal.aborted) this.token.value = "";
      this.controls(false);
    }
  }

  private async run(): Promise<void> {
    if (this.busy || !this.preview || this.disposed) return;
    const preview = this.preview;
    this.transferReport.empty();
    this.status.removeClass("is-ready");
    this.controls(true);
    try {
      const result = await preview.plan.execute(this.destination.value, ({ current, total, label }) => {
        if (!this.disposed && !this.controller?.signal.aborted) this.status.setText(`${current}/${total} · ${label}`);
      });
      if (this.disposed || this.controller?.signal.aborted) return;
      this.plugin.refreshUi();
      const counts = t("importCompleteSummary", { pages: result.pages, attachments: result.attachments });
      const folder = t("notionResultFolder", { folder: result.destination });
      if (result.attachmentFailures?.length) {
        const count = result.attachmentFailures.length;
        this.status.setText(`${counts} ${t("notionMissingAttachments", { count })} ${folder}`);
        const details = this.transferReport.createEl("details");
        details.createEl("summary", { text: t("notionFailedAttachmentDetails", { count }) });
        const list = details.createEl("ul");
        for (const failure of result.attachmentFailures) {
          list.createEl("li", { text: `${failure.path} · ${attachmentErrorLabel(failure.error)}` });
        }
        this.transferReport.createEl("p", { text: t("notionRetryAttachmentsHint") });
        this.start.setButtonText(t("notionRetryAttachments"));
        return;
      }
      this.status.addClass("is-ready");
      this.status.setText(`${counts} ${folder}`);
      await preview.plan.close();
      this.preview = undefined;
      this.token.value = "";
    } catch (error) {
      if (!this.disposed) this.status.setText(`${notionImportError(error)} ${t("notionRetry")}`);
    } finally { this.controls(false); }
  }
}

function attachmentErrorLabel(error: ImportDownloadError): string {
  switch (error.reason) {
    case "http": return `HTTP ${error.status}`;
    case "network": return t("notionNetworkError");
    case "size": return t("notionMediaSizeError");
    case "html": return t("notionMediaHtml");
    case "url": return t("notionMediaUrl");
    case "source": return t("notionMediaSource");
  }
}

function issueLabel(type: string): string {
  const keys: Record<string, Parameters<typeof t>[0]> = {
    toggle: "notionIssueToggle", column_list: "notionIssueColumns", synced_block: "notionIssueSynced",
    text_style: "notionIssueStyle", table_row_header: "notionIssueTable",
    bookmark: "notionIssueLink", embed: "notionIssueLink", link_preview: "notionIssueLink",
    icon: "notionIssueIcon", cover: "notionIssueCover", child_database: "notionIssueDatabase", table_of_contents: "notionIssueContents"
  };
  return keys[type] ? t(keys[type]!) : t("notionUnsupported", { type });
}

export function notionImportError(error: unknown): string {
  const code = error instanceof Error ? error.message : "";
  const keys: Record<string, Parameters<typeof t>[0]> = {
    "notion-page-id": "notionPageInvalid", "notion-auth": "notionAuthError", "notion-access": "notionAccessError",
    "notion-network": "notionNetworkError", "notion-rate": "notionRateError", "notion-limit": "notionLimitError",
    "notion-media": "notionMediaError", "notion-media-size": "notionMediaSizeError", "notion-cancelled": "notionCancelled",
    "destination-empty": "importDestinationEmpty", "destination-exists": "notionDestinationConflict"
  };
  return t(keys[code] ?? "notionRequestError");
}
