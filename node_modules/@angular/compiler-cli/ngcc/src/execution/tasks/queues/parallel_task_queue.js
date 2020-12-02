(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/tasks/queues/parallel_task_queue", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/execution/tasks/utils", "@angular/compiler-cli/ngcc/src/execution/tasks/queues/base_task_queue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/utils");
    var base_task_queue_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/queues/base_task_queue");
    /**
     * A `TaskQueue` implementation that assumes tasks are processed in parallel, thus has to ensure a
     * task's dependencies have been processed before processing the task.
     */
    var ParallelTaskQueue = /** @class */ (function (_super) {
        tslib_1.__extends(ParallelTaskQueue, _super);
        function ParallelTaskQueue(logger, tasks, dependencies) {
            var _this = _super.call(this, logger, utils_1.sortTasksByPriority(tasks, dependencies), dependencies) || this;
            _this.blockedTasks = utils_1.getBlockedTasks(dependencies);
            return _this;
        }
        ParallelTaskQueue.prototype.computeNextTask = function () {
            var _this = this;
            // Look for the first available (i.e. not blocked) task.
            // (NOTE: Since tasks are sorted by priority, the first available one is the best choice.)
            var nextTaskIdx = this.tasks.findIndex(function (task) { return !_this.blockedTasks.has(task); });
            if (nextTaskIdx === -1)
                return null;
            // Remove the task from the list of available tasks and add it to the list of in-progress tasks.
            var nextTask = this.tasks[nextTaskIdx];
            this.tasks.splice(nextTaskIdx, 1);
            this.inProgressTasks.add(nextTask);
            return nextTask;
        };
        ParallelTaskQueue.prototype.markAsCompleted = function (task) {
            var e_1, _a;
            _super.prototype.markAsCompleted.call(this, task);
            if (!this.dependencies.has(task)) {
                return;
            }
            try {
                // Unblock the tasks that are dependent upon `task`
                for (var _b = tslib_1.__values(this.dependencies.get(task)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dependentTask = _c.value;
                    if (this.blockedTasks.has(dependentTask)) {
                        var blockingTasks = this.blockedTasks.get(dependentTask);
                        // Remove the completed task from the lists of tasks blocking other tasks.
                        blockingTasks.delete(task);
                        if (blockingTasks.size === 0) {
                            // If the dependent task is not blocked any more, mark it for unblocking.
                            this.blockedTasks.delete(dependentTask);
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        ParallelTaskQueue.prototype.toString = function () {
            return _super.prototype.toString.call(this) + "\n" +
                ("  Blocked tasks (" + this.blockedTasks.size + "): " + this.stringifyBlockedTasks('    '));
        };
        ParallelTaskQueue.prototype.stringifyBlockedTasks = function (indentation) {
            var _this = this;
            return Array.from(this.blockedTasks)
                .map(function (_a) {
                var _b = tslib_1.__read(_a, 2), task = _b[0], blockingTasks = _b[1];
                return "\n" + indentation + "- " + utils_1.stringifyTask(task) + " (" + blockingTasks.size + "): " +
                    _this.stringifyTasks(Array.from(blockingTasks), indentation + "    ");
            })
                .join('');
        };
        return ParallelTaskQueue;
    }(base_task_queue_1.BaseTaskQueue));
    exports.ParallelTaskQueue = ParallelTaskQueue;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsZWxfdGFza19xdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9leGVjdXRpb24vdGFza3MvcXVldWVzL3BhcmFsbGVsX3Rhc2tfcXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsOEVBQTZFO0lBQzdFLHlHQUFnRDtJQUVoRDs7O09BR0c7SUFDSDtRQUF1Qyw2Q0FBYTtRQVFsRCwyQkFBWSxNQUFjLEVBQUUsS0FBNEIsRUFBRSxZQUE4QjtZQUF4RixZQUNFLGtCQUFNLE1BQU0sRUFBRSwyQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLFNBRXRFO1lBREMsS0FBSSxDQUFDLFlBQVksR0FBRyx1QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDOztRQUNwRCxDQUFDO1FBRUQsMkNBQWUsR0FBZjtZQUFBLGlCQVlDO1lBWEMsd0RBQXdEO1lBQ3hELDBGQUEwRjtZQUMxRixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztZQUMvRSxJQUFJLFdBQVcsS0FBSyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFcEMsZ0dBQWdHO1lBQ2hHLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFFRCwyQ0FBZSxHQUFmLFVBQWdCLElBQVU7O1lBQ3hCLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU87YUFDUjs7Z0JBRUQsbURBQW1EO2dCQUNuRCxLQUE0QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQXJELElBQU0sYUFBYSxXQUFBO29CQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUN4QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUUsQ0FBQzt3QkFDNUQsMEVBQTBFO3dCQUMxRSxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzQixJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFOzRCQUM1Qix5RUFBeUU7NEJBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUN6QztxQkFDRjtpQkFDRjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUVELG9DQUFRLEdBQVI7WUFDRSxPQUFVLGlCQUFNLFFBQVEsV0FBRSxPQUFJO2lCQUMxQixzQkFBb0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFdBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUM7UUFDM0YsQ0FBQztRQUVPLGlEQUFxQixHQUE3QixVQUE4QixXQUFtQjtZQUFqRCxpQkFPQztZQU5DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUMvQixHQUFHLENBQ0EsVUFBQyxFQUFxQjtvQkFBckIsMEJBQXFCLEVBQXBCLFlBQUksRUFBRSxxQkFBYTtnQkFDakIsT0FBQSxPQUFLLFdBQVcsVUFBSyxxQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFLLGFBQWEsQ0FBQyxJQUFJLFFBQUs7b0JBQ3BFLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBSyxXQUFXLFNBQU0sQ0FBQztZQURwRSxDQUNvRSxDQUFDO2lCQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FBQyxBQTdERCxDQUF1QywrQkFBYSxHQTZEbkQ7SUE3RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uLy4uLy4uL2xvZ2dpbmcvbG9nZ2VyJztcbmltcG9ydCB7UGFydGlhbGx5T3JkZXJlZFRhc2tzLCBUYXNrLCBUYXNrRGVwZW5kZW5jaWVzfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRCbG9ja2VkVGFza3MsIHNvcnRUYXNrc0J5UHJpb3JpdHksIHN0cmluZ2lmeVRhc2t9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7QmFzZVRhc2tRdWV1ZX0gZnJvbSAnLi9iYXNlX3Rhc2tfcXVldWUnO1xuXG4vKipcbiAqIEEgYFRhc2tRdWV1ZWAgaW1wbGVtZW50YXRpb24gdGhhdCBhc3N1bWVzIHRhc2tzIGFyZSBwcm9jZXNzZWQgaW4gcGFyYWxsZWwsIHRodXMgaGFzIHRvIGVuc3VyZSBhXG4gKiB0YXNrJ3MgZGVwZW5kZW5jaWVzIGhhdmUgYmVlbiBwcm9jZXNzZWQgYmVmb3JlIHByb2Nlc3NpbmcgdGhlIHRhc2suXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbGxlbFRhc2tRdWV1ZSBleHRlbmRzIEJhc2VUYXNrUXVldWUge1xuICAvKipcbiAgICogQSBtYXAgZnJvbSBUYXNrcyB0byB0aGUgVGFza3MgdGhhdCBpdCBkZXBlbmRzIHVwb24uXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIHJldmVyc2UgbWFwcGluZyBvZiBgVGFza0RlcGVuZGVuY2llc2AuXG4gICAqL1xuICBwcml2YXRlIGJsb2NrZWRUYXNrczogTWFwPFRhc2ssIFNldDxUYXNrPj47XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBMb2dnZXIsIHRhc2tzOiBQYXJ0aWFsbHlPcmRlcmVkVGFza3MsIGRlcGVuZGVuY2llczogVGFza0RlcGVuZGVuY2llcykge1xuICAgIHN1cGVyKGxvZ2dlciwgc29ydFRhc2tzQnlQcmlvcml0eSh0YXNrcywgZGVwZW5kZW5jaWVzKSwgZGVwZW5kZW5jaWVzKTtcbiAgICB0aGlzLmJsb2NrZWRUYXNrcyA9IGdldEJsb2NrZWRUYXNrcyhkZXBlbmRlbmNpZXMpO1xuICB9XG5cbiAgY29tcHV0ZU5leHRUYXNrKCk6IFRhc2t8bnVsbCB7XG4gICAgLy8gTG9vayBmb3IgdGhlIGZpcnN0IGF2YWlsYWJsZSAoaS5lLiBub3QgYmxvY2tlZCkgdGFzay5cbiAgICAvLyAoTk9URTogU2luY2UgdGFza3MgYXJlIHNvcnRlZCBieSBwcmlvcml0eSwgdGhlIGZpcnN0IGF2YWlsYWJsZSBvbmUgaXMgdGhlIGJlc3QgY2hvaWNlLilcbiAgICBjb25zdCBuZXh0VGFza0lkeCA9IHRoaXMudGFza3MuZmluZEluZGV4KHRhc2sgPT4gIXRoaXMuYmxvY2tlZFRhc2tzLmhhcyh0YXNrKSk7XG4gICAgaWYgKG5leHRUYXNrSWR4ID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBSZW1vdmUgdGhlIHRhc2sgZnJvbSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdGFza3MgYW5kIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBpbi1wcm9ncmVzcyB0YXNrcy5cbiAgICBjb25zdCBuZXh0VGFzayA9IHRoaXMudGFza3NbbmV4dFRhc2tJZHhdO1xuICAgIHRoaXMudGFza3Muc3BsaWNlKG5leHRUYXNrSWR4LCAxKTtcbiAgICB0aGlzLmluUHJvZ3Jlc3NUYXNrcy5hZGQobmV4dFRhc2spO1xuXG4gICAgcmV0dXJuIG5leHRUYXNrO1xuICB9XG5cbiAgbWFya0FzQ29tcGxldGVkKHRhc2s6IFRhc2spOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNDb21wbGV0ZWQodGFzayk7XG5cbiAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzLmhhcyh0YXNrKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVuYmxvY2sgdGhlIHRhc2tzIHRoYXQgYXJlIGRlcGVuZGVudCB1cG9uIGB0YXNrYFxuICAgIGZvciAoY29uc3QgZGVwZW5kZW50VGFzayBvZiB0aGlzLmRlcGVuZGVuY2llcy5nZXQodGFzaykhKSB7XG4gICAgICBpZiAodGhpcy5ibG9ja2VkVGFza3MuaGFzKGRlcGVuZGVudFRhc2spKSB7XG4gICAgICAgIGNvbnN0IGJsb2NraW5nVGFza3MgPSB0aGlzLmJsb2NrZWRUYXNrcy5nZXQoZGVwZW5kZW50VGFzaykhO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNvbXBsZXRlZCB0YXNrIGZyb20gdGhlIGxpc3RzIG9mIHRhc2tzIGJsb2NraW5nIG90aGVyIHRhc2tzLlxuICAgICAgICBibG9ja2luZ1Rhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgaWYgKGJsb2NraW5nVGFza3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZXBlbmRlbnQgdGFzayBpcyBub3QgYmxvY2tlZCBhbnkgbW9yZSwgbWFyayBpdCBmb3IgdW5ibG9ja2luZy5cbiAgICAgICAgICB0aGlzLmJsb2NrZWRUYXNrcy5kZWxldGUoZGVwZW5kZW50VGFzayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtzdXBlci50b1N0cmluZygpfVxcbmAgK1xuICAgICAgICBgICBCbG9ja2VkIHRhc2tzICgke3RoaXMuYmxvY2tlZFRhc2tzLnNpemV9KTogJHt0aGlzLnN0cmluZ2lmeUJsb2NrZWRUYXNrcygnICAgICcpfWA7XG4gIH1cblxuICBwcml2YXRlIHN0cmluZ2lmeUJsb2NrZWRUYXNrcyhpbmRlbnRhdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmJsb2NrZWRUYXNrcylcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAgIChbdGFzaywgYmxvY2tpbmdUYXNrc10pID0+XG4gICAgICAgICAgICAgICAgYFxcbiR7aW5kZW50YXRpb259LSAke3N0cmluZ2lmeVRhc2sodGFzayl9ICgke2Jsb2NraW5nVGFza3Muc2l6ZX0pOiBgICtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ2lmeVRhc2tzKEFycmF5LmZyb20oYmxvY2tpbmdUYXNrcyksIGAke2luZGVudGF0aW9ufSAgICBgKSlcbiAgICAgICAgLmpvaW4oJycpO1xuICB9XG59XG4iXX0=