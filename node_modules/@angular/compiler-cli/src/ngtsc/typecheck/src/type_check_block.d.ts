/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/type_check_block" />
import { BoundTarget, SchemaMetadata } from '@angular/compiler';
import * as ts from 'typescript';
import { Reference } from '../../imports';
import { ClassDeclaration } from '../../reflection';
import { TemplateId, TypeCheckableDirectiveMeta, TypeCheckBlockMetadata } from './api';
import { DomSchemaChecker } from './dom';
import { Environment } from './environment';
import { OutOfBandDiagnosticRecorder } from './oob';
/**
 * Given a `ts.ClassDeclaration` for a component, and metadata regarding that component, compose a
 * "type check block" function.
 *
 * When passed through TypeScript's TypeChecker, type errors that arise within the type check block
 * function indicate issues in the template itself.
 *
 * As a side effect of generating a TCB for the component, `ts.Diagnostic`s may also be produced
 * directly for issues within the template which are identified during generation. These issues are
 * recorded in either the `domSchemaChecker` (which checks usage of DOM elements and bindings) as
 * well as the `oobRecorder` (which records errors when the type-checking code generator is unable
 * to sufficiently understand a template).
 *
 * @param env an `Environment` into which type-checking code will be generated.
 * @param ref a `Reference` to the component class which should be type-checked.
 * @param name a `ts.Identifier` to use for the generated `ts.FunctionDeclaration`.
 * @param meta metadata about the component's template and the function being generated.
 * @param domSchemaChecker used to check and record errors regarding improper usage of DOM elements
 * and bindings.
 * @param oobRecorder used to record errors regarding template elements which could not be correctly
 * translated into types during TCB generation.
 */
export declare function generateTypeCheckBlock(env: Environment, ref: Reference<ClassDeclaration<ts.ClassDeclaration>>, name: ts.Identifier, meta: TypeCheckBlockMetadata, domSchemaChecker: DomSchemaChecker, oobRecorder: OutOfBandDiagnosticRecorder): ts.FunctionDeclaration;
/**
 * Overall generation context for the type check block.
 *
 * `Context` handles operations during code generation which are global with respect to the whole
 * block. It's responsible for variable name allocation and management of any imports needed. It
 * also contains the template metadata itself.
 */
export declare class Context {
    readonly env: Environment;
    readonly domSchemaChecker: DomSchemaChecker;
    readonly oobRecorder: OutOfBandDiagnosticRecorder;
    readonly id: TemplateId;
    readonly boundTarget: BoundTarget<TypeCheckableDirectiveMeta>;
    private pipes;
    readonly schemas: SchemaMetadata[];
    private nextId;
    constructor(env: Environment, domSchemaChecker: DomSchemaChecker, oobRecorder: OutOfBandDiagnosticRecorder, id: TemplateId, boundTarget: BoundTarget<TypeCheckableDirectiveMeta>, pipes: Map<string, Reference<ClassDeclaration<ts.ClassDeclaration>>>, schemas: SchemaMetadata[]);
    /**
     * Allocate a new variable name for use within the `Context`.
     *
     * Currently this uses a monotonically increasing counter, but in the future the variable name
     * might change depending on the type of data being stored.
     */
    allocateId(): ts.Identifier;
    getPipeByName(name: string): ts.Expression | null;
}
export declare function requiresInlineTypeCheckBlock(node: ClassDeclaration<ts.ClassDeclaration>): boolean;
