(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/i18n/index", ["require", "exports", "@angular/compiler/src/i18n/digest", "@angular/compiler/src/i18n/extractor", "@angular/compiler/src/i18n/i18n_html_parser", "@angular/compiler/src/i18n/message_bundle", "@angular/compiler/src/i18n/serializers/serializer", "@angular/compiler/src/i18n/serializers/xliff", "@angular/compiler/src/i18n/serializers/xliff2", "@angular/compiler/src/i18n/serializers/xmb", "@angular/compiler/src/i18n/serializers/xtb"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var digest_1 = require("@angular/compiler/src/i18n/digest");
    exports.computeMsgId = digest_1.computeMsgId;
    var extractor_1 = require("@angular/compiler/src/i18n/extractor");
    exports.Extractor = extractor_1.Extractor;
    var i18n_html_parser_1 = require("@angular/compiler/src/i18n/i18n_html_parser");
    exports.I18NHtmlParser = i18n_html_parser_1.I18NHtmlParser;
    var message_bundle_1 = require("@angular/compiler/src/i18n/message_bundle");
    exports.MessageBundle = message_bundle_1.MessageBundle;
    var serializer_1 = require("@angular/compiler/src/i18n/serializers/serializer");
    exports.Serializer = serializer_1.Serializer;
    var xliff_1 = require("@angular/compiler/src/i18n/serializers/xliff");
    exports.Xliff = xliff_1.Xliff;
    var xliff2_1 = require("@angular/compiler/src/i18n/serializers/xliff2");
    exports.Xliff2 = xliff2_1.Xliff2;
    var xmb_1 = require("@angular/compiler/src/i18n/serializers/xmb");
    exports.Xmb = xmb_1.Xmb;
    var xtb_1 = require("@angular/compiler/src/i18n/serializers/xtb");
    exports.Xtb = xtb_1.Xtb;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDREQUFzQztJQUE5QixnQ0FBQSxZQUFZLENBQUE7SUFDcEIsa0VBQXFEO0lBQTdDLGdDQUFBLFNBQVMsQ0FBQTtJQUNqQixnRkFBa0Q7SUFBMUMsNENBQUEsY0FBYyxDQUFBO0lBQ3RCLDRFQUErQztJQUF2Qyx5Q0FBQSxhQUFhLENBQUE7SUFDckIsZ0ZBQW9EO0lBQTVDLGtDQUFBLFVBQVUsQ0FBQTtJQUNsQixzRUFBMEM7SUFBbEMsd0JBQUEsS0FBSyxDQUFBO0lBQ2Isd0VBQTRDO0lBQXBDLDBCQUFBLE1BQU0sQ0FBQTtJQUNkLGtFQUFzQztJQUE5QixvQkFBQSxHQUFHLENBQUE7SUFDWCxrRUFBc0M7SUFBOUIsb0JBQUEsR0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZXhwb3J0IHtjb21wdXRlTXNnSWR9IGZyb20gJy4vZGlnZXN0JztcbmV4cG9ydCB7RXh0cmFjdG9yLCBFeHRyYWN0b3JIb3N0fSBmcm9tICcuL2V4dHJhY3Rvcic7XG5leHBvcnQge0kxOE5IdG1sUGFyc2VyfSBmcm9tICcuL2kxOG5faHRtbF9wYXJzZXInO1xuZXhwb3J0IHtNZXNzYWdlQnVuZGxlfSBmcm9tICcuL21lc3NhZ2VfYnVuZGxlJztcbmV4cG9ydCB7U2VyaWFsaXplcn0gZnJvbSAnLi9zZXJpYWxpemVycy9zZXJpYWxpemVyJztcbmV4cG9ydCB7WGxpZmZ9IGZyb20gJy4vc2VyaWFsaXplcnMveGxpZmYnO1xuZXhwb3J0IHtYbGlmZjJ9IGZyb20gJy4vc2VyaWFsaXplcnMveGxpZmYyJztcbmV4cG9ydCB7WG1ifSBmcm9tICcuL3NlcmlhbGl6ZXJzL3htYic7XG5leHBvcnQge1h0Yn0gZnJvbSAnLi9zZXJpYWxpemVycy94dGInO1xuIl19