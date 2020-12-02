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
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-http-string',
        type: 'maintainability',
        description: "Do not use strings that start with 'http:'. URL strings should start with 'https:'. ",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        recommendation: '[true, "http://www.example.com/?.*", "http://localhost:?.*"]',
        commonWeaknessEnumeration: '319'
    };
    Rule.FAILURE_STRING = 'Forbidden http url in string: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(options) {
    var value;
    if (options.ruleArguments instanceof Array) {
        value = options.ruleArguments;
    }
    else if (options instanceof Array) {
        value = options;
    }
    return {
        allExceptions: value
    };
}
function walk(ctx) {
    function cb(node) {
        if (tsutils.isTextualLiteral(node)) {
            visitLiteralExpression(node);
        }
        else if (node.kind === ts.SyntaxKind.TemplateHead) {
            visitLiteralExpression(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function visitLiteralExpression(node) {
        var stringText = node.text;
        if (stringText.indexOf('http:') === 0) {
            if (!isSuppressed(stringText)) {
                var failureString = Rule.FAILURE_STRING + "'" + stringText + "'";
                ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
            }
        }
    }
    function isSuppressed(stringText) {
        var allExceptions = ctx.options.allExceptions;
        return Utils_1.Utils.exists(allExceptions, function (exception) {
            return new RegExp(exception).test(stringText);
        });
    }
}
//# sourceMappingURL=noHttpStringRule.js.map