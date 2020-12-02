export { ModuleResolutionHost } from 'typescript';
import * as typescript from 'typescript';
import { Chalk } from 'chalk';
export interface ErrorInfo {
    code: number;
    severity: Severity;
    content: string;
    file: string;
    line: number;
    character: number;
    context: string;
}
export declare type FileLocation = {
    line: number;
    character: number;
};
export interface WebpackError {
    module?: any;
    file?: string;
    message: string;
    location?: FileLocation;
    loaderSource: string;
}
export interface WebpackModule {
    resource: string;
    errors: WebpackError[];
    buildMeta: {
        tsLoaderFileVersion: number;
        tsLoaderDefinitionFileVersions: string[];
    };
}
export declare type ResolveSync = (context: string | undefined, path: string, moduleName: string) => string;
export interface WatchHost extends typescript.WatchCompilerHostOfFilesAndCompilerOptions<typescript.BuilderProgram> {
    invokeFileWatcher(fileName: string, eventKind: typescript.FileWatcherEventKind): void;
    invokeDirectoryWatcher(directory: string, fileAddedOrRemoved: string): void;
    updateRootFileNames(): void;
}
export interface TSInstance {
    compiler: typeof typescript;
    compilerOptions: typescript.CompilerOptions;
    /** Used for Vue for the most part */
    appendTsTsxSuffixesIfRequired: (filePath: string) => string;
    loaderOptions: LoaderOptions;
    /**
     * a cache of all the files
     */
    files: TSFiles;
    /**
     * contains the modified files - cleared each time after-compile is called
     */
    modifiedFiles?: TSFiles | null;
    /**
     * Paths to project references that are missing source maps.
     * Cleared each time after-compile is called. Used to dedupe
     * warnings about source maps during a single compilation.
     */
    projectsMissingSourceMaps?: Set<string>;
    languageService?: typescript.LanguageService | null;
    version?: number;
    dependencyGraph: DependencyGraph;
    reverseDependencyGraph: ReverseDependencyGraph;
    filesWithErrors?: TSFiles;
    transformers: typescript.CustomTransformers;
    colors: Chalk;
    otherFiles: TSFiles;
    watchHost?: WatchHost;
    watchOfFilesAndCompilerOptions?: typescript.WatchOfFilesAndCompilerOptions<typescript.BuilderProgram>;
    program?: typescript.Program;
    hasUnaccountedModifiedFiles?: boolean;
    changedFilesList?: boolean;
}
export interface LoaderOptionsCache {
    [name: string]: WeakMap<LoaderOptions, LoaderOptions>;
}
export interface TSInstances {
    [name: string]: TSInstance;
}
export interface DependencyGraph {
    [file: string]: ResolvedModule[] | undefined;
}
export interface ReverseDependencyGraph {
    [file: string]: {
        [file: string]: boolean;
    } | undefined;
}
export declare type LogLevel = 'INFO' | 'WARN' | 'ERROR';
export declare type ResolveModuleName = (moduleName: string, containingFile: string, compilerOptions: typescript.CompilerOptions, moduleResolutionHost: typescript.ModuleResolutionHost) => typescript.ResolvedModuleWithFailedLookupLocations;
export declare type CustomResolveModuleName = (moduleName: string, containingFile: string, compilerOptions: typescript.CompilerOptions, moduleResolutionHost: typescript.ModuleResolutionHost, parentResolver: ResolveModuleName) => typescript.ResolvedModuleWithFailedLookupLocations;
export declare type CustomResolveTypeReferenceDirective = (typeDirectiveName: string, containingFile: string, compilerOptions: typescript.CompilerOptions, moduleResolutionHost: typescript.ModuleResolutionHost, parentResolver: typeof typescript.resolveTypeReferenceDirective) => typescript.ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
export interface LoaderOptions {
    silent: boolean;
    logLevel: LogLevel;
    logInfoToStdOut: boolean;
    instance: string;
    compiler: string;
    configFile: string;
    context: string;
    transpileOnly: boolean;
    ignoreDiagnostics: number[];
    reportFiles: string[];
    errorFormatter: (message: ErrorInfo, colors: Chalk) => string;
    onlyCompileBundledFiles: boolean;
    colors: boolean;
    compilerOptions: typescript.CompilerOptions;
    appendTsSuffixTo: RegExp[];
    appendTsxSuffixTo: RegExp[];
    happyPackMode: boolean;
    getCustomTransformers: string | ((program: typescript.Program) => typescript.CustomTransformers | undefined);
    experimentalWatchApi: boolean;
    allowTsInNodeModules: boolean;
    experimentalFileCaching: boolean;
    projectReferences: boolean;
    resolveModuleName: CustomResolveModuleName;
    resolveTypeReferenceDirective: CustomResolveTypeReferenceDirective;
}
export interface TSFile {
    text?: string;
    version: number;
    projectReference?: {
        /**
         * Undefined here means we’ve already checked and confirmed there is no
         * project reference for the file. Don’t bother checking again.
         */
        project?: typescript.ResolvedProjectReference;
        outputFileName?: string;
    };
}
/** where key is filepath */
export declare type TSFiles = Map<string, TSFile>;
export interface ResolvedModule {
    originalFileName: string;
    resolvedFileName: string;
    resolvedModule?: ResolvedModule;
    isExternalLibraryImport?: boolean;
}
export declare type Severity = 'error' | 'warning';
