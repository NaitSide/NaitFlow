const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const esbuild = require('esbuild');
const { BlobWriter, TextReader, Uint8ArrayReader, ZipWriter } = require('@zip.js/zip.js');

const root = 'aaaaaaaa-aaaa-4444-aaaa-aaaaaaaaaaaa';
const child = 'bbbbbbbb-bbbb-4444-bbbb-bbbbbbbbbbbb';
const sibling = 'cccccccc-cccc-4444-cccc-cccccccccccc';
const destination = '_import_buildin_md_api';
const image = Uint8Array.of(1, 2, 3, 4);
let rejectCover = false;

class TFile {
  constructor(path, body) { Object.assign(this, { path, body, fm: {} }); }
}
class TFolder {
  constructor(path) { Object.assign(this, { path, children: [] }); }
}

const obsidian = {
  TFile, TFolder,
  normalizePath: (value) => value.replace(/\\/g, '/').replace(/\/+/g, '/').replace(/^\/|\/$/g, ''),
  getLanguage: () => 'en',
  getFrontMatterInfo: (text) => ({ exists: text.startsWith('---\n'), frontmatter: text.split('\n')[1] }),
  parseYaml: JSON.parse,
  requestUrl: async ({ url, headers }) => {
    assert.equal(headers, undefined, 'media requests never receive the integration token');
    if (url === 'https://cdn2.buildin.ai/assets/byte-icon/light/grey/connection-point.svg') {
      return { status: 200, headers: { 'content-type': 'image/svg+xml' },
        arrayBuffer: new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>').buffer };
    }
    assert.ok(url.startsWith('https://assets.example/'));
    if (url.endsWith('/cover/graphs4')) return { status: 200,
      headers: { 'content-type': 'binary/octet-stream' }, arrayBuffer: Uint8Array.of(0xff, 0xd8, 0xff, 0xe0).buffer };
    if (url.endsWith('/not-an-image')) return { status: 200,
      headers: { 'content-type': 'application/octet-stream' }, arrayBuffer: new TextEncoder().encode('<html>Error</html>').buffer };
    if (url.startsWith('https://assets.example/signed.png?')) return { status: 200,
      headers: { 'content-type': 'binary/octet-stream' }, arrayBuffer: Uint8Array.of(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0).buffer };
    return { status: rejectCover && url.endsWith('denied.png') ? 403 : 200,
      headers: { 'content-type': 'image/png' }, arrayBuffer: image.buffer };
  }
};
const compiled = esbuild.buildSync({
  stdin: { contents: "export * from './src/importer'; export * from './src/buildin-page-import';", resolveDir: process.cwd() },
  bundle: true, platform: 'node', format: 'cjs', write: false, external: ['obsidian']
});
const moduleStub = { exports: {} };
vm.runInNewContext(compiled.outputFiles[0].text, {
  module: moduleStub, exports: moduleStub.exports, require: (id) => id === 'obsidian' ? obsidian : require(id),
  console, Blob, File, TextEncoder, TextDecoder, URL, ArrayBuffer, Uint8Array, AbortController, crypto, Error,
  TransformStream, ReadableStream, WritableStream, CompressionStream, DecompressionStream, Response,
  setTimeout, clearTimeout
});
const { BUILDIN_ID_FIELD, describeBuildinIcon, downloadImportImage, prepareImport, prepareBuildinImport, restoreBuildinAppearance } = moduleStub.exports;

function mockVault() {
  const files = new Map();
  const parentOf = (target) => files.get(target.slice(0, target.lastIndexOf('/')));
  const create = async (item) => {
    assert.ok(!files.has(item.path), `would overwrite ${item.path}`);
    const parent = parentOf(item.path);
    assert.ok(!item.path.includes('/') || parent instanceof TFolder, `parent missing for ${item.path}`);
    parent?.children.push(item);
    files.set(item.path, item);
    return item;
  };
  const app = {
    vault: {
      getAbstractFileByPath: (target) => files.get(target),
      createFolder: (target) => create(new TFolder(target)),
      create: (target, body) => create(new TFile(target, body)),
      createBinary: (target, bytes) => create(new TFile(target, bytes)),
      readBinary: async (file) => file.body,
      read: async (file) => `---\n${JSON.stringify(file.fm)}\n---\n${file.body}`,
      delete: async (file) => {
        const parent = parentOf(file.path);
        if (parent) parent.children.splice(parent.children.indexOf(file), 1);
        files.delete(file.path);
      }
    },
    fileManager: { processFrontMatter: async (file, fn) => fn(file.fm) }
  };
  return { app, files };
}

async function makeZip(entries) {
  const writer = new ZipWriter(new BlobWriter(), { useWebWorkers: false });
  for (const [name, value] of entries) {
    await writer.add(name, typeof value === 'string' ? new TextReader(value) : new Uint8ArrayReader(value));
  }
  return new File([await writer.close()], 'fixture.zip');
}

async function importZip(archive, vault, signal = new AbortController().signal, onProgress = () => {}) {
  const plan = await prepareBuildinImport(vault.app, archive, signal);
  try { return await plan.execute(destination, onProgress); }
  finally { await plan.close(); }
}

function contents(vault) {
  return [...vault.files.entries()]
    .filter(([key]) => !key.includes('/_buildin_appearance'))
    .map(([key, file]) => [key, file instanceof TFolder ? null : typeof file.body === 'string' ? file.body : Buffer.from(file.body)]);
}

async function checkWorkingArchive(filename) {
  const vault = mockVault();
  const result = await importZip(new File([fs.readFileSync(filename)], path.basename(filename)), vault);
  for (const [id, title, minimumLength] of [
    ['7c64ac44-88a0-4c43-bc97-ea57e66ba882', 'Отрисовка штор', 1000],
    ['f3dd2491-155c-4e69-900b-29288c4ee9d2', 'Установка Remnawave', 9000]
  ]) {
    const note = result.buildinNotes.find((entry) => entry.id === id);
    assert.ok(note?.path.endsWith('/' + title + '.md'), 'page retains the intended title');
    assert.ok(vault.files.get(note.path).body.length > minimumLength, 'local note contains the exported Markdown');
    const local = note.path.slice(0, -3);
    assert.ok([...vault.files.values()].some((file) => file !== vault.files.get(note.path) &&
      typeof file.body === 'string' && (file.body.includes('[[' + local + '|') || file.body.includes('[[' + local + ']]') ||
        file.body.includes('](' + note.path.split('/').map(encodeURIComponent).join('/') + ')'))),
    'another imported note links to the local file');
  }
  console.log(`Working archive: ${result.pages} notes, ${result.attachments} attachments, both requested notes and inbound links passed`);
}

(async () => {
  const diagnostic = describeBuildinIcon({ type: 'file', file: { url: 'https://private.example/s3/private-folder/private.svg?token=secret#private' } });
  assert.ok(diagnostic.includes('"kind":"HTTPS"') && diagnostic.includes('"family":"s3"') && diagnostic.includes('"extension":"svg"'));
  assert.ok(!diagnostic.includes('private') && !diagnostic.includes('secret'));
  assert.equal((await downloadImportImage('https://assets.example/not-an-image', { detectRasterFormat: true })).kind, 'format');
  assert.equal((await downloadImportImage('https://assets.example/cover/graphs4')).kind, 'format');
  const archive = await makeZip([
    [`Root+${root}.md`, `[Child](https://buildin.ai/docs/${child})\n\nBody.`],
    [`Root+${root}/Child+${child}.md`, `![Photo](Child+${child}/image.png)\n\nChild body.`],
    [`Root+${root}/Child+${child}/image.png`, image],
    [`Root+${root}/Sibling+${sibling}.md`, 'Sibling body.']
  ]);
  const zipOnly = mockVault();
  const baseline = await importZip(archive, zipOnly);
  assert.equal(baseline.pages, 3);
  assert.equal(baseline.attachments, 1);
  assert.equal(baseline.buildinNotes.length, 3);
  const rootBody = zipOnly.files.get(destination + '/Root.md').body;
  assert.ok(rootBody.includes('[[' + destination + '/Root/Child|Child]]'), rootBody);
  assert.ok(zipOnly.files.get(destination + '/Root/Child.md').body.includes('/_files/image.png'));
  assert.deepEqual(zipOnly.files.get(destination + '/Root.md').fm, { [BUILDIN_ID_FIELD]: root });

  const universal = mockVault();
  const plan = await prepareImport(universal.app, archive);
  await plan.execute(destination, () => {});
  await plan.close();
  assert.deepEqual(contents(universal), contents(zipOnly));
  assert.deepEqual(universal.files.get(destination + '/Root.md').fm, {});

  for (const partial of [false, true]) {
    rejectCover = partial;
    const vault = mockVault();
    const result = await importZip(archive, vault);
    const note = vault.files.get(destination + '/Root.md');
    note.fm.custom = 'keep';
    const logs = [];
    const reads = [];
    const progress = [];
    const options = {
      signal: new AbortController().signal,
      log: (line) => logs.push(line),
      onProgress: (current, total) => progress.push([current, total]),
      readPage: async (id) => {
        reads.push(id);
        if (id === root) return { icon: { type: 'emoji', emoji: '🌿' }, cover: { external: { url: 'https://assets.example/cover/graphs4' } } };
        if (id === child) return { icon: { type: 'file', file: { url: 'uploads/test/icons/child.png' } }, cover: 'https://assets.example/denied.png' };
        if (partial) throw new Error('HTTP 403');
        return {};
      },
      resolveMediaKey: async (id, key) => {
        assert.equal(id, child);
        assert.equal(key, 'uploads/test/icons/child.png');
        return 'https://assets.example/signed.png?token=fixture-secret';
      }
    };
    const checked = await restoreBuildinAppearance(vault.app, result.destination, result.buildinNotes, options);
    assert.deepEqual(progress, [[0, 3], [1, 3], [2, 3], [3, 3]]);
    assert.deepEqual(reads, Array.from(result.buildinNotes, ({ id }) => id));
    assert.equal(checked.icons, 2);
    assert.equal(checked.covers, partial ? 1 : 2);
    assert.equal(checked.failures.length, partial ? 2 : 0);
    if (partial) {
      assert.ok(checked.failures.some(({ path, message }) => path === destination + '/Root/Child.md' && message.includes('Cover') && message.includes('403')));
      assert.ok(checked.failures.some(({ path, message }) => path === destination + '/Root/Sibling.md' && message.includes('403')));
      assert.ok(logs.some((line) => line.startsWith(destination + '/Root/Child.md\n')));
    }
    assert.ok(logs.every((line) => !line.includes('fixture-secret')));
    assert.equal(note.fm.custom, 'keep');
    assert.equal(note.fm['naitflow-icon'], 'emoji:🌿');
    assert.ok(vault.files.has(note.fm['naitflow-cover']));
    assert.ok(note.fm['naitflow-cover'].endsWith('.jpg'));
    const childIcon = vault.files.get(destination + '/Root/Child.md').fm['naitflow-icon'];
    assert.ok(childIcon.startsWith('image:') && childIcon.endsWith('.png') && vault.files.has(childIcon.slice(6)));
    assert.deepEqual(contents(vault), contents(zipOnly));
    const beforeRepeat = [...vault.files.keys()];
    await restoreBuildinAppearance(vault.app, result.destination, result.buildinNotes, options);
    assert.deepEqual([...vault.files.keys()], beforeRepeat);
  }

  const svgPath = 'byte-icon/light/grey/connection-point.svg';
  const svgLog = [];
  const svgResult = await restoreBuildinAppearance(zipOnly.app, baseline.destination, baseline.buildinNotes, {
    signal: new AbortController().signal,
    log: (line) => svgLog.push(line),
    onProgress: () => {},
    resolveMediaKey: async () => assert.fail('public Buildin icons do not require signed URLs'),
    readPage: async (id) => ({ icon: id === root ? { type: 'external', external: { url: 'grey/connection-point.svg' } }
      : id === child ? { type: 'external', external: '//cdn2.buildin.ai/assets/' + svgPath }
      : { type: 'unknown', unknown: { name: 'fixture-hidden-value' } } })
  });
  assert.equal(svgResult.icons, 2);
  assert.equal(svgResult.failures.length, 1);
  const svgIcon = zipOnly.files.get(destination + '/Root.md').fm['naitflow-icon'];
  assert.ok(svgIcon.startsWith('image:') && svgIcon.endsWith('.svg'));
  assert.ok(zipOnly.files.has(svgIcon.slice(6)));
  assert.ok(svgLog.some((line) => line.includes('icon.schema') && line.includes('"name":"string"')));
  assert.ok(svgLog.every((line) => !line.includes('fixture-hidden-value')));

  const collision = await importZip(archive, zipOnly);
  assert.equal(collision.destination, destination + ' 2');
  assert.ok(collision.buildinNotes.every(({ path }) => path.startsWith(collision.destination + '/')));
  const cancelled = mockVault();
  const controller = new AbortController();
  await assert.rejects(importZip(archive, cancelled, controller.signal, ({ current }) => { if (current === 1) controller.abort(); }));
  assert.equal(cancelled.files.size, 0);

  for (const invalid of [
    new File(['not a zip'], 'bad.zip'),
    await makeZip([['README.md', 'Generic Markdown'], ['only-image.png', image]]),
    await makeZip([[`Buildin+${root}.html`, '<p>HTML export</p>']]),
    await makeZip([[`Notion ${'f'.repeat(32)}.md`, '# Notion']])
  ]) {
    await assert.rejects(prepareBuildinImport(mockVault().app, invalid, new AbortController().signal));
  }

  console.log('Buildin ZIP-only, complete and partial API, retries, collisions, rollback, invalid formats, and universal ZIP passed');
  if (process.argv[2]) await checkWorkingArchive(process.argv[2]);
})().catch((error) => { console.error(error); process.exitCode = 1; });
