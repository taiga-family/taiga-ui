/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Position } from 'source-map';
export interface TemplateOptions {
    sourceURL?: string;
    sourceMap?: boolean;
    module?: boolean | {
        exports: {};
    };
    sourceRoot?: string;
    fileName?: string;
}
/**
 * A simple AST for templates. There's only one level of AST nodes, but it's still useful
 * to have the information you're looking for.
 */
export interface TemplateAst {
    fileName: string;
    content: string;
    children: TemplateAstNode[];
}
/**
 * The base, which contains positions.
 */
export interface TemplateAstBase {
    start: Position;
    end: Position;
}
/**
 * A static content node.
 */
export interface TemplateAstContent extends TemplateAstBase {
    kind: 'content';
    content: string;
}
/**
 * A comment node.
 */
export interface TemplateAstComment extends TemplateAstBase {
    kind: 'comment';
    text: string;
}
/**
 * An evaluate node, which is the code between `<% ... %>`.
 */
export interface TemplateAstEvaluate extends TemplateAstBase {
    kind: 'evaluate';
    expression: string;
}
/**
 * An escape node, which is the code between `<%- ... %>`.
 */
export interface TemplateAstEscape extends TemplateAstBase {
    kind: 'escape';
    expression: string;
}
/**
 * An interpolation node, which is the code between `<%= ... %>`.
 */
export interface TemplateAstInterpolate extends TemplateAstBase {
    kind: 'interpolate';
    expression: string;
}
export declare type TemplateAstNode = TemplateAstContent | TemplateAstEvaluate | TemplateAstComment | TemplateAstEscape | TemplateAstInterpolate;
/**
 * Given a source text (and a fileName), returns a TemplateAst.
 */
export declare function templateParser(sourceText: string, fileName: string): TemplateAst;
/**
 * An equivalent of EJS templates, which is based on John Resig's `tmpl` implementation
 * (http://ejohn.org/blog/javascript-micro-templating/) and Laura Doktorova's doT.js
 * (https://github.com/olado/doT).
 *
 * This version differs from lodash by removing support from ES6 quasi-literals, and making the
 * code slightly simpler to follow. It also does not depend on any third party, which is nice.
 *
 * Finally, it supports SourceMap, if you ever need to debug, which is super nice.
 *
 * @param content The template content.
 * @param options Optional Options. See TemplateOptions for more description.
 * @return {(input: T) => string} A function that accept an input object and returns the content
 *         of the template with the input applied.
 */
export declare function template<T>(content: string, options?: TemplateOptions): (input: T) => string;
