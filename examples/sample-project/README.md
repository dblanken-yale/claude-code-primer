# Sample Project — temperature utils

A tiny, dependency-free JavaScript project used as a **practice workspace** for the
Claude Code Primer. It's deliberately small: a couple of conversion functions and a
test file. Nothing here is precious — it exists so you have a real codebase to point
Claude at when a lesson needs one.

## What's inside

- `src/temperature.js` — `celsiusToFahrenheit` and `fahrenheitToCelsius`.
- `test/temperature.test.js` — tests using Node's built-in test runner (no installs).

## Run the tests

Requires Node.js 18 or newer (uses the built-in `node:test` runner — no `npm install`):

```bash
npm test        # or: node --test
```

The tests should pass out of the box.

## Suggested practice task

A good first task to drive with Claude (Lesson 01) or to add project standards
around (Lesson 11):

> Add `kelvinToCelsius` and `celsiusToKelvin` functions to `src/temperature.js`,
> export them, and add tests. Then run the tests and fix any failures.

This project is meant to be copied to a scratch location outside the primer (the
primer will help you do that) so you can practice without affecting anything real.
