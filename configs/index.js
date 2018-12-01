module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    modules: true,
    sourceType: 'module',
  },
  globals: {
    Promise: false,
  },
  rules: {
    'eslint-comments/no-unused-disable': 2,
    'prettier/prettier': [2, { singleQuote: true, trailingComma: 'es5' }],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
};
