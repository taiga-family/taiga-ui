/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/execution/cluster/utils" />
import { MessageFromWorker } from './api';
/** Expose a `Promise` instance as well as APIs for resolving/rejecting it. */
export declare class Deferred<T> {
    /**
     * Resolve the associated promise with the specified value.
     * If the value is a rejection (constructed with `Promise.reject()`), the promise will be rejected
     * instead.
     *
     * @param value The value to resolve the promise with.
     */
    resolve: (value: T) => void;
    /**
     * Rejects the associated promise with the specified reason.
     *
     * @param reason The rejection reason.
     */
    reject: (reason: any) => void;
    /** The `Promise` instance associated with this deferred. */
    promise: Promise<T>;
}
/**
 * Send a message to the cluster master.
 * (This function should be invoked from cluster workers only.)
 *
 * @param msg The message to send to the cluster master.
 * @return A promise that is resolved once the message has been sent.
 */
export declare const sendMessageToMaster: (msg: MessageFromWorker) => Promise<void>;
/**
 * Send a message to a cluster worker.
 * (This function should be invoked from the cluster master only.)
 *
 * @param workerId The ID of the recipient worker.
 * @param msg The message to send to the worker.
 * @return A promise that is resolved once the message has been sent.
 */
export declare const sendMessageToWorker: (workerId: number, msg: import("@angular/compiler-cli/ngcc/src/execution/cluster/api").ProcessTaskMessage) => Promise<void>;
