"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const api_1 = require("./api");
const stableStringify = require("fast-json-stable-stringify");
var strategy;
(function (strategy) {
    /**
     * Creates a JobStrategy that serializes every call. This strategy can be mixed between jobs.
     */
    function serialize() {
        let latest = rxjs_1.of();
        return (handler, options) => {
            const newHandler = (argument, context) => {
                const previous = latest;
                latest = rxjs_1.concat(previous.pipe(operators_1.ignoreElements()), new rxjs_1.Observable(o => handler(argument, context).subscribe(o))).pipe(operators_1.shareReplay(0));
                return latest;
            };
            return Object.assign(newHandler, {
                jobDescription: Object.assign({}, handler.jobDescription, options),
            });
        };
    }
    strategy.serialize = serialize;
    /**
     * Creates a JobStrategy that will always reuse a running job, and restart it if the job ended.
     * @param replayMessages Replay ALL messages if a job is reused, otherwise just hook up where it
     *        is.
     */
    function reuse(replayMessages = false) {
        let inboundBus = new rxjs_1.Subject();
        let runContext = null;
        let run = null;
        let state = null;
        return (handler, options) => {
            const newHandler = (argument, context) => {
                // Forward inputs.
                const subscription = context.inboundBus.subscribe(inboundBus);
                if (run) {
                    return rxjs_1.concat(
                    // Update state.
                    rxjs_1.of(state), run).pipe(operators_1.finalize(() => subscription.unsubscribe()));
                }
                run = handler(argument, { ...context, inboundBus: inboundBus.asObservable() }).pipe(operators_1.tap(message => {
                    if (message.kind == api_1.JobOutboundMessageKind.Start
                        || message.kind == api_1.JobOutboundMessageKind.OnReady
                        || message.kind == api_1.JobOutboundMessageKind.End) {
                        state = message;
                    }
                }, undefined, () => {
                    subscription.unsubscribe();
                    inboundBus = new rxjs_1.Subject();
                    run = null;
                }), replayMessages ? operators_1.shareReplay() : operators_1.share());
                runContext = context;
                return run;
            };
            return Object.assign(newHandler, handler, options || {});
        };
    }
    strategy.reuse = reuse;
    /**
     * Creates a JobStrategy that will reuse a running job if the argument matches.
     * @param replayMessages Replay ALL messages if a job is reused, otherwise just hook up where it
     *        is.
     */
    function memoize(replayMessages = false) {
        const runs = new Map();
        return (handler, options) => {
            const newHandler = (argument, context) => {
                const argumentJson = stableStringify(argument);
                const maybeJob = runs.get(argumentJson);
                if (maybeJob) {
                    return maybeJob;
                }
                const run = handler(argument, context).pipe(replayMessages ? operators_1.shareReplay() : operators_1.share());
                runs.set(argumentJson, run);
                return run;
            };
            return Object.assign(newHandler, handler, options || {});
        };
    }
    strategy.memoize = memoize;
})(strategy = exports.strategy || (exports.strategy = {}));
