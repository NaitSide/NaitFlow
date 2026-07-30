var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NaitFlowPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian12 = require("obsidian");

// src/cover-picker.ts
var import_obsidian4 = require("obsidian");

// src/model.ts
var import_obsidian2 = require("obsidian");

// src/i18n.ts
var import_obsidian = require("obsidian");
var EN = {
  openPagesRibbon: "Open NaitFlow pages",
  openPagesCommand: "Open page tree",
  chooseIconCommand: "Choose icon for current page",
  chooseCoverCommand: "Choose cover for current page",
  pluginConflict: "NaitFlow: for a clean interface, disable older icon and banner plugins after testing.",
  settingsIntro: "Only the essentials. Icons, covers, and nesting are stored in the Markdown files themselves.",
  mediaFolder: "Media folder",
  mediaFolderDesc: "Local icons and covers. Path inside the vault.",
  unsplashKeyDesc: "Optional. Used only to search Unsplash covers. The key is stored locally in this vault's settings.",
  unsplashKeyPlaceholder: "Paste Access Key",
  openTreeOnStartup: "Open the NaitFlow tree on startup",
  importData: "Import data",
  importFormats: "Notion (HTML), Notion (MD), Buildin AI (MD)",
  importFormatsDesc: "Import pages, nested structure, links, and attachments from a ZIP archive.",
  importZip: "Import ZIP",
  importChooseArchive: "Choose a ZIP archive to import",
  importReading: "NaitFlow: reading archive\u2026",
  importPages: "Pages",
  importAttachments: "Attachments",
  importRenamed: "Renamed duplicates",
  importBrokenLinks: "Unresolved links",
  importDestination: "Import name",
  importStart: "Import",
  importing: "Importing\u2026",
  importVisualMissing: "Page icons and covers are not included in this export format.",
  importDuplicatesWarning: "{count} duplicate page name(s) will receive a numeric suffix.",
  importBrokenLinksWarning: "{count} link(s) point to files that are missing from the archive.",
  importRemoteCovers: "{count} Notion cover(s) are stored as external links.",
  importComplete: "Import complete",
  importCompleteSummary: "Imported {pages} page(s) and {attachments} attachment(s).",
  importUnknownFormat: "NaitFlow: this ZIP is not a supported Notion or Buildin AI export.",
  importNoPages: "NaitFlow: no supported pages were found in the archive.",
  importDestinationEmpty: "Choose a destination folder inside the vault.",
  importDestinationExists: "The destination folder already exists. Choose another name.",
  importFailed: "NaitFlow: import failed. The source archive was not changed.",
  close: "Close",
  untitled: "Untitled",
  pagesView: "NaitFlow pages",
  pages: "Pages",
  newPage: "New page",
  createFirstPage: "Create your first page",
  collapse: "Collapse",
  expand: "Expand",
  pageMenu: "Menu",
  openInNewTab: "Open in new tab",
  openInRightPane: "Open in right pane",
  openInNewWindow: "Open in new window",
  renamePage: "Rename",
  renamePagePrompt: "Page name",
  renamePageFailed: "NaitFlow: could not rename page \u2014 {error}",
  movePage: "Move to\u2026",
  movePageSearch: "Move page to\u2026",
  movePagePlaceholder: "Choose destination folder\u2026",
  movePageFailed: "NaitFlow: could not move page \u2014 {error}",
  movePageInvalid: "A page cannot be moved into its own folder.",
  copyPath: "Copy path",
  showInExplorer: "Show in File Explorer",
  showInExplorerFailed: "NaitFlow: could not open File Explorer.",
  duplicatePage: "Create copy",
  duplicatePageFailed: "NaitFlow: could not create copy \u2014 {error}",
  deletePage: "Delete",
  deletePageFailed: "NaitFlow: could not move page to trash \u2014 {error}",
  trash: "Trash",
  trashSearch: "Search trash",
  trashPage: "Page",
  trashDeletedAt: "Deleted at",
  trashEmpty: "No deleted pages",
  trashClearAll: "Clear list completely",
  trashRestore: "Restore",
  trashRestoreExists: "NaitFlow: the original page location is already occupied.",
  trashRestoreFailed: "NaitFlow: could not restore page \u2014 {error}",
  trashDeleteForever: "Delete forever",
  trashDeleteForeverTitle: "Delete {title} forever?",
  ok: "OK",
  trashDeleteForeverPrompt: 'Delete "{title}" permanently? This cannot be undone.',
  trashDeleteFailed: "NaitFlow: could not permanently delete page \u2014 {error}",
  trashLocalUnavailable: "NaitFlow: this page was deleted outside the local Vault trash and cannot be restored here.",
  copySuffix: "copy",
  addBookmark: "Add to bookmarks",
  bookmarkUnavailable: "NaitFlow: enable the core Bookmarks plugin to use this action.",
  movePageSuggested: "Pages",
  movePageVaultRoot: "Vault root",
  copied: "Copied",
  copyFailed: "NaitFlow: could not copy to clipboard.",
  nestedPage: "Add page",
  addSubpage: "Add subpage",
  noFreeFilename: "could not find an available file name",
  createPageFailed: "NaitFlow: could not create page \u2014 {error}",
  change: "Change",
  position: "Reposition",
  changeIcon: "Change icon",
  addIcon: "Add icon",
  addCover: "Add cover",
  save: "Save",
  dragPhoto: "Drag image to reposition",
  emoji: "Emoji",
  icons: "Icons",
  upload: "Upload",
  link: "Link",
  gallery: "Gallery",
  clear: "Remove",
  cancel: "Cancel",
  searchEmoji: "Search emoji \u2014 smile, server, rocket\u2026",
  searchIcons: "Search icons \u2014 server, code, docker\u2026",
  recent: "Recent",
  nothingFound: "Nothing found",
  uploadIconHint: "PNG, JPG, WebP, GIF, or SVG. The file will be copied into the vault.",
  chooseImage: "Choose image",
  imageUrlPlaceholder: "Paste an image link\u2026",
  set: "Set",
  directImageHint: "Works with a direct image link.",
  saveIconFailed: "NaitFlow: could not save icon \u2014 {error}",
  httpOnly: "only HTTP/HTTPS links are supported",
  notImage: "the link did not return an image file",
  downloadIconFailed: "NaitFlow: could not download icon \u2014 {error}",
  people: "People",
  animals: "Animals & nature",
  food: "Food & drink",
  activity: "Activity",
  places: "Travel & places",
  objects: "Objects",
  symbols: "Symbols",
  flags: "Flags",
  myCovers: "My covers",
  colorGradient: "Color & gradient",
  pluginFolderMissing: "plugin folder not found",
  builtInCoverFailed: "NaitFlow: could not install built-in cover \u2014 {error}",
  uploadCoverHint: "Recommended size: 1500\xD7600 or larger. The file will be copied into the vault.",
  webImageHint: "Works with any image from the web.",
  unsplashKeyRequired: "Add an Unsplash Access Key in NaitFlow settings. Without a key, all other plugin features remain fully local.",
  searchImages: "Search for an image\u2026",
  photoBy: "Photo by {name}",
  loading: "Loading\u2026",
  unsplashError: "Unsplash error: {error}",
  downloadCoverFailed: "NaitFlow: could not download cover \u2014 {error}",
  saveCoverFailed: "NaitFlow: could not save cover \u2014 {error}",
  loadCoverFailed: "NaitFlow: could not load cover \u2014 {error}",
  red: "Red",
  yellow: "Yellow",
  blue: "Blue",
  beige: "Beige",
  gradient: "Gradient {number}",
  pillarsOfCreation: "Pillars of Creation",
  saturn: "Saturn",
  earthrise: "Earthrise \u2014 Apollo 8",
  nightSlsLaunch: "Night SLS launch",
  artemisSlsLaunch: "Artemis II \u2014 SLS launch"
};
var RU = {
  openPagesRibbon: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B NaitFlow",
  openPagesCommand: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0440\u0435\u0432\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
  chooseIconCommand: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  chooseCoverCommand: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  pluginConflict: "NaitFlow: \u0434\u043B\u044F \u0447\u0438\u0441\u0442\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u0442\u0430\u0440\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u0438\u043A\u043E\u043D\u043E\u043A/\u0431\u0430\u043D\u043D\u0435\u0440\u043E\u0432.",
  settingsIntro: "\u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0418\u043A\u043E\u043D\u043A\u0438, \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0438 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u0441\u0430\u043C\u0438\u0445 Markdown-\u0444\u0430\u0439\u043B\u043E\u0432.",
  mediaFolder: "\u041F\u0430\u043F\u043A\u0430 \u043C\u0435\u0434\u0438\u0430",
  mediaFolderDesc: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u0438 \u043E\u0431\u043B\u043E\u0436\u043A\u0438. \u041F\u0443\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 Vault.",
  unsplashKeyDesc: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. \u041D\u0443\u0436\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043E\u0431\u043B\u043E\u0436\u0435\u043A Unsplash. \u041A\u043B\u044E\u0447 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 Vault.",
  unsplashKeyPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 Access Key",
  openTreeOnStartup: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0434\u0435\u0440\u0435\u0432\u043E NaitFlow \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435",
  importData: "\u0418\u043C\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",
  importFormats: "Notion (HTML), Notion (MD), Buildin AI (MD)",
  importFormatsDesc: "\u0418\u043C\u043F\u043E\u0440\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B, \u0441\u0441\u044B\u043B\u043E\u043A \u0438 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438\u0437 ZIP-\u0430\u0440\u0445\u0438\u0432\u0430.",
  importZip: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ZIP",
  importChooseArchive: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ZIP-\u0430\u0440\u0445\u0438\u0432 \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430",
  importReading: "NaitFlow: \u0447\u0442\u0435\u043D\u0438\u0435 \u0430\u0440\u0445\u0438\u0432\u0430\u2026",
  importPages: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  importAttachments: "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
  importRenamed: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u043E \u0434\u0443\u0431\u043B\u0435\u0439",
  importBrokenLinks: "\u041D\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",
  importDestination: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u043F\u043E\u0440\u0442\u0430",
  importStart: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  importing: "\u0418\u043C\u043F\u043E\u0440\u0442\u2026",
  importVisualMissing: "\u0418\u043A\u043E\u043D\u043A\u0438 \u0438 \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u044D\u0442\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430.",
  importDuplicatesWarning: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0442 \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0439 \u0441\u0443\u0444\u0444\u0438\u043A\u0441: {count}.",
  importBrokenLinksWarning: "\u0421\u0441\u044B\u043B\u043A\u0438 \u0432\u0435\u0434\u0443\u0442 \u043D\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432\u0435 \u0444\u0430\u0439\u043B\u044B: {count}.",
  importRemoteCovers: "\u041E\u0431\u043B\u043E\u0436\u043A\u0438 Notion \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B \u043A\u0430\u043A \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438: {count}.",
  importComplete: "\u0418\u043C\u043F\u043E\u0440\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D",
  importCompleteSummary: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446: {pages}; \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439: {attachments}.",
  importUnknownFormat: "NaitFlow: \u044D\u0442\u043E\u0442 ZIP \u043D\u0435 \u043F\u043E\u0445\u043E\u0436 \u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u044D\u043A\u0441\u043F\u043E\u0440\u0442 Notion \u0438\u043B\u0438 Buildin AI.",
  importNoPages: "NaitFlow: \u0432 \u0430\u0440\u0445\u0438\u0432\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446.",
  importDestinationEmpty: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432\u043D\u0443\u0442\u0440\u0438 Vault.",
  importDestinationExists: "\u041F\u0430\u043F\u043A\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u0438\u043C\u044F.",
  importFailed: "NaitFlow: \u0438\u043C\u043F\u043E\u0440\u0442 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0430\u0440\u0445\u0438\u0432 \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0451\u043D.",
  close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  untitled: "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",
  pagesView: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B NaitFlow",
  pages: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  newPage: "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  createFirstPage: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  collapse: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
  expand: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
  pageMenu: "\u041C\u0435\u043D\u044E",
  nestedPage: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  addSubpage: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  noFreeFilename: "\u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430",
  createPageFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u2014 {error}",
  change: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
  position: "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
  changeIcon: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443",
  addIcon: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443",
  addCover: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443",
  save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  dragPhoto: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u043E\u0442\u043E",
  emoji: "\u042D\u043C\u043E\u0434\u0437\u0438",
  icons: "\u0418\u043A\u043E\u043D\u043A\u0438",
  upload: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
  link: "\u0421\u0441\u044B\u043B\u043A\u0430",
  gallery: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
  clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
  searchEmoji: "\u041F\u043E\u0438\u0441\u043A \u044D\u043C\u043E\u0434\u0437\u0438 \u2014 smile, server, rocket\u2026",
  searchIcons: "\u041F\u043E\u0438\u0441\u043A \u0438\u043A\u043E\u043D\u043E\u043A \u2014 server, code, docker\u2026",
  recent: "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",
  nothingFound: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
  uploadIconHint: "PNG, JPG, WebP, GIF \u0438\u043B\u0438 SVG. \u0424\u0430\u0439\u043B \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D \u0432\u043D\u0443\u0442\u0440\u044C Vault.",
  chooseImage: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  imageUrlPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u2026",
  set: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
  directImageHint: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u043F\u0440\u044F\u043C\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.",
  saveIconFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443 \u2014 {error}",
  httpOnly: "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E HTTP/HTTPS \u0441\u0441\u044B\u043B\u043A\u0438",
  notImage: "\u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435 \u0444\u0430\u0439\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
  downloadIconFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443 \u2014 {error}",
  people: "\u041B\u044E\u0434\u0438",
  animals: "\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
  food: "\u0415\u0434\u0430",
  activity: "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
  places: "\u041C\u0435\u0441\u0442\u0430",
  objects: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B",
  symbols: "\u0421\u0438\u043C\u0432\u043E\u043B\u044B",
  flags: "\u0424\u043B\u0430\u0433\u0438",
  myCovers: "\u041C\u043E\u0438 \u043E\u0431\u043B\u043E\u0436\u043A\u0438",
  colorGradient: "\u0426\u0432\u0435\u0442 \u0438 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442",
  pluginFolderMissing: "\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
  builtInCoverFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u043B\u043E\u0436\u043A\u0443 \u2014 {error}",
  uploadCoverHint: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u2014 \u043E\u0442 1500\xD7600. \u0424\u0430\u0439\u043B \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D \u0432\u043D\u0443\u0442\u0440\u044C Vault.",
  webImageHint: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u043B\u044E\u0431\u044B\u043C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C \u0438\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430.",
  unsplashKeyRequired: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 Unsplash Access Key \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 NaitFlow. \u0411\u0435\u0437 \u043A\u043B\u044E\u0447\u0430 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E.",
  searchImages: "\u041F\u043E\u0438\u0441\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439\u2026",
  photoBy: "\u0424\u043E\u0442\u043E: {name}",
  loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",
  unsplashError: "\u041E\u0448\u0438\u0431\u043A\u0430 Unsplash: {error}",
  downloadCoverFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443 \u2014 {error}",
  saveCoverFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443 \u2014 {error}",
  loadCoverFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443 \u2014 {error}",
  red: "\u041A\u0440\u0430\u0441\u043D\u044B\u0439",
  yellow: "\u0416\u0451\u043B\u0442\u044B\u0439",
  blue: "\u0421\u0438\u043D\u0438\u0439",
  beige: "\u0411\u0435\u0436\u0435\u0432\u044B\u0439",
  gradient: "\u0413\u0440\u0430\u0434\u0438\u0435\u043D\u0442 {number}",
  pillarsOfCreation: "\u0421\u0442\u043E\u043B\u043F\u044B \u0422\u0432\u043E\u0440\u0435\u043D\u0438\u044F",
  saturn: "\u0421\u0430\u0442\u0443\u0440\u043D",
  earthrise: "\u0412\u043E\u0441\u0445\u043E\u0434 \u0417\u0435\u043C\u043B\u0438 \u2014 Apollo 8",
  nightSlsLaunch: "\u041D\u043E\u0447\u043D\u043E\u0439 \u0437\u0430\u043F\u0443\u0441\u043A SLS",
  artemisSlsLaunch: "Artemis II \u2014 \u0441\u0442\u0430\u0440\u0442 SLS",
  openInNewTab: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
  openInRightPane: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0441\u043F\u0440\u0430\u0432\u0430",
  openInNewWindow: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435",
  renamePage: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
  renamePagePrompt: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  renamePageFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u2014 {error}",
  movePage: "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u2026",
  movePageSearch: "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u2026",
  movePagePlaceholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u2026",
  movePageFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u2014 {error}",
  movePageInvalid: "\u041D\u0435\u043B\u044C\u0437\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u0435\u0451 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043F\u0430\u043F\u043A\u0443.",
  copyPath: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0443\u0442\u044C",
  showInExplorer: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0435",
  showInExplorerFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A.",
  duplicatePage: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E",
  duplicatePageFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E \u2014 {error}",
  deletePage: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  deletePageFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u2014 {error}",
  trash: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
  trashSearch: "\u041F\u043E\u0438\u0441\u043A \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435",
  trashPage: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  trashDeletedAt: "\u041A\u043E\u0433\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u043E",
  trashEmpty: "\u041D\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
  trashClearAll: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E",
  trashRestore: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
  trashRestoreExists: "NaitFlow: \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E.",
  trashRestoreFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u2014 {error}",
  trashDeleteForever: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
  trashDeleteForeverTitle: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C {title} \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430?",
  ok: "\u041E\u041A",
  trashDeleteForeverPrompt: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \xAB{title}\xBB \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.",
  trashDeleteFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 \u2014 {error}",
  trashLocalUnavailable: "NaitFlow: \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0432\u043D\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u0440\u0437\u0438\u043D\u044B Vault, \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0451 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u043B\u044C\u0437\u044F.",
  copySuffix: "\u043A\u043E\u043F\u0438\u044F",
  addBookmark: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
  bookmarkUnavailable: "NaitFlow: \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0433\u0438\u043D \xAB\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438\xBB, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
  movePageSuggested: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  movePageVaultRoot: "\u041A\u043E\u0440\u0435\u043D\u044C Vault",
  copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
  copyFailed: "NaitFlow: \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430.",
  cancel: "\u041E\u0442\u043C\u0435\u043D\u0430"
};
function localeCode() {
  return (0, import_obsidian.getLanguage)().toLocaleLowerCase().startsWith("ru") ? "ru" : "en";
}
function t(key, params = {}) {
  const template = (localeCode() === "ru" ? RU : EN)[key];
  return template.replace(/\{(\w+)\}/g, (match, name) => String(params[name] ?? match));
}

// src/model.ts
var FIELDS = {
  icon: "naitflow-icon",
  cover: "naitflow-cover",
  coverY: "naitflow-cover-y",
  parent: "naitflow-parent"
};
function parseIcon(raw) {
  if (typeof raw !== "string") return null;
  const split = raw.indexOf(":");
  if (split < 1) return { kind: "emoji", value: raw };
  const kind = raw.slice(0, split);
  if (!["emoji", "lucide", "image"].includes(kind)) return null;
  return { kind, value: raw.slice(split + 1) };
}
function readPageMeta(app, file) {
  const fm = app.metadataCache.getFileCache(file)?.frontmatter ?? {};
  const y = Number(fm[FIELDS.coverY]);
  return {
    icon: typeof fm[FIELDS.icon] === "string" ? fm[FIELDS.icon] : void 0,
    cover: typeof fm[FIELDS.cover] === "string" ? unwrapLink(fm[FIELDS.cover]) : void 0,
    coverY: Number.isFinite(y) ? Math.max(0, Math.min(100, y)) : 50,
    parent: typeof fm[FIELDS.parent] === "string" ? unwrapLink(fm[FIELDS.parent]) : void 0
  };
}
function unwrapLink(value) {
  const match = value.match(/^\[\[(.*?)(?:\|.*?)?\]\]$/);
  return match?.[1] ?? value;
}
async function setField(app, file, field, value) {
  await app.fileManager.processFrontMatter(file, (fm) => {
    if (value === null || value === "") delete fm[field];
    else fm[field] = value;
  });
}
async function ensureFolder(app, path) {
  const normalized = (0, import_obsidian2.normalizePath)(path);
  if (!normalized || app.vault.getAbstractFileByPath(normalized)) return;
  const parts = normalized.split("/");
  let current = "";
  for (const part of parts) {
    current = (0, import_obsidian2.normalizePath)(current ? `${current}/${part}` : part);
    const existing = app.vault.getAbstractFileByPath(current);
    if (!existing) await app.vault.createFolder(current);
    else if (!(existing instanceof import_obsidian2.TFolder)) throw new Error(`${current}: ${t("pluginFolderMissing")}`);
  }
}
function uniqueAssetPath(app, folder, baseName, extension2) {
  const safe = baseName.replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/^-+|-+$/g, "") || "image";
  const ext = extension2.replace(/^\./, "").toLowerCase() || "png";
  let path = (0, import_obsidian2.normalizePath)(`${folder}/${safe}.${ext}`);
  let index = 2;
  while (app.vault.getAbstractFileByPath(path)) path = (0, import_obsidian2.normalizePath)(`${folder}/${safe}-${index++}.${ext}`);
  return path;
}
function assetUrl(app, path) {
  const file = app.vault.getAbstractFileByPath((0, import_obsidian2.normalizePath)(path));
  return file instanceof import_obsidian2.TFile ? app.vault.getResourcePath(file) : path;
}
function displayName(file) {
  return file.basename || t("untitled");
}
function pageFolderPath(filePath) {
  return (0, import_obsidian2.normalizePath)(filePath.replace(/\.md$/i, ""));
}

// node_modules/@emoji-mart/data/sets/15/native.json
var native_default = { categories: [{ id: "people", emojis: ["grinning", "smiley", "smile", "grin", "laughing", "sweat_smile", "rolling_on_the_floor_laughing", "joy", "slightly_smiling_face", "upside_down_face", "melting_face", "wink", "blush", "innocent", "smiling_face_with_3_hearts", "heart_eyes", "star-struck", "kissing_heart", "kissing", "relaxed", "kissing_closed_eyes", "kissing_smiling_eyes", "smiling_face_with_tear", "yum", "stuck_out_tongue", "stuck_out_tongue_winking_eye", "zany_face", "stuck_out_tongue_closed_eyes", "money_mouth_face", "hugging_face", "face_with_hand_over_mouth", "face_with_open_eyes_and_hand_over_mouth", "face_with_peeking_eye", "shushing_face", "thinking_face", "saluting_face", "zipper_mouth_face", "face_with_raised_eyebrow", "neutral_face", "expressionless", "no_mouth", "dotted_line_face", "face_in_clouds", "smirk", "unamused", "face_with_rolling_eyes", "grimacing", "face_exhaling", "lying_face", "shaking_face", "relieved", "pensive", "sleepy", "drooling_face", "sleeping", "mask", "face_with_thermometer", "face_with_head_bandage", "nauseated_face", "face_vomiting", "sneezing_face", "hot_face", "cold_face", "woozy_face", "dizzy_face", "face_with_spiral_eyes", "exploding_head", "face_with_cowboy_hat", "partying_face", "disguised_face", "sunglasses", "nerd_face", "face_with_monocle", "confused", "face_with_diagonal_mouth", "worried", "slightly_frowning_face", "white_frowning_face", "open_mouth", "hushed", "astonished", "flushed", "pleading_face", "face_holding_back_tears", "frowning", "anguished", "fearful", "cold_sweat", "disappointed_relieved", "cry", "sob", "scream", "confounded", "persevere", "disappointed", "sweat", "weary", "tired_face", "yawning_face", "triumph", "rage", "angry", "face_with_symbols_on_mouth", "smiling_imp", "imp", "skull", "skull_and_crossbones", "hankey", "clown_face", "japanese_ogre", "japanese_goblin", "ghost", "alien", "space_invader", "wave", "raised_back_of_hand", "raised_hand_with_fingers_splayed", "hand", "spock-hand", "rightwards_hand", "leftwards_hand", "palm_down_hand", "palm_up_hand", "leftwards_pushing_hand", "rightwards_pushing_hand", "ok_hand", "pinched_fingers", "pinching_hand", "v", "crossed_fingers", "hand_with_index_finger_and_thumb_crossed", "i_love_you_hand_sign", "the_horns", "call_me_hand", "point_left", "point_right", "point_up_2", "middle_finger", "point_down", "point_up", "index_pointing_at_the_viewer", "+1", "-1", "fist", "facepunch", "left-facing_fist", "right-facing_fist", "clap", "raised_hands", "heart_hands", "open_hands", "palms_up_together", "handshake", "pray", "writing_hand", "nail_care", "selfie", "muscle", "mechanical_arm", "mechanical_leg", "leg", "foot", "ear", "ear_with_hearing_aid", "nose", "brain", "anatomical_heart", "lungs", "tooth", "bone", "eyes", "eye", "tongue", "lips", "biting_lip", "baby", "child", "boy", "girl", "adult", "person_with_blond_hair", "man", "bearded_person", "man_with_beard", "woman_with_beard", "red_haired_man", "curly_haired_man", "white_haired_man", "bald_man", "woman", "red_haired_woman", "red_haired_person", "curly_haired_woman", "curly_haired_person", "white_haired_woman", "white_haired_person", "bald_woman", "bald_person", "blond-haired-woman", "blond-haired-man", "older_adult", "older_man", "older_woman", "person_frowning", "man-frowning", "woman-frowning", "person_with_pouting_face", "man-pouting", "woman-pouting", "no_good", "man-gesturing-no", "woman-gesturing-no", "ok_woman", "man-gesturing-ok", "woman-gesturing-ok", "information_desk_person", "man-tipping-hand", "woman-tipping-hand", "raising_hand", "man-raising-hand", "woman-raising-hand", "deaf_person", "deaf_man", "deaf_woman", "bow", "man-bowing", "woman-bowing", "face_palm", "man-facepalming", "woman-facepalming", "shrug", "man-shrugging", "woman-shrugging", "health_worker", "male-doctor", "female-doctor", "student", "male-student", "female-student", "teacher", "male-teacher", "female-teacher", "judge", "male-judge", "female-judge", "farmer", "male-farmer", "female-farmer", "cook", "male-cook", "female-cook", "mechanic", "male-mechanic", "female-mechanic", "factory_worker", "male-factory-worker", "female-factory-worker", "office_worker", "male-office-worker", "female-office-worker", "scientist", "male-scientist", "female-scientist", "technologist", "male-technologist", "female-technologist", "singer", "male-singer", "female-singer", "artist", "male-artist", "female-artist", "pilot", "male-pilot", "female-pilot", "astronaut", "male-astronaut", "female-astronaut", "firefighter", "male-firefighter", "female-firefighter", "cop", "male-police-officer", "female-police-officer", "sleuth_or_spy", "male-detective", "female-detective", "guardsman", "male-guard", "female-guard", "ninja", "construction_worker", "male-construction-worker", "female-construction-worker", "person_with_crown", "prince", "princess", "man_with_turban", "man-wearing-turban", "woman-wearing-turban", "man_with_gua_pi_mao", "person_with_headscarf", "person_in_tuxedo", "man_in_tuxedo", "woman_in_tuxedo", "bride_with_veil", "man_with_veil", "woman_with_veil", "pregnant_woman", "pregnant_man", "pregnant_person", "breast-feeding", "woman_feeding_baby", "man_feeding_baby", "person_feeding_baby", "angel", "santa", "mrs_claus", "mx_claus", "superhero", "male_superhero", "female_superhero", "supervillain", "male_supervillain", "female_supervillain", "mage", "male_mage", "female_mage", "fairy", "male_fairy", "female_fairy", "vampire", "male_vampire", "female_vampire", "merperson", "merman", "mermaid", "elf", "male_elf", "female_elf", "genie", "male_genie", "female_genie", "zombie", "male_zombie", "female_zombie", "troll", "massage", "man-getting-massage", "woman-getting-massage", "haircut", "man-getting-haircut", "woman-getting-haircut", "walking", "man-walking", "woman-walking", "standing_person", "man_standing", "woman_standing", "kneeling_person", "man_kneeling", "woman_kneeling", "person_with_probing_cane", "man_with_probing_cane", "woman_with_probing_cane", "person_in_motorized_wheelchair", "man_in_motorized_wheelchair", "woman_in_motorized_wheelchair", "person_in_manual_wheelchair", "man_in_manual_wheelchair", "woman_in_manual_wheelchair", "runner", "man-running", "woman-running", "dancer", "man_dancing", "man_in_business_suit_levitating", "dancers", "men-with-bunny-ears-partying", "women-with-bunny-ears-partying", "person_in_steamy_room", "man_in_steamy_room", "woman_in_steamy_room", "person_climbing", "man_climbing", "woman_climbing", "fencer", "horse_racing", "skier", "snowboarder", "golfer", "man-golfing", "woman-golfing", "surfer", "man-surfing", "woman-surfing", "rowboat", "man-rowing-boat", "woman-rowing-boat", "swimmer", "man-swimming", "woman-swimming", "person_with_ball", "man-bouncing-ball", "woman-bouncing-ball", "weight_lifter", "man-lifting-weights", "woman-lifting-weights", "bicyclist", "man-biking", "woman-biking", "mountain_bicyclist", "man-mountain-biking", "woman-mountain-biking", "person_doing_cartwheel", "man-cartwheeling", "woman-cartwheeling", "wrestlers", "man-wrestling", "woman-wrestling", "water_polo", "man-playing-water-polo", "woman-playing-water-polo", "handball", "man-playing-handball", "woman-playing-handball", "juggling", "man-juggling", "woman-juggling", "person_in_lotus_position", "man_in_lotus_position", "woman_in_lotus_position", "bath", "sleeping_accommodation", "people_holding_hands", "two_women_holding_hands", "man_and_woman_holding_hands", "two_men_holding_hands", "couplekiss", "woman-kiss-man", "man-kiss-man", "woman-kiss-woman", "couple_with_heart", "woman-heart-man", "man-heart-man", "woman-heart-woman", "family", "man-woman-boy", "man-woman-girl", "man-woman-girl-boy", "man-woman-boy-boy", "man-woman-girl-girl", "man-man-boy", "man-man-girl", "man-man-girl-boy", "man-man-boy-boy", "man-man-girl-girl", "woman-woman-boy", "woman-woman-girl", "woman-woman-girl-boy", "woman-woman-boy-boy", "woman-woman-girl-girl", "man-boy", "man-boy-boy", "man-girl", "man-girl-boy", "man-girl-girl", "woman-boy", "woman-boy-boy", "woman-girl", "woman-girl-boy", "woman-girl-girl", "speaking_head_in_silhouette", "bust_in_silhouette", "busts_in_silhouette", "people_hugging", "footprints", "robot_face", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat", "smirk_cat", "kissing_cat", "scream_cat", "crying_cat_face", "pouting_cat", "see_no_evil", "hear_no_evil", "speak_no_evil", "love_letter", "cupid", "gift_heart", "sparkling_heart", "heartpulse", "heartbeat", "revolving_hearts", "two_hearts", "heart_decoration", "heavy_heart_exclamation_mark_ornament", "broken_heart", "heart_on_fire", "mending_heart", "heart", "pink_heart", "orange_heart", "yellow_heart", "green_heart", "blue_heart", "light_blue_heart", "purple_heart", "brown_heart", "black_heart", "grey_heart", "white_heart", "kiss", "100", "anger", "boom", "dizzy", "sweat_drops", "dash", "hole", "speech_balloon", "eye-in-speech-bubble", "left_speech_bubble", "right_anger_bubble", "thought_balloon", "zzz"] }, { id: "nature", emojis: ["monkey_face", "monkey", "gorilla", "orangutan", "dog", "dog2", "guide_dog", "service_dog", "poodle", "wolf", "fox_face", "raccoon", "cat", "cat2", "black_cat", "lion_face", "tiger", "tiger2", "leopard", "horse", "moose", "donkey", "racehorse", "unicorn_face", "zebra_face", "deer", "bison", "cow", "ox", "water_buffalo", "cow2", "pig", "pig2", "boar", "pig_nose", "ram", "sheep", "goat", "dromedary_camel", "camel", "llama", "giraffe_face", "elephant", "mammoth", "rhinoceros", "hippopotamus", "mouse", "mouse2", "rat", "hamster", "rabbit", "rabbit2", "chipmunk", "beaver", "hedgehog", "bat", "bear", "polar_bear", "koala", "panda_face", "sloth", "otter", "skunk", "kangaroo", "badger", "feet", "turkey", "chicken", "rooster", "hatching_chick", "baby_chick", "hatched_chick", "bird", "penguin", "dove_of_peace", "eagle", "duck", "swan", "owl", "dodo", "feather", "flamingo", "peacock", "parrot", "wing", "black_bird", "goose", "frog", "crocodile", "turtle", "lizard", "snake", "dragon_face", "dragon", "sauropod", "t-rex", "whale", "whale2", "dolphin", "seal", "fish", "tropical_fish", "blowfish", "shark", "octopus", "shell", "coral", "jellyfish", "snail", "butterfly", "bug", "ant", "bee", "beetle", "ladybug", "cricket", "cockroach", "spider", "spider_web", "scorpion", "mosquito", "fly", "worm", "microbe", "bouquet", "cherry_blossom", "white_flower", "lotus", "rosette", "rose", "wilted_flower", "hibiscus", "sunflower", "blossom", "tulip", "hyacinth", "seedling", "potted_plant", "evergreen_tree", "deciduous_tree", "palm_tree", "cactus", "ear_of_rice", "herb", "shamrock", "four_leaf_clover", "maple_leaf", "fallen_leaf", "leaves", "empty_nest", "nest_with_eggs", "mushroom"] }, { id: "foods", emojis: ["grapes", "melon", "watermelon", "tangerine", "lemon", "banana", "pineapple", "mango", "apple", "green_apple", "pear", "peach", "cherries", "strawberry", "blueberries", "kiwifruit", "tomato", "olive", "coconut", "avocado", "eggplant", "potato", "carrot", "corn", "hot_pepper", "bell_pepper", "cucumber", "leafy_green", "broccoli", "garlic", "onion", "peanuts", "beans", "chestnut", "ginger_root", "pea_pod", "bread", "croissant", "baguette_bread", "flatbread", "pretzel", "bagel", "pancakes", "waffle", "cheese_wedge", "meat_on_bone", "poultry_leg", "cut_of_meat", "bacon", "hamburger", "fries", "pizza", "hotdog", "sandwich", "taco", "burrito", "tamale", "stuffed_flatbread", "falafel", "egg", "fried_egg", "shallow_pan_of_food", "stew", "fondue", "bowl_with_spoon", "green_salad", "popcorn", "butter", "salt", "canned_food", "bento", "rice_cracker", "rice_ball", "rice", "curry", "ramen", "spaghetti", "sweet_potato", "oden", "sushi", "fried_shrimp", "fish_cake", "moon_cake", "dango", "dumpling", "fortune_cookie", "takeout_box", "crab", "lobster", "shrimp", "squid", "oyster", "icecream", "shaved_ice", "ice_cream", "doughnut", "cookie", "birthday", "cake", "cupcake", "pie", "chocolate_bar", "candy", "lollipop", "custard", "honey_pot", "baby_bottle", "glass_of_milk", "coffee", "teapot", "tea", "sake", "champagne", "wine_glass", "cocktail", "tropical_drink", "beer", "beers", "clinking_glasses", "tumbler_glass", "pouring_liquid", "cup_with_straw", "bubble_tea", "beverage_box", "mate_drink", "ice_cube", "chopsticks", "knife_fork_plate", "fork_and_knife", "spoon", "hocho", "jar", "amphora"] }, { id: "activity", emojis: ["jack_o_lantern", "christmas_tree", "fireworks", "sparkler", "firecracker", "sparkles", "balloon", "tada", "confetti_ball", "tanabata_tree", "bamboo", "dolls", "flags", "wind_chime", "rice_scene", "red_envelope", "ribbon", "gift", "reminder_ribbon", "admission_tickets", "ticket", "medal", "trophy", "sports_medal", "first_place_medal", "second_place_medal", "third_place_medal", "soccer", "baseball", "softball", "basketball", "volleyball", "football", "rugby_football", "tennis", "flying_disc", "bowling", "cricket_bat_and_ball", "field_hockey_stick_and_ball", "ice_hockey_stick_and_puck", "lacrosse", "table_tennis_paddle_and_ball", "badminton_racquet_and_shuttlecock", "boxing_glove", "martial_arts_uniform", "goal_net", "golf", "ice_skate", "fishing_pole_and_fish", "diving_mask", "running_shirt_with_sash", "ski", "sled", "curling_stone", "dart", "yo-yo", "kite", "gun", "8ball", "crystal_ball", "magic_wand", "video_game", "joystick", "slot_machine", "game_die", "jigsaw", "teddy_bear", "pinata", "mirror_ball", "nesting_dolls", "spades", "hearts", "diamonds", "clubs", "chess_pawn", "black_joker", "mahjong", "flower_playing_cards", "performing_arts", "frame_with_picture", "art", "thread", "sewing_needle", "yarn", "knot"] }, { id: "places", emojis: ["earth_africa", "earth_americas", "earth_asia", "globe_with_meridians", "world_map", "japan", "compass", "snow_capped_mountain", "mountain", "volcano", "mount_fuji", "camping", "beach_with_umbrella", "desert", "desert_island", "national_park", "stadium", "classical_building", "building_construction", "bricks", "rock", "wood", "hut", "house_buildings", "derelict_house_building", "house", "house_with_garden", "office", "post_office", "european_post_office", "hospital", "bank", "hotel", "love_hotel", "convenience_store", "school", "department_store", "factory", "japanese_castle", "european_castle", "wedding", "tokyo_tower", "statue_of_liberty", "church", "mosque", "hindu_temple", "synagogue", "shinto_shrine", "kaaba", "fountain", "tent", "foggy", "night_with_stars", "cityscape", "sunrise_over_mountains", "sunrise", "city_sunset", "city_sunrise", "bridge_at_night", "hotsprings", "carousel_horse", "playground_slide", "ferris_wheel", "roller_coaster", "barber", "circus_tent", "steam_locomotive", "railway_car", "bullettrain_side", "bullettrain_front", "train2", "metro", "light_rail", "station", "tram", "monorail", "mountain_railway", "train", "bus", "oncoming_bus", "trolleybus", "minibus", "ambulance", "fire_engine", "police_car", "oncoming_police_car", "taxi", "oncoming_taxi", "car", "oncoming_automobile", "blue_car", "pickup_truck", "truck", "articulated_lorry", "tractor", "racing_car", "racing_motorcycle", "motor_scooter", "manual_wheelchair", "motorized_wheelchair", "auto_rickshaw", "bike", "scooter", "skateboard", "roller_skate", "busstop", "motorway", "railway_track", "oil_drum", "fuelpump", "wheel", "rotating_light", "traffic_light", "vertical_traffic_light", "octagonal_sign", "construction", "anchor", "ring_buoy", "boat", "canoe", "speedboat", "passenger_ship", "ferry", "motor_boat", "ship", "airplane", "small_airplane", "airplane_departure", "airplane_arriving", "parachute", "seat", "helicopter", "suspension_railway", "mountain_cableway", "aerial_tramway", "satellite", "rocket", "flying_saucer", "bellhop_bell", "luggage", "hourglass", "hourglass_flowing_sand", "watch", "alarm_clock", "stopwatch", "timer_clock", "mantelpiece_clock", "clock12", "clock1230", "clock1", "clock130", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "clock10", "clock1030", "clock11", "clock1130", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "moon", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "crescent_moon", "new_moon_with_face", "first_quarter_moon_with_face", "last_quarter_moon_with_face", "thermometer", "sunny", "full_moon_with_face", "sun_with_face", "ringed_planet", "star", "star2", "stars", "milky_way", "cloud", "partly_sunny", "thunder_cloud_and_rain", "mostly_sunny", "barely_sunny", "partly_sunny_rain", "rain_cloud", "snow_cloud", "lightning", "tornado", "fog", "wind_blowing_face", "cyclone", "rainbow", "closed_umbrella", "umbrella", "umbrella_with_rain_drops", "umbrella_on_ground", "zap", "snowflake", "snowman", "snowman_without_snow", "comet", "fire", "droplet", "ocean"] }, { id: "objects", emojis: ["eyeglasses", "dark_sunglasses", "goggles", "lab_coat", "safety_vest", "necktie", "shirt", "jeans", "scarf", "gloves", "coat", "socks", "dress", "kimono", "sari", "one-piece_swimsuit", "briefs", "shorts", "bikini", "womans_clothes", "folding_hand_fan", "purse", "handbag", "pouch", "shopping_bags", "school_satchel", "thong_sandal", "mans_shoe", "athletic_shoe", "hiking_boot", "womans_flat_shoe", "high_heel", "sandal", "ballet_shoes", "boot", "hair_pick", "crown", "womans_hat", "tophat", "mortar_board", "billed_cap", "military_helmet", "helmet_with_white_cross", "prayer_beads", "lipstick", "ring", "gem", "mute", "speaker", "sound", "loud_sound", "loudspeaker", "mega", "postal_horn", "bell", "no_bell", "musical_score", "musical_note", "notes", "studio_microphone", "level_slider", "control_knobs", "microphone", "headphones", "radio", "saxophone", "accordion", "guitar", "musical_keyboard", "trumpet", "violin", "banjo", "drum_with_drumsticks", "long_drum", "maracas", "flute", "iphone", "calling", "phone", "telephone_receiver", "pager", "fax", "battery", "low_battery", "electric_plug", "computer", "desktop_computer", "printer", "keyboard", "three_button_mouse", "trackball", "minidisc", "floppy_disk", "cd", "dvd", "abacus", "movie_camera", "film_frames", "film_projector", "clapper", "tv", "camera", "camera_with_flash", "video_camera", "vhs", "mag", "mag_right", "candle", "bulb", "flashlight", "izakaya_lantern", "diya_lamp", "notebook_with_decorative_cover", "closed_book", "book", "green_book", "blue_book", "orange_book", "books", "notebook", "ledger", "page_with_curl", "scroll", "page_facing_up", "newspaper", "rolled_up_newspaper", "bookmark_tabs", "bookmark", "label", "moneybag", "coin", "yen", "dollar", "euro", "pound", "money_with_wings", "credit_card", "receipt", "chart", "email", "e-mail", "incoming_envelope", "envelope_with_arrow", "outbox_tray", "inbox_tray", "package", "mailbox", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "postbox", "ballot_box_with_ballot", "pencil2", "black_nib", "lower_left_fountain_pen", "lower_left_ballpoint_pen", "lower_left_paintbrush", "lower_left_crayon", "memo", "briefcase", "file_folder", "open_file_folder", "card_index_dividers", "date", "calendar", "spiral_note_pad", "spiral_calendar_pad", "card_index", "chart_with_upwards_trend", "chart_with_downwards_trend", "bar_chart", "clipboard", "pushpin", "round_pushpin", "paperclip", "linked_paperclips", "straight_ruler", "triangular_ruler", "scissors", "card_file_box", "file_cabinet", "wastebasket", "lock", "unlock", "lock_with_ink_pen", "closed_lock_with_key", "key", "old_key", "hammer", "axe", "pick", "hammer_and_pick", "hammer_and_wrench", "dagger_knife", "crossed_swords", "bomb", "boomerang", "bow_and_arrow", "shield", "carpentry_saw", "wrench", "screwdriver", "nut_and_bolt", "gear", "compression", "scales", "probing_cane", "link", "chains", "hook", "toolbox", "magnet", "ladder", "alembic", "test_tube", "petri_dish", "dna", "microscope", "telescope", "satellite_antenna", "syringe", "drop_of_blood", "pill", "adhesive_bandage", "crutch", "stethoscope", "x-ray", "door", "elevator", "mirror", "window", "bed", "couch_and_lamp", "chair", "toilet", "plunger", "shower", "bathtub", "mouse_trap", "razor", "lotion_bottle", "safety_pin", "broom", "basket", "roll_of_paper", "bucket", "soap", "bubbles", "toothbrush", "sponge", "fire_extinguisher", "shopping_trolley", "smoking", "coffin", "headstone", "funeral_urn", "nazar_amulet", "hamsa", "moyai", "placard", "identification_card"] }, { id: "symbols", emojis: ["atm", "put_litter_in_its_place", "potable_water", "wheelchair", "mens", "womens", "restroom", "baby_symbol", "wc", "passport_control", "customs", "baggage_claim", "left_luggage", "warning", "children_crossing", "no_entry", "no_entry_sign", "no_bicycles", "no_smoking", "do_not_litter", "non-potable_water", "no_pedestrians", "no_mobile_phones", "underage", "radioactive_sign", "biohazard_sign", "arrow_up", "arrow_upper_right", "arrow_right", "arrow_lower_right", "arrow_down", "arrow_lower_left", "arrow_left", "arrow_upper_left", "arrow_up_down", "left_right_arrow", "leftwards_arrow_with_hook", "arrow_right_hook", "arrow_heading_up", "arrow_heading_down", "arrows_clockwise", "arrows_counterclockwise", "back", "end", "on", "soon", "top", "place_of_worship", "atom_symbol", "om_symbol", "star_of_david", "wheel_of_dharma", "yin_yang", "latin_cross", "orthodox_cross", "star_and_crescent", "peace_symbol", "menorah_with_nine_branches", "six_pointed_star", "khanda", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus", "twisted_rightwards_arrows", "repeat", "repeat_one", "arrow_forward", "fast_forward", "black_right_pointing_double_triangle_with_vertical_bar", "black_right_pointing_triangle_with_double_vertical_bar", "arrow_backward", "rewind", "black_left_pointing_double_triangle_with_vertical_bar", "arrow_up_small", "arrow_double_up", "arrow_down_small", "arrow_double_down", "double_vertical_bar", "black_square_for_stop", "black_circle_for_record", "eject", "cinema", "low_brightness", "high_brightness", "signal_strength", "wireless", "vibration_mode", "mobile_phone_off", "female_sign", "male_sign", "transgender_symbol", "heavy_multiplication_x", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "heavy_equals_sign", "infinity", "bangbang", "interrobang", "question", "grey_question", "grey_exclamation", "exclamation", "wavy_dash", "currency_exchange", "heavy_dollar_sign", "medical_symbol", "recycle", "fleur_de_lis", "trident", "name_badge", "beginner", "o", "white_check_mark", "ballot_box_with_check", "heavy_check_mark", "x", "negative_squared_cross_mark", "curly_loop", "loop", "part_alternation_mark", "eight_spoked_asterisk", "eight_pointed_black_star", "sparkle", "copyright", "registered", "tm", "hash", "keycap_star", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "capital_abcd", "abcd", "1234", "symbols", "abc", "a", "ab", "b", "cl", "cool", "free", "information_source", "id", "m", "new", "ng", "o2", "ok", "parking", "sos", "up", "vs", "koko", "sa", "u6708", "u6709", "u6307", "ideograph_advantage", "u5272", "u7121", "u7981", "accept", "u7533", "u5408", "u7a7a", "congratulations", "secret", "u55b6", "u6e80", "red_circle", "large_orange_circle", "large_yellow_circle", "large_green_circle", "large_blue_circle", "large_purple_circle", "large_brown_circle", "black_circle", "white_circle", "large_red_square", "large_orange_square", "large_yellow_square", "large_green_square", "large_blue_square", "large_purple_square", "large_brown_square", "black_large_square", "white_large_square", "black_medium_square", "white_medium_square", "black_medium_small_square", "white_medium_small_square", "black_small_square", "white_small_square", "large_orange_diamond", "large_blue_diamond", "small_orange_diamond", "small_blue_diamond", "small_red_triangle", "small_red_triangle_down", "diamond_shape_with_a_dot_inside", "radio_button", "white_square_button", "black_square_button"] }, { id: "flags", emojis: ["checkered_flag", "cn", "crossed_flags", "de", "es", "flag-ac", "flag-ad", "flag-ae", "flag-af", "flag-ag", "flag-ai", "flag-al", "flag-am", "flag-ao", "flag-aq", "flag-ar", "flag-as", "flag-at", "flag-au", "flag-aw", "flag-ax", "flag-az", "flag-ba", "flag-bb", "flag-bd", "flag-be", "flag-bf", "flag-bg", "flag-bh", "flag-bi", "flag-bj", "flag-bl", "flag-bm", "flag-bn", "flag-bo", "flag-bq", "flag-br", "flag-bs", "flag-bt", "flag-bv", "flag-bw", "flag-by", "flag-bz", "flag-ca", "flag-cc", "flag-cd", "flag-cf", "flag-cg", "flag-ch", "flag-ci", "flag-ck", "flag-cl", "flag-cm", "flag-co", "flag-cp", "flag-cr", "flag-cu", "flag-cv", "flag-cw", "flag-cx", "flag-cy", "flag-cz", "flag-dg", "flag-dj", "flag-dk", "flag-dm", "flag-do", "flag-dz", "flag-ea", "flag-ec", "flag-ee", "flag-eg", "flag-eh", "flag-england", "flag-er", "flag-et", "flag-eu", "flag-fi", "flag-fj", "flag-fk", "flag-fm", "flag-fo", "flag-ga", "flag-gd", "flag-ge", "flag-gf", "flag-gg", "flag-gh", "flag-gi", "flag-gl", "flag-gm", "flag-gn", "flag-gp", "flag-gq", "flag-gr", "flag-gs", "flag-gt", "flag-gu", "flag-gw", "flag-gy", "flag-hk", "flag-hm", "flag-hn", "flag-hr", "flag-ht", "flag-hu", "flag-ic", "flag-id", "flag-ie", "flag-il", "flag-im", "flag-in", "flag-io", "flag-iq", "flag-ir", "flag-is", "flag-je", "flag-jm", "flag-jo", "flag-ke", "flag-kg", "flag-kh", "flag-ki", "flag-km", "flag-kn", "flag-kp", "flag-kw", "flag-ky", "flag-kz", "flag-la", "flag-lb", "flag-lc", "flag-li", "flag-lk", "flag-lr", "flag-ls", "flag-lt", "flag-lu", "flag-lv", "flag-ly", "flag-ma", "flag-mc", "flag-md", "flag-me", "flag-mf", "flag-mg", "flag-mh", "flag-mk", "flag-ml", "flag-mm", "flag-mn", "flag-mo", "flag-mp", "flag-mq", "flag-mr", "flag-ms", "flag-mt", "flag-mu", "flag-mv", "flag-mw", "flag-mx", "flag-my", "flag-mz", "flag-na", "flag-nc", "flag-ne", "flag-nf", "flag-ng", "flag-ni", "flag-nl", "flag-no", "flag-np", "flag-nr", "flag-nu", "flag-nz", "flag-om", "flag-pa", "flag-pe", "flag-pf", "flag-pg", "flag-ph", "flag-pk", "flag-pl", "flag-pm", "flag-pn", "flag-pr", "flag-ps", "flag-pt", "flag-pw", "flag-py", "flag-qa", "flag-re", "flag-ro", "flag-rs", "flag-rw", "flag-sa", "flag-sb", "flag-sc", "flag-scotland", "flag-sd", "flag-se", "flag-sg", "flag-sh", "flag-si", "flag-sj", "flag-sk", "flag-sl", "flag-sm", "flag-sn", "flag-so", "flag-sr", "flag-ss", "flag-st", "flag-sv", "flag-sx", "flag-sy", "flag-sz", "flag-ta", "flag-tc", "flag-td", "flag-tf", "flag-tg", "flag-th", "flag-tj", "flag-tk", "flag-tl", "flag-tm", "flag-tn", "flag-to", "flag-tr", "flag-tt", "flag-tv", "flag-tw", "flag-tz", "flag-ua", "flag-ug", "flag-um", "flag-un", "flag-uy", "flag-uz", "flag-va", "flag-vc", "flag-ve", "flag-vg", "flag-vi", "flag-vn", "flag-vu", "flag-wales", "flag-wf", "flag-ws", "flag-xk", "flag-ye", "flag-yt", "flag-za", "flag-zm", "flag-zw", "fr", "gb", "it", "jp", "kr", "pirate_flag", "rainbow-flag", "ru", "transgender_flag", "triangular_flag_on_post", "us", "waving_black_flag", "waving_white_flag"] }], emojis: { "100": { id: "100", name: "Hundred Points", keywords: ["100", "score", "perfect", "numbers", "century", "exam", "quiz", "test", "pass"], skins: [{ unified: "1f4af", native: "\u{1F4AF}" }], version: 1 }, "1234": { id: "1234", name: "Input Numbers", keywords: ["1234", "blue", "square", "1", "2", "3", "4"], skins: [{ unified: "1f522", native: "\u{1F522}" }], version: 1 }, grinning: { id: "grinning", name: "Grinning Face", emoticons: [":D"], keywords: ["smile", "happy", "joy", ":D", "grin"], skins: [{ unified: "1f600", native: "\u{1F600}" }], version: 1 }, smiley: { id: "smiley", name: "Grinning Face with Big Eyes", emoticons: [":)", "=)", "=-)"], keywords: ["smiley", "happy", "joy", "haha", ":D", ":)", "smile", "funny"], skins: [{ unified: "1f603", native: "\u{1F603}" }], version: 1 }, smile: { id: "smile", name: "Grinning Face with Smiling Eyes", emoticons: [":)", "C:", "c:", ":D", ":-D"], keywords: ["smile", "happy", "joy", "funny", "haha", "laugh", "like", ":D", ":)"], skins: [{ unified: "1f604", native: "\u{1F604}" }], version: 1 }, grin: { id: "grin", name: "Beaming Face with Smiling Eyes", keywords: ["grin", "happy", "smile", "joy", "kawaii"], skins: [{ unified: "1f601", native: "\u{1F601}" }], version: 1 }, laughing: { id: "laughing", name: "Grinning Squinting Face", emoticons: [":>", ":->"], keywords: ["laughing", "satisfied", "happy", "joy", "lol", "haha", "glad", "XD", "laugh"], skins: [{ unified: "1f606", native: "\u{1F606}" }], version: 1 }, sweat_smile: { id: "sweat_smile", name: "Grinning Face with Sweat", keywords: ["smile", "hot", "happy", "laugh", "relief"], skins: [{ unified: "1f605", native: "\u{1F605}" }], version: 1 }, rolling_on_the_floor_laughing: { id: "rolling_on_the_floor_laughing", name: "Rolling on the Floor Laughing", keywords: ["face", "lol", "haha", "rofl"], skins: [{ unified: "1f923", native: "\u{1F923}" }], version: 3 }, joy: { id: "joy", name: "Face with Tears of Joy", keywords: ["cry", "weep", "happy", "happytears", "haha"], skins: [{ unified: "1f602", native: "\u{1F602}" }], version: 1 }, slightly_smiling_face: { id: "slightly_smiling_face", name: "Slightly Smiling Face", emoticons: [":)", "(:", ":-)"], keywords: ["smile"], skins: [{ unified: "1f642", native: "\u{1F642}" }], version: 1 }, upside_down_face: { id: "upside_down_face", name: "Upside-Down Face", keywords: ["upside", "down", "flipped", "silly", "smile"], skins: [{ unified: "1f643", native: "\u{1F643}" }], version: 1 }, melting_face: { id: "melting_face", name: "Melting Face", keywords: ["hot", "heat"], skins: [{ unified: "1fae0", native: "\u{1FAE0}" }], version: 14 }, wink: { id: "wink", name: "Winking Face", emoticons: [";)", ";-)"], keywords: ["wink", "happy", "mischievous", "secret", ";)", "smile", "eye"], skins: [{ unified: "1f609", native: "\u{1F609}" }], version: 1 }, blush: { id: "blush", name: "Smiling Face with Smiling Eyes", emoticons: [":)"], keywords: ["blush", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy"], skins: [{ unified: "1f60a", native: "\u{1F60A}" }], version: 1 }, innocent: { id: "innocent", name: "Smiling Face with Halo", keywords: ["innocent", "angel", "heaven"], skins: [{ unified: "1f607", native: "\u{1F607}" }], version: 1 }, smiling_face_with_3_hearts: { id: "smiling_face_with_3_hearts", name: "Smiling Face with Hearts", keywords: ["3", "love", "like", "affection", "valentines", "infatuation", "crush", "adore"], skins: [{ unified: "1f970", native: "\u{1F970}" }], version: 11 }, heart_eyes: { id: "heart_eyes", name: "Smiling Face with Heart-Eyes", keywords: ["heart", "eyes", "love", "like", "affection", "valentines", "infatuation", "crush"], skins: [{ unified: "1f60d", native: "\u{1F60D}" }], version: 1 }, "star-struck": { id: "star-struck", name: "Star-Struck", keywords: ["star", "struck", "grinning", "face", "with", "eyes", "smile", "starry"], skins: [{ unified: "1f929", native: "\u{1F929}" }], version: 5 }, kissing_heart: { id: "kissing_heart", name: "Face Blowing a Kiss", emoticons: [":*", ":-*"], keywords: ["kissing", "heart", "love", "like", "affection", "valentines", "infatuation"], skins: [{ unified: "1f618", native: "\u{1F618}" }], version: 1 }, kissing: { id: "kissing", name: "Kissing Face", keywords: ["love", "like", "3", "valentines", "infatuation", "kiss"], skins: [{ unified: "1f617", native: "\u{1F617}" }], version: 1 }, relaxed: { id: "relaxed", name: "Smiling Face", keywords: ["relaxed", "blush", "massage", "happiness"], skins: [{ unified: "263a-fe0f", native: "\u263A\uFE0F" }], version: 1 }, kissing_closed_eyes: { id: "kissing_closed_eyes", name: "Kissing Face with Closed Eyes", keywords: ["love", "like", "affection", "valentines", "infatuation", "kiss"], skins: [{ unified: "1f61a", native: "\u{1F61A}" }], version: 1 }, kissing_smiling_eyes: { id: "kissing_smiling_eyes", name: "Kissing Face with Smiling Eyes", keywords: ["affection", "valentines", "infatuation", "kiss"], skins: [{ unified: "1f619", native: "\u{1F619}" }], version: 1 }, smiling_face_with_tear: { id: "smiling_face_with_tear", name: "Smiling Face with Tear", keywords: ["sad", "cry", "pretend"], skins: [{ unified: "1f972", native: "\u{1F972}" }], version: 13 }, yum: { id: "yum", name: "Face Savoring Food", keywords: ["yum", "happy", "joy", "tongue", "smile", "silly", "yummy", "nom", "delicious", "savouring"], skins: [{ unified: "1f60b", native: "\u{1F60B}" }], version: 1 }, stuck_out_tongue: { id: "stuck_out_tongue", name: "Face with Tongue", emoticons: [":p", ":-p", ":P", ":-P", ":b", ":-b"], keywords: ["stuck", "out", "prank", "childish", "playful", "mischievous", "smile"], skins: [{ unified: "1f61b", native: "\u{1F61B}" }], version: 1 }, stuck_out_tongue_winking_eye: { id: "stuck_out_tongue_winking_eye", name: "Winking Face with Tongue", emoticons: [";p", ";-p", ";b", ";-b", ";P", ";-P"], keywords: ["stuck", "out", "eye", "prank", "childish", "playful", "mischievous", "smile", "wink"], skins: [{ unified: "1f61c", native: "\u{1F61C}" }], version: 1 }, zany_face: { id: "zany_face", name: "Zany Face", keywords: ["grinning", "with", "one", "large", "and", "small", "eye", "goofy", "crazy"], skins: [{ unified: "1f92a", native: "\u{1F92A}" }], version: 5 }, stuck_out_tongue_closed_eyes: { id: "stuck_out_tongue_closed_eyes", name: "Squinting Face with Tongue", keywords: ["stuck", "out", "closed", "eyes", "prank", "playful", "mischievous", "smile"], skins: [{ unified: "1f61d", native: "\u{1F61D}" }], version: 1 }, money_mouth_face: { id: "money_mouth_face", name: "Money-Mouth Face", keywords: ["money", "mouth", "rich", "dollar"], skins: [{ unified: "1f911", native: "\u{1F911}" }], version: 1 }, hugging_face: { id: "hugging_face", name: "Hugging Face", keywords: ["smile", "hug"], skins: [{ unified: "1f917", native: "\u{1F917}" }], version: 1 }, face_with_hand_over_mouth: { id: "face_with_hand_over_mouth", name: "Face with Hand over Mouth", keywords: ["smiling", "eyes", "and", "covering", "whoops", "shock", "surprise"], skins: [{ unified: "1f92d", native: "\u{1F92D}" }], version: 5 }, face_with_open_eyes_and_hand_over_mouth: { id: "face_with_open_eyes_and_hand_over_mouth", name: "Face with Open Eyes and Hand over Mouth", keywords: ["silence", "secret", "shock", "surprise"], skins: [{ unified: "1fae2", native: "\u{1FAE2}" }], version: 14 }, face_with_peeking_eye: { id: "face_with_peeking_eye", name: "Face with Peeking Eye", keywords: ["scared", "frightening", "embarrassing", "shy"], skins: [{ unified: "1fae3", native: "\u{1FAE3}" }], version: 14 }, shushing_face: { id: "shushing_face", name: "Shushing Face", keywords: ["with", "finger", "covering", "closed", "lips", "quiet", "shhh"], skins: [{ unified: "1f92b", native: "\u{1F92B}" }], version: 5 }, thinking_face: { id: "thinking_face", name: "Thinking Face", keywords: ["hmmm", "think", "consider"], skins: [{ unified: "1f914", native: "\u{1F914}" }], version: 1 }, saluting_face: { id: "saluting_face", name: "Saluting Face", keywords: ["respect", "salute"], skins: [{ unified: "1fae1", native: "\u{1FAE1}" }], version: 14 }, zipper_mouth_face: { id: "zipper_mouth_face", name: "Zipper-Mouth Face", keywords: ["zipper", "mouth", "sealed", "secret"], skins: [{ unified: "1f910", native: "\u{1F910}" }], version: 1 }, face_with_raised_eyebrow: { id: "face_with_raised_eyebrow", name: "Face with Raised Eyebrow", keywords: ["one", "distrust", "scepticism", "disapproval", "disbelief", "surprise"], skins: [{ unified: "1f928", native: "\u{1F928}" }], version: 5 }, neutral_face: { id: "neutral_face", name: "Neutral Face", emoticons: [":|", ":-|"], keywords: ["indifference", "meh", ":", ""], skins: [{ unified: "1f610", native: "\u{1F610}" }], version: 1 }, expressionless: { id: "expressionless", name: "Expressionless Face", emoticons: ["-_-"], keywords: ["indifferent", "-", "", "meh", "deadpan"], skins: [{ unified: "1f611", native: "\u{1F611}" }], version: 1 }, no_mouth: { id: "no_mouth", name: "Face Without Mouth", keywords: ["no", "hellokitty"], skins: [{ unified: "1f636", native: "\u{1F636}" }], version: 1 }, dotted_line_face: { id: "dotted_line_face", name: "Dotted Line Face", keywords: ["invisible", "lonely", "isolation", "depression"], skins: [{ unified: "1fae5", native: "\u{1FAE5}" }], version: 14 }, face_in_clouds: { id: "face_in_clouds", name: "Face in Clouds", keywords: ["shower", "steam", "dream"], skins: [{ unified: "1f636-200d-1f32b-fe0f", native: "\u{1F636}\u200D\u{1F32B}\uFE0F" }], version: 13.1 }, smirk: { id: "smirk", name: "Smirking Face", keywords: ["smirk", "smile", "mean", "prank", "smug", "sarcasm"], skins: [{ unified: "1f60f", native: "\u{1F60F}" }], version: 1 }, unamused: { id: "unamused", name: "Unamused Face", emoticons: [":("], keywords: ["indifference", "bored", "straight", "serious", "sarcasm", "unimpressed", "skeptical", "dubious", "side", "eye"], skins: [{ unified: "1f612", native: "\u{1F612}" }], version: 1 }, face_with_rolling_eyes: { id: "face_with_rolling_eyes", name: "Face with Rolling Eyes", keywords: ["eyeroll", "frustrated"], skins: [{ unified: "1f644", native: "\u{1F644}" }], version: 1 }, grimacing: { id: "grimacing", name: "Grimacing Face", keywords: ["grimace", "teeth"], skins: [{ unified: "1f62c", native: "\u{1F62C}" }], version: 1 }, face_exhaling: { id: "face_exhaling", name: "Face Exhaling", keywords: ["relieve", "relief", "tired", "sigh"], skins: [{ unified: "1f62e-200d-1f4a8", native: "\u{1F62E}\u200D\u{1F4A8}" }], version: 13.1 }, lying_face: { id: "lying_face", name: "Lying Face", keywords: ["lie", "pinocchio"], skins: [{ unified: "1f925", native: "\u{1F925}" }], version: 3 }, shaking_face: { id: "shaking_face", name: "Shaking Face", keywords: ["dizzy", "shock", "blurry", "earthquake"], skins: [{ unified: "1fae8", native: "\u{1FAE8}" }], version: 15 }, relieved: { id: "relieved", name: "Relieved Face", keywords: ["relaxed", "phew", "massage", "happiness"], skins: [{ unified: "1f60c", native: "\u{1F60C}" }], version: 1 }, pensive: { id: "pensive", name: "Pensive Face", keywords: ["sad", "depressed", "upset"], skins: [{ unified: "1f614", native: "\u{1F614}" }], version: 1 }, sleepy: { id: "sleepy", name: "Sleepy Face", keywords: ["tired", "rest", "nap"], skins: [{ unified: "1f62a", native: "\u{1F62A}" }], version: 1 }, drooling_face: { id: "drooling_face", name: "Drooling Face", keywords: [], skins: [{ unified: "1f924", native: "\u{1F924}" }], version: 3 }, sleeping: { id: "sleeping", name: "Sleeping Face", keywords: ["tired", "sleepy", "night", "zzz"], skins: [{ unified: "1f634", native: "\u{1F634}" }], version: 1 }, mask: { id: "mask", name: "Face with Medical Mask", keywords: ["sick", "ill", "disease", "covid"], skins: [{ unified: "1f637", native: "\u{1F637}" }], version: 1 }, face_with_thermometer: { id: "face_with_thermometer", name: "Face with Thermometer", keywords: ["sick", "temperature", "cold", "fever", "covid"], skins: [{ unified: "1f912", native: "\u{1F912}" }], version: 1 }, face_with_head_bandage: { id: "face_with_head_bandage", name: "Face with Head-Bandage", keywords: ["head", "bandage", "injured", "clumsy", "hurt"], skins: [{ unified: "1f915", native: "\u{1F915}" }], version: 1 }, nauseated_face: { id: "nauseated_face", name: "Nauseated Face", keywords: ["vomit", "gross", "green", "sick", "throw", "up", "ill"], skins: [{ unified: "1f922", native: "\u{1F922}" }], version: 3 }, face_vomiting: { id: "face_vomiting", name: "Face Vomiting", keywords: ["with", "open", "mouth", "sick"], skins: [{ unified: "1f92e", native: "\u{1F92E}" }], version: 5 }, sneezing_face: { id: "sneezing_face", name: "Sneezing Face", keywords: ["gesundheit", "sneeze", "sick", "allergy"], skins: [{ unified: "1f927", native: "\u{1F927}" }], version: 3 }, hot_face: { id: "hot_face", name: "Hot Face", keywords: ["feverish", "heat", "red", "sweating"], skins: [{ unified: "1f975", native: "\u{1F975}" }], version: 11 }, cold_face: { id: "cold_face", name: "Cold Face", keywords: ["blue", "freezing", "frozen", "frostbite", "icicles"], skins: [{ unified: "1f976", native: "\u{1F976}" }], version: 11 }, woozy_face: { id: "woozy_face", name: "Woozy Face", keywords: ["dizzy", "intoxicated", "tipsy", "wavy"], skins: [{ unified: "1f974", native: "\u{1F974}" }], version: 11 }, dizzy_face: { id: "dizzy_face", name: "Dizzy Face", keywords: ["spent", "unconscious", "xox"], skins: [{ unified: "1f635", native: "\u{1F635}" }], version: 1 }, face_with_spiral_eyes: { id: "face_with_spiral_eyes", name: "Face with Spiral Eyes", keywords: ["sick", "ill", "confused", "nauseous", "nausea"], skins: [{ unified: "1f635-200d-1f4ab", native: "\u{1F635}\u200D\u{1F4AB}" }], version: 13.1 }, exploding_head: { id: "exploding_head", name: "Exploding Head", keywords: ["shocked", "face", "with", "mind", "blown"], skins: [{ unified: "1f92f", native: "\u{1F92F}" }], version: 5 }, face_with_cowboy_hat: { id: "face_with_cowboy_hat", name: "Cowboy Hat Face", keywords: ["with", "cowgirl"], skins: [{ unified: "1f920", native: "\u{1F920}" }], version: 3 }, partying_face: { id: "partying_face", name: "Partying Face", keywords: ["celebration", "woohoo"], skins: [{ unified: "1f973", native: "\u{1F973}" }], version: 11 }, disguised_face: { id: "disguised_face", name: "Disguised Face", keywords: ["pretent", "brows", "glasses", "moustache"], skins: [{ unified: "1f978", native: "\u{1F978}" }], version: 13 }, sunglasses: { id: "sunglasses", name: "Smiling Face with Sunglasses", emoticons: ["8)"], keywords: ["cool", "smile", "summer", "beach", "sunglass"], skins: [{ unified: "1f60e", native: "\u{1F60E}" }], version: 1 }, nerd_face: { id: "nerd_face", name: "Nerd Face", keywords: ["nerdy", "geek", "dork"], skins: [{ unified: "1f913", native: "\u{1F913}" }], version: 1 }, face_with_monocle: { id: "face_with_monocle", name: "Face with Monocle", keywords: ["stuffy", "wealthy"], skins: [{ unified: "1f9d0", native: "\u{1F9D0}" }], version: 5 }, confused: { id: "confused", name: "Confused Face", emoticons: [":\\", ":-\\", ":/", ":-/"], keywords: ["indifference", "huh", "weird", "hmmm", ":/"], skins: [{ unified: "1f615", native: "\u{1F615}" }], version: 1 }, face_with_diagonal_mouth: { id: "face_with_diagonal_mouth", name: "Face with Diagonal Mouth", keywords: ["skeptic", "confuse", "frustrated", "indifferent"], skins: [{ unified: "1fae4", native: "\u{1FAE4}" }], version: 14 }, worried: { id: "worried", name: "Worried Face", keywords: ["concern", "nervous", ":("], skins: [{ unified: "1f61f", native: "\u{1F61F}" }], version: 1 }, slightly_frowning_face: { id: "slightly_frowning_face", name: "Slightly Frowning Face", keywords: ["disappointed", "sad", "upset"], skins: [{ unified: "1f641", native: "\u{1F641}" }], version: 1 }, white_frowning_face: { id: "white_frowning_face", name: "Frowning Face", keywords: ["white", "sad", "upset", "frown"], skins: [{ unified: "2639-fe0f", native: "\u2639\uFE0F" }], version: 1 }, open_mouth: { id: "open_mouth", name: "Face with Open Mouth", emoticons: [":o", ":-o", ":O", ":-O"], keywords: ["surprise", "impressed", "wow", "whoa", ":O"], skins: [{ unified: "1f62e", native: "\u{1F62E}" }], version: 1 }, hushed: { id: "hushed", name: "Hushed Face", keywords: ["woo", "shh"], skins: [{ unified: "1f62f", native: "\u{1F62F}" }], version: 1 }, astonished: { id: "astonished", name: "Astonished Face", keywords: ["xox", "surprised", "poisoned"], skins: [{ unified: "1f632", native: "\u{1F632}" }], version: 1 }, flushed: { id: "flushed", name: "Flushed Face", keywords: ["blush", "shy", "flattered"], skins: [{ unified: "1f633", native: "\u{1F633}" }], version: 1 }, pleading_face: { id: "pleading_face", name: "Pleading Face", keywords: ["begging", "mercy", "cry", "tears", "sad", "grievance"], skins: [{ unified: "1f97a", native: "\u{1F97A}" }], version: 11 }, face_holding_back_tears: { id: "face_holding_back_tears", name: "Face Holding Back Tears", keywords: ["touched", "gratitude", "cry"], skins: [{ unified: "1f979", native: "\u{1F979}" }], version: 14 }, frowning: { id: "frowning", name: "Frowning Face with Open Mouth", keywords: ["aw", "what"], skins: [{ unified: "1f626", native: "\u{1F626}" }], version: 1 }, anguished: { id: "anguished", name: "Anguished Face", emoticons: ["D:"], keywords: ["stunned", "nervous"], skins: [{ unified: "1f627", native: "\u{1F627}" }], version: 1 }, fearful: { id: "fearful", name: "Fearful Face", keywords: ["scared", "terrified", "nervous"], skins: [{ unified: "1f628", native: "\u{1F628}" }], version: 1 }, cold_sweat: { id: "cold_sweat", name: "Anxious Face with Sweat", keywords: ["cold", "nervous"], skins: [{ unified: "1f630", native: "\u{1F630}" }], version: 1 }, disappointed_relieved: { id: "disappointed_relieved", name: "Sad but Relieved Face", keywords: ["disappointed", "phew", "sweat", "nervous"], skins: [{ unified: "1f625", native: "\u{1F625}" }], version: 1 }, cry: { id: "cry", name: "Crying Face", emoticons: [":'("], keywords: ["cry", "tears", "sad", "depressed", "upset", ":'("], skins: [{ unified: "1f622", native: "\u{1F622}" }], version: 1 }, sob: { id: "sob", name: "Loudly Crying Face", emoticons: [":'("], keywords: ["sob", "cry", "tears", "sad", "upset", "depressed"], skins: [{ unified: "1f62d", native: "\u{1F62D}" }], version: 1 }, scream: { id: "scream", name: "Face Screaming in Fear", keywords: ["scream", "munch", "scared", "omg"], skins: [{ unified: "1f631", native: "\u{1F631}" }], version: 1 }, confounded: { id: "confounded", name: "Confounded Face", keywords: ["confused", "sick", "unwell", "oops", ":S"], skins: [{ unified: "1f616", native: "\u{1F616}" }], version: 1 }, persevere: { id: "persevere", name: "Persevering Face", keywords: ["persevere", "sick", "no", "upset", "oops"], skins: [{ unified: "1f623", native: "\u{1F623}" }], version: 1 }, disappointed: { id: "disappointed", name: "Disappointed Face", emoticons: ["):", ":(", ":-("], keywords: ["sad", "upset", "depressed", ":("], skins: [{ unified: "1f61e", native: "\u{1F61E}" }], version: 1 }, sweat: { id: "sweat", name: "Face with Cold Sweat", keywords: ["downcast", "hot", "sad", "tired", "exercise"], skins: [{ unified: "1f613", native: "\u{1F613}" }], version: 1 }, weary: { id: "weary", name: "Weary Face", keywords: ["tired", "sleepy", "sad", "frustrated", "upset"], skins: [{ unified: "1f629", native: "\u{1F629}" }], version: 1 }, tired_face: { id: "tired_face", name: "Tired Face", keywords: ["sick", "whine", "upset", "frustrated"], skins: [{ unified: "1f62b", native: "\u{1F62B}" }], version: 1 }, yawning_face: { id: "yawning_face", name: "Yawning Face", keywords: ["tired", "sleepy"], skins: [{ unified: "1f971", native: "\u{1F971}" }], version: 12 }, triumph: { id: "triumph", name: "Face with Look of Triumph", keywords: ["steam", "from", "nose", "gas", "phew", "proud", "pride"], skins: [{ unified: "1f624", native: "\u{1F624}" }], version: 1 }, rage: { id: "rage", name: "Pouting Face", keywords: ["rage", "angry", "mad", "hate", "despise"], skins: [{ unified: "1f621", native: "\u{1F621}" }], version: 1 }, angry: { id: "angry", name: "Angry Face", emoticons: [">:(", ">:-("], keywords: ["mad", "annoyed", "frustrated"], skins: [{ unified: "1f620", native: "\u{1F620}" }], version: 1 }, face_with_symbols_on_mouth: { id: "face_with_symbols_on_mouth", name: "Face with Symbols on Mouth", keywords: ["serious", "covering", "swearing", "cursing", "cussing", "profanity", "expletive"], skins: [{ unified: "1f92c", native: "\u{1F92C}" }], version: 5 }, smiling_imp: { id: "smiling_imp", name: "Smiling Face with Horns", keywords: ["imp", "devil"], skins: [{ unified: "1f608", native: "\u{1F608}" }], version: 1 }, imp: { id: "imp", name: "Imp", keywords: ["angry", "face", "with", "horns", "devil"], skins: [{ unified: "1f47f", native: "\u{1F47F}" }], version: 1 }, skull: { id: "skull", name: "Skull", keywords: ["dead", "skeleton", "creepy", "death"], skins: [{ unified: "1f480", native: "\u{1F480}" }], version: 1 }, skull_and_crossbones: { id: "skull_and_crossbones", name: "Skull and Crossbones", keywords: ["poison", "danger", "deadly", "scary", "death", "pirate", "evil"], skins: [{ unified: "2620-fe0f", native: "\u2620\uFE0F" }], version: 1 }, hankey: { id: "hankey", name: "Pile of Poo", keywords: ["hankey", "poop", "shit", "shitface", "fail", "turd"], skins: [{ unified: "1f4a9", native: "\u{1F4A9}" }], version: 1 }, clown_face: { id: "clown_face", name: "Clown Face", keywords: [], skins: [{ unified: "1f921", native: "\u{1F921}" }], version: 3 }, japanese_ogre: { id: "japanese_ogre", name: "Ogre", keywords: ["japanese", "monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon"], skins: [{ unified: "1f479", native: "\u{1F479}" }], version: 1 }, japanese_goblin: { id: "japanese_goblin", name: "Goblin", keywords: ["japanese", "red", "evil", "mask", "monster", "scary", "creepy"], skins: [{ unified: "1f47a", native: "\u{1F47A}" }], version: 1 }, ghost: { id: "ghost", name: "Ghost", keywords: ["halloween", "spooky", "scary"], skins: [{ unified: "1f47b", native: "\u{1F47B}" }], version: 1 }, alien: { id: "alien", name: "Alien", keywords: ["UFO", "paul", "weird", "outer", "space"], skins: [{ unified: "1f47d", native: "\u{1F47D}" }], version: 1 }, space_invader: { id: "space_invader", name: "Alien Monster", keywords: ["space", "invader", "game", "arcade", "play"], skins: [{ unified: "1f47e", native: "\u{1F47E}" }], version: 1 }, robot_face: { id: "robot_face", name: "Robot", keywords: ["face", "computer", "machine", "bot"], skins: [{ unified: "1f916", native: "\u{1F916}" }], version: 1 }, smiley_cat: { id: "smiley_cat", name: "Grinning Cat", keywords: ["smiley", "animal", "cats", "happy", "smile"], skins: [{ unified: "1f63a", native: "\u{1F63A}" }], version: 1 }, smile_cat: { id: "smile_cat", name: "Grinning Cat with Smiling Eyes", keywords: ["smile", "animal", "cats"], skins: [{ unified: "1f638", native: "\u{1F638}" }], version: 1 }, joy_cat: { id: "joy_cat", name: "Cat with Tears of Joy", keywords: ["animal", "cats", "haha", "happy"], skins: [{ unified: "1f639", native: "\u{1F639}" }], version: 1 }, heart_eyes_cat: { id: "heart_eyes_cat", name: "Smiling Cat with Heart-Eyes", keywords: ["heart", "eyes", "animal", "love", "like", "affection", "cats", "valentines"], skins: [{ unified: "1f63b", native: "\u{1F63B}" }], version: 1 }, smirk_cat: { id: "smirk_cat", name: "Cat with Wry Smile", keywords: ["smirk", "animal", "cats"], skins: [{ unified: "1f63c", native: "\u{1F63C}" }], version: 1 }, kissing_cat: { id: "kissing_cat", name: "Kissing Cat", keywords: ["animal", "cats", "kiss"], skins: [{ unified: "1f63d", native: "\u{1F63D}" }], version: 1 }, scream_cat: { id: "scream_cat", name: "Weary Cat", keywords: ["scream", "animal", "cats", "munch", "scared"], skins: [{ unified: "1f640", native: "\u{1F640}" }], version: 1 }, crying_cat_face: { id: "crying_cat_face", name: "Crying Cat", keywords: ["face", "animal", "tears", "weep", "sad", "cats", "upset", "cry"], skins: [{ unified: "1f63f", native: "\u{1F63F}" }], version: 1 }, pouting_cat: { id: "pouting_cat", name: "Pouting Cat", keywords: ["animal", "cats"], skins: [{ unified: "1f63e", native: "\u{1F63E}" }], version: 1 }, see_no_evil: { id: "see_no_evil", name: "See-No-Evil Monkey", keywords: ["see", "no", "evil", "animal", "nature", "haha"], skins: [{ unified: "1f648", native: "\u{1F648}" }], version: 1 }, hear_no_evil: { id: "hear_no_evil", name: "Hear-No-Evil Monkey", keywords: ["hear", "no", "evil", "animal", "nature"], skins: [{ unified: "1f649", native: "\u{1F649}" }], version: 1 }, speak_no_evil: { id: "speak_no_evil", name: "Speak-No-Evil Monkey", keywords: ["speak", "no", "evil", "animal", "nature", "omg"], skins: [{ unified: "1f64a", native: "\u{1F64A}" }], version: 1 }, love_letter: { id: "love_letter", name: "Love Letter", keywords: ["email", "like", "affection", "envelope", "valentines"], skins: [{ unified: "1f48c", native: "\u{1F48C}" }], version: 1 }, cupid: { id: "cupid", name: "Heart with Arrow", keywords: ["cupid", "love", "like", "affection", "valentines"], skins: [{ unified: "1f498", native: "\u{1F498}" }], version: 1 }, gift_heart: { id: "gift_heart", name: "Heart with Ribbon", keywords: ["gift", "love", "valentines"], skins: [{ unified: "1f49d", native: "\u{1F49D}" }], version: 1 }, sparkling_heart: { id: "sparkling_heart", name: "Sparkling Heart", keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f496", native: "\u{1F496}" }], version: 1 }, heartpulse: { id: "heartpulse", name: "Growing Heart", keywords: ["heartpulse", "like", "love", "affection", "valentines", "pink"], skins: [{ unified: "1f497", native: "\u{1F497}" }], version: 1 }, heartbeat: { id: "heartbeat", name: "Beating Heart", keywords: ["heartbeat", "love", "like", "affection", "valentines", "pink"], skins: [{ unified: "1f493", native: "\u{1F493}" }], version: 1 }, revolving_hearts: { id: "revolving_hearts", name: "Revolving Hearts", keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f49e", native: "\u{1F49E}" }], version: 1 }, two_hearts: { id: "two_hearts", name: "Two Hearts", keywords: ["love", "like", "affection", "valentines", "heart"], skins: [{ unified: "1f495", native: "\u{1F495}" }], version: 1 }, heart_decoration: { id: "heart_decoration", name: "Heart Decoration", keywords: ["purple", "square", "love", "like"], skins: [{ unified: "1f49f", native: "\u{1F49F}" }], version: 1 }, heavy_heart_exclamation_mark_ornament: { id: "heavy_heart_exclamation_mark_ornament", name: "Heart Exclamation", keywords: ["heavy", "mark", "ornament", "decoration", "love"], skins: [{ unified: "2763-fe0f", native: "\u2763\uFE0F" }], version: 1 }, broken_heart: { id: "broken_heart", name: "Broken Heart", emoticons: ["</3"], keywords: ["sad", "sorry", "break", "heartbreak"], skins: [{ unified: "1f494", native: "\u{1F494}" }], version: 1 }, heart_on_fire: { id: "heart_on_fire", name: "Heart on Fire", keywords: ["passionate", "enthusiastic"], skins: [{ unified: "2764-fe0f-200d-1f525", native: "\u2764\uFE0F\u200D\u{1F525}" }], version: 13.1 }, mending_heart: { id: "mending_heart", name: "Mending Heart", keywords: ["broken", "bandage", "wounded"], skins: [{ unified: "2764-fe0f-200d-1fa79", native: "\u2764\uFE0F\u200D\u{1FA79}" }], version: 13.1 }, heart: { id: "heart", name: "Red Heart", emoticons: ["<3"], keywords: ["love", "like", "valentines"], skins: [{ unified: "2764-fe0f", native: "\u2764\uFE0F" }], version: 1 }, pink_heart: { id: "pink_heart", name: "Pink Heart", keywords: ["valentines"], skins: [{ unified: "1fa77", native: "\u{1FA77}" }], version: 15 }, orange_heart: { id: "orange_heart", name: "Orange Heart", keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f9e1", native: "\u{1F9E1}" }], version: 5 }, yellow_heart: { id: "yellow_heart", name: "Yellow Heart", emoticons: ["<3"], keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f49b", native: "\u{1F49B}" }], version: 1 }, green_heart: { id: "green_heart", name: "Green Heart", emoticons: ["<3"], keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f49a", native: "\u{1F49A}" }], version: 1 }, blue_heart: { id: "blue_heart", name: "Blue Heart", emoticons: ["<3"], keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f499", native: "\u{1F499}" }], version: 1 }, light_blue_heart: { id: "light_blue_heart", name: "Light Blue Heart", keywords: ["ice", "baby"], skins: [{ unified: "1fa75", native: "\u{1FA75}" }], version: 15 }, purple_heart: { id: "purple_heart", name: "Purple Heart", emoticons: ["<3"], keywords: ["love", "like", "affection", "valentines"], skins: [{ unified: "1f49c", native: "\u{1F49C}" }], version: 1 }, brown_heart: { id: "brown_heart", name: "Brown Heart", keywords: ["coffee"], skins: [{ unified: "1f90e", native: "\u{1F90E}" }], version: 12 }, black_heart: { id: "black_heart", name: "Black Heart", keywords: ["evil"], skins: [{ unified: "1f5a4", native: "\u{1F5A4}" }], version: 3 }, grey_heart: { id: "grey_heart", name: "Grey Heart", keywords: ["silver", "monochrome"], skins: [{ unified: "1fa76", native: "\u{1FA76}" }], version: 15 }, white_heart: { id: "white_heart", name: "White Heart", keywords: ["pure"], skins: [{ unified: "1f90d", native: "\u{1F90D}" }], version: 12 }, kiss: { id: "kiss", name: "Kiss Mark", keywords: ["face", "lips", "love", "like", "affection", "valentines"], skins: [{ unified: "1f48b", native: "\u{1F48B}" }], version: 1 }, anger: { id: "anger", name: "Anger Symbol", keywords: ["angry", "mad"], skins: [{ unified: "1f4a2", native: "\u{1F4A2}" }], version: 1 }, boom: { id: "boom", name: "Collision", keywords: ["boom", "bomb", "explode", "explosion", "blown"], skins: [{ unified: "1f4a5", native: "\u{1F4A5}" }], version: 1 }, dizzy: { id: "dizzy", name: "Dizzy", keywords: ["star", "sparkle", "shoot", "magic"], skins: [{ unified: "1f4ab", native: "\u{1F4AB}" }], version: 1 }, sweat_drops: { id: "sweat_drops", name: "Sweat Droplets", keywords: ["drops", "water", "drip", "oops"], skins: [{ unified: "1f4a6", native: "\u{1F4A6}" }], version: 1 }, dash: { id: "dash", name: "Dash Symbol", keywords: ["dashing", "away", "wind", "air", "fast", "shoo", "fart", "smoke", "puff"], skins: [{ unified: "1f4a8", native: "\u{1F4A8}" }], version: 1 }, hole: { id: "hole", name: "Hole", keywords: ["embarrassing"], skins: [{ unified: "1f573-fe0f", native: "\u{1F573}\uFE0F" }], version: 1 }, speech_balloon: { id: "speech_balloon", name: "Speech Balloon", keywords: ["bubble", "words", "message", "talk", "chatting"], skins: [{ unified: "1f4ac", native: "\u{1F4AC}" }], version: 1 }, "eye-in-speech-bubble": { id: "eye-in-speech-bubble", name: "Eye in Speech Bubble", keywords: ["in-speech-bubble", "info"], skins: [{ unified: "1f441-fe0f-200d-1f5e8-fe0f", native: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F" }], version: 2 }, left_speech_bubble: { id: "left_speech_bubble", name: "Left Speech Bubble", keywords: ["words", "message", "talk", "chatting"], skins: [{ unified: "1f5e8-fe0f", native: "\u{1F5E8}\uFE0F" }], version: 2 }, right_anger_bubble: { id: "right_anger_bubble", name: "Right Anger Bubble", keywords: ["caption", "speech", "thinking", "mad"], skins: [{ unified: "1f5ef-fe0f", native: "\u{1F5EF}\uFE0F" }], version: 1 }, thought_balloon: { id: "thought_balloon", name: "Thought Balloon", keywords: ["bubble", "cloud", "speech", "thinking", "dream"], skins: [{ unified: "1f4ad", native: "\u{1F4AD}" }], version: 1 }, zzz: { id: "zzz", name: "Zzz", keywords: ["sleepy", "tired", "dream"], skins: [{ unified: "1f4a4", native: "\u{1F4A4}" }], version: 1 }, wave: { id: "wave", name: "Waving Hand", keywords: ["wave", "hands", "gesture", "goodbye", "solong", "farewell", "hello", "hi", "palm"], skins: [{ unified: "1f44b", native: "\u{1F44B}" }, { unified: "1f44b-1f3fb", native: "\u{1F44B}\u{1F3FB}" }, { unified: "1f44b-1f3fc", native: "\u{1F44B}\u{1F3FC}" }, { unified: "1f44b-1f3fd", native: "\u{1F44B}\u{1F3FD}" }, { unified: "1f44b-1f3fe", native: "\u{1F44B}\u{1F3FE}" }, { unified: "1f44b-1f3ff", native: "\u{1F44B}\u{1F3FF}" }], version: 1 }, raised_back_of_hand: { id: "raised_back_of_hand", name: "Raised Back of Hand", keywords: ["fingers", "backhand"], skins: [{ unified: "1f91a", native: "\u{1F91A}" }, { unified: "1f91a-1f3fb", native: "\u{1F91A}\u{1F3FB}" }, { unified: "1f91a-1f3fc", native: "\u{1F91A}\u{1F3FC}" }, { unified: "1f91a-1f3fd", native: "\u{1F91A}\u{1F3FD}" }, { unified: "1f91a-1f3fe", native: "\u{1F91A}\u{1F3FE}" }, { unified: "1f91a-1f3ff", native: "\u{1F91A}\u{1F3FF}" }], version: 3 }, raised_hand_with_fingers_splayed: { id: "raised_hand_with_fingers_splayed", name: "Hand with Fingers Splayed", keywords: ["raised", "palm"], skins: [{ unified: "1f590-fe0f", native: "\u{1F590}\uFE0F" }, { unified: "1f590-1f3fb", native: "\u{1F590}\u{1F3FB}" }, { unified: "1f590-1f3fc", native: "\u{1F590}\u{1F3FC}" }, { unified: "1f590-1f3fd", native: "\u{1F590}\u{1F3FD}" }, { unified: "1f590-1f3fe", native: "\u{1F590}\u{1F3FE}" }, { unified: "1f590-1f3ff", native: "\u{1F590}\u{1F3FF}" }], version: 1 }, hand: { id: "hand", name: "Raised Hand", keywords: ["fingers", "stop", "highfive", "high", "five", "palm", "ban"], skins: [{ unified: "270b", native: "\u270B" }, { unified: "270b-1f3fb", native: "\u270B\u{1F3FB}" }, { unified: "270b-1f3fc", native: "\u270B\u{1F3FC}" }, { unified: "270b-1f3fd", native: "\u270B\u{1F3FD}" }, { unified: "270b-1f3fe", native: "\u270B\u{1F3FE}" }, { unified: "270b-1f3ff", native: "\u270B\u{1F3FF}" }], version: 1 }, "spock-hand": { id: "spock-hand", name: "Vulcan Salute", keywords: ["spock", "hand", "fingers", "star", "trek"], skins: [{ unified: "1f596", native: "\u{1F596}" }, { unified: "1f596-1f3fb", native: "\u{1F596}\u{1F3FB}" }, { unified: "1f596-1f3fc", native: "\u{1F596}\u{1F3FC}" }, { unified: "1f596-1f3fd", native: "\u{1F596}\u{1F3FD}" }, { unified: "1f596-1f3fe", native: "\u{1F596}\u{1F3FE}" }, { unified: "1f596-1f3ff", native: "\u{1F596}\u{1F3FF}" }], version: 1 }, rightwards_hand: { id: "rightwards_hand", name: "Rightwards Hand", keywords: ["palm", "offer"], skins: [{ unified: "1faf1", native: "\u{1FAF1}" }, { unified: "1faf1-1f3fb", native: "\u{1FAF1}\u{1F3FB}" }, { unified: "1faf1-1f3fc", native: "\u{1FAF1}\u{1F3FC}" }, { unified: "1faf1-1f3fd", native: "\u{1FAF1}\u{1F3FD}" }, { unified: "1faf1-1f3fe", native: "\u{1FAF1}\u{1F3FE}" }, { unified: "1faf1-1f3ff", native: "\u{1FAF1}\u{1F3FF}" }], version: 14 }, leftwards_hand: { id: "leftwards_hand", name: "Leftwards Hand", keywords: ["palm", "offer"], skins: [{ unified: "1faf2", native: "\u{1FAF2}" }, { unified: "1faf2-1f3fb", native: "\u{1FAF2}\u{1F3FB}" }, { unified: "1faf2-1f3fc", native: "\u{1FAF2}\u{1F3FC}" }, { unified: "1faf2-1f3fd", native: "\u{1FAF2}\u{1F3FD}" }, { unified: "1faf2-1f3fe", native: "\u{1FAF2}\u{1F3FE}" }, { unified: "1faf2-1f3ff", native: "\u{1FAF2}\u{1F3FF}" }], version: 14 }, palm_down_hand: { id: "palm_down_hand", name: "Palm Down Hand", keywords: ["drop"], skins: [{ unified: "1faf3", native: "\u{1FAF3}" }, { unified: "1faf3-1f3fb", native: "\u{1FAF3}\u{1F3FB}" }, { unified: "1faf3-1f3fc", native: "\u{1FAF3}\u{1F3FC}" }, { unified: "1faf3-1f3fd", native: "\u{1FAF3}\u{1F3FD}" }, { unified: "1faf3-1f3fe", native: "\u{1FAF3}\u{1F3FE}" }, { unified: "1faf3-1f3ff", native: "\u{1FAF3}\u{1F3FF}" }], version: 14 }, palm_up_hand: { id: "palm_up_hand", name: "Palm Up Hand", keywords: ["lift", "offer", "demand"], skins: [{ unified: "1faf4", native: "\u{1FAF4}" }, { unified: "1faf4-1f3fb", native: "\u{1FAF4}\u{1F3FB}" }, { unified: "1faf4-1f3fc", native: "\u{1FAF4}\u{1F3FC}" }, { unified: "1faf4-1f3fd", native: "\u{1FAF4}\u{1F3FD}" }, { unified: "1faf4-1f3fe", native: "\u{1FAF4}\u{1F3FE}" }, { unified: "1faf4-1f3ff", native: "\u{1FAF4}\u{1F3FF}" }], version: 14 }, leftwards_pushing_hand: { id: "leftwards_pushing_hand", name: "Leftwards Pushing Hand", keywords: ["highfive", "high", "five", "pressing", "stop"], skins: [{ unified: "1faf7", native: "\u{1FAF7}" }, { unified: "1faf7-1f3fb", native: "\u{1FAF7}\u{1F3FB}" }, { unified: "1faf7-1f3fc", native: "\u{1FAF7}\u{1F3FC}" }, { unified: "1faf7-1f3fd", native: "\u{1FAF7}\u{1F3FD}" }, { unified: "1faf7-1f3fe", native: "\u{1FAF7}\u{1F3FE}" }, { unified: "1faf7-1f3ff", native: "\u{1FAF7}\u{1F3FF}" }], version: 15 }, rightwards_pushing_hand: { id: "rightwards_pushing_hand", name: "Rightwards Pushing Hand", keywords: ["highfive", "high", "five", "pressing", "stop"], skins: [{ unified: "1faf8", native: "\u{1FAF8}" }, { unified: "1faf8-1f3fb", native: "\u{1FAF8}\u{1F3FB}" }, { unified: "1faf8-1f3fc", native: "\u{1FAF8}\u{1F3FC}" }, { unified: "1faf8-1f3fd", native: "\u{1FAF8}\u{1F3FD}" }, { unified: "1faf8-1f3fe", native: "\u{1FAF8}\u{1F3FE}" }, { unified: "1faf8-1f3ff", native: "\u{1FAF8}\u{1F3FF}" }], version: 15 }, ok_hand: { id: "ok_hand", name: "Ok Hand", keywords: ["fingers", "limbs", "perfect", "okay"], skins: [{ unified: "1f44c", native: "\u{1F44C}" }, { unified: "1f44c-1f3fb", native: "\u{1F44C}\u{1F3FB}" }, { unified: "1f44c-1f3fc", native: "\u{1F44C}\u{1F3FC}" }, { unified: "1f44c-1f3fd", native: "\u{1F44C}\u{1F3FD}" }, { unified: "1f44c-1f3fe", native: "\u{1F44C}\u{1F3FE}" }, { unified: "1f44c-1f3ff", native: "\u{1F44C}\u{1F3FF}" }], version: 1 }, pinched_fingers: { id: "pinched_fingers", name: "Pinched Fingers", keywords: ["size", "tiny", "small"], skins: [{ unified: "1f90c", native: "\u{1F90C}" }, { unified: "1f90c-1f3fb", native: "\u{1F90C}\u{1F3FB}" }, { unified: "1f90c-1f3fc", native: "\u{1F90C}\u{1F3FC}" }, { unified: "1f90c-1f3fd", native: "\u{1F90C}\u{1F3FD}" }, { unified: "1f90c-1f3fe", native: "\u{1F90C}\u{1F3FE}" }, { unified: "1f90c-1f3ff", native: "\u{1F90C}\u{1F3FF}" }], version: 13 }, pinching_hand: { id: "pinching_hand", name: "Pinching Hand", keywords: ["tiny", "small", "size"], skins: [{ unified: "1f90f", native: "\u{1F90F}" }, { unified: "1f90f-1f3fb", native: "\u{1F90F}\u{1F3FB}" }, { unified: "1f90f-1f3fc", native: "\u{1F90F}\u{1F3FC}" }, { unified: "1f90f-1f3fd", native: "\u{1F90F}\u{1F3FD}" }, { unified: "1f90f-1f3fe", native: "\u{1F90F}\u{1F3FE}" }, { unified: "1f90f-1f3ff", native: "\u{1F90F}\u{1F3FF}" }], version: 12 }, v: { id: "v", name: "Victory Hand", keywords: ["v", "fingers", "ohyeah", "peace", "two"], skins: [{ unified: "270c-fe0f", native: "\u270C\uFE0F" }, { unified: "270c-1f3fb", native: "\u270C\u{1F3FB}" }, { unified: "270c-1f3fc", native: "\u270C\u{1F3FC}" }, { unified: "270c-1f3fd", native: "\u270C\u{1F3FD}" }, { unified: "270c-1f3fe", native: "\u270C\u{1F3FE}" }, { unified: "270c-1f3ff", native: "\u270C\u{1F3FF}" }], version: 1 }, crossed_fingers: { id: "crossed_fingers", name: "Crossed Fingers", keywords: ["hand", "with", "index", "and", "middle", "good", "lucky"], skins: [{ unified: "1f91e", native: "\u{1F91E}" }, { unified: "1f91e-1f3fb", native: "\u{1F91E}\u{1F3FB}" }, { unified: "1f91e-1f3fc", native: "\u{1F91E}\u{1F3FC}" }, { unified: "1f91e-1f3fd", native: "\u{1F91E}\u{1F3FD}" }, { unified: "1f91e-1f3fe", native: "\u{1F91E}\u{1F3FE}" }, { unified: "1f91e-1f3ff", native: "\u{1F91E}\u{1F3FF}" }], version: 3 }, hand_with_index_finger_and_thumb_crossed: { id: "hand_with_index_finger_and_thumb_crossed", name: "Hand with Index Finger and Thumb Crossed", keywords: ["heart", "love", "money", "expensive"], skins: [{ unified: "1faf0", native: "\u{1FAF0}" }, { unified: "1faf0-1f3fb", native: "\u{1FAF0}\u{1F3FB}" }, { unified: "1faf0-1f3fc", native: "\u{1FAF0}\u{1F3FC}" }, { unified: "1faf0-1f3fd", native: "\u{1FAF0}\u{1F3FD}" }, { unified: "1faf0-1f3fe", native: "\u{1FAF0}\u{1F3FE}" }, { unified: "1faf0-1f3ff", native: "\u{1FAF0}\u{1F3FF}" }], version: 14 }, i_love_you_hand_sign: { id: "i_love_you_hand_sign", name: "Love-You Gesture", keywords: ["i", "love", "you", "hand", "sign", "fingers"], skins: [{ unified: "1f91f", native: "\u{1F91F}" }, { unified: "1f91f-1f3fb", native: "\u{1F91F}\u{1F3FB}" }, { unified: "1f91f-1f3fc", native: "\u{1F91F}\u{1F3FC}" }, { unified: "1f91f-1f3fd", native: "\u{1F91F}\u{1F3FD}" }, { unified: "1f91f-1f3fe", native: "\u{1F91F}\u{1F3FE}" }, { unified: "1f91f-1f3ff", native: "\u{1F91F}\u{1F3FF}" }], version: 5 }, the_horns: { id: "the_horns", name: "Sign of the Horns", keywords: ["hand", "fingers", "evil", "eye", "rock", "on"], skins: [{ unified: "1f918", native: "\u{1F918}" }, { unified: "1f918-1f3fb", native: "\u{1F918}\u{1F3FB}" }, { unified: "1f918-1f3fc", native: "\u{1F918}\u{1F3FC}" }, { unified: "1f918-1f3fd", native: "\u{1F918}\u{1F3FD}" }, { unified: "1f918-1f3fe", native: "\u{1F918}\u{1F3FE}" }, { unified: "1f918-1f3ff", native: "\u{1F918}\u{1F3FF}" }], version: 1 }, call_me_hand: { id: "call_me_hand", name: "Call Me Hand", keywords: ["hands", "gesture", "shaka"], skins: [{ unified: "1f919", native: "\u{1F919}" }, { unified: "1f919-1f3fb", native: "\u{1F919}\u{1F3FB}" }, { unified: "1f919-1f3fc", native: "\u{1F919}\u{1F3FC}" }, { unified: "1f919-1f3fd", native: "\u{1F919}\u{1F3FD}" }, { unified: "1f919-1f3fe", native: "\u{1F919}\u{1F3FE}" }, { unified: "1f919-1f3ff", native: "\u{1F919}\u{1F3FF}" }], version: 3 }, point_left: { id: "point_left", name: "Backhand Index Pointing Left", keywords: ["point", "direction", "fingers", "hand"], skins: [{ unified: "1f448", native: "\u{1F448}" }, { unified: "1f448-1f3fb", native: "\u{1F448}\u{1F3FB}" }, { unified: "1f448-1f3fc", native: "\u{1F448}\u{1F3FC}" }, { unified: "1f448-1f3fd", native: "\u{1F448}\u{1F3FD}" }, { unified: "1f448-1f3fe", native: "\u{1F448}\u{1F3FE}" }, { unified: "1f448-1f3ff", native: "\u{1F448}\u{1F3FF}" }], version: 1 }, point_right: { id: "point_right", name: "Backhand Index Pointing Right", keywords: ["point", "fingers", "hand", "direction"], skins: [{ unified: "1f449", native: "\u{1F449}" }, { unified: "1f449-1f3fb", native: "\u{1F449}\u{1F3FB}" }, { unified: "1f449-1f3fc", native: "\u{1F449}\u{1F3FC}" }, { unified: "1f449-1f3fd", native: "\u{1F449}\u{1F3FD}" }, { unified: "1f449-1f3fe", native: "\u{1F449}\u{1F3FE}" }, { unified: "1f449-1f3ff", native: "\u{1F449}\u{1F3FF}" }], version: 1 }, point_up_2: { id: "point_up_2", name: "Backhand Index Pointing Up", keywords: ["point", "2", "fingers", "hand", "direction"], skins: [{ unified: "1f446", native: "\u{1F446}" }, { unified: "1f446-1f3fb", native: "\u{1F446}\u{1F3FB}" }, { unified: "1f446-1f3fc", native: "\u{1F446}\u{1F3FC}" }, { unified: "1f446-1f3fd", native: "\u{1F446}\u{1F3FD}" }, { unified: "1f446-1f3fe", native: "\u{1F446}\u{1F3FE}" }, { unified: "1f446-1f3ff", native: "\u{1F446}\u{1F3FF}" }], version: 1 }, middle_finger: { id: "middle_finger", name: "Middle Finger", keywords: ["reversed", "hand", "with", "extended", "fingers", "rude", "flipping"], skins: [{ unified: "1f595", native: "\u{1F595}" }, { unified: "1f595-1f3fb", native: "\u{1F595}\u{1F3FB}" }, { unified: "1f595-1f3fc", native: "\u{1F595}\u{1F3FC}" }, { unified: "1f595-1f3fd", native: "\u{1F595}\u{1F3FD}" }, { unified: "1f595-1f3fe", native: "\u{1F595}\u{1F3FE}" }, { unified: "1f595-1f3ff", native: "\u{1F595}\u{1F3FF}" }], version: 1 }, point_down: { id: "point_down", name: "Backhand Index Pointing Down", keywords: ["point", "fingers", "hand", "direction"], skins: [{ unified: "1f447", native: "\u{1F447}" }, { unified: "1f447-1f3fb", native: "\u{1F447}\u{1F3FB}" }, { unified: "1f447-1f3fc", native: "\u{1F447}\u{1F3FC}" }, { unified: "1f447-1f3fd", native: "\u{1F447}\u{1F3FD}" }, { unified: "1f447-1f3fe", native: "\u{1F447}\u{1F3FE}" }, { unified: "1f447-1f3ff", native: "\u{1F447}\u{1F3FF}" }], version: 1 }, point_up: { id: "point_up", name: "Index Pointing Up", keywords: ["point", "hand", "fingers", "direction"], skins: [{ unified: "261d-fe0f", native: "\u261D\uFE0F" }, { unified: "261d-1f3fb", native: "\u261D\u{1F3FB}" }, { unified: "261d-1f3fc", native: "\u261D\u{1F3FC}" }, { unified: "261d-1f3fd", native: "\u261D\u{1F3FD}" }, { unified: "261d-1f3fe", native: "\u261D\u{1F3FE}" }, { unified: "261d-1f3ff", native: "\u261D\u{1F3FF}" }], version: 1 }, index_pointing_at_the_viewer: { id: "index_pointing_at_the_viewer", name: "Index Pointing at the Viewer", keywords: ["you", "recruit"], skins: [{ unified: "1faf5", native: "\u{1FAF5}" }, { unified: "1faf5-1f3fb", native: "\u{1FAF5}\u{1F3FB}" }, { unified: "1faf5-1f3fc", native: "\u{1FAF5}\u{1F3FC}" }, { unified: "1faf5-1f3fd", native: "\u{1FAF5}\u{1F3FD}" }, { unified: "1faf5-1f3fe", native: "\u{1FAF5}\u{1F3FE}" }, { unified: "1faf5-1f3ff", native: "\u{1FAF5}\u{1F3FF}" }], version: 14 }, "+1": { id: "+1", name: "Thumbs Up", keywords: ["+1", "thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like"], skins: [{ unified: "1f44d", native: "\u{1F44D}" }, { unified: "1f44d-1f3fb", native: "\u{1F44D}\u{1F3FB}" }, { unified: "1f44d-1f3fc", native: "\u{1F44D}\u{1F3FC}" }, { unified: "1f44d-1f3fd", native: "\u{1F44D}\u{1F3FD}" }, { unified: "1f44d-1f3fe", native: "\u{1F44D}\u{1F3FE}" }, { unified: "1f44d-1f3ff", native: "\u{1F44D}\u{1F3FF}" }], version: 1 }, "-1": { id: "-1", name: "Thumbs Down", keywords: ["-1", "thumbsdown", "no", "dislike", "hand"], skins: [{ unified: "1f44e", native: "\u{1F44E}" }, { unified: "1f44e-1f3fb", native: "\u{1F44E}\u{1F3FB}" }, { unified: "1f44e-1f3fc", native: "\u{1F44E}\u{1F3FC}" }, { unified: "1f44e-1f3fd", native: "\u{1F44E}\u{1F3FD}" }, { unified: "1f44e-1f3fe", native: "\u{1F44E}\u{1F3FE}" }, { unified: "1f44e-1f3ff", native: "\u{1F44E}\u{1F3FF}" }], version: 1 }, fist: { id: "fist", name: "Raised Fist", keywords: ["fingers", "hand", "grasp"], skins: [{ unified: "270a", native: "\u270A" }, { unified: "270a-1f3fb", native: "\u270A\u{1F3FB}" }, { unified: "270a-1f3fc", native: "\u270A\u{1F3FC}" }, { unified: "270a-1f3fd", native: "\u270A\u{1F3FD}" }, { unified: "270a-1f3fe", native: "\u270A\u{1F3FE}" }, { unified: "270a-1f3ff", native: "\u270A\u{1F3FF}" }], version: 1 }, facepunch: { id: "facepunch", name: "Oncoming Fist", keywords: ["facepunch", "punch", "angry", "violence", "hit", "attack", "hand"], skins: [{ unified: "1f44a", native: "\u{1F44A}" }, { unified: "1f44a-1f3fb", native: "\u{1F44A}\u{1F3FB}" }, { unified: "1f44a-1f3fc", native: "\u{1F44A}\u{1F3FC}" }, { unified: "1f44a-1f3fd", native: "\u{1F44A}\u{1F3FD}" }, { unified: "1f44a-1f3fe", native: "\u{1F44A}\u{1F3FE}" }, { unified: "1f44a-1f3ff", native: "\u{1F44A}\u{1F3FF}" }], version: 1 }, "left-facing_fist": { id: "left-facing_fist", name: "Left-Facing Fist", keywords: ["left", "facing", "hand", "fistbump"], skins: [{ unified: "1f91b", native: "\u{1F91B}" }, { unified: "1f91b-1f3fb", native: "\u{1F91B}\u{1F3FB}" }, { unified: "1f91b-1f3fc", native: "\u{1F91B}\u{1F3FC}" }, { unified: "1f91b-1f3fd", native: "\u{1F91B}\u{1F3FD}" }, { unified: "1f91b-1f3fe", native: "\u{1F91B}\u{1F3FE}" }, { unified: "1f91b-1f3ff", native: "\u{1F91B}\u{1F3FF}" }], version: 3 }, "right-facing_fist": { id: "right-facing_fist", name: "Right-Facing Fist", keywords: ["right", "facing", "hand", "fistbump"], skins: [{ unified: "1f91c", native: "\u{1F91C}" }, { unified: "1f91c-1f3fb", native: "\u{1F91C}\u{1F3FB}" }, { unified: "1f91c-1f3fc", native: "\u{1F91C}\u{1F3FC}" }, { unified: "1f91c-1f3fd", native: "\u{1F91C}\u{1F3FD}" }, { unified: "1f91c-1f3fe", native: "\u{1F91C}\u{1F3FE}" }, { unified: "1f91c-1f3ff", native: "\u{1F91C}\u{1F3FF}" }], version: 3 }, clap: { id: "clap", name: "Clapping Hands", keywords: ["clap", "praise", "applause", "congrats", "yay"], skins: [{ unified: "1f44f", native: "\u{1F44F}" }, { unified: "1f44f-1f3fb", native: "\u{1F44F}\u{1F3FB}" }, { unified: "1f44f-1f3fc", native: "\u{1F44F}\u{1F3FC}" }, { unified: "1f44f-1f3fd", native: "\u{1F44F}\u{1F3FD}" }, { unified: "1f44f-1f3fe", native: "\u{1F44F}\u{1F3FE}" }, { unified: "1f44f-1f3ff", native: "\u{1F44F}\u{1F3FF}" }], version: 1 }, raised_hands: { id: "raised_hands", name: "Raising Hands", keywords: ["raised", "gesture", "hooray", "yea", "celebration"], skins: [{ unified: "1f64c", native: "\u{1F64C}" }, { unified: "1f64c-1f3fb", native: "\u{1F64C}\u{1F3FB}" }, { unified: "1f64c-1f3fc", native: "\u{1F64C}\u{1F3FC}" }, { unified: "1f64c-1f3fd", native: "\u{1F64C}\u{1F3FD}" }, { unified: "1f64c-1f3fe", native: "\u{1F64C}\u{1F3FE}" }, { unified: "1f64c-1f3ff", native: "\u{1F64C}\u{1F3FF}" }], version: 1 }, heart_hands: { id: "heart_hands", name: "Heart Hands", keywords: ["love", "appreciation", "support"], skins: [{ unified: "1faf6", native: "\u{1FAF6}" }, { unified: "1faf6-1f3fb", native: "\u{1FAF6}\u{1F3FB}" }, { unified: "1faf6-1f3fc", native: "\u{1FAF6}\u{1F3FC}" }, { unified: "1faf6-1f3fd", native: "\u{1FAF6}\u{1F3FD}" }, { unified: "1faf6-1f3fe", native: "\u{1FAF6}\u{1F3FE}" }, { unified: "1faf6-1f3ff", native: "\u{1FAF6}\u{1F3FF}" }], version: 14 }, open_hands: { id: "open_hands", name: "Open Hands", keywords: ["fingers", "butterfly"], skins: [{ unified: "1f450", native: "\u{1F450}" }, { unified: "1f450-1f3fb", native: "\u{1F450}\u{1F3FB}" }, { unified: "1f450-1f3fc", native: "\u{1F450}\u{1F3FC}" }, { unified: "1f450-1f3fd", native: "\u{1F450}\u{1F3FD}" }, { unified: "1f450-1f3fe", native: "\u{1F450}\u{1F3FE}" }, { unified: "1f450-1f3ff", native: "\u{1F450}\u{1F3FF}" }], version: 1 }, palms_up_together: { id: "palms_up_together", name: "Palms Up Together", keywords: ["hands", "gesture", "cupped", "prayer"], skins: [{ unified: "1f932", native: "\u{1F932}" }, { unified: "1f932-1f3fb", native: "\u{1F932}\u{1F3FB}" }, { unified: "1f932-1f3fc", native: "\u{1F932}\u{1F3FC}" }, { unified: "1f932-1f3fd", native: "\u{1F932}\u{1F3FD}" }, { unified: "1f932-1f3fe", native: "\u{1F932}\u{1F3FE}" }, { unified: "1f932-1f3ff", native: "\u{1F932}\u{1F3FF}" }], version: 5 }, handshake: { id: "handshake", name: "Handshake", keywords: ["agreement", "shake"], skins: [{ unified: "1f91d", native: "\u{1F91D}" }, { unified: "1f91d-1f3fb", native: "\u{1F91D}\u{1F3FB}" }, { unified: "1f91d-1f3fc", native: "\u{1F91D}\u{1F3FC}" }, { unified: "1f91d-1f3fd", native: "\u{1F91D}\u{1F3FD}" }, { unified: "1f91d-1f3fe", native: "\u{1F91D}\u{1F3FE}" }, { unified: "1f91d-1f3ff", native: "\u{1F91D}\u{1F3FF}" }], version: 3 }, pray: { id: "pray", name: "Folded Hands", keywords: ["pray", "please", "hope", "wish", "namaste", "highfive", "high", "five", "thank", "you", "thanks", "appreciate"], skins: [{ unified: "1f64f", native: "\u{1F64F}" }, { unified: "1f64f-1f3fb", native: "\u{1F64F}\u{1F3FB}" }, { unified: "1f64f-1f3fc", native: "\u{1F64F}\u{1F3FC}" }, { unified: "1f64f-1f3fd", native: "\u{1F64F}\u{1F3FD}" }, { unified: "1f64f-1f3fe", native: "\u{1F64F}\u{1F3FE}" }, { unified: "1f64f-1f3ff", native: "\u{1F64F}\u{1F3FF}" }], version: 1 }, writing_hand: { id: "writing_hand", name: "Writing Hand", keywords: ["lower", "left", "ballpoint", "pen", "stationery", "write", "compose"], skins: [{ unified: "270d-fe0f", native: "\u270D\uFE0F" }, { unified: "270d-1f3fb", native: "\u270D\u{1F3FB}" }, { unified: "270d-1f3fc", native: "\u270D\u{1F3FC}" }, { unified: "270d-1f3fd", native: "\u270D\u{1F3FD}" }, { unified: "270d-1f3fe", native: "\u270D\u{1F3FE}" }, { unified: "270d-1f3ff", native: "\u270D\u{1F3FF}" }], version: 1 }, nail_care: { id: "nail_care", name: "Nail Polish", keywords: ["care", "beauty", "manicure", "finger", "fashion"], skins: [{ unified: "1f485", native: "\u{1F485}" }, { unified: "1f485-1f3fb", native: "\u{1F485}\u{1F3FB}" }, { unified: "1f485-1f3fc", native: "\u{1F485}\u{1F3FC}" }, { unified: "1f485-1f3fd", native: "\u{1F485}\u{1F3FD}" }, { unified: "1f485-1f3fe", native: "\u{1F485}\u{1F3FE}" }, { unified: "1f485-1f3ff", native: "\u{1F485}\u{1F3FF}" }], version: 1 }, selfie: { id: "selfie", name: "Selfie", keywords: ["camera", "phone"], skins: [{ unified: "1f933", native: "\u{1F933}" }, { unified: "1f933-1f3fb", native: "\u{1F933}\u{1F3FB}" }, { unified: "1f933-1f3fc", native: "\u{1F933}\u{1F3FC}" }, { unified: "1f933-1f3fd", native: "\u{1F933}\u{1F3FD}" }, { unified: "1f933-1f3fe", native: "\u{1F933}\u{1F3FE}" }, { unified: "1f933-1f3ff", native: "\u{1F933}\u{1F3FF}" }], version: 3 }, muscle: { id: "muscle", name: "Flexed Biceps", keywords: ["muscle", "arm", "flex", "hand", "summer", "strong"], skins: [{ unified: "1f4aa", native: "\u{1F4AA}" }, { unified: "1f4aa-1f3fb", native: "\u{1F4AA}\u{1F3FB}" }, { unified: "1f4aa-1f3fc", native: "\u{1F4AA}\u{1F3FC}" }, { unified: "1f4aa-1f3fd", native: "\u{1F4AA}\u{1F3FD}" }, { unified: "1f4aa-1f3fe", native: "\u{1F4AA}\u{1F3FE}" }, { unified: "1f4aa-1f3ff", native: "\u{1F4AA}\u{1F3FF}" }], version: 1 }, mechanical_arm: { id: "mechanical_arm", name: "Mechanical Arm", keywords: ["accessibility"], skins: [{ unified: "1f9be", native: "\u{1F9BE}" }], version: 12 }, mechanical_leg: { id: "mechanical_leg", name: "Mechanical Leg", keywords: ["accessibility"], skins: [{ unified: "1f9bf", native: "\u{1F9BF}" }], version: 12 }, leg: { id: "leg", name: "Leg", keywords: ["kick", "limb"], skins: [{ unified: "1f9b5", native: "\u{1F9B5}" }, { unified: "1f9b5-1f3fb", native: "\u{1F9B5}\u{1F3FB}" }, { unified: "1f9b5-1f3fc", native: "\u{1F9B5}\u{1F3FC}" }, { unified: "1f9b5-1f3fd", native: "\u{1F9B5}\u{1F3FD}" }, { unified: "1f9b5-1f3fe", native: "\u{1F9B5}\u{1F3FE}" }, { unified: "1f9b5-1f3ff", native: "\u{1F9B5}\u{1F3FF}" }], version: 11 }, foot: { id: "foot", name: "Foot", keywords: ["kick", "stomp"], skins: [{ unified: "1f9b6", native: "\u{1F9B6}" }, { unified: "1f9b6-1f3fb", native: "\u{1F9B6}\u{1F3FB}" }, { unified: "1f9b6-1f3fc", native: "\u{1F9B6}\u{1F3FC}" }, { unified: "1f9b6-1f3fd", native: "\u{1F9B6}\u{1F3FD}" }, { unified: "1f9b6-1f3fe", native: "\u{1F9B6}\u{1F3FE}" }, { unified: "1f9b6-1f3ff", native: "\u{1F9B6}\u{1F3FF}" }], version: 11 }, ear: { id: "ear", name: "Ear", keywords: ["face", "hear", "sound", "listen"], skins: [{ unified: "1f442", native: "\u{1F442}" }, { unified: "1f442-1f3fb", native: "\u{1F442}\u{1F3FB}" }, { unified: "1f442-1f3fc", native: "\u{1F442}\u{1F3FC}" }, { unified: "1f442-1f3fd", native: "\u{1F442}\u{1F3FD}" }, { unified: "1f442-1f3fe", native: "\u{1F442}\u{1F3FE}" }, { unified: "1f442-1f3ff", native: "\u{1F442}\u{1F3FF}" }], version: 1 }, ear_with_hearing_aid: { id: "ear_with_hearing_aid", name: "Ear with Hearing Aid", keywords: ["accessibility"], skins: [{ unified: "1f9bb", native: "\u{1F9BB}" }, { unified: "1f9bb-1f3fb", native: "\u{1F9BB}\u{1F3FB}" }, { unified: "1f9bb-1f3fc", native: "\u{1F9BB}\u{1F3FC}" }, { unified: "1f9bb-1f3fd", native: "\u{1F9BB}\u{1F3FD}" }, { unified: "1f9bb-1f3fe", native: "\u{1F9BB}\u{1F3FE}" }, { unified: "1f9bb-1f3ff", native: "\u{1F9BB}\u{1F3FF}" }], version: 12 }, nose: { id: "nose", name: "Nose", keywords: ["smell", "sniff"], skins: [{ unified: "1f443", native: "\u{1F443}" }, { unified: "1f443-1f3fb", native: "\u{1F443}\u{1F3FB}" }, { unified: "1f443-1f3fc", native: "\u{1F443}\u{1F3FC}" }, { unified: "1f443-1f3fd", native: "\u{1F443}\u{1F3FD}" }, { unified: "1f443-1f3fe", native: "\u{1F443}\u{1F3FE}" }, { unified: "1f443-1f3ff", native: "\u{1F443}\u{1F3FF}" }], version: 1 }, brain: { id: "brain", name: "Brain", keywords: ["smart", "intelligent"], skins: [{ unified: "1f9e0", native: "\u{1F9E0}" }], version: 5 }, anatomical_heart: { id: "anatomical_heart", name: "Anatomical Heart", keywords: ["health", "heartbeat"], skins: [{ unified: "1fac0", native: "\u{1FAC0}" }], version: 13 }, lungs: { id: "lungs", name: "Lungs", keywords: ["breathe"], skins: [{ unified: "1fac1", native: "\u{1FAC1}" }], version: 13 }, tooth: { id: "tooth", name: "Tooth", keywords: ["teeth", "dentist"], skins: [{ unified: "1f9b7", native: "\u{1F9B7}" }], version: 11 }, bone: { id: "bone", name: "Bone", keywords: ["skeleton"], skins: [{ unified: "1f9b4", native: "\u{1F9B4}" }], version: 11 }, eyes: { id: "eyes", name: "Eyes", keywords: ["look", "watch", "stalk", "peek", "see"], skins: [{ unified: "1f440", native: "\u{1F440}" }], version: 1 }, eye: { id: "eye", name: "Eye", keywords: ["face", "look", "see", "watch", "stare"], skins: [{ unified: "1f441-fe0f", native: "\u{1F441}\uFE0F" }], version: 1 }, tongue: { id: "tongue", name: "Tongue", keywords: ["mouth", "playful"], skins: [{ unified: "1f445", native: "\u{1F445}" }], version: 1 }, lips: { id: "lips", name: "Mouth", keywords: ["lips", "kiss"], skins: [{ unified: "1f444", native: "\u{1F444}" }], version: 1 }, biting_lip: { id: "biting_lip", name: "Biting Lip", keywords: ["flirt", "sexy", "pain", "worry"], skins: [{ unified: "1fae6", native: "\u{1FAE6}" }], version: 14 }, baby: { id: "baby", name: "Baby", keywords: ["child", "boy", "girl", "toddler"], skins: [{ unified: "1f476", native: "\u{1F476}" }, { unified: "1f476-1f3fb", native: "\u{1F476}\u{1F3FB}" }, { unified: "1f476-1f3fc", native: "\u{1F476}\u{1F3FC}" }, { unified: "1f476-1f3fd", native: "\u{1F476}\u{1F3FD}" }, { unified: "1f476-1f3fe", native: "\u{1F476}\u{1F3FE}" }, { unified: "1f476-1f3ff", native: "\u{1F476}\u{1F3FF}" }], version: 1 }, child: { id: "child", name: "Child", keywords: ["gender", "neutral", "young"], skins: [{ unified: "1f9d2", native: "\u{1F9D2}" }, { unified: "1f9d2-1f3fb", native: "\u{1F9D2}\u{1F3FB}" }, { unified: "1f9d2-1f3fc", native: "\u{1F9D2}\u{1F3FC}" }, { unified: "1f9d2-1f3fd", native: "\u{1F9D2}\u{1F3FD}" }, { unified: "1f9d2-1f3fe", native: "\u{1F9D2}\u{1F3FE}" }, { unified: "1f9d2-1f3ff", native: "\u{1F9D2}\u{1F3FF}" }], version: 5 }, boy: { id: "boy", name: "Boy", keywords: ["man", "male", "guy", "teenager"], skins: [{ unified: "1f466", native: "\u{1F466}" }, { unified: "1f466-1f3fb", native: "\u{1F466}\u{1F3FB}" }, { unified: "1f466-1f3fc", native: "\u{1F466}\u{1F3FC}" }, { unified: "1f466-1f3fd", native: "\u{1F466}\u{1F3FD}" }, { unified: "1f466-1f3fe", native: "\u{1F466}\u{1F3FE}" }, { unified: "1f466-1f3ff", native: "\u{1F466}\u{1F3FF}" }], version: 1 }, girl: { id: "girl", name: "Girl", keywords: ["female", "woman", "teenager"], skins: [{ unified: "1f467", native: "\u{1F467}" }, { unified: "1f467-1f3fb", native: "\u{1F467}\u{1F3FB}" }, { unified: "1f467-1f3fc", native: "\u{1F467}\u{1F3FC}" }, { unified: "1f467-1f3fd", native: "\u{1F467}\u{1F3FD}" }, { unified: "1f467-1f3fe", native: "\u{1F467}\u{1F3FE}" }, { unified: "1f467-1f3ff", native: "\u{1F467}\u{1F3FF}" }], version: 1 }, adult: { id: "adult", name: "Adult", keywords: ["person", "gender", "neutral"], skins: [{ unified: "1f9d1", native: "\u{1F9D1}" }, { unified: "1f9d1-1f3fb", native: "\u{1F9D1}\u{1F3FB}" }, { unified: "1f9d1-1f3fc", native: "\u{1F9D1}\u{1F3FC}" }, { unified: "1f9d1-1f3fd", native: "\u{1F9D1}\u{1F3FD}" }, { unified: "1f9d1-1f3fe", native: "\u{1F9D1}\u{1F3FE}" }, { unified: "1f9d1-1f3ff", native: "\u{1F9D1}\u{1F3FF}" }], version: 5 }, person_with_blond_hair: { id: "person_with_blond_hair", name: "Person Blond Hair", keywords: ["with", "hairstyle"], skins: [{ unified: "1f471", native: "\u{1F471}" }, { unified: "1f471-1f3fb", native: "\u{1F471}\u{1F3FB}" }, { unified: "1f471-1f3fc", native: "\u{1F471}\u{1F3FC}" }, { unified: "1f471-1f3fd", native: "\u{1F471}\u{1F3FD}" }, { unified: "1f471-1f3fe", native: "\u{1F471}\u{1F3FE}" }, { unified: "1f471-1f3ff", native: "\u{1F471}\u{1F3FF}" }], version: 1 }, man: { id: "man", name: "Man", keywords: ["mustache", "father", "dad", "guy", "classy", "sir", "moustache"], skins: [{ unified: "1f468", native: "\u{1F468}" }, { unified: "1f468-1f3fb", native: "\u{1F468}\u{1F3FB}" }, { unified: "1f468-1f3fc", native: "\u{1F468}\u{1F3FC}" }, { unified: "1f468-1f3fd", native: "\u{1F468}\u{1F3FD}" }, { unified: "1f468-1f3fe", native: "\u{1F468}\u{1F3FE}" }, { unified: "1f468-1f3ff", native: "\u{1F468}\u{1F3FF}" }], version: 1 }, bearded_person: { id: "bearded_person", name: "Person Beard", keywords: ["bearded", "man", "bewhiskered"], skins: [{ unified: "1f9d4", native: "\u{1F9D4}" }, { unified: "1f9d4-1f3fb", native: "\u{1F9D4}\u{1F3FB}" }, { unified: "1f9d4-1f3fc", native: "\u{1F9D4}\u{1F3FC}" }, { unified: "1f9d4-1f3fd", native: "\u{1F9D4}\u{1F3FD}" }, { unified: "1f9d4-1f3fe", native: "\u{1F9D4}\u{1F3FE}" }, { unified: "1f9d4-1f3ff", native: "\u{1F9D4}\u{1F3FF}" }], version: 5 }, man_with_beard: { id: "man_with_beard", name: "Man: Beard", keywords: ["man", "with", "facial", "hair"], skins: [{ unified: "1f9d4-200d-2642-fe0f", native: "\u{1F9D4}\u200D\u2642\uFE0F" }, { unified: "1f9d4-1f3fb-200d-2642-fe0f", native: "\u{1F9D4}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9d4-1f3fc-200d-2642-fe0f", native: "\u{1F9D4}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9d4-1f3fd-200d-2642-fe0f", native: "\u{1F9D4}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9d4-1f3fe-200d-2642-fe0f", native: "\u{1F9D4}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9d4-1f3ff-200d-2642-fe0f", native: "\u{1F9D4}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 13.1 }, woman_with_beard: { id: "woman_with_beard", name: "Woman: Beard", keywords: ["woman", "with", "facial", "hair"], skins: [{ unified: "1f9d4-200d-2640-fe0f", native: "\u{1F9D4}\u200D\u2640\uFE0F" }, { unified: "1f9d4-1f3fb-200d-2640-fe0f", native: "\u{1F9D4}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9d4-1f3fc-200d-2640-fe0f", native: "\u{1F9D4}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9d4-1f3fd-200d-2640-fe0f", native: "\u{1F9D4}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9d4-1f3fe-200d-2640-fe0f", native: "\u{1F9D4}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9d4-1f3ff-200d-2640-fe0f", native: "\u{1F9D4}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 13.1 }, red_haired_man: { id: "red_haired_man", name: "Man: Red Hair", keywords: ["haired", "man", "hairstyle"], skins: [{ unified: "1f468-200d-1f9b0", native: "\u{1F468}\u200D\u{1F9B0}" }, { unified: "1f468-1f3fb-200d-1f9b0", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9B0}" }, { unified: "1f468-1f3fc-200d-1f9b0", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9B0}" }, { unified: "1f468-1f3fd-200d-1f9b0", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9B0}" }, { unified: "1f468-1f3fe-200d-1f9b0", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9B0}" }, { unified: "1f468-1f3ff-200d-1f9b0", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9B0}" }], version: 11 }, curly_haired_man: { id: "curly_haired_man", name: "Man: Curly Hair", keywords: ["haired", "man", "hairstyle"], skins: [{ unified: "1f468-200d-1f9b1", native: "\u{1F468}\u200D\u{1F9B1}" }, { unified: "1f468-1f3fb-200d-1f9b1", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9B1}" }, { unified: "1f468-1f3fc-200d-1f9b1", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9B1}" }, { unified: "1f468-1f3fd-200d-1f9b1", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9B1}" }, { unified: "1f468-1f3fe-200d-1f9b1", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9B1}" }, { unified: "1f468-1f3ff-200d-1f9b1", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9B1}" }], version: 11 }, white_haired_man: { id: "white_haired_man", name: "Man: White Hair", keywords: ["haired", "man", "old", "elder"], skins: [{ unified: "1f468-200d-1f9b3", native: "\u{1F468}\u200D\u{1F9B3}" }, { unified: "1f468-1f3fb-200d-1f9b3", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9B3}" }, { unified: "1f468-1f3fc-200d-1f9b3", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9B3}" }, { unified: "1f468-1f3fd-200d-1f9b3", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9B3}" }, { unified: "1f468-1f3fe-200d-1f9b3", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9B3}" }, { unified: "1f468-1f3ff-200d-1f9b3", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9B3}" }], version: 11 }, bald_man: { id: "bald_man", name: "Man: Bald", keywords: ["man", "hairless"], skins: [{ unified: "1f468-200d-1f9b2", native: "\u{1F468}\u200D\u{1F9B2}" }, { unified: "1f468-1f3fb-200d-1f9b2", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9B2}" }, { unified: "1f468-1f3fc-200d-1f9b2", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9B2}" }, { unified: "1f468-1f3fd-200d-1f9b2", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9B2}" }, { unified: "1f468-1f3fe-200d-1f9b2", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9B2}" }, { unified: "1f468-1f3ff-200d-1f9b2", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9B2}" }], version: 11 }, woman: { id: "woman", name: "Woman", keywords: ["female", "girls", "lady"], skins: [{ unified: "1f469", native: "\u{1F469}" }, { unified: "1f469-1f3fb", native: "\u{1F469}\u{1F3FB}" }, { unified: "1f469-1f3fc", native: "\u{1F469}\u{1F3FC}" }, { unified: "1f469-1f3fd", native: "\u{1F469}\u{1F3FD}" }, { unified: "1f469-1f3fe", native: "\u{1F469}\u{1F3FE}" }, { unified: "1f469-1f3ff", native: "\u{1F469}\u{1F3FF}" }], version: 1 }, red_haired_woman: { id: "red_haired_woman", name: "Woman: Red Hair", keywords: ["haired", "woman", "hairstyle"], skins: [{ unified: "1f469-200d-1f9b0", native: "\u{1F469}\u200D\u{1F9B0}" }, { unified: "1f469-1f3fb-200d-1f9b0", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9B0}" }, { unified: "1f469-1f3fc-200d-1f9b0", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9B0}" }, { unified: "1f469-1f3fd-200d-1f9b0", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9B0}" }, { unified: "1f469-1f3fe-200d-1f9b0", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9B0}" }, { unified: "1f469-1f3ff-200d-1f9b0", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9B0}" }], version: 11 }, red_haired_person: { id: "red_haired_person", name: "Person: Red Hair", keywords: ["haired", "person", "hairstyle"], skins: [{ unified: "1f9d1-200d-1f9b0", native: "\u{1F9D1}\u200D\u{1F9B0}" }, { unified: "1f9d1-1f3fb-200d-1f9b0", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B0}" }, { unified: "1f9d1-1f3fc-200d-1f9b0", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B0}" }, { unified: "1f9d1-1f3fd-200d-1f9b0", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B0}" }, { unified: "1f9d1-1f3fe-200d-1f9b0", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B0}" }, { unified: "1f9d1-1f3ff-200d-1f9b0", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B0}" }], version: 12.1 }, curly_haired_woman: { id: "curly_haired_woman", name: "Woman: Curly Hair", keywords: ["haired", "woman", "hairstyle"], skins: [{ unified: "1f469-200d-1f9b1", native: "\u{1F469}\u200D\u{1F9B1}" }, { unified: "1f469-1f3fb-200d-1f9b1", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9B1}" }, { unified: "1f469-1f3fc-200d-1f9b1", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}" }, { unified: "1f469-1f3fd-200d-1f9b1", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9B1}" }, { unified: "1f469-1f3fe-200d-1f9b1", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9B1}" }, { unified: "1f469-1f3ff-200d-1f9b1", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9B1}" }], version: 11 }, curly_haired_person: { id: "curly_haired_person", name: "Person: Curly Hair", keywords: ["haired", "person", "hairstyle"], skins: [{ unified: "1f9d1-200d-1f9b1", native: "\u{1F9D1}\u200D\u{1F9B1}" }, { unified: "1f9d1-1f3fb-200d-1f9b1", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B1}" }, { unified: "1f9d1-1f3fc-200d-1f9b1", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}" }, { unified: "1f9d1-1f3fd-200d-1f9b1", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B1}" }, { unified: "1f9d1-1f3fe-200d-1f9b1", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B1}" }, { unified: "1f9d1-1f3ff-200d-1f9b1", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B1}" }], version: 12.1 }, white_haired_woman: { id: "white_haired_woman", name: "Woman: White Hair", keywords: ["haired", "woman", "old", "elder"], skins: [{ unified: "1f469-200d-1f9b3", native: "\u{1F469}\u200D\u{1F9B3}" }, { unified: "1f469-1f3fb-200d-1f9b3", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9B3}" }, { unified: "1f469-1f3fc-200d-1f9b3", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9B3}" }, { unified: "1f469-1f3fd-200d-1f9b3", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9B3}" }, { unified: "1f469-1f3fe-200d-1f9b3", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9B3}" }, { unified: "1f469-1f3ff-200d-1f9b3", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9B3}" }], version: 11 }, white_haired_person: { id: "white_haired_person", name: "Person: White Hair", keywords: ["haired", "person", "elder", "old"], skins: [{ unified: "1f9d1-200d-1f9b3", native: "\u{1F9D1}\u200D\u{1F9B3}" }, { unified: "1f9d1-1f3fb-200d-1f9b3", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B3}" }, { unified: "1f9d1-1f3fc-200d-1f9b3", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B3}" }, { unified: "1f9d1-1f3fd-200d-1f9b3", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B3}" }, { unified: "1f9d1-1f3fe-200d-1f9b3", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B3}" }, { unified: "1f9d1-1f3ff-200d-1f9b3", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B3}" }], version: 12.1 }, bald_woman: { id: "bald_woman", name: "Woman: Bald", keywords: ["woman", "hairless"], skins: [{ unified: "1f469-200d-1f9b2", native: "\u{1F469}\u200D\u{1F9B2}" }, { unified: "1f469-1f3fb-200d-1f9b2", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9B2}" }, { unified: "1f469-1f3fc-200d-1f9b2", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9B2}" }, { unified: "1f469-1f3fd-200d-1f9b2", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9B2}" }, { unified: "1f469-1f3fe-200d-1f9b2", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9B2}" }, { unified: "1f469-1f3ff-200d-1f9b2", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9B2}" }], version: 11 }, bald_person: { id: "bald_person", name: "Person: Bald", keywords: ["person", "hairless"], skins: [{ unified: "1f9d1-200d-1f9b2", native: "\u{1F9D1}\u200D\u{1F9B2}" }, { unified: "1f9d1-1f3fb-200d-1f9b2", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B2}" }, { unified: "1f9d1-1f3fc-200d-1f9b2", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B2}" }, { unified: "1f9d1-1f3fd-200d-1f9b2", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B2}" }, { unified: "1f9d1-1f3fe-200d-1f9b2", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B2}" }, { unified: "1f9d1-1f3ff-200d-1f9b2", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B2}" }], version: 12.1 }, "blond-haired-woman": { id: "blond-haired-woman", name: "Woman: Blond Hair", keywords: ["haired-woman", "woman", "female", "girl", "blonde", "person"], skins: [{ unified: "1f471-200d-2640-fe0f", native: "\u{1F471}\u200D\u2640\uFE0F" }, { unified: "1f471-1f3fb-200d-2640-fe0f", native: "\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f471-1f3fc-200d-2640-fe0f", native: "\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f471-1f3fd-200d-2640-fe0f", native: "\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f471-1f3fe-200d-2640-fe0f", native: "\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f471-1f3ff-200d-2640-fe0f", native: "\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, "blond-haired-man": { id: "blond-haired-man", name: "Man: Blond Hair", keywords: ["haired-man", "man", "male", "boy", "blonde", "guy", "person"], skins: [{ unified: "1f471-200d-2642-fe0f", native: "\u{1F471}\u200D\u2642\uFE0F" }, { unified: "1f471-1f3fb-200d-2642-fe0f", native: "\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f471-1f3fc-200d-2642-fe0f", native: "\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f471-1f3fd-200d-2642-fe0f", native: "\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f471-1f3fe-200d-2642-fe0f", native: "\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f471-1f3ff-200d-2642-fe0f", native: "\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, older_adult: { id: "older_adult", name: "Older Adult", keywords: ["person", "human", "elder", "senior", "gender", "neutral"], skins: [{ unified: "1f9d3", native: "\u{1F9D3}" }, { unified: "1f9d3-1f3fb", native: "\u{1F9D3}\u{1F3FB}" }, { unified: "1f9d3-1f3fc", native: "\u{1F9D3}\u{1F3FC}" }, { unified: "1f9d3-1f3fd", native: "\u{1F9D3}\u{1F3FD}" }, { unified: "1f9d3-1f3fe", native: "\u{1F9D3}\u{1F3FE}" }, { unified: "1f9d3-1f3ff", native: "\u{1F9D3}\u{1F3FF}" }], version: 5 }, older_man: { id: "older_man", name: "Old Man", keywords: ["older", "human", "male", "men", "elder", "senior"], skins: [{ unified: "1f474", native: "\u{1F474}" }, { unified: "1f474-1f3fb", native: "\u{1F474}\u{1F3FB}" }, { unified: "1f474-1f3fc", native: "\u{1F474}\u{1F3FC}" }, { unified: "1f474-1f3fd", native: "\u{1F474}\u{1F3FD}" }, { unified: "1f474-1f3fe", native: "\u{1F474}\u{1F3FE}" }, { unified: "1f474-1f3ff", native: "\u{1F474}\u{1F3FF}" }], version: 1 }, older_woman: { id: "older_woman", name: "Old Woman", keywords: ["older", "human", "female", "women", "lady", "elder", "senior"], skins: [{ unified: "1f475", native: "\u{1F475}" }, { unified: "1f475-1f3fb", native: "\u{1F475}\u{1F3FB}" }, { unified: "1f475-1f3fc", native: "\u{1F475}\u{1F3FC}" }, { unified: "1f475-1f3fd", native: "\u{1F475}\u{1F3FD}" }, { unified: "1f475-1f3fe", native: "\u{1F475}\u{1F3FE}" }, { unified: "1f475-1f3ff", native: "\u{1F475}\u{1F3FF}" }], version: 1 }, person_frowning: { id: "person_frowning", name: "Person Frowning", keywords: ["worried"], skins: [{ unified: "1f64d", native: "\u{1F64D}" }, { unified: "1f64d-1f3fb", native: "\u{1F64D}\u{1F3FB}" }, { unified: "1f64d-1f3fc", native: "\u{1F64D}\u{1F3FC}" }, { unified: "1f64d-1f3fd", native: "\u{1F64D}\u{1F3FD}" }, { unified: "1f64d-1f3fe", native: "\u{1F64D}\u{1F3FE}" }, { unified: "1f64d-1f3ff", native: "\u{1F64D}\u{1F3FF}" }], version: 1 }, "man-frowning": { id: "man-frowning", name: "Man Frowning", keywords: ["male", "boy", "sad", "depressed", "discouraged", "unhappy"], skins: [{ unified: "1f64d-200d-2642-fe0f", native: "\u{1F64D}\u200D\u2642\uFE0F" }, { unified: "1f64d-1f3fb-200d-2642-fe0f", native: "\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f64d-1f3fc-200d-2642-fe0f", native: "\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f64d-1f3fd-200d-2642-fe0f", native: "\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f64d-1f3fe-200d-2642-fe0f", native: "\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f64d-1f3ff-200d-2642-fe0f", native: "\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-frowning": { id: "woman-frowning", name: "Woman Frowning", keywords: ["female", "girl", "sad", "depressed", "discouraged", "unhappy"], skins: [{ unified: "1f64d-200d-2640-fe0f", native: "\u{1F64D}\u200D\u2640\uFE0F" }, { unified: "1f64d-1f3fb-200d-2640-fe0f", native: "\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f64d-1f3fc-200d-2640-fe0f", native: "\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f64d-1f3fd-200d-2640-fe0f", native: "\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f64d-1f3fe-200d-2640-fe0f", native: "\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f64d-1f3ff-200d-2640-fe0f", native: "\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, person_with_pouting_face: { id: "person_with_pouting_face", name: "Person Pouting", keywords: ["with", "face", "upset"], skins: [{ unified: "1f64e", native: "\u{1F64E}" }, { unified: "1f64e-1f3fb", native: "\u{1F64E}\u{1F3FB}" }, { unified: "1f64e-1f3fc", native: "\u{1F64E}\u{1F3FC}" }, { unified: "1f64e-1f3fd", native: "\u{1F64E}\u{1F3FD}" }, { unified: "1f64e-1f3fe", native: "\u{1F64E}\u{1F3FE}" }, { unified: "1f64e-1f3ff", native: "\u{1F64E}\u{1F3FF}" }], version: 1 }, "man-pouting": { id: "man-pouting", name: "Man Pouting", keywords: ["male", "boy"], skins: [{ unified: "1f64e-200d-2642-fe0f", native: "\u{1F64E}\u200D\u2642\uFE0F" }, { unified: "1f64e-1f3fb-200d-2642-fe0f", native: "\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f64e-1f3fc-200d-2642-fe0f", native: "\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f64e-1f3fd-200d-2642-fe0f", native: "\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f64e-1f3fe-200d-2642-fe0f", native: "\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f64e-1f3ff-200d-2642-fe0f", native: "\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-pouting": { id: "woman-pouting", name: "Woman Pouting", keywords: ["female", "girl"], skins: [{ unified: "1f64e-200d-2640-fe0f", native: "\u{1F64E}\u200D\u2640\uFE0F" }, { unified: "1f64e-1f3fb-200d-2640-fe0f", native: "\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f64e-1f3fc-200d-2640-fe0f", native: "\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f64e-1f3fd-200d-2640-fe0f", native: "\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f64e-1f3fe-200d-2640-fe0f", native: "\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f64e-1f3ff-200d-2640-fe0f", native: "\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, no_good: { id: "no_good", name: "Person Gesturing No", keywords: ["good", "decline"], skins: [{ unified: "1f645", native: "\u{1F645}" }, { unified: "1f645-1f3fb", native: "\u{1F645}\u{1F3FB}" }, { unified: "1f645-1f3fc", native: "\u{1F645}\u{1F3FC}" }, { unified: "1f645-1f3fd", native: "\u{1F645}\u{1F3FD}" }, { unified: "1f645-1f3fe", native: "\u{1F645}\u{1F3FE}" }, { unified: "1f645-1f3ff", native: "\u{1F645}\u{1F3FF}" }], version: 1 }, "man-gesturing-no": { id: "man-gesturing-no", name: "Man Gesturing No", keywords: ["gesturing-no", "male", "boy", "nope"], skins: [{ unified: "1f645-200d-2642-fe0f", native: "\u{1F645}\u200D\u2642\uFE0F" }, { unified: "1f645-1f3fb-200d-2642-fe0f", native: "\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f645-1f3fc-200d-2642-fe0f", native: "\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f645-1f3fd-200d-2642-fe0f", native: "\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f645-1f3fe-200d-2642-fe0f", native: "\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f645-1f3ff-200d-2642-fe0f", native: "\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-gesturing-no": { id: "woman-gesturing-no", name: "Woman Gesturing No", keywords: ["gesturing-no", "female", "girl", "nope"], skins: [{ unified: "1f645-200d-2640-fe0f", native: "\u{1F645}\u200D\u2640\uFE0F" }, { unified: "1f645-1f3fb-200d-2640-fe0f", native: "\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f645-1f3fc-200d-2640-fe0f", native: "\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f645-1f3fd-200d-2640-fe0f", native: "\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f645-1f3fe-200d-2640-fe0f", native: "\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f645-1f3ff-200d-2640-fe0f", native: "\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, ok_woman: { id: "ok_woman", name: "Person Gesturing Ok", keywords: ["woman", "agree"], skins: [{ unified: "1f646", native: "\u{1F646}" }, { unified: "1f646-1f3fb", native: "\u{1F646}\u{1F3FB}" }, { unified: "1f646-1f3fc", native: "\u{1F646}\u{1F3FC}" }, { unified: "1f646-1f3fd", native: "\u{1F646}\u{1F3FD}" }, { unified: "1f646-1f3fe", native: "\u{1F646}\u{1F3FE}" }, { unified: "1f646-1f3ff", native: "\u{1F646}\u{1F3FF}" }], version: 1 }, "man-gesturing-ok": { id: "man-gesturing-ok", name: "Man Gesturing Ok", keywords: ["gesturing-ok", "men", "boy", "male", "blue", "human"], skins: [{ unified: "1f646-200d-2642-fe0f", native: "\u{1F646}\u200D\u2642\uFE0F" }, { unified: "1f646-1f3fb-200d-2642-fe0f", native: "\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f646-1f3fc-200d-2642-fe0f", native: "\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f646-1f3fd-200d-2642-fe0f", native: "\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f646-1f3fe-200d-2642-fe0f", native: "\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f646-1f3ff-200d-2642-fe0f", native: "\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-gesturing-ok": { id: "woman-gesturing-ok", name: "Woman Gesturing Ok", keywords: ["gesturing-ok", "women", "girl", "female", "pink", "human"], skins: [{ unified: "1f646-200d-2640-fe0f", native: "\u{1F646}\u200D\u2640\uFE0F" }, { unified: "1f646-1f3fb-200d-2640-fe0f", native: "\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f646-1f3fc-200d-2640-fe0f", native: "\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f646-1f3fd-200d-2640-fe0f", native: "\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f646-1f3fe-200d-2640-fe0f", native: "\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f646-1f3ff-200d-2640-fe0f", native: "\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, information_desk_person: { id: "information_desk_person", name: "Person Tipping Hand", keywords: ["information", "desk"], skins: [{ unified: "1f481", native: "\u{1F481}" }, { unified: "1f481-1f3fb", native: "\u{1F481}\u{1F3FB}" }, { unified: "1f481-1f3fc", native: "\u{1F481}\u{1F3FC}" }, { unified: "1f481-1f3fd", native: "\u{1F481}\u{1F3FD}" }, { unified: "1f481-1f3fe", native: "\u{1F481}\u{1F3FE}" }, { unified: "1f481-1f3ff", native: "\u{1F481}\u{1F3FF}" }], version: 1 }, "man-tipping-hand": { id: "man-tipping-hand", name: "Man Tipping Hand", keywords: ["tipping-hand", "male", "boy", "human", "information"], skins: [{ unified: "1f481-200d-2642-fe0f", native: "\u{1F481}\u200D\u2642\uFE0F" }, { unified: "1f481-1f3fb-200d-2642-fe0f", native: "\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f481-1f3fc-200d-2642-fe0f", native: "\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f481-1f3fd-200d-2642-fe0f", native: "\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f481-1f3fe-200d-2642-fe0f", native: "\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f481-1f3ff-200d-2642-fe0f", native: "\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-tipping-hand": { id: "woman-tipping-hand", name: "Woman Tipping Hand", keywords: ["tipping-hand", "female", "girl", "human", "information"], skins: [{ unified: "1f481-200d-2640-fe0f", native: "\u{1F481}\u200D\u2640\uFE0F" }, { unified: "1f481-1f3fb-200d-2640-fe0f", native: "\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f481-1f3fc-200d-2640-fe0f", native: "\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f481-1f3fd-200d-2640-fe0f", native: "\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f481-1f3fe-200d-2640-fe0f", native: "\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f481-1f3ff-200d-2640-fe0f", native: "\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, raising_hand: { id: "raising_hand", name: "Person Raising Hand", keywords: ["question"], skins: [{ unified: "1f64b", native: "\u{1F64B}" }, { unified: "1f64b-1f3fb", native: "\u{1F64B}\u{1F3FB}" }, { unified: "1f64b-1f3fc", native: "\u{1F64B}\u{1F3FC}" }, { unified: "1f64b-1f3fd", native: "\u{1F64B}\u{1F3FD}" }, { unified: "1f64b-1f3fe", native: "\u{1F64B}\u{1F3FE}" }, { unified: "1f64b-1f3ff", native: "\u{1F64B}\u{1F3FF}" }], version: 1 }, "man-raising-hand": { id: "man-raising-hand", name: "Man Raising Hand", keywords: ["raising-hand", "male", "boy"], skins: [{ unified: "1f64b-200d-2642-fe0f", native: "\u{1F64B}\u200D\u2642\uFE0F" }, { unified: "1f64b-1f3fb-200d-2642-fe0f", native: "\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f64b-1f3fc-200d-2642-fe0f", native: "\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f64b-1f3fd-200d-2642-fe0f", native: "\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f64b-1f3fe-200d-2642-fe0f", native: "\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f64b-1f3ff-200d-2642-fe0f", native: "\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-raising-hand": { id: "woman-raising-hand", name: "Woman Raising Hand", keywords: ["raising-hand", "female", "girl"], skins: [{ unified: "1f64b-200d-2640-fe0f", native: "\u{1F64B}\u200D\u2640\uFE0F" }, { unified: "1f64b-1f3fb-200d-2640-fe0f", native: "\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f64b-1f3fc-200d-2640-fe0f", native: "\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f64b-1f3fd-200d-2640-fe0f", native: "\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f64b-1f3fe-200d-2640-fe0f", native: "\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f64b-1f3ff-200d-2640-fe0f", native: "\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, deaf_person: { id: "deaf_person", name: "Deaf Person", keywords: ["accessibility"], skins: [{ unified: "1f9cf", native: "\u{1F9CF}" }, { unified: "1f9cf-1f3fb", native: "\u{1F9CF}\u{1F3FB}" }, { unified: "1f9cf-1f3fc", native: "\u{1F9CF}\u{1F3FC}" }, { unified: "1f9cf-1f3fd", native: "\u{1F9CF}\u{1F3FD}" }, { unified: "1f9cf-1f3fe", native: "\u{1F9CF}\u{1F3FE}" }, { unified: "1f9cf-1f3ff", native: "\u{1F9CF}\u{1F3FF}" }], version: 12 }, deaf_man: { id: "deaf_man", name: "Deaf Man", keywords: ["accessibility"], skins: [{ unified: "1f9cf-200d-2642-fe0f", native: "\u{1F9CF}\u200D\u2642\uFE0F" }, { unified: "1f9cf-1f3fb-200d-2642-fe0f", native: "\u{1F9CF}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9cf-1f3fc-200d-2642-fe0f", native: "\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9cf-1f3fd-200d-2642-fe0f", native: "\u{1F9CF}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9cf-1f3fe-200d-2642-fe0f", native: "\u{1F9CF}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9cf-1f3ff-200d-2642-fe0f", native: "\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 12 }, deaf_woman: { id: "deaf_woman", name: "Deaf Woman", keywords: ["accessibility"], skins: [{ unified: "1f9cf-200d-2640-fe0f", native: "\u{1F9CF}\u200D\u2640\uFE0F" }, { unified: "1f9cf-1f3fb-200d-2640-fe0f", native: "\u{1F9CF}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9cf-1f3fc-200d-2640-fe0f", native: "\u{1F9CF}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9cf-1f3fd-200d-2640-fe0f", native: "\u{1F9CF}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9cf-1f3fe-200d-2640-fe0f", native: "\u{1F9CF}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9cf-1f3ff-200d-2640-fe0f", native: "\u{1F9CF}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 12 }, bow: { id: "bow", name: "Person Bowing", keywords: ["bow", "respectiful"], skins: [{ unified: "1f647", native: "\u{1F647}" }, { unified: "1f647-1f3fb", native: "\u{1F647}\u{1F3FB}" }, { unified: "1f647-1f3fc", native: "\u{1F647}\u{1F3FC}" }, { unified: "1f647-1f3fd", native: "\u{1F647}\u{1F3FD}" }, { unified: "1f647-1f3fe", native: "\u{1F647}\u{1F3FE}" }, { unified: "1f647-1f3ff", native: "\u{1F647}\u{1F3FF}" }], version: 1 }, "man-bowing": { id: "man-bowing", name: "Man Bowing", keywords: ["male", "boy"], skins: [{ unified: "1f647-200d-2642-fe0f", native: "\u{1F647}\u200D\u2642\uFE0F" }, { unified: "1f647-1f3fb-200d-2642-fe0f", native: "\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f647-1f3fc-200d-2642-fe0f", native: "\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f647-1f3fd-200d-2642-fe0f", native: "\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f647-1f3fe-200d-2642-fe0f", native: "\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f647-1f3ff-200d-2642-fe0f", native: "\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-bowing": { id: "woman-bowing", name: "Woman Bowing", keywords: ["female", "girl"], skins: [{ unified: "1f647-200d-2640-fe0f", native: "\u{1F647}\u200D\u2640\uFE0F" }, { unified: "1f647-1f3fb-200d-2640-fe0f", native: "\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f647-1f3fc-200d-2640-fe0f", native: "\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f647-1f3fd-200d-2640-fe0f", native: "\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f647-1f3fe-200d-2640-fe0f", native: "\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f647-1f3ff-200d-2640-fe0f", native: "\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, face_palm: { id: "face_palm", name: "Face Palm", keywords: ["person", "facepalming", "disappointed"], skins: [{ unified: "1f926", native: "\u{1F926}" }, { unified: "1f926-1f3fb", native: "\u{1F926}\u{1F3FB}" }, { unified: "1f926-1f3fc", native: "\u{1F926}\u{1F3FC}" }, { unified: "1f926-1f3fd", native: "\u{1F926}\u{1F3FD}" }, { unified: "1f926-1f3fe", native: "\u{1F926}\u{1F3FE}" }, { unified: "1f926-1f3ff", native: "\u{1F926}\u{1F3FF}" }], version: 3 }, "man-facepalming": { id: "man-facepalming", name: "Man Facepalming", keywords: ["male", "boy", "disbelief"], skins: [{ unified: "1f926-200d-2642-fe0f", native: "\u{1F926}\u200D\u2642\uFE0F" }, { unified: "1f926-1f3fb-200d-2642-fe0f", native: "\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f926-1f3fc-200d-2642-fe0f", native: "\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f926-1f3fd-200d-2642-fe0f", native: "\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f926-1f3fe-200d-2642-fe0f", native: "\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f926-1f3ff-200d-2642-fe0f", native: "\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-facepalming": { id: "woman-facepalming", name: "Woman Facepalming", keywords: ["female", "girl", "disbelief"], skins: [{ unified: "1f926-200d-2640-fe0f", native: "\u{1F926}\u200D\u2640\uFE0F" }, { unified: "1f926-1f3fb-200d-2640-fe0f", native: "\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f926-1f3fc-200d-2640-fe0f", native: "\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f926-1f3fd-200d-2640-fe0f", native: "\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f926-1f3fe-200d-2640-fe0f", native: "\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f926-1f3ff-200d-2640-fe0f", native: "\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, shrug: { id: "shrug", name: "Shrug", keywords: ["person", "shrugging", "regardless"], skins: [{ unified: "1f937", native: "\u{1F937}" }, { unified: "1f937-1f3fb", native: "\u{1F937}\u{1F3FB}" }, { unified: "1f937-1f3fc", native: "\u{1F937}\u{1F3FC}" }, { unified: "1f937-1f3fd", native: "\u{1F937}\u{1F3FD}" }, { unified: "1f937-1f3fe", native: "\u{1F937}\u{1F3FE}" }, { unified: "1f937-1f3ff", native: "\u{1F937}\u{1F3FF}" }], version: 3 }, "man-shrugging": { id: "man-shrugging", name: "Man Shrugging", keywords: ["male", "boy", "confused", "indifferent", "doubt"], skins: [{ unified: "1f937-200d-2642-fe0f", native: "\u{1F937}\u200D\u2642\uFE0F" }, { unified: "1f937-1f3fb-200d-2642-fe0f", native: "\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f937-1f3fc-200d-2642-fe0f", native: "\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f937-1f3fd-200d-2642-fe0f", native: "\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f937-1f3fe-200d-2642-fe0f", native: "\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f937-1f3ff-200d-2642-fe0f", native: "\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-shrugging": { id: "woman-shrugging", name: "Woman Shrugging", keywords: ["female", "girl", "confused", "indifferent", "doubt"], skins: [{ unified: "1f937-200d-2640-fe0f", native: "\u{1F937}\u200D\u2640\uFE0F" }, { unified: "1f937-1f3fb-200d-2640-fe0f", native: "\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f937-1f3fc-200d-2640-fe0f", native: "\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f937-1f3fd-200d-2640-fe0f", native: "\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f937-1f3fe-200d-2640-fe0f", native: "\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f937-1f3ff-200d-2640-fe0f", native: "\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, health_worker: { id: "health_worker", name: "Health Worker", keywords: ["hospital"], skins: [{ unified: "1f9d1-200d-2695-fe0f", native: "\u{1F9D1}\u200D\u2695\uFE0F" }, { unified: "1f9d1-1f3fb-200d-2695-fe0f", native: "\u{1F9D1}\u{1F3FB}\u200D\u2695\uFE0F" }, { unified: "1f9d1-1f3fc-200d-2695-fe0f", native: "\u{1F9D1}\u{1F3FC}\u200D\u2695\uFE0F" }, { unified: "1f9d1-1f3fd-200d-2695-fe0f", native: "\u{1F9D1}\u{1F3FD}\u200D\u2695\uFE0F" }, { unified: "1f9d1-1f3fe-200d-2695-fe0f", native: "\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F" }, { unified: "1f9d1-1f3ff-200d-2695-fe0f", native: "\u{1F9D1}\u{1F3FF}\u200D\u2695\uFE0F" }], version: 12.1 }, "male-doctor": { id: "male-doctor", name: "Man Health Worker", keywords: ["male", "doctor", "nurse", "therapist", "healthcare", "human"], skins: [{ unified: "1f468-200d-2695-fe0f", native: "\u{1F468}\u200D\u2695\uFE0F" }, { unified: "1f468-1f3fb-200d-2695-fe0f", native: "\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F" }, { unified: "1f468-1f3fc-200d-2695-fe0f", native: "\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F" }, { unified: "1f468-1f3fd-200d-2695-fe0f", native: "\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F" }, { unified: "1f468-1f3fe-200d-2695-fe0f", native: "\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F" }, { unified: "1f468-1f3ff-200d-2695-fe0f", native: "\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F" }], version: 4 }, "female-doctor": { id: "female-doctor", name: "Woman Health Worker", keywords: ["female", "doctor", "nurse", "therapist", "healthcare", "human"], skins: [{ unified: "1f469-200d-2695-fe0f", native: "\u{1F469}\u200D\u2695\uFE0F" }, { unified: "1f469-1f3fb-200d-2695-fe0f", native: "\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F" }, { unified: "1f469-1f3fc-200d-2695-fe0f", native: "\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F" }, { unified: "1f469-1f3fd-200d-2695-fe0f", native: "\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F" }, { unified: "1f469-1f3fe-200d-2695-fe0f", native: "\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F" }, { unified: "1f469-1f3ff-200d-2695-fe0f", native: "\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F" }], version: 4 }, student: { id: "student", name: "Student", keywords: ["learn"], skins: [{ unified: "1f9d1-200d-1f393", native: "\u{1F9D1}\u200D\u{1F393}" }, { unified: "1f9d1-1f3fb-200d-1f393", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F393}" }, { unified: "1f9d1-1f3fc-200d-1f393", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F393}" }, { unified: "1f9d1-1f3fd-200d-1f393", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F393}" }, { unified: "1f9d1-1f3fe-200d-1f393", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F393}" }, { unified: "1f9d1-1f3ff-200d-1f393", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F393}" }], version: 12.1 }, "male-student": { id: "male-student", name: "Man Student", keywords: ["male", "graduate", "human"], skins: [{ unified: "1f468-200d-1f393", native: "\u{1F468}\u200D\u{1F393}" }, { unified: "1f468-1f3fb-200d-1f393", native: "\u{1F468}\u{1F3FB}\u200D\u{1F393}" }, { unified: "1f468-1f3fc-200d-1f393", native: "\u{1F468}\u{1F3FC}\u200D\u{1F393}" }, { unified: "1f468-1f3fd-200d-1f393", native: "\u{1F468}\u{1F3FD}\u200D\u{1F393}" }, { unified: "1f468-1f3fe-200d-1f393", native: "\u{1F468}\u{1F3FE}\u200D\u{1F393}" }, { unified: "1f468-1f3ff-200d-1f393", native: "\u{1F468}\u{1F3FF}\u200D\u{1F393}" }], version: 4 }, "female-student": { id: "female-student", name: "Woman Student", keywords: ["female", "graduate", "human"], skins: [{ unified: "1f469-200d-1f393", native: "\u{1F469}\u200D\u{1F393}" }, { unified: "1f469-1f3fb-200d-1f393", native: "\u{1F469}\u{1F3FB}\u200D\u{1F393}" }, { unified: "1f469-1f3fc-200d-1f393", native: "\u{1F469}\u{1F3FC}\u200D\u{1F393}" }, { unified: "1f469-1f3fd-200d-1f393", native: "\u{1F469}\u{1F3FD}\u200D\u{1F393}" }, { unified: "1f469-1f3fe-200d-1f393", native: "\u{1F469}\u{1F3FE}\u200D\u{1F393}" }, { unified: "1f469-1f3ff-200d-1f393", native: "\u{1F469}\u{1F3FF}\u200D\u{1F393}" }], version: 4 }, teacher: { id: "teacher", name: "Teacher", keywords: ["professor"], skins: [{ unified: "1f9d1-200d-1f3eb", native: "\u{1F9D1}\u200D\u{1F3EB}" }, { unified: "1f9d1-1f3fb-200d-1f3eb", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3EB}" }, { unified: "1f9d1-1f3fc-200d-1f3eb", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3EB}" }, { unified: "1f9d1-1f3fd-200d-1f3eb", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3EB}" }, { unified: "1f9d1-1f3fe-200d-1f3eb", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3EB}" }, { unified: "1f9d1-1f3ff-200d-1f3eb", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3EB}" }], version: 12.1 }, "male-teacher": { id: "male-teacher", name: "Man Teacher", keywords: ["male", "instructor", "professor", "human"], skins: [{ unified: "1f468-200d-1f3eb", native: "\u{1F468}\u200D\u{1F3EB}" }, { unified: "1f468-1f3fb-200d-1f3eb", native: "\u{1F468}\u{1F3FB}\u200D\u{1F3EB}" }, { unified: "1f468-1f3fc-200d-1f3eb", native: "\u{1F468}\u{1F3FC}\u200D\u{1F3EB}" }, { unified: "1f468-1f3fd-200d-1f3eb", native: "\u{1F468}\u{1F3FD}\u200D\u{1F3EB}" }, { unified: "1f468-1f3fe-200d-1f3eb", native: "\u{1F468}\u{1F3FE}\u200D\u{1F3EB}" }, { unified: "1f468-1f3ff-200d-1f3eb", native: "\u{1F468}\u{1F3FF}\u200D\u{1F3EB}" }], version: 4 }, "female-teacher": { id: "female-teacher", name: "Woman Teacher", keywords: ["female", "instructor", "professor", "human"], skins: [{ unified: "1f469-200d-1f3eb", native: "\u{1F469}\u200D\u{1F3EB}" }, { unified: "1f469-1f3fb-200d-1f3eb", native: "\u{1F469}\u{1F3FB}\u200D\u{1F3EB}" }, { unified: "1f469-1f3fc-200d-1f3eb", native: "\u{1F469}\u{1F3FC}\u200D\u{1F3EB}" }, { unified: "1f469-1f3fd-200d-1f3eb", native: "\u{1F469}\u{1F3FD}\u200D\u{1F3EB}" }, { unified: "1f469-1f3fe-200d-1f3eb", native: "\u{1F469}\u{1F3FE}\u200D\u{1F3EB}" }, { unified: "1f469-1f3ff-200d-1f3eb", native: "\u{1F469}\u{1F3FF}\u200D\u{1F3EB}" }], version: 4 }, judge: { id: "judge", name: "Judge", keywords: ["law"], skins: [{ unified: "1f9d1-200d-2696-fe0f", native: "\u{1F9D1}\u200D\u2696\uFE0F" }, { unified: "1f9d1-1f3fb-200d-2696-fe0f", native: "\u{1F9D1}\u{1F3FB}\u200D\u2696\uFE0F" }, { unified: "1f9d1-1f3fc-200d-2696-fe0f", native: "\u{1F9D1}\u{1F3FC}\u200D\u2696\uFE0F" }, { unified: "1f9d1-1f3fd-200d-2696-fe0f", native: "\u{1F9D1}\u{1F3FD}\u200D\u2696\uFE0F" }, { unified: "1f9d1-1f3fe-200d-2696-fe0f", native: "\u{1F9D1}\u{1F3FE}\u200D\u2696\uFE0F" }, { unified: "1f9d1-1f3ff-200d-2696-fe0f", native: "\u{1F9D1}\u{1F3FF}\u200D\u2696\uFE0F" }], version: 12.1 }, "male-judge": { id: "male-judge", name: "Man Judge", keywords: ["male", "justice", "court", "human"], skins: [{ unified: "1f468-200d-2696-fe0f", native: "\u{1F468}\u200D\u2696\uFE0F" }, { unified: "1f468-1f3fb-200d-2696-fe0f", native: "\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F" }, { unified: "1f468-1f3fc-200d-2696-fe0f", native: "\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F" }, { unified: "1f468-1f3fd-200d-2696-fe0f", native: "\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F" }, { unified: "1f468-1f3fe-200d-2696-fe0f", native: "\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F" }, { unified: "1f468-1f3ff-200d-2696-fe0f", native: "\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F" }], version: 4 }, "female-judge": { id: "female-judge", name: "Woman Judge", keywords: ["female", "justice", "court", "human"], skins: [{ unified: "1f469-200d-2696-fe0f", native: "\u{1F469}\u200D\u2696\uFE0F" }, { unified: "1f469-1f3fb-200d-2696-fe0f", native: "\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F" }, { unified: "1f469-1f3fc-200d-2696-fe0f", native: "\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F" }, { unified: "1f469-1f3fd-200d-2696-fe0f", native: "\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F" }, { unified: "1f469-1f3fe-200d-2696-fe0f", native: "\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F" }, { unified: "1f469-1f3ff-200d-2696-fe0f", native: "\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F" }], version: 4 }, farmer: { id: "farmer", name: "Farmer", keywords: ["crops"], skins: [{ unified: "1f9d1-200d-1f33e", native: "\u{1F9D1}\u200D\u{1F33E}" }, { unified: "1f9d1-1f3fb-200d-1f33e", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F33E}" }, { unified: "1f9d1-1f3fc-200d-1f33e", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F33E}" }, { unified: "1f9d1-1f3fd-200d-1f33e", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F33E}" }, { unified: "1f9d1-1f3fe-200d-1f33e", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F33E}" }, { unified: "1f9d1-1f3ff-200d-1f33e", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F33E}" }], version: 12.1 }, "male-farmer": { id: "male-farmer", name: "Man Farmer", keywords: ["male", "rancher", "gardener", "human"], skins: [{ unified: "1f468-200d-1f33e", native: "\u{1F468}\u200D\u{1F33E}" }, { unified: "1f468-1f3fb-200d-1f33e", native: "\u{1F468}\u{1F3FB}\u200D\u{1F33E}" }, { unified: "1f468-1f3fc-200d-1f33e", native: "\u{1F468}\u{1F3FC}\u200D\u{1F33E}" }, { unified: "1f468-1f3fd-200d-1f33e", native: "\u{1F468}\u{1F3FD}\u200D\u{1F33E}" }, { unified: "1f468-1f3fe-200d-1f33e", native: "\u{1F468}\u{1F3FE}\u200D\u{1F33E}" }, { unified: "1f468-1f3ff-200d-1f33e", native: "\u{1F468}\u{1F3FF}\u200D\u{1F33E}" }], version: 4 }, "female-farmer": { id: "female-farmer", name: "Woman Farmer", keywords: ["female", "rancher", "gardener", "human"], skins: [{ unified: "1f469-200d-1f33e", native: "\u{1F469}\u200D\u{1F33E}" }, { unified: "1f469-1f3fb-200d-1f33e", native: "\u{1F469}\u{1F3FB}\u200D\u{1F33E}" }, { unified: "1f469-1f3fc-200d-1f33e", native: "\u{1F469}\u{1F3FC}\u200D\u{1F33E}" }, { unified: "1f469-1f3fd-200d-1f33e", native: "\u{1F469}\u{1F3FD}\u200D\u{1F33E}" }, { unified: "1f469-1f3fe-200d-1f33e", native: "\u{1F469}\u{1F3FE}\u200D\u{1F33E}" }, { unified: "1f469-1f3ff-200d-1f33e", native: "\u{1F469}\u{1F3FF}\u200D\u{1F33E}" }], version: 4 }, cook: { id: "cook", name: "Cook", keywords: ["food", "kitchen", "culinary"], skins: [{ unified: "1f9d1-200d-1f373", native: "\u{1F9D1}\u200D\u{1F373}" }, { unified: "1f9d1-1f3fb-200d-1f373", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F373}" }, { unified: "1f9d1-1f3fc-200d-1f373", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F373}" }, { unified: "1f9d1-1f3fd-200d-1f373", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F373}" }, { unified: "1f9d1-1f3fe-200d-1f373", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F373}" }, { unified: "1f9d1-1f3ff-200d-1f373", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F373}" }], version: 12.1 }, "male-cook": { id: "male-cook", name: "Man Cook", keywords: ["male", "chef", "human"], skins: [{ unified: "1f468-200d-1f373", native: "\u{1F468}\u200D\u{1F373}" }, { unified: "1f468-1f3fb-200d-1f373", native: "\u{1F468}\u{1F3FB}\u200D\u{1F373}" }, { unified: "1f468-1f3fc-200d-1f373", native: "\u{1F468}\u{1F3FC}\u200D\u{1F373}" }, { unified: "1f468-1f3fd-200d-1f373", native: "\u{1F468}\u{1F3FD}\u200D\u{1F373}" }, { unified: "1f468-1f3fe-200d-1f373", native: "\u{1F468}\u{1F3FE}\u200D\u{1F373}" }, { unified: "1f468-1f3ff-200d-1f373", native: "\u{1F468}\u{1F3FF}\u200D\u{1F373}" }], version: 4 }, "female-cook": { id: "female-cook", name: "Woman Cook", keywords: ["female", "chef", "human"], skins: [{ unified: "1f469-200d-1f373", native: "\u{1F469}\u200D\u{1F373}" }, { unified: "1f469-1f3fb-200d-1f373", native: "\u{1F469}\u{1F3FB}\u200D\u{1F373}" }, { unified: "1f469-1f3fc-200d-1f373", native: "\u{1F469}\u{1F3FC}\u200D\u{1F373}" }, { unified: "1f469-1f3fd-200d-1f373", native: "\u{1F469}\u{1F3FD}\u200D\u{1F373}" }, { unified: "1f469-1f3fe-200d-1f373", native: "\u{1F469}\u{1F3FE}\u200D\u{1F373}" }, { unified: "1f469-1f3ff-200d-1f373", native: "\u{1F469}\u{1F3FF}\u200D\u{1F373}" }], version: 4 }, mechanic: { id: "mechanic", name: "Mechanic", keywords: ["worker", "technician"], skins: [{ unified: "1f9d1-200d-1f527", native: "\u{1F9D1}\u200D\u{1F527}" }, { unified: "1f9d1-1f3fb-200d-1f527", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F527}" }, { unified: "1f9d1-1f3fc-200d-1f527", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F527}" }, { unified: "1f9d1-1f3fd-200d-1f527", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F527}" }, { unified: "1f9d1-1f3fe-200d-1f527", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F527}" }, { unified: "1f9d1-1f3ff-200d-1f527", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F527}" }], version: 12.1 }, "male-mechanic": { id: "male-mechanic", name: "Man Mechanic", keywords: ["male", "plumber", "human", "wrench"], skins: [{ unified: "1f468-200d-1f527", native: "\u{1F468}\u200D\u{1F527}" }, { unified: "1f468-1f3fb-200d-1f527", native: "\u{1F468}\u{1F3FB}\u200D\u{1F527}" }, { unified: "1f468-1f3fc-200d-1f527", native: "\u{1F468}\u{1F3FC}\u200D\u{1F527}" }, { unified: "1f468-1f3fd-200d-1f527", native: "\u{1F468}\u{1F3FD}\u200D\u{1F527}" }, { unified: "1f468-1f3fe-200d-1f527", native: "\u{1F468}\u{1F3FE}\u200D\u{1F527}" }, { unified: "1f468-1f3ff-200d-1f527", native: "\u{1F468}\u{1F3FF}\u200D\u{1F527}" }], version: 4 }, "female-mechanic": { id: "female-mechanic", name: "Woman Mechanic", keywords: ["female", "plumber", "human", "wrench"], skins: [{ unified: "1f469-200d-1f527", native: "\u{1F469}\u200D\u{1F527}" }, { unified: "1f469-1f3fb-200d-1f527", native: "\u{1F469}\u{1F3FB}\u200D\u{1F527}" }, { unified: "1f469-1f3fc-200d-1f527", native: "\u{1F469}\u{1F3FC}\u200D\u{1F527}" }, { unified: "1f469-1f3fd-200d-1f527", native: "\u{1F469}\u{1F3FD}\u200D\u{1F527}" }, { unified: "1f469-1f3fe-200d-1f527", native: "\u{1F469}\u{1F3FE}\u200D\u{1F527}" }, { unified: "1f469-1f3ff-200d-1f527", native: "\u{1F469}\u{1F3FF}\u200D\u{1F527}" }], version: 4 }, factory_worker: { id: "factory_worker", name: "Factory Worker", keywords: ["labor"], skins: [{ unified: "1f9d1-200d-1f3ed", native: "\u{1F9D1}\u200D\u{1F3ED}" }, { unified: "1f9d1-1f3fb-200d-1f3ed", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3ED}" }, { unified: "1f9d1-1f3fc-200d-1f3ed", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3ED}" }, { unified: "1f9d1-1f3fd-200d-1f3ed", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3ED}" }, { unified: "1f9d1-1f3fe-200d-1f3ed", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3ED}" }, { unified: "1f9d1-1f3ff-200d-1f3ed", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3ED}" }], version: 12.1 }, "male-factory-worker": { id: "male-factory-worker", name: "Man Factory Worker", keywords: ["male", "factory-worker", "assembly", "industrial", "human"], skins: [{ unified: "1f468-200d-1f3ed", native: "\u{1F468}\u200D\u{1F3ED}" }, { unified: "1f468-1f3fb-200d-1f3ed", native: "\u{1F468}\u{1F3FB}\u200D\u{1F3ED}" }, { unified: "1f468-1f3fc-200d-1f3ed", native: "\u{1F468}\u{1F3FC}\u200D\u{1F3ED}" }, { unified: "1f468-1f3fd-200d-1f3ed", native: "\u{1F468}\u{1F3FD}\u200D\u{1F3ED}" }, { unified: "1f468-1f3fe-200d-1f3ed", native: "\u{1F468}\u{1F3FE}\u200D\u{1F3ED}" }, { unified: "1f468-1f3ff-200d-1f3ed", native: "\u{1F468}\u{1F3FF}\u200D\u{1F3ED}" }], version: 4 }, "female-factory-worker": { id: "female-factory-worker", name: "Woman Factory Worker", keywords: ["female", "factory-worker", "assembly", "industrial", "human"], skins: [{ unified: "1f469-200d-1f3ed", native: "\u{1F469}\u200D\u{1F3ED}" }, { unified: "1f469-1f3fb-200d-1f3ed", native: "\u{1F469}\u{1F3FB}\u200D\u{1F3ED}" }, { unified: "1f469-1f3fc-200d-1f3ed", native: "\u{1F469}\u{1F3FC}\u200D\u{1F3ED}" }, { unified: "1f469-1f3fd-200d-1f3ed", native: "\u{1F469}\u{1F3FD}\u200D\u{1F3ED}" }, { unified: "1f469-1f3fe-200d-1f3ed", native: "\u{1F469}\u{1F3FE}\u200D\u{1F3ED}" }, { unified: "1f469-1f3ff-200d-1f3ed", native: "\u{1F469}\u{1F3FF}\u200D\u{1F3ED}" }], version: 4 }, office_worker: { id: "office_worker", name: "Office Worker", keywords: ["business"], skins: [{ unified: "1f9d1-200d-1f4bc", native: "\u{1F9D1}\u200D\u{1F4BC}" }, { unified: "1f9d1-1f3fb-200d-1f4bc", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F4BC}" }, { unified: "1f9d1-1f3fc-200d-1f4bc", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BC}" }, { unified: "1f9d1-1f3fd-200d-1f4bc", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BC}" }, { unified: "1f9d1-1f3fe-200d-1f4bc", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BC}" }, { unified: "1f9d1-1f3ff-200d-1f4bc", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BC}" }], version: 12.1 }, "male-office-worker": { id: "male-office-worker", name: "Man Office Worker", keywords: ["male", "office-worker", "business", "manager", "human"], skins: [{ unified: "1f468-200d-1f4bc", native: "\u{1F468}\u200D\u{1F4BC}" }, { unified: "1f468-1f3fb-200d-1f4bc", native: "\u{1F468}\u{1F3FB}\u200D\u{1F4BC}" }, { unified: "1f468-1f3fc-200d-1f4bc", native: "\u{1F468}\u{1F3FC}\u200D\u{1F4BC}" }, { unified: "1f468-1f3fd-200d-1f4bc", native: "\u{1F468}\u{1F3FD}\u200D\u{1F4BC}" }, { unified: "1f468-1f3fe-200d-1f4bc", native: "\u{1F468}\u{1F3FE}\u200D\u{1F4BC}" }, { unified: "1f468-1f3ff-200d-1f4bc", native: "\u{1F468}\u{1F3FF}\u200D\u{1F4BC}" }], version: 4 }, "female-office-worker": { id: "female-office-worker", name: "Woman Office Worker", keywords: ["female", "office-worker", "business", "manager", "human"], skins: [{ unified: "1f469-200d-1f4bc", native: "\u{1F469}\u200D\u{1F4BC}" }, { unified: "1f469-1f3fb-200d-1f4bc", native: "\u{1F469}\u{1F3FB}\u200D\u{1F4BC}" }, { unified: "1f469-1f3fc-200d-1f4bc", native: "\u{1F469}\u{1F3FC}\u200D\u{1F4BC}" }, { unified: "1f469-1f3fd-200d-1f4bc", native: "\u{1F469}\u{1F3FD}\u200D\u{1F4BC}" }, { unified: "1f469-1f3fe-200d-1f4bc", native: "\u{1F469}\u{1F3FE}\u200D\u{1F4BC}" }, { unified: "1f469-1f3ff-200d-1f4bc", native: "\u{1F469}\u{1F3FF}\u200D\u{1F4BC}" }], version: 4 }, scientist: { id: "scientist", name: "Scientist", keywords: ["chemistry"], skins: [{ unified: "1f9d1-200d-1f52c", native: "\u{1F9D1}\u200D\u{1F52C}" }, { unified: "1f9d1-1f3fb-200d-1f52c", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F52C}" }, { unified: "1f9d1-1f3fc-200d-1f52c", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F52C}" }, { unified: "1f9d1-1f3fd-200d-1f52c", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F52C}" }, { unified: "1f9d1-1f3fe-200d-1f52c", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F52C}" }, { unified: "1f9d1-1f3ff-200d-1f52c", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F52C}" }], version: 12.1 }, "male-scientist": { id: "male-scientist", name: "Man Scientist", keywords: ["male", "biologist", "chemist", "engineer", "physicist", "human"], skins: [{ unified: "1f468-200d-1f52c", native: "\u{1F468}\u200D\u{1F52C}" }, { unified: "1f468-1f3fb-200d-1f52c", native: "\u{1F468}\u{1F3FB}\u200D\u{1F52C}" }, { unified: "1f468-1f3fc-200d-1f52c", native: "\u{1F468}\u{1F3FC}\u200D\u{1F52C}" }, { unified: "1f468-1f3fd-200d-1f52c", native: "\u{1F468}\u{1F3FD}\u200D\u{1F52C}" }, { unified: "1f468-1f3fe-200d-1f52c", native: "\u{1F468}\u{1F3FE}\u200D\u{1F52C}" }, { unified: "1f468-1f3ff-200d-1f52c", native: "\u{1F468}\u{1F3FF}\u200D\u{1F52C}" }], version: 4 }, "female-scientist": { id: "female-scientist", name: "Woman Scientist", keywords: ["female", "biologist", "chemist", "engineer", "physicist", "human"], skins: [{ unified: "1f469-200d-1f52c", native: "\u{1F469}\u200D\u{1F52C}" }, { unified: "1f469-1f3fb-200d-1f52c", native: "\u{1F469}\u{1F3FB}\u200D\u{1F52C}" }, { unified: "1f469-1f3fc-200d-1f52c", native: "\u{1F469}\u{1F3FC}\u200D\u{1F52C}" }, { unified: "1f469-1f3fd-200d-1f52c", native: "\u{1F469}\u{1F3FD}\u200D\u{1F52C}" }, { unified: "1f469-1f3fe-200d-1f52c", native: "\u{1F469}\u{1F3FE}\u200D\u{1F52C}" }, { unified: "1f469-1f3ff-200d-1f52c", native: "\u{1F469}\u{1F3FF}\u200D\u{1F52C}" }], version: 4 }, technologist: { id: "technologist", name: "Technologist", keywords: ["computer"], skins: [{ unified: "1f9d1-200d-1f4bb", native: "\u{1F9D1}\u200D\u{1F4BB}" }, { unified: "1f9d1-1f3fb-200d-1f4bb", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}" }, { unified: "1f9d1-1f3fc-200d-1f4bb", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BB}" }, { unified: "1f9d1-1f3fd-200d-1f4bb", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BB}" }, { unified: "1f9d1-1f3fe-200d-1f4bb", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BB}" }, { unified: "1f9d1-1f3ff-200d-1f4bb", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BB}" }], version: 12.1 }, "male-technologist": { id: "male-technologist", name: "Man Technologist", keywords: ["male", "coder", "developer", "engineer", "programmer", "software", "human", "laptop", "computer"], skins: [{ unified: "1f468-200d-1f4bb", native: "\u{1F468}\u200D\u{1F4BB}" }, { unified: "1f468-1f3fb-200d-1f4bb", native: "\u{1F468}\u{1F3FB}\u200D\u{1F4BB}" }, { unified: "1f468-1f3fc-200d-1f4bb", native: "\u{1F468}\u{1F3FC}\u200D\u{1F4BB}" }, { unified: "1f468-1f3fd-200d-1f4bb", native: "\u{1F468}\u{1F3FD}\u200D\u{1F4BB}" }, { unified: "1f468-1f3fe-200d-1f4bb", native: "\u{1F468}\u{1F3FE}\u200D\u{1F4BB}" }, { unified: "1f468-1f3ff-200d-1f4bb", native: "\u{1F468}\u{1F3FF}\u200D\u{1F4BB}" }], version: 4 }, "female-technologist": { id: "female-technologist", name: "Woman Technologist", keywords: ["female", "coder", "developer", "engineer", "programmer", "software", "human", "laptop", "computer"], skins: [{ unified: "1f469-200d-1f4bb", native: "\u{1F469}\u200D\u{1F4BB}" }, { unified: "1f469-1f3fb-200d-1f4bb", native: "\u{1F469}\u{1F3FB}\u200D\u{1F4BB}" }, { unified: "1f469-1f3fc-200d-1f4bb", native: "\u{1F469}\u{1F3FC}\u200D\u{1F4BB}" }, { unified: "1f469-1f3fd-200d-1f4bb", native: "\u{1F469}\u{1F3FD}\u200D\u{1F4BB}" }, { unified: "1f469-1f3fe-200d-1f4bb", native: "\u{1F469}\u{1F3FE}\u200D\u{1F4BB}" }, { unified: "1f469-1f3ff-200d-1f4bb", native: "\u{1F469}\u{1F3FF}\u200D\u{1F4BB}" }], version: 4 }, singer: { id: "singer", name: "Singer", keywords: ["song", "artist", "performer"], skins: [{ unified: "1f9d1-200d-1f3a4", native: "\u{1F9D1}\u200D\u{1F3A4}" }, { unified: "1f9d1-1f3fb-200d-1f3a4", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3A4}" }, { unified: "1f9d1-1f3fc-200d-1f3a4", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A4}" }, { unified: "1f9d1-1f3fd-200d-1f3a4", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A4}" }, { unified: "1f9d1-1f3fe-200d-1f3a4", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A4}" }, { unified: "1f9d1-1f3ff-200d-1f3a4", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A4}" }], version: 12.1 }, "male-singer": { id: "male-singer", name: "Man Singer", keywords: ["male", "rockstar", "entertainer", "human"], skins: [{ unified: "1f468-200d-1f3a4", native: "\u{1F468}\u200D\u{1F3A4}" }, { unified: "1f468-1f3fb-200d-1f3a4", native: "\u{1F468}\u{1F3FB}\u200D\u{1F3A4}" }, { unified: "1f468-1f3fc-200d-1f3a4", native: "\u{1F468}\u{1F3FC}\u200D\u{1F3A4}" }, { unified: "1f468-1f3fd-200d-1f3a4", native: "\u{1F468}\u{1F3FD}\u200D\u{1F3A4}" }, { unified: "1f468-1f3fe-200d-1f3a4", native: "\u{1F468}\u{1F3FE}\u200D\u{1F3A4}" }, { unified: "1f468-1f3ff-200d-1f3a4", native: "\u{1F468}\u{1F3FF}\u200D\u{1F3A4}" }], version: 4 }, "female-singer": { id: "female-singer", name: "Woman Singer", keywords: ["female", "rockstar", "entertainer", "human"], skins: [{ unified: "1f469-200d-1f3a4", native: "\u{1F469}\u200D\u{1F3A4}" }, { unified: "1f469-1f3fb-200d-1f3a4", native: "\u{1F469}\u{1F3FB}\u200D\u{1F3A4}" }, { unified: "1f469-1f3fc-200d-1f3a4", native: "\u{1F469}\u{1F3FC}\u200D\u{1F3A4}" }, { unified: "1f469-1f3fd-200d-1f3a4", native: "\u{1F469}\u{1F3FD}\u200D\u{1F3A4}" }, { unified: "1f469-1f3fe-200d-1f3a4", native: "\u{1F469}\u{1F3FE}\u200D\u{1F3A4}" }, { unified: "1f469-1f3ff-200d-1f3a4", native: "\u{1F469}\u{1F3FF}\u200D\u{1F3A4}" }], version: 4 }, artist: { id: "artist", name: "Artist", keywords: ["painting", "draw", "creativity"], skins: [{ unified: "1f9d1-200d-1f3a8", native: "\u{1F9D1}\u200D\u{1F3A8}" }, { unified: "1f9d1-1f3fb-200d-1f3a8", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3A8}" }, { unified: "1f9d1-1f3fc-200d-1f3a8", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A8}" }, { unified: "1f9d1-1f3fd-200d-1f3a8", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A8}" }, { unified: "1f9d1-1f3fe-200d-1f3a8", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A8}" }, { unified: "1f9d1-1f3ff-200d-1f3a8", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A8}" }], version: 12.1 }, "male-artist": { id: "male-artist", name: "Man Artist", keywords: ["male", "painter", "human"], skins: [{ unified: "1f468-200d-1f3a8", native: "\u{1F468}\u200D\u{1F3A8}" }, { unified: "1f468-1f3fb-200d-1f3a8", native: "\u{1F468}\u{1F3FB}\u200D\u{1F3A8}" }, { unified: "1f468-1f3fc-200d-1f3a8", native: "\u{1F468}\u{1F3FC}\u200D\u{1F3A8}" }, { unified: "1f468-1f3fd-200d-1f3a8", native: "\u{1F468}\u{1F3FD}\u200D\u{1F3A8}" }, { unified: "1f468-1f3fe-200d-1f3a8", native: "\u{1F468}\u{1F3FE}\u200D\u{1F3A8}" }, { unified: "1f468-1f3ff-200d-1f3a8", native: "\u{1F468}\u{1F3FF}\u200D\u{1F3A8}" }], version: 4 }, "female-artist": { id: "female-artist", name: "Woman Artist", keywords: ["female", "painter", "human"], skins: [{ unified: "1f469-200d-1f3a8", native: "\u{1F469}\u200D\u{1F3A8}" }, { unified: "1f469-1f3fb-200d-1f3a8", native: "\u{1F469}\u{1F3FB}\u200D\u{1F3A8}" }, { unified: "1f469-1f3fc-200d-1f3a8", native: "\u{1F469}\u{1F3FC}\u200D\u{1F3A8}" }, { unified: "1f469-1f3fd-200d-1f3a8", native: "\u{1F469}\u{1F3FD}\u200D\u{1F3A8}" }, { unified: "1f469-1f3fe-200d-1f3a8", native: "\u{1F469}\u{1F3FE}\u200D\u{1F3A8}" }, { unified: "1f469-1f3ff-200d-1f3a8", native: "\u{1F469}\u{1F3FF}\u200D\u{1F3A8}" }], version: 4 }, pilot: { id: "pilot", name: "Pilot", keywords: ["fly", "plane", "airplane"], skins: [{ unified: "1f9d1-200d-2708-fe0f", native: "\u{1F9D1}\u200D\u2708\uFE0F" }, { unified: "1f9d1-1f3fb-200d-2708-fe0f", native: "\u{1F9D1}\u{1F3FB}\u200D\u2708\uFE0F" }, { unified: "1f9d1-1f3fc-200d-2708-fe0f", native: "\u{1F9D1}\u{1F3FC}\u200D\u2708\uFE0F" }, { unified: "1f9d1-1f3fd-200d-2708-fe0f", native: "\u{1F9D1}\u{1F3FD}\u200D\u2708\uFE0F" }, { unified: "1f9d1-1f3fe-200d-2708-fe0f", native: "\u{1F9D1}\u{1F3FE}\u200D\u2708\uFE0F" }, { unified: "1f9d1-1f3ff-200d-2708-fe0f", native: "\u{1F9D1}\u{1F3FF}\u200D\u2708\uFE0F" }], version: 12.1 }, "male-pilot": { id: "male-pilot", name: "Man Pilot", keywords: ["male", "aviator", "plane", "human"], skins: [{ unified: "1f468-200d-2708-fe0f", native: "\u{1F468}\u200D\u2708\uFE0F" }, { unified: "1f468-1f3fb-200d-2708-fe0f", native: "\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F" }, { unified: "1f468-1f3fc-200d-2708-fe0f", native: "\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F" }, { unified: "1f468-1f3fd-200d-2708-fe0f", native: "\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F" }, { unified: "1f468-1f3fe-200d-2708-fe0f", native: "\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F" }, { unified: "1f468-1f3ff-200d-2708-fe0f", native: "\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F" }], version: 4 }, "female-pilot": { id: "female-pilot", name: "Woman Pilot", keywords: ["female", "aviator", "plane", "human"], skins: [{ unified: "1f469-200d-2708-fe0f", native: "\u{1F469}\u200D\u2708\uFE0F" }, { unified: "1f469-1f3fb-200d-2708-fe0f", native: "\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F" }, { unified: "1f469-1f3fc-200d-2708-fe0f", native: "\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F" }, { unified: "1f469-1f3fd-200d-2708-fe0f", native: "\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F" }, { unified: "1f469-1f3fe-200d-2708-fe0f", native: "\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F" }, { unified: "1f469-1f3ff-200d-2708-fe0f", native: "\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F" }], version: 4 }, astronaut: { id: "astronaut", name: "Astronaut", keywords: ["outerspace"], skins: [{ unified: "1f9d1-200d-1f680", native: "\u{1F9D1}\u200D\u{1F680}" }, { unified: "1f9d1-1f3fb-200d-1f680", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F680}" }, { unified: "1f9d1-1f3fc-200d-1f680", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F680}" }, { unified: "1f9d1-1f3fd-200d-1f680", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F680}" }, { unified: "1f9d1-1f3fe-200d-1f680", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F680}" }, { unified: "1f9d1-1f3ff-200d-1f680", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F680}" }], version: 12.1 }, "male-astronaut": { id: "male-astronaut", name: "Man Astronaut", keywords: ["male", "space", "rocket", "human"], skins: [{ unified: "1f468-200d-1f680", native: "\u{1F468}\u200D\u{1F680}" }, { unified: "1f468-1f3fb-200d-1f680", native: "\u{1F468}\u{1F3FB}\u200D\u{1F680}" }, { unified: "1f468-1f3fc-200d-1f680", native: "\u{1F468}\u{1F3FC}\u200D\u{1F680}" }, { unified: "1f468-1f3fd-200d-1f680", native: "\u{1F468}\u{1F3FD}\u200D\u{1F680}" }, { unified: "1f468-1f3fe-200d-1f680", native: "\u{1F468}\u{1F3FE}\u200D\u{1F680}" }, { unified: "1f468-1f3ff-200d-1f680", native: "\u{1F468}\u{1F3FF}\u200D\u{1F680}" }], version: 4 }, "female-astronaut": { id: "female-astronaut", name: "Woman Astronaut", keywords: ["female", "space", "rocket", "human"], skins: [{ unified: "1f469-200d-1f680", native: "\u{1F469}\u200D\u{1F680}" }, { unified: "1f469-1f3fb-200d-1f680", native: "\u{1F469}\u{1F3FB}\u200D\u{1F680}" }, { unified: "1f469-1f3fc-200d-1f680", native: "\u{1F469}\u{1F3FC}\u200D\u{1F680}" }, { unified: "1f469-1f3fd-200d-1f680", native: "\u{1F469}\u{1F3FD}\u200D\u{1F680}" }, { unified: "1f469-1f3fe-200d-1f680", native: "\u{1F469}\u{1F3FE}\u200D\u{1F680}" }, { unified: "1f469-1f3ff-200d-1f680", native: "\u{1F469}\u{1F3FF}\u200D\u{1F680}" }], version: 4 }, firefighter: { id: "firefighter", name: "Firefighter", keywords: ["fire"], skins: [{ unified: "1f9d1-200d-1f692", native: "\u{1F9D1}\u200D\u{1F692}" }, { unified: "1f9d1-1f3fb-200d-1f692", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F692}" }, { unified: "1f9d1-1f3fc-200d-1f692", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F692}" }, { unified: "1f9d1-1f3fd-200d-1f692", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F692}" }, { unified: "1f9d1-1f3fe-200d-1f692", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F692}" }, { unified: "1f9d1-1f3ff-200d-1f692", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F692}" }], version: 12.1 }, "male-firefighter": { id: "male-firefighter", name: "Man Firefighter", keywords: ["male", "fireman", "human"], skins: [{ unified: "1f468-200d-1f692", native: "\u{1F468}\u200D\u{1F692}" }, { unified: "1f468-1f3fb-200d-1f692", native: "\u{1F468}\u{1F3FB}\u200D\u{1F692}" }, { unified: "1f468-1f3fc-200d-1f692", native: "\u{1F468}\u{1F3FC}\u200D\u{1F692}" }, { unified: "1f468-1f3fd-200d-1f692", native: "\u{1F468}\u{1F3FD}\u200D\u{1F692}" }, { unified: "1f468-1f3fe-200d-1f692", native: "\u{1F468}\u{1F3FE}\u200D\u{1F692}" }, { unified: "1f468-1f3ff-200d-1f692", native: "\u{1F468}\u{1F3FF}\u200D\u{1F692}" }], version: 4 }, "female-firefighter": { id: "female-firefighter", name: "Woman Firefighter", keywords: ["female", "fireman", "human"], skins: [{ unified: "1f469-200d-1f692", native: "\u{1F469}\u200D\u{1F692}" }, { unified: "1f469-1f3fb-200d-1f692", native: "\u{1F469}\u{1F3FB}\u200D\u{1F692}" }, { unified: "1f469-1f3fc-200d-1f692", native: "\u{1F469}\u{1F3FC}\u200D\u{1F692}" }, { unified: "1f469-1f3fd-200d-1f692", native: "\u{1F469}\u{1F3FD}\u200D\u{1F692}" }, { unified: "1f469-1f3fe-200d-1f692", native: "\u{1F469}\u{1F3FE}\u200D\u{1F692}" }, { unified: "1f469-1f3ff-200d-1f692", native: "\u{1F469}\u{1F3FF}\u200D\u{1F692}" }], version: 4 }, cop: { id: "cop", name: "Police Officer", keywords: ["cop"], skins: [{ unified: "1f46e", native: "\u{1F46E}" }, { unified: "1f46e-1f3fb", native: "\u{1F46E}\u{1F3FB}" }, { unified: "1f46e-1f3fc", native: "\u{1F46E}\u{1F3FC}" }, { unified: "1f46e-1f3fd", native: "\u{1F46E}\u{1F3FD}" }, { unified: "1f46e-1f3fe", native: "\u{1F46E}\u{1F3FE}" }, { unified: "1f46e-1f3ff", native: "\u{1F46E}\u{1F3FF}" }], version: 1 }, "male-police-officer": { id: "male-police-officer", name: "Man Police Officer", keywords: ["male", "police-officer", "law", "legal", "enforcement", "arrest", "911"], skins: [{ unified: "1f46e-200d-2642-fe0f", native: "\u{1F46E}\u200D\u2642\uFE0F" }, { unified: "1f46e-1f3fb-200d-2642-fe0f", native: "\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f46e-1f3fc-200d-2642-fe0f", native: "\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f46e-1f3fd-200d-2642-fe0f", native: "\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f46e-1f3fe-200d-2642-fe0f", native: "\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f46e-1f3ff-200d-2642-fe0f", native: "\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "female-police-officer": { id: "female-police-officer", name: "Woman Police Officer", keywords: ["female", "police-officer", "law", "legal", "enforcement", "arrest", "911"], skins: [{ unified: "1f46e-200d-2640-fe0f", native: "\u{1F46E}\u200D\u2640\uFE0F" }, { unified: "1f46e-1f3fb-200d-2640-fe0f", native: "\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f46e-1f3fc-200d-2640-fe0f", native: "\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f46e-1f3fd-200d-2640-fe0f", native: "\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f46e-1f3fe-200d-2640-fe0f", native: "\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f46e-1f3ff-200d-2640-fe0f", native: "\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, sleuth_or_spy: { id: "sleuth_or_spy", name: "Detective", keywords: ["sleuth", "or", "spy", "human"], skins: [{ unified: "1f575-fe0f", native: "\u{1F575}\uFE0F" }, { unified: "1f575-1f3fb", native: "\u{1F575}\u{1F3FB}" }, { unified: "1f575-1f3fc", native: "\u{1F575}\u{1F3FC}" }, { unified: "1f575-1f3fd", native: "\u{1F575}\u{1F3FD}" }, { unified: "1f575-1f3fe", native: "\u{1F575}\u{1F3FE}" }, { unified: "1f575-1f3ff", native: "\u{1F575}\u{1F3FF}" }], version: 1 }, "male-detective": { id: "male-detective", name: "Man Detective", keywords: ["male", "crime"], skins: [{ unified: "1f575-fe0f-200d-2642-fe0f", native: "\u{1F575}\uFE0F\u200D\u2642\uFE0F" }, { unified: "1f575-1f3fb-200d-2642-fe0f", native: "\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f575-1f3fc-200d-2642-fe0f", native: "\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f575-1f3fd-200d-2642-fe0f", native: "\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f575-1f3fe-200d-2642-fe0f", native: "\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f575-1f3ff-200d-2642-fe0f", native: "\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "female-detective": { id: "female-detective", name: "Woman Detective", keywords: ["female", "human", "spy"], skins: [{ unified: "1f575-fe0f-200d-2640-fe0f", native: "\u{1F575}\uFE0F\u200D\u2640\uFE0F" }, { unified: "1f575-1f3fb-200d-2640-fe0f", native: "\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f575-1f3fc-200d-2640-fe0f", native: "\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f575-1f3fd-200d-2640-fe0f", native: "\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f575-1f3fe-200d-2640-fe0f", native: "\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f575-1f3ff-200d-2640-fe0f", native: "\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, guardsman: { id: "guardsman", name: "Guard", keywords: ["guardsman", "protect"], skins: [{ unified: "1f482", native: "\u{1F482}" }, { unified: "1f482-1f3fb", native: "\u{1F482}\u{1F3FB}" }, { unified: "1f482-1f3fc", native: "\u{1F482}\u{1F3FC}" }, { unified: "1f482-1f3fd", native: "\u{1F482}\u{1F3FD}" }, { unified: "1f482-1f3fe", native: "\u{1F482}\u{1F3FE}" }, { unified: "1f482-1f3ff", native: "\u{1F482}\u{1F3FF}" }], version: 1 }, "male-guard": { id: "male-guard", name: "Man Guard", keywords: ["male", "uk", "gb", "british", "guy", "royal"], skins: [{ unified: "1f482-200d-2642-fe0f", native: "\u{1F482}\u200D\u2642\uFE0F" }, { unified: "1f482-1f3fb-200d-2642-fe0f", native: "\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f482-1f3fc-200d-2642-fe0f", native: "\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f482-1f3fd-200d-2642-fe0f", native: "\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f482-1f3fe-200d-2642-fe0f", native: "\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f482-1f3ff-200d-2642-fe0f", native: "\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "female-guard": { id: "female-guard", name: "Woman Guard", keywords: ["female", "uk", "gb", "british", "royal"], skins: [{ unified: "1f482-200d-2640-fe0f", native: "\u{1F482}\u200D\u2640\uFE0F" }, { unified: "1f482-1f3fb-200d-2640-fe0f", native: "\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f482-1f3fc-200d-2640-fe0f", native: "\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f482-1f3fd-200d-2640-fe0f", native: "\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f482-1f3fe-200d-2640-fe0f", native: "\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f482-1f3ff-200d-2640-fe0f", native: "\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, ninja: { id: "ninja", name: "Ninja", keywords: ["ninjutsu", "skills", "japanese"], skins: [{ unified: "1f977", native: "\u{1F977}" }, { unified: "1f977-1f3fb", native: "\u{1F977}\u{1F3FB}" }, { unified: "1f977-1f3fc", native: "\u{1F977}\u{1F3FC}" }, { unified: "1f977-1f3fd", native: "\u{1F977}\u{1F3FD}" }, { unified: "1f977-1f3fe", native: "\u{1F977}\u{1F3FE}" }, { unified: "1f977-1f3ff", native: "\u{1F977}\u{1F3FF}" }], version: 13 }, construction_worker: { id: "construction_worker", name: "Construction Worker", keywords: ["labor", "build"], skins: [{ unified: "1f477", native: "\u{1F477}" }, { unified: "1f477-1f3fb", native: "\u{1F477}\u{1F3FB}" }, { unified: "1f477-1f3fc", native: "\u{1F477}\u{1F3FC}" }, { unified: "1f477-1f3fd", native: "\u{1F477}\u{1F3FD}" }, { unified: "1f477-1f3fe", native: "\u{1F477}\u{1F3FE}" }, { unified: "1f477-1f3ff", native: "\u{1F477}\u{1F3FF}" }], version: 1 }, "male-construction-worker": { id: "male-construction-worker", name: "Man Construction Worker", keywords: ["male", "construction-worker", "human", "wip", "guy", "build", "labor"], skins: [{ unified: "1f477-200d-2642-fe0f", native: "\u{1F477}\u200D\u2642\uFE0F" }, { unified: "1f477-1f3fb-200d-2642-fe0f", native: "\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f477-1f3fc-200d-2642-fe0f", native: "\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f477-1f3fd-200d-2642-fe0f", native: "\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f477-1f3fe-200d-2642-fe0f", native: "\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f477-1f3ff-200d-2642-fe0f", native: "\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "female-construction-worker": { id: "female-construction-worker", name: "Woman Construction Worker", keywords: ["female", "construction-worker", "human", "wip", "build", "labor"], skins: [{ unified: "1f477-200d-2640-fe0f", native: "\u{1F477}\u200D\u2640\uFE0F" }, { unified: "1f477-1f3fb-200d-2640-fe0f", native: "\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f477-1f3fc-200d-2640-fe0f", native: "\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f477-1f3fd-200d-2640-fe0f", native: "\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f477-1f3fe-200d-2640-fe0f", native: "\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f477-1f3ff-200d-2640-fe0f", native: "\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, person_with_crown: { id: "person_with_crown", name: "Person with Crown", keywords: ["royalty", "power"], skins: [{ unified: "1fac5", native: "\u{1FAC5}" }, { unified: "1fac5-1f3fb", native: "\u{1FAC5}\u{1F3FB}" }, { unified: "1fac5-1f3fc", native: "\u{1FAC5}\u{1F3FC}" }, { unified: "1fac5-1f3fd", native: "\u{1FAC5}\u{1F3FD}" }, { unified: "1fac5-1f3fe", native: "\u{1FAC5}\u{1F3FE}" }, { unified: "1fac5-1f3ff", native: "\u{1FAC5}\u{1F3FF}" }], version: 14 }, prince: { id: "prince", name: "Prince", keywords: ["boy", "man", "male", "crown", "royal", "king"], skins: [{ unified: "1f934", native: "\u{1F934}" }, { unified: "1f934-1f3fb", native: "\u{1F934}\u{1F3FB}" }, { unified: "1f934-1f3fc", native: "\u{1F934}\u{1F3FC}" }, { unified: "1f934-1f3fd", native: "\u{1F934}\u{1F3FD}" }, { unified: "1f934-1f3fe", native: "\u{1F934}\u{1F3FE}" }, { unified: "1f934-1f3ff", native: "\u{1F934}\u{1F3FF}" }], version: 3 }, princess: { id: "princess", name: "Princess", keywords: ["girl", "woman", "female", "blond", "crown", "royal", "queen"], skins: [{ unified: "1f478", native: "\u{1F478}" }, { unified: "1f478-1f3fb", native: "\u{1F478}\u{1F3FB}" }, { unified: "1f478-1f3fc", native: "\u{1F478}\u{1F3FC}" }, { unified: "1f478-1f3fd", native: "\u{1F478}\u{1F3FD}" }, { unified: "1f478-1f3fe", native: "\u{1F478}\u{1F3FE}" }, { unified: "1f478-1f3ff", native: "\u{1F478}\u{1F3FF}" }], version: 1 }, man_with_turban: { id: "man_with_turban", name: "Man with Turban", keywords: ["person", "wearing", "headdress"], skins: [{ unified: "1f473", native: "\u{1F473}" }, { unified: "1f473-1f3fb", native: "\u{1F473}\u{1F3FB}" }, { unified: "1f473-1f3fc", native: "\u{1F473}\u{1F3FC}" }, { unified: "1f473-1f3fd", native: "\u{1F473}\u{1F3FD}" }, { unified: "1f473-1f3fe", native: "\u{1F473}\u{1F3FE}" }, { unified: "1f473-1f3ff", native: "\u{1F473}\u{1F3FF}" }], version: 1 }, "man-wearing-turban": { id: "man-wearing-turban", name: "Man Wearing Turban", keywords: ["wearing-turban", "male", "indian", "hinduism", "arabs"], skins: [{ unified: "1f473-200d-2642-fe0f", native: "\u{1F473}\u200D\u2642\uFE0F" }, { unified: "1f473-1f3fb-200d-2642-fe0f", native: "\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f473-1f3fc-200d-2642-fe0f", native: "\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f473-1f3fd-200d-2642-fe0f", native: "\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f473-1f3fe-200d-2642-fe0f", native: "\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f473-1f3ff-200d-2642-fe0f", native: "\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-wearing-turban": { id: "woman-wearing-turban", name: "Woman Wearing Turban", keywords: ["wearing-turban", "female", "indian", "hinduism", "arabs"], skins: [{ unified: "1f473-200d-2640-fe0f", native: "\u{1F473}\u200D\u2640\uFE0F" }, { unified: "1f473-1f3fb-200d-2640-fe0f", native: "\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f473-1f3fc-200d-2640-fe0f", native: "\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f473-1f3fd-200d-2640-fe0f", native: "\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f473-1f3fe-200d-2640-fe0f", native: "\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f473-1f3ff-200d-2640-fe0f", native: "\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, man_with_gua_pi_mao: { id: "man_with_gua_pi_mao", name: "Man with Gua Pi Mao", keywords: ["skullcap", "male", "boy", "chinese"], skins: [{ unified: "1f472", native: "\u{1F472}" }, { unified: "1f472-1f3fb", native: "\u{1F472}\u{1F3FB}" }, { unified: "1f472-1f3fc", native: "\u{1F472}\u{1F3FC}" }, { unified: "1f472-1f3fd", native: "\u{1F472}\u{1F3FD}" }, { unified: "1f472-1f3fe", native: "\u{1F472}\u{1F3FE}" }, { unified: "1f472-1f3ff", native: "\u{1F472}\u{1F3FF}" }], version: 1 }, person_with_headscarf: { id: "person_with_headscarf", name: "Woman with Headscarf", keywords: ["person", "female", "hijab", "mantilla", "tichel"], skins: [{ unified: "1f9d5", native: "\u{1F9D5}" }, { unified: "1f9d5-1f3fb", native: "\u{1F9D5}\u{1F3FB}" }, { unified: "1f9d5-1f3fc", native: "\u{1F9D5}\u{1F3FC}" }, { unified: "1f9d5-1f3fd", native: "\u{1F9D5}\u{1F3FD}" }, { unified: "1f9d5-1f3fe", native: "\u{1F9D5}\u{1F3FE}" }, { unified: "1f9d5-1f3ff", native: "\u{1F9D5}\u{1F3FF}" }], version: 5 }, person_in_tuxedo: { id: "person_in_tuxedo", name: "Man in Tuxedo", keywords: ["person", "couple", "marriage", "wedding", "groom"], skins: [{ unified: "1f935", native: "\u{1F935}" }, { unified: "1f935-1f3fb", native: "\u{1F935}\u{1F3FB}" }, { unified: "1f935-1f3fc", native: "\u{1F935}\u{1F3FC}" }, { unified: "1f935-1f3fd", native: "\u{1F935}\u{1F3FD}" }, { unified: "1f935-1f3fe", native: "\u{1F935}\u{1F3FE}" }, { unified: "1f935-1f3ff", native: "\u{1F935}\u{1F3FF}" }], version: 3 }, man_in_tuxedo: { id: "man_in_tuxedo", name: "Man in Tuxedo", keywords: ["formal", "fashion"], skins: [{ unified: "1f935-200d-2642-fe0f", native: "\u{1F935}\u200D\u2642\uFE0F" }, { unified: "1f935-1f3fb-200d-2642-fe0f", native: "\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f935-1f3fc-200d-2642-fe0f", native: "\u{1F935}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f935-1f3fd-200d-2642-fe0f", native: "\u{1F935}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f935-1f3fe-200d-2642-fe0f", native: "\u{1F935}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f935-1f3ff-200d-2642-fe0f", native: "\u{1F935}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 13 }, woman_in_tuxedo: { id: "woman_in_tuxedo", name: "Woman in Tuxedo", keywords: ["formal", "fashion"], skins: [{ unified: "1f935-200d-2640-fe0f", native: "\u{1F935}\u200D\u2640\uFE0F" }, { unified: "1f935-1f3fb-200d-2640-fe0f", native: "\u{1F935}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f935-1f3fc-200d-2640-fe0f", native: "\u{1F935}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f935-1f3fd-200d-2640-fe0f", native: "\u{1F935}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f935-1f3fe-200d-2640-fe0f", native: "\u{1F935}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f935-1f3ff-200d-2640-fe0f", native: "\u{1F935}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 13 }, bride_with_veil: { id: "bride_with_veil", name: "Bride with Veil", keywords: ["couple", "marriage", "wedding", "woman"], skins: [{ unified: "1f470", native: "\u{1F470}" }, { unified: "1f470-1f3fb", native: "\u{1F470}\u{1F3FB}" }, { unified: "1f470-1f3fc", native: "\u{1F470}\u{1F3FC}" }, { unified: "1f470-1f3fd", native: "\u{1F470}\u{1F3FD}" }, { unified: "1f470-1f3fe", native: "\u{1F470}\u{1F3FE}" }, { unified: "1f470-1f3ff", native: "\u{1F470}\u{1F3FF}" }], version: 1 }, man_with_veil: { id: "man_with_veil", name: "Man with Veil", keywords: ["wedding", "marriage"], skins: [{ unified: "1f470-200d-2642-fe0f", native: "\u{1F470}\u200D\u2642\uFE0F" }, { unified: "1f470-1f3fb-200d-2642-fe0f", native: "\u{1F470}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f470-1f3fc-200d-2642-fe0f", native: "\u{1F470}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f470-1f3fd-200d-2642-fe0f", native: "\u{1F470}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f470-1f3fe-200d-2642-fe0f", native: "\u{1F470}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f470-1f3ff-200d-2642-fe0f", native: "\u{1F470}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 13 }, woman_with_veil: { id: "woman_with_veil", name: "Woman with Veil", keywords: ["wedding", "marriage"], skins: [{ unified: "1f470-200d-2640-fe0f", native: "\u{1F470}\u200D\u2640\uFE0F" }, { unified: "1f470-1f3fb-200d-2640-fe0f", native: "\u{1F470}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f470-1f3fc-200d-2640-fe0f", native: "\u{1F470}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f470-1f3fd-200d-2640-fe0f", native: "\u{1F470}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f470-1f3fe-200d-2640-fe0f", native: "\u{1F470}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f470-1f3ff-200d-2640-fe0f", native: "\u{1F470}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 13 }, pregnant_woman: { id: "pregnant_woman", name: "Pregnant Woman", keywords: ["baby"], skins: [{ unified: "1f930", native: "\u{1F930}" }, { unified: "1f930-1f3fb", native: "\u{1F930}\u{1F3FB}" }, { unified: "1f930-1f3fc", native: "\u{1F930}\u{1F3FC}" }, { unified: "1f930-1f3fd", native: "\u{1F930}\u{1F3FD}" }, { unified: "1f930-1f3fe", native: "\u{1F930}\u{1F3FE}" }, { unified: "1f930-1f3ff", native: "\u{1F930}\u{1F3FF}" }], version: 3 }, pregnant_man: { id: "pregnant_man", name: "Pregnant Man", keywords: ["baby", "belly"], skins: [{ unified: "1fac3", native: "\u{1FAC3}" }, { unified: "1fac3-1f3fb", native: "\u{1FAC3}\u{1F3FB}" }, { unified: "1fac3-1f3fc", native: "\u{1FAC3}\u{1F3FC}" }, { unified: "1fac3-1f3fd", native: "\u{1FAC3}\u{1F3FD}" }, { unified: "1fac3-1f3fe", native: "\u{1FAC3}\u{1F3FE}" }, { unified: "1fac3-1f3ff", native: "\u{1FAC3}\u{1F3FF}" }], version: 14 }, pregnant_person: { id: "pregnant_person", name: "Pregnant Person", keywords: ["baby", "belly"], skins: [{ unified: "1fac4", native: "\u{1FAC4}" }, { unified: "1fac4-1f3fb", native: "\u{1FAC4}\u{1F3FB}" }, { unified: "1fac4-1f3fc", native: "\u{1FAC4}\u{1F3FC}" }, { unified: "1fac4-1f3fd", native: "\u{1FAC4}\u{1F3FD}" }, { unified: "1fac4-1f3fe", native: "\u{1FAC4}\u{1F3FE}" }, { unified: "1fac4-1f3ff", native: "\u{1FAC4}\u{1F3FF}" }], version: 14 }, "breast-feeding": { id: "breast-feeding", name: "Breast-Feeding", keywords: ["breast", "feeding", "nursing", "baby"], skins: [{ unified: "1f931", native: "\u{1F931}" }, { unified: "1f931-1f3fb", native: "\u{1F931}\u{1F3FB}" }, { unified: "1f931-1f3fc", native: "\u{1F931}\u{1F3FC}" }, { unified: "1f931-1f3fd", native: "\u{1F931}\u{1F3FD}" }, { unified: "1f931-1f3fe", native: "\u{1F931}\u{1F3FE}" }, { unified: "1f931-1f3ff", native: "\u{1F931}\u{1F3FF}" }], version: 5 }, woman_feeding_baby: { id: "woman_feeding_baby", name: "Woman Feeding Baby", keywords: ["birth", "food"], skins: [{ unified: "1f469-200d-1f37c", native: "\u{1F469}\u200D\u{1F37C}" }, { unified: "1f469-1f3fb-200d-1f37c", native: "\u{1F469}\u{1F3FB}\u200D\u{1F37C}" }, { unified: "1f469-1f3fc-200d-1f37c", native: "\u{1F469}\u{1F3FC}\u200D\u{1F37C}" }, { unified: "1f469-1f3fd-200d-1f37c", native: "\u{1F469}\u{1F3FD}\u200D\u{1F37C}" }, { unified: "1f469-1f3fe-200d-1f37c", native: "\u{1F469}\u{1F3FE}\u200D\u{1F37C}" }, { unified: "1f469-1f3ff-200d-1f37c", native: "\u{1F469}\u{1F3FF}\u200D\u{1F37C}" }], version: 13 }, man_feeding_baby: { id: "man_feeding_baby", name: "Man Feeding Baby", keywords: ["birth", "food"], skins: [{ unified: "1f468-200d-1f37c", native: "\u{1F468}\u200D\u{1F37C}" }, { unified: "1f468-1f3fb-200d-1f37c", native: "\u{1F468}\u{1F3FB}\u200D\u{1F37C}" }, { unified: "1f468-1f3fc-200d-1f37c", native: "\u{1F468}\u{1F3FC}\u200D\u{1F37C}" }, { unified: "1f468-1f3fd-200d-1f37c", native: "\u{1F468}\u{1F3FD}\u200D\u{1F37C}" }, { unified: "1f468-1f3fe-200d-1f37c", native: "\u{1F468}\u{1F3FE}\u200D\u{1F37C}" }, { unified: "1f468-1f3ff-200d-1f37c", native: "\u{1F468}\u{1F3FF}\u200D\u{1F37C}" }], version: 13 }, person_feeding_baby: { id: "person_feeding_baby", name: "Person Feeding Baby", keywords: ["birth", "food"], skins: [{ unified: "1f9d1-200d-1f37c", native: "\u{1F9D1}\u200D\u{1F37C}" }, { unified: "1f9d1-1f3fb-200d-1f37c", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F37C}" }, { unified: "1f9d1-1f3fc-200d-1f37c", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F37C}" }, { unified: "1f9d1-1f3fd-200d-1f37c", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F37C}" }, { unified: "1f9d1-1f3fe-200d-1f37c", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F37C}" }, { unified: "1f9d1-1f3ff-200d-1f37c", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F37C}" }], version: 13 }, angel: { id: "angel", name: "Baby Angel", keywords: ["heaven", "wings", "halo"], skins: [{ unified: "1f47c", native: "\u{1F47C}" }, { unified: "1f47c-1f3fb", native: "\u{1F47C}\u{1F3FB}" }, { unified: "1f47c-1f3fc", native: "\u{1F47C}\u{1F3FC}" }, { unified: "1f47c-1f3fd", native: "\u{1F47C}\u{1F3FD}" }, { unified: "1f47c-1f3fe", native: "\u{1F47C}\u{1F3FE}" }, { unified: "1f47c-1f3ff", native: "\u{1F47C}\u{1F3FF}" }], version: 1 }, santa: { id: "santa", name: "Santa Claus", keywords: ["festival", "man", "male", "xmas", "father", "christmas"], skins: [{ unified: "1f385", native: "\u{1F385}" }, { unified: "1f385-1f3fb", native: "\u{1F385}\u{1F3FB}" }, { unified: "1f385-1f3fc", native: "\u{1F385}\u{1F3FC}" }, { unified: "1f385-1f3fd", native: "\u{1F385}\u{1F3FD}" }, { unified: "1f385-1f3fe", native: "\u{1F385}\u{1F3FE}" }, { unified: "1f385-1f3ff", native: "\u{1F385}\u{1F3FF}" }], version: 1 }, mrs_claus: { id: "mrs_claus", name: "Mrs. Claus", keywords: ["mrs", "mother", "christmas", "woman", "female", "xmas"], skins: [{ unified: "1f936", native: "\u{1F936}" }, { unified: "1f936-1f3fb", native: "\u{1F936}\u{1F3FB}" }, { unified: "1f936-1f3fc", native: "\u{1F936}\u{1F3FC}" }, { unified: "1f936-1f3fd", native: "\u{1F936}\u{1F3FD}" }, { unified: "1f936-1f3fe", native: "\u{1F936}\u{1F3FE}" }, { unified: "1f936-1f3ff", native: "\u{1F936}\u{1F3FF}" }], version: 3 }, mx_claus: { id: "mx_claus", name: "Mx Claus", keywords: ["christmas"], skins: [{ unified: "1f9d1-200d-1f384", native: "\u{1F9D1}\u200D\u{1F384}" }, { unified: "1f9d1-1f3fb-200d-1f384", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F384}" }, { unified: "1f9d1-1f3fc-200d-1f384", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F384}" }, { unified: "1f9d1-1f3fd-200d-1f384", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F384}" }, { unified: "1f9d1-1f3fe-200d-1f384", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F384}" }, { unified: "1f9d1-1f3ff-200d-1f384", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F384}" }], version: 13 }, superhero: { id: "superhero", name: "Superhero", keywords: ["marvel"], skins: [{ unified: "1f9b8", native: "\u{1F9B8}" }, { unified: "1f9b8-1f3fb", native: "\u{1F9B8}\u{1F3FB}" }, { unified: "1f9b8-1f3fc", native: "\u{1F9B8}\u{1F3FC}" }, { unified: "1f9b8-1f3fd", native: "\u{1F9B8}\u{1F3FD}" }, { unified: "1f9b8-1f3fe", native: "\u{1F9B8}\u{1F3FE}" }, { unified: "1f9b8-1f3ff", native: "\u{1F9B8}\u{1F3FF}" }], version: 11 }, male_superhero: { id: "male_superhero", name: "Man Superhero", keywords: ["male", "good", "hero", "superpowers"], skins: [{ unified: "1f9b8-200d-2642-fe0f", native: "\u{1F9B8}\u200D\u2642\uFE0F" }, { unified: "1f9b8-1f3fb-200d-2642-fe0f", native: "\u{1F9B8}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9b8-1f3fc-200d-2642-fe0f", native: "\u{1F9B8}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9b8-1f3fd-200d-2642-fe0f", native: "\u{1F9B8}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9b8-1f3fe-200d-2642-fe0f", native: "\u{1F9B8}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9b8-1f3ff-200d-2642-fe0f", native: "\u{1F9B8}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 11 }, female_superhero: { id: "female_superhero", name: "Woman Superhero", keywords: ["female", "good", "heroine", "superpowers"], skins: [{ unified: "1f9b8-200d-2640-fe0f", native: "\u{1F9B8}\u200D\u2640\uFE0F" }, { unified: "1f9b8-1f3fb-200d-2640-fe0f", native: "\u{1F9B8}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9b8-1f3fc-200d-2640-fe0f", native: "\u{1F9B8}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9b8-1f3fd-200d-2640-fe0f", native: "\u{1F9B8}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9b8-1f3fe-200d-2640-fe0f", native: "\u{1F9B8}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9b8-1f3ff-200d-2640-fe0f", native: "\u{1F9B8}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 11 }, supervillain: { id: "supervillain", name: "Supervillain", keywords: ["marvel"], skins: [{ unified: "1f9b9", native: "\u{1F9B9}" }, { unified: "1f9b9-1f3fb", native: "\u{1F9B9}\u{1F3FB}" }, { unified: "1f9b9-1f3fc", native: "\u{1F9B9}\u{1F3FC}" }, { unified: "1f9b9-1f3fd", native: "\u{1F9B9}\u{1F3FD}" }, { unified: "1f9b9-1f3fe", native: "\u{1F9B9}\u{1F3FE}" }, { unified: "1f9b9-1f3ff", native: "\u{1F9B9}\u{1F3FF}" }], version: 11 }, male_supervillain: { id: "male_supervillain", name: "Man Supervillain", keywords: ["male", "evil", "bad", "criminal", "hero", "superpowers"], skins: [{ unified: "1f9b9-200d-2642-fe0f", native: "\u{1F9B9}\u200D\u2642\uFE0F" }, { unified: "1f9b9-1f3fb-200d-2642-fe0f", native: "\u{1F9B9}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9b9-1f3fc-200d-2642-fe0f", native: "\u{1F9B9}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9b9-1f3fd-200d-2642-fe0f", native: "\u{1F9B9}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9b9-1f3fe-200d-2642-fe0f", native: "\u{1F9B9}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9b9-1f3ff-200d-2642-fe0f", native: "\u{1F9B9}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 11 }, female_supervillain: { id: "female_supervillain", name: "Woman Supervillain", keywords: ["female", "evil", "bad", "criminal", "heroine", "superpowers"], skins: [{ unified: "1f9b9-200d-2640-fe0f", native: "\u{1F9B9}\u200D\u2640\uFE0F" }, { unified: "1f9b9-1f3fb-200d-2640-fe0f", native: "\u{1F9B9}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9b9-1f3fc-200d-2640-fe0f", native: "\u{1F9B9}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9b9-1f3fd-200d-2640-fe0f", native: "\u{1F9B9}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9b9-1f3fe-200d-2640-fe0f", native: "\u{1F9B9}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9b9-1f3ff-200d-2640-fe0f", native: "\u{1F9B9}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 11 }, mage: { id: "mage", name: "Mage", keywords: ["magic"], skins: [{ unified: "1f9d9", native: "\u{1F9D9}" }, { unified: "1f9d9-1f3fb", native: "\u{1F9D9}\u{1F3FB}" }, { unified: "1f9d9-1f3fc", native: "\u{1F9D9}\u{1F3FC}" }, { unified: "1f9d9-1f3fd", native: "\u{1F9D9}\u{1F3FD}" }, { unified: "1f9d9-1f3fe", native: "\u{1F9D9}\u{1F3FE}" }, { unified: "1f9d9-1f3ff", native: "\u{1F9D9}\u{1F3FF}" }], version: 5 }, male_mage: { id: "male_mage", name: "Man Mage", keywords: ["male", "sorcerer"], skins: [{ unified: "1f9d9-200d-2642-fe0f", native: "\u{1F9D9}\u200D\u2642\uFE0F" }, { unified: "1f9d9-1f3fb-200d-2642-fe0f", native: "\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9d9-1f3fc-200d-2642-fe0f", native: "\u{1F9D9}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9d9-1f3fd-200d-2642-fe0f", native: "\u{1F9D9}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9d9-1f3fe-200d-2642-fe0f", native: "\u{1F9D9}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9d9-1f3ff-200d-2642-fe0f", native: "\u{1F9D9}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, female_mage: { id: "female_mage", name: "Woman Mage", keywords: ["female", "witch"], skins: [{ unified: "1f9d9-200d-2640-fe0f", native: "\u{1F9D9}\u200D\u2640\uFE0F" }, { unified: "1f9d9-1f3fb-200d-2640-fe0f", native: "\u{1F9D9}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9d9-1f3fc-200d-2640-fe0f", native: "\u{1F9D9}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9d9-1f3fd-200d-2640-fe0f", native: "\u{1F9D9}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9d9-1f3fe-200d-2640-fe0f", native: "\u{1F9D9}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9d9-1f3ff-200d-2640-fe0f", native: "\u{1F9D9}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, fairy: { id: "fairy", name: "Fairy", keywords: ["wings", "magical"], skins: [{ unified: "1f9da", native: "\u{1F9DA}" }, { unified: "1f9da-1f3fb", native: "\u{1F9DA}\u{1F3FB}" }, { unified: "1f9da-1f3fc", native: "\u{1F9DA}\u{1F3FC}" }, { unified: "1f9da-1f3fd", native: "\u{1F9DA}\u{1F3FD}" }, { unified: "1f9da-1f3fe", native: "\u{1F9DA}\u{1F3FE}" }, { unified: "1f9da-1f3ff", native: "\u{1F9DA}\u{1F3FF}" }], version: 5 }, male_fairy: { id: "male_fairy", name: "Man Fairy", keywords: ["male"], skins: [{ unified: "1f9da-200d-2642-fe0f", native: "\u{1F9DA}\u200D\u2642\uFE0F" }, { unified: "1f9da-1f3fb-200d-2642-fe0f", native: "\u{1F9DA}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9da-1f3fc-200d-2642-fe0f", native: "\u{1F9DA}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9da-1f3fd-200d-2642-fe0f", native: "\u{1F9DA}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9da-1f3fe-200d-2642-fe0f", native: "\u{1F9DA}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9da-1f3ff-200d-2642-fe0f", native: "\u{1F9DA}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, female_fairy: { id: "female_fairy", name: "Woman Fairy", keywords: ["female"], skins: [{ unified: "1f9da-200d-2640-fe0f", native: "\u{1F9DA}\u200D\u2640\uFE0F" }, { unified: "1f9da-1f3fb-200d-2640-fe0f", native: "\u{1F9DA}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9da-1f3fc-200d-2640-fe0f", native: "\u{1F9DA}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9da-1f3fd-200d-2640-fe0f", native: "\u{1F9DA}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9da-1f3fe-200d-2640-fe0f", native: "\u{1F9DA}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9da-1f3ff-200d-2640-fe0f", native: "\u{1F9DA}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, vampire: { id: "vampire", name: "Vampire", keywords: ["blood", "twilight"], skins: [{ unified: "1f9db", native: "\u{1F9DB}" }, { unified: "1f9db-1f3fb", native: "\u{1F9DB}\u{1F3FB}" }, { unified: "1f9db-1f3fc", native: "\u{1F9DB}\u{1F3FC}" }, { unified: "1f9db-1f3fd", native: "\u{1F9DB}\u{1F3FD}" }, { unified: "1f9db-1f3fe", native: "\u{1F9DB}\u{1F3FE}" }, { unified: "1f9db-1f3ff", native: "\u{1F9DB}\u{1F3FF}" }], version: 5 }, male_vampire: { id: "male_vampire", name: "Man Vampire", keywords: ["male", "dracula"], skins: [{ unified: "1f9db-200d-2642-fe0f", native: "\u{1F9DB}\u200D\u2642\uFE0F" }, { unified: "1f9db-1f3fb-200d-2642-fe0f", native: "\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9db-1f3fc-200d-2642-fe0f", native: "\u{1F9DB}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9db-1f3fd-200d-2642-fe0f", native: "\u{1F9DB}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9db-1f3fe-200d-2642-fe0f", native: "\u{1F9DB}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9db-1f3ff-200d-2642-fe0f", native: "\u{1F9DB}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, female_vampire: { id: "female_vampire", name: "Woman Vampire", keywords: ["female"], skins: [{ unified: "1f9db-200d-2640-fe0f", native: "\u{1F9DB}\u200D\u2640\uFE0F" }, { unified: "1f9db-1f3fb-200d-2640-fe0f", native: "\u{1F9DB}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9db-1f3fc-200d-2640-fe0f", native: "\u{1F9DB}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9db-1f3fd-200d-2640-fe0f", native: "\u{1F9DB}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9db-1f3fe-200d-2640-fe0f", native: "\u{1F9DB}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9db-1f3ff-200d-2640-fe0f", native: "\u{1F9DB}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, merperson: { id: "merperson", name: "Merperson", keywords: ["sea"], skins: [{ unified: "1f9dc", native: "\u{1F9DC}" }, { unified: "1f9dc-1f3fb", native: "\u{1F9DC}\u{1F3FB}" }, { unified: "1f9dc-1f3fc", native: "\u{1F9DC}\u{1F3FC}" }, { unified: "1f9dc-1f3fd", native: "\u{1F9DC}\u{1F3FD}" }, { unified: "1f9dc-1f3fe", native: "\u{1F9DC}\u{1F3FE}" }, { unified: "1f9dc-1f3ff", native: "\u{1F9DC}\u{1F3FF}" }], version: 5 }, merman: { id: "merman", name: "Merman", keywords: ["man", "male", "triton"], skins: [{ unified: "1f9dc-200d-2642-fe0f", native: "\u{1F9DC}\u200D\u2642\uFE0F" }, { unified: "1f9dc-1f3fb-200d-2642-fe0f", native: "\u{1F9DC}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9dc-1f3fc-200d-2642-fe0f", native: "\u{1F9DC}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9dc-1f3fd-200d-2642-fe0f", native: "\u{1F9DC}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9dc-1f3fe-200d-2642-fe0f", native: "\u{1F9DC}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9dc-1f3ff-200d-2642-fe0f", native: "\u{1F9DC}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, mermaid: { id: "mermaid", name: "Mermaid", keywords: ["woman", "female", "merwoman", "ariel"], skins: [{ unified: "1f9dc-200d-2640-fe0f", native: "\u{1F9DC}\u200D\u2640\uFE0F" }, { unified: "1f9dc-1f3fb-200d-2640-fe0f", native: "\u{1F9DC}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9dc-1f3fc-200d-2640-fe0f", native: "\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9dc-1f3fd-200d-2640-fe0f", native: "\u{1F9DC}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9dc-1f3fe-200d-2640-fe0f", native: "\u{1F9DC}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9dc-1f3ff-200d-2640-fe0f", native: "\u{1F9DC}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, elf: { id: "elf", name: "Elf", keywords: ["magical"], skins: [{ unified: "1f9dd", native: "\u{1F9DD}" }, { unified: "1f9dd-1f3fb", native: "\u{1F9DD}\u{1F3FB}" }, { unified: "1f9dd-1f3fc", native: "\u{1F9DD}\u{1F3FC}" }, { unified: "1f9dd-1f3fd", native: "\u{1F9DD}\u{1F3FD}" }, { unified: "1f9dd-1f3fe", native: "\u{1F9DD}\u{1F3FE}" }, { unified: "1f9dd-1f3ff", native: "\u{1F9DD}\u{1F3FF}" }], version: 5 }, male_elf: { id: "male_elf", name: "Man Elf", keywords: ["male"], skins: [{ unified: "1f9dd-200d-2642-fe0f", native: "\u{1F9DD}\u200D\u2642\uFE0F" }, { unified: "1f9dd-1f3fb-200d-2642-fe0f", native: "\u{1F9DD}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9dd-1f3fc-200d-2642-fe0f", native: "\u{1F9DD}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9dd-1f3fd-200d-2642-fe0f", native: "\u{1F9DD}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9dd-1f3fe-200d-2642-fe0f", native: "\u{1F9DD}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9dd-1f3ff-200d-2642-fe0f", native: "\u{1F9DD}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, female_elf: { id: "female_elf", name: "Woman Elf", keywords: ["female"], skins: [{ unified: "1f9dd-200d-2640-fe0f", native: "\u{1F9DD}\u200D\u2640\uFE0F" }, { unified: "1f9dd-1f3fb-200d-2640-fe0f", native: "\u{1F9DD}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9dd-1f3fc-200d-2640-fe0f", native: "\u{1F9DD}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9dd-1f3fd-200d-2640-fe0f", native: "\u{1F9DD}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9dd-1f3fe-200d-2640-fe0f", native: "\u{1F9DD}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9dd-1f3ff-200d-2640-fe0f", native: "\u{1F9DD}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, genie: { id: "genie", name: "Genie", keywords: ["magical", "wishes"], skins: [{ unified: "1f9de", native: "\u{1F9DE}" }], version: 5 }, male_genie: { id: "male_genie", name: "Man Genie", keywords: ["male"], skins: [{ unified: "1f9de-200d-2642-fe0f", native: "\u{1F9DE}\u200D\u2642\uFE0F" }], version: 5 }, female_genie: { id: "female_genie", name: "Woman Genie", keywords: ["female"], skins: [{ unified: "1f9de-200d-2640-fe0f", native: "\u{1F9DE}\u200D\u2640\uFE0F" }], version: 5 }, zombie: { id: "zombie", name: "Zombie", keywords: ["dead"], skins: [{ unified: "1f9df", native: "\u{1F9DF}" }], version: 5 }, male_zombie: { id: "male_zombie", name: "Man Zombie", keywords: ["male", "dracula", "undead", "walking", "dead"], skins: [{ unified: "1f9df-200d-2642-fe0f", native: "\u{1F9DF}\u200D\u2642\uFE0F" }], version: 5 }, female_zombie: { id: "female_zombie", name: "Woman Zombie", keywords: ["female", "undead", "walking", "dead"], skins: [{ unified: "1f9df-200d-2640-fe0f", native: "\u{1F9DF}\u200D\u2640\uFE0F" }], version: 5 }, troll: { id: "troll", name: "Troll", keywords: ["mystical", "monster"], skins: [{ unified: "1f9cc", native: "\u{1F9CC}" }], version: 14 }, massage: { id: "massage", name: "Face Massage", keywords: ["person", "getting", "relax"], skins: [{ unified: "1f486", native: "\u{1F486}" }, { unified: "1f486-1f3fb", native: "\u{1F486}\u{1F3FB}" }, { unified: "1f486-1f3fc", native: "\u{1F486}\u{1F3FC}" }, { unified: "1f486-1f3fd", native: "\u{1F486}\u{1F3FD}" }, { unified: "1f486-1f3fe", native: "\u{1F486}\u{1F3FE}" }, { unified: "1f486-1f3ff", native: "\u{1F486}\u{1F3FF}" }], version: 1 }, "man-getting-massage": { id: "man-getting-massage", name: "Man Getting Massage", keywords: ["getting-massage", "male", "boy", "head"], skins: [{ unified: "1f486-200d-2642-fe0f", native: "\u{1F486}\u200D\u2642\uFE0F" }, { unified: "1f486-1f3fb-200d-2642-fe0f", native: "\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f486-1f3fc-200d-2642-fe0f", native: "\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f486-1f3fd-200d-2642-fe0f", native: "\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f486-1f3fe-200d-2642-fe0f", native: "\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f486-1f3ff-200d-2642-fe0f", native: "\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-getting-massage": { id: "woman-getting-massage", name: "Woman Getting Massage", keywords: ["getting-massage", "female", "girl", "head"], skins: [{ unified: "1f486-200d-2640-fe0f", native: "\u{1F486}\u200D\u2640\uFE0F" }, { unified: "1f486-1f3fb-200d-2640-fe0f", native: "\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f486-1f3fc-200d-2640-fe0f", native: "\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f486-1f3fd-200d-2640-fe0f", native: "\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f486-1f3fe-200d-2640-fe0f", native: "\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f486-1f3ff-200d-2640-fe0f", native: "\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, haircut: { id: "haircut", name: "Haircut", keywords: ["person", "getting", "hairstyle"], skins: [{ unified: "1f487", native: "\u{1F487}" }, { unified: "1f487-1f3fb", native: "\u{1F487}\u{1F3FB}" }, { unified: "1f487-1f3fc", native: "\u{1F487}\u{1F3FC}" }, { unified: "1f487-1f3fd", native: "\u{1F487}\u{1F3FD}" }, { unified: "1f487-1f3fe", native: "\u{1F487}\u{1F3FE}" }, { unified: "1f487-1f3ff", native: "\u{1F487}\u{1F3FF}" }], version: 1 }, "man-getting-haircut": { id: "man-getting-haircut", name: "Man Getting Haircut", keywords: ["getting-haircut", "male", "boy"], skins: [{ unified: "1f487-200d-2642-fe0f", native: "\u{1F487}\u200D\u2642\uFE0F" }, { unified: "1f487-1f3fb-200d-2642-fe0f", native: "\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f487-1f3fc-200d-2642-fe0f", native: "\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f487-1f3fd-200d-2642-fe0f", native: "\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f487-1f3fe-200d-2642-fe0f", native: "\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f487-1f3ff-200d-2642-fe0f", native: "\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-getting-haircut": { id: "woman-getting-haircut", name: "Woman Getting Haircut", keywords: ["getting-haircut", "female", "girl"], skins: [{ unified: "1f487-200d-2640-fe0f", native: "\u{1F487}\u200D\u2640\uFE0F" }, { unified: "1f487-1f3fb-200d-2640-fe0f", native: "\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f487-1f3fc-200d-2640-fe0f", native: "\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f487-1f3fd-200d-2640-fe0f", native: "\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f487-1f3fe-200d-2640-fe0f", native: "\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f487-1f3ff-200d-2640-fe0f", native: "\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, walking: { id: "walking", name: "Pedestrian", keywords: ["walking", "person", "move"], skins: [{ unified: "1f6b6", native: "\u{1F6B6}" }, { unified: "1f6b6-1f3fb", native: "\u{1F6B6}\u{1F3FB}" }, { unified: "1f6b6-1f3fc", native: "\u{1F6B6}\u{1F3FC}" }, { unified: "1f6b6-1f3fd", native: "\u{1F6B6}\u{1F3FD}" }, { unified: "1f6b6-1f3fe", native: "\u{1F6B6}\u{1F3FE}" }, { unified: "1f6b6-1f3ff", native: "\u{1F6B6}\u{1F3FF}" }], version: 1 }, "man-walking": { id: "man-walking", name: "Man Walking", keywords: ["human", "feet", "steps"], skins: [{ unified: "1f6b6-200d-2642-fe0f", native: "\u{1F6B6}\u200D\u2642\uFE0F" }, { unified: "1f6b6-1f3fb-200d-2642-fe0f", native: "\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f6b6-1f3fc-200d-2642-fe0f", native: "\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f6b6-1f3fd-200d-2642-fe0f", native: "\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f6b6-1f3fe-200d-2642-fe0f", native: "\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f6b6-1f3ff-200d-2642-fe0f", native: "\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-walking": { id: "woman-walking", name: "Woman Walking", keywords: ["human", "feet", "steps", "female"], skins: [{ unified: "1f6b6-200d-2640-fe0f", native: "\u{1F6B6}\u200D\u2640\uFE0F" }, { unified: "1f6b6-1f3fb-200d-2640-fe0f", native: "\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f6b6-1f3fc-200d-2640-fe0f", native: "\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f6b6-1f3fd-200d-2640-fe0f", native: "\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f6b6-1f3fe-200d-2640-fe0f", native: "\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f6b6-1f3ff-200d-2640-fe0f", native: "\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, standing_person: { id: "standing_person", name: "Standing Person", keywords: ["still"], skins: [{ unified: "1f9cd", native: "\u{1F9CD}" }, { unified: "1f9cd-1f3fb", native: "\u{1F9CD}\u{1F3FB}" }, { unified: "1f9cd-1f3fc", native: "\u{1F9CD}\u{1F3FC}" }, { unified: "1f9cd-1f3fd", native: "\u{1F9CD}\u{1F3FD}" }, { unified: "1f9cd-1f3fe", native: "\u{1F9CD}\u{1F3FE}" }, { unified: "1f9cd-1f3ff", native: "\u{1F9CD}\u{1F3FF}" }], version: 12 }, man_standing: { id: "man_standing", name: "Man Standing", keywords: ["still"], skins: [{ unified: "1f9cd-200d-2642-fe0f", native: "\u{1F9CD}\u200D\u2642\uFE0F" }, { unified: "1f9cd-1f3fb-200d-2642-fe0f", native: "\u{1F9CD}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9cd-1f3fc-200d-2642-fe0f", native: "\u{1F9CD}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9cd-1f3fd-200d-2642-fe0f", native: "\u{1F9CD}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9cd-1f3fe-200d-2642-fe0f", native: "\u{1F9CD}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9cd-1f3ff-200d-2642-fe0f", native: "\u{1F9CD}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 12 }, woman_standing: { id: "woman_standing", name: "Woman Standing", keywords: ["still"], skins: [{ unified: "1f9cd-200d-2640-fe0f", native: "\u{1F9CD}\u200D\u2640\uFE0F" }, { unified: "1f9cd-1f3fb-200d-2640-fe0f", native: "\u{1F9CD}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9cd-1f3fc-200d-2640-fe0f", native: "\u{1F9CD}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9cd-1f3fd-200d-2640-fe0f", native: "\u{1F9CD}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9cd-1f3fe-200d-2640-fe0f", native: "\u{1F9CD}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9cd-1f3ff-200d-2640-fe0f", native: "\u{1F9CD}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 12 }, kneeling_person: { id: "kneeling_person", name: "Kneeling Person", keywords: ["pray", "respectful"], skins: [{ unified: "1f9ce", native: "\u{1F9CE}" }, { unified: "1f9ce-1f3fb", native: "\u{1F9CE}\u{1F3FB}" }, { unified: "1f9ce-1f3fc", native: "\u{1F9CE}\u{1F3FC}" }, { unified: "1f9ce-1f3fd", native: "\u{1F9CE}\u{1F3FD}" }, { unified: "1f9ce-1f3fe", native: "\u{1F9CE}\u{1F3FE}" }, { unified: "1f9ce-1f3ff", native: "\u{1F9CE}\u{1F3FF}" }], version: 12 }, man_kneeling: { id: "man_kneeling", name: "Man Kneeling", keywords: ["pray", "respectful"], skins: [{ unified: "1f9ce-200d-2642-fe0f", native: "\u{1F9CE}\u200D\u2642\uFE0F" }, { unified: "1f9ce-1f3fb-200d-2642-fe0f", native: "\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9ce-1f3fc-200d-2642-fe0f", native: "\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9ce-1f3fd-200d-2642-fe0f", native: "\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9ce-1f3fe-200d-2642-fe0f", native: "\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9ce-1f3ff-200d-2642-fe0f", native: "\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 12 }, woman_kneeling: { id: "woman_kneeling", name: "Woman Kneeling", keywords: ["respectful", "pray"], skins: [{ unified: "1f9ce-200d-2640-fe0f", native: "\u{1F9CE}\u200D\u2640\uFE0F" }, { unified: "1f9ce-1f3fb-200d-2640-fe0f", native: "\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9ce-1f3fc-200d-2640-fe0f", native: "\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9ce-1f3fd-200d-2640-fe0f", native: "\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9ce-1f3fe-200d-2640-fe0f", native: "\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9ce-1f3ff-200d-2640-fe0f", native: "\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 12 }, person_with_probing_cane: { id: "person_with_probing_cane", name: "Person with White Cane", keywords: ["probing", "blind"], skins: [{ unified: "1f9d1-200d-1f9af", native: "\u{1F9D1}\u200D\u{1F9AF}" }, { unified: "1f9d1-1f3fb-200d-1f9af", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}" }, { unified: "1f9d1-1f3fc-200d-1f9af", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}" }, { unified: "1f9d1-1f3fd-200d-1f9af", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}" }, { unified: "1f9d1-1f3fe-200d-1f9af", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}" }, { unified: "1f9d1-1f3ff-200d-1f9af", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}" }], version: 12.1 }, man_with_probing_cane: { id: "man_with_probing_cane", name: "Man with White Cane", keywords: ["probing", "blind"], skins: [{ unified: "1f468-200d-1f9af", native: "\u{1F468}\u200D\u{1F9AF}" }, { unified: "1f468-1f3fb-200d-1f9af", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9AF}" }, { unified: "1f468-1f3fc-200d-1f9af", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9AF}" }, { unified: "1f468-1f3fd-200d-1f9af", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9AF}" }, { unified: "1f468-1f3fe-200d-1f9af", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9AF}" }, { unified: "1f468-1f3ff-200d-1f9af", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9AF}" }], version: 12 }, woman_with_probing_cane: { id: "woman_with_probing_cane", name: "Woman with White Cane", keywords: ["probing", "blind"], skins: [{ unified: "1f469-200d-1f9af", native: "\u{1F469}\u200D\u{1F9AF}" }, { unified: "1f469-1f3fb-200d-1f9af", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9AF}" }, { unified: "1f469-1f3fc-200d-1f9af", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9AF}" }, { unified: "1f469-1f3fd-200d-1f9af", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9AF}" }, { unified: "1f469-1f3fe-200d-1f9af", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9AF}" }, { unified: "1f469-1f3ff-200d-1f9af", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9AF}" }], version: 12 }, person_in_motorized_wheelchair: { id: "person_in_motorized_wheelchair", name: "Person in Motorized Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f9d1-200d-1f9bc", native: "\u{1F9D1}\u200D\u{1F9BC}" }, { unified: "1f9d1-1f3fb-200d-1f9bc", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}" }, { unified: "1f9d1-1f3fc-200d-1f9bc", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}" }, { unified: "1f9d1-1f3fd-200d-1f9bc", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}" }, { unified: "1f9d1-1f3fe-200d-1f9bc", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}" }, { unified: "1f9d1-1f3ff-200d-1f9bc", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}" }], version: 12.1 }, man_in_motorized_wheelchair: { id: "man_in_motorized_wheelchair", name: "Man in Motorized Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f468-200d-1f9bc", native: "\u{1F468}\u200D\u{1F9BC}" }, { unified: "1f468-1f3fb-200d-1f9bc", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9BC}" }, { unified: "1f468-1f3fc-200d-1f9bc", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9BC}" }, { unified: "1f468-1f3fd-200d-1f9bc", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9BC}" }, { unified: "1f468-1f3fe-200d-1f9bc", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9BC}" }, { unified: "1f468-1f3ff-200d-1f9bc", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9BC}" }], version: 12 }, woman_in_motorized_wheelchair: { id: "woman_in_motorized_wheelchair", name: "Woman in Motorized Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f469-200d-1f9bc", native: "\u{1F469}\u200D\u{1F9BC}" }, { unified: "1f469-1f3fb-200d-1f9bc", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9BC}" }, { unified: "1f469-1f3fc-200d-1f9bc", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9BC}" }, { unified: "1f469-1f3fd-200d-1f9bc", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}" }, { unified: "1f469-1f3fe-200d-1f9bc", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9BC}" }, { unified: "1f469-1f3ff-200d-1f9bc", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9BC}" }], version: 12 }, person_in_manual_wheelchair: { id: "person_in_manual_wheelchair", name: "Person in Manual Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f9d1-200d-1f9bd", native: "\u{1F9D1}\u200D\u{1F9BD}" }, { unified: "1f9d1-1f3fb-200d-1f9bd", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}" }, { unified: "1f9d1-1f3fc-200d-1f9bd", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}" }, { unified: "1f9d1-1f3fd-200d-1f9bd", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}" }, { unified: "1f9d1-1f3fe-200d-1f9bd", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}" }, { unified: "1f9d1-1f3ff-200d-1f9bd", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}" }], version: 12.1 }, man_in_manual_wheelchair: { id: "man_in_manual_wheelchair", name: "Man in Manual Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f468-200d-1f9bd", native: "\u{1F468}\u200D\u{1F9BD}" }, { unified: "1f468-1f3fb-200d-1f9bd", native: "\u{1F468}\u{1F3FB}\u200D\u{1F9BD}" }, { unified: "1f468-1f3fc-200d-1f9bd", native: "\u{1F468}\u{1F3FC}\u200D\u{1F9BD}" }, { unified: "1f468-1f3fd-200d-1f9bd", native: "\u{1F468}\u{1F3FD}\u200D\u{1F9BD}" }, { unified: "1f468-1f3fe-200d-1f9bd", native: "\u{1F468}\u{1F3FE}\u200D\u{1F9BD}" }, { unified: "1f468-1f3ff-200d-1f9bd", native: "\u{1F468}\u{1F3FF}\u200D\u{1F9BD}" }], version: 12 }, woman_in_manual_wheelchair: { id: "woman_in_manual_wheelchair", name: "Woman in Manual Wheelchair", keywords: ["disability", "accessibility"], skins: [{ unified: "1f469-200d-1f9bd", native: "\u{1F469}\u200D\u{1F9BD}" }, { unified: "1f469-1f3fb-200d-1f9bd", native: "\u{1F469}\u{1F3FB}\u200D\u{1F9BD}" }, { unified: "1f469-1f3fc-200d-1f9bd", native: "\u{1F469}\u{1F3FC}\u200D\u{1F9BD}" }, { unified: "1f469-1f3fd-200d-1f9bd", native: "\u{1F469}\u{1F3FD}\u200D\u{1F9BD}" }, { unified: "1f469-1f3fe-200d-1f9bd", native: "\u{1F469}\u{1F3FE}\u200D\u{1F9BD}" }, { unified: "1f469-1f3ff-200d-1f9bd", native: "\u{1F469}\u{1F3FF}\u200D\u{1F9BD}" }], version: 12 }, runner: { id: "runner", name: "Runner", keywords: ["running", "person", "move"], skins: [{ unified: "1f3c3", native: "\u{1F3C3}" }, { unified: "1f3c3-1f3fb", native: "\u{1F3C3}\u{1F3FB}" }, { unified: "1f3c3-1f3fc", native: "\u{1F3C3}\u{1F3FC}" }, { unified: "1f3c3-1f3fd", native: "\u{1F3C3}\u{1F3FD}" }, { unified: "1f3c3-1f3fe", native: "\u{1F3C3}\u{1F3FE}" }, { unified: "1f3c3-1f3ff", native: "\u{1F3C3}\u{1F3FF}" }], version: 1 }, "man-running": { id: "man-running", name: "Man Running", keywords: ["walking", "exercise", "race"], skins: [{ unified: "1f3c3-200d-2642-fe0f", native: "\u{1F3C3}\u200D\u2642\uFE0F" }, { unified: "1f3c3-1f3fb-200d-2642-fe0f", native: "\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f3c3-1f3fc-200d-2642-fe0f", native: "\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f3c3-1f3fd-200d-2642-fe0f", native: "\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f3c3-1f3fe-200d-2642-fe0f", native: "\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f3c3-1f3ff-200d-2642-fe0f", native: "\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-running": { id: "woman-running", name: "Woman Running", keywords: ["walking", "exercise", "race", "female"], skins: [{ unified: "1f3c3-200d-2640-fe0f", native: "\u{1F3C3}\u200D\u2640\uFE0F" }, { unified: "1f3c3-1f3fb-200d-2640-fe0f", native: "\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f3c3-1f3fc-200d-2640-fe0f", native: "\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f3c3-1f3fd-200d-2640-fe0f", native: "\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f3c3-1f3fe-200d-2640-fe0f", native: "\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f3c3-1f3ff-200d-2640-fe0f", native: "\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, dancer: { id: "dancer", name: "Dancer", keywords: ["woman", "dancing", "female", "girl", "fun"], skins: [{ unified: "1f483", native: "\u{1F483}" }, { unified: "1f483-1f3fb", native: "\u{1F483}\u{1F3FB}" }, { unified: "1f483-1f3fc", native: "\u{1F483}\u{1F3FC}" }, { unified: "1f483-1f3fd", native: "\u{1F483}\u{1F3FD}" }, { unified: "1f483-1f3fe", native: "\u{1F483}\u{1F3FE}" }, { unified: "1f483-1f3ff", native: "\u{1F483}\u{1F3FF}" }], version: 1 }, man_dancing: { id: "man_dancing", name: "Man Dancing", keywords: ["male", "boy", "fun", "dancer"], skins: [{ unified: "1f57a", native: "\u{1F57A}" }, { unified: "1f57a-1f3fb", native: "\u{1F57A}\u{1F3FB}" }, { unified: "1f57a-1f3fc", native: "\u{1F57A}\u{1F3FC}" }, { unified: "1f57a-1f3fd", native: "\u{1F57A}\u{1F3FD}" }, { unified: "1f57a-1f3fe", native: "\u{1F57A}\u{1F3FE}" }, { unified: "1f57a-1f3ff", native: "\u{1F57A}\u{1F3FF}" }], version: 3 }, man_in_business_suit_levitating: { id: "man_in_business_suit_levitating", name: "Person in Suit Levitating", keywords: ["man", "business", "levitate", "hover", "jump"], skins: [{ unified: "1f574-fe0f", native: "\u{1F574}\uFE0F" }, { unified: "1f574-1f3fb", native: "\u{1F574}\u{1F3FB}" }, { unified: "1f574-1f3fc", native: "\u{1F574}\u{1F3FC}" }, { unified: "1f574-1f3fd", native: "\u{1F574}\u{1F3FD}" }, { unified: "1f574-1f3fe", native: "\u{1F574}\u{1F3FE}" }, { unified: "1f574-1f3ff", native: "\u{1F574}\u{1F3FF}" }], version: 1 }, dancers: { id: "dancers", name: "Woman with Bunny Ears", keywords: ["dancers", "people", "perform", "costume"], skins: [{ unified: "1f46f", native: "\u{1F46F}" }], version: 1 }, "men-with-bunny-ears-partying": { id: "men-with-bunny-ears-partying", name: "Men with Bunny Ears", keywords: ["with-bunny-ears-partying", "man", "male", "boys"], skins: [{ unified: "1f46f-200d-2642-fe0f", native: "\u{1F46F}\u200D\u2642\uFE0F" }], version: 4 }, "women-with-bunny-ears-partying": { id: "women-with-bunny-ears-partying", name: "Women with Bunny Ears", keywords: ["with-bunny-ears-partying", "woman", "female", "girls"], skins: [{ unified: "1f46f-200d-2640-fe0f", native: "\u{1F46F}\u200D\u2640\uFE0F" }], version: 4 }, person_in_steamy_room: { id: "person_in_steamy_room", name: "Person in Steamy Room", keywords: ["relax", "spa"], skins: [{ unified: "1f9d6", native: "\u{1F9D6}" }, { unified: "1f9d6-1f3fb", native: "\u{1F9D6}\u{1F3FB}" }, { unified: "1f9d6-1f3fc", native: "\u{1F9D6}\u{1F3FC}" }, { unified: "1f9d6-1f3fd", native: "\u{1F9D6}\u{1F3FD}" }, { unified: "1f9d6-1f3fe", native: "\u{1F9D6}\u{1F3FE}" }, { unified: "1f9d6-1f3ff", native: "\u{1F9D6}\u{1F3FF}" }], version: 5 }, man_in_steamy_room: { id: "man_in_steamy_room", name: "Man in Steamy Room", keywords: ["male", "spa", "steamroom", "sauna"], skins: [{ unified: "1f9d6-200d-2642-fe0f", native: "\u{1F9D6}\u200D\u2642\uFE0F" }, { unified: "1f9d6-1f3fb-200d-2642-fe0f", native: "\u{1F9D6}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9d6-1f3fc-200d-2642-fe0f", native: "\u{1F9D6}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9d6-1f3fd-200d-2642-fe0f", native: "\u{1F9D6}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9d6-1f3fe-200d-2642-fe0f", native: "\u{1F9D6}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9d6-1f3ff-200d-2642-fe0f", native: "\u{1F9D6}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, woman_in_steamy_room: { id: "woman_in_steamy_room", name: "Woman in Steamy Room", keywords: ["female", "spa", "steamroom", "sauna"], skins: [{ unified: "1f9d6-200d-2640-fe0f", native: "\u{1F9D6}\u200D\u2640\uFE0F" }, { unified: "1f9d6-1f3fb-200d-2640-fe0f", native: "\u{1F9D6}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9d6-1f3fc-200d-2640-fe0f", native: "\u{1F9D6}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9d6-1f3fd-200d-2640-fe0f", native: "\u{1F9D6}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9d6-1f3fe-200d-2640-fe0f", native: "\u{1F9D6}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9d6-1f3ff-200d-2640-fe0f", native: "\u{1F9D6}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, person_climbing: { id: "person_climbing", name: "Person Climbing", keywords: ["sport"], skins: [{ unified: "1f9d7", native: "\u{1F9D7}" }, { unified: "1f9d7-1f3fb", native: "\u{1F9D7}\u{1F3FB}" }, { unified: "1f9d7-1f3fc", native: "\u{1F9D7}\u{1F3FC}" }, { unified: "1f9d7-1f3fd", native: "\u{1F9D7}\u{1F3FD}" }, { unified: "1f9d7-1f3fe", native: "\u{1F9D7}\u{1F3FE}" }, { unified: "1f9d7-1f3ff", native: "\u{1F9D7}\u{1F3FF}" }], version: 5 }, man_climbing: { id: "man_climbing", name: "Man Climbing", keywords: ["sports", "hobby", "male", "rock"], skins: [{ unified: "1f9d7-200d-2642-fe0f", native: "\u{1F9D7}\u200D\u2642\uFE0F" }, { unified: "1f9d7-1f3fb-200d-2642-fe0f", native: "\u{1F9D7}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9d7-1f3fc-200d-2642-fe0f", native: "\u{1F9D7}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9d7-1f3fd-200d-2642-fe0f", native: "\u{1F9D7}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9d7-1f3fe-200d-2642-fe0f", native: "\u{1F9D7}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9d7-1f3ff-200d-2642-fe0f", native: "\u{1F9D7}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, woman_climbing: { id: "woman_climbing", name: "Woman Climbing", keywords: ["sports", "hobby", "female", "rock"], skins: [{ unified: "1f9d7-200d-2640-fe0f", native: "\u{1F9D7}\u200D\u2640\uFE0F" }, { unified: "1f9d7-1f3fb-200d-2640-fe0f", native: "\u{1F9D7}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9d7-1f3fc-200d-2640-fe0f", native: "\u{1F9D7}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9d7-1f3fd-200d-2640-fe0f", native: "\u{1F9D7}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9d7-1f3fe-200d-2640-fe0f", native: "\u{1F9D7}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9d7-1f3ff-200d-2640-fe0f", native: "\u{1F9D7}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, fencer: { id: "fencer", name: "Fencer", keywords: ["person", "fencing", "sports", "sword"], skins: [{ unified: "1f93a", native: "\u{1F93A}" }], version: 3 }, horse_racing: { id: "horse_racing", name: "Horse Racing", keywords: ["animal", "betting", "competition", "gambling", "luck"], skins: [{ unified: "1f3c7", native: "\u{1F3C7}" }, { unified: "1f3c7-1f3fb", native: "\u{1F3C7}\u{1F3FB}" }, { unified: "1f3c7-1f3fc", native: "\u{1F3C7}\u{1F3FC}" }, { unified: "1f3c7-1f3fd", native: "\u{1F3C7}\u{1F3FD}" }, { unified: "1f3c7-1f3fe", native: "\u{1F3C7}\u{1F3FE}" }, { unified: "1f3c7-1f3ff", native: "\u{1F3C7}\u{1F3FF}" }], version: 1 }, skier: { id: "skier", name: "Skier", keywords: ["sports", "winter", "snow"], skins: [{ unified: "26f7-fe0f", native: "\u26F7\uFE0F" }], version: 1 }, snowboarder: { id: "snowboarder", name: "Snowboarder", keywords: ["sports", "winter"], skins: [{ unified: "1f3c2", native: "\u{1F3C2}" }, { unified: "1f3c2-1f3fb", native: "\u{1F3C2}\u{1F3FB}" }, { unified: "1f3c2-1f3fc", native: "\u{1F3C2}\u{1F3FC}" }, { unified: "1f3c2-1f3fd", native: "\u{1F3C2}\u{1F3FD}" }, { unified: "1f3c2-1f3fe", native: "\u{1F3C2}\u{1F3FE}" }, { unified: "1f3c2-1f3ff", native: "\u{1F3C2}\u{1F3FF}" }], version: 1 }, golfer: { id: "golfer", name: "Person Golfing", keywords: ["golfer", "sports", "business"], skins: [{ unified: "1f3cc-fe0f", native: "\u{1F3CC}\uFE0F" }, { unified: "1f3cc-1f3fb", native: "\u{1F3CC}\u{1F3FB}" }, { unified: "1f3cc-1f3fc", native: "\u{1F3CC}\u{1F3FC}" }, { unified: "1f3cc-1f3fd", native: "\u{1F3CC}\u{1F3FD}" }, { unified: "1f3cc-1f3fe", native: "\u{1F3CC}\u{1F3FE}" }, { unified: "1f3cc-1f3ff", native: "\u{1F3CC}\u{1F3FF}" }], version: 1 }, "man-golfing": { id: "man-golfing", name: "Man Golfing", keywords: ["sport"], skins: [{ unified: "1f3cc-fe0f-200d-2642-fe0f", native: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F" }, { unified: "1f3cc-1f3fb-200d-2642-fe0f", native: "\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f3cc-1f3fc-200d-2642-fe0f", native: "\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f3cc-1f3fd-200d-2642-fe0f", native: "\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f3cc-1f3fe-200d-2642-fe0f", native: "\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f3cc-1f3ff-200d-2642-fe0f", native: "\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-golfing": { id: "woman-golfing", name: "Woman Golfing", keywords: ["sports", "business", "female"], skins: [{ unified: "1f3cc-fe0f-200d-2640-fe0f", native: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F" }, { unified: "1f3cc-1f3fb-200d-2640-fe0f", native: "\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f3cc-1f3fc-200d-2640-fe0f", native: "\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f3cc-1f3fd-200d-2640-fe0f", native: "\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f3cc-1f3fe-200d-2640-fe0f", native: "\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f3cc-1f3ff-200d-2640-fe0f", native: "\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, surfer: { id: "surfer", name: "Surfer", keywords: ["person", "surfing", "sport", "sea"], skins: [{ unified: "1f3c4", native: "\u{1F3C4}" }, { unified: "1f3c4-1f3fb", native: "\u{1F3C4}\u{1F3FB}" }, { unified: "1f3c4-1f3fc", native: "\u{1F3C4}\u{1F3FC}" }, { unified: "1f3c4-1f3fd", native: "\u{1F3C4}\u{1F3FD}" }, { unified: "1f3c4-1f3fe", native: "\u{1F3C4}\u{1F3FE}" }, { unified: "1f3c4-1f3ff", native: "\u{1F3C4}\u{1F3FF}" }], version: 1 }, "man-surfing": { id: "man-surfing", name: "Man Surfing", keywords: ["sports", "ocean", "sea", "summer", "beach"], skins: [{ unified: "1f3c4-200d-2642-fe0f", native: "\u{1F3C4}\u200D\u2642\uFE0F" }, { unified: "1f3c4-1f3fb-200d-2642-fe0f", native: "\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f3c4-1f3fc-200d-2642-fe0f", native: "\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f3c4-1f3fd-200d-2642-fe0f", native: "\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f3c4-1f3fe-200d-2642-fe0f", native: "\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f3c4-1f3ff-200d-2642-fe0f", native: "\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-surfing": { id: "woman-surfing", name: "Woman Surfing", keywords: ["sports", "ocean", "sea", "summer", "beach", "female"], skins: [{ unified: "1f3c4-200d-2640-fe0f", native: "\u{1F3C4}\u200D\u2640\uFE0F" }, { unified: "1f3c4-1f3fb-200d-2640-fe0f", native: "\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f3c4-1f3fc-200d-2640-fe0f", native: "\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f3c4-1f3fd-200d-2640-fe0f", native: "\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f3c4-1f3fe-200d-2640-fe0f", native: "\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f3c4-1f3ff-200d-2640-fe0f", native: "\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, rowboat: { id: "rowboat", name: "Rowboat", keywords: ["person", "rowing", "boat", "sport", "move"], skins: [{ unified: "1f6a3", native: "\u{1F6A3}" }, { unified: "1f6a3-1f3fb", native: "\u{1F6A3}\u{1F3FB}" }, { unified: "1f6a3-1f3fc", native: "\u{1F6A3}\u{1F3FC}" }, { unified: "1f6a3-1f3fd", native: "\u{1F6A3}\u{1F3FD}" }, { unified: "1f6a3-1f3fe", native: "\u{1F6A3}\u{1F3FE}" }, { unified: "1f6a3-1f3ff", native: "\u{1F6A3}\u{1F3FF}" }], version: 1 }, "man-rowing-boat": { id: "man-rowing-boat", name: "Man Rowing Boat", keywords: ["rowing-boat", "sports", "hobby", "water", "ship"], skins: [{ unified: "1f6a3-200d-2642-fe0f", native: "\u{1F6A3}\u200D\u2642\uFE0F" }, { unified: "1f6a3-1f3fb-200d-2642-fe0f", native: "\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f6a3-1f3fc-200d-2642-fe0f", native: "\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f6a3-1f3fd-200d-2642-fe0f", native: "\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f6a3-1f3fe-200d-2642-fe0f", native: "\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f6a3-1f3ff-200d-2642-fe0f", native: "\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-rowing-boat": { id: "woman-rowing-boat", name: "Woman Rowing Boat", keywords: ["rowing-boat", "sports", "hobby", "water", "ship", "female"], skins: [{ unified: "1f6a3-200d-2640-fe0f", native: "\u{1F6A3}\u200D\u2640\uFE0F" }, { unified: "1f6a3-1f3fb-200d-2640-fe0f", native: "\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f6a3-1f3fc-200d-2640-fe0f", native: "\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f6a3-1f3fd-200d-2640-fe0f", native: "\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f6a3-1f3fe-200d-2640-fe0f", native: "\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f6a3-1f3ff-200d-2640-fe0f", native: "\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, swimmer: { id: "swimmer", name: "Swimmer", keywords: ["person", "swimming", "sport", "pool"], skins: [{ unified: "1f3ca", native: "\u{1F3CA}" }, { unified: "1f3ca-1f3fb", native: "\u{1F3CA}\u{1F3FB}" }, { unified: "1f3ca-1f3fc", native: "\u{1F3CA}\u{1F3FC}" }, { unified: "1f3ca-1f3fd", native: "\u{1F3CA}\u{1F3FD}" }, { unified: "1f3ca-1f3fe", native: "\u{1F3CA}\u{1F3FE}" }, { unified: "1f3ca-1f3ff", native: "\u{1F3CA}\u{1F3FF}" }], version: 1 }, "man-swimming": { id: "man-swimming", name: "Man Swimming", keywords: ["sports", "exercise", "human", "athlete", "water", "summer"], skins: [{ unified: "1f3ca-200d-2642-fe0f", native: "\u{1F3CA}\u200D\u2642\uFE0F" }, { unified: "1f3ca-1f3fb-200d-2642-fe0f", native: "\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f3ca-1f3fc-200d-2642-fe0f", native: "\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f3ca-1f3fd-200d-2642-fe0f", native: "\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f3ca-1f3fe-200d-2642-fe0f", native: "\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f3ca-1f3ff-200d-2642-fe0f", native: "\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-swimming": { id: "woman-swimming", name: "Woman Swimming", keywords: ["sports", "exercise", "human", "athlete", "water", "summer", "female"], skins: [{ unified: "1f3ca-200d-2640-fe0f", native: "\u{1F3CA}\u200D\u2640\uFE0F" }, { unified: "1f3ca-1f3fb-200d-2640-fe0f", native: "\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f3ca-1f3fc-200d-2640-fe0f", native: "\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f3ca-1f3fd-200d-2640-fe0f", native: "\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f3ca-1f3fe-200d-2640-fe0f", native: "\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f3ca-1f3ff-200d-2640-fe0f", native: "\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, person_with_ball: { id: "person_with_ball", name: "Person Bouncing Ball", keywords: ["with", "sports", "human"], skins: [{ unified: "26f9-fe0f", native: "\u26F9\uFE0F" }, { unified: "26f9-1f3fb", native: "\u26F9\u{1F3FB}" }, { unified: "26f9-1f3fc", native: "\u26F9\u{1F3FC}" }, { unified: "26f9-1f3fd", native: "\u26F9\u{1F3FD}" }, { unified: "26f9-1f3fe", native: "\u26F9\u{1F3FE}" }, { unified: "26f9-1f3ff", native: "\u26F9\u{1F3FF}" }], version: 1 }, "man-bouncing-ball": { id: "man-bouncing-ball", name: "Man Bouncing Ball", keywords: ["bouncing-ball", "sport"], skins: [{ unified: "26f9-fe0f-200d-2642-fe0f", native: "\u26F9\uFE0F\u200D\u2642\uFE0F" }, { unified: "26f9-1f3fb-200d-2642-fe0f", native: "\u26F9\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "26f9-1f3fc-200d-2642-fe0f", native: "\u26F9\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "26f9-1f3fd-200d-2642-fe0f", native: "\u26F9\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "26f9-1f3fe-200d-2642-fe0f", native: "\u26F9\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "26f9-1f3ff-200d-2642-fe0f", native: "\u26F9\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-bouncing-ball": { id: "woman-bouncing-ball", name: "Woman Bouncing Ball", keywords: ["bouncing-ball", "sports", "human", "female"], skins: [{ unified: "26f9-fe0f-200d-2640-fe0f", native: "\u26F9\uFE0F\u200D\u2640\uFE0F" }, { unified: "26f9-1f3fb-200d-2640-fe0f", native: "\u26F9\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "26f9-1f3fc-200d-2640-fe0f", native: "\u26F9\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "26f9-1f3fd-200d-2640-fe0f", native: "\u26F9\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "26f9-1f3fe-200d-2640-fe0f", native: "\u26F9\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "26f9-1f3ff-200d-2640-fe0f", native: "\u26F9\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, weight_lifter: { id: "weight_lifter", name: "Person Lifting Weights", keywords: ["weight", "lifter", "sports", "training", "exercise"], skins: [{ unified: "1f3cb-fe0f", native: "\u{1F3CB}\uFE0F" }, { unified: "1f3cb-1f3fb", native: "\u{1F3CB}\u{1F3FB}" }, { unified: "1f3cb-1f3fc", native: "\u{1F3CB}\u{1F3FC}" }, { unified: "1f3cb-1f3fd", native: "\u{1F3CB}\u{1F3FD}" }, { unified: "1f3cb-1f3fe", native: "\u{1F3CB}\u{1F3FE}" }, { unified: "1f3cb-1f3ff", native: "\u{1F3CB}\u{1F3FF}" }], version: 1 }, "man-lifting-weights": { id: "man-lifting-weights", name: "Man Lifting Weights", keywords: ["lifting-weights", "sport"], skins: [{ unified: "1f3cb-fe0f-200d-2642-fe0f", native: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F" }, { unified: "1f3cb-1f3fb-200d-2642-fe0f", native: "\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f3cb-1f3fc-200d-2642-fe0f", native: "\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f3cb-1f3fd-200d-2642-fe0f", native: "\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f3cb-1f3fe-200d-2642-fe0f", native: "\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f3cb-1f3ff-200d-2642-fe0f", native: "\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-lifting-weights": { id: "woman-lifting-weights", name: "Woman Lifting Weights", keywords: ["lifting-weights", "sports", "training", "exercise", "female"], skins: [{ unified: "1f3cb-fe0f-200d-2640-fe0f", native: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F" }, { unified: "1f3cb-1f3fb-200d-2640-fe0f", native: "\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f3cb-1f3fc-200d-2640-fe0f", native: "\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f3cb-1f3fd-200d-2640-fe0f", native: "\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f3cb-1f3fe-200d-2640-fe0f", native: "\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f3cb-1f3ff-200d-2640-fe0f", native: "\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, bicyclist: { id: "bicyclist", name: "Bicyclist", keywords: ["person", "biking", "sport", "move"], skins: [{ unified: "1f6b4", native: "\u{1F6B4}" }, { unified: "1f6b4-1f3fb", native: "\u{1F6B4}\u{1F3FB}" }, { unified: "1f6b4-1f3fc", native: "\u{1F6B4}\u{1F3FC}" }, { unified: "1f6b4-1f3fd", native: "\u{1F6B4}\u{1F3FD}" }, { unified: "1f6b4-1f3fe", native: "\u{1F6B4}\u{1F3FE}" }, { unified: "1f6b4-1f3ff", native: "\u{1F6B4}\u{1F3FF}" }], version: 1 }, "man-biking": { id: "man-biking", name: "Man Biking", keywords: ["sports", "bike", "exercise", "hipster"], skins: [{ unified: "1f6b4-200d-2642-fe0f", native: "\u{1F6B4}\u200D\u2642\uFE0F" }, { unified: "1f6b4-1f3fb-200d-2642-fe0f", native: "\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f6b4-1f3fc-200d-2642-fe0f", native: "\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f6b4-1f3fd-200d-2642-fe0f", native: "\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f6b4-1f3fe-200d-2642-fe0f", native: "\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f6b4-1f3ff-200d-2642-fe0f", native: "\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-biking": { id: "woman-biking", name: "Woman Biking", keywords: ["sports", "bike", "exercise", "hipster", "female"], skins: [{ unified: "1f6b4-200d-2640-fe0f", native: "\u{1F6B4}\u200D\u2640\uFE0F" }, { unified: "1f6b4-1f3fb-200d-2640-fe0f", native: "\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f6b4-1f3fc-200d-2640-fe0f", native: "\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f6b4-1f3fd-200d-2640-fe0f", native: "\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f6b4-1f3fe-200d-2640-fe0f", native: "\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f6b4-1f3ff-200d-2640-fe0f", native: "\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, mountain_bicyclist: { id: "mountain_bicyclist", name: "Mountain Bicyclist", keywords: ["person", "biking", "sport", "move"], skins: [{ unified: "1f6b5", native: "\u{1F6B5}" }, { unified: "1f6b5-1f3fb", native: "\u{1F6B5}\u{1F3FB}" }, { unified: "1f6b5-1f3fc", native: "\u{1F6B5}\u{1F3FC}" }, { unified: "1f6b5-1f3fd", native: "\u{1F6B5}\u{1F3FD}" }, { unified: "1f6b5-1f3fe", native: "\u{1F6B5}\u{1F3FE}" }, { unified: "1f6b5-1f3ff", native: "\u{1F6B5}\u{1F3FF}" }], version: 1 }, "man-mountain-biking": { id: "man-mountain-biking", name: "Man Mountain Biking", keywords: ["mountain-biking", "transportation", "sports", "human", "race", "bike"], skins: [{ unified: "1f6b5-200d-2642-fe0f", native: "\u{1F6B5}\u200D\u2642\uFE0F" }, { unified: "1f6b5-1f3fb-200d-2642-fe0f", native: "\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f6b5-1f3fc-200d-2642-fe0f", native: "\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f6b5-1f3fd-200d-2642-fe0f", native: "\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f6b5-1f3fe-200d-2642-fe0f", native: "\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f6b5-1f3ff-200d-2642-fe0f", native: "\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-mountain-biking": { id: "woman-mountain-biking", name: "Woman Mountain Biking", keywords: ["mountain-biking", "transportation", "sports", "human", "race", "bike", "female"], skins: [{ unified: "1f6b5-200d-2640-fe0f", native: "\u{1F6B5}\u200D\u2640\uFE0F" }, { unified: "1f6b5-1f3fb-200d-2640-fe0f", native: "\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f6b5-1f3fc-200d-2640-fe0f", native: "\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f6b5-1f3fd-200d-2640-fe0f", native: "\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f6b5-1f3fe-200d-2640-fe0f", native: "\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f6b5-1f3ff-200d-2640-fe0f", native: "\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, person_doing_cartwheel: { id: "person_doing_cartwheel", name: "Person Cartwheeling", keywords: ["doing", "cartwheel", "sport", "gymnastic"], skins: [{ unified: "1f938", native: "\u{1F938}" }, { unified: "1f938-1f3fb", native: "\u{1F938}\u{1F3FB}" }, { unified: "1f938-1f3fc", native: "\u{1F938}\u{1F3FC}" }, { unified: "1f938-1f3fd", native: "\u{1F938}\u{1F3FD}" }, { unified: "1f938-1f3fe", native: "\u{1F938}\u{1F3FE}" }, { unified: "1f938-1f3ff", native: "\u{1F938}\u{1F3FF}" }], version: 3 }, "man-cartwheeling": { id: "man-cartwheeling", name: "Man Cartwheeling", keywords: ["gymnastics"], skins: [{ unified: "1f938-200d-2642-fe0f", native: "\u{1F938}\u200D\u2642\uFE0F" }, { unified: "1f938-1f3fb-200d-2642-fe0f", native: "\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f938-1f3fc-200d-2642-fe0f", native: "\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f938-1f3fd-200d-2642-fe0f", native: "\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f938-1f3fe-200d-2642-fe0f", native: "\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f938-1f3ff-200d-2642-fe0f", native: "\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-cartwheeling": { id: "woman-cartwheeling", name: "Woman Cartwheeling", keywords: ["gymnastics"], skins: [{ unified: "1f938-200d-2640-fe0f", native: "\u{1F938}\u200D\u2640\uFE0F" }, { unified: "1f938-1f3fb-200d-2640-fe0f", native: "\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f938-1f3fc-200d-2640-fe0f", native: "\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f938-1f3fd-200d-2640-fe0f", native: "\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f938-1f3fe-200d-2640-fe0f", native: "\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f938-1f3ff-200d-2640-fe0f", native: "\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, wrestlers: { id: "wrestlers", name: "Wrestlers", keywords: ["people", "wrestling", "sport"], skins: [{ unified: "1f93c", native: "\u{1F93C}" }], version: 3 }, "man-wrestling": { id: "man-wrestling", name: "Men Wrestling", keywords: ["man", "sports", "wrestlers"], skins: [{ unified: "1f93c-200d-2642-fe0f", native: "\u{1F93C}\u200D\u2642\uFE0F" }], version: 4 }, "woman-wrestling": { id: "woman-wrestling", name: "Women Wrestling", keywords: ["woman", "sports", "wrestlers"], skins: [{ unified: "1f93c-200d-2640-fe0f", native: "\u{1F93C}\u200D\u2640\uFE0F" }], version: 4 }, water_polo: { id: "water_polo", name: "Water Polo", keywords: ["person", "playing", "sport"], skins: [{ unified: "1f93d", native: "\u{1F93D}" }, { unified: "1f93d-1f3fb", native: "\u{1F93D}\u{1F3FB}" }, { unified: "1f93d-1f3fc", native: "\u{1F93D}\u{1F3FC}" }, { unified: "1f93d-1f3fd", native: "\u{1F93D}\u{1F3FD}" }, { unified: "1f93d-1f3fe", native: "\u{1F93D}\u{1F3FE}" }, { unified: "1f93d-1f3ff", native: "\u{1F93D}\u{1F3FF}" }], version: 3 }, "man-playing-water-polo": { id: "man-playing-water-polo", name: "Man Playing Water Polo", keywords: ["playing-water-polo", "sports", "pool"], skins: [{ unified: "1f93d-200d-2642-fe0f", native: "\u{1F93D}\u200D\u2642\uFE0F" }, { unified: "1f93d-1f3fb-200d-2642-fe0f", native: "\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f93d-1f3fc-200d-2642-fe0f", native: "\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f93d-1f3fd-200d-2642-fe0f", native: "\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f93d-1f3fe-200d-2642-fe0f", native: "\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f93d-1f3ff-200d-2642-fe0f", native: "\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-playing-water-polo": { id: "woman-playing-water-polo", name: "Woman Playing Water Polo", keywords: ["playing-water-polo", "sports", "pool"], skins: [{ unified: "1f93d-200d-2640-fe0f", native: "\u{1F93D}\u200D\u2640\uFE0F" }, { unified: "1f93d-1f3fb-200d-2640-fe0f", native: "\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f93d-1f3fc-200d-2640-fe0f", native: "\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f93d-1f3fd-200d-2640-fe0f", native: "\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f93d-1f3fe-200d-2640-fe0f", native: "\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f93d-1f3ff-200d-2640-fe0f", native: "\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, handball: { id: "handball", name: "Handball", keywords: ["person", "playing", "sport"], skins: [{ unified: "1f93e", native: "\u{1F93E}" }, { unified: "1f93e-1f3fb", native: "\u{1F93E}\u{1F3FB}" }, { unified: "1f93e-1f3fc", native: "\u{1F93E}\u{1F3FC}" }, { unified: "1f93e-1f3fd", native: "\u{1F93E}\u{1F3FD}" }, { unified: "1f93e-1f3fe", native: "\u{1F93E}\u{1F3FE}" }, { unified: "1f93e-1f3ff", native: "\u{1F93E}\u{1F3FF}" }], version: 3 }, "man-playing-handball": { id: "man-playing-handball", name: "Man Playing Handball", keywords: ["playing-handball", "sports"], skins: [{ unified: "1f93e-200d-2642-fe0f", native: "\u{1F93E}\u200D\u2642\uFE0F" }, { unified: "1f93e-1f3fb-200d-2642-fe0f", native: "\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f93e-1f3fc-200d-2642-fe0f", native: "\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f93e-1f3fd-200d-2642-fe0f", native: "\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f93e-1f3fe-200d-2642-fe0f", native: "\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f93e-1f3ff-200d-2642-fe0f", native: "\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-playing-handball": { id: "woman-playing-handball", name: "Woman Playing Handball", keywords: ["playing-handball", "sports"], skins: [{ unified: "1f93e-200d-2640-fe0f", native: "\u{1F93E}\u200D\u2640\uFE0F" }, { unified: "1f93e-1f3fb-200d-2640-fe0f", native: "\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f93e-1f3fc-200d-2640-fe0f", native: "\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f93e-1f3fd-200d-2640-fe0f", native: "\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f93e-1f3fe-200d-2640-fe0f", native: "\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f93e-1f3ff-200d-2640-fe0f", native: "\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, juggling: { id: "juggling", name: "Juggling", keywords: ["person", "performance", "balance"], skins: [{ unified: "1f939", native: "\u{1F939}" }, { unified: "1f939-1f3fb", native: "\u{1F939}\u{1F3FB}" }, { unified: "1f939-1f3fc", native: "\u{1F939}\u{1F3FC}" }, { unified: "1f939-1f3fd", native: "\u{1F939}\u{1F3FD}" }, { unified: "1f939-1f3fe", native: "\u{1F939}\u{1F3FE}" }, { unified: "1f939-1f3ff", native: "\u{1F939}\u{1F3FF}" }], version: 3 }, "man-juggling": { id: "man-juggling", name: "Man Juggling", keywords: ["juggle", "balance", "skill", "multitask"], skins: [{ unified: "1f939-200d-2642-fe0f", native: "\u{1F939}\u200D\u2642\uFE0F" }, { unified: "1f939-1f3fb-200d-2642-fe0f", native: "\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f939-1f3fc-200d-2642-fe0f", native: "\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f939-1f3fd-200d-2642-fe0f", native: "\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f939-1f3fe-200d-2642-fe0f", native: "\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f939-1f3ff-200d-2642-fe0f", native: "\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 4 }, "woman-juggling": { id: "woman-juggling", name: "Woman Juggling", keywords: ["juggle", "balance", "skill", "multitask"], skins: [{ unified: "1f939-200d-2640-fe0f", native: "\u{1F939}\u200D\u2640\uFE0F" }, { unified: "1f939-1f3fb-200d-2640-fe0f", native: "\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f939-1f3fc-200d-2640-fe0f", native: "\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f939-1f3fd-200d-2640-fe0f", native: "\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f939-1f3fe-200d-2640-fe0f", native: "\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f939-1f3ff-200d-2640-fe0f", native: "\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 4 }, person_in_lotus_position: { id: "person_in_lotus_position", name: "Person in Lotus Position", keywords: ["meditate"], skins: [{ unified: "1f9d8", native: "\u{1F9D8}" }, { unified: "1f9d8-1f3fb", native: "\u{1F9D8}\u{1F3FB}" }, { unified: "1f9d8-1f3fc", native: "\u{1F9D8}\u{1F3FC}" }, { unified: "1f9d8-1f3fd", native: "\u{1F9D8}\u{1F3FD}" }, { unified: "1f9d8-1f3fe", native: "\u{1F9D8}\u{1F3FE}" }, { unified: "1f9d8-1f3ff", native: "\u{1F9D8}\u{1F3FF}" }], version: 5 }, man_in_lotus_position: { id: "man_in_lotus_position", name: "Man in Lotus Position", keywords: ["male", "meditation", "yoga", "serenity", "zen", "mindfulness"], skins: [{ unified: "1f9d8-200d-2642-fe0f", native: "\u{1F9D8}\u200D\u2642\uFE0F" }, { unified: "1f9d8-1f3fb-200d-2642-fe0f", native: "\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F" }, { unified: "1f9d8-1f3fc-200d-2642-fe0f", native: "\u{1F9D8}\u{1F3FC}\u200D\u2642\uFE0F" }, { unified: "1f9d8-1f3fd-200d-2642-fe0f", native: "\u{1F9D8}\u{1F3FD}\u200D\u2642\uFE0F" }, { unified: "1f9d8-1f3fe-200d-2642-fe0f", native: "\u{1F9D8}\u{1F3FE}\u200D\u2642\uFE0F" }, { unified: "1f9d8-1f3ff-200d-2642-fe0f", native: "\u{1F9D8}\u{1F3FF}\u200D\u2642\uFE0F" }], version: 5 }, woman_in_lotus_position: { id: "woman_in_lotus_position", name: "Woman in Lotus Position", keywords: ["female", "meditation", "yoga", "serenity", "zen", "mindfulness"], skins: [{ unified: "1f9d8-200d-2640-fe0f", native: "\u{1F9D8}\u200D\u2640\uFE0F" }, { unified: "1f9d8-1f3fb-200d-2640-fe0f", native: "\u{1F9D8}\u{1F3FB}\u200D\u2640\uFE0F" }, { unified: "1f9d8-1f3fc-200d-2640-fe0f", native: "\u{1F9D8}\u{1F3FC}\u200D\u2640\uFE0F" }, { unified: "1f9d8-1f3fd-200d-2640-fe0f", native: "\u{1F9D8}\u{1F3FD}\u200D\u2640\uFE0F" }, { unified: "1f9d8-1f3fe-200d-2640-fe0f", native: "\u{1F9D8}\u{1F3FE}\u200D\u2640\uFE0F" }, { unified: "1f9d8-1f3ff-200d-2640-fe0f", native: "\u{1F9D8}\u{1F3FF}\u200D\u2640\uFE0F" }], version: 5 }, bath: { id: "bath", name: "Bath", keywords: ["person", "taking", "clean", "shower", "bathroom"], skins: [{ unified: "1f6c0", native: "\u{1F6C0}" }, { unified: "1f6c0-1f3fb", native: "\u{1F6C0}\u{1F3FB}" }, { unified: "1f6c0-1f3fc", native: "\u{1F6C0}\u{1F3FC}" }, { unified: "1f6c0-1f3fd", native: "\u{1F6C0}\u{1F3FD}" }, { unified: "1f6c0-1f3fe", native: "\u{1F6C0}\u{1F3FE}" }, { unified: "1f6c0-1f3ff", native: "\u{1F6C0}\u{1F3FF}" }], version: 1 }, sleeping_accommodation: { id: "sleeping_accommodation", name: "Person in Bed", keywords: ["sleeping", "accommodation", "rest"], skins: [{ unified: "1f6cc", native: "\u{1F6CC}" }, { unified: "1f6cc-1f3fb", native: "\u{1F6CC}\u{1F3FB}" }, { unified: "1f6cc-1f3fc", native: "\u{1F6CC}\u{1F3FC}" }, { unified: "1f6cc-1f3fd", native: "\u{1F6CC}\u{1F3FD}" }, { unified: "1f6cc-1f3fe", native: "\u{1F6CC}\u{1F3FE}" }, { unified: "1f6cc-1f3ff", native: "\u{1F6CC}\u{1F3FF}" }], version: 1 }, people_holding_hands: { id: "people_holding_hands", name: "People Holding Hands", keywords: ["friendship"], skins: [{ unified: "1f9d1-200d-1f91d-200d-1f9d1", native: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}" }, { unified: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb", native: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}" }, { unified: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc", native: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}" }, { unified: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd", native: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}" }, { unified: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe", native: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}" }, { unified: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff", native: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}" }], version: 12 }, two_women_holding_hands: { id: "two_women_holding_hands", name: "Women Holding Hands", keywords: ["two", "pair", "friendship", "couple", "love", "like", "female", "people", "human"], skins: [{ unified: "1f46d", native: "\u{1F46D}" }, { unified: "1f46d-1f3fb", native: "\u{1F46D}\u{1F3FB}" }, { unified: "1f46d-1f3fc", native: "\u{1F46D}\u{1F3FC}" }, { unified: "1f46d-1f3fd", native: "\u{1F46D}\u{1F3FD}" }, { unified: "1f46d-1f3fe", native: "\u{1F46D}\u{1F3FE}" }, { unified: "1f46d-1f3ff", native: "\u{1F46D}\u{1F3FF}" }], version: 1 }, man_and_woman_holding_hands: { id: "man_and_woman_holding_hands", name: "Man and Woman Holding Hands", keywords: ["couple", "pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage"], skins: [{ unified: "1f46b", native: "\u{1F46B}" }, { unified: "1f46b-1f3fb", native: "\u{1F46B}\u{1F3FB}" }, { unified: "1f46b-1f3fc", native: "\u{1F46B}\u{1F3FC}" }, { unified: "1f46b-1f3fd", native: "\u{1F46B}\u{1F3FD}" }, { unified: "1f46b-1f3fe", native: "\u{1F46B}\u{1F3FE}" }, { unified: "1f46b-1f3ff", native: "\u{1F46B}\u{1F3FF}" }], version: 1 }, two_men_holding_hands: { id: "two_men_holding_hands", name: "Men Holding Hands", keywords: ["two", "pair", "couple", "love", "like", "bromance", "friendship", "people", "human"], skins: [{ unified: "1f46c", native: "\u{1F46C}" }, { unified: "1f46c-1f3fb", native: "\u{1F46C}\u{1F3FB}" }, { unified: "1f46c-1f3fc", native: "\u{1F46C}\u{1F3FC}" }, { unified: "1f46c-1f3fd", native: "\u{1F46C}\u{1F3FD}" }, { unified: "1f46c-1f3fe", native: "\u{1F46C}\u{1F3FE}" }, { unified: "1f46c-1f3ff", native: "\u{1F46C}\u{1F3FF}" }], version: 1 }, couplekiss: { id: "couplekiss", name: "Kiss", keywords: ["couplekiss", "pair", "valentines", "love", "like", "dating", "marriage"], skins: [{ unified: "1f48f", native: "\u{1F48F}" }, { unified: "1f48f-1f3fb", native: "\u{1F48F}\u{1F3FB}" }, { unified: "1f48f-1f3fc", native: "\u{1F48F}\u{1F3FC}" }, { unified: "1f48f-1f3fd", native: "\u{1F48F}\u{1F3FD}" }, { unified: "1f48f-1f3fe", native: "\u{1F48F}\u{1F3FE}" }, { unified: "1f48f-1f3ff", native: "\u{1F48F}\u{1F3FF}" }], version: 1 }, "woman-kiss-man": { id: "woman-kiss-man", name: "Kiss: Woman, Man", keywords: ["woman", "kiss-man", "kiss", "love"], skins: [{ unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468", native: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}" }, { unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", native: "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}" }, { unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", native: "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}" }, { unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", native: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}" }, { unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", native: "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}" }, { unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", native: "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}" }], version: 2 }, "man-kiss-man": { id: "man-kiss-man", name: "Kiss: Man, Man", keywords: ["kiss-man", "kiss", "pair", "valentines", "love", "like", "dating", "marriage"], skins: [{ unified: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", native: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}" }, { unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb", native: "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}" }, { unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc", native: "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FC}" }, { unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd", native: "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FD}" }, { unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe", native: "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FE}" }, { unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff", native: "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FF}" }], version: 2 }, "woman-kiss-woman": { id: "woman-kiss-woman", name: "Kiss: Woman, Woman", keywords: ["kiss-woman", "kiss", "pair", "valentines", "love", "like", "dating", "marriage"], skins: [{ unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", native: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}" }, { unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb", native: "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FB}" }, { unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc", native: "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FC}" }, { unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd", native: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FD}" }, { unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe", native: "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FE}" }, { unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff", native: "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}\u{1F3FF}" }], version: 2 }, couple_with_heart: { id: "couple_with_heart", name: "Couple with Heart", keywords: ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"], skins: [{ unified: "1f491", native: "\u{1F491}" }, { unified: "1f491-1f3fb", native: "\u{1F491}\u{1F3FB}" }, { unified: "1f491-1f3fc", native: "\u{1F491}\u{1F3FC}" }, { unified: "1f491-1f3fd", native: "\u{1F491}\u{1F3FD}" }, { unified: "1f491-1f3fe", native: "\u{1F491}\u{1F3FE}" }, { unified: "1f491-1f3ff", native: "\u{1F491}\u{1F3FF}" }], version: 1 }, "woman-heart-man": { id: "woman-heart-man", name: "Couple with Heart: Woman, Man", keywords: ["woman", "heart-man", "heart", "love"], skins: [{ unified: "1f469-200d-2764-fe0f-200d-1f468", native: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}" }, { unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", native: "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}" }, { unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", native: "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}" }, { unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", native: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}" }, { unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", native: "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}" }, { unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", native: "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}" }], version: 2 }, "man-heart-man": { id: "man-heart-man", name: "Couple with Heart: Man, Man", keywords: ["heart-man", "heart", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"], skins: [{ unified: "1f468-200d-2764-fe0f-200d-1f468", native: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}" }, { unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb", native: "\u{1F468}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}" }, { unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc", native: "\u{1F468}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FC}" }, { unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd", native: "\u{1F468}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FD}" }, { unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe", native: "\u{1F468}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FE}" }, { unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff", native: "\u{1F468}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FF}" }], version: 2 }, "woman-heart-woman": { id: "woman-heart-woman", name: "Couple with Heart: Woman, Woman", keywords: ["heart-woman", "heart", "pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"], skins: [{ unified: "1f469-200d-2764-fe0f-200d-1f469", native: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}" }, { unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb", native: "\u{1F469}\u{1F3FB}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FB}" }, { unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc", native: "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FC}" }, { unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd", native: "\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FD}" }, { unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe", native: "\u{1F469}\u{1F3FE}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FE}" }, { unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff", native: "\u{1F469}\u{1F3FF}\u200D\u2764\uFE0F\u200D\u{1F469}\u{1F3FF}" }], version: 2 }, family: { id: "family", name: "Family", keywords: ["home", "parents", "child", "mom", "dad", "father", "mother", "people", "human"], skins: [{ unified: "1f46a", native: "\u{1F46A}" }], version: 1 }, "man-woman-boy": { id: "man-woman-boy", name: "Family: Man, Woman, Boy", keywords: ["man", "woman-boy", "family", "woman", "love"], skins: [{ unified: "1f468-200d-1f469-200d-1f466", native: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}" }], version: 2 }, "man-woman-girl": { id: "man-woman-girl", name: "Family: Man, Woman, Girl", keywords: ["man", "woman-girl", "family", "woman", "home", "parents", "people", "human", "child"], skins: [{ unified: "1f468-200d-1f469-200d-1f467", native: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}" }], version: 2 }, "man-woman-girl-boy": { id: "man-woman-girl-boy", name: "Family: Man, Woman, Girl, Boy", keywords: ["man", "woman-girl-boy", "family", "woman", "girl", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f469-200d-1f467-200d-1f466", native: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" }], version: 2 }, "man-woman-boy-boy": { id: "man-woman-boy-boy", name: "Family: Man, Woman, Boy, Boy", keywords: ["man", "woman-boy-boy", "family", "woman", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f469-200d-1f466-200d-1f466", native: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}" }], version: 2 }, "man-woman-girl-girl": { id: "man-woman-girl-girl", name: "Family: Man, Woman, Girl, Girl", keywords: ["man", "woman-girl-girl", "family", "woman", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f469-200d-1f467-200d-1f467", native: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}" }], version: 2 }, "man-man-boy": { id: "man-man-boy", name: "Family: Man, Man, Boy", keywords: ["man", "man-boy", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f468-200d-1f466", native: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}" }], version: 2 }, "man-man-girl": { id: "man-man-girl", name: "Family: Man, Man, Girl", keywords: ["man", "man-girl", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f468-200d-1f467", native: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}" }], version: 2 }, "man-man-girl-boy": { id: "man-man-girl-boy", name: "Family: Man, Man, Girl, Boy", keywords: ["man", "man-girl-boy", "family", "girl", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f468-200d-1f467-200d-1f466", native: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}" }], version: 2 }, "man-man-boy-boy": { id: "man-man-boy-boy", name: "Family: Man, Man, Boy, Boy", keywords: ["man", "man-boy-boy", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f468-200d-1f466-200d-1f466", native: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}" }], version: 2 }, "man-man-girl-girl": { id: "man-man-girl-girl", name: "Family: Man, Man, Girl, Girl", keywords: ["man", "man-girl-girl", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f468-200d-1f467-200d-1f467", native: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}" }], version: 2 }, "woman-woman-boy": { id: "woman-woman-boy", name: "Family: Woman, Woman, Boy", keywords: ["woman", "woman-boy", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f469-200d-1f466", native: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}" }], version: 2 }, "woman-woman-girl": { id: "woman-woman-girl", name: "Family: Woman, Woman, Girl", keywords: ["woman", "woman-girl", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f469-200d-1f467", native: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}" }], version: 2 }, "woman-woman-girl-boy": { id: "woman-woman-girl-boy", name: "Family: Woman, Woman, Girl, Boy", keywords: ["woman", "woman-girl-boy", "family", "girl", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f469-200d-1f467-200d-1f466", native: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" }], version: 2 }, "woman-woman-boy-boy": { id: "woman-woman-boy-boy", name: "Family: Woman, Woman, Boy, Boy", keywords: ["woman", "woman-boy-boy", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f469-200d-1f466-200d-1f466", native: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}" }], version: 2 }, "woman-woman-girl-girl": { id: "woman-woman-girl-girl", name: "Family: Woman, Woman, Girl, Girl", keywords: ["woman", "woman-girl-girl", "family", "home", "parents", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f469-200d-1f467-200d-1f467", native: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}" }], version: 2 }, "man-boy": { id: "man-boy", name: "Family: Man, Boy", keywords: ["man", "family", "home", "parent", "people", "human", "child"], skins: [{ unified: "1f468-200d-1f466", native: "\u{1F468}\u200D\u{1F466}" }], version: 4 }, "man-boy-boy": { id: "man-boy-boy", name: "Family: Man, Boy, Boy", keywords: ["man", "boy-boy", "family", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f466-200d-1f466", native: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}" }], version: 4 }, "man-girl": { id: "man-girl", name: "Family: Man, Girl", keywords: ["man", "family", "home", "parent", "people", "human", "child"], skins: [{ unified: "1f468-200d-1f467", native: "\u{1F468}\u200D\u{1F467}" }], version: 4 }, "man-girl-boy": { id: "man-girl-boy", name: "Family: Man, Girl, Boy", keywords: ["man", "girl-boy", "family", "girl", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f467-200d-1f466", native: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}" }], version: 4 }, "man-girl-girl": { id: "man-girl-girl", name: "Family: Man, Girl, Girl", keywords: ["man", "girl-girl", "family", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f468-200d-1f467-200d-1f467", native: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}" }], version: 4 }, "woman-boy": { id: "woman-boy", name: "Family: Woman, Boy", keywords: ["woman", "family", "home", "parent", "people", "human", "child"], skins: [{ unified: "1f469-200d-1f466", native: "\u{1F469}\u200D\u{1F466}" }], version: 4 }, "woman-boy-boy": { id: "woman-boy-boy", name: "Family: Woman, Boy, Boy", keywords: ["woman", "boy-boy", "family", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f466-200d-1f466", native: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}" }], version: 4 }, "woman-girl": { id: "woman-girl", name: "Family: Woman, Girl", keywords: ["woman", "family", "home", "parent", "people", "human", "child"], skins: [{ unified: "1f469-200d-1f467", native: "\u{1F469}\u200D\u{1F467}" }], version: 4 }, "woman-girl-boy": { id: "woman-girl-boy", name: "Family: Woman, Girl, Boy", keywords: ["woman", "girl-boy", "family", "girl", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f467-200d-1f466", native: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" }], version: 4 }, "woman-girl-girl": { id: "woman-girl-girl", name: "Family: Woman, Girl, Girl", keywords: ["woman", "girl-girl", "family", "home", "parent", "people", "human", "children"], skins: [{ unified: "1f469-200d-1f467-200d-1f467", native: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}" }], version: 4 }, speaking_head_in_silhouette: { id: "speaking_head_in_silhouette", name: "Speaking Head", keywords: ["in", "silhouette", "user", "person", "human", "sing", "say", "talk"], skins: [{ unified: "1f5e3-fe0f", native: "\u{1F5E3}\uFE0F" }], version: 1 }, bust_in_silhouette: { id: "bust_in_silhouette", name: "Bust in Silhouette", keywords: ["user", "person", "human"], skins: [{ unified: "1f464", native: "\u{1F464}" }], version: 1 }, busts_in_silhouette: { id: "busts_in_silhouette", name: "Busts in Silhouette", keywords: ["user", "person", "human", "group", "team"], skins: [{ unified: "1f465", native: "\u{1F465}" }], version: 1 }, people_hugging: { id: "people_hugging", name: "People Hugging", keywords: ["care"], skins: [{ unified: "1fac2", native: "\u{1FAC2}" }], version: 13 }, footprints: { id: "footprints", name: "Footprints", keywords: ["feet", "tracking", "walking", "beach"], skins: [{ unified: "1f463", native: "\u{1F463}" }], version: 1 }, monkey_face: { id: "monkey_face", name: "Monkey Face", emoticons: [":o)"], keywords: ["animal", "nature", "circus"], skins: [{ unified: "1f435", native: "\u{1F435}" }], version: 1 }, monkey: { id: "monkey", name: "Monkey", keywords: ["animal", "nature", "banana", "circus"], skins: [{ unified: "1f412", native: "\u{1F412}" }], version: 1 }, gorilla: { id: "gorilla", name: "Gorilla", keywords: ["animal", "nature", "circus"], skins: [{ unified: "1f98d", native: "\u{1F98D}" }], version: 3 }, orangutan: { id: "orangutan", name: "Orangutan", keywords: ["animal"], skins: [{ unified: "1f9a7", native: "\u{1F9A7}" }], version: 12 }, dog: { id: "dog", name: "Dog Face", keywords: ["animal", "friend", "nature", "woof", "puppy", "pet", "faithful"], skins: [{ unified: "1f436", native: "\u{1F436}" }], version: 1 }, dog2: { id: "dog2", name: "Dog", keywords: ["dog2", "animal", "nature", "friend", "doge", "pet", "faithful"], skins: [{ unified: "1f415", native: "\u{1F415}" }], version: 1 }, guide_dog: { id: "guide_dog", name: "Guide Dog", keywords: ["animal", "blind"], skins: [{ unified: "1f9ae", native: "\u{1F9AE}" }], version: 12 }, service_dog: { id: "service_dog", name: "Service Dog", keywords: ["blind", "animal"], skins: [{ unified: "1f415-200d-1f9ba", native: "\u{1F415}\u200D\u{1F9BA}" }], version: 12 }, poodle: { id: "poodle", name: "Poodle", keywords: ["dog", "animal", "101", "nature", "pet"], skins: [{ unified: "1f429", native: "\u{1F429}" }], version: 1 }, wolf: { id: "wolf", name: "Wolf", keywords: ["animal", "nature", "wild"], skins: [{ unified: "1f43a", native: "\u{1F43A}" }], version: 1 }, fox_face: { id: "fox_face", name: "Fox", keywords: ["face", "animal", "nature"], skins: [{ unified: "1f98a", native: "\u{1F98A}" }], version: 3 }, raccoon: { id: "raccoon", name: "Raccoon", keywords: ["animal", "nature"], skins: [{ unified: "1f99d", native: "\u{1F99D}" }], version: 11 }, cat: { id: "cat", name: "Cat Face", keywords: ["animal", "meow", "nature", "pet", "kitten"], skins: [{ unified: "1f431", native: "\u{1F431}" }], version: 1 }, cat2: { id: "cat2", name: "Cat", keywords: ["cat2", "animal", "meow", "pet", "cats"], skins: [{ unified: "1f408", native: "\u{1F408}" }], version: 1 }, black_cat: { id: "black_cat", name: "Black Cat", keywords: ["superstition", "luck"], skins: [{ unified: "1f408-200d-2b1b", native: "\u{1F408}\u200D\u2B1B" }], version: 13 }, lion_face: { id: "lion_face", name: "Lion", keywords: ["face", "animal", "nature"], skins: [{ unified: "1f981", native: "\u{1F981}" }], version: 1 }, tiger: { id: "tiger", name: "Tiger Face", keywords: ["animal", "cat", "danger", "wild", "nature", "roar"], skins: [{ unified: "1f42f", native: "\u{1F42F}" }], version: 1 }, tiger2: { id: "tiger2", name: "Tiger", keywords: ["tiger2", "animal", "nature", "roar"], skins: [{ unified: "1f405", native: "\u{1F405}" }], version: 1 }, leopard: { id: "leopard", name: "Leopard", keywords: ["animal", "nature"], skins: [{ unified: "1f406", native: "\u{1F406}" }], version: 1 }, horse: { id: "horse", name: "Horse Face", keywords: ["animal", "brown", "nature"], skins: [{ unified: "1f434", native: "\u{1F434}" }], version: 1 }, moose: { id: "moose", name: "Moose", keywords: ["shrek", "canada", "sweden", "sven", "cool"], skins: [{ unified: "1face", native: "\u{1FACE}" }], version: 15 }, donkey: { id: "donkey", name: "Donkey", keywords: ["eeyore", "mule"], skins: [{ unified: "1facf", native: "\u{1FACF}" }], version: 15 }, racehorse: { id: "racehorse", name: "Horse", keywords: ["racehorse", "animal", "gamble", "luck"], skins: [{ unified: "1f40e", native: "\u{1F40E}" }], version: 1 }, unicorn_face: { id: "unicorn_face", name: "Unicorn", keywords: ["face", "animal", "nature", "mystical"], skins: [{ unified: "1f984", native: "\u{1F984}" }], version: 1 }, zebra_face: { id: "zebra_face", name: "Zebra", keywords: ["face", "animal", "nature", "stripes", "safari"], skins: [{ unified: "1f993", native: "\u{1F993}" }], version: 5 }, deer: { id: "deer", name: "Deer", keywords: ["animal", "nature", "horns", "venison"], skins: [{ unified: "1f98c", native: "\u{1F98C}" }], version: 3 }, bison: { id: "bison", name: "Bison", keywords: ["ox"], skins: [{ unified: "1f9ac", native: "\u{1F9AC}" }], version: 13 }, cow: { id: "cow", name: "Cow Face", keywords: ["beef", "ox", "animal", "nature", "moo", "milk"], skins: [{ unified: "1f42e", native: "\u{1F42E}" }], version: 1 }, ox: { id: "ox", name: "Ox", keywords: ["animal", "cow", "beef"], skins: [{ unified: "1f402", native: "\u{1F402}" }], version: 1 }, water_buffalo: { id: "water_buffalo", name: "Water Buffalo", keywords: ["animal", "nature", "ox", "cow"], skins: [{ unified: "1f403", native: "\u{1F403}" }], version: 1 }, cow2: { id: "cow2", name: "Cow", keywords: ["cow2", "beef", "ox", "animal", "nature", "moo", "milk"], skins: [{ unified: "1f404", native: "\u{1F404}" }], version: 1 }, pig: { id: "pig", name: "Pig Face", keywords: ["animal", "oink", "nature"], skins: [{ unified: "1f437", native: "\u{1F437}" }], version: 1 }, pig2: { id: "pig2", name: "Pig", keywords: ["pig2", "animal", "nature"], skins: [{ unified: "1f416", native: "\u{1F416}" }], version: 1 }, boar: { id: "boar", name: "Boar", keywords: ["animal", "nature"], skins: [{ unified: "1f417", native: "\u{1F417}" }], version: 1 }, pig_nose: { id: "pig_nose", name: "Pig Nose", keywords: ["animal", "oink"], skins: [{ unified: "1f43d", native: "\u{1F43D}" }], version: 1 }, ram: { id: "ram", name: "Ram", keywords: ["animal", "sheep", "nature"], skins: [{ unified: "1f40f", native: "\u{1F40F}" }], version: 1 }, sheep: { id: "sheep", name: "Ewe", keywords: ["sheep", "animal", "nature", "wool", "shipit"], skins: [{ unified: "1f411", native: "\u{1F411}" }], version: 1 }, goat: { id: "goat", name: "Goat", keywords: ["animal", "nature"], skins: [{ unified: "1f410", native: "\u{1F410}" }], version: 1 }, dromedary_camel: { id: "dromedary_camel", name: "Camel", keywords: ["dromedary", "animal", "hot", "desert", "hump"], skins: [{ unified: "1f42a", native: "\u{1F42A}" }], version: 1 }, camel: { id: "camel", name: "Bactrian Camel", keywords: ["two", "hump", "animal", "nature", "hot", "desert"], skins: [{ unified: "1f42b", native: "\u{1F42B}" }], version: 1 }, llama: { id: "llama", name: "Llama", keywords: ["animal", "nature", "alpaca"], skins: [{ unified: "1f999", native: "\u{1F999}" }], version: 11 }, giraffe_face: { id: "giraffe_face", name: "Giraffe", keywords: ["face", "animal", "nature", "spots", "safari"], skins: [{ unified: "1f992", native: "\u{1F992}" }], version: 5 }, elephant: { id: "elephant", name: "Elephant", keywords: ["animal", "nature", "nose", "th", "circus"], skins: [{ unified: "1f418", native: "\u{1F418}" }], version: 1 }, mammoth: { id: "mammoth", name: "Mammoth", keywords: ["elephant", "tusks"], skins: [{ unified: "1f9a3", native: "\u{1F9A3}" }], version: 13 }, rhinoceros: { id: "rhinoceros", name: "Rhinoceros", keywords: ["animal", "nature", "horn"], skins: [{ unified: "1f98f", native: "\u{1F98F}" }], version: 3 }, hippopotamus: { id: "hippopotamus", name: "Hippopotamus", keywords: ["animal", "nature"], skins: [{ unified: "1f99b", native: "\u{1F99B}" }], version: 11 }, mouse: { id: "mouse", name: "Mouse Face", keywords: ["animal", "nature", "cheese", "wedge", "rodent"], skins: [{ unified: "1f42d", native: "\u{1F42D}" }], version: 1 }, mouse2: { id: "mouse2", name: "Mouse", keywords: ["mouse2", "animal", "nature", "rodent"], skins: [{ unified: "1f401", native: "\u{1F401}" }], version: 1 }, rat: { id: "rat", name: "Rat", keywords: ["animal", "mouse", "rodent"], skins: [{ unified: "1f400", native: "\u{1F400}" }], version: 1 }, hamster: { id: "hamster", name: "Hamster", keywords: ["animal", "nature"], skins: [{ unified: "1f439", native: "\u{1F439}" }], version: 1 }, rabbit: { id: "rabbit", name: "Rabbit Face", keywords: ["animal", "nature", "pet", "spring", "magic", "bunny"], skins: [{ unified: "1f430", native: "\u{1F430}" }], version: 1 }, rabbit2: { id: "rabbit2", name: "Rabbit", keywords: ["rabbit2", "animal", "nature", "pet", "magic", "spring"], skins: [{ unified: "1f407", native: "\u{1F407}" }], version: 1 }, chipmunk: { id: "chipmunk", name: "Chipmunk", keywords: ["animal", "nature", "rodent", "squirrel"], skins: [{ unified: "1f43f-fe0f", native: "\u{1F43F}\uFE0F" }], version: 1 }, beaver: { id: "beaver", name: "Beaver", keywords: ["animal", "rodent"], skins: [{ unified: "1f9ab", native: "\u{1F9AB}" }], version: 13 }, hedgehog: { id: "hedgehog", name: "Hedgehog", keywords: ["animal", "nature", "spiny"], skins: [{ unified: "1f994", native: "\u{1F994}" }], version: 5 }, bat: { id: "bat", name: "Bat", keywords: ["animal", "nature", "blind", "vampire"], skins: [{ unified: "1f987", native: "\u{1F987}" }], version: 3 }, bear: { id: "bear", name: "Bear", keywords: ["animal", "nature", "wild"], skins: [{ unified: "1f43b", native: "\u{1F43B}" }], version: 1 }, polar_bear: { id: "polar_bear", name: "Polar Bear", keywords: ["animal", "arctic"], skins: [{ unified: "1f43b-200d-2744-fe0f", native: "\u{1F43B}\u200D\u2744\uFE0F" }], version: 13 }, koala: { id: "koala", name: "Koala", keywords: ["animal", "nature"], skins: [{ unified: "1f428", native: "\u{1F428}" }], version: 1 }, panda_face: { id: "panda_face", name: "Panda", keywords: ["face", "animal", "nature"], skins: [{ unified: "1f43c", native: "\u{1F43C}" }], version: 1 }, sloth: { id: "sloth", name: "Sloth", keywords: ["animal"], skins: [{ unified: "1f9a5", native: "\u{1F9A5}" }], version: 12 }, otter: { id: "otter", name: "Otter", keywords: ["animal"], skins: [{ unified: "1f9a6", native: "\u{1F9A6}" }], version: 12 }, skunk: { id: "skunk", name: "Skunk", keywords: ["animal"], skins: [{ unified: "1f9a8", native: "\u{1F9A8}" }], version: 12 }, kangaroo: { id: "kangaroo", name: "Kangaroo", keywords: ["animal", "nature", "australia", "joey", "hop", "marsupial"], skins: [{ unified: "1f998", native: "\u{1F998}" }], version: 11 }, badger: { id: "badger", name: "Badger", keywords: ["animal", "nature", "honey"], skins: [{ unified: "1f9a1", native: "\u{1F9A1}" }], version: 11 }, feet: { id: "feet", name: "Paw Prints", keywords: ["feet", "animal", "tracking", "footprints", "dog", "cat", "pet"], skins: [{ unified: "1f43e", native: "\u{1F43E}" }], version: 1 }, turkey: { id: "turkey", name: "Turkey", keywords: ["animal", "bird"], skins: [{ unified: "1f983", native: "\u{1F983}" }], version: 1 }, chicken: { id: "chicken", name: "Chicken", keywords: ["animal", "cluck", "nature", "bird"], skins: [{ unified: "1f414", native: "\u{1F414}" }], version: 1 }, rooster: { id: "rooster", name: "Rooster", keywords: ["animal", "nature", "chicken"], skins: [{ unified: "1f413", native: "\u{1F413}" }], version: 1 }, hatching_chick: { id: "hatching_chick", name: "Hatching Chick", keywords: ["animal", "chicken", "egg", "born", "baby", "bird"], skins: [{ unified: "1f423", native: "\u{1F423}" }], version: 1 }, baby_chick: { id: "baby_chick", name: "Baby Chick", keywords: ["animal", "chicken", "bird"], skins: [{ unified: "1f424", native: "\u{1F424}" }], version: 1 }, hatched_chick: { id: "hatched_chick", name: "Front-Facing Baby Chick", keywords: ["hatched", "front", "facing", "animal", "chicken", "bird"], skins: [{ unified: "1f425", native: "\u{1F425}" }], version: 1 }, bird: { id: "bird", name: "Bird", keywords: ["animal", "nature", "fly", "tweet", "spring"], skins: [{ unified: "1f426", native: "\u{1F426}" }], version: 1 }, penguin: { id: "penguin", name: "Penguin", keywords: ["animal", "nature"], skins: [{ unified: "1f427", native: "\u{1F427}" }], version: 1 }, dove_of_peace: { id: "dove_of_peace", name: "Dove", keywords: ["of", "peace", "animal", "bird"], skins: [{ unified: "1f54a-fe0f", native: "\u{1F54A}\uFE0F" }], version: 1 }, eagle: { id: "eagle", name: "Eagle", keywords: ["animal", "nature", "bird"], skins: [{ unified: "1f985", native: "\u{1F985}" }], version: 3 }, duck: { id: "duck", name: "Duck", keywords: ["animal", "nature", "bird", "mallard"], skins: [{ unified: "1f986", native: "\u{1F986}" }], version: 3 }, swan: { id: "swan", name: "Swan", keywords: ["animal", "nature", "bird"], skins: [{ unified: "1f9a2", native: "\u{1F9A2}" }], version: 11 }, owl: { id: "owl", name: "Owl", keywords: ["animal", "nature", "bird", "hoot"], skins: [{ unified: "1f989", native: "\u{1F989}" }], version: 3 }, dodo: { id: "dodo", name: "Dodo", keywords: ["animal", "bird"], skins: [{ unified: "1f9a4", native: "\u{1F9A4}" }], version: 13 }, feather: { id: "feather", name: "Feather", keywords: ["bird", "fly"], skins: [{ unified: "1fab6", native: "\u{1FAB6}" }], version: 13 }, flamingo: { id: "flamingo", name: "Flamingo", keywords: ["animal"], skins: [{ unified: "1f9a9", native: "\u{1F9A9}" }], version: 12 }, peacock: { id: "peacock", name: "Peacock", keywords: ["animal", "nature", "peahen", "bird"], skins: [{ unified: "1f99a", native: "\u{1F99A}" }], version: 11 }, parrot: { id: "parrot", name: "Parrot", keywords: ["animal", "nature", "bird", "pirate", "talk"], skins: [{ unified: "1f99c", native: "\u{1F99C}" }], version: 11 }, wing: { id: "wing", name: "Wing", keywords: ["angel", "birds", "flying"], skins: [{ unified: "1fabd", native: "\u{1FABD}" }], version: 15 }, black_bird: { id: "black_bird", name: "Black Bird", keywords: ["crow"], skins: [{ unified: "1f426-200d-2b1b", native: "\u{1F426}\u200D\u2B1B" }], version: 15 }, goose: { id: "goose", name: "Goose", keywords: ["silly", "jemima", "goosebumps"], skins: [{ unified: "1fabf", native: "\u{1FABF}" }], version: 15 }, frog: { id: "frog", name: "Frog", keywords: ["animal", "nature", "croak", "toad"], skins: [{ unified: "1f438", native: "\u{1F438}" }], version: 1 }, crocodile: { id: "crocodile", name: "Crocodile", keywords: ["animal", "nature", "reptile", "lizard", "alligator"], skins: [{ unified: "1f40a", native: "\u{1F40A}" }], version: 1 }, turtle: { id: "turtle", name: "Turtle", keywords: ["animal", "slow", "nature", "tortoise"], skins: [{ unified: "1f422", native: "\u{1F422}" }], version: 1 }, lizard: { id: "lizard", name: "Lizard", keywords: ["animal", "nature", "reptile"], skins: [{ unified: "1f98e", native: "\u{1F98E}" }], version: 3 }, snake: { id: "snake", name: "Snake", keywords: ["animal", "evil", "nature", "hiss", "python"], skins: [{ unified: "1f40d", native: "\u{1F40D}" }], version: 1 }, dragon_face: { id: "dragon_face", name: "Dragon Face", keywords: ["animal", "myth", "nature", "chinese", "green"], skins: [{ unified: "1f432", native: "\u{1F432}" }], version: 1 }, dragon: { id: "dragon", name: "Dragon", keywords: ["animal", "myth", "nature", "chinese", "green"], skins: [{ unified: "1f409", native: "\u{1F409}" }], version: 1 }, sauropod: { id: "sauropod", name: "Sauropod", keywords: ["animal", "nature", "dinosaur", "brachiosaurus", "brontosaurus", "diplodocus", "extinct"], skins: [{ unified: "1f995", native: "\u{1F995}" }], version: 5 }, "t-rex": { id: "t-rex", name: "T-Rex", keywords: ["t", "rex", "animal", "nature", "dinosaur", "tyrannosaurus", "extinct"], skins: [{ unified: "1f996", native: "\u{1F996}" }], version: 5 }, whale: { id: "whale", name: "Spouting Whale", keywords: ["animal", "nature", "sea", "ocean"], skins: [{ unified: "1f433", native: "\u{1F433}" }], version: 1 }, whale2: { id: "whale2", name: "Whale", keywords: ["whale2", "animal", "nature", "sea", "ocean"], skins: [{ unified: "1f40b", native: "\u{1F40B}" }], version: 1 }, dolphin: { id: "dolphin", name: "Dolphin", keywords: ["flipper", "animal", "nature", "fish", "sea", "ocean", "fins", "beach"], skins: [{ unified: "1f42c", native: "\u{1F42C}" }], version: 1 }, seal: { id: "seal", name: "Seal", keywords: ["animal", "creature", "sea"], skins: [{ unified: "1f9ad", native: "\u{1F9AD}" }], version: 13 }, fish: { id: "fish", name: "Fish", keywords: ["animal", "food", "nature"], skins: [{ unified: "1f41f", native: "\u{1F41F}" }], version: 1 }, tropical_fish: { id: "tropical_fish", name: "Tropical Fish", keywords: ["animal", "swim", "ocean", "beach", "nemo"], skins: [{ unified: "1f420", native: "\u{1F420}" }], version: 1 }, blowfish: { id: "blowfish", name: "Blowfish", keywords: ["animal", "nature", "food", "sea", "ocean"], skins: [{ unified: "1f421", native: "\u{1F421}" }], version: 1 }, shark: { id: "shark", name: "Shark", keywords: ["animal", "nature", "fish", "sea", "ocean", "jaws", "fins", "beach"], skins: [{ unified: "1f988", native: "\u{1F988}" }], version: 3 }, octopus: { id: "octopus", name: "Octopus", keywords: ["animal", "creature", "ocean", "sea", "nature", "beach"], skins: [{ unified: "1f419", native: "\u{1F419}" }], version: 1 }, shell: { id: "shell", name: "Spiral Shell", keywords: ["nature", "sea", "beach"], skins: [{ unified: "1f41a", native: "\u{1F41A}" }], version: 1 }, coral: { id: "coral", name: "Coral", keywords: ["ocean", "sea", "reef"], skins: [{ unified: "1fab8", native: "\u{1FAB8}" }], version: 14 }, jellyfish: { id: "jellyfish", name: "Jellyfish", keywords: ["sting", "tentacles"], skins: [{ unified: "1fabc", native: "\u{1FABC}" }], version: 15 }, snail: { id: "snail", name: "Snail", keywords: ["slow", "animal", "shell"], skins: [{ unified: "1f40c", native: "\u{1F40C}" }], version: 1 }, butterfly: { id: "butterfly", name: "Butterfly", keywords: ["animal", "insect", "nature", "caterpillar"], skins: [{ unified: "1f98b", native: "\u{1F98B}" }], version: 3 }, bug: { id: "bug", name: "Bug", keywords: ["animal", "insect", "nature", "worm"], skins: [{ unified: "1f41b", native: "\u{1F41B}" }], version: 1 }, ant: { id: "ant", name: "Ant", keywords: ["animal", "insect", "nature", "bug"], skins: [{ unified: "1f41c", native: "\u{1F41C}" }], version: 1 }, bee: { id: "bee", name: "Honeybee", keywords: ["bee", "animal", "insect", "nature", "bug", "spring", "honey"], skins: [{ unified: "1f41d", native: "\u{1F41D}" }], version: 1 }, beetle: { id: "beetle", name: "Beetle", keywords: ["insect"], skins: [{ unified: "1fab2", native: "\u{1FAB2}" }], version: 13 }, ladybug: { id: "ladybug", name: "Lady Beetle", keywords: ["ladybug", "animal", "insect", "nature"], skins: [{ unified: "1f41e", native: "\u{1F41E}" }], version: 1 }, cricket: { id: "cricket", name: "Cricket", keywords: ["animal", "chirp"], skins: [{ unified: "1f997", native: "\u{1F997}" }], version: 5 }, cockroach: { id: "cockroach", name: "Cockroach", keywords: ["insect", "pests"], skins: [{ unified: "1fab3", native: "\u{1FAB3}" }], version: 13 }, spider: { id: "spider", name: "Spider", keywords: ["animal", "arachnid"], skins: [{ unified: "1f577-fe0f", native: "\u{1F577}\uFE0F" }], version: 1 }, spider_web: { id: "spider_web", name: "Spider Web", keywords: ["animal", "insect", "arachnid", "silk"], skins: [{ unified: "1f578-fe0f", native: "\u{1F578}\uFE0F" }], version: 1 }, scorpion: { id: "scorpion", name: "Scorpion", keywords: ["animal", "arachnid"], skins: [{ unified: "1f982", native: "\u{1F982}" }], version: 1 }, mosquito: { id: "mosquito", name: "Mosquito", keywords: ["animal", "nature", "insect", "malaria"], skins: [{ unified: "1f99f", native: "\u{1F99F}" }], version: 11 }, fly: { id: "fly", name: "Fly", keywords: ["insect"], skins: [{ unified: "1fab0", native: "\u{1FAB0}" }], version: 13 }, worm: { id: "worm", name: "Worm", keywords: ["animal"], skins: [{ unified: "1fab1", native: "\u{1FAB1}" }], version: 13 }, microbe: { id: "microbe", name: "Microbe", keywords: ["amoeba", "bacteria", "germs", "virus", "covid"], skins: [{ unified: "1f9a0", native: "\u{1F9A0}" }], version: 11 }, bouquet: { id: "bouquet", name: "Bouquet", keywords: ["flowers", "nature", "spring"], skins: [{ unified: "1f490", native: "\u{1F490}" }], version: 1 }, cherry_blossom: { id: "cherry_blossom", name: "Cherry Blossom", keywords: ["nature", "plant", "spring", "flower"], skins: [{ unified: "1f338", native: "\u{1F338}" }], version: 1 }, white_flower: { id: "white_flower", name: "White Flower", keywords: ["japanese", "spring"], skins: [{ unified: "1f4ae", native: "\u{1F4AE}" }], version: 1 }, lotus: { id: "lotus", name: "Lotus", keywords: ["flower", "calm", "meditation"], skins: [{ unified: "1fab7", native: "\u{1FAB7}" }], version: 14 }, rosette: { id: "rosette", name: "Rosette", keywords: ["flower", "decoration", "military"], skins: [{ unified: "1f3f5-fe0f", native: "\u{1F3F5}\uFE0F" }], version: 1 }, rose: { id: "rose", name: "Rose", keywords: ["flowers", "valentines", "love", "spring"], skins: [{ unified: "1f339", native: "\u{1F339}" }], version: 1 }, wilted_flower: { id: "wilted_flower", name: "Wilted Flower", keywords: ["plant", "nature", "rose"], skins: [{ unified: "1f940", native: "\u{1F940}" }], version: 3 }, hibiscus: { id: "hibiscus", name: "Hibiscus", keywords: ["plant", "vegetable", "flowers", "beach"], skins: [{ unified: "1f33a", native: "\u{1F33A}" }], version: 1 }, sunflower: { id: "sunflower", name: "Sunflower", keywords: ["nature", "plant", "fall"], skins: [{ unified: "1f33b", native: "\u{1F33B}" }], version: 1 }, blossom: { id: "blossom", name: "Blossom", keywords: ["nature", "flowers", "yellow"], skins: [{ unified: "1f33c", native: "\u{1F33C}" }], version: 1 }, tulip: { id: "tulip", name: "Tulip", keywords: ["flowers", "plant", "nature", "summer", "spring"], skins: [{ unified: "1f337", native: "\u{1F337}" }], version: 1 }, hyacinth: { id: "hyacinth", name: "Hyacinth", keywords: ["flower", "lavender"], skins: [{ unified: "1fabb", native: "\u{1FABB}" }], version: 15 }, seedling: { id: "seedling", name: "Seedling", keywords: ["plant", "nature", "grass", "lawn", "spring"], skins: [{ unified: "1f331", native: "\u{1F331}" }], version: 1 }, potted_plant: { id: "potted_plant", name: "Potted Plant", keywords: ["greenery", "house"], skins: [{ unified: "1fab4", native: "\u{1FAB4}" }], version: 13 }, evergreen_tree: { id: "evergreen_tree", name: "Evergreen Tree", keywords: ["plant", "nature"], skins: [{ unified: "1f332", native: "\u{1F332}" }], version: 1 }, deciduous_tree: { id: "deciduous_tree", name: "Deciduous Tree", keywords: ["plant", "nature"], skins: [{ unified: "1f333", native: "\u{1F333}" }], version: 1 }, palm_tree: { id: "palm_tree", name: "Palm Tree", keywords: ["plant", "vegetable", "nature", "summer", "beach", "mojito", "tropical"], skins: [{ unified: "1f334", native: "\u{1F334}" }], version: 1 }, cactus: { id: "cactus", name: "Cactus", keywords: ["vegetable", "plant", "nature"], skins: [{ unified: "1f335", native: "\u{1F335}" }], version: 1 }, ear_of_rice: { id: "ear_of_rice", name: "Ear of Rice", keywords: ["sheaf", "nature", "plant"], skins: [{ unified: "1f33e", native: "\u{1F33E}" }], version: 1 }, herb: { id: "herb", name: "Herb", keywords: ["vegetable", "plant", "medicine", "weed", "grass", "lawn"], skins: [{ unified: "1f33f", native: "\u{1F33F}" }], version: 1 }, shamrock: { id: "shamrock", name: "Shamrock", keywords: ["vegetable", "plant", "nature", "irish", "clover"], skins: [{ unified: "2618-fe0f", native: "\u2618\uFE0F" }], version: 1 }, four_leaf_clover: { id: "four_leaf_clover", name: "Four Leaf Clover", keywords: ["vegetable", "plant", "nature", "lucky", "irish"], skins: [{ unified: "1f340", native: "\u{1F340}" }], version: 1 }, maple_leaf: { id: "maple_leaf", name: "Maple Leaf", keywords: ["nature", "plant", "vegetable", "ca", "fall"], skins: [{ unified: "1f341", native: "\u{1F341}" }], version: 1 }, fallen_leaf: { id: "fallen_leaf", name: "Fallen Leaf", keywords: ["nature", "plant", "vegetable", "leaves"], skins: [{ unified: "1f342", native: "\u{1F342}" }], version: 1 }, leaves: { id: "leaves", name: "Leaf Fluttering in Wind", keywords: ["leaves", "nature", "plant", "tree", "vegetable", "grass", "lawn", "spring"], skins: [{ unified: "1f343", native: "\u{1F343}" }], version: 1 }, empty_nest: { id: "empty_nest", name: "Empty Nest", keywords: ["bird"], skins: [{ unified: "1fab9", native: "\u{1FAB9}" }], version: 14 }, nest_with_eggs: { id: "nest_with_eggs", name: "Nest with Eggs", keywords: ["bird"], skins: [{ unified: "1faba", native: "\u{1FABA}" }], version: 14 }, mushroom: { id: "mushroom", name: "Mushroom", keywords: ["plant", "vegetable"], skins: [{ unified: "1f344", native: "\u{1F344}" }], version: 1 }, grapes: { id: "grapes", name: "Grapes", keywords: ["fruit", "food", "wine"], skins: [{ unified: "1f347", native: "\u{1F347}" }], version: 1 }, melon: { id: "melon", name: "Melon", keywords: ["fruit", "nature", "food"], skins: [{ unified: "1f348", native: "\u{1F348}" }], version: 1 }, watermelon: { id: "watermelon", name: "Watermelon", keywords: ["fruit", "food", "picnic", "summer"], skins: [{ unified: "1f349", native: "\u{1F349}" }], version: 1 }, tangerine: { id: "tangerine", name: "Tangerine", keywords: ["food", "fruit", "nature", "orange"], skins: [{ unified: "1f34a", native: "\u{1F34A}" }], version: 1 }, lemon: { id: "lemon", name: "Lemon", keywords: ["fruit", "nature"], skins: [{ unified: "1f34b", native: "\u{1F34B}" }], version: 1 }, banana: { id: "banana", name: "Banana", keywords: ["fruit", "food", "monkey"], skins: [{ unified: "1f34c", native: "\u{1F34C}" }], version: 1 }, pineapple: { id: "pineapple", name: "Pineapple", keywords: ["fruit", "nature", "food"], skins: [{ unified: "1f34d", native: "\u{1F34D}" }], version: 1 }, mango: { id: "mango", name: "Mango", keywords: ["fruit", "food", "tropical"], skins: [{ unified: "1f96d", native: "\u{1F96D}" }], version: 11 }, apple: { id: "apple", name: "Red Apple", keywords: ["fruit", "mac", "school"], skins: [{ unified: "1f34e", native: "\u{1F34E}" }], version: 1 }, green_apple: { id: "green_apple", name: "Green Apple", keywords: ["fruit", "nature"], skins: [{ unified: "1f34f", native: "\u{1F34F}" }], version: 1 }, pear: { id: "pear", name: "Pear", keywords: ["fruit", "nature", "food"], skins: [{ unified: "1f350", native: "\u{1F350}" }], version: 1 }, peach: { id: "peach", name: "Peach", keywords: ["fruit", "nature", "food"], skins: [{ unified: "1f351", native: "\u{1F351}" }], version: 1 }, cherries: { id: "cherries", name: "Cherries", keywords: ["food", "fruit"], skins: [{ unified: "1f352", native: "\u{1F352}" }], version: 1 }, strawberry: { id: "strawberry", name: "Strawberry", keywords: ["fruit", "food", "nature"], skins: [{ unified: "1f353", native: "\u{1F353}" }], version: 1 }, blueberries: { id: "blueberries", name: "Blueberries", keywords: ["fruit"], skins: [{ unified: "1fad0", native: "\u{1FAD0}" }], version: 13 }, kiwifruit: { id: "kiwifruit", name: "Kiwifruit", keywords: ["kiwi", "fruit", "food"], skins: [{ unified: "1f95d", native: "\u{1F95D}" }], version: 3 }, tomato: { id: "tomato", name: "Tomato", keywords: ["fruit", "vegetable", "nature", "food"], skins: [{ unified: "1f345", native: "\u{1F345}" }], version: 1 }, olive: { id: "olive", name: "Olive", keywords: ["fruit"], skins: [{ unified: "1fad2", native: "\u{1FAD2}" }], version: 13 }, coconut: { id: "coconut", name: "Coconut", keywords: ["fruit", "nature", "food", "palm"], skins: [{ unified: "1f965", native: "\u{1F965}" }], version: 5 }, avocado: { id: "avocado", name: "Avocado", keywords: ["fruit", "food"], skins: [{ unified: "1f951", native: "\u{1F951}" }], version: 3 }, eggplant: { id: "eggplant", name: "Eggplant", keywords: ["vegetable", "nature", "food", "aubergine"], skins: [{ unified: "1f346", native: "\u{1F346}" }], version: 1 }, potato: { id: "potato", name: "Potato", keywords: ["food", "tuber", "vegatable", "starch"], skins: [{ unified: "1f954", native: "\u{1F954}" }], version: 3 }, carrot: { id: "carrot", name: "Carrot", keywords: ["vegetable", "food", "orange"], skins: [{ unified: "1f955", native: "\u{1F955}" }], version: 3 }, corn: { id: "corn", name: "Ear of Corn", keywords: ["food", "vegetable", "plant"], skins: [{ unified: "1f33d", native: "\u{1F33D}" }], version: 1 }, hot_pepper: { id: "hot_pepper", name: "Hot Pepper", keywords: ["food", "spicy", "chilli", "chili"], skins: [{ unified: "1f336-fe0f", native: "\u{1F336}\uFE0F" }], version: 1 }, bell_pepper: { id: "bell_pepper", name: "Bell Pepper", keywords: ["fruit", "plant"], skins: [{ unified: "1fad1", native: "\u{1FAD1}" }], version: 13 }, cucumber: { id: "cucumber", name: "Cucumber", keywords: ["fruit", "food", "pickle"], skins: [{ unified: "1f952", native: "\u{1F952}" }], version: 3 }, leafy_green: { id: "leafy_green", name: "Leafy Green", keywords: ["food", "vegetable", "plant", "bok", "choy", "cabbage", "kale", "lettuce"], skins: [{ unified: "1f96c", native: "\u{1F96C}" }], version: 11 }, broccoli: { id: "broccoli", name: "Broccoli", keywords: ["fruit", "food", "vegetable"], skins: [{ unified: "1f966", native: "\u{1F966}" }], version: 5 }, garlic: { id: "garlic", name: "Garlic", keywords: ["food", "spice", "cook"], skins: [{ unified: "1f9c4", native: "\u{1F9C4}" }], version: 12 }, onion: { id: "onion", name: "Onion", keywords: ["cook", "food", "spice"], skins: [{ unified: "1f9c5", native: "\u{1F9C5}" }], version: 12 }, peanuts: { id: "peanuts", name: "Peanuts", keywords: ["food", "nut"], skins: [{ unified: "1f95c", native: "\u{1F95C}" }], version: 3 }, beans: { id: "beans", name: "Beans", keywords: ["food"], skins: [{ unified: "1fad8", native: "\u{1FAD8}" }], version: 14 }, chestnut: { id: "chestnut", name: "Chestnut", keywords: ["food", "squirrel"], skins: [{ unified: "1f330", native: "\u{1F330}" }], version: 1 }, ginger_root: { id: "ginger_root", name: "Ginger Root", keywords: ["spice", "yellow", "cooking", "gingerbread"], skins: [{ unified: "1fada", native: "\u{1FADA}" }], version: 15 }, pea_pod: { id: "pea_pod", name: "Pea Pod", keywords: ["cozy", "green"], skins: [{ unified: "1fadb", native: "\u{1FADB}" }], version: 15 }, bread: { id: "bread", name: "Bread", keywords: ["food", "wheat", "breakfast", "toast"], skins: [{ unified: "1f35e", native: "\u{1F35E}" }], version: 1 }, croissant: { id: "croissant", name: "Croissant", keywords: ["food", "bread", "french"], skins: [{ unified: "1f950", native: "\u{1F950}" }], version: 3 }, baguette_bread: { id: "baguette_bread", name: "Baguette Bread", keywords: ["food", "french", "france", "bakery"], skins: [{ unified: "1f956", native: "\u{1F956}" }], version: 3 }, flatbread: { id: "flatbread", name: "Flatbread", keywords: ["flour", "food", "bakery"], skins: [{ unified: "1fad3", native: "\u{1FAD3}" }], version: 13 }, pretzel: { id: "pretzel", name: "Pretzel", keywords: ["food", "bread", "twisted", "germany", "bakery"], skins: [{ unified: "1f968", native: "\u{1F968}" }], version: 5 }, bagel: { id: "bagel", name: "Bagel", keywords: ["food", "bread", "bakery", "schmear", "jewish"], skins: [{ unified: "1f96f", native: "\u{1F96F}" }], version: 11 }, pancakes: { id: "pancakes", name: "Pancakes", keywords: ["food", "breakfast", "flapjacks", "hotcakes", "brunch"], skins: [{ unified: "1f95e", native: "\u{1F95E}" }], version: 3 }, waffle: { id: "waffle", name: "Waffle", keywords: ["food", "breakfast", "brunch"], skins: [{ unified: "1f9c7", native: "\u{1F9C7}" }], version: 12 }, cheese_wedge: { id: "cheese_wedge", name: "Cheese Wedge", keywords: ["food", "chadder", "swiss"], skins: [{ unified: "1f9c0", native: "\u{1F9C0}" }], version: 1 }, meat_on_bone: { id: "meat_on_bone", name: "Meat on Bone", keywords: ["good", "food", "drumstick"], skins: [{ unified: "1f356", native: "\u{1F356}" }], version: 1 }, poultry_leg: { id: "poultry_leg", name: "Poultry Leg", keywords: ["food", "meat", "drumstick", "bird", "chicken", "turkey"], skins: [{ unified: "1f357", native: "\u{1F357}" }], version: 1 }, cut_of_meat: { id: "cut_of_meat", name: "Cut of Meat", keywords: ["food", "cow", "chop", "lambchop", "porkchop"], skins: [{ unified: "1f969", native: "\u{1F969}" }], version: 5 }, bacon: { id: "bacon", name: "Bacon", keywords: ["food", "breakfast", "pork", "pig", "meat", "brunch"], skins: [{ unified: "1f953", native: "\u{1F953}" }], version: 3 }, hamburger: { id: "hamburger", name: "Hamburger", keywords: ["meat", "fast", "food", "beef", "cheeseburger", "mcdonalds", "burger", "king"], skins: [{ unified: "1f354", native: "\u{1F354}" }], version: 1 }, fries: { id: "fries", name: "French Fries", keywords: ["chips", "snack", "fast", "food", "potato"], skins: [{ unified: "1f35f", native: "\u{1F35F}" }], version: 1 }, pizza: { id: "pizza", name: "Pizza", keywords: ["food", "party", "italy"], skins: [{ unified: "1f355", native: "\u{1F355}" }], version: 1 }, hotdog: { id: "hotdog", name: "Hot Dog", keywords: ["hotdog", "food", "frankfurter", "america"], skins: [{ unified: "1f32d", native: "\u{1F32D}" }], version: 1 }, sandwich: { id: "sandwich", name: "Sandwich", keywords: ["food", "lunch", "bread", "toast", "bakery"], skins: [{ unified: "1f96a", native: "\u{1F96A}" }], version: 5 }, taco: { id: "taco", name: "Taco", keywords: ["food", "mexican"], skins: [{ unified: "1f32e", native: "\u{1F32E}" }], version: 1 }, burrito: { id: "burrito", name: "Burrito", keywords: ["food", "mexican"], skins: [{ unified: "1f32f", native: "\u{1F32F}" }], version: 1 }, tamale: { id: "tamale", name: "Tamale", keywords: ["food", "masa"], skins: [{ unified: "1fad4", native: "\u{1FAD4}" }], version: 13 }, stuffed_flatbread: { id: "stuffed_flatbread", name: "Stuffed Flatbread", keywords: ["food", "gyro", "mediterranean"], skins: [{ unified: "1f959", native: "\u{1F959}" }], version: 3 }, falafel: { id: "falafel", name: "Falafel", keywords: ["food", "mediterranean"], skins: [{ unified: "1f9c6", native: "\u{1F9C6}" }], version: 12 }, egg: { id: "egg", name: "Egg", keywords: ["food", "chicken", "breakfast"], skins: [{ unified: "1f95a", native: "\u{1F95A}" }], version: 3 }, fried_egg: { id: "fried_egg", name: "Cooking", keywords: ["fried", "egg", "food", "breakfast", "kitchen", "skillet"], skins: [{ unified: "1f373", native: "\u{1F373}" }], version: 1 }, shallow_pan_of_food: { id: "shallow_pan_of_food", name: "Shallow Pan of Food", keywords: ["cooking", "casserole", "paella", "skillet"], skins: [{ unified: "1f958", native: "\u{1F958}" }], version: 3 }, stew: { id: "stew", name: "Pot of Food", keywords: ["stew", "meat", "soup", "hot"], skins: [{ unified: "1f372", native: "\u{1F372}" }], version: 1 }, fondue: { id: "fondue", name: "Fondue", keywords: ["cheese", "pot", "food"], skins: [{ unified: "1fad5", native: "\u{1FAD5}" }], version: 13 }, bowl_with_spoon: { id: "bowl_with_spoon", name: "Bowl with Spoon", keywords: ["food", "breakfast", "cereal", "oatmeal", "porridge"], skins: [{ unified: "1f963", native: "\u{1F963}" }], version: 5 }, green_salad: { id: "green_salad", name: "Green Salad", keywords: ["food", "healthy", "lettuce", "vegetable"], skins: [{ unified: "1f957", native: "\u{1F957}" }], version: 3 }, popcorn: { id: "popcorn", name: "Popcorn", keywords: ["food", "movie", "theater", "films", "snack", "drama"], skins: [{ unified: "1f37f", native: "\u{1F37F}" }], version: 1 }, butter: { id: "butter", name: "Butter", keywords: ["food", "cook"], skins: [{ unified: "1f9c8", native: "\u{1F9C8}" }], version: 12 }, salt: { id: "salt", name: "Salt", keywords: ["condiment", "shaker"], skins: [{ unified: "1f9c2", native: "\u{1F9C2}" }], version: 11 }, canned_food: { id: "canned_food", name: "Canned Food", keywords: ["soup", "tomatoes"], skins: [{ unified: "1f96b", native: "\u{1F96B}" }], version: 5 }, bento: { id: "bento", name: "Bento Box", keywords: ["food", "japanese", "lunch"], skins: [{ unified: "1f371", native: "\u{1F371}" }], version: 1 }, rice_cracker: { id: "rice_cracker", name: "Rice Cracker", keywords: ["food", "japanese", "snack"], skins: [{ unified: "1f358", native: "\u{1F358}" }], version: 1 }, rice_ball: { id: "rice_ball", name: "Rice Ball", keywords: ["food", "japanese"], skins: [{ unified: "1f359", native: "\u{1F359}" }], version: 1 }, rice: { id: "rice", name: "Cooked Rice", keywords: ["food", "asian"], skins: [{ unified: "1f35a", native: "\u{1F35A}" }], version: 1 }, curry: { id: "curry", name: "Curry Rice", keywords: ["food", "spicy", "hot", "indian"], skins: [{ unified: "1f35b", native: "\u{1F35B}" }], version: 1 }, ramen: { id: "ramen", name: "Steaming Bowl", keywords: ["ramen", "food", "japanese", "noodle", "chopsticks"], skins: [{ unified: "1f35c", native: "\u{1F35C}" }], version: 1 }, spaghetti: { id: "spaghetti", name: "Spaghetti", keywords: ["food", "italian", "pasta", "noodle"], skins: [{ unified: "1f35d", native: "\u{1F35D}" }], version: 1 }, sweet_potato: { id: "sweet_potato", name: "Roasted Sweet Potato", keywords: ["food", "nature", "plant"], skins: [{ unified: "1f360", native: "\u{1F360}" }], version: 1 }, oden: { id: "oden", name: "Oden", keywords: ["food", "japanese"], skins: [{ unified: "1f362", native: "\u{1F362}" }], version: 1 }, sushi: { id: "sushi", name: "Sushi", keywords: ["food", "fish", "japanese", "rice"], skins: [{ unified: "1f363", native: "\u{1F363}" }], version: 1 }, fried_shrimp: { id: "fried_shrimp", name: "Fried Shrimp", keywords: ["food", "animal", "appetizer", "summer"], skins: [{ unified: "1f364", native: "\u{1F364}" }], version: 1 }, fish_cake: { id: "fish_cake", name: "Fish Cake with Swirl", keywords: ["food", "japan", "sea", "beach", "narutomaki", "pink", "kamaboko", "surimi", "ramen"], skins: [{ unified: "1f365", native: "\u{1F365}" }], version: 1 }, moon_cake: { id: "moon_cake", name: "Moon Cake", keywords: ["food", "autumn", "dessert"], skins: [{ unified: "1f96e", native: "\u{1F96E}" }], version: 11 }, dango: { id: "dango", name: "Dango", keywords: ["food", "dessert", "sweet", "japanese", "barbecue", "meat"], skins: [{ unified: "1f361", native: "\u{1F361}" }], version: 1 }, dumpling: { id: "dumpling", name: "Dumpling", keywords: ["food", "empanada", "pierogi", "potsticker", "gyoza"], skins: [{ unified: "1f95f", native: "\u{1F95F}" }], version: 5 }, fortune_cookie: { id: "fortune_cookie", name: "Fortune Cookie", keywords: ["food", "prophecy", "dessert"], skins: [{ unified: "1f960", native: "\u{1F960}" }], version: 5 }, takeout_box: { id: "takeout_box", name: "Takeout Box", keywords: ["food", "leftovers"], skins: [{ unified: "1f961", native: "\u{1F961}" }], version: 5 }, crab: { id: "crab", name: "Crab", keywords: ["animal", "crustacean"], skins: [{ unified: "1f980", native: "\u{1F980}" }], version: 1 }, lobster: { id: "lobster", name: "Lobster", keywords: ["animal", "nature", "bisque", "claws", "seafood"], skins: [{ unified: "1f99e", native: "\u{1F99E}" }], version: 11 }, shrimp: { id: "shrimp", name: "Shrimp", keywords: ["animal", "ocean", "nature", "seafood"], skins: [{ unified: "1f990", native: "\u{1F990}" }], version: 3 }, squid: { id: "squid", name: "Squid", keywords: ["animal", "nature", "ocean", "sea"], skins: [{ unified: "1f991", native: "\u{1F991}" }], version: 3 }, oyster: { id: "oyster", name: "Oyster", keywords: ["food"], skins: [{ unified: "1f9aa", native: "\u{1F9AA}" }], version: 12 }, icecream: { id: "icecream", name: "Soft Ice Cream", keywords: ["icecream", "food", "hot", "dessert", "summer"], skins: [{ unified: "1f366", native: "\u{1F366}" }], version: 1 }, shaved_ice: { id: "shaved_ice", name: "Shaved Ice", keywords: ["hot", "dessert", "summer"], skins: [{ unified: "1f367", native: "\u{1F367}" }], version: 1 }, ice_cream: { id: "ice_cream", name: "Ice Cream", keywords: ["food", "hot", "dessert"], skins: [{ unified: "1f368", native: "\u{1F368}" }], version: 1 }, doughnut: { id: "doughnut", name: "Doughnut", keywords: ["food", "dessert", "snack", "sweet", "donut"], skins: [{ unified: "1f369", native: "\u{1F369}" }], version: 1 }, cookie: { id: "cookie", name: "Cookie", keywords: ["food", "snack", "oreo", "chocolate", "sweet", "dessert"], skins: [{ unified: "1f36a", native: "\u{1F36A}" }], version: 1 }, birthday: { id: "birthday", name: "Birthday Cake", keywords: ["food", "dessert"], skins: [{ unified: "1f382", native: "\u{1F382}" }], version: 1 }, cake: { id: "cake", name: "Shortcake", keywords: ["cake", "food", "dessert"], skins: [{ unified: "1f370", native: "\u{1F370}" }], version: 1 }, cupcake: { id: "cupcake", name: "Cupcake", keywords: ["food", "dessert", "bakery", "sweet"], skins: [{ unified: "1f9c1", native: "\u{1F9C1}" }], version: 11 }, pie: { id: "pie", name: "Pie", keywords: ["food", "dessert", "pastry"], skins: [{ unified: "1f967", native: "\u{1F967}" }], version: 5 }, chocolate_bar: { id: "chocolate_bar", name: "Chocolate Bar", keywords: ["food", "snack", "dessert", "sweet"], skins: [{ unified: "1f36b", native: "\u{1F36B}" }], version: 1 }, candy: { id: "candy", name: "Candy", keywords: ["snack", "dessert", "sweet", "lolly"], skins: [{ unified: "1f36c", native: "\u{1F36C}" }], version: 1 }, lollipop: { id: "lollipop", name: "Lollipop", keywords: ["food", "snack", "candy", "sweet"], skins: [{ unified: "1f36d", native: "\u{1F36D}" }], version: 1 }, custard: { id: "custard", name: "Custard", keywords: ["dessert", "food"], skins: [{ unified: "1f36e", native: "\u{1F36E}" }], version: 1 }, honey_pot: { id: "honey_pot", name: "Honey Pot", keywords: ["bees", "sweet", "kitchen"], skins: [{ unified: "1f36f", native: "\u{1F36F}" }], version: 1 }, baby_bottle: { id: "baby_bottle", name: "Baby Bottle", keywords: ["food", "container", "milk"], skins: [{ unified: "1f37c", native: "\u{1F37C}" }], version: 1 }, glass_of_milk: { id: "glass_of_milk", name: "Glass of Milk", keywords: ["beverage", "drink", "cow"], skins: [{ unified: "1f95b", native: "\u{1F95B}" }], version: 3 }, coffee: { id: "coffee", name: "Hot Beverage", keywords: ["coffee", "caffeine", "latte", "espresso", "mug"], skins: [{ unified: "2615", native: "\u2615" }], version: 1 }, teapot: { id: "teapot", name: "Teapot", keywords: ["drink", "hot"], skins: [{ unified: "1fad6", native: "\u{1FAD6}" }], version: 13 }, tea: { id: "tea", name: "Teacup Without Handle", keywords: ["tea", "drink", "bowl", "breakfast", "green", "british"], skins: [{ unified: "1f375", native: "\u{1F375}" }], version: 1 }, sake: { id: "sake", name: "Sake", keywords: ["wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze"], skins: [{ unified: "1f376", native: "\u{1F376}" }], version: 1 }, champagne: { id: "champagne", name: "Bottle with Popping Cork", keywords: ["champagne", "drink", "wine", "celebration"], skins: [{ unified: "1f37e", native: "\u{1F37E}" }], version: 1 }, wine_glass: { id: "wine_glass", name: "Wine Glass", keywords: ["drink", "beverage", "drunk", "alcohol", "booze"], skins: [{ unified: "1f377", native: "\u{1F377}" }], version: 1 }, cocktail: { id: "cocktail", name: "Cocktail Glass", keywords: ["drink", "drunk", "alcohol", "beverage", "booze", "mojito"], skins: [{ unified: "1f378", native: "\u{1F378}" }], version: 1 }, tropical_drink: { id: "tropical_drink", name: "Tropical Drink", keywords: ["beverage", "cocktail", "summer", "beach", "alcohol", "booze", "mojito"], skins: [{ unified: "1f379", native: "\u{1F379}" }], version: 1 }, beer: { id: "beer", name: "Beer Mug", keywords: ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"], skins: [{ unified: "1f37a", native: "\u{1F37A}" }], version: 1 }, beers: { id: "beers", name: "Clinking Beer Mugs", keywords: ["beers", "relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"], skins: [{ unified: "1f37b", native: "\u{1F37B}" }], version: 1 }, clinking_glasses: { id: "clinking_glasses", name: "Clinking Glasses", keywords: ["beverage", "drink", "party", "alcohol", "celebrate", "cheers", "wine", "champagne", "toast"], skins: [{ unified: "1f942", native: "\u{1F942}" }], version: 3 }, tumbler_glass: { id: "tumbler_glass", name: "Tumbler Glass", keywords: ["drink", "beverage", "drunk", "alcohol", "liquor", "booze", "bourbon", "scotch", "whisky", "shot"], skins: [{ unified: "1f943", native: "\u{1F943}" }], version: 3 }, pouring_liquid: { id: "pouring_liquid", name: "Pouring Liquid", keywords: ["cup", "water"], skins: [{ unified: "1fad7", native: "\u{1FAD7}" }], version: 14 }, cup_with_straw: { id: "cup_with_straw", name: "Cup with Straw", keywords: ["drink", "soda"], skins: [{ unified: "1f964", native: "\u{1F964}" }], version: 5 }, bubble_tea: { id: "bubble_tea", name: "Bubble Tea", keywords: ["taiwan", "boba", "milk", "straw"], skins: [{ unified: "1f9cb", native: "\u{1F9CB}" }], version: 13 }, beverage_box: { id: "beverage_box", name: "Beverage Box", keywords: ["drink"], skins: [{ unified: "1f9c3", native: "\u{1F9C3}" }], version: 12 }, mate_drink: { id: "mate_drink", name: "Mate", keywords: ["drink", "tea", "beverage"], skins: [{ unified: "1f9c9", native: "\u{1F9C9}" }], version: 12 }, ice_cube: { id: "ice_cube", name: "Ice", keywords: ["cube", "water", "cold"], skins: [{ unified: "1f9ca", native: "\u{1F9CA}" }], version: 12 }, chopsticks: { id: "chopsticks", name: "Chopsticks", keywords: ["food"], skins: [{ unified: "1f962", native: "\u{1F962}" }], version: 5 }, knife_fork_plate: { id: "knife_fork_plate", name: "Fork and Knife with Plate", keywords: ["food", "eat", "meal", "lunch", "dinner", "restaurant"], skins: [{ unified: "1f37d-fe0f", native: "\u{1F37D}\uFE0F" }], version: 1 }, fork_and_knife: { id: "fork_and_knife", name: "Fork and Knife", keywords: ["cutlery", "kitchen"], skins: [{ unified: "1f374", native: "\u{1F374}" }], version: 1 }, spoon: { id: "spoon", name: "Spoon", keywords: ["cutlery", "kitchen", "tableware"], skins: [{ unified: "1f944", native: "\u{1F944}" }], version: 3 }, hocho: { id: "hocho", name: "Hocho", keywords: ["knife", "kitchen", "blade", "cutlery", "weapon"], skins: [{ unified: "1f52a", native: "\u{1F52A}" }], version: 1 }, jar: { id: "jar", name: "Jar", keywords: ["container", "sauce"], skins: [{ unified: "1fad9", native: "\u{1FAD9}" }], version: 14 }, amphora: { id: "amphora", name: "Amphora", keywords: ["vase", "jar"], skins: [{ unified: "1f3fa", native: "\u{1F3FA}" }], version: 1 }, earth_africa: { id: "earth_africa", name: "Earth Globe Europe-Africa", keywords: ["africa", "showing", "europe", "world", "international"], skins: [{ unified: "1f30d", native: "\u{1F30D}" }], version: 1 }, earth_americas: { id: "earth_americas", name: "Earth Globe Americas", keywords: ["showing", "world", "USA", "international"], skins: [{ unified: "1f30e", native: "\u{1F30E}" }], version: 1 }, earth_asia: { id: "earth_asia", name: "Earth Globe Asia-Australia", keywords: ["asia", "showing", "australia", "world", "east", "international"], skins: [{ unified: "1f30f", native: "\u{1F30F}" }], version: 1 }, globe_with_meridians: { id: "globe_with_meridians", name: "Globe with Meridians", keywords: ["earth", "international", "world", "internet", "interweb", "i18n"], skins: [{ unified: "1f310", native: "\u{1F310}" }], version: 1 }, world_map: { id: "world_map", name: "World Map", keywords: ["location", "direction"], skins: [{ unified: "1f5fa-fe0f", native: "\u{1F5FA}\uFE0F" }], version: 1 }, japan: { id: "japan", name: "Map of Japan", keywords: ["nation", "country", "japanese", "asia"], skins: [{ unified: "1f5fe", native: "\u{1F5FE}" }], version: 1 }, compass: { id: "compass", name: "Compass", keywords: ["magnetic", "navigation", "orienteering"], skins: [{ unified: "1f9ed", native: "\u{1F9ED}" }], version: 11 }, snow_capped_mountain: { id: "snow_capped_mountain", name: "Snow-Capped Mountain", keywords: ["snow", "capped", "photo", "nature", "environment", "winter", "cold"], skins: [{ unified: "1f3d4-fe0f", native: "\u{1F3D4}\uFE0F" }], version: 1 }, mountain: { id: "mountain", name: "Mountain", keywords: ["photo", "nature", "environment"], skins: [{ unified: "26f0-fe0f", native: "\u26F0\uFE0F" }], version: 1 }, volcano: { id: "volcano", name: "Volcano", keywords: ["photo", "nature", "disaster"], skins: [{ unified: "1f30b", native: "\u{1F30B}" }], version: 1 }, mount_fuji: { id: "mount_fuji", name: "Mount Fuji", keywords: ["photo", "mountain", "nature", "japanese"], skins: [{ unified: "1f5fb", native: "\u{1F5FB}" }], version: 1 }, camping: { id: "camping", name: "Camping", keywords: ["photo", "outdoors", "tent"], skins: [{ unified: "1f3d5-fe0f", native: "\u{1F3D5}\uFE0F" }], version: 1 }, beach_with_umbrella: { id: "beach_with_umbrella", name: "Beach with Umbrella", keywords: ["weather", "summer", "sunny", "sand", "mojito"], skins: [{ unified: "1f3d6-fe0f", native: "\u{1F3D6}\uFE0F" }], version: 1 }, desert: { id: "desert", name: "Desert", keywords: ["photo", "warm", "saharah"], skins: [{ unified: "1f3dc-fe0f", native: "\u{1F3DC}\uFE0F" }], version: 1 }, desert_island: { id: "desert_island", name: "Desert Island", keywords: ["photo", "tropical", "mojito"], skins: [{ unified: "1f3dd-fe0f", native: "\u{1F3DD}\uFE0F" }], version: 1 }, national_park: { id: "national_park", name: "National Park", keywords: ["photo", "environment", "nature"], skins: [{ unified: "1f3de-fe0f", native: "\u{1F3DE}\uFE0F" }], version: 1 }, stadium: { id: "stadium", name: "Stadium", keywords: ["photo", "place", "sports", "concert", "venue"], skins: [{ unified: "1f3df-fe0f", native: "\u{1F3DF}\uFE0F" }], version: 1 }, classical_building: { id: "classical_building", name: "Classical Building", keywords: ["art", "culture", "history"], skins: [{ unified: "1f3db-fe0f", native: "\u{1F3DB}\uFE0F" }], version: 1 }, building_construction: { id: "building_construction", name: "Building Construction", keywords: ["wip", "working", "progress"], skins: [{ unified: "1f3d7-fe0f", native: "\u{1F3D7}\uFE0F" }], version: 1 }, bricks: { id: "bricks", name: "Brick", keywords: ["bricks"], skins: [{ unified: "1f9f1", native: "\u{1F9F1}" }], version: 11 }, rock: { id: "rock", name: "Rock", keywords: ["stone"], skins: [{ unified: "1faa8", native: "\u{1FAA8}" }], version: 13 }, wood: { id: "wood", name: "Wood", keywords: ["nature", "timber", "trunk"], skins: [{ unified: "1fab5", native: "\u{1FAB5}" }], version: 13 }, hut: { id: "hut", name: "Hut", keywords: ["house", "structure"], skins: [{ unified: "1f6d6", native: "\u{1F6D6}" }], version: 13 }, house_buildings: { id: "house_buildings", name: "Houses", keywords: ["house", "buildings", "photo"], skins: [{ unified: "1f3d8-fe0f", native: "\u{1F3D8}\uFE0F" }], version: 1 }, derelict_house_building: { id: "derelict_house_building", name: "Derelict House", keywords: ["building", "abandon", "evict", "broken"], skins: [{ unified: "1f3da-fe0f", native: "\u{1F3DA}\uFE0F" }], version: 1 }, house: { id: "house", name: "House", keywords: ["building", "home"], skins: [{ unified: "1f3e0", native: "\u{1F3E0}" }], version: 1 }, house_with_garden: { id: "house_with_garden", name: "House with Garden", keywords: ["home", "plant", "nature"], skins: [{ unified: "1f3e1", native: "\u{1F3E1}" }], version: 1 }, office: { id: "office", name: "Office Building", keywords: ["bureau", "work"], skins: [{ unified: "1f3e2", native: "\u{1F3E2}" }], version: 1 }, post_office: { id: "post_office", name: "Japanese Post Office", keywords: ["building", "envelope", "communication"], skins: [{ unified: "1f3e3", native: "\u{1F3E3}" }], version: 1 }, european_post_office: { id: "european_post_office", name: "Post Office", keywords: ["european", "building", "email"], skins: [{ unified: "1f3e4", native: "\u{1F3E4}" }], version: 1 }, hospital: { id: "hospital", name: "Hospital", keywords: ["building", "health", "surgery", "doctor"], skins: [{ unified: "1f3e5", native: "\u{1F3E5}" }], version: 1 }, bank: { id: "bank", name: "Bank", keywords: ["building", "money", "sales", "cash", "business", "enterprise"], skins: [{ unified: "1f3e6", native: "\u{1F3E6}" }], version: 1 }, hotel: { id: "hotel", name: "Hotel", keywords: ["building", "accomodation", "checkin"], skins: [{ unified: "1f3e8", native: "\u{1F3E8}" }], version: 1 }, love_hotel: { id: "love_hotel", name: "Love Hotel", keywords: ["like", "affection", "dating"], skins: [{ unified: "1f3e9", native: "\u{1F3E9}" }], version: 1 }, convenience_store: { id: "convenience_store", name: "Convenience Store", keywords: ["building", "shopping", "groceries"], skins: [{ unified: "1f3ea", native: "\u{1F3EA}" }], version: 1 }, school: { id: "school", name: "School", keywords: ["building", "student", "education", "learn", "teach"], skins: [{ unified: "1f3eb", native: "\u{1F3EB}" }], version: 1 }, department_store: { id: "department_store", name: "Department Store", keywords: ["building", "shopping", "mall"], skins: [{ unified: "1f3ec", native: "\u{1F3EC}" }], version: 1 }, factory: { id: "factory", name: "Factory", keywords: ["building", "industry", "pollution", "smoke"], skins: [{ unified: "1f3ed", native: "\u{1F3ED}" }], version: 1 }, japanese_castle: { id: "japanese_castle", name: "Japanese Castle", keywords: ["photo", "building"], skins: [{ unified: "1f3ef", native: "\u{1F3EF}" }], version: 1 }, european_castle: { id: "european_castle", name: "Castle", keywords: ["european", "building", "royalty", "history"], skins: [{ unified: "1f3f0", native: "\u{1F3F0}" }], version: 1 }, wedding: { id: "wedding", name: "Wedding", keywords: ["love", "like", "affection", "couple", "marriage", "bride", "groom"], skins: [{ unified: "1f492", native: "\u{1F492}" }], version: 1 }, tokyo_tower: { id: "tokyo_tower", name: "Tokyo Tower", keywords: ["photo", "japanese"], skins: [{ unified: "1f5fc", native: "\u{1F5FC}" }], version: 1 }, statue_of_liberty: { id: "statue_of_liberty", name: "Statue of Liberty", keywords: ["american", "newyork"], skins: [{ unified: "1f5fd", native: "\u{1F5FD}" }], version: 1 }, church: { id: "church", name: "Church", keywords: ["building", "religion", "christ"], skins: [{ unified: "26ea", native: "\u26EA" }], version: 1 }, mosque: { id: "mosque", name: "Mosque", keywords: ["islam", "worship", "minaret"], skins: [{ unified: "1f54c", native: "\u{1F54C}" }], version: 1 }, hindu_temple: { id: "hindu_temple", name: "Hindu Temple", keywords: ["religion"], skins: [{ unified: "1f6d5", native: "\u{1F6D5}" }], version: 12 }, synagogue: { id: "synagogue", name: "Synagogue", keywords: ["judaism", "worship", "temple", "jewish"], skins: [{ unified: "1f54d", native: "\u{1F54D}" }], version: 1 }, shinto_shrine: { id: "shinto_shrine", name: "Shinto Shrine", keywords: ["temple", "japan", "kyoto"], skins: [{ unified: "26e9-fe0f", native: "\u26E9\uFE0F" }], version: 1 }, kaaba: { id: "kaaba", name: "Kaaba", keywords: ["mecca", "mosque", "islam"], skins: [{ unified: "1f54b", native: "\u{1F54B}" }], version: 1 }, fountain: { id: "fountain", name: "Fountain", keywords: ["photo", "summer", "water", "fresh"], skins: [{ unified: "26f2", native: "\u26F2" }], version: 1 }, tent: { id: "tent", name: "Tent", keywords: ["photo", "camping", "outdoors"], skins: [{ unified: "26fa", native: "\u26FA" }], version: 1 }, foggy: { id: "foggy", name: "Foggy", keywords: ["photo", "mountain"], skins: [{ unified: "1f301", native: "\u{1F301}" }], version: 1 }, night_with_stars: { id: "night_with_stars", name: "Night with Stars", keywords: ["evening", "city", "downtown"], skins: [{ unified: "1f303", native: "\u{1F303}" }], version: 1 }, cityscape: { id: "cityscape", name: "Cityscape", keywords: ["photo", "night", "life", "urban"], skins: [{ unified: "1f3d9-fe0f", native: "\u{1F3D9}\uFE0F" }], version: 1 }, sunrise_over_mountains: { id: "sunrise_over_mountains", name: "Sunrise over Mountains", keywords: ["view", "vacation", "photo"], skins: [{ unified: "1f304", native: "\u{1F304}" }], version: 1 }, sunrise: { id: "sunrise", name: "Sunrise", keywords: ["morning", "view", "vacation", "photo"], skins: [{ unified: "1f305", native: "\u{1F305}" }], version: 1 }, city_sunset: { id: "city_sunset", name: "Cityscape at Dusk", keywords: ["city", "sunset", "photo", "evening", "sky", "buildings"], skins: [{ unified: "1f306", native: "\u{1F306}" }], version: 1 }, city_sunrise: { id: "city_sunrise", name: "Sunset", keywords: ["city", "sunrise", "photo", "good", "morning", "dawn"], skins: [{ unified: "1f307", native: "\u{1F307}" }], version: 1 }, bridge_at_night: { id: "bridge_at_night", name: "Bridge at Night", keywords: ["photo", "sanfrancisco"], skins: [{ unified: "1f309", native: "\u{1F309}" }], version: 1 }, hotsprings: { id: "hotsprings", name: "Hot Springs", keywords: ["hotsprings", "bath", "warm", "relax"], skins: [{ unified: "2668-fe0f", native: "\u2668\uFE0F" }], version: 1 }, carousel_horse: { id: "carousel_horse", name: "Carousel Horse", keywords: ["photo", "carnival"], skins: [{ unified: "1f3a0", native: "\u{1F3A0}" }], version: 1 }, playground_slide: { id: "playground_slide", name: "Playground Slide", keywords: ["fun", "park"], skins: [{ unified: "1f6dd", native: "\u{1F6DD}" }], version: 14 }, ferris_wheel: { id: "ferris_wheel", name: "Ferris Wheel", keywords: ["photo", "carnival", "londoneye"], skins: [{ unified: "1f3a1", native: "\u{1F3A1}" }], version: 1 }, roller_coaster: { id: "roller_coaster", name: "Roller Coaster", keywords: ["carnival", "playground", "photo", "fun"], skins: [{ unified: "1f3a2", native: "\u{1F3A2}" }], version: 1 }, barber: { id: "barber", name: "Barber Pole", keywords: ["hair", "salon", "style"], skins: [{ unified: "1f488", native: "\u{1F488}" }], version: 1 }, circus_tent: { id: "circus_tent", name: "Circus Tent", keywords: ["festival", "carnival", "party"], skins: [{ unified: "1f3aa", native: "\u{1F3AA}" }], version: 1 }, steam_locomotive: { id: "steam_locomotive", name: "Locomotive", keywords: ["steam", "transportation", "vehicle", "train"], skins: [{ unified: "1f682", native: "\u{1F682}" }], version: 1 }, railway_car: { id: "railway_car", name: "Railway Car", keywords: ["transportation", "vehicle"], skins: [{ unified: "1f683", native: "\u{1F683}" }], version: 1 }, bullettrain_side: { id: "bullettrain_side", name: "High-Speed Train", keywords: ["bullettrain", "side", "high", "speed", "transportation", "vehicle"], skins: [{ unified: "1f684", native: "\u{1F684}" }], version: 1 }, bullettrain_front: { id: "bullettrain_front", name: "Bullet Train", keywords: ["bullettrain", "front", "transportation", "vehicle", "speed", "fast", "public", "travel"], skins: [{ unified: "1f685", native: "\u{1F685}" }], version: 1 }, train2: { id: "train2", name: "Train", keywords: ["train2", "transportation", "vehicle"], skins: [{ unified: "1f686", native: "\u{1F686}" }], version: 1 }, metro: { id: "metro", name: "Metro", keywords: ["transportation", "blue", "square", "mrt", "underground", "tube"], skins: [{ unified: "1f687", native: "\u{1F687}" }], version: 1 }, light_rail: { id: "light_rail", name: "Light Rail", keywords: ["transportation", "vehicle"], skins: [{ unified: "1f688", native: "\u{1F688}" }], version: 1 }, station: { id: "station", name: "Station", keywords: ["transportation", "vehicle", "public"], skins: [{ unified: "1f689", native: "\u{1F689}" }], version: 1 }, tram: { id: "tram", name: "Tram", keywords: ["transportation", "vehicle"], skins: [{ unified: "1f68a", native: "\u{1F68A}" }], version: 1 }, monorail: { id: "monorail", name: "Monorail", keywords: ["transportation", "vehicle"], skins: [{ unified: "1f69d", native: "\u{1F69D}" }], version: 1 }, mountain_railway: { id: "mountain_railway", name: "Mountain Railway", keywords: ["transportation", "vehicle"], skins: [{ unified: "1f69e", native: "\u{1F69E}" }], version: 1 }, train: { id: "train", name: "Tram Car", keywords: ["train", "transportation", "vehicle", "carriage", "public", "travel"], skins: [{ unified: "1f68b", native: "\u{1F68B}" }], version: 1 }, bus: { id: "bus", name: "Bus", keywords: ["car", "vehicle", "transportation"], skins: [{ unified: "1f68c", native: "\u{1F68C}" }], version: 1 }, oncoming_bus: { id: "oncoming_bus", name: "Oncoming Bus", keywords: ["vehicle", "transportation"], skins: [{ unified: "1f68d", native: "\u{1F68D}" }], version: 1 }, trolleybus: { id: "trolleybus", name: "Trolleybus", keywords: ["bart", "transportation", "vehicle"], skins: [{ unified: "1f68e", native: "\u{1F68E}" }], version: 1 }, minibus: { id: "minibus", name: "Minibus", keywords: ["vehicle", "car", "transportation"], skins: [{ unified: "1f690", native: "\u{1F690}" }], version: 1 }, ambulance: { id: "ambulance", name: "Ambulance", keywords: ["health", "911", "hospital"], skins: [{ unified: "1f691", native: "\u{1F691}" }], version: 1 }, fire_engine: { id: "fire_engine", name: "Fire Engine", keywords: ["transportation", "cars", "vehicle"], skins: [{ unified: "1f692", native: "\u{1F692}" }], version: 1 }, police_car: { id: "police_car", name: "Police Car", keywords: ["vehicle", "cars", "transportation", "law", "legal", "enforcement"], skins: [{ unified: "1f693", native: "\u{1F693}" }], version: 1 }, oncoming_police_car: { id: "oncoming_police_car", name: "Oncoming Police Car", keywords: ["vehicle", "law", "legal", "enforcement", "911"], skins: [{ unified: "1f694", native: "\u{1F694}" }], version: 1 }, taxi: { id: "taxi", name: "Taxi", keywords: ["uber", "vehicle", "cars", "transportation"], skins: [{ unified: "1f695", native: "\u{1F695}" }], version: 1 }, oncoming_taxi: { id: "oncoming_taxi", name: "Oncoming Taxi", keywords: ["vehicle", "cars", "uber"], skins: [{ unified: "1f696", native: "\u{1F696}" }], version: 1 }, car: { id: "car", name: "Automobile", keywords: ["car", "red", "transportation", "vehicle"], skins: [{ unified: "1f697", native: "\u{1F697}" }], version: 1 }, oncoming_automobile: { id: "oncoming_automobile", name: "Oncoming Automobile", keywords: ["car", "vehicle", "transportation"], skins: [{ unified: "1f698", native: "\u{1F698}" }], version: 1 }, blue_car: { id: "blue_car", name: "Recreational Vehicle", keywords: ["blue", "car", "sport", "utility", "transportation"], skins: [{ unified: "1f699", native: "\u{1F699}" }], version: 1 }, pickup_truck: { id: "pickup_truck", name: "Pickup Truck", keywords: ["car", "transportation"], skins: [{ unified: "1f6fb", native: "\u{1F6FB}" }], version: 13 }, truck: { id: "truck", name: "Delivery Truck", keywords: ["cars", "transportation"], skins: [{ unified: "1f69a", native: "\u{1F69A}" }], version: 1 }, articulated_lorry: { id: "articulated_lorry", name: "Articulated Lorry", keywords: ["vehicle", "cars", "transportation", "express"], skins: [{ unified: "1f69b", native: "\u{1F69B}" }], version: 1 }, tractor: { id: "tractor", name: "Tractor", keywords: ["vehicle", "car", "farming", "agriculture"], skins: [{ unified: "1f69c", native: "\u{1F69C}" }], version: 1 }, racing_car: { id: "racing_car", name: "Racing Car", keywords: ["sports", "race", "fast", "formula", "f1"], skins: [{ unified: "1f3ce-fe0f", native: "\u{1F3CE}\uFE0F" }], version: 1 }, racing_motorcycle: { id: "racing_motorcycle", name: "Motorcycle", keywords: ["racing", "race", "sports", "fast"], skins: [{ unified: "1f3cd-fe0f", native: "\u{1F3CD}\uFE0F" }], version: 1 }, motor_scooter: { id: "motor_scooter", name: "Motor Scooter", keywords: ["vehicle", "vespa", "sasha"], skins: [{ unified: "1f6f5", native: "\u{1F6F5}" }], version: 3 }, manual_wheelchair: { id: "manual_wheelchair", name: "Manual Wheelchair", keywords: ["accessibility"], skins: [{ unified: "1f9bd", native: "\u{1F9BD}" }], version: 12 }, motorized_wheelchair: { id: "motorized_wheelchair", name: "Motorized Wheelchair", keywords: ["accessibility"], skins: [{ unified: "1f9bc", native: "\u{1F9BC}" }], version: 12 }, auto_rickshaw: { id: "auto_rickshaw", name: "Auto Rickshaw", keywords: ["move", "transportation"], skins: [{ unified: "1f6fa", native: "\u{1F6FA}" }], version: 12 }, bike: { id: "bike", name: "Bicycle", keywords: ["bike", "sports", "exercise", "hipster"], skins: [{ unified: "1f6b2", native: "\u{1F6B2}" }], version: 1 }, scooter: { id: "scooter", name: "Scooter", keywords: ["kick", "vehicle", "razor"], skins: [{ unified: "1f6f4", native: "\u{1F6F4}" }], version: 3 }, skateboard: { id: "skateboard", name: "Skateboard", keywords: ["board"], skins: [{ unified: "1f6f9", native: "\u{1F6F9}" }], version: 11 }, roller_skate: { id: "roller_skate", name: "Roller Skate", keywords: ["footwear", "sports"], skins: [{ unified: "1f6fc", native: "\u{1F6FC}" }], version: 13 }, busstop: { id: "busstop", name: "Bus Stop", keywords: ["busstop", "transportation", "wait"], skins: [{ unified: "1f68f", native: "\u{1F68F}" }], version: 1 }, motorway: { id: "motorway", name: "Motorway", keywords: ["road", "cupertino", "interstate", "highway"], skins: [{ unified: "1f6e3-fe0f", native: "\u{1F6E3}\uFE0F" }], version: 1 }, railway_track: { id: "railway_track", name: "Railway Track", keywords: ["train", "transportation"], skins: [{ unified: "1f6e4-fe0f", native: "\u{1F6E4}\uFE0F" }], version: 1 }, oil_drum: { id: "oil_drum", name: "Oil Drum", keywords: ["barrell"], skins: [{ unified: "1f6e2-fe0f", native: "\u{1F6E2}\uFE0F" }], version: 1 }, fuelpump: { id: "fuelpump", name: "Fuel Pump", keywords: ["fuelpump", "gas", "station", "petroleum"], skins: [{ unified: "26fd", native: "\u26FD" }], version: 1 }, wheel: { id: "wheel", name: "Wheel", keywords: ["car", "transport"], skins: [{ unified: "1f6de", native: "\u{1F6DE}" }], version: 14 }, rotating_light: { id: "rotating_light", name: "Police Car Light", keywords: ["rotating", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal"], skins: [{ unified: "1f6a8", native: "\u{1F6A8}" }], version: 1 }, traffic_light: { id: "traffic_light", name: "Horizontal Traffic Light", keywords: ["transportation", "signal"], skins: [{ unified: "1f6a5", native: "\u{1F6A5}" }], version: 1 }, vertical_traffic_light: { id: "vertical_traffic_light", name: "Vertical Traffic Light", keywords: ["transportation", "driving"], skins: [{ unified: "1f6a6", native: "\u{1F6A6}" }], version: 1 }, octagonal_sign: { id: "octagonal_sign", name: "Stop Sign", keywords: ["octagonal"], skins: [{ unified: "1f6d1", native: "\u{1F6D1}" }], version: 3 }, construction: { id: "construction", name: "Construction", keywords: ["wip", "progress", "caution", "warning"], skins: [{ unified: "1f6a7", native: "\u{1F6A7}" }], version: 1 }, anchor: { id: "anchor", name: "Anchor", keywords: ["ship", "ferry", "sea", "boat"], skins: [{ unified: "2693", native: "\u2693" }], version: 1 }, ring_buoy: { id: "ring_buoy", name: "Ring Buoy", keywords: ["life", "saver", "preserver"], skins: [{ unified: "1f6df", native: "\u{1F6DF}" }], version: 14 }, boat: { id: "boat", name: "Sailboat", keywords: ["boat", "ship", "summer", "transportation", "water", "sailing"], skins: [{ unified: "26f5", native: "\u26F5" }], version: 1 }, canoe: { id: "canoe", name: "Canoe", keywords: ["boat", "paddle", "water", "ship"], skins: [{ unified: "1f6f6", native: "\u{1F6F6}" }], version: 3 }, speedboat: { id: "speedboat", name: "Speedboat", keywords: ["ship", "transportation", "vehicle", "summer"], skins: [{ unified: "1f6a4", native: "\u{1F6A4}" }], version: 1 }, passenger_ship: { id: "passenger_ship", name: "Passenger Ship", keywords: ["yacht", "cruise", "ferry"], skins: [{ unified: "1f6f3-fe0f", native: "\u{1F6F3}\uFE0F" }], version: 1 }, ferry: { id: "ferry", name: "Ferry", keywords: ["boat", "ship", "yacht"], skins: [{ unified: "26f4-fe0f", native: "\u26F4\uFE0F" }], version: 1 }, motor_boat: { id: "motor_boat", name: "Motor Boat", keywords: ["ship"], skins: [{ unified: "1f6e5-fe0f", native: "\u{1F6E5}\uFE0F" }], version: 1 }, ship: { id: "ship", name: "Ship", keywords: ["transportation", "titanic", "deploy"], skins: [{ unified: "1f6a2", native: "\u{1F6A2}" }], version: 1 }, airplane: { id: "airplane", name: "Airplane", keywords: ["vehicle", "transportation", "flight", "fly"], skins: [{ unified: "2708-fe0f", native: "\u2708\uFE0F" }], version: 1 }, small_airplane: { id: "small_airplane", name: "Small Airplane", keywords: ["flight", "transportation", "fly", "vehicle"], skins: [{ unified: "1f6e9-fe0f", native: "\u{1F6E9}\uFE0F" }], version: 1 }, airplane_departure: { id: "airplane_departure", name: "Airplane Departure", keywords: ["airport", "flight", "landing"], skins: [{ unified: "1f6eb", native: "\u{1F6EB}" }], version: 1 }, airplane_arriving: { id: "airplane_arriving", name: "Airplane Arrival", keywords: ["arriving", "airport", "flight", "boarding"], skins: [{ unified: "1f6ec", native: "\u{1F6EC}" }], version: 1 }, parachute: { id: "parachute", name: "Parachute", keywords: ["fly", "glide"], skins: [{ unified: "1fa82", native: "\u{1FA82}" }], version: 12 }, seat: { id: "seat", name: "Seat", keywords: ["sit", "airplane", "transport", "bus", "flight", "fly"], skins: [{ unified: "1f4ba", native: "\u{1F4BA}" }], version: 1 }, helicopter: { id: "helicopter", name: "Helicopter", keywords: ["transportation", "vehicle", "fly"], skins: [{ unified: "1f681", native: "\u{1F681}" }], version: 1 }, suspension_railway: { id: "suspension_railway", name: "Suspension Railway", keywords: ["vehicle", "transportation"], skins: [{ unified: "1f69f", native: "\u{1F69F}" }], version: 1 }, mountain_cableway: { id: "mountain_cableway", name: "Mountain Cableway", keywords: ["transportation", "vehicle", "ski"], skins: [{ unified: "1f6a0", native: "\u{1F6A0}" }], version: 1 }, aerial_tramway: { id: "aerial_tramway", name: "Aerial Tramway", keywords: ["transportation", "vehicle", "ski"], skins: [{ unified: "1f6a1", native: "\u{1F6A1}" }], version: 1 }, satellite: { id: "satellite", name: "Satellite", keywords: ["communication", "gps", "orbit", "spaceflight", "NASA", "ISS"], skins: [{ unified: "1f6f0-fe0f", native: "\u{1F6F0}\uFE0F" }], version: 1 }, rocket: { id: "rocket", name: "Rocket", keywords: ["launch", "ship", "staffmode", "NASA", "outer", "space", "fly"], skins: [{ unified: "1f680", native: "\u{1F680}" }], version: 1 }, flying_saucer: { id: "flying_saucer", name: "Flying Saucer", keywords: ["transportation", "vehicle", "ufo"], skins: [{ unified: "1f6f8", native: "\u{1F6F8}" }], version: 5 }, bellhop_bell: { id: "bellhop_bell", name: "Bellhop Bell", keywords: ["service"], skins: [{ unified: "1f6ce-fe0f", native: "\u{1F6CE}\uFE0F" }], version: 1 }, luggage: { id: "luggage", name: "Luggage", keywords: ["packing", "travel"], skins: [{ unified: "1f9f3", native: "\u{1F9F3}" }], version: 11 }, hourglass: { id: "hourglass", name: "Hourglass", keywords: ["done", "time", "clock", "oldschool", "limit", "exam", "quiz", "test"], skins: [{ unified: "231b", native: "\u231B" }], version: 1 }, hourglass_flowing_sand: { id: "hourglass_flowing_sand", name: "Hourglass Not Done", keywords: ["flowing", "sand", "oldschool", "time", "countdown"], skins: [{ unified: "23f3", native: "\u23F3" }], version: 1 }, watch: { id: "watch", name: "Watch", keywords: ["time", "accessories"], skins: [{ unified: "231a", native: "\u231A" }], version: 1 }, alarm_clock: { id: "alarm_clock", name: "Alarm Clock", keywords: ["time", "wake"], skins: [{ unified: "23f0", native: "\u23F0" }], version: 1 }, stopwatch: { id: "stopwatch", name: "Stopwatch", keywords: ["time", "deadline"], skins: [{ unified: "23f1-fe0f", native: "\u23F1\uFE0F" }], version: 1 }, timer_clock: { id: "timer_clock", name: "Timer Clock", keywords: ["alarm"], skins: [{ unified: "23f2-fe0f", native: "\u23F2\uFE0F" }], version: 1 }, mantelpiece_clock: { id: "mantelpiece_clock", name: "Mantelpiece Clock", keywords: ["time"], skins: [{ unified: "1f570-fe0f", native: "\u{1F570}\uFE0F" }], version: 1 }, clock12: { id: "clock12", name: "Twelve O\u2019clock", keywords: ["clock12", "o", "clock", "12", "00:00", "0000", "12:00", "1200", "time", "noon", "midnight", "midday", "late", "early", "schedule"], skins: [{ unified: "1f55b", native: "\u{1F55B}" }], version: 1 }, clock1230: { id: "clock1230", name: "Twelve-Thirty", keywords: ["clock1230", "twelve", "thirty", "00:30", "0030", "12:30", "1230", "time", "late", "early", "schedule"], skins: [{ unified: "1f567", native: "\u{1F567}" }], version: 1 }, clock1: { id: "clock1", name: "One O\u2019clock", keywords: ["clock1", "o", "clock", "1", "1:00", "100", "13:00", "1300", "time", "late", "early", "schedule"], skins: [{ unified: "1f550", native: "\u{1F550}" }], version: 1 }, clock130: { id: "clock130", name: "One-Thirty", keywords: ["clock130", "one", "thirty", "1:30", "130", "13:30", "1330", "time", "late", "early", "schedule"], skins: [{ unified: "1f55c", native: "\u{1F55C}" }], version: 1 }, clock2: { id: "clock2", name: "Two O\u2019clock", keywords: ["clock2", "o", "clock", "2", "2:00", "200", "14:00", "1400", "time", "late", "early", "schedule"], skins: [{ unified: "1f551", native: "\u{1F551}" }], version: 1 }, clock230: { id: "clock230", name: "Two-Thirty", keywords: ["clock230", "two", "thirty", "2:30", "230", "14:30", "1430", "time", "late", "early", "schedule"], skins: [{ unified: "1f55d", native: "\u{1F55D}" }], version: 1 }, clock3: { id: "clock3", name: "Three O\u2019clock", keywords: ["clock3", "o", "clock", "3", "3:00", "300", "15:00", "1500", "time", "late", "early", "schedule"], skins: [{ unified: "1f552", native: "\u{1F552}" }], version: 1 }, clock330: { id: "clock330", name: "Three-Thirty", keywords: ["clock330", "three", "thirty", "3:30", "330", "15:30", "1530", "time", "late", "early", "schedule"], skins: [{ unified: "1f55e", native: "\u{1F55E}" }], version: 1 }, clock4: { id: "clock4", name: "Four O\u2019clock", keywords: ["clock4", "o", "clock", "4", "4:00", "400", "16:00", "1600", "time", "late", "early", "schedule"], skins: [{ unified: "1f553", native: "\u{1F553}" }], version: 1 }, clock430: { id: "clock430", name: "Four-Thirty", keywords: ["clock430", "four", "thirty", "4:30", "430", "16:30", "1630", "time", "late", "early", "schedule"], skins: [{ unified: "1f55f", native: "\u{1F55F}" }], version: 1 }, clock5: { id: "clock5", name: "Five O\u2019clock", keywords: ["clock5", "o", "clock", "5", "5:00", "500", "17:00", "1700", "time", "late", "early", "schedule"], skins: [{ unified: "1f554", native: "\u{1F554}" }], version: 1 }, clock530: { id: "clock530", name: "Five-Thirty", keywords: ["clock530", "five", "thirty", "5:30", "530", "17:30", "1730", "time", "late", "early", "schedule"], skins: [{ unified: "1f560", native: "\u{1F560}" }], version: 1 }, clock6: { id: "clock6", name: "Six O\u2019clock", keywords: ["clock6", "o", "clock", "6", "6:00", "600", "18:00", "1800", "time", "late", "early", "schedule", "dawn", "dusk"], skins: [{ unified: "1f555", native: "\u{1F555}" }], version: 1 }, clock630: { id: "clock630", name: "Six-Thirty", keywords: ["clock630", "six", "thirty", "6:30", "630", "18:30", "1830", "time", "late", "early", "schedule"], skins: [{ unified: "1f561", native: "\u{1F561}" }], version: 1 }, clock7: { id: "clock7", name: "Seven O\u2019clock", keywords: ["clock7", "o", "clock", "7", "7:00", "700", "19:00", "1900", "time", "late", "early", "schedule"], skins: [{ unified: "1f556", native: "\u{1F556}" }], version: 1 }, clock730: { id: "clock730", name: "Seven-Thirty", keywords: ["clock730", "seven", "thirty", "7:30", "730", "19:30", "1930", "time", "late", "early", "schedule"], skins: [{ unified: "1f562", native: "\u{1F562}" }], version: 1 }, clock8: { id: "clock8", name: "Eight O\u2019clock", keywords: ["clock8", "o", "clock", "8", "8:00", "800", "20:00", "2000", "time", "late", "early", "schedule"], skins: [{ unified: "1f557", native: "\u{1F557}" }], version: 1 }, clock830: { id: "clock830", name: "Eight-Thirty", keywords: ["clock830", "eight", "thirty", "8:30", "830", "20:30", "2030", "time", "late", "early", "schedule"], skins: [{ unified: "1f563", native: "\u{1F563}" }], version: 1 }, clock9: { id: "clock9", name: "Nine O\u2019clock", keywords: ["clock9", "o", "clock", "9", "9:00", "900", "21:00", "2100", "time", "late", "early", "schedule"], skins: [{ unified: "1f558", native: "\u{1F558}" }], version: 1 }, clock930: { id: "clock930", name: "Nine-Thirty", keywords: ["clock930", "nine", "thirty", "9:30", "930", "21:30", "2130", "time", "late", "early", "schedule"], skins: [{ unified: "1f564", native: "\u{1F564}" }], version: 1 }, clock10: { id: "clock10", name: "Ten O\u2019clock", keywords: ["clock10", "o", "clock", "10", "10:00", "1000", "22:00", "2200", "time", "late", "early", "schedule"], skins: [{ unified: "1f559", native: "\u{1F559}" }], version: 1 }, clock1030: { id: "clock1030", name: "Ten-Thirty", keywords: ["clock1030", "ten", "thirty", "10:30", "1030", "22:30", "2230", "time", "late", "early", "schedule"], skins: [{ unified: "1f565", native: "\u{1F565}" }], version: 1 }, clock11: { id: "clock11", name: "Eleven O\u2019clock", keywords: ["clock11", "o", "clock", "11", "11:00", "1100", "23:00", "2300", "time", "late", "early", "schedule"], skins: [{ unified: "1f55a", native: "\u{1F55A}" }], version: 1 }, clock1130: { id: "clock1130", name: "Eleven-Thirty", keywords: ["clock1130", "eleven", "thirty", "11:30", "1130", "23:30", "2330", "time", "late", "early", "schedule"], skins: [{ unified: "1f566", native: "\u{1F566}" }], version: 1 }, new_moon: { id: "new_moon", name: "New Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f311", native: "\u{1F311}" }], version: 1 }, waxing_crescent_moon: { id: "waxing_crescent_moon", name: "Waxing Crescent Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f312", native: "\u{1F312}" }], version: 1 }, first_quarter_moon: { id: "first_quarter_moon", name: "First Quarter Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f313", native: "\u{1F313}" }], version: 1 }, moon: { id: "moon", name: "Waxing Gibbous Moon", keywords: ["nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep"], skins: [{ unified: "1f314", native: "\u{1F314}" }], version: 1 }, full_moon: { id: "full_moon", name: "Full Moon", keywords: ["nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f315", native: "\u{1F315}" }], version: 1 }, waning_gibbous_moon: { id: "waning_gibbous_moon", name: "Waning Gibbous Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing"], skins: [{ unified: "1f316", native: "\u{1F316}" }], version: 1 }, last_quarter_moon: { id: "last_quarter_moon", name: "Last Quarter Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f317", native: "\u{1F317}" }], version: 1 }, waning_crescent_moon: { id: "waning_crescent_moon", name: "Waning Crescent Moon", keywords: ["nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f318", native: "\u{1F318}" }], version: 1 }, crescent_moon: { id: "crescent_moon", name: "Crescent Moon", keywords: ["night", "sleep", "sky", "evening", "magic"], skins: [{ unified: "1f319", native: "\u{1F319}" }], version: 1 }, new_moon_with_face: { id: "new_moon_with_face", name: "New Moon Face", keywords: ["with", "nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f31a", native: "\u{1F31A}" }], version: 1 }, first_quarter_moon_with_face: { id: "first_quarter_moon_with_face", name: "First Quarter Moon Face", keywords: ["with", "nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f31b", native: "\u{1F31B}" }], version: 1 }, last_quarter_moon_with_face: { id: "last_quarter_moon_with_face", name: "Last Quarter Moon Face", keywords: ["with", "nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f31c", native: "\u{1F31C}" }], version: 1 }, thermometer: { id: "thermometer", name: "Thermometer", keywords: ["weather", "temperature", "hot", "cold"], skins: [{ unified: "1f321-fe0f", native: "\u{1F321}\uFE0F" }], version: 1 }, sunny: { id: "sunny", name: "Sun", keywords: ["sunny", "weather", "nature", "brightness", "summer", "beach", "spring"], skins: [{ unified: "2600-fe0f", native: "\u2600\uFE0F" }], version: 1 }, full_moon_with_face: { id: "full_moon_with_face", name: "Full Moon Face", keywords: ["with", "nature", "twilight", "planet", "space", "night", "evening", "sleep"], skins: [{ unified: "1f31d", native: "\u{1F31D}" }], version: 1 }, sun_with_face: { id: "sun_with_face", name: "Sun with Face", keywords: ["nature", "morning", "sky"], skins: [{ unified: "1f31e", native: "\u{1F31E}" }], version: 1 }, ringed_planet: { id: "ringed_planet", name: "Ringed Planet", keywords: ["outerspace"], skins: [{ unified: "1fa90", native: "\u{1FA90}" }], version: 12 }, star: { id: "star", name: "Star", keywords: ["night", "yellow"], skins: [{ unified: "2b50", native: "\u2B50" }], version: 1 }, star2: { id: "star2", name: "Glowing Star", keywords: ["star2", "night", "sparkle", "awesome", "good", "magic"], skins: [{ unified: "1f31f", native: "\u{1F31F}" }], version: 1 }, stars: { id: "stars", name: "Shooting Star", keywords: ["stars", "night", "photo"], skins: [{ unified: "1f320", native: "\u{1F320}" }], version: 1 }, milky_way: { id: "milky_way", name: "Milky Way", keywords: ["photo", "space", "stars"], skins: [{ unified: "1f30c", native: "\u{1F30C}" }], version: 1 }, cloud: { id: "cloud", name: "Cloud", keywords: ["weather", "sky"], skins: [{ unified: "2601-fe0f", native: "\u2601\uFE0F" }], version: 1 }, partly_sunny: { id: "partly_sunny", name: "Sun Behind Cloud", keywords: ["partly", "sunny", "weather", "nature", "cloudy", "morning", "fall", "spring"], skins: [{ unified: "26c5", native: "\u26C5" }], version: 1 }, thunder_cloud_and_rain: { id: "thunder_cloud_and_rain", name: "Cloud with Lightning and Rain", keywords: ["thunder", "weather"], skins: [{ unified: "26c8-fe0f", native: "\u26C8\uFE0F" }], version: 1 }, mostly_sunny: { id: "mostly_sunny", name: "Sun Behind Small Cloud", keywords: ["mostly", "sunny", "weather"], skins: [{ unified: "1f324-fe0f", native: "\u{1F324}\uFE0F" }], version: 1 }, barely_sunny: { id: "barely_sunny", name: "Sun Behind Large Cloud", keywords: ["barely", "sunny", "weather"], skins: [{ unified: "1f325-fe0f", native: "\u{1F325}\uFE0F" }], version: 1 }, partly_sunny_rain: { id: "partly_sunny_rain", name: "Sun Behind Rain Cloud", keywords: ["partly", "sunny", "weather"], skins: [{ unified: "1f326-fe0f", native: "\u{1F326}\uFE0F" }], version: 1 }, rain_cloud: { id: "rain_cloud", name: "Cloud with Rain", keywords: ["weather"], skins: [{ unified: "1f327-fe0f", native: "\u{1F327}\uFE0F" }], version: 1 }, snow_cloud: { id: "snow_cloud", name: "Cloud with Snow", keywords: ["weather"], skins: [{ unified: "1f328-fe0f", native: "\u{1F328}\uFE0F" }], version: 1 }, lightning: { id: "lightning", name: "Cloud with Lightning", keywords: ["weather", "thunder"], skins: [{ unified: "1f329-fe0f", native: "\u{1F329}\uFE0F" }], version: 1 }, tornado: { id: "tornado", name: "Tornado", keywords: ["cloud", "weather", "cyclone", "twister"], skins: [{ unified: "1f32a-fe0f", native: "\u{1F32A}\uFE0F" }], version: 1 }, fog: { id: "fog", name: "Fog", keywords: ["weather"], skins: [{ unified: "1f32b-fe0f", native: "\u{1F32B}\uFE0F" }], version: 1 }, wind_blowing_face: { id: "wind_blowing_face", name: "Wind Face", keywords: ["blowing", "gust", "air"], skins: [{ unified: "1f32c-fe0f", native: "\u{1F32C}\uFE0F" }], version: 1 }, cyclone: { id: "cyclone", name: "Cyclone", keywords: ["weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin", "tornado", "hurricane", "typhoon"], skins: [{ unified: "1f300", native: "\u{1F300}" }], version: 1 }, rainbow: { id: "rainbow", name: "Rainbow", keywords: ["nature", "happy", "unicorn", "face", "photo", "sky", "spring"], skins: [{ unified: "1f308", native: "\u{1F308}" }], version: 1 }, closed_umbrella: { id: "closed_umbrella", name: "Closed Umbrella", keywords: ["weather", "rain", "drizzle"], skins: [{ unified: "1f302", native: "\u{1F302}" }], version: 1 }, umbrella: { id: "umbrella", name: "Umbrella", keywords: ["weather", "spring"], skins: [{ unified: "2602-fe0f", native: "\u2602\uFE0F" }], version: 1 }, umbrella_with_rain_drops: { id: "umbrella_with_rain_drops", name: "Umbrella with Rain Drops", keywords: ["rainy", "weather", "spring"], skins: [{ unified: "2614", native: "\u2614" }], version: 1 }, umbrella_on_ground: { id: "umbrella_on_ground", name: "Umbrella on Ground", keywords: ["weather", "summer"], skins: [{ unified: "26f1-fe0f", native: "\u26F1\uFE0F" }], version: 1 }, zap: { id: "zap", name: "High Voltage", keywords: ["zap", "thunder", "weather", "lightning", "bolt", "fast"], skins: [{ unified: "26a1", native: "\u26A1" }], version: 1 }, snowflake: { id: "snowflake", name: "Snowflake", keywords: ["winter", "season", "cold", "weather", "christmas", "xmas"], skins: [{ unified: "2744-fe0f", native: "\u2744\uFE0F" }], version: 1 }, snowman: { id: "snowman", name: "Snowman", keywords: ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen"], skins: [{ unified: "2603-fe0f", native: "\u2603\uFE0F" }], version: 1 }, snowman_without_snow: { id: "snowman_without_snow", name: "Snowman Without Snow", keywords: ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen"], skins: [{ unified: "26c4", native: "\u26C4" }], version: 1 }, comet: { id: "comet", name: "Comet", keywords: ["space"], skins: [{ unified: "2604-fe0f", native: "\u2604\uFE0F" }], version: 1 }, fire: { id: "fire", name: "Fire", keywords: ["hot", "cook", "flame"], skins: [{ unified: "1f525", native: "\u{1F525}" }], version: 1 }, droplet: { id: "droplet", name: "Droplet", keywords: ["water", "drip", "faucet", "spring"], skins: [{ unified: "1f4a7", native: "\u{1F4A7}" }], version: 1 }, ocean: { id: "ocean", name: "Water Wave", keywords: ["ocean", "sea", "nature", "tsunami", "disaster"], skins: [{ unified: "1f30a", native: "\u{1F30A}" }], version: 1 }, jack_o_lantern: { id: "jack_o_lantern", name: "Jack-O-Lantern", keywords: ["jack", "o", "lantern", "halloween", "light", "pumpkin", "creepy", "fall"], skins: [{ unified: "1f383", native: "\u{1F383}" }], version: 1 }, christmas_tree: { id: "christmas_tree", name: "Christmas Tree", keywords: ["festival", "vacation", "december", "xmas", "celebration"], skins: [{ unified: "1f384", native: "\u{1F384}" }], version: 1 }, fireworks: { id: "fireworks", name: "Fireworks", keywords: ["photo", "festival", "carnival", "congratulations"], skins: [{ unified: "1f386", native: "\u{1F386}" }], version: 1 }, sparkler: { id: "sparkler", name: "Sparkler", keywords: ["stars", "night", "shine"], skins: [{ unified: "1f387", native: "\u{1F387}" }], version: 1 }, firecracker: { id: "firecracker", name: "Firecracker", keywords: ["dynamite", "boom", "explode", "explosion", "explosive"], skins: [{ unified: "1f9e8", native: "\u{1F9E8}" }], version: 11 }, sparkles: { id: "sparkles", name: "Sparkles", keywords: ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"], skins: [{ unified: "2728", native: "\u2728" }], version: 1 }, balloon: { id: "balloon", name: "Balloon", keywords: ["party", "celebration", "birthday", "circus"], skins: [{ unified: "1f388", native: "\u{1F388}" }], version: 1 }, tada: { id: "tada", name: "Party Popper", keywords: ["tada", "congratulations", "birthday", "magic", "circus", "celebration"], skins: [{ unified: "1f389", native: "\u{1F389}" }], version: 1 }, confetti_ball: { id: "confetti_ball", name: "Confetti Ball", keywords: ["festival", "party", "birthday", "circus"], skins: [{ unified: "1f38a", native: "\u{1F38A}" }], version: 1 }, tanabata_tree: { id: "tanabata_tree", name: "Tanabata Tree", keywords: ["plant", "nature", "branch", "summer", "bamboo", "wish", "star", "festival", "tanzaku"], skins: [{ unified: "1f38b", native: "\u{1F38B}" }], version: 1 }, bamboo: { id: "bamboo", name: "Pine Decoration", keywords: ["bamboo", "japanese", "plant", "nature", "vegetable", "panda", "new", "years"], skins: [{ unified: "1f38d", native: "\u{1F38D}" }], version: 1 }, dolls: { id: "dolls", name: "Japanese Dolls", keywords: ["toy", "kimono"], skins: [{ unified: "1f38e", native: "\u{1F38E}" }], version: 1 }, flags: { id: "flags", name: "Carp Streamer", keywords: ["flags", "fish", "japanese", "koinobori", "banner"], skins: [{ unified: "1f38f", native: "\u{1F38F}" }], version: 1 }, wind_chime: { id: "wind_chime", name: "Wind Chime", keywords: ["nature", "ding", "spring", "bell"], skins: [{ unified: "1f390", native: "\u{1F390}" }], version: 1 }, rice_scene: { id: "rice_scene", name: "Moon Viewing Ceremony", keywords: ["rice", "scene", "photo", "japan", "asia", "tsukimi"], skins: [{ unified: "1f391", native: "\u{1F391}" }], version: 1 }, red_envelope: { id: "red_envelope", name: "Red Envelope", keywords: ["gift"], skins: [{ unified: "1f9e7", native: "\u{1F9E7}" }], version: 11 }, ribbon: { id: "ribbon", name: "Ribbon", keywords: ["decoration", "pink", "girl", "bowtie"], skins: [{ unified: "1f380", native: "\u{1F380}" }], version: 1 }, gift: { id: "gift", name: "Wrapped Gift", keywords: ["present", "birthday", "christmas", "xmas"], skins: [{ unified: "1f381", native: "\u{1F381}" }], version: 1 }, reminder_ribbon: { id: "reminder_ribbon", name: "Reminder Ribbon", keywords: ["sports", "cause", "support", "awareness"], skins: [{ unified: "1f397-fe0f", native: "\u{1F397}\uFE0F" }], version: 1 }, admission_tickets: { id: "admission_tickets", name: "Admission Tickets", keywords: ["sports", "concert", "entrance"], skins: [{ unified: "1f39f-fe0f", native: "\u{1F39F}\uFE0F" }], version: 1 }, ticket: { id: "ticket", name: "Ticket", keywords: ["event", "concert", "pass"], skins: [{ unified: "1f3ab", native: "\u{1F3AB}" }], version: 1 }, medal: { id: "medal", name: "Military Medal", keywords: ["award", "winning", "army"], skins: [{ unified: "1f396-fe0f", native: "\u{1F396}\uFE0F" }], version: 1 }, trophy: { id: "trophy", name: "Trophy", keywords: ["win", "award", "contest", "place", "ftw", "ceremony"], skins: [{ unified: "1f3c6", native: "\u{1F3C6}" }], version: 1 }, sports_medal: { id: "sports_medal", name: "Sports Medal", keywords: ["award", "winning"], skins: [{ unified: "1f3c5", native: "\u{1F3C5}" }], version: 1 }, first_place_medal: { id: "first_place_medal", name: "1st Place Medal", keywords: ["first", "award", "winning"], skins: [{ unified: "1f947", native: "\u{1F947}" }], version: 3 }, second_place_medal: { id: "second_place_medal", name: "2nd Place Medal", keywords: ["second", "award"], skins: [{ unified: "1f948", native: "\u{1F948}" }], version: 3 }, third_place_medal: { id: "third_place_medal", name: "3rd Place Medal", keywords: ["third", "award"], skins: [{ unified: "1f949", native: "\u{1F949}" }], version: 3 }, soccer: { id: "soccer", name: "Soccer Ball", keywords: ["sports", "football"], skins: [{ unified: "26bd", native: "\u26BD" }], version: 1 }, baseball: { id: "baseball", name: "Baseball", keywords: ["sports", "balls"], skins: [{ unified: "26be", native: "\u26BE" }], version: 1 }, softball: { id: "softball", name: "Softball", keywords: ["sports", "balls"], skins: [{ unified: "1f94e", native: "\u{1F94E}" }], version: 11 }, basketball: { id: "basketball", name: "Basketball", keywords: ["sports", "balls", "NBA"], skins: [{ unified: "1f3c0", native: "\u{1F3C0}" }], version: 1 }, volleyball: { id: "volleyball", name: "Volleyball", keywords: ["sports", "balls"], skins: [{ unified: "1f3d0", native: "\u{1F3D0}" }], version: 1 }, football: { id: "football", name: "American Football", keywords: ["sports", "balls", "NFL"], skins: [{ unified: "1f3c8", native: "\u{1F3C8}" }], version: 1 }, rugby_football: { id: "rugby_football", name: "Rugby Football", keywords: ["sports", "team"], skins: [{ unified: "1f3c9", native: "\u{1F3C9}" }], version: 1 }, tennis: { id: "tennis", name: "Tennis", keywords: ["sports", "balls", "green"], skins: [{ unified: "1f3be", native: "\u{1F3BE}" }], version: 1 }, flying_disc: { id: "flying_disc", name: "Flying Disc", keywords: ["sports", "frisbee", "ultimate"], skins: [{ unified: "1f94f", native: "\u{1F94F}" }], version: 11 }, bowling: { id: "bowling", name: "Bowling", keywords: ["sports", "fun", "play"], skins: [{ unified: "1f3b3", native: "\u{1F3B3}" }], version: 1 }, cricket_bat_and_ball: { id: "cricket_bat_and_ball", name: "Cricket Game", keywords: ["bat", "and", "ball", "sports"], skins: [{ unified: "1f3cf", native: "\u{1F3CF}" }], version: 1 }, field_hockey_stick_and_ball: { id: "field_hockey_stick_and_ball", name: "Field Hockey", keywords: ["stick", "and", "ball", "sports"], skins: [{ unified: "1f3d1", native: "\u{1F3D1}" }], version: 1 }, ice_hockey_stick_and_puck: { id: "ice_hockey_stick_and_puck", name: "Ice Hockey", keywords: ["stick", "and", "puck", "sports"], skins: [{ unified: "1f3d2", native: "\u{1F3D2}" }], version: 1 }, lacrosse: { id: "lacrosse", name: "Lacrosse", keywords: ["sports", "ball", "stick"], skins: [{ unified: "1f94d", native: "\u{1F94D}" }], version: 11 }, table_tennis_paddle_and_ball: { id: "table_tennis_paddle_and_ball", name: "Ping Pong", keywords: ["table", "tennis", "paddle", "and", "ball", "sports", "pingpong"], skins: [{ unified: "1f3d3", native: "\u{1F3D3}" }], version: 1 }, badminton_racquet_and_shuttlecock: { id: "badminton_racquet_and_shuttlecock", name: "Badminton", keywords: ["racquet", "and", "shuttlecock", "sports"], skins: [{ unified: "1f3f8", native: "\u{1F3F8}" }], version: 1 }, boxing_glove: { id: "boxing_glove", name: "Boxing Glove", keywords: ["sports", "fighting"], skins: [{ unified: "1f94a", native: "\u{1F94A}" }], version: 3 }, martial_arts_uniform: { id: "martial_arts_uniform", name: "Martial Arts Uniform", keywords: ["judo", "karate", "taekwondo"], skins: [{ unified: "1f94b", native: "\u{1F94B}" }], version: 3 }, goal_net: { id: "goal_net", name: "Goal Net", keywords: ["sports"], skins: [{ unified: "1f945", native: "\u{1F945}" }], version: 3 }, golf: { id: "golf", name: "Flag in Hole", keywords: ["golf", "sports", "business", "summer"], skins: [{ unified: "26f3", native: "\u26F3" }], version: 1 }, ice_skate: { id: "ice_skate", name: "Ice Skate", keywords: ["sports"], skins: [{ unified: "26f8-fe0f", native: "\u26F8\uFE0F" }], version: 1 }, fishing_pole_and_fish: { id: "fishing_pole_and_fish", name: "Fishing Pole", keywords: ["and", "fish", "food", "hobby", "summer"], skins: [{ unified: "1f3a3", native: "\u{1F3A3}" }], version: 1 }, diving_mask: { id: "diving_mask", name: "Diving Mask", keywords: ["sport", "ocean"], skins: [{ unified: "1f93f", native: "\u{1F93F}" }], version: 12 }, running_shirt_with_sash: { id: "running_shirt_with_sash", name: "Running Shirt", keywords: ["with", "sash", "play", "pageant"], skins: [{ unified: "1f3bd", native: "\u{1F3BD}" }], version: 1 }, ski: { id: "ski", name: "Skis", keywords: ["ski", "sports", "winter", "cold", "snow"], skins: [{ unified: "1f3bf", native: "\u{1F3BF}" }], version: 1 }, sled: { id: "sled", name: "Sled", keywords: ["sleigh", "luge", "toboggan"], skins: [{ unified: "1f6f7", native: "\u{1F6F7}" }], version: 5 }, curling_stone: { id: "curling_stone", name: "Curling Stone", keywords: ["sports"], skins: [{ unified: "1f94c", native: "\u{1F94C}" }], version: 5 }, dart: { id: "dart", name: "Bullseye", keywords: ["dart", "direct", "hit", "game", "play", "bar", "target"], skins: [{ unified: "1f3af", native: "\u{1F3AF}" }], version: 1 }, "yo-yo": { id: "yo-yo", name: "Yo-Yo", keywords: ["yo", "toy"], skins: [{ unified: "1fa80", native: "\u{1FA80}" }], version: 12 }, kite: { id: "kite", name: "Kite", keywords: ["wind", "fly"], skins: [{ unified: "1fa81", native: "\u{1FA81}" }], version: 12 }, gun: { id: "gun", name: "Pistol", keywords: ["gun", "violence", "weapon", "revolver"], skins: [{ unified: "1f52b", native: "\u{1F52B}" }], version: 1 }, "8ball": { id: "8ball", name: "Billiards", keywords: ["8ball", "pool", "8", "ball", "hobby", "game", "luck", "magic"], skins: [{ unified: "1f3b1", native: "\u{1F3B1}" }], version: 1 }, crystal_ball: { id: "crystal_ball", name: "Crystal Ball", keywords: ["disco", "party", "magic", "circus", "fortune", "teller"], skins: [{ unified: "1f52e", native: "\u{1F52E}" }], version: 1 }, magic_wand: { id: "magic_wand", name: "Magic Wand", keywords: ["supernature", "power"], skins: [{ unified: "1fa84", native: "\u{1FA84}" }], version: 13 }, video_game: { id: "video_game", name: "Video Game", keywords: ["play", "console", "PS4", "controller"], skins: [{ unified: "1f3ae", native: "\u{1F3AE}" }], version: 1 }, joystick: { id: "joystick", name: "Joystick", keywords: ["game", "play"], skins: [{ unified: "1f579-fe0f", native: "\u{1F579}\uFE0F" }], version: 1 }, slot_machine: { id: "slot_machine", name: "Slot Machine", keywords: ["bet", "gamble", "vegas", "fruit", "luck", "casino"], skins: [{ unified: "1f3b0", native: "\u{1F3B0}" }], version: 1 }, game_die: { id: "game_die", name: "Game Die", keywords: ["dice", "random", "tabletop", "play", "luck"], skins: [{ unified: "1f3b2", native: "\u{1F3B2}" }], version: 1 }, jigsaw: { id: "jigsaw", name: "Puzzle Piece", keywords: ["jigsaw", "interlocking"], skins: [{ unified: "1f9e9", native: "\u{1F9E9}" }], version: 11 }, teddy_bear: { id: "teddy_bear", name: "Teddy Bear", keywords: ["plush", "stuffed"], skins: [{ unified: "1f9f8", native: "\u{1F9F8}" }], version: 11 }, pinata: { id: "pinata", name: "Pinata", keywords: ["mexico", "candy", "celebration"], skins: [{ unified: "1fa85", native: "\u{1FA85}" }], version: 13 }, mirror_ball: { id: "mirror_ball", name: "Mirror Ball", keywords: ["disco", "dance", "party"], skins: [{ unified: "1faa9", native: "\u{1FAA9}" }], version: 14 }, nesting_dolls: { id: "nesting_dolls", name: "Nesting Dolls", keywords: ["matryoshka", "toy"], skins: [{ unified: "1fa86", native: "\u{1FA86}" }], version: 13 }, spades: { id: "spades", name: "Spade Suit", keywords: ["spades", "poker", "cards", "suits", "magic"], skins: [{ unified: "2660-fe0f", native: "\u2660\uFE0F" }], version: 1 }, hearts: { id: "hearts", name: "Heart Suit", keywords: ["hearts", "poker", "cards", "magic", "suits"], skins: [{ unified: "2665-fe0f", native: "\u2665\uFE0F" }], version: 1 }, diamonds: { id: "diamonds", name: "Diamond Suit", keywords: ["diamonds", "poker", "cards", "magic", "suits"], skins: [{ unified: "2666-fe0f", native: "\u2666\uFE0F" }], version: 1 }, clubs: { id: "clubs", name: "Club Suit", keywords: ["clubs", "poker", "cards", "magic", "suits"], skins: [{ unified: "2663-fe0f", native: "\u2663\uFE0F" }], version: 1 }, chess_pawn: { id: "chess_pawn", name: "Chess Pawn", keywords: ["expendable"], skins: [{ unified: "265f-fe0f", native: "\u265F\uFE0F" }], version: 11 }, black_joker: { id: "black_joker", name: "Joker", keywords: ["black", "poker", "cards", "game", "play", "magic"], skins: [{ unified: "1f0cf", native: "\u{1F0CF}" }], version: 1 }, mahjong: { id: "mahjong", name: "Mahjong Red Dragon", keywords: ["game", "play", "chinese", "kanji"], skins: [{ unified: "1f004", native: "\u{1F004}" }], version: 1 }, flower_playing_cards: { id: "flower_playing_cards", name: "Flower Playing Cards", keywords: ["game", "sunset", "red"], skins: [{ unified: "1f3b4", native: "\u{1F3B4}" }], version: 1 }, performing_arts: { id: "performing_arts", name: "Performing Arts", keywords: ["acting", "theater", "drama"], skins: [{ unified: "1f3ad", native: "\u{1F3AD}" }], version: 1 }, frame_with_picture: { id: "frame_with_picture", name: "Framed Picture", keywords: ["frame", "with", "photography"], skins: [{ unified: "1f5bc-fe0f", native: "\u{1F5BC}\uFE0F" }], version: 1 }, art: { id: "art", name: "Artist Palette", keywords: ["art", "design", "paint", "draw", "colors"], skins: [{ unified: "1f3a8", native: "\u{1F3A8}" }], version: 1 }, thread: { id: "thread", name: "Thread", keywords: ["needle", "sewing", "spool", "string"], skins: [{ unified: "1f9f5", native: "\u{1F9F5}" }], version: 11 }, sewing_needle: { id: "sewing_needle", name: "Sewing Needle", keywords: ["stitches"], skins: [{ unified: "1faa1", native: "\u{1FAA1}" }], version: 13 }, yarn: { id: "yarn", name: "Yarn", keywords: ["ball", "crochet", "knit"], skins: [{ unified: "1f9f6", native: "\u{1F9F6}" }], version: 11 }, knot: { id: "knot", name: "Knot", keywords: ["rope", "scout"], skins: [{ unified: "1faa2", native: "\u{1FAA2}" }], version: 13 }, eyeglasses: { id: "eyeglasses", name: "Glasses", keywords: ["eyeglasses", "fashion", "accessories", "eyesight", "nerdy", "dork", "geek"], skins: [{ unified: "1f453", native: "\u{1F453}" }], version: 1 }, dark_sunglasses: { id: "dark_sunglasses", name: "Sunglasses", keywords: ["dark", "face", "cool", "accessories"], skins: [{ unified: "1f576-fe0f", native: "\u{1F576}\uFE0F" }], version: 1 }, goggles: { id: "goggles", name: "Goggles", keywords: ["eyes", "protection", "safety"], skins: [{ unified: "1f97d", native: "\u{1F97D}" }], version: 11 }, lab_coat: { id: "lab_coat", name: "Lab Coat", keywords: ["doctor", "experiment", "scientist", "chemist"], skins: [{ unified: "1f97c", native: "\u{1F97C}" }], version: 11 }, safety_vest: { id: "safety_vest", name: "Safety Vest", keywords: ["protection"], skins: [{ unified: "1f9ba", native: "\u{1F9BA}" }], version: 12 }, necktie: { id: "necktie", name: "Necktie", keywords: ["shirt", "suitup", "formal", "fashion", "cloth", "business"], skins: [{ unified: "1f454", native: "\u{1F454}" }], version: 1 }, shirt: { id: "shirt", name: "T-Shirt", keywords: ["shirt", "tshirt", "t", "fashion", "cloth", "casual", "tee"], skins: [{ unified: "1f455", native: "\u{1F455}" }], version: 1 }, jeans: { id: "jeans", name: "Jeans", keywords: ["fashion", "shopping"], skins: [{ unified: "1f456", native: "\u{1F456}" }], version: 1 }, scarf: { id: "scarf", name: "Scarf", keywords: ["neck", "winter", "clothes"], skins: [{ unified: "1f9e3", native: "\u{1F9E3}" }], version: 5 }, gloves: { id: "gloves", name: "Gloves", keywords: ["hands", "winter", "clothes"], skins: [{ unified: "1f9e4", native: "\u{1F9E4}" }], version: 5 }, coat: { id: "coat", name: "Coat", keywords: ["jacket"], skins: [{ unified: "1f9e5", native: "\u{1F9E5}" }], version: 5 }, socks: { id: "socks", name: "Socks", keywords: ["stockings", "clothes"], skins: [{ unified: "1f9e6", native: "\u{1F9E6}" }], version: 5 }, dress: { id: "dress", name: "Dress", keywords: ["clothes", "fashion", "shopping"], skins: [{ unified: "1f457", native: "\u{1F457}" }], version: 1 }, kimono: { id: "kimono", name: "Kimono", keywords: ["dress", "fashion", "women", "female", "japanese"], skins: [{ unified: "1f458", native: "\u{1F458}" }], version: 1 }, sari: { id: "sari", name: "Sari", keywords: ["dress"], skins: [{ unified: "1f97b", native: "\u{1F97B}" }], version: 12 }, "one-piece_swimsuit": { id: "one-piece_swimsuit", name: "One-Piece Swimsuit", keywords: ["one", "piece", "fashion"], skins: [{ unified: "1fa71", native: "\u{1FA71}" }], version: 12 }, briefs: { id: "briefs", name: "Briefs", keywords: ["clothing"], skins: [{ unified: "1fa72", native: "\u{1FA72}" }], version: 12 }, shorts: { id: "shorts", name: "Shorts", keywords: ["clothing"], skins: [{ unified: "1fa73", native: "\u{1FA73}" }], version: 12 }, bikini: { id: "bikini", name: "Bikini", keywords: ["swimming", "female", "woman", "girl", "fashion", "beach", "summer"], skins: [{ unified: "1f459", native: "\u{1F459}" }], version: 1 }, womans_clothes: { id: "womans_clothes", name: "Womans Clothes", keywords: ["woman", "s", "fashion", "shopping", "bags", "female"], skins: [{ unified: "1f45a", native: "\u{1F45A}" }], version: 1 }, folding_hand_fan: { id: "folding_hand_fan", name: "Folding Hand Fan", keywords: ["flamenco", "hot"], skins: [{ unified: "1faad", native: "\u{1FAAD}" }], version: 15 }, purse: { id: "purse", name: "Purse", keywords: ["fashion", "accessories", "money", "sales", "shopping"], skins: [{ unified: "1f45b", native: "\u{1F45B}" }], version: 1 }, handbag: { id: "handbag", name: "Handbag", keywords: ["fashion", "accessory", "accessories", "shopping"], skins: [{ unified: "1f45c", native: "\u{1F45C}" }], version: 1 }, pouch: { id: "pouch", name: "Pouch", keywords: ["clutch", "bag", "accessories", "shopping"], skins: [{ unified: "1f45d", native: "\u{1F45D}" }], version: 1 }, shopping_bags: { id: "shopping_bags", name: "Shopping Bags", keywords: ["mall", "buy", "purchase"], skins: [{ unified: "1f6cd-fe0f", native: "\u{1F6CD}\uFE0F" }], version: 1 }, school_satchel: { id: "school_satchel", name: "Backpack", keywords: ["school", "satchel", "student", "education", "bag"], skins: [{ unified: "1f392", native: "\u{1F392}" }], version: 1 }, thong_sandal: { id: "thong_sandal", name: "Thong Sandal", keywords: ["footwear", "summer"], skins: [{ unified: "1fa74", native: "\u{1FA74}" }], version: 13 }, mans_shoe: { id: "mans_shoe", name: "Mans Shoe", keywords: ["man", "s", "fashion", "male"], skins: [{ unified: "1f45e", native: "\u{1F45E}" }], version: 1 }, athletic_shoe: { id: "athletic_shoe", name: "Running Shoe", keywords: ["athletic", "shoes", "sports", "sneakers"], skins: [{ unified: "1f45f", native: "\u{1F45F}" }], version: 1 }, hiking_boot: { id: "hiking_boot", name: "Hiking Boot", keywords: ["backpacking", "camping"], skins: [{ unified: "1f97e", native: "\u{1F97E}" }], version: 11 }, womans_flat_shoe: { id: "womans_flat_shoe", name: "Flat Shoe", keywords: ["womans", "ballet", "slip", "on", "slipper"], skins: [{ unified: "1f97f", native: "\u{1F97F}" }], version: 11 }, high_heel: { id: "high_heel", name: "High-Heeled Shoe", keywords: ["high", "heel", "heeled", "fashion", "shoes", "female", "pumps", "stiletto"], skins: [{ unified: "1f460", native: "\u{1F460}" }], version: 1 }, sandal: { id: "sandal", name: "Womans Sandal", keywords: ["woman", "s", "shoes", "fashion", "flip", "flops"], skins: [{ unified: "1f461", native: "\u{1F461}" }], version: 1 }, ballet_shoes: { id: "ballet_shoes", name: "Ballet Shoes", keywords: ["dance"], skins: [{ unified: "1fa70", native: "\u{1FA70}" }], version: 12 }, boot: { id: "boot", name: "Womans Boots", keywords: ["boot", "woman", "s", "shoes", "fashion"], skins: [{ unified: "1f462", native: "\u{1F462}" }], version: 1 }, hair_pick: { id: "hair_pick", name: "Hair Pick", keywords: ["afro", "comb"], skins: [{ unified: "1faae", native: "\u{1FAAE}" }], version: 15 }, crown: { id: "crown", name: "Crown", keywords: ["king", "kod", "leader", "royalty", "lord"], skins: [{ unified: "1f451", native: "\u{1F451}" }], version: 1 }, womans_hat: { id: "womans_hat", name: "Womans Hat", keywords: ["woman", "s", "fashion", "accessories", "female", "lady", "spring"], skins: [{ unified: "1f452", native: "\u{1F452}" }], version: 1 }, tophat: { id: "tophat", name: "Top Hat", keywords: ["tophat", "magic", "gentleman", "classy", "circus"], skins: [{ unified: "1f3a9", native: "\u{1F3A9}" }], version: 1 }, mortar_board: { id: "mortar_board", name: "Graduation Cap", keywords: ["mortar", "board", "school", "college", "degree", "university", "hat", "legal", "learn", "education"], skins: [{ unified: "1f393", native: "\u{1F393}" }], version: 1 }, billed_cap: { id: "billed_cap", name: "Billed Cap", keywords: ["baseball"], skins: [{ unified: "1f9e2", native: "\u{1F9E2}" }], version: 5 }, military_helmet: { id: "military_helmet", name: "Military Helmet", keywords: ["army", "protection"], skins: [{ unified: "1fa96", native: "\u{1FA96}" }], version: 13 }, helmet_with_white_cross: { id: "helmet_with_white_cross", name: "Rescue Worker\u2019s Helmet", keywords: ["with", "white", "cross", "worker", "s", "construction", "build"], skins: [{ unified: "26d1-fe0f", native: "\u26D1\uFE0F" }], version: 1 }, prayer_beads: { id: "prayer_beads", name: "Prayer Beads", keywords: ["dhikr", "religious"], skins: [{ unified: "1f4ff", native: "\u{1F4FF}" }], version: 1 }, lipstick: { id: "lipstick", name: "Lipstick", keywords: ["female", "girl", "fashion", "woman"], skins: [{ unified: "1f484", native: "\u{1F484}" }], version: 1 }, ring: { id: "ring", name: "Ring", keywords: ["wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem", "engagement"], skins: [{ unified: "1f48d", native: "\u{1F48D}" }], version: 1 }, gem: { id: "gem", name: "Gem Stone", keywords: ["blue", "ruby", "diamond", "jewelry"], skins: [{ unified: "1f48e", native: "\u{1F48E}" }], version: 1 }, mute: { id: "mute", name: "Muted Speaker", keywords: ["mute", "sound", "volume", "silence", "quiet"], skins: [{ unified: "1f507", native: "\u{1F507}" }], version: 1 }, speaker: { id: "speaker", name: "Speaker", keywords: ["low", "volume", "sound", "silence", "broadcast"], skins: [{ unified: "1f508", native: "\u{1F508}" }], version: 1 }, sound: { id: "sound", name: "Speaker Medium Volume", keywords: ["sound", "broadcast"], skins: [{ unified: "1f509", native: "\u{1F509}" }], version: 1 }, loud_sound: { id: "loud_sound", name: "Speaker High Volume", keywords: ["loud", "sound", "noise", "noisy", "broadcast"], skins: [{ unified: "1f50a", native: "\u{1F50A}" }], version: 1 }, loudspeaker: { id: "loudspeaker", name: "Loudspeaker", keywords: ["volume", "sound"], skins: [{ unified: "1f4e2", native: "\u{1F4E2}" }], version: 1 }, mega: { id: "mega", name: "Megaphone", keywords: ["mega", "sound", "speaker", "volume"], skins: [{ unified: "1f4e3", native: "\u{1F4E3}" }], version: 1 }, postal_horn: { id: "postal_horn", name: "Postal Horn", keywords: ["instrument", "music"], skins: [{ unified: "1f4ef", native: "\u{1F4EF}" }], version: 1 }, bell: { id: "bell", name: "Bell", keywords: ["sound", "notification", "christmas", "xmas", "chime"], skins: [{ unified: "1f514", native: "\u{1F514}" }], version: 1 }, no_bell: { id: "no_bell", name: "Bell with Slash", keywords: ["no", "sound", "volume", "mute", "quiet", "silent"], skins: [{ unified: "1f515", native: "\u{1F515}" }], version: 1 }, musical_score: { id: "musical_score", name: "Musical Score", keywords: ["treble", "clef", "compose"], skins: [{ unified: "1f3bc", native: "\u{1F3BC}" }], version: 1 }, musical_note: { id: "musical_note", name: "Musical Note", keywords: ["score", "tone", "sound"], skins: [{ unified: "1f3b5", native: "\u{1F3B5}" }], version: 1 }, notes: { id: "notes", name: "Musical Notes", keywords: ["music", "score"], skins: [{ unified: "1f3b6", native: "\u{1F3B6}" }], version: 1 }, studio_microphone: { id: "studio_microphone", name: "Studio Microphone", keywords: ["sing", "recording", "artist", "talkshow"], skins: [{ unified: "1f399-fe0f", native: "\u{1F399}\uFE0F" }], version: 1 }, level_slider: { id: "level_slider", name: "Level Slider", keywords: ["scale"], skins: [{ unified: "1f39a-fe0f", native: "\u{1F39A}\uFE0F" }], version: 1 }, control_knobs: { id: "control_knobs", name: "Control Knobs", keywords: ["dial"], skins: [{ unified: "1f39b-fe0f", native: "\u{1F39B}\uFE0F" }], version: 1 }, microphone: { id: "microphone", name: "Microphone", keywords: ["sound", "music", "PA", "sing", "talkshow"], skins: [{ unified: "1f3a4", native: "\u{1F3A4}" }], version: 1 }, headphones: { id: "headphones", name: "Headphone", keywords: ["headphones", "music", "score", "gadgets"], skins: [{ unified: "1f3a7", native: "\u{1F3A7}" }], version: 1 }, radio: { id: "radio", name: "Radio", keywords: ["communication", "music", "podcast", "program"], skins: [{ unified: "1f4fb", native: "\u{1F4FB}" }], version: 1 }, saxophone: { id: "saxophone", name: "Saxophone", keywords: ["music", "instrument", "jazz", "blues"], skins: [{ unified: "1f3b7", native: "\u{1F3B7}" }], version: 1 }, accordion: { id: "accordion", name: "Accordion", keywords: ["music"], skins: [{ unified: "1fa97", native: "\u{1FA97}" }], version: 13 }, guitar: { id: "guitar", name: "Guitar", keywords: ["music", "instrument"], skins: [{ unified: "1f3b8", native: "\u{1F3B8}" }], version: 1 }, musical_keyboard: { id: "musical_keyboard", name: "Musical Keyboard", keywords: ["piano", "instrument", "compose"], skins: [{ unified: "1f3b9", native: "\u{1F3B9}" }], version: 1 }, trumpet: { id: "trumpet", name: "Trumpet", keywords: ["music", "brass"], skins: [{ unified: "1f3ba", native: "\u{1F3BA}" }], version: 1 }, violin: { id: "violin", name: "Violin", keywords: ["music", "instrument", "orchestra", "symphony"], skins: [{ unified: "1f3bb", native: "\u{1F3BB}" }], version: 1 }, banjo: { id: "banjo", name: "Banjo", keywords: ["music", "instructment"], skins: [{ unified: "1fa95", native: "\u{1FA95}" }], version: 12 }, drum_with_drumsticks: { id: "drum_with_drumsticks", name: "Drum", keywords: ["with", "drumsticks", "music", "instrument", "snare"], skins: [{ unified: "1f941", native: "\u{1F941}" }], version: 3 }, long_drum: { id: "long_drum", name: "Long Drum", keywords: ["music"], skins: [{ unified: "1fa98", native: "\u{1FA98}" }], version: 13 }, maracas: { id: "maracas", name: "Maracas", keywords: ["music", "instrument", "percussion"], skins: [{ unified: "1fa87", native: "\u{1FA87}" }], version: 15 }, flute: { id: "flute", name: "Flute", keywords: ["bamboo", "music", "instrument", "pied", "piper"], skins: [{ unified: "1fa88", native: "\u{1FA88}" }], version: 15 }, iphone: { id: "iphone", name: "Mobile Phone", keywords: ["iphone", "technology", "apple", "gadgets", "dial"], skins: [{ unified: "1f4f1", native: "\u{1F4F1}" }], version: 1 }, calling: { id: "calling", name: "Mobile Phone with Arrow", keywords: ["calling", "iphone", "incoming"], skins: [{ unified: "1f4f2", native: "\u{1F4F2}" }], version: 1 }, phone: { id: "phone", name: "Telephone", keywords: ["phone", "technology", "communication", "dial"], skins: [{ unified: "260e-fe0f", native: "\u260E\uFE0F" }], version: 1 }, telephone_receiver: { id: "telephone_receiver", name: "Telephone Receiver", keywords: ["technology", "communication", "dial"], skins: [{ unified: "1f4de", native: "\u{1F4DE}" }], version: 1 }, pager: { id: "pager", name: "Pager", keywords: ["bbcall", "oldschool", "90s"], skins: [{ unified: "1f4df", native: "\u{1F4DF}" }], version: 1 }, fax: { id: "fax", name: "Fax Machine", keywords: ["communication", "technology"], skins: [{ unified: "1f4e0", native: "\u{1F4E0}" }], version: 1 }, battery: { id: "battery", name: "Battery", keywords: ["power", "energy", "sustain"], skins: [{ unified: "1f50b", native: "\u{1F50B}" }], version: 1 }, low_battery: { id: "low_battery", name: "Low Battery", keywords: ["drained", "dead"], skins: [{ unified: "1faab", native: "\u{1FAAB}" }], version: 14 }, electric_plug: { id: "electric_plug", name: "Electric Plug", keywords: ["charger", "power"], skins: [{ unified: "1f50c", native: "\u{1F50C}" }], version: 1 }, computer: { id: "computer", name: "Laptop", keywords: ["computer", "technology", "screen", "display", "monitor"], skins: [{ unified: "1f4bb", native: "\u{1F4BB}" }], version: 1 }, desktop_computer: { id: "desktop_computer", name: "Desktop Computer", keywords: ["technology", "computing", "screen"], skins: [{ unified: "1f5a5-fe0f", native: "\u{1F5A5}\uFE0F" }], version: 1 }, printer: { id: "printer", name: "Printer", keywords: ["paper", "ink"], skins: [{ unified: "1f5a8-fe0f", native: "\u{1F5A8}\uFE0F" }], version: 1 }, keyboard: { id: "keyboard", name: "Keyboard", keywords: ["technology", "computer", "type", "input", "text"], skins: [{ unified: "2328-fe0f", native: "\u2328\uFE0F" }], version: 1 }, three_button_mouse: { id: "three_button_mouse", name: "Computer Mouse", keywords: ["three", "button", "click"], skins: [{ unified: "1f5b1-fe0f", native: "\u{1F5B1}\uFE0F" }], version: 1 }, trackball: { id: "trackball", name: "Trackball", keywords: ["technology", "trackpad"], skins: [{ unified: "1f5b2-fe0f", native: "\u{1F5B2}\uFE0F" }], version: 1 }, minidisc: { id: "minidisc", name: "Minidisc", keywords: ["computer", "disk", "technology", "record", "data", "90s"], skins: [{ unified: "1f4bd", native: "\u{1F4BD}" }], version: 1 }, floppy_disk: { id: "floppy_disk", name: "Floppy Disk", keywords: ["oldschool", "technology", "save", "90s", "80s"], skins: [{ unified: "1f4be", native: "\u{1F4BE}" }], version: 1 }, cd: { id: "cd", name: "Optical Disc", keywords: ["cd", "disk", "technology", "dvd", "90s"], skins: [{ unified: "1f4bf", native: "\u{1F4BF}" }], version: 1 }, dvd: { id: "dvd", name: "Dvd", keywords: ["cd", "disk", "disc"], skins: [{ unified: "1f4c0", native: "\u{1F4C0}" }], version: 1 }, abacus: { id: "abacus", name: "Abacus", keywords: ["calculation"], skins: [{ unified: "1f9ee", native: "\u{1F9EE}" }], version: 11 }, movie_camera: { id: "movie_camera", name: "Movie Camera", keywords: ["film", "record"], skins: [{ unified: "1f3a5", native: "\u{1F3A5}" }], version: 1 }, film_frames: { id: "film_frames", name: "Film Frames", keywords: ["movie"], skins: [{ unified: "1f39e-fe0f", native: "\u{1F39E}\uFE0F" }], version: 1 }, film_projector: { id: "film_projector", name: "Film Projector", keywords: ["video", "tape", "record", "movie"], skins: [{ unified: "1f4fd-fe0f", native: "\u{1F4FD}\uFE0F" }], version: 1 }, clapper: { id: "clapper", name: "Clapper Board", keywords: ["movie", "film", "record"], skins: [{ unified: "1f3ac", native: "\u{1F3AC}" }], version: 1 }, tv: { id: "tv", name: "Television", keywords: ["tv", "technology", "program", "oldschool", "show"], skins: [{ unified: "1f4fa", native: "\u{1F4FA}" }], version: 1 }, camera: { id: "camera", name: "Camera", keywords: ["gadgets", "photography"], skins: [{ unified: "1f4f7", native: "\u{1F4F7}" }], version: 1 }, camera_with_flash: { id: "camera_with_flash", name: "Camera with Flash", keywords: ["photography", "gadgets"], skins: [{ unified: "1f4f8", native: "\u{1F4F8}" }], version: 1 }, video_camera: { id: "video_camera", name: "Video Camera", keywords: ["film", "record"], skins: [{ unified: "1f4f9", native: "\u{1F4F9}" }], version: 1 }, vhs: { id: "vhs", name: "Videocassette", keywords: ["vhs", "record", "video", "oldschool", "90s", "80s"], skins: [{ unified: "1f4fc", native: "\u{1F4FC}" }], version: 1 }, mag: { id: "mag", name: "Magnifying Glass Tilted Left", keywords: ["mag", "search", "zoom", "find", "detective"], skins: [{ unified: "1f50d", native: "\u{1F50D}" }], version: 1 }, mag_right: { id: "mag_right", name: "Magnifying Glass Tilted Right", keywords: ["mag", "search", "zoom", "find", "detective"], skins: [{ unified: "1f50e", native: "\u{1F50E}" }], version: 1 }, candle: { id: "candle", name: "Candle", keywords: ["fire", "wax"], skins: [{ unified: "1f56f-fe0f", native: "\u{1F56F}\uFE0F" }], version: 1 }, bulb: { id: "bulb", name: "Light Bulb", keywords: ["electricity", "idea"], skins: [{ unified: "1f4a1", native: "\u{1F4A1}" }], version: 1 }, flashlight: { id: "flashlight", name: "Flashlight", keywords: ["dark", "camping", "sight", "night"], skins: [{ unified: "1f526", native: "\u{1F526}" }], version: 1 }, izakaya_lantern: { id: "izakaya_lantern", name: "Izakaya Lantern", keywords: ["red", "paper", "light", "halloween", "spooky"], skins: [{ unified: "1f3ee", native: "\u{1F3EE}" }], version: 1 }, diya_lamp: { id: "diya_lamp", name: "Diya Lamp", keywords: ["lighting"], skins: [{ unified: "1fa94", native: "\u{1FA94}" }], version: 12 }, notebook_with_decorative_cover: { id: "notebook_with_decorative_cover", name: "Notebook with Decorative Cover", keywords: ["classroom", "notes", "record", "paper", "study"], skins: [{ unified: "1f4d4", native: "\u{1F4D4}" }], version: 1 }, closed_book: { id: "closed_book", name: "Closed Book", keywords: ["read", "library", "knowledge", "textbook", "learn"], skins: [{ unified: "1f4d5", native: "\u{1F4D5}" }], version: 1 }, book: { id: "book", name: "Open Book", keywords: ["read", "library", "knowledge", "literature", "learn", "study"], skins: [{ unified: "1f4d6", native: "\u{1F4D6}" }], version: 1 }, green_book: { id: "green_book", name: "Green Book", keywords: ["read", "library", "knowledge", "study"], skins: [{ unified: "1f4d7", native: "\u{1F4D7}" }], version: 1 }, blue_book: { id: "blue_book", name: "Blue Book", keywords: ["read", "library", "knowledge", "learn", "study"], skins: [{ unified: "1f4d8", native: "\u{1F4D8}" }], version: 1 }, orange_book: { id: "orange_book", name: "Orange Book", keywords: ["read", "library", "knowledge", "textbook", "study"], skins: [{ unified: "1f4d9", native: "\u{1F4D9}" }], version: 1 }, books: { id: "books", name: "Books", keywords: ["literature", "library", "study"], skins: [{ unified: "1f4da", native: "\u{1F4DA}" }], version: 1 }, notebook: { id: "notebook", name: "Notebook", keywords: ["stationery", "record", "notes", "paper", "study"], skins: [{ unified: "1f4d3", native: "\u{1F4D3}" }], version: 1 }, ledger: { id: "ledger", name: "Ledger", keywords: ["notes", "paper"], skins: [{ unified: "1f4d2", native: "\u{1F4D2}" }], version: 1 }, page_with_curl: { id: "page_with_curl", name: "Page with Curl", keywords: ["documents", "office", "paper"], skins: [{ unified: "1f4c3", native: "\u{1F4C3}" }], version: 1 }, scroll: { id: "scroll", name: "Scroll", keywords: ["documents", "ancient", "history", "paper"], skins: [{ unified: "1f4dc", native: "\u{1F4DC}" }], version: 1 }, page_facing_up: { id: "page_facing_up", name: "Page Facing Up", keywords: ["documents", "office", "paper", "information"], skins: [{ unified: "1f4c4", native: "\u{1F4C4}" }], version: 1 }, newspaper: { id: "newspaper", name: "Newspaper", keywords: ["press", "headline"], skins: [{ unified: "1f4f0", native: "\u{1F4F0}" }], version: 1 }, rolled_up_newspaper: { id: "rolled_up_newspaper", name: "Rolled-Up Newspaper", keywords: ["rolled", "up", "press", "headline"], skins: [{ unified: "1f5de-fe0f", native: "\u{1F5DE}\uFE0F" }], version: 1 }, bookmark_tabs: { id: "bookmark_tabs", name: "Bookmark Tabs", keywords: ["favorite", "save", "order", "tidy"], skins: [{ unified: "1f4d1", native: "\u{1F4D1}" }], version: 1 }, bookmark: { id: "bookmark", name: "Bookmark", keywords: ["favorite", "label", "save"], skins: [{ unified: "1f516", native: "\u{1F516}" }], version: 1 }, label: { id: "label", name: "Label", keywords: ["sale", "tag"], skins: [{ unified: "1f3f7-fe0f", native: "\u{1F3F7}\uFE0F" }], version: 1 }, moneybag: { id: "moneybag", name: "Money Bag", keywords: ["moneybag", "dollar", "payment", "coins", "sale"], skins: [{ unified: "1f4b0", native: "\u{1F4B0}" }], version: 1 }, coin: { id: "coin", name: "Coin", keywords: ["money", "currency"], skins: [{ unified: "1fa99", native: "\u{1FA99}" }], version: 13 }, yen: { id: "yen", name: "Yen Banknote", keywords: ["money", "sales", "japanese", "dollar", "currency"], skins: [{ unified: "1f4b4", native: "\u{1F4B4}" }], version: 1 }, dollar: { id: "dollar", name: "Dollar Banknote", keywords: ["money", "sales", "bill", "currency"], skins: [{ unified: "1f4b5", native: "\u{1F4B5}" }], version: 1 }, euro: { id: "euro", name: "Euro Banknote", keywords: ["money", "sales", "dollar", "currency"], skins: [{ unified: "1f4b6", native: "\u{1F4B6}" }], version: 1 }, pound: { id: "pound", name: "Pound Banknote", keywords: ["british", "sterling", "money", "sales", "bills", "uk", "england", "currency"], skins: [{ unified: "1f4b7", native: "\u{1F4B7}" }], version: 1 }, money_with_wings: { id: "money_with_wings", name: "Money with Wings", keywords: ["dollar", "bills", "payment", "sale"], skins: [{ unified: "1f4b8", native: "\u{1F4B8}" }], version: 1 }, credit_card: { id: "credit_card", name: "Credit Card", keywords: ["money", "sales", "dollar", "bill", "payment", "shopping"], skins: [{ unified: "1f4b3", native: "\u{1F4B3}" }], version: 1 }, receipt: { id: "receipt", name: "Receipt", keywords: ["accounting", "expenses"], skins: [{ unified: "1f9fe", native: "\u{1F9FE}" }], version: 11 }, chart: { id: "chart", name: "Chart Increasing with Yen", keywords: ["green", "square", "graph", "presentation", "stats"], skins: [{ unified: "1f4b9", native: "\u{1F4B9}" }], version: 1 }, email: { id: "email", name: "Envelope", keywords: ["email", "letter", "postal", "inbox", "communication"], skins: [{ unified: "2709-fe0f", native: "\u2709\uFE0F" }], version: 1 }, "e-mail": { id: "e-mail", name: "E-Mail", keywords: ["e", "mail", "communication", "inbox"], skins: [{ unified: "1f4e7", native: "\u{1F4E7}" }], version: 1 }, incoming_envelope: { id: "incoming_envelope", name: "Incoming Envelope", keywords: ["email", "inbox"], skins: [{ unified: "1f4e8", native: "\u{1F4E8}" }], version: 1 }, envelope_with_arrow: { id: "envelope_with_arrow", name: "Envelope with Arrow", keywords: ["email", "communication"], skins: [{ unified: "1f4e9", native: "\u{1F4E9}" }], version: 1 }, outbox_tray: { id: "outbox_tray", name: "Outbox Tray", keywords: ["inbox", "email"], skins: [{ unified: "1f4e4", native: "\u{1F4E4}" }], version: 1 }, inbox_tray: { id: "inbox_tray", name: "Inbox Tray", keywords: ["email", "documents"], skins: [{ unified: "1f4e5", native: "\u{1F4E5}" }], version: 1 }, package: { id: "package", name: "Package", keywords: ["mail", "gift", "cardboard", "box", "moving"], skins: [{ unified: "1f4e6", native: "\u{1F4E6}" }], version: 1 }, mailbox: { id: "mailbox", name: "Closed Mailbox with Raised Flag", keywords: ["email", "inbox", "communication"], skins: [{ unified: "1f4eb", native: "\u{1F4EB}" }], version: 1 }, mailbox_closed: { id: "mailbox_closed", name: "Closed Mailbox with Lowered Flag", keywords: ["email", "communication", "inbox"], skins: [{ unified: "1f4ea", native: "\u{1F4EA}" }], version: 1 }, mailbox_with_mail: { id: "mailbox_with_mail", name: "Open Mailbox with Raised Flag", keywords: ["mail", "email", "inbox", "communication"], skins: [{ unified: "1f4ec", native: "\u{1F4EC}" }], version: 1 }, mailbox_with_no_mail: { id: "mailbox_with_no_mail", name: "Open Mailbox with Lowered Flag", keywords: ["no", "mail", "email", "inbox"], skins: [{ unified: "1f4ed", native: "\u{1F4ED}" }], version: 1 }, postbox: { id: "postbox", name: "Postbox", keywords: ["email", "letter", "envelope"], skins: [{ unified: "1f4ee", native: "\u{1F4EE}" }], version: 1 }, ballot_box_with_ballot: { id: "ballot_box_with_ballot", name: "Ballot Box with Ballot", keywords: ["election", "vote"], skins: [{ unified: "1f5f3-fe0f", native: "\u{1F5F3}\uFE0F" }], version: 1 }, pencil2: { id: "pencil2", name: "Pencil", keywords: ["pencil2", "stationery", "write", "paper", "writing", "school", "study"], skins: [{ unified: "270f-fe0f", native: "\u270F\uFE0F" }], version: 1 }, black_nib: { id: "black_nib", name: "Black Nib", keywords: ["pen", "stationery", "writing", "write"], skins: [{ unified: "2712-fe0f", native: "\u2712\uFE0F" }], version: 1 }, lower_left_fountain_pen: { id: "lower_left_fountain_pen", name: "Fountain Pen", keywords: ["lower", "left", "stationery", "writing", "write"], skins: [{ unified: "1f58b-fe0f", native: "\u{1F58B}\uFE0F" }], version: 1 }, lower_left_ballpoint_pen: { id: "lower_left_ballpoint_pen", name: "Pen", keywords: ["lower", "left", "ballpoint", "stationery", "writing", "write"], skins: [{ unified: "1f58a-fe0f", native: "\u{1F58A}\uFE0F" }], version: 1 }, lower_left_paintbrush: { id: "lower_left_paintbrush", name: "Paintbrush", keywords: ["lower", "left", "drawing", "creativity", "art"], skins: [{ unified: "1f58c-fe0f", native: "\u{1F58C}\uFE0F" }], version: 1 }, lower_left_crayon: { id: "lower_left_crayon", name: "Crayon", keywords: ["lower", "left", "drawing", "creativity"], skins: [{ unified: "1f58d-fe0f", native: "\u{1F58D}\uFE0F" }], version: 1 }, memo: { id: "memo", name: "Memo", keywords: ["pencil", "write", "documents", "stationery", "paper", "writing", "legal", "exam", "quiz", "test", "study", "compose"], skins: [{ unified: "1f4dd", native: "\u{1F4DD}" }], version: 1 }, briefcase: { id: "briefcase", name: "Briefcase", keywords: ["business", "documents", "work", "law", "legal", "job", "career"], skins: [{ unified: "1f4bc", native: "\u{1F4BC}" }], version: 1 }, file_folder: { id: "file_folder", name: "File Folder", keywords: ["documents", "business", "office"], skins: [{ unified: "1f4c1", native: "\u{1F4C1}" }], version: 1 }, open_file_folder: { id: "open_file_folder", name: "Open File Folder", keywords: ["documents", "load"], skins: [{ unified: "1f4c2", native: "\u{1F4C2}" }], version: 1 }, card_index_dividers: { id: "card_index_dividers", name: "Card Index Dividers", keywords: ["organizing", "business", "stationery"], skins: [{ unified: "1f5c2-fe0f", native: "\u{1F5C2}\uFE0F" }], version: 1 }, date: { id: "date", name: "Calendar", keywords: ["date", "schedule"], skins: [{ unified: "1f4c5", native: "\u{1F4C5}" }], version: 1 }, calendar: { id: "calendar", name: "Tear-off Calendar", keywords: ["tear", "off", "schedule", "date", "planning"], skins: [{ unified: "1f4c6", native: "\u{1F4C6}" }], version: 1 }, spiral_note_pad: { id: "spiral_note_pad", name: "Spiral Notepad", keywords: ["note", "pad", "memo", "stationery"], skins: [{ unified: "1f5d2-fe0f", native: "\u{1F5D2}\uFE0F" }], version: 1 }, spiral_calendar_pad: { id: "spiral_calendar_pad", name: "Spiral Calendar", keywords: ["pad", "date", "schedule", "planning"], skins: [{ unified: "1f5d3-fe0f", native: "\u{1F5D3}\uFE0F" }], version: 1 }, card_index: { id: "card_index", name: "Card Index", keywords: ["business", "stationery"], skins: [{ unified: "1f4c7", native: "\u{1F4C7}" }], version: 1 }, chart_with_upwards_trend: { id: "chart_with_upwards_trend", name: "Chart Increasing", keywords: ["with", "upwards", "trend", "graph", "presentation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success"], skins: [{ unified: "1f4c8", native: "\u{1F4C8}" }], version: 1 }, chart_with_downwards_trend: { id: "chart_with_downwards_trend", name: "Chart Decreasing", keywords: ["with", "downwards", "trend", "graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure"], skins: [{ unified: "1f4c9", native: "\u{1F4C9}" }], version: 1 }, bar_chart: { id: "bar_chart", name: "Bar Chart", keywords: ["graph", "presentation", "stats"], skins: [{ unified: "1f4ca", native: "\u{1F4CA}" }], version: 1 }, clipboard: { id: "clipboard", name: "Clipboard", keywords: ["stationery", "documents"], skins: [{ unified: "1f4cb", native: "\u{1F4CB}" }], version: 1 }, pushpin: { id: "pushpin", name: "Pushpin", keywords: ["stationery", "mark", "here"], skins: [{ unified: "1f4cc", native: "\u{1F4CC}" }], version: 1 }, round_pushpin: { id: "round_pushpin", name: "Round Pushpin", keywords: ["stationery", "location", "map", "here"], skins: [{ unified: "1f4cd", native: "\u{1F4CD}" }], version: 1 }, paperclip: { id: "paperclip", name: "Paperclip", keywords: ["documents", "stationery"], skins: [{ unified: "1f4ce", native: "\u{1F4CE}" }], version: 1 }, linked_paperclips: { id: "linked_paperclips", name: "Linked Paperclips", keywords: ["documents", "stationery"], skins: [{ unified: "1f587-fe0f", native: "\u{1F587}\uFE0F" }], version: 1 }, straight_ruler: { id: "straight_ruler", name: "Straight Ruler", keywords: ["stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch"], skins: [{ unified: "1f4cf", native: "\u{1F4CF}" }], version: 1 }, triangular_ruler: { id: "triangular_ruler", name: "Triangular Ruler", keywords: ["stationery", "math", "architect", "sketch"], skins: [{ unified: "1f4d0", native: "\u{1F4D0}" }], version: 1 }, scissors: { id: "scissors", name: "Scissors", keywords: ["stationery", "cut"], skins: [{ unified: "2702-fe0f", native: "\u2702\uFE0F" }], version: 1 }, card_file_box: { id: "card_file_box", name: "Card File Box", keywords: ["business", "stationery"], skins: [{ unified: "1f5c3-fe0f", native: "\u{1F5C3}\uFE0F" }], version: 1 }, file_cabinet: { id: "file_cabinet", name: "File Cabinet", keywords: ["filing", "organizing"], skins: [{ unified: "1f5c4-fe0f", native: "\u{1F5C4}\uFE0F" }], version: 1 }, wastebasket: { id: "wastebasket", name: "Wastebasket", keywords: ["bin", "trash", "rubbish", "garbage", "toss"], skins: [{ unified: "1f5d1-fe0f", native: "\u{1F5D1}\uFE0F" }], version: 1 }, lock: { id: "lock", name: "Lock", keywords: ["locked", "security", "password", "padlock"], skins: [{ unified: "1f512", native: "\u{1F512}" }], version: 1 }, unlock: { id: "unlock", name: "Unlocked", keywords: ["unlock", "privacy", "security"], skins: [{ unified: "1f513", native: "\u{1F513}" }], version: 1 }, lock_with_ink_pen: { id: "lock_with_ink_pen", name: "Locked with Pen", keywords: ["lock", "ink", "security", "secret"], skins: [{ unified: "1f50f", native: "\u{1F50F}" }], version: 1 }, closed_lock_with_key: { id: "closed_lock_with_key", name: "Locked with Key", keywords: ["closed", "lock", "security", "privacy"], skins: [{ unified: "1f510", native: "\u{1F510}" }], version: 1 }, key: { id: "key", name: "Key", keywords: ["lock", "door", "password"], skins: [{ unified: "1f511", native: "\u{1F511}" }], version: 1 }, old_key: { id: "old_key", name: "Old Key", keywords: ["lock", "door", "password"], skins: [{ unified: "1f5dd-fe0f", native: "\u{1F5DD}\uFE0F" }], version: 1 }, hammer: { id: "hammer", name: "Hammer", keywords: ["tools", "build", "create"], skins: [{ unified: "1f528", native: "\u{1F528}" }], version: 1 }, axe: { id: "axe", name: "Axe", keywords: ["tool", "chop", "cut"], skins: [{ unified: "1fa93", native: "\u{1FA93}" }], version: 12 }, pick: { id: "pick", name: "Pick", keywords: ["tools", "dig"], skins: [{ unified: "26cf-fe0f", native: "\u26CF\uFE0F" }], version: 1 }, hammer_and_pick: { id: "hammer_and_pick", name: "Hammer and Pick", keywords: ["tools", "build", "create"], skins: [{ unified: "2692-fe0f", native: "\u2692\uFE0F" }], version: 1 }, hammer_and_wrench: { id: "hammer_and_wrench", name: "Hammer and Wrench", keywords: ["tools", "build", "create"], skins: [{ unified: "1f6e0-fe0f", native: "\u{1F6E0}\uFE0F" }], version: 1 }, dagger_knife: { id: "dagger_knife", name: "Dagger", keywords: ["knife", "weapon"], skins: [{ unified: "1f5e1-fe0f", native: "\u{1F5E1}\uFE0F" }], version: 1 }, crossed_swords: { id: "crossed_swords", name: "Crossed Swords", keywords: ["weapon"], skins: [{ unified: "2694-fe0f", native: "\u2694\uFE0F" }], version: 1 }, bomb: { id: "bomb", name: "Bomb", keywords: ["boom", "explode", "explosion", "terrorism"], skins: [{ unified: "1f4a3", native: "\u{1F4A3}" }], version: 1 }, boomerang: { id: "boomerang", name: "Boomerang", keywords: ["weapon"], skins: [{ unified: "1fa83", native: "\u{1FA83}" }], version: 13 }, bow_and_arrow: { id: "bow_and_arrow", name: "Bow and Arrow", keywords: ["sports"], skins: [{ unified: "1f3f9", native: "\u{1F3F9}" }], version: 1 }, shield: { id: "shield", name: "Shield", keywords: ["protection", "security"], skins: [{ unified: "1f6e1-fe0f", native: "\u{1F6E1}\uFE0F" }], version: 1 }, carpentry_saw: { id: "carpentry_saw", name: "Carpentry Saw", keywords: ["cut", "chop"], skins: [{ unified: "1fa9a", native: "\u{1FA9A}" }], version: 13 }, wrench: { id: "wrench", name: "Wrench", keywords: ["tools", "diy", "ikea", "fix", "maintainer"], skins: [{ unified: "1f527", native: "\u{1F527}" }], version: 1 }, screwdriver: { id: "screwdriver", name: "Screwdriver", keywords: ["tools"], skins: [{ unified: "1fa9b", native: "\u{1FA9B}" }], version: 13 }, nut_and_bolt: { id: "nut_and_bolt", name: "Nut and Bolt", keywords: ["handy", "tools", "fix"], skins: [{ unified: "1f529", native: "\u{1F529}" }], version: 1 }, gear: { id: "gear", name: "Gear", keywords: ["cog"], skins: [{ unified: "2699-fe0f", native: "\u2699\uFE0F" }], version: 1 }, compression: { id: "compression", name: "Clamp", keywords: ["compression", "tool"], skins: [{ unified: "1f5dc-fe0f", native: "\u{1F5DC}\uFE0F" }], version: 1 }, scales: { id: "scales", name: "Balance Scale", keywords: ["scales", "law", "fairness", "weight"], skins: [{ unified: "2696-fe0f", native: "\u2696\uFE0F" }], version: 1 }, probing_cane: { id: "probing_cane", name: "White Cane", keywords: ["probing", "accessibility"], skins: [{ unified: "1f9af", native: "\u{1F9AF}" }], version: 12 }, link: { id: "link", name: "Link", keywords: ["rings", "url"], skins: [{ unified: "1f517", native: "\u{1F517}" }], version: 1 }, chains: { id: "chains", name: "Chains", keywords: ["lock", "arrest"], skins: [{ unified: "26d3-fe0f", native: "\u26D3\uFE0F" }], version: 1 }, hook: { id: "hook", name: "Hook", keywords: ["tools"], skins: [{ unified: "1fa9d", native: "\u{1FA9D}" }], version: 13 }, toolbox: { id: "toolbox", name: "Toolbox", keywords: ["tools", "diy", "fix", "maintainer", "mechanic"], skins: [{ unified: "1f9f0", native: "\u{1F9F0}" }], version: 11 }, magnet: { id: "magnet", name: "Magnet", keywords: ["attraction", "magnetic"], skins: [{ unified: "1f9f2", native: "\u{1F9F2}" }], version: 11 }, ladder: { id: "ladder", name: "Ladder", keywords: ["tools"], skins: [{ unified: "1fa9c", native: "\u{1FA9C}" }], version: 13 }, alembic: { id: "alembic", name: "Alembic", keywords: ["distilling", "science", "experiment", "chemistry"], skins: [{ unified: "2697-fe0f", native: "\u2697\uFE0F" }], version: 1 }, test_tube: { id: "test_tube", name: "Test Tube", keywords: ["chemistry", "experiment", "lab", "science"], skins: [{ unified: "1f9ea", native: "\u{1F9EA}" }], version: 11 }, petri_dish: { id: "petri_dish", name: "Petri Dish", keywords: ["bacteria", "biology", "culture", "lab"], skins: [{ unified: "1f9eb", native: "\u{1F9EB}" }], version: 11 }, dna: { id: "dna", name: "Dna", keywords: ["biologist", "genetics", "life"], skins: [{ unified: "1f9ec", native: "\u{1F9EC}" }], version: 11 }, microscope: { id: "microscope", name: "Microscope", keywords: ["laboratory", "experiment", "zoomin", "science", "study"], skins: [{ unified: "1f52c", native: "\u{1F52C}" }], version: 1 }, telescope: { id: "telescope", name: "Telescope", keywords: ["stars", "space", "zoom", "science", "astronomy"], skins: [{ unified: "1f52d", native: "\u{1F52D}" }], version: 1 }, satellite_antenna: { id: "satellite_antenna", name: "Satellite Antenna", keywords: ["communication", "future", "radio", "space"], skins: [{ unified: "1f4e1", native: "\u{1F4E1}" }], version: 1 }, syringe: { id: "syringe", name: "Syringe", keywords: ["health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse"], skins: [{ unified: "1f489", native: "\u{1F489}" }], version: 1 }, drop_of_blood: { id: "drop_of_blood", name: "Drop of Blood", keywords: ["period", "hurt", "harm", "wound"], skins: [{ unified: "1fa78", native: "\u{1FA78}" }], version: 12 }, pill: { id: "pill", name: "Pill", keywords: ["health", "medicine", "doctor", "pharmacy", "drug"], skins: [{ unified: "1f48a", native: "\u{1F48A}" }], version: 1 }, adhesive_bandage: { id: "adhesive_bandage", name: "Adhesive Bandage", keywords: ["heal"], skins: [{ unified: "1fa79", native: "\u{1FA79}" }], version: 12 }, crutch: { id: "crutch", name: "Crutch", keywords: ["accessibility", "assist"], skins: [{ unified: "1fa7c", native: "\u{1FA7C}" }], version: 14 }, stethoscope: { id: "stethoscope", name: "Stethoscope", keywords: ["health"], skins: [{ unified: "1fa7a", native: "\u{1FA7A}" }], version: 12 }, "x-ray": { id: "x-ray", name: "X-Ray", keywords: ["x", "ray", "skeleton", "medicine"], skins: [{ unified: "1fa7b", native: "\u{1FA7B}" }], version: 14 }, door: { id: "door", name: "Door", keywords: ["house", "entry", "exit"], skins: [{ unified: "1f6aa", native: "\u{1F6AA}" }], version: 1 }, elevator: { id: "elevator", name: "Elevator", keywords: ["lift"], skins: [{ unified: "1f6d7", native: "\u{1F6D7}" }], version: 13 }, mirror: { id: "mirror", name: "Mirror", keywords: ["reflection"], skins: [{ unified: "1fa9e", native: "\u{1FA9E}" }], version: 13 }, window: { id: "window", name: "Window", keywords: ["scenery"], skins: [{ unified: "1fa9f", native: "\u{1FA9F}" }], version: 13 }, bed: { id: "bed", name: "Bed", keywords: ["sleep", "rest"], skins: [{ unified: "1f6cf-fe0f", native: "\u{1F6CF}\uFE0F" }], version: 1 }, couch_and_lamp: { id: "couch_and_lamp", name: "Couch and Lamp", keywords: ["read", "chill"], skins: [{ unified: "1f6cb-fe0f", native: "\u{1F6CB}\uFE0F" }], version: 1 }, chair: { id: "chair", name: "Chair", keywords: ["sit", "furniture"], skins: [{ unified: "1fa91", native: "\u{1FA91}" }], version: 12 }, toilet: { id: "toilet", name: "Toilet", keywords: ["restroom", "wc", "washroom", "bathroom", "potty"], skins: [{ unified: "1f6bd", native: "\u{1F6BD}" }], version: 1 }, plunger: { id: "plunger", name: "Plunger", keywords: ["toilet"], skins: [{ unified: "1faa0", native: "\u{1FAA0}" }], version: 13 }, shower: { id: "shower", name: "Shower", keywords: ["clean", "water", "bathroom"], skins: [{ unified: "1f6bf", native: "\u{1F6BF}" }], version: 1 }, bathtub: { id: "bathtub", name: "Bathtub", keywords: ["clean", "shower", "bathroom"], skins: [{ unified: "1f6c1", native: "\u{1F6C1}" }], version: 1 }, mouse_trap: { id: "mouse_trap", name: "Mouse Trap", keywords: ["cheese"], skins: [{ unified: "1faa4", native: "\u{1FAA4}" }], version: 13 }, razor: { id: "razor", name: "Razor", keywords: ["cut"], skins: [{ unified: "1fa92", native: "\u{1FA92}" }], version: 12 }, lotion_bottle: { id: "lotion_bottle", name: "Lotion Bottle", keywords: ["moisturizer", "sunscreen"], skins: [{ unified: "1f9f4", native: "\u{1F9F4}" }], version: 11 }, safety_pin: { id: "safety_pin", name: "Safety Pin", keywords: ["diaper"], skins: [{ unified: "1f9f7", native: "\u{1F9F7}" }], version: 11 }, broom: { id: "broom", name: "Broom", keywords: ["cleaning", "sweeping", "witch"], skins: [{ unified: "1f9f9", native: "\u{1F9F9}" }], version: 11 }, basket: { id: "basket", name: "Basket", keywords: ["laundry"], skins: [{ unified: "1f9fa", native: "\u{1F9FA}" }], version: 11 }, roll_of_paper: { id: "roll_of_paper", name: "Roll of Paper", keywords: [], skins: [{ unified: "1f9fb", native: "\u{1F9FB}" }], version: 11 }, bucket: { id: "bucket", name: "Bucket", keywords: ["water", "container"], skins: [{ unified: "1faa3", native: "\u{1FAA3}" }], version: 13 }, soap: { id: "soap", name: "Soap", keywords: ["bar", "bathing", "cleaning", "lather"], skins: [{ unified: "1f9fc", native: "\u{1F9FC}" }], version: 11 }, bubbles: { id: "bubbles", name: "Bubbles", keywords: ["soap", "fun", "carbonation", "sparkling"], skins: [{ unified: "1fae7", native: "\u{1FAE7}" }], version: 14 }, toothbrush: { id: "toothbrush", name: "Toothbrush", keywords: ["hygiene", "dental"], skins: [{ unified: "1faa5", native: "\u{1FAA5}" }], version: 13 }, sponge: { id: "sponge", name: "Sponge", keywords: ["absorbing", "cleaning", "porous"], skins: [{ unified: "1f9fd", native: "\u{1F9FD}" }], version: 11 }, fire_extinguisher: { id: "fire_extinguisher", name: "Fire Extinguisher", keywords: ["quench"], skins: [{ unified: "1f9ef", native: "\u{1F9EF}" }], version: 11 }, shopping_trolley: { id: "shopping_trolley", name: "Shopping Cart", keywords: ["trolley"], skins: [{ unified: "1f6d2", native: "\u{1F6D2}" }], version: 3 }, smoking: { id: "smoking", name: "Cigarette", keywords: ["smoking", "kills", "tobacco", "joint", "smoke"], skins: [{ unified: "1f6ac", native: "\u{1F6AC}" }], version: 1 }, coffin: { id: "coffin", name: "Coffin", keywords: ["vampire", "dead", "die", "death", "rip", "graveyard", "cemetery", "casket", "funeral", "box"], skins: [{ unified: "26b0-fe0f", native: "\u26B0\uFE0F" }], version: 1 }, headstone: { id: "headstone", name: "Headstone", keywords: ["death", "rip", "grave"], skins: [{ unified: "1faa6", native: "\u{1FAA6}" }], version: 13 }, funeral_urn: { id: "funeral_urn", name: "Funeral Urn", keywords: ["dead", "die", "death", "rip", "ashes"], skins: [{ unified: "26b1-fe0f", native: "\u26B1\uFE0F" }], version: 1 }, nazar_amulet: { id: "nazar_amulet", name: "Nazar Amulet", keywords: ["bead", "charm"], skins: [{ unified: "1f9ff", native: "\u{1F9FF}" }], version: 11 }, hamsa: { id: "hamsa", name: "Hamsa", keywords: ["religion", "protection"], skins: [{ unified: "1faac", native: "\u{1FAAC}" }], version: 14 }, moyai: { id: "moyai", name: "Moai", keywords: ["moyai", "rock", "easter", "island"], skins: [{ unified: "1f5ff", native: "\u{1F5FF}" }], version: 1 }, placard: { id: "placard", name: "Placard", keywords: ["announcement"], skins: [{ unified: "1faa7", native: "\u{1FAA7}" }], version: 13 }, identification_card: { id: "identification_card", name: "Identification Card", keywords: ["document"], skins: [{ unified: "1faaa", native: "\u{1FAAA}" }], version: 14 }, atm: { id: "atm", name: "Atm Sign", keywords: ["money", "sales", "cash", "blue", "square", "payment", "bank"], skins: [{ unified: "1f3e7", native: "\u{1F3E7}" }], version: 1 }, put_litter_in_its_place: { id: "put_litter_in_its_place", name: "Litter in Bin Sign", keywords: ["put", "its", "place", "blue", "square", "human", "info"], skins: [{ unified: "1f6ae", native: "\u{1F6AE}" }], version: 1 }, potable_water: { id: "potable_water", name: "Potable Water", keywords: ["blue", "square", "liquid", "restroom", "cleaning", "faucet"], skins: [{ unified: "1f6b0", native: "\u{1F6B0}" }], version: 1 }, wheelchair: { id: "wheelchair", name: "Wheelchair Symbol", keywords: ["blue", "square", "disabled", "accessibility"], skins: [{ unified: "267f", native: "\u267F" }], version: 1 }, mens: { id: "mens", name: "Men\u2019s Room", keywords: ["mens", "men", "s", "toilet", "restroom", "wc", "blue", "square", "gender", "male"], skins: [{ unified: "1f6b9", native: "\u{1F6B9}" }], version: 1 }, womens: { id: "womens", name: "Women\u2019s Room", keywords: ["womens", "women", "s", "purple", "square", "woman", "female", "toilet", "loo", "restroom", "gender"], skins: [{ unified: "1f6ba", native: "\u{1F6BA}" }], version: 1 }, restroom: { id: "restroom", name: "Restroom", keywords: ["blue", "square", "toilet", "refresh", "wc", "gender"], skins: [{ unified: "1f6bb", native: "\u{1F6BB}" }], version: 1 }, baby_symbol: { id: "baby_symbol", name: "Baby Symbol", keywords: ["orange", "square", "child"], skins: [{ unified: "1f6bc", native: "\u{1F6BC}" }], version: 1 }, wc: { id: "wc", name: "Water Closet", keywords: ["wc", "toilet", "restroom", "blue", "square"], skins: [{ unified: "1f6be", native: "\u{1F6BE}" }], version: 1 }, passport_control: { id: "passport_control", name: "Passport Control", keywords: ["custom", "blue", "square"], skins: [{ unified: "1f6c2", native: "\u{1F6C2}" }], version: 1 }, customs: { id: "customs", name: "Customs", keywords: ["passport", "border", "blue", "square"], skins: [{ unified: "1f6c3", native: "\u{1F6C3}" }], version: 1 }, baggage_claim: { id: "baggage_claim", name: "Baggage Claim", keywords: ["blue", "square", "airport", "transport"], skins: [{ unified: "1f6c4", native: "\u{1F6C4}" }], version: 1 }, left_luggage: { id: "left_luggage", name: "Left Luggage", keywords: ["blue", "square", "travel"], skins: [{ unified: "1f6c5", native: "\u{1F6C5}" }], version: 1 }, warning: { id: "warning", name: "Warning", keywords: ["exclamation", "wip", "alert", "error", "problem", "issue"], skins: [{ unified: "26a0-fe0f", native: "\u26A0\uFE0F" }], version: 1 }, children_crossing: { id: "children_crossing", name: "Children Crossing", keywords: ["school", "warning", "danger", "sign", "driving", "yellow", "diamond"], skins: [{ unified: "1f6b8", native: "\u{1F6B8}" }], version: 1 }, no_entry: { id: "no_entry", name: "No Entry", keywords: ["limit", "security", "privacy", "bad", "denied", "stop", "circle"], skins: [{ unified: "26d4", native: "\u26D4" }], version: 1 }, no_entry_sign: { id: "no_entry_sign", name: "Prohibited", keywords: ["no", "entry", "sign", "forbid", "stop", "limit", "denied", "disallow", "circle"], skins: [{ unified: "1f6ab", native: "\u{1F6AB}" }], version: 1 }, no_bicycles: { id: "no_bicycles", name: "No Bicycles", keywords: ["cyclist", "prohibited", "circle"], skins: [{ unified: "1f6b3", native: "\u{1F6B3}" }], version: 1 }, no_smoking: { id: "no_smoking", name: "No Smoking", keywords: ["cigarette", "blue", "square", "smell", "smoke"], skins: [{ unified: "1f6ad", native: "\u{1F6AD}" }], version: 1 }, do_not_litter: { id: "do_not_litter", name: "No Littering", keywords: ["do", "not", "litter", "trash", "bin", "garbage", "circle"], skins: [{ unified: "1f6af", native: "\u{1F6AF}" }], version: 1 }, "non-potable_water": { id: "non-potable_water", name: "Non-Potable Water", keywords: ["non", "potable", "drink", "faucet", "tap", "circle"], skins: [{ unified: "1f6b1", native: "\u{1F6B1}" }], version: 1 }, no_pedestrians: { id: "no_pedestrians", name: "No Pedestrians", keywords: ["rules", "crossing", "walking", "circle"], skins: [{ unified: "1f6b7", native: "\u{1F6B7}" }], version: 1 }, no_mobile_phones: { id: "no_mobile_phones", name: "No Mobile Phones", keywords: ["iphone", "mute", "circle"], skins: [{ unified: "1f4f5", native: "\u{1F4F5}" }], version: 1 }, underage: { id: "underage", name: "No One Under Eighteen", keywords: ["underage", "18", "drink", "pub", "night", "minor", "circle"], skins: [{ unified: "1f51e", native: "\u{1F51E}" }], version: 1 }, radioactive_sign: { id: "radioactive_sign", name: "Radioactive", keywords: ["sign", "nuclear", "danger"], skins: [{ unified: "2622-fe0f", native: "\u2622\uFE0F" }], version: 1 }, biohazard_sign: { id: "biohazard_sign", name: "Biohazard", keywords: ["sign", "danger"], skins: [{ unified: "2623-fe0f", native: "\u2623\uFE0F" }], version: 1 }, arrow_up: { id: "arrow_up", name: "Up Arrow", keywords: ["blue", "square", "continue", "top", "direction"], skins: [{ unified: "2b06-fe0f", native: "\u2B06\uFE0F" }], version: 1 }, arrow_upper_right: { id: "arrow_upper_right", name: "Up-Right Arrow", keywords: ["upper", "right", "up", "blue", "square", "point", "direction", "diagonal", "northeast"], skins: [{ unified: "2197-fe0f", native: "\u2197\uFE0F" }], version: 1 }, arrow_right: { id: "arrow_right", name: "Right Arrow", keywords: ["blue", "square", "next"], skins: [{ unified: "27a1-fe0f", native: "\u27A1\uFE0F" }], version: 1 }, arrow_lower_right: { id: "arrow_lower_right", name: "South East Arrow", keywords: ["lower", "right", "down", "blue", "square", "direction", "diagonal", "southeast"], skins: [{ unified: "2198-fe0f", native: "\u2198\uFE0F" }], version: 1 }, arrow_down: { id: "arrow_down", name: "Down Arrow", keywords: ["blue", "square", "direction", "bottom"], skins: [{ unified: "2b07-fe0f", native: "\u2B07\uFE0F" }], version: 1 }, arrow_lower_left: { id: "arrow_lower_left", name: "Down-Left Arrow", keywords: ["lower", "left", "down", "blue", "square", "direction", "diagonal", "southwest"], skins: [{ unified: "2199-fe0f", native: "\u2199\uFE0F" }], version: 1 }, arrow_left: { id: "arrow_left", name: "Left Arrow", keywords: ["blue", "square", "previous", "back"], skins: [{ unified: "2b05-fe0f", native: "\u2B05\uFE0F" }], version: 1 }, arrow_upper_left: { id: "arrow_upper_left", name: "Up-Left Arrow", keywords: ["upper", "left", "up", "blue", "square", "point", "direction", "diagonal", "northwest"], skins: [{ unified: "2196-fe0f", native: "\u2196\uFE0F" }], version: 1 }, arrow_up_down: { id: "arrow_up_down", name: "Up Down Arrow", keywords: ["blue", "square", "direction", "way", "vertical"], skins: [{ unified: "2195-fe0f", native: "\u2195\uFE0F" }], version: 1 }, left_right_arrow: { id: "left_right_arrow", name: "Left Right Arrow", keywords: ["shape", "direction", "horizontal", "sideways"], skins: [{ unified: "2194-fe0f", native: "\u2194\uFE0F" }], version: 1 }, leftwards_arrow_with_hook: { id: "leftwards_arrow_with_hook", name: "Right Arrow Curving Left", keywords: ["leftwards", "with", "hook", "back", "return", "blue", "square", "undo", "enter"], skins: [{ unified: "21a9-fe0f", native: "\u21A9\uFE0F" }], version: 1 }, arrow_right_hook: { id: "arrow_right_hook", name: "Left Arrow Curving Right", keywords: ["hook", "blue", "square", "return", "rotate", "direction"], skins: [{ unified: "21aa-fe0f", native: "\u21AA\uFE0F" }], version: 1 }, arrow_heading_up: { id: "arrow_heading_up", name: "Right Arrow Curving Up", keywords: ["heading", "blue", "square", "direction", "top"], skins: [{ unified: "2934-fe0f", native: "\u2934\uFE0F" }], version: 1 }, arrow_heading_down: { id: "arrow_heading_down", name: "Right Arrow Curving Down", keywords: ["heading", "blue", "square", "direction", "bottom"], skins: [{ unified: "2935-fe0f", native: "\u2935\uFE0F" }], version: 1 }, arrows_clockwise: { id: "arrows_clockwise", name: "Clockwise Vertical Arrows", keywords: ["sync", "cycle", "round", "repeat"], skins: [{ unified: "1f503", native: "\u{1F503}" }], version: 1 }, arrows_counterclockwise: { id: "arrows_counterclockwise", name: "Counterclockwise Arrows Button", keywords: ["blue", "square", "sync", "cycle"], skins: [{ unified: "1f504", native: "\u{1F504}" }], version: 1 }, back: { id: "back", name: "Back Arrow", keywords: ["words", "return"], skins: [{ unified: "1f519", native: "\u{1F519}" }], version: 1 }, end: { id: "end", name: "End Arrow", keywords: ["words"], skins: [{ unified: "1f51a", native: "\u{1F51A}" }], version: 1 }, on: { id: "on", name: "On! Arrow", keywords: ["on", "words"], skins: [{ unified: "1f51b", native: "\u{1F51B}" }], version: 1 }, soon: { id: "soon", name: "Soon Arrow", keywords: ["words"], skins: [{ unified: "1f51c", native: "\u{1F51C}" }], version: 1 }, top: { id: "top", name: "Top Arrow", keywords: ["words", "blue", "square"], skins: [{ unified: "1f51d", native: "\u{1F51D}" }], version: 1 }, place_of_worship: { id: "place_of_worship", name: "Place of Worship", keywords: ["religion", "church", "temple", "prayer"], skins: [{ unified: "1f6d0", native: "\u{1F6D0}" }], version: 1 }, atom_symbol: { id: "atom_symbol", name: "Atom Symbol", keywords: ["science", "physics", "chemistry"], skins: [{ unified: "269b-fe0f", native: "\u269B\uFE0F" }], version: 1 }, om_symbol: { id: "om_symbol", name: "Om", keywords: ["symbol", "hinduism", "buddhism", "sikhism", "jainism"], skins: [{ unified: "1f549-fe0f", native: "\u{1F549}\uFE0F" }], version: 1 }, star_of_david: { id: "star_of_david", name: "Star of David", keywords: ["judaism"], skins: [{ unified: "2721-fe0f", native: "\u2721\uFE0F" }], version: 1 }, wheel_of_dharma: { id: "wheel_of_dharma", name: "Wheel of Dharma", keywords: ["hinduism", "buddhism", "sikhism", "jainism"], skins: [{ unified: "2638-fe0f", native: "\u2638\uFE0F" }], version: 1 }, yin_yang: { id: "yin_yang", name: "Yin Yang", keywords: ["balance"], skins: [{ unified: "262f-fe0f", native: "\u262F\uFE0F" }], version: 1 }, latin_cross: { id: "latin_cross", name: "Latin Cross", keywords: ["christianity"], skins: [{ unified: "271d-fe0f", native: "\u271D\uFE0F" }], version: 1 }, orthodox_cross: { id: "orthodox_cross", name: "Orthodox Cross", keywords: ["suppedaneum", "religion"], skins: [{ unified: "2626-fe0f", native: "\u2626\uFE0F" }], version: 1 }, star_and_crescent: { id: "star_and_crescent", name: "Star and Crescent", keywords: ["islam"], skins: [{ unified: "262a-fe0f", native: "\u262A\uFE0F" }], version: 1 }, peace_symbol: { id: "peace_symbol", name: "Peace Symbol", keywords: ["hippie"], skins: [{ unified: "262e-fe0f", native: "\u262E\uFE0F" }], version: 1 }, menorah_with_nine_branches: { id: "menorah_with_nine_branches", name: "Menorah", keywords: ["with", "nine", "branches", "hanukkah", "candles", "jewish"], skins: [{ unified: "1f54e", native: "\u{1F54E}" }], version: 1 }, six_pointed_star: { id: "six_pointed_star", name: "Dotted Six-Pointed Star", keywords: ["six", "pointed", "purple", "square", "religion", "jewish", "hexagram"], skins: [{ unified: "1f52f", native: "\u{1F52F}" }], version: 1 }, khanda: { id: "khanda", name: "Khanda", keywords: ["Sikhism", "religion"], skins: [{ unified: "1faaf", native: "\u{1FAAF}" }], version: 15 }, aries: { id: "aries", name: "Aries", keywords: ["sign", "purple", "square", "zodiac", "astrology"], skins: [{ unified: "2648", native: "\u2648" }], version: 1 }, taurus: { id: "taurus", name: "Taurus", keywords: ["purple", "square", "sign", "zodiac", "astrology"], skins: [{ unified: "2649", native: "\u2649" }], version: 1 }, gemini: { id: "gemini", name: "Gemini", keywords: ["sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "264a", native: "\u264A" }], version: 1 }, cancer: { id: "cancer", name: "Cancer", keywords: ["sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "264b", native: "\u264B" }], version: 1 }, leo: { id: "leo", name: "Leo", keywords: ["sign", "purple", "square", "zodiac", "astrology"], skins: [{ unified: "264c", native: "\u264C" }], version: 1 }, virgo: { id: "virgo", name: "Virgo", keywords: ["sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "264d", native: "\u264D" }], version: 1 }, libra: { id: "libra", name: "Libra", keywords: ["sign", "purple", "square", "zodiac", "astrology"], skins: [{ unified: "264e", native: "\u264E" }], version: 1 }, scorpius: { id: "scorpius", name: "Scorpio", keywords: ["scorpius", "sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "264f", native: "\u264F" }], version: 1 }, sagittarius: { id: "sagittarius", name: "Sagittarius", keywords: ["sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "2650", native: "\u2650" }], version: 1 }, capricorn: { id: "capricorn", name: "Capricorn", keywords: ["sign", "zodiac", "purple", "square", "astrology"], skins: [{ unified: "2651", native: "\u2651" }], version: 1 }, aquarius: { id: "aquarius", name: "Aquarius", keywords: ["sign", "purple", "square", "zodiac", "astrology"], skins: [{ unified: "2652", native: "\u2652" }], version: 1 }, pisces: { id: "pisces", name: "Pisces", keywords: ["purple", "square", "sign", "zodiac", "astrology"], skins: [{ unified: "2653", native: "\u2653" }], version: 1 }, ophiuchus: { id: "ophiuchus", name: "Ophiuchus", keywords: ["sign", "purple", "square", "constellation", "astrology"], skins: [{ unified: "26ce", native: "\u26CE" }], version: 1 }, twisted_rightwards_arrows: { id: "twisted_rightwards_arrows", name: "Shuffle Tracks Button", keywords: ["twisted", "rightwards", "arrows", "blue", "square", "music", "random"], skins: [{ unified: "1f500", native: "\u{1F500}" }], version: 1 }, repeat: { id: "repeat", name: "Repeat Button", keywords: ["loop", "record"], skins: [{ unified: "1f501", native: "\u{1F501}" }], version: 1 }, repeat_one: { id: "repeat_one", name: "Repeat Single Button", keywords: ["one", "blue", "square", "loop"], skins: [{ unified: "1f502", native: "\u{1F502}" }], version: 1 }, arrow_forward: { id: "arrow_forward", name: "Play Button", keywords: ["arrow", "forward", "blue", "square", "right", "direction"], skins: [{ unified: "25b6-fe0f", native: "\u25B6\uFE0F" }], version: 1 }, fast_forward: { id: "fast_forward", name: "Fast-Forward Button", keywords: ["fast", "forward", "blue", "square", "play", "speed", "continue"], skins: [{ unified: "23e9", native: "\u23E9" }], version: 1 }, black_right_pointing_double_triangle_with_vertical_bar: { id: "black_right_pointing_double_triangle_with_vertical_bar", name: "Next Track Button", keywords: ["black", "right", "pointing", "double", "triangle", "with", "vertical", "bar", "forward", "blue", "square"], skins: [{ unified: "23ed-fe0f", native: "\u23ED\uFE0F" }], version: 1 }, black_right_pointing_triangle_with_double_vertical_bar: { id: "black_right_pointing_triangle_with_double_vertical_bar", name: "Play or Pause Button", keywords: ["black", "right", "pointing", "triangle", "with", "double", "vertical", "bar", "blue", "square"], skins: [{ unified: "23ef-fe0f", native: "\u23EF\uFE0F" }], version: 1 }, arrow_backward: { id: "arrow_backward", name: "Reverse Button", keywords: ["arrow", "backward", "blue", "square", "left", "direction"], skins: [{ unified: "25c0-fe0f", native: "\u25C0\uFE0F" }], version: 1 }, rewind: { id: "rewind", name: "Fast Reverse Button", keywords: ["rewind", "play", "blue", "square"], skins: [{ unified: "23ea", native: "\u23EA" }], version: 1 }, black_left_pointing_double_triangle_with_vertical_bar: { id: "black_left_pointing_double_triangle_with_vertical_bar", name: "Last Track Button", keywords: ["black", "left", "pointing", "double", "triangle", "with", "vertical", "bar", "backward"], skins: [{ unified: "23ee-fe0f", native: "\u23EE\uFE0F" }], version: 1 }, arrow_up_small: { id: "arrow_up_small", name: "Upwards Button", keywords: ["arrow", "up", "small", "blue", "square", "triangle", "direction", "point", "forward", "top"], skins: [{ unified: "1f53c", native: "\u{1F53C}" }], version: 1 }, arrow_double_up: { id: "arrow_double_up", name: "Fast Up Button", keywords: ["arrow", "double", "blue", "square", "direction", "top"], skins: [{ unified: "23eb", native: "\u23EB" }], version: 1 }, arrow_down_small: { id: "arrow_down_small", name: "Downwards Button", keywords: ["arrow", "down", "small", "blue", "square", "direction", "bottom"], skins: [{ unified: "1f53d", native: "\u{1F53D}" }], version: 1 }, arrow_double_down: { id: "arrow_double_down", name: "Fast Down Button", keywords: ["arrow", "double", "blue", "square", "direction", "bottom"], skins: [{ unified: "23ec", native: "\u23EC" }], version: 1 }, double_vertical_bar: { id: "double_vertical_bar", name: "Pause Button", keywords: ["double", "vertical", "bar", "blue", "square"], skins: [{ unified: "23f8-fe0f", native: "\u23F8\uFE0F" }], version: 1 }, black_square_for_stop: { id: "black_square_for_stop", name: "Stop Button", keywords: ["black", "square", "for", "blue"], skins: [{ unified: "23f9-fe0f", native: "\u23F9\uFE0F" }], version: 1 }, black_circle_for_record: { id: "black_circle_for_record", name: "Record Button", keywords: ["black", "circle", "for", "blue", "square"], skins: [{ unified: "23fa-fe0f", native: "\u23FA\uFE0F" }], version: 1 }, eject: { id: "eject", name: "Eject Button", keywords: ["blue", "square"], skins: [{ unified: "23cf-fe0f", native: "\u23CF\uFE0F" }], version: 1 }, cinema: { id: "cinema", name: "Cinema", keywords: ["blue", "square", "record", "film", "movie", "curtain", "stage", "theater"], skins: [{ unified: "1f3a6", native: "\u{1F3A6}" }], version: 1 }, low_brightness: { id: "low_brightness", name: "Dim Button", keywords: ["low", "brightness", "sun", "afternoon", "warm", "summer"], skins: [{ unified: "1f505", native: "\u{1F505}" }], version: 1 }, high_brightness: { id: "high_brightness", name: "Bright Button", keywords: ["high", "brightness", "sun", "light"], skins: [{ unified: "1f506", native: "\u{1F506}" }], version: 1 }, signal_strength: { id: "signal_strength", name: "Antenna Bars", keywords: ["signal", "strength", "blue", "square", "reception", "phone", "internet", "connection", "wifi", "bluetooth"], skins: [{ unified: "1f4f6", native: "\u{1F4F6}" }], version: 1 }, wireless: { id: "wireless", name: "Wireless", keywords: ["wifi", "internet", "contactless", "signal"], skins: [{ unified: "1f6dc", native: "\u{1F6DC}" }], version: 15 }, vibration_mode: { id: "vibration_mode", name: "Vibration Mode", keywords: ["orange", "square", "phone"], skins: [{ unified: "1f4f3", native: "\u{1F4F3}" }], version: 1 }, mobile_phone_off: { id: "mobile_phone_off", name: "Mobile Phone off", keywords: ["mute", "orange", "square", "silence", "quiet"], skins: [{ unified: "1f4f4", native: "\u{1F4F4}" }], version: 1 }, female_sign: { id: "female_sign", name: "Female Sign", keywords: ["woman", "women", "lady", "girl"], skins: [{ unified: "2640-fe0f", native: "\u2640\uFE0F" }], version: 4 }, male_sign: { id: "male_sign", name: "Male Sign", keywords: ["man", "boy", "men"], skins: [{ unified: "2642-fe0f", native: "\u2642\uFE0F" }], version: 4 }, transgender_symbol: { id: "transgender_symbol", name: "Transgender Symbol", keywords: ["lgbtq"], skins: [{ unified: "26a7-fe0f", native: "\u26A7\uFE0F" }], version: 13 }, heavy_multiplication_x: { id: "heavy_multiplication_x", name: "Multiply", keywords: ["heavy", "multiplication", "x", "sign", "math", "calculation"], skins: [{ unified: "2716-fe0f", native: "\u2716\uFE0F" }], version: 1 }, heavy_plus_sign: { id: "heavy_plus_sign", name: "Plus", keywords: ["heavy", "sign", "math", "calculation", "addition", "more", "increase"], skins: [{ unified: "2795", native: "\u2795" }], version: 1 }, heavy_minus_sign: { id: "heavy_minus_sign", name: "Minus", keywords: ["heavy", "sign", "math", "calculation", "subtract", "less"], skins: [{ unified: "2796", native: "\u2796" }], version: 1 }, heavy_division_sign: { id: "heavy_division_sign", name: "Divide", keywords: ["heavy", "division", "sign", "math", "calculation"], skins: [{ unified: "2797", native: "\u2797" }], version: 1 }, heavy_equals_sign: { id: "heavy_equals_sign", name: "Heavy Equals Sign", keywords: ["math"], skins: [{ unified: "1f7f0", native: "\u{1F7F0}" }], version: 14 }, infinity: { id: "infinity", name: "Infinity", keywords: ["forever"], skins: [{ unified: "267e-fe0f", native: "\u267E\uFE0F" }], version: 11 }, bangbang: { id: "bangbang", name: "Double Exclamation Mark", keywords: ["bangbang", "surprise"], skins: [{ unified: "203c-fe0f", native: "\u203C\uFE0F" }], version: 1 }, interrobang: { id: "interrobang", name: "Exclamation Question Mark", keywords: ["interrobang", "wat", "punctuation", "surprise"], skins: [{ unified: "2049-fe0f", native: "\u2049\uFE0F" }], version: 1 }, question: { id: "question", name: "Red Question Mark", keywords: ["doubt", "confused"], skins: [{ unified: "2753", native: "\u2753" }], version: 1 }, grey_question: { id: "grey_question", name: "White Question Mark", keywords: ["grey", "doubts", "gray", "huh", "confused"], skins: [{ unified: "2754", native: "\u2754" }], version: 1 }, grey_exclamation: { id: "grey_exclamation", name: "White Exclamation Mark", keywords: ["grey", "surprise", "punctuation", "gray", "wow", "warning"], skins: [{ unified: "2755", native: "\u2755" }], version: 1 }, exclamation: { id: "exclamation", name: "Red Exclamation Mark", keywords: ["heavy", "danger", "surprise", "punctuation", "wow", "warning"], skins: [{ unified: "2757", native: "\u2757" }], version: 1 }, wavy_dash: { id: "wavy_dash", name: "Wavy Dash", keywords: ["draw", "line", "moustache", "mustache", "squiggle", "scribble"], skins: [{ unified: "3030-fe0f", native: "\u3030\uFE0F" }], version: 1 }, currency_exchange: { id: "currency_exchange", name: "Currency Exchange", keywords: ["money", "sales", "dollar", "travel"], skins: [{ unified: "1f4b1", native: "\u{1F4B1}" }], version: 1 }, heavy_dollar_sign: { id: "heavy_dollar_sign", name: "Heavy Dollar Sign", keywords: ["money", "sales", "payment", "currency", "buck"], skins: [{ unified: "1f4b2", native: "\u{1F4B2}" }], version: 1 }, medical_symbol: { id: "medical_symbol", name: "Medical Symbol", keywords: ["staff", "of", "aesculapius", "health", "hospital"], skins: [{ unified: "2695-fe0f", native: "\u2695\uFE0F" }], version: 4 }, recycle: { id: "recycle", name: "Recycling Symbol", keywords: ["recycle", "arrow", "environment", "garbage", "trash"], skins: [{ unified: "267b-fe0f", native: "\u267B\uFE0F" }], version: 1 }, fleur_de_lis: { id: "fleur_de_lis", name: "Fleur-De-Lis", keywords: ["fleur", "de", "lis", "decorative", "scout"], skins: [{ unified: "269c-fe0f", native: "\u269C\uFE0F" }], version: 1 }, trident: { id: "trident", name: "Trident Emblem", keywords: ["weapon", "spear"], skins: [{ unified: "1f531", native: "\u{1F531}" }], version: 1 }, name_badge: { id: "name_badge", name: "Name Badge", keywords: ["fire", "forbid"], skins: [{ unified: "1f4db", native: "\u{1F4DB}" }], version: 1 }, beginner: { id: "beginner", name: "Japanese Symbol for Beginner", keywords: ["badge", "shield"], skins: [{ unified: "1f530", native: "\u{1F530}" }], version: 1 }, o: { id: "o", name: "Hollow Red Circle", keywords: ["o", "round"], skins: [{ unified: "2b55", native: "\u2B55" }], version: 1 }, white_check_mark: { id: "white_check_mark", name: "Check Mark Button", keywords: ["white", "green", "square", "ok", "agree", "vote", "election", "answer", "tick"], skins: [{ unified: "2705", native: "\u2705" }], version: 1 }, ballot_box_with_check: { id: "ballot_box_with_check", name: "Check Box with Check", keywords: ["ballot", "ok", "agree", "confirm", "black", "square", "vote", "election", "yes", "tick"], skins: [{ unified: "2611-fe0f", native: "\u2611\uFE0F" }], version: 1 }, heavy_check_mark: { id: "heavy_check_mark", name: "Check Mark", keywords: ["heavy", "ok", "nike", "answer", "yes", "tick"], skins: [{ unified: "2714-fe0f", native: "\u2714\uFE0F" }], version: 1 }, x: { id: "x", name: "Cross Mark", keywords: ["x", "no", "delete", "remove", "cancel", "red"], skins: [{ unified: "274c", native: "\u274C" }], version: 1 }, negative_squared_cross_mark: { id: "negative_squared_cross_mark", name: "Cross Mark Button", keywords: ["negative", "squared", "x", "green", "square", "no", "deny"], skins: [{ unified: "274e", native: "\u274E" }], version: 1 }, curly_loop: { id: "curly_loop", name: "Curly Loop", keywords: ["scribble", "draw", "shape", "squiggle"], skins: [{ unified: "27b0", native: "\u27B0" }], version: 1 }, loop: { id: "loop", name: "Double Curly Loop", keywords: ["tape", "cassette"], skins: [{ unified: "27bf", native: "\u27BF" }], version: 1 }, part_alternation_mark: { id: "part_alternation_mark", name: "Part Alternation Mark", keywords: ["graph", "presentation", "stats", "business", "economics", "bad"], skins: [{ unified: "303d-fe0f", native: "\u303D\uFE0F" }], version: 1 }, eight_spoked_asterisk: { id: "eight_spoked_asterisk", name: "Eight Spoked Asterisk", keywords: ["star", "sparkle", "green", "square"], skins: [{ unified: "2733-fe0f", native: "\u2733\uFE0F" }], version: 1 }, eight_pointed_black_star: { id: "eight_pointed_black_star", name: "Eight-Pointed Star", keywords: ["eight", "pointed", "black", "orange", "square", "shape", "polygon"], skins: [{ unified: "2734-fe0f", native: "\u2734\uFE0F" }], version: 1 }, sparkle: { id: "sparkle", name: "Sparkle", keywords: ["stars", "green", "square", "awesome", "good", "fireworks"], skins: [{ unified: "2747-fe0f", native: "\u2747\uFE0F" }], version: 1 }, copyright: { id: "copyright", name: "Copyright", keywords: ["ip", "license", "circle", "law", "legal"], skins: [{ unified: "00a9-fe0f", native: "\xA9\uFE0F" }], version: 1 }, registered: { id: "registered", name: "Registered", keywords: ["alphabet", "circle"], skins: [{ unified: "00ae-fe0f", native: "\xAE\uFE0F" }], version: 1 }, tm: { id: "tm", name: "Trade Mark", keywords: ["tm", "trademark", "brand", "law", "legal"], skins: [{ unified: "2122-fe0f", native: "\u2122\uFE0F" }], version: 1 }, hash: { id: "hash", name: "Hash Key", keywords: ["keycap", "", "symbol", "blue", "square", "twitter"], skins: [{ unified: "0023-fe0f-20e3", native: "#\uFE0F\u20E3" }], version: 1 }, keycap_star: { id: "keycap_star", name: "Keycap: *", keywords: ["keycap", "star", ""], skins: [{ unified: "002a-fe0f-20e3", native: "*\uFE0F\u20E3" }], version: 2 }, zero: { id: "zero", name: "Keycap 0", keywords: ["zero", "numbers", "blue", "square", "null"], skins: [{ unified: "0030-fe0f-20e3", native: "0\uFE0F\u20E3" }], version: 1 }, one: { id: "one", name: "Keycap 1", keywords: ["one", "blue", "square", "numbers"], skins: [{ unified: "0031-fe0f-20e3", native: "1\uFE0F\u20E3" }], version: 1 }, two: { id: "two", name: "Keycap 2", keywords: ["two", "numbers", "prime", "blue", "square"], skins: [{ unified: "0032-fe0f-20e3", native: "2\uFE0F\u20E3" }], version: 1 }, three: { id: "three", name: "Keycap 3", keywords: ["three", "numbers", "prime", "blue", "square"], skins: [{ unified: "0033-fe0f-20e3", native: "3\uFE0F\u20E3" }], version: 1 }, four: { id: "four", name: "Keycap 4", keywords: ["four", "numbers", "blue", "square"], skins: [{ unified: "0034-fe0f-20e3", native: "4\uFE0F\u20E3" }], version: 1 }, five: { id: "five", name: "Keycap 5", keywords: ["five", "numbers", "blue", "square", "prime"], skins: [{ unified: "0035-fe0f-20e3", native: "5\uFE0F\u20E3" }], version: 1 }, six: { id: "six", name: "Keycap 6", keywords: ["six", "numbers", "blue", "square"], skins: [{ unified: "0036-fe0f-20e3", native: "6\uFE0F\u20E3" }], version: 1 }, seven: { id: "seven", name: "Keycap 7", keywords: ["seven", "numbers", "blue", "square", "prime"], skins: [{ unified: "0037-fe0f-20e3", native: "7\uFE0F\u20E3" }], version: 1 }, eight: { id: "eight", name: "Keycap 8", keywords: ["eight", "blue", "square", "numbers"], skins: [{ unified: "0038-fe0f-20e3", native: "8\uFE0F\u20E3" }], version: 1 }, nine: { id: "nine", name: "Keycap 9", keywords: ["nine", "blue", "square", "numbers"], skins: [{ unified: "0039-fe0f-20e3", native: "9\uFE0F\u20E3" }], version: 1 }, keycap_ten: { id: "keycap_ten", name: "Keycap 10", keywords: ["ten", "numbers", "blue", "square"], skins: [{ unified: "1f51f", native: "\u{1F51F}" }], version: 1 }, capital_abcd: { id: "capital_abcd", name: "Input Latin Uppercase", keywords: ["capital", "abcd", "alphabet", "words", "blue", "square"], skins: [{ unified: "1f520", native: "\u{1F520}" }], version: 1 }, abcd: { id: "abcd", name: "Input Latin Lowercase", keywords: ["abcd", "blue", "square", "alphabet"], skins: [{ unified: "1f521", native: "\u{1F521}" }], version: 1 }, symbols: { id: "symbols", name: "Input Symbols", keywords: ["blue", "square", "music", "note", "ampersand", "percent", "glyphs", "characters"], skins: [{ unified: "1f523", native: "\u{1F523}" }], version: 1 }, abc: { id: "abc", name: "Input Latin Letters", keywords: ["abc", "blue", "square", "alphabet"], skins: [{ unified: "1f524", native: "\u{1F524}" }], version: 1 }, a: { id: "a", name: "A Button (blood Type)", keywords: ["red", "square", "alphabet", "letter"], skins: [{ unified: "1f170-fe0f", native: "\u{1F170}\uFE0F" }], version: 1 }, ab: { id: "ab", name: "Negative Squared Ab", keywords: ["button", "red", "square", "alphabet"], skins: [{ unified: "1f18e", native: "\u{1F18E}" }], version: 1 }, b: { id: "b", name: "B Button (blood Type)", keywords: ["red", "square", "alphabet", "letter"], skins: [{ unified: "1f171-fe0f", native: "\u{1F171}\uFE0F" }], version: 1 }, cl: { id: "cl", name: "Cl Button", keywords: ["alphabet", "words", "red", "square"], skins: [{ unified: "1f191", native: "\u{1F191}" }], version: 1 }, cool: { id: "cool", name: "Cool Button", keywords: ["words", "blue", "square"], skins: [{ unified: "1f192", native: "\u{1F192}" }], version: 1 }, free: { id: "free", name: "Free Button", keywords: ["blue", "square", "words"], skins: [{ unified: "1f193", native: "\u{1F193}" }], version: 1 }, information_source: { id: "information_source", name: "Information", keywords: ["source", "blue", "square", "alphabet", "letter"], skins: [{ unified: "2139-fe0f", native: "\u2139\uFE0F" }], version: 1 }, id: { id: "id", name: "Id Button", keywords: ["purple", "square", "words"], skins: [{ unified: "1f194", native: "\u{1F194}" }], version: 1 }, m: { id: "m", name: "Circled M", keywords: ["alphabet", "blue", "circle", "letter"], skins: [{ unified: "24c2-fe0f", native: "\u24C2\uFE0F" }], version: 1 }, new: { id: "new", name: "New Button", keywords: ["blue", "square", "words", "start"], skins: [{ unified: "1f195", native: "\u{1F195}" }], version: 1 }, ng: { id: "ng", name: "Ng Button", keywords: ["blue", "square", "words", "shape", "icon"], skins: [{ unified: "1f196", native: "\u{1F196}" }], version: 1 }, o2: { id: "o2", name: "O Button (blood Type)", keywords: ["o2", "alphabet", "red", "square", "letter"], skins: [{ unified: "1f17e-fe0f", native: "\u{1F17E}\uFE0F" }], version: 1 }, ok: { id: "ok", name: "Ok Button", keywords: ["good", "agree", "yes", "blue", "square"], skins: [{ unified: "1f197", native: "\u{1F197}" }], version: 1 }, parking: { id: "parking", name: "P Button", keywords: ["parking", "cars", "blue", "square", "alphabet", "letter"], skins: [{ unified: "1f17f-fe0f", native: "\u{1F17F}\uFE0F" }], version: 1 }, sos: { id: "sos", name: "Sos Button", keywords: ["help", "red", "square", "words", "emergency", "911"], skins: [{ unified: "1f198", native: "\u{1F198}" }], version: 1 }, up: { id: "up", name: "Up! Button", keywords: ["up", "blue", "square", "above", "high"], skins: [{ unified: "1f199", native: "\u{1F199}" }], version: 1 }, vs: { id: "vs", name: "Vs Button", keywords: ["words", "orange", "square"], skins: [{ unified: "1f19a", native: "\u{1F19A}" }], version: 1 }, koko: { id: "koko", name: "Squared Katakana Koko", keywords: ["japanese", "here", "button", "blue", "square", "destination"], skins: [{ unified: "1f201", native: "\u{1F201}" }], version: 1 }, sa: { id: "sa", name: "Squared Katakana Sa", keywords: ["japanese", "service", "charge", "button", "blue", "square"], skins: [{ unified: "1f202-fe0f", native: "\u{1F202}\uFE0F" }], version: 1 }, u6708: { id: "u6708", name: "Japanese \u201Cmonthly Amount\u201D Button", keywords: ["u6708", "monthly", "amount", "chinese", "month", "moon", "orange", "square", "kanji"], skins: [{ unified: "1f237-fe0f", native: "\u{1F237}\uFE0F" }], version: 1 }, u6709: { id: "u6709", name: "Squared Cjk Unified Ideograph-6709", keywords: ["u6709", "japanese", "not", "free", "of", "charge", "button", "orange", "square", "chinese", "have", "kanji"], skins: [{ unified: "1f236", native: "\u{1F236}" }], version: 1 }, u6307: { id: "u6307", name: "Japanese \u201Creserved\u201D Button", keywords: ["u6307", "reserved", "chinese", "point", "green", "square", "kanji"], skins: [{ unified: "1f22f", native: "\u{1F22F}" }], version: 1 }, ideograph_advantage: { id: "ideograph_advantage", name: "Japanese \u201Cbargain\u201D Button", keywords: ["ideograph", "advantage", "bargain", "chinese", "kanji", "obtain", "get", "circle"], skins: [{ unified: "1f250", native: "\u{1F250}" }], version: 1 }, u5272: { id: "u5272", name: "Japanese \u201Cdiscount\u201D Button", keywords: ["u5272", "discount", "cut", "divide", "chinese", "kanji", "pink", "square"], skins: [{ unified: "1f239", native: "\u{1F239}" }], version: 1 }, u7121: { id: "u7121", name: "Japanese \u201Cfree of Charge\u201D Button", keywords: ["u7121", "free", "charge", "nothing", "chinese", "kanji", "orange", "square"], skins: [{ unified: "1f21a", native: "\u{1F21A}" }], version: 1 }, u7981: { id: "u7981", name: "Japanese \u201Cprohibited\u201D Button", keywords: ["u7981", "prohibited", "kanji", "chinese", "forbidden", "limit", "restricted", "red", "square"], skins: [{ unified: "1f232", native: "\u{1F232}" }], version: 1 }, accept: { id: "accept", name: "Circled Ideograph Accept", keywords: ["japanese", "acceptable", "button", "ok", "good", "chinese", "kanji", "agree", "yes", "orange", "circle"], skins: [{ unified: "1f251", native: "\u{1F251}" }], version: 1 }, u7533: { id: "u7533", name: "Japanese \u201Capplication\u201D Button", keywords: ["u7533", "application", "chinese", "kanji", "orange", "square"], skins: [{ unified: "1f238", native: "\u{1F238}" }], version: 1 }, u5408: { id: "u5408", name: "Japanese \u201Cpassing Grade\u201D Button", keywords: ["u5408", "passing", "grade", "chinese", "join", "kanji", "red", "square"], skins: [{ unified: "1f234", native: "\u{1F234}" }], version: 1 }, u7a7a: { id: "u7a7a", name: "Japanese \u201Cvacancy\u201D Button", keywords: ["u7a7a", "vacancy", "kanji", "chinese", "empty", "sky", "blue", "square"], skins: [{ unified: "1f233", native: "\u{1F233}" }], version: 1 }, congratulations: { id: "congratulations", name: "Circled Ideograph Congratulation", keywords: ["congratulations", "japanese", "button", "chinese", "kanji", "red", "circle"], skins: [{ unified: "3297-fe0f", native: "\u3297\uFE0F" }], version: 1 }, secret: { id: "secret", name: "Circled Ideograph Secret", keywords: ["japanese", "button", "privacy", "chinese", "sshh", "kanji", "red", "circle"], skins: [{ unified: "3299-fe0f", native: "\u3299\uFE0F" }], version: 1 }, u55b6: { id: "u55b6", name: "Squared Cjk Unified Ideograph-55b6", keywords: ["u55b6", "japanese", "open", "for", "business", "button", "opening", "hours", "orange", "square"], skins: [{ unified: "1f23a", native: "\u{1F23A}" }], version: 1 }, u6e80: { id: "u6e80", name: "Japanese \u201Cno Vacancy\u201D Button", keywords: ["u6e80", "no", "vacancy", "full", "chinese", "red", "square", "kanji"], skins: [{ unified: "1f235", native: "\u{1F235}" }], version: 1 }, red_circle: { id: "red_circle", name: "Red Circle", keywords: ["shape", "error", "danger"], skins: [{ unified: "1f534", native: "\u{1F534}" }], version: 1 }, large_orange_circle: { id: "large_orange_circle", name: "Orange Circle", keywords: ["large", "round"], skins: [{ unified: "1f7e0", native: "\u{1F7E0}" }], version: 12 }, large_yellow_circle: { id: "large_yellow_circle", name: "Yellow Circle", keywords: ["large", "round"], skins: [{ unified: "1f7e1", native: "\u{1F7E1}" }], version: 12 }, large_green_circle: { id: "large_green_circle", name: "Green Circle", keywords: ["large", "round"], skins: [{ unified: "1f7e2", native: "\u{1F7E2}" }], version: 12 }, large_blue_circle: { id: "large_blue_circle", name: "Blue Circle", keywords: ["large", "shape", "icon", "button"], skins: [{ unified: "1f535", native: "\u{1F535}" }], version: 1 }, large_purple_circle: { id: "large_purple_circle", name: "Purple Circle", keywords: ["large", "round"], skins: [{ unified: "1f7e3", native: "\u{1F7E3}" }], version: 12 }, large_brown_circle: { id: "large_brown_circle", name: "Brown Circle", keywords: ["large", "round"], skins: [{ unified: "1f7e4", native: "\u{1F7E4}" }], version: 12 }, black_circle: { id: "black_circle", name: "Black Circle", keywords: ["shape", "button", "round"], skins: [{ unified: "26ab", native: "\u26AB" }], version: 1 }, white_circle: { id: "white_circle", name: "White Circle", keywords: ["shape", "round"], skins: [{ unified: "26aa", native: "\u26AA" }], version: 1 }, large_red_square: { id: "large_red_square", name: "Red Square", keywords: ["large"], skins: [{ unified: "1f7e5", native: "\u{1F7E5}" }], version: 12 }, large_orange_square: { id: "large_orange_square", name: "Orange Square", keywords: ["large"], skins: [{ unified: "1f7e7", native: "\u{1F7E7}" }], version: 12 }, large_yellow_square: { id: "large_yellow_square", name: "Yellow Square", keywords: ["large"], skins: [{ unified: "1f7e8", native: "\u{1F7E8}" }], version: 12 }, large_green_square: { id: "large_green_square", name: "Green Square", keywords: ["large"], skins: [{ unified: "1f7e9", native: "\u{1F7E9}" }], version: 12 }, large_blue_square: { id: "large_blue_square", name: "Blue Square", keywords: ["large"], skins: [{ unified: "1f7e6", native: "\u{1F7E6}" }], version: 12 }, large_purple_square: { id: "large_purple_square", name: "Purple Square", keywords: ["large"], skins: [{ unified: "1f7ea", native: "\u{1F7EA}" }], version: 12 }, large_brown_square: { id: "large_brown_square", name: "Brown Square", keywords: ["large"], skins: [{ unified: "1f7eb", native: "\u{1F7EB}" }], version: 12 }, black_large_square: { id: "black_large_square", name: "Black Large Square", keywords: ["shape", "icon", "button"], skins: [{ unified: "2b1b", native: "\u2B1B" }], version: 1 }, white_large_square: { id: "white_large_square", name: "White Large Square", keywords: ["shape", "icon", "stone", "button"], skins: [{ unified: "2b1c", native: "\u2B1C" }], version: 1 }, black_medium_square: { id: "black_medium_square", name: "Black Medium Square", keywords: ["shape", "button", "icon"], skins: [{ unified: "25fc-fe0f", native: "\u25FC\uFE0F" }], version: 1 }, white_medium_square: { id: "white_medium_square", name: "White Medium Square", keywords: ["shape", "stone", "icon"], skins: [{ unified: "25fb-fe0f", native: "\u25FB\uFE0F" }], version: 1 }, black_medium_small_square: { id: "black_medium_small_square", name: "Black Medium Small Square", keywords: ["icon", "shape", "button"], skins: [{ unified: "25fe", native: "\u25FE" }], version: 1 }, white_medium_small_square: { id: "white_medium_small_square", name: "White Medium Small Square", keywords: ["shape", "stone", "icon", "button"], skins: [{ unified: "25fd", native: "\u25FD" }], version: 1 }, black_small_square: { id: "black_small_square", name: "Black Small Square", keywords: ["shape", "icon"], skins: [{ unified: "25aa-fe0f", native: "\u25AA\uFE0F" }], version: 1 }, white_small_square: { id: "white_small_square", name: "White Small Square", keywords: ["shape", "icon"], skins: [{ unified: "25ab-fe0f", native: "\u25AB\uFE0F" }], version: 1 }, large_orange_diamond: { id: "large_orange_diamond", name: "Large Orange Diamond", keywords: ["shape", "jewel", "gem"], skins: [{ unified: "1f536", native: "\u{1F536}" }], version: 1 }, large_blue_diamond: { id: "large_blue_diamond", name: "Large Blue Diamond", keywords: ["shape", "jewel", "gem"], skins: [{ unified: "1f537", native: "\u{1F537}" }], version: 1 }, small_orange_diamond: { id: "small_orange_diamond", name: "Small Orange Diamond", keywords: ["shape", "jewel", "gem"], skins: [{ unified: "1f538", native: "\u{1F538}" }], version: 1 }, small_blue_diamond: { id: "small_blue_diamond", name: "Small Blue Diamond", keywords: ["shape", "jewel", "gem"], skins: [{ unified: "1f539", native: "\u{1F539}" }], version: 1 }, small_red_triangle: { id: "small_red_triangle", name: "Red Triangle Pointed Up", keywords: ["small", "shape", "direction", "top"], skins: [{ unified: "1f53a", native: "\u{1F53A}" }], version: 1 }, small_red_triangle_down: { id: "small_red_triangle_down", name: "Red Triangle Pointed Down", keywords: ["small", "shape", "direction", "bottom"], skins: [{ unified: "1f53b", native: "\u{1F53B}" }], version: 1 }, diamond_shape_with_a_dot_inside: { id: "diamond_shape_with_a_dot_inside", name: "Diamond with a Dot", keywords: ["shape", "inside", "jewel", "blue", "gem", "crystal", "fancy"], skins: [{ unified: "1f4a0", native: "\u{1F4A0}" }], version: 1 }, radio_button: { id: "radio_button", name: "Radio Button", keywords: ["input", "old", "music", "circle"], skins: [{ unified: "1f518", native: "\u{1F518}" }], version: 1 }, white_square_button: { id: "white_square_button", name: "White Square Button", keywords: ["shape", "input"], skins: [{ unified: "1f533", native: "\u{1F533}" }], version: 1 }, black_square_button: { id: "black_square_button", name: "Black Square Button", keywords: ["shape", "input", "frame"], skins: [{ unified: "1f532", native: "\u{1F532}" }], version: 1 }, checkered_flag: { id: "checkered_flag", name: "Chequered Flag", keywords: ["checkered", "contest", "finishline", "race", "gokart"], skins: [{ unified: "1f3c1", native: "\u{1F3C1}" }], version: 1 }, triangular_flag_on_post: { id: "triangular_flag_on_post", name: "Triangular Flag", keywords: ["on", "post", "mark", "milestone", "place"], skins: [{ unified: "1f6a9", native: "\u{1F6A9}" }], version: 1 }, crossed_flags: { id: "crossed_flags", name: "Crossed Flags", keywords: ["japanese", "nation", "country", "border"], skins: [{ unified: "1f38c", native: "\u{1F38C}" }], version: 1 }, waving_black_flag: { id: "waving_black_flag", name: "Black Flag", keywords: ["waving", "pirate"], skins: [{ unified: "1f3f4", native: "\u{1F3F4}" }], version: 1 }, waving_white_flag: { id: "waving_white_flag", name: "White Flag", keywords: ["waving", "losing", "loser", "lost", "surrender", "give", "up", "fail"], skins: [{ unified: "1f3f3-fe0f", native: "\u{1F3F3}\uFE0F" }], version: 1 }, "rainbow-flag": { id: "rainbow-flag", name: "Rainbow Flag", keywords: ["pride", "gay", "lgbt", "glbt", "queer", "homosexual", "lesbian", "bisexual", "transgender"], skins: [{ unified: "1f3f3-fe0f-200d-1f308", native: "\u{1F3F3}\uFE0F\u200D\u{1F308}" }], version: 4 }, transgender_flag: { id: "transgender_flag", name: "Transgender Flag", keywords: ["lgbtq"], skins: [{ unified: "1f3f3-fe0f-200d-26a7-fe0f", native: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F" }], version: 13 }, pirate_flag: { id: "pirate_flag", name: "Pirate Flag", keywords: ["skull", "crossbones", "banner"], skins: [{ unified: "1f3f4-200d-2620-fe0f", native: "\u{1F3F4}\u200D\u2620\uFE0F" }], version: 11 }, "flag-ac": { id: "flag-ac", name: "Ascension Island Flag", keywords: ["ac"], skins: [{ unified: "1f1e6-1f1e8", native: "\u{1F1E6}\u{1F1E8}" }], version: 2 }, "flag-ad": { id: "flag-ad", name: "Andorra Flag", keywords: ["ad", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1e9", native: "\u{1F1E6}\u{1F1E9}" }], version: 2 }, "flag-ae": { id: "flag-ae", name: "United Arab Emirates Flag", keywords: ["ae", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1ea", native: "\u{1F1E6}\u{1F1EA}" }], version: 2 }, "flag-af": { id: "flag-af", name: "Afghanistan Flag", keywords: ["af", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1eb", native: "\u{1F1E6}\u{1F1EB}" }], version: 2 }, "flag-ag": { id: "flag-ag", name: "Antigua & Barbuda Flag", keywords: ["ag", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1ec", native: "\u{1F1E6}\u{1F1EC}" }], version: 2 }, "flag-ai": { id: "flag-ai", name: "Anguilla Flag", keywords: ["ai", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1ee", native: "\u{1F1E6}\u{1F1EE}" }], version: 2 }, "flag-al": { id: "flag-al", name: "Albania Flag", keywords: ["al", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f1", native: "\u{1F1E6}\u{1F1F1}" }], version: 2 }, "flag-am": { id: "flag-am", name: "Armenia Flag", keywords: ["am", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f2", native: "\u{1F1E6}\u{1F1F2}" }], version: 2 }, "flag-ao": { id: "flag-ao", name: "Angola Flag", keywords: ["ao", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f4", native: "\u{1F1E6}\u{1F1F4}" }], version: 2 }, "flag-aq": { id: "flag-aq", name: "Antarctica Flag", keywords: ["aq", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f6", native: "\u{1F1E6}\u{1F1F6}" }], version: 2 }, "flag-ar": { id: "flag-ar", name: "Argentina Flag", keywords: ["ar", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f7", native: "\u{1F1E6}\u{1F1F7}" }], version: 2 }, "flag-as": { id: "flag-as", name: "American Samoa Flag", keywords: ["as", "ws", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f8", native: "\u{1F1E6}\u{1F1F8}" }], version: 2 }, "flag-at": { id: "flag-at", name: "Austria Flag", keywords: ["at", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1f9", native: "\u{1F1E6}\u{1F1F9}" }], version: 2 }, "flag-au": { id: "flag-au", name: "Australia Flag", keywords: ["au", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1fa", native: "\u{1F1E6}\u{1F1FA}" }], version: 2 }, "flag-aw": { id: "flag-aw", name: "Aruba Flag", keywords: ["aw", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1fc", native: "\u{1F1E6}\u{1F1FC}" }], version: 2 }, "flag-ax": { id: "flag-ax", name: "\xC5land Islands Flag", keywords: ["ax", "aland", "Aland", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1fd", native: "\u{1F1E6}\u{1F1FD}" }], version: 2 }, "flag-az": { id: "flag-az", name: "Azerbaijan Flag", keywords: ["az", "nation", "country", "banner"], skins: [{ unified: "1f1e6-1f1ff", native: "\u{1F1E6}\u{1F1FF}" }], version: 2 }, "flag-ba": { id: "flag-ba", name: "Bosnia & Herzegovina Flag", keywords: ["ba", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1e6", native: "\u{1F1E7}\u{1F1E6}" }], version: 2 }, "flag-bb": { id: "flag-bb", name: "Barbados Flag", keywords: ["bb", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1e7", native: "\u{1F1E7}\u{1F1E7}" }], version: 2 }, "flag-bd": { id: "flag-bd", name: "Bangladesh Flag", keywords: ["bd", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1e9", native: "\u{1F1E7}\u{1F1E9}" }], version: 2 }, "flag-be": { id: "flag-be", name: "Belgium Flag", keywords: ["be", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ea", native: "\u{1F1E7}\u{1F1EA}" }], version: 2 }, "flag-bf": { id: "flag-bf", name: "Burkina Faso Flag", keywords: ["bf", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1eb", native: "\u{1F1E7}\u{1F1EB}" }], version: 2 }, "flag-bg": { id: "flag-bg", name: "Bulgaria Flag", keywords: ["bg", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ec", native: "\u{1F1E7}\u{1F1EC}" }], version: 2 }, "flag-bh": { id: "flag-bh", name: "Bahrain Flag", keywords: ["bh", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ed", native: "\u{1F1E7}\u{1F1ED}" }], version: 2 }, "flag-bi": { id: "flag-bi", name: "Burundi Flag", keywords: ["bi", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ee", native: "\u{1F1E7}\u{1F1EE}" }], version: 2 }, "flag-bj": { id: "flag-bj", name: "Benin Flag", keywords: ["bj", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ef", native: "\u{1F1E7}\u{1F1EF}" }], version: 2 }, "flag-bl": { id: "flag-bl", name: "St. Barth\xE9lemy Flag", keywords: ["bl", "st", "barthelemy", "saint", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f1", native: "\u{1F1E7}\u{1F1F1}" }], version: 2 }, "flag-bm": { id: "flag-bm", name: "Bermuda Flag", keywords: ["bm", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f2", native: "\u{1F1E7}\u{1F1F2}" }], version: 2 }, "flag-bn": { id: "flag-bn", name: "Brunei Flag", keywords: ["bn", "darussalam", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f3", native: "\u{1F1E7}\u{1F1F3}" }], version: 2 }, "flag-bo": { id: "flag-bo", name: "Bolivia Flag", keywords: ["bo", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f4", native: "\u{1F1E7}\u{1F1F4}" }], version: 2 }, "flag-bq": { id: "flag-bq", name: "Caribbean Netherlands Flag", keywords: ["bq", "bonaire", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f6", native: "\u{1F1E7}\u{1F1F6}" }], version: 2 }, "flag-br": { id: "flag-br", name: "Brazil Flag", keywords: ["br", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f7", native: "\u{1F1E7}\u{1F1F7}" }], version: 2 }, "flag-bs": { id: "flag-bs", name: "Bahamas Flag", keywords: ["bs", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f8", native: "\u{1F1E7}\u{1F1F8}" }], version: 2 }, "flag-bt": { id: "flag-bt", name: "Bhutan Flag", keywords: ["bt", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1f9", native: "\u{1F1E7}\u{1F1F9}" }], version: 2 }, "flag-bv": { id: "flag-bv", name: "Bouvet Island Flag", keywords: ["bv", "norway"], skins: [{ unified: "1f1e7-1f1fb", native: "\u{1F1E7}\u{1F1FB}" }], version: 2 }, "flag-bw": { id: "flag-bw", name: "Botswana Flag", keywords: ["bw", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1fc", native: "\u{1F1E7}\u{1F1FC}" }], version: 2 }, "flag-by": { id: "flag-by", name: "Belarus Flag", keywords: ["by", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1fe", native: "\u{1F1E7}\u{1F1FE}" }], version: 2 }, "flag-bz": { id: "flag-bz", name: "Belize Flag", keywords: ["bz", "nation", "country", "banner"], skins: [{ unified: "1f1e7-1f1ff", native: "\u{1F1E7}\u{1F1FF}" }], version: 2 }, "flag-ca": { id: "flag-ca", name: "Canada Flag", keywords: ["ca", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1e6", native: "\u{1F1E8}\u{1F1E6}" }], version: 2 }, "flag-cc": { id: "flag-cc", name: "Cocos (keeling) Islands Flag", keywords: ["cc", "keeling", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1e8", native: "\u{1F1E8}\u{1F1E8}" }], version: 2 }, "flag-cd": { id: "flag-cd", name: "Congo - Kinshasa Flag", keywords: ["cd", "democratic", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1e9", native: "\u{1F1E8}\u{1F1E9}" }], version: 2 }, "flag-cf": { id: "flag-cf", name: "Central African Republic Flag", keywords: ["cf", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1eb", native: "\u{1F1E8}\u{1F1EB}" }], version: 2 }, "flag-cg": { id: "flag-cg", name: "Congo - Brazzaville Flag", keywords: ["cg", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1ec", native: "\u{1F1E8}\u{1F1EC}" }], version: 2 }, "flag-ch": { id: "flag-ch", name: "Switzerland Flag", keywords: ["ch", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1ed", native: "\u{1F1E8}\u{1F1ED}" }], version: 2 }, "flag-ci": { id: "flag-ci", name: "C\xF4te D\u2019ivoire Flag", keywords: ["ci", "cote", "d", "ivoire", "ivory", "coast", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1ee", native: "\u{1F1E8}\u{1F1EE}" }], version: 2 }, "flag-ck": { id: "flag-ck", name: "Cook Islands Flag", keywords: ["ck", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1f0", native: "\u{1F1E8}\u{1F1F0}" }], version: 2 }, "flag-cl": { id: "flag-cl", name: "Chile Flag", keywords: ["cl", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1f1", native: "\u{1F1E8}\u{1F1F1}" }], version: 2 }, "flag-cm": { id: "flag-cm", name: "Cameroon Flag", keywords: ["cm", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1f2", native: "\u{1F1E8}\u{1F1F2}" }], version: 2 }, cn: { id: "cn", name: "China Flag", keywords: ["cn", "chinese", "prc", "country", "nation", "banner"], skins: [{ unified: "1f1e8-1f1f3", native: "\u{1F1E8}\u{1F1F3}" }], version: 1 }, "flag-co": { id: "flag-co", name: "Colombia Flag", keywords: ["co", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1f4", native: "\u{1F1E8}\u{1F1F4}" }], version: 2 }, "flag-cp": { id: "flag-cp", name: "Clipperton Island Flag", keywords: ["cp"], skins: [{ unified: "1f1e8-1f1f5", native: "\u{1F1E8}\u{1F1F5}" }], version: 2 }, "flag-cr": { id: "flag-cr", name: "Costa Rica Flag", keywords: ["cr", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1f7", native: "\u{1F1E8}\u{1F1F7}" }], version: 2 }, "flag-cu": { id: "flag-cu", name: "Cuba Flag", keywords: ["cu", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1fa", native: "\u{1F1E8}\u{1F1FA}" }], version: 2 }, "flag-cv": { id: "flag-cv", name: "Cape Verde Flag", keywords: ["cv", "cabo", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1fb", native: "\u{1F1E8}\u{1F1FB}" }], version: 2 }, "flag-cw": { id: "flag-cw", name: "Cura\xE7ao Flag", keywords: ["cw", "curacao", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1fc", native: "\u{1F1E8}\u{1F1FC}" }], version: 2 }, "flag-cx": { id: "flag-cx", name: "Christmas Island Flag", keywords: ["cx", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1fd", native: "\u{1F1E8}\u{1F1FD}" }], version: 2 }, "flag-cy": { id: "flag-cy", name: "Cyprus Flag", keywords: ["cy", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1fe", native: "\u{1F1E8}\u{1F1FE}" }], version: 2 }, "flag-cz": { id: "flag-cz", name: "Czechia Flag", keywords: ["cz", "nation", "country", "banner"], skins: [{ unified: "1f1e8-1f1ff", native: "\u{1F1E8}\u{1F1FF}" }], version: 2 }, de: { id: "de", name: "Germany Flag", keywords: ["de", "german", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1ea", native: "\u{1F1E9}\u{1F1EA}" }], version: 1 }, "flag-dg": { id: "flag-dg", name: "Diego Garcia Flag", keywords: ["dg"], skins: [{ unified: "1f1e9-1f1ec", native: "\u{1F1E9}\u{1F1EC}" }], version: 2 }, "flag-dj": { id: "flag-dj", name: "Djibouti Flag", keywords: ["dj", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1ef", native: "\u{1F1E9}\u{1F1EF}" }], version: 2 }, "flag-dk": { id: "flag-dk", name: "Denmark Flag", keywords: ["dk", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1f0", native: "\u{1F1E9}\u{1F1F0}" }], version: 2 }, "flag-dm": { id: "flag-dm", name: "Dominica Flag", keywords: ["dm", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1f2", native: "\u{1F1E9}\u{1F1F2}" }], version: 2 }, "flag-do": { id: "flag-do", name: "Dominican Republic Flag", keywords: ["do", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1f4", native: "\u{1F1E9}\u{1F1F4}" }], version: 2 }, "flag-dz": { id: "flag-dz", name: "Algeria Flag", keywords: ["dz", "nation", "country", "banner"], skins: [{ unified: "1f1e9-1f1ff", native: "\u{1F1E9}\u{1F1FF}" }], version: 2 }, "flag-ea": { id: "flag-ea", name: "Ceuta & Melilla Flag", keywords: ["ea"], skins: [{ unified: "1f1ea-1f1e6", native: "\u{1F1EA}\u{1F1E6}" }], version: 2 }, "flag-ec": { id: "flag-ec", name: "Ecuador Flag", keywords: ["ec", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1e8", native: "\u{1F1EA}\u{1F1E8}" }], version: 2 }, "flag-ee": { id: "flag-ee", name: "Estonia Flag", keywords: ["ee", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1ea", native: "\u{1F1EA}\u{1F1EA}" }], version: 2 }, "flag-eg": { id: "flag-eg", name: "Egypt Flag", keywords: ["eg", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1ec", native: "\u{1F1EA}\u{1F1EC}" }], version: 2 }, "flag-eh": { id: "flag-eh", name: "Western Sahara Flag", keywords: ["eh", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1ed", native: "\u{1F1EA}\u{1F1ED}" }], version: 2 }, "flag-er": { id: "flag-er", name: "Eritrea Flag", keywords: ["er", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1f7", native: "\u{1F1EA}\u{1F1F7}" }], version: 2 }, es: { id: "es", name: "Spain Flag", keywords: ["es", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1f8", native: "\u{1F1EA}\u{1F1F8}" }], version: 1 }, "flag-et": { id: "flag-et", name: "Ethiopia Flag", keywords: ["et", "nation", "country", "banner"], skins: [{ unified: "1f1ea-1f1f9", native: "\u{1F1EA}\u{1F1F9}" }], version: 2 }, "flag-eu": { id: "flag-eu", name: "European Union Flag", keywords: ["eu", "banner"], skins: [{ unified: "1f1ea-1f1fa", native: "\u{1F1EA}\u{1F1FA}" }], version: 2 }, "flag-fi": { id: "flag-fi", name: "Finland Flag", keywords: ["fi", "nation", "country", "banner"], skins: [{ unified: "1f1eb-1f1ee", native: "\u{1F1EB}\u{1F1EE}" }], version: 2 }, "flag-fj": { id: "flag-fj", name: "Fiji Flag", keywords: ["fj", "nation", "country", "banner"], skins: [{ unified: "1f1eb-1f1ef", native: "\u{1F1EB}\u{1F1EF}" }], version: 2 }, "flag-fk": { id: "flag-fk", name: "Falkland Islands Flag", keywords: ["fk", "malvinas", "nation", "country", "banner"], skins: [{ unified: "1f1eb-1f1f0", native: "\u{1F1EB}\u{1F1F0}" }], version: 2 }, "flag-fm": { id: "flag-fm", name: "Micronesia Flag", keywords: ["fm", "federated", "states", "nation", "country", "banner"], skins: [{ unified: "1f1eb-1f1f2", native: "\u{1F1EB}\u{1F1F2}" }], version: 2 }, "flag-fo": { id: "flag-fo", name: "Faroe Islands Flag", keywords: ["fo", "nation", "country", "banner"], skins: [{ unified: "1f1eb-1f1f4", native: "\u{1F1EB}\u{1F1F4}" }], version: 2 }, fr: { id: "fr", name: "France Flag", keywords: ["fr", "banner", "nation", "french", "country"], skins: [{ unified: "1f1eb-1f1f7", native: "\u{1F1EB}\u{1F1F7}" }], version: 1 }, "flag-ga": { id: "flag-ga", name: "Gabon Flag", keywords: ["ga", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1e6", native: "\u{1F1EC}\u{1F1E6}" }], version: 2 }, gb: { id: "gb", name: "United Kingdom Flag", keywords: ["gb", "uk", "great", "britain", "northern", "ireland", "nation", "country", "banner", "british", "UK", "english", "england", "union", "jack"], skins: [{ unified: "1f1ec-1f1e7", native: "\u{1F1EC}\u{1F1E7}" }], version: 1 }, "flag-gd": { id: "flag-gd", name: "Grenada Flag", keywords: ["gd", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1e9", native: "\u{1F1EC}\u{1F1E9}" }], version: 2 }, "flag-ge": { id: "flag-ge", name: "Georgia Flag", keywords: ["ge", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1ea", native: "\u{1F1EC}\u{1F1EA}" }], version: 2 }, "flag-gf": { id: "flag-gf", name: "French Guiana Flag", keywords: ["gf", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1eb", native: "\u{1F1EC}\u{1F1EB}" }], version: 2 }, "flag-gg": { id: "flag-gg", name: "Guernsey Flag", keywords: ["gg", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1ec", native: "\u{1F1EC}\u{1F1EC}" }], version: 2 }, "flag-gh": { id: "flag-gh", name: "Ghana Flag", keywords: ["gh", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1ed", native: "\u{1F1EC}\u{1F1ED}" }], version: 2 }, "flag-gi": { id: "flag-gi", name: "Gibraltar Flag", keywords: ["gi", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1ee", native: "\u{1F1EC}\u{1F1EE}" }], version: 2 }, "flag-gl": { id: "flag-gl", name: "Greenland Flag", keywords: ["gl", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f1", native: "\u{1F1EC}\u{1F1F1}" }], version: 2 }, "flag-gm": { id: "flag-gm", name: "Gambia Flag", keywords: ["gm", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f2", native: "\u{1F1EC}\u{1F1F2}" }], version: 2 }, "flag-gn": { id: "flag-gn", name: "Guinea Flag", keywords: ["gn", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f3", native: "\u{1F1EC}\u{1F1F3}" }], version: 2 }, "flag-gp": { id: "flag-gp", name: "Guadeloupe Flag", keywords: ["gp", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f5", native: "\u{1F1EC}\u{1F1F5}" }], version: 2 }, "flag-gq": { id: "flag-gq", name: "Equatorial Guinea Flag", keywords: ["gq", "gn", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f6", native: "\u{1F1EC}\u{1F1F6}" }], version: 2 }, "flag-gr": { id: "flag-gr", name: "Greece Flag", keywords: ["gr", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f7", native: "\u{1F1EC}\u{1F1F7}" }], version: 2 }, "flag-gs": { id: "flag-gs", name: "South Georgia & South Sandwich Islands Flag", keywords: ["gs", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f8", native: "\u{1F1EC}\u{1F1F8}" }], version: 2 }, "flag-gt": { id: "flag-gt", name: "Guatemala Flag", keywords: ["gt", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1f9", native: "\u{1F1EC}\u{1F1F9}" }], version: 2 }, "flag-gu": { id: "flag-gu", name: "Guam Flag", keywords: ["gu", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1fa", native: "\u{1F1EC}\u{1F1FA}" }], version: 2 }, "flag-gw": { id: "flag-gw", name: "Guinea-Bissau Flag", keywords: ["gw", "guinea", "bissau", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1fc", native: "\u{1F1EC}\u{1F1FC}" }], version: 2 }, "flag-gy": { id: "flag-gy", name: "Guyana Flag", keywords: ["gy", "nation", "country", "banner"], skins: [{ unified: "1f1ec-1f1fe", native: "\u{1F1EC}\u{1F1FE}" }], version: 2 }, "flag-hk": { id: "flag-hk", name: "Hong Kong Sar China Flag", keywords: ["hk", "nation", "country", "banner"], skins: [{ unified: "1f1ed-1f1f0", native: "\u{1F1ED}\u{1F1F0}" }], version: 2 }, "flag-hm": { id: "flag-hm", name: "Heard & Mcdonald Islands Flag", keywords: ["hm"], skins: [{ unified: "1f1ed-1f1f2", native: "\u{1F1ED}\u{1F1F2}" }], version: 2 }, "flag-hn": { id: "flag-hn", name: "Honduras Flag", keywords: ["hn", "nation", "country", "banner"], skins: [{ unified: "1f1ed-1f1f3", native: "\u{1F1ED}\u{1F1F3}" }], version: 2 }, "flag-hr": { id: "flag-hr", name: "Croatia Flag", keywords: ["hr", "nation", "country", "banner"], skins: [{ unified: "1f1ed-1f1f7", native: "\u{1F1ED}\u{1F1F7}" }], version: 2 }, "flag-ht": { id: "flag-ht", name: "Haiti Flag", keywords: ["ht", "nation", "country", "banner"], skins: [{ unified: "1f1ed-1f1f9", native: "\u{1F1ED}\u{1F1F9}" }], version: 2 }, "flag-hu": { id: "flag-hu", name: "Hungary Flag", keywords: ["hu", "nation", "country", "banner"], skins: [{ unified: "1f1ed-1f1fa", native: "\u{1F1ED}\u{1F1FA}" }], version: 2 }, "flag-ic": { id: "flag-ic", name: "Canary Islands Flag", keywords: ["ic", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1e8", native: "\u{1F1EE}\u{1F1E8}" }], version: 2 }, "flag-id": { id: "flag-id", name: "Indonesia Flag", keywords: ["id", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1e9", native: "\u{1F1EE}\u{1F1E9}" }], version: 2 }, "flag-ie": { id: "flag-ie", name: "Ireland Flag", keywords: ["ie", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1ea", native: "\u{1F1EE}\u{1F1EA}" }], version: 2 }, "flag-il": { id: "flag-il", name: "Israel Flag", keywords: ["il", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f1", native: "\u{1F1EE}\u{1F1F1}" }], version: 2 }, "flag-im": { id: "flag-im", name: "Isle of Man Flag", keywords: ["im", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f2", native: "\u{1F1EE}\u{1F1F2}" }], version: 2 }, "flag-in": { id: "flag-in", name: "India Flag", keywords: ["in", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f3", native: "\u{1F1EE}\u{1F1F3}" }], version: 2 }, "flag-io": { id: "flag-io", name: "British Indian Ocean Territory Flag", keywords: ["io", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f4", native: "\u{1F1EE}\u{1F1F4}" }], version: 2 }, "flag-iq": { id: "flag-iq", name: "Iraq Flag", keywords: ["iq", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f6", native: "\u{1F1EE}\u{1F1F6}" }], version: 2 }, "flag-ir": { id: "flag-ir", name: "Iran Flag", keywords: ["ir", "islamic", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f7", native: "\u{1F1EE}\u{1F1F7}" }], version: 2 }, "flag-is": { id: "flag-is", name: "Iceland Flag", keywords: ["is", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f8", native: "\u{1F1EE}\u{1F1F8}" }], version: 2 }, it: { id: "it", name: "Italy Flag", keywords: ["it", "nation", "country", "banner"], skins: [{ unified: "1f1ee-1f1f9", native: "\u{1F1EE}\u{1F1F9}" }], version: 1 }, "flag-je": { id: "flag-je", name: "Jersey Flag", keywords: ["je", "nation", "country", "banner"], skins: [{ unified: "1f1ef-1f1ea", native: "\u{1F1EF}\u{1F1EA}" }], version: 2 }, "flag-jm": { id: "flag-jm", name: "Jamaica Flag", keywords: ["jm", "nation", "country", "banner"], skins: [{ unified: "1f1ef-1f1f2", native: "\u{1F1EF}\u{1F1F2}" }], version: 2 }, "flag-jo": { id: "flag-jo", name: "Jordan Flag", keywords: ["jo", "nation", "country", "banner"], skins: [{ unified: "1f1ef-1f1f4", native: "\u{1F1EF}\u{1F1F4}" }], version: 2 }, jp: { id: "jp", name: "Japan Flag", keywords: ["jp", "japanese", "nation", "country", "banner", "ja"], skins: [{ unified: "1f1ef-1f1f5", native: "\u{1F1EF}\u{1F1F5}" }], version: 1 }, "flag-ke": { id: "flag-ke", name: "Kenya Flag", keywords: ["ke", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1ea", native: "\u{1F1F0}\u{1F1EA}" }], version: 2 }, "flag-kg": { id: "flag-kg", name: "Kyrgyzstan Flag", keywords: ["kg", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1ec", native: "\u{1F1F0}\u{1F1EC}" }], version: 2 }, "flag-kh": { id: "flag-kh", name: "Cambodia Flag", keywords: ["kh", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1ed", native: "\u{1F1F0}\u{1F1ED}" }], version: 2 }, "flag-ki": { id: "flag-ki", name: "Kiribati Flag", keywords: ["ki", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1ee", native: "\u{1F1F0}\u{1F1EE}" }], version: 2 }, "flag-km": { id: "flag-km", name: "Comoros Flag", keywords: ["km", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1f2", native: "\u{1F1F0}\u{1F1F2}" }], version: 2 }, "flag-kn": { id: "flag-kn", name: "St. Kitts & Nevis Flag", keywords: ["kn", "st", "saint", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1f3", native: "\u{1F1F0}\u{1F1F3}" }], version: 2 }, "flag-kp": { id: "flag-kp", name: "North Korea Flag", keywords: ["kp", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1f5", native: "\u{1F1F0}\u{1F1F5}" }], version: 2 }, kr: { id: "kr", name: "South Korea Flag", keywords: ["kr", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1f7", native: "\u{1F1F0}\u{1F1F7}" }], version: 1 }, "flag-kw": { id: "flag-kw", name: "Kuwait Flag", keywords: ["kw", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1fc", native: "\u{1F1F0}\u{1F1FC}" }], version: 2 }, "flag-ky": { id: "flag-ky", name: "Cayman Islands Flag", keywords: ["ky", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1fe", native: "\u{1F1F0}\u{1F1FE}" }], version: 2 }, "flag-kz": { id: "flag-kz", name: "Kazakhstan Flag", keywords: ["kz", "nation", "country", "banner"], skins: [{ unified: "1f1f0-1f1ff", native: "\u{1F1F0}\u{1F1FF}" }], version: 2 }, "flag-la": { id: "flag-la", name: "Laos Flag", keywords: ["la", "lao", "democratic", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1e6", native: "\u{1F1F1}\u{1F1E6}" }], version: 2 }, "flag-lb": { id: "flag-lb", name: "Lebanon Flag", keywords: ["lb", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1e7", native: "\u{1F1F1}\u{1F1E7}" }], version: 2 }, "flag-lc": { id: "flag-lc", name: "St. Lucia Flag", keywords: ["lc", "st", "saint", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1e8", native: "\u{1F1F1}\u{1F1E8}" }], version: 2 }, "flag-li": { id: "flag-li", name: "Liechtenstein Flag", keywords: ["li", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1ee", native: "\u{1F1F1}\u{1F1EE}" }], version: 2 }, "flag-lk": { id: "flag-lk", name: "Sri Lanka Flag", keywords: ["lk", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1f0", native: "\u{1F1F1}\u{1F1F0}" }], version: 2 }, "flag-lr": { id: "flag-lr", name: "Liberia Flag", keywords: ["lr", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1f7", native: "\u{1F1F1}\u{1F1F7}" }], version: 2 }, "flag-ls": { id: "flag-ls", name: "Lesotho Flag", keywords: ["ls", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1f8", native: "\u{1F1F1}\u{1F1F8}" }], version: 2 }, "flag-lt": { id: "flag-lt", name: "Lithuania Flag", keywords: ["lt", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1f9", native: "\u{1F1F1}\u{1F1F9}" }], version: 2 }, "flag-lu": { id: "flag-lu", name: "Luxembourg Flag", keywords: ["lu", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1fa", native: "\u{1F1F1}\u{1F1FA}" }], version: 2 }, "flag-lv": { id: "flag-lv", name: "Latvia Flag", keywords: ["lv", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1fb", native: "\u{1F1F1}\u{1F1FB}" }], version: 2 }, "flag-ly": { id: "flag-ly", name: "Libya Flag", keywords: ["ly", "nation", "country", "banner"], skins: [{ unified: "1f1f1-1f1fe", native: "\u{1F1F1}\u{1F1FE}" }], version: 2 }, "flag-ma": { id: "flag-ma", name: "Morocco Flag", keywords: ["ma", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1e6", native: "\u{1F1F2}\u{1F1E6}" }], version: 2 }, "flag-mc": { id: "flag-mc", name: "Monaco Flag", keywords: ["mc", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1e8", native: "\u{1F1F2}\u{1F1E8}" }], version: 2 }, "flag-md": { id: "flag-md", name: "Moldova Flag", keywords: ["md", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1e9", native: "\u{1F1F2}\u{1F1E9}" }], version: 2 }, "flag-me": { id: "flag-me", name: "Montenegro Flag", keywords: ["me", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1ea", native: "\u{1F1F2}\u{1F1EA}" }], version: 2 }, "flag-mf": { id: "flag-mf", name: "St. Martin Flag", keywords: ["mf", "st"], skins: [{ unified: "1f1f2-1f1eb", native: "\u{1F1F2}\u{1F1EB}" }], version: 2 }, "flag-mg": { id: "flag-mg", name: "Madagascar Flag", keywords: ["mg", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1ec", native: "\u{1F1F2}\u{1F1EC}" }], version: 2 }, "flag-mh": { id: "flag-mh", name: "Marshall Islands Flag", keywords: ["mh", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1ed", native: "\u{1F1F2}\u{1F1ED}" }], version: 2 }, "flag-mk": { id: "flag-mk", name: "North Macedonia Flag", keywords: ["mk", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f0", native: "\u{1F1F2}\u{1F1F0}" }], version: 2 }, "flag-ml": { id: "flag-ml", name: "Mali Flag", keywords: ["ml", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f1", native: "\u{1F1F2}\u{1F1F1}" }], version: 2 }, "flag-mm": { id: "flag-mm", name: "Myanmar (burma) Flag", keywords: ["mm", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f2", native: "\u{1F1F2}\u{1F1F2}" }], version: 2 }, "flag-mn": { id: "flag-mn", name: "Mongolia Flag", keywords: ["mn", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f3", native: "\u{1F1F2}\u{1F1F3}" }], version: 2 }, "flag-mo": { id: "flag-mo", name: "Macao Sar China Flag", keywords: ["mo", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f4", native: "\u{1F1F2}\u{1F1F4}" }], version: 2 }, "flag-mp": { id: "flag-mp", name: "Northern Mariana Islands Flag", keywords: ["mp", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f5", native: "\u{1F1F2}\u{1F1F5}" }], version: 2 }, "flag-mq": { id: "flag-mq", name: "Martinique Flag", keywords: ["mq", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f6", native: "\u{1F1F2}\u{1F1F6}" }], version: 2 }, "flag-mr": { id: "flag-mr", name: "Mauritania Flag", keywords: ["mr", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f7", native: "\u{1F1F2}\u{1F1F7}" }], version: 2 }, "flag-ms": { id: "flag-ms", name: "Montserrat Flag", keywords: ["ms", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f8", native: "\u{1F1F2}\u{1F1F8}" }], version: 2 }, "flag-mt": { id: "flag-mt", name: "Malta Flag", keywords: ["mt", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1f9", native: "\u{1F1F2}\u{1F1F9}" }], version: 2 }, "flag-mu": { id: "flag-mu", name: "Mauritius Flag", keywords: ["mu", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1fa", native: "\u{1F1F2}\u{1F1FA}" }], version: 2 }, "flag-mv": { id: "flag-mv", name: "Maldives Flag", keywords: ["mv", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1fb", native: "\u{1F1F2}\u{1F1FB}" }], version: 2 }, "flag-mw": { id: "flag-mw", name: "Malawi Flag", keywords: ["mw", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1fc", native: "\u{1F1F2}\u{1F1FC}" }], version: 2 }, "flag-mx": { id: "flag-mx", name: "Mexico Flag", keywords: ["mx", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1fd", native: "\u{1F1F2}\u{1F1FD}" }], version: 2 }, "flag-my": { id: "flag-my", name: "Malaysia Flag", keywords: ["my", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1fe", native: "\u{1F1F2}\u{1F1FE}" }], version: 2 }, "flag-mz": { id: "flag-mz", name: "Mozambique Flag", keywords: ["mz", "nation", "country", "banner"], skins: [{ unified: "1f1f2-1f1ff", native: "\u{1F1F2}\u{1F1FF}" }], version: 2 }, "flag-na": { id: "flag-na", name: "Namibia Flag", keywords: ["na", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1e6", native: "\u{1F1F3}\u{1F1E6}" }], version: 2 }, "flag-nc": { id: "flag-nc", name: "New Caledonia Flag", keywords: ["nc", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1e8", native: "\u{1F1F3}\u{1F1E8}" }], version: 2 }, "flag-ne": { id: "flag-ne", name: "Niger Flag", keywords: ["ne", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1ea", native: "\u{1F1F3}\u{1F1EA}" }], version: 2 }, "flag-nf": { id: "flag-nf", name: "Norfolk Island Flag", keywords: ["nf", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1eb", native: "\u{1F1F3}\u{1F1EB}" }], version: 2 }, "flag-ng": { id: "flag-ng", name: "Nigeria Flag", keywords: ["ng", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1ec", native: "\u{1F1F3}\u{1F1EC}" }], version: 2 }, "flag-ni": { id: "flag-ni", name: "Nicaragua Flag", keywords: ["ni", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1ee", native: "\u{1F1F3}\u{1F1EE}" }], version: 2 }, "flag-nl": { id: "flag-nl", name: "Netherlands Flag", keywords: ["nl", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1f1", native: "\u{1F1F3}\u{1F1F1}" }], version: 2 }, "flag-no": { id: "flag-no", name: "Norway Flag", keywords: ["no", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1f4", native: "\u{1F1F3}\u{1F1F4}" }], version: 2 }, "flag-np": { id: "flag-np", name: "Nepal Flag", keywords: ["np", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1f5", native: "\u{1F1F3}\u{1F1F5}" }], version: 2 }, "flag-nr": { id: "flag-nr", name: "Nauru Flag", keywords: ["nr", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1f7", native: "\u{1F1F3}\u{1F1F7}" }], version: 2 }, "flag-nu": { id: "flag-nu", name: "Niue Flag", keywords: ["nu", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1fa", native: "\u{1F1F3}\u{1F1FA}" }], version: 2 }, "flag-nz": { id: "flag-nz", name: "New Zealand Flag", keywords: ["nz", "nation", "country", "banner"], skins: [{ unified: "1f1f3-1f1ff", native: "\u{1F1F3}\u{1F1FF}" }], version: 2 }, "flag-om": { id: "flag-om", name: "Oman Flag", keywords: ["om", "symbol", "nation", "country", "banner"], skins: [{ unified: "1f1f4-1f1f2", native: "\u{1F1F4}\u{1F1F2}" }], version: 2 }, "flag-pa": { id: "flag-pa", name: "Panama Flag", keywords: ["pa", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1e6", native: "\u{1F1F5}\u{1F1E6}" }], version: 2 }, "flag-pe": { id: "flag-pe", name: "Peru Flag", keywords: ["pe", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1ea", native: "\u{1F1F5}\u{1F1EA}" }], version: 2 }, "flag-pf": { id: "flag-pf", name: "French Polynesia Flag", keywords: ["pf", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1eb", native: "\u{1F1F5}\u{1F1EB}" }], version: 2 }, "flag-pg": { id: "flag-pg", name: "Papua New Guinea Flag", keywords: ["pg", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1ec", native: "\u{1F1F5}\u{1F1EC}" }], version: 2 }, "flag-ph": { id: "flag-ph", name: "Philippines Flag", keywords: ["ph", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1ed", native: "\u{1F1F5}\u{1F1ED}" }], version: 2 }, "flag-pk": { id: "flag-pk", name: "Pakistan Flag", keywords: ["pk", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f0", native: "\u{1F1F5}\u{1F1F0}" }], version: 2 }, "flag-pl": { id: "flag-pl", name: "Poland Flag", keywords: ["pl", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f1", native: "\u{1F1F5}\u{1F1F1}" }], version: 2 }, "flag-pm": { id: "flag-pm", name: "St. Pierre & Miquelon Flag", keywords: ["pm", "st", "saint", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f2", native: "\u{1F1F5}\u{1F1F2}" }], version: 2 }, "flag-pn": { id: "flag-pn", name: "Pitcairn Islands Flag", keywords: ["pn", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f3", native: "\u{1F1F5}\u{1F1F3}" }], version: 2 }, "flag-pr": { id: "flag-pr", name: "Puerto Rico Flag", keywords: ["pr", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f7", native: "\u{1F1F5}\u{1F1F7}" }], version: 2 }, "flag-ps": { id: "flag-ps", name: "Palestinian Territories Flag", keywords: ["ps", "palestine", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f8", native: "\u{1F1F5}\u{1F1F8}" }], version: 2 }, "flag-pt": { id: "flag-pt", name: "Portugal Flag", keywords: ["pt", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1f9", native: "\u{1F1F5}\u{1F1F9}" }], version: 2 }, "flag-pw": { id: "flag-pw", name: "Palau Flag", keywords: ["pw", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1fc", native: "\u{1F1F5}\u{1F1FC}" }], version: 2 }, "flag-py": { id: "flag-py", name: "Paraguay Flag", keywords: ["py", "nation", "country", "banner"], skins: [{ unified: "1f1f5-1f1fe", native: "\u{1F1F5}\u{1F1FE}" }], version: 2 }, "flag-qa": { id: "flag-qa", name: "Qatar Flag", keywords: ["qa", "nation", "country", "banner"], skins: [{ unified: "1f1f6-1f1e6", native: "\u{1F1F6}\u{1F1E6}" }], version: 2 }, "flag-re": { id: "flag-re", name: "R\xE9union Flag", keywords: ["re", "reunion", "nation", "country", "banner"], skins: [{ unified: "1f1f7-1f1ea", native: "\u{1F1F7}\u{1F1EA}" }], version: 2 }, "flag-ro": { id: "flag-ro", name: "Romania Flag", keywords: ["ro", "nation", "country", "banner"], skins: [{ unified: "1f1f7-1f1f4", native: "\u{1F1F7}\u{1F1F4}" }], version: 2 }, "flag-rs": { id: "flag-rs", name: "Serbia Flag", keywords: ["rs", "nation", "country", "banner"], skins: [{ unified: "1f1f7-1f1f8", native: "\u{1F1F7}\u{1F1F8}" }], version: 2 }, ru: { id: "ru", name: "Russia Flag", keywords: ["ru", "russian", "federation", "nation", "country", "banner"], skins: [{ unified: "1f1f7-1f1fa", native: "\u{1F1F7}\u{1F1FA}" }], version: 1 }, "flag-rw": { id: "flag-rw", name: "Rwanda Flag", keywords: ["rw", "nation", "country", "banner"], skins: [{ unified: "1f1f7-1f1fc", native: "\u{1F1F7}\u{1F1FC}" }], version: 2 }, "flag-sa": { id: "flag-sa", name: "Saudi Arabia Flag", keywords: ["sa", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1e6", native: "\u{1F1F8}\u{1F1E6}" }], version: 2 }, "flag-sb": { id: "flag-sb", name: "Solomon Islands Flag", keywords: ["sb", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1e7", native: "\u{1F1F8}\u{1F1E7}" }], version: 2 }, "flag-sc": { id: "flag-sc", name: "Seychelles Flag", keywords: ["sc", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1e8", native: "\u{1F1F8}\u{1F1E8}" }], version: 2 }, "flag-sd": { id: "flag-sd", name: "Sudan Flag", keywords: ["sd", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1e9", native: "\u{1F1F8}\u{1F1E9}" }], version: 2 }, "flag-se": { id: "flag-se", name: "Sweden Flag", keywords: ["se", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1ea", native: "\u{1F1F8}\u{1F1EA}" }], version: 2 }, "flag-sg": { id: "flag-sg", name: "Singapore Flag", keywords: ["sg", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1ec", native: "\u{1F1F8}\u{1F1EC}" }], version: 2 }, "flag-sh": { id: "flag-sh", name: "St. Helena Flag", keywords: ["sh", "st", "saint", "ascension", "tristan", "cunha", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1ed", native: "\u{1F1F8}\u{1F1ED}" }], version: 2 }, "flag-si": { id: "flag-si", name: "Slovenia Flag", keywords: ["si", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1ee", native: "\u{1F1F8}\u{1F1EE}" }], version: 2 }, "flag-sj": { id: "flag-sj", name: "Svalbard & Jan Mayen Flag", keywords: ["sj"], skins: [{ unified: "1f1f8-1f1ef", native: "\u{1F1F8}\u{1F1EF}" }], version: 2 }, "flag-sk": { id: "flag-sk", name: "Slovakia Flag", keywords: ["sk", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f0", native: "\u{1F1F8}\u{1F1F0}" }], version: 2 }, "flag-sl": { id: "flag-sl", name: "Sierra Leone Flag", keywords: ["sl", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f1", native: "\u{1F1F8}\u{1F1F1}" }], version: 2 }, "flag-sm": { id: "flag-sm", name: "San Marino Flag", keywords: ["sm", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f2", native: "\u{1F1F8}\u{1F1F2}" }], version: 2 }, "flag-sn": { id: "flag-sn", name: "Senegal Flag", keywords: ["sn", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f3", native: "\u{1F1F8}\u{1F1F3}" }], version: 2 }, "flag-so": { id: "flag-so", name: "Somalia Flag", keywords: ["so", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f4", native: "\u{1F1F8}\u{1F1F4}" }], version: 2 }, "flag-sr": { id: "flag-sr", name: "Suriname Flag", keywords: ["sr", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f7", native: "\u{1F1F8}\u{1F1F7}" }], version: 2 }, "flag-ss": { id: "flag-ss", name: "South Sudan Flag", keywords: ["ss", "sd", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f8", native: "\u{1F1F8}\u{1F1F8}" }], version: 2 }, "flag-st": { id: "flag-st", name: "S\xE3o Tom\xE9 & Pr\xEDncipe Flag", keywords: ["st", "sao", "tome", "principe", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1f9", native: "\u{1F1F8}\u{1F1F9}" }], version: 2 }, "flag-sv": { id: "flag-sv", name: "El Salvador Flag", keywords: ["sv", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1fb", native: "\u{1F1F8}\u{1F1FB}" }], version: 2 }, "flag-sx": { id: "flag-sx", name: "Sint Maarten Flag", keywords: ["sx", "dutch", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1fd", native: "\u{1F1F8}\u{1F1FD}" }], version: 2 }, "flag-sy": { id: "flag-sy", name: "Syria Flag", keywords: ["sy", "syrian", "arab", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1fe", native: "\u{1F1F8}\u{1F1FE}" }], version: 2 }, "flag-sz": { id: "flag-sz", name: "Eswatini Flag", keywords: ["sz", "nation", "country", "banner"], skins: [{ unified: "1f1f8-1f1ff", native: "\u{1F1F8}\u{1F1FF}" }], version: 2 }, "flag-ta": { id: "flag-ta", name: "Tristan Da Cunha Flag", keywords: ["ta"], skins: [{ unified: "1f1f9-1f1e6", native: "\u{1F1F9}\u{1F1E6}" }], version: 2 }, "flag-tc": { id: "flag-tc", name: "Turks & Caicos Islands Flag", keywords: ["tc", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1e8", native: "\u{1F1F9}\u{1F1E8}" }], version: 2 }, "flag-td": { id: "flag-td", name: "Chad Flag", keywords: ["td", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1e9", native: "\u{1F1F9}\u{1F1E9}" }], version: 2 }, "flag-tf": { id: "flag-tf", name: "French Southern Territories Flag", keywords: ["tf", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1eb", native: "\u{1F1F9}\u{1F1EB}" }], version: 2 }, "flag-tg": { id: "flag-tg", name: "Togo Flag", keywords: ["tg", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1ec", native: "\u{1F1F9}\u{1F1EC}" }], version: 2 }, "flag-th": { id: "flag-th", name: "Thailand Flag", keywords: ["th", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1ed", native: "\u{1F1F9}\u{1F1ED}" }], version: 2 }, "flag-tj": { id: "flag-tj", name: "Tajikistan Flag", keywords: ["tj", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1ef", native: "\u{1F1F9}\u{1F1EF}" }], version: 2 }, "flag-tk": { id: "flag-tk", name: "Tokelau Flag", keywords: ["tk", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f0", native: "\u{1F1F9}\u{1F1F0}" }], version: 2 }, "flag-tl": { id: "flag-tl", name: "Timor-Leste Flag", keywords: ["tl", "timor", "leste", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f1", native: "\u{1F1F9}\u{1F1F1}" }], version: 2 }, "flag-tm": { id: "flag-tm", name: "Turkmenistan Flag", keywords: ["tm", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f2", native: "\u{1F1F9}\u{1F1F2}" }], version: 2 }, "flag-tn": { id: "flag-tn", name: "Tunisia Flag", keywords: ["tn", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f3", native: "\u{1F1F9}\u{1F1F3}" }], version: 2 }, "flag-to": { id: "flag-to", name: "Tonga Flag", keywords: ["to", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f4", native: "\u{1F1F9}\u{1F1F4}" }], version: 2 }, "flag-tr": { id: "flag-tr", name: "Turkey Flag", keywords: ["tr", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f7", native: "\u{1F1F9}\u{1F1F7}" }], version: 2 }, "flag-tt": { id: "flag-tt", name: "Trinidad & Tobago Flag", keywords: ["tt", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1f9", native: "\u{1F1F9}\u{1F1F9}" }], version: 2 }, "flag-tv": { id: "flag-tv", name: "Tuvalu Flag", keywords: ["tv", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1fb", native: "\u{1F1F9}\u{1F1FB}" }], version: 2 }, "flag-tw": { id: "flag-tw", name: "Taiwan Flag", keywords: ["tw", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1fc", native: "\u{1F1F9}\u{1F1FC}" }], version: 2 }, "flag-tz": { id: "flag-tz", name: "Tanzania Flag", keywords: ["tz", "united", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1f9-1f1ff", native: "\u{1F1F9}\u{1F1FF}" }], version: 2 }, "flag-ua": { id: "flag-ua", name: "Ukraine Flag", keywords: ["ua", "nation", "country", "banner"], skins: [{ unified: "1f1fa-1f1e6", native: "\u{1F1FA}\u{1F1E6}" }], version: 2 }, "flag-ug": { id: "flag-ug", name: "Uganda Flag", keywords: ["ug", "nation", "country", "banner"], skins: [{ unified: "1f1fa-1f1ec", native: "\u{1F1FA}\u{1F1EC}" }], version: 2 }, "flag-um": { id: "flag-um", name: "U.s. Outlying Islands Flag", keywords: ["um", "u", "s"], skins: [{ unified: "1f1fa-1f1f2", native: "\u{1F1FA}\u{1F1F2}" }], version: 2 }, "flag-un": { id: "flag-un", name: "United Nations Flag", keywords: ["un", "banner"], skins: [{ unified: "1f1fa-1f1f3", native: "\u{1F1FA}\u{1F1F3}" }], version: 4 }, us: { id: "us", name: "United States Flag", keywords: ["us", "america", "nation", "country", "banner"], skins: [{ unified: "1f1fa-1f1f8", native: "\u{1F1FA}\u{1F1F8}" }], version: 1 }, "flag-uy": { id: "flag-uy", name: "Uruguay Flag", keywords: ["uy", "nation", "country", "banner"], skins: [{ unified: "1f1fa-1f1fe", native: "\u{1F1FA}\u{1F1FE}" }], version: 2 }, "flag-uz": { id: "flag-uz", name: "Uzbekistan Flag", keywords: ["uz", "nation", "country", "banner"], skins: [{ unified: "1f1fa-1f1ff", native: "\u{1F1FA}\u{1F1FF}" }], version: 2 }, "flag-va": { id: "flag-va", name: "Vatican City Flag", keywords: ["va", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1e6", native: "\u{1F1FB}\u{1F1E6}" }], version: 2 }, "flag-vc": { id: "flag-vc", name: "St. Vincent & Grenadines Flag", keywords: ["vc", "st", "saint", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1e8", native: "\u{1F1FB}\u{1F1E8}" }], version: 2 }, "flag-ve": { id: "flag-ve", name: "Venezuela Flag", keywords: ["ve", "bolivarian", "republic", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1ea", native: "\u{1F1FB}\u{1F1EA}" }], version: 2 }, "flag-vg": { id: "flag-vg", name: "British Virgin Islands Flag", keywords: ["vg", "bvi", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1ec", native: "\u{1F1FB}\u{1F1EC}" }], version: 2 }, "flag-vi": { id: "flag-vi", name: "U.s. Virgin Islands Flag", keywords: ["vi", "u", "s", "us", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1ee", native: "\u{1F1FB}\u{1F1EE}" }], version: 2 }, "flag-vn": { id: "flag-vn", name: "Vietnam Flag", keywords: ["vn", "viet", "nam", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1f3", native: "\u{1F1FB}\u{1F1F3}" }], version: 2 }, "flag-vu": { id: "flag-vu", name: "Vanuatu Flag", keywords: ["vu", "nation", "country", "banner"], skins: [{ unified: "1f1fb-1f1fa", native: "\u{1F1FB}\u{1F1FA}" }], version: 2 }, "flag-wf": { id: "flag-wf", name: "Wallis & Futuna Flag", keywords: ["wf", "nation", "country", "banner"], skins: [{ unified: "1f1fc-1f1eb", native: "\u{1F1FC}\u{1F1EB}" }], version: 2 }, "flag-ws": { id: "flag-ws", name: "Samoa Flag", keywords: ["ws", "nation", "country", "banner"], skins: [{ unified: "1f1fc-1f1f8", native: "\u{1F1FC}\u{1F1F8}" }], version: 2 }, "flag-xk": { id: "flag-xk", name: "Kosovo Flag", keywords: ["xk", "nation", "country", "banner"], skins: [{ unified: "1f1fd-1f1f0", native: "\u{1F1FD}\u{1F1F0}" }], version: 2 }, "flag-ye": { id: "flag-ye", name: "Yemen Flag", keywords: ["ye", "nation", "country", "banner"], skins: [{ unified: "1f1fe-1f1ea", native: "\u{1F1FE}\u{1F1EA}" }], version: 2 }, "flag-yt": { id: "flag-yt", name: "Mayotte Flag", keywords: ["yt", "nation", "country", "banner"], skins: [{ unified: "1f1fe-1f1f9", native: "\u{1F1FE}\u{1F1F9}" }], version: 2 }, "flag-za": { id: "flag-za", name: "South Africa Flag", keywords: ["za", "nation", "country", "banner"], skins: [{ unified: "1f1ff-1f1e6", native: "\u{1F1FF}\u{1F1E6}" }], version: 2 }, "flag-zm": { id: "flag-zm", name: "Zambia Flag", keywords: ["zm", "nation", "country", "banner"], skins: [{ unified: "1f1ff-1f1f2", native: "\u{1F1FF}\u{1F1F2}" }], version: 2 }, "flag-zw": { id: "flag-zw", name: "Zimbabwe Flag", keywords: ["zw", "nation", "country", "banner"], skins: [{ unified: "1f1ff-1f1fc", native: "\u{1F1FF}\u{1F1FC}" }], version: 2 }, "flag-england": { id: "flag-england", name: "England Flag", keywords: ["english"], skins: [{ unified: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f", native: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}" }], version: 5 }, "flag-scotland": { id: "flag-scotland", name: "Scotland Flag", keywords: ["scottish"], skins: [{ unified: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f", native: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}" }], version: 5 }, "flag-wales": { id: "flag-wales", name: "Wales Flag", keywords: ["welsh"], skins: [{ unified: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f", native: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}" }], version: 5 } }, aliases: { satisfied: "laughing", grinning_face_with_star_eyes: "star-struck", grinning_face_with_one_large_and_one_small_eye: "zany_face", smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth", face_with_finger_covering_closed_lips: "shushing_face", face_with_one_eyebrow_raised: "face_with_raised_eyebrow", face_with_open_mouth_vomiting: "face_vomiting", shocked_face_with_exploding_head: "exploding_head", serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth", poop: "hankey", shit: "hankey", collision: "boom", raised_hand: "hand", hand_with_index_and_middle_fingers_crossed: "crossed_fingers", sign_of_the_horns: "the_horns", reversed_hand_with_middle_finger_extended: "middle_finger", thumbsup: "+1", thumbsdown: "-1", punch: "facepunch", mother_christmas: "mrs_claus", running: "runner", "man-with-bunny-ears-partying": "men-with-bunny-ears-partying", "woman-with-bunny-ears-partying": "women-with-bunny-ears-partying", women_holding_hands: "two_women_holding_hands", woman_and_man_holding_hands: "man_and_woman_holding_hands", couple: "man_and_woman_holding_hands", men_holding_hands: "two_men_holding_hands", paw_prints: "feet", flipper: "dolphin", honeybee: "bee", lady_beetle: "ladybug", cooking: "fried_egg", knife: "hocho", red_car: "car", sailboat: "boat", waxing_gibbous_moon: "moon", sun_small_cloud: "mostly_sunny", sun_behind_cloud: "barely_sunny", sun_behind_rain_cloud: "partly_sunny_rain", lightning_cloud: "lightning", tornado_cloud: "tornado", tshirt: "shirt", shoe: "mans_shoe", telephone: "phone", lantern: "izakaya_lantern", open_book: "book", envelope: "email", pencil: "memo", heavy_exclamation_mark: "exclamation", staff_of_aesculapius: "medical_symbol", "flag-cn": "cn", "flag-de": "de", "flag-es": "es", "flag-fr": "fr", uk: "gb", "flag-gb": "gb", "flag-it": "it", "flag-jp": "jp", "flag-kr": "kr", "flag-ru": "ru", "flag-us": "us" }, sheet: { cols: 61, rows: 61 } };

// src/icon-picker.ts
var import_obsidian3 = require("obsidian");
var EMOJI_CATEGORY_ICONS = {
  recent: "clock",
  people: "smile",
  nature: "leaf",
  foods: "utensils",
  activity: "dumbbell",
  places: "plane",
  objects: "lightbulb",
  symbols: "shapes",
  flags: "flag"
};
var IconPickerModal = class extends import_obsidian3.Modal {
  constructor(app, plugin, file) {
    super(app);
    this.plugin = plugin;
    this.file = file;
  }
  tab = "emoji";
  query = "";
  category = "recent";
  pickerResizeObserver = null;
  virtualFrame = 0;
  onOpen() {
    this.modalEl.addClass("naitflow-modal", "naitflow-icon-modal");
    this.render();
  }
  onClose() {
    this.teardownVirtualization();
  }
  render() {
    this.teardownVirtualization();
    const content = this.contentEl;
    content.empty();
    const tabs = content.createDiv("naitflow-tabs");
    this.addTab(tabs, "emoji", t("emoji"));
    this.addTab(tabs, "icons", t("icons"));
    this.addTab(tabs, "upload", t("upload"));
    this.addTab(tabs, "link", t("link"));
    const clear = tabs.createEl("button", { cls: "naitflow-tab naitflow-tab--clear" });
    const clearIcon = clear.createSpan("naitflow-tab-icon");
    (0, import_obsidian3.setIcon)(clearIcon, "circle-minus");
    clear.createSpan({ cls: "naitflow-tab-clear-label", text: t("clear") });
    clear.onclick = () => void this.choose(null);
    if (this.tab === "emoji" || this.tab === "icons") this.renderGrid(content);
    else if (this.tab === "upload") this.renderUpload(content);
    else this.renderLink(content);
  }
  addTab(parent, id, label) {
    const button = parent.createEl("button", { cls: `naitflow-tab${this.tab === id ? " is-active" : ""}` });
    button.createSpan({ text: label });
    button.onclick = () => {
      this.tab = id;
      this.query = "";
      this.render();
    };
  }
  renderGrid(content) {
    const tools = content.createDiv("naitflow-picker-tools");
    const searchWrap = tools.createDiv("naitflow-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    (0, import_obsidian3.setIcon)(searchIcon, "search");
    const search = searchWrap.createEl("input", { cls: "naitflow-search", type: "search", placeholder: this.tab === "emoji" ? t("searchEmoji") : t("searchIcons"), value: this.query });
    search.oninput = () => {
      this.query = search.value;
      this.renderGridBody(content);
    };
    this.renderGridBody(content);
    window.setTimeout(() => search.focus(), 0);
  }
  renderGridBody(content) {
    this.teardownVirtualization();
    let old = content.querySelector(".naitflow-picker-body");
    old?.remove();
    old = content.querySelector(".naitflow-categories");
    old?.remove();
    const body = content.createDiv("naitflow-picker-body");
    const query = this.query.trim().toLocaleLowerCase();
    if (this.tab === "emoji") this.renderEmojiBrowser(content, body, query);
    else this.renderIconBrowser(body, query);
  }
  renderEmojiBrowser(content, body, query) {
    const data = native_default;
    const allRecords = Object.values(data.emojis);
    const byNative = /* @__PURE__ */ new Map();
    for (const record of allRecords) {
      const native = record.skins[0]?.native;
      if (native) byNative.set(native, record);
    }
    const matches = (record) => !query || `${record.id} ${record.name} ${(record.keywords ?? []).join(" ")}`.toLocaleLowerCase().includes(query);
    const sections = [];
    const recentItems = [];
    const seenRecent = /* @__PURE__ */ new Set();
    for (const native of this.plugin.settings.recentEmoji) {
      if (seenRecent.has(native)) continue;
      const record = byNative.get(native);
      if (!record || !matches(record)) continue;
      seenRecent.add(native);
      recentItems.push({ record, native });
    }
    if (recentItems.length) sections.push({ id: "recent", name: t("recent"), items: recentItems, top: 0, end: 0 });
    for (const source of data.categories) {
      const items = [];
      for (const id of source.emojis) {
        const record = data.emojis[id];
        const native = record?.skins[0]?.native;
        if (!record || !native || !matches(record)) continue;
        items.push({ record, native });
      }
      if (items.length) sections.push({ id: source.id, name: categoryName(source.id, source.name), items, top: 0, end: 0 });
    }
    const categories = content.createDiv("naitflow-categories");
    const categoryButtons = /* @__PURE__ */ new Map();
    const options = [{ id: "recent", name: t("recent") }, ...data.categories.map((item) => ({ id: item.id, name: categoryName(item.id, item.name) }))];
    const surface = body.createDiv("naitflow-virtual-surface");
    let currentSections = sections;
    const updatePressed = () => {
      for (const [id, button] of categoryButtons) {
        const active = id === this.category;
        button.toggleClass("is-active", active);
        button.setAttr("aria-pressed", String(active));
      }
    };
    for (const option of options) {
      const button = categories.createEl("button", { attr: { "aria-label": option.name, "aria-pressed": "false" } });
      (0, import_obsidian3.setIcon)(button, EMOJI_CATEGORY_ICONS[option.id] ?? "circle");
      categoryButtons.set(option.id, button);
      button.disabled = !sections.some((section) => section.id === option.id);
      button.onclick = () => {
        const section = currentSections.find((item) => item.id === option.id);
        if (!section) return;
        this.category = option.id;
        body.scrollTo({ top: section.top });
        updatePressed();
      };
    }
    body.after(categories);
    let blocks = [];
    let lastRange = "";
    const rebuildLayout = () => {
      const columns = this.columnCount(body);
      const nextBlocks = [];
      let top = 2;
      for (const section of sections) {
        section.top = top;
        nextBlocks.push({ kind: "heading", top, height: 24, section });
        top += 24;
        for (let index = 0; index < section.items.length; index += columns) {
          nextBlocks.push({ kind: "emoji-row", top, height: 40, section, items: section.items.slice(index, index + columns) });
          top += 42;
        }
        top += 6;
        section.end = top;
      }
      currentSections = sections;
      blocks = nextBlocks;
      surface.style.height = `${Math.max(top + 2, 80)}px`;
      lastRange = "";
      renderVisible();
    };
    const renderVisible = () => {
      const viewportTop = body.scrollTop;
      const viewportBottom = viewportTop + body.clientHeight;
      const visible = blocks.filter((block) => block.top + block.height >= viewportTop - 120 && block.top <= viewportBottom + 120);
      const range = visible.map((block) => `${block.kind}:${block.top}`).join("|");
      if (range !== lastRange) {
        lastRange = range;
        surface.empty();
        for (const block of visible) {
          if (block.kind === "heading") {
            const heading = surface.createDiv({ cls: "naitflow-virtual-heading", text: block.section.name });
            heading.style.top = `${block.top}px`;
            continue;
          }
          if (block.kind !== "emoji-row") continue;
          const row = surface.createDiv("naitflow-virtual-row");
          row.style.top = `${block.top}px`;
          row.style.gridTemplateColumns = `repeat(${this.columnCount(body)}, minmax(0, 1fr))`;
          for (const item of block.items) {
            const button = row.createEl("button", { cls: "naitflow-emoji-button", attr: { "aria-label": item.record.name } });
            button.createSpan({ cls: "naitflow-emoji", text: item.native });
            button.onclick = () => void this.choose(`emoji:${item.native}`);
          }
        }
      }
      const active = [...sections].reverse().find((section) => section.top <= viewportTop + 28) ?? sections[0];
      if (active && this.category !== active.id) {
        this.category = active.id;
        updatePressed();
      }
    };
    if (!sections.length) {
      surface.style.height = "80px";
      surface.createDiv({ cls: "naitflow-empty", text: t("nothingFound") });
    } else {
      if (!sections.some((section) => section.id === this.category)) this.category = sections[0]?.id ?? "recent";
      updatePressed();
      rebuildLayout();
      body.onscroll = () => this.scheduleVirtualRender(renderVisible);
      this.pickerResizeObserver = new ResizeObserver(rebuildLayout);
      this.pickerResizeObserver.observe(body);
    }
  }
  renderIconBrowser(body, query) {
    const ids = (0, import_obsidian3.getIconIds)().filter((id) => !query || id.toLocaleLowerCase().includes(query));
    const recent = new Set(this.plugin.settings.recentIcons);
    ids.sort((a, b) => Number(recent.has(b)) - Number(recent.has(a)) || a.localeCompare(b));
    const surface = body.createDiv("naitflow-virtual-surface");
    let blocks = [];
    let lastRange = "";
    const rebuildLayout = () => {
      const columns = this.columnCount(body);
      const nextBlocks = [];
      let top = 2;
      for (let index = 0; index < ids.length; index += columns) {
        nextBlocks.push({ kind: "icon-row", top, height: 40, ids: ids.slice(index, index + columns) });
        top += 42;
      }
      blocks = nextBlocks;
      surface.style.height = `${Math.max(top + 2, 80)}px`;
      lastRange = "";
      renderVisible();
    };
    const renderVisible = () => {
      const viewportTop = body.scrollTop;
      const viewportBottom = viewportTop + body.clientHeight;
      const visible = blocks.filter((block) => block.kind === "icon-row" && block.top + block.height >= viewportTop - 120 && block.top <= viewportBottom + 120);
      const range = visible.map((block) => block.top).join("|");
      if (range === lastRange) return;
      lastRange = range;
      surface.empty();
      for (const block of visible) {
        if (block.kind !== "icon-row") continue;
        const row = surface.createDiv("naitflow-virtual-row");
        row.style.top = `${block.top}px`;
        row.style.gridTemplateColumns = `repeat(${this.columnCount(body)}, minmax(0, 1fr))`;
        for (const id of block.ids) {
          const button = row.createEl("button", { cls: "naitflow-lucide-button", attr: { "aria-label": id } });
          (0, import_obsidian3.setIcon)(button, id);
          button.onclick = () => void this.choose(`lucide:${id}`);
        }
      }
    };
    if (!ids.length) {
      surface.style.height = "80px";
      surface.createDiv({ cls: "naitflow-empty", text: t("nothingFound") });
      return;
    }
    rebuildLayout();
    body.onscroll = () => this.scheduleVirtualRender(renderVisible);
    this.pickerResizeObserver = new ResizeObserver(rebuildLayout);
    this.pickerResizeObserver.observe(body);
  }
  columnCount(body) {
    const available = Math.max(40, body.clientWidth - 24);
    return Math.max(1, Math.floor((available + 2) / 42));
  }
  scheduleVirtualRender(render) {
    window.cancelAnimationFrame(this.virtualFrame);
    this.virtualFrame = window.requestAnimationFrame(render);
  }
  teardownVirtualization() {
    this.pickerResizeObserver?.disconnect();
    this.pickerResizeObserver = null;
    window.cancelAnimationFrame(this.virtualFrame);
    this.virtualFrame = 0;
  }
  renderUpload(content) {
    const wrap = content.createDiv("naitflow-upload");
    wrap.createEl("p", { text: t("uploadIconHint") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("chooseImage") });
    const input = wrap.createEl("input", { type: "file", attr: { accept: "image/png,image/jpeg,image/webp,image/gif,image/svg+xml" } });
    input.hidden = true;
    button.onclick = () => input.click();
    input.onchange = () => {
      const picked = input.files?.[0];
      if (picked) void this.saveBrowserFile(picked);
    };
  }
  renderLink(content) {
    const wrap = content.createDiv("naitflow-link-form naitflow-link-form--stacked");
    const input = wrap.createEl("input", { type: "url", placeholder: t("imageUrlPlaceholder") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("set") });
    wrap.createEl("p", { cls: "naitflow-link-hint", text: t("directImageHint") });
    button.disabled = true;
    input.oninput = () => {
      button.disabled = !input.value.trim();
    };
    const submit = () => {
      if (!button.disabled) void this.downloadUrl(input.value);
    };
    button.onclick = submit;
    input.onkeydown = (event) => {
      if (event.key === "Enter") submit();
    };
  }
  async saveBrowserFile(file) {
    try {
      const folder = `${this.plugin.settings.assetsFolder}/Icons`;
      await ensureFolder(this.app, folder);
      const ext = file.name.split(".").pop() ?? extensionFromMime(file.type);
      const path = uniqueAssetPath(this.app, folder, file.name.replace(/\.[^.]+$/, ""), ext);
      await this.app.vault.createBinary(path, await file.arrayBuffer());
      await this.choose(`image:${path}`);
    } catch (error) {
      new import_obsidian3.Notice(t("saveIconFailed", { error: errorMessage(error) }));
    }
  }
  async downloadUrl(raw) {
    try {
      const url = new URL(raw.trim());
      if (!/^https?:$/.test(url.protocol)) throw new Error(t("httpOnly"));
      const response = await (0, import_obsidian3.requestUrl)({ url: url.toString() });
      const mime = response.headers["content-type"] ?? "image/png";
      if (!mime.startsWith("image/")) throw new Error(t("notImage"));
      const folder = `${this.plugin.settings.assetsFolder}/Icons`;
      await ensureFolder(this.app, folder);
      const name = decodeURIComponent(url.pathname.split("/").pop() || "icon").replace(/\.[^.]+$/, "");
      const path = uniqueAssetPath(this.app, folder, name, extensionFromMime(mime));
      await this.app.vault.createBinary(path, response.arrayBuffer);
      await this.choose(`image:${path}`);
    } catch (error) {
      new import_obsidian3.Notice(t("downloadIconFailed", { error: errorMessage(error) }));
    }
  }
  async choose(value) {
    await setField(this.app, this.file, FIELDS.icon, value);
    if (value?.startsWith("emoji:")) this.plugin.pushRecent("emoji", value.slice(6));
    if (value?.startsWith("lucide:")) this.plugin.pushRecent("icons", value.slice(7));
    await this.plugin.saveSettings();
    this.plugin.refreshUi();
    this.close();
  }
};
function categoryName(id, fallback) {
  const names = { people: t("people"), nature: t("animals"), foods: t("food"), activity: t("activity"), places: t("places"), objects: t("objects"), symbols: t("symbols"), flags: t("flags") };
  return names[id] ?? fallback;
}
function extensionFromMime(mime) {
  if (mime.includes("svg")) return "svg";
  if (mime.includes("jpeg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  return "png";
}
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

// src/cover-picker.ts
var NASA_ARCHIVE_COVER_ROOT = "presets/covers/nasa";
var ARTEMIS_COVER_ROOT = "presets/covers/artemis-ii";
var WEBB_COVER_ROOT = "presets/covers/webb";
var MET_HUDSON_COVER_ROOT = "presets/covers/met-hudson";
var MET_JAPANESE_COVER_ROOT = "presets/covers/met-japanese";
var COLOR_GRADIENT_COVER_ROOT = "presets/covers/gradients";
var COLOR_GRADIENT_COVERS = [
  { file: "solid-red.svg", title: t("red") },
  { file: "solid-yellow.svg", title: t("yellow") },
  { file: "solid-blue.svg", title: t("blue") },
  { file: "solid-beige.svg", title: t("beige") },
  { file: "superfamous-gradient-11.png", title: t("gradient", { number: 11 }) },
  { file: "superfamous-gradient-14.png", title: t("gradient", { number: 14 }) },
  { file: "superfamous-gradient-15.png", title: t("gradient", { number: 15 }) },
  { file: "superfamous-gradient-24.png", title: t("gradient", { number: 24 }) },
  { file: "superfamous-gradient-26.png", title: t("gradient", { number: 26 }) },
  { file: "superfamous-gradient-27.png", title: t("gradient", { number: 27 }) },
  { file: "superfamous-gradient-32.png", title: t("gradient", { number: 32 }) }
];
var ARTEMIS_COVERS = [
  { file: "sls_maf_20260401_artemisiilaunch_03.jpg", title: t("artemisSlsLaunch") },
  { file: "artemis-distant-crescent-earth.jpg", title: "Crescent Earth" },
  { file: "artemis-near-far-moon.jpg", title: "Near Side and Far Side of the Moon" },
  { file: "artemis-shadows-lunar-day.jpg", title: "Shadows at the Edge of Lunar Day" },
  { file: "artemis-vavilov-crater.jpg", title: "Shadows Across Vavilov Crater" },
  { file: "artemis-earthset-orion.jpg", title: "Earthset" },
  { file: "artemis-eclipse.jpg", title: "Artemis II in Eclipse" },
  { file: "artemis-edge-of-darkness.jpg", title: "The Edge of Darkness" },
  { file: "artemis-craters-of-time.jpg", title: "Craters of Time" }
];
var WEBB_COVERS = [
  { file: "webb-cosmic-cliffs-carina.jpg", title: "Cosmic Cliffs in Carina" },
  { file: "webb-stephans-quintet.png", title: "Stephan\u2019s Quintet" },
  { file: "webb-southern-ring-nebula.jpg", title: "Southern Ring Nebula", position: "50% 50%" },
  { file: "webb-first-deep-field.jpg", title: "Webb\u2019s First Deep Field" }
];
var NASA_ARCHIVE_COVERS = [
  { file: "nasa-pillars-of-creation.jpg", title: t("pillarsOfCreation") },
  { file: "nasa-saturn.jpg", title: t("saturn") },
  { file: "nasa-earthrise.jpg", title: t("earthrise") },
  { file: "nasa-hubble-deep-field.jpg", title: "Hubble Deep Field" },
  { file: "nasa-sls-night-launch.jpg", title: t("nightSlsLaunch") },
  { file: "nasa-blue-marble.jpg", title: "Blue Marble" }
];
var MET_HUDSON_COVERS = [
  { file: "hudson-river-scene-kensett.jpg", title: "Hudson River Scene \u2014 John Frederick Kensett" },
  { file: "river-scene-durand.jpg", title: "River Scene \u2014 Asher Brown Durand" },
  { file: "landscape-lagoon-new-rochelle.jpg", title: "Landscape and Lagoon, New Rochelle \u2014 David Johnson" },
  { file: "on-hudson-near-idlewild.jpg", title: "On the Hudson River, Near Idlewild \u2014 Eliza Pratt Greatorex" },
  { file: "hackensack-meadows.jpg", title: "Hackensack Meadows \u2014 Jasper Francis Cropsey" },
  { file: "the-oxbow.jpg", title: "The Oxbow \u2014 Thomas Cole" },
  { file: "heart-of-the-andes.jpg", title: "Heart of the Andes \u2014 Frederic Edwin Church" },
  { file: "the-parthenon.jpg", title: "The Parthenon \u2014 Frederic Edwin Church" }
];
var MET_JAPANESE_COVERS = [
  { file: "woodcuts_1.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 10%" },
  { file: "woodcuts_2.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 80%" },
  { file: "woodcuts_3.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 80%" },
  { file: "woodcuts_4.jpg", title: "Japanese print \u2014 Keisai Eisen", position: "50% 40%" },
  { file: "woodcuts_5.jpg", title: "Japanese print \u2014 Kobayashi Kiyochika", position: "50% 0%" },
  { file: "woodcuts_6.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_7.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 30%" },
  { file: "woodcuts_8.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_9.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 100%" },
  { file: "woodcuts_10.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 10%" },
  { file: "woodcuts_11.jpg", title: "Japanese print \u2014 It\u014D Jakuch\u016B", position: "50% 0%" },
  { file: "woodcuts_13.jpg", title: "Japanese print \u2014 Utagawa Hiroshige", position: "50% 0%" },
  { file: "woodcuts_14.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 40%" },
  { file: "woodcuts_15.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 70%" },
  { file: "woodcuts_16.jpg", title: "Japanese print \u2014 Katsushika Hokusai", position: "50% 0%" },
  { file: "woodcuts_sekka_1.jpg", title: "Japanese print \u2014 Kamisaka Sekka", position: "50% 90%" },
  { file: "woodcuts_sekka_2.jpg", title: "Japanese print \u2014 Kamisaka Sekka", position: "50% 20%" },
  { file: "woodcuts_sekka_3.jpg", title: "Japanese print \u2014 Kamisaka Sekka", position: "50% 80%" }
];
var CoverPickerModal = class extends import_obsidian4.Modal {
  constructor(app, plugin, file) {
    super(app);
    this.plugin = plugin;
    this.file = file;
  }
  tab = "gallery";
  unsplashSearchTimer = null;
  unsplashRequestId = 0;
  unsplashCache = /* @__PURE__ */ new Map();
  onOpen() {
    this.modalEl.addClass("naitflow-modal", "naitflow-cover-modal");
    this.render();
  }
  render() {
    if (this.unsplashSearchTimer !== null) {
      window.clearTimeout(this.unsplashSearchTimer);
      this.unsplashSearchTimer = null;
    }
    this.unsplashRequestId += 1;
    this.contentEl.empty();
    const tabs = this.contentEl.createDiv("naitflow-tabs");
    this.addTab(tabs, "gallery", t("gallery"));
    this.addTab(tabs, "upload", t("upload"));
    this.addTab(tabs, "link", t("link"));
    this.addTab(tabs, "unsplash", "Unsplash", "unsplash");
    const clear = tabs.createEl("button", { cls: "naitflow-tab naitflow-tab--clear" });
    const clearIcon = clear.createSpan("naitflow-tab-icon");
    (0, import_obsidian4.setIcon)(clearIcon, "circle-minus");
    clear.createSpan({ cls: "naitflow-tab-clear-label", text: t("clear") });
    clear.onclick = () => void this.choose(null);
    if (this.tab === "gallery") this.renderGallery();
    if (this.tab === "upload") this.renderUpload();
    if (this.tab === "link") this.renderLink();
    if (this.tab === "unsplash") this.renderUnsplash();
  }
  addTab(parent, id, label, icon) {
    const button = parent.createEl("button", { cls: `naitflow-tab${this.tab === id ? " is-active" : ""}` });
    if (icon) {
      const iconEl = button.createSpan("naitflow-tab-icon");
      if (icon === "unsplash") iconEl.addClass("naitflow-unsplash-mark");
      else (0, import_obsidian4.setIcon)(iconEl, icon);
    }
    button.createSpan({ text: label });
    button.onclick = () => {
      this.tab = id;
      this.render();
    };
  }
  renderGallery() {
    const viewport = this.contentEl.createDiv("naitflow-cover-gallery");
    const gallery = viewport.createDiv("naitflow-cover-gallery-inner");
    this.renderBuiltInGallery(gallery);
    const folder = (0, import_obsidian4.normalizePath)(`${this.plugin.settings.assetsFolder}/Covers`);
    const files = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${folder}/`) && /\.(png|jpe?g|webp|gif|svg)$/i.test(file.path));
    if (!files.length) return;
    gallery.createDiv({ cls: "naitflow-gallery-heading", text: t("myCovers") });
    const grid = gallery.createDiv("naitflow-cover-grid");
    for (const file of files) {
      const button = grid.createEl("button", { attr: { title: file.basename } });
      button.createEl("img", { attr: { src: this.app.vault.getResourcePath(file), alt: file.basename } });
      button.onclick = () => void this.choose(file.path);
    }
  }
  renderBuiltInGallery(parent) {
    if (!this.plugin.manifest.dir) return;
    this.renderBuiltInGroup(
      parent,
      t("colorGradient"),
      "https://cargocollective.com/superfamousimages/36-Gradients",
      COLOR_GRADIENT_COVER_ROOT,
      COLOR_GRADIENT_COVERS
    );
    this.renderBuiltInGroup(parent, "Artemis II", "https://www.nasa.gov/mission/artemis-ii/", ARTEMIS_COVER_ROOT, ARTEMIS_COVERS);
    this.renderBuiltInGroup(parent, "James Webb Telescope", "https://science.nasa.gov/mission/webb/", WEBB_COVER_ROOT, WEBB_COVERS);
    this.renderBuiltInGroup(parent, "NASA Archive", "https://www.flickr.com/photos/nasacommons/", NASA_ARCHIVE_COVER_ROOT, NASA_ARCHIVE_COVERS);
    this.renderBuiltInGroup(parent, "The MET Museum \xB7 Japanese Prints", "https://www.metmuseum.org/art/collection", MET_JAPANESE_COVER_ROOT, MET_JAPANESE_COVERS);
    this.renderBuiltInGroup(parent, "The MET Museum \xB7 Hudson River School", "https://www.metmuseum.org/art/collection", MET_HUDSON_COVER_ROOT, MET_HUDSON_COVERS);
  }
  renderBuiltInGroup(parent, title, href, root, presets) {
    const heading = parent.createEl("a", { cls: "naitflow-gallery-heading naitflow-gallery-heading--link", text: title, href });
    heading.setAttrs({ target: "_blank", rel: "noopener noreferrer" });
    const grid = parent.createDiv("naitflow-cover-grid");
    for (const preset of presets) {
      const sourcePath = (0, import_obsidian4.normalizePath)(`${this.plugin.manifest.dir}/${root}/${preset.file}`);
      const button = grid.createEl("button", { attr: { title: preset.title } });
      const image = button.createEl("img", { attr: { src: this.app.vault.adapter.getResourcePath(sourcePath), alt: preset.title } });
      if (preset.position) image.style.objectPosition = preset.position;
      button.onclick = () => void this.chooseBuiltInCover(root, preset);
    }
  }
  async chooseBuiltInCover(root, preset) {
    try {
      if (!this.plugin.manifest.dir) throw new Error(t("pluginFolderMissing"));
      const folder = (0, import_obsidian4.normalizePath)(`${this.plugin.settings.assetsFolder}/Covers`);
      const targetPath = (0, import_obsidian4.normalizePath)(`${folder}/${preset.file}`);
      await ensureFolder(this.app, folder);
      if (!this.app.vault.getAbstractFileByPath(targetPath)) {
        const sourcePath = (0, import_obsidian4.normalizePath)(`${this.plugin.manifest.dir}/${root}/${preset.file}`);
        await this.app.vault.createBinary(targetPath, await this.app.vault.adapter.readBinary(sourcePath));
      }
      await this.choose(targetPath);
    } catch (error) {
      new import_obsidian4.Notice(t("builtInCoverFailed", { error: errorMessage(error) }));
    }
  }
  renderUpload() {
    const wrap = this.contentEl.createDiv("naitflow-upload");
    wrap.createEl("p", { text: t("uploadCoverHint") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("chooseImage") });
    const input = wrap.createEl("input", { type: "file", attr: { accept: "image/*" } });
    input.hidden = true;
    button.onclick = () => input.click();
    input.onchange = () => {
      const picked = input.files?.[0];
      if (picked) void this.saveBrowserFile(picked);
    };
  }
  renderLink() {
    const wrap = this.contentEl.createDiv("naitflow-link-form naitflow-link-form--stacked");
    const input = wrap.createEl("input", { type: "url", placeholder: t("imageUrlPlaceholder") });
    const button = wrap.createEl("button", { cls: "mod-cta", text: t("set") });
    wrap.createEl("p", { cls: "naitflow-link-hint", text: t("webImageHint") });
    button.disabled = true;
    input.oninput = () => {
      button.disabled = !input.value.trim();
    };
    const submit = () => {
      if (!button.disabled) void this.downloadCover(input.value);
    };
    button.onclick = submit;
    input.onkeydown = (event) => {
      if (event.key === "Enter") submit();
    };
  }
  renderUnsplash() {
    if (!this.plugin.settings.unsplashAccessKey) {
      const box = this.contentEl.createDiv("naitflow-empty");
      box.setText(t("unsplashKeyRequired"));
      return;
    }
    const form = this.contentEl.createDiv("naitflow-link-form");
    const input = form.createEl("input", { type: "search", placeholder: t("searchImages") });
    input.oninput = () => {
      if (this.unsplashSearchTimer !== null) window.clearTimeout(this.unsplashSearchTimer);
      this.unsplashRequestId += 1;
      const query = input.value;
      this.unsplashSearchTimer = window.setTimeout(() => {
        this.unsplashSearchTimer = null;
        void this.searchUnsplash(query);
      }, 400);
    };
    input.onkeydown = (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      if (this.unsplashSearchTimer !== null) {
        window.clearTimeout(this.unsplashSearchTimer);
        this.unsplashSearchTimer = null;
      }
      void this.searchUnsplash(input.value);
    };
    window.setTimeout(() => input.focus(), 0);
    void this.searchUnsplash("");
  }
  async searchUnsplash(query) {
    const normalizedQuery = query.trim();
    const cacheKey = normalizedQuery.toLocaleLowerCase() || "__editorial__";
    const requestId = ++this.unsplashRequestId;
    let result = this.contentEl.querySelector(".naitflow-unsplash-results");
    result?.remove();
    result = this.contentEl.createDiv("naitflow-unsplash-results");
    const renderPhotos = (photos) => {
      result.empty();
      const grid = result.createDiv("naitflow-cover-grid");
      for (const photo of photos) {
        const button = grid.createEl("button", { attr: { title: t("photoBy", { name: photo.user.name }) } });
        button.createEl("img", { attr: { src: photo.urls.small, alt: photo.alt_description ?? "Unsplash cover" } });
        button.createSpan({ text: photo.user.name });
        button.onclick = () => void this.downloadUnsplash(photo);
      }
      if (!photos.length) result.setText(t("nothingFound"));
    };
    const cached = this.unsplashCache.get(cacheKey);
    if (cached) {
      renderPhotos(cached);
      return;
    }
    result.setText(t("loading"));
    try {
      const endpoint = new URL(normalizedQuery ? "https://api.unsplash.com/search/photos" : "https://api.unsplash.com/photos");
      endpoint.searchParams.set("per_page", "24");
      if (normalizedQuery) {
        endpoint.searchParams.set("query", normalizedQuery);
        endpoint.searchParams.set("orientation", "landscape");
      }
      const response = await (0, import_obsidian4.requestUrl)({ url: endpoint.toString(), headers: { Authorization: `Client-ID ${this.plugin.settings.unsplashAccessKey}` } });
      if (requestId !== this.unsplashRequestId) return;
      const photos = normalizedQuery ? response.json.results ?? [] : response.json;
      this.unsplashCache.set(cacheKey, photos);
      renderPhotos(photos);
    } catch (error) {
      if (requestId !== this.unsplashRequestId) return;
      result.setText(t("unsplashError", { error: errorMessage(error) }));
    }
  }
  async downloadUnsplash(photo) {
    try {
      await (0, import_obsidian4.requestUrl)({ url: photo.links.download_location, headers: { Authorization: `Client-ID ${this.plugin.settings.unsplashAccessKey}` } });
      await this.downloadCover(photo.urls.regular, `unsplash-${photo.id}`);
    } catch (error) {
      new import_obsidian4.Notice(t("downloadCoverFailed", { error: errorMessage(error) }));
    }
  }
  async saveBrowserFile(file) {
    try {
      const folder = `${this.plugin.settings.assetsFolder}/Covers`;
      await ensureFolder(this.app, folder);
      const ext = file.name.split(".").pop() ?? extensionFromMime(file.type);
      const path = uniqueAssetPath(this.app, folder, file.name.replace(/\.[^.]+$/, ""), ext);
      await this.app.vault.createBinary(path, await file.arrayBuffer());
      await this.choose(path);
    } catch (error) {
      new import_obsidian4.Notice(t("saveCoverFailed", { error: errorMessage(error) }));
    }
  }
  async downloadCover(raw, preferredName) {
    try {
      const url = new URL(raw.trim());
      if (!/^https?:$/.test(url.protocol)) throw new Error(t("httpOnly"));
      const response = await (0, import_obsidian4.requestUrl)({ url: url.toString() });
      const mime = response.headers["content-type"] ?? "image/jpeg";
      if (!mime.startsWith("image/")) throw new Error(t("notImage"));
      const folder = `${this.plugin.settings.assetsFolder}/Covers`;
      await ensureFolder(this.app, folder);
      const base = preferredName ?? decodeURIComponent(url.pathname.split("/").pop() || "cover").replace(/\.[^.]+$/, "");
      const path = uniqueAssetPath(this.app, folder, base, extensionFromMime(mime));
      await this.app.vault.createBinary(path, response.arrayBuffer);
      await this.choose(path);
    } catch (error) {
      new import_obsidian4.Notice(t("loadCoverFailed", { error: errorMessage(error) }));
    }
  }
  async choose(path) {
    await setField(this.app, this.file, FIELDS.cover, path);
    if (path) await setField(this.app, this.file, FIELDS.coverY, 50);
    this.plugin.refreshUi();
    this.close();
  }
};
function renderCoverImage(app, image, path) {
  image.src = assetUrl(app, path);
}

// src/import-modal.ts
var import_obsidian6 = require("obsidian");

// src/importer.ts
var import_obsidian5 = require("obsidian");

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/deflate.js
var MAX_BITS = 15;
var D_CODES = 30;
var BL_CODES = 19;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var HEAP_SIZE = 2 * L_CODES + 1;
var END_BLOCK = 256;
var MAX_BL_BITS = 7;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var Buf_size = 8 * 2;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_DEFAULT_STRATEGY = 0;
var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_BUF_ERROR = -5;
function extractArray(array) {
  return flatArray(array.map(([length, value]) => new Array(length).fill(value, 0, length)));
}
function flatArray(array) {
  return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatArray(b) : b), []);
}
var _dist_code = [0, 1, 2, 3].concat(...extractArray([
  [2, 4],
  [2, 5],
  [4, 6],
  [4, 7],
  [8, 8],
  [8, 9],
  [16, 10],
  [16, 11],
  [32, 12],
  [32, 13],
  [64, 14],
  [64, 15],
  [2, 0],
  [1, 16],
  [1, 17],
  [2, 18],
  [2, 19],
  [4, 20],
  [4, 21],
  [8, 22],
  [8, 23],
  [16, 24],
  [16, 25],
  [32, 26],
  [32, 27],
  [64, 28],
  [64, 29]
]));
function Tree() {
  const that = this;
  function gen_bitlen(s) {
    const tree = that.dyn_tree;
    const stree = that.stat_desc.static_tree;
    const extra = that.stat_desc.extra_bits;
    const base = that.stat_desc.extra_base;
    const max_length = that.stat_desc.max_length;
    let h;
    let n, m;
    let bits;
    let xbits;
    let f;
    let overflow = 0;
    for (bits = 0; bits <= MAX_BITS; bits++)
      s.bl_count[bits] = 0;
    tree[s.heap[s.heap_max] * 2 + 1] = 0;
    for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1] = bits;
      if (n > that.max_code)
        continue;
      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base)
        xbits = extra[n - base];
      f = tree[n * 2];
      s.opt_len += f * (bits + xbits);
      if (stree)
        s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0)
      return;
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0)
        bits--;
      s.bl_count[bits]--;
      s.bl_count[bits + 1] += 2;
      s.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length; bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > that.max_code)
          continue;
        if (tree[m * 2 + 1] != bits) {
          s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
          tree[m * 2 + 1] = bits;
        }
        n--;
      }
    }
  }
  function bi_reverse(code, len) {
    let res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  }
  function gen_codes(tree, max_code, bl_count) {
    const next_code = [];
    let code = 0;
    let bits;
    let n;
    let len;
    for (bits = 1; bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for (n = 0; n <= max_code; n++) {
      len = tree[n * 2 + 1];
      if (len === 0)
        continue;
      tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
  }
  that.build_tree = function(s) {
    const tree = that.dyn_tree;
    const stree = that.stat_desc.static_tree;
    const elems = that.stat_desc.elems;
    let n, m;
    let max_code = -1;
    let node;
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for (n = 0; n < elems; n++) {
      if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1] = 0;
      }
    }
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2] = 1;
      s.depth[node] = 0;
      s.opt_len--;
      if (stree)
        s.static_len -= stree[node * 2 + 1];
    }
    that.max_code = max_code;
    for (n = Math.floor(s.heap_len / 2); n >= 1; n--)
      s.pqdownheap(tree, n);
    node = elems;
    do {
      n = s.heap[1];
      s.heap[1] = s.heap[s.heap_len--];
      s.pqdownheap(tree, 1);
      m = s.heap[1];
      s.heap[--s.heap_max] = n;
      s.heap[--s.heap_max] = m;
      tree[node * 2] = tree[n * 2] + tree[m * 2];
      s.depth[node] = Math.max(s.depth[n], s.depth[m]) + 1;
      tree[n * 2 + 1] = tree[m * 2 + 1] = node;
      s.heap[1] = node++;
      s.pqdownheap(tree, 1);
    } while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1];
    gen_bitlen(s);
    gen_codes(tree, that.max_code, s.bl_count);
  };
}
Tree._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...extractArray([
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [4, 12],
  [4, 13],
  [4, 14],
  [4, 15],
  [8, 16],
  [8, 17],
  [8, 18],
  [8, 19],
  [16, 20],
  [16, 21],
  [16, 22],
  [16, 23],
  [32, 24],
  [32, 25],
  [32, 26],
  [31, 27],
  [1, 28]
]));
Tree.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
Tree.base_dist = [
  0,
  1,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  768,
  1024,
  1536,
  2048,
  3072,
  4096,
  6144,
  8192,
  12288,
  16384,
  24576
];
Tree.d_code = function(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
Tree.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
Tree.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
Tree.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
Tree.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
  const that = this;
  that.static_tree = static_tree;
  that.extra_bits = extra_bits;
  that.extra_base = extra_base;
  that.elems = elems;
  that.max_length = max_length;
}
var static_ltree2_first_part = [
  12,
  140,
  76,
  204,
  44,
  172,
  108,
  236,
  28,
  156,
  92,
  220,
  60,
  188,
  124,
  252,
  2,
  130,
  66,
  194,
  34,
  162,
  98,
  226,
  18,
  146,
  82,
  210,
  50,
  178,
  114,
  242,
  10,
  138,
  74,
  202,
  42,
  170,
  106,
  234,
  26,
  154,
  90,
  218,
  58,
  186,
  122,
  250,
  6,
  134,
  70,
  198,
  38,
  166,
  102,
  230,
  22,
  150,
  86,
  214,
  54,
  182,
  118,
  246,
  14,
  142,
  78,
  206,
  46,
  174,
  110,
  238,
  30,
  158,
  94,
  222,
  62,
  190,
  126,
  254,
  1,
  129,
  65,
  193,
  33,
  161,
  97,
  225,
  17,
  145,
  81,
  209,
  49,
  177,
  113,
  241,
  9,
  137,
  73,
  201,
  41,
  169,
  105,
  233,
  25,
  153,
  89,
  217,
  57,
  185,
  121,
  249,
  5,
  133,
  69,
  197,
  37,
  165,
  101,
  229,
  21,
  149,
  85,
  213,
  53,
  181,
  117,
  245,
  13,
  141,
  77,
  205,
  45,
  173,
  109,
  237,
  29,
  157,
  93,
  221,
  61,
  189,
  125,
  253,
  19,
  275,
  147,
  403,
  83,
  339,
  211,
  467,
  51,
  307,
  179,
  435,
  115,
  371,
  243,
  499,
  11,
  267,
  139,
  395,
  75,
  331,
  203,
  459,
  43,
  299,
  171,
  427,
  107,
  363,
  235,
  491,
  27,
  283,
  155,
  411,
  91,
  347,
  219,
  475,
  59,
  315,
  187,
  443,
  123,
  379,
  251,
  507,
  7,
  263,
  135,
  391,
  71,
  327,
  199,
  455,
  39,
  295,
  167,
  423,
  103,
  359,
  231,
  487,
  23,
  279,
  151,
  407,
  87,
  343,
  215,
  471,
  55,
  311,
  183,
  439,
  119,
  375,
  247,
  503,
  15,
  271,
  143,
  399,
  79,
  335,
  207,
  463,
  47,
  303,
  175,
  431,
  111,
  367,
  239,
  495,
  31,
  287,
  159,
  415,
  95,
  351,
  223,
  479,
  63,
  319,
  191,
  447,
  127,
  383,
  255,
  511,
  0,
  64,
  32,
  96,
  16,
  80,
  48,
  112,
  8,
  72,
  40,
  104,
  24,
  88,
  56,
  120,
  4,
  68,
  36,
  100,
  20,
  84,
  52,
  116,
  3,
  131,
  67,
  195,
  35,
  163,
  99,
  227
];
var static_ltree2_second_part = extractArray([[144, 8], [112, 9], [24, 7], [8, 8]]);
StaticTree.static_ltree = flatArray(static_ltree2_first_part.map((value, index) => [value, static_ltree2_second_part[index]]));
var static_dtree_first_part = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23];
var static_dtree_second_part = extractArray([[30, 5]]);
StaticTree.static_dtree = flatArray(static_dtree_first_part.map((value, index) => [value, static_dtree_second_part[index]]));
StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);
StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);
var MAX_MEM_LEVEL = 9;
var DEF_MEM_LEVEL = 8;
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  const that = this;
  that.good_length = good_length;
  that.max_lazy = max_lazy;
  that.nice_length = nice_length;
  that.max_chain = max_chain;
  that.func = func;
}
var STORED = 0;
var FAST = 1;
var SLOW = 2;
var config_table = [
  new Config(0, 0, 0, 0, STORED),
  new Config(4, 4, 8, 4, FAST),
  new Config(4, 5, 16, 8, FAST),
  new Config(4, 6, 32, 32, FAST),
  new Config(4, 4, 16, 16, SLOW),
  new Config(8, 16, 32, 32, SLOW),
  new Config(8, 16, 128, 128, SLOW),
  new Config(8, 32, 128, 256, SLOW),
  new Config(32, 128, 258, 1024, SLOW),
  new Config(32, 258, 258, 4096, SLOW)
];
var z_errmsg = [
  "need dictionary",
  // Z_NEED_DICT
  // 2
  "stream end",
  // Z_STREAM_END 1
  "",
  // Z_OK 0
  "",
  // Z_ERRNO (-1)
  "stream error",
  // Z_STREAM_ERROR (-2)
  "data error",
  // Z_DATA_ERROR (-3)
  "",
  // Z_MEM_ERROR (-4)
  "buffer error",
  // Z_BUF_ERROR (-5)
  "",
  // Z_VERSION_ERROR (-6)
  ""
];
var NeedMore = 0;
var BlockDone = 1;
var FinishStarted = 2;
var FinishDone = 3;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var Z_DEFLATED = 8;
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
function smaller(tree, n, m, depth) {
  const tn2 = tree[n * 2];
  const tm2 = tree[m * 2];
  return tn2 < tm2 || tn2 == tm2 && depth[n] <= depth[m];
}
function Deflate() {
  const that = this;
  let strm;
  let status;
  let pending_buf_size;
  let last_flush;
  let w_size;
  let w_bits;
  let w_mask;
  let win;
  let window_size;
  let prev;
  let head;
  let ins_h;
  let hash_size;
  let hash_bits;
  let hash_mask;
  let hash_shift;
  let block_start;
  let match_length;
  let prev_match;
  let match_available;
  let strstart;
  let match_start;
  let lookahead;
  let prev_length;
  let max_chain_length;
  let max_lazy_match;
  let level;
  let strategy;
  let good_match;
  let nice_match;
  let dyn_ltree;
  let dyn_dtree;
  let bl_tree;
  const l_desc = new Tree();
  const d_desc = new Tree();
  const bl_desc = new Tree();
  that.depth = [];
  let lit_bufsize;
  let last_lit;
  let matches;
  let last_eob_len;
  let bi_buf;
  let bi_valid;
  that.bl_count = [];
  that.heap = [];
  dyn_ltree = [];
  dyn_dtree = [];
  bl_tree = [];
  function lm_init() {
    window_size = 2 * w_size;
    head[hash_size - 1] = 0;
    for (let i = 0; i < hash_size - 1; i++) {
      head[i] = 0;
    }
    max_lazy_match = config_table[level].max_lazy;
    good_match = config_table[level].good_length;
    nice_match = config_table[level].nice_length;
    max_chain_length = config_table[level].max_chain;
    strstart = 0;
    block_start = 0;
    lookahead = 0;
    match_length = prev_length = MIN_MATCH - 1;
    match_available = 0;
    ins_h = 0;
  }
  function init_block() {
    let i;
    for (i = 0; i < L_CODES; i++)
      dyn_ltree[i * 2] = 0;
    for (i = 0; i < D_CODES; i++)
      dyn_dtree[i * 2] = 0;
    for (i = 0; i < BL_CODES; i++)
      bl_tree[i * 2] = 0;
    dyn_ltree[END_BLOCK * 2] = 1;
    that.opt_len = that.static_len = 0;
    last_lit = matches = 0;
  }
  function tr_init() {
    l_desc.dyn_tree = dyn_ltree;
    l_desc.stat_desc = StaticTree.static_l_desc;
    d_desc.dyn_tree = dyn_dtree;
    d_desc.stat_desc = StaticTree.static_d_desc;
    bl_desc.dyn_tree = bl_tree;
    bl_desc.stat_desc = StaticTree.static_bl_desc;
    bi_buf = 0;
    bi_valid = 0;
    last_eob_len = 8;
    init_block();
  }
  that.pqdownheap = function(tree, k) {
    const heap = that.heap;
    const v = heap[k];
    let j = k << 1;
    while (j <= that.heap_len) {
      if (j < that.heap_len && smaller(tree, heap[j + 1], heap[j], that.depth)) {
        j++;
      }
      if (smaller(tree, v, heap[j], that.depth))
        break;
      heap[k] = heap[j];
      k = j;
      j <<= 1;
    }
    heap[k] = v;
  };
  function scan_tree(tree, max_code) {
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (let n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen != prevlen)
          bl_tree[curlen * 2]++;
        bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        bl_tree[REPZ_3_10 * 2]++;
      } else {
        bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function build_bl_tree() {
    let max_blindex;
    scan_tree(dyn_ltree, l_desc.max_code);
    scan_tree(dyn_dtree, d_desc.max_code);
    bl_desc.build_tree(that);
    for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (bl_tree[Tree.bl_order[max_blindex] * 2 + 1] !== 0)
        break;
    }
    that.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  }
  function put_byte(p) {
    that.pending_buf[that.pending++] = p;
  }
  function put_short(w) {
    put_byte(w & 255);
    put_byte(w >>> 8 & 255);
  }
  function putShortMSB(b) {
    put_byte(b >> 8 & 255);
    put_byte(b & 255 & 255);
  }
  function send_bits(value, length) {
    let val;
    const len = length;
    if (bi_valid > Buf_size - len) {
      val = value;
      bi_buf |= val << bi_valid & 65535;
      put_short(bi_buf);
      bi_buf = val >>> Buf_size - bi_valid;
      bi_valid += len - Buf_size;
    } else {
      bi_buf |= value << bi_valid & 65535;
      bi_valid += len;
    }
  }
  function send_code(c, tree) {
    const c2 = c * 2;
    send_bits(tree[c2] & 65535, tree[c2 + 1] & 65535);
  }
  function send_tree(tree, max_code) {
    let n;
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(curlen, bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen != prevlen) {
          send_code(curlen, bl_tree);
          count--;
        }
        send_code(REP_3_6, bl_tree);
        send_bits(count - 3, 2);
      } else if (count <= 10) {
        send_code(REPZ_3_10, bl_tree);
        send_bits(count - 3, 3);
      } else {
        send_code(REPZ_11_138, bl_tree);
        send_bits(count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function send_all_trees(lcodes, dcodes, blcodes) {
    let rank;
    send_bits(lcodes - 257, 5);
    send_bits(dcodes - 1, 5);
    send_bits(blcodes - 4, 4);
    for (rank = 0; rank < blcodes; rank++) {
      send_bits(bl_tree[Tree.bl_order[rank] * 2 + 1], 3);
    }
    send_tree(dyn_ltree, lcodes - 1);
    send_tree(dyn_dtree, dcodes - 1);
  }
  function bi_flush() {
    if (bi_valid == 16) {
      put_short(bi_buf);
      bi_buf = 0;
      bi_valid = 0;
    } else if (bi_valid >= 8) {
      put_byte(bi_buf & 255);
      bi_buf >>>= 8;
      bi_valid -= 8;
    }
  }
  function _tr_align() {
    send_bits(STATIC_TREES << 1, 3);
    send_code(END_BLOCK, StaticTree.static_ltree);
    bi_flush();
    if (1 + last_eob_len + 10 - bi_valid < 9) {
      send_bits(STATIC_TREES << 1, 3);
      send_code(END_BLOCK, StaticTree.static_ltree);
      bi_flush();
    }
    last_eob_len = 7;
  }
  function _tr_tally(dist, lc) {
    let out_length, in_length, dcode;
    that.dist_buf[last_lit] = dist;
    that.lc_buf[last_lit] = lc & 255;
    last_lit++;
    if (dist === 0) {
      dyn_ltree[lc * 2]++;
    } else {
      matches++;
      dist--;
      dyn_ltree[(Tree._length_code[lc] + LITERALS + 1) * 2]++;
      dyn_dtree[Tree.d_code(dist) * 2]++;
    }
    if ((last_lit & 8191) === 0 && level > 2) {
      out_length = last_lit * 8;
      in_length = strstart - block_start;
      for (dcode = 0; dcode < D_CODES; dcode++) {
        out_length += dyn_dtree[dcode * 2] * (5 + Tree.extra_dbits[dcode]);
      }
      out_length >>>= 3;
      if (matches < Math.floor(last_lit / 2) && out_length < Math.floor(in_length / 2))
        return true;
    }
    return last_lit == lit_bufsize - 1;
  }
  function compress_block(ltree, dtree) {
    let dist;
    let lc;
    let lx = 0;
    let code;
    let extra;
    if (last_lit !== 0) {
      do {
        dist = that.dist_buf[lx];
        lc = that.lc_buf[lx];
        lx++;
        if (dist === 0) {
          send_code(lc, ltree);
        } else {
          code = Tree._length_code[lc];
          send_code(code + LITERALS + 1, ltree);
          extra = Tree.extra_lbits[code];
          if (extra !== 0) {
            lc -= Tree.base_length[code];
            send_bits(lc, extra);
          }
          dist--;
          code = Tree.d_code(dist);
          send_code(code, dtree);
          extra = Tree.extra_dbits[code];
          if (extra !== 0) {
            dist -= Tree.base_dist[code];
            send_bits(dist, extra);
          }
        }
      } while (lx < last_lit);
    }
    send_code(END_BLOCK, ltree);
    last_eob_len = ltree[END_BLOCK * 2 + 1];
  }
  function bi_windup() {
    if (bi_valid > 8) {
      put_short(bi_buf);
    } else if (bi_valid > 0) {
      put_byte(bi_buf & 255);
    }
    bi_buf = 0;
    bi_valid = 0;
  }
  function copy_block(buf, len, header) {
    bi_windup();
    last_eob_len = 8;
    if (header) {
      put_short(len);
      put_short(~len);
    }
    that.pending_buf.set(win.subarray(buf, buf + len), that.pending);
    that.pending += len;
  }
  function _tr_stored_block(buf, stored_len, eof) {
    send_bits((STORED_BLOCK << 1) + (eof ? 1 : 0), 3);
    copy_block(buf, stored_len, true);
  }
  function _tr_flush_block(buf, stored_len, eof) {
    let opt_lenb, static_lenb;
    let max_blindex = 0;
    if (level > 0) {
      l_desc.build_tree(that);
      d_desc.build_tree(that);
      max_blindex = build_bl_tree();
      opt_lenb = that.opt_len + 3 + 7 >>> 3;
      static_lenb = that.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb)
        opt_lenb = static_lenb;
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf != -1) {
      _tr_stored_block(buf, stored_len, eof);
    } else if (static_lenb == opt_lenb) {
      send_bits((STATIC_TREES << 1) + (eof ? 1 : 0), 3);
      compress_block(StaticTree.static_ltree, StaticTree.static_dtree);
    } else {
      send_bits((DYN_TREES << 1) + (eof ? 1 : 0), 3);
      send_all_trees(l_desc.max_code + 1, d_desc.max_code + 1, max_blindex + 1);
      compress_block(dyn_ltree, dyn_dtree);
    }
    init_block();
    if (eof) {
      bi_windup();
    }
  }
  function flush_block_only(eof) {
    _tr_flush_block(block_start >= 0 ? block_start : -1, strstart - block_start, eof);
    block_start = strstart;
    strm.flush_pending();
  }
  function fill_window() {
    let n, m;
    let p;
    let more;
    do {
      more = window_size - lookahead - strstart;
      if (more === 0 && strstart === 0 && lookahead === 0) {
        more = w_size;
      } else if (more == -1) {
        more--;
      } else if (strstart >= w_size + w_size - MIN_LOOKAHEAD) {
        win.set(win.subarray(w_size, w_size + w_size), 0);
        match_start -= w_size;
        strstart -= w_size;
        block_start -= w_size;
        n = hash_size;
        p = n;
        do {
          m = head[--p] & 65535;
          head[p] = m >= w_size ? m - w_size : 0;
        } while (--n !== 0);
        n = w_size;
        p = n;
        do {
          m = prev[--p] & 65535;
          prev[p] = m >= w_size ? m - w_size : 0;
        } while (--n !== 0);
        more += w_size;
      }
      if (strm.avail_in === 0)
        return;
      n = strm.read_buf(win, strstart + lookahead, more);
      lookahead += n;
      if (lookahead >= MIN_MATCH) {
        ins_h = win[strstart] & 255;
        ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 255) & hash_mask;
      }
    } while (lookahead < MIN_LOOKAHEAD && strm.avail_in !== 0);
  }
  function deflate_stored(flush) {
    let max_block_size = 65535;
    let max_start;
    if (max_block_size > pending_buf_size - 5) {
      max_block_size = pending_buf_size - 5;
    }
    while (true) {
      if (lookahead <= 1) {
        fill_window();
        if (lookahead === 0 && flush == Z_NO_FLUSH)
          return NeedMore;
        if (lookahead === 0)
          break;
      }
      strstart += lookahead;
      lookahead = 0;
      max_start = block_start + max_block_size;
      if (strstart === 0 || strstart >= max_start) {
        lookahead = strstart - max_start;
        strstart = max_start;
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
      if (strstart - block_start >= w_size - MIN_LOOKAHEAD) {
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0)
      return flush == Z_FINISH ? FinishStarted : NeedMore;
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function longest_match(cur_match) {
    let chain_length = max_chain_length;
    let scan = strstart;
    let match;
    let len;
    let best_len = prev_length;
    const limit = strstart > w_size - MIN_LOOKAHEAD ? strstart - (w_size - MIN_LOOKAHEAD) : 0;
    let _nice_match = nice_match;
    const wmask = w_mask;
    const strend = strstart + MAX_MATCH;
    let scan_end1 = win[scan + best_len - 1];
    let scan_end = win[scan + best_len];
    if (prev_length >= good_match) {
      chain_length >>= 2;
    }
    if (_nice_match > lookahead)
      _nice_match = lookahead;
    do {
      match = cur_match;
      if (win[match + best_len] != scan_end || win[match + best_len - 1] != scan_end1 || win[match] != win[scan] || win[++match] != win[scan + 1])
        continue;
      scan += 2;
      match++;
      do {
      } while (win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && win[++scan] == win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        match_start = cur_match;
        best_len = len;
        if (len >= _nice_match)
          break;
        scan_end1 = win[scan + best_len - 1];
        scan_end = win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask] & 65535) > limit && --chain_length !== 0);
    if (best_len <= lookahead)
      return best_len;
    return lookahead;
  }
  function deflate_fast(flush) {
    let hash_head = 0;
    let bflush;
    while (true) {
      if (lookahead < MIN_LOOKAHEAD) {
        fill_window();
        if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
          return NeedMore;
        }
        if (lookahead === 0)
          break;
      }
      if (lookahead >= MIN_MATCH) {
        ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
        hash_head = head[ins_h] & 65535;
        prev[strstart & w_mask] = head[ins_h];
        head[ins_h] = strstart;
      }
      if (hash_head !== 0 && (strstart - hash_head & 65535) <= w_size - MIN_LOOKAHEAD) {
        if (strategy != Z_HUFFMAN_ONLY) {
          match_length = longest_match(hash_head);
        }
      }
      if (match_length >= MIN_MATCH) {
        bflush = _tr_tally(strstart - match_start, match_length - MIN_MATCH);
        lookahead -= match_length;
        if (match_length <= max_lazy_match && lookahead >= MIN_MATCH) {
          match_length--;
          do {
            strstart++;
            ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
            hash_head = head[ins_h] & 65535;
            prev[strstart & w_mask] = head[ins_h];
            head[ins_h] = strstart;
          } while (--match_length !== 0);
          strstart++;
        } else {
          strstart += match_length;
          match_length = 0;
          ins_h = win[strstart] & 255;
          ins_h = (ins_h << hash_shift ^ win[strstart + 1] & 255) & hash_mask;
        }
      } else {
        bflush = _tr_tally(0, win[strstart] & 255);
        lookahead--;
        strstart++;
      }
      if (bflush) {
        flush_block_only(false);
        if (strm.avail_out === 0)
          return NeedMore;
      }
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0) {
      if (flush == Z_FINISH)
        return FinishStarted;
      else
        return NeedMore;
    }
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function deflate_slow(flush) {
    let hash_head = 0;
    let bflush;
    let max_insert;
    while (true) {
      if (lookahead < MIN_LOOKAHEAD) {
        fill_window();
        if (lookahead < MIN_LOOKAHEAD && flush == Z_NO_FLUSH) {
          return NeedMore;
        }
        if (lookahead === 0)
          break;
      }
      if (lookahead >= MIN_MATCH) {
        ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
        hash_head = head[ins_h] & 65535;
        prev[strstart & w_mask] = head[ins_h];
        head[ins_h] = strstart;
      }
      prev_length = match_length;
      prev_match = match_start;
      match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && prev_length < max_lazy_match && (strstart - hash_head & 65535) <= w_size - MIN_LOOKAHEAD) {
        if (strategy != Z_HUFFMAN_ONLY) {
          match_length = longest_match(hash_head);
        }
        if (match_length <= 5 && (strategy == Z_FILTERED || match_length == MIN_MATCH && strstart - match_start > 4096)) {
          match_length = MIN_MATCH - 1;
        }
      }
      if (prev_length >= MIN_MATCH && match_length <= prev_length) {
        max_insert = strstart + lookahead - MIN_MATCH;
        bflush = _tr_tally(strstart - 1 - prev_match, prev_length - MIN_MATCH);
        lookahead -= prev_length - 1;
        prev_length -= 2;
        do {
          if (++strstart <= max_insert) {
            ins_h = (ins_h << hash_shift ^ win[strstart + (MIN_MATCH - 1)] & 255) & hash_mask;
            hash_head = head[ins_h] & 65535;
            prev[strstart & w_mask] = head[ins_h];
            head[ins_h] = strstart;
          }
        } while (--prev_length !== 0);
        match_available = 0;
        match_length = MIN_MATCH - 1;
        strstart++;
        if (bflush) {
          flush_block_only(false);
          if (strm.avail_out === 0)
            return NeedMore;
        }
      } else if (match_available !== 0) {
        bflush = _tr_tally(0, win[strstart - 1] & 255);
        if (bflush) {
          flush_block_only(false);
        }
        strstart++;
        lookahead--;
        if (strm.avail_out === 0)
          return NeedMore;
      } else {
        match_available = 1;
        strstart++;
        lookahead--;
      }
    }
    if (match_available !== 0) {
      bflush = _tr_tally(0, win[strstart - 1] & 255);
      match_available = 0;
    }
    flush_block_only(flush == Z_FINISH);
    if (strm.avail_out === 0) {
      if (flush == Z_FINISH)
        return FinishStarted;
      else
        return NeedMore;
    }
    return flush == Z_FINISH ? FinishDone : BlockDone;
  }
  function deflateReset(strm2) {
    strm2.total_in = strm2.total_out = 0;
    strm2.msg = null;
    that.pending = 0;
    that.pending_out = 0;
    status = BUSY_STATE;
    last_flush = Z_NO_FLUSH;
    tr_init();
    lm_init();
    return Z_OK;
  }
  that.deflateInit = function(strm2, _level, bits, _method, memLevel, _strategy) {
    if (!_method)
      _method = Z_DEFLATED;
    if (!memLevel)
      memLevel = DEF_MEM_LEVEL;
    if (!_strategy)
      _strategy = Z_DEFAULT_STRATEGY;
    strm2.msg = null;
    if (_level == Z_DEFAULT_COMPRESSION)
      _level = 6;
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || _method != Z_DEFLATED || bits < 9 || bits > 15 || _level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
      return Z_STREAM_ERROR;
    }
    strm2.dstate = that;
    w_bits = bits;
    w_size = 1 << w_bits;
    w_mask = w_size - 1;
    hash_bits = memLevel + 7;
    hash_size = 1 << hash_bits;
    hash_mask = hash_size - 1;
    hash_shift = Math.floor((hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    win = new Uint8Array(w_size * 2);
    prev = [];
    head = [];
    lit_bufsize = 1 << memLevel + 6;
    that.pending_buf = new Uint8Array(lit_bufsize * 4);
    pending_buf_size = lit_bufsize * 4;
    that.dist_buf = new Uint16Array(lit_bufsize);
    that.lc_buf = new Uint8Array(lit_bufsize);
    level = _level;
    strategy = _strategy;
    return deflateReset(strm2);
  };
  that.deflateEnd = function() {
    if (status != INIT_STATE && status != BUSY_STATE && status != FINISH_STATE) {
      return Z_STREAM_ERROR;
    }
    that.lc_buf = null;
    that.dist_buf = null;
    that.pending_buf = null;
    head = null;
    prev = null;
    win = null;
    that.dstate = null;
    return status == BUSY_STATE ? Z_DATA_ERROR : Z_OK;
  };
  that.deflateParams = function(strm2, _level, _strategy) {
    let err = Z_OK;
    if (_level == Z_DEFAULT_COMPRESSION) {
      _level = 6;
    }
    if (_level < 0 || _level > 9 || _strategy < 0 || _strategy > Z_HUFFMAN_ONLY) {
      return Z_STREAM_ERROR;
    }
    if (config_table[level].func != config_table[_level].func && strm2.total_in !== 0) {
      err = strm2.deflate(Z_PARTIAL_FLUSH);
    }
    if (level != _level) {
      level = _level;
      max_lazy_match = config_table[level].max_lazy;
      good_match = config_table[level].good_length;
      nice_match = config_table[level].nice_length;
      max_chain_length = config_table[level].max_chain;
    }
    strategy = _strategy;
    return err;
  };
  that.deflateSetDictionary = function(_strm, dictionary, dictLength) {
    let length = dictLength;
    let n, index = 0;
    if (!dictionary || status != INIT_STATE)
      return Z_STREAM_ERROR;
    if (length < MIN_MATCH)
      return Z_OK;
    if (length > w_size - MIN_LOOKAHEAD) {
      length = w_size - MIN_LOOKAHEAD;
      index = dictLength - length;
    }
    win.set(dictionary.subarray(index, index + length), 0);
    strstart = length;
    block_start = length;
    ins_h = win[0] & 255;
    ins_h = (ins_h << hash_shift ^ win[1] & 255) & hash_mask;
    for (n = 0; n <= length - MIN_MATCH; n++) {
      ins_h = (ins_h << hash_shift ^ win[n + (MIN_MATCH - 1)] & 255) & hash_mask;
      prev[n & w_mask] = head[ins_h];
      head[ins_h] = n;
    }
    return Z_OK;
  };
  that.deflate = function(_strm, flush) {
    let i, header, level_flags, old_flush, bstate;
    if (flush > Z_FINISH || flush < 0) {
      return Z_STREAM_ERROR;
    }
    if (!_strm.next_out || !_strm.next_in && _strm.avail_in !== 0 || status == FINISH_STATE && flush != Z_FINISH) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_STREAM_ERROR];
      return Z_STREAM_ERROR;
    }
    if (_strm.avail_out === 0) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    strm = _strm;
    old_flush = last_flush;
    last_flush = flush;
    if (status == INIT_STATE) {
      header = Z_DEFLATED + (w_bits - 8 << 4) << 8;
      level_flags = (level - 1 & 255) >> 1;
      if (level_flags > 3)
        level_flags = 3;
      header |= level_flags << 6;
      if (strstart !== 0)
        header |= PRESET_DICT;
      header += 31 - header % 31;
      status = BUSY_STATE;
      putShortMSB(header);
    }
    if (that.pending !== 0) {
      strm.flush_pending();
      if (strm.avail_out === 0) {
        last_flush = -1;
        return Z_OK;
      }
    } else if (strm.avail_in === 0 && flush <= old_flush && flush != Z_FINISH) {
      strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    if (status == FINISH_STATE && strm.avail_in !== 0) {
      _strm.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR];
      return Z_BUF_ERROR;
    }
    if (strm.avail_in !== 0 || lookahead !== 0 || flush != Z_NO_FLUSH && status != FINISH_STATE) {
      bstate = -1;
      switch (config_table[level].func) {
        case STORED:
          bstate = deflate_stored(flush);
          break;
        case FAST:
          bstate = deflate_fast(flush);
          break;
        case SLOW:
          bstate = deflate_slow(flush);
          break;
        default:
      }
      if (bstate == FinishStarted || bstate == FinishDone) {
        status = FINISH_STATE;
      }
      if (bstate == NeedMore || bstate == FinishStarted) {
        if (strm.avail_out === 0) {
          last_flush = -1;
        }
        return Z_OK;
      }
      if (bstate == BlockDone) {
        if (flush == Z_PARTIAL_FLUSH) {
          _tr_align();
        } else {
          _tr_stored_block(0, 0, false);
          if (flush == Z_FULL_FLUSH) {
            for (i = 0; i < hash_size; i++)
              head[i] = 0;
          }
        }
        strm.flush_pending();
        if (strm.avail_out === 0) {
          last_flush = -1;
          return Z_OK;
        }
      }
    }
    if (flush != Z_FINISH)
      return Z_OK;
    return Z_STREAM_END;
  };
}
function ZStream() {
  const that = this;
  that.next_in_index = 0;
  that.next_out_index = 0;
  that.avail_in = 0;
  that.total_in = 0;
  that.avail_out = 0;
  that.total_out = 0;
}
ZStream.prototype = {
  deflateInit(level, bits) {
    const that = this;
    that.dstate = new Deflate();
    if (!bits)
      bits = MAX_BITS;
    return that.dstate.deflateInit(that, level, bits);
  },
  deflate(flush) {
    const that = this;
    if (!that.dstate) {
      return Z_STREAM_ERROR;
    }
    return that.dstate.deflate(that, flush);
  },
  deflateEnd() {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    const ret = that.dstate.deflateEnd();
    that.dstate = null;
    return ret;
  },
  deflateParams(level, strategy) {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    return that.dstate.deflateParams(that, level, strategy);
  },
  deflateSetDictionary(dictionary, dictLength) {
    const that = this;
    if (!that.dstate)
      return Z_STREAM_ERROR;
    return that.dstate.deflateSetDictionary(that, dictionary, dictLength);
  },
  // Read a new buffer from the current input stream, update the
  // total number of bytes read. All deflate() input goes through
  // this function so some applications may wish to modify it to avoid
  // allocating a large strm->next_in buffer and copying from it.
  // (See also flush_pending()).
  read_buf(buf, start, size) {
    const that = this;
    let len = that.avail_in;
    if (len > size)
      len = size;
    if (len === 0)
      return 0;
    that.avail_in -= len;
    buf.set(that.next_in.subarray(that.next_in_index, that.next_in_index + len), start);
    that.next_in_index += len;
    that.total_in += len;
    return len;
  },
  // Flush as much pending output as possible. All deflate() output goes
  // through this function so some applications may wish to modify it
  // to avoid allocating a large strm->next_out buffer and copying into it.
  // (See also read_buf()).
  flush_pending() {
    const that = this;
    let len = that.dstate.pending;
    if (len > that.avail_out)
      len = that.avail_out;
    if (len === 0)
      return;
    that.next_out.set(that.dstate.pending_buf.subarray(that.dstate.pending_out, that.dstate.pending_out + len), that.next_out_index);
    that.next_out_index += len;
    that.dstate.pending_out += len;
    that.total_out += len;
    that.avail_out -= len;
    that.dstate.pending -= len;
    if (that.dstate.pending === 0) {
      that.dstate.pending_out = 0;
    }
  }
};
function ZipDeflate(options) {
  const that = this;
  const z = new ZStream();
  const bufsize = getMaximumCompressedSize(options && options.chunkSize ? options.chunkSize : 64 * 1024);
  const flush = Z_NO_FLUSH;
  const buf = new Uint8Array(bufsize);
  let level = options ? options.level : Z_DEFAULT_COMPRESSION;
  if (typeof level == "undefined")
    level = Z_DEFAULT_COMPRESSION;
  z.deflateInit(level);
  z.next_out = buf;
  that.append = function(data, onprogress) {
    let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
    const buffers = [];
    if (!data.length)
      return;
    z.next_in_index = 0;
    z.next_in = data;
    z.avail_in = data.length;
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      err = z.deflate(flush);
      if (err != Z_OK)
        throw new Error("deflating: " + z.msg);
      if (z.next_out_index)
        if (z.next_out_index == bufsize)
          buffers.push(new Uint8Array(buf));
        else
          buffers.push(buf.subarray(0, z.next_out_index));
      bufferSize += z.next_out_index;
      if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
        onprogress(z.next_in_index);
        lastIndex = z.next_in_index;
      }
    } while (z.avail_in > 0 || z.avail_out === 0);
    if (buffers.length > 1) {
      array = new Uint8Array(bufferSize);
      buffers.forEach(function(chunk) {
        array.set(chunk, bufferIndex);
        bufferIndex += chunk.length;
      });
    } else {
      array = buffers[0] ? new Uint8Array(buffers[0]) : new Uint8Array();
    }
    return array;
  };
  that.flush = function() {
    let err, array, bufferIndex = 0, bufferSize = 0;
    const buffers = [];
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      err = z.deflate(Z_FINISH);
      if (err != Z_STREAM_END && err != Z_OK)
        throw new Error("deflating: " + z.msg);
      if (bufsize - z.avail_out > 0)
        buffers.push(buf.slice(0, z.next_out_index));
      bufferSize += z.next_out_index;
    } while (z.avail_in > 0 || z.avail_out === 0);
    z.deflateEnd();
    array = new Uint8Array(bufferSize);
    buffers.forEach(function(chunk) {
      array.set(chunk, bufferIndex);
      bufferIndex += chunk.length;
    });
    return array;
  };
}
function getMaximumCompressedSize(uncompressedSize) {
  return uncompressedSize + 5 * (Math.floor(uncompressedSize / 16383) + 1);
}

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/inflate.js
var MAX_BITS2 = 15;
var Z_OK2 = 0;
var Z_STREAM_END2 = 1;
var Z_NEED_DICT2 = 2;
var Z_STREAM_ERROR2 = -2;
var Z_DATA_ERROR2 = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR2 = -5;
var inflate_mask = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
];
var MANY = 1440;
var Z_NO_FLUSH2 = 0;
var Z_FINISH2 = 4;
var fixed_bl = 9;
var fixed_bd = 5;
var fixed_tl = [
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  192,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  160,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  224,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  144,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  208,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  176,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  240,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  200,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  168,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  232,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  152,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  216,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  184,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  248,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  196,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  164,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  228,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  148,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  212,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  180,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  244,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  204,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  172,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  236,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  156,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  220,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  188,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  252,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  194,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  162,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  226,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  146,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  210,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  178,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  242,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  202,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  170,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  234,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  154,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  218,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  186,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  250,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  198,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  166,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  230,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  150,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  214,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  182,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  246,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  206,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  174,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  238,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  158,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  222,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  190,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  254,
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  193,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  161,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  225,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  145,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  209,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  177,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  241,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  201,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  169,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  233,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  153,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  217,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  185,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  249,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  197,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  165,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  229,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  149,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  213,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  181,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  245,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  205,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  173,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  237,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  157,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  221,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  189,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  253,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  195,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  163,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  227,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  147,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  211,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  179,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  243,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  203,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  171,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  235,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  155,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  219,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  187,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  251,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  199,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  167,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  231,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  151,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  215,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  183,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  247,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  207,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  175,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  239,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  159,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  223,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  191,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  255
];
var fixed_td = [
  80,
  5,
  1,
  87,
  5,
  257,
  83,
  5,
  17,
  91,
  5,
  4097,
  81,
  5,
  5,
  89,
  5,
  1025,
  85,
  5,
  65,
  93,
  5,
  16385,
  80,
  5,
  3,
  88,
  5,
  513,
  84,
  5,
  33,
  92,
  5,
  8193,
  82,
  5,
  9,
  90,
  5,
  2049,
  86,
  5,
  129,
  192,
  5,
  24577,
  80,
  5,
  2,
  87,
  5,
  385,
  83,
  5,
  25,
  91,
  5,
  6145,
  81,
  5,
  7,
  89,
  5,
  1537,
  85,
  5,
  97,
  93,
  5,
  24577,
  80,
  5,
  4,
  88,
  5,
  769,
  84,
  5,
  49,
  92,
  5,
  12289,
  82,
  5,
  13,
  90,
  5,
  3073,
  86,
  5,
  193,
  192,
  5,
  24577
];
var cplens = [
  // Copy lengths for literal codes 257..285
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
var cplext = [
  // Extra bits for literal codes 257..285
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  112,
  112
  // 112==invalid
];
var cpdist = [
  // Copy offsets for distance codes 0..29
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
];
var cpdext = [
  // Extra bits for distance codes
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
];
var BMAX = 15;
function InfTree() {
  const that = this;
  let hn;
  let v;
  let c;
  let r;
  let u;
  let x;
  function huft_build(b, bindex, n, s, d, e2, t2, m, hp, hn2, v2) {
    let a;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    let l;
    let mask;
    let p;
    let q;
    let w;
    let xp;
    let y;
    let z;
    p = 0;
    i = n;
    do {
      c[b[bindex + p]]++;
      p++;
      i--;
    } while (i !== 0);
    if (c[0] == n) {
      t2[0] = -1;
      m[0] = 0;
      return Z_OK2;
    }
    l = m[0];
    for (j = 1; j <= BMAX; j++)
      if (c[j] !== 0)
        break;
    k = j;
    if (l < j) {
      l = j;
    }
    for (i = BMAX; i !== 0; i--) {
      if (c[i] !== 0)
        break;
    }
    g = i;
    if (l > i) {
      l = i;
    }
    m[0] = l;
    for (y = 1 << j; j < i; j++, y <<= 1) {
      if ((y -= c[j]) < 0) {
        return Z_DATA_ERROR2;
      }
    }
    if ((y -= c[i]) < 0) {
      return Z_DATA_ERROR2;
    }
    c[i] += y;
    x[1] = j = 0;
    p = 1;
    xp = 2;
    while (--i !== 0) {
      x[xp] = j += c[p];
      xp++;
      p++;
    }
    i = 0;
    p = 0;
    do {
      if ((j = b[bindex + p]) !== 0) {
        v2[x[j]++] = i;
      }
      p++;
    } while (++i < n);
    n = x[g];
    x[0] = i = 0;
    p = 0;
    h = -1;
    w = -l;
    u[0] = 0;
    q = 0;
    z = 0;
    for (; k <= g; k++) {
      a = c[k];
      while (a-- !== 0) {
        while (k > w + l) {
          h++;
          w += l;
          z = g - w;
          z = z > l ? l : z;
          if ((f = 1 << (j = k - w)) > a + 1) {
            f -= a + 1;
            xp = k;
            if (j < z) {
              while (++j < z) {
                if ((f <<= 1) <= c[++xp])
                  break;
                f -= c[xp];
              }
            }
          }
          z = 1 << j;
          if (hn2[0] + z > MANY) {
            return Z_DATA_ERROR2;
          }
          u[h] = q = /* hp+ */
          hn2[0];
          hn2[0] += z;
          if (h !== 0) {
            x[h] = i;
            r[0] = /* (byte) */
            j;
            r[1] = /* (byte) */
            l;
            j = i >>> w - l;
            r[2] = /* (int) */
            q - u[h - 1] - j;
            hp.set(r, (u[h - 1] + j) * 3);
          } else {
            t2[0] = q;
          }
        }
        r[1] = /* (byte) */
        k - w;
        if (p >= n) {
          r[0] = 128 + 64;
        } else if (v2[p] < s) {
          r[0] = /* (byte) */
          v2[p] < 256 ? 0 : 32 + 64;
          r[2] = v2[p++];
        } else {
          r[0] = /* (byte) */
          e2[v2[p] - s] + 16 + 64;
          r[2] = d[v2[p++] - s];
        }
        f = 1 << k - w;
        for (j = i >>> w; j < z; j += f) {
          hp.set(r, (q + j) * 3);
        }
        for (j = 1 << k - 1; (i & j) !== 0; j >>>= 1) {
          i ^= j;
        }
        i ^= j;
        mask = (1 << w) - 1;
        while ((i & mask) != x[h]) {
          h--;
          w -= l;
          mask = (1 << w) - 1;
        }
      }
    }
    return y !== 0 && g != 1 ? Z_BUF_ERROR2 : Z_OK2;
  }
  function initWorkArea(vsize) {
    let i;
    if (!hn) {
      hn = [];
      v = [];
      c = new Int32Array(BMAX + 1);
      r = [];
      u = new Int32Array(BMAX);
      x = new Int32Array(BMAX + 1);
    }
    if (v.length < vsize) {
      v = [];
    }
    for (i = 0; i < vsize; i++) {
      v[i] = 0;
    }
    for (i = 0; i < BMAX + 1; i++) {
      c[i] = 0;
    }
    for (i = 0; i < 3; i++) {
      r[i] = 0;
    }
    u.set(c.subarray(0, BMAX), 0);
    x.set(c.subarray(0, BMAX + 1), 0);
  }
  that.inflate_trees_bits = function(c2, bb, tb, hp, z) {
    let result;
    initWorkArea(19);
    hn[0] = 0;
    result = huft_build(c2, 0, 19, 19, null, null, tb, bb, hp, hn, v);
    if (result == Z_DATA_ERROR2) {
      z.msg = "oversubscribed dynamic bit lengths tree";
    } else if (result == Z_BUF_ERROR2 || bb[0] === 0) {
      z.msg = "incomplete dynamic bit lengths tree";
      result = Z_DATA_ERROR2;
    }
    return result;
  };
  that.inflate_trees_dynamic = function(nl, nd, c2, bl, bd, tl, td, hp, z) {
    let result;
    initWorkArea(288);
    hn[0] = 0;
    result = huft_build(c2, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
    if (result != Z_OK2 || bl[0] === 0) {
      if (result == Z_DATA_ERROR2) {
        z.msg = "oversubscribed literal/length tree";
      } else if (result != Z_MEM_ERROR) {
        z.msg = "incomplete literal/length tree";
        result = Z_DATA_ERROR2;
      }
      return result;
    }
    initWorkArea(288);
    result = huft_build(c2, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);
    if (result != Z_OK2 || bd[0] === 0 && nl > 257) {
      if (result == Z_DATA_ERROR2) {
        z.msg = "oversubscribed distance tree";
      } else if (result == Z_BUF_ERROR2) {
        z.msg = "incomplete distance tree";
        result = Z_DATA_ERROR2;
      } else if (result != Z_MEM_ERROR) {
        z.msg = "empty distance tree with lengths";
        result = Z_DATA_ERROR2;
      }
      return result;
    }
    return Z_OK2;
  };
}
InfTree.inflate_trees_fixed = function(bl, bd, tl, td) {
  bl[0] = fixed_bl;
  bd[0] = fixed_bd;
  tl[0] = fixed_tl;
  td[0] = fixed_td;
  return Z_OK2;
};
var START = 0;
var LEN = 1;
var LENEXT = 2;
var DIST = 3;
var DISTEXT = 4;
var COPY = 5;
var LIT = 6;
var WASH = 7;
var END = 8;
var BADCODE = 9;
function InfCodes() {
  const that = this;
  let mode2;
  let len = 0;
  let tree;
  let tree_index = 0;
  let need = 0;
  let lit = 0;
  let get = 0;
  let dist = 0;
  let lbits = 0;
  let dbits = 0;
  let ltree;
  let ltree_index = 0;
  let dtree;
  let dtree_index = 0;
  function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
    let t2;
    let tp;
    let tp_index;
    let e2;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let ml;
    let md;
    let c;
    let d;
    let r;
    let tp_index_t_3;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    ml = inflate_mask[bl];
    md = inflate_mask[bd];
    do {
      while (k < 20) {
        n--;
        b |= (z.read_byte(p++) & 255) << k;
        k += 8;
      }
      t2 = b & ml;
      tp = tl;
      tp_index = tl_index;
      tp_index_t_3 = (tp_index + t2) * 3;
      if ((e2 = tp[tp_index_t_3]) === 0) {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        s.win[q++] = /* (byte) */
        tp[tp_index_t_3 + 2];
        m--;
        continue;
      }
      do {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        if ((e2 & 16) !== 0) {
          e2 &= 15;
          c = tp[tp_index_t_3 + 2] + /* (int) */
          (b & inflate_mask[e2]);
          b >>= e2;
          k -= e2;
          while (k < 15) {
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          t2 = b & md;
          tp = td;
          tp_index = td_index;
          tp_index_t_3 = (tp_index + t2) * 3;
          e2 = tp[tp_index_t_3];
          do {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            if ((e2 & 16) !== 0) {
              e2 &= 15;
              while (k < e2) {
                n--;
                b |= (z.read_byte(p++) & 255) << k;
                k += 8;
              }
              d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e2]);
              b >>= e2;
              k -= e2;
              m -= c;
              if (q >= d) {
                r = q - d;
                if (q - r > 0 && 2 > q - r) {
                  s.win[q++] = s.win[r++];
                  s.win[q++] = s.win[r++];
                  c -= 2;
                } else {
                  s.win.set(s.win.subarray(r, r + 2), q);
                  q += 2;
                  r += 2;
                  c -= 2;
                }
              } else {
                r = q - d;
                do {
                  r += s.end;
                } while (r < 0);
                e2 = s.end - r;
                if (c > e2) {
                  c -= e2;
                  if (q - r > 0 && e2 > q - r) {
                    do {
                      s.win[q++] = s.win[r++];
                    } while (--e2 !== 0);
                  } else {
                    s.win.set(s.win.subarray(r, r + e2), q);
                    q += e2;
                    r += e2;
                    e2 = 0;
                  }
                  r = 0;
                }
              }
              if (q - r > 0 && c > q - r) {
                do {
                  s.win[q++] = s.win[r++];
                } while (--c !== 0);
              } else {
                s.win.set(s.win.subarray(r, r + c), q);
                q += c;
                r += c;
                c = 0;
              }
              break;
            } else if ((e2 & 64) === 0) {
              t2 += tp[tp_index_t_3 + 2];
              t2 += b & inflate_mask[e2];
              tp_index_t_3 = (tp_index + t2) * 3;
              e2 = tp[tp_index_t_3];
            } else {
              z.msg = "invalid distance code";
              c = z.avail_in - n;
              c = k >> 3 < c ? k >> 3 : c;
              n += c;
              p -= c;
              k -= c << 3;
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return Z_DATA_ERROR2;
            }
          } while (true);
          break;
        }
        if ((e2 & 64) === 0) {
          t2 += tp[tp_index_t_3 + 2];
          t2 += b & inflate_mask[e2];
          tp_index_t_3 = (tp_index + t2) * 3;
          if ((e2 = tp[tp_index_t_3]) === 0) {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            s.win[q++] = /* (byte) */
            tp[tp_index_t_3 + 2];
            m--;
            break;
          }
        } else if ((e2 & 32) !== 0) {
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_STREAM_END2;
        } else {
          z.msg = "invalid literal/length code";
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_DATA_ERROR2;
        }
      } while (true);
    } while (m >= 258 && n >= 10);
    c = z.avail_in - n;
    c = k >> 3 < c ? k >> 3 : c;
    n += c;
    p -= c;
    k -= c << 3;
    s.bitb = b;
    s.bitk = k;
    z.avail_in = n;
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    s.write = q;
    return Z_OK2;
  }
  that.init = function(bl, bd, tl, tl_index, td, td_index) {
    mode2 = START;
    lbits = /* (byte) */
    bl;
    dbits = /* (byte) */
    bd;
    ltree = tl;
    ltree_index = tl_index;
    dtree = td;
    dtree_index = td_index;
    tree = null;
  };
  that.proc = function(s, z, r) {
    let j;
    let tindex;
    let e2;
    let b = 0;
    let k = 0;
    let p = 0;
    let n;
    let q;
    let m;
    let f;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    while (true) {
      switch (mode2) {
        // waiting for "i:"=input, "o:"=output, "x:"=nothing
        case START:
          if (m >= 258 && n >= 10) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);
            p = z.next_in_index;
            n = z.avail_in;
            b = s.bitb;
            k = s.bitk;
            q = s.write;
            m = q < s.read ? s.read - q - 1 : s.end - q;
            if (r != Z_OK2) {
              mode2 = r == Z_STREAM_END2 ? WASH : BADCODE;
              break;
            }
          }
          need = lbits;
          tree = ltree;
          tree_index = ltree_index;
          mode2 = LEN;
        /* falls through */
        case LEN:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e2 = tree[tindex];
          if (e2 === 0) {
            lit = tree[tindex + 2];
            mode2 = LIT;
            break;
          }
          if ((e2 & 16) !== 0) {
            get = e2 & 15;
            len = tree[tindex + 2];
            mode2 = LENEXT;
            break;
          }
          if ((e2 & 64) === 0) {
            need = e2;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          if ((e2 & 32) !== 0) {
            mode2 = WASH;
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid literal/length code";
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case LENEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          len += b & inflate_mask[j];
          b >>= j;
          k -= j;
          need = dbits;
          tree = dtree;
          tree_index = dtree_index;
          mode2 = DIST;
        /* falls through */
        case DIST:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e2 = tree[tindex];
          if ((e2 & 16) !== 0) {
            get = e2 & 15;
            dist = tree[tindex + 2];
            mode2 = DISTEXT;
            break;
          }
          if ((e2 & 64) === 0) {
            need = e2;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid distance code";
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case DISTEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK2;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          dist += b & inflate_mask[j];
          b >>= j;
          k -= j;
          mode2 = COPY;
        /* falls through */
        case COPY:
          f = q - dist;
          while (f < 0) {
            f += s.end;
          }
          while (len !== 0) {
            if (m === 0) {
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.write = q;
                r = s.inflate_flush(z, r);
                q = s.write;
                m = q < s.read ? s.read - q - 1 : s.end - q;
                if (q == s.end && s.read !== 0) {
                  q = 0;
                  m = q < s.read ? s.read - q - 1 : s.end - q;
                }
                if (m === 0) {
                  s.bitb = b;
                  s.bitk = k;
                  z.avail_in = n;
                  z.total_in += p - z.next_in_index;
                  z.next_in_index = p;
                  s.write = q;
                  return s.inflate_flush(z, r);
                }
              }
            }
            s.win[q++] = s.win[f++];
            m--;
            if (f == s.end)
              f = 0;
            len--;
          }
          mode2 = START;
          break;
        case LIT:
          if (m === 0) {
            if (q == s.end && s.read !== 0) {
              q = 0;
              m = q < s.read ? s.read - q - 1 : s.end - q;
            }
            if (m === 0) {
              s.write = q;
              r = s.inflate_flush(z, r);
              q = s.write;
              m = q < s.read ? s.read - q - 1 : s.end - q;
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
              }
            }
          }
          r = Z_OK2;
          s.win[q++] = /* (byte) */
          lit;
          m--;
          mode2 = START;
          break;
        case WASH:
          if (k > 7) {
            k -= 8;
            n++;
            p--;
          }
          s.write = q;
          r = s.inflate_flush(z, r);
          q = s.write;
          m = q < s.read ? s.read - q - 1 : s.end - q;
          if (s.read != s.write) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            return s.inflate_flush(z, r);
          }
          mode2 = END;
        /* falls through */
        case END:
          r = Z_STREAM_END2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case BADCODE:
          r = Z_DATA_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        default:
          r = Z_STREAM_ERROR2;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
      }
    }
  };
  that.free = function() {
  };
}
var border = [
  // Order of the bit length code lengths
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
];
var TYPE = 0;
var LENS = 1;
var STORED2 = 2;
var TABLE = 3;
var BTREE = 4;
var DTREE = 5;
var CODES = 6;
var DRY = 7;
var DONELOCKS = 8;
var BADBLOCKS = 9;
function InfBlocks(z, w) {
  const that = this;
  let mode2 = TYPE;
  let left = 0;
  let table3 = 0;
  let index = 0;
  let blens;
  const bb = [0];
  const tb = [0];
  const codes = new InfCodes();
  let last = 0;
  let hufts = new Int32Array(MANY * 3);
  const check = 0;
  const inftree = new InfTree();
  that.bitk = 0;
  that.bitb = 0;
  that.win = new Uint8Array(w);
  that.end = w;
  that.read = 0;
  that.write = 0;
  that.reset = function(z2, c) {
    if (c)
      c[0] = check;
    if (mode2 == CODES) {
      codes.free(z2);
    }
    mode2 = TYPE;
    that.bitk = 0;
    that.bitb = 0;
    that.read = that.write = 0;
  };
  that.reset(z, null);
  that.inflate_flush = function(z2, r) {
    let n;
    let p;
    let q;
    p = z2.next_out_index;
    q = that.read;
    n = /* (int) */
    (q <= that.write ? that.write : that.end) - q;
    if (n > z2.avail_out)
      n = z2.avail_out;
    if (n !== 0 && r == Z_BUF_ERROR2)
      r = Z_OK2;
    z2.avail_out -= n;
    z2.total_out += n;
    z2.next_out.set(that.win.subarray(q, q + n), p);
    p += n;
    q += n;
    if (q == that.end) {
      q = 0;
      if (that.write == that.end)
        that.write = 0;
      n = that.write - q;
      if (n > z2.avail_out)
        n = z2.avail_out;
      if (n !== 0 && r == Z_BUF_ERROR2)
        r = Z_OK2;
      z2.avail_out -= n;
      z2.total_out += n;
      z2.next_out.set(that.win.subarray(q, q + n), p);
      p += n;
      q += n;
    }
    z2.next_out_index = p;
    that.read = q;
    return r;
  };
  that.proc = function(z2, r) {
    let t2;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let i;
    p = z2.next_in_index;
    n = z2.avail_in;
    b = that.bitb;
    k = that.bitk;
    q = that.write;
    m = /* (int) */
    q < that.read ? that.read - q - 1 : that.end - q;
    while (true) {
      let bl, bd, tl, td, bl_, bd_, tl_, td_;
      switch (mode2) {
        case TYPE:
          while (k < 3) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          t2 = /* (int) */
          b & 7;
          last = t2 & 1;
          switch (t2 >>> 1) {
            case 0:
              b >>>= 3;
              k -= 3;
              t2 = k & 7;
              b >>>= t2;
              k -= t2;
              mode2 = LENS;
              break;
            case 1:
              bl = [];
              bd = [];
              tl = [[]];
              td = [[]];
              InfTree.inflate_trees_fixed(bl, bd, tl, td);
              codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
              b >>>= 3;
              k -= 3;
              mode2 = CODES;
              break;
            case 2:
              b >>>= 3;
              k -= 3;
              mode2 = TABLE;
              break;
            case 3:
              b >>>= 3;
              k -= 3;
              mode2 = BADBLOCKS;
              z2.msg = "invalid block type";
              r = Z_DATA_ERROR2;
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
          }
          break;
        case LENS:
          while (k < 32) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          if ((~b >>> 16 & 65535) != (b & 65535)) {
            mode2 = BADBLOCKS;
            z2.msg = "invalid stored block lengths";
            r = Z_DATA_ERROR2;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          left = b & 65535;
          b = k = 0;
          mode2 = left !== 0 ? STORED2 : last !== 0 ? DRY : TYPE;
          break;
        case STORED2:
          if (n === 0) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          if (m === 0) {
            if (q == that.end && that.read !== 0) {
              q = 0;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
            }
            if (m === 0) {
              that.write = q;
              r = that.inflate_flush(z2, r);
              q = that.write;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
              if (q == that.end && that.read !== 0) {
                q = 0;
                m = /* (int) */
                q < that.read ? that.read - q - 1 : that.end - q;
              }
              if (m === 0) {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
            }
          }
          r = Z_OK2;
          t2 = left;
          if (t2 > n)
            t2 = n;
          if (t2 > m)
            t2 = m;
          that.win.set(z2.read_buf(p, t2), q);
          p += t2;
          n -= t2;
          q += t2;
          m -= t2;
          if ((left -= t2) !== 0)
            break;
          mode2 = last !== 0 ? DRY : TYPE;
          break;
        case TABLE:
          while (k < 14) {
            if (n !== 0) {
              r = Z_OK2;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          table3 = t2 = b & 16383;
          if ((t2 & 31) > 29 || (t2 >> 5 & 31) > 29) {
            mode2 = BADBLOCKS;
            z2.msg = "too many length or distance symbols";
            r = Z_DATA_ERROR2;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          t2 = 258 + (t2 & 31) + (t2 >> 5 & 31);
          if (!blens || blens.length < t2) {
            blens = [];
          } else {
            for (i = 0; i < t2; i++) {
              blens[i] = 0;
            }
          }
          b >>>= 14;
          k -= 14;
          index = 0;
          mode2 = BTREE;
        /* falls through */
        case BTREE:
          while (index < 4 + (table3 >>> 10)) {
            while (k < 3) {
              if (n !== 0) {
                r = Z_OK2;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            blens[border[index++]] = b & 7;
            b >>>= 3;
            k -= 3;
          }
          while (index < 19) {
            blens[border[index++]] = 0;
          }
          bb[0] = 7;
          t2 = inftree.inflate_trees_bits(blens, bb, tb, hufts, z2);
          if (t2 != Z_OK2) {
            r = t2;
            if (r == Z_DATA_ERROR2) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          index = 0;
          mode2 = DTREE;
        /* falls through */
        case DTREE:
          while (true) {
            t2 = table3;
            if (index >= 258 + (t2 & 31) + (t2 >> 5 & 31)) {
              break;
            }
            let j, c;
            t2 = bb[0];
            while (k < t2) {
              if (n !== 0) {
                r = Z_OK2;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            t2 = hufts[(tb[0] + (b & inflate_mask[t2])) * 3 + 1];
            c = hufts[(tb[0] + (b & inflate_mask[t2])) * 3 + 2];
            if (c < 16) {
              b >>>= t2;
              k -= t2;
              blens[index++] = c;
            } else {
              i = c == 18 ? 7 : c - 14;
              j = c == 18 ? 11 : 3;
              while (k < t2 + i) {
                if (n !== 0) {
                  r = Z_OK2;
                } else {
                  that.bitb = b;
                  that.bitk = k;
                  z2.avail_in = n;
                  z2.total_in += p - z2.next_in_index;
                  z2.next_in_index = p;
                  that.write = q;
                  return that.inflate_flush(z2, r);
                }
                n--;
                b |= (z2.read_byte(p++) & 255) << k;
                k += 8;
              }
              b >>>= t2;
              k -= t2;
              j += b & inflate_mask[i];
              b >>>= i;
              k -= i;
              i = index;
              t2 = table3;
              if (i + j > 258 + (t2 & 31) + (t2 >> 5 & 31) || c == 16 && i < 1) {
                blens = null;
                mode2 = BADBLOCKS;
                z2.msg = "invalid bit length repeat";
                r = Z_DATA_ERROR2;
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              c = c == 16 ? blens[i - 1] : 0;
              do {
                blens[i++] = c;
              } while (--j !== 0);
              index = i;
            }
          }
          tb[0] = -1;
          bl_ = [];
          bd_ = [];
          tl_ = [];
          td_ = [];
          bl_[0] = 9;
          bd_[0] = 6;
          t2 = table3;
          t2 = inftree.inflate_trees_dynamic(257 + (t2 & 31), 1 + (t2 >> 5 & 31), blens, bl_, bd_, tl_, td_, hufts, z2);
          if (t2 != Z_OK2) {
            if (t2 == Z_DATA_ERROR2) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            r = t2;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
          mode2 = CODES;
        /* falls through */
        case CODES:
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          if ((r = codes.proc(that, z2, r)) != Z_STREAM_END2) {
            return that.inflate_flush(z2, r);
          }
          r = Z_OK2;
          codes.free(z2);
          p = z2.next_in_index;
          n = z2.avail_in;
          b = that.bitb;
          k = that.bitk;
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (last === 0) {
            mode2 = TYPE;
            break;
          }
          mode2 = DRY;
        /* falls through */
        case DRY:
          that.write = q;
          r = that.inflate_flush(z2, r);
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (that.read != that.write) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          mode2 = DONELOCKS;
        /* falls through */
        case DONELOCKS:
          r = Z_STREAM_END2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        case BADBLOCKS:
          r = Z_DATA_ERROR2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        default:
          r = Z_STREAM_ERROR2;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
      }
    }
  };
  that.free = function(z2) {
    that.reset(z2, null);
    that.win = null;
    hufts = null;
  };
  that.set_dictionary = function(d, start, n) {
    that.win.set(d.subarray(start, start + n), 0);
    that.read = that.write = n;
  };
  that.sync_point = function() {
    return mode2 == LENS ? 1 : 0;
  };
}
var PRESET_DICT2 = 32;
var Z_DEFLATED2 = 8;
var METHOD = 0;
var FLAG = 1;
var DICT4 = 2;
var DICT3 = 3;
var DICT2 = 4;
var DICT1 = 5;
var DICT0 = 6;
var BLOCKS = 7;
var DONE = 12;
var BAD = 13;
var mark = [0, 0, 255, 255];
function Inflate() {
  const that = this;
  that.mode = 0;
  that.method = 0;
  that.was = [0];
  that.need = 0;
  that.marker = 0;
  that.wbits = 0;
  function inflateReset(z) {
    if (!z || !z.istate)
      return Z_STREAM_ERROR2;
    z.total_in = z.total_out = 0;
    z.msg = null;
    z.istate.mode = BLOCKS;
    z.istate.blocks.reset(z, null);
    return Z_OK2;
  }
  that.inflateEnd = function(z) {
    if (that.blocks)
      that.blocks.free(z);
    that.blocks = null;
    return Z_OK2;
  };
  that.inflateInit = function(z, w) {
    z.msg = null;
    that.blocks = null;
    if (w < 8 || w > 15) {
      that.inflateEnd(z);
      return Z_STREAM_ERROR2;
    }
    that.wbits = w;
    z.istate.blocks = new InfBlocks(z, 1 << w);
    inflateReset(z);
    return Z_OK2;
  };
  that.inflate = function(z, f) {
    let r;
    let b;
    if (!z || !z.istate || !z.next_in)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    f = f == Z_FINISH2 ? Z_BUF_ERROR2 : Z_OK2;
    r = Z_BUF_ERROR2;
    while (true) {
      switch (istate.mode) {
        case METHOD:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          if (((istate.method = z.read_byte(z.next_in_index++)) & 15) != Z_DEFLATED2) {
            istate.mode = BAD;
            z.msg = "unknown compression method";
            istate.marker = 5;
            break;
          }
          if ((istate.method >> 4) + 8 > istate.wbits) {
            istate.mode = BAD;
            z.msg = "invalid win size";
            istate.marker = 5;
            break;
          }
          istate.mode = FLAG;
        /* falls through */
        case FLAG:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          b = z.read_byte(z.next_in_index++) & 255;
          if (((istate.method << 8) + b) % 31 !== 0) {
            istate.mode = BAD;
            z.msg = "incorrect header check";
            istate.marker = 5;
            break;
          }
          if ((b & PRESET_DICT2) === 0) {
            istate.mode = BLOCKS;
            break;
          }
          istate.mode = DICT4;
        /* falls through */
        case DICT4:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need = (z.read_byte(z.next_in_index++) & 255) << 24 & 4278190080;
          istate.mode = DICT3;
        /* falls through */
        case DICT3:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 16 & 16711680;
          istate.mode = DICT2;
        /* falls through */
        case DICT2:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 8 & 65280;
          istate.mode = DICT1;
        /* falls through */
        case DICT1:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += z.read_byte(z.next_in_index++) & 255;
          istate.mode = DICT0;
          return Z_NEED_DICT2;
        case DICT0:
          istate.mode = BAD;
          z.msg = "need dictionary";
          istate.marker = 0;
          return Z_STREAM_ERROR2;
        case BLOCKS:
          r = istate.blocks.proc(z, r);
          if (r == Z_DATA_ERROR2) {
            istate.mode = BAD;
            istate.marker = 0;
            break;
          }
          if (r == Z_OK2) {
            r = f;
          }
          if (r != Z_STREAM_END2) {
            return r;
          }
          r = f;
          istate.blocks.reset(z, istate.was);
          istate.mode = DONE;
        /* falls through */
        case DONE:
          z.avail_in = 0;
          return Z_STREAM_END2;
        case BAD:
          return Z_DATA_ERROR2;
        default:
          return Z_STREAM_ERROR2;
      }
    }
  };
  that.inflateSetDictionary = function(z, dictionary, dictLength) {
    let index = 0, length = dictLength;
    if (!z || !z.istate || z.istate.mode != DICT0)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    if (length >= 1 << istate.wbits) {
      length = (1 << istate.wbits) - 1;
      index = dictLength - length;
    }
    istate.blocks.set_dictionary(dictionary, index, length);
    istate.mode = BLOCKS;
    return Z_OK2;
  };
  that.inflateSync = function(z) {
    let n;
    let p;
    let m;
    let r, w;
    if (!z || !z.istate)
      return Z_STREAM_ERROR2;
    const istate = z.istate;
    if (istate.mode != BAD) {
      istate.mode = BAD;
      istate.marker = 0;
    }
    if ((n = z.avail_in) === 0)
      return Z_BUF_ERROR2;
    p = z.next_in_index;
    m = istate.marker;
    while (n !== 0 && m < 4) {
      if (z.read_byte(p) == mark[m]) {
        m++;
      } else if (z.read_byte(p) !== 0) {
        m = 0;
      } else {
        m = 4 - m;
      }
      p++;
      n--;
    }
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    z.avail_in = n;
    istate.marker = m;
    if (m != 4) {
      return Z_DATA_ERROR2;
    }
    r = z.total_in;
    w = z.total_out;
    inflateReset(z);
    z.total_in = r;
    z.total_out = w;
    istate.mode = BLOCKS;
    return Z_OK2;
  };
  that.inflateSyncPoint = function(z) {
    if (!z || !z.istate || !z.istate.blocks)
      return Z_STREAM_ERROR2;
    return z.istate.blocks.sync_point();
  };
}
function ZStream2() {
}
ZStream2.prototype = {
  inflateInit(bits) {
    const that = this;
    that.istate = new Inflate();
    if (!bits)
      bits = MAX_BITS2;
    return that.istate.inflateInit(that, bits);
  },
  inflate(f) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflate(that, f);
  },
  inflateEnd() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    const ret = that.istate.inflateEnd(that);
    that.istate = null;
    return ret;
  },
  inflateSync() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflateSync(that);
  },
  inflateSetDictionary(dictionary, dictLength) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR2;
    return that.istate.inflateSetDictionary(that, dictionary, dictLength);
  },
  read_byte(start) {
    const that = this;
    return that.next_in[start];
  },
  read_buf(start, size) {
    const that = this;
    return that.next_in.subarray(start, start + size);
  }
};
function ZipInflate(options) {
  const that = this;
  const z = new ZStream2();
  const bufsize = options && options.chunkSize ? Math.floor(options.chunkSize * 2) : 128 * 1024;
  const flush = Z_NO_FLUSH2;
  const buf = new Uint8Array(bufsize);
  let nomoreinput = false;
  z.inflateInit();
  z.next_out = buf;
  that.append = function(data, onprogress) {
    const buffers = [];
    let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
    if (data.length === 0)
      return;
    z.next_in_index = 0;
    z.next_in = data;
    z.avail_in = data.length;
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      if (z.avail_in === 0 && !nomoreinput) {
        z.next_in_index = 0;
        nomoreinput = true;
      }
      err = z.inflate(flush);
      if (nomoreinput && err === Z_BUF_ERROR2) {
        if (z.avail_in !== 0)
          throw new Error("inflating: bad input");
      } else if (err !== Z_OK2 && err !== Z_STREAM_END2)
        throw new Error("inflating: " + z.msg);
      if ((nomoreinput || err === Z_STREAM_END2) && z.avail_in === data.length)
        throw new Error("inflating: bad input");
      if (z.next_out_index)
        if (z.next_out_index === bufsize)
          buffers.push(new Uint8Array(buf));
        else
          buffers.push(buf.subarray(0, z.next_out_index));
      bufferSize += z.next_out_index;
      if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
        onprogress(z.next_in_index);
        lastIndex = z.next_in_index;
      }
    } while (z.avail_in > 0 || z.avail_out === 0);
    if (buffers.length > 1) {
      array = new Uint8Array(bufferSize);
      buffers.forEach(function(chunk) {
        array.set(chunk, bufferIndex);
        bufferIndex += chunk.length;
      });
    } else {
      array = buffers[0] ? new Uint8Array(buffers[0]) : new Uint8Array();
    }
    return array;
  };
  that.flush = function() {
    z.inflateEnd();
  };
}

// node_modules/@zip.js/zip.js/lib/core/constants.js
var MAX_32_BITS = 4294967295;
var MAX_16_BITS = 65535;
var COMPRESSION_METHOD_DEFLATE = 8;
var COMPRESSION_METHOD_STORE = 0;
var COMPRESSION_METHOD_AES = 99;
var LOCAL_FILE_HEADER_SIGNATURE = 67324752;
var SPLIT_ZIP_FILE_SIGNATURE = 134695760;
var CENTRAL_FILE_HEADER_SIGNATURE = 33639248;
var END_OF_CENTRAL_DIR_SIGNATURE = 101010256;
var ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792;
var ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008;
var END_OF_CENTRAL_DIR_LENGTH = 22;
var ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
var ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
var ZIP64_END_OF_CENTRAL_DIR_TOTAL_LENGTH = END_OF_CENTRAL_DIR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH + ZIP64_END_OF_CENTRAL_DIR_LENGTH;
var EXTRAFIELD_TYPE_ZIP64 = 1;
var EXTRAFIELD_TYPE_AES = 39169;
var EXTRAFIELD_TYPE_NTFS = 10;
var EXTRAFIELD_TYPE_NTFS_TAG1 = 1;
var EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589;
var EXTRAFIELD_TYPE_UNICODE_PATH = 28789;
var EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461;
var EXTRAFIELD_TYPE_USDZ = 6534;
var BITFLAG_ENCRYPTED = 1;
var BITFLAG_LEVEL = 6;
var BITFLAG_DATA_DESCRIPTOR = 8;
var BITFLAG_LANG_ENCODING_FLAG = 2048;
var FILE_ATTR_MSDOS_DIR_MASK = 16;
var FILE_ATTR_UNIX_DIR_MASK = 16384;
var FILE_ATTR_UNIX_EXECUTABLE_MASK = 73;
var DIRECTORY_SIGNATURE = "/";
var MAX_DATE = new Date(2107, 11, 31);
var MIN_DATE = new Date(1980, 0, 1);
var UNDEFINED_VALUE = void 0;
var UNDEFINED_TYPE = "undefined";
var FUNCTION_TYPE = "function";

// node_modules/@zip.js/zip.js/lib/core/streams/stream-adapter.js
var StreamAdapter = class {
  constructor(Codec) {
    return class extends TransformStream {
      constructor(_format, options) {
        const codec2 = new Codec(options);
        super({
          transform(chunk, controller) {
            controller.enqueue(codec2.append(chunk));
          },
          flush(controller) {
            const chunk = codec2.flush();
            if (chunk) {
              controller.enqueue(chunk);
            }
          }
        });
      }
    };
  }
};

// node_modules/@zip.js/zip.js/lib/core/configuration.js
var MINIMUM_CHUNK_SIZE = 64;
var maxWorkers = 2;
try {
  if (typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency) {
    maxWorkers = navigator.hardwareConcurrency;
  }
} catch (_) {
}
var DEFAULT_CONFIGURATION = {
  chunkSize: 512 * 1024,
  maxWorkers,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: true,
  useCompressionStream: true,
  workerScripts: UNDEFINED_VALUE,
  CompressionStreamNative: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
  DecompressionStreamNative: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
};
var config = Object.assign({}, DEFAULT_CONFIGURATION);
function getConfiguration() {
  return config;
}
function getChunkSize(config2) {
  return Math.max(config2.chunkSize, MINIMUM_CHUNK_SIZE);
}
function configure(configuration) {
  const {
    baseURL: baseURL2,
    chunkSize,
    maxWorkers: maxWorkers2,
    terminateWorkerTimeout,
    useCompressionStream,
    useWebWorkers,
    Deflate: Deflate2,
    Inflate: Inflate2,
    CompressionStream: CompressionStream2,
    DecompressionStream: DecompressionStream2,
    workerScripts
  } = configuration;
  setIfDefined("baseURL", baseURL2);
  setIfDefined("chunkSize", chunkSize);
  setIfDefined("maxWorkers", maxWorkers2);
  setIfDefined("terminateWorkerTimeout", terminateWorkerTimeout);
  setIfDefined("useCompressionStream", useCompressionStream);
  setIfDefined("useWebWorkers", useWebWorkers);
  if (Deflate2) {
    config.CompressionStream = new StreamAdapter(Deflate2);
  }
  if (Inflate2) {
    config.DecompressionStream = new StreamAdapter(Inflate2);
  }
  setIfDefined("CompressionStream", CompressionStream2);
  setIfDefined("DecompressionStream", DecompressionStream2);
  if (workerScripts !== UNDEFINED_VALUE) {
    const { deflate, inflate } = workerScripts;
    if (deflate || inflate) {
      if (!config.workerScripts) {
        config.workerScripts = {};
      }
    }
    if (deflate) {
      if (!Array.isArray(deflate)) {
        throw new Error("workerScripts.deflate must be an array");
      }
      config.workerScripts.deflate = deflate;
    }
    if (inflate) {
      if (!Array.isArray(inflate)) {
        throw new Error("workerScripts.inflate must be an array");
      }
      config.workerScripts.inflate = inflate;
    }
  }
}
function setIfDefined(propertyName, propertyValue) {
  if (propertyValue !== UNDEFINED_VALUE) {
    config[propertyName] = propertyValue;
  }
}

// node_modules/@zip.js/zip.js/lib/core/util/mime-type.js
var table = {
  "application": {
    "andrew-inset": "ez",
    "annodex": "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    "bbolin": "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    "dsptype": "tsp",
    "ecmascript": [
      "es",
      "ecma"
    ],
    "futuresplash": "spl",
    "hta": "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    "m3g": "m3g",
    "mac-binhex40": "hqx",
    "mathematica": [
      "nb",
      "ma",
      "mb"
    ],
    "msaccess": "mdb",
    "msword": [
      "doc",
      "dot",
      "wiz"
    ],
    "mxf": "mxf",
    "oda": "oda",
    "ogg": "ogx",
    "pdf": "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    "postscript": [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    "rar": "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    "rtf": "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    "xml": [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    "zip": "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    "applixware": "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    "exi": "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    "gxf": "gxf",
    "hyperstudio": "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    "ipfix": "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    "marc": "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    "mbox": "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    "mp21": [
      "m21",
      "mp21"
    ],
    "mp4": "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    "onenote": [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    "oxps": "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    "pkcs10": "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    "pkcs8": "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    "pkixcmp": "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    "sdp": "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    "srgs": "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    "widget": "wgt",
    "winhlp": "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    "yang": "yang",
    "yin+xml": "yin",
    "envoy": "evy",
    "fractals": "fif",
    "internet-property-stream": "acx",
    "olescript": "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    "gzip": [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    "yaml": [
      "yaml",
      "yml"
    ]
  },
  "audio": {
    "amr": "amr",
    "amr-wb": "awb",
    "annodex": "axa",
    "basic": [
      "au",
      "snd"
    ],
    "flac": "flac",
    "midi": [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    "mpeg": [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    "mpegurl": "m3u",
    "ogg": [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    "adpcm": "adp",
    "mp4": "mp4a",
    "s3m": "s3m",
    "silk": "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    "webm": "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    "xm": "xm",
    "aac": "aac",
    "aiff": [
      "aiff",
      "aif",
      "aff"
    ],
    "opus": "opus",
    "wav": "wav"
  },
  "chemical": {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  "font": {
    "otf": "otf",
    "woff": "woff",
    "woff2": "woff2"
  },
  "image": {
    "gif": "gif",
    "ief": "ief",
    "jpeg": [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    "pcx": "pcx",
    "png": "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    "tiff": [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    "bmp": "bmp",
    "cgm": "cgm",
    "g3fax": "g3",
    "ktx": "ktx",
    "prs.btif": "btif",
    "sgi": "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    "webp": "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    "avif": "avifs",
    "heic": [
      "heif",
      "heic"
    ],
    "pjpeg": [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  "message": {
    "rfc822": [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  "model": {
    "iges": [
      "igs",
      "iges"
    ],
    "mesh": [
      "msh",
      "mesh",
      "silo"
    ],
    "vrml": [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  "text": {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    "calendar": [
      "ics",
      "icz",
      "ifb"
    ],
    "css": "css",
    "csv": "csv",
    "h323": "323",
    "html": [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    "iuls": "uls",
    "plain": [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    "richtext": "rtx",
    "scriptlet": [
      "sct",
      "wsc"
    ],
    "texmacs": "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    "n3": "n3",
    "prs.lines.tag": "dsc",
    "sgml": [
      "sgml",
      "sgm"
    ],
    "troff": [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    "turtle": "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    "vcard": "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    "webviewhtml": "htt",
    "javascript": "js",
    "json": "json",
    "markdown": [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  "video": {
    "avif": "avif",
    "3gpp": "3gp",
    "annodex": "axv",
    "dl": "dl",
    "dv": [
      "dif",
      "dv"
    ],
    "fli": "fli",
    "gl": "gl",
    "mpeg": [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    "mp4": [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    "quicktime": [
      "qt",
      "mov"
    ],
    "ogg": "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    "h261": "h261",
    "h263": "h263",
    "h264": "h264",
    "jpeg": "jpgv",
    "jpm": [
      "jpm",
      "jpgm"
    ],
    "mj2": [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    "webm": "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    "mp2t": "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
var mimeTypes = (() => {
  const mimeTypes2 = {};
  for (const type of Object.keys(table)) {
    for (const subtype of Object.keys(table[type])) {
      const value = table[type][subtype];
      if (typeof value == "string") {
        mimeTypes2[value] = type + "/" + subtype;
      } else {
        for (let indexMimeType = 0; indexMimeType < value.length; indexMimeType++) {
          mimeTypes2[value[indexMimeType]] = type + "/" + subtype;
        }
      }
    }
  }
  return mimeTypes2;
})();

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/crc32.js
var table2 = [];
for (let i = 0; i < 256; i++) {
  let t2 = i;
  for (let j = 0; j < 8; j++) {
    if (t2 & 1) {
      t2 = t2 >>> 1 ^ 3988292384;
    } else {
      t2 = t2 >>> 1;
    }
  }
  table2[i] = t2;
}
var Crc32 = class {
  constructor(crc) {
    this.crc = crc || -1;
  }
  append(data) {
    let crc = this.crc | 0;
    for (let offset = 0, length = data.length | 0; offset < length; offset++) {
      crc = crc >>> 8 ^ table2[(crc ^ data[offset]) & 255];
    }
    this.crc = crc;
  }
  get() {
    return ~this.crc;
  }
};

// node_modules/@zip.js/zip.js/lib/core/streams/crc32-stream.js
var Crc32Stream = class extends TransformStream {
  constructor() {
    let stream;
    const crc32 = new Crc32();
    super({
      transform(chunk, controller) {
        crc32.append(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        const value = new Uint8Array(4);
        const dataView = new DataView(value.buffer);
        dataView.setUint32(0, crc32.get());
        stream.value = value;
      }
    });
    stream = this;
  }
};

// node_modules/@zip.js/zip.js/lib/core/util/encode-text.js
function encodeText(value) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    value = unescape(encodeURIComponent(value));
    const result = new Uint8Array(value.length);
    for (let i = 0; i < result.length; i++) {
      result[i] = value.charCodeAt(i);
    }
    return result;
  } else {
    return new TextEncoder().encode(value);
  }
}

// node_modules/@zip.js/zip.js/lib/core/streams/codecs/sjcl.js
var bitArray = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return a1.concat(a2);
    }
    const last = a1[a1.length - 1], shift = bitArray.getPartial(last);
    if (shift === 32) {
      return a1.concat(a2);
    } else {
      return bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    }
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(a) {
    const l = a.length;
    if (l === 0) {
      return 0;
    }
    const x = a[l - 1];
    return (l - 1) * 32 + bitArray.getPartial(x);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(a, len) {
    if (a.length * 32 < len) {
      return a;
    }
    a = a.slice(0, Math.ceil(len / 32));
    const l = a.length;
    len = len & 31;
    if (l > 0 && len) {
      a[l - 1] = bitArray.partial(len, a[l - 1] & 2147483648 >> len - 1, 1);
    }
    return a;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(len, x, _end) {
    if (len === 32) {
      return x;
    }
    return (_end ? x | 0 : x << 32 - len) + len * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(x) {
    return Math.round(x / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(a, shift, carry, out) {
    if (out === void 0) {
      out = [];
    }
    for (; shift >= 32; shift -= 32) {
      out.push(carry);
      carry = 0;
    }
    if (shift === 0) {
      return out.concat(a);
    }
    for (let i = 0; i < a.length; i++) {
      out.push(carry | a[i] >>> shift);
      carry = a[i] << 32 - shift;
    }
    const last2 = a.length ? a[a.length - 1] : 0;
    const shift2 = bitArray.getPartial(last2);
    out.push(bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
    return out;
  }
};
var codec = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(arr) {
      const bl = bitArray.bitLength(arr);
      const byteLength = bl / 8;
      const out = new Uint8Array(byteLength);
      let tmp;
      for (let i = 0; i < byteLength; i++) {
        if ((i & 3) === 0) {
          tmp = arr[i / 4];
        }
        out[i] = tmp >>> 24;
        tmp <<= 8;
      }
      return out;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(bytes) {
      const out = [];
      let i;
      let tmp = 0;
      for (i = 0; i < bytes.length; i++) {
        tmp = tmp << 8 | bytes[i];
        if ((i & 3) === 3) {
          out.push(tmp);
          tmp = 0;
        }
      }
      if (i & 3) {
        out.push(bitArray.partial(8 * (i & 3), tmp));
      }
      return out;
    }
  }
};
var hash = {};
hash.sha1 = class {
  constructor(hash2) {
    const sha1 = this;
    sha1.blockSize = 512;
    sha1._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    sha1._key = [1518500249, 1859775393, 2400959708, 3395469782];
    if (hash2) {
      sha1._h = hash2._h.slice(0);
      sha1._buffer = hash2._buffer.slice(0);
      sha1._length = hash2._length;
    } else {
      sha1.reset();
    }
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const sha1 = this;
    sha1._h = sha1._init.slice(0);
    sha1._buffer = [];
    sha1._length = 0;
    return sha1;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(data) {
    const sha1 = this;
    if (typeof data === "string") {
      data = codec.utf8String.toBits(data);
    }
    const b = sha1._buffer = bitArray.concat(sha1._buffer, data);
    const ol = sha1._length;
    const nl = sha1._length = ol + bitArray.bitLength(data);
    if (nl > 9007199254740991) {
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    }
    const c = new Uint32Array(b);
    let j = 0;
    for (let i = sha1.blockSize + ol - (sha1.blockSize + ol & sha1.blockSize - 1); i <= nl; i += sha1.blockSize) {
      sha1._block(c.subarray(16 * j, 16 * (j + 1)));
      j += 1;
    }
    b.splice(0, 16 * j);
    return sha1;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const sha1 = this;
    let b = sha1._buffer;
    const h = sha1._h;
    b = bitArray.concat(b, [bitArray.partial(1, 1)]);
    for (let i = b.length + 2; i & 15; i++) {
      b.push(0);
    }
    b.push(Math.floor(sha1._length / 4294967296));
    b.push(sha1._length | 0);
    while (b.length) {
      sha1._block(b.splice(0, 16));
    }
    sha1.reset();
    return h;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(t2, b, c, d) {
    if (t2 <= 19) {
      return b & c | ~b & d;
    } else if (t2 <= 39) {
      return b ^ c ^ d;
    } else if (t2 <= 59) {
      return b & c | b & d | c & d;
    } else if (t2 <= 79) {
      return b ^ c ^ d;
    }
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(n, x) {
    return x << n | x >>> 32 - n;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(words) {
    const sha1 = this;
    const h = sha1._h;
    const w = Array(80);
    for (let j = 0; j < 16; j++) {
      w[j] = words[j];
    }
    let a = h[0];
    let b = h[1];
    let c = h[2];
    let d = h[3];
    let e2 = h[4];
    for (let t2 = 0; t2 <= 79; t2++) {
      if (t2 >= 16) {
        w[t2] = sha1._S(1, w[t2 - 3] ^ w[t2 - 8] ^ w[t2 - 14] ^ w[t2 - 16]);
      }
      const tmp = sha1._S(5, a) + sha1._f(t2, b, c, d) + e2 + w[t2] + sha1._key[Math.floor(t2 / 20)] | 0;
      e2 = d;
      d = c;
      c = sha1._S(30, b);
      b = a;
      a = tmp;
    }
    h[0] = h[0] + a | 0;
    h[1] = h[1] + b | 0;
    h[2] = h[2] + c | 0;
    h[3] = h[3] + d | 0;
    h[4] = h[4] + e2 | 0;
  }
};
var cipher = {};
cipher.aes = class {
  constructor(key) {
    const aes = this;
    aes._tables = [[[], [], [], [], []], [[], [], [], [], []]];
    if (!aes._tables[0][0][0]) {
      aes._precompute();
    }
    const sbox = aes._tables[0][4];
    const decTable = aes._tables[1];
    const keyLen = key.length;
    let i, encKey, decKey, rcon = 1;
    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
      throw new Error("invalid aes key size");
    }
    aes._key = [encKey = key.slice(0), decKey = []];
    for (i = keyLen; i < 4 * keyLen + 28; i++) {
      let tmp = encKey[i - 1];
      if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
        tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
        if (i % keyLen === 0) {
          tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
          rcon = rcon << 1 ^ (rcon >> 7) * 283;
        }
      }
      encKey[i] = encKey[i - keyLen] ^ tmp;
    }
    for (let j = 0; i; j++, i--) {
      const tmp = encKey[j & 3 ? i : i - 4];
      if (i <= 4 || j < 4) {
        decKey[j] = tmp;
      } else {
        decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
      }
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(data) {
    return this._crypt(data, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(data) {
    return this._crypt(data, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const encTable = this._tables[0];
    const decTable = this._tables[1];
    const sbox = encTable[4];
    const sboxInv = decTable[4];
    const d = [];
    const th = [];
    let xInv, x2, x4, x8;
    for (let i = 0; i < 256; i++) {
      th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
    }
    for (let x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
      let s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
      s = s >> 8 ^ s & 255 ^ 99;
      sbox[x] = s;
      sboxInv[s] = x;
      x8 = d[x4 = d[x2 = d[x]]];
      let tDec = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
      let tEnc = d[s] * 257 ^ s * 16843008;
      for (let i = 0; i < 4; i++) {
        encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
        decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
      }
    }
    for (let i = 0; i < 5; i++) {
      encTable[i] = encTable[i].slice(0);
      decTable[i] = decTable[i].slice(0);
    }
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(input, dir) {
    if (input.length !== 4) {
      throw new Error("invalid aes block size");
    }
    const key = this._key[dir];
    const nInnerRounds = key.length / 4 - 2;
    const out = [0, 0, 0, 0];
    const table3 = this._tables[dir];
    const t0 = table3[0];
    const t1 = table3[1];
    const t2 = table3[2];
    const t3 = table3[3];
    const sbox = table3[4];
    let a = input[0] ^ key[0];
    let b = input[dir ? 3 : 1] ^ key[1];
    let c = input[2] ^ key[2];
    let d = input[dir ? 1 : 3] ^ key[3];
    let kIndex = 4;
    let a2, b2, c2;
    for (let i = 0; i < nInnerRounds; i++) {
      a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
      b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
      c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
      d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
      kIndex += 4;
      a = a2;
      b = b2;
      c = c2;
    }
    for (let i = 0; i < 4; i++) {
      out[dir ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
      a2 = a;
      a = b;
      b = c;
      c = d;
      d = a2;
    }
    return out;
  }
};
var random = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(typedArray) {
    const words = new Uint32Array(typedArray.buffer);
    const r = (m_w) => {
      let m_z = 987654321;
      const mask = 4294967295;
      return function() {
        m_z = 36969 * (m_z & 65535) + (m_z >> 16) & mask;
        m_w = 18e3 * (m_w & 65535) + (m_w >> 16) & mask;
        const result = ((m_z << 16) + m_w & mask) / 4294967296 + 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, rcache; i < typedArray.length; i += 4) {
      const _r = r((rcache || Math.random()) * 4294967296);
      rcache = _r() * 987654071;
      words[i / 4] = _r() * 4294967296 | 0;
    }
    return typedArray;
  }
};
var mode = {};
mode.ctrGladman = class {
  constructor(prf, iv) {
    this._prf = prf;
    this._initIv = iv;
    this._iv = iv;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(data) {
    return this.calculate(this._prf, data, this._iv);
  }
  incWord(word) {
    if ((word >> 24 & 255) === 255) {
      let b1 = word >> 16 & 255;
      let b2 = word >> 8 & 255;
      let b3 = word & 255;
      if (b1 === 255) {
        b1 = 0;
        if (b2 === 255) {
          b2 = 0;
          if (b3 === 255) {
            b3 = 0;
          } else {
            ++b3;
          }
        } else {
          ++b2;
        }
      } else {
        ++b1;
      }
      word = 0;
      word += b1 << 16;
      word += b2 << 8;
      word += b3;
    } else {
      word += 1 << 24;
    }
    return word;
  }
  incCounter(counter) {
    if ((counter[0] = this.incWord(counter[0])) === 0) {
      counter[1] = this.incWord(counter[1]);
    }
  }
  calculate(prf, data, iv) {
    let l;
    if (!(l = data.length)) {
      return [];
    }
    const bl = bitArray.bitLength(data);
    for (let i = 0; i < l; i += 4) {
      this.incCounter(iv);
      const e2 = prf.encrypt(iv);
      data[i] ^= e2[0];
      data[i + 1] ^= e2[1];
      data[i + 2] ^= e2[2];
      data[i + 3] ^= e2[3];
    }
    return bitArray.clamp(data, bl);
  }
};
var misc = {
  importKey(password) {
    return new misc.hmacSha1(codec.bytes.toBits(password));
  },
  pbkdf2(prf, salt, count, length) {
    count = count || 1e4;
    if (length < 0 || count < 0) {
      throw new Error("invalid params to pbkdf2");
    }
    const byteLength = (length >> 5) + 1 << 2;
    let u, ui, i, j, k;
    const arrayBuffer = new ArrayBuffer(byteLength);
    const out = new DataView(arrayBuffer);
    let outLength = 0;
    const b = bitArray;
    salt = codec.bytes.toBits(salt);
    for (k = 1; outLength < (byteLength || 1); k++) {
      u = ui = prf.encrypt(b.concat(salt, [k]));
      for (i = 1; i < count; i++) {
        ui = prf.encrypt(ui);
        for (j = 0; j < ui.length; j++) {
          u[j] ^= ui[j];
        }
      }
      for (i = 0; outLength < (byteLength || 1) && i < u.length; i++) {
        out.setInt32(outLength, u[i]);
        outLength += 4;
      }
    }
    return arrayBuffer.slice(0, length / 8);
  }
};
misc.hmacSha1 = class {
  constructor(key) {
    const hmac = this;
    const Hash = hmac._hash = hash.sha1;
    const exKey = [[], []];
    hmac._baseHash = [new Hash(), new Hash()];
    const bs = hmac._baseHash[0].blockSize / 32;
    if (key.length > bs) {
      key = new Hash().update(key).finalize();
    }
    for (let i = 0; i < bs; i++) {
      exKey[0][i] = key[i] ^ 909522486;
      exKey[1][i] = key[i] ^ 1549556828;
    }
    hmac._baseHash[0].update(exKey[0]);
    hmac._baseHash[1].update(exKey[1]);
    hmac._resultHash = new Hash(hmac._baseHash[0]);
  }
  reset() {
    const hmac = this;
    hmac._resultHash = new hmac._hash(hmac._baseHash[0]);
    hmac._updated = false;
  }
  update(data) {
    const hmac = this;
    hmac._updated = true;
    hmac._resultHash.update(data);
  }
  digest() {
    const hmac = this;
    const w = hmac._resultHash.finalize();
    const result = new hmac._hash(hmac._baseHash[1]).update(w).finalize();
    hmac.reset();
    return result;
  }
  encrypt(data) {
    if (!this._updated) {
      this.update(data);
      return this.digest(data);
    } else {
      throw new Error("encrypt on already updated hmac called!");
    }
  }
};

// node_modules/@zip.js/zip.js/lib/core/streams/common-crypto.js
var GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE;
var ERR_INVALID_PASSWORD = "Invalid password";
var ERR_INVALID_SIGNATURE = "Invalid signature";
var ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
function getRandomValues(array) {
  if (GET_RANDOM_VALUES_SUPPORTED) {
    return crypto.getRandomValues(array);
  } else {
    return random.getRandomValues(array);
  }
}

// node_modules/@zip.js/zip.js/lib/core/streams/aes-crypto-stream.js
var BLOCK_LENGTH = 16;
var RAW_FORMAT = "raw";
var PBKDF2_ALGORITHM = { name: "PBKDF2" };
var HASH_ALGORITHM = { name: "HMAC" };
var HASH_FUNCTION = "SHA-1";
var BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM);
var DERIVED_BITS_ALGORITHM = Object.assign({ iterations: 1e3, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM);
var DERIVED_BITS_USAGE = ["deriveBits"];
var SALT_LENGTH = [8, 12, 16];
var KEY_LENGTH = [16, 24, 32];
var SIGNATURE_LENGTH = 10;
var COUNTER_DEFAULT_VALUE = [0, 0, 0, 0];
var CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
var subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
var SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
var codecBytes = codec.bytes;
var Aes = cipher.aes;
var CtrGladman = mode.ctrGladman;
var HmacSha1 = misc.hmacSha1;
var IMPORT_KEY_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE;
var DERIVE_BITS_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.deriveBits == FUNCTION_TYPE;
var AESDecryptionStream = class extends TransformStream {
  constructor({ password, rawPassword, signed, encryptionStrength, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          signed,
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        if (password2) {
          await createDecryptionKeys(aesCrypto, strength, password2, subarray(chunk, 0, SALT_LENGTH[strength] + 2));
          chunk = subarray(chunk, SALT_LENGTH[strength] + 2);
          if (checkPasswordOnly) {
            controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
          } else {
            resolveReady();
          }
        } else {
          await ready;
        }
        const output = new Uint8Array(chunk.length - SIGNATURE_LENGTH - (chunk.length - SIGNATURE_LENGTH) % BLOCK_LENGTH);
        controller.enqueue(append(aesCrypto, chunk, output, 0, SIGNATURE_LENGTH, true));
      },
      async flush(controller) {
        const {
          signed: signed2,
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          const chunkToDecrypt = subarray(pending, 0, pending.length - SIGNATURE_LENGTH);
          const originalSignature = subarray(pending, pending.length - SIGNATURE_LENGTH);
          let decryptedChunkArray = new Uint8Array();
          if (chunkToDecrypt.length) {
            const encryptedChunk = toBits(codecBytes, chunkToDecrypt);
            hmac.update(encryptedChunk);
            const decryptedChunk = ctr.update(encryptedChunk);
            decryptedChunkArray = fromBits(codecBytes, decryptedChunk);
          }
          if (signed2) {
            const signature = subarray(fromBits(codecBytes, hmac.digest()), 0, SIGNATURE_LENGTH);
            for (let indexSignature = 0; indexSignature < SIGNATURE_LENGTH; indexSignature++) {
              if (signature[indexSignature] != originalSignature[indexSignature]) {
                throw new Error(ERR_INVALID_SIGNATURE);
              }
            }
          }
          controller.enqueue(decryptedChunkArray);
        }
      }
    });
  }
};
var AESEncryptionStream = class extends TransformStream {
  constructor({ password, rawPassword, encryptionStrength }) {
    let stream;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        let preamble = new Uint8Array();
        if (password2) {
          preamble = await createEncryptionKeys(aesCrypto, strength, password2);
          resolveReady();
        } else {
          await ready;
        }
        const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH);
        output.set(preamble, 0);
        controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0));
      },
      async flush(controller) {
        const {
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          let encryptedChunkArray = new Uint8Array();
          if (pending.length) {
            const encryptedChunk = ctr.update(toBits(codecBytes, pending));
            hmac.update(encryptedChunk);
            encryptedChunkArray = fromBits(codecBytes, encryptedChunk);
          }
          stream.signature = fromBits(codecBytes, hmac.digest()).slice(0, SIGNATURE_LENGTH);
          controller.enqueue(concat(encryptedChunkArray, stream.signature));
        }
      }
    });
    stream = this;
  }
};
function append(aesCrypto, input, output, paddingStart, paddingEnd, verifySignature) {
  const {
    ctr,
    hmac,
    pending
  } = aesCrypto;
  const inputLength = input.length - paddingEnd;
  if (pending.length) {
    input = concat(pending, input);
    output = expand(output, inputLength - inputLength % BLOCK_LENGTH);
  }
  let offset;
  for (offset = 0; offset <= inputLength - BLOCK_LENGTH; offset += BLOCK_LENGTH) {
    const inputChunk = toBits(codecBytes, subarray(input, offset, offset + BLOCK_LENGTH));
    if (verifySignature) {
      hmac.update(inputChunk);
    }
    const outputChunk = ctr.update(inputChunk);
    if (!verifySignature) {
      hmac.update(outputChunk);
    }
    output.set(fromBits(codecBytes, outputChunk), offset + paddingStart);
  }
  aesCrypto.pending = subarray(input, offset);
  return output;
}
async function createDecryptionKeys(decrypt2, strength, password, preamble) {
  const passwordVerificationKey = await createKeys(decrypt2, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
  const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
  if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) {
    throw new Error(ERR_INVALID_PASSWORD);
  }
}
async function createEncryptionKeys(encrypt2, strength, password) {
  const salt = getRandomValues(new Uint8Array(SALT_LENGTH[strength]));
  const passwordVerification = await createKeys(encrypt2, strength, password, salt);
  return concat(salt, passwordVerification);
}
async function createKeys(aesCrypto, strength, password, salt) {
  aesCrypto.password = null;
  const baseKey = await importKey(RAW_FORMAT, password, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
  const derivedBits = await deriveBits(Object.assign({ salt }, DERIVED_BITS_ALGORITHM), baseKey, 8 * (KEY_LENGTH[strength] * 2 + 2));
  const compositeKey = new Uint8Array(derivedBits);
  const key = toBits(codecBytes, subarray(compositeKey, 0, KEY_LENGTH[strength]));
  const authentication = toBits(codecBytes, subarray(compositeKey, KEY_LENGTH[strength], KEY_LENGTH[strength] * 2));
  const passwordVerification = subarray(compositeKey, KEY_LENGTH[strength] * 2);
  Object.assign(aesCrypto, {
    keys: {
      key,
      authentication,
      passwordVerification
    },
    ctr: new CtrGladman(new Aes(key), Array.from(COUNTER_DEFAULT_VALUE)),
    hmac: new HmacSha1(authentication)
  });
  return passwordVerification;
}
async function importKey(format, password, algorithm, extractable, keyUsages) {
  if (IMPORT_KEY_SUPPORTED) {
    try {
      return await subtle.importKey(format, password, algorithm, extractable, keyUsages);
    } catch (_) {
      IMPORT_KEY_SUPPORTED = false;
      return misc.importKey(password);
    }
  } else {
    return misc.importKey(password);
  }
}
async function deriveBits(algorithm, baseKey, length) {
  if (DERIVE_BITS_SUPPORTED) {
    try {
      return await subtle.deriveBits(algorithm, baseKey, length);
    } catch (_) {
      DERIVE_BITS_SUPPORTED = false;
      return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
    }
  } else {
    return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
  }
}
function encodePassword(password, rawPassword) {
  if (rawPassword === UNDEFINED_VALUE) {
    return encodeText(password);
  } else {
    return rawPassword;
  }
}
function concat(leftArray, rightArray) {
  let array = leftArray;
  if (leftArray.length + rightArray.length) {
    array = new Uint8Array(leftArray.length + rightArray.length);
    array.set(leftArray, 0);
    array.set(rightArray, leftArray.length);
  }
  return array;
}
function expand(inputArray, length) {
  if (length && length > inputArray.length) {
    const array = inputArray;
    inputArray = new Uint8Array(length);
    inputArray.set(array, 0);
  }
  return inputArray;
}
function subarray(array, begin, end) {
  return array.subarray(begin, end);
}
function fromBits(codecBytes2, chunk) {
  return codecBytes2.fromBits(chunk);
}
function toBits(codecBytes2, chunk) {
  return codecBytes2.toBits(chunk);
}

// node_modules/@zip.js/zip.js/lib/core/streams/zip-crypto-stream.js
var HEADER_LENGTH = 12;
var ZipCryptoDecryptionStream = class extends TransformStream {
  constructor({ password, passwordVerification, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys2(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        if (zipCrypto.password) {
          const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
          zipCrypto.password = null;
          if (decryptedHeader[HEADER_LENGTH - 1] != zipCrypto.passwordVerification) {
            throw new Error(ERR_INVALID_PASSWORD);
          }
          chunk = chunk.subarray(HEADER_LENGTH);
        }
        if (checkPasswordOnly) {
          controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
        } else {
          controller.enqueue(decrypt(zipCrypto, chunk));
        }
      }
    });
  }
};
var ZipCryptoEncryptionStream = class extends TransformStream {
  constructor({ password, passwordVerification }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys2(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        let output;
        let offset;
        if (zipCrypto.password) {
          zipCrypto.password = null;
          const header = getRandomValues(new Uint8Array(HEADER_LENGTH));
          header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
          output = new Uint8Array(chunk.length + header.length);
          output.set(encrypt(zipCrypto, header), 0);
          offset = HEADER_LENGTH;
        } else {
          output = new Uint8Array(chunk.length);
          offset = 0;
        }
        output.set(encrypt(zipCrypto, chunk), offset);
        controller.enqueue(output);
      }
    });
  }
};
function decrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, output[index]);
  }
  return output;
}
function encrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, input[index]);
  }
  return output;
}
function createKeys2(target, password) {
  const keys = [305419896, 591751049, 878082192];
  Object.assign(target, {
    keys,
    crcKey0: new Crc32(keys[0]),
    crcKey2: new Crc32(keys[2])
  });
  for (let index = 0; index < password.length; index++) {
    updateKeys(target, password.charCodeAt(index));
  }
}
function updateKeys(target, byte) {
  let [key0, key1, key2] = target.keys;
  target.crcKey0.append([byte]);
  key0 = ~target.crcKey0.get();
  key1 = getInt32(Math.imul(getInt32(key1 + getInt8(key0)), 134775813) + 1);
  target.crcKey2.append([key1 >>> 24]);
  key2 = ~target.crcKey2.get();
  target.keys = [key0, key1, key2];
}
function getByte(target) {
  const temp = target.keys[2] | 2;
  return getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt8(number) {
  return number & 255;
}
function getInt32(number) {
  return number & 4294967295;
}

// node_modules/@zip.js/zip.js/lib/core/streams/zip-entry-stream.js
var COMPRESSION_FORMAT = "deflate-raw";
var DeflateStream = class extends TransformStream {
  constructor(options, { chunkSize, CompressionStream: CompressionStream2, CompressionStreamNative }) {
    super({});
    const { compressed, encrypted, useCompressionStream, zipCrypto, signed, level } = options;
    const stream = this;
    let crc32Stream, encryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { level, chunkSize }, CompressionStreamNative, CompressionStream2);
    }
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoEncryptionStream(options));
      } else {
        encryptionStream = new AESEncryptionStream(options);
        readable = pipeThrough(readable, encryptionStream);
      }
    }
    setReadable(stream, readable, () => {
      let signature;
      if (encrypted && !zipCrypto) {
        signature = encryptionStream.signature;
      }
      if ((!encrypted || zipCrypto) && signed) {
        signature = new DataView(crc32Stream.value.buffer).getUint32(0);
      }
      stream.signature = signature;
    });
  }
};
var InflateStream = class extends TransformStream {
  constructor(options, { chunkSize, DecompressionStream: DecompressionStream2, DecompressionStreamNative }) {
    super({});
    const { zipCrypto, encrypted, signed, signature, compressed, useCompressionStream } = options;
    let crc32Stream, decryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoDecryptionStream(options));
      } else {
        decryptionStream = new AESDecryptionStream(options);
        readable = pipeThrough(readable, decryptionStream);
      }
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { chunkSize }, DecompressionStreamNative, DecompressionStream2);
    }
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    setReadable(this, readable, () => {
      if ((!encrypted || zipCrypto) && signed) {
        const dataViewSignature = new DataView(crc32Stream.value.buffer);
        if (signature != dataViewSignature.getUint32(0, false)) {
          throw new Error(ERR_INVALID_SIGNATURE);
        }
      }
    });
  }
};
function filterEmptyChunks(readable) {
  return pipeThrough(readable, new TransformStream({
    transform(chunk, controller) {
      if (chunk && chunk.length) {
        controller.enqueue(chunk);
      }
    }
  }));
}
function setReadable(stream, readable, flush) {
  readable = pipeThrough(readable, new TransformStream({ flush }));
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function pipeThroughCommpressionStream(readable, useCompressionStream, options, CodecStreamNative, CodecStream2) {
  try {
    const CompressionStream2 = useCompressionStream && CodecStreamNative ? CodecStreamNative : CodecStream2;
    readable = pipeThrough(readable, new CompressionStream2(COMPRESSION_FORMAT, options));
  } catch (_) {
    if (useCompressionStream) {
      try {
        readable = pipeThrough(readable, new CodecStream2(COMPRESSION_FORMAT, options));
      } catch (_2) {
        return readable;
      }
    } else {
      return readable;
    }
  }
  return readable;
}
function pipeThrough(readable, transformStream) {
  return readable.pipeThrough(transformStream);
}

// node_modules/@zip.js/zip.js/lib/core/streams/codec-stream.js
var MESSAGE_EVENT_TYPE = "message";
var MESSAGE_START = "start";
var MESSAGE_PULL = "pull";
var MESSAGE_DATA = "data";
var MESSAGE_ACK_DATA = "ack";
var MESSAGE_CLOSE = "close";
var CODEC_DEFLATE = "deflate";
var CODEC_INFLATE = "inflate";
var CodecStream = class extends TransformStream {
  constructor(options, config2) {
    super({});
    const codec2 = this;
    const { codecType } = options;
    let Stream2;
    if (codecType.startsWith(CODEC_DEFLATE)) {
      Stream2 = DeflateStream;
    } else if (codecType.startsWith(CODEC_INFLATE)) {
      Stream2 = InflateStream;
    }
    let outputSize = 0;
    let inputSize = 0;
    const stream = new Stream2(options, config2);
    const readable = super.readable;
    const inputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          inputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        Object.assign(codec2, {
          inputSize
        });
      }
    });
    const outputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          outputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        const { signature } = stream;
        Object.assign(codec2, {
          signature,
          outputSize,
          inputSize
        });
      }
    });
    Object.defineProperty(codec2, "readable", {
      get() {
        return readable.pipeThrough(inputSizeStream).pipeThrough(stream).pipeThrough(outputSizeStream);
      }
    });
  }
};
var ChunkStream = class extends TransformStream {
  constructor(chunkSize) {
    let pendingChunk;
    super({
      transform,
      flush(controller) {
        if (pendingChunk && pendingChunk.length) {
          controller.enqueue(pendingChunk);
        }
      }
    });
    function transform(chunk, controller) {
      if (pendingChunk) {
        const newChunk = new Uint8Array(pendingChunk.length + chunk.length);
        newChunk.set(pendingChunk);
        newChunk.set(chunk, pendingChunk.length);
        chunk = newChunk;
        pendingChunk = null;
      }
      if (chunk.length > chunkSize) {
        controller.enqueue(chunk.slice(0, chunkSize));
        transform(chunk.slice(chunkSize), controller);
      } else {
        pendingChunk = chunk;
      }
    }
  }
};

// node_modules/@zip.js/zip.js/lib/core/codec-worker.js
var WEB_WORKERS_SUPPORTED = typeof Worker != UNDEFINED_TYPE;
var CodecWorker = class {
  constructor(workerData, { readable, writable }, { options, config: config2, streamOptions, useWebWorkers, transferStreams, scripts }, onTaskFinished) {
    const { signal } = streamOptions;
    Object.assign(workerData, {
      busy: true,
      readable: readable.pipeThrough(new ChunkStream(config2.chunkSize)).pipeThrough(new ProgressWatcherStream(readable, streamOptions), { signal }),
      writable,
      options: Object.assign({}, options),
      scripts,
      transferStreams,
      terminate() {
        return new Promise((resolve) => {
          const { worker, busy } = workerData;
          if (worker) {
            if (busy) {
              workerData.resolveTerminated = resolve;
            } else {
              worker.terminate();
              resolve();
            }
            workerData.interface = null;
          } else {
            resolve();
          }
        });
      },
      onTaskFinished() {
        const { resolveTerminated } = workerData;
        if (resolveTerminated) {
          workerData.resolveTerminated = null;
          workerData.terminated = true;
          workerData.worker.terminate();
          resolveTerminated();
        }
        workerData.busy = false;
        onTaskFinished(workerData);
      }
    });
    return (useWebWorkers && WEB_WORKERS_SUPPORTED ? createWebWorkerInterface : createWorkerInterface)(workerData, config2);
  }
};
var ProgressWatcherStream = class extends TransformStream {
  constructor(readableSource, { onstart, onprogress, size, onend }) {
    let chunkOffset = 0;
    super({
      async start() {
        if (onstart) {
          await callHandler(onstart, size);
        }
      },
      async transform(chunk, controller) {
        chunkOffset += chunk.length;
        if (onprogress) {
          await callHandler(onprogress, chunkOffset, size);
        }
        controller.enqueue(chunk);
      },
      async flush() {
        readableSource.size = chunkOffset;
        if (onend) {
          await callHandler(onend, chunkOffset);
        }
      }
    });
  }
};
async function callHandler(handler, ...parameters) {
  try {
    await handler(...parameters);
  } catch (_) {
  }
}
function createWorkerInterface(workerData, config2) {
  return {
    run: () => runWorker(workerData, config2)
  };
}
function createWebWorkerInterface(workerData, config2) {
  const { baseURL: baseURL2, chunkSize } = config2;
  if (!workerData.interface) {
    let worker;
    try {
      worker = getWebWorker(workerData.scripts[0], baseURL2, workerData);
    } catch (_) {
      WEB_WORKERS_SUPPORTED = false;
      return createWorkerInterface(workerData, config2);
    }
    Object.assign(workerData, {
      worker,
      interface: {
        run: () => runWebWorker(workerData, { chunkSize })
      }
    });
  }
  return workerData.interface;
}
async function runWorker({ options, readable, writable, onTaskFinished }, config2) {
  try {
    const codecStream = new CodecStream(options, config2);
    await readable.pipeThrough(codecStream).pipeTo(writable, { preventClose: true, preventAbort: true });
    const {
      signature,
      inputSize,
      outputSize
    } = codecStream;
    return {
      signature,
      inputSize,
      outputSize
    };
  } finally {
    onTaskFinished();
  }
}
async function runWebWorker(workerData, config2) {
  let resolveResult, rejectResult;
  const result = new Promise((resolve, reject) => {
    resolveResult = resolve;
    rejectResult = reject;
  });
  Object.assign(workerData, {
    reader: null,
    writer: null,
    resolveResult,
    rejectResult,
    result
  });
  const { readable, options, scripts } = workerData;
  const { writable, closed } = watchClosedStream(workerData.writable);
  const streamsTransferred = sendMessage({
    type: MESSAGE_START,
    scripts: scripts.slice(1),
    options,
    config: config2,
    readable,
    writable
  }, workerData);
  if (!streamsTransferred) {
    Object.assign(workerData, {
      reader: readable.getReader(),
      writer: writable.getWriter()
    });
  }
  const resultValue = await result;
  if (!streamsTransferred) {
    await writable.getWriter().close();
  }
  await closed;
  return resultValue;
}
function watchClosedStream(writableSource) {
  let resolveStreamClosed;
  const closed = new Promise((resolve) => resolveStreamClosed = resolve);
  const writable = new WritableStream({
    async write(chunk) {
      const writer = writableSource.getWriter();
      await writer.ready;
      await writer.write(chunk);
      writer.releaseLock();
    },
    close() {
      resolveStreamClosed();
    },
    abort(reason) {
      const writer = writableSource.getWriter();
      return writer.abort(reason);
    }
  });
  return { writable, closed };
}
var classicWorkersSupported = true;
var transferStreamsSupported = true;
function getWebWorker(url, baseURL2, workerData) {
  const workerOptions = { type: "module" };
  let scriptUrl, worker;
  if (typeof url == FUNCTION_TYPE) {
    url = url();
  }
  try {
    scriptUrl = new URL(url, baseURL2);
  } catch (_) {
    scriptUrl = url;
  }
  if (classicWorkersSupported) {
    try {
      worker = new Worker(scriptUrl);
    } catch (_) {
      classicWorkersSupported = false;
      worker = new Worker(scriptUrl, workerOptions);
    }
  } else {
    worker = new Worker(scriptUrl, workerOptions);
  }
  worker.addEventListener(MESSAGE_EVENT_TYPE, (event) => onMessage(event, workerData));
  return worker;
}
function sendMessage(message, { worker, writer, onTaskFinished, transferStreams }) {
  try {
    const { value, readable, writable } = message;
    const transferables = [];
    if (value) {
      if (value.byteLength < value.buffer.byteLength) {
        message.value = value.buffer.slice(0, value.byteLength);
      } else {
        message.value = value.buffer;
      }
      transferables.push(message.value);
    }
    if (transferStreams && transferStreamsSupported) {
      if (readable) {
        transferables.push(readable);
      }
      if (writable) {
        transferables.push(writable);
      }
    } else {
      message.readable = message.writable = null;
    }
    if (transferables.length) {
      try {
        worker.postMessage(message, transferables);
        return true;
      } catch (_) {
        transferStreamsSupported = false;
        message.readable = message.writable = null;
        worker.postMessage(message);
      }
    } else {
      worker.postMessage(message);
    }
  } catch (error) {
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
    throw error;
  }
}
async function onMessage({ data }, workerData) {
  const { type, value, messageId, result, error } = data;
  const { reader, writer, resolveResult, rejectResult, onTaskFinished } = workerData;
  try {
    if (error) {
      const { message, stack, code, name } = error;
      const responseError = new Error(message);
      Object.assign(responseError, { stack, code, name });
      close(responseError);
    } else {
      if (type == MESSAGE_PULL) {
        const { value: value2, done } = await reader.read();
        sendMessage({ type: MESSAGE_DATA, value: value2, done, messageId }, workerData);
      }
      if (type == MESSAGE_DATA) {
        await writer.ready;
        await writer.write(new Uint8Array(value));
        sendMessage({ type: MESSAGE_ACK_DATA, messageId }, workerData);
      }
      if (type == MESSAGE_CLOSE) {
        close(null, result);
      }
    }
  } catch (error2) {
    sendMessage({ type: MESSAGE_CLOSE, messageId }, workerData);
    close(error2);
  }
  function close(error2, result2) {
    if (error2) {
      rejectResult(error2);
    } else {
      resolveResult(result2);
    }
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
  }
}

// node_modules/@zip.js/zip.js/lib/core/codec-pool.js
var pool = [];
var pendingRequests = [];
var indexWorker = 0;
async function runWorker2(stream, workerOptions) {
  const { options, config: config2 } = workerOptions;
  const { transferStreams, useWebWorkers, useCompressionStream, codecType, compressed, signed, encrypted } = options;
  const { workerScripts, maxWorkers: maxWorkers2 } = config2;
  workerOptions.transferStreams = transferStreams || transferStreams === UNDEFINED_VALUE;
  const streamCopy = !compressed && !signed && !encrypted && !workerOptions.transferStreams;
  workerOptions.useWebWorkers = !streamCopy && (useWebWorkers || useWebWorkers === UNDEFINED_VALUE && config2.useWebWorkers);
  workerOptions.scripts = workerOptions.useWebWorkers && workerScripts ? workerScripts[codecType] : [];
  options.useCompressionStream = useCompressionStream || useCompressionStream === UNDEFINED_VALUE && config2.useCompressionStream;
  return (await getWorker()).run();
  async function getWorker() {
    const workerData = pool.find((workerData2) => !workerData2.busy);
    if (workerData) {
      clearTerminateTimeout(workerData);
      return new CodecWorker(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers2) {
      const workerData2 = { indexWorker };
      indexWorker++;
      pool.push(workerData2);
      return new CodecWorker(workerData2, stream, workerOptions, onTaskFinished);
    } else {
      return new Promise((resolve) => pendingRequests.push({ resolve, stream, workerOptions }));
    }
  }
  function onTaskFinished(workerData) {
    if (pendingRequests.length) {
      const [{ resolve, stream: stream2, workerOptions: workerOptions2 }] = pendingRequests.splice(0, 1);
      resolve(new CodecWorker(workerData, stream2, workerOptions2, onTaskFinished));
    } else if (workerData.worker) {
      clearTerminateTimeout(workerData);
      terminateWorker(workerData, workerOptions);
    } else {
      pool = pool.filter((data) => data != workerData);
    }
  }
}
function terminateWorker(workerData, workerOptions) {
  const { config: config2 } = workerOptions;
  const { terminateWorkerTimeout } = config2;
  if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) {
    if (workerData.terminated) {
      workerData.terminated = false;
    } else {
      workerData.terminateTimeout = setTimeout(async () => {
        pool = pool.filter((data) => data != workerData);
        try {
          await workerData.terminate();
        } catch (_) {
        }
      }, terminateWorkerTimeout);
    }
  }
}
function clearTerminateTimeout(workerData) {
  const { terminateTimeout } = workerData;
  if (terminateTimeout) {
    clearTimeout(terminateTimeout);
    workerData.terminateTimeout = null;
  }
}

// node_modules/@zip.js/zip.js/lib/z-worker-inline.js
function e(e2, t2 = {}) {
  const n = 'const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={bytes:{p(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},m(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t.A=e.A):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e.A=0,e}update(e){const t=this;"string"==typeof e&&(e=I._.m(e));const n=t.C=_.concat(t.C,e),r=t.A,i=t.A=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}P(){const e=this;let t=e.C;const n=e.S;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e.A/4294967296)),t.push(0|e.A);t.length;)e.I(t.splice(0,16));return e.reset(),n}D(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}V(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.V(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.V(5,o)+n.D(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.V(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.R(I.bytes.m(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.bytes.m(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=P,r=[[],[]];t.U=[new n,new n];const s=t.U[0].blockSize/32;e.length>s&&(e=(new n).update(e).P());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.U[0].update(r[0]),t.U[1].update(r[1]),t.K=new n(t.U[0])}reset(){const e=this;e.K=new e.M(e.U[0]),e.N=!1}update(e){this.N=!0,this.K.update(e)}digest(){const e=this,t=e.K.P(),n=new e.M(e.U[1]).update(t).P();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.bytes,X=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.R;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),signed:r,X:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:o,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.B(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.B(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,$:u,passwordVerification:w},Y:new Y(new X(l),e.from(F)),Z:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.p(t)}function ae(e,t){return e.m(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new x(r[0]),te:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=-2;function Te(t){return We(t.map((([t,n])=>new e(t).fill(n,0,t))))}function We(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?We(n):n)),[])}const je=[0,1,2,3].concat(...Te([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function He(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Le(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}He.ge=[0,1,2,3,4,5,6,7].concat(...Te([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),He.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],He.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],He.Se=e=>256>e?je[e]:je[256+(e>>>7)],He.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],He.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],He.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],He.Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Fe=Te([[144,8],[112,9],[24,7],[8,8]]);Le._e=We([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Fe[t]])));const qe=Te([[30,5]]);function Ge(e,t,n,r,s){const i=this;i.Ie=e,i.Pe=t,i.De=n,i.Ve=r,i.Re=s}Le.Be=We([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,qe[t]]))),Le.Ee=new Le(Le._e,He.ze,257,286,15),Le.Me=new Le(Le.Be,He.Ce,0,30,15),Le.Ue=new Le(null,He.xe,0,19,7);const Je=[new Ge(0,0,0,0,0),new Ge(4,4,8,4,1),new Ge(4,5,16,8,1),new Ge(4,6,32,32,1),new Ge(4,4,16,16,2),new Ge(8,16,32,32,2),new Ge(8,16,128,128,2),new Ge(8,32,128,256,2),new Ge(32,128,258,1024,2),new Ge(32,258,258,4096,2)],Qe=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Xe=113,Ye=666,Ze=262;function $e(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function et(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new He,N=new He,O=new He;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ke[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(He.ge[n]+256+1)]++,M[2*He.Se(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+He.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=He.ge[s],Y(i+256+1,t),o=He.ze[i],0!==o&&(s-=He.ke[i],X(s,o)),r--,i=He.Se(r),Y(i,n),o=He.Ce[i],0!==o&&(r-=He.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ke.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.ne(e),N.ne(e),o=(()=>{let t;for(G(E,K.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===U[2*He.Ae[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Le._e,Le.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*He.Ae[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-Ze){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Ze>A&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-Ze?C-(f-Ze):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],U=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&$e(t,r[i+1],r[i],e.le)&&i++,!$e(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Oe:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ke=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),D=S,V=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=Xe,c=0,K.re=E,K.ie=Le.Ee,N.re=M,N.ie=Le.Me,O.re=U,O.ie=Le.Ue,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=Xe&&n!=Ye?Oe:(e.Oe=null,e.Ne=null,e.Ke=null,d=null,h=null,u=null,e.Fe=null,n==Xe?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Oe:(Je[D].Re!=Je[t].Re&&0!==e.qe&&(r=e.Ye(1)),D!=t&&(D=t,P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve),V=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Oe;if(3>i)return 0;for(i>f-Ze&&(i=f-Ze,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Oe;if(!r.$e||!r.et&&0!==r.We||n==Ye&&4!=i)return r.Le=Qe[4],Oe;if(0===r.tt)return r.Le=Qe[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Xe,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=Qe[7],-5;if(n==Ye&&0!==t.We)return r.Le=Qe[7],-5;if(0!==t.We||0!==A||0!=i&&n!=Ye){switch(R=-1,Je[D].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Ze&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Ze||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-Ze>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.tt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Ye),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Le._e),$(),9>1+H+10-F&&(X(2,3),Y(256,Le._e),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function tt(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function nt(e){const t=new tt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.subarray(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}tt.prototype={He(e,t){const n=this;return n.Fe=new et,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Oe},Qe(){const e=this;if(!e.Fe)return Oe;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Oe},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Oe},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ke.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const rt=-2,st=-3,it=-5,ot=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ct=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ft=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],at=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],lt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],ut=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],wt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ht(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return st;if(0>(I-=n[g]))return st;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>1440)return st;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;g&k;k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?it:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==st?f.Le="oversubscribed dynamic bit lengths tree":a!=it&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=st),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,at,lt,a,i,u,e,t),0!=h||0===i[0]?(h==st?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=st),h):(c(288),h=o(s,n,r,0,ut,wt,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==st?w.Le="oversubscribed distance tree":h==it?(w.Le="incomplete distance tree",h=st):-4!=h&&(w.Le="empty distance tree with lengths",h=st),h):0)}}function dt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ot[e],g=ot[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&ot[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&ot[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st;f+=a[z+2],f+=w&ot[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st);if(f+=a[z+2],f+=w&ot[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(16&k){a=15&k,i=n[g+2],t=2;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=7;break}return t=9,y.Le="invalid literal/length code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 2:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}i+=x&ot[b],x>>=b,A-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=4;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 4:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}l+=x&ot[b],x>>=b,A-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 9:return m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);default:return m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ht.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ct,r[0]=ft,0);const pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function yt(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new dt;let h=0,d=new f(4320);const p=new ht;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ht.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[pt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[pt[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==st&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ot[i]))+1],w=d[3*(u[0]+(f&ot[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ot[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),0!=i)return i==st&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const mt=13,bt=[0,0,255,255];function gt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):rt}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),rt):(e.zt=r,n.gt.kt=new yt(n,1<<r),t(n),0)),e.At=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return rt;const s=e.gt;for(t=4==t?it:0,n=it;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=mt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=mt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=mt,e.Le="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=mt,e.Le="need dictionary",s.marker=0,rt;case 7:if(n=s.kt.ut(e,n),n==st){s.mode=mt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case mt:return st;default:return rt}},e._t=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return rt;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return rt;const c=e.gt;if(c.mode!=mt&&(c.mode=mt,c.marker=0),0===(n=e.We))return it;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==bt[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?st:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Pt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():rt}function kt(){}function vt(e){const t=new kt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t.At(0),c&&a===it){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.subarray(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.Ct()}}kt.prototype={xt(e){const t=this;return t.gt=new gt,e||(e=15),t.gt.xt(t,e)},At(e){const t=this;return t.gt?t.gt.At(t,e):rt},Ct(){const e=this;if(!e.gt)return rt;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):rt},_t(e,t){const n=this;return n.gt?n.gt._t(n,e,t):rt},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=nt,self.Inflate=vt};\n', r = () => t2.useDataURI ? "data:text/javascript," + encodeURIComponent(n) : URL.createObjectURL(new Blob([n], { type: "text/javascript" }));
  e2({ workerScripts: { inflate: [r], deflate: [r] } });
}

// node_modules/@zip.js/zip.js/lib/core/io.js
var ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
var HTTP_HEADER_CONTENT_TYPE = "Content-Type";
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var PROPERTY_NAME_WRITABLE = "writable";
var Stream = class {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = true;
  }
};
var Reader = class extends Stream {
  get readable() {
    const reader = this;
    const { chunkSize = DEFAULT_CHUNK_SIZE } = reader;
    const readable = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(controller) {
        const { offset = 0, size, diskNumberStart } = readable;
        const { chunkOffset } = this;
        const dataSize = size === UNDEFINED_VALUE ? chunkSize : Math.min(chunkSize, size - chunkOffset);
        const data = await readUint8Array(reader, offset + chunkOffset, dataSize, diskNumberStart);
        controller.enqueue(data);
        if (chunkOffset + chunkSize > size || size === UNDEFINED_VALUE && !data.length && dataSize) {
          controller.close();
        } else {
          this.chunkOffset += chunkSize;
        }
      }
    });
    return readable;
  }
};
var BlobReader = class extends Reader {
  constructor(blob) {
    super();
    Object.assign(this, {
      blob,
      size: blob.size
    });
  }
  async readUint8Array(offset, length) {
    const reader = this;
    const offsetEnd = offset + length;
    const blob = offset || offsetEnd < reader.size ? reader.blob.slice(offset, offsetEnd) : reader.blob;
    let arrayBuffer = await blob.arrayBuffer();
    if (arrayBuffer.byteLength > length) {
      arrayBuffer = arrayBuffer.slice(offset, offsetEnd);
    }
    return new Uint8Array(arrayBuffer);
  }
};
var BlobWriter = class extends Stream {
  constructor(contentType) {
    super();
    const writer = this;
    const transformStream = new TransformStream();
    const headers = [];
    if (contentType) {
      headers.push([HTTP_HEADER_CONTENT_TYPE, contentType]);
    }
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return transformStream.writable;
      }
    });
    writer.blob = new Response(transformStream.readable, { headers }).blob();
  }
  getData() {
    return this.blob;
  }
};
var TextWriter = class extends BlobWriter {
  constructor(encoding) {
    super(encoding);
    Object.assign(this, {
      encoding,
      utf8: !encoding || encoding.toLowerCase() == "utf-8"
    });
  }
  async getData() {
    const {
      encoding,
      utf8
    } = this;
    const blob = await super.getData();
    if (blob.text && utf8) {
      return blob.text();
    } else {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        Object.assign(reader, {
          onload: ({ target }) => resolve(target.result),
          onerror: () => reject(reader.error)
        });
        reader.readAsText(blob, encoding);
      });
    }
  }
};
var SplitDataReader = class extends Reader {
  constructor(readers) {
    super();
    this.readers = readers;
  }
  async init() {
    const reader = this;
    const { readers } = reader;
    reader.lastDiskNumber = 0;
    reader.lastDiskOffset = 0;
    await Promise.all(readers.map(async (diskReader, indexDiskReader) => {
      await diskReader.init();
      if (indexDiskReader != readers.length - 1) {
        reader.lastDiskOffset += diskReader.size;
      }
      reader.size += diskReader.size;
    }));
    super.init();
  }
  async readUint8Array(offset, length, diskNumber = 0) {
    const reader = this;
    const { readers } = this;
    let result;
    let currentDiskNumber = diskNumber;
    if (currentDiskNumber == -1) {
      currentDiskNumber = readers.length - 1;
    }
    let currentReaderOffset = offset;
    while (currentReaderOffset >= readers[currentDiskNumber].size) {
      currentReaderOffset -= readers[currentDiskNumber].size;
      currentDiskNumber++;
    }
    const currentReader = readers[currentDiskNumber];
    const currentReaderSize = currentReader.size;
    if (currentReaderOffset + length <= currentReaderSize) {
      result = await readUint8Array(currentReader, currentReaderOffset, length);
    } else {
      const chunkLength = currentReaderSize - currentReaderOffset;
      result = new Uint8Array(length);
      result.set(await readUint8Array(currentReader, currentReaderOffset, chunkLength));
      result.set(await reader.readUint8Array(offset + chunkLength, length - chunkLength, diskNumber), chunkLength);
    }
    reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
    return result;
  }
};
var SplitDataWriter = class extends Stream {
  constructor(writerGenerator, maxSize = 4294967295) {
    super();
    const writer = this;
    Object.assign(writer, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize,
      availableSize: maxSize
    });
    let diskSourceWriter, diskWritable, diskWriter;
    const writable = new WritableStream({
      async write(chunk) {
        const { availableSize } = writer;
        if (!diskWriter) {
          const { value, done } = await writerGenerator.next();
          if (done && !value) {
            throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
          } else {
            diskSourceWriter = value;
            diskSourceWriter.size = 0;
            if (diskSourceWriter.maxSize) {
              writer.maxSize = diskSourceWriter.maxSize;
            }
            writer.availableSize = writer.maxSize;
            await initStream(diskSourceWriter);
            diskWritable = value.writable;
            diskWriter = diskWritable.getWriter();
          }
          await this.write(chunk);
        } else if (chunk.length >= availableSize) {
          await writeChunk(chunk.slice(0, availableSize));
          await closeDisk();
          writer.diskOffset += diskSourceWriter.size;
          writer.diskNumber++;
          diskWriter = null;
          await this.write(chunk.slice(availableSize));
        } else {
          await writeChunk(chunk);
        }
      },
      async close() {
        await diskWriter.ready;
        await closeDisk();
      }
    });
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return writable;
      }
    });
    async function writeChunk(chunk) {
      const chunkLength = chunk.length;
      if (chunkLength) {
        await diskWriter.ready;
        await diskWriter.write(chunk);
        diskSourceWriter.size += chunkLength;
        writer.size += chunkLength;
        writer.availableSize -= chunkLength;
      }
    }
    async function closeDisk() {
      diskWritable.size = diskSourceWriter.size;
      await diskWriter.close();
    }
  }
};
async function initStream(stream, initSize) {
  if (stream.init && !stream.initialized) {
    await stream.init(initSize);
  } else {
    return Promise.resolve();
  }
}
function initReader(reader) {
  if (Array.isArray(reader)) {
    reader = new SplitDataReader(reader);
  }
  if (reader instanceof ReadableStream) {
    reader = {
      readable: reader
    };
  }
  return reader;
}
function initWriter(writer) {
  if (writer.writable === UNDEFINED_VALUE && typeof writer.next == FUNCTION_TYPE) {
    writer = new SplitDataWriter(writer);
  }
  if (writer instanceof WritableStream) {
    writer = {
      writable: writer
    };
  }
  const { writable } = writer;
  if (writable.size === UNDEFINED_VALUE) {
    writable.size = 0;
  }
  if (!(writer instanceof SplitDataWriter)) {
    Object.assign(writer, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: Infinity,
      maxSize: Infinity
    });
  }
  return writer;
}
function readUint8Array(reader, offset, size, diskNumber) {
  return reader.readUint8Array(offset, size, diskNumber);
}

// node_modules/@zip.js/zip.js/lib/core/util/cp437-decode.js
var CP437 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split("");
var VALID_CP437 = CP437.length == 256;
function decodeCP437(stringValue) {
  if (VALID_CP437) {
    let result = "";
    for (let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++) {
      result += CP437[stringValue[indexCharacter]];
    }
    return result;
  } else {
    return new TextDecoder().decode(stringValue);
  }
}

// node_modules/@zip.js/zip.js/lib/core/util/decode-text.js
function decodeText(value, encoding) {
  if (encoding && encoding.trim().toLowerCase() == "cp437") {
    return decodeCP437(value);
  } else {
    return new TextDecoder(encoding).decode(value);
  }
}

// node_modules/@zip.js/zip.js/lib/core/zip-entry.js
var PROPERTY_NAME_FILENAME = "filename";
var PROPERTY_NAME_RAW_FILENAME = "rawFilename";
var PROPERTY_NAME_COMMENT = "comment";
var PROPERTY_NAME_RAW_COMMENT = "rawComment";
var PROPERTY_NAME_UNCOMPPRESSED_SIZE = "uncompressedSize";
var PROPERTY_NAME_COMPPRESSED_SIZE = "compressedSize";
var PROPERTY_NAME_OFFSET = "offset";
var PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart";
var PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate";
var PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate";
var PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate";
var PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate";
var PROPERTY_NAME_CREATION_DATE = "creationDate";
var PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate";
var PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE = "internalFileAttribute";
var PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES = "internalFileAttributes";
var PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE = "externalFileAttribute";
var PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES = "externalFileAttributes";
var PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible";
var PROPERTY_NAME_ZIP64 = "zip64";
var PROPERTY_NAME_ENCRYPTED = "encrypted";
var PROPERTY_NAME_VERSION = "version";
var PROPERTY_NAME_VERSION_MADE_BY = "versionMadeBy";
var PROPERTY_NAME_ZIPCRYPTO = "zipCrypto";
var PROPERTY_NAME_DIRECTORY = "directory";
var PROPERTY_NAME_EXECUTABLE = "executable";
var PROPERTY_NAMES = [
  PROPERTY_NAME_FILENAME,
  PROPERTY_NAME_RAW_FILENAME,
  PROPERTY_NAME_COMPPRESSED_SIZE,
  PROPERTY_NAME_UNCOMPPRESSED_SIZE,
  PROPERTY_NAME_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_COMMENT,
  PROPERTY_NAME_RAW_COMMENT,
  PROPERTY_NAME_LAST_ACCESS_DATE,
  PROPERTY_NAME_CREATION_DATE,
  PROPERTY_NAME_OFFSET,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES,
  PROPERTY_NAME_MS_DOS_COMPATIBLE,
  PROPERTY_NAME_ZIP64,
  PROPERTY_NAME_ENCRYPTED,
  PROPERTY_NAME_VERSION,
  PROPERTY_NAME_VERSION_MADE_BY,
  PROPERTY_NAME_ZIPCRYPTO,
  PROPERTY_NAME_DIRECTORY,
  PROPERTY_NAME_EXECUTABLE,
  "bitFlag",
  "signature",
  "filenameUTF8",
  "commentUTF8",
  "compressionMethod",
  "extraField",
  "rawExtraField",
  "extraFieldZip64",
  "extraFieldUnicodePath",
  "extraFieldUnicodeComment",
  "extraFieldAES",
  "extraFieldNTFS",
  "extraFieldExtendedTimestamp"
];
var Entry = class {
  constructor(data) {
    PROPERTY_NAMES.forEach((name) => this[name] = data[name]);
  }
};

// node_modules/@zip.js/zip.js/lib/core/zip-reader.js
var ERR_BAD_FORMAT = "File format is not recognized";
var ERR_EOCDR_NOT_FOUND = "End of central directory not found";
var ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
var ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
var ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
var ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
var ERR_ENCRYPTED = "File contains encrypted entry";
var ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
var ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
var ERR_SPLIT_ZIP_FILE = "Split zip file";
var CHARSET_UTF8 = "utf-8";
var CHARSET_CP437 = "cp437";
var ZIP64_PROPERTIES = [
  [PROPERTY_NAME_UNCOMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_COMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_OFFSET, MAX_32_BITS],
  [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
];
var ZIP64_EXTRACTION = {
  [MAX_16_BITS]: {
    getValue: getUint32,
    bytes: 4
  },
  [MAX_32_BITS]: {
    getValue: getBigUint64,
    bytes: 8
  }
};
var ZipReader = class {
  constructor(reader, options = {}) {
    Object.assign(this, {
      reader: initReader(reader),
      options,
      config: getConfiguration()
    });
  }
  async *getEntriesGenerator(options = {}) {
    const zipReader = this;
    let { reader } = zipReader;
    const { config: config2 } = zipReader;
    await initStream(reader);
    if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
      reader = new BlobReader(await new Response(reader.readable).blob());
      await initStream(reader);
    }
    if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
      throw new Error(ERR_BAD_FORMAT);
    }
    reader.chunkSize = getChunkSize(config2);
    const endOfDirectoryInfo = await seekSignature(reader, END_OF_CENTRAL_DIR_SIGNATURE, reader.size, END_OF_CENTRAL_DIR_LENGTH, MAX_16_BITS * 16);
    if (!endOfDirectoryInfo) {
      const signatureArray = await readUint8Array(reader, 0, 4);
      const signatureView = getDataView(signatureArray);
      if (getUint32(signatureView) == SPLIT_ZIP_FILE_SIGNATURE) {
        throw new Error(ERR_SPLIT_ZIP_FILE);
      } else {
        throw new Error(ERR_EOCDR_NOT_FOUND);
      }
    }
    const endOfDirectoryView = getDataView(endOfDirectoryInfo);
    let directoryDataLength = getUint32(endOfDirectoryView, 12);
    let directoryDataOffset = getUint32(endOfDirectoryView, 16);
    const commentOffset = endOfDirectoryInfo.offset;
    const commentLength = getUint16(endOfDirectoryView, 20);
    const appendedDataOffset = commentOffset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
    let lastDiskNumber = getUint16(endOfDirectoryView, 4);
    const expectedLastDiskNumber = reader.lastDiskNumber || 0;
    let diskNumber = getUint16(endOfDirectoryView, 6);
    let filesLength = getUint16(endOfDirectoryView, 8);
    let prependedDataLength = 0;
    let startOffset = 0;
    if (directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || filesLength == MAX_16_BITS || diskNumber == MAX_16_BITS) {
      const endOfDirectoryLocatorArray = await readUint8Array(reader, endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH);
      const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
      if (getUint32(endOfDirectoryLocatorView, 0) == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
        directoryDataOffset = getBigUint64(endOfDirectoryLocatorView, 8);
        let endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
        let endOfDirectoryView2 = getDataView(endOfDirectoryArray);
        const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
        if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
          const originalDirectoryDataOffset = directoryDataOffset;
          directoryDataOffset = expectedDirectoryDataOffset;
          prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
          endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
          endOfDirectoryView2 = getDataView(endOfDirectoryArray);
        }
        if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
          throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
        }
        if (lastDiskNumber == MAX_16_BITS) {
          lastDiskNumber = getUint32(endOfDirectoryView2, 16);
        }
        if (diskNumber == MAX_16_BITS) {
          diskNumber = getUint32(endOfDirectoryView2, 20);
        }
        if (filesLength == MAX_16_BITS) {
          filesLength = getBigUint64(endOfDirectoryView2, 32);
        }
        if (directoryDataLength == MAX_32_BITS) {
          directoryDataLength = getBigUint64(endOfDirectoryView2, 40);
        }
        directoryDataOffset -= directoryDataLength;
      }
    }
    if (directoryDataOffset >= reader.size) {
      prependedDataLength = reader.size - directoryDataOffset - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
      directoryDataOffset = reader.size - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
    }
    if (expectedLastDiskNumber != lastDiskNumber) {
      throw new Error(ERR_SPLIT_ZIP_FILE);
    }
    if (directoryDataOffset < 0) {
      throw new Error(ERR_BAD_FORMAT);
    }
    let offset = 0;
    let directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
    let directoryView = getDataView(directoryArray);
    if (directoryDataLength) {
      const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - directoryDataLength;
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
        const originalDirectoryDataOffset = directoryDataOffset;
        directoryDataOffset = expectedDirectoryDataOffset;
        prependedDataLength += directoryDataOffset - originalDirectoryDataOffset;
        directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
        directoryView = getDataView(directoryArray);
      }
    }
    const expectedDirectoryDataLength = endOfDirectoryInfo.offset - directoryDataOffset - (reader.lastDiskOffset || 0);
    if (directoryDataLength != expectedDirectoryDataLength && expectedDirectoryDataLength >= 0) {
      directoryDataLength = expectedDirectoryDataLength;
      directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
      directoryView = getDataView(directoryArray);
    }
    if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) {
      throw new Error(ERR_BAD_FORMAT);
    }
    const filenameEncoding = getOptionValue(zipReader, options, "filenameEncoding");
    const commentEncoding = getOptionValue(zipReader, options, "commentEncoding");
    for (let indexFile = 0; indexFile < filesLength; indexFile++) {
      const fileEntry = new ZipEntry(reader, config2, zipReader.options);
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE) {
        throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
      }
      readCommonHeader(fileEntry, directoryView, offset + 6);
      const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
      const filenameOffset = offset + 46;
      const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
      const commentOffset2 = extraFieldOffset + fileEntry.extraFieldLength;
      const versionMadeBy = getUint16(directoryView, offset + 4);
      const msDosCompatible = versionMadeBy >> 8 == 0;
      const unixCompatible = versionMadeBy >> 8 == 3;
      const rawFilename = directoryArray.subarray(filenameOffset, extraFieldOffset);
      const commentLength2 = getUint16(directoryView, offset + 32);
      const endOffset = commentOffset2 + commentLength2;
      const rawComment = directoryArray.subarray(commentOffset2, endOffset);
      const filenameUTF8 = languageEncodingFlag;
      const commentUTF8 = languageEncodingFlag;
      const externalFileAttributes = getUint32(directoryView, offset + 38);
      const directory = msDosCompatible && (getUint8(directoryView, offset + 38) & FILE_ATTR_MSDOS_DIR_MASK) == FILE_ATTR_MSDOS_DIR_MASK || unixCompatible && (externalFileAttributes >> 16 & FILE_ATTR_UNIX_DIR_MASK) == FILE_ATTR_UNIX_DIR_MASK || rawFilename.length && rawFilename[rawFilename.length - 1] == DIRECTORY_SIGNATURE.charCodeAt(0);
      const executable = unixCompatible && (externalFileAttributes >> 16 & FILE_ATTR_UNIX_EXECUTABLE_MASK) == FILE_ATTR_UNIX_EXECUTABLE_MASK;
      const offsetFileEntry = getUint32(directoryView, offset + 42) + prependedDataLength;
      Object.assign(fileEntry, {
        versionMadeBy,
        msDosCompatible,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: commentLength2,
        directory,
        offset: offsetFileEntry,
        diskNumberStart: getUint16(directoryView, offset + 34),
        internalFileAttributes: getUint16(directoryView, offset + 36),
        externalFileAttributes,
        rawFilename,
        filenameUTF8,
        commentUTF8,
        rawExtraField: directoryArray.subarray(extraFieldOffset, commentOffset2),
        executable
      });
      fileEntry.internalFileAttribute = fileEntry.internalFileAttributes;
      fileEntry.externalFileAttribute = fileEntry.externalFileAttributes;
      const decode = getOptionValue(zipReader, options, "decodeText") || decodeText;
      const rawFilenameEncoding = filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437;
      const rawCommentEncoding = commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437;
      let filename = decode(rawFilename, rawFilenameEncoding);
      if (filename === UNDEFINED_VALUE) {
        filename = decodeText(rawFilename, rawFilenameEncoding);
      }
      let comment = decode(rawComment, rawCommentEncoding);
      if (comment === UNDEFINED_VALUE) {
        comment = decodeText(rawComment, rawCommentEncoding);
      }
      Object.assign(fileEntry, {
        rawComment,
        filename,
        comment,
        directory: directory || filename.endsWith(DIRECTORY_SIGNATURE)
      });
      startOffset = Math.max(offsetFileEntry, startOffset);
      readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
      fileEntry.zipCrypto = fileEntry.encrypted && !fileEntry.extraFieldAES;
      const entry = new Entry(fileEntry);
      entry.getData = (writer, options2) => fileEntry.getData(writer, entry, options2);
      offset = endOffset;
      const { onprogress } = options;
      if (onprogress) {
        try {
          await onprogress(indexFile + 1, filesLength, new Entry(fileEntry));
        } catch (_) {
        }
      }
      yield entry;
    }
    const extractPrependedData = getOptionValue(zipReader, options, "extractPrependedData");
    const extractAppendedData = getOptionValue(zipReader, options, "extractAppendedData");
    if (extractPrependedData) {
      zipReader.prependedData = startOffset > 0 ? await readUint8Array(reader, 0, startOffset) : new Uint8Array();
    }
    zipReader.comment = commentLength ? await readUint8Array(reader, commentOffset + END_OF_CENTRAL_DIR_LENGTH, commentLength) : new Uint8Array();
    if (extractAppendedData) {
      zipReader.appendedData = appendedDataOffset < reader.size ? await readUint8Array(reader, appendedDataOffset, reader.size - appendedDataOffset) : new Uint8Array();
    }
    return true;
  }
  async getEntries(options = {}) {
    const entries = [];
    for await (const entry of this.getEntriesGenerator(options)) {
      entries.push(entry);
    }
    return entries;
  }
  async close() {
  }
};
var ZipEntry = class {
  constructor(reader, config2, options) {
    Object.assign(this, {
      reader,
      config: config2,
      options
    });
  }
  async getData(writer, fileEntry, options = {}) {
    const zipEntry = this;
    const {
      reader,
      offset,
      diskNumberStart,
      extraFieldAES,
      compressionMethod,
      config: config2,
      bitFlag,
      signature,
      rawLastModDate,
      uncompressedSize,
      compressedSize
    } = zipEntry;
    const localDirectory = fileEntry.localDirectory = {};
    const dataArray = await readUint8Array(reader, offset, 30, diskNumberStart);
    const dataView = getDataView(dataArray);
    let password = getOptionValue(zipEntry, options, "password");
    let rawPassword = getOptionValue(zipEntry, options, "rawPassword");
    const passThrough = getOptionValue(zipEntry, options, "passThrough");
    password = password && password.length && password;
    rawPassword = rawPassword && rawPassword.length && rawPassword;
    if (extraFieldAES) {
      if (extraFieldAES.originalCompressionMethod != COMPRESSION_METHOD_AES) {
        throw new Error(ERR_UNSUPPORTED_COMPRESSION);
      }
    }
    if (compressionMethod != COMPRESSION_METHOD_STORE && compressionMethod != COMPRESSION_METHOD_DEFLATE && !passThrough) {
      throw new Error(ERR_UNSUPPORTED_COMPRESSION);
    }
    if (getUint32(dataView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
      throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
    }
    readCommonHeader(localDirectory, dataView, 4);
    localDirectory.rawExtraField = localDirectory.extraFieldLength ? await readUint8Array(reader, offset + 30 + localDirectory.filenameLength, localDirectory.extraFieldLength, diskNumberStart) : new Uint8Array();
    readCommonFooter(zipEntry, localDirectory, dataView, 4, true);
    Object.assign(fileEntry, {
      lastAccessDate: localDirectory.lastAccessDate,
      creationDate: localDirectory.creationDate
    });
    const encrypted = zipEntry.encrypted && localDirectory.encrypted && !passThrough;
    const zipCrypto = encrypted && !extraFieldAES;
    if (!passThrough) {
      fileEntry.zipCrypto = zipCrypto;
    }
    if (encrypted) {
      if (!zipCrypto && extraFieldAES.strength === UNDEFINED_VALUE) {
        throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
      } else if (!password && !rawPassword) {
        throw new Error(ERR_ENCRYPTED);
      }
    }
    const dataOffset = offset + 30 + localDirectory.filenameLength + localDirectory.extraFieldLength;
    const size = compressedSize;
    const readable = reader.readable;
    Object.assign(readable, {
      diskNumberStart,
      offset: dataOffset,
      size
    });
    const signal = getOptionValue(zipEntry, options, "signal");
    const checkPasswordOnly = getOptionValue(zipEntry, options, "checkPasswordOnly");
    if (checkPasswordOnly) {
      writer = new WritableStream();
    }
    writer = initWriter(writer);
    await initStream(writer, passThrough ? compressedSize : uncompressedSize);
    const { writable } = writer;
    const { onstart, onprogress, onend } = options;
    const workerOptions = {
      options: {
        codecType: CODEC_INFLATE,
        password,
        rawPassword,
        zipCrypto,
        encryptionStrength: extraFieldAES && extraFieldAES.strength,
        signed: getOptionValue(zipEntry, options, "checkSignature") && !passThrough,
        passwordVerification: zipCrypto && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 255 : signature >>> 24 & 255),
        signature,
        compressed: compressionMethod != 0 && !passThrough,
        encrypted: zipEntry.encrypted && !passThrough,
        useWebWorkers: getOptionValue(zipEntry, options, "useWebWorkers"),
        useCompressionStream: getOptionValue(zipEntry, options, "useCompressionStream"),
        transferStreams: getOptionValue(zipEntry, options, "transferStreams"),
        checkPasswordOnly
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    let outputSize = 0;
    try {
      ({ outputSize } = await runWorker2({ readable, writable }, workerOptions));
    } catch (error) {
      if (!checkPasswordOnly || error.message != ERR_ABORT_CHECK_PASSWORD) {
        throw error;
      }
    } finally {
      const preventClose = getOptionValue(zipEntry, options, "preventClose");
      writable.size += outputSize;
      if (!preventClose && !writable.locked) {
        await writable.getWriter().close();
      }
    }
    return checkPasswordOnly ? UNDEFINED_VALUE : writer.getData ? writer.getData() : writable;
  }
};
function readCommonHeader(directory, dataView, offset) {
  const rawBitFlag = directory.rawBitFlag = getUint16(dataView, offset + 2);
  const encrypted = (rawBitFlag & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED;
  const rawLastModDate = getUint32(dataView, offset + 6);
  Object.assign(directory, {
    encrypted,
    version: getUint16(dataView, offset),
    bitFlag: {
      level: (rawBitFlag & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (rawBitFlag & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (rawBitFlag & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate,
    lastModDate: getDate(rawLastModDate),
    filenameLength: getUint16(dataView, offset + 22),
    extraFieldLength: getUint16(dataView, offset + 24)
  });
}
function readCommonFooter(fileEntry, directory, dataView, offset, localDirectory) {
  const { rawExtraField } = directory;
  const extraField = directory.extraField = /* @__PURE__ */ new Map();
  const rawExtraFieldView = getDataView(new Uint8Array(rawExtraField));
  let offsetExtraField = 0;
  try {
    while (offsetExtraField < rawExtraField.length) {
      const type = getUint16(rawExtraFieldView, offsetExtraField);
      const size = getUint16(rawExtraFieldView, offsetExtraField + 2);
      extraField.set(type, {
        type,
        data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
      });
      offsetExtraField += 4 + size;
    }
  } catch (_) {
  }
  const compressionMethod = getUint16(dataView, offset + 4);
  Object.assign(directory, {
    signature: getUint32(dataView, offset + 10),
    uncompressedSize: getUint32(dataView, offset + 18),
    compressedSize: getUint32(dataView, offset + 14)
  });
  const extraFieldZip64 = extraField.get(EXTRAFIELD_TYPE_ZIP64);
  if (extraFieldZip64) {
    readExtraFieldZip64(extraFieldZip64, directory);
    directory.extraFieldZip64 = extraFieldZip64;
  }
  const extraFieldUnicodePath = extraField.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  if (extraFieldUnicodePath) {
    readExtraFieldUnicode(extraFieldUnicodePath, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, directory, fileEntry);
    directory.extraFieldUnicodePath = extraFieldUnicodePath;
  }
  const extraFieldUnicodeComment = extraField.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  if (extraFieldUnicodeComment) {
    readExtraFieldUnicode(extraFieldUnicodeComment, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, directory, fileEntry);
    directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
  }
  const extraFieldAES = extraField.get(EXTRAFIELD_TYPE_AES);
  if (extraFieldAES) {
    readExtraFieldAES(extraFieldAES, directory, compressionMethod);
    directory.extraFieldAES = extraFieldAES;
  } else {
    directory.compressionMethod = compressionMethod;
  }
  const extraFieldNTFS = extraField.get(EXTRAFIELD_TYPE_NTFS);
  if (extraFieldNTFS) {
    readExtraFieldNTFS(extraFieldNTFS, directory);
    directory.extraFieldNTFS = extraFieldNTFS;
  }
  const extraFieldExtendedTimestamp = extraField.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  if (extraFieldExtendedTimestamp) {
    readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory);
    directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
  }
  const extraFieldUSDZ = extraField.get(EXTRAFIELD_TYPE_USDZ);
  if (extraFieldUSDZ) {
    directory.extraFieldUSDZ = extraFieldUSDZ;
  }
}
function readExtraFieldZip64(extraFieldZip64, directory) {
  directory.zip64 = true;
  const extraFieldView = getDataView(extraFieldZip64.data);
  const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max]) => directory[propertyName] == max);
  for (let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++) {
    const [propertyName, max] = missingProperties[indexMissingProperty];
    if (directory[propertyName] == max) {
      const extraction = ZIP64_EXTRACTION[max];
      directory[propertyName] = extraFieldZip64[propertyName] = extraction.getValue(extraFieldView, offset);
      offset += extraction.bytes;
    } else if (extraFieldZip64[propertyName]) {
      throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
    }
  }
}
function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
  const extraFieldView = getDataView(extraFieldUnicode.data);
  const crc32 = new Crc32();
  crc32.append(fileEntry[rawPropertyName]);
  const dataViewSignature = getDataView(new Uint8Array(4));
  dataViewSignature.setUint32(0, crc32.get(), true);
  const signature = getUint32(extraFieldView, 1);
  Object.assign(extraFieldUnicode, {
    version: getUint8(extraFieldView, 0),
    [propertyName]: decodeText(extraFieldUnicode.data.subarray(5)),
    valid: !fileEntry.bitFlag.languageEncodingFlag && signature == getUint32(dataViewSignature, 0)
  });
  if (extraFieldUnicode.valid) {
    directory[propertyName] = extraFieldUnicode[propertyName];
    directory[propertyName + "UTF8"] = true;
  }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
  const extraFieldView = getDataView(extraFieldAES.data);
  const strength = getUint8(extraFieldView, 4);
  Object.assign(extraFieldAES, {
    vendorVersion: getUint8(extraFieldView, 0),
    vendorId: getUint8(extraFieldView, 2),
    strength,
    originalCompressionMethod: compressionMethod,
    compressionMethod: getUint16(extraFieldView, 5)
  });
  directory.compressionMethod = extraFieldAES.compressionMethod;
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
  const extraFieldView = getDataView(extraFieldNTFS.data);
  let offsetExtraField = 4;
  let tag1Data;
  try {
    while (offsetExtraField < extraFieldNTFS.data.length && !tag1Data) {
      const tagValue = getUint16(extraFieldView, offsetExtraField);
      const attributeSize = getUint16(extraFieldView, offsetExtraField + 2);
      if (tagValue == EXTRAFIELD_TYPE_NTFS_TAG1) {
        tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
      }
      offsetExtraField += 4 + attributeSize;
    }
  } catch (_) {
  }
  try {
    if (tag1Data && tag1Data.length == 24) {
      const tag1View = getDataView(tag1Data);
      const rawLastModDate = tag1View.getBigUint64(0, true);
      const rawLastAccessDate = tag1View.getBigUint64(8, true);
      const rawCreationDate = tag1View.getBigUint64(16, true);
      Object.assign(extraFieldNTFS, {
        rawLastModDate,
        rawLastAccessDate,
        rawCreationDate
      });
      const lastModDate = getDateNTFS(rawLastModDate);
      const lastAccessDate = getDateNTFS(rawLastAccessDate);
      const creationDate = getDateNTFS(rawCreationDate);
      const extraFieldData = { lastModDate, lastAccessDate, creationDate };
      Object.assign(extraFieldNTFS, extraFieldData);
      Object.assign(directory, extraFieldData);
    }
  } catch (_) {
  }
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory) {
  const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
  const flags = getUint8(extraFieldView, 0);
  const timeProperties = [];
  const timeRawProperties = [];
  if (localDirectory) {
    if ((flags & 1) == 1) {
      timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
    }
    if ((flags & 2) == 2) {
      timeProperties.push(PROPERTY_NAME_LAST_ACCESS_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE);
    }
    if ((flags & 4) == 4) {
      timeProperties.push(PROPERTY_NAME_CREATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_CREATION_DATE);
    }
  } else if (extraFieldExtendedTimestamp.data.length >= 5) {
    timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
    timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  }
  let offset = 1;
  timeProperties.forEach((propertyName, indexProperty) => {
    if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
      const time = getUint32(extraFieldView, offset);
      directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date(time * 1e3);
      const rawPropertyName = timeRawProperties[indexProperty];
      extraFieldExtendedTimestamp[rawPropertyName] = time;
    }
    offset += 4;
  });
}
async function seekSignature(reader, signature, startOffset, minimumBytes, maximumLength) {
  const signatureArray = new Uint8Array(4);
  const signatureView = getDataView(signatureArray);
  setUint32(signatureView, 0, signature);
  const maximumBytes = minimumBytes + maximumLength;
  return await seek(minimumBytes) || await seek(Math.min(maximumBytes, startOffset));
  async function seek(length) {
    const offset = startOffset - length;
    const bytes = await readUint8Array(reader, offset, length);
    for (let indexByte = bytes.length - minimumBytes; indexByte >= 0; indexByte--) {
      if (bytes[indexByte] == signatureArray[0] && bytes[indexByte + 1] == signatureArray[1] && bytes[indexByte + 2] == signatureArray[2] && bytes[indexByte + 3] == signatureArray[3]) {
        return {
          offset: offset + indexByte,
          buffer: bytes.slice(indexByte, indexByte + minimumBytes).buffer
        };
      }
    }
  }
}
function getOptionValue(zipReader, options, name) {
  return options[name] === UNDEFINED_VALUE ? zipReader.options[name] : options[name];
}
function getDate(timeRaw) {
  const date = (timeRaw & 4294901760) >> 16, time = timeRaw & 65535;
  try {
    return new Date(1980 + ((date & 65024) >> 9), ((date & 480) >> 5) - 1, date & 31, (time & 63488) >> 11, (time & 2016) >> 5, (time & 31) * 2, 0);
  } catch (_) {
  }
}
function getDateNTFS(timeRaw) {
  return new Date(Number(timeRaw / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(view, offset) {
  return view.getUint8(offset);
}
function getUint16(view, offset) {
  return view.getUint16(offset, true);
}
function getUint32(view, offset) {
  return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
  return Number(view.getBigUint64(offset, true));
}
function setUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}
function getDataView(array) {
  return new DataView(array.buffer);
}

// node_modules/@zip.js/zip.js/lib/core/zip-writer.js
var EXTRAFIELD_DATA_AES = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);

// node_modules/@zip.js/zip.js/lib/zip-fs.js
var import_meta = {};
var baseURL;
try {
  baseURL = import_meta.url;
} catch (_) {
}
configure({ baseURL });
e(configure);

// node_modules/@zip.js/zip.js/index.js
configure({ Deflate: ZipDeflate, Inflate: ZipInflate });

// src/importer.ts
configure({ useWebWorkers: false });
var ArchiveFile = class {
  constructor(entry) {
    this.entry = entry;
    this.path = normalizeSourcePath(entry.filename);
    this.name = basename(this.path);
    this.extension = extension(this.name);
  }
  path;
  name;
  extension;
  async readText() {
    return this.entry.getData(new TextWriter());
  }
  async readBinary() {
    return (await this.entry.getData(new BlobWriter())).arrayBuffer();
  }
};
var LoadedArchive = class _LoadedArchive {
  files = [];
  readers = [];
  static async open(file) {
    const archive = new _LoadedArchive();
    await archive.readZip(file);
    return archive;
  }
  async close() {
    await Promise.all(this.readers.map(async (reader) => {
      try {
        await reader.close();
      } catch {
      }
    }));
  }
  async readZip(blob) {
    const reader = new ZipReader(new BlobReader(blob));
    this.readers.push(reader);
    const entries = await reader.getEntries();
    for (const entry of entries) {
      if (entry.directory || !entry.getData) continue;
      const readable = entry;
      if (isNotionPartZip(readable.filename)) {
        const nested = await readable.getData(new BlobWriter());
        await this.readZip(nested);
      } else {
        this.files.push(new ArchiveFile(readable));
      }
    }
  }
};
var NaitFlowImportPlan = class {
  constructor(app, archive, format, sourceName, pages, attachments, renamedCount, unresolvedLinksCount) {
    this.app = app;
    this.archive = archive;
    this.pages = pages;
    this.attachments = attachments;
    this.format = format;
    this.sourceName = sourceName;
    this.pagesCount = pages.length;
    this.attachmentsCount = attachments.length;
    this.renamedCount = renamedCount;
    this.unresolvedLinksCount = unresolvedLinksCount;
    this.iconsCount = pages.filter((page) => page.icon).length;
    this.coversCount = pages.filter((page) => page.cover).length;
    this.defaultDestination = uniqueImportName(app, "_import");
    for (const page of pages) {
      this.pageById.set(page.sourceId, page);
      this.pageBySourcePath.set(sourceKey(page.sourcePath), page);
    }
    for (const attachment of attachments) {
      this.attachmentBySourcePath.set(sourceKey(attachment.sourcePath), attachment);
    }
  }
  format;
  sourceName;
  defaultDestination;
  pagesCount;
  attachmentsCount;
  renamedCount;
  unresolvedLinksCount;
  iconsCount;
  coversCount;
  pageById = /* @__PURE__ */ new Map();
  pageBySourcePath = /* @__PURE__ */ new Map();
  attachmentBySourcePath = /* @__PURE__ */ new Map();
  async close() {
    await this.archive.close();
  }
  async execute(destinationInput, onProgress) {
    const requestedName = normalizeImportName(destinationInput);
    if (!requestedName) throw new Error("destination-empty");
    const destination = uniqueImportName(this.app, requestedName);
    const folders = /* @__PURE__ */ new Set([destination]);
    for (const page of this.pages) {
      const target = (0, import_obsidian5.normalizePath)(`${destination}/${page.targetPath}`);
      const parent = dirname(target);
      if (parent) folders.add(parent);
    }
    for (const attachment of this.attachments) {
      const target = (0, import_obsidian5.normalizePath)(`${destination}/${attachment.targetPath}`);
      const parent = dirname(target);
      if (parent) folders.add(parent);
    }
    for (const folder of [...folders].sort((a, b) => pathDepth(a) - pathDepth(b))) {
      await ensureFolder(this.app, folder);
    }
    await this.app.vault.create(`${destination}.md`, "");
    const total = this.pages.length + this.attachments.length;
    let current = 0;
    for (const page of this.pages) {
      onProgress({ current, total, label: page.title });
      const body = this.format === "notion-html" ? this.convertHtml(page, destination) : this.convertMarkdown(page, destination);
      const targetPath = (0, import_obsidian5.normalizePath)(`${destination}/${page.targetPath}`);
      const created = await this.app.vault.create(targetPath, body);
      await this.applyPageMeta(created, page, destination);
      current += 1;
      onProgress({ current, total, label: page.title });
    }
    for (const attachment of this.attachments) {
      onProgress({ current, total, label: basename(attachment.targetPath) });
      const targetPath = (0, import_obsidian5.normalizePath)(`${destination}/${attachment.targetPath}`);
      await this.app.vault.createBinary(targetPath, await attachment.source.readBinary());
      current += 1;
      onProgress({ current, total, label: basename(attachment.targetPath) });
    }
    return { destination, pages: this.pages.length, attachments: this.attachments.length };
  }
  convertMarkdown(page, destination) {
    let markdown = page.rawContent.replace(/\r\n?/g, "\n");
    if (this.format === "notion-md") markdown = removeMatchingTitle(markdown, page.title);
    return rewriteOutsideFences(markdown, (chunk) => chunk.replace(
      /(!?)\[([^\]]*)\]\(([^)\n]+)\)/g,
      (original, embed, label, rawTarget) => {
        const target = cleanMarkdownTarget(rawTarget);
        const resolved = this.resolveTarget(page, target);
        if (!resolved) return original;
        return renderResolvedLink(resolved, destination, label, embed === "!");
      }
    )).trimEnd() + "\n";
  }
  convertHtml(page, destination) {
    const document2 = new DOMParser().parseFromString(page.rawContent, "text/html");
    const body = document2.querySelector("div.page-body");
    if (!body) throw new Error(`page-body-missing:${page.sourcePath}`);
    const tokens = /* @__PURE__ */ new Map();
    let tokenIndex = 0;
    const makeToken = (value) => {
      const token = `NAITFLOWIMPORTTOKEN${tokenIndex++}X`;
      tokens.set(token, value);
      return token;
    };
    for (const image of Array.from(body.querySelectorAll("img[src]"))) {
      const source = image.getAttribute("src") ?? "";
      const resolved = this.resolveTarget(page, source);
      if (!resolved) continue;
      const replacement = document2.createTextNode(makeToken(renderResolvedLink(resolved, destination, image.alt, true)));
      const linked = image.closest("a");
      (linked ?? image).replaceWith(replacement);
    }
    for (const link of Array.from(body.querySelectorAll("a[href]"))) {
      const href = link.getAttribute("href") ?? "";
      const resolved = this.resolveTarget(page, href);
      if (!resolved) continue;
      const label = (link.textContent ?? "").trim();
      link.replaceWith(document2.createTextNode(makeToken(renderResolvedLink(resolved, destination, label, false))));
    }
    let markdown = (0, import_obsidian5.htmlToMarkdown)(body.innerHTML).replace(/\r\n?/g, "\n");
    for (const [token, value] of tokens) markdown = markdown.split(token).join(value);
    return markdown.trim() + "\n";
  }
  resolveTarget(page, rawTarget) {
    const target = stripQueryAndHash(decodeSourcePath(rawTarget));
    const id = knownIdInTarget(target, this.pageById);
    if (isExternalTarget(target)) {
      const linkedPage2 = id ? this.pageById.get(id) : void 0;
      return linkedPage2 ? { kind: "page", targetPath: linkedPage2.targetPath, page: linkedPage2 } : null;
    }
    if (target.startsWith("#")) return null;
    const resolvedPath = target.startsWith("/") ? normalizeSourcePath(target.slice(1)) : normalizeSourcePath(`${dirname(page.sourcePath)}/${target}`);
    const linkedPage = this.pageBySourcePath.get(sourceKey(resolvedPath));
    if (linkedPage) return { kind: "page", targetPath: linkedPage.targetPath, page: linkedPage };
    const attachment = this.attachmentBySourcePath.get(sourceKey(resolvedPath));
    if (attachment) return { kind: "attachment", targetPath: attachment.targetPath };
    const linkedPageById = id ? this.pageById.get(id) : void 0;
    if (linkedPageById) return { kind: "page", targetPath: linkedPageById.targetPath, page: linkedPageById };
    return null;
  }
  async applyPageMeta(file, page, destination) {
    let cover = page.cover;
    if (cover && !isExternalTarget(cover)) {
      const resolved = this.resolveTarget(page, cover);
      if (resolved?.kind === "attachment") cover = (0, import_obsidian5.normalizePath)(`${destination}/${resolved.targetPath}`);
    }
    if (!page.icon && !cover) return;
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      if (page.icon) frontmatter[FIELDS.icon] = `emoji:${page.icon}`;
      if (cover) frontmatter[FIELDS.cover] = cover;
      if (cover && page.coverY !== void 0) frontmatter[FIELDS.coverY] = page.coverY;
    });
  }
};
async function prepareImport(app, file) {
  const archive = await LoadedArchive.open(file);
  try {
    const format = detectFormat(archive.files);
    const pages = await readPages(archive.files, format);
    if (!pages.length) throw new Error("pages-not-found");
    if (format === "buildin-md") applyBuildinLinkTitles(pages);
    const renamedCount = assignTargets(pages, format);
    const attachments = assignAttachments(archive.files, pages, format);
    const unresolvedLinksCount = countUnresolvedLinks(pages, attachments, format);
    return new NaitFlowImportPlan(app, archive, format, file.name, pages, attachments, renamedCount, unresolvedLinksCount);
  } catch (error) {
    await archive.close();
    throw error;
  }
}
function detectFormat(files) {
  if (files.some((file) => file.extension === "html" && notionId(file.name))) return "notion-html";
  if (files.some((file) => file.extension === "md" && buildinId(file.name))) return "buildin-md";
  if (files.some((file) => file.extension === "md" && notionId(file.name))) return "notion-md";
  throw new Error("format-unknown");
}
async function readPages(files, format) {
  const pageExtension = format === "notion-html" ? "html" : "md";
  const candidates = files.filter((file) => file.extension === pageExtension && (format === "buildin-md" ? buildinId(file.name) : notionId(file.name)));
  const pages = [];
  for (const source of candidates) {
    const rawContent = await source.readText();
    const id = format === "buildin-md" ? buildinId(source.name) : notionId(source.name);
    if (!id) continue;
    const rawStem = stripExtension(source.name);
    const fallbackTitle = format === "buildin-md" ? buildinTitle(rawStem) : notionTitle(rawStem);
    const title = format === "notion-html" ? htmlTitle(rawContent) || fallbackTitle : format === "notion-md" ? markdownTitle(rawContent) || fallbackTitle : fallbackTitle;
    const sourceParent = dirname(source.path);
    const folderName = format === "buildin-md" ? rawStem : notionTitle(rawStem);
    const page = {
      source,
      sourcePath: source.path,
      sourceId: id,
      sourceFolderPath: normalizeSourcePath(`${sourceParent}/${folderName}`),
      rawContent,
      title: sanitizePageName(title),
      targetTitle: "",
      targetPath: "",
      targetFolderPath: ""
    };
    if (format === "notion-html") readHtmlMeta(page);
    pages.push(page);
  }
  return pages;
}
function applyBuildinLinkTitles(pages) {
  const byId = new Map(pages.map((page) => [page.sourceId, page]));
  for (const sourcePage of pages) {
    for (const match of sourcePage.rawContent.matchAll(/!?\[([^\]]+)\]\(([^)\n]+)\)/g)) {
      const label = plainLinkLabel(match[1] ?? "");
      const target = match[2] ?? "";
      const id = knownIdInTarget(target, byId);
      const page = id ? byId.get(id) : void 0;
      if (page && label) page.title = sanitizePageName(label);
    }
  }
}
function assignTargets(pages, format) {
  const bySourceFolder = /* @__PURE__ */ new Map();
  for (const page of pages) bySourceFolder.set(sourceKey(page.sourceFolderPath), page);
  for (const page of pages) page.parent = bySourceFolder.get(sourceKey(dirname(page.sourcePath)));
  const children = /* @__PURE__ */ new Map();
  for (const page of pages) {
    const key = page.parent ?? null;
    const group = children.get(key) ?? [];
    group.push(page);
    children.set(key, group);
  }
  let renamedCount = 0;
  const assignGroup = (parent, parentTargetFolder) => {
    const group = children.get(parent) ?? [];
    const used = /* @__PURE__ */ new Set();
    for (const page of group) {
      let title = page.title;
      let suffix = 2;
      while (used.has(title.toLocaleLowerCase())) title = `${page.title} ${suffix++}`;
      if (title !== page.title) renamedCount += 1;
      used.add(title.toLocaleLowerCase());
      page.targetTitle = title;
      const fallbackParent = page.parent ? parentTargetFolder : cleanUnpairedParent(dirname(page.sourcePath), format, bySourceFolder);
      page.targetPath = normalizeSourcePath(`${fallbackParent}/${title}.md`);
      page.targetFolderPath = stripExtension(page.targetPath);
      assignGroup(page, page.targetFolderPath);
    }
  };
  assignGroup(null, "");
  return renamedCount;
}
function assignAttachments(files, pages, format) {
  const pageExtensions = /* @__PURE__ */ new Set(["md", "html"]);
  const pageSources = new Set(pages.map((page) => sourceKey(page.sourcePath)));
  const owners = [...pages].sort((a, b) => b.sourceFolderPath.length - a.sourceFolderPath.length);
  const usedNames = /* @__PURE__ */ new Map();
  const attachments = [];
  for (const source of files) {
    if (pageSources.has(sourceKey(source.path))) continue;
    if (pageExtensions.has(source.extension) && basename(source.path).toLocaleLowerCase() === "index.html") continue;
    const owner = owners.find((page) => sourceKey(source.path).startsWith(`${sourceKey(page.sourceFolderPath)}/`));
    const folder = owner ? `${owner.targetFolderPath}/\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B` : "\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B";
    const originalName = sanitizeAttachmentName(decodeSourceSegment(source.name), format);
    const used = usedNames.get(folder) ?? /* @__PURE__ */ new Set();
    let name = originalName;
    let suffix = 2;
    while (used.has(name.toLocaleLowerCase())) name = appendFilenameSuffix(originalName, suffix++);
    used.add(name.toLocaleLowerCase());
    usedNames.set(folder, used);
    attachments.push({ source, sourcePath: source.path, targetPath: normalizeSourcePath(`${folder}/${name}`) });
  }
  return attachments;
}
function countUnresolvedLinks(pages, attachments, format) {
  const pageById = new Map(pages.map((page) => [page.sourceId, page]));
  const knownPaths = /* @__PURE__ */ new Set();
  for (const page of pages) knownPaths.add(sourceKey(page.sourcePath));
  for (const attachment of attachments) knownPaths.add(sourceKey(attachment.sourcePath));
  let count = 0;
  for (const page of pages) {
    const targets = format === "notion-html" ? htmlTargets(page.rawContent) : markdownTargets(page.rawContent);
    for (const rawTarget of targets) {
      const target = stripQueryAndHash(decodeSourcePath(cleanMarkdownTarget(rawTarget)));
      const id = knownIdInTarget(target, pageById);
      if (isExternalTarget(target)) {
        if (format === "buildin-md" && /^https?:\/\/(?:www\.)?buildin\.ai\//i.test(target)) {
          const linkedId = buildinId(target);
          if (linkedId && !pageById.has(linkedId)) count += 1;
        }
        continue;
      }
      if (target.startsWith("#")) continue;
      const resolved = target.startsWith("/") ? normalizeSourcePath(target.slice(1)) : normalizeSourcePath(`${dirname(page.sourcePath)}/${target}`);
      if (!knownPaths.has(sourceKey(resolved)) && !id) count += 1;
    }
  }
  return count;
}
function readHtmlMeta(page) {
  const document2 = new DOMParser().parseFromString(page.rawContent, "text/html");
  const emoji = document2.querySelector(".page-header-icon [data-emoji]")?.getAttribute("data-emoji")?.trim();
  const cover = document2.querySelector("img.page-cover-image");
  if (emoji) page.icon = emoji;
  if (cover?.src) page.cover = cover.getAttribute("src") ?? cover.src;
  const position = cover?.style.objectPosition ?? "";
  const y = position.match(/(-?\d+(?:\.\d+)?)%\s*$/)?.[1];
  if (y !== void 0) page.coverY = Math.max(0, Math.min(100, Math.round(Number(y))));
}
function markdownTargets(markdown) {
  const targets = [];
  rewriteOutsideFences(markdown, (chunk) => {
    for (const match of chunk.matchAll(/!?\[[^\]]*\]\(([^)\n]+)\)/g)) targets.push(match[1] ?? "");
    return chunk;
  });
  return targets;
}
function htmlTargets(html) {
  const document2 = new DOMParser().parseFromString(html, "text/html");
  const body = document2.querySelector("div.page-body");
  if (!body) return [];
  return [
    ...Array.from(body.querySelectorAll("a[href]"), (element) => element.getAttribute("href") ?? ""),
    ...Array.from(body.querySelectorAll("img[src]"), (element) => element.getAttribute("src") ?? "")
  ];
}
function renderResolvedLink(target, destination, rawLabel, embed) {
  const fullPath = (0, import_obsidian5.normalizePath)(`${destination}/${target.targetPath}`);
  if (target.kind === "attachment") {
    const label2 = plainLinkLabel(rawLabel);
    if (embed) return `![[${fullPath}]]`;
    return label2 ? `[[${fullPath}|${escapeWikiAlias(label2)}]]` : `[[${fullPath}]]`;
  }
  const pagePath = fullPath.replace(/\.md$/i, "");
  const label = plainLinkLabel(rawLabel) || target.page?.targetTitle || "";
  return label ? `[[${pagePath}|${escapeWikiAlias(label)}]]` : `[[${pagePath}]]`;
}
function rewriteOutsideFences(markdown, rewrite) {
  const lines = markdown.split(/(?<=\n)/);
  let fence = null;
  let plain = "";
  let result = "";
  const flush = () => {
    if (!plain) return;
    result += rewrite(plain);
    plain = "";
  };
  for (const line of lines) {
    const marker = line.match(/^\s*(```+|~~~+)/)?.[1];
    if (marker) {
      flush();
      result += line;
      if (!fence) fence = marker[0] ?? null;
      else if (marker[0] === fence) fence = null;
    } else if (fence) {
      result += line;
    } else {
      plain += line;
    }
  }
  flush();
  return result;
}
function removeMatchingTitle(markdown, title) {
  const match = markdown.match(/^\uFEFF?#\s+([^\r\n]+)(?:\r?\n(?:\r?\n)?|$)/);
  if (!match) return markdown;
  return sanitizePageName(plainLinkLabel(match[1] ?? "")) === sanitizePageName(title) ? markdown.slice(match[0].length) : markdown;
}
function isNotionPartZip(path) {
  return !path.includes("/") && /(?:ExportBlock|Export).*Part-\d+\.zip$/i.test(path);
}
function buildinId(value) {
  return value.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:\.[^.]+)?$/i)?.[1]?.toLocaleLowerCase();
}
function notionId(value) {
  return value.match(/([0-9a-f]{32})(?:\.[^.]+)?$/i)?.[1]?.toLocaleLowerCase();
}
function knownIdInTarget(target, pages) {
  for (const id of pages.keys()) if (target.toLocaleLowerCase().includes(id)) return id;
  return void 0;
}
function buildinTitle(stem) {
  return stem.replace(/\+?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "").replace(/\+/g, " ").trim();
}
function notionTitle(stem) {
  return stem.replace(/\s+[0-9a-f]{32}$/i, "").trim();
}
function markdownTitle(markdown) {
  return plainLinkLabel(markdown.match(/^\uFEFF?#\s+([^\r\n]+)/)?.[1] ?? "");
}
function htmlTitle(html) {
  return new DOMParser().parseFromString(html, "text/html").title.replace(/\s+/g, " ").trim();
}
function cleanUnpairedParent(path, format, pageFolders) {
  if (!path) return "";
  const segments = normalizeSourcePath(path).split("/").filter(Boolean);
  const result = [];
  let current = "";
  for (const segment of segments) {
    current = normalizeSourcePath(`${current}/${segment}`);
    const paired = pageFolders.get(sourceKey(current));
    if (paired) result.push(paired.targetTitle || paired.title);
    else result.push(sanitizePageName(format === "buildin-md" ? decodeSourceSegment(segment).replace(/\+/g, " ") : decodeSourceSegment(segment).replace(/\s+[0-9a-f]{32}$/i, "")));
  }
  return result.join("/");
}
function uniqueImportName(app, requestedName) {
  const base = sanitizePageName(requestedName);
  let path = base;
  let suffix = 2;
  while (app.vault.getAbstractFileByPath(path) || app.vault.getAbstractFileByPath(`${path}.md`)) {
    path = `${base} ${suffix++}`;
  }
  return path;
}
function normalizeImportName(value) {
  const trimmed = value.trim();
  return trimmed ? sanitizePageName(trimmed) : "";
}
function sanitizePageName(value) {
  return value.replace(/[\\/:*?"<>|\0]/g, "-").replace(/[. ]+$/g, "").replace(/\s+/g, " ").trim() || "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F";
}
function sanitizeAttachmentName(value, format) {
  const decoded = format === "buildin-md" ? value.replace(/\+/g, " ") : value;
  const cleaned = decoded.replace(/[\\/:*?"<>|\0]/g, "-").replace(/[. ]+$/g, "").trim();
  return cleaned || "file";
}
function appendFilenameSuffix(name, suffix) {
  const ext = name.match(/(\.[^.]+)$/)?.[1] ?? "";
  const stem = ext ? name.slice(0, -ext.length) : name;
  return `${stem} ${suffix}${ext}`;
}
function cleanMarkdownTarget(value) {
  const trimmed = value.trim();
  const unwrapped = trimmed.startsWith("<") && trimmed.endsWith(">") ? trimmed.slice(1, -1) : trimmed;
  return unwrapped.replace(/\s+["'][^"']*["']\s*$/, "");
}
function stripQueryAndHash(value) {
  if (value.startsWith("#")) return value;
  return value.replace(/[?#].*$/, "");
}
function isExternalTarget(value) {
  return /^(?:https?:|mailto:|obsidian:|data:)/i.test(value);
}
function plainLinkLabel(value) {
  return value.replace(/[`*_~]/g, "").replace(/\\([\\`*_[\]{}()#+.!|-])/g, "$1").replace(/\s+/g, " ").trim();
}
function escapeWikiAlias(value) {
  return value.replace(/\|/g, "\\|").replace(/\]/g, "\\]");
}
function decodeSourcePath(value) {
  return value.replace(/\\/g, "/").split("/").map(decodeSourceSegment).join("/");
}
function decodeSourceSegment(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
function normalizeSourcePath(value) {
  const result = [];
  for (const segment of value.replace(/\\/g, "/").split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") result.pop();
    else result.push(segment);
  }
  return result.join("/");
}
function sourceKey(value) {
  return decodeSourcePath(normalizeSourcePath(value)).toLocaleLowerCase();
}
function dirname(value) {
  const normalized = normalizeSourcePath(value);
  const index = normalized.lastIndexOf("/");
  return index < 0 ? "" : normalized.slice(0, index);
}
function basename(value) {
  return normalizeSourcePath(value).split("/").pop() ?? "";
}
function extension(value) {
  return value.match(/\.([^.]+)$/)?.[1]?.toLocaleLowerCase() ?? "";
}
function stripExtension(value) {
  return value.replace(/\.[^.]+$/, "");
}
function pathDepth(value) {
  return value.split("/").filter(Boolean).length;
}

// src/import-modal.ts
function chooseImportArchive(plugin) {
  if (import_obsidian6.Platform.isDesktopApp && window.electron?.remote?.dialog) {
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
async function openDesktopArchive(plugin, path) {
  try {
    const fs2 = window.require("node:original-fs");
    if (!fs2) throw new Error("filesystem-unavailable");
    const buffer = await fs2.promises.readFile(path);
    const bytes = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    const name = path.split(/[\\/]/).pop() || "archive.zip";
    await openImportPreview(plugin, new File([bytes], name, { type: "application/zip" }));
  } catch (error) {
    console.error("NaitFlow: failed to read import archive", error);
    new import_obsidian6.Notice(t("importFailed"), 8e3);
  }
}
function chooseWebArchive(plugin) {
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
async function openImportPreview(plugin, file) {
  const notice = new import_obsidian6.Notice(t("importReading"), 0);
  try {
    const plan = await prepareImport(plugin.app, file);
    notice.hide();
    new ImportPreviewModal(plugin, plan).open();
  } catch (error) {
    notice.hide();
    console.error("NaitFlow: failed to inspect import archive", error);
    new import_obsidian6.Notice(t(importErrorKey(error)), 8e3);
  }
}
var ImportPreviewModal = class extends import_obsidian6.Modal {
  constructor(plugin, plan) {
    super(plugin.app);
    this.plugin = plugin;
    this.plan = plan;
  }
  running = false;
  finished = false;
  onOpen() {
    this.modalEl.addClass("naitflow-modal", "naitflow-import-modal");
    this.setTitle(t("importData"));
    this.renderPreview();
  }
  onClose() {
    this.contentEl.empty();
    if (!this.running) void this.plan.close();
  }
  renderPreview() {
    this.contentEl.empty();
    const source = this.contentEl.createDiv("naitflow-import-source");
    const sourceIcon = source.createSpan("naitflow-import-source-icon");
    (0, import_obsidian6.setIcon)(sourceIcon, "archive");
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
        (0, import_obsidian6.setIcon)(icon, "triangle-alert");
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
  addStat(parent, label, value) {
    const item = parent.createDiv("naitflow-import-stat");
    item.createSpan({ text: label });
    item.createEl("strong", { text: String(value) });
  }
  warnings() {
    const warnings = [];
    if (this.plan.format !== "notion-html") warnings.push(t("importVisualMissing"));
    if (this.plan.renamedCount > 0) warnings.push(t("importDuplicatesWarning", { count: this.plan.renamedCount }));
    if (this.plan.unresolvedLinksCount > 0) warnings.push(t("importBrokenLinksWarning", { count: this.plan.unresolvedLinksCount }));
    if (this.plan.format === "notion-html" && this.plan.coversCount > 0) warnings.push(t("importRemoteCovers", { count: this.plan.coversCount }));
    return warnings;
  }
  async startImport(destination, input, cancel, start, error) {
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
        progressLabel.setText(`${current}/${total} \xB7 ${label}`);
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
  renderSuccess(destination, pages, attachments) {
    this.contentEl.empty();
    const success = this.contentEl.createDiv("naitflow-import-success");
    const icon = success.createSpan("naitflow-import-success-icon");
    (0, import_obsidian6.setIcon)(icon, "circle-check-big");
    success.createEl("h3", { text: t("importComplete") });
    success.createEl("p", { text: t("importCompleteSummary", { pages, attachments }) });
    success.createEl("code", { text: destination });
    const close = success.createEl("button", { cls: "mod-cta", text: t("close") });
    close.onclick = () => this.close();
  }
};
function formatLabel(format) {
  if (format === "notion-html") return "Notion (HTML)";
  if (format === "notion-md") return "Notion (MD)";
  return "Buildin AI (MD)";
}
function importErrorKey(error) {
  const message = error instanceof Error ? error.message : "";
  if (message === "format-unknown") return "importUnknownFormat";
  if (message === "pages-not-found") return "importNoPages";
  if (message === "destination-empty") return "importDestinationEmpty";
  if (message === "destination-exists") return "importDestinationExists";
  return "importFailed";
}

// src/page-header.ts
var import_obsidian8 = require("obsidian");

// src/icon-renderer.ts
var import_obsidian7 = require("obsidian");
function emojiFromAssetName(assetName) {
  try {
    const codepoints = assetName.split("-").map((value) => Number.parseInt(value, 16));
    if (!codepoints.length || codepoints.some((value) => !Number.isFinite(value))) return null;
    return String.fromCodePoint(...codepoints);
  } catch {
    return null;
  }
}
function renderPageIcon(app, container, raw, size = "small") {
  container.empty();
  container.addClass("naitflow-icon", `naitflow-icon--${size}`);
  const icon = parseIcon(raw);
  if (!icon) {
    (0, import_obsidian7.setIcon)(container, "file-text");
    container.addClass("naitflow-icon--default");
    return;
  }
  if (icon.kind === "emoji") {
    container.createSpan({ cls: "naitflow-emoji", text: icon.value });
  } else if (icon.kind === "lucide") {
    (0, import_obsidian7.setIcon)(container, icon.value);
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

// src/page-header.ts
var MET_COVER_FILE = /(?:^|\/)(?:woodcuts_(?:\d+|sekka_\d+)|hudson-river-scene-kensett|river-scene-durand|landscape-lagoon-new-rochelle|on-hudson-near-idlewild|hackensack-meadows|the-oxbow|heart-of-the-andes|the-parthenon)\.(?:jpe?g|png|webp)$/i;
var PageHeaderManager = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  scheduled = 0;
  schedule() {
    window.clearTimeout(this.scheduled);
    this.scheduled = window.setTimeout(() => this.refresh(), 80);
  }
  refresh() {
    for (const leaf of this.plugin.app.workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      if (!(view instanceof import_obsidian8.MarkdownView) || !view.file) continue;
      this.decorate(view, view.file);
      this.decorateTab(leaf, view.file);
    }
  }
  decorate(view, file) {
    const targets = [
      view.containerEl.querySelector(".markdown-source-view .cm-sizer"),
      view.containerEl.querySelector(".markdown-preview-view .markdown-preview-sizer")
    ].filter((item) => Boolean(item));
    for (const target of targets) {
      const fluidHost = target.closest(".cm-scroller, .markdown-preview-view");
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
      let header = target.querySelector(":scope > .naitflow-page-header");
      if (!header) {
        header = createDiv({ cls: "naitflow-page-header" });
        target.prepend(header);
      }
      this.renderHeader(header, file);
    }
  }
  renderHeader(header, file) {
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
      (0, import_obsidian8.setTooltip)(icon, t("changeIcon"), { placement: "top" });
      renderPageIcon(this.plugin.app, icon, meta.icon, "large");
      icon.onclick = () => this.plugin.openIconPicker(file);
    }
    if (!meta.icon || !meta.cover) {
      const actions = inner.createDiv("naitflow-page-actions");
      if (!meta.icon) {
        const iconAction = actions.createEl("button");
        (0, import_obsidian8.setIcon)(iconAction, "smile-plus");
        iconAction.createSpan({ text: t("addIcon") });
        iconAction.onclick = () => this.plugin.openIconPicker(file);
      }
      if (!meta.cover) {
        const coverAction = actions.createEl("button");
        (0, import_obsidian8.setIcon)(coverAction, "image");
        coverAction.createSpan({ text: t("addCover") });
        coverAction.onclick = () => this.plugin.openCoverPicker(file);
      }
    }
  }
  enablePositioning(cover, image, button, file, initial) {
    if (cover.hasClass("is-positioning")) return;
    cover.addClass("is-positioning");
    button.setText(t("save"));
    const hint = cover.createDiv("naitflow-cover-position-hint");
    (0, import_obsidian8.setIcon)(hint, "move-vertical");
    hint.createSpan({ text: t("dragPhoto") });
    let value = initial;
    let startY = 0;
    let startValue = value;
    const move = (event) => {
      if (!cover.hasClass("is-dragging")) return;
      const delta = (event.clientY - startY) / Math.max(1, cover.clientHeight) * 100;
      value = Math.max(0, Math.min(100, startValue - delta));
      image.style.objectPosition = `center ${value}%`;
    };
    const up = (event) => {
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
  decorateTab(leaf, file) {
    const tab = leaf.tabHeaderEl;
    if (!tab) return;
    const stock = tab.querySelector(".workspace-tab-header-inner-icon");
    if (!stock) return;
    let icon = stock.querySelector(".naitflow-tab-icon");
    if (!icon) icon = stock.createSpan("naitflow-tab-icon");
    const rawIcon = readPageMeta(this.plugin.app, file).icon;
    const signature = `${file.path}\0${rawIcon ?? ""}`;
    if (icon.dataset.naitflowSignature !== signature) {
      icon.dataset.naitflowSignature = signature;
      renderPageIcon(this.plugin.app, icon, rawIcon);
    }
    stock.addClass("naitflow-tab-icon-host");
  }
};

// src/page-tree.ts
var import_obsidian10 = require("obsidian");

// src/trash-modal.ts
var import_obsidian9 = require("obsidian");
function parentPath(path) {
  const index = path.lastIndexOf("/");
  return index === -1 ? "" : path.slice(0, index);
}
function formatDeletedAt(value) {
  return new Intl.DateTimeFormat(localeCode() === "ru" ? "ru-RU" : "en-US", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(value));
}
async function ensureParentFolders(app, path) {
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
var NaitFlowTrashPopover = class {
  constructor(app, plugin, onDismiss) {
    this.plugin = plugin;
    this.onDismiss = onDismiss;
    this.app = app;
  }
  records = [];
  query = "";
  popover = null;
  outsideHandler = null;
  keydownHandler = null;
  app;
  open(anchor) {
    this.close();
    const popover = document.body.createDiv("naitflow-trash-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 652))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 492))}px`;
    this.popover = popover;
    void this.reload();
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target)) this.close();
    };
    this.keydownHandler = (event) => {
      if (event.key === "Escape") this.close();
    };
    window.setTimeout(() => {
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
      if (this.keydownHandler) document.addEventListener("keydown", this.keydownHandler, true);
    }, 0);
  }
  close() {
    const wasOpen = Boolean(this.popover);
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    if (this.keydownHandler) document.removeEventListener("keydown", this.keydownHandler, true);
    this.outsideHandler = null;
    this.keydownHandler = null;
    this.popover?.remove();
    this.popover = null;
    if (wasOpen) this.onDismiss?.();
  }
  async reload() {
    const records = await Promise.all(this.plugin.settings.trashRecords.map(async (record) => {
      return await this.app.vault.adapter.exists(record.trashedFilePath) ? record : void 0;
    }));
    this.records = records.filter((record) => Boolean(record));
    this.render();
  }
  render() {
    const content = this.popover;
    if (!content) return;
    content.empty();
    const searchWrap = content.createDiv("naitflow-search-wrap naitflow-move-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    (0, import_obsidian9.setIcon)(searchIcon, "search");
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
  renderRows() {
    const list = this.popover?.querySelector(".naitflow-trash-list");
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
  renderRow(parent, record) {
    const row = parent.createDiv("naitflow-trash-row");
    const fileIcon = row.createSpan("naitflow-trash-icon");
    (0, import_obsidian9.setIcon)(fileIcon, "file-text");
    const details = row.createDiv("naitflow-trash-details");
    details.createDiv({ cls: "naitflow-trash-title", text: record.title });
    details.createDiv({ cls: "naitflow-trash-path", text: parentPath(record.originalFilePath) || "/" });
    row.createDiv({ cls: "naitflow-trash-date", text: formatDeletedAt(record.deletedAt) });
    const restore = row.createEl("button", { cls: "naitflow-trash-action", attr: { type: "button", "aria-label": t("trashRestore") } });
    (0, import_obsidian9.setIcon)(restore, "undo-2");
    restore.onclick = () => void this.restore(record);
    const remove = row.createEl("button", { cls: "naitflow-trash-action naitflow-trash-action--danger", attr: { type: "button", "aria-label": t("trashDeleteForever") } });
    (0, import_obsidian9.setIcon)(remove, "trash-2");
    remove.onclick = () => new ConfirmPermanentDeleteModal(this.app, record, () => void this.deleteForever(record)).open();
  }
  async restore(record) {
    const adapter = this.app.vault.adapter;
    if (await adapter.exists(record.originalFilePath) || record.originalFolderPath && await adapter.exists(record.originalFolderPath)) {
      new import_obsidian9.Notice(t("trashRestoreExists"));
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
      new import_obsidian9.Notice(t("trashRestoreFailed", { error: String(error) }));
    }
  }
  async deleteForever(record) {
    try {
      const adapter = this.app.vault.adapter;
      if (await adapter.exists(record.trashedFilePath)) await adapter.remove(record.trashedFilePath);
      if (record.trashedFolderPath && await adapter.exists(record.trashedFolderPath)) await adapter.rmdir(record.trashedFolderPath, true);
      await this.plugin.removeTrashRecord(record.id);
      await this.reload();
    } catch (error) {
      console.error("NaitFlow: failed to permanently delete page", error);
      new import_obsidian9.Notice(t("trashDeleteFailed", { error: String(error) }));
    }
  }
};
var ConfirmPermanentDeleteModal = class extends import_obsidian9.Modal {
  constructor(app, record, onConfirm) {
    super(app);
    this.record = record;
    this.onConfirm = onConfirm;
  }
  onOpen() {
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
};

// src/page-tree.ts
var VIEW_TYPE_NAITFLOW = "naitflow-pages";
function buildPageTree(app) {
  const files = app.vault.getMarkdownFiles();
  const byPath = new Map(files.map((file) => [file.path, { file, children: [] }]));
  const roots = [];
  for (const node of byPath.values()) {
    const parent = getPhysicalParent(app, node.file, byPath) ?? getLegacyParent(app, node.file, byPath);
    if (parent && parent !== node) parent.children.push(node);
    else roots.push(node);
  }
  const sort = (items) => {
    items.sort((a, b) => displayName(a.file).localeCompare(displayName(b.file), localeCode()));
    items.forEach((item) => sort(item.children));
  };
  sort(roots);
  return roots;
}
function getPhysicalParent(app, file, nodes) {
  const folderPath = file.parent?.path;
  if (!folderPath) return void 0;
  const parentFile = app.vault.getAbstractFileByPath(`${folderPath}.md`);
  return parentFile instanceof import_obsidian10.TFile ? nodes.get(parentFile.path) : void 0;
}
function getLegacyParent(app, file, nodes) {
  const parentRef = readPageMeta(app, file).parent;
  if (!parentRef) return void 0;
  const parentFile = app.metadataCache.getFirstLinkpathDest(parentRef, file.path);
  return parentFile ? nodes.get(parentFile.path) : void 0;
}
var NaitFlowTreeView = class extends import_obsidian10.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  expanded = /* @__PURE__ */ new Set();
  treeResizeObserver;
  treeFooter;
  getViewType() {
    return VIEW_TYPE_NAITFLOW;
  }
  getDisplayText() {
    return t("pagesView");
  }
  getIcon() {
    return "panels-top-left";
  }
  async onOpen() {
    this.treeResizeObserver = new ResizeObserver(() => this.syncScrollbarState());
    this.treeResizeObserver.observe(this.contentEl);
    this.render();
  }
  async onClose() {
    this.treeResizeObserver?.disconnect();
    this.treeFooter?.remove();
    this.containerEl.removeClass("naitflow-tree-host");
  }
  render() {
    const root = this.contentEl;
    root.empty();
    root.addClass("naitflow-tree");
    const header = root.createDiv("naitflow-tree-header");
    header.createEl("strong", { text: t("pages") });
    const add = header.createEl("button", { attr: { "aria-label": t("newPage") } });
    (0, import_obsidian10.setIcon)(add, "plus");
    add.onclick = () => void this.createPage();
    const nodes = this.buildTree();
    const list = root.createDiv("naitflow-tree-list");
    for (const node of nodes) this.renderNode(list, node, 0);
    if (!nodes.length) list.createDiv({ cls: "naitflow-empty", text: t("createFirstPage") });
    this.renderTrashFooter();
    this.syncScrollbarState();
  }
  renderTrashFooter() {
    this.treeFooter?.remove();
    this.containerEl.addClass("naitflow-tree-host");
    const footer = this.containerEl.createDiv("naitflow-tree-footer");
    const trash = footer.createEl("button", { cls: "naitflow-tree-trash" });
    const icon = trash.createSpan("naitflow-tree-trash-icon");
    (0, import_obsidian10.setIcon)(icon, "trash-2");
    trash.createSpan({ cls: "naitflow-tree-trash-label", text: t("trash") });
    trash.onclick = (event) => {
      this.containerEl.addClass("naitflow-trash-open");
      new NaitFlowTrashPopover(this.app, this.plugin, () => this.containerEl.removeClass("naitflow-trash-open")).open(event);
    };
    this.treeFooter = footer;
  }
  syncScrollbarState() {
    const viewport = this.contentEl;
    const hasVerticalScrollbar = viewport.scrollHeight > viewport.clientHeight && viewport.offsetWidth > viewport.clientWidth;
    this.contentEl.toggleClass("naitflow-tree--scrollable", hasVerticalScrollbar);
  }
  syncActiveFile() {
    const activePath = this.app.workspace.getActiveFile()?.path;
    this.contentEl.querySelectorAll(".naitflow-tree-row").forEach((row) => {
      row.classList.toggle("is-active", row.dataset.path === activePath);
    });
  }
  buildTree() {
    return buildPageTree(this.app);
  }
  renderNode(parent, node, depth) {
    const row = parent.createDiv("naitflow-tree-row");
    row.dataset.path = node.file.path;
    row.style.setProperty("--naitflow-depth", String(depth));
    if (this.app.workspace.getActiveFile()?.path === node.file.path) row.addClass("is-active");
    const isExpanded = this.expanded.has(node.file.path);
    const icon = row.createEl("button", { cls: "naitflow-tree-icon" });
    const visual = icon.createSpan("naitflow-tree-icon-visual");
    renderPageIcon(this.app, visual, readPageMeta(this.app, node.file).icon);
    const chevron = icon.createSpan("naitflow-tree-icon-chevron");
    (0, import_obsidian10.setIcon)(chevron, isExpanded ? "chevron-down" : "chevron-right");
    icon.onclick = (event) => {
      event.stopPropagation();
      if (isExpanded) this.expanded.delete(node.file.path);
      else this.expanded.add(node.file.path);
      this.render();
    };
    const title = row.createEl("button", { cls: "naitflow-tree-title" });
    title.createSpan({ cls: "naitflow-tree-title-label", text: displayName(node.file) });
    title.onclick = () => void this.app.workspace.getLeaf(false).openFile(node.file);
    const more = row.createEl("button", { cls: "naitflow-tree-more", attr: { "aria-label": t("pageMenu") } });
    (0, import_obsidian10.setIcon)(more, "ellipsis");
    more.onclick = (event) => {
      event.stopPropagation();
      this.openPageMenu(event, node.file);
    };
    const add = row.createEl("button", { cls: "naitflow-tree-add", attr: { "aria-label": t("nestedPage") } });
    (0, import_obsidian10.setIcon)(add, "plus");
    add.onclick = (event) => {
      event.stopPropagation();
      void this.createPage(node.file);
    };
    row.oncontextmenu = (event) => this.openPageMenu(event, node.file);
    if (isExpanded) {
      const children = parent.createDiv("naitflow-tree-children");
      for (const child of node.children) this.renderNode(children, child, depth + 1);
      const addChild = children.createEl("button", { cls: "naitflow-tree-add-child" });
      addChild.style.setProperty("--naitflow-depth", String(depth + 1));
      (0, import_obsidian10.setIcon)(addChild, "plus");
      addChild.createSpan({ text: t("addSubpage") });
      addChild.onclick = () => void this.createPage(node.file);
    }
  }
  async createPage(parent) {
    try {
      const rawFolder = parent ? pageFolderPath(parent.path) : "";
      const folder = rawFolder === "/" ? "" : (0, import_obsidian10.normalizePath)(rawFolder);
      if (folder) await this.app.vault.createFolder(folder).catch((error) => {
        if (!String(error).toLocaleLowerCase().includes("already exists")) throw error;
      });
      const prefix = folder ? `${folder}/` : "";
      let file = null;
      for (let index = 1; index < 1e4; index++) {
        const name = index === 1 ? t("untitled") : `${t("untitled")} ${index}`;
        const path = (0, import_obsidian10.normalizePath)(`${prefix}${name}.md`);
        if (this.app.vault.getAbstractFileByPath(path)) continue;
        try {
          file = await this.app.vault.create(path, "");
          break;
        } catch (error) {
          if (!String(error).toLocaleLowerCase().includes("already exists")) throw error;
        }
      }
      if (!file) throw new Error(t("noFreeFilename"));
      if (parent) {
        this.expanded.add(parent.path);
      }
      await this.app.workspace.getLeaf(false).openFile(file);
      this.render();
    } catch (error) {
      new import_obsidian10.Notice(t("createPageFailed", { error: String(error) }));
    }
  }
  openPageMenu(event, file) {
    event.preventDefault();
    event.stopPropagation();
    const menu = new import_obsidian10.Menu();
    menu.addItem((item) => item.setTitle(t("openInNewTab")).setIcon("file-plus").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("tab"))));
    menu.addItem((item) => item.setTitle(t("openInRightPane")).setIcon("panel-right").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("split", "vertical"))));
    menu.addItem((item) => item.setTitle(t("openInNewWindow")).setIcon("external-link").onClick(() => void this.openInLeaf(file, this.app.workspace.getLeaf("window"))));
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(t("renamePage")).setIcon("pencil").onClick(() => new RenamePagePopover(this.app, file).open(event)));
    menu.addItem((item) => item.setTitle(t("movePage")).setIcon("folder-input").onClick(() => new MovePagePopover(this.app, file).open(event)));
    menu.addItem((item) => item.setTitle(t("duplicatePage")).setIcon("copy").onClick(() => void this.duplicatePage(file)));
    menu.addItem((item) => item.setTitle(t("addBookmark")).setIcon("bookmark-plus").onClick(() => void this.addBookmark(file)));
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(t("copyPath")).setIcon("clipboard-copy").onClick(() => void this.copyText(this.getAbsolutePath(file))));
    if (import_obsidian10.Platform.isDesktopApp && this.app.vault.adapter instanceof import_obsidian10.FileSystemAdapter) {
      menu.addItem((item) => item.setTitle(t("showInExplorer")).setIcon("folder-open").onClick(() => this.showInExplorer(file)));
    }
    menu.addSeparator();
    const trashTitle = document.createDocumentFragment();
    const trashLabel = document.createElement("span");
    trashLabel.addClass("naitflow-delete-menu-label");
    trashLabel.setText(t("deletePage"));
    trashTitle.appendChild(trashLabel);
    menu.addItem((item) => item.setTitle(trashTitle).setIcon("trash-2").onClick(() => void this.trashPage(file)));
    menu.showAtMouseEvent(event);
    window.setTimeout(() => {
      const menus = document.querySelectorAll(".menu");
      menus.item(menus.length - 1)?.addClass("naitflow-page-menu");
    }, 0);
  }
  async openInLeaf(file, leaf) {
    try {
      await leaf.openFile(file);
    } catch (error) {
      new import_obsidian10.Notice(String(error));
    }
  }
  async copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
      new import_obsidian10.Notice(t("copied"));
    } catch (error) {
      console.error("NaitFlow: failed to copy to clipboard", error);
      new import_obsidian10.Notice(t("copyFailed"));
    }
  }
  getAbsolutePath(file) {
    const adapter = this.app.vault.adapter;
    if (!(adapter instanceof import_obsidian10.FileSystemAdapter)) return file.path;
    const separator = adapter.getBasePath().includes("\\") ? "\\" : "/";
    return `${adapter.getBasePath()}${separator}${file.path.split("/").join(separator)}`;
  }
  showInExplorer(file) {
    try {
      const electron = require("electron");
      if (!electron.shell) throw new Error("Electron shell is unavailable");
      electron.shell.showItemInFolder(this.getAbsolutePath(file));
    } catch (error) {
      console.error("NaitFlow: failed to show file in Explorer", error);
      new import_obsidian10.Notice(t("showInExplorerFailed"));
    }
  }
  async duplicatePage(file) {
    const parentPath2 = file.parent?.path ?? "";
    const sourceFolder = this.app.vault.getAbstractFileByPath(pageFolderPath(file.path));
    let targetFilePath = "";
    for (let index = 1; index < 1e4; index++) {
      const suffix = index === 1 ? t("copySuffix") : `${t("copySuffix")} ${index}`;
      const name = `${file.basename} ${suffix}`;
      const candidate = (0, import_obsidian10.normalizePath)(parentPath2 ? `${parentPath2}/${name}.${file.extension}` : `${name}.${file.extension}`);
      if (!this.app.vault.getAbstractFileByPath(candidate) && !this.app.vault.getAbstractFileByPath(pageFolderPath(candidate))) {
        targetFilePath = candidate;
        break;
      }
    }
    if (!targetFilePath) {
      new import_obsidian10.Notice(t("duplicatePageFailed", { error: t("noFreeFilename") }));
      return;
    }
    try {
      await this.app.vault.copy(file, targetFilePath);
      if (sourceFolder instanceof import_obsidian10.TFolder) await this.copyFolder(sourceFolder, pageFolderPath(targetFilePath));
      const copy = this.app.vault.getAbstractFileByPath(targetFilePath);
      if (copy instanceof import_obsidian10.TFile) await this.app.workspace.getLeaf(false).openFile(copy);
    } catch (error) {
      new import_obsidian10.Notice(t("duplicatePageFailed", { error: String(error) }));
    }
  }
  async trashPage(file) {
    const beforeFileTrash = await this.listTrashEntries();
    const title = displayName(file);
    const originalFilePath = file.path;
    const originalFolderPath = pageFolderPath(file.path);
    if (!await this.app.fileManager.promptForDeletion(file)) return;
    const folder = this.app.vault.getAbstractFileByPath(pageFolderPath(file.path));
    try {
      const afterFileTrash = await this.listTrashEntries();
      const trashedFilePath = this.findNewTrashEntry(beforeFileTrash, afterFileTrash, file.name);
      if (folder instanceof import_obsidian10.TFolder) await this.app.fileManager.trashFile(folder);
      const afterFolderTrash = await this.listTrashEntries();
      const trashedFolderPath = folder instanceof import_obsidian10.TFolder ? this.findNewTrashEntry(afterFileTrash, afterFolderTrash, folder.name) : void 0;
      if (!trashedFilePath) {
        new import_obsidian10.Notice(t("trashLocalUnavailable"));
        return;
      }
      await this.plugin.addTrashRecord({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title,
        originalFilePath,
        originalFolderPath: folder instanceof import_obsidian10.TFolder ? originalFolderPath : void 0,
        trashedFilePath,
        trashedFolderPath,
        deletedAt: Date.now()
      });
    } catch (error) {
      console.error("NaitFlow: failed to move page to trash", error);
      new import_obsidian10.Notice(t("deletePageFailed", { error: String(error) }));
    }
  }
  async listTrashEntries() {
    try {
      const listed = await this.app.vault.adapter.list(".trash");
      return /* @__PURE__ */ new Set([...listed.files, ...listed.folders]);
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  findNewTrashEntry(before, after, name) {
    const candidates = [...after].filter((path) => !before.has(path));
    return candidates.find((path) => path.endsWith(`/${name}`)) ?? (candidates.length === 1 ? candidates[0] : void 0);
  }
  async copyFolder(source, targetPath) {
    await ensureFolder(this.app, targetPath);
    for (const child of source.children) {
      const childTargetPath = (0, import_obsidian10.normalizePath)(`${targetPath}/${child.name}`);
      if (child instanceof import_obsidian10.TFolder) await this.copyFolder(child, childTargetPath);
      else await this.app.vault.copy(child, childTargetPath);
    }
  }
  async addBookmark(file) {
    const commands = this.app.commands;
    const commandId = commands?.commands && "bookmarks:bookmark" in commands.commands ? "bookmarks:bookmark" : void 0;
    if (!commandId || !commands?.executeCommandById) {
      new import_obsidian10.Notice(t("bookmarkUnavailable"));
      return;
    }
    if (this.app.workspace.getActiveFile()?.path !== file.path) await this.app.workspace.getLeaf(false).openFile(file);
    if (!commands.executeCommandById(commandId)) new import_obsidian10.Notice(t("bookmarkUnavailable"));
  }
};
var RenamePagePopover = class {
  constructor(app, file) {
    this.app = app;
    this.file = file;
  }
  popover = null;
  outsideHandler = null;
  open(anchor) {
    this.close();
    const popover = document.body.createDiv("naitflow-rename-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 356))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 58))}px`;
    const form = popover.createEl("form", { cls: "naitflow-rename-popover-form" });
    const input = form.createEl("input", { attr: { type: "text", value: this.file.basename, "aria-label": t("renamePagePrompt") } });
    form.onsubmit = (event) => {
      event.preventDefault();
      void this.rename(input.value);
    };
    input.onkeydown = (event) => {
      if (event.key === "Escape") this.close();
    };
    this.popover = popover;
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target)) this.close();
    };
    window.setTimeout(() => {
      input.focus();
      input.select();
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
    }, 0);
  }
  async rename(value) {
    const name = value.trim();
    if (!name) return;
    const parentPath2 = this.file.parent?.path ?? "";
    const nextPath = (0, import_obsidian10.normalizePath)(parentPath2 ? `${parentPath2}/${name}.${this.file.extension}` : `${name}.${this.file.extension}`);
    if (nextPath === this.file.path) {
      this.close();
      return;
    }
    try {
      await this.app.fileManager.renameFile(this.file, nextPath);
      this.close();
    } catch (error) {
      new import_obsidian10.Notice(t("renamePageFailed", { error: String(error) }));
    }
  }
  close() {
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    this.outsideHandler = null;
    this.popover?.remove();
    this.popover = null;
  }
};
var MovePagePopover = class {
  constructor(app, file) {
    this.app = app;
    this.file = file;
  }
  expanded = /* @__PURE__ */ new Set();
  popover = null;
  outsideHandler = null;
  open(anchor) {
    this.close();
    const popover = document.body.createDiv("naitflow-move-popover");
    popover.style.left = `${Math.max(12, Math.min(anchor.clientX, window.innerWidth - 344))}px`;
    popover.style.top = `${Math.max(12, Math.min(anchor.clientY, window.innerHeight - 454))}px`;
    const searchWrap = popover.createDiv("naitflow-search-wrap naitflow-move-search-wrap");
    const searchIcon = searchWrap.createSpan("naitflow-search-icon");
    (0, import_obsidian10.setIcon)(searchIcon, "search");
    const search = searchWrap.createEl("input", {
      cls: "naitflow-search",
      attr: { type: "search", placeholder: t("movePageSearch") }
    });
    const list = popover.createDiv("naitflow-move-list");
    const render = () => this.renderList(list, search.value);
    search.oninput = render;
    search.onkeydown = (event) => {
      if (event.key === "Escape") this.close();
    };
    render();
    this.popover = popover;
    this.outsideHandler = (event) => {
      if (this.popover && !this.popover.contains(event.target)) this.close();
    };
    window.setTimeout(() => search.focus(), 0);
    window.setTimeout(() => {
      if (this.outsideHandler) document.addEventListener("pointerdown", this.outsideHandler, true);
    }, 0);
  }
  renderList(list, query) {
    list.empty();
    const normalizedQuery = query.trim().toLocaleLowerCase(localeCode());
    if (!normalizedQuery) list.createDiv({ cls: "naitflow-move-heading", text: t("movePageSuggested") });
    const nodes = this.filterNodes(buildPageTree(this.app), normalizedQuery);
    if (!nodes.length) {
      list.createDiv({ cls: "naitflow-move-empty", text: t("nothingFound") });
      return;
    }
    this.renderNodes(list, nodes, 0, Boolean(normalizedQuery), query);
  }
  renderNodes(parent, nodes, depth, forceExpanded, query) {
    for (const node of nodes) {
      const row = parent.createDiv("naitflow-move-tree-row");
      row.style.setProperty("--naitflow-depth", String(depth));
      const expanded = forceExpanded || this.expanded.has(node.file.path);
      if (node.children.length) {
        const toggle = row.createEl("button", { cls: "naitflow-move-toggle", attr: { type: "button", "aria-expanded": String(expanded) } });
        (0, import_obsidian10.setIcon)(toggle, expanded ? "chevron-down" : "chevron-right");
        toggle.onclick = (event) => {
          event.stopPropagation();
          if (this.expanded.has(node.file.path)) this.expanded.delete(node.file.path);
          else this.expanded.add(node.file.path);
          const list = this.popover?.querySelector(".naitflow-move-list");
          if (list) this.renderList(list, query);
        };
      } else {
        row.createSpan("naitflow-move-toggle naitflow-move-toggle--empty");
      }
      const page = row.createEl("button", { cls: "naitflow-move-row", attr: { type: "button" } });
      const icon = page.createSpan("naitflow-move-icon");
      renderPageIcon(this.app, icon, readPageMeta(this.app, node.file).icon);
      page.createDiv({ cls: "naitflow-move-label", text: displayName(node.file) });
      page.onclick = () => void this.moveToPage(node.file);
      if (expanded && node.children.length) this.renderNodes(parent, node.children, depth + 1, forceExpanded, query);
    }
  }
  filterNodes(nodes, query) {
    const pageFolder = pageFolderPath(this.file.path);
    const filter = (items) => items.flatMap((node) => {
      const folderPath = pageFolderPath(node.file.path);
      if (node.file.path === this.file.path || folderPath === pageFolder || folderPath.startsWith(`${pageFolder}/`)) return [];
      const children = filter(node.children);
      const matches = !query || displayName(node.file).toLocaleLowerCase(localeCode()).includes(query);
      return matches || children.length ? [{ file: node.file, children }] : [];
    });
    return filter(nodes);
  }
  async moveToPage(destination) {
    await this.moveToFolder(pageFolderPath(destination.path));
  }
  async moveToFolder(folderPath) {
    try {
      if (folderPath) await ensureFolder(this.app, folderPath);
      const nextPath = (0, import_obsidian10.normalizePath)(folderPath ? `${folderPath}/${this.file.name}` : this.file.name);
      if (nextPath === this.file.path) return;
      await this.app.fileManager.renameFile(this.file, nextPath);
      this.close();
    } catch (error) {
      new import_obsidian10.Notice(t("movePageFailed", { error: String(error) }));
    }
  }
  close() {
    if (this.outsideHandler) document.removeEventListener("pointerdown", this.outsideHandler, true);
    this.outsideHandler = null;
    this.popover?.remove();
    this.popover = null;
  }
};

// src/settings.ts
var import_obsidian11 = require("obsidian");
var DEFAULT_SETTINGS = {
  assetsFolder: "Assets/NaitFlow",
  unsplashAccessKey: "",
  recentEmoji: [],
  recentIcons: [],
  openTreeOnStartup: true,
  trashRecords: []
};
var NaitFlowSettingTab = class extends import_obsidian11.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "NaitFlow" });
    this.containerEl.createEl("p", { text: t("settingsIntro") });
    this.containerEl.createEl("h3", { text: t("importData") });
    new import_obsidian11.Setting(this.containerEl).setName(t("importFormats")).setDesc(t("importFormatsDesc")).addButton((button) => button.setButtonText(t("importZip")).setCta().onClick(() => this.plugin.openImporter()));
    new import_obsidian11.Setting(this.containerEl).setName(t("mediaFolder")).setDesc(t("mediaFolderDesc")).addText((text) => text.setValue(this.plugin.settings.assetsFolder).onChange(async (value) => {
      this.plugin.settings.assetsFolder = value.trim() || DEFAULT_SETTINGS.assetsFolder;
      await this.plugin.saveSettings();
    }));
    new import_obsidian11.Setting(this.containerEl).setName("Unsplash Access Key").setDesc(t("unsplashKeyDesc")).addText((text) => {
      text.inputEl.type = "password";
      text.setPlaceholder(t("unsplashKeyPlaceholder")).setValue(this.plugin.settings.unsplashAccessKey).onChange(async (value) => {
        this.plugin.settings.unsplashAccessKey = value.trim();
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian11.Setting(this.containerEl).setName(t("openTreeOnStartup")).addToggle((toggle) => toggle.setValue(this.plugin.settings.openTreeOnStartup).onChange(async (value) => {
      this.plugin.settings.openTreeOnStartup = value;
      await this.plugin.saveSettings();
    }));
  }
};

// src/main.ts
var NaitFlowPlugin = class extends import_obsidian12.Plugin {
  settings = { ...DEFAULT_SETTINGS, recentEmoji: [], recentIcons: [], trashRecords: [] };
  headers;
  emojiFont;
  async onload() {
    await this.loadSettings();
    this.loadEmojiFont();
    this.headers = new PageHeaderManager(this);
    this.registerView(VIEW_TYPE_NAITFLOW, (leaf) => new NaitFlowTreeView(leaf, this));
    this.addRibbonIcon("panels-top-left", t("openPagesRibbon"), () => void this.activateTree());
    this.addSettingTab(new NaitFlowSettingTab(this.app, this));
    this.addCommand({ id: "open-pages", name: t("openPagesCommand"), callback: () => void this.activateTree() });
    this.addCommand({ id: "choose-page-icon", name: t("chooseIconCommand"), checkCallback: (checking) => {
      const file = this.app.workspace.getActiveFile();
      if (!file) return false;
      if (!checking) this.openIconPicker(file);
      return true;
    } });
    this.addCommand({ id: "choose-page-cover", name: t("chooseCoverCommand"), checkCallback: (checking) => {
      const file = this.app.workspace.getActiveFile();
      if (!file) return false;
      if (!checking) this.openCoverPicker(file);
      return true;
    } });
    this.registerEvent(this.app.workspace.on("layout-change", () => this.headers.schedule()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshActiveTreeState()));
    this.registerEvent(this.app.metadataCache.on("changed", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("create", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("delete", () => this.refreshUi()));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      this.refreshUi();
      void this.renamePairedFolder(file, oldPath);
    }));
    this.registerInterval(window.setInterval(() => this.headers.schedule(), 1500));
    this.app.workspace.onLayoutReady(() => {
      this.headers.schedule();
      if (this.settings.openTreeOnStartup && !this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW).length) void this.activateTree();
      const conflicts = ["iconic", "obsidian-icon-folder", "banners-reloaded", "pixel-banner"].filter((id) => this.isPluginEnabled(id));
      if (conflicts.length) new import_obsidian12.Notice(t("pluginConflict"), 7e3);
    });
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_NAITFLOW);
    document.querySelectorAll(".naitflow-page-header, .naitflow-tab-icon").forEach((element) => element.remove());
    document.querySelectorAll(".naitflow-fluid-cover-host").forEach((element) => {
      element.removeClass("naitflow-fluid-cover-host");
      element.style.removeProperty("--naitflow-cover-gutter-left");
      element.style.removeProperty("--naitflow-cover-gutter-right");
      element.style.removeProperty("--naitflow-cover-gutter-top");
    });
    if (this.emojiFont) document.fonts.delete(this.emojiFont);
  }
  openIconPicker(file) {
    new IconPickerModal(this.app, this, file).open();
  }
  openCoverPicker(file) {
    new CoverPickerModal(this.app, this, file).open();
  }
  openImporter() {
    chooseImportArchive(this);
  }
  refreshUi() {
    this.headers.schedule();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)) {
      const view = leaf.view;
      if (view instanceof NaitFlowTreeView) view.render();
    }
  }
  refreshActiveTreeState() {
    this.headers.schedule();
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)) {
      const view = leaf.view;
      if (view instanceof NaitFlowTreeView) view.syncActiveFile();
    }
  }
  async activateTree() {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE_NAITFLOW)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeftLeaf(false) ?? void 0;
      if (!leaf) return;
      await leaf.setViewState({ type: VIEW_TYPE_NAITFLOW, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
  }
  pushRecent(kind, value) {
    const key = kind === "emoji" ? "recentEmoji" : "recentIcons";
    this.settings[key] = [value, ...this.settings[key].filter((item) => item !== value)].slice(0, 24);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async addTrashRecord(record) {
    this.settings.trashRecords = [record, ...this.settings.trashRecords.filter((item) => item.id !== record.id)].slice(0, 500);
    await this.saveSettings();
  }
  async removeTrashRecord(id) {
    this.settings.trashRecords = this.settings.trashRecords.filter((item) => item.id !== id);
    await this.saveSettings();
  }
  /** Keeps `Page.md` and its sibling `Page/` together after a native rename or move. */
  async renamePairedFolder(file, oldPath) {
    if (!(file instanceof import_obsidian12.TFile) || file.extension.toLowerCase() !== "md") return;
    const oldFolder = this.app.vault.getAbstractFileByPath(pageFolderPath(oldPath));
    if (!(oldFolder instanceof import_obsidian12.TFolder)) return;
    const nextPath = pageFolderPath(file.path);
    const existing = this.app.vault.getAbstractFileByPath(nextPath);
    if (existing && existing !== oldFolder) {
      new import_obsidian12.Notice("NaitFlow: the matching page folder was not renamed because the destination already exists.", 8e3);
      return;
    }
    try {
      await this.app.vault.rename(oldFolder, nextPath);
    } catch (error) {
      console.error("NaitFlow: failed to rename matching page folder", error);
      new import_obsidian12.Notice("NaitFlow: could not rename the matching page folder.", 8e3);
    }
  }
  loadEmojiFont() {
    if (!this.manifest.dir) return;
    const fontPath = `${this.manifest.dir}/NotoColorEmoji.ttf`;
    const fontUrl = this.app.vault.adapter.getResourcePath(fontPath);
    this.emojiFont = new FontFace("NaitFlow Noto Color Emoji", `url("${fontUrl}")`, { display: "block" });
    document.fonts.add(this.emojiFont);
    void this.emojiFont.load().catch((error) => console.error("NaitFlow: failed to load Noto Color Emoji", error));
  }
  isPluginEnabled(id) {
    const plugins = this.app.plugins;
    return plugins?.enabledPlugins?.has(id) ?? false;
  }
};
