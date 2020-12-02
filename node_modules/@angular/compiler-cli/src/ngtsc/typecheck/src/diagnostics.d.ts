/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteSourceSpan, ParseSourceSpan } from '@angular/compiler';
import * as ts from 'typescript';
import { TemplateId, TemplateSourceMapping } from './api';
/**
 * A `ts.Diagnostic` with additional information about the diagnostic related to template
 * type-checking.
 */
export interface TemplateDiagnostic extends ts.Diagnostic {
    /**
     * The component with the template that resulted in this diagnostic.
     */
    componentFile: ts.SourceFile;
}
/**
 * Adapter interface which allows the template type-checking diagnostics code to interpret offsets
 * in a TCB and map them back to original locations in the template.
 */
export interface TemplateSourceResolver {
    /**
     * For the given template id, retrieve the original source mapping which describes how the offsets
     * in the template should be interpreted.
     */
    getSourceMapping(id: TemplateId): TemplateSourceMapping;
    /**
     * Convert an absolute source span associated with the given template id into a full
     * `ParseSourceSpan`. The returned parse span has line and column numbers in addition to only
     * absolute offsets and gives access to the original template source.
     */
    toParseSourceSpan(id: TemplateId, span: AbsoluteSourceSpan): ParseSourceSpan | null;
}
/**
 * Wraps the node in parenthesis such that inserted span comments become attached to the proper
 * node. This is an alias for `ts.createParen` with the benefit that it signifies that the
 * inserted parenthesis are for diagnostic purposes, not for correctness of the rendered TCB code.
 *
 * Note that it is important that nodes and its attached comment are not wrapped into parenthesis
 * by default, as it prevents correct translation of e.g. diagnostics produced for incorrect method
 * arguments. Such diagnostics would then be produced for the parenthesised node whereas the
 * positional comment would be located within that node, resulting in a mismatch.
 */
export declare function wrapForDiagnostics(expr: ts.Expression): ts.Expression;
/**
 * Adds a marker to the node that signifies that any errors within the node should not be reported.
 */
export declare function ignoreDiagnostics(node: ts.Node): void;
/**
 * Adds a synthetic comment to the expression that represents the parse span of the provided node.
 * This comment can later be retrieved as trivia of a node to recover original source locations.
 */
export declare function addParseSpanInfo(node: ts.Node, span: AbsoluteSourceSpan | ParseSourceSpan): void;
/**
 * Adds a synthetic comment to the function declaration that contains the template id
 * of the class declaration.
 */
export declare function addTemplateId(tcb: ts.FunctionDeclaration, id: TemplateId): void;
/**
 * Determines if the diagnostic should be reported. Some diagnostics are produced because of the
 * way TCBs are generated; those diagnostics should not be reported as type check errors of the
 * template.
 */
export declare function shouldReportDiagnostic(diagnostic: ts.Diagnostic): boolean;
/**
 * Attempts to translate a TypeScript diagnostic produced during template type-checking to their
 * location of origin, based on the comments that are emitted in the TCB code.
 *
 * If the diagnostic could not be translated, `null` is returned to indicate that the diagnostic
 * should not be reported at all. This prevents diagnostics from non-TCB code in a user's source
 * file from being reported as type-check errors.
 */
export declare function translateDiagnostic(diagnostic: ts.Diagnostic, resolver: TemplateSourceResolver): ts.Diagnostic | null;
/**
 * Constructs a `ts.Diagnostic` for a given `ParseSourceSpan` within a template.
 */
export declare function makeTemplateDiagnostic(mapping: TemplateSourceMapping, span: ParseSourceSpan, category: ts.DiagnosticCategory, code: number, messageText: string | ts.DiagnosticMessageChain, relatedMessage?: {
    text: string;
    span: ParseSourceSpan;
}): TemplateDiagnostic;
export declare function isTemplateDiagnostic(diagnostic: ts.Diagnostic): diagnostic is TemplateDiagnostic;
