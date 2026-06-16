# Lesson 00 — Orientation

> Instructor goal: give a new-to-agents engineer the mental model they need so the
> rest of the course makes sense. Keep it short and conversational. Do not set up
> any files in this lesson — it's purely the "why."

## Concept — what Claude Code actually is

Claude Code is an AI coding agent that runs in your terminal. Unlike autocomplete,
it can read your files, run commands, edit code, and use tools on your behalf —
taking multi-step actions toward a goal you describe in plain language.

Two ideas matter most for a newcomer:

1. **The context window.** Everything Claude "knows" in a session — your files, the
   conversation, instructions — lives in a limited context window. Each session
   starts fresh. This is *why* setup matters: the files you configure are what give
   Claude useful context automatically, every session, without you re-explaining.

2. **Tools and agents.** Claude doesn't just produce text; it calls tools (read a
   file, run a test, search the codebase) and can delegate work to *subagents* that
   run in their own context. You'll learn to shape both.

> Helpful analogy to offer the user: configuring Claude Code is like onboarding a
> sharp new teammate. On day one you write down how your team works, your standards,
> and your common workflows — so you don't repeat yourself every morning. That
> "written-down knowledge" is exactly what CLAUDE.md, rules, and skills are.

## Why personal setup is the highest-leverage thing you'll do

Out of the box, Claude Code is capable but generic. A few small configuration files
turn it into something that already knows your stack, follows your standards, and
runs your repetitive tasks on command. The difference between a frustrating
experience and a great one is mostly setup.

This course has two halves. **First** you'll get fluent actually *using* Claude
Code — driving a task, reviewing its changes, and managing its context. **Then**
you'll build your setup, in order of leverage:

- **Memory (CLAUDE.md + auto memory)** — persistent context, the biggest win.
- **Rules** — standards that apply automatically to the right files.
- **Skills** — reusable workflows you trigger with a `/command`.
- **Subagents** — delegation that keeps your main session focused.
- **Permissions, hooks, and the status line** — safety and personalization.
- Finally: applying it to a team repo, the **Yale guardrails**, and troubleshooting.

## The map of where things live

Almost everything you'll configure lives in one of two places:

- `~/.claude/` — your **personal, global** setup (applies to every project). This
  is what we focus on in this course.
- `<project>/.claude/` — **project-specific** setup, shared with a team via git.

You'll mostly build in `~/.claude/` here, and we'll note when something is better
placed in a project.

## Learn more (official docs)

- Claude Code overview: https://code.claude.com/docs/en/overview
- How features fit together: https://code.claude.com/docs/en/features-overview

## Checkpoint

Ask the user to play back, in their own words, why setup matters (the "fresh
context window every session" idea is the one to confirm). Then offer to continue
to Lesson 01, where they'll start actually using Claude Code.
