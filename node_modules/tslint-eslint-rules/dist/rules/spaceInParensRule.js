"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'space-in-parens';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new SpaceInParensWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'require or disallow spaces inside parentheses',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      This rule will enforce consistency of spacing directly inside of parentheses,\n      by disallowing or requiring one or more spaces to the right of (and to the\n      left of). In either case, () will still be allowed.\n      "], ["\n      This rule will enforce consistency of spacing directly inside of parentheses,\n      by disallowing or requiring one or more spaces to the right of (and to the\n      left of). In either case, () will still be allowed.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      There are two options for this rule:\n\n      - `\"never\"` (default) enforces zero spaces inside of parentheses\n      - `\"always\"` enforces a space inside of parentheses\n\n      Depending on your coding conventions, you can choose either option by specifying\n      it in your configuration.\n      "], ["\n      There are two options for this rule:\n\n      - \\`\"never\"\\` (default) enforces zero spaces inside of parentheses\n      - \\`\"always\"\\` enforces a space inside of parentheses\n\n      Depending on your coding conventions, you can choose either option by specifying\n      it in your configuration.\n      "]))),
        options: {
            type: 'array',
            items: [
                {
                    enum: ['always', 'never']
                },
                {
                    type: 'object',
                    properties: {
                        exceptions: {
                            type: 'array',
                            items: [
                                {
                                    enum: ['{}', '[]', '()', 'empty']
                                }
                            ],
                            uniqueItems: true
                        }
                    },
                    additionalProperties: false
                }
            ],
            minItems: 0,
            maxItems: 2
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n        "], ["\n        \"", "\": [true, \"never\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\", { \"exceptions\": [ \"{}\", \"[]\", \"()\", \"empty\" ] }]\n        "], ["\n        \"", "\": [true, \"always\", { \"exceptions\": [ \"{}\", \"[]\", \"()\", \"empty\" ] }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    Rule.MISSING_SPACE_MESSAGE = 'there must be a space inside this paren.';
    Rule.REJECTED_SPACE_MESSAGE = 'there should be no spaces inside this paren.';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var SpaceInParensWalker = (function (_super) {
    tslib_1.__extends(SpaceInParensWalker, _super);
    function SpaceInParensWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.exceptionsArrayOptions = [];
        var ruleOptions = _this.getOptions();
        _this.spaced = _this.hasOption('always');
        if (ruleOptions[1]) {
            _this.exceptionsArrayOptions = (ruleOptions.length === 2) ? ruleOptions[1].exceptions : [];
            if (_this.exceptionsArrayOptions.length) {
                _this.braceException = _this.exceptionsArrayOptions.indexOf('{}') !== -1;
                _this.bracketException = _this.exceptionsArrayOptions.indexOf('[]') !== -1;
                _this.parenException = _this.exceptionsArrayOptions.indexOf('()') !== -1;
                _this.empty = _this.exceptionsArrayOptions.indexOf('empty') !== -1;
            }
        }
        return _this;
    }
    SpaceInParensWalker.prototype.getExceptions = function () {
        var openers = [];
        var closers = [];
        if (this.braceException) {
            openers.push(ts.SyntaxKind.OpenBraceToken);
            closers.push(ts.SyntaxKind.CloseBraceToken);
        }
        if (this.bracketException) {
            openers.push(ts.SyntaxKind.OpenBracketToken);
            closers.push(ts.SyntaxKind.CloseBracketToken);
        }
        if (this.parenException) {
            openers.push(ts.SyntaxKind.OpenParenToken);
            closers.push(ts.SyntaxKind.CloseParenToken);
        }
        if (this.empty) {
            openers.push(ts.SyntaxKind.CloseParenToken);
            closers.push(ts.SyntaxKind.OpenParenToken);
        }
        return {
            openers: openers,
            closers: closers
        };
    };
    SpaceInParensWalker.prototype.findParenNodes = function (node) {
        var children = node.getChildren();
        var first;
        var second;
        var penultimate;
        var last;
        for (var i = 0; i < children.length; i++) {
            if (children[i].kind === ts.SyntaxKind.OpenParenToken) {
                first = children[i];
                second = children[i + 1];
            }
            if (children[i].kind === ts.SyntaxKind.CloseParenToken) {
                penultimate = children[i - 1];
                last = children[i];
            }
        }
        return [first, second, penultimate, last];
    };
    SpaceInParensWalker.prototype.visitNode = function (node) {
        var parenNodes = this.findParenNodes(node);
        this.checkParanSpace(parenNodes[0], parenNodes[1], parenNodes[2], parenNodes[3]);
        _super.prototype.visitNode.call(this, node);
    };
    SpaceInParensWalker.prototype.checkParanSpace = function (first, second, penultimate, last) {
        if (first && second) {
            if (this.shouldOpenerHaveSpace(first, second)) {
                var fix = Lint.Replacement.appendText(first.getEnd(), ' ');
                this.addFailure(this.createFailure(first.getEnd(), 0, Rule.MISSING_SPACE_MESSAGE, fix));
            }
            if (this.shouldOpenerRejectSpace(first, second)) {
                var width = second.getStart() - first.getEnd();
                var fix = Lint.Replacement.deleteText(first.getEnd(), width);
                this.addFailure(this.createFailure(first.getEnd(), 0, Rule.REJECTED_SPACE_MESSAGE, fix));
            }
        }
        if (penultimate && last) {
            if (this.shouldCloserHaveSpace(penultimate, last)) {
                var fix = Lint.Replacement.appendText(penultimate.getEnd(), ' ');
                this.addFailure(this.createFailure(last.getStart(), 0, Rule.MISSING_SPACE_MESSAGE, fix));
            }
            if (this.shouldCloserRejectSpace(penultimate, last)) {
                var width = last.getStart() - penultimate.getEnd();
                var fix = Lint.Replacement.deleteText(penultimate.getEnd(), width);
                this.addFailure(this.createFailure(last.getStart(), 0, Rule.REJECTED_SPACE_MESSAGE, fix));
            }
        }
    };
    SpaceInParensWalker.prototype.shouldOpenerHaveSpace = function (left, right) {
        if (this.isSpaceBetween(left, right))
            return false;
        if (this.spaced) {
            if (right.getText().trim() === '')
                return false;
            return !this.isOpenerException(right.getFirstToken());
        }
        return this.isOpenerException(right.getFirstToken());
    };
    SpaceInParensWalker.prototype.shouldCloserHaveSpace = function (left, right) {
        if (left.getText().trim() === '')
            return false;
        if (this.isSpaceBetween(left, right))
            return false;
        if (this.spaced)
            return !this.isCloserException(left.getLastToken());
        return this.isCloserException(left.getLastToken());
    };
    SpaceInParensWalker.prototype.shouldOpenerRejectSpace = function (left, right) {
        if (right.getText().trim() === '')
            return false;
        if (this.isLineBreakBetween(left, right))
            return false;
        if (!this.isSpaceBetween(left, right))
            return false;
        if (this.spaced)
            return this.isOpenerException(right.getFirstToken());
        return !this.isOpenerException(right.getFirstToken());
    };
    SpaceInParensWalker.prototype.shouldCloserRejectSpace = function (left, right) {
        if (left.getText().trim() === '')
            return false;
        if (this.isLineBreakBetween(left, right))
            return false;
        if (!this.isSpaceBetween(left, right))
            return false;
        if (this.spaced)
            return this.isCloserException(left.getLastToken());
        return !this.isCloserException(left.getLastToken());
    };
    SpaceInParensWalker.prototype.isOpenerException = function (token) {
        if (!token)
            return false;
        return this.getExceptions().openers.indexOf(token.kind) >= 0;
    };
    SpaceInParensWalker.prototype.isCloserException = function (token) {
        if (!token)
            return false;
        return this.getExceptions().closers.indexOf(token.kind) >= 0;
    };
    SpaceInParensWalker.prototype.isSpaceBetween = function (node, nextNode) {
        return nextNode.getStart() - node.getEnd() > 0;
    };
    SpaceInParensWalker.prototype.isLineBreakBetween = function (node, nextNode) {
        return this.getEndPosition(node).line !== this.getStartPosition(nextNode).line;
    };
    SpaceInParensWalker.prototype.getStartPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());
    };
    SpaceInParensWalker.prototype.getEndPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getEnd());
    };
    return SpaceInParensWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxnREFBa0IsR0FBMUIsVUFBMkIsSUFBYSxFQUFFLFFBQWlCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDO0lBRU8sOENBQWdCLEdBQXhCLFVBQXlCLElBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLDRDQUFjLEdBQXRCLFVBQXVCLElBQWE7UUFDbEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FuS0EsQUFtS0MsQ0FuS2lDLElBQUksQ0FBQyxVQUFVLEdBbUtoRCIsImZpbGUiOiJydWxlcy9zcGFjZUluUGFyZW5zUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
