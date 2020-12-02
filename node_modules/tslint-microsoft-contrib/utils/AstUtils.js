"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var TypeGuard_1 = require("./TypeGuard");
var AstUtils;
(function (AstUtils) {
    function getLanguageVariant(node) {
        var fileName = node.fileName.toLowerCase();
        if (fileName.endsWith('.tsx') || fileName.endsWith('.jsx')) {
            return ts.LanguageVariant.JSX;
        }
        return ts.LanguageVariant.Standard;
    }
    AstUtils.getLanguageVariant = getLanguageVariant;
    function getFunctionName(node) {
        var expression = node.expression;
        if ('text' in expression) {
            return expression.text;
        }
        if (TypeGuard_1.isNamed(expression)) {
            return expression.name.getText();
        }
        return '';
    }
    AstUtils.getFunctionName = getFunctionName;
    function getFunctionTarget(expression) {
        if (expression.expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
            var propExp = expression.expression;
            return propExp.expression.getText();
        }
        return undefined;
    }
    AstUtils.getFunctionTarget = getFunctionTarget;
    function isJQuery(functionTarget) {
        return functionTarget === '$' || /^(jquery)$/i.test(functionTarget);
    }
    AstUtils.isJQuery = isJQuery;
    function hasModifier(modifiers, modifierKind) {
        if (modifiers === undefined) {
            return false;
        }
        var result = false;
        modifiers.forEach(function (modifier) {
            if (modifier.kind === modifierKind) {
                result = true;
            }
        });
        return result;
    }
    AstUtils.hasModifier = hasModifier;
    function dumpTypeInfo(expression, languageServices, typeChecker) {
        console.log(expression.getFullText());
        console.log('\tkind: ' + expression.kind);
        if (expression.kind === ts.SyntaxKind.Identifier || expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
            var definitionInfo = languageServices.getDefinitionAtPosition('file.ts', expression.getStart());
            if (definitionInfo !== undefined) {
                definitionInfo.forEach(function (info, index) {
                    console.log('\tdefinitionInfo-' + index);
                    console.log('\t\tkind: ' + info.kind);
                    console.log('\t\tname: ' + info.name);
                });
            }
            var typeInfo = languageServices.getTypeDefinitionAtPosition('file.ts', expression.getStart());
            if (typeInfo !== undefined) {
                typeInfo.forEach(function (info, index) {
                    console.log('\ttypeDefinitionInfo-' + index);
                    console.log('\t\tkind: ' + info.kind);
                    console.log('\t\tname: ' + info.name);
                });
            }
            var quickInfo = languageServices.getQuickInfoAtPosition('file.ts', expression.getStart());
            if (quickInfo !== undefined) {
                console.log('\tquickInfo.kind         = ' + quickInfo.kind);
                console.log('\tquickInfo.kindModifiers= ' + quickInfo.kindModifiers);
                console.log('\tquickInfo.textSpan     = ' + quickInfo.textSpan.start);
                if (quickInfo.displayParts !== undefined) {
                    console.log('\tquickInfo.displayParts = ' + quickInfo.displayParts[0].text);
                    console.log('\tquickInfo.displayParts = ' + quickInfo.displayParts[0].kind);
                }
            }
            var expressionType = typeChecker.getTypeAtLocation(expression);
            console.log('\ttypeChecker.typeToString: ' + typeChecker.typeToString(expressionType));
            console.log('\ttype.flags: ' + expressionType.flags);
            console.log('\ttype.symbol: ' + expressionType.symbol);
            var expressionSymbol = typeChecker.getSymbolAtLocation(expression);
            if (expressionSymbol === undefined) {
                console.log('\tsymbol: ' + expressionSymbol);
            }
            else {
                console.log('\tsymbol.flags: ' + expressionSymbol.flags);
                console.log('\tsymbol.name: ' + expressionSymbol.name);
                console.log('\tsymbol.declarations: ' + expressionSymbol.declarations);
            }
            var contextualType = typeChecker.getContextualType(expression);
            if (contextualType === undefined) {
                console.log('\tcontextualType: ' + contextualType);
            }
            else {
                console.log('\tcontextualType.flags: ' + contextualType.flags);
                console.log('\tcontextualType.symbol: ' + contextualType.symbol);
            }
        }
    }
    AstUtils.dumpTypeInfo = dumpTypeInfo;
    function isPrivate(node) {
        return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Private);
    }
    AstUtils.isPrivate = isPrivate;
    function isProtected(node) {
        return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Protected);
    }
    AstUtils.isProtected = isProtected;
    function isPublic(node) {
        return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Public);
    }
    AstUtils.isPublic = isPublic;
    function isStatic(node) {
        return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Static);
    }
    AstUtils.isStatic = isStatic;
    function hasComputedName(node) {
        if (!node.name) {
            return false;
        }
        return ts.isComputedPropertyName(node.name);
    }
    AstUtils.hasComputedName = hasComputedName;
    function isBindingPattern(node) {
        return node !== undefined && (node.kind === ts.SyntaxKind.ArrayBindingPattern || node.kind === ts.SyntaxKind.ObjectBindingPattern);
    }
    function walkUpBindingElementsAndPatterns(node) {
        while (node && (node.kind === ts.SyntaxKind.BindingElement || isBindingPattern(node))) {
            node = node.parent;
        }
        return node;
    }
    function getCombinedNodeFlags(node) {
        node = walkUpBindingElementsAndPatterns(node);
        var flags = node.flags;
        if (node.kind === ts.SyntaxKind.VariableDeclaration) {
            node = node.parent;
        }
        if (node && node.kind === ts.SyntaxKind.VariableDeclarationList) {
            flags |= node.flags;
            node = node.parent;
        }
        if (node && node.kind === ts.SyntaxKind.VariableStatement) {
            flags |= node.flags;
        }
        return flags;
    }
    function isLet(node) {
        return !!(getCombinedNodeFlags(node) & ts.NodeFlags.Let);
    }
    AstUtils.isLet = isLet;
    function isExported(node) {
        if (node.kind === ts.SyntaxKind.VariableDeclaration &&
            node.parent.kind === ts.SyntaxKind.VariableDeclarationList &&
            node.parent.parent.kind === ts.SyntaxKind.VariableStatement) {
            if (node.parent.parent.modifiers !== undefined &&
                AstUtils.hasModifier(node.parent.parent.modifiers, ts.SyntaxKind.ExportKeyword)) {
                return true;
            }
        }
        return !!(getCombinedNodeFlags(node) & ts.NodeFlags.ExportContext);
    }
    AstUtils.isExported = isExported;
    function isAssignmentOperator(token) {
        return token >= ts.SyntaxKind.FirstAssignment && token <= ts.SyntaxKind.LastAssignment;
    }
    AstUtils.isAssignmentOperator = isAssignmentOperator;
    function isBindingLiteralExpression(node) {
        return !!node && (node.kind === ts.SyntaxKind.ObjectLiteralExpression || node.kind === ts.SyntaxKind.ArrayLiteralExpression);
    }
    AstUtils.isBindingLiteralExpression = isBindingLiteralExpression;
    function findParentBlock(child) {
        var parent = child.parent;
        while (parent !== undefined) {
            if (parent.kind === ts.SyntaxKind.Block) {
                return parent;
            }
            parent = parent.parent;
        }
        throw new Error('Could not determine parent block of node: ' + child);
    }
    AstUtils.findParentBlock = findParentBlock;
    function isSameIdentifer(source, target) {
        if (source === undefined || target === undefined) {
            return false;
        }
        if (source.kind === ts.SyntaxKind.Identifier && target.kind === ts.SyntaxKind.Identifier) {
            return source.getText() === target.getText();
        }
        return false;
    }
    AstUtils.isSameIdentifer = isSameIdentifer;
    function getDeclaredMethodNames(node) {
        var result = [];
        node.members.forEach(function (classElement) {
            if (classElement.kind === ts.SyntaxKind.MethodDeclaration) {
                var methodDeclaration = classElement;
                if (methodDeclaration.name.kind === ts.SyntaxKind.Identifier) {
                    result.push(methodDeclaration.name.text);
                }
            }
        });
        return result;
    }
    AstUtils.getDeclaredMethodNames = getDeclaredMethodNames;
    function isDeclarationFunctionType(node) {
        if (node.type !== undefined) {
            if (node.type.getText() === 'Function') {
                return true;
            }
            return node.type.kind === ts.SyntaxKind.FunctionType;
        }
        if (node.initializer !== undefined) {
            return node.initializer.kind === ts.SyntaxKind.ArrowFunction || node.initializer.kind === ts.SyntaxKind.FunctionExpression;
        }
        return false;
    }
    AstUtils.isDeclarationFunctionType = isDeclarationFunctionType;
    function isUndefined(node) {
        if (node !== undefined) {
            if (node.kind === ts.SyntaxKind.Identifier) {
                return node.getText() === 'undefined';
            }
        }
        return false;
    }
    AstUtils.isUndefined = isUndefined;
    function isConstant(node) {
        if (node === undefined) {
            return false;
        }
        return (node.kind === ts.SyntaxKind.NullKeyword ||
            node.kind === ts.SyntaxKind.StringLiteral ||
            node.kind === ts.SyntaxKind.FalseKeyword ||
            node.kind === ts.SyntaxKind.TrueKeyword ||
            node.kind === ts.SyntaxKind.NumericLiteral);
    }
    AstUtils.isConstant = isConstant;
    function isConstantExpression(node) {
        if (node.kind === ts.SyntaxKind.BinaryExpression) {
            var expression = node;
            var kind = expression.operatorToken.kind;
            if (kind >= ts.SyntaxKind.FirstBinaryOperator && kind <= ts.SyntaxKind.LastBinaryOperator) {
                return isConstantExpression(expression.left) && isConstantExpression(expression.right);
            }
        }
        if (node.kind === ts.SyntaxKind.PrefixUnaryExpression || node.kind === ts.SyntaxKind.PostfixUnaryExpression) {
            var expression = (node);
            return isConstantExpression(expression.operand);
        }
        return isConstant(node);
    }
    AstUtils.isConstantExpression = isConstantExpression;
})(AstUtils = exports.AstUtils || (exports.AstUtils = {}));
//# sourceMappingURL=AstUtils.js.map