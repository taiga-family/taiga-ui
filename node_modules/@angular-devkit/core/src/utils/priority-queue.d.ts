/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Naive priority queue; not intended for large datasets */
export declare class PriorityQueue<T> {
    private _comparator;
    private _items;
    constructor(_comparator: (x: T, y: T) => number);
    clear(): void;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    get size(): number;
    toArray(): Array<T>;
}
