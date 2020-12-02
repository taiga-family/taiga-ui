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
function getFailureString() {
    return 'The value of tabindex attribute is invalid or undefined. It must be either -1 or 0.';
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
        ruleName: 'react-a11y-tabindex-no-positive',
        type: 'maintainability',
        description: 'Enforce tabindex value is **not greater than zero**.',
        rationale: "References:\n        <ul>\n          <li><a href=\"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-order\">WCAG 2.4.3 - Focus Order</a></li>\n          <li><a href=\"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#tabindex-usage\">Audit Rules - tabindex-usage</a></li>\n          <li><a href=\"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03\">Avoid positive integer values for tabIndex</a></li>\n        </ul>",
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
    function cb(node) {
        if (tsutils.isJsxAttribute(node)) {
            var name_1 = JsxAttribute_1.getPropName(node);
            if (!name_1 || name_1.toLowerCase() !== 'tabindex') {
                return;
            }
            var literalString = JsxAttribute_1.getNumericLiteral(node) || JsxAttribute_1.getStringLiteral(node);
            if (literalString === '') {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString());
            }
            else if (literalString && literalString !== '-1' && literalString !== '0') {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString());
            }
            else if (JsxAttribute_1.isEmpty(node)) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString());
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yTabindexNoPositiveRule.js.map