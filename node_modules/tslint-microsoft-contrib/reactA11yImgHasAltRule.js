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
var ROLE_STRING = 'role';
var ALT_STRING = 'alt';
var TITLE_STRING = 'title';
var IMAGE_FILENAME_REGEX = new RegExp('^.*\\.(jpg|bmp|jpeg|jfif|gif|png|tif|tiff)$', 'i');
function getFailureStringNoAlt(tagName) {
    return "<" + tagName + "> elements must have an non-empty alt attribute or use empty alt attribute as well as role='presentation' for decorative/presentational images. A reference for the presentation role can be found at https://www.w3.org/TR/wai-aria/roles#presentation.";
}
exports.getFailureStringNoAlt = getFailureStringNoAlt;
function getFailureStringEmptyAltAndNotPresentationRole(tagName) {
    return "The value of alt attribute in <" + tagName + "> tag is empty and role value is not presentation. Add more details in alt attribute or specify role attribute to equal 'presentation' when 'alt' attribute is empty.";
}
exports.getFailureStringEmptyAltAndNotPresentationRole = getFailureStringEmptyAltAndNotPresentationRole;
function getFailureStringNonEmptyAltAndPresentationRole(tagName) {
    return "The value of alt attribute in <" + tagName + "> tag is non-empty and role value is presentation. Remove role='presentation' or specify 'alt' attribute to be empty when role attributes equals 'presentation'.";
}
exports.getFailureStringNonEmptyAltAndPresentationRole = getFailureStringNonEmptyAltAndPresentationRole;
function getFailureStringEmptyAltAndNotEmptyTitle(tagName) {
    return "The value of alt attribute in <" + tagName + "> tag is empty and the role is presentation, but the value of its title attribute is not empty. Remove the title attribute.";
}
exports.getFailureStringEmptyAltAndNotEmptyTitle = getFailureStringEmptyAltAndNotEmptyTitle;
function getFailureStringAltIsImageFileName(tagName) {
    return "The value of alt attribute in <" + tagName + "> tag is an image file name. Give meaningful value to the alt attribute ";
}
exports.getFailureStringAltIsImageFileName = getFailureStringAltIsImageFileName;
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
            additionalTagNames: args.length > 0 ? args[0] : [],
            allowNonEmptyAltWithRolePresentation: args.length > 1 ? args[1].allowNonEmptyAltWithRolePresentation : false
        };
    };
    Rule.metadata = {
        ruleName: 'react-a11y-img-has-alt',
        type: 'maintainability',
        description: 'Enforce that an img element contains the non-empty alt attribute. ' +
            'For decorative images, using empty alt attribute and role="presentation".',
        options: 'string[]',
        rationale: "References:\n        <ul>\n          <li><a href=\"https://www.w3.org/TR/WCAG10/wai-pageauth.html#tech-text-equivalent\">Web Content Accessibility Guidelines 1.0</a></li>\n          <li><a href=\"https://www.w3.org/TR/wai-aria/roles#presentation\">ARIA Presentation Role</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/31\">WCAG Rule 31: If an image has an alt or title attribute, it should not have a presentation role</a></li>\n        </ul>",
        optionsDescription: '',
        optionExamples: ['true', '[true, ["Image"]]'],
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
        var targetTagNames = ['img'].concat(ctx.options.additionalTagNames);
        if (!tagName || targetTagNames.indexOf(tagName) === -1) {
            return;
        }
        var nodeAttributes = JsxAttribute_1.getAllAttributesFromJsxElement(node);
        if (nodeAttributes !== undefined && nodeAttributes.some(TypeGuard_1.isJsxSpreadAttribute)) {
            return;
        }
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var altAttribute = attributes[ALT_STRING];
        if (!altAttribute) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringNoAlt(tagName));
        }
        else {
            var roleAttribute = attributes[ROLE_STRING];
            var roleAttributeValue = roleAttribute ? JsxAttribute_1.getStringLiteral(roleAttribute) : '';
            var titleAttribute = attributes[TITLE_STRING];
            var isPresentationRole = !!String(roleAttributeValue)
                .toLowerCase()
                .match(/\bpresentation\b/);
            var isEmptyAlt = JsxAttribute_1.isEmpty(altAttribute) || JsxAttribute_1.getStringLiteral(altAttribute) === '';
            var isEmptyTitle = JsxAttribute_1.isEmpty(titleAttribute) || JsxAttribute_1.getStringLiteral(titleAttribute) === '';
            var isAltImageFileName = !isEmptyAlt && IMAGE_FILENAME_REGEX.test(JsxAttribute_1.getStringLiteral(altAttribute) || '');
            if (!isEmptyAlt && isPresentationRole && !ctx.options.allowNonEmptyAltWithRolePresentation && !titleAttribute) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringNonEmptyAltAndPresentationRole(tagName));
            }
            else if (isEmptyAlt && !isPresentationRole && !titleAttribute) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringEmptyAltAndNotPresentationRole(tagName));
            }
            else if (isEmptyAlt && titleAttribute && !isEmptyTitle) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringEmptyAltAndNotEmptyTitle(tagName));
            }
            else if (isAltImageFileName) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringAltIsImageFileName(tagName));
            }
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
//# sourceMappingURL=reactA11yImgHasAltRule.js.map