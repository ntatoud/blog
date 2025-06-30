import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default tslint.config(
  // Base config
  tslint.configs.recommended,
  eslint.configs.recommended,
  ...astro.configs['flat/recommended'],

  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: [
      react.configs['recommended-typescript'],
      reactHooks.configs['recommended-latest'],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  {
    rules: {
      'no-unreachable': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  }
);
