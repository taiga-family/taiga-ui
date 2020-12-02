"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
function getImplicitRoleForFooter(node) {
    return JsxAttribute_1.getAncestorNode(node, 'article') || JsxAttribute_1.getAncestorNode(node, 'section') ? undefined : 'contentinfo';
}
exports.footer = getImplicitRoleForFooter;
//# sourceMappingURL=footer.js.map