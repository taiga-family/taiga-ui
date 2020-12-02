/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/ng_module" />
import { Expression, R3InjectorMetadata, R3NgModuleMetadata, SchemaMetadata, Statement } from '@angular/compiler';
import * as ts from 'typescript';
import { DefaultImportRecorder, Reference, ReferenceEmitter } from '../../imports';
import { InjectableClassRegistry, MetadataReader, MetadataRegistry } from '../../metadata';
import { PartialEvaluator } from '../../partial_evaluator';
import { ClassDeclaration, Decorator, ReflectionHost } from '../../reflection';
import { NgModuleRouteAnalyzer } from '../../routing';
import { LocalModuleScopeRegistry } from '../../scope';
import { FactoryTracker } from '../../shims';
import { AnalysisOutput, CompileResult, DecoratorHandler, DetectResult, HandlerPrecedence, ResolveResult } from '../../transform';
import { ReferencesRegistry } from './references_registry';
export interface NgModuleAnalysis {
    mod: R3NgModuleMetadata;
    inj: R3InjectorMetadata;
    metadataStmt: Statement | null;
    declarations: Reference<ClassDeclaration>[];
    rawDeclarations: ts.Expression | null;
    schemas: SchemaMetadata[];
    imports: Reference<ClassDeclaration>[];
    exports: Reference<ClassDeclaration>[];
    id: Expression | null;
    factorySymbolName: string;
    providersRequiringFactory: Set<Reference<ClassDeclaration>> | null;
    providers: ts.Expression | null;
}
export interface NgModuleResolution {
    injectorImports: Expression[];
}
/**
 * Compiles @NgModule annotations to ngModuleDef fields.
 *
 * TODO(alxhub): handle injector side of things as well.
 */
export declare class NgModuleDecoratorHandler implements DecoratorHandler<Decorator, NgModuleAnalysis, NgModuleResolution> {
    private reflector;
    private evaluator;
    private metaReader;
    private metaRegistry;
    private scopeRegistry;
    private referencesRegistry;
    private isCore;
    private routeAnalyzer;
    private refEmitter;
    private factoryTracker;
    private defaultImportRecorder;
    private annotateForClosureCompiler;
    private injectableRegistry;
    private localeId?;
    constructor(reflector: ReflectionHost, evaluator: PartialEvaluator, metaReader: MetadataReader, metaRegistry: MetadataRegistry, scopeRegistry: LocalModuleScopeRegistry, referencesRegistry: ReferencesRegistry, isCore: boolean, routeAnalyzer: NgModuleRouteAnalyzer | null, refEmitter: ReferenceEmitter, factoryTracker: FactoryTracker | null, defaultImportRecorder: DefaultImportRecorder, annotateForClosureCompiler: boolean, injectableRegistry: InjectableClassRegistry, localeId?: string | undefined);
    readonly precedence = HandlerPrecedence.PRIMARY;
    readonly name: string;
    detect(node: ClassDeclaration, decorators: Decorator[] | null): DetectResult<Decorator> | undefined;
    analyze(node: ClassDeclaration, decorator: Readonly<Decorator>): AnalysisOutput<NgModuleAnalysis>;
    register(node: ClassDeclaration, analysis: NgModuleAnalysis): void;
    resolve(node: ClassDeclaration, analysis: Readonly<NgModuleAnalysis>): ResolveResult<NgModuleResolution>;
    compile(node: ClassDeclaration, analysis: Readonly<NgModuleAnalysis>, resolution: Readonly<NgModuleResolution>): CompileResult[];
    private _toR3Reference;
    /**
     * Given a `FunctionDeclaration`, `MethodDeclaration` or `FunctionExpression`, check if it is
     * typed as a `ModuleWithProviders` and return an expression referencing the module if available.
     */
    private _extractModuleFromModuleWithProvidersFn;
    /**
     * Retrieve an `NgModule` identifier (T) from the specified `type`, if it is of the form:
     * `ModuleWithProviders<T>`
     * @param type The type to reflect on.
     * @returns the identifier of the NgModule type if found, or null otherwise.
     */
    private _reflectModuleFromTypeParam;
    /**
     * Retrieve an `NgModule` identifier (T) from the specified `type`, if it is of the form:
     * `A|B|{ngModule: T}|C`.
     * @param type The type to reflect on.
     * @returns the identifier of the NgModule type if found, or null otherwise.
     */
    private _reflectModuleFromLiteralType;
    private isClassDeclarationReference;
    /**
     * Compute a list of `Reference`s from a resolved metadata value.
     */
    private resolveTypeList;
}
