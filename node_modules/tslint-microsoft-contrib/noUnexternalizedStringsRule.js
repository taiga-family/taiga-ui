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
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var messageIndex;
        var signatures = Object.create(null);
        var ignores = Object.create(null);
        if (options.ruleArguments instanceof Array) {
            var args = options.ruleArguments.length > 0 ? options.ruleArguments[0] : undefined;
            if (args) {
                if (Array.isArray(args.signatures)) {
                    args.signatures.forEach(function (signature) { return (signatures[signature] = true); });
                }
                if (Array.isArray(args.ignores)) {
                    args.ignores.forEach(function (ignore) { return (ignores[ignore] = true); });
                }
                if (args.messageIndex !== undefined) {
                    messageIndex = args.messageIndex;
                }
            }
        }
        return {
            signatures: signatures,
            messageIndex: messageIndex,
            ignores: ignores
        };
    };
    Rule.metadata = {
        ruleName: 'no-unexternalized-strings',
        type: 'maintainability',
        description: 'Ensures that double quoted strings are passed to a localize call to provide proper strings for different locales',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Configurable',
        recommendation: 'false'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var SINGLE_QUOTE = "'";
    var _a = ctx.options, signatures = _a.signatures, messageIndex = _a.messageIndex, ignores = _a.ignores;
    function checkStringLiteral(node) {
        var text = node.getText();
        if (text.length >= 2 && text[0] === SINGLE_QUOTE && text[text.length - 1] === SINGLE_QUOTE) {
            return;
        }
        var info = findDescribingParent(node);
        if (info && info.ignoreUsage) {
            return;
        }
        var callInfo = info ? info.callInfo : undefined;
        if (callInfo && ignores[callInfo.callExpression.expression.getText()]) {
            return;
        }
        if (!callInfo || callInfo.argIndex === -1 || !signatures[callInfo.callExpression.expression.getText()]) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), "Unexternalized string found: " + node.getText());
            return;
        }
        var messageArg = callInfo.argIndex === messageIndex ? callInfo.callExpression.arguments[messageIndex] : undefined;
        if (messageArg && messageArg !== node) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), "Message argument to '" + callInfo.callExpression.expression.getText() + "' must be a string literal.");
            return;
        }
    }
    function findDescribingParent(node) {
        while (node.parent) {
            var parent_1 = node.parent;
            if (tsutils.isCallExpression(parent_1)) {
                var callExpression = parent_1;
                return {
                    callInfo: {
                        callExpression: callExpression,
                        argIndex: callExpression.arguments.indexOf(node)
                    }
                };
            }
            if (tsutils.isImportEqualsDeclaration(parent_1) || tsutils.isImportDeclaration(parent_1) || tsutils.isExportDeclaration(parent_1)) {
                return { ignoreUsage: true };
            }
            if (tsutils.isVariableDeclaration(parent_1) ||
                tsutils.isFunctionDeclaration(parent_1) ||
                tsutils.isPropertyDeclaration(parent_1) ||
                tsutils.isMethodDeclaration(parent_1) ||
                tsutils.isVariableDeclarationList(parent_1) ||
                tsutils.isInterfaceDeclaration(parent_1) ||
                tsutils.isClassDeclaration(parent_1) ||
                tsutils.isEnumDeclaration(parent_1) ||
                tsutils.isModuleDeclaration(parent_1) ||
                tsutils.isTypeAliasDeclaration(parent_1) ||
                tsutils.isSourceFile(parent_1)) {
                return undefined;
            }
            node = parent_1;
        }
        return undefined;
    }
    function cb(node) {
        if (tsutils.isStringLiteral(node)) {
            checkStringLiteral(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnexternalizedStringsRule.js.map