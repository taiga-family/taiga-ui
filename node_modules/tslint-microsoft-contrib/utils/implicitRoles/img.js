"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsxAttribute_1 = require("../JsxAttribute");
var altString = 'alt';
function getImplicitRoleForImg(node) {
    var alt = JsxAttribute_1.getJsxAttributesFromJsxElement(node)[altString];
    if (alt && JsxAttribute_1.getStringLiteral(alt)) {
        return 'img';
    }
    return 'presentation';
}
exports.img = getImplicitRoleForImg;
//# sourceMappingURL=img.js.map