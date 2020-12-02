import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$freeze from "@babel/runtime-corejs2/core-js/object/freeze";
export default function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _Object$freeze(_Object$defineProperties(strings, {
    raw: {
      value: _Object$freeze(raw)
    }
  }));
}