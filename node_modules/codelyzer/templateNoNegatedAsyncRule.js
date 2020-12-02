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
var unstrictEqualityOperator = '==';
var isAsyncBinding = function (ast) { return ast instanceof compiler_1.BindingPipe && ast.name === 'async'; };
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
        description: 'Ensures that strict equality is used when evaluating negations on async pipe output.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Angular's async pipes emit null initially, prior to the observable emitting any values, or the promise resolving. This can cause negations, like\n      *ngIf=\"!(myConditional | async)\" to thrash the layout and cause expensive side-effects like firing off XHR requests for a component which should not be shown.\n    "], ["\n      Angular's async pipes emit null initially, prior to the observable emitting any values, or the promise resolving. This can cause negations, like\n      *ngIf=\"!(myConditional | async)\" to thrash the layout and cause expensive side-effects like firing off XHR requests for a component which should not be shown.\n    "]))),
        ruleName: 'template-no-negated-async',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING_NEGATED_PIPE = 'Async pipes should not be negated. Use (observable | async) === (false | null | undefined) to check its value instead';
    Rule.FAILURE_STRING_UNSTRICT_EQUALITY = 'Async pipes must use strict equality `===` when comparing with `false`';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var ExpressionVisitorCtrl = (function (_super) {
    __extends(ExpressionVisitorCtrl, _super);
    function ExpressionVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpressionVisitorCtrl.prototype.visitBinary = function (ast, context) {
        this.validateBinary(ast);
        _super.prototype.visitBinary.call(this, ast, context);
    };
    ExpressionVisitorCtrl.prototype.visitPrefixNot = function (ast, context) {
        this.validatePrefixNot(ast);
        _super.prototype.visitPrefixNot.call(this, ast, context);
    };
    ExpressionVisitorCtrl.prototype.generateFailure = function (ast, errorMessage) {
        var _a = ast.span, spanEnd = _a.end, spanStart = _a.start;
        this.addFailureFromStartToEnd(spanStart, spanEnd, errorMessage);
    };
    ExpressionVisitorCtrl.prototype.validateBinary = function (ast) {
        var left = ast.left, operation = ast.operation, right = ast.right;
        if (!isAsyncBinding(left) || !(right instanceof compiler_1.LiteralPrimitive) || right.value !== false || operation !== unstrictEqualityOperator) {
            return;
        }
        this.generateFailure(ast, Rule.FAILURE_STRING_UNSTRICT_EQUALITY);
    };
    ExpressionVisitorCtrl.prototype.validatePrefixNot = function (ast) {
        var expression = ast.expression;
        if (!isAsyncBinding(expression))
            return;
        this.generateFailure(ast, Rule.FAILURE_STRING_NEGATED_PIPE);
    };
    return ExpressionVisitorCtrl;
}(recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor));
var templateObject_1;
