/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata } from "tslib";
import { KeyValueDiffers, Pipe } from '@angular/core';
function makeKeyValuePair(key, value) {
    return { key: key, value: value };
}
/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * @usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * @publicApi
 */
var KeyValuePipe = /** @class */ (function () {
    function KeyValuePipe(differs) {
        this.differs = differs;
        this.keyValues = [];
    }
    KeyValuePipe.prototype.transform = function (input, compareFn) {
        var _this = this;
        if (compareFn === void 0) { compareFn = defaultComparator; }
        if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
            return null;
        }
        if (!this.differ) {
            // make a differ for whatever type we've been passed in
            this.differ = this.differs.find(input).create();
        }
        var differChanges = this.differ.diff(input);
        if (differChanges) {
            this.keyValues = [];
            differChanges.forEachItem(function (r) {
                _this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
            });
            this.keyValues.sort(compareFn);
        }
        return this.keyValues;
    };
    KeyValuePipe = __decorate([
        Pipe({ name: 'keyvalue', pure: false }),
        __metadata("design:paramtypes", [KeyValueDiffers])
    ], KeyValuePipe);
    return KeyValuePipe;
}());
export { KeyValuePipe };
export function defaultComparator(keyValueA, keyValueB) {
    var a = keyValueA.key;
    var b = keyValueB.key;
    // if same exit with 0;
    if (a === b)
        return 0;
    // make sure that undefined are at the end of the sort.
    if (a === undefined)
        return 1;
    if (b === undefined)
        return -1;
    // make sure that nulls are at the end of the sort.
    if (a === null)
        return 1;
    if (b === null)
        return -1;
    if (typeof a == 'string' && typeof b == 'string') {
        return a < b ? -1 : 1;
    }
    if (typeof a == 'number' && typeof b == 'number') {
        return a - b;
    }
    if (typeof a == 'boolean' && typeof b == 'boolean') {
        return a < b ? -1 : 1;
    }
    // `a` and `b` are of different types. Compare their string values.
    var aString = String(a);
    var bString = String(b);
    return aString == bString ? 0 : aString < bString ? -1 : 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWVfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMva2V5dmFsdWVfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUF3RCxlQUFlLEVBQUUsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUUxSCxTQUFTLGdCQUFnQixDQUFPLEdBQU0sRUFBRSxLQUFRO0lBQzlDLE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUNsQyxDQUFDO0FBYUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFFSDtJQUNFLHNCQUE2QixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUc3QyxjQUFTLEdBQThCLEVBQUUsQ0FBQztJQUhNLENBQUM7SUEyQnpELGdDQUFTLEdBQVQsVUFDSSxLQUEwRCxFQUMxRCxTQUErRTtRQUZuRixpQkF1QkM7UUFyQkcsMEJBQUEsRUFBQSw2QkFBK0U7UUFFakYsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksR0FBRyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDcEUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pEO1FBRUQsSUFBTSxhQUFhLEdBQStCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVksQ0FBQyxDQUFDO1FBRWpGLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBQyxDQUE2QjtnQkFDdEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBYSxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFuRFUsWUFBWTtRQUR4QixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQzt5Q0FFRSxlQUFlO09BRDFDLFlBQVksQ0FvRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXBEWSxZQUFZO0FBc0R6QixNQUFNLFVBQVUsaUJBQWlCLENBQzdCLFNBQXlCLEVBQUUsU0FBeUI7SUFDdEQsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUN4QixJQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ3hCLHVCQUF1QjtJQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsdURBQXVEO0lBQ3ZELElBQUksQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvQixtREFBbUQ7SUFDbkQsSUFBSSxDQUFDLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUk7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7SUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsbUVBQW1FO0lBQ25FLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtLZXlWYWx1ZUNoYW5nZVJlY29yZCwgS2V5VmFsdWVDaGFuZ2VzLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gbWFrZUtleVZhbHVlUGFpcjxLLCBWPihrZXk6IEssIHZhbHVlOiBWKTogS2V5VmFsdWU8SywgVj4ge1xuICByZXR1cm4ge2tleToga2V5LCB2YWx1ZTogdmFsdWV9O1xufVxuXG4vKipcbiAqIEEga2V5IHZhbHVlIHBhaXIuXG4gKiBVc3VhbGx5IHVzZWQgdG8gcmVwcmVzZW50IHRoZSBrZXkgdmFsdWUgcGFpcnMgZnJvbSBhIE1hcCBvciBPYmplY3QuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEtleVZhbHVlPEssIFY+IHtcbiAga2V5OiBLO1xuICB2YWx1ZTogVjtcbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUcmFuc2Zvcm1zIE9iamVjdCBvciBNYXAgaW50byBhbiBhcnJheSBvZiBrZXkgdmFsdWUgcGFpcnMuXG4gKlxuICogVGhlIG91dHB1dCBhcnJheSB3aWxsIGJlIG9yZGVyZWQgYnkga2V5cy5cbiAqIEJ5IGRlZmF1bHQgdGhlIGNvbXBhcmF0b3Igd2lsbCBiZSBieSBVbmljb2RlIHBvaW50IHZhbHVlLlxuICogWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjb21wYXJlRm4gaWYgeW91ciBrZXlzIGFyZSBjb21wbGV4IHR5cGVzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZXNcbiAqXG4gKiBUaGlzIGV4YW1wbGVzIHNob3cgaG93IGFuIE9iamVjdCBvciBhIE1hcCBjYW4gYmUgaXRlcmF0ZWQgYnkgbmdGb3Igd2l0aCB0aGUgdXNlIG9mIHRoaXMga2V5dmFsdWVcbiAqIHBpcGUuXG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9rZXl2YWx1ZV9waXBlLnRzIHJlZ2lvbj0nS2V5VmFsdWVQaXBlJ31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBQaXBlKHtuYW1lOiAna2V5dmFsdWUnLCBwdXJlOiBmYWxzZX0pXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7fVxuXG4gIHByaXZhdGUgZGlmZmVyITogS2V5VmFsdWVEaWZmZXI8YW55LCBhbnk+O1xuICBwcml2YXRlIGtleVZhbHVlczogQXJyYXk8S2V5VmFsdWU8YW55LCBhbnk+PiA9IFtdO1xuXG4gIHRyYW5zZm9ybTxLLCBWPihpbnB1dDogbnVsbCwgY29tcGFyZUZuPzogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyKTogbnVsbDtcbiAgdHJhbnNmb3JtPFY+KFxuICAgICAgaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBWfXxNYXA8c3RyaW5nLCBWPixcbiAgICAgIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxzdHJpbmcsIFY+LCBiOiBLZXlWYWx1ZTxzdHJpbmcsIFY+KSA9PiBudW1iZXIpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8c3RyaW5nLCBWPj47XG4gIHRyYW5zZm9ybTxWPihcbiAgICAgIGlucHV0OiB7W2tleTogc3RyaW5nXTogVn18TWFwPHN0cmluZywgVj58bnVsbCxcbiAgICAgIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxzdHJpbmcsIFY+LCBiOiBLZXlWYWx1ZTxzdHJpbmcsIFY+KSA9PiBudW1iZXIpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8c3RyaW5nLCBWPj58bnVsbDtcbiAgdHJhbnNmb3JtPFY+KFxuICAgICAgaW5wdXQ6IHtba2V5OiBudW1iZXJdOiBWfXxNYXA8bnVtYmVyLCBWPixcbiAgICAgIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxudW1iZXIsIFY+LCBiOiBLZXlWYWx1ZTxudW1iZXIsIFY+KSA9PiBudW1iZXIpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8bnVtYmVyLCBWPj47XG4gIHRyYW5zZm9ybTxWPihcbiAgICAgIGlucHV0OiB7W2tleTogbnVtYmVyXTogVn18TWFwPG51bWJlciwgVj58bnVsbCxcbiAgICAgIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxudW1iZXIsIFY+LCBiOiBLZXlWYWx1ZTxudW1iZXIsIFY+KSA9PiBudW1iZXIpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8bnVtYmVyLCBWPj58bnVsbDtcbiAgdHJhbnNmb3JtPEssIFY+KGlucHV0OiBNYXA8SywgVj4sIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxLLCBWPj47XG4gIHRyYW5zZm9ybTxLLCBWPihcbiAgICAgIGlucHV0OiBNYXA8SywgVj58bnVsbCxcbiAgICAgIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6IEFycmF5PEtleVZhbHVlPEssIFY+PnxudWxsO1xuICB0cmFuc2Zvcm08SywgVj4oXG4gICAgICBpbnB1dDogbnVsbHx7W2tleTogc3RyaW5nXTogViwgW2tleTogbnVtYmVyXTogVn18TWFwPEssIFY+LFxuICAgICAgY29tcGFyZUZuOiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIgPSBkZWZhdWx0Q29tcGFyYXRvcik6XG4gICAgICBBcnJheTxLZXlWYWx1ZTxLLCBWPj58bnVsbCB7XG4gICAgaWYgKCFpbnB1dCB8fCAoIShpbnB1dCBpbnN0YW5jZW9mIE1hcCkgJiYgdHlwZW9mIGlucHV0ICE9PSAnb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaWZmZXIpIHtcbiAgICAgIC8vIG1ha2UgYSBkaWZmZXIgZm9yIHdoYXRldmVyIHR5cGUgd2UndmUgYmVlbiBwYXNzZWQgaW5cbiAgICAgIHRoaXMuZGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoaW5wdXQpLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpZmZlckNoYW5nZXM6IEtleVZhbHVlQ2hhbmdlczxLLCBWPnxudWxsID0gdGhpcy5kaWZmZXIuZGlmZihpbnB1dCBhcyBhbnkpO1xuXG4gICAgaWYgKGRpZmZlckNoYW5nZXMpIHtcbiAgICAgIHRoaXMua2V5VmFsdWVzID0gW107XG4gICAgICBkaWZmZXJDaGFuZ2VzLmZvckVhY2hJdGVtKChyOiBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPikgPT4ge1xuICAgICAgICB0aGlzLmtleVZhbHVlcy5wdXNoKG1ha2VLZXlWYWx1ZVBhaXIoci5rZXksIHIuY3VycmVudFZhbHVlISkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmtleVZhbHVlcy5zb3J0KGNvbXBhcmVGbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmtleVZhbHVlcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdENvbXBhcmF0b3I8SywgVj4oXG4gICAga2V5VmFsdWVBOiBLZXlWYWx1ZTxLLCBWPiwga2V5VmFsdWVCOiBLZXlWYWx1ZTxLLCBWPik6IG51bWJlciB7XG4gIGNvbnN0IGEgPSBrZXlWYWx1ZUEua2V5O1xuICBjb25zdCBiID0ga2V5VmFsdWVCLmtleTtcbiAgLy8gaWYgc2FtZSBleGl0IHdpdGggMDtcbiAgaWYgKGEgPT09IGIpIHJldHVybiAwO1xuICAvLyBtYWtlIHN1cmUgdGhhdCB1bmRlZmluZWQgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIHNvcnQuXG4gIGlmIChhID09PSB1bmRlZmluZWQpIHJldHVybiAxO1xuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gLTE7XG4gIC8vIG1ha2Ugc3VyZSB0aGF0IG51bGxzIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBzb3J0LlxuICBpZiAoYSA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gIGlmIChiID09PSBudWxsKSByZXR1cm4gLTE7XG4gIGlmICh0eXBlb2YgYSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgYiA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogMTtcbiAgfVxuICBpZiAodHlwZW9mIGEgPT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH1cbiAgaWYgKHR5cGVvZiBhID09ICdib29sZWFuJyAmJiB0eXBlb2YgYiA9PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XG4gIH1cbiAgLy8gYGFgIGFuZCBgYmAgYXJlIG9mIGRpZmZlcmVudCB0eXBlcy4gQ29tcGFyZSB0aGVpciBzdHJpbmcgdmFsdWVzLlxuICBjb25zdCBhU3RyaW5nID0gU3RyaW5nKGEpO1xuICBjb25zdCBiU3RyaW5nID0gU3RyaW5nKGIpO1xuICByZXR1cm4gYVN0cmluZyA9PSBiU3RyaW5nID8gMCA6IGFTdHJpbmcgPCBiU3RyaW5nID8gLTEgOiAxO1xufVxuIl19