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
        define("@angular/compiler/testing/src/output/source_map_util", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var b64 = require('base64-js');
    var SourceMapConsumer = require('source-map').SourceMapConsumer;
    function originalPositionFor(sourceMap, genPosition) {
        var smc = new SourceMapConsumer(sourceMap);
        // Note: We don't return the original object as it also contains a `name` property
        // which is always null and we don't want to include that in our assertions...
        var _a = smc.originalPositionFor(genPosition), line = _a.line, column = _a.column, source = _a.source;
        return { line: line, column: column, source: source };
    }
    exports.originalPositionFor = originalPositionFor;
    function extractSourceMap(source) {
        var idx = source.lastIndexOf('\n//#');
        if (idx == -1)
            return null;
        var smComment = source.slice(idx).split('\n', 2)[1].trim();
        var smB64 = smComment.split('sourceMappingURL=data:application/json;base64,')[1];
        return smB64 ? JSON.parse(decodeB64String(smB64)) : null;
    }
    exports.extractSourceMap = extractSourceMap;
    function decodeB64String(s) {
        return b64.toByteArray(s).reduce(function (s, c) { return s + String.fromCharCode(c); }, '');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX21hcF91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvdGVzdGluZy9zcmMvb3V0cHV0L3NvdXJjZV9tYXBfdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQVFsRSxTQUFnQixtQkFBbUIsQ0FDL0IsU0FBb0IsRUFBRSxXQUFxRDtRQUM3RSxJQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLGtGQUFrRjtRQUNsRiw4RUFBOEU7UUFDeEUsSUFBQSx5Q0FBNkQsRUFBNUQsY0FBSSxFQUFFLGtCQUFNLEVBQUUsa0JBQThDLENBQUM7UUFDcEUsT0FBTyxFQUFDLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUM7SUFDaEMsQ0FBQztJQVBELGtEQU9DO0lBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsTUFBYztRQUM3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzNCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3RCxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBTkQsNENBTUM7SUFFRCxTQUFTLGVBQWUsQ0FBQyxDQUFTO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFTLEVBQUUsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQTFCLENBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTb3VyY2VNYXB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmNvbnN0IGI2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpO1xuY29uc3QgU291cmNlTWFwQ29uc3VtZXIgPSByZXF1aXJlKCdzb3VyY2UtbWFwJykuU291cmNlTWFwQ29uc3VtZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlTG9jYXRpb24ge1xuICBsaW5lOiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBzb3VyY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yaWdpbmFsUG9zaXRpb25Gb3IoXG4gICAgc291cmNlTWFwOiBTb3VyY2VNYXAsIGdlblBvc2l0aW9uOiB7bGluZTogbnVtYmVyfG51bGwsIGNvbHVtbjogbnVtYmVyfG51bGx9KTogU291cmNlTG9jYXRpb24ge1xuICBjb25zdCBzbWMgPSBuZXcgU291cmNlTWFwQ29uc3VtZXIoc291cmNlTWFwKTtcbiAgLy8gTm90ZTogV2UgZG9uJ3QgcmV0dXJuIHRoZSBvcmlnaW5hbCBvYmplY3QgYXMgaXQgYWxzbyBjb250YWlucyBhIGBuYW1lYCBwcm9wZXJ0eVxuICAvLyB3aGljaCBpcyBhbHdheXMgbnVsbCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBpbmNsdWRlIHRoYXQgaW4gb3VyIGFzc2VydGlvbnMuLi5cbiAgY29uc3Qge2xpbmUsIGNvbHVtbiwgc291cmNlfSA9IHNtYy5vcmlnaW5hbFBvc2l0aW9uRm9yKGdlblBvc2l0aW9uKTtcbiAgcmV0dXJuIHtsaW5lLCBjb2x1bW4sIHNvdXJjZX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U291cmNlTWFwKHNvdXJjZTogc3RyaW5nKTogU291cmNlTWFwfG51bGwge1xuICBsZXQgaWR4ID0gc291cmNlLmxhc3RJbmRleE9mKCdcXG4vLyMnKTtcbiAgaWYgKGlkeCA9PSAtMSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNtQ29tbWVudCA9IHNvdXJjZS5zbGljZShpZHgpLnNwbGl0KCdcXG4nLCAyKVsxXS50cmltKCk7XG4gIGNvbnN0IHNtQjY0ID0gc21Db21tZW50LnNwbGl0KCdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJylbMV07XG4gIHJldHVybiBzbUI2NCA/IEpTT04ucGFyc2UoZGVjb2RlQjY0U3RyaW5nKHNtQjY0KSkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCNjRTdHJpbmcoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGI2NC50b0J5dGVBcnJheShzKS5yZWR1Y2UoKHM6IHN0cmluZywgYzogbnVtYmVyKSA9PiBzICsgU3RyaW5nLmZyb21DaGFyQ29kZShjKSwgJycpO1xufVxuIl19