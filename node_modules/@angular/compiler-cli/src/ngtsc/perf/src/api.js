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
        define("@angular/compiler-cli/src/ngtsc/perf/src/api", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9wZXJmL3NyYy9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJmUmVjb3JkZXIge1xuICByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xuXG4gIG1hcmsobmFtZTogc3RyaW5nLCBub2RlPzogdHMuU291cmNlRmlsZXx0cy5EZWNsYXJhdGlvbiwgY2F0ZWdvcnk/OiBzdHJpbmcsIGRldGFpbD86IHN0cmluZyk6IHZvaWQ7XG4gIHN0YXJ0KG5hbWU6IHN0cmluZywgbm9kZT86IHRzLlNvdXJjZUZpbGV8dHMuRGVjbGFyYXRpb24sIGNhdGVnb3J5Pzogc3RyaW5nLCBkZXRhaWw/OiBzdHJpbmcpOlxuICAgICAgbnVtYmVyO1xuICBzdG9wKHNwYW46IG51bWJlcik6IHZvaWQ7XG59XG4iXX0=