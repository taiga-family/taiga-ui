/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/program" />
import { GeneratedFile } from '@angular/compiler';
import * as ts from 'typescript';
import * as api from '../transformers/api';
import { NgCompilerOptions } from './core/api';
import { IndexedComponent } from './indexer';
/**
 * Entrypoint to the Angular Compiler (Ivy+) which sits behind the `api.Program` interface, allowing
 * it to be a drop-in replacement for the legacy View Engine compiler to tooling such as the
 * command-line main() function or the Angular CLI.
 */
export declare class NgtscProgram implements api.Program {
    private options;
    private compiler;
    /**
     * The primary TypeScript program, which is used for analysis and emit.
     */
    private tsProgram;
    /**
     * The TypeScript program to use for the next incremental compilation.
     *
     * Once a TS program is used to create another (an incremental compilation operation), it can no
     * longer be used to do so again.
     *
     * Since template type-checking uses the primary program to create a type-checking program, after
     * this happens the primary program is no longer suitable for starting a subsequent compilation,
     * and the template type-checking program should be used instead.
     *
     * Thus, the program which should be used for the next incremental compilation is tracked in
     * `reuseTsProgram`, separately from the "primary" program which is always used for emit.
     */
    private reuseTsProgram;
    private closureCompilerEnabled;
    private host;
    private perfRecorder;
    private perfTracker;
    constructor(rootNames: ReadonlyArray<string>, options: NgCompilerOptions, delegateHost: api.CompilerHost, oldProgram?: NgtscProgram);
    getTsProgram(): ts.Program;
    getTsOptionDiagnostics(cancellationToken?: ts.CancellationToken | undefined): readonly ts.Diagnostic[];
    getTsSyntacticDiagnostics(sourceFile?: ts.SourceFile | undefined, cancellationToken?: ts.CancellationToken | undefined): readonly ts.Diagnostic[];
    getTsSemanticDiagnostics(sourceFile?: ts.SourceFile | undefined, cancellationToken?: ts.CancellationToken | undefined): readonly ts.Diagnostic[];
    getNgOptionDiagnostics(cancellationToken?: ts.CancellationToken | undefined): readonly (ts.Diagnostic | api.Diagnostic)[];
    getNgStructuralDiagnostics(cancellationToken?: ts.CancellationToken | undefined): readonly api.Diagnostic[];
    getNgSemanticDiagnostics(fileName?: string | undefined, cancellationToken?: ts.CancellationToken | undefined): readonly (ts.Diagnostic | api.Diagnostic)[];
    /**
     * Ensure that the `NgCompiler` has properly analyzed the program, and allow for the asynchronous
     * loading of any resources during the process.
     *
     * This is used by the Angular CLI to allow for spawning (async) child compilations for things
     * like SASS files used in `styleUrls`.
     */
    loadNgStructureAsync(): Promise<void>;
    listLazyRoutes(entryRoute?: string | undefined): api.LazyRoute[];
    emit(opts?: {
        emitFlags?: api.EmitFlags | undefined;
        cancellationToken?: ts.CancellationToken | undefined;
        customTransformers?: api.CustomTransformers | undefined;
        emitCallback?: api.TsEmitCallback | undefined;
        mergeEmitResultsCallback?: api.TsMergeEmitResultsCallback | undefined;
    } | undefined): ts.EmitResult;
    getIndexedComponents(): Map<ts.Declaration, IndexedComponent>;
    getLibrarySummaries(): Map<string, api.LibrarySummary>;
    getEmittedGeneratedFiles(): Map<string, GeneratedFile>;
    getEmittedSourceFiles(): Map<string, ts.SourceFile>;
}
