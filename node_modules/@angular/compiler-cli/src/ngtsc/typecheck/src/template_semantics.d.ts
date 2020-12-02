/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/template_semantics" />
import { AST, BoundTarget, PropertyWrite, RecursiveAstVisitor } from '@angular/compiler';
import { TemplateId } from './api';
import { OutOfBandDiagnosticRecorder } from './oob';
/**
 * Visits a template and records any semantic errors within its expressions.
 */
export declare class ExpressionSemanticVisitor extends RecursiveAstVisitor {
    private templateId;
    private boundTarget;
    private oob;
    constructor(templateId: TemplateId, boundTarget: BoundTarget<any>, oob: OutOfBandDiagnosticRecorder);
    visitPropertyWrite(ast: PropertyWrite, context: any): void;
    static visit(ast: AST, id: TemplateId, boundTarget: BoundTarget<any>, oob: OutOfBandDiagnosticRecorder): void;
}
