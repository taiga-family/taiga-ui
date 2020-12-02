#!/usr/bin/env node
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/main" />
import 'reflect-metadata';
import * as ts from 'typescript';
import * as api from './transformers/api';
import { Diagnostics, ParsedConfiguration } from './perform_compile';
export declare function main(args: string[], consoleError?: (s: string) => void, config?: NgcParsedConfiguration, customTransformers?: api.CustomTransformers, programReuse?: {
    program: api.Program | undefined;
}, modifiedResourceFiles?: Set<string> | null): number;
export declare function mainDiagnosticsForTest(args: string[], config?: NgcParsedConfiguration, programReuse?: {
    program: api.Program | undefined;
}, modifiedResourceFiles?: Set<string> | null): ReadonlyArray<ts.Diagnostic | api.Diagnostic>;
export interface NgcParsedConfiguration extends ParsedConfiguration {
    watch?: boolean;
}
export declare function readNgcCommandLineAndConfiguration(args: string[]): NgcParsedConfiguration;
export declare function readCommandLineAndConfiguration(args: string[], existingOptions?: api.CompilerOptions, ngCmdLineOptions?: string[]): ParsedConfiguration;
export declare function watchMode(project: string, options: api.CompilerOptions, consoleError: (s: string) => void): {
    close: () => void;
    ready: (cb: () => void) => void;
    firstCompileResult: Diagnostics;
};
