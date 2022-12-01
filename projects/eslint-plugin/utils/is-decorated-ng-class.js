/**
 * Returns can the rule be applied for a provided node.
 * For simplicity, we exclude some specific cases.
 * @param node {import('eslint').Rule.Node}
 * @returns {boolean}
 */
module.exports = function isSupportedClass(node) {
    const isAbstract = node.abstract;

    const angularDecorators = new Set([
        'Component',
        'Directive',
        'Injectable',
        'Pipe',
        'NgModule',
    ]);

    const isAngularEntity = (node.decorators || []).some(({expression}) =>
        angularDecorators.has(expression.callee?.name),
    );

    return !isAbstract && isAngularEntity;
};
