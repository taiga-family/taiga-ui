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
var OPTION_ALLOW_FOR_LOOPS = 'allow-for-loops';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (Rule.isWarningShown === false) {
            console.warn('Warning: no-increment-decrement rule is deprecated. Replace your usage with the TSLint increment-decrement rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        return {
            allowForLoops: options.ruleArguments.indexOf(OPTION_ALLOW_FOR_LOOPS) > -1
        };
    };
    Rule.metadata = {
        ruleName: 'no-increment-decrement',
        type: 'maintainability',
        description: 'Avoid use of increment and decrement operators particularly as part of complicated expressions',
        options: {
            type: 'array',
            items: {
                type: 'string',
                enum: [OPTION_ALLOW_FOR_LOOPS]
            },
            minLength: 0,
            maxLength: 1
        },
        optionsDescription: "One argument may be optionally provided: \n\n' +\n        '* `" + OPTION_ALLOW_FOR_LOOPS + "` allows increments and decrement operators to be used in for loop headers.",
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        recommendation: 'false',
        group: 'Correctness',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateUnaryExpression(node) {
        if (node.operator === ts.SyntaxKind.PlusPlusToken) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), 'Forbidden ++ operator');
        }
        else if (node.operator === ts.SyntaxKind.MinusMinusToken) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), 'Forbidden -- operator');
        }
    }
    function cb(node) {
        if (tsutils.isForStatement(node)) {
            if (ctx.options.allowForLoops) {
                cb(node.statement);
                if (node.initializer) {
                    cb(node.initializer);
                }
                if (node.condition) {
                    cb(node.condition);
                }
            }
            else {
                ts.forEachChild(node, cb);
            }
            return;
        }
        if (tsutils.isPostfixUnaryExpression(node)) {
            validateUnaryExpression(node);
        }
        else if (tsutils.isPrefixUnaryExpression(node)) {
            validateUnaryExpression(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noIncrementDecrementRule.js.map