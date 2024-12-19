import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, prettier, {
  ignores: ['dist', 'build', '*.config.js', '*.config.ts'],
  files: ['**/*.ts'],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    // Strict type checking
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // General
    'no-console': 'error',
    eqeqeq: ['error', 'always'],
  },
})
