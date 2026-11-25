const assert = require('node:assert/strict');
const vm = require('node:vm');
const esbuild = require('esbuild');
const { ZipWriter, BlobWriter, TextReader, Uint8ArrayReader } = require('@zip.js/zip.js');

const root = 'a'.repeat(32), child = 'b'.repeat(32), sibling = 'c'.repeat(32);
const imageId = 'd'.repeat(32), toggleId = 'e'.repeat(32), tableId = 'f'.repeat(32);
let checks = 0, requests = [], route, language = 'en';
const check = (value, label) => { assert.ok(value, label); checks++; };
const rt = (text, extra = {}) => [{ type: 'text', plain_text: text, text: { content: text }, ...extra }];
const block = (id, type, data = {}, has_children = false) => ({ id, type, [type]: data, has_children });
const list = (results, more = false, cursor = null) => ({ results, has_more: more, next_cursor: cursor });
const page = (id, title) => ({ id, properties: { title: { type: 'title', title: rt(title) } },
  created_time: '2026-01-01T00:00:00.000Z', last_edited_time: '2026-02-01T00:00:00.000Z' });
const response = (json, status = 200, headers = {}) => ({ status, json, headers, arrayBuffer: new Uint8Array([1, 2, 3]).buffer });
class TFile { constructor(path, text = '') { this.path = path; this.text = text; this.fm = {}; } }
class TFolder { constructor(path) { this.path = path; } }
const normalizePath = (path) => path.replace(/\\/g, '/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
const obsidian = { TFile, TFolder, normalizePath, getLanguage: () => language,
  getFrontMatterInfo: (text) => ({ exists: text.startsWith('---\n'), frontmatter: text.split('\n')[1] }),
  parseYaml: JSON.parse, htmlToMarkdown: (html) => html,
  requestUrl: async (request) => { requests.push(request); return route(request); } };
const compiled = esbuild.buildSync({ entryPoints: ['src/notion-api.ts', 'src/importer.ts'], bundle: true,
  platform: 'node', format: 'cjs', write: false, outdir: 'unused', external: ['obsidian'] });
function load(index) {
  const context = { module: { exports: {} }, exports: {}, require: (id) => id === 'obsidian' ? obsidian : require(id),
    console, Blob, File, TextEncoder, TextDecoder, URL, ArrayBuffer, Uint8Array, AbortController,
    DOMParser: class {
      parseFromString(html) {
        const body = { innerHTML: 'Body', querySelectorAll: (selector) => selector === 'img[src]' ? images : [] };
        const image = (src) => ({
          src, alt: 'Photo', style: {}, getAttribute: () => src, matches: () => false, closest: () => null,
          replaceWith: (value) => { body.innerHTML += value; }
        });
        const cover = html.match(/class="page-cover-image" src="([^"]+)"/)?.[1];
        const images = Array.from(html.matchAll(/<img src="([^"]+)"/g), ([, src]) => image(src));
        return {
          title: '',
          querySelector: (selector) => selector === 'div.page-body' ? body :
            selector === 'img.page-cover-image' && cover ? image(cover) : null,
          createTextNode: (value) => value
        };
      }
    },
    TransformStream, ReadableStream, WritableStream, CompressionStream, DecompressionStream, Response,
    setTimeout: (fn, ms) => setTimeout(fn, Math.min(ms, 2)), clearTimeout, Date };
  context.exports = context.module.exports;
  vm.runInNewContext(compiled.outputFiles[index].text, context);
  return context.module.exports;
}
const api = load(0), importer = load(1);
function vault() {
  const files = new Map();
  let failBinary = false;
  const app = {
    vault: {
      getAbstractFileByPath: (path) => files.get(path),
      createFolder: async (path) => { assert.ok(!files.has(path)); files.set(path, new TFolder(path)); },
      create: async (path, body) => { assert.ok(!files.has(path), `overwrite ${path}`); const file = new TFile(path, body); files.set(path, file); return file; },
      createBinary: async (path, bytes) => { if (failBinary) { failBinary = false; throw new Error('disk'); } return app.vault.create(path, bytes); },
      readBinary: async (file) => file.text,
      read: async (file) => `---\n${JSON.stringify(file.fm)}\n---\n${file.text}`,
      delete: async (file) => files.delete(file.path)
    },
    metadataCache: { getFileCache: () => undefined },
    fileManager: { processFrontMatter: async (file, fn) => fn(file.fm) }
  };
  return { app, files, failNextBinary: () => { failBinary = true; } };
}

function fixtures(request) {
  if (!request.url.startsWith('https://api.notion.com/')) {
    check(!request.headers?.Authorization, 'download never receives Notion token');
    return response({});
  }
  check(request.method === 'GET', 'Notion is read only');
  const path = request.url.replace('https://api.notion.com/v1/', '');
  if (path === `pages/${root}`) return response({ ...page(root, 'Root'), icon: { type: 'emoji', emoji: '🌿' }, cover: { type: 'file', file: { url: 'https://assets.example/cover.jpg' } } });
  if (path === `pages/${child}`) return response({ ...page(child, 'Same'), icon: { type: 'external', external: { url: 'https://assets.example/icon.png' } } });
  if (path === `pages/${sibling}`) return response(page(sibling, 'Same'));
  if (path === `blocks/${root}/children?page_size=100`) return response(list([
    block('p', 'paragraph', { rich_text: [...rt('Hello ', { annotations: { bold: true } }), ...rt('child', { href: `https://www.notion.so/${child}` })] }),
    block(child, 'child_page', { title: 'Same' }), block(sibling, 'child_page', { title: 'Same' }),
    block(imageId, 'image', { type: 'file', file: { url: 'https://assets.example/image.png' }, caption: rt('Picture') }),
    block(toggleId, 'toggle', { rich_text: rt('Details') }, true),
    block(tableId, 'table', { table_width: 2, has_column_header: false }, true),
    block('db', 'child_database', { title: 'Database' }, true)
  ], true, 'next'));
  if (path === `blocks/${root}/children?page_size=100&start_cursor=next`) return response(list([
    block('code', 'code', { language: 'markdown', rich_text: rt('```\n[child](https://www.notion.so/' + child + ')\n```') }),
    block('inline', 'paragraph', { rich_text: rt('[inline](https://www.notion.so/' + child + ')', { annotations: { code: true } }) }),
    block('video', 'video', { type: 'external', external: { url: 'https://www.youtube.com/watch?v=test' } })
  ]));
  if (path === `blocks/${child}/children?page_size=100`) return response(list([
    block('l', 'bulleted_list_item', { rich_text: rt('Item\nSecond line') }, true),
    block('ordered', 'numbered_list_item', { rich_text: rt('Ordered\r\nContinuation') })
  ]));
  if (path === `blocks/l/children?page_size=100`) return response(list([block('todo', 'to_do', { rich_text: rt('Nested\nTask continuation'), checked: true })]));
  if (path === `blocks/${sibling}/children?page_size=100`) return response(list([block('back', 'paragraph', { rich_text: rt('root', { href: `https://www.notion.so/${root}` }) })]));
  if (path === `blocks/${toggleId}/children?page_size=100`) return response(list([block('inside', 'paragraph', { rich_text: rt('Inside') })]));
  if (path === `blocks/${tableId}/children?page_size=100`) return response(list([block('r1', 'table_row', { cells: [rt('a|b'), rt('value')] })]));
  if (path === `blocks/${imageId}`) return response(block(imageId, 'image', { type: 'file', file: { url: 'https://assets.example/fresh-image.png' } }));
  throw new Error(`Unexpected endpoint ${path}`);
}

(async () => {
  check(api.notionPageId(root) === root, 'compact ID');
  check(api.notionPageId('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa') === root, 'UUID');
  check(api.notionPageId(`https://www.notion.so/Title-${root}?v=ignored#x`) === root, 'page URL');
  assert.throws(() => api.notionPageId(`https://evil.example/${root}`), /notion-page-id/); checks++;
  const v = vault(); route = fixtures;
  const controller = new AbortController();
  const preview = await api.prepareNotionApi(v.app, 'test-only-token', root, controller.signal, () => {});
  check(v.files.size === 0, 'dry run has no writes');
  check(!requests.some((r) => !r.url.startsWith('https://api.notion.com')), 'dry run has no downloads');
  check(preview.plan.pagesCount === 3, 'subpages');
  check(preview.plan.attachmentsCount === 3, 'image, cover, image icon');
  check(preview.plan.renamedCount === 1, 'duplicate titles');
  check(preview.issues.some((i) => i.type === 'child_database') && preview.issues.some((i) => i.type === 'toggle'), 'loss report');
  v.failNextBinary();
  await assert.rejects(preview.plan.execute('_notion', () => {}), /disk/); checks++;
  check(!Array.from(v.files.values()).some((f) => f.fm?.['naitflow-notion-id']), 'no dangling committed pages on download failure');
  const result = await preview.plan.execute('_notion', () => {});
  check(result.pages === 3 && result.attachments === 3, 'resume after media failure');
  const rootNote = v.files.get('_notion/Root.md');
  const childNote = v.files.get('_notion/Root/Same.md');
  check(childNote.text.includes('- Item  \n  Second line\n    - [x] Nested  \n      Task continuation'), 'multiline bullet and nested task retain breaks and indentation');
  check(childNote.text.includes('1. Ordered  \n   Continuation'), 'multiline numbered item retains CRLF break and indentation');
  check(rootNote.text.includes('[[_notion/Root/Same|child]]'), 'internal page link');
  check(rootNote.text.includes('![[\u005fnotion/Root/Вложенные файлы/'), 'local image embed');
  check(rootNote.text.includes('| a\\|b | value |'), 'table escaped and first row preserved');
  check(rootNote.text.includes('````markdown\n```'), 'code fence accommodates embedded fence');
  check(rootNote.text.includes('[child](https://www.notion.so/' + child + ')'), 'code links untouched');
  check(rootNote.text.includes('` [inline](https://www.notion.so/' + child + ') `'), 'inline code links untouched');
  check(childNote.text.includes('    - [x] Nested'), 'nested todo');
  check(rootNote.fm['naitflow-icon'] === 'emoji:🌿', 'emoji metadata');
  check(childNote.fm['naitflow-icon'].startsWith('image:_notion/Root/Same/Вложенные файлы/'), 'local image icon metadata');
  check(rootNote.fm['naitflow-cover'].startsWith('_notion/Root/Вложенные файлы/'), 'local cover metadata');
  check(rootNote.fm['naitflow-notion-created'] === '2026-01-01T00:00:00.000Z', 'dates preserved');
  check(v.files.has('_notion/Root/Same 2.md'), 'duplicate title suffix');
  const size = v.files.size, beforeDownloads = requests.filter((r) => !r.url.startsWith('https://api.notion.com')).length;
  childNote.text += '\nLOCAL EDIT';
  await preview.plan.execute('_notion', () => {});
  check(v.files.size === size && childNote.text.endsWith('LOCAL EDIT'), 'repeat preserves local edits without duplicates');
  check(beforeDownloads === requests.filter((r) => !r.url.startsWith('https://api.notion.com')).length, 'repeat skips existing media');
  const fresh = await api.prepareNotionApi(v.app, 'test-only-token', root, new AbortController().signal, () => {});
  await fresh.plan.execute('_notion', () => {});
  check(v.files.size === size, 'resume after reopening / new preview');
  const recovered = vault();
  const recoveryPlan = await api.prepareNotionApi(recovered.app, 'test-only-token', root, new AbortController().signal, () => {});
  const beforeRecovery = requests.length;
  let signedAttempts = 0;
  route = (request) => {
    if (request.url.endsWith('/icon.png')) return response({}, 404);
    if (request.url.endsWith('/fresh-image.png') && ++signedAttempts === 1) return response({}, 403);
    return fixtures(request);
  };
  const partial = await recoveryPlan.plan.execute('_notion', () => {});
  check(partial.pages === 3 && partial.attachments === 2, 'permanent CDN failure still imports all notes and available files');
  check(partial.attachmentFailures.length === 1 && partial.attachmentFailures[0].error.status === 404, 'partial result identifies HTTP failure');
  check(partial.attachmentFailures[0].path.includes('/Same/Вложенные файлы/') && !partial.attachmentFailures[0].path.includes('://'), 'report contains local file path, not a URL');
  check(signedAttempts === 2 && requests.slice(beforeRecovery).filter((r) => r.url.endsWith(`/blocks/${imageId}`)).length === 2, 'signed 403 refreshes URL before retrying');
  const recoveredNote = recovered.files.get('_notion/Root/Same.md');
  recoveredNote.text += '\nLOCAL EDIT';
  const iconPath = partial.attachmentFailures[0].path;
  check(recoveredNote.fm['naitflow-icon'] === `image:${iconPath}` && !recovered.files.has(iconPath), 'missing icon keeps its future local target');
  const beforeRetry = requests.length;
  route = fixtures;
  const recoveryResult = await recoveryPlan.plan.execute('_notion', () => {});
  check(recoveryResult.attachments === 3 && recoveryResult.attachmentFailures.length === 0 && recovered.files.has(iconPath), 'retry fills the missing file');
  check(requests.length - beforeRetry === 1 && recoveredNote.text.endsWith('LOCAL EDIT'), 'retry downloads only missing media and preserves edits without metadata cache');
  await recoveryPlan.plan.close();
  v.files.set('_other', new TFolder('_other'));
  await assert.rejects(fresh.plan.execute('_other', () => {}), /destination-exists/); checks++;
  controller.abort();
  await assert.rejects(preview.plan.execute('_notion', () => {}), /notion-cancelled/); checks++;
  await preview.plan.close(); await fresh.plan.close();
  route = () => response({}, 401);
  await assert.rejects(api.prepareNotionApi(v.app, 'fake', root, new AbortController().signal, () => {}), /notion-auth/); checks++;
  route = () => response({}, 404);
  await assert.rejects(api.prepareNotionApi(v.app, 'fake', root, new AbortController().signal, () => {}), /notion-access/); checks++;
  let attempt = 0;
  route = () => ++attempt === 1 ? response({}, 429, { 'Retry-After': '1' }) : response({ ok: true });
  const reader = new api.NotionReader('fake', new AbortController().signal);
  check((await reader.get('users/me')).ok && attempt === 2, '429 retry'); reader.dispose();
  route = () => response({}, 200, { 'CONTENT-TYPE': 'text/html; charset=utf-8' });
  await assert.rejects(new api.NotionReader('fake', new AbortController().signal).download(async () => 'https://assets.example/sign-in', false, false), /notion-media-html/); checks++;
  route = () => response({ additional_data: { rate_limit_reason: 'public_api_request_blocked' } }, 429);
  await assert.rejects(new api.NotionReader('fake', new AbortController().signal).get('users/me'), /notion-access/); checks++;
  route = () => response({}, 429, { 'Retry-After': '600' });
  await assert.rejects(new api.NotionReader('fake', new AbortController().signal).get('users/me'), /notion-rate/); checks++;
  check(!JSON.stringify(Array.from(v.files.values())).includes('test-only-token'), 'token never stored');
  // Exercise the existing ZIP pipeline after generalizing its source type.
  const zip = new ZipWriter(new BlobWriter(), { useWebWorkers: false });
  await zip.add(`Legacy ${root}.md`, new TextReader(`# Legacy\n\n[Sub](Legacy/Child%20${child}.md)\n\n![pic](Legacy/pic.png)`));
  await zip.add(`Legacy/Child ${child}.md`, new TextReader('# Child\n\nBody'));
  await zip.add('Legacy/pic.png', new Uint8ArrayReader(new Uint8Array([1, 2, 3])));
  const blob = await zip.close(), zv = vault();
  const zp = await importer.prepareImport(zv.app, new File([blob], 'export.zip'));
  check(zp.pagesCount === 2 && zp.attachmentsCount === 1, 'ZIP preview regression');
  await zp.execute('_zip', () => {}); await zp.close();
  check(zv.files.get('_zip/Legacy.md').text.includes('[[_zip/Legacy/Child|Sub]]'), 'ZIP link regression');
  check(zv.files.has('_zip/Legacy/_files/pic.png'), 'ZIP attachments live beside their page');
  const hashZip = new ZipWriter(new BlobWriter(), { useWebWorkers: false });
  await hashZip.add(`Legacy ${root}.md`, new TextReader(`# Legacy\n\n[Topic](#Topic%20${child}.md)\n\n[Heading](#heading)\n\n[File](Legacy/Name%20(one(two)).pdf)`));
  await hashZip.add(`#Topic ${child}.md`, new TextReader('# #Topic\n\n[Shared](Legacy/Name%20(one(two)).pdf)'));
  await hashZip.add('Legacy/Name (one(two)).pdf', new Uint8ArrayReader(new Uint8Array([1])));
  const hv = vault();
  const hp = await importer.prepareImport(hv.app, new File([await hashZip.close()], 'hash.zip'));
  check(hp.unresolvedLinksCount === 0, 'ZIP link and heading with hash');
  await hp.execute('_hash', () => {}); await hp.close();
  check(hv.files.get('_hash/Legacy.md').text.includes('[Topic](_hash/%23Topic.md)'), 'ZIP encodes hash in the linked file name');
  check(hv.files.get('_hash/Legacy.md').text.includes('[Heading](#heading)'), 'ZIP preserves a standalone heading anchor');
  check(hv.files.get('_hash/Legacy.md').text.includes('[File](./Legacy/_files/Name%20%28one%28two%29%29.pdf)'), 'ZIP uses a portable relative attachment link');
  check(hv.files.has('_hash/#Topic/_files/Name (one(two)).pdf'), 'shared attachment has a copy beside the second page');
  const buildinId = '12345678-1234-1234-1234-123456789abc';
  const buildinChildId = '87654321-4321-4321-4321-cba987654321';
  const buildinZip = new ZipWriter(new BlobWriter(), { useWebWorkers: false });
  await buildinZip.add(`Buildin+${buildinId}.md`, new TextReader(`[Child](Child+${buildinChildId}.md)`));
  await buildinZip.add(`Child+${buildinChildId}.md`, new TextReader('Body'));
  const bv = vault();
  const bp = await importer.prepareImport(bv.app, new File([await buildinZip.close()], 'buildin.zip'));
  check(bp.format === 'buildin-md' && bp.pagesCount === 2, 'Buildin archive auto-detection');
  await bp.execute('_buildin', () => {}); await bp.close();
  check(bv.files.get('_buildin/Buildin.md').text.includes('[[_buildin/Child|Child]]'), 'Buildin ZIP link regression');

  const coverVault = vault();
  const available = 'https://assets.example/photo';
  const unavailable = 'https://assets.example/expired';
  const invalid = 'https://assets.example/login';
  const stalled = 'https://assets.example/stalled';
  const htmlPage = (title, cover) => ({
    sourcePath: `${title}.html`, sourceId: title, title, targetTitle: title,
    targetPath: `${title}.md`, targetFolderPath: title, rawContent: '', cover, coverY: 28
  });
  const coverPages = [
    htmlPage('One', available), htmlPage('Two', available), htmlPage('Three', unavailable),
    htmlPage('Four', invalid), htmlPage('Five', stalled), htmlPage('Six', 'local.png')
  ];
  const coverPlan = new importer.NaitFlowImportPlan(coverVault.app, { close: async () => {} },
    'notion-html', 'covers.zip', coverPages, [{
      sourcePath: 'local.png', targetPath: 'Six/_files/local.png',
      source: { readBinary: async () => new Uint8Array([1]).buffer }
    }], 0, 0);
  requests = [];
  route = ({ url }) => {
    if (url === available) return response(null, 200, { 'Content-Type': 'image/jpeg; charset=binary' });
    if (url === unavailable) throw new Error('offline');
    if (url === stalled) return new Promise(() => {});
    return response(null, 200, { 'content-type': 'text/html' });
  };
  check(coverPlan.remoteCoversCount === 5 && requests.length === 0, 'cover preview does not download');
  const coverResult = await coverPlan.execute('_html', () => {});
  check(coverResult.covers.saved === 2 && coverResult.covers.linked === 3, 'cover results count affected pages');
  check(requests.length === 4, 'matching cover URLs are downloaded once');
  const coverPath = '_html/One/_files/_cover.jpg';
  const secondCoverPath = '_html/Two/_files/_cover.jpg';
  check(coverVault.files.has(coverPath) && coverVault.files.has(secondCoverPath), 'each page has a local cover copy');
  const frontmatter = (title) => coverVault.files.get(`_html/${title}.md`).fm;
  check(frontmatter('One')['naitflow-cover'] === coverPath && frontmatter('Two')['naitflow-cover'] === secondCoverPath,
    'shared cover points to the local file of each page');
  check(frontmatter('One')['naitflow-cover-y'] === 28, 'cover position is preserved');
  check(frontmatter('Three')['naitflow-cover'] === unavailable && frontmatter('Four')['naitflow-cover'] === invalid &&
    frontmatter('Five')['naitflow-cover'] === stalled, 'network errors, non-images and timeouts keep source URLs');
  check(frontmatter('Six')['naitflow-cover'] === '_html/Six/_files/local.png', 'archive cover stays local');

  const localCoverZip = new ZipWriter(new BlobWriter(), { useWebWorkers: false });
  await localCoverZip.add(`Local ${root}.html`, new TextReader(
    '<img class="page-cover-image" src="original.jpg"><div class="page-body"><img src="original.jpg"><img src="_cover.jpg"></div>'));
  await localCoverZip.add('_cover.jpg', new Uint8ArrayReader(new Uint8Array([1])));
  await localCoverZip.add('original.jpg', new Uint8ArrayReader(new Uint8Array([2])));
  const localCoverVault = vault();
  const localCoverPlan = await importer.prepareImport(localCoverVault.app, new File([await localCoverZip.close()], 'local.zip'));
  await localCoverPlan.execute('_local', () => {});
  await localCoverPlan.close();
  const localNote = localCoverVault.files.get('_local/Local.md');
  const localCoverFile = localCoverVault.files.get('_local/Local/_files/_cover.jpg');
  const otherImage = localCoverVault.files.get('_local/Local/_files/_cover 2.jpg');
  check(localNote.fm['naitflow-cover'] === localCoverFile.path &&
    localNote.text.includes('![Photo](./Local/_files/_cover.jpg)'),
    'archive cover property and body link use the same renamed file');
  check(new Uint8Array(localCoverFile.text)[0] === 2 && new Uint8Array(otherImage.text)[0] === 1 &&
    localNote.text.includes('./Local/_files/_cover%202.jpg'), 'cover name conflict preserves both images and links');
  console.log(`Passed ${checks} Notion import checks (mock API / in-memory vault; no real credentials).`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
