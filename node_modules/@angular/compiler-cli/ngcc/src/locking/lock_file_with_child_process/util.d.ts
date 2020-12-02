/// <amd-module name="@angular/compiler-cli/ngcc/src/locking/lock_file_with_child_process/util" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../../src/ngtsc/file_system';
import { Logger } from '../../logging/logger';
/**
 * Remove the lock-file at the provided `lockFilePath` from the given file-system.
 *
 * It only removes the file if the pid stored in the file matches the provided `pid`.
 * The provided `pid` is of the process that is exiting and so no longer needs to hold the lock.
 */
export declare function removeLockFile(fs: FileSystem, logger: Logger, lockFilePath: AbsoluteFsPath, pid: string): void;
