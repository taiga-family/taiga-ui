"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(value) {
    return [].concat(value);
}
exports.toArray = toArray;
function flatten(value) {
    return [].concat.apply([], value);
}
exports.flatten = flatten;
function unique(value) {
    return [...new Set(value)];
}
exports.unique = unique;
//# sourceMappingURL=array.js.map