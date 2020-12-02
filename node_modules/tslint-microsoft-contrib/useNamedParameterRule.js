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
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'use-named-parameter',
        type: 'maintainability',
        description: 'Do not reference the arguments object by numerical index; instead, use a named parameter.',
        options: null,
        optionsDescription: '',
        typescriptOnly: false,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '710'
    };
    Rule.FAILURE_STRING = 'Use a named parameter instead: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isElementAccessExpression(node)) {
            if (node.argumentExpression !== undefined) {
                if (node.argumentExpression.kind === ts.SyntaxKind.NumericLiteral) {
                    if (node.expression.getText() === 'arguments') {
                        var failureString = Rule.FAILURE_STRING + "'" + node.getText() + "'";
                        ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=useNamedParameterRule.js.map