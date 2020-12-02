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
var ARIA_SCHEMA = require('./utils/attributes/ariaSchema.json');
function getFailureString(name) {
    return "This attribute name '" + name + "' is an invalid ARIA attribute. A reference to valid ARIA attributes can be found at https://www.w3.org/TR/2014/REC-wai-aria-20140320/states_and_properties#state_prop_def ";
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
        ruleName: 'react-a11y-props',
        type: 'maintainability',
        description: 'Enforce all `aria-*` attributes are valid. Elements cannot use an invalid `aria-*` attribute.',
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
            if (!name_1 || !name_1.match(/^aria-/i)) {
                return;
            }
            if (!ARIA_SCHEMA[name_1.toLowerCase()]) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString(name_1));
            }
        }
        else {
            return ts.forEachChild(node, cb);
        }
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yPropsRule.js.map