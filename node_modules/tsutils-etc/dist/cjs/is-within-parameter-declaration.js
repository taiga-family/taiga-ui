"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithinParameterDeclaration = void 0;
const tsutils = require("tsutils");
function isWithinParameterDeclaration(node) {
    if (tsutils.isParameterDeclaration(node)) {
        return true;
    }
    return (tsutils.isBindingElement(node) &&
        tsutils.isBindingPattern(node.parent) &&
        tsutils.isParameterDeclaration(node.parent.parent));
}
exports.isWithinParameterDeclaration = isWithinParameterDeclaration;
//# sourceMappingURL=is-within-parameter-declaration.js.map