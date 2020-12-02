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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/builtin", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic", "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var dynamic_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/dynamic");
    var result_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result");
    var ArraySliceBuiltinFn = /** @class */ (function (_super) {
        tslib_1.__extends(ArraySliceBuiltinFn, _super);
        function ArraySliceBuiltinFn(lhs) {
            var _this = _super.call(this) || this;
            _this.lhs = lhs;
            return _this;
        }
        ArraySliceBuiltinFn.prototype.evaluate = function (node, args) {
            if (args.length === 0) {
                return this.lhs;
            }
            else {
                return dynamic_1.DynamicValue.fromUnknown(node);
            }
        };
        return ArraySliceBuiltinFn;
    }(result_1.KnownFn));
    exports.ArraySliceBuiltinFn = ArraySliceBuiltinFn;
    var ArrayConcatBuiltinFn = /** @class */ (function (_super) {
        tslib_1.__extends(ArrayConcatBuiltinFn, _super);
        function ArrayConcatBuiltinFn(lhs) {
            var _this = _super.call(this) || this;
            _this.lhs = lhs;
            return _this;
        }
        ArrayConcatBuiltinFn.prototype.evaluate = function (node, args) {
            var e_1, _a;
            var result = tslib_1.__spread(this.lhs);
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
        return ArrayConcatBuiltinFn;
    }(result_1.KnownFn));
    exports.ArrayConcatBuiltinFn = ArrayConcatBuiltinFn;
    var ObjectAssignBuiltinFn = /** @class */ (function (_super) {
        tslib_1.__extends(ObjectAssignBuiltinFn, _super);
        function ObjectAssignBuiltinFn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ObjectAssignBuiltinFn.prototype.evaluate = function (node, args) {
            var e_2, _a, e_3, _b;
            if (args.length === 0) {
                return dynamic_1.DynamicValue.fromUnsupportedSyntax(node);
            }
            try {
                for (var args_2 = tslib_1.__values(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
                    var arg = args_2_1.value;
                    if (arg instanceof dynamic_1.DynamicValue) {
                        return dynamic_1.DynamicValue.fromDynamicInput(node, arg);
                    }
                    else if (!(arg instanceof Map)) {
                        return dynamic_1.DynamicValue.fromUnsupportedSyntax(node);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var _c = tslib_1.__read(args), target = _c[0], sources = _c.slice(1);
            try {
                for (var sources_1 = tslib_1.__values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
                    var source = sources_1_1.value;
                    source.forEach(function (value, key) { return target.set(key, value); });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (sources_1_1 && !sources_1_1.done && (_b = sources_1.return)) _b.call(sources_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return target;
        };
        return ObjectAssignBuiltinFn;
    }(result_1.KnownFn));
    exports.ObjectAssignBuiltinFn = ObjectAssignBuiltinFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbHRpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGFydGlhbF9ldmFsdWF0b3Ivc3JjL2J1aWx0aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBSUgseUZBQXVDO0lBQ3ZDLHVGQUFvRTtJQUVwRTtRQUF5QywrQ0FBTztRQUM5Qyw2QkFBb0IsR0FBdUI7WUFBM0MsWUFDRSxpQkFBTyxTQUNSO1lBRm1CLFNBQUcsR0FBSCxHQUFHLENBQW9COztRQUUzQyxDQUFDO1FBRUQsc0NBQVEsR0FBUixVQUFTLElBQXVCLEVBQUUsSUFBd0I7WUFDeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLE9BQU8sc0JBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDO1FBQ0gsMEJBQUM7SUFBRCxDQUFDLEFBWkQsQ0FBeUMsZ0JBQU8sR0FZL0M7SUFaWSxrREFBbUI7SUFjaEM7UUFBMEMsZ0RBQU87UUFDL0MsOEJBQW9CLEdBQXVCO1lBQTNDLFlBQ0UsaUJBQU8sU0FDUjtZQUZtQixTQUFHLEdBQUgsR0FBRyxDQUFvQjs7UUFFM0MsQ0FBQztRQUVELHVDQUFRLEdBQVIsVUFBUyxJQUF1QixFQUFFLElBQXdCOztZQUN4RCxJQUFNLE1BQU0sb0JBQTJCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2pELEtBQWtCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQW5CLElBQU0sR0FBRyxpQkFBQTtvQkFDWixJQUFJLEdBQUcsWUFBWSxzQkFBWSxFQUFFO3dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZEO3lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDN0IsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLG1CQUFTLEdBQUcsR0FBRTtxQkFDckI7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbEI7aUJBQ0Y7Ozs7Ozs7OztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDSCwyQkFBQztJQUFELENBQUMsQUFsQkQsQ0FBMEMsZ0JBQU8sR0FrQmhEO0lBbEJZLG9EQUFvQjtJQW9CakM7UUFBMkMsaURBQU87UUFBbEQ7O1FBa0JBLENBQUM7UUFqQkMsd0NBQVEsR0FBUixVQUFTLElBQXVCLEVBQUUsSUFBd0I7O1lBQ3hELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sc0JBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqRDs7Z0JBQ0QsS0FBa0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBbkIsSUFBTSxHQUFHLGlCQUFBO29CQUNaLElBQUksR0FBRyxZQUFZLHNCQUFZLEVBQUU7d0JBQy9CLE9BQU8sc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ2pEO3lCQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFBRTt3QkFDaEMsT0FBTyxzQkFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNqRDtpQkFDRjs7Ozs7Ozs7O1lBQ0ssSUFBQSx5QkFBMkQsRUFBMUQsY0FBTSxFQUFFLHFCQUFrRCxDQUFDOztnQkFDbEUsS0FBcUIsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtvQkFBekIsSUFBTSxNQUFNLG9CQUFBO29CQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztpQkFDeEQ7Ozs7Ozs7OztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDSCw0QkFBQztJQUFELENBQUMsQUFsQkQsQ0FBMkMsZ0JBQU8sR0FrQmpEO0lBbEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7RHluYW1pY1ZhbHVlfSBmcm9tICcuL2R5bmFtaWMnO1xuaW1wb3J0IHtLbm93bkZuLCBSZXNvbHZlZFZhbHVlLCBSZXNvbHZlZFZhbHVlQXJyYXl9IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGNsYXNzIEFycmF5U2xpY2VCdWlsdGluRm4gZXh0ZW5kcyBLbm93bkZuIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsaHM6IFJlc29sdmVkVmFsdWVBcnJheSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBldmFsdWF0ZShub2RlOiB0cy5DYWxsRXhwcmVzc2lvbiwgYXJnczogUmVzb2x2ZWRWYWx1ZUFycmF5KTogUmVzb2x2ZWRWYWx1ZSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5saHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEeW5hbWljVmFsdWUuZnJvbVVua25vd24obm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUNvbmNhdEJ1aWx0aW5GbiBleHRlbmRzIEtub3duRm4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxoczogUmVzb2x2ZWRWYWx1ZUFycmF5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGV2YWx1YXRlKG5vZGU6IHRzLkNhbGxFeHByZXNzaW9uLCBhcmdzOiBSZXNvbHZlZFZhbHVlQXJyYXkpOiBSZXNvbHZlZFZhbHVlIHtcbiAgICBjb25zdCByZXN1bHQ6IFJlc29sdmVkVmFsdWVBcnJheSA9IFsuLi50aGlzLmxoc107XG4gICAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIER5bmFtaWNWYWx1ZSkge1xuICAgICAgICByZXN1bHQucHVzaChEeW5hbWljVmFsdWUuZnJvbUR5bmFtaWNJbnB1dChub2RlLCBhcmcpKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChhcmcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RBc3NpZ25CdWlsdGluRm4gZXh0ZW5kcyBLbm93bkZuIHtcbiAgZXZhbHVhdGUobm9kZTogdHMuQ2FsbEV4cHJlc3Npb24sIGFyZ3M6IFJlc29sdmVkVmFsdWVBcnJheSk6IFJlc29sdmVkVmFsdWUge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIER5bmFtaWNWYWx1ZS5mcm9tVW5zdXBwb3J0ZWRTeW50YXgobm9kZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgYXJnIG9mIGFyZ3MpIHtcbiAgICAgIGlmIChhcmcgaW5zdGFuY2VvZiBEeW5hbWljVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIER5bmFtaWNWYWx1ZS5mcm9tRHluYW1pY0lucHV0KG5vZGUsIGFyZyk7XG4gICAgICB9IGVsc2UgaWYgKCEoYXJnIGluc3RhbmNlb2YgTWFwKSkge1xuICAgICAgICByZXR1cm4gRHluYW1pY1ZhbHVlLmZyb21VbnN1cHBvcnRlZFN5bnRheChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3RhcmdldCwgLi4uc291cmNlc10gPSBhcmdzIGFzIE1hcDxzdHJpbmcsIFJlc29sdmVkVmFsdWU+W107XG4gICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgc291cmNlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5zZXQoa2V5LCB2YWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=