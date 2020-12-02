/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter } from '../event_emitter';
import { global } from '../util/global';
import { getNativeRequestAnimationFrame } from '../util/raf';
/**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link #run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Component, NgZone} from '@angular/core';
 * import {NgIf} from '@angular/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo',
 *   template: `
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   `,
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *         // reenter the Angular zone and display done
 *         this._ngZone.run(() => { console.log('Outside Done!'); });
 *       });
 *     });
 *   }
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(`Current progress: ${this.progress}%`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback), 10);
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * ```
 *
 * @publicApi
 */
var NgZone = /** @class */ (function () {
    function NgZone(_a) {
        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b, _c = _a.shouldCoalesceEventChangeDetection, shouldCoalesceEventChangeDetection = _c === void 0 ? false : _c;
        this.hasPendingMacrotasks = false;
        this.hasPendingMicrotasks = false;
        /**
         * Whether there are no outstanding microtasks or macrotasks.
         */
        this.isStable = true;
        /**
         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
         */
        this.onUnstable = new EventEmitter(false);
        /**
         * Notifies when there is no more microtasks enqueued in the current VM Turn.
         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
         * For this reason this event can fire multiple times per VM Turn.
         */
        this.onMicrotaskEmpty = new EventEmitter(false);
        /**
         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
         * implies we are about to relinquish VM turn.
         * This event gets called just once.
         */
        this.onStable = new EventEmitter(false);
        /**
         * Notifies that an error has been delivered.
         */
        this.onError = new EventEmitter(false);
        if (typeof Zone == 'undefined') {
            throw new Error("In this configuration Angular requires Zone.js");
        }
        Zone.assertZonePatched();
        var self = this;
        self._nesting = 0;
        self._outer = self._inner = Zone.current;
        if (Zone['wtfZoneSpec']) {
            self._inner = self._inner.fork(Zone['wtfZoneSpec']);
        }
        if (Zone['TaskTrackingZoneSpec']) {
            self._inner = self._inner.fork(new Zone['TaskTrackingZoneSpec']);
        }
        if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
            self._inner = self._inner.fork(Zone['longStackTraceZoneSpec']);
        }
        self.shouldCoalesceEventChangeDetection = shouldCoalesceEventChangeDetection;
        self.lastRequestAnimationFrameId = -1;
        self.nativeRequestAnimationFrame = getNativeRequestAnimationFrame().nativeRequestAnimationFrame;
        forkInnerZoneWithAngularBehavior(self);
    }
    NgZone.isInAngularZone = function () {
        return Zone.current.get('isAngularZone') === true;
    };
    NgZone.assertInAngularZone = function () {
        if (!NgZone.isInAngularZone()) {
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
    };
    NgZone.assertNotInAngularZone = function () {
        if (NgZone.isInAngularZone()) {
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
    };
    /**
     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
     * the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
    NgZone.prototype.run = function (fn, applyThis, applyArgs) {
        return this._inner.run(fn, applyThis, applyArgs);
    };
    /**
     * Executes the `fn` function synchronously within the Angular zone as a task and returns value
     * returned by the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
    NgZone.prototype.runTask = function (fn, applyThis, applyArgs, name) {
        var zone = this._inner;
        var task = zone.scheduleEventTask('NgZoneEvent: ' + name, fn, EMPTY_PAYLOAD, noop, noop);
        try {
            return zone.runTask(task, applyThis, applyArgs);
        }
        finally {
            zone.cancelTask(task);
        }
    };
    /**
     * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
     * rethrown.
     */
    NgZone.prototype.runGuarded = function (fn, applyThis, applyArgs) {
        return this._inner.runGuarded(fn, applyThis, applyArgs);
    };
    /**
     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
     * the function.
     *
     * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
     * work that
     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * outside of the Angular zone.
     *
     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
     */
    NgZone.prototype.runOutsideAngular = function (fn) {
        return this._outer.run(fn);
    };
    return NgZone;
}());
export { NgZone };
function noop() { }
var EMPTY_PAYLOAD = {};
function checkStable(zone) {
    if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
        try {
            zone._nesting++;
            zone.onMicrotaskEmpty.emit(null);
        }
        finally {
            zone._nesting--;
            if (!zone.hasPendingMicrotasks) {
                try {
                    zone.runOutsideAngular(function () { return zone.onStable.emit(null); });
                }
                finally {
                    zone.isStable = true;
                }
            }
        }
    }
}
function delayChangeDetectionForEvents(zone) {
    if (zone.lastRequestAnimationFrameId !== -1) {
        return;
    }
    zone.lastRequestAnimationFrameId = zone.nativeRequestAnimationFrame.call(global, function () {
        zone.lastRequestAnimationFrameId = -1;
        updateMicroTaskStatus(zone);
        checkStable(zone);
    });
    updateMicroTaskStatus(zone);
}
function forkInnerZoneWithAngularBehavior(zone) {
    var delayChangeDetectionForEventsDelegate = function () {
        delayChangeDetectionForEvents(zone);
    };
    var maybeDelayChangeDetection = !!zone.shouldCoalesceEventChangeDetection &&
        zone.nativeRequestAnimationFrame && delayChangeDetectionForEventsDelegate;
    zone._inner = zone._inner.fork({
        name: 'angular',
        properties: { 'isAngularZone': true, 'maybeDelayChangeDetection': maybeDelayChangeDetection },
        onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
            try {
                onEnter(zone);
                return delegate.invokeTask(target, task, applyThis, applyArgs);
            }
            finally {
                if (maybeDelayChangeDetection && task.type === 'eventTask') {
                    maybeDelayChangeDetection();
                }
                onLeave(zone);
            }
        },
        onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
            try {
                onEnter(zone);
                return delegate.invoke(target, callback, applyThis, applyArgs, source);
            }
            finally {
                onLeave(zone);
            }
        },
        onHasTask: function (delegate, current, target, hasTaskState) {
            delegate.hasTask(target, hasTaskState);
            if (current === target) {
                // We are only interested in hasTask events which originate from our zone
                // (A child hasTask event is not interesting to us)
                if (hasTaskState.change == 'microTask') {
                    zone._hasPendingMicrotasks = hasTaskState.microTask;
                    updateMicroTaskStatus(zone);
                    checkStable(zone);
                }
                else if (hasTaskState.change == 'macroTask') {
                    zone.hasPendingMacrotasks = hasTaskState.macroTask;
                }
            }
        },
        onHandleError: function (delegate, current, target, error) {
            delegate.handleError(target, error);
            zone.runOutsideAngular(function () { return zone.onError.emit(error); });
            return false;
        }
    });
}
function updateMicroTaskStatus(zone) {
    if (zone._hasPendingMicrotasks ||
        (zone.shouldCoalesceEventChangeDetection && zone.lastRequestAnimationFrameId !== -1)) {
        zone.hasPendingMicrotasks = true;
    }
    else {
        zone.hasPendingMicrotasks = false;
    }
}
function onEnter(zone) {
    zone._nesting++;
    if (zone.isStable) {
        zone.isStable = false;
        zone.onUnstable.emit(null);
    }
}
function onLeave(zone) {
    zone._nesting--;
    checkStable(zone);
}
/**
 * Provides a noop implementation of `NgZone` which does nothing. This zone requires explicit calls
 * to framework to perform rendering.
 */
var NoopNgZone = /** @class */ (function () {
    function NoopNgZone() {
        this.hasPendingMicrotasks = false;
        this.hasPendingMacrotasks = false;
        this.isStable = true;
        this.onUnstable = new EventEmitter();
        this.onMicrotaskEmpty = new EventEmitter();
        this.onStable = new EventEmitter();
        this.onError = new EventEmitter();
    }
    NoopNgZone.prototype.run = function (fn, applyThis, applyArgs) {
        return fn.apply(applyThis, applyArgs);
    };
    NoopNgZone.prototype.runGuarded = function (fn, applyThis, applyArgs) {
        return fn.apply(applyThis, applyArgs);
    };
    NoopNgZone.prototype.runOutsideAngular = function (fn) {
        return fn();
    };
    NoopNgZone.prototype.runTask = function (fn, applyThis, applyArgs, name) {
        return fn.apply(applyThis, applyArgs);
    };
    return NoopNgZone;
}());
export { NoopNgZone };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfem9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3pvbmUvbmdfem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUczRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlFRztBQUNIO0lBa0NFLGdCQUFZLEVBQTBFO1lBQXpFLDRCQUE0QixFQUE1QixpREFBNEIsRUFBRSwwQ0FBMEMsRUFBMUMsK0RBQTBDO1FBakM1RSx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBRS9DOztXQUVHO1FBQ00sYUFBUSxHQUFZLElBQUksQ0FBQztRQUVsQzs7V0FFRztRQUNNLGVBQVUsR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakU7Ozs7V0FJRztRQUNNLHFCQUFnQixHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RTs7OztXQUlHO1FBQ00sYUFBUSxHQUFzQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvRDs7V0FFRztRQUNNLFlBQU8sR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJNUQsSUFBSSxPQUFPLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7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QUM7SUFDeEMsQ0FBQztJQUVELHNDQUFpQixHQUFqQixVQUFrQixFQUEyQjtRQUMzQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxFQUEyQixFQUFFLFNBQWUsRUFBRSxTQUFlLEVBQUUsSUFBYTtRQUNsRixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9ldmVudF9lbWl0dGVyJztcbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuLi91dGlsL2dsb2JhbCc7XG5pbXBvcnQge2dldE5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZX0gZnJvbSAnLi4vdXRpbC9yYWYnO1xuXG5cbi8qKlxuICogQW4gaW5qZWN0YWJsZSBzZXJ2aWNlIGZvciBleGVjdXRpbmcgd29yayBpbnNpZGUgb3Igb3V0c2lkZSBvZiB0aGUgQW5ndWxhciB6b25lLlxuICpcbiAqIFRoZSBtb3N0IGNvbW1vbiB1c2Ugb2YgdGhpcyBzZXJ2aWNlIGlzIHRvIG9wdGltaXplIHBlcmZvcm1hbmNlIHdoZW4gc3RhcnRpbmcgYSB3b3JrIGNvbnNpc3Rpbmcgb2ZcbiAqIG9uZSBvciBtb3JlIGFzeW5jaHJvbm91cyB0YXNrcyB0aGF0IGRvbid0IHJlcXVpcmUgVUkgdXBkYXRlcyBvciBlcnJvciBoYW5kbGluZyB0byBiZSBoYW5kbGVkIGJ5XG4gKiBBbmd1bGFyLiBTdWNoIHRhc2tzIGNhbiBiZSBraWNrZWQgb2ZmIHZpYSB7QGxpbmsgI3J1bk91dHNpZGVBbmd1bGFyfSBhbmQgaWYgbmVlZGVkLCB0aGVzZSB0YXNrc1xuICogY2FuIHJlZW50ZXIgdGhlIEFuZ3VsYXIgem9uZSB2aWEge0BsaW5rICNydW59LlxuICpcbiAqIDwhLS0gVE9ETzogYWRkL2ZpeCBsaW5rcyB0bzpcbiAqICAgLSBkb2NzIGV4cGxhaW5pbmcgem9uZXMgYW5kIHRoZSB1c2Ugb2Ygem9uZXMgaW4gQW5ndWxhciBhbmQgY2hhbmdlLWRldGVjdGlvblxuICogICAtIGxpbmsgdG8gcnVuT3V0c2lkZUFuZ3VsYXIvcnVuICh0aHJvdWdob3V0IHRoaXMgZmlsZSEpXG4gKiAgIC0tPlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbmctem9uZS1kZW1vJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8aDI+RGVtbzogTmdab25lPC9oMj5cbiAqXG4gKiAgICAgPHA+UHJvZ3Jlc3M6IHt7cHJvZ3Jlc3N9fSU8L3A+XG4gKiAgICAgPHAgKm5nSWY9XCJwcm9ncmVzcyA+PSAxMDBcIj5Eb25lIHByb2Nlc3Npbmcge3tsYWJlbH19IG9mIEFuZ3VsYXIgem9uZSE8L3A+XG4gKlxuICogICAgIDxidXR0b24gKGNsaWNrKT1cInByb2Nlc3NXaXRoaW5Bbmd1bGFyWm9uZSgpXCI+UHJvY2VzcyB3aXRoaW4gQW5ndWxhciB6b25lPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJvY2Vzc091dHNpZGVPZkFuZ3VsYXJab25lKClcIj5Qcm9jZXNzIG91dHNpZGUgb2YgQW5ndWxhciB6b25lPC9idXR0b24+XG4gKiAgIGAsXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIE5nWm9uZURlbW8ge1xuICogICBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAqICAgbGFiZWw6IHN0cmluZztcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuICpcbiAqICAgLy8gTG9vcCBpbnNpZGUgdGhlIEFuZ3VsYXIgem9uZVxuICogICAvLyBzbyB0aGUgVUkgRE9FUyByZWZyZXNoIGFmdGVyIGVhY2ggc2V0VGltZW91dCBjeWNsZVxuICogICBwcm9jZXNzV2l0aGluQW5ndWxhclpvbmUoKSB7XG4gKiAgICAgdGhpcy5sYWJlbCA9ICdpbnNpZGUnO1xuICogICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICogICAgIHRoaXMuX2luY3JlYXNlUHJvZ3Jlc3MoKCkgPT4gY29uc29sZS5sb2coJ0luc2lkZSBEb25lIScpKTtcbiAqICAgfVxuICpcbiAqICAgLy8gTG9vcCBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIHpvbmVcbiAqICAgLy8gc28gdGhlIFVJIERPRVMgTk9UIHJlZnJlc2ggYWZ0ZXIgZWFjaCBzZXRUaW1lb3V0IGN5Y2xlXG4gKiAgIHByb2Nlc3NPdXRzaWRlT2ZBbmd1bGFyWm9uZSgpIHtcbiAqICAgICB0aGlzLmxhYmVsID0gJ291dHNpZGUnO1xuICogICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICogICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gKiAgICAgICB0aGlzLl9pbmNyZWFzZVByb2dyZXNzKCgpID0+IHtcbiAqICAgICAgICAgLy8gcmVlbnRlciB0aGUgQW5ndWxhciB6b25lIGFuZCBkaXNwbGF5IGRvbmVcbiAqICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7IGNvbnNvbGUubG9nKCdPdXRzaWRlIERvbmUhJyk7IH0pO1xuICogICAgICAgfSk7XG4gKiAgICAgfSk7XG4gKiAgIH1cbiAqXG4gKiAgIF9pbmNyZWFzZVByb2dyZXNzKGRvbmVDYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICogICAgIHRoaXMucHJvZ3Jlc3MgKz0gMTtcbiAqICAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBwcm9ncmVzczogJHt0aGlzLnByb2dyZXNzfSVgKTtcbiAqXG4gKiAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPCAxMDApIHtcbiAqICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuX2luY3JlYXNlUHJvZ3Jlc3MoZG9uZUNhbGxiYWNrKSwgMTApO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIE5nWm9uZSB7XG4gIHJlYWRvbmx5IGhhc1BlbmRpbmdNYWNyb3Rhc2tzOiBib29sZWFuID0gZmFsc2U7XG4gIHJlYWRvbmx5IGhhc1BlbmRpbmdNaWNyb3Rhc2tzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlcmUgYXJlIG5vIG91dHN0YW5kaW5nIG1pY3JvdGFza3Mgb3IgbWFjcm90YXNrcy5cbiAgICovXG4gIHJlYWRvbmx5IGlzU3RhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogTm90aWZpZXMgd2hlbiBjb2RlIGVudGVycyBBbmd1bGFyIFpvbmUuIFRoaXMgZ2V0cyBmaXJlZCBmaXJzdCBvbiBWTSBUdXJuLlxuICAgKi9cbiAgcmVhZG9ubHkgb25VbnN0YWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAvKipcbiAgICogTm90aWZpZXMgd2hlbiB0aGVyZSBpcyBubyBtb3JlIG1pY3JvdGFza3MgZW5xdWV1ZWQgaW4gdGhlIGN1cnJlbnQgVk0gVHVybi5cbiAgICogVGhpcyBpcyBhIGhpbnQgZm9yIEFuZ3VsYXIgdG8gZG8gY2hhbmdlIGRldGVjdGlvbiwgd2hpY2ggbWF5IGVucXVldWUgbW9yZSBtaWNyb3Rhc2tzLlxuICAgKiBGb3IgdGhpcyByZWFzb24gdGhpcyBldmVudCBjYW4gZmlyZSBtdWx0aXBsZSB0aW1lcyBwZXIgVk0gVHVybi5cbiAgICovXG4gIHJlYWRvbmx5IG9uTWljcm90YXNrRW1wdHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIHdoZW4gdGhlIGxhc3QgYG9uTWljcm90YXNrRW1wdHlgIGhhcyBydW4gYW5kIHRoZXJlIGFyZSBubyBtb3JlIG1pY3JvdGFza3MsIHdoaWNoXG4gICAqIGltcGxpZXMgd2UgYXJlIGFib3V0IHRvIHJlbGlucXVpc2ggVk0gdHVybi5cbiAgICogVGhpcyBldmVudCBnZXRzIGNhbGxlZCBqdXN0IG9uY2UuXG4gICAqL1xuICByZWFkb25seSBvblN0YWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAvKipcbiAgICogTm90aWZpZXMgdGhhdCBhbiBlcnJvciBoYXMgYmVlbiBkZWxpdmVyZWQuXG4gICAqL1xuICByZWFkb25seSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG5cbiAgY29uc3RydWN0b3Ioe2VuYWJsZUxvbmdTdGFja1RyYWNlID0gZmFsc2UsIHNob3VsZENvYWxlc2NlRXZlbnRDaGFuZ2VEZXRlY3Rpb24gPSBmYWxzZX0pIHtcbiAgICBpZiAodHlwZW9mIFpvbmUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW4gdGhpcyBjb25maWd1cmF0aW9uIEFuZ3VsYXIgcmVxdWlyZXMgWm9uZS5qc2ApO1xuICAgIH1cblxuICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQoKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcyBhcyBhbnkgYXMgTmdab25lUHJpdmF0ZTtcbiAgICBzZWxmLl9uZXN0aW5nID0gMDtcblxuICAgIHNlbGYuX291dGVyID0gc2VsZi5faW5uZXIgPSBab25lLmN1cnJlbnQ7XG5cbiAgICBpZiAoKFpvbmUgYXMgYW55KVsnd3RmWm9uZVNwZWMnXSkge1xuICAgICAgc2VsZi5faW5uZXIgPSBzZWxmLl9pbm5lci5mb3JrKChab25lIGFzIGFueSlbJ3d0ZlpvbmVTcGVjJ10pO1xuICAgIH1cblxuICAgIGlmICgoWm9uZSBhcyBhbnkpWydUYXNrVHJhY2tpbmdab25lU3BlYyddKSB7XG4gICAgICBzZWxmLl9pbm5lciA9IHNlbGYuX2lubmVyLmZvcmsobmV3ICgoWm9uZSBhcyBhbnkpWydUYXNrVHJhY2tpbmdab25lU3BlYyddIGFzIGFueSkpO1xuICAgIH1cblxuICAgIGlmIChlbmFibGVMb25nU3RhY2tUcmFjZSAmJiAoWm9uZSBhcyBhbnkpWydsb25nU3RhY2tUcmFjZVpvbmVTcGVjJ10pIHtcbiAgICAgIHNlbGYuX2lubmVyID0gc2VsZi5faW5uZXIuZm9yaygoWm9uZSBhcyBhbnkpWydsb25nU3RhY2tUcmFjZVpvbmVTcGVjJ10pO1xuICAgIH1cblxuICAgIHNlbGYuc2hvdWxkQ29hbGVzY2VFdmVudENoYW5nZURldGVjdGlvbiA9IHNob3VsZENvYWxlc2NlRXZlbnRDaGFuZ2VEZXRlY3Rpb247XG4gICAgc2VsZi5sYXN0UmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAtMTtcbiAgICBzZWxmLm5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGdldE5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSgpLm5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICBmb3JrSW5uZXJab25lV2l0aEFuZ3VsYXJCZWhhdmlvcihzZWxmKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0luQW5ndWxhclpvbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFpvbmUuY3VycmVudC5nZXQoJ2lzQW5ndWxhclpvbmUnKSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3NlcnRJbkFuZ3VsYXJab25lKCk6IHZvaWQge1xuICAgIGlmICghTmdab25lLmlzSW5Bbmd1bGFyWm9uZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRvIGJlIGluIEFuZ3VsYXIgWm9uZSwgYnV0IGl0IGlzIG5vdCEnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXNzZXJ0Tm90SW5Bbmd1bGFyWm9uZSgpOiB2b2lkIHtcbiAgICBpZiAoTmdab25lLmlzSW5Bbmd1bGFyWm9uZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRvIG5vdCBiZSBpbiBBbmd1bGFyIFpvbmUsIGJ1dCBpdCBpcyEnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIGBmbmAgZnVuY3Rpb24gc3luY2hyb25vdXNseSB3aXRoaW4gdGhlIEFuZ3VsYXIgem9uZSBhbmQgcmV0dXJucyB2YWx1ZSByZXR1cm5lZCBieVxuICAgKiB0aGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIFJ1bm5pbmcgZnVuY3Rpb25zIHZpYSBgcnVuYCBhbGxvd3MgeW91IHRvIHJlZW50ZXIgQW5ndWxhciB6b25lIGZyb20gYSB0YXNrIHRoYXQgd2FzIGV4ZWN1dGVkXG4gICAqIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZSAodHlwaWNhbGx5IHN0YXJ0ZWQgdmlhIHtAbGluayAjcnVuT3V0c2lkZUFuZ3VsYXJ9KS5cbiAgICpcbiAgICogQW55IGZ1dHVyZSB0YXNrcyBvciBtaWNyb3Rhc2tzIHNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udGludWUgZXhlY3V0aW5nIGZyb21cbiAgICogd2l0aGluIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqXG4gICAqIElmIGEgc3luY2hyb25vdXMgZXJyb3IgaGFwcGVucyBpdCB3aWxsIGJlIHJldGhyb3duIGFuZCBub3QgcmVwb3J0ZWQgdmlhIGBvbkVycm9yYC5cbiAgICovXG4gIHJ1bjxUPihmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiBULCBhcHBseVRoaXM/OiBhbnksIGFwcGx5QXJncz86IGFueVtdKTogVCB7XG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSBhcyBOZ1pvbmVQcml2YXRlKS5faW5uZXIucnVuKGZuLCBhcHBseVRoaXMsIGFwcGx5QXJncykgYXMgVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyB0aGUgYGZuYCBmdW5jdGlvbiBzeW5jaHJvbm91c2x5IHdpdGhpbiB0aGUgQW5ndWxhciB6b25lIGFzIGEgdGFzayBhbmQgcmV0dXJucyB2YWx1ZVxuICAgKiByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIFJ1bm5pbmcgZnVuY3Rpb25zIHZpYSBgcnVuYCBhbGxvd3MgeW91IHRvIHJlZW50ZXIgQW5ndWxhciB6b25lIGZyb20gYSB0YXNrIHRoYXQgd2FzIGV4ZWN1dGVkXG4gICAqIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZSAodHlwaWNhbGx5IHN0YXJ0ZWQgdmlhIHtAbGluayAjcnVuT3V0c2lkZUFuZ3VsYXJ9KS5cbiAgICpcbiAgICogQW55IGZ1dHVyZSB0YXNrcyBvciBtaWNyb3Rhc2tzIHNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udGludWUgZXhlY3V0aW5nIGZyb21cbiAgICogd2l0aGluIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqXG4gICAqIElmIGEgc3luY2hyb25vdXMgZXJyb3IgaGFwcGVucyBpdCB3aWxsIGJlIHJldGhyb3duIGFuZCBub3QgcmVwb3J0ZWQgdmlhIGBvbkVycm9yYC5cbiAgICovXG4gIHJ1blRhc2s8VD4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gVCwgYXBwbHlUaGlzPzogYW55LCBhcHBseUFyZ3M/OiBhbnlbXSwgbmFtZT86IHN0cmluZyk6IFQge1xuICAgIGNvbnN0IHpvbmUgPSAodGhpcyBhcyBhbnkgYXMgTmdab25lUHJpdmF0ZSkuX2lubmVyO1xuICAgIGNvbnN0IHRhc2sgPSB6b25lLnNjaGVkdWxlRXZlbnRUYXNrKCdOZ1pvbmVFdmVudDogJyArIG5hbWUsIGZuLCBFTVBUWV9QQVlMT0FELCBub29wLCBub29wKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHpvbmUucnVuVGFzayh0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgYXMgVDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYW1lIGFzIGBydW5gLCBleGNlcHQgdGhhdCBzeW5jaHJvbm91cyBlcnJvcnMgYXJlIGNhdWdodCBhbmQgZm9yd2FyZGVkIHZpYSBgb25FcnJvcmAgYW5kIG5vdFxuICAgKiByZXRocm93bi5cbiAgICovXG4gIHJ1bkd1YXJkZWQ8VD4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gVCwgYXBwbHlUaGlzPzogYW55LCBhcHBseUFyZ3M/OiBhbnlbXSk6IFQge1xuICAgIHJldHVybiAodGhpcyBhcyBhbnkgYXMgTmdab25lUHJpdmF0ZSkuX2lubmVyLnJ1bkd1YXJkZWQoZm4sIGFwcGx5VGhpcywgYXBwbHlBcmdzKSBhcyBUO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBgZm5gIGZ1bmN0aW9uIHN5bmNocm9ub3VzbHkgaW4gQW5ndWxhcidzIHBhcmVudCB6b25lIGFuZCByZXR1cm5zIHZhbHVlIHJldHVybmVkIGJ5XG4gICAqIHRoZSBmdW5jdGlvbi5cbiAgICpcbiAgICogUnVubmluZyBmdW5jdGlvbnMgdmlhIHtAbGluayAjcnVuT3V0c2lkZUFuZ3VsYXJ9IGFsbG93cyB5b3UgdG8gZXNjYXBlIEFuZ3VsYXIncyB6b25lIGFuZCBkb1xuICAgKiB3b3JrIHRoYXRcbiAgICogZG9lc24ndCB0cmlnZ2VyIEFuZ3VsYXIgY2hhbmdlLWRldGVjdGlvbiBvciBpcyBzdWJqZWN0IHRvIEFuZ3VsYXIncyBlcnJvciBoYW5kbGluZy5cbiAgICpcbiAgICogQW55IGZ1dHVyZSB0YXNrcyBvciBtaWNyb3Rhc2tzIHNjaGVkdWxlZCBmcm9tIHdpdGhpbiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udGludWUgZXhlY3V0aW5nIGZyb21cbiAgICogb3V0c2lkZSBvZiB0aGUgQW5ndWxhciB6b25lLlxuICAgKlxuICAgKiBVc2Uge0BsaW5rICNydW59IHRvIHJlZW50ZXIgdGhlIEFuZ3VsYXIgem9uZSBhbmQgZG8gd29yayB0aGF0IHVwZGF0ZXMgdGhlIGFwcGxpY2F0aW9uIG1vZGVsLlxuICAgKi9cbiAgcnVuT3V0c2lkZUFuZ3VsYXI8VD4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gVCk6IFQge1xuICAgIHJldHVybiAodGhpcyBhcyBhbnkgYXMgTmdab25lUHJpdmF0ZSkuX291dGVyLnJ1bihmbikgYXMgVDtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cbmNvbnN0IEVNUFRZX1BBWUxPQUQgPSB7fTtcblxuaW50ZXJmYWNlIE5nWm9uZVByaXZhdGUgZXh0ZW5kcyBOZ1pvbmUge1xuICBfb3V0ZXI6IFpvbmU7XG4gIF9pbm5lcjogWm9uZTtcbiAgX25lc3Rpbmc6IG51bWJlcjtcbiAgX2hhc1BlbmRpbmdNaWNyb3Rhc2tzOiBib29sZWFuO1xuXG4gIGhhc1BlbmRpbmdNYWNyb3Rhc2tzOiBib29sZWFuO1xuICBoYXNQZW5kaW5nTWljcm90YXNrczogYm9vbGVhbjtcbiAgbGFzdFJlcXVlc3RBbmltYXRpb25GcmFtZUlkOiBudW1iZXI7XG4gIGlzU3RhYmxlOiBib29sZWFuO1xuICBzaG91bGRDb2FsZXNjZUV2ZW50Q2hhbmdlRGV0ZWN0aW9uOiBib29sZWFuO1xuICBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGFibGUoem9uZTogTmdab25lUHJpdmF0ZSkge1xuICBpZiAoem9uZS5fbmVzdGluZyA9PSAwICYmICF6b25lLmhhc1BlbmRpbmdNaWNyb3Rhc2tzICYmICF6b25lLmlzU3RhYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHpvbmUuX25lc3RpbmcrKztcbiAgICAgIHpvbmUub25NaWNyb3Rhc2tFbXB0eS5lbWl0KG51bGwpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB6b25lLl9uZXN0aW5nLS07XG4gICAgICBpZiAoIXpvbmUuaGFzUGVuZGluZ01pY3JvdGFza3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHpvbmUub25TdGFibGUuZW1pdChudWxsKSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgem9uZS5pc1N0YWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsYXlDaGFuZ2VEZXRlY3Rpb25Gb3JFdmVudHMoem9uZTogTmdab25lUHJpdmF0ZSkge1xuICBpZiAoem9uZS5sYXN0UmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgIT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHpvbmUubGFzdFJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gem9uZS5uYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuY2FsbChnbG9iYWwsICgpID0+IHtcbiAgICB6b25lLmxhc3RSZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IC0xO1xuICAgIHVwZGF0ZU1pY3JvVGFza1N0YXR1cyh6b25lKTtcbiAgICBjaGVja1N0YWJsZSh6b25lKTtcbiAgfSk7XG4gIHVwZGF0ZU1pY3JvVGFza1N0YXR1cyh6b25lKTtcbn1cblxuZnVuY3Rpb24gZm9ya0lubmVyWm9uZVdpdGhBbmd1bGFyQmVoYXZpb3Ioem9uZTogTmdab25lUHJpdmF0ZSkge1xuICBjb25zdCBkZWxheUNoYW5nZURldGVjdGlvbkZvckV2ZW50c0RlbGVnYXRlID0gKCkgPT4ge1xuICAgIGRlbGF5Q2hhbmdlRGV0ZWN0aW9uRm9yRXZlbnRzKHpvbmUpO1xuICB9O1xuICBjb25zdCBtYXliZURlbGF5Q2hhbmdlRGV0ZWN0aW9uID0gISF6b25lLnNob3VsZENvYWxlc2NlRXZlbnRDaGFuZ2VEZXRlY3Rpb24gJiZcbiAgICAgIHpvbmUubmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIGRlbGF5Q2hhbmdlRGV0ZWN0aW9uRm9yRXZlbnRzRGVsZWdhdGU7XG4gIHpvbmUuX2lubmVyID0gem9uZS5faW5uZXIuZm9yayh7XG4gICAgbmFtZTogJ2FuZ3VsYXInLFxuICAgIHByb3BlcnRpZXM6XG4gICAgICAgIDxhbnk+eydpc0FuZ3VsYXJab25lJzogdHJ1ZSwgJ21heWJlRGVsYXlDaGFuZ2VEZXRlY3Rpb24nOiBtYXliZURlbGF5Q2hhbmdlRGV0ZWN0aW9ufSxcbiAgICBvbkludm9rZVRhc2s6XG4gICAgICAgIChkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIHRhc2s6IFRhc2ssIGFwcGx5VGhpczogYW55LFxuICAgICAgICAgYXBwbHlBcmdzOiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbkVudGVyKHpvbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChtYXliZURlbGF5Q2hhbmdlRGV0ZWN0aW9uICYmIHRhc2sudHlwZSA9PT0gJ2V2ZW50VGFzaycpIHtcbiAgICAgICAgICAgICAgbWF5YmVEZWxheUNoYW5nZURldGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25MZWF2ZSh6b25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuICAgIG9uSW52b2tlOlxuICAgICAgICAoZGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCBjYWxsYmFjazogRnVuY3Rpb24sIGFwcGx5VGhpczogYW55LFxuICAgICAgICAgYXBwbHlBcmdzPzogYW55W10sIHNvdXJjZT86IHN0cmluZyk6IGFueSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9uRW50ZXIoem9uZSk7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuaW52b2tlKHRhcmdldCwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBvbkxlYXZlKHpvbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIG9uSGFzVGFzazpcbiAgICAgICAgKGRlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnQ6IFpvbmUsIHRhcmdldDogWm9uZSwgaGFzVGFza1N0YXRlOiBIYXNUYXNrU3RhdGUpID0+IHtcbiAgICAgICAgICBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKTtcbiAgICAgICAgICBpZiAoY3VycmVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBXZSBhcmUgb25seSBpbnRlcmVzdGVkIGluIGhhc1Rhc2sgZXZlbnRzIHdoaWNoIG9yaWdpbmF0ZSBmcm9tIG91ciB6b25lXG4gICAgICAgICAgICAvLyAoQSBjaGlsZCBoYXNUYXNrIGV2ZW50IGlzIG5vdCBpbnRlcmVzdGluZyB0byB1cylcbiAgICAgICAgICAgIGlmIChoYXNUYXNrU3RhdGUuY2hhbmdlID09ICdtaWNyb1Rhc2snKSB7XG4gICAgICAgICAgICAgIHpvbmUuX2hhc1BlbmRpbmdNaWNyb3Rhc2tzID0gaGFzVGFza1N0YXRlLm1pY3JvVGFzaztcbiAgICAgICAgICAgICAgdXBkYXRlTWljcm9UYXNrU3RhdHVzKHpvbmUpO1xuICAgICAgICAgICAgICBjaGVja1N0YWJsZSh6b25lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzVGFza1N0YXRlLmNoYW5nZSA9PSAnbWFjcm9UYXNrJykge1xuICAgICAgICAgICAgICB6b25lLmhhc1BlbmRpbmdNYWNyb3Rhc2tzID0gaGFzVGFza1N0YXRlLm1hY3JvVGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICBvbkhhbmRsZUVycm9yOiAoZGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCBlcnJvcjogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICBkZWxlZ2F0ZS5oYW5kbGVFcnJvcih0YXJnZXQsIGVycm9yKTtcbiAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gem9uZS5vbkVycm9yLmVtaXQoZXJyb3IpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVNaWNyb1Rhc2tTdGF0dXMoem9uZTogTmdab25lUHJpdmF0ZSkge1xuICBpZiAoem9uZS5faGFzUGVuZGluZ01pY3JvdGFza3MgfHxcbiAgICAgICh6b25lLnNob3VsZENvYWxlc2NlRXZlbnRDaGFuZ2VEZXRlY3Rpb24gJiYgem9uZS5sYXN0UmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgIT09IC0xKSkge1xuICAgIHpvbmUuaGFzUGVuZGluZ01pY3JvdGFza3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHpvbmUuaGFzUGVuZGluZ01pY3JvdGFza3MgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkVudGVyKHpvbmU6IE5nWm9uZVByaXZhdGUpIHtcbiAgem9uZS5fbmVzdGluZysrO1xuICBpZiAoem9uZS5pc1N0YWJsZSkge1xuICAgIHpvbmUuaXNTdGFibGUgPSBmYWxzZTtcbiAgICB6b25lLm9uVW5zdGFibGUuZW1pdChudWxsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkxlYXZlKHpvbmU6IE5nWm9uZVByaXZhdGUpIHtcbiAgem9uZS5fbmVzdGluZy0tO1xuICBjaGVja1N0YWJsZSh6b25lKTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIG5vb3AgaW1wbGVtZW50YXRpb24gb2YgYE5nWm9uZWAgd2hpY2ggZG9lcyBub3RoaW5nLiBUaGlzIHpvbmUgcmVxdWlyZXMgZXhwbGljaXQgY2FsbHNcbiAqIHRvIGZyYW1ld29yayB0byBwZXJmb3JtIHJlbmRlcmluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BOZ1pvbmUgaW1wbGVtZW50cyBOZ1pvbmUge1xuICByZWFkb25seSBoYXNQZW5kaW5nTWljcm90YXNrczogYm9vbGVhbiA9IGZhbHNlO1xuICByZWFkb25seSBoYXNQZW5kaW5nTWFjcm90YXNrczogYm9vbGVhbiA9IGZhbHNlO1xuICByZWFkb25seSBpc1N0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHJlYWRvbmx5IG9uVW5zdGFibGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkb25seSBvbk1pY3JvdGFza0VtcHR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25TdGFibGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkb25seSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBydW4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCBhcHBseVRoaXM/OiBhbnksIGFwcGx5QXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgfVxuXG4gIHJ1bkd1YXJkZWQoZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCBhcHBseVRoaXM/OiBhbnksIGFwcGx5QXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgfVxuXG4gIHJ1bk91dHNpZGVBbmd1bGFyKGZuOiAoLi4uYXJnczogYW55W10pID0+IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICBydW5UYXNrKGZuOiAoLi4uYXJnczogYW55W10pID0+IGFueSwgYXBwbHlUaGlzPzogYW55LCBhcHBseUFyZ3M/OiBhbnksIG5hbWU/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBmbi5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gIH1cbn1cbiJdfQ==