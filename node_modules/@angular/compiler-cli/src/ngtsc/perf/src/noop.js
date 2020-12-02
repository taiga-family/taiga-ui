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
        define("@angular/compiler-cli/src/ngtsc/perf/src/noop", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NOOP_PERF_RECORDER = {
        enabled: false,
        mark: function (name, node, category, detail) { },
        start: function (name, node, category, detail) {
            return 0;
        },
        stop: function (span) { },
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcGVyZi9zcmMvbm9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQU1VLFFBQUEsa0JBQWtCLEdBQWlCO1FBQzlDLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLFVBQUMsSUFBWSxFQUFFLElBQWtDLEVBQUUsUUFBaUIsRUFBRSxNQUFlLElBQzlFLENBQUM7UUFDZCxLQUFLLEVBQUUsVUFBQyxJQUFZLEVBQUUsSUFBa0MsRUFBRSxRQUFpQixFQUFFLE1BQWU7WUFFdEYsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBQ0wsSUFBSSxFQUFFLFVBQUMsSUFBa0IsSUFBWSxDQUFDO0tBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1BlcmZSZWNvcmRlcn0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgY29uc3QgTk9PUF9QRVJGX1JFQ09SREVSOiBQZXJmUmVjb3JkZXIgPSB7XG4gIGVuYWJsZWQ6IGZhbHNlLFxuICBtYXJrOiAobmFtZTogc3RyaW5nLCBub2RlOiB0cy5Tb3VyY2VGaWxlfHRzLkRlY2xhcmF0aW9uLCBjYXRlZ29yeT86IHN0cmluZywgZGV0YWlsPzogc3RyaW5nKTpcbiAgICAgIHZvaWQgPT4ge30sXG4gIHN0YXJ0OiAobmFtZTogc3RyaW5nLCBub2RlOiB0cy5Tb3VyY2VGaWxlfHRzLkRlY2xhcmF0aW9uLCBjYXRlZ29yeT86IHN0cmluZywgZGV0YWlsPzogc3RyaW5nKTpcbiAgICAgIG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgc3RvcDogKHNwYW46IG51bWJlcnxmYWxzZSk6IHZvaWQgPT4ge30sXG59O1xuIl19