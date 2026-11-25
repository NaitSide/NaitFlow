const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const compiled = ts.transpileModule(fs.readFileSync(path.join(root, 'src/markdown-blocks.ts'), 'utf8'), {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS }
}).outputText;
const exported = {};
vm.runInNewContext(compiled, { exports: exported });
const { markdownBlocks: scan, moveMarkdownBlock: move } = exported;
const results = [];
const bodies = text => Array.from(scan(text), block => text.slice(block.from, block.to));
function test(name, run) {
  try { run(); results.push({ name, ok: true }); }
  catch (error) { results.push({ name, ok: false, error: error.message }); }
}

const cases = [
  ['multiline paragraph', 'first\ncontinued\n\nsecond', ['first\ncontinued', 'second']],
  ['frontmatter', '---\nicon: test\n---\n\nA\n\nB', ['A', 'B']],
  ['unfinished frontmatter', '---\nkey: value\nA', []],
  ['fenced code', 'A\n\n```js\nconst x=1;\n\n# not a heading\n```\n\nB', ['A', '```js\nconst x=1;\n\n# not a heading\n```', 'B']],
  ['nested list', '- parent\n  - child\n    text\n- sibling', ['- parent\n  - child\n    text', '- sibling']],
  ['list blank continuation', '- parent\n\n  child\n\n- sibling', ['- parent\n\n  child', '- sibling']],
  ['list tab continuation', '- parent\n\n\tchild\n- sibling', ['- parent\n\n\tchild', '- sibling']],
  ['indented code blank lines', '    one\n\n\n    two', ['    one\n\n\n    two']],
  ['callout', '> [!note]\n> content\n>\n> more\n\nend', ['> [!note]\n> content\n>\n> more', 'end']],
  ['table', '| a | b |\n|---|---|\n| 1 | 2 |', ['| a | b |\n|---|---|\n| 1 | 2 |']],
  ['setext heading', 'Heading\n-------\n\nparagraph', ['Heading\n-------', 'paragraph']],
  ['adjacent embeds', '![[a.png]]\n![[b.mp4]]', ['![[a.png]]', '![[b.mp4]]']],
  ['display math', '$$\na + b\n$$\n\ntext', ['$$\na + b\n$$', 'text']],
  ['raw HTML', '<details>\n\ntext\n\n</details>\n\nend', ['<details>\n\ntext\n\n</details>', 'end']],
  ['blank note', '\n\n', []],
  ['CRLF delimiters', 'A\r\n\r\nB', ['A', 'B']],
  ['code block ID', '```js\nx()\n```\n\n^code-id\n\nEnd', ['```js\nx()\n```\n\n^code-id', 'End']],
  ['list block ID', '- A\n- B\n\n^list-id\n\nEnd', ['- A\n- B\n\n^list-id', 'End']]
];
for (const [name, text, expected] of cases) test(name, () => assert.deepEqual(bodies(text), expected));

const documents = [
  'A\n\nB\n\nC',
  'A\n# Heading\nB',
  '- A\n  - child\n- B\n- C',
  '---\nkey: keep\n---\n\n# Heading\n\nParagraph\nline two\n\n```js\nx()\n```\n\n![[image.png]]\n\n- list\n  - nested\n- second\n\n> quote',
  'A\r\n\r\nB\r\n\r\nC',
  '```js\nx()\n```\n\n^code-id\n\n- A\n- B\n\n^list-id\n\n[[Page#^code-id|link]]'
];
for (const [documentIndex, text] of documents.entries()) {
  const blocks = scan(text);
  for (let source = 0; source < blocks.length; source++) {
    for (let boundary = 0; boundary <= blocks.length; boundary++) test(`document ${documentIndex}: ${source} → boundary ${boundary}`, () => {
      const change = move(text, blocks, source, boundary);
      if (boundary === source || boundary === source + 1) { assert.equal(change, null); return; }
      assert.ok(change);
      const next = text.slice(0, change.from) + change.insert + text.slice(change.to);
      assert.deepEqual(bodies(next).sort(), bodies(text).sort(), 'Every original block must survive intact');
      const order = Array.from(blocks, (_, index) => index);
      order.splice(source, 1);
      order.splice(boundary > source ? boundary - 1 : boundary, 0, source);
      assert.deepEqual(bodies(next), order.map(index => text.slice(blocks[index].from, blocks[index].to)), 'Drop boundary must produce the requested order');
      assert.ok(next.slice(change.selection).startsWith(text.slice(blocks[source].from, blocks[source].to)), 'Selection must follow the moved block');
      if (text.startsWith('---')) assert.ok(next.startsWith('---\nkey: keep\n---'), 'Metadata must not move');
      assert.equal(next.slice(0, change.from), text.slice(0, change.from));
      assert.equal(next.slice(change.from + change.insert.length), text.slice(change.to));
    });
  }
}
test('invalid boundary', () => assert.equal(move('A\n\nB', scan('A\n\nB'), 0, 3), null));
const failed = results.filter(result => !result.ok);
const report = { total: results.length, passed: results.length - failed.length, failed };
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (failed.length) process.exitCode = 1;
