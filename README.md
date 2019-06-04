# @eclass/eslint-config

[![npm](https://img.shields.io/npm/v/@eclass/eslint-config.svg)](https://www.npmjs.com/package/@eclass/eslint-config)
[![Build Status](https://travis-ci.org/eclass/eslint-config.svg?branch=master)](https://travis-ci.org/eclass/eslint-config)
[![downloads](https://img.shields.io/npm/dt/@eclass/eslint-config.svg)](https://www.npmjs.com/package/@eclass/eslint-config)
[![dependencies](https://img.shields.io/david/eclass/eslint-config.svg)](https://david-dm.org/eclass/eslint-config)
[![devDependency Status](https://img.shields.io/david/dev/eclass/eslint-config.svg)](https://david-dm.org/eclass/eslint-config#info=devDependencies)

> This package provides eclass eslint shareable config.

## Plugins and Configuration included

- [eslint-config-jsdoc-strict](https://www.npmjs.com/package/eslint-config-jsdoc)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-array-func](https://www.npmjs.com/package/eslint-plugin-array)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/about-npm/).

```
npm i -D eslint @eclass/eslint-config
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@eclass"
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
