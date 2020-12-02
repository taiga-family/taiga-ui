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
        define("@angular/compiler-cli/src/transformers/metadata_reader", ["require", "exports", "tslib", "@angular/compiler-cli/src/metadata/index", "@angular/compiler-cli/src/transformers/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var metadata_1 = require("@angular/compiler-cli/src/metadata/index");
    var util_1 = require("@angular/compiler-cli/src/transformers/util");
    function createMetadataReaderCache() {
        var data = new Map();
        return { data: data };
    }
    exports.createMetadataReaderCache = createMetadataReaderCache;
    function readMetadata(filePath, host, cache) {
        var metadatas = cache && cache.data.get(filePath);
        if (metadatas) {
            return metadatas;
        }
        if (host.fileExists(filePath)) {
            // If the file doesn't exists then we cannot return metadata for the file.
            // This will occur if the user referenced a declared module for which no file
            // exists for the module (i.e. jQuery or angularjs).
            if (util_1.DTS.test(filePath)) {
                metadatas = readMetadataFile(host, filePath);
                if (!metadatas) {
                    // If there is a .d.ts file but no metadata file we need to produce a
                    // metadata from the .d.ts file as metadata files capture reexports
                    // (starting with v3).
                    metadatas = [upgradeMetadataWithDtsData(host, { '__symbolic': 'module', 'version': 1, 'metadata': {} }, filePath)];
                }
            }
            else {
                var metadata = host.getSourceFileMetadata(filePath);
                metadatas = metadata ? [metadata] : [];
            }
        }
        if (cache && (!host.cacheMetadata || host.cacheMetadata(filePath))) {
            cache.data.set(filePath, metadatas);
        }
        return metadatas;
    }
    exports.readMetadata = readMetadata;
    function readMetadataFile(host, dtsFilePath) {
        var metadataPath = dtsFilePath.replace(util_1.DTS, '.metadata.json');
        if (!host.fileExists(metadataPath)) {
            return undefined;
        }
        try {
            var metadataOrMetadatas = JSON.parse(host.readFile(metadataPath));
            var metadatas = metadataOrMetadatas ?
                (Array.isArray(metadataOrMetadatas) ? metadataOrMetadatas : [metadataOrMetadatas]) :
                [];
            if (metadatas.length) {
                var maxMetadata = metadatas.reduce(function (p, c) { return p.version > c.version ? p : c; });
                if (maxMetadata.version < metadata_1.METADATA_VERSION) {
                    metadatas.push(upgradeMetadataWithDtsData(host, maxMetadata, dtsFilePath));
                }
            }
            return metadatas;
        }
        catch (e) {
            console.error("Failed to read JSON file " + metadataPath);
            throw e;
        }
    }
    function upgradeMetadataWithDtsData(host, oldMetadata, dtsFilePath) {
        // patch v1 to v3 by adding exports and the `extends` clause.
        // patch v3 to v4 by adding `interface` symbols for TypeAlias
        var newMetadata = {
            '__symbolic': 'module',
            'version': metadata_1.METADATA_VERSION,
            'metadata': tslib_1.__assign({}, oldMetadata.metadata),
        };
        if (oldMetadata.exports) {
            newMetadata.exports = oldMetadata.exports;
        }
        if (oldMetadata.importAs) {
            newMetadata.importAs = oldMetadata.importAs;
        }
        if (oldMetadata.origins) {
            newMetadata.origins = oldMetadata.origins;
        }
        var dtsMetadata = host.getSourceFileMetadata(dtsFilePath);
        if (dtsMetadata) {
            for (var prop in dtsMetadata.metadata) {
                if (!newMetadata.metadata[prop]) {
                    newMetadata.metadata[prop] = dtsMetadata.metadata[prop];
                }
            }
            if (dtsMetadata['importAs'])
                newMetadata['importAs'] = dtsMetadata['importAs'];
            // Only copy exports from exports from metadata prior to version 3.
            // Starting with version 3 the collector began collecting exports and
            // this should be redundant. Also, with bundler will rewrite the exports
            // which will hoist the exports from modules referenced indirectly causing
            // the imports to be different than the .d.ts files and using the .d.ts file
            // exports would cause the StaticSymbolResolver to redirect symbols to the
            // incorrect location.
            if ((!oldMetadata.version || oldMetadata.version < 3) && dtsMetadata.exports) {
                newMetadata.exports = dtsMetadata.exports;
            }
        }
        return newMetadata;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfcmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy90cmFuc2Zvcm1lcnMvbWV0YWRhdGFfcmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUlILHFFQUE2RDtJQUU3RCxvRUFBMkI7SUFnQjNCLFNBQWdCLHlCQUF5QjtRQUN2QyxJQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBc0MsQ0FBQztRQUMzRCxPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBQztJQUNoQixDQUFDO0lBSEQsOERBR0M7SUFFRCxTQUFnQixZQUFZLENBQ3hCLFFBQWdCLEVBQUUsSUFBd0IsRUFBRSxLQUEyQjtRQUV6RSxJQUFJLFNBQVMsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QiwwRUFBMEU7WUFDMUUsNkVBQTZFO1lBQzdFLG9EQUFvRDtZQUNwRCxJQUFJLFVBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RCLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2QscUVBQXFFO29CQUNyRSxtRUFBbUU7b0JBQ25FLHNCQUFzQjtvQkFDdEIsU0FBUyxHQUFHLENBQUMsMEJBQTBCLENBQ25DLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMs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QUFLLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7WUFDRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7Z0JBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUvRSxtRUFBbUU7WUFDbkUscUVBQXFFO1lBQ3JFLHdFQUF3RTtZQUN4RSwwRUFBMEU7WUFDMUUsNEVBQTRFO1lBQzVFLDBFQUEwRTtZQUMxRSxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVFLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUMzQztTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TUVUQURBVEFfVkVSU0lPTiwgTW9kdWxlTWV0YWRhdGF9IGZyb20gJy4uL21ldGFkYXRhJztcblxuaW1wb3J0IHtEVFN9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFSZWFkZXJIb3N0IHtcbiAgZ2V0U291cmNlRmlsZU1ldGFkYXRhKGZpbGVQYXRoOiBzdHJpbmcpOiBNb2R1bGVNZXRhZGF0YXx1bmRlZmluZWQ7XG4gIGNhY2hlTWV0YWRhdGE/KGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICBmaWxlRXhpc3RzKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuO1xuICByZWFkRmlsZShmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUmVhZGVyQ2FjaGUge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBkYXRhOiBNYXA8c3RyaW5nLCBNb2R1bGVNZXRhZGF0YVtdfHVuZGVmaW5lZD47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZXRhZGF0YVJlYWRlckNhY2hlKCk6IE1ldGFkYXRhUmVhZGVyQ2FjaGUge1xuICBjb25zdCBkYXRhID0gbmV3IE1hcDxzdHJpbmcsIE1vZHVsZU1ldGFkYXRhW118dW5kZWZpbmVkPigpO1xuICByZXR1cm4ge2RhdGF9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZE1ldGFkYXRhKFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsIGhvc3Q6IE1ldGFkYXRhUmVhZGVySG9zdCwgY2FjaGU/OiBNZXRhZGF0YVJlYWRlckNhY2hlKTogTW9kdWxlTWV0YWRhdGFbXXxcbiAgICB1bmRlZmluZWQge1xuICBsZXQgbWV0YWRhdGFzID0gY2FjaGUgJiYgY2FjaGUuZGF0YS5nZXQoZmlsZVBhdGgpO1xuICBpZiAobWV0YWRhdGFzKSB7XG4gICAgcmV0dXJuIG1ldGFkYXRhcztcbiAgfVxuICBpZiAoaG9zdC5maWxlRXhpc3RzKGZpbGVQYXRoKSkge1xuICAgIC8vIElmIHRoZSBmaWxlIGRvZXNuJ3QgZXhpc3RzIHRoZW4gd2UgY2Fubm90IHJldHVybiBtZXRhZGF0YSBmb3IgdGhlIGZpbGUuXG4gICAgLy8gVGhpcyB3aWxsIG9jY3VyIGlmIHRoZSB1c2VyIHJlZmVyZW5jZWQgYSBkZWNsYXJlZCBtb2R1bGUgZm9yIHdoaWNoIG5vIGZpbGVcbiAgICAvLyBleGlzdHMgZm9yIHRoZSBtb2R1bGUgKGkuZS4galF1ZXJ5IG9yIGFuZ3VsYXJqcykuXG4gICAgaWYgKERUUy50ZXN0KGZpbGVQYXRoKSkge1xuICAgICAgbWV0YWRhdGFzID0gcmVhZE1ldGFkYXRhRmlsZShob3N0LCBmaWxlUGF0aCk7XG4gICAgICBpZiAoIW1ldGFkYXRhcykge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIC5kLnRzIGZpbGUgYnV0IG5vIG1ldGFkYXRhIGZpbGUgd2UgbmVlZCB0byBwcm9kdWNlIGFcbiAgICAgICAgLy8gbWV0YWRhdGEgZnJvbSB0aGUgLmQudHMgZmlsZSBhcyBtZXRhZGF0YSBmaWxlcyBjYXB0dXJlIHJlZXhwb3J0c1xuICAgICAgICAvLyAoc3RhcnRpbmcgd2l0aCB2MykuXG4gICAgICAgIG1ldGFkYXRhcyA9IFt1cGdyYWRlTWV0YWRhdGFXaXRoRHRzRGF0YShcbiAgICAgICAgICAgIGhvc3QsIHsnX19zeW1ib2xpYyc6ICdtb2R1bGUnLCAndmVyc2lvbic6IDEsICdtZXRhZGF0YSc6IHt9fSwgZmlsZVBhdGgpXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBob3N0LmdldFNvdXJjZUZpbGVNZXRhZGF0YShmaWxlUGF0aCk7XG4gICAgICBtZXRhZGF0YXMgPSBtZXRhZGF0YSA/IFttZXRhZGF0YV0gOiBbXTtcbiAgICB9XG4gIH1cbiAgaWYgKGNhY2hlICYmICghaG9zdC5jYWNoZU1ldGFkYXRhIHx8IGhvc3QuY2FjaGVNZXRhZGF0YShmaWxlUGF0aCkpKSB7XG4gICAgY2FjaGUuZGF0YS5zZXQoZmlsZVBhdGgsIG1ldGFkYXRhcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGFkYXRhcztcbn1cblxuXG5mdW5jdGlvbiByZWFkTWV0YWRhdGFGaWxlKGhvc3Q6IE1ldGFkYXRhUmVhZGVySG9zdCwgZHRzRmlsZVBhdGg6IHN0cmluZyk6IE1vZHVsZU1ldGFkYXRhW118XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3QgbWV0YWRhdGFQYXRoID0gZHRzRmlsZVBhdGgucmVwbGFjZShEVFMsICcubWV0YWRhdGEuanNvbicpO1xuICBpZiAoIWhvc3QuZmlsZUV4aXN0cyhtZXRhZGF0YVBhdGgpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IG1ldGFkYXRhT3JNZXRhZGF0YXMgPSBKU09OLnBhcnNlKGhvc3QucmVhZEZpbGUobWV0YWRhdGFQYXRoKSk7XG4gICAgY29uc3QgbWV0YWRhdGFzOiBNb2R1bGVNZXRhZGF0YVtdID0gbWV0YWRhdGFPck1ldGFkYXRhcyA/XG4gICAgICAgIChBcnJheS5pc0FycmF5KG1ldGFkYXRhT3JNZXRhZGF0YXMpID8gbWV0YWRhdGFPck1ldGFkYXRhcyA6IFttZXRhZGF0YU9yTWV0YWRhdGFzXSkgOlxuICAgICAgICBbXTtcbiAgICBpZiAobWV0YWRhdGFzLmxlbmd0aCkge1xuICAgICAgbGV0IG1heE1ldGFkYXRhID0gbWV0YWRhdGFzLnJlZHVjZSgocCwgYykgPT4gcC52ZXJzaW9uID4gYy52ZXJzaW9uID8gcCA6IGMpO1xuICAgICAgaWYgKG1heE1ldGFkYXRhLnZlcnNpb24gPCBNRVRBREFUQV9WRVJTSU9OKSB7XG4gICAgICAgIG1ldGFkYXRhcy5wdXNoKHVwZ3JhZGVNZXRhZGF0YVdpdGhEdHNEYXRhKGhvc3QsIG1heE1ldGFkYXRhLCBkdHNGaWxlUGF0aCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0YWRhdGFzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHJlYWQgSlNPTiBmaWxlICR7bWV0YWRhdGFQYXRofWApO1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBncmFkZU1ldGFkYXRhV2l0aER0c0RhdGEoXG4gICAgaG9zdDogTWV0YWRhdGFSZWFkZXJIb3N0LCBvbGRNZXRhZGF0YTogTW9kdWxlTWV0YWRhdGEsIGR0c0ZpbGVQYXRoOiBzdHJpbmcpOiBNb2R1bGVNZXRhZGF0YSB7XG4gIC8vIHBhdGNoIHYxIHRvIHYzIGJ5IGFkZGluZyBleHBvcnRzIGFuZCB0aGUgYGV4dGVuZHNgIGNsYXVzZS5cbiAgLy8gcGF0Y2ggdjMgdG8gdjQgYnkgYWRkaW5nIGBpbnRlcmZhY2VgIHN5bWJvbHMgZm9yIFR5cGVBbGlhc1xuICBsZXQgbmV3TWV0YWRhdGE6IE1vZHVsZU1ldGFkYXRhID0ge1xuICAgICdfX3N5bWJvbGljJzogJ21vZHVsZScsXG4gICAgJ3ZlcnNpb24nOiBNRVRBREFUQV9WRVJTSU9OLFxuICAgICdtZXRhZGF0YSc6IHsuLi5vbGRNZXRhZGF0YS5tZXRhZGF0YX0sXG4gIH07XG4gIGlmIChvbGRNZXRhZGF0YS5leHBvcnRzKSB7XG4gICAgbmV3TWV0YWRhdGEuZXhwb3J0cyA9IG9sZE1ldGFkYXRhLmV4cG9ydHM7XG4gIH1cbiAgaWYgKG9sZE1ldGFkYXRhLmltcG9ydEFzKSB7XG4gICAgbmV3TWV0YWRhdGEuaW1wb3J0QXMgPSBvbGRNZXRhZGF0YS5pbXBvcnRBcztcbiAgfVxuICBpZiAob2xkTWV0YWRhdGEub3JpZ2lucykge1xuICAgIG5ld01ldGFkYXRhLm9yaWdpbnMgPSBvbGRNZXRhZGF0YS5vcmlnaW5zO1xuICB9XG4gIGNvbnN0IGR0c01ldGFkYXRhID0gaG9zdC5nZXRTb3VyY2VGaWxlTWV0YWRhdGEoZHRzRmlsZVBhdGgpO1xuICBpZiAoZHRzTWV0YWRhdGEpIHtcbiAgICBmb3IgKGxldCBwcm9wIGluIGR0c01ldGFkYXRhLm1ldGFkYXRhKSB7XG4gICAgICBpZiAoIW5ld01ldGFkYXRhLm1ldGFkYXRhW3Byb3BdKSB7XG4gICAgICAgIG5ld01ldGFkYXRhLm1ldGFkYXRhW3Byb3BdID0gZHRzTWV0YWRhdGEubWV0YWRhdGFbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkdHNNZXRhZGF0YVsnaW1wb3J0QXMnXSkgbmV3TWV0YWRhdGFbJ2ltcG9ydEFzJ10gPSBkdHNNZXRhZGF0YVsnaW1wb3J0QXMnXTtcblxuICAgIC8vIE9ubHkgY29weSBleHBvcnRzIGZyb20gZXhwb3J0cyBmcm9tIG1ldGFkYXRhIHByaW9yIHRvIHZlcnNpb24gMy5cbiAgICAvLyBTdGFydGluZyB3aXRoIHZlcnNpb24gMyB0aGUgY29sbGVjdG9yIGJlZ2FuIGNvbGxlY3RpbmcgZXhwb3J0cyBhbmRcbiAgICAvLyB0aGlzIHNob3VsZCBiZSByZWR1bmRhbnQuIEFsc28sIHdpdGggYnVuZGxlciB3aWxsIHJld3JpdGUgdGhlIGV4cG9ydHNcbiAgICAvLyB3aGljaCB3aWxsIGhvaXN0IHRoZSBleHBvcnRzIGZyb20gbW9kdWxlcyByZWZlcmVuY2VkIGluZGlyZWN0bHkgY2F1c2luZ1xuICAgIC8vIHRoZSBpbXBvcnRzIHRvIGJlIGRpZmZlcmVudCB0aGFuIHRoZSAuZC50cyBmaWxlcyBhbmQgdXNpbmcgdGhlIC5kLnRzIGZpbGVcbiAgICAvLyBleHBvcnRzIHdvdWxkIGNhdXNlIHRoZSBTdGF0aWNTeW1ib2xSZXNvbHZlciB0byByZWRpcmVjdCBzeW1ib2xzIHRvIHRoZVxuICAgIC8vIGluY29ycmVjdCBsb2NhdGlvbi5cbiAgICBpZiAoKCFvbGRNZXRhZGF0YS52ZXJzaW9uIHx8IG9sZE1ldGFkYXRhLnZlcnNpb24gPCAzKSAmJiBkdHNNZXRhZGF0YS5leHBvcnRzKSB7XG4gICAgICBuZXdNZXRhZGF0YS5leHBvcnRzID0gZHRzTWV0YWRhdGEuZXhwb3J0cztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld01ldGFkYXRhO1xufVxuIl19