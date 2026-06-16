# Lesson 13 — Getting unstuck

> Instructor goal: give the user a small recovery toolkit so a bad turn doesn't
> derail them. Short and practical. All commands here are real and worth a quick demo.

## Concept

Claude Code will sometimes head the wrong way — misread a request, edit the wrong
thing, or drift after a long session. Knowing how to recover quickly is the
difference between a minor detour and a frustrating session. Here's the toolkit.

## The recovery toolkit

- **Interrupt: press `Escape`.** Stops Claude mid-action so you can correct course
  instead of watching it go further down the wrong path. Then restate what you
  actually want.
- **Undo: `/rewind`.** Go back to an earlier point in the session — useful when a set
  of edits went wrong and you want to return to a known-good state rather than
  untangle them.
- **Start fresh: `/clear`.** When the conversation is confused or off-track, a clean
  slate is often faster than arguing with it. Your CLAUDE.md, rules, and skills
  reload, so your setup is intact.
- **"Claude is ignoring my CLAUDE.md": `/memory`.** First confirm the file is
  actually loaded — `/memory` lists every CLAUDE.md and rule in the session. If it's
  not listed, Claude can't see it. If it is, make the instruction more specific, and
  check for conflicting instructions across files.
- **Diagnose configuration: `/doctor`.** Surfaces problems with your setup (e.g. an
  overloaded skill budget or misconfiguration).
- **Quality dipping mid-session: `/context`.** You may be near the context limit —
  `/compact` or `/clear` (see the Context management lesson).

## When to just start over

If you've corrected Claude two or three times and it's still off, don't keep
fighting. `/clear` (or `/rewind` to a good point), restate the goal more specifically,
and — if it's a recurring miss — capture the fix in your CLAUDE.md so it doesn't
happen next time (that's the wrap-up habit).

## Guided hands-on (optional)

Have the user try `Escape` to interrupt a response, run `/doctor` to see their config
health, and run `/memory` to confirm what's loaded. These are good reflexes to build
early.

## Learn more (official docs)

- Troubleshooting: https://code.claude.com/docs/en/troubleshooting
- Commands reference (`/rewind`, `/doctor`, `/clear`, `/context`):
  https://code.claude.com/docs/en/commands
- Why instructions aren't followed (memory troubleshooting):
  https://code.claude.com/docs/en/memory

## Checkpoint

Confirm the user knows at least the big three: `Escape` to interrupt, `/clear` to
reset, `/memory` to check what's loaded. Update the checklist and offer the final
Lesson 14 (Wrap-up).
