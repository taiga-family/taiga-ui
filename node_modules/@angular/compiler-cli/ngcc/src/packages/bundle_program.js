(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/packages/bundle_program", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer"], factory);
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
    var patch_ts_expando_initializer_1 = require("@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer");
    /**
     * Create a bundle program.
     */
    function makeBundleProgram(fs, isCore, pkg, path, r3FileName, options, host, additionalFiles) {
        if (additionalFiles === void 0) { additionalFiles = []; }
        var r3SymbolsPath = isCore ? findR3SymbolsPath(fs, file_system_1.dirname(path), r3FileName) : null;
        var rootPaths = r3SymbolsPath ? tslib_1.__spread([path, r3SymbolsPath], additionalFiles) : tslib_1.__spread([path], additionalFiles);
        var originalGetExpandoInitializer = patch_ts_expando_initializer_1.patchTsGetExpandoInitializer();
        var program = ts.createProgram(rootPaths, options, host);
        // Ask for the typeChecker to trigger the binding phase of the compilation.
        // This will then exercise the patched function.
        program.getTypeChecker();
        patch_ts_expando_initializer_1.restoreGetExpandoInitializer(originalGetExpandoInitializer);
        var file = program.getSourceFile(path);
        var r3SymbolsFile = r3SymbolsPath && program.getSourceFile(r3SymbolsPath) || null;
        return { program: program, options: options, host: host, package: pkg, path: path, file: file, r3SymbolsPath: r3SymbolsPath, r3SymbolsFile: r3SymbolsFile };
    }
    exports.makeBundleProgram = makeBundleProgram;
    /**
     * Search the given directory hierarchy to find the path to the `r3_symbols` file.
     */
    function findR3SymbolsPath(fs, directory, filename) {
        var e_1, _a;
        var r3SymbolsFilePath = file_system_1.resolve(directory, filename);
        if (fs.exists(r3SymbolsFilePath)) {
            return r3SymbolsFilePath;
        }
        var subDirectories = fs.readdir(directory)
            // Not interested in hidden files
            .filter(function (p) { return !p.startsWith('.'); })
            // Ignore node_modules
            .filter(function (p) { return p !== 'node_modules'; })
            // Only interested in directories (and only those that are not symlinks)
            .filter(function (p) {
            var stat = fs.lstat(file_system_1.resolve(directory, p));
            return stat.isDirectory() && !stat.isSymbolicLink();
        });
        try {
            for (var subDirectories_1 = tslib_1.__values(subDirectories), subDirectories_1_1 = subDirectories_1.next(); !subDirectories_1_1.done; subDirectories_1_1 = subDirectories_1.next()) {
                var subDirectory = subDirectories_1_1.value;
                var r3SymbolsFilePath_1 = findR3SymbolsPath(fs, file_system_1.resolve(directory, subDirectory), filename);
                if (r3SymbolsFilePath_1) {
                    return r3SymbolsFilePath_1;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subDirectories_1_1 && !subDirectories_1_1.done && (_a = subDirectories_1.return)) _a.call(subDirectories_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }
    exports.findR3SymbolsPath = findR3SymbolsPath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlX3Byb2dyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcGFja2FnZXMvYnVuZGxlX3Byb2dyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBRWpDLDJFQUE0RjtJQUU1RixxSEFBMEc7SUFxQjFHOztPQUVHO0lBQ0gsU0FBZ0IsaUJBQWlCLENBQzdCLEVBQWMsRUFBRSxNQUFlLEVBQUUsR0FBbUIsRUFBRSxJQUFvQixFQUFFLFVBQWtCLEVBQzlGLE9BQTJCLEVBQUUsSUFBcUIsRUFDbEQsZUFBc0M7UUFBdEMsZ0NBQUEsRUFBQSxvQkFBc0M7UUFDeEMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUscUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZGLElBQUksU0FBUyxHQUNULGFBQWEsQ0FBQyxDQUFDLG1CQUFFLElBQUksRUFBRSxhQUFhLEdBQUssZUFBZSxFQUFFLENBQUMsbUJBQUUsSUFBSSxHQUFLLGVBQWUsQ0FBQyxDQUFDO1FBRTNGLElBQU0sNkJBQTZCLEdBQUcsMkRBQTRCLEVBQUUsQ0FBQztRQUNyRSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsMkVBQTJFO1FBQzNFLGdEQUFnRDtRQUNoRCxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsMkRBQTRCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUU1RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQzFDLElBQU0sYUFBYSxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVwRixPQUFPLEVBQUMsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxhQUFhLGVBQUEsRUFBQyxDQUFDO0lBQzFGLENBQUM7SUFuQkQsOENBbUJDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixpQkFBaUIsQ0FDN0IsRUFBYyxFQUFFLFNBQXlCLEVBQUUsUUFBZ0I7O1FBQzdELElBQU0saUJBQWlCLEdBQUcscUJBQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDaEMsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjtRQUVELElBQU0sY0FBYyxHQUNoQixFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNqQixpQ0FBaUM7YUFDaEMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDO1lBQ2hDLHNCQUFzQjthQUNyQixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssY0FBYyxFQUFwQixDQUFvQixDQUFDO1lBQ2xDLHdFQUF3RTthQUN2RSxNQUFNLENBQUMsVUFBQSxDQUFDO1lBQ1AsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDOztZQUVYLEtBQTJCLElBQUEsbUJBQUEsaUJBQUEsY0FBYyxDQUFBLDhDQUFBLDBFQUFFO2dCQUF0QyxJQUFNLFlBQVksMkJBQUE7Z0JBQ3JCLElBQU0sbUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLHFCQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RixJQUFJLG1CQUFpQixFQUFFO29CQUNyQixPQUFPLG1CQUFpQixDQUFDO2lCQUMxQjthQUNGOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUEzQkQsOENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIGRpcm5hbWUsIEZpbGVTeXN0ZW0sIHJlc29sdmV9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbmltcG9ydCB7cGF0Y2hUc0dldEV4cGFuZG9Jbml0aWFsaXplciwgcmVzdG9yZUdldEV4cGFuZG9Jbml0aWFsaXplcn0gZnJvbSAnLi9wYXRjaF90c19leHBhbmRvX2luaXRpYWxpemVyJztcblxuLyoqXG4gKiBBbiBlbnRyeSBwb2ludCBidW5kbGUgY29udGFpbnMgb25lIG9yIHR3byBwcm9ncmFtcywgZS5nLiBgc3JjYCBhbmQgYGR0c2AsXG4gKiB0aGF0IGFyZSBjb21waWxlZCB2aWEgVHlwZVNjcmlwdC5cbiAqXG4gKiBUbyBhaWQgd2l0aCBwcm9jZXNzaW5nIHRoZSBwcm9ncmFtLCB0aGlzIGludGVyZmFjZSBleHBvc2VzIHRoZSBwcm9ncmFtIGl0c2VsZixcbiAqIGFzIHdlbGwgYXMgcGF0aCBhbmQgVFMgZmlsZSBvZiB0aGUgZW50cnktcG9pbnQgdG8gdGhlIHByb2dyYW0gYW5kIHRoZSByM1N5bWJvbHNcbiAqIGZpbGUsIGlmIGFwcHJvcHJpYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJ1bmRsZVByb2dyYW0ge1xuICBwcm9ncmFtOiB0cy5Qcm9ncmFtO1xuICBvcHRpb25zOiB0cy5Db21waWxlck9wdGlvbnM7XG4gIGhvc3Q6IHRzLkNvbXBpbGVySG9zdDtcbiAgcGF0aDogQWJzb2x1dGVGc1BhdGg7XG4gIGZpbGU6IHRzLlNvdXJjZUZpbGU7XG4gIHBhY2thZ2U6IEFic29sdXRlRnNQYXRoO1xuICByM1N5bWJvbHNQYXRoOiBBYnNvbHV0ZUZzUGF0aHxudWxsO1xuICByM1N5bWJvbHNGaWxlOiB0cy5Tb3VyY2VGaWxlfG51bGw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYnVuZGxlIHByb2dyYW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQnVuZGxlUHJvZ3JhbShcbiAgICBmczogRmlsZVN5c3RlbSwgaXNDb3JlOiBib29sZWFuLCBwa2c6IEFic29sdXRlRnNQYXRoLCBwYXRoOiBBYnNvbHV0ZUZzUGF0aCwgcjNGaWxlTmFtZTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHRzLkNvbXBpbGVyT3B0aW9ucywgaG9zdDogdHMuQ29tcGlsZXJIb3N0LFxuICAgIGFkZGl0aW9uYWxGaWxlczogQWJzb2x1dGVGc1BhdGhbXSA9IFtdKTogQnVuZGxlUHJvZ3JhbSB7XG4gIGNvbnN0IHIzU3ltYm9sc1BhdGggPSBpc0NvcmUgPyBmaW5kUjNTeW1ib2xzUGF0aChmcywgZGlybmFtZShwYXRoKSwgcjNGaWxlTmFtZSkgOiBudWxsO1xuICBsZXQgcm9vdFBhdGhzID1cbiAgICAgIHIzU3ltYm9sc1BhdGggPyBbcGF0aCwgcjNTeW1ib2xzUGF0aCwgLi4uYWRkaXRpb25hbEZpbGVzXSA6IFtwYXRoLCAuLi5hZGRpdGlvbmFsRmlsZXNdO1xuXG4gIGNvbnN0IG9yaWdpbmFsR2V0RXhwYW5kb0luaXRpYWxpemVyID0gcGF0Y2hUc0dldEV4cGFuZG9Jbml0aWFsaXplcigpO1xuICBjb25zdCBwcm9ncmFtID0gdHMuY3JlYXRlUHJvZ3JhbShyb290UGF0aHMsIG9wdGlvbnMsIGhvc3QpO1xuICAvLyBBc2sgZm9yIHRoZSB0eXBlQ2hlY2tlciB0byB0cmlnZ2VyIHRoZSBiaW5kaW5nIHBoYXNlIG9mIHRoZSBjb21waWxhdGlvbi5cbiAgLy8gVGhpcyB3aWxsIHRoZW4gZXhlcmNpc2UgdGhlIHBhdGNoZWQgZnVuY3Rpb24uXG4gIHByb2dyYW0uZ2V0VHlwZUNoZWNrZXIoKTtcbiAgcmVzdG9yZUdldEV4cGFuZG9Jbml0aWFsaXplcihvcmlnaW5hbEdldEV4cGFuZG9Jbml0aWFsaXplcik7XG5cbiAgY29uc3QgZmlsZSA9IHByb2dyYW0uZ2V0U291cmNlRmlsZShwYXRoKSE7XG4gIGNvbnN0IHIzU3ltYm9sc0ZpbGUgPSByM1N5bWJvbHNQYXRoICYmIHByb2dyYW0uZ2V0U291cmNlRmlsZShyM1N5bWJvbHNQYXRoKSB8fCBudWxsO1xuXG4gIHJldHVybiB7cHJvZ3JhbSwgb3B0aW9ucywgaG9zdCwgcGFja2FnZTogcGtnLCBwYXRoLCBmaWxlLCByM1N5bWJvbHNQYXRoLCByM1N5bWJvbHNGaWxlfTtcbn1cblxuLyoqXG4gKiBTZWFyY2ggdGhlIGdpdmVuIGRpcmVjdG9yeSBoaWVyYXJjaHkgdG8gZmluZCB0aGUgcGF0aCB0byB0aGUgYHIzX3N5bWJvbHNgIGZpbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUjNTeW1ib2xzUGF0aChcbiAgICBmczogRmlsZVN5c3RlbSwgZGlyZWN0b3J5OiBBYnNvbHV0ZUZzUGF0aCwgZmlsZW5hbWU6IHN0cmluZyk6IEFic29sdXRlRnNQYXRofG51bGwge1xuICBjb25zdCByM1N5bWJvbHNGaWxlUGF0aCA9IHJlc29sdmUoZGlyZWN0b3J5LCBmaWxlbmFtZSk7XG4gIGlmIChmcy5leGlzdHMocjNTeW1ib2xzRmlsZVBhdGgpKSB7XG4gICAgcmV0dXJuIHIzU3ltYm9sc0ZpbGVQYXRoO1xuICB9XG5cbiAgY29uc3Qgc3ViRGlyZWN0b3JpZXMgPVxuICAgICAgZnMucmVhZGRpcihkaXJlY3RvcnkpXG4gICAgICAgICAgLy8gTm90IGludGVyZXN0ZWQgaW4gaGlkZGVuIGZpbGVzXG4gICAgICAgICAgLmZpbHRlcihwID0+ICFwLnN0YXJ0c1dpdGgoJy4nKSlcbiAgICAgICAgICAvLyBJZ25vcmUgbm9kZV9tb2R1bGVzXG4gICAgICAgICAgLmZpbHRlcihwID0+IHAgIT09ICdub2RlX21vZHVsZXMnKVxuICAgICAgICAgIC8vIE9ubHkgaW50ZXJlc3RlZCBpbiBkaXJlY3RvcmllcyAoYW5kIG9ubHkgdGhvc2UgdGhhdCBhcmUgbm90IHN5bWxpbmtzKVxuICAgICAgICAgIC5maWx0ZXIocCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ID0gZnMubHN0YXQocmVzb2x2ZShkaXJlY3RvcnksIHApKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0LmlzRGlyZWN0b3J5KCkgJiYgIXN0YXQuaXNTeW1ib2xpY0xpbmsoKTtcbiAgICAgICAgICB9KTtcblxuICBmb3IgKGNvbnN0IHN1YkRpcmVjdG9yeSBvZiBzdWJEaXJlY3Rvcmllcykge1xuICAgIGNvbnN0IHIzU3ltYm9sc0ZpbGVQYXRoID0gZmluZFIzU3ltYm9sc1BhdGgoZnMsIHJlc29sdmUoZGlyZWN0b3J5LCBzdWJEaXJlY3RvcnkpLCBmaWxlbmFtZSk7XG4gICAgaWYgKHIzU3ltYm9sc0ZpbGVQYXRoKSB7XG4gICAgICByZXR1cm4gcjNTeW1ib2xzRmlsZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=