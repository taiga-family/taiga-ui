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
        define("@angular/compiler-cli/src/ngtsc/reflection/src/type_to_value", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    /**
     * Potentially convert a `ts.TypeNode` to a `TypeValueReference`, which indicates how to use the
     * type given in the `ts.TypeNode` in a value position.
     *
     * This can return `null` if the `typeNode` is `null`, if it does not refer to a symbol with a value
     * declaration, or if it is not possible to statically understand.
     */
    function typeToValue(typeNode, checker) {
        // It's not possible to get a value expression if the parameter doesn't even have a type.
        if (typeNode === null || !ts.isTypeReferenceNode(typeNode)) {
            return null;
        }
        var symbols = resolveTypeSymbols(typeNode, checker);
        if (symbols === null) {
            return null;
        }
        var local = symbols.local, decl = symbols.decl;
        // It's only valid to convert a type reference to a value reference if the type actually
        // has a value declaration associated with it.
        if (decl.valueDeclaration === undefined) {
            return null;
        }
        // The type points to a valid value declaration. Rewrite the TypeReference into an
        // Expression which references the value pointed to by the TypeReference, if possible.
        // Look at the local `ts.Symbol`'s declarations and see if it comes from an import
        // statement. If so, extract the module specifier and the name of the imported type.
        var firstDecl = local.declarations && local.declarations[0];
        if (firstDecl !== undefined) {
            if (ts.isImportClause(firstDecl) && firstDecl.name !== undefined) {
                // This is a default import.
                //   import Foo from 'foo';
                return {
                    local: true,
                    // Copying the name here ensures the generated references will be correctly transformed
                    // along with the import.
                    expression: ts.updateIdentifier(firstDecl.name),
                    defaultImportStatement: firstDecl.parent,
                };
            }
            else if (ts.isImportSpecifier(firstDecl)) {
                // The symbol was imported by name
                //   import {Foo} from 'foo';
                // or
                //   import {Foo as Bar} from 'foo';
                // Determine the name to import (`Foo`) from the import specifier, as the symbol names of
                // the imported type could refer to a local alias (like `Bar` in the example above).
                var importedName = (firstDecl.propertyName || firstDecl.name).text;
                // The first symbol name refers to the local name, which is replaced by `importedName` above.
                // Any remaining symbol names make up the complete path to the value.
                var _a = tslib_1.__read(symbols.symbolNames), _localName = _a[0], nestedPath = _a.slice(1);
                var moduleName = extractModuleName(firstDecl.parent.parent.parent);
                return {
                    local: false,
                    valueDeclaration: decl.valueDeclaration,
                    moduleName: moduleName,
                    importedName: importedName,
                    nestedPath: nestedPath
                };
            }
            else if (ts.isNamespaceImport(firstDecl)) {
                // The import is a namespace import
                //   import * as Foo from 'foo';
                if (symbols.symbolNames.length === 1) {
                    // The type refers to the namespace itself, which cannot be represented as a value.
                    return null;
                }
                // The first symbol name refers to the local name of the namespace, which is is discarded
                // as a new namespace import will be generated. This is followed by the symbol name that needs
                // to be imported and any remaining names that constitute the complete path to the value.
                var _b = tslib_1.__read(symbols.symbolNames), _ns = _b[0], importedName = _b[1], nestedPath = _b.slice(2);
                var moduleName = extractModuleName(firstDecl.parent.parent);
                return {
                    local: false,
                    valueDeclaration: decl.valueDeclaration,
                    moduleName: moduleName,
                    importedName: importedName,
                    nestedPath: nestedPath
                };
            }
        }
        // If the type is not imported, the type reference can be converted into an expression as is.
        var expression = typeNodeToValueExpr(typeNode);
        if (expression !== null) {
            return {
                local: true,
                expression: expression,
                defaultImportStatement: null,
            };
        }
        else {
            return null;
        }
    }
    exports.typeToValue = typeToValue;
    /**
     * Attempt to extract a `ts.Expression` that's equivalent to a `ts.TypeNode`, as the two have
     * different AST shapes but can reference the same symbols.
     *
     * This will return `null` if an equivalent expression cannot be constructed.
     */
    function typeNodeToValueExpr(node) {
        if (ts.isTypeReferenceNode(node)) {
            return entityNameToValue(node.typeName);
        }
        else {
            return null;
        }
    }
    exports.typeNodeToValueExpr = typeNodeToValueExpr;
    /**
     * Resolve a `TypeReference` node to the `ts.Symbol`s for both its declaration and its local source.
     *
     * In the event that the `TypeReference` refers to a locally declared symbol, these will be the
     * same. If the `TypeReference` refers to an imported symbol, then `decl` will be the fully resolved
     * `ts.Symbol` of the referenced symbol. `local` will be the `ts.Symbol` of the `ts.Identifier`
     * which points to the import statement by which the symbol was imported.
     *
     * All symbol names that make up the type reference are returned left-to-right into the
     * `symbolNames` array, which is guaranteed to include at least one entry.
     */
    function resolveTypeSymbols(typeRef, checker) {
        var typeName = typeRef.typeName;
        // typeRefSymbol is the ts.Symbol of the entire type reference.
        var typeRefSymbol = checker.getSymbolAtLocation(typeName);
        if (typeRefSymbol === undefined) {
            return null;
        }
        // `local` is the `ts.Symbol` for the local `ts.Identifier` for the type.
        // If the type is actually locally declared or is imported by name, for example:
        //   import {Foo} from './foo';
        // then it'll be the same as `typeRefSymbol`.
        //
        // If the type is imported via a namespace import, for example:
        //   import * as foo from './foo';
        // and then referenced as:
        //   constructor(f: foo.Foo)
        // then `local` will be the `ts.Symbol` of `foo`, whereas `typeRefSymbol` will be the `ts.Symbol`
        // of `foo.Foo`. This allows tracking of the import behind whatever type reference exists.
        var local = typeRefSymbol;
        // Destructure a name like `foo.X.Y.Z` as follows:
        // - in `leftMost`, the `ts.Identifier` of the left-most name (`foo`) in the qualified name.
        //   This identifier is used to resolve the `ts.Symbol` for `local`.
        // - in `symbolNames`, all names involved in the qualified path, or a single symbol name if the
        //   type is not qualified.
        var leftMost = typeName;
        var symbolNames = [];
        while (ts.isQualifiedName(leftMost)) {
            symbolNames.unshift(leftMost.right.text);
            leftMost = leftMost.left;
        }
        symbolNames.unshift(leftMost.text);
        if (leftMost !== typeName) {
            var localTmp = checker.getSymbolAtLocation(leftMost);
            if (localTmp !== undefined) {
                local = localTmp;
            }
        }
        // De-alias the top-level type reference symbol to get the symbol of the actual declaration.
        var decl = typeRefSymbol;
        if (typeRefSymbol.flags & ts.SymbolFlags.Alias) {
            decl = checker.getAliasedSymbol(typeRefSymbol);
        }
        return { local: local, decl: decl, symbolNames: symbolNames };
    }
    function entityNameToValue(node) {
        if (ts.isQualifiedName(node)) {
            var left = entityNameToValue(node.left);
            return left !== null ? ts.createPropertyAccess(left, node.right) : null;
        }
        else if (ts.isIdentifier(node)) {
            return ts.getMutableClone(node);
        }
        else {
            return null;
        }
    }
    function extractModuleName(node) {
        if (!ts.isStringLiteral(node.moduleSpecifier)) {
            throw new Error('not a module specifier');
        }
        return node.moduleSpecifier.text;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV90b192YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbi9zcmMvdHlwZV90b192YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFJakM7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsV0FBVyxDQUN2QixRQUEwQixFQUFFLE9BQXVCO1FBQ3JELHlGQUF5RjtRQUN6RixJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVNLElBQUEscUJBQUssRUFBRSxtQkFBSSxDQUFZO1FBQzlCLHdGQUF3RjtRQUN4Riw4Q0FBOEM7UUFDOUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxrRkFBa0Y7UUFDbEYsc0ZBQXNGO1FBRXRGLGtGQUFrRjtRQUNsRixvRkFBb0Y7UUFDcEYsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ2hFLDRCQUE0QjtnQkFDNUIsMkJBQTJCO2dCQUUzQixP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QixDQUFDLElBQW1CO1FBQzVDLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFNLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3pFO2FBQU0sSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQTBCO1FBQ25ELElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1R5cGVWYWx1ZVJlZmVyZW5jZX0gZnJvbSAnLi9ob3N0JztcblxuLyoqXG4gKiBQb3RlbnRpYWxseSBjb252ZXJ0IGEgYHRzLlR5cGVOb2RlYCB0byBhIGBUeXBlVmFsdWVSZWZlcmVuY2VgLCB3aGljaCBpbmRpY2F0ZXMgaG93IHRvIHVzZSB0aGVcbiAqIHR5cGUgZ2l2ZW4gaW4gdGhlIGB0cy5UeXBlTm9kZWAgaW4gYSB2YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBUaGlzIGNhbiByZXR1cm4gYG51bGxgIGlmIHRoZSBgdHlwZU5vZGVgIGlzIGBudWxsYCwgaWYgaXQgZG9lcyBub3QgcmVmZXIgdG8gYSBzeW1ib2wgd2l0aCBhIHZhbHVlXG4gKiBkZWNsYXJhdGlvbiwgb3IgaWYgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHN0YXRpY2FsbHkgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVUb1ZhbHVlKFxuICAgIHR5cGVOb2RlOiB0cy5UeXBlTm9kZXxudWxsLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IFR5cGVWYWx1ZVJlZmVyZW5jZXxudWxsIHtcbiAgLy8gSXQncyBub3QgcG9zc2libGUgdG8gZ2V0IGEgdmFsdWUgZXhwcmVzc2lvbiBpZiB0aGUgcGFyYW1ldGVyIGRvZXNuJ3QgZXZlbiBoYXZlIGEgdHlwZS5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsIHx8ICF0cy5pc1R5cGVSZWZlcmVuY2VOb2RlKHR5cGVOb2RlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc3ltYm9scyA9IHJlc29sdmVUeXBlU3ltYm9scyh0eXBlTm9kZSwgY2hlY2tlcik7XG4gIGlmIChzeW1ib2xzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7bG9jYWwsIGRlY2x9ID0gc3ltYm9scztcbiAgLy8gSXQncyBvbmx5IHZhbGlkIHRvIGNvbnZlcnQgYSB0eXBlIHJlZmVyZW5jZSB0byBhIHZhbHVlIHJlZmVyZW5jZSBpZiB0aGUgdHlwZSBhY3R1YWxseVxuICAvLyBoYXMgYSB2YWx1ZSBkZWNsYXJhdGlvbiBhc3NvY2lhdGVkIHdpdGggaXQuXG4gIGlmIChkZWNsLnZhbHVlRGVjbGFyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVGhlIHR5cGUgcG9pbnRzIHRvIGEgdmFsaWQgdmFsdWUgZGVjbGFyYXRpb24uIFJld3JpdGUgdGhlIFR5cGVSZWZlcmVuY2UgaW50byBhblxuICAvLyBFeHByZXNzaW9uIHdoaWNoIHJlZmVyZW5jZXMgdGhlIHZhbHVlIHBvaW50ZWQgdG8gYnkgdGhlIFR5cGVSZWZlcmVuY2UsIGlmIHBvc3NpYmxlLlxuXG4gIC8vIExvb2sgYXQgdGhlIGxvY2FsIGB0cy5TeW1ib2xgJ3MgZGVjbGFyYXRpb25zIGFuZCBzZWUgaWYgaXQgY29tZXMgZnJvbSBhbiBpbXBvcnRcbiAgLy8gc3RhdGVtZW50LiBJZiBzbywgZXh0cmFjdCB0aGUgbW9kdWxlIHNwZWNpZmllciBhbmQgdGhlIG5hbWUgb2YgdGhlIGltcG9ydGVkIHR5cGUuXG4gIGNvbnN0IGZpcnN0RGVjbCA9IGxvY2FsLmRlY2xhcmF0aW9ucyAmJiBsb2NhbC5kZWNsYXJhdGlvbnNbMF07XG4gIGlmIChmaXJzdERlY2wgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0cy5pc0ltcG9ydENsYXVzZShmaXJzdERlY2wpICYmIGZpcnN0RGVjbC5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBkZWZhdWx0IGltcG9ydC5cbiAgICAgIC8vICAgaW1wb3J0IEZvbyBmcm9tICdmb28nO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbDogdHJ1ZSxcbiAgICAgICAgLy8gQ29weWluZyB0aGUgbmFtZSBoZXJlIGVuc3VyZXMgdGhlIGdlbmVyYXRlZCByZWZlcmVuY2VzIHdpbGwgYmUgY29ycmVjdGx5IHRyYW5zZm9ybWVkXG4gICAgICAgIC8vIGFsb25nIHdpdGggdGhlIGltcG9ydC5cbiAgICAgICAgZXhwcmVzc2lvbjogdHMudXBkYXRlSWRlbnRpZmllcihmaXJzdERlY2wubmFtZSksXG4gICAgICAgIGRlZmF1bHRJbXBvcnRTdGF0ZW1lbnQ6IGZpcnN0RGVjbC5wYXJlbnQsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHMuaXNJbXBvcnRTcGVjaWZpZXIoZmlyc3REZWNsKSkge1xuICAgICAgLy8gVGhlIHN5bWJvbCB3YXMgaW1wb3J0ZWQgYnkgbmFtZVxuICAgICAgLy8gICBpbXBvcnQge0Zvb30gZnJvbSAnZm9vJztcbiAgICAgIC8vIG9yXG4gICAgICAvLyAgIGltcG9ydCB7Rm9vIGFzIEJhcn0gZnJvbSAnZm9vJztcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBuYW1lIHRvIGltcG9ydCAoYEZvb2ApIGZyb20gdGhlIGltcG9ydCBzcGVjaWZpZXIsIGFzIHRoZSBzeW1ib2wgbmFtZXMgb2ZcbiAgICAgIC8vIHRoZSBpbXBvcnRlZCB0eXBlIGNvdWxkIHJlZmVyIHRvIGEgbG9jYWwgYWxpYXMgKGxpa2UgYEJhcmAgaW4gdGhlIGV4YW1wbGUgYWJvdmUpLlxuICAgICAgY29uc3QgaW1wb3J0ZWROYW1lID0gKGZpcnN0RGVjbC5wcm9wZXJ0eU5hbWUgfHwgZmlyc3REZWNsLm5hbWUpLnRleHQ7XG5cbiAgICAgIC8vIFRoZSBmaXJzdCBzeW1ib2wgbmFtZSByZWZlcnMgdG8gdGhlIGxvY2FsIG5hbWUsIHdoaWNoIGlzIHJlcGxhY2VkIGJ5IGBpbXBvcnRlZE5hbWVgIGFib3ZlLlxuICAgICAgLy8gQW55IHJlbWFpbmluZyBzeW1ib2wgbmFtZXMgbWFrZSB1cCB0aGUgY29tcGxldGUgcGF0aCB0byB0aGUgdmFsdWUuXG4gICAgICBjb25zdCBbX2xvY2FsTmFtZSwgLi4ubmVzdGVkUGF0aF0gPSBzeW1ib2xzLnN5bWJvbE5hbWVzO1xuXG4gICAgICBjb25zdCBtb2R1bGVOYW1lID0gZXh0cmFjdE1vZHVsZU5hbWUoZmlyc3REZWNsLnBhcmVudC5wYXJlbnQucGFyZW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsOiBmYWxzZSxcbiAgICAgICAgdmFsdWVEZWNsYXJhdGlvbjogZGVjbC52YWx1ZURlY2xhcmF0aW9uLFxuICAgICAgICBtb2R1bGVOYW1lLFxuICAgICAgICBpbXBvcnRlZE5hbWUsXG4gICAgICAgIG5lc3RlZFBhdGhcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0cy5pc05hbWVzcGFjZUltcG9ydChmaXJzdERlY2wpKSB7XG4gICAgICAvLyBUaGUgaW1wb3J0IGlzIGEgbmFtZXNwYWNlIGltcG9ydFxuICAgICAgLy8gICBpbXBvcnQgKiBhcyBGb28gZnJvbSAnZm9vJztcblxuICAgICAgaWYgKHN5bWJvbHMuc3ltYm9sTmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIFRoZSB0eXBlIHJlZmVycyB0byB0aGUgbmFtZXNwYWNlIGl0c2VsZiwgd2hpY2ggY2Fubm90IGJlIHJlcHJlc2VudGVkIGFzIGEgdmFsdWUuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgZmlyc3Qgc3ltYm9sIG5hbWUgcmVmZXJzIHRvIHRoZSBsb2NhbCBuYW1lIG9mIHRoZSBuYW1lc3BhY2UsIHdoaWNoIGlzIGlzIGRpc2NhcmRlZFxuICAgICAgLy8gYXMgYSBuZXcgbmFtZXNwYWNlIGltcG9ydCB3aWxsIGJlIGdlbmVyYXRlZC4gVGhpcyBpcyBmb2xsb3dlZCBieSB0aGUgc3ltYm9sIG5hbWUgdGhhdCBuZWVkc1xuICAgICAgLy8gdG8gYmUgaW1wb3J0ZWQgYW5kIGFueSByZW1haW5pbmcgbmFtZXMgdGhhdCBjb25zdGl0dXRlIHRoZSBjb21wbGV0ZSBwYXRoIHRvIHRoZSB2YWx1ZS5cbiAgICAgIGNvbnN0IFtfbnMsIGltcG9ydGVkTmFtZSwgLi4ubmVzdGVkUGF0aF0gPSBzeW1ib2xzLnN5bWJvbE5hbWVzO1xuXG4gICAgICBjb25zdCBtb2R1bGVOYW1lID0gZXh0cmFjdE1vZHVsZU5hbWUoZmlyc3REZWNsLnBhcmVudC5wYXJlbnQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWw6IGZhbHNlLFxuICAgICAgICB2YWx1ZURlY2xhcmF0aW9uOiBkZWNsLnZhbHVlRGVjbGFyYXRpb24sXG4gICAgICAgIG1vZHVsZU5hbWUsXG4gICAgICAgIGltcG9ydGVkTmFtZSxcbiAgICAgICAgbmVzdGVkUGF0aFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGUgdHlwZSBpcyBub3QgaW1wb3J0ZWQsIHRoZSB0eXBlIHJlZmVyZW5jZSBjYW4gYmUgY29udmVydGVkIGludG8gYW4gZXhwcmVzc2lvbiBhcyBpcy5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IHR5cGVOb2RlVG9WYWx1ZUV4cHIodHlwZU5vZGUpO1xuICBpZiAoZXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbDogdHJ1ZSxcbiAgICAgIGV4cHJlc3Npb24sXG4gICAgICBkZWZhdWx0SW1wb3J0U3RhdGVtZW50OiBudWxsLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGV4dHJhY3QgYSBgdHMuRXhwcmVzc2lvbmAgdGhhdCdzIGVxdWl2YWxlbnQgdG8gYSBgdHMuVHlwZU5vZGVgLCBhcyB0aGUgdHdvIGhhdmVcbiAqIGRpZmZlcmVudCBBU1Qgc2hhcGVzIGJ1dCBjYW4gcmVmZXJlbmNlIHRoZSBzYW1lIHN5bWJvbHMuXG4gKlxuICogVGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaWYgYW4gZXF1aXZhbGVudCBleHByZXNzaW9uIGNhbm5vdCBiZSBjb25zdHJ1Y3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVOb2RlVG9WYWx1ZUV4cHIobm9kZTogdHMuVHlwZU5vZGUpOiB0cy5FeHByZXNzaW9ufG51bGwge1xuICBpZiAodHMuaXNUeXBlUmVmZXJlbmNlTm9kZShub2RlKSkge1xuICAgIHJldHVybiBlbnRpdHlOYW1lVG9WYWx1ZShub2RlLnR5cGVOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgYSBgVHlwZVJlZmVyZW5jZWAgbm9kZSB0byB0aGUgYHRzLlN5bWJvbGBzIGZvciBib3RoIGl0cyBkZWNsYXJhdGlvbiBhbmQgaXRzIGxvY2FsIHNvdXJjZS5cbiAqXG4gKiBJbiB0aGUgZXZlbnQgdGhhdCB0aGUgYFR5cGVSZWZlcmVuY2VgIHJlZmVycyB0byBhIGxvY2FsbHkgZGVjbGFyZWQgc3ltYm9sLCB0aGVzZSB3aWxsIGJlIHRoZVxuICogc2FtZS4gSWYgdGhlIGBUeXBlUmVmZXJlbmNlYCByZWZlcnMgdG8gYW4gaW1wb3J0ZWQgc3ltYm9sLCB0aGVuIGBkZWNsYCB3aWxsIGJlIHRoZSBmdWxseSByZXNvbHZlZFxuICogYHRzLlN5bWJvbGAgb2YgdGhlIHJlZmVyZW5jZWQgc3ltYm9sLiBgbG9jYWxgIHdpbGwgYmUgdGhlIGB0cy5TeW1ib2xgIG9mIHRoZSBgdHMuSWRlbnRpZmllcmBcbiAqIHdoaWNoIHBvaW50cyB0byB0aGUgaW1wb3J0IHN0YXRlbWVudCBieSB3aGljaCB0aGUgc3ltYm9sIHdhcyBpbXBvcnRlZC5cbiAqXG4gKiBBbGwgc3ltYm9sIG5hbWVzIHRoYXQgbWFrZSB1cCB0aGUgdHlwZSByZWZlcmVuY2UgYXJlIHJldHVybmVkIGxlZnQtdG8tcmlnaHQgaW50byB0aGVcbiAqIGBzeW1ib2xOYW1lc2AgYXJyYXksIHdoaWNoIGlzIGd1YXJhbnRlZWQgdG8gaW5jbHVkZSBhdCBsZWFzdCBvbmUgZW50cnkuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVUeXBlU3ltYm9scyh0eXBlUmVmOiB0cy5UeXBlUmVmZXJlbmNlTm9kZSwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIpOlxuICAgIHtsb2NhbDogdHMuU3ltYm9sLCBkZWNsOiB0cy5TeW1ib2wsIHN5bWJvbE5hbWVzOiBzdHJpbmdbXX18bnVsbCB7XG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZVJlZi50eXBlTmFtZTtcbiAgLy8gdHlwZVJlZlN5bWJvbCBpcyB0aGUgdHMuU3ltYm9sIG9mIHRoZSBlbnRpcmUgdHlwZSByZWZlcmVuY2UuXG4gIGNvbnN0IHR5cGVSZWZTeW1ib2w6IHRzLlN5bWJvbHx1bmRlZmluZWQgPSBjaGVja2VyLmdldFN5bWJvbEF0TG9jYXRpb24odHlwZU5hbWUpO1xuICBpZiAodHlwZVJlZlN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBgbG9jYWxgIGlzIHRoZSBgdHMuU3ltYm9sYCBmb3IgdGhlIGxvY2FsIGB0cy5JZGVudGlmaWVyYCBmb3IgdGhlIHR5cGUuXG4gIC8vIElmIHRoZSB0eXBlIGlzIGFjdHVhbGx5IGxvY2FsbHkgZGVjbGFyZWQgb3IgaXMgaW1wb3J0ZWQgYnkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gIC8vICAgaW1wb3J0IHtGb299IGZyb20gJy4vZm9vJztcbiAgLy8gdGhlbiBpdCdsbCBiZSB0aGUgc2FtZSBhcyBgdHlwZVJlZlN5bWJvbGAuXG4gIC8vXG4gIC8vIElmIHRoZSB0eXBlIGlzIGltcG9ydGVkIHZpYSBhIG5hbWVzcGFjZSBpbXBvcnQsIGZvciBleGFtcGxlOlxuICAvLyAgIGltcG9ydCAqIGFzIGZvbyBmcm9tICcuL2Zvbyc7XG4gIC8vIGFuZCB0aGVuIHJlZmVyZW5jZWQgYXM6XG4gIC8vICAgY29uc3RydWN0b3IoZjogZm9vLkZvbylcbiAgLy8gdGhlbiBgbG9jYWxgIHdpbGwgYmUgdGhlIGB0cy5TeW1ib2xgIG9mIGBmb29gLCB3aGVyZWFzIGB0eXBlUmVmU3ltYm9sYCB3aWxsIGJlIHRoZSBgdHMuU3ltYm9sYFxuICAvLyBvZiBgZm9vLkZvb2AuIFRoaXMgYWxsb3dzIHRyYWNraW5nIG9mIHRoZSBpbXBvcnQgYmVoaW5kIHdoYXRldmVyIHR5cGUgcmVmZXJlbmNlIGV4aXN0cy5cbiAgbGV0IGxvY2FsID0gdHlwZVJlZlN5bWJvbDtcblxuICAvLyBEZXN0cnVjdHVyZSBhIG5hbWUgbGlrZSBgZm9vLlguWS5aYCBhcyBmb2xsb3dzOlxuICAvLyAtIGluIGBsZWZ0TW9zdGAsIHRoZSBgdHMuSWRlbnRpZmllcmAgb2YgdGhlIGxlZnQtbW9zdCBuYW1lIChgZm9vYCkgaW4gdGhlIHF1YWxpZmllZCBuYW1lLlxuICAvLyAgIFRoaXMgaWRlbnRpZmllciBpcyB1c2VkIHRvIHJlc29sdmUgdGhlIGB0cy5TeW1ib2xgIGZvciBgbG9jYWxgLlxuICAvLyAtIGluIGBzeW1ib2xOYW1lc2AsIGFsbCBuYW1lcyBpbnZvbHZlZCBpbiB0aGUgcXVhbGlmaWVkIHBhdGgsIG9yIGEgc2luZ2xlIHN5bWJvbCBuYW1lIGlmIHRoZVxuICAvLyAgIHR5cGUgaXMgbm90IHF1YWxpZmllZC5cbiAgbGV0IGxlZnRNb3N0ID0gdHlwZU5hbWU7XG4gIGNvbnN0IHN5bWJvbE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICB3aGlsZSAodHMuaXNRdWFsaWZpZWROYW1lKGxlZnRNb3N0KSkge1xuICAgIHN5bWJvbE5hbWVzLnVuc2hpZnQobGVmdE1vc3QucmlnaHQudGV4dCk7XG4gICAgbGVmdE1vc3QgPSBsZWZ0TW9zdC5sZWZ0O1xuICB9XG4gIHN5bWJvbE5hbWVzLnVuc2hpZnQobGVmdE1vc3QudGV4dCk7XG5cbiAgaWYgKGxlZnRNb3N0ICE9PSB0eXBlTmFtZSkge1xuICAgIGNvbnN0IGxvY2FsVG1wID0gY2hlY2tlci5nZXRTeW1ib2xBdExvY2F0aW9uKGxlZnRNb3N0KTtcbiAgICBpZiAobG9jYWxUbXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWwgPSBsb2NhbFRtcDtcbiAgICB9XG4gIH1cblxuICAvLyBEZS1hbGlhcyB0aGUgdG9wLWxldmVsIHR5cGUgcmVmZXJlbmNlIHN5bWJvbCB0byBnZXQgdGhlIHN5bWJvbCBvZiB0aGUgYWN0dWFsIGRlY2xhcmF0aW9uLlxuICBsZXQgZGVjbCA9IHR5cGVSZWZTeW1ib2w7XG4gIGlmICh0eXBlUmVmU3ltYm9sLmZsYWdzICYgdHMuU3ltYm9sRmxhZ3MuQWxpYXMpIHtcbiAgICBkZWNsID0gY2hlY2tlci5nZXRBbGlhc2VkU3ltYm9sKHR5cGVSZWZTeW1ib2wpO1xuICB9XG4gIHJldHVybiB7bG9jYWwsIGRlY2wsIHN5bWJvbE5hbWVzfTtcbn1cblxuZnVuY3Rpb24gZW50aXR5TmFtZVRvVmFsdWUobm9kZTogdHMuRW50aXR5TmFtZSk6IHRzLkV4cHJlc3Npb258bnVsbCB7XG4gIGlmICh0cy5pc1F1YWxpZmllZE5hbWUobm9kZSkpIHtcbiAgICBjb25zdCBsZWZ0ID0gZW50aXR5TmFtZVRvVmFsdWUobm9kZS5sZWZ0KTtcbiAgICByZXR1cm4gbGVmdCAhPT0gbnVsbCA/IHRzLmNyZWF0ZVByb3BlcnR5QWNjZXNzKGxlZnQsIG5vZGUucmlnaHQpIDogbnVsbDtcbiAgfSBlbHNlIGlmICh0cy5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICByZXR1cm4gdHMuZ2V0TXV0YWJsZUNsb25lKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RNb2R1bGVOYW1lKG5vZGU6IHRzLkltcG9ydERlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgaWYgKCF0cy5pc1N0cmluZ0xpdGVyYWwobm9kZS5tb2R1bGVTcGVjaWZpZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBtb2R1bGUgc3BlY2lmaWVyJyk7XG4gIH1cbiAgcmV0dXJuIG5vZGUubW9kdWxlU3BlY2lmaWVyLnRleHQ7XG59XG4iXX0=