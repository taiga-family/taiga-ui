/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 */
import { Observable, Observer } from 'rxjs';
import { BaseException } from '../../exception/index';
import { JsonValue } from '../../json/index';
import { LoggerApi } from '../../logger';
import { JobDescription, JobHandler, JobHandlerContext } from './api';
export declare class ChannelAlreadyExistException extends BaseException {
    constructor(name: string);
}
/**
 * Interface for the JobHandler context that is used when using `createJobHandler()`. It extends
 * the basic `JobHandlerContext` with additional functionality.
 */
export interface SimpleJobHandlerContext<A extends JsonValue, I extends JsonValue, O extends JsonValue> extends JobHandlerContext<A, I, O> {
    createChannel: (name: string) => Observer<JsonValue>;
    input: Observable<I>;
}
/**
 * A simple version of the JobHandler. This simplifies a lot of the interaction with the job
 * scheduler and registry. For example, instead of returning a JobOutboundMessage observable, you
 * can directly return an output.
 */
export declare type SimpleJobHandlerFn<A extends JsonValue, I extends JsonValue, O extends JsonValue> = (input: A, context: SimpleJobHandlerContext<A, I, O>) => O | Promise<O> | Observable<O>;
/**
 * Make a simple job handler that sets start and end from a function that's synchronous.
 *
 * @param fn The function to create a handler for.
 * @param options An optional set of properties to set on the handler. Some fields might be
 *   required by registry or schedulers.
 */
export declare function createJobHandler<A extends JsonValue, I extends JsonValue, O extends JsonValue>(fn: SimpleJobHandlerFn<A, I, O>, options?: Partial<JobDescription>): JobHandler<A, I, O>;
/**
 * Lazily create a job using a function.
 * @param loader A factory function that returns a promise/observable of a JobHandler.
 * @param options Same options as createJob.
 */
export declare function createJobFactory<A extends JsonValue, I extends JsonValue, O extends JsonValue>(loader: () => Promise<JobHandler<A, I, O>>, options?: Partial<JobDescription>): JobHandler<A, I, O>;
/**
 * Creates a job that logs out input/output messages of another Job. The messages are still
 * propagated to the other job.
 */
export declare function createLoggerJob<A extends JsonValue, I extends JsonValue, O extends JsonValue>(job: JobHandler<A, I, O>, logger: LoggerApi): JobHandler<A, I, O>;
