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
        ruleName: 'no-missing-visibility-modifiers',
        type: 'maintainability',
        description: 'Deprecated - This rule is in the TSLint product as `member-access`',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Deprecated',
        recommendation: 'false',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function isMissingVisibilityModifier(node) {
        return !(AstUtils_1.AstUtils.isPrivate(node) || AstUtils_1.AstUtils.isProtected(node) || AstUtils_1.AstUtils.isPublic(node));
    }
    function getFailureCodeSnippet(node) {
        var message = node.getText();
        if (message.indexOf('\n') > 0) {
            return message.substr(0, message.indexOf('\n'));
        }
        return message;
    }
    function cb(node) {
        if (tsutils.isPropertyDeclaration(node)) {
            if (isMissingVisibilityModifier(node)) {
                var failureString = 'Field missing visibility modifier: ' + getFailureCodeSnippet(node);
                ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
            }
        }
        if (tsutils.isMethodDeclaration(node)) {
            if (isMissingVisibilityModifier(node)) {
                var failureString = 'Method missing visibility modifier: ' + getFailureCodeSnippet(node);
                ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noMissingVisibilityModifiersRule.js.map