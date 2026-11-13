---
name: icon-picker-api
description: Validate controlled IconDropdown/IconPickerModal APIs, icon choices and React/Semantic UI compatibility in the TypeScript library.
---
# Icon-picker API integrity

Use when editing components, public props, exports, peer dependencies or tests.

1. Inspect `src/index.ts`, the relevant `*.types.ts`, `IconDropdown.tsx`, `IconPickerModal.tsx`, the tests, and `package.json`.
2. Keep controlled `value`/`onChange` contracts. Dropdown clearing emits `undefined`; modal selection returns the selected icon name.
3. Update typed examples, tests and `MIGRATION.md` for public-facing changes. Do not expand React support claims without CI evidence.
4. Run `npm run typecheck`, `npm run test:unit`, `npm run test:build` where feasible. State what could not be executed.
5. Respect `AGENTS.md` branch/PR rules. Preserve original Sam Knutson copyright and independent fork notices in `LICENSE`/`NOTICE.md`. Do not publish npm without maintainer approval.
