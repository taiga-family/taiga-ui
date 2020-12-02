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
        define("zone.js/lib/browser/event-target", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        var EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    exports.eventTargetPatch = eventTargetPatch;
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }
    exports.patchEvent = patchEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtdGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci9ldmVudC10YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFZLEVBQUUsR0FBaUI7UUFDOUQsSUFBSyxJQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7WUFDakQsa0NBQWtDO1lBQ2xDLE9BQU87U0FDUjtRQUNLLElBQUEsMkJBQ3NCLEVBRHJCLDBCQUFVLEVBQUUsOENBQW9CLEVBQUUsc0JBQVEsRUFBRSx3QkFBUyxFQUFFLDBDQUNsQyxDQUFDO1FBQzdCLGlFQUFpRTtRQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBTSxjQUFjLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM3QyxJQUFNLGFBQWEsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzNDLElBQU0sTUFBTSxHQUFHLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztZQUNuRCxJQUFNLGFBQWEsR0FBRyxrQkFBa0IsR0FBRyxhQUFhLENBQUM7WUFDekQsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUNwRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDM0Q7UUFFRCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDNUMsT0FBTztTQUNSO1FBQ0QsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV4RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUExQkQsNENBMEJDO0lBRUQsU0FBZ0IsVUFBVSxDQUFDLE1BQVcsRUFBRSxHQUFpQjtRQUN2RCxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbDogYW55LCBhcGk6IF9ab25lUHJpdmF0ZSkge1xuICBpZiAoKFpvbmUgYXMgYW55KVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgaXMgYWxyZWFkeSBwYXRjaGVkLlxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7ZXZlbnROYW1lcywgem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSLCBGQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWH0gPVxuICAgICAgYXBpLmdldEdsb2JhbE9iamVjdHMoKSAhO1xuICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgIGNvbnN0IGZhbHNlRXZlbnROYW1lID0gZXZlbnROYW1lICsgRkFMU0VfU1RSO1xuICAgIGNvbnN0IHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICBjb25zdCBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICBjb25zdCBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgfVxuXG4gIGNvbnN0IEVWRU5UX1RBUkdFVCA9IF9nbG9iYWxbJ0V2ZW50VGFyZ2V0J107XG4gIGlmICghRVZFTlRfVEFSR0VUIHx8ICFFVkVOVF9UQVJHRVQucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWw6IGFueSwgYXBpOiBfWm9uZVByaXZhdGUpIHtcbiAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xufVxuIl19