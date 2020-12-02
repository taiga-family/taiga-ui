/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/decoration_analyzer" />
import * as ts from 'typescript';
import { ParsedConfiguration } from '../../..';
import { ReferencesRegistry, ResourceLoader } from '../../../src/ngtsc/annotations';
import { CycleAnalyzer, ImportGraph } from '../../../src/ngtsc/cycles';
import { FileSystem } from '../../../src/ngtsc/file_system';
import { ModuleResolver, PrivateExportAliasingHost, ReferenceEmitter } from '../../../src/ngtsc/imports';
import { CompoundMetadataReader, CompoundMetadataRegistry, DtsMetadataReader, InjectableClassRegistry, LocalMetadataRegistry } from '../../../src/ngtsc/metadata';
import { PartialEvaluator } from '../../../src/ngtsc/partial_evaluator';
import { LocalModuleScopeRegistry, MetadataDtsModuleScopeResolver } from '../../../src/ngtsc/scope';
import { DecoratorHandler } from '../../../src/ngtsc/transform';
import { NgccReflectionHost } from '../host/ngcc_host';
import { Migration } from '../migrations/migration';
import { EntryPointBundle } from '../packages/entry_point_bundle';
import { NgccTraitCompiler } from './ngcc_trait_compiler';
import { CompiledFile, DecorationAnalyses } from './types';
/**
 * Simple class that resolves and loads files directly from the filesystem.
 */
declare class NgccResourceLoader implements ResourceLoader {
    private fs;
    constructor(fs: FileSystem);
    canPreload: boolean;
    preload(): undefined | Promise<void>;
    load(url: string): string;
    resolve(url: string, containingFile: string): string;
}
/**
 * This Analyzer will analyze the files that have decorated classes that need to be transformed.
 */
export declare class DecorationAnalyzer {
    private fs;
    private bundle;
    private reflectionHost;
    private referencesRegistry;
    private diagnosticHandler;
    private tsConfig;
    private program;
    private options;
    private host;
    private typeChecker;
    private rootDirs;
    private packagePath;
    private isCore;
    private compilerOptions;
    moduleResolver: ModuleResolver;
    resourceManager: NgccResourceLoader;
    metaRegistry: LocalMetadataRegistry;
    dtsMetaReader: DtsMetadataReader;
    fullMetaReader: CompoundMetadataReader;
    refEmitter: ReferenceEmitter;
    aliasingHost: PrivateExportAliasingHost | null;
    dtsModuleScopeResolver: MetadataDtsModuleScopeResolver;
    scopeRegistry: LocalModuleScopeRegistry;
    fullRegistry: CompoundMetadataRegistry;
    evaluator: PartialEvaluator;
    importGraph: ImportGraph;
    cycleAnalyzer: CycleAnalyzer;
    injectableRegistry: InjectableClassRegistry;
    handlers: DecoratorHandler<unknown, unknown, unknown>[];
    compiler: NgccTraitCompiler;
    migrations: Migration[];
    constructor(fs: FileSystem, bundle: EntryPointBundle, reflectionHost: NgccReflectionHost, referencesRegistry: ReferencesRegistry, diagnosticHandler?: (error: ts.Diagnostic) => void, tsConfig?: ParsedConfiguration | null);
    /**
     * Analyze a program to find all the decorated files should be transformed.
     *
     * @returns a map of the source files to the analysis for those files.
     */
    analyzeProgram(): DecorationAnalyses;
    protected applyMigrations(): void;
    protected reportDiagnostics(): void;
    protected compileFile(sourceFile: ts.SourceFile): CompiledFile;
    private getReexportsForSourceFile;
}
export {};
