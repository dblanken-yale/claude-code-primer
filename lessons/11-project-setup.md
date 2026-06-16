# Lesson 11 — Project setup and local files

> Instructor goal: bridge from the personal `~/.claude/` setup to a team repository,
> and cover the "local" file variants (CLAUDE.local.md, settings.local.json). Use the
> workspace the user added in Lesson 01 (their project, or `~/primer-sandbox`). Since
> this session's working directory is the primer, you create project files in the
> added workspace directly rather than relying on `/init` here (see the note below).

## Concept

Everything so far has been your **personal, global** setup in `~/.claude/`, which
follows you across every project. But most teams also want **shared, project-level**
config that lives in the repo and is the same for everyone — plus a way to keep
**personal, private** tweaks out of version control.

These are the same building blocks you already know (CLAUDE.md, rules, skills,
settings), just placed in the repo instead of your home directory.

## Shared project config (checked into git)

- **Project `CLAUDE.md`** — `./CLAUDE.md` or `./.claude/CLAUDE.md`. Team-wide
  instructions: build/test commands, architecture, conventions. **`/init`** has Claude
  analyze a codebase and draft one for you — but `/init` analyzes the directory Claude
  was *launched in*. Since this session launched in the primer, you'll instead write
  the project CLAUDE.md straight into the added workspace; `/init` is the tool to use
  when they next start Claude from inside the project itself.
- **Project rules** — `.claude/rules/`, same path-scoped mechanic as your personal
  rules, but shared with the team.
- **Project skills** — `.claude/skills/`, shared `/commands` everyone on the repo gets.

Because these are committed, they keep the whole team consistent — a big win if Yale
wants standardized setups across a project.

## Local, private files (NOT checked into git)

For things that are personal to you in a specific project, use the "local" variants
and **gitignore them**:

- **`CLAUDE.local.md`** — personal project instructions: your sandbox URLs, preferred
  test data, scratch notes. Loads alongside the project `CLAUDE.md` but stays yours.
  Add it to `.gitignore`.
- **`.claude/settings.local.json`** — your personal settings/permissions for this
  project (it's gitignored by default), layered over the shared `.claude/settings.json`.

Rule of thumb: **shared and useful to the team → committed file; personal or
machine-specific → `.local` file in `.gitignore`.**

## Guided hands-on

Use the workspace added in Lesson 01 (their project, or `~/primer-sandbox`). If it's
not still added this session, `/add-dir <path>` it again first.

1. Interview the user about the project (its build/test commands, layout,
   conventions), then **write a project `CLAUDE.md` directly into the workspace**
   (e.g. `~/primer-sandbox/CLAUDE.md`) — same interview-then-write flow you used for
   their global one. Follow the safe artifact-writing protocol.
2. Optionally add a project rule under `<workspace>/.claude/rules/` or a project skill
   under `<workspace>/.claude/skills/`.
3. If they have personal per-project preferences (sandbox URL, test account), add a
   `CLAUDE.local.md` in the workspace and confirm it's gitignored.

> Note on when it takes effect: a project `CLAUDE.md` in an `/add-dir`'d directory is
> not auto-loaded into *this* primer session — added directories grant file access,
> not config loading. It loads normally the next time they run Claude **from inside
> that project**. That's also when `/init` would work as described above.

> Guardrail: `.local` files are still plain files on disk — **never** put secrets in
> them. Use environment variables; keep credentials out of every file Claude reads.

## Learn more (official docs)

- Memory (project CLAUDE.md, `CLAUDE.local.md`, `/init`):
  https://code.claude.com/docs/en/memory
- Settings files (`.claude/settings.json`, `settings.local.json`, precedence):
  https://code.claude.com/docs/en/settings
- Working directories (`/add-dir`, `additionalDirectories`):
  https://code.claude.com/docs/en/permissions#working-directories

## Checkpoint

Confirm the user can explain shared (committed) vs. local (gitignored) config and has
a project `CLAUDE.md` created in their workspace (and knows it loads when they run
Claude from inside that project). Update the checklist and offer Lesson 12 (Yale
guardrails).
