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
        define("zone.js/lib/browser/define-property", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */
    var zoneSymbol;
    var _defineProperty;
    var _getOwnPropertyDescriptor;
    var _create;
    var unconfigurablesKey;
    function propertyPatch() {
        zoneSymbol = Zone.__symbol__;
        _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
        _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
            Object.getOwnPropertyDescriptor;
        _create = Object.create;
        unconfigurablesKey = zoneSymbol('unconfigurables');
        Object.defineProperty = function (obj, prop, desc) {
            if (isUnconfigurable(obj, prop)) {
                throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
            }
            var originalConfigurableFlag = desc.configurable;
            if (prop !== 'prototype') {
                desc = rewriteDescriptor(obj, prop, desc);
            }
            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        };
        Object.defineProperties = function (obj, props) {
            Object.keys(props).forEach(function (prop) { Object.defineProperty(obj, prop, props[prop]); });
            return obj;
        };
        Object.create = function (obj, proto) {
            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                Object.keys(proto).forEach(function (prop) {
                    proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                });
            }
            return _create(obj, proto);
        };
        Object.getOwnPropertyDescriptor = function (obj, prop) {
            var desc = _getOwnPropertyDescriptor(obj, prop);
            if (desc && isUnconfigurable(obj, prop)) {
                desc.configurable = false;
            }
            return desc;
        };
    }
    exports.propertyPatch = propertyPatch;
    function _redefineProperty(obj, prop, desc) {
        var originalConfigurableFlag = desc.configurable;
        desc = rewriteDescriptor(obj, prop, desc);
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }
    exports._redefineProperty = _redefineProperty;
    function isUnconfigurable(obj, prop) {
        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }
    function rewriteDescriptor(obj, prop, desc) {
        // issue-927, if the desc is frozen, don't try to change the desc
        if (!Object.isFrozen(desc)) {
            desc.configurable = true;
        }
        if (!desc.configurable) {
            // issue-927, if the obj is frozen, don't try to set the desc to obj
            if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
                _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
            }
            if (obj[unconfigurablesKey]) {
                obj[unconfigurablesKey][prop] = true;
            }
        }
        return desc;
    }
    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
        try {
            return _defineProperty(obj, prop, desc);
        }
        catch (error) {
            if (desc.configurable) {
                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                // retry with the original flag value
                if (typeof originalConfigurableFlag == 'undefined') {
                    delete desc.configurable;
                }
                else {
                    desc.configurable = originalConfigurableFlag;
                }
                try {
                    return _defineProperty(obj, prop, desc);
                }
                catch (error) {
                    var descJson = null;
                    try {
                        descJson = JSON.stringify(desc);
                    }
                    catch (error) {
                        descJson = desc.toString();
                    }
                    console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                }
            }
            else {
                throw error;
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci9kZWZpbmUtcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSDs7O09BR0c7SUFFSCxJQUFJLFVBQWUsQ0FBQztJQUNwQixJQUFJLGVBQW9CLENBQUM7SUFDekIsSUFBSSx5QkFBOEIsQ0FBQztJQUNuQyxJQUFJLE9BQVksQ0FBQztJQUNqQixJQUFJLGtCQUF1QixDQUFDO0lBRTVCLFNBQWdCLGFBQWE7UUFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsZUFBZSxHQUFJLE1BQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDeEYseUJBQXlCLEdBQUksTUFBYyxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNwQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4QixrQkFBa0IsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVMsR0FBUSxFQUFFLElBQVksRUFBRSxJQUFTO1lBQ2hFLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUMvQixNQUFNLElBQUksU0FBUyxDQUFDLHdDQUF3QyxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDdkY7WUFDRCxJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkQsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUN4QixJQUFJLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBUyxHQUFHLEVBQUUsS0FBSztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUksSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQVEsVUFBUyxHQUFRLEVBQUUsS0FBVTtZQUNoRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtvQkFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLHdCQUF3QixHQUFHLFVBQVMsR0FBRyxFQUFFLElBQUk7WUFDbEQsSUFBTSxJQUFJLEdBQUcseUJBQXlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xELElBQUksSUFBSSxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUF2Q0Qsc0NBdUNDO0lBRUQsU0FBZ0IsaUJBQWlCLENBQUMsR0FBUSxFQUFFLElBQVksRUFBRSxJQUFTO1FBQ2pFLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuRCxJQUFJLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUpELDhDQUlDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFRLEVBQUUsSUFBUztRQUMzQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsU0FBUyxpQkFBaUIsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLElBQVM7UUFDMUQsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsb0VBQW9FO1lBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JELGVBQWUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDM0IsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxJQUFZLEVBQUUsSUFBUyxFQUFFLHdCQUE2QjtRQUMxRixJQUFJO1lBQ0YsT0FBTyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQiw2RkFBNkY7Z0JBQzdGLHFDQUFxQztnQkFDckMsSUFBSSxPQUFPLHdCQUF3QixJQUFJLFdBQVcsRUFBRTtvQkFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDO2lCQUM5QztnQkFDRCxJQUFJO29CQUNGLE9BQU8sZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLElBQUksUUFBUSxHQUFnQixJQUFJLENBQUM7b0JBQ2pDLElBQUk7d0JBQ0YsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2pDO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNkLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQzVCO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQTRCLElBQUksMkJBQXNCLFFBQVEscUJBQ3RFLEdBQUcsb0NBQStCLEtBQU8sQ0FBQyxDQUFDO2lCQUNoRDthQUNGO2lCQUFNO2dCQUNMLE1BQU0sS0FBSyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgQ2hyb21lIGFuZCBDaHJvbWUgbW9iaWxlLCB0byBlbmFibGVcbiAqIHRoaW5ncyBsaWtlIHJlZGVmaW5pbmcgYGNyZWF0ZWRDYWxsYmFja2Agb24gYW4gZWxlbWVudC5cbiAqL1xuXG5sZXQgem9uZVN5bWJvbDogYW55O1xubGV0IF9kZWZpbmVQcm9wZXJ0eTogYW55O1xubGV0IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGFueTtcbmxldCBfY3JlYXRlOiBhbnk7XG5sZXQgdW5jb25maWd1cmFibGVzS2V5OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVBhdGNoKCkge1xuICB6b25lU3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fO1xuICBfZGVmaW5lUHJvcGVydHkgPSAoT2JqZWN0IGFzIGFueSlbem9uZVN5bWJvbCgnZGVmaW5lUHJvcGVydHknKV0gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAoT2JqZWN0IGFzIGFueSlbem9uZVN5bWJvbCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyldID1cbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB6b25lU3ltYm9sKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZGVzYzogYW55KSB7XG4gICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkgXFwnJyArIHByb3AgKyAnXFwnIG9mICcgKyBvYmopO1xuICAgIH1cbiAgICBjb25zdCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uKG9iaiwgcHJvcHMpIHtcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHByb3BzW3Byb3BdKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuY3JlYXRlID0gPGFueT5mdW5jdGlvbihvYmo6IGFueSwgcHJvdG86IGFueSkge1xuICAgIGlmICh0eXBlb2YgcHJvdG8gPT09ICdvYmplY3QnICYmICFPYmplY3QuaXNGcm96ZW4ocHJvdG8pKSB7XG4gICAgICBPYmplY3Qua2V5cyhwcm90bykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgIHByb3RvW3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBwcm90b1twcm9wXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gIH07XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICAgIGNvbnN0IGRlc2MgPSBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgaWYgKGRlc2MgJiYgaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZGVzYztcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZWRlZmluZVByb3BlcnR5KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGRlc2M6IGFueSkge1xuICBjb25zdCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xufVxuXG5mdW5jdGlvbiBpc1VuY29uZmlndXJhYmxlKG9iajogYW55LCBwcm9wOiBhbnkpIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZURlc2NyaXB0b3Iob2JqOiBhbnksIHByb3A6IHN0cmluZywgZGVzYzogYW55KSB7XG4gIC8vIGlzc3VlLTkyNywgaWYgdGhlIGRlc2MgaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gY2hhbmdlIHRoZSBkZXNjXG4gIGlmICghT2JqZWN0LmlzRnJvemVuKGRlc2MpKSB7XG4gICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICB9XG4gIGlmICghZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBvYmogaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gc2V0IHRoZSBkZXNjIHRvIG9ialxuICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0gJiYgIU9iamVjdC5pc0Zyb3plbihvYmopKSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkob2JqLCB1bmNvbmZpZ3VyYWJsZXNLZXksIHt3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9fSk7XG4gICAgfVxuICAgIGlmIChvYmpbdW5jb25maWd1cmFibGVzS2V5XSkge1xuICAgICAgb2JqW3VuY29uZmlndXJhYmxlc0tleV1bcHJvcF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzYztcbn1cblxuZnVuY3Rpb24gX3RyeURlZmluZVByb3BlcnR5KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGRlc2M6IGFueSwgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAvLyBJbiBjYXNlIG9mIGVycm9ycywgd2hlbiB0aGUgY29uZmlndXJhYmxlIGZsYWcgd2FzIGxpa2VseSBzZXQgYnkgcmV3cml0ZURlc2NyaXB0b3IoKSwgbGV0J3NcbiAgICAgIC8vIHJldHJ5IHdpdGggdGhlIG9yaWdpbmFsIGZsYWcgdmFsdWVcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlbGV0ZSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gb3JpZ2luYWxDb25maWd1cmFibGVGbGFnO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbGV0IGRlc2NKc29uOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGVzY0pzb24gPSBKU09OLnN0cmluZ2lmeShkZXNjKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBkZXNjSnNvbiA9IGRlc2MudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0ZW1wdGluZyB0byBjb25maWd1cmUgJyR7cHJvcH0nIHdpdGggZGVzY3JpcHRvciAnJHtkZXNjSnNvbn0nIG9uIG9iamVjdCAnJHtcbiAgICAgICAgICAgIG9ian0nIGFuZCBnb3QgZXJyb3IsIGdpdmluZyB1cDogJHtlcnJvcn1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG4iXX0=