module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'jsdoc-strict',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:array-func/all',
    'plugin:sonarjs/recommended'
  ],
  plugins: [
    'promise',
    'security',
    'eslint-comments',
    'array-func',
    'sonarjs'
  ],
  rules: {
    'no-console': 'error',
    'require-await': 'error'
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        object: 'Object'
      }
    }
  },
  globals: {
    PromiseLike: 'readonly'
  }
}
