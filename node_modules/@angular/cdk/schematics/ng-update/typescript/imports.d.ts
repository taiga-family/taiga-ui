/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/typescript/imports" />
import * as ts from 'typescript';
/** Checks whether the given node is part of an import specifier node. */
export declare function isImportSpecifierNode(node: ts.Node): boolean;
/** Checks whether the given node is part of an export specifier node. */
export declare function isExportSpecifierNode(node: ts.Node): boolean;
/** Checks whether the given node is part of a namespace import. */
export declare function isNamespaceImportNode(node: ts.Node): boolean;
/** Finds the parent import declaration of a given TypeScript node. */
export declare function getImportDeclaration(node: ts.Node): ts.ImportDeclaration;
/** Finds the parent export declaration of a given TypeScript node */
export declare function getExportDeclaration(node: ts.Node): ts.ExportDeclaration;
