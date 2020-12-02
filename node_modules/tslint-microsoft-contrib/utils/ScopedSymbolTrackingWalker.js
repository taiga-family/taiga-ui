"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var AstUtils_1 = require("./AstUtils");
var Scope_1 = require("./Scope");
var TypeGuard_1 = require("./TypeGuard");
var ScopedSymbolTrackingWalker = (function (_super) {
    __extends(ScopedSymbolTrackingWalker, _super);
    function ScopedSymbolTrackingWalker(sourceFile, options, program) {
        var _this = _super.call(this, sourceFile, options) || this;
        if (program) {
            _this.typeChecker = program.getTypeChecker();
        }
        return _this;
    }
    ScopedSymbolTrackingWalker.prototype.getFunctionTargetType = function (expression) {
        if (expression.expression.kind === ts.SyntaxKind.PropertyAccessExpression && this.typeChecker) {
            var propExp = expression.expression;
            var targetType = this.typeChecker.getTypeAtLocation(propExp.expression);
            return this.typeChecker.typeToString(targetType);
        }
        return undefined;
    };
    ScopedSymbolTrackingWalker.prototype.isExpressionEvaluatingToFunction = function (expression) {
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
        if (this.scope !== undefined && this.scope.isFunctionSymbol(expression.getText())) {
            return true;
        }
        if (expression.kind === ts.SyntaxKind.Identifier && this.typeChecker) {
            var tsSymbol = this.typeChecker.getSymbolAtLocation(expression);
            if (tsSymbol && tsSymbol.flags === ts.SymbolFlags.Function) {
                return true;
            }
            return false;
        }
        if (ts.isCallExpression(expression)) {
            if (TypeGuard_1.isNamed(expression.expression) && expression.expression.name.getText() === 'bind') {
                return true;
            }
            try {
                if (!this.typeChecker) {
                    return true;
                }
                var signature = this.typeChecker.getResolvedSignature(expression);
                if (signature !== undefined) {
                    var expressionType = this.typeChecker.getReturnTypeOfSignature(signature);
                    return this.isFunctionType(expressionType, this.typeChecker);
                }
            }
            catch (e) {
                return false;
            }
        }
        if (!this.typeChecker) {
            return true;
        }
        return this.isFunctionType(this.typeChecker.getTypeAtLocation(expression), this.typeChecker);
    };
    ScopedSymbolTrackingWalker.prototype.isFunctionType = function (expressionType, typeChecker) {
        var signatures = typeChecker.getSignaturesOfType(expressionType, ts.SignatureKind.Call);
        if (signatures !== undefined && signatures.length > 0) {
            var signatureDeclaration = signatures[0].declaration;
            if (signatureDeclaration !== undefined && signatureDeclaration.kind === ts.SyntaxKind.FunctionType) {
                return true;
            }
        }
        return false;
    };
    ScopedSymbolTrackingWalker.prototype.visitSourceFile = function (node) {
        this.scope = new Scope_1.Scope(undefined);
        this.scope.addGlobalScope(node, node, this.getOptions());
        _super.prototype.visitSourceFile.call(this, node);
        this.scope = undefined;
    };
    ScopedSymbolTrackingWalker.prototype.visitModuleDeclaration = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addGlobalScope(node.body, this.getSourceFile(), this.getOptions());
        _super.prototype.visitModuleDeclaration.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitClassDeclaration = function (node) {
        var scope = (this.scope = new Scope_1.Scope(this.scope));
        node.members.forEach(function (element) {
            var prefix = AstUtils_1.AstUtils.isStatic(element) && node.name !== undefined ? node.name.getText() + '.' : 'this.';
            if (element.kind === ts.SyntaxKind.MethodDeclaration) {
                scope.addFunctionSymbol(prefix + element.name.getText());
            }
            else if (element.kind === ts.SyntaxKind.PropertyDeclaration) {
                var prop = element;
                if (AstUtils_1.AstUtils.isDeclarationFunctionType(prop)) {
                    scope.addFunctionSymbol(prefix + element.name.getText());
                }
                else {
                    scope.addNonFunctionSymbol(prefix + element.name.getText());
                }
            }
        });
        _super.prototype.visitClassDeclaration.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitFunctionDeclaration = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitFunctionDeclaration.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitConstructorDeclaration = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitConstructorDeclaration.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitMethodDeclaration = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitMethodDeclaration.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitArrowFunction = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitArrowFunction.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitFunctionExpression = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitFunctionExpression.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitSetAccessor = function (node) {
        this.scope = new Scope_1.Scope(this.scope);
        this.scope.addParameters(node.parameters);
        _super.prototype.visitSetAccessor.call(this, node);
        this.scope = this.scope.parent;
    };
    ScopedSymbolTrackingWalker.prototype.visitVariableDeclaration = function (node) {
        if (AstUtils_1.AstUtils.isDeclarationFunctionType(node)) {
            this.scope.addFunctionSymbol(node.name.getText());
        }
        else {
            this.scope.addNonFunctionSymbol(node.name.getText());
        }
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    return ScopedSymbolTrackingWalker;
}(Lint.RuleWalker));
exports.ScopedSymbolTrackingWalker = ScopedSymbolTrackingWalker;
//# sourceMappingURL=ScopedSymbolTrackingWalker.js.map