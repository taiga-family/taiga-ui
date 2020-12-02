/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/api" />
import { ParseSourceSpan, Position } from '@angular/compiler';
import * as ts from 'typescript';
import { ExtendedTsCompilerHost, NgCompilerOptions } from '../ngtsc/core/api';
export declare const DEFAULT_ERROR_CODE = 100;
export declare const UNKNOWN_ERROR_CODE = 500;
export declare const SOURCE: "angular";
export interface DiagnosticMessageChain {
    messageText: string;
    position?: Position;
    next?: DiagnosticMessageChain[];
}
export interface Diagnostic {
    messageText: string;
    span?: ParseSourceSpan;
    position?: Position;
    chain?: DiagnosticMessageChain;
    category: ts.DiagnosticCategory;
    code: number;
    source: 'angular';
}
export declare function isTsDiagnostic(diagnostic: any): diagnostic is ts.Diagnostic;
export declare function isNgDiagnostic(diagnostic: any): diagnostic is Diagnostic;
export interface CompilerOptions extends NgCompilerOptions, ts.CompilerOptions {
    genDir?: string;
    basePath?: string;
    skipMetadataEmit?: boolean;
    strictMetadataEmit?: boolean;
    skipTemplateCodegen?: boolean;
    flatModulePrivateSymbolPrefix?: string;
    generateCodeForLibraries?: boolean;
    annotationsAs?: 'decorators' | 'static fields';
    trace?: boolean;
    disableExpressionLowering?: boolean;
    i18nOutLocale?: string;
    i18nOutFormat?: string;
    i18nOutFile?: string;
    i18nInFormat?: string;
    i18nInFile?: string;
    i18nInMissingTranslations?: 'error' | 'warning' | 'ignore';
    /**
     * Whether to generate .ngsummary.ts files that allow to use AOTed artifacts
     * in JIT mode. This is off by default.
     */
    enableSummariesForJit?: boolean;
    /**
     * Whether to replace the `templateUrl` and `styleUrls` property in all
     * @Component decorators with inlined contents in `template` and `styles`
     * properties.
     * When enabled, the .js output of ngc will have no lazy-loaded `templateUrl`
     * or `styleUrl`s. Note that this requires that resources be available to
     * load statically at compile-time.
     */
    enableResourceInlining?: boolean;
    /**
     * Whether NGC should generate re-exports for external symbols which are referenced
     * in Angular metadata (e.g. @Component, @Inject, @ViewChild). This can be enabled in
     * order to avoid dynamically generated module dependencies which can break strict
     * dependency enforcements. This is not enabled by default.
     * Read more about this here: https://github.com/angular/angular/issues/25644.
     */
    createExternalSymbolFactoryReexports?: boolean;
}
export interface CompilerHost extends ts.CompilerHost, ExtendedTsCompilerHost {
    /**
     * Converts a module name that is used in an `import` to a file path.
     * I.e. `path/to/containingFile.ts` containing `import {...} from 'module-name'`.
     */
    moduleNameToFileName?(moduleName: string, containingFile: string): string | null;
    /**
     * Converts a file name into a representation that should be stored in a summary file.
     * This has to include changing the suffix as well.
     * E.g.
     * `some_file.ts` -> `some_file.d.ts`
     *
     * @param referringSrcFileName the soure file that refers to fileName
     */
    toSummaryFileName?(fileName: string, referringSrcFileName: string): string;
    /**
     * Converts a fileName that was processed by `toSummaryFileName` back into a real fileName
     * given the fileName of the library that is referrig to it.
     */
    fromSummaryFileName?(fileName: string, referringLibFileName: string): string;
    /**
     * Produce an AMD module name for the source file. Used in Bazel.
     *
     * An AMD module can have an arbitrary name, so that it is require'd by name
     * rather than by path. See http://requirejs.org/docs/whyamd.html#namedmodules
     */
    amdModuleName?(sf: ts.SourceFile): string | undefined;
}
export declare enum EmitFlags {
    DTS = 1,
    JS = 2,
    Metadata = 4,
    I18nBundle = 8,
    Codegen = 16,
    Default = 19,
    All = 31
}
export interface CustomTransformers {
    beforeTs?: ts.TransformerFactory<ts.SourceFile>[];
    afterTs?: ts.TransformerFactory<ts.SourceFile>[];
}
export interface TsEmitArguments {
    program: ts.Program;
    host: CompilerHost;
    options: CompilerOptions;
    targetSourceFile?: ts.SourceFile;
    writeFile?: ts.WriteFileCallback;
    cancellationToken?: ts.CancellationToken;
    emitOnlyDtsFiles?: boolean;
    customTransformers?: ts.CustomTransformers;
}
export interface TsEmitCallback {
    (args: TsEmitArguments): ts.EmitResult;
}
export interface TsMergeEmitResultsCallback {
    (results: ts.EmitResult[]): ts.EmitResult;
}
export interface LibrarySummary {
    fileName: string;
    text: string;
    sourceFile?: ts.SourceFile;
}
export interface LazyRoute {
    route: string;
    module: {
        name: string;
        filePath: string;
    };
    referencedModule: {
        name: string;
        filePath: string;
    };
}
export interface Program {
    /**
     * Retrieve the TypeScript program used to produce semantic diagnostics and emit the sources.
     *
     * Angular structural information is required to produce the program.
     */
    getTsProgram(): ts.Program;
    /**
     * Retrieve options diagnostics for the TypeScript options used to create the program. This is
     * faster than calling `getTsProgram().getOptionsDiagnostics()` since it does not need to
     * collect Angular structural information to produce the errors.
     */
    getTsOptionDiagnostics(cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic>;
    /**
     * Retrieve options diagnostics for the Angular options used to create the program.
     */
    getNgOptionDiagnostics(cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic | Diagnostic>;
    /**
     * Retrieve the syntax diagnostics from TypeScript. This is faster than calling
     * `getTsProgram().getSyntacticDiagnostics()` since it does not need to collect Angular structural
     * information to produce the errors.
     */
    getTsSyntacticDiagnostics(sourceFile?: ts.SourceFile, cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic>;
    /**
     * Retrieve the diagnostics for the structure of an Angular application is correctly formed.
     * This includes validating Angular annotations and the syntax of referenced and imbedded HTML
     * and CSS.
     *
     * Note it is important to displaying TypeScript semantic diagnostics along with Angular
     * structural diagnostics as an error in the program structure might cause errors detected in
     * semantic analysis and a semantic error might cause errors in specifying the program structure.
     *
     * Angular structural information is required to produce these diagnostics.
     */
    getNgStructuralDiagnostics(cancellationToken?: ts.CancellationToken): ReadonlyArray<Diagnostic>;
    /**
     * Retrieve the semantic diagnostics from TypeScript. This is equivalent to calling
     * `getTsProgram().getSemanticDiagnostics()` directly and is included for completeness.
     */
    getTsSemanticDiagnostics(sourceFile?: ts.SourceFile, cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic>;
    /**
     * Retrieve the Angular semantic diagnostics.
     *
     * Angular structural information is required to produce these diagnostics.
     */
    getNgSemanticDiagnostics(fileName?: string, cancellationToken?: ts.CancellationToken): ReadonlyArray<ts.Diagnostic | Diagnostic>;
    /**
     * Load Angular structural information asynchronously. If this method is not called then the
     * Angular structural information, including referenced HTML and CSS files, are loaded
     * synchronously. If the supplied Angular compiler host returns a promise from `loadResource()`
     * will produce a diagnostic error message or, `getTsProgram()` or `emit` to throw.
     */
    loadNgStructureAsync(): Promise<void>;
    /**
     * Returns the lazy routes in the program.
     * @param entryRoute A reference to an NgModule like `someModule#name`. If given,
     *              will recursively analyze routes starting from this symbol only.
     *              Otherwise will list all routes for all NgModules in the program/
     */
    listLazyRoutes(entryRoute?: string): LazyRoute[];
    /**
     * Emit the files requested by emitFlags implied by the program.
     *
     * Angular structural information is required to emit files.
     */
    emit({ emitFlags, cancellationToken, customTransformers, emitCallback, mergeEmitResultsCallback }?: {
        emitFlags?: EmitFlags;
        cancellationToken?: ts.CancellationToken;
        customTransformers?: CustomTransformers;
        emitCallback?: TsEmitCallback;
        mergeEmitResultsCallback?: TsMergeEmitResultsCallback;
    }): ts.EmitResult;
    /**
     * Returns the .d.ts / .ngsummary.json / .ngfactory.d.ts files of libraries that have been emitted
     * in this program or previous programs with paths that emulate the fact that these libraries
     * have been compiled before with no outDir.
     */
    getLibrarySummaries(): Map<string, LibrarySummary>;
}
