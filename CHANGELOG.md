# Changelog

## [1.0.1] - 2026-05-02

### Changed
- Applied dependency remediation sweep in chronological advisory order (oldest to newest) and regenerated lockfile for deterministic installs.
- Updated development dependencies (`react`, `react-dom`, `cross-env`, `gh-pages`, `semantic-ui-react`) to current compatible ranges without changing React minimum support.
- Updated runtime dependency `react-infinite-scroll-component` to latest non-breaking 5.x.
- Expanded `semantic-ui-react` peer compatibility range to `>=2.0.0 <4.0.0-0` (v2 stable through v3 beta).

### Security
- Reduced unresolved Dependabot risk surface to toolchain-transitive advisories that currently have no safe non-breaking fix in `microbundle-crl` / CRA-era build chain; follow-up migration required for full closure.


## [1.0.0] - 2026-05-02

### Added
- Documentação completa de API para `IconDropdown` e `IconPickerModal` em `README.md`.
- Exemplos de uso em TypeScript para dropdown e modal.
- Seção de compatibilidade entre React e `semantic-ui-react`.
- Novo guia de migração em `MIGRATION.md`.
- Novo guia de contribuição em `CONTRIBUTING.md`.

### Changed
- README reorganizado para destacar instalação, API pública e documentação complementar.
