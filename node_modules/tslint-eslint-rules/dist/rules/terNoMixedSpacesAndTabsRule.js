"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var RULE_NAME = 'ter-no-mixed-spaces-and-tabs';
var OPTION_USE_TABS = 'tabs';
var OPTION_USE_SPACES = 'spaces';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.FAILURE_STRING = function (expected, mixed) {
        if (!mixed) {
            return expected + " indentation expected";
        }
        return "indentation has mixed tabs and spaces";
    };
    Rule.prototype.formatOptions = function (ruleArguments) {
        var tabs = undefined;
        var smartTabs = false;
        var options = ruleArguments[0];
        if (options !== undefined) {
            tabs = options.type === OPTION_USE_TABS ? true : options.type === OPTION_USE_SPACES ? false : undefined;
            smartTabs = options.smartTabs;
        }
        return {
            tabs: tabs,
            smartTabs: smartTabs
        };
    };
    Rule.prototype.apply = function (sourceFile) {
        var options = this.formatOptions(this.ruleArguments);
        return this.applyWithFunction(sourceFile, walk, options);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'Enforces indentation with unmixed tabs or spaces.',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n      cleaner diffs in version control, and easier programmatic manipulation."], ["\n      Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n      cleaner diffs in version control, and easier programmatic manipulation."]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule takes an object argument with an optional `type` property which can be set to:\n\n      * `", "` enforces consistent spaces for indentation.\n      * `", "` enforces consistent tabs for indentation.\n\n      If the above is not provided, the rule will enforce either all tabs or all spaces on each\n      line, although different lines may differ between tabs and spaces.\n\n      Optionally, a `smartTabs` boolean property can be specified.  If set to true, smart tabs\n      allow mixing tabs and spaces if tabs are used for indentation and spaces for alignment, eg.\n\n          function main() {\n          // --->const a = 1,\n          // --->......b = 2;\n\n              const a = 1,\n                    b = 2;\n          }\n      "], ["\n      This rule takes an object argument with an optional \\`type\\` property which can be set to:\n\n      * \\`", "\\` enforces consistent spaces for indentation.\n      * \\`", "\\` enforces consistent tabs for indentation.\n\n      If the above is not provided, the rule will enforce either all tabs or all spaces on each\n      line, although different lines may differ between tabs and spaces.\n\n      Optionally, a \\`smartTabs\\` boolean property can be specified.  If set to true, smart tabs\n      allow mixing tabs and spaces if tabs are used for indentation and spaces for alignment, eg.\n\n          function main() {\n          // --->const a = 1,\n          // --->......b = 2;\n\n              const a = 1,\n                    b = 2;\n          }\n      "])), OPTION_USE_SPACES, OPTION_USE_TABS),
        options: {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        type: {
                            type: 'string',
                            enum: [OPTION_USE_TABS, OPTION_USE_SPACES]
                        },
                        smartTabs: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }
            ],
            minLength: 0,
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      \"", "\": { \"type\": \"", "\" } ]\n      "], ["\n      \"", "\": { \"type\": \"", "\" } ]\n      "])), RULE_NAME, OPTION_USE_TABS),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n      \"", "\": { \"type\": \"", "\" } ]\n      "], ["\n      \"", "\": { \"type\": \"", "\" } ]\n      "])), RULE_NAME, OPTION_USE_SPACES),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n      \"", "\": { \"smartTabs\": true } ]\n      "], ["\n      \"", "\": { \"smartTabs\": true } ]\n      "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n      \"", "\": { \"type\": \"", "\", \"smartTabs\": true } ]\n      "], ["\n      \"", "\": { \"type\": \"", "\", \"smartTabs\": true } ]\n      "])), RULE_NAME, OPTION_USE_TABS)
        ],
        type: 'maintainability',
        typescriptOnly: false
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var sourceFile = ctx.sourceFile, _a = ctx.options, tabs = _a.tabs, smartTabs = _a.smartTabs;
    var regExp;
    if (tabs === true) {
        regExp = new RegExp(" " + (smartTabs ? '\\t' : ''));
    }
    else if (tabs === false) {
        regExp = new RegExp("\\t");
    }
    else {
        regExp = new RegExp((smartTabs ? '' : '\\t |') + " \\t");
    }
    var failure = Rule.FAILURE_STRING(tabs ? 'tab' : 'space', typeof tabs === 'undefined');
    for (var _i = 0, _b = tsutils_1.getLineRanges(sourceFile); _i < _b.length; _i++) {
        var _c = _b[_i], pos = _c.pos, contentLength = _c.contentLength;
        if (contentLength === 0) {
            continue;
        }
        var line = sourceFile.text.substr(pos, contentLength);
        var indentEnd = line.search(/\S/);
        if (indentEnd === 0) {
            continue;
        }
        if (indentEnd === -1) {
            indentEnd = contentLength;
        }
        var indentSpace = line.slice(0, indentEnd);
        if (!regExp.test(indentSpace)) {
            continue;
        }
        var token = tsutils_1.getTokenAtPosition(sourceFile, pos);
        if (token.kind !== ts.SyntaxKind.JsxText &&
            (pos >= token.getStart(sourceFile) || tsutils_1.isPositionInComment(sourceFile, pos, token))) {
            continue;
        }
        ctx.addFailureAt(pos, indentEnd, failure);
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vTWl4ZWRTcGFjZXNBbmRUYWJzUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBQy9CLG1DQUFpRjtBQUVqRixJQUFNLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztBQU1qRCxJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUM7QUFDL0IsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUM7QUFFbkM7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQTZGQSxDQUFDO0lBNUJlLG1CQUFjLEdBQTVCLFVBQTZCLFFBQWdCLEVBQUUsS0FBZTtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBVSxRQUFRLDBCQUF1QixDQUFDO1NBQzNDO1FBRUQsT0FBTyx1Q0FBdUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sNEJBQWEsR0FBckIsVUFBc0IsYUFBb0I7UUFDeEMsSUFBSSxJQUFJLEdBQXdCLFNBQVMsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpDLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDeEcsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDL0I7UUFFRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUVNLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FB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QUMsRUFBRTtZQUFFLFNBQVM7U0FBRTtRQUN0QyxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFBRSxTQUFTO1NBQUU7UUFDbEMsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDcEIsU0FBUyxHQUFHLGFBQWEsQ0FBQztTQUMzQjtRQUNELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQUUsU0FBUztTQUFFO1FBQzVDLElBQU0sS0FBSyxHQUFHLDRCQUFrQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsQ0FBQztRQUNuRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQ3RDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksNkJBQW1CLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BGLFNBQVM7U0FDVjtRQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMzQztBQUNILENBQUMiLCJmaWxlIjoicnVsZXMvdGVyTm9NaXhlZFNwYWNlc0FuZFRhYnNSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
