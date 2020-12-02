/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, virtualFs } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { CreateFileAction } from '../tree/action';
import { UpdateBuffer } from '../utility/update-buffer';
import { SimpleSinkBase } from './sink';
export declare class HostSink extends SimpleSinkBase {
    protected _host: virtualFs.Host;
    protected _force: boolean;
    protected _filesToDelete: Set<Path>;
    protected _filesToRename: Set<[Path, Path]>;
    protected _filesToCreate: Map<Path, UpdateBuffer>;
    protected _filesToUpdate: Map<Path, UpdateBuffer>;
    constructor(_host: virtualFs.Host, _force?: boolean);
    protected _validateCreateAction(action: CreateFileAction): Observable<void>;
    protected _validateFileExists(p: Path): Observable<boolean>;
    protected _overwriteFile(path: Path, content: Buffer): Observable<void>;
    protected _createFile(path: Path, content: Buffer): Observable<void>;
    protected _renameFile(from: Path, to: Path): Observable<void>;
    protected _deleteFile(path: Path): Observable<void>;
    _done(): Observable<void>;
}
