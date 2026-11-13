---
name: showroom-ux
description: Maintain the static Icon Picker Lab UX showroom and safely prepare manual GitHub Pages publication.
---
# Icon Picker Lab showroom

Use when editing `showcase/`, styling, copy, accessibility, links or GitHub Pages delivery.

- Keep warm cream/coral design distinct from other Cecil-IA Labs sites. Ensure keyboard access, readable contrast, responsive grid and working search/category/selection/copy actions.
- The displayed Unicode symbols are illustrative. Never claim actual Semantic UI React glyph rendering or real library benchmark results.
- Do not modify package runtime, npm metadata, peer dependencies, library tests or CI merely to update the showroom.
- Run `node --test showcase/tests/smoke.test.mjs`, validate mobile layout, canonical URL and npm/source links.
- Deploy solely after maintainer authorization using the manual `workflow_dispatch`; do not add push-triggered deploys or paid runners.
