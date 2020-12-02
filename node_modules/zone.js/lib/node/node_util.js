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
        define("zone.js/lib/node/node_util", ["require", "exports", "zone.js/lib/common/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("zone.js/lib/common/utils");
    Zone.__load_patch('node_util', function (global, Zone, api) {
        api.patchOnProperties = utils_1.patchOnProperties;
        api.patchMethod = utils_1.patchMethod;
        api.bindArguments = utils_1.bindArguments;
        api.patchMacroTask = utils_1.patchMacroTask;
        utils_1.setShouldCopySymbolProperties(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvbm9kZS9ub2RlX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxrREFBNkg7SUFFN0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO1FBQzVFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyx5QkFBaUIsQ0FBQztRQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLG1CQUFXLENBQUM7UUFDOUIsR0FBRyxDQUFDLGFBQWEsR0FBRyxxQkFBYSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsc0JBQWMsQ0FBQztRQUNwQyxxQ0FBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtiaW5kQXJndW1lbnRzLCBwYXRjaE1hY3JvVGFzaywgcGF0Y2hNZXRob2QsIHBhdGNoT25Qcm9wZXJ0aWVzLCBzZXRTaG91bGRDb3B5U3ltYm9sUHJvcGVydGllc30gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcblxuWm9uZS5fX2xvYWRfcGF0Y2goJ25vZGVfdXRpbCcsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGFwaS5wYXRjaE9uUHJvcGVydGllcyA9IHBhdGNoT25Qcm9wZXJ0aWVzO1xuICBhcGkucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcbiAgYXBpLmJpbmRBcmd1bWVudHMgPSBiaW5kQXJndW1lbnRzO1xuICBhcGkucGF0Y2hNYWNyb1Rhc2sgPSBwYXRjaE1hY3JvVGFzaztcbiAgc2V0U2hvdWxkQ29weVN5bWJvbFByb3BlcnRpZXModHJ1ZSk7XG59KTtcbiJdfQ==