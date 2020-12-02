/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __values } from "tslib";
import { tokenReference } from '../compile_metadata';
export function listLazyRoutes(moduleMeta, reflector) {
    var e_1, _a, e_2, _b;
    var allLazyRoutes = [];
    try {
        for (var _c = __values(moduleMeta.transitiveModule.providers), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = _d.value, provider = _e.provider, module = _e.module;
            if (tokenReference(provider.token) === reflector.ROUTES) {
                var loadChildren = _collectLoadChildren(provider.useValue);
                try {
                    for (var loadChildren_1 = (e_2 = void 0, __values(loadChildren)), loadChildren_1_1 = loadChildren_1.next(); !loadChildren_1_1.done; loadChildren_1_1 = loadChildren_1.next()) {
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
function _collectLoadChildren(routes, target) {
    var e_3, _a;
    if (target === void 0) { target = []; }
    if (typeof routes === 'string') {
        target.push(routes);
    }
    else if (Array.isArray(routes)) {
        try {
            for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
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
export function parseLazyRoute(route, reflector, module) {
    var _a = __read(route.split('#'), 2), routePath = _a[0], routeName = _a[1];
    var referencedModule = reflector.resolveExternalReference({
        moduleName: routePath,
        name: routeName,
    }, module ? module.filePath : undefined);
    return { route: route, module: module || referencedModule, referencedModule: referencedModule };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eV9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYW90L2xhenlfcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQTBCLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBYzVFLE1BQU0sVUFBVSxjQUFjLENBQzFCLFVBQW1DLEVBQUUsU0FBMEI7O0lBQ2pFLElBQU0sYUFBYSxHQUFnQixFQUFFLENBQUM7O1FBQ3RDLEtBQWlDLElBQUEsS0FBQSxTQUFBLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7WUFBN0QsSUFBQSxhQUFrQixFQUFqQixzQkFBUSxFQUFFLGtCQUFNO1lBQzFCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFNLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUM3RCxLQUFvQixJQUFBLGdDQUFBLFNBQUEsWUFBWSxDQUFBLENBQUEsMENBQUEsb0VBQUU7d0JBQTdCLElBQU0sS0FBSyx5QkFBQTt3QkFDZCxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUN4RTs7Ozs7Ozs7O2FBQ0Y7U0FDRjs7Ozs7Ozs7O0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsTUFBNEIsRUFBRSxNQUFxQjs7SUFBckIsdUJBQUEsRUFBQSxXQUFxQjtJQUMvRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JCO1NBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztZQUNoQyxLQUFvQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXZCLElBQU0sS0FBSyxtQkFBQTtnQkFDZCxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDckM7Ozs7Ozs7OztLQUNGO1NBQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1FBQzlCLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbkQ7U0FBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDMUIsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMvQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUMxQixLQUFhLEVBQUUsU0FBMEIsRUFBRSxNQUFxQjtJQUM1RCxJQUFBLGdDQUF5QyxFQUF4QyxpQkFBUyxFQUFFLGlCQUE2QixDQUFDO0lBQ2hELElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLHdCQUF3QixDQUN2RDtRQUNFLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLElBQUksRUFBRSxTQUFTO0tBQ2hCLEVBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFJLGdCQUFnQixFQUFFLGdCQUFnQixrQkFBQSxFQUFDLENBQUM7QUFDOUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgdG9rZW5SZWZlcmVuY2V9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0NvbXBpbGVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuLi9tZXRhZGF0YV9yZXNvbHZlcic7XG5cbmltcG9ydCB7QW90Q29tcGlsZXJIb3N0fSBmcm9tICcuL2NvbXBpbGVyX2hvc3QnO1xuaW1wb3J0IHtTdGF0aWNSZWZsZWN0b3J9IGZyb20gJy4vc3RhdGljX3JlZmxlY3Rvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXp5Um91dGUge1xuICBtb2R1bGU6IFN0YXRpY1N5bWJvbDtcbiAgcm91dGU6IHN0cmluZztcbiAgcmVmZXJlbmNlZE1vZHVsZTogU3RhdGljU3ltYm9sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdExhenlSb3V0ZXMoXG4gICAgbW9kdWxlTWV0YTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yKTogTGF6eVJvdXRlW10ge1xuICBjb25zdCBhbGxMYXp5Um91dGVzOiBMYXp5Um91dGVbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHtwcm92aWRlciwgbW9kdWxlfSBvZiBtb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUucHJvdmlkZXJzKSB7XG4gICAgaWYgKHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSA9PT0gcmVmbGVjdG9yLlJPVVRFUykge1xuICAgICAgY29uc3QgbG9hZENoaWxkcmVuID0gX2NvbGxlY3RMb2FkQ2hpbGRyZW4ocHJvdmlkZXIudXNlVmFsdWUpO1xuICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiBsb2FkQ2hpbGRyZW4pIHtcbiAgICAgICAgYWxsTGF6eVJvdXRlcy5wdXNoKHBhcnNlTGF6eVJvdXRlKHJvdXRlLCByZWZsZWN0b3IsIG1vZHVsZS5yZWZlcmVuY2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFsbExhenlSb3V0ZXM7XG59XG5cbmZ1bmN0aW9uIF9jb2xsZWN0TG9hZENoaWxkcmVuKHJvdXRlczogc3RyaW5nfFJvdXRlfFJvdXRlW10sIHRhcmdldDogc3RyaW5nW10gPSBbXSk6IHN0cmluZ1tdIHtcbiAgaWYgKHR5cGVvZiByb3V0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdGFyZ2V0LnB1c2gocm91dGVzKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJvdXRlcykpIHtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgX2NvbGxlY3RMb2FkQ2hpbGRyZW4ocm91dGUsIHRhcmdldCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJvdXRlcy5sb2FkQ2hpbGRyZW4pIHtcbiAgICBfY29sbGVjdExvYWRDaGlsZHJlbihyb3V0ZXMubG9hZENoaWxkcmVuLCB0YXJnZXQpO1xuICB9IGVsc2UgaWYgKHJvdXRlcy5jaGlsZHJlbikge1xuICAgIF9jb2xsZWN0TG9hZENoaWxkcmVuKHJvdXRlcy5jaGlsZHJlbiwgdGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYXp5Um91dGUoXG4gICAgcm91dGU6IHN0cmluZywgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsIG1vZHVsZT86IFN0YXRpY1N5bWJvbCk6IExhenlSb3V0ZSB7XG4gIGNvbnN0IFtyb3V0ZVBhdGgsIHJvdXRlTmFtZV0gPSByb3V0ZS5zcGxpdCgnIycpO1xuICBjb25zdCByZWZlcmVuY2VkTW9kdWxlID0gcmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShcbiAgICAgIHtcbiAgICAgICAgbW9kdWxlTmFtZTogcm91dGVQYXRoLFxuICAgICAgICBuYW1lOiByb3V0ZU5hbWUsXG4gICAgICB9LFxuICAgICAgbW9kdWxlID8gbW9kdWxlLmZpbGVQYXRoIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIHtyb3V0ZTogcm91dGUsIG1vZHVsZTogbW9kdWxlIHx8IHJlZmVyZW5jZWRNb2R1bGUsIHJlZmVyZW5jZWRNb2R1bGV9O1xufVxuIl19