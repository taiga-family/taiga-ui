/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/expression_diagnostics" />
import { TemplateAstPath } from '@angular/compiler';
import { SymbolTable } from './symbols';
import * as ng from './types';
export declare function getTemplateExpressionDiagnostics(info: ng.DiagnosticTemplateInfo): ng.Diagnostic[];
/**
 * Returns the symbols available in a particular scope of a template.
 * @param info parsed template information
 * @param path path of template nodes narrowing to the context the expression scope should be
 * derived for.
 */
export declare function getExpressionScope(info: ng.DiagnosticTemplateInfo, path: TemplateAstPath): SymbolTable;
