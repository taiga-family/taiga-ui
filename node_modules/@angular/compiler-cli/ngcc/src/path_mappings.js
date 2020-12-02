(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/path_mappings", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    /**
     * If `pathMappings` is not provided directly, then try getting it from `tsConfig`, if available.
     */
    function getPathMappingsFromTsConfig(tsConfig, projectPath) {
        if (tsConfig !== null && tsConfig.options.baseUrl !== undefined &&
            tsConfig.options.paths !== undefined) {
            return {
                baseUrl: file_system_1.resolve(projectPath, tsConfig.options.baseUrl),
                paths: tsConfig.options.paths,
            };
        }
    }
    exports.getPathMappingsFromTsConfig = getPathMappingsFromTsConfig;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aF9tYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9wYXRoX21hcHBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsMkVBQW9FO0lBU3BFOztPQUVHO0lBQ0gsU0FBZ0IsMkJBQTJCLENBQ3ZDLFFBQWtDLEVBQUUsV0FBMkI7UUFDakUsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDM0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hDLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLHFCQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUN2RCxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2FBQzlCLENBQUM7U0FDSDtJQUNILENBQUM7SUFURCxrRUFTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIHJlc29sdmV9IGZyb20gJy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge1BhcnNlZENvbmZpZ3VyYXRpb259IGZyb20gJy4uLy4uL3NyYy9wZXJmb3JtX2NvbXBpbGUnO1xuXG5cbmV4cG9ydCB0eXBlIFBhdGhNYXBwaW5ncyA9IHtcbiAgYmFzZVVybDogc3RyaW5nLFxuICBwYXRoczoge1trZXk6IHN0cmluZ106IHN0cmluZ1tdfVxufTtcblxuLyoqXG4gKiBJZiBgcGF0aE1hcHBpbmdzYCBpcyBub3QgcHJvdmlkZWQgZGlyZWN0bHksIHRoZW4gdHJ5IGdldHRpbmcgaXQgZnJvbSBgdHNDb25maWdgLCBpZiBhdmFpbGFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXRoTWFwcGluZ3NGcm9tVHNDb25maWcoXG4gICAgdHNDb25maWc6IFBhcnNlZENvbmZpZ3VyYXRpb258bnVsbCwgcHJvamVjdFBhdGg6IEFic29sdXRlRnNQYXRoKTogUGF0aE1hcHBpbmdzfHVuZGVmaW5lZCB7XG4gIGlmICh0c0NvbmZpZyAhPT0gbnVsbCAmJiB0c0NvbmZpZy5vcHRpb25zLmJhc2VVcmwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdHNDb25maWcub3B0aW9ucy5wYXRocyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhc2VVcmw6IHJlc29sdmUocHJvamVjdFBhdGgsIHRzQ29uZmlnLm9wdGlvbnMuYmFzZVVybCksXG4gICAgICBwYXRoczogdHNDb25maWcub3B0aW9ucy5wYXRocyxcbiAgICB9O1xuICB9XG59XG4iXX0=