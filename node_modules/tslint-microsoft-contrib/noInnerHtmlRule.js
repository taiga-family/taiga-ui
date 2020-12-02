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
var FAILURE_INNER = 'Writing a string to the innerHTML property is insecure: ';
var FAILURE_OUTER = 'Writing a string to the outerHTML property is insecure: ';
var FAILURE_HTML_LIB = 'Using the html() function to write a string to innerHTML is insecure: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-inner-html',
        type: 'maintainability',
        description: 'Do not write values to innerHTML, outerHTML, or set HTML using the JQuery html() function.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '79, 85, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(options) {
    var value = /^(jquery|[$])/i;
    var args = options.ruleArguments;
    if (args && typeof args[1] === 'object' && args[1]['html-lib-matcher']) {
        value = new RegExp(args[1]['html-lib-matcher']);
    }
    else if (options instanceof Array && typeof options[1] === 'object' && options[1]['html-lib-matcher']) {
        value = new RegExp(options[1]['html-lib-matcher']);
    }
    return {
        htmlLibExpressionRegex: value
    };
}
function walk(ctx) {
    var htmlLibExpressionRegex = ctx.options.htmlLibExpressionRegex;
    function cb(node) {
        if (tsutils.isBinaryExpression(node)) {
            if (node.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
                if (tsutils.isPropertyAccessExpression(node.left)) {
                    var propAccess = node.left;
                    var propName = propAccess.name.text;
                    if (propName === 'innerHTML') {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_INNER + node.getText());
                    }
                    else if (propName === 'outerHTML') {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_OUTER + node.getText());
                    }
                }
            }
        }
        if (tsutils.isCallExpression(node)) {
            var functionName = AstUtils_1.AstUtils.getFunctionName(node);
            if (functionName === 'html') {
                if (node.arguments.length > 0) {
                    var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
                    if (functionTarget !== undefined && htmlLibExpressionRegex.test(functionTarget)) {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), FAILURE_HTML_LIB + node.getText());
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noInnerHtmlRule.js.map