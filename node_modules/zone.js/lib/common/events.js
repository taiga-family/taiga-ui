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
        define("zone.js/lib/common/events", ["require", "exports", "tslib", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var utils_1 = require("zone.js/lib/common/utils");
    var passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            var options = Object.defineProperty({}, 'passive', { get: function () { passiveSupported = true; } });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    exports.zoneSymbolEventNames = {};
    exports.globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + utils_1.ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    var IMMEDIATE_PROPAGATION_SYMBOL = utils_1.zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + utils_1.FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + utils_1.TRUE_STR;
        var symbol = utils_1.ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = utils_1.ZONE_SYMBOL_PREFIX + trueEventName;
        exports.zoneSymbolEventNames[eventName] = {};
        exports.zoneSymbolEventNames[eventName][utils_1.FALSE_STR] = symbol;
        exports.zoneSymbolEventNames[eventName][utils_1.TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || utils_1.ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || utils_1.REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        var zoneSymbolAddEventListener = utils_1.zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        var invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            var delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = function (event) { return delegate.handleEvent(event); };
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            var options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        var globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[exports.zoneSymbolEventNames[event.type][utils_1.FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        var globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[exports.zoneSymbolEventNames[event.type][utils_1.TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            var useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            var validateHandler = patchOptions && patchOptions.vh;
            var checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            var returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            var proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = utils_1.ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            var eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            var taskData = {};
            var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            var nativeRemoveEventListener = proto[utils_1.zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            var nativeListeners = proto[utils_1.zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            var nativeRemoveAllListeners = proto[utils_1.zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            var nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[utils_1.zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */
            function buildEventListenerOptions(options, passive) {
                if (!passiveSupported && typeof options === 'object' && options) {
                    // doesn't support passive but user want to pass an object as options.
                    // this will not work on some old browser, so we just pass a boolean
                    // as useCapture parameter
                    return !!options.capture;
                }
                if (!passiveSupported || !passive) {
                    return options;
                }
                if (typeof options === 'boolean') {
                    return { capture: options, passive: true };
                }
                if (!options) {
                    return { passive: true };
                }
                if (typeof options === 'object' && options.passive !== false) {
                    return tslib_1.__assign(tslib_1.__assign({}, options), { passive: true });
                }
                return options;
            }
            var customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            var customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    var symbolEventNames = exports.zoneSymbolEventNames[task.eventName];
                    var symbolEventName = void 0;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? utils_1.TRUE_STR : utils_1.FALSE_STR];
                    }
                    var existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            var existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            var customScheduleNonGlobal = function (task) {
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            var compareTaskCallbackVsDelegate = function (task, delegate) {
                var typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            var blackListedEvents = Zone[utils_1.zoneSymbol('BLACK_LISTED_EVENTS')];
            var passiveEvents = _global[utils_1.zoneSymbol('PASSIVE_EVENTS')];
            var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
                if (returnTarget === void 0) { returnTarget = false; }
                if (prepend === void 0) { prepend = false; }
                return function () {
                    var target = this || _global;
                    var eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (utils_1.isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    var isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                    var options = buildEventListenerOptions(arguments[2], passive);
                    if (blackListedEvents) {
                        // check black list
                        for (var i = 0; i < blackListedEvents.length; i++) {
                            if (eventName === blackListedEvents[i]) {
                                if (passive) {
                                    return nativeListener.call(target, eventName, delegate, options);
                                }
                                else {
                                    return nativeListener.apply(this, arguments);
                                }
                            }
                        }
                    }
                    var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                    var once = options && typeof options === 'object' ? options.once : false;
                    var zone = Zone.current;
                    var symbolEventNames = exports.zoneSymbolEventNames[eventName];
                    if (!symbolEventNames) {
                        prepareEventNames(eventName, eventNameToString);
                        symbolEventNames = exports.zoneSymbolEventNames[eventName];
                    }
                    var symbolEventName = symbolEventNames[capture ? utils_1.TRUE_STR : utils_1.FALSE_STR];
                    var existingTasks = target[symbolEventName];
                    var isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (var i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    var source;
                    var constructorName = target.constructor['name'];
                    var targetSource = exports.globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var options = arguments[2];
                var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                var symbolEventNames = exports.zoneSymbolEventNames[eventName];
                var symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? utils_1.TRUE_STR : utils_1.FALSE_STR];
                }
                var existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    var onPropertySymbol = utils_1.ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var listeners = [];
                var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (var i = 0; i < tasks.length; i++) {
                    var task = tasks[i];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (!eventName) {
                    var keys = Object.keys(target);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        var evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var symbolEventNames = exports.zoneSymbolEventNames[eventName];
                    if (symbolEventNames) {
                        var symbolEventName = symbolEventNames[utils_1.FALSE_STR];
                        var symbolCaptureEventName = symbolEventNames[utils_1.TRUE_STR];
                        var tasks = target[symbolEventName];
                        var captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            var removeTasks = tasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            var removeTasks = captureTasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            utils_1.attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            utils_1.attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                utils_1.attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                utils_1.attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        var results = [];
        for (var i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    exports.patchEventTarget = patchEventTarget;
    function findEventTasks(target, eventName) {
        if (!eventName) {
            var foundTasks = [];
            for (var prop in target) {
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1];
                if (evtName && (!eventName || evtName === eventName)) {
                    var tasks = target[prop];
                    if (tasks) {
                        for (var i = 0; i < tasks.length; i++) {
                            foundTasks.push(tasks[i]);
                        }
                    }
                }
            }
            return foundTasks;
        }
        var symbolEventName = exports.zoneSymbolEventNames[eventName];
        if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = exports.zoneSymbolEventNames[eventName];
        }
        var captureFalseTasks = target[symbolEventName[utils_1.FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[utils_1.TRUE_STR]];
        if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
        }
        else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
                captureFalseTasks.slice();
        }
    }
    exports.findEventTasks = findEventTasks;
    function patchEventPrototype(global, api) {
        var Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            }; });
        }
    }
    exports.patchEventPrototype = patchEventPrototype;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvY29tbW9uL2V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7SUFFSCxrREFBb0w7SUFTcEwsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFFN0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsSUFBSTtZQUNGLElBQU0sT0FBTyxHQUNULE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFDLEdBQUcsRUFBRSxjQUFhLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDekYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMxQjtLQUNGO0lBRUQsb0VBQW9FO0lBQ3BFLElBQU0sOEJBQThCLEdBQWtCO1FBQ3BELElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztJQUVXLFFBQUEsb0JBQW9CLEdBQVEsRUFBRSxDQUFDO0lBQy9CLFFBQUEsYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUVyQyxJQUFNLHNCQUFzQixHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRywwQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVGLElBQU0sNEJBQTRCLEdBQUcsa0JBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRFLFNBQVMsaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxpQkFBaUQ7UUFDN0YsSUFB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QkFBbUIsQ0FBQyxNQUFXLEVBQUUsR0FBaUI7UUFDaEUsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDNUIsR0FBRyxDQUFDLFdBQVcsQ0FDWCxLQUFLLENBQUMsU0FBUyxFQUFFLDBCQUEwQixFQUMzQyxVQUFDLFFBQWtCLElBQUssT0FBQSxVQUFTLElBQVMsRUFBRSxJQUFXO2dCQUNyRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzFDLHNEQUFzRDtnQkFDdEQsbURBQW1EO2dCQUNuRCx1REFBdUQ7Z0JBQ3ZELFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBTnVCLENBTXZCLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQztJQWJELGtEQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5cbmltcG9ydCB7QUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgRkFMU0VfU1RSLCBPYmplY3RHZXRQcm90b3R5cGVPZiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiwgVFJVRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCwgYXR0YWNoT3JpZ2luVG9QYXRjaGVkLCBpc05vZGUsIHpvbmVTeW1ib2x9IGZyb20gJy4vdXRpbHMnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKiovXG5pbnRlcmZhY2UgRXZlbnRUYXNrRGF0YSBleHRlbmRzIFRhc2tEYXRhIHtcbiAgLy8gdXNlIGdsb2JhbCBjYWxsYmFjayBvciBub3RcbiAgcmVhZG9ubHkgdXNlRz86IGJvb2xlYW47XG59XG5cbmxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge2dldDogZnVuY3Rpb24oKSB7IHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlOyB9fSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gIH1cbn1cblxuLy8gYW4gaWRlbnRpZmllciB0byB0ZWxsIFpvbmVUYXNrIGRvIG5vdCBjcmVhdGUgYSBuZXcgaW52b2tlIGNsb3N1cmVcbmNvbnN0IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQTogRXZlbnRUYXNrRGF0YSA9IHtcbiAgdXNlRzogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IHpvbmVTeW1ib2xFdmVudE5hbWVzOiBhbnkgPSB7fTtcbmV4cG9ydCBjb25zdCBnbG9iYWxTb3VyY2VzOiBhbnkgPSB7fTtcblxuY29uc3QgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IG5ldyBSZWdFeHAoJ14nICsgWk9ORV9TWU1CT0xfUFJFRklYICsgJyhcXFxcdyspKHRydWV8ZmFsc2UpJCcpO1xuY29uc3QgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9IHpvbmVTeW1ib2woJ3Byb3BhZ2F0aW9uU3RvcHBlZCcpO1xuXG5mdW5jdGlvbiBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWU6IHN0cmluZywgZXZlbnROYW1lVG9TdHJpbmc/OiAoZXZlbnROYW1lOiBzdHJpbmcpID0+IHN0cmluZykge1xuICBjb25zdCBmYWxzZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgRkFMU0VfU1RSO1xuICBjb25zdCB0cnVlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBUUlVFX1NUUjtcbiAgY29uc3Qgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gIGNvbnN0IHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdGNoRXZlbnRUYXJnZXRPcHRpb25zIHtcbiAgLy8gdmFsaWRhdGVIYW5kbGVyXG4gIHZoPzogKG5hdGl2ZURlbGVnYXRlOiBhbnksIGRlbGVnYXRlOiBhbnksIHRhcmdldDogYW55LCBhcmdzOiBhbnkpID0+IGJvb2xlYW47XG4gIC8vIGFkZEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24gbmFtZVxuICBhZGQ/OiBzdHJpbmc7XG4gIC8vIHJlbW92ZUV2ZW50TGlzdGVuZXIgZnVuY3Rpb24gbmFtZVxuICBybT86IHN0cmluZztcbiAgLy8gcHJlcGVuZEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24gbmFtZVxuICBwcmVwZW5kPzogc3RyaW5nO1xuICAvLyBsaXN0ZW5lcnMgZnVuY3Rpb24gbmFtZVxuICBsaXN0ZW5lcnM/OiBzdHJpbmc7XG4gIC8vIHJlbW92ZUFsbExpc3RlbmVycyBmdW5jdGlvbiBuYW1lXG4gIHJtQWxsPzogc3RyaW5nO1xuICAvLyB1c2VHbG9iYWxDYWxsYmFjayBmbGFnXG4gIHVzZUc/OiBib29sZWFuO1xuICAvLyBjaGVjayBkdXBsaWNhdGUgZmxhZyB3aGVuIGFkZEV2ZW50TGlzdGVuZXJcbiAgY2hrRHVwPzogYm9vbGVhbjtcbiAgLy8gcmV0dXJuIHRhcmdldCBmbGFnIHdoZW4gYWRkRXZlbnRMaXN0ZW5lclxuICBydD86IGJvb2xlYW47XG4gIC8vIGV2ZW50IGNvbXBhcmUgaGFuZGxlclxuICBkaWZmPzogKHRhc2s6IGFueSwgZGVsZWdhdGU6IGFueSkgPT4gYm9vbGVhbjtcbiAgLy8gc3VwcG9ydCBwYXNzaXZlIG9yIG5vdFxuICBzdXBwb3J0UGFzc2l2ZT86IGJvb2xlYW47XG4gIC8vIGdldCBzdHJpbmcgZnJvbSBldmVudE5hbWUgKGluIG5vZGVqcywgZXZlbnROYW1lIG1heWJlIFN5bWJvbClcbiAgZXZlbnROYW1lVG9TdHJpbmc/OiAoZXZlbnROYW1lOiBhbnkpID0+IHN0cmluZztcbiAgLy8gdHJhbnNmZXIgZXZlbnROYW1lXG4gIHRyYW5zZmVyRXZlbnROYW1lPzogKGV2ZW50TmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KFxuICAgIF9nbG9iYWw6IGFueSwgYXBpczogYW55W10sIHBhdGNoT3B0aW9ucz86IFBhdGNoRXZlbnRUYXJnZXRPcHRpb25zKSB7XG4gIGNvbnN0IEFERF9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmFkZCkgfHwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgY29uc3QgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm0pIHx8IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFI7XG5cbiAgY29uc3QgTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMubGlzdGVuZXJzKSB8fCAnZXZlbnRMaXN0ZW5lcnMnO1xuICBjb25zdCBSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9XG4gICAgICAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ybUFsbCkgfHwgJ3JlbW92ZUFsbExpc3RlbmVycyc7XG5cbiAgY29uc3Qgem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXIgPSB6b25lU3ltYm9sKEFERF9FVkVOVF9MSVNURU5FUik7XG5cbiAgY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIEFERF9FVkVOVF9MSVNURU5FUiArICc6JztcblxuICBjb25zdCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gIGNvbnN0IFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgUFJFUEVORF9FVkVOVF9MSVNURU5FUiArICc6JztcblxuICBjb25zdCBpbnZva2VUYXNrID0gZnVuY3Rpb24odGFzazogYW55LCB0YXJnZXQ6IGFueSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgLy8gZm9yIGJldHRlciBwZXJmb3JtYW5jZSwgY2hlY2sgaXNSZW1vdmVkIHdoaWNoIGlzIHNldFxuICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICBpZiAodGFzay5pc1JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVsZWdhdGUgPSB0YXNrLmNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdvYmplY3QnICYmIGRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGJpbmQgdmVyc2lvbiBvZiBoYW5kbGVFdmVudCB3aGVuIGludm9rZVxuICAgICAgdGFzay5jYWxsYmFjayA9IChldmVudDogRXZlbnQpID0+IGRlbGVnYXRlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH1cbiAgICAvLyBpbnZva2Ugc3RhdGljIHRhc2suaW52b2tlXG4gICAgdGFzay5pbnZva2UodGFzaywgdGFyZ2V0LCBbZXZlbnRdKTtcbiAgICBjb25zdCBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLm9uY2UpIHtcbiAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgLy8gb25seSBicm93c2VyIG5lZWQgdG8gZG8gdGhpcywgbm9kZWpzIGV2ZW50RW1pdHRlciB3aWxsIGNhbCByZW1vdmVMaXN0ZW5lclxuICAgICAgLy8gaW5zaWRlIEV2ZW50RW1pdHRlci5vbmNlXG4gICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICB0YXJnZXRbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRhcmdldCwgZXZlbnQudHlwZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbih0aGlzOiB1bmtub3duLCBldmVudDogRXZlbnQpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgLy8gfHwgZ2xvYmFsIGlzIG5lZWRlZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICBjb25zdCB0YXJnZXQ6IGFueSA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgY29uc3QgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnQudHlwZV1bRkFMU0VfU1RSXV07XG4gICAgaWYgKHRhc2tzKSB7XG4gICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgY29uc3QgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50IGFzIGFueSlbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IHRydWVcbiAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrID0gZnVuY3Rpb24odGhpczogdW5rbm93biwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgIGV2ZW50ID0gZXZlbnQgfHwgX2dsb2JhbC5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGV2ZW50LnRhcmdldCBpcyBuZWVkZWQgZm9yIFNhbXN1bmcgVFYgYW5kIFNvdXJjZUJ1ZmZlclxuICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgY29uc3QgdGFyZ2V0OiBhbnkgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdW1RSVUVfU1RSXV07XG4gICAgaWYgKHRhc2tzKSB7XG4gICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgY29uc3QgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50IGFzIGFueSlbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqOiBhbnksIHBhdGNoT3B0aW9ucz86IFBhdGNoRXZlbnRUYXJnZXRPcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgdXNlR2xvYmFsQ2FsbGJhY2sgPSB0cnVlO1xuICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdXNlR2xvYmFsQ2FsbGJhY2sgPSBwYXRjaE9wdGlvbnMudXNlRztcbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcblxuICAgIGxldCBjaGVja0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICB9XG5cbiAgICBsZXQgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuVGFyZ2V0ID0gcGF0Y2hPcHRpb25zLnJ0O1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IG9iajtcbiAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KEFERF9FVkVOVF9MSVNURU5FUikpIHtcbiAgICAgIHByb3RvID0gT2JqZWN0R2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBpZiAoIXByb3RvICYmIG9ialtBRERfRVZFTlRfTElTVEVORVJdKSB7XG4gICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICBwcm90byA9IG9iajtcbiAgICB9XG5cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudE5hbWVUb1N0cmluZyA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZXZlbnROYW1lVG9TdHJpbmc7XG5cbiAgICAvLyBhIHNoYXJlZCBnbG9iYWwgdGFza0RhdGEgdG8gcGFzcyBkYXRhIGZvciBzY2hlZHVsZUV2ZW50VGFza1xuICAgIC8vIHNvIHdlIGRvIG5vdCBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QganVzdCBmb3IgcGFzcyBzb21lIGRhdGFcbiAgICBjb25zdCB0YXNrRGF0YTogYW55ID0ge307XG5cbiAgICBjb25zdCBuYXRpdmVBZGRFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXJdID0gcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICBjb25zdCBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG5cbiAgICBjb25zdCBuYXRpdmVMaXN0ZW5lcnMgPSBwcm90b1t6b25lU3ltYm9sKExJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICBjb25zdCBuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMgPSBwcm90b1t6b25lU3ltYm9sKFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICBwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl07XG5cbiAgICBsZXQgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXI6IGFueTtcbiAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgdXRpbCBmdW5jdGlvbiB3aWxsIGJ1aWxkIGFuIG9wdGlvbiBvYmplY3Qgd2l0aCBwYXNzaXZlIG9wdGlvblxuICAgICAqIHRvIGhhbmRsZSBhbGwgcG9zc2libGUgaW5wdXQgZnJvbSB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zKG9wdGlvbnM6IGFueSwgcGFzc2l2ZTogYm9vbGVhbikge1xuICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zKSB7XG4gICAgICAgIC8vIGRvZXNuJ3Qgc3VwcG9ydCBwYXNzaXZlIGJ1dCB1c2VyIHdhbnQgdG8gcGFzcyBhbiBvYmplY3QgYXMgb3B0aW9ucy5cbiAgICAgICAgLy8gdGhpcyB3aWxsIG5vdCB3b3JrIG9uIHNvbWUgb2xkIGJyb3dzZXIsIHNvIHdlIGp1c3QgcGFzcyBhIGJvb2xlYW5cbiAgICAgICAgLy8gYXMgdXNlQ2FwdHVyZSBwYXJhbWV0ZXJcbiAgICAgICAgcmV0dXJuICEhb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkIHx8ICFwYXNzaXZlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHtjYXB0dXJlOiBvcHRpb25zLCBwYXNzaXZlOiB0cnVlfTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge3Bhc3NpdmU6IHRydWV9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLnBhc3NpdmUgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7Li4ub3B0aW9ucywgcGFzc2l2ZTogdHJ1ZX07XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21TY2hlZHVsZUdsb2JhbCA9IGZ1bmN0aW9uKHRhc2s6IFRhc2spIHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB0YXNrIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSxcbiAgICAgIC8vIGp1c3QgcmV0dXJuLCBiZWNhdXNlIHdlIHVzZSB0aGUgc2hhcmVkIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGhlcmUuXG4gICAgICBpZiAodGFza0RhdGEuaXNFeGlzdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKFxuICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLFxuICAgICAgICAgIHRhc2tEYXRhLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjayxcbiAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24odGFzazogYW55KSB7XG4gICAgICAvLyBpZiB0YXNrIGlzIG5vdCBtYXJrZWQgYXMgaXNSZW1vdmVkLCB0aGlzIGNhbGwgaXMgZGlyZWN0bHlcbiAgICAgIC8vIGZyb20gWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzaywgd2Ugc2hvdWxkIHJlbW92ZSB0aGUgdGFza1xuICAgICAgLy8gZnJvbSB0YXNrc0xpc3Qgb2YgdGFyZ2V0IGZpcnN0XG4gICAgICBpZiAoIXRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1t0YXNrLmV2ZW50TmFtZV07XG4gICAgICAgIGxldCBzeW1ib2xFdmVudE5hbWU7XG4gICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgIHRhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBpZiBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgIC8vIHdlIHdpbGwgcmVhbGx5IHJlbW92ZSB0aGUgZ2xvYmFsIGV2ZW50IGNhbGxiYWNrLFxuICAgICAgLy8gaWYgbm90LCByZXR1cm5cbiAgICAgIGlmICghdGFzay5hbGxSZW1vdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwoXG4gICAgICAgICAgdGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLFxuICAgICAgICAgIHRhc2suY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrLm9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjdXN0b21TY2hlZHVsZU5vbkdsb2JhbCA9IGZ1bmN0aW9uKHRhc2s6IFRhc2spIHtcbiAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmNhbGwoXG4gICAgICAgICAgdGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24odGFzazogVGFzaykge1xuICAgICAgcmV0dXJuIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLmNhbGwoXG4gICAgICAgICAgdGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3VzdG9tQ2FuY2VsTm9uR2xvYmFsID0gZnVuY3Rpb24odGFzazogYW55KSB7XG4gICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2sub3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21TY2hlZHVsZUdsb2JhbCA6IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsO1xuICAgIGNvbnN0IGN1c3RvbUNhbmNlbCA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tQ2FuY2VsR2xvYmFsIDogY3VzdG9tQ2FuY2VsTm9uR2xvYmFsO1xuXG4gICAgY29uc3QgY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGUgPSBmdW5jdGlvbih0YXNrOiBhbnksIGRlbGVnYXRlOiBhbnkpIHtcbiAgICAgIGNvbnN0IHR5cGVPZkRlbGVnYXRlID0gdHlwZW9mIGRlbGVnYXRlO1xuICAgICAgcmV0dXJuICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSkgfHxcbiAgICAgICAgICAodHlwZU9mRGVsZWdhdGUgPT09ICdvYmplY3QnICYmIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9PT0gZGVsZWdhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wYXJlID1cbiAgICAgICAgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZikgPyBwYXRjaE9wdGlvbnMuZGlmZiA6IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlO1xuXG4gICAgY29uc3QgYmxhY2tMaXN0ZWRFdmVudHM6IHN0cmluZ1tdID0gKFpvbmUgYXMgYW55KVt6b25lU3ltYm9sKCdCTEFDS19MSVNURURfRVZFTlRTJyldO1xuICAgIGNvbnN0IHBhc3NpdmVFdmVudHM6IHN0cmluZ1tdID0gX2dsb2JhbFt6b25lU3ltYm9sKCdQQVNTSVZFX0VWRU5UUycpXTtcblxuICAgIGNvbnN0IG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKFxuICAgICAgICBuYXRpdmVMaXN0ZW5lcjogYW55LCBhZGRTb3VyY2U6IHN0cmluZywgY3VzdG9tU2NoZWR1bGVGbjogYW55LCBjdXN0b21DYW5jZWxGbjogYW55LFxuICAgICAgICByZXR1cm5UYXJnZXQgPSBmYWxzZSwgcHJlcGVuZCA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZSAmJiBldmVudE5hbWUgPT09ICd1bmNhdWdodEV4Y2VwdGlvbicpIHtcbiAgICAgICAgICAvLyBkb24ndCBwYXRjaCB1bmNhdWdodEV4Y2VwdGlvbiBvZiBub2RlanMgdG8gcHJldmVudCBlbmRsZXNzIGxvb3BcbiAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbid0IGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSBmdW5jdGlvbiBmb3IgaGFuZGxlRXZlbnRcbiAgICAgICAgLy8gY2FzZSBoZXJlIHRvIGltcHJvdmUgYWRkRXZlbnRMaXN0ZW5lciBwZXJmb3JtYW5jZVxuICAgICAgICAvLyB3ZSB3aWxsIGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSB3aGVuIGludm9rZVxuICAgICAgICBsZXQgaXNIYW5kbGVFdmVudCA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCFkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzSGFuZGxlRXZlbnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZUxpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFzc2l2ZSA9XG4gICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkICYmICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zKGFyZ3VtZW50c1syXSwgcGFzc2l2ZSk7XG5cbiAgICAgICAgaWYgKGJsYWNrTGlzdGVkRXZlbnRzKSB7XG4gICAgICAgICAgLy8gY2hlY2sgYmxhY2sgbGlzdFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxhY2tMaXN0ZWRFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IGJsYWNrTGlzdGVkRXZlbnRzW2ldKSB7XG4gICAgICAgICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBldmVudE5hbWUsIGRlbGVnYXRlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICAgIGNvbnN0IG9uY2UgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyA/IG9wdGlvbnMub25jZSA6IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIGxldCBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZyk7XG4gICAgICAgICAgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICBsZXQgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICBsZXQgaXNFeGlzdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0YXNrIHJlZ2lzdGVyZWRcbiAgICAgICAgICBpc0V4aXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoY2hlY2tEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoY29tcGFyZShleGlzdGluZ1Rhc2tzW2ldLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBzYW1lIGNhbGxiYWNrLCBzYW1lIGNhcHR1cmUsIHNhbWUgZXZlbnQgbmFtZSwganVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpc3RpbmdUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvdXJjZTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ107XG4gICAgICAgIGNvbnN0IHRhcmdldFNvdXJjZSA9IGdsb2JhbFNvdXJjZXNbY29uc3RydWN0b3JOYW1lXTtcbiAgICAgICAgaWYgKHRhcmdldFNvdXJjZSkge1xuICAgICAgICAgIHNvdXJjZSA9IHRhcmdldFNvdXJjZVtldmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgc291cmNlID0gY29uc3RydWN0b3JOYW1lICsgYWRkU291cmNlICtcbiAgICAgICAgICAgICAgKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSBhIG5ldyBvYmplY3QgYXMgdGFzay5kYXRhIHRvIHBhc3MgdGhvc2UgdGhpbmdzXG4gICAgICAgIC8vIGp1c3QgdXNlIHRoZSBnbG9iYWwgc2hhcmVkIG9uZVxuICAgICAgICB0YXNrRGF0YS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAvLyBpZiBhZGRFdmVudExpc3RlbmVyIHdpdGggb25jZSBvcHRpb25zLCB3ZSBkb24ndCBwYXNzIGl0IHRvXG4gICAgICAgICAgLy8gbmF0aXZlIGFkZEV2ZW50TGlzdGVuZXIsIGluc3RlYWQgd2Uga2VlcCB0aGUgb25jZSBzZXR0aW5nXG4gICAgICAgICAgLy8gYW5kIGhhbmRsZSBvdXJzZWx2ZXMuXG4gICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5vbmNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGFza0RhdGEudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0YXNrRGF0YS5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0YXNrRGF0YS5pc0V4aXN0aW5nID0gaXNFeGlzdGluZztcblxuICAgICAgICBjb25zdCBkYXRhID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAoZGF0YSBhcyBhbnkpLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrOiBhbnkgPVxuICAgICAgICAgICAgem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbik7XG5cbiAgICAgICAgLy8gc2hvdWxkIGNsZWFyIHRhc2tEYXRhLnRhcmdldCB0byBhdm9pZCBtZW1vcnkgbGVha1xuICAgICAgICAvLyBpc3N1ZSwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA0NDJcbiAgICAgICAgdGFza0RhdGEudGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICAvLyBuZWVkIHRvIGNsZWFyIHVwIHRhc2tEYXRhIGJlY2F1c2UgaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgKGRhdGEgYXMgYW55KS50YXNrRGF0YSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICBvcHRpb25zLm9uY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBwYXNzaXZlLCBhbmQgd2UgcGFzcyBhbiBvcHRpb24gb2JqZWN0XG4gICAgICAgICAgLy8gdG8gYWRkRXZlbnRMaXN0ZW5lciwgd2Ugc2hvdWxkIHNhdmUgdGhlIG9wdGlvbnMgdG8gdGFza1xuICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIHRhc2suZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBpZiAoaXNIYW5kbGVFdmVudCkge1xuICAgICAgICAgIC8vIHNhdmUgb3JpZ2luYWwgZGVsZWdhdGUgZm9yIGNvbXBhcmUgdG8gY2hlY2sgZHVwbGljYXRlXG4gICAgICAgICAgKHRhc2sgYXMgYW55KS5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmVwZW5kKSB7XG4gICAgICAgICAgZXhpc3RpbmdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4aXN0aW5nVGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKFxuICAgICAgICBuYXRpdmVBZGRFdmVudExpc3RlbmVyLCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsLFxuICAgICAgICByZXR1cm5UYXJnZXQpO1xuICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIoXG4gICAgICAgICAgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsXG4gICAgICAgICAgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQsIHRydWUpO1xuICAgIH1cblxuICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG5cbiAgICAgIGNvbnN0IGNhcHR1cmUgPSAhb3B0aW9ucyA/IGZhbHNlIDogdHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJyA/IHRydWUgOiBvcHRpb25zLmNhcHR1cmU7XG4gICAgICBjb25zdCBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmICghZGVsZWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJlxuICAgICAgICAgICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZTtcbiAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBzeW1ib2xFdmVudE5hbWUgJiYgdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFzaywgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgIChleGlzdGluZ1Rhc2sgYXMgYW55KS5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAoZXhpc3RpbmdUYXNrIGFzIGFueSkuYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgLy8gaW4gdGhlIHRhcmdldCwgd2UgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyBhZGRlZCBieSBvbl9wcm9wZXJ0eVxuICAgICAgICAgICAgICAvLyBzdWNoIGFzIHRhcmdldC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7fSwgc28gd2UgbmVlZCB0byBjbGVhciB0aGlzIGludGVybmFsXG4gICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvbyBpZiBhbGwgZGVsZWdhdGVzIGFsbCByZW1vdmVkXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uUHJvcGVydHlTeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyAnT05fUFJPUEVSVFknICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIHRhcmdldFtvblByb3BlcnR5U3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4aXN0aW5nVGFzay56b25lLmNhbmNlbFRhc2soZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlzc3VlIDkzMCwgZGlkbid0IGZpbmQgdGhlIGV2ZW50IG5hbWUgb3IgY2FsbGJhY2tcbiAgICAgIC8vIGZyb20gem9uZSBrZXB0IGV4aXN0aW5nVGFza3MsIHRoZSBjYWxsYmFjayBtYXliZVxuICAgICAgLy8gYWRkZWQgb3V0c2lkZSBvZiB6b25lLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgIC8vIHRvIHRyeSB0byByZW1vdmUgaXQuXG4gICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVyczogYW55W10gPSBbXTtcbiAgICAgIGNvbnN0IHRhc2tzID1cbiAgICAgICAgICBmaW5kRXZlbnRUYXNrcyh0YXJnZXQsIGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzazogYW55ID0gdGFza3NbaV07XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGRlbGVnYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfTtcblxuICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuXG4gICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHByb3AgPSBrZXlzW2ldO1xuICAgICAgICAgIGNvbnN0IG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgLy8gaW4gbm9kZWpzIEV2ZW50RW1pdHRlciwgcmVtb3ZlTGlzdGVuZXIgZXZlbnQgaXNcbiAgICAgICAgICAvLyB1c2VkIGZvciBtb25pdG9yaW5nIHRoZSByZW1vdmVMaXN0ZW5lciBjYWxsLFxuICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgLy8gYWxsIG90aGVyIGV2ZW50TGlzdGVuZXJzIGFyZSByZW1vdmVkXG4gICAgICAgICAgaWYgKGV2dE5hbWUgJiYgZXZ0TmFtZSAhPT0gJ3JlbW92ZUxpc3RlbmVyJykge1xuICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldnROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHJlbW92ZUxpc3RlbmVyIGxpc3RlbmVyIGZpbmFsbHlcbiAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tGQUxTRV9TVFJdO1xuICAgICAgICAgIGNvbnN0IHN5bWJvbENhcHR1cmVFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW1RSVUVfU1RSXTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgY29uc3QgY2FwdHVyZVRhc2tzID0gdGFyZ2V0W3N5bWJvbENhcHR1cmVFdmVudE5hbWVdO1xuXG4gICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FwdHVyZVRhc2tzKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IGNhcHR1cmVUYXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgfVxuICAgIGlmIChuYXRpdmVMaXN0ZW5lcnMpIHtcbiAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVMaXN0ZW5lcnMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxldCByZXN1bHRzOiBhbnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRzW2ldID0gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMoYXBpc1tpXSwgcGF0Y2hPcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEV2ZW50VGFza3ModGFyZ2V0OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nKTogVGFza1tdIHtcbiAgaWYgKCFldmVudE5hbWUpIHtcbiAgICBjb25zdCBmb3VuZFRhc2tzOiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICBjb25zdCBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICBpZiAoZXZ0TmFtZSAmJiAoIWV2ZW50TmFtZSB8fCBldnROYW1lID09PSBldmVudE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzOiBhbnkgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvdW5kVGFza3MucHVzaCh0YXNrc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFRhc2tzO1xuICB9XG4gIGxldCBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICBpZiAoIXN5bWJvbEV2ZW50TmFtZSkge1xuICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSk7XG4gICAgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgfVxuICBjb25zdCBjYXB0dXJlRmFsc2VUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbRkFMU0VfU1RSXV07XG4gIGNvbnN0IGNhcHR1cmVUcnVlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW1RSVUVfU1RSXV07XG4gIGlmICghY2FwdHVyZUZhbHNlVGFza3MpIHtcbiAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVUcnVlVGFza3Muc2xpY2UoKSA6IFtdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZUZhbHNlVGFza3MuY29uY2F0KGNhcHR1cmVUcnVlVGFza3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmVGYWxzZVRhc2tzLnNsaWNlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsOiBhbnksIGFwaTogX1pvbmVQcml2YXRlKSB7XG4gIGNvbnN0IEV2ZW50ID0gZ2xvYmFsWydFdmVudCddO1xuICBpZiAoRXZlbnQgJiYgRXZlbnQucHJvdG90eXBlKSB7XG4gICAgYXBpLnBhdGNoTWV0aG9kKFxuICAgICAgICBFdmVudC5wcm90b3R5cGUsICdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nLFxuICAgICAgICAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiBmdW5jdGlvbihzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgc2VsZltJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9IHRydWU7XG4gICAgICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAgLy8gaW4gY2FzZSBpbiBzb21lIGh5YnJpZCBhcHBsaWNhdGlvbiwgc29tZSBwYXJ0IG9mXG4gICAgICAgICAgLy8gYXBwbGljYXRpb24gd2lsbCBiZSBjb250cm9sbGVkIGJ5IHpvbmUsIHNvbWUgYXJlIG5vdFxuICAgICAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgfVxufVxuIl19