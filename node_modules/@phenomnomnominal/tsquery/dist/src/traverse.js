"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var typescript_1 = require("typescript");
var syntax_kind_1 = require("./syntax-kind");
// Constants:
var FILTERED_KEYS = ['parent'];
var LITERAL_KINDS = [
    typescript_1.SyntaxKind.FalseKeyword,
    typescript_1.SyntaxKind.NoSubstitutionTemplateLiteral,
    typescript_1.SyntaxKind.NullKeyword,
    typescript_1.SyntaxKind.NumericLiteral,
    typescript_1.SyntaxKind.RegularExpressionLiteral,
    typescript_1.SyntaxKind.StringLiteral,
    typescript_1.SyntaxKind.TrueKeyword
];
var PARSERS = (_a = {},
    _a[typescript_1.SyntaxKind.FalseKeyword] = function () { return false; },
    _a[typescript_1.SyntaxKind.NoSubstitutionTemplateLiteral] = function (properties) { return properties.text; },
    _a[typescript_1.SyntaxKind.NullKeyword] = function () { return null; },
    _a[typescript_1.SyntaxKind.NumericLiteral] = function (properties) { return +properties.text; },
    _a[typescript_1.SyntaxKind.RegularExpressionLiteral] = function (properties) { return new RegExp(properties.text); },
    _a[typescript_1.SyntaxKind.StringLiteral] = function (properties) { return properties.text; },
    _a[typescript_1.SyntaxKind.TrueKeyword] = function () { return true; },
    _a);
function traverseChildren(node, iterator, options) {
    var ancestors = [];
    traverse(node, {
        enter: function (childNode, parentNode) {
            if (parentNode != null) {
                ancestors.unshift(parentNode);
            }
            iterator(childNode, ancestors);
        },
        leave: function () {
            ancestors.shift();
        },
        visitAllChildren: !!options.visitAllChildren
    });
}
exports.traverseChildren = traverseChildren;
function traverse(node, traverseOptions) {
    traverseOptions.enter(node, node.parent || null);
    if (traverseOptions.visitAllChildren) {
        node.getChildren().forEach(function (child) { return traverse(child, traverseOptions); });
    }
    else {
        node.forEachChild(function (child) { return traverse(child, traverseOptions); });
    }
    traverseOptions.leave(node, node.parent || null);
}
function getVisitorKeys(node) {
    return !!node ? Object.keys(node)
        .filter(function (key) { return !FILTERED_KEYS.includes(key); })
        .filter(function (key) {
        var value = node[key];
        return Array.isArray(value) || typeof value === 'object';
    }) : [];
}
exports.getVisitorKeys = getVisitorKeys;
var propertiesMap = new WeakMap();
function getProperties(node) {
    var properties = propertiesMap.get(node);
    if (!properties) {
        properties = {
            kindName: syntax_kind_1.syntaxKindName(node.kind),
            text: hasKey(node, 'text') ? node.text : getTextIfNotSynthesized(node)
        };
        if (node.kind === typescript_1.SyntaxKind.Identifier) {
            properties.name = hasKey(node, 'name') ? node.name : properties.text;
        }
        if (LITERAL_KINDS.includes(node.kind)) {
            properties.value = PARSERS[node.kind](properties);
        }
        propertiesMap.set(node, properties);
    }
    return properties;
}
exports.getProperties = getProperties;
function hasKey(node, property) {
    return node[property] != null;
}
function getTextIfNotSynthesized(node) {
    // getText cannot be called on synthesized nodes - those created using
    // TypeScript's createXxx functions - because its implementation relies
    // upon a node's position. See:
    // https://github.com/microsoft/TypeScript/blob/a8bea77d1efe4984e573760770b78486a5488366/src/services/services.ts#L81-L87
    // https://github.com/microsoft/TypeScript/blob/a685ac426c168a9d8734cac69202afc7cb022408/src/compiler/utilities.ts#L8169-L8173
    return !(node.pos >= 0) ? '' : node.getText();
}
//# sourceMappingURL=traverse.js.map