/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { JsonValue, schema } from '../../json';
import { Job, JobDescription, JobName, Registry, ScheduleJobOptions, Scheduler } from './api';
export declare class JobArgumentSchemaValidationError extends schema.SchemaValidationException {
    constructor(errors?: schema.SchemaValidatorError[]);
}
export declare class JobInboundMessageSchemaValidationError extends schema.SchemaValidationException {
    constructor(errors?: schema.SchemaValidatorError[]);
}
export declare class JobOutputSchemaValidationError extends schema.SchemaValidationException {
    constructor(errors?: schema.SchemaValidatorError[]);
}
/**
 * Simple scheduler. Should be the base of all registries and schedulers.
 */
export declare class SimpleScheduler<MinimumArgumentT extends JsonValue = JsonValue, MinimumInputT extends JsonValue = JsonValue, MinimumOutputT extends JsonValue = JsonValue> implements Scheduler<MinimumArgumentT, MinimumInputT, MinimumOutputT> {
    protected _jobRegistry: Registry<MinimumArgumentT, MinimumInputT, MinimumOutputT>;
    protected _schemaRegistry: schema.SchemaRegistry;
    private _internalJobDescriptionMap;
    private _queue;
    private _pauseCounter;
    constructor(_jobRegistry: Registry<MinimumArgumentT, MinimumInputT, MinimumOutputT>, _schemaRegistry?: schema.SchemaRegistry);
    private _getInternalDescription;
    /**
     * Get a job description for a named job.
     *
     * @param name The name of the job.
     * @returns A description, or null if the job is not registered.
     */
    getDescription(name: JobName): Observable<JobDescription | null>;
    /**
     * Returns true if the job name has been registered.
     * @param name The name of the job.
     * @returns True if the job exists, false otherwise.
     */
    has(name: JobName): Observable<boolean>;
    /**
     * Pause the scheduler, temporary queueing _new_ jobs. Returns a resume function that should be
     * used to resume execution. If multiple `pause()` were called, all their resume functions must
     * be called before the Scheduler actually starts new jobs. Additional calls to the same resume
     * function will have no effect.
     *
     * Jobs already running are NOT paused. This is pausing the scheduler only.
     */
    pause(): () => void;
    /**
     * Schedule a job to be run, using its name.
     * @param name The name of job to be run.
     * @param argument The argument to send to the job when starting it.
     * @param options Scheduling options.
     * @returns The Job being run.
     */
    schedule<A extends MinimumArgumentT, I extends MinimumInputT, O extends MinimumOutputT>(name: JobName, argument: A, options?: ScheduleJobOptions): Job<A, I, O>;
    /**
     * Filter messages.
     * @private
     */
    private _filterJobOutboundMessages;
    /**
     * Return a new state. This is just to simplify the reading of the _createJob method.
     * @private
     */
    private _updateState;
    /**
     * Create the job.
     * @private
     */
    private _createJob;
    protected _scheduleJob<A extends MinimumArgumentT, I extends MinimumInputT, O extends MinimumOutputT>(name: JobName, argument: A, options: ScheduleJobOptions, waitable: Observable<never>): Job<A, I, O>;
}
