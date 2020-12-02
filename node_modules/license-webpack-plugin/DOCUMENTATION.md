# Documentation

## Basic Setup

Below is an example of how to add the plugin to a webpack config:

```javascript
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
  plugins: [
    new LicenseWebpackPlugin()
  ]
};
```

## Configuration

* **`stats`** - toggle warnings and errors on/off (default: report warnings and errors)

Example:
```javascript
new LicenseWebpackPlugin({
  stats: {
    warnings: true,
    errors: true
  }
});
```

* **`licenseInclusionTest`** - filter which licenses get included in the report (default: capture all licenses)

Example:
```javascript
new LicenseWebpackPlugin({
  licenseInclusionTest: (licenseType) => (licenseType === 'MIT')
});
```

Notes: All license identifiers in npm packages are supposed to follow SPDX format. If your requirements are very specific, it is recommended to set up this option using the [`spdx-satisfies`](https://www.npmjs.com/package/spdx-satisfies) package. The plugin does not provide the `spdx-satisfies` package, so you must install it separately if you want to use it.

Example using `spdx-satisfies`:

```javascript
const satisfies = require('spdx-satisfies');

new LicenseWebpackPlugin({
  licenseInclusionTest: (licenseType) => satisfies(licenseType, '(ISC OR MIT)')
});
```

* **`outputFilename`** - customize the license report filename (default: `'[name].licenses.txt'`)

Example:
```javascript
new LicenseWebpackPlugin({
  outputFilename: '[name].[hash].licenses.txt'
});
```

* **`unacceptableLicenseTest`** - error out on unacceptable license (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  unacceptableLicenseTest: (licenseType) => (licenseType === 'GPL')
});
```

* **`handleUnacceptableLicense`** - do something when an unacceptable license is found (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  unacceptableLicenseTest: (licenseType) => (licenseType === 'GPL'),
  handleUnacceptableLicense: (packageName, licenseType) => {
    // do something here
  }
});
```

* **`excludedPackageTest`** - exclude packages (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  excludedPackageTest: (packageName) => packageName === 'excluded-package'
});
```

* **`perChunkOutput`** - control whether or not the license files are generated per chunk or are combined into one file (default: `true`)

Example:
```javascript
new LicenseWebpackPlugin({
  perChunkOutput: false // combine all license information into one file
});
```

* **`addBanner`** - write a banner to the top of each js file (default: `false`)

Example:
```javascript
new LicenseWebpackPlugin({
  addBanner: true
});
```

* **`licenseTypeOverrides`** - override the license type for specific packages (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  licenseTypeOverrides: {
    foopkg: 'MIT'
  }
});
```

* **`licenseTextOverrides`** - override the license text for specific packages (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  licenseTextOverrides: {
    foopkg: 'License text for foopkg'
  }
});
```

* **`licenseFileOverrides`** - override the license filename for specific packages (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  licenseFileOverrides: {
    foopkg: 'The-License.txt'
  }
});
```

Notes: The license filename is resolved relative to the package directory.

* **`renderLicenses`** - change the format / contents of the generated license file (default: print package name, license type, and license text)

Example:
```javascript
new LicenseWebpackPlugin({
  renderLicenses: (modules) => {
    console.log(modules[0].packageJson, modules[0].licenseId, modules[0].licenseText);
    return JSON.stringify(modules);
  }
});
```

* **`renderBanner`** - change the format / contents of the banner written to the top of each js file (default: print message indicating license filename)

Example:
```javascript
new LicenseWebpackPlugin({
  addBanner: true, 
  renderBanner: (filename, modules) => {
    console.log(modules);
    return '/*! licenses are at ' + filename + '*/';
  }
});
```

* **`handleMissingLicenseText`** - do something when license text is missing from a package (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  handleMissingLicenseText: (packageName, licenseType) => {
    console.log('Cannot find license for ' + packageName);
    return 'UNKNOWN';
  }
});
```

Notes: You can return your own license text from this function, but you should prefer using `licenseTextOverrides` first.


* **`licenseTemplateDir`** - use fallback license files for when a package is missing a license file (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  licenseTemplateDir: path.resolve(__dirname, 'licenseTemplates')
});
```

Notes: This option specifies a directory containing `.txt` files containing the license text based on the license type. (e.g. `MIT.txt`). Templates can be found [here](https://github.com/spdx/license-list).

* **`chunkIncludeExcludeTest`** - control which chunks gets processed by the plugin (default: all chunks get processed)

Example:
```javascript
new LicenseWebpackPlugin({
  chunkIncludeExcludeTest: {
    exclude: ['foo'],
    include: ['bar']
  }
});
```

Example:
```
new LicenseWebpackPlugin({
  chunkIncludeExcludeTest: (chunkName) => chunkName.startsWith('abc')
});
```

Notes: If there is a duplicate entry in both the `exclude` and `include` array, the duplicated entry will be excluded.


* **`modulesDirectories`** - limit which directories get scanned for license files (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  modulesDirectories: [
    path.resolve(__dirname, 'node_modules')
  ]
});
```

* **`additionalChunkModules`** - add additional node modules to a chunk (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  additionalChunkModules: {
    main: [
      {
        name: 'somepkg'
        directory: path.join(__dirname, 'node_modules', 'somepkg')
      }
    ]
  }
});
```

* **`additionalModules`** - add additional node modules to the scan (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  additionalModules: [
    {
      name: 'somepkg'
      directory: path.join(__dirname, 'node_modules', 'somepkg')
    }
  ]
});
```

* **`preferredLicenseTypes`** - help the plugin decide which license type to pick in case a package specifies multiple licenses (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  preferredLicenseTypes: ['MIT', 'ISC']
});
```

* **`handleLicenseAmbiguity`** - do something when the plugin finds ambiguous license types (default: pick first license type)

Example:
```javascript
new LicenseWebpackPlugin({
  handleLicenseAmbiguity: (packageName, licenses) => {
    console.log(packageName);
    console.log(licenses[0].url);
    return licenses[0].type;
  }
});
```

Notes: This function is called whenever a license type could not be determined when a package uses the deprecated `licenses` field (which is an array of license types) in its package.json. It should return the license type to use. By default, the plugin prints a warning message to the console and chooses the first license type. You should use the `preferredLicenseTypes` option instead of this one.



* **`handleMissingLicenseType`** - do something when a package is missing a license type (default: disabled)

Example:
```javascript
new LicenseWebpackPlugin({
  handleMissingLicenseType: (packageName) => {
    console.log(packageName);
    return null;
  }
});
```

Notes: You can return a license type from this function, but it is a better idea to use the `licenseTypeOverides` option.
