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
        ruleName: 'no-function-expression',
        type: 'maintainability',
        description: 'Do not use function expressions; use arrow functions (lambdas) instead.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.FAILURE_STRING = 'Use arrow function instead of function expression';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var allowGenericFunctionExpression = AstUtils_1.AstUtils.getLanguageVariant(ctx.sourceFile) === ts.LanguageVariant.JSX;
    function cb(node) {
        if (tsutils.isFunctionExpression(node)) {
            var walker_1 = new SingleFunctionWalker();
            node.getChildren().forEach(function (child) {
                walker_1.walk(child);
            });
            var isGenericFunctionInTSX = allowGenericFunctionExpression && walker_1.isGenericFunction;
            if (!walker_1.isAccessingThis &&
                !node.asteriskToken &&
                !isGenericFunctionInTSX) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.FAILURE_STRING);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
var SingleFunctionWalker = (function () {
    function SingleFunctionWalker() {
        this.isAccessingThis = false;
        this.isGenericFunction = false;
    }
    SingleFunctionWalker.prototype.walk = function (root) {
        var _this = this;
        var cb = function (node) {
            if (node.getText() === 'this') {
                _this.isAccessingThis = true;
            }
            if (tsutils.isFunctionExpression(node) || tsutils.isArrowFunction(node)) {
                return;
            }
            if (tsutils.isTypeReferenceNode(node)) {
                _this.isGenericFunction = true;
            }
            ts.forEachChild(node, cb);
        };
        cb(root);
    };
    return SingleFunctionWalker;
}());
//# sourceMappingURL=noFunctionExpressionRule.js.map