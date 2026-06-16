# Claude Code Primer

An interactive, hands-on onboarding course for the **Yale Claude Code pilot**.

You don't read this course — you *talk through it*. You open this repo in Claude
Code, and Claude itself becomes your instructor. It explains how Claude Code works,
then helps you build your own productive setup live, one step at a time.

## What you'll have at the end

A real, working personal configuration in your `~/.claude/` directory:

- A global **`CLAUDE.md`** tuned to how you actually work
- At least one **rule** that applies your standards to the right files automatically
- At least one **skill** (a reusable `/command`) for a workflow you repeat
- A clear understanding of **memory, subagents, MCP, hooks, and the status line** —
  and the Yale pilot's guardrails for using them safely

Everything is grounded in the official Anthropic documentation, and Claude will
link you to the relevant page whenever you want to go deeper.

## Prerequisites

- **Claude Code installed and authenticated.** If you're not set up yet, start at
  the official docs: https://code.claude.com/docs/en/overview
- Comfort with a terminal and `git` (you're an engineer in the pilot — you've got
  this).
- About 45–60 minutes for the full course. You can also do it in pieces; Claude
  tracks your progress and can resume later.

## How to start

1. Clone this repo and `cd` into it:

   ```bash
   git clone <this-repo-url> claude-code-primer
   cd claude-code-primer
   ```

2. Open Claude Code in the directory:

   ```bash
   claude
   ```

3. Send this one message to begin:

   > **Start the primer**

That's it. From there the experience is a conversation — Claude greets you, shows
the lesson menu, and walks you through. Answer its questions about how you work,
and it will help you build your setup as you go.

> **Just want to look around first?** Begin with **"Start the primer in dry-run
> mode"** instead. Claude walks you through the whole course but writes nothing —
> it prints what it *would* create instead of touching your `~/.claude/`. Great for
> evaluating the primer before you run it for real. See "Testing this primer" below.

## What's in this repo

| Path | What it is |
|------|------------|
| `CLAUDE.md` | The course engine — turns Claude into your instructor. You don't edit this. |
| `lessons/` | One file per lesson. Claude reads these as it teaches; you don't have to. |
| `templates/` | Copy-ready starter files (CLAUDE.md, rules, a skill) that Claude customizes with you. |
| `examples/sample-project/` | A tiny, dependency-free practice project, in case you don't have one of your own to point Claude at. |
| `reference/` | Quick references: every official docs link (`links.md`) and a built-in slash-command cheat-sheet (`slash-commands.md`). |

> **Note on the two CLAUDE.md files:** the `CLAUDE.md` in *this repo* is just the
> tutorial engine. The `CLAUDE.md` you'll *build* lives in your home directory at
> `~/.claude/CLAUDE.md` and is the thing you keep. Claude will keep this distinction
> clear as you go.

## Testing this primer

Evaluating the primer before handing it to others? You don't want the guided
hands-on writing to your own `~/.claude/`. Options, easiest first:

1. **Dry-run mode (no setup).** Start with **"Start the primer in dry-run mode"**.
   Claude runs the whole course but creates/edits no files — it prints what it would
   write and where. This is an instruction Claude follows, not a hard sandbox, so
   it's backed up by the fact that Claude Code prompts before any file write and
   `~/.claude` is a protected path that always prompts — you can simply decline.
2. **Back up and restore (verifies the real write path).**
   ```bash
   cp -a ~/.claude ~/.claude.primer-bak        # snapshot
   # ...run the primer for real, let it write files...
   rm -rf ~/.claude && mv ~/.claude.primer-bak ~/.claude   # restore
   ```
3. **Throwaway HOME (fully isolated; also simulates a brand-new user).**
   ```bash
   mkdir -p /tmp/primer-home
   HOME=/tmp/primer-home claude               # run from inside this repo
   ```
   Note: credentials may live under your real `~/.claude` or the OS keychain, so this
   may require re-authenticating for the test session.

For the parts that reach outside `~/.claude/` (driving a real task; `/init` creating
a project `CLAUDE.md`), use a scratch repo so no real project is touched:
`mkdir /tmp/primer-scratch && cd /tmp/primer-scratch && git init`.

## A note on safety

This course follows the Yale pilot's guardrails: keep data to medium risk or lower,
never put secrets (keys, passwords, tokens) into prompts or files, and use any
Claude model except Fable. Claude will remind you of these as relevant. See Lesson
12 for the full rundown.
