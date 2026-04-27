# Lesson 4.4 — Project-based workflows and systems

**Module:** 04 · Claude Projects & Knowledge
**Estimated time:** 20 minutes
**Format:** Read + Practice + Graded deliverable

## Pre-requisites

- Modules 1, 2, and 3 complete
- Lesson 4.1 — What Claude Projects are and how they work
- Lesson 4.2 — Setting up a Project for your business
- Lesson 4.3 — Managing knowledge inside a Project

---

## Learning objectives

By the end of this lesson you'll be able to:
- Describe what it means to build a Claude-assisted workflow — not just a one-off task
- Map a recurring business process into Claude steps, human steps, and handoffs
- Apply that mapping to three common AU/NZ small business workflow types
- Identify where a Claude output needs your review before it goes anywhere
- Explain the difference between systemising a process and automating it — and why that distinction matters if you're not a developer

---

## Lesson script

### From one-off tasks to workflows

Most people start using Claude the same way. A task appears. They open Claude, type a prompt, get an output, and move on. The task is done.

That's useful. But it's not where the real time savings come from.

The bigger gain comes when you stop treating Claude as a task tool and start treating it as part of a workflow. A workflow is a recurring, multi-step process — something you do weekly, fortnightly, or monthly, with mostly the same inputs and mostly the same required outputs. Every business has several of these. The question is whether Claude has a defined role in each one, or whether you're improvising every time.

When Claude has no defined role in a workflow, you repeat the same mental overhead every time: what context does Claude need here? What format should I ask for? What am I actually asking it to do? That friction adds up. It doesn't feel like much per task, but across a month of repeating the same process, it's significant.

When Claude has a defined role, that overhead drops to near zero. You know which steps Claude handles. You know what prompt to use. You know what you get back and what you do with it. The process becomes repeatable, and repeatable processes are the foundation of a business that doesn't depend entirely on you thinking hard every day.

This lesson is about designing those defined roles.

### What a Claude-assisted workflow looks like

A workflow is a sequence of steps with an output at the end. When you design a Claude-assisted workflow, you do three things:

**First: map all the steps.** Write out the full process from start to finish. Don't skip steps because they seem obvious. "Check the brief" is a step. "Notify the client" is a step. Every action is a step.

**Second: decide which steps Claude handles, which you handle, and which are handoffs.** Not every step belongs to Claude. Some require your judgement, your relationships, or information Claude can't have. Some are genuinely faster for you to do yourself. Some steps are transitions — places where Claude produces something and you take it to the next phase, or where you gather information and pass it to Claude.

**Third: write the prompt for every Claude step.** Once you know which steps Claude handles, write the prompt for each one. The prompt should include where this step sits in the workflow — what came before it and what the output will be used for. That context makes Claude's output fit the workflow instead of just answering a question in isolation.

The workflow map doesn't have to be elaborate. A numbered list with "Claude" or "You" or "Handoff" next to each step is enough. The goal is clarity, not complexity.

### Three AU/NZ small business workflow examples

Here are three workflows that work well in this model. Each shows the step map, identifies the Claude steps, and names the handoff points.

**Client onboarding workflow**

This is the process that runs from "client has signed" to "client is set up and the work can begin." Most service businesses have this process. Most run it inconsistently because there's no defined system.

Step 1 — You receive the signed contract. (You)
Step 2 — Claude drafts the welcome email with next steps and appointment details. (Claude)
Step 3 — You review and send the welcome email. (Handoff: Claude → you → client)
Step 4 — Claude generates the onboarding checklist for this client type from the Project knowledge base. (Claude)
Step 5 — You confirm the checklist is correct for this specific client and tick off any items that don't apply. (You)
Step 6 — Claude drafts the internal project brief your team needs to start work. (Claude)
Step 7 — You review the brief, add anything Claude couldn't know, and share it with your team. (Handoff)

In this workflow, Claude handles three of the seven steps: the welcome email, the checklist, and the internal brief. You handle the parts that require judgement about the specific client and relationship. The handoffs are explicit: Claude produces something, you review it before it goes anywhere.

**Monthly reporting workflow**

This is the process of producing a monthly performance summary — for yourself, a business partner, or a client. The data exists somewhere. The job is to interpret it and communicate it clearly.

Step 1 — You pull the numbers from your accounting software, analytics platform, or whatever system tracks the relevant metrics. (You)
Step 2 — You paste the numbers into Claude with a brief note on anything significant that happened this month. (Handoff: you → Claude)
Step 3 — Claude drafts the narrative report section — what the numbers mean, what changed, what the pattern suggests. (Claude)
Step 4 — You read the draft and check whether the interpretation is accurate. This is the critical check. Claude works from the data you gave it; it can't know if the numbers look weird because of an error in your system. (You)
Step 5 — Claude drafts the action items or "next month focus" section based on the narrative. (Claude)
Step 6 — You approve, edit, and send. (Handoff)

The workflow is efficient because Claude handles the writing and the interpretation logic. You handle the data gathering and the accuracy check — the parts that require knowing what the numbers actually mean in your specific business context.

**Content creation workflow**

This is the process of producing regular content — blog posts, social posts, email newsletters — for a consistent publishing schedule. The challenge isn't writing one piece; it's repeating the process without it consuming your week.

Step 1 — You note the topic, the angle, and any timely hook (an industry event, a recent project, a seasonal theme). (You)
Step 2 — Claude drafts the long-form piece from your brief. (Claude)
Step 3 — You read the draft and identify what needs fixing: missing specifics, wrong tone, anything that doesn't reflect your actual view. (You)
Step 4 — Claude revises based on your feedback. (Claude, after handoff)
Step 5 — Claude produces the short-form variations: the social captions, the email subject line, the newsletter intro. (Claude)
Step 6 — You do a final read on everything before scheduling. (You — this is always the last step)

The key handoff point in this workflow is step 3. You have to read the draft before it moves forward. Skipping that check — sending Claude's output straight to step 5 or straight to publishing — is how you end up with content that's factually accurate but sounds nothing like you, or that makes a claim you wouldn't actually make.

### The handoff problem

Handoffs are the most important part of any Claude-assisted workflow, and the part most people underdesign.

A handoff is a point in the workflow where Claude produces something that will affect the real world — an email that will be sent to a client, a report that will go to a business partner, a post that will be published. At every one of these points, you need a review step before the output leaves your hands.

This isn't about distrust. Claude's output quality in a well-designed workflow is high. The issue is that Claude produces text from what you gave it, and what you gave it might be incomplete, slightly wrong, or missing context that you know but didn't write down. Claude doesn't know what it doesn't know. It will produce a confident, well-structured output even when it's working from information that has a gap.

Your review at the handoff point is the place where you close that gap. It doesn't have to be long. A 30-second read of a client email before you hit send is a handoff review. A 2-minute check of a monthly report narrative to confirm the interpretation matches what actually happened is a handoff review.

The rule is simple: Claude's output goes through you before it goes to anyone else. No exceptions, even when the workflow is running smoothly and Claude's outputs have been good for three months.

### Common mistake → Better approach

**Mistake:** Using Claude in a workflow without telling it where the step fits.

You're running your monthly report workflow. At step 3, you paste the numbers and ask: "Write a summary of this month's performance." Claude produces a reasonable paragraph. But it's written like a standalone piece — it doesn't connect to anything before or after. It reads like a fresh interpretation, not like a section of an ongoing document that your business partner has been reading for eight months.

**Better approach:** Include the workflow context in the prompt:

```
I'm preparing our monthly business report for April 2026. This narrative
section follows the metrics table my business partner Marcus has already
seen. It should interpret the numbers — not restate them — and connect
to the "next month focus" section that follows.

Revenue: $41,200 (March: $38,500, up 7.3%)
Appointment fill rate: 87% (target: 85%, up from 83% in March)
Retail product sales: $2,100 (target: $3,500 — second month below target)

Write the narrative section in plain, direct English. 150–200 words.
Marcus reads quickly and wants honest interpretation, not spin. Mention
the retail underperformance and connect it to the staff incentive plan
starting in May.
```

The difference is the framing: "this follows the metrics table" and "connects to the next month focus section" tells Claude what comes before and after. That context changes how it writes the output. It becomes a section of a workflow, not an isolated task.

### Systemising versus automating

Here's a distinction that matters for most people in this course.

Automating a workflow means software does the steps without you. A trigger fires, a tool runs, an output appears — and you weren't involved. Automation requires technical setup: Zapier, Make, API connections, code. For most non-developers running small businesses, automation is not accessible without outside help, and it introduces reliability risks when something breaks.

Systemising a workflow means you have a clear, documented, repeatable process that you run consistently. You're still involved. But the process is defined, Claude's role is clear, the prompts are written, and the steps happen in the same order every time. No special software. No integrations. Just a process that's designed.

Systemising is accessible to anyone, right now, without technical skills. You design the workflow, write the prompts, and run it. It's manual in the sense that you're doing it — but it's not improvised. Every instance of the workflow runs the same way. That consistency is where the time saving and quality improvement come from.

For most small business owners, systemising is the right goal. It's achievable, sustainable, and it doesn't break when a software integration fails.

You might automate parts of a workflow later, with help, once you know the process well. But you can't automate a workflow you haven't systemised first. The system comes before the automation.

Start by systemising two or three workflows that currently run on gut feel and repetition. Document the steps. Assign Claude's role. Write the prompts. Run it the same way three times. Then decide whether anything in that process would benefit from automation.

That's the correct order.

---

## Worked examples
<!-- industry-personalisation
{
  "mode": "industry-personalised",
  "default_index": 0,
  "mapping": {
    "Creative & Marketing": 4,
    "SaaS / Software": 5,
    "Trades & Construction": 1,
    "Finance & Accounting": 0,
    "E-commerce & Retail": 3,
    "Health & Wellness": 6,
    "Trades & Services": 1,
    "Other": 0,
    "Education & Coaching": 7
  }
}
-->
At runtime, the platform shows ONE example below — the one matching the learner's industry. The other examples are removed from the page. If the learner has no industry set or "Other", the example at `default_index` is shown.

### Example 1: Welcome email for a new professional-services client

**Scenario:** Client onboarding · Wellington bookkeeper

**Prompt:**
```

```

**Why it works:** The prompt names the workflow step ("step 2 of the onboarding") and what happens next ("will go to the client directly after I review and approve it"). That framing tells Claude this is a handoff point, not a draft. The specific client concern — the previous bookkeeper being unreachable — lets Claude address it without generic reassurance.

---

### Example 2: Narrative section for an accountant, with context Claude needs

**Scenario:** Monthly reporting · Canberra plumbing business

**Prompt:**
```

```

**Why it works:** The prompt explicitly positions this as one step in a longer workflow — what came before (the metrics table) and what comes after (the priorities section). The "context Priya doesn't have" section is the critical addition: it gives Claude the information needed to interpret the numbers accurately.

---

### Example 3: First draft of a blog post — knowing what step 5 will do

**Scenario:** Content creation · Sydney financial planner

**Prompt:**
```

```

**Why it works:** The prompt names both the current step and the next step, so Claude knows this is an intermediate output that will be reviewed. The "no call to action" instruction is a workflow constraint — it belongs to a different step — and stating it prevents Claude from adding something that would either be duplicated or contradicted later.

---

### Example 4: Role-specific checklist from Project knowledge

**Scenario:** Staff onboarding · Queenstown gift shop

**Prompt:**
```

```

**Why it works:** The prompt references the Project knowledge base explicitly, which tells Claude to use the stored onboarding document rather than generating a generic checklist. The flags for POS training and gift-wrapping tailor the output to this hire. The three-section structure is the workflow format — consistent across every new hire.

---

### Example 5: Social captions, run only after the post is approved

**Scenario:** Content workflow · Adelaide landscape architects

**Prompt:**
```

```

**Why it works:** The prompt is explicitly step 5 of a documented workflow — it only runs after the long-form post has been reviewed and approved. That sequencing prevents generating social content from a draft that might still change. The three-output format is consistent every month. The "don't drift toward marketing language" constraint addresses a common failure mode in short-form generation.

---

### Example 6: Mapping a customer support triage workflow with explicit Claude and human handoffs

**Scenario:** Sydney SaaS founder · Customer support triage workflow with founder review

**Prompt:**
```
I'm the founder of QuoteRight, a 4-person SaaS that sells quoting software to Australian plumbers (around 220 paying customers). Support tickets land in our shared Front inbox — I do most replies myself, around 15–25 a day, and it's eating my mornings.
      
      I want to design a Claude-assisted support workflow using the Project I've already set up (knowledge docs: product overview, top 30 FAQs, support voice guide). Help me map it as Claude steps + human steps + handoffs — not "Claude does support".
      
      Here's what I'm picturing — please pressure-test it:
      
      1. Human step: I (or our part-time CS person, Priya) skim the inbox each morning and tag tickets as Easy / Medium / Escalate.
      2. Claude step: For Easy and Medium tickets, paste the customer message into the Project and ask Claude to draft a reply.
      3. Human step: Read the draft, edit anything wrong, send from Front.
      4. Handoff: Escalate tickets (billing disputes, data loss, churn risk) skip Claude entirely — I handle those directly.
      5. Weekly: Friday 30 minutes — review 5 random Claude drafts, update the FAQ doc with anything Claude got wrong.
      
      Please flag the handoff points where things could break, suggest what Claude should explicitly NOT attempt to draft, and tell me which step is highest-risk if I get lazy.
```

**Why it works:** The prompt maps Claude steps, human steps, and handoffs explicitly — the lesson's core workflow framing — and asks Claude to pressure-test the handoff points, which is the "handoff problem" the lesson warns about. The Friday 30-minute review systemises the workflow rather than automating it away, demonstrating the systemising vs automating distinction the lesson draws.

---

### Example 7: Designing a 6-month recall workflow with Claude drafts and practitioner review

**Scenario:** Adelaide podiatry clinic · Six-month recall workflow with practitioner sign-off

**Prompt:**
```
I manage Stride Podiatry, a 3-practitioner clinic in Norwood, Adelaide. We see around 80 patients a week and our recall list (patients due for a 6-month review) sits at about 140 names. Right now recalls go out as a generic SMS and the conversion is poor — maybe 1 in 6 books.
      
      I want to set up a Claude-assisted recall workflow using our existing Patient Communication Project. Help me design it as Claude steps, human steps, and handoffs — with the practitioner staying in charge of clinical content.
      
      What I'm thinking:
      
      1. Human step: Each Monday, I export the recall list from Cliniko (first name, last visit reason, last visit date — nothing clinical, no Medicare numbers).
      2. Claude step: I paste 10 rows at a time into the Project and ask Claude to draft a personalised recall email per patient — warm, plain-English, mentions the reason they came in last, soft call-to-action to book online.
      3. Human step: The treating practitioner reviews their patients' drafts — not me. They edit anything that misrepresents the clinical picture.
      4. Handoff: Once the practitioner approves, I send from our practice email.
      5. Monthly: We review which messages converted and update the Project's tone examples accordingly.
      
      Please flag where this workflow could break, what data should never reach Claude, and where I'm at risk of automating something that should stay systemised.
```

**Why it works:** The workflow names every Claude step, human step, and handoff — especially the critical handoff where the treating practitioner (not the manager) reviews clinical accuracy. Asking Claude to flag what data should never reach it reinforces the regulated-data boundary, and the closing line on systemising vs automating directly invokes the distinction the lesson teaches.

---

### Example 8: Mapping a term-end report workflow with three explicit handoff points

**Scenario:** Small RTO owner, Adelaide · Term-end progress report workflow

**Prompt:**
```
I run a small RTO in Adelaide delivering Cert III and IV in Business — four trainers, around 80 students per intake. At term end we send each student a progress summary plus a copy to their employer where it's a traineeship. Right now it's a scramble across two weeks.
      
      Design me a Claude-assisted workflow. Map every step and tell me explicitly which steps are Claude, which are human, and where the handoffs sit. I want it laid out as a numbered sequence.
      
      Constraints to bake in:
      - Trainers' raw session notes go into a template before anything reaches Claude — no real student names, no unit competency results, no contact details in the conversation
      - Claude drafts the report narrative from the de-identified template
      - The trainer re-attaches the student's name and results back into the draft after Claude returns it
      - I sign off every report before it goes out
      - Employer copies go via our LMS, not email attachments
      
      Tell me where this workflow is brittle — which handoff is most likely to break, and what a simple checklist at that step would look like. Also flag anywhere I'm systemising versus genuinely automating, so I'm honest about how much of this is still manual.
```

**Why it works:** Hits 4.4's core moves — explicit Claude/Human/Handoff labelling, the handoff-as-weak-point principle, and the systemising-versus-automating distinction. The de-identification step before Claude sees data, then re-identification after, is exactly how the lesson handles the "data shouldn't reach Claude" case in a real workflow rather than just refusing to build one.

---

## Graded deliverable

**Title:** Design a Claude-assisted workflow for your business

**Brief:** Pick a recurring process from your work — ideally one you run at least twice a month, but a process you'd run that often *if your business grew* is also valid. Name it precisely. Map the steps — labelling each Claude, You, or Handoff. Write and test one of the Claude steps. Then give an honest assessment of whether systemising it would actually save you time, or just create another thing to maintain.

**What to submit:**

1. **Workflow name and frequency** — What is the workflow called, and how often does it run? Be specific — not "client communications" but "sending a project completion summary after each job closes." One to two sentences.

2. **Step map** — A numbered list of every step in the workflow, with each step labelled: Claude, You, or Handoff. Handoff steps should note what Claude produces and who receives it next.

3. **One step attempted — prompt + Claude's response** — Choose one Claude step from your map. Write the prompt you'd use — include the workflow context (where in the process this sits, what came before, what the output feeds into next). Paste Claude's response in full.

4. **Assessment (100 words, no more)** — Does this workflow actually save you time, or does it create complexity that costs more than it saves? Include a rough time estimate (current vs Claude-assisted) and name where the workflow might break down. *You don't need timesheets — eyeball it: "currently takes me about 25 minutes including switching contexts, with Claude probably 10 minutes including review."*

**Where to submit:** Paste your submission into the Submission box at the bottom of this lesson on the Claude Mastery platform. The AI grading engine returns your grade card within 60 seconds.

**Pass mark:** 70 / 100. If you score below 70, the platform shows your grade card with feedback per criterion and activates a **Revise & Resubmit** button after a 24-hour cooldown.

**Rubric (100 points total — pass at 70):**
- **Specificity (25 pts)** — Is the workflow named with enough precision to know exactly what it covers and when it runs? "Sending a project completion summary to clients after each job closes" passes. "Client communications" doesn't. Does the step map reflect the real steps — including human steps and handoffs — rather than an idealised version?
- **Structure (25 pts)** — Does the step map clearly distinguish Claude steps from human steps, with explicit handoff points labelled? Can a reader follow the map and understand what happens at each step, who is responsible, and what moves the process forward? A map with unlabelled steps or no handoffs scores low.
- **Constraint clarity (25 pts)** — Does the attempted step's prompt include the workflow context Claude needs: where in the process the step sits, what came before, and what the output feeds into next? A prompt that reads like a standalone task with no reference to the workflow scores low, even if the output is good.
- **Outcome focus (25 pts)** — Does the 100-word assessment include a specific time estimate — current versus Claude-assisted — and an honest identification of where the workflow might fail? An assessment that is entirely positive without naming a single failure risk scores low.

---

## Notes for the AI grading engine

*(Not shown to student)*

- **Reward (high marks):**
  - Workflow name is specific enough to identify exactly what triggers it, what it produces, and how often it runs — not a category of work but a named process
  - Step map includes both Claude steps and human steps, with at least two labelled handoff points that name what Claude produces and who or what receives it
  - The attempted step's prompt explicitly frames the workflow position: mentions what step number or phase this is, what came before in the process, and what the output feeds into next
  - The 100-word assessment names a specific time estimate (e.g., "currently takes me 90 minutes, estimate 30–40 minutes with Claude") and a realistic failure point (e.g., "if I skip the review at step 4, errors in the narrative could go to a client undetected")
  - The prompt and response for the attempted step show Claude's output is shaped by the workflow context — it reads like a section of a process, not a standalone answer

- **Penalise (dock points):**
  - Workflow name is a category rather than a named process ("email management," "social media," "admin")
  - Step map labels all steps as "Claude" with no human steps or handoffs — this signals the student hasn't understood the workflow model
  - Step map labels all steps as "You" with Claude appearing only once in a vague role — signals they haven't committed to designing a Claude role
  - The attempted step prompt contains no workflow context — it reads as if Claude is being asked a standalone question with no reference to where this fits in a process
  - The 100-word assessment is enthusiastic but unspecific — no time estimate, no named failure risk, no honest tension between the efficiency gain and the maintenance cost

- **Common 60–69 patterns:** The workflow is real and named with reasonable specificity. The step map exists but handoffs are not explicitly labelled — steps transition from Claude to the student without a named handoff point. The attempted step prompt is reasonable but includes no workflow framing — Claude was given the task without context about what comes before or after. The assessment includes a time estimate but no failure risk. In feedback: quote the attempted step prompt and show the one sentence that would add workflow context. Quote the assessment and ask: where could this process break? That question usually surfaces a real answer the student has thought about but didn't include.

- **Common 80+ patterns:** The workflow name is precise enough that you could set a calendar reminder for it. The step map is complete — it includes human steps that a simpler version would have left out (the review step, the check before sending, the data-gathering before Claude can do its step). The attempted step prompt opens with an explicit workflow orientation: "I'm running the [workflow name]. This is step [X]." Claude's response in the submission reads like a section of a real document, shaped by the context it was given. The assessment is honest about the tension — it names what breaks when the student doesn't follow the process consistently, and it includes a realistic time saving rather than a generous one.

- **Feedback tone:** Direct, specific, kind. Quote the student's words when identifying what's working. If the step map is missing handoff labels, quote a specific transition in their map and show the one-line label that would make it a handoff. If the prompt is missing workflow context, quote the prompt's opening sentence and show what one additional sentence of workflow framing would look like. End with one concrete next step: either the specific thing to fix in the attempted step's prompt, or the name of a second workflow in their business that this model could apply to next.

- **Resubmission gating:** Compare the resubmission directly to the original. If the workflow name became more specific, name the improvement. If the step map gained handoff labels, quote the before and after. If the attempted step prompt added workflow context, quote the new framing sentence and confirm it changes the nature of Claude's output. If the assessment gained a specific failure risk, name the exact risk added and confirm it's realistic. If resubmission adds steps to the map to make it look more complete without genuinely identifying new steps, note that the goal is accuracy — a map that reflects the real process, not a longer one.
