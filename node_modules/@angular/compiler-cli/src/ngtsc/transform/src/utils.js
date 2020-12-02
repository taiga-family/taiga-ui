(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/transform/src/utils", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    /**
     * Adds extra imports in the import manage for this source file, after the existing imports
     * and before the module body.
     * Can optionally add extra statements (e.g. new constants) before the body as well.
     */
    function addImports(importManager, sf, extraStatements) {
        if (extraStatements === void 0) { extraStatements = []; }
        // Generate the import statements to prepend.
        var addedImports = importManager.getAllImports(sf.fileName).map(function (i) {
            var qualifier = ts.createIdentifier(i.qualifier);
            var importClause = ts.createImportClause(
            /* name */ undefined, 
            /* namedBindings */ ts.createNamespaceImport(qualifier));
            return ts.createImportDeclaration(
            /* decorators */ undefined, 
            /* modifiers */ undefined, 
            /* importClause */ importClause, 
            /* moduleSpecifier */ ts.createLiteral(i.specifier));
        });
        // Filter out the existing imports and the source file body. All new statements
        // will be inserted between them.
        var existingImports = sf.statements.filter(function (stmt) { return isImportStatement(stmt); });
        var body = sf.statements.filter(function (stmt) { return !isImportStatement(stmt); });
        // Prepend imports if needed.
        if (addedImports.length > 0) {
            // If we prepend imports, we also prepend NotEmittedStatement to use it as an anchor
            // for @fileoverview Closure annotation. If there is no @fileoverview annotations, this
            // statement would be a noop.
            var fileoverviewAnchorStmt = ts.createNotEmittedStatement(sf);
            sf.statements = ts.createNodeArray(tslib_1.__spread([fileoverviewAnchorStmt], existingImports, addedImports, extraStatements, body));
        }
        return sf;
    }
    exports.addImports = addImports;
    function isImportStatement(stmt) {
        return ts.isImportDeclaration(stmt) || ts.isImportEqualsDeclaration(stmt) ||
            ts.isNamespaceImport(stmt);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3RyYW5zZm9ybS9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsK0JBQWlDO0lBSWpDOzs7O09BSUc7SUFDSCxTQUFnQixVQUFVLENBQ3RCLGFBQTRCLEVBQUUsRUFBaUIsRUFDL0MsZUFBb0M7UUFBcEMsZ0NBQUEsRUFBQSxvQkFBb0M7UUFDdEMsNkNBQTZDO1FBQzdDLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDakUsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsa0JBQWtCO1lBQ3RDLFVBQVUsQ0FBQyxTQUFTO1lBQ3BCLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELE9BQU8sRUFBRSxDQUFDLHVCQUF1QjtZQUM3QixnQkFBZ0IsQ0FBQyxTQUFTO1lBQzFCLGVBQWUsQ0FBQyxTQUFTO1lBQ3pCLGtCQUFrQixDQUFDLFlBQVk7WUFDL0IscUJBQXFCLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILCtFQUErRTtRQUMvRSxpQ0FBaUM7UUFDakMsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQzlFLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQ3BFLDZCQUE2QjtRQUM3QixJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLG9GQUFvRjtZQUNwRix1RkFBdUY7WUFDdkYsNkJBQTZCO1lBQzdCLElBQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLGVBQWUsbUJBQzdCLHNCQUFzQixHQUFLLGVBQWUsRUFBSyxZQUFZLEVBQUssZUFBZSxFQUFLLElBQUksRUFBRSxDQUFDO1NBQ2pHO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBL0JELGdDQStCQztJQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBa0I7UUFDM0MsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztZQUNyRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ltcG9ydE1hbmFnZXJ9IGZyb20gJy4uLy4uL3RyYW5zbGF0b3InO1xuXG4vKipcbiAqIEFkZHMgZXh0cmEgaW1wb3J0cyBpbiB0aGUgaW1wb3J0IG1hbmFnZSBmb3IgdGhpcyBzb3VyY2UgZmlsZSwgYWZ0ZXIgdGhlIGV4aXN0aW5nIGltcG9ydHNcbiAqIGFuZCBiZWZvcmUgdGhlIG1vZHVsZSBib2R5LlxuICogQ2FuIG9wdGlvbmFsbHkgYWRkIGV4dHJhIHN0YXRlbWVudHMgKGUuZy4gbmV3IGNvbnN0YW50cykgYmVmb3JlIHRoZSBib2R5IGFzIHdlbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbXBvcnRzKFxuICAgIGltcG9ydE1hbmFnZXI6IEltcG9ydE1hbmFnZXIsIHNmOiB0cy5Tb3VyY2VGaWxlLFxuICAgIGV4dHJhU3RhdGVtZW50czogdHMuU3RhdGVtZW50W10gPSBbXSk6IHRzLlNvdXJjZUZpbGUge1xuICAvLyBHZW5lcmF0ZSB0aGUgaW1wb3J0IHN0YXRlbWVudHMgdG8gcHJlcGVuZC5cbiAgY29uc3QgYWRkZWRJbXBvcnRzID0gaW1wb3J0TWFuYWdlci5nZXRBbGxJbXBvcnRzKHNmLmZpbGVOYW1lKS5tYXAoaSA9PiB7XG4gICAgY29uc3QgcXVhbGlmaWVyID0gdHMuY3JlYXRlSWRlbnRpZmllcihpLnF1YWxpZmllcik7XG4gICAgY29uc3QgaW1wb3J0Q2xhdXNlID0gdHMuY3JlYXRlSW1wb3J0Q2xhdXNlKFxuICAgICAgICAvKiBuYW1lICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogbmFtZWRCaW5kaW5ncyAqLyB0cy5jcmVhdGVOYW1lc3BhY2VJbXBvcnQocXVhbGlmaWVyKSk7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUltcG9ydERlY2xhcmF0aW9uKFxuICAgICAgICAvKiBkZWNvcmF0b3JzICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogaW1wb3J0Q2xhdXNlICovIGltcG9ydENsYXVzZSxcbiAgICAgICAgLyogbW9kdWxlU3BlY2lmaWVyICovIHRzLmNyZWF0ZUxpdGVyYWwoaS5zcGVjaWZpZXIpKTtcbiAgfSk7XG5cbiAgLy8gRmlsdGVyIG91dCB0aGUgZXhpc3RpbmcgaW1wb3J0cyBhbmQgdGhlIHNvdXJjZSBmaWxlIGJvZHkuIEFsbCBuZXcgc3RhdGVtZW50c1xuICAvLyB3aWxsIGJlIGluc2VydGVkIGJldHdlZW4gdGhlbS5cbiAgY29uc3QgZXhpc3RpbmdJbXBvcnRzID0gc2Yuc3RhdGVtZW50cy5maWx0ZXIoc3RtdCA9PiBpc0ltcG9ydFN0YXRlbWVudChzdG10KSk7XG4gIGNvbnN0IGJvZHkgPSBzZi5zdGF0ZW1lbnRzLmZpbHRlcihzdG10ID0+ICFpc0ltcG9ydFN0YXRlbWVudChzdG10KSk7XG4gIC8vIFByZXBlbmQgaW1wb3J0cyBpZiBuZWVkZWQuXG4gIGlmIChhZGRlZEltcG9ydHMubGVuZ3RoID4gMCkge1xuICAgIC8vIElmIHdlIHByZXBlbmQgaW1wb3J0cywgd2UgYWxzbyBwcmVwZW5kIE5vdEVtaXR0ZWRTdGF0ZW1lbnQgdG8gdXNlIGl0IGFzIGFuIGFuY2hvclxuICAgIC8vIGZvciBAZmlsZW92ZXJ2aWV3IENsb3N1cmUgYW5ub3RhdGlvbi4gSWYgdGhlcmUgaXMgbm8gQGZpbGVvdmVydmlldyBhbm5vdGF0aW9ucywgdGhpc1xuICAgIC8vIHN0YXRlbWVudCB3b3VsZCBiZSBhIG5vb3AuXG4gICAgY29uc3QgZmlsZW92ZXJ2aWV3QW5jaG9yU3RtdCA9IHRzLmNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnQoc2YpO1xuICAgIHNmLnN0YXRlbWVudHMgPSB0cy5jcmVhdGVOb2RlQXJyYXkoXG4gICAgICAgIFtmaWxlb3ZlcnZpZXdBbmNob3JTdG10LCAuLi5leGlzdGluZ0ltcG9ydHMsIC4uLmFkZGVkSW1wb3J0cywgLi4uZXh0cmFTdGF0ZW1lbnRzLCAuLi5ib2R5XSk7XG4gIH1cblxuICByZXR1cm4gc2Y7XG59XG5cbmZ1bmN0aW9uIGlzSW1wb3J0U3RhdGVtZW50KHN0bXQ6IHRzLlN0YXRlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHMuaXNJbXBvcnREZWNsYXJhdGlvbihzdG10KSB8fCB0cy5pc0ltcG9ydEVxdWFsc0RlY2xhcmF0aW9uKHN0bXQpIHx8XG4gICAgICB0cy5pc05hbWVzcGFjZUltcG9ydChzdG10KTtcbn1cbiJdfQ==