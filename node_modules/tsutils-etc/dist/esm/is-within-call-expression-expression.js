import * as tsutils from "tsutils";
export function isWithinCallExpressionExpression(node) {
    let { parent } = node;
    while (parent && tsutils.isPropertyAccessExpression(parent)) {
        node = parent;
        parent = node.parent;
    }
    return (parent && tsutils.isCallExpression(parent) && node === parent.expression);
}
//# sourceMappingURL=is-within-call-expression-expression.js.map