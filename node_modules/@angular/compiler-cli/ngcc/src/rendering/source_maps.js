(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/rendering/source_maps", ["require", "exports", "convert-source-map", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/sourcemaps/source_file_loader"], factory);
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
    var source_file_loader_1 = require("@angular/compiler-cli/ngcc/src/sourcemaps/source_file_loader");
    /**
     * Merge the input and output source-maps, replacing the source-map comment in the output file
     * with an appropriate source-map comment pointing to the merged source-map.
     */
    function renderSourceAndMap(logger, fs, sourceFile, generatedMagicString) {
        var _a;
        var generatedPath = file_system_1.absoluteFromSourceFile(sourceFile);
        var generatedMapPath = file_system_1.absoluteFrom(generatedPath + ".map");
        var generatedContent = generatedMagicString.toString();
        var generatedMap = generatedMagicString.generateMap({ file: generatedPath, source: generatedPath, includeContent: true });
        try {
            var loader = new source_file_loader_1.SourceFileLoader(fs, logger);
            var generatedFile = loader.loadSourceFile(generatedPath, generatedContent, { map: generatedMap, mapPath: generatedMapPath });
            var rawMergedMap = generatedFile.renderFlattenedSourceMap();
            var mergedMap = convert_source_map_1.fromObject(rawMergedMap);
            if ((_a = generatedFile.sources[0]) === null || _a === void 0 ? void 0 : _a.inline) {
                // The input source-map was inline so make the output one inline too.
                return [
                    { path: generatedPath, contents: generatedFile.contents + "\n" + mergedMap.toComment() }
                ];
            }
            else {
                var sourceMapComment = convert_source_map_1.generateMapFileComment(file_system_1.basename(generatedPath) + ".map");
                return [
                    { path: generatedPath, contents: generatedFile.contents + "\n" + sourceMapComment },
                    { path: generatedMapPath, contents: mergedMap.toJSON() }
                ];
            }
        }
        catch (e) {
            logger.error("Error when flattening the source-map \"" + generatedMapPath + "\" for \"" + generatedPath + "\": " + e.toString());
            return [
                { path: generatedPath, contents: generatedContent },
                { path: generatedMapPath, contents: convert_source_map_1.fromObject(generatedMap).toJSON() },
            ];
        }
    }
    exports.renderSourceAndMap = renderSourceAndMap;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX21hcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvcmVuZGVyaW5nL3NvdXJjZV9tYXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gseURBQTBGO0lBSTFGLDJFQUEwRztJQUcxRyxtR0FBa0U7SUFVbEU7OztPQUdHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQzlCLE1BQWMsRUFBRSxFQUFjLEVBQUUsVUFBeUIsRUFDekQsb0JBQWlDOztRQUNuQyxJQUFNLGFBQWEsR0FBRyxvQ0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFNLGdCQUFnQixHQUFHLDBCQUFZLENBQUksYUFBYSxTQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pELElBQU0sWUFBWSxHQUFpQixvQkFBb0IsQ0FBQyxXQUFXLENBQy9ELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRXhFLElBQUk7WUFDRixJQUFNLE1BQU0sR0FBRyxJQUFJLHFDQUFnQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUN2QyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7WUFFckYsSUFBTSxZQUFZLEdBQWlCLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzVFLElBQU0sU0FBUyxHQUFHLCtCQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsVUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxNQUFNLEVBQUU7Z0JBQ3BDLHFFQUFxRTtnQkFDckUsT0FBTztvQkFDTCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFLLGFBQWEsQ0FBQyxRQUFRLFVBQUssU0FBUyxDQUFDLFNBQVMsRUFBSSxFQUFDO2lCQUN2RixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBTSxnQkFBZ0IsR0FBRywyQ0FBc0IsQ0FBSSxzQkFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFNLENBQUMsQ0FBQztnQkFDbEYsT0FBTztvQkFDTCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFLLGFBQWEsQ0FBQyxRQUFRLFVBQUssZ0JBQWtCLEVBQUM7b0JBQ2pGLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUM7aUJBQ3ZELENBQUM7YUFDSDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLENBQUMsS0FBSyxDQUFDLDRDQUF5QyxnQkFBZ0IsaUJBQ2xFLGFBQWEsWUFBTSxDQUFDLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQztZQUN2QyxPQUFPO2dCQUNMLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUM7Z0JBQ2pELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSwrQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFDO2FBQ3RFLENBQUM7U0FDSDtJQUNILENBQUM7SUFwQ0QsZ0RBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtmcm9tT2JqZWN0LCBnZW5lcmF0ZU1hcEZpbGVDb21tZW50LCBTb3VyY2VNYXBDb252ZXJ0ZXJ9IGZyb20gJ2NvbnZlcnQtc291cmNlLW1hcCc7XG5pbXBvcnQgTWFnaWNTdHJpbmcgZnJvbSAnbWFnaWMtc3RyaW5nJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2Fic29sdXRlRnJvbSwgYWJzb2x1dGVGcm9tU291cmNlRmlsZSwgYmFzZW5hbWUsIEZpbGVTeXN0ZW19IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXInO1xuaW1wb3J0IHtSYXdTb3VyY2VNYXB9IGZyb20gJy4uL3NvdXJjZW1hcHMvcmF3X3NvdXJjZV9tYXAnO1xuaW1wb3J0IHtTb3VyY2VGaWxlTG9hZGVyfSBmcm9tICcuLi9zb3VyY2VtYXBzL3NvdXJjZV9maWxlX2xvYWRlcic7XG5cbmltcG9ydCB7RmlsZVRvV3JpdGV9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZU1hcEluZm8ge1xuICBzb3VyY2U6IHN0cmluZztcbiAgbWFwOiBTb3VyY2VNYXBDb252ZXJ0ZXJ8bnVsbDtcbiAgaXNJbmxpbmU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTWVyZ2UgdGhlIGlucHV0IGFuZCBvdXRwdXQgc291cmNlLW1hcHMsIHJlcGxhY2luZyB0aGUgc291cmNlLW1hcCBjb21tZW50IGluIHRoZSBvdXRwdXQgZmlsZVxuICogd2l0aCBhbiBhcHByb3ByaWF0ZSBzb3VyY2UtbWFwIGNvbW1lbnQgcG9pbnRpbmcgdG8gdGhlIG1lcmdlZCBzb3VyY2UtbWFwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU291cmNlQW5kTWFwKFxuICAgIGxvZ2dlcjogTG9nZ2VyLCBmczogRmlsZVN5c3RlbSwgc291cmNlRmlsZTogdHMuU291cmNlRmlsZSxcbiAgICBnZW5lcmF0ZWRNYWdpY1N0cmluZzogTWFnaWNTdHJpbmcpOiBGaWxlVG9Xcml0ZVtdIHtcbiAgY29uc3QgZ2VuZXJhdGVkUGF0aCA9IGFic29sdXRlRnJvbVNvdXJjZUZpbGUoc291cmNlRmlsZSk7XG4gIGNvbnN0IGdlbmVyYXRlZE1hcFBhdGggPSBhYnNvbHV0ZUZyb20oYCR7Z2VuZXJhdGVkUGF0aH0ubWFwYCk7XG4gIGNvbnN0IGdlbmVyYXRlZENvbnRlbnQgPSBnZW5lcmF0ZWRNYWdpY1N0cmluZy50b1N0cmluZygpO1xuICBjb25zdCBnZW5lcmF0ZWRNYXA6IFJhd1NvdXJjZU1hcCA9IGdlbmVyYXRlZE1hZ2ljU3RyaW5nLmdlbmVyYXRlTWFwKFxuICAgICAge2ZpbGU6IGdlbmVyYXRlZFBhdGgsIHNvdXJjZTogZ2VuZXJhdGVkUGF0aCwgaW5jbHVkZUNvbnRlbnQ6IHRydWV9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBTb3VyY2VGaWxlTG9hZGVyKGZzLCBsb2dnZXIpO1xuICAgIGNvbnN0IGdlbmVyYXRlZEZpbGUgPSBsb2FkZXIubG9hZFNvdXJjZUZpbGUoXG4gICAgICAgIGdlbmVyYXRlZFBhdGgsIGdlbmVyYXRlZENvbnRlbnQsIHttYXA6IGdlbmVyYXRlZE1hcCwgbWFwUGF0aDogZ2VuZXJhdGVkTWFwUGF0aH0pO1xuXG4gICAgY29uc3QgcmF3TWVyZ2VkTWFwOiBSYXdTb3VyY2VNYXAgPSBnZW5lcmF0ZWRGaWxlLnJlbmRlckZsYXR0ZW5lZFNvdXJjZU1hcCgpO1xuICAgIGNvbnN0IG1lcmdlZE1hcCA9IGZyb21PYmplY3QocmF3TWVyZ2VkTWFwKTtcbiAgICBpZiAoZ2VuZXJhdGVkRmlsZS5zb3VyY2VzWzBdPy5pbmxpbmUpIHtcbiAgICAgIC8vIFRoZSBpbnB1dCBzb3VyY2UtbWFwIHdhcyBpbmxpbmUgc28gbWFrZSB0aGUgb3V0cHV0IG9uZSBpbmxpbmUgdG9vLlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge3BhdGg6IGdlbmVyYXRlZFBhdGgsIGNvbnRlbnRzOiBgJHtnZW5lcmF0ZWRGaWxlLmNvbnRlbnRzfVxcbiR7bWVyZ2VkTWFwLnRvQ29tbWVudCgpfWB9XG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzb3VyY2VNYXBDb21tZW50ID0gZ2VuZXJhdGVNYXBGaWxlQ29tbWVudChgJHtiYXNlbmFtZShnZW5lcmF0ZWRQYXRoKX0ubWFwYCk7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7cGF0aDogZ2VuZXJhdGVkUGF0aCwgY29udGVudHM6IGAke2dlbmVyYXRlZEZpbGUuY29udGVudHN9XFxuJHtzb3VyY2VNYXBDb21tZW50fWB9LFxuICAgICAgICB7cGF0aDogZ2VuZXJhdGVkTWFwUGF0aCwgY29udGVudHM6IG1lcmdlZE1hcC50b0pTT04oKX1cbiAgICAgIF07XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLmVycm9yKGBFcnJvciB3aGVuIGZsYXR0ZW5pbmcgdGhlIHNvdXJjZS1tYXAgXCIke2dlbmVyYXRlZE1hcFBhdGh9XCIgZm9yIFwiJHtcbiAgICAgICAgZ2VuZXJhdGVkUGF0aH1cIjogJHtlLnRvU3RyaW5nKCl9YCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtwYXRoOiBnZW5lcmF0ZWRQYXRoLCBjb250ZW50czogZ2VuZXJhdGVkQ29udGVudH0sXG4gICAgICB7cGF0aDogZ2VuZXJhdGVkTWFwUGF0aCwgY29udGVudHM6IGZyb21PYmplY3QoZ2VuZXJhdGVkTWFwKS50b0pTT04oKX0sXG4gICAgXTtcbiAgfVxufVxuIl19