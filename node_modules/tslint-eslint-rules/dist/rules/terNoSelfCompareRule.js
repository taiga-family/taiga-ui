"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-self-compare';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoSelfCompareWalker(sourceFile, this.ruleName, new Set(this.ruleArguments.map(String))));
    };
    Rule.FAILURE_STRING = 'Comparing to itself is potentially pointless.';
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'disallow comparisons where both sides are exactly the same',
        rationale: 'Comparing a variable against itself is usually an error, ' +
            'either a typo or refactoring error. It is confusing to the reader ' +
            'and may potentially introduce a runtime error.',
        optionsDescription: '',
        options: {},
        optionExamples: [
            Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        \"", "\": true\n        "], ["\n        \"", "\": true\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'maintainability'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoSelfCompareWalker = (function (_super) {
    tslib_1.__extends(NoSelfCompareWalker, _super);
    function NoSelfCompareWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoSelfCompareWalker.prototype.isComparisonOperator = function (node) {
        var operators = new Set([
            ts.SyntaxKind.EqualsEqualsEqualsToken,
            ts.SyntaxKind.EqualsEqualsToken,
            ts.SyntaxKind.ExclamationEqualsEqualsToken,
            ts.SyntaxKind.ExclamationEqualsToken,
            ts.SyntaxKind.GreaterThanToken,
            ts.SyntaxKind.LessThanToken,
            ts.SyntaxKind.GreaterThanEqualsToken,
            ts.SyntaxKind.LessThanEqualsToken
        ]);
        return operators.has(node.operatorToken.kind);
    };
    NoSelfCompareWalker.prototype.hasSameToken = function (left, right) {
        return left.kind === right.kind && left.getText() === right.getText();
    };
    NoSelfCompareWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (ts.isBinaryExpression(node)) {
                var nodeExpr = node;
                if (_this.isComparisonOperator(nodeExpr) &&
                    _this.hasSameToken(nodeExpr.left, nodeExpr.right)) {
                    _this.addFailureAt(nodeExpr.operatorToken.getStart(), nodeExpr.operatorToken.getWidth(), Rule.FAILURE_STRING);
                }
            }
            else {
                return ts.forEachChild(node, cb);
            }
        };
        return ts.forEachChild(sourceFile, cb);
    };
    return NoSelfCompareWalker;
}(Lint.AbstractWalker));
var templateObject_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vU2VsZkNvbXBhcmVSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFFL0IsSUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQUM7QUFFeEM7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQStCQSxDQUFDO0lBVFEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FDekIsSUFBSSxtQkFBbUIsQ0FDckIsVUFBVSxFQUNWLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDeEMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQTdCYSxtQkFBYyxHQUFHLCtDQUErQyxDQUFDO0lBRWpFLGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUUsNERBQTREO1FBQ3pFLFNBQVMsRUFDUCwyREFBMkQ7WUFDM0Qsb0VBQW9FO1lBQ3BFLGdEQUFnRDtRQUNsRCxrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLCtHQUFBLGNBQ1osRUFBUyxvQkFDWCxLQURFLFNBQVM7U0FFZjtRQUNELGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxpQkFBaUI7S0FDeEIsQ0FBQztJQVdKLFdBQUM7Q0EvQkQsQUErQkMsQ0EvQnlCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQStCaEQ7QUEvQlksb0JBQUk7QUFpQ2pCO0lBQWtDLCtDQUFnQztJQUFsRTs7SUEyQ0EsQ0FBQztJQTFDUyxrREFBb0IsR0FBNUIsVUFBNkIsSUFBeUI7UUFDcEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDeEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUI7WUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7WUFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEI7WUFDMUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0I7WUFDcEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0I7WUFDOUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCO1lBQ3BDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTywwQ0FBWSxHQUFwQixVQUFxQixJQUFhLEVBQUUsS0FBYztRQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFFTSxrQ0FBSSxHQUFYLFVBQVksVUFBeUI7UUFBckMsaUJBdUJDO1FBdEJDLElBQU0sRUFBRSxHQUFHLFVBQUMsSUFBYTtZQUV2QixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsSUFBTSxRQUFRLEdBQUcsSUFBMkIsQ0FBQztnQkFDN0MsSUFDRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDO29CQUNuQyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUNoRDtvQkFDQSxLQUFJLENBQUMsWUFBWSxDQUNmLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQ2pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQ2pDLElBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7aUJBQ0g7YUFDRjtpQkFBTTtnQkFFTCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDO1FBR0YsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQTNDQSxBQTJDQyxDQTNDaUMsSUFBSSxDQUFDLGNBQWMsR0EyQ3BEIiwiZmlsZSI6InJ1bGVzL3Rlck5vU2VsZkNvbXBhcmVSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
