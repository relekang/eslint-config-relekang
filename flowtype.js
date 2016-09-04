/* eslint-disable quote-props */
module.exports = {
  'plugins': ['flowtype', 'flow-typed'],
  'rules': {
    'flowtype/define-flow-type': 1,
    'flowtype/require-valid-file-annotation': 1,
    'flowtype/space-after-type-colon': [1, 'always'],
    'flowtype/space-before-type-colon': [1, 'never'],
    'flowtype/space-before-generic-bracket': [1, 'never'],
    'flowtype/union-intersection-spacing': [1, 'always'],
    'flowtype/generic-spacing': [1, 'never'],
    'flowtype/type-id-match': [1, '^([A-Z][a-z0-9]+)+'],
    'flowtype/valid-syntax': 2,
    'flowtype/use-flow-type': 1,
  },
};
