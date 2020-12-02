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
var FAILURE_STRING = 'Assigning this reference to local variable: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (Rule.isWarningShown === false) {
            console.warn('Warning: no-var-self rule is deprecated. Replace your usage with the TSLint no-this-assignment rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var opt = {
            bannedVariableNames: /.*/
        };
        if (options.ruleArguments && options.ruleArguments.length > 0) {
            opt.bannedVariableNames = new RegExp(options.ruleArguments[0]);
        }
        return opt;
    };
    Rule.metadata = {
        ruleName: 'no-var-self',
        type: 'maintainability',
        description: 'Do not use var self = this; instead, manage scope with arrow functions/lambdas.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Deprecated',
        recommendation: 'false',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var bannedVariableNames = ctx.options.bannedVariableNames;
    function cb(node) {
        if (tsutils.isVariableDeclaration(node)) {
            if (node.initializer && node.initializer.kind === ts.SyntaxKind.ThisKeyword) {
                if (tsutils.isIdentifier(node.name)) {
                    var identifier = node.name;
                    if (bannedVariableNames.test(identifier.text)) {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING + node.getText());
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noVarSelfRule.js.map