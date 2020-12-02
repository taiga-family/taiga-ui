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
var rules_1 = require("tslint/lib/rules");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var recursiveAngularExpressionVisitor_1 = require("./angular/templates/recursiveAngularExpressionVisitor");
var ALLOWED_METHOD_NAMES = new Set(['$any']);
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = {
            expressionVisitorCtrl: ExpressionVisitorCtrl,
            templateVisitorCtrl: TemplateVisitorCtrl
        };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Disallows calling expressions in templates, except for output handlers.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Calling expressions in templates causes it to run on every change detection cycle and may cause performance issues.',
        ruleName: 'template-no-call-expression',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Avoid calling expressions in templates';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitEvent = function () { };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var ExpressionVisitorCtrl = (function (_super) {
    __extends(ExpressionVisitorCtrl, _super);
    function ExpressionVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpressionVisitorCtrl.prototype.visitMethodCall = function (ast, context) {
        this.validateMethodCall(ast);
        _super.prototype.visitMethodCall.call(this, ast, context);
    };
    ExpressionVisitorCtrl.prototype.generateFailure = function (ast) {
        var _a = ast.span, endSpan = _a.end, startSpan = _a.start;
        this.addFailureFromStartToEnd(startSpan, endSpan, Rule.FAILURE_STRING);
    };
    ExpressionVisitorCtrl.prototype.validateMethodCall = function (ast) {
        var isMethodAllowed = ALLOWED_METHOD_NAMES.has(ast.name);
        if (isMethodAllowed)
            return;
        this.generateFailure(ast);
    };
    return ExpressionVisitorCtrl;
}(recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor));
