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
var TypeGuard_1 = require("./utils/TypeGuard");
var NO_ALT_ATTRIBUTE_FAILURE_STRING = 'Inputs element with type="image" must have alt attribute.';
var EMPTY_ALT_ATTRIBUTE_FAILURE_STRING = 'Inputs element with type="image" must have non-empty alt attribute.';
var TYPE_STRING = 'type';
var ALT_STRING = 'alt';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-image-button-has-alt',
        type: 'maintainability',
        description: 'Enforce that inputs element with type="image" must have alt attribute.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateOpeningElement(node) {
        var tagName = node.tagName.getText();
        if (tagName !== 'input') {
            return;
        }
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var typeAttribute = attributes[TYPE_STRING];
        if (!typeAttribute || typeAttribute.initializer === undefined || !TypeGuard_1.isStringLiteral(typeAttribute.initializer)) {
            return;
        }
        var stringLiteral = JsxAttribute_1.getStringLiteral(typeAttribute);
        if (stringLiteral === undefined || stringLiteral.toLowerCase() !== 'image') {
            return;
        }
        var altAttribute = attributes[ALT_STRING];
        if (!altAttribute) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), NO_ALT_ATTRIBUTE_FAILURE_STRING);
        }
        else if (JsxAttribute_1.isEmpty(altAttribute) || !JsxAttribute_1.getStringLiteral(altAttribute)) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), EMPTY_ALT_ATTRIBUTE_FAILURE_STRING);
        }
    }
    function cb(node) {
        if (tsutils.isJsxElement(node)) {
            validateOpeningElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            validateOpeningElement(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yImageButtonHasAltRule.js.map