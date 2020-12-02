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
const replace_resources_1 = require("./replace_resources");
function findResources(sourceFile) {
    const resources = [];
    const decorators = ast_helpers_1.collectDeepNodes(sourceFile, ts.SyntaxKind.Decorator);
    for (const node of decorators) {
        if (!ts.isCallExpression(node.expression)) {
            continue;
        }
        const decoratorFactory = node.expression;
        const args = decoratorFactory.arguments;
        if (args.length !== 1 || !ts.isObjectLiteralExpression(args[0])) {
            // Unsupported component metadata
            continue;
        }
        ts.visitNodes(args[0].properties, (node) => {
            if (!ts.isPropertyAssignment(node) || ts.isComputedPropertyName(node.name)) {
                return node;
            }
            const name = node.name.text;
            switch (name) {
                case 'templateUrl':
                    const url = replace_resources_1.getResourceUrl(node.initializer);
                    if (url) {
                        resources.push(url);
                    }
                    break;
                case 'styleUrls':
                    if (!ts.isArrayLiteralExpression(node.initializer)) {
                        return node;
                    }
                    ts.visitNodes(node.initializer.elements, (node) => {
                        const url = replace_resources_1.getResourceUrl(node);
                        if (url) {
                            resources.push(url);
                        }
                        return node;
                    });
                    break;
            }
            return node;
        });
    }
    return resources;
}
exports.findResources = findResources;
