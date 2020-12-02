/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/imports/src/references" />
import { Expression } from '@angular/compiler';
import * as ts from 'typescript';
export interface OwningModule {
    specifier: string;
    resolutionContext: string;
}
/**
 * A `ts.Node` plus the context in which it was discovered.
 *
 * A `Reference` is a pointer to a `ts.Node` that was extracted from the program somehow. It
 * contains not only the node itself, but the information regarding how the node was located. In
 * particular, it might track different identifiers by which the node is exposed, as well as
 * potentially a module specifier which might expose the node.
 *
 * The Angular compiler uses `Reference`s instead of `ts.Node`s when tracking classes or generating
 * imports.
 */
export declare class Reference<T extends ts.Node = ts.Node> {
    readonly node: T;
    /**
     * The compiler's best guess at an absolute module specifier which owns this `Reference`.
     *
     * This is usually determined by tracking the import statements which led the compiler to a given
     * node. If any of these imports are absolute, it's an indication that the node being imported
     * might come from that module.
     *
     * It is not _guaranteed_ that the node in question is exported from its `bestGuessOwningModule` -
     * that is mostly a convention that applies in certain package formats.
     *
     * If `bestGuessOwningModule` is `null`, then it's likely the node came from the current program.
     */
    readonly bestGuessOwningModule: OwningModule | null;
    private identifiers;
    /**
     * Indicates that the Reference was created synthetically, not as a result of natural value
     * resolution.
     *
     * This is used to avoid misinterpreting the Reference in certain contexts.
     */
    synthetic: boolean;
    private _alias;
    constructor(node: T, bestGuessOwningModule?: OwningModule | null);
    /**
     * The best guess at which module specifier owns this particular reference, or `null` if there
     * isn't one.
     */
    get ownedByModuleGuess(): string | null;
    /**
     * Whether this reference has a potential owning module or not.
     *
     * See `bestGuessOwningModule`.
     */
    get hasOwningModuleGuess(): boolean;
    /**
     * A name for the node, if one is available.
     *
     * This is only suited for debugging. Any actual references to this node should be made with
     * `ts.Identifier`s (see `getIdentityIn`).
     */
    get debugName(): string | null;
    get alias(): Expression | null;
    /**
     * Record a `ts.Identifier` by which it's valid to refer to this node, within the context of this
     * `Reference`.
     */
    addIdentifier(identifier: ts.Identifier): void;
    /**
     * Get a `ts.Identifier` within this `Reference` that can be used to refer within the context of a
     * given `ts.SourceFile`, if any.
     */
    getIdentityIn(context: ts.SourceFile): ts.Identifier | null;
    /**
     * Get a `ts.Identifier` for this `Reference` that exists within the given expression.
     *
     * This is very useful for producing `ts.Diagnostic`s that reference `Reference`s that were
     * extracted from some larger expression, as it can be used to pinpoint the `ts.Identifier` within
     * the expression from which the `Reference` originated.
     */
    getIdentityInExpression(expr: ts.Expression): ts.Identifier | null;
    /**
     * Given the 'container' expression from which this `Reference` was extracted, produce a
     * `ts.Expression` to use in a diagnostic which best indicates the position within the container
     * expression that generated the `Reference`.
     *
     * For example, given a `Reference` to the class 'Bar' and the containing expression:
     * `[Foo, Bar, Baz]`, this function would attempt to return the `ts.Identifier` for `Bar` within
     * the array. This could be used to produce a nice diagnostic context:
     *
     * ```text
     * [Foo, Bar, Baz]
     *       ~~~
     * ```
     *
     * If no specific node can be found, then the `fallback` expression is used, which defaults to the
     * entire containing expression.
     */
    getOriginForDiagnostics(container: ts.Expression, fallback?: ts.Expression): ts.Expression;
    cloneWithAlias(alias: Expression): Reference<T>;
    cloneWithNoIdentifiers(): Reference<T>;
}
