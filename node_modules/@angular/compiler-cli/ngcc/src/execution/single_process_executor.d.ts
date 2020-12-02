/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/single_process_executor" />
import { AsyncLocker } from '../locking/async_locker';
import { SyncLocker } from '../locking/sync_locker';
import { Logger } from '../logging/logger';
import { AnalyzeEntryPointsFn, CreateCompileFn, Executor } from './api';
import { CreateTaskCompletedCallback } from './tasks/api';
export declare abstract class SingleProcessorExecutorBase {
    private logger;
    private createTaskCompletedCallback;
    constructor(logger: Logger, createTaskCompletedCallback: CreateTaskCompletedCallback);
    doExecute(analyzeEntryPoints: AnalyzeEntryPointsFn, createCompileFn: CreateCompileFn): void | Promise<void>;
}
/**
 * An `Executor` that processes all tasks serially and completes synchronously.
 */
export declare class SingleProcessExecutorSync extends SingleProcessorExecutorBase implements Executor {
    private lockFile;
    constructor(logger: Logger, lockFile: SyncLocker, createTaskCompletedCallback: CreateTaskCompletedCallback);
    execute(analyzeEntryPoints: AnalyzeEntryPointsFn, createCompileFn: CreateCompileFn): void;
}
/**
 * An `Executor` that processes all tasks serially, but still completes asynchronously.
 */
export declare class SingleProcessExecutorAsync extends SingleProcessorExecutorBase implements Executor {
    private lockFile;
    constructor(logger: Logger, lockFile: AsyncLocker, createTaskCompletedCallback: CreateTaskCompletedCallback);
    execute(analyzeEntryPoints: AnalyzeEntryPointsFn, createCompileFn: CreateCompileFn): Promise<void>;
}
