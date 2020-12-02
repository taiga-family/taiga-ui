/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/before_each.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Public Test Library for unit testing Angular applications. Assumes that you are running
 * with Jasmine, Mocha, or a similar framework which exports a beforeEach function and
 * allows tests to be asynchronous by either returning a promise or using a 'done' parameter.
 */
import { resetFakeAsyncZone } from './fake_async';
import { TestBed } from './test_bed';
/** @type {?} */
const _global = (/** @type {?} */ ((typeof window === 'undefined' ? global : window)));
// Reset the test providers and the fake async zone before each test.
if (_global.beforeEach) {
    _global.beforeEach((/**
     * @return {?}
     */
    () => {
        TestBed.resetTestingModule();
        resetFakeAsyncZone();
    }));
}
// TODO(juliemr): remove this, only used because we need to export something to have compilation
// work.
/** @type {?} */
export const __core_private_testing_placeholder__ = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmb3JlX2VhY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2JlZm9yZV9lYWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7O01BSTdCLE9BQU8sR0FBRyxtQkFBSyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQTs7QUFHdEUsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxVQUFVOzs7SUFBQyxHQUFHLEVBQUU7UUFDdEIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0Isa0JBQWtCLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUMsQ0FBQztDQUNKOzs7O0FBSUQsTUFBTSxPQUFPLG9DQUFvQyxHQUFHLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogUHVibGljIFRlc3QgTGlicmFyeSBmb3IgdW5pdCB0ZXN0aW5nIEFuZ3VsYXIgYXBwbGljYXRpb25zLiBBc3N1bWVzIHRoYXQgeW91IGFyZSBydW5uaW5nXG4gKiB3aXRoIEphc21pbmUsIE1vY2hhLCBvciBhIHNpbWlsYXIgZnJhbWV3b3JrIHdoaWNoIGV4cG9ydHMgYSBiZWZvcmVFYWNoIGZ1bmN0aW9uIGFuZFxuICogYWxsb3dzIHRlc3RzIHRvIGJlIGFzeW5jaHJvbm91cyBieSBlaXRoZXIgcmV0dXJuaW5nIGEgcHJvbWlzZSBvciB1c2luZyBhICdkb25lJyBwYXJhbWV0ZXIuXG4gKi9cblxuaW1wb3J0IHtyZXNldEZha2VBc3luY1pvbmV9IGZyb20gJy4vZmFrZV9hc3luYyc7XG5pbXBvcnQge1Rlc3RCZWR9IGZyb20gJy4vdGVzdF9iZWQnO1xuXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcblxuY29uc3QgX2dsb2JhbCA9IDxhbnk+KHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93KTtcblxuLy8gUmVzZXQgdGhlIHRlc3QgcHJvdmlkZXJzIGFuZCB0aGUgZmFrZSBhc3luYyB6b25lIGJlZm9yZSBlYWNoIHRlc3QuXG5pZiAoX2dsb2JhbC5iZWZvcmVFYWNoKSB7XG4gIF9nbG9iYWwuYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgVGVzdEJlZC5yZXNldFRlc3RpbmdNb2R1bGUoKTtcbiAgICByZXNldEZha2VBc3luY1pvbmUoKTtcbiAgfSk7XG59XG5cbi8vIFRPRE8oanVsaWVtcik6IHJlbW92ZSB0aGlzLCBvbmx5IHVzZWQgYmVjYXVzZSB3ZSBuZWVkIHRvIGV4cG9ydCBzb21ldGhpbmcgdG8gaGF2ZSBjb21waWxhdGlvblxuLy8gd29yay5cbmV4cG9ydCBjb25zdCBfX2NvcmVfcHJpdmF0ZV90ZXN0aW5nX3BsYWNlaG9sZGVyX18gPSAnJztcbiJdfQ==