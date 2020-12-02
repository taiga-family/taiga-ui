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
var ScopedSymbolTrackingWalker_1 = require("./ScopedSymbolTrackingWalker");
var AstUtils_1 = require("./AstUtils");
var NoStringParameterToFunctionCallWalker = (function (_super) {
    __extends(NoStringParameterToFunctionCallWalker, _super);
    function NoStringParameterToFunctionCallWalker(sourceFile, targetFunctionName, options, program) {
        var _this = _super.call(this, sourceFile, options, program) || this;
        _this.targetFunctionName = targetFunctionName;
        _this.failureString = 'Forbidden ' + targetFunctionName + ' string parameter: ';
        return _this;
    }
    NoStringParameterToFunctionCallWalker.prototype.visitCallExpression = function (node) {
        this.validateExpression(node);
        _super.prototype.visitCallExpression.call(this, node);
    };
    NoStringParameterToFunctionCallWalker.prototype.validateExpression = function (node) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
        var functionTargetType = this.getFunctionTargetType(node);
        var firstArg = node.arguments[0];
        if (functionName === this.targetFunctionName && firstArg !== undefined) {
            if (functionTarget) {
                if (functionTargetType) {
                    if (!functionTargetType.match(/^(any|Window|Worker)$/)) {
                        return;
                    }
                }
                else {
                    if (!functionTarget.match(/^(this|window)$/)) {
                        return;
                    }
                }
            }
            if (!this.isExpressionEvaluatingToFunction(firstArg)) {
                var msg = this.failureString +
                    firstArg
                        .getFullText()
                        .trim()
                        .substring(0, 40);
                this.addFailureAt(node.getStart(), node.getWidth(), msg);
            }
        }
    };
    return NoStringParameterToFunctionCallWalker;
}(ScopedSymbolTrackingWalker_1.ScopedSymbolTrackingWalker));
exports.NoStringParameterToFunctionCallWalker = NoStringParameterToFunctionCallWalker;
//# sourceMappingURL=NoStringParameterToFunctionCallWalker.js.map