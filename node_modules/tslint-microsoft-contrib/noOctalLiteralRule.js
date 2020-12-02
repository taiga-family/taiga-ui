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
        ruleName: 'no-octal-literal',
        type: 'maintainability',
        description: 'Do not use octal literals or escaped octal sequences',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security'
    };
    Rule.FAILURE_STRING = 'Octal literals should not be used: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isStringLiteral(node) || node.kind === ts.SyntaxKind.FirstTemplateToken) {
            failOnOctalString(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function failOnOctalString(node) {
        var match = /("|'|`)[^\\]*(\\+-?[0-7]{1,3}(?![0-9]))(?:.|\n|\t|\u2028|\u2029)*(?:\1)/g.exec(node.getText());
        if (match) {
            var octalValue = match[2];
            var backslashCount = octalValue.lastIndexOf('\\') + 1;
            if (backslashCount % 2 === 1) {
                octalValue = octalValue.substr(backslashCount - 1);
                var startOfMatch = node.getStart() + node.getText().indexOf(octalValue);
                var width = octalValue.length;
                ctx.addFailureAt(startOfMatch, width, Rule.FAILURE_STRING + octalValue);
            }
        }
    }
}
//# sourceMappingURL=noOctalLiteralRule.js.map