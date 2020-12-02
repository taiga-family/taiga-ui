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
        define("@angular/compiler-cli/src/ngtsc/shims/src/typecheck_shim", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    /**
     * A `ShimGenerator` which adds a type-checking file to the `ts.Program`.
     *
     * This is a requirement for performant template type-checking, as TypeScript will only reuse
     * information in the main program when creating the type-checking program if the set of files in
     * each are exactly the same. Thus, the main program also needs the synthetic type-checking file.
     */
    var TypeCheckShimGenerator = /** @class */ (function () {
        function TypeCheckShimGenerator(typeCheckFile) {
            this.typeCheckFile = typeCheckFile;
        }
        TypeCheckShimGenerator.prototype.recognize = function (fileName) {
            return fileName === this.typeCheckFile;
        };
        TypeCheckShimGenerator.prototype.generate = function (genFileName, readFile) {
            return ts.createSourceFile(genFileName, 'export const USED_FOR_NG_TYPE_CHECKING = true;', ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
        };
        return TypeCheckShimGenerator;
    }());
    exports.TypeCheckShimGenerator = TypeCheckShimGenerator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWNoZWNrX3NoaW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3NoaW1zL3NyYy90eXBlY2hlY2tfc2hpbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQU1qQzs7Ozs7O09BTUc7SUFDSDtRQUNFLGdDQUFvQixhQUE2QjtZQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBRyxDQUFDO1FBRXJELDBDQUFTLEdBQVQsVUFBVSxRQUF3QjtZQUNoQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLENBQUM7UUFFRCx5Q0FBUSxHQUFSLFVBQVMsV0FBMkIsRUFBRSxRQUFvRDtZQUV4RixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FDdEIsV0FBVyxFQUFFLGdEQUFnRCxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFDM0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQUFDLEFBYkQsSUFhQztJQWJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGh9IGZyb20gJy4uLy4uL2ZpbGVfc3lzdGVtJztcblxuaW1wb3J0IHtTaGltR2VuZXJhdG9yfSBmcm9tICcuL2FwaSc7XG5cbi8qKlxuICogQSBgU2hpbUdlbmVyYXRvcmAgd2hpY2ggYWRkcyBhIHR5cGUtY2hlY2tpbmcgZmlsZSB0byB0aGUgYHRzLlByb2dyYW1gLlxuICpcbiAqIFRoaXMgaXMgYSByZXF1aXJlbWVudCBmb3IgcGVyZm9ybWFudCB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nLCBhcyBUeXBlU2NyaXB0IHdpbGwgb25seSByZXVzZVxuICogaW5mb3JtYXRpb24gaW4gdGhlIG1haW4gcHJvZ3JhbSB3aGVuIGNyZWF0aW5nIHRoZSB0eXBlLWNoZWNraW5nIHByb2dyYW0gaWYgdGhlIHNldCBvZiBmaWxlcyBpblxuICogZWFjaCBhcmUgZXhhY3RseSB0aGUgc2FtZS4gVGh1cywgdGhlIG1haW4gcHJvZ3JhbSBhbHNvIG5lZWRzIHRoZSBzeW50aGV0aWMgdHlwZS1jaGVja2luZyBmaWxlLlxuICovXG5leHBvcnQgY2xhc3MgVHlwZUNoZWNrU2hpbUdlbmVyYXRvciBpbXBsZW1lbnRzIFNoaW1HZW5lcmF0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGVDaGVja0ZpbGU6IEFic29sdXRlRnNQYXRoKSB7fVxuXG4gIHJlY29nbml6ZShmaWxlTmFtZTogQWJzb2x1dGVGc1BhdGgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmlsZU5hbWUgPT09IHRoaXMudHlwZUNoZWNrRmlsZTtcbiAgfVxuXG4gIGdlbmVyYXRlKGdlbkZpbGVOYW1lOiBBYnNvbHV0ZUZzUGF0aCwgcmVhZEZpbGU6IChmaWxlTmFtZTogc3RyaW5nKSA9PiB0cy5Tb3VyY2VGaWxlIHwgbnVsbCk6XG4gICAgICB0cy5Tb3VyY2VGaWxlfG51bGwge1xuICAgIHJldHVybiB0cy5jcmVhdGVTb3VyY2VGaWxlKFxuICAgICAgICBnZW5GaWxlTmFtZSwgJ2V4cG9ydCBjb25zdCBVU0VEX0ZPUl9OR19UWVBFX0NIRUNLSU5HID0gdHJ1ZTsnLCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlLFxuICAgICAgICB0cy5TY3JpcHRLaW5kLlRTKTtcbiAgfVxufVxuIl19