/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="node" />
import { Path, PathFragment, virtualFs } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { Stats } from 'fs';
import { Observable } from 'rxjs';
/**
 * @deprecated
 */
export declare class TestProjectHost extends NodeJsSyncHost {
    protected _templateRoot: Path;
    private _currentRoot;
    private _scopedSyncHost;
    constructor(_templateRoot: Path);
    root(): Path;
    scopedSync(): virtualFs.SyncDelegateHost<Stats>;
    initialize(): Observable<void>;
    restore(): Observable<void>;
    writeMultipleFiles(files: {
        [path: string]: string | ArrayBufferLike | Buffer;
    }): void;
    replaceInFile(path: string, match: RegExp | string, replacement: string): void;
    appendToFile(path: string, str: string): void;
    fileMatchExists(dir: string, regex: RegExp): PathFragment | undefined;
    copyFile(from: string, to: string): void;
    private findUniqueFolderPath;
}
