# settings.json snippets

Copy-ready fragments for `~/.claude/settings.json` (personal) or a project's
`.claude/settings.json`. **Merge** these into an existing `settings.json` rather
than overwriting the whole file — keep the surrounding JSON valid.

> Platform note: `~/.claude/settings.json` is at `%USERPROFILE%\.claude\settings.json`
> on Windows. The `permissions` and `model` snippets are pure JSON and work as-is on
> every OS. The **hook** and **status line** snippets below contain shell `command`
> strings written for **macOS/Linux** (bash, `jq`); on native Windows (PowerShell),
> keep the same JSON structure but use the PowerShell equivalent for the `command`.

Official reference: https://code.claude.com/docs/en/settings

---

## Permissions (Lesson 08)

Pre-approve safe, frequent commands (less prompt fatigue) and hard-block risky ones
and secret-file reads (operationalizes the secrets guardrail). Rules evaluate
deny → ask → allow. Replace the `allow` entries with commands you actually run.

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run test *)",
      "Bash(git commit *)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(**/.env)",
      "Bash(git push *)"
    ]
  }
}
```

Reference: https://code.claude.com/docs/en/permissions

---

## Status line (Lesson 10)

Easiest path is the `/statusline` command. To set it manually:

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  }
}
```

The command runs frequently, so keep any script fast.

---

## Block a destructive command (Lesson 09)

A `PreToolUse` hook that hard-blocks `rm -rf` — a safe, useful first hook. The `if`
field gates it to matching commands; it denies by printing a JSON decision to stdout
and exiting `0`.

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

Reference: https://code.claude.com/docs/en/hooks

---

## Log every file change (Lesson 09)

A `PostToolUse` hook that appends edited file paths to a log. The command reads the
tool details from JSON on stdin with `jq` (inline `${tool_input.file_path}` is not
interpolated — you must read stdin). Requires `jq`.

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

---

## Setting your model (Lesson 12 — Yale guardrails)

Prefer the `/model` command. To pin a default in settings (remember the Yale
guardrail: **any model except Fable**):

```json
{
  "model": "claude-sonnet-4-6"
}
```
