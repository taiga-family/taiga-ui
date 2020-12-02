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
        define("@angular/cdk/schematics/ng-update/typescript/module-specifiers", ["require", "exports", "@angular/cdk/schematics/ng-update/typescript/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const imports_1 = require("@angular/cdk/schematics/ng-update/typescript/imports");
    /** Name of the Angular Material module specifier. */
    exports.materialModuleSpecifier = '@angular/material';
    /** Name of the Angular CDK module specifier. */
    exports.cdkModuleSpecifier = '@angular/cdk';
    /** Whether the specified node is part of an Angular Material or CDK import declaration. */
    function isMaterialImportDeclaration(node) {
        return isMaterialDeclaration(imports_1.getImportDeclaration(node));
    }
    exports.isMaterialImportDeclaration = isMaterialImportDeclaration;
    /** Whether the specified node is part of an Angular Material or CDK import declaration. */
    function isMaterialExportDeclaration(node) {
        return isMaterialDeclaration(imports_1.getExportDeclaration(node));
    }
    exports.isMaterialExportDeclaration = isMaterialExportDeclaration;
    /** Whether the declaration is part of Angular Material. */
    function isMaterialDeclaration(declaration) {
        if (!declaration.moduleSpecifier) {
            return false;
        }
        const moduleSpecifier = declaration.moduleSpecifier.getText();
        return moduleSpecifier.indexOf(exports.materialModuleSpecifier) !== -1 ||
            moduleSpecifier.indexOf(exports.cdkModuleSpecifier) !== -1;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLXNwZWNpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL3R5cGVzY3JpcHQvbW9kdWxlLXNwZWNpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFHSCxrRkFBaUY7SUFFakYscURBQXFEO0lBQ3hDLFFBQUEsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUM7SUFFM0QsZ0RBQWdEO0lBQ25DLFFBQUEsa0JBQWtCLEdBQUcsY0FBYyxDQUFDO0lBRWpELDJGQUEyRjtJQUMzRixTQUFnQiwyQkFBMkIsQ0FBQyxJQUFhO1FBQ3ZELE9BQU8scUJBQXFCLENBQUMsOEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRkQsa0VBRUM7SUFFRCwyRkFBMkY7SUFDM0YsU0FBZ0IsMkJBQTJCLENBQUMsSUFBYTtRQUN2RCxPQUFPLHFCQUFxQixDQUFDLDhCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUZELGtFQUVDO0lBRUQsMkRBQTJEO0lBQzNELFNBQVMscUJBQXFCLENBQUMsV0FBc0Q7UUFDbkYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUQsT0FBTyxlQUFlLENBQUMsT0FBTyxDQUFDLCtCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELGVBQWUsQ0FBQyxPQUFPLENBQUMsMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtnZXRFeHBvcnREZWNsYXJhdGlvbiwgZ2V0SW1wb3J0RGVjbGFyYXRpb259IGZyb20gJy4uL3R5cGVzY3JpcHQvaW1wb3J0cyc7XG5cbi8qKiBOYW1lIG9mIHRoZSBBbmd1bGFyIE1hdGVyaWFsIG1vZHVsZSBzcGVjaWZpZXIuICovXG5leHBvcnQgY29uc3QgbWF0ZXJpYWxNb2R1bGVTcGVjaWZpZXIgPSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vKiogTmFtZSBvZiB0aGUgQW5ndWxhciBDREsgbW9kdWxlIHNwZWNpZmllci4gKi9cbmV4cG9ydCBjb25zdCBjZGtNb2R1bGVTcGVjaWZpZXIgPSAnQGFuZ3VsYXIvY2RrJztcblxuLyoqIFdoZXRoZXIgdGhlIHNwZWNpZmllZCBub2RlIGlzIHBhcnQgb2YgYW4gQW5ndWxhciBNYXRlcmlhbCBvciBDREsgaW1wb3J0IGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWF0ZXJpYWxJbXBvcnREZWNsYXJhdGlvbihub2RlOiB0cy5Ob2RlKSB7XG4gIHJldHVybiBpc01hdGVyaWFsRGVjbGFyYXRpb24oZ2V0SW1wb3J0RGVjbGFyYXRpb24obm9kZSkpO1xufVxuXG4vKiogV2hldGhlciB0aGUgc3BlY2lmaWVkIG5vZGUgaXMgcGFydCBvZiBhbiBBbmd1bGFyIE1hdGVyaWFsIG9yIENESyBpbXBvcnQgZGVjbGFyYXRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gaXNNYXRlcmlhbEV4cG9ydERlY2xhcmF0aW9uKG5vZGU6IHRzLk5vZGUpIHtcbiAgcmV0dXJuIGlzTWF0ZXJpYWxEZWNsYXJhdGlvbihnZXRFeHBvcnREZWNsYXJhdGlvbihub2RlKSk7XG59XG5cbi8qKiBXaGV0aGVyIHRoZSBkZWNsYXJhdGlvbiBpcyBwYXJ0IG9mIEFuZ3VsYXIgTWF0ZXJpYWwuICovXG5mdW5jdGlvbiBpc01hdGVyaWFsRGVjbGFyYXRpb24oZGVjbGFyYXRpb246IHRzLkltcG9ydERlY2xhcmF0aW9ufHRzLkV4cG9ydERlY2xhcmF0aW9uKSB7XG4gIGlmICghZGVjbGFyYXRpb24ubW9kdWxlU3BlY2lmaWVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbW9kdWxlU3BlY2lmaWVyID0gZGVjbGFyYXRpb24ubW9kdWxlU3BlY2lmaWVyLmdldFRleHQoKTtcbiAgcmV0dXJuIG1vZHVsZVNwZWNpZmllci5pbmRleE9mKG1hdGVyaWFsTW9kdWxlU3BlY2lmaWVyKSAhPT0gLTEgfHxcbiAgICAgIG1vZHVsZVNwZWNpZmllci5pbmRleE9mKGNka01vZHVsZVNwZWNpZmllcikgIT09IC0xO1xufVxuIl19