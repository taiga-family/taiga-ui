const isSupportedClass = require('./is-decorated-ng-class');
const getConstructorFromClassDeclaration = require('./get-constructor-from-class-declaration');

/**
 * @param node {import('eslint').Rule.Node}
 * @returns {*}
 */
module.exports = function getNgConstructor(node) {
    if (!isSupportedClass(node)) {
        return null;
    }

    const constructor = getConstructorFromClassDeclaration(node);

    if (!constructor) {
        return null;
    }

    return constructor;
};
