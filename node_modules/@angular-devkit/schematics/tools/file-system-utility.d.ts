/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonValue } from '@angular-devkit/core';
/**
 * Read a file and returns its content. This supports different file encoding.
 */
export declare function readFile(fileName: string): string;
export declare function readJsonFile(path: string): JsonValue;
