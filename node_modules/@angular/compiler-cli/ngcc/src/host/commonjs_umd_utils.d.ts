/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils" />
import * as ts from 'typescript';
import { Declaration } from '../../../src/ngtsc/reflection';
export interface ExportDeclaration {
    name: string;
    declaration: Declaration;
}
export interface ExportStatement extends ts.ExpressionStatement {
    expression: ts.BinaryExpression & {
        left: ts.PropertyAccessExpression & {
            expression: ts.Identifier;
        };
    };
}
/**
 * A CommonJS or UMD re-export statement.
 *
 * In CommonJS/UMD, re-export statements can have several forms (depending, for example, on whether
 * the TypeScript helpers are imported or emitted inline). The expression can have one of the
 * following forms:
 * - `__export(firstArg)`
 * - `__exportStar(firstArg)`
 * - `tslib.__export(firstArg, exports)`
 * - `tslib.__exportStar(firstArg, exports)`
 *
 * In all cases, we only care about `firstApp`, which is the first argument of the re-export call
 * expression and can be either a `require('...')` call or an identifier (initialized via a
 * `require('...')` call).
 */
export interface ReexportStatement extends ts.ExpressionStatement {
    expression: ts.CallExpression;
}
export interface RequireCall extends ts.CallExpression {
    arguments: ts.CallExpression['arguments'] & [ts.StringLiteral];
}
/**
 * Return the "namespace" of the specified `ts.Identifier` if the identifier is the RHS of a
 * property access expression, i.e. an expression of the form `<namespace>.<id>` (in which case a
 * `ts.Identifier` corresponding to `<namespace>` will be returned). Otherwise return `null`.
 */
export declare function findNamespaceOfIdentifier(id: ts.Identifier): ts.Identifier | null;
/**
 * Return the `RequireCall` that is used to initialize the specified `ts.Identifier`, if the
 * specified indentifier was indeed initialized with a require call in a declaration of the form:
 * `var <id> = require('...')`
 */
export declare function findRequireCallReference(id: ts.Identifier, checker: ts.TypeChecker): RequireCall | null;
/**
 * Check whether the specified `ts.Statement` is an export statement, i.e. an expression statement
 * of the form: `export.<foo> = <bar>`
 */
export declare function isExportStatement(stmt: ts.Statement): stmt is ExportStatement;
/**
 * Check whether the specified `ts.Statement` is a re-export statement, i.e. an expression statement
 * of one of the following forms:
 * - `__export(<foo>)`
 * - `__exportStar(<foo>)`
 * - `tslib.__export(<foo>, exports)`
 * - `tslib.__exportStar(<foo>, exports)`
 */
export declare function isReexportStatement(stmt: ts.Statement): stmt is ReexportStatement;
/**
 * Check whether the specified `ts.Node` represents a `require()` call, i.e. an call expression of
 * the form: `require('<foo>')`
 */
export declare function isRequireCall(node: ts.Node): node is RequireCall;
