/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Parser } from './parser';
import { getXmlTagDefinition } from './xml_tags';
export { ParseTreeResult, TreeError } from './parser';
var XmlParser = /** @class */ (function (_super) {
    __extends(XmlParser, _super);
    function XmlParser() {
        return _super.call(this, getXmlTagDefinition) || this;
    }
    XmlParser.prototype.parse = function (source, url, options) {
        return _super.prototype.parse.call(this, source, url, options);
    };
    return XmlParser;
}(Parser));
export { XmlParser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIveG1sX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBR0gsT0FBTyxFQUFDLE1BQU0sRUFBa0IsTUFBTSxVQUFVLENBQUM7QUFDakQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRS9DLE9BQU8sRUFBQyxlQUFlLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRXBEO0lBQStCLDZCQUFNO0lBQ25DO2VBQ0Usa0JBQU0sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTSxNQUFjLEVBQUUsR0FBVyxFQUFFLE9BQXlCO1FBQzFELE9BQU8saUJBQU0sS0FBSyxZQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVJELENBQStCLE1BQU0sR0FRcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VG9rZW5pemVPcHRpb25zfSBmcm9tICcuL2xleGVyJztcbmltcG9ydCB7UGFyc2VyLCBQYXJzZVRyZWVSZXN1bHR9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi94bWxfdGFncyc7XG5cbmV4cG9ydCB7UGFyc2VUcmVlUmVzdWx0LCBUcmVlRXJyb3J9IGZyb20gJy4vcGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIFhtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGdldFhtbFRhZ0RlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogVG9rZW5pemVPcHRpb25zKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICByZXR1cm4gc3VwZXIucGFyc2Uoc291cmNlLCB1cmwsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=