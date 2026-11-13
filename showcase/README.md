# Icon Picker Lab — Static Showroom

A standalone, single-page UI preview, separate from the distributed React package.

Run locally with `python3 -m http.server --directory showcase 8000` and validate structure via `node --test showcase/tests/smoke.test.mjs`.

This preview uses illustrative Unicode stand-ins, **not Semantic UI React icon glyphs**. For the real components and compatibility checks install the scoped npm package and follow the repository README.

The workflow `.github/workflows/publish-showcase.yml` publishes `showcase/` only after **manual invocation**. Merging this branch does not auto-deploy or publish to npm.
