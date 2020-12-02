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
var Scope = (function () {
    function Scope(parent) {
        this.symbols = {};
        this.parent = parent;
    }
    Scope.prototype.addFunctionSymbol = function (symbolString) {
        this.symbols[symbolString] = ts.SyntaxKind.FunctionType;
    };
    Scope.prototype.addNonFunctionSymbol = function (symbolString) {
        this.symbols[symbolString] = ts.SyntaxKind.Unknown;
    };
    Scope.prototype.isFunctionSymbol = function (symbolString) {
        if (this.symbols[symbolString] === ts.SyntaxKind.FunctionType) {
            return true;
        }
        if (this.symbols[symbolString] === ts.SyntaxKind.Unknown) {
            return false;
        }
        if (this.parent !== undefined) {
            return this.parent.isFunctionSymbol(symbolString);
        }
        return false;
    };
    Scope.prototype.addParameters = function (parameters) {
        var _this = this;
        parameters.forEach(function (parm) {
            if (AstUtils_1.AstUtils.isDeclarationFunctionType(parm)) {
                _this.addFunctionSymbol(parm.name.getText());
            }
            else {
                _this.addNonFunctionSymbol(parm.name.getText());
            }
        });
    };
    Scope.prototype.addGlobalScope = function (node, sourceFile, options) {
        var _this = this;
        var refCollector = new GlobalReferenceCollector(sourceFile, options);
        refCollector.visitNode(node);
        refCollector.functionIdentifiers.forEach(function (identifier) {
            _this.addFunctionSymbol(identifier);
        });
        refCollector.nonFunctionIdentifiers.forEach(function (identifier) {
            _this.addNonFunctionSymbol(identifier);
        });
    };
    return Scope;
}());
exports.Scope = Scope;
var GlobalReferenceCollector = (function (_super) {
    __extends(GlobalReferenceCollector, _super);
    function GlobalReferenceCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.functionIdentifiers = [];
        _this.nonFunctionIdentifiers = [];
        return _this;
    }
    GlobalReferenceCollector.prototype.visitModuleDeclaration = function () { };
    GlobalReferenceCollector.prototype.visitClassDeclaration = function () { };
    GlobalReferenceCollector.prototype.visitArrowFunction = function () { };
    GlobalReferenceCollector.prototype.visitFunctionExpression = function () { };
    GlobalReferenceCollector.prototype.visitNode = function (node) {
        _super.prototype.visitNode.call(this, node);
    };
    GlobalReferenceCollector.prototype.visitVariableDeclaration = function (node) {
        if (AstUtils_1.AstUtils.isDeclarationFunctionType(node)) {
            this.functionIdentifiers.push(node.name.getText());
        }
        else {
            this.nonFunctionIdentifiers.push(node.name.getText());
        }
    };
    return GlobalReferenceCollector;
}(Lint.RuleWalker));
//# sourceMappingURL=Scope.js.map