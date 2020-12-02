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
var Utils_1 = require("./utils/Utils");
var EMPTY_TITLE_FAILURE_STRING = 'Title elements must not be empty';
var LONG_TITLE_FAILURE_STRING = 'Title length must not be longer than 60 characters';
var WORD_TITLE_FAILURE_STRING = 'Title must contain more than one word';
var MAX_TITLE_LENGTH = 60;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk);
        }
        return [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-titles',
        type: 'functionality',
        description: 'For accessibility of your website, HTML title elements must be concise and non-empty.',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title\">WCAG 2.0 - Requirement 2.4.2 Page Titled (Level A)</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/13\">OAA-Accessibility Rule 13: Title element should not be empty</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/24\">OAA-Accessibility Rule 24: Title content should be concise</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/25\">OAA-Accessibility Rule 25: Title text must contain more than one word</a></li>\n        </ul>",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateTitleText(text, titleNode) {
        if (text.length > MAX_TITLE_LENGTH) {
            ctx.addFailureAt(titleNode.getStart(), titleNode.getWidth(), LONG_TITLE_FAILURE_STRING + ': ' + Utils_1.Utils.trimTo(text, 20));
        }
        else if (!(text.indexOf(' ') > 0)) {
            ctx.addFailureAt(titleNode.getStart(), titleNode.getWidth(), WORD_TITLE_FAILURE_STRING + ': ' + Utils_1.Utils.trimTo(text, 20));
        }
    }
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            if (node.tagName.getText() === 'title') {
                ctx.addFailureAt(node.getStart(), node.getWidth(), EMPTY_TITLE_FAILURE_STRING);
            }
        }
        else if (tsutils.isJsxElement(node)) {
            if (node.openingElement.tagName.getText() === 'title') {
                if (node.children.length === 0) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), EMPTY_TITLE_FAILURE_STRING);
                }
                else if (node.children.length === 1) {
                    if (node.children[0].kind === ts.SyntaxKind.JsxText) {
                        var value = node.children[0];
                        validateTitleText(value.getText(), node);
                    }
                    else if (node.children[0].kind === ts.SyntaxKind.JsxExpression) {
                        var exp = node.children[0];
                        if (exp.expression !== undefined && exp.expression.kind === ts.SyntaxKind.StringLiteral) {
                            validateTitleText(exp.expression.text, node);
                        }
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yTitlesRule.js.map