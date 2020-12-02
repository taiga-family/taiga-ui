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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var builtin_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin");
    var dynamic_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic");
    var result_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result");
    // Use the same implementation we use for `Object.assign()`. Semantically these functions are the
    // same, so they can also share the same evaluation code.
    var AssignHelperFn = /** @class */ (function (_super) {
        tslib_1.__extends(AssignHelperFn, _super);
        function AssignHelperFn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AssignHelperFn;
    }(builtin_1.ObjectAssignBuiltinFn));
    exports.AssignHelperFn = AssignHelperFn;
    // Used for both `__spread()` and `__spreadArrays()` TypeScript helper functions.
    var SpreadHelperFn = /** @class */ (function (_super) {
        tslib_1.__extends(SpreadHelperFn, _super);
        function SpreadHelperFn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpreadHelperFn.prototype.evaluate = function (node, args) {
            var e_1, _a;
            var result = [];
            try {
                for (var args_1 = tslib_1.__values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var arg = args_1_1.value;
                    if (arg instanceof dynamic_1.DynamicValue) {
                        result.push(dynamic_1.DynamicValue.fromDynamicInput(node, arg));
                    }
                    else if (Array.isArray(arg)) {
                        result.push.apply(result, tslib_1.__spread(arg));
                    }
                    else {
                        result.push(arg);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        };
        return SpreadHelperFn;
    }(result_1.KnownFn));
    exports.SpreadHelperFn = SpreadHelperFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGFydGlhbF9ldmFsdWF0b3Ivc3JjL3RzX2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBSUgseUZBQWdEO0lBQ2hELHlGQUF1QztJQUN2Qyx1RkFBcUQ7SUFHckQsaUdBQWlHO0lBQ2pHLHlEQUF5RDtJQUN6RDtRQUFvQywwQ0FBcUI7UUFBekQ7O1FBQTJELENBQUM7UUFBRCxxQkFBQztJQUFELENBQUMsQUFBNUQsQ0FBb0MsK0JBQXFCLEdBQUc7SUFBL0Msd0NBQWM7SUFFM0IsaUZBQWlGO0lBQ2pGO1FBQW9DLDBDQUFPO1FBQTNDOztRQWdCQSxDQUFDO1FBZkMsaUNBQVEsR0FBUixVQUFTLElBQWEsRUFBRSxJQUF3Qjs7WUFDOUMsSUFBTSxNQUFNLEdBQXVCLEVBQUUsQ0FBQzs7Z0JBRXRDLEtBQWtCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQW5CLElBQU0sR0FBRyxpQkFBQTtvQkFDWixJQUFJLEdBQUcsWUFBWSxzQkFBWSxFQUFFO3dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZEO3lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDN0IsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLG1CQUFTLEdBQUcsR0FBRTtxQkFDckI7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbEI7aUJBQ0Y7Ozs7Ozs7OztZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDSCxxQkFBQztJQUFELENBQUMsQUFoQkQsQ0FBb0MsZ0JBQU8sR0FnQjFDO0lBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtPYmplY3RBc3NpZ25CdWlsdGluRm59IGZyb20gJy4vYnVpbHRpbic7XG5pbXBvcnQge0R5bmFtaWNWYWx1ZX0gZnJvbSAnLi9keW5hbWljJztcbmltcG9ydCB7S25vd25GbiwgUmVzb2x2ZWRWYWx1ZUFycmF5fSBmcm9tICcuL3Jlc3VsdCc7XG5cblxuLy8gVXNlIHRoZSBzYW1lIGltcGxlbWVudGF0aW9uIHdlIHVzZSBmb3IgYE9iamVjdC5hc3NpZ24oKWAuIFNlbWFudGljYWxseSB0aGVzZSBmdW5jdGlvbnMgYXJlIHRoZVxuLy8gc2FtZSwgc28gdGhleSBjYW4gYWxzbyBzaGFyZSB0aGUgc2FtZSBldmFsdWF0aW9uIGNvZGUuXG5leHBvcnQgY2xhc3MgQXNzaWduSGVscGVyRm4gZXh0ZW5kcyBPYmplY3RBc3NpZ25CdWlsdGluRm4ge31cblxuLy8gVXNlZCBmb3IgYm90aCBgX19zcHJlYWQoKWAgYW5kIGBfX3NwcmVhZEFycmF5cygpYCBUeXBlU2NyaXB0IGhlbHBlciBmdW5jdGlvbnMuXG5leHBvcnQgY2xhc3MgU3ByZWFkSGVscGVyRm4gZXh0ZW5kcyBLbm93bkZuIHtcbiAgZXZhbHVhdGUobm9kZTogdHMuTm9kZSwgYXJnczogUmVzb2x2ZWRWYWx1ZUFycmF5KTogUmVzb2x2ZWRWYWx1ZUFycmF5IHtcbiAgICBjb25zdCByZXN1bHQ6IFJlc29sdmVkVmFsdWVBcnJheSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIER5bmFtaWNWYWx1ZSkge1xuICAgICAgICByZXN1bHQucHVzaChEeW5hbWljVmFsdWUuZnJvbUR5bmFtaWNJbnB1dChub2RlLCBhcmcpKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChhcmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==