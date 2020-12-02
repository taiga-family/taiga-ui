"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_module_engine_host_1 = require("./node-module-engine-host");
/**
 * An EngineHost that uses a registry to super seed locations of collection.json files, but
 * revert back to using node modules resolution. This is done for testing.
 */
class NodeModulesTestEngineHost extends node_module_engine_host_1.NodeModulesEngineHost {
    constructor() {
        super(...arguments);
        this._collections = new Map();
        this._tasks = [];
    }
    get tasks() { return this._tasks; }
    clearTasks() { this._tasks = []; }
    registerCollection(name, path) {
        this._collections.set(name, path);
    }
    transformContext(context) {
        const oldAddTask = context.addTask;
        context.addTask = (task, dependencies) => {
            this._tasks.push(task.toConfiguration());
            return oldAddTask.call(context, task, dependencies);
        };
        return context;
    }
    _resolveCollectionPath(name) {
        const maybePath = this._collections.get(name);
        if (maybePath) {
            return maybePath;
        }
        return super._resolveCollectionPath(name);
    }
}
exports.NodeModulesTestEngineHost = NodeModulesTestEngineHost;
