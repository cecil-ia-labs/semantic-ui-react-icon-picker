# Semantic UI React Icon Picker

**Languages:** [English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Italiano](README.it.md)

**Find your icon. Keep your flow.** A typed icon-selection toolkit for React applications built with Semantic UI React, independently maintained by Cecil-IA Labs.

**[Explore the interactive showroom](https://cecil-ia-labs.github.io/semantic-ui-react-icon-picker/)** · **[npm package](https://www.npmjs.com/package/@cecilialabs/semantic-ui-react-icon-picker)** · **[Source](https://github.com/cecil-ia-labs/semantic-ui-react-icon-picker)**

## What you can build

- **IconDropdown:** a searchable, clearable dropdown for settings, forms and property editors.
- **IconPickerModal:** a modal with search and progressively loaded icon choices.
- **Controlled React state:** select an icon by name; the dropdown sends `undefined` when its value is cleared.

## Get started

```bash
npm install @cecilialabs/semantic-ui-react-icon-picker
```

Install compatible React, React DOM and `semantic-ui-react` in the host application. Consult [package.json](package.json) and the [migration guide](MIGRATION.md) for tested combinations.

```tsx
import { useState } from 'react';
import { IconDropdown, IconPickerModal } from '@cecilialabs/semantic-ui-react-icon-picker';
import '@cecilialabs/semantic-ui-react-icon-picker/dist/index.css';

export function IconSetting() {
  const [icon, setIcon] = useState<string | undefined>('star');
  return (
    <>
      <IconDropdown value={icon} onChange={setIcon} />
      <IconPickerModal value={icon} onChange={setIcon} />
    </>
  );
}
```

The public props are defined in `src/IconDropdown.types.ts` and `src/IconPickerModal.types.ts`. Read the [original technical documentation](docs/README.legacy.pt-BR.md) for detailed examples and compatibility notes.

## Status and releases

The `1.x` package is an independently maintained TypeScript fork with tests and a compatibility CI matrix. For behavior changes consult the [changelog](CHANGELOG.md), [contribution guide](CONTRIBUTING.md) and [migration notes](MIGRATION.md). The static showroom is a visual interaction preview; it does **not** run or benchmark the compiled React library.

## Open source and provenance

Based on [Sam Knutson’s original MIT-licensed icon picker](https://github.com/samuel-knutson/semantic-ui-react-icon-picker), with subsequent maintenance and improvements by Cecil-IA Labs and contributors. The original copyright and license are preserved in [LICENSE](LICENSE) and [NOTICE](NOTICE.md). Adaptation, redistribution and commercial reuse remain permitted under the MIT terms.

**For contributors and agents:** start with [AGENTS.md](AGENTS.md), the local [skills](.agents/skills/), and [architecture baseline](docs/architecture-baseline.md). Showroom publication is manual-only.
