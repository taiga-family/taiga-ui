/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/core/src/host" />
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
import { FactoryTracker, ShimGenerator } from '../../shims';
import { ExtendedTsCompilerHost, NgCompilerOptions, UnifiedModulesHost } from '../api';
/**
 * Represents the `ExtendedTsCompilerHost` interface, with a transformation applied that turns all
 * methods (even optional ones) into required fields (which may be `undefined`, if the method was
 * optional).
 */
export declare type RequiredCompilerHostDelegations = {
    [M in keyof Required<ExtendedTsCompilerHost>]: ExtendedTsCompilerHost[M];
};
/**
 * Delegates all methods of `ExtendedTsCompilerHost` to a delegate, with the exception of
 * `getSourceFile` and `fileExists` which are implemented in `NgCompilerHost`.
 *
 * If a new method is added to `ts.CompilerHost` which is not delegated, a type error will be
 * generated for this class.
 */
export declare class DelegatingCompilerHost implements Omit<RequiredCompilerHostDelegations, 'getSourceFile' | 'fileExists'> {
    protected delegate: ExtendedTsCompilerHost;
    constructor(delegate: ExtendedTsCompilerHost);
    private delegateMethod;
    createHash: ((data: string) => string) | undefined;
    directoryExists: ((directoryName: string) => boolean) | undefined;
    fileNameToModuleName: ((importedFilePath: string, containingFilePath: string) => string) | undefined;
    getCancellationToken: (() => ts.CancellationToken) | undefined;
    getCanonicalFileName: (fileName: string) => string;
    getCurrentDirectory: () => string;
    getDefaultLibFileName: (options: ts.CompilerOptions) => string;
    getDefaultLibLocation: (() => string) | undefined;
    getDirectories: ((path: string) => string[]) | undefined;
    getEnvironmentVariable: ((name: string) => string | undefined) | undefined;
    getModifiedResourceFiles: (() => Set<string> | undefined) | undefined;
    getNewLine: () => string;
    getParsedCommandLine: ((fileName: string) => ts.ParsedCommandLine | undefined) | undefined;
    getSourceFileByPath: ((fileName: string, path: ts.Path, languageVersion: ts.ScriptTarget, onError?: ((message: string) => void) | undefined, shouldCreateNewSourceFile?: boolean | undefined) => ts.SourceFile | undefined) | undefined;
    readDirectory: ((rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number | undefined) => string[]) | undefined;
    readFile: (fileName: string) => string | undefined;
    readResource: ((fileName: string) => string | Promise<string>) | undefined;
    realpath: ((path: string) => string) | undefined;
    resolveModuleNames: ((moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ts.ResolvedProjectReference | undefined, options: ts.CompilerOptions) => (ts.ResolvedModule | undefined)[]) | undefined;
    resolveTypeReferenceDirectives: ((typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference: ts.ResolvedProjectReference | undefined, options: ts.CompilerOptions) => (ts.ResolvedTypeReferenceDirective | undefined)[]) | undefined;
    resourceNameToFileName: ((resourceName: string, containingFilePath: string) => string | null) | undefined;
    trace: ((s: string) => void) | undefined;
    useCaseSensitiveFileNames: () => boolean;
    writeFile: ts.WriteFileCallback;
}
/**
 * A wrapper around `ts.CompilerHost` (plus any extension methods from `ExtendedTsCompilerHost`).
 *
 * In order for a consumer to include Angular compilation in their TypeScript compiler, the
 * `ts.Program` must be created with a host that adds Angular-specific files (e.g. factories,
 * summaries, the template type-checking file, etc) to the compilation. `NgCompilerHost` is the
 * host implementation which supports this.
 *
 * The interface implementations here ensure that `NgCompilerHost` fully delegates to
 * `ExtendedTsCompilerHost` methods whenever present.
 */
export declare class NgCompilerHost extends DelegatingCompilerHost implements RequiredCompilerHostDelegations, ExtendedTsCompilerHost {
    private shims;
    readonly factoryTracker: FactoryTracker | null;
    readonly entryPoint: AbsoluteFsPath | null;
    readonly diagnostics: ts.Diagnostic[];
    readonly inputFiles: ReadonlyArray<string>;
    readonly rootDirs: ReadonlyArray<AbsoluteFsPath>;
    readonly typeCheckFile: AbsoluteFsPath;
    readonly factoryFiles: AbsoluteFsPath[];
    readonly summaryFiles: AbsoluteFsPath[];
    constructor(delegate: ExtendedTsCompilerHost, inputFiles: ReadonlyArray<string>, rootDirs: ReadonlyArray<AbsoluteFsPath>, shims: ShimGenerator[], entryPoint: AbsoluteFsPath | null, typeCheckFile: AbsoluteFsPath, factoryFiles: AbsoluteFsPath[], summaryFiles: AbsoluteFsPath[], factoryTracker: FactoryTracker | null, diagnostics: ts.Diagnostic[]);
    /**
     * Create an `NgCompilerHost` from a delegate host, an array of input filenames, and the full set
     * of TypeScript and Angular compiler options.
     */
    static wrap(delegate: ts.CompilerHost, inputFiles: ReadonlyArray<string>, options: NgCompilerOptions): NgCompilerHost;
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: ((message: string) => void) | undefined, shouldCreateNewSourceFile?: boolean | undefined): ts.SourceFile | undefined;
    fileExists(fileName: string): boolean;
    get unifiedModulesHost(): UnifiedModulesHost | null;
}
