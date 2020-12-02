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
        define("@angular/compiler-cli/src/diagnostics/typescript_version", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Converts a `string` version into an array of numbers
     * @example
     * toNumbers('2.0.1'); // returns [2, 0, 1]
     */
    function toNumbers(value) {
        return value.split('.').map(Number);
    }
    exports.toNumbers = toNumbers;
    /**
     * Compares two arrays of positive numbers with lexicographical order in mind.
     *
     * However - unlike lexicographical order - for arrays of different length we consider:
     * [1, 2, 3] = [1, 2, 3, 0] instead of [1, 2, 3] < [1, 2, 3, 0]
     *
     * @param a The 'left hand' array in the comparison test
     * @param b The 'right hand' in the comparison test
     * @returns {-1|0|1} The comparison result: 1 if a is greater, -1 if b is greater, 0 is the two
     * arrays are equals
     */
    function compareNumbers(a, b) {
        var max = Math.max(a.length, b.length);
        var min = Math.min(a.length, b.length);
        for (var i = 0; i < min; i++) {
            if (a[i] > b[i])
                return 1;
            if (a[i] < b[i])
                return -1;
        }
        if (min !== max) {
            var longestArray = a.length === max ? a : b;
            // The result to return in case the to arrays are considered different (1 if a is greater,
            // -1 if b is greater)
            var comparisonResult = a.length === max ? 1 : -1;
            // Check that at least one of the remaining elements is greater than 0 to consider that the two
            // arrays are different (e.g. [1, 0] and [1] are considered the same but not [1, 0, 1] and [1])
            for (var i = min; i < max; i++) {
                if (longestArray[i] > 0) {
                    return comparisonResult;
                }
            }
        }
        return 0;
    }
    exports.compareNumbers = compareNumbers;
    /**
     * Checks if a TypeScript version is:
     * - greater or equal than the provided `low` version,
     * - lower or equal than an optional `high` version.
     *
     * @param version The TypeScript version
     * @param low The minimum version
     * @param high The maximum version
     */
    function isVersionBetween(version, low, high) {
        var tsNumbers = toNumbers(version);
        if (high !== undefined) {
            return compareNumbers(toNumbers(low), tsNumbers) <= 0 &&
                compareNumbers(toNumbers(high), tsNumbers) >= 0;
        }
        return compareNumbers(toNumbers(low), tsNumbers) <= 0;
    }
    exports.isVersionBetween = isVersionBetween;
    /**
     * Compares two versions
     *
     * @param v1 The 'left hand' version in the comparison test
     * @param v2 The 'right hand' version in the comparison test
     * @returns {-1|0|1} The comparison result: 1 if v1 is greater, -1 if v2 is greater, 0 is the two
     * versions are equals
     */
    function compareVersions(v1, v2) {
        return compareNumbers(toNumbers(v1), toNumbers(v2));
    }
    exports.compareVersions = compareVersions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF92ZXJzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9kaWFnbm9zdGljcy90eXBlc2NyaXB0X3ZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSDs7OztPQUlHO0lBQ0gsU0FBZ0IsU0FBUyxDQUFDLEtBQWE7UUFDckMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRkQsOEJBRUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsU0FBZ0IsY0FBYyxDQUFDLENBQVcsRUFBRSxDQUFXO1FBQ3JELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ2YsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlDLDBGQUEwRjtZQUMxRixzQkFBc0I7WUFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRCwrRkFBK0Y7WUFDL0YsK0ZBQStGO1lBQy9GLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdkIsT0FBTyxnQkFBZ0IsQ0FBQztpQkFDekI7YUFDRjtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBMUJELHdDQTBCQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEdBQVcsRUFBRSxJQUFhO1FBQzFFLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pELGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBUEQsNENBT0M7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsU0FBZ0IsZUFBZSxDQUFDLEVBQVUsRUFBRSxFQUFVO1FBQ3BELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRkQsMENBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBgc3RyaW5nYCB2ZXJzaW9uIGludG8gYW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQGV4YW1wbGVcbiAqIHRvTnVtYmVycygnMi4wLjEnKTsgLy8gcmV0dXJucyBbMiwgMCwgMV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVycyh2YWx1ZTogc3RyaW5nKTogbnVtYmVyW10ge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbn1cblxuLyoqXG4gKiBDb21wYXJlcyB0d28gYXJyYXlzIG9mIHBvc2l0aXZlIG51bWJlcnMgd2l0aCBsZXhpY29ncmFwaGljYWwgb3JkZXIgaW4gbWluZC5cbiAqXG4gKiBIb3dldmVyIC0gdW5saWtlIGxleGljb2dyYXBoaWNhbCBvcmRlciAtIGZvciBhcnJheXMgb2YgZGlmZmVyZW50IGxlbmd0aCB3ZSBjb25zaWRlcjpcbiAqIFsxLCAyLCAzXSA9IFsxLCAyLCAzLCAwXSBpbnN0ZWFkIG9mIFsxLCAyLCAzXSA8IFsxLCAyLCAzLCAwXVxuICpcbiAqIEBwYXJhbSBhIFRoZSAnbGVmdCBoYW5kJyBhcnJheSBpbiB0aGUgY29tcGFyaXNvbiB0ZXN0XG4gKiBAcGFyYW0gYiBUaGUgJ3JpZ2h0IGhhbmQnIGluIHRoZSBjb21wYXJpc29uIHRlc3RcbiAqIEByZXR1cm5zIHstMXwwfDF9IFRoZSBjb21wYXJpc29uIHJlc3VsdDogMSBpZiBhIGlzIGdyZWF0ZXIsIC0xIGlmIGIgaXMgZ3JlYXRlciwgMCBpcyB0aGUgdHdvXG4gKiBhcnJheXMgYXJlIGVxdWFsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZU51bWJlcnMoYTogbnVtYmVyW10sIGI6IG51bWJlcltdKTogLTF8MHwxIHtcbiAgY29uc3QgbWF4ID0gTWF0aC5tYXgoYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgY29uc3QgbWluID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgaWYgKGFbaV0gPiBiW2ldKSByZXR1cm4gMTtcbiAgICBpZiAoYVtpXSA8IGJbaV0pIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChtaW4gIT09IG1heCkge1xuICAgIGNvbnN0IGxvbmdlc3RBcnJheSA9IGEubGVuZ3RoID09PSBtYXggPyBhIDogYjtcblxuICAgIC8vIFRoZSByZXN1bHQgdG8gcmV0dXJuIGluIGNhc2UgdGhlIHRvIGFycmF5cyBhcmUgY29uc2lkZXJlZCBkaWZmZXJlbnQgKDEgaWYgYSBpcyBncmVhdGVyLFxuICAgIC8vIC0xIGlmIGIgaXMgZ3JlYXRlcilcbiAgICBjb25zdCBjb21wYXJpc29uUmVzdWx0ID0gYS5sZW5ndGggPT09IG1heCA/IDEgOiAtMTtcblxuICAgIC8vIENoZWNrIHRoYXQgYXQgbGVhc3Qgb25lIG9mIHRoZSByZW1haW5pbmcgZWxlbWVudHMgaXMgZ3JlYXRlciB0aGFuIDAgdG8gY29uc2lkZXIgdGhhdCB0aGUgdHdvXG4gICAgLy8gYXJyYXlzIGFyZSBkaWZmZXJlbnQgKGUuZy4gWzEsIDBdIGFuZCBbMV0gYXJlIGNvbnNpZGVyZWQgdGhlIHNhbWUgYnV0IG5vdCBbMSwgMCwgMV0gYW5kIFsxXSlcbiAgICBmb3IgKGxldCBpID0gbWluOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIGlmIChsb25nZXN0QXJyYXlbaV0gPiAwKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJpc29uUmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIFR5cGVTY3JpcHQgdmVyc2lvbiBpczpcbiAqIC0gZ3JlYXRlciBvciBlcXVhbCB0aGFuIHRoZSBwcm92aWRlZCBgbG93YCB2ZXJzaW9uLFxuICogLSBsb3dlciBvciBlcXVhbCB0aGFuIGFuIG9wdGlvbmFsIGBoaWdoYCB2ZXJzaW9uLlxuICpcbiAqIEBwYXJhbSB2ZXJzaW9uIFRoZSBUeXBlU2NyaXB0IHZlcnNpb25cbiAqIEBwYXJhbSBsb3cgVGhlIG1pbmltdW0gdmVyc2lvblxuICogQHBhcmFtIGhpZ2ggVGhlIG1heGltdW0gdmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWZXJzaW9uQmV0d2Vlbih2ZXJzaW9uOiBzdHJpbmcsIGxvdzogc3RyaW5nLCBoaWdoPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRzTnVtYmVycyA9IHRvTnVtYmVycyh2ZXJzaW9uKTtcbiAgaWYgKGhpZ2ggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjb21wYXJlTnVtYmVycyh0b051bWJlcnMobG93KSwgdHNOdW1iZXJzKSA8PSAwICYmXG4gICAgICAgIGNvbXBhcmVOdW1iZXJzKHRvTnVtYmVycyhoaWdoKSwgdHNOdW1iZXJzKSA+PSAwO1xuICB9XG4gIHJldHVybiBjb21wYXJlTnVtYmVycyh0b051bWJlcnMobG93KSwgdHNOdW1iZXJzKSA8PSAwO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byB2ZXJzaW9uc1xuICpcbiAqIEBwYXJhbSB2MSBUaGUgJ2xlZnQgaGFuZCcgdmVyc2lvbiBpbiB0aGUgY29tcGFyaXNvbiB0ZXN0XG4gKiBAcGFyYW0gdjIgVGhlICdyaWdodCBoYW5kJyB2ZXJzaW9uIGluIHRoZSBjb21wYXJpc29uIHRlc3RcbiAqIEByZXR1cm5zIHstMXwwfDF9IFRoZSBjb21wYXJpc29uIHJlc3VsdDogMSBpZiB2MSBpcyBncmVhdGVyLCAtMSBpZiB2MiBpcyBncmVhdGVyLCAwIGlzIHRoZSB0d29cbiAqIHZlcnNpb25zIGFyZSBlcXVhbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9ucyh2MTogc3RyaW5nLCB2Mjogc3RyaW5nKTogLTF8MHwxIHtcbiAgcmV0dXJuIGNvbXBhcmVOdW1iZXJzKHRvTnVtYmVycyh2MSksIHRvTnVtYmVycyh2MikpO1xufVxuIl19