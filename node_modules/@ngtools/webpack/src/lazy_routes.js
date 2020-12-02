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
const refactor_1 = require("./refactor");
const utils_1 = require("./utils");
function _getContentOfKeyLiteral(_source, node) {
    if (node.kind == ts.SyntaxKind.Identifier) {
        return node.text;
    }
    else if (node.kind == ts.SyntaxKind.StringLiteral) {
        return node.text;
    }
    else {
        return null;
    }
}
function findLazyRoutes(filePath, host, program, compilerOptions) {
    if (!compilerOptions) {
        if (!program) {
            throw new Error('Must pass either program or compilerOptions to findLazyRoutes.');
        }
        compilerOptions = program.getCompilerOptions();
    }
    const fileName = utils_1.forwardSlashPath(refactor_1.resolve(filePath, host, compilerOptions));
    let sourceFile;
    if (program) {
        sourceFile = program.getSourceFile(fileName);
    }
    if (!sourceFile) {
        const content = host.readFile(fileName);
        if (content) {
            sourceFile = ts.createSourceFile(fileName, content, ts.ScriptTarget.Latest, true);
        }
    }
    if (!sourceFile) {
        throw new Error(`Source file not found: '${fileName}'.`);
    }
    const sf = sourceFile;
    return refactor_1.findAstNodes(null, sourceFile, ts.SyntaxKind.ObjectLiteralExpression, true)
        // Get all their property assignments.
        .map((node) => {
        return refactor_1.findAstNodes(node, sf, ts.SyntaxKind.PropertyAssignment, false);
    })
        // Take all `loadChildren` elements.
        .reduce((acc, props) => {
        return acc.concat(props.filter(literal => {
            return _getContentOfKeyLiteral(sf, literal.name) == 'loadChildren';
        }));
    }, [])
        // Get only string values.
        .filter((node) => node.initializer.kind == ts.SyntaxKind.StringLiteral)
        // Get the string value.
        .map((node) => node.initializer.text)
        // Map those to either [path, absoluteModulePath], or [path, null] if the module pointing to
        // does not exist.
        .map((routePath) => {
        const moduleName = routePath.split('#')[0];
        const compOptions = (program && program.getCompilerOptions()) || compilerOptions || {};
        const resolvedModuleName = moduleName[0] == '.'
            ? {
                resolvedModule: { resolvedFileName: path_1.join(path_1.dirname(filePath), moduleName) + '.ts' },
            }
            : ts.resolveModuleName(moduleName, filePath, compOptions, host);
        if (resolvedModuleName.resolvedModule
            && resolvedModuleName.resolvedModule.resolvedFileName
            && host.fileExists(resolvedModuleName.resolvedModule.resolvedFileName)) {
            return [routePath, resolvedModuleName.resolvedModule.resolvedFileName];
        }
        else {
            return [routePath, null];
        }
    })
        // Reduce to the LazyRouteMap map.
        .reduce((acc, [routePath, resolvedModuleName]) => {
        if (resolvedModuleName) {
            acc[routePath] = resolvedModuleName;
        }
        return acc;
    }, {});
}
exports.findLazyRoutes = findLazyRoutes;
