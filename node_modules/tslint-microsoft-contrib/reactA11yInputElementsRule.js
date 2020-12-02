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
exports.MISSING_PLACEHOLDER_INPUT_FAILURE_STRING = 'Input elements must include default, place-holding characters if empty';
exports.MISSING_PLACEHOLDER_TEXTAREA_FAILURE_STRING = 'Textarea elements must include default, place-holding characters if empty';
var EXCLUDED_INPUT_TYPES = ['checkbox', 'radio'];
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
        ruleName: 'react-a11y-input-elements',
        type: 'functionality',
        description: 'For accessibility of your website, HTML input boxes and text areas must include default, place-holding characters.',
        rationale: "References:\n        <ul>\n          <li><a href=\"https://www.w3.org/TR/WAI-WEBCONTENT-TECHS/#tech-place-holders\">\n            WCAG 10.4\n          </a></li>\n          <li><a href=\"https://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-specific\">\n            WCAG 11.5\n          </a></li>\n        </ul>",
        options: undefined,
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
function isTypeMatchedTo(node, attributes, condition) {
    if (attributes.type === undefined) {
        return false;
    }
    for (var _i = 0, _a = node.attributes.properties; _i < _a.length; _i++) {
        var attribute = _a[_i];
        if (tsutils.isJsxAttribute(attribute)) {
            if (attribute.initializer !== undefined && tsutils.isStringLiteral(attribute.initializer)) {
                var attributeText = attribute.initializer.text;
                if (condition(attributeText)) {
                    return true;
                }
            }
        }
    }
    return false;
}
function isExcludedInputType(node, attributes) {
    return isTypeMatchedTo(node, attributes, function (attributeText) { return EXCLUDED_INPUT_TYPES.indexOf(attributeText) !== -1; });
}
function isInputTypeFile(node, attributes) {
    return isTypeMatchedTo(node, attributes, function (attributeText) { return attributeText === 'file'; });
}
function walk(ctx) {
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            var tagName = node.tagName.getText();
            if (tagName === 'input') {
                var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
                var isExcludedInput = isExcludedInputType(node, attributes);
                var isExcludedInputTypeValueEmpty = JsxAttribute_1.isEmpty(attributes.value) && isExcludedInput;
                var isPlaceholderEmpty = JsxAttribute_1.isEmpty(attributes.placeholder) && !isExcludedInput;
                if (isInputTypeFile(node, attributes)) {
                    return;
                }
                if ((JsxAttribute_1.isEmpty(attributes.value) && isPlaceholderEmpty) || isExcludedInputTypeValueEmpty) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), exports.MISSING_PLACEHOLDER_INPUT_FAILURE_STRING);
                }
            }
            else if (tagName === 'textarea') {
                var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
                if (JsxAttribute_1.isEmpty(attributes.placeholder)) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), exports.MISSING_PLACEHOLDER_TEXTAREA_FAILURE_STRING);
                }
            }
        }
        else if (tsutils.isJsxElement(node)) {
            var tagName = node.openingElement.tagName.getText();
            var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
            if (tagName === 'textarea') {
                if (node.children.length === 0 && JsxAttribute_1.isEmpty(attributes.placeholder)) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), exports.MISSING_PLACEHOLDER_TEXTAREA_FAILURE_STRING);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yInputElementsRule.js.map