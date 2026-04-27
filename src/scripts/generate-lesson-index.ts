// Generates content/lessons/index.json — runs as the npm prebuild step.
// Reads every lesson markdown, parses the human-readable header, and writes a
// flat ordered array of lesson metadata for client + server consumption.

import fs from "node:fs";
import path from "node:path";

type IndexEntry = {
  slug: string;
  module: string;
  moduleSlug: string;
  moduleTitle: string;
  number: string;
  title: string;
  estimatedMinutes: string;
  hasGradedDeliverable: boolean;
  sourcePath: string;
};

const MODULE_TITLES: Record<string, string> = {
  "01": "Claude Essentials",
  "02": "Prompt Engineering Fundamentals",
  "03": "Practical Daily Applications",
  "04": "Claude Projects & Knowledge",
  "05": "Extended Capabilities",
  "06": "Core Capstone"
};

function parseHeader(md: string) {
  const titleMatch = md.match(/^#\s+Lesson\s+([\d.]+)\s*[—–-]\s*(.+)$/m);
  const number = titleMatch?.[1] ?? "";
  const title = titleMatch?.[2]?.trim() ?? "Lesson";

  const moduleMatch = md.match(/^\*\*Module:\*\*\s*(.+)$/m);
  const rawModule = moduleMatch?.[1]?.trim() ?? "";
  const moduleNumMatch = rawModule.match(/^(\d{2})/);
  const moduleNum = moduleNumMatch?.[1] ?? (number ? number.split(".")[0].padStart(2, "0") : "01");

  const estMatch = md.match(/^\*\*Estimated time:\*\*\s*(.+)$/m);
  const estimatedMinutes = (estMatch?.[1] ?? "20 minutes").trim();

  return { number, title, moduleNum, estimatedMinutes };
}

function main() {
  const root = path.join(process.cwd(), "content", "lessons");
  const out: IndexEntry[] = [];
  const failures: string[] = [];

  if (!fs.existsSync(root)) {
    console.warn(`[generate-lesson-index] content/lessons not found at ${root}; writing empty index`);
    fs.writeFileSync(path.join(root, "index.json"), "[]\n", "utf8");
    return;
  }

  for (const moduleDir of fs.readdirSync(root).sort()) {
    const full = path.join(root, moduleDir);
    if (!fs.statSync(full).isDirectory()) continue;
    for (const file of fs.readdirSync(full).sort()) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(full, file);
      try {
        const md = fs.readFileSync(filePath, "utf8");
        const header = parseHeader(md);
        const moduleNum = moduleDir.split("-")[0] || header.moduleNum;
        const hasGradedDeliverable = /^##\s+Graded deliverable\s*$/m.test(md);
        out.push({
          slug: file.replace(/\.md$/, ""),
          module: moduleNum,
          moduleSlug: moduleDir,
          moduleTitle: MODULE_TITLES[moduleNum] ?? `Module ${moduleNum}`,
          number: header.number,
          title: header.title,
          estimatedMinutes: header.estimatedMinutes,
          hasGradedDeliverable,
          sourcePath: path.relative(process.cwd(), filePath)
        });
      } catch (err) {
        failures.push(`${filePath}: ${(err as Error).message}`);
      }
    }
  }

  out.sort((a, b) => {
    if (a.module !== b.module) return a.module.localeCompare(b.module);
    return a.number.localeCompare(b.number, undefined, { numeric: true });
  });

  fs.writeFileSync(path.join(root, "index.json"), JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`[generate-lesson-index] wrote ${out.length} entries to content/lessons/index.json`);
  if (failures.length) {
    console.error(`[generate-lesson-index] ${failures.length} file(s) failed to parse:`);
    for (const f of failures) console.error("  - " + f);
  }
}

main();
