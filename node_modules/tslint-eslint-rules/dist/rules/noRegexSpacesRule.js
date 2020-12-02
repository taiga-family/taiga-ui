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
        var walker = new NoRegexSpacesWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoRegexSpacesWalker = (function (_super) {
    tslib_1.__extends(NoRegexSpacesWalker, _super);
    function NoRegexSpacesWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoRegexSpacesWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.validateMultipleSpaces(node);
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    NoRegexSpacesWalker.prototype.validateMultipleSpaces = function (node) {
        var res = /( {2,})+?/.exec(node.text);
        if (res) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), "spaces are hard to count - use {" + res[0].length + "}"));
        }
    };
    return NoRegexSpacesWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vUmVnZXhTcGFjZXNSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZCQUErQjtBQUUvQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBS0EsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN0RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBS2hEO0FBTFksb0JBQUk7QUFPakI7SUFBa0MsK0NBQWU7SUFBakQ7O0lBWUEsQ0FBQztJQVhXLDJEQUE2QixHQUF2QyxVQUF3QyxJQUEwQjtRQUNoRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsaUJBQU0sNkJBQTZCLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLG9EQUFzQixHQUE5QixVQUErQixJQUEwQjtRQUN2RCxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLHFDQUFtQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVIO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWmlDLElBQUksQ0FBQyxVQUFVLEdBWWhEIiwiZmlsZSI6InJ1bGVzL25vUmVnZXhTcGFjZXNSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
