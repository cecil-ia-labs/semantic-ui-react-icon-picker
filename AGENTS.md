# AGENTS.md — semantic-ui-react-icon-picker

Este documento define instruções operacionais locais para agentes (humanos e IA) neste repositório. Ele **estende e concretiza** as instruções globais recebidas no prompt, sem substituí-las.

## 1) Objetivos do projeto e escopo funcional

### Objetivo
Fornecer um componente de seleção de ícones para o ecossistema `semantic-ui-react`, com foco em:
- experiência de uso simples para desenvolvedores,
- comportamento previsível em produção,
- integração fácil em aplicações React.

### Escopo funcional
Inclui:
- renderização de lista/grade de ícones suportados,
- busca/filtragem de ícones,
- seleção e retorno do valor selecionado,
- API pública estável do componente,
- exemplo de uso para validação manual.

Fora de escopo (salvo demanda explícita):
- redesign visual completo da biblioteca,
- backend dedicado,
- funcionalidades não relacionadas ao picker de ícones.

---

## 2) Lista de skills com critérios de uso

Ao iniciar qualquer tarefa, selecionar o **menor conjunto suficiente** de skills.

- **imagegen**
  - Usar quando houver necessidade de criar/editar assets raster (mockups, imagens, previews).
  - Não usar para mudanças puramente de código/componente.
- **openai-docs**
  - Usar apenas para dúvidas sobre produtos/APIs OpenAI, priorizando documentação oficial.
- **plugin-creator**
  - Usar para criar/estruturar plugins e metadados `.codex-plugin`/marketplace.
- **skill-creator**
  - Usar para desenhar nova skill quando faltar padrão reutilizável.
- **skill-installer**
  - Usar para instalar skills do catálogo/repositórios quando necessário ao fluxo.

Se nenhuma skill for adequada, seguir execução padrão com diff mínimo e registrar sugestão de nova skill.

---

## 3) Lista de MCP servers e prioridades de consulta

Quando MCP estiver disponível, seguir esta ordem:

1. **Servidores oficiais/documentação primária do domínio** (maior prioridade).
2. **Servidores específicos do projeto/repositório** (schemas, recursos locais, contexto interno).
3. **Outras fontes internas já carregadas na sessão**.
4. **Web externa** apenas quando necessário para dados atuais ou lacunas.

Regras:
- Preferir fontes primárias para decisões técnicas.
- Em conflito, documentar decisão e racional.
- Se faltar mapeamento MCP para dependência crítica, registrar recomendação de criação de servidor/mapeamento.

---

## 4) Estrutura de subagents (papéis, responsabilidades, handoff)

Quando houver orquestração multiagente, usar papéis claros:

- **Planner (coordenação)**
  - Decompõe tarefa, define sequência e critérios de aceite.
- **Implementer (código)**
  - Executa mudanças mínimas e preserva comportamento.
- **Validator (qualidade)**
  - Roda lint/typecheck/testes e evidencia resultados.
- **Reviewer (consistência)**
  - Verifica aderência às instruções globais + locais e risco.

### Handoff padrão
1. Planner cria plano curto e escopo.
2. Implementer entrega patch + notas de impacto.
3. Validator executa checks e reporta status.
4. Reviewer consolida, aprova retorno final e próximos passos.

Nenhum handoff deve omitir:
- contexto,
- arquivos alterados,
- comandos executados,
- riscos e rollback (quando aplicável).

---

## 5) Política de autorização (merge, publish, approve)

Diretriz padrão deste repositório:
- **Agent/Codex não faz merge direto em branch protegida**.
- **Agent/Codex pode propor commit e abrir PR** com contexto completo.
- Aprovação e merge devem ser feitos por **maintainer humano autorizado**.
- Publicação (release/npm) exige aprovação explícita de maintainer.

Fluxo recomendado:
1. Commit atômico e rastreável.
2. PR com resumo técnico, validações e riscos.
3. Aprovação humana.
4. Merge e publish por mantenedor com permissão.

---

## 6) Regras de atualização contínua do `PLAN.md`

Sempre que `PLAN.md` existir, mantê-lo atualizado com:
- objetivo,
- status por etapa (`pending`, `in_progress`, `completed`),
- decisões e pendências.

Quando `PLAN.md` **não existir**:
- recomendar criação ao identificar tarefa com múltiplas etapas,
- registrar no PR/commit que a criação foi recomendada.

Atualizar `PLAN.md` em marcos:
- antes de iniciar implementação,
- após mudanças relevantes de escopo,
- após validações,
- ao concluir tarefa.

---

## 7) Alinhamento explícito com instruções globais

Este arquivo está explicitamente alinhado ao documento **GLOBAL AGENT — OPERATING SYSTEM** fornecido pelo usuário.

Compromissos mandatórios neste repositório:
- descobrir contexto antes de alterar,
- aplicar skills quando pertinentes,
- priorizar correção, segurança e reprodutibilidade,
- produzir diffs mínimos e sem refatoração não relacionada,
- validar com lint/typecheck/testes (ou informar comandos quando indisponíveis),
- evitar ambiguidade em instruções e resultados,
- registrar riscos e plano de rollback em mudanças de maior impacto.

Em caso de conflito, prevalece a hierarquia:
1. instruções de sistema/desenvolvedor/usuário da sessão,
2. este `AGENTS.md`,
3. demais documentos locais.

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
