/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/core/api/src/options" />
import * as ts from 'typescript';
import { BazelAndG3Options, I18nOptions, LegacyNgcOptions, MiscOptions, NgcCompatibilityOptions, StrictTemplateOptions } from './public_options';
/**
 * Non-public options which are useful during testing of the compiler.
 */
export interface TestOnlyOptions {
    /**
     * An option to enable ngtsc's internal performance tracing.
     *
     * This should be a path to a JSON file where trace information will be written. An optional 'ts:'
     * prefix will cause the trace to be written via the TS host instead of directly to the filesystem
     * (not all hosts support this mode of operation).
     *
     * This is currently not exposed to users as the trace format is still unstable.
     */
    tracePerformance?: string;
}
/**
 * A merged interface of all of the various Angular compiler options, as well as the standard
 * `ts.CompilerOptions`.
 *
 * Also includes a few miscellaneous options.
 */
export interface NgCompilerOptions extends ts.CompilerOptions, LegacyNgcOptions, BazelAndG3Options, NgcCompatibilityOptions, StrictTemplateOptions, TestOnlyOptions, I18nOptions, MiscOptions {
}
