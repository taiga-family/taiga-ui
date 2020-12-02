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
const ast_helpers_1 = require("./ast_helpers");
const insert_import_1 = require("./insert_import");
const interfaces_1 = require("./interfaces");
const make_transform_1 = require("./make_transform");
function registerLocaleData(shouldTransform, getEntryModule, locale) {
    const standardTransform = function (sourceFile) {
        const ops = [];
        const entryModule = getEntryModule();
        if (!shouldTransform(sourceFile.fileName) || !entryModule || !locale) {
            return ops;
        }
        // Find all identifiers using the entry module class name.
        const entryModuleIdentifiers = ast_helpers_1.collectDeepNodes(sourceFile, ts.SyntaxKind.Identifier)
            .filter(identifier => identifier.text === entryModule.className);
        if (entryModuleIdentifiers.length === 0) {
            return [];
        }
        // Find the bootstrap call
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
            const firstNode = ast_helpers_1.getFirstNode(sourceFile);
            if (!firstNode) {
                return;
            }
            // Create the import node for the locale.
            const localeNamespaceId = ts.createUniqueName('__NgCli_locale_');
            ops.push(...insert_import_1.insertStarImport(sourceFile, localeNamespaceId, `@angular/common/locales/${locale}`, firstNode, true));
            // Create the import node for the registerLocaleData function.
            const regIdentifier = ts.createIdentifier(`registerLocaleData`);
            const regNamespaceId = ts.createUniqueName('__NgCli_locale_');
            ops.push(...insert_import_1.insertStarImport(sourceFile, regNamespaceId, '@angular/common', firstNode, true));
            // Create the register function call
            const registerFunctionCall = ts.createCall(ts.createPropertyAccess(regNamespaceId, regIdentifier), undefined, [ts.createPropertyAccess(localeNamespaceId, 'default')]);
            const registerFunctionStatement = ts.createStatement(registerFunctionCall);
            ops.push(new interfaces_1.AddNodeOperation(sourceFile, firstNode, registerFunctionStatement));
        });
        return ops;
    };
    return make_transform_1.makeTransform(standardTransform);
}
exports.registerLocaleData = registerLocaleData;
