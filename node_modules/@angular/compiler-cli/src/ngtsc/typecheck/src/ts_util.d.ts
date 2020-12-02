/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util" />
import * as ts from 'typescript';
import { ClassDeclaration } from '../../reflection';
export declare function tsCastToAny(expr: ts.Expression): ts.Expression;
/**
 * Create an expression which instantiates an element by its HTML tagName.
 *
 * Thanks to narrowing of `document.createElement()`, this expression will have its type inferred
 * based on the tag name, including for custom elements that have appropriate .d.ts definitions.
 */
export declare function tsCreateElement(tagName: string): ts.Expression;
/**
 * Create a `ts.VariableStatement` which declares a variable without explicit initialization.
 *
 * The initializer `null!` is used to bypass strict variable initialization checks.
 *
 * Unlike with `tsCreateVariable`, the type of the variable is explicitly specified.
 */
export declare function tsDeclareVariable(id: ts.Identifier, type: ts.TypeNode): ts.VariableStatement;
/**
 * Create a `ts.VariableStatement` that initializes a variable with a given expression.
 *
 * Unlike with `tsDeclareVariable`, the type of the variable is inferred from the initializer
 * expression.
 */
export declare function tsCreateVariable(id: ts.Identifier, initializer: ts.Expression): ts.VariableStatement;
/**
 * Construct a `ts.CallExpression` that calls a method on a receiver.
 */
export declare function tsCallMethod(receiver: ts.Expression, methodName: string, args?: ts.Expression[]): ts.CallExpression;
export declare function checkIfClassIsExported(node: ClassDeclaration): boolean;
export declare function checkIfGenericTypesAreUnbound(node: ClassDeclaration<ts.ClassDeclaration>): boolean;
