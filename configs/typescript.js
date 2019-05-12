module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 0, // typescript will handle this so no need for it

    'no-unused-vars': 2,
    '@typescript-eslint/no-unused-vars': 2,

    'no-use-before-define': 2,
    '@typescript-eslint/no-use-before-define': 2,

    '@typescript-eslint/no-explicit-any': 2,
  },
};
