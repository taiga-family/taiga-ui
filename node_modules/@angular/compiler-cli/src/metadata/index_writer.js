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
        define("@angular/compiler-cli/src/metadata/index_writer", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var INDEX_HEADER = "/**\n * Generated bundle index. Do not edit.\n */\n";
    function privateEntriesToIndex(index, privates) {
        var e_1, _a, e_2, _b;
        var results = [INDEX_HEADER];
        // Export all of the index symbols.
        results.push("export * from '" + index + "';", '');
        // Simplify the exports
        var exports = new Map();
        try {
            for (var privates_1 = tslib_1.__values(privates), privates_1_1 = privates_1.next(); !privates_1_1.done; privates_1_1 = privates_1.next()) {
                var entry = privates_1_1.value;
                var entries = exports.get(entry.module);
                if (!entries) {
                    entries = [];
                    exports.set(entry.module, entries);
                }
                entries.push(entry);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (privates_1_1 && !privates_1_1.done && (_a = privates_1.return)) _a.call(privates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var compareEntries = compare(function (e) { return e.name; });
        var compareModules = compare(function (e) { return e[0]; });
        var orderedExports = Array.from(exports)
            .map(function (_a) {
            var _b = tslib_1.__read(_a, 2), module = _b[0], entries = _b[1];
            return [module, entries.sort(compareEntries)];
        })
            .sort(compareModules);
        try {
            for (var orderedExports_1 = tslib_1.__values(orderedExports), orderedExports_1_1 = orderedExports_1.next(); !orderedExports_1_1.done; orderedExports_1_1 = orderedExports_1.next()) {
                var _c = tslib_1.__read(orderedExports_1_1.value, 2), module_1 = _c[0], entries = _c[1];
                var symbols = entries.map(function (e) { return e.name + " as " + e.privateName; });
                results.push("export {" + symbols + "} from '" + module_1 + "';");
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (orderedExports_1_1 && !orderedExports_1_1.done && (_b = orderedExports_1.return)) _b.call(orderedExports_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return results.join('\n');
    }
    exports.privateEntriesToIndex = privateEntriesToIndex;
    function compare(select) {
        return function (a, b) {
            var ak = select(a);
            var bk = select(b);
            return ak > bk ? 1 : ak < bk ? -1 : 0;
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfd3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9tZXRhZGF0YS9pbmRleF93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBSUgsSUFBTSxZQUFZLEdBQUcscURBR3BCLENBQUM7SUFJRixTQUFnQixxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsUUFBOEI7O1FBQ2pGLElBQU0sT0FBTyxHQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsbUNBQW1DO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQWtCLEtBQUssT0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLHVCQUF1QjtRQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBZ0MsQ0FBQzs7WUFFeEQsS0FBb0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBekIsSUFBTSxLQUFLLHFCQUFBO2dCQUNkLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNaLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCOzs7Ozs7Ozs7UUFHRCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBQyxDQUFxQixJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsVUFBQyxDQUFXLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUosQ0FBSSxDQUFDLENBQUM7UUFDdEQsSUFBTSxjQUFjLEdBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2QsR0FBRyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWpCLDBCQUFpQixFQUFoQixjQUFNLEVBQUUsZUFBTztZQUFNLE9BQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUFoRCxDQUFnRCxDQUFDO2FBQzVFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFFOUIsS0FBZ0MsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXJDLElBQUEsZ0RBQWlCLEVBQWhCLGdCQUFNLEVBQUUsZUFBTztnQkFDekIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFHLENBQUMsQ0FBQyxJQUFJLFlBQU8sQ0FBQyxDQUFDLFdBQWEsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQVcsT0FBTyxnQkFBVyxRQUFNLE9BQUksQ0FBQyxDQUFDO2FBQ3ZEOzs7Ozs7Ozs7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWhDRCxzREFnQ0M7SUFFRCxTQUFTLE9BQU8sQ0FBTyxNQUFtQjtRQUN4QyxPQUFPLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QnVuZGxlUHJpdmF0ZUVudHJ5fSBmcm9tICcuL2J1bmRsZXInO1xuXG5jb25zdCBJTkRFWF9IRUFERVIgPSBgLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuYDtcblxudHlwZSBNYXBFbnRyeSA9IFtzdHJpbmcsIEJ1bmRsZVByaXZhdGVFbnRyeVtdXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByaXZhdGVFbnRyaWVzVG9JbmRleChpbmRleDogc3RyaW5nLCBwcml2YXRlczogQnVuZGxlUHJpdmF0ZUVudHJ5W10pOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtJTkRFWF9IRUFERVJdO1xuXG4gIC8vIEV4cG9ydCBhbGwgb2YgdGhlIGluZGV4IHN5bWJvbHMuXG4gIHJlc3VsdHMucHVzaChgZXhwb3J0ICogZnJvbSAnJHtpbmRleH0nO2AsICcnKTtcblxuICAvLyBTaW1wbGlmeSB0aGUgZXhwb3J0c1xuICBjb25zdCBleHBvcnRzID0gbmV3IE1hcDxzdHJpbmcsIEJ1bmRsZVByaXZhdGVFbnRyeVtdPigpO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgcHJpdmF0ZXMpIHtcbiAgICBsZXQgZW50cmllcyA9IGV4cG9ydHMuZ2V0KGVudHJ5Lm1vZHVsZSk7XG4gICAgaWYgKCFlbnRyaWVzKSB7XG4gICAgICBlbnRyaWVzID0gW107XG4gICAgICBleHBvcnRzLnNldChlbnRyeS5tb2R1bGUsIGVudHJpZXMpO1xuICAgIH1cbiAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cblxuICBjb25zdCBjb21wYXJlRW50cmllcyA9IGNvbXBhcmUoKGU6IEJ1bmRsZVByaXZhdGVFbnRyeSkgPT4gZS5uYW1lKTtcbiAgY29uc3QgY29tcGFyZU1vZHVsZXMgPSBjb21wYXJlKChlOiBNYXBFbnRyeSkgPT4gZVswXSk7XG4gIGNvbnN0IG9yZGVyZWRFeHBvcnRzID1cbiAgICAgIEFycmF5LmZyb20oZXhwb3J0cylcbiAgICAgICAgICAubWFwKChbbW9kdWxlLCBlbnRyaWVzXSkgPT4gPE1hcEVudHJ5Plttb2R1bGUsIGVudHJpZXMuc29ydChjb21wYXJlRW50cmllcyldKVxuICAgICAgICAgIC5zb3J0KGNvbXBhcmVNb2R1bGVzKTtcblxuICBmb3IgKGNvbnN0IFttb2R1bGUsIGVudHJpZXNdIG9mIG9yZGVyZWRFeHBvcnRzKSB7XG4gICAgbGV0IHN5bWJvbHMgPSBlbnRyaWVzLm1hcChlID0+IGAke2UubmFtZX0gYXMgJHtlLnByaXZhdGVOYW1lfWApO1xuICAgIHJlc3VsdHMucHVzaChgZXhwb3J0IHske3N5bWJvbHN9fSBmcm9tICcke21vZHVsZX0nO2ApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmU8RSwgVD4oc2VsZWN0OiAoZTogRSkgPT4gVCk6IChhOiBFLCBiOiBFKSA9PiBudW1iZXIge1xuICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICBjb25zdCBhayA9IHNlbGVjdChhKTtcbiAgICBjb25zdCBiayA9IHNlbGVjdChiKTtcbiAgICByZXR1cm4gYWsgPiBiayA/IDEgOiBhayA8IGJrID8gLTEgOiAwO1xuICB9O1xufSJdfQ==