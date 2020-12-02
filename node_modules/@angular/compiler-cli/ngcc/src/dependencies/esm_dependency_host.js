(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/dependencies/esm_dependency_host", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/ngcc/src/dependencies/dependency_host", "@angular/compiler-cli/ngcc/src/dependencies/module_resolver"], factory);
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
    var dependency_host_1 = require("@angular/compiler-cli/ngcc/src/dependencies/dependency_host");
    var module_resolver_1 = require("@angular/compiler-cli/ngcc/src/dependencies/module_resolver");
    /**
     * Helper functions for computing dependencies.
     */
    var EsmDependencyHost = /** @class */ (function (_super) {
        tslib_1.__extends(EsmDependencyHost, _super);
        function EsmDependencyHost() {
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
        EsmDependencyHost.prototype.recursivelyCollectDependencies = function (file, dependencies, missing, deepImports, alreadySeen) {
            var _this = this;
            var fromContents = this.fs.readFile(file);
            if (!hasImportOrReexportStatements(fromContents)) {
                // Avoid parsing the source file as there are no imports.
                return;
            }
            // Parse the source into a TypeScript AST and then walk it looking for imports and re-exports.
            var sf = ts.createSourceFile(file, fromContents, ts.ScriptTarget.ES2015, false, ts.ScriptKind.JS);
            sf.statements
                // filter out statements that are not imports or reexports
                .filter(isStringImportOrReexport)
                // Grab the id of the module that is being imported
                .map(function (stmt) { return stmt.moduleSpecifier.text; })
                .forEach(function (importPath) {
                var resolved = _this.processImport(importPath, file, dependencies, missing, deepImports, alreadySeen);
                if (!resolved) {
                    missing.add(importPath);
                }
            });
        };
        /**
         * Resolve the given `importPath` from `file` and add it to the appropriate set.
         *
         * @returns `true` if the import was resolved (to an entry-point, a local import, or a
         * deep-import).
         */
        EsmDependencyHost.prototype.processImport = function (importPath, file, dependencies, missing, deepImports, alreadySeen) {
            var resolvedModule = this.moduleResolver.resolveModuleImport(importPath, file);
            if (resolvedModule === null) {
                return false;
            }
            if (resolvedModule instanceof module_resolver_1.ResolvedRelativeModule) {
                var internalDependency = resolvedModule.modulePath;
                if (!alreadySeen.has(internalDependency)) {
                    alreadySeen.add(internalDependency);
                    this.recursivelyCollectDependencies(internalDependency, dependencies, missing, deepImports, alreadySeen);
                }
            }
            else if (resolvedModule instanceof module_resolver_1.ResolvedDeepImport) {
                deepImports.add(resolvedModule.importPath);
            }
            else {
                dependencies.add(resolvedModule.entryPointPath);
            }
            return true;
        };
        return EsmDependencyHost;
    }(dependency_host_1.DependencyHostBase));
    exports.EsmDependencyHost = EsmDependencyHost;
    /**
     * Check whether a source file needs to be parsed for imports.
     * This is a performance short-circuit, which saves us from creating
     * a TypeScript AST unnecessarily.
     *
     * @param source The content of the source file to check.
     *
     * @returns false if there are definitely no import or re-export statements
     * in this file, true otherwise.
     */
    function hasImportOrReexportStatements(source) {
        return /(import|export)\s.+from/.test(source);
    }
    exports.hasImportOrReexportStatements = hasImportOrReexportStatements;
    /**
     * Check whether the given statement is an import with a string literal module specifier.
     * @param stmt the statement node to check.
     * @returns true if the statement is an import with a string literal module specifier.
     */
    function isStringImportOrReexport(stmt) {
        return ts.isImportDeclaration(stmt) ||
            ts.isExportDeclaration(stmt) && !!stmt.moduleSpecifier &&
                ts.isStringLiteral(stmt.moduleSpecifier);
    }
    exports.isStringImportOrReexport = isStringImportOrReexport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNtX2RlcGVuZGVuY3lfaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9kZXBlbmRlbmNpZXMvZXNtX2RlcGVuZGVuY3lfaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFFakMsK0ZBQXFEO0lBQ3JELCtGQUE2RTtJQUU3RTs7T0FFRztJQUNIO1FBQXVDLDZDQUFrQjtRQUF6RDs7UUFtRUEsQ0FBQztRQWxFQzs7Ozs7Ozs7Ozs7V0FXRztRQUNPLDBEQUE4QixHQUF4QyxVQUNJLElBQW9CLEVBQUUsWUFBaUMsRUFBRSxPQUFvQixFQUM3RSxXQUF3QixFQUFFLFdBQWdDO1lBRjlELGlCQXlCQztZQXRCQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2hELHlEQUF5RDtnQkFDekQsT0FBTzthQUNSO1lBRUQsOEZBQThGO1lBQzlGLElBQU0sRUFBRSxHQUNKLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdGLEVBQUUsQ0FBQyxVQUFVO2dCQUNULDBEQUEwRDtpQkFDekQsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2dCQUNqQyxtREFBbUQ7aUJBQ2xELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUF6QixDQUF5QixDQUFDO2lCQUN0QyxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUNqQixJQUFNLFFBQVEsR0FDVixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDekI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNULENBQUM7UUFFRDs7Ozs7V0FLRztRQUNPLHlDQUFhLEdBQXZCLFVBQ0ksVUFBa0IsRUFBRSxJQUFvQixFQUFFLFlBQWlDLEVBQzNFLE9BQW9CLEVBQUUsV0FBd0IsRUFBRSxXQUFnQztZQUNsRixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRixJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7Z0JBQzNCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLGNBQWMsWUFBWSx3Q0FBc0IsRUFBRTtnQkFDcEQsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUN4QyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyw4QkFBOEIsQ0FDL0Isa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQzFFO2FBQ0Y7aUJBQU0sSUFBSSxjQUFjLFlBQVksb0NBQWtCLEVBQUU7Z0JBQ3ZELFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUFDLEFBbkVELENBQXVDLG9DQUFrQixHQW1FeEQ7SUFuRVksOENBQWlCO0lBcUU5Qjs7Ozs7Ozs7O09BU0c7SUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxNQUFjO1FBQzFELE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFGRCxzRUFFQztJQUdEOzs7O09BSUc7SUFDSCxTQUFnQix3QkFBd0IsQ0FBQyxJQUFrQjtRQUV6RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZTtnQkFDdEQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUxELDREQUtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtEZXBlbmRlbmN5SG9zdEJhc2V9IGZyb20gJy4vZGVwZW5kZW5jeV9ob3N0JztcbmltcG9ydCB7UmVzb2x2ZWREZWVwSW1wb3J0LCBSZXNvbHZlZFJlbGF0aXZlTW9kdWxlfSBmcm9tICcuL21vZHVsZV9yZXNvbHZlcic7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY29tcHV0aW5nIGRlcGVuZGVuY2llcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzbURlcGVuZGVuY3lIb3N0IGV4dGVuZHMgRGVwZW5kZW5jeUhvc3RCYXNlIHtcbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgZ2l2ZW4gZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIGZpbGUgQW4gYWJzb2x1dGUgcGF0aCB0byB0aGUgZmlsZSB3aG9zZSBkZXBlbmRlbmNpZXMgd2Ugd2FudCB0byBnZXQuXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgQSBzZXQgdGhhdCB3aWxsIGhhdmUgdGhlIGFic29sdXRlIHBhdGhzIG9mIHJlc29sdmVkIGVudHJ5IHBvaW50cyBhZGRlZCB0b1xuICAgKiBpdC5cbiAgICogQHBhcmFtIG1pc3NpbmcgQSBzZXQgdGhhdCB3aWxsIGhhdmUgdGhlIGRlcGVuZGVuY2llcyB0aGF0IGNvdWxkIG5vdCBiZSBmb3VuZCBhZGRlZCB0byBpdC5cbiAgICogQHBhcmFtIGRlZXBJbXBvcnRzIEEgc2V0IHRoYXQgd2lsbCBoYXZlIHRoZSBpbXBvcnQgcGF0aHMgdGhhdCBleGlzdCBidXQgY2Fubm90IGJlIG1hcHBlZCB0b1xuICAgKiBlbnRyeS1wb2ludHMsIGkuZS4gZGVlcC1pbXBvcnRzLlxuICAgKiBAcGFyYW0gYWxyZWFkeVNlZW4gQSBzZXQgdGhhdCBpcyB1c2VkIHRvIHRyYWNrIGludGVybmFsIGRlcGVuZGVuY2llcyB0byBwcmV2ZW50IGdldHRpbmcgc3R1Y2tcbiAgICogaW4gYSBjaXJjdWxhciBkZXBlbmRlbmN5IGxvb3AuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVjdXJzaXZlbHlDb2xsZWN0RGVwZW5kZW5jaWVzKFxuICAgICAgZmlsZTogQWJzb2x1dGVGc1BhdGgsIGRlcGVuZGVuY2llczogU2V0PEFic29sdXRlRnNQYXRoPiwgbWlzc2luZzogU2V0PHN0cmluZz4sXG4gICAgICBkZWVwSW1wb3J0czogU2V0PHN0cmluZz4sIGFscmVhZHlTZWVuOiBTZXQ8QWJzb2x1dGVGc1BhdGg+KTogdm9pZCB7XG4gICAgY29uc3QgZnJvbUNvbnRlbnRzID0gdGhpcy5mcy5yZWFkRmlsZShmaWxlKTtcblxuICAgIGlmICghaGFzSW1wb3J0T3JSZWV4cG9ydFN0YXRlbWVudHMoZnJvbUNvbnRlbnRzKSkge1xuICAgICAgLy8gQXZvaWQgcGFyc2luZyB0aGUgc291cmNlIGZpbGUgYXMgdGhlcmUgYXJlIG5vIGltcG9ydHMuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgdGhlIHNvdXJjZSBpbnRvIGEgVHlwZVNjcmlwdCBBU1QgYW5kIHRoZW4gd2FsayBpdCBsb29raW5nIGZvciBpbXBvcnRzIGFuZCByZS1leHBvcnRzLlxuICAgIGNvbnN0IHNmID1cbiAgICAgICAgdHMuY3JlYXRlU291cmNlRmlsZShmaWxlLCBmcm9tQ29udGVudHMsIHRzLlNjcmlwdFRhcmdldC5FUzIwMTUsIGZhbHNlLCB0cy5TY3JpcHRLaW5kLkpTKTtcbiAgICBzZi5zdGF0ZW1lbnRzXG4gICAgICAgIC8vIGZpbHRlciBvdXQgc3RhdGVtZW50cyB0aGF0IGFyZSBub3QgaW1wb3J0cyBvciByZWV4cG9ydHNcbiAgICAgICAgLmZpbHRlcihpc1N0cmluZ0ltcG9ydE9yUmVleHBvcnQpXG4gICAgICAgIC8vIEdyYWIgdGhlIGlkIG9mIHRoZSBtb2R1bGUgdGhhdCBpcyBiZWluZyBpbXBvcnRlZFxuICAgICAgICAubWFwKHN0bXQgPT4gc3RtdC5tb2R1bGVTcGVjaWZpZXIudGV4dClcbiAgICAgICAgLmZvckVhY2goaW1wb3J0UGF0aCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPVxuICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NJbXBvcnQoaW1wb3J0UGF0aCwgZmlsZSwgZGVwZW5kZW5jaWVzLCBtaXNzaW5nLCBkZWVwSW1wb3J0cywgYWxyZWFkeVNlZW4pO1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIG1pc3NpbmcuYWRkKGltcG9ydFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgZ2l2ZW4gYGltcG9ydFBhdGhgIGZyb20gYGZpbGVgIGFuZCBhZGQgaXQgdG8gdGhlIGFwcHJvcHJpYXRlIHNldC5cbiAgICpcbiAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBpbXBvcnQgd2FzIHJlc29sdmVkICh0byBhbiBlbnRyeS1wb2ludCwgYSBsb2NhbCBpbXBvcnQsIG9yIGFcbiAgICogZGVlcC1pbXBvcnQpLlxuICAgKi9cbiAgcHJvdGVjdGVkIHByb2Nlc3NJbXBvcnQoXG4gICAgICBpbXBvcnRQYXRoOiBzdHJpbmcsIGZpbGU6IEFic29sdXRlRnNQYXRoLCBkZXBlbmRlbmNpZXM6IFNldDxBYnNvbHV0ZUZzUGF0aD4sXG4gICAgICBtaXNzaW5nOiBTZXQ8c3RyaW5nPiwgZGVlcEltcG9ydHM6IFNldDxzdHJpbmc+LCBhbHJlYWR5U2VlbjogU2V0PEFic29sdXRlRnNQYXRoPik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlc29sdmVkTW9kdWxlID0gdGhpcy5tb2R1bGVSZXNvbHZlci5yZXNvbHZlTW9kdWxlSW1wb3J0KGltcG9ydFBhdGgsIGZpbGUpO1xuICAgIGlmIChyZXNvbHZlZE1vZHVsZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocmVzb2x2ZWRNb2R1bGUgaW5zdGFuY2VvZiBSZXNvbHZlZFJlbGF0aXZlTW9kdWxlKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbERlcGVuZGVuY3kgPSByZXNvbHZlZE1vZHVsZS5tb2R1bGVQYXRoO1xuICAgICAgaWYgKCFhbHJlYWR5U2Vlbi5oYXMoaW50ZXJuYWxEZXBlbmRlbmN5KSkge1xuICAgICAgICBhbHJlYWR5U2Vlbi5hZGQoaW50ZXJuYWxEZXBlbmRlbmN5KTtcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVseUNvbGxlY3REZXBlbmRlbmNpZXMoXG4gICAgICAgICAgICBpbnRlcm5hbERlcGVuZGVuY3ksIGRlcGVuZGVuY2llcywgbWlzc2luZywgZGVlcEltcG9ydHMsIGFscmVhZHlTZWVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc29sdmVkTW9kdWxlIGluc3RhbmNlb2YgUmVzb2x2ZWREZWVwSW1wb3J0KSB7XG4gICAgICBkZWVwSW1wb3J0cy5hZGQocmVzb2x2ZWRNb2R1bGUuaW1wb3J0UGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlcGVuZGVuY2llcy5hZGQocmVzb2x2ZWRNb2R1bGUuZW50cnlQb2ludFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBzb3VyY2UgZmlsZSBuZWVkcyB0byBiZSBwYXJzZWQgZm9yIGltcG9ydHMuXG4gKiBUaGlzIGlzIGEgcGVyZm9ybWFuY2Ugc2hvcnQtY2lyY3VpdCwgd2hpY2ggc2F2ZXMgdXMgZnJvbSBjcmVhdGluZ1xuICogYSBUeXBlU2NyaXB0IEFTVCB1bm5lY2Vzc2FyaWx5LlxuICpcbiAqIEBwYXJhbSBzb3VyY2UgVGhlIGNvbnRlbnQgb2YgdGhlIHNvdXJjZSBmaWxlIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIGZhbHNlIGlmIHRoZXJlIGFyZSBkZWZpbml0ZWx5IG5vIGltcG9ydCBvciByZS1leHBvcnQgc3RhdGVtZW50c1xuICogaW4gdGhpcyBmaWxlLCB0cnVlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0ltcG9ydE9yUmVleHBvcnRTdGF0ZW1lbnRzKHNvdXJjZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAvKGltcG9ydHxleHBvcnQpXFxzLitmcm9tLy50ZXN0KHNvdXJjZSk7XG59XG5cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiBzdGF0ZW1lbnQgaXMgYW4gaW1wb3J0IHdpdGggYSBzdHJpbmcgbGl0ZXJhbCBtb2R1bGUgc3BlY2lmaWVyLlxuICogQHBhcmFtIHN0bXQgdGhlIHN0YXRlbWVudCBub2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc3RhdGVtZW50IGlzIGFuIGltcG9ydCB3aXRoIGEgc3RyaW5nIGxpdGVyYWwgbW9kdWxlIHNwZWNpZmllci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nSW1wb3J0T3JSZWV4cG9ydChzdG10OiB0cy5TdGF0ZW1lbnQpOiBzdG10IGlzIHRzLkltcG9ydERlY2xhcmF0aW9uJlxuICAgIHttb2R1bGVTcGVjaWZpZXI6IHRzLlN0cmluZ0xpdGVyYWx9IHtcbiAgcmV0dXJuIHRzLmlzSW1wb3J0RGVjbGFyYXRpb24oc3RtdCkgfHxcbiAgICAgIHRzLmlzRXhwb3J0RGVjbGFyYXRpb24oc3RtdCkgJiYgISFzdG10Lm1vZHVsZVNwZWNpZmllciAmJlxuICAgICAgdHMuaXNTdHJpbmdMaXRlcmFsKHN0bXQubW9kdWxlU3BlY2lmaWVyKTtcbn1cbiJdfQ==