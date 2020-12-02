(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/file_system/src/helpers", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system/src/invalid_file_system", "@angular/compiler-cli/src/ngtsc/file_system/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var invalid_file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system/src/invalid_file_system");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/file_system/src/util");
    var fs = new invalid_file_system_1.InvalidFileSystem();
    function getFileSystem() {
        return fs;
    }
    exports.getFileSystem = getFileSystem;
    function setFileSystem(fileSystem) {
        fs = fileSystem;
    }
    exports.setFileSystem = setFileSystem;
    /**
     * Convert the path `path` to an `AbsoluteFsPath`, throwing an error if it's not an absolute path.
     */
    function absoluteFrom(path) {
        if (!fs.isRooted(path)) {
            throw new Error("Internal Error: absoluteFrom(" + path + "): path is not absolute");
        }
        return fs.resolve(path);
    }
    exports.absoluteFrom = absoluteFrom;
    /**
     * Extract an `AbsoluteFsPath` from a `ts.SourceFile`.
     */
    function absoluteFromSourceFile(sf) {
        return fs.resolve(sf.fileName);
    }
    exports.absoluteFromSourceFile = absoluteFromSourceFile;
    /**
     * Convert the path `path` to a `PathSegment`, throwing an error if it's not a relative path.
     */
    function relativeFrom(path) {
        var normalized = util_1.normalizeSeparators(path);
        if (fs.isRooted(normalized)) {
            throw new Error("Internal Error: relativeFrom(" + path + "): path is not relative");
        }
        return normalized;
    }
    exports.relativeFrom = relativeFrom;
    /**
     * Static access to `dirname`.
     */
    function dirname(file) {
        return fs.dirname(file);
    }
    exports.dirname = dirname;
    /**
     * Static access to `join`.
     */
    function join(basePath) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return fs.join.apply(fs, tslib_1.__spread([basePath], paths));
    }
    exports.join = join;
    /**
     * Static access to `resolve`s.
     */
    function resolve(basePath) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return fs.resolve.apply(fs, tslib_1.__spread([basePath], paths));
    }
    exports.resolve = resolve;
    /** Returns true when the path provided is the root path. */
    function isRoot(path) {
        return fs.isRoot(path);
    }
    exports.isRoot = isRoot;
    /**
     * Static access to `isRooted`.
     */
    function isRooted(path) {
        return fs.isRooted(path);
    }
    exports.isRooted = isRooted;
    /**
     * Static access to `relative`.
     */
    function relative(from, to) {
        return fs.relative(from, to);
    }
    exports.relative = relative;
    /**
     * Static access to `basename`.
     */
    function basename(filePath, extension) {
        return fs.basename(filePath, extension);
    }
    exports.basename = basename;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0vc3JjL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsMkdBQXdEO0lBRXhELDZFQUEyQztJQUUzQyxJQUFJLEVBQUUsR0FBZSxJQUFJLHVDQUFpQixFQUFFLENBQUM7SUFDN0MsU0FBZ0IsYUFBYTtRQUMzQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFGRCxzQ0FFQztJQUNELFNBQWdCLGFBQWEsQ0FBQyxVQUFzQjtRQUNsRCxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQ2xCLENBQUM7SUFGRCxzQ0FFQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsWUFBWSxDQUFDLElBQVk7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBZ0MsSUFBSSw0QkFBeUIsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFMRCxvQ0FLQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0Isc0JBQXNCLENBQUMsRUFBaUI7UUFDdEQsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRkQsd0RBRUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLFlBQVksQ0FBQyxJQUFZO1FBQ3ZDLElBQU0sVUFBVSxHQUFHLDBCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFnQyxJQUFJLDRCQUF5QixDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLFVBQXlCLENBQUM7SUFDbkMsQ0FBQztJQU5ELG9DQU1DO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixPQUFPLENBQXVCLElBQU87UUFDbkQsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFGRCwwQkFFQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsSUFBSSxDQUF1QixRQUFXO1FBQUUsZUFBa0I7YUFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1lBQWxCLDhCQUFrQjs7UUFDeEUsT0FBTyxFQUFFLENBQUMsSUFBSSxPQUFQLEVBQUUsb0JBQU0sUUFBUSxHQUFLLEtBQUssR0FBRTtJQUNyQyxDQUFDO0lBRkQsb0JBRUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLE9BQU8sQ0FBQyxRQUFnQjtRQUFFLGVBQWtCO2FBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtZQUFsQiw4QkFBa0I7O1FBQzFELE9BQU8sRUFBRSxDQUFDLE9BQU8sT0FBVixFQUFFLG9CQUFTLFFBQVEsR0FBSyxLQUFLLEdBQUU7SUFDeEMsQ0FBQztJQUZELDBCQUVDO0lBRUQsNERBQTREO0lBQzVELFNBQWdCLE1BQU0sQ0FBQyxJQUFvQjtRQUN6QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUZELHdCQUVDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixRQUFRLENBQUMsSUFBWTtRQUNuQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUZELDRCQUVDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixRQUFRLENBQXVCLElBQU8sRUFBRSxFQUFLO1FBQzNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUZELDRCQUVDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixRQUFRLENBQUMsUUFBb0IsRUFBRSxTQUFrQjtRQUMvRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDO0lBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbnZhbGlkRmlsZVN5c3RlbX0gZnJvbSAnLi9pbnZhbGlkX2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIEZpbGVTeXN0ZW0sIFBhdGhTZWdtZW50LCBQYXRoU3RyaW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7bm9ybWFsaXplU2VwYXJhdG9yc30gZnJvbSAnLi91dGlsJztcblxubGV0IGZzOiBGaWxlU3lzdGVtID0gbmV3IEludmFsaWRGaWxlU3lzdGVtKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZVN5c3RlbSgpOiBGaWxlU3lzdGVtIHtcbiAgcmV0dXJuIGZzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGVTeXN0ZW0oZmlsZVN5c3RlbTogRmlsZVN5c3RlbSkge1xuICBmcyA9IGZpbGVTeXN0ZW07XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgcGF0aCBgcGF0aGAgdG8gYW4gYEFic29sdXRlRnNQYXRoYCwgdGhyb3dpbmcgYW4gZXJyb3IgaWYgaXQncyBub3QgYW4gYWJzb2x1dGUgcGF0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlRnJvbShwYXRoOiBzdHJpbmcpOiBBYnNvbHV0ZUZzUGF0aCB7XG4gIGlmICghZnMuaXNSb290ZWQocGF0aCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIEVycm9yOiBhYnNvbHV0ZUZyb20oJHtwYXRofSk6IHBhdGggaXMgbm90IGFic29sdXRlYCk7XG4gIH1cbiAgcmV0dXJuIGZzLnJlc29sdmUocGF0aCk7XG59XG5cbi8qKlxuICogRXh0cmFjdCBhbiBgQWJzb2x1dGVGc1BhdGhgIGZyb20gYSBgdHMuU291cmNlRmlsZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZUZyb21Tb3VyY2VGaWxlKHNmOiB0cy5Tb3VyY2VGaWxlKTogQWJzb2x1dGVGc1BhdGgge1xuICByZXR1cm4gZnMucmVzb2x2ZShzZi5maWxlTmFtZSk7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgcGF0aCBgcGF0aGAgdG8gYSBgUGF0aFNlZ21lbnRgLCB0aHJvd2luZyBhbiBlcnJvciBpZiBpdCdzIG5vdCBhIHJlbGF0aXZlIHBhdGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZUZyb20ocGF0aDogc3RyaW5nKTogUGF0aFNlZ21lbnQge1xuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2VwYXJhdG9ycyhwYXRoKTtcbiAgaWYgKGZzLmlzUm9vdGVkKG5vcm1hbGl6ZWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBFcnJvcjogcmVsYXRpdmVGcm9tKCR7cGF0aH0pOiBwYXRoIGlzIG5vdCByZWxhdGl2ZWApO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkIGFzIFBhdGhTZWdtZW50O1xufVxuXG4vKipcbiAqIFN0YXRpYyBhY2Nlc3MgdG8gYGRpcm5hbWVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlybmFtZTxUIGV4dGVuZHMgUGF0aFN0cmluZz4oZmlsZTogVCk6IFQge1xuICByZXR1cm4gZnMuZGlybmFtZShmaWxlKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgYWNjZXNzIHRvIGBqb2luYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpvaW48VCBleHRlbmRzIFBhdGhTdHJpbmc+KGJhc2VQYXRoOiBULCAuLi5wYXRoczogc3RyaW5nW10pOiBUIHtcbiAgcmV0dXJuIGZzLmpvaW4oYmFzZVBhdGgsIC4uLnBhdGhzKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgYWNjZXNzIHRvIGByZXNvbHZlYHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGJhc2VQYXRoOiBzdHJpbmcsIC4uLnBhdGhzOiBzdHJpbmdbXSk6IEFic29sdXRlRnNQYXRoIHtcbiAgcmV0dXJuIGZzLnJlc29sdmUoYmFzZVBhdGgsIC4uLnBhdGhzKTtcbn1cblxuLyoqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSBwYXRoIHByb3ZpZGVkIGlzIHRoZSByb290IHBhdGguICovXG5leHBvcnQgZnVuY3Rpb24gaXNSb290KHBhdGg6IEFic29sdXRlRnNQYXRoKTogYm9vbGVhbiB7XG4gIHJldHVybiBmcy5pc1Jvb3QocGF0aCk7XG59XG5cbi8qKlxuICogU3RhdGljIGFjY2VzcyB0byBgaXNSb290ZWRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSb290ZWQocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBmcy5pc1Jvb3RlZChwYXRoKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgYWNjZXNzIHRvIGByZWxhdGl2ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZTxUIGV4dGVuZHMgUGF0aFN0cmluZz4oZnJvbTogVCwgdG86IFQpOiBQYXRoU2VnbWVudCB7XG4gIHJldHVybiBmcy5yZWxhdGl2ZShmcm9tLCB0byk7XG59XG5cbi8qKlxuICogU3RhdGljIGFjY2VzcyB0byBgYmFzZW5hbWVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFzZW5hbWUoZmlsZVBhdGg6IFBhdGhTdHJpbmcsIGV4dGVuc2lvbj86IHN0cmluZyk6IFBhdGhTZWdtZW50IHtcbiAgcmV0dXJuIGZzLmJhc2VuYW1lKGZpbGVQYXRoLCBleHRlbnNpb24pIGFzIFBhdGhTZWdtZW50O1xufVxuIl19