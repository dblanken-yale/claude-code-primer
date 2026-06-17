# Lesson 12 — Yale pilot guardrails: data, secrets, and approved models

> Instructor goal: make sure the user can state and apply the pilot's guardrails.
> These also apply throughout the whole course; this lesson is the consolidated
> recap. Everyone should complete it.

## Why this lesson matters

Claude Code is powerful precisely because it can read your files, run commands, and
send context to the model. That power comes with responsibility. The Yale pilot has
a small set of guardrails — internalize these and you can use Claude Code
confidently.

## 1. Data classification — medium risk is the ceiling

Only work with data classified up to **medium risk** in Claude Code. **Never** paste,
store, or transmit high-risk or otherwise sensitive data — into prompts, into
CLAUDE.md, into skills or rules, or into any file Claude can read.

When you're unsure how something is classified: **leave it out.** It's always safe
to describe a problem abstractly rather than pasting the sensitive specifics.

> Practical habit: before pasting a file or log, ask "would I be comfortable if this
> left my machine?" If not, redact it or describe it instead.

## 2. Secrets hygiene — a hard rule

Never put credentials into prompts, files, or workflows:

- No API keys, passwords, tokens, connection strings, or private keys — not in
  CLAUDE.md, rules, skills, hooks, or anything committed to git.
- Use **environment variables** for secrets, and keep secret files out of git with
  **`.gitignore`**.
- Make sure no workflow you build *echoes* a secret (e.g. a hook or skill that
  prints an env var).

If a secret ever does end up in your context or a file, treat it as exposed: remove
it and rotate the credential.

> This is exactly where **permission `deny` rules** (the Permissions lesson) and a
> **`PreToolUse` hook** (the Hooks lesson) earn their keep — they can hard-block a
> risky command or reading a secret file, where a CLAUDE.md instruction can only ask.

## 3. Approved models — anything but Fable

All Claude models are approved for the pilot **except Fable**. Opus, Sonnet, and
Haiku are all fine — pick based on the task (heavier reasoning vs. speed/cost). Do
not select Fable, even if it shows up as available, and don't set it as the `model`
in any subagent or settings file.

- Check or change your model with the **`/model`** command.

## Learn more (official docs)

- Settings & permissions (for technical enforcement of limits):
  https://code.claude.com/docs/en/settings
- Hooks (to enforce rules that must always hold):
  https://code.claude.com/docs/en/hooks

## Checkpoint

Have the user recite the three guardrails back in their own words: medium-risk data
ceiling, no secrets in prompts/files/workflows, and any model except Fable. Update 
the checklist and offer Lesson 13 (Getting unstuck).
