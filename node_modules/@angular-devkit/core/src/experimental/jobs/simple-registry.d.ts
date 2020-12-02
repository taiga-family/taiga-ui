/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { JsonValue } from '../../json';
import { JobDescription, JobHandler, JobName, Registry } from './api';
/**
 * SimpleJobRegistry job registration options.
 */
export interface RegisterJobOptions extends Partial<JobDescription> {
}
/**
 * A simple job registry that keep a map of JobName => JobHandler internally.
 */
export declare class SimpleJobRegistry<MinimumArgumentValueT extends JsonValue = JsonValue, MinimumInputValueT extends JsonValue = JsonValue, MinimumOutputValueT extends JsonValue = JsonValue> implements Registry<MinimumArgumentValueT, MinimumInputValueT, MinimumOutputValueT> {
    private _jobNames;
    get<A extends MinimumArgumentValueT = MinimumArgumentValueT, I extends MinimumInputValueT = MinimumInputValueT, O extends MinimumOutputValueT = MinimumOutputValueT>(name: JobName): Observable<JobHandler<A, I, O> | null>;
    /**
     * Register a job handler. The name must be unique.
     *
     * @param name The name of the job.
     * @param handler The function that will be called for the job.
     * @param options An optional list of options to override the handler. {@see RegisterJobOptions}
     */
    register<A extends MinimumArgumentValueT, I extends MinimumInputValueT, O extends MinimumOutputValueT>(name: JobName, handler: JobHandler<A, I, O>, options?: RegisterJobOptions): void;
    /**
     * Register a job handler. The name must be unique.
     *
     * @param handler The function that will be called for the job.
     * @param options An optional list of options to override the handler. {@see RegisterJobOptions}
     */
    register<ArgumentT extends JsonValue, InputT extends JsonValue, OutputT extends JsonValue>(handler: JobHandler<ArgumentT, InputT, OutputT>, options?: RegisterJobOptions & {
        name: string;
    }): void;
    protected _register<ArgumentT extends JsonValue, InputT extends JsonValue, OutputT extends JsonValue>(name: JobName, handler: JobHandler<ArgumentT, InputT, OutputT>, options: RegisterJobOptions): void;
    /**
     * Returns the job names of all jobs.
     */
    getJobNames(): JobName[];
}
