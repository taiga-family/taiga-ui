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
        define("@angular/compiler-cli/src/ngtsc/util/src/typescript", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var TS = /\.tsx?$/i;
    var D_TS = /\.d\.ts$/i;
    var ts = require("typescript");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    function isDtsPath(filePath) {
        return D_TS.test(filePath);
    }
    exports.isDtsPath = isDtsPath;
    function isNonDeclarationTsPath(filePath) {
        return TS.test(filePath) && !D_TS.test(filePath);
    }
    exports.isNonDeclarationTsPath = isNonDeclarationTsPath;
    function isFromDtsFile(node) {
        var sf = node.getSourceFile();
        if (sf === undefined) {
            sf = ts.getOriginalNode(node).getSourceFile();
        }
        return sf !== undefined && sf.isDeclarationFile;
    }
    exports.isFromDtsFile = isFromDtsFile;
    function nodeNameForError(node) {
        if (node.name !== undefined && ts.isIdentifier(node.name)) {
            return node.name.text;
        }
        else {
            var kind = ts.SyntaxKind[node.kind];
            var _a = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart()), line = _a.line, character = _a.character;
            return kind + "@" + line + ":" + character;
        }
    }
    exports.nodeNameForError = nodeNameForError;
    function getSourceFile(node) {
        // In certain transformation contexts, `ts.Node.getSourceFile()` can actually return `undefined`,
        // despite the type signature not allowing it. In that event, get the `ts.SourceFile` via the
        // original node instead (which works).
        var directSf = node.getSourceFile();
        return directSf !== undefined ? directSf : ts.getOriginalNode(node).getSourceFile();
    }
    exports.getSourceFile = getSourceFile;
    function getSourceFileOrNull(program, fileName) {
        return program.getSourceFile(fileName) || null;
    }
    exports.getSourceFileOrNull = getSourceFileOrNull;
    function getTokenAtPosition(sf, pos) {
        // getTokenAtPosition is part of TypeScript's private API.
        return ts.getTokenAtPosition(sf, pos);
    }
    exports.getTokenAtPosition = getTokenAtPosition;
    function identifierOfNode(decl) {
        if (decl.name !== undefined && ts.isIdentifier(decl.name)) {
            return decl.name;
        }
        else {
            return null;
        }
    }
    exports.identifierOfNode = identifierOfNode;
    function isDeclaration(node) {
        return isValueDeclaration(node) || isTypeDeclaration(node);
    }
    exports.isDeclaration = isDeclaration;
    function isValueDeclaration(node) {
        return ts.isClassDeclaration(node) || ts.isFunctionDeclaration(node) ||
            ts.isVariableDeclaration(node);
    }
    exports.isValueDeclaration = isValueDeclaration;
    function isTypeDeclaration(node) {
        return ts.isEnumDeclaration(node) || ts.isTypeAliasDeclaration(node) ||
            ts.isInterfaceDeclaration(node);
    }
    exports.isTypeDeclaration = isTypeDeclaration;
    function isExported(node) {
        var topLevel = node;
        if (ts.isVariableDeclaration(node) && ts.isVariableDeclarationList(node.parent)) {
            topLevel = node.parent.parent;
        }
        return topLevel.modifiers !== undefined &&
            topLevel.modifiers.some(function (modifier) { return modifier.kind === ts.SyntaxKind.ExportKeyword; });
    }
    exports.isExported = isExported;
    function getRootDirs(host, options) {
        var rootDirs = [];
        if (options.rootDirs !== undefined) {
            rootDirs.push.apply(rootDirs, tslib_1.__spread(options.rootDirs));
        }
        else if (options.rootDir !== undefined) {
            rootDirs.push(options.rootDir);
        }
        else {
            rootDirs.push(host.getCurrentDirectory());
        }
        // In Windows the above might not always return posix separated paths
        // See:
        // https://github.com/Microsoft/TypeScript/blob/3f7357d37f66c842d70d835bc925ec2a873ecfec/src/compiler/sys.ts#L650
        // Also compiler options might be set via an API which doesn't normalize paths
        return rootDirs.map(function (rootDir) { return file_system_1.absoluteFrom(rootDir); });
    }
    exports.getRootDirs = getRootDirs;
    function nodeDebugInfo(node) {
        var sf = getSourceFile(node);
        var _a = ts.getLineAndCharacterOfPosition(sf, node.pos), line = _a.line, character = _a.character;
        return "[" + sf.fileName + ": " + ts.SyntaxKind[node.kind] + " @ " + line + ":" + character + "]";
    }
    exports.nodeDebugInfo = nodeDebugInfo;
    /**
     * Resolve the specified `moduleName` using the given `compilerOptions` and `compilerHost`.
     *
     * This helper will attempt to use the `CompilerHost.resolveModuleNames()` method if available.
     * Otherwise it will fallback on the `ts.ResolveModuleName()` function.
     */
    function resolveModuleName(moduleName, containingFile, compilerOptions, compilerHost, moduleResolutionCache) {
        if (compilerHost.resolveModuleNames) {
            // FIXME: Additional parameters are required in TS3.6, but ignored in 3.5.
            // Remove the any cast once google3 is fully on TS3.6.
            return compilerHost
                .resolveModuleNames([moduleName], containingFile, undefined, undefined, compilerOptions)[0];
        }
        else {
            return ts
                .resolveModuleName(moduleName, containingFile, compilerOptions, compilerHost, moduleResolutionCache !== null ? moduleResolutionCache : undefined)
                .resolvedModule;
        }
    }
    exports.resolveModuleName = resolveModuleName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdXRpbC9zcmMvdHlwZXNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDdEIsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBRXpCLCtCQUFpQztJQUNqQywyRUFBK0Q7SUFFL0QsU0FBZ0IsU0FBUyxDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRkQsOEJBRUM7SUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxRQUFnQjtRQUNyRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFGRCx3REFFQztJQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFhO1FBQ3pDLElBQUksRUFBRSxHQUE0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkQsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BCLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNsRCxDQUFDO0lBTkQsc0NBTUM7SUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUE4QjtRQUM3RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pELE9BQU8sSUFBSSxD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Q0FBQyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO2FBQU07WUFDTCxPQUFPLEVBQUU7aUJBQ0osaUJBQWlCLENBQ2QsVUFBVSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUN6RCxxQkFBcUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7aUJBQ3RFLGNBQWMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFoQkQsOENBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBUUyA9IC9cXC50c3g/JC9pO1xuY29uc3QgRF9UUyA9IC9cXC5kXFwudHMkL2k7XG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgYWJzb2x1dGVGcm9tfSBmcm9tICcuLi8uLi9maWxlX3N5c3RlbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R0c1BhdGgoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gRF9UUy50ZXN0KGZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRGVjbGFyYXRpb25Uc1BhdGgoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVFMudGVzdChmaWxlUGF0aCkgJiYgIURfVFMudGVzdChmaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21EdHNGaWxlKG5vZGU6IHRzLk5vZGUpOiBib29sZWFuIHtcbiAgbGV0IHNmOiB0cy5Tb3VyY2VGaWxlfHVuZGVmaW5lZCA9IG5vZGUuZ2V0U291cmNlRmlsZSgpO1xuICBpZiAoc2YgPT09IHVuZGVmaW5lZCkge1xuICAgIHNmID0gdHMuZ2V0T3JpZ2luYWxOb2RlKG5vZGUpLmdldFNvdXJjZUZpbGUoKTtcbiAgfVxuICByZXR1cm4gc2YgIT09IHVuZGVmaW5lZCAmJiBzZi5pc0RlY2xhcmF0aW9uRmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVOYW1lRm9yRXJyb3Iobm9kZTogdHMuTm9kZSZ7bmFtZT86IHRzLk5vZGV9KTogc3RyaW5nIHtcbiAgaWYgKG5vZGUubmFtZSAhPT0gdW5kZWZpbmVkICYmIHRzLmlzSWRlbnRpZmllcihub2RlLm5hbWUpKSB7XG4gICAgcmV0dXJuIG5vZGUubmFtZS50ZXh0O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGtpbmQgPSB0cy5TeW50YXhLaW5kW25vZGUua2luZF07XG4gICAgY29uc3Qge2xpbmUsIGNoYXJhY3Rlcn0gPVxuICAgICAgICB0cy5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihub2RlLmdldFNvdXJjZUZpbGUoKSwgbm9kZS5nZXRTdGFydCgpKTtcbiAgICByZXR1cm4gYCR7a2luZH1AJHtsaW5lfToke2NoYXJhY3Rlcn1gO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGaWxlKG5vZGU6IHRzLk5vZGUpOiB0cy5Tb3VyY2VGaWxlIHtcbiAgLy8gSW4gY2VydGFpbiB0cmFuc2Zvcm1hdGlvbiBjb250ZXh0cywgYHRzLk5vZGUuZ2V0U291cmNlRmlsZSgpYCBjYW4gYWN0dWFsbHkgcmV0dXJuIGB1bmRlZmluZWRgLFxuICAvLyBkZXNwaXRlIHRoZSB0eXBlIHNpZ25hdHVyZSBub3QgYWxsb3dpbmcgaXQuIEluIHRoYXQgZXZlbnQsIGdldCB0aGUgYHRzLlNvdXJjZUZpbGVgIHZpYSB0aGVcbiAgLy8gb3JpZ2luYWwgbm9kZSBpbnN0ZWFkICh3aGljaCB3b3JrcykuXG4gIGNvbnN0IGRpcmVjdFNmID0gbm9kZS5nZXRTb3VyY2VGaWxlKCkgYXMgdHMuU291cmNlRmlsZSB8IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRpcmVjdFNmICE9PSB1bmRlZmluZWQgPyBkaXJlY3RTZiA6IHRzLmdldE9yaWdpbmFsTm9kZShub2RlKS5nZXRTb3VyY2VGaWxlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VGaWxlT3JOdWxsKHByb2dyYW06IHRzLlByb2dyYW0sIGZpbGVOYW1lOiBBYnNvbHV0ZUZzUGF0aCk6IHRzLlNvdXJjZUZpbGV8XG4gICAgbnVsbCB7XG4gIHJldHVybiBwcm9ncmFtLmdldFNvdXJjZUZpbGUoZmlsZU5hbWUpIHx8IG51bGw7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuQXRQb3NpdGlvbihzZjogdHMuU291cmNlRmlsZSwgcG9zOiBudW1iZXIpOiB0cy5Ob2RlIHtcbiAgLy8gZ2V0VG9rZW5BdFBvc2l0aW9uIGlzIHBhcnQgb2YgVHlwZVNjcmlwdCdzIHByaXZhdGUgQVBJLlxuICByZXR1cm4gKHRzIGFzIGFueSkuZ2V0VG9rZW5BdFBvc2l0aW9uKHNmLCBwb3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllck9mTm9kZShkZWNsOiB0cy5Ob2RlJntuYW1lPzogdHMuTm9kZX0pOiB0cy5JZGVudGlmaWVyfG51bGwge1xuICBpZiAoZGVjbC5uYW1lICE9PSB1bmRlZmluZWQgJiYgdHMuaXNJZGVudGlmaWVyKGRlY2wubmFtZSkpIHtcbiAgICByZXR1cm4gZGVjbC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2xhcmF0aW9uKG5vZGU6IHRzLk5vZGUpOiBub2RlIGlzIHRzLkRlY2xhcmF0aW9uIHtcbiAgcmV0dXJuIGlzVmFsdWVEZWNsYXJhdGlvbihub2RlKSB8fCBpc1R5cGVEZWNsYXJhdGlvbihub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVEZWNsYXJhdGlvbihub2RlOiB0cy5Ob2RlKTogbm9kZSBpcyB0cy5DbGFzc0RlY2xhcmF0aW9ufFxuICAgIHRzLkZ1bmN0aW9uRGVjbGFyYXRpb258dHMuVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIHJldHVybiB0cy5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkgfHwgdHMuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGUpIHx8XG4gICAgICB0cy5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVEZWNsYXJhdGlvbihub2RlOiB0cy5Ob2RlKTogbm9kZSBpcyB0cy5FbnVtRGVjbGFyYXRpb258XG4gICAgdHMuVHlwZUFsaWFzRGVjbGFyYXRpb258dHMuSW50ZXJmYWNlRGVjbGFyYXRpb24ge1xuICByZXR1cm4gdHMuaXNFbnVtRGVjbGFyYXRpb24obm9kZSkgfHwgdHMuaXNUeXBlQWxpYXNEZWNsYXJhdGlvbihub2RlKSB8fFxuICAgICAgdHMuaXNJbnRlcmZhY2VEZWNsYXJhdGlvbihub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwb3J0ZWQobm9kZTogdHMuRGVjbGFyYXRpb24pOiBib29sZWFuIHtcbiAgbGV0IHRvcExldmVsOiB0cy5Ob2RlID0gbm9kZTtcbiAgaWYgKHRzLmlzVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSAmJiB0cy5pc1ZhcmlhYmxlRGVjbGFyYXRpb25MaXN0KG5vZGUucGFyZW50KSkge1xuICAgIHRvcExldmVsID0gbm9kZS5wYXJlbnQucGFyZW50O1xuICB9XG4gIHJldHVybiB0b3BMZXZlbC5tb2RpZmllcnMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdG9wTGV2ZWwubW9kaWZpZXJzLnNvbWUobW9kaWZpZXIgPT4gbW9kaWZpZXIua2luZCA9PT0gdHMuU3ludGF4S2luZC5FeHBvcnRLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3REaXJzKGhvc3Q6IHRzLkNvbXBpbGVySG9zdCwgb3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zKTogQWJzb2x1dGVGc1BhdGhbXSB7XG4gIGNvbnN0IHJvb3REaXJzOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAob3B0aW9ucy5yb290RGlycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcm9vdERpcnMucHVzaCguLi5vcHRpb25zLnJvb3REaXJzKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJvb3REaXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHJvb3REaXJzLnB1c2gob3B0aW9ucy5yb290RGlyKTtcbiAgfSBlbHNlIHtcbiAgICByb290RGlycy5wdXNoKGhvc3QuZ2V0Q3VycmVudERpcmVjdG9yeSgpKTtcbiAgfVxuXG4gIC8vIEluIFdpbmRvd3MgdGhlIGFib3ZlIG1pZ2h0IG5vdCBhbHdheXMgcmV0dXJuIHBvc2l4IHNlcGFyYXRlZCBwYXRoc1xuICAvLyBTZWU6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iLzNmNzM1N2QzN2Y2NmM4NDJkNzBkODM1YmM5MjVlYzJhODczZWNmZWMvc3JjL2NvbXBpbGVyL3N5cy50cyNMNjUwXG4gIC8vIEFsc28gY29tcGlsZXIgb3B0aW9ucyBtaWdodCBiZSBzZXQgdmlhIGFuIEFQSSB3aGljaCBkb2Vzbid0IG5vcm1hbGl6ZSBwYXRoc1xuICByZXR1cm4gcm9vdERpcnMubWFwKHJvb3REaXIgPT4gYWJzb2x1dGVGcm9tKHJvb3REaXIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVEZWJ1Z0luZm8obm9kZTogdHMuTm9kZSk6IHN0cmluZyB7XG4gIGNvbnN0IHNmID0gZ2V0U291cmNlRmlsZShub2RlKTtcbiAgY29uc3Qge2xpbmUsIGNoYXJhY3Rlcn0gPSB0cy5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihzZiwgbm9kZS5wb3MpO1xuICByZXR1cm4gYFske3NmLmZpbGVOYW1lfTogJHt0cy5TeW50YXhLaW5kW25vZGUua2luZF19IEAgJHtsaW5lfToke2NoYXJhY3Rlcn1dYDtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIHRoZSBzcGVjaWZpZWQgYG1vZHVsZU5hbWVgIHVzaW5nIHRoZSBnaXZlbiBgY29tcGlsZXJPcHRpb25zYCBhbmQgYGNvbXBpbGVySG9zdGAuXG4gKlxuICogVGhpcyBoZWxwZXIgd2lsbCBhdHRlbXB0IHRvIHVzZSB0aGUgYENvbXBpbGVySG9zdC5yZXNvbHZlTW9kdWxlTmFtZXMoKWAgbWV0aG9kIGlmIGF2YWlsYWJsZS5cbiAqIE90aGVyd2lzZSBpdCB3aWxsIGZhbGxiYWNrIG9uIHRoZSBgdHMuUmVzb2x2ZU1vZHVsZU5hbWUoKWAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTW9kdWxlTmFtZShcbiAgICBtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRhaW5pbmdGaWxlOiBzdHJpbmcsIGNvbXBpbGVyT3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zLFxuICAgIGNvbXBpbGVySG9zdDogdHMuQ29tcGlsZXJIb3N0LFxuICAgIG1vZHVsZVJlc29sdXRpb25DYWNoZTogdHMuTW9kdWxlUmVzb2x1dGlvbkNhY2hlfG51bGwpOiB0cy5SZXNvbHZlZE1vZHVsZXx1bmRlZmluZWQge1xuICBpZiAoY29tcGlsZXJIb3N0LnJlc29sdmVNb2R1bGVOYW1lcykge1xuICAgIC8vIEZJWE1FOiBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIGluIFRTMy42LCBidXQgaWdub3JlZCBpbiAzLjUuXG4gICAgLy8gUmVtb3ZlIHRoZSBhbnkgY2FzdCBvbmNlIGdvb2dsZTMgaXMgZnVsbHkgb24gVFMzLjYuXG4gICAgcmV0dXJuIChjb21waWxlckhvc3QgYXMgYW55KVxuICAgICAgICAucmVzb2x2ZU1vZHVsZU5hbWVzKFttb2R1bGVOYW1lXSwgY29udGFpbmluZ0ZpbGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb21waWxlck9wdGlvbnMpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0c1xuICAgICAgICAucmVzb2x2ZU1vZHVsZU5hbWUoXG4gICAgICAgICAgICBtb2R1bGVOYW1lLCBjb250YWluaW5nRmlsZSwgY29tcGlsZXJPcHRpb25zLCBjb21waWxlckhvc3QsXG4gICAgICAgICAgICBtb2R1bGVSZXNvbHV0aW9uQ2FjaGUgIT09IG51bGwgPyBtb2R1bGVSZXNvbHV0aW9uQ2FjaGUgOiB1bmRlZmluZWQpXG4gICAgICAgIC5yZXNvbHZlZE1vZHVsZTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCB0aGUga2V5cyBgS2AgZm9ybSBhIHN1YnNldCBvZiB0aGUga2V5cyBvZiBgVGAuXG4gKi9cbmV4cG9ydCB0eXBlIFN1YnNldE9mS2V5czxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBLO1xuIl19