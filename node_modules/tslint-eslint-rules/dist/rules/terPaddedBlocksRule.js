"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var RULE_NAME = 'ter-padded-blocks';
var OPTION_ALWAYS = 'always';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.formatOptions = function (ruleArguments) {
        var config = ruleArguments[0] || OPTION_ALWAYS;
        if (typeof (config) === 'string') {
            var always = config === OPTION_ALWAYS;
            return {
                blocks: always,
                classes: always,
                switches: always
            };
        }
        return {
            blocks: config['blocks'] && config['blocks'] === OPTION_ALWAYS,
            classes: config['classes'] && config['classes'] === OPTION_ALWAYS,
            switches: config['switches'] && config['switches'] === OPTION_ALWAYS
        };
    };
    Rule.prototype.apply = function (sourceFile) {
        var opt = this.formatOptions(this.ruleArguments);
        var walker = new RuleWalker(sourceFile, this.ruleName, opt);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'enforces consistent empty line padding within blocks',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Some style guides require block statements to start and end with blank\n      lines. The goal is to improve readability by visually separating the\n      block content and the surrounding code.\n      "], ["\n      Some style guides require block statements to start and end with blank\n      lines. The goal is to improve readability by visually separating the\n      block content and the surrounding code.\n      "]))),
        optionsDescription: 'This rule has one option, which can be a string option or an object option',
        options: {
            type: 'array',
            items: [
                {
                    enum: ['always', 'never']
                },
                {
                    type: 'object',
                    properties: {
                        blocks: {
                            enum: ['always', 'never']
                        },
                        classes: {
                            enum: ['always', 'never']
                        },
                        switches: {
                            enum: ['always', 'never']
                        }
                    },
                    additionalProperties: false
                }
            ],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n        "], ["\n        \"", "\": [true, \"never\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"blocks\": \"always\" }]\n        "], ["\n        \"", "\": [true, { \"blocks\": \"always\" }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"blocks\": \"never\" }]\n        "], ["\n        \"", "\": [true, { \"blocks\": \"never\" }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    Rule.FAILURE_STRING = {
        always: 'Block must be padded by blank lines.',
        never: 'Block must not be padded by blank lines.'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var RuleWalker = (function (_super) {
    tslib_1.__extends(RuleWalker, _super);
    function RuleWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuleWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        sourceFile.forEachChild(function (node) { return _this.processNode(node); });
    };
    RuleWalker.prototype.processNode = function (node) {
        var _this = this;
        switch (node.kind) {
            case ts.SyntaxKind.Block:
            case ts.SyntaxKind.ClassDeclaration:
            case ts.SyntaxKind.CaseBlock:
                this.checkPadding(node);
        }
        node.forEachChild(function (child) { return _this.processNode(child); });
    };
    RuleWalker.prototype.getParts = function (node) {
        var openBrace, body, closeBrace;
        node.getChildren().forEach(function (child) {
            if (child.kind === ts.SyntaxKind.OpenBraceToken) {
                openBrace = child;
            }
            else if (child.kind === ts.SyntaxKind.SyntaxList) {
                body = child;
            }
            else if (child.kind === ts.SyntaxKind.CloseBraceToken) {
                closeBrace = child;
            }
        });
        return {
            openBrace: openBrace,
            body: body,
            closeBrace: closeBrace
        };
    };
    RuleWalker.prototype.getPositions = function (node) {
        var _a = this.getParts(node), openBrace = _a.openBrace, body = _a.body, closeBrace = _a.closeBrace;
        var firstChild = body.getChildAt(0);
        var lastChild = body.getChildAt(body.getChildCount() - 1);
        var positions = {
            openPosition: openBrace.getStart(this.sourceFile),
            openLine: this.getLine(openBrace.getStart(this.sourceFile)),
            closePosition: closeBrace.getEnd(),
            closeLine: this.getLine(closeBrace.getEnd())
        };
        if (firstChild) {
            positions.firstChildPosition = firstChild.getStart(this.sourceFile);
            positions.firstChildLine = this.getLine(positions.firstChildPosition);
        }
        if (lastChild) {
            positions.lastChildPosition = lastChild.getEnd();
            positions.lastChildLine = this.getLine(positions.lastChildPosition);
        }
        return positions;
    };
    RuleWalker.prototype.checkPadding = function (node) {
        var _this = this;
        var paddingAllowed = this.options.blocks;
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
            paddingAllowed = this.options.classes;
        }
        else if (node.parent && node.parent.kind === ts.SyntaxKind.SwitchStatement) {
            paddingAllowed = this.options.switches;
        }
        if (paddingAllowed === undefined) {
            return;
        }
        var positions = this.getPositions(node);
        var openBraceReplacement = {
            from: positions.openPosition + 1,
            to: positions.firstChildPosition || positions.closePosition
        };
        var closeBraceReplacement = {
            from: positions.lastChildPosition || positions.openPosition,
            to: positions.closePosition - 1
        };
        var comments = [];
        tsutils_1.forEachComment(node, function (_fullText, comment) {
            if (comment.pos > positions.openPosition && comment.pos < positions.closePosition) {
                var commentLineEnd = _this.getLine(comment.end);
                if (commentLineEnd > positions.openLine) {
                    comments.push(comment);
                }
                else if (commentLineEnd === positions.openLine) {
                    openBraceReplacement.from = comment.end;
                }
            }
        });
        if (comments.length > 0) {
            var firstCommentLine = this.getLine(comments[0].pos);
            var lastCommentLine = this.getLine(comments[comments.length - 1].end);
            if (!positions.firstChildLine || firstCommentLine < positions.firstChildLine) {
                positions.firstChildLine = firstCommentLine;
                positions.firstChildPosition = comments[0].pos;
                openBraceReplacement.to = positions.firstChildPosition;
            }
            if (!positions.lastChildLine || lastCommentLine >= positions.lastChildLine) {
                positions.lastChildLine = lastCommentLine;
                positions.lastChildPosition = comments[comments.length - 1].end;
                closeBraceReplacement.from = positions.lastChildPosition;
            }
        }
        if (this.getLine(openBraceReplacement.from) !== this.getLine(openBraceReplacement.to)) {
            openBraceReplacement.to = this.getPosition(this.getLine(openBraceReplacement.to));
        }
        if (this.getLine(closeBraceReplacement.from) !== this.getLine(closeBraceReplacement.to)) {
            closeBraceReplacement.to = this.getPosition(this.getLine(closeBraceReplacement.to));
        }
        if (positions.firstChildLine === undefined && positions.lastChildLine === undefined) {
            return;
        }
        var openPadded = false;
        if (positions.firstChildLine !== undefined) {
            openPadded = positions.firstChildLine - positions.openLine > 1;
        }
        else {
            openPadded = positions.closeLine - positions.openLine > 1;
        }
        var closePadded = false;
        if (positions.lastChildLine !== undefined) {
            closePadded = positions.closeLine - positions.lastChildLine > 1;
        }
        else {
            closePadded = positions.closeLine - positions.openLine > 1;
        }
        if (paddingAllowed ? !openPadded : openPadded) {
            var openFix = Lint.Replacement.replaceFromTo(openBraceReplacement.from, openBraceReplacement.to, paddingAllowed ? '\n\n' : '\n');
            this.addFailure(positions.openPosition, positions.openPosition + 1, paddingAllowed ? Rule.FAILURE_STRING.always : Rule.FAILURE_STRING.never, openFix);
        }
        if (paddingAllowed ? !closePadded : closePadded) {
            var closeFix = Lint.Replacement.replaceFromTo(closeBraceReplacement.from, closeBraceReplacement.to, paddingAllowed ? '\n\n' : '\n');
            this.addFailure(positions.closePosition - 1, positions.closePosition, paddingAllowed ? Rule.FAILURE_STRING.always : Rule.FAILURE_STRING.never, closeFix);
        }
    };
    RuleWalker.prototype.getLine = function (pos) {
        return this.sourceFile.getLineAndCharacterOfPosition(pos).line;
    };
    RuleWalker.prototype.getPosition = function (line) {
        return this.sourceFile.getPositionOfLineAndCharacter(line, 0);
    };
    return RuleWalker;
}(Lint.AbstractWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlclBhZGRlZEJsb2Nrc1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixtQ0FBeUM7QUFFekMsSUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUM7QUFDdEMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBTy9CO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFxRkEsQ0FBQztJQXpCUyw0QkFBYSxHQUFyQixVQUFzQixhQUFvQjtRQUN4QyxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDO1FBRWpELElBQUksT0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssYUFBYSxDQUFDO1lBRXhDLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsUUFBUSxFQUFFLE1BQU07YUFDakIsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLGFBQWE7WUFDOUQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssYUFBYTtZQUNqRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxhQUFhO1NBQ3JFLENBQUM7SUFDSixDQUFDO0lBRU0sb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFD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QUFDLFdBQVcsRUFBRTtZQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FDN0MscUJBQXFCLENBQUMsSUFBSSxFQUMxQixxQkFBcUIsQ0FBQyxFQUFFLEVBQ3hCLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9CLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxDQUNiLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUMzQixTQUFTLENBQUMsYUFBYSxFQUN2QixjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFDdkUsUUFBUSxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyw0QkFBTyxHQUFmLFVBQWdCLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDSCxpQkFBQztBQUFELENBOUtBLEFBOEtDLENBOUt3QixJQUFJLENBQUMsY0FBYyxHQThLM0MiLCJmaWxlIjoicnVsZXMvdGVyUGFkZGVkQmxvY2tzUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
