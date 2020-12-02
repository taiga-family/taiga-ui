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
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = { templateVisitorCtrl: TemplateVisitorCtrl };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Ensure that autofocus property is not used',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'autofocus attribute reduces usability and accessibility for users.',
        ruleName: 'template-no-autofocus',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'autofocus attribute should not be used, as it reduces usability and accessibility for users.';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitAttr = function (ast, context) {
        this.validateAttribute(ast);
        _super.prototype.visitAttr.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.visitElementProperty = function (ast) {
        this.validateAttribute(ast);
        _super.prototype.visitElementProperty.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.validateAttribute = function (ast) {
        if (ast.name === 'autofocus') {
            var _a = ast.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
            this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING);
        }
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
