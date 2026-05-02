# CONTRIBUTING

Obrigado por considerar contribuir com `semantic-ui-react-icon-picker`.

## Setup local

```bash
npm install
npm test
```

## Fluxo recomendado

1. Crie uma branch a partir de `main`.
2. Faça mudanças pequenas e focadas.
3. Atualize testes e documentação quando necessário.
4. Execute checks locais antes de abrir PR.

## Checks locais

```bash
npm test
```

Se adicionar lint/typecheck no projeto, inclua os comandos nesta seção.

## Padrões de contribuição

- Preserve compatibilidade da API pública quando possível.
- Em mudanças de API, atualize:
  - `README.md`
  - `MIGRATION.md`
  - `CHANGELOG.md`
- Prefira nomes explícitos e diffs pequenos.

## Pull Requests

Inclua no PR:

- resumo da mudança
- motivação
- impacto de compatibilidade
- evidências de teste



## Estratégia de branches

- `develop` é a branch de integração contínua de funcionalidades.
- `main` (ou branch de release) deve receber apenas mudanças já validadas a partir de `develop`.

## Convenções de naming para branches

Crie branches curtas e descritivas a partir de `develop` usando os prefixos:

- `feat/*` para novas funcionalidades.
- `fix/*` para correções de bugs.
- `chore/*` para tarefas de manutenção (build, tooling, docs, CI etc.).

Exemplos:

- `feat/icon-search-keyboard-support`
- `fix/icon-picker-null-value`
- `chore/update-ci-node-version`

## Fluxo de contribuição

1. Atualize sua cópia local de `develop`.
2. Crie sua branch de trabalho com um dos prefixos (`feat/*`, `fix/*`, `chore/*`).
3. Faça commits pequenos e objetivos.
4. Abra Pull Request para `develop`.
5. Aguarde:
   - pelo menos 1 aprovação em review;
   - CI totalmente verde (todas as checks obrigatórias aprovadas).
6. Faça merge apenas após review aprovado e CI green.

## Regras de merge

- **Não** fazer merge direto em `develop` sem Pull Request.
- **Não** fazer merge com checks obrigatórias falhando.
- Preferir squash merge para manter histórico limpo.
- 