/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/update-tool/utils/line-mappings", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
     * Line mapping utilities which can be used to retrieve line and character based
     * on an absolute character position in a given file. This functionality is similar
     * to TypeScript's "ts.getLineAndCharacterFromPosition" utility, but we cannot leverage
     * their logic for line mappings as it's internal and we need to generate line mappings
     * for non-TypeScript files such as HTML templates or stylesheets.
     *
     * Line and character can be retrieved by splitting a given source text based on
     * line breaks into line start entries. Later when a specific position is requested,
     * the closest line-start position is determined based on the given position.
     */
    const LF_CHAR = 10;
    const CR_CHAR = 13;
    const LINE_SEP_CHAR = 8232;
    const PARAGRAPH_CHAR = 8233;
    /** Gets the line and character for the given position from the line starts map. */
    function getLineAndCharacterFromPosition(lineStartsMap, position) {
        const lineIndex = findClosestLineStartPosition(lineStartsMap, position);
        return { character: position - lineStartsMap[lineIndex], line: lineIndex };
    }
    exports.getLineAndCharacterFromPosition = getLineAndCharacterFromPosition;
    /**
     * Computes the line start map of the given text. This can be used in order to
     * retrieve the line and character of a given text position index.
     */
    function computeLineStartsMap(text) {
        const result = [0];
        let pos = 0;
        while (pos < text.length) {
            const char = text.charCodeAt(pos++);
            // Handles the "CRLF" line break. In that case we peek the character
            // after the "CR" and check if it is a line feed.
            if (char === CR_CHAR) {
                if (text.charCodeAt(pos) === LF_CHAR) {
                    pos++;
                }
                result.push(pos);
            }
            else if (char === LF_CHAR || char === LINE_SEP_CHAR || char === PARAGRAPH_CHAR) {
                result.push(pos);
            }
        }
        result.push(pos);
        return result;
    }
    exports.computeLineStartsMap = computeLineStartsMap;
    /** Finds the closest line start for the given position. */
    function findClosestLineStartPosition(linesMap, position, low = 0, high = linesMap.length - 1) {
        while (low <= high) {
            const pivotIndex = Math.floor((low + high) / 2);
            const pivotEl = linesMap[pivotIndex];
            if (pivotEl === position) {
                return pivotIndex;
            }
            else if (position > pivotEl) {
                low = pivotIndex + 1;
            }
            else {
                high = pivotIndex - 1;
            }
        }
        // In case there was no exact match, return the closest "lower" line index. We also
        // subtract the index by one because want the index of the previous line start.
        return low - 1;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1tYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91cGRhdGUtdG9vbC91dGlscy9saW5lLW1hcHBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUg7Ozs7Ozs7Ozs7T0FVRztJQUVILE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzNCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQztJQU81QixtRkFBbUY7SUFDbkYsU0FBZ0IsK0JBQStCLENBQUMsYUFBdUIsRUFBRSxRQUFnQjtRQUN2RixNQUFNLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEUsT0FBTyxFQUFDLFNBQVMsRUFBRSxRQUFRLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUMzRSxDQUFDO0lBSEQsMEVBR0M7SUFFRDs7O09BR0c7SUFDSCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFZO1FBQy9DLE1BQU0sTUFBTSxHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDcEMsb0VBQW9FO1lBQ3BFLGlEQUFpRDtZQUNqRCxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUU7b0JBQ3BDLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7aUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxhQUFhLElBQUksSUFBSSxLQUFLLGNBQWMsRUFBRTtnQkFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBbEJELG9EQWtCQztJQUVELDJEQUEyRDtJQUMzRCxTQUFTLDRCQUE0QixDQUNqQyxRQUFhLEVBQUUsUUFBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNqRSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFckMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN4QixPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTSxJQUFJLFFBQVEsR0FBRyxPQUFPLEVBQUU7Z0JBQzdCLEdBQUcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxtRkFBbUY7UUFDbkYsK0VBQStFO1FBQy9FLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qXG4gKiBMaW5lIG1hcHBpbmcgdXRpbGl0aWVzIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIGxpbmUgYW5kIGNoYXJhY3RlciBiYXNlZFxuICogb24gYW4gYWJzb2x1dGUgY2hhcmFjdGVyIHBvc2l0aW9uIGluIGEgZ2l2ZW4gZmlsZS4gVGhpcyBmdW5jdGlvbmFsaXR5IGlzIHNpbWlsYXJcbiAqIHRvIFR5cGVTY3JpcHQncyBcInRzLmdldExpbmVBbmRDaGFyYWN0ZXJGcm9tUG9zaXRpb25cIiB1dGlsaXR5LCBidXQgd2UgY2Fubm90IGxldmVyYWdlXG4gKiB0aGVpciBsb2dpYyBmb3IgbGluZSBtYXBwaW5ncyBhcyBpdCdzIGludGVybmFsIGFuZCB3ZSBuZWVkIHRvIGdlbmVyYXRlIGxpbmUgbWFwcGluZ3NcbiAqIGZvciBub24tVHlwZVNjcmlwdCBmaWxlcyBzdWNoIGFzIEhUTUwgdGVtcGxhdGVzIG9yIHN0eWxlc2hlZXRzLlxuICpcbiAqIExpbmUgYW5kIGNoYXJhY3RlciBjYW4gYmUgcmV0cmlldmVkIGJ5IHNwbGl0dGluZyBhIGdpdmVuIHNvdXJjZSB0ZXh0IGJhc2VkIG9uXG4gKiBsaW5lIGJyZWFrcyBpbnRvIGxpbmUgc3RhcnQgZW50cmllcy4gTGF0ZXIgd2hlbiBhIHNwZWNpZmljIHBvc2l0aW9uIGlzIHJlcXVlc3RlZCxcbiAqIHRoZSBjbG9zZXN0IGxpbmUtc3RhcnQgcG9zaXRpb24gaXMgZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gKi9cblxuY29uc3QgTEZfQ0hBUiA9IDEwO1xuY29uc3QgQ1JfQ0hBUiA9IDEzO1xuY29uc3QgTElORV9TRVBfQ0hBUiA9IDgyMzI7XG5jb25zdCBQQVJBR1JBUEhfQ0hBUiA9IDgyMzM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUFuZENoYXJhY3RlciB7XG4gIGNoYXJhY3RlcjogbnVtYmVyO1xuICBsaW5lOiBudW1iZXI7XG59XG5cbi8qKiBHZXRzIHRoZSBsaW5lIGFuZCBjaGFyYWN0ZXIgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiBmcm9tIHRoZSBsaW5lIHN0YXJ0cyBtYXAuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUFuZENoYXJhY3RlckZyb21Qb3NpdGlvbihsaW5lU3RhcnRzTWFwOiBudW1iZXJbXSwgcG9zaXRpb246IG51bWJlcikge1xuICBjb25zdCBsaW5lSW5kZXggPSBmaW5kQ2xvc2VzdExpbmVTdGFydFBvc2l0aW9uKGxpbmVTdGFydHNNYXAsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIHtjaGFyYWN0ZXI6IHBvc2l0aW9uIC0gbGluZVN0YXJ0c01hcFtsaW5lSW5kZXhdLCBsaW5lOiBsaW5lSW5kZXh9O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBsaW5lIHN0YXJ0IG1hcCBvZiB0aGUgZ2l2ZW4gdGV4dC4gVGhpcyBjYW4gYmUgdXNlZCBpbiBvcmRlciB0b1xuICogcmV0cmlldmUgdGhlIGxpbmUgYW5kIGNoYXJhY3RlciBvZiBhIGdpdmVuIHRleHQgcG9zaXRpb24gaW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTGluZVN0YXJ0c01hcCh0ZXh0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbMF07XG4gIGxldCBwb3MgPSAwO1xuICB3aGlsZSAocG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICBjb25zdCBjaGFyID0gdGV4dC5jaGFyQ29kZUF0KHBvcysrKTtcbiAgICAvLyBIYW5kbGVzIHRoZSBcIkNSTEZcIiBsaW5lIGJyZWFrLiBJbiB0aGF0IGNhc2Ugd2UgcGVlayB0aGUgY2hhcmFjdGVyXG4gICAgLy8gYWZ0ZXIgdGhlIFwiQ1JcIiBhbmQgY2hlY2sgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gICAgaWYgKGNoYXIgPT09IENSX0NIQVIpIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gTEZfQ0hBUikge1xuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHBvcyk7XG4gICAgfSBlbHNlIGlmIChjaGFyID09PSBMRl9DSEFSIHx8IGNoYXIgPT09IExJTkVfU0VQX0NIQVIgfHwgY2hhciA9PT0gUEFSQUdSQVBIX0NIQVIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvcyk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBGaW5kcyB0aGUgY2xvc2VzdCBsaW5lIHN0YXJ0IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24uICovXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdExpbmVTdGFydFBvc2l0aW9uPFQ+KFxuICAgIGxpbmVzTWFwOiBUW10sIHBvc2l0aW9uOiBULCBsb3cgPSAwLCBoaWdoID0gbGluZXNNYXAubGVuZ3RoIC0gMSkge1xuICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcbiAgICBjb25zdCBwaXZvdEluZGV4ID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcbiAgICBjb25zdCBwaXZvdEVsID0gbGluZXNNYXBbcGl2b3RJbmRleF07XG5cbiAgICBpZiAocGl2b3RFbCA9PT0gcG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBwaXZvdEluZGV4O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiBwaXZvdEVsKSB7XG4gICAgICBsb3cgPSBwaXZvdEluZGV4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlnaCA9IHBpdm90SW5kZXggLSAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluIGNhc2UgdGhlcmUgd2FzIG5vIGV4YWN0IG1hdGNoLCByZXR1cm4gdGhlIGNsb3Nlc3QgXCJsb3dlclwiIGxpbmUgaW5kZXguIFdlIGFsc29cbiAgLy8gc3VidHJhY3QgdGhlIGluZGV4IGJ5IG9uZSBiZWNhdXNlIHdhbnQgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBsaW5lIHN0YXJ0LlxuICByZXR1cm4gbG93IC0gMTtcbn1cbiJdfQ==