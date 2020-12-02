"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configParser_1 = require("./configParser");
/**
 * The taskScheduler keeps track of the spec files that needs to run next
 * and which task is running what.
 */
class TaskQueue {
    // A queue of specs for a particular capacity
    constructor(capabilities, specLists) {
        this.capabilities = capabilities;
        this.specLists = specLists;
        this.numRunningInstances = 0;
        this.specsIndex = 0;
        this.maxInstance = capabilities.maxInstances || 1;
    }
}
exports.TaskQueue = TaskQueue;
class TaskScheduler {
    /**
     * A scheduler to keep track of specs that need running and their associated
     * capabilities. It will suggest a task (combination of capabilities and spec)
     * to run while observing the following config rules:
     * multiCapabilities, shardTestFiles, and maxInstance.
     * Precondition: multiCapabilities is a non-empty array
     * (capabilities and getCapabilities will both be ignored)
     *
     * @constructor
     * @param {Object} config parsed from the config file
     */
    constructor(config) {
        this.config = config;
        let excludes = configParser_1.ConfigParser.resolveFilePatterns(config.exclude, true, config.configDir);
        let allSpecs = configParser_1.ConfigParser.resolveFilePatterns(configParser_1.ConfigParser.getSpecs(config), false, config.configDir)
            .filter((path) => {
            return excludes.indexOf(path) < 0;
        });
        let taskQueues = [];
        config.multiCapabilities.forEach((capabilities) => {
            let capabilitiesSpecs = allSpecs;
            if (capabilities.specs) {
                let capabilitiesSpecificSpecs = configParser_1.ConfigParser.resolveFilePatterns(capabilities.specs, false, config.configDir);
                capabilitiesSpecs = capabilitiesSpecs.concat(capabilitiesSpecificSpecs);
            }
            if (capabilities.exclude) {
                let capabilitiesSpecExcludes = configParser_1.ConfigParser.resolveFilePatterns(capabilities.exclude, true, config.configDir);
                capabilitiesSpecs = capabilitiesSpecs.filter((path) => {
                    return capabilitiesSpecExcludes.indexOf(path) < 0;
                });
            }
            let specLists = [];
            // If we shard, we return an array of one element arrays, each containing
            // the spec file. If we don't shard, we return an one element array
            // containing an array of all the spec files
            if (capabilities.shardTestFiles) {
                capabilitiesSpecs.forEach((spec) => {
                    specLists.push([spec]);
                });
            }
            else {
                specLists.push(capabilitiesSpecs);
            }
            capabilities.count = capabilities.count || 1;
            for (let i = 0; i < capabilities.count; ++i) {
                taskQueues.push(new TaskQueue(capabilities, specLists));
            }
        });
        this.taskQueues = taskQueues;
        this.rotationIndex = 0; // Helps suggestions to rotate amongst capabilities
    }
    /**
     * Get the next task that is allowed to run without going over maxInstance.
     *
     * @return {{capabilities: Object, specs: Array.<string>, taskId: string,
     * done: function()}}
     */
    nextTask() {
        for (let i = 0; i < this.taskQueues.length; ++i) {
            let rotatedIndex = ((i + this.rotationIndex) % this.taskQueues.length);
            let queue = this.taskQueues[rotatedIndex];
            if (queue.numRunningInstances < queue.maxInstance &&
                queue.specsIndex < queue.specLists.length) {
                this.rotationIndex = rotatedIndex + 1;
                ++queue.numRunningInstances;
                let taskId = '' + rotatedIndex + 1;
                if (queue.specLists.length > 1) {
                    taskId += '-' + queue.specsIndex;
                }
                let specs = queue.specLists[queue.specsIndex];
                ++queue.specsIndex;
                return {
                    capabilities: queue.capabilities,
                    specs: specs,
                    taskId: taskId,
                    done: function () {
                        --queue.numRunningInstances;
                    }
                };
            }
        }
        return null;
    }
    /**
     * Get the number of tasks left to run or are currently running.
     *
     * @return {number}
     */
    numTasksOutstanding() {
        let count = 0;
        this.taskQueues.forEach((queue) => {
            count += queue.numRunningInstances + (queue.specLists.length - queue.specsIndex);
        });
        return count;
    }
    /**
     * Get maximum number of concurrent tasks required/permitted.
     *
     * @return {number}
     */
    maxConcurrentTasks() {
        if (this.config.maxSessions && this.config.maxSessions > 0) {
            return this.config.maxSessions;
        }
        else {
            let count = 0;
            this.taskQueues.forEach((queue) => {
                count += Math.min(queue.maxInstance, queue.specLists.length);
            });
            return count;
        }
    }
    /**
     * Returns number of tasks currently running.
     *
     * @return {number}
     */
    countActiveTasks() {
        let count = 0;
        this.taskQueues.forEach((queue) => {
            count += queue.numRunningInstances;
        });
        return count;
    }
}
exports.TaskScheduler = TaskScheduler;
//# sourceMappingURL=taskScheduler.js.map