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
        define("zone.js/lib/browser/api-util", ["require", "exports", "zone.js/lib/common/events", "zone.js/lib/common/utils", "zone.js/lib/browser/browser-util", "zone.js/lib/browser/property-descriptor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("zone.js/lib/common/events");
    var utils_1 = require("zone.js/lib/common/utils");
    var browser_util_1 = require("zone.js/lib/browser/browser-util");
    var property_descriptor_1 = require("zone.js/lib/browser/property-descriptor");
    Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = utils_1.patchOnProperties;
        api.patchMethod = utils_1.patchMethod;
        api.bindArguments = utils_1.bindArguments;
        api.patchMacroTask = utils_1.patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = events_1.patchEventPrototype;
        api.patchEventTarget = events_1.patchEventTarget;
        api.isIEOrEdge = utils_1.isIEOrEdge;
        api.ObjectDefineProperty = utils_1.ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = utils_1.ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = utils_1.ObjectCreate;
        api.ArraySlice = utils_1.ArraySlice;
        api.patchClass = utils_1.patchClass;
        api.wrapWithCurrentZone = utils_1.wrapWithCurrentZone;
        api.filterProperties = property_descriptor_1.filterProperties;
        api.attachOriginToPatched = utils_1.attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = browser_util_1.patchCallbacks;
        api.getGlobalObjects = function () {
            return ({ globalSources: events_1.globalSources, zoneSymbolEventNames: events_1.zoneSymbolEventNames, eventNames: property_descriptor_1.eventNames, isBrowser: utils_1.isBrowser, isMix: utils_1.isMix, isNode: utils_1.isNode, TRUE_STR: utils_1.TRUE_STR,
                FALSE_STR: utils_1.FALSE_STR, ZONE_SYMBOL_PREFIX: utils_1.ZONE_SYMBOL_PREFIX, ADD_EVENT_LISTENER_STR: utils_1.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR: utils_1.REMOVE_EVENT_LISTENER_STR });
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9icm93c2VyL2FwaS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsb0RBQTRHO0lBQzVHLGtEQUF3VztJQUV4VyxpRUFBOEM7SUFDOUMsK0VBQW1FO0lBRW5FLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsTUFBVyxFQUFFLElBQWMsRUFBRSxHQUFpQjtRQUN2RSxHQUFHLENBQUMsaUJBQWlCLEdBQUcseUJBQWlCLENBQUM7UUFDMUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxtQkFBVyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxhQUFhLEdBQUcscUJBQWEsQ0FBQztRQUNsQyxHQUFHLENBQUMsY0FBYyxHQUFHLHNCQUFjLENBQUM7UUFDcEMsa0dBQWtHO1FBQ2xHLHdEQUF3RDtRQUN4RCxrR0FBa0c7UUFDbEcseUNBQXlDO1FBQ3pDLDRGQUE0RjtRQUM1RiwyQkFBMkI7UUFDM0IsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUUsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEUsSUFBSSxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksTUFBTSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDckMsSUFBWSxDQUFDLDBCQUEwQixDQUFDLEdBQUksSUFBWSxDQUFDLHVCQUF1QixDQUFDO2dCQUM5RSxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUN4QztRQUNELEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyw0QkFBbUIsQ0FBQztRQUM5QyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcseUJBQWdCLENBQUM7UUFDeEMsR0FBRyxDQUFDLFVBQVUsR0FBRyxrQkFBVSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyw0QkFBb0IsQ0FBQztRQUNoRCxHQUFHLENBQUMsOEJBQThCLEdBQUcsc0NBQThCLENBQUM7UUFDcEUsR0FBRyxDQUFDLFlBQVksR0FBRyxvQkFBWSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsa0JBQVUsQ0FBQztRQUM1QixHQUFHLENBQUMsVUFBVSxHQUFHLGtCQUFVLENBQUM7UUFDNUIsR0FBRyxDQUFDLG1CQUFtQixHQUFHLDJCQUFtQixDQUFDO1FBQzlDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxzQ0FBZ0IsQ0FBQztRQUN4QyxHQUFHLENBQUMscUJBQXFCLEdBQUcsNkJBQXFCLENBQUM7UUFDbEQsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDOUMsR0FBRyxDQUFDLGNBQWMsR0FBRyw2QkFBYyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRztZQUNuQixPQUFBLENBQUMsRUFBQyxhQUFhLHdCQUFBLEVBQUUsb0JBQW9CLCtCQUFBLEVBQUUsVUFBVSxrQ0FBQSxFQUFFLFNBQVMsbUJBQUEsRUFBRSxLQUFLLGVBQUEsRUFBRSxNQUFNLGdCQUFBLEVBQUUsUUFBUSxrQkFBQTtnQkFDbkYsU0FBUyxtQkFBQSxFQUFFLGtCQUFrQiw0QkFBQSxFQUFFLHNCQUFzQixnQ0FBQSxFQUFFLHlCQUF5QixtQ0FBQSxFQUFDLENBQUM7UUFEcEYsQ0FDb0YsQ0FBQztJQUMzRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnbG9iYWxTb3VyY2VzLCBwYXRjaEV2ZW50UHJvdG90eXBlLCBwYXRjaEV2ZW50VGFyZ2V0LCB6b25lU3ltYm9sRXZlbnROYW1lc30gZnJvbSAnLi4vY29tbW9uL2V2ZW50cyc7XG5pbXBvcnQge0FERF9FVkVOVF9MSVNURU5FUl9TVFIsIEFycmF5U2xpY2UsIEZBTFNFX1NUUiwgT2JqZWN0Q3JlYXRlLCBPYmplY3REZWZpbmVQcm9wZXJ0eSwgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSLCBUUlVFX1NUUiwgWk9ORV9TWU1CT0xfUFJFRklYLCBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQsIGJpbmRBcmd1bWVudHMsIGlzQnJvd3NlciwgaXNJRU9yRWRnZSwgaXNNaXgsIGlzTm9kZSwgcGF0Y2hDbGFzcywgcGF0Y2hNYWNyb1Rhc2ssIHBhdGNoTWV0aG9kLCBwYXRjaE9uUHJvcGVydGllcywgd3JhcFdpdGhDdXJyZW50Wm9uZX0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblxuaW1wb3J0IHtwYXRjaENhbGxiYWNrc30gZnJvbSAnLi9icm93c2VyLXV0aWwnO1xuaW1wb3J0IHtldmVudE5hbWVzLCBmaWx0ZXJQcm9wZXJ0aWVzfSBmcm9tICcuL3Byb3BlcnR5LWRlc2NyaXB0b3InO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICBhcGkucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcbiAgYXBpLmJpbmRBcmd1bWVudHMgPSBiaW5kQXJndW1lbnRzO1xuICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgLy8gSW4gZWFybGllciB2ZXJzaW9uIG9mIHpvbmUuanMgKDwwLjkuMCksIHdlIHVzZSBlbnYgbmFtZSBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgdG9cbiAgLy8gZGVmaW5lIHdoaWNoIGV2ZW50cyB3aWxsIG5vdCBiZSBwYXRjaGVkIGJ5IGBab25lLmpzYC5cbiAgLy8gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlIGNoYW5nZSB0aGUgZW52IG5hbWUgdG8gYF9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFNgIHRvIGtlZXBcbiAgLy8gdGhlIG5hbWUgY29uc2lzdGVudCB3aXRoIGFuZ3VsYXIgcmVwby5cbiAgLy8gVGhlICBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgaXMgZGVwcmVjYXRlZCwgYnV0IGl0IGlzIHN0aWxsIGJlIHN1cHBvcnRlZCBmb3JcbiAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIGNvbnN0IFNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdCTEFDS19MSVNURURfRVZFTlRTJyk7XG4gIGNvbnN0IFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gIGlmIChnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdKSB7XG4gICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU107XG4gIH1cbiAgaWYgKGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10pIHtcbiAgICAoWm9uZSBhcyBhbnkpW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSA9IChab25lIGFzIGFueSlbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdID1cbiAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXTtcbiAgfVxuICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZSA9IHBhdGNoRXZlbnRQcm90b3R5cGU7XG4gIGFwaS5wYXRjaEV2ZW50VGFyZ2V0ID0gcGF0Y2hFdmVudFRhcmdldDtcbiAgYXBpLmlzSUVPckVkZ2UgPSBpc0lFT3JFZGdlO1xuICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3REZWZpbmVQcm9wZXJ0eTtcbiAgYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgYXBpLk9iamVjdENyZWF0ZSA9IE9iamVjdENyZWF0ZTtcbiAgYXBpLkFycmF5U2xpY2UgPSBBcnJheVNsaWNlO1xuICBhcGkucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG4gIGFwaS53cmFwV2l0aEN1cnJlbnRab25lID0gd3JhcFdpdGhDdXJyZW50Wm9uZTtcbiAgYXBpLmZpbHRlclByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzO1xuICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkID0gYXR0YWNoT3JpZ2luVG9QYXRjaGVkO1xuICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICBhcGkuZ2V0R2xvYmFsT2JqZWN0cyA9ICgpID0+XG4gICAgICAoe2dsb2JhbFNvdXJjZXMsIHpvbmVTeW1ib2xFdmVudE5hbWVzLCBldmVudE5hbWVzLCBpc0Jyb3dzZXIsIGlzTWl4LCBpc05vZGUsIFRSVUVfU1RSLFxuICAgICAgICBGQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUn0pO1xufSk7XG4iXX0=