"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
var hrefString = 'href';
function getImplicitRoleForAnchor(node) {
    return JsxAttribute_1.getJsxAttributesFromJsxElement(node)[hrefString] ? 'link' : undefined;
}
exports.a = getImplicitRoleForAnchor;
//# sourceMappingURL=a.js.map