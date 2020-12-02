/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/partial_evaluator/src/known_declaration" />
import { KnownDeclaration } from '../../reflection/src/host';
import { ObjectAssignBuiltinFn } from './builtin';
import { ResolvedValue } from './result';
/** Resolved value for the JavaScript global `Object` declaration. */
export declare const jsGlobalObjectValue: Map<string, ObjectAssignBuiltinFn>;
/**
 * Resolves the specified known declaration to a resolved value. For example,
 * the known JavaScript global `Object` will resolve to a `Map` that provides the
 * `assign` method with a built-in function. This enables evaluation of `Object.assign`.
 */
export declare function resolveKnownDeclaration(decl: KnownDeclaration): ResolvedValue;
