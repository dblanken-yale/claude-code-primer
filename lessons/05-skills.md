# Lesson 05 — Skills: reusable workflows and slash commands

> Instructor goal: the user leaves with one working skill in `~/.claude/skills/`
> that they can invoke as a `/command`. Skills are the pilot's preferred extension
> point — give this lesson real weight.

## Concept

A **skill** packages a repeatable workflow into a `SKILL.md` file that loads *only
when needed* — when you invoke it, or when Claude decides it's relevant to your
prompt. Because it's not in context until used, a skill can hold detailed
instructions without costing you anything in normal sessions.

The directory name becomes the command: a skill at
`~/.claude/skills/changelog/SKILL.md` is invokable as **`/changelog`**.

Good candidates for a skill are things you do the same way repeatedly:

- "Write a conventional commit from my staged changes"
- "Generate a PR description following our template"
- "Scaffold a new component the way we always structure them"
- "Run our review checklist over the current diff"

Where skills live (same scoping pattern):

- `~/.claude/skills/<name>/SKILL.md` — personal, all projects ← we build here
- `<project>/.claude/skills/<name>/SKILL.md` — shared with the team via git

## Example — anatomy of a SKILL.md

```markdown
---
name: Conventional Commit
description: Use when the user asks to create a commit. Writes a Conventional
  Commits message from the staged diff and commits it.
---

# Conventional Commit

1. Run `git diff --staged` to see what's staged.
2. Classify the change (feat, fix, docs, refactor, test, chore).
3. Write a one-line summary in the imperative mood, then a body explaining *why*.
4. Show the message and ask for confirmation before running `git commit`.
```

Key frontmatter fields:

- **`name`** — display name.
- **`description`** — the most important field. It tells Claude *when* to use the
  skill. Lead with the use case ("Use when..."). This is what makes auto-invocation
  work.
- Optional: `allowed-tools` (tools usable without a prompt while the skill runs),
  `argument-hint`, `disable-model-invocation` (only you can trigger it), and more.

> Skills and slash commands are the same mechanism: a file at
> `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` both
> give you `/deploy`. Skills add frontmatter, supporting files, and auto-invocation.

## Guided hands-on — build their first skill

Start from `templates/skills/example-skill/SKILL.md`. Find one workflow the user
genuinely repeats, then:

1. Name it (this sets the `/command`).
2. Write a sharp `description` that starts with "Use when..." so triggering is
   reliable.
3. Lay out the steps as a clear, ordered procedure.

Follow the safe artifact-writing protocol: create
`~/.claude/skills/<name>/`, check for an existing skill of that name, confirm before
overwriting, and offer to write it or print it for pasting.

### Try it

Have them run `/<name>` in a real session (or `/help` to see it listed) and confirm
it triggers and behaves as intended. Tweak the `description` or steps together if
it doesn't fire or wanders.

> Pilot note: skills are the recommended way to extend Claude Code during the Yale
> pilot. They run locally, need no external services, and are easy to review and
> share. We'll cover MCP (the other extension path) in the MCP lesson, but for now,
> reach for a skill.

## Learn more (official docs)

- Skills: https://code.claude.com/docs/en/skills

## Checkpoint

Confirm the skill exists, invokes via its `/command`, and does something useful.
Make sure they can explain why a skill (loads on demand, invokable) differs from a
rule (loads with matching files) and CLAUDE.md (always loaded). Update the checklist
and offer Lesson 06 (Subagents).
