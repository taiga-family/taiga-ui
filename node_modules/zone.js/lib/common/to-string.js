(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/common/to-string", ["require", "exports", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var utils_1 = require("zone.js/lib/common/utils");
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = utils_1.zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = utils_1.zoneSymbol('Promise');
        var ERROR_SYMBOL = utils_1.zoneSymbol('Error');
        var newFunctionToString = function toString() {
            if (typeof this === 'function') {
                var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    var nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    var nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tc3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvY29tbW9uL3RvLXN0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILGtEQUFtQztJQUVuQyx3RUFBd0U7SUFDeEUsNEJBQTRCO0lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQUMsTUFBVztRQUN4Qyw2REFBNkQ7UUFDN0QsSUFBTSx3QkFBd0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUU3RCxJQUFNLHdCQUF3QixHQUFHLGtCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRSxJQUFNLGNBQWMsR0FBRyxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQU0sWUFBWSxHQUFHLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBTSxtQkFBbUIsR0FBRyxTQUFTLFFBQVE7WUFDM0MsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzlCLElBQU0sZ0JBQWdCLEdBQUksSUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ2pFLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3BCLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxVQUFVLEVBQUU7d0JBQzFDLE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3hEO3lCQUFNO3dCQUNMLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3pEO2lCQUNGO2dCQUNELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDcEIsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLGFBQWEsRUFBRTt3QkFDakIsT0FBTyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ3JEO2lCQUNGO2dCQUNELElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtvQkFDbEIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLFdBQVcsRUFBRTt3QkFDZixPQUFPLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDbkQ7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUNELG1CQUEyQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsd0JBQXdCLENBQUM7UUFDbEYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFHbEQsK0RBQStEO1FBQy9ELElBQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDekQsSUFBTSx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztRQUNwRCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztZQUMxQixJQUFJLElBQUksWUFBWSxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sd0JBQXdCLENBQUM7YUFDakM7WUFDRCxPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7em9uZVN5bWJvbH0gZnJvbSAnLi91dGlscyc7XG5cbi8vIG92ZXJyaWRlIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyB0byBtYWtlIHpvbmUuanMgcGF0Y2hlZCBmdW5jdGlvblxuLy8gbG9vayBsaWtlIG5hdGl2ZSBmdW5jdGlvblxuWm9uZS5fX2xvYWRfcGF0Y2goJ3RvU3RyaW5nJywgKGdsb2JhbDogYW55KSA9PiB7XG4gIC8vIHBhdGNoIEZ1bmMucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgY29uc3Qgb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIGNvbnN0IE9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ09yaWdpbmFsRGVsZWdhdGUnKTtcbiAgY29uc3QgUFJPTUlTRV9TWU1CT0wgPSB6b25lU3ltYm9sKCdQcm9taXNlJyk7XG4gIGNvbnN0IEVSUk9SX1NZTUJPTCA9IHpvbmVTeW1ib2woJ0Vycm9yJyk7XG4gIGNvbnN0IG5ld0Z1bmN0aW9uVG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyh0aGlzOiB1bmtub3duKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbERlbGVnYXRlID0gKHRoaXMgYXMgYW55KVtPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdO1xuICAgICAgaWYgKG9yaWdpbmFsRGVsZWdhdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbERlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzID09PSBQcm9taXNlKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV9TWU1CT0xdO1xuICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVQcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVycm9yID0gZ2xvYmFsW0VSUk9SX1NZTUJPTF07XG4gICAgICAgIGlmIChuYXRpdmVFcnJvcikge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVFcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICB9O1xuICAobmV3RnVuY3Rpb25Ub1N0cmluZyBhcyBhbnkpW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF0gPSBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmc7XG4gIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG5cblxuICAvLyBwYXRjaCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgY29uc3Qgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIGNvbnN0IFBST01JU0VfT0JKRUNUX1RPX1NUUklORyA9ICdbb2JqZWN0IFByb21pc2VdJztcbiAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICB9XG4gICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0VG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfTtcbn0pO1xuIl19