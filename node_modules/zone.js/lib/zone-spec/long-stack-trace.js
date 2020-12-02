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
 * @suppress {globalThis}
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
var NEWLINE = '\n';
var IGNORE_FRAMES = {};
var creationTrace = '__creationTrace__';
var ERROR_TAG = 'STACKTRACE TRACKING';
var SEP_TAG = '__SEP_TAG__';
var sepTemplate = SEP_TAG + '@[native]';
var LongStackTrace = /** @class */ (function () {
    function LongStackTrace() {
        this.error = getStacktrace();
        this.timestamp = new Date();
    }
    return LongStackTrace;
}());
function getStacktraceWithUncaughtError() {
    return new Error(ERROR_TAG);
}
function getStacktraceWithCaughtError() {
    try {
        throw getStacktraceWithUncaughtError();
    }
    catch (err) {
        return err;
    }
}
// Some implementations of exception handling don't create a stack trace if the exception
// isn't thrown, however it's faster not to actually throw the exception.
var error = getStacktraceWithUncaughtError();
var caughtError = getStacktraceWithCaughtError();
var getStacktrace = error.stack ?
    getStacktraceWithUncaughtError :
    (caughtError.stack ? getStacktraceWithCaughtError : getStacktraceWithUncaughtError);
function getFrames(error) {
    return error.stack ? error.stack.split(NEWLINE) : [];
}
function addErrorStack(lines, error) {
    var trace = getFrames(error);
    for (var i = 0; i < trace.length; i++) {
        var frame = trace[i];
        // Filter out the Frames which are part of stack capturing.
        if (!IGNORE_FRAMES.hasOwnProperty(frame)) {
            lines.push(trace[i]);
        }
    }
}
function renderLongStackTrace(frames, stack) {
    var longTrace = [stack ? stack.trim() : ''];
    if (frames) {
        var timestamp = new Date().getTime();
        for (var i = 0; i < frames.length; i++) {
            var traceFrames = frames[i];
            var lastTime = traceFrames.timestamp;
            var separator = "____________________Elapsed " + (timestamp - lastTime.getTime()) + " ms; At: " + lastTime;
            separator = separator.replace(/[^\w\d]/g, '_');
            longTrace.push(sepTemplate.replace(SEP_TAG, separator));
            addErrorStack(longTrace, traceFrames.error);
            timestamp = lastTime.getTime();
        }
    }
    return longTrace.join(NEWLINE);
}
// if Error.stackTraceLimit is 0, means stack trace
// is disabled, so we don't need to generate long stack trace
// this will improve performance in some test(some test will
// set stackTraceLimit to 0, https://github.com/angular/zone.js/issues/698
function stackTracesEnabled() {
    // Cast through any since this property only exists on Error in the nodejs
    // typings.
    return Error.stackTraceLimit > 0;
}
Zone['longStackTraceZoneSpec'] = {
    name: 'long-stack-trace',
    longStackTraceLimit: 10,
    // add a getLongStackTrace method in spec to
    // handle handled reject promise error.
    getLongStackTrace: function (error) {
        if (!error) {
            return undefined;
        }
        var trace = error[Zone.__symbol__('currentTaskTrace')];
        if (!trace) {
            return error.stack;
        }
        return renderLongStackTrace(trace, error.stack);
    },
    onScheduleTask: function (parentZoneDelegate, currentZone, targetZone, task) {
        if (stackTracesEnabled()) {
            var currentTask = Zone.currentTask;
            var trace = currentTask && currentTask.data && currentTask.data[creationTrace] || [];
            trace = [new LongStackTrace()].concat(trace);
            if (trace.length > this.longStackTraceLimit) {
                trace.length = this.longStackTraceLimit;
            }
            if (!task.data)
                task.data = {};
            if (task.type === 'eventTask') {
                // Fix issue https://github.com/angular/zone.js/issues/1195,
                // For event task of browser, by default, all task will share a
                // singleton instance of data object, we should create a new one here
                // The cast to `any` is required to workaround a closure bug which wrongly applies
                // URL sanitization rules to .data access.
                task.data = __assign({}, task.data);
            }
            task.data[creationTrace] = trace;
        }
        return parentZoneDelegate.scheduleTask(targetZone, task);
    },
    onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
        if (stackTracesEnabled()) {
            var parentTask = Zone.currentTask || error.task;
            if (error instanceof Error && parentTask) {
                var longStack = renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error.stack);
                try {
                    error.stack = error.longStack = longStack;
                }
                catch (err) {
                }
            }
        }
        return parentZoneDelegate.handleError(targetZone, error);
    }
};
function captureStackTraces(stackTraces, count) {
    if (count > 0) {
        stackTraces.push(getFrames((new LongStackTrace()).error));
        captureStackTraces(stackTraces, count - 1);
    }
}
function computeIgnoreFrames() {
    if (!stackTracesEnabled()) {
        return;
    }
    var frames = [];
    captureStackTraces(frames, 2);
    var frames1 = frames[0];
    var frames2 = frames[1];
    for (var i = 0; i < frames1.length; i++) {
        var frame1 = frames1[i];
        if (frame1.indexOf(ERROR_TAG) == -1) {
            var match = frame1.match(/^\s*at\s+/);
            if (match) {
                sepTemplate = match[0] + SEP_TAG + ' (http://localhost)';
                break;
            }
        }
    }
    for (var i = 0; i < frames1.length; i++) {
        var frame1 = frames1[i];
        var frame2 = frames2[i];
        if (frame1 === frame2) {
            IGNORE_FRAMES[frame1] = true;
        }
        else {
            break;
        }
    }
}
computeIgnoreFrames();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1zdGFjay10cmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3pvbmUtc3BlYy9sb25nLXN0YWNrLXRyYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7OztBQUVILElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLGFBQWEsR0FBd0IsRUFBRSxDQUFDO0FBQzlDLElBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDO0FBQzFDLElBQU0sU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBQ3hDLElBQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM5QixJQUFJLFdBQVcsR0FBVyxPQUFPLEdBQUcsV0FBVyxDQUFDO0FBRWhEO0lBQUE7UUFDRSxVQUFLLEdBQVUsYUFBYSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFFRCxTQUFTLDhCQUE4QjtJQUNyQyxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLDRCQUE0QjtJQUNuQyxJQUFJO1FBQ0YsTUFBTSw4QkFBOEIsRUFBRSxDQUFDO0tBQ3hDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQztLQUNaO0FBQ0gsQ0FBQztBQUVELHlGQUF5RjtBQUN6Rix5RUFBeUU7QUFDekUsSUFBTSxLQUFLLEdBQUcsOEJBQThCLEVBQUUsQ0FBQztBQUMvQyxJQUFNLFdBQVcsR0FBRyw0QkFBNEIsRUFBRSxDQUFDO0FBQ25ELElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQiw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsV0FBVyxDQUFD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QU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3pELE1BQU07YUFDUDtTQUNGO0tBQ0Y7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNyQixhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxNQUFNO1NBQ1A7S0FDRjtBQUNILENBQUM7QUFDRCxtQkFBbUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge2dsb2JhbFRoaXN9XG4gKi9cblxuY29uc3QgTkVXTElORSA9ICdcXG4nO1xuY29uc3QgSUdOT1JFX0ZSQU1FUzoge1trOiBzdHJpbmddOiB0cnVlfSA9IHt9O1xuY29uc3QgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG5jb25zdCBFUlJPUl9UQUcgPSAnU1RBQ0tUUkFDRSBUUkFDS0lORyc7XG5jb25zdCBTRVBfVEFHID0gJ19fU0VQX1RBR19fJztcbmxldCBzZXBUZW1wbGF0ZTogc3RyaW5nID0gU0VQX1RBRyArICdAW25hdGl2ZV0nO1xuXG5jbGFzcyBMb25nU3RhY2tUcmFjZSB7XG4gIGVycm9yOiBFcnJvciA9IGdldFN0YWNrdHJhY2UoKTtcbiAgdGltZXN0YW1wOiBEYXRlID0gbmV3IERhdGUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihFUlJPUl9UQUcpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFja3RyYWNlV2l0aENhdWdodEVycm9yKCk6IEVycm9yIHtcbiAgdHJ5IHtcbiAgICB0aHJvdyBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG4vLyBTb21lIGltcGxlbWVudGF0aW9ucyBvZiBleGNlcHRpb24gaGFuZGxpbmcgZG9uJ3QgY3JlYXRlIGEgc3RhY2sgdHJhY2UgaWYgdGhlIGV4Y2VwdGlvblxuLy8gaXNuJ3QgdGhyb3duLCBob3dldmVyIGl0J3MgZmFzdGVyIG5vdCB0byBhY3R1YWxseSB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuY29uc3QgZXJyb3IgPSBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IoKTtcbmNvbnN0IGNhdWdodEVycm9yID0gZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvcigpO1xuY29uc3QgZ2V0U3RhY2t0cmFjZSA9IGVycm9yLnN0YWNrID9cbiAgICBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IgOlxuICAgIChjYXVnaHRFcnJvci5zdGFjayA/IGdldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IgOiBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IpO1xuXG5mdW5jdGlvbiBnZXRGcmFtZXMoZXJyb3I6IEVycm9yKTogc3RyaW5nW10ge1xuICByZXR1cm4gZXJyb3Iuc3RhY2sgPyBlcnJvci5zdGFjay5zcGxpdChORVdMSU5FKSA6IFtdO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvclN0YWNrKGxpbmVzOiBzdHJpbmdbXSwgZXJyb3I6IEVycm9yKTogdm9pZCB7XG4gIGxldCB0cmFjZTogc3RyaW5nW10gPSBnZXRGcmFtZXMoZXJyb3IpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0cmFjZVtpXTtcbiAgICAvLyBGaWx0ZXIgb3V0IHRoZSBGcmFtZXMgd2hpY2ggYXJlIHBhcnQgb2Ygc3RhY2sgY2FwdHVyaW5nLlxuICAgIGlmICghSUdOT1JFX0ZSQU1FUy5oYXNPd25Qcm9wZXJ0eShmcmFtZSkpIHtcbiAgICAgIGxpbmVzLnB1c2godHJhY2VbaV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJMb25nU3RhY2tUcmFjZShmcmFtZXM6IExvbmdTdGFja1RyYWNlW10sIHN0YWNrPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbG9uZ1RyYWNlOiBzdHJpbmdbXSA9IFtzdGFjayA/IHN0YWNrLnRyaW0oKSA6ICcnXTtcblxuICBpZiAoZnJhbWVzKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0cmFjZUZyYW1lczogTG9uZ1N0YWNrVHJhY2UgPSBmcmFtZXNbaV07XG4gICAgICBjb25zdCBsYXN0VGltZSA9IHRyYWNlRnJhbWVzLnRpbWVzdGFtcDtcbiAgICAgIGxldCBzZXBhcmF0b3IgPVxuICAgICAgICAgIGBfX19fX19fX19fX19fX19fX19fX0VsYXBzZWQgJHt0aW1lc3RhbXAgLSBsYXN0VGltZS5nZXRUaW1lKCl9IG1zOyBBdDogJHtsYXN0VGltZX1gO1xuICAgICAgc2VwYXJhdG9yID0gc2VwYXJhdG9yLnJlcGxhY2UoL1teXFx3XFxkXS9nLCAnXycpO1xuICAgICAgbG9uZ1RyYWNlLnB1c2goc2VwVGVtcGxhdGUucmVwbGFjZShTRVBfVEFHLCBzZXBhcmF0b3IpKTtcbiAgICAgIGFkZEVycm9yU3RhY2sobG9uZ1RyYWNlLCB0cmFjZUZyYW1lcy5lcnJvcik7XG5cbiAgICAgIHRpbWVzdGFtcCA9IGxhc3RUaW1lLmdldFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9uZ1RyYWNlLmpvaW4oTkVXTElORSk7XG59XG5cbi8vIGlmIEVycm9yLnN0YWNrVHJhY2VMaW1pdCBpcyAwLCBtZWFucyBzdGFjayB0cmFjZVxuLy8gaXMgZGlzYWJsZWQsIHNvIHdlIGRvbid0IG5lZWQgdG8gZ2VuZXJhdGUgbG9uZyBzdGFjayB0cmFjZVxuLy8gdGhpcyB3aWxsIGltcHJvdmUgcGVyZm9ybWFuY2UgaW4gc29tZSB0ZXN0KHNvbWUgdGVzdCB3aWxsXG4vLyBzZXQgc3RhY2tUcmFjZUxpbWl0IHRvIDAsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzY5OFxuZnVuY3Rpb24gc3RhY2tUcmFjZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAvLyBDYXN0IHRocm91Z2ggYW55IHNpbmNlIHRoaXMgcHJvcGVydHkgb25seSBleGlzdHMgb24gRXJyb3IgaW4gdGhlIG5vZGVqc1xuICAvLyB0eXBpbmdzLlxuICByZXR1cm4gKEVycm9yIGFzIGFueSkuc3RhY2tUcmFjZUxpbWl0ID4gMDtcbn1cblxudHlwZSBMb25nU3RhY2tUcmFjZVpvbmVTcGVjID0gWm9uZVNwZWMgJiB7bG9uZ1N0YWNrVHJhY2VMaW1pdDogbnVtYmVyfTtcblxuKFpvbmUgYXMgYW55KVsnbG9uZ1N0YWNrVHJhY2Vab25lU3BlYyddID0gPExvbmdTdGFja1RyYWNlWm9uZVNwZWM+e1xuICBuYW1lOiAnbG9uZy1zdGFjay10cmFjZScsXG4gIGxvbmdTdGFja1RyYWNlTGltaXQ6IDEwLCAgLy8gTWF4IG51bWJlciBvZiB0YXNrIHRvIGtlZXAgdGhlIHN0YWNrIHRyYWNlIGZvci5cbiAgLy8gYWRkIGEgZ2V0TG9uZ1N0YWNrVHJhY2UgbWV0aG9kIGluIHNwZWMgdG9cbiAgLy8gaGFuZGxlIGhhbmRsZWQgcmVqZWN0IHByb21pc2UgZXJyb3IuXG4gIGdldExvbmdTdGFja1RyYWNlOiBmdW5jdGlvbihlcnJvcjogRXJyb3IpOiBzdHJpbmcgfFxuICAgICAgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhY2UgPSAoZXJyb3IgYXMgYW55KVsoWm9uZSBhcyBhbnkpLl9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKV07XG4gICAgICAgIGlmICghdHJhY2UpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlckxvbmdTdGFja1RyYWNlKHRyYWNlLCBlcnJvci5zdGFjayk7XG4gICAgICB9LFxuXG4gIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbihcbiAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayk6IGFueSB7XG4gICAgaWYgKHN0YWNrVHJhY2VzRW5hYmxlZCgpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG4gICAgICBsZXQgdHJhY2UgPSBjdXJyZW50VGFzayAmJiBjdXJyZW50VGFzay5kYXRhICYmIChjdXJyZW50VGFzay5kYXRhIGFzIGFueSlbY3JlYXRpb25UcmFjZV0gfHwgW107XG4gICAgICB0cmFjZSA9IFtuZXcgTG9uZ1N0YWNrVHJhY2UoKV0uY29uY2F0KHRyYWNlKTtcbiAgICAgIGlmICh0cmFjZS5sZW5ndGggPiB0aGlzLmxvbmdTdGFja1RyYWNlTGltaXQpIHtcbiAgICAgICAgdHJhY2UubGVuZ3RoID0gdGhpcy5sb25nU3RhY2tUcmFjZUxpbWl0O1xuICAgICAgfVxuICAgICAgaWYgKCF0YXNrLmRhdGEpIHRhc2suZGF0YSA9IHt9O1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ2V2ZW50VGFzaycpIHtcbiAgICAgICAgLy8gRml4IGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzExOTUsXG4gICAgICAgIC8vIEZvciBldmVudCB0YXNrIG9mIGJyb3dzZXIsIGJ5IGRlZmF1bHQsIGFsbCB0YXNrIHdpbGwgc2hhcmUgYVxuICAgICAgICAvLyBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgZGF0YSBvYmplY3QsIHdlIHNob3VsZCBjcmVhdGUgYSBuZXcgb25lIGhlcmVcblxuICAgICAgICAvLyBUaGUgY2FzdCB0byBgYW55YCBpcyByZXF1aXJlZCB0byB3b3JrYXJvdW5kIGEgY2xvc3VyZSBidWcgd2hpY2ggd3JvbmdseSBhcHBsaWVzXG4gICAgICAgIC8vIFVSTCBzYW5pdGl6YXRpb24gcnVsZXMgdG8gLmRhdGEgYWNjZXNzLlxuICAgICAgICAodGFzay5kYXRhIGFzIGFueSkgPSB7Li4uKHRhc2suZGF0YSBhcyBhbnkpfTtcbiAgICAgIH1cbiAgICAgICh0YXNrLmRhdGEgYXMgYW55KVtjcmVhdGlvblRyYWNlXSA9IHRyYWNlO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXRab25lLCB0YXNrKTtcbiAgfSxcblxuICBvbkhhbmRsZUVycm9yOiBmdW5jdGlvbihcbiAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChzdGFja1RyYWNlc0VuYWJsZWQoKSkge1xuICAgICAgY29uc3QgcGFyZW50VGFzayA9IFpvbmUuY3VycmVudFRhc2sgfHwgZXJyb3IudGFzaztcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIHBhcmVudFRhc2spIHtcbiAgICAgICAgY29uc3QgbG9uZ1N0YWNrID1cbiAgICAgICAgICAgIHJlbmRlckxvbmdTdGFja1RyYWNlKHBhcmVudFRhc2suZGF0YSAmJiBwYXJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV0sIGVycm9yLnN0YWNrKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlcnJvci5zdGFjayA9IChlcnJvciBhcyBhbnkpLmxvbmdTdGFjayA9IGxvbmdTdGFjaztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudFpvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0YXJnZXRab25lLCBlcnJvcik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlcyhzdGFja1RyYWNlczogc3RyaW5nW11bXSwgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICBpZiAoY291bnQgPiAwKSB7XG4gICAgc3RhY2tUcmFjZXMucHVzaChnZXRGcmFtZXMoKG5ldyBMb25nU3RhY2tUcmFjZSgpKS5lcnJvcikpO1xuICAgIGNhcHR1cmVTdGFja1RyYWNlcyhzdGFja1RyYWNlcywgY291bnQgLSAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlSWdub3JlRnJhbWVzKCkge1xuICBpZiAoIXN0YWNrVHJhY2VzRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZyYW1lczogc3RyaW5nW11bXSA9IFtdO1xuICBjYXB0dXJlU3RhY2tUcmFjZXMoZnJhbWVzLCAyKTtcbiAgY29uc3QgZnJhbWVzMSA9IGZyYW1lc1swXTtcbiAgY29uc3QgZnJhbWVzMiA9IGZyYW1lc1sxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZnJhbWUxID0gZnJhbWVzMVtpXTtcbiAgICBpZiAoZnJhbWUxLmluZGV4T2YoRVJST1JfVEFHKSA9PSAtMSkge1xuICAgICAgbGV0IG1hdGNoID0gZnJhbWUxLm1hdGNoKC9eXFxzKmF0XFxzKy8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHNlcFRlbXBsYXRlID0gbWF0Y2hbMF0gKyBTRVBfVEFHICsgJyAoaHR0cDovL2xvY2FsaG9zdCknO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lczEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBmcmFtZTEgPSBmcmFtZXMxW2ldO1xuICAgIGNvbnN0IGZyYW1lMiA9IGZyYW1lczJbaV07XG4gICAgaWYgKGZyYW1lMSA9PT0gZnJhbWUyKSB7XG4gICAgICBJR05PUkVfRlJBTUVTW2ZyYW1lMV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbmNvbXB1dGVJZ25vcmVGcmFtZXMoKTtcbiJdfQ==