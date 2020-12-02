/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { JsonValue, experimental as core_experimental } from '../../../src';
export declare class NodeModuleJobRegistry<MinimumArgumentValueT extends JsonValue = JsonValue, MinimumInputValueT extends JsonValue = JsonValue, MinimumOutputValueT extends JsonValue = JsonValue> implements core_experimental.jobs.Registry<MinimumArgumentValueT, MinimumInputValueT, MinimumOutputValueT> {
    protected _resolve(name: string): string | null;
    /**
     * Get a job description for a named job.
     *
     * @param name The name of the job.
     * @returns A description, or null if the job is not registered.
     */
    get<A extends MinimumArgumentValueT, I extends MinimumInputValueT, O extends MinimumOutputValueT>(name: core_experimental.jobs.JobName): Observable<core_experimental.jobs.JobHandler<A, I, O> | null>;
}
