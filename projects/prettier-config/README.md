# @taiga-ui/prettier-config

Common Prettier configuration for taiga-ui projects. Compatible with taiga-ui eslint configs.

## Usage

1. Install from npm

```bash
npm i --save-dev @taiga-ui/prettier-config
```

1. Create `.prettierrc.js` at project root

```js
module.exports = require('@taiga-ui/prettier-config');
```

More information about available at
[prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

### Available presets

- **angular**

```json5
{
  // ...
  prettier: '@taiga-ui/prettier-config/angular',
}
```
