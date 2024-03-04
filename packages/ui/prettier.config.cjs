/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tabWidth: 2,
  useTabs: false,
  semi: true,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  endOfLine: 'lf',
  arrowParens: 'always',
};
