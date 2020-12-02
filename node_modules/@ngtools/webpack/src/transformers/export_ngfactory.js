"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path_1 = require("path");
const ts = require("typescript");
const utils_1 = require("../utils");
const ast_helpers_1 = require("./ast_helpers");
const interfaces_1 = require("./interfaces");
const make_transform_1 = require("./make_transform");
function exportNgFactory(shouldTransform, getEntryModule) {
    const standardTransform = function (sourceFile) {
        const ops = [];
        const entryModule = getEntryModule();
        if (!shouldTransform(sourceFile.fileName) || !entryModule) {
            return ops;
        }
        // Find all identifiers using the entry module class name.
        const entryModuleIdentifiers = ast_helpers_1.collectDeepNodes(sourceFile, ts.SyntaxKind.Identifier)
            .filter(identifier => identifier.text === entryModule.className);
        if (entryModuleIdentifiers.length === 0) {
            return [];
        }
        const relativeEntryModulePath = path_1.relative(path_1.dirname(sourceFile.fileName), entryModule.path);
        const normalizedEntryModulePath = utils_1.forwardSlashPath(`./${relativeEntryModulePath}`);
        // Get the module path from the import.
        entryModuleIdentifiers.forEach((entryModuleIdentifier) => {
            if (!entryModuleIdentifier.parent
                || entryModuleIdentifier.parent.kind !== ts.SyntaxKind.ExportSpecifier) {
                return;
            }
            const exportSpec = entryModuleIdentifier.parent;
            const moduleSpecifier = exportSpec.parent
                && exportSpec.parent.parent
                && exportSpec.parent.parent.moduleSpecifier;
            if (!moduleSpecifier || moduleSpecifier.kind !== ts.SyntaxKind.StringLiteral) {
                return;
            }
            // Add the transform operations.
            const factoryClassName = entryModule.className + 'NgFactory';
            const factoryModulePath = normalizedEntryModulePath + '.ngfactory';
            const namedExports = ts.createNamedExports([ts.createExportSpecifier(undefined, ts.createIdentifier(factoryClassName))]);
            const newImport = ts.createExportDeclaration(undefined, undefined, namedExports, ts.createLiteral(factoryModulePath));
            const firstNode = ast_helpers_1.getFirstNode(sourceFile);
            if (firstNode) {
                ops.push(new interfaces_1.AddNodeOperation(sourceFile, firstNode, newImport));
            }
        });
        return ops;
    };
    return make_transform_1.makeTransform(standardTransform);
}
exports.exportNgFactory = exportNgFactory;
