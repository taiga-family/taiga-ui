/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare function mapObject<T, V>(obj: {
    [k: string]: T;
}, mapper: (k: string, v: T) => V): {
    [k: string]: V;
};
export declare function deepCopy<T extends any>(value: T): T;
