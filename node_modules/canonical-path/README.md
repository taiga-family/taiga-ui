# Canonical Path Utility

When writing node.js code that must support Windows and *nix OSes, it is sometimes frustrating
that path segments are separated differently depending upon the environment.

Ironically, we can pass in paths with either separator and the library will normalize it to the
current OS's format. But it then returns paths using the current OS's separator.

This utility simple wraps the built-in `path` library such that it only ever returns path segments
separated by forward slashes (/).

## Installation

```
npm install --save canonical-path
```

## Usage

```
var path = require('canonical-path');

var p = path.normalize('a/b/../c');
// p === 'a/c';
```

## Testing

```
npm test
``` 