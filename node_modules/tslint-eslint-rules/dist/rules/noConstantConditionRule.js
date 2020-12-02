"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var token_1 = require("../support/token");
var RULE_NAME = 'no-constant-condition';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoConstantConditionWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'unexpected constant condition';
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'disallow use of constant expressions in conditions (recommended)',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      A constant expression (for example, a literal) as a test condition might be a typo or\n      development trigger for a specific behavior. For example, the following code looks as if it is\n      not ready for production.\n      "], ["\n      A constant expression (for example, a literal) as a test condition might be a typo or\n      development trigger for a specific behavior. For example, the following code looks as if it is\n      not ready for production.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      - `\"checkLoops\"` Setting this option to `false` allows constant expressions in loops (default: `true`).\n      "], ["\n      - \\`\"checkLoops\"\\` Setting this option to \\`false\\` allows constant expressions in loops (default: \\`true\\`).\n      "]))),
        options: {
            type: 'object',
            properties: {
                checkLoops: {
                    type: 'boolean'
                }
            },
            additionalProperties: false
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": true\n        "], ["\n        \"", "\": true\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"checkLoops\": false }]\n        "], ["\n        \"", "\": [true, { \"checkLoops\": false }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'functionality'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoConstantConditionWalker = (function (_super) {
    tslib_1.__extends(NoConstantConditionWalker, _super);
    function NoConstantConditionWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.checkLoops = true;
        var opts = _this.getOptions();
        if (opts.length && opts[0].checkLoops === false) {
            _this.checkLoops = false;
        }
        return _this;
    }
    NoConstantConditionWalker.prototype.visitIfStatement = function (node) {
        this.validateCondition(node.expression);
        _super.prototype.visitIfStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitWhileStatement = function (node) {
        if (this.checkLoops) {
            this.validateCondition(node.expression);
        }
        _super.prototype.visitWhileStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitDoStatement = function (node) {
        if (this.checkLoops) {
            this.validateCondition(node.expression);
        }
        _super.prototype.visitDoStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitForStatement = function (node) {
        if (this.checkLoops && node.condition) {
            this.validateCondition(node.condition);
        }
        _super.prototype.visitForStatement.call(this, node);
    };
    NoConstantConditionWalker.prototype.visitConditionalExpression = function (node) {
        this.validateCondition(node.condition);
        _super.prototype.visitConditionalExpression.call(this, node);
    };
    NoConstantConditionWalker.prototype.validateCondition = function (expression) {
        if (this.isConstant(expression)) {
            this.addFailure(this.createFailure(expression.getStart(), expression.getWidth(), Rule.FAILURE_STRING));
        }
        this.walkChildren(expression);
    };
    NoConstantConditionWalker.prototype.isConstant = function (node) {
        switch (node.kind) {
            case ts.SyntaxKind.StringLiteral:
            case ts.SyntaxKind.NumericLiteral:
            case ts.SyntaxKind.TrueKeyword:
            case ts.SyntaxKind.FalseKeyword:
            case ts.SyntaxKind.ArrowFunction:
            case ts.SyntaxKind.FunctionExpression:
            case ts.SyntaxKind.ObjectLiteralExpression:
            case ts.SyntaxKind.ArrayLiteralExpression:
                return true;
            case ts.SyntaxKind.PostfixUnaryExpression:
                return this.isConstant(node.operand);
            case ts.SyntaxKind.BinaryExpression:
                if (token_1.isAssignmentToken(node.operatorToken)) {
                    return this.isConstant(node.right);
                }
                return this.isConstant(node.left) && this.isConstant(node.right);
            case ts.SyntaxKind.ConditionalExpression:
                return this.isConstant(node.condition);
            case ts.SyntaxKind.PrefixUnaryExpression:
                return this.isConstant(node.operand);
            case ts.SyntaxKind.ParenthesizedExpression:
                return this.isConstant(node.expression);
        }
        return false;
    };
    return NoConstantConditionWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vQ29uc3RhbnRDb25kaXRpb25SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFDL0IsMENBQXFEO0FBRXJELElBQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDO0FBRTFDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUF1Q0EsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM1RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXJDYSxtQkFBYyxHQUFHLCtCQUErQixDQUFDO0lBRWpELGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLGtFQUFrRTtRQUMvRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHlUQUFBLDhPQUl6QixJQUFBO1FBQ0gsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHNNQUFBLHVJQUVsQyxJQUFBO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxTQUFTO2lCQUNoQjthQUNGO1lBQ0Qsb0JBQW9CLEVBQUUsS0FBSztTQUM1QjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwrR0FBQSxjQUNaLEVBQVMsb0JBQ1gsS0FERSxTQUFTO1lBRWQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDRJQUFBLGNBQ1osRUFBUyxpREFDWCxLQURFLFNBQVM7U0FFZjtRQUNELGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxlQUFlO0tBQ3RCLENBQUM7SUFNSixXQUFDO0NB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T0FBTyxJQUFJLENBQUM7WUFFZCxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCO2dCQUN2QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBa0MsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0RSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO2dCQUVqQyxJQUFJLHlCQUFpQixDQUFFLElBQTRCLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ2xFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3RDtnQkFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFFLElBQTRCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckgsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQjtnQkFDdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFFLElBQWlDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQjtnQkFDdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFFLElBQWlDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QjtnQkFDeEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFFLElBQW1DLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0U7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxnQ0FBQztBQUFELENBeEZBLEFBd0ZDLENBeEZ1QyxJQUFJLENBQUMsVUFBVSxHQXdGdEQiLCJmaWxlIjoicnVsZXMvbm9Db25zdGFudENvbmRpdGlvblJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
