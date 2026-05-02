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
