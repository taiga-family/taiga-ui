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
        define("@angular/compiler-cli/src/ngtsc/scope", ["require", "exports", "@angular/compiler-cli/src/ngtsc/scope/src/component_scope", "@angular/compiler-cli/src/ngtsc/scope/src/dependency", "@angular/compiler-cli/src/ngtsc/scope/src/local"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_scope_1 = require("@angular/compiler-cli/src/ngtsc/scope/src/component_scope");
    exports.CompoundComponentScopeReader = component_scope_1.CompoundComponentScopeReader;
    var dependency_1 = require("@angular/compiler-cli/src/ngtsc/scope/src/dependency");
    exports.MetadataDtsModuleScopeResolver = dependency_1.MetadataDtsModuleScopeResolver;
    var local_1 = require("@angular/compiler-cli/src/ngtsc/scope/src/local");
    exports.LocalModuleScopeRegistry = local_1.LocalModuleScopeRegistry;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3Njb3BlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBR0gsNkZBQXlGO0lBQTNELHlEQUFBLDRCQUE0QixDQUFBO0lBQzFELG1GQUF3RjtJQUF4RCxzREFBQSw4QkFBOEIsQ0FBQTtJQUM5RCx5RUFBMkc7SUFBaEUsMkNBQUEsd0JBQXdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCB7RXhwb3J0U2NvcGUsIFNjb3BlRGF0YX0gZnJvbSAnLi9zcmMvYXBpJztcbmV4cG9ydCB7Q29tcG9uZW50U2NvcGVSZWFkZXIsIENvbXBvdW5kQ29tcG9uZW50U2NvcGVSZWFkZXJ9IGZyb20gJy4vc3JjL2NvbXBvbmVudF9zY29wZSc7XG5leHBvcnQge0R0c01vZHVsZVNjb3BlUmVzb2x2ZXIsIE1ldGFkYXRhRHRzTW9kdWxlU2NvcGVSZXNvbHZlcn0gZnJvbSAnLi9zcmMvZGVwZW5kZW5jeSc7XG5leHBvcnQge0RlY2xhcmF0aW9uRGF0YSwgTG9jYWxNb2R1bGVTY29wZSwgTG9jYWxNb2R1bGVTY29wZVJlZ2lzdHJ5LCBMb2NhbE5nTW9kdWxlRGF0YX0gZnJvbSAnLi9zcmMvbG9jYWwnO1xuIl19