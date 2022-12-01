/**
 * Returns whether the node is method definition.
 * @param node {import('eslint').Rule.Node}
 * @returns {boolean}
 */
module.exports = function isMethodDefinition(node) {
    return node.type === 'MethodDefinition';
};
