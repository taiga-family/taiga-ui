"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@angular/compiler");
var isHiddenFromScreenReader_1 = require("./isHiddenFromScreenReader");
exports.getAttributeValue = function (element, property) {
    var attr = element.attrs.find(function (attr) { return attr.name === property; });
    var input = element.inputs.find(function (input) { return input.name === property; });
    if (attr) {
        return attr.value;
    }
    if (!input || !(input.value instanceof compiler_1.ASTWithSource)) {
        return undefined;
    }
    if (input.value.ast instanceof compiler_1.LiteralPrimitive) {
        return input.value.ast.value;
    }
    return isHiddenFromScreenReader_1.PROPERTY;
};
