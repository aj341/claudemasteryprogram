# Lesson 4.3 — Knowledge management and document organization

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 25 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Modules 1, 2, and 3 complete
- Lesson 4.1 — What Claude Projects are and how they work
- Lesson 4.2 — Writing a Project system prompt that actually holds

## Learning objectives

By the end of this lesson you'll be able to:
- Distinguish between "all your business documents" and the specific knowledge Claude actually needs for a given Project
- Sort your documents into the three knowledge categories: business context, process knowledge, and client/project knowledge
- Prepare any document so Claude can read and use it effectively
- Build a lightweight maintenance habit so your knowledge documents stay current
- Recognise what should never go into a Project

---

## Lesson script

### Not all documents belong in a Project

When retailers first discover that Claude Projects can hold documents, the instinct is to upload everything. Brand brochure, full SKU list, last year's wholesale agreements, photos of the team, the supplier contract from 2021, the spreadsheet you sort of use to track stock. Everything gets loaded in, and then the Project is treated like a searchable filing cabinet.

This is the wrong mental model, and it creates real problems. Claude isn't a search engine for your files. It works best when the knowledge in a Project is deliberately chosen — not comprehensive, but relevant. Every document you add increases the chance that Claude draws on the wrong thing, or gets confused by conflicting details, or buries the useful information under material that doesn't apply.

The right question is not: what do I have? The right question is: what does Claude need to do this specific task well, that it doesn't already know?

That reframe changes which documents you choose. It also changes how you write or reformat them. A Project's knowledge is not a digital archive. It's a briefing pack — the minimum set of well-organised documents that gives Claude the context it needs to do real work without asking you to fill in the gaps every time.

### The three knowledge categories

Once you're thinking in terms of relevance rather than completeness, three categories cover almost everything a well-set-up Project should contain.

**Brand context.** This is who you are, how you operate, and what makes {{businessName}} distinct. It answers the background questions Claude would otherwise ask or guess at. Your store name, location, what you sell, who your customers are, how you communicate, what you don't stock. The tone document from Lesson 1.5 belongs here. So does a one-page "about us" written for Claude — not for customers, but as a plain-English briefing on your store that a new casual would need on day one.

Brand context documents don't change often. Once they're written and in the Project, they're mostly stable. You'll update them when something material changes — a new product line, a different customer base, a rebrand — but you're not touching them weekly.

**Process knowledge.** This covers how you do things. Your returns process. How you handle damaged-stock complaints. The steps you follow when onboarding a new wholesale stockist. How you structure a restock-alert email. What happens after a customer places a pre-order. These documents exist so Claude understands your workflow and can help you at each stage of it — not just generate generic output, but output that fits how your store actually operates.

Process documents are most useful when written as clear steps, not paragraphs of explanation. Claude reads a numbered list of seven steps more reliably than a 400-word description of the same process. Format matters here, and you'll cover exactly why shortly.

**Stockist and campaign knowledge.** This is the context specific to a current piece of work — a wholesale stockist's brief, a campaign scope document, notes from a buyer call, a stockist's brand guide, the agreed deliverables for a launch you're delivering right now. This category is different from the other two: it changes with every new campaign or stockist relationship and isn't useful once the work is done.

Most retailers have one Project per major stockist or per active campaign, and the stockist/campaign knowledge documents in that Project are specific to that work. When the campaign ends, the Project is archived. The brand context and process documents stay in your main Projects; the stockist-specific material goes with the stockist's Project.

Keep these three categories distinct. If you find yourself wondering where a document belongs, ask: does this describe my store permanently, does it describe how I do something, or does it describe a specific current piece of work? That question usually resolves it.

### Format matters: how to prepare a document for Claude

Not all document formats are equal. Claude reads some reliably; others produce variable results. The ranking from most reliable to least:

**Plain text** is the most reliable. A `.txt` or `.md` file with headings, numbered steps, and short sections is what Claude reads with the highest accuracy. When you write a document specifically for Claude — a process guide, a brand context brief, a set of instructions — write it in plain text.

**Structured PDF** (text-based, not scanned) works well when the document is logically formatted. A wholesale line sheet or a price list in a clean PDF is fine. Claude can read it accurately if the text is selectable — i.e., not a scan or an image of a document.

**Image-based PDFs and photos of documents** are the least reliable. Claude can read them using vision, but accuracy drops when the layout is complex, when there's a lot of small text, or when the image quality is low. If an important document only exists as a scanned PDF or a photo, transcribe the relevant parts into plain text before adding it to a Project.

Length matters too. Claude holds a large amount of context, but that doesn't mean longer is better. A 200-word process document that covers exactly what Claude needs outperforms a 2,000-word one that buries the key steps in background explanation. For each document in your Project, ask: what does Claude actually need from this? Then strip everything else.

Structure matters as much as length. A heading followed by five bullet points beats a five-paragraph essay on the same content. Here's why: when Claude is generating output that needs to draw on your knowledge document, it scans for structure. Headings act as labels. Numbered lists signal sequence. Short paragraphs signal distinct points. Dense paragraphs of mixed information make it harder for Claude to locate what it needs quickly.

When preparing a document for a Project, follow this approach:

```
## Document name

One-line summary of what this document is for.

### Section heading

- Point one
- Point two
- Point three

### Section heading

Step 1: [action]
Step 2: [action]
Step 3: [action]
```

This structure takes five minutes to apply to a document you've already written. It pays back in more accurate outputs every time Claude draws on it.

### Common mistake → better approach

**Mistake:** Uploading an existing customer-facing document directly to a Project without reformatting it.

A "lookbook" or product brochure written to charm wholesale buyers is not a useful knowledge document for Claude. It's written in marketing language, it omits operational detail, it prioritises mood over accuracy, and it buries the information Claude actually needs (what you sell, at what RRP, with what margin, with what minimums) inside copy designed for a different purpose.

**Better approach:** Write a separate Claude-facing version of that document. Keep it short, plain, and specific. Write it the way you'd brief a smart new casual on their first shift — factual, direct, structured. "We are a four-person homewares brand based in regional Victoria. We sell direct on Shopify (about 350 orders/month) and through 12 wholesale stockists. Our core range: hand-thrown ceramic mugs ($42 RRP, 50% wholesale, 6-piece MOQ), linen tea towels ($28 RRP, 50% wholesale, 6-piece MOQ), beeswax candles ($34 RRP, 50% wholesale, 8-piece MOQ). Standard wholesale terms: 14-day payment from invoice. Standard retail dispatch: 1–2 business days." That briefing is more useful to Claude than a six-page lookbook.

### The update problem

Knowledge documents go stale. This is the most common reason a Project that worked well three months ago is producing weaker output now. The store changed. The pricing structure changed. A new SKU was added. A wholesale stockist parted ways. The knowledge documents didn't change with them, and now Claude is working from an outdated picture of {{businessName}}.

The update problem doesn't need a complicated solution. You don't need a review calendar or a quarterly audit. You need one habit: when something about your store changes that a knowledge document covers, update the document that day.

The trigger is the change, not the calendar. You add a new SKU — update your range document the same afternoon. You change your returns window — update the process document before the next time you run the returns workflow. You sign a new wholesale stockist — create or update their stockist knowledge document before you start using the Project for their work.

The sign that a document has gone stale isn't always obvious. Sometimes it shows up as Claude getting details slightly wrong — quoting an RRP you've since lifted, describing a step that you've removed from your returns process, or failing to account for a constraint that now matters. When you see that, the fix is simple: find the document that contains the outdated information, correct it, and move on.

There's also a harder version of the update problem: knowledge that never existed as a document. Claude is making assumptions about how you handle something, because you never wrote down how you actually handle it. The output is off, but not because the document is wrong — there is no document. In that case, the fix is to write one. Five minutes of documentation now prevents the same correction ten times in the future.

### What not to store in a Project

Just as important as what goes in is what stays out. Three categories of information should never be stored in a Claude Project.

**Sensitive credentials.** Passwords, API keys, account numbers, login details, PINs. Claude Projects are not a password manager. Even if you trust the platform, storing credentials in a knowledge document creates a single location that could expose them if your account were ever accessed by someone else.

**Financial account details.** BSB and account numbers, credit card details, full Stripe or Shopify Payments records. A reference to the bank you use is fine. Your actual account number is not.

**Live operational data that changes frequently.** Your current open-orders queue, today's stock-on-hand, your bank balance, the status of open returns. This kind of data goes stale within hours or days. Putting it in a knowledge document means Claude will use the stale version. Operational data belongs in the tools you use to manage it (Shopify, Lightspeed, Xero) — not in a static knowledge document.

The test is simple: if this information changed tomorrow and Claude used the old version, would that cause a problem? For credentials and financials, the answer is always yes. For operational data, it's almost always yes. Keep those out.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 2,
    "Professional Services": 3,
    "Trades & Construction": 1,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 4,
    "Health & Wellness": 5,
    "Trades & Services": 1,
    "Other": 0,
    "SaaS / Software": 6,
    "Education & Coaching": 7
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: A plain-text business briefing that shapes every client email

**Scenario:** Business context document · Bookkeeper in Hobart

**Prompt:**
```

```

**Why it works:** The knowledge document is plain text with clear sections and short, scannable points. It tells Claude what the practice does and what it does not do — both matter. The communication style instruction is specific enough to shape the output. The prompt then calls on the document directly to do a real piece of work.

---

### Example 2: Numbered follow-up sequence removes ambiguity from every email

**Scenario:** Process document · Painting contractor in Newcastle

**Prompt:**
```

```

**Why it works:** The process document is numbered, sequential, and short. It removes ambiguity about tone (friendly but not pushy), establishes a rule Claude should follow (no discounting), and gives Claude the structure before the variable details of this specific job. The prompt references the step number directly so Claude knows exactly where in the sequence it is.

---

### Example 3: Asking Claude what belongs in the Project — and what doesn't

**Scenario:** Document audit · Marketing consultant in Perth

**Prompt:**
```

```

**Why it works:** This prompt uses Claude to help decide what goes into a Project — a legitimate and useful application. It describes the full document set and asks Claude to apply the same logic this lesson teaches: what's useful, what's image-only (low reliability), what's operationally live, what's sensitive. The response gives the student a practical model for auditing their own document set.

---

### Example 4: Updating an 18-month-old business context document after four changes

**Scenario:** Update trigger · HR consultant in Auckland

**Prompt:**
```

```

**Why it works:** This prompt shows the update habit in action. The student doesn't rewrite from scratch — they bring the current version, list exactly what changed, and ask for a clean updated version. The change list is specific and itemised, so Claude applies each update precisely rather than interpreting vague instructions.

---

### Example 5: Two documents stay, one gets pulled out as operational data

**Scenario:** Knowledge kit review · Café owner in Fitzroy

**Prompt:**
```

```

**Why it works:** Documents 1 and 2 are well-suited for Project knowledge — stable, text-based, relevant. Document 3 is a classic example of operational data that changes weekly and doesn't belong in a Project. This prompt surfaces that distinction in a realistic way and models the document audit the lesson teaches students to run before submitting their deliverable.

---

### Example 6: Preparing a new-patient onboarding process document for a Claude Project

**Scenario:** Geelong physio practice · Auditing a new-patient onboarding process doc

**Prompt:**
```
I run a 2-physio clinic in Newtown, Geelong — Bayside Physio & Movement. I want to add our new-patient onboarding process to a Claude Project so Claude can draft welcome emails, pre-appointment forms, and first-visit confirmations consistently.
      
      Right now the process lives in a 6-page Cliniko export with screenshots, internal pricing, and patient examples copy-pasted from real charts. That's not what Claude needs.
      
      Please help me audit and rewrite it. Here's my draft of what should stay in the document:
      
      - Practice overview (who we are, locations, hours, the 2 practitioners' areas of focus)
      - New-patient flow as numbered steps (booking &rarr; pre-appointment form &rarr; reminder SMS &rarr; first visit &rarr; treatment summary)
      - Standard inclusions in each communication (what we always say, what we never say)
      - Tone notes (warm, professional, plain-English, no clinical jargon to patients)
      - Our scope-of-practice line for when to refer out
      
      What MUST stay out of this document: real patient names or initials, Medicare numbers, any clinical notes or chart entries, our Cliniko login or API key, supplier pricing, and the practitioners' personal mobiles.
      
      Format it for Claude: clear H2 headings, short paragraphs, no screenshots, no tables that came from chart software. Around 600–900 words. Ask me 3 clarifying questions before you draft.
```

**Why it works:** This sits squarely in the "process knowledge" category from the lesson and explicitly names what NOT to store — patient names, Medicare numbers, clinical notes, credentials — the exact regulated-data exclusions the lesson teaches. The format-for-Claude instructions (H2 headings, no chart artefacts, plain language, word count) mirror the lesson's preparation principles directly.

---

### Example 7: Sorting six company docs into "in the Project" or "keep out" for RosterRight

**Scenario:** SaaS founder, Melbourne · Auditing what belongs in the support Project

**Prompt:**
```
I'm the founder of RosterRight, a 5-person SaaS for hospitality rostering. I've set up a Claude Project for customer support drafting and I want to audit what I've loaded in plus what I've been tempted to add.
      
      Here's the full list. For each one, tell me which of the three knowledge categories it fits (business context, process knowledge, client-project knowledge), or whether it should stay out entirely:
      
      1. Our support voice and tone guide (one page, plain text, last updated this month)
      2. The refund-request process doc (steps, decision points, escalation rules)
      3. A CSV export of last quarter's support tickets including customer emails and account IDs
      4. Our Stripe API key and admin dashboard login (so Claude can "look things up")
      5. The product roadmap (live Notion page that changes weekly)
      6. A two-page FAQ on our shift-swap feature, written for customers
      
      For each "keep in", tell me if the format needs work before Claude can use it well — headings, length, anything that won't render cleanly. For each "keep out", give me the specific reason in one line.
```

**Why it works:** The lesson's three categories plus the keep-out rule are the whole point of 4.3, and the audit format forces both judgements on each doc. Items 3 and 4 are the lesson's exact red flags (regulated client data, credentials), and item 5 surfaces the update problem — a live-changing doc shouldn't sit in a Project.

---

### Example 8: Reformatting a parent-comms voice guide so Claude can actually use it

**Scenario:** Executive coach, Auckland · Preparing a voice doc for the client-comms Project

**Prompt:**
```
I run a small coaching practice — exec coaching for mid-career managers, plus a parallel stream coaching parents through their teenagers' NCEA years. I'm setting up a Project for parent-comms drafting and I want to prepare my voice and tone doc properly.
      
      Right now the doc is a 9-page Word file that started as a brand workshop output. It has a coloured header image, two tables nested inside each other, footnotes, and a lot of "we" and "us" language with no concrete examples.
      
      Walk me through reformatting it for Claude. I want:
      - A target length (rough word count for a Project knowledge doc)
      - A heading structure that makes the rules scannable
      - What to strip out (visual artefacts, nested tables, anything that won't paste cleanly)
      - What to add (concrete do/don't examples, sample sentences in the right voice)
      - Plain-language rewrites of any jargon
      
      Also — separately — tell me what should NOT go in this Project. I work with real parents and teenagers, so I want a clear list of what stays out (real names, school names, anything specific about a teenager's results or wellbeing).
```

**Why it works:** The prompt hits both halves of the lesson at once — the format-for-Claude principles (length, headings, plain language, stripping chart artefacts) and the keep-out rule for regulated or sensitive client data. The 9-page Word file with nested tables is a realistic version of the "doc that needs work before it's useful" the lesson describes.

---

## Graded deliverable

**Title:** Build your knowledge kit

**Brief:** Audit your own documents, choose the 4–6 strongest candidates for your main Project, reformat the best one for Claude, and prove it works by using it in a live prompt. This isn't a planning exercise — by the time you submit, you should have a real document sitting in a real Project that has produced a real piece of output. Finish with an 80-word note on what you'd add to the kit next.

**What to submit:**

1. **Document list — 4–6 Project-worthy documents with category + one-line justification** — For each document: name it, tag its category (business context / process knowledge / client-project knowledge), and write one line explaining why it earns its place in the Project. **If you don't have a document library yet**, describe the 4–6 documents you'd create from scratch using the same category + reason structure — this is just as valid for grading.

2. **Prepared document — full text (or 200-word excerpt) of your best reformatted document** — Plain text, structured with headings and short sections. Not a wall of prose, not customer-facing copy. The Claude-facing version.

3. **Working prompt + Claude's response — paste both in full** — A prompt that references the prepared document explicitly (not just assumes Claude will use it), plus Claude's full response pasted in full — not summarised.

4. **Future additions note (80 words — no more, no less is a meaningful constraint)** — Name a specific knowledge gap tied to a specific task failure. "Claude currently guesses at X, I correct it every time, I'd write a document about Y to fix this."

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Are the documents real, named business documents — not generic? Does each selection have a clear, business-specific reason for inclusion? A list of six document types that could belong to any small business scores low. A list tied to a named business, with one-line justifications that explain exactly what Claude needs that document for, scores high.
- **Structure (25 pts)** — Is the prepared document clearly structured with headings and short sections? Could Claude locate a specific piece of information in it quickly? A wall of prose with no visual hierarchy scores low. A document with named sections, short lists or numbered steps, and a clear logical order scores high.
- **Constraint clarity (25 pts)** — Does the working prompt tell Claude explicitly which document or context to draw on — not by assumption? Does the prompt give Claude enough constraint (task, format, tone, length) to produce output without significant manual correction after the fact?
- **Outcome focus (25 pts)** — Does the future additions note identify specific knowledge gaps — not generic ones? "I'd add more detail" scores low. "I'd add a warranty callback process doc because Claude currently guesses and I rewrite that section every time" scores high.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - The document list names real documents from the student's actual business, not generic document types. Justifications explain what specific task or gap each document addresses in the Project.
  - The prepared document uses clear headings, short sections, and plain English. It is written for Claude, not for a customer — it prioritises accuracy and completeness over persuasion.
  - The working prompt explicitly tells Claude to use the knowledge document by name or by reference ("using the business context document above" / "based on the process doc I've provided"). The prompt also includes at least one specific constraint on format or output length.
  - Claude's response is pasted in full and shows visible alignment with the document's content — the output reflects the specific details in the knowledge document rather than generic content Claude would produce without it.
  - The future additions note names a specific knowledge gap tied to a specific task failure — "Claude guesses at X, I correct it every time, I'd write a document about Y to fix this."

- **Penalise (dock points):**
  - The document list is generic ("about us doc, price list, process doc, tone guide") with no business-specific justification for each selection.
  - The prepared document is a wall of prose — no headings, no structure, no visual hierarchy. Or it is a copy-paste of a customer-facing document (brochure, website copy) without Claude-specific rewriting.
  - The working prompt does not reference the knowledge document — it just sends a task and assumes Claude has the context. Or the prompt is so vague (no tone, no format, no length constraint) that the output is generic rather than shaped by the knowledge document.
  - Claude's response is summarised rather than pasted in full.
  - The future additions note is generic: "I'd add more background about my business" or "I'd include more documents about my clients" without naming a specific gap or explaining what task it would improve.
  - Any submission that includes passwords, account numbers, financial credentials, or operational live data in the prepared document. Flag this clearly in feedback and explain why it should be removed.

- **Common 60–69 patterns:** The document list is specific enough — real business documents with reasonable justifications — but the prepared document is under-structured. The student uploaded or pasted an existing document without reformatting it: still written in customer-facing language, dense paragraphs, no headings. The working prompt works, but the output needed correction because Claude couldn't locate the relevant detail in an unstructured document. In feedback, quote one section of the prepared document and show exactly what a heading and two bullet points would do to make that section more usable for Claude.

- **Common 80+ patterns:** The document list is tight — 4–5 documents with specific, task-grounded justifications that explain both why the document is included and what task it enables. The prepared document has visible structure: a one-line summary at the top, named sections, short bullet points or numbered steps. The working prompt references the document explicitly and includes format constraints. Claude's response is clearly shaped by the document — it reflects specific details (names, prices, steps, tone rules) rather than generic content. The future additions note names a specific task where Claude currently has to guess, and identifies the specific document that would eliminate that guessing.

- **Feedback tone:** Direct, specific, and kind. Quote the student's document text when pointing to what's working or what needs restructuring. If the prepared document is unstructured, show a concrete before/after using a sentence from their own submission. If the future additions note is generic, push back with a specific question: "What's the last thing you corrected in Claude's output that a document could have prevented?" End with one concrete next step — either a specific structural fix to the prepared document, or the exact document the student should write next for this Project.

- **Resubmission gating:** Compare the revised submission to the original. If the prepared document gained visible structure (headings, short sections, numbered steps where there were paragraphs before), name that improvement explicitly and quote before and after. If the working prompt now references the document explicitly where it didn't before, acknowledge it. If the future additions note moved from generic to specific — if the student named a real task gap — quote the improvement. If the resubmission adds no structural improvement to the document and only lengthens the prose, flag that directly: length is not structure.
