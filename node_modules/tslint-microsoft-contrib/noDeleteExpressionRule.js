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
    Rule.metadata = {
        ruleName: 'no-delete-expression',
        type: 'maintainability',
        description: 'Do not delete expressions. Only properties should be deleted',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security'
    };
    Rule.FAILURE_STRING = 'Variables should not be deleted: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isExpressionStatement(node)) {
            if (tsutils.isDeleteExpression(node.expression)) {
                var deletedObject = node.expression.getChildren()[1];
                if (deletedObject && tsutils.isIdentifier(deletedObject)) {
                    addNoDeleteFailure(deletedObject);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function addNoDeleteFailure(deletedObject) {
        var msg = Rule.FAILURE_STRING + deletedObject.getFullText().trim();
        ctx.addFailureAt(deletedObject.getStart(), deletedObject.getWidth(), msg);
    }
}
//# sourceMappingURL=noDeleteExpressionRule.js.map