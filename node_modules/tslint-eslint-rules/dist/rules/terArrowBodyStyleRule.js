"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-arrow-body-style';
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
        description: 'require braces in arrow function body',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Arrow functions have two syntactic forms for their function bodies. They may be defined with\n      a block body (denoted by curly braces) `() => { ... }` or with a single expression\n      `() => ...`, whose value is implicitly returned.\n      "], ["\n      Arrow functions have two syntactic forms for their function bodies. They may be defined with\n      a block body (denoted by curly braces) \\`() => { ... }\\` or with a single expression\n      \\`() => ...\\`, whose value is implicitly returned.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      The rule takes one or two options. The first is a string, which can be:\n\n      - `\"always\"` enforces braces around the function body\n      - `\"as-needed\"` enforces no braces where they can be omitted (default)\n      - `\"never\"` enforces no braces around the function body (constrains arrow functions to the\n                    role of returning an expression)\n\n      The second one is an object for more fine-grained configuration when the first option is\n      `\"as-needed\"`. Currently, the only available option is `requireReturnForObjectLiteral`, a\n      boolean property. It\u2019s false by default. If set to true, it requires braces and an explicit\n      return for object literals.\n      "], ["\n      The rule takes one or two options. The first is a string, which can be:\n\n      - \\`\"always\"\\` enforces braces around the function body\n      - \\`\"as-needed\"\\` enforces no braces where they can be omitted (default)\n      - \\`\"never\"\\` enforces no braces around the function body (constrains arrow functions to the\n                    role of returning an expression)\n\n      The second one is an object for more fine-grained configuration when the first option is\n      \\`\"as-needed\"\\`. Currently, the only available option is \\`requireReturnForObjectLiteral\\`, a\n      boolean property. It\u2019s false by default. If set to true, it requires braces and an explicit\n      return for object literals.\n      "]))),
        options: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: ['always', 'never']
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: ['as-needed']
                        },
                        {
                            type: 'object',
                            properties: {
                                requireReturnForObjectLiteral: { type: 'boolean' }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n        "], ["\n        \"", "\": [true, \"never\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"as-needed\", {\n          \"requireReturnForObjectLiteral\": true\n        }]\n        "], ["\n        \"", "\": [true, \"as-needed\", {\n          \"requireReturnForObjectLiteral\": true\n        }]\n        "])), RULE_NAME)
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
        var opt = _this.getOptions();
        _this.always = opt[0] === 'always';
        _this.asNeeded = !opt[0] || opt[0] === 'as-needed';
        _this.never = opt[0] === 'never';
        _this.requireReturnForObjectLiteral = opt[1] && opt[1].requireReturnForObjectLiteral;
        return _this;
    }
    RuleWalker.prototype.visitArrowFunction = function (node) {
        var arrowBody = node.body;
        if (arrowBody.kind === ts.SyntaxKind.Block) {
            var blockBody = arrowBody.statements;
            if (blockBody.length !== 1 && !this.never) {
                return;
            }
            var returnExpression = blockBody[0].expression;
            if (this.asNeeded &&
                this.requireReturnForObjectLiteral &&
                blockBody[0].kind === ts.SyntaxKind.ReturnStatement &&
                (returnExpression && this.isObjectLiteral(returnExpression))) {
                return;
            }
            if (this.never || this.asNeeded && blockBody[0].kind === ts.SyntaxKind.ReturnStatement) {
                this.report(arrowBody, false);
            }
        }
        else {
            if (this.always || (this.asNeeded &&
                this.requireReturnForObjectLiteral &&
                this.isObjectLiteral(arrowBody))) {
                this.report(arrowBody, true);
            }
        }
        _super.prototype.visitArrowFunction.call(this, node);
    };
    RuleWalker.prototype.isObjectLiteral = function (node) {
        var obj = node;
        while (obj.kind === ts.SyntaxKind.ParenthesizedExpression) {
            obj = node.expression;
        }
        return obj.kind === ts.SyntaxKind.ObjectLiteralExpression;
    };
    RuleWalker.prototype.report = function (arrowBody, expected) {
        var val = expected ? 'Expected' : 'Unexpected';
        var failure = this.createFailure(arrowBody.getStart(), arrowBody.getWidth(), val + " block statement surrounding arrow body.");
        this.addFailure(failure);
    };
    return RuleWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlckFycm93Qm9keVN0eWxlUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLHNCQUFzQixDQUFDO0FBRXpDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUEwRUEsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF4RWEsYUFBUSxHQUF1QjtRQUMzQyxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsdUNBQXVDO1FBQ3BELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMlVBQUEsd1FBSXpCLElBQUE7UUFDSCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sK3hCQUFBLHd1QkFZbEMsSUFBQTtRQUNILE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzt5QkFDMUI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFLENBQUM7b0JBQ1gsUUFBUSxFQUFFLENBQUM7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQzt5QkFDcEI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsVUFBVSxFQUFFO2dDQUNWLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs2QkFDbkQ7NEJBQ0Qsb0JBQW9CLEVBQUUs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QXZCLFVBQXdCLElBQWE7UUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUU7WUFDekQsR0FBRyxHQUFJLElBQW1DLENBQUMsVUFBVSxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7SUFDNUQsQ0FBQztJQUVPLDJCQUFNLEdBQWQsVUFBZSxTQUFrQixFQUFFLFFBQWlCO1FBQ2xELElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDakQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDaEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUNwQixTQUFTLENBQUMsUUFBUSxFQUFFLEVBQ2pCLEdBQUcsNkNBQTBDLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCxpQkFBQztBQUFELENBbkVBLEFBbUVDLENBbkV3QixJQUFJLENBQUMsVUFBVSxHQW1FdkMiLCJmaWxlIjoicnVsZXMvdGVyQXJyb3dCb2R5U3R5bGVSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
