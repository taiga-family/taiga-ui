/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/directive" />
import { ConstantPool, ParsedHostBindings, R3DirectiveMetadata, R3QueryMetadata, Statement } from '@angular/compiler';
import * as ts from 'typescript';
import { DefaultImportRecorder, Reference } from '../../imports';
import { InjectableClassRegistry, MetadataReader, MetadataRegistry } from '../../metadata';
import { extractDirectiveGuards } from '../../metadata/src/util';
import { PartialEvaluator } from '../../partial_evaluator';
import { ClassDeclaration, ClassMember, Decorator, ReflectionHost } from '../../reflection';
import { LocalModuleScopeRegistry } from '../../scope';
import { AnalysisOutput, CompileResult, DecoratorHandler, DetectResult, HandlerFlags, HandlerPrecedence, ResolveResult } from '../../transform';
export interface DirectiveHandlerData {
    baseClass: Reference<ClassDeclaration> | 'dynamic' | null;
    guards: ReturnType<typeof extractDirectiveGuards>;
    meta: R3DirectiveMetadata;
    metadataStmt: Statement | null;
    providersRequiringFactory: Set<Reference<ClassDeclaration>> | null;
}
export declare class DirectiveDecoratorHandler implements DecoratorHandler<Decorator | null, DirectiveHandlerData, unknown> {
    private reflector;
    private evaluator;
    private metaRegistry;
    private scopeRegistry;
    private metaReader;
    private defaultImportRecorder;
    private injectableRegistry;
    private isCore;
    private annotateForClosureCompiler;
    constructor(reflector: ReflectionHost, evaluator: PartialEvaluator, metaRegistry: MetadataRegistry, scopeRegistry: LocalModuleScopeRegistry, metaReader: MetadataReader, defaultImportRecorder: DefaultImportRecorder, injectableRegistry: InjectableClassRegistry, isCore: boolean, annotateForClosureCompiler: boolean);
    readonly precedence = HandlerPrecedence.PRIMARY;
    readonly name: string;
    detect(node: ClassDeclaration, decorators: Decorator[] | null): DetectResult<Decorator | null> | undefined;
    analyze(node: ClassDeclaration, decorator: Readonly<Decorator | null>, flags?: HandlerFlags): AnalysisOutput<DirectiveHandlerData>;
    register(node: ClassDeclaration, analysis: Readonly<DirectiveHandlerData>): void;
    resolve(node: ClassDeclaration, analysis: DirectiveHandlerData): ResolveResult<unknown>;
    compile(node: ClassDeclaration, analysis: Readonly<DirectiveHandlerData>, resolution: Readonly<unknown>, pool: ConstantPool): CompileResult[];
}
/**
 * Helper function to extract metadata from a `Directive` or `Component`. `Directive`s without a
 * selector are allowed to be used for abstract base classes. These abstract directives should not
 * appear in the declarations of an `NgModule` and additional verification is done when processing
 * the module.
 */
export declare function extractDirectiveMetadata(clazz: ClassDeclaration, decorator: Readonly<Decorator | null>, reflector: ReflectionHost, evaluator: PartialEvaluator, defaultImportRecorder: DefaultImportRecorder, isCore: boolean, flags: HandlerFlags, annotateForClosureCompiler: boolean, defaultSelector?: string | null): {
    decorator: Map<string, ts.Expression>;
    metadata: R3DirectiveMetadata;
} | undefined;
export declare function extractQueryMetadata(exprNode: ts.Node, name: string, args: ReadonlyArray<ts.Expression>, propertyName: string, reflector: ReflectionHost, evaluator: PartialEvaluator): R3QueryMetadata;
export declare function extractQueriesFromDecorator(queryData: ts.Expression, reflector: ReflectionHost, evaluator: PartialEvaluator, isCore: boolean): {
    content: R3QueryMetadata[];
    view: R3QueryMetadata[];
};
export declare function parseFieldArrayValue(directive: Map<string, ts.Expression>, field: string, evaluator: PartialEvaluator): null | string[];
export declare function queriesFromFields(fields: {
    member: ClassMember;
    decorators: Decorator[];
}[], reflector: ReflectionHost, evaluator: PartialEvaluator): R3QueryMetadata[];
export declare function extractHostBindings(members: ClassMember[], evaluator: PartialEvaluator, coreModule: string | undefined, metadata?: Map<string, ts.Expression>): ParsedHostBindings;
