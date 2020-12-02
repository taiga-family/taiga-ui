# karma-coverage-istanbul-reporter

[![Build Status](https://travis-ci.org/mattlewis92/karma-coverage-istanbul-reporter.svg?branch=master)](https://travis-ci.org/mattlewis92/karma-coverage-istanbul-reporter)
[![codecov](https://codecov.io/gh/mattlewis92/karma-coverage-istanbul-reporter/branch/master/graph/badge.svg)](https://codecov.io/gh/mattlewis92/karma-coverage-istanbul-reporter)
[![npm version](https://badge.fury.io/js/karma-coverage-istanbul-reporter.svg)](http://badge.fury.io/js/karma-coverage-istanbul-reporter)
[![npm](https://img.shields.io/npm/dm/karma-coverage-istanbul-reporter.svg)](http://badge.fury.io/js/karma-coverage-istanbul-reporter)
[![Twitter Follow](https://img.shields.io/twitter/follow/mattlewis92_.svg)](https://twitter.com/mattlewis92_)

> A karma reporter that uses the latest istanbul 1.x APIs (with full sourcemap support) to report coverage.

<a href="https://www.patreon.com/mattlewis92">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## About

This is a reporter only and does not perform the actual instrumentation of your code. Babel users should use the [istanbul babel plugin](https://github.com/istanbuljs/babel-plugin-istanbul) to instrument your code and webpack + typescript users should use the [istanbul-instrumenter-loader](https://github.com/deepsweet/istanbul-instrumenter-loader) and then use this karma reporter to do the actual reporting. See the [test config](https://github.com/mattlewis92/karma-coverage-istanbul-reporter/blob/master/test/karma.conf.js) for an e2e example of how to combine them.

## Installation

```bash
npm install karma-coverage-istanbul-reporter --save-dev
```

## Configuration

```js
// karma.conf.js
const path = require('path');

module.exports = function(config) {
  config.set({
    // ... rest of karma config

    // anything named karma-* is normally auto included so you probably dont need this
    plugins: ['karma-coverage-istanbul-reporter'],

    reporters: ['coverage-istanbul'],

    // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
      reports: ['html', 'lcovonly', 'text-summary'],

      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'coverage'),

      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,

      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,

      // Omit files with no statements, no functions and no branches from the report
      skipFilesWithNoCoverage: true,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      },

      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        // thresholds per file
        each: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100,
          overrides: {
            'baz/component/**/*.js': {
              statements: 98
            }
          }
        }
      },

      verbose: true // output config used by istanbul for debugging
    }
  });
};
```

### List of reporters and options

- [clover](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/clover/index.js#L8-L9)
- [cobertura](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/cobertura/index.js#L9-L10)
- [html](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137)
- [json-summary](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/json-summary/index.js#L8)
- [json](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/json/index.js#L8)
- lcov
- [lcovonly](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/lcovonly/index.js#L8)
- none
- [teamcity](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/teamcity/index.js#L9-L10)
- [text-lcov](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/text-lcov/index.js#L9)
- [text-summary](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/text-summary/index.js#L9)
- [text](https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/text/index.js#L159-L160)

## Credits

- [Original karma-coverage source](https://github.com/karma-runner/karma-coverage/blob/master/lib/reporter.js)
- [Example of using the new reporter API](https://github.com/facebook/jest/blob/master/scripts/mapCoverage.js)
- [Karma remap istanbul](https://github.com/marcules/karma-remap-istanbul)

## License

MIT
