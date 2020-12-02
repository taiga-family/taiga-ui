# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.6"></a>
## [2.0.6](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.5...v2.0.6) (2019-07-20)


### Bug Fixes

* get source code from sourceMapStore on write report ([619d90d](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/619d90d)), closes [#72](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/72)



<a name="2.0.5"></a>
## [2.0.5](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.4...v2.0.5) (2019-02-17)


### Bug Fixes

* correctly strip source file prefixes when no webpack.context is defined ([3c48bf8](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/3c48bf8))
* don't double-report files with mixed slashes in their names on windows ([38087c2](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/38087c2))



<a name="2.0.4"></a>
## [2.0.4](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.3...v2.0.4) (2018-09-08)


### Bug Fixes

* handle source roots being undefined on windows ([8eba911](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/8eba911)), closes [#55](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/55)



<a name="2.0.3"></a>
## [2.0.3](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.2...v2.0.3) (2018-09-01)


### Bug Fixes

* update istanbuljs to 2.x ([a835e22](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/a835e22)), closes [#52](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/52)
* use correct source file path separators on windows ([938e93c](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/938e93c)), closes [#47](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/47)



<a name="2.0.2"></a>
## [2.0.2](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.1...v2.0.2) (2018-08-24)


### Bug Fixes

* files with no coverage should be preserved by default ([#54](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/54)) ([e5a5545](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/e5a5545)), closes [#53](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/53)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v2.0.0...v2.0.1) (2018-05-23)


### Bug Fixes

* don't log errors twice when using multiple reporters ([a17b6ca](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/a17b6ca)), closes [#44](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/44)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.4.3...v2.0.0) (2018-05-17)


### Features

* drop support for node 4 ([26ad3af](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/26ad3af))


### BREAKING CHANGES

* node 4 is no longer supported



<a name="1.4.3"></a>
## [1.4.3](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.4.2...v1.4.3) (2018-05-17)


### Bug Fixes

* **verbose:** pass the verbose option to istanbul if set ([9473517](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/9473517)), closes [#43](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/43)



<a name="1.4.2"></a>
## [1.4.2](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.4.1...v1.4.2) (2018-03-06)


### Bug Fixes

* all browsers should have their own output folder when not combined ([4aad40b](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/4aad40b)), closes [#39](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/39)



<a name="1.4.1"></a>
## [1.4.1](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.4.0...v1.4.1) (2018-01-24)


### Bug Fixes

* handle no config being set ([5483e2b](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/5483e2b)), closes [#36](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/36)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.3.3...v1.4.0) (2018-01-23)


### Features

* add combineBrowserReports option ([2ae16ee](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/2ae16ee)), closes [#34](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/34)



<a name="1.3.3"></a>
## [1.3.3](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.3.1...v1.3.3) (2017-12-26)


### Bug Fixes

* don't prepend the webpack context to absolute source roots ([138e8f8](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/138e8f8)), closes [#33](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/33)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.3.0...v1.3.1) (2017-12-23)


### Bug Fixes

* prepend the webpack context to the source root if not set ([4138b80](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/4138b80)), closes [#32](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/32)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.2.1...v1.3.0) (2017-05-26)


### Features

* **thresholds:** allow overriding per file thresholds ([1a894f0](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/1a894f0)), closes [#20](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/20)
* **thresholds:** allow threshold logs not to be emitted as errors ([2de647c](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/2de647c)), closes [#19](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/19)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.2.0...v1.2.1) (2017-04-30)


### Bug Fixes

* don't throw when there are no sources as part of the sourcemap ([4fc5311](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/4fc5311)), closes [#15](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/15)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/compare/v1.1.0...v1.2.0) (2017-04-15)


### Features

* **thresholds:** allow per file enforcement of threshold reporting ([f6d71b3](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/commit/f6d71b3)), closes [#12](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/12)

# 1.1.0

* Add the skipFilesWithNoCoverage option

# 1.0.0

* Add the %browser% placeholder in the dir option to allow multiple browsers to output coverage

# 0.3.0

* Add coverage thresold enforcement via the thresholds option

# 0.2.0

* Add the `fixWebpackSourcePaths` option

# 0.1.0

* Initial release