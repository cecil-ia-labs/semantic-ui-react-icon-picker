# semantic-ui-react-icon-picker

> Seletor de ícones para projetos React com `semantic-ui-react`.

[![NPM](https://img.shields.io/npm/v/semantic-ui-react-icon-picker.svg)](https://www.npmjs.com/package/semantic-ui-react-icon-picker)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação

```bash
npm install semantic-ui-react-icon-picker
```

Também é necessário ter `react`, `react-dom` e `semantic-ui-react` instalados no projeto.

## Uso rápido

```tsx
import { useState } from 'react'
import { IconDropdown } from 'semantic-ui-react-icon-picker'
import 'semantic-ui-react-icon-picker/dist/index.css'

type IconName = string | undefined

export function App() {
  const [icon, setIcon] = useState<IconName>()

  return (
    <IconDropdown
      value={icon}
      onChange={(nextIcon) => setIcon(nextIcon)}
    />
  )
}
```

## API

### `IconDropdown`

Dropdown pesquisável com todos os ícones disponíveis.

| Prop | Tipo | Obrigatória | Descrição |
| --- | --- | --- | --- |
| `value` | `string \| undefined` | Não | Ícone selecionado atualmente. |
| `onChange` | `(value: string \| undefined) => void` | Não | Chamado ao selecionar/limpar um ícone. |

**Comportamento**
- Renderiza um `Dropdown` com `search`, `clearable` e `selection`.
- Ao limpar, `onChange` recebe `undefined`.

### `IconPickerModal`

Modal com busca e rolagem infinita para escolha de ícone.

| Prop | Tipo | Obrigatória | Descrição |
| --- | --- | --- | --- |
| `value` | `string \| undefined` | Não | Ícone atual exibido no botão de trigger. |
| `onChange` | `(value: string) => void` | Não | Chamado ao selecionar um ícone no modal. |

**Comportamento**
- Botão trigger mostra o ícone atual (ou texto `Select Icon`).
- Campo de busca filtra por nome.
- Lista carrega em páginas durante o scroll.
- Ao selecionar, fecha o modal e chama `onChange`.

## Exemplos com TypeScript

### `IconDropdown` com formulário

```tsx
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { IconDropdown } from 'semantic-ui-react-icon-picker'

type FormState = {
  icon?: string
}

export function SettingsForm() {
  const [formState, setFormState] = useState<FormState>({})

  return (
    <Form>
      <Form.Field>
        <label>Ícone</label>
        <IconDropdown
          value={formState.icon}
          onChange={(icon) => setFormState((prev) => ({ ...prev, icon }))}
        />
      </Form.Field>
    </Form>
  )
}
```

### `IconPickerModal` com preview

```tsx
import { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { IconPickerModal } from 'semantic-ui-react-icon-picker'

export function IconChooser() {
  const [icon, setIcon] = useState<string | undefined>('rocket')

  return (
    <div>
      <p>
        Selecionado: {icon ? <Icon name={icon} /> : 'nenhum'}
      </p>
      <IconPickerModal
        value={icon}
        onChange={(nextIcon) => setIcon(nextIcon)}
      />
    </div>
  )
}
```

## Compatibilidade React e semantic-ui-react

| Biblioteca | Versões suportadas |
| --- | --- |
| `react` | `>=16.8` |
| `react-dom` | `>=16.8` |
| `semantic-ui-react` | `>=2.0.0` |

> Dica: valide também a compatibilidade entre sua versão de React e sua versão de `semantic-ui-react` no projeto consumidor.

## Documentação adicional

- [Migração](./MIGRATION.md)
- [Contribuição](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)
## Project Scope & Compatibility

### Package scope

This package provides a focused **icon picker component for `semantic-ui-react`** applications. The objective is to keep the component lightweight and easy to integrate while preserving compatibility with the `semantic-ui-react` icon ecosystem.

### Supported versions

Current compatibility is defined by the package `peerDependencies` and validated through the project toolchain.

| Package | Supported versions | Notes |
| --- | --- | --- |
| `react` | `^16.0.0` | Minimum supported major is React 16. |
| `semantic-ui-react` | `^0.88.2` | Targets the pre-1.0 API surface used by this project. |

### Known limitations

- The component is currently scoped to the icon set and behavior exposed by `semantic-ui-react`.
- No guarantee is currently provided for React 17+ or `semantic-ui-react` 1.x/2.x without explicit validation in this repository.
- This package does not include a design-system abstraction layer for non-Semantic UI libraries.

### Major version support policy

- **Current major (`1.x`)**: active support for bug fixes, docs, and compatibility updates.
- **Previous majors**: best-effort support only; critical fixes may be backported selectively.
- **Breaking changes** are released only in a new major version and must include migration notes in the changelog/README.

### Feature PR acceptance criteria

Feature pull requests are accepted when they:

1. Stay aligned with the package scope (icon picker for `semantic-ui-react`).
2. Preserve backward compatibility for the current major version, unless the PR is explicitly targeted for the next major.
3. Include tests (or a justified test strategy) covering new behavior.
4. Keep API surface minimal and clearly document new props/behavior in the README.
5. Avoid introducing heavy dependencies without clear maintenance and bundle-size justification.

## License

MIT © [Sam Knutson](https://github.com/samuel-knutson)
