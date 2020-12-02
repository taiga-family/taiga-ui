/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/ng-update/data/attribute-selectors", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    exports.attributeSelectors = {
        [target_version_1.TargetVersion.V6]: [{
                pr: 'https://github.com/angular/components/pull/10257',
                changes: [
                    { replace: 'cdkPortalHost', replaceWith: 'cdkPortalOutlet' },
                    { replace: 'portalHost', replaceWith: 'cdkPortalOutlet' }
                ]
            }]
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvZGF0YS9hdHRyaWJ1dGUtc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsdUZBQStEO0lBVWxELFFBQUEsa0JBQWtCLEdBQWlEO1FBQzlFLENBQUMsOEJBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUNuQixFQUFFLEVBQUUsa0RBQWtEO2dCQUN0RCxPQUFPLEVBQUU7b0JBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBQztvQkFDMUQsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBQztpQkFDeEQ7YUFDRixDQUFDO0tBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3RhcmdldC12ZXJzaW9uJztcbmltcG9ydCB7VmVyc2lvbkNoYW5nZXN9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3ZlcnNpb24tY2hhbmdlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlU2VsZWN0b3JVcGdyYWRlRGF0YSB7XG4gIC8qKiBUaGUgYXR0cmlidXRlIG5hbWUgdG8gcmVwbGFjZS4gKi9cbiAgcmVwbGFjZTogc3RyaW5nO1xuICAvKiogVGhlIG5ldyBuYW1lIGZvciB0aGUgYXR0cmlidXRlLiAqL1xuICByZXBsYWNlV2l0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXR0cmlidXRlU2VsZWN0b3JzOiBWZXJzaW9uQ2hhbmdlczxBdHRyaWJ1dGVTZWxlY3RvclVwZ3JhZGVEYXRhPiA9IHtcbiAgW1RhcmdldFZlcnNpb24uVjZdOiBbe1xuICAgIHByOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9wdWxsLzEwMjU3JyxcbiAgICBjaGFuZ2VzOiBbXG4gICAgICB7cmVwbGFjZTogJ2Nka1BvcnRhbEhvc3QnLCByZXBsYWNlV2l0aDogJ2Nka1BvcnRhbE91dGxldCd9LFxuICAgICAge3JlcGxhY2U6ICdwb3J0YWxIb3N0JywgcmVwbGFjZVdpdGg6ICdjZGtQb3J0YWxPdXRsZXQnfVxuICAgIF1cbiAgfV1cbn07XG4iXX0=