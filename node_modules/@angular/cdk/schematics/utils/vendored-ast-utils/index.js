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
        define("@angular/cdk/schematics/utils/vendored-ast-utils/index", ["require", "exports", "@angular-devkit/core", "@angular-devkit/schematics", "@schematics/angular/utility/change", "path", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    /*
     * Note: This file contains vendored TypeScript AST utils from "@schematics/angular".
     * Since there is no canonical place for common utils, and we don't want to use the AST
     * utils directly from "@schematics/angular" to avoid TypeScript version mismatches, we
     * copy the needed AST utils until there is a general place for such utility functions.
     *
     * Taken from:
     *   (1) https://github.com/angular/angular-cli/blob/30df1470a0f18989db336d50b55a79021ab64c85/packages/schematics/angular/utility/ng-ast-utils.ts
     *   (2) https://github.com/angular/angular-cli/blob/30df1470a0f18989db336d50b55a79021ab64c85/packages/schematics/angular/utility/ast-utils.ts
     */
    const core_1 = require("@angular-devkit/core");
    const schematics_1 = require("@angular-devkit/schematics");
    const change_1 = require("@schematics/angular/utility/change");
    const path_1 = require("path");
    const ts = require("typescript");
    /**
     * Add Import `import { symbolName } from fileName` if the import doesn't exit
     * already. Assumes fileToEdit can be resolved and accessed.
     * @param fileToEdit (file we want to add import to)
     * @param symbolName (item to import)
     * @param fileName (path to the file)
     * @param isDefault (if true, import follows style for importing default exports)
     * @return Change
     */
    function insertImport(source, fileToEdit, symbolName, fileName, isDefault = false) {
        const rootNode = source;
        const allImports = findNodes(rootNode, ts.SyntaxKind.ImportDeclaration);
        // get nodes that map to import statements from the file fileName
        const relevantImports = allImports.filter(node => {
            // StringLiteral of the ImportDeclaration is the import file (fileName in this case).
            const importFiles = node.getChildren()
                .filter(child => child.kind === ts.SyntaxKind.StringLiteral)
                .map(n => n.text);
            return importFiles.filter(file => file === fileName).length === 1;
        });
        if (relevantImports.length > 0) {
            let importsAsterisk = false;
            // imports from import file
            const imports = [];
            relevantImports.forEach(n => {
                Array.prototype.push.apply(imports, findNodes(n, ts.SyntaxKind.Identifier));
                if (findNodes(n, ts.SyntaxKind.AsteriskToken).length > 0) {
                    importsAsterisk = true;
                }
            });
            // if imports * from fileName, don't add symbolName
            if (importsAsterisk) {
                return new change_1.NoopChange();
            }
            const importTextNodes = imports.filter(n => n.text === symbolName);
            // insert import if it's not there
            if (importTextNodes.length === 0) {
                const fallbackPos = findNodes(relevantImports[0], ts.SyntaxKind.CloseBraceToken)[0].getStart() ||
                    findNodes(relevantImports[0], ts.SyntaxKind.FromKeyword)[0].getStart();
                return insertAfterLastOccurrence(imports, `, ${symbolName}`, fileToEdit, fallbackPos);
            }
            return new change_1.NoopChange();
        }
        // no such import declaration exists
        const useStrict = findNodes(rootNode, ts.SyntaxKind.StringLiteral)
            .filter((n) => n.text === 'use strict');
        let fallbackPos = 0;
        if (useStrict.length > 0) {
            fallbackPos = useStrict[0].end;
        }
        const open = isDefault ? '' : '{ ';
        const close = isDefault ? '' : ' }';
        // if there are no imports or 'use strict' statement, insert import at beginning of file
        const insertAtBeginning = allImports.length === 0 && useStrict.length === 0;
        const separator = insertAtBeginning ? '' : ';\n';
        const toInsert = `${separator}import ${open}${symbolName}${close}` +
            ` from '${fileName}'${insertAtBeginning ? ';\n' : ''}`;
        return insertAfterLastOccurrence(allImports, toInsert, fileToEdit, fallbackPos, ts.SyntaxKind.StringLiteral);
    }
    exports.insertImport = insertImport;
    /**
     * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
     * @param node
     * @param kind
     * @param max The maximum number of items to return.
     * @param recursive Continue looking for nodes of kind recursive until end
     * the last child even when node of kind has been found.
     * @return all nodes of kind, or [] if none is found
     */
    function findNodes(node, kind, max = Infinity, recursive = false) {
        if (!node || max == 0) {
            return [];
        }
        const arr = [];
        if (node.kind === kind) {
            arr.push(node);
            max--;
        }
        if (max > 0 && (recursive || node.kind !== kind)) {
            for (const child of node.getChildren()) {
                findNodes(child, kind, max).forEach(node => {
                    if (max > 0) {
                        arr.push(node);
                    }
                    max--;
                });
                if (max <= 0) {
                    break;
                }
            }
        }
        return arr;
    }
    exports.findNodes = findNodes;
    /**
     * Get all the nodes from a source.
     * @param sourceFile The source file object.
     * @returns {Observable<ts.Node>} An observable of all the nodes in the source.
     */
    function getSourceNodes(sourceFile) {
        const nodes = [sourceFile];
        const result = [];
        while (nodes.length > 0) {
            const node = nodes.shift();
            if (node) {
                result.push(node);
                if (node.getChildCount(sourceFile) >= 0) {
                    nodes.unshift(...node.getChildren());
                }
            }
        }
        return result;
    }
    exports.getSourceNodes = getSourceNodes;
    function findNode(node, kind, text) {
        if (node.kind === kind && node.getText() === text) {
            // throw new Error(node.getText());
            return node;
        }
        let foundNode = null;
        ts.forEachChild(node, childNode => {
            foundNode = foundNode || findNode(childNode, kind, text);
        });
        return foundNode;
    }
    exports.findNode = findNode;
    /**
     * Helper for sorting nodes.
     * @return function to sort nodes in increasing order of position in sourceFile
     */
    function nodesByPosition(first, second) {
        return first.getStart() - second.getStart();
    }
    /**
     * Insert `toInsert` after the last occurence of `ts.SyntaxKind[nodes[i].kind]`
     * or after the last of occurence of `syntaxKind` if the last occurence is a sub child
     * of ts.SyntaxKind[nodes[i].kind] and save the changes in file.
     *
     * @param nodes insert after the last occurence of nodes
     * @param toInsert string to insert
     * @param file file to insert changes into
     * @param fallbackPos position to insert if toInsert happens to be the first occurence
     * @param syntaxKind the ts.SyntaxKind of the subchildren to insert after
     * @return Change instance
     * @throw Error if toInsert is first occurence but fall back is not set
     */
    function insertAfterLastOccurrence(nodes, toInsert, file, fallbackPos, syntaxKind) {
        let lastItem;
        for (const node of nodes) {
            if (!lastItem || lastItem.getStart() < node.getStart()) {
                lastItem = node;
            }
        }
        if (syntaxKind && lastItem) {
            lastItem = findNodes(lastItem, syntaxKind).sort(nodesByPosition).pop();
        }
        if (!lastItem && fallbackPos == undefined) {
            throw new Error(`tried to insert ${toInsert} as first occurence with no fallback position`);
        }
        const lastItemPosition = lastItem ? lastItem.getEnd() : fallbackPos;
        return new change_1.InsertChange(file, lastItemPosition, toInsert);
    }
    exports.insertAfterLastOccurrence = insertAfterLastOccurrence;
    function _angularImportsFromNode(node, _sourceFile) {
        const ms = node.moduleSpecifier;
        let modulePath;
        switch (ms.kind) {
            case ts.SyntaxKind.StringLiteral:
                modulePath = ms.text;
                break;
            default:
                return {};
        }
        if (!modulePath.startsWith('@angular/')) {
            return {};
        }
        if (node.importClause) {
            if (node.importClause.name) {
                // This is of the form `import Name from 'path'`. Ignore.
                return {};
            }
            else if (node.importClause.namedBindings) {
                const nb = node.importClause.namedBindings;
                if (nb.kind == ts.SyntaxKind.NamespaceImport) {
                    // This is of the form `import * as name from 'path'`. Return `name.`.
                    return {
                        [nb.name.text + '.']: modulePath,
                    };
                }
                else {
                    // This is of the form `import {a,b,c} from 'path'`
                    const namedImports = nb;
                    return namedImports.elements
                        .map((is) => is.propertyName ? is.propertyName.text : is.name.text)
                        .reduce((acc, curr) => {
                        acc[curr] = modulePath;
                        return acc;
                    }, {});
                }
            }
            return {};
        }
        else {
            // This is of the form `import 'path';`. Nothing to do.
            return {};
        }
    }
    function getDecoratorMetadata(source, identifier, module) {
        const angularImports = findNodes(source, ts.SyntaxKind.ImportDeclaration)
            .map((node) => _angularImportsFromNode(node, source))
            .reduce((acc, current) => {
            for (const key of Object.keys(current)) {
                acc[key] = current[key];
            }
            return acc;
        }, {});
        return getSourceNodes(source)
            .filter(node => {
            return node.kind == ts.SyntaxKind.Decorator
                && node.expression.kind == ts.SyntaxKind.CallExpression;
        })
            .map(node => node.expression)
            .filter(expr => {
            if (expr.expression.kind == ts.SyntaxKind.Identifier) {
                const id = expr.expression;
                return id.text == identifier && angularImports[id.text] === module;
            }
            else if (expr.expression.kind == ts.SyntaxKind.PropertyAccessExpression) {
                // This covers foo.NgModule when importing * as foo.
                const paExpr = expr.expression;
                // If the left expression is not an identifier, just give up at that point.
                if (paExpr.expression.kind !== ts.SyntaxKind.Identifier) {
                    return false;
                }
                const id = paExpr.name.text;
                const moduleId = paExpr.expression.text;
                return id === identifier && (angularImports[moduleId + '.'] === module);
            }
            return false;
        })
            .filter(expr => expr.arguments[0]
            && expr.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression)
            .map(expr => expr.arguments[0]);
    }
    exports.getDecoratorMetadata = getDecoratorMetadata;
    function getMetadataField(node, metadataField) {
        return node.properties
            .filter(prop => ts.isPropertyAssignment(prop))
            // Filter out every fields that's not "metadataField". Also handles string literals
            // (but not expressions).
            .filter(({ name }) => {
            return (ts.isIdentifier(name) || ts.isStringLiteral(name))
                && name.getText() === metadataField;
        });
    }
    exports.getMetadataField = getMetadataField;
    function addSymbolToNgModuleMetadata(source, ngModulePath, metadataField, symbolName, importPath = null) {
        const nodes = getDecoratorMetadata(source, 'NgModule', '@angular/core');
        let node = nodes[0]; // tslint:disable-line:no-any
        // Find the decorator declaration.
        if (!node) {
            return [];
        }
        // Get all the children property assignment of object literals.
        const matchingProperties = getMetadataField(node, metadataField);
        // Get the last node of the array literal.
        if (!matchingProperties) {
            return [];
        }
        if (matchingProperties.length == 0) {
            // We haven't found the field in the metadata declaration. Insert a new field.
            const expr = node;
            let position;
            let toInsert;
            if (expr.properties.length == 0) {
                position = expr.getEnd() - 1;
                toInsert = `  ${metadataField}: [${symbolName}]\n`;
            }
            else {
                node = expr.properties[expr.properties.length - 1];
                position = node.getEnd();
                // Get the indentation of the last element, if any.
                const text = node.getFullText(source);
                const matches = text.match(/^\r?\n\s*/);
                if (matches && matches.length > 0) {
                    toInsert = `,${matches[0]}${metadataField}: [${symbolName}]`;
                }
                else {
                    toInsert = `, ${metadataField}: [${symbolName}]`;
                }
            }
            if (importPath !== null) {
                return [
                    new change_1.InsertChange(ngModulePath, position, toInsert),
                    insertImport(source, ngModulePath, symbolName.replace(/\..*$/, ''), importPath),
                ];
            }
            else {
                return [new change_1.InsertChange(ngModulePath, position, toInsert)];
            }
        }
        const assignment = matchingProperties[0];
        // If it's not an array, nothing we can do really.
        if (assignment.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
            return [];
        }
        const arrLiteral = assignment.initializer;
        if (arrLiteral.elements.length == 0) {
            // Forward the property.
            node = arrLiteral;
        }
        else {
            node = arrLiteral.elements;
        }
        if (!node) {
            // tslint:disable-next-line: no-console
            console.error('No app module found. Please add your new class to your component.');
            return [];
        }
        if (Array.isArray(node)) {
            const nodeArray = node;
            const symbolsArray = nodeArray.map(node => node.getText());
            if (symbolsArray.includes(symbolName)) {
                return [];
            }
            node = node[node.length - 1];
        }
        let toInsert;
        let position = node.getEnd();
        if (node.kind == ts.SyntaxKind.ObjectLiteralExpression) {
            // We haven't found the field in the metadata declaration. Insert a new
            // field.
            const expr = node;
            if (expr.properties.length == 0) {
                position = expr.getEnd() - 1;
                toInsert = `  ${symbolName}\n`;
            }
            else {
                // Get the indentation of the last element, if any.
                const text = node.getFullText(source);
                if (text.match(/^\r?\r?\n/)) {
                    toInsert = `,${text.match(/^\r?\n\s*/)[0]}${symbolName}`;
                }
                else {
                    toInsert = `, ${symbolName}`;
                }
            }
        }
        else if (node.kind == ts.SyntaxKind.ArrayLiteralExpression) {
            // We found the field but it's empty. Insert it just before the `]`.
            position--;
            toInsert = `${symbolName}`;
        }
        else {
            // Get the indentation of the last element, if any.
            const text = node.getFullText(source);
            if (text.match(/^\r?\n/)) {
                toInsert = `,${text.match(/^\r?\n(\r?)\s*/)[0]}${symbolName}`;
            }
            else {
                toInsert = `, ${symbolName}`;
            }
        }
        if (importPath !== null) {
            return [
                new change_1.InsertChange(ngModulePath, position, toInsert),
                insertImport(source, ngModulePath, symbolName.replace(/\..*$/, ''), importPath),
            ];
        }
        return [new change_1.InsertChange(ngModulePath, position, toInsert)];
    }
    exports.addSymbolToNgModuleMetadata = addSymbolToNgModuleMetadata;
    /**
     * Custom function to insert a declaration (component, pipe, directive)
     * into NgModule declarations. It also imports the component.
     */
    function addDeclarationToModule(source, modulePath, classifiedName, importPath) {
        return addSymbolToNgModuleMetadata(source, modulePath, 'declarations', classifiedName, importPath);
    }
    exports.addDeclarationToModule = addDeclarationToModule;
    /**
     * Custom function to insert an NgModule into NgModule imports. It also imports the module.
     */
    function addImportToModule(source, modulePath, classifiedName, importPath) {
        return addSymbolToNgModuleMetadata(source, modulePath, 'imports', classifiedName, importPath);
    }
    exports.addImportToModule = addImportToModule;
    /**
     * Custom function to insert an export into NgModule. It also imports it.
     */
    function addExportToModule(source, modulePath, classifiedName, importPath) {
        return addSymbolToNgModuleMetadata(source, modulePath, 'exports', classifiedName, importPath);
    }
    exports.addExportToModule = addExportToModule;
    /**
     * Custom function to insert an entryComponent into NgModule. It also imports it.
     * @deprecated - Since version 9.0.0 with Ivy, entryComponents is no longer necessary.
     */
    function addEntryComponentToModule(source, modulePath, classifiedName, importPath) {
        return addSymbolToNgModuleMetadata(source, modulePath, 'entryComponents', classifiedName, importPath);
    }
    exports.addEntryComponentToModule = addEntryComponentToModule;
    function findBootstrapModuleCall(host, mainPath) {
        const mainBuffer = host.read(mainPath);
        if (!mainBuffer) {
            throw new schematics_1.SchematicsException(`Main file (${mainPath}) not found`);
        }
        const mainText = mainBuffer.toString('utf-8');
        const source = ts.createSourceFile(mainPath, mainText, ts.ScriptTarget.Latest, true);
        const allNodes = getSourceNodes(source);
        let bootstrapCall = null;
        for (const node of allNodes) {
            let bootstrapCallNode = null;
            bootstrapCallNode = findNode(node, ts.SyntaxKind.Identifier, 'bootstrapModule');
            // Walk up the parent until CallExpression is found.
            while (bootstrapCallNode && bootstrapCallNode.parent
                && bootstrapCallNode.parent.kind !== ts.SyntaxKind.CallExpression) {
                bootstrapCallNode = bootstrapCallNode.parent;
            }
            if (bootstrapCallNode !== null &&
                bootstrapCallNode.parent !== undefined &&
                bootstrapCallNode.parent.kind === ts.SyntaxKind.CallExpression) {
                bootstrapCall = bootstrapCallNode.parent;
                break;
            }
        }
        return bootstrapCall;
    }
    exports.findBootstrapModuleCall = findBootstrapModuleCall;
    function findBootstrapModulePath(host, mainPath) {
        const bootstrapCall = findBootstrapModuleCall(host, mainPath);
        if (!bootstrapCall) {
            throw new schematics_1.SchematicsException('Bootstrap call not found');
        }
        const bootstrapModule = bootstrapCall.arguments[0];
        const mainBuffer = host.read(mainPath);
        if (!mainBuffer) {
            throw new schematics_1.SchematicsException(`Client app main file (${mainPath}) not found`);
        }
        const mainText = mainBuffer.toString('utf-8');
        const source = ts.createSourceFile(mainPath, mainText, ts.ScriptTarget.Latest, true);
        const allNodes = getSourceNodes(source);
        const bootstrapModuleRelativePath = allNodes
            .filter(node => node.kind === ts.SyntaxKind.ImportDeclaration)
            .filter(imp => {
            return findNode(imp, ts.SyntaxKind.Identifier, bootstrapModule.getText());
        })
            .map((imp) => {
            const modulePathStringLiteral = imp.moduleSpecifier;
            return modulePathStringLiteral.text;
        })[0];
        return bootstrapModuleRelativePath;
    }
    exports.findBootstrapModulePath = findBootstrapModulePath;
    function getAppModulePath(host, mainPath) {
        const moduleRelativePath = findBootstrapModulePath(host, mainPath);
        const mainDir = path_1.dirname(mainPath);
        const modulePath = core_1.normalize(`/${mainDir}/${moduleRelativePath}.ts`);
        return modulePath;
    }
    exports.getAppModulePath = getAppModulePath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvdmVuZG9yZWQtYXN0LXV0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUJBQWlCO0lBRWpCOzs7Ozs7Ozs7T0FTRztJQUVILCtDQUErQztJQUMvQywyREFBcUU7SUFDckUsK0RBQW9GO0lBQ3BGLCtCQUE2QjtJQUU3QixpQ0FBaUM7SUFFakM7Ozs7Ozs7O09BUUc7SUFDSCxTQUFnQixZQUFZLENBQUMsTUFBcUIsRUFBRSxVQUFrQixFQUFFLFVBQWtCLEVBQzdELFFBQWdCLEVBQUUsU0FBUyxHQUFHLEtBQUs7UUFDOUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXhFLGlFQUFpRTtRQUNqRSxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLHFGQUFxRjtZQUNyRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO2lCQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2lCQUMzRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTFDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxlQUFlLENBQUMs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QUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQTNCRCwwREEyQkM7SUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFVLEVBQUUsUUFBZ0I7UUFDM0QsTUFBTSxrQkFBa0IsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsY0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLGdCQUFTLENBQUMsSUFBSSxPQUFPLElBQUksa0JBQWtCLEtBQUssQ0FBQyxDQUFDO1FBRXJFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFORCw0Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG4vKlxuICogTm90ZTogVGhpcyBmaWxlIGNvbnRhaW5zIHZlbmRvcmVkIFR5cGVTY3JpcHQgQVNUIHV0aWxzIGZyb20gXCJAc2NoZW1hdGljcy9hbmd1bGFyXCIuXG4gKiBTaW5jZSB0aGVyZSBpcyBubyBjYW5vbmljYWwgcGxhY2UgZm9yIGNvbW1vbiB1dGlscywgYW5kIHdlIGRvbid0IHdhbnQgdG8gdXNlIHRoZSBBU1RcbiAqIHV0aWxzIGRpcmVjdGx5IGZyb20gXCJAc2NoZW1hdGljcy9hbmd1bGFyXCIgdG8gYXZvaWQgVHlwZVNjcmlwdCB2ZXJzaW9uIG1pc21hdGNoZXMsIHdlXG4gKiBjb3B5IHRoZSBuZWVkZWQgQVNUIHV0aWxzIHVudGlsIHRoZXJlIGlzIGEgZ2VuZXJhbCBwbGFjZSBmb3Igc3VjaCB1dGlsaXR5IGZ1bmN0aW9ucy5cbiAqXG4gKiBUYWtlbiBmcm9tOlxuICogICAoMSkgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvYmxvYi8zMGRmMTQ3MGEwZjE4OTg5ZGIzMzZkNTBiNTVhNzkwMjFhYjY0Yzg1L3BhY2thZ2VzL3NjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L25nLWFzdC11dGlscy50c1xuICogICAoMikgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvYmxvYi8zMGRmMTQ3MGEwZjE4OTg5ZGIzMzZkNTBiNTVhNzkwMjFhYjY0Yzg1L3BhY2thZ2VzL3NjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L2FzdC11dGlscy50c1xuICovXG5cbmltcG9ydCB7bm9ybWFsaXplfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQge1NjaGVtYXRpY3NFeGNlcHRpb24sIFRyZWV9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7Q2hhbmdlLCBJbnNlcnRDaGFuZ2UsIE5vb3BDaGFuZ2V9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jaGFuZ2UnO1xuaW1wb3J0IHtkaXJuYW1lfSBmcm9tICdwYXRoJztcblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbi8qKlxuICogQWRkIEltcG9ydCBgaW1wb3J0IHsgc3ltYm9sTmFtZSB9IGZyb20gZmlsZU5hbWVgIGlmIHRoZSBpbXBvcnQgZG9lc24ndCBleGl0XG4gKiBhbHJlYWR5LiBBc3N1bWVzIGZpbGVUb0VkaXQgY2FuIGJlIHJlc29sdmVkIGFuZCBhY2Nlc3NlZC5cbiAqIEBwYXJhbSBmaWxlVG9FZGl0IChmaWxlIHdlIHdhbnQgdG8gYWRkIGltcG9ydCB0bylcbiAqIEBwYXJhbSBzeW1ib2xOYW1lIChpdGVtIHRvIGltcG9ydClcbiAqIEBwYXJhbSBmaWxlTmFtZSAocGF0aCB0byB0aGUgZmlsZSlcbiAqIEBwYXJhbSBpc0RlZmF1bHQgKGlmIHRydWUsIGltcG9ydCBmb2xsb3dzIHN0eWxlIGZvciBpbXBvcnRpbmcgZGVmYXVsdCBleHBvcnRzKVxuICogQHJldHVybiBDaGFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEltcG9ydChzb3VyY2U6IHRzLlNvdXJjZUZpbGUsIGZpbGVUb0VkaXQ6IHN0cmluZywgc3ltYm9sTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogc3RyaW5nLCBpc0RlZmF1bHQgPSBmYWxzZSk6IENoYW5nZSB7XG4gIGNvbnN0IHJvb3ROb2RlID0gc291cmNlO1xuICBjb25zdCBhbGxJbXBvcnRzID0gZmluZE5vZGVzKHJvb3ROb2RlLCB0cy5TeW50YXhLaW5kLkltcG9ydERlY2xhcmF0aW9uKTtcblxuICAvLyBnZXQgbm9kZXMgdGhhdCBtYXAgdG8gaW1wb3J0IHN0YXRlbWVudHMgZnJvbSB0aGUgZmlsZSBmaWxlTmFtZVxuICBjb25zdCByZWxldmFudEltcG9ydHMgPSBhbGxJbXBvcnRzLmZpbHRlcihub2RlID0+IHtcbiAgICAvLyBTdHJpbmdMaXRlcmFsIG9mIHRoZSBJbXBvcnREZWNsYXJhdGlvbiBpcyB0aGUgaW1wb3J0IGZpbGUgKGZpbGVOYW1lIGluIHRoaXMgY2FzZSkuXG4gICAgY29uc3QgaW1wb3J0RmlsZXMgPSBub2RlLmdldENoaWxkcmVuKClcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQua2luZCA9PT0gdHMuU3ludGF4S2luZC5TdHJpbmdMaXRlcmFsKVxuICAgICAgLm1hcChuID0+IChuIGFzIHRzLlN0cmluZ0xpdGVyYWwpLnRleHQpO1xuXG4gICAgcmV0dXJuIGltcG9ydEZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUgPT09IGZpbGVOYW1lKS5sZW5ndGggPT09IDE7XG4gIH0pO1xuXG4gIGlmIChyZWxldmFudEltcG9ydHMubGVuZ3RoID4gMCkge1xuICAgIGxldCBpbXBvcnRzQXN0ZXJpc2sgPSBmYWxzZTtcbiAgICAvLyBpbXBvcnRzIGZyb20gaW1wb3J0IGZpbGVcbiAgICBjb25zdCBpbXBvcnRzOiB0cy5Ob2RlW10gPSBbXTtcbiAgICByZWxldmFudEltcG9ydHMuZm9yRWFjaChuID0+IHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGltcG9ydHMsIGZpbmROb2RlcyhuLCB0cy5TeW50YXhLaW5kLklkZW50aWZpZXIpKTtcbiAgICAgIGlmIChmaW5kTm9kZXMobiwgdHMuU3ludGF4S2luZC5Bc3Rlcmlza1Rva2VuKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGltcG9ydHNBc3RlcmlzayA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBpZiBpbXBvcnRzICogZnJvbSBmaWxlTmFtZSwgZG9uJ3QgYWRkIHN5bWJvbE5hbWVcbiAgICBpZiAoaW1wb3J0c0FzdGVyaXNrKSB7XG4gICAgICByZXR1cm4gbmV3IE5vb3BDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBvcnRUZXh0Tm9kZXMgPSBpbXBvcnRzLmZpbHRlcihuID0+IChuIGFzIHRzLklkZW50aWZpZXIpLnRleHQgPT09IHN5bWJvbE5hbWUpO1xuXG4gICAgLy8gaW5zZXJ0IGltcG9ydCBpZiBpdCdzIG5vdCB0aGVyZVxuICAgIGlmIChpbXBvcnRUZXh0Tm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBmYWxsYmFja1BvcyA9XG4gICAgICAgIGZpbmROb2RlcyhyZWxldmFudEltcG9ydHNbMF0sIHRzLlN5bnRheEtpbmQuQ2xvc2VCcmFjZVRva2VuKVswXS5nZXRTdGFydCgpIHx8XG4gICAgICAgIGZpbmROb2RlcyhyZWxldmFudEltcG9ydHNbMF0sIHRzLlN5bnRheEtpbmQuRnJvbUtleXdvcmQpWzBdLmdldFN0YXJ0KCk7XG5cbiAgICAgIHJldHVybiBpbnNlcnRBZnRlckxhc3RPY2N1cnJlbmNlKGltcG9ydHMsIGAsICR7c3ltYm9sTmFtZX1gLCBmaWxlVG9FZGl0LCBmYWxsYmFja1Bvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBOb29wQ2hhbmdlKCk7XG4gIH1cblxuICAvLyBubyBzdWNoIGltcG9ydCBkZWNsYXJhdGlvbiBleGlzdHNcbiAgY29uc3QgdXNlU3RyaWN0ID0gZmluZE5vZGVzKHJvb3ROb2RlLCB0cy5TeW50YXhLaW5kLlN0cmluZ0xpdGVyYWwpXG4gICAgLmZpbHRlcigobjogdHMuU3RyaW5nTGl0ZXJhbCkgPT4gbi50ZXh0ID09PSAndXNlIHN0cmljdCcpO1xuICBsZXQgZmFsbGJhY2tQb3MgPSAwO1xuICBpZiAodXNlU3RyaWN0Lmxlbmd0aCA+IDApIHtcbiAgICBmYWxsYmFja1BvcyA9IHVzZVN0cmljdFswXS5lbmQ7XG4gIH1cbiAgY29uc3Qgb3BlbiA9IGlzRGVmYXVsdCA/ICcnIDogJ3sgJztcbiAgY29uc3QgY2xvc2UgPSBpc0RlZmF1bHQgPyAnJyA6ICcgfSc7XG4gIC8vIGlmIHRoZXJlIGFyZSBubyBpbXBvcnRzIG9yICd1c2Ugc3RyaWN0JyBzdGF0ZW1lbnQsIGluc2VydCBpbXBvcnQgYXQgYmVnaW5uaW5nIG9mIGZpbGVcbiAgY29uc3QgaW5zZXJ0QXRCZWdpbm5pbmcgPSBhbGxJbXBvcnRzLmxlbmd0aCA9PT0gMCAmJiB1c2VTdHJpY3QubGVuZ3RoID09PSAwO1xuICBjb25zdCBzZXBhcmF0b3IgPSBpbnNlcnRBdEJlZ2lubmluZyA/ICcnIDogJztcXG4nO1xuICBjb25zdCB0b0luc2VydCA9IGAke3NlcGFyYXRvcn1pbXBvcnQgJHtvcGVufSR7c3ltYm9sTmFtZX0ke2Nsb3NlfWAgK1xuICAgIGAgZnJvbSAnJHtmaWxlTmFtZX0nJHtpbnNlcnRBdEJlZ2lubmluZyA/ICc7XFxuJyA6ICcnfWA7XG5cbiAgcmV0dXJuIGluc2VydEFmdGVyTGFzdE9jY3VycmVuY2UoXG4gICAgYWxsSW1wb3J0cyxcbiAgICB0b0luc2VydCxcbiAgICBmaWxlVG9FZGl0LFxuICAgIGZhbGxiYWNrUG9zLFxuICAgIHRzLlN5bnRheEtpbmQuU3RyaW5nTGl0ZXJhbCxcbiAgKTtcbn1cblxuXG4vKipcbiAqIEZpbmQgYWxsIG5vZGVzIGZyb20gdGhlIEFTVCBpbiB0aGUgc3VidHJlZSBvZiBub2RlIG9mIFN5bnRheEtpbmQga2luZC5cbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0ga2luZFxuICogQHBhcmFtIG1heCBUaGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gcmV0dXJuLlxuICogQHBhcmFtIHJlY3Vyc2l2ZSBDb250aW51ZSBsb29raW5nIGZvciBub2RlcyBvZiBraW5kIHJlY3Vyc2l2ZSB1bnRpbCBlbmRcbiAqIHRoZSBsYXN0IGNoaWxkIGV2ZW4gd2hlbiBub2RlIG9mIGtpbmQgaGFzIGJlZW4gZm91bmQuXG4gKiBAcmV0dXJuIGFsbCBub2RlcyBvZiBraW5kLCBvciBbXSBpZiBub25lIGlzIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTm9kZXMobm9kZTogdHMuTm9kZSwga2luZDogdHMuU3ludGF4S2luZCwgbWF4ID0gSW5maW5pdHksIHJlY3Vyc2l2ZSA9IGZhbHNlKTogdHMuTm9kZVtdIHtcbiAgaWYgKCFub2RlIHx8IG1heCA9PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgYXJyOiB0cy5Ob2RlW10gPSBbXTtcbiAgaWYgKG5vZGUua2luZCA9PT0ga2luZCkge1xuICAgIGFyci5wdXNoKG5vZGUpO1xuICAgIG1heC0tO1xuICB9XG4gIGlmIChtYXggPiAwICYmIChyZWN1cnNpdmUgfHwgbm9kZS5raW5kICE9PSBraW5kKSkge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5nZXRDaGlsZHJlbigpKSB7XG4gICAgICBmaW5kTm9kZXMoY2hpbGQsIGtpbmQsIG1heCkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG1heCA+IDApIHtcbiAgICAgICAgICBhcnIucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXgtLTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWF4IDw9IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuXG4vKipcbiAqIEdldCBhbGwgdGhlIG5vZGVzIGZyb20gYSBzb3VyY2UuXG4gKiBAcGFyYW0gc291cmNlRmlsZSBUaGUgc291cmNlIGZpbGUgb2JqZWN0LlxuICogQHJldHVybnMge09ic2VydmFibGU8dHMuTm9kZT59IEFuIG9ic2VydmFibGUgb2YgYWxsIHRoZSBub2RlcyBpbiB0aGUgc291cmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlTm9kZXMoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IHRzLk5vZGVbXSB7XG4gIGNvbnN0IG5vZGVzOiB0cy5Ob2RlW10gPSBbc291cmNlRmlsZV07XG4gIGNvbnN0IHJlc3VsdDogdHMuTm9kZVtdID0gW107XG5cbiAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMuc2hpZnQoKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgIGlmIChub2RlLmdldENoaWxkQ291bnQoc291cmNlRmlsZSkgPj0gMCkge1xuICAgICAgICBub2Rlcy51bnNoaWZ0KC4uLm5vZGUuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb2RlKG5vZGU6IHRzLk5vZGUsIGtpbmQ6IHRzLlN5bnRheEtpbmQsIHRleHQ6IHN0cmluZyk6IHRzLk5vZGUgfCBudWxsIHtcbiAgaWYgKG5vZGUua2luZCA9PT0ga2luZCAmJiBub2RlLmdldFRleHQoKSA9PT0gdGV4dCkge1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihub2RlLmdldFRleHQoKSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBsZXQgZm91bmROb2RlOiB0cy5Ob2RlIHwgbnVsbCA9IG51bGw7XG4gIHRzLmZvckVhY2hDaGlsZChub2RlLCBjaGlsZE5vZGUgPT4ge1xuICAgIGZvdW5kTm9kZSA9IGZvdW5kTm9kZSB8fCBmaW5kTm9kZShjaGlsZE5vZGUsIGtpbmQsIHRleHQpO1xuICB9KTtcblxuICByZXR1cm4gZm91bmROb2RlO1xufVxuXG5cbi8qKlxuICogSGVscGVyIGZvciBzb3J0aW5nIG5vZGVzLlxuICogQHJldHVybiBmdW5jdGlvbiB0byBzb3J0IG5vZGVzIGluIGluY3JlYXNpbmcgb3JkZXIgb2YgcG9zaXRpb24gaW4gc291cmNlRmlsZVxuICovXG5mdW5jdGlvbiBub2Rlc0J5UG9zaXRpb24oZmlyc3Q6IHRzLk5vZGUsIHNlY29uZDogdHMuTm9kZSk6IG51bWJlciB7XG4gIHJldHVybiBmaXJzdC5nZXRTdGFydCgpIC0gc2Vjb25kLmdldFN0YXJ0KCk7XG59XG5cblxuLyoqXG4gKiBJbnNlcnQgYHRvSW5zZXJ0YCBhZnRlciB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYHRzLlN5bnRheEtpbmRbbm9kZXNbaV0ua2luZF1gXG4gKiBvciBhZnRlciB0aGUgbGFzdCBvZiBvY2N1cmVuY2Ugb2YgYHN5bnRheEtpbmRgIGlmIHRoZSBsYXN0IG9jY3VyZW5jZSBpcyBhIHN1YiBjaGlsZFxuICogb2YgdHMuU3ludGF4S2luZFtub2Rlc1tpXS5raW5kXSBhbmQgc2F2ZSB0aGUgY2hhbmdlcyBpbiBmaWxlLlxuICpcbiAqIEBwYXJhbSBub2RlcyBpbnNlcnQgYWZ0ZXIgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIG5vZGVzXG4gKiBAcGFyYW0gdG9JbnNlcnQgc3RyaW5nIHRvIGluc2VydFxuICogQHBhcmFtIGZpbGUgZmlsZSB0byBpbnNlcnQgY2hhbmdlcyBpbnRvXG4gKiBAcGFyYW0gZmFsbGJhY2tQb3MgcG9zaXRpb24gdG8gaW5zZXJ0IGlmIHRvSW5zZXJ0IGhhcHBlbnMgdG8gYmUgdGhlIGZpcnN0IG9jY3VyZW5jZVxuICogQHBhcmFtIHN5bnRheEtpbmQgdGhlIHRzLlN5bnRheEtpbmQgb2YgdGhlIHN1YmNoaWxkcmVuIHRvIGluc2VydCBhZnRlclxuICogQHJldHVybiBDaGFuZ2UgaW5zdGFuY2VcbiAqIEB0aHJvdyBFcnJvciBpZiB0b0luc2VydCBpcyBmaXJzdCBvY2N1cmVuY2UgYnV0IGZhbGwgYmFjayBpcyBub3Qgc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlckxhc3RPY2N1cnJlbmNlKG5vZGVzOiB0cy5Ob2RlW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0luc2VydDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tQb3M6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bnRheEtpbmQ/OiB0cy5TeW50YXhLaW5kKTogQ2hhbmdlIHtcbiAgbGV0IGxhc3RJdGVtOiB0cy5Ob2RlIHwgdW5kZWZpbmVkO1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBpZiAoIWxhc3RJdGVtIHx8IGxhc3RJdGVtLmdldFN0YXJ0KCkgPCBub2RlLmdldFN0YXJ0KCkpIHtcbiAgICAgIGxhc3RJdGVtID0gbm9kZTtcbiAgICB9XG4gIH1cbiAgaWYgKHN5bnRheEtpbmQgJiYgbGFzdEl0ZW0pIHtcbiAgICBsYXN0SXRlbSA9IGZpbmROb2RlcyhsYXN0SXRlbSwgc3ludGF4S2luZCkuc29ydChub2Rlc0J5UG9zaXRpb24pLnBvcCgpO1xuICB9XG4gIGlmICghbGFzdEl0ZW0gJiYgZmFsbGJhY2tQb3MgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB0cmllZCB0byBpbnNlcnQgJHt0b0luc2VydH0gYXMgZmlyc3Qgb2NjdXJlbmNlIHdpdGggbm8gZmFsbGJhY2sgcG9zaXRpb25gKTtcbiAgfVxuICBjb25zdCBsYXN0SXRlbVBvc2l0aW9uOiBudW1iZXIgPSBsYXN0SXRlbSA/IGxhc3RJdGVtLmdldEVuZCgpIDogZmFsbGJhY2tQb3M7XG5cbiAgcmV0dXJuIG5ldyBJbnNlcnRDaGFuZ2UoZmlsZSwgbGFzdEl0ZW1Qb3NpdGlvbiwgdG9JbnNlcnQpO1xufVxuXG5mdW5jdGlvbiBfYW5ndWxhckltcG9ydHNGcm9tTm9kZShub2RlOiB0cy5JbXBvcnREZWNsYXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKToge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9IHtcbiAgY29uc3QgbXMgPSBub2RlLm1vZHVsZVNwZWNpZmllcjtcbiAgbGV0IG1vZHVsZVBhdGg6IHN0cmluZztcbiAgc3dpdGNoIChtcy5raW5kKSB7XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLlN0cmluZ0xpdGVyYWw6XG4gICAgICBtb2R1bGVQYXRoID0gKG1zIGFzIHRzLlN0cmluZ0xpdGVyYWwpLnRleHQ7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKCFtb2R1bGVQYXRoLnN0YXJ0c1dpdGgoJ0Bhbmd1bGFyLycpKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKG5vZGUuaW1wb3J0Q2xhdXNlKSB7XG4gICAgaWYgKG5vZGUuaW1wb3J0Q2xhdXNlLm5hbWUpIHtcbiAgICAgIC8vIFRoaXMgaXMgb2YgdGhlIGZvcm0gYGltcG9ydCBOYW1lIGZyb20gJ3BhdGgnYC4gSWdub3JlLlxuICAgICAgcmV0dXJuIHt9O1xuICAgIH0gZWxzZSBpZiAobm9kZS5pbXBvcnRDbGF1c2UubmFtZWRCaW5kaW5ncykge1xuICAgICAgY29uc3QgbmIgPSBub2RlLmltcG9ydENsYXVzZS5uYW1lZEJpbmRpbmdzO1xuICAgICAgaWYgKG5iLmtpbmQgPT0gdHMuU3ludGF4S2luZC5OYW1lc3BhY2VJbXBvcnQpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBvZiB0aGUgZm9ybSBgaW1wb3J0ICogYXMgbmFtZSBmcm9tICdwYXRoJ2AuIFJldHVybiBgbmFtZS5gLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFsobmIgYXMgdHMuTmFtZXNwYWNlSW1wb3J0KS5uYW1lLnRleHQgKyAnLiddOiBtb2R1bGVQYXRoLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhpcyBpcyBvZiB0aGUgZm9ybSBgaW1wb3J0IHthLGIsY30gZnJvbSAncGF0aCdgXG4gICAgICAgIGNvbnN0IG5hbWVkSW1wb3J0cyA9IG5iIGFzIHRzLk5hbWVkSW1wb3J0cztcblxuICAgICAgICByZXR1cm4gbmFtZWRJbXBvcnRzLmVsZW1lbnRzXG4gICAgICAgICAgLm1hcCgoaXM6IHRzLkltcG9ydFNwZWNpZmllcikgPT4gaXMucHJvcGVydHlOYW1lID8gaXMucHJvcGVydHlOYW1lLnRleHQgOiBpcy5uYW1lLnRleHQpXG4gICAgICAgICAgLnJlZHVjZSgoYWNjOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ30sIGN1cnI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgYWNjW2N1cnJdID0gbW9kdWxlUGF0aDtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgb2YgdGhlIGZvcm0gYGltcG9ydCAncGF0aCc7YC4gTm90aGluZyB0byBkby5cbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlY29yYXRvck1ldGFkYXRhKHNvdXJjZTogdHMuU291cmNlRmlsZSwgaWRlbnRpZmllcjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogc3RyaW5nKTogdHMuTm9kZVtdIHtcbiAgY29uc3QgYW5ndWxhckltcG9ydHM6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfVxuICAgID0gZmluZE5vZGVzKHNvdXJjZSwgdHMuU3ludGF4S2luZC5JbXBvcnREZWNsYXJhdGlvbilcbiAgICAubWFwKChub2RlOiB0cy5JbXBvcnREZWNsYXJhdGlvbikgPT4gX2FuZ3VsYXJJbXBvcnRzRnJvbU5vZGUobm9kZSwgc291cmNlKSlcbiAgICAucmVkdWNlKChhY2M6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfSwgY3VycmVudDoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjdXJyZW50KSkge1xuICAgICAgICBhY2Nba2V5XSA9IGN1cnJlbnRba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgcmV0dXJuIGdldFNvdXJjZU5vZGVzKHNvdXJjZSlcbiAgICAuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUua2luZCA9PSB0cy5TeW50YXhLaW5kLkRlY29yYXRvclxuICAgICAgICAmJiAobm9kZSBhcyB0cy5EZWNvcmF0b3IpLmV4cHJlc3Npb24ua2luZCA9PSB0cy5TeW50YXhLaW5kLkNhbGxFeHByZXNzaW9uO1xuICAgIH0pXG4gICAgLm1hcChub2RlID0+IChub2RlIGFzIHRzLkRlY29yYXRvcikuZXhwcmVzc2lvbiBhcyB0cy5DYWxsRXhwcmVzc2lvbilcbiAgICAuZmlsdGVyKGV4cHIgPT4ge1xuICAgICAgaWYgKGV4cHIuZXhwcmVzc2lvbi5raW5kID09IHRzLlN5bnRheEtpbmQuSWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBpZCA9IGV4cHIuZXhwcmVzc2lvbiBhcyB0cy5JZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBpZC50ZXh0ID09IGlkZW50aWZpZXIgJiYgYW5ndWxhckltcG9ydHNbaWQudGV4dF0gPT09IG1vZHVsZTtcbiAgICAgIH0gZWxzZSBpZiAoZXhwci5leHByZXNzaW9uLmtpbmQgPT0gdHMuU3ludGF4S2luZC5Qcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24pIHtcbiAgICAgICAgLy8gVGhpcyBjb3ZlcnMgZm9vLk5nTW9kdWxlIHdoZW4gaW1wb3J0aW5nICogYXMgZm9vLlxuICAgICAgICBjb25zdCBwYUV4cHIgPSBleHByLmV4cHJlc3Npb24gYXMgdHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uO1xuICAgICAgICAvLyBJZiB0aGUgbGVmdCBleHByZXNzaW9uIGlzIG5vdCBhbiBpZGVudGlmaWVyLCBqdXN0IGdpdmUgdXAgYXQgdGhhdCBwb2ludC5cbiAgICAgICAgaWYgKHBhRXhwci5leHByZXNzaW9uLmtpbmQgIT09IHRzLlN5bnRheEtpbmQuSWRlbnRpZmllcikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlkID0gcGFFeHByLm5hbWUudGV4dDtcbiAgICAgICAgY29uc3QgbW9kdWxlSWQgPSAocGFFeHByLmV4cHJlc3Npb24gYXMgdHMuSWRlbnRpZmllcikudGV4dDtcblxuICAgICAgICByZXR1cm4gaWQgPT09IGlkZW50aWZpZXIgJiYgKGFuZ3VsYXJJbXBvcnRzW21vZHVsZUlkICsgJy4nXSA9PT0gbW9kdWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLmZpbHRlcihleHByID0+IGV4cHIuYXJndW1lbnRzWzBdXG4gICAgICAmJiBleHByLmFyZ3VtZW50c1swXS5raW5kID09IHRzLlN5bnRheEtpbmQuT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pXG4gICAgLm1hcChleHByID0+IGV4cHIuYXJndW1lbnRzWzBdIGFzIHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFkYXRhRmllbGQoXG4gIG5vZGU6IHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uLFxuICBtZXRhZGF0YUZpZWxkOiBzdHJpbmcsXG4pOiB0cy5PYmplY3RMaXRlcmFsRWxlbWVudFtdIHtcbiAgcmV0dXJuIG5vZGUucHJvcGVydGllc1xuICAgIC5maWx0ZXIocHJvcCA9PiB0cy5pc1Byb3BlcnR5QXNzaWdubWVudChwcm9wKSlcbiAgICAvLyBGaWx0ZXIgb3V0IGV2ZXJ5IGZpZWxkcyB0aGF0J3Mgbm90IFwibWV0YWRhdGFGaWVsZFwiLiBBbHNvIGhhbmRsZXMgc3RyaW5nIGxpdGVyYWxzXG4gICAgLy8gKGJ1dCBub3QgZXhwcmVzc2lvbnMpLlxuICAgIC5maWx0ZXIoKHsgbmFtZSB9OiB0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQpID0+IHtcbiAgICAgIHJldHVybiAodHMuaXNJZGVudGlmaWVyKG5hbWUpIHx8IHRzLmlzU3RyaW5nTGl0ZXJhbChuYW1lKSlcbiAgICAgICAgJiYgbmFtZS5nZXRUZXh0KCkgPT09IG1ldGFkYXRhRmllbGQ7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTeW1ib2xUb05nTW9kdWxlTWV0YWRhdGEoXG4gIHNvdXJjZTogdHMuU291cmNlRmlsZSxcbiAgbmdNb2R1bGVQYXRoOiBzdHJpbmcsXG4gIG1ldGFkYXRhRmllbGQ6IHN0cmluZyxcbiAgc3ltYm9sTmFtZTogc3RyaW5nLFxuICBpbXBvcnRQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbik6IENoYW5nZVtdIHtcbiAgY29uc3Qgbm9kZXMgPSBnZXREZWNvcmF0b3JNZXRhZGF0YShzb3VyY2UsICdOZ01vZHVsZScsICdAYW5ndWxhci9jb3JlJyk7XG4gIGxldCBub2RlOiBhbnkgPSBub2Rlc1swXTsgIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgLy8gRmluZCB0aGUgZGVjb3JhdG9yIGRlY2xhcmF0aW9uLlxuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBHZXQgYWxsIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBhc3NpZ25tZW50IG9mIG9iamVjdCBsaXRlcmFscy5cbiAgY29uc3QgbWF0Y2hpbmdQcm9wZXJ0aWVzID0gZ2V0TWV0YWRhdGFGaWVsZChcbiAgICBub2RlIGFzIHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uLFxuICAgIG1ldGFkYXRhRmllbGQsXG4gICk7XG5cbiAgLy8gR2V0IHRoZSBsYXN0IG5vZGUgb2YgdGhlIGFycmF5IGxpdGVyYWwuXG4gIGlmICghbWF0Y2hpbmdQcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChtYXRjaGluZ1Byb3BlcnRpZXMubGVuZ3RoID09IDApIHtcbiAgICAvLyBXZSBoYXZlbid0IGZvdW5kIHRoZSBmaWVsZCBpbiB0aGUgbWV0YWRhdGEgZGVjbGFyYXRpb24uIEluc2VydCBhIG5ldyBmaWVsZC5cbiAgICBjb25zdCBleHByID0gbm9kZSBhcyB0cy5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICBsZXQgcG9zaXRpb246IG51bWJlcjtcbiAgICBsZXQgdG9JbnNlcnQ6IHN0cmluZztcbiAgICBpZiAoZXhwci5wcm9wZXJ0aWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBwb3NpdGlvbiA9IGV4cHIuZ2V0RW5kKCkgLSAxO1xuICAgICAgdG9JbnNlcnQgPSBgICAke21ldGFkYXRhRmllbGR9OiBbJHtzeW1ib2xOYW1lfV1cXG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gZXhwci5wcm9wZXJ0aWVzW2V4cHIucHJvcGVydGllcy5sZW5ndGggLSAxXTtcbiAgICAgIHBvc2l0aW9uID0gbm9kZS5nZXRFbmQoKTtcbiAgICAgIC8vIEdldCB0aGUgaW5kZW50YXRpb24gb2YgdGhlIGxhc3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgY29uc3QgdGV4dCA9IG5vZGUuZ2V0RnVsbFRleHQoc291cmNlKTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKC9eXFxyP1xcblxccyovKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0b0luc2VydCA9IGAsJHttYXRjaGVzWzBdfSR7bWV0YWRhdGFGaWVsZH06IFske3N5bWJvbE5hbWV9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b0luc2VydCA9IGAsICR7bWV0YWRhdGFGaWVsZH06IFske3N5bWJvbE5hbWV9XWA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbXBvcnRQYXRoICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgSW5zZXJ0Q2hhbmdlKG5nTW9kdWxlUGF0aCwgcG9zaXRpb24sIHRvSW5zZXJ0KSxcbiAgICAgICAgaW5zZXJ0SW1wb3J0KHNvdXJjZSwgbmdNb2R1bGVQYXRoLCBzeW1ib2xOYW1lLnJlcGxhY2UoL1xcLi4qJC8sICcnKSwgaW1wb3J0UGF0aCksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW25ldyBJbnNlcnRDaGFuZ2UobmdNb2R1bGVQYXRoLCBwb3NpdGlvbiwgdG9JbnNlcnQpXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYXNzaWdubWVudCA9IG1hdGNoaW5nUHJvcGVydGllc1swXSBhcyB0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQ7XG5cbiAgLy8gSWYgaXQncyBub3QgYW4gYXJyYXksIG5vdGhpbmcgd2UgY2FuIGRvIHJlYWxseS5cbiAgaWYgKGFzc2lnbm1lbnQuaW5pdGlhbGl6ZXIua2luZCAhPT0gdHMuU3ludGF4S2luZC5BcnJheUxpdGVyYWxFeHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgYXJyTGl0ZXJhbCA9IGFzc2lnbm1lbnQuaW5pdGlhbGl6ZXIgYXMgdHMuQXJyYXlMaXRlcmFsRXhwcmVzc2lvbjtcbiAgaWYgKGFyckxpdGVyYWwuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAvLyBGb3J3YXJkIHRoZSBwcm9wZXJ0eS5cbiAgICBub2RlID0gYXJyTGl0ZXJhbDtcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gYXJyTGl0ZXJhbC5lbGVtZW50cztcbiAgfVxuXG4gIGlmICghbm9kZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGFwcCBtb2R1bGUgZm91bmQuIFBsZWFzZSBhZGQgeW91ciBuZXcgY2xhc3MgdG8geW91ciBjb21wb25lbnQuJyk7XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGNvbnN0IG5vZGVBcnJheSA9IG5vZGUgYXMge30gYXMgQXJyYXk8dHMuTm9kZT47XG4gICAgY29uc3Qgc3ltYm9sc0FycmF5ID0gbm9kZUFycmF5Lm1hcChub2RlID0+IG5vZGUuZ2V0VGV4dCgpKTtcbiAgICBpZiAoc3ltYm9sc0FycmF5LmluY2x1ZGVzKHN5bWJvbE5hbWUpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbm9kZSA9IG5vZGVbbm9kZS5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGxldCB0b0luc2VydDogc3RyaW5nO1xuICBsZXQgcG9zaXRpb24gPSBub2RlLmdldEVuZCgpO1xuICBpZiAobm9kZS5raW5kID09IHRzLlN5bnRheEtpbmQuT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pIHtcbiAgICAvLyBXZSBoYXZlbid0IGZvdW5kIHRoZSBmaWVsZCBpbiB0aGUgbWV0YWRhdGEgZGVjbGFyYXRpb24uIEluc2VydCBhIG5ld1xuICAgIC8vIGZpZWxkLlxuICAgIGNvbnN0IGV4cHIgPSBub2RlIGFzIHRzLk9iamVjdExpdGVyYWxFeHByZXNzaW9uO1xuICAgIGlmIChleHByLnByb3BlcnRpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHBvc2l0aW9uID0gZXhwci5nZXRFbmQoKSAtIDE7XG4gICAgICB0b0luc2VydCA9IGAgICR7c3ltYm9sTmFtZX1cXG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHZXQgdGhlIGluZGVudGF0aW9uIG9mIHRoZSBsYXN0IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgIGNvbnN0IHRleHQgPSBub2RlLmdldEZ1bGxUZXh0KHNvdXJjZSk7XG4gICAgICBpZiAodGV4dC5tYXRjaCgvXlxccj9cXHI/XFxuLykpIHtcbiAgICAgICAgdG9JbnNlcnQgPSBgLCR7dGV4dC5tYXRjaCgvXlxccj9cXG5cXHMqLylbMF19JHtzeW1ib2xOYW1lfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b0luc2VydCA9IGAsICR7c3ltYm9sTmFtZX1gO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlLmtpbmQgPT0gdHMuU3ludGF4S2luZC5BcnJheUxpdGVyYWxFeHByZXNzaW9uKSB7XG4gICAgLy8gV2UgZm91bmQgdGhlIGZpZWxkIGJ1dCBpdCdzIGVtcHR5LiBJbnNlcnQgaXQganVzdCBiZWZvcmUgdGhlIGBdYC5cbiAgICBwb3NpdGlvbi0tO1xuICAgIHRvSW5zZXJ0ID0gYCR7c3ltYm9sTmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgaW5kZW50YXRpb24gb2YgdGhlIGxhc3QgZWxlbWVudCwgaWYgYW55LlxuICAgIGNvbnN0IHRleHQgPSBub2RlLmdldEZ1bGxUZXh0KHNvdXJjZSk7XG4gICAgaWYgKHRleHQubWF0Y2goL15cXHI/XFxuLykpIHtcbiAgICAgIHRvSW5zZXJ0ID0gYCwke3RleHQubWF0Y2goL15cXHI/XFxuKFxccj8pXFxzKi8pWzBdfSR7c3ltYm9sTmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b0luc2VydCA9IGAsICR7c3ltYm9sTmFtZX1gO1xuICAgIH1cbiAgfVxuICBpZiAoaW1wb3J0UGF0aCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgSW5zZXJ0Q2hhbmdlKG5nTW9kdWxlUGF0aCwgcG9zaXRpb24sIHRvSW5zZXJ0KSxcbiAgICAgIGluc2VydEltcG9ydChzb3VyY2UsIG5nTW9kdWxlUGF0aCwgc3ltYm9sTmFtZS5yZXBsYWNlKC9cXC4uKiQvLCAnJyksIGltcG9ydFBhdGgpLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW25ldyBJbnNlcnRDaGFuZ2UobmdNb2R1bGVQYXRoLCBwb3NpdGlvbiwgdG9JbnNlcnQpXTtcbn1cblxuLyoqXG4gKiBDdXN0b20gZnVuY3Rpb24gdG8gaW5zZXJ0IGEgZGVjbGFyYXRpb24gKGNvbXBvbmVudCwgcGlwZSwgZGlyZWN0aXZlKVxuICogaW50byBOZ01vZHVsZSBkZWNsYXJhdGlvbnMuIEl0IGFsc28gaW1wb3J0cyB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVjbGFyYXRpb25Ub01vZHVsZShzb3VyY2U6IHRzLlNvdXJjZUZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVQYXRoOiBzdHJpbmcsIGNsYXNzaWZpZWROYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRQYXRoOiBzdHJpbmcpOiBDaGFuZ2VbXSB7XG4gIHJldHVybiBhZGRTeW1ib2xUb05nTW9kdWxlTWV0YWRhdGEoXG4gICAgc291cmNlLCBtb2R1bGVQYXRoLCAnZGVjbGFyYXRpb25zJywgY2xhc3NpZmllZE5hbWUsIGltcG9ydFBhdGgpO1xufVxuXG4vKipcbiAqIEN1c3RvbSBmdW5jdGlvbiB0byBpbnNlcnQgYW4gTmdNb2R1bGUgaW50byBOZ01vZHVsZSBpbXBvcnRzLiBJdCBhbHNvIGltcG9ydHMgdGhlIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcG9ydFRvTW9kdWxlKHNvdXJjZTogdHMuU291cmNlRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVQYXRoOiBzdHJpbmcsIGNsYXNzaWZpZWROYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0UGF0aDogc3RyaW5nKTogQ2hhbmdlW10ge1xuXG4gIHJldHVybiBhZGRTeW1ib2xUb05nTW9kdWxlTWV0YWRhdGEoc291cmNlLCBtb2R1bGVQYXRoLCAnaW1wb3J0cycsIGNsYXNzaWZpZWROYW1lLCBpbXBvcnRQYXRoKTtcbn1cblxuLyoqXG4gKiBDdXN0b20gZnVuY3Rpb24gdG8gaW5zZXJ0IGFuIGV4cG9ydCBpbnRvIE5nTW9kdWxlLiBJdCBhbHNvIGltcG9ydHMgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeHBvcnRUb01vZHVsZShzb3VyY2U6IHRzLlNvdXJjZUZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlUGF0aDogc3RyaW5nLCBjbGFzc2lmaWVkTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydFBhdGg6IHN0cmluZyk6IENoYW5nZVtdIHtcbiAgcmV0dXJuIGFkZFN5bWJvbFRvTmdNb2R1bGVNZXRhZGF0YShzb3VyY2UsIG1vZHVsZVBhdGgsICdleHBvcnRzJywgY2xhc3NpZmllZE5hbWUsIGltcG9ydFBhdGgpO1xufVxuXG4vKipcbiAqIEN1c3RvbSBmdW5jdGlvbiB0byBpbnNlcnQgYW4gZW50cnlDb21wb25lbnQgaW50byBOZ01vZHVsZS4gSXQgYWxzbyBpbXBvcnRzIGl0LlxuICogQGRlcHJlY2F0ZWQgLSBTaW5jZSB2ZXJzaW9uIDkuMC4wIHdpdGggSXZ5LCBlbnRyeUNvbXBvbmVudHMgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEVudHJ5Q29tcG9uZW50VG9Nb2R1bGUoc291cmNlOiB0cy5Tb3VyY2VGaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlUGF0aDogc3RyaW5nLCBjbGFzc2lmaWVkTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0UGF0aDogc3RyaW5nKTogQ2hhbmdlW10ge1xuICByZXR1cm4gYWRkU3ltYm9sVG9OZ01vZHVsZU1ldGFkYXRhKFxuICAgIHNvdXJjZSwgbW9kdWxlUGF0aCxcbiAgICAnZW50cnlDb21wb25lbnRzJywgY2xhc3NpZmllZE5hbWUsIGltcG9ydFBhdGgsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQm9vdHN0cmFwTW9kdWxlQ2FsbChob3N0OiBUcmVlLCBtYWluUGF0aDogc3RyaW5nKTogdHMuQ2FsbEV4cHJlc3Npb24gfCBudWxsIHtcbiAgY29uc3QgbWFpbkJ1ZmZlciA9IGhvc3QucmVhZChtYWluUGF0aCk7XG4gIGlmICghbWFpbkJ1ZmZlcikge1xuICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKGBNYWluIGZpbGUgKCR7bWFpblBhdGh9KSBub3QgZm91bmRgKTtcbiAgfVxuICBjb25zdCBtYWluVGV4dCA9IG1haW5CdWZmZXIudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIGNvbnN0IHNvdXJjZSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUobWFpblBhdGgsIG1haW5UZXh0LCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlKTtcblxuICBjb25zdCBhbGxOb2RlcyA9IGdldFNvdXJjZU5vZGVzKHNvdXJjZSk7XG5cbiAgbGV0IGJvb3RzdHJhcENhbGw6IHRzLkNhbGxFeHByZXNzaW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIGFsbE5vZGVzKSB7XG5cbiAgICBsZXQgYm9vdHN0cmFwQ2FsbE5vZGU6IHRzLk5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBib290c3RyYXBDYWxsTm9kZSA9IGZpbmROb2RlKG5vZGUsIHRzLlN5bnRheEtpbmQuSWRlbnRpZmllciwgJ2Jvb3RzdHJhcE1vZHVsZScpO1xuXG4gICAgLy8gV2FsayB1cCB0aGUgcGFyZW50IHVudGlsIENhbGxFeHByZXNzaW9uIGlzIGZvdW5kLlxuICAgIHdoaWxlIChib290c3RyYXBDYWxsTm9kZSAmJiBib290c3RyYXBDYWxsTm9kZS5wYXJlbnRcbiAgICAmJiBib290c3RyYXBDYWxsTm9kZS5wYXJlbnQua2luZCAhPT0gdHMuU3ludGF4S2luZC5DYWxsRXhwcmVzc2lvbikge1xuXG4gICAgICBib290c3RyYXBDYWxsTm9kZSA9IGJvb3RzdHJhcENhbGxOb2RlLnBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoYm9vdHN0cmFwQ2FsbE5vZGUgIT09IG51bGwgJiZcbiAgICAgIGJvb3RzdHJhcENhbGxOb2RlLnBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBib290c3RyYXBDYWxsTm9kZS5wYXJlbnQua2luZCA9PT0gdHMuU3ludGF4S2luZC5DYWxsRXhwcmVzc2lvbikge1xuICAgICAgYm9vdHN0cmFwQ2FsbCA9IGJvb3RzdHJhcENhbGxOb2RlLnBhcmVudCBhcyB0cy5DYWxsRXhwcmVzc2lvbjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib290c3RyYXBDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEJvb3RzdHJhcE1vZHVsZVBhdGgoaG9zdDogVHJlZSwgbWFpblBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGJvb3RzdHJhcENhbGwgPSBmaW5kQm9vdHN0cmFwTW9kdWxlQ2FsbChob3N0LCBtYWluUGF0aCk7XG4gIGlmICghYm9vdHN0cmFwQ2FsbCkge1xuICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKCdCb290c3RyYXAgY2FsbCBub3QgZm91bmQnKTtcbiAgfVxuXG4gIGNvbnN0IGJvb3RzdHJhcE1vZHVsZSA9IGJvb3RzdHJhcENhbGwuYXJndW1lbnRzWzBdO1xuXG4gIGNvbnN0IG1haW5CdWZmZXIgPSBob3N0LnJlYWQobWFpblBhdGgpO1xuICBpZiAoIW1haW5CdWZmZXIpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihgQ2xpZW50IGFwcCBtYWluIGZpbGUgKCR7bWFpblBhdGh9KSBub3QgZm91bmRgKTtcbiAgfVxuICBjb25zdCBtYWluVGV4dCA9IG1haW5CdWZmZXIudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIGNvbnN0IHNvdXJjZSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUobWFpblBhdGgsIG1haW5UZXh0LCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlKTtcbiAgY29uc3QgYWxsTm9kZXMgPSBnZXRTb3VyY2VOb2Rlcyhzb3VyY2UpO1xuICBjb25zdCBib290c3RyYXBNb2R1bGVSZWxhdGl2ZVBhdGggPSBhbGxOb2Rlc1xuICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuSW1wb3J0RGVjbGFyYXRpb24pXG4gICAgLmZpbHRlcihpbXAgPT4ge1xuICAgICAgcmV0dXJuIGZpbmROb2RlKGltcCwgdHMuU3ludGF4S2luZC5JZGVudGlmaWVyLCBib290c3RyYXBNb2R1bGUuZ2V0VGV4dCgpKTtcbiAgICB9KVxuICAgIC5tYXAoKGltcDogdHMuSW1wb3J0RGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1vZHVsZVBhdGhTdHJpbmdMaXRlcmFsID0gaW1wLm1vZHVsZVNwZWNpZmllciBhcyB0cy5TdHJpbmdMaXRlcmFsO1xuXG4gICAgICByZXR1cm4gbW9kdWxlUGF0aFN0cmluZ0xpdGVyYWwudGV4dDtcbiAgICB9KVswXTtcblxuICByZXR1cm4gYm9vdHN0cmFwTW9kdWxlUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwTW9kdWxlUGF0aChob3N0OiBUcmVlLCBtYWluUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbW9kdWxlUmVsYXRpdmVQYXRoID0gZmluZEJvb3RzdHJhcE1vZHVsZVBhdGgoaG9zdCwgbWFpblBhdGgpO1xuICBjb25zdCBtYWluRGlyID0gZGlybmFtZShtYWluUGF0aCk7XG4gIGNvbnN0IG1vZHVsZVBhdGggPSBub3JtYWxpemUoYC8ke21haW5EaXJ9LyR7bW9kdWxlUmVsYXRpdmVQYXRofS50c2ApO1xuXG4gIHJldHVybiBtb2R1bGVQYXRoO1xufVxuIl19