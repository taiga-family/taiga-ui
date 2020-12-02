/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic" />
import * as ts from 'typescript';
import { Reference } from '../../imports';
/**
 * The reason why a value cannot be determined statically.
 */
export declare const enum DynamicValueReason {
    /**
     * A value could not be determined statically, because it contains a term that could not be
     * determined statically.
     * (E.g. a property assignment or call expression where the lhs is a `DynamicValue`, a template
     * literal with a dynamic expression, an object literal with a spread assignment which could not
     * be determined statically, etc.)
     */
    DYNAMIC_INPUT = 0,
    /**
     * A string could not be statically evaluated.
     * (E.g. a dynamically constructed object property name or a template literal expression that
     * could not be statically resolved to a primitive value.)
     */
    DYNAMIC_STRING = 1,
    /**
     * An external reference could not be resolved to a value which can be evaluated.
     * For example a call expression for a function declared in `.d.ts`, or accessing native globals
     * such as `window`.
     */
    EXTERNAL_REFERENCE = 2,
    /**
     * Syntax that `StaticInterpreter` doesn't know how to evaluate, for example a type of
     * `ts.Expression` that is not supported.
     */
    UNSUPPORTED_SYNTAX = 3,
    /**
     * A declaration of a `ts.Identifier` could not be found.
     */
    UNKNOWN_IDENTIFIER = 4,
    /**
     * A value could be resolved, but is not an acceptable type for the operation being performed.
     *
     * For example, attempting to call a non-callable expression.
     */
    INVALID_EXPRESSION_TYPE = 5,
    /**
     * A value could not be determined statically for any reason other the above.
     */
    UNKNOWN = 6
}
/**
 * Represents a value which cannot be determined statically.
 */
export declare class DynamicValue<R = unknown> {
    readonly node: ts.Node;
    readonly reason: R;
    private code;
    private constructor();
    static fromDynamicInput(node: ts.Node, input: DynamicValue): DynamicValue<DynamicValue>;
    static fromDynamicString(node: ts.Node): DynamicValue;
    static fromExternalReference(node: ts.Node, ref: Reference<ts.Declaration>): DynamicValue<Reference<ts.Declaration>>;
    static fromUnsupportedSyntax(node: ts.Node): DynamicValue;
    static fromUnknownIdentifier(node: ts.Identifier): DynamicValue;
    static fromInvalidExpressionType(node: ts.Node, value: unknown): DynamicValue<unknown>;
    static fromUnknown(node: ts.Node): DynamicValue;
    isFromDynamicInput(this: DynamicValue<R>): this is DynamicValue<DynamicValue>;
    isFromDynamicString(this: DynamicValue<R>): this is DynamicValue;
    isFromExternalReference(this: DynamicValue<R>): this is DynamicValue<Reference<ts.Declaration>>;
    isFromUnsupportedSyntax(this: DynamicValue<R>): this is DynamicValue;
    isFromUnknownIdentifier(this: DynamicValue<R>): this is DynamicValue;
    isFromInvalidExpressionType(this: DynamicValue<R>): this is DynamicValue<unknown>;
    isFromUnknown(this: DynamicValue<R>): this is DynamicValue;
}
