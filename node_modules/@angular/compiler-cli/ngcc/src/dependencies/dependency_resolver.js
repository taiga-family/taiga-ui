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
        define("@angular/compiler-cli/ngcc/src/dependencies/dependency_resolver", ["require", "exports", "tslib", "dependency-graph", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/packages/entry_point", "@angular/compiler-cli/ngcc/src/dependencies/dependency_host"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var dependency_graph_1 = require("dependency-graph");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var entry_point_1 = require("@angular/compiler-cli/ngcc/src/packages/entry_point");
    var dependency_host_1 = require("@angular/compiler-cli/ngcc/src/dependencies/dependency_host");
    var builtinNodeJsModules = new Set(require('module').builtinModules);
    /**
     * A class that resolves dependencies between entry-points.
     */
    var DependencyResolver = /** @class */ (function () {
        function DependencyResolver(fs, logger, config, hosts, typingsHost) {
            this.fs = fs;
            this.logger = logger;
            this.config = config;
            this.hosts = hosts;
            this.typingsHost = typingsHost;
        }
        /**
         * Sort the array of entry points so that the dependant entry points always come later than
         * their dependencies in the array.
         * @param entryPoints An array entry points to sort.
         * @param target If provided, only return entry-points depended on by this entry-point.
         * @returns the result of sorting the entry points by dependency.
         */
        DependencyResolver.prototype.sortEntryPointsByDependency = function (entryPoints, target) {
            var _a = this.computeDependencyGraph(entryPoints), invalidEntryPoints = _a.invalidEntryPoints, ignoredDependencies = _a.ignoredDependencies, graph = _a.graph;
            var sortedEntryPointNodes;
            if (target) {
                if (target.compiledByAngular && graph.hasNode(target.path)) {
                    sortedEntryPointNodes = graph.dependenciesOf(target.path);
                    sortedEntryPointNodes.push(target.path);
                }
                else {
                    sortedEntryPointNodes = [];
                }
            }
            else {
                sortedEntryPointNodes = graph.overallOrder();
            }
            return {
                entryPoints: sortedEntryPointNodes
                    .map(function (path) { return graph.getNodeData(path); }),
                graph: graph,
                invalidEntryPoints: invalidEntryPoints,
                ignoredDependencies: ignoredDependencies,
            };
        };
        DependencyResolver.prototype.getEntryPointWithDependencies = function (entryPoint) {
            var dependencies = dependency_host_1.createDependencyInfo();
            if (entryPoint.compiledByAngular) {
                // Only bother to compute dependencies of entry-points that have been compiled by Angular
                var formatInfo = this.getEntryPointFormatInfo(entryPoint);
                var host = this.hosts[formatInfo.format];
                if (!host) {
                    throw new Error("Could not find a suitable format for computing dependencies of entry-point: '" + entryPoint.path + "'.");
                }
                host.collectDependencies(formatInfo.path, dependencies);
                this.typingsHost.collectDependencies(entryPoint.typings, dependencies);
            }
            return { entryPoint: entryPoint, depInfo: dependencies };
        };
        /**
         * Computes a dependency graph of the given entry-points.
         *
         * The graph only holds entry-points that ngcc cares about and whose dependencies
         * (direct and transitive) all exist.
         */
        DependencyResolver.prototype.computeDependencyGraph = function (entryPoints) {
            var _this = this;
            var invalidEntryPoints = [];
            var ignoredDependencies = [];
            var graph = new dependency_graph_1.DepGraph();
            var angularEntryPoints = entryPoints.filter(function (e) { return e.entryPoint.compiledByAngular; });
            // Add the Angular compiled entry points to the graph as nodes
            angularEntryPoints.forEach(function (e) { return graph.addNode(e.entryPoint.path, e.entryPoint); });
            // Now add the dependencies between them
            angularEntryPoints.forEach(function (_a) {
                var entryPoint = _a.entryPoint, _b = _a.depInfo, dependencies = _b.dependencies, missing = _b.missing, deepImports = _b.deepImports;
                var missingDependencies = Array.from(missing).filter(function (dep) { return !builtinNodeJsModules.has(dep); });
                if (missingDependencies.length > 0 && !entryPoint.ignoreMissingDependencies) {
                    // This entry point has dependencies that are missing
                    // so remove it from the graph.
                    removeNodes(entryPoint, missingDependencies);
                }
                else {
                    dependencies.forEach(function (dependencyPath) {
                        if (!graph.hasNode(entryPoint.path)) {
                            // The entry-point has already been identified as invalid so we don't need
                            // to do any further work on it.
                        }
                        else if (graph.hasNode(dependencyPath)) {
                            // The entry-point is still valid (i.e. has no missing dependencies) and
                            // the dependency maps to an entry point that exists in the graph so add it
                            graph.addDependency(entryPoint.path, dependencyPath);
                        }
                        else if (invalidEntryPoints.some(function (i) { return i.entryPoint.path === dependencyPath; })) {
                            // The dependency path maps to an entry-point that was previously removed
                            // from the graph, so remove this entry-point as well.
                            removeNodes(entryPoint, [dependencyPath]);
                        }
                        else {
                            // The dependency path points to a package that ngcc does not care about.
                            ignoredDependencies.push({ entryPoint: entryPoint, dependencyPath: dependencyPath });
                        }
                    });
                }
                if (deepImports.size > 0) {
                    var notableDeepImports = _this.filterIgnorableDeepImports(entryPoint, deepImports);
                    if (notableDeepImports.length > 0) {
                        var imports = notableDeepImports.map(function (i) { return "'" + i + "'"; }).join(', ');
                        _this.logger.warn("Entry point '" + entryPoint.name + "' contains deep imports into " + imports + ". " +
                            "This is probably not a problem, but may cause the compilation of entry points to be out of order.");
                    }
                }
            });
            return { invalidEntryPoints: invalidEntryPoints, ignoredDependencies: ignoredDependencies, graph: graph };
            function removeNodes(entryPoint, missingDependencies) {
                var nodesToRemove = tslib_1.__spread([entryPoint.path], graph.dependantsOf(entryPoint.path));
                nodesToRemove.forEach(function (node) {
                    invalidEntryPoints.push({ entryPoint: graph.getNodeData(node), missingDependencies: missingDependencies });
                    graph.removeNode(node);
                });
            }
        };
        DependencyResolver.prototype.getEntryPointFormatInfo = function (entryPoint) {
            var e_1, _a;
            try {
                for (var SUPPORTED_FORMAT_PROPERTIES_1 = tslib_1.__values(entry_point_1.SUPPORTED_FORMAT_PROPERTIES), SUPPORTED_FORMAT_PROPERTIES_1_1 = SUPPORTED_FORMAT_PROPERTIES_1.next(); !SUPPORTED_FORMAT_PROPERTIES_1_1.done; SUPPORTED_FORMAT_PROPERTIES_1_1 = SUPPORTED_FORMAT_PROPERTIES_1.next()) {
                    var property = SUPPORTED_FORMAT_PROPERTIES_1_1.value;
                    var formatPath = entryPoint.packageJson[property];
                    if (formatPath === undefined)
                        continue;
                    var format = entry_point_1.getEntryPointFormat(this.fs, entryPoint, property);
                    if (format === undefined)
                        continue;
                    return { format: format, path: file_system_1.resolve(entryPoint.path, formatPath) };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (SUPPORTED_FORMAT_PROPERTIES_1_1 && !SUPPORTED_FORMAT_PROPERTIES_1_1.done && (_a = SUPPORTED_FORMAT_PROPERTIES_1.return)) _a.call(SUPPORTED_FORMAT_PROPERTIES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            throw new Error("There is no appropriate source code format in '" + entryPoint.path + "' entry-point.");
        };
        /**
         * Filter out the deepImports that can be ignored, according to this entryPoint's config.
         */
        DependencyResolver.prototype.filterIgnorableDeepImports = function (entryPoint, deepImports) {
            var version = (entryPoint.packageJson.version || null);
            var packageConfig = this.config.getConfig(entryPoint.package, version);
            var matchers = packageConfig.ignorableDeepImportMatchers || [];
            return Array.from(deepImports)
                .filter(function (deepImport) { return !matchers.some(function (matcher) { return matcher.test(deepImport); }); });
        };
        return DependencyResolver;
    }());
    exports.DependencyResolver = DependencyResolver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeV9yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9kZXBlbmRlbmNpZXMvZGVwZW5kZW5jeV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCxxREFBMEM7SUFFMUMsMkVBQW1GO0lBR25GLG1GQUF1SDtJQUd2SCwrRkFBbUc7SUFFbkcsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLEdBQUcsQ0FBUyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7SUErRC9FOztPQUVHO0lBQ0g7UUFDRSw0QkFDWSxFQUFjLEVBQVUsTUFBYyxFQUFVLE1BQXlCLEVBQ3pFLEtBQXdELEVBQ3hELFdBQTJCO1lBRjNCLE9BQUUsR0FBRixFQUFFLENBQVk7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7WUFDekUsVUFBSyxHQUFMLEtBQUssQ0FBbUQ7WUFDeEQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQUcsQ0FBQztRQUMzQzs7Ozs7O1dBTUc7UUFDSCx3REFBMkIsR0FBM0IsVUFBNEIsV0FBeUMsRUFBRSxNQUFtQjtZQUVsRixJQUFBLDZDQUNzQyxFQURyQywwQ0FBa0IsRUFBRSw0Q0FBbUIsRUFBRSxnQkFDSixDQUFDO1lBRTdDLElBQUkscUJBQStCLENBQUM7WUFDcEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxNQUFNLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFELHFCQUFxQixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QztxQkFBTTtvQkFDTCxxQkFBcUIsR0FBRyxFQUFFLENBQUM7aUJBQzVCO2FBQ0Y7aUJBQU07Z0JBQ0wscUJBQXFCLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzlDO1lBRUQsT0FBTztnQkFDTCxXQUFXLEVBQUcscUJBQXNEO3FCQUNsRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDO2dCQUN0RCxLQUFLLE9BQUE7Z0JBQ0wsa0JBQWtCLG9CQUFBO2dCQUNsQixtQkFBbUIscUJBQUE7YUFDcEIsQ0FBQztRQUNKLENBQUM7UUFFRCwwREFBNkIsR0FBN0IsVUFBOEIsVUFBc0I7WUFDbEQsSUFBTSxZQUFZLEdBQUcsc0NBQW9CLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDaEMseUZBQXlGO2dCQUN6RixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSSxLQUFLLENBQ1gsa0ZBQ0ksVUFBVSxDQUFDLElBQUksT0FBSSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDeEU7WUFDRCxPQUFPLEVBQUMsVUFBVSxZQUFBLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNLLG1EQUFzQixHQUE5QixVQUErQixXQUF5QztZQUF4RSxpQkEwREM7WUF6REMsSUFBTSxrQkFBa0IsR0FBd0IsRUFBRSxDQUFDO1lBQ25ELElBQU0sbUJBQW1CLEdBQXdCLEVBQUUsQ0FBQztZQUNwRCxJQUFNLEtBQUssR0FBRyxJQUFJLDJCQUFRLEVBQWMsQ0FBQztZQUV6QyxJQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUE5QixDQUE4QixDQUFDLENBQUM7WUFFbkYsOERBQThEO1lBQzlELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7WUFFaEYsd0NBQXdDO1lBQ3hDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQTJEO29CQUExRCwwQkFBVSxFQUFFLGVBQTZDLEVBQW5DLDhCQUFZLEVBQUUsb0JBQU8sRUFBRSw0QkFBVztnQkFDbkYsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBRTlGLElBQUksbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRTtvQkFDM0UscURBQXFEO29CQUNyRCwrQkFBK0I7b0JBQy9CLFdBQVcsQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbkMsMEVBQTBFOzRCQUMxRSxnQ0FBZ0M7eUJBQ2pDOzZCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTs0QkFDeEMsd0VBQXdFOzRCQUN4RSwyRUFBMkU7NEJBQzNFLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQzt5QkFDdEQ7NkJBQU0sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQXBDLENBQW9DLENBQUMsRUFBRTs0QkFDN0UseUVBQXlFOzRCQUN6RSxzREFBc0Q7NEJBQ3RELFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3lCQUMzQzs2QkFBTTs0QkFDTCx5RUFBeUU7NEJBQ3pFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsWUFBQSxFQUFFLGNBQWMsZ0JBQUEsRUFBQyxDQUFDLENBQUM7eUJBQ3hEO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUVELElBQUksV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQU0sa0JBQWtCLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQyxJQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFJLENBQUMsTUFBRyxFQUFSLENBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1osa0JBQWdCLFVBQVUsQ0FBQyxJQUFJLHFDQUFnQyxPQUFPLE9BQUk7NEJBQzFFLG1HQUFtRyxDQUFDLENBQUM7cUJBQzFHO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLEVBQUMsa0JBQWtCLG9CQUFBLEVBQUUsbUJBQW1CLHFCQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQztZQUV4RCxTQUFTLFdBQVcsQ0FBQyxVQUFzQixFQUFFLG1CQUE2QjtnQkFDeEUsSUFBTSxhQUFhLHFCQUFJLFVBQVUsQ0FBQyxJQUFJLEdBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEYsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ3hCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFtQixxQkFBQSxFQUFDLENBQUMsQ0FBQztvQkFDcEYsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUVPLG9EQUF1QixHQUEvQixVQUFnQyxVQUFzQjs7O2dCQUVwRCxLQUF1QixJQUFBLGdDQUFBLGlCQUFBLHlDQUEyQixDQUFBLHdFQUFBLGlIQUFFO29CQUEvQyxJQUFNLFFBQVEsd0NBQUE7b0JBQ2pCLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BELElBQUksVUFBVSxLQUFLLFNBQVM7d0JBQUUsU0FBUztvQkFFdkMsSUFBTSxNQUFNLEdBQUcsaUNBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ2xFLElBQUksTUFBTSxLQUFLLFNBQVM7d0JBQUUsU0FBUztvQkFFbkMsT0FBTyxFQUFDLE1BQU0sUUFBQSxFQUFFLElBQUksRUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQztpQkFDN0Q7Ozs7Ozs7OztZQUVELE1BQU0sSUFBSSxLQUFLLENBQ1gsb0RBQWtELFVBQVUsQ0FBQyxJQUFJLG1CQUFnQixDQUFDLENBQUM7UUFDekYsQ0FBQztRQUVEOztXQUVHO1FBQ0ssdURBQTBCLEdBQWxDLFVBQW1DLFVBQXNCLEVBQUUsV0FBZ0M7WUFFekYsSUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQWtCLENBQUM7WUFDMUUsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RSxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsMkJBQTJCLElBQUksRUFBRSxDQUFDO1lBQ2pFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3pCLE1BQU0sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQXhCLENBQXdCLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFDSCx5QkFBQztJQUFELENBQUMsQUFwSkQsSUFvSkM7SUFwSlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RlcEdyYXBofSBmcm9tICdkZXBlbmRlbmN5LWdyYXBoJztcblxuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgRmlsZVN5c3RlbSwgcmVzb2x2ZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICcuLi9sb2dnaW5nL2xvZ2dlcic7XG5pbXBvcnQge05nY2NDb25maWd1cmF0aW9ufSBmcm9tICcuLi9wYWNrYWdlcy9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7RW50cnlQb2ludCwgRW50cnlQb2ludEZvcm1hdCwgZ2V0RW50cnlQb2ludEZvcm1hdCwgU1VQUE9SVEVEX0ZPUk1BVF9QUk9QRVJUSUVTfSBmcm9tICcuLi9wYWNrYWdlcy9lbnRyeV9wb2ludCc7XG5pbXBvcnQge1BhcnRpYWxseU9yZGVyZWRMaXN0fSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCB7Y3JlYXRlRGVwZW5kZW5jeUluZm8sIERlcGVuZGVuY3lIb3N0LCBFbnRyeVBvaW50V2l0aERlcGVuZGVuY2llc30gZnJvbSAnLi9kZXBlbmRlbmN5X2hvc3QnO1xuXG5jb25zdCBidWlsdGluTm9kZUpzTW9kdWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihyZXF1aXJlKCdtb2R1bGUnKS5idWlsdGluTW9kdWxlcyk7XG5cbi8qKlxuICogSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgZW50cnkgcG9pbnRzIHRoYXQgYXJlIHJlbW92ZWQgYmVjYXVzZVxuICogdGhleSBoYXZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBtaXNzaW5nIChkaXJlY3RseSBvciB0cmFuc2l0aXZlbHkpLlxuICpcbiAqIFRoaXMgbWlnaHQgbm90IGJlIGFuIGVycm9yLCBiZWNhdXNlIHN1Y2ggYW4gZW50cnkgcG9pbnQgbWlnaHQgbm90IGFjdHVhbGx5IGJlIHVzZWRcbiAqIGluIHRoZSBhcHBsaWNhdGlvbi4gSWYgaXQgaXMgdXNlZCB0aGVuIHRoZSBgbmdjYCBhcHBsaWNhdGlvbiBjb21waWxhdGlvbiB3b3VsZFxuICogZmFpbCBhbHNvLCBzbyB3ZSBkb24ndCBuZWVkIG5nY2MgdG8gY2F0Y2ggdGhpcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgYW4gYXBwbGljYXRpb24gdGhhdCB1c2VzIHRoZSBgQGFuZ3VsYXIvcm91dGVyYCBwYWNrYWdlLlxuICogVGhpcyBwYWNrYWdlIGluY2x1ZGVzIGFuIGVudHJ5LXBvaW50IGNhbGxlZCBgQGFuZ3VsYXIvcm91dGVyL3VwZ3JhZGVgLCB3aGljaCBoYXMgYSBkZXBlbmRlbmN5XG4gKiBvbiB0aGUgYEBhbmd1bGFyL3VwZ3JhZGVgIHBhY2thZ2UuXG4gKiBJZiB0aGUgYXBwbGljYXRpb24gbmV2ZXIgdXNlcyBjb2RlIGZyb20gYEBhbmd1bGFyL3JvdXRlci91cGdyYWRlYCB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgZm9yXG4gKiBgQGFuZ3VsYXIvdXBncmFkZWAgdG8gYmUgaW5zdGFsbGVkLlxuICogSW4gdGhpcyBjYXNlIHRoZSBuZ2NjIHRvb2wgc2hvdWxkIGp1c3QgaWdub3JlIHRoZSBgQGFuZ3VsYXIvcm91dGVyL3VwZ3JhZGVgIGVuZC1wb2ludC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnZhbGlkRW50cnlQb2ludCB7XG4gIGVudHJ5UG9pbnQ6IEVudHJ5UG9pbnQ7XG4gIG1pc3NpbmdEZXBlbmRlbmNpZXM6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IGRlcGVuZGVuY2llcyBvZiBhbiBlbnRyeS1wb2ludCB0aGF0IGRvIG5vdCBuZWVkIHRvIGJlIHByb2Nlc3NlZFxuICogYnkgdGhlIG5nY2MgdG9vbC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGByeGpzYCBwYWNrYWdlIGRvZXMgbm90IGNvbnRhaW4gYW55IEFuZ3VsYXIgZGVjb3JhdG9ycyB0aGF0IG5lZWQgdG8gYmVcbiAqIGNvbXBpbGVkIGFuZCBzbyB0aGlzIGNhbiBiZSBzYWZlbHkgaWdub3JlZCBieSBuZ2NjLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElnbm9yZWREZXBlbmRlbmN5IHtcbiAgZW50cnlQb2ludDogRW50cnlQb2ludDtcbiAgZGVwZW5kZW5jeVBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXBlbmRlbmN5RGlhZ25vc3RpY3Mge1xuICBpbnZhbGlkRW50cnlQb2ludHM6IEludmFsaWRFbnRyeVBvaW50W107XG4gIGlnbm9yZWREZXBlbmRlbmNpZXM6IElnbm9yZWREZXBlbmRlbmN5W107XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhcnRpYWxseSBvcmRlcmVkIGxpc3Qgb2YgZW50cnktcG9pbnRzLlxuICpcbiAqIFRoZSBlbnRyeS1wb2ludHMnIG9yZGVyL3ByZWNlZGVuY2UgaXMgc3VjaCB0aGF0IGRlcGVuZGVudCBlbnRyeS1wb2ludHMgYWx3YXlzIGNvbWUgbGF0ZXIgdGhhblxuICogdGhlaXIgZGVwZW5kZW5jaWVzIGluIHRoZSBsaXN0LlxuICpcbiAqIFNlZSBgRGVwZW5kZW5jeVJlc29sdmVyI3NvcnRFbnRyeVBvaW50c0J5RGVwZW5kZW5jeSgpYC5cbiAqL1xuZXhwb3J0IHR5cGUgUGFydGlhbGx5T3JkZXJlZEVudHJ5UG9pbnRzID0gUGFydGlhbGx5T3JkZXJlZExpc3Q8RW50cnlQb2ludD47XG5cbi8qKlxuICogQSBsaXN0IG9mIGVudHJ5LXBvaW50cywgc29ydGVkIGJ5IHRoZWlyIGRlcGVuZGVuY2llcywgYW5kIHRoZSBkZXBlbmRlbmN5IGdyYXBoLlxuICpcbiAqIFRoZSBgZW50cnlQb2ludHNgIGFycmF5IHdpbGwgYmUgb3JkZXJlZCBzbyB0aGF0IG5vIGVudHJ5IHBvaW50IGRlcGVuZHMgdXBvbiBhbiBlbnRyeSBwb2ludCB0aGF0XG4gKiBhcHBlYXJzIGxhdGVyIGluIHRoZSBhcnJheS5cbiAqXG4gKiBTb21lIGVudHJ5IHBvaW50cyBvciB0aGVpciBkZXBlbmRlbmNpZXMgbWF5IGhhdmUgYmVlbiBpZ25vcmVkLiBUaGVzZSBhcmUgY2FwdHVyZWQgZm9yXG4gKiBkaWFnbm9zdGljIHB1cnBvc2VzIGluIGBpbnZhbGlkRW50cnlQb2ludHNgIGFuZCBgaWdub3JlZERlcGVuZGVuY2llc2AgcmVzcGVjdGl2ZWx5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRlZEVudHJ5UG9pbnRzSW5mbyBleHRlbmRzIERlcGVuZGVuY3lEaWFnbm9zdGljcyB7XG4gIGVudHJ5UG9pbnRzOiBQYXJ0aWFsbHlPcmRlcmVkRW50cnlQb2ludHM7XG4gIGdyYXBoOiBEZXBHcmFwaDxFbnRyeVBvaW50Pjtcbn1cblxuLyoqXG4gKiBBIGNsYXNzIHRoYXQgcmVzb2x2ZXMgZGVwZW5kZW5jaWVzIGJldHdlZW4gZW50cnktcG9pbnRzLlxuICovXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jeVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGZzOiBGaWxlU3lzdGVtLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLCBwcml2YXRlIGNvbmZpZzogTmdjY0NvbmZpZ3VyYXRpb24sXG4gICAgICBwcml2YXRlIGhvc3RzOiBQYXJ0aWFsPFJlY29yZDxFbnRyeVBvaW50Rm9ybWF0LCBEZXBlbmRlbmN5SG9zdD4+LFxuICAgICAgcHJpdmF0ZSB0eXBpbmdzSG9zdDogRGVwZW5kZW5jeUhvc3QpIHt9XG4gIC8qKlxuICAgKiBTb3J0IHRoZSBhcnJheSBvZiBlbnRyeSBwb2ludHMgc28gdGhhdCB0aGUgZGVwZW5kYW50IGVudHJ5IHBvaW50cyBhbHdheXMgY29tZSBsYXRlciB0aGFuXG4gICAqIHRoZWlyIGRlcGVuZGVuY2llcyBpbiB0aGUgYXJyYXkuXG4gICAqIEBwYXJhbSBlbnRyeVBvaW50cyBBbiBhcnJheSBlbnRyeSBwb2ludHMgdG8gc29ydC5cbiAgICogQHBhcmFtIHRhcmdldCBJZiBwcm92aWRlZCwgb25seSByZXR1cm4gZW50cnktcG9pbnRzIGRlcGVuZGVkIG9uIGJ5IHRoaXMgZW50cnktcG9pbnQuXG4gICAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2Ygc29ydGluZyB0aGUgZW50cnkgcG9pbnRzIGJ5IGRlcGVuZGVuY3kuXG4gICAqL1xuICBzb3J0RW50cnlQb2ludHNCeURlcGVuZGVuY3koZW50cnlQb2ludHM6IEVudHJ5UG9pbnRXaXRoRGVwZW5kZW5jaWVzW10sIHRhcmdldD86IEVudHJ5UG9pbnQpOlxuICAgICAgU29ydGVkRW50cnlQb2ludHNJbmZvIHtcbiAgICBjb25zdCB7aW52YWxpZEVudHJ5UG9pbnRzLCBpZ25vcmVkRGVwZW5kZW5jaWVzLCBncmFwaH0gPVxuICAgICAgICB0aGlzLmNvbXB1dGVEZXBlbmRlbmN5R3JhcGgoZW50cnlQb2ludHMpO1xuXG4gICAgbGV0IHNvcnRlZEVudHJ5UG9pbnROb2Rlczogc3RyaW5nW107XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldC5jb21waWxlZEJ5QW5ndWxhciAmJiBncmFwaC5oYXNOb2RlKHRhcmdldC5wYXRoKSkge1xuICAgICAgICBzb3J0ZWRFbnRyeVBvaW50Tm9kZXMgPSBncmFwaC5kZXBlbmRlbmNpZXNPZih0YXJnZXQucGF0aCk7XG4gICAgICAgIHNvcnRlZEVudHJ5UG9pbnROb2Rlcy5wdXNoKHRhcmdldC5wYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvcnRlZEVudHJ5UG9pbnROb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0ZWRFbnRyeVBvaW50Tm9kZXMgPSBncmFwaC5vdmVyYWxsT3JkZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZW50cnlQb2ludHM6IChzb3J0ZWRFbnRyeVBvaW50Tm9kZXMgYXMgUGFydGlhbGx5T3JkZXJlZExpc3Q8c3RyaW5nPilcbiAgICAgICAgICAgICAgICAgICAgICAgLm1hcChwYXRoID0+IGdyYXBoLmdldE5vZGVEYXRhKHBhdGgpKSxcbiAgICAgIGdyYXBoLFxuICAgICAgaW52YWxpZEVudHJ5UG9pbnRzLFxuICAgICAgaWdub3JlZERlcGVuZGVuY2llcyxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RW50cnlQb2ludFdpdGhEZXBlbmRlbmNpZXMoZW50cnlQb2ludDogRW50cnlQb2ludCk6IEVudHJ5UG9pbnRXaXRoRGVwZW5kZW5jaWVzIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBjcmVhdGVEZXBlbmRlbmN5SW5mbygpO1xuICAgIGlmIChlbnRyeVBvaW50LmNvbXBpbGVkQnlBbmd1bGFyKSB7XG4gICAgICAvLyBPbmx5IGJvdGhlciB0byBjb21wdXRlIGRlcGVuZGVuY2llcyBvZiBlbnRyeS1wb2ludHMgdGhhdCBoYXZlIGJlZW4gY29tcGlsZWQgYnkgQW5ndWxhclxuICAgICAgY29uc3QgZm9ybWF0SW5mbyA9IHRoaXMuZ2V0RW50cnlQb2ludEZvcm1hdEluZm8oZW50cnlQb2ludCk7XG4gICAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0c1tmb3JtYXRJbmZvLmZvcm1hdF07XG4gICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYENvdWxkIG5vdCBmaW5kIGEgc3VpdGFibGUgZm9ybWF0IGZvciBjb21wdXRpbmcgZGVwZW5kZW5jaWVzIG9mIGVudHJ5LXBvaW50OiAnJHtcbiAgICAgICAgICAgICAgICBlbnRyeVBvaW50LnBhdGh9Jy5gKTtcbiAgICAgIH1cbiAgICAgIGhvc3QuY29sbGVjdERlcGVuZGVuY2llcyhmb3JtYXRJbmZvLnBhdGgsIGRlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnR5cGluZ3NIb3N0LmNvbGxlY3REZXBlbmRlbmNpZXMoZW50cnlQb2ludC50eXBpbmdzLCBkZXBlbmRlbmNpZXMpO1xuICAgIH1cbiAgICByZXR1cm4ge2VudHJ5UG9pbnQsIGRlcEluZm86IGRlcGVuZGVuY2llc307XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSBkZXBlbmRlbmN5IGdyYXBoIG9mIHRoZSBnaXZlbiBlbnRyeS1wb2ludHMuXG4gICAqXG4gICAqIFRoZSBncmFwaCBvbmx5IGhvbGRzIGVudHJ5LXBvaW50cyB0aGF0IG5nY2MgY2FyZXMgYWJvdXQgYW5kIHdob3NlIGRlcGVuZGVuY2llc1xuICAgKiAoZGlyZWN0IGFuZCB0cmFuc2l0aXZlKSBhbGwgZXhpc3QuXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVEZXBlbmRlbmN5R3JhcGgoZW50cnlQb2ludHM6IEVudHJ5UG9pbnRXaXRoRGVwZW5kZW5jaWVzW10pOiBEZXBlbmRlbmN5R3JhcGgge1xuICAgIGNvbnN0IGludmFsaWRFbnRyeVBvaW50czogSW52YWxpZEVudHJ5UG9pbnRbXSA9IFtdO1xuICAgIGNvbnN0IGlnbm9yZWREZXBlbmRlbmNpZXM6IElnbm9yZWREZXBlbmRlbmN5W10gPSBbXTtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBEZXBHcmFwaDxFbnRyeVBvaW50PigpO1xuXG4gICAgY29uc3QgYW5ndWxhckVudHJ5UG9pbnRzID0gZW50cnlQb2ludHMuZmlsdGVyKGUgPT4gZS5lbnRyeVBvaW50LmNvbXBpbGVkQnlBbmd1bGFyKTtcblxuICAgIC8vIEFkZCB0aGUgQW5ndWxhciBjb21waWxlZCBlbnRyeSBwb2ludHMgdG8gdGhlIGdyYXBoIGFzIG5vZGVzXG4gICAgYW5ndWxhckVudHJ5UG9pbnRzLmZvckVhY2goZSA9PiBncmFwaC5hZGROb2RlKGUuZW50cnlQb2ludC5wYXRoLCBlLmVudHJ5UG9pbnQpKTtcblxuICAgIC8vIE5vdyBhZGQgdGhlIGRlcGVuZGVuY2llcyBiZXR3ZWVuIHRoZW1cbiAgICBhbmd1bGFyRW50cnlQb2ludHMuZm9yRWFjaCgoe2VudHJ5UG9pbnQsIGRlcEluZm86IHtkZXBlbmRlbmNpZXMsIG1pc3NpbmcsIGRlZXBJbXBvcnRzfX0pID0+IHtcbiAgICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBBcnJheS5mcm9tKG1pc3NpbmcpLmZpbHRlcihkZXAgPT4gIWJ1aWx0aW5Ob2RlSnNNb2R1bGVzLmhhcyhkZXApKTtcblxuICAgICAgaWYgKG1pc3NpbmdEZXBlbmRlbmNpZXMubGVuZ3RoID4gMCAmJiAhZW50cnlQb2ludC5pZ25vcmVNaXNzaW5nRGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIC8vIFRoaXMgZW50cnkgcG9pbnQgaGFzIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBtaXNzaW5nXG4gICAgICAgIC8vIHNvIHJlbW92ZSBpdCBmcm9tIHRoZSBncmFwaC5cbiAgICAgICAgcmVtb3ZlTm9kZXMoZW50cnlQb2ludCwgbWlzc2luZ0RlcGVuZGVuY2llcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5UGF0aCA9PiB7XG4gICAgICAgICAgaWYgKCFncmFwaC5oYXNOb2RlKGVudHJ5UG9pbnQucGF0aCkpIHtcbiAgICAgICAgICAgIC8vIFRoZSBlbnRyeS1wb2ludCBoYXMgYWxyZWFkeSBiZWVuIGlkZW50aWZpZWQgYXMgaW52YWxpZCBzbyB3ZSBkb24ndCBuZWVkXG4gICAgICAgICAgICAvLyB0byBkbyBhbnkgZnVydGhlciB3b3JrIG9uIGl0LlxuICAgICAgICAgIH0gZWxzZSBpZiAoZ3JhcGguaGFzTm9kZShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICAgIC8vIFRoZSBlbnRyeS1wb2ludCBpcyBzdGlsbCB2YWxpZCAoaS5lLiBoYXMgbm8gbWlzc2luZyBkZXBlbmRlbmNpZXMpIGFuZFxuICAgICAgICAgICAgLy8gdGhlIGRlcGVuZGVuY3kgbWFwcyB0byBhbiBlbnRyeSBwb2ludCB0aGF0IGV4aXN0cyBpbiB0aGUgZ3JhcGggc28gYWRkIGl0XG4gICAgICAgICAgICBncmFwaC5hZGREZXBlbmRlbmN5KGVudHJ5UG9pbnQucGF0aCwgZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW52YWxpZEVudHJ5UG9pbnRzLnNvbWUoaSA9PiBpLmVudHJ5UG9pbnQucGF0aCA9PT0gZGVwZW5kZW5jeVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZGVwZW5kZW5jeSBwYXRoIG1hcHMgdG8gYW4gZW50cnktcG9pbnQgdGhhdCB3YXMgcHJldmlvdXNseSByZW1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBncmFwaCwgc28gcmVtb3ZlIHRoaXMgZW50cnktcG9pbnQgYXMgd2VsbC5cbiAgICAgICAgICAgIHJlbW92ZU5vZGVzKGVudHJ5UG9pbnQsIFtkZXBlbmRlbmN5UGF0aF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgZGVwZW5kZW5jeSBwYXRoIHBvaW50cyB0byBhIHBhY2thZ2UgdGhhdCBuZ2NjIGRvZXMgbm90IGNhcmUgYWJvdXQuXG4gICAgICAgICAgICBpZ25vcmVkRGVwZW5kZW5jaWVzLnB1c2goe2VudHJ5UG9pbnQsIGRlcGVuZGVuY3lQYXRofSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlZXBJbXBvcnRzLnNpemUgPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vdGFibGVEZWVwSW1wb3J0cyA9IHRoaXMuZmlsdGVySWdub3JhYmxlRGVlcEltcG9ydHMoZW50cnlQb2ludCwgZGVlcEltcG9ydHMpO1xuICAgICAgICBpZiAobm90YWJsZURlZXBJbXBvcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBpbXBvcnRzID0gbm90YWJsZURlZXBJbXBvcnRzLm1hcChpID0+IGAnJHtpfSdgKS5qb2luKCcsICcpO1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgIGBFbnRyeSBwb2ludCAnJHtlbnRyeVBvaW50Lm5hbWV9JyBjb250YWlucyBkZWVwIGltcG9ydHMgaW50byAke2ltcG9ydHN9LiBgICtcbiAgICAgICAgICAgICAgYFRoaXMgaXMgcHJvYmFibHkgbm90IGEgcHJvYmxlbSwgYnV0IG1heSBjYXVzZSB0aGUgY29tcGlsYXRpb24gb2YgZW50cnkgcG9pbnRzIHRvIGJlIG91dCBvZiBvcmRlci5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtpbnZhbGlkRW50cnlQb2ludHMsIGlnbm9yZWREZXBlbmRlbmNpZXMsIGdyYXBofTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVzKGVudHJ5UG9pbnQ6IEVudHJ5UG9pbnQsIG1pc3NpbmdEZXBlbmRlbmNpZXM6IHN0cmluZ1tdKSB7XG4gICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW2VudHJ5UG9pbnQucGF0aCwgLi4uZ3JhcGguZGVwZW5kYW50c09mKGVudHJ5UG9pbnQucGF0aCldO1xuICAgICAgbm9kZXNUb1JlbW92ZS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpbnZhbGlkRW50cnlQb2ludHMucHVzaCh7ZW50cnlQb2ludDogZ3JhcGguZ2V0Tm9kZURhdGEobm9kZSksIG1pc3NpbmdEZXBlbmRlbmNpZXN9KTtcbiAgICAgICAgZ3JhcGgucmVtb3ZlTm9kZShub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW50cnlQb2ludEZvcm1hdEluZm8oZW50cnlQb2ludDogRW50cnlQb2ludCk6XG4gICAgICB7Zm9ybWF0OiBFbnRyeVBvaW50Rm9ybWF0LCBwYXRoOiBBYnNvbHV0ZUZzUGF0aH0ge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgU1VQUE9SVEVEX0ZPUk1BVF9QUk9QRVJUSUVTKSB7XG4gICAgICBjb25zdCBmb3JtYXRQYXRoID0gZW50cnlQb2ludC5wYWNrYWdlSnNvbltwcm9wZXJ0eV07XG4gICAgICBpZiAoZm9ybWF0UGF0aCA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgZm9ybWF0ID0gZ2V0RW50cnlQb2ludEZvcm1hdCh0aGlzLmZzLCBlbnRyeVBvaW50LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICByZXR1cm4ge2Zvcm1hdCwgcGF0aDogcmVzb2x2ZShlbnRyeVBvaW50LnBhdGgsIGZvcm1hdFBhdGgpfTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGVyZSBpcyBubyBhcHByb3ByaWF0ZSBzb3VyY2UgY29kZSBmb3JtYXQgaW4gJyR7ZW50cnlQb2ludC5wYXRofScgZW50cnktcG9pbnQuYCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIG91dCB0aGUgZGVlcEltcG9ydHMgdGhhdCBjYW4gYmUgaWdub3JlZCwgYWNjb3JkaW5nIHRvIHRoaXMgZW50cnlQb2ludCdzIGNvbmZpZy5cbiAgICovXG4gIHByaXZhdGUgZmlsdGVySWdub3JhYmxlRGVlcEltcG9ydHMoZW50cnlQb2ludDogRW50cnlQb2ludCwgZGVlcEltcG9ydHM6IFNldDxBYnNvbHV0ZUZzUGF0aD4pOlxuICAgICAgQWJzb2x1dGVGc1BhdGhbXSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IChlbnRyeVBvaW50LnBhY2thZ2VKc29uLnZlcnNpb24gfHwgbnVsbCkgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwYWNrYWdlQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKGVudHJ5UG9pbnQucGFja2FnZSwgdmVyc2lvbik7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBwYWNrYWdlQ29uZmlnLmlnbm9yYWJsZURlZXBJbXBvcnRNYXRjaGVycyB8fCBbXTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkZWVwSW1wb3J0cylcbiAgICAgICAgLmZpbHRlcihkZWVwSW1wb3J0ID0+ICFtYXRjaGVycy5zb21lKG1hdGNoZXIgPT4gbWF0Y2hlci50ZXN0KGRlZXBJbXBvcnQpKSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIERlcGVuZGVuY3lHcmFwaCBleHRlbmRzIERlcGVuZGVuY3lEaWFnbm9zdGljcyB7XG4gIGdyYXBoOiBEZXBHcmFwaDxFbnRyeVBvaW50Pjtcbn1cbiJdfQ==