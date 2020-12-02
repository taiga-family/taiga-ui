/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/update-tool/utils/parse-tsconfig", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    function parseTsconfigFile(tsconfigPath, basePath) {
        const { config } = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
        const parseConfigHost = {
            useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
            fileExists: ts.sys.fileExists,
            readDirectory: ts.sys.readDirectory,
            readFile: ts.sys.readFile,
        };
        return ts.parseJsonConfigFileContent(config, parseConfigHost, basePath, {});
    }
    exports.parseTsconfigFile = parseTsconfigFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtdHNjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXBkYXRlLXRvb2wvdXRpbHMvcGFyc2UtdHNjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxpQ0FBaUM7SUFFakMsU0FBZ0IsaUJBQWlCLENBQUMsWUFBb0IsRUFBRSxRQUFnQjtRQUN0RSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxNQUFNLGVBQWUsR0FBRztZQUN0Qix5QkFBeUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QjtZQUMzRCxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQzdCLGFBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWE7WUFDbkMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUTtTQUMxQixDQUFDO1FBSUYsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQVpELDhDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUc2NvbmZpZ0ZpbGUodHNjb25maWdQYXRoOiBzdHJpbmcsIGJhc2VQYXRoOiBzdHJpbmcpOiB0cy5QYXJzZWRDb21tYW5kTGluZSB7XG4gIGNvbnN0IHtjb25maWd9ID0gdHMucmVhZENvbmZpZ0ZpbGUodHNjb25maWdQYXRoLCB0cy5zeXMucmVhZEZpbGUpO1xuICBjb25zdCBwYXJzZUNvbmZpZ0hvc3QgPSB7XG4gICAgdXNlQ2FzZVNlbnNpdGl2ZUZpbGVOYW1lczogdHMuc3lzLnVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXMsXG4gICAgZmlsZUV4aXN0czogdHMuc3lzLmZpbGVFeGlzdHMsXG4gICAgcmVhZERpcmVjdG9yeTogdHMuc3lzLnJlYWREaXJlY3RvcnksXG4gICAgcmVhZEZpbGU6IHRzLnN5cy5yZWFkRmlsZSxcbiAgfTtcblxuXG5cbiAgcmV0dXJuIHRzLnBhcnNlSnNvbkNvbmZpZ0ZpbGVDb250ZW50KGNvbmZpZywgcGFyc2VDb25maWdIb3N0LCBiYXNlUGF0aCwge30pO1xufVxuIl19