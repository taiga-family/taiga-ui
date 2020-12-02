"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-newline-after-var';
var EXPECTED_BLANK_LINE_MESSAGE = 'Expected blank line after variable declarations.';
var UNEXPECTED_BLANK_LINE_MESSAGE = 'Unexpected blank line after variable declarations.';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.formatOptions = function (_a) {
        var alwaysOrNever = _a[0];
        return {
            always: alwaysOrNever !== 'never'
        };
    };
    Rule.prototype.apply = function (sourceFile) {
        var opt = this.formatOptions(this.ruleArguments);
        var walker = new RuleWalker(sourceFile, this.ruleName, opt);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: true,
        description: 'require or disallow an empty line after variable declarations',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      This rule enforces a coding style where empty lines are required or disallowed after `var`, `let`, or `const`\n      statements to achieve a consistent coding style across the project.\n      "], ["\n      This rule enforces a coding style where empty lines are required or disallowed after \\`var\\`, \\`let\\`, or \\`const\\`\n      statements to achieve a consistent coding style across the project.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule has a string option:\n\n      * `\"always\"` (default) requires an empty line after `var`, `let`, or `const`.\n        Comments on a line directly after var statements are treated like additional var statements.\n      * `\"never\"` disallows empty lines after `var`, `let`, or `const`.\n      "], ["\n      This rule has a string option:\n\n      * \\`\"always\"\\` (default) requires an empty line after \\`var\\`, \\`let\\`, or \\`const\\`.\n        Comments on a line directly after var statements are treated like additional var statements.\n      * \\`\"never\"\\` disallows empty lines after \\`var\\`, \\`let\\`, or \\`const\\`.\n      "]))),
        options: {
            type: 'array',
            items: [{
                    enum: ['always', 'never']
                }],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n        "], ["\n        \"", "\": [true, \"never\"]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
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
        this.sourceFileText = sourceFile.getFullText();
        var onNode = function (node) {
            var _a = _this, lastVariableStatementNode = _a.lastVariableStatementNode, sourceFileText = _a.sourceFileText;
            if (node.kind === ts.SyntaxKind.VariableStatement) {
                _this.lastVariableStatementNode = node;
                return;
            }
            if (node.kind === ts.SyntaxKind.EndOfFileToken) {
                _this.lastVariableStatementNode = undefined;
                return;
            }
            if (lastVariableStatementNode) {
                var unexpectedLineFixes = [];
                var expectedLineFixes = [];
                var isNewLineRequired = _this.options.always;
                var expectedLinePos = lastVariableStatementNode.end;
                var newLinesCount = 0;
                for (var i = lastVariableStatementNode.end; i < node.end; i++) {
                    var code = sourceFileText.charCodeAt(i);
                    if (code === 10) {
                        newLinesCount++;
                        if (!isNewLineRequired && newLinesCount > 1) {
                            unexpectedLineFixes.push(Lint.Replacement.deleteText(i, 1));
                        }
                    }
                    else if (code !== 9 && code !== 13 && code !== 32) {
                        var leadingComments = ts.getLeadingCommentRanges("\n" + sourceFileText.slice(i), 0);
                        var lastLeadingComment = leadingComments && leadingComments.pop();
                        if (lastLeadingComment && (!isNewLineRequired || (isNewLineRequired && newLinesCount < 2))) {
                            newLinesCount = 0;
                            expectedLinePos = i - 1 + lastLeadingComment.end;
                            i = expectedLinePos - 1;
                        }
                        else {
                            if (isNewLineRequired && newLinesCount < 2) {
                                expectedLineFixes.push(Lint.Replacement.appendText(expectedLinePos, '\n'));
                            }
                            break;
                        }
                    }
                }
                if (isNewLineRequired && expectedLineFixes[0]) {
                    _this.addFailureAt(lastVariableStatementNode.getStart(), 1, EXPECTED_BLANK_LINE_MESSAGE, expectedLineFixes);
                }
                else if (unexpectedLineFixes[0]) {
                    _this.addFailureAt(lastVariableStatementNode.getStart(), 1, UNEXPECTED_BLANK_LINE_MESSAGE, unexpectedLineFixes);
                }
                _this.lastVariableStatementNode = undefined;
            }
            return ts.forEachChild(node, onNode);
        };
        return ts.forEachChild(sourceFile, onNode);
    };
    return RuleWalker;
}(Lint.AbstractWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5ld2xpbmVBZnRlclZhclJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLFNBQVMsR0FBVyx1QkFBdUIsQ0FBQztBQU1sRCxJQUFNLDJCQUEyQixHQUFXLGtEQUFrRCxDQUFDO0FBQy9GLElBQU0sNkJBQTZCLEdBQVcsb0RBQW9ELENBQUM7QUFFbkc7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQWlEQSxDQUFDO0lBWFMsNEJBQWEsR0FBckIsVUFBdUIsRUFBeUI7WUFBeEIscUJBQWE7UUFDbkMsT0FBTztZQUNMLE1BQU0sRUFBRSxhQUFhLEtBQUssT0FBTztTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVNLG9CQUFLLEdBQVosVUFBYyxVQUF5QjtRQUNyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQS9DYSxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLCtEQUErRDtRQUM1RSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHFSQUFBLHNOQUd6QixJQUFBO1FBQ0gsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHFZQUFBLDBWQU1sQyxJQUFBO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFFO2lCQUM1QixDQUFDO1lBQ0YsU0FB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QUFHLENBQUMsQ0FBQzt5QkFDekI7NkJBQU07NEJBQ0wsSUFBSSxpQkFBaUIsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dDQUMxQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7NkJBQzVFOzRCQUVELE1BQU07eUJBQ1A7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFFN0MsS0FBSSxDQUFDLFlBQVksQ0FDZix5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsRUFDcEMsQ0FBQyxFQUNELDJCQUEyQixFQUMzQixpQkFBaUIsQ0FDbEIsQ0FBQztpQkFDSDtxQkFBTSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQyxLQUFJLENBQUMsWUFBWSxDQUNmLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxFQUNwQyxDQUFDLEVBQ0QsNkJBQTZCLEVBQzdCLG1CQUFtQixDQUNwQixDQUFDO2lCQUNIO2dCQUVELEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7YUFDNUM7WUFFRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FwRkEsQUFvRkMsQ0FwRndCLElBQUksQ0FBQyxjQUFjLEdBb0YzQyIsImZpbGUiOiJydWxlcy90ZXJOZXdsaW5lQWZ0ZXJWYXJSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
