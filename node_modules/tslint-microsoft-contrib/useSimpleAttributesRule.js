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
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'use-simple-attributes',
        type: 'functionality',
        description: 'Enforce usage of only simple attribute types.',
        rationale: 'Simpler attributes in JSX and TSX files helps keep code clean and readable.\
            Separate complex expressions into their own line and use clear variable names to make your code more understandable.',
        options: null,
        optionsDescription: '',
        typescriptOnly: false,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Correctness'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function checkJsxOpeningElement(node) {
        var attributes = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        for (var _i = 0, _a = Object.keys(attributes); _i < _a.length; _i++) {
            var key = _a[_i];
            var attribute = attributes[key];
            var binaryExpression = getNextNodeRecursive(attribute, ts.SyntaxKind.BinaryExpression);
            if (binaryExpression && !isSimpleBinaryExpression(binaryExpression)) {
                var binaryExpressionErrorMessage = 'Attribute contains a complex binary expression';
                ctx.addFailureAt(node.getStart(), node.getWidth(), binaryExpressionErrorMessage);
            }
            var ternaryExpression = getNextNodeRecursive(attribute, ts.SyntaxKind.ConditionalExpression);
            if (ternaryExpression) {
                var ternaryExpressionErrorMessage = 'Attribute contains a ternary expression';
                ctx.addFailureAt(node.getStart(), node.getWidth(), ternaryExpressionErrorMessage);
            }
        }
    }
    function getNextNodeRecursive(node, kind) {
        if (!node) {
            return undefined;
        }
        var childNodes = node.getChildren();
        var match = childNodes.find(function (cn) { return cn.kind === kind; });
        if (!match) {
            for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
                var childNode = childNodes_1[_i];
                match = getNextNodeRecursive(childNode, kind);
            }
        }
        return match;
    }
    function isSimpleBinaryExpression(binaryExpression) {
        if (binaryExpression.kind !== ts.SyntaxKind.BinaryExpression) {
            return false;
        }
        var allowedBinaryNodes = [
            ts.SyntaxKind.NumericLiteral,
            ts.SyntaxKind.StringLiteral,
            ts.SyntaxKind.TrueKeyword,
            ts.SyntaxKind.FalseKeyword,
            ts.SyntaxKind.Identifier
        ];
        var leftTerm = allowedBinaryNodes.find(function (kind) { return kind === binaryExpression.left.kind; });
        var rightTerm = allowedBinaryNodes.find(function (kind) { return kind === binaryExpression.right.kind; });
        return leftTerm ? (rightTerm ? true : false) : false;
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
//# sourceMappingURL=useSimpleAttributesRule.js.map