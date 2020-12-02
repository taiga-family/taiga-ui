(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/file_system/src/invalid_file_system", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The default `FileSystem` that will always fail.
     *
     * This is a way of ensuring that the developer consciously chooses and
     * configures the `FileSystem` before using it; particularly important when
     * considering static functions like `absoluteFrom()` which rely on
     * the `FileSystem` under the hood.
     */
    var InvalidFileSystem = /** @class */ (function () {
        function InvalidFileSystem() {
        }
        InvalidFileSystem.prototype.exists = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.readFile = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.readFileBuffer = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.writeFile = function (path, data, exclusive) {
            throw makeError();
        };
        InvalidFileSystem.prototype.removeFile = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.symlink = function (target, path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.readdir = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.lstat = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.stat = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.pwd = function () {
            throw makeError();
        };
        InvalidFileSystem.prototype.chdir = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.extname = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.copyFile = function (from, to) {
            throw makeError();
        };
        InvalidFileSystem.prototype.moveFile = function (from, to) {
            throw makeError();
        };
        InvalidFileSystem.prototype.ensureDir = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.removeDeep = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.isCaseSensitive = function () {
            throw makeError();
        };
        InvalidFileSystem.prototype.resolve = function () {
            var paths = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paths[_i] = arguments[_i];
            }
            throw makeError();
        };
        InvalidFileSystem.prototype.dirname = function (file) {
            throw makeError();
        };
        InvalidFileSystem.prototype.join = function (basePath) {
            var paths = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                paths[_i - 1] = arguments[_i];
            }
            throw makeError();
        };
        InvalidFileSystem.prototype.isRoot = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.isRooted = function (path) {
            throw makeError();
        };
        InvalidFileSystem.prototype.relative = function (from, to) {
            throw makeError();
        };
        InvalidFileSystem.prototype.basename = function (filePath, extension) {
            throw makeError();
        };
        InvalidFileSystem.prototype.realpath = function (filePath) {
            throw makeError();
        };
        InvalidFileSystem.prototype.getDefaultLibLocation = function () {
            throw makeError();
        };
        InvalidFileSystem.prototype.normalize = function (path) {
            throw makeError();
        };
        return InvalidFileSystem;
    }());
    exports.InvalidFileSystem = InvalidFileSystem;
    function makeError() {
        return new Error('FileSystem has not been configured. Please call `setFileSystem()` before calling this method.');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZF9maWxlX3N5c3RlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0vc3JjL2ludmFsaWRfZmlsZV9zeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTQTs7Ozs7OztPQU9HO0lBQ0g7UUFBQTtRQWtGQSxDQUFDO1FBakZDLGtDQUFNLEdBQU4sVUFBTyxJQUFvQjtZQUN6QixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxvQ0FBUSxHQUFSLFVBQVMsSUFBb0I7WUFDM0IsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsMENBQWMsR0FBZCxVQUFlLElBQW9CO1lBQ2pDLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELHFDQUFTLEdBQVQsVUFBVSxJQUFvQixFQUFFLElBQW1CLEVBQUUsU0FBbUI7WUFDdEUsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0Qsc0NBQVUsR0FBVixVQUFXLElBQW9CO1lBQzdCLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG1DQUFPLEdBQVAsVUFBUSxNQUFzQixFQUFFLElBQW9CO1lBQ2xELE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG1DQUFPLEdBQVAsVUFBUSxJQUFvQjtZQUMxQixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxpQ0FBSyxHQUFMLFVBQU0sSUFBb0I7WUFDeEIsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsZ0NBQUksR0FBSixVQUFLLElBQW9CO1lBQ3ZCLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELCtCQUFHLEdBQUg7WUFDRSxNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxpQ0FBSyxHQUFMLFVBQU0sSUFBb0I7WUFDeEIsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsbUNBQU8sR0FBUCxVQUFRLElBQWdDO1lBQ3RDLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG9DQUFRLEdBQVIsVUFBUyxJQUFvQixFQUFFLEVBQWtCO1lBQy9DLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG9DQUFRLEdBQVIsVUFBUyxJQUFvQixFQUFFLEVBQWtCO1lBQy9DLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELHFDQUFTLEdBQVQsVUFBVSxJQUFvQjtZQUM1QixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxzQ0FBVSxHQUFWLFVBQVcsSUFBb0I7WUFDN0IsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsMkNBQWUsR0FBZjtZQUNFLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG1DQUFPLEdBQVA7WUFBUSxlQUFrQjtpQkFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO2dCQUFsQiwwQkFBa0I7O1lBQ3hCLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG1DQUFPLEdBQVAsVUFBOEIsSUFBTztZQUNuQyxNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxnQ0FBSSxHQUFKLFVBQTJCLFFBQVc7WUFBRSxlQUFrQjtpQkFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO2dCQUFsQiw4QkFBa0I7O1lBQ3hELE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELGtDQUFNLEdBQU4sVUFBTyxJQUFvQjtZQUN6QixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxvQ0FBUSxHQUFSLFVBQVMsSUFBWTtZQUNuQixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxvQ0FBUSxHQUFSLFVBQStCLElBQU8sRUFBRSxFQUFLO1lBQzNDLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG9DQUFRLEdBQVIsVUFBUyxRQUFnQixFQUFFLFNBQWtCO1lBQzNDLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELG9DQUFRLEdBQVIsVUFBUyxRQUF3QjtZQUMvQixNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxpREFBcUIsR0FBckI7WUFDRSxNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxxQ0FBUyxHQUFULFVBQWdDLElBQU87WUFDckMsTUFBTSxTQUFTLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUFDLEFBbEZELElBa0ZDO0lBbEZZLDhDQUFpQjtJQW9GOUIsU0FBUyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxLQUFLLENBQ1osK0ZBQStGLENBQUMsQ0FBQztJQUN2RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBYnNvbHV0ZUZzUGF0aCwgRmlsZVN0YXRzLCBGaWxlU3lzdGVtLCBQYXRoU2VnbWVudCwgUGF0aFN0cmluZ30gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgYEZpbGVTeXN0ZW1gIHRoYXQgd2lsbCBhbHdheXMgZmFpbC5cbiAqXG4gKiBUaGlzIGlzIGEgd2F5IG9mIGVuc3VyaW5nIHRoYXQgdGhlIGRldmVsb3BlciBjb25zY2lvdXNseSBjaG9vc2VzIGFuZFxuICogY29uZmlndXJlcyB0aGUgYEZpbGVTeXN0ZW1gIGJlZm9yZSB1c2luZyBpdDsgcGFydGljdWxhcmx5IGltcG9ydGFudCB3aGVuXG4gKiBjb25zaWRlcmluZyBzdGF0aWMgZnVuY3Rpb25zIGxpa2UgYGFic29sdXRlRnJvbSgpYCB3aGljaCByZWx5IG9uXG4gKiB0aGUgYEZpbGVTeXN0ZW1gIHVuZGVyIHRoZSBob29kLlxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZEZpbGVTeXN0ZW0gaW1wbGVtZW50cyBGaWxlU3lzdGVtIHtcbiAgZXhpc3RzKHBhdGg6IEFic29sdXRlRnNQYXRoKTogYm9vbGVhbiB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgcmVhZEZpbGUocGF0aDogQWJzb2x1dGVGc1BhdGgpOiBzdHJpbmcge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIHJlYWRGaWxlQnVmZmVyKHBhdGg6IEFic29sdXRlRnNQYXRoKTogQnVmZmVyIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICB3cml0ZUZpbGUocGF0aDogQWJzb2x1dGVGc1BhdGgsIGRhdGE6IHN0cmluZ3xCdWZmZXIsIGV4Y2x1c2l2ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICByZW1vdmVGaWxlKHBhdGg6IEFic29sdXRlRnNQYXRoKTogdm9pZCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgc3ltbGluayh0YXJnZXQ6IEFic29sdXRlRnNQYXRoLCBwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIHJlYWRkaXIocGF0aDogQWJzb2x1dGVGc1BhdGgpOiBQYXRoU2VnbWVudFtdIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICBsc3RhdChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IEZpbGVTdGF0cyB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgc3RhdChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IEZpbGVTdGF0cyB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgcHdkKCk6IEFic29sdXRlRnNQYXRoIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICBjaGRpcihwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGV4dG5hbWUocGF0aDogQWJzb2x1dGVGc1BhdGh8UGF0aFNlZ21lbnQpOiBzdHJpbmcge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGNvcHlGaWxlKGZyb206IEFic29sdXRlRnNQYXRoLCB0bzogQWJzb2x1dGVGc1BhdGgpOiB2b2lkIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICBtb3ZlRmlsZShmcm9tOiBBYnNvbHV0ZUZzUGF0aCwgdG86IEFic29sdXRlRnNQYXRoKTogdm9pZCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgZW5zdXJlRGlyKHBhdGg6IEFic29sdXRlRnNQYXRoKTogdm9pZCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgcmVtb3ZlRGVlcChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGlzQ2FzZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICByZXNvbHZlKC4uLnBhdGhzOiBzdHJpbmdbXSk6IEFic29sdXRlRnNQYXRoIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICBkaXJuYW1lPFQgZXh0ZW5kcyBQYXRoU3RyaW5nPihmaWxlOiBUKTogVCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgam9pbjxUIGV4dGVuZHMgUGF0aFN0cmluZz4oYmFzZVBhdGg6IFQsIC4uLnBhdGhzOiBzdHJpbmdbXSk6IFQge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGlzUm9vdChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW4ge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGlzUm9vdGVkKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIHJlbGF0aXZlPFQgZXh0ZW5kcyBQYXRoU3RyaW5nPihmcm9tOiBULCB0bzogVCk6IFBhdGhTZWdtZW50IHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKTtcbiAgfVxuICBiYXNlbmFtZShmaWxlUGF0aDogc3RyaW5nLCBleHRlbnNpb24/OiBzdHJpbmcpOiBQYXRoU2VnbWVudCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgcmVhbHBhdGgoZmlsZVBhdGg6IEFic29sdXRlRnNQYXRoKTogQWJzb2x1dGVGc1BhdGgge1xuICAgIHRocm93IG1ha2VFcnJvcigpO1xuICB9XG4gIGdldERlZmF1bHRMaWJMb2NhdGlvbigpOiBBYnNvbHV0ZUZzUGF0aCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbiAgbm9ybWFsaXplPFQgZXh0ZW5kcyBQYXRoU3RyaW5nPihwYXRoOiBUKTogVCB7XG4gICAgdGhyb3cgbWFrZUVycm9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUVycm9yKCkge1xuICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgJ0ZpbGVTeXN0ZW0gaGFzIG5vdCBiZWVuIGNvbmZpZ3VyZWQuIFBsZWFzZSBjYWxsIGBzZXRGaWxlU3lzdGVtKClgIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLicpO1xufVxuIl19