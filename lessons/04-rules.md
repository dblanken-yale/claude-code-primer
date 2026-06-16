# Lesson 04 — Rules: standards scoped to file types

> Instructor goal: the user leaves with at least one rule file in `~/.claude/rules/`
> and understands path-scoped loading. This is a native Claude Code feature — teach
> it as such.

## Concept

As your standards grow, you don't want all of them loaded all the time. **Rules**
let you split instructions into focused markdown files in a `.claude/rules/`
directory, and — the powerful part — scope each one to specific file types so it
**only loads when Claude is working with matching files**.

- A rule about React only enters context when Claude touches a `.tsx` file.
- A rule about Python testing only loads when Claude reads `.py` files.

This keeps your context lean and your standards relevant. Rules *without* a path
scope load every session, just like CLAUDE.md.

Where rules live (mirrors CLAUDE.md scoping):

- `~/.claude/rules/` — personal, all projects ← we build here
- `<project>/.claude/rules/` — shared with the team via git

## Example — a path-scoped rule

Path scoping is done with a `paths:` field in YAML frontmatter using glob patterns:

```markdown
---
paths:
  - "**/*.{ts,tsx}"
---

# JavaScript / TypeScript standards

- Prefer `const`; use `let` only when reassigning.
- No `any` — type it or use `unknown` and narrow.
- Run the linter before considering a change done.
```

Glob patterns you'll use most:

| Pattern | Matches |
|---------|---------|
| `**/*.ts` | All TypeScript files, any directory |
| `src/**/*` | Everything under `src/` |
| `*.md` | Markdown files in the project root |
| `src/**/*.{ts,tsx}` | TS and TSX under `src/` (brace expansion) |

## Guided hands-on — write their first rule

Pick the language or file type they work in most. Start from a matching template:

- `templates/rules/javascript.md`
- `templates/rules/python.md`

(Use whichever fits; adapt the pattern for any other language.) Interview them for
2–4 genuine standards they care about, then assemble the rule with a sensible
`paths:` glob.

Follow the safe artifact-writing protocol: create `~/.claude/rules/` if needed,
check for an existing file of that name, confirm before overwriting, and offer to
write it directly or print it for pasting.

> Teaching point — CLAUDE.md vs. rule vs. skill:
> - **CLAUDE.md**: applies to everything, always loaded → broad, always-relevant facts.
> - **Rule**: applies to matching files, loads on demand → file-type-specific standards.
> - **Skill** (next lesson): a procedure you invoke → multi-step workflows.

### Verify it loads

Rules don't appear in context immediately — a path-scoped rule loads when Claude
*reads a matching file*. Have the user run `/memory` (which lists loaded rules), or
open a matching file in a project and confirm the rule shows up.

## Learn more (official docs)

- Rules and path-scoped loading (same page as memory, "Organize rules with
  `.claude/rules/`"): https://code.claude.com/docs/en/memory#path-specific-rules

## Checkpoint

Confirm a rule exists in `~/.claude/rules/`, the `paths:` glob matches the files
they intended, and they can explain when a rule loads vs. when CLAUDE.md loads.
Update the checklist and offer Lesson 05 (Skills).
