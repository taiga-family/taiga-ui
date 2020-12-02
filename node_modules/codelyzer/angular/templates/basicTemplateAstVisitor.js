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
var ast = require("@angular/compiler");
var expressionTypes_1 = require("../expressionTypes");
var recursiveAngularExpressionVisitor_1 = require("./recursiveAngularExpressionVisitor");
var sourceMappingVisitor_1 = require("../sourceMappingVisitor");
var getExpressionDisplacement = function (binding) {
    var attrLen = 0;
    var valLen = 0;
    var totalLength = 0;
    var result = 0;
    if (binding instanceof ast.BoundEventAst ||
        binding instanceof ast.BoundElementPropertyAst ||
        binding instanceof ast.BoundDirectivePropertyAst) {
        var subBindingLen = 0;
        if (binding instanceof ast.BoundElementPropertyAst) {
            switch (binding.type) {
                case 4:
                    subBindingLen = 'animate'.length + 1;
                    break;
                case 1:
                    subBindingLen = 'attr'.length + 1;
                    break;
                case 2:
                    subBindingLen = 'class'.length + 1;
                    break;
                case 3:
                    subBindingLen = 'style'.length + 1;
                    break;
            }
        }
        if (!(binding instanceof ast.BoundDirectivePropertyAst)) {
            attrLen = binding.name.length + 4 + subBindingLen;
        }
        if (binding instanceof ast.BoundEventAst) {
            valLen = binding.handler.span.end;
        }
        else if (binding instanceof ast.BoundDirectivePropertyAst &&
            (binding.templateName === 'ngForOf' || binding.templateName === 'ngIf')) {
            result = binding.sourceSpan.start.file.content.lastIndexOf(binding.value.source);
            if (binding.templateName === 'ngIf') {
                if (binding.value.ast.span.start > 0)
                    result = binding.sourceSpan.start.file.content.lastIndexOf(binding.value.source) + binding.value.ast.span.start;
            }
        }
        else {
            valLen = binding.value.span.end;
        }
        if (!(binding instanceof ast.BoundDirectivePropertyAst) || (binding.templateName !== 'ngForOf' && binding.templateName !== 'ngIf')) {
            totalLength = binding.sourceSpan.end.offset - binding.sourceSpan.start.offset;
            var whitespace = totalLength - (attrLen + valLen) - 1;
            result = whitespace + attrLen + binding.sourceSpan.start.offset;
        }
    }
    else if (binding instanceof ast.BoundTextAst) {
        result = binding.sourceSpan.start.offset;
    }
    return result;
};
var BasicTemplateAstVisitor = (function (_super) {
    __extends(BasicTemplateAstVisitor, _super);
    function BasicTemplateAstVisitor(sourceFile, _originalOptions, context, templateStart, expressionVisitorCtrl) {
        if (expressionVisitorCtrl === void 0) { expressionVisitorCtrl = recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor; }
        var _this = _super.call(this, sourceFile, _originalOptions, context.template.template, templateStart) || this;
        _this._originalOptions = _originalOptions;
        _this.context = context;
        _this.templateStart = templateStart;
        _this.expressionVisitorCtrl = expressionVisitorCtrl;
        _this._variables = {};
        return _this;
    }
    BasicTemplateAstVisitor.prototype.visit = function (node, context) {
        node.visit(this, context);
    };
    BasicTemplateAstVisitor.prototype.visitNgContent = function (ast, context) { };
    BasicTemplateAstVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
        var _this = this;
        ast.directives.forEach(function (d) { return _this.visit(d, context); });
        ast.variables.forEach(function (v) { return _this.visit(v, context); });
        ast.children.forEach(function (e) { return _this.visit(e, context); });
        ast.outputs.forEach(function (o) { return _this.visit(o, context); });
        ast.attrs.forEach(function (a) { return _this.visit(a, context); });
        ast.references.forEach(function (r) { return _this.visit(r, context); });
    };
    BasicTemplateAstVisitor.prototype.visitElement = function (element, context) {
        var _this = this;
        element.references.forEach(function (r) { return _this.visit(r, context); });
        element.inputs.forEach(function (i) { return _this.visit(i, context); });
        element.outputs.forEach(function (o) { return _this.visit(o, context); });
        element.attrs.forEach(function (a) { return _this.visit(a, context); });
        element.children.forEach(function (e) { return _this.visit(e, context); });
        element.directives.forEach(function (d) { return _this.visit(d, context); });
    };
    BasicTemplateAstVisitor.prototype.visitReference = function (ast, context) { };
    BasicTemplateAstVisitor.prototype.visitVariable = function (ast, context) {
        this._variables[ast.name] = true;
    };
    BasicTemplateAstVisitor.prototype.visitEvent = function (ast, context) {
        this._variables['$event'] = true;
        this.visitNgTemplateAST(ast.handler, this.templateStart + getExpressionDisplacement(ast));
        this._variables['$event'] = false;
    };
    BasicTemplateAstVisitor.prototype.visitElementProperty = function (prop, context) {
        var ast = prop.value.ast;
        ast.interpolateExpression = prop.value.source;
        this.visitNgTemplateAST(prop.value, this.templateStart + getExpressionDisplacement(prop), prop);
    };
    BasicTemplateAstVisitor.prototype.visitAttr = function (ast, context) { };
    BasicTemplateAstVisitor.prototype.visitBoundText = function (text, context) {
        if (expressionTypes_1.ExpTypes.ASTWithSource(text.value)) {
            var ast_1 = text.value.ast;
            ast_1.interpolateExpression = text.value.source;
            this.visitNgTemplateAST(ast_1, this.templateStart + getExpressionDisplacement(text));
        }
    };
    BasicTemplateAstVisitor.prototype.visitText = function (text, context) { };
    BasicTemplateAstVisitor.prototype.visitDirective = function (ast, context) {
        var _this = this;
        ast.inputs.forEach(function (o) { return _this.visit(o, context); });
        ast.hostProperties.forEach(function (p) { return _this.visit(p, context); });
        ast.hostEvents.forEach(function (e) { return _this.visit(e, context); });
    };
    BasicTemplateAstVisitor.prototype.visitDirectiveProperty = function (prop, context) {
        if (expressionTypes_1.ExpTypes.ASTWithSource(prop.value)) {
            this.visitNgTemplateAST(prop.value, this.templateStart + getExpressionDisplacement(prop), prop);
        }
    };
    BasicTemplateAstVisitor.prototype.visitNgTemplateAST = function (ast, templateStart, prop) {
        var _this = this;
        var templateVisitor = new this.expressionVisitorCtrl(this.getSourceFile(), this._originalOptions, this.context, templateStart);
        templateVisitor.preDefinedVariables = this._variables;
        templateVisitor.parentAST = prop;
        templateVisitor.visit(ast);
        templateVisitor.getFailures().forEach(function (f) { return _this.addFailure(f); });
    };
    return BasicTemplateAstVisitor;
}(sourceMappingVisitor_1.SourceMappingVisitor));
exports.BasicTemplateAstVisitor = BasicTemplateAstVisitor;
