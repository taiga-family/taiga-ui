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
var Spacing;
(function (Spacing) {
    Spacing[Spacing["always"] = 0] = "always";
    Spacing[Spacing["never"] = 1] = "never";
})(Spacing || (Spacing = {}));
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {
            spacing: Spacing.always,
            allowMultiline: false
        };
        if (options.ruleArguments[0] === 'never') {
            parsed.spacing = Spacing.never;
        }
        if (options.ruleArguments[1] !== undefined) {
            parsed.allowMultiline = options.ruleArguments[1].allowMultiline !== false;
        }
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-tsx-curly-spacing',
        type: 'style',
        description: 'Consistently use spaces around the brace characters of JSX attributes.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        recommendation: 'false',
        group: 'Deprecated'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateBraceSpacing(node, first, second, violationRoot) {
        if (first === undefined || second === undefined || violationRoot === undefined) {
            return;
        }
        if (isMultiline(first, second)) {
            if (!ctx.options.allowMultiline) {
                reportFailure(node, violationRoot, getFailureForNewLine(first, violationRoot));
            }
        }
        else if (ctx.options.spacing === Spacing.always) {
            if (!isSpaceBetweenTokens(first, second)) {
                reportFailure(node, violationRoot, getFailureForSpace(first, violationRoot));
            }
        }
        else {
            if (isSpaceBetweenTokens(first, second)) {
                reportFailure(node, violationRoot, getFailureForSpace(first, violationRoot));
            }
        }
    }
    function getFailureForSpace(first, violationRoot) {
        if (ctx.options.spacing === Spacing.always) {
            if (first === violationRoot) {
                return "A space is required after '" + violationRoot.getText() + "'";
            }
            return "A space is required before '" + violationRoot.getText() + "'";
        }
        if (first === violationRoot) {
            return "There should be no space after '" + violationRoot.getText() + "'";
        }
        return "There should be no space before '" + violationRoot.getText() + "'";
    }
    function getFailureForNewLine(first, violationRoot) {
        if (first === violationRoot) {
            return "There should be no newline after '" + violationRoot.getText() + "'";
        }
        return "There should be no newline before '" + violationRoot.getText() + "'";
    }
    function reportFailure(start, endNode, failure) {
        ctx.addFailureAt(start.getStart(), endNode.getStart() - start.getStart(), failure);
    }
    function isSpaceBetweenTokens(left, right) {
        var text = ctx.sourceFile.getText().slice(left.getEnd(), right.getStart());
        return /\s/.test(text.replace(/\/\*.*?\*\//g, ''));
    }
    function isMultiline(left, right) {
        var sourceFile = ctx.sourceFile;
        var leftLine = sourceFile.getLineAndCharacterOfPosition(left.getStart()).line;
        var rightLine = sourceFile.getLineAndCharacterOfPosition(right.getStart()).line;
        return leftLine !== rightLine;
    }
    function cb(node) {
        if (tsutils.isJsxExpression(node)) {
            var childrenCount = node.getChildCount();
            if (childrenCount > 2) {
                var first = node.getFirstToken();
                var last = node.getLastToken();
                var second = node.getChildAt(1);
                var penultimate = node.getChildAt(childrenCount - 2);
                validateBraceSpacing(node, first, second, first);
                validateBraceSpacing(node, penultimate, last, last);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactTsxCurlySpacingRule.js.map