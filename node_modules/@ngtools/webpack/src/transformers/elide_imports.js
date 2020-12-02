"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ts = require("typescript");
const interfaces_1 = require("./interfaces");
// Remove imports for which all identifiers have been removed.
// Needs type checker, and works even if it's not the first transformer.
// Works by removing imports for symbols whose identifiers have all been removed.
// Doesn't use the `symbol.declarations` because that previous transforms might have removed nodes
// but the type checker doesn't know.
// See https://github.com/Microsoft/TypeScript/issues/17552 for more information.
function elideImports(sourceFile, removedNodes, getTypeChecker, compilerOptions) {
    const ops = [];
    if (removedNodes.length === 0) {
        return [];
    }
    const typeChecker = getTypeChecker();
    // Collect all imports and used identifiers
    const usedSymbols = new Set();
    const imports = [];
    ts.forEachChild(sourceFile, function visit(node) {
        var _a, _b, _c, _d;
        // Skip removed nodes.
        if (removedNodes.includes(node)) {
            return;
        }
        // Consider types for 'implements' as unused.
        // A HeritageClause token can also be an 'AbstractKeyword'
        // which in that case we should not elide the import.
        if (ts.isHeritageClause(node) && node.token === ts.SyntaxKind.ImplementsKeyword) {
            return;
        }
        // Record import and skip
        if (ts.isImportDeclaration(node)) {
            imports.push(node);
            return;
        }
        let symbol;
        if (ts.isTypeReferenceNode(node)) {
            if (!compilerOptions.emitDecoratorMetadata) {
                // Skip and mark as unused if emitDecoratorMetadata is disabled.
                return;
            }
            const parent = node.parent;
            let isTypeReferenceForDecoratoredNode = false;
            switch (parent.kind) {
                case ts.SyntaxKind.GetAccessor:
                case ts.SyntaxKind.PropertyDeclaration:
                case ts.SyntaxKind.MethodDeclaration:
                    isTypeReferenceForDecoratoredNode = !!((_a = parent.decorators) === null || _a === void 0 ? void 0 : _a.length);
                    break;
                case ts.SyntaxKind.Parameter:
                    // - A constructor parameter can be decorated or the class itself is decorated.
                    // - The parent of the parameter is decorated example a method declaration or a set accessor.
                    // In all cases we need the type reference not to be elided.
                    isTypeReferenceForDecoratoredNode = !!(((_b = parent.decorators) === null || _b === void 0 ? void 0 : _b.length) ||
                        (ts.isSetAccessor(parent.parent) && !!((_c = parent.parent.decorators) === null || _c === void 0 ? void 0 : _c.length)) ||
                        (ts.isConstructorDeclaration(parent.parent) && !!((_d = parent.parent.parent.decorators) === null || _d === void 0 ? void 0 : _d.length)));
                    break;
            }
            if (isTypeReferenceForDecoratoredNode) {
                symbol = typeChecker.getSymbolAtLocation(node.typeName);
            }
        }
        else {
            switch (node.kind) {
                case ts.SyntaxKind.Identifier:
                    symbol = typeChecker.getSymbolAtLocation(node);
                    break;
                case ts.SyntaxKind.ExportSpecifier:
                    symbol = typeChecker.getExportSpecifierLocalTargetSymbol(node);
                    break;
                case ts.SyntaxKind.ShorthandPropertyAssignment:
                    symbol = typeChecker.getShorthandAssignmentValueSymbol(node);
                    break;
            }
        }
        if (symbol) {
            usedSymbols.add(symbol);
        }
        ts.forEachChild(node, visit);
    });
    if (imports.length === 0) {
        return [];
    }
    const isUnused = (node) => {
        const symbol = typeChecker.getSymbolAtLocation(node);
        return symbol && !usedSymbols.has(symbol);
    };
    for (const node of imports) {
        if (!node.importClause) {
            // "import 'abc';"
            continue;
        }
        const namedBindings = node.importClause.namedBindings;
        if (namedBindings && ts.isNamespaceImport(namedBindings)) {
            // "import * as XYZ from 'abc';"
            if (isUnused(namedBindings.name)) {
                ops.push(new interfaces_1.RemoveNodeOperation(sourceFile, node));
            }
        }
        else {
            const specifierOps = [];
            let clausesCount = 0;
            // "import { XYZ, ... } from 'abc';"
            if (namedBindings && ts.isNamedImports(namedBindings)) {
                let removedClausesCount = 0;
                clausesCount += namedBindings.elements.length;
                for (const specifier of namedBindings.elements) {
                    if (isUnused(specifier.name)) {
                        removedClausesCount++;
                        // in case we don't have any more namedImports we should remove the parent ie the {}
                        const nodeToRemove = clausesCount === removedClausesCount
                            ? specifier.parent
                            : specifier;
                        specifierOps.push(new interfaces_1.RemoveNodeOperation(sourceFile, nodeToRemove));
                    }
                }
            }
            // "import XYZ from 'abc';"
            if (node.importClause.name) {
                clausesCount++;
                if (isUnused(node.importClause.name)) {
                    specifierOps.push(new interfaces_1.RemoveNodeOperation(sourceFile, node.importClause.name));
                }
            }
            if (specifierOps.length === clausesCount) {
                ops.push(new interfaces_1.RemoveNodeOperation(sourceFile, node));
            }
            else {
                ops.push(...specifierOps);
            }
        }
    }
    return ops;
}
exports.elideImports = elideImports;
