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
var typescript_1 = require("typescript");
var ngWalker_1 = require("./angular/ngWalker");
var utils_1 = require("./util/utils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Disallows explicit calls to lifecycle methods.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: "Explicit calls to lifecycle methods could be confusing. Invoke them is an Angular's responsability.",
        ruleName: 'no-lifecycle-call',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Avoid explicit calls to lifecycle methods';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitCallExpression = function (node) {
        this.validateCallExpression(node);
        _super.prototype.visitCallExpression.call(this, node);
    };
    Walker.prototype.validateCallExpression = function (node) {
        var nodeExpression = node.expression;
        if (!typescript_1.isPropertyAccessExpression(nodeExpression))
            return;
        var expression = nodeExpression.expression, methodName = nodeExpression.name.text;
        var isLifecycleCall = utils_1.isAngularLifecycleMethod(methodName);
        var isSuperCall = expression.kind === typescript_1.SyntaxKind.SuperKeyword;
        if (!isLifecycleCall || isSuperCall)
            return;
        this.addFailureAtNode(node, Rule.FAILURE_STRING);
    };
    return Walker;
}(ngWalker_1.NgWalker));
