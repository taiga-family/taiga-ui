/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/annotations/src/injectable" />
import { R3DependencyMetadata, R3InjectableMetadata, Statement } from '@angular/compiler';
import { DefaultImportRecorder } from '../../imports';
import { InjectableClassRegistry } from '../../metadata';
import { ClassDeclaration, Decorator, ReflectionHost } from '../../reflection';
import { AnalysisOutput, CompileResult, DecoratorHandler, DetectResult, HandlerPrecedence } from '../../transform';
export interface InjectableHandlerData {
    meta: R3InjectableMetadata;
    metadataStmt: Statement | null;
    ctorDeps: R3DependencyMetadata[] | 'invalid' | null;
    needsFactory: boolean;
}
/**
 * Adapts the `compileIvyInjectable` compiler for `@Injectable` decorators to the Ivy compiler.
 */
export declare class InjectableDecoratorHandler implements DecoratorHandler<Decorator, InjectableHandlerData, unknown> {
    private reflector;
    private defaultImportRecorder;
    private isCore;
    private strictCtorDeps;
    private injectableRegistry;
    /**
     * What to do if the injectable already contains a ɵprov property.
     *
     * If true then an error diagnostic is reported.
     * If false then there is no error and a new ɵprov property is not added.
     */
    private errorOnDuplicateProv;
    constructor(reflector: ReflectionHost, defaultImportRecorder: DefaultImportRecorder, isCore: boolean, strictCtorDeps: boolean, injectableRegistry: InjectableClassRegistry, 
    /**
     * What to do if the injectable already contains a ɵprov property.
     *
     * If true then an error diagnostic is reported.
     * If false then there is no error and a new ɵprov property is not added.
     */
    errorOnDuplicateProv?: boolean);
    readonly precedence = HandlerPrecedence.SHARED;
    readonly name: string;
    detect(node: ClassDeclaration, decorators: Decorator[] | null): DetectResult<Decorator> | undefined;
    analyze(node: ClassDeclaration, decorator: Readonly<Decorator>): AnalysisOutput<InjectableHandlerData>;
    register(node: ClassDeclaration): void;
    compile(node: ClassDeclaration, analysis: Readonly<InjectableHandlerData>): CompileResult[];
}
