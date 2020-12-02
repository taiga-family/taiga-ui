"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const tslib = require("tslib");
const ts = require("typescript");
const pureFunctionComment = '@__PURE__';
// We include only exports that start with '__' because tslib helpers
// all start with a suffix of two underscores.
const tslibHelpers = new Set(Object.keys(tslib).filter(h => h.startsWith('__')));
// Find all nodes from the AST in the subtree of node of SyntaxKind kind.
function collectDeepNodes(node, kind) {
    const nodes = [];
    const helper = (child) => {
        if (child.kind === kind) {
            nodes.push(child);
        }
        ts.forEachChild(child, helper);
    };
    ts.forEachChild(node, helper);
    return nodes;
}
exports.collectDeepNodes = collectDeepNodes;
function addPureComment(node) {
    return ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, pureFunctionComment, false);
}
exports.addPureComment = addPureComment;
function hasPureComment(node) {
    if (!node) {
        return false;
    }
    const leadingComment = ts.getSyntheticLeadingComments(node);
    return !!leadingComment && leadingComment.some(comment => comment.text === pureFunctionComment);
}
exports.hasPureComment = hasPureComment;
function isHelperName(name) {
    return tslibHelpers.has(name);
}
exports.isHelperName = isHelperName;
/**
 * In FESM's when not using `importHelpers` there might be multiple in the same file.
  @example
  ```
  var __decorate$1 = '';
  var __decorate$2 = '';
  ```
 * @returns Helper name without the '$' and number suffix or `undefined` if it's not a helper.
 */
function getCleanHelperName(name) {
    const parts = name.split('$');
    const cleanName = parts[0];
    if (parts.length > 2 || (parts.length === 2 && isNaN(+parts[1]))) {
        return undefined;
    }
    return isHelperName(cleanName) ? cleanName : undefined;
}
exports.getCleanHelperName = getCleanHelperName;
