"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var tsutils = require("tsutils");
var Scope_1 = require("./Scope");
var TypeGuard_1 = require("./TypeGuard");
var AstUtils_1 = require("./AstUtils");
function createNoStringParameterToFunctionWalker(targetFunctionName, options, program) {
    var failureString = 'Forbidden ' + targetFunctionName + ' string parameter: ';
    var typeChecker = program ? program.getTypeChecker() : undefined;
    var scope;
    return function (ctx) {
        function cb(node) {
            if (tsutils.isModuleDeclaration(node)) {
                scope = new Scope_1.Scope(scope);
                if (node.body !== undefined) {
                    scope.addGlobalScope(node.body, node.getSourceFile(), options);
                }
                ts.forEachChild(node, cb);
                scope = scope.parent;
            }
            else if (tsutils.isClassDeclaration(node)) {
                var classScope_1 = (scope = new Scope_1.Scope(scope));
                node.members.forEach(function (element) {
                    var prefix = AstUtils_1.AstUtils.isStatic(element) && node.name !== undefined ? node.name.getText() + '.' : 'this.';
                    if (element.kind === ts.SyntaxKind.MethodDeclaration) {
                        classScope_1.addFunctionSymbol(prefix + element.name.getText());
                    }
                    else if (element.kind === ts.SyntaxKind.PropertyDeclaration) {
                        var prop = element;
                        if (AstUtils_1.AstUtils.isDeclarationFunctionType(prop)) {
                            classScope_1.addFunctionSymbol(prefix + element.name.getText());
                        }
                        else {
                            classScope_1.addNonFunctionSymbol(prefix + element.name.getText());
                        }
                    }
                });
                ts.forEachChild(node, cb);
                scope = scope.parent;
            }
            else if (tsutils.isFunctionDeclaration(node) ||
                tsutils.isConstructorDeclaration(node) ||
                tsutils.isMethodDeclaration(node) ||
                tsutils.isArrowFunction(node) ||
                tsutils.isFunctionExpression(node) ||
                tsutils.isSetAccessorDeclaration(node)) {
                scope = new Scope_1.Scope(scope);
                scope.addParameters(node.parameters);
                ts.forEachChild(node, cb);
                scope = scope.parent;
            }
            else {
                if (tsutils.isVariableDeclaration(node)) {
                    if (AstUtils_1.AstUtils.isDeclarationFunctionType(node)) {
                        scope.addFunctionSymbol(node.name.getText());
                    }
                    else {
                        scope.addNonFunctionSymbol(node.name.getText());
                    }
                }
                else if (tsutils.isCallExpression(node)) {
                    validateExpression(node, ctx);
                }
                ts.forEachChild(node, cb);
            }
        }
        scope = new Scope_1.Scope(undefined);
        scope.addGlobalScope(ctx.sourceFile, ctx.sourceFile, options);
        ts.forEachChild(ctx.sourceFile, cb);
    };
    function validateExpression(node, ctx) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
        var firstArg = node.arguments[0];
        if (functionName === targetFunctionName && firstArg !== undefined) {
            if (functionTarget) {
                var functionTargetType = getFunctionTargetType(node);
                if (functionTargetType) {
                    if (!functionTargetType.match(/^(any|Window|Worker)$/)) {
                        return;
                    }
                }
                else {
                    if (!functionTarget.match(/^(this|window)$/)) {
                        return;
                    }
                }
            }
            if (!isExpressionEvaluatingToFunction(firstArg)) {
                var msg = failureString +
                    firstArg
                        .getFullText()
                        .trim()
                        .substring(0, 40);
                ctx.addFailureAt(node.getStart(), node.getWidth(), msg);
            }
        }
    }
    function getFunctionTargetType(expression) {
        if (expression.expression.kind === ts.SyntaxKind.PropertyAccessExpression && typeChecker) {
            var propExp = expression.expression;
            try {
                var targetType = typeChecker.getTypeAtLocation(propExp.expression);
                return typeChecker.typeToString(targetType);
            }
            catch (_a) {
                return undefined;
            }
        }
        return undefined;
    }
    function isExpressionEvaluatingToFunction(expression) {
        if (expression.kind === ts.SyntaxKind.ArrowFunction || expression.kind === ts.SyntaxKind.FunctionExpression) {
            return true;
        }
        if (expression.kind === ts.SyntaxKind.StringLiteral ||
            expression.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral ||
            expression.kind === ts.SyntaxKind.TemplateExpression ||
            expression.kind === ts.SyntaxKind.TaggedTemplateExpression ||
            expression.kind === ts.SyntaxKind.BinaryExpression) {
            return false;
        }
        if (scope !== undefined && scope.isFunctionSymbol(expression.getText())) {
            return true;
        }
        if (expression.kind === ts.SyntaxKind.Identifier && typeChecker) {
            try {
                var tsSymbol = typeChecker.getSymbolAtLocation(expression);
                if (tsSymbol && tsSymbol.flags === ts.SymbolFlags.Function) {
                    return true;
                }
                return false;
            }
            catch (_a) {
            }
        }
        if (ts.isCallExpression(expression)) {
            if (TypeGuard_1.isNamed(expression.expression) && expression.expression.name.getText() === 'bind') {
                return true;
            }
            try {
                if (!typeChecker) {
                    return true;
                }
                var signature = typeChecker.getResolvedSignature(expression);
                if (signature !== undefined) {
                    var expressionType = typeChecker.getReturnTypeOfSignature(signature);
                    return isFunctionType(expressionType, typeChecker);
                }
            }
            catch (_b) {
                return false;
            }
        }
        if (!typeChecker) {
            return true;
        }
        try {
            return isFunctionType(typeChecker.getTypeAtLocation(expression), typeChecker);
        }
        catch (_c) {
            return true;
        }
    }
}
exports.createNoStringParameterToFunctionWalker = createNoStringParameterToFunctionWalker;
function isFunctionType(expressionType, typeChecker) {
    var signatures = typeChecker.getSignaturesOfType(expressionType, ts.SignatureKind.Call);
    if (signatures !== undefined && signatures.length > 0) {
        var signatureDeclaration = signatures[0].declaration;
        if (signatureDeclaration !== undefined && signatureDeclaration.kind === ts.SyntaxKind.FunctionType) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=createNoStringParameterToFunctionWalker.js.map