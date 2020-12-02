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
        define("@angular/compiler-cli/src/ngtsc/transform", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/transform/src/api", "@angular/compiler-cli/src/ngtsc/transform/src/alias", "@angular/compiler-cli/src/ngtsc/transform/src/compilation", "@angular/compiler-cli/src/ngtsc/transform/src/declaration", "@angular/compiler-cli/src/ngtsc/transform/src/trait", "@angular/compiler-cli/src/ngtsc/transform/src/transform"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require("@angular/compiler-cli/src/ngtsc/transform/src/api"), exports);
    var alias_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/alias");
    exports.aliasTransformFactory = alias_1.aliasTransformFactory;
    var compilation_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/compilation");
    exports.TraitCompiler = compilation_1.TraitCompiler;
    var declaration_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/declaration");
    exports.declarationTransformFactory = declaration_1.declarationTransformFactory;
    exports.DtsTransformRegistry = declaration_1.DtsTransformRegistry;
    exports.IvyDeclarationDtsTransform = declaration_1.IvyDeclarationDtsTransform;
    exports.ReturnTypeTransform = declaration_1.ReturnTypeTransform;
    var trait_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/trait");
    exports.Trait = trait_1.Trait;
    exports.TraitState = trait_1.TraitState;
    var transform_1 = require("@angular/compiler-cli/src/ngtsc/transform/src/transform");
    exports.ivyTransformFactory = transform_1.ivyTransformFactory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zZm9ybS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw0RkFBMEI7SUFDMUIsNkVBQWtEO0lBQTFDLHdDQUFBLHFCQUFxQixDQUFBO0lBQzdCLHlGQUE2RDtJQUF4QyxzQ0FBQSxhQUFhLENBQUE7SUFDbEMseUZBQXFJO0lBQTdILG9EQUFBLDJCQUEyQixDQUFBO0lBQUUsNkNBQUEsb0JBQW9CLENBQUE7SUFBRSxtREFBQSwwQkFBMEIsQ0FBQTtJQUFFLDRDQUFBLG1CQUFtQixDQUFBO0lBQzFHLDZFQUFzSDtJQUF0Qyx3QkFBQSxLQUFLLENBQUE7SUFBRSw2QkFBQSxVQUFVLENBQUE7SUFDakcscUZBQW9EO0lBQTVDLDBDQUFBLG1CQUFtQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9hcGknO1xuZXhwb3J0IHthbGlhc1RyYW5zZm9ybUZhY3Rvcnl9IGZyb20gJy4vc3JjL2FsaWFzJztcbmV4cG9ydCB7Q2xhc3NSZWNvcmQsIFRyYWl0Q29tcGlsZXJ9IGZyb20gJy4vc3JjL2NvbXBpbGF0aW9uJztcbmV4cG9ydCB7ZGVjbGFyYXRpb25UcmFuc2Zvcm1GYWN0b3J5LCBEdHNUcmFuc2Zvcm1SZWdpc3RyeSwgSXZ5RGVjbGFyYXRpb25EdHNUcmFuc2Zvcm0sIFJldHVyblR5cGVUcmFuc2Zvcm19IGZyb20gJy4vc3JjL2RlY2xhcmF0aW9uJztcbmV4cG9ydCB7QW5hbHl6ZWRUcmFpdCwgRXJyb3JlZFRyYWl0LCBQZW5kaW5nVHJhaXQsIFJlc29sdmVkVHJhaXQsIFNraXBwZWRUcmFpdCwgVHJhaXQsIFRyYWl0U3RhdGV9IGZyb20gJy4vc3JjL3RyYWl0JztcbmV4cG9ydCB7aXZ5VHJhbnNmb3JtRmFjdG9yeX0gZnJvbSAnLi9zcmMvdHJhbnNmb3JtJztcbiJdfQ==