/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, Host, HostCapabilities, HostWatchEvent, HostWatchEventType, HostWatchOptions, Stats } from './interface';
export interface SimpleMemoryHostStats {
    readonly content: FileBuffer | null;
}
export declare class SimpleMemoryHost implements Host<{}> {
    protected _cache: Map<Path, Stats<SimpleMemoryHostStats>>;
    private _watchers;
    protected _newDirStats(): {
        inspect(): string;
        isFile(): boolean;
        isDirectory(): boolean;
        size: number;
        atime: Date;
        ctime: Date;
        mtime: Date;
        birthtime: Date;
        content: null;
    };
    protected _newFileStats(content: FileBuffer, oldStats?: Stats<SimpleMemoryHostStats>): {
        inspect(): string;
        isFile(): boolean;
        isDirectory(): boolean;
        size: number;
        atime: Date;
        ctime: Date;
        mtime: Date;
        birthtime: Date;
        content: ArrayBuffer;
    };
    constructor();
    protected _toAbsolute(path: Path): Path;
    protected _updateWatchers(path: Path, type: HostWatchEventType): void;
    get capabilities(): HostCapabilities;
    /**
     * List of protected methods that give direct access outside the observables to the cache
     * and internal states.
     */
    protected _write(path: Path, content: FileBuffer): void;
    protected _read(path: Path): FileBuffer;
    protected _delete(path: Path): void;
    protected _rename(from: Path, to: Path): void;
    protected _list(path: Path): PathFragment[];
    protected _exists(path: Path): boolean;
    protected _isDirectory(path: Path): boolean;
    protected _isFile(path: Path): boolean;
    protected _stat(path: Path): Stats<SimpleMemoryHostStats> | null;
    protected _watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent>;
    write(path: Path, content: FileBuffer): Observable<void>;
    read(path: Path): Observable<FileBuffer>;
    delete(path: Path): Observable<void>;
    rename(from: Path, to: Path): Observable<void>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats<{}> | null> | null;
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
    reset(): void;
}
