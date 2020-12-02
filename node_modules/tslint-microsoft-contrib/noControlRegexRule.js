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
var tsutils = require("tsutils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-control-regex',
        type: 'maintainability',
        description: 'Do not use control characters in regular expressions',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Correctness'
    };
    Rule.FAILURE_STRING = 'Unexpected control character in regular expression';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isNewExpression(node) || tsutils.isCallExpression(node)) {
            validateCall(node);
        }
        if (tsutils.isRegularExpressionLiteral(node)) {
            if (/(\\x[0-1][0-9a-f])/.test(node.getText())) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.FAILURE_STRING);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function validateCall(expression) {
        if (expression.expression.getText() === 'RegExp' && expression.arguments && expression.arguments.length > 0) {
            var arg = expression.arguments[0];
            if (tsutils.isStringLiteral(arg)) {
                var regexpText = arg.text;
                if (/[\x00-\x1f]/.test(regexpText)) {
                    ctx.addFailureAt(arg.getStart(), arg.getWidth(), Rule.FAILURE_STRING);
                }
            }
        }
    }
}
//# sourceMappingURL=noControlRegexRule.js.map