/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { getHtmlTagDefinition } from './html_tags';
import { Parser } from './parser';
export { ParseTreeResult, TreeError } from './parser';
var HtmlParser = /** @class */ (function (_super) {
    __extends(HtmlParser, _super);
    function HtmlParser() {
        return _super.call(this, getHtmlTagDefinition) || this;
    }
    HtmlParser.prototype.parse = function (source, url, options) {
        return _super.prototype.parse.call(this, source, url, options);
    };
    return HtmlParser;
}(Parser));
export { HtmlParser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL2h0bWxfcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFakQsT0FBTyxFQUFDLE1BQU0sRUFBa0IsTUFBTSxVQUFVLENBQUM7QUFFakQsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFcEQ7SUFBZ0MsOEJBQU07SUFDcEM7ZUFDRSxrQkFBTSxvQkFBb0IsQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBeUI7UUFDMUQsT0FBTyxpQkFBTSxLQUFLLFlBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBZ0MsTUFBTSxHQVFyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi9odG1sX3RhZ3MnO1xuaW1wb3J0IHtUb2tlbml6ZU9wdGlvbnN9IGZyb20gJy4vbGV4ZXInO1xuaW1wb3J0IHtQYXJzZXIsIFBhcnNlVHJlZVJlc3VsdH0gZnJvbSAnLi9wYXJzZXInO1xuXG5leHBvcnQge1BhcnNlVHJlZVJlc3VsdCwgVHJlZUVycm9yfSBmcm9tICcuL3BhcnNlcic7XG5cbmV4cG9ydCBjbGFzcyBIdG1sUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoZ2V0SHRtbFRhZ0RlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zPzogVG9rZW5pemVPcHRpb25zKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICByZXR1cm4gc3VwZXIucGFyc2Uoc291cmNlLCB1cmwsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=