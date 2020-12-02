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
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-backbone-get-set-outside-model',
        type: 'maintainability',
        description: "Avoid using `model.get('x')` and `model.set('x', value)` Backbone accessors outside of the owning model.",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.GET_FAILURE_STRING = 'Backbone get() called outside of owning model: ';
    Rule.SET_FAILURE_STRING = 'Backbone set() called outside of owning model: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            if (AstUtils_1.AstUtils.getFunctionTarget(node) !== 'this') {
                var functionName = AstUtils_1.AstUtils.getFunctionName(node);
                if (functionName === 'get' && node.arguments.length === 1 && tsutils.isStringLiteral(node.arguments[0])) {
                    var msg = Rule.GET_FAILURE_STRING + node.getText();
                    ctx.addFailureAt(node.getStart(), node.getWidth(), msg);
                }
                if (functionName === 'set' && node.arguments.length === 2 && tsutils.isStringLiteral(node.arguments[0])) {
                    var msg = Rule.SET_FAILURE_STRING + node.getText();
                    ctx.addFailureAt(node.getStart(), node.getWidth(), msg);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noBackboneGetSetOutsideModelRule.js.map