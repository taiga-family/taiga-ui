/// <amd-module name="@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/index" />
/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChildProcess } from 'child_process';
import { AbsoluteFsPath, FileSystem } from '../../../../src/ngtsc/file_system';
import { Logger } from '../../logging/logger';
import { LockFile } from '../lock_file';
/**
 * This `LockFile` implementation uses a child-process to remove the lock file when the main process
 * exits (for whatever reason).
 *
 * There are a few milliseconds between the child-process being forked and it registering its
 * `disconnect` event, which is responsible for tidying up the lock-file in the event that the main
 * process exits unexpectedly.
 *
 * We eagerly create the unlocker child-process so that it maximizes the time before the lock-file
 * is actually written, which makes it very unlikely that the unlocker would not be ready in the
 * case that the developer hits Ctrl-C or closes the terminal within a fraction of a second of the
 * lock-file being created.
 *
 * The worst case scenario is that ngcc is killed too quickly and leaves behind an orphaned
 * lock-file. In which case the next ngcc run will display a helpful error message about deleting
 * the lock-file.
 */
export declare class LockFileWithChildProcess implements LockFile {
    protected fs: FileSystem;
    protected logger: Logger;
    path: AbsoluteFsPath;
    private unlocker;
    constructor(fs: FileSystem, logger: Logger);
    write(): void;
    read(): string;
    remove(): void;
    protected createUnlocker(path: AbsoluteFsPath): ChildProcess;
}
