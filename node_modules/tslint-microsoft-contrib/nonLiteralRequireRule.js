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
var AstUtils_1 = require("./utils/AstUtils");
var Utils_1 = require("./utils/Utils");
var FAILURE_STRING = 'Non-literal (insecure) parameter passed to require(): ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'non-literal-require',
        type: 'functionality',
        description: 'Detect require includes that are not for string literals',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '95,676'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            if (AstUtils_1.AstUtils.getFunctionName(node) === 'require' &&
                AstUtils_1.AstUtils.getFunctionTarget(node) === undefined &&
                node.arguments.length > 0) {
                if (tsutils.isArrayLiteralExpression(node.arguments[0])) {
                    var arrayExp = node.arguments[0];
                    arrayExp.elements.forEach(function (initExpression) {
                        if (!tsutils.isStringLiteral(initExpression)) {
                            fail(initExpression);
                        }
                    });
                }
                else if (!tsutils.isStringLiteral(node.arguments[0])) {
                    fail(node.arguments[0]);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function fail(expression) {
        var start = expression.getStart();
        var width = expression.getWidth();
        var message = FAILURE_STRING + Utils_1.Utils.trimTo(expression.getText(), 25);
        ctx.addFailureAt(start, width, message);
    }
}
//# sourceMappingURL=nonLiteralRequireRule.js.map