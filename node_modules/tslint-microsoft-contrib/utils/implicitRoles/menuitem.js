"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
var typeString = 'type';
function getImplicitRoleForMenuitem(node) {
    var typeAttribute = JsxAttribute_1.getJsxAttributesFromJsxElement(node)[typeString];
    if (typeAttribute) {
        var value = JsxAttribute_1.getStringLiteral(typeAttribute) || '';
        switch (value.toUpperCase()) {
            case 'COMMAND':
                return 'menuitem';
            case 'CHECKBOX':
                return 'menuitemcheckbox';
            case 'RADIO':
                return 'menuitemradio';
            default:
                return undefined;
        }
    }
    return undefined;
}
exports.menuitem = getImplicitRoleForMenuitem;
//# sourceMappingURL=menuitem.js.map