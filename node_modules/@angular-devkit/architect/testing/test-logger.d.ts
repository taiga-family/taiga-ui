/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
/**
 * @deprecated
 */
export declare class TestLogger extends logging.Logger {
    private _latestEntries;
    constructor(name: string, parent?: logging.Logger | null);
    clear(): void;
    includes(message: string): boolean;
    test(re: RegExp): boolean;
}
