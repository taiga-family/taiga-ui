# karma-source-map-support

[![Greenkeeper badge](https://badges.greenkeeper.io/tschaub/karma-source-map-support.svg)](https://greenkeeper.io/)

Karma plugin for inline sourcemap support.

## Motivation

When loading Browserify bundles with inline source maps (via [`karma-browserify`](https://www.npmjs.com/package/karma-browserify)), the stack traces in Chrome don't mention the original modules.  This plugin uses [`source-map-support`](https://www.npmjs.com/package/source-map-support) to improve the situation.

## Use

Install the plugin with `npm`:

    npm install karma-source-map-support

Configure Karma to load the plugin as a framework:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['source-map-support']
    // additional settings here ...
  });
};
```

## Example

The config settings below are a complete example using Mocha and Browserify with source map support:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'source-map-support', 'mocha'],
    files: [
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    singleRun: false,
    browserify: {
      debug: true // include inline source maps
    }
  });
};
```

Sample stack trace without this plugin:
```
AssertionError: case 2: expected [ 0, 0.6666666666666666 ] to deeply equal [ 0, 0.5 ]
    at Function.assert.deepEqual (http://localhost:9876/absolute/var/folders/6m/3grlt52x7w3047wy0n6j7dr00000gn/T/2d4c510ad9122153a42db199d1cc8e9553208184.browserify:1848:32)
    at Context.<anonymous> (http://localhost:9876/absolute/var/folders/6m/3grlt52x7w3047wy0n6j7dr00000gn/T/2d4c510ad9122153a42db199d1cc8e9553208184.browserify:6061:14)
    at callFn (http://localhost:9876/base/node_modules/mocha/mocha.js:4496:21)
    at Test.Runnable.run (http://localhost:9876/base/node_modules/mocha/mocha.js:4489:7)
    at Runner.runTest (http://localhost:9876/base/node_modules/mocha/mocha.js:4892:10)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4970:12
    at next (http://localhost:9876/base/node_modules/mocha/mocha.js:4817:14)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4827:7
    at next (http://localhost:9876/base/node_modules/mocha/mocha.js:4766:23)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4794:5
```


Sample stack trace with this plugin:
```
AssertionError: case 2: expected [ 0, 0.6666666666666666 ] to deeply equal [ 0, 0.5 ]
    at Function.assert.deepEqual (node_modules/chai/lib/chai/interface/assert.js:205:1)
    at Context.<anonymous> (src/scenes/util/geom.test.js:27:1)
    at callFn (http://localhost:9876/base/node_modules/mocha/mocha.js:4496:21)
    at Test.Runnable.run (http://localhost:9876/base/node_modules/mocha/mocha.js:4489:7)
    at Runner.runTest (http://localhost:9876/base/node_modules/mocha/mocha.js:4892:10)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4970:12
    at next (http://localhost:9876/base/node_modules/mocha/mocha.js:4817:14)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4827:7
    at next (http://localhost:9876/base/node_modules/mocha/mocha.js:4766:23)
    at http://localhost:9876/base/node_modules/mocha/mocha.js:4794:5
```
