/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers" />
import * as ts from 'typescript';
import { ObjectAssignBuiltinFn } from './builtin';
import { KnownFn, ResolvedValueArray } from './result';
export declare class AssignHelperFn extends ObjectAssignBuiltinFn {
}
export declare class SpreadHelperFn extends KnownFn {
    evaluate(node: ts.Node, args: ResolvedValueArray): ResolvedValueArray;
}
