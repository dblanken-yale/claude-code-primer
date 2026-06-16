# Lesson 06 — Subagents: delegating work to keep your context clean

> Instructor goal: the user understands what subagents are, when delegation helps,
> and how a custom subagent is defined. Building one is optional — gauge interest.
> The conceptual model is the required takeaway.

## Concept

A **subagent** is a separate AI assistant Claude can hand a task to. It runs in its
**own context window** with its own instructions and (optionally) a restricted set
of tools, does the work, and returns just a summary to your main session.

Why this matters, tied back to Lesson 00: your main context window is finite and
precious. Delegating a noisy task — "search the whole codebase for every place we
call this API" — to a subagent keeps the verbose output *out* of your main
conversation. You get the conclusion, not the 500 lines of grep results.

Delegate when:

- A task produces a lot of output you don't need to keep.
- The work is self-contained and can return a summary.
- You want a specialist with specific instructions or limited tools (e.g. a
  read-only reviewer).

Claude Code ships with built-in agents (like `Explore` for searching and `Plan`
for designing). You can also define your own.

## Example — a custom subagent

Custom subagents are markdown files with frontmatter, in `~/.claude/agents/` (personal)
or `<project>/.claude/agents/` (shared via git):

```markdown
---
name: test-writer
description: Use to write unit tests for a specified module. Returns the test
  file and a short summary of what it covers.
tools: Read, Grep, Glob, Write
model: inherit
---

You write focused unit tests. Read the target module, cover the main paths and
edge cases, follow the project's existing test style, and report what you covered.
```

Notable frontmatter:

- **`name`** / **`description`** — identity and *when to delegate* to it.
- **`tools`** — an allowlist; omit to inherit all tools. Restricting tools makes a
  safer, more focused agent (e.g. a reviewer with no write access).
- **`model`** — `opus`, `sonnet`, `haiku`, or `inherit` (default). Remember the
  Yale guardrail: **never Fable.**

The `/agents` command lets you create and manage subagents interactively.

## Guided hands-on (optional)

If the user has a recurring delegate-able task (reviewing diffs, writing tests,
researching a subsystem), help them draft one custom subagent file following the
example. Mind the model guardrail and prefer a minimal `tools` allowlist.

If they'd rather not build one yet, that's fine — make sure they know the built-in
`Explore` and `Plan` agents exist and that they can add custom ones later via
`/agents`.

## Learn more (official docs)

- Subagents: https://code.claude.com/docs/en/sub-agents

## Checkpoint

Confirm they can explain *why* delegation helps (protecting the main context
window) and *where* custom subagents are defined. Update the checklist and offer
Lesson 07 (MCP).
