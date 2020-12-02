/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
export declare function collectDeepNodes<T extends ts.Node>(node: ts.Node, kind: ts.SyntaxKind | ts.SyntaxKind[]): T[];
export declare function getFirstNode(sourceFile: ts.SourceFile): ts.Node;
export declare function getLastNode(sourceFile: ts.SourceFile): ts.Node | null;
