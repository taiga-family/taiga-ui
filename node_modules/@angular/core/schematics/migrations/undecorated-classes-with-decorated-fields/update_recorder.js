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
        define("@angular/core/schematics/migrations/undecorated-classes-with-decorated-fields/update_recorder", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlX3JlY29yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zY2hlbWF0aWNzL21pZ3JhdGlvbnMvdW5kZWNvcmF0ZWQtY2xhc3Nlcy13aXRoLWRlY29yYXRlZC1maWVsZHMvdXBkYXRlX3JlY29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge0ltcG9ydE1hbmFnZXJVcGRhdGVSZWNvcmRlcn0gZnJvbSAnLi4vLi4vdXRpbHMvaW1wb3J0X21hbmFnZXInO1xuXG4vKipcbiAqIFVwZGF0ZSByZWNvcmRlciBpbnRlcmZhY2UgdGhhdCBpcyB1c2VkIHRvIHRyYW5zZm9ybSBzb3VyY2UgZmlsZXNcbiAqIGluIGEgbm9uLWNvbGxpZGluZyB3YXkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUmVjb3JkZXIgZXh0ZW5kcyBJbXBvcnRNYW5hZ2VyVXBkYXRlUmVjb3JkZXIge1xuICBhZGRDbGFzc0RlY29yYXRvcihub2RlOiB0cy5DbGFzc0RlY2xhcmF0aW9uLCB0ZXh0OiBzdHJpbmcpOiB2b2lkO1xuICBjb21taXRVcGRhdGUoKTogdm9pZDtcbn1cbiJdfQ==