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
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (Rule.isWarningShown === false) {
            console.warn('Warning: no-function-constructor-with-string-args rule is deprecated. Replace your usage with the TSLint function-constructor rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-function-constructor-with-string-args',
        type: 'maintainability',
        description: 'Do not use the version of the Function constructor that accepts a string argument to define the body of the function',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        recommendation: 'false',
        group: 'Security',
        commonWeaknessEnumeration: '95, 676, 242, 116'
    };
    Rule.FAILURE_STRING = 'forbidden: Function constructor with string arguments ';
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isNewExpression(node)) {
            var functionName = AstUtils_1.AstUtils.getFunctionName(node);
            if (functionName === 'Function' && node.arguments && node.arguments.length > 0) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.FAILURE_STRING);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noFunctionConstructorWithStringArgsRule.js.map