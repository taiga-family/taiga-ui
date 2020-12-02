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
const engine_1 = require("../engine");
const exception_1 = require("../exception/exception");
const formats_1 = require("../formats");
const dryrun_1 = require("../sink/dryrun");
const host_1 = require("../sink/host");
const host_tree_1 = require("../tree/host-tree");
/**
 * Base class for workflows. Even without abstract methods, this class should not be used without
 * surrounding some initialization for the registry and host. This class only adds life cycle and
 * dryrun/force support. You need to provide any registry and task executors that you need to
 * support.
 * See {@see NodeWorkflow} implementation for how to make a specialized subclass of this.
 * TODO: add default set of CoreSchemaRegistry transforms. Once the job refactor is done, use that
 *       as the support for tasks.
 *
 * @public
 */
class BaseWorkflow {
    constructor(options) {
        this._reporter = new rxjs_1.Subject();
        this._lifeCycle = new rxjs_1.Subject();
        this._host = options.host;
        this._engineHost = options.engineHost;
        if (options.registry) {
            this._registry = options.registry;
        }
        else {
            this._registry = new core_1.schema.CoreSchemaRegistry(formats_1.standardFormats);
            this._registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
        }
        this._engine = new engine_1.SchematicEngine(this._engineHost, this);
        this._context = [];
        this._force = options.force || false;
        this._dryRun = options.dryRun || false;
    }
    get context() {
        const maybeContext = this._context[this._context.length - 1];
        if (!maybeContext) {
            throw new Error('Cannot get context when workflow is not executing...');
        }
        return maybeContext;
    }
    get engine() {
        return this._engine;
    }
    get engineHost() {
        return this._engineHost;
    }
    get registry() {
        return this._registry;
    }
    get reporter() {
        return this._reporter.asObservable();
    }
    get lifeCycle() {
        return this._lifeCycle.asObservable();
    }
    _createSinks() {
        let error = false;
        const dryRunSink = new dryrun_1.DryRunSink(this._host, this._force);
        const dryRunSubscriber = dryRunSink.reporter.subscribe(event => {
            this._reporter.next(event);
            error = error || (event.kind == 'error');
        });
        // We need two sinks if we want to output what will happen, and actually do the work.
        return [
            dryRunSink,
            // Add a custom sink that clean ourselves and throws an error if an error happened.
            {
                commit() {
                    dryRunSubscriber.unsubscribe();
                    if (error) {
                        return rxjs_1.throwError(new exception_1.UnsuccessfulWorkflowExecution());
                    }
                    return rxjs_1.of();
                },
            },
            // Only add a HostSink if this is not a dryRun.
            ...(!this._dryRun ? [new host_1.HostSink(this._host, this._force)] : []),
        ];
    }
    execute(options) {
        const parentContext = this._context[this._context.length - 1];
        if (!parentContext) {
            this._lifeCycle.next({ kind: 'start' });
        }
        /** Create the collection and the schematic. */
        const collection = this._engine.createCollection(options.collection);
        // Only allow private schematics if called from the same collection.
        const allowPrivate = options.allowPrivate
            || (parentContext && parentContext.collection === options.collection);
        const schematic = collection.createSchematic(options.schematic, allowPrivate);
        const sinks = this._createSinks();
        this._lifeCycle.next({ kind: 'workflow-start' });
        const context = {
            ...options,
            debug: options.debug || false,
            logger: options.logger || (parentContext && parentContext.logger) || new core_1.logging.NullLogger(),
            parentContext,
        };
        this._context.push(context);
        return schematic.call(options.options, rxjs_1.of(new host_tree_1.HostTree(this._host)), { logger: context.logger }).pipe(operators_1.concatMap((tree) => {
            // Process all sinks.
            return rxjs_1.concat(rxjs_1.from(sinks).pipe(operators_1.concatMap(sink => sink.commit(tree)), operators_1.ignoreElements()), rxjs_1.of(tree));
        }), operators_1.concatMap(() => {
            if (this._dryRun) {
                return rxjs_1.EMPTY;
            }
            this._lifeCycle.next({ kind: 'post-tasks-start' });
            return this._engine.executePostTasks()
                .pipe(operators_1.tap({ complete: () => this._lifeCycle.next({ kind: 'post-tasks-end' }) }), operators_1.defaultIfEmpty(), operators_1.last());
        }), operators_1.tap({ complete: () => {
                this._lifeCycle.next({ kind: 'workflow-end' });
                this._context.pop();
                if (this._context.length == 0) {
                    this._lifeCycle.next({ kind: 'end' });
                }
            } }));
    }
}
exports.BaseWorkflow = BaseWorkflow;
