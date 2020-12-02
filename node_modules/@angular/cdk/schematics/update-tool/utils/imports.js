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
        define("@angular/cdk/schematics/update-tool/utils/imports", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    /** Resolves the import of the specified identifier. */
    function getImportOfIdentifier(node, typeChecker) {
        // Free standing identifiers which resolve to an import will be handled
        // as direct imports. e.g. "@Component()" where "Component" is an identifier
        // referring to an import specifier.
        const directImport = getSpecificImportOfIdentifier(node, typeChecker);
        if (directImport !== null) {
            return directImport;
        }
        else if (ts.isQualifiedName(node.parent) && node.parent.right === node) {
            // Determines the import of a qualified name. e.g. "let t: core.Component". In that
            // case, the import of the most left identifier will be determined ("core").
            const qualifierRoot = getQualifiedNameRoot(node.parent);
            if (qualifierRoot) {
                const moduleName = getImportOfNamespacedIdentifier(qualifierRoot, typeChecker);
                if (moduleName) {
                    return { moduleName, symbolName: node.text };
                }
            }
        }
        else if (ts.isPropertyAccessExpression(node.parent) && node.parent.name === node) {
            // Determines the import of a property expression. e.g. "@core.Component". In that
            // case, the import of the most left identifier will be determined ("core").
            const rootIdentifier = getPropertyAccessRoot(node.parent);
            if (rootIdentifier) {
                const moduleName = getImportOfNamespacedIdentifier(rootIdentifier, typeChecker);
                if (moduleName) {
                    return { moduleName, symbolName: node.text };
                }
            }
        }
        return null;
    }
    exports.getImportOfIdentifier = getImportOfIdentifier;
    /**
     * Resolves the import of the specified identifier. Expects the identifier to resolve
     * to a fine-grained import declaration with import specifiers.
     */
    function getSpecificImportOfIdentifier(node, typeChecker) {
        const symbol = typeChecker.getSymbolAtLocation(node);
        if (!symbol || !symbol.declarations || !symbol.declarations.length) {
            return null;
        }
        const declaration = symbol.declarations[0];
        if (!ts.isImportSpecifier(declaration)) {
            return null;
        }
        // Since the declaration is an import specifier, we can walk up three times to get a reference
        // to the import declaration node (NamedImports -> ImportClause -> ImportDeclaration).
        const importDecl = declaration.parent.parent.parent;
        if (!ts.isStringLiteral(importDecl.moduleSpecifier)) {
            return null;
        }
        return {
            moduleName: importDecl.moduleSpecifier.text,
            symbolName: declaration.propertyName ? declaration.propertyName.text : declaration.name.text
        };
    }
    /**
     * Resolves the import of the specified identifier. Expects the identifier to
     * resolve to a namespaced import declaration. e.g. "import * as core from ...".
     */
    function getImportOfNamespacedIdentifier(node, typeChecker) {
        const symbol = typeChecker.getSymbolAtLocation(node);
        if (!symbol || !symbol.declarations || !symbol.declarations.length) {
            return null;
        }
        const declaration = symbol.declarations[0];
        if (!ts.isNamespaceImport(declaration)) {
            return null;
        }
        // Since the declaration is a namespace import, we can walk up three times to get a reference
        // to the import declaration node (NamespaceImport -> ImportClause -> ImportDeclaration).
        const importDecl = declaration.parent.parent;
        if (!ts.isStringLiteral(importDecl.moduleSpecifier)) {
            return null;
        }
        return importDecl.moduleSpecifier.text;
    }
    /**
     * Gets the root identifier of a qualified type chain. For example: "core.GestureConfig"
     * will return the "core" identifier. Allowing us to find the import of "core".
     */
    function getQualifiedNameRoot(name) {
        while (ts.isQualifiedName(name.left)) {
            name = name.left;
        }
        return ts.isIdentifier(name.left) ? name.left : null;
    }
    /**
     * Gets the root identifier of a property access chain. For example: "core.GestureConfig"
     * will return the "core" identifier. Allowing us to find the import of "core".
     */
    function getPropertyAccessRoot(node) {
        while (ts.isPropertyAccessExpression(node.expression)) {
            node = node.expression;
        }
        return ts.isIdentifier(node.expression) ? node.expression : null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91cGRhdGUtdG9vbC91dGlscy9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBV2pDLHVEQUF1RDtJQUN2RCxTQUFnQixxQkFBcUIsQ0FBQyxJQUFtQixFQUFFLFdBQTJCO1FBRXBGLHVFQUF1RTtRQUN2RSw0RUFBNEU7UUFDNUUsb0NBQW9DO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLDZCQUE2QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RSxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN4RSxtRkFBbUY7WUFDbkYsNEVBQTRFO1lBQzVFLE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsTUFBTSxVQUFVLEdBQUcsK0JBQStCLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLFVBQVUsRUFBRTtvQkFDZCxPQUFPLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7aUJBQzVDO2FBQ0Y7U0FDRjthQUFNLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDbEYsa0ZBQWtGO1lBQ2xGLDRFQUE0RTtZQUM1RSxNQUFNLGNB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O0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxxQkFBcUIsQ0FBQyxJQUFpQztRQUM5RCxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckQsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqIEludGVyZmFjZSBkZXNjcmliaW5nIGEgcmVzb2x2ZWQgaW1wb3J0LiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbXBvcnQge1xuICAvKiogTmFtZSBvZiB0aGUgaW1wb3J0ZWQgc3ltYm9sLiAqL1xuICBzeW1ib2xOYW1lOiBzdHJpbmc7XG4gIC8qKiBNb2R1bGUgbmFtZSBmcm9tIHdoaWNoIHRoZSBzeW1ib2wgaGFzIGJlZW4gaW1wb3J0ZWQuICovXG4gIG1vZHVsZU5hbWU6IHN0cmluZztcbn1cblxuXG4vKiogUmVzb2x2ZXMgdGhlIGltcG9ydCBvZiB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1wb3J0T2ZJZGVudGlmaWVyKG5vZGU6IHRzLklkZW50aWZpZXIsIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IEltcG9ydHxcbiAgICBudWxsIHtcbiAgLy8gRnJlZSBzdGFuZGluZyBpZGVudGlmaWVycyB3aGljaCByZXNvbHZlIHRvIGFuIGltcG9ydCB3aWxsIGJlIGhhbmRsZWRcbiAgLy8gYXMgZGlyZWN0IGltcG9ydHMuIGUuZy4gXCJAQ29tcG9uZW50KClcIiB3aGVyZSBcIkNvbXBvbmVudFwiIGlzIGFuIGlkZW50aWZpZXJcbiAgLy8gcmVmZXJyaW5nIHRvIGFuIGltcG9ydCBzcGVjaWZpZXIuXG4gIGNvbnN0IGRpcmVjdEltcG9ydCA9IGdldFNwZWNpZmljSW1wb3J0T2ZJZGVudGlmaWVyKG5vZGUsIHR5cGVDaGVja2VyKTtcbiAgaWYgKGRpcmVjdEltcG9ydCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBkaXJlY3RJbXBvcnQ7XG4gIH0gZWxzZSBpZiAodHMuaXNRdWFsaWZpZWROYW1lKG5vZGUucGFyZW50KSAmJiBub2RlLnBhcmVudC5yaWdodCA9PT0gbm9kZSkge1xuICAgIC8vIERldGVybWluZXMgdGhlIGltcG9ydCBvZiBhIHF1YWxpZmllZCBuYW1lLiBlLmcuIFwibGV0IHQ6IGNvcmUuQ29tcG9uZW50XCIuIEluIHRoYXRcbiAgICAvLyBjYXNlLCB0aGUgaW1wb3J0IG9mIHRoZSBtb3N0IGxlZnQgaWRlbnRpZmllciB3aWxsIGJlIGRldGVybWluZWQgKFwiY29yZVwiKS5cbiAgICBjb25zdCBxdWFsaWZpZXJSb290ID0gZ2V0UXVhbGlmaWVkTmFtZVJvb3Qobm9kZS5wYXJlbnQpO1xuICAgIGlmIChxdWFsaWZpZXJSb290KSB7XG4gICAgICBjb25zdCBtb2R1bGVOYW1lID0gZ2V0SW1wb3J0T2ZOYW1lc3BhY2VkSWRlbnRpZmllcihxdWFsaWZpZXJSb290LCB0eXBlQ2hlY2tlcik7XG4gICAgICBpZiAobW9kdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4ge21vZHVsZU5hbWUsIHN5bWJvbE5hbWU6IG5vZGUudGV4dH07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHRzLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGUucGFyZW50KSAmJiBub2RlLnBhcmVudC5uYW1lID09PSBub2RlKSB7XG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaW1wb3J0IG9mIGEgcHJvcGVydHkgZXhwcmVzc2lvbi4gZS5nLiBcIkBjb3JlLkNvbXBvbmVudFwiLiBJbiB0aGF0XG4gICAgLy8gY2FzZSwgdGhlIGltcG9ydCBvZiB0aGUgbW9zdCBsZWZ0IGlkZW50aWZpZXIgd2lsbCBiZSBkZXRlcm1pbmVkIChcImNvcmVcIikuXG4gICAgY29uc3Qgcm9vdElkZW50aWZpZXIgPSBnZXRQcm9wZXJ0eUFjY2Vzc1Jvb3Qobm9kZS5wYXJlbnQpO1xuICAgIGlmIChyb290SWRlbnRpZmllcikge1xuICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGdldEltcG9ydE9mTmFtZXNwYWNlZElkZW50aWZpZXIocm9vdElkZW50aWZpZXIsIHR5cGVDaGVja2VyKTtcbiAgICAgIGlmIChtb2R1bGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB7bW9kdWxlTmFtZSwgc3ltYm9sTmFtZTogbm9kZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGltcG9ydCBvZiB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIuIEV4cGVjdHMgdGhlIGlkZW50aWZpZXIgdG8gcmVzb2x2ZVxuICogdG8gYSBmaW5lLWdyYWluZWQgaW1wb3J0IGRlY2xhcmF0aW9uIHdpdGggaW1wb3J0IHNwZWNpZmllcnMuXG4gKi9cbmZ1bmN0aW9uIGdldFNwZWNpZmljSW1wb3J0T2ZJZGVudGlmaWVyKG5vZGU6IHRzLklkZW50aWZpZXIsIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IEltcG9ydHxcbiAgICBudWxsIHtcbiAgY29uc3Qgc3ltYm9sID0gdHlwZUNoZWNrZXIuZ2V0U3ltYm9sQXRMb2NhdGlvbihub2RlKTtcbiAgaWYgKCFzeW1ib2wgfHwgIXN5bWJvbC5kZWNsYXJhdGlvbnMgfHwgIXN5bWJvbC5kZWNsYXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZGVjbGFyYXRpb24gPSBzeW1ib2wuZGVjbGFyYXRpb25zWzBdO1xuICBpZiAoIXRzLmlzSW1wb3J0U3BlY2lmaWVyKGRlY2xhcmF0aW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFNpbmNlIHRoZSBkZWNsYXJhdGlvbiBpcyBhbiBpbXBvcnQgc3BlY2lmaWVyLCB3ZSBjYW4gd2FsayB1cCB0aHJlZSB0aW1lcyB0byBnZXQgYSByZWZlcmVuY2VcbiAgLy8gdG8gdGhlIGltcG9ydCBkZWNsYXJhdGlvbiBub2RlIChOYW1lZEltcG9ydHMgLT4gSW1wb3J0Q2xhdXNlIC0+IEltcG9ydERlY2xhcmF0aW9uKS5cbiAgY29uc3QgaW1wb3J0RGVjbCA9IGRlY2xhcmF0aW9uLnBhcmVudC5wYXJlbnQucGFyZW50O1xuICBpZiAoIXRzLmlzU3RyaW5nTGl0ZXJhbChpbXBvcnREZWNsLm1vZHVsZVNwZWNpZmllcikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vZHVsZU5hbWU6IGltcG9ydERlY2wubW9kdWxlU3BlY2lmaWVyLnRleHQsXG4gICAgc3ltYm9sTmFtZTogZGVjbGFyYXRpb24ucHJvcGVydHlOYW1lID8gZGVjbGFyYXRpb24ucHJvcGVydHlOYW1lLnRleHQgOiBkZWNsYXJhdGlvbi5uYW1lLnRleHRcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgaW1wb3J0IG9mIHRoZSBzcGVjaWZpZWQgaWRlbnRpZmllci4gRXhwZWN0cyB0aGUgaWRlbnRpZmllciB0b1xuICogcmVzb2x2ZSB0byBhIG5hbWVzcGFjZWQgaW1wb3J0IGRlY2xhcmF0aW9uLiBlLmcuIFwiaW1wb3J0ICogYXMgY29yZSBmcm9tIC4uLlwiLlxuICovXG5mdW5jdGlvbiBnZXRJbXBvcnRPZk5hbWVzcGFjZWRJZGVudGlmaWVyKG5vZGU6IHRzLklkZW50aWZpZXIsIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IHN0cmluZ3xcbiAgICBudWxsIHtcbiAgY29uc3Qgc3ltYm9sID0gdHlwZUNoZWNrZXIuZ2V0U3ltYm9sQXRMb2NhdGlvbihub2RlKTtcbiAgaWYgKCFzeW1ib2wgfHwgIXN5bWJvbC5kZWNsYXJhdGlvbnMgfHwgIXN5bWJvbC5kZWNsYXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZGVjbGFyYXRpb24gPSBzeW1ib2wuZGVjbGFyYXRpb25zWzBdO1xuICBpZiAoIXRzLmlzTmFtZXNwYWNlSW1wb3J0KGRlY2xhcmF0aW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFNpbmNlIHRoZSBkZWNsYXJhdGlvbiBpcyBhIG5hbWVzcGFjZSBpbXBvcnQsIHdlIGNhbiB3YWxrIHVwIHRocmVlIHRpbWVzIHRvIGdldCBhIHJlZmVyZW5jZVxuICAvLyB0byB0aGUgaW1wb3J0IGRlY2xhcmF0aW9uIG5vZGUgKE5hbWVzcGFjZUltcG9ydCAtPiBJbXBvcnRDbGF1c2UgLT4gSW1wb3J0RGVjbGFyYXRpb24pLlxuICBjb25zdCBpbXBvcnREZWNsID0gZGVjbGFyYXRpb24ucGFyZW50LnBhcmVudDtcbiAgaWYgKCF0cy5pc1N0cmluZ0xpdGVyYWwoaW1wb3J0RGVjbC5tb2R1bGVTcGVjaWZpZXIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gaW1wb3J0RGVjbC5tb2R1bGVTcGVjaWZpZXIudGV4dDtcbn1cblxuXG4vKipcbiAqIEdldHMgdGhlIHJvb3QgaWRlbnRpZmllciBvZiBhIHF1YWxpZmllZCB0eXBlIGNoYWluLiBGb3IgZXhhbXBsZTogXCJjb3JlLkdlc3R1cmVDb25maWdcIlxuICogd2lsbCByZXR1cm4gdGhlIFwiY29yZVwiIGlkZW50aWZpZXIuIEFsbG93aW5nIHVzIHRvIGZpbmQgdGhlIGltcG9ydCBvZiBcImNvcmVcIi5cbiAqL1xuZnVuY3Rpb24gZ2V0UXVhbGlmaWVkTmFtZVJvb3QobmFtZTogdHMuUXVhbGlmaWVkTmFtZSk6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gIHdoaWxlICh0cy5pc1F1YWxpZmllZE5hbWUobmFtZS5sZWZ0KSkge1xuICAgIG5hbWUgPSBuYW1lLmxlZnQ7XG4gIH1cbiAgcmV0dXJuIHRzLmlzSWRlbnRpZmllcihuYW1lLmxlZnQpID8gbmFtZS5sZWZ0IDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSByb290IGlkZW50aWZpZXIgb2YgYSBwcm9wZXJ0eSBhY2Nlc3MgY2hhaW4uIEZvciBleGFtcGxlOiBcImNvcmUuR2VzdHVyZUNvbmZpZ1wiXG4gKiB3aWxsIHJldHVybiB0aGUgXCJjb3JlXCIgaWRlbnRpZmllci4gQWxsb3dpbmcgdXMgdG8gZmluZCB0aGUgaW1wb3J0IG9mIFwiY29yZVwiLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUFjY2Vzc1Jvb3Qobm9kZTogdHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdHMuSWRlbnRpZmllcnxudWxsIHtcbiAgd2hpbGUgKHRzLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGUuZXhwcmVzc2lvbikpIHtcbiAgICBub2RlID0gbm9kZS5leHByZXNzaW9uO1xuICB9XG4gIHJldHVybiB0cy5pc0lkZW50aWZpZXIobm9kZS5leHByZXNzaW9uKSA/IG5vZGUuZXhwcmVzc2lvbiA6IG51bGw7XG59XG4iXX0=