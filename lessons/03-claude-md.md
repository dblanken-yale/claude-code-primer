# Lesson 03 — Memory: CLAUDE.md (you write) + auto memory (Claude writes)

> Instructor goal: the user leaves this lesson with a real, personalized
> `~/.claude/CLAUDE.md` AND an understanding of auto memory and the `/memory`
> command. This is the highest-leverage lesson — spend time here.

Claude Code has **two complementary memory systems**, both loaded at the start of
every session. Teach them as a pair:

| | **CLAUDE.md files** | **Auto memory** |
|---|---|---|
| Who writes it | You | Claude |
| Contains | Instructions and rules | Learnings and patterns Claude discovers |
| Use for | Standards, workflows, project facts | Build commands, debugging insights, preferences |

Both are *context, not enforced rules* — Claude reads them and tries to follow
them, but they aren't a hard guarantee (that's what hooks are for — see the Hooks
lesson).

## Part A — CLAUDE.md (the part you write)

### Concept

A `CLAUDE.md` file is plain markdown that Claude reads at the start of every
session. It's where you write down what you'd otherwise re-explain: your coding
standards, preferred tools, common workflows, "always do X" rules.

**Scope — where it lives determines what it affects** (broadest to most specific):

| Scope | Location | Affects |
|-------|----------|---------|
| User (global) | `~/.claude/CLAUDE.md` | **You, in every project** ← we build this |
| Project | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Everyone on that project (shared via git) |
| Local | `./CLAUDE.local.md` | Just you, in that one project (gitignore it) |

> Reminder for the user: the `CLAUDE.md` in *this primer repo* is the tutorial
> engine. The one we're writing now is **`~/.claude/CLAUDE.md`** — their personal
> global file. Keep these distinct out loud.

### Example — what good instructions look like

Specific and verifiable beats vague every time:

- "Use 2-space indentation" — not "format code properly"
- "Run `npm test` before committing" — not "test your changes"
- "API handlers live in `src/api/handlers/`" — not "keep files organized"

Keep it **under ~200 lines**. Longer files cost more context and actually *reduce*
how reliably Claude follows them. If it grows, move file-type-specific guidance to
a rule (the Rules lesson) or a procedure to a skill (the Skills lesson).

### Guided hands-on — build their `~/.claude/CLAUDE.md`

Start from `templates/CLAUDE.md.template`. Interview the user, then fill it in:

- What languages and frameworks do they work in most?
- What are their non-negotiable standards (style, testing, commits)?
- What tools/commands do they run constantly?
- What does Claude get wrong that they keep re-correcting? (Those are gold — they
  belong in CLAUDE.md.)

Follow the **safe artifact-writing protocol** from the engine `CLAUDE.md`: check
whether `~/.claude/CLAUDE.md` already exists; if so, summarize it and confirm before
changing anything (offer a `.bak` backup or to append). Offer to either write the
file directly or print it for them to paste.

Keep their first version short and real. They'll grow it over time (the Wrap-up
lesson covers maintenance habits).

### Useful mechanics to mention

- **`@path` imports:** a CLAUDE.md can pull in other files with `@path/to/file`
  (e.g. `@~/.claude/my-standards.md`). Imported files load at launch too, so this
  is for organization, not for saving context.
- **`/init`:** in a project, `/init` generates a starter project CLAUDE.md by
  analyzing the codebase. (We're doing the personal/global file by hand so they
  understand each piece.)

## Part B — Auto memory (the part Claude writes)

### Concept

Auto memory lets Claude accumulate knowledge across sessions **without you writing
anything**. As you work, Claude saves notes for itself — build commands, debugging
insights, preferences you express — and reloads them next time. When you say
"always use pnpm, not npm," Claude can save that to auto memory on its own.

- It's stored per-project at `~/.claude/projects/<project>/memory/`, with a
  `MEMORY.md` index that's loaded into every session (first 200 lines / 25KB).
- It's **machine-local** and plain markdown you can read, edit, or delete anytime.
- Requires Claude Code v2.1.59+ (`claude --version` to check).

### The `/memory` command

`/memory` is the control panel for *both* systems. It:

- Lists every CLAUDE.md, CLAUDE.local.md, and rules file loaded this session — the
  fastest way to confirm a file is actually being picked up.
- Toggles auto memory on/off.
- Opens the auto memory folder so you can browse and edit what Claude has saved.

> Teaching point: CLAUDE.md is for "things I want Claude to always do." Auto memory
> is for "things Claude figured out while working with me." You curate the first;
> you supervise the second.

### Guided hands-on — try it

Have the user run `/memory` and read out what's loaded — they should see the
`~/.claude/CLAUDE.md` you just built. Then explain how, going forward, when they
correct Claude, they can say "remember that" to push it into auto memory, or "add
that to my CLAUDE.md" to make it an explicit standing instruction.

## Learn more (official docs)

- Memory & CLAUDE.md (covers both systems and `/memory`):
  https://code.claude.com/docs/en/memory

## Checkpoint

Confirm: (1) `~/.claude/CLAUDE.md` exists and reflects how they work, (2) `/memory`
shows it loaded, (3) they can articulate the difference between CLAUDE.md (they
write) and auto memory (Claude writes). Update the progress checklist, then offer
Lesson 04 (Rules).
