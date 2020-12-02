/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, virtualFs } from '@angular-devkit/core';
import { Stats } from 'fs';
import * as ts from 'typescript';
import { NgccProcessor } from './ngcc_processor';
import { WebpackResourceLoader } from './resource_loader';
export interface OnErrorFn {
    (message: string): void;
}
export declare class WebpackCompilerHost implements ts.CompilerHost {
    private _options;
    private readonly cacheSourceFiles;
    private readonly directTemplateLoading;
    private readonly ngccProcessor?;
    private readonly moduleResolutionCache?;
    private _syncHost;
    private _innerMemoryHost;
    private _memoryHost;
    private _changedFiles;
    private _readResourceFiles;
    private _basePath;
    private _resourceLoader?;
    private _sourceFileCache;
    private _virtualFileExtensions;
    private _virtualStyleFileExtensions;
    constructor(_options: ts.CompilerOptions, basePath: string, host: virtualFs.Host, cacheSourceFiles: boolean, directTemplateLoading?: boolean, ngccProcessor?: NgccProcessor | undefined, moduleResolutionCache?: ts.ModuleResolutionCache | undefined);
    private get virtualFiles();
    reset(): void;
    denormalizePath(path: string): string;
    resolve(path: string): Path;
    resetChangedFileTracker(): void;
    getChangedFilePaths(): string[];
    getNgFactoryPaths(): string[];
    invalidate(fileName: string): void;
    fileExists(fileName: string, delegate?: boolean): boolean;
    readFile(fileName: string): string | undefined;
    readFileBuffer(fileName: string): Buffer;
    private _makeStats;
    stat(path: string): Stats | null;
    directoryExists(directoryName: string): boolean;
    getDirectories(path: string): string[];
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: OnErrorFn): ts.SourceFile | undefined;
    getDefaultLibFileName(options: ts.CompilerOptions): string;
    get writeFile(): (fileName: string, data: string, _writeByteOrderMark: boolean, onError?: ((message: string) => void) | undefined, _sourceFiles?: readonly ts.SourceFile[] | undefined) => void;
    getCurrentDirectory(): string;
    getCanonicalFileName(fileName: string): string;
    useCaseSensitiveFileNames(): boolean;
    getNewLine(): string;
    setResourceLoader(resourceLoader: WebpackResourceLoader): void;
    readResource(fileName: string): string | Promise<string> | undefined;
    getModifiedResourceFiles(): Set<string>;
    trace(message: string): void;
    resolveModuleNames(moduleNames: string[], containingFile: string): (ts.ResolvedModule | undefined)[];
    resolveTypeReferenceDirectives(typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference?: ts.ResolvedProjectReference): (ts.ResolvedTypeReferenceDirective | undefined)[];
}
