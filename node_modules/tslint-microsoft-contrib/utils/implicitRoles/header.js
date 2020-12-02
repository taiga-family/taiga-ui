"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
function getImplicitRoleForHeader(node) {
    return JsxAttribute_1.getAncestorNode(node, 'article') || JsxAttribute_1.getAncestorNode(node, 'section') ? undefined : 'banner';
}
exports.header = getImplicitRoleForHeader;
//# sourceMappingURL=header.js.map