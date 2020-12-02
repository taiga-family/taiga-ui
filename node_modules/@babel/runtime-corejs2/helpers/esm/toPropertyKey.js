import _typeof from "@babel/runtime-corejs2/helpers/esm/typeof";
import toPrimitive from "@babel/runtime-corejs2/helpers/esm/toPrimitive";
export default function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}