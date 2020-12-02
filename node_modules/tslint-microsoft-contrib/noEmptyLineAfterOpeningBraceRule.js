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
var tsutils_1 = require("tsutils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-empty-line-after-opening-brace',
        type: 'maintainability',
        description: 'Avoid an empty line after an opening brace',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Whitespace',
        recommendation: 'false',
        commonWeaknessEnumeration: '710'
    };
    Rule.FAILURE_STRING = 'Opening brace cannot be followed by empty line';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        var scanner = ts.createScanner(1, false, 0, ctx.sourceFile.text);
        scanner.setTextPos(0);
        var previous;
        var previousPrevious;
        tsutils_1.forEachTokenWithTrivia(node, function (_a, tokenSyntaxKind, range) {
            if (previousPrevious === ts.SyntaxKind.OpenBraceToken &&
                previous === ts.SyntaxKind.NewLineTrivia &&
                tokenSyntaxKind === ts.SyntaxKind.NewLineTrivia) {
                ctx.addFailureAt(range.pos, 1, Rule.FAILURE_STRING);
            }
            if (tokenSyntaxKind !== ts.SyntaxKind.WhitespaceTrivia) {
                previousPrevious = previous;
                previous = tokenSyntaxKind;
            }
        });
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noEmptyLineAfterOpeningBraceRule.js.map