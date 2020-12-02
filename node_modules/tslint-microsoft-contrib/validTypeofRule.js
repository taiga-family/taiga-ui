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
            console.warn('Warning: valid-typeof rule is deprecated. Replace your usage with the TSLint typeof-compare rule.');
            Rule.isWarningShown = true;
        }
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'valid-typeof',
        type: 'maintainability',
        description: 'Ensures that the results of typeof are compared against a valid string.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        recommendation: 'false',
        group: 'Deprecated'
    };
    Rule.FAILURE_STRING = 'Invalid comparison in typeof. Did you mean ';
    Rule.VALID_TERMS = ['undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol'];
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function getClosestTerm(term) {
        var closestMatch = 99999999;
        return Rule.VALID_TERMS.reduce(function (closestTerm, thisTerm) {
            var distance = levenshteinDistance(term, thisTerm);
            if (distance < closestMatch) {
                closestMatch = distance;
                closestTerm = thisTerm;
            }
            return closestTerm;
        }, '');
    }
    function levenshteinDistance(a, b) {
        if (a.length === 0) {
            return b.length;
        }
        if (b.length === 0) {
            return a.length;
        }
        var matrix = [];
        for (var i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (var i = 0; i <= a.length; i++) {
            matrix[0][i] = i;
        }
        for (var i = 1; i <= b.length; i++) {
            for (var j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    var substitutionValue = matrix[i - 1][j - 1] + 1;
                    var insertionValue = matrix[i][j - 1] + 1;
                    var deletionDistance = matrix[i - 1][j] + 1;
                    var minDistance = Math.min(substitutionValue, insertionValue, deletionDistance);
                    matrix[i][j] = minDistance;
                }
            }
        }
        return matrix[b.length][a.length];
    }
    function validateTypeOf(node) {
        if (Rule.VALID_TERMS.indexOf(node.text) === -1) {
            var start = node.getStart();
            var width = node.getWidth();
            ctx.addFailureAt(start, width, Rule.FAILURE_STRING + getClosestTerm(node.text) + '?');
        }
    }
    function cb(node) {
        if (tsutils.isBinaryExpression(node)) {
            if (node.left.kind === ts.SyntaxKind.TypeOfExpression && node.right.kind === ts.SyntaxKind.StringLiteral) {
                validateTypeOf(node.right);
            }
            else if (node.right.kind === ts.SyntaxKind.TypeOfExpression && node.left.kind === ts.SyntaxKind.StringLiteral) {
                validateTypeOf(node.left);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=validTypeofRule.js.map