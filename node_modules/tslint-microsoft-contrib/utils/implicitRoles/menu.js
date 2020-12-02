"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
var typeString = 'type';
function getImplicitRoleForMenu(node) {
    var typeAttribute = JsxAttribute_1.getJsxAttributesFromJsxElement(node)[typeString];
    if (typeAttribute) {
        var value = JsxAttribute_1.getStringLiteral(typeAttribute) || undefined;
        return value && value.toUpperCase() === 'TOOLBAR' ? 'toolbar' : undefined;
    }
    return undefined;
}
exports.menu = getImplicitRoleForMenu;
//# sourceMappingURL=menu.js.map