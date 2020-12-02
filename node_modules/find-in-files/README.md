find-in-files [![Build Status](https://travis-ci.org/kaesetoast/find-in-files.svg?branch=master)](https://travis-ci.org/kaesetoast/find-in-files) [![Coverage Status](https://img.shields.io/coveralls/kaesetoast/find-in-files.svg)](https://coveralls.io/r/kaesetoast/find-in-files)
=============

A simple tool to search text patterns across multiple files

## Installation
find-in-files is a node module available via npm. You can install it with
```
$ npm install --save find-in-files
```

## Usage
The module exposes two simple functions which expect three parameters each.

```JavaScript
// Async
find(pattern, directory, fileFilter)
// Sync
findSync(pattern, directory, fileFilter)
```

#### pattern [string|object]
The string you want to search for or object to control regex flags

#### directory [string]
The directory you want to search in.

#### fileFilter [regex] \(optional)
A regex you can pass in to only search in files matching the filter.

```JavaScript
var findInFiles = require('find-in-files');
```

Both functions return a promise which will receive the results object. The results object contains the matches, count of matches per file and the lines that match.

```JavaScript
{
    'fileOne.txt': {
        matches: ['found string'],
        count: 1,
        lines: ['This line contains a found string.']
    }
}
```

## Example

```JavaScript
findInFiles.find("I'm Brian, and so's my wife!", '.', '.txt$')
    .then(function(results) {
        for (var result in results) {
            var res = results[result];
            console.log(
                'found "' + res.matches[0] + '" ' + res.count
                + ' times in "' + result + '"'
            );
        }
    });
```

```JavaScript
// Use object to set flags on regular expression. This one will ignore case.
findInFiles.find({'term': "I'm Brian, and so's my wife!", 'flags': 'ig'}, '.', '.txt$')
    .then(function(results) {
        for (var result in results) {
            var res = results[result];
            console.log(
                'found "' + res.matches[0] + '" ' + res.count
                + ' times in "' + result + '"'
            );
        }
    });
```

## License

MIT © [Philipp Nowinski](http://philippnowinski.de)
