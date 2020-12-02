"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAttributeValue_1 = require("./getAttributeValue");
var getLiteralValue_1 = require("./getLiteralValue");
function attributesComparator(baseAttributes, el) {
    if (baseAttributes === void 0) { baseAttributes = []; }
    var attributes = __spreadArrays(el.attrs, el.inputs);
    return baseAttributes.every(function (baseAttr) {
        return attributes.some(function (attribute) {
            if (el.name === 'a' && attribute.name === 'routerLink') {
                return true;
            }
            if (baseAttr.name !== attribute.name) {
                return false;
            }
            if (baseAttr.value && baseAttr.value !== getLiteralValue_1.getLiteralValue(getAttributeValue_1.getAttributeValue(el, baseAttr.name))) {
                return false;
            }
            return true;
        });
    });
}
exports.attributesComparator = attributesComparator;
