(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/ngcc_compiler_host", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/utils"], factory);
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
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    /**
     * Represents a compiler host that resolves a module import as a JavaScript source file if
     * available, instead of the .d.ts typings file that would have been resolved by TypeScript. This
     * is necessary for packages that have their typings in the same directory as the sources, which
     * would otherwise let TypeScript prefer the .d.ts file instead of the JavaScript source file.
     */
    var NgccSourcesCompilerHost = /** @class */ (function (_super) {
        tslib_1.__extends(NgccSourcesCompilerHost, _super);
        function NgccSourcesCompilerHost(fs, options, entryPointPath) {
            var _this = _super.call(this, fs, options) || this;
            _this.entryPointPath = entryPointPath;
            _this.cache = ts.createModuleResolutionCache(_this.getCurrentDirectory(), function (file) { return _this.getCanonicalFileName(file); });
            return _this;
        }
        NgccSourcesCompilerHost.prototype.resolveModuleNames = function (moduleNames, containingFile, reusedNames, redirectedReference) {
            var _this = this;
            return moduleNames.map(function (moduleName) {
                var resolvedModule = ts.resolveModuleName(moduleName, containingFile, _this.options, _this, _this.cache, redirectedReference).resolvedModule;
                // If the module request originated from a relative import in a JavaScript source file,
                // TypeScript may have resolved the module to its .d.ts declaration file if the .js source
                // file was in the same directory. This is undesirable, as we need to have the actual
                // JavaScript being present in the program. This logic recognizes this scenario and rewrites
                // the resolved .d.ts declaration file to its .js counterpart, if it exists.
                if (resolvedModule !== undefined && resolvedModule.extension === ts.Extension.Dts &&
                    containingFile.endsWith('.js') && utils_1.isRelativePath(moduleName)) {
                    var jsFile = resolvedModule.resolvedFileName.replace(/\.d\.ts$/, '.js');
                    if (_this.fileExists(jsFile)) {
                        return tslib_1.__assign(tslib_1.__assign({}, resolvedModule), { resolvedFileName: jsFile, extension: ts.Extension.Js });
                    }
                }
                return resolvedModule;
            });
        };
        return NgccSourcesCompilerHost;
    }(file_system_1.NgtscCompilerHost));
    exports.NgccSourcesCompilerHost = NgccSourcesCompilerHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjY19jb21waWxlcl9ob3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3BhY2thZ2VzL25nY2NfY29tcGlsZXJfaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCwrQkFBaUM7SUFFakMsMkVBQTZFO0lBQzdFLDhEQUF3QztJQUV4Qzs7Ozs7T0FLRztJQUNIO1FBQTZDLG1EQUFpQjtRQUk1RCxpQ0FBWSxFQUFjLEVBQUUsT0FBMkIsRUFBWSxjQUFzQjtZQUF6RixZQUNFLGtCQUFNLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FDbkI7WUFGa0Usb0JBQWMsR0FBZCxjQUFjLENBQVE7WUFIakYsV0FBSyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FDMUMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQzs7UUFJekUsQ0FBQztRQUVELG9EQUFrQixHQUFsQixVQUNJLFdBQXFCLEVBQUUsY0FBc0IsRUFBRSxXQUFzQixFQUNyRSxtQkFBaUQ7WUFGckQsaUJBcUJDO1lBbEJDLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFVBQVU7Z0JBQ3hCLElBQUEsd0lBQWMsQ0FDZ0U7Z0JBRXJGLHVGQUF1RjtnQkFDdkYsMEZBQTBGO2dCQUMxRixxRkFBcUY7Z0JBQ3JGLDRGQUE0RjtnQkFDNUYsNEVBQTRFO2dCQUM1RSxJQUFJLGNBQWMsS0FBSyxTQUFTLElBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUc7b0JBQzdFLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksc0JBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDaEUsSUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzFFLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDM0IsNkNBQVcsY0FBYyxLQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUU7cUJBQ2xGO2lCQUNGO2dCQUNELE9BQU8sY0FBYyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILDhCQUFDO0lBQUQsQ0FBQyxBQTlCRCxDQUE2QywrQkFBaUIsR0E4QjdEO0lBOUJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ZpbGVTeXN0ZW0sIE5ndHNjQ29tcGlsZXJIb3N0fSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtpc1JlbGF0aXZlUGF0aH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb21waWxlciBob3N0IHRoYXQgcmVzb2x2ZXMgYSBtb2R1bGUgaW1wb3J0IGFzIGEgSmF2YVNjcmlwdCBzb3VyY2UgZmlsZSBpZlxuICogYXZhaWxhYmxlLCBpbnN0ZWFkIG9mIHRoZSAuZC50cyB0eXBpbmdzIGZpbGUgdGhhdCB3b3VsZCBoYXZlIGJlZW4gcmVzb2x2ZWQgYnkgVHlwZVNjcmlwdC4gVGhpc1xuICogaXMgbmVjZXNzYXJ5IGZvciBwYWNrYWdlcyB0aGF0IGhhdmUgdGhlaXIgdHlwaW5ncyBpbiB0aGUgc2FtZSBkaXJlY3RvcnkgYXMgdGhlIHNvdXJjZXMsIHdoaWNoXG4gKiB3b3VsZCBvdGhlcndpc2UgbGV0IFR5cGVTY3JpcHQgcHJlZmVyIHRoZSAuZC50cyBmaWxlIGluc3RlYWQgb2YgdGhlIEphdmFTY3JpcHQgc291cmNlIGZpbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ2NjU291cmNlc0NvbXBpbGVySG9zdCBleHRlbmRzIE5ndHNjQ29tcGlsZXJIb3N0IHtcbiAgcHJpdmF0ZSBjYWNoZSA9IHRzLmNyZWF0ZU1vZHVsZVJlc29sdXRpb25DYWNoZShcbiAgICAgIHRoaXMuZ2V0Q3VycmVudERpcmVjdG9yeSgpLCBmaWxlID0+IHRoaXMuZ2V0Q2Fub25pY2FsRmlsZU5hbWUoZmlsZSkpO1xuXG4gIGNvbnN0cnVjdG9yKGZzOiBGaWxlU3lzdGVtLCBvcHRpb25zOiB0cy5Db21waWxlck9wdGlvbnMsIHByb3RlY3RlZCBlbnRyeVBvaW50UGF0aDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmVzb2x2ZU1vZHVsZU5hbWVzKFxuICAgICAgbW9kdWxlTmFtZXM6IHN0cmluZ1tdLCBjb250YWluaW5nRmlsZTogc3RyaW5nLCByZXVzZWROYW1lcz86IHN0cmluZ1tdLFxuICAgICAgcmVkaXJlY3RlZFJlZmVyZW5jZT86IHRzLlJlc29sdmVkUHJvamVjdFJlZmVyZW5jZSk6IEFycmF5PHRzLlJlc29sdmVkTW9kdWxlfHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBtb2R1bGVOYW1lcy5tYXAobW9kdWxlTmFtZSA9PiB7XG4gICAgICBjb25zdCB7cmVzb2x2ZWRNb2R1bGV9ID0gdHMucmVzb2x2ZU1vZHVsZU5hbWUoXG4gICAgICAgICAgbW9kdWxlTmFtZSwgY29udGFpbmluZ0ZpbGUsIHRoaXMub3B0aW9ucywgdGhpcywgdGhpcy5jYWNoZSwgcmVkaXJlY3RlZFJlZmVyZW5jZSk7XG5cbiAgICAgIC8vIElmIHRoZSBtb2R1bGUgcmVxdWVzdCBvcmlnaW5hdGVkIGZyb20gYSByZWxhdGl2ZSBpbXBvcnQgaW4gYSBKYXZhU2NyaXB0IHNvdXJjZSBmaWxlLFxuICAgICAgLy8gVHlwZVNjcmlwdCBtYXkgaGF2ZSByZXNvbHZlZCB0aGUgbW9kdWxlIHRvIGl0cyAuZC50cyBkZWNsYXJhdGlvbiBmaWxlIGlmIHRoZSAuanMgc291cmNlXG4gICAgICAvLyBmaWxlIHdhcyBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuIFRoaXMgaXMgdW5kZXNpcmFibGUsIGFzIHdlIG5lZWQgdG8gaGF2ZSB0aGUgYWN0dWFsXG4gICAgICAvLyBKYXZhU2NyaXB0IGJlaW5nIHByZXNlbnQgaW4gdGhlIHByb2dyYW0uIFRoaXMgbG9naWMgcmVjb2duaXplcyB0aGlzIHNjZW5hcmlvIGFuZCByZXdyaXRlc1xuICAgICAgLy8gdGhlIHJlc29sdmVkIC5kLnRzIGRlY2xhcmF0aW9uIGZpbGUgdG8gaXRzIC5qcyBjb3VudGVycGFydCwgaWYgaXQgZXhpc3RzLlxuICAgICAgaWYgKHJlc29sdmVkTW9kdWxlICE9PSB1bmRlZmluZWQgJiYgcmVzb2x2ZWRNb2R1bGUuZXh0ZW5zaW9uID09PSB0cy5FeHRlbnNpb24uRHRzICYmXG4gICAgICAgICAgY29udGFpbmluZ0ZpbGUuZW5kc1dpdGgoJy5qcycpICYmIGlzUmVsYXRpdmVQYXRoKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGpzRmlsZSA9IHJlc29sdmVkTW9kdWxlLnJlc29sdmVkRmlsZU5hbWUucmVwbGFjZSgvXFwuZFxcLnRzJC8sICcuanMnKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsZUV4aXN0cyhqc0ZpbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHsuLi5yZXNvbHZlZE1vZHVsZSwgcmVzb2x2ZWRGaWxlTmFtZToganNGaWxlLCBleHRlbnNpb246IHRzLkV4dGVuc2lvbi5Kc307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlZE1vZHVsZTtcbiAgICB9KTtcbiAgfVxufVxuIl19