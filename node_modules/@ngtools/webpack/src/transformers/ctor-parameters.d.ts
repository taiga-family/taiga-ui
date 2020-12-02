/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
export declare function downlevelConstructorParameters(getTypeChecker: () => ts.TypeChecker): ts.TransformerFactory<ts.SourceFile>;
/**
 * Transformer factory for the decorator downlevel transformer. See fileoverview for details.
 */
export declare function decoratorDownlevelTransformer(typeChecker: ts.TypeChecker, diagnostics: ts.Diagnostic[]): (context: ts.TransformationContext) => ts.Transformer<ts.SourceFile>;
