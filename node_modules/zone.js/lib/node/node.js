/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/node/node", ["require", "exports", "zone.js/lib/node/node_util", "zone.js/lib/node/events", "zone.js/lib/node/fs", "zone.js/lib/common/events", "zone.js/lib/common/timers", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("zone.js/lib/node/node_util");
    require("zone.js/lib/node/events");
    require("zone.js/lib/node/fs");
    var events_1 = require("zone.js/lib/common/events");
    var timers_1 = require("zone.js/lib/common/timers");
    var utils_1 = require("zone.js/lib/common/utils");
    var set = 'set';
    var clear = 'clear';
    Zone.__load_patch('node_timers', function (global, Zone) {
        // Timers
        var globalUseTimeoutFromTimer = false;
        try {
            var timers = require('timers');
            var globalEqualTimersTimeout = global.setTimeout === timers.setTimeout;
            if (!globalEqualTimersTimeout && !utils_1.isMix) {
                // 1. if isMix, then we are in mix environment such as Electron
                // we should only patch timers.setTimeout because global.setTimeout
                // have been patched
                // 2. if global.setTimeout not equal timers.setTimeout, check
                // whether global.setTimeout use timers.setTimeout or not
                var originSetTimeout_1 = timers.setTimeout;
                timers.setTimeout = function () {
                    globalUseTimeoutFromTimer = true;
                    return originSetTimeout_1.apply(this, arguments);
                };
                var detectTimeout = global.setTimeout(function () { }, 100);
                clearTimeout(detectTimeout);
                timers.setTimeout = originSetTimeout_1;
            }
            timers_1.patchTimer(timers, set, clear, 'Timeout');
            timers_1.patchTimer(timers, set, clear, 'Interval');
            timers_1.patchTimer(timers, set, clear, 'Immediate');
        }
        catch (error) {
            // timers module not exists, for example, when we using nativeScript
            // timers is not available
        }
        if (utils_1.isMix) {
            // if we are in mix environment, such as Electron,
            // the global.setTimeout has already been patched,
            // so we just patch timers.setTimeout
            return;
        }
        if (!globalUseTimeoutFromTimer) {
            // 1. global setTimeout equals timers setTimeout
            // 2. or global don't use timers setTimeout(maybe some other library patch setTimeout)
            // 3. or load timers module error happens, we should patch global setTimeout
            timers_1.patchTimer(global, set, clear, 'Timeout');
            timers_1.patchTimer(global, set, clear, 'Interval');
            timers_1.patchTimer(global, set, clear, 'Immediate');
        }
        else {
            // global use timers setTimeout, but not equals
            // this happens when use nodejs v0.10.x, global setTimeout will
            // use a lazy load version of timers setTimeout
            // we should not double patch timer's setTimeout
            // so we only store the __symbol__ for consistency
            global[Zone.__symbol__('setTimeout')] = global.setTimeout;
            global[Zone.__symbol__('setInterval')] = global.setInterval;
            global[Zone.__symbol__('setImmediate')] = global.setImmediate;
        }
    });
    // patch process related methods
    Zone.__load_patch('nextTick', function () {
        // patch nextTick as microTask
        utils_1.patchMicroTask(process, 'nextTick', function (self, args) {
            return {
                name: 'process.nextTick',
                args: args,
                cbIdx: (args.length > 0 && typeof args[0] === 'function') ? 0 : -1,
                target: process
            };
        });
    });
    Zone.__load_patch('handleUnhandledPromiseRejection', function (global, Zone, api) {
        Zone[api.symbol('unhandledPromiseRejectionHandler')] =
            findProcessPromiseRejectionHandler('unhandledRejection');
        Zone[api.symbol('rejectionHandledHandler')] =
            findProcessPromiseRejectionHandler('rejectionHandled');
        // handle unhandled promise rejection
        function findProcessPromiseRejectionHandler(evtName) {
            return function (e) {
                var eventTasks = events_1.findEventTasks(process, evtName);
                eventTasks.forEach(function (eventTask) {
                    // process has added unhandledrejection event listener
                    // trigger the event listener
                    if (evtName === 'unhandledRejection') {
                        eventTask.invoke(e.rejection, e.promise);
                    }
                    else if (evtName === 'rejectionHandled') {
                        eventTask.invoke(e.promise);
                    }
                });
            };
        }
    });
    // Crypto
    Zone.__load_patch('crypto', function () {
        var crypto;
        try {
            crypto = require('crypto');
        }
        catch (err) {
        }
        // use the generic patchMacroTask to patch crypto
        if (crypto) {
            var methodNames = ['randomBytes', 'pbkdf2'];
            methodNames.forEach(function (name) {
                utils_1.patchMacroTask(crypto, name, function (self, args) {
                    return {
                        name: 'crypto.' + name,
                        args: args,
                        cbIdx: (args.length > 0 && typeof args[args.length - 1] === 'function') ?
                            args.length - 1 :
                            -1,
                        target: crypto
                    };
                });
            });
        }
    });
    Zone.__load_patch('console', function (global, Zone) {
        var consoleMethods = ['dir', 'log', 'info', 'error', 'warn', 'assert', 'debug', 'timeEnd', 'trace'];
        consoleMethods.forEach(function (m) {
            var originalMethod = console[Zone.__symbol__(m)] = console[m];
            if (originalMethod) {
                console[m] = function () {
                    var args = utils_1.ArraySlice.call(arguments);
                    if (Zone.current === Zone.root) {
                        return originalMethod.apply(this, args);
                    }
                    else {
                        return Zone.root.run(originalMethod, this, args);
                    }
                };
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL25vZGUvbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHNDQUFxQjtJQUNyQixtQ0FBa0I7SUFDbEIsK0JBQWM7SUFFZCxvREFBZ0Q7SUFDaEQsb0RBQTRDO0lBQzVDLGtEQUFrRjtJQUVsRixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDbEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBRXRCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFVBQUMsTUFBVyxFQUFFLElBQWM7UUFDM0QsU0FBUztRQUNULElBQUkseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUk7WUFDRixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsSUFBSSx3QkFBd0IsR0FBRyxNQUFNLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdkUsSUFBSSxDQUFDLHdCQUF3QixJQUFJLENBQUMsYUFBSyxFQUFFO2dCQUN2QywrREFBK0Q7Z0JBQy9ELG1FQUFtRTtnQkFDbkUsb0JBQW9CO2dCQUNwQiw2REFBNkQ7Z0JBQzdELHlEQUF5RDtnQkFDekQsSUFBTSxrQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxNQUFNLENBQUMsVUFBVSxHQUFHO29CQUNsQix5QkFBeUIsR0FBRyxJQUFJLENBQUM7b0JBQ2pDLE9BQU8sa0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDO2dCQUNGLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZELFlBQVksQ0FBQyxhQUFh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QUFDO0lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYztRQUN2RCxJQUFNLGNBQWMsR0FDaEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25GLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFTO1lBQy9CLElBQU0sY0FBYyxHQUFJLE9BQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksT0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksY0FBYyxFQUFFO2dCQUNqQixPQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ3BCLElBQU0sSUFBSSxHQUFHLGtCQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDOUIsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDekM7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNsRDtnQkFDSCxDQUFDLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAnLi9ub2RlX3V0aWwnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vZnMnO1xuXG5pbXBvcnQge2ZpbmRFdmVudFRhc2tzfSBmcm9tICcuLi9jb21tb24vZXZlbnRzJztcbmltcG9ydCB7cGF0Y2hUaW1lcn0gZnJvbSAnLi4vY29tbW9uL3RpbWVycyc7XG5pbXBvcnQge0FycmF5U2xpY2UsIGlzTWl4LCBwYXRjaE1hY3JvVGFzaywgcGF0Y2hNaWNyb1Rhc2t9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5cbmNvbnN0IHNldCA9ICdzZXQnO1xuY29uc3QgY2xlYXIgPSAnY2xlYXInO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnbm9kZV90aW1lcnMnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlKSA9PiB7XG4gIC8vIFRpbWVyc1xuICBsZXQgZ2xvYmFsVXNlVGltZW91dEZyb21UaW1lciA9IGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0IHRpbWVycyA9IHJlcXVpcmUoJ3RpbWVycycpO1xuICAgIGxldCBnbG9iYWxFcXVhbFRpbWVyc1RpbWVvdXQgPSBnbG9iYWwuc2V0VGltZW91dCA9PT0gdGltZXJzLnNldFRpbWVvdXQ7XG4gICAgaWYgKCFnbG9iYWxFcXVhbFRpbWVyc1RpbWVvdXQgJiYgIWlzTWl4KSB7XG4gICAgICAvLyAxLiBpZiBpc01peCwgdGhlbiB3ZSBhcmUgaW4gbWl4IGVudmlyb25tZW50IHN1Y2ggYXMgRWxlY3Ryb25cbiAgICAgIC8vIHdlIHNob3VsZCBvbmx5IHBhdGNoIHRpbWVycy5zZXRUaW1lb3V0IGJlY2F1c2UgZ2xvYmFsLnNldFRpbWVvdXRcbiAgICAgIC8vIGhhdmUgYmVlbiBwYXRjaGVkXG4gICAgICAvLyAyLiBpZiBnbG9iYWwuc2V0VGltZW91dCBub3QgZXF1YWwgdGltZXJzLnNldFRpbWVvdXQsIGNoZWNrXG4gICAgICAvLyB3aGV0aGVyIGdsb2JhbC5zZXRUaW1lb3V0IHVzZSB0aW1lcnMuc2V0VGltZW91dCBvciBub3RcbiAgICAgIGNvbnN0IG9yaWdpblNldFRpbWVvdXQgPSB0aW1lcnMuc2V0VGltZW91dDtcbiAgICAgIHRpbWVycy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGdsb2JhbFVzZVRpbWVvdXRGcm9tVGltZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb3JpZ2luU2V0VGltZW91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGRldGVjdFRpbWVvdXQgPSBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiB7fSwgMTAwKTtcbiAgICAgIGNsZWFyVGltZW91dChkZXRlY3RUaW1lb3V0KTtcbiAgICAgIHRpbWVycy5zZXRUaW1lb3V0ID0gb3JpZ2luU2V0VGltZW91dDtcbiAgICB9XG4gICAgcGF0Y2hUaW1lcih0aW1lcnMsIHNldCwgY2xlYXIsICdUaW1lb3V0Jyk7XG4gICAgcGF0Y2hUaW1lcih0aW1lcnMsIHNldCwgY2xlYXIsICdJbnRlcnZhbCcpO1xuICAgIHBhdGNoVGltZXIodGltZXJzLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gdGltZXJzIG1vZHVsZSBub3QgZXhpc3RzLCBmb3IgZXhhbXBsZSwgd2hlbiB3ZSB1c2luZyBuYXRpdmVTY3JpcHRcbiAgICAvLyB0aW1lcnMgaXMgbm90IGF2YWlsYWJsZVxuICB9XG4gIGlmIChpc01peCkge1xuICAgIC8vIGlmIHdlIGFyZSBpbiBtaXggZW52aXJvbm1lbnQsIHN1Y2ggYXMgRWxlY3Ryb24sXG4gICAgLy8gdGhlIGdsb2JhbC5zZXRUaW1lb3V0IGhhcyBhbHJlYWR5IGJlZW4gcGF0Y2hlZCxcbiAgICAvLyBzbyB3ZSBqdXN0IHBhdGNoIHRpbWVycy5zZXRUaW1lb3V0XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghZ2xvYmFsVXNlVGltZW91dEZyb21UaW1lcikge1xuICAgIC8vIDEuIGdsb2JhbCBzZXRUaW1lb3V0IGVxdWFscyB0aW1lcnMgc2V0VGltZW91dFxuICAgIC8vIDIuIG9yIGdsb2JhbCBkb24ndCB1c2UgdGltZXJzIHNldFRpbWVvdXQobWF5YmUgc29tZSBvdGhlciBsaWJyYXJ5IHBhdGNoIHNldFRpbWVvdXQpXG4gICAgLy8gMy4gb3IgbG9hZCB0aW1lcnMgbW9kdWxlIGVycm9yIGhhcHBlbnMsIHdlIHNob3VsZCBwYXRjaCBnbG9iYWwgc2V0VGltZW91dFxuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbCB1c2UgdGltZXJzIHNldFRpbWVvdXQsIGJ1dCBub3QgZXF1YWxzXG4gICAgLy8gdGhpcyBoYXBwZW5zIHdoZW4gdXNlIG5vZGVqcyB2MC4xMC54LCBnbG9iYWwgc2V0VGltZW91dCB3aWxsXG4gICAgLy8gdXNlIGEgbGF6eSBsb2FkIHZlcnNpb24gb2YgdGltZXJzIHNldFRpbWVvdXRcbiAgICAvLyB3ZSBzaG91bGQgbm90IGRvdWJsZSBwYXRjaCB0aW1lcidzIHNldFRpbWVvdXRcbiAgICAvLyBzbyB3ZSBvbmx5IHN0b3JlIHRoZSBfX3N5bWJvbF9fIGZvciBjb25zaXN0ZW5jeVxuICAgIGdsb2JhbFtab25lLl9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKV0gPSBnbG9iYWwuc2V0VGltZW91dDtcbiAgICBnbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdzZXRJbnRlcnZhbCcpXSA9IGdsb2JhbC5zZXRJbnRlcnZhbDtcbiAgICBnbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdzZXRJbW1lZGlhdGUnKV0gPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xuICB9XG59KTtcblxuLy8gcGF0Y2ggcHJvY2VzcyByZWxhdGVkIG1ldGhvZHNcblpvbmUuX19sb2FkX3BhdGNoKCduZXh0VGljaycsICgpID0+IHtcbiAgLy8gcGF0Y2ggbmV4dFRpY2sgYXMgbWljcm9UYXNrXG4gIHBhdGNoTWljcm9UYXNrKHByb2Nlc3MsICduZXh0VGljaycsIChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdwcm9jZXNzLm5leHRUaWNrJyxcbiAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICBjYklkeDogKGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykgPyAwIDogLTEsXG4gICAgICB0YXJnZXQ6IHByb2Nlc3NcbiAgICB9O1xuICB9KTtcbn0pO1xuXG5ab25lLl9fbG9hZF9wYXRjaChcbiAgICAnaGFuZGxlVW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbicsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gICAgICAoWm9uZSBhcyBhbnkpW2FwaS5zeW1ib2woJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyldID1cbiAgICAgICAgICBmaW5kUHJvY2Vzc1Byb21pc2VSZWplY3Rpb25IYW5kbGVyKCd1bmhhbmRsZWRSZWplY3Rpb24nKTtcblxuICAgICAgKFpvbmUgYXMgYW55KVthcGkuc3ltYm9sKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpXSA9XG4gICAgICAgICAgZmluZFByb2Nlc3NQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uSGFuZGxlZCcpO1xuXG4gICAgICAvLyBoYW5kbGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gICAgICBmdW5jdGlvbiBmaW5kUHJvY2Vzc1Byb21pc2VSZWplY3Rpb25IYW5kbGVyKGV2dE5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZTogYW55KSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRUYXNrcyA9IGZpbmRFdmVudFRhc2tzKHByb2Nlc3MsIGV2dE5hbWUpO1xuICAgICAgICAgIGV2ZW50VGFza3MuZm9yRWFjaChldmVudFRhc2sgPT4ge1xuICAgICAgICAgICAgLy8gcHJvY2VzcyBoYXMgYWRkZWQgdW5oYW5kbGVkcmVqZWN0aW9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgaWYgKGV2dE5hbWUgPT09ICd1bmhhbmRsZWRSZWplY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZS5yZWplY3Rpb24sIGUucHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dE5hbWUgPT09ICdyZWplY3Rpb25IYW5kbGVkJykge1xuICAgICAgICAgICAgICBldmVudFRhc2suaW52b2tlKGUucHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cblxuLy8gQ3J5cHRvXG5ab25lLl9fbG9hZF9wYXRjaCgnY3J5cHRvJywgKCkgPT4ge1xuICBsZXQgY3J5cHRvOiBhbnk7XG4gIHRyeSB7XG4gICAgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG5cbiAgLy8gdXNlIHRoZSBnZW5lcmljIHBhdGNoTWFjcm9UYXNrIHRvIHBhdGNoIGNyeXB0b1xuICBpZiAoY3J5cHRvKSB7XG4gICAgY29uc3QgbWV0aG9kTmFtZXMgPSBbJ3JhbmRvbUJ5dGVzJywgJ3Bia2RmMiddO1xuICAgIG1ldGhvZE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBwYXRjaE1hY3JvVGFzayhjcnlwdG8sIG5hbWUsIChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogJ2NyeXB0by4nICsgbmFtZSxcbiAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgIGNiSWR4OiAoYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgYXJncy5sZW5ndGggLSAxIDpcbiAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgdGFyZ2V0OiBjcnlwdG9cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ2NvbnNvbGUnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlKSA9PiB7XG4gIGNvbnN0IGNvbnNvbGVNZXRob2RzID1cbiAgICAgIFsnZGlyJywgJ2xvZycsICdpbmZvJywgJ2Vycm9yJywgJ3dhcm4nLCAnYXNzZXJ0JywgJ2RlYnVnJywgJ3RpbWVFbmQnLCAndHJhY2UnXTtcbiAgY29uc29sZU1ldGhvZHMuZm9yRWFjaCgobTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSAoY29uc29sZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXyhtKV0gPSAoY29uc29sZSBhcyBhbnkpW21dO1xuICAgIGlmIChvcmlnaW5hbE1ldGhvZCkge1xuICAgICAgKGNvbnNvbGUgYXMgYW55KVttXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChab25lLmN1cnJlbnQgPT09IFpvbmUucm9vdCkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gWm9uZS5yb290LnJ1bihvcmlnaW5hbE1ldGhvZCwgdGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn0pO1xuIl19