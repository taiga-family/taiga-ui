/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/tasks/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DepGraph } from 'dependency-graph';
import { EntryPoint } from '../../packages/entry_point';
import { PartiallyOrderedTasks, Task, TaskDependencies } from './api';
/** Stringify a task for debugging purposes. */
export declare const stringifyTask: (task: Task) => string;
/**
 * Compute a mapping of tasks to the tasks that are dependent on them (if any).
 *
 * Task A can depend upon task B, if either:
 *
 * * A and B have the same entry-point _and_ B is generating the typings for that entry-point
 *   (i.e. has `processDts: true`).
 * * A's entry-point depends on B's entry-point _and_ B is also generating typings.
 *
 * NOTE: If a task is not generating typings, then it cannot affect anything which depends on its
 *       entry-point, regardless of the dependency graph. To put this another way, only the task
 *       which produces the typings for a dependency needs to have been completed.
 *
 * As a performance optimization, we take into account the fact that `tasks` are sorted in such a
 * way that a task can only depend on earlier tasks (i.e. dependencies always come before
 * dependents in the list of tasks).
 *
 * @param tasks A (partially ordered) list of tasks.
 * @param graph The dependency graph between entry-points.
 * @return A map from each task to those tasks directly dependent upon it.
 */
export declare function computeTaskDependencies(tasks: PartiallyOrderedTasks, graph: DepGraph<EntryPoint>): TaskDependencies;
export declare function getDependentsSet(map: TaskDependencies, task: Task): Set<Task>;
/**
 * Invert the given mapping of Task dependencies.
 *
 * @param dependencies The mapping of tasks to the tasks that depend upon them.
 * @returns A mapping of tasks to the tasks that they depend upon.
 */
export declare function getBlockedTasks(dependencies: TaskDependencies): Map<Task, Set<Task>>;
/**
 * Sort a list of tasks by priority.
 *
 * Priority is determined by the number of other tasks that a task is (transitively) blocking:
 * The more tasks a task is blocking the higher its priority is, because processing it will
 * potentially unblock more tasks.
 *
 * To keep the behavior predictable, if two tasks block the same number of other tasks, their
 * relative order in the original `tasks` lists is preserved.
 *
 * @param tasks A (partially ordered) list of tasks.
 * @param dependencies The mapping of tasks to the tasks that depend upon them.
 * @return The list of tasks sorted by priority.
 */
export declare function sortTasksByPriority(tasks: PartiallyOrderedTasks, dependencies: TaskDependencies): PartiallyOrderedTasks;
