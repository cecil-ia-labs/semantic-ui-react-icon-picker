# Architecture Baseline

## 1) Visão geral dos módulos em `src/`

- **`src/index.js`**: ponto de entrada público do pacote. Reexporta os dois componentes principais consumidos por aplicações cliente (`IconDropdown` e `IconPickerModal`).
- **`src/IconDropdown.js`**: componente funcional controlado para seleção de ícones via `Dropdown` do `semantic-ui-react`, com busca embutida da própria UI do dropdown.
- **`src/IconPickerModal.js`**: componente de classe que abre um `Modal` com busca e paginação incremental (`InfiniteScroll`) para seleção visual de ícones.
- **`src/icons.js`**: catálogo estático (`icons`) com os nomes de ícones suportados pelo Semantic UI.
- **`src/styles.module.css`**: estilos locais para composição visual do dropdown e itens de ícone.
- **`src/*.test.js` + `src/setupTests.js`**: cobertura de testes unitários/comportamentais dos componentes React.

## 2) Contratos públicos (exports e props)

## Exports públicos

A API pública atual do pacote é composta por dois named exports:

- `IconDropdown`
- `IconPickerModal`

> Observação: o README ainda exemplifica `IconPicker`, mas o entrypoint atual não exporta esse símbolo. Isso é um desvio entre documentação e implementação que deve ser tratado como bug de contrato.

## Props públicas

### `IconDropdown`

- **`value?: string`**
  - Nome do ícone selecionado (componente controlado).
- **`onChange?: (value: string | undefined) => void`**
  - Callback disparado no `Dropdown.onChange`; recebe apenas o valor selecionado, não o evento original.
  - Também é acionado quando o usuário limpa a seleção (`clearable`), podendo receber `undefined`.

### `IconPickerModal`

- **`value?: string`**
  - Ícone atual usado para renderizar o botão gatilho (ícone atual vs texto “Select Icon”).
- **`onChange?: (value: string) => void`**
  - Callback acionado ao clicar em um ícone dentro do modal.
  - Após seleção, o modal é fechado e estado interno é resetado.

## 3) Fluxos de dados

## 3.1 Fluxo `value` / `onChange`

1. Consumidor externo mantém estado da seleção (ex.: `const [icon, setIcon] = useState(...)`).
2. `value` entra como prop em `IconDropdown` ou `IconPickerModal`.
3. Interação do usuário dispara `onChange` interno do componente.
4. Componente repassa o novo valor por callback (`onChange && onChange(...)`).
5. Consumidor atualiza seu estado e re-renderiza o componente com novo `value`.

**Natureza do estado:**
- `IconDropdown` é praticamente stateless/controlado (estado no consumidor).
- `IconPickerModal` mistura contrato controlado (`value`) com estado de UI interno (`open`, `filteredIcons`, `limit`).

## 3.2 Fluxo de busca

### `IconDropdown`
- Busca delegada ao `Dropdown search` do Semantic UI.
- Lista de opções é recriada a cada render a partir de `icons.map(...)`.

### `IconPickerModal`
- Busca local em memória sobre `allIcons` em `onSearch`.
- Implementação usa `icon.match(query)` (regex implícita via string), o que:
  - faz match parcial,
  - é case-sensitive,
  - pode quebrar para entradas que formem regex inválida.
- Após filtrar, o `limit` é reajustado para evitar estado inconsistente de paginação.

## 3.3 Fluxo de seleção

### `IconDropdown`
- Usuário escolhe item no dropdown.
- `Dropdown.onChange` extrai `{ value }` e repassa ao callback externo.

### `IconPickerModal`
- Usuário abre modal via botão trigger.
- Seleciona ícone (botão dentro do grid).
- Componente chama `onChange(icon)` e em seguida `close()`.
- `close()` reseta `open`, `filteredIcons` e `limit` para baseline.

## 4) Riscos técnicos

## 4.1 Dependências antigas / obsolescência

- Stack presa em versões antigas de React 16 / `react-scripts` 3 / `semantic-ui-react` 0.88.
- Ferramental de build/test/lint desatualizado aumenta risco de incompatibilidade com Node e ecossistema atual.
- `microbundle-crl` e cadeia ESLint antiga tendem a gerar fricção em upgrades futuros.

## 4.2 Acoplamentos

- Catálogo de ícones (`icons.js`) é estático e fortemente acoplado à nomenclatura do Semantic UI; mudanças upstream exigem manutenção manual.
- Componentes dependem diretamente de `semantic-ui-react` (sem camada de adaptação), dificultando troca de biblioteca UI.
- `IconPickerModal` centraliza múltiplas responsabilidades (abertura modal, busca, paginação, seleção), reduzindo coesão.

## 4.3 Pontos de quebra

- **Inconsistência de documentação:** README menciona export inexistente (`IconPicker`).
- **Busca via regex implícita (`match`)**: entrada do usuário pode causar comportamento inesperado ou erro com padrões inválidos.
- **Escalabilidade de renderização:** `IconDropdown` reconstrói todas opções em cada render; pode impactar performance com listas extensas.
- **Contratos não tipados:** ausência de TypeScript/PropTypes facilita regressões silenciosas em props.
- **Cobertura de testes provavelmente limitada a fluxos felizes** (risco em edge cases de busca, clear/reset e paginação).

## 5) Backlog inicial priorizado (impacto x esforço)

| Prioridade | Item | Impacto | Esforço | Justificativa |
|---|---|---:|---:|---|
| P0 | Corrigir contrato público no README (usar `IconDropdown`/`IconPickerModal` ou criar alias `IconPicker`) | Alto | Baixo | Evita uso incorreto imediato da lib. |
| P0 | Trocar `match(query)` por busca segura (`includes`, normalização case-insensitive e escape) | Alto | Baixo | Remove risco de quebra por regex e melhora UX. |
| P1 | Adicionar validação de props (PropTypes) ou migrar API pública para TS | Alto | Médio | Reduz regressões e formaliza contrato. |
| P1 | Extrair lógica de busca/paginação de `IconPickerModal` para util/hook testável | Médio | Médio | Diminui acoplamento e facilita manutenção. |
| P1 | Melhorar testes para edge cases (limpar seleção, query vazia/especial, limites de paginação) | Alto | Médio | Aumenta confiabilidade nas interações críticas. |
| P2 | Introduzir memoização de opções no dropdown (ou virtualização se necessário) | Médio | Médio | Melhora performance em renders frequentes. |
| P2 | Planejar atualização gradual de dependências base (React / semantic-ui-react / tooling) | Alto | Alto | Mitiga dívida técnica estrutural e riscos de segurança/ecossistema. |

## 6) Recomendações de evolução arquitetural

- Definir explicitamente um **modelo de componente controlado** comum entre dropdown e modal (mesmo shape de callback e semântica de `undefined/null`).
- Criar uma camada de domínio para catálogo e busca (`iconCatalog`, `filterIcons`) separando UI de lógica.
- Estabelecer baseline de qualidade com:
  - contrato público documentado e validado em teste,
  - matriz mínima de compatibilidade de peer dependencies,
  - estratégia de versionamento semântico para mudanças de API.
