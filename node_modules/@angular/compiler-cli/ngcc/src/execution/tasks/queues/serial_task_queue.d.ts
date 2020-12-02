/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/tasks/queues/serial_task_queue" />
import { Task } from '../api';
import { BaseTaskQueue } from './base_task_queue';
/**
 * A `TaskQueue` implementation that assumes tasks are processed serially and each one is completed
 * before requesting the next one.
 */
export declare class SerialTaskQueue extends BaseTaskQueue {
    computeNextTask(): Task | null;
}
