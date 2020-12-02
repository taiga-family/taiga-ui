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
        define("zone.js/lib/browser/browser-legacy", ["require", "exports", "zone.js/lib/browser/define-property", "zone.js/lib/browser/event-target-legacy", "zone.js/lib/browser/property-descriptor-legacy", "zone.js/lib/browser/register-element"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var define_property_1 = require("zone.js/lib/browser/define-property");
    var event_target_legacy_1 = require("zone.js/lib/browser/event-target-legacy");
    var property_descriptor_legacy_1 = require("zone.js/lib/browser/property-descriptor-legacy");
    var register_element_1 = require("zone.js/lib/browser/register-element");
    (function (_global) {
        var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) { return symbolPrefix + name; }
        _global[__symbol__('legacyPatch')] = function () {
            var Zone = _global['Zone'];
            Zone.__load_patch('defineProperty', function (global, Zone, api) {
                api._redefineProperty = define_property_1._redefineProperty;
                define_property_1.propertyPatch();
            });
            Zone.__load_patch('registerElement', function (global, Zone, api) {
                register_element_1.registerElementPatch(global, api);
            });
            Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
                event_target_legacy_1.eventTargetLegacyPatch(global, api);
                property_descriptor_legacy_1.propertyDescriptorLegacyPatch(api, global);
            });
        };
    })(typeof window !== 'undefined' ?
        window :
        typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1sZWdhY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9icm93c2VyL2Jyb3dzZXItbGVnYWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNIOzs7R0FHRzs7Ozs7Ozs7Ozs7O0lBRUgsdUVBQW1FO0lBQ25FLCtFQUE2RDtJQUM3RCw2RkFBMkU7SUFDM0UseUVBQXdEO0lBRXhELENBQUMsVUFBUyxPQUFZO1FBQ3BCLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO1FBQzFFLFNBQVMsVUFBVSxDQUFDLElBQVksSUFBSSxPQUFPLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRztZQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7Z0JBQ2pGLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxtQ0FBaUIsQ0FBQztnQkFDMUMsK0JBQWEsRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7Z0JBQ2xGLHVDQUFvQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO2dCQUNwRiw0Q0FBc0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLDBEQUE2QixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxDQUFDO1FBQ1IsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuXG5pbXBvcnQge19yZWRlZmluZVByb3BlcnR5LCBwcm9wZXJ0eVBhdGNofSBmcm9tICcuL2RlZmluZS1wcm9wZXJ0eSc7XG5pbXBvcnQge2V2ZW50VGFyZ2V0TGVnYWN5UGF0Y2h9IGZyb20gJy4vZXZlbnQtdGFyZ2V0LWxlZ2FjeSc7XG5pbXBvcnQge3Byb3BlcnR5RGVzY3JpcHRvckxlZ2FjeVBhdGNofSBmcm9tICcuL3Byb3BlcnR5LWRlc2NyaXB0b3ItbGVnYWN5JztcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50UGF0Y2h9IGZyb20gJy4vcmVnaXN0ZXItZWxlbWVudCc7XG5cbihmdW5jdGlvbihfZ2xvYmFsOiBhbnkpIHtcbiAgY29uc3Qgc3ltYm9sUHJlZml4ID0gX2dsb2JhbFsnX19ab25lX3N5bWJvbF9wcmVmaXgnXSB8fCAnX196b25lX3N5bWJvbF9fJztcbiAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHN5bWJvbFByZWZpeCArIG5hbWU7IH1cbiAgX2dsb2JhbFtfX3N5bWJvbF9fKCdsZWdhY3lQYXRjaCcpXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IFpvbmUgPSBfZ2xvYmFsWydab25lJ107XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2RlZmluZVByb3BlcnR5JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuICAgICAgcHJvcGVydHlQYXRjaCgpO1xuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdyZWdpc3RlckVsZW1lbnQnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlLCBhcGk6IF9ab25lUHJpdmF0ZSkgPT4ge1xuICAgICAgcmVnaXN0ZXJFbGVtZW50UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgIH0pO1xuXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0TGVnYWN5JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgICAgIGV2ZW50VGFyZ2V0TGVnYWN5UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgICAgcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgIH0pO1xuICB9O1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgIHdpbmRvdyA6XG4gICAgICAgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge30pO1xuIl19