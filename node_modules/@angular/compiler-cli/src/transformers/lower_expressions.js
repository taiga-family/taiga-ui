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
        define("@angular/compiler-cli/src/transformers/lower_expressions", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/compiler-cli/src/metadata/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var index_1 = require("@angular/compiler-cli/src/metadata/index");
    function toMap(items, select) {
        return new Map(items.map(function (i) { return [select(i), i]; }));
    }
    // We will never lower expressions in a nested lexical scope so avoid entering them.
    // This also avoids a bug in TypeScript 2.3 where the lexical scopes get out of sync
    // when using visitEachChild.
    function isLexicalScope(node) {
        switch (node.kind) {
            case ts.SyntaxKind.ArrowFunction:
            case ts.SyntaxKind.FunctionExpression:
            case ts.SyntaxKind.FunctionDeclaration:
            case ts.SyntaxKind.ClassExpression:
            case ts.SyntaxKind.ClassDeclaration:
            case ts.SyntaxKind.FunctionType:
            case ts.SyntaxKind.TypeLiteral:
            case ts.SyntaxKind.ArrayType:
                return true;
        }
        return false;
    }
    function transformSourceFile(sourceFile, requests, context) {
        var inserts = [];
        // Calculate the range of interesting locations. The transform will only visit nodes in this
        // range to improve the performance on large files.
        var locations = Array.from(requests.keys());
        var min = Math.min.apply(Math, tslib_1.__spread(locations));
        var max = Math.max.apply(Math, tslib_1.__spread(locations));
        // Visit nodes matching the request and synthetic nodes added by tsickle
        function shouldVisit(pos, end) {
            return (pos <= max && end >= min) || pos == -1;
        }
        function visitSourceFile(sourceFile) {
            function topLevelStatement(node) {
                var declarations = [];
                function visitNode(node) {
                    // Get the original node before tsickle
                    var _a = ts.getOriginalNode(node), pos = _a.pos, end = _a.end, kind = _a.kind, originalParent = _a.parent;
                    var nodeRequest = requests.get(pos);
                    if (nodeRequest && nodeRequest.kind == kind && nodeRequest.end == end) {
                        // This node is requested to be rewritten as a reference to the exported name.
                        if (originalParent && originalParent.kind === ts.SyntaxKind.VariableDeclaration) {
                            // As the value represents the whole initializer of a variable declaration,
                            // just refer to that variable. This e.g. helps to preserve closure comments
                            // at the right place.
                            var varParent = originalParent;
                            if (varParent.name.kind === ts.SyntaxKind.Identifier) {
                                var varName = varParent.name.text;
                                var exportName_1 = nodeRequest.name;
                                declarations.push({
                                    name: exportName_1,
                                    node: ts.createIdentifier(varName),
                                    order: 1 /* AfterStmt */
                                });
                                return node;
                            }
                        }
                        // Record that the node needs to be moved to an exported variable with the given name
                        var exportName = nodeRequest.name;
                        declarations.push({ name: exportName, node: node, order: 0 /* BeforeStmt */ });
                        return ts.createIdentifier(exportName);
                    }
                    var result = node;
                    if (shouldVisit(pos, end) && !isLexicalScope(node)) {
                        result = ts.visitEachChild(node, visitNode, context);
                    }
                    return result;
                }
                // Get the original node before tsickle
                var _a = ts.getOriginalNode(node), pos = _a.pos, end = _a.end;
                var resultStmt;
                if (shouldVisit(pos, end)) {
                    resultStmt = ts.visitEachChild(node, visitNode, context);
                }
                else {
                    resultStmt = node;
                }
                if (declarations.length) {
                    inserts.push({ relativeTo: resultStmt, declarations: declarations });
                }
                return resultStmt;
            }
            var newStatements = sourceFile.statements.map(topLevelStatement);
            if (inserts.length) {
                // Insert the declarations relative to the rewritten statement that references them.
                var insertMap_1 = toMap(inserts, function (i) { return i.relativeTo; });
                var tmpStatements_1 = [];
                newStatements.forEach(function (statement) {
                    var insert = insertMap_1.get(statement);
                    if (insert) {
                        var before = insert.declarations.filter(function (d) { return d.order === 0 /* BeforeStmt */; });
                        if (before.length) {
                            tmpStatements_1.push(createVariableStatementForDeclarations(before));
                        }
                        tmpStatements_1.push(statement);
                        var after = insert.declarations.filter(function (d) { return d.order === 1 /* AfterStmt */; });
                        if (after.length) {
                            tmpStatements_1.push(createVariableStatementForDeclarations(after));
                        }
                    }
                    else {
                        tmpStatements_1.push(statement);
                    }
                });
                // Insert an exports clause to export the declarations
                tmpStatements_1.push(ts.createExportDeclaration(
                /* decorators */ undefined, 
                /* modifiers */ undefined, ts.createNamedExports(inserts
                    .reduce(function (accumulator, insert) { return tslib_1.__spread(accumulator, insert.declarations); }, [])
                    .map(function (declaration) { return ts.createExportSpecifier(
                /* propertyName */ undefined, declaration.name); }))));
                newStatements = tmpStatements_1;
            }
            // Note: We cannot use ts.updateSourcefile here as
            // it does not work well with decorators.
            // See https://github.com/Microsoft/TypeScript/issues/17384
            var newSf = ts.getMutableClone(sourceFile);
            if (!(sourceFile.flags & ts.NodeFlags.Synthesized)) {
                newSf.flags &= ~ts.NodeFlags.Synthesized;
            }
            newSf.statements = ts.setTextRange(ts.createNodeArray(newStatements), sourceFile.statements);
            return newSf;
        }
        return visitSourceFile(sourceFile);
    }
    function createVariableStatementForDeclarations(declarations) {
        var varDecls = declarations.map(function (i) { return ts.createVariableDeclaration(i.name, /* type */ undefined, i.node); });
        return ts.createVariableStatement(
        /* modifiers */ undefined, ts.createVariableDeclarationList(varDecls, ts.NodeFlags.Const));
    }
    function getExpressionLoweringTransformFactory(requestsMap, program) {
        // Return the factory
        return function (context) { return function (sourceFile) {
            // We need to use the original SourceFile for reading metadata, and not the transformed one.
            var originalFile = program.getSourceFile(sourceFile.fileName);
            if (originalFile) {
                var requests = requestsMap.getRequests(originalFile);
                if (requests && requests.size) {
                    return transformSourceFile(sourceFile, requests, context);
                }
            }
            return sourceFile;
        }; };
    }
    exports.getExpressionLoweringTransformFactory = getExpressionLoweringTransformFactory;
    function isEligibleForLowering(node) {
        if (node) {
            switch (node.kind) {
                case ts.SyntaxKind.SourceFile:
                case ts.SyntaxKind.Decorator:
                    // Lower expressions that are local to the module scope or
                    // in a decorator.
                    return true;
                case ts.SyntaxKind.ClassDeclaration:
                case ts.SyntaxKind.InterfaceDeclaration:
                case ts.SyntaxKind.EnumDeclaration:
                case ts.SyntaxKind.FunctionDeclaration:
                    // Don't lower expressions in a declaration.
                    return false;
                case ts.SyntaxKind.VariableDeclaration:
                    var isExported = (ts.getCombinedModifierFlags(node) &
                        ts.ModifierFlags.Export) == 0;
                    // This might be unnecessary, as the variable might be exported and only used as a reference
                    // in another expression. However, the variable also might be involved in provider
                    // definitions. If that's the case, there is a specific token (`ROUTES`) which the compiler
                    // attempts to understand deeply. Sub-expressions within that token (`loadChildren` for
                    // example) might also require lowering even if the top-level declaration is already
                    // properly exported.
                    var varNode = node;
                    return isExported ||
                        (varNode.initializer !== undefined &&
                            (ts.isObjectLiteralExpression(varNode.initializer) ||
                                ts.isArrayLiteralExpression(varNode.initializer) ||
                                ts.isCallExpression(varNode.initializer)));
            }
            return isEligibleForLowering(node.parent);
        }
        return true;
    }
    function isPrimitive(value) {
        return Object(value) !== value;
    }
    function isRewritten(value) {
        return index_1.isMetadataGlobalReferenceExpression(value) && compiler_1.isLoweredSymbol(value.name);
    }
    function isLiteralFieldNamed(node, names) {
        if (node.parent && node.parent.kind == ts.SyntaxKind.PropertyAssignment) {
            var property = node.parent;
            if (property.parent && property.parent.kind == ts.SyntaxKind.ObjectLiteralExpression &&
                property.name && property.name.kind == ts.SyntaxKind.Identifier) {
                var propertyName = property.name;
                return names.has(propertyName.text);
            }
        }
        return false;
    }
    var LowerMetadataTransform = /** @class */ (function () {
        function LowerMetadataTransform(lowerableFieldNames) {
            this.requests = new Map();
            this.lowerableFieldNames = new Set(lowerableFieldNames);
        }
        // RequestMap
        LowerMetadataTransform.prototype.getRequests = function (sourceFile) {
            var result = this.requests.get(sourceFile.fileName);
            if (!result) {
                // Force the metadata for this source file to be collected which
                // will recursively call start() populating the request map;
                this.cache.getMetadata(sourceFile);
                // If we still don't have the requested metadata, the file is not a module
                // or is a declaration file so return an empty map.
                result = this.requests.get(sourceFile.fileName) || new Map();
            }
            return result;
        };
        // MetadataTransformer
        LowerMetadataTransform.prototype.connect = function (cache) {
            this.cache = cache;
        };
        LowerMetadataTransform.prototype.start = function (sourceFile) {
            var _this = this;
            var identNumber = 0;
            var freshIdent = function () { return compiler_1.createLoweredSymbol(identNumber++); };
            var requests = new Map();
            this.requests.set(sourceFile.fileName, requests);
            var replaceNode = function (node) {
                var name = freshIdent();
                requests.set(node.pos, { name: name, kind: node.kind, location: node.pos, end: node.end });
                return { __symbolic: 'reference', name: name };
            };
            var isExportedSymbol = (function () {
                var exportTable;
                return function (node) {
                    if (node.kind == ts.SyntaxKind.Identifier) {
                        var ident = node;
                        if (!exportTable) {
                            exportTable = createExportTableFor(sourceFile);
                        }
                        return exportTable.has(ident.text);
                    }
                    return false;
                };
            })();
            var isExportedPropertyAccess = function (node) {
                if (node.kind === ts.SyntaxKind.PropertyAccessExpression) {
                    var pae = node;
                    if (isExportedSymbol(pae.expression)) {
                        return true;
                    }
                }
                return false;
            };
            var hasLowerableParentCache = new Map();
            var shouldBeLowered = function (node) {
                if (node === undefined) {
                    return false;
                }
                var lowerable = false;
                if ((node.kind === ts.SyntaxKind.ArrowFunction ||
                    node.kind === ts.SyntaxKind.FunctionExpression) &&
                    isEligibleForLowering(node)) {
                    lowerable = true;
                }
                else if (isLiteralFieldNamed(node, _this.lowerableFieldNames) && isEligibleForLowering(node) &&
                    !isExportedSymbol(node) && !isExportedPropertyAccess(node)) {
                    lowerable = true;
                }
                return lowerable;
            };
            var hasLowerableParent = function (node) {
                if (node === undefined) {
                    return false;
                }
                if (!hasLowerableParentCache.has(node)) {
                    hasLowerableParentCache.set(node, shouldBeLowered(node.parent) || hasLowerableParent(node.parent));
                }
                return hasLowerableParentCache.get(node);
            };
            var isLowerable = function (node) {
                if (node === undefined) {
                    return false;
                }
                return shouldBeLowered(node) && !hasLowerableParent(node);
            };
            return function (value, node) {
                if (!isPrimitive(value) && !isRewritten(value) && isLowerable(node)) {
                    return replaceNode(node);
                }
                return value;
            };
        };
        return LowerMetadataTransform;
    }());
    exports.LowerMetadataTransform = LowerMetadataTransform;
    function createExportTableFor(sourceFile) {
        var exportTable = new Set();
        // Lazily collect all the exports from the source file
        ts.forEachChild(sourceFile, function scan(node) {
            var e_1, _a;
            switch (node.kind) {
                case ts.SyntaxKind.ClassDeclaration:
                case ts.SyntaxKind.FunctionDeclaration:
                case ts.SyntaxKind.InterfaceDeclaration:
                    if ((ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) != 0) {
                        var classDeclaration = node;
                        var name = classDeclaration.name;
                        if (name)
                            exportTable.add(name.text);
                    }
                    break;
                case ts.SyntaxKind.VariableStatement:
                    var variableStatement = node;
                    try {
                        for (var _b = tslib_1.__values(variableStatement.declarationList.declarations), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var declaration = _c.value;
                            scan(declaration);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    break;
                case ts.SyntaxKind.VariableDeclaration:
                    var variableDeclaration = node;
                    if ((ts.getCombinedModifierFlags(variableDeclaration) & ts.ModifierFlags.Export) != 0 &&
                        variableDeclaration.name.kind == ts.SyntaxKind.Identifier) {
                        var name = variableDeclaration.name;
                        exportTable.add(name.text);
                    }
                    break;
                case ts.SyntaxKind.ExportDeclaration:
                    var exportDeclaration = node;
                    var moduleSpecifier = exportDeclaration.moduleSpecifier, exportClause = exportDeclaration.exportClause;
                    if (!moduleSpecifier && exportClause && ts.isNamedExports(exportClause)) {
                        exportClause.elements.forEach(function (spec) {
                            exportTable.add(spec.name.text);
                        });
                    }
            }
        });
        return exportTable;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93ZXJfZXhwcmVzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL3RyYW5zZm9ybWVycy9sb3dlcl9leHByZXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBdUU7SUFDdkUsK0JBQWlDO0lBRWpDLGtFQUEwSTtJQTZCMUksU0FBUyxLQUFLLENBQU8sS0FBVSxFQUFFLE1BQXNCO1FBQ3JELE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBUyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELG9GQUFvRjtJQUNwRixvRkFBb0Y7SUFDcEYsNkJBQTZCO0lBQzdCLFNBQVMsY0FBYyxDQUFDLElBQWE7UUFDbkMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RDLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztZQUN2QyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDL0IsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENB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QUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xDLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y3JlYXRlTG93ZXJlZFN5bWJvbCwgaXNMb3dlcmVkU3ltYm9sfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtDb2xsZWN0b3JPcHRpb25zLCBpc01ldGFkYXRhR2xvYmFsUmVmZXJlbmNlRXhwcmVzc2lvbiwgTWV0YWRhdGFDb2xsZWN0b3IsIE1ldGFkYXRhVmFsdWUsIE1vZHVsZU1ldGFkYXRhfSBmcm9tICcuLi9tZXRhZGF0YS9pbmRleCc7XG5cbmltcG9ydCB7TWV0YWRhdGFDYWNoZSwgTWV0YWRhdGFUcmFuc2Zvcm1lciwgVmFsdWVUcmFuc2Zvcm19IGZyb20gJy4vbWV0YWRhdGFfY2FjaGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvd2VyaW5nUmVxdWVzdCB7XG4gIGtpbmQ6IHRzLlN5bnRheEtpbmQ7XG4gIGxvY2F0aW9uOiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RMb2NhdGlvbk1hcCA9IE1hcDxudW1iZXIsIExvd2VyaW5nUmVxdWVzdD47XG5cbmNvbnN0IGVudW0gRGVjbGFyYXRpb25PcmRlciB7XG4gIEJlZm9yZVN0bXQsXG4gIEFmdGVyU3RtdFxufVxuXG5pbnRlcmZhY2UgRGVjbGFyYXRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIG5vZGU6IHRzLk5vZGU7XG4gIG9yZGVyOiBEZWNsYXJhdGlvbk9yZGVyO1xufVxuXG5pbnRlcmZhY2UgRGVjbGFyYXRpb25JbnNlcnQge1xuICBkZWNsYXJhdGlvbnM6IERlY2xhcmF0aW9uW107XG4gIHJlbGF0aXZlVG86IHRzLk5vZGU7XG59XG5cbmZ1bmN0aW9uIHRvTWFwPFQsIEs+KGl0ZW1zOiBUW10sIHNlbGVjdDogKGl0ZW06IFQpID0+IEspOiBNYXA8SywgVD4ge1xuICByZXR1cm4gbmV3IE1hcChpdGVtcy5tYXA8W0ssIFRdPihpID0+IFtzZWxlY3QoaSksIGldKSk7XG59XG5cbi8vIFdlIHdpbGwgbmV2ZXIgbG93ZXIgZXhwcmVzc2lvbnMgaW4gYSBuZXN0ZWQgbGV4aWNhbCBzY29wZSBzbyBhdm9pZCBlbnRlcmluZyB0aGVtLlxuLy8gVGhpcyBhbHNvIGF2b2lkcyBhIGJ1ZyBpbiBUeXBlU2NyaXB0IDIuMyB3aGVyZSB0aGUgbGV4aWNhbCBzY29wZXMgZ2V0IG91dCBvZiBzeW5jXG4vLyB3aGVuIHVzaW5nIHZpc2l0RWFjaENoaWxkLlxuZnVuY3Rpb24gaXNMZXhpY2FsU2NvcGUobm9kZTogdHMuTm9kZSk6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgIGNhc2UgdHMuU3ludGF4S2luZC5BcnJvd0Z1bmN0aW9uOlxuICAgIGNhc2UgdHMuU3ludGF4S2luZC5GdW5jdGlvbkV4cHJlc3Npb246XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLkZ1bmN0aW9uRGVjbGFyYXRpb246XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLkNsYXNzRXhwcmVzc2lvbjpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2xhc3NEZWNsYXJhdGlvbjpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuRnVuY3Rpb25UeXBlOlxuICAgIGNhc2UgdHMuU3ludGF4S2luZC5UeXBlTGl0ZXJhbDpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuQXJyYXlUeXBlOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Tb3VyY2VGaWxlKFxuICAgIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUsIHJlcXVlc3RzOiBSZXF1ZXN0TG9jYXRpb25NYXAsXG4gICAgY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KTogdHMuU291cmNlRmlsZSB7XG4gIGNvbnN0IGluc2VydHM6IERlY2xhcmF0aW9uSW5zZXJ0W10gPSBbXTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIHJhbmdlIG9mIGludGVyZXN0aW5nIGxvY2F0aW9ucy4gVGhlIHRyYW5zZm9ybSB3aWxsIG9ubHkgdmlzaXQgbm9kZXMgaW4gdGhpc1xuICAvLyByYW5nZSB0byBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZSBvbiBsYXJnZSBmaWxlcy5cbiAgY29uc3QgbG9jYXRpb25zID0gQXJyYXkuZnJvbShyZXF1ZXN0cy5rZXlzKCkpO1xuICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5sb2NhdGlvbnMpO1xuICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5sb2NhdGlvbnMpO1xuXG4gIC8vIFZpc2l0IG5vZGVzIG1hdGNoaW5nIHRoZSByZXF1ZXN0IGFuZCBzeW50aGV0aWMgbm9kZXMgYWRkZWQgYnkgdHNpY2tsZVxuICBmdW5jdGlvbiBzaG91bGRWaXNpdChwb3M6IG51bWJlciwgZW5kOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHBvcyA8PSBtYXggJiYgZW5kID49IG1pbikgfHwgcG9zID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaXRTb3VyY2VGaWxlKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiB0cy5Tb3VyY2VGaWxlIHtcbiAgICBmdW5jdGlvbiB0b3BMZXZlbFN0YXRlbWVudChub2RlOiB0cy5TdGF0ZW1lbnQpOiB0cy5TdGF0ZW1lbnQge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25zOiBEZWNsYXJhdGlvbltdID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIHZpc2l0Tm9kZShub2RlOiB0cy5Ob2RlKTogdHMuTm9kZSB7XG4gICAgICAgIC8vIEdldCB0aGUgb3JpZ2luYWwgbm9kZSBiZWZvcmUgdHNpY2tsZVxuICAgICAgICBjb25zdCB7cG9zLCBlbmQsIGtpbmQsIHBhcmVudDogb3JpZ2luYWxQYXJlbnR9ID0gdHMuZ2V0T3JpZ2luYWxOb2RlKG5vZGUpO1xuICAgICAgICBjb25zdCBub2RlUmVxdWVzdCA9IHJlcXVlc3RzLmdldChwb3MpO1xuICAgICAgICBpZiAobm9kZVJlcXVlc3QgJiYgbm9kZVJlcXVlc3Qua2luZCA9PSBraW5kICYmIG5vZGVSZXF1ZXN0LmVuZCA9PSBlbmQpIHtcbiAgICAgICAgICAvLyBUaGlzIG5vZGUgaXMgcmVxdWVzdGVkIHRvIGJlIHJld3JpdHRlbiBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZXhwb3J0ZWQgbmFtZS5cbiAgICAgICAgICBpZiAob3JpZ2luYWxQYXJlbnQgJiYgb3JpZ2luYWxQYXJlbnQua2luZCA9PT0gdHMuU3ludGF4S2luZC5WYXJpYWJsZURlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBBcyB0aGUgdmFsdWUgcmVwcmVzZW50cyB0aGUgd2hvbGUgaW5pdGlhbGl6ZXIgb2YgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbixcbiAgICAgICAgICAgIC8vIGp1c3QgcmVmZXIgdG8gdGhhdCB2YXJpYWJsZS4gVGhpcyBlLmcuIGhlbHBzIHRvIHByZXNlcnZlIGNsb3N1cmUgY29tbWVudHNcbiAgICAgICAgICAgIC8vIGF0IHRoZSByaWdodCBwbGFjZS5cbiAgICAgICAgICAgIGNvbnN0IHZhclBhcmVudCA9IG9yaWdpbmFsUGFyZW50IGFzIHRzLlZhcmlhYmxlRGVjbGFyYXRpb247XG4gICAgICAgICAgICBpZiAodmFyUGFyZW50Lm5hbWUua2luZCA9PT0gdHMuU3ludGF4S2luZC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhck5hbWUgPSB2YXJQYXJlbnQubmFtZS50ZXh0O1xuICAgICAgICAgICAgICBjb25zdCBleHBvcnROYW1lID0gbm9kZVJlcXVlc3QubmFtZTtcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgbm9kZTogdHMuY3JlYXRlSWRlbnRpZmllcih2YXJOYW1lKSxcbiAgICAgICAgICAgICAgICBvcmRlcjogRGVjbGFyYXRpb25PcmRlci5BZnRlclN0bXRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZWNvcmQgdGhhdCB0aGUgbm9kZSBuZWVkcyB0byBiZSBtb3ZlZCB0byBhbiBleHBvcnRlZCB2YXJpYWJsZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAgICAgICAgY29uc3QgZXhwb3J0TmFtZSA9IG5vZGVSZXF1ZXN0Lm5hbWU7XG4gICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe25hbWU6IGV4cG9ydE5hbWUsIG5vZGUsIG9yZGVyOiBEZWNsYXJhdGlvbk9yZGVyLkJlZm9yZVN0bXR9KTtcbiAgICAgICAgICByZXR1cm4gdHMuY3JlYXRlSWRlbnRpZmllcihleHBvcnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgaWYgKHNob3VsZFZpc2l0KHBvcywgZW5kKSAmJiAhaXNMZXhpY2FsU2NvcGUobm9kZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cy52aXNpdEVhY2hDaGlsZChub2RlLCB2aXNpdE5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgb3JpZ2luYWwgbm9kZSBiZWZvcmUgdHNpY2tsZVxuICAgICAgY29uc3Qge3BvcywgZW5kfSA9IHRzLmdldE9yaWdpbmFsTm9kZShub2RlKTtcbiAgICAgIGxldCByZXN1bHRTdG10OiB0cy5TdGF0ZW1lbnQ7XG4gICAgICBpZiAoc2hvdWxkVmlzaXQocG9zLCBlbmQpKSB7XG4gICAgICAgIHJlc3VsdFN0bXQgPSB0cy52aXNpdEVhY2hDaGlsZChub2RlLCB2aXNpdE5vZGUsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0U3RtdCA9IG5vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGluc2VydHMucHVzaCh7cmVsYXRpdmVUbzogcmVzdWx0U3RtdCwgZGVjbGFyYXRpb25zfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0U3RtdDtcbiAgICB9XG5cbiAgICBsZXQgbmV3U3RhdGVtZW50cyA9IHNvdXJjZUZpbGUuc3RhdGVtZW50cy5tYXAodG9wTGV2ZWxTdGF0ZW1lbnQpO1xuXG4gICAgaWYgKGluc2VydHMubGVuZ3RoKSB7XG4gICAgICAvLyBJbnNlcnQgdGhlIGRlY2xhcmF0aW9ucyByZWxhdGl2ZSB0byB0aGUgcmV3cml0dGVuIHN0YXRlbWVudCB0aGF0IHJlZmVyZW5jZXMgdGhlbS5cbiAgICAgIGNvbnN0IGluc2VydE1hcCA9IHRvTWFwKGluc2VydHMsIGkgPT4gaS5yZWxhdGl2ZVRvKTtcbiAgICAgIGNvbnN0IHRtcFN0YXRlbWVudHM6IHRzLlN0YXRlbWVudFtdID0gW107XG4gICAgICBuZXdTdGF0ZW1lbnRzLmZvckVhY2goc3RhdGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ID0gaW5zZXJ0TWFwLmdldChzdGF0ZW1lbnQpO1xuICAgICAgICBpZiAoaW5zZXJ0KSB7XG4gICAgICAgICAgY29uc3QgYmVmb3JlID0gaW5zZXJ0LmRlY2xhcmF0aW9ucy5maWx0ZXIoZCA9PiBkLm9yZGVyID09PSBEZWNsYXJhdGlvbk9yZGVyLkJlZm9yZVN0bXQpO1xuICAgICAgICAgIGlmIChiZWZvcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0bXBTdGF0ZW1lbnRzLnB1c2goY3JlYXRlVmFyaWFibGVTdGF0ZW1lbnRGb3JEZWNsYXJhdGlvbnMoYmVmb3JlKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcFN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gaW5zZXJ0LmRlY2xhcmF0aW9ucy5maWx0ZXIoZCA9PiBkLm9yZGVyID09PSBEZWNsYXJhdGlvbk9yZGVyLkFmdGVyU3RtdCk7XG4gICAgICAgICAgaWYgKGFmdGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdG1wU3RhdGVtZW50cy5wdXNoKGNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50Rm9yRGVjbGFyYXRpb25zKGFmdGVyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcFN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gSW5zZXJ0IGFuIGV4cG9ydHMgY2xhdXNlIHRvIGV4cG9ydCB0aGUgZGVjbGFyYXRpb25zXG4gICAgICB0bXBTdGF0ZW1lbnRzLnB1c2godHMuY3JlYXRlRXhwb3J0RGVjbGFyYXRpb24oXG4gICAgICAgICAgLyogZGVjb3JhdG9ycyAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICB0cy5jcmVhdGVOYW1lZEV4cG9ydHMoXG4gICAgICAgICAgICAgIGluc2VydHNcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgKGFjY3VtdWxhdG9yLCBpbnNlcnQpID0+IFsuLi5hY2N1bXVsYXRvciwgLi4uaW5zZXJ0LmRlY2xhcmF0aW9uc10sXG4gICAgICAgICAgICAgICAgICAgICAgW10gYXMgRGVjbGFyYXRpb25bXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPT4gdHMuY3JlYXRlRXhwb3J0U3BlY2lmaWVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBwcm9wZXJ0eU5hbWUgKi8gdW5kZWZpbmVkLCBkZWNsYXJhdGlvbi5uYW1lKSkpKSk7XG5cbiAgICAgIG5ld1N0YXRlbWVudHMgPSB0bXBTdGF0ZW1lbnRzO1xuICAgIH1cbiAgICAvLyBOb3RlOiBXZSBjYW5ub3QgdXNlIHRzLnVwZGF0ZVNvdXJjZWZpbGUgaGVyZSBhc1xuICAgIC8vIGl0IGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGRlY29yYXRvcnMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTczODRcbiAgICBjb25zdCBuZXdTZiA9IHRzLmdldE11dGFibGVDbG9uZShzb3VyY2VGaWxlKTtcbiAgICBpZiAoIShzb3VyY2VGaWxlLmZsYWdzICYgdHMuTm9kZUZsYWdzLlN5bnRoZXNpemVkKSkge1xuICAgICAgbmV3U2YuZmxhZ3MgJj0gfnRzLk5vZGVGbGFncy5TeW50aGVzaXplZDtcbiAgICB9XG4gICAgbmV3U2Yuc3RhdGVtZW50cyA9IHRzLnNldFRleHRSYW5nZSh0cy5jcmVhdGVOb2RlQXJyYXkobmV3U3RhdGVtZW50cyksIHNvdXJjZUZpbGUuc3RhdGVtZW50cyk7XG4gICAgcmV0dXJuIG5ld1NmO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0U291cmNlRmlsZShzb3VyY2VGaWxlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFyaWFibGVTdGF0ZW1lbnRGb3JEZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zOiBEZWNsYXJhdGlvbltdKTogdHMuVmFyaWFibGVTdGF0ZW1lbnQge1xuICBjb25zdCB2YXJEZWNscyA9IGRlY2xhcmF0aW9ucy5tYXAoXG4gICAgICBpID0+IHRzLmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb24oaS5uYW1lLCAvKiB0eXBlICovIHVuZGVmaW5lZCwgaS5ub2RlIGFzIHRzLkV4cHJlc3Npb24pKTtcbiAgcmV0dXJuIHRzLmNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCwgdHMuY3JlYXRlVmFyaWFibGVEZWNsYXJhdGlvbkxpc3QodmFyRGVjbHMsIHRzLk5vZGVGbGFncy5Db25zdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwcmVzc2lvbkxvd2VyaW5nVHJhbnNmb3JtRmFjdG9yeShcbiAgICByZXF1ZXN0c01hcDogUmVxdWVzdHNNYXAsIHByb2dyYW06IHRzLlByb2dyYW0pOiAoY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KSA9PlxuICAgIChzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKSA9PiB0cy5Tb3VyY2VGaWxlIHtcbiAgLy8gUmV0dXJuIHRoZSBmYWN0b3J5XG4gIHJldHVybiAoY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KSA9PiAoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IHRzLlNvdXJjZUZpbGUgPT4ge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIHRoZSBvcmlnaW5hbCBTb3VyY2VGaWxlIGZvciByZWFkaW5nIG1ldGFkYXRhLCBhbmQgbm90IHRoZSB0cmFuc2Zvcm1lZCBvbmUuXG4gICAgY29uc3Qgb3JpZ2luYWxGaWxlID0gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKHNvdXJjZUZpbGUuZmlsZU5hbWUpO1xuICAgIGlmIChvcmlnaW5hbEZpbGUpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RzID0gcmVxdWVzdHNNYXAuZ2V0UmVxdWVzdHMob3JpZ2luYWxGaWxlKTtcbiAgICAgIGlmIChyZXF1ZXN0cyAmJiByZXF1ZXN0cy5zaXplKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Tb3VyY2VGaWxlKHNvdXJjZUZpbGUsIHJlcXVlc3RzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZUZpbGU7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdHNNYXAge1xuICBnZXRSZXF1ZXN0cyhzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKTogUmVxdWVzdExvY2F0aW9uTWFwO1xufVxuXG5pbnRlcmZhY2UgTWV0YWRhdGFBbmRMb3dlcmluZ1JlcXVlc3RzIHtcbiAgbWV0YWRhdGE6IE1vZHVsZU1ldGFkYXRhfHVuZGVmaW5lZDtcbiAgcmVxdWVzdHM6IFJlcXVlc3RMb2NhdGlvbk1hcDtcbn1cblxuZnVuY3Rpb24gaXNFbGlnaWJsZUZvckxvd2VyaW5nKG5vZGU6IHRzLk5vZGV8dW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gIGlmIChub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Tb3VyY2VGaWxlOlxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkRlY29yYXRvcjpcbiAgICAgICAgLy8gTG93ZXIgZXhwcmVzc2lvbnMgdGhhdCBhcmUgbG9jYWwgdG8gdGhlIG1vZHVsZSBzY29wZSBvclxuICAgICAgICAvLyBpbiBhIGRlY29yYXRvci5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2xhc3NEZWNsYXJhdGlvbjpcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5JbnRlcmZhY2VEZWNsYXJhdGlvbjpcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5FbnVtRGVjbGFyYXRpb246XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRnVuY3Rpb25EZWNsYXJhdGlvbjpcbiAgICAgICAgLy8gRG9uJ3QgbG93ZXIgZXhwcmVzc2lvbnMgaW4gYSBkZWNsYXJhdGlvbi5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlZhcmlhYmxlRGVjbGFyYXRpb246XG4gICAgICAgIGNvbnN0IGlzRXhwb3J0ZWQgPSAodHMuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUgYXMgdHMuVmFyaWFibGVEZWNsYXJhdGlvbikgJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRzLk1vZGlmaWVyRmxhZ3MuRXhwb3J0KSA9PSAwO1xuICAgICAgICAvLyBUaGlzIG1pZ2h0IGJlIHVubmVjZXNzYXJ5LCBhcyB0aGUgdmFyaWFibGUgbWlnaHQgYmUgZXhwb3J0ZWQgYW5kIG9ubHkgdXNlZCBhcyBhIHJlZmVyZW5jZVxuICAgICAgICAvLyBpbiBhbm90aGVyIGV4cHJlc3Npb24uIEhvd2V2ZXIsIHRoZSB2YXJpYWJsZSBhbHNvIG1pZ2h0IGJlIGludm9sdmVkIGluIHByb3ZpZGVyXG4gICAgICAgIC8vIGRlZmluaXRpb25zLiBJZiB0aGF0J3MgdGhlIGNhc2UsIHRoZXJlIGlzIGEgc3BlY2lmaWMgdG9rZW4gKGBST1VURVNgKSB3aGljaCB0aGUgY29tcGlsZXJcbiAgICAgICAgLy8gYXR0ZW1wdHMgdG8gdW5kZXJzdGFuZCBkZWVwbHkuIFN1Yi1leHByZXNzaW9ucyB3aXRoaW4gdGhhdCB0b2tlbiAoYGxvYWRDaGlsZHJlbmAgZm9yXG4gICAgICAgIC8vIGV4YW1wbGUpIG1pZ2h0IGFsc28gcmVxdWlyZSBsb3dlcmluZyBldmVuIGlmIHRoZSB0b3AtbGV2ZWwgZGVjbGFyYXRpb24gaXMgYWxyZWFkeVxuICAgICAgICAvLyBwcm9wZXJseSBleHBvcnRlZC5cbiAgICAgICAgY29uc3QgdmFyTm9kZSA9IG5vZGUgYXMgdHMuVmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgICAgICAgcmV0dXJuIGlzRXhwb3J0ZWQgfHxcbiAgICAgICAgICAgICh2YXJOb2RlLmluaXRpYWxpemVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAodHMuaXNPYmplY3RMaXRlcmFsRXhwcmVzc2lvbih2YXJOb2RlLmluaXRpYWxpemVyKSB8fFxuICAgICAgICAgICAgICB0cy5pc0FycmF5TGl0ZXJhbEV4cHJlc3Npb24odmFyTm9kZS5pbml0aWFsaXplcikgfHxcbiAgICAgICAgICAgICAgdHMuaXNDYWxsRXhwcmVzc2lvbih2YXJOb2RlLmluaXRpYWxpemVyKSkpO1xuICAgIH1cbiAgICByZXR1cm4gaXNFbGlnaWJsZUZvckxvd2VyaW5nKG5vZGUucGFyZW50KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0KHZhbHVlKSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzUmV3cml0dGVuKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTWV0YWRhdGFHbG9iYWxSZWZlcmVuY2VFeHByZXNzaW9uKHZhbHVlKSAmJiBpc0xvd2VyZWRTeW1ib2wodmFsdWUubmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzTGl0ZXJhbEZpZWxkTmFtZWQobm9kZTogdHMuTm9kZSwgbmFtZXM6IFNldDxzdHJpbmc+KTogYm9vbGVhbiB7XG4gIGlmIChub2RlLnBhcmVudCAmJiBub2RlLnBhcmVudC5raW5kID09IHRzLlN5bnRheEtpbmQuUHJvcGVydHlBc3NpZ25tZW50KSB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBub2RlLnBhcmVudCBhcyB0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQ7XG4gICAgaWYgKHByb3BlcnR5LnBhcmVudCAmJiBwcm9wZXJ0eS5wYXJlbnQua2luZCA9PSB0cy5TeW50YXhLaW5kLk9iamVjdExpdGVyYWxFeHByZXNzaW9uICYmXG4gICAgICAgIHByb3BlcnR5Lm5hbWUgJiYgcHJvcGVydHkubmFtZS5raW5kID09IHRzLlN5bnRheEtpbmQuSWRlbnRpZmllcikge1xuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHkubmFtZSBhcyB0cy5JZGVudGlmaWVyO1xuICAgICAgcmV0dXJuIG5hbWVzLmhhcyhwcm9wZXJ0eU5hbWUudGV4dCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIExvd2VyTWV0YWRhdGFUcmFuc2Zvcm0gaW1wbGVtZW50cyBSZXF1ZXN0c01hcCwgTWV0YWRhdGFUcmFuc2Zvcm1lciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIGNhY2hlITogTWV0YWRhdGFDYWNoZTtcbiAgcHJpdmF0ZSByZXF1ZXN0cyA9IG5ldyBNYXA8c3RyaW5nLCBSZXF1ZXN0TG9jYXRpb25NYXA+KCk7XG4gIHByaXZhdGUgbG93ZXJhYmxlRmllbGROYW1lczogU2V0PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IobG93ZXJhYmxlRmllbGROYW1lczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmxvd2VyYWJsZUZpZWxkTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4obG93ZXJhYmxlRmllbGROYW1lcyk7XG4gIH1cblxuICAvLyBSZXF1ZXN0TWFwXG4gIGdldFJlcXVlc3RzKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiBSZXF1ZXN0TG9jYXRpb25NYXAge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnJlcXVlc3RzLmdldChzb3VyY2VGaWxlLmZpbGVOYW1lKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgLy8gRm9yY2UgdGhlIG1ldGFkYXRhIGZvciB0aGlzIHNvdXJjZSBmaWxlIHRvIGJlIGNvbGxlY3RlZCB3aGljaFxuICAgICAgLy8gd2lsbCByZWN1cnNpdmVseSBjYWxsIHN0YXJ0KCkgcG9wdWxhdGluZyB0aGUgcmVxdWVzdCBtYXA7XG4gICAgICB0aGlzLmNhY2hlLmdldE1ldGFkYXRhKHNvdXJjZUZpbGUpO1xuXG4gICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIHRoZSByZXF1ZXN0ZWQgbWV0YWRhdGEsIHRoZSBmaWxlIGlzIG5vdCBhIG1vZHVsZVxuICAgICAgLy8gb3IgaXMgYSBkZWNsYXJhdGlvbiBmaWxlIHNvIHJldHVybiBhbiBlbXB0eSBtYXAuXG4gICAgICByZXN1bHQgPSB0aGlzLnJlcXVlc3RzLmdldChzb3VyY2VGaWxlLmZpbGVOYW1lKSB8fCBuZXcgTWFwPG51bWJlciwgTG93ZXJpbmdSZXF1ZXN0PigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gTWV0YWRhdGFUcmFuc2Zvcm1lclxuICBjb25uZWN0KGNhY2hlOiBNZXRhZGF0YUNhY2hlKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgc3RhcnQoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IFZhbHVlVHJhbnNmb3JtfHVuZGVmaW5lZCB7XG4gICAgbGV0IGlkZW50TnVtYmVyID0gMDtcbiAgICBjb25zdCBmcmVzaElkZW50ID0gKCkgPT4gY3JlYXRlTG93ZXJlZFN5bWJvbChpZGVudE51bWJlcisrKTtcbiAgICBjb25zdCByZXF1ZXN0cyA9IG5ldyBNYXA8bnVtYmVyLCBMb3dlcmluZ1JlcXVlc3Q+KCk7XG4gICAgdGhpcy5yZXF1ZXN0cy5zZXQoc291cmNlRmlsZS5maWxlTmFtZSwgcmVxdWVzdHMpO1xuXG4gICAgY29uc3QgcmVwbGFjZU5vZGUgPSAobm9kZTogdHMuTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGZyZXNoSWRlbnQoKTtcbiAgICAgIHJlcXVlc3RzLnNldChub2RlLnBvcywge25hbWUsIGtpbmQ6IG5vZGUua2luZCwgbG9jYXRpb246IG5vZGUucG9zLCBlbmQ6IG5vZGUuZW5kfSk7XG4gICAgICByZXR1cm4ge19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBuYW1lfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNFeHBvcnRlZFN5bWJvbCA9ICgoKSA9PiB7XG4gICAgICBsZXQgZXhwb3J0VGFibGU6IFNldDxzdHJpbmc+O1xuICAgICAgcmV0dXJuIChub2RlOiB0cy5Ob2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLmtpbmQgPT0gdHMuU3ludGF4S2luZC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29uc3QgaWRlbnQgPSBub2RlIGFzIHRzLklkZW50aWZpZXI7XG5cbiAgICAgICAgICBpZiAoIWV4cG9ydFRhYmxlKSB7XG4gICAgICAgICAgICBleHBvcnRUYWJsZSA9IGNyZWF0ZUV4cG9ydFRhYmxlRm9yKHNvdXJjZUZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXhwb3J0VGFibGUuaGFzKGlkZW50LnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGlzRXhwb3J0ZWRQcm9wZXJ0eUFjY2VzcyA9IChub2RlOiB0cy5Ob2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSB0cy5TeW50YXhLaW5kLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbikge1xuICAgICAgICBjb25zdCBwYWUgPSBub2RlIGFzIHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbjtcbiAgICAgICAgaWYgKGlzRXhwb3J0ZWRTeW1ib2wocGFlLmV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzTG93ZXJhYmxlUGFyZW50Q2FjaGUgPSBuZXcgTWFwPHRzLk5vZGUsIGJvb2xlYW4+KCk7XG5cbiAgICBjb25zdCBzaG91bGRCZUxvd2VyZWQgPSAobm9kZTogdHMuTm9kZXx1bmRlZmluZWQpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IGxvd2VyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgaWYgKChub2RlLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuQXJyb3dGdW5jdGlvbiB8fFxuICAgICAgICAgICBub2RlLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuRnVuY3Rpb25FeHByZXNzaW9uKSAmJlxuICAgICAgICAgIGlzRWxpZ2libGVGb3JMb3dlcmluZyhub2RlKSkge1xuICAgICAgICBsb3dlcmFibGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBpc0xpdGVyYWxGaWVsZE5hbWVkKG5vZGUsIHRoaXMubG93ZXJhYmxlRmllbGROYW1lcykgJiYgaXNFbGlnaWJsZUZvckxvd2VyaW5nKG5vZGUpICYmXG4gICAgICAgICAgIWlzRXhwb3J0ZWRTeW1ib2wobm9kZSkgJiYgIWlzRXhwb3J0ZWRQcm9wZXJ0eUFjY2Vzcyhub2RlKSkge1xuICAgICAgICBsb3dlcmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvd2VyYWJsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzTG93ZXJhYmxlUGFyZW50ID0gKG5vZGU6IHRzLk5vZGV8dW5kZWZpbmVkKTogYm9vbGVhbiA9PiB7XG4gICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFzTG93ZXJhYmxlUGFyZW50Q2FjaGUuaGFzKG5vZGUpKSB7XG4gICAgICAgIGhhc0xvd2VyYWJsZVBhcmVudENhY2hlLnNldChcbiAgICAgICAgICAgIG5vZGUsIHNob3VsZEJlTG93ZXJlZChub2RlLnBhcmVudCkgfHwgaGFzTG93ZXJhYmxlUGFyZW50KG5vZGUucGFyZW50KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzTG93ZXJhYmxlUGFyZW50Q2FjaGUuZ2V0KG5vZGUpITtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMb3dlcmFibGUgPSAobm9kZTogdHMuTm9kZXx1bmRlZmluZWQpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNob3VsZEJlTG93ZXJlZChub2RlKSAmJiAhaGFzTG93ZXJhYmxlUGFyZW50KG5vZGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKHZhbHVlOiBNZXRhZGF0YVZhbHVlLCBub2RlOiB0cy5Ob2RlKTogTWV0YWRhdGFWYWx1ZSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSAmJiAhaXNSZXdyaXR0ZW4odmFsdWUpICYmIGlzTG93ZXJhYmxlKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlTm9kZShub2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4cG9ydFRhYmxlRm9yKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpOiBTZXQ8c3RyaW5nPiB7XG4gIGNvbnN0IGV4cG9ydFRhYmxlID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIC8vIExhemlseSBjb2xsZWN0IGFsbCB0aGUgZXhwb3J0cyBmcm9tIHRoZSBzb3VyY2UgZmlsZVxuICB0cy5mb3JFYWNoQ2hpbGQoc291cmNlRmlsZSwgZnVuY3Rpb24gc2Nhbihub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5DbGFzc0RlY2xhcmF0aW9uOlxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkZ1bmN0aW9uRGVjbGFyYXRpb246XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuSW50ZXJmYWNlRGVjbGFyYXRpb246XG4gICAgICAgIGlmICgodHMuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUgYXMgdHMuRGVjbGFyYXRpb24pICYgdHMuTW9kaWZpZXJGbGFncy5FeHBvcnQpICE9IDApIHtcbiAgICAgICAgICBjb25zdCBjbGFzc0RlY2xhcmF0aW9uID1cbiAgICAgICAgICAgICAgbm9kZSBhcyAodHMuQ2xhc3NEZWNsYXJhdGlvbiB8IHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24gfCB0cy5JbnRlcmZhY2VEZWNsYXJhdGlvbik7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGNsYXNzRGVjbGFyYXRpb24ubmFtZTtcbiAgICAgICAgICBpZiAobmFtZSkgZXhwb3J0VGFibGUuYWRkKG5hbWUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVmFyaWFibGVTdGF0ZW1lbnQ6XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlU3RhdGVtZW50ID0gbm9kZSBhcyB0cy5WYXJpYWJsZVN0YXRlbWVudDtcbiAgICAgICAgZm9yIChjb25zdCBkZWNsYXJhdGlvbiBvZiB2YXJpYWJsZVN0YXRlbWVudC5kZWNsYXJhdGlvbkxpc3QuZGVjbGFyYXRpb25zKSB7XG4gICAgICAgICAgc2NhbihkZWNsYXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVmFyaWFibGVEZWNsYXJhdGlvbjpcbiAgICAgICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5vZGUgYXMgdHMuVmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgICAgICAgaWYgKCh0cy5nZXRDb21iaW5lZE1vZGlmaWVyRmxhZ3ModmFyaWFibGVEZWNsYXJhdGlvbikgJiB0cy5Nb2RpZmllckZsYWdzLkV4cG9ydCkgIT0gMCAmJlxuICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbi5uYW1lLmtpbmQgPT0gdHMuU3ludGF4S2luZC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlRGVjbGFyYXRpb24ubmFtZSBhcyB0cy5JZGVudGlmaWVyO1xuICAgICAgICAgIGV4cG9ydFRhYmxlLmFkZChuYW1lLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkV4cG9ydERlY2xhcmF0aW9uOlxuICAgICAgICBjb25zdCBleHBvcnREZWNsYXJhdGlvbiA9IG5vZGUgYXMgdHMuRXhwb3J0RGVjbGFyYXRpb247XG4gICAgICAgIGNvbnN0IHttb2R1bGVTcGVjaWZpZXIsIGV4cG9ydENsYXVzZX0gPSBleHBvcnREZWNsYXJhdGlvbjtcbiAgICAgICAgaWYgKCFtb2R1bGVTcGVjaWZpZXIgJiYgZXhwb3J0Q2xhdXNlICYmIHRzLmlzTmFtZWRFeHBvcnRzKGV4cG9ydENsYXVzZSkpIHtcbiAgICAgICAgICBleHBvcnRDbGF1c2UuZWxlbWVudHMuZm9yRWFjaChzcGVjID0+IHtcbiAgICAgICAgICAgIGV4cG9ydFRhYmxlLmFkZChzcGVjLm5hbWUudGV4dCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZXhwb3J0VGFibGU7XG59XG4iXX0=