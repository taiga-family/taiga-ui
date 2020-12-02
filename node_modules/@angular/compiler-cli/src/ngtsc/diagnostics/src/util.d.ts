/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/diagnostics/src/util" />
/**
 * During formatting of `ts.Diagnostic`s, the numeric code of each diagnostic is prefixed with the
 * hard-coded "TS" prefix. For Angular's own error codes, a prefix of "NG" is desirable. To achieve
 * this, all Angular error codes start with "-99" so that the sequence "TS-99" can be assumed to
 * correspond with an Angular specific error code. This function replaces those occurrences with
 * just "NG".
 *
 * @param errors The formatted diagnostics
 */
export declare function replaceTsWithNgInErrors(errors: string): string;
