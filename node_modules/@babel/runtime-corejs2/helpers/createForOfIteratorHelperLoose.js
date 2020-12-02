var _getIterator = require("@babel/runtime-corejs2/core-js/get-iterator");

var _Array$isArray = require("@babel/runtime-corejs2/core-js/array/is-array");

var _Symbol$iterator = require("@babel/runtime-corejs2/core-js/symbol/iterator");

var _Symbol = require("@babel/runtime-corejs2/core-js/symbol");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof _Symbol === "undefined" || o[_Symbol$iterator] == null) {
    if (_Array$isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = _getIterator(o);
  return it.next.bind(it);
}

module.exports = _createForOfIteratorHelperLoose;