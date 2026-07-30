import { App, Modal, Notice, setIcon } from "obsidian";
import type NaitFlowPlugin from "./main";
import type { NaitFlowTrashRecord } from "./settings";
import { localeCode, t } from "./i18n";

function parentPath(path: string): string {
  const index = path.lastIndexOf("/");
  return index === -1 ? "" : path.slice(0, index);
}

function formatDeletedAt(value: number): string {
  return new Intl.DateTimeFormat(localeCode() === "ru" ? "ru-RU" : "en-US", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(value));
}

async function ensureParentFolders(app: App, path: string): Promise<void> {
  const parts = parentPath(path).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (app.vault.getAbstractFileByPath(current)) continue;
    await app.vault.createFolder(current).catch((error) => {
      if (!String(error).toLocaleLowerCase().includes("already exists")) throw error;
    });
  }
}

export class NaitFlowTrashPopover {
  private records: NaitFlowTrashRecord[] = [];
  private query = "";
  private popover: HTMLElement | null = null;
  private outsideHandler: ((event: PointerEvent) => void) | null = null;
  private keydownHandler: ((event: KeyboardEvent) => void) | null = null;

  constructor(app: App, private readonly plugin: NaitFlowPlugin, private readonly onDismiss?: () => void) {
    this.app = app;
  }

  private readonly app: App;

  open(anchor: MouseEvent): void {
    this.close();
    const popover = document.body.createDiv("naitflow-trash-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 652))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 492))}px`;
    this.popover = popover;
    void this.reload();
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target as Node)) this.close();
    };
    this.keydownHandler = (event) => {
      if (event.key === "Escape") this.close();
    };
    window.setTimeout(() => {
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
      if (this.keydownHandler) document.addEventListener("keydown", this.keydownHandler, true);
    }, 0);
  }

  private close(): void {
    const wasOpen = Boolean(this.popover);
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    if (this.keydownHandler) document.removeEventListener("keydown", this.keydownHandler, true);
    this.outsideHandler = null;
    this.keydownHandler = null;
    this.popover?.remove();
    this.popover = null;
    if (wasOpen) this.onDismiss?.();
  }

  private async reload(): Promise<void> {
    const records = await Promise.all(this.plugin.settings.trashRecords.map(async (record) => {
      return await this.app.vault.adapter.exists(record.trashedFilePath) ? record : undefined;
    }));
    this.records = records.filter((record): record is NaitFlowTrashRecord => Boolean(record));
    this.render();
  }

  private render(): void {
    const content = this.popover;
    if (!content) return;
    content.empty();
    const searchWrap = content.createDiv("naitflow-search-wrap naitflow-move-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    setIcon(searchIcon, "search");
    const search = searchWrap.createEl("input", { cls: "naitflow-search", attr: { type: "search", placeholder: t("trashSearch"), "aria-label": t("trashSearch") } });
    search.value = this.query;
    search.oninput = () => {
      this.query = search.value;
      this.renderRows();
    };

    const header = content.createDiv("naitflow-trash-headings");
    header.createSpan({ text: t("trashPage") });
    header.createSpan({ text: t("trashDeletedAt") });

    content.createDiv("naitflow-trash-list");
    this.renderRows();
    content.createEl("button", { cls: "naitflow-trash-clear", text: t("trashClearAll"), attr: { type: "button", disabled: "true" } });
    window.setTimeout(() => search.focus(), 0);
  }

  private renderRows(): void {
    const list = this.popover?.querySelector<HTMLElement>(".naitflow-trash-list");
    if (!list) return;
    list.empty();
    const query = this.query.trim().toLocaleLowerCase(localeCode());
    const records = this.records.filter((record) => !query || record.title.toLocaleLowerCase(localeCode()).includes(query));
    if (!records.length) {
      list.createDiv({ cls: "naitflow-trash-empty", text: t("trashEmpty") });
      return;
    }
    for (const record of records) this.renderRow(list, record);
  }

  private renderRow(parent: HTMLElement, record: NaitFlowTrashRecord): void {
    const row = parent.createDiv("naitflow-trash-row");
    const fileIcon = row.createSpan("naitflow-trash-icon");
    setIcon(fileIcon, "file-text");
    const details = row.createDiv("naitflow-trash-details");
    details.createDiv({ cls: "naitflow-trash-title", text: record.title });
    details.createDiv({ cls: "naitflow-trash-path", text: parentPath(record.originalFilePath) || "/" });
    row.createDiv({ cls: "naitflow-trash-date", text: formatDeletedAt(record.deletedAt) });

    const restore = row.createEl("button", { cls: "naitflow-trash-action", attr: { type: "button", "aria-label": t("trashRestore") } });
    setIcon(restore, "undo-2");
    restore.onclick = () => void this.restore(record);

    const remove = row.createEl("button", { cls: "naitflow-trash-action naitflow-trash-action--danger", attr: { type: "button", "aria-label": t("trashDeleteForever") } });
    setIcon(remove, "trash-2");
    remove.onclick = () => new ConfirmPermanentDeleteModal(this.app, record, () => void this.deleteForever(record)).open();
  }

  private async restore(record: NaitFlowTrashRecord): Promise<void> {
    const adapter = this.app.vault.adapter;
    if (await adapter.exists(record.originalFilePath) || (record.originalFolderPath && await adapter.exists(record.originalFolderPath))) {
      new Notice(t("trashRestoreExists"));
      return;
    }
    try {
      await ensureParentFolders(this.app, record.originalFilePath);
      if (record.originalFolderPath) await ensureParentFolders(this.app, record.originalFolderPath);
      await adapter.rename(record.trashedFilePath, record.originalFilePath);
      if (record.trashedFolderPath && record.originalFolderPath && await adapter.exists(record.trashedFolderPath)) {
        await adapter.rename(record.trashedFolderPath, record.originalFolderPath);
      }
      await this.plugin.removeTrashRecord(record.id);
      this.plugin.refreshUi();
      await this.reload();
    } catch (error) {
      console.error("NaitFlow: failed to restore page", error);
      new Notice(t("trashRestoreFailed", { error: String(error) }));
    }
  }

  private async deleteForever(record: NaitFlowTrashRecord): Promise<void> {
    try {
      const adapter = this.app.vault.adapter;
      if (await adapter.exists(record.trashedFilePath)) await adapter.remove(record.trashedFilePath);
      if (record.trashedFolderPath && await adapter.exists(record.trashedFolderPath)) await adapter.rmdir(record.trashedFolderPath, true);
      await this.plugin.removeTrashRecord(record.id);
      await this.reload();
    } catch (error) {
      console.error("NaitFlow: failed to permanently delete page", error);
      new Notice(t("trashDeleteFailed", { error: String(error) }));
    }
  }
}

class ConfirmPermanentDeleteModal extends Modal {
  constructor(app: App, private readonly record: NaitFlowTrashRecord, private readonly onConfirm: () => void) {
    super(app);
  }

  override onOpen(): void {
    this.modalEl.addClass("naitflow-modal", "naitflow-trash-confirm-modal");
    this.contentEl.createEl("div", { cls: "naitflow-trash-confirm-title", text: t("trashDeleteForeverTitle", { title: this.record.title }) });
    const actions = this.contentEl.createDiv("naitflow-modal-actions");
    const remove = actions.createEl("button", { cls: "naitflow-danger-button", text: t("ok") });
    remove.onclick = () => {
      this.close();
      this.onConfirm();
    };
    actions.createEl("button", { text: t("cancel") }).onclick = () => this.close();
  }
}
