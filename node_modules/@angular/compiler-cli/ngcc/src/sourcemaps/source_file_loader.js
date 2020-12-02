(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/sourcemaps/source_file_loader", ["require", "exports", "convert-source-map", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/sourcemaps/source_file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var convert_source_map_1 = require("convert-source-map");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var source_file_1 = require("@angular/compiler-cli/ngcc/src/sourcemaps/source_file");
    /**
     * This class can be used to load a source file, its associated source map and any upstream sources.
     *
     * Since a source file might reference (or include) a source map, this class can load those too.
     * Since a source map might reference other source files, these are also loaded as needed.
     *
     * This is done recursively. The result is a "tree" of `SourceFile` objects, each containing
     * mappings to other `SourceFile` objects as necessary.
     */
    var SourceFileLoader = /** @class */ (function () {
        function SourceFileLoader(fs, logger) {
            this.fs = fs;
            this.logger = logger;
            this.currentPaths = [];
        }
        SourceFileLoader.prototype.loadSourceFile = function (sourcePath, contents, mapAndPath) {
            if (contents === void 0) { contents = null; }
            if (mapAndPath === void 0) { mapAndPath = null; }
            var previousPaths = this.currentPaths.slice();
            try {
                if (contents === null) {
                    if (!this.fs.exists(sourcePath)) {
                        return null;
                    }
                    contents = this.readSourceFile(sourcePath);
                }
                // If not provided try to load the source map based on the source itself
                if (mapAndPath === null) {
                    mapAndPath = this.loadSourceMap(sourcePath, contents);
                }
                var map = null;
                var inline = true;
                var sources = [];
                if (mapAndPath !== null) {
                    var basePath = mapAndPath.mapPath || sourcePath;
                    sources = this.processSources(basePath, mapAndPath.map);
                    map = mapAndPath.map;
                    inline = mapAndPath.mapPath === null;
                }
                return new source_file_1.SourceFile(sourcePath, contents, map, inline, sources);
            }
            catch (e) {
                this.logger.warn("Unable to fully load " + sourcePath + " for source-map flattening: " + e.message);
                return null;
            }
            finally {
                // We are finished with this recursion so revert the paths being tracked
                this.currentPaths = previousPaths;
            }
        };
        /**
         * Find the source map associated with the source file whose `sourcePath` and `contents` are
         * provided.
         *
         * Source maps can be inline, as part of a base64 encoded comment, or external as a separate file
         * whose path is indicated in a comment or implied from the name of the source file itself.
         */
        SourceFileLoader.prototype.loadSourceMap = function (sourcePath, contents) {
            var inline = convert_source_map_1.commentRegex.exec(contents);
            if (inline !== null) {
                return { map: convert_source_map_1.fromComment(inline.pop()).sourcemap, mapPath: null };
            }
            var external = convert_source_map_1.mapFileCommentRegex.exec(contents);
            if (external) {
                try {
                    var fileName = external[1] || external[2];
                    var externalMapPath = this.fs.resolve(this.fs.dirname(sourcePath), fileName);
                    return { map: this.readRawSourceMap(externalMapPath), mapPath: externalMapPath };
                }
                catch (e) {
                    this.logger.warn("Unable to fully load " + sourcePath + " for source-map flattening: " + e.message);
                    return null;
                }
            }
            var impliedMapPath = file_system_1.absoluteFrom(sourcePath + '.map');
            if (this.fs.exists(impliedMapPath)) {
                return { map: this.readRawSourceMap(impliedMapPath), mapPath: impliedMapPath };
            }
            return null;
        };
        /**
         * Iterate over each of the "sources" for this source file's source map, recursively loading each
         * source file and its associated source map.
         */
        SourceFileLoader.prototype.processSources = function (basePath, map) {
            var _this = this;
            var sourceRoot = this.fs.resolve(this.fs.dirname(basePath), map.sourceRoot || '');
            return map.sources.map(function (source, index) {
                var path = _this.fs.resolve(sourceRoot, source);
                var content = map.sourcesContent && map.sourcesContent[index] || null;
                return _this.loadSourceFile(path, content, null);
            });
        };
        /**
         * Load the contents of the source file from disk.
         *
         * @param sourcePath The path to the source file.
         */
        SourceFileLoader.prototype.readSourceFile = function (sourcePath) {
            this.trackPath(sourcePath);
            return this.fs.readFile(sourcePath);
        };
        /**
         * Load the source map from the file at `mapPath`, parsing its JSON contents into a `RawSourceMap`
         * object.
         *
         * @param mapPath The path to the source-map file.
         */
        SourceFileLoader.prototype.readRawSourceMap = function (mapPath) {
            this.trackPath(mapPath);
            return JSON.parse(this.fs.readFile(mapPath));
        };
        /**
         * Track source file paths if we have loaded them from disk so that we don't get into an infinite
         * recursion.
         */
        SourceFileLoader.prototype.trackPath = function (path) {
            if (this.currentPaths.includes(path)) {
                throw new Error("Circular source file mapping dependency: " + this.currentPaths.join(' -> ') + " -> " + path);
            }
            this.currentPaths.push(path);
        };
        return SourceFileLoader;
    }());
    exports.SourceFileLoader = SourceFileLoader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX2ZpbGVfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL3NvdXJjZW1hcHMvc291cmNlX2ZpbGVfbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gseURBQWtGO0lBRWxGLDJFQUF3RjtJQUl4RixxRkFBeUM7SUFFekM7Ozs7Ozs7O09BUUc7SUFDSDtRQUdFLDBCQUFvQixFQUFjLEVBQVUsTUFBYztZQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUZsRCxpQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFaUIsQ0FBQztRQTBCOUQseUNBQWMsR0FBZCxVQUNJLFVBQTBCLEVBQUUsUUFBNEIsRUFDeEQsVUFBa0M7WUFETix5QkFBQSxFQUFBLGVBQTRCO1lBQ3hELDJCQUFBLEVBQUEsaUJBQWtDO1lBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEQsSUFBSTtnQkFDRixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDL0IsT0FBTyxJQUFJLENBQUM7cUJBQ2I7b0JBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzVDO2dCQUVELHdFQUF3RTtnQkFDeEUsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO29CQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELElBQUksR0FBRyxHQUFzQixJQUFJLENBQUM7Z0JBQ2xDLElBQUksTUFBTSxHQUFH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a0pDO0lBbEpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Y29tbWVudFJlZ2V4LCBmcm9tQ29tbWVudCwgbWFwRmlsZUNvbW1lbnRSZWdleH0gZnJvbSAnY29udmVydC1zb3VyY2UtbWFwJztcblxuaW1wb3J0IHthYnNvbHV0ZUZyb20sIEFic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcblxuaW1wb3J0IHtSYXdTb3VyY2VNYXB9IGZyb20gJy4vcmF3X3NvdXJjZV9tYXAnO1xuaW1wb3J0IHtTb3VyY2VGaWxlfSBmcm9tICcuL3NvdXJjZV9maWxlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNhbiBiZSB1c2VkIHRvIGxvYWQgYSBzb3VyY2UgZmlsZSwgaXRzIGFzc29jaWF0ZWQgc291cmNlIG1hcCBhbmQgYW55IHVwc3RyZWFtIHNvdXJjZXMuXG4gKlxuICogU2luY2UgYSBzb3VyY2UgZmlsZSBtaWdodCByZWZlcmVuY2UgKG9yIGluY2x1ZGUpIGEgc291cmNlIG1hcCwgdGhpcyBjbGFzcyBjYW4gbG9hZCB0aG9zZSB0b28uXG4gKiBTaW5jZSBhIHNvdXJjZSBtYXAgbWlnaHQgcmVmZXJlbmNlIG90aGVyIHNvdXJjZSBmaWxlcywgdGhlc2UgYXJlIGFsc28gbG9hZGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBUaGlzIGlzIGRvbmUgcmVjdXJzaXZlbHkuIFRoZSByZXN1bHQgaXMgYSBcInRyZWVcIiBvZiBgU291cmNlRmlsZWAgb2JqZWN0cywgZWFjaCBjb250YWluaW5nXG4gKiBtYXBwaW5ncyB0byBvdGhlciBgU291cmNlRmlsZWAgb2JqZWN0cyBhcyBuZWNlc3NhcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlTG9hZGVyIHtcbiAgcHJpdmF0ZSBjdXJyZW50UGF0aHM6IEFic29sdXRlRnNQYXRoW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZzOiBGaWxlU3lzdGVtLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkIGEgc291cmNlIGZpbGUsIGNvbXB1dGUgaXRzIHNvdXJjZSBtYXAsIGFuZCByZWN1cnNpdmVseSBsb2FkIGFueSByZWZlcmVuY2VkIHNvdXJjZSBmaWxlcy5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZVBhdGggVGhlIHBhdGggdG8gdGhlIHNvdXJjZSBmaWxlIHRvIGxvYWQuXG4gICAqIEBwYXJhbSBjb250ZW50cyBUaGUgY29udGVudHMgb2YgdGhlIHNvdXJjZSBmaWxlIHRvIGxvYWQuXG4gICAqIEBwYXJhbSBtYXBBbmRQYXRoIFRoZSByYXcgc291cmNlLW1hcCBhbmQgdGhlIHBhdGggdG8gdGhlIHNvdXJjZS1tYXAgZmlsZS5cbiAgICogQHJldHVybnMgYSBTb3VyY2VGaWxlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGBjb250ZW50c2AgYW5kIHByb3ZpZGVkIHNvdXJjZS1tYXAgaW5mby5cbiAgICovXG4gIGxvYWRTb3VyY2VGaWxlKHNvdXJjZVBhdGg6IEFic29sdXRlRnNQYXRoLCBjb250ZW50czogc3RyaW5nLCBtYXBBbmRQYXRoOiBNYXBBbmRQYXRoKTogU291cmNlRmlsZTtcbiAgLyoqXG4gICAqIFRoZSBvdmVybG9hZCB1c2VkIGludGVybmFsbHkgdG8gbG9hZCBzb3VyY2UgZmlsZXMgcmVmZXJlbmNlZCBpbiBhIHNvdXJjZS1tYXAuXG4gICAqXG4gICAqIEluIHRoaXMgY2FzZSB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBpdCB3aWxsIHJldHVybiBhIG5vbi1udWxsIFNvdXJjZU1hcC5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZVBhdGggVGhlIHBhdGggdG8gdGhlIHNvdXJjZSBmaWxlIHRvIGxvYWQuXG4gICAqIEBwYXJhbSBjb250ZW50cyBUaGUgY29udGVudHMgb2YgdGhlIHNvdXJjZSBmaWxlIHRvIGxvYWQsIGlmIHByb3ZpZGVkIGlubGluZS5cbiAgICogSWYgaXQgaXMgbm90IGtub3duIHRoZSBjb250ZW50cyB3aWxsIGJlIHJlYWQgZnJvbSB0aGUgZmlsZSBhdCB0aGUgYHNvdXJjZVBhdGhgLlxuICAgKiBAcGFyYW0gbWFwQW5kUGF0aCBUaGUgcmF3IHNvdXJjZS1tYXAgYW5kIHRoZSBwYXRoIHRvIHRoZSBzb3VyY2UtbWFwIGZpbGUuXG4gICAqXG4gICAqIEByZXR1cm5zIGEgU291cmNlRmlsZSBpZiB0aGUgY29udGVudCBmb3Igb25lIHdhcyBwcm92aWRlZCBvciBhYmxlIHRvIGJlIGxvYWRlZCBmcm9tIGRpc2ssXG4gICAqIGBudWxsYCBvdGhlcndpc2UuXG4gICAqL1xuICBsb2FkU291cmNlRmlsZShzb3VyY2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgY29udGVudHM/OiBzdHJpbmd8bnVsbCwgbWFwQW5kUGF0aD86IG51bGwpOiBTb3VyY2VGaWxlXG4gICAgICB8bnVsbDtcbiAgbG9hZFNvdXJjZUZpbGUoXG4gICAgICBzb3VyY2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgY29udGVudHM6IHN0cmluZ3xudWxsID0gbnVsbCxcbiAgICAgIG1hcEFuZFBhdGg6IE1hcEFuZFBhdGh8bnVsbCA9IG51bGwpOiBTb3VyY2VGaWxlfG51bGwge1xuICAgIGNvbnN0IHByZXZpb3VzUGF0aHMgPSB0aGlzLmN1cnJlbnRQYXRocy5zbGljZSgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoY29udGVudHMgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzLmV4aXN0cyhzb3VyY2VQYXRoKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRzID0gdGhpcy5yZWFkU291cmNlRmlsZShzb3VyY2VQYXRoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm90IHByb3ZpZGVkIHRyeSB0byBsb2FkIHRoZSBzb3VyY2UgbWFwIGJhc2VkIG9uIHRoZSBzb3VyY2UgaXRzZWxmXG4gICAgICBpZiAobWFwQW5kUGF0aCA9PT0gbnVsbCkge1xuICAgICAgICBtYXBBbmRQYXRoID0gdGhpcy5sb2FkU291cmNlTWFwKHNvdXJjZVBhdGgsIGNvbnRlbnRzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG1hcDogUmF3U291cmNlTWFwfG51bGwgPSBudWxsO1xuICAgICAgbGV0IGlubGluZSA9IHRydWU7XG4gICAgICBsZXQgc291cmNlczogKFNvdXJjZUZpbGV8bnVsbClbXSA9IFtdO1xuICAgICAgaWYgKG1hcEFuZFBhdGggIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYmFzZVBhdGggPSBtYXBBbmRQYXRoLm1hcFBhdGggfHwgc291cmNlUGF0aDtcbiAgICAgICAgc291cmNlcyA9IHRoaXMucHJvY2Vzc1NvdXJjZXMoYmFzZVBhdGgsIG1hcEFuZFBhdGgubWFwKTtcbiAgICAgICAgbWFwID0gbWFwQW5kUGF0aC5tYXA7XG4gICAgICAgIGlubGluZSA9IG1hcEFuZFBhdGgubWFwUGF0aCA9PT0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTb3VyY2VGaWxlKHNvdXJjZVBhdGgsIGNvbnRlbnRzLCBtYXAsIGlubGluZSwgc291cmNlcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihcbiAgICAgICAgICBgVW5hYmxlIHRvIGZ1bGx5IGxvYWQgJHtzb3VyY2VQYXRofSBmb3Igc291cmNlLW1hcCBmbGF0dGVuaW5nOiAke2UubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBXZSBhcmUgZmluaXNoZWQgd2l0aCB0aGlzIHJlY3Vyc2lvbiBzbyByZXZlcnQgdGhlIHBhdGhzIGJlaW5nIHRyYWNrZWRcbiAgICAgIHRoaXMuY3VycmVudFBhdGhzID0gcHJldmlvdXNQYXRocztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgc291cmNlIG1hcCBhc3NvY2lhdGVkIHdpdGggdGhlIHNvdXJjZSBmaWxlIHdob3NlIGBzb3VyY2VQYXRoYCBhbmQgYGNvbnRlbnRzYCBhcmVcbiAgICogcHJvdmlkZWQuXG4gICAqXG4gICAqIFNvdXJjZSBtYXBzIGNhbiBiZSBpbmxpbmUsIGFzIHBhcnQgb2YgYSBiYXNlNjQgZW5jb2RlZCBjb21tZW50LCBvciBleHRlcm5hbCBhcyBhIHNlcGFyYXRlIGZpbGVcbiAgICogd2hvc2UgcGF0aCBpcyBpbmRpY2F0ZWQgaW4gYSBjb21tZW50IG9yIGltcGxpZWQgZnJvbSB0aGUgbmFtZSBvZiB0aGUgc291cmNlIGZpbGUgaXRzZWxmLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU291cmNlTWFwKHNvdXJjZVBhdGg6IEFic29sdXRlRnNQYXRoLCBjb250ZW50czogc3RyaW5nKTogTWFwQW5kUGF0aHxudWxsIHtcbiAgICBjb25zdCBpbmxpbmUgPSBjb21tZW50UmVnZXguZXhlYyhjb250ZW50cyk7XG4gICAgaWYgKGlubGluZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHttYXA6IGZyb21Db21tZW50KGlubGluZS5wb3AoKSEpLnNvdXJjZW1hcCwgbWFwUGF0aDogbnVsbH07XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZXJuYWwgPSBtYXBGaWxlQ29tbWVudFJlZ2V4LmV4ZWMoY29udGVudHMpO1xuICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBleHRlcm5hbFsxXSB8fCBleHRlcm5hbFsyXTtcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNYXBQYXRoID0gdGhpcy5mcy5yZXNvbHZlKHRoaXMuZnMuZGlybmFtZShzb3VyY2VQYXRoKSwgZmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4ge21hcDogdGhpcy5yZWFkUmF3U291cmNlTWFwKGV4dGVybmFsTWFwUGF0aCksIG1hcFBhdGg6IGV4dGVybmFsTWFwUGF0aH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oXG4gICAgICAgICAgICBgVW5hYmxlIHRvIGZ1bGx5IGxvYWQgJHtzb3VyY2VQYXRofSBmb3Igc291cmNlLW1hcCBmbGF0dGVuaW5nOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW1wbGllZE1hcFBhdGggPSBhYnNvbHV0ZUZyb20oc291cmNlUGF0aCArICcubWFwJyk7XG4gICAgaWYgKHRoaXMuZnMuZXhpc3RzKGltcGxpZWRNYXBQYXRoKSkge1xuICAgICAgcmV0dXJuIHttYXA6IHRoaXMucmVhZFJhd1NvdXJjZU1hcChpbXBsaWVkTWFwUGF0aCksIG1hcFBhdGg6IGltcGxpZWRNYXBQYXRofTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBvZiB0aGUgXCJzb3VyY2VzXCIgZm9yIHRoaXMgc291cmNlIGZpbGUncyBzb3VyY2UgbWFwLCByZWN1cnNpdmVseSBsb2FkaW5nIGVhY2hcbiAgICogc291cmNlIGZpbGUgYW5kIGl0cyBhc3NvY2lhdGVkIHNvdXJjZSBtYXAuXG4gICAqL1xuICBwcml2YXRlIHByb2Nlc3NTb3VyY2VzKGJhc2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCwgbWFwOiBSYXdTb3VyY2VNYXApOiAoU291cmNlRmlsZXxudWxsKVtdIHtcbiAgICBjb25zdCBzb3VyY2VSb290ID0gdGhpcy5mcy5yZXNvbHZlKHRoaXMuZnMuZGlybmFtZShiYXNlUGF0aCksIG1hcC5zb3VyY2VSb290IHx8ICcnKTtcbiAgICByZXR1cm4gbWFwLnNvdXJjZXMubWFwKChzb3VyY2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gdGhpcy5mcy5yZXNvbHZlKHNvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWFwLnNvdXJjZXNDb250ZW50ICYmIG1hcC5zb3VyY2VzQ29udGVudFtpbmRleF0gfHwgbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRTb3VyY2VGaWxlKHBhdGgsIGNvbnRlbnQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzb3VyY2UgZmlsZSBmcm9tIGRpc2suXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2VQYXRoIFRoZSBwYXRoIHRvIHRoZSBzb3VyY2UgZmlsZS5cbiAgICovXG4gIHByaXZhdGUgcmVhZFNvdXJjZUZpbGUoc291cmNlUGF0aDogQWJzb2x1dGVGc1BhdGgpOiBzdHJpbmcge1xuICAgIHRoaXMudHJhY2tQYXRoKHNvdXJjZVBhdGgpO1xuICAgIHJldHVybiB0aGlzLmZzLnJlYWRGaWxlKHNvdXJjZVBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHNvdXJjZSBtYXAgZnJvbSB0aGUgZmlsZSBhdCBgbWFwUGF0aGAsIHBhcnNpbmcgaXRzIEpTT04gY29udGVudHMgaW50byBhIGBSYXdTb3VyY2VNYXBgXG4gICAqIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIG1hcFBhdGggVGhlIHBhdGggdG8gdGhlIHNvdXJjZS1tYXAgZmlsZS5cbiAgICovXG4gIHByaXZhdGUgcmVhZFJhd1NvdXJjZU1hcChtYXBQYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IFJhd1NvdXJjZU1hcCB7XG4gICAgdGhpcy50cmFja1BhdGgobWFwUGF0aCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5mcy5yZWFkRmlsZShtYXBQYXRoKSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgc291cmNlIGZpbGUgcGF0aHMgaWYgd2UgaGF2ZSBsb2FkZWQgdGhlbSBmcm9tIGRpc2sgc28gdGhhdCB3ZSBkb24ndCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgKiByZWN1cnNpb24uXG4gICAqL1xuICBwcml2YXRlIHRyYWNrUGF0aChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYXRocy5pbmNsdWRlcyhwYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzb3VyY2UgZmlsZSBtYXBwaW5nIGRlcGVuZGVuY3k6ICR7dGhpcy5jdXJyZW50UGF0aHMuam9pbignIC0+ICcpfSAtPiAke3BhdGh9YCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFBhdGhzLnB1c2gocGF0aCk7XG4gIH1cbn1cblxuLyoqIEEgc21hbGwgaGVscGVyIHN0cnVjdHVyZSB0aGF0IGlzIHJldHVybmVkIGZyb20gYGxvYWRTb3VyY2VNYXAoKWAuICovXG5pbnRlcmZhY2UgTWFwQW5kUGF0aCB7XG4gIC8qKiBUaGUgcGF0aCB0byB0aGUgc291cmNlIG1hcCBpZiBpdCB3YXMgZXh0ZXJuYWwgb3IgYG51bGxgIGlmIGl0IHdhcyBpbmxpbmUuICovXG4gIG1hcFBhdGg6IEFic29sdXRlRnNQYXRofG51bGw7XG4gIC8qKiBUaGUgcmF3IHNvdXJjZSBtYXAgaXRzZWxmLiAqL1xuICBtYXA6IFJhd1NvdXJjZU1hcDtcbn1cbiJdfQ==