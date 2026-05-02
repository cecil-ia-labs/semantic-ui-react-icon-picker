# Release runbook

Este projeto mantém **controle manual de publicação** para alinhar com a política de governança do repositório (aprovação humana + CI verde antes de merge em `develop`).

## Modelo adotado

- Trigger de publicação: **GitHub Release `published`** (workflow `.github/workflows/release.yml`).
- Publicação **não é automática em `push` para `main`**.
- A criação da GitHub Release após versionamento/tag é responsabilidade de um **maintainer autorizado**.

## Pré-requisitos de governança

1. Merge em `develop` apenas via PR aberta.
2. Pelo menos uma aprovação de review.
3. CI verde.
4. Tag/versionamento aprovados por maintainers.
5. Somente maintainer com permissão cria a GitHub Release para disparar o publish.

## Passo a passo

1. Atualize a versão no `package.json` conforme estratégia semver.
2. Abra PR com mudanças de release (incluindo changelog/documentação).
3. Garanta aprovação humana + CI verde.
4. Faça merge no fluxo oficial do repositório.
5. Crie e publique uma tag `vX.Y.Z`.
6. Crie a GitHub Release apontando para essa tag.
7. A publicação no npm será disparada automaticamente pelo evento `release.published`.

## Safeguards do workflow de release

O workflow executa os seguintes bloqueios/verificações antes do publish real:

1. `npm ci`
2. `npm run test`
3. `npm run build`
4. `npm audit --omit=dev` (checagem de segurança em dependências de produção)
5. `npm publish --dry-run` (validação do pacote que será publicado)
6. Guard de versão: só publica se a versão ainda não existir no npm
7. Publish real com `npm publish --provenance` (proveniência via OIDC)

## Rollback e incidentes

- Se a publicação falhar antes do publish real, corrigir no branch e criar nova Release.
- Se versão já existir, o guard impede duplicação; incremente versão e gere nova tag/release.
- Em incidente pós-publicação, publicar patch release (`vX.Y.Z+1`) com correção e notas claras.
