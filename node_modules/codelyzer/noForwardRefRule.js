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
var typescript_1 = require("typescript/lib/typescript");
exports.FORWARD_REF = 'forwardRef';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: "Disallows usage of `" + exports.FORWARD_REF + "` references for DI.",
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: "The flow of DI is disrupted by using `" + exports.FORWARD_REF + "` and might make code more difficult to understand.",
        ruleName: 'no-forward-ref',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Avoid using `" + exports.FORWARD_REF + "`";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var validateCallExpression = function (context, node) {
    if (node.expression.getText() !== exports.FORWARD_REF)
        return;
    context.addFailureAtNode(node, Rule.FAILURE_STRING);
};
var walk = function (context) {
    var sourceFile = context.sourceFile;
    var callback = function (node) {
        if (typescript_1.isCallExpression(node))
            validateCallExpression(context, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};
