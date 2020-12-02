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
var FAILURE_STRING = 'Do not use http-equiv="refresh"';
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
        ruleName: 'react-a11y-meta',
        type: 'functionality',
        description: 'For accessibility of your website, HTML meta elements must not have http-equiv="refresh".',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateOpeningElement(parent, openElement) {
        if (openElement.tagName.getText() === 'meta') {
            var attributes = openElement.attributes;
            attributes.properties.forEach(function (parameter) {
                if (parameter.kind === ts.SyntaxKind.JsxAttribute) {
                    var attribute = parameter;
                    if (attribute.name.getText() === 'http-equiv') {
                        if (attribute.initializer !== undefined && isStringLiteral(attribute.initializer, 'refresh')) {
                            ctx.addFailureAt(parent.getStart(), openElement.getWidth(), FAILURE_STRING);
                        }
                    }
                }
            });
        }
    }
    function cb(node) {
        if (tsutils.isJsxSelfClosingElement(node)) {
            validateOpeningElement(node, node);
            return;
        }
        if (tsutils.isJsxElement(node)) {
            validateOpeningElement(node, node.openingElement);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
function isStringLiteral(expression, literal) {
    if (expression !== undefined) {
        if (expression.kind === ts.SyntaxKind.StringLiteral) {
            var value = expression.text;
            return value === literal;
        }
        if (expression.kind === ts.SyntaxKind.JsxExpression) {
            var exp = expression;
            if (exp.expression !== undefined && exp.expression.kind === ts.SyntaxKind.StringLiteral) {
                var value = exp.expression.text;
                return value === literal;
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=reactA11yMetaRule.js.map