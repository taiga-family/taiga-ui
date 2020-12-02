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
        var walker = new NoDuplicateCaseWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'duplicate case label';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoDuplicateCaseWalker = (function (_super) {
    tslib_1.__extends(NoDuplicateCaseWalker, _super);
    function NoDuplicateCaseWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoDuplicateCaseWalker.prototype.visitSwitchStatement = function (node) {
        this.validateNoDupeCase(node);
        _super.prototype.visitSwitchStatement.call(this, node);
    };
    NoDuplicateCaseWalker.prototype.validateNoDupeCase = function (node) {
        var _this = this;
        var cases = Object.create(null);
        node.caseBlock.clauses.forEach(function (clause) {
            if (clause.kind === ts.SyntaxKind.CaseClause) {
                var key = clause.getText();
                if (cases[key]) {
                    _this.addFailure(_this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
                }
                else {
                    cases[key] = clause;
                }
            }
        });
    };
    return NoDuplicateCaseWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vRHVwbGljYXRlQ2FzZVJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBT0EsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUxhLG1CQUFjLEdBQUcsc0JBQXNCLENBQUM7SUFNeEQsV0FBQztDQVBELEFBT0MsQ0FQeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBT2hEO0FBUFksb0JBQUk7QUFTakI7SUFBb0MsaURBQWU7SUFBbkQ7O0lBcUJBLENBQUM7SUFwQlcsb0RBQW9CLEdBQTlCLFVBQStCLElBQXdCO1FBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixpQkFBTSxvQkFBb0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sa0RBQWtCLEdBQTFCLFVBQTJCLElBQXdCO1FBQW5ELGlCQWNDO1FBYkMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3BDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDNUMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDZCxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztpQkFDNUY7cUJBQ0k7b0JBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQXVCLENBQUM7aUJBQ3RDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw0QkFBQztBQUFELENBckJBLEFBcUJDLENBckJtQyxJQUFJLENBQUMsVUFBVSxHQXFCbEQiLCJmaWxlIjoicnVsZXMvbm9EdXBsaWNhdGVDYXNlUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
