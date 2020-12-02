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
        define("@angular/compiler-cli/ngcc/src/execution/cluster/master", ["require", "exports", "tslib", "cluster", "@angular/compiler-cli/ngcc/src/execution/tasks/utils", "@angular/compiler-cli/ngcc/src/execution/cluster/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /// <reference types="node" />
    var cluster = require("cluster");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/execution/tasks/utils");
    var utils_2 = require("@angular/compiler-cli/ngcc/src/execution/cluster/utils");
    /**
     * The cluster master is responsible for analyzing all entry-points, planning the work that needs to
     * be done, distributing it to worker-processes and collecting/post-processing the results.
     */
    var ClusterMaster = /** @class */ (function () {
        function ClusterMaster(maxWorkerCount, fileSystem, logger, fileWriter, pkgJsonUpdater, analyzeEntryPoints, createTaskCompletedCallback) {
            this.maxWorkerCount = maxWorkerCount;
            this.fileSystem = fileSystem;
            this.logger = logger;
            this.fileWriter = fileWriter;
            this.pkgJsonUpdater = pkgJsonUpdater;
            this.finishedDeferred = new utils_2.Deferred();
            this.processingStartTime = -1;
            this.taskAssignments = new Map();
            this.remainingRespawnAttempts = 3;
            if (!cluster.isMaster) {
                throw new Error('Tried to instantiate `ClusterMaster` on a worker process.');
            }
            // Set the worker entry-point
            cluster.setupMaster({ exec: this.fileSystem.resolve(__dirname, 'worker.js') });
            this.taskQueue = analyzeEntryPoints();
            this.onTaskCompleted = createTaskCompletedCallback(this.taskQueue);
        }
        ClusterMaster.prototype.run = function () {
            var _this = this;
            if (this.taskQueue.allTasksCompleted) {
                return Promise.resolve();
            }
            // Set up listeners for worker events (emitted on `cluster`).
            cluster.on('online', this.wrapEventHandler(function (worker) { return _this.onWorkerOnline(worker.id); }));
            cluster.on('message', this.wrapEventHandler(function (worker, msg) { return _this.onWorkerMessage(worker.id, msg); }));
            cluster.on('exit', this.wrapEventHandler(function (worker, code, signal) { return _this.onWorkerExit(worker, code, signal); }));
            // Since we have pending tasks at the very minimum we need a single worker.
            cluster.fork();
            return this.finishedDeferred.promise.then(function () { return _this.stopWorkers(); }, function (err) {
                _this.stopWorkers();
                return Promise.reject(err);
            });
        };
        /** Try to find available (idle) workers and assign them available (non-blocked) tasks. */
        ClusterMaster.prototype.maybeDistributeWork = function () {
            var e_1, _a;
            var isWorkerAvailable = false;
            // First, check whether all tasks have been completed.
            if (this.taskQueue.allTasksCompleted) {
                var duration = Math.round((Date.now() - this.processingStartTime) / 100) / 10;
                this.logger.debug("Processed tasks in " + duration + "s.");
                return this.finishedDeferred.resolve();
            }
            try {
                // Look for available workers and available tasks to assign to them.
                for (var _b = tslib_1.__values(Array.from(this.taskAssignments)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), workerId = _d[0], assignedTask = _d[1];
                    if (assignedTask !== null) {
                        // This worker already has a job; check other workers.
                        continue;
                    }
                    else {
                        // This worker is available.
                        isWorkerAvailable = true;
                    }
                    // This worker needs a job. See if any are available.
                    var task = this.taskQueue.getNextTask();
                    if (task === null) {
                        // No suitable work available right now.
                        break;
                    }
                    // Process the next task on the worker.
                    this.taskAssignments.set(workerId, { task: task });
                    utils_2.sendMessageToWorker(workerId, { type: 'process-task', task: task });
                    isWorkerAvailable = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!isWorkerAvailable) {
                var spawnedWorkerCount = Object.keys(cluster.workers).length;
                if (spawnedWorkerCount < this.maxWorkerCount) {
                    this.logger.debug('Spawning another worker process as there is more work to be done.');
                    cluster.fork();
                }
                else {
                    // If there are no available workers or no available tasks, log (for debugging purposes).
                    this.logger.debug("All " + spawnedWorkerCount + " workers are currently busy and cannot take on more work.");
                }
            }
            else {
                var busyWorkers = Array.from(this.taskAssignments)
                    .filter(function (_a) {
                    var _b = tslib_1.__read(_a, 2), _workerId = _b[0], task = _b[1];
                    return task !== null;
                })
                    .map(function (_a) {
                    var _b = tslib_1.__read(_a, 1), workerId = _b[0];
                    return workerId;
                });
                var totalWorkerCount = this.taskAssignments.size;
                var idleWorkerCount = totalWorkerCount - busyWorkers.length;
                this.logger.debug("No assignments for " + idleWorkerCount + " idle (out of " + totalWorkerCount + " total) " +
                    ("workers. Busy workers: " + busyWorkers.join(', ')));
                if (busyWorkers.length === 0) {
                    // This is a bug:
                    // All workers are idle (meaning no tasks are in progress) and `taskQueue.allTasksCompleted`
                    // is `false`, but there is still no assignable work.
                    throw new Error('There are still unprocessed tasks in the queue and no tasks are currently in ' +
                        ("progress, yet the queue did not return any available tasks: " + this.taskQueue));
                }
            }
        };
        /** Handle a worker's exiting. (Might be intentional or not.) */
        ClusterMaster.prototype.onWorkerExit = function (worker, code, signal) {
            // If the worker's exiting was intentional, nothing to do.
            if (worker.exitedAfterDisconnect)
                return;
            // The worker exited unexpectedly: Determine it's status and take an appropriate action.
            var assignment = this.taskAssignments.get(worker.id);
            this.taskAssignments.delete(worker.id);
            this.logger.warn("Worker #" + worker.id + " exited unexpectedly (code: " + code + " | signal: " + signal + ").\n" +
                ("  Current task: " + ((assignment == null) ? '-' : utils_1.stringifyTask(assignment.task)) + "\n") +
                ("  Current phase: " + ((assignment == null) ? '-' :
                    (assignment.files == null) ? 'compiling' : 'writing files')));
            if (assignment == null) {
                // The crashed worker process was not in the middle of a task:
                // Just spawn another process.
                this.logger.debug("Spawning another worker process to replace #" + worker.id + "...");
                cluster.fork();
            }
            else {
                var task = assignment.task, files = assignment.files;
                if (files != null) {
                    // The crashed worker process was in the middle of writing transformed files:
                    // Revert any changes before re-processing the task.
                    this.logger.debug("Reverting " + files.length + " transformed files...");
                    this.fileWriter.revertBundle(task.entryPoint, files, task.formatPropertiesToMarkAsProcessed);
                }
                // The crashed worker process was in the middle of a task:
                // Re-add the task back to the queue.
                this.taskQueue.markAsUnprocessed(task);
                // The crashing might be a result of increased memory consumption by ngcc.
                // Do not spawn another process, unless this was the last worker process.
                var spawnedWorkerCount = Object.keys(cluster.workers).length;
                if (spawnedWorkerCount > 0) {
                    this.logger.debug("Not spawning another worker process to replace #" + worker.id + ". Continuing with " + spawnedWorkerCount + " workers...");
                    this.maybeDistributeWork();
                }
                else if (this.remainingRespawnAttempts > 0) {
                    this.logger.debug("Spawning another worker process to replace #" + worker.id + "...");
                    this.remainingRespawnAttempts--;
                    cluster.fork();
                }
                else {
                    throw new Error('All worker processes crashed and attempts to re-spawn them failed. ' +
                        'Please check your system and ensure there is enough memory available.');
                }
            }
        };
        /** Handle a message from a worker. */
        ClusterMaster.prototype.onWorkerMessage = function (workerId, msg) {
            if (!this.taskAssignments.has(workerId)) {
                var knownWorkers = Array.from(this.taskAssignments.keys());
                throw new Error("Received message from unknown worker #" + workerId + " (known workers: " +
                    (knownWorkers.join(', ') + "): " + JSON.stringify(msg)));
            }
            switch (msg.type) {
                case 'error':
                    throw new Error("Error on worker #" + workerId + ": " + msg.error);
                case 'task-completed':
                    return this.onWorkerTaskCompleted(workerId, msg);
                case 'transformed-files':
                    return this.onWorkerTransformedFiles(workerId, msg);
                case 'update-package-json':
                    return this.onWorkerUpdatePackageJson(workerId, msg);
                default:
                    throw new Error("Invalid message received from worker #" + workerId + ": " + JSON.stringify(msg));
            }
        };
        /** Handle a worker's coming online. */
        ClusterMaster.prototype.onWorkerOnline = function (workerId) {
            if (this.taskAssignments.has(workerId)) {
                throw new Error("Invariant violated: Worker #" + workerId + " came online more than once.");
            }
            if (this.processingStartTime === -1) {
                this.logger.debug('Processing tasks...');
                this.processingStartTime = Date.now();
            }
            this.taskAssignments.set(workerId, null);
            this.maybeDistributeWork();
        };
        /** Handle a worker's having completed their assigned task. */
        ClusterMaster.prototype.onWorkerTaskCompleted = function (workerId, msg) {
            var assignment = this.taskAssignments.get(workerId) || null;
            if (assignment === null) {
                throw new Error("Expected worker #" + workerId + " to have a task assigned, while handling message: " +
                    JSON.stringify(msg));
            }
            this.onTaskCompleted(assignment.task, msg.outcome, msg.message);
            this.taskQueue.markAsCompleted(assignment.task);
            this.taskAssignments.set(workerId, null);
            this.maybeDistributeWork();
        };
        /** Handle a worker's message regarding the files transformed while processing its task. */
        ClusterMaster.prototype.onWorkerTransformedFiles = function (workerId, msg) {
            var assignment = this.taskAssignments.get(workerId) || null;
            if (assignment === null) {
                throw new Error("Expected worker #" + workerId + " to have a task assigned, while handling message: " +
                    JSON.stringify(msg));
            }
            var oldFiles = assignment.files;
            var newFiles = msg.files;
            if (oldFiles !== undefined) {
                throw new Error("Worker #" + workerId + " reported transformed files more than once.\n" +
                    ("  Old files (" + oldFiles.length + "): [" + oldFiles.join(', ') + "]\n") +
                    ("  New files (" + newFiles.length + "): [" + newFiles.join(', ') + "]\n"));
            }
            assignment.files = newFiles;
        };
        /** Handle a worker's request to update a `package.json` file. */
        ClusterMaster.prototype.onWorkerUpdatePackageJson = function (workerId, msg) {
            var assignment = this.taskAssignments.get(workerId) || null;
            if (assignment === null) {
                throw new Error("Expected worker #" + workerId + " to have a task assigned, while handling message: " +
                    JSON.stringify(msg));
            }
            var entryPoint = assignment.task.entryPoint;
            var expectedPackageJsonPath = this.fileSystem.resolve(entryPoint.path, 'package.json');
            if (expectedPackageJsonPath !== msg.packageJsonPath) {
                throw new Error("Received '" + msg.type + "' message from worker #" + workerId + " for '" + msg.packageJsonPath + "', " +
                    ("but was expecting '" + expectedPackageJsonPath + "' (based on task assignment)."));
            }
            // NOTE: Although the change in the parsed `package.json` will be reflected in tasks objects
            //       locally and thus also in future `process-task` messages sent to worker processes, any
            //       processes already running and processing a task for the same entry-point will not get
            //       the change.
            //       Do not rely on having an up-to-date `package.json` representation in worker processes.
            //       In other words, task processing should only rely on the info that was there when the
            //       file was initially parsed (during entry-point analysis) and not on the info that might
            //       be added later (during task processing).
            this.pkgJsonUpdater.writeChanges(msg.changes, msg.packageJsonPath, entryPoint.packageJson);
        };
        /** Stop all workers and stop listening on cluster events. */
        ClusterMaster.prototype.stopWorkers = function () {
            var workers = Object.values(cluster.workers);
            this.logger.debug("Stopping " + workers.length + " workers...");
            cluster.removeAllListeners();
            workers.forEach(function (worker) { return worker.kill(); });
        };
        /**
         * Wrap an event handler to ensure that `finishedDeferred` will be rejected on error (regardless
         * if the handler completes synchronously or asynchronously).
         */
        ClusterMaster.prototype.wrapEventHandler = function (fn) {
            var _this = this;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var err_1;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fn.apply(void 0, tslib_1.__spread(args))];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                err_1 = _a.sent();
                                this.finishedDeferred.reject(err_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        };
        return ClusterMaster;
    }());
    exports.ClusterMaster = ClusterMaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2V4ZWN1dGlvbi9jbHVzdGVyL21hc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4QkFBOEI7SUFFOUIsaUNBQW1DO0lBUW5DLDhFQUE2QztJQUc3QyxnRkFBc0Q7SUFHdEQ7OztPQUdHO0lBQ0g7UUFRRSx1QkFDWSxjQUFzQixFQUFVLFVBQXNCLEVBQVUsTUFBYyxFQUM5RSxVQUFzQixFQUFVLGNBQWtDLEVBQzFFLGtCQUF3QyxFQUN4QywyQkFBd0Q7WUFIaEQsbUJBQWMsR0FBZCxjQUFjLENBQVE7WUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUM5RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1lBQVUsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1lBVHRFLHFCQUFnQixHQUFHLElBQUksZ0JBQVEsRUFBUSxDQUFDO1lBQ3hDLHdCQUFtQixHQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVELENBQUM7WUFHakYsNkJBQXdCLEdBQUcsQ0FBQyxDQUFDO1lBT25DLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7YUFDOUU7WUFFRCw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLDJCQUEy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QUExRixpQkFTQztZQVBDLE9BQU87Z0JBQU8sY0FBYTtxQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO29CQUFiLHlCQUFhOzs7Ozs7OztnQ0FFdkIscUJBQU0sRUFBRSxnQ0FBSSxJQUFJLElBQUM7O2dDQUFqQixTQUFpQixDQUFDOzs7O2dDQUVsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUcsQ0FBQyxDQUFDOzs7Ozs7YUFFckMsQ0FBQztRQUNKLENBQUM7UUFDSCxvQkFBQztJQUFELENBQUMsQUEvU0QsSUErU0M7SUEvU1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiIC8+XG5cbmltcG9ydCAqIGFzIGNsdXN0ZXIgZnJvbSAnY2x1c3Rlcic7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vLi4vbG9nZ2luZy9sb2dnZXInO1xuaW1wb3J0IHtGaWxlV3JpdGVyfSBmcm9tICcuLi8uLi93cml0aW5nL2ZpbGVfd3JpdGVyJztcbmltcG9ydCB7UGFja2FnZUpzb25VcGRhdGVyfSBmcm9tICcuLi8uLi93cml0aW5nL3BhY2thZ2VfanNvbl91cGRhdGVyJztcbmltcG9ydCB7QW5hbHl6ZUVudHJ5UG9pbnRzRm59IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge0NyZWF0ZVRhc2tDb21wbGV0ZWRDYWxsYmFjaywgVGFzaywgVGFza0NvbXBsZXRlZENhbGxiYWNrLCBUYXNrUXVldWV9IGZyb20gJy4uL3Rhc2tzL2FwaSc7XG5pbXBvcnQge3N0cmluZ2lmeVRhc2t9IGZyb20gJy4uL3Rhc2tzL3V0aWxzJztcblxuaW1wb3J0IHtNZXNzYWdlRnJvbVdvcmtlciwgVGFza0NvbXBsZXRlZE1lc3NhZ2UsIFRyYW5zZm9ybWVkRmlsZXNNZXNzYWdlLCBVcGRhdGVQYWNrYWdlSnNvbk1lc3NhZ2V9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7RGVmZXJyZWQsIHNlbmRNZXNzYWdlVG9Xb3JrZXJ9IGZyb20gJy4vdXRpbHMnO1xuXG5cbi8qKlxuICogVGhlIGNsdXN0ZXIgbWFzdGVyIGlzIHJlc3BvbnNpYmxlIGZvciBhbmFseXppbmcgYWxsIGVudHJ5LXBvaW50cywgcGxhbm5pbmcgdGhlIHdvcmsgdGhhdCBuZWVkcyB0b1xuICogYmUgZG9uZSwgZGlzdHJpYnV0aW5nIGl0IHRvIHdvcmtlci1wcm9jZXNzZXMgYW5kIGNvbGxlY3RpbmcvcG9zdC1wcm9jZXNzaW5nIHRoZSByZXN1bHRzLlxuICovXG5leHBvcnQgY2xhc3MgQ2x1c3Rlck1hc3RlciB7XG4gIHByaXZhdGUgZmluaXNoZWREZWZlcnJlZCA9IG5ldyBEZWZlcnJlZDx2b2lkPigpO1xuICBwcml2YXRlIHByb2Nlc3NpbmdTdGFydFRpbWU6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHRhc2tBc3NpZ25tZW50cyA9IG5ldyBNYXA8bnVtYmVyLCB7dGFzazogVGFzaywgZmlsZXM/OiBBYnNvbHV0ZUZzUGF0aFtdfXxudWxsPigpO1xuICBwcml2YXRlIHRhc2tRdWV1ZTogVGFza1F1ZXVlO1xuICBwcml2YXRlIG9uVGFza0NvbXBsZXRlZDogVGFza0NvbXBsZXRlZENhbGxiYWNrO1xuICBwcml2YXRlIHJlbWFpbmluZ1Jlc3Bhd25BdHRlbXB0cyA9IDM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIG1heFdvcmtlckNvdW50OiBudW1iZXIsIHByaXZhdGUgZmlsZVN5c3RlbTogRmlsZVN5c3RlbSwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcixcbiAgICAgIHByaXZhdGUgZmlsZVdyaXRlcjogRmlsZVdyaXRlciwgcHJpdmF0ZSBwa2dKc29uVXBkYXRlcjogUGFja2FnZUpzb25VcGRhdGVyLFxuICAgICAgYW5hbHl6ZUVudHJ5UG9pbnRzOiBBbmFseXplRW50cnlQb2ludHNGbixcbiAgICAgIGNyZWF0ZVRhc2tDb21wbGV0ZWRDYWxsYmFjazogQ3JlYXRlVGFza0NvbXBsZXRlZENhbGxiYWNrKSB7XG4gICAgaWYgKCFjbHVzdGVyLmlzTWFzdGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIGluc3RhbnRpYXRlIGBDbHVzdGVyTWFzdGVyYCBvbiBhIHdvcmtlciBwcm9jZXNzLicpO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgd29ya2VyIGVudHJ5LXBvaW50XG4gICAgY2x1c3Rlci5zZXR1cE1hc3Rlcih7ZXhlYzogdGhpcy5maWxlU3lzdGVtLnJlc29sdmUoX19kaXJuYW1lLCAnd29ya2VyLmpzJyl9KTtcblxuICAgIHRoaXMudGFza1F1ZXVlID0gYW5hbHl6ZUVudHJ5UG9pbnRzKCk7XG4gICAgdGhpcy5vblRhc2tDb21wbGV0ZWQgPSBjcmVhdGVUYXNrQ29tcGxldGVkQ2FsbGJhY2sodGhpcy50YXNrUXVldWUpO1xuICB9XG5cbiAgcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnRhc2tRdWV1ZS5hbGxUYXNrc0NvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBsaXN0ZW5lcnMgZm9yIHdvcmtlciBldmVudHMgKGVtaXR0ZWQgb24gYGNsdXN0ZXJgKS5cbiAgICBjbHVzdGVyLm9uKCdvbmxpbmUnLCB0aGlzLndyYXBFdmVudEhhbmRsZXIod29ya2VyID0+IHRoaXMub25Xb3JrZXJPbmxpbmUod29ya2VyLmlkKSkpO1xuXG4gICAgY2x1c3Rlci5vbihcbiAgICAgICAgJ21lc3NhZ2UnLCB0aGlzLndyYXBFdmVudEhhbmRsZXIoKHdvcmtlciwgbXNnKSA9PiB0aGlzLm9uV29ya2VyTWVzc2FnZSh3b3JrZXIuaWQsIG1zZykpKTtcblxuICAgIGNsdXN0ZXIub24oXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgdGhpcy53cmFwRXZlbnRIYW5kbGVyKCh3b3JrZXIsIGNvZGUsIHNpZ25hbCkgPT4gdGhpcy5vbldvcmtlckV4aXQod29ya2VyLCBjb2RlLCBzaWduYWwpKSk7XG5cbiAgICAvLyBTaW5jZSB3ZSBoYXZlIHBlbmRpbmcgdGFza3MgYXQgdGhlIHZlcnkgbWluaW11bSB3ZSBuZWVkIGEgc2luZ2xlIHdvcmtlci5cbiAgICBjbHVzdGVyLmZvcmsoKTtcblxuICAgIHJldHVybiB0aGlzLmZpbmlzaGVkRGVmZXJyZWQucHJvbWlzZS50aGVuKCgpID0+IHRoaXMuc3RvcFdvcmtlcnMoKSwgZXJyID0+IHtcbiAgICAgIHRoaXMuc3RvcFdvcmtlcnMoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFRyeSB0byBmaW5kIGF2YWlsYWJsZSAoaWRsZSkgd29ya2VycyBhbmQgYXNzaWduIHRoZW0gYXZhaWxhYmxlIChub24tYmxvY2tlZCkgdGFza3MuICovXG4gIHByaXZhdGUgbWF5YmVEaXN0cmlidXRlV29yaygpOiB2b2lkIHtcbiAgICBsZXQgaXNXb3JrZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuICAgIC8vIEZpcnN0LCBjaGVjayB3aGV0aGVyIGFsbCB0YXNrcyBoYXZlIGJlZW4gY29tcGxldGVkLlxuICAgIGlmICh0aGlzLnRhc2tRdWV1ZS5hbGxUYXNrc0NvbXBsZXRlZCkge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gdGhpcy5wcm9jZXNzaW5nU3RhcnRUaW1lKSAvIDEwMCkgLyAxMDtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBQcm9jZXNzZWQgdGFza3MgaW4gJHtkdXJhdGlvbn1zLmApO1xuXG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hlZERlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvLyBMb29rIGZvciBhdmFpbGFibGUgd29ya2VycyBhbmQgYXZhaWxhYmxlIHRhc2tzIHRvIGFzc2lnbiB0byB0aGVtLlxuICAgIGZvciAoY29uc3QgW3dvcmtlcklkLCBhc3NpZ25lZFRhc2tdIG9mIEFycmF5LmZyb20odGhpcy50YXNrQXNzaWdubWVudHMpKSB7XG4gICAgICBpZiAoYXNzaWduZWRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgd29ya2VyIGFscmVhZHkgaGFzIGEgam9iOyBjaGVjayBvdGhlciB3b3JrZXJzLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoaXMgd29ya2VyIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgaXNXb3JrZXJBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIHdvcmtlciBuZWVkcyBhIGpvYi4gU2VlIGlmIGFueSBhcmUgYXZhaWxhYmxlLlxuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFza1F1ZXVlLmdldE5leHRUYXNrKCk7XG4gICAgICBpZiAodGFzayA9PT0gbnVsbCkge1xuICAgICAgICAvLyBObyBzdWl0YWJsZSB3b3JrIGF2YWlsYWJsZSByaWdodCBub3cuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBQcm9jZXNzIHRoZSBuZXh0IHRhc2sgb24gdGhlIHdvcmtlci5cbiAgICAgIHRoaXMudGFza0Fzc2lnbm1lbnRzLnNldCh3b3JrZXJJZCwge3Rhc2t9KTtcbiAgICAgIHNlbmRNZXNzYWdlVG9Xb3JrZXIod29ya2VySWQsIHt0eXBlOiAncHJvY2Vzcy10YXNrJywgdGFza30pO1xuXG4gICAgICBpc1dvcmtlckF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaXNXb3JrZXJBdmFpbGFibGUpIHtcbiAgICAgIGNvbnN0IHNwYXduZWRXb3JrZXJDb3VudCA9IE9iamVjdC5rZXlzKGNsdXN0ZXIud29ya2VycykubGVuZ3RoO1xuICAgICAgaWYgKHNwYXduZWRXb3JrZXJDb3VudCA8IHRoaXMubWF4V29ya2VyQ291bnQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ1NwYXduaW5nIGFub3RoZXIgd29ya2VyIHByb2Nlc3MgYXMgdGhlcmUgaXMgbW9yZSB3b3JrIHRvIGJlIGRvbmUuJyk7XG4gICAgICAgIGNsdXN0ZXIuZm9yaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGF2YWlsYWJsZSB3b3JrZXJzIG9yIG5vIGF2YWlsYWJsZSB0YXNrcywgbG9nIChmb3IgZGVidWdnaW5nIHB1cnBvc2VzKS5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgQWxsICR7c3Bhd25lZFdvcmtlckNvdW50fSB3b3JrZXJzIGFyZSBjdXJyZW50bHkgYnVzeSBhbmQgY2Fubm90IHRha2Ugb24gbW9yZSB3b3JrLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBidXN5V29ya2VycyA9IEFycmF5LmZyb20odGhpcy50YXNrQXNzaWdubWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChbX3dvcmtlcklkLCB0YXNrXSkgPT4gdGFzayAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKFt3b3JrZXJJZF0pID0+IHdvcmtlcklkKTtcbiAgICAgIGNvbnN0IHRvdGFsV29ya2VyQ291bnQgPSB0aGlzLnRhc2tBc3NpZ25tZW50cy5zaXplO1xuICAgICAgY29uc3QgaWRsZVdvcmtlckNvdW50ID0gdG90YWxXb3JrZXJDb3VudCAtIGJ1c3lXb3JrZXJzLmxlbmd0aDtcblxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXG4gICAgICAgICAgYE5vIGFzc2lnbm1lbnRzIGZvciAke2lkbGVXb3JrZXJDb3VudH0gaWRsZSAob3V0IG9mICR7dG90YWxXb3JrZXJDb3VudH0gdG90YWwpIGAgK1xuICAgICAgICAgIGB3b3JrZXJzLiBCdXN5IHdvcmtlcnM6ICR7YnVzeVdvcmtlcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgaWYgKGJ1c3lXb3JrZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBUaGlzIGlzIGEgYnVnOlxuICAgICAgICAvLyBBbGwgd29ya2VycyBhcmUgaWRsZSAobWVhbmluZyBubyB0YXNrcyBhcmUgaW4gcHJvZ3Jlc3MpIGFuZCBgdGFza1F1ZXVlLmFsbFRhc2tzQ29tcGxldGVkYFxuICAgICAgICAvLyBpcyBgZmFsc2VgLCBidXQgdGhlcmUgaXMgc3RpbGwgbm8gYXNzaWduYWJsZSB3b3JrLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgYXJlIHN0aWxsIHVucHJvY2Vzc2VkIHRhc2tzIGluIHRoZSBxdWV1ZSBhbmQgbm8gdGFza3MgYXJlIGN1cnJlbnRseSBpbiAnICtcbiAgICAgICAgICAgIGBwcm9ncmVzcywgeWV0IHRoZSBxdWV1ZSBkaWQgbm90IHJldHVybiBhbnkgYXZhaWxhYmxlIHRhc2tzOiAke3RoaXMudGFza1F1ZXVlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGUgYSB3b3JrZXIncyBleGl0aW5nLiAoTWlnaHQgYmUgaW50ZW50aW9uYWwgb3Igbm90LikgKi9cbiAgcHJpdmF0ZSBvbldvcmtlckV4aXQod29ya2VyOiBjbHVzdGVyLldvcmtlciwgY29kZTogbnVtYmVyfG51bGwsIHNpZ25hbDogc3RyaW5nfG51bGwpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgd29ya2VyJ3MgZXhpdGluZyB3YXMgaW50ZW50aW9uYWwsIG5vdGhpbmcgdG8gZG8uXG4gICAgaWYgKHdvcmtlci5leGl0ZWRBZnRlckRpc2Nvbm5lY3QpIHJldHVybjtcblxuICAgIC8vIFRoZSB3b3JrZXIgZXhpdGVkIHVuZXhwZWN0ZWRseTogRGV0ZXJtaW5lIGl0J3Mgc3RhdHVzIGFuZCB0YWtlIGFuIGFwcHJvcHJpYXRlIGFjdGlvbi5cbiAgICBjb25zdCBhc3NpZ25tZW50ID0gdGhpcy50YXNrQXNzaWdubWVudHMuZ2V0KHdvcmtlci5pZCk7XG4gICAgdGhpcy50YXNrQXNzaWdubWVudHMuZGVsZXRlKHdvcmtlci5pZCk7XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKFxuICAgICAgICBgV29ya2VyICMke3dvcmtlci5pZH0gZXhpdGVkIHVuZXhwZWN0ZWRseSAoY29kZTogJHtjb2RlfSB8IHNpZ25hbDogJHtzaWduYWx9KS5cXG5gICtcbiAgICAgICAgYCAgQ3VycmVudCB0YXNrOiAkeyhhc3NpZ25tZW50ID09IG51bGwpID8gJy0nIDogc3RyaW5naWZ5VGFzayhhc3NpZ25tZW50LnRhc2spfVxcbmAgK1xuICAgICAgICBgICBDdXJyZW50IHBoYXNlOiAke1xuICAgICAgICAgICAgKGFzc2lnbm1lbnQgPT0gbnVsbCkgPyAnLScgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXNzaWdubWVudC5maWxlcyA9PSBudWxsKSA/ICdjb21waWxpbmcnIDogJ3dyaXRpbmcgZmlsZXMnfWApO1xuXG4gICAgaWYgKGFzc2lnbm1lbnQgPT0gbnVsbCkge1xuICAgICAgLy8gVGhlIGNyYXNoZWQgd29ya2VyIHByb2Nlc3Mgd2FzIG5vdCBpbiB0aGUgbWlkZGxlIG9mIGEgdGFzazpcbiAgICAgIC8vIEp1c3Qgc3Bhd24gYW5vdGhlciBwcm9jZXNzLlxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFNwYXduaW5nIGFub3RoZXIgd29ya2VyIHByb2Nlc3MgdG8gcmVwbGFjZSAjJHt3b3JrZXIuaWR9Li4uYCk7XG4gICAgICBjbHVzdGVyLmZvcmsoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qge3Rhc2ssIGZpbGVzfSA9IGFzc2lnbm1lbnQ7XG5cbiAgICAgIGlmIChmaWxlcyAhPSBudWxsKSB7XG4gICAgICAgIC8vIFRoZSBjcmFzaGVkIHdvcmtlciBwcm9jZXNzIHdhcyBpbiB0aGUgbWlkZGxlIG9mIHdyaXRpbmcgdHJhbnNmb3JtZWQgZmlsZXM6XG4gICAgICAgIC8vIFJldmVydCBhbnkgY2hhbmdlcyBiZWZvcmUgcmUtcHJvY2Vzc2luZyB0aGUgdGFzay5cbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFJldmVydGluZyAke2ZpbGVzLmxlbmd0aH0gdHJhbnNmb3JtZWQgZmlsZXMuLi5gKTtcbiAgICAgICAgdGhpcy5maWxlV3JpdGVyLnJldmVydEJ1bmRsZShcbiAgICAgICAgICAgIHRhc2suZW50cnlQb2ludCwgZmlsZXMsIHRhc2suZm9ybWF0UHJvcGVydGllc1RvTWFya0FzUHJvY2Vzc2VkKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNyYXNoZWQgd29ya2VyIHByb2Nlc3Mgd2FzIGluIHRoZSBtaWRkbGUgb2YgYSB0YXNrOlxuICAgICAgLy8gUmUtYWRkIHRoZSB0YXNrIGJhY2sgdG8gdGhlIHF1ZXVlLlxuICAgICAgdGhpcy50YXNrUXVldWUubWFya0FzVW5wcm9jZXNzZWQodGFzayk7XG5cbiAgICAgIC8vIFRoZSBjcmFzaGluZyBtaWdodCBiZSBhIHJlc3VsdCBvZiBpbmNyZWFzZWQgbWVtb3J5IGNvbnN1bXB0aW9uIGJ5IG5nY2MuXG4gICAgICAvLyBEbyBub3Qgc3Bhd24gYW5vdGhlciBwcm9jZXNzLCB1bmxlc3MgdGhpcyB3YXMgdGhlIGxhc3Qgd29ya2VyIHByb2Nlc3MuXG4gICAgICBjb25zdCBzcGF3bmVkV29ya2VyQ291bnQgPSBPYmplY3Qua2V5cyhjbHVzdGVyLndvcmtlcnMpLmxlbmd0aDtcbiAgICAgIGlmIChzcGF3bmVkV29ya2VyQ291bnQgPiAwKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBOb3Qgc3Bhd25pbmcgYW5vdGhlciB3b3JrZXIgcHJvY2VzcyB0byByZXBsYWNlICMke1xuICAgICAgICAgICAgd29ya2VyLmlkfS4gQ29udGludWluZyB3aXRoICR7c3Bhd25lZFdvcmtlckNvdW50fSB3b3JrZXJzLi4uYCk7XG4gICAgICAgIHRoaXMubWF5YmVEaXN0cmlidXRlV29yaygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnJlbWFpbmluZ1Jlc3Bhd25BdHRlbXB0cyA+IDApIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFNwYXduaW5nIGFub3RoZXIgd29ya2VyIHByb2Nlc3MgdG8gcmVwbGFjZSAjJHt3b3JrZXIuaWR9Li4uYCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nUmVzcGF3bkF0dGVtcHRzLS07XG4gICAgICAgIGNsdXN0ZXIuZm9yaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0FsbCB3b3JrZXIgcHJvY2Vzc2VzIGNyYXNoZWQgYW5kIGF0dGVtcHRzIHRvIHJlLXNwYXduIHRoZW0gZmFpbGVkLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgY2hlY2sgeW91ciBzeXN0ZW0gYW5kIGVuc3VyZSB0aGVyZSBpcyBlbm91Z2ggbWVtb3J5IGF2YWlsYWJsZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlIGEgbWVzc2FnZSBmcm9tIGEgd29ya2VyLiAqL1xuICBwcml2YXRlIG9uV29ya2VyTWVzc2FnZSh3b3JrZXJJZDogbnVtYmVyLCBtc2c6IE1lc3NhZ2VGcm9tV29ya2VyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRhc2tBc3NpZ25tZW50cy5oYXMod29ya2VySWQpKSB7XG4gICAgICBjb25zdCBrbm93bldvcmtlcnMgPSBBcnJheS5mcm9tKHRoaXMudGFza0Fzc2lnbm1lbnRzLmtleXMoKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSB1bmtub3duIHdvcmtlciAjJHt3b3JrZXJJZH0gKGtub3duIHdvcmtlcnM6IGAgK1xuICAgICAgICAgIGAke2tub3duV29ya2Vycy5qb2luKCcsICcpfSk6ICR7SlNPTi5zdHJpbmdpZnkobXNnKX1gKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3Igb24gd29ya2VyICMke3dvcmtlcklkfTogJHttc2cuZXJyb3J9YCk7XG4gICAgICBjYXNlICd0YXNrLWNvbXBsZXRlZCc6XG4gICAgICAgIHJldHVybiB0aGlzLm9uV29ya2VyVGFza0NvbXBsZXRlZCh3b3JrZXJJZCwgbXNnKTtcbiAgICAgIGNhc2UgJ3RyYW5zZm9ybWVkLWZpbGVzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub25Xb3JrZXJUcmFuc2Zvcm1lZEZpbGVzKHdvcmtlcklkLCBtc2cpO1xuICAgICAgY2FzZSAndXBkYXRlLXBhY2thZ2UtanNvbic6XG4gICAgICAgIHJldHVybiB0aGlzLm9uV29ya2VyVXBkYXRlUGFja2FnZUpzb24od29ya2VySWQsIG1zZyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkIGZyb20gd29ya2VyICMke3dvcmtlcklkfTogJHtKU09OLnN0cmluZ2lmeShtc2cpfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGUgYSB3b3JrZXIncyBjb21pbmcgb25saW5lLiAqL1xuICBwcml2YXRlIG9uV29ya2VyT25saW5lKHdvcmtlcklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YXNrQXNzaWdubWVudHMuaGFzKHdvcmtlcklkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhcmlhbnQgdmlvbGF0ZWQ6IFdvcmtlciAjJHt3b3JrZXJJZH0gY2FtZSBvbmxpbmUgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2Vzc2luZ1N0YXJ0VGltZSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdQcm9jZXNzaW5nIHRhc2tzLi4uJyk7XG4gICAgICB0aGlzLnByb2Nlc3NpbmdTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHRoaXMudGFza0Fzc2lnbm1lbnRzLnNldCh3b3JrZXJJZCwgbnVsbCk7XG4gICAgdGhpcy5tYXliZURpc3RyaWJ1dGVXb3JrKCk7XG4gIH1cblxuICAvKiogSGFuZGxlIGEgd29ya2VyJ3MgaGF2aW5nIGNvbXBsZXRlZCB0aGVpciBhc3NpZ25lZCB0YXNrLiAqL1xuICBwcml2YXRlIG9uV29ya2VyVGFza0NvbXBsZXRlZCh3b3JrZXJJZDogbnVtYmVyLCBtc2c6IFRhc2tDb21wbGV0ZWRNZXNzYWdlKTogdm9pZCB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IHRoaXMudGFza0Fzc2lnbm1lbnRzLmdldCh3b3JrZXJJZCkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NpZ25tZW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdGVkIHdvcmtlciAjJHt3b3JrZXJJZH0gdG8gaGF2ZSBhIHRhc2sgYXNzaWduZWQsIHdoaWxlIGhhbmRsaW5nIG1lc3NhZ2U6IGAgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH1cblxuICAgIHRoaXMub25UYXNrQ29tcGxldGVkKGFzc2lnbm1lbnQudGFzaywgbXNnLm91dGNvbWUsIG1zZy5tZXNzYWdlKTtcblxuICAgIHRoaXMudGFza1F1ZXVlLm1hcmtBc0NvbXBsZXRlZChhc3NpZ25tZW50LnRhc2spO1xuICAgIHRoaXMudGFza0Fzc2lnbm1lbnRzLnNldCh3b3JrZXJJZCwgbnVsbCk7XG4gICAgdGhpcy5tYXliZURpc3RyaWJ1dGVXb3JrKCk7XG4gIH1cblxuICAvKiogSGFuZGxlIGEgd29ya2VyJ3MgbWVzc2FnZSByZWdhcmRpbmcgdGhlIGZpbGVzIHRyYW5zZm9ybWVkIHdoaWxlIHByb2Nlc3NpbmcgaXRzIHRhc2suICovXG4gIHByaXZhdGUgb25Xb3JrZXJUcmFuc2Zvcm1lZEZpbGVzKHdvcmtlcklkOiBudW1iZXIsIG1zZzogVHJhbnNmb3JtZWRGaWxlc01lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gdGhpcy50YXNrQXNzaWdubWVudHMuZ2V0KHdvcmtlcklkKSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc2lnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXhwZWN0ZWQgd29ya2VyICMke3dvcmtlcklkfSB0byBoYXZlIGEgdGFzayBhc3NpZ25lZCwgd2hpbGUgaGFuZGxpbmcgbWVzc2FnZTogYCArXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkRmlsZXMgPSBhc3NpZ25tZW50LmZpbGVzO1xuICAgIGNvbnN0IG5ld0ZpbGVzID0gbXNnLmZpbGVzO1xuXG4gICAgaWYgKG9sZEZpbGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgV29ya2VyICMke3dvcmtlcklkfSByZXBvcnRlZCB0cmFuc2Zvcm1lZCBmaWxlcyBtb3JlIHRoYW4gb25jZS5cXG5gICtcbiAgICAgICAgICBgICBPbGQgZmlsZXMgKCR7b2xkRmlsZXMubGVuZ3RofSk6IFske29sZEZpbGVzLmpvaW4oJywgJyl9XVxcbmAgK1xuICAgICAgICAgIGAgIE5ldyBmaWxlcyAoJHtuZXdGaWxlcy5sZW5ndGh9KTogWyR7bmV3RmlsZXMuam9pbignLCAnKX1dXFxuYCk7XG4gICAgfVxuXG4gICAgYXNzaWdubWVudC5maWxlcyA9IG5ld0ZpbGVzO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBhIHdvcmtlcidzIHJlcXVlc3QgdG8gdXBkYXRlIGEgYHBhY2thZ2UuanNvbmAgZmlsZS4gKi9cbiAgcHJpdmF0ZSBvbldvcmtlclVwZGF0ZVBhY2thZ2VKc29uKHdvcmtlcklkOiBudW1iZXIsIG1zZzogVXBkYXRlUGFja2FnZUpzb25NZXNzYWdlKTogdm9pZCB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IHRoaXMudGFza0Fzc2lnbm1lbnRzLmdldCh3b3JrZXJJZCkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NpZ25tZW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdGVkIHdvcmtlciAjJHt3b3JrZXJJZH0gdG8gaGF2ZSBhIHRhc2sgYXNzaWduZWQsIHdoaWxlIGhhbmRsaW5nIG1lc3NhZ2U6IGAgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5UG9pbnQgPSBhc3NpZ25tZW50LnRhc2suZW50cnlQb2ludDtcbiAgICBjb25zdCBleHBlY3RlZFBhY2thZ2VKc29uUGF0aCA9IHRoaXMuZmlsZVN5c3RlbS5yZXNvbHZlKGVudHJ5UG9pbnQucGF0aCwgJ3BhY2thZ2UuanNvbicpO1xuXG4gICAgaWYgKGV4cGVjdGVkUGFja2FnZUpzb25QYXRoICE9PSBtc2cucGFja2FnZUpzb25QYXRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFJlY2VpdmVkICcke21zZy50eXBlfScgbWVzc2FnZSBmcm9tIHdvcmtlciAjJHt3b3JrZXJJZH0gZm9yICcke21zZy5wYWNrYWdlSnNvblBhdGh9JywgYCArXG4gICAgICAgICAgYGJ1dCB3YXMgZXhwZWN0aW5nICcke2V4cGVjdGVkUGFja2FnZUpzb25QYXRofScgKGJhc2VkIG9uIHRhc2sgYXNzaWdubWVudCkuYCk7XG4gICAgfVxuXG4gICAgLy8gTk9URTogQWx0aG91Z2ggdGhlIGNoYW5nZSBpbiB0aGUgcGFyc2VkIGBwYWNrYWdlLmpzb25gIHdpbGwgYmUgcmVmbGVjdGVkIGluIHRhc2tzIG9iamVjdHNcbiAgICAvLyAgICAgICBsb2NhbGx5IGFuZCB0aHVzIGFsc28gaW4gZnV0dXJlIGBwcm9jZXNzLXRhc2tgIG1lc3NhZ2VzIHNlbnQgdG8gd29ya2VyIHByb2Nlc3NlcywgYW55XG4gICAgLy8gICAgICAgcHJvY2Vzc2VzIGFscmVhZHkgcnVubmluZyBhbmQgcHJvY2Vzc2luZyBhIHRhc2sgZm9yIHRoZSBzYW1lIGVudHJ5LXBvaW50IHdpbGwgbm90IGdldFxuICAgIC8vICAgICAgIHRoZSBjaGFuZ2UuXG4gICAgLy8gICAgICAgRG8gbm90IHJlbHkgb24gaGF2aW5nIGFuIHVwLXRvLWRhdGUgYHBhY2thZ2UuanNvbmAgcmVwcmVzZW50YXRpb24gaW4gd29ya2VyIHByb2Nlc3Nlcy5cbiAgICAvLyAgICAgICBJbiBvdGhlciB3b3JkcywgdGFzayBwcm9jZXNzaW5nIHNob3VsZCBvbmx5IHJlbHkgb24gdGhlIGluZm8gdGhhdCB3YXMgdGhlcmUgd2hlbiB0aGVcbiAgICAvLyAgICAgICBmaWxlIHdhcyBpbml0aWFsbHkgcGFyc2VkIChkdXJpbmcgZW50cnktcG9pbnQgYW5hbHlzaXMpIGFuZCBub3Qgb24gdGhlIGluZm8gdGhhdCBtaWdodFxuICAgIC8vICAgICAgIGJlIGFkZGVkIGxhdGVyIChkdXJpbmcgdGFzayBwcm9jZXNzaW5nKS5cbiAgICB0aGlzLnBrZ0pzb25VcGRhdGVyLndyaXRlQ2hhbmdlcyhtc2cuY2hhbmdlcywgbXNnLnBhY2thZ2VKc29uUGF0aCwgZW50cnlQb2ludC5wYWNrYWdlSnNvbik7XG4gIH1cblxuICAvKiogU3RvcCBhbGwgd29ya2VycyBhbmQgc3RvcCBsaXN0ZW5pbmcgb24gY2x1c3RlciBldmVudHMuICovXG4gIHByaXZhdGUgc3RvcFdvcmtlcnMoKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2VycyA9IE9iamVjdC52YWx1ZXMoY2x1c3Rlci53b3JrZXJzKSBhcyBjbHVzdGVyLldvcmtlcltdO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBTdG9wcGluZyAke3dvcmtlcnMubGVuZ3RofSB3b3JrZXJzLi4uYCk7XG5cbiAgICBjbHVzdGVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHdvcmtlcnMuZm9yRWFjaCh3b3JrZXIgPT4gd29ya2VyLmtpbGwoKSk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcCBhbiBldmVudCBoYW5kbGVyIHRvIGVuc3VyZSB0aGF0IGBmaW5pc2hlZERlZmVycmVkYCB3aWxsIGJlIHJlamVjdGVkIG9uIGVycm9yIChyZWdhcmRsZXNzXG4gICAqIGlmIHRoZSBoYW5kbGVyIGNvbXBsZXRlcyBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5KS5cbiAgICovXG4gIHByaXZhdGUgd3JhcEV2ZW50SGFuZGxlcjxBcmdzIGV4dGVuZHMgdW5rbm93bltdPihmbjogKC4uLmFyZ3M6IEFyZ3MpID0+IHZvaWR8UHJvbWlzZTx2b2lkPik6XG4gICAgICAoLi4uYXJnczogQXJncykgPT4gUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGFzeW5jICguLi5hcmdzOiBBcmdzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmZpbmlzaGVkRGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19