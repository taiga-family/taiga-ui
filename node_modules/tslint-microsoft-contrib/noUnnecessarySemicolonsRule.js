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
    Rule.FAILURE_STRING = 'unnecessary semi-colon';
    Rule.metadata = {
        ruleName: 'no-unnecessary-semicolons',
        type: 'maintainability',
        description: 'Remove unnecessary semicolons',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Whitespace',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isEmptyStatement(node)) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.FAILURE_STRING);
        }
        if (tsutils.isForStatement(node)) {
            if (tsutils.isEmptyStatement(node.statement)) {
                var expression = node.initializer || node.condition || node.incrementor;
                if (expression) {
                    return ts.forEachChild(expression, cb);
                }
            }
        }
        if (tsutils.isWhileStatement(node)) {
            if (tsutils.isEmptyStatement(node.statement)) {
                return ts.forEachChild(node.expression, cb);
            }
        }
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnnecessarySemicolonsRule.js.map