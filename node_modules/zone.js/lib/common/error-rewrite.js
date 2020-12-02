"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis,undefinedVars}
 */
Zone.__load_patch('Error', function (global, Zone, api) {
    /*
     * This code patches Error so that:
     *   - It ignores un-needed stack frames.
     *   - It Shows the associated Zone for reach frame.
     */
    var blacklistedStackFramesSymbol = api.symbol('blacklistedStackFrames');
    var NativeError = global[api.symbol('Error')] = global['Error'];
    // Store the frames which should be removed from the stack frames
    var blackListedStackFrames = {};
    // We must find the frame where Error was created, otherwise we assume we don't understand stack
    var zoneAwareFrame1;
    var zoneAwareFrame2;
    var zoneAwareFrame1WithoutNew;
    var zoneAwareFrame2WithoutNew;
    var zoneAwareFrame3WithoutNew;
    global['Error'] = ZoneAwareError;
    var stackRewrite = 'stackRewrite';
    var blackListedStackFramesPolicy = global['__Zone_Error_BlacklistedStackFrames_policy'] || 'default';
    function buildZoneFrameNames(zoneFrame) {
        var zoneFrameName = { zoneName: zoneFrame.zone.name };
        var result = zoneFrameName;
        while (zoneFrame.parent) {
            zoneFrame = zoneFrame.parent;
            var parentZoneFrameName = { zoneName: zoneFrame.zone.name };
            zoneFrameName.parent = parentZoneFrameName;
            zoneFrameName = parentZoneFrameName;
        }
        return result;
    }
    function buildZoneAwareStackFrames(originalStack, zoneFrame, isZoneFrame) {
        if (isZoneFrame === void 0) { isZoneFrame = true; }
        var frames = originalStack.split('\n');
        var i = 0;
        // Find the first frame
        while (!(frames[i] === zoneAwareFrame1 || frames[i] === zoneAwareFrame2 ||
            frames[i] === zoneAwareFrame1WithoutNew || frames[i] === zoneAwareFrame2WithoutNew ||
            frames[i] === zoneAwareFrame3WithoutNew) &&
            i < frames.length) {
            i++;
        }
        for (; i < frames.length && zoneFrame; i++) {
            var frame = frames[i];
            if (frame.trim()) {
                switch (blackListedStackFrames[frame]) {
                    case 0 /* blackList */:
                        frames.splice(i, 1);
                        i--;
                        break;
                    case 1 /* transition */:
                        if (zoneFrame.parent) {
                            // This is the special frame where zone changed. Print and process it accordingly
                            zoneFrame = zoneFrame.parent;
                        }
                        else {
                            zoneFrame = null;
                        }
                        frames.splice(i, 1);
                        i--;
                        break;
                    default:
                        frames[i] += isZoneFrame ? " [" + zoneFrame.zone.name + "]" :
                            " [" + zoneFrame.zoneName + "]";
                }
            }
        }
        return frames.join('\n');
    }
    /**
     * This is ZoneAwareError which processes the stack frame and cleans up extra frames as well as
     * adds zone information to it.
     */
    function ZoneAwareError() {
        var _this = this;
        // We always have to return native error otherwise the browser console will not work.
        var error = NativeError.apply(this, arguments);
        // Save original stack trace
        var originalStack = error['originalStack'] = error.stack;
        // Process the stack trace and rewrite the frames.
        if (ZoneAwareError[stackRewrite] && originalStack) {
            var zoneFrame = api.currentZoneFrame();
            if (blackListedStackFramesPolicy === 'lazy') {
                // don't handle stack trace now
                error[api.symbol('zoneFrameNames')] = buildZoneFrameNames(zoneFrame);
            }
            else if (blackListedStackFramesPolicy === 'default') {
                try {
                    error.stack = error.zoneAwareStack = buildZoneAwareStackFrames(originalStack, zoneFrame);
                }
                catch (e) {
                    // ignore as some browsers don't allow overriding of stack
                }
            }
        }
        if (this instanceof NativeError && this.constructor != NativeError) {
            // We got called with a `new` operator AND we are subclass of ZoneAwareError
            // in that case we have to copy all of our properties to `this`.
            Object.keys(error).concat('stack', 'message').forEach(function (key) {
                var value = error[key];
                if (value !== undefined) {
                    try {
                        _this[key] = value;
                    }
                    catch (e) {
                        // ignore the assignment in case it is a setter and it throws.
                    }
                }
            });
            return this;
        }
        return error;
    }
    // Copy the prototype so that instanceof operator works as expected
    ZoneAwareError.prototype = NativeError.prototype;
    ZoneAwareError[blacklistedStackFramesSymbol] = blackListedStackFrames;
    ZoneAwareError[stackRewrite] = false;
    var zoneAwareStackSymbol = api.symbol('zoneAwareStack');
    // try to define zoneAwareStack property when blackListed
    // policy is delay
    if (blackListedStackFramesPolicy === 'lazy') {
        Object.defineProperty(ZoneAwareError.prototype, 'zoneAwareStack', {
            configurable: true,
            enumerable: true,
            get: function () {
                if (!this[zoneAwareStackSymbol]) {
                    this[zoneAwareStackSymbol] = buildZoneAwareStackFrames(this.originalStack, this[api.symbol('zoneFrameNames')], false);
                }
                return this[zoneAwareStackSymbol];
            },
            set: function (newStack) {
                this.originalStack = newStack;
                this[zoneAwareStackSymbol] = buildZoneAwareStackFrames(this.originalStack, this[api.symbol('zoneFrameNames')], false);
            }
        });
    }
    // those properties need special handling
    var specialPropertyNames = ['stackTraceLimit', 'captureStackTrace', 'prepareStackTrace'];
    // those properties of NativeError should be set to ZoneAwareError
    var nativeErrorProperties = Object.keys(NativeError);
    if (nativeErrorProperties) {
        nativeErrorProperties.forEach(function (prop) {
            if (specialPropertyNames.filter(function (sp) { return sp === prop; }).length === 0) {
                Object.defineProperty(ZoneAwareError, prop, {
                    get: function () { return NativeError[prop]; },
                    set: function (value) { NativeError[prop] = value; }
                });
            }
        });
    }
    if (NativeError.hasOwnProperty('stackTraceLimit')) {
        // Extend default stack limit as we will be removing few frames.
        NativeError.stackTraceLimit = Math.max(NativeError.stackTraceLimit, 15);
        // make sure that ZoneAwareError has the same property which forwards to NativeError.
        Object.defineProperty(ZoneAwareError, 'stackTraceLimit', {
            get: function () { return NativeError.stackTraceLimit; },
            set: function (value) { return NativeError.stackTraceLimit = value; }
        });
    }
    if (NativeError.hasOwnProperty('captureStackTrace')) {
        Object.defineProperty(ZoneAwareError, 'captureStackTrace', {
            // add named function here because we need to remove this
            // stack frame when prepareStackTrace below
            value: function zoneCaptureStackTrace(targetObject, constructorOpt) {
                NativeError.captureStackTrace(targetObject, constructorOpt);
            }
        });
    }
    var ZONE_CAPTURESTACKTRACE = 'zoneCaptureStackTrace';
    Object.defineProperty(ZoneAwareError, 'prepareStackTrace', {
        get: function () { return NativeError.prepareStackTrace; },
        set: function (value) {
            if (!value || typeof value !== 'function') {
                return NativeError.prepareStackTrace = value;
            }
            return NativeError.prepareStackTrace = function (error, structuredStackTrace) {
                // remove additional stack information from ZoneAwareError.captureStackTrace
                if (structuredStackTrace) {
                    for (var i = 0; i < structuredStackTrace.length; i++) {
                        var st = structuredStackTrace[i];
                        // remove the first function which name is zoneCaptureStackTrace
                        if (st.getFunctionName() === ZONE_CAPTURESTACKTRACE) {
                            structuredStackTrace.splice(i, 1);
                            break;
                        }
                    }
                }
                return value.call(this, error, structuredStackTrace);
            };
        }
    });
    if (blackListedStackFramesPolicy === 'disable') {
        // don't need to run detectZone to populate
        // blacklisted stack frames
        return;
    }
    // Now we need to populate the `blacklistedStackFrames` as well as find the
    // run/runGuarded/runTask frames. This is done by creating a detect zone and then threading
    // the execution through all of the above methods so that we can look at the stack trace and
    // find the frames of interest.
    var detectZone = Zone.current.fork({
        name: 'detect',
        onHandleError: function (parentZD, current, target, error) {
            if (error.originalStack && Error === ZoneAwareError) {
                var frames_1 = error.originalStack.split(/\n/);
                var runFrame = false, runGuardedFrame = false, runTaskFrame = false;
                while (frames_1.length) {
                    var frame = frames_1.shift();
                    // On safari it is possible to have stack frame with no line number.
                    // This check makes sure that we don't filter frames on name only (must have
                    // line number or exact equals to `ZoneAwareError`)
                    if (/:\d+:\d+/.test(frame) || frame === 'ZoneAwareError') {
                        // Get rid of the path so that we don't accidentally find function name in path.
                        // In chrome the separator is `(` and `@` in FF and safari
                        // Chrome: at Zone.run (zone.js:100)
                        // Chrome: at Zone.run (http://localhost:9876/base/build/lib/zone.js:100:24)
                        // FireFox: Zone.prototype.run@http://localhost:9876/base/build/lib/zone.js:101:24
                        // Safari: run@http://localhost:9876/base/build/lib/zone.js:101:24
                        var fnName = frame.split('(')[0].split('@')[0];
                        var frameType = 1 /* transition */;
                        if (fnName.indexOf('ZoneAwareError') !== -1) {
                            if (fnName.indexOf('new ZoneAwareError') !== -1) {
                                zoneAwareFrame1 = frame;
                                zoneAwareFrame2 = frame.replace('new ZoneAwareError', 'new Error.ZoneAwareError');
                            }
                            else {
                                zoneAwareFrame1WithoutNew = frame;
                                zoneAwareFrame2WithoutNew = frame.replace('Error.', '');
                                if (frame.indexOf('Error.ZoneAwareError') === -1) {
                                    zoneAwareFrame3WithoutNew =
                                        frame.replace('ZoneAwareError', 'Error.ZoneAwareError');
                                }
                            }
                            blackListedStackFrames[zoneAwareFrame2] = 0 /* blackList */;
                        }
                        if (fnName.indexOf('runGuarded') !== -1) {
                            runGuardedFrame = true;
                        }
                        else if (fnName.indexOf('runTask') !== -1) {
                            runTaskFrame = true;
                        }
                        else if (fnName.indexOf('run') !== -1) {
                            runFrame = true;
                        }
                        else {
                            frameType = 0 /* blackList */;
                        }
                        blackListedStackFrames[frame] = frameType;
                        // Once we find all of the frames we can stop looking.
                        if (runFrame && runGuardedFrame && runTaskFrame) {
                            ZoneAwareError[stackRewrite] = true;
                            break;
                        }
                    }
                }
            }
            return false;
        }
    });
    // carefully constructor a stack frame which contains all of the frames of interest which
    // need to be detected and blacklisted.
    var childDetectZone = detectZone.fork({
        name: 'child',
        onScheduleTask: function (delegate, curr, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, curr, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, curr, target, task) {
            return delegate.cancelTask(target, task);
        },
        onInvoke: function (delegate, curr, target, callback, applyThis, applyArgs, source) {
            return delegate.invoke(target, callback, applyThis, applyArgs, source);
        }
    });
    // we need to detect all zone related frames, it will
    // exceed default stackTraceLimit, so we set it to
    // larger number here, and restore it after detect finish.
    // We cast through any so we don't need to depend on nodejs typings.
    var originalStackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 100;
    // we schedule event/micro/macro task, and invoke them
    // when onSchedule, so we can get all stack traces for
    // all kinds of tasks with one error thrown.
    childDetectZone.run(function () {
        childDetectZone.runGuarded(function () {
            var fakeTransitionTo = function () { };
            childDetectZone.scheduleEventTask(blacklistedStackFramesSymbol, function () {
                childDetectZone.scheduleMacroTask(blacklistedStackFramesSymbol, function () {
                    childDetectZone.scheduleMicroTask(blacklistedStackFramesSymbol, function () { throw new Error(); }, undefined, function (t) {
                        t._transitionTo = fakeTransitionTo;
                        t.invoke();
                    });
                    childDetectZone.scheduleMicroTask(blacklistedStackFramesSymbol, function () { throw Error(); }, undefined, function (t) {
                        t._transitionTo = fakeTransitionTo;
                        t.invoke();
                    });
                }, undefined, function (t) {
                    t._transitionTo = fakeTransitionTo;
                    t.invoke();
                }, function () { });
            }, undefined, function (t) {
                t._transitionTo = fakeTransitionTo;
                t.invoke();
            }, function () { });
        });
    });
    Error.stackTraceLimit = originalStackTraceLimit;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmV3cml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2NvbW1vbi9lcnJvci1yZXdyaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7QUFpQkgsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQ3hFOzs7O09BSUc7SUFTSCxJQUFNLDRCQUE0QixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxRSxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxpRUFBaUU7SUFDakUsSUFBTSxzQkFBc0IsR0FBaUMsRUFBRSxDQUFDO0lBQ2hFLGdHQUFnRztJQUNoRyxJQUFJLGVBQXVCLENBQUM7SUFDNUIsSUFBSSxlQUF1QixDQUFDO0lBQzVCLElBQUkseUJBQWlDLENBQUM7SUFDdEMsSUFBSSx5QkFBaUMsQ0FBQztJQUN0QyxJQUFJLHlCQUFpQyxDQUFDO0lBRXRDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDakMsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDO0lBR3BDLElBQU0sNEJBQTRCLEdBQzlCLE1BQU0sQ0FBQyw0Q0FBNEMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQU90RSxTQUFTLG1CQUFtQixDQUFDLFNBQXFCO1FBQ2hELElBQUksYUFBYSxHQUFrQixFQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQ25FLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUMzQixPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsU0FB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ZUFBZSxDQUFDLGlCQUFpQixDQUM3Qiw0QkFBNEIsRUFDNUI7b0JBQ0UsZUFBZSxDQUFDLGlCQUFpQixDQUM3Qiw0QkFBNEIsRUFBRSxjQUFRLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQ3JFLFVBQUMsQ0FBTzt3QkFDTCxDQUFTLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO3dCQUM1QyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsZUFBZSxDQUFDLGlCQUFpQixDQUM3Qiw0QkFBNEIsRUFBRSxjQUFRLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUNqRSxVQUFDLENBQU87d0JBQ0wsQ0FBUyxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQzt3QkFDNUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUNULENBQUMsRUFDRCxTQUFTLEVBQ1QsVUFBQyxDQUFDO29CQUNDLENBQVMsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDYixDQUFDLEVBQ0QsY0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQ0QsU0FBUyxFQUNULFVBQUMsQ0FBQztnQkFDQyxDQUFTLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO2dCQUM1QyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLEVBQ0QsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUYsS0FBYSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztBQUMzRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHtnbG9iYWxUaGlzLHVuZGVmaW5lZFZhcnN9XG4gKi9cblxuLyoqXG4gKiBFeHRlbmQgdGhlIEVycm9yIHdpdGggYWRkaXRpb25hbCBmaWVsZHMgZm9yIHJld3JpdHRlbiBzdGFjayBmcmFtZXNcbiAqL1xuaW50ZXJmYWNlIEVycm9yIHtcbiAgLyoqXG4gICAqIFN0YWNrIHRyYWNlIHdoZXJlIGV4dHJhIGZyYW1lcyBoYXZlIGJlZW4gcmVtb3ZlZCBhbmQgem9uZSBuYW1lcyBhZGRlZC5cbiAgICovXG4gIHpvbmVBd2FyZVN0YWNrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBzdGFjayB0cmFjZSB3aXRoIG5vIG1vZGlmaWNhdGlvbnNcbiAgICovXG4gIG9yaWdpbmFsU3RhY2s/OiBzdHJpbmc7XG59XG5cblpvbmUuX19sb2FkX3BhdGNoKCdFcnJvcicsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIC8qXG4gICAqIFRoaXMgY29kZSBwYXRjaGVzIEVycm9yIHNvIHRoYXQ6XG4gICAqICAgLSBJdCBpZ25vcmVzIHVuLW5lZWRlZCBzdGFjayBmcmFtZXMuXG4gICAqICAgLSBJdCBTaG93cyB0aGUgYXNzb2NpYXRlZCBab25lIGZvciByZWFjaCBmcmFtZS5cbiAgICovXG5cbiAgY29uc3QgZW51bSBGcmFtZVR5cGUge1xuICAgIC8vLyBTa2lwIHRoaXMgZnJhbWUgd2hlbiBwcmludGluZyBvdXQgc3RhY2tcbiAgICBibGFja0xpc3QsXG4gICAgLy8vIFRoaXMgZnJhbWUgbWFya3Mgem9uZSB0cmFuc2l0aW9uXG4gICAgdHJhbnNpdGlvblxuICB9XG5cbiAgY29uc3QgYmxhY2tsaXN0ZWRTdGFja0ZyYW1lc1N5bWJvbCA9IGFwaS5zeW1ib2woJ2JsYWNrbGlzdGVkU3RhY2tGcmFtZXMnKTtcbiAgY29uc3QgTmF0aXZlRXJyb3IgPSBnbG9iYWxbYXBpLnN5bWJvbCgnRXJyb3InKV0gPSBnbG9iYWxbJ0Vycm9yJ107XG4gIC8vIFN0b3JlIHRoZSBmcmFtZXMgd2hpY2ggc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSB0aGUgc3RhY2sgZnJhbWVzXG4gIGNvbnN0IGJsYWNrTGlzdGVkU3RhY2tGcmFtZXM6IHtbZnJhbWU6IHN0cmluZ106IEZyYW1lVHlwZX0gPSB7fTtcbiAgLy8gV2UgbXVzdCBmaW5kIHRoZSBmcmFtZSB3aGVyZSBFcnJvciB3YXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHdlIGFzc3VtZSB3ZSBkb24ndCB1bmRlcnN0YW5kIHN0YWNrXG4gIGxldCB6b25lQXdhcmVGcmFtZTE6IHN0cmluZztcbiAgbGV0IHpvbmVBd2FyZUZyYW1lMjogc3RyaW5nO1xuICBsZXQgem9uZUF3YXJlRnJhbWUxV2l0aG91dE5ldzogc3RyaW5nO1xuICBsZXQgem9uZUF3YXJlRnJhbWUyV2l0aG91dE5ldzogc3RyaW5nO1xuICBsZXQgem9uZUF3YXJlRnJhbWUzV2l0aG91dE5ldzogc3RyaW5nO1xuXG4gIGdsb2JhbFsnRXJyb3InXSA9IFpvbmVBd2FyZUVycm9yO1xuICBjb25zdCBzdGFja1Jld3JpdGUgPSAnc3RhY2tSZXdyaXRlJztcblxuICB0eXBlIEJsYWNrTGlzdGVkU3RhY2tGcmFtZXNQb2xpY3kgPSAnZGVmYXVsdCcgfCAnZGlzYWJsZScgfCAnbGF6eSc7XG4gIGNvbnN0IGJsYWNrTGlzdGVkU3RhY2tGcmFtZXNQb2xpY3k6IEJsYWNrTGlzdGVkU3RhY2tGcmFtZXNQb2xpY3kgPVxuICAgICAgZ2xvYmFsWydfX1pvbmVfRXJyb3JfQmxhY2tsaXN0ZWRTdGFja0ZyYW1lc19wb2xpY3knXSB8fCAnZGVmYXVsdCc7XG5cbiAgaW50ZXJmYWNlIFpvbmVGcmFtZU5hbWUge1xuICAgIHpvbmVOYW1lOiBzdHJpbmc7XG4gICAgcGFyZW50PzogWm9uZUZyYW1lTmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkWm9uZUZyYW1lTmFtZXMoem9uZUZyYW1lOiBfWm9uZUZyYW1lKSB7XG4gICAgbGV0IHpvbmVGcmFtZU5hbWU6IFpvbmVGcmFtZU5hbWUgPSB7em9uZU5hbWU6IHpvbmVGcmFtZS56b25lLm5hbWV9O1xuICAgIGxldCByZXN1bHQgPSB6b25lRnJhbWVOYW1lO1xuICAgIHdoaWxlICh6b25lRnJhbWUucGFyZW50KSB7XG4gICAgICB6b25lRnJhbWUgPSB6b25lRnJhbWUucGFyZW50O1xuICAgICAgY29uc3QgcGFyZW50Wm9uZUZyYW1lTmFtZSA9IHt6b25lTmFtZTogem9uZUZyYW1lLnpvbmUubmFtZX07XG4gICAgICB6b25lRnJhbWVOYW1lLnBhcmVudCA9IHBhcmVudFpvbmVGcmFtZU5hbWU7XG4gICAgICB6b25lRnJhbWVOYW1lID0gcGFyZW50Wm9uZUZyYW1lTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkWm9uZUF3YXJlU3RhY2tGcmFtZXMoXG4gICAgICBvcmlnaW5hbFN0YWNrOiBzdHJpbmcsIHpvbmVGcmFtZTogX1pvbmVGcmFtZSB8IFpvbmVGcmFtZU5hbWUgfCBudWxsLCBpc1pvbmVGcmFtZSA9IHRydWUpIHtcbiAgICBsZXQgZnJhbWVzOiBzdHJpbmdbXSA9IG9yaWdpbmFsU3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIGxldCBpID0gMDtcbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBmcmFtZVxuICAgIHdoaWxlICghKGZyYW1lc1tpXSA9PT0gem9uZUF3YXJlRnJhbWUxIHx8IGZyYW1lc1tpXSA9PT0gem9uZUF3YXJlRnJhbWUyIHx8XG4gICAgICAgICAgICAgZnJhbWVzW2ldID09PSB6b25lQXdhcmVGcmFtZTFXaXRob3V0TmV3IHx8IGZyYW1lc1tpXSA9PT0gem9uZUF3YXJlRnJhbWUyV2l0aG91dE5ldyB8fFxuICAgICAgICAgICAgIGZyYW1lc1tpXSA9PT0gem9uZUF3YXJlRnJhbWUzV2l0aG91dE5ldykgJiZcbiAgICAgICAgICAgaSA8IGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgZm9yICg7IGkgPCBmcmFtZXMubGVuZ3RoICYmIHpvbmVGcmFtZTsgaSsrKSB7XG4gICAgICBsZXQgZnJhbWUgPSBmcmFtZXNbaV07XG4gICAgICBpZiAoZnJhbWUudHJpbSgpKSB7XG4gICAgICAgIHN3aXRjaCAoYmxhY2tMaXN0ZWRTdGFja0ZyYW1lc1tmcmFtZV0pIHtcbiAgICAgICAgICBjYXNlIEZyYW1lVHlwZS5ibGFja0xpc3Q6XG4gICAgICAgICAgICBmcmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBGcmFtZVR5cGUudHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGlmICh6b25lRnJhbWUucGFyZW50KSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIHNwZWNpYWwgZnJhbWUgd2hlcmUgem9uZSBjaGFuZ2VkLiBQcmludCBhbmQgcHJvY2VzcyBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICB6b25lRnJhbWUgPSB6b25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgem9uZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZnJhbWVzW2ldICs9IGlzWm9uZUZyYW1lID8gYCBbJHsoem9uZUZyYW1lIGFzIF9ab25lRnJhbWUpLnpvbmUubmFtZX1dYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIFskeyh6b25lRnJhbWUgYXMgWm9uZUZyYW1lTmFtZSkuem9uZU5hbWV9XWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lcy5qb2luKCdcXG4nKTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBpcyBab25lQXdhcmVFcnJvciB3aGljaCBwcm9jZXNzZXMgdGhlIHN0YWNrIGZyYW1lIGFuZCBjbGVhbnMgdXAgZXh0cmEgZnJhbWVzIGFzIHdlbGwgYXNcbiAgICogYWRkcyB6b25lIGluZm9ybWF0aW9uIHRvIGl0LlxuICAgKi9cbiAgZnVuY3Rpb24gWm9uZUF3YXJlRXJyb3IodGhpczogdW5rbm93biB8IHR5cGVvZiBOYXRpdmVFcnJvcik6IEVycm9yIHtcbiAgICAvLyBXZSBhbHdheXMgaGF2ZSB0byByZXR1cm4gbmF0aXZlIGVycm9yIG90aGVyd2lzZSB0aGUgYnJvd3NlciBjb25zb2xlIHdpbGwgbm90IHdvcmsuXG4gICAgbGV0IGVycm9yOiBFcnJvciA9IE5hdGl2ZUVycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gU2F2ZSBvcmlnaW5hbCBzdGFjayB0cmFjZVxuICAgIGNvbnN0IG9yaWdpbmFsU3RhY2sgPSAoZXJyb3IgYXMgYW55KVsnb3JpZ2luYWxTdGFjayddID0gZXJyb3Iuc3RhY2s7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBzdGFjayB0cmFjZSBhbmQgcmV3cml0ZSB0aGUgZnJhbWVzLlxuICAgIGlmICgoWm9uZUF3YXJlRXJyb3IgYXMgYW55KVtzdGFja1Jld3JpdGVdICYmIG9yaWdpbmFsU3RhY2spIHtcbiAgICAgIGxldCB6b25lRnJhbWUgPSBhcGkuY3VycmVudFpvbmVGcmFtZSgpO1xuICAgICAgaWYgKGJsYWNrTGlzdGVkU3RhY2tGcmFtZXNQb2xpY3kgPT09ICdsYXp5Jykge1xuICAgICAgICAvLyBkb24ndCBoYW5kbGUgc3RhY2sgdHJhY2Ugbm93XG4gICAgICAgIChlcnJvciBhcyBhbnkpW2FwaS5zeW1ib2woJ3pvbmVGcmFtZU5hbWVzJyldID0gYnVpbGRab25lRnJhbWVOYW1lcyh6b25lRnJhbWUpO1xuICAgICAgfSBlbHNlIGlmIChibGFja0xpc3RlZFN0YWNrRnJhbWVzUG9saWN5ID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlcnJvci5zdGFjayA9IGVycm9yLnpvbmVBd2FyZVN0YWNrID0gYnVpbGRab25lQXdhcmVTdGFja0ZyYW1lcyhvcmlnaW5hbFN0YWNrLCB6b25lRnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlIGFzIHNvbWUgYnJvd3NlcnMgZG9uJ3QgYWxsb3cgb3ZlcnJpZGluZyBvZiBzdGFja1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYXRpdmVFcnJvciAmJiB0aGlzLmNvbnN0cnVjdG9yICE9IE5hdGl2ZUVycm9yKSB7XG4gICAgICAvLyBXZSBnb3QgY2FsbGVkIHdpdGggYSBgbmV3YCBvcGVyYXRvciBBTkQgd2UgYXJlIHN1YmNsYXNzIG9mIFpvbmVBd2FyZUVycm9yXG4gICAgICAvLyBpbiB0aGF0IGNhc2Ugd2UgaGF2ZSB0byBjb3B5IGFsbCBvZiBvdXIgcHJvcGVydGllcyB0byBgdGhpc2AuXG4gICAgICBPYmplY3Qua2V5cyhlcnJvcikuY29uY2F0KCdzdGFjaycsICdtZXNzYWdlJykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKGVycm9yIGFzIGFueSlba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBhc3NpZ25tZW50IGluIGNhc2UgaXQgaXMgYSBzZXR0ZXIgYW5kIGl0IHRocm93cy5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIC8vIENvcHkgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGluc3RhbmNlb2Ygb3BlcmF0b3Igd29ya3MgYXMgZXhwZWN0ZWRcbiAgWm9uZUF3YXJlRXJyb3IucHJvdG90eXBlID0gTmF0aXZlRXJyb3IucHJvdG90eXBlO1xuICAoWm9uZUF3YXJlRXJyb3IgYXMgYW55KVtibGFja2xpc3RlZFN0YWNrRnJhbWVzU3ltYm9sXSA9IGJsYWNrTGlzdGVkU3RhY2tGcmFtZXM7XG4gIChab25lQXdhcmVFcnJvciBhcyBhbnkpW3N0YWNrUmV3cml0ZV0gPSBmYWxzZTtcblxuICBjb25zdCB6b25lQXdhcmVTdGFja1N5bWJvbCA9IGFwaS5zeW1ib2woJ3pvbmVBd2FyZVN0YWNrJyk7XG5cbiAgLy8gdHJ5IHRvIGRlZmluZSB6b25lQXdhcmVTdGFjayBwcm9wZXJ0eSB3aGVuIGJsYWNrTGlzdGVkXG4gIC8vIHBvbGljeSBpcyBkZWxheVxuICBpZiAoYmxhY2tMaXN0ZWRTdGFja0ZyYW1lc1BvbGljeSA9PT0gJ2xhenknKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZUVycm9yLnByb3RvdHlwZSwgJ3pvbmVBd2FyZVN0YWNrJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpc1t6b25lQXdhcmVTdGFja1N5bWJvbF0pIHtcbiAgICAgICAgICB0aGlzW3pvbmVBd2FyZVN0YWNrU3ltYm9sXSA9IGJ1aWxkWm9uZUF3YXJlU3RhY2tGcmFtZXMoXG4gICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTdGFjaywgdGhpc1thcGkuc3ltYm9sKCd6b25lRnJhbWVOYW1lcycpXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzW3pvbmVBd2FyZVN0YWNrU3ltYm9sXTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKG5ld1N0YWNrOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YWNrID0gbmV3U3RhY2s7XG4gICAgICAgIHRoaXNbem9uZUF3YXJlU3RhY2tTeW1ib2xdID0gYnVpbGRab25lQXdhcmVTdGFja0ZyYW1lcyhcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTdGFjaywgdGhpc1thcGkuc3ltYm9sKCd6b25lRnJhbWVOYW1lcycpXSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdGhvc2UgcHJvcGVydGllcyBuZWVkIHNwZWNpYWwgaGFuZGxpbmdcbiAgY29uc3Qgc3BlY2lhbFByb3BlcnR5TmFtZXMgPSBbJ3N0YWNrVHJhY2VMaW1pdCcsICdjYXB0dXJlU3RhY2tUcmFjZScsICdwcmVwYXJlU3RhY2tUcmFjZSddO1xuICAvLyB0aG9zZSBwcm9wZXJ0aWVzIG9mIE5hdGl2ZUVycm9yIHNob3VsZCBiZSBzZXQgdG8gWm9uZUF3YXJlRXJyb3JcbiAgY29uc3QgbmF0aXZlRXJyb3JQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoTmF0aXZlRXJyb3IpO1xuICBpZiAobmF0aXZlRXJyb3JQcm9wZXJ0aWVzKSB7XG4gICAgbmF0aXZlRXJyb3JQcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBpZiAoc3BlY2lhbFByb3BlcnR5TmFtZXMuZmlsdGVyKHNwID0+IHNwID09PSBwcm9wKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZUVycm9yLCBwcm9wLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIE5hdGl2ZUVycm9yW3Byb3BdOyB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgTmF0aXZlRXJyb3JbcHJvcF0gPSB2YWx1ZTsgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmVFcnJvci5oYXNPd25Qcm9wZXJ0eSgnc3RhY2tUcmFjZUxpbWl0JykpIHtcbiAgICAvLyBFeHRlbmQgZGVmYXVsdCBzdGFjayBsaW1pdCBhcyB3ZSB3aWxsIGJlIHJlbW92aW5nIGZldyBmcmFtZXMuXG4gICAgTmF0aXZlRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gTWF0aC5tYXgoTmF0aXZlRXJyb3Iuc3RhY2tUcmFjZUxpbWl0LCAxNSk7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhhdCBab25lQXdhcmVFcnJvciBoYXMgdGhlIHNhbWUgcHJvcGVydHkgd2hpY2ggZm9yd2FyZHMgdG8gTmF0aXZlRXJyb3IuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZUVycm9yLCAnc3RhY2tUcmFjZUxpbWl0Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIE5hdGl2ZUVycm9yLnN0YWNrVHJhY2VMaW1pdDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIE5hdGl2ZUVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IHZhbHVlOyB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoTmF0aXZlRXJyb3IuaGFzT3duUHJvcGVydHkoJ2NhcHR1cmVTdGFja1RyYWNlJykpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlRXJyb3IsICdjYXB0dXJlU3RhY2tUcmFjZScsIHtcbiAgICAgIC8vIGFkZCBuYW1lZCBmdW5jdGlvbiBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0byByZW1vdmUgdGhpc1xuICAgICAgLy8gc3RhY2sgZnJhbWUgd2hlbiBwcmVwYXJlU3RhY2tUcmFjZSBiZWxvd1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHpvbmVDYXB0dXJlU3RhY2tUcmFjZSh0YXJnZXRPYmplY3Q6IE9iamVjdCwgY29uc3RydWN0b3JPcHQ/OiBGdW5jdGlvbikge1xuICAgICAgICBOYXRpdmVFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0YXJnZXRPYmplY3QsIGNvbnN0cnVjdG9yT3B0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFpPTkVfQ0FQVFVSRVNUQUNLVFJBQ0UgPSAnem9uZUNhcHR1cmVTdGFja1RyYWNlJztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZUVycm9yLCAncHJlcGFyZVN0YWNrVHJhY2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIE5hdGl2ZUVycm9yLnByZXBhcmVTdGFja1RyYWNlOyB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBOYXRpdmVFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE5hdGl2ZUVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgIGVycm9yOiBFcnJvciwgc3RydWN0dXJlZFN0YWNrVHJhY2U6IHtnZXRGdW5jdGlvbk5hbWU6IEZ1bmN0aW9ufVtdKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhZGRpdGlvbmFsIHN0YWNrIGluZm9ybWF0aW9uIGZyb20gWm9uZUF3YXJlRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2VcbiAgICAgICAgaWYgKHN0cnVjdHVyZWRTdGFja1RyYWNlKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJ1Y3R1cmVkU3RhY2tUcmFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3QgPSBzdHJ1Y3R1cmVkU3RhY2tUcmFjZVtpXTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZmlyc3QgZnVuY3Rpb24gd2hpY2ggbmFtZSBpcyB6b25lQ2FwdHVyZVN0YWNrVHJhY2VcbiAgICAgICAgICAgIGlmIChzdC5nZXRGdW5jdGlvbk5hbWUoKSA9PT0gWk9ORV9DQVBUVVJFU1RBQ0tUUkFDRSkge1xuICAgICAgICAgICAgICBzdHJ1Y3R1cmVkU3RhY2tUcmFjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLCBlcnJvciwgc3RydWN0dXJlZFN0YWNrVHJhY2UpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChibGFja0xpc3RlZFN0YWNrRnJhbWVzUG9saWN5ID09PSAnZGlzYWJsZScpIHtcbiAgICAvLyBkb24ndCBuZWVkIHRvIHJ1biBkZXRlY3Rab25lIHRvIHBvcHVsYXRlXG4gICAgLy8gYmxhY2tsaXN0ZWQgc3RhY2sgZnJhbWVzXG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE5vdyB3ZSBuZWVkIHRvIHBvcHVsYXRlIHRoZSBgYmxhY2tsaXN0ZWRTdGFja0ZyYW1lc2AgYXMgd2VsbCBhcyBmaW5kIHRoZVxuICAvLyBydW4vcnVuR3VhcmRlZC9ydW5UYXNrIGZyYW1lcy4gVGhpcyBpcyBkb25lIGJ5IGNyZWF0aW5nIGEgZGV0ZWN0IHpvbmUgYW5kIHRoZW4gdGhyZWFkaW5nXG4gIC8vIHRoZSBleGVjdXRpb24gdGhyb3VnaCBhbGwgb2YgdGhlIGFib3ZlIG1ldGhvZHMgc28gdGhhdCB3ZSBjYW4gbG9vayBhdCB0aGUgc3RhY2sgdHJhY2UgYW5kXG4gIC8vIGZpbmQgdGhlIGZyYW1lcyBvZiBpbnRlcmVzdC5cblxuICBsZXQgZGV0ZWN0Wm9uZTogWm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICBuYW1lOiAnZGV0ZWN0JyxcbiAgICBvbkhhbmRsZUVycm9yOiBmdW5jdGlvbihcbiAgICAgICAgcGFyZW50WkQ6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCBlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoZXJyb3Iub3JpZ2luYWxTdGFjayAmJiBFcnJvciA9PT0gWm9uZUF3YXJlRXJyb3IpIHtcbiAgICAgICAgbGV0IGZyYW1lcyA9IGVycm9yLm9yaWdpbmFsU3RhY2suc3BsaXQoL1xcbi8pO1xuICAgICAgICBsZXQgcnVuRnJhbWUgPSBmYWxzZSwgcnVuR3VhcmRlZEZyYW1lID0gZmFsc2UsIHJ1blRhc2tGcmFtZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5zaGlmdCgpO1xuICAgICAgICAgIC8vIE9uIHNhZmFyaSBpdCBpcyBwb3NzaWJsZSB0byBoYXZlIHN0YWNrIGZyYW1lIHdpdGggbm8gbGluZSBudW1iZXIuXG4gICAgICAgICAgLy8gVGhpcyBjaGVjayBtYWtlcyBzdXJlIHRoYXQgd2UgZG9uJ3QgZmlsdGVyIGZyYW1lcyBvbiBuYW1lIG9ubHkgKG11c3QgaGF2ZVxuICAgICAgICAgIC8vIGxpbmUgbnVtYmVyIG9yIGV4YWN0IGVxdWFscyB0byBgWm9uZUF3YXJlRXJyb3JgKVxuICAgICAgICAgIGlmICgvOlxcZCs6XFxkKy8udGVzdChmcmFtZSkgfHwgZnJhbWUgPT09ICdab25lQXdhcmVFcnJvcicpIHtcbiAgICAgICAgICAgIC8vIEdldCByaWQgb2YgdGhlIHBhdGggc28gdGhhdCB3ZSBkb24ndCBhY2NpZGVudGFsbHkgZmluZCBmdW5jdGlvbiBuYW1lIGluIHBhdGguXG4gICAgICAgICAgICAvLyBJbiBjaHJvbWUgdGhlIHNlcGFyYXRvciBpcyBgKGAgYW5kIGBAYCBpbiBGRiBhbmQgc2FmYXJpXG4gICAgICAgICAgICAvLyBDaHJvbWU6IGF0IFpvbmUucnVuICh6b25lLmpzOjEwMClcbiAgICAgICAgICAgIC8vIENocm9tZTogYXQgWm9uZS5ydW4gKGh0dHA6Ly9sb2NhbGhvc3Q6OTg3Ni9iYXNlL2J1aWxkL2xpYi96b25lLmpzOjEwMDoyNClcbiAgICAgICAgICAgIC8vIEZpcmVGb3g6IFpvbmUucHJvdG90eXBlLnJ1bkBodHRwOi8vbG9jYWxob3N0Ojk4NzYvYmFzZS9idWlsZC9saWIvem9uZS5qczoxMDE6MjRcbiAgICAgICAgICAgIC8vIFNhZmFyaTogcnVuQGh0dHA6Ly9sb2NhbGhvc3Q6OTg3Ni9iYXNlL2J1aWxkL2xpYi96b25lLmpzOjEwMToyNFxuICAgICAgICAgICAgbGV0IGZuTmFtZTogc3RyaW5nID0gZnJhbWUuc3BsaXQoJygnKVswXS5zcGxpdCgnQCcpWzBdO1xuICAgICAgICAgICAgbGV0IGZyYW1lVHlwZSA9IEZyYW1lVHlwZS50cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGZuTmFtZS5pbmRleE9mKCdab25lQXdhcmVFcnJvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpZiAoZm5OYW1lLmluZGV4T2YoJ25ldyBab25lQXdhcmVFcnJvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHpvbmVBd2FyZUZyYW1lMSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgIHpvbmVBd2FyZUZyYW1lMiA9IGZyYW1lLnJlcGxhY2UoJ25ldyBab25lQXdhcmVFcnJvcicsICduZXcgRXJyb3IuWm9uZUF3YXJlRXJyb3InKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB6b25lQXdhcmVGcmFtZTFXaXRob3V0TmV3ID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgem9uZUF3YXJlRnJhbWUyV2l0aG91dE5ldyA9IGZyYW1lLnJlcGxhY2UoJ0Vycm9yLicsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuaW5kZXhPZignRXJyb3IuWm9uZUF3YXJlRXJyb3InKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHpvbmVBd2FyZUZyYW1lM1dpdGhvdXROZXcgPVxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLnJlcGxhY2UoJ1pvbmVBd2FyZUVycm9yJywgJ0Vycm9yLlpvbmVBd2FyZUVycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJsYWNrTGlzdGVkU3RhY2tGcmFtZXNbem9uZUF3YXJlRnJhbWUyXSA9IEZyYW1lVHlwZS5ibGFja0xpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm5OYW1lLmluZGV4T2YoJ3J1bkd1YXJkZWQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgcnVuR3VhcmRlZEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm5OYW1lLmluZGV4T2YoJ3J1blRhc2snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgcnVuVGFza0ZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm5OYW1lLmluZGV4T2YoJ3J1bicpICE9PSAtMSkge1xuICAgICAgICAgICAgICBydW5GcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmcmFtZVR5cGUgPSBGcmFtZVR5cGUuYmxhY2tMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxhY2tMaXN0ZWRTdGFja0ZyYW1lc1tmcmFtZV0gPSBmcmFtZVR5cGU7XG4gICAgICAgICAgICAvLyBPbmNlIHdlIGZpbmQgYWxsIG9mIHRoZSBmcmFtZXMgd2UgY2FuIHN0b3AgbG9va2luZy5cbiAgICAgICAgICAgIGlmIChydW5GcmFtZSAmJiBydW5HdWFyZGVkRnJhbWUgJiYgcnVuVGFza0ZyYW1lKSB7XG4gICAgICAgICAgICAgIChab25lQXdhcmVFcnJvciBhcyBhbnkpW3N0YWNrUmV3cml0ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pIGFzIFpvbmU7XG4gIC8vIGNhcmVmdWxseSBjb25zdHJ1Y3RvciBhIHN0YWNrIGZyYW1lIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgZnJhbWVzIG9mIGludGVyZXN0IHdoaWNoXG4gIC8vIG5lZWQgdG8gYmUgZGV0ZWN0ZWQgYW5kIGJsYWNrbGlzdGVkLlxuXG4gIGNvbnN0IGNoaWxkRGV0ZWN0Wm9uZSA9IGRldGVjdFpvbmUuZm9yayh7XG4gICAgbmFtZTogJ2NoaWxkJyxcbiAgICBvblNjaGVkdWxlVGFzazogZnVuY3Rpb24oZGVsZWdhdGUsIGN1cnIsIHRhcmdldCwgdGFzaykge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgIH0sXG4gICAgb25JbnZva2VUYXNrOiBmdW5jdGlvbihkZWxlZ2F0ZSwgY3VyciwgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgcmV0dXJuIGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgfSxcbiAgICBvbkNhbmNlbFRhc2s6IGZ1bmN0aW9uKGRlbGVnYXRlLCBjdXJyLCB0YXJnZXQsIHRhc2spIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldCwgdGFzayk7XG4gICAgfSxcbiAgICBvbkludm9rZTogZnVuY3Rpb24oZGVsZWdhdGUsIGN1cnIsIHRhcmdldCwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5pbnZva2UodGFyZ2V0LCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyB3ZSBuZWVkIHRvIGRldGVjdCBhbGwgem9uZSByZWxhdGVkIGZyYW1lcywgaXQgd2lsbFxuICAvLyBleGNlZWQgZGVmYXVsdCBzdGFja1RyYWNlTGltaXQsIHNvIHdlIHNldCBpdCB0b1xuICAvLyBsYXJnZXIgbnVtYmVyIGhlcmUsIGFuZCByZXN0b3JlIGl0IGFmdGVyIGRldGVjdCBmaW5pc2guXG4gIC8vIFdlIGNhc3QgdGhyb3VnaCBhbnkgc28gd2UgZG9uJ3QgbmVlZCB0byBkZXBlbmQgb24gbm9kZWpzIHR5cGluZ3MuXG4gIGNvbnN0IG9yaWdpbmFsU3RhY2tUcmFjZUxpbWl0ID0gKEVycm9yIGFzIGFueSkuc3RhY2tUcmFjZUxpbWl0O1xuICAoRXJyb3IgYXMgYW55KS5zdGFja1RyYWNlTGltaXQgPSAxMDA7XG4gIC8vIHdlIHNjaGVkdWxlIGV2ZW50L21pY3JvL21hY3JvIHRhc2ssIGFuZCBpbnZva2UgdGhlbVxuICAvLyB3aGVuIG9uU2NoZWR1bGUsIHNvIHdlIGNhbiBnZXQgYWxsIHN0YWNrIHRyYWNlcyBmb3JcbiAgLy8gYWxsIGtpbmRzIG9mIHRhc2tzIHdpdGggb25lIGVycm9yIHRocm93bi5cbiAgY2hpbGREZXRlY3Rab25lLnJ1bigoKSA9PiB7XG4gICAgY2hpbGREZXRlY3Rab25lLnJ1bkd1YXJkZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZmFrZVRyYW5zaXRpb25UbyA9ICgpID0+IHt9O1xuICAgICAgY2hpbGREZXRlY3Rab25lLnNjaGVkdWxlRXZlbnRUYXNrKFxuICAgICAgICAgIGJsYWNrbGlzdGVkU3RhY2tGcmFtZXNTeW1ib2wsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY2hpbGREZXRlY3Rab25lLnNjaGVkdWxlTWFjcm9UYXNrKFxuICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkU3RhY2tGcmFtZXNTeW1ib2wsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY2hpbGREZXRlY3Rab25lLnNjaGVkdWxlTWljcm9UYXNrKFxuICAgICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkU3RhY2tGcmFtZXNTeW1ib2wsICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKCk7IH0sIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAodDogVGFzaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHQgYXMgYW55KS5fdHJhbnNpdGlvblRvID0gZmFrZVRyYW5zaXRpb25UbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaW52b2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjaGlsZERldGVjdFpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soXG4gICAgICAgICAgICAgICAgICAgICAgYmxhY2tsaXN0ZWRTdGFja0ZyYW1lc1N5bWJvbCwgKCkgPT4geyB0aHJvdyBFcnJvcigpOyB9LCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgKHQ6IFRhc2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0IGFzIGFueSkuX3RyYW5zaXRpb25UbyA9IGZha2VUcmFuc2l0aW9uVG87XG4gICAgICAgICAgICAgICAgICAgICAgICB0Lmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAodCBhcyBhbnkpLl90cmFuc2l0aW9uVG8gPSBmYWtlVHJhbnNpdGlvblRvO1xuICAgICAgICAgICAgICAgICAgdC5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHt9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAodCkgPT4ge1xuICAgICAgICAgICAgKHQgYXMgYW55KS5fdHJhbnNpdGlvblRvID0gZmFrZVRyYW5zaXRpb25UbztcbiAgICAgICAgICAgIHQuaW52b2tlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7fSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIChFcnJvciBhcyBhbnkpLnN0YWNrVHJhY2VMaW1pdCA9IG9yaWdpbmFsU3RhY2tUcmFjZUxpbWl0O1xufSk7XG4iXX0=