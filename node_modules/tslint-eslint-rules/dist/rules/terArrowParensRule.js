"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-arrow-parens';
var always = 'Expected parentheses around arrow function argument.';
var asNeeded = 'Unexpected parentheses around single function argument.';
var block = 'Unexpected parentheses around single function argument having a body with no curly braces.';
var blockNoParens = 'Expected parentheses around arrow function argument having a body with curly braces.';
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
        description: 'require parens in arrow function arguments',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Arrow functions can omit parentheses when they have exactly one parameter. In all other cases\n      the parameter(s) must be wrapped in parentheses. This rule enforces the consistent use of\n      parentheses in arrow functions.\n      "], ["\n      Arrow functions can omit parentheses when they have exactly one parameter. In all other cases\n      the parameter(s) must be wrapped in parentheses. This rule enforces the consistent use of\n      parentheses in arrow functions.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule has a string option and an object one.\n\n      String options are:\n\n      - `\"always\"` (default) requires parentheses around arguments in all cases.\n      - `\"as-needed\"` allows omitting parentheses when there is only one argument.\n\n      Object properties for variants of the `\"as-needed\"` option:\n\n      - `\"requireForBlockBody\": true` modifies the as-needed rule in order to require\n        parentheses if the function body is in an instructions block (surrounded by braces).\n      "], ["\n      This rule has a string option and an object one.\n\n      String options are:\n\n      - \\`\"always\"\\` (default) requires parentheses around arguments in all cases.\n      - \\`\"as-needed\"\\` allows omitting parentheses when there is only one argument.\n\n      Object properties for variants of the \\`\"as-needed\"\\` option:\n\n      - \\`\"requireForBlockBody\": true\\` modifies the as-needed rule in order to require\n        parentheses if the function body is in an instructions block (surrounded by braces).\n      "]))),
        options: {
            type: 'array',
            items: [
                {
                    enum: ['always', 'as-needed']
                },
                {
                    type: 'object',
                    properties: {
                        requireForBlockBody: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }
            ],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"as-needed\"]\n        "], ["\n        \"", "\": [true, \"as-needed\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"as-needed\", { \"requireForBlockBody\": true }]\n        "], ["\n        \"", "\": [true, \"as-needed\", { \"requireForBlockBody\": true }]\n        "])), RULE_NAME)
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
        _this.srcFile = sourceFile;
        var opt = _this.getOptions();
        _this.asNeeded = opt[0] === 'as-needed';
        _this.requireForBlockBody = _this.asNeeded && opt[1] && opt[1].requireForBlockBody === true;
        return _this;
    }
    RuleWalker.prototype.visitArrowFunction = function (node) {
        _super.prototype.visitArrowFunction.call(this, node);
        if (node.parameters.length === 1) {
            var skip = Lint.hasModifier(node.modifiers, ts.SyntaxKind.AsyncKeyword) ? 1 : 0;
            var parameter = node.parameters[0];
            var text = parameter.getText();
            var firstToken = node.getChildAt(skip);
            var lastToken = node.getChildAt(2 + skip);
            var position = parameter.getStart();
            var paramWidth = text.length;
            var parensWidth = lastToken.end - firstToken.getStart(this.srcFile);
            var isGenerics = firstToken.kind === ts.SyntaxKind.LessThanToken;
            var hasParens = firstToken.kind === ts.SyntaxKind.OpenParenToken;
            var bodyIsBlock = node.body.kind === ts.SyntaxKind.Block;
            var isIdentifier = parameter.name.kind === ts.SyntaxKind.Identifier;
            var hasAnnotations = parameter.initializer || parameter.dotDotDotToken || parameter.type;
            var isSingleIdentifier = isIdentifier && !hasAnnotations;
            if (this.requireForBlockBody) {
                if (isSingleIdentifier && !node.type && !bodyIsBlock) {
                    if (hasParens) {
                        this.report(position - 1, parensWidth, block);
                    }
                    return;
                }
                if (bodyIsBlock && !isGenerics) {
                    if (!hasParens) {
                        this.report(position, paramWidth, blockNoParens);
                    }
                    return;
                }
            }
            if (this.asNeeded && isSingleIdentifier && !node.type) {
                if (hasParens) {
                    this.report(position - 1, parensWidth, asNeeded);
                }
                return;
            }
            if (!hasParens && !isGenerics) {
                this.report(position, paramWidth, always);
            }
        }
    };
    RuleWalker.prototype.report = function (position, width, message) {
        var failure = this.createFailure(position, width, message);
        this.addFailure(failure);
    };
    return RuleWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlckFycm93UGFyZW5zUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLHNEQUFzRCxDQUFDO0FBQ3RFLElBQU0sUUFBUSxHQUFHLHlEQUF5RCxDQUFDO0FBQzNFLElBQU0sS0FBSyxHQUFHLDRGQUE0RixDQUFDO0FBQzNHLElBQU0sYUFBYSxHQUFHLHNGQUFzRixDQUFDO0FBRTdHO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUE4REEsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE1RGEsYUFBUSxHQUF1QjtRQUMzQyxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNENBQTRDO1FBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sa1VBQUEsdVBBSXpCLElBQUE7UUFDSCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sc2xCQUFBLDJoQkFZbEMsSUFBQTtRQUNILE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFO2dCQUNMO29CQUNFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRTt3QkFDVixtQkFBbUIsRUFBRTs0QkFDbkIsSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3FCQUNGO29CQUNELG9CQUFvQixFQUFFLEtBQUs7aUJBQzVCO2FBQ0Y7WUFDRCxTQUFTLEVBQUUs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
