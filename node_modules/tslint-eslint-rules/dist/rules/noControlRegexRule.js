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
        var walker = new NoControlRegexWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'unexpected control character in regular expression';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoControlRegexWalker = (function (_super) {
    tslib_1.__extends(NoControlRegexWalker, _super);
    function NoControlRegexWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoControlRegexWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.validateControlRegex(node);
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    NoControlRegexWalker.prototype.visitNewExpression = function (node) {
        if (node.expression.getText() === 'RegExp') {
            this.visitRegularExpressionFunction(node);
        }
        _super.prototype.visitNewExpression.call(this, node);
    };
    NoControlRegexWalker.prototype.visitCallExpression = function (node) {
        if (node.expression.getText() === 'RegExp') {
            this.visitRegularExpressionFunction(node);
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    NoControlRegexWalker.prototype.visitRegularExpressionFunction = function (node) {
        if (node.arguments && node.arguments.length > 0 && node.arguments[0].kind === ts.SyntaxKind.StringLiteral) {
            this.validateControlRegex(node.arguments[0]);
        }
    };
    NoControlRegexWalker.prototype.validateControlRegex = function (node) {
        if (/[\x00-\x1f]/.test(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
    };
    return NoControlRegexWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vQ29udHJvbFJlZ2V4UnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFPQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksb0JBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBTGEsbUJBQWMsR0FBRyxvREFBb0QsQ0FBQztJQU10RixXQUFDO0NBUEQsQUFPQyxDQVB5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FPaEQ7QUFQWSxvQkFBSTtBQVNqQjtJQUFtQyxnREFBZTtJQUFsRDs7SUErQkEsQ0FBQztJQTlCVyw0REFBNkIsR0FBdkMsVUFBd0MsSUFBMEI7UUFDaEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLGlCQUFNLDZCQUE2QixZQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUyxpREFBa0IsR0FBNUIsVUFBNkIsSUFBc0I7UUFDakQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7UUFDRCxpQkFBTSxrQkFBa0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMsa0RBQW1CLEdBQTdCLFVBQThCLElBQXVCO1FBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsaUJBQU0sbUJBQW1CLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLDZEQUE4QixHQUF0QyxVQUF1QyxJQUEwQztRQUMvRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3pHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBcUIsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVPLG1EQUFvQixHQUE1QixVQUE2QixJQUEwQjtRQUNyRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0EvQkEsQUErQkMsQ0EvQmtDLElBQUksQ0FBQyxVQUFVLEdBK0JqRCIsImZpbGUiOiJydWxlcy9ub0NvbnRyb2xSZWdleFJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
