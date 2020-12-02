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
        define("@angular/compiler-cli/src/transformers/util", ["require", "exports", "tslib", "@angular/compiler", "path", "typescript", "@angular/compiler-cli/src/transformers/api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var path = require("path");
    var ts = require("typescript");
    var api_1 = require("@angular/compiler-cli/src/transformers/api");
    exports.GENERATED_FILES = /(.*?)\.(ngfactory|shim\.ngstyle|ngstyle|ngsummary)\.(js|d\.ts|ts)$/;
    exports.DTS = /\.d\.ts$/;
    exports.TS = /^(?!.*\.d\.ts$).*\.ts$/;
    // Note: This is an internal property in TypeScript. Use it only for assertions and tests.
    function tsStructureIsReused(program) {
        return program.structureIsReused;
    }
    exports.tsStructureIsReused = tsStructureIsReused;
    function error(msg) {
        throw new Error("Internal error: " + msg);
    }
    exports.error = error;
    function userError(msg) {
        throw compiler_1.syntaxError(msg);
    }
    exports.userError = userError;
    function createMessageDiagnostic(messageText) {
        return {
            file: undefined,
            start: undefined,
            length: undefined,
            category: ts.DiagnosticCategory.Message,
            messageText: messageText,
            code: api_1.DEFAULT_ERROR_CODE,
            source: api_1.SOURCE,
        };
    }
    exports.createMessageDiagnostic = createMessageDiagnostic;
    function isInRootDir(fileName, options) {
        return !options.rootDir || pathStartsWithPrefix(options.rootDir, fileName);
    }
    exports.isInRootDir = isInRootDir;
    function relativeToRootDirs(filePath, rootDirs) {
        var e_1, _a;
        if (!filePath)
            return filePath;
        try {
            for (var _b = tslib_1.__values(rootDirs || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dir = _c.value;
                var rel = pathStartsWithPrefix(dir, filePath);
                if (rel) {
                    return rel;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filePath;
    }
    exports.relativeToRootDirs = relativeToRootDirs;
    function pathStartsWithPrefix(prefix, fullPath) {
        var rel = path.relative(prefix, fullPath);
        return rel.startsWith('..') ? null : rel;
    }
    /**
     * Converts a ng.Diagnostic into a ts.Diagnostic.
     * This looses some information, and also uses an incomplete object as `file`.
     *
     * I.e. only use this where the API allows only a ts.Diagnostic.
     */
    function ngToTsDiagnostic(ng) {
        var file;
        var start;
        var length;
        if (ng.span) {
            // Note: We can't use a real ts.SourceFile,
            // but we can at least mirror the properties `fileName` and `text`, which
            // are mostly used for error reporting.
            file = { fileName: ng.span.start.file.url, text: ng.span.start.file.content };
            start = ng.span.start.offset;
            length = ng.span.end.offset - start;
        }
        return {
            file: file,
            messageText: ng.messageText,
            category: ng.category,
            code: ng.code,
            start: start,
            length: length,
        };
    }
    exports.ngToTsDiagnostic = ngToTsDiagnostic;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvdHJhbnNmb3JtZXJzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOENBQThDO0lBQzlDLDJCQUE2QjtJQUM3QiwrQkFBaUM7SUFFakMsa0VBQThFO0lBRWpFLFFBQUEsZUFBZSxHQUFHLG9FQUFvRSxDQUFDO0lBQ3ZGLFFBQUEsR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNqQixRQUFBLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQztJQVEzQywwRkFBMEY7SUFDMUYsU0FBZ0IsbUJBQW1CLENBQUMsT0FBbUI7UUFDckQsT0FBUSxPQUFlLENBQUMsaUJBQWlCLENBQUM7SUFDNUMsQ0FBQztJQUZELGtEQUVDO0lBRUQsU0FBZ0IsS0FBSyxDQUFDLEdBQVc7UUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBbUIsR0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUZELHNCQUVDO0lBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQVc7UUFDbkMsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFGRCw4QkFFQztJQUVELFNBQWdCLHVCQUF1QixDQUFDLFdBQW1CO1FBQ3pELE9BQU87WUFDTCxJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTztZQUN2QyxXQUFXLGFBQUE7WUFDWCxJQUFJLEVBQUUsd0JBQWtCO1lBQ3hCLE1BQU0sRUFBRSxZQUFNO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFWRCwwREFVQztJQUVELFNBQWdCLFdBQVcsQ0FBQyxRQUFnQixFQUFFLE9BQXdCO1FBQ3BFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUZELGtDQUVDO0lBRUQsU0FBZ0Isa0JBQWtCLENBQUMsUUFBZ0IsRUFBRSxRQUFrQjs7UUFDckUsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLFFBQVEsQ0FBQzs7WUFDL0IsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLFFBQVEsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTdCLElBQU0sR0FBRyxXQUFBO2dCQUNaLElBQU0sR0FBRyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsT0FBTyxHQUFHLENBQUM7aUJBQ1o7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQVRELGdEQVNDO0lBRUQsU0FBUyxvQkFBb0IsQ0FBQyxNQUFjLEVBQUUsUUFBZ0I7UUFDNUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyxFQUFjO1FBQzdDLElBQUksSUFBNkIsQ0FBQztRQUNsQyxJQUFJLEtBQXVCLENBQUM7UUFDNUIsSUFBSSxNQUF3QixDQUFDO1FBQzdCLElBQUksRUFBRSxDQUFDLElBQUksRUFBRTtZQUNYLDJDQUEyQztZQUMzQyx5RUFBeUU7WUFDekUsdUNBQXVDO1lBQ3ZDLElBQUksR0FBRyxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFrQixDQUFDO1lBQzdGLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDN0IsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7UUFDRCxPQUFPO1lBQ0wsSUFBSSxNQUFBO1lBQ0osV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXO1lBQzNCLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUTtZQUNyQixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7U0FDUCxDQUFDO0lBQ0osQ0FBQztJQXBCRCw0Q0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7c3ludGF4RXJyb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtDb21waWxlck9wdGlvbnMsIERFRkFVTFRfRVJST1JfQ09ERSwgRGlhZ25vc3RpYywgU09VUkNFfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBHRU5FUkFURURfRklMRVMgPSAvKC4qPylcXC4obmdmYWN0b3J5fHNoaW1cXC5uZ3N0eWxlfG5nc3R5bGV8bmdzdW1tYXJ5KVxcLihqc3xkXFwudHN8dHMpJC87XG5leHBvcnQgY29uc3QgRFRTID0gL1xcLmRcXC50cyQvO1xuZXhwb3J0IGNvbnN0IFRTID0gL14oPyEuKlxcLmRcXC50cyQpLipcXC50cyQvO1xuXG5leHBvcnQgY29uc3QgZW51bSBTdHJ1Y3R1cmVJc1JldXNlZCB7XG4gIE5vdCA9IDAsXG4gIFNhZmVNb2R1bGVzID0gMSxcbiAgQ29tcGxldGVseSA9IDJcbn1cblxuLy8gTm90ZTogVGhpcyBpcyBhbiBpbnRlcm5hbCBwcm9wZXJ0eSBpbiBUeXBlU2NyaXB0LiBVc2UgaXQgb25seSBmb3IgYXNzZXJ0aW9ucyBhbmQgdGVzdHMuXG5leHBvcnQgZnVuY3Rpb24gdHNTdHJ1Y3R1cmVJc1JldXNlZChwcm9ncmFtOiB0cy5Qcm9ncmFtKTogU3RydWN0dXJlSXNSZXVzZWQge1xuICByZXR1cm4gKHByb2dyYW0gYXMgYW55KS5zdHJ1Y3R1cmVJc1JldXNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKG1zZzogc3RyaW5nKTogbmV2ZXIge1xuICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIGVycm9yOiAke21zZ31gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJFcnJvcihtc2c6IHN0cmluZyk6IG5ldmVyIHtcbiAgdGhyb3cgc3ludGF4RXJyb3IobXNnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VEaWFnbm9zdGljKG1lc3NhZ2VUZXh0OiBzdHJpbmcpOiB0cy5EaWFnbm9zdGljJkRpYWdub3N0aWMge1xuICByZXR1cm4ge1xuICAgIGZpbGU6IHVuZGVmaW5lZCxcbiAgICBzdGFydDogdW5kZWZpbmVkLFxuICAgIGxlbmd0aDogdW5kZWZpbmVkLFxuICAgIGNhdGVnb3J5OiB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkuTWVzc2FnZSxcbiAgICBtZXNzYWdlVGV4dCxcbiAgICBjb2RlOiBERUZBVUxUX0VSUk9SX0NPREUsXG4gICAgc291cmNlOiBTT1VSQ0UsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luUm9vdERpcihmaWxlTmFtZTogc3RyaW5nLCBvcHRpb25zOiBDb21waWxlck9wdGlvbnMpIHtcbiAgcmV0dXJuICFvcHRpb25zLnJvb3REaXIgfHwgcGF0aFN0YXJ0c1dpdGhQcmVmaXgob3B0aW9ucy5yb290RGlyLCBmaWxlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRvUm9vdERpcnMoZmlsZVBhdGg6IHN0cmluZywgcm9vdERpcnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgaWYgKCFmaWxlUGF0aCkgcmV0dXJuIGZpbGVQYXRoO1xuICBmb3IgKGNvbnN0IGRpciBvZiByb290RGlycyB8fCBbXSkge1xuICAgIGNvbnN0IHJlbCA9IHBhdGhTdGFydHNXaXRoUHJlZml4KGRpciwgZmlsZVBhdGgpO1xuICAgIGlmIChyZWwpIHtcbiAgICAgIHJldHVybiByZWw7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gcGF0aFN0YXJ0c1dpdGhQcmVmaXgocHJlZml4OiBzdHJpbmcsIGZ1bGxQYXRoOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gIGNvbnN0IHJlbCA9IHBhdGgucmVsYXRpdmUocHJlZml4LCBmdWxsUGF0aCk7XG4gIHJldHVybiByZWwuc3RhcnRzV2l0aCgnLi4nKSA/IG51bGwgOiByZWw7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBuZy5EaWFnbm9zdGljIGludG8gYSB0cy5EaWFnbm9zdGljLlxuICogVGhpcyBsb29zZXMgc29tZSBpbmZvcm1hdGlvbiwgYW5kIGFsc28gdXNlcyBhbiBpbmNvbXBsZXRlIG9iamVjdCBhcyBgZmlsZWAuXG4gKlxuICogSS5lLiBvbmx5IHVzZSB0aGlzIHdoZXJlIHRoZSBBUEkgYWxsb3dzIG9ubHkgYSB0cy5EaWFnbm9zdGljLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmdUb1RzRGlhZ25vc3RpYyhuZzogRGlhZ25vc3RpYyk6IHRzLkRpYWdub3N0aWMge1xuICBsZXQgZmlsZTogdHMuU291cmNlRmlsZXx1bmRlZmluZWQ7XG4gIGxldCBzdGFydDogbnVtYmVyfHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aDogbnVtYmVyfHVuZGVmaW5lZDtcbiAgaWYgKG5nLnNwYW4pIHtcbiAgICAvLyBOb3RlOiBXZSBjYW4ndCB1c2UgYSByZWFsIHRzLlNvdXJjZUZpbGUsXG4gICAgLy8gYnV0IHdlIGNhbiBhdCBsZWFzdCBtaXJyb3IgdGhlIHByb3BlcnRpZXMgYGZpbGVOYW1lYCBhbmQgYHRleHRgLCB3aGljaFxuICAgIC8vIGFyZSBtb3N0bHkgdXNlZCBmb3IgZXJyb3IgcmVwb3J0aW5nLlxuICAgIGZpbGUgPSB7ZmlsZU5hbWU6IG5nLnNwYW4uc3RhcnQuZmlsZS51cmwsIHRleHQ6IG5nLnNwYW4uc3RhcnQuZmlsZS5jb250ZW50fSBhcyB0cy5Tb3VyY2VGaWxlO1xuICAgIHN0YXJ0ID0gbmcuc3Bhbi5zdGFydC5vZmZzZXQ7XG4gICAgbGVuZ3RoID0gbmcuc3Bhbi5lbmQub2Zmc2V0IC0gc3RhcnQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlLFxuICAgIG1lc3NhZ2VUZXh0OiBuZy5tZXNzYWdlVGV4dCxcbiAgICBjYXRlZ29yeTogbmcuY2F0ZWdvcnksXG4gICAgY29kZTogbmcuY29kZSxcbiAgICBzdGFydCxcbiAgICBsZW5ndGgsXG4gIH07XG59XG4iXX0=