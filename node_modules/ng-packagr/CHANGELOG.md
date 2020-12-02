# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [9.1.5](https://github.com/ng-packagr/ng-packagr/compare/v9.1.4...v9.1.5) (2020-05-19)


### Bug Fixes

* remove tslib from peerDependencies when adding it to dependencies ([593f861](https://github.com/ng-packagr/ng-packagr/commit/593f861))

### [9.1.4](https://github.com/ng-packagr/ng-packagr/compare/v9.1.3...v9.1.4) (2020-05-19)


### Bug Fixes

* auto add tslib as direct dependency ([298fbc4](https://github.com/ng-packagr/ng-packagr/commit/298fbc4))

### [9.1.3](https://github.com/ng-packagr/ng-packagr/compare/v9.1.2...v9.1.3) (2020-05-06)


### Bug Fixes

* update browserslist and autoprefixer ([8293497](https://github.com/ng-packagr/ng-packagr/commit/8293497)), closes [#1611](https://github.com/ng-packagr/ng-packagr/issues/1611)
* update rollup-plugin-sourcemaps to version ^0.6.0 ([f8c3459](https://github.com/ng-packagr/ng-packagr/commit/f8c3459))

### [9.1.2](https://github.com/ng-packagr/ng-packagr/compare/v9.1.1...v9.1.2) (2020-04-30)


### Bug Fixes

* update rollup to version 2.7.5 ([0736ba9](https://github.com/ng-packagr/ng-packagr/commit/0736ba9))

### [9.1.1](https://github.com/ng-packagr/ng-packagr/compare/v9.1.0...v9.1.1) (2020-04-13)


### Bug Fixes

* update chalk to version ^4.0.0 ([bbad22e](https://github.com/ng-packagr/ng-packagr/commit/bbad22e))
* update rollup to version 2.3.1 ([dffe028](https://github.com/ng-packagr/ng-packagr/commit/dffe028))
* update rollup to version 2.3.2 ([1ddc07b](https://github.com/ng-packagr/ng-packagr/commit/1ddc07b))
* update rollup to version 2.3.4 ([4d056b1](https://github.com/ng-packagr/ng-packagr/commit/4d056b1))
* update rollup to version 2.3.5 ([0c0672d](https://github.com/ng-packagr/ng-packagr/commit/0c0672d))
* update rollup to version 2.6.1 ([4a95ddc](https://github.com/ng-packagr/ng-packagr/commit/4a95ddc))

## [9.1.0](https://github.com/ng-packagr/ng-packagr/compare/v9.0.3...v9.1.0) (2020-03-25)


### Bug Fixes

* update @angular/common to version ~9.1.0 ([fd8c0a9](https://github.com/ng-packagr/ng-packagr/commit/fd8c0a9))
* update fs-extra to version ^9.0.0 ([eb2cd7f](https://github.com/ng-packagr/ng-packagr/commit/eb2cd7f))
* update rollup to version 2.2.0 ([1de8443](https://github.com/ng-packagr/ng-packagr/commit/1de8443))


### Features

* add support for TypeScript 3.8 ([4a388af](https://github.com/ng-packagr/ng-packagr/commit/4a388af))

### [9.0.3](https://github.com/ng-packagr/ng-packagr/compare/v9.0.2...v9.0.3) (2020-03-09)


### Bug Fixes

* update rollup to version 1.32.0 ([0e414ce](https://github.com/ng-packagr/ng-packagr/commit/0e414ce))
* update rollup to version 1.32.1 ([9611545](https://github.com/ng-packagr/ng-packagr/commit/9611545))
* wrong UMD ID's of Angular packages with a dash in name ([c996a61](https://github.com/ng-packagr/ng-packagr/commit/c996a61))

### [9.0.2](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0...v9.0.2) (2020-02-25)


### Bug Fixes

* handle union type with a nullable argument ([c9f697f](https://github.com/ng-packagr/ng-packagr/commit/c9f697f))
* show schema errors ([cdf0e9c](https://github.com/ng-packagr/ng-packagr/commit/cdf0e9c))
* throw error on circular dependencies ([af1d2f3](https://github.com/ng-packagr/ng-packagr/commit/af1d2f3)), closes [#1551](https://github.com/ng-packagr/ng-packagr/issues/1551)
* update rollup to version 1.31.1 ([36830f4](https://github.com/ng-packagr/ng-packagr/commit/36830f4))

### [9.0.1](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0...v9.0.1) (2020-02-18)


### Bug Fixes

* update rollup to version 1.31.1 ([36830f4](https://github.com/ng-packagr/ng-packagr/commit/36830f4))

## [9.0.0](https://github.com/ng-packagr/ng-packagr/compare/v5.7.0...v9.0.0) (2020-02-06)


### ⚠ BREAKING CHANGES

* Remove usage of deprecated `less-plugin-npm-import`. In less v3 is supports node_modules resolutions by default.

Before
```css
@import '~module/less/linenumbers';
```

After
```css
@import 'module/less/linenumbers';
```
* TypeScript versions prior to 3.6.4 are no longer supported.no longer supported.
* `tslib` will be longer be added as a `dependencies`, but rather it will be added as a `peerDependencies`.

This is to be inline with the Angular framework as per

### Bug Fixes

*  downlevel constructor parameters transformer with tsickle ([51d5498](https://github.com/ng-packagr/ng-packagr/commit/51d5498)), closes [#1517](https://github.com/ng-packagr/ng-packagr/issues/1517)
* add `assets` option to schema ([a5efd1c](https://github.com/ng-packagr/ng-packagr/commit/a5efd1c)), closes [#1092](https://github.com/ng-packagr/ng-packagr/issues/1092)
* add link to Angular guide when showing ivy publish warning ([6bee029](https://github.com/ng-packagr/ng-packagr/commit/6bee029)), closes [#1453](https://github.com/ng-packagr/ng-packagr/issues/1453)
* add more package json sections to remove ([57cc4d1](https://github.com/ng-packagr/ng-packagr/commit/57cc4d1))
* analyse only non done entry points ([e8db885](https://github.com/ng-packagr/ng-packagr/commit/e8db885))
* analyse should cater for module name being the primary entry point ([7b8e491](https://github.com/ng-packagr/ng-packagr/commit/7b8e491))
* circular dependency on itself error ([702c3f2](https://github.com/ng-packagr/ng-packagr/commit/702c3f2)), closes [#1508](https://github.com/ng-packagr/ng-packagr/issues/1508)
* ignore `.gitkeep`, `Thumbs.db` and `.DS_Store` when copying files ([a5b10e2](https://github.com/ng-packagr/ng-packagr/commit/a5b10e2))
* ignore JSON files in tsickle processing ([#1489](https://github.com/ng-packagr/ng-packagr/issues/1489)) ([ec44059](https://github.com/ng-packagr/ng-packagr/commit/ec44059)), closes [#325](https://github.com/ng-packagr/ng-packagr/issues/325)
* incorrect detection of potential dependent entry-points ([932bf48](https://github.com/ng-packagr/ng-packagr/commit/932bf48)), closes [#1510](https://github.com/ng-packagr/ng-packagr/issues/1510)
* lock rollup version ([75ac180](https://github.com/ng-packagr/ng-packagr/commit/75ac180)), closes [#1431](https://github.com/ng-packagr/ng-packagr/issues/1431)
* remove redundant section in package.json ([5efad3a](https://github.com/ng-packagr/ng-packagr/commit/5efad3a))
* reset glob cache on file add ([0306d59](https://github.com/ng-packagr/ng-packagr/commit/0306d59))
* skip NGCC when file system is read only ([0e44793](https://github.com/ng-packagr/ng-packagr/commit/0e44793))
* switch to a more accurate module analyse ([92ca053](https://github.com/ng-packagr/ng-packagr/commit/92ca053)), closes [#1523](https://github.com/ng-packagr/ng-packagr/issues/1523)
* update commander to version ^4.0.0 ([ee41977](https://github.com/ng-packagr/ng-packagr/commit/ee41977))
* update rollup to version 1.31.0 ([f8704fd](https://github.com/ng-packagr/ng-packagr/commit/f8704fd))
* update update-notifier to version ^4.0.0 ([f05cbbf](https://github.com/ng-packagr/ng-packagr/commit/f05cbbf))


### Features

* add support for TypeScript 3.7 ([9e05fb3](https://github.com/ng-packagr/ng-packagr/commit/9e05fb3))
* add support for TypeScript 3.6 ([342b799](https://github.com/ng-packagr/ng-packagr/commit/342b799))
* add tslib as peerDepedency ([5077f87](https://github.com/ng-packagr/ng-packagr/commit/5077f87))
* update peerDependencies ([7ff60f5](https://github.com/ng-packagr/ng-packagr/commit/7ff60f5))


### Performance

* re-populate glob cache ([3323b2a](https://github.com/ng-packagr/ng-packagr/commit/3323b2a))
* remove less-plugin-npm-import ([6a5ae37](https://github.com/ng-packagr/ng-packagr/commit/6a5ae37))

## [9.0.0-rc.9](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.8...v9.0.0-rc.9) (2020-02-05)

## [9.0.0-rc.8](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.3...v9.0.0-rc.8) (2020-02-04)


### Bug Fixes

*  downlevel constructor parameters transformer with tsickle ([51d5498](https://github.com/ng-packagr/ng-packagr/commit/51d5498)), closes [#1517](https://github.com/ng-packagr/ng-packagr/issues/1517)
* analyse only non done entry points ([e8db885](https://github.com/ng-packagr/ng-packagr/commit/e8db885))
* analyse should cater for module name being the primary entry point ([7b8e491](https://github.com/ng-packagr/ng-packagr/commit/7b8e491))
* circular dependency on itself error ([702c3f2](https://github.com/ng-packagr/ng-packagr/commit/702c3f2)), closes [#1508](https://github.com/ng-packagr/ng-packagr/issues/1508)
* ignore `.gitkeep`, `Thumbs.db` and `.DS_Store` when copying files ([a5b10e2](https://github.com/ng-packagr/ng-packagr/commit/a5b10e2))
* incorrect detection of potential dependent entry-points ([932bf48](https://github.com/ng-packagr/ng-packagr/commit/932bf48)), closes [#1510](https://github.com/ng-packagr/ng-packagr/issues/1510)
* reset glob cache on file add ([0306d59](https://github.com/ng-packagr/ng-packagr/commit/0306d59))
* switch to a more accurate module analyse ([92ca053](https://github.com/ng-packagr/ng-packagr/commit/92ca053)), closes [#1523](https://github.com/ng-packagr/ng-packagr/issues/1523)
* update rollup to version 1.31.0 ([f8704fd](https://github.com/ng-packagr/ng-packagr/commit/f8704fd))
* update update-notifier to version ^4.0.0 ([f05cbbf](https://github.com/ng-packagr/ng-packagr/commit/f05cbbf))


### Features

* add support for typescript 3.7 ([9e05fb3](https://github.com/ng-packagr/ng-packagr/commit/9e05fb3))


### Performance

* re-populate glob cache ([3323b2a](https://github.com/ng-packagr/ng-packagr/commit/3323b2a))

## [9.0.0-rc.7](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.6...v9.0.0-rc.7) (2020-01-09)


### Bug Fixes

* circular dependency on itself error ([702c3f2](https://github.com/ng-packagr/ng-packagr/commit/702c3f2)), closes [#1508](https://github.com/ng-packagr/ng-packagr/issues/1508)

## [9.0.0-rc.6](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.5...v9.0.0-rc.6) (2020-01-09)


### Bug Fixes

* analyse only non done entry points ([e8db885](https://github.com/ng-packagr/ng-packagr/commit/e8db885))
* reset glob cache on file add ([0306d59](https://github.com/ng-packagr/ng-packagr/commit/0306d59))


### Performance

* re-populate glob cache ([3323b2a](https://github.com/ng-packagr/ng-packagr/commit/3323b2a))

## [9.0.0-rc.5](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.4...v9.0.0-rc.5) (2020-01-08)


### Bug Fixes

* update rollup to version 1.29.0 ([04fa486](https://github.com/ng-packagr/ng-packagr/commit/04fa486))

### Performance
* use TypeScript scanner to build dependency tree ([1cdc8c8](https://github.com/ng-packagr/ng-packagr/commit/1cdc8c8))

## [9.0.0-rc.4](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.3...v9.0.0-rc.4) (2020-01-07)


### Bug Fixes

* ignore `.gitkeep`, `Thumbs.db` and `.DS_Store` when copying files ([a5b10e2](https://github.com/ng-packagr/ng-packagr/commit/a5b10e2))
* update rollup to version 1.28.0 ([624f31f](https://github.com/ng-packagr/ng-packagr/commit/624f31f))
* update update-notifier to version ^4.0.0 ([f05cbbf](https://github.com/ng-packagr/ng-packagr/commit/f05cbbf))

## [9.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.2...v9.0.0-rc.3) (2019-12-04)


### Bug Fixes

* add `assets` option to schema ([a5efd1c](https://github.com/ng-packagr/ng-packagr/commit/a5efd1c)), closes [#1092](https://github.com/ng-packagr/ng-packagr/issues/1092)
* add link to Angular guide when showing ivy publish warning ([6bee029](https://github.com/ng-packagr/ng-packagr/commit/6bee029)), closes [#1453](https://github.com/ng-packagr/ng-packagr/issues/1453)

## [9.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.1...v9.0.0-rc.2) (2019-11-14)


### Bug Fixes

* add more package json sections to remove ([57cc4d1](https://github.com/ng-packagr/ng-packagr/commit/57cc4d1))
* remove redundant section in package.json ([5efad3a](https://github.com/ng-packagr/ng-packagr/commit/5efad3a))
* skip NGCC when file system is read only ([0e44793](https://github.com/ng-packagr/ng-packagr/commit/0e44793))
* update commander to version ^4.0.0 ([ee41977](https://github.com/ng-packagr/ng-packagr/commit/ee41977))
* update rollup to version 1.26.2 ([8e91477](https://github.com/ng-packagr/ng-packagr/commit/8e91477))
* update rollup to version 1.26.3 ([1a67c7c](https://github.com/ng-packagr/ng-packagr/commit/1a67c7c))
* update rollup to version 1.26.4 ([844f7d3](https://github.com/ng-packagr/ng-packagr/commit/844f7d3))
* update rollup to version 1.26.5 ([cb5bda7](https://github.com/ng-packagr/ng-packagr/commit/cb5bda7))

## [9.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v9.0.0-rc.0...v9.0.0-rc.1) (2019-10-29)


### ⚠ BREAKING CHANGES

* Remove usage of deprecated `less-plugin-npm-import`. In less v3 is supports node_modules resolutions by default.

Before
```css
@import '~module/less/linenumbers';
```

After
```css
@import 'module/less/linenumbers';
```

### Bug Fixes

* lock rollup version ([75ac180](https://github.com/ng-packagr/ng-packagr/commit/75ac180)), closes [#1431](https://github.com/ng-packagr/ng-packagr/issues/1431)


* remove less-plugin-npm-import ([6a5ae37](https://github.com/ng-packagr/ng-packagr/commit/6a5ae37))

## [9.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v5.7.0...v9.0.0-rc.0) (2019-10-22)


### ⚠ BREAKING CHANGES

* TypeScript versions prior to 3.6.4 are no longer supported.
* `tslib` will be longer be added as a `dependencies`, but rather it will be added as a `peerDependencies`. This is to be inline with the Angular framework.

### Features

* add support to TypeScript 3.6 ([342b799](https://github.com/ng-packagr/ng-packagr/commit/342b799))
* add tslib as peerDepedency ([5077f87](https://github.com/ng-packagr/ng-packagr/commit/5077f87))
* update peerDependencies ([7ff60f5](https://github.com/ng-packagr/ng-packagr/commit/7ff60f5))

## [5.7.0](https://github.com/ng-packagr/ng-packagr/compare/v5.6.1...v5.7.0) (2019-10-15)


### Bug Fixes

* re prioritize ngcc `propertiesToConsider` properties based ([ea89fb3](https://github.com/ng-packagr/ng-packagr/commit/ea89fb3)), closes [/github.com/angular/angular-cli/blob/0d70565f9d80f1d765622eb8c8b2c3c701723599/packages/angular_devkit/build_angular/src/angular-cli-files/models/webpack-configs/browser.ts#L68](https://github.com/ng-packagr//github.com/angular/angular-cli/blob/0d70565f9d80f1d765622eb8c8b2c3c701723599/packages/angular_devkit/build_angular/src/angular-cli-files/models/webpack-configs/browser.ts/issues/L68)


### Features

* deprecate inlining of `bundledDependencies` ([0c52486](https://github.com/ng-packagr/ng-packagr/commit/0c52486))

### [5.6.1](https://github.com/ng-packagr/ng-packagr/compare/v5.6.0...v5.6.1) (2019-10-09)


### Bug Fixes

* tsickle references to non imported values when using Angular 8 ([de5894b](https://github.com/ng-packagr/ng-packagr/commit/de5894b))

## [5.6.0](https://github.com/ng-packagr/ng-packagr/compare/v5.5.1...v5.6.0) (2019-10-08)


### Bug Fixes

* disable internal `emitDecoratorMetadata` ([d0bf507](https://github.com/ng-packagr/ng-packagr/commit/d0bf507))
* support the ng-package.json in secondary entry points ([#1406](https://github.com/ng-packagr/ng-packagr/issues/1406)) ([8b97bfa](https://github.com/ng-packagr/ng-packagr/commit/8b97bfa))
* update @angular/cdk to version ~8.2.0 ([0007fef](https://github.com/ng-packagr/ng-packagr/commit/0007fef))


### Build System

* update @angular-devkit/build-angular to version ~0.803.0 ([194c6bb](https://github.com/ng-packagr/ng-packagr/commit/194c6bb))
* update cross-env to version ^6.0.0 ([120331a](https://github.com/ng-packagr/ng-packagr/commit/120331a))
* update jasmine-core to version ~3.5.0 ([#1404](https://github.com/ng-packagr/ng-packagr/issues/1404)) ([aeabd95](https://github.com/ng-packagr/ng-packagr/commit/aeabd95))
* update ts-node to version ~8.4.0 ([9a4dddc](https://github.com/ng-packagr/ng-packagr/commit/9a4dddc))
* update tslint to version ~5.20.0 ([4e4b1d5](https://github.com/ng-packagr/ng-packagr/commit/4e4b1d5))
* update zone.js to version ^0.10.0 ([88f8cb4](https://github.com/ng-packagr/ng-packagr/commit/88f8cb4))


### Features

* copies `CHANGELOG.md` to package destination ([db5ad68](https://github.com/ng-packagr/ng-packagr/commit/db5ad68))


### Tests

* update angular cli dev packages ([3e26f7b](https://github.com/ng-packagr/ng-packagr/commit/3e26f7b))



### [5.5.1](https://github.com/ng-packagr/ng-packagr/compare/v5.5.0...v5.5.1) (2019-09-14)


### Bug Fixes

* add downlevelConstructorParameters transformer ([b959010](https://github.com/ng-packagr/ng-packagr/commit/b959010)), closes [#1400](https://github.com/ng-packagr/ng-packagr/issues/1400)
* remove terser warnings as these as not actionable ([9c80f62](https://github.com/ng-packagr/ng-packagr/commit/9c80f62)), closes [#1394](https://github.com/ng-packagr/ng-packagr/issues/1394)
* update rimraf to version ^3.0.0 ([9236102](https://github.com/ng-packagr/ng-packagr/commit/9236102))


## [5.5.0](https://github.com/ng-packagr/ng-packagr/compare/v5.4.3...v5.5.0) (2019-08-14)


### Bug Fixes

* disable treeshaking when generating bundles ([34b26fc](https://github.com/ng-packagr/ng-packagr/commit/34b26fc))
* update commander to version ^3.0.0 ([dcd4853](https://github.com/ng-packagr/ng-packagr/commit/dcd4853))


### Features

* disable Ivy in default tsconfig ([f50dd2f](https://github.com/ng-packagr/ng-packagr/commit/f50dd2f))
* show error when trying to publish ivy packages ([c3122d6](https://github.com/ng-packagr/ng-packagr/commit/c3122d6))

### [5.4.3](https://github.com/ng-packagr/ng-packagr/compare/v5.4.2...v5.4.3) (2019-07-29)


### Bug Fixes

* handle svg templates same as html files ([2156f5f](https://github.com/ng-packagr/ng-packagr/commit/2156f5f))



### [5.4.2](https://github.com/ng-packagr/ng-packagr/compare/v5.4.1...v5.4.2) (2019-07-29)


### Bug Fixes

* handle deep undefined in schema options ([02055d0](https://github.com/ng-packagr/ng-packagr/commit/02055d0)), closes [#1356](https://github.com/ng-packagr/ng-packagr/issues/1356)



### [5.4.1](https://github.com/ng-packagr/ng-packagr/compare/v5.4.0...v5.4.1) (2019-07-29)


### Bug Fixes

* remove defaults from `languageLevel` ([7650c65](https://github.com/ng-packagr/ng-packagr/commit/7650c65))



## [5.4.0](https://github.com/ng-packagr/ng-packagr/compare/v5.3.0...v5.4.0) (2019-07-29)

### Features

* add support for Ivy libraries ([b6dfcf6](https://github.com/ng-packagr/ng-packagr/commit/b6dfcf6))
* add support for typescript 3.5 and Angular 8.X pre-releases ([798de61](https://github.com/ng-packagr/ng-packagr/commit/798de61))
* use `ajv` to validate schema ([e5e9864](https://github.com/ng-packagr/ng-packagr/commit/e5e9864))


## [5.3.0](https://github.com/ng-packagr/ng-packagr/compare/v5.2.0...v5.3.0) (2019-06-05)


### Bug Fixes

* add quotes to less include-path ([af6816b](https://github.com/ng-packagr/ng-packagr/commit/af6816b))
* don't write stacktraces when there are errors ([42692b0](https://github.com/ng-packagr/ng-packagr/commit/42692b0))
* remove opencollective postinstall scripts ([123f39a](https://github.com/ng-packagr/ng-packagr/commit/123f39a))
* update terser to version ^4.0.0 ([dd28818](https://github.com/ng-packagr/ng-packagr/commit/dd28818))

### Features

* support inline javascript in less ([#1300](https://github.com/ng-packagr/ng-packagr/issues/1300)) ([e0b4136](https://github.com/ng-packagr/ng-packagr/commit/e0b4136)), closes [#1298](https://github.com/ng-packagr/ng-packagr/issues/1298)



# [5.2.0](https://github.com/ng-packagr/ng-packagr/compare/v5.1.0...v5.2.0) (2019-05-17)


### Bug Fixes

* copy+dereference LICENSE and README.md ([6ace017](https://github.com/ng-packagr/ng-packagr/commit/6ace017))
* fix resolution for less binary ([6bc789c](https://github.com/ng-packagr/ng-packagr/commit/6bc789c)), closes [#1276](https://github.com/ng-packagr/ng-packagr/issues/1276)
* logger print errors and warnings to stderr ([9534d19](https://github.com/ng-packagr/ng-packagr/commit/9534d19))
* update chokidar to version ^3.0.0 ([2f0e75f](https://github.com/ng-packagr/ng-packagr/commit/2f0e75f))
* update fs-extra to version ^8.0.0 ([de09a1a](https://github.com/ng-packagr/ng-packagr/commit/de09a1a))
* update update-notifier to version ^3.0.0 ([d5b136f](https://github.com/ng-packagr/ng-packagr/commit/d5b136f))


### Features

* update several rollup dependencies ([0772371](https://github.com/ng-packagr/ng-packagr/commit/0772371))


# [5.1.0](https://github.com/ng-packagr/ng-packagr/compare/v5.0.1...v5.1.0) (2019-04-15)


### Bug Fixes

* emit ts option diagnostic ([ed960b6](https://github.com/ng-packagr/ng-packagr/commit/ed960b6))
* error out gracefully when `package.json` is not found ([902dea2](https://github.com/ng-packagr/ng-packagr/commit/902dea2)), closes [#1255](https://github.com/ng-packagr/ng-packagr/issues/1255)


### Features

* add support for TypeScript 3.4 ([828065c](https://github.com/ng-packagr/ng-packagr/commit/828065c))


## [5.0.1](https://github.com/ng-packagr/ng-packagr/compare/v5.0.0...v5.0.1) (2019-03-27)


### Bug Fixes

* version command should not require tsickle ([6ac0dcf](https://github.com/ng-packagr/ng-packagr/commit/6ac0dcf))


# [5.0.0](https://github.com/ng-packagr/ng-packagr/compare/v4.7.1...v5.0.0) (2019-03-27)


### Bug Fixes

* update core-js to version ^3.0.0 ([b985c49](https://github.com/ng-packagr/ng-packagr/commit/b985c49))
* update read-pkg-up to version ^5.0.0 ([cb172fa](https://github.com/ng-packagr/ng-packagr/commit/cb172fa))
* update rollup-plugin-json to version ^4.0.0 ([8d4d4a7](https://github.com/ng-packagr/ng-packagr/commit/8d4d4a7))


### Features

* add node-sass support with sass as default ([43a0be6](https://github.com/ng-packagr/ng-packagr/commit/43a0be6))
* add support for Angular 8 and TypeScript 3.3 ([dfe5a27](https://github.com/ng-packagr/ng-packagr/commit/dfe5a27))
* remove tsickle from direct peerDepedencies ([1555cf6](https://github.com/ng-packagr/ng-packagr/commit/1555cf6)), closes [#1202](https://github.com/ng-packagr/ng-packagr/issues/1202)
* replace `uglify-js` with `terser` ([a18d7ad](https://github.com/ng-packagr/ng-packagr/commit/a18d7ad))
* update rollup to version 1.6+ ([82f97e4](https://github.com/ng-packagr/ng-packagr/commit/82f97e4)), closes [#1227](https://github.com/ng-packagr/ng-packagr/issues/1227)


### Performance Improvements

* generate umd bundle directly from fesm5 instead of esm5 ([b25731b](https://github.com/ng-packagr/ng-packagr/commit/b25731b))
* reduce the amount of dependees that are removed ([408541e](https://github.com/ng-packagr/ng-packagr/commit/408541e))


### BREAKING CHANGES

* Users outside of Google don't usually need closure annotations hence `annotateForClosureCompiler` is turned off by default. In case users want to emit closure compatible code, they need to install `tsickle` and enable opt it this feature.

* We no longer use node-sass by default, instead we use sass (dart-sass).

While in most cases this should not have an impact the generated code, dart sass has some differences from Ruby Sass. See https://github.com/sass/dart-sass#behavioral-differences-from-ruby-sass for more details

If you wish to use node-sass instead of sass you need to install node-sass as a dev dependency.

npm users
```
npm install node-sass --save-dev
```
yarn users
```
yarn add node-sass --dev
```


<a name="4.7.1"></a>
## [4.7.1](https://github.com/ng-packagr/ng-packagr/compare/v4.7.0...v4.7.1) (2019-02-15)


### Bug Fixes

* don't use classic module resolution during analyse ([f0a1c38](https://github.com/ng-packagr/ng-packagr/commit/f0a1c38)), closes [#1210](https://github.com/ng-packagr/ng-packagr/issues/1210)
* emit complete diagnostics ([82e1fd0](https://github.com/ng-packagr/ng-packagr/commit/82e1fd0))
* replace opencollective-cli with opencollective-postinstall ([#1203](https://github.com/ng-packagr/ng-packagr/issues/1203)) ([44776da](https://github.com/ng-packagr/ng-packagr/commit/44776da)), closes [#1178](https://github.com/ng-packagr/ng-packagr/issues/1178)



<a name="4.7.0"></a>
# [4.7.0](https://github.com/ng-packagr/ng-packagr/compare/v4.6.0...v4.7.0) (2019-01-26)


### Bug Fixes

* read error when having files with spaces in less ([22cfdcc](https://github.com/ng-packagr/ng-packagr/commit/22cfdcc)), closes [#1197](https://github.com/ng-packagr/ng-packagr/issues/1197)
* use old TypeScript API to support users which are still on 2.7.x+ ([eec8b84](https://github.com/ng-packagr/ng-packagr/commit/eec8b84)), closes [#1186](https://github.com/ng-packagr/ng-packagr/issues/1186)
* use ts.compilerHost as moduleResolutionHost for tsickle.emitWithTsickle to support tsickle 0.33.1 ([30d3720](https://github.com/ng-packagr/ng-packagr/commit/30d3720)), closes [#1189](https://github.com/ng-packagr/ng-packagr/issues/1189)


### Features

* add support for tsickle to 0.34.0 ([3b67d90](https://github.com/ng-packagr/ng-packagr/commit/3b67d90))


### Performance Improvements

* simplify Node `dependsOn` logic ([4a0585d](https://github.com/ng-packagr/ng-packagr/commit/4a0585d))



<a name="4.6.0"></a>
# [4.6.0](https://github.com/ng-packagr/ng-packagr/compare/v4.3.1...v4.6.0) (2019-01-15)


### Bug Fixes

* add opencollective postinstall hook ([c3dbaeb](https://github.com/ng-packagr/ng-packagr/commit/c3dbaeb))
* analyses of secondary entrypoints doesn't work with deep imports ([3f56df2](https://github.com/ng-packagr/ng-packagr/commit/3f56df2)), closes [#1183](https://github.com/ng-packagr/ng-packagr/issues/1183)



<a name="4.5.0"></a>
# [4.5.0](https://github.com/ng-packagr/ng-packagr/compare/v4.4.5...v4.5.0) (2019-01-11)


### Bug Fixes

* update rollup-plugin-node-resolve to version ^4.0.0 ([ab2a55a](https://github.com/ng-packagr/ng-packagr/commit/ab2a55a))


### Features

* add support for TypeScript 3.2 ([9e6ee67](https://github.com/ng-packagr/ng-packagr/commit/9e6ee67))


### Performance Improvements

* cache ng program for faster incremental builds ([4131d4c](https://github.com/ng-packagr/ng-packagr/commit/4131d4c))
* improve entry points analyses ([bcc7f05](https://github.com/ng-packagr/ng-packagr/commit/bcc7f05))



<a name="4.4.5"></a>
## [4.4.5](https://github.com/ng-packagr/ng-packagr/compare/v4.4.4...v4.4.5) (2018-12-01)



<a name="4.4.4"></a>
## [4.4.4](https://github.com/ng-packagr/ng-packagr/compare/v4.4.3...v4.4.4) (2018-12-01)



<a name="4.4.3"></a>
## [4.4.3](https://github.com/ng-packagr/ng-packagr/compare/v4.4.2...v4.4.3) (2018-12-01)



<a name="4.4.2"></a>
## [4.4.2](https://github.com/ng-packagr/ng-packagr/compare/v4.4.1...v4.4.2) (2018-12-01)


### Bug Fixes

* add opencollective postinstall hook ([c3dbaeb](https://github.com/ng-packagr/ng-packagr/commit/c3dbaeb))



<a name="4.4.1"></a>
## [4.4.1](https://github.com/ng-packagr/ng-packagr/compare/v4.4.0...v4.4.1) (2018-11-07)


### Bug Fixes

* ignore git folder on watch ([c61cbfc](https://github.com/ng-packagr/ng-packagr/commit/c61cbfc))
* UMD sourceMappingURL should point to file ([ab02f0f](https://github.com/ng-packagr/ng-packagr/commit/ab02f0f))
* update rollup to version ^0.67.0 ([4422aa1](https://github.com/ng-packagr/ng-packagr/commit/4422aa1))



<a name="4.4.0"></a>
# [4.4.0](https://github.com/ng-packagr/ng-packagr/compare/v4.3.1...v4.4.0) (2018-10-21)


### Features

* add support for `resolveJsonModule` ([1bf8eaf](https://github.com/ng-packagr/ng-packagr/commit/1bf8eaf)), closes [#1050](https://github.com/ng-packagr/ng-packagr/issues/1050)



<a name="4.3.1"></a>
## [4.3.1](https://github.com/ng-packagr/ng-packagr/compare/v4.3.0...v4.3.1) (2018-10-14)


### Bug Fixes

* update templates and styles in watch mode ([bfc019f](https://github.com/ng-packagr/ng-packagr/commit/bfc019f))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/ng-packagr/ng-packagr/compare/v4.2.0...v4.3.0) (2018-10-09)


### Bug Fixes

* `JavaScript heap out of memory` when having a lot of secondary entrypoints ([ca3d1d3](https://github.com/ng-packagr/ng-packagr/commit/ca3d1d3)), closes [#1099](https://github.com/ng-packagr/ng-packagr/issues/1099)
* tsconfig path mapping ([4421e6f](https://github.com/ng-packagr/ng-packagr/commit/4421e6f))


### Features

* add support for TypeScript 3.1 ([c354261](https://github.com/ng-packagr/ng-packagr/commit/c354261))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/ng-packagr/ng-packagr/compare/v4.1.1...v4.2.0) (2018-09-18)


### Bug Fixes

* update rollup to version `^0.65.0` ([03db010](https://github.com/ng-packagr/ng-packagr/commit/03db010))
* update rollup to version ^0.66.0 ([3d381b0](https://github.com/ng-packagr/ng-packagr/commit/3d381b0))


### Features

* add  and  version  as peerDependencies ([97c5fec](https://github.com/ng-packagr/ng-packagr/commit/97c5fec))
* add `TypeScript` version 3 as a `peerDependency` ([5f0b761](https://github.com/ng-packagr/ng-packagr/commit/5f0b761))
* add a option to pass a custom `tsconfig` in `CLI` ([cb6a980](https://github.com/ng-packagr/ng-packagr/commit/cb6a980))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/ng-packagr/ng-packagr/compare/v4.1.0...v4.1.1) (2018-08-26)


### Bug Fixes

* allow sass indexed syntax to be compiled (+ integration tests) ([#1053](https://github.com/ng-packagr/ng-packagr/issues/1053)) ([34a259d](https://github.com/ng-packagr/ng-packagr/commit/34a259d))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/ng-packagr/ng-packagr/compare/v4.0.1...v4.1.0) (2018-08-12)


### Bug Fixes

* add fallback for `sources` when re-wiring sourcemaps ([#1033](https://github.com/ng-packagr/ng-packagr/issues/1033)) ([9521281](https://github.com/ng-packagr/ng-packagr/commit/9521281))
* no elements in sequence error ([#1029](https://github.com/ng-packagr/ng-packagr/issues/1029)) ([e80cc22](https://github.com/ng-packagr/ng-packagr/commit/e80cc22))
* update node-sass to v4.9.3 ([#1046](https://github.com/ng-packagr/ng-packagr/issues/1046)) ([befb3da](https://github.com/ng-packagr/ng-packagr/commit/befb3da)), closes [#1045](https://github.com/ng-packagr/ng-packagr/issues/1045)
* update postcss-url to version ^8.0.0 ([#1042](https://github.com/ng-packagr/ng-packagr/issues/1042)) ([6b4ba96](https://github.com/ng-packagr/ng-packagr/commit/6b4ba96))
* update rollup to version ^0.64.0 ([#1039](https://github.com/ng-packagr/ng-packagr/issues/1039)) ([5d1ab49](https://github.com/ng-packagr/ng-packagr/commit/5d1ab49))
* update rollup to version ^0.64.0 ([#1047](https://github.com/ng-packagr/ng-packagr/issues/1047)) ([8cb4780](https://github.com/ng-packagr/ng-packagr/commit/8cb4780))


### Features

* add support for `~` import syntax for `less` ([#1036](https://github.com/ng-packagr/ng-packagr/issues/1036)) ([bd7c529](https://github.com/ng-packagr/ng-packagr/commit/bd7c529)), closes [#827](https://github.com/ng-packagr/ng-packagr/issues/827) [#227](https://github.com/ng-packagr/ng-packagr/issues/227)


### Performance Improvements

* reduce memory consumption ([#1022](https://github.com/ng-packagr/ng-packagr/issues/1022)) ([3ba995e](https://github.com/ng-packagr/ng-packagr/commit/3ba995e))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0...v4.0.1) (2018-07-26)


### Bug Fixes

* add `enableResourceInlining` by default to tsconfig ([#1021](https://github.com/ng-packagr/ng-packagr/issues/1021)) ([d2e9678](https://github.com/ng-packagr/ng-packagr/commit/d2e9678)), closes [#976](https://github.com/ng-packagr/ng-packagr/issues/976)


### Performance Improvements

* analyse sources only for dirty entrypoints ([#1017](https://github.com/ng-packagr/ng-packagr/issues/1017)) ([191cf00](https://github.com/ng-packagr/ng-packagr/commit/191cf00))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0-rc.4...v4.0.0) (2018-07-22)


### Bug Fixes

* copy nested triple slash referenced typings to correct path ([#1009](https://github.com/ng-packagr/ng-packagr/issues/1009)) ([9b7b701](https://github.com/ng-packagr/ng-packagr/commit/9b7b701)), closes [#1007](https://github.com/ng-packagr/ng-packagr/issues/1007)
* update autoprefixer to ^9.0.0, browserslist to ^4.0.0 ([#1010](https://github.com/ng-packagr/ng-packagr/issues/1010)) ([2171398](https://github.com/ng-packagr/ng-packagr/commit/2171398))
* update fs-extra to version ^7.0.0 ([#1003](https://github.com/ng-packagr/ng-packagr/issues/1003)) ([0fb2138](https://github.com/ng-packagr/ng-packagr/commit/0fb2138))
* update postcss to version ^7.0.0 ([#1004](https://github.com/ng-packagr/ng-packagr/issues/1004)) ([e2a3905](https://github.com/ng-packagr/ng-packagr/commit/e2a3905))
* update rollup to version ^0.63.0 ([#1005](https://github.com/ng-packagr/ng-packagr/issues/1005)) ([5764f38](https://github.com/ng-packagr/ng-packagr/commit/5764f38))


### Features

* build only entrypoints that are effected by the change ([#991](https://github.com/ng-packagr/ng-packagr/issues/991)) ([1f79aa2](https://github.com/ng-packagr/ng-packagr/commit/1f79aa2)), closes [#974](https://github.com/ng-packagr/ng-packagr/issues/974)



<a name="4.0.0-rc.4"></a>
# [4.0.0-rc.4](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0-rc.3...v4.0.0-rc.4) (2018-07-17)


### Bug Fixes

* browserlist configuration is not being picked up ([#994](https://github.com/ng-packagr/ng-packagr/issues/994)) ([72b2a00](https://github.com/ng-packagr/ng-packagr/commit/72b2a00)), closes [angular/angular-cli#11480](https://github.com/angular/angular-cli/issues/11480)
* don't exclude `node_modules` from watch ([#995](https://github.com/ng-packagr/ng-packagr/issues/995)) ([3863d79](https://github.com/ng-packagr/ng-packagr/commit/3863d79))



<a name="4.0.0-rc.3"></a>
# [4.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0-rc.2...v4.0.0-rc.3) (2018-06-29)


### Bug Fixes

* debounce when a file changes ([#975](https://github.com/ng-packagr/ng-packagr/issues/975)) ([25e2f42](https://github.com/ng-packagr/ng-packagr/commit/25e2f42))
* update rollup to version ^0.62.0 ([#963](https://github.com/ng-packagr/ng-packagr/issues/963)) ([e44ab14](https://github.com/ng-packagr/ng-packagr/commit/e44ab14))


### Features

* add `watch` and `buildAsObservable` methods ([#982](https://github.com/ng-packagr/ng-packagr/issues/982)) ([6975192](https://github.com/ng-packagr/ng-packagr/commit/6975192))
* update `lib` compiler option to `es2018` ([#956](https://github.com/ng-packagr/ng-packagr/issues/956)) ([6bbedee](https://github.com/ng-packagr/ng-packagr/commit/6bbedee))


### Performance Improvements

* add teardown logic for watch ([#980](https://github.com/ng-packagr/ng-packagr/issues/980)) ([42ffec4](https://github.com/ng-packagr/ng-packagr/commit/42ffec4))


### BREAKING CHANGES

* The following `peerDependencies` are now required
- `tslib: ^1.9.0`
- `typescript: ^2.7.0`

<a name="4.0.0-rc.2"></a>
# [4.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0-rc.1...v4.0.0-rc.2) (2018-06-23)


### Bug Fixes

* update read-pkg-up to version ^4.0.0 ([#955](https://github.com/ng-packagr/ng-packagr/issues/955)) ([c07e888](https://github.com/ng-packagr/ng-packagr/commit/c07e888))


### Features

* add support for incremental builds ([#884](https://github.com/ng-packagr/ng-packagr/issues/884)) ([fbbb434](https://github.com/ng-packagr/ng-packagr/commit/fbbb434)), closes [#828](https://github.com/ng-packagr/ng-packagr/issues/828) [#743](https://github.com/ng-packagr/ng-packagr/issues/743) [#635](https://github.com/ng-packagr/ng-packagr/issues/635)


### Performance Improvements

* don't scan `node_modules` directory while globbing ([#949](https://github.com/ng-packagr/ng-packagr/issues/949)) ([ee7b892](https://github.com/ng-packagr/ng-packagr/commit/ee7b892)), closes [#948](https://github.com/ng-packagr/ng-packagr/issues/948)



<a name="4.0.0-rc.1"></a>
# [4.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v4.0.0-rc.0...v4.0.0-rc.1) (2018-06-12)


### Bug Fixes

* update rollup to version ^0.60.0 ([#926](https://github.com/ng-packagr/ng-packagr/issues/926)) ([9de5a1d](https://github.com/ng-packagr/ng-packagr/commit/9de5a1d))


### Performance Improvements

* speed up discovery of secondary entry points ([#930](https://github.com/ng-packagr/ng-packagr/issues/930)) ([d646721](https://github.com/ng-packagr/ng-packagr/commit/d646721)), closes [#921](https://github.com/ng-packagr/ng-packagr/issues/921)



<a name="4.0.0-rc.0"></a>
# [4.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0...v4.0.0-rc.0) (2018-05-25)


### Bug Fixes

* unable to use an arbitrarily named config file ([#886](https://github.com/ng-packagr/ng-packagr/issues/886)) ([a50bf7d](https://github.com/ng-packagr/ng-packagr/commit/a50bf7d)), closes [#878](https://github.com/ng-packagr/ng-packagr/issues/878)
* update rxjs to version ~6.2.0 ([#898](https://github.com/ng-packagr/ng-packagr/issues/898)) ([9e3de7c](https://github.com/ng-packagr/ng-packagr/commit/9e3de7c))


### Features

* embed templates and stylesheets with ngc `enableResourceInlining` ([#872](https://github.com/ng-packagr/ng-packagr/issues/872)) ([2655def](https://github.com/ng-packagr/ng-packagr/commit/2655def)), closes [#770](https://github.com/ng-packagr/ng-packagr/issues/770)


### BREAKING CHANGES

* ng-packagr now requires a `peerDependency` of `@angular/compiler: ^6.0.0` and `@angular/compiler-cli: ^6.0.0`. Removes support for building packages with Angular compiler v5.
* Consumers using a custom tsconfig via the programmatic API need to add `enableResourceInlining` under `angularCompilerOptions`



<a name="3.0.0"></a>
# [3.0.0](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.5...v3.0.0) (2018-05-25)


### Bug Fixes

* allow sideEffects to be set as an array ([#866](https://github.com/ng-packagr/ng-packagr/issues/866)) ([04bb2ad](https://github.com/ng-packagr/ng-packagr/commit/04bb2ad))
* analyse exported imports ([#873](https://github.com/ng-packagr/ng-packagr/issues/873)) ([c03d6f8](https://github.com/ng-packagr/ng-packagr/commit/c03d6f8))
* auto-wire paths for transitive dependencies of entry points ([#875](https://github.com/ng-packagr/ng-packagr/issues/875)) ([e9da0cf](https://github.com/ng-packagr/ng-packagr/commit/e9da0cf)), closes [#852](https://github.com/ng-packagr/ng-packagr/issues/852)
* embed tslib helpers in umd bundle ([#868](https://github.com/ng-packagr/ng-packagr/issues/868)) ([0fc30e5](https://github.com/ng-packagr/ng-packagr/commit/0fc30e5))
* internal method `dependsOn` appends instead of replacing ([#867](https://github.com/ng-packagr/ng-packagr/issues/867)) ([207f2ac](https://github.com/ng-packagr/ng-packagr/commit/207f2ac))
* remove duplicate declarations under `dist` ([#864](https://github.com/ng-packagr/ng-packagr/issues/864)) ([46fd858](https://github.com/ng-packagr/ng-packagr/commit/46fd858))
* throw an error when a circular dependency is detected ([#888](https://github.com/ng-packagr/ng-packagr/issues/888)) ([ada4081](https://github.com/ng-packagr/ng-packagr/commit/ada4081)), closes [#855](https://github.com/ng-packagr/ng-packagr/issues/855)
* update rollup to version ^0.59.0 ([#876](https://github.com/ng-packagr/ng-packagr/issues/876)) ([57f5ed9](https://github.com/ng-packagr/ng-packagr/commit/57f5ed9))


### Features

* provide UMD module id defaults for rxjs v6 ([#840](https://github.com/ng-packagr/ng-packagr/issues/840)) ([6613dde](https://github.com/ng-packagr/ng-packagr/commit/6613dde)), closes [#781](https://github.com/ng-packagr/ng-packagr/issues/781) [#838](https://github.com/ng-packagr/ng-packagr/issues/838)


### Performance Improvements

* remove extra template type checking for downleveling ([#863](https://github.com/ng-packagr/ng-packagr/issues/863)) ([0e0e46d](https://github.com/ng-packagr/ng-packagr/commit/0e0e46d))


### BREAKING CHANGES

* UMD module ids for rxjs v5 are now longer provided out-ot-the-box. Users whishing to a build library for rxjs@5 (potentially relying on rxjs-compat), must provide the UMD module IDs in the ngPackage.lib.umdModuleIds section. Please take a look at the changeset of PR #840 to see what the UMD module IDs used to be for v5.



<a name="3.0.0-rc.5"></a>
# [3.0.0-rc.5](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.4...v3.0.0-rc.5) (2018-05-11)


### Bug Fixes

* do not disable fullTemplateTypeCheck when ES5 downleveling ([#860](https://github.com/ng-packagr/ng-packagr/issues/860)) ([dfa83f9](https://github.com/ng-packagr/ng-packagr/commit/dfa83f9)), closes [#826](https://github.com/ng-packagr/ng-packagr/issues/826) [#812](https://github.com/ng-packagr/ng-packagr/issues/812) [#822](https://github.com/ng-packagr/ng-packagr/issues/822) [#826](https://github.com/ng-packagr/ng-packagr/issues/826)
* don't override `baseUrl` ([#862](https://github.com/ng-packagr/ng-packagr/issues/862)) ([769b091](https://github.com/ng-packagr/ng-packagr/commit/769b091))


### BREAKING CHANGES

* `baseUrl` in `tsconfig` is not overridden anymore, thus non-relative module paths will be resolved relative to the `baseUrl` in `tsconfig.json`



<a name="3.0.0-rc.4"></a>
# [3.0.0-rc.4](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.3...v3.0.0-rc.4) (2018-05-10)


### Bug Fixes

* add missing 'declaration' option in tsconfig ([#790](https://github.com/ng-packagr/ng-packagr/issues/790)) ([dbd8ce1](https://github.com/ng-packagr/ng-packagr/commit/dbd8ce1))
* correct depth analysis of unordered dependencies for secondaries ([#846](https://github.com/ng-packagr/ng-packagr/issues/846)) ([f4beea9](https://github.com/ng-packagr/ng-packagr/commit/f4beea9))
* create an array large enough to hold all buckets ([#845](https://github.com/ng-packagr/ng-packagr/issues/845)) ([353b0fa](https://github.com/ng-packagr/ng-packagr/commit/353b0fa))
* handle nested entry points with same name ([#850](https://github.com/ng-packagr/ng-packagr/issues/850)) ([f911882](https://github.com/ng-packagr/ng-packagr/commit/f911882)), closes [#851](https://github.com/ng-packagr/ng-packagr/issues/851) [#849](https://github.com/ng-packagr/ng-packagr/issues/849)
* inline sourcemaps as base64-encoded data URI in esm5/esm015 ([#812](https://github.com/ng-packagr/ng-packagr/issues/812)) ([095feb1](https://github.com/ng-packagr/ng-packagr/commit/095feb1)), closes [#785](https://github.com/ng-packagr/ng-packagr/issues/785) [#803](https://github.com/ng-packagr/ng-packagr/issues/803)



<a name="3.0.0-rc.3"></a>
# [3.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.2...v3.0.0-rc.3) (2018-05-06)


### Bug Fixes

* let `ngc` determine the typescript `emitFlags` ([#813](https://github.com/ng-packagr/ng-packagr/issues/813)) ([9b47d72](https://github.com/ng-packagr/ng-packagr/commit/9b47d72))
* migrate code base to compiler-cli@6 ([927e581](https://github.com/ng-packagr/ng-packagr/commit/927e581))
* migrate dependencies to angular 6 ([13917eb](https://github.com/ng-packagr/ng-packagr/commit/13917eb))
* remove nested `dist` folder ([#829](https://github.com/ng-packagr/ng-packagr/issues/829)) ([f9af7ca](https://github.com/ng-packagr/ng-packagr/commit/f9af7ca))
* unpin rollup-plugin-commonjs to version ^9.1.3 ([#823](https://github.com/ng-packagr/ng-packagr/issues/823)) ([17f791f](https://github.com/ng-packagr/ng-packagr/commit/17f791f))
* update fs-extra to version ^6.0.0 ([#825](https://github.com/ng-packagr/ng-packagr/issues/825)) ([2aabd33](https://github.com/ng-packagr/ng-packagr/commit/2aabd33))
* update rollup to version ^0.58.0 ([#772](https://github.com/ng-packagr/ng-packagr/issues/772)) ([cfcf3f9](https://github.com/ng-packagr/ng-packagr/commit/cfcf3f9))
* update rollup-plugin-commonjs to version ^9.1.2 ([#819](https://github.com/ng-packagr/ng-packagr/issues/819)) ([1731968](https://github.com/ng-packagr/ng-packagr/commit/1731968))
* update rxjs to version ~6.0.0 ([b171a28](https://github.com/ng-packagr/ng-packagr/commit/b171a28))
* update rxjs to version ~6.1.0 ([#832](https://github.com/ng-packagr/ng-packagr/issues/832)) ([365c759](https://github.com/ng-packagr/ng-packagr/commit/365c759))


### Features

* enable `fullTemplateTypeCheck` ([#826](https://github.com/ng-packagr/ng-packagr/issues/826)) ([83f2cb6](https://github.com/ng-packagr/ng-packagr/commit/83f2cb6))



<a name="3.0.0-rc.2"></a>
# [3.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.1...v3.0.0-rc.2) (2018-04-21)


### Bug Fixes

* add moduleResolution to downleveling options ([#787](https://github.com/ng-packagr/ng-packagr/issues/787)) ([d7b4094](https://github.com/ng-packagr/ng-packagr/commit/d7b4094)), closes [#784](https://github.com/ng-packagr/ng-packagr/issues/784)
* generate correct UMD module id for `[@angular](https://github.com/angular)/common/http/testing` ([#782](https://github.com/ng-packagr/ng-packagr/issues/782)) ([a0451d8](https://github.com/ng-packagr/ng-packagr/commit/a0451d8))
* missing options when setting custom tsconfig ([#786](https://github.com/ng-packagr/ng-packagr/issues/786)) ([d687853](https://github.com/ng-packagr/ng-packagr/commit/d687853))
* update rollup-plugin-commonjs to version 9.1.0 ([#659](https://github.com/ng-packagr/ng-packagr/issues/659)) ([5204b0c](https://github.com/ng-packagr/ng-packagr/commit/5204b0c))



<a name="3.0.0-rc.1"></a>
# [3.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v3.0.0-rc.0...v3.0.0-rc.1) (2018-04-17)


### Features

* add `"sideEffects": false` flag to dist-ready package.json ([#776](https://github.com/ng-packagr/ng-packagr/issues/776)) ([11535bb](https://github.com/ng-packagr/ng-packagr/commit/11535bb))



<a name="3.0.0-rc.0"></a>
# [3.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v2.4.2...v3.0.0-rc.0) (2018-04-16)


### Bug Fixes

* update autoprefixer to version ^8.0.0 ([#615](https://github.com/ng-packagr/ng-packagr/issues/615)) ([a60bd88](https://github.com/ng-packagr/ng-packagr/commit/a60bd88))
* update browserslist to version ^3.0.0 ([#610](https://github.com/ng-packagr/ng-packagr/issues/610)) ([2f50354](https://github.com/ng-packagr/ng-packagr/commit/2f50354))
* update less to version ^3.0.0 ([#611](https://github.com/ng-packagr/ng-packagr/issues/611)) ([f45d89d](https://github.com/ng-packagr/ng-packagr/commit/f45d89d))


### Features

*  build libaries in Angular Package Format (APF) v6.0 (#738) ([4e6c4f4](https://github.com/ng-packagr/ng-packagr/commit/4e6c4f4)), closes [#738](https://github.com/ng-packagr/ng-packagr/issues/738) [#705](https://github.com/ng-packagr/ng-packagr/issues/705)
* drop support for node v6 and v7 (no longer supported by devkit) ([ee7e65d](https://github.com/ng-packagr/ng-packagr/commit/ee7e65d))
* remove deprecated code ([#773](https://github.com/ng-packagr/ng-packagr/issues/773)) ([866a4b5](https://github.com/ng-packagr/ng-packagr/commit/866a4b5))
* update tsickle to =>0.27.3, rollup to ^0.57.1 ([#769](https://github.com/ng-packagr/ng-packagr/issues/769)) ([3bcf233](https://github.com/ng-packagr/ng-packagr/commit/3bcf233)), closes [#679](https://github.com/ng-packagr/ng-packagr/issues/679)


### BREAKING CHANGES

Removes several deprecated code items.
  - option `sassIncludePaths` is removed, please use `styleIncludePaths` instead
  - option `workingDirectory` is removed, removed corresponding getter from `NgPackage` class
  - method `createNgPackage` removed from programmatic API
  - removed `NgArtefacts` class from API
  - removed `BuildStep` interface from API
  - removed tarball generation ([#721](https://github.com/ng-packagr/ng-packagr/issues/721))

There were some important changes, mainly related to `rollup`, most of the options and functionality provided by `rollup` plugins (comments & license) have been removed, due to the fact this is not inline with APF V6 as one will end up with different outputs in different modules.
  - **`comments` option has been removed** 
  - **`licensePath` option has been removed** 

In APF V6, it is recommanded to not embed dependencies due to the fact that it will end up having multiple copies of the same library in a single application.

  - **`embedded` option has been removed and the original functionality was dropped** as it increased the chance of having 2 copies of the same library. The recommended migration is to switch to `bundledDependencies`

More info in the APF v6 spec: https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview

Documentation on npm bundled dependencies: http://npm.github.io/using-pkgs-docs/package-json/types/bundleddependencies.html 

#### Tarball generation

As we don't generate a tarball by default anymore, you should manually, after the build, create it by running [`npm pack`](https://docs.npmjs.com/cli/pack) in the `dist` folder of your library. See [#802](https://github.com/ng-packagr/ng-packagr/issues/802) and [#738 (comment)](https://github.com/ng-packagr/ng-packagr/pull/738#issuecomment-379457152) for more information.


<a name="2.4.2"></a>
## [2.4.2](https://github.com/ng-packagr/ng-packagr/compare/v2.4.1...v2.4.2) (2018-04-08)


### Bug Fixes

* update uglify-js version ([#754](https://github.com/ng-packagr/ng-packagr/issues/754)) ([ff176b7](https://github.com/ng-packagr/ng-packagr/commit/ff176b7)), closes [#752](https://github.com/ng-packagr/ng-packagr/issues/752)



<a name="2.4.1"></a>
## [2.4.1](https://github.com/ng-packagr/ng-packagr/compare/v2.4.0...v2.4.1) (2018-03-25)


### Bug Fixes

* don't verify devDependencies in dist-ready package.json ([#721](https://github.com/ng-packagr/ng-packagr/issues/721)) ([3535e86](https://github.com/ng-packagr/ng-packagr/commit/3535e86))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/ng-packagr/ng-packagr/compare/v2.3.0...v2.4.0) (2018-03-25)


### Features

* create a tarball (dist.tgz) for the npm package ([#715](https://github.com/ng-packagr/ng-packagr/issues/715)) ([94bc915](https://github.com/ng-packagr/ng-packagr/commit/94bc915))


### Performance Improvements

* read content and map `async` in `minifyJsFile` ([#717](https://github.com/ng-packagr/ng-packagr/issues/717)) ([4da0052](https://github.com/ng-packagr/ng-packagr/commit/4da0052))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/ng-packagr/ng-packagr/compare/v2.2.0...v2.3.0) (2018-03-25)


### Bug Fixes

* cannot read property 'text' of undefined ([#669](https://github.com/ng-packagr/ng-packagr/issues/669)) ([b91eb66](https://github.com/ng-packagr/ng-packagr/commit/b91eb66)), closes [#668](https://github.com/ng-packagr/ng-packagr/issues/668)
* move `keepLifecycleScripts` to ngPackage conf ([#688](https://github.com/ng-packagr/ng-packagr/issues/688)) ([8eb6667](https://github.com/ng-packagr/ng-packagr/commit/8eb6667))
* validate non-peerDependencies at build time ([#687](https://github.com/ng-packagr/ng-packagr/issues/687)) ([ec9779c](https://github.com/ng-packagr/ng-packagr/commit/ec9779c))


### Features

* add support for AMD module id in umd bundles ([#675](https://github.com/ng-packagr/ng-packagr/issues/675)) ([59713b8](https://github.com/ng-packagr/ng-packagr/commit/59713b8))
* allow Angular 6 as a peer dependency ([#714](https://github.com/ng-packagr/ng-packagr/issues/714)) ([530d54e](https://github.com/ng-packagr/ng-packagr/commit/530d54e))
* allow to override umd module identifier ([#683](https://github.com/ng-packagr/ng-packagr/issues/683)) ([b6e099f](https://github.com/ng-packagr/ng-packagr/commit/b6e099f))
* remove scripts section in dist-ready package.json ([#686](https://github.com/ng-packagr/ng-packagr/issues/686)) ([810e58a](https://github.com/ng-packagr/ng-packagr/commit/810e58a))
* support intra-package dependencies (re. entry points, experimental) ([#685](https://github.com/ng-packagr/ng-packagr/issues/685)) ([988968e](https://github.com/ng-packagr/ng-packagr/commit/988968e))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/ng-packagr/ng-packagr/compare/v2.1.0...v2.2.0) (2018-03-06)


### Bug Fixes

* add `chalk` to dependencies ([#647](https://github.com/ng-packagr/ng-packagr/issues/647)) ([e8aa93f](https://github.com/ng-packagr/ng-packagr/commit/e8aa93f))
* lock rollup-plugin-commonjs dependency at 8.3.0 ([#658](https://github.com/ng-packagr/ng-packagr/issues/658)) ([59d0c3b](https://github.com/ng-packagr/ng-packagr/commit/59d0c3b)), closes [#657](https://github.com/ng-packagr/ng-packagr/issues/657)
* update rollup-plugin-license to version ^0.6.0 ([#664](https://github.com/ng-packagr/ng-packagr/issues/664)) ([2a21d7e](https://github.com/ng-packagr/ng-packagr/commit/2a21d7e))


### Features

* add `deleteDestPath` option ([#655](https://github.com/ng-packagr/ng-packagr/issues/655)) ([61922c1](https://github.com/ng-packagr/ng-packagr/commit/61922c1)), closes [#632](https://github.com/ng-packagr/ng-packagr/issues/632)
* add Graph and Node API for angular transforms ([#644](https://github.com/ng-packagr/ng-packagr/issues/644)) ([92e6082](https://github.com/ng-packagr/ng-packagr/commit/92e6082))
* add update notifier to cli ([#649](https://github.com/ng-packagr/ng-packagr/issues/649)) ([f5c4afc](https://github.com/ng-packagr/ng-packagr/commit/f5c4afc))
* analyse typescript dependencies of an entry point ([#648](https://github.com/ng-packagr/ng-packagr/issues/648)) ([749d48b](https://github.com/ng-packagr/ng-packagr/commit/749d48b))
* reduce library bundle size by clean-css ([#563](https://github.com/ng-packagr/ng-packagr/issues/563)) ([65386c2](https://github.com/ng-packagr/ng-packagr/commit/65386c2)), closes [#614](https://github.com/ng-packagr/ng-packagr/issues/614)


### Performance Improvements

* re-use postcss processor instance per entry point ([#645](https://github.com/ng-packagr/ng-packagr/issues/645)) ([f70985b](https://github.com/ng-packagr/ng-packagr/commit/f70985b))



<a name="2.1.0"></a>

# [2.1.0](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.13...v2.1.0) (2018-02-21)

### Bug Fixes

* pass 'setParentNodes' when calling 'createCompilerHost' ([#625](https://github.com/ng-packagr/ng-packagr/issues/625)) ([9baa0bc](https://github.com/ng-packagr/ng-packagr/commit/9baa0bc))
* prune multiple import statements for `tslib` ([#588](https://github.com/ng-packagr/ng-packagr/issues/588)) ([2b6dac4](https://github.com/ng-packagr/ng-packagr/commit/2b6dac4)), closes [#587](https://github.com/ng-packagr/ng-packagr/issues/587)
* recognize aliased and namespace decorator imports ([#585](https://github.com/ng-packagr/ng-packagr/issues/585)) ([8f88c5a](https://github.com/ng-packagr/ng-packagr/commit/8f88c5a))
* return redirect target of typescript source file ([#637](https://github.com/ng-packagr/ng-packagr/issues/637)) ([c1fced0](https://github.com/ng-packagr/ng-packagr/commit/c1fced0)), closes [#473](https://github.com/ng-packagr/ng-packagr/issues/473)

### Features

* `styleIncludePaths` for feature parity with Angular CLI ([#603](https://github.com/ng-packagr/ng-packagr/issues/603)) ([ab973f4](https://github.com/ng-packagr/ng-packagr/commit/ab973f4)), closes [#282](https://github.com/ng-packagr/ng-packagr/issues/282)
* comments cleanup and license header file ([#574](https://github.com/ng-packagr/ng-packagr/issues/574)) ([0237f24](https://github.com/ng-packagr/ng-packagr/commit/0237f24)), closes [#362](https://github.com/ng-packagr/ng-packagr/issues/362)
* export and test public api surface ([#584](https://github.com/ng-packagr/ng-packagr/issues/584)) ([6858e2e](https://github.com/ng-packagr/ng-packagr/commit/6858e2e))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.13...v2.0.0) (2018-02-05)

Version 2 of ng-packagr is targeting Angular 5 (and beyond).
Update your projects by:

```bash
$ yarn add --dev ng-packagr@^2.0.0 @angular/compiler@^5.0.0 @angular/compiler-cli@^5.0.0 tsickle
```

### Migrating from v1 (Breaking changes from v1.6.0 to v2.0.0)

* Users now need to install `@angular/compiler`, `@angular/compiler-cli`, `typescript`, and `tsickle` to the `devDependency` section of their project (if not already installed). ng-packagr uses both the TypeScript and the Angular compiler version provided by the user workspace.
* The setting for external dependencies (`lib.externals`) has been removed in favour of `lib.umdModuleIds` which is now just used to provide the UMD module identifiers of external dependencies.
  By default, all dependencies are now treated as externals and thus are not embedded in the final bundle.
  If a dependency should be embedded in the distributables, it needs to be explicity added to `lib.embedded`.
  Please consult the updated README on migrating your package confguration from `lib.externals` to `lib.umdModuleIds` and `lib.embedded`.
* Discovery of primary and secondary entry points is changed to read from the following file sources. File locations are tried in this order:
  * `package.json` with `ngPackage` property
  * `ng-package.json` (requires a `package.json` as sibling)
  * `ng-package.js` (with a default export, requires a `package.json` as sibling)
* Setting `ngPackage.src` has no effect any more. The source directory (base path) is equivalent to the location of the (primary) `ng-package.json`, `package.json`, or `ng-package.js`.
* UMD Module IDs of packages have been changed: when you published a scoped npm package, e.g. `@sample/core`, the UMD module ID used to be `core` including only the second part of the npm package name. With this change, the UMD module ID is now `sample.core`. For secondary entrypoints, e.g. `@sample/core/testing`, the UMD module ID now also includes every part of the npm package name, e.g. `sample.core.testing`. Publishing your npm packages built with this version of ng-packagr causes a new UMD module ID to be generated. Users of your library need to update their configuration, e.g. when using SystemJS!

An excerpt of each bug fix and feature is listed below for the respective release candidate version!

### Bug Fixes

* recognize aliased and namespace decorator imports ([#585](https://github.com/ng-packagr/ng-packagr/issues/585)) ([8f88c5a](https://github.com/ng-packagr/ng-packagr/commit/8f88c5a))

### Features

* comments cleanup and license header file ([#574](https://github.com/ng-packagr/ng-packagr/issues/574)) ([0237f24](https://github.com/ng-packagr/ng-packagr/commit/0237f24)), closes [#362](https://github.com/ng-packagr/ng-packagr/issues/362)
* export and test public api surface ([#584](https://github.com/ng-packagr/ng-packagr/issues/584)) ([6858e2e](https://github.com/ng-packagr/ng-packagr/commit/6858e2e))

<a name="2.0.0-rc.13"></a>

# [2.0.0-rc.13](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.12...v2.0.0-rc.13) (2018-02-03)

### Bug Fixes

* add `postcss-discard-comments` as a dependency ([#544](https://github.com/ng-packagr/ng-packagr/issues/544)) ([bce5705](https://github.com/ng-packagr/ng-packagr/commit/bce5705)), closes [#543](https://github.com/ng-packagr/ng-packagr/issues/543)
* css comments should be discarded irrespective of `cssUrl` ([#562](https://github.com/ng-packagr/ng-packagr/issues/562)) ([d6eb971](https://github.com/ng-packagr/ng-packagr/commit/d6eb971))
* embed `tslib` helpers in UMD bundles only ([#573](https://github.com/ng-packagr/ng-packagr/issues/573)) ([7a996ef](https://github.com/ng-packagr/ng-packagr/commit/7a996ef)), closes [#371](https://github.com/ng-packagr/ng-packagr/issues/371)
* map `rxjs/util/*` to its UMD module ID by default ([#580](https://github.com/ng-packagr/ng-packagr/issues/580)) ([7c452fb](https://github.com/ng-packagr/ng-packagr/commit/7c452fb)), closes [#579](https://github.com/ng-packagr/ng-packagr/issues/579)
* pin rollup dependency to 0.53.0 ([13a79d4](https://github.com/ng-packagr/ng-packagr/commit/13a79d4))
* report build errors ([d136422](https://github.com/ng-packagr/ng-packagr/commit/d136422))
* strip bom from templates and stylesheet files ([#571](https://github.com/ng-packagr/ng-packagr/issues/571)) ([5830e6a](https://github.com/ng-packagr/ng-packagr/commit/5830e6a)), closes [#487](https://github.com/ng-packagr/ng-packagr/issues/487)
* update rollup to version `^0.55.0` ([#534](https://github.com/ng-packagr/ng-packagr/issues/534)) ([0cb0cce](https://github.com/ng-packagr/ng-packagr/commit/0cb0cce)), closes [#488](https://github.com/ng-packagr/ng-packagr/issues/488) [#523](https://github.com/ng-packagr/ng-packagr/issues/523)
* write type definition files (via triple-slash reference) to npm package ([#443](https://github.com/ng-packagr/ng-packagr/issues/443)) ([9dad573](https://github.com/ng-packagr/ng-packagr/commit/9dad573))

### Features

* expand api to `.withTsConfig(string|TsConfig)`, `.forProject()` ([#561](https://github.com/ng-packagr/ng-packagr/issues/561)) ([48f3569](https://github.com/ng-packagr/ng-packagr/commit/48f3569)), closes [#557](https://github.com/ng-packagr/ng-packagr/issues/557)
* le jardin, a broccoli-inspired rewrite ([#572](https://github.com/ng-packagr/ng-packagr/issues/572)) ([6efc2d2](https://github.com/ng-packagr/ng-packagr/commit/6efc2d2))

### Performance Improvements

* don't await and return ([#577](https://github.com/ng-packagr/ng-packagr/issues/577)) ([f479e81](https://github.com/ng-packagr/ng-packagr/commit/f479e81))

<a name="2.0.0-rc.12"></a>

# [2.0.0-rc.12](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.11...v2.0.0-rc.12) (2018-01-25)

### Bug Fixes

* dispose the previous TransformationResult after inlining ([#533](https://github.com/ng-packagr/ng-packagr/issues/533)) ([b4c7e89](https://github.com/ng-packagr/ng-packagr/commit/b4c7e89))
* strip comments from processed styles ([#512](https://github.com/ng-packagr/ng-packagr/issues/512)) ([542aed2](https://github.com/ng-packagr/ng-packagr/commit/542aed2)), closes [#503](https://github.com/ng-packagr/ng-packagr/issues/503)

### Features

* enable tsconfig customization thru the programmatic API ([#517](https://github.com/ng-packagr/ng-packagr/issues/517)) ([8b04d44](https://github.com/ng-packagr/ng-packagr/commit/8b04d44)), closes [#256](https://github.com/ng-packagr/ng-packagr/issues/256)

<a name="2.0.0-rc.11"></a>

# [2.0.0-rc.11](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.10...v2.0.0-rc.11) (2018-01-17)

### Bug Fixes

* escape unicode characters in css with a double blackslash ([#453](https://github.com/ng-packagr/ng-packagr/issues/453)) ([9891128](https://github.com/ng-packagr/ng-packagr/commit/9891128)), closes [#425](https://github.com/ng-packagr/ng-packagr/issues/425)

### Features

* add language level support for library authors ([#486](https://github.com/ng-packagr/ng-packagr/issues/486)) ([b33e0bc](https://github.com/ng-packagr/ng-packagr/commit/b33e0bc))
* enable custom `sassIncludePaths` for resolving scss imports ([#494](https://github.com/ng-packagr/ng-packagr/issues/494)) ([f8e8dc5](https://github.com/ng-packagr/ng-packagr/commit/f8e8dc5))

<a name="2.0.0-rc.10"></a>

# [2.0.0-rc.10](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.9...v2.0.0-rc.10) (2018-01-10)

### Bug Fixes

* exclude ng-package.json from entry point discovery ([#471](https://github.com/ng-packagr/ng-packagr/issues/471)) ([38103ac](https://github.com/ng-packagr/ng-packagr/commit/38103ac)), closes [#463](https://github.com/ng-packagr/ng-packagr/issues/463)
* relax version constraints, enable TypeScript 2.6 (w/ tsickle ^0.26.0) ([3c3c6a7](https://github.com/ng-packagr/ng-packagr/commit/3c3c6a7))
* update dependendy tsickle to >=0.25.5 <0.26.0 ([#456](https://github.com/ng-packagr/ng-packagr/issues/456)) ([136867a](https://github.com/ng-packagr/ng-packagr/commit/136867a)), closes [#452](https://github.com/ng-packagr/ng-packagr/issues/452)

### Features

* stabilize command API, move towards customizing through DI ([#470](https://github.com/ng-packagr/ng-packagr/issues/470)) ([f992283](https://github.com/ng-packagr/ng-packagr/commit/f992283))
* turn on `downlevelIteration` flag for ES5 bundles ([#475](https://github.com/ng-packagr/ng-packagr/issues/475)) ([616888a](https://github.com/ng-packagr/ng-packagr/commit/616888a)), closes [#418](https://github.com/ng-packagr/ng-packagr/issues/418)

<a name="2.0.0-rc.9"></a>

# [2.0.0-rc.9](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.8...v2.0.0-rc.9) (2017-12-30)

### Bug Fixes

* supports extracting styles from multiple styleUrls ([#455](https://github.com/ng-packagr/ng-packagr/issues/455)) ([4cfd98d](https://github.com/ng-packagr/ng-packagr/commit/4cfd98d))

<a name="2.0.0-rc.8"></a>

# [2.0.0-rc.8](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.7...v2.0.0-rc.8) (2017-12-26)

### Bug Fixes

* remove `umdModuleIds` for esm2015 flattening (rollup `es` format) ([#429](https://github.com/ng-packagr/ng-packagr/issues/429)) ([b103b74](https://github.com/ng-packagr/ng-packagr/commit/b103b74))
* remove moduleId from rollup bundle options ([#444](https://github.com/ng-packagr/ng-packagr/issues/444)) ([da332d2](https://github.com/ng-packagr/ng-packagr/commit/da332d2))
* update rollup to version ^0.53.0 ([#438](https://github.com/ng-packagr/ng-packagr/issues/438)) ([8918809](https://github.com/ng-packagr/ng-packagr/commit/8918809))

### Features

* dynamic rollup configuration for esm flattening ([#395](https://github.com/ng-packagr/ng-packagr/issues/395)) ([5712429](https://github.com/ng-packagr/ng-packagr/commit/5712429))
* expose `build` and `version` commands from public API ([#447](https://github.com/ng-packagr/ng-packagr/issues/447)) ([286819c](https://github.com/ng-packagr/ng-packagr/commit/286819c))
* expose a public API surface for programmatic usage ([ec2b29f](https://github.com/ng-packagr/ng-packagr/commit/ec2b29f))
* remove `src` property from package schema ([#431](https://github.com/ng-packagr/ng-packagr/issues/431)) ([960484c](https://github.com/ng-packagr/ng-packagr/commit/960484c))

### BREAKING CHANGES

* Setting `ngPackage.src` has no effect any more. The source directory (base path) is equivalent to the location of the (primary) `ng-package.json`, `package.json`, or `ng-package.js`.
* `lib.externals` has been removed in favour of `lib.umdModuleIds` which is now just used to provide the UMD module identifiers of external dependencies.
  By default, all dependencies are now treated as externals and thus are not embedded in the final bundle.
  If a dependency should be embedded in the distributables, it needs to be explicity added to `lib.embedded`.
  Please consult the updated README on migrating your package confguration from `lib.externals` to `lib.umdModuleIds` and `lib.embedded`.

<a name="2.0.0-rc.7"></a>

# [2.0.0-rc.7](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.6...v2.0.0-rc.7) (2017-12-15)

### Bug Fixes

* log error message only on build failure ([51643e1](https://github.com/ng-packagr/ng-packagr/commit/51643e1))
* print `@angular/compiler-cli` version ([b0e362e](https://github.com/ng-packagr/ng-packagr/commit/b0e362e))
* print rollup warnings to `log.warn()` ([356a01b](https://github.com/ng-packagr/ng-packagr/commit/356a01b))
* relax on non-call-expression decorators in typescript parsing ([7135c42](https://github.com/ng-packagr/ng-packagr/commit/7135c42))
* set `peerDependencies` to `tsickle: ^0.24.0` and `typescript: >=2.4.2 <2.6` ([#387](https://github.com/ng-packagr/ng-packagr/issues/387)) ([001f63f](https://github.com/ng-packagr/ng-packagr/commit/001f63f))
* set peerDependency `tsickle: >=0.24.0 <0.26` ([d682cd2](https://github.com/ng-packagr/ng-packagr/commit/d682cd2))
* update fs-extra to version ^5.0.0 ([#400](https://github.com/ng-packagr/ng-packagr/issues/400)) ([9e6d081](https://github.com/ng-packagr/ng-packagr/commit/9e6d081))

### Features

* discover entry points from user packages ([#383](https://github.com/ng-packagr/ng-packagr/issues/383)) ([4a7e96e](https://github.com/ng-packagr/ng-packagr/commit/4a7e96e)), closes [#190](https://github.com/ng-packagr/ng-packagr/issues/190)
* do not prune working directory on build failure ([6445316](https://github.com/ng-packagr/ng-packagr/commit/6445316))
* provide version info with `ng-packagr --version` cli option ([#393](https://github.com/ng-packagr/ng-packagr/issues/393)) ([758c403](https://github.com/ng-packagr/ng-packagr/commit/758c403))

### Performance Improvements

* read set of typescript source files only once ([#388](https://github.com/ng-packagr/ng-packagr/issues/388)) ([bbbbd27](https://github.com/ng-packagr/ng-packagr/commit/bbbbd27))

### BREAKING CHANGES

* Discovery of primary and secondary entry points is changed to read from the following file sources. File locations are tried in this order:

- `package.json` with `ngPackage` property
- `ng-package.json` (requires a `package.json` as sibling)
- `ng-package.js` (with a default export, requires a `package.json` as sibling)

<a name="2.0.0-rc.6"></a>

# [2.0.0-rc.6](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.5...v2.0.0-rc.6) (2017-12-09)

Bug fixes for the previous release candidate.

Contains a fix addressing typescript build errors due to synthesized nodes, see [#369](https://github.com/ng-packagr/ng-packagr/issues/369).

Peer Dependencies on ngc and tsc changed to caret version ranges:

* `"@angular/compiler: "^5.0.0"`
* `"typescript: ">= 2.4.2 < 2.6`

Make sure to use an [appropriate combination of Angular and TypeScript](https://blog.angular.io/angular-5-1-more-now-available-27d372f5eb4e)!

### Bug Fixes

* peer depend on angular >=5.0.0 <6.0.0, typescript >= 2.4.2 < 2.6 ([3674f0e](https://github.com/ng-packagr/ng-packagr/commit/3674f0e))
* register ngc emit callback for `tsickle` processing ([#384](https://github.com/ng-packagr/ng-packagr/issues/384)) ([15bd7c1](https://github.com/ng-packagr/ng-packagr/commit/15bd7c1))
* show proper path of failure on sass inline ([#380](https://github.com/ng-packagr/ng-packagr/issues/380)) ([8c380aa](https://github.com/ng-packagr/ng-packagr/commit/8c380aa))

### Features

* add option `cssUrl`, inline css `url:()` to `data:` URIs ([#345](https://github.com/ng-packagr/ng-packagr/issues/345)) ([1c71f24](https://github.com/ng-packagr/ng-packagr/commit/1c71f24)), closes [#263](https://github.com/ng-packagr/ng-packagr/issues/263)

<a name="2.0.0-rc.5"></a>

# [2.0.0-rc.5](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2017-12-06)

### Bug Fixes

* inline empty stylesheets ([aa621b1](https://github.com/ng-packagr/ng-packagr/commit/aa621b1))
* update rollup to version ^0.52.0 ([#318](https://github.com/ng-packagr/ng-packagr/issues/318)) ([317c88b](https://github.com/ng-packagr/ng-packagr/commit/317c88b))

### Features

* consistent `flatModuleFile` naming for bundles ([#361](https://github.com/ng-packagr/ng-packagr/issues/361)) ([17b4e0f](https://github.com/ng-packagr/ng-packagr/commit/17b4e0f))
* enable tslib `importHelpers`, reducing bundle sizes ([#338](https://github.com/ng-packagr/ng-packagr/issues/338)) ([f1e4cf6](https://github.com/ng-packagr/ng-packagr/commit/f1e4cf6))
* expose programmatic API and typings ([#342](https://github.com/ng-packagr/ng-packagr/issues/342)) ([61c7b50](https://github.com/ng-packagr/ng-packagr/commit/61c7b50))
* implement `transformSources()` w/ domain model ([#356](https://github.com/ng-packagr/ng-packagr/issues/356)) ([89ce2ce](https://github.com/ng-packagr/ng-packagr/commit/89ce2ce))
* relocate source map file paths to `ng://<(at)org>/<package>/<sub>` ([#332](https://github.com/ng-packagr/ng-packagr/issues/332)) ([c9b8d73](https://github.com/ng-packagr/ng-packagr/commit/c9b8d73))
* resolve "~" scss import statements to nearest `node_modules` ([#352](https://github.com/ng-packagr/ng-packagr/issues/352)) ([ee9800b](https://github.com/ng-packagr/ng-packagr/commit/ee9800b)), closes [#346](https://github.com/ng-packagr/ng-packagr/issues/346)
* resource inlining w/ TypeScript transformations ([#279](https://github.com/ng-packagr/ng-packagr/issues/279)) ([4753066](https://github.com/ng-packagr/ng-packagr/commit/4753066))

### BREAKING CHANGES

* Introduces a domain model for _Package_ and _Entry Point_ (as defined in Angular Package Format Specification Glossary). Refactors the source code transformation pipeline. Albeit the refactoring was undertaken with care and integration tests were not changed, it may cause undesired behaviour.

<a name="2.0.0-rc.4"></a>

# [2.0.0-rc.4](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2017-11-28)

### Bug Fixes

* bump `commander` to `^2.12.0`, optimize typings for `cpx` and `commander` ([#323](https://github.com/ng-packagr/ng-packagr/issues/323)) ([68d0c34](https://github.com/ng-packagr/ng-packagr/commit/68d0c34))

### Features

* align distributed files with `Angular Package Format v5.0` ([#322](https://github.com/ng-packagr/ng-packagr/issues/322)) ([fff712a](https://github.com/ng-packagr/ng-packagr/commit/fff712a)), closes [#257](https://github.com/ng-packagr/ng-packagr/issues/257) [#319](https://github.com/ng-packagr/ng-packagr/issues/319) [#321](https://github.com/ng-packagr/ng-packagr/issues/321)

<a name="2.0.0-rc.3"></a>

# [2.0.0-rc.3](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2017-11-24)

### Bug Fixes

* support new cdk modules 'accordion' and 'layout' `@angular/cdk@5.0.0-rc0` ([#297](https://github.com/ng-packagr/ng-packagr/issues/297)) ([3016585](https://github.com/ng-packagr/ng-packagr/commit/3016585))
* support rxjs lettable operators ([#307](https://github.com/ng-packagr/ng-packagr/issues/307)) ([5de8045](https://github.com/ng-packagr/ng-packagr/commit/5de8045)), closes [#247](https://github.com/ng-packagr/ng-packagr/issues/247)

<a name="2.0.0-rc.2"></a>

# [2.0.0-rc.2](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2017-11-17)

<a name="2.0.0-rc.1"></a>

# [2.0.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2017-11-17)

### Bug Fixes

* report ngc compiler diagnostics and throw an error ([#292](https://github.com/ng-packagr/ng-packagr/issues/292)) ([815509b](https://github.com/ng-packagr/ng-packagr/commit/815509b))

### Features

* add rxjs mapTo operator to rollup globals ([#293](https://github.com/ng-packagr/ng-packagr/issues/293)) ([1a42ce1](https://github.com/ng-packagr/ng-packagr/commit/1a42ce1))

<a name="2.0.0-rc.0"></a>

# [2.0.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v1.6.0...v2.0.0-rc.0) (2017-11-14)

Migrating towards Angular v5, a series of `v2.0.0` release candidates will be published.
These releases will be published using the `next` tag on npm.
Please install the versions with `"ng-packagr: "^2.0.0-rc.0"` or `yarn add --dev ng-packagr@next`.

The `v2.0.0` release candidates collect several breaking changes compared to the last `v1.x`.

### Bug Fixes

* include scope name in module name of Rollup bundle ([#280](https://github.com/ng-packagr/ng-packagr/issues/280)) ([3446453](https://github.com/ng-packagr/ng-packagr/commit/3446453)), closes [#251](https://github.com/ng-packagr/ng-packagr/issues/251)

### Features

* invoke ngc thru `@angular/compiler-cli` version 5.0.x ([c5c32c5](https://github.com/ng-packagr/ng-packagr/commit/c5c32c5)), closes [#219](https://github.com/ng-packagr/ng-packagr/issues/219)
* update typescript to ~2.4.2 for Angular v5 support ([#270](https://github.com/ng-packagr/ng-packagr/issues/270)) ([2c6db4f](https://github.com/ng-packagr/ng-packagr/commit/2c6db4f))

### BREAKING CHANGES

* when you published a scoped npm package, e.g. `@sample/core`, the UMD module ID used to be `core` including only the second part of the npm package name. With this change, the UMD module ID is now `sample.core`. For secondary entrypoints, e.g. `@sample/core/testing`, the UMD module ID now also includes every part of the npm package name, e.g. `sample.core.testing`. Publishing your npm packages built with this version of ng-packagr causes a new UMD module ID to be generated. Users of your library need to update their configuration, e.g. when using SystemJS!
* Users now need to install `@angular/compiler` and `@angular/compiler-cli` to the `devDependency` section of their project (if not already installed). ng-packagr uses both the TypeScript and the Angular compiler version provided by the user workspace.

<a name="1.6.0"></a>

# [1.6.0](https://github.com/ng-packagr/ng-packagr/compare/v1.5.2...v1.6.0) (2017-11-14)

This release rolls back premature Angular v5 support in `v1.6.0-rc.0`.
It is recommended to use this version of ng-packagr for building Angular v4 libraries,
as `typescript` in `2.3.x` and `@angular/tsc-wrapped` in `4.4.x` are used.

Libraries generated with this version of ng-packagr will ship with AoT metadata in version 3,
which is intended for Angular v4.

### Bug Fixes

* update rollup to version ^0.51.0 ([#260](https://github.com/ng-packagr/ng-packagr/issues/260)) ([0fe359e](https://github.com/ng-packagr/ng-packagr/commit/0fe359e))

### Features

* add tsx/jsx support ([#228](https://github.com/ng-packagr/ng-packagr/issues/228)) ([a8eefb9](https://github.com/ng-packagr/ng-packagr/commit/a8eefb9))

<a name="1.5.2"></a>

## [1.5.2](https://github.com/ng-packagr/ng-packagr/compare/v1.5.1...v1.5.2) (2017-11-14)

This release reverts a regression introduced in `v1.5.1`.
See pull request [#268](https://github.com/ng-packagr/ng-packagr/issues/268).

Previously, a user of ng-packagr could install an incompatible typescript version for ng-packagr.
Prevent inadvertent typescript installs by depending on a user's typescript installation (peerDependencies).
This should be (is a) non-breaking change as any Angular project requires typescript as devDependency.

### Bug Fixes

* depend on user's typescript ([8f5bb9c](https://github.com/ng-packagr/ng-packagr/commit/8f5bb9c))

<a name="1.6.0-rc.0"></a>

# [1.6.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v1.5.1...v1.6.0-rc.0) (2017-11-10)

### Bug Fixes

* update rollup to version ^0.51.0 ([#260](https://github.com/ng-packagr/ng-packagr/issues/260)) ([c652f4e](https://github.com/ng-packagr/ng-packagr/commit/c652f4e))

### Features

* add tsx/jsx support ([#228](https://github.com/ng-packagr/ng-packagr/issues/228)) ([4068664](https://github.com/ng-packagr/ng-packagr/commit/4068664))
* invoke ngc thru `@angular/compiler-cli` version 5.0.x ([#271](https://github.com/ng-packagr/ng-packagr/issues/271)) ([c5c32c5](https://github.com/ng-packagr/ng-packagr/commit/c5c32c5)), closes [#219](https://github.com/ng-packagr/ng-packagr/issues/219)
* update typescript to ~2.4.2 for Angular v5 support ([#270](https://github.com/ng-packagr/ng-packagr/issues/270)) ([2c6db4f](https://github.com/ng-packagr/ng-packagr/commit/2c6db4f))

<a name="1.5.1"></a>

## [1.5.1](https://github.com/ng-packagr/ng-packagr/compare/v1.5.0...v1.5.1) (2017-11-10)

### Bug Fixes

* depend on user's typescript and tsc-wrapped ([#268](https://github.com/ng-packagr/ng-packagr/issues/268)) ([42b2f08](https://github.com/ng-packagr/ng-packagr/commit/42b2f08))

<a name="1.5.0"></a>

# [1.5.0](https://github.com/ng-packagr/ng-packagr/compare/v1.4.0...v1.5.0) (2017-11-05)

Secondary entrypoints – such as `@angular/core/testing`, `@angular/common/http`, `@angular/cdk/a11y`, et al. – can now be bundled with ng-packagr. Angular's `tsc-wrapped` is now version ^4.4.5 and `typescript` is ^2.3.4 – whether these work well with Angular 5 needs to be verified.

### Bug Fixes

* add description for `ngPackage` property in `package.json` ([3f8e25c](https://github.com/ng-packagr/ng-packagr/commit/3f8e25c))
* copy `README.md` and `LICENSE` just for primary entry ([#215](https://github.com/ng-packagr/ng-packagr/issues/215))([38776d8](https://github.com/ng-packagr/ng-packagr/commit/38776d8))
* validate `ngPackage` property for secondary entry resolution ([#229](https://github.com/ng-packagr/ng-packagr/issues/229)) ([ee5949b](https://github.com/ng-packagr/ng-packagr/commit/ee5949b))
* resolve node_modules folder dynamically from typescript ([#211](https://github.com/ng-packagr/ng-packagr/issues/211)) ([9a7008d](https://github.com/ng-packagr/ng-packagr/commit/9a7008d))
* produce correct secondary package paths ([#197](https://github.com/ng-packagr/ng-packagr/issues/197)) ([4ca213e](https://github.com/ng-packagr/ng-packagr/commit/4ca213e))
* respect secondary entry file customizations ([#198](https://github.com/ng-packagr/ng-packagr/issues/198)) ([9de7524](https://github.com/ng-packagr/ng-packagr/commit/9de7524))
* regression in cli defaults ([18515af](https://github.com/ng-packagr/ng-packagr/commit/18515af))

### Features

* bump [`@angular/tsc-wrapped`](https://github.com/angular/angular) to ^4.4.5 and [`typescript`](https://github.com/Microsoft/TypeScript) to ^2.3.4 ([#200](https://github.com/ng-packagr/ng-packagr/issues/200)) ([b2b369a](https://github.com/ng-packagr/ng-packagr/commit/b2b369a))
* minify UMD bundles ([#205](https://github.com/ng-packagr/ng-packagr/issues/205)) ([c58689b](https://github.com/ng-packagr/ng-packagr/commit/c58689b))
* dynamic secondary entry points ([5922cb1](https://github.com/ng-packagr/ng-packagr/commit/5922cb1))
* allow empty package.json for secondary entries ([c0af605](https://github.com/ng-packagr/ng-packagr/commit/c0af605))
* help command on cli ([c68a190](https://github.com/ng-packagr/ng-packagr/commit/c68a190))
* provide more frequent console feedback ([#212](https://github.com/ng-packagr/ng-packagr/issues/212)) ([2801db9](https://github.com/ng-packagr/ng-packagr/commit/2801db9))

### BREAKING CHANGES

* for auto-discovery of secondary entries, `package.json` files are now validated whether a `ngPackage` property exists; the value can be an empty object. This is a breaking change for a feature introduced in release candidate versions 1.5.0-rc.0/1.5.0-rc.1. **When upgrading from 1.4.x to 1.5.0, it is not-breaking**.

<a name="1.5.0-rc.1"></a>

# [1.5.0-rc.1](https://github.com/ng-packagr/ng-packagr/compare/v1.5.0-rc.0...v1.5.0-rc.1) (2017-10-23)

### Bug Fixes

* produce correct secondary package paths ([#197](https://github.com/ng-packagr/ng-packagr/issues/197)) ([4ca213e](https://github.com/ng-packagr/ng-packagr/commit/4ca213e))
* respect secondary entry file customizations ([#198](https://github.com/ng-packagr/ng-packagr/issues/198)) ([9de7524](https://github.com/ng-packagr/ng-packagr/commit/9de7524))

### Features

* bump angular/[@tsc-wrapped](https://github.com/tsc-wrapped) to ^4.4.5 and [@typescript](https://github.com/typescript) to ^2.3.4 ([#200](https://github.com/ng-packagr/ng-packagr/issues/200)) ([b2b369a](https://github.com/ng-packagr/ng-packagr/commit/b2b369a))
* minify UMD bundles ([#205](https://github.com/ng-packagr/ng-packagr/issues/205)) ([c58689b](https://github.com/ng-packagr/ng-packagr/commit/c58689b))

<a name="1.5.0-rc.0"></a>

# [1.5.0-rc.0](https://github.com/ng-packagr/ng-packagr/compare/v1.4.1...v1.5.0-rc.0) (2017-10-18)

### Bug Fixes

* regression in cli defaults ([18515af](https://github.com/ng-packagr/ng-packagr/commit/18515af))

### Features

* allow empty package.json for 2ndary entries ([c0af605](https://github.com/ng-packagr/ng-packagr/commit/c0af605))
* dynamic secondary entry points ([5922cb1](https://github.com/ng-packagr/ng-packagr/commit/5922cb1))
* help command on cli ([c68a190](https://github.com/ng-packagr/ng-packagr/commit/c68a190))

<a name="1.4.1"></a>

## [1.4.1](https://github.com/ng-packagr/ng-packagr/compare/v1.4.0...v1.4.1) (2017-10-11)

### Bug Fixes

* include `package.schema.json` in dist artefacts and npm package ([e660545](https://github.com/ng-packagr/ng-packagr/commit/e660545))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/ng-packagr/ng-packagr/compare/v1.3.0...v1.4.0) (2017-10-10)

### Bug Fixes

* pass empty string to `less.render()` ([f5106eb](https://github.com/ng-packagr/ng-packagr/commit/f5106eb)), closes [#165](https://github.com/ng-packagr/ng-packagr/issues/165)

### Features

* add json schema for `package.json` with custom `ngPackage` property ([#173](https://github.com/ng-packagr/ng-packagr/issues/173)) ([dd85fd2](https://github.com/ng-packagr/ng-packagr/commit/dd85fd2))
* resolve ng-package config from multiple sources ([c193b68](https://github.com/ng-packagr/ng-packagr/commit/c193b68))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/ng-packagr/ng-packagr/compare/v1.2.1...v1.3.0) (2017-10-04)

### Features

* external dependencies from `[@angular](https://github.com/angular)/cdk` are supported by default ([4b20e29](https://github.com/ng-packagr/ng-packagr/commit/4b20e29))

<a name="1.2.1"></a>

## [1.2.1](https://github.com/ng-packagr/ng-packagr/compare/v1.2.0...v1.2.1) (2017-09-29)

### Bug Fixes

* properly handle rejected promises in utils ([#130](https://github.com/ng-packagr/ng-packagr/issues/130)) ([#126](https://github.com/ng-packagr/ng-packagr/issues/126)) ([d41c6b2](https://github.com/ng-packagr/ng-packagr/commit/d41c6b2))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/ng-packagr/ng-packagr/compare/v1.1.0...v1.2.0) (2017-09-20)

### Features

* add rollup commonjs plugin to support all library types ([#121](https://github.com/ng-packagr/ng-packagr/issues/121)) ([3f87f5e](https://github.com/ng-packagr/ng-packagr/commit/3f87f5e))
* update rollup to version 0.50.0 ([#124](https://github.com/ng-packagr/ng-packagr/issues/124)) ([fb9f529](https://github.com/ng-packagr/ng-packagr/commit/fb9f529))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/ng-packagr/ng-packagr/compare/v1.0.1...v1.1.0) (2017-09-12)

### Features

* add stylus preprocessor support ([#120](https://github.com/ng-packagr/ng-packagr/issues/120)) ([19933cd](https://github.com/ng-packagr/ng-packagr/commit/19933cd))

<a name="1.0.1"></a>

## [1.0.1](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0...v1.0.1) (2017-08-31)

### Bug Fixes

* make a dummy release for 1.0.1 ([a6d6893](https://github.com/ng-packagr/ng-packagr/commit/a6d6893))

<a name="1.0.0"></a>

# [1.0.0](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.17...v1.0.0) (2017-08-31)

### Features

* ng-packagr is released 1.0.0 final ([665a249](https://github.com/ng-packagr/ng-packagr/commit/665a249))

<a name="1.0.0-pre.17"></a>

# [1.0.0-pre.17](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.16...v1.0.0-pre.17) (2017-08-28)

### Bug Fixes

* **package:** update rollup to version 0.49.0 ([b5b920c](https://github.com/ng-packagr/ng-packagr/commit/b5b920c))

### Features

* support external dependency '[@angular](https://github.com/angular)/common/http' by default ([df44752](https://github.com/ng-packagr/ng-packagr/commit/df44752))

<a name="1.0.0-pre.16"></a>

# [1.0.0-pre.16](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.15...v1.0.0-pre.16) (2017-08-22)

### Features

* update rollup to version ^0.48.0 ([9110899](https://github.com/ng-packagr/ng-packagr/commit/9110899))

<a name="1.0.0-pre.15"></a>

# [1.0.0-pre.15](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.14...v1.0.0-pre.15) (2017-08-16)

### Bug Fixes

* move ng-package.schema.json to dist root directory ([ad6325b](https://github.com/ng-packagr/ng-packagr/commit/ad6325b))
* read json config values thru `schema.$$get()` ([0c3130c](https://github.com/ng-packagr/ng-packagr/commit/0c3130c))

### Features

* update rollup to version 0.46.0 ([1f25f7a](https://github.com/ng-packagr/ng-packagr/commit/1f25f7a))
* update rollup to version 0.47.0 ([29a8901](https://github.com/ng-packagr/ng-packagr/commit/29a8901))

### BREAKING CHANGES

* the `ng-package.schema.json` was accidentally moved to `lib` folder in a previous release. Restore it in its original location!

<a name="1.0.0-pre.14"></a>

# [1.0.0-pre.14](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.13...v1.0.0-pre.14) (2017-08-07)

### Bug Fixes

* add 'let' to known rxjs operators ([9927f93](https://github.com/ng-packagr/ng-packagr/commit/9927f93)), closes [#85](https://github.com/ng-packagr/ng-packagr/issues/85)
* move less from devDependencies to dependencies ([09ef8ce](https://github.com/ng-packagr/ng-packagr/commit/09ef8ce)), closes [#88](https://github.com/ng-packagr/ng-packagr/issues/88)
* strip utf-8 bom when reading files ([cb34889](https://github.com/ng-packagr/ng-packagr/commit/cb34889)), closes [#87](https://github.com/ng-packagr/ng-packagr/issues/87)

<a name="1.0.0-pre.13"></a>

# [1.0.0-pre.13](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.12...v1.0.0-pre.13) (2017-07-28)

### Features

* support rxjs operators with different import syntaxes (#82) ([d64aa40](https://github.com/ng-packagr/ng-packagr/commit/d64aa40))

<a name="1.0.0-pre.12"></a>

# [1.0.0-pre.12](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.11...v1.0.0-pre.12) (2017-07-27)

### Features

* Added less support ([06d7f84](https://github.com/ng-packagr/ng-packagr/commit/06d7f84))

<a name="1.0.0-pre.11"></a>

# [1.0.0-pre.11](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.10...v1.0.0-pre.11) (2017-07-22)

### Bug Fixes

* pass file pathes to `postcss.process()` (#77) ([1051831](https://github.com/ng-packagr/ng-packagr/commit/1051831))

<a name="1.0.0-pre.10"></a>

# [1.0.0-pre.10](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.9...v1.0.0-pre.10) (2017-07-14)

### Bug Fixes

* correct explanation of `lib.flatModuleFile` ([d95afb0](https://github.com/ng-packagr/ng-packagr/commit/d95afb0))

### Features

* remove node 4.x support ([7a857d4](https://github.com/ng-packagr/ng-packagr/commit/7a857d4))

<a name="1.0.0-pre.9"></a>

# [1.0.0-pre.9](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.8...v1.0.0-pre.9) (2017-07-11)

### Bug Fixes

* use pkg name for es modules folder name when `@<scope>` is undefined (#70) ([cf24b1b](https://github.com/ng-packagr/ng-packagr/commit/cf24b1b))

<a name="1.0.0-pre.8"></a>

# [1.0.0-pre.8](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.7...v1.0.0-pre.8) (2017-07-11)

### Features

* import scss files with "~" syntax from node_modules (#67) ([205bbc0](https://github.com/ng-packagr/ng-packagr/commit/205bbc0))
* update rollup to version ^0.45.0 (#69) ([d124cb3](https://github.com/ng-packagr/ng-packagr/commit/d124cb3)), closes [#68](https://github.com/ng-packagr/ng-packagr/issues/68)

<a name="1.0.0-pre.7"></a>

# [1.0.0-pre.7](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.6...v1.0.0-pre.7) (2017-07-04)

### Features

* exclude node_modules from being copied to working dir (#60) ([6bfe713](https://github.com/ng-packagr/ng-packagr/commit/6bfe713)), closes [#51](https://github.com/ng-packagr/ng-packagr/issues/51)
* version bump rollup to ^0.43.0 ([227e3b7](https://github.com/ng-packagr/ng-packagr/commit/227e3b7))

<a name="1.0.0-pre.6"></a>

# [1.0.0-pre.6](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.5...v1.0.0-pre.6) (2017-06-24)

### Features

* lib.externals support. ([c226972](https://github.com/ng-packagr/ng-packagr/commit/c226972))

<a name="1.0.0-pre.5"></a>

# [1.0.0-pre.5](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.4...v1.0.0-pre.5) (2017-06-23)

### Features

* autoprefixer / postcss support ([4115ad1](https://github.com/ng-packagr/ng-packagr/commit/4115ad1)), closes [#54](https://github.com/ng-packagr/ng-packagr/issues/54)
* version bump to [@angular](https://github.com/angular)/tsc-wrapped 4.2.0 ([7091f2a](https://github.com/ng-packagr/ng-packagr/commit/7091f2a))

<a name="1.0.0-pre.4"></a>

# [1.0.0-pre.4](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.3...v1.0.0-pre.4) (2017-06-08)

### Bug Fixes

* correct paths in generated sourcemaps (#50) ([c389160](https://github.com/ng-packagr/ng-packagr/commit/c389160)), closes [#46](https://github.com/ng-packagr/ng-packagr/issues/46)
* temporarily disable es5 source maps ([804dd8c](https://github.com/ng-packagr/ng-packagr/commit/804dd8c))

<a name="1.0.0-pre.3"></a>

# [1.0.0-pre.3](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.2...v1.0.0-pre.3) (2017-06-06)

<a name="1.0.0-pre.2"></a>

# [1.0.0-pre.2](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.1...v1.0.0-pre.2) (2017-06-06)

### Bug Fixes

* **package:** update rollup to version 0.42.0 (#37) ([75f1811](https://github.com/ng-packagr/ng-packagr/commit/75f1811))
* add `rxjs/ReplaySubject` to rollup defaults (#44) ([237b24e](https://github.com/ng-packagr/ng-packagr/commit/237b24e))

<a name="1.0.0-pre.1"></a>

# [1.0.0-pre.1](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-pre.0...v1.0.0-pre.1) (2017-06-02)

### Bug Fixes

* report Errors with stack traces, fail builds on promise rejection (#36) ([6076074](https://github.com/ng-packagr/ng-packagr/commit/6076074))

<a name="1.0.0-pre.0"></a>

# [1.0.0-pre.0](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.7...v1.0.0-pre.0) (2017-06-02)

### Features

* use '1.0.0-pre.n' version number for any upcoming prerelease ([a31c824](https://github.com/ng-packagr/ng-packagr/commit/a31c824))

<a name="1.0.0-alpha.7"></a>

# [1.0.0-alpha.7](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.3...v1.0.0-alpha.7) (2017-06-02)

### Bug Fixes

* correctly locate `typings` file ([3d5c266](https://github.com/ng-packagr/ng-packagr/commit/3d5c266))
* set flatModuleId to the name from package.json (#24) ([1e2c33f](https://github.com/ng-packagr/ng-packagr/commit/1e2c33f))

### Features

* remove deprecated `ng-package.json properties` ([9b988b0](https://github.com/ng-packagr/ng-packagr/commit/9b988b0))

<a name="1.0.0-alpha.6"></a>

# [1.0.0-alpha.6](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2017-06-02)

<a name="1.0.0-alpha.5"></a>

# [1.0.0-alpha.5](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.3...v1.0.0-alpha.5) (2017-06-02)

### Bug Fixes

* correctly locate `typings` file ([3d5c266](https://github.com/ng-packagr/ng-packagr/commit/3d5c266))
* set flatModuleId to the name from package.json (#24) ([1e2c33f](https://github.com/ng-packagr/ng-packagr/commit/1e2c33f))

<a name="1.0.0-alpha.4"></a>

# [1.0.0-alpha.4](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2017-06-02)

### Bug Fixes

* correctly locate `typings` file ([3d5c266](https://github.com/ng-packagr/ng-packagr/commit/3d5c266))
* set flatModuleId to the name from package.json (#24) ([1e2c33f](https://github.com/ng-packagr/ng-packagr/commit/1e2c33f))

<a name="1.0.0-alpha.3"></a>

# [1.0.0-alpha.3](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2017-05-31)

### Features

* implement build steps with updated `ng-package.json` ([259a9fc](https://github.com/ng-packagr/ng-packagr/commit/259a9fc))
* include `[@angular](https://github.com/angular)/router` in default rollup opts ([3d576ee](https://github.com/ng-packagr/ng-packagr/commit/3d576ee))
* JSON schema for `ng-package.json` ([76dd2ff](https://github.com/ng-packagr/ng-packagr/commit/76dd2ff))

<a name="1.0.0-alpha.2"></a>

# [1.0.0-alpha.2](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2017-05-27)

### Features

* default config file `ng-package.json` (#10) ([00fa15c](https://github.com/ng-packagr/ng-packagr/commit/00fa15c))

### BREAKING CHANGES

* the default config file is renamed from `.ng-packagr.json` to `ng-package.json`. Use one `ng-package.json` per each Angular library project.

<a name="1.0.0-alpha.1"></a>

# [1.0.0-alpha.1](https://github.com/ng-packagr/ng-packagr/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2017-05-27)

### Bug Fixes

* resolve pathes relative to `ng-package.json` ([852ce43](https://github.com/ng-packagr/ng-packagr/commit/852ce43))

### Features

* [@angular](https://github.com/angular) and rxjs rollup globals ([58702e3](https://github.com/ng-packagr/ng-packagr/commit/58702e3))
* each Angular package is reflected in one `ng-package.json` file (#8) ([b8d0649](https://github.com/ng-packagr/ng-packagr/commit/b8d0649))

<a name="1.0.0-alpha.0"></a>

# 1.0.0-alpha.0 (2017-05-19)

### Features

* cli command `ng-packagr` for npm script users ([6d4a90e](https://github.com/ng-packagr/ng-packagr/commit/6d4a90e))
* configuratin with `.ng-packagr.json` file ([c1762b3](https://github.com/ng-packagr/ng-packagr/commit/c1762b3))
* demo library ([2cb2066](https://github.com/ng-packagr/ng-packagr/commit/2cb2066))
* implement `ng-packagr` ([8474e36](https://github.com/ng-packagr/ng-packagr/commit/8474e36))
* Initial proof-of-concept compilation ([91880b9](https://github.com/ng-packagr/ng-packagr/commit/91880b9))
* produce source maps in Angular Package ([bc84b54](https://github.com/ng-packagr/ng-packagr/commit/bc84b54))
