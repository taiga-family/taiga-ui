"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-computed-property-spacing';
var ALWAYS_BEFORE_MESSAGE = "A space is required before ']'.";
var ALWAYS_AFTER_MESSAGE = "A space is required after '['.";
var NEVER_BEFORE_MESSAGE = "There should be no space before ']'.";
var NEVER_AFTER_MESSAGE = "There should be no space after '['.";
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.formatOptions = function (_a) {
        var alwaysOrNever = _a[0];
        return {
            always: alwaysOrNever === 'always'
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
        description: 'require or disallow padding inside computed properties',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      While formatting preferences are very personal, a number of style guides require or disallow spaces between computed properties in the following situations:\n    "], ["\n      While formatting preferences are very personal, a number of style guides require or disallow spaces between computed properties in the following situations:\n    "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      The rule takes in one option, which defines to require or forbid whitespace.\n\n      * `\"never\"` (default) disallows spaces inside computed property brackets\n      * `\"always\"` requires one or more spaces inside computed property brackets\n    "], ["\n      The rule takes in one option, which defines to require or forbid whitespace.\n\n      * \\`\"never\"\\` (default) disallows spaces inside computed property brackets\n      * \\`\"always\"\\` requires one or more spaces inside computed property brackets\n    "]))),
        options: {
            type: 'array',
            items: [{
                    enum: ['always', 'never']
                }],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n      "], ["\n        \"", "\": [true, \"always\"]\n      "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n      "], ["\n        \"", "\": [true, \"never\"]\n      "])), RULE_NAME)
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
        var cb = function (node) {
            if (node.kind === ts.SyntaxKind.ElementAccessExpression) {
                _this.checkNode(node, node.getChildAt(1), node.getChildAt(3));
            }
            else if (node.kind === ts.SyntaxKind.ComputedPropertyName) {
                _this.checkNode(node, node.getChildAt(0), node.getChildAt(2));
            }
            ts.forEachChild(node, cb);
        };
        ts.forEachChild(sourceFile, cb);
    };
    RuleWalker.prototype.checkNode = function (node, leftBracketNode, rightBracketNode) {
        var nodeText = node.getText();
        var regex = /\[([\s\S]*)\]/;
        var match = regex.exec(nodeText);
        if (!match) {
            return;
        }
        var contentWithinBrackets = match[1];
        if (this.options.always) {
            var beforeWhitespaceLength = this.getBeforeWhitespaceLength(contentWithinBrackets, true);
            var afterWhitespaceLength = this.getAfterWhitespaceLength(contentWithinBrackets, true);
            if (beforeWhitespaceLength === 0) {
                this.addFailureAtNode(leftBracketNode, ALWAYS_AFTER_MESSAGE, Lint.Replacement.appendText(leftBracketNode.getEnd(), ' '));
            }
            if (afterWhitespaceLength === 0) {
                this.addFailureAtNode(rightBracketNode, ALWAYS_BEFORE_MESSAGE, Lint.Replacement.appendText(rightBracketNode.getStart(), ' '));
            }
        }
        else {
            var contentWithinBracketsNoNewlines = contentWithinBrackets.replace('\n', '');
            var beforeWhitespaceLength = this.getBeforeWhitespaceLength(contentWithinBracketsNoNewlines, false);
            var afterWhitespaceLength = this.getAfterWhitespaceLength(contentWithinBracketsNoNewlines, false);
            if (beforeWhitespaceLength !== 0) {
                this.addFailureAtNode(leftBracketNode, NEVER_AFTER_MESSAGE, Lint.Replacement.deleteText(leftBracketNode.getEnd(), beforeWhitespaceLength));
            }
            if (afterWhitespaceLength !== 0) {
                this.addFailureAtNode(rightBracketNode, NEVER_BEFORE_MESSAGE, Lint.Replacement.deleteText(rightBracketNode.getStart() - afterWhitespaceLength, afterWhitespaceLength));
            }
        }
    };
    RuleWalker.prototype.getBeforeWhitespaceLength = function (content, newlinesCountAsWhitespace) {
        var regex = newlinesCountAsWhitespace ? /^\s+/ : /^[^\S\n]+/;
        var match = regex.exec(content);
        if (match) {
            return match[0].length;
        }
        else {
            return 0;
        }
    };
    RuleWalker.prototype.getAfterWhitespaceLength = function (content, newlinesCountAsWhitespace) {
        var regex = newlinesCountAsWhitespace ? /\s+$/ : /[^\S\n]+$/;
        var match = regex.exec(content);
        if (match) {
            return match[0].length;
        }
        else {
            return 0;
        }
    };
    return RuleWalker;
}(Lint.AbstractWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlckNvbXB1dGVkUHJvcGVydHlTcGFjaW5nUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLCtCQUErQixDQUFDO0FBS2xELElBQU0scUJBQXFCLEdBQUcsaUNBQWlDLENBQUM7QUFDaEUsSUFBTSxvQkFBb0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUM5RCxJQUFNLG9CQUFvQixHQUFHLHNDQUFzQyxDQUFDO0FBQ3BFLElBQU0sbUJBQW1CLEdBQUcscUNBQXFDLENBQUM7QUFFbEU7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQWdEQSxDQUFDO0lBWlMsNEJBQWEsR0FBckIsVUFBc0IsRUFBMkI7WUFBekIscUJBQWE7UUFFbkMsT0FBTztZQUNMLE1BQU0sRUFBRSxhQUFhLEtBQUssUUFBUTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVNLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTlDYSxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLHdEQUF3RDtRQUNyRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHVQQUFBLDRLQUUzQixJQUFBO1FBQ0Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLCtVQUFBLDRRQUtwQyxJQUFBO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFD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Q0FBQyxDQUFDO2FBQy9IO1NBQ0Y7YUFBTTtZQUVMLElBQU0sK0JBQStCLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRixJQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RyxJQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVwRyxJQUFJLHNCQUFzQixLQUFLLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO2FBQzVJO1lBRUQsSUFBSSxxQkFBcUIsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7YUFDeEs7U0FDRjtJQUNILENBQUM7SUFFTyw4Q0FBeUIsR0FBakMsVUFBa0MsT0FBZSxFQUFFLHlCQUFrQztRQUNuRixJQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDL0QsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFFTyw2Q0FBd0IsR0FBaEMsVUFBaUMsT0FBZSxFQUFFLHlCQUFrQztRQUNsRixJQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDL0QsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBcEZBLEFBb0ZDLENBcEZ3QixJQUFJLENBQUMsY0FBYyxHQW9GM0MiLCJmaWxlIjoicnVsZXMvdGVyQ29tcHV0ZWRQcm9wZXJ0eVNwYWNpbmdSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
