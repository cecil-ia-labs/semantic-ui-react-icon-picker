# Contributing

Obrigado por contribuir com o `semantic-ui-react-icon-picker`.

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
