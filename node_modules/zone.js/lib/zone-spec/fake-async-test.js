"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(function (global) {
    var OriginalDate = global.Date;
    var FakeDate = /** @class */ (function () {
        function FakeDate() {
            if (arguments.length === 0) {
                var d = new OriginalDate();
                d.setTime(FakeDate.now());
                return d;
            }
            else {
                var args = Array.prototype.slice.call(arguments);
                return new (OriginalDate.bind.apply(OriginalDate, __spread([void 0], args)))();
            }
        }
        FakeDate.now = function () {
            var fakeAsyncTestZoneSpec = Zone.current.get('FakeAsyncTestZoneSpec');
            if (fakeAsyncTestZoneSpec) {
                return fakeAsyncTestZoneSpec.getCurrentRealTime() + fakeAsyncTestZoneSpec.getCurrentTime();
            }
            return OriginalDate.now.apply(this, arguments);
        };
        return FakeDate;
    }());
    FakeDate.UTC = OriginalDate.UTC;
    FakeDate.parse = OriginalDate.parse;
    // keep a reference for zone patched timer function
    var timers = {
        setTimeout: global.setTimeout,
        setInterval: global.setInterval,
        clearTimeout: global.clearTimeout,
        clearInterval: global.clearInterval
    };
    var Scheduler = /** @class */ (function () {
        function Scheduler() {
            // Scheduler queue with the tuple of end time and callback function - sorted by end time.
            this._schedulerQueue = [];
            // Current simulated time in millis.
            this._currentTime = 0;
            // Current real time in millis.
            this._currentRealTime = OriginalDate.now();
            // track requeuePeriodicTimer
            this._currentTickRequeuePeriodicEntries = [];
        }
        Scheduler.prototype.getCurrentTime = function () { return this._currentTime; };
        Scheduler.prototype.getCurrentRealTime = function () { return this._currentRealTime; };
        Scheduler.prototype.setCurrentRealTime = function (realTime) { this._currentRealTime = realTime; };
        Scheduler.prototype.scheduleFunction = function (cb, delay, options) {
            options = __assign({
                args: [],
                isPeriodic: false,
                isRequestAnimationFrame: false,
                id: -1,
                isRequeuePeriodic: false
            }, options);
            var currentId = options.id < 0 ? Scheduler.nextId++ : options.id;
            var endTime = this._currentTime + delay;
            // Insert so that scheduler queue remains sorted by end time.
            var newEntry = {
                endTime: endTime,
                id: currentId,
                func: cb,
                args: options.args,
                delay: delay,
                isPeriodic: options.isPeriodic,
                isRequestAnimationFrame: options.isRequestAnimationFrame
            };
            if (options.isRequeuePeriodic) {
                this._currentTickRequeuePeriodicEntries.push(newEntry);
            }
            var i = 0;
            for (; i < this._schedulerQueue.length; i++) {
                var currentEntry = this._schedulerQueue[i];
                if (newEntry.endTime < currentEntry.endTime) {
                    break;
                }
            }
            this._schedulerQueue.splice(i, 0, newEntry);
            return currentId;
        };
        Scheduler.prototype.removeScheduledFunctionWithId = function (id) {
            for (var i = 0; i < this._schedulerQueue.length; i++) {
                if (this._schedulerQueue[i].id == id) {
                    this._schedulerQueue.splice(i, 1);
                    break;
                }
            }
        };
        Scheduler.prototype.tick = function (millis, doTick, tickOptions) {
            if (millis === void 0) { millis = 0; }
            var finalTime = this._currentTime + millis;
            var lastCurrentTime = 0;
            tickOptions = Object.assign({ processNewMacroTasksSynchronously: true }, tickOptions);
            // we need to copy the schedulerQueue so nested timeout
            // will not be wrongly called in the current tick
            // https://github.com/angular/angular/issues/33799
            var schedulerQueue = tickOptions.processNewMacroTasksSynchronously ?
                this._schedulerQueue :
                this._schedulerQueue.slice();
            if (schedulerQueue.length === 0 && doTick) {
                doTick(millis);
                return;
            }
            while (schedulerQueue.length > 0) {
                // clear requeueEntries before each loop
                this._currentTickRequeuePeriodicEntries = [];
                var current = schedulerQueue[0];
                if (finalTime < current.endTime) {
                    // Done processing the queue since it's sorted by endTime.
                    break;
                }
                else {
                    // Time to run scheduled function. Remove it from the head of queue.
                    var current_1 = schedulerQueue.shift();
                    if (!tickOptions.processNewMacroTasksSynchronously) {
                        var idx = this._schedulerQueue.indexOf(current_1);
                        if (idx >= 0) {
                            this._schedulerQueue.splice(idx, 1);
                        }
                    }
                    lastCurrentTime = this._currentTime;
                    this._currentTime = current_1.endTime;
                    if (doTick) {
                        doTick(this._currentTime - lastCurrentTime);
                    }
                    var retval = current_1.func.apply(global, current_1.isRequestAnimationFrame ? [this._currentTime] : current_1.args);
                    if (!retval) {
                        // Uncaught exception in the current scheduled function. Stop processing the queue.
                        break;
                    }
                    // check is there any requeue periodic entry is added in
                    // current loop, if there is, we need to add to current loop
                    if (!tickOptions.processNewMacroTasksSynchronously) {
                        this._currentTickRequeuePeriodicEntries.forEach(function (newEntry) {
                            var i = 0;
                            for (; i < schedulerQueue.length; i++) {
                                var currentEntry = schedulerQueue[i];
                                if (newEntry.endTime < currentEntry.endTime) {
                                    break;
                                }
                            }
                            schedulerQueue.splice(i, 0, newEntry);
                        });
                    }
                }
            }
            lastCurrentTime = this._currentTime;
            this._currentTime = finalTime;
            if (doTick) {
                doTick(this._currentTime - lastCurrentTime);
            }
        };
        Scheduler.prototype.flush = function (limit, flushPeriodic, doTick) {
            if (limit === void 0) { limit = 20; }
            if (flushPeriodic === void 0) { flushPeriodic = false; }
            if (flushPeriodic) {
                return this.flushPeriodic(doTick);
            }
            else {
                return this.flushNonPeriodic(limit, doTick);
            }
        };
        Scheduler.prototype.flushPeriodic = function (doTick) {
            if (this._schedulerQueue.length === 0) {
                return 0;
            }
            // Find the last task currently queued in the scheduler queue and tick
            // till that time.
            var startTime = this._currentTime;
            var lastTask = this._schedulerQueue[this._schedulerQueue.length - 1];
            this.tick(lastTask.endTime - startTime, doTick);
            return this._currentTime - startTime;
        };
        Scheduler.prototype.flushNonPeriodic = function (limit, doTick) {
            var startTime = this._currentTime;
            var lastCurrentTime = 0;
            var count = 0;
            while (this._schedulerQueue.length > 0) {
                count++;
                if (count > limit) {
                    throw new Error('flush failed after reaching the limit of ' + limit +
                        ' tasks. Does your code use a polling timeout?');
                }
                // flush only non-periodic timers.
                // If the only remaining tasks are periodic(or requestAnimationFrame), finish flushing.
                if (this._schedulerQueue.filter(function (task) { return !task.isPeriodic && !task.isRequestAnimationFrame; })
                    .length === 0) {
                    break;
                }
                var current = this._schedulerQueue.shift();
                lastCurrentTime = this._currentTime;
                this._currentTime = current.endTime;
                if (doTick) {
                    // Update any secondary schedulers like Jasmine mock Date.
                    doTick(this._currentTime - lastCurrentTime);
                }
                var retval = current.func.apply(global, current.args);
                if (!retval) {
                    // Uncaught exception in the current scheduled function. Stop processing the queue.
                    break;
                }
            }
            return this._currentTime - startTime;
        };
        // Next scheduler id.
        Scheduler.nextId = 1;
        return Scheduler;
    }());
    var FakeAsyncTestZoneSpec = /** @class */ (function () {
        function FakeAsyncTestZoneSpec(namePrefix, trackPendingRequestAnimationFrame, macroTaskOptions) {
            if (trackPendingRequestAnimationFrame === void 0) { trackPendingRequestAnimationFrame = false; }
            this.trackPendingRequestAnimationFrame = trackPendingRequestAnimationFrame;
            this.macroTaskOptions = macroTaskOptions;
            this._scheduler = new Scheduler();
            this._microtasks = [];
            this._lastError = null;
            this._uncaughtPromiseErrors = Promise[Zone.__symbol__('uncaughtPromiseErrors')];
            this.pendingPeriodicTimers = [];
            this.pendingTimers = [];
            this.patchDateLocked = false;
            this.properties = { 'FakeAsyncTestZoneSpec': this };
            this.name = 'fakeAsyncTestZone for ' + namePrefix;
            // in case user can't access the construction of FakeAsyncTestSpec
            // user can also define macroTaskOptions by define a global variable.
            if (!this.macroTaskOptions) {
                this.macroTaskOptions = global[Zone.__symbol__('FakeAsyncTestMacroTask')];
            }
        }
        FakeAsyncTestZoneSpec.assertInZone = function () {
            if (Zone.current.get('FakeAsyncTestZoneSpec') == null) {
                throw new Error('The code should be running in the fakeAsync zone to call this function');
            }
        };
        FakeAsyncTestZoneSpec.prototype._fnAndFlush = function (fn, completers) {
            var _this = this;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                fn.apply(global, args);
                if (_this._lastError === null) { // Success
                    if (completers.onSuccess != null) {
                        completers.onSuccess.apply(global);
                    }
                    // Flush microtasks only on success.
                    _this.flushMicrotasks();
                }
                else { // Failure
                    if (completers.onError != null) {
                        completers.onError.apply(global);
                    }
                }
                // Return true if there were no errors, false otherwise.
                return _this._lastError === null;
            };
        };
        FakeAsyncTestZoneSpec._removeTimer = function (timers, id) {
            var index = timers.indexOf(id);
            if (index > -1) {
                timers.splice(index, 1);
            }
        };
        FakeAsyncTestZoneSpec.prototype._dequeueTimer = function (id) {
            var _this = this;
            return function () { FakeAsyncTestZoneSpec._removeTimer(_this.pendingTimers, id); };
        };
        FakeAsyncTestZoneSpec.prototype._requeuePeriodicTimer = function (fn, interval, args, id) {
            var _this = this;
            return function () {
                // Requeue the timer callback if it's not been canceled.
                if (_this.pendingPeriodicTimers.indexOf(id) !== -1) {
                    _this._scheduler.scheduleFunction(fn, interval, { args: args, isPeriodic: true, id: id, isRequeuePeriodic: true });
                }
            };
        };
        FakeAsyncTestZoneSpec.prototype._dequeuePeriodicTimer = function (id) {
            var _this = this;
            return function () { FakeAsyncTestZoneSpec._removeTimer(_this.pendingPeriodicTimers, id); };
        };
        FakeAsyncTestZoneSpec.prototype._setTimeout = function (fn, delay, args, isTimer) {
            if (isTimer === void 0) { isTimer = true; }
            var removeTimerFn = this._dequeueTimer(Scheduler.nextId);
            // Queue the callback and dequeue the timer on success and error.
            var cb = this._fnAndFlush(fn, { onSuccess: removeTimerFn, onError: removeTimerFn });
            var id = this._scheduler.scheduleFunction(cb, delay, { args: args, isRequestAnimationFrame: !isTimer });
            if (isTimer) {
                this.pendingTimers.push(id);
            }
            return id;
        };
        FakeAsyncTestZoneSpec.prototype._clearTimeout = function (id) {
            FakeAsyncTestZoneSpec._removeTimer(this.pendingTimers, id);
            this._scheduler.removeScheduledFunctionWithId(id);
        };
        FakeAsyncTestZoneSpec.prototype._setInterval = function (fn, interval, args) {
            var id = Scheduler.nextId;
            var completers = { onSuccess: null, onError: this._dequeuePeriodicTimer(id) };
            var cb = this._fnAndFlush(fn, completers);
            // Use the callback created above to requeue on success.
            completers.onSuccess = this._requeuePeriodicTimer(cb, interval, args, id);
            // Queue the callback and dequeue the periodic timer only on error.
            this._scheduler.scheduleFunction(cb, interval, { args: args, isPeriodic: true });
            this.pendingPeriodicTimers.push(id);
            return id;
        };
        FakeAsyncTestZoneSpec.prototype._clearInterval = function (id) {
            FakeAsyncTestZoneSpec._removeTimer(this.pendingPeriodicTimers, id);
            this._scheduler.removeScheduledFunctionWithId(id);
        };
        FakeAsyncTestZoneSpec.prototype._resetLastErrorAndThrow = function () {
            var error = this._lastError || this._uncaughtPromiseErrors[0];
            this._uncaughtPromiseErrors.length = 0;
            this._lastError = null;
            throw error;
        };
        FakeAsyncTestZoneSpec.prototype.getCurrentTime = function () { return this._scheduler.getCurrentTime(); };
        FakeAsyncTestZoneSpec.prototype.getCurrentRealTime = function () { return this._scheduler.getCurrentRealTime(); };
        FakeAsyncTestZoneSpec.prototype.setCurrentRealTime = function (realTime) { this._scheduler.setCurrentRealTime(realTime); };
        FakeAsyncTestZoneSpec.patchDate = function () {
            if (!!global[Zone.__symbol__('disableDatePatching')]) {
                // we don't want to patch global Date
                // because in some case, global Date
                // is already being patched, we need to provide
                // an option to let user still use their
                // own version of Date.
                return;
            }
            if (global['Date'] === FakeDate) {
                // already patched
                return;
            }
            global['Date'] = FakeDate;
            FakeDate.prototype = OriginalDate.prototype;
            // try check and reset timers
            // because jasmine.clock().install() may
            // have replaced the global timer
            FakeAsyncTestZoneSpec.checkTimerPatch();
        };
        FakeAsyncTestZoneSpec.resetDate = function () {
            if (global['Date'] === FakeDate) {
                global['Date'] = OriginalDate;
            }
        };
        FakeAsyncTestZoneSpec.checkTimerPatch = function () {
            if (global.setTimeout !== timers.setTimeout) {
                global.setTimeout = timers.setTimeout;
                global.clearTimeout = timers.clearTimeout;
            }
            if (global.setInterval !== timers.setInterval) {
                global.setInterval = timers.setInterval;
                global.clearInterval = timers.clearInterval;
            }
        };
        FakeAsyncTestZoneSpec.prototype.lockDatePatch = function () {
            this.patchDateLocked = true;
            FakeAsyncTestZoneSpec.patchDate();
        };
        FakeAsyncTestZoneSpec.prototype.unlockDatePatch = function () {
            this.patchDateLocked = false;
            FakeAsyncTestZoneSpec.resetDate();
        };
        FakeAsyncTestZoneSpec.prototype.tick = function (millis, doTick, tickOptions) {
            if (millis === void 0) { millis = 0; }
            if (tickOptions === void 0) { tickOptions = { processNewMacroTasksSynchronously: true }; }
            FakeAsyncTestZoneSpec.assertInZone();
            this.flushMicrotasks();
            this._scheduler.tick(millis, doTick, tickOptions);
            if (this._lastError !== null) {
                this._resetLastErrorAndThrow();
            }
        };
        FakeAsyncTestZoneSpec.prototype.flushMicrotasks = function () {
            var _this = this;
            FakeAsyncTestZoneSpec.assertInZone();
            var flushErrors = function () {
                if (_this._lastError !== null || _this._uncaughtPromiseErrors.length) {
                    // If there is an error stop processing the microtask queue and rethrow the error.
                    _this._resetLastErrorAndThrow();
                }
            };
            while (this._microtasks.length > 0) {
                var microtask = this._microtasks.shift();
                microtask.func.apply(microtask.target, microtask.args);
            }
            flushErrors();
        };
        FakeAsyncTestZoneSpec.prototype.flush = function (limit, flushPeriodic, doTick) {
            FakeAsyncTestZoneSpec.assertInZone();
            this.flushMicrotasks();
            var elapsed = this._scheduler.flush(limit, flushPeriodic, doTick);
            if (this._lastError !== null) {
                this._resetLastErrorAndThrow();
            }
            return elapsed;
        };
        FakeAsyncTestZoneSpec.prototype.onScheduleTask = function (delegate, current, target, task) {
            switch (task.type) {
                case 'microTask':
                    var args = task.data && task.data.args;
                    // should pass additional arguments to callback if have any
                    // currently we know process.nextTick will have such additional
                    // arguments
                    var additionalArgs = void 0;
                    if (args) {
                        var callbackIndex = task.data.cbIdx;
                        if (typeof args.length === 'number' && args.length > callbackIndex + 1) {
                            additionalArgs = Array.prototype.slice.call(args, callbackIndex + 1);
                        }
                    }
                    this._microtasks.push({
                        func: task.invoke,
                        args: additionalArgs,
                        target: task.data && task.data.target
                    });
                    break;
                case 'macroTask':
                    switch (task.source) {
                        case 'setTimeout':
                            task.data['handleId'] = this._setTimeout(task.invoke, task.data['delay'], Array.prototype.slice.call(task.data['args'], 2));
                            break;
                        case 'setImmediate':
                            task.data['handleId'] = this._setTimeout(task.invoke, 0, Array.prototype.slice.call(task.data['args'], 1));
                            break;
                        case 'setInterval':
                            task.data['handleId'] = this._setInterval(task.invoke, task.data['delay'], Array.prototype.slice.call(task.data['args'], 2));
                            break;
                        case 'XMLHttpRequest.send':
                            throw new Error('Cannot make XHRs from within a fake async test. Request URL: ' +
                                task.data['url']);
                        case 'requestAnimationFrame':
                        case 'webkitRequestAnimationFrame':
                        case 'mozRequestAnimationFrame':
                            // Simulate a requestAnimationFrame by using a setTimeout with 16 ms.
                            // (60 frames per second)
                            task.data['handleId'] = this._setTimeout(task.invoke, 16, task.data['args'], this.trackPendingRequestAnimationFrame);
                            break;
                        default:
                            // user can define which macroTask they want to support by passing
                            // macroTaskOptions
                            var macroTaskOption = this.findMacroTaskOption(task);
                            if (macroTaskOption) {
                                var args_1 = task.data && task.data['args'];
                                var delay = args_1 && args_1.length > 1 ? args_1[1] : 0;
                                var callbackArgs = macroTaskOption.callbackArgs ? macroTaskOption.callbackArgs : args_1;
                                if (!!macroTaskOption.isPeriodic) {
                                    // periodic macroTask, use setInterval to simulate
                                    task.data['handleId'] = this._setInterval(task.invoke, delay, callbackArgs);
                                    task.data.isPeriodic = true;
                                }
                                else {
                                    // not periodic, use setTimeout to simulate
                                    task.data['handleId'] = this._setTimeout(task.invoke, delay, callbackArgs);
                                }
                                break;
                            }
                            throw new Error('Unknown macroTask scheduled in fake async test: ' + task.source);
                    }
                    break;
                case 'eventTask':
                    task = delegate.scheduleTask(target, task);
                    break;
            }
            return task;
        };
        FakeAsyncTestZoneSpec.prototype.onCancelTask = function (delegate, current, target, task) {
            switch (task.source) {
                case 'setTimeout':
                case 'requestAnimationFrame':
                case 'webkitRequestAnimationFrame':
                case 'mozRequestAnimationFrame':
                    return this._clearTimeout(task.data['handleId']);
                case 'setInterval':
                    return this._clearInterval(task.data['handleId']);
                default:
                    // user can define which macroTask they want to support by passing
                    // macroTaskOptions
                    var macroTaskOption = this.findMacroTaskOption(task);
                    if (macroTaskOption) {
                        var handleId = task.data['handleId'];
                        return macroTaskOption.isPeriodic ? this._clearInterval(handleId) :
                            this._clearTimeout(handleId);
                    }
                    return delegate.cancelTask(target, task);
            }
        };
        FakeAsyncTestZoneSpec.prototype.onInvoke = function (delegate, current, target, callback, applyThis, applyArgs, source) {
            try {
                FakeAsyncTestZoneSpec.patchDate();
                return delegate.invoke(target, callback, applyThis, applyArgs, source);
            }
            finally {
                if (!this.patchDateLocked) {
                    FakeAsyncTestZoneSpec.resetDate();
                }
            }
        };
        FakeAsyncTestZoneSpec.prototype.findMacroTaskOption = function (task) {
            if (!this.macroTaskOptions) {
                return null;
            }
            for (var i = 0; i < this.macroTaskOptions.length; i++) {
                var macroTaskOption = this.macroTaskOptions[i];
                if (macroTaskOption.source === task.source) {
                    return macroTaskOption;
                }
            }
            return null;
        };
        FakeAsyncTestZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
            this._lastError = error;
            return false; // Don't propagate error to parent zone.
        };
        return FakeAsyncTestZoneSpec;
    }());
    // Export the class so that new instances can be created with proper
    // constructor params.
    Zone['FakeAsyncTestZoneSpec'] = FakeAsyncTestZoneSpec;
})(typeof window === 'object' && window || typeof self === 'object' && self || global);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1hc3luYy10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvem9uZS1zcGVjL2Zha2UtYXN5bmMtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILENBQUMsVUFBUyxNQUFXO0lBdUJuQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2pDO1FBQ0U7WUFDRSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixJQUFNLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkQsWUFBVyxZQUFZLFlBQVosWUFBWSxxQkFBSSxJQUFJLE1BQUU7YUFDbEM7UUFDSCxDQUFDO1FBRU0sWUFBRyxHQUFWO1lBQ0UsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3hFLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLE9BQU8scUJBQXFCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM1RjtZQUNELE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FBQyxBQW5CRCxJQW1CQztJQUVBLFFBQWdCLENBQUMsR0FB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LE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbihmdW5jdGlvbihnbG9iYWw6IGFueSkge1xuICBpbnRlcmZhY2UgU2NoZWR1bGVkRnVuY3Rpb24ge1xuICAgIGVuZFRpbWU6IG51bWJlcjtcbiAgICBpZDogbnVtYmVyO1xuICAgIGZ1bmM6IEZ1bmN0aW9uO1xuICAgIGFyZ3M6IGFueVtdO1xuICAgIGRlbGF5OiBudW1iZXI7XG4gICAgaXNQZXJpb2RpYzogYm9vbGVhbjtcbiAgICBpc1JlcXVlc3RBbmltYXRpb25GcmFtZTogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBNaWNyb1Rhc2tTY2hlZHVsZWRGdW5jdGlvbiB7XG4gICAgZnVuYzogRnVuY3Rpb247XG4gICAgYXJncz86IGFueVtdO1xuICAgIHRhcmdldDogYW55O1xuICB9XG5cbiAgaW50ZXJmYWNlIE1hY3JvVGFza09wdGlvbnMge1xuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIGlzUGVyaW9kaWM/OiBib29sZWFuO1xuICAgIGNhbGxiYWNrQXJncz86IGFueTtcbiAgfVxuXG4gIGNvbnN0IE9yaWdpbmFsRGF0ZSA9IGdsb2JhbC5EYXRlO1xuICBjbGFzcyBGYWtlRGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBkID0gbmV3IE9yaWdpbmFsRGF0ZSgpO1xuICAgICAgICBkLnNldFRpbWUoRmFrZURhdGUubm93KCkpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gbmV3IE9yaWdpbmFsRGF0ZSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbm93KCkge1xuICAgICAgY29uc3QgZmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gWm9uZS5jdXJyZW50LmdldCgnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJyk7XG4gICAgICBpZiAoZmFrZUFzeW5jVGVzdFpvbmVTcGVjKSB7XG4gICAgICAgIHJldHVybiBmYWtlQXN5bmNUZXN0Wm9uZVNwZWMuZ2V0Q3VycmVudFJlYWxUaW1lKCkgKyBmYWtlQXN5bmNUZXN0Wm9uZVNwZWMuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBPcmlnaW5hbERhdGUubm93LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgKEZha2VEYXRlIGFzIGFueSkuVVRDID0gT3JpZ2luYWxEYXRlLlVUQztcbiAgKEZha2VEYXRlIGFzIGFueSkucGFyc2UgPSBPcmlnaW5hbERhdGUucGFyc2U7XG5cbiAgLy8ga2VlcCBhIHJlZmVyZW5jZSBmb3Igem9uZSBwYXRjaGVkIHRpbWVyIGZ1bmN0aW9uXG4gIGNvbnN0IHRpbWVycyA9IHtcbiAgICBzZXRUaW1lb3V0OiBnbG9iYWwuc2V0VGltZW91dCxcbiAgICBzZXRJbnRlcnZhbDogZ2xvYmFsLnNldEludGVydmFsLFxuICAgIGNsZWFyVGltZW91dDogZ2xvYmFsLmNsZWFyVGltZW91dCxcbiAgICBjbGVhckludGVydmFsOiBnbG9iYWwuY2xlYXJJbnRlcnZhbFxuICB9O1xuXG4gIGNsYXNzIFNjaGVkdWxlciB7XG4gICAgLy8gTmV4dCBzY2hlZHVsZXIgaWQuXG4gICAgcHVibGljIHN0YXRpYyBuZXh0SWQ6IG51bWJlciA9IDE7XG5cbiAgICAvLyBTY2hlZHVsZXIgcXVldWUgd2l0aCB0aGUgdHVwbGUgb2YgZW5kIHRpbWUgYW5kIGNhbGxiYWNrIGZ1bmN0aW9uIC0gc29ydGVkIGJ5IGVuZCB0aW1lLlxuICAgIHByaXZhdGUgX3NjaGVkdWxlclF1ZXVlOiBTY2hlZHVsZWRGdW5jdGlvbltdID0gW107XG4gICAgLy8gQ3VycmVudCBzaW11bGF0ZWQgdGltZSBpbiBtaWxsaXMuXG4gICAgcHJpdmF0ZSBfY3VycmVudFRpbWU6IG51bWJlciA9IDA7XG4gICAgLy8gQ3VycmVudCByZWFsIHRpbWUgaW4gbWlsbGlzLlxuICAgIHByaXZhdGUgX2N1cnJlbnRSZWFsVGltZTogbnVtYmVyID0gT3JpZ2luYWxEYXRlLm5vdygpO1xuICAgIC8vIHRyYWNrIHJlcXVldWVQZXJpb2RpY1RpbWVyXG4gICAgcHJpdmF0ZSBfY3VycmVudFRpY2tSZXF1ZXVlUGVyaW9kaWNFbnRyaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgZ2V0Q3VycmVudFRpbWUoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50VGltZTsgfVxuXG4gICAgZ2V0Q3VycmVudFJlYWxUaW1lKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlYWxUaW1lOyB9XG5cbiAgICBzZXRDdXJyZW50UmVhbFRpbWUocmVhbFRpbWU6IG51bWJlcikgeyB0aGlzLl9jdXJyZW50UmVhbFRpbWUgPSByZWFsVGltZTsgfVxuXG4gICAgc2NoZWR1bGVGdW5jdGlvbihjYjogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7XG4gICAgICBhcmdzPzogYW55W10sXG4gICAgICBpc1BlcmlvZGljPzogYm9vbGVhbixcbiAgICAgIGlzUmVxdWVzdEFuaW1hdGlvbkZyYW1lPzogYm9vbGVhbixcbiAgICAgIGlkPzogbnVtYmVyLFxuICAgICAgaXNSZXF1ZXVlUGVyaW9kaWM/OiBib29sZWFuXG4gICAgfSk6IG51bWJlciB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgYXJnczogW10sXG4gICAgICAgICAgaXNQZXJpb2RpYzogZmFsc2UsXG4gICAgICAgICAgaXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGZhbHNlLFxuICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICBpc1JlcXVldWVQZXJpb2RpYzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgfTtcbiAgICAgIGxldCBjdXJyZW50SWQgPSBvcHRpb25zLmlkICEgPCAwID8gU2NoZWR1bGVyLm5leHRJZCsrIDogb3B0aW9ucy5pZCAhO1xuICAgICAgbGV0IGVuZFRpbWUgPSB0aGlzLl9jdXJyZW50VGltZSArIGRlbGF5O1xuXG4gICAgICAvLyBJbnNlcnQgc28gdGhhdCBzY2hlZHVsZXIgcXVldWUgcmVtYWlucyBzb3J0ZWQgYnkgZW5kIHRpbWUuXG4gICAgICBsZXQgbmV3RW50cnk6IFNjaGVkdWxlZEZ1bmN0aW9uID0ge1xuICAgICAgICBlbmRUaW1lOiBlbmRUaW1lLFxuICAgICAgICBpZDogY3VycmVudElkLFxuICAgICAgICBmdW5jOiBjYixcbiAgICAgICAgYXJnczogb3B0aW9ucy5hcmdzICEsXG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgaXNQZXJpb2RpYzogb3B0aW9ucy5pc1BlcmlvZGljICEsXG4gICAgICAgIGlzUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBvcHRpb25zLmlzUmVxdWVzdEFuaW1hdGlvbkZyYW1lICFcbiAgICAgIH07XG4gICAgICBpZiAob3B0aW9ucy5pc1JlcXVldWVQZXJpb2RpYyAhKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaWNrUmVxdWV1ZVBlcmlvZGljRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICAgIH1cbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGZvciAoOyBpIDwgdGhpcy5fc2NoZWR1bGVyUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbnRyeSA9IHRoaXMuX3NjaGVkdWxlclF1ZXVlW2ldO1xuICAgICAgICBpZiAobmV3RW50cnkuZW5kVGltZSA8IGN1cnJlbnRFbnRyeS5lbmRUaW1lKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3NjaGVkdWxlclF1ZXVlLnNwbGljZShpLCAwLCBuZXdFbnRyeSk7XG4gICAgICByZXR1cm4gY3VycmVudElkO1xuICAgIH1cblxuICAgIHJlbW92ZVNjaGVkdWxlZEZ1bmN0aW9uV2l0aElkKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2NoZWR1bGVyUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3NjaGVkdWxlclF1ZXVlW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgdGhpcy5fc2NoZWR1bGVyUXVldWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGljayhtaWxsaXM6IG51bWJlciA9IDAsIGRvVGljaz86IChlbGFwc2VkOiBudW1iZXIpID0+IHZvaWQsIHRpY2tPcHRpb25zPzoge1xuICAgICAgcHJvY2Vzc05ld01hY3JvVGFza3NTeW5jaHJvbm91c2x5OiBib29sZWFuXG4gICAgfSk6IHZvaWQge1xuICAgICAgbGV0IGZpbmFsVGltZSA9IHRoaXMuX2N1cnJlbnRUaW1lICsgbWlsbGlzO1xuICAgICAgbGV0IGxhc3RDdXJyZW50VGltZSA9IDA7XG4gICAgICB0aWNrT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe3Byb2Nlc3NOZXdNYWNyb1Rhc2tzU3luY2hyb25vdXNseTogdHJ1ZX0sIHRpY2tPcHRpb25zKTtcbiAgICAgIC8vIHdlIG5lZWQgdG8gY29weSB0aGUgc2NoZWR1bGVyUXVldWUgc28gbmVzdGVkIHRpbWVvdXRcbiAgICAgIC8vIHdpbGwgbm90IGJlIHdyb25nbHkgY2FsbGVkIGluIHRoZSBjdXJyZW50IHRpY2tcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMzNzk5XG4gICAgICBjb25zdCBzY2hlZHVsZXJRdWV1ZSA9IHRpY2tPcHRpb25zLnByb2Nlc3NOZXdNYWNyb1Rhc2tzU3luY2hyb25vdXNseSA/XG4gICAgICAgICAgdGhpcy5fc2NoZWR1bGVyUXVldWUgOlxuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlclF1ZXVlLnNsaWNlKCk7XG4gICAgICBpZiAoc2NoZWR1bGVyUXVldWUubGVuZ3RoID09PSAwICYmIGRvVGljaykge1xuICAgICAgICBkb1RpY2sobWlsbGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHNjaGVkdWxlclF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gY2xlYXIgcmVxdWV1ZUVudHJpZXMgYmVmb3JlIGVhY2ggbG9vcFxuICAgICAgICB0aGlzLl9jdXJyZW50VGlja1JlcXVldWVQZXJpb2RpY0VudHJpZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBzY2hlZHVsZXJRdWV1ZVswXTtcbiAgICAgICAgaWYgKGZpbmFsVGltZSA8IGN1cnJlbnQuZW5kVGltZSkge1xuICAgICAgICAgIC8vIERvbmUgcHJvY2Vzc2luZyB0aGUgcXVldWUgc2luY2UgaXQncyBzb3J0ZWQgYnkgZW5kVGltZS5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaW1lIHRvIHJ1biBzY2hlZHVsZWQgZnVuY3Rpb24uIFJlbW92ZSBpdCBmcm9tIHRoZSBoZWFkIG9mIHF1ZXVlLlxuICAgICAgICAgIGxldCBjdXJyZW50ID0gc2NoZWR1bGVyUXVldWUuc2hpZnQoKSAhO1xuICAgICAgICAgIGlmICghdGlja09wdGlvbnMucHJvY2Vzc05ld01hY3JvVGFza3NTeW5jaHJvbm91c2x5KSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLl9zY2hlZHVsZXJRdWV1ZS5pbmRleE9mKGN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlclF1ZXVlLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0Q3VycmVudFRpbWUgPSB0aGlzLl9jdXJyZW50VGltZTtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IGN1cnJlbnQuZW5kVGltZTtcbiAgICAgICAgICBpZiAoZG9UaWNrKSB7XG4gICAgICAgICAgICBkb1RpY2sodGhpcy5fY3VycmVudFRpbWUgLSBsYXN0Q3VycmVudFRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcmV0dmFsID0gY3VycmVudC5mdW5jLmFwcGx5KFxuICAgICAgICAgICAgICBnbG9iYWwsIGN1cnJlbnQuaXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyBbdGhpcy5fY3VycmVudFRpbWVdIDogY3VycmVudC5hcmdzKTtcbiAgICAgICAgICBpZiAoIXJldHZhbCkge1xuICAgICAgICAgICAgLy8gVW5jYXVnaHQgZXhjZXB0aW9uIGluIHRoZSBjdXJyZW50IHNjaGVkdWxlZCBmdW5jdGlvbi4gU3RvcCBwcm9jZXNzaW5nIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNoZWNrIGlzIHRoZXJlIGFueSByZXF1ZXVlIHBlcmlvZGljIGVudHJ5IGlzIGFkZGVkIGluXG4gICAgICAgICAgLy8gY3VycmVudCBsb29wLCBpZiB0aGVyZSBpcywgd2UgbmVlZCB0byBhZGQgdG8gY3VycmVudCBsb29wXG4gICAgICAgICAgaWYgKCF0aWNrT3B0aW9ucy5wcm9jZXNzTmV3TWFjcm9UYXNrc1N5bmNocm9ub3VzbHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaWNrUmVxdWV1ZVBlcmlvZGljRW50cmllcy5mb3JFYWNoKG5ld0VudHJ5ID0+IHtcbiAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICBmb3IgKDsgaSA8IHNjaGVkdWxlclF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEVudHJ5ID0gc2NoZWR1bGVyUXVldWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKG5ld0VudHJ5LmVuZFRpbWUgPCBjdXJyZW50RW50cnkuZW5kVGltZSkge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNjaGVkdWxlclF1ZXVlLnNwbGljZShpLCAwLCBuZXdFbnRyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxhc3RDdXJyZW50VGltZSA9IHRoaXMuX2N1cnJlbnRUaW1lO1xuICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSBmaW5hbFRpbWU7XG4gICAgICBpZiAoZG9UaWNrKSB7XG4gICAgICAgIGRvVGljayh0aGlzLl9jdXJyZW50VGltZSAtIGxhc3RDdXJyZW50VGltZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmx1c2gobGltaXQgPSAyMCwgZmx1c2hQZXJpb2RpYyA9IGZhbHNlLCBkb1RpY2s/OiAoZWxhcHNlZDogbnVtYmVyKSA9PiB2b2lkKTogbnVtYmVyIHtcbiAgICAgIGlmIChmbHVzaFBlcmlvZGljKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsdXNoUGVyaW9kaWMoZG9UaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsdXNoTm9uUGVyaW9kaWMobGltaXQsIGRvVGljayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmbHVzaFBlcmlvZGljKGRvVGljaz86IChlbGFwc2VkOiBudW1iZXIpID0+IHZvaWQpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuX3NjaGVkdWxlclF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIC8vIEZpbmQgdGhlIGxhc3QgdGFzayBjdXJyZW50bHkgcXVldWVkIGluIHRoZSBzY2hlZHVsZXIgcXVldWUgYW5kIHRpY2tcbiAgICAgIC8vIHRpbGwgdGhhdCB0aW1lLlxuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy5fY3VycmVudFRpbWU7XG4gICAgICBjb25zdCBsYXN0VGFzayA9IHRoaXMuX3NjaGVkdWxlclF1ZXVlW3RoaXMuX3NjaGVkdWxlclF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy50aWNrKGxhc3RUYXNrLmVuZFRpbWUgLSBzdGFydFRpbWUsIGRvVGljayk7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmbHVzaE5vblBlcmlvZGljKGxpbWl0OiBudW1iZXIsIGRvVGljaz86IChlbGFwc2VkOiBudW1iZXIpID0+IHZvaWQpOiBudW1iZXIge1xuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy5fY3VycmVudFRpbWU7XG4gICAgICBsZXQgbGFzdEN1cnJlbnRUaW1lID0gMDtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICB3aGlsZSAodGhpcy5fc2NoZWR1bGVyUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoY291bnQgPiBsaW1pdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ2ZsdXNoIGZhaWxlZCBhZnRlciByZWFjaGluZyB0aGUgbGltaXQgb2YgJyArIGxpbWl0ICtcbiAgICAgICAgICAgICAgJyB0YXNrcy4gRG9lcyB5b3VyIGNvZGUgdXNlIGEgcG9sbGluZyB0aW1lb3V0PycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmx1c2ggb25seSBub24tcGVyaW9kaWMgdGltZXJzLlxuICAgICAgICAvLyBJZiB0aGUgb25seSByZW1haW5pbmcgdGFza3MgYXJlIHBlcmlvZGljKG9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSksIGZpbmlzaCBmbHVzaGluZy5cbiAgICAgICAgaWYgKHRoaXMuX3NjaGVkdWxlclF1ZXVlLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzUGVyaW9kaWMgJiYgIXRhc2suaXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgICAgICAgICAgLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NjaGVkdWxlclF1ZXVlLnNoaWZ0KCkgITtcbiAgICAgICAgbGFzdEN1cnJlbnRUaW1lID0gdGhpcy5fY3VycmVudFRpbWU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gY3VycmVudC5lbmRUaW1lO1xuICAgICAgICBpZiAoZG9UaWNrKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIGFueSBzZWNvbmRhcnkgc2NoZWR1bGVycyBsaWtlIEphc21pbmUgbW9jayBEYXRlLlxuICAgICAgICAgIGRvVGljayh0aGlzLl9jdXJyZW50VGltZSAtIGxhc3RDdXJyZW50VGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmV0dmFsID0gY3VycmVudC5mdW5jLmFwcGx5KGdsb2JhbCwgY3VycmVudC5hcmdzKTtcbiAgICAgICAgaWYgKCFyZXR2YWwpIHtcbiAgICAgICAgICAvLyBVbmNhdWdodCBleGNlcHRpb24gaW4gdGhlIGN1cnJlbnQgc2NoZWR1bGVkIGZ1bmN0aW9uLiBTdG9wIHByb2Nlc3NpbmcgdGhlIHF1ZXVlLlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgRmFrZUFzeW5jVGVzdFpvbmVTcGVjIGltcGxlbWVudHMgWm9uZVNwZWMge1xuICAgIHN0YXRpYyBhc3NlcnRJblpvbmUoKTogdm9pZCB7XG4gICAgICBpZiAoWm9uZS5jdXJyZW50LmdldCgnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJykgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb2RlIHNob3VsZCBiZSBydW5uaW5nIGluIHRoZSBmYWtlQXN5bmMgem9uZSB0byBjYWxsIHRoaXMgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY2hlZHVsZXI6IFNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIoKTtcbiAgICBwcml2YXRlIF9taWNyb3Rhc2tzOiBNaWNyb1Rhc2tTY2hlZHVsZWRGdW5jdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBfbGFzdEVycm9yOiBFcnJvcnxudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIF91bmNhdWdodFByb21pc2VFcnJvcnM6IHtyZWplY3Rpb246IGFueX1bXSA9XG4gICAgICAgIChQcm9taXNlIGFzIGFueSlbKFpvbmUgYXMgYW55KS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV07XG5cbiAgICBwZW5kaW5nUGVyaW9kaWNUaW1lcnM6IG51bWJlcltdID0gW107XG4gICAgcGVuZGluZ1RpbWVyczogbnVtYmVyW10gPSBbXTtcblxuICAgIHByaXZhdGUgcGF0Y2hEYXRlTG9ja2VkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZVByZWZpeDogc3RyaW5nLCBwcml2YXRlIHRyYWNrUGVuZGluZ1JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZhbHNlLFxuICAgICAgICBwcml2YXRlIG1hY3JvVGFza09wdGlvbnM/OiBNYWNyb1Rhc2tPcHRpb25zW10pIHtcbiAgICAgIHRoaXMubmFtZSA9ICdmYWtlQXN5bmNUZXN0Wm9uZSBmb3IgJyArIG5hbWVQcmVmaXg7XG4gICAgICAvLyBpbiBjYXNlIHVzZXIgY2FuJ3QgYWNjZXNzIHRoZSBjb25zdHJ1Y3Rpb24gb2YgRmFrZUFzeW5jVGVzdFNwZWNcbiAgICAgIC8vIHVzZXIgY2FuIGFsc28gZGVmaW5lIG1hY3JvVGFza09wdGlvbnMgYnkgZGVmaW5lIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICAgICAgaWYgKCF0aGlzLm1hY3JvVGFza09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tYWNyb1Rhc2tPcHRpb25zID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnRmFrZUFzeW5jVGVzdE1hY3JvVGFzaycpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9mbkFuZEZsdXNoKGZuOiBGdW5jdGlvbiwgY29tcGxldGVyczoge29uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkVycm9yPzogRnVuY3Rpb259KTpcbiAgICAgICAgRnVuY3Rpb24ge1xuICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBmbi5hcHBseShnbG9iYWwsIGFyZ3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RXJyb3IgPT09IG51bGwpIHsgIC8vIFN1Y2Nlc3NcbiAgICAgICAgICBpZiAoY29tcGxldGVycy5vblN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcGxldGVycy5vblN1Y2Nlc3MuYXBwbHkoZ2xvYmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmx1c2ggbWljcm90YXNrcyBvbmx5IG9uIHN1Y2Nlc3MuXG4gICAgICAgICAgdGhpcy5mbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgICAgfSBlbHNlIHsgIC8vIEZhaWx1cmVcbiAgICAgICAgICBpZiAoY29tcGxldGVycy5vbkVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlcnMub25FcnJvci5hcHBseShnbG9iYWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGVyZSB3ZXJlIG5vIGVycm9ycywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdEVycm9yID09PSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfcmVtb3ZlVGltZXIodGltZXJzOiBudW1iZXJbXSwgaWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgbGV0IGluZGV4ID0gdGltZXJzLmluZGV4T2YoaWQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGltZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVxdWV1ZVRpbWVyKGlkOiBudW1iZXIpOiBGdW5jdGlvbiB7XG4gICAgICByZXR1cm4gKCkgPT4geyBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMuX3JlbW92ZVRpbWVyKHRoaXMucGVuZGluZ1RpbWVycywgaWQpOyB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlcXVldWVQZXJpb2RpY1RpbWVyKGZuOiBGdW5jdGlvbiwgaW50ZXJ2YWw6IG51bWJlciwgYXJnczogYW55W10sIGlkOiBudW1iZXIpOlxuICAgICAgICBGdW5jdGlvbiB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAvLyBSZXF1ZXVlIHRoZSB0aW1lciBjYWxsYmFjayBpZiBpdCdzIG5vdCBiZWVuIGNhbmNlbGVkLlxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nUGVyaW9kaWNUaW1lcnMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fc2NoZWR1bGVyLnNjaGVkdWxlRnVuY3Rpb24oXG4gICAgICAgICAgICAgIGZuLCBpbnRlcnZhbCwge2FyZ3MsIGlzUGVyaW9kaWM6IHRydWUsIGlkLCBpc1JlcXVldWVQZXJpb2RpYzogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlcXVldWVQZXJpb2RpY1RpbWVyKGlkOiBudW1iZXIpOiBGdW5jdGlvbiB7XG4gICAgICByZXR1cm4gKCkgPT4geyBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMuX3JlbW92ZVRpbWVyKHRoaXMucGVuZGluZ1BlcmlvZGljVGltZXJzLCBpZCk7IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0VGltZW91dChmbjogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIsIGFyZ3M6IGFueVtdLCBpc1RpbWVyID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgICBsZXQgcmVtb3ZlVGltZXJGbiA9IHRoaXMuX2RlcXVldWVUaW1lcihTY2hlZHVsZXIubmV4dElkKTtcbiAgICAgIC8vIFF1ZXVlIHRoZSBjYWxsYmFjayBhbmQgZGVxdWV1ZSB0aGUgdGltZXIgb24gc3VjY2VzcyBhbmQgZXJyb3IuXG4gICAgICBsZXQgY2IgPSB0aGlzLl9mbkFuZEZsdXNoKGZuLCB7b25TdWNjZXNzOiByZW1vdmVUaW1lckZuLCBvbkVycm9yOiByZW1vdmVUaW1lckZufSk7XG4gICAgICBsZXQgaWQgPVxuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlci5zY2hlZHVsZUZ1bmN0aW9uKGNiLCBkZWxheSwge2FyZ3MsIGlzUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAhaXNUaW1lcn0pO1xuICAgICAgaWYgKGlzVGltZXIpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nVGltZXJzLnB1c2goaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyVGltZW91dChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMuX3JlbW92ZVRpbWVyKHRoaXMucGVuZGluZ1RpbWVycywgaWQpO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyLnJlbW92ZVNjaGVkdWxlZEZ1bmN0aW9uV2l0aElkKGlkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJbnRlcnZhbChmbjogRnVuY3Rpb24sIGludGVydmFsOiBudW1iZXIsIGFyZ3M6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgIGxldCBpZCA9IFNjaGVkdWxlci5uZXh0SWQ7XG4gICAgICBsZXQgY29tcGxldGVycyA9IHtvblN1Y2Nlc3M6IG51bGwgYXMgYW55LCBvbkVycm9yOiB0aGlzLl9kZXF1ZXVlUGVyaW9kaWNUaW1lcihpZCl9O1xuICAgICAgbGV0IGNiID0gdGhpcy5fZm5BbmRGbHVzaChmbiwgY29tcGxldGVycyk7XG5cbiAgICAgIC8vIFVzZSB0aGUgY2FsbGJhY2sgY3JlYXRlZCBhYm92ZSB0byByZXF1ZXVlIG9uIHN1Y2Nlc3MuXG4gICAgICBjb21wbGV0ZXJzLm9uU3VjY2VzcyA9IHRoaXMuX3JlcXVldWVQZXJpb2RpY1RpbWVyKGNiLCBpbnRlcnZhbCwgYXJncywgaWQpO1xuXG4gICAgICAvLyBRdWV1ZSB0aGUgY2FsbGJhY2sgYW5kIGRlcXVldWUgdGhlIHBlcmlvZGljIHRpbWVyIG9ubHkgb24gZXJyb3IuXG4gICAgICB0aGlzLl9zY2hlZHVsZXIuc2NoZWR1bGVGdW5jdGlvbihjYiwgaW50ZXJ2YWwsIHthcmdzLCBpc1BlcmlvZGljOiB0cnVlfSk7XG4gICAgICB0aGlzLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5wdXNoKGlkKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhckludGVydmFsKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIEZha2VBc3luY1Rlc3Rab25lU3BlYy5fcmVtb3ZlVGltZXIodGhpcy5wZW5kaW5nUGVyaW9kaWNUaW1lcnMsIGlkKTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlci5yZW1vdmVTY2hlZHVsZWRGdW5jdGlvbldpdGhJZChpZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzZXRMYXN0RXJyb3JBbmRUaHJvdygpOiB2b2lkIHtcbiAgICAgIGxldCBlcnJvciA9IHRoaXMuX2xhc3RFcnJvciB8fCB0aGlzLl91bmNhdWdodFByb21pc2VFcnJvcnNbMF07XG4gICAgICB0aGlzLl91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuX2xhc3RFcnJvciA9IG51bGw7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VGltZSgpIHsgcmV0dXJuIHRoaXMuX3NjaGVkdWxlci5nZXRDdXJyZW50VGltZSgpOyB9XG5cbiAgICBnZXRDdXJyZW50UmVhbFRpbWUoKSB7IHJldHVybiB0aGlzLl9zY2hlZHVsZXIuZ2V0Q3VycmVudFJlYWxUaW1lKCk7IH1cblxuICAgIHNldEN1cnJlbnRSZWFsVGltZShyZWFsVGltZTogbnVtYmVyKSB7IHRoaXMuX3NjaGVkdWxlci5zZXRDdXJyZW50UmVhbFRpbWUocmVhbFRpbWUpOyB9XG5cbiAgICBzdGF0aWMgcGF0Y2hEYXRlKCkge1xuICAgICAgaWYgKCEhZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnZGlzYWJsZURhdGVQYXRjaGluZycpXSkge1xuICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHBhdGNoIGdsb2JhbCBEYXRlXG4gICAgICAgIC8vIGJlY2F1c2UgaW4gc29tZSBjYXNlLCBnbG9iYWwgRGF0ZVxuICAgICAgICAvLyBpcyBhbHJlYWR5IGJlaW5nIHBhdGNoZWQsIHdlIG5lZWQgdG8gcHJvdmlkZVxuICAgICAgICAvLyBhbiBvcHRpb24gdG8gbGV0IHVzZXIgc3RpbGwgdXNlIHRoZWlyXG4gICAgICAgIC8vIG93biB2ZXJzaW9uIG9mIERhdGUuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGdsb2JhbFsnRGF0ZSddID09PSBGYWtlRGF0ZSkge1xuICAgICAgICAvLyBhbHJlYWR5IHBhdGNoZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZ2xvYmFsWydEYXRlJ10gPSBGYWtlRGF0ZTtcbiAgICAgIEZha2VEYXRlLnByb3RvdHlwZSA9IE9yaWdpbmFsRGF0ZS5wcm90b3R5cGU7XG5cbiAgICAgIC8vIHRyeSBjaGVjayBhbmQgcmVzZXQgdGltZXJzXG4gICAgICAvLyBiZWNhdXNlIGphc21pbmUuY2xvY2soKS5pbnN0YWxsKCkgbWF5XG4gICAgICAvLyBoYXZlIHJlcGxhY2VkIHRoZSBnbG9iYWwgdGltZXJcbiAgICAgIEZha2VBc3luY1Rlc3Rab25lU3BlYy5jaGVja1RpbWVyUGF0Y2goKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXREYXRlKCkge1xuICAgICAgaWYgKGdsb2JhbFsnRGF0ZSddID09PSBGYWtlRGF0ZSkge1xuICAgICAgICBnbG9iYWxbJ0RhdGUnXSA9IE9yaWdpbmFsRGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tUaW1lclBhdGNoKCkge1xuICAgICAgaWYgKGdsb2JhbC5zZXRUaW1lb3V0ICE9PSB0aW1lcnMuc2V0VGltZW91dCkge1xuICAgICAgICBnbG9iYWwuc2V0VGltZW91dCA9IHRpbWVycy5zZXRUaW1lb3V0O1xuICAgICAgICBnbG9iYWwuY2xlYXJUaW1lb3V0ID0gdGltZXJzLmNsZWFyVGltZW91dDtcbiAgICAgIH1cbiAgICAgIGlmIChnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHRpbWVycy5zZXRJbnRlcnZhbCkge1xuICAgICAgICBnbG9iYWwuc2V0SW50ZXJ2YWwgPSB0aW1lcnMuc2V0SW50ZXJ2YWw7XG4gICAgICAgIGdsb2JhbC5jbGVhckludGVydmFsID0gdGltZXJzLmNsZWFySW50ZXJ2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9ja0RhdGVQYXRjaCgpIHtcbiAgICAgIHRoaXMucGF0Y2hEYXRlTG9ja2VkID0gdHJ1ZTtcbiAgICAgIEZha2VBc3luY1Rlc3Rab25lU3BlYy5wYXRjaERhdGUoKTtcbiAgICB9XG4gICAgdW5sb2NrRGF0ZVBhdGNoKCkge1xuICAgICAgdGhpcy5wYXRjaERhdGVMb2NrZWQgPSBmYWxzZTtcbiAgICAgIEZha2VBc3luY1Rlc3Rab25lU3BlYy5yZXNldERhdGUoKTtcbiAgICB9XG5cbiAgICB0aWNrKG1pbGxpczogbnVtYmVyID0gMCwgZG9UaWNrPzogKGVsYXBzZWQ6IG51bWJlcikgPT4gdm9pZCwgdGlja09wdGlvbnM6IHtcbiAgICAgIHByb2Nlc3NOZXdNYWNyb1Rhc2tzU3luY2hyb25vdXNseTogYm9vbGVhblxuICAgIH0gPSB7cHJvY2Vzc05ld01hY3JvVGFza3NTeW5jaHJvbm91c2x5OiB0cnVlfSk6IHZvaWQge1xuICAgICAgRmFrZUFzeW5jVGVzdFpvbmVTcGVjLmFzc2VydEluWm9uZSgpO1xuICAgICAgdGhpcy5mbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlci50aWNrKG1pbGxpcywgZG9UaWNrLCB0aWNrT3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy5fbGFzdEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0TGFzdEVycm9yQW5kVGhyb3coKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmbHVzaE1pY3JvdGFza3MoKTogdm9pZCB7XG4gICAgICBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMuYXNzZXJ0SW5ab25lKCk7XG4gICAgICBjb25zdCBmbHVzaEVycm9ycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RFcnJvciAhPT0gbnVsbCB8fCB0aGlzLl91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3Igc3RvcCBwcm9jZXNzaW5nIHRoZSBtaWNyb3Rhc2sgcXVldWUgYW5kIHJldGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgIHRoaXMuX3Jlc2V0TGFzdEVycm9yQW5kVGhyb3coKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdoaWxlICh0aGlzLl9taWNyb3Rhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG1pY3JvdGFzayA9IHRoaXMuX21pY3JvdGFza3Muc2hpZnQoKSAhO1xuICAgICAgICBtaWNyb3Rhc2suZnVuYy5hcHBseShtaWNyb3Rhc2sudGFyZ2V0LCBtaWNyb3Rhc2suYXJncyk7XG4gICAgICB9XG4gICAgICBmbHVzaEVycm9ycygpO1xuICAgIH1cblxuICAgIGZsdXNoKGxpbWl0PzogbnVtYmVyLCBmbHVzaFBlcmlvZGljPzogYm9vbGVhbiwgZG9UaWNrPzogKGVsYXBzZWQ6IG51bWJlcikgPT4gdm9pZCk6IG51bWJlciB7XG4gICAgICBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMuYXNzZXJ0SW5ab25lKCk7XG4gICAgICB0aGlzLmZsdXNoTWljcm90YXNrcygpO1xuICAgICAgY29uc3QgZWxhcHNlZCA9IHRoaXMuX3NjaGVkdWxlci5mbHVzaChsaW1pdCwgZmx1c2hQZXJpb2RpYywgZG9UaWNrKTtcbiAgICAgIGlmICh0aGlzLl9sYXN0RXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRMYXN0RXJyb3JBbmRUaHJvdygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxuXG4gICAgLy8gWm9uZVNwZWMgaW1wbGVtZW50YXRpb24gYmVsb3cuXG5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcm9wZXJ0aWVzOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHsnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJzogdGhpc307XG5cbiAgICBvblNjaGVkdWxlVGFzayhkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIHRhc2s6IFRhc2spOiBUYXNrIHtcbiAgICAgIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21pY3JvVGFzayc6XG4gICAgICAgICAgbGV0IGFyZ3MgPSB0YXNrLmRhdGEgJiYgKHRhc2suZGF0YSBhcyBhbnkpLmFyZ3M7XG4gICAgICAgICAgLy8gc2hvdWxkIHBhc3MgYWRkaXRpb25hbCBhcmd1bWVudHMgdG8gY2FsbGJhY2sgaWYgaGF2ZSBhbnlcbiAgICAgICAgICAvLyBjdXJyZW50bHkgd2Uga25vdyBwcm9jZXNzLm5leHRUaWNrIHdpbGwgaGF2ZSBzdWNoIGFkZGl0aW9uYWxcbiAgICAgICAgICAvLyBhcmd1bWVudHNcbiAgICAgICAgICBsZXQgYWRkaXRpb25hbEFyZ3M6IGFueVtdfHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAoYXJncykge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrSW5kZXggPSAodGFzay5kYXRhIGFzIGFueSkuY2JJZHg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3MubGVuZ3RoID09PSAnbnVtYmVyJyAmJiBhcmdzLmxlbmd0aCA+IGNhbGxiYWNrSW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncywgY2FsbGJhY2tJbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9taWNyb3Rhc2tzLnB1c2goe1xuICAgICAgICAgICAgZnVuYzogdGFzay5pbnZva2UsXG4gICAgICAgICAgICBhcmdzOiBhZGRpdGlvbmFsQXJncyxcbiAgICAgICAgICAgIHRhcmdldDogdGFzay5kYXRhICYmICh0YXNrLmRhdGEgYXMgYW55KS50YXJnZXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWFjcm9UYXNrJzpcbiAgICAgICAgICBzd2l0Y2ggKHRhc2suc291cmNlKSB7XG4gICAgICAgICAgICBjYXNlICdzZXRUaW1lb3V0JzpcbiAgICAgICAgICAgICAgdGFzay5kYXRhICFbJ2hhbmRsZUlkJ10gPSB0aGlzLl9zZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UsIHRhc2suZGF0YSAhWydkZWxheSddICEsXG4gICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgodGFzay5kYXRhIGFzIGFueSlbJ2FyZ3MnXSwgMikpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldEltbWVkaWF0ZSc6XG4gICAgICAgICAgICAgIHRhc2suZGF0YSAhWydoYW5kbGVJZCddID0gdGhpcy5fc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlLCAwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgodGFzay5kYXRhIGFzIGFueSlbJ2FyZ3MnXSwgMSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldEludGVydmFsJzpcbiAgICAgICAgICAgICAgdGFzay5kYXRhICFbJ2hhbmRsZUlkJ10gPSB0aGlzLl9zZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlLCB0YXNrLmRhdGEgIVsnZGVsYXknXSAhLFxuICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoKHRhc2suZGF0YSBhcyBhbnkpWydhcmdzJ10sIDIpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdYTUxIdHRwUmVxdWVzdC5zZW5kJzpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIFhIUnMgZnJvbSB3aXRoaW4gYSBmYWtlIGFzeW5jIHRlc3QuIFJlcXVlc3QgVVJMOiAnICtcbiAgICAgICAgICAgICAgICAgICh0YXNrLmRhdGEgYXMgYW55KVsndXJsJ10pO1xuICAgICAgICAgICAgY2FzZSAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSc6XG4gICAgICAgICAgICBjYXNlICdtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnOlxuICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBhIHJlcXVlc3RBbmltYXRpb25GcmFtZSBieSB1c2luZyBhIHNldFRpbWVvdXQgd2l0aCAxNiBtcy5cbiAgICAgICAgICAgICAgLy8gKDYwIGZyYW1lcyBwZXIgc2Vjb25kKVxuICAgICAgICAgICAgICB0YXNrLmRhdGEgIVsnaGFuZGxlSWQnXSA9IHRoaXMuX3NldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSwgMTYsICh0YXNrLmRhdGEgYXMgYW55KVsnYXJncyddLFxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFja1BlbmRpbmdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIHVzZXIgY2FuIGRlZmluZSB3aGljaCBtYWNyb1Rhc2sgdGhleSB3YW50IHRvIHN1cHBvcnQgYnkgcGFzc2luZ1xuICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2tPcHRpb25zXG4gICAgICAgICAgICAgIGNvbnN0IG1hY3JvVGFza09wdGlvbiA9IHRoaXMuZmluZE1hY3JvVGFza09wdGlvbih0YXNrKTtcbiAgICAgICAgICAgICAgaWYgKG1hY3JvVGFza09wdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0YXNrLmRhdGEgJiYgKHRhc2suZGF0YSBhcyBhbnkpWydhcmdzJ107XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAwO1xuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFja0FyZ3MgPVxuICAgICAgICAgICAgICAgICAgICBtYWNyb1Rhc2tPcHRpb24uY2FsbGJhY2tBcmdzID8gbWFjcm9UYXNrT3B0aW9uLmNhbGxiYWNrQXJncyA6IGFyZ3M7XG4gICAgICAgICAgICAgICAgaWYgKCEhbWFjcm9UYXNrT3B0aW9uLmlzUGVyaW9kaWMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHBlcmlvZGljIG1hY3JvVGFzaywgdXNlIHNldEludGVydmFsIHRvIHNpbXVsYXRlXG4gICAgICAgICAgICAgICAgICB0YXNrLmRhdGEgIVsnaGFuZGxlSWQnXSA9IHRoaXMuX3NldEludGVydmFsKHRhc2suaW52b2tlLCBkZWxheSwgY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICAgICAgICAgIHRhc2suZGF0YSAhLmlzUGVyaW9kaWMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBub3QgcGVyaW9kaWMsIHVzZSBzZXRUaW1lb3V0IHRvIHNpbXVsYXRlXG4gICAgICAgICAgICAgICAgICB0YXNrLmRhdGEgIVsnaGFuZGxlSWQnXSA9IHRoaXMuX3NldFRpbWVvdXQodGFzay5pbnZva2UsIGRlbGF5LCBjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbWFjcm9UYXNrIHNjaGVkdWxlZCBpbiBmYWtlIGFzeW5jIHRlc3Q6ICcgKyB0YXNrLnNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdldmVudFRhc2snOlxuICAgICAgICAgIHRhc2sgPSBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsVGFzayhkZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50OiBab25lLCB0YXJnZXQ6IFpvbmUsIHRhc2s6IFRhc2spOiBhbnkge1xuICAgICAgc3dpdGNoICh0YXNrLnNvdXJjZSkge1xuICAgICAgICBjYXNlICdzZXRUaW1lb3V0JzpcbiAgICAgICAgY2FzZSAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJzpcbiAgICAgICAgY2FzZSAnd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJzpcbiAgICAgICAgY2FzZSAnbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2xlYXJUaW1lb3V0KDxudW1iZXI+dGFzay5kYXRhICFbJ2hhbmRsZUlkJ10pO1xuICAgICAgICBjYXNlICdzZXRJbnRlcnZhbCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NsZWFySW50ZXJ2YWwoPG51bWJlcj50YXNrLmRhdGEgIVsnaGFuZGxlSWQnXSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gdXNlciBjYW4gZGVmaW5lIHdoaWNoIG1hY3JvVGFzayB0aGV5IHdhbnQgdG8gc3VwcG9ydCBieSBwYXNzaW5nXG4gICAgICAgICAgLy8gbWFjcm9UYXNrT3B0aW9uc1xuICAgICAgICAgIGNvbnN0IG1hY3JvVGFza09wdGlvbiA9IHRoaXMuZmluZE1hY3JvVGFza09wdGlvbih0YXNrKTtcbiAgICAgICAgICBpZiAobWFjcm9UYXNrT3B0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVJZDogbnVtYmVyID0gPG51bWJlcj50YXNrLmRhdGEgIVsnaGFuZGxlSWQnXTtcbiAgICAgICAgICAgIHJldHVybiBtYWNyb1Rhc2tPcHRpb24uaXNQZXJpb2RpYyA/IHRoaXMuX2NsZWFySW50ZXJ2YWwoaGFuZGxlSWQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZW91dChoYW5kbGVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldCwgdGFzayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25JbnZva2UoXG4gICAgICAgIGRlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnQ6IFpvbmUsIHRhcmdldDogWm9uZSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBhcHBseVRoaXM6IGFueSxcbiAgICAgICAgYXBwbHlBcmdzPzogYW55W10sIHNvdXJjZT86IHN0cmluZyk6IGFueSB7XG4gICAgICB0cnkge1xuICAgICAgICBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMucGF0Y2hEYXRlKCk7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5pbnZva2UodGFyZ2V0LCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoIXRoaXMucGF0Y2hEYXRlTG9ja2VkKSB7XG4gICAgICAgICAgRmFrZUFzeW5jVGVzdFpvbmVTcGVjLnJlc2V0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZE1hY3JvVGFza09wdGlvbih0YXNrOiBUYXNrKSB7XG4gICAgICBpZiAoIXRoaXMubWFjcm9UYXNrT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYWNyb1Rhc2tPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1hY3JvVGFza09wdGlvbiA9IHRoaXMubWFjcm9UYXNrT3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG1hY3JvVGFza09wdGlvbi5zb3VyY2UgPT09IHRhc2suc291cmNlKSB7XG4gICAgICAgICAgcmV0dXJuIG1hY3JvVGFza09wdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25IYW5kbGVFcnJvcihcbiAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLFxuICAgICAgICBlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICB0aGlzLl9sYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgIHJldHVybiBmYWxzZTsgIC8vIERvbid0IHByb3BhZ2F0ZSBlcnJvciB0byBwYXJlbnQgem9uZS5cbiAgICB9XG4gIH1cblxuICAvLyBFeHBvcnQgdGhlIGNsYXNzIHNvIHRoYXQgbmV3IGluc3RhbmNlcyBjYW4gYmUgY3JlYXRlZCB3aXRoIHByb3BlclxuICAvLyBjb25zdHJ1Y3RvciBwYXJhbXMuXG4gIChab25lIGFzIGFueSlbJ0Zha2VBc3luY1Rlc3Rab25lU3BlYyddID0gRmFrZUFzeW5jVGVzdFpvbmVTcGVjO1xufSkodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbCk7XG4iXX0=