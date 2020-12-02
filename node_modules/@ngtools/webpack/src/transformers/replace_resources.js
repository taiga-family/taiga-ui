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
// emit helper for `import Name from "foo"`
// importName is marked as an internal property but is needed for the tslib import.
const importDefaultHelper = {
    name: 'typescript:commonjsimportdefault',
    importName: '__importDefault',
    scoped: false,
    text: `
    var __importDefault = (this && this.__importDefault) || function (mod) {
      return (mod && mod.__esModule) ? mod : { "default": mod };
    };`,
};
function replaceResources(shouldTransform, getTypeChecker, directTemplateLoading = false) {
    return (context) => {
        const typeChecker = getTypeChecker();
        const visitNode = (node) => {
            if (ts.isClassDeclaration(node)) {
                const decorators = ts.visitNodes(node.decorators, (node) => visitDecorator(context, node, typeChecker, directTemplateLoading));
                return ts.updateClassDeclaration(node, decorators, node.modifiers, node.name, node.typeParameters, node.heritageClauses, node.members);
            }
            return ts.visitEachChild(node, visitNode, context);
        };
        return (sourceFile) => {
            if (shouldTransform(sourceFile.fileName)) {
                return ts.visitNode(sourceFile, visitNode);
            }
            return sourceFile;
        };
    };
}
exports.replaceResources = replaceResources;
function visitDecorator(context, node, typeChecker, directTemplateLoading) {
    if (!isComponentDecorator(node, typeChecker)) {
        return node;
    }
    if (!ts.isCallExpression(node.expression)) {
        return node;
    }
    const decoratorFactory = node.expression;
    const args = decoratorFactory.arguments;
    if (args.length !== 1 || !ts.isObjectLiteralExpression(args[0])) {
        // Unsupported component metadata
        return node;
    }
    const objectExpression = args[0];
    const styleReplacements = [];
    // visit all properties
    let properties = ts.visitNodes(objectExpression.properties, (node) => visitComponentMetadata(context, node, styleReplacements, directTemplateLoading));
    // replace properties with updated properties
    if (styleReplacements.length > 0) {
        const styleProperty = ts.createPropertyAssignment(ts.createIdentifier('styles'), ts.createArrayLiteral(styleReplacements));
        properties = ts.createNodeArray([...properties, styleProperty]);
    }
    return ts.updateDecorator(node, ts.updateCall(decoratorFactory, decoratorFactory.expression, decoratorFactory.typeArguments, [
        ts.updateObjectLiteral(objectExpression, properties),
    ]));
}
function visitComponentMetadata(context, node, styleReplacements, directTemplateLoading) {
    if (!ts.isPropertyAssignment(node) || ts.isComputedPropertyName(node.name)) {
        return node;
    }
    const name = node.name.text;
    switch (name) {
        case 'moduleId':
            return undefined;
        case 'templateUrl':
            return ts.updatePropertyAssignment(node, ts.createIdentifier('template'), createRequireExpression(context, node.initializer, directTemplateLoading ? '!raw-loader!' : ''));
        case 'styles':
        case 'styleUrls':
            if (!ts.isArrayLiteralExpression(node.initializer)) {
                return node;
            }
            const isInlineStyles = name === 'styles';
            const styles = ts.visitNodes(node.initializer.elements, (node) => {
                if (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node)) {
                    return node;
                }
                return isInlineStyles
                    ? ts.createLiteral(node.text)
                    : createRequireExpression(context, node);
            });
            // Styles should be placed first
            if (isInlineStyles) {
                styleReplacements.unshift(...styles);
            }
            else {
                styleReplacements.push(...styles);
            }
            return undefined;
        default:
            return node;
    }
}
function getResourceUrl(node, loader = '') {
    // only analyze strings
    if (!ts.isStringLiteral(node) && !ts.isNoSubstitutionTemplateLiteral(node)) {
        return null;
    }
    return `${loader}${/^\.?\.\//.test(node.text) ? '' : './'}${node.text}`;
}
exports.getResourceUrl = getResourceUrl;
function isComponentDecorator(node, typeChecker) {
    if (!ts.isDecorator(node)) {
        return false;
    }
    const origin = getDecoratorOrigin(node, typeChecker);
    if (origin && origin.module === '@angular/core' && origin.name === 'Component') {
        return true;
    }
    return false;
}
function createRequireExpression(context, node, loader) {
    const url = getResourceUrl(node, loader);
    if (!url) {
        return node;
    }
    context.requestEmitHelper(importDefaultHelper);
    const callExpression = ts.createCall(ts.createIdentifier('require'), undefined, [
        ts.createLiteral(url),
    ]);
    return ts.createPropertyAccess(ts.createCall(ts.setEmitFlags(ts.createIdentifier('__importDefault'), ts.EmitFlags.HelperName | ts.EmitFlags.AdviseOnEmitNode), undefined, [callExpression]), 'default');
}
function getDecoratorOrigin(decorator, typeChecker) {
    if (!ts.isCallExpression(decorator.expression)) {
        return null;
    }
    let identifier;
    let name = '';
    if (ts.isPropertyAccessExpression(decorator.expression.expression)) {
        identifier = decorator.expression.expression.expression;
        name = decorator.expression.expression.name.text;
    }
    else if (ts.isIdentifier(decorator.expression.expression)) {
        identifier = decorator.expression.expression;
    }
    else {
        return null;
    }
    // NOTE: resolver.getReferencedImportDeclaration would work as well but is internal
    const symbol = typeChecker.getSymbolAtLocation(identifier);
    if (symbol && symbol.declarations && symbol.declarations.length > 0) {
        const declaration = symbol.declarations[0];
        let module;
        if (ts.isImportSpecifier(declaration)) {
            name = (declaration.propertyName || declaration.name).text;
            module = declaration.parent.parent.parent.moduleSpecifier.text;
        }
        else if (ts.isNamespaceImport(declaration)) {
            // Use the name from the decorator namespace property access
            module = declaration.parent.parent.moduleSpecifier.text;
        }
        else if (ts.isImportClause(declaration)) {
            name = declaration.name.text;
            module = declaration.parent.moduleSpecifier.text;
        }
        else {
            return null;
        }
        return { name, module };
    }
    return null;
}
