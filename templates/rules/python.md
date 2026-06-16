---
# TEMPLATE rule: Python standards.
# The `paths:` field scopes this rule so it loads ONLY when Claude reads Python
# files. Adjust the standards below with the user, then save to
# ~/.claude/rules/python.md
paths:
  - "**/*.py"
---

# Python standards

<!-- Replace these with the user's real standards. Keep them concrete. -->
- Follow PEP 8; format with the project's configured formatter.
- Use type hints on function signatures.
- Prefer f-strings for interpolation.
- Write a test for new behavior before considering it done.
