/**
 * Executes a provided function once for each argument of a logical expression.
 * @param expression {import('@types/estree').LogicalExpression}
 * @param callback {(node: import('@types/estree').Node) => void}
 * @returns {void}
 */
module.exports = function traverseLogicalExpression(expression, callback) {
    /**
     * A helper function to avoid a union type.
     * @param node {import('@types/estree').Node}
     * @returns {void}
     */
    const traverse = node => {
        if (!node) {
            return;
        }

        callback(node);

        traverse(node.left);
        traverse(node.right);
    };

    traverse(expression);
};
