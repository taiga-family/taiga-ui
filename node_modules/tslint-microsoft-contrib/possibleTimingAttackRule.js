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
var Utils_1 = require("./utils/Utils");
var FAILURE_STRING = 'Possible timing attack detected. Direct comparison found: ';
var SENSITIVE_VAR_NAME = /^(password|secret|api|apiKey|token|auth|pass|hash)$/im;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'possible-timing-attack',
        type: 'functionality',
        description: 'Avoid timing attacks by not making direct comaprisons to sensitive data',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Security',
        commonWeaknessEnumeration: '710,749'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isBinaryExpression(node)) {
            if (node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsToken ||
                node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken ||
                node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsToken ||
                node.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken) {
                if ((SENSITIVE_VAR_NAME.test(node.left.getText()) || SENSITIVE_VAR_NAME.test(node.right.getText())) &&
                    node.left.getText() !== 'null' &&
                    node.right.getText() !== 'null' &&
                    node.left.getText() !== 'undefined' &&
                    node.right.getText() !== 'undefined') {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_STRING + Utils_1.Utils.trimTo(node.getText(), 20));
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=possibleTimingAttackRule.js.map