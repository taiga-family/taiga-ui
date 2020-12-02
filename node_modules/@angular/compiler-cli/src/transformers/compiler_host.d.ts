/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/compiler_host" />
import { AotCompilerHost, GeneratedFile, ParseSourceSpan } from '@angular/compiler';
import * as ts from 'typescript';
import { TypeCheckHost } from '../diagnostics/translate_diagnostics';
import { ModuleMetadata } from '../metadata/index';
import { CompilerHost, CompilerOptions, LibrarySummary } from './api';
export declare function setWrapHostForTest(wrapFn: ((host: ts.CompilerHost) => ts.CompilerHost) | null): void;
export declare function createCompilerHost({ options, tsHost }: {
    options: CompilerOptions;
    tsHost?: ts.CompilerHost;
}): CompilerHost;
export interface MetadataProvider {
    getMetadata(sourceFile: ts.SourceFile): ModuleMetadata | undefined;
}
export interface CodeGenerator {
    generateFile(genFileName: string, baseFileName?: string): GeneratedFile;
    findGeneratedFileNames(fileName: string): string[];
}
/**
 * Implements the following hosts based on an api.CompilerHost:
 * - ts.CompilerHost to be consumed by a ts.Program
 * - AotCompilerHost for @angular/compiler
 * - TypeCheckHost for mapping ts errors to ng errors (via translateDiagnostics)
 */
export declare class TsCompilerAotCompilerTypeCheckHostAdapter implements ts.CompilerHost, AotCompilerHost, TypeCheckHost {
    private rootFiles;
    private options;
    private context;
    private metadataProvider;
    private codeGenerator;
    private librarySummaries;
    private metadataReaderCache;
    private fileNameToModuleNameCache;
    private flatModuleIndexCache;
    private flatModuleIndexNames;
    private flatModuleIndexRedirectNames;
    private rootDirs;
    private moduleResolutionCache;
    private originalSourceFiles;
    private originalFileExistsCache;
    private generatedSourceFiles;
    private generatedCodeFor;
    private emitter;
    private metadataReaderHost;
    getCancellationToken: () => ts.CancellationToken;
    getDefaultLibLocation: () => string;
    trace: (s: string) => void;
    getDirectories: (path: string) => string[];
    resolveTypeReferenceDirectives?: (names: string[], containingFile: string) => ts.ResolvedTypeReferenceDirective[];
    directoryExists?: (directoryName: string) => boolean;
    constructor(rootFiles: ReadonlyArray<string>, options: CompilerOptions, context: CompilerHost, metadataProvider: MetadataProvider, codeGenerator: CodeGenerator, librarySummaries?: Map<string, LibrarySummary>);
    private resolveModuleName;
    resolveModuleNames(moduleNames: string[], containingFile: string): ts.ResolvedModule[];
    moduleNameToFileName(m: string, containingFile?: string): string | null;
    /**
     * We want a moduleId that will appear in import statements in the generated code
     * which will be written to `containingFile`.
     *
     * Note that we also generate files for files in node_modules, as libraries
     * only ship .metadata.json files but not the generated code.
     *
     * Logic:
     * 1. if the importedFile and the containingFile are from the project sources
     *    or from the same node_modules package, use a relative path
     * 2. if the importedFile is in a node_modules package,
     *    use a path that starts with the package name.
     * 3. Error if the containingFile is in the node_modules package
     *    and the importedFile is in the project soures,
     *    as that is a violation of the principle that node_modules packages cannot
     *    import project sources.
     */
    fileNameToModuleName(importedFile: string, containingFile: string): string;
    resourceNameToFileName(resourceName: string, containingFile: string): string | null;
    toSummaryFileName(fileName: string, referringSrcFileName: string): string;
    fromSummaryFileName(fileName: string, referringLibFileName: string): string;
    parseSourceSpanOf(fileName: string, line: number, character: number): ParseSourceSpan | null;
    private getOriginalSourceFile;
    updateGeneratedFile(genFile: GeneratedFile): ts.SourceFile;
    private addGeneratedFile;
    shouldGenerateFile(fileName: string): {
        generate: boolean;
        baseFileName?: string;
    };
    shouldGenerateFilesFor(fileName: string): string | boolean | null;
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: ((message: string) => void) | undefined): ts.SourceFile;
    private getGeneratedFile;
    private originalFileExists;
    fileExists(fileName: string): boolean;
    loadSummary(filePath: string): string | null;
    isSourceFile(filePath: string): boolean;
    readFile(fileName: string): string | undefined;
    getMetadataFor(filePath: string): ModuleMetadata[] | undefined;
    loadResource(filePath: string): Promise<string> | string;
    getOutputName(filePath: string): string;
    private hasBundleIndex;
    getDefaultLibFileName: (options: ts.CompilerOptions) => string;
    getCurrentDirectory: () => string;
    getCanonicalFileName: (fileName: string) => string;
    useCaseSensitiveFileNames: () => boolean;
    getNewLine: () => string;
    realpath: (p: string) => string;
    writeFile: ts.WriteFileCallback;
}
export declare function getOriginalReferences(sourceFile: ts.SourceFile): ts.FileReference[] | undefined;
