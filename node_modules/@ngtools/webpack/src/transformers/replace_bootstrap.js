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
function replaceBootstrap(shouldTransform, getEntryModule, getTypeChecker, useFactories = true) {
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
        // Find the bootstrap calls.
        entryModuleIdentifiers.forEach(entryModuleIdentifier => {
            // Figure out if it's a `platformBrowserDynamic().bootstrapModule(AppModule)` call.
            if (!(entryModuleIdentifier.parent
                && entryModuleIdentifier.parent.kind === ts.SyntaxKind.CallExpression)) {
                return;
            }
            const callExpr = entryModuleIdentifier.parent;
            if (callExpr.expression.kind !== ts.SyntaxKind.PropertyAccessExpression) {
                return;
            }
            const propAccessExpr = callExpr.expression;
            if (propAccessExpr.name.text !== 'bootstrapModule'
                || propAccessExpr.expression.kind !== ts.SyntaxKind.CallExpression) {
                return;
            }
            const bootstrapModuleIdentifier = propAccessExpr.name;
            const innerCallExpr = propAccessExpr.expression;
            if (!(innerCallExpr.expression.kind === ts.SyntaxKind.Identifier
                && innerCallExpr.expression.text === 'platformBrowserDynamic')) {
                return;
            }
            const platformBrowserDynamicIdentifier = innerCallExpr.expression;
            const idPlatformBrowser = ts.createUniqueName('__NgCli_bootstrap_');
            const idNgFactory = ts.createUniqueName('__NgCli_bootstrap_');
            // Add the transform operations.
            const relativeEntryModulePath = path_1.relative(path_1.dirname(sourceFile.fileName), entryModule.path);
            let className = entryModule.className;
            let modulePath = utils_1.forwardSlashPath(`./${relativeEntryModulePath}`);
            let bootstrapIdentifier = 'bootstrapModule';
            if (useFactories) {
                className += 'NgFactory';
                modulePath += '.ngfactory';
                bootstrapIdentifier = 'bootstrapModuleFactory';
            }
            ops.push(
            // Replace the entry module import.
            ...insert_import_1.insertStarImport(sourceFile, idNgFactory, modulePath), new interfaces_1.ReplaceNodeOperation(sourceFile, entryModuleIdentifier, ts.createPropertyAccess(idNgFactory, ts.createIdentifier(className))), 
            // Replace the platformBrowserDynamic import.
            ...insert_import_1.insertStarImport(sourceFile, idPlatformBrowser, '@angular/platform-browser'), new interfaces_1.ReplaceNodeOperation(sourceFile, platformBrowserDynamicIdentifier, ts.createPropertyAccess(idPlatformBrowser, 'platformBrowser')), new interfaces_1.ReplaceNodeOperation(sourceFile, bootstrapModuleIdentifier, ts.createIdentifier(bootstrapIdentifier)));
        });
        return ops;
    };
    return make_transform_1.makeTransform(standardTransform, getTypeChecker);
}
exports.replaceBootstrap = replaceBootstrap;
