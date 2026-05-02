# Contributing

## CI requirements

All pull requests are validated by `.github/workflows/ci.yml` with a Node LTS matrix.

Required checks:

- `Verify (Node 22)`
- `Verify (Node 24)`
- `Branch Protection Gate`

To enforce branch protection, configure your repository rules (Rulesets or Branch protection for `main`/`master`) to require all checks above before merge.

## Local validation before opening a PR

Run the same commands locally:

```bash
npm ci
npm run test:lint
npm run typecheck
npm run test:unit -- --watchAll=false
npm run build
```

## Safe release process

Releases are automated by `.github/workflows/release.yml` and publish only when a GitHub Release is published or a `v*` tag is pushed.

### One-time setup

1. Add `NPM_TOKEN` in repository secrets with publish permission for this package.
2. (Recommended) Use a protected `npm-publish` environment and require reviewer approval.
3. Protect `main`/`master` and require CI checks before creating release tags.

### Release steps

1. Ensure the target commit is merged and CI is green.
2. Bump version locally (`npm version patch|minor|major`).
3. Push commit and tag (`git push && git push --tags`).
4. Publish a GitHub Release for the tag (or rely on pushed tag trigger).
5. Confirm the `Release / Publish to npm` workflow succeeded.

### Security notes

- Never print or commit `NPM_TOKEN`.
- Prefer npm automation tokens scoped only to package publish.
- Revoke and rotate token immediately if exposed.
