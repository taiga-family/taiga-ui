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
        var walker = new NoExtraSemiWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'unnecessary semicolon';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoExtraSemiWalker = (function (_super) {
    tslib_1.__extends(NoExtraSemiWalker, _super);
    function NoExtraSemiWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALLOWED_PARENT_TYPES = [
            ts.SyntaxKind.ForStatement,
            ts.SyntaxKind.ForInStatement,
            ts.SyntaxKind.ForOfStatement,
            ts.SyntaxKind.WhileStatement,
            ts.SyntaxKind.DoStatement
        ];
        return _this;
    }
    NoExtraSemiWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.EmptyStatement) {
            this.visitEmptyStatement(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    NoExtraSemiWalker.prototype.visitClassDeclaration = function (node) {
        this.checkClass(node);
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    NoExtraSemiWalker.prototype.visitEmptyStatement = function (node) {
        if (node.parent && this.ALLOWED_PARENT_TYPES.indexOf(node.parent.kind) === -1) {
            this.validateNoExtraSemi(node);
        }
    };
    NoExtraSemiWalker.prototype.checkClass = function (node) {
        var indexOf = node.getChildren().map(function (child) { return child.kind; }).indexOf(ts.SyntaxKind.FirstPunctuation);
        var children = node.getChildren().slice(indexOf);
        this.checkClassChildren(children);
    };
    NoExtraSemiWalker.prototype.checkClassChildren = function (children) {
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if ((child.kind === ts.SyntaxKind.SyntaxList || child.kind === ts.SyntaxKind.SemicolonClassElement) && child.getText() === ';') {
                this.validateNoExtraSemi(child);
            }
            else if (child.kind === ts.SyntaxKind.SyntaxList && child.getText().indexOf(';') !== -1) {
                this.checkClassChildren(child.getChildren());
            }
        }
    };
    NoExtraSemiWalker.prototype.validateNoExtraSemi = function (node) {
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    };
    return NoExtraSemiWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN2RixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUFFTywrQ0FBbUIsR0FBM0IsVUFBNEIsSUFBYTtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEK0IsSUFBSSxDQUFDLFVBQVUsR0FnRDlDIiwiZmlsZSI6InJ1bGVzL25vRXh0cmFTZW1pUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
