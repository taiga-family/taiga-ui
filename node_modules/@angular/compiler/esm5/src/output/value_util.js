/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { visitValue } from '../util';
import * as o from './output_ast';
export var QUOTED_KEYS = '$quoted$';
export function convertValueToOutputAst(ctx, value, type) {
    if (type === void 0) { type = null; }
    return visitValue(value, new _ValueOutputAstTransformer(ctx), type);
}
var _ValueOutputAstTransformer = /** @class */ (function () {
    function _ValueOutputAstTransformer(ctx) {
        this.ctx = ctx;
    }
    _ValueOutputAstTransformer.prototype.visitArray = function (arr, type) {
        var values = [];
        // Note Array.map() must not be used to convert the values because it will
        // skip over empty elements in arrays constructed using `new Array(length)`,
        // resulting in `undefined` elements. This breaks the type guarantee that
        // all values in `o.LiteralArrayExpr` are of type `o.Expression`.
        // See test case in `value_util_spec.ts`.
        for (var i = 0; i < arr.length; ++i) {
            values.push(visitValue(arr[i], this, null /* context */));
        }
        return o.literalArr(values, type);
    };
    _ValueOutputAstTransformer.prototype.visitStringMap = function (map, type) {
        var _this = this;
        var entries = [];
        var quotedSet = new Set(map && map[QUOTED_KEYS]);
        Object.keys(map).forEach(function (key) {
            entries.push(new o.LiteralMapEntry(key, visitValue(map[key], _this, null), quotedSet.has(key)));
        });
        return new o.LiteralMapExpr(entries, type);
    };
    _ValueOutputAstTransformer.prototype.visitPrimitive = function (value, type) {
        return o.literal(value, type);
    };
    _ValueOutputAstTransformer.prototype.visitOther = function (value, type) {
        if (value instanceof o.Expression) {
            return value;
        }
        else {
            return this.ctx.importExpr(value);
        }
    };
    return _ValueOutputAstTransformer;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvdmFsdWVfdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQWtDLFVBQVUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVwRSxPQUFPLEtBQUssQ0FBQyxNQUFNLGNBQWMsQ0FBQztBQUVsQyxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBRXRDLE1BQU0sVUFBVSx1QkFBdUIsQ0FDbkMsR0FBa0IsRUFBRSxLQUFVLEVBQUUsSUFBd0I7SUFBeEIscUJBQUEsRUFBQSxXQUF3QjtJQUMxRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQ7SUFDRSxvQ0FBb0IsR0FBa0I7UUFBbEIsUUFBRyxHQUFILEdBQUcsQ0FBZTtJQUFHLENBQUM7SUFDMUMsK0NBQVUsR0FBVixVQUFXLEdBQVUsRUFBRSxJQUFZO1FBQ2pDLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUM7UUFDbEMsMEVBQTBFO1FBQzFFLDRFQUE0RTtRQUM1RSx5RUFBeUU7UUFDekUsaUVBQWlFO1FBQ2pFLHlDQUF5QztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbURBQWMsR0FBZCxVQUFlLEdBQXlCLEVBQUUsSUFBZTtRQUF6RCxpQkFRQztRQVBDLElBQU0sT0FBTyxHQUF3QixFQUFFLENBQUM7UUFDeEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMxQixPQUFPLENBQUMsSUFBSSxDQUNSLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1EQUFjLEdBQWQsVUFBZSxLQUFVLEVBQUUsSUFBWTtRQUNyQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQ0FBVSxHQUFWLFVBQVcsS0FBVSxFQUFFLElBQVk7UUFDakMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge091dHB1dENvbnRleHQsIFZhbHVlVHJhbnNmb3JtZXIsIHZpc2l0VmFsdWV9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0X2FzdCc7XG5cbmV4cG9ydCBjb25zdCBRVU9URURfS0VZUyA9ICckcXVvdGVkJCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VmFsdWVUb091dHB1dEFzdChcbiAgICBjdHg6IE91dHB1dENvbnRleHQsIHZhbHVlOiBhbnksIHR5cGU6IG8uVHlwZXxudWxsID0gbnVsbCk6IG8uRXhwcmVzc2lvbiB7XG4gIHJldHVybiB2aXNpdFZhbHVlKHZhbHVlLCBuZXcgX1ZhbHVlT3V0cHV0QXN0VHJhbnNmb3JtZXIoY3R4KSwgdHlwZSk7XG59XG5cbmNsYXNzIF9WYWx1ZU91dHB1dEFzdFRyYW5zZm9ybWVyIGltcGxlbWVudHMgVmFsdWVUcmFuc2Zvcm1lciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3R4OiBPdXRwdXRDb250ZXh0KSB7fVxuICB2aXNpdEFycmF5KGFycjogYW55W10sIHR5cGU6IG8uVHlwZSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgdmFsdWVzOiBvLkV4cHJlc3Npb25bXSA9IFtdO1xuICAgIC8vIE5vdGUgQXJyYXkubWFwKCkgbXVzdCBub3QgYmUgdXNlZCB0byBjb252ZXJ0IHRoZSB2YWx1ZXMgYmVjYXVzZSBpdCB3aWxsXG4gICAgLy8gc2tpcCBvdmVyIGVtcHR5IGVsZW1lbnRzIGluIGFycmF5cyBjb25zdHJ1Y3RlZCB1c2luZyBgbmV3IEFycmF5KGxlbmd0aClgLFxuICAgIC8vIHJlc3VsdGluZyBpbiBgdW5kZWZpbmVkYCBlbGVtZW50cy4gVGhpcyBicmVha3MgdGhlIHR5cGUgZ3VhcmFudGVlIHRoYXRcbiAgICAvLyBhbGwgdmFsdWVzIGluIGBvLkxpdGVyYWxBcnJheUV4cHJgIGFyZSBvZiB0eXBlIGBvLkV4cHJlc3Npb25gLlxuICAgIC8vIFNlZSB0ZXN0IGNhc2UgaW4gYHZhbHVlX3V0aWxfc3BlYy50c2AuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZpc2l0VmFsdWUoYXJyW2ldLCB0aGlzLCBudWxsIC8qIGNvbnRleHQgKi8pKTtcbiAgICB9XG4gICAgcmV0dXJuIG8ubGl0ZXJhbEFycih2YWx1ZXMsIHR5cGUpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdNYXAobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSwgdHlwZTogby5NYXBUeXBlKTogby5FeHByZXNzaW9uIHtcbiAgICBjb25zdCBlbnRyaWVzOiBvLkxpdGVyYWxNYXBFbnRyeVtdID0gW107XG4gICAgY29uc3QgcXVvdGVkU2V0ID0gbmV3IFNldDxzdHJpbmc+KG1hcCAmJiBtYXBbUVVPVEVEX0tFWVNdKTtcbiAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGVudHJpZXMucHVzaChcbiAgICAgICAgICBuZXcgby5MaXRlcmFsTWFwRW50cnkoa2V5LCB2aXNpdFZhbHVlKG1hcFtrZXldLCB0aGlzLCBudWxsKSwgcXVvdGVkU2V0LmhhcyhrZXkpKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBvLkxpdGVyYWxNYXBFeHByKGVudHJpZXMsIHR5cGUpO1xuICB9XG5cbiAgdmlzaXRQcmltaXRpdmUodmFsdWU6IGFueSwgdHlwZTogby5UeXBlKTogby5FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gby5saXRlcmFsKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgdHlwZTogby5UeXBlKTogby5FeHByZXNzaW9uIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBvLkV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY3R4LmltcG9ydEV4cHIodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19