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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var Utils_1 = require("./utils/Utils");
var getImplicitRole_1 = require("./utils/getImplicitRole");
var JsxAttribute_1 = require("./utils/JsxAttribute");
var TypeGuard_1 = require("./utils/TypeGuard");
exports.OPTION_IGNORE_CASE = 'ignore-case';
exports.OPTION_IGNORE_WHITESPACE = 'ignore-whitespace';
var ROLE_STRING = 'role';
exports.NO_HASH_FAILURE_STRING = 'Do not use # as anchor href.';
exports.MISSING_HREF_FAILURE_STRING = 'Do not leave href undefined or null';
exports.LINK_TEXT_TOO_SHORT_FAILURE_STRING = 'Link text or the alt text of image in link should be at least 4 characters long. ' +
    "If you are not using <a> element as anchor, please specify explicit role, e.g. role='button'";
exports.UNIQUE_ALT_FAILURE_STRING = 'Links with images and text content, the alt attribute should be unique to the text content or empty.';
exports.SAME_HREF_SAME_TEXT_FAILURE_STRING = 'Links with the same HREF should have the same link text.';
exports.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING = 'Links that point to different HREFs should have different link text.';
exports.ACCESSIBLE_HIDDEN_CONTENT_FAILURE_STRING = 'Link content can not be hidden for screen-readers by using aria-hidden attribute.';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
        }
        return [];
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {
            ignoreCase: false,
            ignoreWhitespace: ''
        };
        options.ruleArguments.forEach(function (opt) {
            if (typeof opt === 'string' && opt === exports.OPTION_IGNORE_CASE) {
                parsed.ignoreCase = true;
            }
            if (TypeGuard_1.isObject(opt)) {
                parsed.ignoreWhitespace = opt[exports.OPTION_IGNORE_WHITESPACE];
            }
        });
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-a11y-anchors',
        type: 'functionality',
        description: 'For accessibility of your website, anchor elements must have a href different from # and a text longer than 4.',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/38\">WCAG Rule 38: Link text should be as least four 4 characters long</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/39\">WCAG Rule 39: Links with the same HREF should have the same link text</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/41\">WCAG Rule 41: Links that point to different HREFs should have different link text</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/43\">WCAG Rule 43: Links with images and text content, the alt attribute should be unique to the text content or empty</a></li>\n        </ul>",
        options: {
            type: 'array',
            items: {
                type: 'string',
                enum: [exports.OPTION_IGNORE_CASE, exports.OPTION_IGNORE_WHITESPACE]
            },
            minLength: 0,
            maxLength: 2
        },
        optionsDescription: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        Optional arguments to relax the same HREF same link text rule are provided:\n        * `", "` ignore differences in cases.\n        * `{\"", "\": \"trim\"}` ignore differences only in leading/trailing whitespace.\n        * `{\"", "\": \"all\"}` ignore differences in all whitespace.\n        "], ["\n        Optional arguments to relax the same HREF same link text rule are provided:\n        * \\`", "\\` ignore differences in cases.\n        * \\`{\"", "\": \"trim\"}\\` ignore differences only in leading/trailing whitespace.\n        * \\`{\"", "\": \"all\"}\\` ignore differences in all whitespace.\n        "])), exports.OPTION_IGNORE_CASE, exports.OPTION_IGNORE_WHITESPACE, exports.OPTION_IGNORE_WHITESPACE),
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
    var anchorInfoList = [];
    function validateAllAnchors() {
        var sameHrefDifferentTexts = [];
        var differentHrefSameText = [];
        var _loop_1 = function () {
            var current = anchorInfoList.shift();
            anchorInfoList.forEach(function (anchorInfo) {
                if (current.href &&
                    current.href === anchorInfo.href &&
                    !compareAnchorsText(current, anchorInfo) &&
                    !Utils_1.Utils.contains(sameHrefDifferentTexts, anchorInfo)) {
                    sameHrefDifferentTexts.push(anchorInfo);
                    ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.SAME_HREF_SAME_TEXT_FAILURE_STRING + firstPosition(current));
                }
                if (current.href !== anchorInfo.href &&
                    compareAnchorsText(current, anchorInfo) &&
                    !Utils_1.Utils.contains(differentHrefSameText, anchorInfo)) {
                    differentHrefSameText.push(anchorInfo);
                    ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + firstPosition(current));
                }
            });
        };
        while (anchorInfoList.length > 0) {
            _loop_1();
        }
    }
    function compareAnchorsText(anchor1, anchor2) {
        var text1 = anchor1.text;
        var text2 = anchor2.text;
        var altText1 = anchor1.altText;
        var altText2 = anchor2.altText;
        if (ctx.options.ignoreCase) {
            text1 = text1.toLowerCase();
            text2 = text2.toLowerCase();
            altText1 = altText1.toLowerCase();
            altText2 = altText2.toLowerCase();
        }
        if (ctx.options.ignoreWhitespace === 'trim') {
            text1 = text1.trim();
            text2 = text2.trim();
            altText1 = altText1.trim();
            altText2 = altText2.trim();
        }
        if (ctx.options.ignoreWhitespace === 'all') {
            var regex = /\s/g;
            text1 = text1.replace(regex, '');
            text2 = text2.replace(regex, '');
            altText1 = altText1.replace(regex, '');
            altText2 = altText2.replace(regex, '');
        }
        return text1 === text2 && altText1 === altText2;
    }
    function firstPosition(anchorInfo) {
        var startPosition = ctx.sourceFile.getLineAndCharacterOfPosition(Math.min(anchorInfo.start, ctx.sourceFile.end));
        var character = startPosition.character + 1;
        var line = startPosition.line + 1;
        return " First link at character: " + character + " line: " + line;
    }
    function validateAnchor(parent, openingElement) {
        if (openingElement.tagName.getText() === 'a') {
            var hrefAttribute = getAttribute(openingElement, 'href');
            var anchorInfo = {
                href: hrefAttribute ? JsxAttribute_1.getStringLiteral(hrefAttribute) || '' : '',
                text: anchorText(parent),
                altText: imageAlt(parent),
                hasAriaHiddenCount: jsxElementAriaHidden(parent),
                start: parent.getStart(),
                width: parent.getWidth()
            };
            if (JsxAttribute_1.isEmpty(hrefAttribute)) {
                ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.MISSING_HREF_FAILURE_STRING);
            }
            if (anchorInfo.href === '#') {
                ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.NO_HASH_FAILURE_STRING);
            }
            if (anchorInfo.hasAriaHiddenCount > 0) {
                ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.ACCESSIBLE_HIDDEN_CONTENT_FAILURE_STRING);
            }
            if (anchorInfo.altText && anchorInfo.altText === anchorInfo.text) {
                ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.UNIQUE_ALT_FAILURE_STRING);
            }
            var anchorInfoTextLength = anchorInfo.text ? anchorInfo.text.length : 0;
            var anchorImageAltTextLength = anchorInfo.altText ? anchorInfo.altText.length : 0;
            if (anchorRole(openingElement) === 'link' && anchorInfoTextLength < 4 && anchorImageAltTextLength < 4) {
                ctx.addFailureAt(anchorInfo.start, anchorInfo.width, exports.LINK_TEXT_TOO_SHORT_FAILURE_STRING);
            }
            anchorInfoList.push(anchorInfo);
        }
    }
    function getAttribute(openingElement, attributeName) {
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(openingElement);
        return attributes[attributeName];
    }
    function anchorText(root, isChild) {
        if (isChild === void 0) { isChild = false; }
        var title = '';
        if (root === undefined) {
            return title;
        }
        if (root.kind === ts.SyntaxKind.JsxElement) {
            var jsxElement = root;
            jsxElement.children.forEach(function (child) {
                title += anchorText(child, true);
            });
        }
        else if (root.kind === ts.SyntaxKind.JsxText) {
            var jsxText = root;
            title += jsxText.getText();
        }
        else if (root.kind === ts.SyntaxKind.StringLiteral) {
            var literal = root;
            title += literal.text;
        }
        else if (root.kind === ts.SyntaxKind.JsxExpression) {
            var expression = root;
            title += anchorText(expression.expression);
        }
        else if (isChild && root.kind === ts.SyntaxKind.JsxSelfClosingElement) {
            var jsxSelfClosingElement = root;
            if (jsxSelfClosingElement.tagName.getText() !== 'img') {
                title += '<component>';
            }
        }
        else if (root.kind !== ts.SyntaxKind.JsxSelfClosingElement) {
            title += '<unknown>';
        }
        return title;
    }
    function anchorRole(root) {
        var attributesInElement = JsxAttribute_1.getJsxAttributesFromJsxElement(root);
        var roleProp = attributesInElement[ROLE_STRING];
        return roleProp ? JsxAttribute_1.getStringLiteral(roleProp) : getImplicitRole_1.getImplicitRole(root);
    }
    function imageAltAttribute(openingElement) {
        if (openingElement.tagName.getText() === 'img') {
            var altAttribute = JsxAttribute_1.getStringLiteral(getAttribute(openingElement, 'alt'));
            return altAttribute === undefined ? '<unknown>' : altAttribute;
        }
        return '';
    }
    function imageAlt(root) {
        var altText = '';
        if (root.kind === ts.SyntaxKind.JsxElement) {
            var jsxElement = root;
            altText += imageAltAttribute(jsxElement.openingElement);
            jsxElement.children.forEach(function (child) {
                altText += imageAlt(child);
            });
        }
        if (root.kind === ts.SyntaxKind.JsxSelfClosingElement) {
            var jsxSelfClosingElement = root;
            altText += imageAltAttribute(jsxSelfClosingElement);
        }
        return altText;
    }
    function ariaHiddenAttribute(openingElement) {
        return getAttribute(openingElement, 'aria-hidden') === undefined;
    }
    function jsxElementAriaHidden(root) {
        var hasAriaHiddenCount = 0;
        if (root.kind === ts.SyntaxKind.JsxElement) {
            var jsxElement = root;
            hasAriaHiddenCount += ariaHiddenAttribute(jsxElement.openingElement) ? 0 : 1;
            jsxElement.children.forEach(function (child) {
                hasAriaHiddenCount += jsxElementAriaHidden(child);
            });
        }
        if (root.kind === ts.SyntaxKind.JsxSelfClosingElement) {
            var jsxSelfClosingElement = root;
            hasAriaHiddenCount += ariaHiddenAttribute(jsxSelfClosingElement) ? 0 : 1;
        }
        return hasAriaHiddenCount;
    }
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            validateAnchor(node, node);
        }
        else if (tsutils.isJsxElement(node)) {
            validateAnchor(node, node.openingElement);
        }
        return ts.forEachChild(node, cb);
    }
    ts.forEachChild(ctx.sourceFile, cb);
    validateAllAnchors();
}
var templateObject_1;
//# sourceMappingURL=reactA11yAnchorsRule.js.map