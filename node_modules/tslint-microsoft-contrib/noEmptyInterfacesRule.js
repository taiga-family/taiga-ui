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
            console.warn('Warning: no-empty-interfaces rule is deprecated. Replace your usage with the TSLint no-empty-interface rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-empty-interfaces',
        type: 'maintainability',
        description: 'Do not use empty interfaces.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Deprecated',
        recommendation: 'false',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.FAILURE_STRING = 'Do not declare empty interfaces: ';
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isInterfaceDeclaration(node) && isInterfaceEmpty(node) && !hasMultipleParents(node)) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.FAILURE_STRING + "'" + node.name.getText() + "'");
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function isInterfaceEmpty(node) {
        return node.members === undefined || node.members.length === 0;
    }
    function hasMultipleParents(node) {
        if (node.heritageClauses === undefined || node.heritageClauses.length === 0) {
            return false;
        }
        return node.heritageClauses[0].types.length >= 2;
    }
}
//# sourceMappingURL=noEmptyInterfacesRule.js.map