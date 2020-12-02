(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/file_system/src/logical", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system/src/helpers", "@angular/compiler-cli/src/ngtsc/file_system/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var helpers_1 = require("@angular/compiler-cli/src/ngtsc/file_system/src/helpers");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/file_system/src/util");
    exports.LogicalProjectPath = {
        /**
         * Get the relative path between two `LogicalProjectPath`s.
         *
         * This will return a `PathSegment` which would be a valid module specifier to use in `from` when
         * importing from `to`.
         */
        relativePathBetween: function (from, to) {
            var relativePath = helpers_1.relative(helpers_1.dirname(helpers_1.resolve(from)), helpers_1.resolve(to));
            if (!relativePath.startsWith('../')) {
                relativePath = ('./' + relativePath);
            }
            return relativePath;
        },
    };
    /**
     * A utility class which can translate absolute paths to source files into logical paths in
     * TypeScript's logical file system, based on the root directories of the project.
     */
    var LogicalFileSystem = /** @class */ (function () {
        function LogicalFileSystem(rootDirs) {
            /**
             * A cache of file paths to project paths, because computation of these paths is slightly
             * expensive.
             */
            this.cache = new Map();
            // Make a copy and sort it by length in reverse order (longest first). This speeds up lookups,
            // since there's no need to keep going through the array once a match is found.
            this.rootDirs = rootDirs.concat([]).sort(function (a, b) { return b.length - a.length; });
        }
        /**
         * Get the logical path in the project of a `ts.SourceFile`.
         *
         * This method is provided as a convenient alternative to calling
         * `logicalPathOfFile(absoluteFromSourceFile(sf))`.
         */
        LogicalFileSystem.prototype.logicalPathOfSf = function (sf) {
            return this.logicalPathOfFile(helpers_1.absoluteFrom(sf.fileName));
        };
        /**
         * Get the logical path in the project of a source file.
         *
         * @returns A `LogicalProjectPath` to the source file, or `null` if the source file is not in any
         * of the TS project's root directories.
         */
        LogicalFileSystem.prototype.logicalPathOfFile = function (physicalFile) {
            var e_1, _a;
            if (!this.cache.has(physicalFile)) {
                var logicalFile = null;
                try {
                    for (var _b = tslib_1.__values(this.rootDirs), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var rootDir = _c.value;
                        if (physicalFile.startsWith(rootDir)) {
                            logicalFile = this.createLogicalProjectPath(physicalFile, rootDir);
                            // The logical project does not include any special "node_modules" nested directories.
                            if (logicalFile.indexOf('/node_modules/') !== -1) {
                                logicalFile = null;
                            }
                            else {
                                break;
                            }
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
                this.cache.set(physicalFile, logicalFile);
            }
            return this.cache.get(physicalFile);
        };
        LogicalFileSystem.prototype.createLogicalProjectPath = function (file, rootDir) {
            var logicalPath = util_1.stripExtension(file.substr(rootDir.length));
            return (logicalPath.startsWith('/') ? logicalPath : '/' + logicalPath);
        };
        return LogicalFileSystem;
    }());
    exports.LogicalFileSystem = LogicalFileSystem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWNhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0vc3JjL2xvZ2ljYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsbUZBQW1FO0lBRW5FLDZFQUFzQztJQVl6QixRQUFBLGtCQUFrQixHQUFHO1FBQ2hDOzs7OztXQUtHO1FBQ0gsbUJBQW1CLEVBQUUsVUFBUyxJQUF3QixFQUFFLEVBQXNCO1lBQzVFLElBQUksWUFBWSxHQUFHLGtCQUFRLENBQUMsaUJBQU8sQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFnQixDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxZQUEyQixDQUFDO1FBQ3JDLENBQUM7S0FDRixDQUFDO0lBRUY7OztPQUdHO0lBQ0g7UUFZRSwyQkFBWSxRQUEwQjtZQU50Qzs7O2VBR0c7WUFDSyxVQUFLLEdBQWlELElBQUksR0FBRyxFQUFFLENBQUM7WUFHdEUsOEZBQThGO1lBQzlGLCtFQUErRTtZQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILDJDQUFlLEdBQWYsVUFBZ0IsRUFBaUI7WUFDL0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCw2Q0FBaUIsR0FBakIsVUFBa0IsWUFBNEI7O1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDakMsSUFBSSxXQUFXLEdBQTRCLElBQUksQ0FBQzs7b0JBQ2hELEtBQXNCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFBLGdCQUFBLDRCQUFFO3dCQUFoQyxJQUFNLE9BQU8sV0FBQTt3QkFDaEIsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzs0QkFDbkUsc0ZBQXNGOzRCQUN0RixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDaEQsV0FBVyxHQUFHLElBQUksQ0FBQzs2QkFDcEI7aUNBQU07Z0NBQ0wsTUFBTTs2QkFDUDt5QkFDRjtxQkFDRjs7Ozs7Ozs7O2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDdkMsQ0FBQztRQUVPLG9EQUF3QixHQUFoQyxVQUFpQyxJQUFvQixFQUFFLE9BQXVCO1lBRTVFLElBQU0sV0FBVyxHQUFHLHFCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUF1QixDQUFDO1FBQy9GLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUExREQsSUEwREM7SUExRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7YWJzb2x1dGVGcm9tLCBkaXJuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZX0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEJyYW5kZWRQYXRoLCBQYXRoU2VnbWVudH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3N0cmlwRXh0ZW5zaW9ufSBmcm9tICcuL3V0aWwnO1xuXG5cblxuLyoqXG4gKiBBIHBhdGggdGhhdCdzIHJlbGF0aXZlIHRvIHRoZSBsb2dpY2FsIHJvb3Qgb2YgYSBUeXBlU2NyaXB0IHByb2plY3QgKG9uZSBvZiB0aGUgcHJvamVjdCdzXG4gKiByb290RGlycykuXG4gKlxuICogUGF0aHMgaW4gdGhlIHR5cGUgc3lzdGVtIHVzZSBQT1NJWCBmb3JtYXQuXG4gKi9cbmV4cG9ydCB0eXBlIExvZ2ljYWxQcm9qZWN0UGF0aCA9IEJyYW5kZWRQYXRoPCdMb2dpY2FsUHJvamVjdFBhdGgnPjtcblxuZXhwb3J0IGNvbnN0IExvZ2ljYWxQcm9qZWN0UGF0aCA9IHtcbiAgLyoqXG4gICAqIEdldCB0aGUgcmVsYXRpdmUgcGF0aCBiZXR3ZWVuIHR3byBgTG9naWNhbFByb2plY3RQYXRoYHMuXG4gICAqXG4gICAqIFRoaXMgd2lsbCByZXR1cm4gYSBgUGF0aFNlZ21lbnRgIHdoaWNoIHdvdWxkIGJlIGEgdmFsaWQgbW9kdWxlIHNwZWNpZmllciB0byB1c2UgaW4gYGZyb21gIHdoZW5cbiAgICogaW1wb3J0aW5nIGZyb20gYHRvYC5cbiAgICovXG4gIHJlbGF0aXZlUGF0aEJldHdlZW46IGZ1bmN0aW9uKGZyb206IExvZ2ljYWxQcm9qZWN0UGF0aCwgdG86IExvZ2ljYWxQcm9qZWN0UGF0aCk6IFBhdGhTZWdtZW50IHtcbiAgICBsZXQgcmVsYXRpdmVQYXRoID0gcmVsYXRpdmUoZGlybmFtZShyZXNvbHZlKGZyb20pKSwgcmVzb2x2ZSh0bykpO1xuICAgIGlmICghcmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICByZWxhdGl2ZVBhdGggPSAoJy4vJyArIHJlbGF0aXZlUGF0aCkgYXMgUGF0aFNlZ21lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZWxhdGl2ZVBhdGggYXMgUGF0aFNlZ21lbnQ7XG4gIH0sXG59O1xuXG4vKipcbiAqIEEgdXRpbGl0eSBjbGFzcyB3aGljaCBjYW4gdHJhbnNsYXRlIGFic29sdXRlIHBhdGhzIHRvIHNvdXJjZSBmaWxlcyBpbnRvIGxvZ2ljYWwgcGF0aHMgaW5cbiAqIFR5cGVTY3JpcHQncyBsb2dpY2FsIGZpbGUgc3lzdGVtLCBiYXNlZCBvbiB0aGUgcm9vdCBkaXJlY3RvcmllcyBvZiB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2ljYWxGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yaWVzIG9mIHRoZSBwcm9qZWN0LCBzb3J0ZWQgd2l0aCB0aGUgbG9uZ2VzdCBwYXRoIGZpcnN0LlxuICAgKi9cbiAgcHJpdmF0ZSByb290RGlyczogQWJzb2x1dGVGc1BhdGhbXTtcblxuICAvKipcbiAgICogQSBjYWNoZSBvZiBmaWxlIHBhdGhzIHRvIHByb2plY3QgcGF0aHMsIGJlY2F1c2UgY29tcHV0YXRpb24gb2YgdGhlc2UgcGF0aHMgaXMgc2xpZ2h0bHlcbiAgICogZXhwZW5zaXZlLlxuICAgKi9cbiAgcHJpdmF0ZSBjYWNoZTogTWFwPEFic29sdXRlRnNQYXRoLCBMb2dpY2FsUHJvamVjdFBhdGh8bnVsbD4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3Iocm9vdERpcnM6IEFic29sdXRlRnNQYXRoW10pIHtcbiAgICAvLyBNYWtlIGEgY29weSBhbmQgc29ydCBpdCBieSBsZW5ndGggaW4gcmV2ZXJzZSBvcmRlciAobG9uZ2VzdCBmaXJzdCkuIFRoaXMgc3BlZWRzIHVwIGxvb2t1cHMsXG4gICAgLy8gc2luY2UgdGhlcmUncyBubyBuZWVkIHRvIGtlZXAgZ29pbmcgdGhyb3VnaCB0aGUgYXJyYXkgb25jZSBhIG1hdGNoIGlzIGZvdW5kLlxuICAgIHRoaXMucm9vdERpcnMgPSByb290RGlycy5jb25jYXQoW10pLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9naWNhbCBwYXRoIGluIHRoZSBwcm9qZWN0IG9mIGEgYHRzLlNvdXJjZUZpbGVgLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBhcyBhIGNvbnZlbmllbnQgYWx0ZXJuYXRpdmUgdG8gY2FsbGluZ1xuICAgKiBgbG9naWNhbFBhdGhPZkZpbGUoYWJzb2x1dGVGcm9tU291cmNlRmlsZShzZikpYC5cbiAgICovXG4gIGxvZ2ljYWxQYXRoT2ZTZihzZjogdHMuU291cmNlRmlsZSk6IExvZ2ljYWxQcm9qZWN0UGF0aHxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsUGF0aE9mRmlsZShhYnNvbHV0ZUZyb20oc2YuZmlsZU5hbWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvZ2ljYWwgcGF0aCBpbiB0aGUgcHJvamVjdCBvZiBhIHNvdXJjZSBmaWxlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGBMb2dpY2FsUHJvamVjdFBhdGhgIHRvIHRoZSBzb3VyY2UgZmlsZSwgb3IgYG51bGxgIGlmIHRoZSBzb3VyY2UgZmlsZSBpcyBub3QgaW4gYW55XG4gICAqIG9mIHRoZSBUUyBwcm9qZWN0J3Mgcm9vdCBkaXJlY3Rvcmllcy5cbiAgICovXG4gIGxvZ2ljYWxQYXRoT2ZGaWxlKHBoeXNpY2FsRmlsZTogQWJzb2x1dGVGc1BhdGgpOiBMb2dpY2FsUHJvamVjdFBhdGh8bnVsbCB7XG4gICAgaWYgKCF0aGlzLmNhY2hlLmhhcyhwaHlzaWNhbEZpbGUpKSB7XG4gICAgICBsZXQgbG9naWNhbEZpbGU6IExvZ2ljYWxQcm9qZWN0UGF0aHxudWxsID0gbnVsbDtcbiAgICAgIGZvciAoY29uc3Qgcm9vdERpciBvZiB0aGlzLnJvb3REaXJzKSB7XG4gICAgICAgIGlmIChwaHlzaWNhbEZpbGUuc3RhcnRzV2l0aChyb290RGlyKSkge1xuICAgICAgICAgIGxvZ2ljYWxGaWxlID0gdGhpcy5jcmVhdGVMb2dpY2FsUHJvamVjdFBhdGgocGh5c2ljYWxGaWxlLCByb290RGlyKTtcbiAgICAgICAgICAvLyBUaGUgbG9naWNhbCBwcm9qZWN0IGRvZXMgbm90IGluY2x1ZGUgYW55IHNwZWNpYWwgXCJub2RlX21vZHVsZXNcIiBuZXN0ZWQgZGlyZWN0b3JpZXMuXG4gICAgICAgICAgaWYgKGxvZ2ljYWxGaWxlLmluZGV4T2YoJy9ub2RlX21vZHVsZXMvJykgIT09IC0xKSB7XG4gICAgICAgICAgICBsb2dpY2FsRmlsZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWNoZS5zZXQocGh5c2ljYWxGaWxlLCBsb2dpY2FsRmlsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChwaHlzaWNhbEZpbGUpITtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTG9naWNhbFByb2plY3RQYXRoKGZpbGU6IEFic29sdXRlRnNQYXRoLCByb290RGlyOiBBYnNvbHV0ZUZzUGF0aCk6XG4gICAgICBMb2dpY2FsUHJvamVjdFBhdGgge1xuICAgIGNvbnN0IGxvZ2ljYWxQYXRoID0gc3RyaXBFeHRlbnNpb24oZmlsZS5zdWJzdHIocm9vdERpci5sZW5ndGgpKTtcbiAgICByZXR1cm4gKGxvZ2ljYWxQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGxvZ2ljYWxQYXRoIDogJy8nICsgbG9naWNhbFBhdGgpIGFzIExvZ2ljYWxQcm9qZWN0UGF0aDtcbiAgfVxufVxuIl19