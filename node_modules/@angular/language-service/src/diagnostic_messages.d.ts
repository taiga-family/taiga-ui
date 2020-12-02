/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/diagnostic_messages" />
import * as ts from 'typescript';
import * as ng from './types';
export interface DiagnosticMessage {
    message: string;
    kind: keyof typeof ts.DiagnosticCategory;
}
declare type DiagnosticName = 'directive_not_in_module' | 'missing_template_and_templateurl' | 'both_template_and_templateurl' | 'invalid_templateurl' | 'template_context_missing_member' | 'callable_expression_expected_method_call' | 'call_target_not_callable' | 'expression_might_be_null' | 'expected_a_number_type' | 'expected_a_string_or_number_type' | 'expected_operands_of_comparable_types_or_any' | 'unrecognized_operator' | 'unrecognized_primitive' | 'no_pipe_found' | 'unable_to_resolve_compatible_call_signature' | 'unable_to_resolve_signature' | 'could_not_resolve_type' | 'identifier_not_callable' | 'identifier_possibly_undefined' | 'identifier_not_defined_in_app_context' | 'identifier_not_defined_on_receiver' | 'identifier_is_private';
export declare const Diagnostic: Record<DiagnosticName, DiagnosticMessage>;
/**
 * Creates a language service diagnostic.
 * @param span location the diagnostic for
 * @param dm diagnostic message
 * @param formatArgs run-time arguments to format the diagnostic message with (see the messages in
 *        the `Diagnostic` object for an example).
 * @returns a created diagnostic
 */
export declare function createDiagnostic(span: ng.Span, dm: DiagnosticMessage, ...formatArgs: string[]): ng.Diagnostic;
export {};
