/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/metadata/evaluator" />
import * as ts from 'typescript';
import { CollectorOptions } from './collector';
import { MetadataEntry, MetadataError, MetadataValue } from './schema';
import { Symbols } from './symbols';
export declare function isPrimitive(value: any): boolean;
export interface ImportSpecifierMetadata {
    name: string;
    propertyName?: string;
}
export interface ImportMetadata {
    defaultName?: string;
    namespace?: string;
    namedImports?: ImportSpecifierMetadata[];
    from: string;
}
/**
 * Produce a symbolic representation of an expression folding values into their final value when
 * possible.
 */
export declare class Evaluator {
    private symbols;
    private nodeMap;
    private options;
    private recordExport?;
    constructor(symbols: Symbols, nodeMap: Map<MetadataEntry, ts.Node>, options?: CollectorOptions, recordExport?: ((name: string, value: MetadataValue) => void) | undefined);
    nameOf(node: ts.Node | undefined): string | MetadataError;
    /**
     * Returns true if the expression represented by `node` can be folded into a literal expression.
     *
     * For example, a literal is always foldable. This means that literal expressions such as `1.2`
     * `"Some value"` `true` `false` are foldable.
     *
     * - An object literal is foldable if all the properties in the literal are foldable.
     * - An array literal is foldable if all the elements are foldable.
     * - A call is foldable if it is a call to a Array.prototype.concat or a call to CONST_EXPR.
     * - A property access is foldable if the object is foldable.
     * - A array index is foldable if index expression is foldable and the array is foldable.
     * - Binary operator expressions are foldable if the left and right expressions are foldable and
     *   it is one of '+', '-', '*', '/', '%', '||', and '&&'.
     * - An identifier is foldable if a value can be found for its symbol in the evaluator symbol
     *   table.
     */
    isFoldable(node: ts.Node): boolean;
    private isFoldableWorker;
    /**
     * Produce a JSON serialiable object representing `node`. The foldable values in the expression
     * tree are folded. For example, a node representing `1 + 2` is folded into `3`.
     */
    evaluateNode(node: ts.Node, preferReference?: boolean): MetadataValue;
}
