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
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX
            ? this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()))
            : [];
    };
    Rule.prototype.parseOptions = function (options) {
        var args = options.ruleArguments;
        return {
            additionalTagNames: Array.isArray(args) && args.length > 0 ? args[0] : []
        };
    };
    Rule.metadata = {
        ruleName: 'react-a11y-no-onchange',
        type: 'functionality',
        description: 'For accessibility of your website, enforce usage of onBlur over onChange on select menus.',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://cita.disability.uiuc.edu/html-best-practices/auto/onchange.php\">OnChange Event Accessibility Issues</a></li>\n          <li><a href=\"https://www.w3.org/TR/WCAG10/wai-pageauth.html#gl-own-interface\">Guideline 8. Ensure direct accessibility of embedded user interfaces.</a></li>\n        </ul>\n        ",
        options: 'string[]',
        optionsDescription: 'Additional tag names to validate.',
        optionExamples: ['true', '[true, ["Select"]]'],
        typescriptOnly: false,
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
    function checkJsxOpeningElement(node) {
        var tagName = node.tagName.getText();
        var targetTagNames = ['select'].concat(ctx.options.additionalTagNames);
        if (!tagName || targetTagNames.indexOf(tagName) === -1) {
            return;
        }
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        if (attributes.hasOwnProperty('onchange') && !attributes.hasOwnProperty('onblur')) {
            var errorMessage = "onChange event handler should not be used with the <" + tagName + ">. Please use onBlur instead.";
            ctx.addFailureAt(node.getStart(), node.getWidth(), errorMessage);
        }
    }
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            checkJsxOpeningElement(node);
        }
        else if (tsutils.isJsxElement(node)) {
            checkJsxOpeningElement(node.openingElement);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yNoOnchangeRule.js.map