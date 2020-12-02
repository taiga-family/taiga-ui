"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const interface_1 = require("../tree/interface");
const null_1 = require("../tree/null");
const static_1 = require("../tree/static");
const schematic_1 = require("./schematic");
class UnknownUrlSourceProtocol extends core_1.BaseException {
    constructor(url) { super(`Unknown Protocol on url "${url}".`); }
}
exports.UnknownUrlSourceProtocol = UnknownUrlSourceProtocol;
class UnknownCollectionException extends core_1.BaseException {
    constructor(name) { super(`Unknown collection "${name}".`); }
}
exports.UnknownCollectionException = UnknownCollectionException;
class CircularCollectionException extends core_1.BaseException {
    constructor(name) {
        super(`Circular collection reference "${name}".`);
    }
}
exports.CircularCollectionException = CircularCollectionException;
class UnknownSchematicException extends core_1.BaseException {
    constructor(name, collection) {
        super(`Schematic "${name}" not found in collection "${collection.name}".`);
    }
}
exports.UnknownSchematicException = UnknownSchematicException;
class PrivateSchematicException extends core_1.BaseException {
    constructor(name, collection) {
        super(`Schematic "${name}" not found in collection "${collection.name}".`);
    }
}
exports.PrivateSchematicException = PrivateSchematicException;
class SchematicEngineConflictingException extends core_1.BaseException {
    constructor() { super(`A schematic was called from a different engine as its parent.`); }
}
exports.SchematicEngineConflictingException = SchematicEngineConflictingException;
class UnregisteredTaskException extends core_1.BaseException {
    constructor(name, schematic) {
        const addendum = schematic ? ` in schematic "${schematic.name}"` : '';
        super(`Unregistered task "${name}"${addendum}.`);
    }
}
exports.UnregisteredTaskException = UnregisteredTaskException;
class UnknownTaskDependencyException extends core_1.BaseException {
    constructor(id) {
        super(`Unknown task dependency [ID: ${id.id}].`);
    }
}
exports.UnknownTaskDependencyException = UnknownTaskDependencyException;
class CollectionImpl {
    constructor(_description, _engine, baseDescriptions) {
        this._description = _description;
        this._engine = _engine;
        this.baseDescriptions = baseDescriptions;
    }
    get description() { return this._description; }
    get name() { return this.description.name || '<unknown>'; }
    createSchematic(name, allowPrivate = false) {
        return this._engine.createSchematic(name, this, allowPrivate);
    }
    listSchematicNames() {
        return this._engine.listSchematicNames(this);
    }
}
exports.CollectionImpl = CollectionImpl;
class TaskScheduler {
    constructor(_context) {
        this._context = _context;
        this._queue = new core_1.PriorityQueue((x, y) => x.priority - y.priority);
        this._taskIds = new Map();
    }
    _calculatePriority(dependencies) {
        if (dependencies.size === 0) {
            return 0;
        }
        const prio = [...dependencies].reduce((prio, task) => prio + task.priority, 1);
        return prio;
    }
    _mapDependencies(dependencies) {
        if (!dependencies) {
            return new Set();
        }
        const tasks = dependencies.map(dep => {
            const task = this._taskIds.get(dep);
            if (!task) {
                throw new UnknownTaskDependencyException(dep);
            }
            return task;
        });
        return new Set(tasks);
    }
    schedule(taskConfiguration) {
        const dependencies = this._mapDependencies(taskConfiguration.dependencies);
        const priority = this._calculatePriority(dependencies);
        const task = {
            id: TaskScheduler._taskIdCounter++,
            priority,
            configuration: taskConfiguration,
            context: this._context,
        };
        this._queue.push(task);
        const id = { id: task.id };
        this._taskIds.set(id, task);
        return id;
    }
    finalize() {
        const tasks = this._queue.toArray();
        this._queue.clear();
        this._taskIds.clear();
        return tasks;
    }
}
exports.TaskScheduler = TaskScheduler;
TaskScheduler._taskIdCounter = 1;
class SchematicEngine {
    constructor(_host, _workflow) {
        this._host = _host;
        this._workflow = _workflow;
        this._collectionCache = new Map();
        this._schematicCache = new Map();
        this._taskSchedulers = new Array();
    }
    get workflow() { return this._workflow || null; }
    get defaultMergeStrategy() { return this._host.defaultMergeStrategy || interface_1.MergeStrategy.Default; }
    createCollection(name) {
        let collection = this._collectionCache.get(name);
        if (collection) {
            return collection;
        }
        const [description, bases] = this._createCollectionDescription(name);
        collection = new CollectionImpl(description, this, bases);
        this._collectionCache.set(name, collection);
        this._schematicCache.set(name, new Map());
        return collection;
    }
    _createCollectionDescription(name, parentNames) {
        const description = this._host.createCollectionDescription(name);
        if (!description) {
            throw new UnknownCollectionException(name);
        }
        if (parentNames && parentNames.has(description.name)) {
            throw new CircularCollectionException(name);
        }
        const bases = new Array();
        if (description.extends) {
            parentNames = (parentNames || new Set()).add(description.name);
            for (const baseName of description.extends) {
                const [base, baseBases] = this._createCollectionDescription(baseName, new Set(parentNames));
                bases.unshift(base, ...baseBases);
            }
        }
        return [description, bases];
    }
    createContext(schematic, parent, executionOptions) {
        // Check for inconsistencies.
        if (parent && parent.engine && parent.engine !== this) {
            throw new SchematicEngineConflictingException();
        }
        let interactive = true;
        if (executionOptions && executionOptions.interactive != undefined) {
            interactive = executionOptions.interactive;
        }
        else if (parent && parent.interactive != undefined) {
            interactive = parent.interactive;
        }
        let context = {
            debug: parent && parent.debug || false,
            engine: this,
            logger: (parent && parent.logger && parent.logger.createChild(schematic.description.name))
                || new core_1.logging.NullLogger(),
            schematic,
            strategy: (parent && parent.strategy !== undefined)
                ? parent.strategy : this.defaultMergeStrategy,
            interactive,
            addTask,
        };
        const maybeNewContext = this._host.transformContext(context);
        if (maybeNewContext) {
            context = maybeNewContext;
        }
        const taskScheduler = new TaskScheduler(context);
        const host = this._host;
        this._taskSchedulers.push(taskScheduler);
        function addTask(task, dependencies) {
            const config = task.toConfiguration();
            if (!host.hasTaskExecutor(config.name)) {
                throw new UnregisteredTaskException(config.name, schematic.description);
            }
            config.dependencies = config.dependencies || [];
            if (dependencies) {
                config.dependencies.unshift(...dependencies);
            }
            return taskScheduler.schedule(config);
        }
        return context;
    }
    createSchematic(name, collection, allowPrivate = false) {
        const collectionImpl = this._collectionCache.get(collection.description.name);
        const schematicMap = this._schematicCache.get(collection.description.name);
        if (!collectionImpl || !schematicMap || collectionImpl !== collection) {
            // This is weird, maybe the collection was created by another engine?
            throw new UnknownCollectionException(collection.description.name);
        }
        let schematic = schematicMap.get(name);
        if (schematic) {
            return schematic;
        }
        let collectionDescription = collection.description;
        let description = this._host.createSchematicDescription(name, collection.description);
        if (!description) {
            if (collection.baseDescriptions) {
                for (const base of collection.baseDescriptions) {
                    description = this._host.createSchematicDescription(name, base);
                    if (description) {
                        collectionDescription = base;
                        break;
                    }
                }
            }
            if (!description) {
                // Report the error for the top level schematic collection
                throw new UnknownSchematicException(name, collection.description);
            }
        }
        if (description.private && !allowPrivate) {
            throw new PrivateSchematicException(name, collection.description);
        }
        const factory = this._host.getSchematicRuleFactory(description, collectionDescription);
        schematic = new schematic_1.SchematicImpl(description, factory, collection, this);
        schematicMap.set(name, schematic);
        return schematic;
    }
    listSchematicNames(collection) {
        const names = this._host.listSchematicNames(collection.description);
        if (collection.baseDescriptions) {
            for (const base of collection.baseDescriptions) {
                names.push(...this._host.listSchematicNames(base));
            }
        }
        // remove duplicates
        return [...new Set(names)].sort();
    }
    transformOptions(schematic, options, context) {
        return this._host.transformOptions(schematic.description, options, context);
    }
    createSourceFromUrl(url, context) {
        switch (url.protocol) {
            case 'null:': return () => new null_1.NullTree();
            case 'empty:': return () => static_1.empty();
            default:
                const hostSource = this._host.createSourceFromUrl(url, context);
                if (!hostSource) {
                    throw new UnknownUrlSourceProtocol(url.toString());
                }
                return hostSource;
        }
    }
    executePostTasks() {
        const executors = new Map();
        const taskObservable = rxjs_1.from(this._taskSchedulers)
            .pipe(operators_1.concatMap(scheduler => scheduler.finalize()), operators_1.concatMap(task => {
            const { name, options } = task.configuration;
            const executor = executors.get(name);
            if (executor) {
                return executor(options, task.context);
            }
            return this._host.createTaskExecutor(name)
                .pipe(operators_1.concatMap(executor => {
                executors.set(name, executor);
                return executor(options, task.context);
            }));
        }));
        return taskObservable;
    }
}
exports.SchematicEngine = SchematicEngine;
