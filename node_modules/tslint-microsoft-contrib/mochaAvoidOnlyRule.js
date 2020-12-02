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
var MochaUtils_1 = require("./utils/MochaUtils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'mocha-avoid-only',
        type: 'maintainability',
        description: "Do not invoke Mocha's describe.only, it.only or context.only functions.",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        group: 'Correctness'
    };
    Rule.FAILURE_STRING_IT = 'Do not commit Mocha it.only function call';
    Rule.FAILURE_STRING_SPECIFY = 'Do not commit Mocha specify.only function call';
    Rule.FAILURE_STRING_DESCRIBE = 'Do not commit Mocha describe.only function call';
    Rule.FAILURE_STRING_CONTEXT = 'Do not commit Mocha context.only function call';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            if (tsutils.isPropertyAccessExpression(node.expression)) {
                if (node.arguments.length === 2) {
                    if (tsutils.isStringLiteral(node.arguments[0])) {
                        if (tsutils.isFunctionExpression(node.arguments[1]) || tsutils.isArrowFunction(node.arguments[1])) {
                            var text = node.expression.getText();
                            switch (text) {
                                case 'it.only':
                                    ctx.addFailureAt(node.getStart(), text.length, Rule.FAILURE_STRING_IT);
                                    break;
                                case 'specify.only':
                                    ctx.addFailureAt(node.getStart(), text.length, Rule.FAILURE_STRING_SPECIFY);
                                    break;
                                case 'describe.only':
                                    ctx.addFailureAt(node.getStart(), text.length, Rule.FAILURE_STRING_DESCRIBE);
                                    break;
                                case 'context.only':
                                    ctx.addFailureAt(node.getStart(), text.length, Rule.FAILURE_STRING_CONTEXT);
                                    break;
                                default:
                            }
                        }
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    if (MochaUtils_1.MochaUtils.isMochaTest(ctx.sourceFile)) {
        return ts.forEachChild(ctx.sourceFile, cb);
    }
}
//# sourceMappingURL=mochaAvoidOnlyRule.js.map