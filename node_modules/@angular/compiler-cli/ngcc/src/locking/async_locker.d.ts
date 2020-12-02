/// <amd-module name="@angular/compiler-cli/ngcc/src/locking/async_locker" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger } from '../logging/logger';
import { LockFile } from './lock_file';
/**
 * AsyncLocker is used to prevent more than one instance of ngcc executing at the same time,
 * when being called in an asynchronous context.
 *
 * * When ngcc starts executing, it creates a file in the `compiler-cli/ngcc` folder.
 * * If it finds one is already there then it pauses and waits for the file to be removed by the
 *   other process. If the file is not removed within a set timeout period given by
 *   `retryDelay*retryAttempts` an error is thrown with a suitable error message.
 * * If the process locking the file changes, then we restart the timeout.
 * * When ngcc completes executing, it removes the file so that future ngcc executions can start.
 */
export declare class AsyncLocker {
    private lockFile;
    protected logger: Logger;
    private retryDelay;
    private retryAttempts;
    constructor(lockFile: LockFile, logger: Logger, retryDelay: number, retryAttempts: number);
    /**
     * Run a function guarded by the lock file.
     *
     * @param fn The function to run.
     */
    lock<T>(fn: () => Promise<T>): Promise<T>;
    protected create(): Promise<void>;
}
