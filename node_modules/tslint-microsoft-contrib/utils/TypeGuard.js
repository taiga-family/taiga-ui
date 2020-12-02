"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
function isJsxAttribute(node) {
    return node && node.kind === ts.SyntaxKind.JsxAttribute;
}
exports.isJsxAttribute = isJsxAttribute;
function isJsxSpreadAttribute(node) {
    return node && node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxSpreadAttribute = isJsxSpreadAttribute;
function isJsxExpression(node) {
    return node && node.kind === ts.SyntaxKind.JsxExpression;
}
exports.isJsxExpression = isJsxExpression;
function isNumericLiteral(node) {
    return node && node.kind === ts.SyntaxKind.NumericLiteral;
}
exports.isNumericLiteral = isNumericLiteral;
function isStringLiteral(node) {
    return node && node.kind === ts.SyntaxKind.StringLiteral;
}
exports.isStringLiteral = isStringLiteral;
function isJsxElement(node) {
    return node && node.kind === ts.SyntaxKind.JsxElement;
}
exports.isJsxElement = isJsxElement;
function isJsxSelfClosingElement(node) {
    return node && node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxSelfClosingElement = isJsxSelfClosingElement;
function isJsxOpeningElement(node) {
    return node && node.kind === ts.SyntaxKind.JsxOpeningElement;
}
exports.isJsxOpeningElement = isJsxOpeningElement;
function isTrueKeyword(node) {
    return node && node.kind === ts.SyntaxKind.TrueKeyword;
}
exports.isTrueKeyword = isTrueKeyword;
function isFalseKeyword(node) {
    return node && node.kind === ts.SyntaxKind.FalseKeyword;
}
exports.isFalseKeyword = isFalseKeyword;
function isNullKeyword(node) {
    return node && node.kind === ts.SyntaxKind.NullKeyword;
}
exports.isNullKeyword = isNullKeyword;
function isObject(value) {
    return value !== undefined && typeof value === 'object' && !Array.isArray(value);
}
exports.isObject = isObject;
function isNamed(node) {
    return 'name' in node && node.name !== undefined;
}
exports.isNamed = isNamed;
//# sourceMappingURL=TypeGuard.js.map