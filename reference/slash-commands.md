# Handy built-in slash commands

Type `/` in any Claude Code session to see every command available to you. This is a
curated set of the ones worth knowing early. For the full reference, see
https://code.claude.com/docs/en/commands

## Getting around a session

| Command | What it does |
|---------|--------------|
| `/help` | List available commands and get help. |
| `/context` | Show how your context window is being used. |
| `/compact` | Summarize the conversation to free up context (optionally `/compact <focus>`). |
| `/clear` | Reset the conversation — start fresh between unrelated tasks. |
| `/resume` | Pick a previous conversation to continue (also `claude --continue` / `--resume`). |

## Doing the work

| Command | What it does |
|---------|--------------|
| `/plan` | Enter plan mode for the next prompt — propose changes without editing (also `Shift+Tab`). |
| `/rewind` | Restore an earlier conversation/code checkpoint (also press `Esc` twice). |
| `/add-dir` | Grant the session access to another directory (e.g. your project). |
| `/cd` | Change the session's working directory. |

## Your setup

| Command | What it does |
|---------|--------------|
| `/init` | Generate a starter project `CLAUDE.md` by analyzing the current codebase. |
| `/memory` | List/edit loaded CLAUDE.md and rule files; toggle auto memory. |
| `/model` | Switch the model (remember: any Claude model except Fable). |
| `/permissions` | View and manage permission allow/ask/deny rules. |
| `/agents` | Create and manage subagents. |
| `/hooks` | Browse configured hooks. |
| `/mcp` | Inspect and manage MCP servers. |
| `/statusline` | Configure your status line. |

## Diagnose and review

| Command | What it does |
|---------|--------------|
| `/doctor` | Check installation, settings, MCP, and context health. |
| `/code-review` | Bundled skill: review the current diff for bugs in a fresh subagent. |

> Tip: you don't have to memorize these — just type `/` and skim. The ones above are
> the high-traffic commands the course refers to.
