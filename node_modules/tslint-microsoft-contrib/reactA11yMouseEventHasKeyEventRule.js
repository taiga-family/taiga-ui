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
var MOUSE_EVENTS = {
    onMouseOver: {
        value: 'onmouseover',
        jsxValue: 'onMouseOver'
    },
    onMouseOut: {
        value: 'onmouseout',
        jsxValue: 'onMouseOut'
    }
};
var FOCUS_EVENTS = {
    onFocus: {
        value: 'onfocus',
        jsxValue: 'onFocus'
    },
    onBlur: {
        value: 'onblur',
        jsxValue: 'onBlur'
    }
};
function getFailureString(mouseEvent, focusEvent) {
    return mouseEvent + " must be accompanied by " + focusEvent + ".";
}
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'react-a11y-mouse-event-has-key-event',
        type: 'maintainability',
        description: 'For accessibility of your website, elements with mouseOver/mouseOut should be accompanied by onFocus/onBlur keyboard events.',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/59/\">Focusable elements with mouseOver should also have onFocus event handlers.</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/60/\">Focusable elements with onMouseOut should also have onBlur event handlers.</a></li>\n        </ul>",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function isSpreadAttribute(node) {
    var nodeAttributes = JsxAttribute_1.getAllAttributesFromJsxElement(node);
    return nodeAttributes !== undefined && nodeAttributes.some(TypeGuard_1.isJsxSpreadAttribute);
}
function checkMouseEventForFocus(_a) {
    var mouseEvent = _a.mouseEvent, focusEvent = _a.focusEvent, node = _a.node, ctx = _a.ctx;
    var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
    if (attributes === undefined) {
        return;
    }
    if (isSpreadAttribute(node)) {
        return;
    }
    var attributeKeys = new Set(Object.keys(attributes));
    if (attributeKeys.has(mouseEvent.value) && !attributeKeys.has(focusEvent.value)) {
        var errorMessage = getFailureString(mouseEvent.jsxValue, focusEvent.jsxValue);
        ctx.addFailureAt(node.getStart(), node.getWidth(), errorMessage);
    }
}
function walk(ctx) {
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node) || tsutils.isJsxOpeningElement(node)) {
            checkMouseEventForFocus({ mouseEvent: MOUSE_EVENTS.onMouseOver, focusEvent: FOCUS_EVENTS.onFocus, node: node, ctx: ctx });
            checkMouseEventForFocus({ mouseEvent: MOUSE_EVENTS.onMouseOut, focusEvent: FOCUS_EVENTS.onBlur, node: node, ctx: ctx });
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yMouseEventHasKeyEventRule.js.map