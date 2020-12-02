"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeGuard_1 = require("../TypeGuard");
function getImplicitRoleForLi(node) {
    var parentNode = node.parent;
    var parentTagName;
    if (TypeGuard_1.isJsxElement(parentNode)) {
        parentTagName = parentNode.openingElement.tagName.getText();
    }
    return parentTagName === 'ol' || parentTagName === 'ul' ? 'listitem' : undefined;
}
exports.li = getImplicitRoleForLi;
//# sourceMappingURL=li.js.map