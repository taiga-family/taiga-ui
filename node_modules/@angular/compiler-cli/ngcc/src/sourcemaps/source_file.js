(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/sourcemaps/source_file", ["require", "exports", "tslib", "convert-source-map", "sourcemap-codec", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker"], factory);
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
    var convert_source_map_1 = require("convert-source-map");
    var sourcemap_codec_1 = require("sourcemap-codec");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var segment_marker_1 = require("@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker");
    function removeSourceMapComments(contents) {
        return convert_source_map_1.removeMapFileComments(convert_source_map_1.removeComments(contents)).replace(/\n\n$/, '\n');
    }
    exports.removeSourceMapComments = removeSourceMapComments;
    var SourceFile = /** @class */ (function () {
        function SourceFile(
        /** The path to this source file. */
        sourcePath, 
        /** The contents of this source file. */
        contents, 
        /** The raw source map (if any) associated with this source file. */
        rawMap, 
        /** Whether this source file's source map was inline or external. */
        inline, 
        /** Any source files referenced by the raw source map associated with this source file. */
        sources) {
            this.sourcePath = sourcePath;
            this.contents = contents;
            this.rawMap = rawMap;
            this.inline = inline;
            this.sources = sources;
            this.contents = removeSourceMapComments(contents);
            this.startOfLinePositions = computeStartOfLinePositions(this.contents);
            this.flattenedMappings = this.flattenMappings();
        }
        /**
         * Render the raw source map generated from the flattened mappings.
         */
        SourceFile.prototype.renderFlattenedSourceMap = function () {
            var e_1, _a;
            var sources = [];
            var names = [];
            var mappings = [];
            try {
                for (var _b = tslib_1.__values(this.flattenedMappings), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var mapping = _c.value;
                    var sourceIndex = findIndexOrAdd(sources, mapping.originalSource);
                    var mappingArray = [
                        mapping.generatedSegment.column,
                        sourceIndex,
                        mapping.originalSegment.line,
                        mapping.originalSegment.column,
                    ];
                    if (mapping.name !== undefined) {
                        var nameIndex = findIndexOrAdd(names, mapping.name);
                        mappingArray.push(nameIndex);
                    }
                    // Ensure a mapping line array for this mapping.
                    var line = mapping.generatedSegment.line;
                    while (line >= mappings.length) {
                        mappings.push([]);
                    }
                    // Add this mapping to the line
                    mappings[line].push(mappingArray);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var sourcePathDir = file_system_1.dirname(this.sourcePath);
            var sourceMap = {
                version: 3,
                file: file_system_1.relative(sourcePathDir, this.sourcePath),
                sources: sources.map(function (sf) { return file_system_1.relative(sourcePathDir, sf.sourcePath); }),
                names: names,
                mappings: sourcemap_codec_1.encode(mappings),
                sourcesContent: sources.map(function (sf) { return sf.contents; }),
            };
            return sourceMap;
        };
        /**
         * Flatten the parsed mappings for this source file, so that all the mappings are to pure original
         * source files with no transitive source maps.
         */
        SourceFile.prototype.flattenMappings = function () {
            var mappings = parseMappings(this.rawMap, this.sources, this.startOfLinePositions);
            ensureOriginalSegmentLinks(mappings);
            var flattenedMappings = [];
            for (var mappingIndex = 0; mappingIndex < mappings.length; mappingIndex++) {
                var aToBmapping = mappings[mappingIndex];
                var bSource = aToBmapping.originalSource;
                if (bSource.flattenedMappings.length === 0) {
                    // The b source file has no mappings of its own (i.e. it is a pure original file)
                    // so just use the mapping as-is.
                    flattenedMappings.push(aToBmapping);
                    continue;
                }
                // The `incomingStart` and `incomingEnd` are the `SegmentMarker`s in `B` that represent the
                // section of `B` source file that is being mapped to by the current `aToBmapping`.
                //
                // For example, consider the mappings from A to B:
                //
                // src A   src B     mapping
                //
                //   a ----- a       [0, 0]
                //   b       b
                //   f -  /- c       [4, 2]
                //   g  \ /  d
                //   c -/\   e
                //   d    \- f       [2, 5]
                //   e
                //
                // For mapping [0,0] the incoming start and end are 0 and 2 (i.e. the range a, b, c)
                // For mapping [4,2] the incoming start and end are 2 and 5 (i.e. the range c, d, e, f)
                //
                var incomingStart = aToBmapping.originalSegment;
                var incomingEnd = incomingStart.next;
                // The `outgoingStartIndex` and `outgoingEndIndex` are the indices of the range of mappings
                // that leave `b` that we are interested in merging with the aToBmapping.
                // We actually care about all the markers from the last bToCmapping directly before the
                // `incomingStart` to the last bToCmaping directly before the `incomingEnd`, inclusive.
                //
                // For example, if we consider the range 2 to 5 from above (i.e. c, d, e, f) with the
                // following mappings from B to C:
                //
                //   src B   src C     mapping
                //     a
                //     b ----- b       [1, 0]
                //   - c       c
                //  |  d       d
                //  |  e ----- 1       [4, 3]
                //   - f  \    2
                //         \   3
                //          \- e       [4, 6]
                //
                // The range with `incomingStart` at 2 and `incomingEnd` at 5 has outgoing start mapping of
                // [1,0] and outgoing end mapping of [4, 6], which also includes [4, 3].
                //
                var outgoingStartIndex = findLastMappingIndexBefore(bSource.flattenedMappings, incomingStart, false, 0);
                if (outgoingStartIndex < 0) {
                    outgoingStartIndex = 0;
                }
                var outgoingEndIndex = incomingEnd !== undefined ?
                    findLastMappingIndexBefore(bSource.flattenedMappings, incomingEnd, true, outgoingStartIndex) :
                    bSource.flattenedMappings.length - 1;
                for (var bToCmappingIndex = outgoingStartIndex; bToCmappingIndex <= outgoingEndIndex; bToCmappingIndex++) {
                    var bToCmapping = bSource.flattenedMappings[bToCmappingIndex];
                    flattenedMappings.push(mergeMappings(this, aToBmapping, bToCmapping));
                }
            }
            return flattenedMappings;
        };
        return SourceFile;
    }());
    exports.SourceFile = SourceFile;
    /**
     *
     * @param mappings The collection of mappings whose segment-markers we are searching.
     * @param marker The segment-marker to match against those of the given `mappings`.
     * @param exclusive If exclusive then we must find a mapping with a segment-marker that is
     * exclusively earlier than the given `marker`.
     * If not exclusive then we can return the highest mappings with an equivalent segment-marker to the
     * given `marker`.
     * @param lowerIndex If provided, this is used as a hint that the marker we are searching for has an
     * index that is no lower than this.
     */
    function findLastMappingIndexBefore(mappings, marker, exclusive, lowerIndex) {
        var upperIndex = mappings.length - 1;
        var test = exclusive ? -1 : 0;
        if (segment_marker_1.compareSegments(mappings[lowerIndex].generatedSegment, marker) > test) {
            // Exit early since the marker is outside the allowed range of mappings.
            return -1;
        }
        var matchingIndex = -1;
        while (lowerIndex <= upperIndex) {
            var index = (upperIndex + lowerIndex) >> 1;
            if (segment_marker_1.compareSegments(mappings[index].generatedSegment, marker) <= test) {
                matchingIndex = index;
                lowerIndex = index + 1;
            }
            else {
                upperIndex = index - 1;
            }
        }
        return matchingIndex;
    }
    exports.findLastMappingIndexBefore = findLastMappingIndexBefore;
    /**
     * Find the index of `item` in the `items` array.
     * If it is not found, then push `item` to the end of the array and return its new index.
     *
     * @param items the collection in which to look for `item`.
     * @param item the item to look for.
     * @returns the index of the `item` in the `items` array.
     */
    function findIndexOrAdd(items, item) {
        var itemIndex = items.indexOf(item);
        if (itemIndex > -1) {
            return itemIndex;
        }
        else {
            items.push(item);
            return items.length - 1;
        }
    }
    /**
     * Merge two mappings that go from A to B and B to C, to result in a mapping that goes from A to C.
     */
    function mergeMappings(generatedSource, ab, bc) {
        var name = bc.name || ab.name;
        // We need to modify the segment-markers of the new mapping to take into account the shifts that
        // occur due to the combination of the two mappings.
        // For example:
        // * Simple map where the B->C starts at the same place the A->B ends:
        //
        // ```
        // A: 1 2 b c d
        //        |        A->B [2,0]
        //        |              |
        // B:     b c d    A->C [2,1]
        //        |                |
        //        |        B->C [0,1]
        // C:   a b c d e
        // ```
        // * More complicated case where diffs of segment-markers is needed:
        //
        // ```
        // A: b 1 2 c d
        //     \
        //      |            A->B  [0,1*]    [0,1*]
        //      |                   |         |+3
        // B: a b 1 2 c d    A->C  [0,1]     [3,2]
        //    |      /                |+1       |
        //    |     /        B->C [0*,0]    [4*,2]
        //    |    /
        // C: a b c d e
        // ```
        //
        // `[0,1]` mapping from A->C:
        // The difference between the "original segment-marker" of A->B (1*) and the "generated
        // segment-marker of B->C (0*): `1 - 0 = +1`.
        // Since it is positive we must increment the "original segment-marker" with `1` to give [0,1].
        //
        // `[3,2]` mapping from A->C:
        // The difference between the "original segment-marker" of A->B (1*) and the "generated
        // segment-marker" of B->C (4*): `1 - 4 = -3`.
        // Since it is negative we must increment the "generated segment-marker" with `3` to give [3,2].
        var diff = segment_marker_1.compareSegments(bc.generatedSegment, ab.originalSegment);
        if (diff > 0) {
            return {
                name: name,
                generatedSegment: segment_marker_1.offsetSegment(generatedSource.startOfLinePositions, ab.generatedSegment, diff),
                originalSource: bc.originalSource,
                originalSegment: bc.originalSegment,
            };
        }
        else {
            return {
                name: name,
                generatedSegment: ab.generatedSegment,
                originalSource: bc.originalSource,
                originalSegment: segment_marker_1.offsetSegment(bc.originalSource.startOfLinePositions, bc.originalSegment, -diff),
            };
        }
    }
    exports.mergeMappings = mergeMappings;
    /**
     * Parse the `rawMappings` into an array of parsed mappings, which reference source-files provided
     * in the `sources` parameter.
     */
    function parseMappings(rawMap, sources, generatedSourceStartOfLinePositions) {
        var e_2, _a;
        if (rawMap === null) {
            return [];
        }
        var rawMappings = sourcemap_codec_1.decode(rawMap.mappings);
        if (rawMappings === null) {
            return [];
        }
        var mappings = [];
        for (var generatedLine = 0; generatedLine < rawMappings.length; generatedLine++) {
            var generatedLineMappings = rawMappings[generatedLine];
            try {
                for (var generatedLineMappings_1 = (e_2 = void 0, tslib_1.__values(generatedLineMappings)), generatedLineMappings_1_1 = generatedLineMappings_1.next(); !generatedLineMappings_1_1.done; generatedLineMappings_1_1 = generatedLineMappings_1.next()) {
                    var rawMapping = generatedLineMappings_1_1.value;
                    if (rawMapping.length >= 4) {
                        var originalSource = sources[rawMapping[1]];
                        if (originalSource === null || originalSource === undefined) {
                            // the original source is missing so ignore this mapping
                            continue;
                        }
                        var generatedColumn = rawMapping[0];
                        var name = rawMapping.length === 5 ? rawMap.names[rawMapping[4]] : undefined;
                        var line = rawMapping[2];
                        var column = rawMapping[3];
                        var generatedSegment = {
                            line: generatedLine,
                            column: generatedColumn,
                            position: generatedSourceStartOfLinePositions[generatedLine] + generatedColumn,
                            next: undefined,
                        };
                        var originalSegment = {
                            line: line,
                            column: column,
                            position: originalSource.startOfLinePositions[line] + column,
                            next: undefined,
                        };
                        mappings.push({ name: name, generatedSegment: generatedSegment, originalSegment: originalSegment, originalSource: originalSource });
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (generatedLineMappings_1_1 && !generatedLineMappings_1_1.done && (_a = generatedLineMappings_1.return)) _a.call(generatedLineMappings_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return mappings;
    }
    exports.parseMappings = parseMappings;
    /**
     * Extract the segment markers from the original source files in each mapping of an array of
     * `mappings`.
     *
     * @param mappings The mappings whose original segments we want to extract
     * @returns Return a map from original source-files (referenced in the `mappings`) to arrays of
     * segment-markers sorted by their order in their source file.
     */
    function extractOriginalSegments(mappings) {
        var e_3, _a;
        var originalSegments = new Map();
        try {
            for (var mappings_1 = tslib_1.__values(mappings), mappings_1_1 = mappings_1.next(); !mappings_1_1.done; mappings_1_1 = mappings_1.next()) {
                var mapping = mappings_1_1.value;
                var originalSource = mapping.originalSource;
                if (!originalSegments.has(originalSource)) {
                    originalSegments.set(originalSource, []);
                }
                var segments = originalSegments.get(originalSource);
                segments.push(mapping.originalSegment);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (mappings_1_1 && !mappings_1_1.done && (_a = mappings_1.return)) _a.call(mappings_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        originalSegments.forEach(function (segmentMarkers) { return segmentMarkers.sort(segment_marker_1.compareSegments); });
        return originalSegments;
    }
    exports.extractOriginalSegments = extractOriginalSegments;
    /**
     * Update the original segments of each of the given `mappings` to include a link to the next
     * segment in the source file.
     *
     * @param mappings the mappings whose segments should be updated
     */
    function ensureOriginalSegmentLinks(mappings) {
        var segmentsBySource = extractOriginalSegments(mappings);
        segmentsBySource.forEach(function (markers) {
            for (var i = 0; i < markers.length - 1; i++) {
                markers[i].next = markers[i + 1];
            }
        });
    }
    exports.ensureOriginalSegmentLinks = ensureOriginalSegmentLinks;
    function computeStartOfLinePositions(str) {
        // The `1` is to indicate a newline character between the lines.
        // Note that in the actual contents there could be more than one character that indicates a
        // newline
        // - e.g. \r\n - but that is not important here since segment-markers are in line/column pairs and
        // so differences in length due to extra `\r` characters do not affect the algorithms.
        var NEWLINE_MARKER_OFFSET = 1;
        var lineLengths = computeLineLengths(str);
        var startPositions = [0]; // First line starts at position 0
        for (var i = 0; i < lineLengths.length - 1; i++) {
            startPositions.push(startPositions[i] + lineLengths[i] + NEWLINE_MARKER_OFFSET);
        }
        return startPositions;
    }
    exports.computeStartOfLinePositions = computeStartOfLinePositions;
    function computeLineLengths(str) {
        return (str.split(/\r?\n/)).map(function (s) { return s.length; });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvc291cmNlbWFwcy9zb3VyY2VfZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCx5REFBeUU7SUFDekUsbURBQW9GO0lBRXBGLDJFQUFpRjtJQUdqRiwyRkFBK0U7SUFFL0UsU0FBZ0IsdUJBQXVCLENBQUMsUUFBZ0I7UUFDdEQsT0FBTywwQ0FBcUIsQ0FBQyxtQ0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRkQsMERBRUM7SUFFRDtRQVdFO1FBQ0ksb0NBQW9DO1FBQzNCLFVBQTBCO1FBQ25DLHdDQUF3QztRQUMvQixRQUFnQjtRQUN6QixvRUFBb0U7UUFDM0QsTUFBeUI7UUFDbEMsb0VBQW9FO1FBQzNELE1BQWU7UUFDeEIsMEZBQTBGO1FBQ2pGLE9BQTRCO1lBUjVCLGVBQVUsR0FBVixVQUFVLENBQWdCO1lBRTFCLGFBQVEsR0FBUixRQUFRLENBQVE7WUFFaEIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7WUFFekIsV0FBTSxHQUFOLE1BQU0sQ0FBUztZQUVmLFlBQU8sR0FBUCxPQUFPLENBQXFCO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFFRDs7V0FFRztRQUNILDZDQUF3QixHQUF4Qjs7WUFDRSxJQUFNLE9BQU8sR0FBaUIsRUFBRSxDQUFDO1lB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RyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFQRCxnRUFPQztJQUVELFNBQWdCLDJCQUEyQixDQUFDLEdBQVc7UUFDckQsZ0VBQWdFO1FBQ2hFLDJGQUEyRjtRQUMzRixVQUFVO1FBQ1Ysa0dBQWtHO1FBQ2xHLHNGQUFzRjtRQUN0RixJQUFNLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsa0NBQWtDO1FBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUMsQ0FBQztTQUNqRjtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFiRCxrRUFhQztJQUVELFNBQVMsa0JBQWtCLENBQUMsR0FBVztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUM7SUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7cmVtb3ZlQ29tbWVudHMsIHJlbW92ZU1hcEZpbGVDb21tZW50c30gZnJvbSAnY29udmVydC1zb3VyY2UtbWFwJztcbmltcG9ydCB7ZGVjb2RlLCBlbmNvZGUsIFNvdXJjZU1hcE1hcHBpbmdzLCBTb3VyY2VNYXBTZWdtZW50fSBmcm9tICdzb3VyY2VtYXAtY29kZWMnO1xuXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBkaXJuYW1lLCByZWxhdGl2ZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcblxuaW1wb3J0IHtSYXdTb3VyY2VNYXB9IGZyb20gJy4vcmF3X3NvdXJjZV9tYXAnO1xuaW1wb3J0IHtjb21wYXJlU2VnbWVudHMsIG9mZnNldFNlZ21lbnQsIFNlZ21lbnRNYXJrZXJ9IGZyb20gJy4vc2VnbWVudF9tYXJrZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU291cmNlTWFwQ29tbWVudHMoY29udGVudHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiByZW1vdmVNYXBGaWxlQ29tbWVudHMocmVtb3ZlQ29tbWVudHMoY29udGVudHMpKS5yZXBsYWNlKC9cXG5cXG4kLywgJ1xcbicpO1xufVxuXG5leHBvcnQgY2xhc3MgU291cmNlRmlsZSB7XG4gIC8qKlxuICAgKiBUaGUgcGFyc2VkIG1hcHBpbmdzIHRoYXQgaGF2ZSBiZWVuIGZsYXR0ZW5lZCBzbyB0aGF0IGFueSBpbnRlcm1lZGlhdGUgc291cmNlIG1hcHBpbmdzIGhhdmUgYmVlblxuICAgKiBmbGF0dGVuZWQuXG4gICAqXG4gICAqIFRoZSByZXN1bHQgaXMgdGhhdCBhbnkgc291cmNlIGZpbGUgbWVudGlvbmVkIGluIHRoZSBmbGF0dGVuZWQgbWFwcGluZ3MgaGF2ZSBubyBzb3VyY2UgbWFwIChhcmVcbiAgICogcHVyZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMpLlxuICAgKi9cbiAgcmVhZG9ubHkgZmxhdHRlbmVkTWFwcGluZ3M6IE1hcHBpbmdbXTtcbiAgcmVhZG9ubHkgc3RhcnRPZkxpbmVQb3NpdGlvbnM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFRoZSBwYXRoIHRvIHRoaXMgc291cmNlIGZpbGUuICovXG4gICAgICByZWFkb25seSBzb3VyY2VQYXRoOiBBYnNvbHV0ZUZzUGF0aCxcbiAgICAgIC8qKiBUaGUgY29udGVudHMgb2YgdGhpcyBzb3VyY2UgZmlsZS4gKi9cbiAgICAgIHJlYWRvbmx5IGNvbnRlbnRzOiBzdHJpbmcsXG4gICAgICAvKiogVGhlIHJhdyBzb3VyY2UgbWFwIChpZiBhbnkpIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNvdXJjZSBmaWxlLiAqL1xuICAgICAgcmVhZG9ubHkgcmF3TWFwOiBSYXdTb3VyY2VNYXB8bnVsbCxcbiAgICAgIC8qKiBXaGV0aGVyIHRoaXMgc291cmNlIGZpbGUncyBzb3VyY2UgbWFwIHdhcyBpbmxpbmUgb3IgZXh0ZXJuYWwuICovXG4gICAgICByZWFkb25seSBpbmxpbmU6IGJvb2xlYW4sXG4gICAgICAvKiogQW55IHNvdXJjZSBmaWxlcyByZWZlcmVuY2VkIGJ5IHRoZSByYXcgc291cmNlIG1hcCBhc3NvY2lhdGVkIHdpdGggdGhpcyBzb3VyY2UgZmlsZS4gKi9cbiAgICAgIHJlYWRvbmx5IHNvdXJjZXM6IChTb3VyY2VGaWxlfG51bGwpW10pIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gcmVtb3ZlU291cmNlTWFwQ29tbWVudHMoY29udGVudHMpO1xuICAgIHRoaXMuc3RhcnRPZkxpbmVQb3NpdGlvbnMgPSBjb21wdXRlU3RhcnRPZkxpbmVQb3NpdGlvbnModGhpcy5jb250ZW50cyk7XG4gICAgdGhpcy5mbGF0dGVuZWRNYXBwaW5ncyA9IHRoaXMuZmxhdHRlbk1hcHBpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSByYXcgc291cmNlIG1hcCBnZW5lcmF0ZWQgZnJvbSB0aGUgZmxhdHRlbmVkIG1hcHBpbmdzLlxuICAgKi9cbiAgcmVuZGVyRmxhdHRlbmVkU291cmNlTWFwKCk6IFJhd1NvdXJjZU1hcCB7XG4gICAgY29uc3Qgc291cmNlczogU291cmNlRmlsZVtdID0gW107XG4gICAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBtYXBwaW5nczogU291cmNlTWFwTWFwcGluZ3MgPSBbXTtcblxuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiB0aGlzLmZsYXR0ZW5lZE1hcHBpbmdzKSB7XG4gICAgICBjb25zdCBzb3VyY2VJbmRleCA9IGZpbmRJbmRleE9yQWRkKHNvdXJjZXMsIG1hcHBpbmcub3JpZ2luYWxTb3VyY2UpO1xuICAgICAgY29uc3QgbWFwcGluZ0FycmF5OiBTb3VyY2VNYXBTZWdtZW50ID0gW1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZFNlZ21lbnQuY29sdW1uLFxuICAgICAgICBzb3VyY2VJbmRleCxcbiAgICAgICAgbWFwcGluZy5vcmlnaW5hbFNlZ21lbnQubGluZSxcbiAgICAgICAgbWFwcGluZy5vcmlnaW5hbFNlZ21lbnQuY29sdW1uLFxuICAgICAgXTtcbiAgICAgIGlmIChtYXBwaW5nLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBuYW1lSW5kZXggPSBmaW5kSW5kZXhPckFkZChuYW1lcywgbWFwcGluZy5uYW1lKTtcbiAgICAgICAgbWFwcGluZ0FycmF5LnB1c2gobmFtZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlIGEgbWFwcGluZyBsaW5lIGFycmF5IGZvciB0aGlzIG1hcHBpbmcuXG4gICAgICBjb25zdCBsaW5lID0gbWFwcGluZy5nZW5lcmF0ZWRTZWdtZW50LmxpbmU7XG4gICAgICB3aGlsZSAobGluZSA+PSBtYXBwaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgbWFwcGluZ3MucHVzaChbXSk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgdGhpcyBtYXBwaW5nIHRvIHRoZSBsaW5lXG4gICAgICBtYXBwaW5nc1tsaW5lXS5wdXNoKG1hcHBpbmdBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlUGF0aERpciA9IGRpcm5hbWUodGhpcy5zb3VyY2VQYXRoKTtcbiAgICBjb25zdCBzb3VyY2VNYXA6IFJhd1NvdXJjZU1hcCA9IHtcbiAgICAgIHZlcnNpb246IDMsXG4gICAgICBmaWxlOiByZWxhdGl2ZShzb3VyY2VQYXRoRGlyLCB0aGlzLnNvdXJjZVBhdGgpLFxuICAgICAgc291cmNlczogc291cmNlcy5tYXAoc2YgPT4gcmVsYXRpdmUoc291cmNlUGF0aERpciwgc2Yuc291cmNlUGF0aCkpLFxuICAgICAgbmFtZXMsXG4gICAgICBtYXBwaW5nczogZW5jb2RlKG1hcHBpbmdzKSxcbiAgICAgIHNvdXJjZXNDb250ZW50OiBzb3VyY2VzLm1hcChzZiA9PiBzZi5jb250ZW50cyksXG4gICAgfTtcbiAgICByZXR1cm4gc291cmNlTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEZsYXR0ZW4gdGhlIHBhcnNlZCBtYXBwaW5ncyBmb3IgdGhpcyBzb3VyY2UgZmlsZSwgc28gdGhhdCBhbGwgdGhlIG1hcHBpbmdzIGFyZSB0byBwdXJlIG9yaWdpbmFsXG4gICAqIHNvdXJjZSBmaWxlcyB3aXRoIG5vIHRyYW5zaXRpdmUgc291cmNlIG1hcHMuXG4gICAqL1xuICBwcml2YXRlIGZsYXR0ZW5NYXBwaW5ncygpOiBNYXBwaW5nW10ge1xuICAgIGNvbnN0IG1hcHBpbmdzID0gcGFyc2VNYXBwaW5ncyh0aGlzLnJhd01hcCwgdGhpcy5zb3VyY2VzLCB0aGlzLnN0YXJ0T2ZMaW5lUG9zaXRpb25zKTtcbiAgICBlbnN1cmVPcmlnaW5hbFNlZ21lbnRMaW5rcyhtYXBwaW5ncyk7XG4gICAgY29uc3QgZmxhdHRlbmVkTWFwcGluZ3M6IE1hcHBpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IG1hcHBpbmdJbmRleCA9IDA7IG1hcHBpbmdJbmRleCA8IG1hcHBpbmdzLmxlbmd0aDsgbWFwcGluZ0luZGV4KyspIHtcbiAgICAgIGNvbnN0IGFUb0JtYXBwaW5nID0gbWFwcGluZ3NbbWFwcGluZ0luZGV4XTtcbiAgICAgIGNvbnN0IGJTb3VyY2UgPSBhVG9CbWFwcGluZy5vcmlnaW5hbFNvdXJjZTtcbiAgICAgIGlmIChiU291cmNlLmZsYXR0ZW5lZE1hcHBpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBUaGUgYiBzb3VyY2UgZmlsZSBoYXMgbm8gbWFwcGluZ3Mgb2YgaXRzIG93biAoaS5lLiBpdCBpcyBhIHB1cmUgb3JpZ2luYWwgZmlsZSlcbiAgICAgICAgLy8gc28ganVzdCB1c2UgdGhlIG1hcHBpbmcgYXMtaXMuXG4gICAgICAgIGZsYXR0ZW5lZE1hcHBpbmdzLnB1c2goYVRvQm1hcHBpbmcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGBpbmNvbWluZ1N0YXJ0YCBhbmQgYGluY29taW5nRW5kYCBhcmUgdGhlIGBTZWdtZW50TWFya2VyYHMgaW4gYEJgIHRoYXQgcmVwcmVzZW50IHRoZVxuICAgICAgLy8gc2VjdGlvbiBvZiBgQmAgc291cmNlIGZpbGUgdGhhdCBpcyBiZWluZyBtYXBwZWQgdG8gYnkgdGhlIGN1cnJlbnQgYGFUb0JtYXBwaW5nYC5cbiAgICAgIC8vXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIG1hcHBpbmdzIGZyb20gQSB0byBCOlxuICAgICAgLy9cbiAgICAgIC8vIHNyYyBBICAgc3JjIEIgICAgIG1hcHBpbmdcbiAgICAgIC8vXG4gICAgICAvLyAgIGEgLS0tLS0gYSAgICAgICBbMCwgMF1cbiAgICAgIC8vICAgYiAgICAgICBiXG4gICAgICAvLyAgIGYgLSAgLy0gYyAgICAgICBbNCwgMl1cbiAgICAgIC8vICAgZyAgXFwgLyAgZFxuICAgICAgLy8gICBjIC0vXFwgICBlXG4gICAgICAvLyAgIGQgICAgXFwtIGYgICAgICAgWzIsIDVdXG4gICAgICAvLyAgIGVcbiAgICAgIC8vXG4gICAgICAvLyBGb3IgbWFwcGluZyBbMCwwXSB0aGUgaW5jb21pbmcgc3RhcnQgYW5kIGVuZCBhcmUgMCBhbmQgMiAoaS5lLiB0aGUgcmFuZ2UgYSwgYiwgYylcbiAgICAgIC8vIEZvciBtYXBwaW5nIFs0LDJdIHRoZSBpbmNvbWluZyBzdGFydCBhbmQgZW5kIGFyZSAyIGFuZCA1IChpLmUuIHRoZSByYW5nZSBjLCBkLCBlLCBmKVxuICAgICAgLy9cbiAgICAgIGNvbnN0IGluY29taW5nU3RhcnQgPSBhVG9CbWFwcGluZy5vcmlnaW5hbFNlZ21lbnQ7XG4gICAgICBjb25zdCBpbmNvbWluZ0VuZCA9IGluY29taW5nU3RhcnQubmV4dDtcblxuICAgICAgLy8gVGhlIGBvdXRnb2luZ1N0YXJ0SW5kZXhgIGFuZCBgb3V0Z29pbmdFbmRJbmRleGAgYXJlIHRoZSBpbmRpY2VzIG9mIHRoZSByYW5nZSBvZiBtYXBwaW5nc1xuICAgICAgLy8gdGhhdCBsZWF2ZSBgYmAgdGhhdCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBtZXJnaW5nIHdpdGggdGhlIGFUb0JtYXBwaW5nLlxuICAgICAgLy8gV2UgYWN0dWFsbHkgY2FyZSBhYm91dCBhbGwgdGhlIG1hcmtlcnMgZnJvbSB0aGUgbGFzdCBiVG9DbWFwcGluZyBkaXJlY3RseSBiZWZvcmUgdGhlXG4gICAgICAvLyBgaW5jb21pbmdTdGFydGAgdG8gdGhlIGxhc3QgYlRvQ21hcGluZyBkaXJlY3RseSBiZWZvcmUgdGhlIGBpbmNvbWluZ0VuZGAsIGluY2x1c2l2ZS5cbiAgICAgIC8vXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgd2UgY29uc2lkZXIgdGhlIHJhbmdlIDIgdG8gNSBmcm9tIGFib3ZlIChpLmUuIGMsIGQsIGUsIGYpIHdpdGggdGhlXG4gICAgICAvLyBmb2xsb3dpbmcgbWFwcGluZ3MgZnJvbSBCIHRvIEM6XG4gICAgICAvL1xuICAgICAgLy8gICBzcmMgQiAgIHNyYyBDICAgICBtYXBwaW5nXG4gICAgICAvLyAgICAgYVxuICAgICAgLy8gICAgIGIgLS0tLS0gYiAgICAgICBbMSwgMF1cbiAgICAgIC8vICAgLSBjICAgICAgIGNcbiAgICAgIC8vICB8ICBkICAgICAgIGRcbiAgICAgIC8vICB8ICBlIC0tLS0tIDEgICAgICAgWzQsIDNdXG4gICAgICAvLyAgIC0gZiAgXFwgICAgMlxuICAgICAgLy8gICAgICAgICBcXCAgIDNcbiAgICAgIC8vICAgICAgICAgIFxcLSBlICAgICAgIFs0LCA2XVxuICAgICAgLy9cbiAgICAgIC8vIFRoZSByYW5nZSB3aXRoIGBpbmNvbWluZ1N0YXJ0YCBhdCAyIGFuZCBgaW5jb21pbmdFbmRgIGF0IDUgaGFzIG91dGdvaW5nIHN0YXJ0IG1hcHBpbmcgb2ZcbiAgICAgIC8vIFsxLDBdIGFuZCBvdXRnb2luZyBlbmQgbWFwcGluZyBvZiBbNCwgNl0sIHdoaWNoIGFsc28gaW5jbHVkZXMgWzQsIDNdLlxuICAgICAgLy9cbiAgICAgIGxldCBvdXRnb2luZ1N0YXJ0SW5kZXggPVxuICAgICAgICAgIGZpbmRMYXN0TWFwcGluZ0luZGV4QmVmb3JlKGJTb3VyY2UuZmxhdHRlbmVkTWFwcGluZ3MsIGluY29taW5nU3RhcnQsIGZhbHNlLCAwKTtcbiAgICAgIGlmIChvdXRnb2luZ1N0YXJ0SW5kZXggPCAwKSB7XG4gICAgICAgIG91dGdvaW5nU3RhcnRJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBjb25zdCBvdXRnb2luZ0VuZEluZGV4ID0gaW5jb21pbmdFbmQgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgZmluZExhc3RNYXBwaW5nSW5kZXhCZWZvcmUoXG4gICAgICAgICAgICAgIGJTb3VyY2UuZmxhdHRlbmVkTWFwcGluZ3MsIGluY29taW5nRW5kLCB0cnVlLCBvdXRnb2luZ1N0YXJ0SW5kZXgpIDpcbiAgICAgICAgICBiU291cmNlLmZsYXR0ZW5lZE1hcHBpbmdzLmxlbmd0aCAtIDE7XG5cbiAgICAgIGZvciAobGV0IGJUb0NtYXBwaW5nSW5kZXggPSBvdXRnb2luZ1N0YXJ0SW5kZXg7IGJUb0NtYXBwaW5nSW5kZXggPD0gb3V0Z29pbmdFbmRJbmRleDtcbiAgICAgICAgICAgYlRvQ21hcHBpbmdJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGJUb0NtYXBwaW5nOiBNYXBwaW5nID0gYlNvdXJjZS5mbGF0dGVuZWRNYXBwaW5nc1tiVG9DbWFwcGluZ0luZGV4XTtcbiAgICAgICAgZmxhdHRlbmVkTWFwcGluZ3MucHVzaChtZXJnZU1hcHBpbmdzKHRoaXMsIGFUb0JtYXBwaW5nLCBiVG9DbWFwcGluZykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbmVkTWFwcGluZ3M7XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1hcHBpbmdzIFRoZSBjb2xsZWN0aW9uIG9mIG1hcHBpbmdzIHdob3NlIHNlZ21lbnQtbWFya2VycyB3ZSBhcmUgc2VhcmNoaW5nLlxuICogQHBhcmFtIG1hcmtlciBUaGUgc2VnbWVudC1tYXJrZXIgdG8gbWF0Y2ggYWdhaW5zdCB0aG9zZSBvZiB0aGUgZ2l2ZW4gYG1hcHBpbmdzYC5cbiAqIEBwYXJhbSBleGNsdXNpdmUgSWYgZXhjbHVzaXZlIHRoZW4gd2UgbXVzdCBmaW5kIGEgbWFwcGluZyB3aXRoIGEgc2VnbWVudC1tYXJrZXIgdGhhdCBpc1xuICogZXhjbHVzaXZlbHkgZWFybGllciB0aGFuIHRoZSBnaXZlbiBgbWFya2VyYC5cbiAqIElmIG5vdCBleGNsdXNpdmUgdGhlbiB3ZSBjYW4gcmV0dXJuIHRoZSBoaWdoZXN0IG1hcHBpbmdzIHdpdGggYW4gZXF1aXZhbGVudCBzZWdtZW50LW1hcmtlciB0byB0aGVcbiAqIGdpdmVuIGBtYXJrZXJgLlxuICogQHBhcmFtIGxvd2VySW5kZXggSWYgcHJvdmlkZWQsIHRoaXMgaXMgdXNlZCBhcyBhIGhpbnQgdGhhdCB0aGUgbWFya2VyIHdlIGFyZSBzZWFyY2hpbmcgZm9yIGhhcyBhblxuICogaW5kZXggdGhhdCBpcyBubyBsb3dlciB0aGFuIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdE1hcHBpbmdJbmRleEJlZm9yZShcbiAgICBtYXBwaW5nczogTWFwcGluZ1tdLCBtYXJrZXI6IFNlZ21lbnRNYXJrZXIsIGV4Y2x1c2l2ZTogYm9vbGVhbiwgbG93ZXJJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHVwcGVySW5kZXggPSBtYXBwaW5ncy5sZW5ndGggLSAxO1xuICBjb25zdCB0ZXN0ID0gZXhjbHVzaXZlID8gLTEgOiAwO1xuXG4gIGlmIChjb21wYXJlU2VnbWVudHMobWFwcGluZ3NbbG93ZXJJbmRleF0uZ2VuZXJhdGVkU2VnbWVudCwgbWFya2VyKSA+IHRlc3QpIHtcbiAgICAvLyBFeGl0IGVhcmx5IHNpbmNlIHRoZSBtYXJrZXIgaXMgb3V0c2lkZSB0aGUgYWxsb3dlZCByYW5nZSBvZiBtYXBwaW5ncy5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBsZXQgbWF0Y2hpbmdJbmRleCA9IC0xO1xuICB3aGlsZSAobG93ZXJJbmRleCA8PSB1cHBlckluZGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSAodXBwZXJJbmRleCArIGxvd2VySW5kZXgpID4+IDE7XG4gICAgaWYgKGNvbXBhcmVTZWdtZW50cyhtYXBwaW5nc1tpbmRleF0uZ2VuZXJhdGVkU2VnbWVudCwgbWFya2VyKSA8PSB0ZXN0KSB7XG4gICAgICBtYXRjaGluZ0luZGV4ID0gaW5kZXg7XG4gICAgICBsb3dlckluZGV4ID0gaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlckluZGV4ID0gaW5kZXggLSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hpbmdJbmRleDtcbn1cblxuLyoqXG4gKiBBIE1hcHBpbmcgY29uc2lzdHMgb2YgdHdvIHNlZ21lbnQgbWFya2Vyczogb25lIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlIGFuZCBvbmUgaW4gdGhlIG9yaWdpbmFsXG4gKiBzb3VyY2UsIHdoaWNoIGluZGljYXRlIHRoZSBzdGFydCBvZiBlYWNoIHNlZ21lbnQuIFRoZSBlbmQgb2YgYSBzZWdtZW50IGlzIGluZGljYXRlZCBieSB0aGUgZmlyc3RcbiAqIHNlZ21lbnQgbWFya2VyIG9mIGFub3RoZXIgbWFwcGluZyB3aG9zZSBzdGFydCBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoaXMgb25lLlxuICpcbiAqIEl0IG1heSBhbHNvIGluY2x1ZGUgYSBuYW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2VnbWVudCBiZWluZyBtYXBwZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwcGluZyB7XG4gIHJlYWRvbmx5IGdlbmVyYXRlZFNlZ21lbnQ6IFNlZ21lbnRNYXJrZXI7XG4gIHJlYWRvbmx5IG9yaWdpbmFsU291cmNlOiBTb3VyY2VGaWxlO1xuICByZWFkb25seSBvcmlnaW5hbFNlZ21lbnQ6IFNlZ21lbnRNYXJrZXI7XG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRmluZCB0aGUgaW5kZXggb2YgYGl0ZW1gIGluIHRoZSBgaXRlbXNgIGFycmF5LlxuICogSWYgaXQgaXMgbm90IGZvdW5kLCB0aGVuIHB1c2ggYGl0ZW1gIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm4gaXRzIG5ldyBpbmRleC5cbiAqXG4gKiBAcGFyYW0gaXRlbXMgdGhlIGNvbGxlY3Rpb24gaW4gd2hpY2ggdG8gbG9vayBmb3IgYGl0ZW1gLlxuICogQHBhcmFtIGl0ZW0gdGhlIGl0ZW0gdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGBpdGVtYCBpbiB0aGUgYGl0ZW1zYCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4T3JBZGQ8VD4oaXRlbXM6IFRbXSwgaXRlbTogVCk6IG51bWJlciB7XG4gIGNvbnN0IGl0ZW1JbmRleCA9IGl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoIC0gMTtcbiAgfVxufVxuXG5cbi8qKlxuICogTWVyZ2UgdHdvIG1hcHBpbmdzIHRoYXQgZ28gZnJvbSBBIHRvIEIgYW5kIEIgdG8gQywgdG8gcmVzdWx0IGluIGEgbWFwcGluZyB0aGF0IGdvZXMgZnJvbSBBIHRvIEMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcHBpbmdzKGdlbmVyYXRlZFNvdXJjZTogU291cmNlRmlsZSwgYWI6IE1hcHBpbmcsIGJjOiBNYXBwaW5nKTogTWFwcGluZyB7XG4gIGNvbnN0IG5hbWUgPSBiYy5uYW1lIHx8IGFiLm5hbWU7XG5cbiAgLy8gV2UgbmVlZCB0byBtb2RpZnkgdGhlIHNlZ21lbnQtbWFya2VycyBvZiB0aGUgbmV3IG1hcHBpbmcgdG8gdGFrZSBpbnRvIGFjY291bnQgdGhlIHNoaWZ0cyB0aGF0XG4gIC8vIG9jY3VyIGR1ZSB0byB0aGUgY29tYmluYXRpb24gb2YgdGhlIHR3byBtYXBwaW5ncy5cbiAgLy8gRm9yIGV4YW1wbGU6XG5cbiAgLy8gKiBTaW1wbGUgbWFwIHdoZXJlIHRoZSBCLT5DIHN0YXJ0cyBhdCB0aGUgc2FtZSBwbGFjZSB0aGUgQS0+QiBlbmRzOlxuICAvL1xuICAvLyBgYGBcbiAgLy8gQTogMSAyIGIgYyBkXG4gIC8vICAgICAgICB8ICAgICAgICBBLT5CIFsyLDBdXG4gIC8vICAgICAgICB8ICAgICAgICAgICAgICB8XG4gIC8vIEI6ICAgICBiIGMgZCAgICBBLT5DIFsyLDFdXG4gIC8vICAgICAgICB8ICAgICAgICAgICAgICAgIHxcbiAgLy8gICAgICAgIHwgICAgICAgIEItPkMgWzAsMV1cbiAgLy8gQzogICBhIGIgYyBkIGVcbiAgLy8gYGBgXG5cbiAgLy8gKiBNb3JlIGNvbXBsaWNhdGVkIGNhc2Ugd2hlcmUgZGlmZnMgb2Ygc2VnbWVudC1tYXJrZXJzIGlzIG5lZWRlZDpcbiAgLy9cbiAgLy8gYGBgXG4gIC8vIEE6IGIgMSAyIGMgZFxuICAvLyAgICAgXFxcbiAgLy8gICAgICB8ICAgICAgICAgICAgQS0+QiAgWzAsMSpdICAgIFswLDEqXVxuICAvLyAgICAgIHwgICAgICAgICAgICAgICAgICAgfCAgICAgICAgIHwrM1xuICAvLyBCOiBhIGIgMSAyIGMgZCAgICBBLT5DICBbMCwxXSAgICAgWzMsMl1cbiAgLy8gICAgfCAgICAgIC8gICAgICAgICAgICAgICAgfCsxICAgICAgIHxcbiAgLy8gICAgfCAgICAgLyAgICAgICAgQi0+QyBbMCosMF0gICAgWzQqLDJdXG4gIC8vICAgIHwgICAgL1xuICAvLyBDOiBhIGIgYyBkIGVcbiAgLy8gYGBgXG4gIC8vXG4gIC8vIGBbMCwxXWAgbWFwcGluZyBmcm9tIEEtPkM6XG4gIC8vIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIFwib3JpZ2luYWwgc2VnbWVudC1tYXJrZXJcIiBvZiBBLT5CICgxKikgYW5kIHRoZSBcImdlbmVyYXRlZFxuICAvLyBzZWdtZW50LW1hcmtlciBvZiBCLT5DICgwKik6IGAxIC0gMCA9ICsxYC5cbiAgLy8gU2luY2UgaXQgaXMgcG9zaXRpdmUgd2UgbXVzdCBpbmNyZW1lbnQgdGhlIFwib3JpZ2luYWwgc2VnbWVudC1tYXJrZXJcIiB3aXRoIGAxYCB0byBnaXZlIFswLDFdLlxuICAvL1xuICAvLyBgWzMsMl1gIG1hcHBpbmcgZnJvbSBBLT5DOlxuICAvLyBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBcIm9yaWdpbmFsIHNlZ21lbnQtbWFya2VyXCIgb2YgQS0+QiAoMSopIGFuZCB0aGUgXCJnZW5lcmF0ZWRcbiAgLy8gc2VnbWVudC1tYXJrZXJcIiBvZiBCLT5DICg0Kik6IGAxIC0gNCA9IC0zYC5cbiAgLy8gU2luY2UgaXQgaXMgbmVnYXRpdmUgd2UgbXVzdCBpbmNyZW1lbnQgdGhlIFwiZ2VuZXJhdGVkIHNlZ21lbnQtbWFya2VyXCIgd2l0aCBgM2AgdG8gZ2l2ZSBbMywyXS5cblxuICBjb25zdCBkaWZmID0gY29tcGFyZVNlZ21lbnRzKGJjLmdlbmVyYXRlZFNlZ21lbnQsIGFiLm9yaWdpbmFsU2VnbWVudCk7XG4gIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZ2VuZXJhdGVkU2VnbWVudDpcbiAgICAgICAgICBvZmZzZXRTZWdtZW50KGdlbmVyYXRlZFNvdXJjZS5zdGFydE9mTGluZVBvc2l0aW9ucywgYWIuZ2VuZXJhdGVkU2VnbWVudCwgZGlmZiksXG4gICAgICBvcmlnaW5hbFNvdXJjZTogYmMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBvcmlnaW5hbFNlZ21lbnQ6IGJjLm9yaWdpbmFsU2VnbWVudCxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZ2VuZXJhdGVkU2VnbWVudDogYWIuZ2VuZXJhdGVkU2VnbWVudCxcbiAgICAgIG9yaWdpbmFsU291cmNlOiBiYy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU2VnbWVudDpcbiAgICAgICAgICBvZmZzZXRTZWdtZW50KGJjLm9yaWdpbmFsU291cmNlLnN0YXJ0T2ZMaW5lUG9zaXRpb25zLCBiYy5vcmlnaW5hbFNlZ21lbnQsIC1kaWZmKSxcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIGByYXdNYXBwaW5nc2AgaW50byBhbiBhcnJheSBvZiBwYXJzZWQgbWFwcGluZ3MsIHdoaWNoIHJlZmVyZW5jZSBzb3VyY2UtZmlsZXMgcHJvdmlkZWRcbiAqIGluIHRoZSBgc291cmNlc2AgcGFyYW1ldGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNYXBwaW5ncyhcbiAgICByYXdNYXA6IFJhd1NvdXJjZU1hcHxudWxsLCBzb3VyY2VzOiAoU291cmNlRmlsZXxudWxsKVtdLFxuICAgIGdlbmVyYXRlZFNvdXJjZVN0YXJ0T2ZMaW5lUG9zaXRpb25zOiBudW1iZXJbXSk6IE1hcHBpbmdbXSB7XG4gIGlmIChyYXdNYXAgPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCByYXdNYXBwaW5ncyA9IGRlY29kZShyYXdNYXAubWFwcGluZ3MpO1xuICBpZiAocmF3TWFwcGluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBtYXBwaW5nczogTWFwcGluZ1tdID0gW107XG4gIGZvciAobGV0IGdlbmVyYXRlZExpbmUgPSAwOyBnZW5lcmF0ZWRMaW5lIDwgcmF3TWFwcGluZ3MubGVuZ3RoOyBnZW5lcmF0ZWRMaW5lKyspIHtcbiAgICBjb25zdCBnZW5lcmF0ZWRMaW5lTWFwcGluZ3MgPSByYXdNYXBwaW5nc1tnZW5lcmF0ZWRMaW5lXTtcbiAgICBmb3IgKGNvbnN0IHJhd01hcHBpbmcgb2YgZ2VuZXJhdGVkTGluZU1hcHBpbmdzKSB7XG4gICAgICBpZiAocmF3TWFwcGluZy5sZW5ndGggPj0gNCkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNvdXJjZSA9IHNvdXJjZXNbcmF3TWFwcGluZ1sxXSFdO1xuICAgICAgICBpZiAob3JpZ2luYWxTb3VyY2UgPT09IG51bGwgfHwgb3JpZ2luYWxTb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgbWlzc2luZyBzbyBpZ25vcmUgdGhpcyBtYXBwaW5nXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkQ29sdW1uID0gcmF3TWFwcGluZ1swXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJhd01hcHBpbmcubGVuZ3RoID09PSA1ID8gcmF3TWFwLm5hbWVzW3Jhd01hcHBpbmdbNF1dIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBsaW5lID0gcmF3TWFwcGluZ1syXSE7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHJhd01hcHBpbmdbM10hO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZWRTZWdtZW50OiBTZWdtZW50TWFya2VyID0ge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWRDb2x1bW4sXG4gICAgICAgICAgcG9zaXRpb246IGdlbmVyYXRlZFNvdXJjZVN0YXJ0T2ZMaW5lUG9zaXRpb25zW2dlbmVyYXRlZExpbmVdICsgZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWdtZW50OiBTZWdtZW50TWFya2VyID0ge1xuICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIHBvc2l0aW9uOiBvcmlnaW5hbFNvdXJjZS5zdGFydE9mTGluZVBvc2l0aW9uc1tsaW5lXSArIGNvbHVtbixcbiAgICAgICAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIG1hcHBpbmdzLnB1c2goe25hbWUsIGdlbmVyYXRlZFNlZ21lbnQsIG9yaWdpbmFsU2VnbWVudCwgb3JpZ2luYWxTb3VyY2V9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hcHBpbmdzO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIHNlZ21lbnQgbWFya2VycyBmcm9tIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMgaW4gZWFjaCBtYXBwaW5nIG9mIGFuIGFycmF5IG9mXG4gKiBgbWFwcGluZ3NgLlxuICpcbiAqIEBwYXJhbSBtYXBwaW5ncyBUaGUgbWFwcGluZ3Mgd2hvc2Ugb3JpZ2luYWwgc2VnbWVudHMgd2Ugd2FudCB0byBleHRyYWN0XG4gKiBAcmV0dXJucyBSZXR1cm4gYSBtYXAgZnJvbSBvcmlnaW5hbCBzb3VyY2UtZmlsZXMgKHJlZmVyZW5jZWQgaW4gdGhlIGBtYXBwaW5nc2ApIHRvIGFycmF5cyBvZlxuICogc2VnbWVudC1tYXJrZXJzIHNvcnRlZCBieSB0aGVpciBvcmRlciBpbiB0aGVpciBzb3VyY2UgZmlsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RPcmlnaW5hbFNlZ21lbnRzKG1hcHBpbmdzOiBNYXBwaW5nW10pOiBNYXA8U291cmNlRmlsZSwgU2VnbWVudE1hcmtlcltdPiB7XG4gIGNvbnN0IG9yaWdpbmFsU2VnbWVudHMgPSBuZXcgTWFwPFNvdXJjZUZpbGUsIFNlZ21lbnRNYXJrZXJbXT4oKTtcbiAgZm9yIChjb25zdCBtYXBwaW5nIG9mIG1hcHBpbmdzKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSBtYXBwaW5nLm9yaWdpbmFsU291cmNlO1xuICAgIGlmICghb3JpZ2luYWxTZWdtZW50cy5oYXMob3JpZ2luYWxTb3VyY2UpKSB7XG4gICAgICBvcmlnaW5hbFNlZ21lbnRzLnNldChvcmlnaW5hbFNvdXJjZSwgW10pO1xuICAgIH1cbiAgICBjb25zdCBzZWdtZW50cyA9IG9yaWdpbmFsU2VnbWVudHMuZ2V0KG9yaWdpbmFsU291cmNlKSE7XG4gICAgc2VnbWVudHMucHVzaChtYXBwaW5nLm9yaWdpbmFsU2VnbWVudCk7XG4gIH1cbiAgb3JpZ2luYWxTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnRNYXJrZXJzID0+IHNlZ21lbnRNYXJrZXJzLnNvcnQoY29tcGFyZVNlZ21lbnRzKSk7XG4gIHJldHVybiBvcmlnaW5hbFNlZ21lbnRzO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgb3JpZ2luYWwgc2VnbWVudHMgb2YgZWFjaCBvZiB0aGUgZ2l2ZW4gYG1hcHBpbmdzYCB0byBpbmNsdWRlIGEgbGluayB0byB0aGUgbmV4dFxuICogc2VnbWVudCBpbiB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogQHBhcmFtIG1hcHBpbmdzIHRoZSBtYXBwaW5ncyB3aG9zZSBzZWdtZW50cyBzaG91bGQgYmUgdXBkYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlT3JpZ2luYWxTZWdtZW50TGlua3MobWFwcGluZ3M6IE1hcHBpbmdbXSk6IHZvaWQge1xuICBjb25zdCBzZWdtZW50c0J5U291cmNlID0gZXh0cmFjdE9yaWdpbmFsU2VnbWVudHMobWFwcGluZ3MpO1xuICBzZWdtZW50c0J5U291cmNlLmZvckVhY2gobWFya2VycyA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgbWFya2Vyc1tpXS5uZXh0ID0gbWFya2Vyc1tpICsgMV07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVTdGFydE9mTGluZVBvc2l0aW9ucyhzdHI6IHN0cmluZykge1xuICAvLyBUaGUgYDFgIGlzIHRvIGluZGljYXRlIGEgbmV3bGluZSBjaGFyYWN0ZXIgYmV0d2VlbiB0aGUgbGluZXMuXG4gIC8vIE5vdGUgdGhhdCBpbiB0aGUgYWN0dWFsIGNvbnRlbnRzIHRoZXJlIGNvdWxkIGJlIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyIHRoYXQgaW5kaWNhdGVzIGFcbiAgLy8gbmV3bGluZVxuICAvLyAtIGUuZy4gXFxyXFxuIC0gYnV0IHRoYXQgaXMgbm90IGltcG9ydGFudCBoZXJlIHNpbmNlIHNlZ21lbnQtbWFya2VycyBhcmUgaW4gbGluZS9jb2x1bW4gcGFpcnMgYW5kXG4gIC8vIHNvIGRpZmZlcmVuY2VzIGluIGxlbmd0aCBkdWUgdG8gZXh0cmEgYFxccmAgY2hhcmFjdGVycyBkbyBub3QgYWZmZWN0IHRoZSBhbGdvcml0aG1zLlxuICBjb25zdCBORVdMSU5FX01BUktFUl9PRkZTRVQgPSAxO1xuICBjb25zdCBsaW5lTGVuZ3RocyA9IGNvbXB1dGVMaW5lTGVuZ3RocyhzdHIpO1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IFswXTsgIC8vIEZpcnN0IGxpbmUgc3RhcnRzIGF0IHBvc2l0aW9uIDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lTGVuZ3Rocy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBzdGFydFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb25zW2ldICsgbGluZUxlbmd0aHNbaV0gKyBORVdMSU5FX01BUktFUl9PRkZTRVQpO1xuICB9XG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUxpbmVMZW5ndGhzKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICByZXR1cm4gKHN0ci5zcGxpdCgvXFxyP1xcbi8pKS5tYXAocyA9PiBzLmxlbmd0aCk7XG59XG4iXX0=