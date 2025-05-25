import astroParser from 'astro-eslint-parser';

import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import tslint from 'typescript-eslint';

export default tslint.config(
  // Base config
  tslint.configs.recommended,
  eslint.configs.recommended,
  ...astro.configs['flat/recommended'],

  // React + React Hooks rules, scoped to non-Astro files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@eslint-react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Unicorn rules (applied globally unless scoped)
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

  // Custom base rules (applied globally)
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
