(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/writing/cleaning/utils", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Returns true if the given `path` is a directory (not a symlink) and actually exists.
     *
     * @param fs the current filesystem
     * @param path the path to check
     */
    function isLocalDirectory(fs, path) {
        if (fs.exists(path)) {
            var stat = fs.lstat(path);
            return stat.isDirectory();
        }
        else {
            return false;
        }
    }
    exports.isLocalDirectory = isLocalDirectory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvd3JpdGluZy9jbGVhbmluZy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNBOzs7OztPQUtHO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQUMsRUFBYyxFQUFFLElBQW9CO1FBQ25FLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQVBELDRDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgRmlsZVN5c3RlbX0gZnJvbSAnLi4vLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBwYXRoYCBpcyBhIGRpcmVjdG9yeSAobm90IGEgc3ltbGluaykgYW5kIGFjdHVhbGx5IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0gZnMgdGhlIGN1cnJlbnQgZmlsZXN5c3RlbVxuICogQHBhcmFtIHBhdGggdGhlIHBhdGggdG8gY2hlY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxEaXJlY3RvcnkoZnM6IEZpbGVTeXN0ZW0sIHBhdGg6IEFic29sdXRlRnNQYXRoKTogYm9vbGVhbiB7XG4gIGlmIChmcy5leGlzdHMocGF0aCkpIHtcbiAgICBjb25zdCBzdGF0ID0gZnMubHN0YXQocGF0aCk7XG4gICAgcmV0dXJuIHN0YXQuaXNEaXJlY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==