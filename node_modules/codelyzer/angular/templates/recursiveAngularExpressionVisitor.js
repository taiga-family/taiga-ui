"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sourceMappingVisitor_1 = require("../sourceMappingVisitor");
var RecursiveAngularExpressionVisitor = (function (_super) {
    __extends(RecursiveAngularExpressionVisitor, _super);
    function RecursiveAngularExpressionVisitor(sourceFile, options, context, basePosition) {
        var _this = _super.call(this, sourceFile, options, context.template.template, basePosition) || this;
        _this.context = context;
        _this.basePosition = basePosition;
        _this.preDefinedVariables = {};
        return _this;
    }
    RecursiveAngularExpressionVisitor.prototype.visit = function (ast, context) {
        ast.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitNonNullAssert = function (ast, context) {
        ast.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitBinary = function (ast, context) {
        ast.left.visit(this, context);
        ast.right.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitChain = function (ast, context) {
        return this.visitAll(ast.expressions, context);
    };
    RecursiveAngularExpressionVisitor.prototype.visitConditional = function (ast, context) {
        ast.condition.visit(this, context);
        ast.trueExp.visit(this, context);
        ast.falseExp.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitPipe = function (ast, context) {
        ast.exp.visit(this, context);
        this.visitAll(ast.args, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitFunctionCall = function (ast, context) {
        ast.target.visit(this, context);
        this.visitAll(ast.args, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitImplicitReceiver = function (ast, context) {
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitInterpolation = function (ast, context) {
        var _this = this;
        ast.expressions.forEach(function (e, i) { return _this.visit(e, context); });
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitKeyedRead = function (ast, context) {
        ast.obj.visit(this, context);
        ast.key.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitKeyedWrite = function (ast, context) {
        ast.obj.visit(this, context);
        ast.key.visit(this, context);
        ast.value.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitLiteralArray = function (ast, context) {
        return this.visitAll(ast.expressions, context);
    };
    RecursiveAngularExpressionVisitor.prototype.visitLiteralMap = function (ast, context) {
        return this.visitAll(ast.values, context);
    };
    RecursiveAngularExpressionVisitor.prototype.visitLiteralPrimitive = function (ast, context) {
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitMethodCall = function (ast, context) {
        ast.receiver.visit(this, context);
        return this.visitAll(ast.args, context);
    };
    RecursiveAngularExpressionVisitor.prototype.visitPrefixNot = function (ast, context) {
        ast.expression.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitPropertyRead = function (ast, context) {
        ast.receiver.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitPropertyWrite = function (ast, context) {
        ast.receiver.visit(this, context);
        ast.value.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitSafePropertyRead = function (ast, context) {
        ast.receiver.visit(this, context);
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitSafeMethodCall = function (ast, context) {
        ast.receiver.visit(this, context);
        return this.visitAll(ast.args, context);
    };
    RecursiveAngularExpressionVisitor.prototype.visitAll = function (asts, context) {
        var _this = this;
        asts.forEach(function (ast) { return ast.visit(_this, context); });
        return null;
    };
    RecursiveAngularExpressionVisitor.prototype.visitQuote = function (ast, context) {
        return null;
    };
    return RecursiveAngularExpressionVisitor;
}(sourceMappingVisitor_1.SourceMappingVisitor));
exports.RecursiveAngularExpressionVisitor = RecursiveAngularExpressionVisitor;
