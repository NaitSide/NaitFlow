import { App, ButtonComponent, Modal, Platform, requestUrl, setIcon, TFile, TFolder } from "obsidian";
import { t } from "./i18n";
import { BuildinArtworkFailure, buildinPageId, describeBuildinIcon, restoreBuildinAppearance } from "./buildin-page-import";
import { BuildinImportedNote, NaitFlowImportPlan, prepareBuildinImport } from "./importer";

const BUILDIN_API = "https://api.buildin.ai";
const CALLBACK_PORT = 8765;
const REDIRECT_URI = `http://127.0.0.1:${CALLBACK_PORT}/callback`;
const BUILDIN_RATE_RETRIES = 3;
const BUILDIN_MAX_RETRY_DELAY = 300_000;
const DEFAULT_DESTINATION = "_import_buildin_md_api";

export interface BuildinImportState {
  zip?: {
    archiveName: string;
    destination: string;
    attachments: number;
    notes: readonly BuildinImportedNote[];
  };
  checkedId?: string;
  log: string[];
  report?: { icons: number; covers: number; failures: (BuildinArtworkFailure | string)[] } | { summary: string; failures: string[] };
}

interface BuildinReadOptions {
  token: string;
  log: (line: string) => void;
  signal: AbortSignal;
  cooldown: { until: number };
}

export class BuildinImportModal extends Modal {
  private readonly lifetime = new AbortController();
  private token = "";
  private checkedId?: string;
  private archive?: File;
  private busy: "zip" | "oauth" | "check" | "artwork" | undefined;
  private archivePicker!: HTMLInputElement;
  private archiveName!: HTMLElement;
  private destination!: HTMLInputElement;
  private chooseButton!: ButtonComponent;
  private zipButton!: ButtonComponent;
  private zipStatus!: HTMLElement;
  private apiPanel!: HTMLElement;
  private clientId!: HTMLInputElement;
  private secret!: HTMLInputElement;
  private source!: HTMLInputElement;
  private authorizeButton!: ButtonComponent;
  private inspectButton!: ButtonComponent;
  private artworkButton!: ButtonComponent;
  private apiStatus!: HTMLElement;
  private report!: HTMLElement;
  private importLog!: HTMLTextAreaElement;

  constructor(
    app: App, private readonly pluginDir: string | undefined, private readonly state: BuildinImportState,
    private readonly save: () => Promise<void>, private readonly refresh: () => void, private readonly closed: () => void
  ) {
    super(app);
  }

  override onOpen(): void {
    const cleared = this.clearMissingZip();
    const { signal } = this.lifetime;
    this.modalEl.addClass("naitflow-modal", "naitflow-notion-modal", "naitflow-buildin-modal");
    this.containerEl.addEventListener("click", (event) => {
      if (!event.composedPath().includes(this.modalEl)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { capture: true, signal });
    this.setTitle(t("buildinImport"));
    const panel = this.contentEl.createDiv("naitflow-notion-panel");
    const zipStage = panel.createEl("section", { cls: "naitflow-buildin-stage" });
    zipStage.createEl("h3", { text: t("buildinZipStage") });
    const zip = zipStage.createDiv("naitflow-buildin-import-form");
    zip.createDiv({ cls: "naitflow-notion-help", text: t("buildinZipStageDesc") });
    const pickerRow = zip.createDiv("naitflow-buildin-picker");
    this.archivePicker = pickerRow.createEl("input", { type: "file", attr: { accept: ".zip,application/zip" } });
    this.archivePicker.hidden = true;
    this.chooseButton = new ButtonComponent(pickerRow).setButtonText(t("importChooseArchive"))
      .onClick(() => this.archivePicker.click());
    this.archiveName = pickerRow.createSpan({ cls: "naitflow-notion-help", attr: { "aria-live": "polite" } });
    this.archivePicker.addEventListener("change", () => {
      const archive = this.archivePicker.files?.[0];
      this.archivePicker.value = "";
      if (!archive) return;
      this.archive = archive;
      this.showZipResult();
      this.syncControls();
    }, { signal });
    this.destination = this.field(zip, t("importDestination"));
    this.destination.value = this.state.zip?.destination ?? DEFAULT_DESTINATION;
    this.zipButton = new ButtonComponent(zip).setButtonText(t("importZip")).setCta().onClick(() => void this.importZip());
    this.zipStatus = zip.createDiv({ cls: "naitflow-notion-status", attr: { role: "status" } });
    this.showZipResult();

    const api = panel.createEl("section", { cls: "naitflow-buildin-stage" });
    api.createEl("h3", { text: t("buildinArtworkStage") });
    this.apiPanel = api.createDiv();
    const steps = this.apiPanel.createEl("ol", { cls: "naitflow-notion-help naitflow-buildin-steps" });
    const create = steps.createEl("li");
    create.createEl("a", { cls: "naitflow-buildin-step-title", text: t("notionCreateIntegration"), href: "https://buildin.ai/dev/integrations",
      attr: { target: "_blank", rel: "noopener noreferrer" } });
    create.createDiv({ text: t("buildinCreateStep") });
    const access = steps.createEl("li");
    access.createEl("strong", { cls: "naitflow-buildin-step-title", text: t("buildinAccessStep") });
    const checklist = access.createEl("ul", { cls: "naitflow-buildin-checklist" });
    this.copyableStep(checklist, t("buildinApplicationName"), "NaitFlow");
    this.copyableStep(checklist, t("buildinRedirectStep"), REDIRECT_URI);
    const permission = checklist.createEl("li").createEl("label", { cls: "naitflow-buildin-permission" });
    const checkbox = permission.createEl("input", { type: "checkbox" });
    checkbox.checked = true;
    checkbox.disabled = true;
    permission.createSpan({ text: t("buildinReadOnlyStep") });
    checklist.createEl("li", { text: t("buildinCreateApplication") });

    const connect = steps.createEl("li");
    connect.createEl("strong", { cls: "naitflow-buildin-step-title", text: t("buildinConnectStep") });
    this.clientId = this.field(connect, t("buildinClientId"));
    this.secret = this.field(connect, t("buildinClientSecret"), "password");
    this.authorizeButton = new ButtonComponent(connect).setButtonText(t("buildinAuthorize"))
      .onClick(() => void this.authorize());
    const form = this.apiPanel.createDiv("naitflow-buildin-import-form");
    this.source = this.field(form, t("buildinSourcePage"));
    this.source.placeholder = "https://buildin.ai/…";
    this.source.value = this.state.checkedId ? `https://buildin.ai/${this.state.checkedId}` : "";
    form.createDiv({ text: t("buildinArtworkSourceHelp"), cls: "naitflow-notion-help" });
    this.source.addEventListener("input", () => {
      this.checkedId = undefined;
      this.syncControls();
      this.apiStatus.setText(t("buildinAuthorized"));
    }, { signal });
    const actions = form.createDiv("naitflow-notion-actions");
    this.inspectButton = new ButtonComponent(actions).setButtonText(t("buildinCheckPage")).onClick(() => void this.inspect());
    this.artworkButton = new ButtonComponent(actions).setButtonText(t("buildinArtworkStart")).setCta().onClick(() => void this.restoreArtwork());

    this.apiStatus = api.createDiv({ cls: "naitflow-notion-status naitflow-buildin-import-form", attr: { role: "status" } });
    if (!this.state.zip) this.apiStatus.setText(t("buildinAwaitZip"));
    else if (!Platform.isDesktopApp) this.apiStatus.setText(t("buildinDesktopOnly"));
    this.report = api.createDiv({ cls: "naitflow-buildin-import-form naitflow-notion-help naitflow-buildin-report", attr: { "aria-live": "polite" } });
    this.showReport();
    const log = panel.createEl("details", { cls: "naitflow-buildin-stage" });
    log.createEl("summary", { text: t("buildinImportLog") });
    this.importLog = log.createEl("textarea", {
      cls: "naitflow-buildin-cover-log",
      attr: { readonly: "", rows: "5", spellcheck: "false", placeholder: t("buildinImportLogEmpty"), "aria-label": t("buildinImportLog") }
    });
    this.importLog.value = this.state.log.join("\n");
    this.syncControls();
    if (cleared) void this.persist();
  }

  private clearMissingZip(): boolean {
    const zip = this.state.zip;
    if (!zip) return false;
    const { vault } = this.app;
    if (vault.getAbstractFileByPath(zip.destination) instanceof TFolder &&
      vault.getAbstractFileByPath(`${zip.destination}.md`) instanceof TFile &&
      zip.notes.some(({ path }) => vault.getAbstractFileByPath(path) instanceof TFile)) return false;

    delete this.state.zip;
    delete this.state.checkedId;
    delete this.state.report;
    return true;
  }

  override onClose(): void {
    if (this.busy) this.log(t("buildinImportCancelled"));
    this.lifetime.abort();
    this.secret.value = "";
    this.token = "";
    this.archive = undefined;
    this.contentEl.empty();
    void this.save().catch(() => {});
    this.closed();
  }

  private copyableStep(list: HTMLElement, label: string, value: string): void {
    const row = list.createEl("li").createDiv("naitflow-buildin-address");
    row.createSpan({ text: label });
    row.createEl("code", { text: value });
    const copy = new ButtonComponent(row).setButtonText(t("buildinCopyAddress"));
    copy.onClick(async () => {
      try {
        const view = copy.buttonEl.ownerDocument.defaultView ?? window;
        await view.navigator.clipboard.writeText(value);
        if (!this.lifetime.signal.aborted) copy.setButtonText(t("copied"));
      } catch {
        if (!this.lifetime.signal.aborted) copy.setButtonText(t("copyFailed"));
      }
    });
  }

  private field(parent: HTMLElement, label: string, type = "text"): HTMLInputElement {
    const row = parent.createEl("label", { cls: "naitflow-notion-field" });
    row.createSpan({ text: label });
    return row.createEl("input", { type, attr: { spellcheck: "false", autocomplete: "off" } });
  }

  private syncControls(): void {
    const active = Boolean(this.busy);
    const api = Boolean(this.state.zip && Platform.isDesktopApp);
    this.chooseButton.setDisabled(active);
    this.archiveName.setText(this.archive?.name ?? this.state.zip?.archiveName ?? t("buildinZipNoArchive"));
    this.destination.disabled = active;
    this.zipButton.setDisabled(active || !this.archive);
    this.zipButton.setButtonText(t(this.busy === "zip" ? "importing" : "importZip"));
    this.apiPanel.inert = !api;
    this.clientId.disabled = !api || Boolean(this.token) || active;
    this.secret.disabled = this.clientId.disabled;
    this.authorizeButton.setDisabled(this.clientId.disabled);
    this.source.disabled = !api || !this.token || active;
    this.inspectButton.setDisabled(this.source.disabled);
    this.artworkButton.setDisabled(this.source.disabled || !this.checkedId);
    this.artworkButton.setButtonText(t(this.busy === "artwork" ? "buildinArtworkApplying" : "buildinArtworkStart"));
  }

  private async importZip(): Promise<void> {
    if (this.busy || !this.archive) return;
    const archive = this.archive;
    const { signal } = this.lifetime;
    this.busy = "zip";
    this.syncControls();
    const destination = this.destination.value;
    this.zipStatus.removeClass("is-ready", "is-error");
    this.setStatus(this.zipStatus, t("importReading"));
    let plan: NaitFlowImportPlan | undefined;
    try {
      try {
        plan = await prepareBuildinImport(this.app, archive, signal);
      } catch {
        signal.throwIfAborted();
        const message = t("buildinZipInvalid");
        this.zipStatus.empty();
        this.zipStatus.addClass("is-error");
        const icon = this.zipStatus.createSpan({ cls: "naitflow-buildin-status-icon", attr: { "aria-hidden": "true" } });
        setIcon(icon, "circle-x");
        this.zipStatus.createSpan({ text: message });
        this.log(message);
        return;
      }
      this.zipStatus.empty();
      const updateProgress = this.createProgress(this.zipStatus);
      let lastLogged = -1;
      const result = await plan.execute(destination, ({ current, total }) => {
        const progress = t("buildinZipProgress", { current, total });
        updateProgress(current, total, progress);
        if (current !== lastLogged && (current % 10 === 0 || current === total)) {
          this.log(progress);
          lastLogged = current;
        }
      });
      this.state.zip = { archiveName: archive.name, destination: result.destination, attachments: result.attachments, notes: result.buildinNotes! };
      this.state.checkedId = undefined;
      this.state.report = undefined;
      this.archive = undefined;
      this.checkedId = undefined;
      this.source.value = "";
      this.destination.value = result.destination;
      this.showZipResult();
      this.showReport();
      this.log(this.zipStatus.textContent ?? "");
      this.apiStatus.setText(t(!Platform.isDesktopApp ? "buildinDesktopOnly" : this.token ? "buildinAuthorized" : "buildinAwaitIntegration"));
      this.refresh();
    } catch (error) {
      if (!signal.aborted) {
        const message = error instanceof Error ? error.message : "";
        const status = message === "destination-empty" ? t("importDestinationEmpty") : t("importFailed");
        this.setStatus(this.zipStatus, status);
      }
    } finally {
      await plan?.close();
      this.finish();
      await this.persist();
    }
  }

  private showZipResult(): void {
    this.zipStatus.empty();
    this.zipStatus.removeClass("is-error");
    const zip = this.state.zip;
    this.zipStatus.toggleClass("is-ready", Boolean(zip));
    if (!zip) return;
    const icon = this.zipStatus.createSpan("naitflow-buildin-status-icon");
    setIcon(icon, "circle-check-big");
    this.zipStatus.createSpan({ text: t("buildinZipComplete", { pages: zip.notes.length, attachments: zip.attachments }) });
  }

  private async authorize(): Promise<void> {
    if (this.busy || !this.state.zip || this.token || !Platform.isDesktopApp) return;
    const clientId = this.clientId.value.trim();
    const clientSecret = this.secret.value.trim();
    if (!clientId || !clientSecret) {
      this.setStatus(this.apiStatus, t("buildinCredentialsRequired"));
      return;
    }
    const { signal } = this.lifetime;
    this.busy = "oauth";
    this.syncControls();
    this.setStatus(this.apiStatus, t("buildinAuthorizing"));
    try {
      const code = await receiveBuildinCode(clientId, signal);
      signal.throwIfAborted();
      const payload = await buildinJson("/oauth/token", { signal, log: this.log, form: new URLSearchParams({
        grant_type: "authorization_code", code, redirect_uri: REDIRECT_URI, client_id: clientId, client_secret: clientSecret
      }) });
      if (typeof payload.access_token !== "string" || !payload.access_token) throw new Error(t("buildinInvalidResponse"));
      signal.throwIfAborted();
      this.token = payload.access_token;
      this.setStatus(this.apiStatus, t("buildinAuthorized"));
    } catch (error) {
      this.apiError(error);
    } finally {
      this.secret.value = "";
      this.finish();
      await this.persist();
    }
  }

  private async inspect(): Promise<void> {
    const zip = this.state.zip;
    if (this.busy || !zip || !this.token) return;
    this.checkedId = undefined;
    this.syncControls();
    const id = buildinPageId(this.source.value);
    if (!id) {
      this.setStatus(this.apiStatus, t("buildinInvalidPage"));
      return;
    }
    if (!zip.notes.some((note) => note.id === id)) {
      this.setStatus(this.apiStatus, t("buildinPageNotInArchive"));
      return;
    }
    const options = this.readOptions();
    this.busy = "check";
    this.syncControls();
    this.setStatus(this.apiStatus, t("buildinChecking"));
    try {
      const page = await this.readPage(id, options);
      options.signal.throwIfAborted();
      this.log(describeBuildinIcon(page.icon));
      this.checkedId = id;
      this.state.checkedId = id;
      this.setStatus(this.apiStatus, t("buildinPageChecked"));
    } catch (error) {
      this.apiError(error);
    } finally {
      this.finish();
      await this.persist();
    }
  }

  private async restoreArtwork(): Promise<void> {
    const zip = this.state.zip;
    const id = this.checkedId;
    if (this.busy || !zip || !id || !this.token || buildinPageId(this.source.value) !== id) return;
    const options = this.readOptions();
    this.busy = "artwork";
    this.syncControls();
    this.setStatus(this.apiStatus, t("buildinArtworkApplying"));
    this.report.hidden = true;
    const updateProgress = this.createProgress(this.apiStatus);
    let unauthorized = false;
    try {
      const { icons, covers, failures } = await restoreBuildinAppearance(this.app, zip.destination, zip.notes, {
        signal: options.signal, pluginDir: this.pluginDir, log: this.log,
        onProgress: (current, total) => updateProgress(current, total, t("buildinArtworkProgress", { current, total })),
        readPage: async (pageId) => {
          try {
            if (unauthorized) throw new BuildinHttpError(401);
            return await this.readPage(pageId, options);
          } catch (error) {
            if (error instanceof BuildinHttpError && error.status === 401) unauthorized = true;
            throw error;
          }
        },
        resolveMediaKey: async (pageId, key) => {
          const query = new URLSearchParams({ block_id: pageId, oss_name: key });
          const payload = await buildinJson(`/v2/files/download-url?${query}`, options);
          const file = payload.file as { url?: unknown } | undefined;
          return typeof file?.url === "string" ? file.url.trim() : undefined;
        }
      });
      options.signal.throwIfAborted();
      this.state.report = { icons, covers, failures };
      this.showReport();
      if (unauthorized) this.apiError(new BuildinHttpError(401));
      else this.apiStatus.empty();
      this.log(t("buildinArtworkResult", { icons, covers, count: failures.length }));
      this.refresh();
    } catch (error) {
      this.apiError(error);
    } finally {
      this.report.hidden = false;
      this.finish();
      await this.persist();
    }
  }

  private createProgress(parent: HTMLElement): (current: number, total: number, text: string) => void {
    const row = parent.createDiv("naitflow-import-progress");
    const track = row.createDiv({ cls: "naitflow-import-progress-track", attr: { "aria-hidden": "true" } });
    const bar = track.createDiv("naitflow-import-progress-bar");
    const label = row.createDiv("naitflow-import-progress-label");
    return (current, total, text) => {
      bar.style.width = `${total ? Math.round(current / total * 100) : 0}%`;
      label.setText(text);
    };
  }

  private showReport(): void {
    this.report.empty();
    const report = this.state.report;
    if (!report) return;
    const { failures } = report;
    const legacyCounts = "summary" in report ? /^\D+(\d+)\D+(\d+)\D+(\d+)\D*$/.exec(report.summary) : null;
    const counts = "icons" in report ? report : legacyCounts && { icons: Number(legacyCounts[1]), covers: Number(legacyCounts[2]) };
    const heading = this.report.createDiv("naitflow-notion-status is-ready");
    const icon = heading.createSpan({ cls: "naitflow-buildin-status-icon", attr: { "aria-hidden": "true" } });
    setIcon(icon, "circle-check-big");
    heading.createSpan({ text: t("buildinArtworkComplete") });
    if (counts) this.report.createDiv({ text: t("buildinArtworkCounts", { icons: counts.icons, covers: counts.covers }) });
    if (failures.length) {
      this.report.createDiv({ cls: "naitflow-buildin-report-error", text: t("buildinArtworkErrorCount", { count: failures.length }) });
      const detail = this.report.createEl("details", { cls: "naitflow-buildin-report-errors" });
      detail.createEl("summary", { text: t("buildinArtworkErrors") });
      const list = detail.createEl("ul");
      for (const failure of failures) {
        if (typeof failure === "string") list.createEl("li", { text: failure });
        else {
          const item = list.createEl("li");
          item.createEl("strong", { text: failure.path });
          item.createDiv({ text: failure.message });
        }
      }
    }
  }

  private readOptions(): BuildinReadOptions {
    return { token: this.token, log: this.log, signal: this.lifetime.signal, cooldown: { until: 0 } };
  }

  private async readPage(id: string, options: BuildinReadOptions): Promise<Record<string, unknown>> {
    const page = await buildinJson(`/v2/pages/${id}`, options);
    if (typeof page.id !== "string" || page.id.toLowerCase() !== id) throw new Error(t("buildinInvalidResponse"));
    return page;
  }

  private apiError(error: unknown): void {
    if (this.lifetime.signal.aborted) return;
    if (error instanceof BuildinHttpError && error.status === 401) {
      this.token = "";
      this.checkedId = undefined;
    }
    this.setStatus(this.apiStatus, error instanceof Error ? error.message : t("buildinNetworkError"));
  }

  private finish(): void {
    this.busy = undefined;
    if (!this.lifetime.signal.aborted) this.syncControls();
  }

  private async persist(): Promise<void> {
    try {
      await this.save();
    } catch {
      if (!this.lifetime.signal.aborted) this.setStatus(this.apiStatus, t("buildinSaveStateError"));
    }
  }

  private setStatus(element: HTMLElement, text: string): void {
    element.setText(text);
    this.log(text);
  }

  private readonly log = (line: string): void => {
    if (this.lifetime.signal.aborted) return;
    this.state.log.push(line);
    if (this.state.log.length > 3000) this.state.log.splice(0, this.state.log.length - 3000);
    const field = this.importLog;
    const atBottom = field.scrollHeight - field.scrollTop - field.clientHeight < 8;
    field.value = this.state.log.join("\n");
    if (atBottom) field.scrollTop = field.scrollHeight;
  };
}

class BuildinHttpError extends Error {
  constructor(readonly status: number) {
    super(status === 429 ? t("buildinRateLimited") : t("buildinHttpError", { status }));
  }
}

async function buildinJson(
  path: string, options: Partial<BuildinReadOptions> & { form?: URLSearchParams }
): Promise<Record<string, unknown>> {
  const method = options.form ? "POST" : "GET";
  const endpoint = `${method} ${path.split("?", 1)[0]}`;
  const { signal, cooldown, log } = options;
  for (let attempt = 0; ; attempt++) {
    signal?.throwIfAborted();
    if (signal && cooldown) {
      for (let delay = cooldown.until - Date.now(); delay > 0; delay = cooldown.until - Date.now()) {
        await waitForBuildinRetry(delay, signal);
      }
    }
    signal?.throwIfAborted();
    log?.(endpoint);
    let response;
    try {
      response = await requestUrl({
        url: BUILDIN_API + path,
        method,
        body: options.form?.toString(),
        contentType: options.form ? "application/x-www-form-urlencoded" : undefined,
        headers: options.token ? { Authorization: `Bearer ${options.token}` } : undefined,
        throw: false
      });
    } catch {
      signal?.throwIfAborted();
      log?.(`→ ${endpoint} · ${t("buildinNetworkError")}`);
      throw new Error(t("buildinNetworkError"));
    }
    signal?.throwIfAborted();
    const header = Object.entries(response.headers ?? {}).find(([name]) => name.toLowerCase() === "retry-after")?.[1]?.trim();
    const retryAfter = header && /^(?:\d{1,10}|[a-z]{3}, \d{2} [a-z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT)$/i.test(header) ? header : undefined;
    const headerLog = retryAfter
      ? ` · Retry-After: ${retryAfter}` : "";
    log?.(`→ HTTP ${response.status} ${endpoint}${headerLog}`);
    if (response.status === 429 && method === "GET" && signal && cooldown && attempt < BUILDIN_RATE_RETRIES) {
      const indicatedDelay = retryAfter && /^\d+$/.test(retryAfter)
        ? Number(retryAfter) * 1000
        : retryAfter ? Date.parse(retryAfter) - Date.now() : 0;
      const delay = Math.max(Number.isFinite(indicatedDelay) ? indicatedDelay : 0, 1000 * 2 ** attempt);
      if (delay <= BUILDIN_MAX_RETRY_DELAY) {
        const now = Date.now();
        cooldown.until = Math.max(cooldown.until, now + delay);
        log?.(`→ ${t("buildinRetryWaiting", { seconds: Math.ceil((cooldown.until - now) / 1000) })} ${endpoint}`);
        continue;
      }
    }
    if (response.status < 200 || response.status >= 300) {
      if (response.status === 403 && method === "GET" && path.startsWith("/v2/pages/")) {
        try {
          log?.(`buildin.page.forbidden ${JSON.stringify(describeForbiddenPage(response.json))}`);
        } catch {
          log?.("buildin.page.forbidden non-json");
        }
      }
      throw new BuildinHttpError(response.status);
    }
    try {
      const json = response.json as Record<string, unknown>;
      const payload = json.data ?? json;
      if (payload && typeof payload === "object" && !Array.isArray(payload)) return payload as Record<string, unknown>;
    } catch {
      // Never show a raw API or OAuth response.
    }
    throw new Error(t("buildinInvalidResponse"));
  }
}

function describeForbiddenPage(value: unknown): Record<string, string> {
  const body = value as { code?: unknown; message?: unknown; request_id?: unknown } | null;
  const diagnostic: Record<string, string> = {};
  if (body?.code === "forbidden") diagnostic.code = "forbidden";
  if (typeof body?.request_id === "string" && /^req_[a-z0-9_-]{3,80}$/i.test(body.request_id)) {
    diagnostic.requestId = body.request_id;
  }
  const message = typeof body?.message === "string" ? body.message : "";
  if (/\bscope\b|\bpages\.read\b/i.test(message)) diagnostic.detail = "scope";
  else if (/\b(?:plan|subscription|workspace capability)\b/i.test(message)) diagnostic.detail = "workspace capability";
  else if (/\b(?:page|resource|block)\b.*\b(?:access|permission|denied)\b|\b(?:access|permission)\b.*\b(?:page|resource|block)\b/i.test(message)) {
    diagnostic.detail = "resource access";
  }
  return diagnostic;
}

function waitForBuildinRetry(ms: number, signal: AbortSignal): Promise<void> {
  signal.throwIfAborted();
  return new Promise((resolve, reject) => {
    const cancel = (): void => {
      clearTimeout(timer);
      reject(signal.reason);
    };
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", cancel);
      resolve();
    }, ms);
    signal.addEventListener("abort", cancel, { once: true });
  });
}

async function receiveBuildinCode(clientId: string, signal: AbortSignal): Promise<string> {
  if (!Platform.isDesktopApp || !window.require) throw new Error(t("buildinDesktopOnly"));
  let http: typeof import("node:http");
  let openBrowser: (url: string) => Promise<void>;
  try {
    http = window.require("node:http") as typeof http;
    const electron = window.require("electron") as { shell?: { openExternal(url: string): Promise<void> } };
    if (!electron.shell) throw new Error();
    openBrowser = electron.shell.openExternal.bind(electron.shell);
  } catch {
    throw new Error(t("buildinDesktopOnly"));
  }
  signal.throwIfAborted();
  const state = crypto.randomUUID();
  const authorize = new URL("/oauth/authorize", BUILDIN_API);
  authorize.search = new URLSearchParams({
    client_id: clientId, response_type: "code", redirect_uri: REDIRECT_URI, scope: "pages.read blocks.read", state
  }).toString();

  return new Promise<string>((resolve, reject) => {
    let settled = false;
    const finish = (error?: Error, code?: string): void => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      signal.removeEventListener("abort", abort);
      server.close();
      if (code) resolve(code);
      else {
        if (error) server.closeAllConnections?.();
        reject(error ?? new Error(t("buildinOAuthDenied")));
      }
    };
    const abort = (): void => {
      finish(new Error(t("cancel")));
    };
    const timer = window.setTimeout(() => finish(new Error(t("buildinOAuthTimeout"))), 180_000);
    const server = http.createServer((request, response) => {
      const query = request.url?.startsWith("/callback?") ? new URLSearchParams(request.url.slice(10)) : undefined;
      if (request.method !== "GET" || query?.get("state") !== state) {
        response.writeHead(404, { Connection: "close" }).end();
        return;
      }
      const code = query.get("code");
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store",
        "Referrer-Policy": "no-referrer", Connection: "close" });
      response.end(t(code ? "buildinOAuthReturn" : "buildinOAuthDenied"));
      finish(undefined, code ?? undefined);
    });
    server.on("error", () => finish(new Error(t("buildinPortError"))));
    signal.addEventListener("abort", abort, { once: true });
    server.listen(CALLBACK_PORT, "127.0.0.1", () => {
      if (settled) {
        server.close();
        return;
      }
      void openBrowser(authorize.href).catch(() => finish(new Error(t("buildinBrowserError"))));
    });
  });
}
