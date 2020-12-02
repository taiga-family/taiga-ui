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
const ast_utils_1 = require("../helpers/ast-utils");
/** @deprecated Since version 8 */
function getFoldFileTransformer(program) {
    const checker = program.getTypeChecker();
    return (context) => {
        const transformer = (sf) => {
            const statementsToRemove = [];
            const classesWithoutStatements = findClassDeclarations(sf);
            let classes = findClassesWithStaticPropertyAssignments(sf, checker, classesWithoutStatements);
            const visitor = (node) => {
                if (classes.length === 0 && statementsToRemove.length === 0) {
                    // There are no more statements to fold.
                    return ts.visitEachChild(node, visitor, context);
                }
                // Check if node is a statement to be dropped.
                const stmtIdx = statementsToRemove.indexOf(node);
                if (stmtIdx != -1) {
                    statementsToRemove.splice(stmtIdx, 1);
                    return undefined;
                }
                // Check if node is a ES5 class to add statements to.
                let clazz = classes.find((cl) => cl.function === node);
                if (clazz) {
                    const functionExpression = node;
                    // Create a new body with all the original statements, plus new ones,
                    // plus return statement.
                    const newBody = ts.createBlock([
                        ...functionExpression.body.statements.slice(0, -1),
                        ...clazz.statements.map(st => st.expressionStatement),
                        ...functionExpression.body.statements.slice(-1),
                    ]);
                    const newNode = ts.createFunctionExpression(functionExpression.modifiers, functionExpression.asteriskToken, functionExpression.name, functionExpression.typeParameters, functionExpression.parameters, functionExpression.type, newBody);
                    // Update remaining classes and statements.
                    statementsToRemove.push(...clazz.statements.map(st => st.expressionStatement));
                    classes = classes.filter(cl => cl != clazz);
                    // Replace node with modified one.
                    return newNode;
                }
                // Check if node is a ES2015 class to replace with a pure IIFE.
                clazz = classes.find((cl) => !cl.function && cl.declaration === node);
                if (clazz) {
                    const classStatement = clazz.declaration;
                    const innerReturn = ts.createReturn(ts.createIdentifier(clazz.name));
                    const pureIife = ast_utils_1.addPureComment(ts.createImmediatelyInvokedFunctionExpression([
                        classStatement,
                        ...clazz.statements.map(st => st.expressionStatement),
                        innerReturn,
                    ]));
                    // Move the original class modifiers to the var statement.
                    const newNode = ts.createVariableStatement(clazz.declaration.modifiers, ts.createVariableDeclarationList([
                        ts.createVariableDeclaration(clazz.name, undefined, pureIife),
                    ], ts.NodeFlags.Const));
                    clazz.declaration.modifiers = undefined;
                    // Update remaining classes and statements.
                    statementsToRemove.push(...clazz.statements.map(st => st.expressionStatement));
                    classes = classes.filter(cl => cl != clazz);
                    return newNode;
                }
                // Otherwise return node as is.
                return ts.visitEachChild(node, visitor, context);
            };
            return ts.visitNode(sf, visitor);
        };
        return transformer;
    };
}
exports.getFoldFileTransformer = getFoldFileTransformer;
function findClassDeclarations(node) {
    const classes = [];
    // Find all class declarations, build a ClassData for each.
    ts.forEachChild(node, (child) => {
        // Check if it is a named class declaration first.
        // Technically it doesn't need a name in TS if it's the default export, but when downleveled
        // it will be have a name (e.g. `default_1`).
        if (ts.isClassDeclaration(child) && child.name) {
            classes.push({
                name: child.name.text,
                declaration: child,
                statements: [],
            });
            return;
        }
        if (child.kind !== ts.SyntaxKind.VariableStatement) {
            return;
        }
        const varStmt = child;
        if (varStmt.declarationList.declarations.length > 1) {
            return;
        }
        const varDecl = varStmt.declarationList.declarations[0];
        if (varDecl.name.kind !== ts.SyntaxKind.Identifier) {
            return;
        }
        const name = varDecl.name.text;
        const expr = varDecl.initializer;
        if (!expr || expr.kind !== ts.SyntaxKind.ParenthesizedExpression) {
            return;
        }
        if (expr.expression.kind !== ts.SyntaxKind.CallExpression) {
            return;
        }
        const callExpr = expr.expression;
        if (callExpr.expression.kind !== ts.SyntaxKind.FunctionExpression) {
            return;
        }
        const fn = callExpr.expression;
        if (fn.body.statements.length < 2) {
            return;
        }
        if (fn.body.statements[0].kind !== ts.SyntaxKind.FunctionDeclaration) {
            return;
        }
        const innerFn = fn.body.statements[0];
        if (fn.body.statements[fn.body.statements.length - 1].kind !== ts.SyntaxKind.ReturnStatement) {
            return;
        }
        if (!innerFn.name || innerFn.name.kind !== ts.SyntaxKind.Identifier) {
            return;
        }
        if (innerFn.name.text !== name) {
            return;
        }
        classes.push({
            name,
            declaration: varDecl,
            function: fn,
            statements: [],
        });
    });
    return classes;
}
function findClassesWithStaticPropertyAssignments(node, checker, classes) {
    // Find each assignment outside of the declaration.
    ts.forEachChild(node, (child) => {
        if (child.kind !== ts.SyntaxKind.ExpressionStatement) {
            return;
        }
        const expressionStatement = child;
        if (expressionStatement.expression.kind !== ts.SyntaxKind.BinaryExpression) {
            return;
        }
        const binEx = expressionStatement.expression;
        if (binEx.left.kind !== ts.SyntaxKind.PropertyAccessExpression) {
            return;
        }
        const propAccess = binEx.left;
        if (propAccess.expression.kind !== ts.SyntaxKind.Identifier) {
            return;
        }
        const symbol = checker.getSymbolAtLocation(propAccess.expression);
        if (!symbol) {
            return;
        }
        const decls = symbol.declarations;
        if (decls == undefined || decls.length === 0) {
            return;
        }
        const hostClass = classes.find((clazz => decls.includes(clazz.declaration)));
        if (!hostClass) {
            return;
        }
        const statement = { expressionStatement, hostClass };
        hostClass.statements.push(statement);
    });
    // Only return classes that have static property assignments.
    return classes.filter(cl => cl.statements.length != 0);
}
