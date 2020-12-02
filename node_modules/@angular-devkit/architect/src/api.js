"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const progress_schema_1 = require("./progress-schema");
exports.BuilderProgressState = progress_schema_1.State;
// tslint:disable-next-line:no-any
function isBuilderOutput(obj) {
    if (!obj || typeof obj.then === 'function' || typeof obj.subscribe === 'function') {
        return false;
    }
    return typeof obj.success === 'boolean';
}
exports.isBuilderOutput = isBuilderOutput;
/**
 * Returns a string of "project:target[:configuration]" for the target object.
 */
function targetStringFromTarget({ project, target, configuration }) {
    return `${project}:${target}${configuration !== undefined ? ':' + configuration : ''}`;
}
exports.targetStringFromTarget = targetStringFromTarget;
/**
 * Return a Target tuple from a string.
 */
function targetFromTargetString(str) {
    const tuple = str.split(/:/, 3);
    if (tuple.length < 2) {
        throw new Error('Invalid target string: ' + JSON.stringify(str));
    }
    return {
        project: tuple[0],
        target: tuple[1],
        ...(tuple[2] !== undefined) && { configuration: tuple[2] },
    };
}
exports.targetFromTargetString = targetFromTargetString;
/**
 * Schedule a target, and forget about its run. This will return an observable of outputs, that
 * as a a teardown will stop the target from running. This means that the Run object this returns
 * should not be shared.
 *
 * The reason this is not part of the Context interface is to keep the Context as normal form as
 * possible. This is really an utility that people would implement in their project.
 *
 * @param context The context of your current execution.
 * @param target The target to schedule.
 * @param overrides Overrides that are used in the target.
 * @param scheduleOptions Additional scheduling options.
 */
function scheduleTargetAndForget(context, target, overrides, scheduleOptions) {
    let resolve = null;
    const promise = new Promise(r => resolve = r);
    context.addTeardown(() => promise);
    return rxjs_1.from(context.scheduleTarget(target, overrides, scheduleOptions)).pipe(operators_1.switchMap(run => new rxjs_1.Observable(observer => {
        const subscription = run.output.subscribe(observer);
        return () => {
            subscription.unsubscribe();
            // We can properly ignore the floating promise as it's a "reverse" promise; the teardown
            // is waiting for the resolve.
            // tslint:disable-next-line:no-floating-promises
            run.stop().then(resolve);
        };
    })));
}
exports.scheduleTargetAndForget = scheduleTargetAndForget;
