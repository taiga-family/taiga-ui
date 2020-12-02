/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, Host, HostCapabilities, HostWatchEvent, HostWatchOptions, Stats } from './interface';
/**
 * A Host that runs a method before calling its delegate. This is an abstract class and its actual
 * behaviour is entirely dependant of the subclass.
 */
export declare abstract class ResolverHost<T extends object> implements Host<T> {
    protected _delegate: Host<T>;
    protected abstract _resolve(path: Path): Path;
    constructor(_delegate: Host<T>);
    get capabilities(): HostCapabilities;
    write(path: Path, content: FileBuffer): Observable<void>;
    read(path: Path): Observable<FileBuffer>;
    delete(path: Path): Observable<void>;
    rename(from: Path, to: Path): Observable<void>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats<T> | null> | null;
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
}
