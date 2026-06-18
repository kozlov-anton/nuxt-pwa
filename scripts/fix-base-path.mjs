// scripts/fix-base-path.mjs
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BASE = "/nuxt-pwa";
const DIR = ".output/public";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      let content = await readFile(fullPath, "utf-8");
      content = content
        .replace(/(href|src)="\/_nuxt\//g, `$1="${BASE}/_nuxt/`)
        .replace(/(href|src)="\/favicon/g, `$1="${BASE}/favicon`)
        .replace(
          /"\/manifest\.webmanifest"/g,
          `"${BASE}/manifest.webmanifest"`,
        );
      await writeFile(fullPath, content);
    }
  }
}

await walk(DIR);
console.log("Base path fixed in generated HTML");
