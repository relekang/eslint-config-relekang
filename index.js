/* eslint-disable quote-props */
module.exports = {
  'extends': [
    'eslint-config-airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'plugins': ['import'],
  'rules': {
    'max-len': [2, 100, 2, { 'ignorePattern': '(^import)|(^} from)' }],
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-duplicate-imports': [0],
    'import/no-duplicates': [2],
  },
};
