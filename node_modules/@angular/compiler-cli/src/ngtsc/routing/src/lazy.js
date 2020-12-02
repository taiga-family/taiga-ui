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
        define("@angular/compiler-cli/src/ngtsc/routing/src/lazy", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/routing/src/route"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var route_1 = require("@angular/compiler-cli/src/ngtsc/routing/src/route");
    var ROUTES_MARKER = '__ngRoutesMarker__';
    function scanForCandidateTransitiveModules(expr, evaluator) {
        if (expr === null) {
            return [];
        }
        var candidateModuleKeys = [];
        var entries = evaluator.evaluate(expr);
        function recursivelyAddModules(entry) {
            var e_1, _a;
            if (Array.isArray(entry)) {
                try {
                    for (var entry_1 = tslib_1.__values(entry), entry_1_1 = entry_1.next(); !entry_1_1.done; entry_1_1 = entry_1.next()) {
                        var e = entry_1_1.value;
                        recursivelyAddModules(e);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (entry_1_1 && !entry_1_1.done && (_a = entry_1.return)) _a.call(entry_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (entry instanceof Map) {
                if (entry.has('ngModule')) {
                    recursivelyAddModules(entry.get('ngModule'));
                }
            }
            else if ((entry instanceof imports_1.Reference) && hasIdentifier(entry.node)) {
                var filePath = entry.node.getSourceFile().fileName;
                var moduleName = entry.node.name.text;
                candidateModuleKeys.push(route_1.entryPointKeyFor(filePath, moduleName));
            }
        }
        recursivelyAddModules(entries);
        return candidateModuleKeys;
    }
    exports.scanForCandidateTransitiveModules = scanForCandidateTransitiveModules;
    function scanForRouteEntryPoints(ngModule, moduleName, data, entryPointManager, evaluator) {
        var e_2, _a;
        var loadChildrenIdentifiers = [];
        var from = entryPointManager.fromNgModule(ngModule, moduleName);
        if (data.providers !== null) {
            loadChildrenIdentifiers.push.apply(loadChildrenIdentifiers, tslib_1.__spread(scanForProviders(data.providers, evaluator)));
        }
        if (data.imports !== null) {
            loadChildrenIdentifiers.push.apply(loadChildrenIdentifiers, tslib_1.__spread(scanForRouterModuleUsage(data.imports, evaluator)));
        }
        if (data.exports !== null) {
            loadChildrenIdentifiers.push.apply(loadChildrenIdentifiers, tslib_1.__spread(scanForRouterModuleUsage(data.exports, evaluator)));
        }
        var routes = [];
        try {
            for (var loadChildrenIdentifiers_1 = tslib_1.__values(loadChildrenIdentifiers), loadChildrenIdentifiers_1_1 = loadChildrenIdentifiers_1.next(); !loadChildrenIdentifiers_1_1.done; loadChildrenIdentifiers_1_1 = loadChildrenIdentifiers_1.next()) {
                var loadChildren = loadChildrenIdentifiers_1_1.value;
                var resolvedTo = entryPointManager.resolveLoadChildrenIdentifier(loadChildren, ngModule);
                if (resolvedTo !== null) {
                    routes.push({
                        loadChildren: loadChildren,
                        from: from,
                        resolvedTo: resolvedTo,
                    });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (loadChildrenIdentifiers_1_1 && !loadChildrenIdentifiers_1_1.done && (_a = loadChildrenIdentifiers_1.return)) _a.call(loadChildrenIdentifiers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return routes;
    }
    exports.scanForRouteEntryPoints = scanForRouteEntryPoints;
    function scanForProviders(expr, evaluator) {
        var loadChildrenIdentifiers = [];
        var providers = evaluator.evaluate(expr);
        function recursivelyAddProviders(provider) {
            var e_3, _a;
            if (Array.isArray(provider)) {
                try {
                    for (var provider_1 = tslib_1.__values(provider), provider_1_1 = provider_1.next(); !provider_1_1.done; provider_1_1 = provider_1.next()) {
                        var entry = provider_1_1.value;
                        recursivelyAddProviders(entry);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (provider_1_1 && !provider_1_1.done && (_a = provider_1.return)) _a.call(provider_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else if (provider instanceof Map) {
                if (provider.has('provide') && provider.has('useValue')) {
                    var provide = provider.get('provide');
                    var useValue = provider.get('useValue');
                    if (isRouteToken(provide) && Array.isArray(useValue)) {
                        loadChildrenIdentifiers.push.apply(loadChildrenIdentifiers, tslib_1.__spread(scanForLazyRoutes(useValue)));
                    }
                }
            }
        }
        recursivelyAddProviders(providers);
        return loadChildrenIdentifiers;
    }
    function scanForRouterModuleUsage(expr, evaluator) {
        var loadChildrenIdentifiers = [];
        var imports = evaluator.evaluate(expr, routerModuleFFR);
        function recursivelyAddRoutes(imp) {
            var e_4, _a;
            if (Array.isArray(imp)) {
                try {
                    for (var imp_1 = tslib_1.__values(imp), imp_1_1 = imp_1.next(); !imp_1_1.done; imp_1_1 = imp_1.next()) {
                        var entry = imp_1_1.value;
                        recursivelyAddRoutes(entry);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (imp_1_1 && !imp_1_1.done && (_a = imp_1.return)) _a.call(imp_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            else if (imp instanceof Map) {
                if (imp.has(ROUTES_MARKER) && imp.has('routes')) {
                    var routes = imp.get('routes');
                    if (Array.isArray(routes)) {
                        loadChildrenIdentifiers.push.apply(loadChildrenIdentifiers, tslib_1.__spread(scanForLazyRoutes(routes)));
                    }
                }
            }
        }
        recursivelyAddRoutes(imports);
        return loadChildrenIdentifiers;
    }
    function scanForLazyRoutes(routes) {
        var loadChildrenIdentifiers = [];
        function recursivelyScanRoutes(routes) {
            var e_5, _a;
            try {
                for (var routes_1 = tslib_1.__values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                    var route = routes_1_1.value;
                    if (!(route instanceof Map)) {
                        continue;
                    }
                    if (route.has('loadChildren')) {
                        var loadChildren = route.get('loadChildren');
                        if (typeof loadChildren === 'string') {
                            loadChildrenIdentifiers.push(loadChildren);
                        }
                    }
                    else if (route.has('children')) {
                        var children = route.get('children');
                        if (Array.isArray(children)) {
                            recursivelyScanRoutes(children);
                        }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        recursivelyScanRoutes(routes);
        return loadChildrenIdentifiers;
    }
    /**
     * A foreign function resolver that converts `RouterModule.forRoot/forChild(X)` to a special object
     * of the form `{__ngRoutesMarker__: true, routes: X}`.
     *
     * These objects are then recognizable inside the larger set of imports/exports.
     */
    var routerModuleFFR = function routerModuleFFR(ref, args) {
        if (!isMethodNodeReference(ref) || !ts.isClassDeclaration(ref.node.parent)) {
            return null;
        }
        else if (ref.bestGuessOwningModule === null ||
            ref.bestGuessOwningModule.specifier !== '@angular/router') {
            return null;
        }
        else if (ref.node.parent.name === undefined || ref.node.parent.name.text !== 'RouterModule') {
            return null;
        }
        else if (!ts.isIdentifier(ref.node.name) ||
            (ref.node.name.text !== 'forRoot' && ref.node.name.text !== 'forChild')) {
            return null;
        }
        var routes = args[0];
        return ts.createObjectLiteral([
            ts.createPropertyAssignment(ROUTES_MARKER, ts.createTrue()),
            ts.createPropertyAssignment('routes', routes),
        ]);
    };
    function hasIdentifier(node) {
        var node_ = node;
        return (node_.name !== undefined) && ts.isIdentifier(node_.name);
    }
    function isMethodNodeReference(ref) {
        return ts.isMethodDeclaration(ref.node);
    }
    function isRouteToken(ref) {
        return ref instanceof imports_1.Reference && ref.bestGuessOwningModule !== null &&
            ref.bestGuessOwningModule.specifier === '@angular/router' && ref.debugName === 'ROUTES';
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2Mvcm91dGluZy9zcmMvbGF6eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFFakMsbUVBQXdDO0lBSXhDLDJFQUFvRjtJQUVwRixJQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztJQVEzQyxTQUFnQixpQ0FBaUMsQ0FDN0MsSUFBd0IsRUFBRSxTQUEyQjtRQUN2RCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQU0sbUJBQW1CLEdBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsU0FBUyxxQkFBcUIsQ0FBQyxLQUFvQjs7WUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDeEIsS0FBZ0IsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTt3QkFBbEIsSUFBTSxDQUFDLGtCQUFBO3dCQUNWLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMxQjs7Ozs7Ozs7O2FBQ0Y7aUJBQU0sSUFBSSxLQUFLLFlBQVksR0FBRyxFQUFFO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3pCLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQztpQkFDL0M7YUFDRjtpQkFBTSxJQUFJLENBQUMsS0FBSyxZQUFZLG1CQUFTLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwRSxJQUFNLFFBQVEsR0FBRyxL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QUM7SUFFRCxTQUFTLHFCQUFxQixDQUMxQixHQUFpRjtRQUVuRixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLEdBQWtCO1FBQ3RDLE9BQU8sR0FBRyxZQUFZLG1CQUFTLElBQUksR0FBRyxDQUFDLHFCQUFxQixLQUFLLElBQUk7WUFDakUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsS0FBSyxpQkFBaUIsSUFBSSxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQztJQUM5RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtGb3JlaWduRnVuY3Rpb25SZXNvbHZlciwgUGFydGlhbEV2YWx1YXRvciwgUmVzb2x2ZWRWYWx1ZX0gZnJvbSAnLi4vLi4vcGFydGlhbF9ldmFsdWF0b3InO1xuXG5pbXBvcnQge05nTW9kdWxlUmF3Um91dGVEYXRhfSBmcm9tICcuL2FuYWx5emVyJztcbmltcG9ydCB7ZW50cnlQb2ludEtleUZvciwgUm91dGVyRW50cnlQb2ludCwgUm91dGVyRW50cnlQb2ludE1hbmFnZXJ9IGZyb20gJy4vcm91dGUnO1xuXG5jb25zdCBST1VURVNfTUFSS0VSID0gJ19fbmdSb3V0ZXNNYXJrZXJfXyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJvdXRlRW50cnkge1xuICBsb2FkQ2hpbGRyZW46IHN0cmluZztcbiAgZnJvbTogUm91dGVyRW50cnlQb2ludDtcbiAgcmVzb2x2ZWRUbzogUm91dGVyRW50cnlQb2ludDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYW5Gb3JDYW5kaWRhdGVUcmFuc2l0aXZlTW9kdWxlcyhcbiAgICBleHByOiB0cy5FeHByZXNzaW9ufG51bGwsIGV2YWx1YXRvcjogUGFydGlhbEV2YWx1YXRvcik6IHN0cmluZ1tdIHtcbiAgaWYgKGV4cHIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBjYW5kaWRhdGVNb2R1bGVLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBlbnRyaWVzID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cHIpO1xuXG4gIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5QWRkTW9kdWxlcyhlbnRyeTogUmVzb2x2ZWRWYWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIGVudHJ5KSB7XG4gICAgICAgIHJlY3Vyc2l2ZWx5QWRkTW9kdWxlcyhlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVudHJ5IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpZiAoZW50cnkuaGFzKCduZ01vZHVsZScpKSB7XG4gICAgICAgIHJlY3Vyc2l2ZWx5QWRkTW9kdWxlcyhlbnRyeS5nZXQoJ25nTW9kdWxlJykhKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChlbnRyeSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkgJiYgaGFzSWRlbnRpZmllcihlbnRyeS5ub2RlKSkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBlbnRyeS5ub2RlLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZTtcbiAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBlbnRyeS5ub2RlLm5hbWUudGV4dDtcbiAgICAgIGNhbmRpZGF0ZU1vZHVsZUtleXMucHVzaChlbnRyeVBvaW50S2V5Rm9yKGZpbGVQYXRoLCBtb2R1bGVOYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgcmVjdXJzaXZlbHlBZGRNb2R1bGVzKGVudHJpZXMpO1xuICByZXR1cm4gY2FuZGlkYXRlTW9kdWxlS2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYW5Gb3JSb3V0ZUVudHJ5UG9pbnRzKFxuICAgIG5nTW9kdWxlOiB0cy5Tb3VyY2VGaWxlLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGRhdGE6IE5nTW9kdWxlUmF3Um91dGVEYXRhLFxuICAgIGVudHJ5UG9pbnRNYW5hZ2VyOiBSb3V0ZXJFbnRyeVBvaW50TWFuYWdlciwgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yKTogTGF6eVJvdXRlRW50cnlbXSB7XG4gIGNvbnN0IGxvYWRDaGlsZHJlbklkZW50aWZpZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmcm9tID0gZW50cnlQb2ludE1hbmFnZXIuZnJvbU5nTW9kdWxlKG5nTW9kdWxlLCBtb2R1bGVOYW1lKTtcbiAgaWYgKGRhdGEucHJvdmlkZXJzICE9PSBudWxsKSB7XG4gICAgbG9hZENoaWxkcmVuSWRlbnRpZmllcnMucHVzaCguLi5zY2FuRm9yUHJvdmlkZXJzKGRhdGEucHJvdmlkZXJzLCBldmFsdWF0b3IpKTtcbiAgfVxuICBpZiAoZGF0YS5pbXBvcnRzICE9PSBudWxsKSB7XG4gICAgbG9hZENoaWxkcmVuSWRlbnRpZmllcnMucHVzaCguLi5zY2FuRm9yUm91dGVyTW9kdWxlVXNhZ2UoZGF0YS5pbXBvcnRzLCBldmFsdWF0b3IpKTtcbiAgfVxuICBpZiAoZGF0YS5leHBvcnRzICE9PSBudWxsKSB7XG4gICAgbG9hZENoaWxkcmVuSWRlbnRpZmllcnMucHVzaCguLi5zY2FuRm9yUm91dGVyTW9kdWxlVXNhZ2UoZGF0YS5leHBvcnRzLCBldmFsdWF0b3IpKTtcbiAgfVxuICBjb25zdCByb3V0ZXM6IExhenlSb3V0ZUVudHJ5W10gPSBbXTtcbiAgZm9yIChjb25zdCBsb2FkQ2hpbGRyZW4gb2YgbG9hZENoaWxkcmVuSWRlbnRpZmllcnMpIHtcbiAgICBjb25zdCByZXNvbHZlZFRvID0gZW50cnlQb2ludE1hbmFnZXIucmVzb2x2ZUxvYWRDaGlsZHJlbklkZW50aWZpZXIobG9hZENoaWxkcmVuLCBuZ01vZHVsZSk7XG4gICAgaWYgKHJlc29sdmVkVG8gIT09IG51bGwpIHtcbiAgICAgIHJvdXRlcy5wdXNoKHtcbiAgICAgICAgbG9hZENoaWxkcmVuLFxuICAgICAgICBmcm9tLFxuICAgICAgICByZXNvbHZlZFRvLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByb3V0ZXM7XG59XG5cbmZ1bmN0aW9uIHNjYW5Gb3JQcm92aWRlcnMoZXhwcjogdHMuRXhwcmVzc2lvbiwgZXZhbHVhdG9yOiBQYXJ0aWFsRXZhbHVhdG9yKTogc3RyaW5nW10ge1xuICBjb25zdCBsb2FkQ2hpbGRyZW5JZGVudGlmaWVyczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcHJvdmlkZXJzID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cHIpO1xuXG4gIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5QWRkUHJvdmlkZXJzKHByb3ZpZGVyOiBSZXNvbHZlZFZhbHVlKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvdmlkZXIpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHByb3ZpZGVyKSB7XG4gICAgICAgIHJlY3Vyc2l2ZWx5QWRkUHJvdmlkZXJzKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb3ZpZGVyIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpZiAocHJvdmlkZXIuaGFzKCdwcm92aWRlJykgJiYgcHJvdmlkZXIuaGFzKCd1c2VWYWx1ZScpKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGUgPSBwcm92aWRlci5nZXQoJ3Byb3ZpZGUnKTtcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBwcm92aWRlci5nZXQoJ3VzZVZhbHVlJyk7XG4gICAgICAgIGlmIChpc1JvdXRlVG9rZW4ocHJvdmlkZSkgJiYgQXJyYXkuaXNBcnJheSh1c2VWYWx1ZSkpIHtcbiAgICAgICAgICBsb2FkQ2hpbGRyZW5JZGVudGlmaWVycy5wdXNoKC4uLnNjYW5Gb3JMYXp5Um91dGVzKHVzZVZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWN1cnNpdmVseUFkZFByb3ZpZGVycyhwcm92aWRlcnMpO1xuICByZXR1cm4gbG9hZENoaWxkcmVuSWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIHNjYW5Gb3JSb3V0ZXJNb2R1bGVVc2FnZShleHByOiB0cy5FeHByZXNzaW9uLCBldmFsdWF0b3I6IFBhcnRpYWxFdmFsdWF0b3IpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGxvYWRDaGlsZHJlbklkZW50aWZpZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBpbXBvcnRzID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cHIsIHJvdXRlck1vZHVsZUZGUik7XG5cbiAgZnVuY3Rpb24gcmVjdXJzaXZlbHlBZGRSb3V0ZXMoaW1wOiBSZXNvbHZlZFZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW1wKSkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBpbXApIHtcbiAgICAgICAgcmVjdXJzaXZlbHlBZGRSb3V0ZXMoZW50cnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW1wIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpZiAoaW1wLmhhcyhST1VURVNfTUFSS0VSKSAmJiBpbXAuaGFzKCdyb3V0ZXMnKSkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBpbXAuZ2V0KCdyb3V0ZXMnKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGVzKSkge1xuICAgICAgICAgIGxvYWRDaGlsZHJlbklkZW50aWZpZXJzLnB1c2goLi4uc2NhbkZvckxhenlSb3V0ZXMocm91dGVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWN1cnNpdmVseUFkZFJvdXRlcyhpbXBvcnRzKTtcbiAgcmV0dXJuIGxvYWRDaGlsZHJlbklkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBzY2FuRm9yTGF6eVJvdXRlcyhyb3V0ZXM6IFJlc29sdmVkVmFsdWVbXSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgbG9hZENoaWxkcmVuSWRlbnRpZmllcnM6IHN0cmluZ1tdID0gW107XG5cbiAgZnVuY3Rpb24gcmVjdXJzaXZlbHlTY2FuUm91dGVzKHJvdXRlczogUmVzb2x2ZWRWYWx1ZVtdKTogdm9pZCB7XG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBpZiAoIShyb3V0ZSBpbnN0YW5jZW9mIE1hcCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocm91dGUuaGFzKCdsb2FkQ2hpbGRyZW4nKSkge1xuICAgICAgICBjb25zdCBsb2FkQ2hpbGRyZW4gPSByb3V0ZS5nZXQoJ2xvYWRDaGlsZHJlbicpO1xuICAgICAgICBpZiAodHlwZW9mIGxvYWRDaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBsb2FkQ2hpbGRyZW5JZGVudGlmaWVycy5wdXNoKGxvYWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocm91dGUuaGFzKCdjaGlsZHJlbicpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcm91dGUuZ2V0KCdjaGlsZHJlbicpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICByZWN1cnNpdmVseVNjYW5Sb3V0ZXMoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjdXJzaXZlbHlTY2FuUm91dGVzKHJvdXRlcyk7XG4gIHJldHVybiBsb2FkQ2hpbGRyZW5JZGVudGlmaWVycztcbn1cblxuLyoqXG4gKiBBIGZvcmVpZ24gZnVuY3Rpb24gcmVzb2x2ZXIgdGhhdCBjb252ZXJ0cyBgUm91dGVyTW9kdWxlLmZvclJvb3QvZm9yQ2hpbGQoWClgIHRvIGEgc3BlY2lhbCBvYmplY3RcbiAqIG9mIHRoZSBmb3JtIGB7X19uZ1JvdXRlc01hcmtlcl9fOiB0cnVlLCByb3V0ZXM6IFh9YC5cbiAqXG4gKiBUaGVzZSBvYmplY3RzIGFyZSB0aGVuIHJlY29nbml6YWJsZSBpbnNpZGUgdGhlIGxhcmdlciBzZXQgb2YgaW1wb3J0cy9leHBvcnRzLlxuICovXG5jb25zdCByb3V0ZXJNb2R1bGVGRlI6IEZvcmVpZ25GdW5jdGlvblJlc29sdmVyID1cbiAgICBmdW5jdGlvbiByb3V0ZXJNb2R1bGVGRlIoXG4gICAgICAgIHJlZjogUmVmZXJlbmNlPHRzLkZ1bmN0aW9uRGVjbGFyYXRpb258dHMuTWV0aG9kRGVjbGFyYXRpb258dHMuRnVuY3Rpb25FeHByZXNzaW9uPixcbiAgICAgICAgYXJnczogUmVhZG9ubHlBcnJheTx0cy5FeHByZXNzaW9uPik6IHRzLkV4cHJlc3Npb258bnVsbCB7XG4gIGlmICghaXNNZXRob2ROb2RlUmVmZXJlbmNlKHJlZikgfHwgIXRzLmlzQ2xhc3NEZWNsYXJhdGlvbihyZWYubm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoXG4gICAgICByZWYuYmVzdEd1ZXNzT3duaW5nTW9kdWxlID09PSBudWxsIHx8XG4gICAgICByZWYuYmVzdEd1ZXNzT3duaW5nTW9kdWxlLnNwZWNpZmllciAhPT0gJ0Bhbmd1bGFyL3JvdXRlcicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChyZWYubm9kZS5wYXJlbnQubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHJlZi5ub2RlLnBhcmVudC5uYW1lLnRleHQgIT09ICdSb3V0ZXJNb2R1bGUnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoXG4gICAgICAhdHMuaXNJZGVudGlmaWVyKHJlZi5ub2RlLm5hbWUpIHx8XG4gICAgICAocmVmLm5vZGUubmFtZS50ZXh0ICE9PSAnZm9yUm9vdCcgJiYgcmVmLm5vZGUubmFtZS50ZXh0ICE9PSAnZm9yQ2hpbGQnKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgcm91dGVzID0gYXJnc1swXTtcbiAgcmV0dXJuIHRzLmNyZWF0ZU9iamVjdExpdGVyYWwoW1xuICAgIHRzLmNyZWF0ZVByb3BlcnR5QXNzaWdubWVudChST1VURVNfTUFSS0VSLCB0cy5jcmVhdGVUcnVlKCkpLFxuICAgIHRzLmNyZWF0ZVByb3BlcnR5QXNzaWdubWVudCgncm91dGVzJywgcm91dGVzKSxcbiAgXSk7XG59O1xuXG5mdW5jdGlvbiBoYXNJZGVudGlmaWVyKG5vZGU6IHRzLk5vZGUpOiBub2RlIGlzIHRzLk5vZGUme25hbWU6IHRzLklkZW50aWZpZXJ9IHtcbiAgY29uc3Qgbm9kZV8gPSBub2RlIGFzIHRzLk5hbWVkRGVjbGFyYXRpb247XG4gIHJldHVybiAobm9kZV8ubmFtZSAhPT0gdW5kZWZpbmVkKSAmJiB0cy5pc0lkZW50aWZpZXIobm9kZV8ubmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzTWV0aG9kTm9kZVJlZmVyZW5jZShcbiAgICByZWY6IFJlZmVyZW5jZTx0cy5GdW5jdGlvbkRlY2xhcmF0aW9ufHRzLk1ldGhvZERlY2xhcmF0aW9ufHRzLkZ1bmN0aW9uRXhwcmVzc2lvbj4pOlxuICAgIHJlZiBpcyBSZWZlcmVuY2U8dHMuTWV0aG9kRGVjbGFyYXRpb24+IHtcbiAgcmV0dXJuIHRzLmlzTWV0aG9kRGVjbGFyYXRpb24ocmVmLm5vZGUpO1xufVxuXG5mdW5jdGlvbiBpc1JvdXRlVG9rZW4ocmVmOiBSZXNvbHZlZFZhbHVlKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgJiYgcmVmLmJlc3RHdWVzc093bmluZ01vZHVsZSAhPT0gbnVsbCAmJlxuICAgICAgcmVmLmJlc3RHdWVzc093bmluZ01vZHVsZS5zcGVjaWZpZXIgPT09ICdAYW5ndWxhci9yb3V0ZXInICYmIHJlZi5kZWJ1Z05hbWUgPT09ICdST1VURVMnO1xufVxuIl19