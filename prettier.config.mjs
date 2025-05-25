/** @type {import("prettier").Config} */
const config = {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  importOrder: [
    '^astro(:|-|/)', // Astro built-in
    '^@astro',
    '',
    '^react$', // React
    '^react-dom$', // React DOM
    '^react/jsx-runtime$', // JSX runtime
    '',
    '<THIRD_PARTY_MODULES>', // External packages (e.g., lodash, axios)
    '',
    '^@/(lib|hooks)',
    '^@/',
    '',
    '^[./]', // Relative imports
    '',
    '.(css|scss|sass|less|png|jpg|jpeg|svg|webp|gif)$', // CSS and assets
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
