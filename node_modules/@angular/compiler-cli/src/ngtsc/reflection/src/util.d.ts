/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/reflection/src/util" />
import * as ts from 'typescript';
import { ClassDeclaration } from './host';
export declare function isNamedClassDeclaration(node: ts.Node): node is ClassDeclaration<ts.ClassDeclaration>;
export declare function isNamedFunctionDeclaration(node: ts.Node): node is ClassDeclaration<ts.FunctionDeclaration>;
export declare function isNamedVariableDeclaration(node: ts.Node): node is ClassDeclaration<ts.VariableDeclaration>;
