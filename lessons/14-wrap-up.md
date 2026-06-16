# Lesson 14 — Wrap-up: maintaining your setup over time

> Instructor goal: consolidate what they built, leave them with good habits, and
> point to where to go deeper. Keep it brief and encouraging.

## What you built

Recap with the user what now exists in their `~/.claude/`:

- A personal **`CLAUDE.md`** tuned to how they work.
- At least one **rule** scoped to the files they touch most.
- At least one **skill** they can invoke as a `/command`.
- Optionally: a custom **subagent**, **permission rules**, a **hook**, and a
  **status line**.
- Fluency in **using Claude Code day to day** (plan mode, reviewing diffs) and
  **managing context** (`/context`, `/compact`, `/clear`).
- A clear understanding of **memory** (CLAUDE.md + auto memory), **MCP**, applying
  this to a **team repo** (and local files), and the **Yale guardrails**.

Have them run `/memory` one more time to see their setup loaded — a satisfying way
to close.

## The habit that matters most

A great setup is grown, not written once. The single best habit:

> **When you correct Claude twice for the same thing, capture it.**
> Put a standing instruction in CLAUDE.md (or a rule, if it's file-type-specific),
> turn a repeated multi-step task into a skill, and let auto memory accumulate the
> rest. Say "add that to my CLAUDE.md" or "remember that" in the moment.

Where each thing goes, as a quick rule of thumb:

- Always-true fact or preference → **CLAUDE.md**
- Standard that only applies to certain files → **rule**
- A workflow you repeat → **skill**
- Something that must *always* happen, enforced → **hook**
- Something Claude figured out while working → let **auto memory** keep it

## Keep it lean

Revisit your `~/.claude/` occasionally and prune. Conflicting or stale instructions
make Claude *less* reliable, and oversized CLAUDE.md files reduce adherence. A small
setup you understand beats a big one you don't.

## Where to go deeper (official docs)

- Everything starts here: https://code.claude.com/docs/en/overview
- Full reference index: see `reference/links.md` in this repo.

## Checkpoint

Congratulate them — they have a real, working Claude Code setup and understand every
piece. Mark the course complete in the checklist. Remind them this primer repo was
just the teaching engine; what they keep is their `~/.claude/` setup. They can delete
the cloned repo whenever they like.
