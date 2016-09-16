/* eslint-disable quote-props */
const assign = require('lodash/assign');

const base = require('./index');

module.exports = {
  'extends': ['eslint-config-airbnb'],
  'plugins': ['react'],
  'rules': assign({}, base.rules, {
    'react/jsx-curly-spacing': [2, 'never', { 'allowMultiline': true }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'react/sort-prop-types': [2, {
      'callbacksLast': true,
      'ignoreCase': true,
      'requiredFirst': false,
    }],
  }),
};
