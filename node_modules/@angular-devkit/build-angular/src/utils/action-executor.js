"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const jest_worker_1 = require("jest-worker");
const os = require("os");
const path = require("path");
const v8 = require("v8");
const action_cache_1 = require("./action-cache");
const workers_1 = require("./workers");
const hasThreadSupport = (() => {
    try {
        require('worker_threads');
        return true;
    }
    catch (_a) {
        return false;
    }
})();
// This is used to normalize serialization messaging across threads and processes
// Threads use the structured clone algorithm which handles more types
// Processes use JSON which is much more limited
const serialize = v8.serialize;
let workerFile = require.resolve('./process-bundle');
workerFile =
    path.extname(workerFile) === '.ts'
        ? require.resolve('./process-bundle-bootstrap')
        : workerFile;
class BundleActionExecutor {
    constructor(workerOptions, integrityAlgorithm, sizeThreshold = 32 * 1024) {
        this.workerOptions = workerOptions;
        this.sizeThreshold = sizeThreshold;
        if (workerOptions.cachePath) {
            this.cache = new action_cache_1.BundleActionCache(workerOptions.cachePath, integrityAlgorithm);
        }
    }
    static executeMethod(worker, method, input) {
        return worker[method](input);
    }
    ensureLarge() {
        if (this.largeWorker) {
            return this.largeWorker;
        }
        // larger files are processed in a separate process to limit memory usage in the main process
        return (this.largeWorker = new jest_worker_1.default(workerFile, {
            exposedMethods: ['process', 'inlineLocales'],
            setupArgs: [[...serialize(this.workerOptions)]],
            numWorkers: workers_1.maxWorkers,
        }));
    }
    ensureSmall() {
        if (this.smallWorker) {
            return this.smallWorker;
        }
        // small files are processed in a limited number of threads to improve speed
        // The limited number also prevents a large increase in memory usage for an otherwise short operation
        return (this.smallWorker = new jest_worker_1.default(workerFile, {
            exposedMethods: ['process', 'inlineLocales'],
            setupArgs: hasThreadSupport ? [this.workerOptions] : [[...serialize(this.workerOptions)]],
            numWorkers: os.cpus().length < 2 ? 1 : 2,
            enableWorkerThreads: hasThreadSupport,
        }));
    }
    executeAction(method, action) {
        // code.length is not an exact byte count but close enough for this
        if (action.code.length > this.sizeThreshold) {
            return BundleActionExecutor.executeMethod(this.ensureLarge(), method, action);
        }
        else {
            return BundleActionExecutor.executeMethod(this.ensureSmall(), method, action);
        }
    }
    async process(action) {
        if (this.cache) {
            const cacheKeys = this.cache.generateCacheKeys(action);
            action.cacheKeys = cacheKeys;
            // Try to get cached data, if it fails fallback to processing
            try {
                const cachedResult = await this.cache.getCachedBundleResult(action);
                if (cachedResult) {
                    return cachedResult;
                }
            }
            catch (_a) { }
        }
        return this.executeAction('process', action);
    }
    processAll(actions) {
        return BundleActionExecutor.executeAll(actions, action => this.process(action));
    }
    async inline(action) {
        return this.executeAction('inlineLocales', action);
    }
    inlineAll(actions) {
        return BundleActionExecutor.executeAll(actions, action => this.inline(action));
    }
    static async *executeAll(actions, executor) {
        const executions = new Map();
        for (const action of actions) {
            const execution = executor(action);
            executions.set(execution, execution.then(result => {
                executions.delete(execution);
                return result;
            }));
        }
        while (executions.size > 0) {
            yield Promise.race(executions.values());
        }
    }
    async stop() {
        if (this.largeWorker) {
            await this.largeWorker.end();
        }
        if (this.smallWorker) {
            await this.smallWorker.end();
        }
    }
}
exports.BundleActionExecutor = BundleActionExecutor;
