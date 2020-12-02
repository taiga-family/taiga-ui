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
var ChaiUtils_1 = require("./utils/ChaiUtils");
var BASE_ERROR = 'Found chai call with vague failure message;';
var FAILURE_STRING = BASE_ERROR + " please add an explicit failure message";
var FAILURE_STRING_COMPARE_TRUE = BASE_ERROR + " move the strict equality comparison from the expect call into the assertion value";
var FAILURE_STRING_COMPARE_FALSE = BASE_ERROR + " move the strict inequality comparison from the expect call into the assertion value";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'chai-vague-errors',
        type: 'maintainability',
        description: 'Avoid Chai assertions that result in vague errors',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isPropertyAccessExpression(node)) {
            if (ChaiUtils_1.ChaiUtils.isExpectInvocation(node)) {
                if (/ok|true|false|undefined|null/.test(node.name.getText())) {
                    var expectInvocation = ChaiUtils_1.ChaiUtils.getExpectInvocation(node);
                    if (!expectInvocation || expectInvocation.arguments.length !== 2) {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING);
                    }
                }
            }
        }
        if (tsutils.isCallExpression(node)) {
            if (ChaiUtils_1.ChaiUtils.isExpectInvocation(node)) {
                if (tsutils.isPropertyAccessExpression(node.expression)) {
                    if (ChaiUtils_1.ChaiUtils.isEqualsInvocation(node.expression)) {
                        if (node.arguments.length === 1) {
                            if (/true|false|null|undefined/.test(node.arguments[0].getText())) {
                                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING);
                            }
                        }
                    }
                }
                var actualValue = ChaiUtils_1.ChaiUtils.getFirstExpectCallParameter(node);
                if (actualValue && tsutils.isBinaryExpression(actualValue)) {
                    var expectedValue = ChaiUtils_1.ChaiUtils.getFirstExpectationParameter(node);
                    if (expectedValue) {
                        var operator = actualValue.operatorToken.getText();
                        var expectingBooleanKeyword = expectedValue.kind === ts.SyntaxKind.TrueKeyword || expectedValue.kind === ts.SyntaxKind.FalseKeyword;
                        if (operator === '===' && expectingBooleanKeyword) {
                            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING_COMPARE_TRUE);
                        }
                        else if (operator === '!==' && expectingBooleanKeyword) {
                            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING_COMPARE_FALSE);
                        }
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=chaiVagueErrorsRule.js.map