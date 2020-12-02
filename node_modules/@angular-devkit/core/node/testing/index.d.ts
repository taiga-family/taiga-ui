/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as fs from 'fs';
import { Path, virtualFs } from '../../src';
/**
 * A Sync Scoped Host that creates a temporary directory and scope to it.
 */
export declare class TempScopedNodeJsSyncHost extends virtualFs.ScopedHost<fs.Stats> {
    protected _sync: virtualFs.SyncDelegateHost<fs.Stats>;
    protected _root: Path;
    constructor();
    get files(): Path[];
    get root(): Path;
    get sync(): virtualFs.SyncDelegateHost<fs.Stats>;
}
