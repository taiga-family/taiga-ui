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
var getImplicitRole_1 = require("./utils/getImplicitRole");
var DOM_SCHEMA = require('./utils/attributes/domSchema.json');
var FAILURE_STRING = 'Elements with event handlers must have role attribute.';
var ROLE_STRING = 'role';
var TARGET_EVENTS = [
    'click',
    'keyup',
    'keydown',
    'keypress',
    'mousedown',
    'mouseup',
    'mousemove',
    'mouseout',
    'mouseover',
    'onclick',
    'onkeyup',
    'onkeydown',
    'onkeypress',
    'onmousedown',
    'onmouseup',
    'onmousemove',
    'onmouseout',
    'onmouseover'
];
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-event-has-role',
        type: 'maintainability',
        description: 'Elements with event handlers must have role attribute.',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/94\">WCAG Rule 94</a></li>\n          <li><a href=\"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role\">\n            Using the button role\n          </a></li>\n        </ul>\n        ",
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
    function checkJsxOpeningElement(node) {
        var tagName = node.tagName.getText();
        if (!DOM_SCHEMA[tagName]) {
            return;
        }
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var events = TARGET_EVENTS.filter(function (eventName) { return !!attributes[eventName]; });
        var hasAriaRole = !!attributes[ROLE_STRING] || !!getImplicitRole_1.getImplicitRole(node);
        if (events.length > 0 && !hasAriaRole) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING);
        }
    }
    function cb(node) {
        if (tsutils.isJsxElement(node)) {
            checkJsxOpeningElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            checkJsxOpeningElement(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yEventHasRoleRule.js.map