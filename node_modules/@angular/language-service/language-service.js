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
        define("@angular/language-service/language-service", ["require", "exports", "tslib", "@angular/language-service/src/language_service", "@angular/language-service/src/ts_plugin", "@angular/language-service/src/typescript_host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /// <reference types="node" />
    /**
     * @module
     * @description
     * Entry point for all public APIs of the language service package.
     */
    var language_service_1 = require("@angular/language-service/src/language_service");
    exports.createLanguageService = language_service_1.createLanguageService;
    tslib_1.__exportStar(require("@angular/language-service/src/ts_plugin"), exports);
    var typescript_host_1 = require("@angular/language-service/src/typescript_host");
    exports.TypeScriptServiceHost = typescript_host_1.TypeScriptServiceHost;
    exports.createLanguageServiceFromTypescript = typescript_host_1.createLanguageServiceFromTypescript;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2UvbGFuZ3VhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4QkFBOEI7SUFFOUI7Ozs7T0FJRztJQUNILG1GQUE2RDtJQUFyRCxtREFBQSxxQkFBcUIsQ0FBQTtJQUM3QixrRkFBZ0M7SUFFaEMsaUZBQWlHO0lBQXpGLGtEQUFBLHFCQUFxQixDQUFBO0lBQUUsZ0VBQUEsbUNBQW1DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibm9kZVwiIC8+XG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoZSBsYW5ndWFnZSBzZXJ2aWNlIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCB7Y3JlYXRlTGFuZ3VhZ2VTZXJ2aWNlfSBmcm9tICcuL3NyYy9sYW5ndWFnZV9zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RzX3BsdWdpbic7XG5leHBvcnQge0RlY2xhcmF0aW9uLCBEZWZpbml0aW9uLCBEaWFnbm9zdGljLCBMYW5ndWFnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZUhvc3QsIFNwYW4sIFRlbXBsYXRlU291cmNlfSBmcm9tICcuL3NyYy90eXBlcyc7XG5leHBvcnQge1R5cGVTY3JpcHRTZXJ2aWNlSG9zdCwgY3JlYXRlTGFuZ3VhZ2VTZXJ2aWNlRnJvbVR5cGVzY3JpcHR9IGZyb20gJy4vc3JjL3R5cGVzY3JpcHRfaG9zdCc7XG4iXX0=