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
var BAD_ORDER_HEADING_FAILURE_STRING = "Heading elements shouldn't increase by more then one level consecutively";
var EMPTY_HEADING_FAILURE_STRING = 'Heading elements must not be empty';
var BAD_HEADING_LENGTH_STRING = 'Heading content should be concise';
var BAD_NUMBER_H1_HEADING_FAILURE_STRING = 'H1 heading cannot exceed 2 elements';
var VALID_HEADING_TYPES = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
var MAX_NUMBER_OF_H1_HEADINGS = 2;
var MAX_HEADING_LENGTH_DEFAULT = 60;
var MAX_HEADING_LENGTH_ATTRIBUTE_NAME = 'maxHeadingLength';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
        }
        return [];
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {};
        var option = options.ruleArguments.find(function (a) { return a.hasOwnProperty(MAX_HEADING_LENGTH_ATTRIBUTE_NAME); });
        if (option && typeof option[MAX_HEADING_LENGTH_ATTRIBUTE_NAME] === 'number') {
            parsed.maxHeadingTextLength = option[MAX_HEADING_LENGTH_ATTRIBUTE_NAME];
        }
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-a11y-accessible-headings',
        type: 'functionality',
        description: "For accessibility of your website, there should be no more than 2 H1 heading elements, HTML heading elements must be concise, shouldn't increase by more then one level consecutively and non-empty.",
        options: {
            maxHeadingLength: 'number'
        },
        optionsDescription: 'An optional number for a maximum text length of heading elements.',
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
    function validate(node) {
        var elements = [];
        var h1HeadingCounter = 0;
        var previousHeadingNumber;
        tsutils.forEachToken(node, function (childNode) {
            var parentNode = childNode.parent;
            if (tsutils.isJsxOpeningElement(parentNode) && VALID_HEADING_TYPES.has(childNode.getText())) {
                elements.push(parentNode.parent);
            }
        });
        elements.forEach(function (element) {
            var openingElement = element.openingElement;
            var headingNumber = parseInt(openingElement.tagName.getText()[1], 10);
            if (!previousHeadingNumber) {
                previousHeadingNumber = headingNumber;
            }
            else if (headingNumber > previousHeadingNumber && previousHeadingNumber + 1 !== headingNumber) {
                ctx.addFailureAt(openingElement.getStart(), openingElement.getWidth(), BAD_ORDER_HEADING_FAILURE_STRING);
            }
            else {
                previousHeadingNumber = headingNumber;
            }
            if (openingElement.tagName.getText().toLowerCase() === 'h1') {
                h1HeadingCounter += 1;
                if (h1HeadingCounter > MAX_NUMBER_OF_H1_HEADINGS) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), BAD_NUMBER_H1_HEADING_FAILURE_STRING);
                }
            }
            validateHeadingText(element);
        });
    }
    function validateHeadingText(headingNode) {
        if (headingNode.children.length === 0) {
            ctx.addFailureAt(headingNode.getStart(), headingNode.getWidth(), EMPTY_HEADING_FAILURE_STRING);
        }
        else {
            var textResults = [];
            getTextRecursive(headingNode, textResults);
            if (textResults.length) {
                var maxHeadingLength = ctx.options.maxHeadingTextLength ? ctx.options.maxHeadingTextLength : MAX_HEADING_LENGTH_DEFAULT;
                if (textResults.join('').length > maxHeadingLength) {
                    ctx.addFailureAt(headingNode.getStart(), headingNode.getWidth(), BAD_HEADING_LENGTH_STRING);
                }
            }
        }
    }
    function getTextRecursive(node, textResults) {
        if (textResults === void 0) { textResults = []; }
        if (!node) {
            return;
        }
        if (tsutils.isJsxElement(node)) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var childNode = _a[_i];
                var textResult = void 0;
                if (tsutils.isJsxExpression(childNode)) {
                    textResult = extractFromExpression(childNode);
                }
                else if (tsutils.isJsxText(childNode)) {
                    textResult = childNode.getText();
                }
                if (textResult) {
                    textResults.push(textResult);
                }
                getTextRecursive(childNode, textResults);
            }
        }
    }
    function extractFromExpression(expressionNode) {
        if (!expressionNode.expression || !tsutils.isStringLiteral(expressionNode.expression)) {
            return undefined;
        }
        return expressionNode.expression.text;
    }
    function cb(node) {
        if (tsutils.isFunctionDeclaration(node)) {
            validate(node);
        }
        else if (tsutils.isMethodDeclaration(node)) {
            validate(node);
        }
        else if (tsutils.isVariableDeclaration(node)) {
            validate(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yAccessibleHeadingsRule.js.map