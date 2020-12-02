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
        define("@angular/compiler-cli/src/ngtsc/entry_point/src/generator", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/util/src/path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference types="node" />
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var path_1 = require("@angular/compiler-cli/src/ngtsc/util/src/path");
    var FlatIndexGenerator = /** @class */ (function () {
        function FlatIndexGenerator(entryPoint, relativeFlatIndexPath, moduleName) {
            this.entryPoint = entryPoint;
            this.moduleName = moduleName;
            this.flatIndexPath =
                file_system_1.join(file_system_1.dirname(entryPoint), relativeFlatIndexPath).replace(/\.js$/, '') + '.ts';
        }
        FlatIndexGenerator.prototype.recognize = function (fileName) {
            return fileName === this.flatIndexPath;
        };
        FlatIndexGenerator.prototype.generate = function () {
            var relativeEntryPoint = path_1.relativePathBetween(this.flatIndexPath, this.entryPoint);
            var contents = "/**\n * Generated bundle index. Do not edit.\n */\n\nexport * from '" + relativeEntryPoint + "';\n";
            var genFile = ts.createSourceFile(this.flatIndexPath, contents, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS);
            if (this.moduleName !== null) {
                genFile.moduleName = this.moduleName;
            }
            return genFile;
        };
        return FlatIndexGenerator;
    }());
    exports.FlatIndexGenerator = FlatIndexGenerator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9lbnRyeV9wb2ludC9zcmMvZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsOEJBQThCO0lBRTlCLCtCQUFpQztJQUVqQywyRUFBZ0U7SUFFaEUsc0VBQXdEO0lBRXhEO1FBR0UsNEJBQ2EsVUFBMEIsRUFBRSxxQkFBNkIsRUFDekQsVUFBdUI7WUFEdkIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7WUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtZQUNsQyxJQUFJLENBQUMsYUFBYTtnQkFDZCxrQkFBSSxDQUFDLHFCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwRixDQUFDO1FBRUQsc0NBQVMsR0FBVCxVQUFVLFFBQWdCO1lBQ3hCLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsQ0FBQztRQUVELHFDQUFRLEdBQVI7WUFDRSxJQUFNLGtCQUFrQixHQUFHLDBCQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BGLElBQU0sUUFBUSxHQUFHLHlFQUlKLGtCQUFrQixTQUNsQyxDQUFDO1lBQ0UsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUM1QixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdEM7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLEFBN0JELElBNkJDO0lBN0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIgLz5cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIGRpcm5hbWUsIGpvaW59IGZyb20gJy4uLy4uL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7U2hpbUdlbmVyYXRvcn0gZnJvbSAnLi4vLi4vc2hpbXMnO1xuaW1wb3J0IHtyZWxhdGl2ZVBhdGhCZXR3ZWVufSBmcm9tICcuLi8uLi91dGlsL3NyYy9wYXRoJztcblxuZXhwb3J0IGNsYXNzIEZsYXRJbmRleEdlbmVyYXRvciBpbXBsZW1lbnRzIFNoaW1HZW5lcmF0b3Ige1xuICByZWFkb25seSBmbGF0SW5kZXhQYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBlbnRyeVBvaW50OiBBYnNvbHV0ZUZzUGF0aCwgcmVsYXRpdmVGbGF0SW5kZXhQYXRoOiBzdHJpbmcsXG4gICAgICByZWFkb25seSBtb2R1bGVOYW1lOiBzdHJpbmd8bnVsbCkge1xuICAgIHRoaXMuZmxhdEluZGV4UGF0aCA9XG4gICAgICAgIGpvaW4oZGlybmFtZShlbnRyeVBvaW50KSwgcmVsYXRpdmVGbGF0SW5kZXhQYXRoKS5yZXBsYWNlKC9cXC5qcyQvLCAnJykgKyAnLnRzJztcbiAgfVxuXG4gIHJlY29nbml6ZShmaWxlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbGVOYW1lID09PSB0aGlzLmZsYXRJbmRleFBhdGg7XG4gIH1cblxuICBnZW5lcmF0ZSgpOiB0cy5Tb3VyY2VGaWxlIHtcbiAgICBjb25zdCByZWxhdGl2ZUVudHJ5UG9pbnQgPSByZWxhdGl2ZVBhdGhCZXR3ZWVuKHRoaXMuZmxhdEluZGV4UGF0aCwgdGhpcy5lbnRyeVBvaW50KTtcbiAgICBjb25zdCBjb250ZW50cyA9IGAvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJyR7cmVsYXRpdmVFbnRyeVBvaW50fSc7XG5gO1xuICAgIGNvbnN0IGdlbkZpbGUgPSB0cy5jcmVhdGVTb3VyY2VGaWxlKFxuICAgICAgICB0aGlzLmZsYXRJbmRleFBhdGgsIGNvbnRlbnRzLCB0cy5TY3JpcHRUYXJnZXQuRVMyMDE1LCB0cnVlLCB0cy5TY3JpcHRLaW5kLlRTKTtcbiAgICBpZiAodGhpcy5tb2R1bGVOYW1lICE9PSBudWxsKSB7XG4gICAgICBnZW5GaWxlLm1vZHVsZU5hbWUgPSB0aGlzLm1vZHVsZU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBnZW5GaWxlO1xuICB9XG59XG4iXX0=