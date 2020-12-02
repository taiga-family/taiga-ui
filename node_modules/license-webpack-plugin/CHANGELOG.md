# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.3] - 2019-10-13
### Fixed
- Ignore package.json files that don't have a `name` field when searching for a package's `package.json` file.

## [2.1.2] - 2019-08-11
### Fixed
- Fix `licenseTemplateDir` option not being able to find template files.

## [2.1.1] - 2019-02-23
### Fixed
- Handle missing license template file when `licenseTemplateDir` is used

## [2.1.0] - 2019-01-12
### Changed
- License report is now sorted by module name.

## [2.0.4] - 2018-11-30
### Fixed
- Switch `@types/webpack-sources` to a regular dependency instead of a devDependency.

## [2.0.3] - 2018-11-04
### Fixed
- Handle auto exclusion of `license`, if the guessed name is a folder instead of file.
- Ignore directories found in `SEE LICENSE IN`-style licenses.

## [2.0.2] - 2018-10-09
### Fixed
- Handle object-style `license` field in `package.json`

## [2.0.1] - 2018-09-23
### Fixed
- Handle invalid filename in `SEE LICENSE IN`-style licenses in `package.json` files.

## [2.0.0] - 2018-09-23
### Added
- `licenseInclusionTest` option
- `unacceptableLicenseTest` option
- `handleUnacceptableLicense` option
- `handleMissingLicenseText` option
- `licenseTextOverrides` option
- `renderLicenses` option
- `renderBanner` option
- `chunkIncludeExcludeTest` option
- `additionalChunkModules` option
- `additionalModules` option
- `preferredLicenseTypes` option
- `handleLicenseAmbiguity` option
- `handleMissingLicenseType` option
- `excludedPackageTest` option
- `silent` option

### Changed
- No explicit configuration is necessary anymore. All license types will be included.
- There is no dependency on `ejs` anymore. Instead, render functions are used.
- Packages are identified by traversing dictories upward until a `package.json` file is found.
  This should make package identificaton more reliable.
- Use webpack's `inputFileSystem` instead of `fs` module.
- In order to avoid issues with source maps, the plugin hook is done at a different phase of the webpack build.
- The `modulesDirectories` option requires full paths and is now used to restrict which directories a module may be detected from.
- License filename detection is now done by regular expression which means more license files should be picked up now.
- When license text cannot be found, the plugin will no longer write the license type as the license text. Instead it will omit printing the license text. (The license type will still be written though.)
- The `webpack-sources` dependency has moved from a peer dependency to a direct dependency.

### Removed
- `suppressErrors` option
- `pattern` option
- `outputTemplate` option
- `includePackagesWithoutLicense` option
- `unacceptablePattern` option
- `abortOnUnacceptableLicense` option
- `bannerTemplate` option
- `includedChunks` option
- `excludedChunks` option
- `additionalPackages` option
- `buildRoot` option

### Fixed
- No more interference with source maps

## [1.5.0] - 2018-09-20
### Added
- Support for absolute paths in `modulesDirectories` option

### Fixed
- Support symlinked `node_modules` folder

## [1.4.0] - 2018-08-05
### Changed
- Support license filenames with British spelling: "licence"

## [1.3.1] - 2018-03-22
### Fixed
- Add documentation for license info in banner template

## [1.3.0] - 2018-03-10
### Added
- Support adding license info to banner template

## [1.2.3] - 2018-03-04
### Fixed
- Resolved deprecation warning from webpack

## [1.2.2] - 2018-03-04
### Fixed
- Empty license output on webpack versions prior to v4

## [1.2.1] - 2018-03-04
### Fixed
- Use async webpack compiler hook

## [1.2.0] - 2018-03-04
### Added
- Support multiple modules directories

## [1.1.2] - 2018-02-24
### Fixed
- Search file dependencies of webpack build

## [1.1.1] - 2017-10-20
### Fixed
- Fixed `peerDependencies` declaration in `package.json`

## [1.1.0] - 2017-10-04
### Changed
- Normalize line endings in license files

## [1.0.2] - 2017-09-30
### Fixed
- Scan files referenced by `rootModule` in the build.

## [1.0.1] - 2017-09-14
### Fixed
- Exception when stray file is in `node_modules` folder

## [1.0.0] - 2017-08-12
### Added
- Option to output files on a per-chunk basis
- Option to add banner to chunks
- Option to render license information via ejs template

### Changed
- Use explicit export of `LicenseWebpackPlugin` instead of default export
- Rename `includeUndefined` option to `includePackagesWithoutLicense`

### Removed
- Option to add verison number to output
- Option to output license text
- Option to output package url
- Filename option

## [0.6.0] - 2017-08-04
### Added
- Option to show/hide version number of packages

## [0.5.1] - 2017-07-05
### Fixed
- Handle webpack contexts which are inside `node_modules`

## [0.5.0] - 2017-04-08
### Added
- Option to detect and abort build when unacceptable licenses are found

## [0.4.3] - 2017-03-12
### Fixed
- Handle multiple @ signs in file paths

## [0.4.2] - 2017-01-19
### Fixed
- Create output directory if it does not exist

## [0.4.1] - 2016-12-18
### Fixed
- Print error message properly when `pattern` option is not supplied

## [0.4.0] - 2016-11-23
### Added
- Option to override license types

### Fixed
- Support old `package.json` license structure
- Tests work on Windows

## [0.3.0] - 2016-10-22
### Added
- Option to suppress error messages

## [0.2.1] - 2016-10-22
### Fixed
- Ignore files outside of `node_modules`

## [0.2.0] - 2016-09-24
### Added
- Option to output url of a package
- Option to include packages which don't hava license
- Option to output license text of a package

## [0.1.4] - 2016-07-04
Refactoring release, no changes to functionality / API

## [0.1.3] - 2016-07-04
Refactoring release, no changes to functionality / API

## [0.1.2] - 2016-07-03
### Fixed
- Handle scoped packages properly

## [0.1.1] - 2016-07-02
### Added
- Initial release

[0.1.1]: https://github.com/xz64/license-webpack-plugin/tree/v0.1.1
[0.1.2]: https://github.com/xz64/license-webpack-plugin/compare/v0.1.1...v0.1.2
[0.1.3]: https://github.com/xz64/license-webpack-plugin/compare/v0.1.2...v0.1.3
[0.1.4]: https://github.com/xz64/license-webpack-plugin/compare/v0.1.3...v0.1.4
[0.2.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.1.4...v0.2.0
[0.2.1]: https://github.com/xz64/license-webpack-plugin/compare/v0.2.0...v0.2.1
[0.3.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.2.1...v0.3.0
[0.4.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.3.0...v0.4.0
[0.4.1]: https://github.com/xz64/license-webpack-plugin/compare/v0.4.0...v0.4.1
[0.4.2]: https://github.com/xz64/license-webpack-plugin/compare/v0.4.1...v0.4.2
[0.4.3]: https://github.com/xz64/license-webpack-plugin/compare/v0.4.2...v0.4.3
[0.5.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.4.3...v0.5.0
[0.5.1]: https://github.com/xz64/license-webpack-plugin/compare/v0.5.0...v0.5.1
[0.6.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.5.1...v0.6.0
[1.0.0]: https://github.com/xz64/license-webpack-plugin/compare/v0.6.0...v1.0.0
[1.0.1]: https://github.com/xz64/license-webpack-plugin/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/xz64/license-webpack-plugin/compare/v1.0.1...v1.0.2
[1.1.0]: https://github.com/xz64/license-webpack-plugin/compare/v1.0.2...v1.1.0
[1.1.1]: https://github.com/xz64/license-webpack-plugin/compare/v1.1.0...v1.1.1
[1.1.2]: https://github.com/xz64/license-webpack-plugin/compare/v1.1.1...v1.1.2
[1.2.0]: https://github.com/xz64/license-webpack-plugin/compare/v1.1.2...v1.2.0
[1.2.1]: https://github.com/xz64/license-webpack-plugin/compare/v1.2.0...v1.2.1
[1.2.2]: https://github.com/xz64/license-webpack-plugin/compare/v1.2.1...v1.2.2
[1.2.3]: https://github.com/xz64/license-webpack-plugin/compare/v1.2.2...v1.2.3
[1.3.0]: https://github.com/xz64/license-webpack-plugin/compare/v1.2.3...v1.3.0
[1.3.1]: https://github.com/xz64/license-webpack-plugin/compare/v1.3.0...v1.3.1
[1.4.0]: https://github.com/xz64/license-webpack-plugin/compare/v1.3.1...v1.4.0
