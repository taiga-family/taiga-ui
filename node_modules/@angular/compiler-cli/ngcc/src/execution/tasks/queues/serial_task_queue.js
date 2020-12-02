/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/execution/tasks/queues/serial_task_queue", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/execution/tasks/utils", "@angular/compiler-cli/ngcc/src/execution/tasks/queues/base_task_queue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/utils");
    var base_task_queue_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/queues/base_task_queue");
    /**
     * A `TaskQueue` implementation that assumes tasks are processed serially and each one is completed
     * before requesting the next one.
     */
    var SerialTaskQueue = /** @class */ (function (_super) {
        tslib_1.__extends(SerialTaskQueue, _super);
        function SerialTaskQueue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SerialTaskQueue.prototype.computeNextTask = function () {
            var nextTask = this.tasks.shift() || null;
            if (nextTask) {
                if (this.inProgressTasks.size > 0) {
                    // `SerialTaskQueue` can have max one in-progress task.
                    var inProgressTask = this.inProgressTasks.values().next().value;
                    throw new Error('Trying to get next task, while there is already a task in progress: ' +
                        utils_1.stringifyTask(inProgressTask));
                }
                this.inProgressTasks.add(nextTask);
            }
            return nextTask;
        };
        return SerialTaskQueue;
    }(base_task_queue_1.BaseTaskQueue));
    exports.SerialTaskQueue = SerialTaskQueue;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsX3Rhc2tfcXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL3Rhc2tzL3F1ZXVlcy9zZXJpYWxfdGFza19xdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFHSCw4RUFBdUM7SUFFdkMseUdBQWdEO0lBR2hEOzs7T0FHRztJQUNIO1FBQXFDLDJDQUFhO1FBQWxEOztRQWtCQSxDQUFDO1FBakJDLHlDQUFlLEdBQWY7WUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQztZQUU1QyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtvQkFDakMsdURBQXVEO29CQUN2RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDbEUsTUFBTSxJQUFJLEtBQUssQ0FDWCxzRUFBc0U7d0JBQ3RFLHFCQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7Z0JBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQUFDLEFBbEJELENBQXFDLCtCQUFhLEdBa0JqRDtJQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYXNrfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtzdHJpbmdpZnlUYXNrfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7QmFzZVRhc2tRdWV1ZX0gZnJvbSAnLi9iYXNlX3Rhc2tfcXVldWUnO1xuXG5cbi8qKlxuICogQSBgVGFza1F1ZXVlYCBpbXBsZW1lbnRhdGlvbiB0aGF0IGFzc3VtZXMgdGFza3MgYXJlIHByb2Nlc3NlZCBzZXJpYWxseSBhbmQgZWFjaCBvbmUgaXMgY29tcGxldGVkXG4gKiBiZWZvcmUgcmVxdWVzdGluZyB0aGUgbmV4dCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxUYXNrUXVldWUgZXh0ZW5kcyBCYXNlVGFza1F1ZXVlIHtcbiAgY29tcHV0ZU5leHRUYXNrKCk6IFRhc2t8bnVsbCB7XG4gICAgY29uc3QgbmV4dFRhc2sgPSB0aGlzLnRhc2tzLnNoaWZ0KCkgfHwgbnVsbDtcblxuICAgIGlmIChuZXh0VGFzaykge1xuICAgICAgaWYgKHRoaXMuaW5Qcm9ncmVzc1Rhc2tzLnNpemUgPiAwKSB7XG4gICAgICAgIC8vIGBTZXJpYWxUYXNrUXVldWVgIGNhbiBoYXZlIG1heCBvbmUgaW4tcHJvZ3Jlc3MgdGFzay5cbiAgICAgICAgY29uc3QgaW5Qcm9ncmVzc1Rhc2sgPSB0aGlzLmluUHJvZ3Jlc3NUYXNrcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdUcnlpbmcgdG8gZ2V0IG5leHQgdGFzaywgd2hpbGUgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgaW4gcHJvZ3Jlc3M6ICcgK1xuICAgICAgICAgICAgc3RyaW5naWZ5VGFzayhpblByb2dyZXNzVGFzaykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluUHJvZ3Jlc3NUYXNrcy5hZGQobmV4dFRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VGFzaztcbiAgfVxufVxuIl19