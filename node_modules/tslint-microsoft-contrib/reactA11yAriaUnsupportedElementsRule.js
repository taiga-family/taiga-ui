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
var DOM_SCHEMA = require('./utils/attributes/domSchema.json');
var ARIA_SCHEMA = require('./utils/attributes/ariaSchema.json');
function getFailureString(tagName, ariaAttributeNames) {
    return ("This element " + tagName + " does not support ARIA roles, states and properties. " +
        ("Try removing attribute(s): " + ariaAttributeNames.join(', ') + "."));
}
exports.getFailureString = getFailureString;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-aria-unsupported-elements',
        type: 'maintainability',
        description: 'Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.',
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
        if (!DOM_SCHEMA[tagName]) {
            return;
        }
        var supportAria = DOM_SCHEMA[tagName].supportAria !== undefined ? DOM_SCHEMA[tagName].supportAria : false;
        if (supportAria) {
            return;
        }
        var checkAttributeNames = Object.keys(ARIA_SCHEMA).concat('role');
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var invalidAttributeNames = checkAttributeNames.filter(function (attributeName) { return !!attributes[attributeName]; });
        if (invalidAttributeNames.length > 0) {
            var message = getFailureString(tagName, invalidAttributeNames);
            ctx.addFailureAt(node.getStart(), node.getWidth(), message);
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
//# sourceMappingURL=reactA11yAriaUnsupportedElementsRule.js.map