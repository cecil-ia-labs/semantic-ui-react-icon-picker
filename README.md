# semantic-ui-react-icon-picker

> Icon picker component for use with semantic-ui-react

[![NPM](https://img.shields.io/npm/v/semantic-ui-react-icon-picker.svg)](https://www.npmjs.com/package/semantic-ui-react-icon-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save semantic-ui-react-icon-picker
```

## Usage

```jsx
import React, { useState } from 'react';
import { IconPicker } from 'semantic-ui-react-icon-picker';
import 'semantic-ui-react-icon-picker/dist/index.css';

const Example = () => {
  const [icon, setIcon] = useState();
  return <IconPicker value={icon} onChange={setIcon} />;
};
```

## License

MIT © [Sam Knutson](https://github.com/samuel-knutson)


## CI and release

- CI runs lint, typecheck, tests, and build on Node LTS matrix via `.github/workflows/ci.yml`.
- Releases are published to npm via `.github/workflows/release.yml` using `NPM_TOKEN`.
- See `CONTRIBUTING.md` for branch protection gates and the secure release runbook.
