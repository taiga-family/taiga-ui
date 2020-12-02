/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/transform" />
import * as ts from 'typescript';
import { DefaultImportRecorder, ImportRewriter } from '../../imports';
import { ReflectionHost } from '../../reflection';
import { TraitCompiler } from './compilation';
export declare function ivyTransformFactory(compilation: TraitCompiler, reflector: ReflectionHost, importRewriter: ImportRewriter, defaultImportRecorder: DefaultImportRecorder, isCore: boolean, isClosureCompilerEnabled: boolean): ts.TransformerFactory<ts.SourceFile>;
