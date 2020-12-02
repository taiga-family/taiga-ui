import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import arrayLikeToArray from "@babel/runtime-corejs2/helpers/esm/arrayLikeToArray";
export default function _maybeArrayLike(next, arr, i) {
  if (arr && !_Array$isArray(arr) && typeof arr.length === "number") {
    var len = arr.length;
    return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
  }

  return next(arr, i);
}