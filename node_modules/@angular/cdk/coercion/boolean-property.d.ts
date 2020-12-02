/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type describing the allowed values for a boolean input.
 * @docs-private
 */
export declare type BooleanInput = string | boolean | null | undefined;
/** Coerces a data-bound value (typically a string) to a boolean. */
export declare function coerceBooleanProperty(value: any): boolean;
