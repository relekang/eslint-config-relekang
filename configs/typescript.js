module.exports = {
  plugins: ['typescript'],
  rules: {
    'no-undef': 0, // typescript will handle this so no need for it

    'no-unused-vars': 2,
    'typescript/no-unused-vars': 2,

    'no-use-before-define': 2,
    'typescript/no-use-before-define': 2,

    'typescript/no-explicit-any': 2,
  },
};
