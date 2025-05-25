/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
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
