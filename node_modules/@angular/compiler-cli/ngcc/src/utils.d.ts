/// <amd-module name="@angular/compiler-cli/ngcc/src/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath, FileSystem } from '../../src/ngtsc/file_system';
import { KnownDeclaration } from '../../src/ngtsc/reflection';
/**
 * A list (`Array`) of partially ordered `T` items.
 *
 * The items in the list are partially ordered in the sense that any element has either the same or
 * higher precedence than any element which appears later in the list. What "higher precedence"
 * means and how it is determined is implementation-dependent.
 *
 * See [PartiallyOrderedSet](https://en.wikipedia.org/wiki/Partially_ordered_set) for more details.
 * (Refraining from using the term "set" here, to avoid confusion with JavaScript's
 * [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set).)
 *
 * NOTE: A plain `Array<T>` is not assignable to a `PartiallyOrderedList<T>`, but a
 *       `PartiallyOrderedList<T>` is assignable to an `Array<T>`.
 */
export interface PartiallyOrderedList<T> extends Array<T> {
    _partiallyOrdered: true;
    map<U>(callbackfn: (value: T, index: number, array: PartiallyOrderedList<T>) => U, thisArg?: any): PartiallyOrderedList<U>;
    slice(...args: Parameters<Array<T>['slice']>): PartiallyOrderedList<T>;
}
export declare function getOriginalSymbol(checker: ts.TypeChecker): (symbol: ts.Symbol) => ts.Symbol;
export declare function isDefined<T>(value: T | undefined | null): value is T;
export declare function getNameText(name: ts.PropertyName | ts.BindingName): string;
/**
 * Parse down the AST and capture all the nodes that satisfy the test.
 * @param node The start node.
 * @param test The function that tests whether a node should be included.
 * @returns a collection of nodes that satisfy the test.
 */
export declare function findAll<T>(node: ts.Node, test: (node: ts.Node) => node is ts.Node & T): T[];
/**
 * Does the given declaration have a name which is an identifier?
 * @param declaration The declaration to test.
 * @returns true if the declaration has an identifier for a name.
 */
export declare function hasNameIdentifier(declaration: ts.Declaration): declaration is ts.Declaration & {
    name: ts.Identifier;
};
/**
 * Test whether a path is "relative".
 *
 * Relative paths start with `/`, `./` or `../` (or the Windows equivalents); or are simply `.` or
 * `..`.
 */
export declare function isRelativePath(path: string): boolean;
/**
 * A `Map`-like object that can compute and memoize a missing value for any key.
 *
 * The computed values are memoized, so the factory function is not called more than once per key.
 * This is useful for storing values that are expensive to compute and may be used multiple times.
 */
export declare class FactoryMap<K, V> {
    private factory;
    private internalMap;
    constructor(factory: (key: K) => V, entries?: readonly (readonly [K, V])[] | null);
    get(key: K): V;
    set(key: K, value: V): void;
}
/**
 * Attempt to resolve a `path` to a file by appending the provided `postFixes`
 * to the `path` and checking if the file exists on disk.
 * @returns An absolute path to the first matching existing file, or `null` if none exist.
 */
export declare function resolveFileWithPostfixes(fs: FileSystem, path: AbsoluteFsPath, postFixes: string[]): AbsoluteFsPath | null;
/**
 * Determine whether a function declaration corresponds with a TypeScript helper function, returning
 * its kind if so or null if the declaration does not seem to correspond with such a helper.
 */
export declare function getTsHelperFnFromDeclaration(decl: ts.Declaration): KnownDeclaration | null;
/**
 * Determine whether an identifier corresponds with a TypeScript helper function (based on its
 * name), returning its kind if so or null if the identifier does not seem to correspond with such a
 * helper.
 */
export declare function getTsHelperFnFromIdentifier(id: ts.Identifier): KnownDeclaration | null;
/**
 * An identifier may become repeated when bundling multiple source files into a single bundle, so
 * bundlers have a strategy of suffixing non-unique identifiers with a suffix like $2. This function
 * strips off such suffixes, so that ngcc deals with the canonical name of an identifier.
 * @param value The value to strip any suffix of, if applicable.
 * @returns The canonical representation of the value, without any suffix.
 */
export declare function stripDollarSuffix(value: string): string;
export declare function stripExtension(fileName: string): string;
