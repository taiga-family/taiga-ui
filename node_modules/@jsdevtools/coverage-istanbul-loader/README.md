Istanbul code coverage loader for Webpack
==============================================

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/coverage-istanbul-loader/blob/master/.github/workflows/CI-CD.yaml)
[![Build Status](https://github.com/JS-DevTools/coverage-istanbul-loader/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/coverage-istanbul-loader/blob/master/.github/workflows/CI-CD.yaml)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/coverage-istanbul-loader/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/coverage-istanbul-loader?branch=master)
[![Dependencies](https://david-dm.org/JS-DevTools/coverage-istanbul-loader.svg)](https://david-dm.org/JS-DevTools/coverage-istanbul-loader)

[![npm](https://img.shields.io/npm/v/@jsdevtools/coverage-istanbul-loader.svg)](https://www.npmjs.com/package/@jsdevtools/coverage-istanbul-loader)
[![License](https://img.shields.io/npm/l/@jsdevtools/coverage-istanbul-loader.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/JS-DevTools/coverage-istanbul-loader)



This is a [Webpack loader](https://webpack.js.org/loaders/) that uses [Istanbul](https://istanbul.js.org/) to add code coverage instrumentation to your code. This is especially useful for in-browser testing, in a tool like [Karma](https://karma-runner.github.io/3.0/index.html), where you can use [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to output code coverage data in a variety of formats that are supported by services like [Coveralls](https://coveralls.io/) or [Codacy](https://www.codacy.com/).

Coverage Istanbul Loader is based on [Istanbul Instrumenter Loader](https://github.com/webpack-contrib/istanbul-instrumenter-loader), but uses a newer version of the [Istanbul API](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-lib-instrument) and has better support for source maps.



Usage
--------------------------
See [the examples folder](examples) for usage examples for various use cases.

- **["hello, world" example](examples/hello-world)**<br>
  This is the most simplistic example.  It just uses coverage-istanbul-loader with its default options to produce an output bundle that contains code coverage instrumentation.

- **[TypeScript example](examples/typescript)**<br>
  This example demonstrates using coverage-istanbul-loader with transpiled code.  It correctly maps the instrumented JavaScript code back to the original TypeScript source code.

- **[Karma example](examples/karma)**<br>
  This example demonstrates using coverage-istanbul-loader with [Karma](https://karma-runner.github.io/3.0/index.html) and [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to produce code coverage reports for browser tests.

- **[Example with options](examples/options)**<br>
  This example demonstrates passing options to coverage-istanbul-loader.  The options are passed-on to [istanbul-lib-instrument](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-lib-instrument), so [all the same options](https://github.com/istanbuljs/istanbuljs/blob/25509c7ff31f114e7036a940ed799d6d0548b706/packages/istanbul-lib-instrument/src/instrumenter.js#L11-L33) are supported.



Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome! [File an issue](https://github.com/JS-DevTools/coverage-istanbul-loader/issues) on GitHub and [submit a pull request](https://github.com/JS-DevTools/coverage-istanbul-loader/pulls).

#### Building/Testing
To build/test the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/JS-DevTools/coverage-istanbul-loader.git`

2. __Install dependencies__<br>
`npm install`

3. __Build the code__<br>
`npm run build`

4. __Run the tests__<br>
`npm test`



License
--------------------------
coverage-istanbul-loader is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/JS-DevTools/coverage-istanbul-loader) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
