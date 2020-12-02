/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { Path, PathFragment, virtualFs } from '../src';
/**
 * An implementation of the Virtual FS using Node as the background. There are two versions; one
 * synchronous and one asynchronous.
 */
export declare class NodeJsAsyncHost implements virtualFs.Host<fs.Stats> {
    get capabilities(): virtualFs.HostCapabilities;
    write(path: Path, content: virtualFs.FileBuffer): Observable<void>;
    read(path: Path): Observable<virtualFs.FileBuffer>;
    delete(path: Path): Observable<void>;
    rename(from: Path, to: Path): Observable<void>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<virtualFs.Stats<fs.Stats>> | null;
    watch(path: Path, _options?: virtualFs.HostWatchOptions): Observable<virtualFs.HostWatchEvent> | null;
}
/**
 * An implementation of the Virtual FS using Node as the backend, synchronously.
 */
export declare class NodeJsSyncHost implements virtualFs.Host<fs.Stats> {
    get capabilities(): virtualFs.HostCapabilities;
    write(path: Path, content: virtualFs.FileBuffer): Observable<void>;
    read(path: Path): Observable<virtualFs.FileBuffer>;
    delete(path: Path): Observable<void>;
    rename(from: Path, to: Path): Observable<void>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<virtualFs.Stats<fs.Stats>>;
    watch(path: Path, _options?: virtualFs.HostWatchOptions): Observable<virtualFs.HostWatchEvent> | null;
}
