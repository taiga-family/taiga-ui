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
var TypeGuard_1 = require("./utils/TypeGuard");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-constant-condition',
        type: 'maintainability',
        description: 'Do not use constant expressions in conditions.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '398, 570, 571, 670'
    };
    Rule.FAILURE_STRING = 'Found constant conditional: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(options) {
    var value = true;
    var keyName = 'checkLoops';
    (options.ruleArguments || []).forEach(function (opt) {
        if (TypeGuard_1.isObject(opt)) {
            if (opt[keyName] === false || opt[keyName] === 'false') {
                value = false;
            }
        }
    });
    return {
        checkLoops: value
    };
}
function walk(ctx) {
    var checkLoops = ctx.options.checkLoops;
    function cb(node) {
        if (checkLoops && (tsutils.isWhileStatement(node) || tsutils.isDoStatement(node))) {
            if (AstUtils_1.AstUtils.isConstantExpression(node.expression)) {
                var message = Rule.FAILURE_STRING + 'while (' + node.expression.getText() + ')';
                ctx.addFailureAt(node.getStart(), node.getWidth(), message);
            }
        }
        if (tsutils.isIfStatement(node)) {
            if (AstUtils_1.AstUtils.isConstantExpression(node.expression)) {
                var message = Rule.FAILURE_STRING + 'if (' + node.expression.getText() + ')';
                ctx.addFailureAt(node.getStart(), node.getWidth(), message);
            }
        }
        if (tsutils.isConditionalExpression(node)) {
            if (AstUtils_1.AstUtils.isConstantExpression(node.condition)) {
                var message = Rule.FAILURE_STRING + node.condition.getText() + ' ?';
                ctx.addFailureAt(node.getStart(), node.getWidth(), message);
            }
        }
        if (tsutils.isForStatement(node)) {
            if (checkLoops && node.condition) {
                if (AstUtils_1.AstUtils.isConstantExpression(node.condition)) {
                    var message = Rule.FAILURE_STRING + ';' + node.condition.getText() + ';';
                    ctx.addFailureAt(node.getStart(), node.getWidth(), message);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noConstantConditionRule.js.map