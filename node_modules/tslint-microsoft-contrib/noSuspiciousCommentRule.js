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
var FAILURE_STRING = 'Suspicious comment found: ';
var SUSPICIOUS_WORDS = ['BUG', 'HACK', 'FIXME', 'LATER', 'LATER2', 'TODO'];
var FAILURE_STRING_OPTION = '\nTo disable this warning, the comment should include one of the following regex: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-suspicious-comment',
        type: 'maintainability',
        description: "Do not use suspicious comments, such as " + SUSPICIOUS_WORDS.join(', '),
        options: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        optionsDescription: "One argument may be optionally provided: \n\n' +\n            '* an array of regex that disable the warning if one or several of them\n            are found in the comment text. (Example: `['https://github.com/my-org/my-project/*']`)",
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '546'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(options) {
    var value = [];
    (options.ruleArguments || []).forEach(function (regexStr) {
        value.push(new RegExp(regexStr));
    });
    return {
        exceptionRegex: value
    };
}
function walk(ctx) {
    var exceptionRegex = ctx.options.exceptionRegex;
    function cb(node) {
        tsutils_1.forEachTokenWithTrivia(node, function (text, tokenSyntaxKind, range) {
            if (tokenSyntaxKind === ts.SyntaxKind.SingleLineCommentTrivia || tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia) {
                scanCommentForSuspiciousWords(range.pos, text.substring(range.pos, range.end));
            }
        });
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function scanCommentForSuspiciousWords(startPosition, commentText) {
        if (commentContainsExceptionRegex(exceptionRegex, commentText)) {
            return;
        }
        SUSPICIOUS_WORDS.forEach(function (suspiciousWord) {
            scanCommentForSuspiciousWord(suspiciousWord, commentText, startPosition);
        });
    }
    function scanCommentForSuspiciousWord(suspiciousWord, commentText, startPosition) {
        var regexExactCaseNoColon = new RegExp('\\b' + suspiciousWord + '\\b');
        var regexCaseInsensistiveWithColon = new RegExp('\\b' + suspiciousWord + '\\b:', 'i');
        if (regexExactCaseNoColon.test(commentText) || regexCaseInsensistiveWithColon.test(commentText)) {
            foundSuspiciousComment(startPosition, commentText, suspiciousWord);
        }
    }
    function foundSuspiciousComment(startPosition, commentText, suspiciousWord) {
        var errorMessage = FAILURE_STRING + suspiciousWord;
        if (exceptionRegex.length > 0) {
            errorMessage += '.' + getFailureMessageWithExceptionRegexOption();
        }
        ctx.addFailureAt(startPosition, commentText.length, errorMessage);
    }
    function commentContainsExceptionRegex(exceptionRegexes, commentText) {
        for (var _i = 0, exceptionRegexes_1 = exceptionRegexes; _i < exceptionRegexes_1.length; _i++) {
            var regex = exceptionRegexes_1[_i];
            if (regex.test(commentText)) {
                return true;
            }
        }
        return false;
    }
    function getFailureMessageWithExceptionRegexOption() {
        var message = FAILURE_STRING_OPTION;
        exceptionRegex.forEach(function (regex) {
            message += regex.toString();
        });
        return message;
    }
}
//# sourceMappingURL=noSuspiciousCommentRule.js.map