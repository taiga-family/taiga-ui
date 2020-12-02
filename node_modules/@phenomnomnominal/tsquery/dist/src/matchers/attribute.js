"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
// Constants:
var OPERATOR = {
    '=': equal,
    '!=': notEqual,
    '<=': lessThanEqual,
    '<': lessThan,
    '>=': greaterThanEqual,
    '>': greaterThan
};
function attribute(node, selector) {
    var obj = utils_1.getPath(node, selector.name);
    // Bail on undefined but *not* if value is explicitly `null`:
    if (obj === undefined) {
        return false;
    }
    var operator = selector.operator;
    if (operator == null) {
        return obj != null;
    }
    var _a = selector.value, type = _a.type, value = _a.value;
    var matcher = OPERATOR[operator];
    if (matcher) {
        return matcher(obj, value, type);
    }
    return false;
}
exports.attribute = attribute;
function equal(obj, value, type) {
    switch (type) {
        case 'regexp': return typeof obj === 'string' && value.test(obj);
        case 'literal': return "" + value === "" + obj;
        case 'type': return value === typeof obj;
    }
}
function notEqual(obj, value, type) {
    switch (type) {
        case 'regexp': return typeof obj === 'string' && !value.test(obj);
        case 'literal': return "" + value !== "" + obj;
        case 'type': return value !== typeof obj;
    }
}
function lessThanEqual(obj, value) {
    return obj <= value;
}
function lessThan(obj, value) {
    return obj < value;
}
function greaterThanEqual(obj, value) {
    return obj >= value;
}
function greaterThan(obj, value) {
    return obj > value;
}
//# sourceMappingURL=attribute.js.map