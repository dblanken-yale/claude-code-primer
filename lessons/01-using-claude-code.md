# Lesson 01 — Using Claude Code day to day

> Instructor goal: get a new-to-agents engineer fluent with the actual work loop
> *before* they build config. By the end they've driven one small real task: described
> it, used plan mode, reviewed a diff, and verified the result. First help them set
> up a workspace OUTSIDE the primer (their own project, or the bundled sample
> project), because the session's working directory is the primer repo itself.

## Concept — the work loop

Working with Claude Code is a loop, not a one-shot command:

1. **You describe a goal** in plain language ("add a null check in `user.ts` and a test for it").
2. **Claude explores and proposes** — it reads files, maybe runs read-only commands, and proposes edits or a plan.
3. **You review** — accept, reject, or redirect.
4. **You verify** — have Claude run the tests or the app and fix what fails.
5. Repeat.

The skill is in steps 1 and 3: giving a clear goal, and reviewing what comes back.

## The moves that matter

- **Point at files with `@`.** Typing `@src/utils/auth.js` pulls that file's content
  straight into the conversation, so Claude doesn't have to hunt for it. You can
  reference a directory (`@src/components`) or several files at once.
- **Use plan mode for anything non-trivial.** Press **`Shift+Tab`** to toggle into
  plan mode (or launch with `claude --permission-mode plan`). In plan mode Claude
  reads and proposes a plan but **makes no edits until you approve** — exactly what
  you want before a big or risky change.
- **Review the diff before accepting.** Claude shows you proposed changes; read them
  like a code review. Don't rubber-stamp. (How approvals work — and how to safely
  reduce the prompting — is the Permissions lesson.)
- **Close the loop with verification.** The highest-leverage habit: end a task with
  "run the tests and fix any failures" or "run the app and confirm it works." Claude
  is far more reliable when it can check its own work.
- **Resume instead of re-explaining.** `claude --continue` resumes your last session
  in this directory; `claude --resume` or `/resume` lets you pick one. A task can
  span several sittings.

## Handy slash commands to show them

Slash commands control Claude Code from inside a session — type `/` to see them all.
Point out a few high-traffic ones now (the full curated list is in
`reference/slash-commands.md`):

- `/help` — see what's available
- `/context` — how full the context window is
- `/clear` — reset between unrelated tasks
- `/plan` — propose-before-editing (same as `Shift+Tab`)
- `/rewind` — undo to an earlier checkpoint (or press `Esc` twice)
- `/add-dir` — grant access to another directory (used just below)
- `/model` — switch model (any Claude model except Fable)

Encourage the habit of typing `/` to discover the rest — they'll meet `/memory`,
`/permissions`, `/agents`, `/init`, `/doctor`, and others in later lessons.

## Set up a workspace (so Claude can work outside the primer)

This session is running **inside the primer repo** — that's its working directory. To
do real work or create project files, Claude needs access to *another* directory.
That's `/add-dir`:

- **`/add-dir <path>`** grants the current session read/write access to another
  directory. Files there then follow the normal permission rules (writes still
  prompt — that's the Permissions lesson).
- To make it stick across sessions, add the path to
  `permissions.additionalDirectories` in `~/.claude/settings.json`, or launch with
  `claude --add-dir <path>`.

Set up the user's workspace now, picking whichever case fits:

- **They have a project** (medium risk or lower): `/add-dir /path/to/their-project`.
- **They have no project, or want a throwaway**: the primer ships a tiny sample
  project at `examples/sample-project/`. Copy it *out* of the primer to a scratch
  location, then add that — so practice never touches anything real and survives
  deleting the primer:

  ```bash
  cp -R examples/sample-project ~/primer-sandbox
  ```

  then `/add-dir ~/primer-sandbox`. (Offer to run the copy for them; in dry-run mode,
  describe these steps instead of running them.)

Confirm access with a quick read, e.g. ask Claude to show the workspace's `README.md`.

## Guided hands-on — drive one real task

Using the workspace you just set up, walk the user through one small task end to end:

1. Orient: "give me an overview of `@~/primer-sandbox`" (or their project path).
2. Pick a tiny change. For the sample project, a good one is: *"add `kelvinToCelsius`
   and `celsiusToKelvin` to `src/temperature.js` with tests."* Toggle plan mode
   (`Shift+Tab`), describe it, and review the plan Claude proposes.
3. Approve, let it make the edits, and **read the diff** together.
4. Ask Claude to run the tests (`npm test` in the sample) and fix anything that breaks.

The point isn't the change — it's that they feel the describe → plan → review →
verify loop once, with a safety net, against a real directory they granted access to.

> Guardrail reminder: only `/add-dir` directories and data classified medium risk or
> lower, and never paste secrets. The same rules you'll formalize later apply now.

## Learn more (official docs)

- Common workflows (prompt recipes, plan-before-editing, `@` references):
  https://code.claude.com/docs/en/common-workflows
- Best practices (prompting and context): https://code.claude.com/docs/en/best-practices
- Plan mode and the other permission modes: https://code.claude.com/docs/en/permission-modes
- Working directories (`/add-dir`, `--add-dir`, `additionalDirectories`):
  https://code.claude.com/docs/en/permissions#working-directories

## Checkpoint

Confirm the user has a workspace added with `/add-dir` and has driven one task
through plan → review → verify, and can describe the loop. Update the checklist and
offer Lesson 02 (Context management).
