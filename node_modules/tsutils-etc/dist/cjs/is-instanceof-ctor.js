"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceofCtor = void 0;
const tsutils = require("tsutils");
const ts = require("typescript");
function isInstanceofCtor(node) {
    const { parent } = node;
    return (tsutils.isBinaryExpression(parent) &&
        node === parent.right &&
        parent.operatorToken.kind === ts.SyntaxKind.InstanceOfKeyword);
}
exports.isInstanceofCtor = isInstanceofCtor;
//# sourceMappingURL=is-instanceof-ctor.js.map