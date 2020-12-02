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
        define("zone.js/lib/rxjs/rxjs-fake-async", ["require", "exports", "rxjs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rxjs_1 = require("rxjs");
    Zone.__load_patch('rxjs.Scheduler.now', function (global, Zone, api) {
        api.patchMethod(rxjs_1.Scheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
        api.patchMethod(rxjs_1.asyncScheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
        api.patchMethod(rxjs_1.asapScheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy1mYWtlLWFzeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvcnhqcy9yeGpzLWZha2UtYXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCw2QkFBOEQ7SUFFOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7UUFDckYsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBUyxFQUFFLEtBQUssRUFBRSxVQUFDLFFBQWtCLElBQUssT0FBQSxVQUFDLElBQVMsRUFBRSxJQUFXO1lBQy9FLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUZ5RCxDQUV6RCxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsV0FBVyxDQUFDLHFCQUFjLEVBQUUsS0FBSyxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFVBQUMsSUFBUyxFQUFFLElBQVc7WUFDcEYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBRjhELENBRTlELENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxXQUFXLENBQUMsb0JBQWEsRUFBRSxLQUFLLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztZQUNuRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFGNkQsQ0FFN0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2NoZWR1bGVyLCBhc2FwU2NoZWR1bGVyLCBhc3luY1NjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdyeGpzLlNjaGVkdWxlci5ub3cnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlLCBhcGk6IF9ab25lUHJpdmF0ZSkgPT4ge1xuICBhcGkucGF0Y2hNZXRob2QoU2NoZWR1bGVyLCAnbm93JywgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IHtcbiAgICByZXR1cm4gRGF0ZS5ub3cuY2FsbChzZWxmKTtcbiAgfSk7XG4gIGFwaS5wYXRjaE1ldGhvZChhc3luY1NjaGVkdWxlciwgJ25vdycsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93LmNhbGwoc2VsZik7XG4gIH0pO1xuICBhcGkucGF0Y2hNZXRob2QoYXNhcFNjaGVkdWxlciwgJ25vdycsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93LmNhbGwoc2VsZik7XG4gIH0pO1xufSk7XG4iXX0=