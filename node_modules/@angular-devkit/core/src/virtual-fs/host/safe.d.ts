/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, HostCapabilities, ReadonlyHost, Stats } from './interface';
/**
 * A Host that filters out errors. The only exception is `read()` which will still error out if
 * the delegate returned an error (e.g. NodeJS will error out if the file doesn't exist).
 */
export declare class SafeReadonlyHost<StatsT extends object = {}> implements ReadonlyHost<StatsT> {
    private _delegate;
    constructor(_delegate: ReadonlyHost<StatsT>);
    get capabilities(): HostCapabilities;
    read(path: Path): Observable<FileBuffer>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats<StatsT> | null> | null;
}
