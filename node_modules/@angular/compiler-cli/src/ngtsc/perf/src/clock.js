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
        define("@angular/compiler-cli/src/ngtsc/perf/src/clock", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mark() {
        return process.hrtime();
    }
    exports.mark = mark;
    function timeSinceInMicros(mark) {
        var delta = process.hrtime(mark);
        return (delta[0] * 1000000) + Math.floor(delta[1] / 1000);
    }
    exports.timeSinceInMicros = timeSinceInMicros;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3BlcmYvc3JjL2Nsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBT0gsU0FBZ0IsSUFBSTtRQUNsQixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRkQsb0JBRUM7SUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFZO1FBQzVDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSEQsOENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRoaXMgZmlsZSB1c2VzICdwcm9jZXNzJ1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIgLz5cblxuZXhwb3J0IHR5cGUgSHJUaW1lID0gW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmsoKTogSHJUaW1lIHtcbiAgcmV0dXJuIHByb2Nlc3MuaHJ0aW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lU2luY2VJbk1pY3JvcyhtYXJrOiBIclRpbWUpOiBudW1iZXIge1xuICBjb25zdCBkZWx0YSA9IHByb2Nlc3MuaHJ0aW1lKG1hcmspO1xuICByZXR1cm4gKGRlbHRhWzBdICogMTAwMDAwMCkgKyBNYXRoLmZsb29yKGRlbHRhWzFdIC8gMTAwMCk7XG59XG4iXX0=