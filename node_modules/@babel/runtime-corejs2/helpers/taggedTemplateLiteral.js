var _Object$defineProperties = require("@babel/runtime-corejs2/core-js/object/define-properties");

var _Object$freeze = require("@babel/runtime-corejs2/core-js/object/freeze");

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _Object$freeze(_Object$defineProperties(strings, {
    raw: {
      value: _Object$freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;