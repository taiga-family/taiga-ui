"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse_1 = require("./traverse");
function getPath(obj, path) {
    var keys = path.split('.');
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (obj == null) {
            return obj;
        }
        var properties = obj.getSourceFile ? traverse_1.getProperties(obj) : {};
        obj = key in properties ? properties[key] : obj[key];
    }
    return obj;
}
exports.getPath = getPath;
function inPath(node, ancestor, path) {
    if (path.length === 0) {
        return node === ancestor;
    }
    if (ancestor == null) {
        return false;
    }
    var first = path[0];
    var field = ancestor[first];
    var remainingPath = path.slice(1);
    if (Array.isArray(field)) {
        return field.some(function (item) { return inPath(node, item, remainingPath); });
    }
    else {
        return inPath(node, field, remainingPath);
    }
}
exports.inPath = inPath;
//# sourceMappingURL=utils.js.map