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
const api_1 = require("./api");
const internal_1 = require("./internal");
const schedule_by_name_1 = require("./schedule-by-name");
// tslint:disable-next-line: no-big-function
function createBuilder(fn) {
    const cjh = core_1.experimental.jobs.createJobHandler;
    const handler = cjh((options, context) => {
        const scheduler = context.scheduler;
        const progressChannel = context.createChannel('progress');
        const logChannel = context.createChannel('log');
        const analyticsChannel = context.createChannel('analytics');
        let currentState = api_1.BuilderProgressState.Stopped;
        const teardownLogics = [];
        let tearingDown = false;
        let current = 0;
        let status = '';
        let total = 1;
        function log(entry) {
            logChannel.next(entry);
        }
        function progress(progress, context) {
            currentState = progress.state;
            if (progress.state === api_1.BuilderProgressState.Running) {
                current = progress.current;
                total = progress.total !== undefined ? progress.total : total;
                if (progress.status === undefined) {
                    progress.status = status;
                }
                else {
                    status = progress.status;
                }
            }
            progressChannel.next({
                ...progress,
                ...(context.target && { target: context.target }),
                ...(context.builder && { builder: context.builder }),
                id: context.id,
            });
        }
        return new rxjs_1.Observable(observer => {
            const subscriptions = [];
            const inputSubscription = context.inboundBus.subscribe(i => {
                switch (i.kind) {
                    case core_1.experimental.jobs.JobInboundMessageKind.Stop:
                        // Run teardown logic then complete.
                        tearingDown = true;
                        Promise.all(teardownLogics.map(fn => fn() || Promise.resolve()))
                            .then(() => observer.complete(), err => observer.error(err));
                        break;
                    case core_1.experimental.jobs.JobInboundMessageKind.Input:
                        if (!tearingDown) {
                            onInput(i.value);
                        }
                        break;
                }
            });
            function onInput(i) {
                const builder = i.info;
                const loggerName = i.target
                    ? api_1.targetStringFromTarget(i.target)
                    : builder.builderName;
                const logger = new core_1.logging.Logger(loggerName);
                subscriptions.push(logger.subscribe(entry => log(entry)));
                const context = {
                    builder,
                    workspaceRoot: i.workspaceRoot,
                    currentDirectory: i.currentDirectory,
                    target: i.target,
                    logger: logger,
                    id: i.id,
                    async scheduleTarget(target, overrides = {}, scheduleOptions = {}) {
                        const run = await schedule_by_name_1.scheduleByTarget(target, overrides, {
                            scheduler,
                            logger: scheduleOptions.logger || logger.createChild(''),
                            workspaceRoot: i.workspaceRoot,
                            currentDirectory: i.currentDirectory,
                        });
                        // We don't want to subscribe errors and complete.
                        subscriptions.push(run.progress.subscribe(event => progressChannel.next(event)));
                        return run;
                    },
                    async scheduleBuilder(builderName, options = {}, scheduleOptions = {}) {
                        const run = await schedule_by_name_1.scheduleByName(builderName, options, {
                            scheduler,
                            target: scheduleOptions.target,
                            logger: scheduleOptions.logger || logger.createChild(''),
                            workspaceRoot: i.workspaceRoot,
                            currentDirectory: i.currentDirectory,
                        });
                        // We don't want to subscribe errors and complete.
                        subscriptions.push(run.progress.subscribe(event => progressChannel.next(event)));
                        return run;
                    },
                    async getTargetOptions(target) {
                        return scheduler.schedule('..getTargetOptions', target).output.toPromise();
                    },
                    async getProjectMetadata(target) {
                        return scheduler.schedule('..getProjectMetadata', target).output.toPromise();
                    },
                    async getBuilderNameForTarget(target) {
                        return scheduler.schedule('..getBuilderNameForTarget', target).output.toPromise();
                    },
                    async validateOptions(options, builderName) {
                        return scheduler.schedule('..validateOptions', [builderName, options]).output.toPromise();
                    },
                    reportRunning() {
                        switch (currentState) {
                            case api_1.BuilderProgressState.Waiting:
                            case api_1.BuilderProgressState.Stopped:
                                progress({ state: api_1.BuilderProgressState.Running, current: 0, total }, context);
                                break;
                        }
                    },
                    reportStatus(status) {
                        switch (currentState) {
                            case api_1.BuilderProgressState.Running:
                                progress({ state: currentState, status, current, total }, context);
                                break;
                            case api_1.BuilderProgressState.Waiting:
                                progress({ state: currentState, status }, context);
                                break;
                        }
                    },
                    reportProgress(current, total, status) {
                        switch (currentState) {
                            case api_1.BuilderProgressState.Running:
                                progress({ state: currentState, current, total, status }, context);
                        }
                    },
                    analytics: new core_1.analytics.ForwardingAnalytics(report => analyticsChannel.next(report)),
                    addTeardown(teardown) {
                        teardownLogics.push(teardown);
                    },
                };
                context.reportRunning();
                let result;
                try {
                    result = fn(i.options, context);
                    if (api_1.isBuilderOutput(result)) {
                        result = rxjs_1.of(result);
                    }
                    else {
                        result = rxjs_1.from(result);
                    }
                }
                catch (e) {
                    result = rxjs_1.throwError(e);
                }
                // Manage some state automatically.
                progress({ state: api_1.BuilderProgressState.Running, current: 0, total: 1 }, context);
                subscriptions.push(result.pipe(operators_1.tap(() => {
                    progress({ state: api_1.BuilderProgressState.Running, current: total }, context);
                    progress({ state: api_1.BuilderProgressState.Stopped }, context);
                })).subscribe(message => observer.next(message), error => observer.error(error), () => observer.complete()));
            }
            return () => {
                subscriptions.forEach(x => x.unsubscribe());
                inputSubscription.unsubscribe();
            };
        });
    });
    return {
        handler,
        [internal_1.BuilderSymbol]: true,
        [internal_1.BuilderVersionSymbol]: require('../package.json').version,
    };
}
exports.createBuilder = createBuilder;
