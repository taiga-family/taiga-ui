"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-func-call-spacing';
var ALWAYS = 'always';
var MISSING_SPACE = 'Missing space between function name and paren.';
var UNEXPECTED_SPACE = 'Unexpected space between function name and paren.';
var UNEXPECTED_NEWLINE = 'Unexpected newline between function name and paren.';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var options = {
            expectSpace: false,
            spacePattern: /\s/
        };
        var userOptions = this.getOptions().ruleArguments;
        if (userOptions[0] === ALWAYS) {
            options.expectSpace = true;
            if (userOptions[1] !== undefined && userOptions[1].allowNewlines) {
                options.spacePattern = /[ \t\r\n\u2028\u2029]/;
            }
            else {
                options.spacePattern = /[ \t]/;
            }
        }
        var walker = new RuleWalker(sourceFile, RULE_NAME, options);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: true,
        description: 'require or disallow spacing between function identifiers and their invocations',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      This rule will enforce consistency of spacing in function calls,\n      by disallowing or requiring one or more spaces before the open paren.\n      "], ["\n      This rule will enforce consistency of spacing in function calls,\n      by disallowing or requiring one or more spaces before the open paren.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule has a string option:\n\n      * `\"never\"` (default) disallows space between the function name and the opening parenthesis.\n      * `\"always\"` requires space between the function name and the opening parenthesis.\n\n      Further, in `\"always\"` mode, a second object option is available that contains a single boolean `allowNewlines` property.\n      "], ["\n      This rule has a string option:\n\n      * \\`\"never\"\\` (default) disallows space between the function name and the opening parenthesis.\n      * \\`\"always\"\\` requires space between the function name and the opening parenthesis.\n\n      Further, in \\`\"always\"\\` mode, a second object option is available that contains a single boolean \\`allowNewlines\\` property.\n      "]))),
        options: {
            type: 'array',
            items: [
                {
                    enum: ['always', 'never']
                },
                {
                    type: 'object',
                    properties: {
                        allowNewlines: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }
            ],
            minItems: 0,
            maxItems: 2
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\", { allowNewlines: true }]\n        "], ["\n        \"", "\": [true, \"always\", { allowNewlines: true }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var RuleWalker = (function (_super) {
    tslib_1.__extends(RuleWalker, _super);
    function RuleWalker(sourceFile, ruleName, options) {
        var _this = _super.call(this, sourceFile, ruleName, options) || this;
        _this.sourceText = sourceFile.getFullText();
        return _this;
    }
    RuleWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (node.kind === ts.SyntaxKind.NewExpression) {
                _this.visitNewExpression(node);
            }
            else if (node.kind === ts.SyntaxKind.CallExpression) {
                _this.visitCallExpression(node);
            }
            else if (node.kind >= ts.SyntaxKind.FirstTypeNode && node.kind <= ts.SyntaxKind.LastTypeNode) {
                return;
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    RuleWalker.prototype.visitNewExpression = function (node) {
        this.checkWhitespaceAfterExpression(node.expression, node.typeArguments, node.arguments);
    };
    RuleWalker.prototype.visitCallExpression = function (node) {
        this.checkWhitespaceAfterExpression(node.expression, node.typeArguments, node.arguments);
    };
    RuleWalker.prototype.checkWhitespaceAfterExpression = function (expression, typeArguments, funcArguments) {
        if (funcArguments !== undefined) {
            var start = void 0;
            if (typeArguments !== undefined) {
                start = typeArguments.end + 1;
            }
            else {
                start = expression.getEnd();
            }
            this.checkWhitespaceBetween(start, funcArguments.pos - 1);
        }
    };
    RuleWalker.prototype.checkWhitespaceBetween = function (start, end) {
        var whitespace = this.sourceText.substring(start, end);
        if (this.options.spacePattern.test(whitespace)) {
            if (!this.options.expectSpace) {
                var fix = Lint.Replacement.deleteText(start, whitespace.length);
                var failureMessage = this.failureMessageForUnexpectedWhitespace(whitespace);
                this.addFailureAt(start, whitespace.length, failureMessage, fix);
            }
        }
        else if (this.options.expectSpace) {
            var fix = Lint.Replacement.appendText(start, ' ');
            this.addFailureAt(start, 1, MISSING_SPACE, fix);
        }
    };
    RuleWalker.prototype.failureMessageForUnexpectedWhitespace = function (whitespace) {
        if (/[\r\n]/.test(whitespace)) {
            return UNEXPECTED_NEWLINE;
        }
        else {
            return UNEXPECTED_SPACE;
        }
    };
    return RuleWalker;
}(Lint.AbstractWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlckZ1bmNDYWxsU3BhY2luZ1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUUvQixJQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztBQUMxQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFFeEIsSUFBTSxhQUFhLEdBQUcsZ0RBQWdELENBQUM7QUFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxtREFBbUQsQ0FBQztBQUM3RSxJQUFNLGtCQUFrQixHQUFHLHFEQUFxRCxDQUFDO0FBT2pGO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUF1RUEsQ0FBQztJQXBCUSxvQkFBSyxHQUFaLFVBQWEsVUFBeUI7UUFDcEMsSUFBTSxPQUFPLEdBQUc7WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBRUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDN0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7YUFDaEQ7aUJBQ0k7Z0JBQ0gsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7YUFDaEM7U0FDRjtRQUVELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFyRWEsYUFBUSxHQUF1QjtRQUMzQyxRQUFRLEVBQUUsU0FBUztRQUNu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QUUsYUFBeUMsRUFBRSxhQUEyQztRQUNsSyxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxLQUFLLFNBQUEsQ0FBQztZQUNWLElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO2lCQUNJO2dCQUNILEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCLFVBQStCLEtBQWEsRUFBRSxHQUFXO1FBQ3ZELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQzdCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbEU7U0FDRjthQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRU8sMERBQXFDLEdBQTdDLFVBQThDLFVBQWtCO1FBQzlELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM3QixPQUFPLGtCQUFrQixDQUFDO1NBQzNCO2FBQ0k7WUFDSCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0F2RUEsQUF1RUMsQ0F2RXdCLElBQUksQ0FBQyxjQUFjLEdBdUUzQyIsImZpbGUiOiJydWxlcy90ZXJGdW5jQ2FsbFNwYWNpbmdSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
