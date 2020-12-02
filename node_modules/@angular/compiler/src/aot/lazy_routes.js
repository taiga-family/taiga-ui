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
        define("@angular/compiler/src/aot/lazy_routes", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    function listLazyRoutes(moduleMeta, reflector) {
        var e_1, _a, e_2, _b;
        var allLazyRoutes = [];
        try {
            for (var _c = tslib_1.__values(moduleMeta.transitiveModule.providers), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, provider = _e.provider, module = _e.module;
                if (compile_metadata_1.tokenReference(provider.token) === reflector.ROUTES) {
                    var loadChildren = _collectLoadChildren(provider.useValue);
                    try {
                        for (var loadChildren_1 = (e_2 = void 0, tslib_1.__values(loadChildren)), loadChildren_1_1 = loadChildren_1.next(); !loadChildren_1_1.done; loadChildren_1_1 = loadChildren_1.next()) {
                            var route = loadChildren_1_1.value;
                            allLazyRoutes.push(parseLazyRoute(route, reflector, module.reference));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (loadChildren_1_1 && !loadChildren_1_1.done && (_b = loadChildren_1.return)) _b.call(loadChildren_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return allLazyRoutes;
    }
    exports.listLazyRoutes = listLazyRoutes;
    function _collectLoadChildren(routes, target) {
        var e_3, _a;
        if (target === void 0) { target = []; }
        if (typeof routes === 'string') {
            target.push(routes);
        }
        else if (Array.isArray(routes)) {
            try {
                for (var routes_1 = tslib_1.__values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                    var route = routes_1_1.value;
                    _collectLoadChildren(route, target);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (routes.loadChildren) {
            _collectLoadChildren(routes.loadChildren, target);
        }
        else if (routes.children) {
            _collectLoadChildren(routes.children, target);
        }
        return target;
    }
    function parseLazyRoute(route, reflector, module) {
        var _a = tslib_1.__read(route.split('#'), 2), routePath = _a[0], routeName = _a[1];
        var referencedModule = reflector.resolveExternalReference({
            moduleName: routePath,
            name: routeName,
        }, module ? module.filePath : undefined);
        return { route: route, module: module || referencedModule, referencedModule: referencedModule };
    }
    exports.parseLazyRoute = parseLazyRoute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eV9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYW90L2xhenlfcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDJFQUE0RTtJQWM1RSxTQUFnQixjQUFjLENBQzFCLFVBQW1DLEVBQUUsU0FBMEI7O1FBQ2pFLElBQU0sYUFBYSxHQUFnQixFQUFFLENBQUM7O1lBQ3RDLEtBQWlDLElBQUEsS0FBQSxpQkFBQSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3RCxJQUFBLGFBQWtCLEVBQWpCLHNCQUFRLEVBQUUsa0JBQU07Z0JBQzFCLElBQUksaUNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDdkQsSUFBTSxZQUFZLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzt3QkFDN0QsS0FBb0IsSUFBQSxnQ0FBQSxpQkFBQSxZQUFZLENBQUEsQ0FBQSwwQ0FBQSxvRUFBRTs0QkFBN0IsSUFBTSxLQUFLLHlCQUFBOzRCQUNkLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7eUJBQ3hFOzs7Ozs7Ozs7aUJBQ0Y7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQVpELHdDQVlDO0lBRUQsU0FBUyxvQkFBb0IsQ0FBQyxNQUE0QixFQUFFLE1BQXFCOztRQUFyQix1QkFBQSxFQUFBLFdBQXFCO1FBQy9FLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUNoQyxLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7b0JBQ2Qsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNyQzs7Ozs7Ozs7O1NBQ0Y7YUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDOUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRDthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQWdCLGNBQWMsQ0FDMUIsS0FBYSxFQUFFLFNBQTBCLEVBQUUsTUFBcUI7UUFDNUQsSUFBQSx3Q0FBeUMsRUFBeEMsaUJBQVMsRUFBRSxpQkFBNkIsQ0FBQztRQUNoRCxJQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FDdkQ7WUFDRSxVQUFVLEVBQUUsU0FBUztZQUNyQixJQUFJLEVBQUUsU0FBUztTQUNoQixFQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxnQkFBZ0IsRUFBRSxnQkFBZ0Isa0JBQUEsRUFBQyxDQUFDO0lBQzlFLENBQUM7SUFWRCx3Q0FVQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgdG9rZW5SZWZlcmVuY2V9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0NvbXBpbGVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuLi9tZXRhZGF0YV9yZXNvbHZlcic7XG5cbmltcG9ydCB7QW90Q29tcGlsZXJIb3N0fSBmcm9tICcuL2NvbXBpbGVyX2hvc3QnO1xuaW1wb3J0IHtTdGF0aWNSZWZsZWN0b3J9IGZyb20gJy4vc3RhdGljX3JlZmxlY3Rvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXp5Um91dGUge1xuICBtb2R1bGU6IFN0YXRpY1N5bWJvbDtcbiAgcm91dGU6IHN0cmluZztcbiAgcmVmZXJlbmNlZE1vZHVsZTogU3RhdGljU3ltYm9sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExhenlSb3V0ZXMoXG4gICAgbW9kdWxlTWV0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yKTogTGF6eVJvdXRlW10ge1xuICBjb25zdCBhbGxMYXp5Um91dGVzOiBMYXp5Um91dGVbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHtwcm92aWRlciwgbW9kdWxlfSBvZiBtb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUucHJvdmlkZXJzKSB7XG4gICAgaWYgKHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSA9PT0gcmVmbGVjdG9yLlJPVVRFUykge1xuICAgICAgY29uc3QgbG9hZENoaWxkcmVuID0gX2NvbGxlY3RMb2FkQ2hpbGRyZW4ocHJvdmlkZXIudXNlVmFsdWUpO1xuICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiBsb2FkQ2hpbGRyZW4pIHtcbiAgICAgICAgYWxsTGF6eVJvdXRlcy5wdXNoKHBhcnNlTGF6eVJvdXRlKHJvdXRlLCByZWZsZWN0b3IsIG1vZHVsZS5yZWZlcmVuY2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFsbExhenlSb3V0ZXM7XG59XG5cbmZ1bmN0aW9uIF9jb2xsZWN0TG9hZENoaWxkcmVuKHJvdXRlczogc3RyaW5nfFJvdXRlfFJvdXRlW10sIHRhcmdldDogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcbiAgaWYgKHR5cGVvZiByb3V0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdGFyZ2V0LnB1c2gocm91dGVzKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJvdXRlcykpIHtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgX2NvbGxlY3RMb2FkQ2hpbGRyZW4ocm91dGUsIHRhcmdldCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJvdXRlcy5sb2FkQ2hpbGRyZW4pIHtcbiAgICBfY29sbGVjdExvYWRDaGlsZHJlbihyb3V0ZXMubG9hZENoaWxkcmVuLCB0YXJnZXQpO1xuICB9IGVsc2UgaWYgKHJvdXRlcy5jaGlsZHJlbikge1xuICAgIF9jb2xsZWN0TG9hZENoaWxkcmVuKHJvdXRlcy5jaGlsZHJlbiwgdGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYXp5Um91dGUoXG4gICAgcm91dGU6IHN0cmluZywgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsIG1vZHVsZT86IFN0YXRpY1N5bWJvbCk6IExhenlSb3V0ZSB7XG4gIGNvbnN0IFtyb3V0ZVBhdGgsIHJvdXRlTmFtZV0gPSByb3V0ZS5zcGxpdCgnIycpO1xuICBjb25zdCByZWZlcmVuY2VkTW9kdWxlID0gcmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShcbiAgICAgIHtcbiAgICAgICAgbW9kdWxlTmFtZTogcm91dGVQYXRoLFxuICAgICAgICBuYW1lOiByb3V0ZU5hbWUsXG4gICAgICB9LFxuICAgICAgbW9kdWxlID8gbW9kdWxlLmZpbGVQYXRoIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIHtyb3V0ZTogcm91dGUsIG1vZHVsZTogbW9kdWxlIHx8IHJlZmVyZW5jZWRNb2R1bGUsIHJlZmVyZW5jZWRNb2R1bGV9O1xufVxuIl19