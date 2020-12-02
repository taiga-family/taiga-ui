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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator", ["require", "exports", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interface", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamic_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic");
    exports.DynamicValue = dynamic_1.DynamicValue;
    var interface_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/interface");
    exports.PartialEvaluator = interface_1.PartialEvaluator;
    var result_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result");
    exports.EnumValue = result_1.EnumValue;
    exports.KnownFn = result_1.KnownFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3BhcnRpYWxfZXZhbHVhdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUZBQTJDO0lBQW5DLGlDQUFBLFlBQVksQ0FBQTtJQUNwQiw2RkFBMEU7SUFBekMsdUNBQUEsZ0JBQWdCLENBQUE7SUFDakQsdUZBQXFHO0lBQTdGLDZCQUFBLFNBQVMsQ0FBQTtJQUFFLDJCQUFBLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtEeW5hbWljVmFsdWV9IGZyb20gJy4vc3JjL2R5bmFtaWMnO1xuZXhwb3J0IHtGb3JlaWduRnVuY3Rpb25SZXNvbHZlciwgUGFydGlhbEV2YWx1YXRvcn0gZnJvbSAnLi9zcmMvaW50ZXJmYWNlJztcbmV4cG9ydCB7RW51bVZhbHVlLCBLbm93bkZuLCBSZXNvbHZlZFZhbHVlLCBSZXNvbHZlZFZhbHVlQXJyYXksIFJlc29sdmVkVmFsdWVNYXB9IGZyb20gJy4vc3JjL3Jlc3VsdCc7XG4iXX0=