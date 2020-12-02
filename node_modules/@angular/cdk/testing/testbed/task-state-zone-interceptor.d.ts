/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
/** Current state of the intercepted zone. */
export interface TaskState {
    /** Whether the zone is stable (i.e. no microtasks and macrotasks). */
    stable: boolean;
}
/**
 * Interceptor that can be set up in a `ProxyZone` instance. The interceptor
 * will keep track of the task state and emit whenever the state changes.
 *
 * This serves as a workaround for https://github.com/angular/angular/issues/32896.
 */
export declare class TaskStateZoneInterceptor {
    private _lastState;
    /** Subject that can be used to emit a new state change. */
    private _stateSubject;
    /** Public observable that emits whenever the task state changes. */
    readonly state: Observable<TaskState>;
    constructor(_lastState: HasTaskState | null);
    /** This will be called whenever the task state changes in the intercepted zone. */
    onHasTask(delegate: ZoneDelegate, current: Zone, target: Zone, hasTaskState: HasTaskState): void;
    /** Gets the task state from the internal ZoneJS task state. */
    private _getTaskStateFromInternalZoneState;
    /**
     * Sets up the custom task state Zone interceptor in the  `ProxyZone`. Throws if
     * no `ProxyZone` could be found.
     * @returns an observable that emits whenever the task state changes.
     */
    static setup(): Observable<TaskState>;
}
