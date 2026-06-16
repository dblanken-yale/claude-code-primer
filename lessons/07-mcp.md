# Lesson 07 — MCP: connecting external tools (and why we use skills for now)

> Instructor goal: the user understands what MCP is and its value, *and* the pilot's
> current posture: don't set up specific servers yet. This is informational — do
> NOT configure an MCP server in this lesson.

## Concept

The **Model Context Protocol (MCP)** is an open standard for connecting Claude Code
to external tools and data sources — issue trackers, databases, monitoring
dashboards, design tools, internal APIs. An MCP *server* exposes tools that Claude
can call, so it can act on those systems without you copying data in and out of the
chat.

This is genuinely powerful. Where a skill encodes a workflow you run locally, an
MCP server gives Claude a live connection to a system. For example, an MCP server
could let Claude read a ticket from your tracker, or query a database directly.

How servers get added (for context — we won't run this here):

```bash
claude mcp add --transport http <name> <url>
```

Servers can be scoped local (just you, this project), project (shared via a
`.mcp.json` file), or user (all your projects). The `/mcp` command manages them, and
a server must be explicitly approved before it connects.

## Why we're leaning on skills during the pilot

MCP is on the roadmap, not off the table — but **Yale has not yet decided which MCP
servers to allow** for the pilot. Which servers are appropriate is partly a security
and data-governance question (a remote server can expose you to risks like prompt
injection from untrusted content, and it determines where your data flows).

So for now:

- **Don't set up MCP servers** as part of this onboarding. There's nothing to
  configure here yet.
- **Build your workflows with skills** (the Skills lesson) instead. Skills run locally, need
  no external service, are easy to review, and cover the large majority of what
  people want day to day.
- **Revisit MCP** once the institution approves a server list. When that happens,
  the official docs below are your starting point.

If a workflow you have in mind feels like it "needs" MCP, that's a great signal to
note down — and often it can be done as a skill that shells out to a CLI you already
have (like `gh` for GitHub) without any MCP server at all.

## Learn more (official docs)

- MCP: https://code.claude.com/docs/en/mcp

## Checkpoint

Confirm the user can say, in a sentence, what MCP is and why we're using skills for
now during the pilot. No artifact is produced in this lesson. Update the checklist
and offer Lesson 08 (Permissions in practice).
