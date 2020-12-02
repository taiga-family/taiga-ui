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
        define("@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Compare two segment-markers, for use in a search or sorting algorithm.
     *
     * @returns a positive number if `a` is after `b`, a negative number if `b` is after `a`
     * and zero if they are at the same position.
     */
    function compareSegments(a, b) {
        return a.position - b.position;
    }
    exports.compareSegments = compareSegments;
    /**
     * Return a new segment-marker that is offset by the given number of characters.
     *
     * @param startOfLinePositions the position of the start of each line of content of the source file
     * whose segment-marker we are offsetting.
     * @param marker the segment to offset.
     * @param offset the number of character to offset by.
     */
    function offsetSegment(startOfLinePositions, marker, offset) {
        if (offset === 0) {
            return marker;
        }
        var line = marker.line;
        var position = marker.position + offset;
        while (line < startOfLinePositions.length - 1 && startOfLinePositions[line + 1] <= position) {
            line++;
        }
        while (line > 0 && startOfLinePositions[line] > position) {
            line--;
        }
        var column = position - startOfLinePositions[line];
        return { line: line, column: column, position: position, next: undefined };
    }
    exports.offsetSegment = offsetSegment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudF9tYXJrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvc291cmNlbWFwcy9zZWdtZW50X21hcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQWdCSDs7Ozs7T0FLRztJQUNILFNBQWdCLGVBQWUsQ0FBQyxDQUFnQixFQUFFLENBQWdCO1FBQ2hFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFGRCwwQ0FFQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxTQUFnQixhQUFhLENBQ3pCLG9CQUE4QixFQUFFLE1BQXFCLEVBQUUsTUFBYztRQUN2RSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDMUMsT0FBTyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzNGLElBQUksRUFBRSxDQUFDO1NBQ1I7UUFDRCxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFO1lBQ3hELElBQUksRUFBRSxDQUFDO1NBQ1I7UUFDRCxJQUFNLE1BQU0sR0FBRyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUNuRCxDQUFDO0lBaEJELHNDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG4vKipcbiAqIEEgbWFya2VyIHRoYXQgaW5kaWNhdGVzIHRoZSBzdGFydCBvZiBhIHNlZ21lbnQgaW4gYSBtYXBwaW5nLlxuICpcbiAqIFRoZSBlbmQgb2YgYSBzZWdtZW50IGlzIGluZGljYXRlZCBieSB0aGUgdGhlIGZpcnN0IHNlZ21lbnQtbWFya2VyIG9mIGFub3RoZXIgbWFwcGluZyB3aG9zZSBzdGFydFxuICogaXMgZ3JlYXRlciBvciBlcXVhbCB0byB0aGlzIG9uZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50TWFya2VyIHtcbiAgcmVhZG9ubHkgbGluZTogbnVtYmVyO1xuICByZWFkb25seSBjb2x1bW46IG51bWJlcjtcbiAgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcjtcbiAgbmV4dDogU2VnbWVudE1hcmtlcnx1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ29tcGFyZSB0d28gc2VnbWVudC1tYXJrZXJzLCBmb3IgdXNlIGluIGEgc2VhcmNoIG9yIHNvcnRpbmcgYWxnb3JpdGhtLlxuICpcbiAqIEByZXR1cm5zIGEgcG9zaXRpdmUgbnVtYmVyIGlmIGBhYCBpcyBhZnRlciBgYmAsIGEgbmVnYXRpdmUgbnVtYmVyIGlmIGBiYCBpcyBhZnRlciBgYWBcbiAqIGFuZCB6ZXJvIGlmIHRoZXkgYXJlIGF0IHRoZSBzYW1lIHBvc2l0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVNlZ21lbnRzKGE6IFNlZ21lbnRNYXJrZXIsIGI6IFNlZ21lbnRNYXJrZXIpOiBudW1iZXIge1xuICByZXR1cm4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb247XG59XG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IHNlZ21lbnQtbWFya2VyIHRoYXQgaXMgb2Zmc2V0IGJ5IHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0gc3RhcnRPZkxpbmVQb3NpdGlvbnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBzdGFydCBvZiBlYWNoIGxpbmUgb2YgY29udGVudCBvZiB0aGUgc291cmNlIGZpbGVcbiAqIHdob3NlIHNlZ21lbnQtbWFya2VyIHdlIGFyZSBvZmZzZXR0aW5nLlxuICogQHBhcmFtIG1hcmtlciB0aGUgc2VnbWVudCB0byBvZmZzZXQuXG4gKiBAcGFyYW0gb2Zmc2V0IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVyIHRvIG9mZnNldCBieS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldFNlZ21lbnQoXG4gICAgc3RhcnRPZkxpbmVQb3NpdGlvbnM6IG51bWJlcltdLCBtYXJrZXI6IFNlZ21lbnRNYXJrZXIsIG9mZnNldDogbnVtYmVyKTogU2VnbWVudE1hcmtlciB7XG4gIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICByZXR1cm4gbWFya2VyO1xuICB9XG5cbiAgbGV0IGxpbmUgPSBtYXJrZXIubGluZTtcbiAgY29uc3QgcG9zaXRpb24gPSBtYXJrZXIucG9zaXRpb24gKyBvZmZzZXQ7XG4gIHdoaWxlIChsaW5lIDwgc3RhcnRPZkxpbmVQb3NpdGlvbnMubGVuZ3RoIC0gMSAmJiBzdGFydE9mTGluZVBvc2l0aW9uc1tsaW5lICsgMV0gPD0gcG9zaXRpb24pIHtcbiAgICBsaW5lKys7XG4gIH1cbiAgd2hpbGUgKGxpbmUgPiAwICYmIHN0YXJ0T2ZMaW5lUG9zaXRpb25zW2xpbmVdID4gcG9zaXRpb24pIHtcbiAgICBsaW5lLS07XG4gIH1cbiAgY29uc3QgY29sdW1uID0gcG9zaXRpb24gLSBzdGFydE9mTGluZVBvc2l0aW9uc1tsaW5lXTtcbiAgcmV0dXJuIHtsaW5lLCBjb2x1bW4sIHBvc2l0aW9uLCBuZXh0OiB1bmRlZmluZWR9O1xufVxuIl19