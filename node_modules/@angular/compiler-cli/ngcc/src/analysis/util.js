(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/analysis/util", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    function isWithinPackage(packagePath, sourceFile) {
        var relativePath = file_system_1.relative(packagePath, file_system_1.absoluteFromSourceFile(sourceFile));
        return !relativePath.startsWith('..') && !relativePath.startsWith('node_modules/');
    }
    exports.isWithinPackage = isWithinPackage;
    var NoopDependencyTracker = /** @class */ (function () {
        function NoopDependencyTracker() {
        }
        NoopDependencyTracker.prototype.addDependency = function () { };
        NoopDependencyTracker.prototype.addResourceDependency = function () { };
        NoopDependencyTracker.prototype.addTransitiveDependency = function () { };
        NoopDependencyTracker.prototype.addTransitiveResources = function () { };
        return NoopDependencyTracker;
    }());
    exports.NOOP_DEPENDENCY_TRACKER = new NoopDependencyTracker();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9hbmFseXNpcy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU0EsMkVBQWdHO0lBR2hHLFNBQWdCLGVBQWUsQ0FBQyxXQUEyQixFQUFFLFVBQXlCO1FBQ3BGLElBQU0sWUFBWSxHQUFHLHNCQUFRLENBQUMsV0FBVyxFQUFFLG9DQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0UsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFIRCwwQ0FHQztJQUVEO1FBQUE7UUFLQSxDQUFDO1FBSkMsNkNBQWEsR0FBYixjQUF1QixDQUFDO1FBQ3hCLHFEQUFxQixHQUFyQixjQUErQixDQUFDO1FBQ2hDLHVEQUF1QixHQUF2QixjQUFpQyxDQUFDO1FBQ2xDLHNEQUFzQixHQUF0QixjQUFnQyxDQUFDO1FBQ25DLDRCQUFDO0lBQUQsQ0FBQyxBQUxELElBS0M7SUFFWSxRQUFBLHVCQUF1QixHQUFzQixJQUFJLHFCQUFxQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHthYnNvbHV0ZUZyb21Tb3VyY2VGaWxlLCBBYnNvbHV0ZUZzUGF0aCwgcmVsYXRpdmV9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0RlcGVuZGVuY3lUcmFja2VyfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvaW5jcmVtZW50YWwvYXBpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2l0aGluUGFja2FnZShwYWNrYWdlUGF0aDogQWJzb2x1dGVGc1BhdGgsIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiBib29sZWFuIHtcbiAgY29uc3QgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUocGFja2FnZVBhdGgsIGFic29sdXRlRnJvbVNvdXJjZUZpbGUoc291cmNlRmlsZSkpO1xuICByZXR1cm4gIXJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKCcuLicpICYmICFyZWxhdGl2ZVBhdGguc3RhcnRzV2l0aCgnbm9kZV9tb2R1bGVzLycpO1xufVxuXG5jbGFzcyBOb29wRGVwZW5kZW5jeVRyYWNrZXIgaW1wbGVtZW50cyBEZXBlbmRlbmN5VHJhY2tlciB7XG4gIGFkZERlcGVuZGVuY3koKTogdm9pZCB7fVxuICBhZGRSZXNvdXJjZURlcGVuZGVuY3koKTogdm9pZCB7fVxuICBhZGRUcmFuc2l0aXZlRGVwZW5kZW5jeSgpOiB2b2lkIHt9XG4gIGFkZFRyYW5zaXRpdmVSZXNvdXJjZXMoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgTk9PUF9ERVBFTkRFTkNZX1RSQUNLRVI6IERlcGVuZGVuY3lUcmFja2VyID0gbmV3IE5vb3BEZXBlbmRlbmN5VHJhY2tlcigpO1xuIl19