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
const insert_import_1 = require("./insert_import");
const interfaces_1 = require("./interfaces");
const make_transform_1 = require("./make_transform");
function replaceServerBootstrap(shouldTransform, getEntryModule, getTypeChecker) {
    const standardTransform = function (sourceFile) {
        const ops = [];
        const entryModule = getEntryModule();
        if (!shouldTransform(sourceFile.fileName) || !entryModule) {
            return ops;
        }
        // Find all identifiers.
        const entryModuleIdentifiers = ast_helpers_1.collectDeepNodes(sourceFile, ts.SyntaxKind.Identifier)
            .filter(identifier => identifier.text === entryModule.className);
        if (entryModuleIdentifiers.length === 0) {
            return [];
        }
        const relativeEntryModulePath = path_1.relative(path_1.dirname(sourceFile.fileName), entryModule.path);
        const normalizedEntryModulePath = utils_1.forwardSlashPath(`./${relativeEntryModulePath}`);
        const factoryClassName = entryModule.className + 'NgFactory';
        const factoryModulePath = normalizedEntryModulePath + '.ngfactory';
        // Find the bootstrap calls.
        entryModuleIdentifiers.forEach(entryModuleIdentifier => {
            if (!entryModuleIdentifier.parent) {
                return;
            }
            if (entryModuleIdentifier.parent.kind !== ts.SyntaxKind.CallExpression &&
                entryModuleIdentifier.parent.kind !== ts.SyntaxKind.PropertyAssignment) {
                return;
            }
            if (entryModuleIdentifier.parent.kind === ts.SyntaxKind.CallExpression) {
                // Figure out if it's a `platformDynamicServer().bootstrapModule(AppModule)` call.
                const callExpr = entryModuleIdentifier.parent;
                if (callExpr.expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
                    const propAccessExpr = callExpr.expression;
                    if (!(propAccessExpr.name.text === 'bootstrapModule'
                        && propAccessExpr.expression.kind === ts.SyntaxKind.CallExpression)) {
                        return;
                    }
                    const bootstrapModuleIdentifier = propAccessExpr.name;
                    const innerCallExpr = propAccessExpr.expression;
                    if (!(innerCallExpr.expression.kind === ts.SyntaxKind.Identifier
                        && innerCallExpr.expression.text === 'platformDynamicServer')) {
                        return;
                    }
                    const platformDynamicServerIdentifier = innerCallExpr.expression;
                    const idPlatformServer = ts.createUniqueName('__NgCli_bootstrap_');
                    const idNgFactory = ts.createUniqueName('__NgCli_bootstrap_');
                    // Add the transform operations.
                    ops.push(
                    // Replace the entry module import.
                    ...insert_import_1.insertStarImport(sourceFile, idNgFactory, factoryModulePath), new interfaces_1.ReplaceNodeOperation(sourceFile, entryModuleIdentifier, ts.createPropertyAccess(idNgFactory, ts.createIdentifier(factoryClassName))), 
                    // Replace the platformBrowserDynamic import.
                    ...insert_import_1.insertStarImport(sourceFile, idPlatformServer, '@angular/platform-server'), new interfaces_1.ReplaceNodeOperation(sourceFile, platformDynamicServerIdentifier, ts.createPropertyAccess(idPlatformServer, 'platformServer')), new interfaces_1.ReplaceNodeOperation(sourceFile, bootstrapModuleIdentifier, ts.createIdentifier('bootstrapModuleFactory')));
                }
                else if (callExpr.expression.kind === ts.SyntaxKind.Identifier) {
                    // Figure out if it is renderModule
                    const identifierExpr = callExpr.expression;
                    if (identifierExpr.text !== 'renderModule') {
                        return;
                    }
                    const renderModuleIdentifier = identifierExpr;
                    const idPlatformServer = ts.createUniqueName('__NgCli_bootstrap_');
                    const idNgFactory = ts.createUniqueName('__NgCli_bootstrap_');
                    ops.push(
                    // Replace the entry module import.
                    ...insert_import_1.insertStarImport(sourceFile, idNgFactory, factoryModulePath), new interfaces_1.ReplaceNodeOperation(sourceFile, entryModuleIdentifier, ts.createPropertyAccess(idNgFactory, ts.createIdentifier(factoryClassName))), 
                    // Replace the renderModule import.
                    ...insert_import_1.insertStarImport(sourceFile, idPlatformServer, '@angular/platform-server'), new interfaces_1.ReplaceNodeOperation(sourceFile, renderModuleIdentifier, ts.createPropertyAccess(idPlatformServer, 'renderModuleFactory')));
                }
            }
            else if (entryModuleIdentifier.parent.kind === ts.SyntaxKind.PropertyAssignment) {
                // This is for things that accept a module as a property in a config object
                // .ie the express engine
                const idNgFactory = ts.createUniqueName('__NgCli_bootstrap_');
                ops.push(...insert_import_1.insertStarImport(sourceFile, idNgFactory, factoryModulePath), new interfaces_1.ReplaceNodeOperation(sourceFile, entryModuleIdentifier, ts.createPropertyAccess(idNgFactory, ts.createIdentifier(factoryClassName))));
            }
        });
        return ops;
    };
    return make_transform_1.makeTransform(standardTransform, getTypeChecker);
}
exports.replaceServerBootstrap = replaceServerBootstrap;
