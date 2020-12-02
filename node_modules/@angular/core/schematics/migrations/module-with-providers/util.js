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
        define("@angular/core/schematics/migrations/module-with-providers/util", ["require", "exports", "typescript", "@angular/core/schematics/utils/typescript/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const imports_1 = require("@angular/core/schematics/utils/typescript/imports");
    /** Add a generic type to a type reference. */
    function createModuleWithProvidersType(type, node) {
        const typeNode = node || ts.createTypeReferenceNode('ModuleWithProviders', []);
        const typeReferenceNode = ts.createTypeReferenceNode(ts.createIdentifier(type), []);
        return ts.updateTypeReferenceNode(typeNode, typeNode.typeName, ts.createNodeArray([typeReferenceNode]));
    }
    exports.createModuleWithProvidersType = createModuleWithProvidersType;
    /** Determine whether a node is a ModuleWithProviders type reference node without a generic type */
    function isModuleWithProvidersNotGeneric(typeChecker, node) {
        if (!ts.isTypeReferenceNode(node) || !ts.isIdentifier(node.typeName)) {
            return false;
        }
        const imp = imports_1.getImportOfIdentifier(typeChecker, node.typeName);
        return !!imp && imp.name === 'ModuleWithProviders' && imp.importModule === '@angular/core' &&
            !node.typeArguments;
    }
    exports.isModuleWithProvidersNotGeneric = isModuleWithProvidersNotGeneric;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc2NoZW1hdGljcy9taWdyYXRpb25zL21vZHVsZS13aXRoLXByb3ZpZGVycy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBQ2pDLCtFQUFxRTtJQUVyRSw4Q0FBOEM7SUFDOUMsU0FBZ0IsNkJBQTZCLENBQ3pDLElBQVksRUFBRSxJQUEyQjtRQUMzQyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FDN0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFORCxzRUFNQztJQUVELG1HQUFtRztJQUNuRyxTQUFnQiwrQkFBK0IsQ0FDM0MsV0FBMkIsRUFBRSxJQUFhO1FBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwRSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxHQUFHLEdBQUcsK0JBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxxQkFBcUIsSUFBSSxHQUFHLENBQUMsWUFBWSxLQUFLLGVBQWU7WUFDdEYsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzFCLENBQUM7SUFURCwwRUFTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge2dldEltcG9ydE9mSWRlbnRpZmllcn0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNjcmlwdC9pbXBvcnRzJztcblxuLyoqIEFkZCBhIGdlbmVyaWMgdHlwZSB0byBhIHR5cGUgcmVmZXJlbmNlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZVdpdGhQcm92aWRlcnNUeXBlKFxuICAgIHR5cGU6IHN0cmluZywgbm9kZT86IHRzLlR5cGVSZWZlcmVuY2VOb2RlKTogdHMuVHlwZVJlZmVyZW5jZU5vZGUge1xuICBjb25zdCB0eXBlTm9kZSA9IG5vZGUgfHwgdHMuY3JlYXRlVHlwZVJlZmVyZW5jZU5vZGUoJ01vZHVsZVdpdGhQcm92aWRlcnMnLCBbXSk7XG4gIGNvbnN0IHR5cGVSZWZlcmVuY2VOb2RlID0gdHMuY3JlYXRlVHlwZVJlZmVyZW5jZU5vZGUodHMuY3JlYXRlSWRlbnRpZmllcih0eXBlKSwgW10pO1xuICByZXR1cm4gdHMudXBkYXRlVHlwZVJlZmVyZW5jZU5vZGUoXG4gICAgICB0eXBlTm9kZSwgdHlwZU5vZGUudHlwZU5hbWUsIHRzLmNyZWF0ZU5vZGVBcnJheShbdHlwZVJlZmVyZW5jZU5vZGVdKSk7XG59XG5cbi8qKiBEZXRlcm1pbmUgd2hldGhlciBhIG5vZGUgaXMgYSBNb2R1bGVXaXRoUHJvdmlkZXJzIHR5cGUgcmVmZXJlbmNlIG5vZGUgd2l0aG91dCBhIGdlbmVyaWMgdHlwZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kdWxlV2l0aFByb3ZpZGVyc05vdEdlbmVyaWMoXG4gICAgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBub2RlOiB0cy5Ob2RlKTogbm9kZSBpcyB0cy5UeXBlUmVmZXJlbmNlTm9kZSB7XG4gIGlmICghdHMuaXNUeXBlUmVmZXJlbmNlTm9kZShub2RlKSB8fCAhdHMuaXNJZGVudGlmaWVyKG5vZGUudHlwZU5hbWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaW1wID0gZ2V0SW1wb3J0T2ZJZGVudGlmaWVyKHR5cGVDaGVja2VyLCBub2RlLnR5cGVOYW1lKTtcbiAgcmV0dXJuICEhaW1wICYmIGltcC5uYW1lID09PSAnTW9kdWxlV2l0aFByb3ZpZGVycycgJiYgaW1wLmltcG9ydE1vZHVsZSA9PT0gJ0Bhbmd1bGFyL2NvcmUnICYmXG4gICAgICAhbm9kZS50eXBlQXJndW1lbnRzO1xufVxuIl19