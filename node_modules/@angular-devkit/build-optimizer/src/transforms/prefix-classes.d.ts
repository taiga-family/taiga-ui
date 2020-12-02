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
export declare function testPrefixClasses(content: string): boolean;
export declare function getPrefixClassesTransformer(): ts.TransformerFactory<ts.SourceFile>;
