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
        define("@angular/compiler-cli/src/ngtsc/routing/src/analyzer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/routing/src/lazy", "@angular/compiler-cli/src/ngtsc/routing/src/route"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var lazy_1 = require("@angular/compiler-cli/src/ngtsc/routing/src/lazy");
    var route_1 = require("@angular/compiler-cli/src/ngtsc/routing/src/route");
    var NgModuleRouteAnalyzer = /** @class */ (function () {
        function NgModuleRouteAnalyzer(moduleResolver, evaluator) {
            this.evaluator = evaluator;
            this.modules = new Map();
            this.entryPointManager = new route_1.RouterEntryPointManager(moduleResolver);
        }
        NgModuleRouteAnalyzer.prototype.add = function (sourceFile, moduleName, imports, exports, providers) {
            var key = route_1.entryPointKeyFor(sourceFile.fileName, moduleName);
            if (this.modules.has(key)) {
                throw new Error("Double route analyzing for '" + key + "'.");
            }
            this.modules.set(key, {
                sourceFile: sourceFile,
                moduleName: moduleName,
                imports: imports,
                exports: exports,
                providers: providers,
            });
        };
        NgModuleRouteAnalyzer.prototype.listLazyRoutes = function (entryModuleKey) {
            var _this = this;
            if ((entryModuleKey !== undefined) && !this.modules.has(entryModuleKey)) {
                throw new Error("Failed to list lazy routes: Unknown module '" + entryModuleKey + "'.");
            }
            var routes = [];
            var scannedModuleKeys = new Set();
            var pendingModuleKeys = entryModuleKey ? [entryModuleKey] : Array.from(this.modules.keys());
            // When listing lazy routes for a specific entry module, we need to recursively extract
            // "transitive" routes from imported/exported modules. This is not necessary when listing all
            // lazy routes, because all analyzed modules will be scanned anyway.
            var scanRecursively = entryModuleKey !== undefined;
            while (pendingModuleKeys.length > 0) {
                var key = pendingModuleKeys.pop();
                if (scannedModuleKeys.has(key)) {
                    continue;
                }
                else {
                    scannedModuleKeys.add(key);
                }
                var data = this.modules.get(key);
                var entryPoints = lazy_1.scanForRouteEntryPoints(data.sourceFile, data.moduleName, data, this.entryPointManager, this.evaluator);
                routes.push.apply(routes, tslib_1.__spread(entryPoints.map(function (entryPoint) { return ({
                    route: entryPoint.loadChildren,
                    module: entryPoint.from,
                    referencedModule: entryPoint.resolvedTo,
                }); })));
                if (scanRecursively) {
                    pendingModuleKeys.push.apply(pendingModuleKeys, tslib_1.__spread(tslib_1.__spread(entryPoints.map(function (_a) {
                        var resolvedTo = _a.resolvedTo;
                        return route_1.entryPointKeyFor(resolvedTo.filePath, resolvedTo.moduleName);
                    }), lazy_1.scanForCandidateTransitiveModules(data.imports, this.evaluator), lazy_1.scanForCandidateTransitiveModules(data.exports, this.evaluator)).filter(function (key) { return _this.modules.has(key); })));
                }
            }
            return routes;
        };
        return NgModuleRouteAnalyzer;
    }());
    exports.NgModuleRouteAnalyzer = NgModuleRouteAnalyzer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3JvdXRpbmcvc3JjL2FuYWx5emVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQU9ILHlFQUFrRjtJQUNsRiwyRUFBa0U7SUFnQmxFO1FBSUUsK0JBQVksY0FBOEIsRUFBVSxTQUEyQjtZQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtZQUh2RSxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWdDLENBQUM7WUFJeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksK0JBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELG1DQUFHLEdBQUgsVUFBSSxVQUF5QixFQUFFLFVBQWtCLEVBQUUsT0FBMkIsRUFDMUUsT0FBMkIsRUFBRSxTQUE2QjtZQUM1RCxJQUFNLEdBQUcsR0FBRyx3QkFBZ0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzlELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQStCLEdBQUcsT0FBSSxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BCLFVBQVUsWUFBQTtnQkFDVixVQUFVLFlBQUE7Z0JBQ1YsT0FBTyxTQUFBO2dCQUNQLE9BQU8sU0FBQTtnQkFDUCxTQUFTLFdBQUE7YUFDVixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsOENBQWMsR0FBZCxVQUFlLGNBQWlDO1lBQWhELGlCQWdEQztZQS9DQyxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQStDLGNBQWMsT0FBSSxDQUFDLENBQUM7YUFDcEY7WUFFRCxJQUFNLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO1lBQy9CLElBQU0saUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztZQUM1QyxJQUFNLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFOUYsdUZBQXVGO1lBQ3ZGLDZGQUE2RjtZQUM3RixvRUFBb0U7WUFDcEUsSUFBTSxlQUFlLEdBQUcsY0FBYyxLQUFLLFNBQVMsQ0FBQztZQUVyRCxPQUFPLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRyxDQUFDO2dCQUVyQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDOUIsU0FBUztpQkFDVjtxQkFBTTtvQkFDTCxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzVCO2dCQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO2dCQUNwQyxJQUFNLFdBQVcsR0FBRyw4QkFBdUIsQ0FDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVwRixNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sbUJBQVMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLENBQUM7b0JBQ2IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZO29CQUM5QixNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUk7b0JBQ3ZCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxVQUFVO2lCQUN4QyxDQUFDLEVBSlksQ0FJWixDQUFDLEdBQUU7Z0JBRXBDLElBQUksZUFBZSxFQUFFO29CQUNuQixpQkFBaUIsQ0FBQyxJQUFJLE9BQXRCLGlCQUFpQixtQkFDVixpQkFFSSxXQUFXLENBQUMsR0FBRyxDQUNkLFVBQUMsRUFBWTs0QkFBWCwwQkFBVTt3QkFBTSxPQUFBLHdCQUFnQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztvQkFBNUQsQ0FBNEQsQ0FBQyxFQUVoRix3Q0FBaUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFFL0Qsd0NBQWlDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQ3hFLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLEdBQUU7aUJBQ3pDO2FBQ0Y7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0gsNEJBQUM7SUFBRCxDQUFDLEFBeEVELElBd0VDO0lBeEVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtQYXJ0aWFsRXZhbHVhdG9yfSBmcm9tICcuLi8uLi9wYXJ0aWFsX2V2YWx1YXRvcic7XG5cbmltcG9ydCB7c2NhbkZvckNhbmRpZGF0ZVRyYW5zaXRpdmVNb2R1bGVzLCBzY2FuRm9yUm91dGVFbnRyeVBvaW50c30gZnJvbSAnLi9sYXp5JztcbmltcG9ydCB7ZW50cnlQb2ludEtleUZvciwgUm91dGVyRW50cnlQb2ludE1hbmFnZXJ9IGZyb20gJy4vcm91dGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nTW9kdWxlUmF3Um91dGVEYXRhIHtcbiAgc291cmNlRmlsZTogdHMuU291cmNlRmlsZTtcbiAgbW9kdWxlTmFtZTogc3RyaW5nO1xuICBpbXBvcnRzOiB0cy5FeHByZXNzaW9ufG51bGw7XG4gIGV4cG9ydHM6IHRzLkV4cHJlc3Npb258bnVsbDtcbiAgcHJvdmlkZXJzOiB0cy5FeHByZXNzaW9ufG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJvdXRlIHtcbiAgcm91dGU6IHN0cmluZztcbiAgbW9kdWxlOiB7bmFtZTogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nfTtcbiAgcmVmZXJlbmNlZE1vZHVsZToge25hbWU6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZ307XG59XG5cbmV4cG9ydCBjbGFzcyBOZ01vZHVsZVJvdXRlQW5hbHl6ZXIge1xuICBwcml2YXRlIG1vZHVsZXMgPSBuZXcgTWFwPHN0cmluZywgTmdNb2R1bGVSYXdSb3V0ZURhdGE+KCk7XG4gIHByaXZhdGUgZW50cnlQb2ludE1hbmFnZXI6IFJvdXRlckVudHJ5UG9pbnRNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKG1vZHVsZVJlc29sdmVyOiBNb2R1bGVSZXNvbHZlciwgcHJpdmF0ZSBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IpIHtcbiAgICB0aGlzLmVudHJ5UG9pbnRNYW5hZ2VyID0gbmV3IFJvdXRlckVudHJ5UG9pbnRNYW5hZ2VyKG1vZHVsZVJlc29sdmVyKTtcbiAgfVxuXG4gIGFkZChzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGltcG9ydHM6IHRzLkV4cHJlc3Npb258bnVsbCxcbiAgICAgIGV4cG9ydHM6IHRzLkV4cHJlc3Npb258bnVsbCwgcHJvdmlkZXJzOiB0cy5FeHByZXNzaW9ufG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCBrZXkgPSBlbnRyeVBvaW50S2V5Rm9yKHNvdXJjZUZpbGUuZmlsZU5hbWUsIG1vZHVsZU5hbWUpO1xuICAgIGlmICh0aGlzLm1vZHVsZXMuaGFzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG91YmxlIHJvdXRlIGFuYWx5emluZyBmb3IgJyR7a2V5fScuYCk7XG4gICAgfVxuICAgIHRoaXMubW9kdWxlcy5zZXQoa2V5LCB7XG4gICAgICBzb3VyY2VGaWxlLFxuICAgICAgbW9kdWxlTmFtZSxcbiAgICAgIGltcG9ydHMsXG4gICAgICBleHBvcnRzLFxuICAgICAgcHJvdmlkZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgbGlzdExhenlSb3V0ZXMoZW50cnlNb2R1bGVLZXk/OiBzdHJpbmd8dW5kZWZpbmVkKTogTGF6eVJvdXRlW10ge1xuICAgIGlmICgoZW50cnlNb2R1bGVLZXkgIT09IHVuZGVmaW5lZCkgJiYgIXRoaXMubW9kdWxlcy5oYXMoZW50cnlNb2R1bGVLZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsaXN0IGxhenkgcm91dGVzOiBVbmtub3duIG1vZHVsZSAnJHtlbnRyeU1vZHVsZUtleX0nLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlczogTGF6eVJvdXRlW10gPSBbXTtcbiAgICBjb25zdCBzY2FubmVkTW9kdWxlS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IHBlbmRpbmdNb2R1bGVLZXlzID0gZW50cnlNb2R1bGVLZXkgPyBbZW50cnlNb2R1bGVLZXldIDogQXJyYXkuZnJvbSh0aGlzLm1vZHVsZXMua2V5cygpKTtcblxuICAgIC8vIFdoZW4gbGlzdGluZyBsYXp5IHJvdXRlcyBmb3IgYSBzcGVjaWZpYyBlbnRyeSBtb2R1bGUsIHdlIG5lZWQgdG8gcmVjdXJzaXZlbHkgZXh0cmFjdFxuICAgIC8vIFwidHJhbnNpdGl2ZVwiIHJvdXRlcyBmcm9tIGltcG9ydGVkL2V4cG9ydGVkIG1vZHVsZXMuIFRoaXMgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIGxpc3RpbmcgYWxsXG4gICAgLy8gbGF6eSByb3V0ZXMsIGJlY2F1c2UgYWxsIGFuYWx5emVkIG1vZHVsZXMgd2lsbCBiZSBzY2FubmVkIGFueXdheS5cbiAgICBjb25zdCBzY2FuUmVjdXJzaXZlbHkgPSBlbnRyeU1vZHVsZUtleSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgd2hpbGUgKHBlbmRpbmdNb2R1bGVLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IHBlbmRpbmdNb2R1bGVLZXlzLnBvcCgpITtcblxuICAgICAgaWYgKHNjYW5uZWRNb2R1bGVLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nhbm5lZE1vZHVsZUtleXMuYWRkKGtleSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLm1vZHVsZXMuZ2V0KGtleSkhO1xuICAgICAgY29uc3QgZW50cnlQb2ludHMgPSBzY2FuRm9yUm91dGVFbnRyeVBvaW50cyhcbiAgICAgICAgICBkYXRhLnNvdXJjZUZpbGUsIGRhdGEubW9kdWxlTmFtZSwgZGF0YSwgdGhpcy5lbnRyeVBvaW50TWFuYWdlciwgdGhpcy5ldmFsdWF0b3IpO1xuXG4gICAgICByb3V0ZXMucHVzaCguLi5lbnRyeVBvaW50cy5tYXAoZW50cnlQb2ludCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IGVudHJ5UG9pbnQubG9hZENoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBlbnRyeVBvaW50LmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VkTW9kdWxlOiBlbnRyeVBvaW50LnJlc29sdmVkVG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcblxuICAgICAgaWYgKHNjYW5SZWN1cnNpdmVseSkge1xuICAgICAgICBwZW5kaW5nTW9kdWxlS2V5cy5wdXNoKFxuICAgICAgICAgICAgLi4uW1xuICAgICAgICAgICAgICAgIC8vIFNjYW4gdGhlIHJldHJpZXZlZCBsYXp5IHJvdXRlIGVudHJ5IHBvaW50cy5cbiAgICAgICAgICAgICAgICAuLi5lbnRyeVBvaW50cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICh7cmVzb2x2ZWRUb30pID0+IGVudHJ5UG9pbnRLZXlGb3IocmVzb2x2ZWRUby5maWxlUGF0aCwgcmVzb2x2ZWRUby5tb2R1bGVOYW1lKSksXG4gICAgICAgICAgICAgICAgLy8gU2NhbiB0aGUgY3VycmVudCBtb2R1bGUncyBpbXBvcnRlZCBtb2R1bGVzLlxuICAgICAgICAgICAgICAgIC4uLnNjYW5Gb3JDYW5kaWRhdGVUcmFuc2l0aXZlTW9kdWxlcyhkYXRhLmltcG9ydHMsIHRoaXMuZXZhbHVhdG9yKSxcbiAgICAgICAgICAgICAgICAvLyBTY2FuIHRoZSBjdXJyZW50IG1vZHVsZSdzIGV4cG9ydGVkIG1vZHVsZXMuXG4gICAgICAgICAgICAgICAgLi4uc2NhbkZvckNhbmRpZGF0ZVRyYW5zaXRpdmVNb2R1bGVzKGRhdGEuZXhwb3J0cywgdGhpcy5ldmFsdWF0b3IpLFxuICAgICAgICBdLmZpbHRlcihrZXkgPT4gdGhpcy5tb2R1bGVzLmhhcyhrZXkpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxufVxuIl19