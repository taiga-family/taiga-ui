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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/known_declaration", ["require", "exports", "@angular/compiler-cli/src/ngtsc/reflection/src/host", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var host_1 = require("@angular/compiler-cli/src/ngtsc/reflection/src/host");
    var builtin_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin");
    var ts_helpers_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers");
    /** Resolved value for the JavaScript global `Object` declaration. */
    exports.jsGlobalObjectValue = new Map([['assign', new builtin_1.ObjectAssignBuiltinFn()]]);
    /** Resolved value for the `__assign()` TypeScript helper declaration. */
    var assignTsHelperFn = new ts_helpers_1.AssignHelperFn();
    /** Resolved value for the `__spread()` and `__spreadArrays()` TypeScript helper declarations. */
    var spreadTsHelperFn = new ts_helpers_1.SpreadHelperFn();
    /**
     * Resolves the specified known declaration to a resolved value. For example,
     * the known JavaScript global `Object` will resolve to a `Map` that provides the
     * `assign` method with a built-in function. This enables evaluation of `Object.assign`.
     */
    function resolveKnownDeclaration(decl) {
        switch (decl) {
            case host_1.KnownDeclaration.JsGlobalObject:
                return exports.jsGlobalObjectValue;
            case host_1.KnownDeclaration.TsHelperAssign:
                return assignTsHelperFn;
            case host_1.KnownDeclaration.TsHelperSpread:
            case host_1.KnownDeclaration.TsHelperSpreadArrays:
                return spreadTsHelperFn;
            default:
                throw new Error("Cannot resolve known declaration. Received: " + host_1.KnownDeclaration[decl] + ".");
        }
    }
    exports.resolveKnownDeclaration = resolveKnownDeclaration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vd25fZGVjbGFyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3BhcnRpYWxfZXZhbHVhdG9yL3NyYy9rbm93bl9kZWNsYXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDRFQUEyRDtJQUUzRCx5RkFBZ0Q7SUFFaEQsK0ZBQTREO0lBRTVELHFFQUFxRTtJQUN4RCxRQUFBLG1CQUFtQixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSwrQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRGLHlFQUF5RTtJQUN6RSxJQUFNLGdCQUFnQixHQUFHLElBQUksMkJBQWMsRUFBRSxDQUFDO0lBRTlDLGlHQUFpRztJQUNqRyxJQUFNLGdCQUFnQixHQUFHLElBQUksMkJBQWMsRUFBRSxDQUFDO0lBRTlDOzs7O09BSUc7SUFDSCxTQUFnQix1QkFBdUIsQ0FBQyxJQUFzQjtRQUM1RCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssdUJBQWdCLENBQUMsY0FBYztnQkFDbEMsT0FBTywyQkFBbUIsQ0FBQztZQUM3QixLQUFLLHVCQUFnQixDQUFDLGNBQWM7Z0JBQ2xDLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyx1QkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDckMsS0FBSyx1QkFBZ0IsQ0FBQyxvQkFBb0I7Z0JBQ3hDLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUI7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBK0MsdUJBQWdCLENBQUMsSUFBSSxDQUFDLE1BQUcsQ0FBQyxDQUFDO1NBQzdGO0lBQ0gsQ0FBQztJQVpELDBEQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0tub3duRGVjbGFyYXRpb259IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24vc3JjL2hvc3QnO1xuXG5pbXBvcnQge09iamVjdEFzc2lnbkJ1aWx0aW5Gbn0gZnJvbSAnLi9idWlsdGluJztcbmltcG9ydCB7UmVzb2x2ZWRWYWx1ZX0gZnJvbSAnLi9yZXN1bHQnO1xuaW1wb3J0IHtBc3NpZ25IZWxwZXJGbiwgU3ByZWFkSGVscGVyRm59IGZyb20gJy4vdHNfaGVscGVycyc7XG5cbi8qKiBSZXNvbHZlZCB2YWx1ZSBmb3IgdGhlIEphdmFTY3JpcHQgZ2xvYmFsIGBPYmplY3RgIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IGpzR2xvYmFsT2JqZWN0VmFsdWUgPSBuZXcgTWFwKFtbJ2Fzc2lnbicsIG5ldyBPYmplY3RBc3NpZ25CdWlsdGluRm4oKV1dKTtcblxuLyoqIFJlc29sdmVkIHZhbHVlIGZvciB0aGUgYF9fYXNzaWduKClgIFR5cGVTY3JpcHQgaGVscGVyIGRlY2xhcmF0aW9uLiAqL1xuY29uc3QgYXNzaWduVHNIZWxwZXJGbiA9IG5ldyBBc3NpZ25IZWxwZXJGbigpO1xuXG4vKiogUmVzb2x2ZWQgdmFsdWUgZm9yIHRoZSBgX19zcHJlYWQoKWAgYW5kIGBfX3NwcmVhZEFycmF5cygpYCBUeXBlU2NyaXB0IGhlbHBlciBkZWNsYXJhdGlvbnMuICovXG5jb25zdCBzcHJlYWRUc0hlbHBlckZuID0gbmV3IFNwcmVhZEhlbHBlckZuKCk7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHNwZWNpZmllZCBrbm93biBkZWNsYXJhdGlvbiB0byBhIHJlc29sdmVkIHZhbHVlLiBGb3IgZXhhbXBsZSxcbiAqIHRoZSBrbm93biBKYXZhU2NyaXB0IGdsb2JhbCBgT2JqZWN0YCB3aWxsIHJlc29sdmUgdG8gYSBgTWFwYCB0aGF0IHByb3ZpZGVzIHRoZVxuICogYGFzc2lnbmAgbWV0aG9kIHdpdGggYSBidWlsdC1pbiBmdW5jdGlvbi4gVGhpcyBlbmFibGVzIGV2YWx1YXRpb24gb2YgYE9iamVjdC5hc3NpZ25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUtub3duRGVjbGFyYXRpb24oZGVjbDogS25vd25EZWNsYXJhdGlvbik6IFJlc29sdmVkVmFsdWUge1xuICBzd2l0Y2ggKGRlY2wpIHtcbiAgICBjYXNlIEtub3duRGVjbGFyYXRpb24uSnNHbG9iYWxPYmplY3Q6XG4gICAgICByZXR1cm4ganNHbG9iYWxPYmplY3RWYWx1ZTtcbiAgICBjYXNlIEtub3duRGVjbGFyYXRpb24uVHNIZWxwZXJBc3NpZ246XG4gICAgICByZXR1cm4gYXNzaWduVHNIZWxwZXJGbjtcbiAgICBjYXNlIEtub3duRGVjbGFyYXRpb24uVHNIZWxwZXJTcHJlYWQ6XG4gICAgY2FzZSBLbm93bkRlY2xhcmF0aW9uLlRzSGVscGVyU3ByZWFkQXJyYXlzOlxuICAgICAgcmV0dXJuIHNwcmVhZFRzSGVscGVyRm47XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlc29sdmUga25vd24gZGVjbGFyYXRpb24uIFJlY2VpdmVkOiAke0tub3duRGVjbGFyYXRpb25bZGVjbF19LmApO1xuICB9XG59XG4iXX0=