/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/utils" />
import { BoundEventAst, CompileTypeMetadata, HtmlAstPath, Node, ParseSourceSpan, TemplateAst, TemplateAstPath } from '@angular/compiler';
import { AstResult, DiagnosticTemplateInfo, SelectorInfo, Span, Symbol, SymbolQuery } from './types';
interface SpanHolder {
    sourceSpan: ParseSourceSpan;
    endSourceSpan?: ParseSourceSpan | null;
    children?: SpanHolder[];
}
export declare function spanOf(span: SpanHolder): Span;
export declare function spanOf(span: ParseSourceSpan): Span;
export declare function spanOf(span: SpanHolder | ParseSourceSpan | undefined): Span | undefined;
export declare function inSpan(position: number, span?: Span, exclusive?: boolean): boolean;
export declare function offsetSpan(span: Span, amount: number): Span;
export declare function isNarrower(spanA: Span, spanB: Span): boolean;
export declare function isStructuralDirective(type: CompileTypeMetadata): boolean;
export declare function getSelectors(info: AstResult): SelectorInfo;
export declare function diagnosticInfoFromTemplateInfo(info: AstResult): DiagnosticTemplateInfo;
export declare function findTemplateAstAt(ast: TemplateAst[], position: number): TemplateAstPath;
/**
 * Find the tightest node at the specified `position` from the AST `nodes`, and
 * return the path to the node.
 * @param nodes HTML AST nodes
 * @param position
 */
export declare function getPathToNodeAtPosition(nodes: Node[], position: number): HtmlAstPath;
/**
 * Inverts an object's key-value pairs.
 */
export declare function invertMap(obj: {
    [name: string]: string;
}): {
    [name: string]: string;
};
/**
 * Finds the directive member providing a template output binding, if one exists.
 * @param info aggregate template AST information
 * @param path narrowing
 */
export declare function findOutputBinding(binding: BoundEventAst, path: TemplateAstPath, query: SymbolQuery): Symbol | undefined;
export {};
