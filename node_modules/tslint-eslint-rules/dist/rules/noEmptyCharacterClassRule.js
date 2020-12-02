"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoEmptyCharacterClassWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = "don't use empty classes in regular expressions";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoEmptyCharacterClassWalker = (function (_super) {
    tslib_1.__extends(NoEmptyCharacterClassWalker, _super);
    function NoEmptyCharacterClassWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoEmptyCharacterClassWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.validateEmptyCharacterClass(node);
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    NoEmptyCharacterClassWalker.prototype.validateEmptyCharacterClass = function (node) {
        if (!(/^\/([^\\[]|\\.|\[([^\\\]]|\\.)+\])*\/[gim]*$/.test(node.text))) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
    };
    return NoEmptyCharacterClassWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vRW1wdHlDaGFyYWN0ZXJDbGFzc1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkJBQStCO0FBRS9CO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFPQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksMkJBQTJCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBTGEsbUJBQWMsR0FBRyxnREFBZ0QsQ0FBQztJQU1sRixXQUFDO0NBUEQsQUFPQyxDQVB5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FPaEQ7QUFQWSxvQkFBSTtBQVNqQjtJQUEwQyx1REFBZTtJQUF6RDs7SUFXQSxDQUFDO0lBVlcsbUVBQTZCLEdBQXZDLFVBQXdDLElBQTBCO1FBQ2hFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxpQkFBTSw2QkFBNkIsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8saUVBQTJCLEdBQW5DLFVBQW9DLElBQTBCO1FBQzVELElBQUksQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUM1RjtJQUNILENBQUM7SUFDSCxrQ0FBQztBQUFELENBWEEsQUFXQyxDQVh5QyxJQUFJLENBQUMsVUFBVSxHQVd4RCIsImZpbGUiOiJydWxlcy9ub0VtcHR5Q2hhcmFjdGVyQ2xhc3NSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
