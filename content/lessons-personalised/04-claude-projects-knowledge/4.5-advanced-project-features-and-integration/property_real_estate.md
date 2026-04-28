# Lesson 4.5 — Advanced project features and integration

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites
- Module 1 complete — Claude Essentials
- Module 2 complete — Prompt Engineering Fundamentals
- Module 3 complete — Practical Daily Applications
- Lesson 4.1 — What Claude Projects are and when to use them
- Lesson 4.2 — Setting up your first Project
- Lesson 4.3 — Adding knowledge to a Project
- Lesson 4.4 — Writing system prompts for Projects

---

## Learning objectives
By the end of this lesson you'll be able to:
- Share a Project with team members and explain when shared Projects are worth maintaining
- Choose the right Project before starting a task, when you have more than one
- Decide when to start a new conversation inside a Project versus continue an existing one
- Work within Project limits without losing context or momentum
- Move Claude's output into other tools without code or technical setup

---

## Lesson script

### When one Project is no longer enough

You set up your first Project. You added the agency context, a system prompt, and a few key documents — the listing presentation summary, your tone guide, the marketing inclusions. You ran a task and the output was noticeably better than what you were getting before — because Claude already knew the agency when the conversation started.

That's the foundation. This lesson covers what happens next: when your Project library grows past one, when other people in the agency start needing access, when conversations accumulate and you have to manage them, and when you want Claude's output to end up somewhere useful — your CRM, your draft folder, an actual sent email — rather than just sitting in a chat window.

None of this requires technical skills. It does require a few clear decisions. This lesson gives you the framework for those decisions.

### Sharing Projects with team members

Claude Projects on a Team or Pro plan can be shared with other users in your account. Shared Projects mean one system prompt, one set of uploaded documents, and one consistent Claude behaviour — for every person in the Project.

That is the core value of a shared Project. Not convenience. Not fewer logins. It's the fact that when your BDM opens the Property Management Project, they're working with the same context as when {{firstName}} opens it. Claude knows your fee structure, your standard lease conditions, your supplier list for repairs, the way the agency phrases things to landlords. You don't have to brief Claude separately for each person. The Project does the briefing for everyone who has access.

When does sharing make sense? When two or more people in the agency regularly do the same type of Claude task. A shared Vendor Communications Project makes sense if you have two or three sales reps handling vendor updates and you want them all sounding like {{businessName}}. A shared Onboarding Project makes sense if you have multiple people inducting new agents or new property managers. A shared Listing Copy Project makes sense if more than one person writes property descriptions for REA and Domain.

When does sharing not make sense? When a Project contains information only one person should see — trust account details, HR matters, contracts with a confidentiality clause. Keep those as personal Projects. One person, one set of private documents, no shared access.

Permissions on shared Projects are set by the Project owner. In most Claude plans, you can add or remove team members, and all members can start conversations and read Project knowledge. Only the owner can change the system prompt or remove documents. Check your plan's specific permissions before sharing — they vary.

The practical benefit of a shared Project is what you might call single source of truth. When you update the system prompt — because your fees changed, your auction inclusions updated, or your brand tone shifted after a refresh — it updates for everyone in the Project immediately. No need to send an updated brief to each person. No risk that one sales rep is running on old instructions while another has the new ones. One edit, consistent behaviour across the team.

### Using multiple Projects together

By the time you finish Module 4 you might have two, three, or four Projects. A Vendor Communications Project. A Property Management Project. An Internal Operations Project. Maybe one for a specific seasonal campaign — the spring auction series, end-of-financial-year landlord outreach.

The critical skill is not how to set Projects up. It's how to decide which Project to open before you start a task.

The decision is faster than it sounds. Ask yourself one question: what standing knowledge does Claude need for this task to be useful?

If you're drafting an update to a vendor mid-campaign, you need Claude to know your communication tone, your service inclusions, and ideally the specific listing context. That points to a Vendor Communications Project, or that listing's specific Project.

If you're drafting a lease renewal offer for a landlord, you need Claude to know your management fee, your standard lease clauses, and the current rental market positioning the agency uses. That points to a Property Management Project.

If you're drafting an internal note to the team about open home roster changes, you need Claude to know the team structure, the internal voice, and the procedures already documented. That points to an Internal Operations Project.

The question is not "which Project has the most information?" It's "which Project has the right information for this specific task?" A Project with too much irrelevant information can create noise. A Project focused on the task at hand lets Claude apply its context cleanly.

If a task genuinely doesn't fit any of your Projects — it's a one-off, it doesn't need standing knowledge, it's something you'll never repeat — run it in a standard Claude conversation, not in a Project. Projects are for recurring task types. One-off tasks don't benefit from a Project's context overhead.

```
Before opening Claude for any task, I choose my Project with this habit:
Task type → Vendor update or listing copy → open Vendor Communications Project
Task type → Lease, owner report, tenant matter → open Property Management Project
Task type → Internal team or roster → open Internal Operations Project
Task type → One-off → open standard Claude conversation
```

That decision tree costs ten seconds. It saves the confusion of dropping a vendor message into the PM Project and getting output that sounds like it's for the wrong audience.

### Managing conversation history inside a Project

Every conversation you start inside a Project adds to the conversation list in that Project. Over time, that list grows. This is normal. The question is when to start a new conversation versus when to continue an existing one.

The rule is simpler than you might expect.

Start a new conversation when the task is new — when you're working on something different, even if it's in the same general area. Working on a new vendor's update starts a new conversation. Working on a different lease renewal starts a new conversation. Starting a new week's batch of buyer-side prospecting letters starts a new conversation.

Continue an existing conversation when you're working on the same specific thing — when your next prompt directly references output from the previous one. Revising a listing description you just generated, continuing a CMA partway through, or following up on a specific question Claude answered — these are all reasons to continue.

The reason this matters is context. Within a single conversation, Claude remembers everything said — the documents you mentioned, the buyer feedback you described, the revisions you asked for. Across conversations, it doesn't. The Project's system prompt and uploaded documents carry across all conversations. Specific conversational context doesn't.

This means if you started a conversation last week to draft a vendor proposal for a new listing and left it at 60% complete, opening a new conversation and saying "continue the proposal" won't work — Claude won't have access to what was generated in the old conversation. You'd need to open the old conversation and continue from there.

A practical naming habit helps here. Give each conversation a clear title as soon as you start it. Most Claude interfaces let you rename conversations. "14 Banksia Drive — week 2 vendor update" is easier to find and continue than "New conversation 14." Ten seconds of naming saves five minutes of scrolling.

When should you archive or delete old conversations? When the task is fully done. When the listing has settled, when the lease has been renewed, when the owner report has been sent — you don't need the conversation anymore. An accumulation of finished conversations adds scroll time without adding value. Clear out the done ones regularly — once a month is usually enough.

### Common mistake → Better approach

**Mistake:** Using one Project for every type of task, because it's simpler than managing several.

A principal creates one Project called "Agency" and uploads every document {{businessName}} has — brand guide, listing presentation, fee schedule, lease clauses, owner report templates, prospecting letters. The system prompt tries to cover everything: tone, sales, property management, format preferences for every output type. The Project becomes a general-purpose context that is partially useful for every task but precisely right for none. Claude is working from a system prompt that covers too much ground, and the document library is too broad to be applied cleanly to any single task.

**Better approach:** One Project per recurring task type. A Vendor Communications Project with just the documents relevant to sales-side work. A Property Management Project with the lease pack, owner report templates, and management fee structure. An Internal Project with team-facing documents. Each system prompt is short and focused. When you open a Project, the context is immediately relevant to the task at hand. You might have three or four Projects rather than one, but each one works better than a single overloaded Project ever could.

### Project limits and how to manage them

Claude Projects have practical limits. Document count and total file size are capped — the specific numbers depend on your plan. Conversations accumulate over time. And within a single conversation, context has a length limit: if a conversation runs long enough, the earliest messages fall out of Claude's active memory.

Here's how to manage each one.

**Document limits.** When you're approaching the document cap, resist the urge to merge files into one giant document. That creates its own problems — a single enormous file is harder for Claude to apply selectively. Instead, audit what's already in the Project. Remove documents that are outdated or that you never actually reference in tasks. Keep the library lean and current rather than comprehensive and stale. You almost always need fewer documents than you think, not more.

**Long conversations.** When a conversation runs across many prompts and rounds of revision — for example, you've been refining a complex commercial-residential mixed development listing all afternoon — the earliest context starts to fade. If you notice Claude forgetting something it knew earlier in the conversation — an instruction you gave, a detail about the vendor, a decision you made — that's the signal. At that point, the most effective fix is to start a new conversation and open it with a brief summary of where you are:

```
I'm continuing work on the 22 Northside Avenue management agreement.
We've agreed on: 12-month management term, 7.7% management fee inc GST,
30-day termination clause. Still to complete: the routine inspection
schedule and the maintenance approval threshold.
Please draft the routine inspection schedule next, using our standard
PM service descriptions from the Project knowledge.
```

That summary re-establishes the key decisions without requiring Claude to remember the whole previous conversation. You keep the momentum. You don't start from scratch.

**Context management as a habit.** Treat each conversation like a work session. When you close a task, paste the final output somewhere permanent — your CRM, your listing folder, your email drafts, the agency agreement file. Don't rely on Claude's conversation history as your storage system. The conversation is a working space, not a filing cabinet.

### Integrating Projects with external tools — no code required

Claude doesn't connect directly to your CRM (VaultRE, Box+Dice, Rex), your trust accounting software, or your inbox without additional technical setup. But that doesn't mean Claude stays isolated. The most practical integration approach for an agency is structured copy-paste — and it works well.

The pattern is this: bring information from your external tool into Claude, get Claude's output, then take that output back into your external tool. No code. No plugins. No IT involvement.

Here are the most common versions of this workflow.

**From email to Claude and back.** Copy the text of a vendor or landlord email, paste it into your Project conversation with a clear instruction ("Draft a reply to this email in our standard vendor tone, addressing each of the three questions about the marketing schedule"), read Claude's draft, copy it, paste it into your email reply. The Project handles the standing context — your tone, your services, your inclusions. Your prompt handles the specific task. Your email client handles the send.

**From a document to Claude and back.** Copy the relevant section of a contract for sale, an agency agreement, or a managed-property condition report into Claude with a specific task ("Summarise the key obligations from this agency agreement section in plain English — what does the vendor have to agree to, and by when"). Take the summary, paste it into your CRM as a vendor note. Claude processed the document. Your CRM stores the output. You did no technical integration.

**From your CRM to Claude and back.** Copy a vendor record or a set of listing-presentation notes from your CRM, paste into Claude ("Based on these listing-presentation notes, draft a follow-up email and a list of three next actions for the team"). Take Claude's follow-up email and paste it into your email. Take the three next actions and paste them into your CRM as tasks. The Project's vendor communications context does the heavy lifting. Your copy-paste moves the information between systems.

This approach has limits. It's manual. It doesn't scale to hundreds of tasks per day. But for an agency running twenty to fifty Claude tasks per week across the team, structured copy-paste is efficient, reliable, and requires no technical setup. It's also easier to review and correct than automated integrations that run without human oversight — particularly important when the output is going to a vendor or a landlord.

When does automation make sense? When you're running the same workflow multiple times every day, the inputs are always in the same format, and the output goes to the same place every time. At that point, it's worth talking to someone about a lightweight integration — tools like Zapier or Make can connect Claude to your CRM or email without code. But that's a future step, not a Module 4 step.

For now, structured copy-paste is the right tool. It puts a human in the loop, which is appropriate for vendor- and landlord-facing output. It requires no setup. And it works well with Projects precisely because the Project carries the standing context — you're not re-briefing Claude every time you paste something in. The Project already knows the agency. You're just bringing it the raw material for the current task.

---

## Worked examples
All five examples below are shown — each demonstrates a distinct concept or technique from the lesson, not an industry variant.

### Example 1: One Project, two task types, two people

**Scenario:** Sharing a Project · Café owner adds a floor manager

**Prompt:**
```

```

**Why it works:** Rather than creating a second Project, the owner expanded the existing one to cover a second task type for a second person. The prompt gives Claude a clear way to distinguish the two use cases, so the system prompt can address both without the guidance for one contaminating the guidance for the other. The standing context is shared, not duplicated.

---

### Example 2: Which standing context matters more?

**Scenario:** Choosing a Project · Bookkeeper with an edge-case task

**Prompt:**
```

```

**Why it works:** The student uses Claude to reason through the Project selection — not to pick randomly, and not to open both. The framing ("which one matters more for a letter like this?") asks Claude to apply its knowledge of the two Projects' content to the specific task. The answer will almost always be Client Comms, because tone and relationship management dominate a collections letter — but thinking through it explicitly is a habit worth building.

---

### Example 3: A different tenant means a new conversation

**Scenario:** New vs. continue · Property manager drafting a lease renewal

**Prompt:**
```

```

**Why it works:** The previous conversation covered a different property and a different tenant. Continuing it would mix unrelated lease content in a way that could bleed into Claude's responses. Starting a new conversation keeps the work clean and the conversation history searchable by property. The Project context (standard lease language, property management tone) carries across without needing to be re-stated.

---

### Example 4: A summary opener re-establishes context

**Scenario:** Recovering a long conversation · Consultant's proposal

**Prompt:**
```

```

**Why it works:** The summary gives Claude the essential state of the project — what's decided, what the client's concern is, what's done, what remains — without requiring it to access the old conversation. The reference to "standard language from our Proposals Project" tells Claude to draw on the standing Project knowledge rather than inventing methodology language from scratch.

---

### Example 5: One prompt, two distinct destinations

**Scenario:** Copy-paste integration · Financial adviser, CRM to email

**Prompt:**
```

```

**Why it works:** The prompt describes the copy-paste workflow explicitly — not to teach Claude the workflow, but to clarify that two distinct outputs are needed for two distinct destinations. The CRM notes arrive as plain text. The output leaves as a drafted email and a task list. The Project provides the standing context (client tone, practice services, communication standards) so the prompt only has to carry the meeting-specific facts.

---

## Graded deliverable

**Title:** Apply two advanced Project moves to your own setup

**Brief:** The lesson covered five advanced moves: sharing Projects with teammates, routing tasks across multiple Projects, managing conversation history, working within Project limits, and structured copy-paste integration without code. Pick **two** of these five and apply each to your own Project setup. Submit the situation, the artefact (the share message you wrote, the routing decision, the new-conversation strategy, your context-shrinking approach, or the copy-paste workflow), and a short reflection.

**What to submit:**

1. **The two moves you picked + the situations** — Name which two of the five advanced moves you applied (sharing / multi-Project routing / conversation history / Project limits / copy-paste integration). For each: 2–3 sentences on the specific situation in your work that prompted it. Be concrete — named teammate, named Projects, named tool you copied output into.

2. **The artefacts — one per move** — For each of your two moves, paste the evidence. Examples: the share-invite message and access notes you wrote (sharing); the routing matrix or decision rule across your Projects (multi-Project); the prompt you used to cleanly start a new conversation OR the rationale for continuing one (conversation history); the steps you took to shrink context within Project limits, with before/after notes (limits); the prompt that produced ready-to-paste output and where it landed in another tool (integration). Real artefacts, not descriptions of artefacts.

3. **Reflection (80–120 words)** — What was the trickiest part of moving from "one Project doing everything" to treating Projects as a system? Of the three moves you *didn't* pick, which one still feels unclear to you and why? Be specific — not "I need more practice" but the actual point of confusion.

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the task genuinely real — something you actually need done, not a demo? Does it clearly require the Project's standing knowledge — would Claude's output be meaningfully different without the Project?
- **Structure (25 pts)** — Are the two prompts genuinely sequential? Does turn two continue the same piece of work — not start something new? Are all the required pieces present (Project description, task description, both prompts, both responses, reflection)?
- **Constraint clarity (25 pts)** — Does the second prompt reference specific output from the first — a phrase Claude used, a list Claude generated, a decision from turn one? A second prompt that could have been sent without reading the first response signals one-shot use, not conversational use.
- **Outcome focus (25 pts)** — Does the reflection identify a specific moment where the Project context added value — a named piece of knowledge that changed the output? Not "it knew my business" but "it used our net-30 supplier language without being told."

---

## Notes for the AI grading engine

(Not shown to student)

- **Reward (high marks):**
  - The task is clearly real: a named client, a named document, a named situation — not "I asked Claude to write an email for my business"
  - The Project description shows the student has extended or set up something new, not just described their existing Project unchanged
  - The second prompt references specific output from the first — a sentence Claude wrote, a list item, a decision or phrasing from the first turn — proving the student read the first response before continuing
  - The reflection names a specific piece of Project knowledge (a term from the system prompt, a fact from an uploaded document, a communication standard) and traces how it appeared in the output — not generic claims like "it understood my business"
  - Excellent reflections often include a contrast: "A standard Claude conversation would have needed me to explain X — the Project already knew it, so the first response was immediately usable without that setup"
  - The two turns form a logical unit: turn one produces something, turn two does something further with it — a draft and then a revision, a list and then a prioritisation, a summary and then a follow-up action

- **Penalise (dock points):**
  - The task is a demo or test — "I asked Claude to introduce itself using my Project context" or "I tested whether Claude knew my rates"
  - The second prompt could have been sent without reading the first — it's a new task in the same Project, not a continuation of the first
  - Claude's responses are summarised or cut — the student must paste in full
  - The reflection is generic: "it helped a lot," "Claude understood my business," "I could see the context working" — no named specific
  - The Project description says "same as before" or is absent — no evidence the student extended their Project or created a second one
  - The task clearly doesn't need Project context — Claude would do it equally well in a standard conversation

- **Common 60–69 patterns:** The task is real and the two prompts are present, but the second prompt doesn't clearly build on the first — it's a related task, not a continuation. Or the reflection describes what happened without naming a specific moment where the Project knowledge appeared. In feedback: quote the second prompt and ask — what specific thing from Claude's first response does this reference? If the answer is nothing, that's the gap. Then quote the reflection and ask — which word or phrase in Claude's output came from the Project, not from your prompt? Show what a specific answer looks like.

- **Common 80+ patterns:** The task is a real piece of ongoing business work. The second prompt quotes or directly references something from Claude's first response — a list number, a phrasing decision, a recommended approach — and asks Claude to build on it or adjust it. The reflection names a specific term or instruction from the system prompt (or a fact from an uploaded document) and traces exactly where it appeared in the output. The student can articulate the difference between what the Project contributed and what their prompt contributed. Often the best submissions include a note like "I've added [X] to my Project document because this task showed me it was missing."

- **Feedback tone:** Direct, specific, kind. Quote the student's words. If the second prompt doesn't reference the first response, quote both and show exactly what a connecting reference would look like. If the reflection is generic, quote it and model what a specific version would sound like with one concrete substitution. End with one concrete next step: either a specific fix for resubmission, or a suggestion for the next Project task they should try based on what this submission reveals about their workflow.

- **Resubmission gating:** Check specifically that the second prompt has been revised to explicitly reference output from the first turn — this is the most common gap in first submissions. Check that the reflection now names a specific piece of Project knowledge rather than a general observation. If the student has also extended their Project in response to feedback, award credit for that explicitly and note what the extension adds.
