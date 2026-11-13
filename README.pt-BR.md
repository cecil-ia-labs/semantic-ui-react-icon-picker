# Semantic UI React Icon Picker

**Idiomas:** [English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md)

**Encontre seu ícone. Mantenha o ritmo.** Biblioteca tipada para escolher ícones em aplicações React com Semantic UI React, mantida de forma independente pela Cecil-IA Labs.

**[Explorar o showroom](https://cecil-ia-labs.github.io/semantic-ui-react-icon-picker/)** · **[Instalar no npm](https://www.npmjs.com/package/@cecilialabs/semantic-ui-react-icon-picker)** · **[Código-fonte](https://github.com/cecil-ia-labs/semantic-ui-react-icon-picker)**

## O que ela oferece

- **IconDropdown:** seleção pesquisável e limpável para formulários e configurações.
- **IconPickerModal:** busca em modal com carregamento progressivo das opções.
- **Estado controlado:** ao limpar o dropdown, `onChange` recebe `undefined`.

## Comece por aqui

```bash
npm install @cecilialabs/semantic-ui-react-icon-picker
```

Instale também versões compatíveis de React, React DOM e `semantic-ui-react`, conforme [package.json](package.json).

```tsx
import { useState, type ComponentProps } from 'react';
import { IconDropdown } from '@cecilialabs/semantic-ui-react-icon-picker';
import '@cecilialabs/semantic-ui-react-icon-picker/dist/index.css';

export function Seletor() {
  const [icon, setIcon] = useState<ComponentProps<typeof IconDropdown>['value']>('star');
  return <IconDropdown value={icon} onChange={setIcon} />;
}
```

Mais exemplos e tabela de compatibilidade estão na [documentação técnica preservada](docs/README.legacy.pt-BR.md). Consulte também [CHANGELOG](CHANGELOG.md), [MIGRATION](MIGRATION.md) e [CONTRIBUTING](CONTRIBUTING.md).

## Estado e licenciamento

Fork TypeScript mantido independentemente, com testes e matriz CI. O showroom demonstra o conceito de UX, não executa o componente npm real. A obra original é de [Sam Knutson](https://github.com/samuel-knutson/semantic-ui-react-icon-picker); melhorias posteriores são mantidas pela Cecil-IA Labs e colaboradores. Os avisos de autoria originais são preservados em [LICENSE](LICENSE) e [NOTICE](NOTICE.md), sob licença MIT.

**Para agentes e desenvolvedores:** [AGENTS.md](AGENTS.md), [skills específicas](.agents/skills/), [arquitetura](docs/architecture-baseline.md).
