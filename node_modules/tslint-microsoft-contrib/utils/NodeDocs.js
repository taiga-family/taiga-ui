"use strict";
/*!
 * Copyright Microsoft Corporation. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tsutils = require("tsutils");
var ts = require("typescript");
var nodeKindsWithNameIdentifiers = new Set([
    ts.SyntaxKind.ClassDeclaration,
    ts.SyntaxKind.EnumDeclaration,
    ts.SyntaxKind.FunctionDeclaration,
    ts.SyntaxKind.GetAccessor,
    ts.SyntaxKind.InterfaceDeclaration,
    ts.SyntaxKind.MethodDeclaration,
    ts.SyntaxKind.ModuleDeclaration,
    ts.SyntaxKind.PropertyDeclaration,
    ts.SyntaxKind.SetAccessor,
    ts.SyntaxKind.TypeAliasDeclaration,
    ts.SyntaxKind.VariableStatement
]);
var getNodeWithOptionalIdentifierName = function (node) {
    var name = node.name;
    return name === undefined ? undefined : name.text;
};
var variableIsAfterFirstInDeclarationList = function (node) {
    var parent = node.parent;
    if (parent === undefined) {
        return false;
    }
    return ts.isVariableDeclarationList(parent) && node !== parent.declarations[0];
};
exports.getApparentJsDoc = function (node) {
    if (ts.isVariableDeclaration(node)) {
        if (variableIsAfterFirstInDeclarationList(node)) {
            return undefined;
        }
        node = node.parent;
    }
    if (ts.isVariableDeclarationList(node)) {
        node = node.parent;
    }
    return tsutils.getJsDoc(node);
};
exports.getNodeName = function (node) {
    return nodeKindsWithNameIdentifiers.has(node.kind) ? getNodeWithOptionalIdentifierName(node) : undefined;
};
//# sourceMappingURL=NodeDocs.js.map