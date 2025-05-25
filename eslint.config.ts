import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import tslint from 'typescript-eslint';

export default tslint.config(
  eslint.configs.recommended,
  tslint.configs.recommended,
  react.configs['recommended-typescript'],
  ...astro.configs['flat/recommended'],
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      'react/no-unescaped-entities': 'off',
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
          ignore: ['^routeTree\\.gen\\.ts$', '^Icon(.*)\\.tsx'],
        },
      ],
    },
  }
);
