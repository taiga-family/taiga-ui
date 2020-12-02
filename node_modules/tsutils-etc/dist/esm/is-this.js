import * as ts from "typescript";
export function isThis(node) {
    return node.kind === ts.SyntaxKind.ThisKeyword;
}
//# sourceMappingURL=is-this.js.map