/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/node_emitter_transform" />
import { GeneratedFile } from '@angular/compiler';
import * as ts from 'typescript';
/**
 * Returns a transformer that does two things for generated files (ngfactory etc):
 * - adds a fileoverview JSDoc comment containing Closure Compiler specific "suppress"ions in JSDoc.
 *   The new comment will contain any fileoverview comment text from the original source file this
 *   file was generated from.
 * - updates generated files that are not in the given map of generatedFiles to have an empty
 *   list of statements as their body.
 */
export declare function getAngularEmitterTransformFactory(generatedFiles: Map<string, GeneratedFile>, program: ts.Program, annotateForClosureCompiler: boolean): () => (sourceFile: ts.SourceFile) => ts.SourceFile;
