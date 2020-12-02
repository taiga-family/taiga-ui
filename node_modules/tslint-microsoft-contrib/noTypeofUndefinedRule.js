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
var FAILURE_STRING = "Avoid typeof x === 'undefined' comparisons. Prefer x == undefined or x === undefined: ";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-typeof-undefined',
        type: 'maintainability',
        description: "Do not use the idiom typeof `x === 'undefined'`. You can safely use the simpler x === undefined " +
            'or perhaps x == null if you want to check for either null or undefined.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function isTypeOfExpression(node) {
        return node.kind === ts.SyntaxKind.TypeOfExpression;
    }
    function isUndefinedString(node) {
        if (tsutils.isStringLiteral(node)) {
            if (node.text === 'undefined') {
                return true;
            }
        }
        return false;
    }
    function cb(node) {
        if (tsutils.isBinaryExpression(node)) {
            if ((isUndefinedString(node.left) && isTypeOfExpression(node.right)) ||
                (isUndefinedString(node.right) && isTypeOfExpression(node.left))) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING + node.getText());
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noTypeofUndefinedRule.js.map