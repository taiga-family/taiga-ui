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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@angular/compiler");
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var recursiveAngularExpressionVisitor_1 = require("./angular/templates/recursiveAngularExpressionVisitor");
var ANY_TYPE_CAST_FUNCTION_NAME = '$any';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = { expressionVisitorCtrl: ExpressionVisitorCtrl };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: "Disallows using '" + ANY_TYPE_CAST_FUNCTION_NAME + "' in templates.",
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      The use of '", "' nullifies the compile-time\n      benefits of the Angular's type system.\n    "], ["\n      The use of '", "' nullifies the compile-time\n      benefits of the Angular's type system.\n    "])), ANY_TYPE_CAST_FUNCTION_NAME),
        ruleName: 'template-no-any',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Avoid using '" + ANY_TYPE_CAST_FUNCTION_NAME + "' in templates";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
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
        var isAnyTypeCastFunction = ast.name === ANY_TYPE_CAST_FUNCTION_NAME;
        var isAngularAnyTypeCastFunction = !(ast.receiver instanceof compiler_1.PropertyRead);
        if (!isAnyTypeCastFunction || !isAngularAnyTypeCastFunction)
            return;
        this.generateFailure(ast);
    };
    return ExpressionVisitorCtrl;
}(recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor));
var templateObject_1;
