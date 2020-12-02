"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'handle-callback-err';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ErrCallbackHandlerWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'enforce error handling in callbacks',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      In Node.js, a common pattern for dealing with asynchronous behavior is called the callback\n      pattern. This pattern expects an Error object or null as the first argument of the callback.\n      Forgetting to handle these errors can lead to some really strange behavior in your\n      application.\n      "], ["\n      In Node.js, a common pattern for dealing with asynchronous behavior is called the callback\n      pattern. This pattern expects an Error object or null as the first argument of the callback.\n      Forgetting to handle these errors can lead to some really strange behavior in your\n      application.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      The rule takes a string option: the name of the error parameter. The default is\n      `\"err\"`.\n\n      Sometimes the name of the error variable is not consistent across the project, so you need a\n      more flexible configuration to ensure that the rule reports all unhandled errors.\n\n      If the configured name of the error variable begins with a `^` it is considered to be a\n      regexp pattern.\n\n      - If the option is `\"^(err|error|anySpecificError)$\"`, the rule reports unhandled errors\n        where the parameter name can be `err`, `error` or `anySpecificError`.\n      - If the option is `\"^.+Error$\"`, the rule reports unhandled errors where the parameter\n        name ends with `Error` (for example, `connectionError` or `validationError` will\n        match).\n      - If the option is `\"^.*(e|E)rr\"`, the rule reports unhandled errors where the parameter\n        name matches any string that contains `err` or `Err` (for example, `err`, `error`,\n        `anyError`, `some_err` will match).\n\n      In addition to the string we may specify an options object with the following property:\n\n      - `allowProperties`: (`true` by default) When this is set to `false` the rule will not\n        report unhandled errors as long as the error object is handled without accessing any of its\n        properties at least once. For instance, `(err) => console.log(err.stack)` would report an\n        issue when `allowProperties` is set to `false` because `err` is not handled on its\n        own.\n      "], ["\n      The rule takes a string option: the name of the error parameter. The default is\n      \\`\"err\"\\`.\n\n      Sometimes the name of the error variable is not consistent across the project, so you need a\n      more flexible configuration to ensure that the rule reports all unhandled errors.\n\n      If the configured name of the error variable begins with a \\`^\\` it is considered to be a\n      regexp pattern.\n\n      - If the option is \\`\"^(err|error|anySpecificError)$\"\\`, the rule reports unhandled errors\n        where the parameter name can be \\`err\\`, \\`error\\` or \\`anySpecificError\\`.\n      - If the option is \\`\"^.+Error$\"\\`, the rule reports unhandled errors where the parameter\n        name ends with \\`Error\\` (for example, \\`connectionError\\` or \\`validationError\\` will\n        match).\n      - If the option is \\`\"^.*(e|E)rr\"\\`, the rule reports unhandled errors where the parameter\n        name matches any string that contains \\`err\\` or \\`Err\\` (for example, \\`err\\`, \\`error\\`,\n        \\`anyError\\`, \\`some_err\\` will match).\n\n      In addition to the string we may specify an options object with the following property:\n\n      - \\`allowProperties\\`: (\\`true\\` by default) When this is set to \\`false\\` the rule will not\n        report unhandled errors as long as the error object is handled without accessing any of its\n        properties at least once. For instance, \\`(err) => console.log(err.stack)\\` would report an\n        issue when \\`allowProperties\\` is set to \\`false\\` because \\`err\\` is not handled on its\n        own.\n      "]))),
        options: {
            type: 'array',
            items: [{
                    type: 'string'
                }, {
                    type: 'object',
                    properties: {
                        allowProperties: 'boolean'
                    },
                    additionalProperties: false
                }],
            minLength: 0,
            maxLength: 2
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"error\"]\n        "], ["\n        \"", "\": [true, \"error\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"^(err|error|anySpecificError)$\"]\n        "], ["\n        \"", "\": [true, \"^(err|error|anySpecificError)$\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, { \"allowProperties\": false }]\n        "], ["\n        \"", "\": [true, { \"allowProperties\": false }]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"^(err|error|anySpecificError)$\", { \"allowProperties\": false }]\n        "], ["\n        \"", "\": [true, \"^(err|error|anySpecificError)$\", { \"allowProperties\": false }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'maintainability'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ErrCallbackHandlerWalker = (function (_super) {
    tslib_1.__extends(ErrCallbackHandlerWalker, _super);
    function ErrCallbackHandlerWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.stack = [];
        _this.allowProperties = true;
        var opt = _this.getOptions();
        var errorArgument = 'err';
        var optObj = opt[0];
        if (typeof opt[0] === 'string') {
            errorArgument = opt[0];
            optObj = opt[1];
        }
        if (optObj) {
            _this.allowProperties = optObj.allowProperties !== false;
        }
        if (errorArgument.charAt(0) === '^') {
            _this.errorCheck = RegExp.prototype.test.bind(new RegExp(errorArgument));
        }
        else {
            _this.errorCheck = (function (name) { return name === errorArgument; });
        }
        _this.firstParameterName = function (node) {
            var param = node.parameters[0];
            return param ? param.name.getText(sourceFile) : undefined;
        };
        return _this;
    }
    ErrCallbackHandlerWalker.prototype.enterScope = function (firstParamName) {
        this.stack.push({
            firstParamName: firstParamName,
            hasFirstParam: false
        });
    };
    ErrCallbackHandlerWalker.prototype.exitScope = function () {
        return this.stack.pop();
    };
    ErrCallbackHandlerWalker.prototype.visitSourceFile = function (node) {
        this.stack = [];
        _super.prototype.visitSourceFile.call(this, node);
    };
    ErrCallbackHandlerWalker.prototype.visitFunctionDeclaration = function (node) {
        this.enterScope(this.firstParameterName(node));
        _super.prototype.visitFunctionDeclaration.call(this, node);
        this.exitFunction(node);
    };
    ErrCallbackHandlerWalker.prototype.visitFunctionExpression = function (node) {
        this.enterScope(this.firstParameterName(node));
        _super.prototype.visitFunctionExpression.call(this, node);
        this.exitFunction(node);
    };
    ErrCallbackHandlerWalker.prototype.visitArrowFunction = function (node) {
        this.enterScope(this.firstParameterName(node));
        _super.prototype.visitArrowFunction.call(this, node);
        this.exitFunction(node);
    };
    ErrCallbackHandlerWalker.prototype.visitCatchClause = function (node) {
        this.enterScope(node.variableDeclaration ? node.variableDeclaration.name.getText() : undefined);
        _super.prototype.visitCatchClause.call(this, node);
        this.exitScope();
    };
    ErrCallbackHandlerWalker.prototype.exitFunction = function (node) {
        var scopeInfo = this.exitScope();
        var param = scopeInfo.firstParamName;
        if (param && this.errorCheck(param) && !scopeInfo.hasFirstParam) {
            var name = node.parameters[0].name;
            var strictMsg = !this.allowProperties ? ' without property access at least once' : '';
            var msg = "Expected error to be handled" + strictMsg;
            var failure = this.createFailure(name.getStart(this.getSourceFile()), name.getWidth(this.getSourceFile()), msg);
            this.addFailure(failure);
        }
    };
    ErrCallbackHandlerWalker.prototype.isPropAccess = function (node) {
        return node.kind === ts.SyntaxKind.PropertyAccessExpression;
    };
    ErrCallbackHandlerWalker.prototype.visitNode = function (node) {
        if (this.stack.length > 0 &&
            node.kind === ts.SyntaxKind.Identifier &&
            node.parent &&
            node.parent.kind !== ts.SyntaxKind.Parameter) {
            var doCheck = false;
            var inPropertyAccess = this.isPropAccess(node.parent);
            if (!this.allowProperties) {
                doCheck = !inPropertyAccess;
            }
            else if (inPropertyAccess) {
                doCheck = node.parent.expression === node;
            }
            else {
                doCheck = true;
            }
            if (doCheck) {
                var text = node.text;
                var i = this.stack.length;
                while (i--) {
                    var info = this.stack[i];
                    if (text === info.firstParamName) {
                        info.hasFirstParam = true;
                        break;
                    }
                }
            }
        }
        _super.prototype.visitNode.call(this, node);
    };
    return ErrCallbackHandlerWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2hhbmRsZUNhbGxiYWNrRXJyUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBRS9CLElBQU0sU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBRXhDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUF3RUEsQ0FBQztJQUhRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBdEVhLGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHlZQUFBLDhUQUt6QixJQUFBO1FBQ0gsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGtsREFBQSx1bURBMEJsQyxJQUFBO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsUUFBUTtpQkFDZixFQUFFO29CQUNELElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRTt3QkFDVixlQUFlLEVBQUUsU0FBUztxQkFDM0I7b0JBQ0Qsb0JBQW9CLEVBQUUsS0FBSztpQkFDNUIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSw0SEFBQSxjQUNaLEVBQVMsaUNBQ1gsS0FERSxTQUFTO1lBRWQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLHFKQUFBLGNBQ1osRUFBUywwREFDWCxLQURFLFNBQVM7WUFFZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0saUpBQUEsY0FDWixFQUFTLHNEQUNYLEtBREUsU0FBUztZQUVkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxxTEFBQSxjQUNaLEVBQVMsMEZBQ1gsS0FERSxTQUFTO1NBRWY7UUFDRCxjQUFjLEVBQUUsS0FBSztRQUNyQixJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCLENBQUM7SUFLSixXQUFDO0NBeEVELEFBd0VDLENBeEV5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0F3RWhEO0FBeEVZLG9CQUFJO0FBK0VqQjtJQUF1QyxvREFBZTtJQU1wRCxrQ0FBWSxVQUF5QixFQUFFLE9BQXNCO1FBQTdELFlBQ0Usa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQXNCM0I7UUE1Qk8sV0FBSyxHQUFxQixFQUFFLENBQUM7UUFHN0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFJdEMsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDOUIsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssYUFBYSxFQUF0QixDQUFzQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBQyxJQUFnQztZQUN6RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBTU8sNkNBQVUsR0FBbEIsVUFBbUIsY0FBdUI7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxjQUFjLGdCQUFBO1lBQ2QsYUFBYSxFQUFFLEtBQUs7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtPLDRDQUFTLEdBQWpCO1FBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRyxDQUFDO0lBQzNCLENBQUM7SUFFUyxrREFBZSxHQUF6QixVQUEwQixJQUFtQjtRQUUzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBTSxlQUFlLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVTLDJEQUF3QixHQUFsQyxVQUFtQyxJQUE0QjtRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGlCQUFNLHdCQUF3QixZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVTLDBEQUF1QixHQUFqQyxVQUFrQyxJQUEyQjtRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGlCQUFNLHVCQUF1QixZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHFEQUFrQixHQUF6QixVQUEwQixJQUFzQjtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGlCQUFNLGtCQUFrQixZQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVTLG1EQUFnQixHQUExQixVQUEyQixJQUFvQjtRQUc3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsaUJBQU0sZ0JBQWdCLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTywrQ0FBWSxHQUFwQixVQUFxQixJQUFnQztRQUNuRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUN2QyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUMvRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEYsSUFBTSxHQUFHLEdBQUcsaUNBQStCLFNBQVcsQ0FBQztZQUN2RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUNuQyxHQUFHLENBQ0osQ0FBQztZQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU8sK0NBQVksR0FBcEIsVUFBcUIsSUFBYTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztJQUM5RCxDQUFDO0lBRVMsNENBQVMsR0FBbkIsVUFBb0IsSUFBYTtRQUUvQixJQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDdEMsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFDNUM7WUFDQSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDekIsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxnQkFBZ0IsRUFBRTtnQkFFM0IsT0FBTyxHQUFJLElBQUksQ0FBQyxNQUFzQyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUM7YUFDNUU7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUVELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQU0sSUFBSSxHQUFJLElBQXNCLENBQUMsSUFBSSxDQUFDO2dCQUcxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEVBQUUsRUFBRTtvQkFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDMUIsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0EzSUEsQUEySUMsQ0EzSXNDLElBQUksQ0FBQyxVQUFVLEdBMklyRCIsImZpbGUiOiJydWxlcy9oYW5kbGVDYWxsYmFja0VyclJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==
