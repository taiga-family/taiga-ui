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
        define("@angular/compiler-cli/src/language_services", ["require", "exports", "@angular/compiler-cli/src/metadata/index", "@angular/compiler-cli/src/transformers/metadata_reader"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    
    The API from compiler-cli that language-service can see.
    It is important that none the exported modules require anything other than
    Angular modules and Typescript as this will indirectly add a dependency
    to the language service.
    
    */
    var metadata_1 = require("@angular/compiler-cli/src/metadata/index");
    exports.MetadataCollector = metadata_1.MetadataCollector;
    var metadata_reader_1 = require("@angular/compiler-cli/src/transformers/metadata_reader");
    exports.createMetadataReaderCache = metadata_reader_1.createMetadataReaderCache;
    exports.readMetadata = metadata_reader_1.readMetadata;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Vfc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL2xhbmd1YWdlX3NlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUg7Ozs7Ozs7TUFPRTtJQUNGLHFFQUE2RDtJQUFyRCx1Q0FBQSxpQkFBaUIsQ0FBQTtJQUV6QiwwRkFBZ0k7SUFBeEgsc0RBQUEseUJBQXlCLENBQUE7SUFBMkMseUNBQUEsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKlxuXG5UaGUgQVBJIGZyb20gY29tcGlsZXItY2xpIHRoYXQgbGFuZ3VhZ2Utc2VydmljZSBjYW4gc2VlLlxuSXQgaXMgaW1wb3J0YW50IHRoYXQgbm9uZSB0aGUgZXhwb3J0ZWQgbW9kdWxlcyByZXF1aXJlIGFueXRoaW5nIG90aGVyIHRoYW5cbkFuZ3VsYXIgbW9kdWxlcyBhbmQgVHlwZXNjcmlwdCBhcyB0aGlzIHdpbGwgaW5kaXJlY3RseSBhZGQgYSBkZXBlbmRlbmN5XG50byB0aGUgbGFuZ3VhZ2Ugc2VydmljZS5cblxuKi9cbmV4cG9ydCB7TWV0YWRhdGFDb2xsZWN0b3IsIE1vZHVsZU1ldGFkYXRhfSBmcm9tICcuL21ldGFkYXRhJztcbmV4cG9ydCB7Q29tcGlsZXJPcHRpb25zfSBmcm9tICcuL3RyYW5zZm9ybWVycy9hcGknO1xuZXhwb3J0IHtjcmVhdGVNZXRhZGF0YVJlYWRlckNhY2hlLCBNZXRhZGF0YVJlYWRlckNhY2hlLCBNZXRhZGF0YVJlYWRlckhvc3QsIHJlYWRNZXRhZGF0YX0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvbWV0YWRhdGFfcmVhZGVyJztcbiJdfQ==