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
var JsxAttribute_1 = require("./utils/JsxAttribute");
var IFRAME_ELEMENT_NAME = 'iframe';
var TITLE_ATTRIBUTE_NAME = 'title';
var SRC_ATTRIBUTE_NAME = 'src';
var HIDDEN_ATTRIBUTE_NAME = 'hidden';
var IFRAME_EMPTY_TITLE_ERROR_STRING = 'An iframe element must have a non-empty title.';
var IFRAME_EMPTY_OR_HIDDEN_ERROR_STRING = 'An iframe element should not be hidden or empty.';
var IFRAME_UNIQUE_TITLE_ERROR_STRING = 'An iframe element must have a unique title.';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-iframes',
        type: 'functionality',
        description: 'Enforce that iframe elements are not empty, have title, and are unique.',
        options: null,
        optionsDescription: '',
        typescriptOnly: false,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var previousTitles = new Set();
    function cb(node) {
        if (tsutils.isVariableDeclaration(node) || tsutils.isMethodDeclaration(node) || tsutils.isFunctionDeclaration(node)) {
            previousTitles.clear();
        }
        if (tsutils.isJsxOpeningElement(node) || tsutils.isJsxSelfClosingElement(node)) {
            if (node.tagName.getText() === IFRAME_ELEMENT_NAME) {
                var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
                var titleAttribute = attributes[TITLE_ATTRIBUTE_NAME];
                var titleAttributeText = getAttributeText(titleAttribute);
                if (!titleAttribute || !titleAttributeText) {
                    ctx.addFailureAtNode(node.tagName, IFRAME_EMPTY_TITLE_ERROR_STRING);
                }
                if (titleAttributeText && previousTitles.has(titleAttributeText)) {
                    ctx.addFailureAtNode(node.tagName, IFRAME_UNIQUE_TITLE_ERROR_STRING);
                }
                else if (titleAttributeText) {
                    previousTitles.add(titleAttributeText);
                }
                var hiddenAttribute = attributes[HIDDEN_ATTRIBUTE_NAME];
                var srcAttribute = attributes[SRC_ATTRIBUTE_NAME];
                if (hiddenAttribute || !srcAttribute || !getAttributeText(srcAttribute)) {
                    ctx.addFailureAtNode(node.tagName, IFRAME_EMPTY_OR_HIDDEN_ERROR_STRING);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
function getAttributeText(attribute) {
    if (attribute && attribute.initializer) {
        if (tsutils.isJsxExpression(attribute.initializer)) {
            return attribute.initializer.expression ? attribute.initializer.expression.getText() : undefined;
        }
        if (tsutils.isStringLiteral(attribute.initializer)) {
            return attribute.initializer.text;
        }
    }
    return undefined;
}
//# sourceMappingURL=reactA11yIframesRule.js.map