"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var FAILURE_STRING = 'Unnecessary method override. A method that only calls super can be removed: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-unnecessary-override',
        type: 'maintainability',
        description: 'Do not write a method that only calls super() on the parent method with the same arguments.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function getSingleStatement(block) {
        if (block.statements.length === 1) {
            return block.statements[0];
        }
        return undefined;
    }
    function isMatchingArgumentList(node, statement) {
        var call = getCallExpressionFromStatement(statement);
        if (call === undefined) {
            return false;
        }
        if (call.arguments.length === 0 && node.parameters.length === 0) {
            return true;
        }
        if (call.arguments.length !== node.parameters.length) {
            return false;
        }
        var allParameters = node.parameters;
        for (var i = 0; i < allParameters.length; i++) {
            var parameter = allParameters[i];
            var argument = call.arguments[i];
            if (!tsutils.isIdentifier(argument)) {
                return false;
            }
            if (!tsutils.isIdentifier(parameter.name)) {
                return false;
            }
            var argumentName = argument.text;
            var parameterName = parameter.name.text;
            if (argumentName !== parameterName) {
                return false;
            }
        }
        return true;
    }
    function isSuperCall(node, statement) {
        var call = getCallExpressionFromStatement(statement);
        if (call === undefined) {
            return false;
        }
        if (!tsutils.isPropertyAccessExpression(call.expression)) {
            return false;
        }
        var propAccess = call.expression;
        if (propAccess.expression.kind !== ts.SyntaxKind.SuperKeyword) {
            return false;
        }
        var declaredMethodName = getMethodName(node);
        var methodName = propAccess.name.text;
        return methodName === declaredMethodName;
    }
    function getCallExpressionFromStatement(statement) {
        var expression;
        if (tsutils.isExpressionStatement(statement)) {
            expression = statement.expression;
        }
        else if (tsutils.isReturnStatement(statement)) {
            expression = statement.expression;
            if (expression === undefined) {
                return undefined;
            }
        }
        else {
            return undefined;
        }
        if (!tsutils.isCallExpression(expression)) {
            return undefined;
        }
        var call = expression;
        if (!tsutils.isPropertyAccessExpression(call.expression)) {
            return undefined;
        }
        return call;
    }
    function getMethodName(node) {
        var nameNode = node.name;
        if (tsutils.isIdentifier(nameNode)) {
            return nameNode.text;
        }
        return '<unknown>';
    }
    function cb(node) {
        if (tsutils.isMethodDeclaration(node)) {
            if (node.body !== undefined) {
                var statement = getSingleStatement(node.body);
                if (statement !== undefined) {
                    if (isSuperCall(node, statement) && isMatchingArgumentList(node, statement)) {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING + getMethodName(node));
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnnecessaryOverrideRule.js.map