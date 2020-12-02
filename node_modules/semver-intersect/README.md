# semver-intersect [![npm](https://img.shields.io/npm/v/semver-intersect.svg)](https://www.npmjs.com/package/semver-intersect) [![Build Status](https://travis-ci.org/snyamathi/semver-intersect.svg?branch=master)](https://travis-ci.org/snyamathi/semver-intersect) [![David](https://david-dm.org/snyamathi/semver-intersect.svg)](https://david-dm.org/snyamathi/semver-intersect) [![Downloads](https://img.shields.io/npm/dm/semver-intersect.svg)](https://npm-stat.com/charts.html?package=semver-intersect) [![Greenkeeper badge](https://badges.greenkeeper.io/snyamathi/semver-intersect.svg)](https://greenkeeper.io/)
Get the intersection of multiple semver ranges

```js
const { intersect } = require('semver-intersect');

// ^4.1.0
intersect('^4.0.0', '^4.1.0');

// ~4.3.0
intersect('^4.0.0', '~4.3.0');

// ~4.3.89
intersect('^4.0.0', '~4.3.89', '~4.3.24', '~4.3.63');

// throws "Range >=4.5.0 is not compatible with <4.4.0"
intersect('^4.0.0', '~4.3.0', '^4.5.0')
```
