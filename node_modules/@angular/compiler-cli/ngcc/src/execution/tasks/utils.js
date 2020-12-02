(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/tasks/utils", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/execution/tasks/api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var api_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/api");
    /** Stringify a task for debugging purposes. */
    exports.stringifyTask = function (task) { return "{entryPoint: " + task.entryPoint.name + ", formatProperty: " + task.formatProperty + ", processDts: " + task.processDts + "}"; };
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
    function computeTaskDependencies(tasks, graph) {
        var dependencies = new api_1.TaskDependencies();
        var candidateDependencies = new Map();
        tasks.forEach(function (task) {
            var e_1, _a;
            var entryPointPath = task.entryPoint.path;
            // Find the earlier tasks (`candidateDependencies`) that this task depends upon.
            var deps = graph.dependenciesOf(entryPointPath);
            var taskDependencies = deps.filter(function (dep) { return candidateDependencies.has(dep); })
                .map(function (dep) { return candidateDependencies.get(dep); });
            // If this task has dependencies, add it to the dependencies and dependents maps.
            if (taskDependencies.length > 0) {
                try {
                    for (var taskDependencies_1 = tslib_1.__values(taskDependencies), taskDependencies_1_1 = taskDependencies_1.next(); !taskDependencies_1_1.done; taskDependencies_1_1 = taskDependencies_1.next()) {
                        var dependency = taskDependencies_1_1.value;
                        var taskDependents = getDependentsSet(dependencies, dependency);
                        taskDependents.add(task);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (taskDependencies_1_1 && !taskDependencies_1_1.done && (_a = taskDependencies_1.return)) _a.call(taskDependencies_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (task.processDts) {
                // SANITY CHECK:
                // There should only be one task per entry-point that generates typings (and thus can be a
                // dependency of other tasks), so the following should theoretically never happen, but check
                // just in case.
                if (candidateDependencies.has(entryPointPath)) {
                    var otherTask = candidateDependencies.get(entryPointPath);
                    throw new Error('Invariant violated: Multiple tasks are assigned generating typings for ' +
                        ("'" + entryPointPath + "':\n  - " + exports.stringifyTask(otherTask) + "\n  - " + exports.stringifyTask(task)));
                }
                // This task can potentially be a dependency (i.e. it generates typings), so add it to the
                // list of candidate dependencies for subsequent tasks.
                candidateDependencies.set(entryPointPath, task);
            }
            else {
                // This task is not generating typings so we need to add it to the dependents of the task that
                // does generate typings, if that exists
                if (candidateDependencies.has(entryPointPath)) {
                    var typingsTask = candidateDependencies.get(entryPointPath);
                    var typingsTaskDependents = getDependentsSet(dependencies, typingsTask);
                    typingsTaskDependents.add(task);
                }
            }
        });
        return dependencies;
    }
    exports.computeTaskDependencies = computeTaskDependencies;
    function getDependentsSet(map, task) {
        if (!map.has(task)) {
            map.set(task, new Set());
        }
        return map.get(task);
    }
    exports.getDependentsSet = getDependentsSet;
    /**
     * Invert the given mapping of Task dependencies.
     *
     * @param dependencies The mapping of tasks to the tasks that depend upon them.
     * @returns A mapping of tasks to the tasks that they depend upon.
     */
    function getBlockedTasks(dependencies) {
        var e_2, _a, e_3, _b;
        var blockedTasks = new Map();
        try {
            for (var dependencies_1 = tslib_1.__values(dependencies), dependencies_1_1 = dependencies_1.next(); !dependencies_1_1.done; dependencies_1_1 = dependencies_1.next()) {
                var _c = tslib_1.__read(dependencies_1_1.value, 2), dependency = _c[0], dependents = _c[1];
                try {
                    for (var dependents_1 = (e_3 = void 0, tslib_1.__values(dependents)), dependents_1_1 = dependents_1.next(); !dependents_1_1.done; dependents_1_1 = dependents_1.next()) {
                        var dependent = dependents_1_1.value;
                        var dependentSet = getDependentsSet(blockedTasks, dependent);
                        dependentSet.add(dependency);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (dependents_1_1 && !dependents_1_1.done && (_b = dependents_1.return)) _b.call(dependents_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (dependencies_1_1 && !dependencies_1_1.done && (_a = dependencies_1.return)) _a.call(dependencies_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return blockedTasks;
    }
    exports.getBlockedTasks = getBlockedTasks;
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
    function sortTasksByPriority(tasks, dependencies) {
        var priorityPerTask = new Map();
        var computePriority = function (task, idx) { return [dependencies.has(task) ? dependencies.get(task).size : 0, idx]; };
        tasks.forEach(function (task, i) { return priorityPerTask.set(task, computePriority(task, i)); });
        return tasks.slice().sort(function (task1, task2) {
            var _a = tslib_1.__read(priorityPerTask.get(task1), 2), p1 = _a[0], idx1 = _a[1];
            var _b = tslib_1.__read(priorityPerTask.get(task2), 2), p2 = _b[0], idx2 = _b[1];
            return (p2 - p1) || (idx1 - idx2);
        });
    }
    exports.sortTasksByPriority = sortTasksByPriority;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL3Rhc2tzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVNBLDBFQUFvRTtJQUVwRSwrQ0FBK0M7SUFDbEMsUUFBQSxhQUFhLEdBQUcsVUFBQyxJQUFVLElBQWEsT0FBQSxrQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDBCQUFxQixJQUFJLENBQUMsY0FBYyxzQkFBaUIsSUFBSSxDQUFDLFVBQVUsTUFBRyxFQUQ5QyxDQUM4QyxDQUFDO0lBRXBHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNILFNBQWdCLHVCQUF1QixDQUNuQyxLQUE0QixFQUFFLEtBQTJCO1FBQzNELElBQU0sWUFBWSxHQUFHLElBQUksc0JBQWdCLEVBQUUsQ0FBQztRQUM1QyxJQUFNLHFCQUFxQixHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO1FBRXRELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztZQUNoQixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUU1QyxnRkFBZ0Y7WUFDaEYsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUM7aUJBQzdDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1lBRTFFLGlGQUFpRjtZQUNqRixJQUFJLGdCQUFnQixDQUFDLE1B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QyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQWhFLENBQWdFLENBQUM7UUFFekYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDLElBQUssT0FBQSxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQW5ELENBQW1ELENBQUMsQ0FBQztRQUVoRixPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUMvQixJQUFBLGtEQUF3QyxFQUF2QyxVQUFFLEVBQUUsWUFBbUMsQ0FBQztZQUN6QyxJQUFBLGtEQUF3QyxFQUF2QyxVQUFFLEVBQUUsWUFBbUMsQ0FBQztZQUUvQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWRELGtEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtEZXBHcmFwaH0gZnJvbSAnZGVwZW5kZW5jeS1ncmFwaCc7XG5pbXBvcnQge0VudHJ5UG9pbnR9IGZyb20gJy4uLy4uL3BhY2thZ2VzL2VudHJ5X3BvaW50JztcbmltcG9ydCB7UGFydGlhbGx5T3JkZXJlZFRhc2tzLCBUYXNrLCBUYXNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL2FwaSc7XG5cbi8qKiBTdHJpbmdpZnkgYSB0YXNrIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuICovXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5VGFzayA9ICh0YXNrOiBUYXNrKTogc3RyaW5nID0+IGB7ZW50cnlQb2ludDogJHtcbiAgICB0YXNrLmVudHJ5UG9pbnQubmFtZX0sIGZvcm1hdFByb3BlcnR5OiAke3Rhc2suZm9ybWF0UHJvcGVydHl9LCBwcm9jZXNzRHRzOiAke3Rhc2sucHJvY2Vzc0R0c319YDtcblxuLyoqXG4gKiBDb21wdXRlIGEgbWFwcGluZyBvZiB0YXNrcyB0byB0aGUgdGFza3MgdGhhdCBhcmUgZGVwZW5kZW50IG9uIHRoZW0gKGlmIGFueSkuXG4gKlxuICogVGFzayBBIGNhbiBkZXBlbmQgdXBvbiB0YXNrIEIsIGlmIGVpdGhlcjpcbiAqXG4gKiAqIEEgYW5kIEIgaGF2ZSB0aGUgc2FtZSBlbnRyeS1wb2ludCBfYW5kXyBCIGlzIGdlbmVyYXRpbmcgdGhlIHR5cGluZ3MgZm9yIHRoYXQgZW50cnktcG9pbnRcbiAqICAgKGkuZS4gaGFzIGBwcm9jZXNzRHRzOiB0cnVlYCkuXG4gKiAqIEEncyBlbnRyeS1wb2ludCBkZXBlbmRzIG9uIEIncyBlbnRyeS1wb2ludCBfYW5kXyBCIGlzIGFsc28gZ2VuZXJhdGluZyB0eXBpbmdzLlxuICpcbiAqIE5PVEU6IElmIGEgdGFzayBpcyBub3QgZ2VuZXJhdGluZyB0eXBpbmdzLCB0aGVuIGl0IGNhbm5vdCBhZmZlY3QgYW55dGhpbmcgd2hpY2ggZGVwZW5kcyBvbiBpdHNcbiAqICAgICAgIGVudHJ5LXBvaW50LCByZWdhcmRsZXNzIG9mIHRoZSBkZXBlbmRlbmN5IGdyYXBoLiBUbyBwdXQgdGhpcyBhbm90aGVyIHdheSwgb25seSB0aGUgdGFza1xuICogICAgICAgd2hpY2ggcHJvZHVjZXMgdGhlIHR5cGluZ3MgZm9yIGEgZGVwZW5kZW5jeSBuZWVkcyB0byBoYXZlIGJlZW4gY29tcGxldGVkLlxuICpcbiAqIEFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLCB3ZSB0YWtlIGludG8gYWNjb3VudCB0aGUgZmFjdCB0aGF0IGB0YXNrc2AgYXJlIHNvcnRlZCBpbiBzdWNoIGFcbiAqIHdheSB0aGF0IGEgdGFzayBjYW4gb25seSBkZXBlbmQgb24gZWFybGllciB0YXNrcyAoaS5lLiBkZXBlbmRlbmNpZXMgYWx3YXlzIGNvbWUgYmVmb3JlXG4gKiBkZXBlbmRlbnRzIGluIHRoZSBsaXN0IG9mIHRhc2tzKS5cbiAqXG4gKiBAcGFyYW0gdGFza3MgQSAocGFydGlhbGx5IG9yZGVyZWQpIGxpc3Qgb2YgdGFza3MuXG4gKiBAcGFyYW0gZ3JhcGggVGhlIGRlcGVuZGVuY3kgZ3JhcGggYmV0d2VlbiBlbnRyeS1wb2ludHMuXG4gKiBAcmV0dXJuIEEgbWFwIGZyb20gZWFjaCB0YXNrIHRvIHRob3NlIHRhc2tzIGRpcmVjdGx5IGRlcGVuZGVudCB1cG9uIGl0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRhc2tEZXBlbmRlbmNpZXMoXG4gICAgdGFza3M6IFBhcnRpYWxseU9yZGVyZWRUYXNrcywgZ3JhcGg6IERlcEdyYXBoPEVudHJ5UG9pbnQ+KTogVGFza0RlcGVuZGVuY2llcyB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IG5ldyBUYXNrRGVwZW5kZW5jaWVzKCk7XG4gIGNvbnN0IGNhbmRpZGF0ZURlcGVuZGVuY2llcyA9IG5ldyBNYXA8c3RyaW5nLCBUYXNrPigpO1xuXG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgY29uc3QgZW50cnlQb2ludFBhdGggPSB0YXNrLmVudHJ5UG9pbnQucGF0aDtcblxuICAgIC8vIEZpbmQgdGhlIGVhcmxpZXIgdGFza3MgKGBjYW5kaWRhdGVEZXBlbmRlbmNpZXNgKSB0aGF0IHRoaXMgdGFzayBkZXBlbmRzIHVwb24uXG4gICAgY29uc3QgZGVwcyA9IGdyYXBoLmRlcGVuZGVuY2llc09mKGVudHJ5UG9pbnRQYXRoKTtcbiAgICBjb25zdCB0YXNrRGVwZW5kZW5jaWVzID0gZGVwcy5maWx0ZXIoZGVwID0+IGNhbmRpZGF0ZURlcGVuZGVuY2llcy5oYXMoZGVwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZGVwID0+IGNhbmRpZGF0ZURlcGVuZGVuY2llcy5nZXQoZGVwKSEpO1xuXG4gICAgLy8gSWYgdGhpcyB0YXNrIGhhcyBkZXBlbmRlbmNpZXMsIGFkZCBpdCB0byB0aGUgZGVwZW5kZW5jaWVzIGFuZCBkZXBlbmRlbnRzIG1hcHMuXG4gICAgaWYgKHRhc2tEZXBlbmRlbmNpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5IG9mIHRhc2tEZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgY29uc3QgdGFza0RlcGVuZGVudHMgPSBnZXREZXBlbmRlbnRzU2V0KGRlcGVuZGVuY2llcywgZGVwZW5kZW5jeSk7XG4gICAgICAgIHRhc2tEZXBlbmRlbnRzLmFkZCh0YXNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFzay5wcm9jZXNzRHRzKSB7XG4gICAgICAvLyBTQU5JVFkgQ0hFQ0s6XG4gICAgICAvLyBUaGVyZSBzaG91bGQgb25seSBiZSBvbmUgdGFzayBwZXIgZW50cnktcG9pbnQgdGhhdCBnZW5lcmF0ZXMgdHlwaW5ncyAoYW5kIHRodXMgY2FuIGJlIGFcbiAgICAgIC8vIGRlcGVuZGVuY3kgb2Ygb3RoZXIgdGFza3MpLCBzbyB0aGUgZm9sbG93aW5nIHNob3VsZCB0aGVvcmV0aWNhbGx5IG5ldmVyIGhhcHBlbiwgYnV0IGNoZWNrXG4gICAgICAvLyBqdXN0IGluIGNhc2UuXG4gICAgICBpZiAoY2FuZGlkYXRlRGVwZW5kZW5jaWVzLmhhcyhlbnRyeVBvaW50UGF0aCkpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJUYXNrID0gY2FuZGlkYXRlRGVwZW5kZW5jaWVzLmdldChlbnRyeVBvaW50UGF0aCkhO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnSW52YXJpYW50IHZpb2xhdGVkOiBNdWx0aXBsZSB0YXNrcyBhcmUgYXNzaWduZWQgZ2VuZXJhdGluZyB0eXBpbmdzIGZvciAnICtcbiAgICAgICAgICAgIGAnJHtlbnRyeVBvaW50UGF0aH0nOlxcbiAgLSAke3N0cmluZ2lmeVRhc2sob3RoZXJUYXNrKX1cXG4gIC0gJHtzdHJpbmdpZnlUYXNrKHRhc2spfWApO1xuICAgICAgfVxuICAgICAgLy8gVGhpcyB0YXNrIGNhbiBwb3RlbnRpYWxseSBiZSBhIGRlcGVuZGVuY3kgKGkuZS4gaXQgZ2VuZXJhdGVzIHR5cGluZ3MpLCBzbyBhZGQgaXQgdG8gdGhlXG4gICAgICAvLyBsaXN0IG9mIGNhbmRpZGF0ZSBkZXBlbmRlbmNpZXMgZm9yIHN1YnNlcXVlbnQgdGFza3MuXG4gICAgICBjYW5kaWRhdGVEZXBlbmRlbmNpZXMuc2V0KGVudHJ5UG9pbnRQYXRoLCB0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyB0YXNrIGlzIG5vdCBnZW5lcmF0aW5nIHR5cGluZ3Mgc28gd2UgbmVlZCB0byBhZGQgaXQgdG8gdGhlIGRlcGVuZGVudHMgb2YgdGhlIHRhc2sgdGhhdFxuICAgICAgLy8gZG9lcyBnZW5lcmF0ZSB0eXBpbmdzLCBpZiB0aGF0IGV4aXN0c1xuICAgICAgaWYgKGNhbmRpZGF0ZURlcGVuZGVuY2llcy5oYXMoZW50cnlQb2ludFBhdGgpKSB7XG4gICAgICAgIGNvbnN0IHR5cGluZ3NUYXNrID0gY2FuZGlkYXRlRGVwZW5kZW5jaWVzLmdldChlbnRyeVBvaW50UGF0aCkhO1xuICAgICAgICBjb25zdCB0eXBpbmdzVGFza0RlcGVuZGVudHMgPSBnZXREZXBlbmRlbnRzU2V0KGRlcGVuZGVuY2llcywgdHlwaW5nc1Rhc2spO1xuICAgICAgICB0eXBpbmdzVGFza0RlcGVuZGVudHMuYWRkKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZGVudHNTZXQobWFwOiBUYXNrRGVwZW5kZW5jaWVzLCB0YXNrOiBUYXNrKTogU2V0PFRhc2s+IHtcbiAgaWYgKCFtYXAuaGFzKHRhc2spKSB7XG4gICAgbWFwLnNldCh0YXNrLCBuZXcgU2V0KCkpO1xuICB9XG4gIHJldHVybiBtYXAuZ2V0KHRhc2spITtcbn1cblxuLyoqXG4gKiBJbnZlcnQgdGhlIGdpdmVuIG1hcHBpbmcgb2YgVGFzayBkZXBlbmRlbmNpZXMuXG4gKlxuICogQHBhcmFtIGRlcGVuZGVuY2llcyBUaGUgbWFwcGluZyBvZiB0YXNrcyB0byB0aGUgdGFza3MgdGhhdCBkZXBlbmQgdXBvbiB0aGVtLlxuICogQHJldHVybnMgQSBtYXBwaW5nIG9mIHRhc2tzIHRvIHRoZSB0YXNrcyB0aGF0IHRoZXkgZGVwZW5kIHVwb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja2VkVGFza3MoZGVwZW5kZW5jaWVzOiBUYXNrRGVwZW5kZW5jaWVzKTogTWFwPFRhc2ssIFNldDxUYXNrPj4ge1xuICBjb25zdCBibG9ja2VkVGFza3MgPSBuZXcgTWFwPFRhc2ssIFNldDxUYXNrPj4oKTtcbiAgZm9yIChjb25zdCBbZGVwZW5kZW5jeSwgZGVwZW5kZW50c10gb2YgZGVwZW5kZW5jaWVzKSB7XG4gICAgZm9yIChjb25zdCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgICAgY29uc3QgZGVwZW5kZW50U2V0ID0gZ2V0RGVwZW5kZW50c1NldChibG9ja2VkVGFza3MsIGRlcGVuZGVudCk7XG4gICAgICBkZXBlbmRlbnRTZXQuYWRkKGRlcGVuZGVuY3kpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmxvY2tlZFRhc2tzO1xufVxuXG4vKipcbiAqIFNvcnQgYSBsaXN0IG9mIHRhc2tzIGJ5IHByaW9yaXR5LlxuICpcbiAqIFByaW9yaXR5IGlzIGRldGVybWluZWQgYnkgdGhlIG51bWJlciBvZiBvdGhlciB0YXNrcyB0aGF0IGEgdGFzayBpcyAodHJhbnNpdGl2ZWx5KSBibG9ja2luZzpcbiAqIFRoZSBtb3JlIHRhc2tzIGEgdGFzayBpcyBibG9ja2luZyB0aGUgaGlnaGVyIGl0cyBwcmlvcml0eSBpcywgYmVjYXVzZSBwcm9jZXNzaW5nIGl0IHdpbGxcbiAqIHBvdGVudGlhbGx5IHVuYmxvY2sgbW9yZSB0YXNrcy5cbiAqXG4gKiBUbyBrZWVwIHRoZSBiZWhhdmlvciBwcmVkaWN0YWJsZSwgaWYgdHdvIHRhc2tzIGJsb2NrIHRoZSBzYW1lIG51bWJlciBvZiBvdGhlciB0YXNrcywgdGhlaXJcbiAqIHJlbGF0aXZlIG9yZGVyIGluIHRoZSBvcmlnaW5hbCBgdGFza3NgIGxpc3RzIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAcGFyYW0gdGFza3MgQSAocGFydGlhbGx5IG9yZGVyZWQpIGxpc3Qgb2YgdGFza3MuXG4gKiBAcGFyYW0gZGVwZW5kZW5jaWVzIFRoZSBtYXBwaW5nIG9mIHRhc2tzIHRvIHRoZSB0YXNrcyB0aGF0IGRlcGVuZCB1cG9uIHRoZW0uXG4gKiBAcmV0dXJuIFRoZSBsaXN0IG9mIHRhc2tzIHNvcnRlZCBieSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYXNrc0J5UHJpb3JpdHkoXG4gICAgdGFza3M6IFBhcnRpYWxseU9yZGVyZWRUYXNrcywgZGVwZW5kZW5jaWVzOiBUYXNrRGVwZW5kZW5jaWVzKTogUGFydGlhbGx5T3JkZXJlZFRhc2tzIHtcbiAgY29uc3QgcHJpb3JpdHlQZXJUYXNrID0gbmV3IE1hcDxUYXNrLCBbbnVtYmVyLCBudW1iZXJdPigpO1xuICBjb25zdCBjb21wdXRlUHJpb3JpdHkgPSAodGFzazogVGFzaywgaWR4OiBudW1iZXIpOlxuICAgICAgW251bWJlciwgbnVtYmVyXSA9PiBbZGVwZW5kZW5jaWVzLmhhcyh0YXNrKSA/IGRlcGVuZGVuY2llcy5nZXQodGFzaykhLnNpemUgOiAwLCBpZHhdO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGkpID0+IHByaW9yaXR5UGVyVGFzay5zZXQodGFzaywgY29tcHV0ZVByaW9yaXR5KHRhc2ssIGkpKSk7XG5cbiAgcmV0dXJuIHRhc2tzLnNsaWNlKCkuc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG4gICAgY29uc3QgW3AxLCBpZHgxXSA9IHByaW9yaXR5UGVyVGFzay5nZXQodGFzazEpITtcbiAgICBjb25zdCBbcDIsIGlkeDJdID0gcHJpb3JpdHlQZXJUYXNrLmdldCh0YXNrMikhO1xuXG4gICAgcmV0dXJuIChwMiAtIHAxKSB8fCAoaWR4MSAtIGlkeDIpO1xuICB9KTtcbn1cbiJdfQ==