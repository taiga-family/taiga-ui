"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThis = void 0;
const ts = require("typescript");
function isThis(node) {
    return node.kind === ts.SyntaxKind.ThisKeyword;
}
exports.isThis = isThis;
//# sourceMappingURL=is-this.js.map