/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/environment" />
import { Type } from '@angular/compiler';
import * as ts from 'typescript';
import { Reference, ReferenceEmitter } from '../../imports';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { ImportManager } from '../../translator';
import { TypeCheckableDirectiveMeta, TypeCheckingConfig } from './api';
/**
 * A context which hosts one or more Type Check Blocks (TCBs).
 *
 * An `Environment` supports the generation of TCBs by tracking necessary imports, declarations of
 * type constructors, and other statements beyond the type-checking code within the TCB itself.
 * Through method calls on `Environment`, the TCB generator can request `ts.Expression`s which
 * reference declarations in the `Environment` for these artifacts`.
 *
 * `Environment` can be used in a standalone fashion, or can be extended to support more specialized
 * usage.
 */
export declare class Environment {
    readonly config: TypeCheckingConfig;
    protected importManager: ImportManager;
    private refEmitter;
    private reflector;
    protected contextFile: ts.SourceFile;
    private nextIds;
    private typeCtors;
    protected typeCtorStatements: ts.Statement[];
    private pipeInsts;
    protected pipeInstStatements: ts.Statement[];
    private outputHelperIdent;
    protected helperStatements: ts.Statement[];
    constructor(config: TypeCheckingConfig, importManager: ImportManager, refEmitter: ReferenceEmitter, reflector: ReflectionHost, contextFile: ts.SourceFile);
    /**
     * Get an expression referring to a type constructor for the given directive.
     *
     * Depending on the shape of the directive itself, this could be either a reference to a declared
     * type constructor, or to an inline type constructor.
     */
    typeCtorFor(dir: TypeCheckableDirectiveMeta): ts.Expression;
    pipeInst(ref: Reference<ClassDeclaration<ts.ClassDeclaration>>): ts.Expression;
    /**
     * Declares a helper function to be able to cast directive outputs of type `EventEmitter<T>` to
     * have an accurate `subscribe()` method that properly carries over the generic type `T` into the
     * listener function passed as argument to `subscribe`. This is done to work around a typing
     * deficiency in `EventEmitter.subscribe`, where the listener function is typed as any.
     */
    declareOutputHelper(): ts.Expression;
    /**
     * Generate a `ts.Expression` that references the given node.
     *
     * This may involve importing the node into the file if it's not declared there already.
     */
    reference(ref: Reference<ClassDeclaration<ts.ClassDeclaration>>): ts.Expression;
    /**
     * Generate a `ts.TypeNode` that references the given node as a type.
     *
     * This may involve importing the node into the file if it's not declared there already.
     */
    referenceType(ref: Reference): ts.TypeNode;
    private emitTypeParameters;
    /**
     * Generate a `ts.TypeNode` that references a given type from the provided module.
     *
     * This will involve importing the type into the file, and will also add type parameters if
     * provided.
     */
    referenceExternalType(moduleName: string, name: string, typeParams?: Type[]): ts.TypeNode;
    getPreludeStatements(): ts.Statement[];
}
