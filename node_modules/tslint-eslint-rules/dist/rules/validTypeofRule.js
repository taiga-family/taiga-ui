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
        var walker = new ValidTypeofWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = 'invalid typeof comparison value';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ValidTypeofWalker = (function (_super) {
    tslib_1.__extends(ValidTypeofWalker, _super);
    function ValidTypeofWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VALID_TYPES = ['symbol', 'undefined', 'object', 'boolean', 'number', 'string', 'function'];
        _this.OPERATORS = [ts.SyntaxKind.EqualsEqualsToken, ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken];
        return _this;
    }
    ValidTypeofWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.TypeOfExpression) {
            this.validateTypeOf(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    ValidTypeofWalker.prototype.validateTypeOf = function (node) {
        if (node.parent && node.parent.kind === ts.SyntaxKind.BinaryExpression) {
            var parent = node.parent;
            if (this.OPERATORS.indexOf(parent.operatorToken.kind) !== -1) {
                var sibling = parent.left === node ? parent.right : parent.left;
                if (sibling.kind === ts.SyntaxKind.StringLiteral && this.VALID_TYPES.indexOf(sibling.text) === -1) {
                    this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
                }
            }
        }
    };
    return ValidTypeofWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3ZhbGlkVHlwZW9mUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFPQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBTGEsbUJBQWMsR0FBRyxpQ0FBaUMsQ0FBQztJQU1uRSxXQUFDO0NBUEQsQUFPQyxDQVB5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FPaEQ7QUFQWSxvQkFBSTtBQVNqQjtJQUFnQyw2Q0FBZTtJQUEvQztRQUFBLHFFQXVCQztRQXRCUyxpQkFBVyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0YsZUFBUyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztJQXFCakwsQ0FBQztJQW5CVyxxQ0FBUyxHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBMkIsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsaUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTywwQ0FBYyxHQUF0QixVQUF1QixJQUF5QjtRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0RSxJQUFNLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBOEIsQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzVELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUVsRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUUsT0FBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdkgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQzVGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBdkJBLEFBdUJDLENBdkIrQixJQUFJLENBQUMsVUFBVSxHQXVCOUMiLCJmaWxlIjoicnVsZXMvdmFsaWRUeXBlb2ZSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
