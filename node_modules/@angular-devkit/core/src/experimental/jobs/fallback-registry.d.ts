/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { JsonValue } from '../../json';
import { JobHandler, JobName, Registry } from './api';
/**
 * A simple job registry that keep a map of JobName => JobHandler internally.
 */
export declare class FallbackRegistry<MinimumArgumentValueT extends JsonValue = JsonValue, MinimumInputValueT extends JsonValue = JsonValue, MinimumOutputValueT extends JsonValue = JsonValue> implements Registry<MinimumArgumentValueT, MinimumInputValueT, MinimumOutputValueT> {
    protected _fallbacks: Registry<MinimumArgumentValueT, MinimumInputValueT, MinimumOutputValueT>[];
    constructor(_fallbacks?: Registry<MinimumArgumentValueT, MinimumInputValueT, MinimumOutputValueT>[]);
    addFallback(registry: Registry): void;
    get<A extends MinimumArgumentValueT = MinimumArgumentValueT, I extends MinimumInputValueT = MinimumInputValueT, O extends MinimumOutputValueT = MinimumOutputValueT>(name: JobName): Observable<JobHandler<A, I, O> | null>;
}
