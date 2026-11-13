# Semantic UI React Icon Picker

**Lingue:** [English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md)

**Trova la tua icona. Mantieni il ritmo.** Libreria tipizzata per scegliere icone nelle applicazioni React con Semantic UI React, mantenuta indipendentemente da Cecil-IA Labs.

**[Esplora lo showroom](https://cecil-ia-labs.github.io/semantic-ui-react-icon-picker/)** · **[Pacchetto npm](https://www.npmjs.com/package/@cecilialabs/semantic-ui-react-icon-picker)** · **[Sorgenti](https://github.com/cecil-ia-labs/semantic-ui-react-icon-picker)**

## Cosa offre

- **IconDropdown:** scelta ricercabile e cancellabile per moduli e impostazioni.
- **IconPickerModal:** finestra di selezione con ricerca e caricamento progressivo delle opzioni.
- **Stato controllato:** cancellando il valore del dropdown, `onChange` riceve `undefined`.

## Per iniziare

```bash
npm install @cecilialabs/semantic-ui-react-icon-picker
```

Installa versioni compatibili di React, React DOM e `semantic-ui-react`, come indicato in [package.json](package.json).

```tsx
import { useState, type ComponentProps } from 'react';
import { IconDropdown } from '@cecilialabs/semantic-ui-react-icon-picker';
import '@cecilialabs/semantic-ui-react-icon-picker/dist/index.css';

export function Selettore() {
  const [icon, setIcon] = useState<ComponentProps<typeof IconDropdown>['value']>('star');
  return <IconDropdown value={icon} onChange={setIcon} />;
}
```

Per esempi dettagliati e matrice di compatibilità consulta la [documentazione tecnica originale](docs/README.legacy.pt-BR.md), [CHANGELOG](CHANGELOG.md), [MIGRATION](MIGRATION.md) e [CONTRIBUTING](CONTRIBUTING.md).

## Stato e licenza

Fork TypeScript mantenuto in modo indipendente, con test e matrice CI. Lo showroom è una dimostrazione visiva di UX, non esegue il componente npm reale. L'originale è di [Sam Knutson](https://github.com/samuel-knutson/semantic-ui-react-icon-picker); le modifiche successive sono mantenute da Cecil-IA Labs e collaboratori. L'autore originale e la licenza MIT sono riconosciuti in [LICENSE](LICENSE) e [NOTICE](NOTICE.md).

**Per sviluppatori e agenti:** [AGENTS.md](AGENTS.md), [skill di progetto](.agents/skills/), [architettura](docs/architecture-baseline.md).
