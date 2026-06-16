---
# TEMPLATE rule: JavaScript / TypeScript standards.
# The `paths:` field scopes this rule so it loads ONLY when Claude reads matching
# files. Adjust the globs and the standards below with the user, then save to
# ~/.claude/rules/javascript.md
paths:
  - "**/*.{js,jsx,ts,tsx,mjs,cjs}"
---

# JavaScript / TypeScript standards

<!-- Replace these with the user's real standards. Keep them concrete. -->
- Prefer `const`; use `let` only when a variable is reassigned.
- Avoid `any`. Type it properly, or use `unknown` and narrow.
- Prefer early returns over deep nesting.
- Run the linter/formatter before considering a change complete.
