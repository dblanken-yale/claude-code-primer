# Lesson 02 — Context management

> Instructor goal: the user understands the context window as a finite resource and
> knows the three commands to manage it (`/context`, `/compact`, `/clear`). This is
> short but prevents a huge amount of new-user frustration.

## Concept — context is finite, and it fills up

Recall from orientation: each session has a limited **context window**, and it
starts fresh. As you work, that window fills — with the files Claude reads, the
commands it runs, and the back-and-forth of the conversation. Two things go wrong
when it gets too full:

- Claude may lose track of earlier instructions or your CLAUDE.md.
- Responses get slower and less precise.

Most "Claude got worse halfway through" experiences are really context problems. The
fix is cheap once you know the three controls.

## The three controls

- **`/context`** — shows where your context window is being spent. Run it when
  things feel sluggish or off, to see how full you are and what's taking up room.
- **`/compact`** — summarizes the conversation so far into a compact form, freeing
  space while keeping the gist. Your project-root CLAUDE.md is re-read after
  compaction, so your setup survives. Use it mid-task when you're getting full but
  aren't done.
- **`/clear`** — wipes the conversation and starts fresh. The single most underused
  command. When you switch to an **unrelated** task, `/clear` rather than letting the
  old context linger and confuse things. Your CLAUDE.md, rules, and skills reload, so
  you lose nothing from your setup.

## The habit

> **One task per session.** Start a task, finish it, then `/clear` before the next
> unrelated one. Reach for `/compact` only when a single task is long enough to fill
> the window. Check `/context` whenever quality dips.

## Guided hands-on

In a real session, have the user:

1. Run `/context` and read what's using the window.
2. Practice `/clear` and notice the session reset (and that `/memory` still shows
   their CLAUDE.md loaded afterward — the setup persists).

## Learn more (official docs)

- The context window, and what survives compaction:
  https://code.claude.com/docs/en/context-window
- Commands reference (`/context`, `/compact`, `/clear`):
  https://code.claude.com/docs/en/commands

## Checkpoint

Confirm the user can explain why context fills up and which command to reach for in
each situation (see usage → `/context`; long task → `/compact`; new task →
`/clear`). Update the checklist and offer Lesson 03 (Memory) — the first config
lesson.
