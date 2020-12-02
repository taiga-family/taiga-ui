/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
/**
 * @deprecated From 0.9.0
 */
export declare function testScrubFile(content: string): boolean;
export declare function getScrubFileTransformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile>;
export declare function getScrubFileTransformerForCore(program: ts.Program): ts.TransformerFactory<ts.SourceFile>;
export declare function expect<T extends ts.Node>(node: ts.Node, kind: ts.SyntaxKind): T;
