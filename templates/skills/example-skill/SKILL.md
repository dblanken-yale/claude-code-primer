---
# TEMPLATE skill. The DIRECTORY NAME becomes the slash command, so when you save
# this for real, name the folder after the command you want (e.g.
# ~/.claude/skills/changelog/SKILL.md -> /changelog).
#
# `description` is the most important field: it tells Claude WHEN to use the skill.
# Start it with "Use when..." for reliable triggering.
#
# GUARDRAIL: never embed secrets here; this file can be shared and committed.
name: Example Skill
description: Use when the user asks to <do the repeatable task this skill automates>.
  Replace this whole description with a sharp "Use when..." sentence.
---

# Example Skill

<!--
  Replace the steps below with the real procedure. Good skills are an ordered,
  unambiguous workflow Claude can follow the same way every time.
-->

1. Gather the inputs (e.g. run a command, read a file, ask the user a question).
2. Do the core work, following the user's standards.
3. Show the result and confirm before any irreversible action (commit, push, send).
4. Report what was done.
