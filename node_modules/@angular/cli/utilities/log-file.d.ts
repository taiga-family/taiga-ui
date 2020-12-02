/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Writes an Error to a temporary log file.
 * If this method is called multiple times from the same process the same log file will be used.
 * @returns The path of the generated log file.
 */
export declare function writeErrorToLogFile(error: Error): string;
