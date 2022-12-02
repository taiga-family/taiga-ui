const isMethodDefinition = require('./is-method');

/**
 * Returns a constructor from a provided node if it exists.
 * @param node {import('eslint').Rule.Node}
 * @returns {*}
 */
module.exports = function getConstructorFromClassDeclaration(node) {
    const body = node.body;

    if (!body) {
        return;
    }

    const classElements = body.body;

    if (!classElements.length) {
        return;
    }

    const constructorMethodDefinition = classElements
        .filter(classElement => isMethodDefinition(classElement))
        .find(methodDefinition => methodDefinition.kind === 'constructor');

    if (
        !constructorMethodDefinition ||
        !isMethodDefinition(constructorMethodDefinition)
    ) {
        return;
    }

    return constructorMethodDefinition;
};
