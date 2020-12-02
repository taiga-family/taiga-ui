(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/dependencies/commonjs_dependency_host", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils", "@angular/compiler-cli/ngcc/src/dependencies/dependency_host", "@angular/compiler-cli/ngcc/src/dependencies/module_resolver"], factory);
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
    var commonjs_umd_utils_1 = require("@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils");
    var dependency_host_1 = require("@angular/compiler-cli/ngcc/src/dependencies/dependency_host");
    var module_resolver_1 = require("@angular/compiler-cli/ngcc/src/dependencies/module_resolver");
    /**
     * Helper functions for computing dependencies.
     */
    var CommonJsDependencyHost = /** @class */ (function (_super) {
        tslib_1.__extends(CommonJsDependencyHost, _super);
        function CommonJsDependencyHost() {
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
        CommonJsDependencyHost.prototype.recursivelyCollectDependencies = function (file, dependencies, missing, deepImports, alreadySeen) {
            var e_1, _a, e_2, _b, e_3, _c;
            var fromContents = this.fs.readFile(file);
            if (!this.hasRequireCalls(fromContents)) {
                // Avoid parsing the source file as there are no imports.
                return;
            }
            // Parse the source into a TypeScript AST and then walk it looking for imports and re-exports.
            var sf = ts.createSourceFile(file, fromContents, ts.ScriptTarget.ES2015, false, ts.ScriptKind.JS);
            var requireCalls = [];
            try {
                for (var _d = tslib_1.__values(sf.statements), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var stmt = _e.value;
                    if (ts.isVariableStatement(stmt)) {
                        // Regular import(s):
                        // `var foo = require('...')` or `var foo = require('...'), bar = require('...')`
                        var declarations = stmt.declarationList.declarations;
                        try {
                            for (var declarations_1 = (e_2 = void 0, tslib_1.__values(declarations)), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
                                var declaration = declarations_1_1.value;
                                if ((declaration.initializer !== undefined) && commonjs_umd_utils_1.isRequireCall(declaration.initializer)) {
                                    requireCalls.push(declaration.initializer);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (declarations_1_1 && !declarations_1_1.done && (_b = declarations_1.return)) _b.call(declarations_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                    else if (ts.isExpressionStatement(stmt)) {
                        if (commonjs_umd_utils_1.isRequireCall(stmt.expression)) {
                            // Import for the side-effects only:
                            // `require('...')`
                            requireCalls.push(stmt.expression);
                        }
                        else if (commonjs_umd_utils_1.isReexportStatement(stmt)) {
                            // Re-export in one of the following formats:
                            // - `__export(require('...'))`
                            // - `__export(<identifier>)`
                            // - `tslib_1.__exportStar(require('...'), exports)`
                            // - `tslib_1.__exportStar(<identifier>, exports)`
                            var firstExportArg = stmt.expression.arguments[0];
                            if (commonjs_umd_utils_1.isRequireCall(firstExportArg)) {
                                // Re-export with `require()` call:
                                // `__export(require('...'))` or `tslib_1.__exportStar(require('...'), exports)`
                                requireCalls.push(firstExportArg);
                            }
                        }
                        else if (ts.isBinaryExpression(stmt.expression) &&
                            (stmt.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
                            if (commonjs_umd_utils_1.isRequireCall(stmt.expression.right)) {
                                // Import with assignment. E.g.:
                                // `exports.foo = require('...')`
                                requireCalls.push(stmt.expression.right);
                            }
                            else if (ts.isObjectLiteralExpression(stmt.expression.right)) {
                                // Import in object literal. E.g.:
                                // `module.exports = {foo: require('...')}`
                                stmt.expression.right.properties.forEach(function (prop) {
                                    if (ts.isPropertyAssignment(prop) && commonjs_umd_utils_1.isRequireCall(prop.initializer)) {
                                        requireCalls.push(prop.initializer);
                                    }
                                });
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var importPaths = new Set(requireCalls.map(function (call) { return call.arguments[0].text; }));
            try {
                for (var importPaths_1 = tslib_1.__values(importPaths), importPaths_1_1 = importPaths_1.next(); !importPaths_1_1.done; importPaths_1_1 = importPaths_1.next()) {
                    var importPath = importPaths_1_1.value;
                    var resolvedModule = this.moduleResolver.resolveModuleImport(importPath, file);
                    if (resolvedModule === null) {
                        missing.add(importPath);
                    }
                    else if (resolvedModule instanceof module_resolver_1.ResolvedRelativeModule) {
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
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (importPaths_1_1 && !importPaths_1_1.done && (_c = importPaths_1.return)) _c.call(importPaths_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
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
        CommonJsDependencyHost.prototype.hasRequireCalls = function (source) {
            return /require\(['"]/.test(source);
        };
        return CommonJsDependencyHost;
    }(dependency_host_1.DependencyHostBase));
    exports.CommonJsDependencyHost = CommonJsDependencyHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uanNfZGVwZW5kZW5jeV9ob3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2RlcGVuZGVuY2llcy9jb21tb25qc19kZXBlbmRlbmN5X2hvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBR2pDLDZGQUEyRjtJQUUzRiwrRkFBcUQ7SUFDckQsK0ZBQTZFO0lBRTdFOztPQUVHO0lBQ0g7UUFBNEMsa0RBQWtCO1FBQTlEOztRQTZHQSxDQUFDO1FBNUdDOzs7Ozs7Ozs7OztXQVdHO1FBQ08sK0RBQThCLEdBQXhDLFVBQ0ksSUFBb0IsRUFBRSxZQUFpQyxFQUFFLE9BQW9CLEVBQzdFLFdBQWdDLEVBQUUsV0FBZ0M7O1lBQ3BFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN2Qyx5REFBeUQ7Z0JBQ3pELE9BQU87YUFDUjtZQUVELDhGQUE4RjtZQUM5RixJQUFNLEVBQUUsR0FDSixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RixJQUFNLFlBQVksR0FBa0IsRUFBRSxDQUFDOztnQkFFdkMsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLEVBQUUsQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTdCLElBQU0sSUFBSSxXQUFBO29CQUNiLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNoQyxxQkFBcUI7d0JB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LFVBQVUsQ0FBQyxDQUFDO3FCQUN6Qjt5QkFBTSxJQUFJLGNBQWMsWUFBWSx3Q0FBc0IsRUFBRTt3QkFDM0QsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO3dCQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFOzRCQUN4QyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7NEJBQ3BDLElBQUksQ0FBQyw4QkFBOEIsQ0FDL0Isa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQzFFO3FCQUNGO3lCQUFNLElBQUksY0FBYyxZQUFZLG9DQUFrQixFQUFFO3dCQUN2RCxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDNUM7eUJBQU07d0JBQ0wsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQ2pEO2lCQUNGOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0ssZ0RBQWUsR0FBdkIsVUFBd0IsTUFBYztZQUNwQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILDZCQUFDO0lBQUQsQ0FBQyxBQTdHRCxDQUE0QyxvQ0FBa0IsR0E2RzdEO0lBN0dZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtpc1JlZXhwb3J0U3RhdGVtZW50LCBpc1JlcXVpcmVDYWxsLCBSZXF1aXJlQ2FsbH0gZnJvbSAnLi4vaG9zdC9jb21tb25qc191bWRfdXRpbHMnO1xuXG5pbXBvcnQge0RlcGVuZGVuY3lIb3N0QmFzZX0gZnJvbSAnLi9kZXBlbmRlbmN5X2hvc3QnO1xuaW1wb3J0IHtSZXNvbHZlZERlZXBJbXBvcnQsIFJlc29sdmVkUmVsYXRpdmVNb2R1bGV9IGZyb20gJy4vbW9kdWxlX3Jlc29sdmVyJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBjb21wdXRpbmcgZGVwZW5kZW5jaWVzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tbW9uSnNEZXBlbmRlbmN5SG9zdCBleHRlbmRzIERlcGVuZGVuY3lIb3N0QmFzZSB7XG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBkZXBlbmRlbmNpZXMgb2YgdGhlIGdpdmVuIGZpbGUuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlIEFuIGFic29sdXRlIHBhdGggdG8gdGhlIGZpbGUgd2hvc2UgZGVwZW5kZW5jaWVzIHdlIHdhbnQgdG8gZ2V0LlxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIEEgc2V0IHRoYXQgd2lsbCBoYXZlIHRoZSBhYnNvbHV0ZSBwYXRocyBvZiByZXNvbHZlZCBlbnRyeSBwb2ludHMgYWRkZWQgdG9cbiAgICogaXQuXG4gICAqIEBwYXJhbSBtaXNzaW5nIEEgc2V0IHRoYXQgd2lsbCBoYXZlIHRoZSBkZXBlbmRlbmNpZXMgdGhhdCBjb3VsZCBub3QgYmUgZm91bmQgYWRkZWQgdG8gaXQuXG4gICAqIEBwYXJhbSBkZWVwSW1wb3J0cyBBIHNldCB0aGF0IHdpbGwgaGF2ZSB0aGUgaW1wb3J0IHBhdGhzIHRoYXQgZXhpc3QgYnV0IGNhbm5vdCBiZSBtYXBwZWQgdG9cbiAgICogZW50cnktcG9pbnRzLCBpLmUuIGRlZXAtaW1wb3J0cy5cbiAgICogQHBhcmFtIGFscmVhZHlTZWVuIEEgc2V0IHRoYXQgaXMgdXNlZCB0byB0cmFjayBpbnRlcm5hbCBkZXBlbmRlbmNpZXMgdG8gcHJldmVudCBnZXR0aW5nIHN0dWNrXG4gICAqIGluIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBsb29wLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlY3Vyc2l2ZWx5Q29sbGVjdERlcGVuZGVuY2llcyhcbiAgICAgIGZpbGU6IEFic29sdXRlRnNQYXRoLCBkZXBlbmRlbmNpZXM6IFNldDxBYnNvbHV0ZUZzUGF0aD4sIG1pc3Npbmc6IFNldDxzdHJpbmc+LFxuICAgICAgZGVlcEltcG9ydHM6IFNldDxBYnNvbHV0ZUZzUGF0aD4sIGFscmVhZHlTZWVuOiBTZXQ8QWJzb2x1dGVGc1BhdGg+KTogdm9pZCB7XG4gICAgY29uc3QgZnJvbUNvbnRlbnRzID0gdGhpcy5mcy5yZWFkRmlsZShmaWxlKTtcblxuICAgIGlmICghdGhpcy5oYXNSZXF1aXJlQ2FsbHMoZnJvbUNvbnRlbnRzKSkge1xuICAgICAgLy8gQXZvaWQgcGFyc2luZyB0aGUgc291cmNlIGZpbGUgYXMgdGhlcmUgYXJlIG5vIGltcG9ydHMuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgdGhlIHNvdXJjZSBpbnRvIGEgVHlwZVNjcmlwdCBBU1QgYW5kIHRoZW4gd2FsayBpdCBsb29raW5nIGZvciBpbXBvcnRzIGFuZCByZS1leHBvcnRzLlxuICAgIGNvbnN0IHNmID1cbiAgICAgICAgdHMuY3JlYXRlU291cmNlRmlsZShmaWxlLCBmcm9tQ29udGVudHMsIHRzLlNjcmlwdFRhcmdldC5FUzIwMTUsIGZhbHNlLCB0cy5TY3JpcHRLaW5kLkpTKTtcbiAgICBjb25zdCByZXF1aXJlQ2FsbHM6IFJlcXVpcmVDYWxsW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgc3RtdCBvZiBzZi5zdGF0ZW1lbnRzKSB7XG4gICAgICBpZiAodHMuaXNWYXJpYWJsZVN0YXRlbWVudChzdG10KSkge1xuICAgICAgICAvLyBSZWd1bGFyIGltcG9ydChzKTpcbiAgICAgICAgLy8gYHZhciBmb28gPSByZXF1aXJlKCcuLi4nKWAgb3IgYHZhciBmb28gPSByZXF1aXJlKCcuLi4nKSwgYmFyID0gcmVxdWlyZSgnLi4uJylgXG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHN0bXQuZGVjbGFyYXRpb25MaXN0LmRlY2xhcmF0aW9ucztcbiAgICAgICAgZm9yIChjb25zdCBkZWNsYXJhdGlvbiBvZiBkZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICBpZiAoKGRlY2xhcmF0aW9uLmluaXRpYWxpemVyICE9PSB1bmRlZmluZWQpICYmIGlzUmVxdWlyZUNhbGwoZGVjbGFyYXRpb24uaW5pdGlhbGl6ZXIpKSB7XG4gICAgICAgICAgICByZXF1aXJlQ2FsbHMucHVzaChkZWNsYXJhdGlvbi5pbml0aWFsaXplcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRzLmlzRXhwcmVzc2lvblN0YXRlbWVudChzdG10KSkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlQ2FsbChzdG10LmV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgLy8gSW1wb3J0IGZvciB0aGUgc2lkZS1lZmZlY3RzIG9ubHk6XG4gICAgICAgICAgLy8gYHJlcXVpcmUoJy4uLicpYFxuICAgICAgICAgIHJlcXVpcmVDYWxscy5wdXNoKHN0bXQuZXhwcmVzc2lvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWV4cG9ydFN0YXRlbWVudChzdG10KSkge1xuICAgICAgICAgIC8vIFJlLWV4cG9ydCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOlxuICAgICAgICAgIC8vIC0gYF9fZXhwb3J0KHJlcXVpcmUoJy4uLicpKWBcbiAgICAgICAgICAvLyAtIGBfX2V4cG9ydCg8aWRlbnRpZmllcj4pYFxuICAgICAgICAgIC8vIC0gYHRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoJy4uLicpLCBleHBvcnRzKWBcbiAgICAgICAgICAvLyAtIGB0c2xpYl8xLl9fZXhwb3J0U3Rhcig8aWRlbnRpZmllcj4sIGV4cG9ydHMpYFxuICAgICAgICAgIGNvbnN0IGZpcnN0RXhwb3J0QXJnID0gc3RtdC5leHByZXNzaW9uLmFyZ3VtZW50c1swXTtcblxuICAgICAgICAgIGlmIChpc1JlcXVpcmVDYWxsKGZpcnN0RXhwb3J0QXJnKSkge1xuICAgICAgICAgICAgLy8gUmUtZXhwb3J0IHdpdGggYHJlcXVpcmUoKWAgY2FsbDpcbiAgICAgICAgICAgIC8vIGBfX2V4cG9ydChyZXF1aXJlKCcuLi4nKSlgIG9yIGB0c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKCcuLi4nKSwgZXhwb3J0cylgXG4gICAgICAgICAgICByZXF1aXJlQ2FsbHMucHVzaChmaXJzdEV4cG9ydEFyZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdHMuaXNCaW5hcnlFeHByZXNzaW9uKHN0bXQuZXhwcmVzc2lvbikgJiZcbiAgICAgICAgICAgIChzdG10LmV4cHJlc3Npb24ub3BlcmF0b3JUb2tlbi5raW5kID09PSB0cy5TeW50YXhLaW5kLkVxdWFsc1Rva2VuKSkge1xuICAgICAgICAgIGlmIChpc1JlcXVpcmVDYWxsKHN0bXQuZXhwcmVzc2lvbi5yaWdodCkpIHtcbiAgICAgICAgICAgIC8vIEltcG9ydCB3aXRoIGFzc2lnbm1lbnQuIEUuZy46XG4gICAgICAgICAgICAvLyBgZXhwb3J0cy5mb28gPSByZXF1aXJlKCcuLi4nKWBcbiAgICAgICAgICAgIHJlcXVpcmVDYWxscy5wdXNoKHN0bXQuZXhwcmVzc2lvbi5yaWdodCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0cy5pc09iamVjdExpdGVyYWxFeHByZXNzaW9uKHN0bXQuZXhwcmVzc2lvbi5yaWdodCkpIHtcbiAgICAgICAgICAgIC8vIEltcG9ydCBpbiBvYmplY3QgbGl0ZXJhbC4gRS5nLjpcbiAgICAgICAgICAgIC8vIGBtb2R1bGUuZXhwb3J0cyA9IHtmb286IHJlcXVpcmUoJy4uLicpfWBcbiAgICAgICAgICAgIHN0bXQuZXhwcmVzc2lvbi5yaWdodC5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgIGlmICh0cy5pc1Byb3BlcnR5QXNzaWdubWVudChwcm9wKSAmJiBpc1JlcXVpcmVDYWxsKHByb3AuaW5pdGlhbGl6ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZUNhbGxzLnB1c2gocHJvcC5pbml0aWFsaXplcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltcG9ydFBhdGhzID0gbmV3IFNldChyZXF1aXJlQ2FsbHMubWFwKGNhbGwgPT4gY2FsbC5hcmd1bWVudHNbMF0udGV4dCkpO1xuICAgIGZvciAoY29uc3QgaW1wb3J0UGF0aCBvZiBpbXBvcnRQYXRocykge1xuICAgICAgY29uc3QgcmVzb2x2ZWRNb2R1bGUgPSB0aGlzLm1vZHVsZVJlc29sdmVyLnJlc29sdmVNb2R1bGVJbXBvcnQoaW1wb3J0UGF0aCwgZmlsZSk7XG4gICAgICBpZiAocmVzb2x2ZWRNb2R1bGUgPT09IG51bGwpIHtcbiAgICAgICAgbWlzc2luZy5hZGQoaW1wb3J0UGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc29sdmVkTW9kdWxlIGluc3RhbmNlb2YgUmVzb2x2ZWRSZWxhdGl2ZU1vZHVsZSkge1xuICAgICAgICBjb25zdCBpbnRlcm5hbERlcGVuZGVuY3kgPSByZXNvbHZlZE1vZHVsZS5tb2R1bGVQYXRoO1xuICAgICAgICBpZiAoIWFscmVhZHlTZWVuLmhhcyhpbnRlcm5hbERlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgYWxyZWFkeVNlZW4uYWRkKGludGVybmFsRGVwZW5kZW5jeSk7XG4gICAgICAgICAgdGhpcy5yZWN1cnNpdmVseUNvbGxlY3REZXBlbmRlbmNpZXMoXG4gICAgICAgICAgICAgIGludGVybmFsRGVwZW5kZW5jeSwgZGVwZW5kZW5jaWVzLCBtaXNzaW5nLCBkZWVwSW1wb3J0cywgYWxyZWFkeVNlZW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlc29sdmVkTW9kdWxlIGluc3RhbmNlb2YgUmVzb2x2ZWREZWVwSW1wb3J0KSB7XG4gICAgICAgIGRlZXBJbXBvcnRzLmFkZChyZXNvbHZlZE1vZHVsZS5pbXBvcnRQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcGVuZGVuY2llcy5hZGQocmVzb2x2ZWRNb2R1bGUuZW50cnlQb2ludFBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGEgc291cmNlIGZpbGUgbmVlZHMgdG8gYmUgcGFyc2VkIGZvciBpbXBvcnRzLlxuICAgKiBUaGlzIGlzIGEgcGVyZm9ybWFuY2Ugc2hvcnQtY2lyY3VpdCwgd2hpY2ggc2F2ZXMgdXMgZnJvbSBjcmVhdGluZ1xuICAgKiBhIFR5cGVTY3JpcHQgQVNUIHVubmVjZXNzYXJpbHkuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIGNvbnRlbnQgb2YgdGhlIHNvdXJjZSBmaWxlIHRvIGNoZWNrLlxuICAgKlxuICAgKiBAcmV0dXJucyBmYWxzZSBpZiB0aGVyZSBhcmUgZGVmaW5pdGVseSBubyByZXF1aXJlIGNhbGxzXG4gICAqIGluIHRoaXMgZmlsZSwgdHJ1ZSBvdGhlcndpc2UuXG4gICAqL1xuICBwcml2YXRlIGhhc1JlcXVpcmVDYWxscyhzb3VyY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvcmVxdWlyZVxcKFsnXCJdLy50ZXN0KHNvdXJjZSk7XG4gIH1cbn1cbiJdfQ==