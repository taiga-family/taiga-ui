/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/common/timers", ["require", "exports", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("zone.js/lib/common/utils");
    var taskSymbol = utils_1.zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};
        function scheduleTask(task) {
            var data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                }
                finally {
                    // issue-934, task will be cancelled
                    // even it is a periodic task such as
                    // setInterval
                    if (!(task.data && task.data.isPeriodic)) {
                        if (typeof data.handleId === 'number') {
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId];
                        }
                        else if (data.handleId) {
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null;
                        }
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) { return clearNative(task.data.handleId); }
        setNative =
            utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
                if (typeof args[0] === 'function') {
                    var options = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    var task = utils_1.scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    var handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            }; });
        clearNative =
            utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
                var id = args[0];
                var task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            }; });
    }
    exports.patchTimer = patchTimer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvY29tbW9uL3RpbWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7OztJQUVILGtEQUFrRjtJQUVsRixJQUFNLFVBQVUsR0FBRyxrQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBTzFDLFNBQWdCLFVBQVUsQ0FBQyxNQUFXLEVBQUUsT0FBZSxFQUFFLFVBQWtCLEVBQUUsVUFBa0I7UUFDN0YsSUFBSSxTQUFTLEdBQWtCLElBQUksQ0FBQztRQUNwQyxJQUFJLFdBQVcsR0FBa0IsSUFBSSxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxVQUFVLENBQUM7UUFDdEIsVUFBVSxJQUFJLFVBQVUsQ0FBQztRQUV6QixJQUFNLGVBQWUsR0FBeUIsRUFBRSxDQUFDO1FBRWpELFNBQVMsWUFBWSxDQUFDLElBQVU7WUFDOUIsSUFBTSxJQUFJLEdBQWlCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckMsU0FBUyxLQUFLO2dCQUNaLElBQUk7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUNwQzt3QkFBUztvQkFDUixvQ0FBb0M7b0JBQ3BDLHFDQUFxQztvQkFDckMsY0FBYztvQkFDZCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ3hDLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTs0QkFDckMsdUNBQXVDOzRCQUN2QyxtQkFBbUI7NEJBQ25CLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDdkM7NkJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUN4Qiw0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Q0FBQyxDQUFDO2dCQUNuQixJQUFJLElBQVUsQ0FBQztnQkFDZixJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtvQkFDMUIsa0JBQWtCO29CQUNsQixJQUFJLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxjQUFjO29CQUNkLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM1QixzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ1QsSUFBSSxHQUFHLEVBQUUsQ0FBQztxQkFDWDtpQkFDRjtnQkFDRCxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUN6QyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ3BFLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxFQUFFOzRCQUMxQixPQUFPLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDNUI7NkJBQU0sSUFBSSxFQUFFLEVBQUU7NEJBQ2IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDdkI7d0JBQ0QsMkNBQTJDO3dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7cUJBQU07b0JBQ0wseUNBQXlDO29CQUN6QyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUI7WUFDSCxDQUFDLEVBN0J1RCxDQTZCdkQsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQS9HRCxnQ0ErR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cblxuaW1wb3J0IHtwYXRjaE1ldGhvZCwgc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUsIHpvbmVTeW1ib2x9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB0YXNrU3ltYm9sID0gem9uZVN5bWJvbCgnem9uZVRhc2snKTtcblxuaW50ZXJmYWNlIFRpbWVyT3B0aW9ucyBleHRlbmRzIFRhc2tEYXRhIHtcbiAgaGFuZGxlSWQ/OiBudW1iZXI7XG4gIGFyZ3M6IGFueVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3c6IGFueSwgc2V0TmFtZTogc3RyaW5nLCBjYW5jZWxOYW1lOiBzdHJpbmcsIG5hbWVTdWZmaXg6IHN0cmluZykge1xuICBsZXQgc2V0TmF0aXZlOiBGdW5jdGlvbnxudWxsID0gbnVsbDtcbiAgbGV0IGNsZWFyTmF0aXZlOiBGdW5jdGlvbnxudWxsID0gbnVsbDtcbiAgc2V0TmFtZSArPSBuYW1lU3VmZml4O1xuICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG5cbiAgY29uc3QgdGFza3NCeUhhbmRsZUlkOiB7W2lkOiBudW1iZXJdOiBUYXNrfSA9IHt9O1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrOiBUYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IDxUaW1lck9wdGlvbnM+dGFzay5kYXRhO1xuICAgIGZ1bmN0aW9uIHRpbWVyKHRoaXM6IHVua25vd24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBpc3N1ZS05MzQsIHRhc2sgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICAgICAgLy8gZXZlbiBpdCBpcyBhIHBlcmlvZGljIHRhc2sgc3VjaCBhc1xuICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICBpZiAoISh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaW4gbm9uLW5vZGVqcyBlbnYsIHdlIHJlbW92ZSB0aW1lcklkXG4gICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2RhdGEuaGFuZGxlSWRdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5oYW5kbGVJZCkge1xuICAgICAgICAgICAgLy8gTm9kZSByZXR1cm5zIGNvbXBsZXggb2JqZWN0cyBhcyBoYW5kbGVJZHNcbiAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0YXNrIHJlZmVyZW5jZSBmcm9tIHRpbWVyIG9iamVjdFxuICAgICAgICAgICAgKGRhdGEuaGFuZGxlSWQgYXMgYW55KVt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEuYXJnc1swXSA9IHRpbWVyO1xuICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUgIS5hcHBseSh3aW5kb3csIGRhdGEuYXJncyk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRhc2sodGFzazogVGFzaykgeyByZXR1cm4gY2xlYXJOYXRpdmUgISgoPFRpbWVyT3B0aW9ucz50YXNrLmRhdGEpLmhhbmRsZUlkKTsgfVxuXG4gIHNldE5hdGl2ZSA9XG4gICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IGZ1bmN0aW9uKHNlbGY6IGFueSwgYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogVGltZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgaXNQZXJpb2RpYzogbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyxcbiAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdGFzayA9XG4gICAgICAgICAgICAgIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOb2RlLmpzIG11c3QgYWRkaXRpb25hbGx5IHN1cHBvcnQgdGhlIHJlZiBhbmQgdW5yZWYgZnVuY3Rpb25zLlxuICAgICAgICAgIGNvbnN0IGhhbmRsZTogYW55ID0gKDxUaW1lck9wdGlvbnM+dGFzay5kYXRhKS5oYW5kbGVJZDtcbiAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGZvciBub24gbm9kZWpzIGVudiwgd2Ugc2F2ZSBoYW5kbGVJZDogdGFza1xuICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICB0YXNrc0J5SGFuZGxlSWRbaGFuZGxlXSA9IHRhc2s7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBpbiB0aW1lcklkIE9iamVjdCBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICBoYW5kbGVbdGFza1N5bWJvbF0gPSB0YXNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgaGFuZGxlIGlzIG51bGwsIGJlY2F1c2Ugc29tZSBwb2x5ZmlsbCBvciBicm93c2VyXG4gICAgICAgICAgLy8gbWF5IHJldHVybiB1bmRlZmluZWQgZnJvbSBzZXRUaW1lb3V0L3NldEludGVydmFsL3NldEltbWVkaWF0ZS9yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICBpZiAoaGFuZGxlICYmIGhhbmRsZS5yZWYgJiYgaGFuZGxlLnVucmVmICYmIHR5cGVvZiBoYW5kbGUucmVmID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgIHR5cGVvZiBoYW5kbGUudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICg8YW55PnRhc2spLnJlZiA9ICg8YW55PmhhbmRsZSkucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICg8YW55PnRhc2spLnVucmVmID0gKDxhbnk+aGFuZGxlKS51bnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJyB8fCBoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIGNsZWFyTmF0aXZlID1cbiAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgY2FuY2VsTmFtZSwgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gZnVuY3Rpb24oc2VsZjogYW55LCBhcmdzOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBpZCA9IGFyZ3NbMF07XG4gICAgICAgIGxldCB0YXNrOiBUYXNrO1xuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIC8vIG5vbiBub2RlanMgZW52LlxuICAgICAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG5vZGVqcyBlbnYuXG4gICAgICAgICAgdGFzayA9IGlkICYmIGlkW3Rhc2tTeW1ib2xdO1xuICAgICAgICAgIC8vIG90aGVyIGVudmlyb25tZW50cy5cbiAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgIHRhc2sgPSBpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcgJiZcbiAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhICEuaXNQZXJpb2RpYyB8fCB0YXNrLnJ1bkNvdW50ID09PSAwKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkKSB7XG4gICAgICAgICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xufVxuIl19