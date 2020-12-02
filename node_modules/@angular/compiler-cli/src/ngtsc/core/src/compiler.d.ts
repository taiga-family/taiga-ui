/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/core/src/compiler" />
import * as ts from 'typescript';
import { IncrementalDriver } from '../../incremental';
import { IndexedComponent } from '../../indexer';
import { PerfRecorder } from '../../perf';
import { LazyRoute, NgCompilerOptions } from '../api';
import { NgCompilerHost } from './host';
/**
 * The heart of the Angular Ivy compiler.
 *
 * The `NgCompiler` provides an API for performing Angular compilation within a custom TypeScript
 * compiler. Each instance of `NgCompiler` supports a single compilation, which might be
 * incremental.
 *
 * `NgCompiler` is lazy, and does not perform any of the work of the compilation until one of its
 * output methods (e.g. `getDiagnostics`) is called.
 *
 * See the README.md for more information.
 */
export declare class NgCompiler {
    private host;
    private options;
    private tsProgram;
    private perfRecorder;
    /**
     * Lazily evaluated state of the compilation.
     *
     * This is created on demand by calling `ensureAnalyzed`.
     */
    private compilation;
    /**
     * Any diagnostics related to the construction of the compilation.
     *
     * These are diagnostics which arose during setup of the host and/or program.
     */
    private constructionDiagnostics;
    /**
     * Semantic diagnostics related to the program itself.
     *
     * This is set by (and memoizes) `getDiagnostics`.
     */
    private diagnostics;
    private closureCompilerEnabled;
    private typeCheckFile;
    private nextProgram;
    private entryPoint;
    private moduleResolver;
    private resourceManager;
    private cycleAnalyzer;
    readonly incrementalDriver: IncrementalDriver;
    readonly ignoreForDiagnostics: Set<ts.SourceFile>;
    readonly ignoreForEmit: Set<ts.SourceFile>;
    constructor(host: NgCompilerHost, options: NgCompilerOptions, tsProgram: ts.Program, oldProgram?: ts.Program | null, perfRecorder?: PerfRecorder);
    /**
     * Get all Angular-related diagnostics for this compilation.
     *
     * If a `ts.SourceFile` is passed, only diagnostics related to that file are returned.
     */
    getDiagnostics(file?: ts.SourceFile): ts.Diagnostic[];
    /**
     * Get all setup-related diagnostics for this compilation.
     */
    getOptionDiagnostics(): ts.Diagnostic[];
    /**
     * Get the `ts.Program` to use as a starting point when spawning a subsequent incremental
     * compilation.
     *
     * The `NgCompiler` spawns an internal incremental TypeScript compilation (inheriting the
     * consumer's `ts.Program` into a new one for the purposes of template type-checking). After this
     * operation, the consumer's `ts.Program` is no longer usable for starting a new incremental
     * compilation. `getNextProgram` retrieves the `ts.Program` which can be used instead.
     */
    getNextProgram(): ts.Program;
    /**
     * Perform Angular's analysis step (as a precursor to `getDiagnostics` or `prepareEmit`)
     * asynchronously.
     *
     * Normally, this operation happens lazily whenever `getDiagnostics` or `prepareEmit` are called.
     * However, certain consumers may wish to allow for an asynchronous phase of analysis, where
     * resources such as `styleUrls` are resolved asynchonously. In these cases `analyzeAsync` must be
     * called first, and its `Promise` awaited prior to calling any other APIs of `NgCompiler`.
     */
    analyzeAsync(): Promise<void>;
    /**
     * List lazy routes detected during analysis.
     *
     * This can be called for one specific route, or to retrieve all top-level routes.
     */
    listLazyRoutes(entryRoute?: string): LazyRoute[];
    /**
     * Fetch transformers and other information which is necessary for a consumer to `emit` the
     * program with Angular-added definitions.
     */
    prepareEmit(): {
        transformers: ts.CustomTransformers;
    };
    /**
     * Run the indexing process and return a `Map` of all indexed components.
     *
     * See the `indexing` package for more details.
     */
    getIndexedComponents(): Map<ts.Declaration, IndexedComponent>;
    private ensureAnalyzed;
    private analyzeSync;
    private resolveCompilation;
    private getTemplateDiagnostics;
    /**
     * Reifies the inter-dependencies of NgModules and the components within their compilation scopes
     * into the `IncrementalDriver`'s dependency graph.
     */
    private recordNgModuleScopeDependencies;
    private scanForMwp;
    private makeCompilation;
}
