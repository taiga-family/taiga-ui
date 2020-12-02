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
        define("@angular/compiler-cli/src/ngtsc/routing/src/route", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var RouterEntryPoint = /** @class */ (function () {
        function RouterEntryPoint() {
        }
        return RouterEntryPoint;
    }());
    exports.RouterEntryPoint = RouterEntryPoint;
    var RouterEntryPointImpl = /** @class */ (function () {
        function RouterEntryPointImpl(filePath, moduleName) {
            this.filePath = filePath;
            this.moduleName = moduleName;
        }
        Object.defineProperty(RouterEntryPointImpl.prototype, "name", {
            get: function () {
                return this.moduleName;
            },
            enumerable: true,
            configurable: true
        });
        // For debugging purposes.
        RouterEntryPointImpl.prototype.toString = function () {
            return "RouterEntryPoint(name: " + this.name + ", filePath: " + this.filePath + ")";
        };
        return RouterEntryPointImpl;
    }());
    var RouterEntryPointManager = /** @class */ (function () {
        function RouterEntryPointManager(moduleResolver) {
            this.moduleResolver = moduleResolver;
            this.map = new Map();
        }
        RouterEntryPointManager.prototype.resolveLoadChildrenIdentifier = function (loadChildrenIdentifier, context) {
            var _a = tslib_1.__read(loadChildrenIdentifier.split('#'), 2), relativeFile = _a[0], moduleName = _a[1];
            if (moduleName === undefined) {
                return null;
            }
            var resolvedSf = this.moduleResolver.resolveModule(relativeFile, context.fileName);
            if (resolvedSf === null) {
                return null;
            }
            return this.fromNgModule(resolvedSf, moduleName);
        };
        RouterEntryPointManager.prototype.fromNgModule = function (sf, moduleName) {
            var key = entryPointKeyFor(sf.fileName, moduleName);
            if (!this.map.has(key)) {
                this.map.set(key, new RouterEntryPointImpl(sf.fileName, moduleName));
            }
            return this.map.get(key);
        };
        return RouterEntryPointManager;
    }());
    exports.RouterEntryPointManager = RouterEntryPointManager;
    function entryPointKeyFor(filePath, moduleName) {
        // Drop the extension to be compatible with how cli calls `listLazyRoutes(entryRoute)`.
        return filePath.replace(/\.tsx?$/i, '') + "#" + moduleName;
    }
    exports.entryPointKeyFor = entryPointKeyFor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3JvdXRpbmcvc3JjL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQU1IO1FBQUE7UUFPQSxDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUFDLEFBUEQsSUFPQztJQVBxQiw0Q0FBZ0I7SUFTdEM7UUFDRSw4QkFBcUIsUUFBZ0IsRUFBVyxVQUFrQjtZQUE3QyxhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQVcsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFHLENBQUM7UUFFdEUsc0JBQUksc0NBQUk7aUJBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBRUQsMEJBQTBCO1FBQzFCLHVDQUFRLEdBQVI7WUFDRSxPQUFPLDRCQUEwQixJQUFJLENBQUMsSUFBSSxvQkFBZSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7UUFDNUUsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQVhELElBV0M7SUFFRDtRQUdFLGlDQUFvQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFGMUMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDO1FBRUcsQ0FBQztRQUV0RCwrREFBNkIsR0FBN0IsVUFBOEIsc0JBQThCLEVBQUUsT0FBc0I7WUFFNUUsSUFBQSx5REFBOEQsRUFBN0Qsb0JBQVksRUFBRSxrQkFBK0MsQ0FBQztZQUNyRSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JGLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELDhDQUFZLEdBQVosVUFBYSxFQUFpQixFQUFFLFVBQWtCO1lBQ2hELElBQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDdEU7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQzVCLENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6QlksMERBQXVCO0lBMkJwQyxTQUFnQixnQkFBZ0IsQ0FBQyxRQUFnQixFQUFFLFVBQWtCO1FBQ25FLHVGQUF1RjtRQUN2RixPQUFVLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxTQUFJLFVBQVksQ0FBQztJQUM3RCxDQUFDO0lBSEQsNENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge01vZHVsZVJlc29sdmVyfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJvdXRlckVudHJ5UG9pbnQge1xuICBhYnN0cmFjdCByZWFkb25seSBmaWxlUGF0aDogc3RyaW5nO1xuXG4gIGFic3RyYWN0IHJlYWRvbmx5IG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAvLyBBbGlhcyBvZiBtb2R1bGVOYW1lIGZvciBjb21wYXRpYmlsaXR5IHdpdGggd2hhdCBgbmd0b29sc19hcGlgIHJldHVybmVkLlxuICBhYnN0cmFjdCByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmNsYXNzIFJvdXRlckVudHJ5UG9pbnRJbXBsIGltcGxlbWVudHMgUm91dGVyRW50cnlQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGZpbGVQYXRoOiBzdHJpbmcsIHJlYWRvbmx5IG1vZHVsZU5hbWU6IHN0cmluZykge31cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vZHVsZU5hbWU7XG4gIH1cblxuICAvLyBGb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgUm91dGVyRW50cnlQb2ludChuYW1lOiAke3RoaXMubmFtZX0sIGZpbGVQYXRoOiAke3RoaXMuZmlsZVBhdGh9KWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlckVudHJ5UG9pbnRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgUm91dGVyRW50cnlQb2ludD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZHVsZVJlc29sdmVyOiBNb2R1bGVSZXNvbHZlcikge31cblxuICByZXNvbHZlTG9hZENoaWxkcmVuSWRlbnRpZmllcihsb2FkQ2hpbGRyZW5JZGVudGlmaWVyOiBzdHJpbmcsIGNvbnRleHQ6IHRzLlNvdXJjZUZpbGUpOlxuICAgICAgUm91dGVyRW50cnlQb2ludHxudWxsIHtcbiAgICBjb25zdCBbcmVsYXRpdmVGaWxlLCBtb2R1bGVOYW1lXSA9IGxvYWRDaGlsZHJlbklkZW50aWZpZXIuc3BsaXQoJyMnKTtcbiAgICBpZiAobW9kdWxlTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWRTZiA9IHRoaXMubW9kdWxlUmVzb2x2ZXIucmVzb2x2ZU1vZHVsZShyZWxhdGl2ZUZpbGUsIGNvbnRleHQuZmlsZU5hbWUpO1xuICAgIGlmIChyZXNvbHZlZFNmID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZnJvbU5nTW9kdWxlKHJlc29sdmVkU2YsIG1vZHVsZU5hbWUpO1xuICB9XG5cbiAgZnJvbU5nTW9kdWxlKHNmOiB0cy5Tb3VyY2VGaWxlLCBtb2R1bGVOYW1lOiBzdHJpbmcpOiBSb3V0ZXJFbnRyeVBvaW50IHtcbiAgICBjb25zdCBrZXkgPSBlbnRyeVBvaW50S2V5Rm9yKHNmLmZpbGVOYW1lLCBtb2R1bGVOYW1lKTtcbiAgICBpZiAoIXRoaXMubWFwLmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoa2V5LCBuZXcgUm91dGVyRW50cnlQb2ludEltcGwoc2YuZmlsZU5hbWUsIG1vZHVsZU5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpITtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50cnlQb2ludEtleUZvcihmaWxlUGF0aDogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBEcm9wIHRoZSBleHRlbnNpb24gdG8gYmUgY29tcGF0aWJsZSB3aXRoIGhvdyBjbGkgY2FsbHMgYGxpc3RMYXp5Um91dGVzKGVudHJ5Um91dGUpYC5cbiAgcmV0dXJuIGAke2ZpbGVQYXRoLnJlcGxhY2UoL1xcLnRzeD8kL2ksICcnKX0jJHttb2R1bGVOYW1lfWA7XG59XG4iXX0=