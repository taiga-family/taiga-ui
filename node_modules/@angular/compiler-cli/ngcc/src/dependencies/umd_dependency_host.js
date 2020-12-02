(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/dependencies/umd_dependency_host", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/ngcc/src/host/umd_host", "@angular/compiler-cli/ngcc/src/dependencies/dependency_host", "@angular/compiler-cli/ngcc/src/dependencies/module_resolver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var umd_host_1 = require("@angular/compiler-cli/ngcc/src/host/umd_host");
    var dependency_host_1 = require("@angular/compiler-cli/ngcc/src/dependencies/dependency_host");
    var module_resolver_1 = require("@angular/compiler-cli/ngcc/src/dependencies/module_resolver");
    /**
     * Helper functions for computing dependencies.
     */
    var UmdDependencyHost = /** @class */ (function (_super) {
        tslib_1.__extends(UmdDependencyHost, _super);
        function UmdDependencyHost() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Compute the dependencies of the given file.
         *
         * @param file An absolute path to the file whose dependencies we want to get.
         * @param dependencies A set that will have the absolute paths of resolved entry points added to
         * it.
         * @param missing A set that will have the dependencies that could not be found added to it.
         * @param deepImports A set that will have the import paths that exist but cannot be mapped to
         * entry-points, i.e. deep-imports.
         * @param alreadySeen A set that is used to track internal dependencies to prevent getting stuck
         * in a circular dependency loop.
         */
        UmdDependencyHost.prototype.recursivelyCollectDependencies = function (file, dependencies, missing, deepImports, alreadySeen) {
            var _this = this;
            var fromContents = this.fs.readFile(file);
            if (!this.hasRequireCalls(fromContents)) {
                // Avoid parsing the source file as there are no imports.
                return;
            }
            // Parse the source into a TypeScript AST and then walk it looking for imports and re-exports.
            var sf = ts.createSourceFile(file, fromContents, ts.ScriptTarget.ES2015, false, ts.ScriptKind.JS);
            if (sf.statements.length !== 1) {
                return;
            }
            var umdModule = umd_host_1.parseStatementForUmdModule(sf.statements[0]);
            var umdImports = umdModule && umd_host_1.getImportsOfUmdModule(umdModule);
            if (umdImports === null) {
                return;
            }
            umdImports.forEach(function (umdImport) {
                var resolvedModule = _this.moduleResolver.resolveModuleImport(umdImport.path, file);
                if (resolvedModule) {
                    if (resolvedModule instanceof module_resolver_1.ResolvedRelativeModule) {
                        var internalDependency = resolvedModule.modulePath;
                        if (!alreadySeen.has(internalDependency)) {
                            alreadySeen.add(internalDependency);
                            _this.recursivelyCollectDependencies(internalDependency, dependencies, missing, deepImports, alreadySeen);
                        }
                    }
                    else {
                        if (resolvedModule instanceof module_resolver_1.ResolvedDeepImport) {
                            deepImports.add(resolvedModule.importPath);
                        }
                        else {
                            dependencies.add(resolvedModule.entryPointPath);
                        }
                    }
                }
                else {
                    missing.add(umdImport.path);
                }
            });
        };
        /**
         * Check whether a source file needs to be parsed for imports.
         * This is a performance short-circuit, which saves us from creating
         * a TypeScript AST unnecessarily.
         *
         * @param source The content of the source file to check.
         *
         * @returns false if there are definitely no require calls
         * in this file, true otherwise.
         */
        UmdDependencyHost.prototype.hasRequireCalls = function (source) {
            return /require\(['"]/.test(source);
        };
        return UmdDependencyHost;
    }(dependency_host_1.DependencyHostBase));
    exports.UmdDependencyHost = UmdDependencyHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1kX2RlcGVuZGVuY3lfaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9kZXBlbmRlbmNpZXMvdW1kX2RlcGVuZGVuY3lfaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFFakMseUVBQW1GO0lBQ25GLCtGQUFxRDtJQUNyRCwrRkFBNkU7SUFFN0U7O09BRUc7SUFDSDtRQUF1Qyw2Q0FBa0I7UUFBekQ7O1FBeUVBLENBQUM7UUF4RUM7Ozs7Ozs7Ozs7O1dBV0c7UUFDTywwREFBOEIsR0FBeEMsVUFDSSxJQUFvQixFQUFFLFlBQWlDLEVBQUUsT0FBb0IsRUFDN0UsV0FBd0IsRUFBRSxXQUFnQztZQUY5RCxpQkE2Q0M7WUExQ0MsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3ZDLHlEQUF5RDtnQkFDekQsT0FBTzthQUNSO1lBRUQsOEZBQThGO1lBQzlGLElBQU0sRUFBRSxHQUNKLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTdGLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixPQUFPO2FBQ1I7WUFFRCxJQUFNLFNBQVMsR0FBRyxxQ0FBMEIsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBTSxVQUFVLEdBQUcsU0FBUyxJQUFJLGdDQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDdkIsT0FBTzthQUNSO1lBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7Z0JBQzFCLElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckYsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLElBQUksY0FBYyxZQUFZLHdDQUFzQixFQUFFO3dCQUNwRCxJQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7d0JBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7NEJBQ3hDLFdBQVcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDcEMsS0FBSSxDQUFDLDhCQUE4QixDQUMvQixrQkFBa0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzt5QkFDMUU7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxjQUFjLFlBQVksb0NBQWtCLEVBQUU7NEJBQ2hELFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUM1Qzs2QkFBTTs0QkFDTCxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQzt5QkFDakQ7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0ssMkNBQWUsR0FBdkIsVUFBd0IsTUFBYztZQUNwQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FBQyxBQXpFRCxDQUF1QyxvQ0FBa0IsR0F5RXhEO0lBekVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aH0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Z2V0SW1wb3J0c09mVW1kTW9kdWxlLCBwYXJzZVN0YXRlbWVudEZvclVtZE1vZHVsZX0gZnJvbSAnLi4vaG9zdC91bWRfaG9zdCc7XG5pbXBvcnQge0RlcGVuZGVuY3lIb3N0QmFzZX0gZnJvbSAnLi9kZXBlbmRlbmN5X2hvc3QnO1xuaW1wb3J0IHtSZXNvbHZlZERlZXBJbXBvcnQsIFJlc29sdmVkUmVsYXRpdmVNb2R1bGV9IGZyb20gJy4vbW9kdWxlX3Jlc29sdmVyJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBjb21wdXRpbmcgZGVwZW5kZW5jaWVzLlxuICovXG5leHBvcnQgY2xhc3MgVW1kRGVwZW5kZW5jeUhvc3QgZXh0ZW5kcyBEZXBlbmRlbmN5SG9zdEJhc2Uge1xuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgZGVwZW5kZW5jaWVzIG9mIHRoZSBnaXZlbiBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZSBBbiBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBmaWxlIHdob3NlIGRlcGVuZGVuY2llcyB3ZSB3YW50IHRvIGdldC5cbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyBBIHNldCB0aGF0IHdpbGwgaGF2ZSB0aGUgYWJzb2x1dGUgcGF0aHMgb2YgcmVzb2x2ZWQgZW50cnkgcG9pbnRzIGFkZGVkIHRvXG4gICAqIGl0LlxuICAgKiBAcGFyYW0gbWlzc2luZyBBIHNldCB0aGF0IHdpbGwgaGF2ZSB0aGUgZGVwZW5kZW5jaWVzIHRoYXQgY291bGQgbm90IGJlIGZvdW5kIGFkZGVkIHRvIGl0LlxuICAgKiBAcGFyYW0gZGVlcEltcG9ydHMgQSBzZXQgdGhhdCB3aWxsIGhhdmUgdGhlIGltcG9ydCBwYXRocyB0aGF0IGV4aXN0IGJ1dCBjYW5ub3QgYmUgbWFwcGVkIHRvXG4gICAqIGVudHJ5LXBvaW50cywgaS5lLiBkZWVwLWltcG9ydHMuXG4gICAqIEBwYXJhbSBhbHJlYWR5U2VlbiBBIHNldCB0aGF0IGlzIHVzZWQgdG8gdHJhY2sgaW50ZXJuYWwgZGVwZW5kZW5jaWVzIHRvIHByZXZlbnQgZ2V0dGluZyBzdHVja1xuICAgKiBpbiBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgbG9vcC5cbiAgICovXG4gIHByb3RlY3RlZCByZWN1cnNpdmVseUNvbGxlY3REZXBlbmRlbmNpZXMoXG4gICAgICBmaWxlOiBBYnNvbHV0ZUZzUGF0aCwgZGVwZW5kZW5jaWVzOiBTZXQ8QWJzb2x1dGVGc1BhdGg+LCBtaXNzaW5nOiBTZXQ8c3RyaW5nPixcbiAgICAgIGRlZXBJbXBvcnRzOiBTZXQ8c3RyaW5nPiwgYWxyZWFkeVNlZW46IFNldDxBYnNvbHV0ZUZzUGF0aD4pOiB2b2lkIHtcbiAgICBjb25zdCBmcm9tQ29udGVudHMgPSB0aGlzLmZzLnJlYWRGaWxlKGZpbGUpO1xuXG4gICAgaWYgKCF0aGlzLmhhc1JlcXVpcmVDYWxscyhmcm9tQ29udGVudHMpKSB7XG4gICAgICAvLyBBdm9pZCBwYXJzaW5nIHRoZSBzb3VyY2UgZmlsZSBhcyB0aGVyZSBhcmUgbm8gaW1wb3J0cy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSB0aGUgc291cmNlIGludG8gYSBUeXBlU2NyaXB0IEFTVCBhbmQgdGhlbiB3YWxrIGl0IGxvb2tpbmcgZm9yIGltcG9ydHMgYW5kIHJlLWV4cG9ydHMuXG4gICAgY29uc3Qgc2YgPVxuICAgICAgICB0cy5jcmVhdGVTb3VyY2VGaWxlKGZpbGUsIGZyb21Db250ZW50cywgdHMuU2NyaXB0VGFyZ2V0LkVTMjAxNSwgZmFsc2UsIHRzLlNjcmlwdEtpbmQuSlMpO1xuXG4gICAgaWYgKHNmLnN0YXRlbWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdW1kTW9kdWxlID0gcGFyc2VTdGF0ZW1lbnRGb3JVbWRNb2R1bGUoc2Yuc3RhdGVtZW50c1swXSk7XG4gICAgY29uc3QgdW1kSW1wb3J0cyA9IHVtZE1vZHVsZSAmJiBnZXRJbXBvcnRzT2ZVbWRNb2R1bGUodW1kTW9kdWxlKTtcbiAgICBpZiAodW1kSW1wb3J0cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVtZEltcG9ydHMuZm9yRWFjaCh1bWRJbXBvcnQgPT4ge1xuICAgICAgY29uc3QgcmVzb2x2ZWRNb2R1bGUgPSB0aGlzLm1vZHVsZVJlc29sdmVyLnJlc29sdmVNb2R1bGVJbXBvcnQodW1kSW1wb3J0LnBhdGgsIGZpbGUpO1xuICAgICAgaWYgKHJlc29sdmVkTW9kdWxlKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZSBpbnN0YW5jZW9mIFJlc29sdmVkUmVsYXRpdmVNb2R1bGUpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcm5hbERlcGVuZGVuY3kgPSByZXNvbHZlZE1vZHVsZS5tb2R1bGVQYXRoO1xuICAgICAgICAgIGlmICghYWxyZWFkeVNlZW4uaGFzKGludGVybmFsRGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIGFscmVhZHlTZWVuLmFkZChpbnRlcm5hbERlcGVuZGVuY3kpO1xuICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVseUNvbGxlY3REZXBlbmRlbmNpZXMoXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxEZXBlbmRlbmN5LCBkZXBlbmRlbmNpZXMsIG1pc3NpbmcsIGRlZXBJbXBvcnRzLCBhbHJlYWR5U2Vlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZSBpbnN0YW5jZW9mIFJlc29sdmVkRGVlcEltcG9ydCkge1xuICAgICAgICAgICAgZGVlcEltcG9ydHMuYWRkKHJlc29sdmVkTW9kdWxlLmltcG9ydFBhdGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMuYWRkKHJlc29sdmVkTW9kdWxlLmVudHJ5UG9pbnRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pc3NpbmcuYWRkKHVtZEltcG9ydC5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGEgc291cmNlIGZpbGUgbmVlZHMgdG8gYmUgcGFyc2VkIGZvciBpbXBvcnRzLlxuICAgKiBUaGlzIGlzIGEgcGVyZm9ybWFuY2Ugc2hvcnQtY2lyY3VpdCwgd2hpY2ggc2F2ZXMgdXMgZnJvbSBjcmVhdGluZ1xuICAgKiBhIFR5cGVTY3JpcHQgQVNUIHVubmVjZXNzYXJpbHkuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIGNvbnRlbnQgb2YgdGhlIHNvdXJjZSBmaWxlIHRvIGNoZWNrLlxuICAgKlxuICAgKiBAcmV0dXJucyBmYWxzZSBpZiB0aGVyZSBhcmUgZGVmaW5pdGVseSBubyByZXF1aXJlIGNhbGxzXG4gICAqIGluIHRoaXMgZmlsZSwgdHJ1ZSBvdGhlcndpc2UuXG4gICAqL1xuICBwcml2YXRlIGhhc1JlcXVpcmVDYWxscyhzb3VyY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvcmVxdWlyZVxcKFsnXCJdLy50ZXN0KHNvdXJjZSk7XG4gIH1cbn1cbiJdfQ==