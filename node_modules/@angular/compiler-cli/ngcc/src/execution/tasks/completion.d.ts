/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/tasks/completion" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FileSystem } from '../../../../src/ngtsc/file_system';
import { Logger } from '../../logging/logger';
import { PackageJsonUpdater } from '../../writing/package_json_updater';
import { Task, TaskCompletedCallback, TaskProcessingOutcome, TaskQueue } from './api';
/**
 * A function that can handle a specific outcome of a task completion.
 *
 * These functions can be composed using the `composeTaskCompletedCallbacks()`
 * to create a `TaskCompletedCallback` function that can be passed to an `Executor`.
 */
export declare type TaskCompletedHandler = (task: Task, message: string | null) => void;
/**
 * Compose a group of TaskCompletedHandlers into a single TaskCompletedCallback.
 *
 * The compose callback will receive an outcome and will delegate to the appropriate handler based
 * on this outcome.
 *
 * @param callbacks a map of outcomes to handlers.
 */
export declare function composeTaskCompletedCallbacks(callbacks: Record<TaskProcessingOutcome, TaskCompletedHandler>): TaskCompletedCallback;
/**
 * Create a handler that will mark the entry-points in a package as being processed.
 *
 * @param pkgJsonUpdater The service used to update the package.json
 */
export declare function createMarkAsProcessedHandler(pkgJsonUpdater: PackageJsonUpdater): TaskCompletedHandler;
/**
 * Create a handler that will throw an error.
 */
export declare function createThrowErrorHandler(fs: FileSystem): TaskCompletedHandler;
/**
 * Create a handler that logs an error and marks the task as failed.
 */
export declare function createLogErrorHandler(logger: Logger, fs: FileSystem, taskQueue: TaskQueue): TaskCompletedHandler;
