A template for fresh starting out a fresh project. Plugins: NextJS, Typescript, Airbnb Eslint TS, Prettier, Husky, TailwindCSS

## Getting Started

Nothing fancy, just install the needed libraries after cloning the repo:

```bash
~$ npm i
```

## What's inside the template?

- **NextJS** - to have an optimized out-of-the-box website
- **Typescript** - preferred over JS. This reduces bugs that may occur on production
- **Airbnb ESLint** - to apply code styling of airbnb & consistency
- **Prettier** - for code consistency
- **Husky** - for pre-commit hooks
- **TailwindCSS** - preferred styling

## Install and setup manually

1) Install the needed dependencies
```bash
~$ npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
```
2) Initialize ESLint. Customize the settings w/ your preffered coding style
```bash
~$ eslint --init
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb      
√ What format do you want your config file to be in? · JavaScript
```
3) Setup prettier
```bash
// .prettierrc
{
  "endOfLine": "lf",
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "singleQuote": true,
  "jsxSingleQuote": true
}

// .prettierignore
.next
next-env.d.ts
node_modules
yarn.lock
package-lock.json
public
.vscode
README.md
```
4) Add some rules to your .eslint
```bash
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:@next/next/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
 +   'no-console': 1,
 +   'import/no-unresolved': 0,
 +   'import/extensions': [
 +     'error',
 +     'ignorePackages',
 +     {
 +       ts: 'never',
 +       tsx: 'never',
 +       js: 'never',
 +       jsx: 'never',
 +       '': 'never',
 +     },
 +   ],
 +   'jsx-quotes': [2, 'prefer-single'],
 +   'react/jsx-filename-extension': [
 +     1,
 +     {
 +       extensions: ['.tsx', '.ts'],
 +     },
 +   ],
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
```

P.S.,
Customize these files at your own style. Goodluck soldier.

Author: http://antonguinto.com/
