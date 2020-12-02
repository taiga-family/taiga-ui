"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var AstUtils_1 = require("./AstUtils");
var Utils_1 = require("./Utils");
var MochaUtils;
(function (MochaUtils) {
    function isMochaTest(node) {
        return Utils_1.Utils.exists(node.statements, function (statement) {
            return isStatementDescribeCall(statement);
        });
    }
    MochaUtils.isMochaTest = isMochaTest;
    function isStatementDescribeCall(statement) {
        if (statement.kind === ts.SyntaxKind.ExpressionStatement) {
            var expression = statement.expression;
            if (expression.kind === ts.SyntaxKind.CallExpression) {
                var call = expression;
                return isDescribe(call);
            }
        }
        return false;
    }
    MochaUtils.isStatementDescribeCall = isStatementDescribeCall;
    function isDescribe(call) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(call);
        var callText = call.expression.getText();
        return functionName === 'describe' || functionName === 'context' || /(describe|context)\.(only|skip|timeout)/.test(callText);
    }
    MochaUtils.isDescribe = isDescribe;
    function isLifecycleMethod(call) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(call);
        var callText = call.expression.getText();
        return (functionName === 'it' ||
            functionName === 'specify' ||
            functionName === 'before' ||
            functionName === 'beforeEach' ||
            functionName === 'beforeAll' ||
            functionName === 'after' ||
            functionName === 'afterEach' ||
            functionName === 'afterAll' ||
            callText === 'it.skip' ||
            callText === 'it.only');
    }
    MochaUtils.isLifecycleMethod = isLifecycleMethod;
})(MochaUtils = exports.MochaUtils || (exports.MochaUtils = {}));
//# sourceMappingURL=MochaUtils.js.map