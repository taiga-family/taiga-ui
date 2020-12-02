/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path } from '@angular-devkit/core';
export declare function workaroundResolve(path: Path | string): string;
export declare function flattenArray<T>(value: Array<T | T[]>): T[];
export declare function forwardSlashPath(path: string): string;
