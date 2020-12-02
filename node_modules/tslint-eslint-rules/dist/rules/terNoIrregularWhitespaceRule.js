"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-irregular-whitespace';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new NoIrregularWhitespaceWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'disallow irregular whitespace (recommended)',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code\n      harder to debug in a similar nature to mixed tabs and spaces.\n      "], ["\n      Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code\n      harder to debug in a similar nature to mixed tabs and spaces.\n      "]))),
        optionsDescription: '',
        options: {},
        optionExamples: [
            Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'typescript'
    };
    Rule.RULE_NAME = 'ter-no-irregular-whitespace';
    Rule.FAILURE_STRING = 'irregular whitespace not allowed';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoIrregularWhitespaceWalker = (function (_super) {
    tslib_1.__extends(NoIrregularWhitespaceWalker, _super);
    function NoIrregularWhitespaceWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IRREGULAR_WHITESPACE = /[\u0085\u00A0\ufeff\f\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000]+/mg;
        _this.IRREGULAR_LINE_TERMINATORS = /[\u2028\u2029]/mg;
        return _this;
    }
    NoIrregularWhitespaceWalker.prototype.visitSourceFile = function (node) {
        this.validateIrregularWhitespace(node);
        _super.prototype.visitSourceFile.call(this, node);
    };
    NoIrregularWhitespaceWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            this.removeStringError(node);
        }
        _super.prototype.visitNode.call(this, node);
    };
    NoIrregularWhitespaceWalker.prototype.removeStringError = function (node) {
        var start = node.getStart();
        var end = node.getEnd();
        var failures = this.getFailures();
        for (var i = failures.length - 1; i >= 0; i--) {
            var failure = failures[i];
            if (failure.getRuleName() === Rule.RULE_NAME) {
                if (failure.getStartPosition().getPosition() >= start && failure.getEndPosition().getPosition() <= end) {
                    failures.splice(i, 1);
                }
            }
        }
    };
    NoIrregularWhitespaceWalker.prototype.validateIrregularWhitespace = function (node) {
        var _this = this;
        var lines = node.text.split(/\n/g);
        lines.forEach(function (line, i) {
            var match = _this.IRREGULAR_WHITESPACE.exec(line);
            while (match) {
                _this.addFailure(_this.createFailure(node.getPositionOfLineAndCharacter(i, match.index), 1, Rule.FAILURE_STRING));
                match = _this.IRREGULAR_WHITESPACE.exec(line);
            }
            match = _this.IRREGULAR_LINE_TERMINATORS.exec(line);
            while (match) {
                _this.addFailure(_this.createFailure(node.getPositionOfLineAndCharacter(i, match.index), 1, Rule.FAILURE_STRING));
                match = _this.IRREGULAR_LINE_TERMINATORS.exec(line);
            }
        });
    };
    return NoIrregularWhitespaceWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vSXJyZWd1bGFyV2hpdGVzcGFjZVJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQztBQUVoRDtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBeUJBLENBQUM7SUFKUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF2QmEsYUFBUSxHQUF1QjtRQUMzQyxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNkNBQTZDO1FBQzFELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sNlBBQUEsa0xBR3pCLElBQUE7UUFDSCxrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsY0FBYyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlIQUFBLGNBQ1osRUFBUyxzQkFDWCxLQURFLFNBQVM7U0FFZjtRQUNELGNBQWMsRUFBRSxLQUFLO1FBQ3JCLElBQUksRUFBRSxZQUFZO0tBQ25CLENBQUM7SUFDWSxjQUFTLEdBQUcsNkJBQTZCLENBQUM7SUFDMUMsbUJBQWMsR0FBRyxrQ0FBa0MsQ0FBQztJQU1wRSxXQUFDO0NBekJELEFBeUJDLENBekJ5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0F5QmhEO0FBekJZLG9CQUFJO0FBMkJqQjtJQUEwQyx1REFBZTtJQUF6RDtRQUFBLHFFQW9EQztRQW5EUywwQkFBb0IsR0FBRyx5SUFBeUksQ0FBQztRQUNqSyxnQ0FBMEIsR0FBRyxrQkFBa0IsQ0FBQzs7SUFrRDFELENBQUM7SUFoRFcscURBQWUsR0FBekIsVUFBMEIsSUFBbUI7UUFFM0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRVMsK0NBQVMsR0FBbkIsVUFBb0IsSUFBYTtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFFN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQXdCLENBQUMsQ0FBQztTQUNsRDtRQUNELGlCQUFNLFNBQVMsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sdURBQWlCLEdBQXpCLFVBQTBCLElBQXNCO1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBDLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUIsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDNUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtvQkFDdEcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTyxpRUFBMkIsR0FBbkMsVUFBb0MsSUFBbUI7UUFBdkQsaUJBZ0JDO1FBZkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDaEgsS0FBSyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUM7WUFFRCxLQUFLLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxPQUFPLEtBQUssRUFBRTtnQkFDWixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNoSCxLQUFLLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FwREEsQUFvREMsQ0FwRHlDLElBQUksQ0FBQyxVQUFVLEdBb0R4RCIsImZpbGUiOiJydWxlcy90ZXJOb0lycmVndWxhcldoaXRlc3BhY2VSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
