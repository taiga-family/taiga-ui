/// <amd-module name="@angular/compiler-cli/ngcc/src/locking/lock_file" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
export declare function getLockFilePath(fs: FileSystem): import("@angular/compiler-cli/src/ngtsc/file_system/src/types").BrandedPath<"AbsoluteFsPath">;
export interface LockFile {
    path: AbsoluteFsPath;
    /**
     * Write a lock file to disk containing the PID of the current process.
     */
    write(): void;
    /**
     * Read the PID, of the process holding the lock, from the lock-file.
     *
     * It is feasible that the lock-file was removed between the call to `write()` that effectively
     * checks for existence and this attempt to read the file. If so then this method should just
     * gracefully return `"{unknown}"`.
     */
    read(): string;
    /**
     * Remove the lock file from disk, whether or not it exists.
     */
    remove(): void;
}
