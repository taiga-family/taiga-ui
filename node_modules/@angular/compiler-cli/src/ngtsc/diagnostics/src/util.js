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
        define("@angular/compiler-cli/src/ngtsc/diagnostics/src/util", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERROR_CODE_MATCHER = /(\u001b\[\d+m ?)TS-99(\d+: ?\u001b\[\d+m)/g;
    /**
     * During formatting of `ts.Diagnostic`s, the numeric code of each diagnostic is prefixed with the
     * hard-coded "TS" prefix. For Angular's own error codes, a prefix of "NG" is desirable. To achieve
     * this, all Angular error codes start with "-99" so that the sequence "TS-99" can be assumed to
     * correspond with an Angular specific error code. This function replaces those occurrences with
     * just "NG".
     *
     * @param errors The formatted diagnostics
     */
    function replaceTsWithNgInErrors(errors) {
        return errors.replace(ERROR_CODE_MATCHER, '$1NG$2');
    }
    exports.replaceTsWithNgInErrors = replaceTsWithNgInErrors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZGlhZ25vc3RpY3Mvc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxJQUFNLGtCQUFrQixHQUFHLDRDQUE0QyxDQUFDO0lBRXhFOzs7Ozs7OztPQVFHO0lBQ0gsU0FBZ0IsdUJBQXVCLENBQUMsTUFBYztRQUNwRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUZELDBEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBFUlJPUl9DT0RFX01BVENIRVIgPSAvKFxcdTAwMWJcXFtcXGQrbSA/KVRTLTk5KFxcZCs6ID9cXHUwMDFiXFxbXFxkK20pL2c7XG5cbi8qKlxuICogRHVyaW5nIGZvcm1hdHRpbmcgb2YgYHRzLkRpYWdub3N0aWNgcywgdGhlIG51bWVyaWMgY29kZSBvZiBlYWNoIGRpYWdub3N0aWMgaXMgcHJlZml4ZWQgd2l0aCB0aGVcbiAqIGhhcmQtY29kZWQgXCJUU1wiIHByZWZpeC4gRm9yIEFuZ3VsYXIncyBvd24gZXJyb3IgY29kZXMsIGEgcHJlZml4IG9mIFwiTkdcIiBpcyBkZXNpcmFibGUuIFRvIGFjaGlldmVcbiAqIHRoaXMsIGFsbCBBbmd1bGFyIGVycm9yIGNvZGVzIHN0YXJ0IHdpdGggXCItOTlcIiBzbyB0aGF0IHRoZSBzZXF1ZW5jZSBcIlRTLTk5XCIgY2FuIGJlIGFzc3VtZWQgdG9cbiAqIGNvcnJlc3BvbmQgd2l0aCBhbiBBbmd1bGFyIHNwZWNpZmljIGVycm9yIGNvZGUuIFRoaXMgZnVuY3Rpb24gcmVwbGFjZXMgdGhvc2Ugb2NjdXJyZW5jZXMgd2l0aFxuICoganVzdCBcIk5HXCIuXG4gKlxuICogQHBhcmFtIGVycm9ycyBUaGUgZm9ybWF0dGVkIGRpYWdub3N0aWNzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVHNXaXRoTmdJbkVycm9ycyhlcnJvcnM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlcnJvcnMucmVwbGFjZShFUlJPUl9DT0RFX01BVENIRVIsICckMU5HJDInKTtcbn1cbiJdfQ==