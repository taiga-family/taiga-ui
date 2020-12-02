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
var FAILURE_STATIC_FOUND = 'Static invocation of underscore function found. Prefer instance version instead: ';
var FAILURE_INSTANCE_FOUND = 'Underscore instance wrapping of variable found. Prefer underscore static functions instead: ';
var FUNCTION_NAMES = [
    'each',
    'forEach',
    'map',
    'collect',
    'reduce',
    'inject',
    'foldl',
    'reduceRight',
    'foldr',
    'find',
    'detect',
    'filter',
    'select',
    'where',
    'findWhere',
    'reject',
    'every',
    'all',
    'some',
    'any',
    'contains',
    'include',
    'invoke',
    'pluck',
    'max',
    'min',
    'sortBy',
    'groupBy',
    'indexBy',
    'countBy',
    'shuffle',
    'sample',
    'toArray',
    'size',
    'partition',
    'first',
    'head',
    'take',
    'initial',
    'last',
    'rest',
    'tail',
    'drop',
    'compact',
    'flatten',
    'without',
    'union',
    'intersection',
    'difference',
    'uniq',
    'unique',
    'object',
    'zip',
    'unzip',
    'indexOf',
    'findIndex',
    'lastIndexOf',
    'findLastIndex',
    'sortedIndex',
    'range'
];
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {
            style: 'instance'
        };
        options.ruleArguments.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                if (opt.style === 'static') {
                    parsed.style = 'static';
                }
            }
        });
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'underscore-consistent-invocation',
        type: 'maintainability',
        description: 'Enforce a consistent usage of the _ functions',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function isStaticUnderscoreInstanceInvocation(node) {
        if (node.expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
            var propExpression = node.expression;
            if (propExpression.expression.kind === ts.SyntaxKind.CallExpression) {
                var call = propExpression.expression;
                var target = AstUtils_1.AstUtils.getFunctionTarget(call);
                var functionName = AstUtils_1.AstUtils.getFunctionName(call);
                if (target === undefined && functionName === '_' && call.arguments.length === 1) {
                    var underscoreFunctionName = AstUtils_1.AstUtils.getFunctionName(node);
                    return FUNCTION_NAMES.indexOf(underscoreFunctionName) > -1;
                }
            }
        }
        return false;
    }
    function isStaticUnderscoreInvocation(node) {
        var target = AstUtils_1.AstUtils.getFunctionTarget(node);
        if (target !== '_') {
            return false;
        }
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        return FUNCTION_NAMES.indexOf(functionName) > -1;
    }
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            var functionName = AstUtils_1.AstUtils.getFunctionName(node);
            if (ctx.options.style === 'instance' && isStaticUnderscoreInvocation(node)) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STATIC_FOUND + '_.' + functionName);
            }
            if (ctx.options.style === 'static' && isStaticUnderscoreInstanceInvocation(node)) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_INSTANCE_FOUND + node.expression.getText());
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=underscoreConsistentInvocationRule.js.map