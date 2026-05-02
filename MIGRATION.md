# MIGRATION

## v1.x → launch atual

Esta versão consolida a API pública em dois componentes nomeados:

- `IconDropdown`
- `IconPickerModal`

## Principais mudanças

1. **Imports explícitos por componente**
   - Use imports nomeados a partir do pacote principal.
2. **Remoção de API legada baseada em `IconPicker`**
   - Se seu código ainda usa `IconPicker`, migre para `IconDropdown` ou `IconPickerModal` de acordo com o UX esperado.
3. **Exemplos e documentação em TypeScript**
   - As assinaturas de props passam a ser documentadas com tipos TypeScript.

## Antes e depois

### Antes (legado)

```jsx
import { IconPicker } from 'semantic-ui-react-icon-picker'

<IconPicker value={icon} onChange={setIcon} />
```

### Depois (dropdown)

```tsx
import { IconDropdown } from 'semantic-ui-react-icon-picker'

<IconDropdown value={icon} onChange={setIcon} />
```

### Depois (modal)

```tsx
import { IconPickerModal } from 'semantic-ui-react-icon-picker'

<IconPickerModal value={icon} onChange={setIcon} />
```

## Checklist de migração

- [ ] Substituir `IconPicker` por `IconDropdown` ou `IconPickerModal`.
- [ ] Garantir import de `dist/index.css` no app consumidor.
- [ ] Revisar tipagem de `onChange` (`string | undefined` no dropdown; `string` no modal ao selecionar).
- [ ] Validar integração com versão atual de `semantic-ui-react`.
