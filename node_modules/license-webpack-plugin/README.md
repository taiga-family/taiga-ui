# License Webpack Plugin

[![Build Status](https://api.travis-ci.org/xz64/license-webpack-plugin.svg?branch=master)](https://travis-ci.org/xz64/license-webpack-plugin)

Manage third-party license compliance in your webpack build.

## Installation
`npm install license-webpack-plugin --save-dev`

## Usage

To use the plugin, simply add it to the plugins section in the webpack config.

Example:
```javascript
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
  plugins: [
    new LicenseWebpackPlugin()
  ]
};
```

The default behavior will add a license notice file to each chunk of the webpack build. In addition, it will add a banner indicating the path to the license notice file in any Javascript assets. Third party libraries imported via external tools like SASS `@import` may not appear in the output (since webpack does not process `@import`). If this issue happens, please specify additional modules that the plugin should scan.

To configure the plugin, check the [documentation](DOCUMENTATION.md).

## Build Instructions

```
yarn
yarn build
```

## Migration Guides

Migration guides for breaking changes are documented [here](MIGRATION.md).

## Changelog

The changelog can be found [here](CHANGELOG.md).

## License
[ISC](https://opensource.org/licenses/ISC)
