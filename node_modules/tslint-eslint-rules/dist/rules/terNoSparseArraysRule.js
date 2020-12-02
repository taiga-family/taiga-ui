"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-sparse-arrays';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoSparseArraysWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'disallow sparse arrays (recommended)',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code\n      harder to debug in a similar nature to mixed tabs and spaces.\n      "], ["\n      Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code\n      harder to debug in a similar nature to mixed tabs and spaces.\n      "]))),
        optionsDescription: '',
        options: {},
        optionExamples: [
            Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'typescript'
    };
    Rule.FAILURE_STRING = 'unexpected comma in middle of array';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoSparseArraysWalker = (function (_super) {
    tslib_1.__extends(NoSparseArraysWalker, _super);
    function NoSparseArraysWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoSparseArraysWalker.prototype.visitArrayLiteralExpression = function (node) {
        this.validateNoSparseArray(node);
        _super.prototype.visitArrayLiteralExpression.call(this, node);
    };
    NoSparseArraysWalker.prototype.validateNoSparseArray = function (node) {
        var hasEmptySlot = node.elements.some(function (el) { return el.kind === ts.SyntaxKind.OmittedExpression; });
        if (hasEmptySlot) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
    };
    return NoSparseArraysWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vU3BhcnNlQXJyYXlzUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLHNCQUFzQixDQUFDO0FBRXpDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUF3QkEsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXRCYSxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSw2UEFBQSxrTEFHekIsSUFBQTtRQUNILGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxjQUFjLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0saUhBQUEsY0FDWixFQUFTLHNCQUNYLEtBREUsU0FBUztTQUVmO1FBQ0QsY0FBYyxFQUFFLEtBQUs7UUFDckIsSUFBSSxFQUFFLFlBQVk7S0FDbkIsQ0FBQztJQUNZLG1CQUFjLEdBQUcscUNBQXFDLENBQUM7SUFNdkUsV0FBQztDQXhCRCxBQXdCQyxDQXhCeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBd0JoRDtBQXhCWSxvQkFBSTtBQTBCakI7SUFBbUMsZ0RBQWU7SUFBbEQ7O0lBYUEsQ0FBQztJQVpXLDBEQUEyQixHQUFyQyxVQUFzQyxJQUErQjtRQUNuRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsaUJBQU0sMkJBQTJCLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLG9EQUFxQixHQUE3QixVQUE4QixJQUErQjtRQUMzRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1FBRTNGLElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYmtDLElBQUksQ0FBQyxVQUFVLEdBYWpEIiwiZmlsZSI6InJ1bGVzL3Rlck5vU3BhcnNlQXJyYXlzUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
