/// <amd-module name="@angular/compiler-cli/ngcc/src/locking/sync_locker" />
import { LockFile } from './lock_file';
/**
 * SyncLocker is used to prevent more than one instance of ngcc executing at the same time,
 * when being called in a synchronous context.
 *
 * * When ngcc starts executing, it creates a file in the `compiler-cli/ngcc` folder.
 * * If it finds one is already there then it fails with a suitable error message.
 * * When ngcc completes executing, it removes the file so that future ngcc executions can start.
 */
export declare class SyncLocker {
    private lockFile;
    constructor(lockFile: LockFile);
    /**
     * Run the given function guarded by the lock file.
     *
     * @param fn the function to run.
     * @returns the value returned from the `fn` call.
     */
    lock<T>(fn: () => T): T;
    /**
     * Write a lock file to disk, or error if there is already one there.
     */
    protected create(): void;
    /**
     * The lock-file already exists so raise a helpful error.
     */
    protected handleExistingLockFile(): void;
}
