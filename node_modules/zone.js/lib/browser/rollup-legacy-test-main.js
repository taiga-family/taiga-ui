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
        define("zone.js/lib/browser/rollup-legacy-test-main", ["require", "exports", "zone.js/lib/browser/rollup-legacy-main", "zone.js/lib/testing/zone-testing"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("zone.js/lib/browser/rollup-legacy-main");
    // load test related files into bundle
    require("zone.js/lib/testing/zone-testing");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbHVwLWxlZ2FjeS10ZXN0LW1haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9icm93c2VyL3JvbGx1cC1sZWdhY3ktdGVzdC1tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsa0RBQThCO0lBRTlCLHNDQUFzQztJQUN0Qyw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAnLi9yb2xsdXAtbGVnYWN5LW1haW4nO1xuXG4vLyBsb2FkIHRlc3QgcmVsYXRlZCBmaWxlcyBpbnRvIGJ1bmRsZVxuaW1wb3J0ICcuLi90ZXN0aW5nL3pvbmUtdGVzdGluZyc7XG4iXX0=