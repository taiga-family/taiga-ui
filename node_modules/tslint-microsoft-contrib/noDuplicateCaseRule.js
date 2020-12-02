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
        if (Rule.isWarningShown === false) {
            console.warn('Warning: no-duplicate-case rule is deprecated. Replace your usage with the TSLint no-duplicate-switch-case rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-duplicate-case',
        type: 'maintainability',
        description: 'Do not use duplicate case labels in switch statements.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        recommendation: 'false',
        group: 'Deprecated',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.FAILURE_STRING = 'Duplicate case found in switch statement: ';
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isSwitchStatement(node)) {
            var seenLabels_1 = [];
            node.caseBlock.clauses.forEach(function (clauseOrDefault) {
                if (tsutils.isCaseClause(clauseOrDefault)) {
                    var clause = clauseOrDefault;
                    if (clause.expression) {
                        var caseText = clause.expression.getText();
                        if (seenLabels_1.indexOf(caseText) > -1) {
                            ctx.addFailureAt(clause.getStart(), clause.getWidth(), Rule.FAILURE_STRING + caseText);
                        }
                        else {
                            seenLabels_1.push(caseText);
                        }
                    }
                }
            });
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noDuplicateCaseRule.js.map