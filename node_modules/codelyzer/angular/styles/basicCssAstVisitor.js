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
var BasicCssAstVisitor = (function (_super) {
    __extends(BasicCssAstVisitor, _super);
    function BasicCssAstVisitor(sourceFile, _originalOptions, context, style, templateStart) {
        var _this = _super.call(this, sourceFile, _originalOptions, style.style, templateStart) || this;
        _this._originalOptions = _originalOptions;
        _this.context = context;
        _this.templateStart = templateStart;
        return _this;
    }
    BasicCssAstVisitor.prototype.visitCssValue = function (ast, context) { };
    BasicCssAstVisitor.prototype.visitCssInlineRule = function (ast, context) { };
    BasicCssAstVisitor.prototype.visitCssAtRulePredicate = function (ast, context) { };
    BasicCssAstVisitor.prototype.visitCssKeyframeRule = function (ast, context) {
        ast.block.visit(this, context);
    };
    BasicCssAstVisitor.prototype.visitCssKeyframeDefinition = function (ast, context) {
        ast.block.visit(this, context);
    };
    BasicCssAstVisitor.prototype.visitCssMediaQueryRule = function (ast, context) {
        ast.query.visit(this, context);
        ast.block.visit(this, context);
    };
    BasicCssAstVisitor.prototype.visitCssSelectorRule = function (ast, context) {
        var _this = this;
        ast.selectors.forEach(function (selAst) {
            selAst.visit(_this, context);
        });
        ast.block.visit(this, context);
    };
    BasicCssAstVisitor.prototype.visitCssSelector = function (ast, context) {
        var _this = this;
        ast.selectorParts.forEach(function (simpleAst) {
            simpleAst.visit(_this, context);
        });
    };
    BasicCssAstVisitor.prototype.visitCssSimpleSelector = function (ast, context) {
        var _this = this;
        ast.pseudoSelectors.forEach(function (pseudoAst) {
            pseudoAst.visit(_this, context);
        });
    };
    BasicCssAstVisitor.prototype.visitCssPseudoSelector = function (ast, context) { };
    BasicCssAstVisitor.prototype.visitCssDefinition = function (ast, context) {
        ast.value.visit(this, context);
    };
    BasicCssAstVisitor.prototype.visitCssBlock = function (ast, context) {
        var _this = this;
        ast.entries.forEach(function (entryAst) {
            entryAst.visit(_this, context);
        });
    };
    BasicCssAstVisitor.prototype.visitCssStylesBlock = function (ast, context) {
        var _this = this;
        ast.definitions.forEach(function (definitionAst) {
            definitionAst.visit(_this, context);
        });
    };
    BasicCssAstVisitor.prototype.visitCssStyleSheet = function (ast, context) {
        var _this = this;
        ast.rules.forEach(function (ruleAst) {
            ruleAst.visit(_this, context);
        });
    };
    BasicCssAstVisitor.prototype.visitCssUnknownRule = function (ast, context) { };
    BasicCssAstVisitor.prototype.visitCssUnknownTokenList = function (ast, context) { };
    return BasicCssAstVisitor;
}(sourceMappingVisitor_1.SourceMappingVisitor));
exports.BasicCssAstVisitor = BasicCssAstVisitor;
