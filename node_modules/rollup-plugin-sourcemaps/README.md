# rollup-plugin-sourcemaps

[![npm](https://img.shields.io/npm/v/rollup-plugin-sourcemaps.svg)](https://www.npmjs.com/package/rollup-plugin-sourcemaps)
[![Build Status](https://img.shields.io/travis/maxdavidson/rollup-plugin-sourcemaps/master.svg)](https://travis-ci.org/maxdavidson/rollup-plugin-sourcemaps)
[![Coverage Status](https://img.shields.io/coveralls/maxdavidson/rollup-plugin-sourcemaps/master.svg)](https://coveralls.io/github/maxdavidson/rollup-plugin-sourcemaps?branch=master)


[Rollup](https://rollupjs.org) plugin for loading files with existing source maps.
Inspired by [webpack/source-map-loader](https://github.com/webpack/source-map-loader).

Works with rollup 0.31.2 or later.

If you use [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel),
you might be able to use the [`inputSourceMap`](https://babeljs.io/docs/en/options#inputsourcemap) option instead of this plugin.

## Why?

- You transpile your files with source maps before bundling with rollup
- You consume external modules with bundled source maps

## Usage

```javascript
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.js',
  plugins: [sourcemaps()],
  output: {
    sourcemap: true,
    file: 'dist/my-awesome-package.js',
  },
};
```
