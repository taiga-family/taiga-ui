(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/dependencies/dts_dependency_host", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/dependencies/esm_dependency_host", "@angular/compiler-cli/ngcc/src/dependencies/module_resolver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var esm_dependency_host_1 = require("@angular/compiler-cli/ngcc/src/dependencies/esm_dependency_host");
    var module_resolver_1 = require("@angular/compiler-cli/ngcc/src/dependencies/module_resolver");
    /**
     * Helper functions for computing dependencies via typings files.
     */
    var DtsDependencyHost = /** @class */ (function (_super) {
        tslib_1.__extends(DtsDependencyHost, _super);
        function DtsDependencyHost(fs, pathMappings) {
            return _super.call(this, fs, new module_resolver_1.ModuleResolver(fs, pathMappings, ['', '.d.ts', '/index.d.ts', '.js', '/index.js'])) || this;
        }
        /**
         * Attempts to process the `importPath` directly and also inside `@types/...`.
         */
        DtsDependencyHost.prototype.processImport = function (importPath, file, dependencies, missing, deepImports, alreadySeen) {
            return _super.prototype.processImport.call(this, importPath, file, dependencies, missing, deepImports, alreadySeen) ||
                _super.prototype.processImport.call(this, "@types/" + importPath, file, dependencies, missing, deepImports, alreadySeen);
        };
        return DtsDependencyHost;
    }(esm_dependency_host_1.EsmDependencyHost));
    exports.DtsDependencyHost = DtsDependencyHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRzX2RlcGVuZGVuY3lfaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9kZXBlbmRlbmNpZXMvZHRzX2RlcGVuZGVuY3lfaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFTQSx1R0FBd0Q7SUFDeEQsK0ZBQWlEO0lBRWpEOztPQUVHO0lBQ0g7UUFBdUMsNkNBQWlCO1FBQ3RELDJCQUFZLEVBQWMsRUFBRSxZQUEyQjttQkFDckQsa0JBQ0ksRUFBRSxFQUFFLElBQUksZ0NBQWMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakcsQ0FBQztRQUVEOztXQUVHO1FBQ08seUNBQWEsR0FBdkIsVUFDSSxVQUFrQixFQUFFLElBQW9CLEVBQUUsWUFBaUMsRUFDM0UsT0FBb0IsRUFBRSxXQUF3QixFQUFFLFdBQWdDO1lBQ2xGLE9BQU8saUJBQU0sYUFBYSxZQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO2dCQUN6RixpQkFBTSxhQUFhLFlBQ2YsWUFBVSxVQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUFoQkQsQ0FBdUMsdUNBQWlCLEdBZ0J2RDtJQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtQYXRoTWFwcGluZ3N9IGZyb20gJy4uL3BhdGhfbWFwcGluZ3MnO1xuaW1wb3J0IHtFc21EZXBlbmRlbmN5SG9zdH0gZnJvbSAnLi9lc21fZGVwZW5kZW5jeV9ob3N0JztcbmltcG9ydCB7TW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4vbW9kdWxlX3Jlc29sdmVyJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBjb21wdXRpbmcgZGVwZW5kZW5jaWVzIHZpYSB0eXBpbmdzIGZpbGVzLlxuICovXG5leHBvcnQgY2xhc3MgRHRzRGVwZW5kZW5jeUhvc3QgZXh0ZW5kcyBFc21EZXBlbmRlbmN5SG9zdCB7XG4gIGNvbnN0cnVjdG9yKGZzOiBGaWxlU3lzdGVtLCBwYXRoTWFwcGluZ3M/OiBQYXRoTWFwcGluZ3MpIHtcbiAgICBzdXBlcihcbiAgICAgICAgZnMsIG5ldyBNb2R1bGVSZXNvbHZlcihmcywgcGF0aE1hcHBpbmdzLCBbJycsICcuZC50cycsICcvaW5kZXguZC50cycsICcuanMnLCAnL2luZGV4LmpzJ10pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBwcm9jZXNzIHRoZSBgaW1wb3J0UGF0aGAgZGlyZWN0bHkgYW5kIGFsc28gaW5zaWRlIGBAdHlwZXMvLi4uYC5cbiAgICovXG4gIHByb3RlY3RlZCBwcm9jZXNzSW1wb3J0KFxuICAgICAgaW1wb3J0UGF0aDogc3RyaW5nLCBmaWxlOiBBYnNvbHV0ZUZzUGF0aCwgZGVwZW5kZW5jaWVzOiBTZXQ8QWJzb2x1dGVGc1BhdGg+LFxuICAgICAgbWlzc2luZzogU2V0PHN0cmluZz4sIGRlZXBJbXBvcnRzOiBTZXQ8c3RyaW5nPiwgYWxyZWFkeVNlZW46IFNldDxBYnNvbHV0ZUZzUGF0aD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3VwZXIucHJvY2Vzc0ltcG9ydChpbXBvcnRQYXRoLCBmaWxlLCBkZXBlbmRlbmNpZXMsIG1pc3NpbmcsIGRlZXBJbXBvcnRzLCBhbHJlYWR5U2VlbikgfHxcbiAgICAgICAgc3VwZXIucHJvY2Vzc0ltcG9ydChcbiAgICAgICAgICAgIGBAdHlwZXMvJHtpbXBvcnRQYXRofWAsIGZpbGUsIGRlcGVuZGVuY2llcywgbWlzc2luZywgZGVlcEltcG9ydHMsIGFscmVhZHlTZWVuKTtcbiAgfVxufVxuIl19