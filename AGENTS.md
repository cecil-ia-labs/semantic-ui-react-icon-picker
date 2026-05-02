# AGENTS

## Branching strategy

- Use `develop` as the integration branch.
- Start all implementation work from `develop`.

## Branch naming

- `feat/*` for features.
- `fix/*` for bug fixes.
- `chore/*` for maintenance and non-feature changes.

## Pull Request policy

Before any merge into `develop`, require all of the following:

1. Pull Request is open (no direct pushes/merges).
2. At least one PR review approval.
3. CI checks are green.

## Expected workflow

1. Update local `develop`.
2. Create branch using `feat/*`, `fix/*`, or `chore/*`.
3. Implement minimal scoped changes.
4. Open PR targeting `develop`.
5. Merge only after review approval + green CI.
