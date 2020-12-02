/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/tasks/queues/base_task_queue" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger } from '../../../logging/logger';
import { PartiallyOrderedTasks, Task, TaskDependencies, TaskQueue } from '../api';
/**
 * A base `TaskQueue` implementation to be used as base for concrete implementations.
 */
export declare abstract class BaseTaskQueue implements TaskQueue {
    protected logger: Logger;
    protected tasks: PartiallyOrderedTasks;
    protected dependencies: TaskDependencies;
    get allTasksCompleted(): boolean;
    protected inProgressTasks: Set<Task>;
    /**
     * A map of tasks that should be skipped, mapped to the task that caused them to be skipped.
     */
    private tasksToSkip;
    constructor(logger: Logger, tasks: PartiallyOrderedTasks, dependencies: TaskDependencies);
    protected abstract computeNextTask(): Task | null;
    getNextTask(): Task | null;
    markAsCompleted(task: Task): void;
    markAsFailed(task: Task): void;
    markAsUnprocessed(task: Task): void;
    toString(): string;
    /**
     * Mark the given `task` as to be skipped, then recursive skip all its dependents.
     *
     * @param task The task to skip
     * @param failedTask The task that failed, causing this task to be skipped
     */
    protected skipDependentTasks(task: Task, failedTask: Task): void;
    protected stringifyTasks(tasks: Task[], indentation: string): string;
}
