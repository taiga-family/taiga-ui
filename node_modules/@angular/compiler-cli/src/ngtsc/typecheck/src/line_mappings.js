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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/line_mappings", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LF_CHAR = 10;
    var CR_CHAR = 13;
    var LINE_SEP_CHAR = 8232;
    var PARAGRAPH_CHAR = 8233;
    /** Gets the line and character for the given position from the line starts map. */
    function getLineAndCharacterFromPosition(lineStartsMap, position) {
        var lineIndex = findClosestLineStartPosition(lineStartsMap, position);
        return { character: position - lineStartsMap[lineIndex], line: lineIndex };
    }
    exports.getLineAndCharacterFromPosition = getLineAndCharacterFromPosition;
    /**
     * Computes the line start map of the given text. This can be used in order to
     * retrieve the line and character of a given text position index.
     */
    function computeLineStartsMap(text) {
        var result = [0];
        var pos = 0;
        while (pos < text.length) {
            var char = text.charCodeAt(pos++);
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
    function findClosestLineStartPosition(linesMap, position, low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = linesMap.length - 1; }
        while (low <= high) {
            var pivotIdx = Math.floor((low + high) / 2);
            var pivotEl = linesMap[pivotIdx];
            if (pivotEl === position) {
                return pivotIdx;
            }
            else if (position > pivotEl) {
                low = pivotIdx + 1;
            }
            else {
                high = pivotIdx - 1;
            }
        }
        // In case there was no exact match, return the closest "lower" line index. We also
        // subtract the index by one because want the index of the previous line start.
        return low - 1;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZV9tYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL3NyYy9saW5lX21hcHBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBRTVCLG1GQUFtRjtJQUNuRixTQUFnQiwrQkFBK0IsQ0FBQyxhQUF1QixFQUFFLFFBQWdCO1FBQ3ZGLElBQU0sU0FBUyxHQUFHLDRCQUE0QixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQzNFLENBQUM7SUFIRCwwRUFHQztJQUVEOzs7T0FHRztJQUNILFNBQWdCLG9CQUFvQixDQUFDLElBQVk7UUFDL0MsSUFBTSxNQUFNLEdBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwQyxvRUFBb0U7WUFDcEUsaURBQWlEO1lBQ2pELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRTtvQkFDcEMsR0FBRyxFQUFFLENBQUM7aUJBQ1A7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFBTSxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLGFBQWEsSUFBSSxJQUFJLEtBQUssY0FBYyxFQUFFO2dCQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFsQkQsb0RBa0JDO0lBRUQsMkRBQTJEO0lBQzNELFNBQVMsNEJBQTRCLENBQ2pDLFFBQWEsRUFBRSxRQUFXLEVBQUUsR0FBTyxFQUFFLElBQTBCO1FBQW5DLG9CQUFBLEVBQUEsT0FBTztRQUFFLHFCQUFBLEVBQUEsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDakUsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDeEIsT0FBTyxRQUFRLENBQUM7YUFDakI7aUJBQU0sSUFBSSxRQUFRLEdBQUcsT0FBTyxFQUFFO2dCQUM3QixHQUFHLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBRUQsbUZBQW1GO1FBQ25GLCtFQUErRTtRQUMvRSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY29uc3QgTEZfQ0hBUiA9IDEwO1xuY29uc3QgQ1JfQ0hBUiA9IDEzO1xuY29uc3QgTElORV9TRVBfQ0hBUiA9IDgyMzI7XG5jb25zdCBQQVJBR1JBUEhfQ0hBUiA9IDgyMzM7XG5cbi8qKiBHZXRzIHRoZSBsaW5lIGFuZCBjaGFyYWN0ZXIgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiBmcm9tIHRoZSBsaW5lIHN0YXJ0cyBtYXAuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUFuZENoYXJhY3RlckZyb21Qb3NpdGlvbihsaW5lU3RhcnRzTWFwOiBudW1iZXJbXSwgcG9zaXRpb246IG51bWJlcikge1xuICBjb25zdCBsaW5lSW5kZXggPSBmaW5kQ2xvc2VzdExpbmVTdGFydFBvc2l0aW9uKGxpbmVTdGFydHNNYXAsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIHtjaGFyYWN0ZXI6IHBvc2l0aW9uIC0gbGluZVN0YXJ0c01hcFtsaW5lSW5kZXhdLCBsaW5lOiBsaW5lSW5kZXh9O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBsaW5lIHN0YXJ0IG1hcCBvZiB0aGUgZ2l2ZW4gdGV4dC4gVGhpcyBjYW4gYmUgdXNlZCBpbiBvcmRlciB0b1xuICogcmV0cmlldmUgdGhlIGxpbmUgYW5kIGNoYXJhY3RlciBvZiBhIGdpdmVuIHRleHQgcG9zaXRpb24gaW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTGluZVN0YXJ0c01hcCh0ZXh0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbMF07XG4gIGxldCBwb3MgPSAwO1xuICB3aGlsZSAocG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICBjb25zdCBjaGFyID0gdGV4dC5jaGFyQ29kZUF0KHBvcysrKTtcbiAgICAvLyBIYW5kbGVzIHRoZSBcIkNSTEZcIiBsaW5lIGJyZWFrLiBJbiB0aGF0IGNhc2Ugd2UgcGVlayB0aGUgY2hhcmFjdGVyXG4gICAgLy8gYWZ0ZXIgdGhlIFwiQ1JcIiBhbmQgY2hlY2sgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gICAgaWYgKGNoYXIgPT09IENSX0NIQVIpIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PT0gTEZfQ0hBUikge1xuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHBvcyk7XG4gICAgfSBlbHNlIGlmIChjaGFyID09PSBMRl9DSEFSIHx8IGNoYXIgPT09IExJTkVfU0VQX0NIQVIgfHwgY2hhciA9PT0gUEFSQUdSQVBIX0NIQVIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvcyk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBGaW5kcyB0aGUgY2xvc2VzdCBsaW5lIHN0YXJ0IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24uICovXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdExpbmVTdGFydFBvc2l0aW9uPFQ+KFxuICAgIGxpbmVzTWFwOiBUW10sIHBvc2l0aW9uOiBULCBsb3cgPSAwLCBoaWdoID0gbGluZXNNYXAubGVuZ3RoIC0gMSkge1xuICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcbiAgICBjb25zdCBwaXZvdElkeCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgY29uc3QgcGl2b3RFbCA9IGxpbmVzTWFwW3Bpdm90SWR4XTtcblxuICAgIGlmIChwaXZvdEVsID09PSBwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHBpdm90SWR4O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiBwaXZvdEVsKSB7XG4gICAgICBsb3cgPSBwaXZvdElkeCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2ggPSBwaXZvdElkeCAtIDE7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSB0aGVyZSB3YXMgbm8gZXhhY3QgbWF0Y2gsIHJldHVybiB0aGUgY2xvc2VzdCBcImxvd2VyXCIgbGluZSBpbmRleC4gV2UgYWxzb1xuICAvLyBzdWJ0cmFjdCB0aGUgaW5kZXggYnkgb25lIGJlY2F1c2Ugd2FudCB0aGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIGxpbmUgc3RhcnQuXG4gIHJldHVybiBsb3cgLSAxO1xufVxuIl19