/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { BaseException } from '../../exception';
import { Path, PathFragment } from '../path';
import { FileBuffer, FileBufferLike, Host, HostCapabilities, HostWatchEvent, HostWatchOptions, Stats } from './interface';
export declare class SynchronousDelegateExpectedException extends BaseException {
    constructor();
}
/**
 * Implement a synchronous-only host interface (remove the Observable parts).
 */
export declare class SyncDelegateHost<T extends object = {}> {
    protected _delegate: Host<T>;
    constructor(_delegate: Host<T>);
    protected _doSyncCall<ResultT>(observable: Observable<ResultT>): ResultT;
    get capabilities(): HostCapabilities;
    get delegate(): Host<T>;
    write(path: Path, content: FileBufferLike): void;
    read(path: Path): FileBuffer;
    delete(path: Path): void;
    rename(from: Path, to: Path): void;
    list(path: Path): PathFragment[];
    exists(path: Path): boolean;
    isDirectory(path: Path): boolean;
    isFile(path: Path): boolean;
    stat(path: Path): Stats<T> | null;
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
}
