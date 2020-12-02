/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/compilation" />
import { ConstantPool } from '@angular/compiler';
import * as ts from 'typescript';
import { IncrementalBuild } from '../../incremental/api';
import { IndexingContext } from '../../indexer';
import { PerfRecorder } from '../../perf';
import { ClassDeclaration, Decorator, ReflectionHost } from '../../reflection';
import { TypeCheckContext } from '../../typecheck';
import { CompileResult, DecoratorHandler, HandlerFlags } from './api';
import { DtsTransformRegistry } from './declaration';
import { PendingTrait, Trait } from './trait';
/**
 * Records information about a specific class that has matched traits.
 */
export interface ClassRecord {
    /**
     * The `ClassDeclaration` of the class which has Angular traits applied.
     */
    node: ClassDeclaration;
    /**
     * All traits which matched on the class.
     */
    traits: Trait<unknown, unknown, unknown>[];
    /**
     * Meta-diagnostics about the class, which are usually related to whether certain combinations of
     * Angular decorators are not permitted.
     */
    metaDiagnostics: ts.Diagnostic[] | null;
    /**
     * Whether `traits` contains traits matched from `DecoratorHandler`s marked as `WEAK`.
     */
    hasWeakHandlers: boolean;
    /**
     * Whether `traits` contains a trait from a `DecoratorHandler` matched as `PRIMARY`.
     */
    hasPrimaryHandler: boolean;
}
/**
 * The heart of Angular compilation.
 *
 * The `TraitCompiler` is responsible for processing all classes in the program. Any time a
 * `DecoratorHandler` matches a class, a "trait" is created to represent that Angular aspect of the
 * class (such as the class having a component definition).
 *
 * The `TraitCompiler` transitions each trait through the various phases of compilation, culminating
 * in the production of `CompileResult`s instructing the compiler to apply various mutations to the
 * class (like adding fields or type declarations).
 */
export declare class TraitCompiler {
    private handlers;
    private reflector;
    private perf;
    private incrementalBuild;
    private compileNonExportedClasses;
    private dtsTransforms;
    /**
     * Maps class declarations to their `ClassRecord`, which tracks the Ivy traits being applied to
     * those classes.
     */
    private classes;
    /**
     * Maps source files to any class declaration(s) within them which have been discovered to contain
     * Ivy traits.
     */
    protected fileToClasses: Map<ts.SourceFile, Set<ClassDeclaration<ts.Declaration>>>;
    private reexportMap;
    private handlersByName;
    constructor(handlers: DecoratorHandler<unknown, unknown, unknown>[], reflector: ReflectionHost, perf: PerfRecorder, incrementalBuild: IncrementalBuild<ClassRecord>, compileNonExportedClasses: boolean, dtsTransforms: DtsTransformRegistry);
    analyzeSync(sf: ts.SourceFile): void;
    analyzeAsync(sf: ts.SourceFile): Promise<void> | undefined;
    private analyze;
    recordFor(clazz: ClassDeclaration): ClassRecord | null;
    recordsFor(sf: ts.SourceFile): ClassRecord[] | null;
    /**
     * Import a `ClassRecord` from a previous compilation.
     *
     * Traits from the `ClassRecord` have accurate metadata, but the `handler` is from the old program
     * and needs to be updated (matching is done by name). A new pending trait is created and then
     * transitioned to analyzed using the previous analysis. If the trait is in the errored state,
     * instead the errors are copied over.
     */
    private adopt;
    private scanClassForTraits;
    protected detectTraits(clazz: ClassDeclaration, decorators: Decorator[] | null): PendingTrait<unknown, unknown, unknown>[] | null;
    protected analyzeClass(clazz: ClassDeclaration, preanalyzeQueue: Promise<void>[] | null): void;
    protected analyzeTrait(clazz: ClassDeclaration, trait: Trait<unknown, unknown, unknown>, flags?: HandlerFlags): void;
    resolve(): void;
    typeCheck(ctx: TypeCheckContext): void;
    index(ctx: IndexingContext): void;
    compile(clazz: ts.Declaration, constantPool: ConstantPool): CompileResult[] | null;
    decoratorsFor(node: ts.Declaration): ts.Decorator[];
    get diagnostics(): ReadonlyArray<ts.Diagnostic>;
    get exportStatements(): Map<string, Map<string, [string, string]>>;
}
