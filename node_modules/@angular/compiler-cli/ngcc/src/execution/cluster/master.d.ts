/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/cluster/master" />
import { FileSystem } from '../../../../src/ngtsc/file_system';
import { Logger } from '../../logging/logger';
import { FileWriter } from '../../writing/file_writer';
import { PackageJsonUpdater } from '../../writing/package_json_updater';
import { AnalyzeEntryPointsFn } from '../api';
import { CreateTaskCompletedCallback } from '../tasks/api';
/**
 * The cluster master is responsible for analyzing all entry-points, planning the work that needs to
 * be done, distributing it to worker-processes and collecting/post-processing the results.
 */
export declare class ClusterMaster {
    private maxWorkerCount;
    private fileSystem;
    private logger;
    private fileWriter;
    private pkgJsonUpdater;
    private finishedDeferred;
    private processingStartTime;
    private taskAssignments;
    private taskQueue;
    private onTaskCompleted;
    private remainingRespawnAttempts;
    constructor(maxWorkerCount: number, fileSystem: FileSystem, logger: Logger, fileWriter: FileWriter, pkgJsonUpdater: PackageJsonUpdater, analyzeEntryPoints: AnalyzeEntryPointsFn, createTaskCompletedCallback: CreateTaskCompletedCallback);
    run(): Promise<void>;
    /** Try to find available (idle) workers and assign them available (non-blocked) tasks. */
    private maybeDistributeWork;
    /** Handle a worker's exiting. (Might be intentional or not.) */
    private onWorkerExit;
    /** Handle a message from a worker. */
    private onWorkerMessage;
    /** Handle a worker's coming online. */
    private onWorkerOnline;
    /** Handle a worker's having completed their assigned task. */
    private onWorkerTaskCompleted;
    /** Handle a worker's message regarding the files transformed while processing its task. */
    private onWorkerTransformedFiles;
    /** Handle a worker's request to update a `package.json` file. */
    private onWorkerUpdatePackageJson;
    /** Stop all workers and stop listening on cluster events. */
    private stopWorkers;
    /**
     * Wrap an event handler to ensure that `finishedDeferred` will be rejected on error (regardless
     * if the handler completes synchronously or asynchronously).
     */
    private wrapEventHandler;
}
