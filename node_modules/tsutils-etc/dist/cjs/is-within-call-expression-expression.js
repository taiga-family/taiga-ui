"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithinCallExpressionExpression = void 0;
const tsutils = require("tsutils");
function isWithinCallExpressionExpression(node) {
    let { parent } = node;
    while (parent && tsutils.isPropertyAccessExpression(parent)) {
        node = parent;
        parent = node.parent;
    }
    return (parent && tsutils.isCallExpression(parent) && node === parent.expression);
}
exports.isWithinCallExpressionExpression = isWithinCallExpressionExpression;
//# sourceMappingURL=is-within-call-expression-expression.js.map