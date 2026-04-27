# Lesson 5.1 — Vision capabilities: analyzing images and documents

**Module:** 05 · Extended Capabilities
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Modules 1, 2, 3, and 4 complete

---

## Learning objectives

By the end of this lesson you'll be able to:
- Describe what types of images and documents Claude can process, and where the limits are
- Identify at least three practical small-business tasks that benefit from Claude's vision capability
- Send an image to Claude using the chat interface, a Project, or file upload
- Write a two-part vision prompt that describes the image before stating the task
- Evaluate Claude's visual output honestly — noting what it got right, what it missed, and why

---

## Lesson script

### What Claude can see

Claude is not just a text model. You can hand it an image — a photo, a screenshot, a scanned document, a PDF — and it will read, interpret, and respond to what it sees.

Here is what that covers in practice:

**Photos.** A photo of a product, a workspace, a competitor's shopfront, or anything you've taken on your phone. Claude can describe what's in the frame, identify text, assess layout, and respond to questions about what it sees.

**Screenshots.** A screenshot of a social media post, a website, a report, a spreadsheet, or a dashboard. Claude can extract text, comment on design, summarise the data it sees, or compare what you've screenshotted to something you describe.

**Scanned documents.** A scanned invoice, a handwritten note, a form, a lease page, a signed agreement. Claude can read the text, pull out key figures, and summarise what the document says — as long as the scan is clear enough to read.

**PDFs.** Many chat interfaces let you upload a PDF directly. Claude reads it as a document and can answer questions about it, extract key information, or summarise sections.

**Handwritten notes.** Claude can read reasonably clear handwriting. Not always perfectly — more on that shortly — but well enough to be useful for notes, sketches, or annotated documents.

The key thing to understand: Claude is not running specialist OCR software. It is reading the image the way you would read it — visually, contextually. That has real strengths. It also has real limits.

### What vision is good for in a small business

These are the use cases that come up regularly for AU/NZ small businesses.

**Reading receipts and invoices.** You've got a stack of scanned receipts from a supplier trip. Instead of typing out each one, you upload the image and ask Claude to extract the vendor, date, and total. It does this quickly and accurately for clear scans.

**Analysing a competitor's ad or post.** You screenshotted a competitor's Facebook ad or Instagram post. You want to understand their offer, their hook, their call to action. You upload the screenshot and ask Claude to break it down. This is faster and more structured than trying to describe it in text.

**Reviewing a scanned document.** A client sends a scanned agreement or form. You upload it and ask Claude to summarise the key terms, flag anything unusual, or pull out specific figures. You still need to review the original — Claude is giving you a first pass, not a legal opinion — but that first pass saves time.

**Checking a design layout.** You've got a draft flyer, a banner, or a social graphic saved as an image. You ask Claude to comment on the layout, check whether the key message is clear, or flag anything that looks off. Claude won't replace a designer, but it will catch obvious problems before you send something to print.

**Extracting text from an image.** You have a photo of a whiteboard from a planning session. You want the text without transcribing it yourself. Claude reads the whiteboard and returns the text in a structured format.

**Summarising a report chart or dashboard screenshot.** You have a screenshot of a Google Analytics dashboard, a financial report chart, or a survey result. You ask Claude what the data shows and it gives you a plain-language summary. Useful when you want the insight without reading the numbers yourself.

These are not edge cases. These are the kinds of tasks that come up weekly in most small businesses.

### What vision is NOT good for

Claude's vision is useful but it is not infallible. You need to know where it struggles.

**Blurry or low-resolution images.** If you can barely read the text in the image yourself, Claude will struggle too. A photo taken in bad light, a screenshot at too low a resolution, or a compressed image file will produce guesses rather than accurate readings. Rubbish in, rubbish out.

**Complex diagrams with fine detail.** An engineering drawing, a detailed floor plan, a dense infographic with small labels — Claude can describe the overall structure but it will miss fine detail and sometimes make errors on exact figures, dimensions, or labels.

**Tasks requiring perfect OCR accuracy.** If you need every word exactly right — for a legal document, a contract, a financial record — do not rely solely on Claude. It can miss words, misread numbers, or skip lines. Use it as a first pass, then verify the original. Never use Claude's text extraction as your official record.

**Identifying specific people.** Claude will not identify named individuals from photos of faces. This is a deliberate design decision. If you need face recognition, that is a different tool.

**Reading very small text.** Footnotes, fine print, small captions at the edge of an image — Claude often misses these or reads them incorrectly.

The honest framing: Claude's vision is a capable general assistant, not a precision instrument. For most small-business tasks, that is enough. For tasks where errors have real consequences, you verify.

### How to send an image to Claude

There are three common ways to do this, depending on where you are working.

**In the chat interface.** In Claude.ai, there is a paperclip icon or an attachment button in the message box. Click it, select your image file (JPG, PNG, PDF, and other formats are supported), and it uploads. Then type your prompt in the same message. Claude processes the image as part of your message.

**In a Project.** If you are working in a Claude Project that already has documents or context files attached, you can upload an image the same way — via the attachment button in the conversation. The image is treated as part of that conversation's context. This is useful if you are doing repeated visual work on related images — a series of invoices, a set of product photos, a collection of competitor ads.

**Via file upload on mobile.** The Claude mobile app supports image uploads from your camera roll or files. Tap the attachment icon, choose the image or document, and send. Useful when you are working from your phone and have just taken a photo of something you want to analyse.

One practical note: if you are working on a document-heavy task — like analysing multiple invoices or comparing several design drafts — consider uploading one at a time and giving Claude a separate prompt for each. Asking it to process many images at once and compare them is harder to do well.

### Prompting with images: the two-part structure

This is the most important part of the lesson.

Most people send an image and type something like: "What do you see?" or "What do you think of this?" These prompts produce vague, general responses. Claude describes what it sees. That is rarely what you actually need.

An effective vision prompt has two parts:

**Part one: describe what you are sending.**
Tell Claude what the image is, where it came from, and any context that helps it read the image correctly. This is not because Claude cannot see the image — it can. It is because context changes interpretation. A screenshot of a social post from a competitor means something different than a screenshot of your own post that underperformed. Telling Claude which it is shapes how it responds.

**Part two: state exactly what you need Claude to do.**
Do not ask "what do you see?" Ask a specific question or give a specific task. What should Claude extract? What should it analyse? What output format do you want?

Here is the difference in practice:

**Weak prompt:**
```
[Image uploaded]
What do you think of this?
```

**Effective prompt:**
```
I've uploaded a screenshot of a Facebook ad from a local competitor — they're a café two blocks from ours that targets the same weekday lunch crowd.

Analyse this ad and tell me:
1. What their core offer is (what are they promoting?)
2. What hook or angle they're using to get attention
3. Who the ad seems to be aimed at based on the copy and visuals
4. One thing they're doing well and one thing I could do differently in my own ads

Keep the response to dot points — I want to share it with my business partner.
```

The second prompt gives Claude the context it needs to give you something useful. It tells Claude what the image is, where it came from, why it matters, what four specific things you want out of it, and what format you want the response in.

That structure — describe what you're sending, then state what you need — applies to every vision task. A receipt: "This is a supplier receipt from our last wholesale order. Extract the vendor name, date, line items, and GST total." A scanned letter: "This is a letter from our landlord about the lease renewal. Summarise the key dates and any requests they are making." A design file: "This is a draft of our new service menu for the café. Tell me if the hierarchy is clear — can someone find the lunch specials quickly, or does the layout make it hard?"

### Common mistake → better approach

**Mistake:** Uploading a screenshot of a report dashboard and typing "Can you summarise this data?"

Claude returns a general description: "The dashboard shows several metrics including monthly traffic, conversion rate, and revenue. It appears to be from a marketing platform." Technically accurate but completely useless.

**Better approach:**

```
I've uploaded a screenshot of our Google Analytics dashboard for March. This is for our e-commerce store selling homewares. We sell nationally but most traffic comes from VIC and NSW.

I need you to:
1. Pull out the three or four headline numbers visible in the screenshot (sessions, conversion rate, revenue, or whatever is shown)
2. Identify any metric that looks significantly different from what you'd expect — unusually high or low
3. Write a two-sentence plain-English summary I can paste into our monthly business review

Note: if any numbers are unclear or you're unsure whether you've read them correctly, flag that explicitly.
```

The improved prompt does four things well: it gives business context (e-commerce, homewares, national), asks for specific outputs rather than a general summary, sets the format (two sentences), and — critically — asks Claude to flag uncertainty rather than guess silently. That last instruction is important. Claude will sometimes read a number wrong in an image. Asking it to flag uncertainty makes errors visible rather than invisible.

### Putting it together

Vision capability sits alongside all the prompt skills you have built in Modules 2 and 3. The same principles apply: give context first, be specific about what you need, constrain the output format. The only addition is that you now start with an image rather than a text description.

The habit to build: before you type a single word after uploading an image, ask yourself two questions. First, does Claude know what this image is and where it came from? Second, does Claude know exactly what I want it to do with it? If the answer to either is no, add that to your prompt before you send.

Start with that habit and you will get consistently useful responses from vision tasks.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 0,
    "SaaS / Software": 5,
    "Professional Services": 4,
    "Trades & Construction": 2,
    "Property & Real Estate": 1,
    "Finance & Accounting": 4,
    "E-commerce & Retail": 1,
    "Health & Wellness": 3,
    "Education & Coaching": 6,
    "Trades & Services": 2,
    "Other": 0
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: From "what do you think?" to a five-point breakdown

**Scenario:** Competitor social post · Café owner analysing an Instagram promotion

**Prompt:**
```

```

**Why it works:** The prompt tells Claude the platform, the day, and the likely content before asking anything. The five-part structure ensures Claude covers every angle the café owner actually cares about. The format instruction (dot points, one to two sentences) means the response is ready to share without further editing.

---

### Example 2: Table output with explicit uncertainty flags

**Scenario:** Supplier invoice extraction · Retailer pulling figures from a scan

**Prompt:**
```

```

**Why it works:** The prompt sets expectations about scan quality, asks for specific fields in a defined format, and includes the critical instruction to flag uncertain readings. That last point prevents Claude from silently guessing at a number that might be wrong — a real risk with financial documents.

---

### Example 3: Two handwriting styles, transcribe then group

**Scenario:** Whiteboard photo transcription · Planning session notes

**Prompt:**
```

```

**Why it works:** The prompt acknowledges likely challenges upfront (two handwriting styles, arrows implying relationships). It asks for transcription and organisation as separate tasks, and sets a realistic expectation — "best interpretation" for unclear words — rather than expecting perfect accuracy.

---

### Example 4: A practical reader's view, not a technical description

**Scenario:** Design layout review · Salon owner critiquing a draft flyer

**Prompt:**
```

```

**Why it works:** "As someone who would pick it up in a shop" gives Claude a useful evaluative frame — it shifts the response from a technical description to a practical readability assessment. The explicit instruction to "be direct" prevents hedging, which is particularly useful on design feedback where Claude might otherwise soften every comment.

---

### Example 5: Structured summary of five points, scoped below a legal review

**Scenario:** Scanned engagement letter · Bookkeeper extracting key terms

**Prompt:**
```

```

**Why it works:** The framing "this is not a legal review" sets appropriate scope and protects both the bookkeeper and the student from over-relying on Claude's output for a sensitive task. Extracting five specific things produces a usable summary, not a general paraphrase. The instruction to note cut-off sections accounts for common scan problems.

---

### Example 6: Reverse-engineering a competitor's pricing page from a single screenshot

**Scenario:** SaaS founder · Competitor pricing page screenshot

**Prompt:**
```
I've attached a screenshot of a competitor's pricing page. We're Tallyhook, a Brisbane-based 4-person SaaS doing rostering software for hospitality (~$59/mo per venue). The competitor in this screenshot is twice our price and we keep losing deals to them.
      
      Two parts.
      
      PART 1 — Describe what you see. Walk me through every plan tier visible: plan name, monthly price (AUD if shown), the headline promise, and every feature listed under each tier. Note any badges like "Most Popular" or "New". If anything is cut off or unclear, say so — don't guess.
      
      PART 2 — Then do this: build me a side-by-side comparison table (their tiers as columns, features as rows) and highlight 3 features they offer that we don't. For each of those 3, give me a one-sentence "would this matter to a 6-venue pub group?" judgement. End with the single biggest reason a buyer would pick them over a cheaper option.
```

**Why it works:** This is the two-part vision prompt in action — Part 1 asks Claude to describe what it sees (the safety check that catches misreads), Part 2 then gives the actual task. Without Part 1, you'd never know if Claude misread "$149" as "$1.49". The named business, team size and price point also give Claude the context to judge what "matters" to this specific buyer.

---

### Example 7: Spotting recurring error patterns from a phone photo of a marked test

**Scenario:** Tutoring centre owner · Photo of student's marked maths paper

**Prompt:**
```
I run BrightPath Tutoring in Hamilton (NZ) — five tutors, mostly Year 9–11 maths and NCEA Level 1. A parent has shared a photo of their daughter's most recent school maths test (marked by her teacher, 22/40). I want to use this to plan her first three sessions with us.
      
      Two parts.
      
      PART 1 — Describe what you see. Read every question visible in the photo. For each one note: the topic (e.g. linear equations, fractions, surds), the student's answer, whether it was marked correct or incorrect, and any teacher comments in the margin. If handwriting is unclear say "unclear" — don't fill in blanks.
      
      PART 2 — Then do this: group the incorrect questions by error type (conceptual gap vs careless arithmetic vs misread question). Tell me the ONE topic where she's losing the most marks and suggest a 3-session plan to address it — session goal, one warm-up exercise idea, one stretch question. Keep it practical for a 50-minute session.
```

**Why it works:** The two-part structure separates "what's literally on the page" from "what should I do with it" — critical when handwriting is involved and Claude could easily hallucinate a working step. The "say unclear, don't fill in blanks" instruction is the safeguard the lesson teaches: tell vision models explicitly what to do when they're uncertain.

---

## Graded deliverable

**Title:** Vision in practice — analyse a real business image

**Brief:** Use Claude's vision on an image from your actual business or industry. Real only — a competitor's ad, an invoice, a product photo, a dashboard screenshot, a scanned document, a design draft, a photo from a site. Not a test image. Write a two-part vision prompt (describe the image, then state exactly what you need), submit the prompt with Claude's response, and write an 80-word accuracy note on what Claude got right, what it missed, and one thing you would do differently.

**What to submit:**

1. **Image description (2–4 sentences)** — What is the image, where did it come from, and why did you choose it for this exercise? Make it obvious this is a real image from your working life — not a test image or a stock photo.

2. **The prompt you sent with the image** — Paste the full two-part prompt exactly as you typed it. Part one describes the image and context; part two states exactly what you need Claude to do.

3. **Claude's full response** — Paste Claude's full response exactly as it came back. No edits, no trimming, no summarising. The grading engine compares your accuracy note to this response.

4. **Accuracy note (80 words — no more, no less is a meaningful constraint)** — What did Claude get right? What did it miss or get wrong? Be specific — name a figure, a word, a section. End with one thing you would do differently in the prompt next time.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the image real and genuinely business-relevant? A screenshot of a competitor's actual ad, a real invoice, a product photo from your own catalogue — these score well. A test image, a stock photo, or something with no clear business connection scores poorly. The description in item 1 should make it obvious this is a real image from the student's actual working life.
- **Structure (25 pts)** — Does the prompt follow the two-part structure: describe the image first, then state the task? The description should tell Claude what the image is and where it came from before any question is asked. Prompts that open immediately with "what do you see?" or "analyse this" without any context score in the lower range regardless of how good the rest of the prompt is.
- **Constraint clarity (25 pts)** — Does the prompt specify what Claude should extract, analyse, or produce — not just "what do you see?" or "what do you think?" The best prompts name specific outputs (a list of line items, a three-point summary, a dot-point critique) and, where relevant, the output format. Bonus if the prompt asks Claude to flag uncertainty — the mark of a student who has understood how vision errors work.
- **Outcome focus (25 pts)** — Does the 80-word accuracy note identify specific things Claude got right or wrong, not a general impression? "It was pretty accurate" scores zero. "Claude read the invoice total correctly but misread the GST as $43 when the actual figure is $34 — I noticed because the numbers look similar in the scan" scores full marks. The note should show the student actually compared Claude's output to the original image.

---

## Notes for the AI grading engine

*(Not shown to student)*

- **Reward (high marks):**
  - Image is clearly real and business-relevant — the description in item 1 gives specific, concrete context (type of business, where image came from, why it matters)
  - Prompt opens with a clear image description before any question or task — Claude knows what it is looking at before being asked anything
  - Prompt names specific outputs — not "what do you see" but a numbered list of things to extract or assess, with an output format specified
  - Prompt includes an instruction to flag uncertain readings or unclear sections — this is a strong signal the student understands vision limitations
  - Accuracy note names specific errors or successes with actual detail — quotes a figure Claude got wrong, names a section it missed, identifies a specific element it described correctly
  - The 80-word note includes a concrete revision to the prompt — "next time I would tell Claude the scan was low-res on the right side so it knew to flag anything in that area"

- **Penalise (dock points):**
  - Image described as "a test," "a sample," or "a stock photo" — or description suggests it is not from the student's actual business context
  - Prompt opens with "what do you see?" or "analyse this image" with no image description before the question
  - Prompt asks only a single open-ended question with no specified outputs, format, or constraints
  - Accuracy note says only "Claude was quite accurate" or "it did a good job" with no specifics — this indicates the student did not compare the output to the original
  - Claude's response was clearly poor (vague, entirely wrong) but the accuracy note rates it positively — suggests the student didn't verify against the original
  - Prompt uses only the image with no text at all — Claude is being asked to guess what the student needs

- **Common 60–69 patterns:** Student submits a real image and a real prompt but the prompt skips the image description and goes straight to the task. Claude's response is therefore slightly generic. The accuracy note says something like "it got most of it right but missed a few things" without specifying which things. In feedback: quote their prompt, point to the missing image description, and show them with one sentence how it would read with the context added. Ask them to name one specific thing in the accuracy note — if they can tell you what Claude missed, they can resubmit with that detail.

- **Common 80+ patterns:** Prompt reads as a proper two-part structure: paragraph one describes the image with real context, paragraph two gives a numbered list of specific outputs with format instructions. Claude's response is correspondingly specific. The accuracy note quotes at least one specific success and one specific error — names a number, a word, a section — and the revision suggestion shows the student has thought about what additional context would have helped Claude do better.

- **Feedback tone:** Direct, specific, kind. Quote the student's words — from their prompt when naming what to improve, from their accuracy note when acknowledging what they did well. Never use generic praise ("great work"). End with one concrete next step: usually either "add an image description before your question" or "name one specific thing Claude missed in your accuracy note" — whichever gap is larger.

- **Resubmission gating:** If a student resubmits, look for structural improvement in the prompt first (does it now describe the image before asking a question?) and substantive improvement in the accuracy note (does it now name at least one specific success and one specific error?). Reward visible improvement even if the overall score is still moderate — the habit of describing the image first is the core skill of this lesson.
