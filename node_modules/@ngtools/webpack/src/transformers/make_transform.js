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
const elide_imports_1 = require("./elide_imports");
const interfaces_1 = require("./interfaces");
function makeTransform(standardTransform, getTypeChecker) {
    return (context) => {
        const transformer = (sf) => {
            const ops = standardTransform(sf);
            const removeOps = ops.filter(op => op.kind === interfaces_1.OPERATION_KIND.Remove);
            const addOps = ops.filter(op => op.kind === interfaces_1.OPERATION_KIND.Add);
            const replaceOps = ops.filter(op => op.kind === interfaces_1.OPERATION_KIND.Replace);
            // If nodes are removed, elide the imports as well.
            // Mainly a workaround for https://github.com/Microsoft/TypeScript/issues/17552.
            // WARNING: this assumes that replaceOps DO NOT reuse any of the nodes they are replacing.
            // This is currently true for transforms that use replaceOps (replace_bootstrap and
            // replace_resources), but may not be true for new transforms.
            if (getTypeChecker && removeOps.length + replaceOps.length > 0) {
                const removedNodes = removeOps.concat(replaceOps).map(op => op.target);
                removeOps.push(...elide_imports_1.elideImports(sf, removedNodes, getTypeChecker, context.getCompilerOptions()));
            }
            const visitor = node => {
                let modified = false;
                let modifiedNodes = [node];
                // Check if node should be dropped.
                if (removeOps.find(op => op.target === node)) {
                    modifiedNodes = [];
                    modified = true;
                }
                // Check if node should be replaced (only replaces with first op found).
                const replace = replaceOps.find(op => op.target === node);
                if (replace) {
                    modifiedNodes = [replace.replacement];
                    modified = true;
                }
                // Check if node should be added to.
                const add = addOps.filter(op => op.target === node);
                if (add.length > 0) {
                    modifiedNodes = [
                        ...add.filter(op => op.before).map(op => op.before),
                        ...modifiedNodes,
                        ...add.filter(op => op.after).map(op => op.after),
                    ];
                    modified = true;
                }
                // If we changed anything, return modified nodes without visiting further.
                if (modified) {
                    return modifiedNodes;
                }
                else {
                    // Otherwise return node as is and visit children.
                    return ts.visitEachChild(node, visitor, context);
                }
            };
            // Don't visit the sourcefile at all if we don't have ops for it.
            if (ops.length === 0) {
                return sf;
            }
            const result = ts.visitNode(sf, visitor);
            // If we removed any decorators, we need to clean up the decorator arrays.
            if (removeOps.some(op => op.target.kind === ts.SyntaxKind.Decorator)) {
                cleanupDecorators(result);
            }
            return result;
        };
        return transformer;
    };
}
exports.makeTransform = makeTransform;
// If TS sees an empty decorator array, it will still emit a `__decorate` call.
//    This seems to be a TS bug.
function cleanupDecorators(node) {
    if (node.decorators && node.decorators.length === 0) {
        node.decorators = undefined;
    }
    ts.forEachChild(node, node => cleanupDecorators(node));
}
