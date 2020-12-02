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
        define("@angular/core/schematics/migrations/missing-injectable/update_recorder", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlX3JlY29yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvbWlzc2luZy1pbmplY3RhYmxlL3VwZGF0ZV9yZWNvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtJbXBvcnRNYW5hZ2VyVXBkYXRlUmVjb3JkZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2ltcG9ydF9tYW5hZ2VyJztcblxuLyoqXG4gKiBVcGRhdGUgcmVjb3JkZXIgaW50ZXJmYWNlIHRoYXQgaXMgdXNlZCB0byB0cmFuc2Zvcm0gc291cmNlIGZpbGVzIGluIGEgbm9uLWNvbGxpZGluZ1xuICogd2F5LiBBbHNvIHRoaXMgaW5kaXJlY3Rpb24gbWFrZXMgaXQgcG9zc2libGUgdG8gcmUtdXNlIGxvZ2ljIGZvciBib3RoIFRTTGludCBydWxlc1xuICogYW5kIENMSSBkZXZraXQgc2NoZW1hdGljIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUmVjb3JkZXIgZXh0ZW5kcyBJbXBvcnRNYW5hZ2VyVXBkYXRlUmVjb3JkZXIge1xuICBhZGRDbGFzc0RlY29yYXRvcihub2RlOiB0cy5DbGFzc0RlY2xhcmF0aW9uLCB0ZXh0OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZDtcbiAgcmVwbGFjZURlY29yYXRvcihub2RlOiB0cy5EZWNvcmF0b3IsIG5ld1RleHQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkO1xuICB1cGRhdGVPYmplY3RMaXRlcmFsKG5vZGU6IHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uLCBuZXdUZXh0OiBzdHJpbmcpOiB2b2lkO1xuICBjb21taXRVcGRhdGUoKTogdm9pZDtcbn1cbiJdfQ==