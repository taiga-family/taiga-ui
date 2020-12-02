/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, PathFragment, virtualFs } from '@angular-devkit/core';
import { Stats } from 'fs';
import { Observable } from 'rxjs';
import { InputFileSystem } from 'webpack';
export declare class WebpackInputHost implements virtualFs.Host<Stats> {
    readonly inputFileSystem: InputFileSystem;
    constructor(inputFileSystem: InputFileSystem);
    get capabilities(): virtualFs.HostCapabilities;
    write(_path: Path, _content: virtualFs.FileBufferLike): Observable<never>;
    delete(_path: Path): Observable<never>;
    rename(_from: Path, _to: Path): Observable<never>;
    read(path: Path): Observable<virtualFs.FileBuffer>;
    list(path: Path): Observable<PathFragment[]>;
    exists(path: Path): Observable<boolean>;
    isDirectory(path: Path): Observable<boolean>;
    isFile(path: Path): Observable<boolean>;
    stat(path: Path): Observable<Stats | null>;
    watch(_path: Path, _options?: virtualFs.HostWatchOptions): null;
}
