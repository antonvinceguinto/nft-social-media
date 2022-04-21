module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@next/next/recommended', 'airbnb', 'airbnb-typescript', 'next', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 1,
    'linebreak-style': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        '': 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
