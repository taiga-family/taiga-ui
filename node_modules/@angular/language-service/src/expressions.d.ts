/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/expressions" />
import { AST } from '@angular/compiler';
import { Span, Symbol, SymbolTable, TemplateSource } from './types';
export declare function getExpressionCompletions(scope: SymbolTable, ast: AST, position: number, templateInfo: TemplateSource): Symbol[] | undefined;
/**
 * Retrieves the expression symbol at a particular position in a template.
 *
 * @param scope symbols in scope of the template
 * @param ast template AST
 * @param position absolute location in template to retrieve symbol at
 * @param query type symbol query for the template scope
 */
export declare function getExpressionSymbol(scope: SymbolTable, ast: AST, position: number, templateInfo: TemplateSource): {
    symbol: Symbol;
    span: Span;
} | undefined;
