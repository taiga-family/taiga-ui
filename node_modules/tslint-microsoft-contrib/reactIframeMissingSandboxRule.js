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
var FAILURE_NOT_FOUND = 'An iframe element requires a sandbox attribute';
var FAILURE_INVALID_ENTRY = 'An iframe element defines an invalid sandbox attribute: ';
var FAILURE_INVALID_COMBINATION = 'An iframe element defines a sandbox with both allow-scripts and allow-same-origin';
var ALLOWED_VALUES = [
    '',
    'allow-forms',
    'allow-modals',
    'allow-orientation-lock',
    'allow-pointer-lock',
    'allow-popups',
    'allow-popups-to-escape-sandbox',
    'allow-same-origin',
    'allow-scripts',
    'allow-top-navigation'
];
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk);
        }
        return [];
    };
    Rule.metadata = {
        ruleName: 'react-iframe-missing-sandbox',
        type: 'functionality',
        description: 'React iframes must specify a sandbox attribute',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        group: 'Security',
        commonWeaknessEnumeration: '915'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function handleJsxOpeningElement(node) {
        if (node.tagName.getText() !== 'iframe') {
            return;
        }
        var sandboxAttributeFound = false;
        node.attributes.properties.forEach(function (attribute) {
            if (attribute.kind === ts.SyntaxKind.JsxAttribute) {
                var jsxAttribute = attribute;
                var attributeName = jsxAttribute.name.text;
                if (attributeName === 'sandbox') {
                    sandboxAttributeFound = true;
                    if (jsxAttribute.initializer !== undefined && jsxAttribute.initializer.kind === ts.SyntaxKind.StringLiteral) {
                        validateSandboxValue(jsxAttribute.initializer);
                    }
                }
            }
        });
        if (!sandboxAttributeFound) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_NOT_FOUND);
        }
    }
    function validateSandboxValue(node) {
        var values = node.text.split(' ');
        var allowScripts = false;
        var allowSameOrigin = false;
        values.forEach(function (attributeValue) {
            if (ALLOWED_VALUES.indexOf(attributeValue) === -1) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_INVALID_ENTRY + attributeValue);
            }
            if (attributeValue === 'allow-scripts') {
                allowScripts = true;
            }
            if (attributeValue === 'allow-same-origin') {
                allowSameOrigin = true;
            }
        });
        if (allowScripts && allowSameOrigin) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_INVALID_COMBINATION);
        }
    }
    function cb(node) {
        if (tsutils.isJsxElement(node)) {
            handleJsxOpeningElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            handleJsxOpeningElement(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactIframeMissingSandboxRule.js.map