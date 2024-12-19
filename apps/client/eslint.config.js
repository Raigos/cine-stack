export default {
  root: true,
  "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',  // Not needed in React 17+
    'react/prop-types': 'off',          // We're using TypeScript instead
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['dist', 'build', '*.config.js', '*.config.ts']
};