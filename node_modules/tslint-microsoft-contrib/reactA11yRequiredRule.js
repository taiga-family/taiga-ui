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
var FAILURE_STRING = 'Required input elements must have an aria-required set to true';
var REQUIRED_STRING = 'required';
var ARIA_REQUIRED_STRING = 'aria-required';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-required',
        type: 'functionality',
        description: 'Enforce that required input elements must have aria-required set to true',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://www.clarissapeterson.com/2012/11/html5-accessibility/\">Acessibility in HTML5</a></li>\n        </ul>",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
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
        var requiredAttribute = attributes[REQUIRED_STRING];
        if (!requiredAttribute) {
            return;
        }
        var ariaRequiredAttribute = attributes[ARIA_REQUIRED_STRING];
        if (!ariaRequiredAttribute || JsxAttribute_1.isEmpty(ariaRequiredAttribute) || !JsxAttribute_1.getBooleanLiteral(ariaRequiredAttribute)) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING);
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
//# sourceMappingURL=reactA11yRequiredRule.js.map