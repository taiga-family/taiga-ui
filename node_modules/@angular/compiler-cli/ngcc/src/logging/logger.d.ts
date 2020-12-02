/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/logging/logger" />
/**
 * Implement this interface if you want to provide different logging
 * output from the standard ConsoleLogger.
 */
export interface Logger {
    level: LogLevel;
    debug(...args: string[]): void;
    info(...args: string[]): void;
    warn(...args: string[]): void;
    error(...args: string[]): void;
}
export declare enum LogLevel {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3
}
