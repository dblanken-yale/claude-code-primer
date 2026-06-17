# Lesson 10 — Status line: a quick personalization win (optional)

> Instructor goal: a fast, satisfying customization. Keep it light — this is a nice
> finish, not a deep topic.

## Concept

The **status line** is the customizable bar Claude Code shows at the bottom of the
session. You can make it display whatever context you find useful — the current
model, working directory, git branch, etc. It's purely cosmetic: it doesn't change
Claude's behavior, just what you see.

## The easy way

The fastest path is the built-in command:

```
/statusline
```

It runs a setup wizard that detects your shell and configures a status line for
you. Suggest the user try this first.

## The manual way

Under the hood, the status line is a `settings.json` entry that runs a command and
displays its output:

```json
{
  "statusLine": {
    "type": "command",
    "command": "bash ~/.claude/statusline-command.sh"
  }
}
```

The command runs frequently, so it must be fast — keep any script lightweight.

> Platform note: the `bash …` example above is for macOS/Linux. On Windows the
> `command` must be one your shell can run (e.g. a PowerShell command or a `.cmd`
> script) — `bash` may not exist. Easiest cross-platform path: just run
> `/statusline` and let the wizard configure it for your system. See the docs'
> Windows status-line guidance.

## Guided hands-on

Have the user run `/statusline` and pick something they like. If they want a custom
one, help them add the `settings.json` snippet (also in
`templates/settings.snippets.md`) following the safe artifact-writing protocol
(merge into any existing `settings.json`, don't clobber).

## Learn more (official docs)

- Status line: https://code.claude.com/docs/en/statusline

## Checkpoint

The user has a status line they like. Update the checklist and offer Lesson 11
(Project setup + local files).
