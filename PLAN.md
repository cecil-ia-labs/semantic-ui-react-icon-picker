# PLAN

## 1) Visão trimestral

### Q2 2026 (Abr–Jun)
- Estabilizar o componente `IconPicker` para uso em produção.
- Melhorar experiência de desenvolvimento (docs, exemplos e fluxo de release).
- Garantir previsibilidade de manutenção com governança clara de tarefas.

### Q3 2026 (Jul–Set)
- Expandir cobertura de testes e qualidade contínua.
- Evoluir acessibilidade e UX do seletor de ícones.
- Consolidar roadmap de integrações e melhoria de performance.

## 2) Milestones (launch e pós-launch)

### Launch milestone
- [ ] Publicar versão estável com documentação revisada.
- [ ] Validar build e distribuição do pacote.
- [ ] Confirmar checklist de qualidade mínima (lint, testes e smoke test).
- Target date: 2026-06-030

### Pós-launch milestone
- [ ] Coletar feedback de usuários e issues.
- [ ] Priorizar correções críticas e melhorias de curto prazo.
- [ ] Publicar patch release com ajustes pós-lançamento.
- Target date: 2026-08-155

## 3) Checklist por tarefa (owner + status)

| Tarefa | Owner | Status | Prazo |
|---|---|---|---|
| Revisar documentação principal | @maintainer | In Progress | 2026-05-15 |
| Definir critérios de release | @maintainer | Todo | 2026-05-20 |
| Executar checklist de launch | @release-manager | Todo | 2026-06-25 |
| Monitorar feedback pós-launch | @product-owner | Todo | 2026-07-15 |
| Entregar patch pós-launch | @maintainer | Todo | 2026-08-15 |

## 4) Recently completed

> Registre aqui itens concluídos em ordem cronológica reversa.

- 2026-05-02 — Implementada matriz explícita de compatibilidade na CI (smoke/full), com exclusões de combinações não suportadas e atualização da tabela de compatibilidade no README para refletir exatamente a cobertura testada.
- 2026-05-02 — Atualizado targeting de cobertura/testes para incluir fontes e testes TypeScript/TSX no Jest (`collectCoverageFrom` e `test:unit`), com novo teste TS de descoberta em `src/`.
- 2026-05-02 — Alinhado `example/package.json` às referências de versões do `package.json` raiz, incluindo atualização de `semantic-ui-react` e sincronização de `resolutions`/`overrides`.
- 2026-05-02 — Executada rodada de atualização de dependências e lockfile para remediação Dependabot; registrada limitação de cadeia legada de build para advisories remanescentes.
- 2026-05-02 — Regenerado `package-lock.json` após remoção por conflitos; validado fluxo de geração com `npm install --package-lock-only --ignore-scripts --legacy-peer-deps`.
- 2026-05-02 — Criação inicial do `PLAN.md` com visão trimestral, milestones, checklist operacional e regra de atualização contínua.

- 2026-05-02 — Atualização de dependências diretas (dev/prod), regeneração de lockfile e nova rodada de `npm audit fix`; pendência remanescente documentada para cadeia legada `microbundle-crl`/`react-scripts`.

- 2026-05-02 — Migração de ESLint para flat config (ESLint 10) e ajustes de toolchain TS/testes para restaurar lint e typecheck após atualização de dependências.

## 5) Regra operacional

**Regra obrigatória:** a cada tarefa concluída, este arquivo **deve ser atualizado imediatamente** com:
1. mudança de status no checklist da tarefa;
2. registro na seção **Recently completed** com data no formato `YYYY-MM-DD`;
3. próximos passos (quando aplicável) para manter o plano executável.
