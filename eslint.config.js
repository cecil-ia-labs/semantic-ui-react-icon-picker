const js = require('@eslint/js')
const globals = require('globals')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

module.exports = [
  { ignores: ['node_modules/**', '.github/**', 'coverage/**', 'dist/**', '**/*.md'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node, ...globals.jest }
    },
    plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin },
    settings: { react: { version: '16' } },
    rules: { 'no-unused-vars': 'off' }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node, ...globals.jest }
    },
    plugins: { '@typescript-eslint': tsPlugin, react: reactPlugin, 'react-hooks': reactHooksPlugin },
    settings: { react: { version: '16' } },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error'
    }
  }
]
