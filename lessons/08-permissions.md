# Lesson 08 — Permissions in practice

> Instructor goal: the user can read and write basic permission rules, knows the
> permission modes, and leaves with a small starter `permissions` block in
> `~/.claude/settings.json` that both reduces prompt fatigue AND hard-blocks risky
> actions (a direct tie to the Yale guardrails).

## Concept

Claude Code gates risky actions behind your approval: it runs read-only commands
freely, but asks before editing files or running most shell commands. **Permissions**
let you tune this — pre-approve the safe things you do constantly, and hard-block the
things that should never happen.

Crucially, **permission rules are enforced by Claude Code itself, not by the model.**
A CLAUDE.md instruction *asks* Claude to behave; a permission `deny` rule *prevents*
the action regardless of what the model decides. That makes permissions (alongside
hooks) the real enforcement layer for your guardrails.

Manage them anytime with the **`/permissions`** command, which shows every rule and
which settings file it came from.

## Rules: allow, ask, deny

Rules live under `permissions` in a `settings.json` file and come in three kinds,
evaluated in this order: **deny → ask → allow** (first match wins).

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

- **allow** — use the tool without prompting (great for safe, frequent commands).
- **deny** — block it outright.
- A rule is `Tool` or `Tool(specifier)`. `Bash(npm run *)` matches by command prefix
  (the space before `*` matters); `Read(.env)` follows gitignore-style path matching,
  so `Read(.env)` blocks any `.env` at or below the current directory.

> Direct guardrail tie-in: a `deny` on `Read(.env)` / `Read(**/.env)` is a concrete
> way to keep secrets out of context — the model literally cannot read those files.

## Permission modes

Modes set the overall posture. Switch mid-session with **`Shift+Tab`**, or set a
default with `defaultMode` in settings:

| Mode | What it does |
|------|--------------|
| `default` | Prompts on first use of each tool (the normal experience). |
| `plan` | Reads and proposes, but makes **no edits** until you approve. Great for big changes. |
| `acceptEdits` | Auto-accepts file edits and common filesystem commands in the working dir. Speeds up trusted work. |
| `dontAsk` | Auto-denies anything not already allowed. |
| `bypassPermissions` | Skips prompts. **Avoid** — only for throwaway sandboxes/containers. |

(`auto` mode exists too but is a research preview.) For day-to-day pilot use, live in
`default`, drop into `plan` for risky work, and consider `acceptEdits` only in a repo
you trust.

## Guided hands-on — a starter permissions block

Help the user add a small, personal `permissions` block to `~/.claude/settings.json`
(snippet in `templates/settings.snippets.md`), following the safe artifact-writing
protocol (merge into any existing file, confirm first):

- **allow**: 2–3 read-only or test commands they run constantly (cuts prompt fatigue).
- **deny**: reading secret files (`Read(.env)`, `Read(**/.env)`) and one genuinely
  dangerous command. This operationalizes the secrets guardrail.

Keep it small and understood — they can grow it as they learn what they trust.

## Learn more (official docs)

- Configure permissions (rules, syntax, precedence): https://code.claude.com/docs/en/permissions
- Permission modes: https://code.claude.com/docs/en/permission-modes
- Settings files: https://code.claude.com/docs/en/settings

## Checkpoint

Confirm a `permissions` block exists in `~/.claude/settings.json`, the user can
explain allow vs. deny and why deny enforces where CLAUDE.md only asks, and they know
how to switch modes (`Shift+Tab`). Update the checklist and offer Lesson 09 (Hooks).
