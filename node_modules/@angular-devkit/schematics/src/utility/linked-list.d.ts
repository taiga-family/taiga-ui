/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare class LinkedList<T extends {
    next: T | null;
}> {
    private _head;
    constructor(_head: T);
    get(l: number): T | null;
    get head(): T;
    get length(): number;
    reduce<R>(accumulator: (acc: R, value: T, index?: number) => R, seed: R): R;
    find(predicate: (value: T, index?: number) => boolean): T | null;
    forEach(visitor: (value: T, index?: number) => void): void;
}
