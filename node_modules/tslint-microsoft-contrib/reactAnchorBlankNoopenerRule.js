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
var Utils_1 = require("./utils/Utils");
var JsxAttribute_1 = require("./utils/JsxAttribute");
var OPTION_FORCE_REL_REDUNDANCY = 'force-rel-redundancy';
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
            forceRelRedundancy: false
        };
        if (options.ruleArguments !== undefined && options.ruleArguments.length > 0) {
            parsed.forceRelRedundancy = options.ruleArguments.indexOf(OPTION_FORCE_REL_REDUNDANCY) > -1;
        }
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-anchor-blank-noopener',
        type: 'functionality',
        description: 'Anchor tags with target="_blank" should also include rel="noreferrer"',
        options: {
            type: 'array',
            items: {
                type: 'string',
                enum: [OPTION_FORCE_REL_REDUNDANCY]
            },
            minLength: 0,
            maxLength: 1
        },
        optionsDescription: "One argument may be optionally provided: \n\n' +\n            '* `" + OPTION_FORCE_REL_REDUNDANCY + "` ignores the default `rel=\"noreferrer\"`\n            behaviour which implies `rel=\"noreferrer noopener\"`. Instead, force redundancy\n            for `rel` attribute.",
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '242,676'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var failureString = ctx.options.forceRelRedundancy
        ? 'Anchor tags with target="_blank" should also include rel="noopener noreferrer"'
        : 'Anchor tags with target="_blank" should also include rel="noreferrer"';
    function validateOpeningElement(openingElement) {
        if (openingElement.tagName.getText() === 'a') {
            var allAttributes = JsxAttribute_1.getJsxAttributesFromJsxElement(openingElement);
            var target = allAttributes['target'];
            var rel = allAttributes['rel'];
            if (target !== undefined &&
                JsxAttribute_1.getStringLiteral(target) === '_blank' &&
                !isRelAttributeValue(rel, ctx.options.forceRelRedundancy)) {
                ctx.addFailureAt(openingElement.getStart(), openingElement.getWidth(), failureString);
            }
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
function isRelAttributeValue(attribute, forceRedundancy) {
    if (JsxAttribute_1.isEmpty(attribute)) {
        return false;
    }
    if (attribute.initializer !== undefined && attribute.initializer.kind === ts.SyntaxKind.JsxExpression) {
        var expression = attribute.initializer;
        if (expression.expression !== undefined && expression.expression.kind !== ts.SyntaxKind.StringLiteral) {
            return true;
        }
    }
    var stringValue = JsxAttribute_1.getStringLiteral(attribute);
    if (stringValue === undefined || stringValue.length === 0) {
        return false;
    }
    var relValues = stringValue.split(/\s+/);
    return forceRedundancy
        ? Utils_1.Utils.contains(relValues, 'noreferrer') && Utils_1.Utils.contains(relValues, 'noopener')
        : Utils_1.Utils.contains(relValues, 'noreferrer');
}
//# sourceMappingURL=reactAnchorBlankNoopenerRule.js.map