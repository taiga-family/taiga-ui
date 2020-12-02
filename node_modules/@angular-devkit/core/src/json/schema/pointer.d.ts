/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonPointer } from './interface';
export declare function buildJsonPointer(fragments: string[]): JsonPointer;
export declare function joinJsonPointer(root: JsonPointer, ...others: string[]): JsonPointer;
export declare function parseJsonPointer(pointer: JsonPointer): string[];
