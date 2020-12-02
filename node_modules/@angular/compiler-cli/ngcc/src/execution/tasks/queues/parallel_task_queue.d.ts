/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/tasks/queues/parallel_task_queue" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger } from '../../../logging/logger';
import { PartiallyOrderedTasks, Task, TaskDependencies } from '../api';
import { BaseTaskQueue } from './base_task_queue';
/**
 * A `TaskQueue` implementation that assumes tasks are processed in parallel, thus has to ensure a
 * task's dependencies have been processed before processing the task.
 */
export declare class ParallelTaskQueue extends BaseTaskQueue {
    /**
     * A map from Tasks to the Tasks that it depends upon.
     *
     * This is the reverse mapping of `TaskDependencies`.
     */
    private blockedTasks;
    constructor(logger: Logger, tasks: PartiallyOrderedTasks, dependencies: TaskDependencies);
    computeNextTask(): Task | null;
    markAsCompleted(task: Task): void;
    toString(): string;
    private stringifyBlockedTasks;
}
