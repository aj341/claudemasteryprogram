import "server-only";
import fs from "node:fs";
import path from "node:path";

// ----- Types -----

export type LessonRubricItem = { name: string; points: number; desc: string };

export type LessonDeliverableSection = {
  num: number;
  title: string;
  desc: string;
  hint: string;
  minWords: number | null;
  maxWords: number | null;
};

export type LessonPageData = {
  kicker: string;
  title: string;
  html: string;
};

export type LessonDeliverable = {
  title: string;
  brief: string;
  sections: LessonDeliverableSection[];
  rubric: LessonRubricItem[];
  passMark: number;
  graderNotes: string | null;
};

export type LessonExample = {
  num: number;
  scenario: string;
  title: string;
  prompt: string;
  why: string;
};

// W1-T03: Per-lesson industry personalisation config parsed from a JSON HTML
// comment inside the ## Worked examples section. Drives pickExamplesForIndustry.
export type LessonPersonalisation = {
  mode: "industry-personalised" | "keep-all";
  default_index: number;
  mapping: Record<string, number>;
};

export type LessonData = {
  slug: string;
  module: string;
  moduleTitle: string;
  number: string;
  title: string;
  lead: string;
  estimatedMinutes: string;
  format: string;
  prerequisites: string[];
  objectives: string[];
  body: { pages: LessonPageData[] };
  examples: LessonExample[];
  // W1-T03: personalisation rules. null when the lesson has no ## Worked examples
  // section at all (e.g. 1.3, 1.4, 6.4). { mode: "keep-all", ... } when the lesson
  // has worked examples but no JSON config block (e.g. 2.4, 2.5, 3.6, 4.1, 4.5, 5.5).
  personalisation: LessonPersonalisation | null;
  // W1-T03: raw HTML of the ## Worked examples body when no Example N: blocks
  // parse (i.e. 5.5's four-tier decision table). Render this verbatim under the
  // Worked examples heading. null when the section parses normally or is missing.
  workedExamplesContent: string | null;
  deliverable: LessonDeliverable | null;
  sourcePath: string;
};

export type LessonIndexEntry = {
  slug: string;
  module: string;
  moduleSlug: string;
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

const MODULE_SLUGS: Record<string, string> = {
  "01": "01-claude-essentials",
  "02": "02-prompt-engineering-fundamentals",
  "03": "03-practical-daily-applications",
  "04": "04-claude-projects-knowledge",
  "05": "05-extended-capabilities",
  "06": "06-core-capstone"
};

function contentRoot() {
  return path.join(process.cwd(), "content", "lessons");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inlineMd(s: string): string {
  s = s.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  return s;
}

function blockMdToHtml(block: string): string {
  const lines = block.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      out.push(`<h3>${inlineMd(escapeHtml(line.slice(4)))}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h3>${inlineMd(escapeHtml(line.slice(3)))}</h3>`);
      i++;
      continue;
    }

    // Markdown pipe-tables. Header row must be followed by a separator row of
    // dashes/colons. We leave alignment unsupported (no left/right/center) since
    // the lesson content doesn't use it. This exists primarily to render 5.5's
    // four-tier decision table in the worked-examples section.
    const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l);
    const isTableSep = (l: string) => /^\s*\|?\s*[:\-\| ]+\s*\|?\s*$/.test(l) && /-/.test(l);
    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const splitRow = (l: string): string[] =>
        l.trim().replace(/^\||\|$/g, "").split("|").map(c => c.trim());
      const headers = splitRow(line);
      i += 2; // header + separator
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      let html = "<table><thead><tr>";
      for (const h of headers) html += `<th>${inlineMd(escapeHtml(h))}</th>`;
      html += "</tr></thead><tbody>";
      for (const r of rows) {
        html += "<tr>";
        for (let c = 0; c < headers.length; c++) {
          const cell = r[c] ?? "";
          html += `<td>${inlineMd(escapeHtml(cell))}</td>`;
        }
        html += "</tr>";
      }
      html += "</tbody></table>";
      out.push(html);
      continue;
    }

    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      out.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      out.push("<ul>" + items.map(it => `<li>${inlineMd(escapeHtml(it))}</li>`).join("") + "</ul>");
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i++;
      }
      out.push("<ol>" + items.map(it => `<li>${inlineMd(escapeHtml(it))}</li>`).join("") + "</ol>");
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const paraLines: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" &&
           !lines[i].startsWith("#") &&
           !/^\s*[-*]\s+/.test(lines[i]) &&
           !/^\s*\d+\.\s+/.test(lines[i]) &&
           !lines[i].startsWith("```")) {
      paraLines.push(lines[i]);
      i++;
    }
    const para = paraLines.join(" ");
    out.push(`<p>${inlineMd(escapeHtml(para))}</p>`);
  }

  return out.join("\n");
}

function parseHeader(md: string) {
  const titleMatch = md.match(/^#\s+Lesson\s+([\d.]+)\s*[—–-]\s*(.+)$/m);
  const number = titleMatch?.[1] ?? "";
  const title = titleMatch?.[2]?.trim() ?? "Lesson";

  const moduleMatch = md.match(/^\*\*Module:\*\*\s*(.+)$/m);
  const rawModule = moduleMatch?.[1]?.trim() ?? "";
  const moduleNumMatch = rawModule.match(/^(\d{2})/);
  const moduleNum = moduleNumMatch?.[1] ?? (number ? number.split(".")[0].padStart(2, "0") : "01");
  const moduleTitle = MODULE_TITLES[moduleNum] ??
    (rawModule.replace(/^\d{2}\s*[·•-]\s*/, "").trim() || "Module");

  const estMatch = md.match(/^\*\*Estimated time:\*\*\s*(.+)$/m);
  const estimatedMinutes = (estMatch?.[1] ?? "20 minutes").trim();

  const formatMatch = md.match(/^\*\*Format:\*\*\s*(.+)$/m);
  const format = (formatMatch?.[1] ?? "Read + Practice + Graded deliverable").trim();

  const prereqSection = md.match(/^##\s+Pre-?requisites\s*\n([\s\S]*?)(?=\n##\s|\n---\s*\n)/m);
  const prerequisites: string[] = [];
  if (prereqSection) {
    for (const line of prereqSection[1].split("\n")) {
      const m = line.match(/^\s*[-*]\s+(.+)$/);
      if (m) prerequisites.push(m[1].trim());
    }
  }

  const objSection = md.match(/^##\s+Learning objectives\s*\n([\s\S]*?)(?=\n##\s|\n---\s*\n)/m);
  const objectives: string[] = [];
  if (objSection) {
    for (const line of objSection[1].split("\n")) {
      const m = line.match(/^\s*[-*]\s+(.+)$/);
      if (m) objectives.push(m[1].trim());
    }
  }

  return { number, title, moduleNum, moduleTitle, estimatedMinutes, format, prerequisites, objectives };
}

function makeLead(md: string, header: ReturnType<typeof parseHeader>): string {
  const scriptMatch = md.match(/^##\s+Lesson script\s*\n([\s\S]*?)(?=\n---\s*\n##\s+|\n##\s+(?:Worked examples|Graded deliverable|Notes|Industry|Source))/m);
  const body = scriptMatch?.[1] ?? "";
  const lines = body.split("\n");
  const para: string[] = [];
  for (const ln of lines) {
    if (ln.startsWith("#")) {
      if (para.length === 0) continue;
      break;
    }
    if (ln.trim() === "") {
      if (para.length > 0) break;
      continue;
    }
    para.push(ln.trim());
    if (para.join(" ").length > 280) break;
  }
  let lead = para.join(" ").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  if (lead.length > 320) lead = lead.slice(0, 280).replace(/\s+\S*$/, "") + "…";
  if (!lead) {
    lead = `Lesson ${header.number} of the Claude Mastery Program — ${header.title}.`;
  }
  return lead;
}

function buildPages(md: string, header: ReturnType<typeof parseHeader>): LessonPageData[] {
  const pages: LessonPageData[] = [];
  const lead = makeLead(md, header);
  pages.push({
    kicker: `Lesson ${header.number} · Cover`,
    title: header.title,
    html: `
      <p style="font-size:1.05rem;font-style:italic;color:var(--text-muted)">${escapeHtml(lead)}</p>
      <h3>By the end of this lesson</h3>
      <ul>${header.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join("")}</ul>
      <p style="margin-top:20px;font-size:0.9rem;color:var(--text-muted)">${escapeHtml(header.estimatedMinutes)} · ${escapeHtml(header.format)}${header.prerequisites.length ? " · " + escapeHtml("Prereqs: " + header.prerequisites.join(", ")) : ""}</p>
    `.trim()
  });

  const scriptMatch = md.match(/^##\s+Lesson script\s*\n([\s\S]*?)(?=\n---\s*\n##\s+|\n##\s+(?:Worked examples|Graded deliverable|Notes|Industry|Source))/m);
  const scriptBody = scriptMatch?.[1] ?? "";

  const h3Sections: { heading: string; body: string }[] = [];
  if (scriptBody.trim()) {
    const re = /^###\s+(.+)$/gm;
    const matches: { heading: string; index: number; len: number }[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(scriptBody)) !== null) {
      matches.push({ heading: m[1].trim(), index: m.index, len: m[0].length });
    }
    if (matches.length === 0) {
      h3Sections.push({ heading: "The lesson", body: scriptBody.trim() });
    } else {
      const preamble = scriptBody.slice(0, matches[0].index).trim();
      if (preamble) h3Sections.push({ heading: "Overview", body: preamble });
      for (let k = 0; k < matches.length; k++) {
        const start = matches[k].index + matches[k].len;
        const end = k + 1 < matches.length ? matches[k + 1].index : scriptBody.length;
        const body = scriptBody.slice(start, end).trim();
        h3Sections.push({ heading: matches[k].heading, body });
      }
    }
  }

  let pageNum = 2;
  for (const sec of h3Sections) {
    pages.push({
      kicker: `Lesson ${header.number} · Page ${pageNum}`,
      title: sec.heading,
      html: blockMdToHtml(sec.body)
    });
    pageNum++;
  }

  return pages;
}

function parseExamples(md: string): LessonExample[] {
  const exMatch = md.match(/^##\s+Worked examples\s*\n([\s\S]*?)(?=\n##\s+(?:Graded deliverable|Notes|Industry|Source)|\n---\s*\n##\s+)/m);
  if (!exMatch) return [];
  // W1-T03: skip the JSON comment so the regex below doesn't try to match
  // ### Example inside it (it doesn't, but keep the body lean for safety).
  const body = exMatch[1].replace(/<!--\s*industry-personalisation[\s\S]*?-->/g, "");

  const examples: LessonExample[] = [];
  const re = /^###\s+Example\s+(\d+):\s*(.+)$/gm;
  const matches: { num: number; scenario: string; index: number; len: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    matches.push({ num: parseInt(m[1], 10), scenario: m[2].trim(), index: m.index, len: m[0].length });
  }
  for (let k = 0; k < matches.length; k++) {
    const start = matches[k].index + matches[k].len;
    const end = k + 1 < matches.length ? matches[k + 1].index : body.length;
    const chunk = body.slice(start, end).trim();

    let title = matches[k].scenario;
    let prompt = "";
    let why = "";

    const scenarioMatch = chunk.match(/\*\*Scenario:\*\*\s*([\s\S]*?)(?=\n\*\*|\n```|$)/);
    if (scenarioMatch) {
      title = scenarioMatch[1].trim().replace(/\s+/g, " ");
    }
    const promptMatch = chunk.match(/\*\*Prompt:\*\*\s*\n```\s*\n([\s\S]*?)\n```/);
    if (promptMatch) prompt = promptMatch[1].trim();
    const whyMatch = chunk.match(/\*\*Why it works:\*\*\s*([\s\S]*?)(?=\n---|$)/);
    if (whyMatch) why = whyMatch[1].trim().replace(/\s+/g, " ");

    examples.push({
      num: matches[k].num,
      scenario: matches[k].scenario,
      title,
      prompt,
      why
    });
  }
  return examples;
}

function parseDeliverable(md: string): LessonDeliverable | null {
  const dMatch = md.match(/^##\s+Graded deliverable\s*\n([\s\S]*?)\n##\s+Notes/m);
  if (!dMatch) return null;
  const body = dMatch[1];

  const titleMatch = body.match(/^\*\*Title:\*\*\s*(.+)$/m);
  const title = titleMatch?.[1]?.trim() ?? "Deliverable";

  const briefMatch = body.match(/^\*\*Brief:\*\*\s*([\s\S]*?)(?=\n\*\*What to submit:|\n\*\*Where|$)/m);
  const brief = (briefMatch?.[1] ?? "").trim().replace(/\s+/g, " ");

  const sectionsMatch = body.match(/^\*\*What to submit:\*\*\s*\n([\s\S]*?)(?=\n\*\*Where|\n\*\*Length guide|\n\*\*Pass mark)/m);
  const sections: LessonDeliverableSection[] = [];
  if (sectionsMatch) {
    const txt = sectionsMatch[1];
    const re = /^(\d+)\.\s+([\s\S]*?)(?=\n\d+\.\s|\n\n|$)/gm;
    let m: RegExpExecArray | null;
    while ((m = re.exec(txt)) !== null) {
      const num = parseInt(m[1], 10);
      const raw = m[2].trim().replace(/\s+/g, " ");
      let secTitle = raw;
      let desc = "";
      const dashIdx = raw.indexOf(" — ");
      const dashIdx2 = dashIdx === -1 ? raw.indexOf(" - ") : dashIdx;
      if (dashIdx > 0) {
        secTitle = raw.slice(0, dashIdx).replace(/\*\*/g, "").trim();
        desc = raw.slice(dashIdx + 3).trim();
      } else if (dashIdx2 > 0) {
        secTitle = raw.slice(0, dashIdx2).replace(/\*\*/g, "").trim();
        desc = raw.slice(dashIdx2 + 3).trim();
      } else {
        const firstStop = raw.search(/[.:]/);
        if (firstStop > 0 && firstStop < 80) {
          secTitle = raw.slice(0, firstStop).replace(/\*\*/g, "").trim();
          desc = raw.slice(firstStop + 1).trim();
        } else {
          secTitle = `Section ${num}`;
          desc = raw;
        }
      }
      secTitle = secTitle.replace(/^\*\*([^*]+)\*\*\s*/, "$1").trim();

      const wcMatch = raw.match(/(\d+)\s*[–-]\s*(\d+)\s*word/i);
      let minWords: number | null = null;
      let maxWords: number | null = null;
      if (wcMatch) {
        minWords = parseInt(wcMatch[1], 10);
        maxWords = parseInt(wcMatch[2], 10);
      }
      const totalMatch = raw.match(/(\d+)\s*[–-]\s*(\d+)\s*total/i);
      if (totalMatch) {
        minWords = parseInt(totalMatch[1], 10);
        maxWords = parseInt(totalMatch[2], 10);
      }

      sections.push({ num, title: secTitle, desc, hint: "", minWords, maxWords });
    }
  }

  const lengthGuide = body.match(/^\*\*Length guide:\*\*\s*([\s\S]*?)(?=\n\*\*Pass mark|$)/m);
  if (lengthGuide && sections.length > 0) {
    const lg = lengthGuide[1];
    for (const sec of sections) {
      if (sec.minWords !== null && sec.maxWords !== null) continue;
      const sectionRe = new RegExp(`Section\\s*${sec.num}\\s*[:.]\\s*([^\\n]+)`, "i");
      const lgMatch = lg.match(sectionRe);
      if (lgMatch) {
        const wcMatch = lgMatch[1].match(/(\d+)\s*[–-]\s*(\d+)\s*word/i);
        if (wcMatch) {
          sec.minWords = parseInt(wcMatch[1], 10);
          sec.maxWords = parseInt(wcMatch[2], 10);
        }
      }
    }
  }

  const passMatch = body.match(/Pass mark:\s*\*?\*?\s*(\d+)\s*\/\s*100/);
  const passMark = passMatch ? parseInt(passMatch[1], 10) : 70;

  const rubric: LessonRubricItem[] = [];
  const rubricMatch = body.match(/Rubric[^\n]*pass at[^\n]*\n([\s\S]*?)(?=\n---|\n##\s+|$)/);
  if (rubricMatch) {
    const rt = rubricMatch[1];
    // Format: - **Name (25 pts)** — desc... (points INSIDE the bold)
    const re = /^-\s*\*\*([^*()]+?)\s*\((\d+)\s*pts?\)\s*\*\*\s*[—–-]?\s*([\s\S]*?)(?=\n\s*-\s*\*\*[^*]+\(\d+\s*pts?\)|\n---|\n##\s+|$)/gm;
    let m: RegExpExecArray | null;
    while ((m = re.exec(rt)) !== null) {
      const name = m[1].trim().replace(/[—–-]\s*$/, "");
      const points = parseInt(m[2], 10);
      let desc = m[3].trim().replace(/\s+/g, " ");
      desc = desc.replace(/^[—–-]\s*/, "");
      rubric.push({ name, points, desc });
    }
  }

  const notesMatch = md.match(/^##\s+Notes for the AI grading engine\s*\n([\s\S]*?)(?=\n##\s+(?:Industry|Source)|$)/m);
  const graderNotes = notesMatch ? notesMatch[1].trim() : null;

  return { title, brief, sections, rubric, passMark, graderNotes };
}

// W1-T03: Parse the JSON config block embedded in the ## Worked examples section.
// Looks for a single HTML comment of the form:
//   <!-- industry-personalisation
//   { ... JSON ... }
//   -->
// Returns null if no comment is present. The caller falls back to keep-all when
// examples exist without a config block, or to null when the section is missing.
function parsePersonalisationBlock(workedExamplesBody: string): LessonPersonalisation | null {
  const m = workedExamplesBody.match(/<!--\s*industry-personalisation\s*([\s\S]*?)\s*-->/);
  if (!m) return null;
  const raw = m[1].trim();
  try {
    const parsed = JSON.parse(raw) as LessonPersonalisation;
    if (parsed && (parsed.mode === "industry-personalised" || parsed.mode === "keep-all")) {
      return {
        mode: parsed.mode,
        default_index: typeof parsed.default_index === "number" ? parsed.default_index : 0,
        mapping: parsed.mapping && typeof parsed.mapping === "object" ? parsed.mapping : {}
      };
    }
  } catch (err) {
    console.warn("[lessons] industry-personalisation JSON failed to parse:", err);
  }
  return null;
}

// W1-T03: For 5.5's case, capture the body of ## Worked examples when it
// doesn't yield any Example N: blocks. We render this as raw HTML inside the
// worked-examples slot. Returns null when there's nothing to render.
function extractWorkedExamplesContent(md: string, hasParsedExamples: boolean): string | null {
  if (hasParsedExamples) return null;
  const exMatch = md.match(/^##\s+Worked examples\s*\n([\s\S]*?)(?=\n##\s+(?:Graded deliverable|Notes|Industry|Source)|\n---\s*\n##\s+)/m);
  if (!exMatch) return null;
  // Strip the personalisation comment so we don't render it
  let body = exMatch[1].replace(/<!--\s*industry-personalisation[\s\S]*?-->/g, "").trim();
  if (!body) return null;
  return blockMdToHtml(body);
}

// W1-T03: Pure filter — picks the worked examples a learner with the given
// industry should see, based on the lesson's personalisation config.
//   - keep-all (or null mapping)  → return examples unchanged (5 cards)
//   - industry-personalised        → return [examples[mapping[industry] ?? default_index]]
//                                    clamped to a valid index. Single-element array
//                                    (or empty if examples is empty / index OOB).
//   - personalisation null         → return examples unchanged (no config, no rules)
// The lesson with no ## Worked examples section never reaches this function.
export function pickExamplesForIndustry(
  examples: LessonExample[],
  personalisation: LessonPersonalisation | null,
  industry: string | null | undefined
): LessonExample[] {
  if (!personalisation || personalisation.mode === "keep-all") return examples;
  if (examples.length === 0) return [];
  const mapping = personalisation.mapping ?? {};
  const fallback = personalisation.default_index ?? 0;
  let chosen = (industry && industry in mapping) ? mapping[industry] : fallback;
  if (typeof chosen !== "number" || Number.isNaN(chosen)) chosen = 0;
  // Clamp to valid range so a config that drifts ahead of an example doesn't crash
  if (chosen < 0) chosen = 0;
  if (chosen >= examples.length) chosen = examples.length - 1;
  return [examples[chosen]];
}

function lessonFiles(): string[] {
  const root = contentRoot();
  if (!fs.existsSync(root)) return [];
  const files: string[] = [];
  for (const moduleDir of fs.readdirSync(root)) {
    const full = path.join(root, moduleDir);
    if (!fs.statSync(full).isDirectory()) continue;
    for (const file of fs.readdirSync(full)) {
      if (file.endsWith(".md")) files.push(path.join(full, file));
    }
  }
  return files.sort();
}

function slugFromFile(file: string): string {
  return path.basename(file, ".md");
}

export function listAllLessons(): LessonIndexEntry[] {
  const out: LessonIndexEntry[] = [];
  for (const file of lessonFiles()) {
    try {
      const md = fs.readFileSync(file, "utf8");
      const header = parseHeader(md);
      const moduleDir = path.basename(path.dirname(file));
      const moduleNum = moduleDir.split("-")[0];
      const hasGradedDeliverable = /^##\s+Graded deliverable\s*$/m.test(md);
      out.push({
        slug: slugFromFile(file),
        module: moduleNum || header.moduleNum,
        moduleSlug: moduleDir,
        number: header.number,
        title: header.title,
        estimatedMinutes: header.estimatedMinutes,
        hasGradedDeliverable,
        sourcePath: path.relative(process.cwd(), file)
      });
    } catch (err) {
      console.warn("[lessons] Failed to index lesson file:", file, err);
    }
  }
  out.sort((a, b) => {
    if (a.module !== b.module) return a.module.localeCompare(b.module);
    return a.number.localeCompare(b.number, undefined, { numeric: true });
  });
  return out;
}

export function getLessonBySlug(slug: string): LessonData | null {
  for (const file of lessonFiles()) {
    if (slugFromFile(file) !== slug) continue;
    try {
      const md = fs.readFileSync(file, "utf8");
      const header = parseHeader(md);
      const lead = makeLead(md, header);
      const pages = buildPages(md, header);
      const examples = parseExamples(md);
      const deliverable = parseDeliverable(md);
      const moduleDir = path.basename(path.dirname(file));

      // W1-T03: parse personalisation config + capture worked-examples body fallback (for 5.5)
      const exMatch = md.match(/^##\s+Worked examples\s*\n([\s\S]*?)(?=\n##\s+(?:Graded deliverable|Notes|Industry|Source)|\n---\s*\n##\s+)/m);
      const workedExamplesBody = exMatch ? exMatch[1] : "";
      let personalisation = parsePersonalisationBlock(workedExamplesBody);
      if (!personalisation && examples.length > 0) {
        // Worked-examples section present, no JSON config → keep-all (e.g. 2.4, 2.5, 3.6, 4.1, 4.5)
        personalisation = { mode: "keep-all", default_index: 0, mapping: {} };
      } else if (!personalisation && !exMatch) {
        // Section missing entirely (e.g. 1.3, 1.4, 6.4) — leave personalisation null
        personalisation = null;
      }
      const workedExamplesContent = extractWorkedExamplesContent(md, examples.length > 0);

      return {
        slug,
        module: moduleDir.split("-")[0] || header.moduleNum,
        moduleTitle: MODULE_TITLES[moduleDir.split("-")[0]] ?? header.moduleTitle,
        number: header.number,
        title: header.title,
        lead,
        estimatedMinutes: header.estimatedMinutes,
        format: header.format,
        prerequisites: header.prerequisites,
        objectives: header.objectives,
        body: { pages },
        examples,
        personalisation,
        workedExamplesContent,
        deliverable,
        sourcePath: path.relative(process.cwd(), file)
      };
    } catch (err) {
      console.warn("[lessons] Failed to load lesson:", slug, err);
      return null;
    }
  }
  return null;
}

export function getModuleLessons(moduleNum: string): LessonIndexEntry[] {
  const all = listAllLessons();
  return all.filter(l => l.module === moduleNum);
}

export function getModuleSlug(moduleNum: string): string {
  return MODULE_SLUGS[moduleNum] ?? `${moduleNum}-module`;
}

export function getModuleTitle(moduleNum: string): string {
  return MODULE_TITLES[moduleNum] ?? `Module ${moduleNum}`;
}
