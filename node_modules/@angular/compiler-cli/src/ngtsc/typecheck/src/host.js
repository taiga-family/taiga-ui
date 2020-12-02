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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/host", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A `ts.CompilerHost` which augments source files with type checking code from a
     * `TypeCheckContext`.
     */
    var TypeCheckProgramHost = /** @class */ (function () {
        function TypeCheckProgramHost(sfMap, delegate) {
            this.delegate = delegate;
            this.sfMap = sfMap;
            if (delegate.getDirectories !== undefined) {
                this.getDirectories = function (path) { return delegate.getDirectories(path); };
            }
            if (delegate.resolveModuleNames !== undefined) {
                this.resolveModuleNames = delegate.resolveModuleNames;
            }
        }
        TypeCheckProgramHost.prototype.getSourceFile = function (fileName, languageVersion, onError, shouldCreateNewSourceFile) {
            // Look in the cache for the source file.
            var sf = this.sfMap.get(fileName);
            if (sf === undefined) {
                // There should be no cache misses, but just in case, delegate getSourceFile in the event of
                // a cache miss.
                sf = this.delegate.getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile);
                sf && this.sfMap.set(fileName, sf);
            }
            else {
                // TypeScript doesn't allow returning redirect source files. To avoid unforseen errors we
                // return the original source file instead of the redirect target.
                var redirectInfo = sf.redirectInfo;
                if (redirectInfo !== undefined) {
                    sf = redirectInfo.unredirected;
                }
            }
            return sf;
        };
        // The rest of the methods simply delegate to the underlying `ts.CompilerHost`.
        TypeCheckProgramHost.prototype.getDefaultLibFileName = function (options) {
            return this.delegate.getDefaultLibFileName(options);
        };
        TypeCheckProgramHost.prototype.writeFile = function (fileName, data, writeByteOrderMark, onError, sourceFiles) {
            throw new Error("TypeCheckProgramHost should never write files");
        };
        TypeCheckProgramHost.prototype.getCurrentDirectory = function () {
            return this.delegate.getCurrentDirectory();
        };
        TypeCheckProgramHost.prototype.getCanonicalFileName = function (fileName) {
            return this.delegate.getCanonicalFileName(fileName);
        };
        TypeCheckProgramHost.prototype.useCaseSensitiveFileNames = function () {
            return this.delegate.useCaseSensitiveFileNames();
        };
        TypeCheckProgramHost.prototype.getNewLine = function () {
            return this.delegate.getNewLine();
        };
        TypeCheckProgramHost.prototype.fileExists = function (fileName) {
            return this.sfMap.has(fileName) || this.delegate.fileExists(fileName);
        };
        TypeCheckProgramHost.prototype.readFile = function (fileName) {
            return this.delegate.readFile(fileName);
        };
        return TypeCheckProgramHost;
    }());
    exports.TypeCheckProgramHost = TypeCheckProgramHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL3NyYy9ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBS0g7OztPQUdHO0lBQ0g7UUFRRSw4QkFBWSxLQUFpQyxFQUFVLFFBQXlCO1lBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1lBQzlFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRW5CLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxRQUFRLENBQUMsY0FBZSxDQUFDLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDO2FBQ3hFO1lBRUQsSUFBSSxRQUFRLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQ3ZEO1FBQ0gsQ0FBQztRQUVELDRDQUFhLEdBQWIsVUFDSSxRQUFnQixFQUFFLGVBQWdDLEVBQ2xELE9BQStDLEVBQy9DLHlCQUE2QztZQUMvQyx5Q0FBeUM7WUFDekMsSUFBSSxFQUFFLEdBQTRCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDcEIsNEZBQTRGO2dCQUM1RixnQkFBZ0I7Z0JBQ2hCLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDNUIsUUFBUSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUseUJBQXlCLENBQUMsQ0FBQztnQkFDbkUsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCx5RkFBeUY7Z0JBQ3pGLGtFQUFrRTtnQkFDbEUsSUFBTSxZQUFZLEdBQUksRUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDOUMsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO29CQUM5QixFQUFFLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztpQkFDaEM7YUFDRjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELCtFQUErRTtRQUUvRSxvREFBcUIsR0FBckIsVUFBc0IsT0FBMkI7WUFDL0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRCx3Q0FBUyxHQUFULFVBQ0ksUUFBZ0IsRUFBRSxJQUFZLEVBQUUsa0JBQTJCLEVBQzNELE9BQThDLEVBQzlDLFdBQW1EO1lBQ3JELE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRUQsa0RBQW1CLEdBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUlELG1EQUFvQixHQUFwQixVQUFxQixRQUFnQjtZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELHdEQUF5QixHQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFFRCx5Q0FBVSxHQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFFRCx5Q0FBVSxHQUFWLFVBQVcsUUFBZ0I7WUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBRUQsdUNBQVEsR0FBUixVQUFTLFFBQWdCO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQWpGRCxJQWlGQztJQWpGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtUeXBlQ2hlY2tDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xuXG4vKipcbiAqIEEgYHRzLkNvbXBpbGVySG9zdGAgd2hpY2ggYXVnbWVudHMgc291cmNlIGZpbGVzIHdpdGggdHlwZSBjaGVja2luZyBjb2RlIGZyb20gYVxuICogYFR5cGVDaGVja0NvbnRleHRgLlxuICovXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrUHJvZ3JhbUhvc3QgaW1wbGVtZW50cyB0cy5Db21waWxlckhvc3Qge1xuICAvKipcbiAgICogTWFwIG9mIHNvdXJjZSBmaWxlIG5hbWVzIHRvIGB0cy5Tb3VyY2VGaWxlYCBpbnN0YW5jZXMuXG4gICAqL1xuICBwcml2YXRlIHNmTWFwOiBNYXA8c3RyaW5nLCB0cy5Tb3VyY2VGaWxlPjtcblxuICByZWFkb25seSByZXNvbHZlTW9kdWxlTmFtZXM/OiB0cy5Db21waWxlckhvc3RbJ3Jlc29sdmVNb2R1bGVOYW1lcyddO1xuXG4gIGNvbnN0cnVjdG9yKHNmTWFwOiBNYXA8c3RyaW5nLCB0cy5Tb3VyY2VGaWxlPiwgcHJpdmF0ZSBkZWxlZ2F0ZTogdHMuQ29tcGlsZXJIb3N0KSB7XG4gICAgdGhpcy5zZk1hcCA9IHNmTWFwO1xuXG4gICAgaWYgKGRlbGVnYXRlLmdldERpcmVjdG9yaWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZ2V0RGlyZWN0b3JpZXMgPSAocGF0aDogc3RyaW5nKSA9PiBkZWxlZ2F0ZS5nZXREaXJlY3RvcmllcyEocGF0aCk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGVnYXRlLnJlc29sdmVNb2R1bGVOYW1lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlc29sdmVNb2R1bGVOYW1lcyA9IGRlbGVnYXRlLnJlc29sdmVNb2R1bGVOYW1lcztcbiAgICB9XG4gIH1cblxuICBnZXRTb3VyY2VGaWxlKFxuICAgICAgZmlsZU5hbWU6IHN0cmluZywgbGFuZ3VhZ2VWZXJzaW9uOiB0cy5TY3JpcHRUYXJnZXQsXG4gICAgICBvbkVycm9yPzogKChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpfHVuZGVmaW5lZCxcbiAgICAgIHNob3VsZENyZWF0ZU5ld1NvdXJjZUZpbGU/OiBib29sZWFufHVuZGVmaW5lZCk6IHRzLlNvdXJjZUZpbGV8dW5kZWZpbmVkIHtcbiAgICAvLyBMb29rIGluIHRoZSBjYWNoZSBmb3IgdGhlIHNvdXJjZSBmaWxlLlxuICAgIGxldCBzZjogdHMuU291cmNlRmlsZXx1bmRlZmluZWQgPSB0aGlzLnNmTWFwLmdldChmaWxlTmFtZSk7XG4gICAgaWYgKHNmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFRoZXJlIHNob3VsZCBiZSBubyBjYWNoZSBtaXNzZXMsIGJ1dCBqdXN0IGluIGNhc2UsIGRlbGVnYXRlIGdldFNvdXJjZUZpbGUgaW4gdGhlIGV2ZW50IG9mXG4gICAgICAvLyBhIGNhY2hlIG1pc3MuXG4gICAgICBzZiA9IHRoaXMuZGVsZWdhdGUuZ2V0U291cmNlRmlsZShcbiAgICAgICAgICBmaWxlTmFtZSwgbGFuZ3VhZ2VWZXJzaW9uLCBvbkVycm9yLCBzaG91bGRDcmVhdGVOZXdTb3VyY2VGaWxlKTtcbiAgICAgIHNmICYmIHRoaXMuc2ZNYXAuc2V0KGZpbGVOYW1lLCBzZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyByZXR1cm5pbmcgcmVkaXJlY3Qgc291cmNlIGZpbGVzLiBUbyBhdm9pZCB1bmZvcnNlZW4gZXJyb3JzIHdlXG4gICAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIGluc3RlYWQgb2YgdGhlIHJlZGlyZWN0IHRhcmdldC5cbiAgICAgIGNvbnN0IHJlZGlyZWN0SW5mbyA9IChzZiBhcyBhbnkpLnJlZGlyZWN0SW5mbztcbiAgICAgIGlmIChyZWRpcmVjdEluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZiA9IHJlZGlyZWN0SW5mby51bnJlZGlyZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZjtcbiAgfVxuXG4gIC8vIFRoZSByZXN0IG9mIHRoZSBtZXRob2RzIHNpbXBseSBkZWxlZ2F0ZSB0byB0aGUgdW5kZXJseWluZyBgdHMuQ29tcGlsZXJIb3N0YC5cblxuICBnZXREZWZhdWx0TGliRmlsZU5hbWUob3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXREZWZhdWx0TGliRmlsZU5hbWUob3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZUZpbGUoXG4gICAgICBmaWxlTmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIHdyaXRlQnl0ZU9yZGVyTWFyazogYm9vbGVhbixcbiAgICAgIG9uRXJyb3I6ICgobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKXx1bmRlZmluZWQsXG4gICAgICBzb3VyY2VGaWxlczogUmVhZG9ubHlBcnJheTx0cy5Tb3VyY2VGaWxlPnx1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFR5cGVDaGVja1Byb2dyYW1Ib3N0IHNob3VsZCBuZXZlciB3cml0ZSBmaWxlc2ApO1xuICB9XG5cbiAgZ2V0Q3VycmVudERpcmVjdG9yeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldEN1cnJlbnREaXJlY3RvcnkoKTtcbiAgfVxuXG4gIGdldERpcmVjdG9yaWVzPzogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nW107XG5cbiAgZ2V0Q2Fub25pY2FsRmlsZU5hbWUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0Q2Fub25pY2FsRmlsZU5hbWUoZmlsZU5hbWUpO1xuICB9XG5cbiAgdXNlQ2FzZVNlbnNpdGl2ZUZpbGVOYW1lcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS51c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzKCk7XG4gIH1cblxuICBnZXROZXdMaW5lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0TmV3TGluZSgpO1xuICB9XG5cbiAgZmlsZUV4aXN0cyhmaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2ZNYXAuaGFzKGZpbGVOYW1lKSB8fCB0aGlzLmRlbGVnYXRlLmZpbGVFeGlzdHMoZmlsZU5hbWUpO1xuICB9XG5cbiAgcmVhZEZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnJlYWRGaWxlKGZpbGVOYW1lKTtcbiAgfVxufSJdfQ==