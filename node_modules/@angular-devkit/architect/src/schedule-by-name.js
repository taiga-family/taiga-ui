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
const progressSchema = require('./progress-schema.json');
let _uniqueId = 0;
async function scheduleByName(name, buildOptions, options) {
    const childLoggerName = options.target ? `{${api_1.targetStringFromTarget(options.target)}}` : name;
    const logger = options.logger.createChild(childLoggerName);
    const job = options.scheduler.schedule(name, {});
    let stateSubscription;
    const workspaceRoot = await options.workspaceRoot;
    const currentDirectory = await options.currentDirectory;
    const description = await job.description.toPromise();
    const info = description.info;
    const id = ++_uniqueId;
    const message = {
        id,
        currentDirectory,
        workspaceRoot,
        info: info,
        options: buildOptions,
        ...(options.target ? { target: options.target } : {}),
    };
    // Wait for the job to be ready.
    if (job.state !== core_1.experimental.jobs.JobState.Started) {
        stateSubscription = job.outboundBus.subscribe(event => {
            if (event.kind === core_1.experimental.jobs.JobOutboundMessageKind.Start) {
                job.input.next(message);
            }
        }, () => { });
    }
    else {
        job.input.next(message);
    }
    const logChannelSub = job.getChannel('log').subscribe(entry => {
        logger.next(entry);
    }, () => { });
    const s = job.outboundBus.subscribe({
        error() { },
        complete() {
            s.unsubscribe();
            logChannelSub.unsubscribe();
            if (stateSubscription) {
                stateSubscription.unsubscribe();
            }
        },
    });
    const output = job.output.pipe(operators_1.map(output => ({
        ...output,
        ...options.target ? { target: options.target } : 0,
        info,
    })), operators_1.shareReplay());
    // If there's an analytics object, take the job channel and report it to the analytics.
    if (options.analytics) {
        const reporter = new core_1.analytics.AnalyticsReporter(options.analytics);
        job.getChannel('analytics')
            .subscribe(report => reporter.report(report));
    }
    // Start the builder.
    output.pipe(operators_1.first()).subscribe({
        error() { },
    });
    return {
        id,
        info,
        // This is a getter so that it always returns the next output, and not the same one.
        get result() { return output.pipe(operators_1.first()).toPromise(); },
        output,
        progress: job.getChannel('progress', progressSchema).pipe(operators_1.shareReplay(1)),
        stop() {
            job.stop();
            return job.outboundBus.pipe(operators_1.ignoreElements(), operators_1.catchError(() => rxjs_1.EMPTY)).toPromise();
        },
    };
}
exports.scheduleByName = scheduleByName;
async function scheduleByTarget(target, overrides, options) {
    return scheduleByName(`{${api_1.targetStringFromTarget(target)}}`, overrides, {
        ...options,
        target,
        logger: options.logger,
    });
}
exports.scheduleByTarget = scheduleByTarget;
