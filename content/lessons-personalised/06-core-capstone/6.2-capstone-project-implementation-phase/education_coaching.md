# Lesson 6.2 — Capstone Project: Implementation Phase

**Module:** 06 · Core Capstone
**Estimated time:** 60 minutes
**Format:** Read + Build + Graded deliverable

## Pre-requisites

- Module 1 complete (Lessons 1.1–1.6)
- Module 2 complete (Lessons 2.1–2.6)
- Module 3 complete (Lessons 3.1–3.6)
- Module 4 complete (Lessons 4.1–4.6)
- Module 5 complete (Lessons 5.1–5.6)
- Lesson 6.1 — Capstone Design Document (passed)

---

## Learning objectives

By the end of this lesson you'll be able to:
- Use your 6.1 design document as a working brief to guide a real Claude build
- Build a capstone solution in the right order — Project first, then knowledge base, then prompts
- Test each component before wiring it into the full system
- Diagnose and fix the most common mid-build failure: a prompt that worked alone but breaks inside the system
- Document your build as you go so the evaluation phase in 6.3 is based on evidence, not memory

---

## Lesson script

### Your design document is your brief — use it exactly that way

In 6.1 you wrote a design document. It described the business problem you were solving, the Project you would build, the knowledge documents you would upload, and the prompts you planned to write. That document is your brief for this lesson.

Pull it up now. Read it before you build anything.

The reason to read it before starting is simple: the brief tells you what done looks like before you get lost in the doing. Every build has a point, roughly 20 minutes in, where the immediate problem in front of you starts to feel more important than the original design. The brief is the thing that pulls you back. It answers the question "am I still solving the right problem?" when the answer is not obvious.

That said, not all designs survive contact with reality. You may find that the knowledge document you planned to upload doesn't exist yet. You may find that the prompt structure you sketched in 6.1 produces outputs that don't match what you actually need. You may realise the problem you identified is slightly different from the problem that surfaces when you start building. All of this is normal, and none of it is a problem with your design.

What matters is that you notice when you're departing from the design and make the change consciously. "I'm changing this because X" is a coherent build decision. "I just started doing something else" is not. Every time you deviate from your design document, write it down. That note becomes part of your testing documentation — and it tells the honest story of how the system was actually built, which is more useful than a story of how it was planned.

### Build in order: Project, then knowledge base, then prompts

There is one right order for building a Claude solution. Not because other orders can't produce a result, but because this order means each layer has a stable foundation before you add the next one.

**Step 1: Create the Project and write the custom instructions.**

Open Claude, create a new Project, and name it clearly. Then write the custom instructions. These instructions are the system-level behaviour rules — who Claude is in this context, what it knows about your business, how it should respond, and what it should never do. Instructions are not a welcome message. They are constraints.

Write them now, before you upload anything or run a single prompt. The instructions set the container. Everything else goes inside it.

A useful instruction set for a capstone solution will typically include: your business name and what you do, the specific context Claude should always have (client base, service type, tone expectations), the format Claude should default to in this Project, and at least one explicit constraint — something Claude should not do, or should always check before doing.

```
Business: Hartley & Co, a tutoring service with 6 tutors and 84 students in Brisbane.
Context: All outputs in this Project are for parent communications or internal term review. 
Tone: Plain, specific, no jargon. Write to a working parent, not a head of department.
Format: Use bullet points for summaries. Use plain paragraphs for parent emails. Never use tables unless explicitly asked.
Constraint: Never state specific exam-mark predictions without noting that they should be verified against source data before sending.
```

That is a working instruction set. It is not a masterpiece. It tells Claude what it needs to know, in a form Claude can act on.

**Step 2: Upload or create your knowledge documents.**

With instructions in place, add the knowledge your Project needs. These might be documents you already have — a service description, past client examples, a pricing guide, a tone document — or short documents you write now to give Claude the context it can't get anywhere else.

Upload each document one at a time. After each one, open a test conversation and ask Claude something that requires it to use that document. Check that Claude reads it correctly before moving to the next. This is the first test point in the build, and it often surfaces problems early.

Common problem at this step: a document is uploaded but Claude isn't referencing it accurately. Before you assume the document is wrong, check whether the information in it conflicts with something in the custom instructions. Instructions take precedence over knowledge documents in Claude's behaviour. If the instructions say one thing and a knowledge document says another, Claude follows the instructions. That hierarchy is useful when you want it, and confusing when you don't realise it's happening.

**Step 3: Write and test your prompts.**

Now build the prompts your system will actually use. Write each one, run it, evaluate the output, and adjust before moving to the next. Do not write all three prompts first and then test them together. Test each one in isolation first. You need to know that each prompt works on its own before you can diagnose what goes wrong when they're combined.

### The testing habit

Testing is not a phase. It is how you build.

After each step in the build above, test what you just added before continuing. This is slower in the short term and faster in the long term. The most time-consuming debugging scenario is one where you've built everything and then discovered a problem, because you can't tell which layer introduced it.

When you test, you are checking two things: output quality and system integration. Output quality means: does this prompt produce the kind of response I need? System integration means: does this prompt produce the right response when running inside the Project context — with the custom instructions active and the knowledge documents loaded?

Those are different tests. A prompt that passes output quality in a fresh conversation can still fail system integration. You'll know when this happens because the output in the Project feels subtly wrong — not broken, but off. The tone doesn't match, the format ignores an instruction, or Claude draws on knowledge from the wrong domain.

When this happens, the fix is almost always in the prompt, not the instructions. The instructions are a background layer — Claude reads them once at the start and then follows your prompt. If the prompt is vague or short, Claude fills the gap with the instructions. If the prompt is detailed and specific, the prompt overrides anything the instructions left ambiguous. This is why the prompts you wrote in isolation may not behave the same way inside the system — in isolation, Claude defaults to its own judgment. Inside the Project, it defaults to your instructions. Those two defaults produce different behaviour.

The fix is to re-examine the prompt and make it explicit about anything you previously left open. If you assumed Claude would default to bullet points but the instructions say "plain paragraphs," your prompt needs to specify the format rather than relying on a default.

**Common mistake → Better approach**

Mistake: Running all three prompts together in the Project on your first test, getting an output that's partly right and partly wrong, and then trying to diagnose which part of the system caused which problem. You make a change, run it again, something else changes, and you spend 40 minutes chasing a problem that moved.

Better approach: Isolate each prompt. Test Prompt 1 in the Project. Evaluate: does the output match what you expected? If yes, add Prompt 2 and run the sequence. If no, fix Prompt 1 now — before Prompt 2 exists. This gives you a known-good baseline before each new element is introduced. When something goes wrong (and something will), you know exactly which element introduced the problem.

### When things break: diagnosing mid-build failures

Things will break. Not dramatically — usually quietly. The output is plausible but wrong. The format is not quite right. Claude is helpful but not specific enough. These are the mid-build failures that most students encounter, and they are all diagnosable.

**Failure type 1: The prompt is too short for the system context.**

When you write a short prompt inside a Project, Claude fills the remaining space with its instructions. Sometimes that's useful. Sometimes the instruction set is too broad for the specific task, and Claude produces an output that is technically compliant with the instructions but not right for this particular prompt. The fix: lengthen the prompt. Add context that's specific to this task, not already covered in the instructions. The more specific the prompt, the less room Claude has to fill with general instruction-following behaviour.

**Failure type 2: The knowledge document is too long or unstructured.**

Claude reads knowledge documents in context. If a document is 4,000 words of unformatted prose, Claude will extract from it inconsistently — what it surfaces depends on what the prompt asks, and sometimes the relevant section gets buried. The fix: either restructure the document (break it into headed sections so Claude can navigate it more reliably) or split it into multiple shorter, focused documents. A short, well-structured document retrieves better than a long, unfocused one.

**Failure type 3: The instructions contain an ambiguity that surfaces only in a specific prompt.**

Instructions are written in advance and can't anticipate every prompt scenario. You'll occasionally find that a prompt triggers an instruction in a way that produces an unintended result. The fix: add a specific clause to the instructions that covers this case, or add an override instruction directly in the prompt ("For this task, ignore the table format restriction — use a table for the comparison section only"). Prompt-level instructions override system instructions for that response.

### Document as you build

The deliverable for this lesson requires you to submit documentation of what you built — the custom instructions, the knowledge documents, the prompts, the outputs, and the testing notes. If you document as you go, that submission takes 10 minutes. If you build everything and then try to reconstruct what you did, it takes an hour and is always incomplete.

Keep a note open alongside Claude while you build. Every time you do one of these things, write it down:

- The version of something you replaced (even if it's just "first version of Prompt 1 — too generic, output didn't match tone")
- A thing that broke and what you changed to fix it
- A deviation from the design document and why you made it
- A real output you're happy with — paste the full response, not a summary

That running note is your testing documentation. By the time you finish building, you have everything you need for the submission already written. The submission is not a recap — it is evidence of a real build process, and evidence exists only if you captured it while it was happening.

The evaluation phase in 6.3 will ask you to assess whether your solution works. That assessment is only credible if you have records of how it behaved during the build. "It worked" is not an evaluation. "I tested the client email prompt 4 times, adjusted the format instruction twice, and the fourth output was the one I'd send without editing" is an evaluation.

### You are 60 minutes from a working solution

This is the most demanding lesson in the course. It is not demanding because the concepts are complicated — you have everything you need from Modules 1–5. It is demanding because you are doing real work. You are building something that has to work in your actual business, not a practice exercise.

That matters. The difference between a practice exercise and a real build is exactly the pressure that surfaces the problems worth solving. A practice exercise works the first time because it is designed to. A real build requires you to adapt. The adaptation is the point.

When you finish this lesson, you will have a working Claude solution configured for a specific business problem you identified yourself. That solution will have custom instructions you wrote, a knowledge base you assembled, and prompts you tested and refined. It will not be perfect. It will be real.

Spend the 60 minutes. Build the thing.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 4,
  "mapping": {
    "Creative & Marketing": 1,
    "SaaS / Software": 4,
    "Professional Services": 4,
    "Trades & Construction": 2,
    "Property & Real Estate": 4,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 2,
    "Health & Wellness": 3,
    "Education & Coaching": 5,
    "Trades & Services": 2,
    "Other": 4
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Hartley & Co — client comms instructions review

**Scenario:** Writing Project custom instructions · Bookkeeping

**Prompt:**
```

```

**Why it works:** The student submits the draft instruction set rather than asking Claude to write it from scratch — feedback is specific to what was actually written. The three-part output (what works, what's missing, revised version) keeps the response actionable. The business context — 12 clients, hospitality, three summary elements — gives Claude enough to produce instructions that name the actual content categories, not just the tone.

---

### Example 2: ClearPath Marketing — three-tier service document check

**Scenario:** Testing a knowledge document · Marketing consultancy

**Prompt:**
```

```

**Why it works:** This prompt tests the knowledge document without assuming it was read correctly. Asking for three specific extractions — including one that checks for exclusions — surfaces whether Claude is reading the document accurately or inferring from its own knowledge. Asking Claude to flag missing information turns a test prompt into a document quality check: if Claude can't answer question 3, the document needs that information added before the system can use it reliably.

---

### Example 3: Stock reorder prompt — different behaviour inside the Project

**Scenario:** Diagnosing a broken prompt · Retail operations

**Prompt:**
```

```

**Why it works:** The student provides all three diagnostic elements: the custom instructions, the prompt, and the observed difference in behaviour. Asking for both an explanation and a revised prompt means the student understands *why* the fix works, not just what to change. The constraint "regardless of what the attached document contains" closes a common loophole — Claude sometimes infers format from the structure of an uploaded file rather than following instructions.

---

### Example 4: Patient follow-up email — invented clinical details

**Scenario:** Capturing a testing note · Physiotherapy practice

**Prompt:**
```

```

**Why it works:** This prompt captures the exact failure — invented clinical details — which is a specific, diagnosable problem rather than "the output wasn't quite right." The solution (input fields the user fills in before sending) is a real prompt engineering technique from Module 2. Asking Claude to mark the input fields clearly means the revised prompt is usable in practice, not just theoretically correct.

---

### Example 5: Client intake Project — honest readiness assessment

**Scenario:** Writing a deployment readiness paragraph · Agency intake

**Prompt:**
```

```

**Why it works:** The student provides real testing evidence — three scenario results, with specific outcomes — rather than a general impression. Asking Claude to help write the assessment rather than write the prompts or fix the system puts the student in the author role. The instruction "do not write 'it's promising'" is a real constraint that forces Claude to produce a specific, honest paragraph rather than a hedged positive.

---

### Example 6: Hannah tests her parent-comms tone guide by running the same brief three different ways

**Scenario:** Tutoring business owner · Testing a knowledge document

**Prompt:**
```
I'm in Module 6.2, implementation phase of my BrightPath Tutoring capstone. I've uploaded a knowledge document called "Parent Comms — Voice & Tone" to my Project (warm, specific, never generic, always name one concrete win, never use 'unfortunately'). Before I trust it on real reports, I'm running the testing habit from the lesson — same task, three different ways.
      
      Test brief I'm using for all three runs: "Draft a short end-of-term update to the parents of Yr 7 student Liam, who improved his maths from 58% to 71% but is still struggling with worded problems."
      
      Run 1 — minimal prompt: "Write the parent update for Liam."
      Run 2 — explicit reference: "Using the Voice & Tone doc in this Project, write the parent update for Liam."
      Run 3 — adversarial: "Write the parent update for Liam. Make it sound professional and formal."
      
      For each run, tell me:
      - Did it follow the tone doc? (warm? specific? named win? avoided 'unfortunately'?)
      - Where it drifted
      - What that tells me about whether the knowledge doc is doing its job, or whether I need to rewrite it
      
      Then give me the one change I should make to the doc before I move on.
```

**Why it works:** This is the 6.2 testing habit exactly — same task, three different ways — applied to a knowledge document, not a prompt. The adversarial Run 3 is the lesson's "does the doc actually hold under pressure" check, and the closing ask ("one change before I move on") is the document-as-you-build discipline.

---

## Graded deliverable

**Title:** Capstone implementation documentation

**Brief:** This is the build lesson. Submit the actual components of the working system you created — full custom instructions, the knowledge documents you used, the key prompts exactly as written, two real outputs Claude produced on real work, honest testing notes on what broke and what you changed, and a one-paragraph deployment readiness assessment. A submission that shows real testing friction and an honest readiness paragraph will score higher than one that reports a flawless build with no complications.

**What to submit:**

1. **Custom instructions — exactly as pasted into your Project** — Paste the full text exactly as it appears in your Project settings. Do not paraphrase or summarise. This is the container every other component runs inside.

2. **Knowledge documents + key prompts** — List every document you uploaded or created with a one-sentence description of each. Then paste one 3–6 sentence excerpt from any one document. Then paste the full text of your 2–3 most important prompts — pasted, not described.

3. **Real output 1 — Claude's full response to a real task** — Not a practice scenario. A real output from real work you ran through the system. Paste Claude's full response — no summaries, no truncation.

4. **Real output 2 + testing notes** — Paste a second full real output (a genuinely different task from output 1), then 1–2 testing notes. For each note: the problem (what you expected vs. what you got), the change you made, whether the change resolved it. If everything worked first time, describe the smallest real adjustment you made and why.

5. **Readiness verdict — ready to use, or not yet (80–150 words)** — One honest paragraph. State your verdict in the first sentence ("ready" / "not yet"), then explain. If ready: what would need to happen for it to break down in practice, and how would you catch that? If not yet: what specifically is still missing or unreliable, and what's your plan to address it before using it with real clients?

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the solution clearly built for the specific business problem the student identified in 6.1 — not a generic Project that could belong to any business? The custom instructions should name the student's actual business context (industry, client type, use case). The prompts should include details that only make sense for this specific problem — not general-purpose prompts that could be used for anything.
- **Structure (25 pts)** — Are all four submission components present? Does the components list include the actual text of instructions and prompts — not descriptions of them? Are the two real outputs Claude's full responses — not summaries or paraphrases? Is the testing notes component present and specific? Is the readiness paragraph present and does it address production readiness honestly?
- **Constraint clarity (25 pts)** — Do the custom instructions and prompts show Module 2 prompt engineering skills? Look for: explicit format instructions (not just "write clearly" but "bullet points for X, plain paragraphs for Y"), role or context framing, at least one constraint (something Claude should not do or should check before doing), and clear output structure. One- or two-sentence prompts with no structure score 6–10.
- **Outcome focus (25 pts)** — Does the readiness assessment show honest judgement — not just "it works" but a real evaluation of whether the system is production-ready? Look for: an honest statement of what was tested, what the results showed, and what still needs to happen before the solution handles real work reliably. "It worked well and I'm happy with it" scores 6–10.

---

## Notes for the AI grading engine

These notes are read by the grading engine when scoring submissions for this lesson. They are not shown to the student.

- **Reward (high marks):**
  - Custom instructions that name specific business context — industry, client type, tone expectations, and at least one named constraint — not generic instructions that could apply to any Claude Project
  - Prompts that show Module 2 structure: role framing, explicit format instructions, constraints, and output specificity — not single-sentence requests
  - Real outputs that are clearly Claude's work, pasted in full, and that demonstrate the system doing something specific to the student's problem (not generic responses that could have come from any Claude conversation)
  - Testing notes that describe a specific failure with a specific fix — even a minor adjustment counts if it's described with enough detail to show genuine testing rather than assumed success
  - A readiness assessment that names a condition under which the system would break, not just a positive summary — this is the strongest signal of genuine evaluation thinking

- **Penalise (dock points):**
  - Custom instructions pasted as a paraphrase or summary — the grading engine cannot evaluate instruction quality without the actual text
  - Prompts described rather than pasted — "I wrote a prompt that asked Claude to summarise client feedback" does not allow evaluation of prompt structure
  - Real outputs that are clearly summarised or truncated — the outputs must be Claude's full responses to allow quality assessment
  - Testing notes that report no problems or describe only cosmetic changes ("I changed one word") without explaining why — genuine build sessions always surface at least one meaningful adjustment
  - A readiness assessment that is entirely positive ("it works great, ready to go") with no acknowledgement of any limitation or gap

- **Common 60–69 patterns:** The student built something real — the components are present and the system has genuine business context. But the prompts lack Module 2 structure: they're short requests with no format instructions or constraints, and the custom instructions are brief and generic. The real outputs are present but summarised. The testing notes are thin — one line describing a minor change without explaining the problem that triggered it. The readiness assessment is positive and brief. In feedback: quote the student's strongest prompt back to them and name one specific structural element it's missing (e.g., "your prompt doesn't tell Claude what format to use — add a format line and it will produce more consistent outputs"). Quote the readiness assessment and ask: "Name one scenario where this system would produce an output you couldn't send without rewriting it. That scenario is what your readiness assessment should address."

- **Common 80+ patterns:** The submission reads like documentation of a genuine build session — the instructions are specific to a real business, the prompts show explicit structure and constraints, and the real outputs are clearly the product of a configured system rather than a generic conversation. The testing notes describe a specific failure and a specific fix — you can see the diagnostic process, not just the result. The readiness assessment names a condition or a scenario rather than reporting an overall impression. The student may have deviated from their 6.1 design and noted why — this is a strong signal of genuine build engagement. Acknowledge the testing notes specifically: quote the failure and the fix, and name what that adjustment demonstrates about the student's understanding of how the system works. End with one concrete forward step pointing toward 6.3 evaluation.

- **Feedback tone:** Direct, specific, kind. This is the heaviest lift in the course — the student spent real time building something real. Acknowledge that plainly before moving to feedback. Quote the student's own words from the submission: their instructions, their prompt structure, their testing note, their readiness language. Never give generic feedback on this lesson. If a component is missing, name it and give one concrete example of what it should contain. End with one actionable next step pointing toward the 6.3 evaluation phase — specifically what the student should use from this submission as evidence when they assess their solution.

- **Resubmission gating:** Compare the resubmission against the original on four dimensions: (1) did instructions gain specific business context that was missing? (2) did prompts gain structural elements — format instructions, constraints — that were absent? (3) did the testing notes gain specificity — a named problem with a named fix? (4) did the readiness assessment move from a positive summary to an honest evaluation that names a gap or condition? If all four improved, name each change explicitly. If one or two improved, acknowledge the progress and name the remaining gap. If the resubmission added words without adding substance — longer paragraphs that say the same thing — say so directly: "Your readiness assessment is longer but it still doesn't name a scenario where the system would struggle. That is the one sentence this section still needs."
