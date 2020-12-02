/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/core/schematics/migrations/undecorated-classes-with-decorated-fields/transform" />
import * as ts from 'typescript';
import { UpdateRecorder } from './update_recorder';
export declare class UndecoratedClassesWithDecoratedFieldsTransform {
    private typeChecker;
    private getUpdateRecorder;
    private printer;
    private importManager;
    private reflectionHost;
    private partialEvaluator;
    constructor(typeChecker: ts.TypeChecker, getUpdateRecorder: (sf: ts.SourceFile) => UpdateRecorder);
    /**
     * Migrates the specified source files. The transform adds the abstract `@Directive`
     * decorator to classes that have Angular field decorators but are not decorated.
     * https://hackmd.io/vuQfavzfRG6KUCtU7oK_EA
     */
    migrate(sourceFiles: ts.SourceFile[]): void;
    /** Records all changes that were made in the import manager. */
    recordChanges(): void;
    /** Finds undecorated abstract directives in the specified source files. */
    private _findUndecoratedAbstractDirectives;
    /**
     * Analyzes the given class declaration by determining whether the class
     * is a directive, is an abstract directive, or uses Angular features.
     */
    private _analyzeClassDeclaration;
    /**
     * Checks whether the given decorator resolves to an abstract directive. An directive is
     * considered "abstract" if there is no selector specified.
     */
    private _isAbstractDirective;
    private _hasAngularDecoratedClassMember;
}
