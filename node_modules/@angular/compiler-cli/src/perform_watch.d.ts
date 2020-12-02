/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/perform_watch" />
import * as ts from 'typescript';
import { Diagnostics, ParsedConfiguration } from './perform_compile';
import * as api from './transformers/api';
export declare enum FileChangeEvent {
    Change = 0,
    CreateDelete = 1,
    CreateDeleteDir = 2
}
export interface PerformWatchHost {
    reportDiagnostics(diagnostics: Diagnostics): void;
    readConfiguration(): ParsedConfiguration;
    createCompilerHost(options: api.CompilerOptions): api.CompilerHost;
    createEmitCallback(options: api.CompilerOptions): api.TsEmitCallback | undefined;
    onFileChange(options: api.CompilerOptions, listener: (event: FileChangeEvent, fileName: string) => void, ready: () => void): {
        close: () => void;
    };
    setTimeout(callback: () => void, ms: number): any;
    clearTimeout(timeoutId: any): void;
}
export declare function createPerformWatchHost(configFileName: string, reportDiagnostics: (diagnostics: Diagnostics) => void, existingOptions?: ts.CompilerOptions, createEmitCallback?: (options: api.CompilerOptions) => api.TsEmitCallback | undefined): PerformWatchHost;
/**
 * The logic in this function is adapted from `tsc.ts` from TypeScript.
 */
export declare function performWatchCompilation(host: PerformWatchHost): {
    close: () => void;
    ready: (cb: () => void) => void;
    firstCompileResult: Diagnostics;
};
