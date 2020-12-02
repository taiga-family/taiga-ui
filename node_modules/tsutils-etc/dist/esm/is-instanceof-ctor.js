import * as tsutils from "tsutils";
import * as ts from "typescript";
export function isInstanceofCtor(node) {
    const { parent } = node;
    return (tsutils.isBinaryExpression(parent) &&
        node === parent.right &&
        parent.operatorToken.kind === ts.SyntaxKind.InstanceOfKeyword);
}
//# sourceMappingURL=is-instanceof-ctor.js.map