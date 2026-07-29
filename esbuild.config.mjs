import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const production = process.argv[2] === "production";
const projectDir = dirname(fileURLToPath(import.meta.url));
const options = {
  absWorkingDir: projectDir,
  entryPoints: [join(projectDir, "src", "main.ts")],
  bundle: true,
  external: ["obsidian", "electron", "@codemirror/autocomplete", "@codemirror/collab", "@codemirror/commands", "@codemirror/language", "@codemirror/lint", "@codemirror/search", "@codemirror/state", "@codemirror/view", "@lezer/common", "@lezer/highlight", "@lezer/lr", ...builtins],
  format: "cjs",
  target: "es2022",
  logLevel: "info",
  sourcemap: production ? false : "inline",
  treeShaking: true,
  outfile: join(projectDir, "main.js")
};

if (production) {
  await esbuild.build(options);
} else {
  const context = await esbuild.context(options);
  await context.watch();
}
