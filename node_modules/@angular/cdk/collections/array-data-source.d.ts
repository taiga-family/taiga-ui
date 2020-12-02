/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { DataSource } from './data-source';
/** DataSource wrapper for a native array. */
export declare class ArrayDataSource<T> extends DataSource<T> {
    private _data;
    constructor(_data: T[] | ReadonlyArray<T> | Observable<T[] | ReadonlyArray<T>>);
    connect(): Observable<T[] | ReadonlyArray<T>>;
    disconnect(): void;
}
