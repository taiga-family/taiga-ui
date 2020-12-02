/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/context" />
import { BoundTarget, ParseSourceFile, SchemaMetadata } from '@angular/compiler';
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
import { Reference, ReferenceEmitter } from '../../imports';
import { ClassDeclaration, ReflectionHost } from '../../reflection';
import { TemplateSourceMapping, TypeCheckableDirectiveMeta, TypeCheckingConfig, TypeCtorMetadata } from './api';
/**
 * A template type checking context for a program.
 *
 * The `TypeCheckContext` allows registration of components and their templates which need to be
 * type checked. It also allows generation of modified `ts.SourceFile`s which contain the type
 * checking code.
 */
export declare class TypeCheckContext {
    private config;
    private refEmitter;
    private reflector;
    private typeCheckFile;
    constructor(config: TypeCheckingConfig, refEmitter: ReferenceEmitter, reflector: ReflectionHost, typeCheckFilePath: AbsoluteFsPath);
    /**
     * A `Map` of `ts.SourceFile`s that the context has seen to the operations (additions of methods
     * or type-check blocks) that need to be eventually performed on that file.
     */
    private opMap;
    /**
     * Tracks when an a particular class has a pending type constructor patching operation already
     * queued.
     */
    private typeCtorPending;
    private sourceManager;
    private domSchemaChecker;
    private oobRecorder;
    /**
     * Record a template for the given component `node`, with a `SelectorMatcher` for directive
     * matching.
     *
     * @param node class of the node being recorded.
     * @param template AST nodes of the template being recorded.
     * @param matcher `SelectorMatcher` which tracks directives that are in scope for this template.
     */
    addTemplate(ref: Reference<ClassDeclaration<ts.ClassDeclaration>>, boundTarget: BoundTarget<TypeCheckableDirectiveMeta>, pipes: Map<string, Reference<ClassDeclaration<ts.ClassDeclaration>>>, schemas: SchemaMetadata[], sourceMapping: TemplateSourceMapping, file: ParseSourceFile): void;
    /**
     * Record a type constructor for the given `node` with the given `ctorMetadata`.
     */
    addInlineTypeCtor(sf: ts.SourceFile, ref: Reference<ClassDeclaration<ts.ClassDeclaration>>, ctorMeta: TypeCtorMetadata): void;
    /**
     * Transform a `ts.SourceFile` into a version that includes type checking code.
     *
     * If this particular source file has no directives that require type constructors, or components
     * that require type check blocks, then it will be returned directly. Otherwise, a new
     * `ts.SourceFile` is parsed from modified text of the original. This is necessary to ensure the
     * added code has correct positional information associated with it.
     */
    transform(sf: ts.SourceFile): ts.SourceFile;
    calculateTemplateDiagnostics(originalProgram: ts.Program, originalHost: ts.CompilerHost, originalOptions: ts.CompilerOptions): {
        diagnostics: ts.Diagnostic[];
        program: ts.Program;
    };
    private addInlineTypeCheckBlock;
}
