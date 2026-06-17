# Lesson 09 — Hooks: automation that always runs (optional)

> Instructor goal: the user understands what hooks are and how they differ from
> CLAUDE.md, with one or two safe examples. Building one is optional and more
> advanced — offer it, don't force it.

## Concept

Everything so far (CLAUDE.md, rules, skills) is *context* — Claude reads it and
tries to comply, but compliance isn't guaranteed. **Hooks are different: they're
commands that the Claude Code client runs automatically at fixed points, regardless
of what Claude decides.** If you need something to *always* happen, use a hook.

Hooks fire on lifecycle events, including:

- **`PreToolUse`** — before a tool runs; can **block** the action.
- **`PostToolUse`** — after a tool succeeds.
- **`UserPromptSubmit`** — before your prompt is processed; can block.
- **`SessionStart`** / **`SessionEnd`** — session lifecycle.

They're configured in `settings.json` (the Permissions lesson covers settings files
in more depth), at any scope (`~/.claude/settings.json` for personal,
`.claude/settings.json` for a project).

## Example — two safe, beginner-friendly hooks

**1. Block a dangerous command (`PreToolUse`).** This is a great safety net and ties
directly to the Yale guardrails — a hook can hard-stop something CLAUDE.md can only
*ask* Claude to avoid:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "if": "Bash(rm -rf *)",
            "command": "echo '{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"permissionDecision\":\"deny\",\"permissionDecisionReason\":\"Destructive rm -rf blocked by hook\"}}'"
          }
        ]
      }
    ]
  }
}
```

The `if` field gates the hook to commands matching `rm -rf *`. When it fires, it
prints a deny decision to stdout and exits normally (`0`).

**2. Log every file change (`PostToolUse`).** A simple audit trail. The hook command
receives the tool's details as JSON on stdin, so it reads the file path with `jq`
(template strings like `${tool_input.file_path}` are *not* interpolated into the
command — you must read stdin):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' >> ~/file-changes.log" }
        ]
      }
    ]
  }
}
```

How they work mechanically: the event fires, the `matcher` filters which tools it
applies to, your handler runs (receiving the full tool context as JSON on stdin),
and the handler controls the outcome. To **deny** an action, print a JSON decision
(`hookSpecificOutput.permissionDecision: "deny"`) to stdout and exit `0`, as above.
Exiting with code `2` is an alternative that blocks the action and sends stderr
back to Claude as feedback.

> Platform note: the `command` strings above are written for **macOS/Linux** shells
> (and use `jq` for the log example). On native Windows where Claude Code runs
> commands through **PowerShell**, the hook *structure* is identical but the `command`
> must be the PowerShell equivalent. If the user is on Windows, help them write the
> PowerShell form (or have Claude generate it for their shell) rather than pasting the
> bash version.

## Guided hands-on (optional)

If the user wants a hook, the **block-destructive-command** hook above is the best
first one — it's safe, useful, and reinforces secrets/data hygiene. Help them add it
to `~/.claude/settings.json` using the safe artifact-writing protocol (check for an
existing `settings.json`, merge rather than clobber, confirm first). The snippet is
also in `templates/settings.snippets.md`.

> Caution to convey: a misconfigured hook can block your own work or run on every
> tool call. Start with one simple hook, test it, and grow from there. Never put a
> secret in a hook command (it would be stored in plain text and could be echoed).

## Learn more (official docs)

- Hooks reference: https://code.claude.com/docs/en/hooks
- Hooks guide (tutorial): https://code.claude.com/docs/en/hooks-guide

## Checkpoint

Confirm the user can state the key distinction: CLAUDE.md *asks*, a hook *enforces*.
If they added a hook, verify it triggers as expected. Update the checklist and offer
Lesson 10 (Status line).
