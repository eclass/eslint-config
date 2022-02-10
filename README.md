# @eclass/eslint-config

[![npm](https://img.shields.io/npm/v/@eclass/eslint-config.svg)](https://www.npmjs.com/package/@eclass/eslint-config)
![Node.js CI](https://github.com/eclass/eslint-config/workflows/Node.js%20CI/badge.svg)
[![downloads](https://img.shields.io/npm/dt/@eclass/eslint-config.svg)](https://www.npmjs.com/package/@eclass/eslint-config)
[![dependencies Status](https://david-dm.org/eclass/eslint-config/status.svg)](https://david-dm.org/eclass/eslint-config)
[![devDependencies Status](https://david-dm.org/eclass/eslint-config/dev-status.svg)](https://david-dm.org/eclass/eslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/eclass/eslint-config/peer-status.svg)](https://david-dm.org/eclass/eslint-config?type=peer)

> This package provides eclass eslint shareable config.

## Plugins and Configuration included

- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-array-func](https://www.npmjs.com/package/eslint-plugin-array-func)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/about-npm/).

### JS projects

```
npm i -D eslint @eclass/eslint-config eslint-plugin-{array-func,eslint-comments,import,jsdoc,n,promise,security,sonarjs,standard}
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@eclass"
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
