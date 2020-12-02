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
        define("@angular/compiler-cli/src/ngtsc/resource/src/loader", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    var CSS_PREPROCESSOR_EXT = /(\.scss|\.sass|\.less|\.styl)$/;
    /**
     * `ResourceLoader` which delegates to a `CompilerHost` resource loading method.
     */
    var HostResourceLoader = /** @class */ (function () {
        function HostResourceLoader(host, options) {
            this.host = host;
            this.options = options;
            this.cache = new Map();
            this.fetching = new Map();
            this.canPreload = !!this.host.readResource;
            this.rootDirs = typescript_1.getRootDirs(host, options);
        }
        /**
         * Resolve the url of a resource relative to the file that contains the reference to it.
         * The return value of this method can be used in the `load()` and `preload()` methods.
         *
         * Uses the provided CompilerHost if it supports mapping resources to filenames.
         * Otherwise, uses a fallback mechanism that searches the module resolution candidates.
         *
         * @param url The, possibly relative, url of the resource.
         * @param fromFile The path to the file that contains the URL of the resource.
         * @returns A resolved url of resource.
         * @throws An error if the resource cannot be resolved.
         */
        HostResourceLoader.prototype.resolve = function (url, fromFile) {
            var resolvedUrl = null;
            if (this.host.resourceNameToFileName) {
                resolvedUrl = this.host.resourceNameToFileName(url, fromFile);
            }
            else {
                resolvedUrl = this.fallbackResolve(url, fromFile);
            }
            if (resolvedUrl === null) {
                throw new Error("HostResourceResolver: could not resolve " + url + " in context of " + fromFile + ")");
            }
            return resolvedUrl;
        };
        /**
         * Preload the specified resource, asynchronously.
         *
         * Once the resource is loaded, its value is cached so it can be accessed synchronously via the
         * `load()` method.
         *
         * @param resolvedUrl The url (resolved by a call to `resolve()`) of the resource to preload.
         * @returns A Promise that is resolved once the resource has been loaded or `undefined` if the
         * file has already been loaded.
         * @throws An Error if pre-loading is not available.
         */
        HostResourceLoader.prototype.preload = function (resolvedUrl) {
            var _this = this;
            if (!this.host.readResource) {
                throw new Error('HostResourceLoader: the CompilerHost provided does not support pre-loading resources.');
            }
            if (this.cache.has(resolvedUrl)) {
                return undefined;
            }
            else if (this.fetching.has(resolvedUrl)) {
                return this.fetching.get(resolvedUrl);
            }
            var result = this.host.readResource(resolvedUrl);
            if (typeof result === 'string') {
                this.cache.set(resolvedUrl, result);
                return undefined;
            }
            else {
                var fetchCompletion = result.then(function (str) {
                    _this.fetching.delete(resolvedUrl);
                    _this.cache.set(resolvedUrl, str);
                });
                this.fetching.set(resolvedUrl, fetchCompletion);
                return fetchCompletion;
            }
        };
        /**
         * Load the resource at the given url, synchronously.
         *
         * The contents of the resource may have been cached by a previous call to `preload()`.
         *
         * @param resolvedUrl The url (resolved by a call to `resolve()`) of the resource to load.
         * @returns The contents of the resource.
         */
        HostResourceLoader.prototype.load = function (resolvedUrl) {
            if (this.cache.has(resolvedUrl)) {
                return this.cache.get(resolvedUrl);
            }
            var result = this.host.readResource ? this.host.readResource(resolvedUrl) :
                this.host.readFile(resolvedUrl);
            if (typeof result !== 'string') {
                throw new Error("HostResourceLoader: loader(" + resolvedUrl + ") returned a Promise");
            }
            this.cache.set(resolvedUrl, result);
            return result;
        };
        /**
         * Attempt to resolve `url` in the context of `fromFile`, while respecting the rootDirs
         * option from the tsconfig. First, normalize the file name.
         */
        HostResourceLoader.prototype.fallbackResolve = function (url, fromFile) {
            var e_1, _a;
            var candidateLocations;
            if (url.startsWith('/')) {
                // This path is not really an absolute path, but instead the leading '/' means that it's
                // rooted in the project rootDirs. So look for it according to the rootDirs.
                candidateLocations = this.getRootedCandidateLocations(url);
            }
            else {
                // This path is a "relative" path and can be resolved as such. To make this easier on the
                // downstream resolver, the './' prefix is added if missing to distinguish these paths from
                // absolute node_modules paths.
                if (!url.startsWith('.')) {
                    url = "./" + url;
                }
                candidateLocations = this.getResolvedCandidateLocations(url, fromFile);
            }
            try {
                for (var candidateLocations_1 = tslib_1.__values(candidateLocations), candidateLocations_1_1 = candidateLocations_1.next(); !candidateLocations_1_1.done; candidateLocations_1_1 = candidateLocations_1.next()) {
                    var candidate = candidateLocations_1_1.value;
                    if (this.host.fileExists(candidate)) {
                        return candidate;
                    }
                    else if (CSS_PREPROCESSOR_EXT.test(candidate)) {
                        /**
                         * If the user specified styleUrl points to *.scss, but the Sass compiler was run before
                         * Angular, then the resource may have been generated as *.css. Simply try the resolution
                         * again.
                         */
                        var cssFallbackUrl = candidate.replace(CSS_PREPROCESSOR_EXT, '.css');
                        if (this.host.fileExists(cssFallbackUrl)) {
                            return cssFallbackUrl;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (candidateLocations_1_1 && !candidateLocations_1_1.done && (_a = candidateLocations_1.return)) _a.call(candidateLocations_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        HostResourceLoader.prototype.getRootedCandidateLocations = function (url) {
            // The path already starts with '/', so add a '.' to make it relative.
            var segment = ('.' + url);
            return this.rootDirs.map(function (rootDir) { return file_system_1.join(rootDir, segment); });
        };
        /**
         * TypeScript provides utilities to resolve module names, but not resource files (which aren't
         * a part of the ts.Program). However, TypeScript's module resolution can be used creatively
         * to locate where resource files should be expected to exist. Since module resolution returns
         * a list of file names that were considered, the loader can enumerate the possible locations
         * for the file by setting up a module resolution for it that will fail.
         */
        HostResourceLoader.prototype.getResolvedCandidateLocations = function (url, fromFile) {
            // clang-format off
            var failedLookup = ts.resolveModuleName(url + '.$ngresource$', fromFile, this.options, this.host);
            // clang-format on
            if (failedLookup.failedLookupLocations === undefined) {
                throw new Error("Internal error: expected to find failedLookupLocations during resolution of resource '" + url + "' in context of " + fromFile);
            }
            return failedLookup.failedLookupLocations
                .filter(function (candidate) { return candidate.endsWith('.$ngresource$.ts'); })
                .map(function (candidate) { return candidate.replace(/\.\$ngresource\$\.ts$/, ''); });
        };
        return HostResourceLoader;
    }());
    exports.HostResourceLoader = HostResourceLoader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9yZXNvdXJjZS9zcmMvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUlqQywyRUFBb0U7SUFDcEUsa0ZBQXNEO0lBRXRELElBQU0sb0JBQW9CLEdBQUcsZ0NBQWdDLENBQUM7SUFFOUQ7O09BRUc7SUFDSDtRQVFFLDRCQUFvQixJQUE0QixFQUFVLE9BQTJCO1lBQWpFLFNBQUksR0FBSixJQUFJLENBQXdCO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7WUFQN0UsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1lBQ2xDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztZQUlwRCxlQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBR3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsd0JBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVEOzs7Ozs7Ozs7OztXQVdHO1FBQ0gsb0NBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxRQUFnQjtZQUNuQyxJQUFJLFdBQVcsR0FBZ0IsSUFBSSxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtnQkFDcEMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDeEIsTUFBTSxJQUFJ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QUMvSSxrQkFBa0I7WUFDbEIsSUFBSSxZQUFZLENBQUMscUJBQXFCLEtBQUssU0FBUyxFQUFFO2dCQUNwRCxNQUFNLElBQUksS0FBSyxDQUNYLDJGQUNJLEdBQUcsd0JBQW1CLFFBQVUsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsT0FBTyxZQUFZLENBQUMscUJBQXFCO2lCQUNwQyxNQUFNLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQXRDLENBQXNDLENBQUM7aUJBQzNELEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLEFBdEtELElBc0tDO0lBdEtZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7UmVzb3VyY2VMb2FkZXJ9IGZyb20gJy4uLy4uL2Fubm90YXRpb25zJztcbmltcG9ydCB7RXh0ZW5kZWRUc0NvbXBpbGVySG9zdH0gZnJvbSAnLi4vLi4vY29yZS9hcGknO1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgam9pbiwgUGF0aFNlZ21lbnR9IGZyb20gJy4uLy4uL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Z2V0Um9vdERpcnN9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG5jb25zdCBDU1NfUFJFUFJPQ0VTU09SX0VYVCA9IC8oXFwuc2Nzc3xcXC5zYXNzfFxcLmxlc3N8XFwuc3R5bCkkLztcblxuLyoqXG4gKiBgUmVzb3VyY2VMb2FkZXJgIHdoaWNoIGRlbGVnYXRlcyB0byBhIGBDb21waWxlckhvc3RgIHJlc291cmNlIGxvYWRpbmcgbWV0aG9kLlxuICovXG5leHBvcnQgY2xhc3MgSG9zdFJlc291cmNlTG9hZGVyIGltcGxlbWVudHMgUmVzb3VyY2VMb2FkZXIge1xuICBwcml2YXRlIGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBmZXRjaGluZyA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPHZvaWQ+PigpO1xuXG4gIHByaXZhdGUgcm9vdERpcnM6IEFic29sdXRlRnNQYXRoW107XG5cbiAgY2FuUHJlbG9hZCA9ICEhdGhpcy5ob3N0LnJlYWRSZXNvdXJjZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEV4dGVuZGVkVHNDb21waWxlckhvc3QsIHByaXZhdGUgb3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zKSB7XG4gICAgdGhpcy5yb290RGlycyA9IGdldFJvb3REaXJzKGhvc3QsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIHVybCBvZiBhIHJlc291cmNlIHJlbGF0aXZlIHRvIHRoZSBmaWxlIHRoYXQgY29udGFpbnMgdGhlIHJlZmVyZW5jZSB0byBpdC5cbiAgICogVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBpbiB0aGUgYGxvYWQoKWAgYW5kIGBwcmVsb2FkKClgIG1ldGhvZHMuXG4gICAqXG4gICAqIFVzZXMgdGhlIHByb3ZpZGVkIENvbXBpbGVySG9zdCBpZiBpdCBzdXBwb3J0cyBtYXBwaW5nIHJlc291cmNlcyB0byBmaWxlbmFtZXMuXG4gICAqIE90aGVyd2lzZSwgdXNlcyBhIGZhbGxiYWNrIG1lY2hhbmlzbSB0aGF0IHNlYXJjaGVzIHRoZSBtb2R1bGUgcmVzb2x1dGlvbiBjYW5kaWRhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFRoZSwgcG9zc2libHkgcmVsYXRpdmUsIHVybCBvZiB0aGUgcmVzb3VyY2UuXG4gICAqIEBwYXJhbSBmcm9tRmlsZSBUaGUgcGF0aCB0byB0aGUgZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBVUkwgb2YgdGhlIHJlc291cmNlLlxuICAgKiBAcmV0dXJucyBBIHJlc29sdmVkIHVybCBvZiByZXNvdXJjZS5cbiAgICogQHRocm93cyBBbiBlcnJvciBpZiB0aGUgcmVzb3VyY2UgY2Fubm90IGJlIHJlc29sdmVkLlxuICAgKi9cbiAgcmVzb2x2ZSh1cmw6IHN0cmluZywgZnJvbUZpbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlc29sdmVkVXJsOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuaG9zdC5yZXNvdXJjZU5hbWVUb0ZpbGVOYW1lKSB7XG4gICAgICByZXNvbHZlZFVybCA9IHRoaXMuaG9zdC5yZXNvdXJjZU5hbWVUb0ZpbGVOYW1lKHVybCwgZnJvbUZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlZFVybCA9IHRoaXMuZmFsbGJhY2tSZXNvbHZlKHVybCwgZnJvbUZpbGUpO1xuICAgIH1cbiAgICBpZiAocmVzb2x2ZWRVcmwgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSG9zdFJlc291cmNlUmVzb2x2ZXI6IGNvdWxkIG5vdCByZXNvbHZlICR7dXJsfSBpbiBjb250ZXh0IG9mICR7ZnJvbUZpbGV9KWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZWRVcmw7XG4gIH1cblxuICAvKipcbiAgICogUHJlbG9hZCB0aGUgc3BlY2lmaWVkIHJlc291cmNlLCBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogT25jZSB0aGUgcmVzb3VyY2UgaXMgbG9hZGVkLCBpdHMgdmFsdWUgaXMgY2FjaGVkIHNvIGl0IGNhbiBiZSBhY2Nlc3NlZCBzeW5jaHJvbm91c2x5IHZpYSB0aGVcbiAgICogYGxvYWQoKWAgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gcmVzb2x2ZWRVcmwgVGhlIHVybCAocmVzb2x2ZWQgYnkgYSBjYWxsIHRvIGByZXNvbHZlKClgKSBvZiB0aGUgcmVzb3VyY2UgdG8gcHJlbG9hZC5cbiAgICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb25jZSB0aGUgcmVzb3VyY2UgaGFzIGJlZW4gbG9hZGVkIG9yIGB1bmRlZmluZWRgIGlmIHRoZVxuICAgKiBmaWxlIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLlxuICAgKiBAdGhyb3dzIEFuIEVycm9yIGlmIHByZS1sb2FkaW5nIGlzIG5vdCBhdmFpbGFibGUuXG4gICAqL1xuICBwcmVsb2FkKHJlc29sdmVkVXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+fHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLmhvc3QucmVhZFJlc291cmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0hvc3RSZXNvdXJjZUxvYWRlcjogdGhlIENvbXBpbGVySG9zdCBwcm92aWRlZCBkb2VzIG5vdCBzdXBwb3J0IHByZS1sb2FkaW5nIHJlc291cmNlcy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FjaGUuaGFzKHJlc29sdmVkVXJsKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmV0Y2hpbmcuaGFzKHJlc29sdmVkVXJsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hpbmcuZ2V0KHJlc29sdmVkVXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhvc3QucmVhZFJlc291cmNlKHJlc29sdmVkVXJsKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KHJlc29sdmVkVXJsLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmV0Y2hDb21wbGV0aW9uID0gcmVzdWx0LnRoZW4oc3RyID0+IHtcbiAgICAgICAgdGhpcy5mZXRjaGluZy5kZWxldGUocmVzb2x2ZWRVcmwpO1xuICAgICAgICB0aGlzLmNhY2hlLnNldChyZXNvbHZlZFVybCwgc3RyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mZXRjaGluZy5zZXQocmVzb2x2ZWRVcmwsIGZldGNoQ29tcGxldGlvbik7XG4gICAgICByZXR1cm4gZmV0Y2hDb21wbGV0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSByZXNvdXJjZSBhdCB0aGUgZ2l2ZW4gdXJsLCBzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIHJlc291cmNlIG1heSBoYXZlIGJlZW4gY2FjaGVkIGJ5IGEgcHJldmlvdXMgY2FsbCB0byBgcHJlbG9hZCgpYC5cbiAgICpcbiAgICogQHBhcmFtIHJlc29sdmVkVXJsIFRoZSB1cmwgKHJlc29sdmVkIGJ5IGEgY2FsbCB0byBgcmVzb2x2ZSgpYCkgb2YgdGhlIHJlc291cmNlIHRvIGxvYWQuXG4gICAqIEByZXR1cm5zIFRoZSBjb250ZW50cyBvZiB0aGUgcmVzb3VyY2UuXG4gICAqL1xuICBsb2FkKHJlc29sdmVkVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhyZXNvbHZlZFVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChyZXNvbHZlZFVybCkhO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaG9zdC5yZWFkUmVzb3VyY2UgPyB0aGlzLmhvc3QucmVhZFJlc291cmNlKHJlc29sdmVkVXJsKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5yZWFkRmlsZShyZXNvbHZlZFVybCk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhvc3RSZXNvdXJjZUxvYWRlcjogbG9hZGVyKCR7cmVzb2x2ZWRVcmx9KSByZXR1cm5lZCBhIFByb21pc2VgKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZS5zZXQocmVzb2x2ZWRVcmwsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIHJlc29sdmUgYHVybGAgaW4gdGhlIGNvbnRleHQgb2YgYGZyb21GaWxlYCwgd2hpbGUgcmVzcGVjdGluZyB0aGUgcm9vdERpcnNcbiAgICogb3B0aW9uIGZyb20gdGhlIHRzY29uZmlnLiBGaXJzdCwgbm9ybWFsaXplIHRoZSBmaWxlIG5hbWUuXG4gICAqL1xuICBwcml2YXRlIGZhbGxiYWNrUmVzb2x2ZSh1cmw6IHN0cmluZywgZnJvbUZpbGU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICBsZXQgY2FuZGlkYXRlTG9jYXRpb25zOiBzdHJpbmdbXTtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgLy8gVGhpcyBwYXRoIGlzIG5vdCByZWFsbHkgYW4gYWJzb2x1dGUgcGF0aCwgYnV0IGluc3RlYWQgdGhlIGxlYWRpbmcgJy8nIG1lYW5zIHRoYXQgaXQnc1xuICAgICAgLy8gcm9vdGVkIGluIHRoZSBwcm9qZWN0IHJvb3REaXJzLiBTbyBsb29rIGZvciBpdCBhY2NvcmRpbmcgdG8gdGhlIHJvb3REaXJzLlxuICAgICAgY2FuZGlkYXRlTG9jYXRpb25zID0gdGhpcy5nZXRSb290ZWRDYW5kaWRhdGVMb2NhdGlvbnModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBwYXRoIGlzIGEgXCJyZWxhdGl2ZVwiIHBhdGggYW5kIGNhbiBiZSByZXNvbHZlZCBhcyBzdWNoLiBUbyBtYWtlIHRoaXMgZWFzaWVyIG9uIHRoZVxuICAgICAgLy8gZG93bnN0cmVhbSByZXNvbHZlciwgdGhlICcuLycgcHJlZml4IGlzIGFkZGVkIGlmIG1pc3NpbmcgdG8gZGlzdGluZ3Vpc2ggdGhlc2UgcGF0aHMgZnJvbVxuICAgICAgLy8gYWJzb2x1dGUgbm9kZV9tb2R1bGVzIHBhdGhzLlxuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIHVybCA9IGAuLyR7dXJsfWA7XG4gICAgICB9XG4gICAgICBjYW5kaWRhdGVMb2NhdGlvbnMgPSB0aGlzLmdldFJlc29sdmVkQ2FuZGlkYXRlTG9jYXRpb25zKHVybCwgZnJvbUZpbGUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZUxvY2F0aW9ucykge1xuICAgICAgaWYgKHRoaXMuaG9zdC5maWxlRXhpc3RzKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoQ1NTX1BSRVBST0NFU1NPUl9FWFQudGVzdChjYW5kaWRhdGUpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgdXNlciBzcGVjaWZpZWQgc3R5bGVVcmwgcG9pbnRzIHRvICouc2NzcywgYnV0IHRoZSBTYXNzIGNvbXBpbGVyIHdhcyBydW4gYmVmb3JlXG4gICAgICAgICAqIEFuZ3VsYXIsIHRoZW4gdGhlIHJlc291cmNlIG1heSBoYXZlIGJlZW4gZ2VuZXJhdGVkIGFzICouY3NzLiBTaW1wbHkgdHJ5IHRoZSByZXNvbHV0aW9uXG4gICAgICAgICAqIGFnYWluLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY3NzRmFsbGJhY2tVcmwgPSBjYW5kaWRhdGUucmVwbGFjZShDU1NfUFJFUFJPQ0VTU09SX0VYVCwgJy5jc3MnKTtcbiAgICAgICAgaWYgKHRoaXMuaG9zdC5maWxlRXhpc3RzKGNzc0ZhbGxiYWNrVXJsKSkge1xuICAgICAgICAgIHJldHVybiBjc3NGYWxsYmFja1VybDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdGVkQ2FuZGlkYXRlTG9jYXRpb25zKHVybDogc3RyaW5nKTogQWJzb2x1dGVGc1BhdGhbXSB7XG4gICAgLy8gVGhlIHBhdGggYWxyZWFkeSBzdGFydHMgd2l0aCAnLycsIHNvIGFkZCBhICcuJyB0byBtYWtlIGl0IHJlbGF0aXZlLlxuICAgIGNvbnN0IHNlZ21lbnQ6IFBhdGhTZWdtZW50ID0gKCcuJyArIHVybCkgYXMgUGF0aFNlZ21lbnQ7XG4gICAgcmV0dXJuIHRoaXMucm9vdERpcnMubWFwKHJvb3REaXIgPT4gam9pbihyb290RGlyLCBzZWdtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogVHlwZVNjcmlwdCBwcm92aWRlcyB1dGlsaXRpZXMgdG8gcmVzb2x2ZSBtb2R1bGUgbmFtZXMsIGJ1dCBub3QgcmVzb3VyY2UgZmlsZXMgKHdoaWNoIGFyZW4ndFxuICAgKiBhIHBhcnQgb2YgdGhlIHRzLlByb2dyYW0pLiBIb3dldmVyLCBUeXBlU2NyaXB0J3MgbW9kdWxlIHJlc29sdXRpb24gY2FuIGJlIHVzZWQgY3JlYXRpdmVseVxuICAgKiB0byBsb2NhdGUgd2hlcmUgcmVzb3VyY2UgZmlsZXMgc2hvdWxkIGJlIGV4cGVjdGVkIHRvIGV4aXN0LiBTaW5jZSBtb2R1bGUgcmVzb2x1dGlvbiByZXR1cm5zXG4gICAqIGEgbGlzdCBvZiBmaWxlIG5hbWVzIHRoYXQgd2VyZSBjb25zaWRlcmVkLCB0aGUgbG9hZGVyIGNhbiBlbnVtZXJhdGUgdGhlIHBvc3NpYmxlIGxvY2F0aW9uc1xuICAgKiBmb3IgdGhlIGZpbGUgYnkgc2V0dGluZyB1cCBhIG1vZHVsZSByZXNvbHV0aW9uIGZvciBpdCB0aGF0IHdpbGwgZmFpbC5cbiAgICovXG4gIHByaXZhdGUgZ2V0UmVzb2x2ZWRDYW5kaWRhdGVMb2NhdGlvbnModXJsOiBzdHJpbmcsIGZyb21GaWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgLy8gYGZhaWxlZExvb2t1cExvY2F0aW9uc2AgaXMgaW4gdGhlIG5hbWUgb2YgdGhlIHR5cGUgdHMuUmVzb2x2ZWRNb2R1bGVXaXRoRmFpbGVkTG9va3VwTG9jYXRpb25zXG4gICAgLy8gYnV0IGlzIG1hcmtlZCBAaW50ZXJuYWwgaW4gVHlwZVNjcmlwdC4gU2VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODc3MC5cbiAgICB0eXBlIFJlc29sdmVkTW9kdWxlV2l0aEZhaWxlZExvb2t1cExvY2F0aW9ucyA9XG4gICAgICAgIHRzLlJlc29sdmVkTW9kdWxlV2l0aEZhaWxlZExvb2t1cExvY2F0aW9ucyZ7ZmFpbGVkTG9va3VwTG9jYXRpb25zOiBSZWFkb25seUFycmF5PHN0cmluZz59O1xuXG4gICAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICAgIGNvbnN0IGZhaWxlZExvb2t1cCA9IHRzLnJlc29sdmVNb2R1bGVOYW1lKHVybCArICcuJG5ncmVzb3VyY2UkJywgZnJvbUZpbGUsIHRoaXMub3B0aW9ucywgdGhpcy5ob3N0KSBhcyBSZXNvbHZlZE1vZHVsZVdpdGhGYWlsZWRMb29rdXBMb2NhdGlvbnM7XG4gICAgLy8gY2xhbmctZm9ybWF0IG9uXG4gICAgaWYgKGZhaWxlZExvb2t1cC5mYWlsZWRMb29rdXBMb2NhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnRlcm5hbCBlcnJvcjogZXhwZWN0ZWQgdG8gZmluZCBmYWlsZWRMb29rdXBMb2NhdGlvbnMgZHVyaW5nIHJlc29sdXRpb24gb2YgcmVzb3VyY2UgJyR7XG4gICAgICAgICAgICAgIHVybH0nIGluIGNvbnRleHQgb2YgJHtmcm9tRmlsZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFpbGVkTG9va3VwLmZhaWxlZExvb2t1cExvY2F0aW9uc1xuICAgICAgICAuZmlsdGVyKGNhbmRpZGF0ZSA9PiBjYW5kaWRhdGUuZW5kc1dpdGgoJy4kbmdyZXNvdXJjZSQudHMnKSlcbiAgICAgICAgLm1hcChjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLnJlcGxhY2UoL1xcLlxcJG5ncmVzb3VyY2VcXCRcXC50cyQvLCAnJykpO1xuICB9XG59XG4iXX0=