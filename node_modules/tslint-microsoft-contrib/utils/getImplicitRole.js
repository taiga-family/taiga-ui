"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var implicitRoles_1 = require("./implicitRoles");
var TypeGuard_1 = require("./TypeGuard");
function getImplicitRole(node) {
    var tagName;
    if (node === undefined) {
        return undefined;
    }
    if (TypeGuard_1.isJsxElement(node)) {
        tagName = node.openingElement.tagName.getText();
    }
    else if (TypeGuard_1.isJsxSelfClosingElement(node)) {
        tagName = node.tagName.getText();
    }
    else if (TypeGuard_1.isJsxOpeningElement(node)) {
        tagName = node.tagName.getText();
    }
    else {
        tagName = undefined;
    }
    if (tagName === undefined || !(tagName in implicitRoles_1.implicitRoles)) {
        return undefined;
    }
    return implicitRoles_1.implicitRoles[tagName](node);
}
exports.getImplicitRole = getImplicitRole;
//# sourceMappingURL=getImplicitRole.js.map