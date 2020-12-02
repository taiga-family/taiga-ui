/// <amd-module name="@angular/compiler-cli/ngcc/src/logging/console_logger" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger, LogLevel } from './logger';
export declare const DEBUG: string;
export declare const WARN: string;
export declare const ERROR: string;
/**
 * A simple logger that outputs directly to the Console.
 *
 * The log messages can be filtered based on severity via the `logLevel`
 * constructor parameter.
 */
export declare class ConsoleLogger implements Logger {
    level: LogLevel;
    constructor(level: LogLevel);
    debug(...args: string[]): void;
    info(...args: string[]): void;
    warn(...args: string[]): void;
    error(...args: string[]): void;
}
