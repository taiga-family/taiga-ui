var path = require('path');
var slashRegex = /\\/g;

function canonical(p) {
  return p.replace(slashRegex, '/');
}

function wrapWithCanonical(fn) {
  return function() {
    return canonical(fn.apply(path, arguments));
  };
}

// Wrap the functions that return a path
var toChange = ['normalize', 'join', 'resolve', 'relative', 'dirname', 'format'];
toChange.forEach(function(fn) {
  module.exports[fn] = wrapWithCanonical(path[fn]);
});
// and leave the rest alone
var toLeave = ['basename', 'delimiter', 'extname', 'isAbsolute', 'parse', 'sep'];
toLeave.forEach(function(prop) {
  module.exports[prop] = path[prop];
});

module.exports.original = path;
module.exports.canonical = canonical;