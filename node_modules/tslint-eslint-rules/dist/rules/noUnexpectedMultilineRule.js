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
        var walker = new NoUnexpectedMultilineWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        func: 'unexpected newline between function and ( of function call',
        prop: 'unexpected newline between object and [ of property access',
        template: 'unexpected newline between template tag and template literal'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoUnexpectedMultilineWalker = (function (_super) {
    tslib_1.__extends(NoUnexpectedMultilineWalker, _super);
    function NoUnexpectedMultilineWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoUnexpectedMultilineWalker.prototype.visitCallExpression = function (node) {
        var firstLeftParen = node.getChildren().filter(function (ch) { return ch.kind === ts.SyntaxKind.OpenParenToken; })[0];
        if (this.isBreakBefore(firstLeftParen)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), this.getMessage(node)));
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    NoUnexpectedMultilineWalker.prototype.visitElementAccessExpression = function (node) {
        var firstLeftSquareBracket = node.getChildren().filter(function (ch) { return ch.kind === ts.SyntaxKind.OpenBracketToken; })[0];
        if (this.isBreakBefore(firstLeftSquareBracket)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), this.getMessage(node)));
        }
        _super.prototype.visitElementAccessExpression.call(this, node);
    };
    NoUnexpectedMultilineWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.TaggedTemplateExpression) {
            var children = node.getChildren();
            var tag = children.filter(function (ch) { return ch.kind === ts.SyntaxKind.Identifier; })[0];
            var tagIndex = children.indexOf(tag);
            if (tag && children[tagIndex + 1]) {
                var template = children[tagIndex + 1];
                if (this.isBreakBefore(template)) {
                    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), this.getMessage(node)));
                }
            }
        }
        _super.prototype.visitNode.call(this, node);
    };
    NoUnexpectedMultilineWalker.prototype.isBreakBefore = function (node) {
        if (node.parent) {
            var children = node.parent.getChildren();
            var nodeIndex = children.indexOf(node);
            if (nodeIndex > 0) {
                var nodeLine = this.getStartPosition(node).line;
                var previousNodeLine = this.getEndPosition(children[nodeIndex - 1]).line;
                if (nodeLine !== previousNodeLine) {
                    return true;
                }
            }
        }
        return false;
    };
    NoUnexpectedMultilineWalker.prototype.getMessage = function (node) {
        switch (node.kind) {
            case ts.SyntaxKind.CallExpression:
                return Rule.FAILURE_STRING.func;
            case ts.SyntaxKind.ElementAccessExpression:
                return Rule.FAILURE_STRING.prop;
            case ts.SyntaxKind.TaggedTemplateExpression:
                return Rule.FAILURE_STRING.template;
            default:
                throw 'Unexpected node type: ' + ts.SyntaxKind[node.kind];
        }
    };
    NoUnexpectedMultilineWalker.prototype.getStartPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());
    };
    NoUnexpectedMultilineWalker.prototype.getEndPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getEnd());
    };
    return NoUnexpectedMultilineWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vVW5leHBlY3RlZE11bHRpbGluZVJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBV0EsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLDJCQUEyQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQVRhLG1CQUFjLEdBQUc7UUFDN0IsSUFBSSxFQUFFLDREQUE0RDtRQUNsRSxJQUFJLEVBQUUsNERBQTREO1FBQ2xFLFFBQVEsRUFBRSw4REFBOEQ7S0FDekUsQ0FBQztJQU1KLFdBQUM7Q0FYRCxBQVdDLENBWHlCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQVdoRDtBQVhZLG9CQUFJO0FBYWpCO0lBQTBDLHVEQUFlO0lBQXpEOztJQTZFQSxDQUFDO0lBNUVXLHlEQUFtQixHQUE3QixVQUE4QixJQUF1QjtRQUNuRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELGlC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QUFDLFVBQVUsQ0FBQyx1QkFBdUI7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QjtnQkFDekMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUN0QztnQkFDRSxNQUFNLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVPLHNEQUFnQixHQUF4QixVQUF5QixJQUFhO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTyxvREFBYyxHQUF0QixVQUF1QixJQUFhO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDSCxrQ0FBQztBQUFELENBN0VBLEFBNkVDLENBN0V5QyxJQUFJLENBQUMsVUFBVSxHQTZFeEQiLCJmaWxlIjoicnVsZXMvbm9VbmV4cGVjdGVkTXVsdGlsaW5lUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
