### `@taiga-ui/eslint-plugin`

`.eslintrc.js`

```js
module.exports = {
  root: true,
  extends: [
    //...
    'plugin:@taiga-ui/eslint-plugin/taiga',
    // Optional:
    'plugin:@taiga-ui/eslint-plugin/no-restricted-syntax',
    'plugin:@taiga-ui/eslint-plugin/typescript',
    'plugin:@taiga-ui/eslint-plugin/ng',
    'plugin:@taiga-ui/eslint-plugin/cypress',
    'plugin:@taiga-ui/eslint-plugin/naming-convention',
    'plugin:@taiga-ui/eslint-plugin/off',
  ],
};
```
