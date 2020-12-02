/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/component" />
import { ConstantPool, InterpolationConfig, ParseError, ParseSourceFile, R3ComponentMetadata, Statement, TmplAstNode } from '@angular/compiler';
import { CycleAnalyzer } from '../../cycles';
import { DefaultImportRecorder, ModuleResolver, Reference, ReferenceEmitter } from '../../imports';
import { DependencyTracker } from '../../incremental/api';
import { IndexingContext } from '../../indexer';
import { extractDirectiveGuards, InjectableClassRegistry, MetadataReader, MetadataRegistry } from '../../metadata';
import { PartialEvaluator } from '../../partial_evaluator';
import { ClassDeclaration, Decorator, ReflectionHost } from '../../reflection';
import { ComponentScopeReader, LocalModuleScopeRegistry } from '../../scope';
import { AnalysisOutput, CompileResult, DecoratorHandler, DetectResult, HandlerFlags, HandlerPrecedence, ResolveResult } from '../../transform';
import { TemplateSourceMapping, TypeCheckContext } from '../../typecheck';
import { SubsetOfKeys } from '../../util/src/typescript';
import { ResourceLoader } from './api';
/**
 * These fields of `R3ComponentMetadata` are updated in the `resolve` phase.
 *
 * The `keyof R3ComponentMetadata &` condition ensures that only fields of `R3ComponentMetadata` can
 * be included here.
 */
export declare type ComponentMetadataResolvedFields = SubsetOfKeys<R3ComponentMetadata, 'directives' | 'pipes' | 'wrapDirectivesAndPipesInClosure'>;
export interface ComponentAnalysisData {
    /**
     * `meta` includes those fields of `R3ComponentMetadata` which are calculated at `analyze` time
     * (not during resolve).
     */
    meta: Omit<R3ComponentMetadata, ComponentMetadataResolvedFields>;
    baseClass: Reference<ClassDeclaration> | 'dynamic' | null;
    guards: ReturnType<typeof extractDirectiveGuards>;
    template: ParsedTemplateWithSource;
    metadataStmt: Statement | null;
    /**
     * Providers extracted from the `providers` field of the component annotation which will require
     * an Angular factory definition at runtime.
     */
    providersRequiringFactory: Set<Reference<ClassDeclaration>> | null;
    /**
     * Providers extracted from the `viewProviders` field of the component annotation which will
     * require an Angular factory definition at runtime.
     */
    viewProvidersRequiringFactory: Set<Reference<ClassDeclaration>> | null;
}
export declare type ComponentResolutionData = Pick<R3ComponentMetadata, ComponentMetadataResolvedFields>;
/**
 * `DecoratorHandler` which handles the `@Component` annotation.
 */
export declare class ComponentDecoratorHandler implements DecoratorHandler<Decorator, ComponentAnalysisData, ComponentResolutionData> {
    private reflector;
    private evaluator;
    private metaRegistry;
    private metaReader;
    private scopeReader;
    private scopeRegistry;
    private isCore;
    private resourceLoader;
    private rootDirs;
    private defaultPreserveWhitespaces;
    private i18nUseExternalIds;
    private enableI18nLegacyMessageIdFormat;
    private moduleResolver;
    private cycleAnalyzer;
    private refEmitter;
    private defaultImportRecorder;
    private depTracker;
    private injectableRegistry;
    private annotateForClosureCompiler;
    constructor(reflector: ReflectionHost, evaluator: PartialEvaluator, metaRegistry: MetadataRegistry, metaReader: MetadataReader, scopeReader: ComponentScopeReader, scopeRegistry: LocalModuleScopeRegistry, isCore: boolean, resourceLoader: ResourceLoader, rootDirs: ReadonlyArray<string>, defaultPreserveWhitespaces: boolean, i18nUseExternalIds: boolean, enableI18nLegacyMessageIdFormat: boolean, moduleResolver: ModuleResolver, cycleAnalyzer: CycleAnalyzer, refEmitter: ReferenceEmitter, defaultImportRecorder: DefaultImportRecorder, depTracker: DependencyTracker | null, injectableRegistry: InjectableClassRegistry, annotateForClosureCompiler: boolean);
    private literalCache;
    private elementSchemaRegistry;
    /**
     * During the asynchronous preanalyze phase, it's necessary to parse the template to extract
     * any potential <link> tags which might need to be loaded. This cache ensures that work is not
     * thrown away, and the parsed template is reused during the analyze phase.
     */
    private preanalyzeTemplateCache;
    readonly precedence = HandlerPrecedence.PRIMARY;
    readonly name: string;
    detect(node: ClassDeclaration, decorators: Decorator[] | null): DetectResult<Decorator> | undefined;
    preanalyze(node: ClassDeclaration, decorator: Readonly<Decorator>): Promise<void> | undefined;
    analyze(node: ClassDeclaration, decorator: Readonly<Decorator>, flags?: HandlerFlags): AnalysisOutput<ComponentAnalysisData>;
    register(node: ClassDeclaration, analysis: ComponentAnalysisData): void;
    index(context: IndexingContext, node: ClassDeclaration, analysis: Readonly<ComponentAnalysisData>): null | undefined;
    typeCheck(ctx: TypeCheckContext, node: ClassDeclaration, meta: Readonly<ComponentAnalysisData>): void;
    resolve(node: ClassDeclaration, analysis: Readonly<ComponentAnalysisData>): ResolveResult<ComponentResolutionData>;
    compile(node: ClassDeclaration, analysis: Readonly<ComponentAnalysisData>, resolution: Readonly<ComponentResolutionData>, pool: ConstantPool): CompileResult[];
    private _resolveLiteral;
    private _resolveEnumValue;
    private _extractStyleUrls;
    private _preloadAndParseTemplate;
    private _extractExternalTemplate;
    private _extractInlineTemplate;
    private _parseTemplate;
    private _expressionToImportedFile;
    private _isCyclicImport;
    private _recordSyntheticImport;
}
/**
 * Information about the template which was extracted during parsing.
 *
 * This contains the actual parsed template as well as any metadata collected during its parsing,
 * some of which might be useful for re-parsing the template with different options.
 */
export interface ParsedTemplate {
    /**
     * The `InterpolationConfig` specified by the user.
     */
    interpolation: InterpolationConfig;
    /**
     * A full path to the file which contains the template.
     *
     * This can be either the original .ts file if the template is inline, or the .html file if an
     * external file was used.
     */
    templateUrl: string;
    /**
     * The string contents of the template.
     *
     * This is the "logical" template string, after expansion of any escaped characters (for inline
     * templates). This may differ from the actual template bytes as they appear in the .ts file.
     */
    template: string;
    /**
     * Any errors from parsing the template the first time.
     */
    errors?: ParseError[] | undefined;
    /**
     * The template AST, parsed according to the user's specifications.
     */
    emitNodes: TmplAstNode[];
    /**
     * The template AST, parsed in a manner which preserves source map information for diagnostics.
     *
     * Not useful for emit.
     */
    diagNodes: TmplAstNode[];
    /**
     *
     */
    /**
     * Any styleUrls extracted from the metadata.
     */
    styleUrls: string[];
    /**
     * Any inline styles extracted from the metadata.
     */
    styles: string[];
    /**
     * Any ng-content selectors extracted from the template.
     */
    ngContentSelectors: string[];
    /**
     * Whether the template was inline.
     */
    isInline: boolean;
    /**
     * The `ParseSourceFile` for the template.
     */
    file: ParseSourceFile;
}
export interface ParsedTemplateWithSource extends ParsedTemplate {
    sourceMapping: TemplateSourceMapping;
}
