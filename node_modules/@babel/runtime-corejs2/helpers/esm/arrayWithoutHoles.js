import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import arrayLikeToArray from "@babel/runtime-corejs2/helpers/esm/arrayLikeToArray";
export default function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}