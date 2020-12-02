/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/testing_internal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵisPromise as isPromise } from '@angular/core';
import { global } from '@angular/core/src/util/global';
import { AsyncTestCompleter } from './async_test_completer';
import { getTestBed } from './test_bed';
export { AsyncTestCompleter } from './async_test_completer';
export { inject } from './test_bed';
export { Log } from './logger';
export { MockNgZone } from './ng_zone_mock';
/** @type {?} */
export const proxy = (/**
 * @param {?} t
 * @return {?}
 */
(t) => t);
/** @type {?} */
const _global = (/** @type {?} */ ((typeof window === 'undefined' ? global : window)));
/** @type {?} */
export const afterEach = _global.afterEach;
/** @type {?} */
export const expect = _global.expect;
/** @type {?} */
const jsmBeforeEach = _global.beforeEach;
/** @type {?} */
const jsmDescribe = _global.describe;
/** @type {?} */
const jsmDDescribe = _global.fdescribe;
/** @type {?} */
const jsmXDescribe = _global.xdescribe;
/** @type {?} */
const jsmIt = _global.it;
/** @type {?} */
const jsmFIt = _global.fit;
/** @type {?} */
const jsmXIt = _global.xit;
/** @type {?} */
const runnerStack = [];
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
/** @type {?} */
const globalTimeOut = jasmine.DEFAULT_TIMEOUT_INTERVAL;
/** @type {?} */
const testBed = getTestBed();
/**
 * Mechanism to run `beforeEach()` functions of Angular tests.
 *
 * Note: Jasmine own `beforeEach` is used by this library to handle DI providers.
 */
class BeforeEachRunner {
    /**
     * @param {?} _parent
     */
    constructor(_parent) {
        this._parent = _parent;
        this._fns = [];
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    beforeEach(fn) {
        this._fns.push(fn);
    }
    /**
     * @return {?}
     */
    run() {
        if (this._parent)
            this._parent.run();
        this._fns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        (fn) => {
            fn();
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BeforeEachRunner.prototype._fns;
    /**
     * @type {?}
     * @private
     */
    BeforeEachRunner.prototype._parent;
}
// Reset the test providers before each test
jsmBeforeEach((/**
 * @return {?}
 */
() => {
    testBed.resetTestingModule();
}));
/**
 * @param {?} jsmFn
 * @param {...?} args
 * @return {?}
 */
function _describe(jsmFn, ...args) {
    /** @type {?} */
    const parentRunner = runnerStack.length === 0 ? null : runnerStack[runnerStack.length - 1];
    /** @type {?} */
    const runner = new BeforeEachRunner((/** @type {?} */ (parentRunner)));
    runnerStack.push(runner);
    /** @type {?} */
    const suite = jsmFn(...args);
    runnerStack.pop();
    return suite;
}
/**
 * @param {...?} args
 * @return {?}
 */
export function describe(...args) {
    return _describe(jsmDescribe, ...args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function ddescribe(...args) {
    return _describe(jsmDDescribe, ...args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function xdescribe(...args) {
    return _describe(jsmXDescribe, ...args);
}
/**
 * @param {?} fn
 * @return {?}
 */
export function beforeEach(fn) {
    if (runnerStack.length > 0) {
        // Inside a describe block, beforeEach() uses a BeforeEachRunner
        runnerStack[runnerStack.length - 1].beforeEach(fn);
    }
    else {
        // Top level beforeEach() are delegated to jasmine
        jsmBeforeEach(fn);
    }
}
/**
 * Allows overriding default providers defined in test_injector.js.
 *
 * The given function must return a list of DI providers.
 *
 * Example:
 *
 *   beforeEachProviders(() => [
 *     {provide: Compiler, useClass: MockCompiler},
 *     {provide: SomeToken, useValue: myValue},
 *   ]);
 * @param {?} fn
 * @return {?}
 */
export function beforeEachProviders(fn) {
    jsmBeforeEach((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const providers = fn();
        if (!providers)
            return;
        testBed.configureTestingModule({ providers: providers });
    }));
}
/**
 * @param {?} jsmFn
 * @param {?} testName
 * @param {?} testFn
 * @param {?=} testTimeout
 * @return {?}
 */
function _it(jsmFn, testName, testFn, testTimeout = 0) {
    if (runnerStack.length == 0) {
        // This left here intentionally, as we should never get here, and it aids debugging.
        // tslint:disable-next-line
        debugger;
        throw new Error('Empty Stack!');
    }
    /** @type {?} */
    const runner = runnerStack[runnerStack.length - 1];
    /** @type {?} */
    const timeout = Math.max(globalTimeOut, testTimeout);
    jsmFn(testName, (/**
     * @param {?} done
     * @return {?}
     */
    (done) => {
        /** @type {?} */
        const completerProvider = {
            provide: AsyncTestCompleter,
            useFactory: (/**
             * @return {?}
             */
            () => {
                // Mark the test as async when an AsyncTestCompleter is injected in an it()
                return new AsyncTestCompleter();
            })
        };
        testBed.configureTestingModule({ providers: [completerProvider] });
        runner.run();
        if (testFn.length === 0) {
            // TypeScript doesn't infer the TestFn type without parameters here, so we
            // need to manually cast it.
            /** @type {?} */
            const retVal = ((/** @type {?} */ (testFn)))();
            if (isPromise(retVal)) {
                // Asynchronous test function that returns a Promise - wait for completion.
                retVal.then(done, done.fail);
            }
            else {
                // Synchronous test function - complete immediately.
                done();
            }
        }
        else {
            // Asynchronous test function that takes in 'done' parameter.
            testFn(done);
        }
    }), timeout);
}
/**
 * @param {?} expectation
 * @param {?} assertion
 * @param {?=} timeout
 * @return {?}
 */
export function it(expectation, assertion, timeout) {
    return _it(jsmIt, expectation, assertion, timeout);
}
/**
 * @param {?} expectation
 * @param {?} assertion
 * @param {?=} timeout
 * @return {?}
 */
export function fit(expectation, assertion, timeout) {
    return _it(jsmFIt, expectation, assertion, timeout);
}
/**
 * @param {?} expectation
 * @param {?} assertion
 * @param {?=} timeout
 * @return {?}
 */
export function xit(expectation, assertion, timeout) {
    return _it(jsmXIt, expectation, assertion, timeout);
}
export class SpyObject {
    /**
     * @param {?=} type
     */
    constructor(type) {
        if (type) {
            for (const prop in type.prototype) {
                /** @type {?} */
                let m = null;
                try {
                    m = type.prototype[prop];
                }
                catch (_a) {
                    // As we are creating spys for abstract classes,
                    // these classes might have getters that throw when they are accessed.
                    // As we are only auto creating spys for methods, this
                    // should not matter.
                }
                if (typeof m === 'function') {
                    this.spy(prop);
                }
            }
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    spy(name) {
        if (!((/** @type {?} */ (this)))[name]) {
            ((/** @type {?} */ (this)))[name] = jasmine.createSpy(name);
        }
        return ((/** @type {?} */ (this)))[name];
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    prop(name, value) {
        ((/** @type {?} */ (this)))[name] = value;
    }
    /**
     * @param {?=} object
     * @param {?=} config
     * @param {?=} overrides
     * @return {?}
     */
    static stub(object = null, config = null, overrides = null) {
        if (!(object instanceof SpyObject)) {
            overrides = config;
            config = object;
            object = new SpyObject();
        }
        /** @type {?} */
        const m = Object.assign(Object.assign({}, config), overrides);
        Object.keys(m).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            object.spy(key).and.returnValue(m[key]);
        }));
        return object;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZ19pbnRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvdGVzdGluZ19pbnRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxJQUFJLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFckQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBUyxNQUFNLFlBQVksQ0FBQztBQUU5QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWxDLG9CQUFjLFVBQVUsQ0FBQztBQUN6QiwyQkFBYyxnQkFBZ0IsQ0FBQzs7QUFFL0IsTUFBTSxPQUFPLEtBQUs7Ozs7QUFBbUIsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTs7TUFFNUMsT0FBTyxHQUFHLG1CQUFLLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFBOztBQUV0RSxNQUFNLE9BQU8sU0FBUyxHQUFhLE9BQU8sQ0FBQyxTQUFTOztBQUNwRCxNQUFNLE9BQU8sTUFBTSxHQUEwQyxPQUFPLENBQUMsTUFBTTs7TUFFckUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVOztNQUNsQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVE7O01BQzlCLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUzs7TUFDaEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTOztNQUNoQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUU7O01BQ2xC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QUFBLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDM0IsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFjLElBQUksRUFBRSxTQUFjLElBQUksRUFBRSxZQUFpQixJQUFJO1FBQ3ZFLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxTQUFTLENBQUMsRUFBRTtZQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDaEIsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDMUI7O2NBRUssQ0FBQyxtQ0FBTyxNQUFNLEdBQUssU0FBUyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtWlzUHJvbWlzZSBhcyBpc1Byb21pc2V9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtnbG9iYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL3V0aWwvZ2xvYmFsJztcblxuaW1wb3J0IHtBc3luY1Rlc3RDb21wbGV0ZXJ9IGZyb20gJy4vYXN5bmNfdGVzdF9jb21wbGV0ZXInO1xuaW1wb3J0IHtnZXRUZXN0QmVkLCBpbmplY3R9IGZyb20gJy4vdGVzdF9iZWQnO1xuXG5leHBvcnQge0FzeW5jVGVzdENvbXBsZXRlcn0gZnJvbSAnLi9hc3luY190ZXN0X2NvbXBsZXRlcic7XG5leHBvcnQge2luamVjdH0gZnJvbSAnLi90ZXN0X2JlZCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbmdfem9uZV9tb2NrJztcblxuZXhwb3J0IGNvbnN0IHByb3h5OiBDbGFzc0RlY29yYXRvciA9ICh0OiBhbnkpID0+IHQ7XG5cbmNvbnN0IF9nbG9iYWwgPSA8YW55Pih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyk7XG5cbmV4cG9ydCBjb25zdCBhZnRlckVhY2g6IEZ1bmN0aW9uID0gX2dsb2JhbC5hZnRlckVhY2g7XG5leHBvcnQgY29uc3QgZXhwZWN0OiA8VD4oYWN0dWFsOiBUKSA9PiBqYXNtaW5lLk1hdGNoZXJzPFQ+ID0gX2dsb2JhbC5leHBlY3Q7XG5cbmNvbnN0IGpzbUJlZm9yZUVhY2ggPSBfZ2xvYmFsLmJlZm9yZUVhY2g7XG5jb25zdCBqc21EZXNjcmliZSA9IF9nbG9iYWwuZGVzY3JpYmU7XG5jb25zdCBqc21ERGVzY3JpYmUgPSBfZ2xvYmFsLmZkZXNjcmliZTtcbmNvbnN0IGpzbVhEZXNjcmliZSA9IF9nbG9iYWwueGRlc2NyaWJlO1xuY29uc3QganNtSXQgPSBfZ2xvYmFsLml0O1xuY29uc3QganNtRkl0ID0gX2dsb2JhbC5maXQ7XG5jb25zdCBqc21YSXQgPSBfZ2xvYmFsLnhpdDtcblxuY29uc3QgcnVubmVyU3RhY2s6IEJlZm9yZUVhY2hSdW5uZXJbXSA9IFtdO1xuamFzbWluZS5ERUZBVUxUX1RJTUVPVVRfSU5URVJWQUwgPSAzMDAwO1xuY29uc3QgZ2xvYmFsVGltZU91dCA9IGphc21pbmUuREVGQVVMVF9USU1FT1VUX0lOVEVSVkFMO1xuXG5jb25zdCB0ZXN0QmVkID0gZ2V0VGVzdEJlZCgpO1xuXG5leHBvcnQgdHlwZSBUZXN0Rm4gPSAoKGRvbmU6IERvbmVGbikgPT4gYW55KXwoKCkgPT4gYW55KTtcblxuLyoqXG4gKiBNZWNoYW5pc20gdG8gcnVuIGBiZWZvcmVFYWNoKClgIGZ1bmN0aW9ucyBvZiBBbmd1bGFyIHRlc3RzLlxuICpcbiAqIE5vdGU6IEphc21pbmUgb3duIGBiZWZvcmVFYWNoYCBpcyB1c2VkIGJ5IHRoaXMgbGlicmFyeSB0byBoYW5kbGUgREkgcHJvdmlkZXJzLlxuICovXG5jbGFzcyBCZWZvcmVFYWNoUnVubmVyIHtcbiAgcHJpdmF0ZSBfZm5zOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJlbnQ6IEJlZm9yZUVhY2hSdW5uZXIpIHt9XG5cbiAgYmVmb3JlRWFjaChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9mbnMucHVzaChmbik7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhcmVudCkgdGhpcy5fcGFyZW50LnJ1bigpO1xuICAgIHRoaXMuX2Zucy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBSZXNldCB0aGUgdGVzdCBwcm92aWRlcnMgYmVmb3JlIGVhY2ggdGVzdFxuanNtQmVmb3JlRWFjaCgoKSA9PiB7XG4gIHRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG59KTtcblxuZnVuY3Rpb24gX2Rlc2NyaWJlKGpzbUZuOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcbiAgY29uc3QgcGFyZW50UnVubmVyID0gcnVubmVyU3RhY2subGVuZ3RoID09PSAwID8gbnVsbCA6IHJ1bm5lclN0YWNrW3J1bm5lclN0YWNrLmxlbmd0aCAtIDFdO1xuICBjb25zdCBydW5uZXIgPSBuZXcgQmVmb3JlRWFjaFJ1bm5lcihwYXJlbnRSdW5uZXIhKTtcbiAgcnVubmVyU3RhY2sucHVzaChydW5uZXIpO1xuICBjb25zdCBzdWl0ZSA9IGpzbUZuKC4uLmFyZ3MpO1xuICBydW5uZXJTdGFjay5wb3AoKTtcbiAgcmV0dXJuIHN1aXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmUoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgcmV0dXJuIF9kZXNjcmliZShqc21EZXNjcmliZSwgLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZGVzY3JpYmUoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgcmV0dXJuIF9kZXNjcmliZShqc21ERGVzY3JpYmUsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGRlc2NyaWJlKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gIHJldHVybiBfZGVzY3JpYmUoanNtWERlc2NyaWJlLCAuLi5hcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZUVhY2goZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmIChydW5uZXJTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgLy8gSW5zaWRlIGEgZGVzY3JpYmUgYmxvY2ssIGJlZm9yZUVhY2goKSB1c2VzIGEgQmVmb3JlRWFjaFJ1bm5lclxuICAgIHJ1bm5lclN0YWNrW3J1bm5lclN0YWNrLmxlbmd0aCAtIDFdLmJlZm9yZUVhY2goZm4pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvcCBsZXZlbCBiZWZvcmVFYWNoKCkgYXJlIGRlbGVnYXRlZCB0byBqYXNtaW5lXG4gICAganNtQmVmb3JlRWFjaChmbik7XG4gIH1cbn1cblxuLyoqXG4gKiBBbGxvd3Mgb3ZlcnJpZGluZyBkZWZhdWx0IHByb3ZpZGVycyBkZWZpbmVkIGluIHRlc3RfaW5qZWN0b3IuanMuXG4gKlxuICogVGhlIGdpdmVuIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgbGlzdCBvZiBESSBwcm92aWRlcnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIGJlZm9yZUVhY2hQcm92aWRlcnMoKCkgPT4gW1xuICogICAgIHtwcm92aWRlOiBDb21waWxlciwgdXNlQ2xhc3M6IE1vY2tDb21waWxlcn0sXG4gKiAgICAge3Byb3ZpZGU6IFNvbWVUb2tlbiwgdXNlVmFsdWU6IG15VmFsdWV9LFxuICogICBdKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZUVhY2hQcm92aWRlcnMoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGpzbUJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IGZuKCk7XG4gICAgaWYgKCFwcm92aWRlcnMpIHJldHVybjtcbiAgICB0ZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe3Byb3ZpZGVyczogcHJvdmlkZXJzfSk7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIF9pdChqc21GbjogRnVuY3Rpb24sIHRlc3ROYW1lOiBzdHJpbmcsIHRlc3RGbjogVGVzdEZuLCB0ZXN0VGltZW91dCA9IDApOiB2b2lkIHtcbiAgaWYgKHJ1bm5lclN0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgLy8gVGhpcyBsZWZ0IGhlcmUgaW50ZW50aW9uYWxseSwgYXMgd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlLCBhbmQgaXQgYWlkcyBkZWJ1Z2dpbmcuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgZGVidWdnZXI7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbXB0eSBTdGFjayEnKTtcbiAgfVxuICBjb25zdCBydW5uZXIgPSBydW5uZXJTdGFja1tydW5uZXJTdGFjay5sZW5ndGggLSAxXTtcbiAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KGdsb2JhbFRpbWVPdXQsIHRlc3RUaW1lb3V0KTtcblxuICBqc21Gbih0ZXN0TmFtZSwgKGRvbmU6IERvbmVGbikgPT4ge1xuICAgIGNvbnN0IGNvbXBsZXRlclByb3ZpZGVyID0ge1xuICAgICAgcHJvdmlkZTogQXN5bmNUZXN0Q29tcGxldGVyLFxuICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICAvLyBNYXJrIHRoZSB0ZXN0IGFzIGFzeW5jIHdoZW4gYW4gQXN5bmNUZXN0Q29tcGxldGVyIGlzIGluamVjdGVkIGluIGFuIGl0KClcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY1Rlc3RDb21wbGV0ZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7cHJvdmlkZXJzOiBbY29tcGxldGVyUHJvdmlkZXJdfSk7XG4gICAgcnVubmVyLnJ1bigpO1xuXG4gICAgaWYgKHRlc3RGbi5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBpbmZlciB0aGUgVGVzdEZuIHR5cGUgd2l0aG91dCBwYXJhbWV0ZXJzIGhlcmUsIHNvIHdlXG4gICAgICAvLyBuZWVkIHRvIG1hbnVhbGx5IGNhc3QgaXQuXG4gICAgICBjb25zdCByZXRWYWwgPSAodGVzdEZuIGFzICgpID0+IGFueSkoKTtcbiAgICAgIGlmIChpc1Byb21pc2UocmV0VmFsKSkge1xuICAgICAgICAvLyBBc3luY2hyb25vdXMgdGVzdCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIC0gd2FpdCBmb3IgY29tcGxldGlvbi5cbiAgICAgICAgcmV0VmFsLnRoZW4oZG9uZSwgZG9uZS5mYWlsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFN5bmNocm9ub3VzIHRlc3QgZnVuY3Rpb24gLSBjb21wbGV0ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3luY2hyb25vdXMgdGVzdCBmdW5jdGlvbiB0aGF0IHRha2VzIGluICdkb25lJyBwYXJhbWV0ZXIuXG4gICAgICB0ZXN0Rm4oZG9uZSk7XG4gICAgfVxuICB9LCB0aW1lb3V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGl0KGV4cGVjdGF0aW9uOiBzdHJpbmcsIGFzc2VydGlvbjogVGVzdEZuLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gIHJldHVybiBfaXQoanNtSXQsIGV4cGVjdGF0aW9uLCBhc3NlcnRpb24sIHRpbWVvdXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0KGV4cGVjdGF0aW9uOiBzdHJpbmcsIGFzc2VydGlvbjogVGVzdEZuLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gIHJldHVybiBfaXQoanNtRkl0LCBleHBlY3RhdGlvbiwgYXNzZXJ0aW9uLCB0aW1lb3V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhpdChleHBlY3RhdGlvbjogc3RyaW5nLCBhc3NlcnRpb246IFRlc3RGbiwgdGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICByZXR1cm4gX2l0KGpzbVhJdCwgZXhwZWN0YXRpb24sIGFzc2VydGlvbiwgdGltZW91dCk7XG59XG5cbmV4cG9ydCBjbGFzcyBTcHlPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0eXBlPzogYW55KSB7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0eXBlLnByb3RvdHlwZSkge1xuICAgICAgICBsZXQgbTogYW55ID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtID0gdHlwZS5wcm90b3R5cGVbcHJvcF07XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIEFzIHdlIGFyZSBjcmVhdGluZyBzcHlzIGZvciBhYnN0cmFjdCBjbGFzc2VzLFxuICAgICAgICAgIC8vIHRoZXNlIGNsYXNzZXMgbWlnaHQgaGF2ZSBnZXR0ZXJzIHRoYXQgdGhyb3cgd2hlbiB0aGV5IGFyZSBhY2Nlc3NlZC5cbiAgICAgICAgICAvLyBBcyB3ZSBhcmUgb25seSBhdXRvIGNyZWF0aW5nIHNweXMgZm9yIG1ldGhvZHMsIHRoaXNcbiAgICAgICAgICAvLyBzaG91bGQgbm90IG1hdHRlci5cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnNweShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNweShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGlzIGFzIGFueSlbbmFtZV0pIHtcbiAgICAgICh0aGlzIGFzIGFueSlbbmFtZV0gPSBqYXNtaW5lLmNyZWF0ZVNweShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbbmFtZV07XG4gIH1cblxuICBwcm9wKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICh0aGlzIGFzIGFueSlbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBzdHViKG9iamVjdDogYW55ID0gbnVsbCwgY29uZmlnOiBhbnkgPSBudWxsLCBvdmVycmlkZXM6IGFueSA9IG51bGwpIHtcbiAgICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBTcHlPYmplY3QpKSB7XG4gICAgICBvdmVycmlkZXMgPSBjb25maWc7XG4gICAgICBjb25maWcgPSBvYmplY3Q7XG4gICAgICBvYmplY3QgPSBuZXcgU3B5T2JqZWN0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgbSA9IHsuLi5jb25maWcsIC4uLm92ZXJyaWRlc307XG4gICAgT2JqZWN0LmtleXMobSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgb2JqZWN0LnNweShrZXkpLmFuZC5yZXR1cm5WYWx1ZShtW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbn1cbiJdfQ==