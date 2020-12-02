# Migration Guide

## 1.x to 2.x
* The plugin no longer requires any explicit configuration. By default it will pick up all license types.
* The plugin no longer writes warnings/errors directly to console and instead reports warnings/errors to webpack.
* The `modulesDirectories` option defaults to null and requires full paths if specified. When `modulesDirectories` is null, third-party modules may be picked up from any directory.
* The following options have been removed:
  - `buildRoot` - The plugin can work reliably without this option having to be specified now. You can remove it from your configuration.
  - `suppressErrors` - Use the `stats` option on the plugin config instead to turn off warnings/errors.
  - `pattern` - Use the new `licenseInclusionTest` option instead.
  - `outputTemplate` - Use the new `renderLicenses` option instead.
  - `includePackagesWithoutLicense` - Use the new `licenseInclusionTest` option instead.
  - `unacceptablePattern` - Use the new `unacceptableLicenseTest` option instead.
  - `abortOnUnacceptableLicense` - The plugin will send an error to webpack whenever an unacceptable license is found. Use the new `handleUnacceptableLicense` option if you want to do something in addition to that.
  - `bannerTemplate` - Use the new `renderBanner` option instead.
  - `includedChunks` - Use the new `chunkIncludeExcludeTest` option instead.
  - `excludedChunks` - Use the new `chunkIncludeExcludeTest` option instead.
  - `additionalPackages` - Use the new `additionalChunkModules` or `additionalModules` option instead.
* Check the [documentation](DOCUMENTATION.md) for information on how to use the new options.

## 0.6.x to 1.x

* Change `require('license-webpack-plugin')` to `require('license-webpack-plugin').LicenseWebpackPlugin`.
* Change `includeUndefined` in the plugin options to `includePackagesWithoutLicense`.
* The following options have been removed: 
  - `addVersion` - Use the new `outputTemplate` option to configure an ejs template to be used for writing the output.
  - `addLicenseText` - Use the new `outputTemplate` option to configure an ejs template to be used for writing the output.
  - `addUrl` - Use the new `outputTemplate` option to configure an ejs template to be used for writing the output.
  - `filename` - The plugin outputs an individual file per chunk now and is configured by the `outputFilename` option. Check the `README.md` file to see how it works.
