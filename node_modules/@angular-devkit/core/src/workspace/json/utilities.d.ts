/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonAstArray, JsonAstKeyValue, JsonAstObject, JsonObject, JsonValue } from '../../json';
export declare type ChangeListener = (op: 'add' | 'remove' | 'replace', path: string, node: JsonAstArray | JsonAstObject | JsonAstKeyValue, value?: JsonValue) => void;
export declare function escapeKey(key: string | number): string | number;
export declare function unescapeKey(key: string | number): string | number;
export declare function createVirtualAstObject<T extends object = JsonObject>(root: JsonAstObject, options?: {
    exclude?: string[];
    include?: string[];
    listener?: ChangeListener;
    base?: object;
}): T;
