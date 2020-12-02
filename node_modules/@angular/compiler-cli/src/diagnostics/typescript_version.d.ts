/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/diagnostics/typescript_version" />
/**
 * Converts a `string` version into an array of numbers
 * @example
 * toNumbers('2.0.1'); // returns [2, 0, 1]
 */
export declare function toNumbers(value: string): number[];
/**
 * Compares two arrays of positive numbers with lexicographical order in mind.
 *
 * However - unlike lexicographical order - for arrays of different length we consider:
 * [1, 2, 3] = [1, 2, 3, 0] instead of [1, 2, 3] < [1, 2, 3, 0]
 *
 * @param a The 'left hand' array in the comparison test
 * @param b The 'right hand' in the comparison test
 * @returns {-1|0|1} The comparison result: 1 if a is greater, -1 if b is greater, 0 is the two
 * arrays are equals
 */
export declare function compareNumbers(a: number[], b: number[]): -1 | 0 | 1;
/**
 * Checks if a TypeScript version is:
 * - greater or equal than the provided `low` version,
 * - lower or equal than an optional `high` version.
 *
 * @param version The TypeScript version
 * @param low The minimum version
 * @param high The maximum version
 */
export declare function isVersionBetween(version: string, low: string, high?: string): boolean;
/**
 * Compares two versions
 *
 * @param v1 The 'left hand' version in the comparison test
 * @param v2 The 'right hand' version in the comparison test
 * @returns {-1|0|1} The comparison result: 1 if v1 is greater, -1 if v2 is greater, 0 is the two
 * versions are equals
 */
export declare function compareVersions(v1: string, v2: string): -1 | 0 | 1;
