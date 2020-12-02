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
        define("@angular/core/schematics/migrations/renderer-to-renderer2/util", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /**
     * Finds typed nodes (e.g. function parameters or class properties) that are referencing the old
     * `Renderer`, as well as calls to the `Renderer` methods.
     */
    function findRendererReferences(sourceFile, typeChecker, rendererImport) {
        const typedNodes = new Set();
        const methodCalls = new Set();
        const forwardRefs = new Set();
        const importSpecifier = findImportSpecifier(rendererImport.elements, 'Renderer');
        const forwardRefImport = findCoreImport(sourceFile, 'forwardRef');
        const forwardRefSpecifier = forwardRefImport ? findImportSpecifier(forwardRefImport.elements, 'forwardRef') : null;
        ts.forEachChild(sourceFile, function visitNode(node) {
            if ((ts.isParameter(node) || ts.isPropertyDeclaration(node)) &&
                isReferenceToImport(typeChecker, node.name, importSpecifier)) {
                typedNodes.add(node);
            }
            else if (ts.isAsExpression(node) && isReferenceToImport(typeChecker, node.type, importSpecifier)) {
                typedNodes.add(node);
            }
            else if (ts.isCallExpression(node)) {
                if (ts.isPropertyAccessExpression(node.expression) &&
                    isReferenceToImport(typeChecker, node.expression.expression, importSpecifier)) {
                    methodCalls.add(node);
                }
                else if (
                // If we're dealing with a forwardRef that's returning a Renderer.
                forwardRefSpecifier && ts.isIdentifier(node.expression) &&
                    isReferenceToImport(typeChecker, node.expression, forwardRefSpecifier) &&
                    node.arguments.length) {
                    const rendererIdentifier = findRendererIdentifierInForwardRef(typeChecker, node, importSpecifier);
                    if (rendererIdentifier) {
                        forwardRefs.add(rendererIdentifier);
                    }
                }
            }
            ts.forEachChild(node, visitNode);
        });
        return { typedNodes, methodCalls, forwardRefs };
    }
    exports.findRendererReferences = findRendererReferences;
    /** Finds the import from @angular/core that has a symbol with a particular name. */
    function findCoreImport(sourceFile, symbolName) {
        // Only look through the top-level imports.
        for (const node of sourceFile.statements) {
            if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier) ||
                node.moduleSpecifier.text !== '@angular/core') {
                continue;
            }
            const namedBindings = node.importClause && node.importClause.namedBindings;
            if (!namedBindings || !ts.isNamedImports(namedBindings)) {
                continue;
            }
            if (findImportSpecifier(namedBindings.elements, symbolName)) {
                return namedBindings;
            }
        }
        return null;
    }
    exports.findCoreImport = findCoreImport;
    /** Finds an import specifier with a particular name, accounting for aliases. */
    function findImportSpecifier(elements, importName) {
        return elements.find(element => {
            const { name, propertyName } = element;
            return propertyName ? propertyName.text === importName : name.text === importName;
        }) ||
            null;
    }
    exports.findImportSpecifier = findImportSpecifier;
    /** Checks whether a node is referring to an import spcifier. */
    function isReferenceToImport(typeChecker, node, importSpecifier) {
        if (importSpecifier) {
            const nodeSymbol = typeChecker.getTypeAtLocation(node).getSymbol();
            const importSymbol = typeChecker.getTypeAtLocation(importSpecifier).getSymbol();
            return !!(nodeSymbol && importSymbol) &&
                nodeSymbol.valueDeclaration === importSymbol.valueDeclaration;
        }
        return false;
    }
    /** Finds the identifier referring to the `Renderer` inside a `forwardRef` call expression. */
    function findRendererIdentifierInForwardRef(typeChecker, node, rendererImport) {
        const firstArg = node.arguments[0];
        if (ts.isArrowFunction(firstArg)) {
            // Check if the function is `forwardRef(() => Renderer)`.
            if (ts.isIdentifier(firstArg.body) &&
                isReferenceToImport(typeChecker, firstArg.body, rendererImport)) {
                return firstArg.body;
            }
            else if (ts.isBlock(firstArg.body) && ts.isReturnStatement(firstArg.body.statements[0])) {
                // Otherwise check if the expression is `forwardRef(() => { return Renderer })`.
                const returnStatement = firstArg.body.statements[0];
                if (returnStatement.expression && ts.isIdentifier(returnStatement.expression) &&
                    isReferenceToImport(typeChecker, returnStatement.expression, rendererImport)) {
                    return returnStatement.expression;
                }
            }
        }
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc2NoZW1hdGljcy9taWdyYXRpb25zL3JlbmRlcmVyLXRvLXJlbmRlcmVyMi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDOzs7T0FHRztJQUNILFNBQWdCLHNCQUFzQixDQUNsQyxVQUF5QixFQUFFLFdBQTJCLEVBQUUsY0FBK0I7UUFDekYsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQWtFLENBQUM7UUFDN0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7UUFDakQsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7UUFDN0MsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNqRixNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbEUsTUFBTSxtQkFBbUIsR0FDckIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTNGLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsU0FBUyxDQUFDLElBQWE7WUFDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDaEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0Qjtp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LG1CQUFtQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxFQUFFO29CQUNoRixPQUFPLGVBQWUsQ0FBQyxVQUFVLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKlxuICogRmluZHMgdHlwZWQgbm9kZXMgKGUuZy4gZnVuY3Rpb24gcGFyYW1ldGVycyBvciBjbGFzcyBwcm9wZXJ0aWVzKSB0aGF0IGFyZSByZWZlcmVuY2luZyB0aGUgb2xkXG4gKiBgUmVuZGVyZXJgLCBhcyB3ZWxsIGFzIGNhbGxzIHRvIHRoZSBgUmVuZGVyZXJgIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUmVuZGVyZXJSZWZlcmVuY2VzKFxuICAgIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgcmVuZGVyZXJJbXBvcnQ6IHRzLk5hbWVkSW1wb3J0cykge1xuICBjb25zdCB0eXBlZE5vZGVzID0gbmV3IFNldDx0cy5QYXJhbWV0ZXJEZWNsYXJhdGlvbnx0cy5Qcm9wZXJ0eURlY2xhcmF0aW9ufHRzLkFzRXhwcmVzc2lvbj4oKTtcbiAgY29uc3QgbWV0aG9kQ2FsbHMgPSBuZXcgU2V0PHRzLkNhbGxFeHByZXNzaW9uPigpO1xuICBjb25zdCBmb3J3YXJkUmVmcyA9IG5ldyBTZXQ8dHMuSWRlbnRpZmllcj4oKTtcbiAgY29uc3QgaW1wb3J0U3BlY2lmaWVyID0gZmluZEltcG9ydFNwZWNpZmllcihyZW5kZXJlckltcG9ydC5lbGVtZW50cywgJ1JlbmRlcmVyJyk7XG4gIGNvbnN0IGZvcndhcmRSZWZJbXBvcnQgPSBmaW5kQ29yZUltcG9ydChzb3VyY2VGaWxlLCAnZm9yd2FyZFJlZicpO1xuICBjb25zdCBmb3J3YXJkUmVmU3BlY2lmaWVyID1cbiAgICAgIGZvcndhcmRSZWZJbXBvcnQgPyBmaW5kSW1wb3J0U3BlY2lmaWVyKGZvcndhcmRSZWZJbXBvcnQuZWxlbWVudHMsICdmb3J3YXJkUmVmJykgOiBudWxsO1xuXG4gIHRzLmZvckVhY2hDaGlsZChzb3VyY2VGaWxlLCBmdW5jdGlvbiB2aXNpdE5vZGUobm9kZTogdHMuTm9kZSkge1xuICAgIGlmICgodHMuaXNQYXJhbWV0ZXIobm9kZSkgfHwgdHMuaXNQcm9wZXJ0eURlY2xhcmF0aW9uKG5vZGUpKSAmJlxuICAgICAgICBpc1JlZmVyZW5jZVRvSW1wb3J0KHR5cGVDaGVja2VyLCBub2RlLm5hbWUsIGltcG9ydFNwZWNpZmllcikpIHtcbiAgICAgIHR5cGVkTm9kZXMuYWRkKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRzLmlzQXNFeHByZXNzaW9uKG5vZGUpICYmIGlzUmVmZXJlbmNlVG9JbXBvcnQodHlwZUNoZWNrZXIsIG5vZGUudHlwZSwgaW1wb3J0U3BlY2lmaWVyKSkge1xuICAgICAgdHlwZWROb2Rlcy5hZGQobm9kZSk7XG4gICAgfSBlbHNlIGlmICh0cy5pc0NhbGxFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICBpZiAodHMuaXNQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZS5leHByZXNzaW9uKSAmJlxuICAgICAgICAgIGlzUmVmZXJlbmNlVG9JbXBvcnQodHlwZUNoZWNrZXIsIG5vZGUuZXhwcmVzc2lvbi5leHByZXNzaW9uLCBpbXBvcnRTcGVjaWZpZXIpKSB7XG4gICAgICAgIG1ldGhvZENhbGxzLmFkZChub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgLy8gSWYgd2UncmUgZGVhbGluZyB3aXRoIGEgZm9yd2FyZFJlZiB0aGF0J3MgcmV0dXJuaW5nIGEgUmVuZGVyZXIuXG4gICAgICAgICAgZm9yd2FyZFJlZlNwZWNpZmllciAmJiB0cy5pc0lkZW50aWZpZXIobm9kZS5leHByZXNzaW9uKSAmJlxuICAgICAgICAgIGlzUmVmZXJlbmNlVG9JbXBvcnQodHlwZUNoZWNrZXIsIG5vZGUuZXhwcmVzc2lvbiwgZm9yd2FyZFJlZlNwZWNpZmllcikgJiZcbiAgICAgICAgICBub2RlLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXJJZGVudGlmaWVyID1cbiAgICAgICAgICAgIGZpbmRSZW5kZXJlcklkZW50aWZpZXJJbkZvcndhcmRSZWYodHlwZUNoZWNrZXIsIG5vZGUsIGltcG9ydFNwZWNpZmllcik7XG4gICAgICAgIGlmIChyZW5kZXJlcklkZW50aWZpZXIpIHtcbiAgICAgICAgICBmb3J3YXJkUmVmcy5hZGQocmVuZGVyZXJJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRzLmZvckVhY2hDaGlsZChub2RlLCB2aXNpdE5vZGUpO1xuICB9KTtcblxuICByZXR1cm4ge3R5cGVkTm9kZXMsIG1ldGhvZENhbGxzLCBmb3J3YXJkUmVmc307XG59XG5cbi8qKiBGaW5kcyB0aGUgaW1wb3J0IGZyb20gQGFuZ3VsYXIvY29yZSB0aGF0IGhhcyBhIHN5bWJvbCB3aXRoIGEgcGFydGljdWxhciBuYW1lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb3JlSW1wb3J0KHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIHN5bWJvbE5hbWU6IHN0cmluZyk6IHRzLk5hbWVkSW1wb3J0c3xcbiAgICBudWxsIHtcbiAgLy8gT25seSBsb29rIHRocm91Z2ggdGhlIHRvcC1sZXZlbCBpbXBvcnRzLlxuICBmb3IgKGNvbnN0IG5vZGUgb2Ygc291cmNlRmlsZS5zdGF0ZW1lbnRzKSB7XG4gICAgaWYgKCF0cy5pc0ltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHx8ICF0cy5pc1N0cmluZ0xpdGVyYWwobm9kZS5tb2R1bGVTcGVjaWZpZXIpIHx8XG4gICAgICAgIG5vZGUubW9kdWxlU3BlY2lmaWVyLnRleHQgIT09ICdAYW5ndWxhci9jb3JlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZWRCaW5kaW5ncyA9IG5vZGUuaW1wb3J0Q2xhdXNlICYmIG5vZGUuaW1wb3J0Q2xhdXNlLm5hbWVkQmluZGluZ3M7XG5cbiAgICBpZiAoIW5hbWVkQmluZGluZ3MgfHwgIXRzLmlzTmFtZWRJbXBvcnRzKG5hbWVkQmluZGluZ3MpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoZmluZEltcG9ydFNwZWNpZmllcihuYW1lZEJpbmRpbmdzLmVsZW1lbnRzLCBzeW1ib2xOYW1lKSkge1xuICAgICAgcmV0dXJuIG5hbWVkQmluZGluZ3M7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKiBGaW5kcyBhbiBpbXBvcnQgc3BlY2lmaWVyIHdpdGggYSBwYXJ0aWN1bGFyIG5hbWUsIGFjY291bnRpbmcgZm9yIGFsaWFzZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEltcG9ydFNwZWNpZmllcihcbiAgICBlbGVtZW50czogdHMuTm9kZUFycmF5PHRzLkltcG9ydFNwZWNpZmllcj4sIGltcG9ydE5hbWU6IHN0cmluZykge1xuICByZXR1cm4gZWxlbWVudHMuZmluZChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB7bmFtZSwgcHJvcGVydHlOYW1lfSA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZSA/IHByb3BlcnR5TmFtZS50ZXh0ID09PSBpbXBvcnROYW1lIDogbmFtZS50ZXh0ID09PSBpbXBvcnROYW1lO1xuICB9KSB8fFxuICAgICAgbnVsbDtcbn1cblxuLyoqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBpcyByZWZlcnJpbmcgdG8gYW4gaW1wb3J0IHNwY2lmaWVyLiAqL1xuZnVuY3Rpb24gaXNSZWZlcmVuY2VUb0ltcG9ydChcbiAgICB0eXBlQ2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIG5vZGU6IHRzLk5vZGUsIGltcG9ydFNwZWNpZmllcjogdHMuSW1wb3J0U3BlY2lmaWVyfG51bGwpOiBib29sZWFuIHtcbiAgaWYgKGltcG9ydFNwZWNpZmllcikge1xuICAgIGNvbnN0IG5vZGVTeW1ib2wgPSB0eXBlQ2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihub2RlKS5nZXRTeW1ib2woKTtcbiAgICBjb25zdCBpbXBvcnRTeW1ib2wgPSB0eXBlQ2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihpbXBvcnRTcGVjaWZpZXIpLmdldFN5bWJvbCgpO1xuICAgIHJldHVybiAhIShub2RlU3ltYm9sICYmIGltcG9ydFN5bWJvbCkgJiZcbiAgICAgICAgbm9kZVN5bWJvbC52YWx1ZURlY2xhcmF0aW9uID09PSBpbXBvcnRTeW1ib2wudmFsdWVEZWNsYXJhdGlvbjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBGaW5kcyB0aGUgaWRlbnRpZmllciByZWZlcnJpbmcgdG8gdGhlIGBSZW5kZXJlcmAgaW5zaWRlIGEgYGZvcndhcmRSZWZgIGNhbGwgZXhwcmVzc2lvbi4gKi9cbmZ1bmN0aW9uIGZpbmRSZW5kZXJlcklkZW50aWZpZXJJbkZvcndhcmRSZWYoXG4gICAgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBub2RlOiB0cy5DYWxsRXhwcmVzc2lvbixcbiAgICByZW5kZXJlckltcG9ydDogdHMuSW1wb3J0U3BlY2lmaWVyfG51bGwpOiB0cy5JZGVudGlmaWVyfG51bGwge1xuICBjb25zdCBmaXJzdEFyZyA9IG5vZGUuYXJndW1lbnRzWzBdO1xuXG4gIGlmICh0cy5pc0Fycm93RnVuY3Rpb24oZmlyc3RBcmcpKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGZ1bmN0aW9uIGlzIGBmb3J3YXJkUmVmKCgpID0+IFJlbmRlcmVyKWAuXG4gICAgaWYgKHRzLmlzSWRlbnRpZmllcihmaXJzdEFyZy5ib2R5KSAmJlxuICAgICAgICBpc1JlZmVyZW5jZVRvSW1wb3J0KHR5cGVDaGVja2VyLCBmaXJzdEFyZy5ib2R5LCByZW5kZXJlckltcG9ydCkpIHtcbiAgICAgIHJldHVybiBmaXJzdEFyZy5ib2R5O1xuICAgIH0gZWxzZSBpZiAodHMuaXNCbG9jayhmaXJzdEFyZy5ib2R5KSAmJiB0cy5pc1JldHVyblN0YXRlbWVudChmaXJzdEFyZy5ib2R5LnN0YXRlbWVudHNbMF0pKSB7XG4gICAgICAvLyBPdGhlcndpc2UgY2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYGZvcndhcmRSZWYoKCkgPT4geyByZXR1cm4gUmVuZGVyZXIgfSlgLlxuICAgICAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gZmlyc3RBcmcuYm9keS5zdGF0ZW1lbnRzWzBdIGFzIHRzLlJldHVyblN0YXRlbWVudDtcblxuICAgICAgaWYgKHJldHVyblN0YXRlbWVudC5leHByZXNzaW9uICYmIHRzLmlzSWRlbnRpZmllcihyZXR1cm5TdGF0ZW1lbnQuZXhwcmVzc2lvbikgJiZcbiAgICAgICAgICBpc1JlZmVyZW5jZVRvSW1wb3J0KHR5cGVDaGVja2VyLCByZXR1cm5TdGF0ZW1lbnQuZXhwcmVzc2lvbiwgcmVuZGVyZXJJbXBvcnQpKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5TdGF0ZW1lbnQuZXhwcmVzc2lvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==