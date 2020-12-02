(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/tasks/completion", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/packages/build_marker", "@angular/compiler-cli/ngcc/src/packages/entry_point"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var build_marker_1 = require("@angular/compiler-cli/ngcc/src/packages/build_marker");
    var entry_point_1 = require("@angular/compiler-cli/ngcc/src/packages/entry_point");
    /**
     * Compose a group of TaskCompletedHandlers into a single TaskCompletedCallback.
     *
     * The compose callback will receive an outcome and will delegate to the appropriate handler based
     * on this outcome.
     *
     * @param callbacks a map of outcomes to handlers.
     */
    function composeTaskCompletedCallbacks(callbacks) {
        return function (task, outcome, message) {
            var callback = callbacks[outcome];
            if (callback === undefined) {
                throw new Error("Unknown task outcome: \"" + outcome + "\" - supported outcomes: " + JSON.stringify(Object.keys(callbacks)));
            }
            callback(task, message);
        };
    }
    exports.composeTaskCompletedCallbacks = composeTaskCompletedCallbacks;
    /**
     * Create a handler that will mark the entry-points in a package as being processed.
     *
     * @param pkgJsonUpdater The service used to update the package.json
     */
    function createMarkAsProcessedHandler(pkgJsonUpdater) {
        return function (task) {
            var entryPoint = task.entryPoint, formatPropertiesToMarkAsProcessed = task.formatPropertiesToMarkAsProcessed, processDts = task.processDts;
            var packageJsonPath = file_system_1.resolve(entryPoint.path, 'package.json');
            var propsToMarkAsProcessed = tslib_1.__spread(formatPropertiesToMarkAsProcessed);
            if (processDts) {
                propsToMarkAsProcessed.push('typings');
            }
            build_marker_1.markAsProcessed(pkgJsonUpdater, entryPoint.packageJson, packageJsonPath, propsToMarkAsProcessed);
        };
    }
    exports.createMarkAsProcessedHandler = createMarkAsProcessedHandler;
    /**
     * Create a handler that will throw an error.
     */
    function createThrowErrorHandler(fs) {
        return function (task, message) {
            var format = entry_point_1.getEntryPointFormat(fs, task.entryPoint, task.formatProperty);
            throw new Error("Failed to compile entry-point " + task.entryPoint.name + " (" + task.formatProperty + " as " + format + ")" +
                (message !== null ? " due to " + message : ''));
        };
    }
    exports.createThrowErrorHandler = createThrowErrorHandler;
    /**
     * Create a handler that logs an error and marks the task as failed.
     */
    function createLogErrorHandler(logger, fs, taskQueue) {
        return function (task, message) {
            taskQueue.markAsFailed(task);
            var format = entry_point_1.getEntryPointFormat(fs, task.entryPoint, task.formatProperty);
            logger.error("Failed to compile entry-point " + task.entryPoint.name + " (" + task.formatProperty + " as " + format + ")" +
                (message !== null ? " due to " + message : ''));
        };
    }
    exports.createLogErrorHandler = createLogErrorHandler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9leGVjdXRpb24vdGFza3MvY29tcGxldGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwyRUFBc0U7SUFFdEUscUZBQTREO0lBQzVELG1GQUE0RjtJQWE1Rjs7Ozs7OztPQU9HO0lBQ0gsU0FBZ0IsNkJBQTZCLENBQ3pDLFNBQThEO1FBQ2hFLE9BQU8sVUFBQyxJQUFVLEVBQUUsT0FBOEIsRUFBRSxPQUFvQjtZQUN0RSxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUEwQixPQUFPLGlDQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUcsQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFDSixDQUFDO0lBVkQsc0VBVUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBZ0IsNEJBQTRCLENBQUMsY0FBa0M7UUFFN0UsT0FBTyxVQUFDLElBQVU7WUFDVCxJQUFBLDRCQUFVLEVBQUUsMEVBQWlDLEVBQUUsNEJBQVUsQ0FBUztZQUN6RSxJQUFNLGVBQWUsR0FBRyxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDakUsSUFBTSxzQkFBc0Isb0JBQ3BCLGlDQUFpQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxVQUFVLEVBQUU7Z0JBQ2Qsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsOEJBQWUsQ0FDWCxjQUFjLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUM7SUFDSixDQUFDO0lBYkQsb0VBYUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLHVCQUF1QixDQUFDLEVBQWM7UUFDcEQsT0FBTyxVQUFDLElBQVUsRUFBRSxPQUFvQjtZQUN0QyxJQUFNLE1BQU0sR0FBRyxpQ0FBbUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0UsTUFBTSxJQUFJLEtBQUssQ0FDWCxtQ0FBaUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLGNBQWMsWUFDekUsTUFBTSxNQUFHO2dCQUNiLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBVyxPQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQVJELDBEQVFDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixxQkFBcUIsQ0FDakMsTUFBYyxFQUFFLEVBQWMsRUFBRSxTQUFvQjtRQUN0RCxPQUFPLFVBQUMsSUFBVSxFQUFFLE9BQW9CO1lBQ3RDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsSUFBTSxNQUFNLEdBQUcsaUNBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQ1IsbUNBQWlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxjQUFjLFlBQ3pFLE1BQU0sTUFBRztnQkFDYixDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQVcsT0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztJQUNKLENBQUM7SUFWRCxzREFVQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RmlsZVN5c3RlbSwgcmVzb2x2ZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi8uLi9sb2dnaW5nL2xvZ2dlcic7XG5pbXBvcnQge21hcmtBc1Byb2Nlc3NlZH0gZnJvbSAnLi4vLi4vcGFja2FnZXMvYnVpbGRfbWFya2VyJztcbmltcG9ydCB7Z2V0RW50cnlQb2ludEZvcm1hdCwgUGFja2FnZUpzb25Gb3JtYXRQcm9wZXJ0aWVzfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9lbnRyeV9wb2ludCc7XG5pbXBvcnQge1BhY2thZ2VKc29uVXBkYXRlcn0gZnJvbSAnLi4vLi4vd3JpdGluZy9wYWNrYWdlX2pzb25fdXBkYXRlcic7XG5cbmltcG9ydCB7VGFzaywgVGFza0NvbXBsZXRlZENhbGxiYWNrLCBUYXNrUHJvY2Vzc2luZ091dGNvbWUsIFRhc2tRdWV1ZX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGFuZGxlIGEgc3BlY2lmaWMgb3V0Y29tZSBvZiBhIHRhc2sgY29tcGxldGlvbi5cbiAqXG4gKiBUaGVzZSBmdW5jdGlvbnMgY2FuIGJlIGNvbXBvc2VkIHVzaW5nIHRoZSBgY29tcG9zZVRhc2tDb21wbGV0ZWRDYWxsYmFja3MoKWBcbiAqIHRvIGNyZWF0ZSBhIGBUYXNrQ29tcGxldGVkQ2FsbGJhY2tgIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhbiBgRXhlY3V0b3JgLlxuICovXG5leHBvcnQgdHlwZSBUYXNrQ29tcGxldGVkSGFuZGxlciA9ICh0YXNrOiBUYXNrLCBtZXNzYWdlOiBzdHJpbmd8bnVsbCkgPT4gdm9pZDtcblxuLyoqXG4gKiBDb21wb3NlIGEgZ3JvdXAgb2YgVGFza0NvbXBsZXRlZEhhbmRsZXJzIGludG8gYSBzaW5nbGUgVGFza0NvbXBsZXRlZENhbGxiYWNrLlxuICpcbiAqIFRoZSBjb21wb3NlIGNhbGxiYWNrIHdpbGwgcmVjZWl2ZSBhbiBvdXRjb21lIGFuZCB3aWxsIGRlbGVnYXRlIHRvIHRoZSBhcHByb3ByaWF0ZSBoYW5kbGVyIGJhc2VkXG4gKiBvbiB0aGlzIG91dGNvbWUuXG4gKlxuICogQHBhcmFtIGNhbGxiYWNrcyBhIG1hcCBvZiBvdXRjb21lcyB0byBoYW5kbGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUYXNrQ29tcGxldGVkQ2FsbGJhY2tzKFxuICAgIGNhbGxiYWNrczogUmVjb3JkPFRhc2tQcm9jZXNzaW5nT3V0Y29tZSwgVGFza0NvbXBsZXRlZEhhbmRsZXI+KTogVGFza0NvbXBsZXRlZENhbGxiYWNrIHtcbiAgcmV0dXJuICh0YXNrOiBUYXNrLCBvdXRjb21lOiBUYXNrUHJvY2Vzc2luZ091dGNvbWUsIG1lc3NhZ2U6IHN0cmluZ3xudWxsKTogdm9pZCA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3Nbb3V0Y29tZV07XG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0YXNrIG91dGNvbWU6IFwiJHtvdXRjb21lfVwiIC0gc3VwcG9ydGVkIG91dGNvbWVzOiAke1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKGNhbGxiYWNrcykpfWApO1xuICAgIH1cbiAgICBjYWxsYmFjayh0YXNrLCBtZXNzYWdlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGVyIHRoYXQgd2lsbCBtYXJrIHRoZSBlbnRyeS1wb2ludHMgaW4gYSBwYWNrYWdlIGFzIGJlaW5nIHByb2Nlc3NlZC5cbiAqXG4gKiBAcGFyYW0gcGtnSnNvblVwZGF0ZXIgVGhlIHNlcnZpY2UgdXNlZCB0byB1cGRhdGUgdGhlIHBhY2thZ2UuanNvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFya0FzUHJvY2Vzc2VkSGFuZGxlcihwa2dKc29uVXBkYXRlcjogUGFja2FnZUpzb25VcGRhdGVyKTpcbiAgICBUYXNrQ29tcGxldGVkSGFuZGxlciB7XG4gIHJldHVybiAodGFzazogVGFzayk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHtlbnRyeVBvaW50LCBmb3JtYXRQcm9wZXJ0aWVzVG9NYXJrQXNQcm9jZXNzZWQsIHByb2Nlc3NEdHN9ID0gdGFzaztcbiAgICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSByZXNvbHZlKGVudHJ5UG9pbnQucGF0aCwgJ3BhY2thZ2UuanNvbicpO1xuICAgIGNvbnN0IHByb3BzVG9NYXJrQXNQcm9jZXNzZWQ6IFBhY2thZ2VKc29uRm9ybWF0UHJvcGVydGllc1tdID1cbiAgICAgICAgWy4uLmZvcm1hdFByb3BlcnRpZXNUb01hcmtBc1Byb2Nlc3NlZF07XG4gICAgaWYgKHByb2Nlc3NEdHMpIHtcbiAgICAgIHByb3BzVG9NYXJrQXNQcm9jZXNzZWQucHVzaCgndHlwaW5ncycpO1xuICAgIH1cbiAgICBtYXJrQXNQcm9jZXNzZWQoXG4gICAgICAgIHBrZ0pzb25VcGRhdGVyLCBlbnRyeVBvaW50LnBhY2thZ2VKc29uLCBwYWNrYWdlSnNvblBhdGgsIHByb3BzVG9NYXJrQXNQcm9jZXNzZWQpO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGhhbmRsZXIgdGhhdCB3aWxsIHRocm93IGFuIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGhyb3dFcnJvckhhbmRsZXIoZnM6IEZpbGVTeXN0ZW0pOiBUYXNrQ29tcGxldGVkSGFuZGxlciB7XG4gIHJldHVybiAodGFzazogVGFzaywgbWVzc2FnZTogc3RyaW5nfG51bGwpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRFbnRyeVBvaW50Rm9ybWF0KGZzLCB0YXNrLmVudHJ5UG9pbnQsIHRhc2suZm9ybWF0UHJvcGVydHkpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBjb21waWxlIGVudHJ5LXBvaW50ICR7dGFzay5lbnRyeVBvaW50Lm5hbWV9ICgke3Rhc2suZm9ybWF0UHJvcGVydHl9IGFzICR7XG4gICAgICAgICAgICBmb3JtYXR9KWAgK1xuICAgICAgICAobWVzc2FnZSAhPT0gbnVsbCA/IGAgZHVlIHRvICR7bWVzc2FnZX1gIDogJycpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBoYW5kbGVyIHRoYXQgbG9ncyBhbiBlcnJvciBhbmQgbWFya3MgdGhlIHRhc2sgYXMgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9nRXJyb3JIYW5kbGVyKFxuICAgIGxvZ2dlcjogTG9nZ2VyLCBmczogRmlsZVN5c3RlbSwgdGFza1F1ZXVlOiBUYXNrUXVldWUpOiBUYXNrQ29tcGxldGVkSGFuZGxlciB7XG4gIHJldHVybiAodGFzazogVGFzaywgbWVzc2FnZTogc3RyaW5nfG51bGwpOiB2b2lkID0+IHtcbiAgICB0YXNrUXVldWUubWFya0FzRmFpbGVkKHRhc2spO1xuICAgIGNvbnN0IGZvcm1hdCA9IGdldEVudHJ5UG9pbnRGb3JtYXQoZnMsIHRhc2suZW50cnlQb2ludCwgdGFzay5mb3JtYXRQcm9wZXJ0eSk7XG4gICAgbG9nZ2VyLmVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIGNvbXBpbGUgZW50cnktcG9pbnQgJHt0YXNrLmVudHJ5UG9pbnQubmFtZX0gKCR7dGFzay5mb3JtYXRQcm9wZXJ0eX0gYXMgJHtcbiAgICAgICAgICAgIGZvcm1hdH0pYCArXG4gICAgICAgIChtZXNzYWdlICE9PSBudWxsID8gYCBkdWUgdG8gJHttZXNzYWdlfWAgOiAnJykpO1xuICB9O1xufVxuIl19