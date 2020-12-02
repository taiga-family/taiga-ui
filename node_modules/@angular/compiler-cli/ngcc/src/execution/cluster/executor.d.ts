/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/cluster/executor" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FileSystem } from '../../../../src/ngtsc/file_system';
import { AsyncLocker } from '../../locking/async_locker';
import { Logger } from '../../logging/logger';
import { FileWriter } from '../../writing/file_writer';
import { PackageJsonUpdater } from '../../writing/package_json_updater';
import { AnalyzeEntryPointsFn, CreateCompileFn, Executor } from '../api';
import { CreateTaskCompletedCallback } from '../tasks/api';
/**
 * An `Executor` that processes tasks in parallel (on multiple processes) and completes
 * asynchronously.
 */
export declare class ClusterExecutor implements Executor {
    private workerCount;
    private fileSystem;
    private logger;
    private fileWriter;
    private pkgJsonUpdater;
    private lockFile;
    private createTaskCompletedCallback;
    constructor(workerCount: number, fileSystem: FileSystem, logger: Logger, fileWriter: FileWriter, pkgJsonUpdater: PackageJsonUpdater, lockFile: AsyncLocker, createTaskCompletedCallback: CreateTaskCompletedCallback);
    execute(analyzeEntryPoints: AnalyzeEntryPointsFn, _createCompileFn: CreateCompileFn): Promise<void>;
}
