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
        define("zone.js/lib/browser/browser", ["require", "exports", "zone.js/lib/common/events", "zone.js/lib/common/timers", "zone.js/lib/common/utils", "zone.js/lib/browser/custom-elements", "zone.js/lib/browser/event-target", "zone.js/lib/browser/property-descriptor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("zone.js/lib/common/events");
    var timers_1 = require("zone.js/lib/common/timers");
    var utils_1 = require("zone.js/lib/common/utils");
    var custom_elements_1 = require("zone.js/lib/browser/custom-elements");
    var event_target_1 = require("zone.js/lib/browser/event-target");
    var property_descriptor_1 = require("zone.js/lib/browser/property-descriptor");
    Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        timers_1.patchTimer(global, set, clear, 'Timeout');
        timers_1.patchTimer(global, set, clear, 'Interval');
        timers_1.patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', function (global) {
        timers_1.patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        timers_1.patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        timers_1.patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];
        for (var i = 0; i < blockingMethods.length; i++) {
            var name_1 = blockingMethods[i];
            utils_1.patchMethod(global, name_1, function (delegate, symbol, name) {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
        event_target_1.patchEvent(global, api);
        event_target_1.eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
        utils_1.patchClass('MutationObserver');
        utils_1.patchClass('WebKitMutationObserver');
        utils_1.patchClass('IntersectionObserver');
        utils_1.patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
        property_descriptor_1.propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', function (global, Zone, api) {
        custom_elements_1.patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = utils_1.zoneSymbol('xhrTask');
        var XHR_SYNC = utils_1.zoneSymbol('xhrSync');
        var XHR_LISTENER = utils_1.zoneSymbol('xhrListener');
        var XHR_SCHEDULED = utils_1.zoneSymbol('xhrScheduled');
        var XHR_URL = utils_1.zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = utils_1.zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            var XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) { return target[XHR_TASK]; }
            var oriAddListener = XMLHttpRequestPrototype[utils_1.ZONE_SYMBOL_ADD_EVENT_LISTENER];
            var oriRemoveListener = XMLHttpRequestPrototype[utils_1.ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget_1) {
                    var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[utils_1.ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[utils_1.ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            var READY_STATE_CHANGE = 'readystatechange';
            var SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                var data = task.data;
                var target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                var listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[utils_1.ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[utils_1.ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                var newListener = target[XHR_LISTENER] = function () {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            var loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (loadTasks && loadTasks.length > 0) {
                                var oriInvoke_1 = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    var loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (var i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke_1.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                var storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                var data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            var openNative = utils_1.patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            }; });
            var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            var fetchTaskAborting = utils_1.zoneSymbol('fetchTaskAborting');
            var fetchTaskScheduling = utils_1.zoneSymbol('fetchTaskScheduling');
            var sendNative = utils_1.patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    var task = utils_1.scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            }; });
            var abortNative = utils_1.patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
                var task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            }; });
        }
    });
    Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            utils_1.patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                var eventTasks = events_1.findEventTasks(global, evtName);
                eventTasks.forEach(function (eventTask) {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[utils_1.zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[utils_1.zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2Jyb3dzZXIvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7OztJQUVILG9EQUFnRDtJQUNoRCxvREFBNEM7SUFDNUMsa0RBQXlMO0lBRXpMLHVFQUFzRDtJQUN0RCxpRUFBNEQ7SUFDNUQsK0VBQThEO0lBRTlELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBVztRQUN0QyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFXO1FBQ3RDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsbUJBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxQyxtQkFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLG1CQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLFVBQUMsTUFBVztRQUNyRCxtQkFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDMUQsbUJBQVUsQ0FBQyxNQUFNLEVBQUUsWUFB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QUMsQ0FBQyxDQUFDO3dCQUMxRixTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ2xDLElBQVksQ0FBQyxrQkFBVSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBQ3pELDJCQUEyQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFckQsSUFBWSxDQUFDLGtCQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDaEQsMkJBQTJCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5cbmltcG9ydCB7ZmluZEV2ZW50VGFza3N9IGZyb20gJy4uL2NvbW1vbi9ldmVudHMnO1xuaW1wb3J0IHtwYXRjaFRpbWVyfSBmcm9tICcuLi9jb21tb24vdGltZXJzJztcbmltcG9ydCB7Wk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSLCBaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIsIHBhdGNoQ2xhc3MsIHBhdGNoTWV0aG9kLCBwYXRjaFByb3RvdHlwZSwgc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUsIHpvbmVTeW1ib2x9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5cbmltcG9ydCB7cGF0Y2hDdXN0b21FbGVtZW50c30gZnJvbSAnLi9jdXN0b20tZWxlbWVudHMnO1xuaW1wb3J0IHtldmVudFRhcmdldFBhdGNoLCBwYXRjaEV2ZW50fSBmcm9tICcuL2V2ZW50LXRhcmdldCc7XG5pbXBvcnQge3Byb3BlcnR5RGVzY3JpcHRvclBhdGNofSBmcm9tICcuL3Byb3BlcnR5LWRlc2NyaXB0b3InO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnbGVnYWN5JywgKGdsb2JhbDogYW55KSA9PiB7XG4gIGNvbnN0IGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gIGlmIChsZWdhY3lQYXRjaCkge1xuICAgIGxlZ2FjeVBhdGNoKCk7XG4gIH1cbn0pO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgKGdsb2JhbDogYW55KSA9PiB7XG4gIGNvbnN0IHNldCA9ICdzZXQnO1xuICBjb25zdCBjbGVhciA9ICdjbGVhcic7XG4gIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG4gIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG59KTtcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIChnbG9iYWw6IGFueSkgPT4ge1xuICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3JlcXVlc3QnLCAnY2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gIHBhdGNoVGltZXIoZ2xvYmFsLCAnbW96UmVxdWVzdCcsICdtb3pDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgcGF0Y2hUaW1lcihnbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xufSk7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdibG9ja2luZycsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUpID0+IHtcbiAgY29uc3QgYmxvY2tpbmdNZXRob2RzID0gWydhbGVydCcsICdwcm9tcHQnLCAnY29uZmlybSddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBibG9ja2luZ01ldGhvZHNbaV07XG4gICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lLCAoZGVsZWdhdGUsIHN5bWJvbCwgbmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHM6IGFueSwgYXJnczogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5ydW4oZGVsZWdhdGUsIGdsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59KTtcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgcGF0Y2hFdmVudChnbG9iYWwsIGFwaSk7XG4gIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAvLyBwYXRjaCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J3MgYWRkRXZlbnRMaXN0ZW5lci9yZW1vdmVFdmVudExpc3RlbmVyXG4gIGNvbnN0IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSAoZ2xvYmFsIGFzIGFueSlbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUpIHtcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldChnbG9iYWwsIFtYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZV0pO1xuICB9XG4gIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgcGF0Y2hDbGFzcygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicpO1xuICBwYXRjaENsYXNzKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicpO1xuICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59KTtcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ29uX3Byb3BlcnR5JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBnbG9iYWwpO1xufSk7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdjdXN0b21FbGVtZW50cycsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIHBhdGNoQ3VzdG9tRWxlbWVudHMoZ2xvYmFsLCBhcGkpO1xufSk7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdYSFInLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlKSA9PiB7XG4gIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICBwYXRjaFhIUihnbG9iYWwpO1xuXG4gIGNvbnN0IFhIUl9UQVNLID0gem9uZVN5bWJvbCgneGhyVGFzaycpO1xuICBjb25zdCBYSFJfU1lOQyA9IHpvbmVTeW1ib2woJ3hoclN5bmMnKTtcbiAgY29uc3QgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgY29uc3QgWEhSX1NDSEVEVUxFRCA9IHpvbmVTeW1ib2woJ3hoclNjaGVkdWxlZCcpO1xuICBjb25zdCBYSFJfVVJMID0gem9uZVN5bWJvbCgneGhyVVJMJyk7XG4gIGNvbnN0IFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcblxuICBpbnRlcmZhY2UgWEhST3B0aW9ucyBleHRlbmRzIFRhc2tEYXRhIHtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBhcmdzOiBhbnlbXTtcbiAgICBhYm9ydGVkOiBib29sZWFuO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2hYSFIod2luZG93OiBhbnkpIHtcbiAgICBjb25zdCBYTUxIdHRwUmVxdWVzdCA9IHdpbmRvd1snWE1MSHR0cFJlcXVlc3QnXTtcbiAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlOiBhbnkgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0OiBhbnkpIHsgcmV0dXJuIHRhcmdldFtYSFJfVEFTS107IH1cblxuICAgIGxldCBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgbGV0IG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gd2luZG93WydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGVbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgY29uc3QgU0NIRURVTEVEID0gJ3NjaGVkdWxlZCc7XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzazogVGFzaykge1xuICAgICAgY29uc3QgZGF0YSA9IDxYSFJPcHRpb25zPnRhc2suZGF0YTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAvLyByZW1vdmUgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl07XG4gICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gKCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0LnJlYWR5U3RhdGUgPT09IHRhcmdldC5ET05FKSB7XG4gICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgLy8gcmVhZHlTdGF0ZT00IG11bHRpcGxlIHRpbWVzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRhc2sgc3RhdGUgaGVyZVxuICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHhociBoYXMgcmVnaXN0ZXJlZCBvbmxvYWQgbGlzdGVuZXJcbiAgICAgICAgICAgIC8vIGlmIHRoYXQgaXMgdGhlIGNhc2UsIHRoZSB0YXNrIHNob3VsZCBpbnZva2UgYWZ0ZXIgYWxsXG4gICAgICAgICAgICAvLyBvbmxvYWQgbGlzdGVuZXJzIGZpbmlzaC5cbiAgICAgICAgICAgIGNvbnN0IGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgIGlmIChsb2FkVGFza3MgJiYgbG9hZFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3Qgb3JpSW52b2tlID0gdGFzay5pbnZva2U7XG4gICAgICAgICAgICAgIHRhc2suaW52b2tlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBsb2FkIHRoZSB0YXNrcyBhZ2FpbiwgYmVjYXVzZSBpbiBvdGhlclxuICAgICAgICAgICAgICAgIC8vIGxvYWQgbGlzdGVuZXIsIHRoZXkgbWF5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgb3JpSW52b2tlLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsb2FkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIGVycm9yIG9jY3VycyB3aGVuIHhoci5zZW5kKClcbiAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcblxuICAgICAgY29uc3Qgc3RvcmVkVGFzazogVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICBpZiAoIXN0b3JlZFRhc2spIHtcbiAgICAgICAgdGFyZ2V0W1hIUl9UQVNLXSA9IHRhc2s7XG4gICAgICB9XG4gICAgICBzZW5kTmF0aXZlICEuYXBwbHkodGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ2FsbGJhY2soKSB7fVxuXG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2s6IFRhc2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSA8WEhST3B0aW9ucz50YXNrLmRhdGE7XG4gICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGFib3J0TmF0aXZlICEuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3Blbk5hdGl2ZSA9XG4gICAgICAgIHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnb3BlbicsICgpID0+IGZ1bmN0aW9uKHNlbGY6IGFueSwgYXJnczogYW55W10pIHtcbiAgICAgICAgICBzZWxmW1hIUl9TWU5DXSA9IGFyZ3NbMl0gPT0gZmFsc2U7XG4gICAgICAgICAgc2VsZltYSFJfVVJMXSA9IGFyZ3NbMV07XG4gICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUgIS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBYTUxIVFRQUkVRVUVTVF9TT1VSQ0UgPSAnWE1MSHR0cFJlcXVlc3Quc2VuZCc7XG4gICAgY29uc3QgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgIGNvbnN0IGZldGNoVGFza1NjaGVkdWxpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tTY2hlZHVsaW5nJyk7XG4gICAgY29uc3Qgc2VuZE5hdGl2ZTogRnVuY3Rpb258bnVsbCA9XG4gICAgICAgIHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnc2VuZCcsICgpID0+IGZ1bmN0aW9uKHNlbGY6IGFueSwgYXJnczogYW55W10pIHtcbiAgICAgICAgICBpZiAoKFpvbmUuY3VycmVudCBhcyBhbnkpW2ZldGNoVGFza1NjaGVkdWxpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBhIGZldGNoIGlzIHNjaGVkdWxpbmcsIHNvIHdlIGFyZSB1c2luZyB4aHIgdG8gcG9seWZpbGwgZmV0Y2hcbiAgICAgICAgICAgIC8vIGFuZCBiZWNhdXNlIHdlIGFscmVhZHkgc2NoZWR1bGUgbWFjcm9UYXNrIGZvciBmZXRjaCwgd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyBub3Qgc2NoZWR1bGUgYSBtYWNyb1Rhc2sgZm9yIHhociBhZ2FpblxuICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUgIS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgWEhSIGlzIHN5bmMgdGhlcmUgaXMgbm8gdGFzayB0byBzY2hlZHVsZSwganVzdCBleGVjdXRlIHRoZSBjb2RlLlxuICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUgIS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uczogWEhST3B0aW9ucyA9XG4gICAgICAgICAgICAgICAge3RhcmdldDogc2VsZiwgdXJsOiBzZWxmW1hIUl9VUkxdLCBpc1BlcmlvZGljOiBmYWxzZSwgYXJnczogYXJncywgYWJvcnRlZDogZmFsc2V9O1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKFxuICAgICAgICAgICAgICAgIFhNTEhUVFBSRVFVRVNUX1NPVVJDRSwgcGxhY2Vob2xkZXJDYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAvLyB4aHIgcmVxdWVzdCB0aHJvdyBlcnJvciB3aGVuIHNlbmRcbiAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGludm9rZSB0YXNrIGluc3RlYWQgb2YgbGVhdmluZyBhIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAvLyBwZW5kaW5nIG1hY3JvVGFza1xuICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBhYm9ydE5hdGl2ZSA9XG4gICAgICAgIHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnYWJvcnQnLCAoKSA9PiBmdW5jdGlvbihzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgY29uc3QgdGFzazogVGFzayA9IGZpbmRQZW5kaW5nVGFzayhzZWxmKTtcbiAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgLy8gRml4ICM1NjksIGNhbGwgYWJvcnQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIGRvbmUgd2lsbCBjYXVzZVxuICAgICAgICAgICAgLy8gbWFjcm9UYXNrIHRhc2sgY291bnQgYmUgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgKDxYSFJPcHRpb25zPnRhc2suZGF0YSkuYWJvcnRlZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgfSBlbHNlIGlmICgoWm9uZS5jdXJyZW50IGFzIGFueSlbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyB0aGUgYWJvcnQgaXMgY2FsbGVkIGZyb20gZmV0Y2ggcG9seWZpbGwsIHdlIG5lZWQgdG8gY2FsbCBuYXRpdmUgYWJvcnQgb2YgWEhSLlxuICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlICEuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHRyeWluZyB0byBhYm9ydCBhbiBYSFIgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBzZW50LCBzbyB0aGVyZSBpcyBub1xuICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAvLyB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG4gICAgICAgIH0pO1xuICB9XG59KTtcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ2dlb2xvY2F0aW9uJywgKGdsb2JhbDogYW55KSA9PiB7XG4gIC8vLyBHRU9fTE9DQVRJT05cbiAgaWYgKGdsb2JhbFsnbmF2aWdhdG9yJ10gJiYgZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuICAgIHBhdGNoUHJvdG90eXBlKGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24sIFsnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ3dhdGNoUG9zaXRpb24nXSk7XG4gIH1cbn0pO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnUHJvbWlzZVJlamVjdGlvbkV2ZW50JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSkgPT4ge1xuICAvLyBoYW5kbGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZTogYW55KSB7XG4gICAgICBjb25zdCBldmVudFRhc2tzID0gZmluZEV2ZW50VGFza3MoZ2xvYmFsLCBldnROYW1lKTtcbiAgICAgIGV2ZW50VGFza3MuZm9yRWFjaChldmVudFRhc2sgPT4ge1xuICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY29uc3QgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID0gZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXTtcbiAgICAgICAgaWYgKFByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwge3Byb21pc2U6IGUucHJvbWlzZSwgcmVhc29uOiBlLnJlamVjdGlvbn0pO1xuICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddKSB7XG4gICAgKFpvbmUgYXMgYW55KVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigndW5oYW5kbGVkcmVqZWN0aW9uJyk7XG5cbiAgICAoWm9uZSBhcyBhbnkpW3pvbmVTeW1ib2woJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID1cbiAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCdyZWplY3Rpb25oYW5kbGVkJyk7XG4gIH1cbn0pO1xuIl19