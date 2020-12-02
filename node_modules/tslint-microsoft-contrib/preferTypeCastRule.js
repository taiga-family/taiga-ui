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
var AstUtils_1 = require("./utils/AstUtils");
var FAILURE_STRING = 'Found as-cast instead of a traditional type-cast. Please convert to a type-cast: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'prefer-type-cast',
        type: 'maintainability',
        description: "Prefer the tradition type casts instead of the new 'as-cast' syntax",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Configurable',
        recommendation: 'true',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (node.kind === ts.SyntaxKind.AsExpression) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING + node.getText());
        }
        return ts.forEachChild(node, cb);
    }
    if (AstUtils_1.AstUtils.getLanguageVariant(ctx.sourceFile) === ts.LanguageVariant.Standard) {
        return ts.forEachChild(ctx.sourceFile, cb);
    }
}
//# sourceMappingURL=preferTypeCastRule.js.map