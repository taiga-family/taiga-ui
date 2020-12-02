"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var TypeGuard_1 = require("./TypeGuard");
function getPropName(node) {
    if (!TypeGuard_1.isJsxAttribute(node)) {
        throw new Error('The node must be a JsxAttribute collected by the AST parser.');
    }
    return node.name ? node.name.text : undefined;
}
exports.getPropName = getPropName;
function getStringLiteral(node) {
    if (!TypeGuard_1.isJsxAttribute(node)) {
        throw new Error('The node must be a JsxAttribute collected by the AST parser.');
    }
    var initializer = node === undefined ? undefined : node.initializer;
    if (!initializer) {
        return '';
    }
    if (TypeGuard_1.isStringLiteral(initializer)) {
        return initializer.text.trim();
    }
    if (TypeGuard_1.isJsxExpression(initializer) && initializer.expression !== undefined && TypeGuard_1.isStringLiteral(initializer.expression)) {
        return initializer.expression.text;
    }
    if (TypeGuard_1.isJsxExpression(initializer) && !initializer.expression) {
        return '';
    }
    return undefined;
}
exports.getStringLiteral = getStringLiteral;
function getBooleanLiteral(node) {
    if (!TypeGuard_1.isJsxAttribute(node)) {
        throw new Error('The node must be a JsxAttribute collected by the AST parser.');
    }
    var initializer = node === undefined ? undefined : node.initializer;
    if (initializer === undefined) {
        return false;
    }
    var getBooleanFromString = function (value) {
        if (value.toLowerCase() === 'true') {
            return true;
        }
        if (value.toLowerCase() === 'false') {
            return false;
        }
        return undefined;
    };
    if (TypeGuard_1.isStringLiteral(initializer)) {
        return getBooleanFromString(initializer.text);
    }
    if (TypeGuard_1.isJsxExpression(initializer)) {
        var expression = initializer.expression;
        if (expression === undefined) {
            return undefined;
        }
        if (TypeGuard_1.isStringLiteral(expression)) {
            return getBooleanFromString(expression.text);
        }
        if (TypeGuard_1.isTrueKeyword(expression)) {
            return true;
        }
        if (TypeGuard_1.isFalseKeyword(expression)) {
            return false;
        }
        return undefined;
    }
    return false;
}
exports.getBooleanLiteral = getBooleanLiteral;
function isEmpty(node) {
    var initializer = node === undefined ? undefined : node.initializer;
    if (initializer === undefined) {
        return true;
    }
    if (TypeGuard_1.isStringLiteral(initializer)) {
        return initializer.text.trim() === '';
    }
    if (initializer.expression !== undefined) {
        var expression = initializer.expression;
        if (expression.kind === ts.SyntaxKind.Identifier) {
            return expression.getText() === 'undefined';
        }
        if (expression.kind === ts.SyntaxKind.NullKeyword) {
            return true;
        }
    }
    return false;
}
exports.isEmpty = isEmpty;
function getNumericLiteral(node) {
    if (!TypeGuard_1.isJsxAttribute(node)) {
        throw new Error('The node must be a JsxAttribute collected by the AST parser.');
    }
    var initializer = node === undefined ? undefined : node.initializer;
    if (initializer !== undefined && TypeGuard_1.isJsxExpression(initializer)) {
        if (initializer.expression !== undefined && TypeGuard_1.isNumericLiteral(initializer.expression)) {
            return initializer.expression.text;
        }
    }
    return undefined;
}
exports.getNumericLiteral = getNumericLiteral;
function getAllAttributesFromJsxElement(node) {
    var attributes;
    if (node === undefined) {
        return attributes;
    }
    if (TypeGuard_1.isJsxElement(node)) {
        attributes = node.openingElement.attributes.properties;
    }
    else if (TypeGuard_1.isJsxSelfClosingElement(node)) {
        attributes = node.attributes.properties;
    }
    else if (TypeGuard_1.isJsxOpeningElement(node)) {
        attributes = node.attributes.properties;
    }
    else {
        throw new Error('The node must be a JsxElement, JsxSelfClosingElement or JsxOpeningElement.');
    }
    return attributes;
}
exports.getAllAttributesFromJsxElement = getAllAttributesFromJsxElement;
function getJsxAttributesFromJsxElement(node) {
    var attributesDictionary = {};
    var attributes = getAllAttributesFromJsxElement(node);
    if (attributes !== undefined) {
        attributes.forEach(function (attr) {
            if (!TypeGuard_1.isJsxAttribute(attr)) {
                return;
            }
            var propName = getPropName(attr);
            if (propName !== undefined) {
                attributesDictionary[propName.toLowerCase()] = attr;
            }
        });
    }
    return attributesDictionary;
}
exports.getJsxAttributesFromJsxElement = getJsxAttributesFromJsxElement;
function getJsxElementFromCode(code, exceptTagName) {
    var sourceFile = ts.createSourceFile('test.tsx', code, ts.ScriptTarget.ES2015, true);
    return delintNode(sourceFile, exceptTagName);
}
exports.getJsxElementFromCode = getJsxElementFromCode;
function delintNode(node, tagName) {
    if (TypeGuard_1.isJsxElement(node) && node.openingElement.tagName.getText() === tagName) {
        return node;
    }
    if (TypeGuard_1.isJsxSelfClosingElement(node) && node.tagName.getText() === tagName) {
        return node;
    }
    if (!node || node.getChildCount() === 0) {
        return undefined;
    }
    return ts.forEachChild(node, function (childNode) { return delintNode(childNode, tagName); });
}
function getAncestorNode(node, ancestorTagName) {
    if (!node) {
        return undefined;
    }
    var ancestorNode = node.parent;
    if (TypeGuard_1.isJsxElement(ancestorNode) && ancestorNode.openingElement.tagName.getText() === ancestorTagName) {
        return ancestorNode;
    }
    return getAncestorNode(ancestorNode, ancestorTagName);
}
exports.getAncestorNode = getAncestorNode;
//# sourceMappingURL=JsxAttribute.js.map