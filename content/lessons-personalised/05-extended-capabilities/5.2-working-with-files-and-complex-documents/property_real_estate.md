# Lesson 5.2 — Working with files and complex documents

**Module:** 05 · Extended Capabilities
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Modules 1, 2, 3, and 4 complete (all lessons)
- Lesson 5.1 complete

## Learning objectives

By the end of this lesson you'll be able to:

- Identify which file types Claude can read and understand why text-based formats produce better results than scanned images
- Decide when to paste content directly versus upload a file — and choose the right approach for your task
- Apply a section-by-section approach when a document is too long to process in one pass
- Write structured extraction prompts that pull specific fields or rows from messy documents
- Apply these techniques to real business documents: contracts, invoices, supplier proposals, and long reports

---

## Lesson script

### What Claude can and cannot read

Claude can work with a range of file types — but they are not all equal. Understanding the hierarchy saves you a lot of frustration when you're feeding it leases, contracts of sale, strata reports, and owner statements.

**Text files (.txt, .md, .csv)** are the cleanest input. No formatting to interpret, no layout to reconstruct. Claude reads the raw text and gets to work immediately.

**Word documents (.docx)** work well. The text content comes through clearly. Formatting — headers, bold text, tables — is usually preserved or at least interpretable. If you're sharing a draft listing authority, a vendor proposal, or a long agency brief, a Word document is a solid choice.

**PDFs** are common and mostly workable, with one important caveat: it depends entirely on how the PDF was made. A PDF created by exporting from Word or Google Docs contains machine-readable text. Claude reads it directly. A PDF created by scanning a physical contract is an image — it contains no text, only pixels. Claude can attempt to read scanned PDFs, but the accuracy drops significantly and can fail entirely on poor scans or handwritten material.

**Spreadsheets (.xlsx, .csv)** are read-only. Claude can read the data, analyse it, summarise it, and extract patterns from it — your rent roll export, your sales pipeline, your end-of-month trust report. It cannot write back to your spreadsheet or push data anywhere. If you need Claude to process spreadsheet data, CSV format is the most reliable — export the relevant sheet as CSV before pasting or uploading.

**Scanned images of documents** are the least reliable input. If you have a scanned condition report or a photographed contract, Claude will attempt to read it, but errors increase. Where you can, convert scans to proper text-based formats first. Many scanners and phone apps (like Adobe Scan or Apple's built-in Notes scanner) now offer OCR — optical character recognition — which converts scanned text into machine-readable text. Use that output, not the raw image, when you can.

The format hierarchy in practice: **text > Word/PDF (digital) > scanned image.** When you have a choice, use the format highest on that list.

### The paste versus upload question

Claude gives you two ways to get a document into a conversation: paste the content directly, or upload the file. The choice matters.

**Paste** when the content is short enough to select and copy — typically anything under two or three pages. A single special condition. The opening clauses of a lease. A vendor's email about their price expectations. Pasting is faster, and it keeps the content visible in the conversation thread so you can reference it later. It also works in every interface, including the mobile app.

**Upload** when the document is long or when copying and pasting the content would be cumbersome. Full contracts of sale, strata reports, building inspection PDFs, multi-page owner statements, and large CSV exports from your CRM are all candidates for upload. The upload feature is available on Claude.ai (in the browser and the desktop app) — you'll see a paperclip or attachment icon in the input area.

One thing to know: uploading doesn't give Claude any special powers the paste approach doesn't. Both methods put the text in front of Claude's context window. The difference is convenience and the handling of complex formatting. For a heavily formatted document — one with tables, headers, numbered lists, and footnotes — uploading usually preserves structure better than a raw paste.

**Common mistake → Better approach**

Mistake: Pasting a 60-page strata report as raw text. The formatting collapses, the financial tables become unreadable rows of data, and you spend five minutes wondering why the output is chaotic.

Better approach: Upload the PDF directly. Claude processes the file, the formatting is preserved, and you get a coherent output. If you only need one section — the special by-laws, the sinking fund balance, the recent committee minutes — copy just that section and paste it. You don't need the whole document if you have a specific target.

### Working with long documents

Here's a limitation that trips people up: Claude has a context window. That means there's a ceiling on how much text it can hold in active memory at once. For most everyday documents — a 30-page contract of sale, a typical building inspection, a standard lease — you'll be well within the limit. But for very long documents — a 200-page strata report bundle, a multi-year body corporate audit, a compiled email archive on a problem property — you may hit the ceiling.

When that happens, you have two practical options.

**Option 1: Reduce the input.** Extract only the sections you need. You don't need to give Claude a 200-page strata bundle if your question is about the special by-laws in Section 4 and the levy schedule in Appendix B. Copy those sections and work with them directly.

**Option 2: Process in passes.** Feed the document to Claude in sections, one at a time. Ask Claude to produce a structured summary of each section. Once you have all the section summaries, feed those into a fresh conversation and ask Claude to synthesise across them. This is more work, but it's reliable for very long documents.

Here's what a pass-by-pass prompt looks like:

```
This is Section 3 of a strata report — Financial position and sinking fund.
It runs from pages 18 to 34. Please do two things:
1. Summarise the financial position in plain language — no more than 150 words.
2. List any specific obligations or special levies flagged in this section —
   exact figures, not vague claims. Format as a bullet list.

I will send you each section separately and then ask you to compare them.

[Section 3 pasted below]
```

The closing line — "I will send you each section separately and then ask you to compare them" — is important. It tells Claude what's coming and orients it toward the larger task. Claude can't hold earlier sections in memory once the conversation grows long, so you're asking it to produce a structured output each time — one that you'll feed back in later.

### Extracting structured data from messy documents

This is one of the most practical things Claude does with documents, and most agencies never try it.

Messy documents are everywhere in property. A trades invoice that lists work across a paragraph of prose instead of a table. A vendor's email burying their bottom-line price in three paragraphs of context. A long email thread between landlord, tenant, and PM where the action items are scattered across fifteen messages. A contract where the special conditions are mixed in with definitions and standard clauses.

Claude can extract structured data from all of these — provided you write the right prompt.

There are two reliable extraction patterns.

**Table extraction.** Use this when the document contains records — items, rows, transactions — that should be in a table but aren't. Tell Claude exactly which columns you want.

```
Below is a tradie's invoice for work at one of our managed properties. The
line items are described in running prose, not a table. Please extract every
line item and present the results in a table with these five columns:
Item description | Quantity | Unit price (AUD) | Total (AUD) | GST included (Y/N)

If any field is not stated in the invoice, write "not stated" in that cell.
Do not estimate or calculate — only include what is explicitly written.

[Invoice text pasted below]
```

The instruction "do not estimate or calculate — only include what is explicitly written" is doing real work here. Without it, Claude may fill gaps with plausible-looking numbers. That's the wrong behaviour when you're checking what to charge back to a landlord.

**Key-field extraction.** Use this when the document has specific terms, dates, parties, or obligations you need to pull out — but the document isn't structured around rows. Contracts of sale and leases are the classic case.

```
Below is a residential contract of sale. I need to extract the following specific
fields. For each field, quote the relevant text from the document exactly, then
state the page or clause reference where it appears. If a field is not addressed,
write "not found."

Fields to extract:
- Sale price and deposit amount
- Settlement date or settlement period
- Cooling-off period (and any waiver)
- Inclusions and exclusions
- Special conditions (list each one)
- Pest and building inspection clauses
- Finance clause (and any deadlines)
- Governing state (NSW, VIC, QLD, etc.)

[Contract pasted below]
```

Asking Claude to quote the relevant text exactly — rather than paraphrase it — is a critical constraint. Paraphrases can drift. An exact quote gives you something you can verify against the original and show to the conveyancer or solicitor if needed.

### Real business use cases

These are the scenarios where this lesson pays off most directly.

**Reading a contract of sale before exchange.** {{firstName}} doesn't need a solicitor to do a first pass on a vendor's draft contract. Paste the contract and ask Claude to extract the key commercial terms (price, deposit, settlement, special conditions, inclusions) using the key-field extraction pattern. Then identify anything that looks unusual or missing relative to what was agreed at the kitchen table. Take that list to your conveyancer for the final review.

**Extracting line items from a tradie invoice.** When a plumber or electrician's invoice arrives as a PDF or pasted text, use the table extraction prompt to pull it into a structured format. Compare it against the maintenance request and the landlord's approved budget. Flag discrepancies. This is faster than reading line by line, and you're less likely to miss a duplicate charge or a quantity error before you charge the owner's account.

**Summarising a strata report.** A buyer's agent client is bidding on a unit and the strata report runs to 80 pages. {{firstName}} has 15 minutes before the call. Paste the financial summary and the special by-laws section into Claude and ask it to produce: (1) a three-sentence overview, (2) the five most relevant findings for an investor buyer, (3) any red flags around levies, defects, or pending litigation. You get what you need without reading the whole bundle.

**Reviewing a building inspection.** A 25-page building and pest report lands the day before exchange. You need to understand what the inspector flagged, what's structural versus cosmetic, and what's vague. Use the section-by-section pass approach. Or, if it's short enough, upload the whole thing and ask Claude to: (1) summarise the structural findings, (2) list explicit defects with severity, (3) list any items the inspector recommends further investigation on before the buyer proceeds.

**Processing a long email thread.** Copy and paste the whole landlord–tenant–PM thread — including headers, dates, and names — and ask Claude to produce: a timeline of decisions made, a list of open action items with the person responsible for each, and any commitments either party made. This turns a 30-message thread about a leaking shower into a usable file note in about 30 seconds.

### Accuracy is your responsibility

One more thing before the worked examples.

Claude is very good at extraction. It is not infallible. On a complex, dense, or poorly formatted document, it will occasionally miss a field, misread a number, or overlook a clause buried in a special condition.

This is why every extraction task should include a verification step. After Claude returns the extracted data, spot-check a sample. Pick three line items on the tradie invoice and confirm them against the original. Pick two contract terms and confirm the quote is verbatim. Pick two settlement dates and confirm they match.

A spot-check takes two minutes. It tells you whether Claude's accuracy on this particular document is high enough to rely on. If you find multiple errors in your sample, go back to Claude with corrections and ask it to review the full extraction again. Most of the time, a spot-check will show the output is clean — and knowing that is worth the two minutes.

Never submit an extraction to a vendor, forward it to a conveyancer as a source of truth, or charge an owner's account based on it without checking a sample first. {{businessName}} extracted it. You verified it. That's the workflow.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 2,
    "SaaS / Software": 5,
    "Professional Services": 3,
    "Trades & Construction": 1,
    "Property & Real Estate": 3,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 0,
    "Health & Wellness": 6,
    "Education & Coaching": 7,
    "Trades & Services": 1,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Pulling the commercial terms out of a coffee supply contract

**Scenario:** Key-field extraction · Café supplier agreement

**Prompt:**
```

```

**Why it works:** The specific fields map to the owner's actual concerns — not generic contract terms. "Quote word-for-word" prevents paraphrasing drift. Asking for the clause reference makes the output auditable. "Not found" means Claude flags gaps rather than guessing.

---

### Example 2: Line items hidden in prose, pulled into a checkable table

**Scenario:** Table extraction · Messy building-supplies invoice

**Prompt:**
```

```

**Why it works:** Explicit columns define exactly what the output looks like. The no-calculation rule stops Claude filling gaps with plausible figures — which would undermine the point of checking the invoice. Asking Claude to flag apparent discrepancies serves the real task: catching billing errors before payment.

---

### Example 3: Briefing-ready output from an exec summary and conclusions

**Scenario:** Targeted summary · 55-page industry report

**Prompt:**
```

```

**Why it works:** The practice profile filters findings to the relevant ones. The four-part output is shaped around what the principal needs for the meeting, not what the report offers. "Stick to what the pasted sections say" keeps Claude within the source material. Asking for something that "surprises" Claude draws out a finding the principal might not have flagged.

---

### Example 4: Reconstructing what was agreed from six weeks of threads

**Scenario:** Timeline extraction · 25-email subcontractor dispute

**Prompt:**
```

```

**Why it works:** The five outputs map to exactly what a project manager needs before a dispute conversation: what was agreed, who said what, where things stand, and what was never answered. "Do not interpret intent or assign blame" keeps the output factual — essential if it might be used in a formal context. Exact quotes and dates make the output directly usable as a chronology.

---

### Example 5: One section at a time, primed for a multi-pass workflow

**Scenario:** Section-by-section · Government tender document

**Prompt:**
```

```

**Why it works:** The scope instruction — "this section only" — keeps Claude from trying to process a document it doesn't have in full. The final line primes Claude for the multi-pass workflow. Asking Claude to flag vague criteria is practical: those are the sections where a pre-submission clarification can change the quality of the response significantly.

---

### Example 6: Turning 30 messy support emails into a ranked feature-request list

**Scenario:** SaaS founder · Extracting feature themes from 30 customer emails

**Prompt:**
```
I'm Priya, founder of LedgerLoop — a 5-person SaaS in Melbourne building bookkeeping automation for AU bookkeepers. I've uploaded a single .txt file containing the last 30 support/feedback emails from customers (timestamps included, ~14,000 words total). I need a feature-request shortlist for our next planning session.
      
      Extract into the following named fields, one row per distinct feature request. If a field isn't present in an email, write "not stated" — do not infer.
      
      Fields:
      - request_summary (one sentence, plain English)
      - requesting_customer (name or company if mentioned, else "not stated")
      - email_date
      - pain_described (their words, quoted, max 20 words)
      - workaround_mentioned (yes/no + what)
      - urgency_signal (e.g. "blocking us", "would be nice", "not stated")
      
      Output as a markdown table. After the table, give me the top 5 most-requested themes (count how many emails mention each) and flag any request that appears 3+ times. I'll spot-check 3 rows against the source emails myself.
```

**Why it works:** This is the named-fields + format-spec + missing-data pattern from the lesson. "not stated" stops Claude inventing details when an email doesn't mention urgency. Asking for quoted pain language keeps the customer's voice intact. The closing "I'll spot-check 3 rows" is the accuracy habit the lesson hammers — never trust extraction blindly on something you'll act on.

---

### Example 7: Pulling the operational terms out of a 22-page health fund provider agreement

**Scenario:** Physio practice owner · Private health insurer agreement

**Prompt:**
```
I own MoveWell Physio in Wollongong — three physios, one admin. I've uploaded the renewal agreement from a major private health insurer (22 pages, PDF). I need the operational terms before our team meeting Thursday. No patient data is in this document — it's a provider/practice agreement.
      
      Extract into these named fields. If a field isn't in the document, write "not in document" — do not guess.
      
      Fields:
      - agreement_term_start
      - agreement_term_end
      - notice_period_to_terminate
      - rebate_schedule_reference (which appendix or schedule)
      - fee_increase_clause (yes/no + summary in 25 words)
      - audit_rights (does the insurer have audit rights over our practice? quote the relevant sentence)
      - patient_billing_restrictions (any rules about gap fees or co-payments)
      - complaint_handling_obligation
      - our_obligations_re_record_keeping (years of retention if stated)
      
      Output as a two-column markdown table (field | value). After the table, list the 3 clauses I should flag for our accountant or insurance broker before signing. I'll spot-check audit_rights and notice_period against the source.
```

**Why it works:** Named fields with "not in document" stops the fabrication problem common in legal extraction. Asking Claude to quote the audit-rights sentence (rather than paraphrase) gives the owner verifiable text. Staying on operational/admin terms — no clinical data — is the right scope for a small practice owner using a general-purpose AI tool, and the spot-check on the two highest-stakes fields matches the lesson's accuracy habit.

---

### Example 8: Turning a 20-page ASQA audit response into an action register

**Scenario:** Small RTO owner · Extracting deliverables from an ASQA audit response

**Prompt:**
```
I run Coastline Training, a small RTO in Newcastle delivering Cert III in Individual Support (8 trainers, ~120 enrolments/year). I've uploaded our consultant's draft response to a recent ASQA audit (20 pages). Before I sign it off I need to know exactly what WE have to do — not what the consultant is proposing in theory.
      
      Extract every concrete action assigned to our RTO into these named fields. If something isn't stated, write "not stated" — don't infer.
      
      Fields:
      - action_id (just number them 1, 2, 3...)
      - action_description (one sentence, plain English)
      - responsible_role_at_our_RTO (e.g. CEO, Compliance Manager, Trainer; "not stated" if none assigned)
      - due_date_or_timeframe
      - evidence_required (what document/artefact proves it's done)
      - linked_clause (which Standard/clause this maps to, if cited)
      - status_per_document (e.g. "completed", "in progress", "to commence")
      
      Output as a markdown table sorted by due date (soonest first, "not stated" at the bottom). Then give me a 5-bullet exec summary of which actions are still outstanding 4 weeks from today. I'll spot-check 3 rows against the document myself.
```

**Why it works:** Numbered action IDs plus "not stated" handles the messy reality that consultant documents often skip ownership and dates. Asking for the linked Standards clause forces Claude to pull a citation rather than summarise vaguely. Sorting by due date turns extraction into a usable register, and the spot-check instruction is the lesson's non-negotiable accuracy habit before this goes anywhere near a regulator.

---

## Graded deliverable

**Title:** Extract something real from a real document

**Brief:** Bring a real business document — a contract, a supplier proposal, a report, a long email thread, or an invoice. Write an extraction prompt using the patterns from this lesson: specific fields or columns, explicit output format, and at least one missing-data constraint. After Claude returns the extraction, spot-check three items manually against the original, and record what you found.

**What to submit:**

1. **Document description** — Type of document (contract, invoice, report, email thread, proposal), approximate length, and what it's about. One to three sentences — make the business context clear.

2. **Your extraction prompt** — The exact text of the prompt you sent to Claude, copied from Claude.ai. Should name specific fields or columns, specify output format (table, bullet list, quoted-field format), and include at least one missing-data constraint (e.g. "write not stated").

3. **Claude's extracted output** — Paste Claude's full response exactly as returned. Do not summarise or shorten. The grading engine needs the complete output to assess whether your prompt produced a usable extraction.

4. **Verification note (which items you spot-checked and what you found)** — Name the specific items you checked manually against the original document — three is the minimum — and state whether Claude's output matched. If you found a discrepancy, describe it.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the document real and the extraction task genuinely useful to your business — not a generic summary? A prompt that says "summarise this article" scores low. A prompt that extracts named fields from an actual contract, or pulls line items from a real invoice, scores high. The document description should make the business context clear.
- **Structure (25 pts)** — Does the prompt specify the exact fields, columns, or items to extract? A prompt that asks Claude to "get the important bits" scores low. A prompt that names each field, or each column in a table, scores high. The output format should be explicit — table, bullet list, quoted-field format — not left to Claude's discretion.
- **Constraint clarity (25 pts)** — Does the prompt tell Claude what to do when information is missing — for example, "write not stated" rather than estimating? Does it include at least one explicit constraint on what Claude should or should not do? Absent constraints leave gaps for Claude to fill with plausible-looking guesses.
- **Outcome focus (25 pts)** — Does the verification note show you actually checked Claude's output against the original? A note that says "it looked accurate" scores low. A note that names the specific items checked and states whether they matched — or where they didn't — scores high. Treat Claude's output as a draft to verify, not a final answer to accept.

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - Document is real and specific — the description names the document type, context, and purpose clearly
  - Prompt names exact fields or columns to extract — not vague categories
  - Prompt includes explicit output format (table with named columns, bullet list, quoted-field format)
  - Prompt includes at least one missing-data instruction (e.g. "write not stated," "write not found," "do not estimate")
  - Verification note names specific items checked and reports what was found — including any discrepancy, even a minor one
  - Student chose a task with real business stakes — a contract before signing, an invoice before payment, a tender before a submission deadline

- **Penalise (dock points):**
  - Document appears hypothetical, sample, or online — description lacks specificity or the task has no obvious business stakes
  - Prompt asks for a general summary rather than a targeted extraction — "summarise this contract" instead of extracting named fields
  - No output format specified — Claude is left to choose how to present the data
  - No missing-data constraint — Claude is implicitly allowed to estimate or fill gaps
  - Verification note is absent, vague, or clearly not a genuine check ("it looked fine," "seemed accurate," "I trust Claude")
  - Student pastes only a portion of Claude's output rather than the full response

- **Common 60–69 patterns:**
  - The document is real and the task is relevant, but the prompt asks for "the key commercial terms" without naming which terms — leaving Claude to decide what matters. In feedback: quote the prompt, explain that named fields produce auditable output, and give a two-line example of a field list they could have used for their document type.
  - The prompt specifies fields but omits a missing-data instruction. Claude fills in gaps with plausible text and the student accepts it. In feedback: explain why the no-estimation constraint exists, and suggest adding "if not stated, write 'not found'" to their prompt.
  - Verification note says "I checked it and it was correct" without naming what was checked. In feedback: explain that a useful verification note names three specific items, what was expected, and what Claude returned. Ask the student to do this and resubmit.

- **Common 80+ patterns:**
  - Prompt includes named fields or columns, explicit output format, missing-data instruction, and at least one scope constraint ("based only on what is written — do not infer")
  - Student chose a document with complexity — dense formatting, multiple parties, mixed text and tables — and the prompt anticipates that complexity
  - Verification note is specific: "I checked line items 3, 7, and 11 against the original invoice. Items 3 and 7 matched exactly. Item 11 had the unit price listed as $42.50 in Claude's output but it read $42.80 in the original — a transcription error. I corrected it."
  - Student noted the transcription error and described how they would adjust the prompt or process to catch similar issues in future

- **Feedback tone:** Direct, specific, kind. Quote the student's prompt or verification note when pointing out wins or gaps. If the prompt lacks named fields, show exactly where a field list would go and give two example fields from their document type. If the verification note is vague, explain what a specific verification note looks like and ask for one. End with one concrete next step — either the single prompt addition most likely to improve accuracy on their document type, or a suggestion for another document in their business this workflow could replace a manual process.

- **Resubmission gating:** Compare the revised submission against the original. If they added named fields where there were none, acknowledge that explicitly. If they added a missing-data constraint, name it. If the verification note went from vague to specific, say so. If the revision changes the wording without changing the structure — still no field list, still no format instruction — say so clearly and name the one remaining gap. Do not pass a resubmission that has the same structural gaps as the original.
