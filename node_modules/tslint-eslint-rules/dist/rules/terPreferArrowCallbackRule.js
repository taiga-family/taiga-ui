"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-prefer-arrow-callback';
var OPTIONS;
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
        description: 'require arrow functions as callbacks',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Arrow functions are suited to callbacks, because:\n\n      * `this` keywords in arrow functions bind to the upper scope\u2019s.\n      * The notation of the arrow function is shorter than function expression\u2019s.\n      "], ["\n      Arrow functions are suited to callbacks, because:\n\n      * \\`this\\` keywords in arrow functions bind to the upper scope\u2019s.\n      * The notation of the arrow function is shorter than function expression\u2019s.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule takes one optional argument, an object which is an options object. This object\n      may specify the following properties:\n\n      * `\"allowNamedFunctions\"` (default false) When set to `true`, the rule doesn't warn on\n                                  named functions used as callback.\n      * `\"allowUnboundThis\"` (default true) When set to `false`, this option allows the use of\n                               `this` without restriction and checks for dynamically assigned\n                               `this` values such as when using `Array.prototype.map` with a\n                               `context` argument. Normally, the rule will flag the use of this\n                               whenever a function does not use `bind()` to specify the value of\n                               `this` constantly.\n      "], ["\n      This rule takes one optional argument, an object which is an options object. This object\n      may specify the following properties:\n\n      * \\`\"allowNamedFunctions\"\\` (default false) When set to \\`true\\`, the rule doesn't warn on\n                                  named functions used as callback.\n      * \\`\"allowUnboundThis\"\\` (default true) When set to \\`false\\`, this option allows the use of\n                               \\`this\\` without restriction and checks for dynamically assigned\n                               \\`this\\` values such as when using \\`Array.prototype.map\\` with a\n                               \\`context\\` argument. Normally, the rule will flag the use of this\n                               whenever a function does not use \\`bind()\\` to specify the value of\n                               \\`this\\` constantly.\n      "]))),
        options: {
            type: 'array',
            items: [{
                    type: 'object',
                    properties: {
                        allowNamedFunctions: {
                            type: 'boolean'
                        },
                        allowUnboundThis: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }],
            maxLength: 1
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, {\n          \"allowNamedFunctions\": true\n        }]\n        "], ["\n        \"", "\": [true, {\n          \"allowNamedFunctions\": true\n        }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, {\n          \"allowUnboundThis\": false\n        }]\n        "], ["\n        \"", "\": [true, {\n          \"allowUnboundThis\": false\n        }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, {\n          \"allowNamedFunctions\": true,\n          \"allowUnboundThis\": false\n        }]\n        "], ["\n        \"", "\": [true, {\n          \"allowNamedFunctions\": true,\n          \"allowUnboundThis\": false\n        }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'typescript'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function checkMetaProperty(node, name, prop) {
    return node.parent && node.parent.getFirstToken().getText() === name && node.name.text === prop;
}
function getCallbackInfo(func) {
    var retv = { isCallback: false, isLexicalThis: false };
    var node = func;
    var parent = node.parent;
    while (node && parent) {
        switch (parent.kind) {
            case ts.SyntaxKind.BinaryExpression:
            case ts.SyntaxKind.ConditionalExpression:
                break;
            case ts.SyntaxKind.PropertyAccessExpression:
                if (parent.name.kind === ts.SyntaxKind.Identifier &&
                    parent.name.text === 'bind' &&
                    parent.parent &&
                    parent.parent.kind === ts.SyntaxKind.CallExpression &&
                    parent.parent.expression === parent) {
                    retv.isLexicalThis = (parent.parent.arguments.length === 1 &&
                        parent.parent.arguments[0].kind === ts.SyntaxKind.ThisKeyword);
                    node = parent;
                    parent = parent.parent;
                }
                else {
                    return retv;
                }
                break;
            case ts.SyntaxKind.CallExpression:
            case ts.SyntaxKind.NewExpression:
                if (parent.expression !== node) {
                    retv.isCallback = true;
                }
                return retv;
            default:
                return retv;
        }
        node = parent;
        parent = node.parent;
    }
    throw new Error('unreachable');
}
var RuleWalker = (function (_super) {
    tslib_1.__extends(RuleWalker, _super);
    function RuleWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.stack = [];
        OPTIONS = {
            allowUnboundThis: true,
            allowNamedFunctions: null
        };
        var userOptions = _this.getOptions()[0];
        if (userOptions) {
            OPTIONS.allowUnboundThis = userOptions.allowUnboundThis !== false;
            OPTIONS.allowNamedFunctions = userOptions.allowNamedFunctions;
        }
        return _this;
    }
    RuleWalker.prototype.enterScope = function (functionName) {
        this.stack.push({
            functionName: functionName,
            isRecursive: false,
            hasThis: false,
            hasSuper: false,
            hasMeta: false,
            hasArguments: false
        });
    };
    RuleWalker.prototype.exitScope = function () {
        return this.stack.pop();
    };
    RuleWalker.prototype.exitFunctionExpression = function (node) {
        var scopeInfo = this.exitScope();
        if (node.asteriskToken) {
            return;
        }
        if (node.name && node.name.text) {
            if (OPTIONS.allowNamedFunctions || scopeInfo.isRecursive) {
                return;
            }
        }
        var params = node.parameters.map(function (x) { return x.name.getText(); });
        var argumentsIsParam = params.indexOf('arguments') !== -1;
        if (!argumentsIsParam && scopeInfo.hasArguments) {
            return;
        }
        var callbackInfo = getCallbackInfo(node);
        if (callbackInfo.isCallback &&
            (!OPTIONS.allowUnboundThis || !scopeInfo.hasThis || callbackInfo.isLexicalThis) &&
            !scopeInfo.hasSuper &&
            !scopeInfo.hasMeta) {
            var failure = this.createFailure(node.getStart(), node.getWidth(), 'Unexpected function expression.');
            this.addFailure(failure);
        }
    };
    RuleWalker.prototype.visitSourceFile = function (node) {
        this.stack = [];
        _super.prototype.visitSourceFile.call(this, node);
    };
    RuleWalker.prototype.visitFunctionDeclaration = function (node) {
        this.enterScope();
        _super.prototype.visitFunctionDeclaration.call(this, node);
        this.exitScope();
    };
    RuleWalker.prototype.visitFunctionExpression = function (node) {
        this.enterScope(node.name ? node.name.text : undefined);
        _super.prototype.visitFunctionExpression.call(this, node);
        this.exitFunctionExpression(node);
    };
    RuleWalker.prototype.visitNode = function (node) {
        var info = this.stack[this.stack.length - 1];
        if (info && node.parent && node.parent.kind !== ts.SyntaxKind.FunctionExpression) {
            if (node.kind === ts.SyntaxKind.ThisKeyword) {
                info.hasThis = true;
            }
            else if (node.kind === ts.SyntaxKind.SuperKeyword) {
                info.hasSuper = true;
            }
            else if (node.kind === ts.SyntaxKind.Identifier) {
                var text = node.text;
                if (text === 'arguments') {
                    info.hasArguments = true;
                }
                else if (text === info.functionName) {
                    info.isRecursive = true;
                }
            }
            else if ((node.kind === ts.SyntaxKind.PropertyAccessExpression ||
                node.kind === ts.SyntaxKind.MetaProperty) &&
                checkMetaProperty(node, 'new', 'target')) {
                info.hasMeta = true;
            }
        }
        _super.prototype.visitNode.call(this, node);
    };
    return RuleWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3RlclByZWZlckFycm93Q2FsbGJhY2tSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFFL0IsSUFBTSxTQUFTLEdBQUcsMkJBQTJCLENBQUM7QUFDOUMsSUFBSSxPQUFZLENBQUM7QUFFakI7SUFBMEIsZ0NBQXVCO0lBQWpEOztJQW9FQSxDQUFDO0lBSlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWxFYSxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxvVEFBQSw2T0FLekIsSUFBQTtRQUNILGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSw4NUJBQUEsMjNCQVlsQyxJQUFBO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsUUFBUTtvQkFDZCxVQUFVLEVBQUU7d0JBQ1YsbUJBQW1CLEVBQUU7NEJBQ25CLElBQUksRUFBRSxTQUFTO3lCQUNoQjt3QkFDRCxnQkFBZ0IsRUFBRTs0QkFDaEIsSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3FCQUNGO29CQUNELG9CQUFvQixFQUFFLEtBQUs7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQztTQUNiO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlIQUFBLGNBQ1osRUFBUyxzQkFDWCxLQURFLFNBQVM7WUFFZCxJQUFJLENBQUMsS0FBSyxDQUFD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QUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxpQkFBTSx1QkFBdUIsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVTLDhCQUFTLEdBQW5CLFVBQW9CLElBQWE7UUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7WUFDaEYsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDakQsSUFBTSxJQUFJLEdBQUksSUFBc0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQzFCO3FCQUFNLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUN6QjthQUNGO2lCQUFNLElBQ0wsQ0FDRSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUN6QztnQkFDRCxpQkFBaUIsQ0FBQyxJQUFtQyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsRUFDdkU7Z0JBQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDRjtRQUNELGlCQUFNLFNBQVMsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQXhIQSxBQXdIQyxDQXhId0IsSUFBSSxDQUFDLFVBQVUsR0F3SHZDIiwiZmlsZSI6InJ1bGVzL3RlclByZWZlckFycm93Q2FsbGJhY2tSdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
