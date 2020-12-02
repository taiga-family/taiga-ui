(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/imports/src/resolver", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * Used by `RouterEntryPointManager` and `NgModuleRouteAnalyzer` (which is in turn is used by
     * `NgModuleDecoratorHandler`) for resolving the module source-files references in lazy-loaded
     * routes (relative to the source-file containing the `NgModule` that provides the route
     * definitions).
     */
    var ModuleResolver = /** @class */ (function () {
        function ModuleResolver(program, compilerOptions, host, moduleResolutionCache) {
            this.program = program;
            this.compilerOptions = compilerOptions;
            this.host = host;
            this.moduleResolutionCache = moduleResolutionCache;
        }
        ModuleResolver.prototype.resolveModule = function (moduleName, containingFile) {
            var resolved = typescript_1.resolveModuleName(moduleName, containingFile, this.compilerOptions, this.host, this.moduleResolutionCache);
            if (resolved === undefined) {
                return null;
            }
            return typescript_1.getSourceFileOrNull(this.program, file_system_1.absoluteFrom(resolved.resolvedFileName));
        };
        return ModuleResolver;
    }());
    exports.ModuleResolver = ModuleResolver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2ltcG9ydHMvc3JjL3Jlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUEsMkVBQStDO0lBQy9DLGtGQUFpRjtJQUVqRjs7Ozs7T0FLRztJQUNIO1FBQ0Usd0JBQ1ksT0FBbUIsRUFBVSxlQUFtQyxFQUNoRSxJQUFxQixFQUFVLHFCQUFvRDtZQURuRixZQUFPLEdBQVAsT0FBTyxDQUFZO1lBQVUsb0JBQWUsR0FBZixlQUFlLENBQW9CO1lBQ2hFLFNBQUksR0FBSixJQUFJLENBQWlCO1lBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUErQjtRQUMvRixDQUFDO1FBRUQsc0NBQWEsR0FBYixVQUFjLFVBQWtCLEVBQUUsY0FBc0I7WUFDdEQsSUFBTSxRQUFRLEdBQUcsOEJBQWlCLENBQzlCLFVBQVUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdGLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sZ0NBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSwwQkFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FBQyxBQWRELElBY0M7SUFkWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHthYnNvbHV0ZUZyb219IGZyb20gJy4uLy4uL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Z2V0U291cmNlRmlsZU9yTnVsbCwgcmVzb2x2ZU1vZHVsZU5hbWV9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG4vKipcbiAqIFVzZWQgYnkgYFJvdXRlckVudHJ5UG9pbnRNYW5hZ2VyYCBhbmQgYE5nTW9kdWxlUm91dGVBbmFseXplcmAgKHdoaWNoIGlzIGluIHR1cm4gaXMgdXNlZCBieVxuICogYE5nTW9kdWxlRGVjb3JhdG9ySGFuZGxlcmApIGZvciByZXNvbHZpbmcgdGhlIG1vZHVsZSBzb3VyY2UtZmlsZXMgcmVmZXJlbmNlcyBpbiBsYXp5LWxvYWRlZFxuICogcm91dGVzIChyZWxhdGl2ZSB0byB0aGUgc291cmNlLWZpbGUgY29udGFpbmluZyB0aGUgYE5nTW9kdWxlYCB0aGF0IHByb3ZpZGVzIHRoZSByb3V0ZVxuICogZGVmaW5pdGlvbnMpLlxuICovXG5leHBvcnQgY2xhc3MgTW9kdWxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgcHJpdmF0ZSBjb21waWxlck9wdGlvbnM6IHRzLkNvbXBpbGVyT3B0aW9ucyxcbiAgICAgIHByaXZhdGUgaG9zdDogdHMuQ29tcGlsZXJIb3N0LCBwcml2YXRlIG1vZHVsZVJlc29sdXRpb25DYWNoZTogdHMuTW9kdWxlUmVzb2x1dGlvbkNhY2hlfG51bGwpIHtcbiAgfVxuXG4gIHJlc29sdmVNb2R1bGUobW9kdWxlTmFtZTogc3RyaW5nLCBjb250YWluaW5nRmlsZTogc3RyaW5nKTogdHMuU291cmNlRmlsZXxudWxsIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNb2R1bGVOYW1lKFxuICAgICAgICBtb2R1bGVOYW1lLCBjb250YWluaW5nRmlsZSwgdGhpcy5jb21waWxlck9wdGlvbnMsIHRoaXMuaG9zdCwgdGhpcy5tb2R1bGVSZXNvbHV0aW9uQ2FjaGUpO1xuICAgIGlmIChyZXNvbHZlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldFNvdXJjZUZpbGVPck51bGwodGhpcy5wcm9ncmFtLCBhYnNvbHV0ZUZyb20ocmVzb2x2ZWQucmVzb2x2ZWRGaWxlTmFtZSkpO1xuICB9XG59XG4iXX0=