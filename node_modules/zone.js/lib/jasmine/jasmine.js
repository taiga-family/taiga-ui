/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="jasmine"/>
'use strict';
Zone.__load_patch('jasmine', function (global, Zone, api) {
    var __extends = function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
    // Patch jasmine's describe/it/beforeEach/afterEach functions so test code always runs
    // in a testZone (ProxyZone). (See: angular/zone.js#91 & angular/angular#10503)
    if (!Zone)
        throw new Error('Missing: zone.js');
    if (typeof jest !== 'undefined') {
        // return if jasmine is a light implementation inside jest
        // in this case, we are running inside jest not jasmine
        return;
    }
    if (typeof jasmine == 'undefined' || jasmine['__zone_patch__']) {
        return;
    }
    jasmine['__zone_patch__'] = true;
    var SyncTestZoneSpec = Zone['SyncTestZoneSpec'];
    var ProxyZoneSpec = Zone['ProxyZoneSpec'];
    if (!SyncTestZoneSpec)
        throw new Error('Missing: SyncTestZoneSpec');
    if (!ProxyZoneSpec)
        throw new Error('Missing: ProxyZoneSpec');
    var ambientZone = Zone.current;
    // Create a synchronous-only zone in which to run `describe` blocks in order to raise an
    // error if any asynchronous operations are attempted inside of a `describe` but outside of
    // a `beforeEach` or `it`.
    var syncZone = ambientZone.fork(new SyncTestZoneSpec('jasmine.describe'));
    var symbol = Zone.__symbol__;
    // whether patch jasmine clock when in fakeAsync
    var disablePatchingJasmineClock = global[symbol('fakeAsyncDisablePatchingClock')] === true;
    // the original variable name fakeAsyncPatchLock is not accurate, so the name will be
    // fakeAsyncAutoFakeAsyncWhenClockPatched and if this enablePatchingJasmineClock is false, we also
    // automatically disable the auto jump into fakeAsync feature
    var enableAutoFakeAsyncWhenClockPatched = !disablePatchingJasmineClock &&
        ((global[symbol('fakeAsyncPatchLock')] === true) ||
            (global[symbol('fakeAsyncAutoFakeAsyncWhenClockPatched')] === true));
    var ignoreUnhandledRejection = global[symbol('ignoreUnhandledRejection')] === true;
    if (!ignoreUnhandledRejection) {
        var globalErrors_1 = jasmine.GlobalErrors;
        if (globalErrors_1 && !jasmine[symbol('GlobalErrors')]) {
            jasmine[symbol('GlobalErrors')] = globalErrors_1;
            jasmine.GlobalErrors = function () {
                var instance = new globalErrors_1();
                var originalInstall = instance.install;
                if (originalInstall && !instance[symbol('install')]) {
                    instance[symbol('install')] = originalInstall;
                    instance.install = function () {
                        var originalHandlers = process.listeners('unhandledRejection');
                        var r = originalInstall.apply(this, arguments);
                        process.removeAllListeners('unhandledRejection');
                        if (originalHandlers) {
                            originalHandlers.forEach(function (h) { return process.on('unhandledRejection', h); });
                        }
                        return r;
                    };
                }
                return instance;
            };
        }
    }
    // Monkey patch all of the jasmine DSL so that each function runs in appropriate zone.
    var jasmineEnv = jasmine.getEnv();
    ['describe', 'xdescribe', 'fdescribe'].forEach(function (methodName) {
        var originalJasmineFn = jasmineEnv[methodName];
        jasmineEnv[methodName] = function (description, specDefinitions) {
            return originalJasmineFn.call(this, description, wrapDescribeInZone(specDefinitions));
        };
    });
    ['it', 'xit', 'fit'].forEach(function (methodName) {
        var originalJasmineFn = jasmineEnv[methodName];
        jasmineEnv[symbol(methodName)] = originalJasmineFn;
        jasmineEnv[methodName] = function (description, specDefinitions, timeout) {
            arguments[1] = wrapTestInZone(specDefinitions);
            return originalJasmineFn.apply(this, arguments);
        };
    });
    ['beforeEach', 'afterEach', 'beforeAll', 'afterAll'].forEach(function (methodName) {
        var originalJasmineFn = jasmineEnv[methodName];
        jasmineEnv[symbol(methodName)] = originalJasmineFn;
        jasmineEnv[methodName] = function (specDefinitions, timeout) {
            arguments[0] = wrapTestInZone(specDefinitions);
            return originalJasmineFn.apply(this, arguments);
        };
    });
    if (!disablePatchingJasmineClock) {
        // need to patch jasmine.clock().mockDate and jasmine.clock().tick() so
        // they can work properly in FakeAsyncTest
        var originalClockFn_1 = (jasmine[symbol('clock')] = jasmine['clock']);
        jasmine['clock'] = function () {
            var clock = originalClockFn_1.apply(this, arguments);
            if (!clock[symbol('patched')]) {
                clock[symbol('patched')] = symbol('patched');
                var originalTick_1 = (clock[symbol('tick')] = clock.tick);
                clock.tick = function () {
                    var fakeAsyncZoneSpec = Zone.current.get('FakeAsyncTestZoneSpec');
                    if (fakeAsyncZoneSpec) {
                        return fakeAsyncZoneSpec.tick.apply(fakeAsyncZoneSpec, arguments);
                    }
                    return originalTick_1.apply(this, arguments);
                };
                var originalMockDate_1 = (clock[symbol('mockDate')] = clock.mockDate);
                clock.mockDate = function () {
                    var fakeAsyncZoneSpec = Zone.current.get('FakeAsyncTestZoneSpec');
                    if (fakeAsyncZoneSpec) {
                        var dateTime = arguments.length > 0 ? arguments[0] : new Date();
                        return fakeAsyncZoneSpec.setCurrentRealTime.apply(fakeAsyncZoneSpec, dateTime && typeof dateTime.getTime === 'function' ?
                            [dateTime.getTime()] :
                            arguments);
                    }
                    return originalMockDate_1.apply(this, arguments);
                };
                // for auto go into fakeAsync feature, we need the flag to enable it
                if (enableAutoFakeAsyncWhenClockPatched) {
                    ['install', 'uninstall'].forEach(function (methodName) {
                        var originalClockFn = (clock[symbol(methodName)] = clock[methodName]);
                        clock[methodName] = function () {
                            var FakeAsyncTestZoneSpec = Zone['FakeAsyncTestZoneSpec'];
                            if (FakeAsyncTestZoneSpec) {
                                jasmine[symbol('clockInstalled')] = 'install' === methodName;
                                return;
                            }
                            return originalClockFn.apply(this, arguments);
                        };
                    });
                }
            }
            return clock;
        };
    }
    /**
     * Gets a function wrapping the body of a Jasmine `describe` block to execute in a
     * synchronous-only zone.
     */
    function wrapDescribeInZone(describeBody) {
        return function () {
            return syncZone.run(describeBody, this, arguments);
        };
    }
    function runInTestZone(testBody, applyThis, queueRunner, done) {
        var isClockInstalled = !!jasmine[symbol('clockInstalled')];
        var testProxyZoneSpec = queueRunner.testProxyZoneSpec;
        var testProxyZone = queueRunner.testProxyZone;
        var lastDelegate;
        if (isClockInstalled && enableAutoFakeAsyncWhenClockPatched) {
            // auto run a fakeAsync
            var fakeAsyncModule = Zone[Zone.__symbol__('fakeAsyncTest')];
            if (fakeAsyncModule && typeof fakeAsyncModule.fakeAsync === 'function') {
                testBody = fakeAsyncModule.fakeAsync(testBody);
            }
        }
        if (done) {
            return testProxyZone.run(testBody, applyThis, [done]);
        }
        else {
            return testProxyZone.run(testBody, applyThis);
        }
    }
    /**
     * Gets a function wrapping the body of a Jasmine `it/beforeEach/afterEach` block to
     * execute in a ProxyZone zone.
     * This will run in `testProxyZone`. The `testProxyZone` will be reset by the `ZoneQueueRunner`
     */
    function wrapTestInZone(testBody) {
        // The `done` callback is only passed through if the function expects at least one argument.
        // Note we have to make a function with correct number of arguments, otherwise jasmine will
        // think that all functions are sync or async.
        return (testBody && (testBody.length ? function (done) {
            return runInTestZone(testBody, this, this.queueRunner, done);
        } : function () {
            return runInTestZone(testBody, this, this.queueRunner);
        }));
    }
    var QueueRunner = jasmine.QueueRunner;
    jasmine.QueueRunner = (function (_super) {
        __extends(ZoneQueueRunner, _super);
        function ZoneQueueRunner(attrs) {
            var _this = this;
            if (attrs.onComplete) {
                attrs.onComplete = (function (fn) { return function () {
                    // All functions are done, clear the test zone.
                    _this.testProxyZone = null;
                    _this.testProxyZoneSpec = null;
                    ambientZone.scheduleMicroTask('jasmine.onComplete', fn);
                }; })(attrs.onComplete);
            }
            var nativeSetTimeout = global[Zone.__symbol__('setTimeout')];
            var nativeClearTimeout = global[Zone.__symbol__('clearTimeout')];
            if (nativeSetTimeout) {
                // should run setTimeout inside jasmine outside of zone
                attrs.timeout = {
                    setTimeout: nativeSetTimeout ? nativeSetTimeout : global.setTimeout,
                    clearTimeout: nativeClearTimeout ? nativeClearTimeout : global.clearTimeout
                };
            }
            // create a userContext to hold the queueRunner itself
            // so we can access the testProxy in it/xit/beforeEach ...
            if (jasmine.UserContext) {
                if (!attrs.userContext) {
                    attrs.userContext = new jasmine.UserContext();
                }
                attrs.userContext.queueRunner = this;
            }
            else {
                if (!attrs.userContext) {
                    attrs.userContext = {};
                }
                attrs.userContext.queueRunner = this;
            }
            // patch attrs.onException
            var onException = attrs.onException;
            attrs.onException = function (error) {
                if (error &&
                    error.message ===
                        'Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.') {
                    // jasmine timeout, we can make the error message more
                    // reasonable to tell what tasks are pending
                    var proxyZoneSpec = this && this.testProxyZoneSpec;
                    if (proxyZoneSpec) {
                        var pendingTasksInfo = proxyZoneSpec.getAndClearPendingTasksInfo();
                        try {
                            // try catch here in case error.message is not writable
                            error.message += pendingTasksInfo;
                        }
                        catch (err) {
                        }
                    }
                }
                if (onException) {
                    onException.call(this, error);
                }
            };
            _super.call(this, attrs);
        }
        ZoneQueueRunner.prototype.execute = function () {
            var _this = this;
            var zone = Zone.current;
            var isChildOfAmbientZone = false;
            while (zone) {
                if (zone === ambientZone) {
                    isChildOfAmbientZone = true;
                    break;
                }
                zone = zone.parent;
            }
            if (!isChildOfAmbientZone)
                throw new Error('Unexpected Zone: ' + Zone.current.name);
            // This is the zone which will be used for running individual tests.
            // It will be a proxy zone, so that the tests function can retroactively install
            // different zones.
            // Example:
            //   - In beforeEach() do childZone = Zone.current.fork(...);
            //   - In it() try to do fakeAsync(). The issue is that because the beforeEach forked the
            //     zone outside of fakeAsync it will be able to escape the fakeAsync rules.
            //   - Because ProxyZone is parent fo `childZone` fakeAsync can retroactively add
            //     fakeAsync behavior to the childZone.
            this.testProxyZoneSpec = new ProxyZoneSpec();
            this.testProxyZone = ambientZone.fork(this.testProxyZoneSpec);
            if (!Zone.currentTask) {
                // if we are not running in a task then if someone would register a
                // element.addEventListener and then calling element.click() the
                // addEventListener callback would think that it is the top most task and would
                // drain the microtask queue on element.click() which would be incorrect.
                // For this reason we always force a task when running jasmine tests.
                Zone.current.scheduleMicroTask('jasmine.execute().forceTask', function () { return QueueRunner.prototype.execute.call(_this); });
            }
            else {
                _super.prototype.execute.call(this);
            }
        };
        return ZoneQueueRunner;
    })(QueueRunner);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFzbWluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2phc21pbmUvamFzbWluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxnQ0FBZ0M7QUFFaEMsWUFBWSxDQUFDO0FBRWIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQzFFLElBQU0sU0FBUyxHQUFHLFVBQVMsQ0FBTSxFQUFFLENBQU07UUFDdkMsS0FBSyxJQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsRUFBRSxLQUFpQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSyxFQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQztJQUNGLHNGQUFzRjtJQUN0RiwrRUFBK0U7SUFDL0UsSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7UUFDL0IsMERBQTBEO1FBQzFELHVEQUF1RDtRQUN2RCxPQUFPO0tBQ1I7SUFDRCxJQUFJLE9BQU8sT0FBTyxJQUFJLFdBQVcsSUFBSyxPQUFlLENBQUMsZ0JBQWdC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aUIsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsbUVBQW1FO2dCQUNuRSxnRUFBZ0U7Z0JBQ2hFLCtFQUErRTtnQkFDL0UseUVBQXlFO2dCQUN6RSxxRUFBcUU7Z0JBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQzFCLDZCQUE2QixFQUFFLGNBQU0sT0FBQSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUM7UUFDRixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqYXNtaW5lXCIvPlxuXG4ndXNlIHN0cmljdCc7XG5kZWNsYXJlIGxldCBqZXN0OiBhbnk7XG5ab25lLl9fbG9hZF9wYXRjaCgnamFzbWluZScsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGNvbnN0IF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGQ6IGFueSwgYjogYW55KSB7XG4gICAgZm9yIChjb25zdCBwIGluIGIpXG4gICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18odGhpczogT2JqZWN0KSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6ICgoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUpLCBuZXcgKF9fIGFzIGFueSkoKSk7XG4gIH07XG4gIC8vIFBhdGNoIGphc21pbmUncyBkZXNjcmliZS9pdC9iZWZvcmVFYWNoL2FmdGVyRWFjaCBmdW5jdGlvbnMgc28gdGVzdCBjb2RlIGFsd2F5cyBydW5zXG4gIC8vIGluIGEgdGVzdFpvbmUgKFByb3h5Wm9uZSkuIChTZWU6IGFuZ3VsYXIvem9uZS5qcyM5MSAmIGFuZ3VsYXIvYW5ndWxhciMxMDUwMylcbiAgaWYgKCFab25lKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmc6IHpvbmUuanMnKTtcbiAgaWYgKHR5cGVvZiBqZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIHJldHVybiBpZiBqYXNtaW5lIGlzIGEgbGlnaHQgaW1wbGVtZW50YXRpb24gaW5zaWRlIGplc3RcbiAgICAvLyBpbiB0aGlzIGNhc2UsIHdlIGFyZSBydW5uaW5nIGluc2lkZSBqZXN0IG5vdCBqYXNtaW5lXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgamFzbWluZSA9PSAndW5kZWZpbmVkJyB8fCAoamFzbWluZSBhcyBhbnkpWydfX3pvbmVfcGF0Y2hfXyddKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIChqYXNtaW5lIGFzIGFueSlbJ19fem9uZV9wYXRjaF9fJ10gPSB0cnVlO1xuXG4gIGNvbnN0IFN5bmNUZXN0Wm9uZVNwZWM6IHtuZXcgKG5hbWU6IHN0cmluZyk6IFpvbmVTcGVjfSA9IChab25lIGFzIGFueSlbJ1N5bmNUZXN0Wm9uZVNwZWMnXTtcbiAgY29uc3QgUHJveHlab25lU3BlYzoge25ldyAoKTogWm9uZVNwZWN9ID0gKFpvbmUgYXMgYW55KVsnUHJveHlab25lU3BlYyddO1xuICBpZiAoIVN5bmNUZXN0Wm9uZVNwZWMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZzogU3luY1Rlc3Rab25lU3BlYycpO1xuICBpZiAoIVByb3h5Wm9uZVNwZWMpIHRocm93IG5ldyBFcnJvcignTWlzc2luZzogUHJveHlab25lU3BlYycpO1xuXG4gIGNvbnN0IGFtYmllbnRab25lID0gWm9uZS5jdXJyZW50O1xuICAvLyBDcmVhdGUgYSBzeW5jaHJvbm91cy1vbmx5IHpvbmUgaW4gd2hpY2ggdG8gcnVuIGBkZXNjcmliZWAgYmxvY2tzIGluIG9yZGVyIHRvIHJhaXNlIGFuXG4gIC8vIGVycm9yIGlmIGFueSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucyBhcmUgYXR0ZW1wdGVkIGluc2lkZSBvZiBhIGBkZXNjcmliZWAgYnV0IG91dHNpZGUgb2ZcbiAgLy8gYSBgYmVmb3JlRWFjaGAgb3IgYGl0YC5cbiAgY29uc3Qgc3luY1pvbmUgPSBhbWJpZW50Wm9uZS5mb3JrKG5ldyBTeW5jVGVzdFpvbmVTcGVjKCdqYXNtaW5lLmRlc2NyaWJlJykpO1xuXG4gIGNvbnN0IHN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXztcblxuICAvLyB3aGV0aGVyIHBhdGNoIGphc21pbmUgY2xvY2sgd2hlbiBpbiBmYWtlQXN5bmNcbiAgY29uc3QgZGlzYWJsZVBhdGNoaW5nSmFzbWluZUNsb2NrID0gZ2xvYmFsW3N5bWJvbCgnZmFrZUFzeW5jRGlzYWJsZVBhdGNoaW5nQ2xvY2snKV0gPT09IHRydWU7XG4gIC8vIHRoZSBvcmlnaW5hbCB2YXJpYWJsZSBuYW1lIGZha2VBc3luY1BhdGNoTG9jayBpcyBub3QgYWNjdXJhdGUsIHNvIHRoZSBuYW1lIHdpbGwgYmVcbiAgLy8gZmFrZUFzeW5jQXV0b0Zha2VBc3luY1doZW5DbG9ja1BhdGNoZWQgYW5kIGlmIHRoaXMgZW5hYmxlUGF0Y2hpbmdKYXNtaW5lQ2xvY2sgaXMgZmFsc2UsIHdlIGFsc29cbiAgLy8gYXV0b21hdGljYWxseSBkaXNhYmxlIHRoZSBhdXRvIGp1bXAgaW50byBmYWtlQXN5bmMgZmVhdHVyZVxuICBjb25zdCBlbmFibGVBdXRvRmFrZUFzeW5jV2hlbkNsb2NrUGF0Y2hlZCA9ICFkaXNhYmxlUGF0Y2hpbmdKYXNtaW5lQ2xvY2sgJiZcbiAgICAgICgoZ2xvYmFsW3N5bWJvbCgnZmFrZUFzeW5jUGF0Y2hMb2NrJyldID09PSB0cnVlKSB8fFxuICAgICAgIChnbG9iYWxbc3ltYm9sKCdmYWtlQXN5bmNBdXRvRmFrZUFzeW5jV2hlbkNsb2NrUGF0Y2hlZCcpXSA9PT0gdHJ1ZSkpO1xuXG4gIGNvbnN0IGlnbm9yZVVuaGFuZGxlZFJlamVjdGlvbiA9IGdsb2JhbFtzeW1ib2woJ2lnbm9yZVVuaGFuZGxlZFJlamVjdGlvbicpXSA9PT0gdHJ1ZTtcblxuICBpZiAoIWlnbm9yZVVuaGFuZGxlZFJlamVjdGlvbikge1xuICAgIGNvbnN0IGdsb2JhbEVycm9ycyA9IChqYXNtaW5lIGFzIGFueSkuR2xvYmFsRXJyb3JzO1xuICAgIGlmIChnbG9iYWxFcnJvcnMgJiYgIShqYXNtaW5lIGFzIGFueSlbc3ltYm9sKCdHbG9iYWxFcnJvcnMnKV0pIHtcbiAgICAgIChqYXNtaW5lIGFzIGFueSlbc3ltYm9sKCdHbG9iYWxFcnJvcnMnKV0gPSBnbG9iYWxFcnJvcnM7XG4gICAgICAoamFzbWluZSBhcyBhbnkpLkdsb2JhbEVycm9ycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBnbG9iYWxFcnJvcnMoKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbnN0YWxsID0gaW5zdGFuY2UuaW5zdGFsbDtcbiAgICAgICAgaWYgKG9yaWdpbmFsSW5zdGFsbCAmJiAhaW5zdGFuY2Vbc3ltYm9sKCdpbnN0YWxsJyldKSB7XG4gICAgICAgICAgaW5zdGFuY2Vbc3ltYm9sKCdpbnN0YWxsJyldID0gb3JpZ2luYWxJbnN0YWxsO1xuICAgICAgICAgIGluc3RhbmNlLmluc3RhbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsSGFuZGxlcnMgPSBwcm9jZXNzLmxpc3RlbmVycygndW5oYW5kbGVkUmVqZWN0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCByID0gb3JpZ2luYWxJbnN0YWxsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBwcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycygndW5oYW5kbGVkUmVqZWN0aW9uJyk7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxIYW5kbGVycykge1xuICAgICAgICAgICAgICBvcmlnaW5hbEhhbmRsZXJzLmZvckVhY2goaCA9PiBwcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gTW9ua2V5IHBhdGNoIGFsbCBvZiB0aGUgamFzbWluZSBEU0wgc28gdGhhdCBlYWNoIGZ1bmN0aW9uIHJ1bnMgaW4gYXBwcm9wcmlhdGUgem9uZS5cbiAgY29uc3QgamFzbWluZUVudjogYW55ID0gamFzbWluZS5nZXRFbnYoKTtcbiAgWydkZXNjcmliZScsICd4ZGVzY3JpYmUnLCAnZmRlc2NyaWJlJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBsZXQgb3JpZ2luYWxKYXNtaW5lRm46IEZ1bmN0aW9uID0gamFzbWluZUVudlttZXRob2ROYW1lXTtcbiAgICBqYXNtaW5lRW52W21ldGhvZE5hbWVdID0gZnVuY3Rpb24oZGVzY3JpcHRpb246IHN0cmluZywgc3BlY0RlZmluaXRpb25zOiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsSmFzbWluZUZuLmNhbGwodGhpcywgZGVzY3JpcHRpb24sIHdyYXBEZXNjcmliZUluWm9uZShzcGVjRGVmaW5pdGlvbnMpKTtcbiAgICB9O1xuICB9KTtcbiAgWydpdCcsICd4aXQnLCAnZml0J10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBsZXQgb3JpZ2luYWxKYXNtaW5lRm46IEZ1bmN0aW9uID0gamFzbWluZUVudlttZXRob2ROYW1lXTtcbiAgICBqYXNtaW5lRW52W3N5bWJvbChtZXRob2ROYW1lKV0gPSBvcmlnaW5hbEphc21pbmVGbjtcbiAgICBqYXNtaW5lRW52W21ldGhvZE5hbWVdID0gZnVuY3Rpb24oXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHNwZWNEZWZpbml0aW9uczogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcikge1xuICAgICAgYXJndW1lbnRzWzFdID0gd3JhcFRlc3RJblpvbmUoc3BlY0RlZmluaXRpb25zKTtcbiAgICAgIHJldHVybiBvcmlnaW5hbEphc21pbmVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xuICBbJ2JlZm9yZUVhY2gnLCAnYWZ0ZXJFYWNoJywgJ2JlZm9yZUFsbCcsICdhZnRlckFsbCddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgbGV0IG9yaWdpbmFsSmFzbWluZUZuOiBGdW5jdGlvbiA9IGphc21pbmVFbnZbbWV0aG9kTmFtZV07XG4gICAgamFzbWluZUVudltzeW1ib2wobWV0aG9kTmFtZSldID0gb3JpZ2luYWxKYXNtaW5lRm47XG4gICAgamFzbWluZUVudlttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKHNwZWNEZWZpbml0aW9uczogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcikge1xuICAgICAgYXJndW1lbnRzWzBdID0gd3JhcFRlc3RJblpvbmUoc3BlY0RlZmluaXRpb25zKTtcbiAgICAgIHJldHVybiBvcmlnaW5hbEphc21pbmVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xuXG4gIGlmICghZGlzYWJsZVBhdGNoaW5nSmFzbWluZUNsb2NrKSB7XG4gICAgLy8gbmVlZCB0byBwYXRjaCBqYXNtaW5lLmNsb2NrKCkubW9ja0RhdGUgYW5kIGphc21pbmUuY2xvY2soKS50aWNrKCkgc29cbiAgICAvLyB0aGV5IGNhbiB3b3JrIHByb3Blcmx5IGluIEZha2VBc3luY1Rlc3RcbiAgICBjb25zdCBvcmlnaW5hbENsb2NrRm46IEZ1bmN0aW9uID0gKChqYXNtaW5lIGFzIGFueSlbc3ltYm9sKCdjbG9jaycpXSA9IGphc21pbmVbJ2Nsb2NrJ10pO1xuICAgIChqYXNtaW5lIGFzIGFueSlbJ2Nsb2NrJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNsb2NrID0gb3JpZ2luYWxDbG9ja0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoIWNsb2NrW3N5bWJvbCgncGF0Y2hlZCcpXSkge1xuICAgICAgICBjbG9ja1tzeW1ib2woJ3BhdGNoZWQnKV0gPSBzeW1ib2woJ3BhdGNoZWQnKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUaWNrID0gKGNsb2NrW3N5bWJvbCgndGljaycpXSA9IGNsb2NrLnRpY2spO1xuICAgICAgICBjbG9jay50aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmFrZUFzeW5jWm9uZVNwZWMgPSBab25lLmN1cnJlbnQuZ2V0KCdGYWtlQXN5bmNUZXN0Wm9uZVNwZWMnKTtcbiAgICAgICAgICBpZiAoZmFrZUFzeW5jWm9uZVNwZWMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWtlQXN5bmNab25lU3BlYy50aWNrLmFwcGx5KGZha2VBc3luY1pvbmVTcGVjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxUaWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTW9ja0RhdGUgPSAoY2xvY2tbc3ltYm9sKCdtb2NrRGF0ZScpXSA9IGNsb2NrLm1vY2tEYXRlKTtcbiAgICAgICAgY2xvY2subW9ja0RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBmYWtlQXN5bmNab25lU3BlYyA9IFpvbmUuY3VycmVudC5nZXQoJ0Zha2VBc3luY1Rlc3Rab25lU3BlYycpO1xuICAgICAgICAgIGlmIChmYWtlQXN5bmNab25lU3BlYykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFrZUFzeW5jWm9uZVNwZWMuc2V0Q3VycmVudFJlYWxUaW1lLmFwcGx5KFxuICAgICAgICAgICAgICAgIGZha2VBc3luY1pvbmVTcGVjLCBkYXRlVGltZSAmJiB0eXBlb2YgZGF0ZVRpbWUuZ2V0VGltZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgICAgICAgIFtkYXRlVGltZS5nZXRUaW1lKCldIDpcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTW9ja0RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZm9yIGF1dG8gZ28gaW50byBmYWtlQXN5bmMgZmVhdHVyZSwgd2UgbmVlZCB0aGUgZmxhZyB0byBlbmFibGUgaXRcbiAgICAgICAgaWYgKGVuYWJsZUF1dG9GYWtlQXN5bmNXaGVuQ2xvY2tQYXRjaGVkKSB7XG4gICAgICAgICAgWydpbnN0YWxsJywgJ3VuaW5zdGFsbCddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENsb2NrRm46IEZ1bmN0aW9uID0gKGNsb2NrW3N5bWJvbChtZXRob2ROYW1lKV0gPSBjbG9ja1ttZXRob2ROYW1lXSk7XG4gICAgICAgICAgICBjbG9ja1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjb25zdCBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydGYWtlQXN5bmNUZXN0Wm9uZVNwZWMnXTtcbiAgICAgICAgICAgICAgaWYgKEZha2VBc3luY1Rlc3Rab25lU3BlYykge1xuICAgICAgICAgICAgICAgIChqYXNtaW5lIGFzIGFueSlbc3ltYm9sKCdjbG9ja0luc3RhbGxlZCcpXSA9ICdpbnN0YWxsJyA9PT0gbWV0aG9kTmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ2xvY2tGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb2NrO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgYSBmdW5jdGlvbiB3cmFwcGluZyB0aGUgYm9keSBvZiBhIEphc21pbmUgYGRlc2NyaWJlYCBibG9jayB0byBleGVjdXRlIGluIGFcbiAgICogc3luY2hyb25vdXMtb25seSB6b25lLlxuICAgKi9cbiAgZnVuY3Rpb24gd3JhcERlc2NyaWJlSW5ab25lKGRlc2NyaWJlQm9keTogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24pIHtcbiAgICAgIHJldHVybiBzeW5jWm9uZS5ydW4oZGVzY3JpYmVCb2R5LCB0aGlzLCAoYXJndW1lbnRzIGFzIGFueSkgYXMgYW55W10pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBydW5JblRlc3Rab25lKFxuICAgICAgdGVzdEJvZHk6IEZ1bmN0aW9uLCBhcHBseVRoaXM6IGFueSwgcXVldWVSdW5uZXI6IFF1ZXVlUnVubmVyLCBkb25lPzogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBpc0Nsb2NrSW5zdGFsbGVkID0gISEoamFzbWluZSBhcyBhbnkpW3N5bWJvbCgnY2xvY2tJbnN0YWxsZWQnKV07XG4gICAgY29uc3QgdGVzdFByb3h5Wm9uZVNwZWMgPSBxdWV1ZVJ1bm5lci50ZXN0UHJveHlab25lU3BlYyAhO1xuICAgIGNvbnN0IHRlc3RQcm94eVpvbmUgPSBxdWV1ZVJ1bm5lci50ZXN0UHJveHlab25lICE7XG4gICAgbGV0IGxhc3REZWxlZ2F0ZTtcbiAgICBpZiAoaXNDbG9ja0luc3RhbGxlZCAmJiBlbmFibGVBdXRvRmFrZUFzeW5jV2hlbkNsb2NrUGF0Y2hlZCkge1xuICAgICAgLy8gYXV0byBydW4gYSBmYWtlQXN5bmNcbiAgICAgIGNvbnN0IGZha2VBc3luY01vZHVsZSA9IChab25lIGFzIGFueSlbWm9uZS5fX3N5bWJvbF9fKCdmYWtlQXN5bmNUZXN0JyldO1xuICAgICAgaWYgKGZha2VBc3luY01vZHVsZSAmJiB0eXBlb2YgZmFrZUFzeW5jTW9kdWxlLmZha2VBc3luYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0ZXN0Qm9keSA9IGZha2VBc3luY01vZHVsZS5mYWtlQXN5bmModGVzdEJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZG9uZSkge1xuICAgICAgcmV0dXJuIHRlc3RQcm94eVpvbmUucnVuKHRlc3RCb2R5LCBhcHBseVRoaXMsIFtkb25lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXN0UHJveHlab25lLnJ1bih0ZXN0Qm9keSwgYXBwbHlUaGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGZ1bmN0aW9uIHdyYXBwaW5nIHRoZSBib2R5IG9mIGEgSmFzbWluZSBgaXQvYmVmb3JlRWFjaC9hZnRlckVhY2hgIGJsb2NrIHRvXG4gICAqIGV4ZWN1dGUgaW4gYSBQcm94eVpvbmUgem9uZS5cbiAgICogVGhpcyB3aWxsIHJ1biBpbiBgdGVzdFByb3h5Wm9uZWAuIFRoZSBgdGVzdFByb3h5Wm9uZWAgd2lsbCBiZSByZXNldCBieSB0aGUgYFpvbmVRdWV1ZVJ1bm5lcmBcbiAgICovXG4gIGZ1bmN0aW9uIHdyYXBUZXN0SW5ab25lKHRlc3RCb2R5OiBGdW5jdGlvbik6IEZ1bmN0aW9uIHtcbiAgICAvLyBUaGUgYGRvbmVgIGNhbGxiYWNrIGlzIG9ubHkgcGFzc2VkIHRocm91Z2ggaWYgdGhlIGZ1bmN0aW9uIGV4cGVjdHMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LlxuICAgIC8vIE5vdGUgd2UgaGF2ZSB0byBtYWtlIGEgZnVuY3Rpb24gd2l0aCBjb3JyZWN0IG51bWJlciBvZiBhcmd1bWVudHMsIG90aGVyd2lzZSBqYXNtaW5lIHdpbGxcbiAgICAvLyB0aGluayB0aGF0IGFsbCBmdW5jdGlvbnMgYXJlIHN5bmMgb3IgYXN5bmMuXG4gICAgcmV0dXJuICh0ZXN0Qm9keSAmJiAodGVzdEJvZHkubGVuZ3RoID8gZnVuY3Rpb24odGhpczogUXVldWVSdW5uZXJVc2VyQ29udGV4dCwgZG9uZTogRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJ1bkluVGVzdFpvbmUodGVzdEJvZHksIHRoaXMsIHRoaXMucXVldWVSdW5uZXIgISwgZG9uZSk7XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24odGhpczogUXVldWVSdW5uZXJVc2VyQ29udGV4dCkge1xuICAgICAgICAgICAgICByZXR1cm4gcnVuSW5UZXN0Wm9uZSh0ZXN0Qm9keSwgdGhpcywgdGhpcy5xdWV1ZVJ1bm5lciAhKTtcbiAgICAgICAgICAgIH0pKTtcbiAgfVxuICBpbnRlcmZhY2UgUXVldWVSdW5uZXIge1xuICAgIGV4ZWN1dGUoKTogdm9pZDtcbiAgICB0ZXN0UHJveHlab25lU3BlYzogWm9uZVNwZWN8bnVsbDtcbiAgICB0ZXN0UHJveHlab25lOiBab25lfG51bGw7XG4gIH1cbiAgaW50ZXJmYWNlIFF1ZXVlUnVubmVyQXR0cnMge1xuICAgIHF1ZXVlYWJsZUZuczoge2ZuOiBGdW5jdGlvbn1bXTtcbiAgICBjbGVhclN0YWNrOiAoZm46IGFueSkgPT4gdm9pZDtcbiAgICBjYXRjaEV4Y2VwdGlvbjogKCkgPT4gYm9vbGVhbjtcbiAgICBmYWlsOiAoKSA9PiB2b2lkO1xuICAgIG9uQ29tcGxldGU6ICgpID0+IHZvaWQ7XG4gICAgb25FeGNlcHRpb246IChlcnJvcjogYW55KSA9PiB2b2lkO1xuICAgIHVzZXJDb250ZXh0OiBRdWV1ZVJ1bm5lclVzZXJDb250ZXh0O1xuICAgIHRpbWVvdXQ6IHtzZXRUaW1lb3V0OiBGdW5jdGlvbjsgY2xlYXJUaW1lb3V0OiBGdW5jdGlvbn07XG4gIH1cbiAgdHlwZSBRdWV1ZVJ1bm5lclVzZXJDb250ZXh0ID0ge3F1ZXVlUnVubmVyPzogUXVldWVSdW5uZXJ9O1xuICBjb25zdCBRdWV1ZVJ1bm5lciA9IChqYXNtaW5lIGFzIGFueSkuUXVldWVSdW5uZXIgYXMge1xuICAgIG5ldyAoYXR0cnM6IFF1ZXVlUnVubmVyQXR0cnMpOiBRdWV1ZVJ1bm5lcjtcbiAgfTtcbiAgKGphc21pbmUgYXMgYW55KS5RdWV1ZVJ1bm5lciA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoWm9uZVF1ZXVlUnVubmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFpvbmVRdWV1ZVJ1bm5lcih0aGlzOiBRdWV1ZVJ1bm5lciwgYXR0cnM6IFF1ZXVlUnVubmVyQXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIGF0dHJzLm9uQ29tcGxldGUgPSAoZm4gPT4gKCkgPT4ge1xuICAgICAgICAgIC8vIEFsbCBmdW5jdGlvbnMgYXJlIGRvbmUsIGNsZWFyIHRoZSB0ZXN0IHpvbmUuXG4gICAgICAgICAgdGhpcy50ZXN0UHJveHlab25lID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnRlc3RQcm94eVpvbmVTcGVjID0gbnVsbDtcbiAgICAgICAgICBhbWJpZW50Wm9uZS5zY2hlZHVsZU1pY3JvVGFzaygnamFzbWluZS5vbkNvbXBsZXRlJywgZm4pO1xuICAgICAgICB9KShhdHRycy5vbkNvbXBsZXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmF0aXZlU2V0VGltZW91dCA9IGdsb2JhbFtab25lLl9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKV07XG4gICAgICBjb25zdCBuYXRpdmVDbGVhclRpbWVvdXQgPSBnbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdjbGVhclRpbWVvdXQnKV07XG4gICAgICBpZiAobmF0aXZlU2V0VGltZW91dCkge1xuICAgICAgICAvLyBzaG91bGQgcnVuIHNldFRpbWVvdXQgaW5zaWRlIGphc21pbmUgb3V0c2lkZSBvZiB6b25lXG4gICAgICAgIGF0dHJzLnRpbWVvdXQgPSB7XG4gICAgICAgICAgc2V0VGltZW91dDogbmF0aXZlU2V0VGltZW91dCA/IG5hdGl2ZVNldFRpbWVvdXQgOiBnbG9iYWwuc2V0VGltZW91dCxcbiAgICAgICAgICBjbGVhclRpbWVvdXQ6IG5hdGl2ZUNsZWFyVGltZW91dCA/IG5hdGl2ZUNsZWFyVGltZW91dCA6IGdsb2JhbC5jbGVhclRpbWVvdXRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gY3JlYXRlIGEgdXNlckNvbnRleHQgdG8gaG9sZCB0aGUgcXVldWVSdW5uZXIgaXRzZWxmXG4gICAgICAvLyBzbyB3ZSBjYW4gYWNjZXNzIHRoZSB0ZXN0UHJveHkgaW4gaXQveGl0L2JlZm9yZUVhY2ggLi4uXG4gICAgICBpZiAoKGphc21pbmUgYXMgYW55KS5Vc2VyQ29udGV4dCkge1xuICAgICAgICBpZiAoIWF0dHJzLnVzZXJDb250ZXh0KSB7XG4gICAgICAgICAgYXR0cnMudXNlckNvbnRleHQgPSBuZXcgKGphc21pbmUgYXMgYW55KS5Vc2VyQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHJzLnVzZXJDb250ZXh0LnF1ZXVlUnVubmVyID0gdGhpcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghYXR0cnMudXNlckNvbnRleHQpIHtcbiAgICAgICAgICBhdHRycy51c2VyQ29udGV4dCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGF0dHJzLnVzZXJDb250ZXh0LnF1ZXVlUnVubmVyID0gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gcGF0Y2ggYXR0cnMub25FeGNlcHRpb25cbiAgICAgIGNvbnN0IG9uRXhjZXB0aW9uID0gYXR0cnMub25FeGNlcHRpb247XG4gICAgICBhdHRycy5vbkV4Y2VwdGlvbiA9IGZ1bmN0aW9uKHRoaXM6IHVuZGVmaW5lZHxRdWV1ZVJ1bm5lciwgZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3IgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPT09XG4gICAgICAgICAgICAgICAgJ1RpbWVvdXQgLSBBc3luYyBjYWxsYmFjayB3YXMgbm90IGludm9rZWQgd2l0aGluIHRpbWVvdXQgc3BlY2lmaWVkIGJ5IGphc21pbmUuREVGQVVMVF9USU1FT1VUX0lOVEVSVkFMLicpIHtcbiAgICAgICAgICAvLyBqYXNtaW5lIHRpbWVvdXQsIHdlIGNhbiBtYWtlIHRoZSBlcnJvciBtZXNzYWdlIG1vcmVcbiAgICAgICAgICAvLyByZWFzb25hYmxlIHRvIHRlbGwgd2hhdCB0YXNrcyBhcmUgcGVuZGluZ1xuICAgICAgICAgIGNvbnN0IHByb3h5Wm9uZVNwZWM6IGFueSA9IHRoaXMgJiYgdGhpcy50ZXN0UHJveHlab25lU3BlYztcbiAgICAgICAgICBpZiAocHJveHlab25lU3BlYykge1xuICAgICAgICAgICAgY29uc3QgcGVuZGluZ1Rhc2tzSW5mbyA9IHByb3h5Wm9uZVNwZWMuZ2V0QW5kQ2xlYXJQZW5kaW5nVGFza3NJbmZvKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyB0cnkgY2F0Y2ggaGVyZSBpbiBjYXNlIGVycm9yLm1lc3NhZ2UgaXMgbm90IHdyaXRhYmxlXG4gICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgKz0gcGVuZGluZ1Rhc2tzSW5mbztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob25FeGNlcHRpb24pIHtcbiAgICAgICAgICBvbkV4Y2VwdGlvbi5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3N1cGVyLmNhbGwodGhpcywgYXR0cnMpO1xuICAgIH1cbiAgICBab25lUXVldWVSdW5uZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCB6b25lOiBab25lfG51bGwgPSBab25lLmN1cnJlbnQ7XG4gICAgICBsZXQgaXNDaGlsZE9mQW1iaWVudFpvbmUgPSBmYWxzZTtcbiAgICAgIHdoaWxlICh6b25lKSB7XG4gICAgICAgIGlmICh6b25lID09PSBhbWJpZW50Wm9uZSkge1xuICAgICAgICAgIGlzQ2hpbGRPZkFtYmllbnRab25lID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNDaGlsZE9mQW1iaWVudFpvbmUpIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBab25lOiAnICsgWm9uZS5jdXJyZW50Lm5hbWUpO1xuXG4gICAgICAvLyBUaGlzIGlzIHRoZSB6b25lIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgcnVubmluZyBpbmRpdmlkdWFsIHRlc3RzLlxuICAgICAgLy8gSXQgd2lsbCBiZSBhIHByb3h5IHpvbmUsIHNvIHRoYXQgdGhlIHRlc3RzIGZ1bmN0aW9uIGNhbiByZXRyb2FjdGl2ZWx5IGluc3RhbGxcbiAgICAgIC8vIGRpZmZlcmVudCB6b25lcy5cbiAgICAgIC8vIEV4YW1wbGU6XG4gICAgICAvLyAgIC0gSW4gYmVmb3JlRWFjaCgpIGRvIGNoaWxkWm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKC4uLik7XG4gICAgICAvLyAgIC0gSW4gaXQoKSB0cnkgdG8gZG8gZmFrZUFzeW5jKCkuIFRoZSBpc3N1ZSBpcyB0aGF0IGJlY2F1c2UgdGhlIGJlZm9yZUVhY2ggZm9ya2VkIHRoZVxuICAgICAgLy8gICAgIHpvbmUgb3V0c2lkZSBvZiBmYWtlQXN5bmMgaXQgd2lsbCBiZSBhYmxlIHRvIGVzY2FwZSB0aGUgZmFrZUFzeW5jIHJ1bGVzLlxuICAgICAgLy8gICAtIEJlY2F1c2UgUHJveHlab25lIGlzIHBhcmVudCBmbyBgY2hpbGRab25lYCBmYWtlQXN5bmMgY2FuIHJldHJvYWN0aXZlbHkgYWRkXG4gICAgICAvLyAgICAgZmFrZUFzeW5jIGJlaGF2aW9yIHRvIHRoZSBjaGlsZFpvbmUuXG5cbiAgICAgIHRoaXMudGVzdFByb3h5Wm9uZVNwZWMgPSBuZXcgUHJveHlab25lU3BlYygpO1xuICAgICAgdGhpcy50ZXN0UHJveHlab25lID0gYW1iaWVudFpvbmUuZm9yayh0aGlzLnRlc3RQcm94eVpvbmVTcGVjKTtcbiAgICAgIGlmICghWm9uZS5jdXJyZW50VGFzaykge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IHJ1bm5pbmcgaW4gYSB0YXNrIHRoZW4gaWYgc29tZW9uZSB3b3VsZCByZWdpc3RlciBhXG4gICAgICAgIC8vIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciBhbmQgdGhlbiBjYWxsaW5nIGVsZW1lbnQuY2xpY2soKSB0aGVcbiAgICAgICAgLy8gYWRkRXZlbnRMaXN0ZW5lciBjYWxsYmFjayB3b3VsZCB0aGluayB0aGF0IGl0IGlzIHRoZSB0b3AgbW9zdCB0YXNrIGFuZCB3b3VsZFxuICAgICAgICAvLyBkcmFpbiB0aGUgbWljcm90YXNrIHF1ZXVlIG9uIGVsZW1lbnQuY2xpY2soKSB3aGljaCB3b3VsZCBiZSBpbmNvcnJlY3QuXG4gICAgICAgIC8vIEZvciB0aGlzIHJlYXNvbiB3ZSBhbHdheXMgZm9yY2UgYSB0YXNrIHdoZW4gcnVubmluZyBqYXNtaW5lIHRlc3RzLlxuICAgICAgICBab25lLmN1cnJlbnQuc2NoZWR1bGVNaWNyb1Rhc2soXG4gICAgICAgICAgICAnamFzbWluZS5leGVjdXRlKCkuZm9yY2VUYXNrJywgKCkgPT4gUXVldWVSdW5uZXIucHJvdG90eXBlLmV4ZWN1dGUuY2FsbCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmV4ZWN1dGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBab25lUXVldWVSdW5uZXI7XG4gIH0pKFF1ZXVlUnVubmVyKTtcbn0pO1xuIl19