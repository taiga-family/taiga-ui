/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/typescript/module-specifiers" />
import * as ts from 'typescript';
/** Name of the Angular Material module specifier. */
export declare const materialModuleSpecifier = "@angular/material";
/** Name of the Angular CDK module specifier. */
export declare const cdkModuleSpecifier = "@angular/cdk";
/** Whether the specified node is part of an Angular Material or CDK import declaration. */
export declare function isMaterialImportDeclaration(node: ts.Node): boolean;
/** Whether the specified node is part of an Angular Material or CDK import declaration. */
export declare function isMaterialExportDeclaration(node: ts.Node): boolean;
