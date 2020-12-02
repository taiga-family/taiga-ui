/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin" />
import * as ts from 'typescript';
import { KnownFn, ResolvedValue, ResolvedValueArray } from './result';
export declare class ArraySliceBuiltinFn extends KnownFn {
    private lhs;
    constructor(lhs: ResolvedValueArray);
    evaluate(node: ts.CallExpression, args: ResolvedValueArray): ResolvedValue;
}
export declare class ArrayConcatBuiltinFn extends KnownFn {
    private lhs;
    constructor(lhs: ResolvedValueArray);
    evaluate(node: ts.CallExpression, args: ResolvedValueArray): ResolvedValue;
}
export declare class ObjectAssignBuiltinFn extends KnownFn {
    evaluate(node: ts.CallExpression, args: ResolvedValueArray): ResolvedValue;
}
