/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { TransformOperation } from './interfaces';
export declare function insertStarImport(sourceFile: ts.SourceFile, identifier: ts.Identifier, modulePath: string, target?: ts.Node, before?: boolean): TransformOperation[];
export declare function insertImport(sourceFile: ts.SourceFile, symbolName: string, modulePath: string): TransformOperation[];
