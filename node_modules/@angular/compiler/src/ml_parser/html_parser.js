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
        define("@angular/compiler/src/ml_parser/html_parser", ["require", "exports", "tslib", "@angular/compiler/src/ml_parser/html_tags", "@angular/compiler/src/ml_parser/parser", "@angular/compiler/src/ml_parser/parser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var html_tags_1 = require("@angular/compiler/src/ml_parser/html_tags");
    var parser_1 = require("@angular/compiler/src/ml_parser/parser");
    var parser_2 = require("@angular/compiler/src/ml_parser/parser");
    exports.ParseTreeResult = parser_2.ParseTreeResult;
    exports.TreeError = parser_2.TreeError;
    var HtmlParser = /** @class */ (function (_super) {
        tslib_1.__extends(HtmlParser, _super);
        function HtmlParser() {
            return _super.call(this, html_tags_1.getHtmlTagDefinition) || this;
        }
        HtmlParser.prototype.parse = function (source, url, options) {
            return _super.prototype.parse.call(this, source, url, options);
        };
        return HtmlParser;
    }(parser_1.Parser));
    exports.HtmlParser = HtmlParser;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL2h0bWxfcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILHVFQUFpRDtJQUVqRCxpRUFBaUQ7SUFFakQsaUVBQW9EO0lBQTVDLG1DQUFBLGVBQWUsQ0FBQTtJQUFFLDZCQUFBLFNBQVMsQ0FBQTtJQUVsQztRQUFnQyxzQ0FBTTtRQUNwQzttQkFDRSxrQkFBTSxnQ0FBb0IsQ0FBQztRQUM3QixDQUFDO1FBRUQsMEJBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBeUI7WUFDMUQsT0FBTyxpQkFBTSxLQUFLLFlBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQUFDLEFBUkQsQ0FBZ0MsZUFBTSxHQVFyQztJQVJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tICcuL2h0bWxfdGFncyc7XG5pbXBvcnQge1Rva2VuaXplT3B0aW9uc30gZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQge1BhcnNlciwgUGFyc2VUcmVlUmVzdWx0fSBmcm9tICcuL3BhcnNlcic7XG5cbmV4cG9ydCB7UGFyc2VUcmVlUmVzdWx0LCBUcmVlRXJyb3J9IGZyb20gJy4vcGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIEh0bWxQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihnZXRIdG1sVGFnRGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShzb3VyY2U6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBUb2tlbml6ZU9wdGlvbnMpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHJldHVybiBzdXBlci5wYXJzZShzb3VyY2UsIHVybCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==