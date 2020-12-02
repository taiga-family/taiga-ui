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
const ast_helpers_1 = require("./ast_helpers");
const interfaces_1 = require("./interfaces");
const make_transform_1 = require("./make_transform");
function removeIvyJitSupportCalls(classMetadata, ngModuleScope, getTypeChecker) {
    const standardTransform = function (sourceFile) {
        const ops = [];
        ast_helpers_1.collectDeepNodes(sourceFile, ts.SyntaxKind.ExpressionStatement)
            .filter(statement => {
            const innerStatement = getIifeStatement(statement);
            if (!innerStatement) {
                return false;
            }
            if (ngModuleScope && ts.isBinaryExpression(innerStatement.expression)) {
                return isIvyPrivateCallExpression(innerStatement.expression.right, 'ɵɵsetNgModuleScope');
            }
            return (classMetadata &&
                isIvyPrivateCallExpression(innerStatement.expression, 'ɵsetClassMetadata'));
        })
            .forEach(statement => ops.push(new interfaces_1.RemoveNodeOperation(sourceFile, statement)));
        return ops;
    };
    return make_transform_1.makeTransform(standardTransform, getTypeChecker);
}
exports.removeIvyJitSupportCalls = removeIvyJitSupportCalls;
// Each Ivy private call expression is inside an IIFE
function getIifeStatement(exprStmt) {
    const expression = exprStmt.expression;
    if (!expression || !ts.isCallExpression(expression) || expression.arguments.length !== 0) {
        return null;
    }
    const parenExpr = expression;
    if (!ts.isParenthesizedExpression(parenExpr.expression)) {
        return null;
    }
    const funExpr = parenExpr.expression.expression;
    if (!ts.isFunctionExpression(funExpr)) {
        return null;
    }
    const innerStmts = funExpr.body.statements;
    if (innerStmts.length !== 1) {
        return null;
    }
    const innerExprStmt = innerStmts[0];
    if (!ts.isExpressionStatement(innerExprStmt)) {
        return null;
    }
    return innerExprStmt;
}
function isIvyPrivateCallExpression(expression, name) {
    // Now we're in the IIFE and have the inner expression statement. We can check if it matches
    // a private Ivy call.
    if (!ts.isCallExpression(expression)) {
        return false;
    }
    const propAccExpr = expression.expression;
    if (!ts.isPropertyAccessExpression(propAccExpr)) {
        return false;
    }
    if (propAccExpr.name.text != name) {
        return false;
    }
    return true;
}
