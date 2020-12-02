/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/utils/functions" />
import * as ts from 'typescript';
/**
 * Unwraps a given expression TypeScript node. Expressions can be wrapped within multiple
 * parentheses. e.g. "(((({exp}))))()". The function should return the TypeScript node
 * referring to the inner expression. e.g "exp".
 */
export declare function unwrapExpression(node: ts.Expression | ts.ParenthesizedExpression): ts.Expression;
