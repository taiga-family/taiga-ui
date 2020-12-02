(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/analysis/switch_marker_analyzer", ["require", "exports", "@angular/compiler-cli/ngcc/src/analysis/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("@angular/compiler-cli/ngcc/src/analysis/util");
    exports.SwitchMarkerAnalyses = Map;
    /**
     * This Analyzer will analyse the files that have an R3 switch marker in them
     * that will be replaced.
     */
    var SwitchMarkerAnalyzer = /** @class */ (function () {
        function SwitchMarkerAnalyzer(host, packagePath) {
            this.host = host;
            this.packagePath = packagePath;
        }
        /**
         * Analyze the files in the program to identify declarations that contain R3
         * switch markers.
         * @param program The program to analyze.
         * @return A map of source files to analysis objects. The map will contain only the
         * source files that had switch markers, and the analysis will contain an array of
         * the declarations in that source file that contain the marker.
         */
        SwitchMarkerAnalyzer.prototype.analyzeProgram = function (program) {
            var _this = this;
            var analyzedFiles = new exports.SwitchMarkerAnalyses();
            program.getSourceFiles()
                .filter(function (sourceFile) { return util_1.isWithinPackage(_this.packagePath, sourceFile); })
                .forEach(function (sourceFile) {
                var declarations = _this.host.getSwitchableDeclarations(sourceFile);
                if (declarations.length) {
                    analyzedFiles.set(sourceFile, { sourceFile: sourceFile, declarations: declarations });
                }
            });
            return analyzedFiles;
        };
        return SwitchMarkerAnalyzer;
    }());
    exports.SwitchMarkerAnalyzer = SwitchMarkerAnalyzer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoX21hcmtlcl9hbmFseXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9hbmFseXNpcy9zd2l0Y2hfbWFya2VyX2FuYWx5emVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBVUEscUVBQXVDO0lBUTFCLFFBQUEsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO0lBRXhDOzs7T0FHRztJQUNIO1FBQ0UsOEJBQW9CLElBQXdCLEVBQVUsV0FBMkI7WUFBN0QsU0FBSSxHQUFKLElBQUksQ0FBb0I7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBRyxDQUFDO1FBQ3JGOzs7Ozs7O1dBT0c7UUFDSCw2Q0FBYyxHQUFkLFVBQWUsT0FBbUI7WUFBbEMsaUJBV0M7WUFWQyxJQUFNLGFBQWEsR0FBRyxJQUFJLDRCQUFvQixFQUFFLENBQUM7WUFDakQsT0FBTyxDQUFDLGNBQWMsRUFBRTtpQkFDbkIsTUFBTSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsc0JBQWUsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO2lCQUNuRSxPQUFPLENBQUMsVUFBQSxVQUFVO2dCQUNqQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUMsVUFBVSxZQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ1AsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQXRCRCxJQXNCQztJQXRCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGh9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge05nY2NSZWZsZWN0aW9uSG9zdCwgU3dpdGNoYWJsZVZhcmlhYmxlRGVjbGFyYXRpb259IGZyb20gJy4uL2hvc3QvbmdjY19ob3N0JztcbmltcG9ydCB7aXNXaXRoaW5QYWNrYWdlfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXRjaE1hcmtlckFuYWx5c2lzIHtcbiAgc291cmNlRmlsZTogdHMuU291cmNlRmlsZTtcbiAgZGVjbGFyYXRpb25zOiBTd2l0Y2hhYmxlVmFyaWFibGVEZWNsYXJhdGlvbltdO1xufVxuXG5leHBvcnQgdHlwZSBTd2l0Y2hNYXJrZXJBbmFseXNlcyA9IE1hcDx0cy5Tb3VyY2VGaWxlLCBTd2l0Y2hNYXJrZXJBbmFseXNpcz47XG5leHBvcnQgY29uc3QgU3dpdGNoTWFya2VyQW5hbHlzZXMgPSBNYXA7XG5cbi8qKlxuICogVGhpcyBBbmFseXplciB3aWxsIGFuYWx5c2UgdGhlIGZpbGVzIHRoYXQgaGF2ZSBhbiBSMyBzd2l0Y2ggbWFya2VyIGluIHRoZW1cbiAqIHRoYXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN3aXRjaE1hcmtlckFuYWx5emVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBOZ2NjUmVmbGVjdGlvbkhvc3QsIHByaXZhdGUgcGFja2FnZVBhdGg6IEFic29sdXRlRnNQYXRoKSB7fVxuICAvKipcbiAgICogQW5hbHl6ZSB0aGUgZmlsZXMgaW4gdGhlIHByb2dyYW0gdG8gaWRlbnRpZnkgZGVjbGFyYXRpb25zIHRoYXQgY29udGFpbiBSM1xuICAgKiBzd2l0Y2ggbWFya2Vycy5cbiAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gdG8gYW5hbHl6ZS5cbiAgICogQHJldHVybiBBIG1hcCBvZiBzb3VyY2UgZmlsZXMgdG8gYW5hbHlzaXMgb2JqZWN0cy4gVGhlIG1hcCB3aWxsIGNvbnRhaW4gb25seSB0aGVcbiAgICogc291cmNlIGZpbGVzIHRoYXQgaGFkIHN3aXRjaCBtYXJrZXJzLCBhbmQgdGhlIGFuYWx5c2lzIHdpbGwgY29udGFpbiBhbiBhcnJheSBvZlxuICAgKiB0aGUgZGVjbGFyYXRpb25zIGluIHRoYXQgc291cmNlIGZpbGUgdGhhdCBjb250YWluIHRoZSBtYXJrZXIuXG4gICAqL1xuICBhbmFseXplUHJvZ3JhbShwcm9ncmFtOiB0cy5Qcm9ncmFtKTogU3dpdGNoTWFya2VyQW5hbHlzZXMge1xuICAgIGNvbnN0IGFuYWx5emVkRmlsZXMgPSBuZXcgU3dpdGNoTWFya2VyQW5hbHlzZXMoKTtcbiAgICBwcm9ncmFtLmdldFNvdXJjZUZpbGVzKClcbiAgICAgICAgLmZpbHRlcihzb3VyY2VGaWxlID0+IGlzV2l0aGluUGFja2FnZSh0aGlzLnBhY2thZ2VQYXRoLCBzb3VyY2VGaWxlKSlcbiAgICAgICAgLmZvckVhY2goc291cmNlRmlsZSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25zID0gdGhpcy5ob3N0LmdldFN3aXRjaGFibGVEZWNsYXJhdGlvbnMoc291cmNlRmlsZSk7XG4gICAgICAgICAgaWYgKGRlY2xhcmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFuYWx5emVkRmlsZXMuc2V0KHNvdXJjZUZpbGUsIHtzb3VyY2VGaWxlLCBkZWNsYXJhdGlvbnN9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBhbmFseXplZEZpbGVzO1xuICB9XG59XG4iXX0=