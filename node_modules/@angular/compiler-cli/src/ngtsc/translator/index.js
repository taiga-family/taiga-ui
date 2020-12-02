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
        define("@angular/compiler-cli/src/ngtsc/translator", ["require", "exports", "@angular/compiler-cli/src/ngtsc/translator/src/translator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var translator_1 = require("@angular/compiler-cli/src/ngtsc/translator/src/translator");
    exports.ImportManager = translator_1.ImportManager;
    exports.translateExpression = translator_1.translateExpression;
    exports.translateStatement = translator_1.translateStatement;
    exports.translateType = translator_1.translateType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zbGF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx3RkFBNEg7SUFBNUcscUNBQUEsYUFBYSxDQUFBO0lBQWUsMkNBQUEsbUJBQW1CLENBQUE7SUFBRSwwQ0FBQSxrQkFBa0IsQ0FBQTtJQUFFLHFDQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtJbXBvcnQsIEltcG9ydE1hbmFnZXIsIE5hbWVkSW1wb3J0LCB0cmFuc2xhdGVFeHByZXNzaW9uLCB0cmFuc2xhdGVTdGF0ZW1lbnQsIHRyYW5zbGF0ZVR5cGV9IGZyb20gJy4vc3JjL3RyYW5zbGF0b3InO1xuIl19