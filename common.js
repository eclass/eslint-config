module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:array-func/all',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['promise', 'security', 'eslint-comments', 'array-func', 'sonarjs'],
  rules: {
    'no-console': 'error',
    'no-nested-ternary': 'error',
    'require-await': 'error',
  },
  globals: {
    PromiseLike: 'readonly',
  },
}
