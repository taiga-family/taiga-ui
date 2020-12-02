"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var token_1 = require("../support/token");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoExAssignWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'do not assign to the exception parameter';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoExAssignWalker = (function (_super) {
    tslib_1.__extends(NoExAssignWalker, _super);
    function NoExAssignWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInCatchClause = false;
        return _this;
    }
    NoExAssignWalker.prototype.visitCatchClause = function (node) {
        this.variableNode = node.variableDeclaration;
        this.isInCatchClause = true;
        _super.prototype.visitCatchClause.call(this, node);
        this.isInCatchClause = false;
        delete this.variableNode;
    };
    NoExAssignWalker.prototype.visitBinaryExpression = function (node) {
        var _this = this;
        if (this.isInCatchClause) {
            if (!token_1.isAssignmentToken(node.operatorToken)) {
                return;
            }
            if (this.variableNode &&
                this.variableNode.name.getText() === node.left.getText() &&
                node.left.kind === ts.SyntaxKind.Identifier) {
                this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
            }
            else if (node.left.kind === ts.SyntaxKind.ArrayLiteralExpression) {
                var els = node.left.elements;
                if (els.some(function (el) { return !!_this.variableNode && el.getText() === _this.variableNode.getText(); })) {
                    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
                }
            }
        }
        _super.prototype.visitBinaryExpression.call(this, node);
    };
    return NoExAssignWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vRXhBc3NpZ25SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFDL0IsMENBQXFEO0FBRXJEO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFPQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBTGEsbUJBQWMsR0FBRywwQ0FBMEMsQ0FBQztJQU01RSxXQUFDO0NBUEQsQUFPQyxDQVB5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FPaEQ7QUFQWSxvQkFBSTtBQVNqQjtJQUErQiw0Q0FBZTtJQUE5QztRQUFBLHFFQWlDQztRQWhDUyxxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFnQ2xDLENBQUM7SUE3QlcsMkNBQWdCLEdBQTFCLFVBQTJCLElBQW9CO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFNLGdCQUFnQixZQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRVMsZ0RBQXFCLEdBQS9CLFVBQWdDLElBQXlCO1FBQXpELGlCQW9CQztRQW5CQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDMUMsT0FBTzthQUNSO1lBRUQsSUFDRSxJQUFJLENBQUMsWUFBWTtnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUMzQztnQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUM1RjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ2xFLElBQU0sR0FBRyxHQUFJLElBQUksQ0FBQyxJQUFrQyxDQUFDLFFBQVEsQ0FBQztnQkFDOUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQW5FLENBQW1FLENBQUMsRUFBRTtvQkFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQzVGO2FBQ0Y7U0FDRjtRQUNELGlCQUFNLHFCQUFxQixZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBakNBLEFBaUNDLENBakM4QixJQUFJLENBQUMsVUFBVSxHQWlDN0MiLCJmaWxlIjoicnVsZXMvbm9FeEFzc2lnblJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
