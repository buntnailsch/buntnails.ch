#!/usr/bin/env node
// Rebuild the Bunt price list PDF.
//
// Usage:
//   node data/preisliste/build.js
//   node data/preisliste/build.js --watch
//
// On Linux/macOS this file can also be executed directly after chmod +x.

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "Bunt_Preisliste.typ");
const output = join(here, "Bunt_Preisliste.pdf");
const watch = process.argv.includes("--watch") || process.argv.includes("-w");

if (!existsSync(source)) {
  console.error(`Source file not found: ${source}`);
  process.exit(1);
}

const command = watch ? "watch" : "compile";
const result = spawnSync("typst", [command, source, output], {
  cwd: here,
  stdio: "inherit",
});

if (result.error) {
  if (result.error.code === "ENOENT") {
    console.error("Typst is not installed or not on your PATH.");
    console.error("Install it from https://typst.app/ (winget: Typst.Typst).");
  } else {
    console.error(result.error.message);
  }
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!watch) {
  console.log(`Updated ${relative(process.cwd(), output)}`);
}
