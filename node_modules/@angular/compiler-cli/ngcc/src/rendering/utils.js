(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/rendering/utils", ["require", "exports", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/ngcc/src/rendering/ngcc_import_rewriter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var ngcc_import_rewriter_1 = require("@angular/compiler-cli/ngcc/src/rendering/ngcc_import_rewriter");
    /**
     * Create an appropriate ImportRewriter given the parameters.
     */
    function getImportRewriter(r3SymbolsFile, isCore, isFlat) {
        if (isCore && isFlat) {
            return new ngcc_import_rewriter_1.NgccFlatImportRewriter();
        }
        else if (isCore) {
            return new imports_1.R3SymbolsImportRewriter(r3SymbolsFile.fileName);
        }
        else {
            return new imports_1.NoopImportRewriter();
        }
    }
    exports.getImportRewriter = getImportRewriter;
    function stripExtension(filePath) {
        return filePath.replace(/\.(js|d\.ts)$/, '');
    }
    exports.stripExtension = stripExtension;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcmVuZGVyaW5nL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU0EsbUVBQXVHO0lBQ3ZHLHNHQUE4RDtJQVk5RDs7T0FFRztJQUNILFNBQWdCLGlCQUFpQixDQUM3QixhQUFpQyxFQUFFLE1BQWUsRUFBRSxNQUFlO1FBQ3JFLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNwQixPQUFPLElBQUksNkNBQXNCLEVBQUUsQ0FBQztTQUNyQzthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxpQ0FBdUIsQ0FBQyxhQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLE9BQU8sSUFBSSw0QkFBa0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQVRELDhDQVNDO0lBRUQsU0FBZ0IsY0FBYyxDQUFtQixRQUFXO1FBQzFELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFNLENBQUM7SUFDcEQsQ0FBQztJQUZELHdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge0Fic29sdXRlRnNQYXRofSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtJbXBvcnRSZXdyaXRlciwgTm9vcEltcG9ydFJld3JpdGVyLCBSM1N5bWJvbHNJbXBvcnRSZXdyaXRlcn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ltcG9ydHMnO1xuaW1wb3J0IHtOZ2NjRmxhdEltcG9ydFJld3JpdGVyfSBmcm9tICcuL25nY2NfaW1wb3J0X3Jld3JpdGVyJztcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCBhIGZpbGUgdGhhdCBoYXMgYmVlbiByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlVG9Xcml0ZSB7XG4gIC8qKiBQYXRoIHRvIHdoZXJlIHRoZSBmaWxlIHNob3VsZCBiZSB3cml0dGVuLiAqL1xuICBwYXRoOiBBYnNvbHV0ZUZzUGF0aDtcbiAgLyoqIFRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSB0byBiZSBiZSB3cml0dGVuLiAqL1xuICBjb250ZW50czogc3RyaW5nO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBhcHByb3ByaWF0ZSBJbXBvcnRSZXdyaXRlciBnaXZlbiB0aGUgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEltcG9ydFJld3JpdGVyKFxuICAgIHIzU3ltYm9sc0ZpbGU6IHRzLlNvdXJjZUZpbGV8bnVsbCwgaXNDb3JlOiBib29sZWFuLCBpc0ZsYXQ6IGJvb2xlYW4pOiBJbXBvcnRSZXdyaXRlciB7XG4gIGlmIChpc0NvcmUgJiYgaXNGbGF0KSB7XG4gICAgcmV0dXJuIG5ldyBOZ2NjRmxhdEltcG9ydFJld3JpdGVyKCk7XG4gIH0gZWxzZSBpZiAoaXNDb3JlKSB7XG4gICAgcmV0dXJuIG5ldyBSM1N5bWJvbHNJbXBvcnRSZXdyaXRlcihyM1N5bWJvbHNGaWxlIS5maWxlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBOb29wSW1wb3J0UmV3cml0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBFeHRlbnNpb248VCBleHRlbmRzIHN0cmluZz4oZmlsZVBhdGg6IFQpOiBUIHtcbiAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoL1xcLihqc3xkXFwudHMpJC8sICcnKSBhcyBUO1xufVxuIl19