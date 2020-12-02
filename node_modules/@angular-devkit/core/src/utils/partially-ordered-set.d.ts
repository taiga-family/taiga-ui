/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '../exception';
export declare class DependencyNotFoundException extends BaseException {
    constructor();
}
export declare class CircularDependencyFoundException extends BaseException {
    constructor();
}
export declare class PartiallyOrderedSet<T> implements Set<T> {
    private _items;
    protected _checkCircularDependencies(item: T, deps: Set<T>): void;
    clear(): void;
    has(item: T): boolean;
    get size(): number;
    forEach(callbackfn: (value: T, value2: T, set: PartiallyOrderedSet<T>) => void, thisArg?: any): void;
    /**
     * Returns an iterable of [v,v] pairs for every value `v` in the set.
     */
    entries(): IterableIterator<[T, T]>;
    /**
     * Despite its name, returns an iterable of the values in the set,
     */
    keys(): IterableIterator<T>;
    /**
     * Returns an iterable of values in the set.
     */
    values(): IterableIterator<T>;
    add(item: T, deps?: (Set<T> | T[])): this;
    delete(item: T): boolean;
    [Symbol.iterator](): Generator<T, void, unknown>;
    get [Symbol.toStringTag](): 'Set';
}
