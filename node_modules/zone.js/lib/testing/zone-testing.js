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
        define("zone.js/lib/testing/zone-testing", ["require", "exports", "../zone-spec/long-stack-trace", "../zone-spec/proxy", "../zone-spec/sync-test", "../jasmine/jasmine", "../jest/jest", "../mocha/mocha", "zone.js/lib/testing/async-testing", "zone.js/lib/testing/fake-async", "./promise-testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // load test related files into bundle in correct order
    require("../zone-spec/long-stack-trace");
    require("../zone-spec/proxy");
    require("../zone-spec/sync-test");
    require("../jasmine/jasmine");
    require("../jest/jest");
    require("../mocha/mocha");
    require("zone.js/lib/testing/async-testing");
    require("zone.js/lib/testing/fake-async");
    require("./promise-testing");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS10ZXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvdGVzdGluZy96b25lLXRlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx1REFBdUQ7SUFDdkQseUNBQXVDO0lBQ3ZDLDhCQUE0QjtJQUM1QixrQ0FBZ0M7SUFDaEMsOEJBQTRCO0lBQzVCLHdCQUFzQjtJQUN0QiwwQkFBd0I7SUFDeEIsNkNBQXlCO0lBQ3pCLDBDQUFzQjtJQUN0Qiw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIGxvYWQgdGVzdCByZWxhdGVkIGZpbGVzIGludG8gYnVuZGxlIGluIGNvcnJlY3Qgb3JkZXJcbmltcG9ydCAnLi4vem9uZS1zcGVjL2xvbmctc3RhY2stdHJhY2UnO1xuaW1wb3J0ICcuLi96b25lLXNwZWMvcHJveHknO1xuaW1wb3J0ICcuLi96b25lLXNwZWMvc3luYy10ZXN0JztcbmltcG9ydCAnLi4vamFzbWluZS9qYXNtaW5lJztcbmltcG9ydCAnLi4vamVzdC9qZXN0JztcbmltcG9ydCAnLi4vbW9jaGEvbW9jaGEnO1xuaW1wb3J0ICcuL2FzeW5jLXRlc3RpbmcnO1xuaW1wb3J0ICcuL2Zha2UtYXN5bmMnO1xuaW1wb3J0ICcuL3Byb21pc2UtdGVzdGluZyc7XG4iXX0=