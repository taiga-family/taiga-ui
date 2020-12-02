(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/dependencies/module_resolver", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/utils"], factory);
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
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    /**
     * This is a very cut-down implementation of the TypeScript module resolution strategy.
     *
     * It is specific to the needs of ngcc and is not intended to be a drop-in replacement
     * for the TS module resolver. It is used to compute the dependencies between entry-points
     * that may be compiled by ngcc.
     *
     * The algorithm only finds `.js` files for internal/relative imports and paths to
     * the folder containing the `package.json` of the entry-point for external imports.
     *
     * It can cope with nested `node_modules` folders and also supports `paths`/`baseUrl`
     * configuration properties, as provided in a `ts.CompilerOptions` object.
     */
    var ModuleResolver = /** @class */ (function () {
        function ModuleResolver(fs, pathMappings, relativeExtensions) {
            if (relativeExtensions === void 0) { relativeExtensions = [
                '', '.js', '/index.js'
            ]; }
            this.fs = fs;
            this.relativeExtensions = relativeExtensions;
            this.pathMappings = pathMappings ? this.processPathMappings(pathMappings) : [];
        }
        /**
         * Resolve an absolute path for the `moduleName` imported into a file at `fromPath`.
         * @param moduleName The name of the import to resolve.
         * @param fromPath The path to the file containing the import.
         * @returns A path to the resolved module or null if missing.
         * Specifically:
         *  * the absolute path to the package.json of an external module
         *  * a JavaScript file of an internal module
         *  * null if none exists.
         */
        ModuleResolver.prototype.resolveModuleImport = function (moduleName, fromPath) {
            if (utils_1.isRelativePath(moduleName)) {
                return this.resolveAsRelativePath(moduleName, fromPath);
            }
            else {
                return this.pathMappings.length && this.resolveByPathMappings(moduleName, fromPath) ||
                    this.resolveAsEntryPoint(moduleName, fromPath);
            }
        };
        /**
         * Convert the `pathMappings` into a collection of `PathMapper` functions.
         */
        ModuleResolver.prototype.processPathMappings = function (pathMappings) {
            var baseUrl = file_system_1.absoluteFrom(pathMappings.baseUrl);
            return Object.keys(pathMappings.paths).map(function (pathPattern) {
                var matcher = splitOnStar(pathPattern);
                var templates = pathMappings.paths[pathPattern].map(splitOnStar);
                return { matcher: matcher, templates: templates, baseUrl: baseUrl };
            });
        };
        /**
         * Try to resolve a module name, as a relative path, from the `fromPath`.
         *
         * As it is relative, it only looks for files that end in one of the `relativeExtensions`.
         * For example: `${moduleName}.js` or `${moduleName}/index.js`.
         * If neither of these files exist then the method returns `null`.
         */
        ModuleResolver.prototype.resolveAsRelativePath = function (moduleName, fromPath) {
            var resolvedPath = utils_1.resolveFileWithPostfixes(this.fs, file_system_1.resolve(file_system_1.dirname(fromPath), moduleName), this.relativeExtensions);
            return resolvedPath && new ResolvedRelativeModule(resolvedPath);
        };
        /**
         * Try to resolve the `moduleName`, by applying the computed `pathMappings` and
         * then trying to resolve the mapped path as a relative or external import.
         *
         * Whether the mapped path is relative is defined as it being "below the `fromPath`" and not
         * containing `node_modules`.
         *
         * If the mapped path is not relative but does not resolve to an external entry-point, then we
         * check whether it would have resolved to a relative path, in which case it is marked as a
         * "deep-import".
         */
        ModuleResolver.prototype.resolveByPathMappings = function (moduleName, fromPath) {
            var e_1, _a;
            var mappedPaths = this.findMappedPaths(moduleName);
            if (mappedPaths.length > 0) {
                var packagePath = this.findPackagePath(fromPath);
                if (packagePath !== null) {
                    try {
                        for (var mappedPaths_1 = tslib_1.__values(mappedPaths), mappedPaths_1_1 = mappedPaths_1.next(); !mappedPaths_1_1.done; mappedPaths_1_1 = mappedPaths_1.next()) {
                            var mappedPath = mappedPaths_1_1.value;
                            if (this.isEntryPoint(mappedPath)) {
                                return new ResolvedExternalModule(mappedPath);
                            }
                            var nonEntryPointImport = this.resolveAsRelativePath(mappedPath, fromPath);
                            if (nonEntryPointImport !== null) {
                                return isRelativeImport(packagePath, mappedPath) ? nonEntryPointImport :
                                    new ResolvedDeepImport(mappedPath);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (mappedPaths_1_1 && !mappedPaths_1_1.done && (_a = mappedPaths_1.return)) _a.call(mappedPaths_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            return null;
        };
        /**
         * Try to resolve the `moduleName` as an external entry-point by searching the `node_modules`
         * folders up the tree for a matching `.../node_modules/${moduleName}`.
         *
         * If a folder is found but the path does not contain a `package.json` then it is marked as a
         * "deep-import".
         */
        ModuleResolver.prototype.resolveAsEntryPoint = function (moduleName, fromPath) {
            var folder = fromPath;
            while (!file_system_1.isRoot(folder)) {
                folder = file_system_1.dirname(folder);
                if (folder.endsWith('node_modules')) {
                    // Skip up if the folder already ends in node_modules
                    folder = file_system_1.dirname(folder);
                }
                var modulePath = file_system_1.resolve(folder, 'node_modules', moduleName);
                if (this.isEntryPoint(modulePath)) {
                    return new ResolvedExternalModule(modulePath);
                }
                else if (this.resolveAsRelativePath(modulePath, fromPath)) {
                    return new ResolvedDeepImport(modulePath);
                }
            }
            return null;
        };
        /**
         * Can we consider the given path as an entry-point to a package?
         *
         * This is achieved by checking for the existence of `${modulePath}/package.json`.
         */
        ModuleResolver.prototype.isEntryPoint = function (modulePath) {
            return this.fs.exists(file_system_1.join(modulePath, 'package.json'));
        };
        /**
         * Apply the `pathMappers` to the `moduleName` and return all the possible
         * paths that match.
         *
         * The mapped path is computed for each template in `mapping.templates` by
         * replacing the `matcher.prefix` and `matcher.postfix` strings in `path with the
         * `template.prefix` and `template.postfix` strings.
         */
        ModuleResolver.prototype.findMappedPaths = function (moduleName) {
            var _this = this;
            var matches = this.pathMappings.map(function (mapping) { return _this.matchMapping(moduleName, mapping); });
            var bestMapping;
            var bestMatch;
            for (var index = 0; index < this.pathMappings.length; index++) {
                var mapping = this.pathMappings[index];
                var match = matches[index];
                if (match !== null) {
                    // If this mapping had no wildcard then this must be a complete match.
                    if (!mapping.matcher.hasWildcard) {
                        bestMatch = match;
                        bestMapping = mapping;
                        break;
                    }
                    // The best matched mapping is the one with the longest prefix.
                    if (!bestMapping || mapping.matcher.prefix > bestMapping.matcher.prefix) {
                        bestMatch = match;
                        bestMapping = mapping;
                    }
                }
            }
            return (bestMapping !== undefined && bestMatch !== undefined) ?
                this.computeMappedTemplates(bestMapping, bestMatch) :
                [];
        };
        /**
         * Attempt to find a mapped path for the given `path` and a `mapping`.
         *
         * The `path` matches the `mapping` if if it starts with `matcher.prefix` and ends with
         * `matcher.postfix`.
         *
         * @returns the wildcard segment of a matched `path`, or `null` if no match.
         */
        ModuleResolver.prototype.matchMapping = function (path, mapping) {
            var _a = mapping.matcher, prefix = _a.prefix, postfix = _a.postfix, hasWildcard = _a.hasWildcard;
            if (hasWildcard) {
                return (path.startsWith(prefix) && path.endsWith(postfix)) ?
                    path.substring(prefix.length, path.length - postfix.length) :
                    null;
            }
            else {
                return (path === prefix) ? '' : null;
            }
        };
        /**
         * Compute the candidate paths from the given mapping's templates using the matched
         * string.
         */
        ModuleResolver.prototype.computeMappedTemplates = function (mapping, match) {
            return mapping.templates.map(function (template) { return file_system_1.resolve(mapping.baseUrl, template.prefix + match + template.postfix); });
        };
        /**
         * Search up the folder tree for the first folder that contains `package.json`
         * or `null` if none is found.
         */
        ModuleResolver.prototype.findPackagePath = function (path) {
            var folder = path;
            while (!file_system_1.isRoot(folder)) {
                folder = file_system_1.dirname(folder);
                if (this.fs.exists(file_system_1.join(folder, 'package.json'))) {
                    return folder;
                }
            }
            return null;
        };
        return ModuleResolver;
    }());
    exports.ModuleResolver = ModuleResolver;
    /**
     * A module that is external to the package doing the importing.
     * In this case we capture the folder containing the entry-point.
     */
    var ResolvedExternalModule = /** @class */ (function () {
        function ResolvedExternalModule(entryPointPath) {
            this.entryPointPath = entryPointPath;
        }
        return ResolvedExternalModule;
    }());
    exports.ResolvedExternalModule = ResolvedExternalModule;
    /**
     * A module that is relative to the module doing the importing, and so internal to the
     * source module's package.
     */
    var ResolvedRelativeModule = /** @class */ (function () {
        function ResolvedRelativeModule(modulePath) {
            this.modulePath = modulePath;
        }
        return ResolvedRelativeModule;
    }());
    exports.ResolvedRelativeModule = ResolvedRelativeModule;
    /**
     * A module that is external to the package doing the importing but pointing to a
     * module that is deep inside a package, rather than to an entry-point of the package.
     */
    var ResolvedDeepImport = /** @class */ (function () {
        function ResolvedDeepImport(importPath) {
            this.importPath = importPath;
        }
        return ResolvedDeepImport;
    }());
    exports.ResolvedDeepImport = ResolvedDeepImport;
    function splitOnStar(str) {
        var _a = tslib_1.__read(str.split('*', 2), 2), prefix = _a[0], postfix = _a[1];
        return { prefix: prefix, postfix: postfix || '', hasWildcard: postfix !== undefined };
    }
    function isRelativeImport(from, to) {
        return to.startsWith(from) && !to.includes('node_modules');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlX3Jlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2RlcGVuZGVuY2llcy9tb2R1bGVfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsMkVBQXdIO0lBRXhILDhEQUFrRTtJQUVsRTs7Ozs7Ozs7Ozs7O09BWUc7SUFDSDtRQUdFLHdCQUFvQixFQUFjLEVBQUUsWUFBMkIsRUFBVyxrQkFFekU7WUFGeUUsbUNBQUEsRUFBQTtnQkFDeEUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXO2FBQ3ZCO1lBRm1CLE9BQUUsR0FBRixFQUFFLENBQVk7WUFBd0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUUzRjtZQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRixDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ0gsNENBQW1CLEdBQW5CLFVBQW9CLFVBQWtCLEVBQUUsUUFBd0I7WUFDOUQsSUFBSSxzQkFBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztvQkFDL0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUM7UUFFRDs7V0FFRztRQUNLLDRDQUFtQixHQUEzQixVQUE0QixZQUEwQjtZQUNwRCxJQUFNLE9B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LENBQUM7SUFjRCxTQUFTLGdCQUFnQixDQUFDLElBQW9CLEVBQUUsRUFBa0I7UUFDaEUsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHthYnNvbHV0ZUZyb20sIEFic29sdXRlRnNQYXRoLCBkaXJuYW1lLCBGaWxlU3lzdGVtLCBpc1Jvb3QsIGpvaW4sIHJlc29sdmV9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge1BhdGhNYXBwaW5nc30gZnJvbSAnLi4vcGF0aF9tYXBwaW5ncyc7XG5pbXBvcnQge2lzUmVsYXRpdmVQYXRoLCByZXNvbHZlRmlsZVdpdGhQb3N0Zml4ZXN9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBjdXQtZG93biBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgVHlwZVNjcmlwdCBtb2R1bGUgcmVzb2x1dGlvbiBzdHJhdGVneS5cbiAqXG4gKiBJdCBpcyBzcGVjaWZpYyB0byB0aGUgbmVlZHMgb2YgbmdjYyBhbmQgaXMgbm90IGludGVuZGVkIHRvIGJlIGEgZHJvcC1pbiByZXBsYWNlbWVudFxuICogZm9yIHRoZSBUUyBtb2R1bGUgcmVzb2x2ZXIuIEl0IGlzIHVzZWQgdG8gY29tcHV0ZSB0aGUgZGVwZW5kZW5jaWVzIGJldHdlZW4gZW50cnktcG9pbnRzXG4gKiB0aGF0IG1heSBiZSBjb21waWxlZCBieSBuZ2NjLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gb25seSBmaW5kcyBgLmpzYCBmaWxlcyBmb3IgaW50ZXJuYWwvcmVsYXRpdmUgaW1wb3J0cyBhbmQgcGF0aHMgdG9cbiAqIHRoZSBmb2xkZXIgY29udGFpbmluZyB0aGUgYHBhY2thZ2UuanNvbmAgb2YgdGhlIGVudHJ5LXBvaW50IGZvciBleHRlcm5hbCBpbXBvcnRzLlxuICpcbiAqIEl0IGNhbiBjb3BlIHdpdGggbmVzdGVkIGBub2RlX21vZHVsZXNgIGZvbGRlcnMgYW5kIGFsc28gc3VwcG9ydHMgYHBhdGhzYC9gYmFzZVVybGBcbiAqIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcywgYXMgcHJvdmlkZWQgaW4gYSBgdHMuQ29tcGlsZXJPcHRpb25zYCBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2R1bGVSZXNvbHZlciB7XG4gIHByaXZhdGUgcGF0aE1hcHBpbmdzOiBQcm9jZXNzZWRQYXRoTWFwcGluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnM6IEZpbGVTeXN0ZW0sIHBhdGhNYXBwaW5ncz86IFBhdGhNYXBwaW5ncywgcmVhZG9ubHkgcmVsYXRpdmVFeHRlbnNpb25zID0gW1xuICAgICcnLCAnLmpzJywgJy9pbmRleC5qcydcbiAgXSkge1xuICAgIHRoaXMucGF0aE1hcHBpbmdzID0gcGF0aE1hcHBpbmdzID8gdGhpcy5wcm9jZXNzUGF0aE1hcHBpbmdzKHBhdGhNYXBwaW5ncykgOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGFuIGFic29sdXRlIHBhdGggZm9yIHRoZSBgbW9kdWxlTmFtZWAgaW1wb3J0ZWQgaW50byBhIGZpbGUgYXQgYGZyb21QYXRoYC5cbiAgICogQHBhcmFtIG1vZHVsZU5hbWUgVGhlIG5hbWUgb2YgdGhlIGltcG9ydCB0byByZXNvbHZlLlxuICAgKiBAcGFyYW0gZnJvbVBhdGggVGhlIHBhdGggdG8gdGhlIGZpbGUgY29udGFpbmluZyB0aGUgaW1wb3J0LlxuICAgKiBAcmV0dXJucyBBIHBhdGggdG8gdGhlIHJlc29sdmVkIG1vZHVsZSBvciBudWxsIGlmIG1pc3NpbmcuXG4gICAqIFNwZWNpZmljYWxseTpcbiAgICogICogdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHBhY2thZ2UuanNvbiBvZiBhbiBleHRlcm5hbCBtb2R1bGVcbiAgICogICogYSBKYXZhU2NyaXB0IGZpbGUgb2YgYW4gaW50ZXJuYWwgbW9kdWxlXG4gICAqICAqIG51bGwgaWYgbm9uZSBleGlzdHMuXG4gICAqL1xuICByZXNvbHZlTW9kdWxlSW1wb3J0KG1vZHVsZU5hbWU6IHN0cmluZywgZnJvbVBhdGg6IEFic29sdXRlRnNQYXRoKTogUmVzb2x2ZWRNb2R1bGV8bnVsbCB7XG4gICAgaWYgKGlzUmVsYXRpdmVQYXRoKG1vZHVsZU5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZlQXNSZWxhdGl2ZVBhdGgobW9kdWxlTmFtZSwgZnJvbVBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoTWFwcGluZ3MubGVuZ3RoICYmIHRoaXMucmVzb2x2ZUJ5UGF0aE1hcHBpbmdzKG1vZHVsZU5hbWUsIGZyb21QYXRoKSB8fFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUFzRW50cnlQb2ludChtb2R1bGVOYW1lLCBmcm9tUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIGBwYXRoTWFwcGluZ3NgIGludG8gYSBjb2xsZWN0aW9uIG9mIGBQYXRoTWFwcGVyYCBmdW5jdGlvbnMuXG4gICAqL1xuICBwcml2YXRlIHByb2Nlc3NQYXRoTWFwcGluZ3MocGF0aE1hcHBpbmdzOiBQYXRoTWFwcGluZ3MpOiBQcm9jZXNzZWRQYXRoTWFwcGluZ1tdIHtcbiAgICBjb25zdCBiYXNlVXJsID0gYWJzb2x1dGVGcm9tKHBhdGhNYXBwaW5ncy5iYXNlVXJsKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocGF0aE1hcHBpbmdzLnBhdGhzKS5tYXAocGF0aFBhdHRlcm4gPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IHNwbGl0T25TdGFyKHBhdGhQYXR0ZXJuKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHBhdGhNYXBwaW5ncy5wYXRoc1twYXRoUGF0dGVybl0ubWFwKHNwbGl0T25TdGFyKTtcbiAgICAgIHJldHVybiB7bWF0Y2hlciwgdGVtcGxhdGVzLCBiYXNlVXJsfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gcmVzb2x2ZSBhIG1vZHVsZSBuYW1lLCBhcyBhIHJlbGF0aXZlIHBhdGgsIGZyb20gdGhlIGBmcm9tUGF0aGAuXG4gICAqXG4gICAqIEFzIGl0IGlzIHJlbGF0aXZlLCBpdCBvbmx5IGxvb2tzIGZvciBmaWxlcyB0aGF0IGVuZCBpbiBvbmUgb2YgdGhlIGByZWxhdGl2ZUV4dGVuc2lvbnNgLlxuICAgKiBGb3IgZXhhbXBsZTogYCR7bW9kdWxlTmFtZX0uanNgIG9yIGAke21vZHVsZU5hbWV9L2luZGV4LmpzYC5cbiAgICogSWYgbmVpdGhlciBvZiB0aGVzZSBmaWxlcyBleGlzdCB0aGVuIHRoZSBtZXRob2QgcmV0dXJucyBgbnVsbGAuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVBc1JlbGF0aXZlUGF0aChtb2R1bGVOYW1lOiBzdHJpbmcsIGZyb21QYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IFJlc29sdmVkTW9kdWxlfG51bGwge1xuICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHJlc29sdmVGaWxlV2l0aFBvc3RmaXhlcyhcbiAgICAgICAgdGhpcy5mcywgcmVzb2x2ZShkaXJuYW1lKGZyb21QYXRoKSwgbW9kdWxlTmFtZSksIHRoaXMucmVsYXRpdmVFeHRlbnNpb25zKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRQYXRoICYmIG5ldyBSZXNvbHZlZFJlbGF0aXZlTW9kdWxlKHJlc29sdmVkUGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIHJlc29sdmUgdGhlIGBtb2R1bGVOYW1lYCwgYnkgYXBwbHlpbmcgdGhlIGNvbXB1dGVkIGBwYXRoTWFwcGluZ3NgIGFuZFxuICAgKiB0aGVuIHRyeWluZyB0byByZXNvbHZlIHRoZSBtYXBwZWQgcGF0aCBhcyBhIHJlbGF0aXZlIG9yIGV4dGVybmFsIGltcG9ydC5cbiAgICpcbiAgICogV2hldGhlciB0aGUgbWFwcGVkIHBhdGggaXMgcmVsYXRpdmUgaXMgZGVmaW5lZCBhcyBpdCBiZWluZyBcImJlbG93IHRoZSBgZnJvbVBhdGhgXCIgYW5kIG5vdFxuICAgKiBjb250YWluaW5nIGBub2RlX21vZHVsZXNgLlxuICAgKlxuICAgKiBJZiB0aGUgbWFwcGVkIHBhdGggaXMgbm90IHJlbGF0aXZlIGJ1dCBkb2VzIG5vdCByZXNvbHZlIHRvIGFuIGV4dGVybmFsIGVudHJ5LXBvaW50LCB0aGVuIHdlXG4gICAqIGNoZWNrIHdoZXRoZXIgaXQgd291bGQgaGF2ZSByZXNvbHZlZCB0byBhIHJlbGF0aXZlIHBhdGgsIGluIHdoaWNoIGNhc2UgaXQgaXMgbWFya2VkIGFzIGFcbiAgICogXCJkZWVwLWltcG9ydFwiLlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlQnlQYXRoTWFwcGluZ3MobW9kdWxlTmFtZTogc3RyaW5nLCBmcm9tUGF0aDogQWJzb2x1dGVGc1BhdGgpOiBSZXNvbHZlZE1vZHVsZXxudWxsIHtcbiAgICBjb25zdCBtYXBwZWRQYXRocyA9IHRoaXMuZmluZE1hcHBlZFBhdGhzKG1vZHVsZU5hbWUpO1xuICAgIGlmIChtYXBwZWRQYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYWNrYWdlUGF0aCA9IHRoaXMuZmluZFBhY2thZ2VQYXRoKGZyb21QYXRoKTtcbiAgICAgIGlmIChwYWNrYWdlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IG1hcHBlZFBhdGggb2YgbWFwcGVkUGF0aHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc0VudHJ5UG9pbnQobWFwcGVkUGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZWRFeHRlcm5hbE1vZHVsZShtYXBwZWRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgbm9uRW50cnlQb2ludEltcG9ydCA9IHRoaXMucmVzb2x2ZUFzUmVsYXRpdmVQYXRoKG1hcHBlZFBhdGgsIGZyb21QYXRoKTtcbiAgICAgICAgICBpZiAobm9uRW50cnlQb2ludEltcG9ydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUmVsYXRpdmVJbXBvcnQocGFja2FnZVBhdGgsIG1hcHBlZFBhdGgpID8gbm9uRW50cnlQb2ludEltcG9ydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVzb2x2ZWREZWVwSW1wb3J0KG1hcHBlZFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gcmVzb2x2ZSB0aGUgYG1vZHVsZU5hbWVgIGFzIGFuIGV4dGVybmFsIGVudHJ5LXBvaW50IGJ5IHNlYXJjaGluZyB0aGUgYG5vZGVfbW9kdWxlc2BcbiAgICogZm9sZGVycyB1cCB0aGUgdHJlZSBmb3IgYSBtYXRjaGluZyBgLi4uL25vZGVfbW9kdWxlcy8ke21vZHVsZU5hbWV9YC5cbiAgICpcbiAgICogSWYgYSBmb2xkZXIgaXMgZm91bmQgYnV0IHRoZSBwYXRoIGRvZXMgbm90IGNvbnRhaW4gYSBgcGFja2FnZS5qc29uYCB0aGVuIGl0IGlzIG1hcmtlZCBhcyBhXG4gICAqIFwiZGVlcC1pbXBvcnRcIi5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUFzRW50cnlQb2ludChtb2R1bGVOYW1lOiBzdHJpbmcsIGZyb21QYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IFJlc29sdmVkTW9kdWxlfG51bGwge1xuICAgIGxldCBmb2xkZXIgPSBmcm9tUGF0aDtcbiAgICB3aGlsZSAoIWlzUm9vdChmb2xkZXIpKSB7XG4gICAgICBmb2xkZXIgPSBkaXJuYW1lKGZvbGRlcik7XG4gICAgICBpZiAoZm9sZGVyLmVuZHNXaXRoKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAvLyBTa2lwIHVwIGlmIHRoZSBmb2xkZXIgYWxyZWFkeSBlbmRzIGluIG5vZGVfbW9kdWxlc1xuICAgICAgICBmb2xkZXIgPSBkaXJuYW1lKGZvbGRlcik7XG4gICAgICB9XG4gICAgICBjb25zdCBtb2R1bGVQYXRoID0gcmVzb2x2ZShmb2xkZXIsICdub2RlX21vZHVsZXMnLCBtb2R1bGVOYW1lKTtcbiAgICAgIGlmICh0aGlzLmlzRW50cnlQb2ludChtb2R1bGVQYXRoKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc29sdmVkRXh0ZXJuYWxNb2R1bGUobW9kdWxlUGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb2x2ZUFzUmVsYXRpdmVQYXRoKG1vZHVsZVBhdGgsIGZyb21QYXRoKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlc29sdmVkRGVlcEltcG9ydChtb2R1bGVQYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDYW4gd2UgY29uc2lkZXIgdGhlIGdpdmVuIHBhdGggYXMgYW4gZW50cnktcG9pbnQgdG8gYSBwYWNrYWdlP1xuICAgKlxuICAgKiBUaGlzIGlzIGFjaGlldmVkIGJ5IGNoZWNraW5nIGZvciB0aGUgZXhpc3RlbmNlIG9mIGAke21vZHVsZVBhdGh9L3BhY2thZ2UuanNvbmAuXG4gICAqL1xuICBwcml2YXRlIGlzRW50cnlQb2ludChtb2R1bGVQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZzLmV4aXN0cyhqb2luKG1vZHVsZVBhdGgsICdwYWNrYWdlLmpzb24nKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGBwYXRoTWFwcGVyc2AgdG8gdGhlIGBtb2R1bGVOYW1lYCBhbmQgcmV0dXJuIGFsbCB0aGUgcG9zc2libGVcbiAgICogcGF0aHMgdGhhdCBtYXRjaC5cbiAgICpcbiAgICogVGhlIG1hcHBlZCBwYXRoIGlzIGNvbXB1dGVkIGZvciBlYWNoIHRlbXBsYXRlIGluIGBtYXBwaW5nLnRlbXBsYXRlc2AgYnlcbiAgICogcmVwbGFjaW5nIHRoZSBgbWF0Y2hlci5wcmVmaXhgIGFuZCBgbWF0Y2hlci5wb3N0Zml4YCBzdHJpbmdzIGluIGBwYXRoIHdpdGggdGhlXG4gICAqIGB0ZW1wbGF0ZS5wcmVmaXhgIGFuZCBgdGVtcGxhdGUucG9zdGZpeGAgc3RyaW5ncy5cbiAgICovXG4gIHByaXZhdGUgZmluZE1hcHBlZFBhdGhzKG1vZHVsZU5hbWU6IHN0cmluZyk6IEFic29sdXRlRnNQYXRoW10ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnBhdGhNYXBwaW5ncy5tYXAobWFwcGluZyA9PiB0aGlzLm1hdGNoTWFwcGluZyhtb2R1bGVOYW1lLCBtYXBwaW5nKSk7XG5cbiAgICBsZXQgYmVzdE1hcHBpbmc6IFByb2Nlc3NlZFBhdGhNYXBwaW5nfHVuZGVmaW5lZDtcbiAgICBsZXQgYmVzdE1hdGNoOiBzdHJpbmd8dW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucGF0aE1hcHBpbmdzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgbWFwcGluZyA9IHRoaXMucGF0aE1hcHBpbmdzW2luZGV4XTtcbiAgICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hlc1tpbmRleF07XG4gICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBtYXBwaW5nIGhhZCBubyB3aWxkY2FyZCB0aGVuIHRoaXMgbXVzdCBiZSBhIGNvbXBsZXRlIG1hdGNoLlxuICAgICAgICBpZiAoIW1hcHBpbmcubWF0Y2hlci5oYXNXaWxkY2FyZCkge1xuICAgICAgICAgIGJlc3RNYXRjaCA9IG1hdGNoO1xuICAgICAgICAgIGJlc3RNYXBwaW5nID0gbWFwcGluZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgYmVzdCBtYXRjaGVkIG1hcHBpbmcgaXMgdGhlIG9uZSB3aXRoIHRoZSBsb25nZXN0IHByZWZpeC5cbiAgICAgICAgaWYgKCFiZXN0TWFwcGluZyB8fCBtYXBwaW5nLm1hdGNoZXIucHJlZml4ID4gYmVzdE1hcHBpbmcubWF0Y2hlci5wcmVmaXgpIHtcbiAgICAgICAgICBiZXN0TWF0Y2ggPSBtYXRjaDtcbiAgICAgICAgICBiZXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKGJlc3RNYXBwaW5nICE9PSB1bmRlZmluZWQgJiYgYmVzdE1hdGNoICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgdGhpcy5jb21wdXRlTWFwcGVkVGVtcGxhdGVzKGJlc3RNYXBwaW5nLCBiZXN0TWF0Y2gpIDpcbiAgICAgICAgW107XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdCB0byBmaW5kIGEgbWFwcGVkIHBhdGggZm9yIHRoZSBnaXZlbiBgcGF0aGAgYW5kIGEgYG1hcHBpbmdgLlxuICAgKlxuICAgKiBUaGUgYHBhdGhgIG1hdGNoZXMgdGhlIGBtYXBwaW5nYCBpZiBpZiBpdCBzdGFydHMgd2l0aCBgbWF0Y2hlci5wcmVmaXhgIGFuZCBlbmRzIHdpdGhcbiAgICogYG1hdGNoZXIucG9zdGZpeGAuXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSB3aWxkY2FyZCBzZWdtZW50IG9mIGEgbWF0Y2hlZCBgcGF0aGAsIG9yIGBudWxsYCBpZiBubyBtYXRjaC5cbiAgICovXG4gIHByaXZhdGUgbWF0Y2hNYXBwaW5nKHBhdGg6IHN0cmluZywgbWFwcGluZzogUHJvY2Vzc2VkUGF0aE1hcHBpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgY29uc3Qge3ByZWZpeCwgcG9zdGZpeCwgaGFzV2lsZGNhcmR9ID0gbWFwcGluZy5tYXRjaGVyO1xuICAgIGlmIChoYXNXaWxkY2FyZCkge1xuICAgICAgcmV0dXJuIChwYXRoLnN0YXJ0c1dpdGgocHJlZml4KSAmJiBwYXRoLmVuZHNXaXRoKHBvc3RmaXgpKSA/XG4gICAgICAgICAgcGF0aC5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCwgcGF0aC5sZW5ndGggLSBwb3N0Zml4Lmxlbmd0aCkgOlxuICAgICAgICAgIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAocGF0aCA9PT0gcHJlZml4KSA/ICcnIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgY2FuZGlkYXRlIHBhdGhzIGZyb20gdGhlIGdpdmVuIG1hcHBpbmcncyB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG1hdGNoZWRcbiAgICogc3RyaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBjb21wdXRlTWFwcGVkVGVtcGxhdGVzKG1hcHBpbmc6IFByb2Nlc3NlZFBhdGhNYXBwaW5nLCBtYXRjaDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG1hcHBpbmcudGVtcGxhdGVzLm1hcChcbiAgICAgICAgdGVtcGxhdGUgPT4gcmVzb2x2ZShtYXBwaW5nLmJhc2VVcmwsIHRlbXBsYXRlLnByZWZpeCArIG1hdGNoICsgdGVtcGxhdGUucG9zdGZpeCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB1cCB0aGUgZm9sZGVyIHRyZWUgZm9yIHRoZSBmaXJzdCBmb2xkZXIgdGhhdCBjb250YWlucyBgcGFja2FnZS5qc29uYFxuICAgKiBvciBgbnVsbGAgaWYgbm9uZSBpcyBmb3VuZC5cbiAgICovXG4gIHByaXZhdGUgZmluZFBhY2thZ2VQYXRoKHBhdGg6IEFic29sdXRlRnNQYXRoKTogQWJzb2x1dGVGc1BhdGh8bnVsbCB7XG4gICAgbGV0IGZvbGRlciA9IHBhdGg7XG4gICAgd2hpbGUgKCFpc1Jvb3QoZm9sZGVyKSkge1xuICAgICAgZm9sZGVyID0gZGlybmFtZShmb2xkZXIpO1xuICAgICAgaWYgKHRoaXMuZnMuZXhpc3RzKGpvaW4oZm9sZGVyLCAncGFja2FnZS5qc29uJykpKSB7XG4gICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKiBUaGUgcmVzdWx0IG9mIHJlc29sdmluZyBhbiBpbXBvcnQgdG8gYSBtb2R1bGUuICovXG5leHBvcnQgdHlwZSBSZXNvbHZlZE1vZHVsZSA9IFJlc29sdmVkRXh0ZXJuYWxNb2R1bGV8UmVzb2x2ZWRSZWxhdGl2ZU1vZHVsZXxSZXNvbHZlZERlZXBJbXBvcnQ7XG5cbi8qKlxuICogQSBtb2R1bGUgdGhhdCBpcyBleHRlcm5hbCB0byB0aGUgcGFja2FnZSBkb2luZyB0aGUgaW1wb3J0aW5nLlxuICogSW4gdGhpcyBjYXNlIHdlIGNhcHR1cmUgdGhlIGZvbGRlciBjb250YWluaW5nIHRoZSBlbnRyeS1wb2ludC5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmVkRXh0ZXJuYWxNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW50cnlQb2ludFBhdGg6IEFic29sdXRlRnNQYXRoKSB7fVxufVxuXG4vKipcbiAqIEEgbW9kdWxlIHRoYXQgaXMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZSBkb2luZyB0aGUgaW1wb3J0aW5nLCBhbmQgc28gaW50ZXJuYWwgdG8gdGhlXG4gKiBzb3VyY2UgbW9kdWxlJ3MgcGFja2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmVkUmVsYXRpdmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kdWxlUGF0aDogQWJzb2x1dGVGc1BhdGgpIHt9XG59XG5cbi8qKlxuICogQSBtb2R1bGUgdGhhdCBpcyBleHRlcm5hbCB0byB0aGUgcGFja2FnZSBkb2luZyB0aGUgaW1wb3J0aW5nIGJ1dCBwb2ludGluZyB0byBhXG4gKiBtb2R1bGUgdGhhdCBpcyBkZWVwIGluc2lkZSBhIHBhY2thZ2UsIHJhdGhlciB0aGFuIHRvIGFuIGVudHJ5LXBvaW50IG9mIHRoZSBwYWNrYWdlLlxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x2ZWREZWVwSW1wb3J0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGltcG9ydFBhdGg6IEFic29sdXRlRnNQYXRoKSB7fVxufVxuXG5mdW5jdGlvbiBzcGxpdE9uU3RhcihzdHI6IHN0cmluZyk6IFBhdGhNYXBwaW5nUGF0dGVybiB7XG4gIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXhdID0gc3RyLnNwbGl0KCcqJywgMik7XG4gIHJldHVybiB7cHJlZml4LCBwb3N0Zml4OiBwb3N0Zml4IHx8ICcnLCBoYXNXaWxkY2FyZDogcG9zdGZpeCAhPT0gdW5kZWZpbmVkfTtcbn1cblxuaW50ZXJmYWNlIFByb2Nlc3NlZFBhdGhNYXBwaW5nIHtcbiAgYmFzZVVybDogQWJzb2x1dGVGc1BhdGg7XG4gIG1hdGNoZXI6IFBhdGhNYXBwaW5nUGF0dGVybjtcbiAgdGVtcGxhdGVzOiBQYXRoTWFwcGluZ1BhdHRlcm5bXTtcbn1cblxuaW50ZXJmYWNlIFBhdGhNYXBwaW5nUGF0dGVybiB7XG4gIHByZWZpeDogc3RyaW5nO1xuICBwb3N0Zml4OiBzdHJpbmc7XG4gIGhhc1dpbGRjYXJkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBpc1JlbGF0aXZlSW1wb3J0KGZyb206IEFic29sdXRlRnNQYXRoLCB0bzogQWJzb2x1dGVGc1BhdGgpIHtcbiAgcmV0dXJuIHRvLnN0YXJ0c1dpdGgoZnJvbSkgJiYgIXRvLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKTtcbn1cbiJdfQ==