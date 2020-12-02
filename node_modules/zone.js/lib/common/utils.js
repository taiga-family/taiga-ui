/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/common/utils", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    exports.ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    exports.ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    exports.ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    exports.ObjectCreate = Object.create;
    /** Array.prototype.slice */
    exports.ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    exports.ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    exports.REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    exports.ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(exports.ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    exports.ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(exports.REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    exports.TRUE_STR = 'true';
    /** false string const */
    exports.FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    exports.ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    exports.wrapWithCurrentZone = wrapWithCurrentZone;
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    exports.scheduleMacroTaskWithCurrentZone = scheduleMacroTaskWithCurrentZone;
    exports.zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;
    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    exports.bindArguments = bindArguments;
    function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];
        var _loop_1 = function (i) {
            var name_1 = fnNames[i];
            var delegate = prototype[name_1];
            if (delegate) {
                var prototypeDesc = exports.ObjectGetOwnPropertyDescriptor(prototype, name_1);
                if (!isPropertyWritable(prototypeDesc)) {
                    return "continue";
                }
                prototype[name_1] = (function (delegate) {
                    var patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        };
        for (var i = 0; i < fnNames.length; i++) {
            _loop_1(i);
        }
    }
    exports.patchPrototype = patchPrototype;
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    exports.isPropertyWritable = isPropertyWritable;
    exports.isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    exports.isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    exports.isBrowser = !exports.isNode && !exports.isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    exports.isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !exports.isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};
    var wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        var eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = exports.zoneSymbol('ON_PROPERTY' + event.type);
        }
        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;
        if (exports.isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            var errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        var desc = exports.ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            var prototypeDesc = exports.ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        var onPropPatchedSymbol = exports.zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = exports.zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            var previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            var listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                var value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        exports.ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    exports.patchProperty = patchProperty;
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (var i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            var onProperties = [];
            for (var prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (var j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    exports.patchOnProperties = patchOnProperties;
    var originalInstanceKey = exports.zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[exports.zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            var a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () { });
        var prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    exports.ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () { return this[originalInstanceKey][prop]; }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    exports.patchClass = patchClass;
    function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
            return;
        }
        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
            var desc = Object.getOwnPropertyDescriptor(src, symbol);
            Object.defineProperty(dest, symbol, {
                get: function () { return src[symbol]; },
                set: function (value) {
                    if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                        // if src[symbol] is not writable or not have a setter, just return
                        return;
                    }
                    src[symbol] = value;
                },
                enumerable: desc ? desc.enumerable : true,
                configurable: desc ? desc.configurable : true
            });
        });
    }
    exports.copySymbolProperties = copySymbolProperties;
    var shouldCopySymbolProperties = false;
    function setShouldCopySymbolProperties(flag) {
        shouldCopySymbolProperties = flag;
    }
    exports.setShouldCopySymbolProperties = setShouldCopySymbolProperties;
    function patchMethod(target, name, patchFn) {
        var proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = exports.ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        var delegateName = exports.zoneSymbol(name);
        var delegate = null;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            var desc = proto && exports.ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                var patchDelegate_1 = patchFn(delegate, delegateName, name);
                proto[name] = function () { return patchDelegate_1(this, arguments); };
                attachOriginToPatched(proto[name], delegate);
                if (shouldCopySymbolProperties) {
                    copySymbolProperties(delegate, proto[name]);
                }
            }
        }
        return delegate;
    }
    exports.patchMethod = patchMethod;
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;
        function scheduleTask(task) {
            var data = task.data;
            data.args[data.cbIdx] = function () { task.invoke.apply(this, arguments); };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
            var meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        }; });
    }
    exports.patchMacroTask = patchMacroTask;
    function patchMicroTask(obj, funcName, metaCreator) {
        var setNative = null;
        function scheduleTask(task) {
            var data = task.data;
            data.args[data.cbIdx] = function () { task.invoke.apply(this, arguments); };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
            var meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return Zone.current.scheduleMicroTask(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        }; });
    }
    exports.patchMicroTask = patchMicroTask;
    function attachOriginToPatched(patched, original) {
        patched[exports.zoneSymbol('OriginalDelegate')] = original;
    }
    exports.attachOriginToPatched = attachOriginToPatched;
    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;
    function isIE() {
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    exports.isIE = isIE;
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }
    exports.isIEOrEdge = isIEOrEdge;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9jb21tb24vdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0g7Ozs7R0FJRzs7Ozs7Ozs7Ozs7O0lBRUgsNkJBQTZCO0lBRTdCLG9EQUFvRDtJQUNwRCxzQ0FBc0M7SUFDekIsUUFBQSw4QkFBOEIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7SUFDOUUsNEJBQTRCO0lBQ2YsUUFBQSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzFELDRCQUE0QjtJQUNmLFFBQUEsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxRCxvQkFBb0I7SUFDUCxRQUFBLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzFDLDRCQUE0QjtJQUNmLFFBQUEsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hELG9DQUFvQztJQUN2QixRQUFBLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDO0lBQ3pELHVDQUF1QztJQUMxQixRQUFBLHlCQUF5QixHQUFHLHFCQUFxQixDQUFDO0lBQy9ELGtDQUFrQztJQUNyQixRQUFBLDhCQUE4QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQXNCLENBQUMsQ0FBQztJQUN0RixxQ0FBcUM7SUFDeEIsUUFBQSxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlDQUF5QixDQUFDLENBQUM7SUFDNUYsd0JBQXdCO0lBQ1gsUUFBQSxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQy9CLHlCQUF5QjtJQUNaLFFBQUEsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUNqQyx1Q0FBdUM7SUFDMUIsUUFBQSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRELFNBQWdC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VUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0YsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FDZjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFmRCxnQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogU3VwcHJlc3MgY2xvc3VyZSBjb21waWxlciBlcnJvcnMgYWJvdXQgdW5rbm93biAnWm9uZScgdmFyaWFibGVcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFycyxnbG9iYWxUaGlzLG1pc3NpbmdSZXF1aXJlfVxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiLz5cblxuLy8gaXNzdWUgIzk4OSwgdG8gcmVkdWNlIGJ1bmRsZSBzaXplLCB1c2Ugc2hvcnQgbmFtZVxuLyoqIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKi9cbmV4cG9ydCBjb25zdCBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuLyoqIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLyoqIE9iamVjdC5nZXRQcm90b3R5cGVPZiAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdEdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuLyoqIE9iamVjdC5jcmVhdGUgKi9cbmV4cG9ydCBjb25zdCBPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuLyoqIEFycmF5LnByb3RvdHlwZS5zbGljZSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4vKiogYWRkRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuLyoqIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG5leHBvcnQgY29uc3QgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbi8qKiB6b25lU3ltYm9sIGFkZEV2ZW50TGlzdGVuZXIgKi9cbmV4cG9ydCBjb25zdCBaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIgPSBab25lLl9fc3ltYm9sX18oQUREX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4vKiogem9uZVN5bWJvbCByZW1vdmVFdmVudExpc3RlbmVyICovXG5leHBvcnQgY29uc3QgWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHRydWUgc3RyaW5nIGNvbnN0ICovXG5leHBvcnQgY29uc3QgVFJVRV9TVFIgPSAndHJ1ZSc7XG4vKiogZmFsc2Ugc3RyaW5nIGNvbnN0ICovXG5leHBvcnQgY29uc3QgRkFMU0VfU1RSID0gJ2ZhbHNlJztcbi8qKiBab25lIHN5bWJvbCBwcmVmaXggc3RyaW5nIGNvbnN0LiAqL1xuZXhwb3J0IGNvbnN0IFpPTkVfU1lNQk9MX1BSRUZJWCA9IFpvbmUuX19zeW1ib2xfXygnJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwV2l0aEN1cnJlbnRab25lPFQgZXh0ZW5kcyBGdW5jdGlvbj4oY2FsbGJhY2s6IFQsIHNvdXJjZTogc3RyaW5nKTogVCB7XG4gIHJldHVybiBab25lLmN1cnJlbnQud3JhcChjYWxsYmFjaywgc291cmNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKFxuICAgIHNvdXJjZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIGRhdGE/OiBUYXNrRGF0YSwgY3VzdG9tU2NoZWR1bGU/OiAodGFzazogVGFzaykgPT4gdm9pZCxcbiAgICBjdXN0b21DYW5jZWw/OiAodGFzazogVGFzaykgPT4gdm9pZCk6IE1hY3JvVGFzayB7XG4gIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCk7XG59XG5cbi8vIEhhY2sgc2luY2UgVHlwZVNjcmlwdCBpc24ndCBjb21waWxpbmcgdGhpcyBmb3IgYSB3b3JrZXIuXG5kZWNsYXJlIGNvbnN0IFdvcmtlckdsb2JhbFNjb3BlOiBhbnk7XG5cbmV4cG9ydCBjb25zdCB6b25lU3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fO1xuY29uc3QgaXNXaW5kb3dFeGlzdHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmNvbnN0IGludGVybmFsV2luZG93OiBhbnkgPSBpc1dpbmRvd0V4aXN0cyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbmNvbnN0IF9nbG9iYWw6IGFueSA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcblxuY29uc3QgUkVNT1ZFX0FUVFJJQlVURSA9ICdyZW1vdmVBdHRyaWJ1dGUnO1xuY29uc3QgTlVMTF9PTl9QUk9QX1ZBTFVFOiBbYW55XSA9IFtudWxsXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJnczogYW55W10sIHNvdXJjZTogc3RyaW5nKTogYW55W10ge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1tpXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlOiBhbnksIGZuTmFtZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gZm5OYW1lc1tpXTtcbiAgICBjb25zdCBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXTtcbiAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgIGNvbnN0IHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBuYW1lKTtcbiAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcHJvdG90eXBlW25hbWVdID0gKChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGF0Y2hlZDogYW55ID0gZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKDxhbnk+YXJndW1lbnRzLCBzb3VyY2UgKyAnLicgKyBuYW1lKSk7XG4gICAgICAgIH07XG4gICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBkZWxlZ2F0ZSk7XG4gICAgICAgIHJldHVybiBwYXRjaGVkO1xuICAgICAgfSkoZGVsZWdhdGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3BlcnR5RGVzYzogYW55KSB7XG4gIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG5cbmV4cG9ydCBjb25zdCBpc1dlYldvcmtlcjogYm9vbGVhbiA9XG4gICAgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKTtcblxuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG5leHBvcnQgY29uc3QgaXNOb2RlOiBib29sZWFuID1cbiAgICAoISgnbncnIGluIF9nbG9iYWwpICYmIHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcblxuZXhwb3J0IGNvbnN0IGlzQnJvd3NlcjogYm9vbGVhbiA9XG4gICAgIWlzTm9kZSAmJiAhaXNXZWJXb3JrZXIgJiYgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuXG4vLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG5leHBvcnQgY29uc3QgaXNNaXg6IGJvb2xlYW4gPSB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJlxuICAgICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcblxuY29uc3Qgem9uZVN5bWJvbEV2ZW50TmFtZXM6IHtbZXZlbnROYW1lOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbmNvbnN0IHdyYXBGbiA9IGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIGV2ZW50OiBFdmVudCkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdO1xuICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdID0gem9uZVN5bWJvbCgnT05fUFJPUEVSVFknICsgZXZlbnQudHlwZSk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgY29uc3QgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKGlzQnJvd3NlciAmJiB0YXJnZXQgPT09IGludGVybmFsV2luZG93ICYmIGV2ZW50LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAvLyB3aW5kb3cub25lcnJvciBoYXZlIGRpZmZlcmVudCBzaWduaXR1cmVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yI3dpbmRvdy5vbmVycm9yXG4gICAgLy8gYW5kIG9uZXJyb3IgY2FsbGJhY2sgd2lsbCBwcmV2ZW50IGRlZmF1bHQgd2hlbiBjYWxsYmFjayByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IGVycm9yRXZlbnQ6IEVycm9yRXZlbnQgPSBldmVudCBhcyBhbnk7XG4gICAgcmVzdWx0ID0gbGlzdGVuZXIgJiZcbiAgICAgICAgbGlzdGVuZXIuY2FsbChcbiAgICAgICAgICAgIHRoaXMsIGVycm9yRXZlbnQubWVzc2FnZSwgZXJyb3JFdmVudC5maWxlbmFtZSwgZXJyb3JFdmVudC5saW5lbm8sIGVycm9yRXZlbnQuY29sbm8sXG4gICAgICAgICAgICBlcnJvckV2ZW50LmVycm9yKTtcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBsaXN0ZW5lciAmJiBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIHByb3RvdHlwZT86IGFueSkge1xuICBsZXQgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgLy8gd2hlbiBwYXRjaCB3aW5kb3cgb2JqZWN0LCB1c2UgcHJvdG90eXBlIHRvIGNoZWNrIHByb3AgZXhpc3Qgb3Igbm90XG4gICAgY29uc3QgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3ApO1xuICAgIGlmIChwcm90b3R5cGVEZXNjKSB7XG4gICAgICBkZXNjID0ge2VudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX07XG4gICAgfVxuICB9XG4gIC8vIGlmIHRoZSBkZXNjcmlwdG9yIG5vdCBleGlzdHMgb3IgaXMgbm90IGNvbmZpZ3VyYWJsZVxuICAvLyBqdXN0IHJldHVyblxuICBpZiAoIWRlc2MgfHwgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb25Qcm9wUGF0Y2hlZFN5bWJvbCA9IHpvbmVTeW1ib2woJ29uJyArIHByb3AgKyAncGF0Y2hlZCcpO1xuICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAvLyBkZWxldGluZyB0aGUgd3JpdGFibGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXZvaWRzIHRoaXMgZXJyb3I6XG4gIC8vXG4gIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAvLyBnZXR0ZXIgb3Igc2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZFxuICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgZGVsZXRlIGRlc2MudmFsdWU7XG4gIGNvbnN0IG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICBjb25zdCBvcmlnaW5hbERlc2NTZXQgPSBkZXNjLnNldDtcblxuICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgY29uc3QgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG5cbiAgbGV0IGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gIH1cblxuICBkZXNjLnNldCA9IGZ1bmN0aW9uKHRoaXM6IEV2ZW50U291cmNlLCBuZXdWYWx1ZSkge1xuICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgIGxldCB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHByZXZpb3VzVmFsdWUgPSAodGFyZ2V0IGFzIGFueSlbZXZlbnROYW1lU3ltYm9sXTtcbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4pO1xuICAgIH1cblxuICAgIC8vIGlzc3VlICM5NzgsIHdoZW4gb25sb2FkIGhhbmRsZXIgd2FzIGFkZGVkIGJlZm9yZSBsb2FkaW5nIHpvbmUuanNcbiAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgaWYgKG9yaWdpbmFsRGVzY1NldCkge1xuICAgICAgb3JpZ2luYWxEZXNjU2V0LmFwcGx5KHRhcmdldCwgTlVMTF9PTl9QUk9QX1ZBTFVFKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAodGFyZ2V0IGFzIGFueSlbZXZlbnROYW1lU3ltYm9sXSA9IG5ld1ZhbHVlO1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRhcmdldCBhcyBhbnkpW2V2ZW50TmFtZVN5bWJvbF0gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGUgZ2V0dGVyIHdvdWxkIHJldHVybiB1bmRlZmluZWQgZm9yIHVuYXNzaWduZWQgcHJvcGVydGllcyBidXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYW5cbiAgLy8gdW5hc3NpZ25lZCBwcm9wZXJ0eSBpcyBudWxsXG4gIGRlc2MuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyID0gKHRhcmdldCBhcyBhbnkpW2V2ZW50TmFtZVN5bWJvbF07XG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQgJiYgb3JpZ2luYWxEZXNjR2V0LmNhbGwodGhpcyk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZGVzYyAhLnNldCAhLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mKHRhcmdldCBhcyBhbnkpW1JFTU9WRV9BVFRSSUJVVEVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgKHRhcmdldCBhcyBhbnkpLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIE9iamVjdERlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG5cbiAgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iajogYW55LCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSB8IG51bGwsIHByb3RvdHlwZT86IGFueSkge1xuICBpZiAocHJvcGVydGllcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldLCBwcm90b3R5cGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvblByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgICBpZiAocHJvcC5zdWJzdHIoMCwgMikgPT0gJ29uJykge1xuICAgICAgICBvblByb3BlcnRpZXMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0sIHByb3RvdHlwZSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG5cbi8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xuICBjb25zdCBPcmlnaW5hbENsYXNzID0gX2dsb2JhbFtjbGFzc05hbWVdO1xuICBpZiAoIU9yaWdpbmFsQ2xhc3MpIHJldHVybjtcbiAgLy8ga2VlcCBvcmlnaW5hbCBjbGFzcyBpbiBnbG9iYWxcbiAgX2dsb2JhbFt6b25lU3ltYm9sKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcblxuICBfZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhID0gYmluZEFyZ3VtZW50cyg8YW55PmFyZ3VtZW50cywgY2xhc3NOYW1lKTtcbiAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGF0dGFjaCBvcmlnaW5hbCBkZWxlZ2F0ZSB0byBwYXRjaGVkIGZ1bmN0aW9uXG4gIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChfZ2xvYmFsW2NsYXNzTmFtZV0sIE9yaWdpbmFsQ2xhc3MpO1xuXG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoZnVuY3Rpb24oKSB7fSk7XG5cbiAgbGV0IHByb3A7XG4gIGZvciAocHJvcCBpbiBpbnN0YW5jZSkge1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgIGlmIChjbGFzc05hbWUgPT09ICdYTUxIdHRwUmVxdWVzdCcgJiYgcHJvcCA9PT0gJ3Jlc3BvbnNlQmxvYicpIGNvbnRpbnVlO1xuICAgIChmdW5jdGlvbihwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAvLyBrZWVwIGNhbGxiYWNrIGluIHdyYXBwZWQgZnVuY3Rpb24gc28gd2UgY2FuXG4gICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgb25lLlxuICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSwgZm4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07IH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfShwcm9wKSk7XG4gIH1cblxuICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBfZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weVN5bWJvbFByb3BlcnRpZXMoc3JjOiBhbnksIGRlc3Q6IGFueSkge1xuICBpZiAodHlwZW9mKE9iamVjdCBhcyBhbnkpLmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzeW1ib2xzOiBhbnkgPSAoT2JqZWN0IGFzIGFueSkuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNyYyk7XG4gIHN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sOiBhbnkpID0+IHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzcmMsIHN5bWJvbCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIHN5bWJvbCwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHNyY1tzeW1ib2xdOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmIChkZXNjICYmICghZGVzYy53cml0YWJsZSB8fCB0eXBlb2YgZGVzYy5zZXQgIT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgLy8gaWYgc3JjW3N5bWJvbF0gaXMgbm90IHdyaXRhYmxlIG9yIG5vdCBoYXZlIGEgc2V0dGVyLCBqdXN0IHJldHVyblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzcmNbc3ltYm9sXSA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGRlc2MgPyBkZXNjLmVudW1lcmFibGUgOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBkZXNjID8gZGVzYy5jb25maWd1cmFibGUgOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5sZXQgc2hvdWxkQ29weVN5bWJvbFByb3BlcnRpZXMgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNob3VsZENvcHlTeW1ib2xQcm9wZXJ0aWVzKGZsYWc6IGJvb2xlYW4pIHtcbiAgc2hvdWxkQ29weVN5bWJvbFByb3BlcnRpZXMgPSBmbGFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hNZXRob2QoXG4gICAgdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgcGF0Y2hGbjogKGRlbGVnYXRlOiBGdW5jdGlvbiwgZGVsZWdhdGVOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IGFueSk6IEZ1bmN0aW9ufG51bGwge1xuICBsZXQgcHJvdG8gPSB0YXJnZXQ7XG4gIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICBwcm90byA9IHRhcmdldDtcbiAgfVxuXG4gIGNvbnN0IGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gIGxldCBkZWxlZ2F0ZTogRnVuY3Rpb258bnVsbCA9IG51bGw7XG4gIGlmIChwcm90byAmJiAhKGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSkpIHtcbiAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgLy8gc29tZSBwcm9wZXJ0eSBpcyByZWFkb25seSBpbiBzYWZhcmksIHN1Y2ggYXMgSHRtbENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYlxuICAgIGNvbnN0IGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgIGlmIChpc1Byb3BlcnR5V3JpdGFibGUoZGVzYykpIHtcbiAgICAgIGNvbnN0IHBhdGNoRGVsZWdhdGUgPSBwYXRjaEZuKGRlbGVnYXRlICEsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICBwcm90b1tuYW1lXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcGF0Y2hEZWxlZ2F0ZSh0aGlzLCBhcmd1bWVudHMgYXMgYW55KTsgfTtcbiAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tuYW1lXSwgZGVsZWdhdGUpO1xuICAgICAgaWYgKHNob3VsZENvcHlTeW1ib2xQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGNvcHlTeW1ib2xQcm9wZXJ0aWVzKGRlbGVnYXRlLCBwcm90b1tuYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNyb1Rhc2tNZXRhIGV4dGVuZHMgVGFza0RhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRhcmdldDogYW55O1xuICBjYklkeDogbnVtYmVyO1xuICBhcmdzOiBhbnlbXTtcbn1cblxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaE1hY3JvVGFzayhcbiAgICBvYmo6IGFueSwgZnVuY05hbWU6IHN0cmluZywgbWV0YUNyZWF0b3I6IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiBNYWNyb1Rhc2tNZXRhKSB7XG4gIGxldCBzZXROYXRpdmU6IEZ1bmN0aW9ufG51bGwgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrOiBUYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IDxNYWNyb1Rhc2tNZXRhPnRhc2suZGF0YTtcbiAgICBkYXRhLmFyZ3NbZGF0YS5jYklkeF0gPSBmdW5jdGlvbigpIHsgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBzZXROYXRpdmUgIS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKG9iaiwgZnVuY05hbWUsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IGZ1bmN0aW9uKHNlbGY6IGFueSwgYXJnczogYW55W10pIHtcbiAgICBjb25zdCBtZXRhID0gbWV0YUNyZWF0b3Ioc2VsZiwgYXJncyk7XG4gICAgaWYgKG1ldGEuY2JJZHggPj0gMCAmJiB0eXBlb2YgYXJnc1ttZXRhLmNiSWR4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKG1ldGEubmFtZSwgYXJnc1ttZXRhLmNiSWR4XSwgbWV0YSwgc2NoZWR1bGVUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1pY3JvVGFza01ldGEgZXh0ZW5kcyBUYXNrRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGFyZ2V0OiBhbnk7XG4gIGNiSWR4OiBudW1iZXI7XG4gIGFyZ3M6IGFueVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hNaWNyb1Rhc2soXG4gICAgb2JqOiBhbnksIGZ1bmNOYW1lOiBzdHJpbmcsIG1ldGFDcmVhdG9yOiAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4gTWljcm9UYXNrTWV0YSkge1xuICBsZXQgc2V0TmF0aXZlOiBGdW5jdGlvbnxudWxsID0gbnVsbDtcblxuICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzazogVGFzaykge1xuICAgIGNvbnN0IGRhdGEgPSA8TWFjcm9UYXNrTWV0YT50YXNrLmRhdGE7XG4gICAgZGF0YS5hcmdzW2RhdGEuY2JJZHhdID0gZnVuY3Rpb24oKSB7IHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgc2V0TmF0aXZlICEuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBzZXROYXRpdmUgPSBwYXRjaE1ldGhvZChvYmosIGZ1bmNOYW1lLCAoZGVsZWdhdGU6IEZ1bmN0aW9uKSA9PiBmdW5jdGlvbihzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSB7XG4gICAgY29uc3QgbWV0YSA9IG1ldGFDcmVhdG9yKHNlbGYsIGFyZ3MpO1xuICAgIGlmIChtZXRhLmNiSWR4ID49IDAgJiYgdHlwZW9mIGFyZ3NbbWV0YS5jYklkeF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNaWNyb1Rhc2sobWV0YS5uYW1lLCBhcmdzW21ldGEuY2JJZHhdLCBtZXRhLCBzY2hlZHVsZVRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZDogRnVuY3Rpb24sIG9yaWdpbmFsOiBhbnkpIHtcbiAgKHBhdGNoZWQgYXMgYW55KVt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG5cbmxldCBpc0RldGVjdGVkSUVPckVkZ2UgPSBmYWxzZTtcbmxldCBpZU9yRWRnZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJRSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcbiAgaWYgKGlzRGV0ZWN0ZWRJRU9yRWRnZSkge1xuICAgIHJldHVybiBpZU9yRWRnZTtcbiAgfVxuXG4gIGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICBpZU9yRWRnZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICB9XG4gIHJldHVybiBpZU9yRWRnZTtcbn1cbiJdfQ==