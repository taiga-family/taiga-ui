/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/perform_compile" />
import { Position } from '@angular/compiler';
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../src/ngtsc/file_system';
import * as api from './transformers/api';
export declare type Diagnostics = ReadonlyArray<ts.Diagnostic | api.Diagnostic>;
export declare function filterErrorsAndWarnings(diagnostics: Diagnostics): Diagnostics;
export declare function formatDiagnosticPosition(position: Position, host?: ts.FormatDiagnosticsHost): string;
export declare function flattenDiagnosticMessageChain(chain: api.DiagnosticMessageChain, host?: ts.FormatDiagnosticsHost, indent?: number): string;
export declare function formatDiagnostic(diagnostic: api.Diagnostic, host?: ts.FormatDiagnosticsHost): string;
export declare function formatDiagnostics(diags: Diagnostics, host?: ts.FormatDiagnosticsHost): string;
export interface ParsedConfiguration {
    project: string;
    options: api.CompilerOptions;
    rootNames: string[];
    emitFlags: api.EmitFlags;
    errors: Diagnostics;
}
export declare function calcProjectFileAndBasePath(project: string): {
    projectFile: AbsoluteFsPath;
    basePath: AbsoluteFsPath;
};
export declare function createNgCompilerOptions(basePath: string, config: any, tsOptions: ts.CompilerOptions): api.CompilerOptions;
export declare function readConfiguration(project: string, existingOptions?: ts.CompilerOptions): ParsedConfiguration;
export interface PerformCompilationResult {
    diagnostics: Diagnostics;
    program?: api.Program;
    emitResult?: ts.EmitResult;
}
export declare function exitCodeFromResult(diags: Diagnostics | undefined): number;
export declare function performCompilation({ rootNames, options, host, oldProgram, emitCallback, mergeEmitResultsCallback, gatherDiagnostics, customTransformers, emitFlags, modifiedResourceFiles }: {
    rootNames: string[];
    options: api.CompilerOptions;
    host?: api.CompilerHost;
    oldProgram?: api.Program;
    emitCallback?: api.TsEmitCallback;
    mergeEmitResultsCallback?: api.TsMergeEmitResultsCallback;
    gatherDiagnostics?: (program: api.Program) => Diagnostics;
    customTransformers?: api.CustomTransformers;
    emitFlags?: api.EmitFlags;
    modifiedResourceFiles?: Set<string> | null;
}): PerformCompilationResult;
export declare function defaultGatherDiagnostics(program: api.Program): Diagnostics;
