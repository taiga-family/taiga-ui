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
        define("@angular/compiler-cli/src/ngtsc/imports/src/core", ["require", "exports", "@angular/compiler-cli/src/ngtsc/util/src/path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path_1 = require("@angular/compiler-cli/src/ngtsc/util/src/path");
    /**
     * `ImportRewriter` that does no rewriting.
     */
    var NoopImportRewriter = /** @class */ (function () {
        function NoopImportRewriter() {
        }
        NoopImportRewriter.prototype.shouldImportSymbol = function (symbol, specifier) {
            return true;
        };
        NoopImportRewriter.prototype.rewriteSymbol = function (symbol, specifier) {
            return symbol;
        };
        NoopImportRewriter.prototype.rewriteSpecifier = function (specifier, inContextOfFile) {
            return specifier;
        };
        return NoopImportRewriter;
    }());
    exports.NoopImportRewriter = NoopImportRewriter;
    /**
     * A mapping of supported symbols that can be imported from within @angular/core, and the names by
     * which they're exported from r3_symbols.
     */
    var CORE_SUPPORTED_SYMBOLS = new Map([
        ['ɵɵdefineInjectable', 'ɵɵdefineInjectable'],
        ['ɵɵdefineInjector', 'ɵɵdefineInjector'],
        ['ɵɵdefineNgModule', 'ɵɵdefineNgModule'],
        ['ɵɵsetNgModuleScope', 'ɵɵsetNgModuleScope'],
        ['ɵɵinject', 'ɵɵinject'],
        ['ɵɵFactoryDef', 'ɵɵFactoryDef'],
        ['ɵsetClassMetadata', 'setClassMetadata'],
        ['ɵɵInjectableDef', 'ɵɵInjectableDef'],
        ['ɵɵInjectorDef', 'ɵɵInjectorDef'],
        ['ɵɵNgModuleDefWithMeta', 'ɵɵNgModuleDefWithMeta'],
        ['ɵNgModuleFactory', 'NgModuleFactory'],
    ]);
    var CORE_MODULE = '@angular/core';
    /**
     * `ImportRewriter` that rewrites imports from '@angular/core' to be imported from the r3_symbols.ts
     * file instead.
     */
    var R3SymbolsImportRewriter = /** @class */ (function () {
        function R3SymbolsImportRewriter(r3SymbolsPath) {
            this.r3SymbolsPath = r3SymbolsPath;
        }
        R3SymbolsImportRewriter.prototype.shouldImportSymbol = function (symbol, specifier) {
            return true;
        };
        R3SymbolsImportRewriter.prototype.rewriteSymbol = function (symbol, specifier) {
            if (specifier !== CORE_MODULE) {
                // This import isn't from core, so ignore it.
                return symbol;
            }
            return validateAndRewriteCoreSymbol(symbol);
        };
        R3SymbolsImportRewriter.prototype.rewriteSpecifier = function (specifier, inContextOfFile) {
            if (specifier !== CORE_MODULE) {
                // This module isn't core, so ignore it.
                return specifier;
            }
            var relativePathToR3Symbols = path_1.relativePathBetween(inContextOfFile, this.r3SymbolsPath);
            if (relativePathToR3Symbols === null) {
                throw new Error("Failed to rewrite import inside " + CORE_MODULE + ": " + inContextOfFile + " -> " + this.r3SymbolsPath);
            }
            return relativePathToR3Symbols;
        };
        return R3SymbolsImportRewriter;
    }());
    exports.R3SymbolsImportRewriter = R3SymbolsImportRewriter;
    function validateAndRewriteCoreSymbol(name) {
        if (!CORE_SUPPORTED_SYMBOLS.has(name)) {
            throw new Error("Importing unexpected symbol " + name + " while compiling " + CORE_MODULE);
        }
        return CORE_SUPPORTED_SYMBOLS.get(name);
    }
    exports.validateAndRewriteCoreSymbol = validateAndRewriteCoreSymbol;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvaW1wb3J0cy9zcmMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHNFQUF3RDtJQTBCeEQ7O09BRUc7SUFDSDtRQUFBO1FBWUEsQ0FBQztRQVhDLCtDQUFrQixHQUFsQixVQUFtQixNQUFjLEVBQUUsU0FBaUI7WUFDbEQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsMENBQWEsR0FBYixVQUFjLE1BQWMsRUFBRSxTQUFpQjtZQUM3QyxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLFNBQWlCLEVBQUUsZUFBdUI7WUFDekQsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FBQyxBQVpELElBWUM7SUFaWSxnREFBa0I7SUFjL0I7OztPQUdHO0lBQ0gsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsQ0FBaUI7UUFDckQsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztRQUM1QyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO1FBQ3hDLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7UUFDeEMsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQztRQUM1QyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDeEIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO1FBQ2hDLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7UUFDekMsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztRQUN0QyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDbEMsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztRQUNsRCxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDO0tBQ3hDLENBQUMsQ0FBQztJQUVILElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztJQUVwQzs7O09BR0c7SUFDSDtRQUNFLGlDQUFvQixhQUFxQjtZQUFyQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUFHLENBQUM7UUFFN0Msb0RBQWtCLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxTQUFpQjtZQUNsRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCwrQ0FBYSxHQUFiLFVBQWMsTUFBYyxFQUFFLFNBQWlCO1lBQzdDLElBQUksU0FBUyxLQUFLLFdBQVcsRUFBRTtnQkFDN0IsNkNBQTZDO2dCQUM3QyxPQUFPLE1BQU0sQ0FBQzthQUNmO1lBRUQsT0FBTyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLFNBQWlCLEVBQUUsZUFBdUI7WUFDekQsSUFBSSxTQUFTLEtBQUssV0FBVyxFQUFFO2dCQUM3Qix3Q0FBd0M7Z0JBQ3hDLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBRUQsSUFBTSx1QkFBdUIsR0FBRywwQkFBbUIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pGLElBQUksdUJBQXVCLEtBQUssSUFBSSxFQUFFO2dCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxXQUFXLFVBQUssZUFBZSxZQUM5RSxJQUFJLENBQUMsYUFBZSxDQUFDLENBQUM7YUFDM0I7WUFFRCxPQUFPLHVCQUF1QixDQUFDO1FBQ2pDLENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUE5QkQsSUE4QkM7SUE5QlksMERBQXVCO0lBZ0NwQyxTQUFnQiw0QkFBNEIsQ0FBQyxJQUFZO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBK0IsSUFBSSx5QkFBb0IsV0FBYSxDQUFDLENBQUM7U0FDdkY7UUFDRCxPQUFPLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUMzQyxDQUFDO0lBTEQsb0VBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7cmVsYXRpdmVQYXRoQmV0d2Vlbn0gZnJvbSAnLi4vLi4vdXRpbC9zcmMvcGF0aCc7XG5cbi8qKlxuICogUmV3cml0ZXMgaW1wb3J0cyBvZiBzeW1ib2xzIGJlaW5nIHdyaXR0ZW4gaW50byBnZW5lcmF0ZWQgY29kZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRSZXdyaXRlciB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIGdpdmVuIHN5bWJvbCBiZSBpbXBvcnRlZCBhdCBhbGw/XG4gICAqXG4gICAqIElmIGB0cnVlYCwgdGhlIHN5bWJvbCBzaG91bGQgYmUgaW1wb3J0ZWQgZnJvbSB0aGUgZ2l2ZW4gc3BlY2lmaWVyLiBJZiBgZmFsc2VgLCB0aGUgc3ltYm9sXG4gICAqIHNob3VsZCBiZSByZWZlcmVuY2VkIGRpcmVjdGx5LCB3aXRob3V0IGFuIGltcG9ydC5cbiAgICovXG4gIHNob3VsZEltcG9ydFN5bWJvbChzeW1ib2w6IHN0cmluZywgc3BlY2lmaWVyOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbGx5IHJld3JpdGUgYSByZWZlcmVuY2UgdG8gYW4gaW1wb3J0ZWQgc3ltYm9sLCBjaGFuZ2luZyBlaXRoZXIgdGhlIGJpbmRpbmcgcHJlZml4IG9yIHRoZVxuICAgKiBzeW1ib2wgbmFtZSBpdHNlbGYuXG4gICAqL1xuICByZXdyaXRlU3ltYm9sKHN5bWJvbDogc3RyaW5nLCBzcGVjaWZpZXI6IHN0cmluZyk6IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uYWxseSByZXdyaXRlIHRoZSBnaXZlbiBtb2R1bGUgc3BlY2lmaWVyIGluIHRoZSBjb250ZXh0IG9mIGEgZ2l2ZW4gZmlsZS5cbiAgICovXG4gIHJld3JpdGVTcGVjaWZpZXIoc3BlY2lmaWVyOiBzdHJpbmcsIGluQ29udGV4dE9mRmlsZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG4vKipcbiAqIGBJbXBvcnRSZXdyaXRlcmAgdGhhdCBkb2VzIG5vIHJld3JpdGluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BJbXBvcnRSZXdyaXRlciBpbXBsZW1lbnRzIEltcG9ydFJld3JpdGVyIHtcbiAgc2hvdWxkSW1wb3J0U3ltYm9sKHN5bWJvbDogc3RyaW5nLCBzcGVjaWZpZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV3cml0ZVN5bWJvbChzeW1ib2w6IHN0cmluZywgc3BlY2lmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cblxuICByZXdyaXRlU3BlY2lmaWVyKHNwZWNpZmllcjogc3RyaW5nLCBpbkNvbnRleHRPZkZpbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNwZWNpZmllcjtcbiAgfVxufVxuXG4vKipcbiAqIEEgbWFwcGluZyBvZiBzdXBwb3J0ZWQgc3ltYm9scyB0aGF0IGNhbiBiZSBpbXBvcnRlZCBmcm9tIHdpdGhpbiBAYW5ndWxhci9jb3JlLCBhbmQgdGhlIG5hbWVzIGJ5XG4gKiB3aGljaCB0aGV5J3JlIGV4cG9ydGVkIGZyb20gcjNfc3ltYm9scy5cbiAqL1xuY29uc3QgQ09SRV9TVVBQT1JURURfU1lNQk9MUyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KFtcbiAgWyfJtcm1ZGVmaW5lSW5qZWN0YWJsZScsICfJtcm1ZGVmaW5lSW5qZWN0YWJsZSddLFxuICBbJ8m1ybVkZWZpbmVJbmplY3RvcicsICfJtcm1ZGVmaW5lSW5qZWN0b3InXSxcbiAgWyfJtcm1ZGVmaW5lTmdNb2R1bGUnLCAnybXJtWRlZmluZU5nTW9kdWxlJ10sXG4gIFsnybXJtXNldE5nTW9kdWxlU2NvcGUnLCAnybXJtXNldE5nTW9kdWxlU2NvcGUnXSxcbiAgWyfJtcm1aW5qZWN0JywgJ8m1ybVpbmplY3QnXSxcbiAgWyfJtcm1RmFjdG9yeURlZicsICfJtcm1RmFjdG9yeURlZiddLFxuICBbJ8m1c2V0Q2xhc3NNZXRhZGF0YScsICdzZXRDbGFzc01ldGFkYXRhJ10sXG4gIFsnybXJtUluamVjdGFibGVEZWYnLCAnybXJtUluamVjdGFibGVEZWYnXSxcbiAgWyfJtcm1SW5qZWN0b3JEZWYnLCAnybXJtUluamVjdG9yRGVmJ10sXG4gIFsnybXJtU5nTW9kdWxlRGVmV2l0aE1ldGEnLCAnybXJtU5nTW9kdWxlRGVmV2l0aE1ldGEnXSxcbiAgWyfJtU5nTW9kdWxlRmFjdG9yeScsICdOZ01vZHVsZUZhY3RvcnknXSxcbl0pO1xuXG5jb25zdCBDT1JFX01PRFVMRSA9ICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBgSW1wb3J0UmV3cml0ZXJgIHRoYXQgcmV3cml0ZXMgaW1wb3J0cyBmcm9tICdAYW5ndWxhci9jb3JlJyB0byBiZSBpbXBvcnRlZCBmcm9tIHRoZSByM19zeW1ib2xzLnRzXG4gKiBmaWxlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBSM1N5bWJvbHNJbXBvcnRSZXdyaXRlciBpbXBsZW1lbnRzIEltcG9ydFJld3JpdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByM1N5bWJvbHNQYXRoOiBzdHJpbmcpIHt9XG5cbiAgc2hvdWxkSW1wb3J0U3ltYm9sKHN5bWJvbDogc3RyaW5nLCBzcGVjaWZpZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV3cml0ZVN5bWJvbChzeW1ib2w6IHN0cmluZywgc3BlY2lmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzcGVjaWZpZXIgIT09IENPUkVfTU9EVUxFKSB7XG4gICAgICAvLyBUaGlzIGltcG9ydCBpc24ndCBmcm9tIGNvcmUsIHNvIGlnbm9yZSBpdC5cbiAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlQW5kUmV3cml0ZUNvcmVTeW1ib2woc3ltYm9sKTtcbiAgfVxuXG4gIHJld3JpdGVTcGVjaWZpZXIoc3BlY2lmaWVyOiBzdHJpbmcsIGluQ29udGV4dE9mRmlsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoc3BlY2lmaWVyICE9PSBDT1JFX01PRFVMRSkge1xuICAgICAgLy8gVGhpcyBtb2R1bGUgaXNuJ3QgY29yZSwgc28gaWdub3JlIGl0LlxuICAgICAgcmV0dXJuIHNwZWNpZmllcjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGl2ZVBhdGhUb1IzU3ltYm9scyA9IHJlbGF0aXZlUGF0aEJldHdlZW4oaW5Db250ZXh0T2ZGaWxlLCB0aGlzLnIzU3ltYm9sc1BhdGgpO1xuICAgIGlmIChyZWxhdGl2ZVBhdGhUb1IzU3ltYm9scyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcmV3cml0ZSBpbXBvcnQgaW5zaWRlICR7Q09SRV9NT0RVTEV9OiAke2luQ29udGV4dE9mRmlsZX0gLT4gJHtcbiAgICAgICAgICB0aGlzLnIzU3ltYm9sc1BhdGh9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGF0aXZlUGF0aFRvUjNTeW1ib2xzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFuZFJld3JpdGVDb3JlU3ltYm9sKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghQ09SRV9TVVBQT1JURURfU1lNQk9MUy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltcG9ydGluZyB1bmV4cGVjdGVkIHN5bWJvbCAke25hbWV9IHdoaWxlIGNvbXBpbGluZyAke0NPUkVfTU9EVUxFfWApO1xuICB9XG4gIHJldHVybiBDT1JFX1NVUFBPUlRFRF9TWU1CT0xTLmdldChuYW1lKSE7XG59XG4iXX0=