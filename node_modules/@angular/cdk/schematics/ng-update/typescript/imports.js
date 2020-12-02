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
        define("@angular/cdk/schematics/ng-update/typescript/imports", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /** Checks whether the given node is part of an import specifier node. */
    function isImportSpecifierNode(node) {
        return isPartOfKind(node, ts.SyntaxKind.ImportSpecifier);
    }
    exports.isImportSpecifierNode = isImportSpecifierNode;
    /** Checks whether the given node is part of an export specifier node. */
    function isExportSpecifierNode(node) {
        return isPartOfKind(node, ts.SyntaxKind.ExportSpecifier);
    }
    exports.isExportSpecifierNode = isExportSpecifierNode;
    /** Checks whether the given node is part of a namespace import. */
    function isNamespaceImportNode(node) {
        return isPartOfKind(node, ts.SyntaxKind.NamespaceImport);
    }
    exports.isNamespaceImportNode = isNamespaceImportNode;
    /** Finds the parent import declaration of a given TypeScript node. */
    function getImportDeclaration(node) {
        return findDeclaration(node, ts.SyntaxKind.ImportDeclaration);
    }
    exports.getImportDeclaration = getImportDeclaration;
    /** Finds the parent export declaration of a given TypeScript node */
    function getExportDeclaration(node) {
        return findDeclaration(node, ts.SyntaxKind.ExportDeclaration);
    }
    exports.getExportDeclaration = getExportDeclaration;
    /** Finds the specified declaration for the given node by walking up the TypeScript nodes. */
    function findDeclaration(node, kind) {
        while (node.kind !== kind) {
            node = node.parent;
        }
        return node;
    }
    /** Checks whether the given node is part of another TypeScript Node with the specified kind. */
    function isPartOfKind(node, kind) {
        if (node.kind === kind) {
            return true;
        }
        else if (node.kind === ts.SyntaxKind.SourceFile) {
            return false;
        }
        return isPartOfKind(node.parent, kind);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvdHlwZXNjcmlwdC9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLHlFQUF5RTtJQUN6RSxTQUFnQixxQkFBcUIsQ0FBQyxJQUFhO1FBQ2pELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFGRCxzREFFQztJQUVELHlFQUF5RTtJQUN6RSxTQUFnQixxQkFBcUIsQ0FBQyxJQUFhO1FBQ2pELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFGRCxzREFFQztJQUVELG1FQUFtRTtJQUNuRSxTQUFnQixxQkFBcUIsQ0FBQyxJQUFhO1FBQ2pELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFGRCxzREFFQztJQUVELHNFQUFzRTtJQUN0RSxTQUFnQixvQkFBb0IsQ0FBQyxJQUFhO1FBQ2hELE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUF5QixDQUFDO0lBQ3hGLENBQUM7SUFGRCxvREFFQztJQUVELHFFQUFxRTtJQUNyRSxTQUFnQixvQkFBb0IsQ0FBQyxJQUFhO1FBQ2hELE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUF5QixDQUFDO0lBQ3hGLENBQUM7SUFGRCxvREFFQztJQUVELDZGQUE2RjtJQUM3RixTQUFTLGVBQWUsQ0FBMEIsSUFBYSxFQUFFLElBQU87UUFDdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdHQUFnRztJQUNoRyxTQUFTLFlBQVksQ0FBMEIsSUFBYSxFQUFFLElBQU87UUFDbkUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbm9kZSBpcyBwYXJ0IG9mIGFuIGltcG9ydCBzcGVjaWZpZXIgbm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ltcG9ydFNwZWNpZmllck5vZGUobm9kZTogdHMuTm9kZSkge1xuICByZXR1cm4gaXNQYXJ0T2ZLaW5kKG5vZGUsIHRzLlN5bnRheEtpbmQuSW1wb3J0U3BlY2lmaWVyKTtcbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBub2RlIGlzIHBhcnQgb2YgYW4gZXhwb3J0IHNwZWNpZmllciBub2RlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwb3J0U3BlY2lmaWVyTm9kZShub2RlOiB0cy5Ob2RlKSB7XG4gIHJldHVybiBpc1BhcnRPZktpbmQobm9kZSwgdHMuU3ludGF4S2luZC5FeHBvcnRTcGVjaWZpZXIpO1xufVxuXG4vKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG5vZGUgaXMgcGFydCBvZiBhIG5hbWVzcGFjZSBpbXBvcnQuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lc3BhY2VJbXBvcnROb2RlKG5vZGU6IHRzLk5vZGUpIHtcbiAgcmV0dXJuIGlzUGFydE9mS2luZChub2RlLCB0cy5TeW50YXhLaW5kLk5hbWVzcGFjZUltcG9ydCk7XG59XG5cbi8qKiBGaW5kcyB0aGUgcGFyZW50IGltcG9ydCBkZWNsYXJhdGlvbiBvZiBhIGdpdmVuIFR5cGVTY3JpcHQgbm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiB0cy5Ob2RlKSB7XG4gIHJldHVybiBmaW5kRGVjbGFyYXRpb24obm9kZSwgdHMuU3ludGF4S2luZC5JbXBvcnREZWNsYXJhdGlvbikgYXMgdHMuSW1wb3J0RGVjbGFyYXRpb247XG59XG5cbi8qKiBGaW5kcyB0aGUgcGFyZW50IGV4cG9ydCBkZWNsYXJhdGlvbiBvZiBhIGdpdmVuIFR5cGVTY3JpcHQgbm9kZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cG9ydERlY2xhcmF0aW9uKG5vZGU6IHRzLk5vZGUpIHtcbiAgcmV0dXJuIGZpbmREZWNsYXJhdGlvbihub2RlLCB0cy5TeW50YXhLaW5kLkV4cG9ydERlY2xhcmF0aW9uKSBhcyB0cy5FeHBvcnREZWNsYXJhdGlvbjtcbn1cblxuLyoqIEZpbmRzIHRoZSBzcGVjaWZpZWQgZGVjbGFyYXRpb24gZm9yIHRoZSBnaXZlbiBub2RlIGJ5IHdhbGtpbmcgdXAgdGhlIFR5cGVTY3JpcHQgbm9kZXMuICovXG5mdW5jdGlvbiBmaW5kRGVjbGFyYXRpb248VCBleHRlbmRzIHRzLlN5bnRheEtpbmQ+KG5vZGU6IHRzLk5vZGUsIGtpbmQ6IFQpIHtcbiAgd2hpbGUgKG5vZGUua2luZCAhPT0ga2luZCkge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG5vZGUgaXMgcGFydCBvZiBhbm90aGVyIFR5cGVTY3JpcHQgTm9kZSB3aXRoIHRoZSBzcGVjaWZpZWQga2luZC4gKi9cbmZ1bmN0aW9uIGlzUGFydE9mS2luZDxUIGV4dGVuZHMgdHMuU3ludGF4S2luZD4obm9kZTogdHMuTm9kZSwga2luZDogVCk6IGJvb2xlYW4ge1xuICBpZiAobm9kZS5raW5kID09PSBraW5kKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSB0cy5TeW50YXhLaW5kLlNvdXJjZUZpbGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNQYXJ0T2ZLaW5kKG5vZGUucGFyZW50LCBraW5kKTtcbn1cbiJdfQ==