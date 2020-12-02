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
var FAILURE_STRING = 'Replace void 0 with undefined';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'void-zero',
        type: 'maintainability',
        description: 'Avoid using void 0; use undefined instead.',
        hasFix: true,
        rationale: 'void 0, which resolves to undefined, can be confusing to newcomers. Exclusively use undefined to reduce ambiguity.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '480'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isVoidExpression(node)) {
            if (node.expression !== undefined && node.expression.getText() === '0') {
                var nodeStart = node.getStart();
                var nodeWidth = node.getWidth();
                var fix = new Lint.Replacement(nodeStart, nodeWidth, 'undefined');
                ctx.addFailureAt(nodeStart, nodeWidth, FAILURE_STRING, fix);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=voidZeroRule.js.map