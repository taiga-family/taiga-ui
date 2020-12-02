"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-tabs';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.FAILURE_STRING = 'Unexpected tab character.';
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'disallow all tabs',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      This rule looks for tabs anywhere inside a file: code, comments or anything else, and disallows their usage.\n      "], ["\n      This rule looks for tabs anywhere inside a file: code, comments or anything else, and disallows their usage.\n      "]))),
        optionsDescription: '',
        options: {},
        optionExamples: [
            Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        \"", "\": true\n        "], ["\n        \"", "\": true\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var TAB_REGEX = /\t/;
    var lines = ctx.sourceFile.text.split(/\n/g);
    lines.forEach(function (line, i) {
        var match = TAB_REGEX.exec(line);
        if (match) {
            ctx.addFailureAt(ctx.sourceFile.getPositionOfLineAndCharacter(i, match.index), 1, Rule.FAILURE_STRING);
        }
    });
}
var templateObject_1, templateObject_2;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vVGFic1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUVoQztJQUEwQixnQ0FBdUI7SUFBakQ7O0lBdUJBLENBQUM7SUFIUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFyQmEsbUJBQWMsR0FBRywyQkFBMkIsQ0FBQztJQUM3QyxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxLQUFLO1FBQ2IsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHlNQUFBLDhIQUV6QixJQUFBO1FBQ0gsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwrR0FBQSxjQUNaLEVBQVMsb0JBQ1gsS0FERSxTQUFTO1NBRWY7UUFDRCxjQUFjLEVBQUUsS0FBSztRQUNyQixJQUFJLEVBQUUsT0FBTztLQUNkLENBQUM7SUFLSixXQUFDO0NBdkJELEFBdUJDLENBdkJ5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0F1QmhEO0FBdkJZLG9CQUFJO0FBeUJqQixTQUFTLElBQUksQ0FBQyxHQUEyQjtJQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksS0FBSyxFQUFFO1lBQ1QsR0FBRyxDQUFDLFlBQVksQ0FDZCxHQUFHLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQzVELENBQUMsRUFDRCxJQUFJLENBQUMsY0FBYyxDQUNwQixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJmaWxlIjoicnVsZXMvdGVyTm9UYWJzUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
