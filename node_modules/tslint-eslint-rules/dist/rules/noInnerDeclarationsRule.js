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
        var walker = new NoInnerDeclarationsWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoInnerDeclarationsWalker = (function (_super) {
    tslib_1.__extends(NoInnerDeclarationsWalker, _super);
    function NoInnerDeclarationsWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VALID_PARENT_TYPES = [
            ts.SyntaxKind.SourceFile,
            ts.SyntaxKind.FunctionDeclaration,
            ts.SyntaxKind.FunctionExpression,
            ts.SyntaxKind.ArrowFunction,
            ts.SyntaxKind.MethodDeclaration,
            ts.SyntaxKind.ModuleDeclaration,
            ts.SyntaxKind.Constructor
        ];
        return _this;
    }
    NoInnerDeclarationsWalker.prototype.visitFunctionDeclaration = function (node) {
        this.validateInnerDeclaration(node);
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    NoInnerDeclarationsWalker.prototype.visitVariableStatement = function (node) {
        if (this.hasOption('both') && node.declarationList.getFirstToken().kind === ts.SyntaxKind.VarKeyword) {
            this.validateInnerDeclaration(node);
        }
        _super.prototype.visitVariableStatement.call(this, node);
    };
    NoInnerDeclarationsWalker.prototype.validateInnerDeclaration = function (node) {
        var body = this.nearestBody(node);
        var isValid = (body.isSourceFile && body.distance === 1) || body.distance === 2;
        if (!isValid) {
            var decl = node.kind === ts.SyntaxKind.FunctionDeclaration ? 'function' : 'variable';
            var root = body.isSourceFile ? 'program' : 'function body';
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), "move " + decl + " declaration to " + root + " root"));
        }
    };
    NoInnerDeclarationsWalker.prototype.nearestBody = function (node) {
        var ancestor = node.parent;
        var generation = 1;
        while (ancestor && this.VALID_PARENT_TYPES.indexOf(ancestor.kind) === -1) {
            generation++;
            ancestor = ancestor.parent;
        }
        return {
            isSourceFile: (ancestor && ancestor.kind === ts.SyntaxKind.SourceFile) || !ancestor,
            distance: generation
        };
    };
    return NoInnerDeclarationsWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vSW5uZXJEZWNsYXJhdGlvbnNSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFFL0I7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQUtBLENBQUM7SUFKUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDNUUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHlCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUtoRDtBQUxZLG9CQUFJO0FBT2pCO0lBQXdDLHFEQUFlO0lBQXZEO1FBQUEscUVBbURDO1FBbERTLHdCQUFrQixHQUFHO1lBQzNCLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUN4QixFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQjtZQUNqQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQjtZQUNoQyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7WUFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7WUFDL0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1NBQzFCLENBQUM7O0lBMENKLENBQUM7SUF4Q1csNERBQXdCLEdBQWxDLFVBQW1DLElBQTRCO1FBQzdELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxpQkFBTSx3QkFBd0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsMERBQXNCLEdBQWhDLFVBQWlDLElBQTBCO1FBR3pELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNyRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7UUFDRCxpQkFBTSxzQkFBc0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sNERBQXdCLEdBQWhDLFVBQWlDLElBQWE7UUFDNUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUN2RixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUU3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFRLElBQUksd0JBQW1CLElBQUksVUFBTyxDQUFDLENBQUMsQ0FBQztTQUNuSDtJQUNILENBQUM7SUFFTywrQ0FBVyxHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLFVBQVUsRUFBRSxDQUFDO1lBQ2IsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDNUI7UUFFRCxPQUFPO1lBQ0wsWUFBWSxFQUFFLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDbkYsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFDSCxnQ0FBQztBQUFELENBbkRBLEFBbURDLENBbkR1QyxJQUFJLENBQUMsVUFBVSxHQW1EdEQiLCJmaWxlIjoicnVsZXMvbm9Jbm5lckRlY2xhcmF0aW9uc1J1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
