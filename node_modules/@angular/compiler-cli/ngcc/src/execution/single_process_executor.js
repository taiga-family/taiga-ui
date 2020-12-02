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
        define("@angular/compiler-cli/ngcc/src/execution/single_process_executor", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var SingleProcessorExecutorBase = /** @class */ (function () {
        function SingleProcessorExecutorBase(logger, createTaskCompletedCallback) {
            this.logger = logger;
            this.createTaskCompletedCallback = createTaskCompletedCallback;
        }
        SingleProcessorExecutorBase.prototype.doExecute = function (analyzeEntryPoints, createCompileFn) {
            this.logger.debug("Running ngcc on " + this.constructor.name + ".");
            var taskQueue = analyzeEntryPoints();
            var onTaskCompleted = this.createTaskCompletedCallback(taskQueue);
            var compile = createCompileFn(function () { }, onTaskCompleted);
            // Process all tasks.
            this.logger.debug('Processing tasks...');
            var startTime = Date.now();
            while (!taskQueue.allTasksCompleted) {
                var task = taskQueue.getNextTask();
                compile(task);
                taskQueue.markAsCompleted(task);
            }
            var duration = Math.round((Date.now() - startTime) / 1000);
            this.logger.debug("Processed tasks in " + duration + "s.");
        };
        return SingleProcessorExecutorBase;
    }());
    exports.SingleProcessorExecutorBase = SingleProcessorExecutorBase;
    /**
     * An `Executor` that processes all tasks serially and completes synchronously.
     */
    var SingleProcessExecutorSync = /** @class */ (function (_super) {
        tslib_1.__extends(SingleProcessExecutorSync, _super);
        function SingleProcessExecutorSync(logger, lockFile, createTaskCompletedCallback) {
            var _this = _super.call(this, logger, createTaskCompletedCallback) || this;
            _this.lockFile = lockFile;
            return _this;
        }
        SingleProcessExecutorSync.prototype.execute = function (analyzeEntryPoints, createCompileFn) {
            var _this = this;
            this.lockFile.lock(function () { return _this.doExecute(analyzeEntryPoints, createCompileFn); });
        };
        return SingleProcessExecutorSync;
    }(SingleProcessorExecutorBase));
    exports.SingleProcessExecutorSync = SingleProcessExecutorSync;
    /**
     * An `Executor` that processes all tasks serially, but still completes asynchronously.
     */
    var SingleProcessExecutorAsync = /** @class */ (function (_super) {
        tslib_1.__extends(SingleProcessExecutorAsync, _super);
        function SingleProcessExecutorAsync(logger, lockFile, createTaskCompletedCallback) {
            var _this = _super.call(this, logger, createTaskCompletedCallback) || this;
            _this.lockFile = lockFile;
            return _this;
        }
        SingleProcessExecutorAsync.prototype.execute = function (analyzeEntryPoints, createCompileFn) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.lockFile.lock(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, this.doExecute(analyzeEntryPoints, createCompileFn)];
                            }); }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return SingleProcessExecutorAsync;
    }(SingleProcessorExecutorBase));
    exports.SingleProcessExecutorAsync = SingleProcessExecutorAsync;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlX3Byb2Nlc3NfZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvZXhlY3V0aW9uL3NpbmdsZV9wcm9jZXNzX2V4ZWN1dG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQVNIO1FBQ0UscUNBQ1ksTUFBYyxFQUFVLDJCQUF3RDtZQUFoRixXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUFHLENBQUM7UUFFaEcsK0NBQVMsR0FBVCxVQUFVLGtCQUF3QyxFQUFFLGVBQWdDO1lBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFtQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksTUFBRyxDQUFDLENBQUM7WUFFL0QsSUFBTSxTQUFTLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEUsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLGNBQU8sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRTNELHFCQUFxQjtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU3QixPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO2dCQUNuQyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFHLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZCxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1lBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBc0IsUUFBUSxPQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0gsa0NBQUM7SUFBRCxDQUFDLEFBekJELElBeUJDO0lBekJxQixrRUFBMkI7SUEyQmpEOztPQUVHO0lBQ0g7UUFBK0MscURBQTJCO1FBQ3hFLG1DQUNJLE1BQWMsRUFBVSxRQUFvQixFQUM1QywyQkFBd0Q7WUFGNUQsWUFHRSxrQkFBTSxNQUFNLEVBQUUsMkJBQTJCLENBQUMsU0FDM0M7WUFIMkIsY0FBUSxHQUFSLFFBQVEsQ0FBWTs7UUFHaEQsQ0FBQztRQUNELDJDQUFPLEdBQVAsVUFBUSxrQkFBd0MsRUFBRSxlQUFnQztZQUFsRixpQkFFQztZQURDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUNILGdDQUFDO0lBQUQsQ0FBQyxBQVRELENBQStDLDJCQUEyQixHQVN6RTtJQVRZLDhEQUF5QjtJQVd0Qzs7T0FFRztJQUNIO1FBQWdELHNEQUEyQjtRQUN6RSxvQ0FDSSxNQUFjLEVBQVUsUUFBcUIsRUFDN0MsMkJBQXdEO1lBRjVELFlBR0Usa0JBQU0sTUFBTSxFQUFFLDJCQUEyQixDQUFDLFNBQzNDO1lBSDJCLGNBQVEsR0FBUixRQUFRLENBQWE7O1FBR2pELENBQUM7UUFDSyw0Q0FBTyxHQUFiLFVBQWMsa0JBQXdDLEVBQUUsZUFBZ0M7Ozs7O2dDQUV0RixxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQ0FBWSxzQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxFQUFBO3FDQUFBLENBQUMsRUFBQTs7NEJBQXpGLFNBQXlGLENBQUM7Ozs7O1NBQzNGO1FBQ0gsaUNBQUM7SUFBRCxDQUFDLEFBVkQsQ0FBZ0QsMkJBQTJCLEdBVTFFO0lBVlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FzeW5jTG9ja2VyfSBmcm9tICcuLi9sb2NraW5nL2FzeW5jX2xvY2tlcic7XG5pbXBvcnQge1N5bmNMb2NrZXJ9IGZyb20gJy4uL2xvY2tpbmcvc3luY19sb2NrZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcblxuaW1wb3J0IHtBbmFseXplRW50cnlQb2ludHNGbiwgQ3JlYXRlQ29tcGlsZUZuLCBFeGVjdXRvcn0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtDcmVhdGVUYXNrQ29tcGxldGVkQ2FsbGJhY2t9IGZyb20gJy4vdGFza3MvYXBpJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpbmdsZVByb2Nlc3NvckV4ZWN1dG9yQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlciwgcHJpdmF0ZSBjcmVhdGVUYXNrQ29tcGxldGVkQ2FsbGJhY2s6IENyZWF0ZVRhc2tDb21wbGV0ZWRDYWxsYmFjaykge31cblxuICBkb0V4ZWN1dGUoYW5hbHl6ZUVudHJ5UG9pbnRzOiBBbmFseXplRW50cnlQb2ludHNGbiwgY3JlYXRlQ29tcGlsZUZuOiBDcmVhdGVDb21waWxlRm4pOlxuICAgICAgdm9pZHxQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgUnVubmluZyBuZ2NjIG9uICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5gKTtcblxuICAgIGNvbnN0IHRhc2tRdWV1ZSA9IGFuYWx5emVFbnRyeVBvaW50cygpO1xuICAgIGNvbnN0IG9uVGFza0NvbXBsZXRlZCA9IHRoaXMuY3JlYXRlVGFza0NvbXBsZXRlZENhbGxiYWNrKHRhc2tRdWV1ZSk7XG4gICAgY29uc3QgY29tcGlsZSA9IGNyZWF0ZUNvbXBpbGVGbigoKSA9PiB7fSwgb25UYXNrQ29tcGxldGVkKTtcblxuICAgIC8vIFByb2Nlc3MgYWxsIHRhc2tzLlxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdQcm9jZXNzaW5nIHRhc2tzLi4uJyk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIHdoaWxlICghdGFza1F1ZXVlLmFsbFRhc2tzQ29tcGxldGVkKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGFza1F1ZXVlLmdldE5leHRUYXNrKCkhO1xuICAgICAgY29tcGlsZSh0YXNrKTtcbiAgICAgIHRhc2tRdWV1ZS5tYXJrQXNDb21wbGV0ZWQodGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBQcm9jZXNzZWQgdGFza3MgaW4gJHtkdXJhdGlvbn1zLmApO1xuICB9XG59XG5cbi8qKlxuICogQW4gYEV4ZWN1dG9yYCB0aGF0IHByb2Nlc3NlcyBhbGwgdGFza3Mgc2VyaWFsbHkgYW5kIGNvbXBsZXRlcyBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlUHJvY2Vzc0V4ZWN1dG9yU3luYyBleHRlbmRzIFNpbmdsZVByb2Nlc3NvckV4ZWN1dG9yQmFzZSBpbXBsZW1lbnRzIEV4ZWN1dG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBsb2dnZXI6IExvZ2dlciwgcHJpdmF0ZSBsb2NrRmlsZTogU3luY0xvY2tlcixcbiAgICAgIGNyZWF0ZVRhc2tDb21wbGV0ZWRDYWxsYmFjazogQ3JlYXRlVGFza0NvbXBsZXRlZENhbGxiYWNrKSB7XG4gICAgc3VwZXIobG9nZ2VyLCBjcmVhdGVUYXNrQ29tcGxldGVkQ2FsbGJhY2spO1xuICB9XG4gIGV4ZWN1dGUoYW5hbHl6ZUVudHJ5UG9pbnRzOiBBbmFseXplRW50cnlQb2ludHNGbiwgY3JlYXRlQ29tcGlsZUZuOiBDcmVhdGVDb21waWxlRm4pOiB2b2lkIHtcbiAgICB0aGlzLmxvY2tGaWxlLmxvY2soKCkgPT4gdGhpcy5kb0V4ZWN1dGUoYW5hbHl6ZUVudHJ5UG9pbnRzLCBjcmVhdGVDb21waWxlRm4pKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGBFeGVjdXRvcmAgdGhhdCBwcm9jZXNzZXMgYWxsIHRhc2tzIHNlcmlhbGx5LCBidXQgc3RpbGwgY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlUHJvY2Vzc0V4ZWN1dG9yQXN5bmMgZXh0ZW5kcyBTaW5nbGVQcm9jZXNzb3JFeGVjdXRvckJhc2UgaW1wbGVtZW50cyBFeGVjdXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9nZ2VyOiBMb2dnZXIsIHByaXZhdGUgbG9ja0ZpbGU6IEFzeW5jTG9ja2VyLFxuICAgICAgY3JlYXRlVGFza0NvbXBsZXRlZENhbGxiYWNrOiBDcmVhdGVUYXNrQ29tcGxldGVkQ2FsbGJhY2spIHtcbiAgICBzdXBlcihsb2dnZXIsIGNyZWF0ZVRhc2tDb21wbGV0ZWRDYWxsYmFjayk7XG4gIH1cbiAgYXN5bmMgZXhlY3V0ZShhbmFseXplRW50cnlQb2ludHM6IEFuYWx5emVFbnRyeVBvaW50c0ZuLCBjcmVhdGVDb21waWxlRm46IENyZWF0ZUNvbXBpbGVGbik6XG4gICAgICBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmxvY2tGaWxlLmxvY2soYXN5bmMgKCkgPT4gdGhpcy5kb0V4ZWN1dGUoYW5hbHl6ZUVudHJ5UG9pbnRzLCBjcmVhdGVDb21waWxlRm4pKTtcbiAgfVxufVxuIl19