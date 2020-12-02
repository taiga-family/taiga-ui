/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker" />
/**
 * A marker that indicates the start of a segment in a mapping.
 *
 * The end of a segment is indicated by the the first segment-marker of another mapping whose start
 * is greater or equal to this one.
 */
export interface SegmentMarker {
    readonly line: number;
    readonly column: number;
    readonly position: number;
    next: SegmentMarker | undefined;
}
/**
 * Compare two segment-markers, for use in a search or sorting algorithm.
 *
 * @returns a positive number if `a` is after `b`, a negative number if `b` is after `a`
 * and zero if they are at the same position.
 */
export declare function compareSegments(a: SegmentMarker, b: SegmentMarker): number;
/**
 * Return a new segment-marker that is offset by the given number of characters.
 *
 * @param startOfLinePositions the position of the start of each line of content of the source file
 * whose segment-marker we are offsetting.
 * @param marker the segment to offset.
 * @param offset the number of character to offset by.
 */
export declare function offsetSegment(startOfLinePositions: number[], marker: SegmentMarker, offset: number): SegmentMarker;
