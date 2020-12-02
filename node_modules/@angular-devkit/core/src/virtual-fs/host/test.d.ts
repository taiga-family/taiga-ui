/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Path, PathFragment } from '../path';
import { FileBuffer, HostWatchEvent, HostWatchOptions, Stats } from './interface';
import { SimpleMemoryHost, SimpleMemoryHostStats } from './memory';
import { SyncDelegateHost } from './sync';
export declare namespace test {
    type TestLogRecord = {
        kind: 'write' | 'read' | 'delete' | 'list' | 'exists' | 'isDirectory' | 'isFile' | 'stat' | 'watch';
        path: Path;
    } | {
        kind: 'rename';
        from: Path;
        to: Path;
    };
    class TestHost extends SimpleMemoryHost {
        protected _records: TestLogRecord[];
        protected _sync: SyncDelegateHost<{}>;
        constructor(map?: {
            [path: string]: string;
        });
        get records(): TestLogRecord[];
        clearRecords(): void;
        get files(): Path[];
        get sync(): SyncDelegateHost<{}>;
        clone(): TestHost;
        protected _write(path: Path, content: FileBuffer): void;
        protected _read(path: Path): ArrayBuffer;
        protected _delete(path: Path): void;
        protected _rename(from: Path, to: Path): void;
        protected _list(path: Path): PathFragment[];
        protected _exists(path: Path): boolean;
        protected _isDirectory(path: Path): boolean;
        protected _isFile(path: Path): boolean;
        protected _stat(path: Path): Stats<SimpleMemoryHostStats> | null;
        protected _watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent>;
        $write(path: string, content: string): void;
        $read(path: string): string;
        $list(path: string): PathFragment[];
        $exists(path: string): boolean;
        $isDirectory(path: string): boolean;
        $isFile(path: string): boolean;
    }
}
