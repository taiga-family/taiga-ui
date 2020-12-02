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
var AstUtils_1 = require("./utils/AstUtils");
var ChaiUtils_1 = require("./utils/ChaiUtils");
var FAILURE_STRING = 'Found chai call with indexOf that can be converted to .contain assertion';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'chai-prefer-contains-to-index-of',
        type: 'maintainability',
        description: 'Avoid Chai assertions that invoke indexOf and compare for a -1 result.',
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
        if (tsutils.isCallExpression(node)) {
            if (ChaiUtils_1.ChaiUtils.isExpectInvocation(node)) {
                if (isFirstArgumentIndexOfResult(node)) {
                    if (tsutils.isPropertyAccessExpression(node.expression)) {
                        if (ChaiUtils_1.ChaiUtils.isEqualsInvocation(node.expression)) {
                            if (isFirstArgumentNegative1(node)) {
                                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING);
                            }
                        }
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    function isFirstArgumentNegative1(node) {
        if (node.arguments && node.arguments.length > 0) {
            var firstArgument = node.arguments[0];
            return firstArgument.getText() === '-1';
        }
        return false;
    }
    function isFirstArgumentIndexOfResult(node) {
        var expectCall = ChaiUtils_1.ChaiUtils.getLeftMostCallExpression(node);
        if (expectCall && expectCall.arguments && expectCall.arguments.length > 0) {
            var firstArgument = expectCall.arguments[0];
            if (tsutils.isCallExpression(firstArgument)) {
                return AstUtils_1.AstUtils.getFunctionName(firstArgument) === 'indexOf';
            }
        }
        return false;
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=chaiPreferContainsToIndexOfRule.js.map