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
const json_1 = require("../../json");
const api_1 = require("./api");
const exception_1 = require("./exception");
class JobArgumentSchemaValidationError extends json_1.schema.SchemaValidationException {
    constructor(errors) {
        super(errors, 'Job Argument failed to validate. Errors: ');
    }
}
exports.JobArgumentSchemaValidationError = JobArgumentSchemaValidationError;
class JobInboundMessageSchemaValidationError extends json_1.schema.SchemaValidationException {
    constructor(errors) {
        super(errors, 'Job Inbound Message failed to validate. Errors: ');
    }
}
exports.JobInboundMessageSchemaValidationError = JobInboundMessageSchemaValidationError;
class JobOutputSchemaValidationError extends json_1.schema.SchemaValidationException {
    constructor(errors) {
        super(errors, 'Job Output failed to validate. Errors: ');
    }
}
exports.JobOutputSchemaValidationError = JobOutputSchemaValidationError;
function _jobShare() {
    // This is the same code as a `shareReplay()` operator, but uses a dumber Subject rather than a
    // ReplaySubject.
    return (source) => {
        let refCount = 0;
        let subject;
        let hasError = false;
        let isComplete = false;
        let subscription;
        return new rxjs_1.Observable(subscriber => {
            let innerSub;
            refCount++;
            if (!subject) {
                subject = new rxjs_1.Subject();
                innerSub = subject.subscribe(subscriber);
                subscription = source.subscribe({
                    next(value) { subject.next(value); },
                    error(err) {
                        hasError = true;
                        subject.error(err);
                    },
                    complete() {
                        isComplete = true;
                        subject.complete();
                    },
                });
            }
            else {
                innerSub = subject.subscribe(subscriber);
            }
            return () => {
                refCount--;
                innerSub.unsubscribe();
                if (subscription && refCount === 0 && (isComplete || hasError)) {
                    subscription.unsubscribe();
                }
            };
        });
    };
}
/**
 * Simple scheduler. Should be the base of all registries and schedulers.
 */
class SimpleScheduler {
    constructor(_jobRegistry, _schemaRegistry = new json_1.schema.CoreSchemaRegistry()) {
        this._jobRegistry = _jobRegistry;
        this._schemaRegistry = _schemaRegistry;
        this._internalJobDescriptionMap = new Map();
        this._queue = [];
        this._pauseCounter = 0;
    }
    _getInternalDescription(name) {
        const maybeHandler = this._internalJobDescriptionMap.get(name);
        if (maybeHandler !== undefined) {
            return rxjs_1.of(maybeHandler);
        }
        const handler = this._jobRegistry.get(name);
        return handler.pipe(operators_1.switchMap(handler => {
            if (handler === null) {
                return rxjs_1.of(null);
            }
            const description = {
                // Make a copy of it to be sure it's proper JSON.
                ...JSON.parse(JSON.stringify(handler.jobDescription)),
                name: handler.jobDescription.name || name,
                argument: handler.jobDescription.argument || true,
                input: handler.jobDescription.input || true,
                output: handler.jobDescription.output || true,
                channels: handler.jobDescription.channels || {},
            };
            const handlerWithExtra = Object.assign(handler.bind(undefined), {
                jobDescription: description,
                argumentV: this._schemaRegistry.compile(description.argument).pipe(operators_1.shareReplay(1)),
                inputV: this._schemaRegistry.compile(description.input).pipe(operators_1.shareReplay(1)),
                outputV: this._schemaRegistry.compile(description.output).pipe(operators_1.shareReplay(1)),
            });
            this._internalJobDescriptionMap.set(name, handlerWithExtra);
            return rxjs_1.of(handlerWithExtra);
        }));
    }
    /**
     * Get a job description for a named job.
     *
     * @param name The name of the job.
     * @returns A description, or null if the job is not registered.
     */
    getDescription(name) {
        return rxjs_1.concat(this._getInternalDescription(name).pipe(operators_1.map(x => x && x.jobDescription)), rxjs_1.of(null)).pipe(operators_1.first());
    }
    /**
     * Returns true if the job name has been registered.
     * @param name The name of the job.
     * @returns True if the job exists, false otherwise.
     */
    has(name) {
        return this.getDescription(name).pipe(operators_1.map(x => x !== null));
    }
    /**
     * Pause the scheduler, temporary queueing _new_ jobs. Returns a resume function that should be
     * used to resume execution. If multiple `pause()` were called, all their resume functions must
     * be called before the Scheduler actually starts new jobs. Additional calls to the same resume
     * function will have no effect.
     *
     * Jobs already running are NOT paused. This is pausing the scheduler only.
     */
    pause() {
        let called = false;
        this._pauseCounter++;
        return () => {
            if (!called) {
                called = true;
                if (--this._pauseCounter == 0) {
                    // Resume the queue.
                    const q = this._queue;
                    this._queue = [];
                    q.forEach(fn => fn());
                }
            }
        };
    }
    /**
     * Schedule a job to be run, using its name.
     * @param name The name of job to be run.
     * @param argument The argument to send to the job when starting it.
     * @param options Scheduling options.
     * @returns The Job being run.
     */
    schedule(name, argument, options) {
        if (this._pauseCounter > 0) {
            const waitable = new rxjs_1.Subject();
            this._queue.push(() => waitable.complete());
            return this._scheduleJob(name, argument, options || {}, waitable);
        }
        return this._scheduleJob(name, argument, options || {}, rxjs_1.EMPTY);
    }
    /**
     * Filter messages.
     * @private
     */
    _filterJobOutboundMessages(message, state) {
        switch (message.kind) {
            case api_1.JobOutboundMessageKind.OnReady:
                return state == api_1.JobState.Queued;
            case api_1.JobOutboundMessageKind.Start:
                return state == api_1.JobState.Ready;
            case api_1.JobOutboundMessageKind.End:
                return state == api_1.JobState.Started || state == api_1.JobState.Ready;
        }
        return true;
    }
    /**
     * Return a new state. This is just to simplify the reading of the _createJob method.
     * @private
     */
    _updateState(message, state) {
        switch (message.kind) {
            case api_1.JobOutboundMessageKind.OnReady:
                return api_1.JobState.Ready;
            case api_1.JobOutboundMessageKind.Start:
                return api_1.JobState.Started;
            case api_1.JobOutboundMessageKind.End:
                return api_1.JobState.Ended;
        }
        return state;
    }
    /**
     * Create the job.
     * @private
     */
    _createJob(name, argument, handler, inboundBus, outboundBus, options) {
        const schemaRegistry = this._schemaRegistry;
        const channelsSubject = new Map();
        const channels = new Map();
        let state = api_1.JobState.Queued;
        let pingId = 0;
        // Create the input channel by having a filter.
        const input = new rxjs_1.Subject();
        input.pipe(operators_1.switchMap(message => handler.pipe(operators_1.switchMap(handler => {
            if (handler === null) {
                throw new exception_1.JobDoesNotExistException(name);
            }
            else {
                return handler.inputV.pipe(operators_1.switchMap(validate => validate(message)));
            }
        }))), operators_1.filter(result => result.success), operators_1.map(result => result.data)).subscribe(value => inboundBus.next({ kind: api_1.JobInboundMessageKind.Input, value }));
        outboundBus = rxjs_1.concat(outboundBus, 
        // Add an End message at completion. This will be filtered out if the job actually send an
        // End.
        handler.pipe(operators_1.switchMap(handler => {
            if (handler) {
                return rxjs_1.of({
                    kind: api_1.JobOutboundMessageKind.End, description: handler.jobDescription,
                });
            }
            else {
                return rxjs_1.EMPTY;
            }
        }))).pipe(operators_1.filter(message => this._filterJobOutboundMessages(message, state)), 
        // Update internal logic and Job<> members.
        operators_1.tap(message => {
            // Update the state.
            state = this._updateState(message, state);
            switch (message.kind) {
                case api_1.JobOutboundMessageKind.ChannelCreate: {
                    const maybeSubject = channelsSubject.get(message.name);
                    // If it doesn't exist or it's closed on the other end.
                    if (!maybeSubject) {
                        const s = new rxjs_1.Subject();
                        channelsSubject.set(message.name, s);
                        channels.set(message.name, s.asObservable());
                    }
                    break;
                }
                case api_1.JobOutboundMessageKind.ChannelMessage: {
                    const maybeSubject = channelsSubject.get(message.name);
                    if (maybeSubject) {
                        maybeSubject.next(message.message);
                    }
                    break;
                }
                case api_1.JobOutboundMessageKind.ChannelComplete: {
                    const maybeSubject = channelsSubject.get(message.name);
                    if (maybeSubject) {
                        maybeSubject.complete();
                        channelsSubject.delete(message.name);
                    }
                    break;
                }
                case api_1.JobOutboundMessageKind.ChannelError: {
                    const maybeSubject = channelsSubject.get(message.name);
                    if (maybeSubject) {
                        maybeSubject.error(message.error);
                        channelsSubject.delete(message.name);
                    }
                    break;
                }
            }
        }, () => {
            state = api_1.JobState.Errored;
        }), 
        // Do output validation (might include default values so this might have side
        // effects). We keep all messages in order.
        operators_1.concatMap(message => {
            if (message.kind !== api_1.JobOutboundMessageKind.Output) {
                return rxjs_1.of(message);
            }
            return handler.pipe(operators_1.switchMap(handler => {
                if (handler === null) {
                    throw new exception_1.JobDoesNotExistException(name);
                }
                else {
                    return handler.outputV.pipe(operators_1.switchMap(validate => validate(message.value)), operators_1.switchMap(output => {
                        if (!output.success) {
                            throw new JobOutputSchemaValidationError(output.errors);
                        }
                        return rxjs_1.of({
                            ...message,
                            output: output.data,
                        });
                    }));
                }
            }));
        }), _jobShare());
        const output = outboundBus.pipe(operators_1.filter(x => x.kind == api_1.JobOutboundMessageKind.Output), operators_1.map((x) => x.value), operators_1.shareReplay(1));
        // Return the Job.
        return {
            get state() { return state; },
            argument,
            description: handler.pipe(operators_1.switchMap(handler => {
                if (handler === null) {
                    throw new exception_1.JobDoesNotExistException(name);
                }
                else {
                    return rxjs_1.of(handler.jobDescription);
                }
            })),
            output,
            getChannel(name, schema = true) {
                let maybeObservable = channels.get(name);
                if (!maybeObservable) {
                    const s = new rxjs_1.Subject();
                    channelsSubject.set(name, s);
                    channels.set(name, s.asObservable());
                    maybeObservable = s.asObservable();
                }
                return maybeObservable.pipe(
                // Keep the order of messages.
                operators_1.concatMap(message => {
                    return schemaRegistry.compile(schema).pipe(operators_1.switchMap(validate => validate(message)), operators_1.filter(x => x.success), operators_1.map(x => x.data));
                }));
            },
            ping() {
                const id = pingId++;
                inboundBus.next({ kind: api_1.JobInboundMessageKind.Ping, id });
                return outboundBus.pipe(operators_1.filter(x => x.kind === api_1.JobOutboundMessageKind.Pong && x.id == id), operators_1.first(), operators_1.ignoreElements());
            },
            stop() {
                inboundBus.next({ kind: api_1.JobInboundMessageKind.Stop });
            },
            input,
            inboundBus,
            outboundBus,
        };
    }
    _scheduleJob(name, argument, options, waitable) {
        // Get handler first, since this can error out if there's no handler for the job name.
        const handler = this._getInternalDescription(name);
        const optionsDeps = (options && options.dependencies) || [];
        const dependencies = Array.isArray(optionsDeps) ? optionsDeps : [optionsDeps];
        const inboundBus = new rxjs_1.Subject();
        const outboundBus = rxjs_1.concat(
        // Wait for dependencies, make sure to not report messages from dependencies. Subscribe to
        // all dependencies at the same time so they run concurrently.
        rxjs_1.merge(...dependencies.map(x => x.outboundBus)).pipe(operators_1.ignoreElements()), 
        // Wait for pause() to clear (if necessary).
        waitable, rxjs_1.from(handler).pipe(operators_1.switchMap(handler => new rxjs_1.Observable((subscriber) => {
            if (!handler) {
                throw new exception_1.JobDoesNotExistException(name);
            }
            // Validate the argument.
            return handler.argumentV.pipe(operators_1.switchMap(validate => validate(argument)), operators_1.switchMap(output => {
                if (!output.success) {
                    throw new JobArgumentSchemaValidationError(output.errors);
                }
                const argument = output.data;
                const description = handler.jobDescription;
                subscriber.next({ kind: api_1.JobOutboundMessageKind.OnReady, description });
                const context = {
                    description,
                    dependencies: [...dependencies],
                    inboundBus: inboundBus.asObservable(),
                    scheduler: this,
                };
                return handler(argument, context);
            })).subscribe(subscriber);
        }))));
        return this._createJob(name, argument, handler, inboundBus, outboundBus, options);
    }
}
exports.SimpleScheduler = SimpleScheduler;
