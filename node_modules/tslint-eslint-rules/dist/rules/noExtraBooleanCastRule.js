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
        var walker = new NoExtraBooleanCastWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        if: 'redundant double negation in an if statement condition',
        do: 'redundant double negation in a do while loop condition',
        while: 'redundant double negation in a while loop condition',
        ternaryif: 'redundant double negation in a ternary condition',
        for: 'redundant double negation in a for loop condition',
        unaryCast: 'redundant multiple negation',
        objectCast: 'redundant double negation in call to Boolean()',
        newCast: 'redundant double negation in Boolean constructor call'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoExtraBooleanCastWalker = (function (_super) {
    tslib_1.__extends(NoExtraBooleanCastWalker, _super);
    function NoExtraBooleanCastWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoExtraBooleanCastWalker.prototype.visitPrefixUnaryExpression = function (node) {
        this.validateNoExtraBoolean(node);
        _super.prototype.visitPrefixUnaryExpression.call(this, node);
    };
    NoExtraBooleanCastWalker.prototype.validateNoExtraBoolean = function (node) {
        if (!node.parent || !node.parent.parent) {
            return;
        }
        var parent = node.parent;
        var grandparent = parent.parent;
        if (node.operator !== ts.SyntaxKind.ExclamationToken ||
            parent.kind !== ts.SyntaxKind.PrefixUnaryExpression ||
            parent.operator !== ts.SyntaxKind.ExclamationToken ||
            !grandparent) {
            return;
        }
        if (grandparent.kind === ts.SyntaxKind.BinaryExpression) {
            grandparent = grandparent.parent;
        }
        if (!grandparent) {
            return;
        }
        if (grandparent.kind === ts.SyntaxKind.IfStatement) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.if));
        }
        else if (grandparent.kind === ts.SyntaxKind.DoStatement) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.do));
        }
        else if (grandparent.kind === ts.SyntaxKind.WhileStatement) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.while));
        }
        else if (grandparent.kind === ts.SyntaxKind.ConditionalExpression && parent === grandparent.condition) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.ternaryif));
        }
        else if (grandparent.kind === ts.SyntaxKind.ForStatement && parent === grandparent.condition) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.for));
        }
        else if (grandparent.kind === ts.SyntaxKind.PrefixUnaryExpression && grandparent.operator === ts.SyntaxKind.ExclamationToken) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.unaryCast));
        }
        else if (grandparent.kind === ts.SyntaxKind.CallExpression && /^Boolean/.test(grandparent.getText())) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.objectCast));
        }
        else if (grandparent.kind === ts.SyntaxKind.NewExpression && /^new Boolean/.test(grandparent.getText())) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING.newCast));
        }
    };
    return NoExtraBooleanCastWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vRXh0cmFCb29sZWFuQ2FzdFJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBZ0JBLENBQUM7SUFKUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFkYSxtQkFBYyxHQUFHO1FBQzdCLEVBQUUsRUFBRSx3REFBd0Q7UUFDNUQsRUFBRSxFQUFFLHdEQUF3RDtRQUM1RCxLQUFLLEVBQUUscURBQXFEO1FBQzVELFNBQVMsRUFBRSxrREFBa0Q7UUFDN0QsR0FBRyxFQUFFLG1EQUFtRDtRQUN4RCxTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDLFVBQVUsRUFBRSxnREFBZ0Q7UUFDNUQsT0FBTyxFQUFFLHVEQUF1RDtLQUNqRSxDQUFDO0lBTUosV0FBQztDQWhCRCxBQWdCQyxDQWhCeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBZ0JoRDtBQWhCWSxvQkFBSTtBQWtCakI7SUFBdUMsb0RBQWU7SUFBdEQ7O0lBb0RBLENBQUM7SUFsRFcsNkRBQTBCLEdBQXBDLFVBQXFDLElBQThCO1FBQ2pFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxpQkFBTSwwQkFBMEIsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8seURBQXNCLEdBQTlCLFVBQStCLElBQThCO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTztTQUNSO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFD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QUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDdEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3ZHO2FBQU0sSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDekcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FwREEsQUFvREMsQ0FwRHNDLElBQUksQ0FBQyxVQUFVLEdBb0RyRCIsImZpbGUiOiJydWxlcy9ub0V4dHJhQm9vbGVhbkNhc3RSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
