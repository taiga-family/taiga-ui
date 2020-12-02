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
        define("@angular/compiler-cli/src/ngtsc/incremental", ["require", "exports", "@angular/compiler-cli/src/ngtsc/incremental/src/noop", "@angular/compiler-cli/src/ngtsc/incremental/src/state"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noop_1 = require("@angular/compiler-cli/src/ngtsc/incremental/src/noop");
    exports.NOOP_INCREMENTAL_BUILD = noop_1.NOOP_INCREMENTAL_BUILD;
    var state_1 = require("@angular/compiler-cli/src/ngtsc/incremental/src/state");
    exports.IncrementalDriver = state_1.IncrementalDriver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2luY3JlbWVudGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsNkVBQWtEO0lBQTFDLHdDQUFBLHNCQUFzQixDQUFBO0lBQzlCLCtFQUE4QztJQUF0QyxvQ0FBQSxpQkFBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtOT09QX0lOQ1JFTUVOVEFMX0JVSUxEfSBmcm9tICcuL3NyYy9ub29wJztcbmV4cG9ydCB7SW5jcmVtZW50YWxEcml2ZXJ9IGZyb20gJy4vc3JjL3N0YXRlJztcbiJdfQ==