"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-script-url';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.FAILURE_STRING = 'Script URL is a form of eval.';
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'disallow use of `javascript:` urls.',
        rationale: 'Using `javascript:` URLs is considered by some as a form of `eval`. ' +
            'Code passed in `javascript:` URLs has to be parsed and evaluated by the browser ' +
            'in the same way that eval is processed.',
        optionsDescription: '',
        options: {},
        optionExamples: [
            Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        \"", "\": true\n        "], ["\n        \"", "\": true\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'functionality'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, cb);
    function cb(node) {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            var value = node.text.toLowerCase();
            if (value.indexOf('javascript:') === 0) {
                return ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
        }
        return ts.forEachChild(node, cb);
    }
}
var templateObject_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vU2NyaXB0VXJsUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLG1CQUFtQixDQUFDO0FBRXRDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUF5QkEsQ0FBQztJQUhRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXZCYSxtQkFBYyxHQUFHLCtCQUErQixDQUFDO0lBRWpELGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUUscUNBQXFDO1FBQ2xELFNBQVMsRUFDUCxzRUFBc0U7WUFDdEUsa0ZBQWtGO1lBQ2xGLHlDQUF5QztRQUMzQyxrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLCtHQUFBLGNBQ1osRUFBUyxvQkFDWCxLQURFLFNBQVM7U0FFZjtRQUNELGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxlQUFlO0tBQ3RCLENBQUM7SUFLSixXQUFDO0NBekJELEFBeUJDLENBekJ5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0F5QmhEO0FBekJZLG9CQUFJO0FBMkJqQixTQUFTLElBQUksQ0FBQyxHQUEyQjtJQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzQyxTQUFTLEVBQUUsQ0FBQyxJQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUM3QyxJQUFNLEtBQUssR0FBSSxJQUF5QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDSCxDQUFDIiwiZmlsZSI6InJ1bGVzL3Rlck5vU2NyaXB0VXJsUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
