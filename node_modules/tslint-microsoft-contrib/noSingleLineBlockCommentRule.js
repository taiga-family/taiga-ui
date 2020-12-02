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
var tsutils_1 = require("tsutils");
var FAILURE_STRING = 'Replace block comment with a single-line comment';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-single-line-block-comment',
        type: 'maintainability',
        description: 'Avoid single line block comments; use single line comments instead',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Whitespace',
        commonWeaknessEnumeration: '710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        tsutils_1.forEachTokenWithTrivia(node, function (fullText, tokenSyntaxKind, range) {
            var tokenText = fullText.substring(range.pos, range.end);
            if (tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia &&
                isSingleLineComment(tokenText) &&
                !isTsLintSuppression(tokenText) &&
                !isFollowedByMoreCodeOnSameLine(fullText, range)) {
                ctx.addFailureAt(range.pos, range.end - range.pos, FAILURE_STRING);
            }
        });
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function isSingleLineComment(commentText) {
        var lines = commentText.split(/\r?\n/);
        return lines.length === 1;
    }
    function isTsLintSuppression(commentText) {
        return /\/*\s*tslint:(enable|disable):.*/.test(commentText);
    }
    function isFollowedByMoreCodeOnSameLine(fullText, range) {
        var restOfText = fullText.substring(range.end);
        return /^\s*\r?\n/.test(restOfText) === false;
    }
}
//# sourceMappingURL=noSingleLineBlockCommentRule.js.map