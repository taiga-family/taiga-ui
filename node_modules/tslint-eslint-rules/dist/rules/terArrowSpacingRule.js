"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Lint = require("tslint");
var RULE_NAME = 'ter-arrow-spacing';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new RuleWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'require space before/after arrow function\'s arrow',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      This rule normalizes the style of spacing before/after an arrow function\u2019s arrow(`=>`).\n      "], ["\n      This rule normalizes the style of spacing before/after an arrow function\u2019s arrow(\\`=>\\`).\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule takes an object argument with `before` and `after` properties, each with a\n      Boolean value.\n\n      The default configuration is `{ \"before\": true, \"after\": true }`.\n\n      `true` means there should be one or more spaces and `false` means no spaces.\n      "], ["\n      This rule takes an object argument with \\`before\\` and \\`after\\` properties, each with a\n      Boolean value.\n\n      The default configuration is \\`{ \"before\": true, \"after\": true }\\`.\n\n      \\`true\\` means there should be one or more spaces and \\`false\\` means no spaces.\n      "]))),
        options: {
            type: 'array',
            items: [{
                    type: 'object',
                    properties: {
                        before: {
                            type: 'boolean'
                        },
                        after: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, {\n          \"before\": false,\n          \"after\": false\n        }]\n        "], ["\n        \"", "\": [true, {\n          \"before\": false,\n          \"after\": false\n        }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var RuleWalker = (function (_super) {
    tslib_1.__extends(RuleWalker, _super);
    function RuleWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.before = true;
        _this.after = true;
        var opt = _this.getOptions();
        if (opt[0]) {
            _this.before = opt[0].before !== false;
            _this.after = opt[0].after !== false;
        }
        _this.srcFile = sourceFile;
        _this.srcText = sourceFile.getFullText();
        return _this;
    }
    RuleWalker.prototype.visitArrowFunction = function (node) {
        var arrow = node.equalsGreaterThanToken;
        var arrowStart = arrow.getStart(this.srcFile);
        var bodyStart = node.body.getStart(this.srcFile);
        var space = {
            before: /\s/.test(this.srcText[arrowStart - 1]),
            after: /\s/.test(this.srcText[arrow.end])
        };
        if (this.before) {
            if (!space.before) {
                var fix = Lint.Replacement.appendText(arrowStart, ' ');
                this.report(arrow, 'Missing', 'before', fix);
            }
        }
        else {
            if (space.before) {
                var spaces = arrowStart - arrow.getFullStart();
                var fix = Lint.Replacement.deleteText(arrowStart - spaces, spaces);
                this.report(arrow, 'Unexpected', 'before', fix);
            }
        }
        if (this.after) {
            if (!space.after) {
                var fix = Lint.Replacement.appendText(arrow.end, ' ');
                this.report(arrow, 'Missing', 'after', fix);
            }
        }
        else {
            if (space.after) {
                var fix = Lint.Replacement.deleteText(arrow.end, bodyStart - arrow.end);
                this.report(arrow, 'Unexpected', 'after', fix);
            }
        }
        _super.prototype.visitArrowFunction.call(this, node);
    };
    RuleWalker.prototype.report = function (arrowToken, status, place, fix) {
        var failure = this.createFailure(arrowToken.getStart(this.srcFile), arrowToken.getWidth(this.srcFile), status + " space " + place + " =>.", fix);
        this.addFailure(failure);
    };
    return RuleWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlckFycm93U3BhY2luZ1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLG1CQUFtQixDQUFDO0FBRXRDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFrREEsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFoRGEsYUFBUSxHQUF1QjtRQUMzQyxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsb0RBQW9EO1FBQ2pFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0seUxBQUEsa0hBRXpCLElBQUE7UUFDSCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sNFdBQUEscVRBT2xDLElBQUE7UUFDSCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxDQUFDO29CQUNOLElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRTt3QkFDVixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3dCQUNELEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUUsU0FBUzt5QkFDaEI7cUJBQ0Y7b0JBQ0Qsb0JBQW9CLEVBQUUsS0FBSztpQkFDNUIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDO1NBQ2I7UUFDRCxjQUFjLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0saUhBQUEsY0FDWixFQUFTLHNCQUNYLEtBREUsU0FBUztZQUVkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSx5TEFBQSxjQUNaLEVBQVMsOEZBSVgsS0FKRSxTQUFTO1NBS2Y7UUFDRCxj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QUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFDRCxpQkFBTSxrQkFBa0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sMkJBQU0sR0FBZCxVQUFlLFVBQW1CLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxHQUFhO1FBQzlFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ2hDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNqQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDOUIsTUFBTSxlQUFVLEtBQUssU0FBTSxFQUM5QixHQUFHLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0E1REEsQUE0REMsQ0E1RHdCLElBQUksQ0FBQyxVQUFVLEdBNER2QyIsImZpbGUiOiJydWxlcy90ZXJBcnJvd1NwYWNpbmdSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
