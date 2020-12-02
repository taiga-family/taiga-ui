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
        define("@angular/compiler-cli/src/ngtsc/metadata/src/inheritance", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * Given a reference to a directive, return a flattened version of its `DirectiveMeta` metadata
     * which includes metadata from its entire inheritance chain.
     *
     * The returned `DirectiveMeta` will either have `baseClass: null` if the inheritance chain could be
     * fully resolved, or `baseClass: 'dynamic'` if the inheritance chain could not be completely
     * followed.
     */
    function flattenInheritedDirectiveMetadata(reader, dir) {
        var topMeta = reader.getDirectiveMetadata(dir);
        if (topMeta === null) {
            throw new Error("Metadata not found for directive: " + dir.debugName);
        }
        var inputs = {};
        var outputs = {};
        var coercedInputFields = new Set();
        var isDynamic = false;
        var addMetadata = function (meta) {
            var e_1, _a;
            if (meta.baseClass === 'dynamic') {
                isDynamic = true;
            }
            else if (meta.baseClass !== null) {
                var baseMeta = reader.getDirectiveMetadata(meta.baseClass);
                if (baseMeta !== null) {
                    addMetadata(baseMeta);
                }
                else {
                    // Missing metadata for the base class means it's effectively dynamic.
                    isDynamic = true;
                }
            }
            inputs = tslib_1.__assign(tslib_1.__assign({}, inputs), meta.inputs);
            outputs = tslib_1.__assign(tslib_1.__assign({}, outputs), meta.outputs);
            try {
                for (var _b = tslib_1.__values(meta.coercedInputFields), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var coercedInputField = _c.value;
                    coercedInputFields.add(coercedInputField);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        addMetadata(topMeta);
        return tslib_1.__assign(tslib_1.__assign({}, topMeta), { inputs: inputs,
            outputs: outputs,
            coercedInputFields: coercedInputFields, baseClass: isDynamic ? 'dynamic' : null });
    }
    exports.flattenInheritedDirectiveMetadata = flattenInheritedDirectiveMetadata;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL21ldGFkYXRhL3NyYy9pbmhlcml0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFNSDs7Ozs7OztPQU9HO0lBQ0gsU0FBZ0IsaUNBQWlDLENBQzdDLE1BQXNCLEVBQUUsR0FBZ0M7UUFDMUQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUFxQyxHQUFHLENBQUMsU0FBVyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLE1BQU0sR0FBNkMsRUFBRSxDQUFDO1FBQzFELElBQUksT0FBTyxHQUE0QixFQUFFLENBQUM7UUFDMUMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQzNDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFNLFdBQVcsR0FBRyxVQUFDLElBQW1COztZQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDckIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDTCxzRUFBc0U7b0JBQ3RFLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ2xCO2FBQ0Y7WUFDRCxNQUFNLHlDQUFPLE1BQU0sR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsT0FBTyx5Q0FBTyxPQUFPLEdBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztnQkFFeEMsS0FBZ0MsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBcEQsSUFBTSxpQkFBaUIsV0FBQTtvQkFDMUIsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQzNDOzs7Ozs7Ozs7UUFDSCxDQUFDLENBQUM7UUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsNkNBQ0ssT0FBTyxLQUNWLE1BQU0sUUFBQTtZQUNOLE9BQU8sU0FBQTtZQUNQLGtCQUFrQixvQkFBQSxFQUNsQixTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFDdkM7SUFDSixDQUFDO0lBekNELDhFQXlDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtEaXJlY3RpdmVNZXRhLCBNZXRhZGF0YVJlYWRlcn0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9ufSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcblxuLyoqXG4gKiBHaXZlbiBhIHJlZmVyZW5jZSB0byBhIGRpcmVjdGl2ZSwgcmV0dXJuIGEgZmxhdHRlbmVkIHZlcnNpb24gb2YgaXRzIGBEaXJlY3RpdmVNZXRhYCBtZXRhZGF0YVxuICogd2hpY2ggaW5jbHVkZXMgbWV0YWRhdGEgZnJvbSBpdHMgZW50aXJlIGluaGVyaXRhbmNlIGNoYWluLlxuICpcbiAqIFRoZSByZXR1cm5lZCBgRGlyZWN0aXZlTWV0YWAgd2lsbCBlaXRoZXIgaGF2ZSBgYmFzZUNsYXNzOiBudWxsYCBpZiB0aGUgaW5oZXJpdGFuY2UgY2hhaW4gY291bGQgYmVcbiAqIGZ1bGx5IHJlc29sdmVkLCBvciBgYmFzZUNsYXNzOiAnZHluYW1pYydgIGlmIHRoZSBpbmhlcml0YW5jZSBjaGFpbiBjb3VsZCBub3QgYmUgY29tcGxldGVseVxuICogZm9sbG93ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuSW5oZXJpdGVkRGlyZWN0aXZlTWV0YWRhdGEoXG4gICAgcmVhZGVyOiBNZXRhZGF0YVJlYWRlciwgZGlyOiBSZWZlcmVuY2U8Q2xhc3NEZWNsYXJhdGlvbj4pOiBEaXJlY3RpdmVNZXRhIHtcbiAgY29uc3QgdG9wTWV0YSA9IHJlYWRlci5nZXREaXJlY3RpdmVNZXRhZGF0YShkaXIpO1xuICBpZiAodG9wTWV0YSA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWV0YWRhdGEgbm90IGZvdW5kIGZvciBkaXJlY3RpdmU6ICR7ZGlyLmRlYnVnTmFtZX1gKTtcbiAgfVxuXG4gIGxldCBpbnB1dHM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8W3N0cmluZywgc3RyaW5nXX0gPSB7fTtcbiAgbGV0IG91dHB1dHM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gIGxldCBjb2VyY2VkSW5wdXRGaWVsZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgbGV0IGlzRHluYW1pYyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFkZE1ldGFkYXRhID0gKG1ldGE6IERpcmVjdGl2ZU1ldGEpOiB2b2lkID0+IHtcbiAgICBpZiAobWV0YS5iYXNlQ2xhc3MgPT09ICdkeW5hbWljJykge1xuICAgICAgaXNEeW5hbWljID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG1ldGEuYmFzZUNsYXNzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBiYXNlTWV0YSA9IHJlYWRlci5nZXREaXJlY3RpdmVNZXRhZGF0YShtZXRhLmJhc2VDbGFzcyk7XG4gICAgICBpZiAoYmFzZU1ldGEgIT09IG51bGwpIHtcbiAgICAgICAgYWRkTWV0YWRhdGEoYmFzZU1ldGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWlzc2luZyBtZXRhZGF0YSBmb3IgdGhlIGJhc2UgY2xhc3MgbWVhbnMgaXQncyBlZmZlY3RpdmVseSBkeW5hbWljLlxuICAgICAgICBpc0R5bmFtaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnB1dHMgPSB7Li4uaW5wdXRzLCAuLi5tZXRhLmlucHV0c307XG4gICAgb3V0cHV0cyA9IHsuLi5vdXRwdXRzLCAuLi5tZXRhLm91dHB1dHN9O1xuXG4gICAgZm9yIChjb25zdCBjb2VyY2VkSW5wdXRGaWVsZCBvZiBtZXRhLmNvZXJjZWRJbnB1dEZpZWxkcykge1xuICAgICAgY29lcmNlZElucHV0RmllbGRzLmFkZChjb2VyY2VkSW5wdXRGaWVsZCk7XG4gICAgfVxuICB9O1xuXG4gIGFkZE1ldGFkYXRhKHRvcE1ldGEpO1xuXG4gIHJldHVybiB7XG4gICAgLi4udG9wTWV0YSxcbiAgICBpbnB1dHMsXG4gICAgb3V0cHV0cyxcbiAgICBjb2VyY2VkSW5wdXRGaWVsZHMsXG4gICAgYmFzZUNsYXNzOiBpc0R5bmFtaWMgPyAnZHluYW1pYycgOiBudWxsLFxuICB9O1xufVxuIl19