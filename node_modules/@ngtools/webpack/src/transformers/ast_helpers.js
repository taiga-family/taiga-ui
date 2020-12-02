"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ts = require("typescript");
// Find all nodes from the AST in the subtree of node of SyntaxKind kind.
function collectDeepNodes(node, kind) {
    const kinds = Array.isArray(kind) ? kind : [kind];
    const nodes = [];
    const helper = (child) => {
        if (kinds.includes(child.kind)) {
            nodes.push(child);
        }
        ts.forEachChild(child, helper);
    };
    ts.forEachChild(node, helper);
    return nodes;
}
exports.collectDeepNodes = collectDeepNodes;
function getFirstNode(sourceFile) {
    if (sourceFile.statements.length > 0) {
        return sourceFile.statements[0];
    }
    return sourceFile.getChildAt(0);
}
exports.getFirstNode = getFirstNode;
function getLastNode(sourceFile) {
    if (sourceFile.statements.length > 0) {
        return sourceFile.statements[sourceFile.statements.length - 1] || null;
    }
    return null;
}
exports.getLastNode = getLastNode;
