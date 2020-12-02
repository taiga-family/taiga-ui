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
var FAILURE_STRING_MANIPULATION = 'Replace HTML string manipulation with jQuery API: ';
var FAILURE_STRING_COMPLEX = 'Replace complex HTML strings with jQuery API: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-jquery-raw-elements',
        type: 'maintainability',
        description: 'Do not create HTML elements using JQuery and string concatenation. It is error prone and can hide subtle defects.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function isComplexHtmlElement(literal) {
        var text = literal.text.trim();
        if (/^<.*>$/.test(text) === false) {
            return false;
        }
        if (/^<[A-Za-z]+\s*\/?>$/.test(text) === true) {
            return false;
        }
        if (/^<[A-Za-z]+\s*>\s*<\/[A-Za-z]+\s*>$/m.test(text) === true) {
            return false;
        }
        var match = text.match(/^<[A-Za-z]+\s*>(.*)<\/[A-Za-z]+\s*>$/m);
        if (match !== null && match[1] !== undefined) {
            var enclosedContent = match[1];
            if (enclosedContent.indexOf('<') === -1 && enclosedContent.indexOf('>') === -1) {
                return false;
            }
        }
        return true;
    }
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            var functionName = AstUtils_1.AstUtils.getFunctionName(node);
            if (AstUtils_1.AstUtils.isJQuery(functionName) && node.arguments.length > 0) {
                var firstArg = node.arguments[0];
                if (tsutils.isStringLiteral(firstArg)) {
                    if (isComplexHtmlElement(firstArg)) {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING_COMPLEX + node.getText());
                    }
                }
                else {
                    htmlLikeStringLiteralFinder(ctx, node);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
function htmlLikeStringLiteralFinder(ctx, expr) {
    var node = expr.arguments[0];
    var textExpr = node.getText();
    if (textExpr.indexOf('<') > -1 || textExpr.indexOf('>') > -1) {
        ctx.addFailureAt(expr.getStart(), expr.getWidth(), FAILURE_STRING_MANIPULATION + expr.getText());
    }
}
//# sourceMappingURL=noJqueryRawElementsRule.js.map