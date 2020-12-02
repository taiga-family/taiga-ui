"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoInvalidRegexpWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoInvalidRegexpWalker = (function (_super) {
    tslib_1.__extends(NoInvalidRegexpWalker, _super);
    function NoInvalidRegexpWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoInvalidRegexpWalker.prototype.visitNewExpression = function (node) {
        this.validateInvalidRegExp(node);
        _super.prototype.visitNewExpression.call(this, node);
    };
    NoInvalidRegexpWalker.prototype.visitCallExpression = function (node) {
        this.validateInvalidRegExp(node);
        _super.prototype.visitCallExpression.call(this, node);
    };
    NoInvalidRegexpWalker.prototype.validateInvalidRegExp = function (node) {
        if (node.expression.getText() === 'RegExp') {
            var args = node.arguments;
            if (args && args.length > 0 && args[0].kind === ts.SyntaxKind.StringLiteral) {
                var expr = args[0].text;
                var flags = args.length > 1 && args[1].kind === ts.SyntaxKind.StringLiteral ? args[1].text : undefined;
                try {
                    new RegExp(expr, flags);
                }
                catch (e) {
                    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), e.message));
                }
            }
        }
    };
    return NoInvalidRegexpWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vSW52YWxpZFJlZ2V4cFJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBS0EsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBS2hEO0FBTFksb0JBQUk7QUFPakI7SUFBb0MsaURBQWU7SUFBbkQ7O0lBNEJBLENBQUM7SUEzQlcsa0RBQWtCLEdBQTVCLFVBQTZCLElBQXNCO1FBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxpQkFBTSxrQkFBa0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMsbURBQW1CLEdBQTdCLFVBQThCLElBQXVCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxpQkFBTSxtQkFBbUIsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8scURBQXFCLEdBQTdCLFVBQThCLElBQTBDO1FBQ3RFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM1QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUMzRSxJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFzQixDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFFL0gsSUFBSTtvQkFFRixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELE9BQU8sQ0FBQyxFQUFFO29CQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNsRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQTVCQSxBQTRCQyxDQTVCbUMsSUFBSSxDQUFDLFVBQVUsR0E0QmxEIiwiZmlsZSI6InJ1bGVzL25vSW52YWxpZFJlZ2V4cFJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
