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
var Utils_1 = require("./utils/Utils");
var TypeGuard_1 = require("./utils/TypeGuard");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var maxBodyLength;
        var maxFuncBodyLength;
        var maxFuncExpressionBodyLength;
        var maxArrowBodyLength;
        var maxMethodBodyLength;
        var maxCtorBodyLength;
        var ignoreComments;
        var ignoreParametersToFunctionRegex;
        if (options.ruleArguments instanceof Array) {
            options.ruleArguments.forEach(function (opt) {
                if (typeof opt === 'number') {
                    maxBodyLength = opt;
                    return;
                }
                if (TypeGuard_1.isObject(opt)) {
                    maxFuncBodyLength = opt[FUNC_BODY_LENGTH];
                    maxFuncExpressionBodyLength = opt[FUNC_EXPRESSION_BODY_LENGTH];
                    maxArrowBodyLength = opt[ARROW_BODY_LENGTH];
                    maxMethodBodyLength = opt[METHOD_BODY_LENGTH];
                    maxCtorBodyLength = opt[CTOR_BODY_LENGTH];
                    ignoreComments = !!opt[IGNORE_COMMENTS];
                    var regex = opt[IGNORE_PARAMETERS_TO_FUNCTION];
                    if (regex) {
                        ignoreParametersToFunctionRegex = new RegExp(regex);
                    }
                }
            });
        }
        return {
            maxBodyLength: maxBodyLength,
            maxFuncBodyLength: maxFuncBodyLength,
            maxFuncExpressionBodyLength: maxFuncExpressionBodyLength,
            maxArrowBodyLength: maxArrowBodyLength,
            maxMethodBodyLength: maxMethodBodyLength,
            maxCtorBodyLength: maxCtorBodyLength,
            ignoreComments: ignoreComments,
            ignoreParametersToFunctionRegex: ignoreParametersToFunctionRegex
        };
    };
    Rule.metadata = {
        ruleName: 'max-func-body-length',
        type: 'maintainability',
        description: 'Avoid long functions.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        recommendation: '[true, 100, { "ignore-parameters-to-function-regex": "^describe$" }]',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var FUNC_BODY_LENGTH = 'func-body-length';
var FUNC_EXPRESSION_BODY_LENGTH = 'func-express-body-length';
var ARROW_BODY_LENGTH = 'arrow-body-length';
var METHOD_BODY_LENGTH = 'method-body-length';
var CTOR_BODY_LENGTH = 'ctor-body-length';
var IGNORE_PARAMETERS_TO_FUNCTION = 'ignore-parameters-to-function-regex';
var IGNORE_COMMENTS = 'ignore-comments';
function walk(ctx) {
    var _a = ctx.options, maxBodyLength = _a.maxBodyLength, maxFuncBodyLength = _a.maxFuncBodyLength, maxFuncExpressionBodyLength = _a.maxFuncExpressionBodyLength, maxArrowBodyLength = _a.maxArrowBodyLength, maxMethodBodyLength = _a.maxMethodBodyLength, maxCtorBodyLength = _a.maxCtorBodyLength, ignoreComments = _a.ignoreComments, ignoreParametersToFunctionRegex = _a.ignoreParametersToFunctionRegex;
    var ignoreNodes = [];
    var currentClassName;
    function calcBodyLength(node) {
        if (node.body === undefined) {
            return 0;
        }
        var sourceFile = ctx.sourceFile;
        var startLine = sourceFile.getLineAndCharacterOfPosition(node.body.pos).line;
        var endLine = sourceFile.getLineAndCharacterOfPosition(node.body.end).line;
        return endLine - startLine + 1;
    }
    function calcBodyCommentLength(node) {
        var commentLineCount = 0;
        commentLineCount += node
            .getFullText()
            .split(/\n/)
            .filter(function (line) {
            return line.trim().match(/^\/\//) !== null;
        }).length;
        tsutils.forEachTokenWithTrivia(node, function (text, tokenSyntaxKind) {
            if (tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia) {
                commentLineCount += text.split(/\n/).length;
            }
        });
        return commentLineCount;
    }
    function isFunctionTooLong(nodeKind, length) {
        return length > getMaxLength(nodeKind);
    }
    function getMaxLength(nodeKind) {
        var result;
        switch (nodeKind) {
            case ts.SyntaxKind.FunctionDeclaration:
                result = maxFuncBodyLength;
                break;
            case ts.SyntaxKind.FunctionExpression:
                result = maxFuncExpressionBodyLength;
                break;
            case ts.SyntaxKind.MethodDeclaration:
                result = maxMethodBodyLength;
                break;
            case ts.SyntaxKind.ArrowFunction:
                result = maxArrowBodyLength;
                break;
            case ts.SyntaxKind.Constructor:
                result = maxCtorBodyLength;
                break;
            default:
                throw new Error("Unsupported node kind: " + nodeKind);
        }
        return result || maxBodyLength;
    }
    function addFuncBodyTooLongFailure(node, length) {
        ctx.addFailureAt(node.getStart(), node.getWidth(), formatFailureText(node, length));
    }
    function formatFailureText(node, length) {
        var funcTypeText = getFuncTypeText(node.kind);
        var maxLength = getMaxLength(node.kind);
        var placeText = formatPlaceText(node);
        return "Max " + funcTypeText + " body length exceeded" + placeText + " - max: " + maxLength + ", actual: " + length;
    }
    function formatPlaceText(node) {
        var funcTypeText = getFuncTypeText(node.kind);
        if (ts.isMethodDeclaration(node) || ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node)) {
            return " in " + funcTypeText + " " + (node.name ? node.name.getText() : '') + "()";
        }
        if (node.kind === ts.SyntaxKind.Constructor) {
            return " in class " + currentClassName;
        }
        return '';
    }
    function getFuncTypeText(nodeKind) {
        switch (nodeKind) {
            case ts.SyntaxKind.FunctionDeclaration:
                return 'function';
            case ts.SyntaxKind.FunctionExpression:
                return 'function expression';
            case ts.SyntaxKind.MethodDeclaration:
                return 'method';
            case ts.SyntaxKind.ArrowFunction:
                return 'arrow function';
            case ts.SyntaxKind.Constructor:
                return 'constructor';
            default:
                throw new Error("Unsupported node kind: " + nodeKind);
        }
    }
    function validate(node) {
        if (!Utils_1.Utils.contains(ignoreNodes, node)) {
            var bodyLength = calcBodyLength(node);
            if (ignoreComments) {
                bodyLength -= calcBodyCommentLength(node);
            }
            if (isFunctionTooLong(node.kind, bodyLength)) {
                addFuncBodyTooLongFailure(node, bodyLength);
            }
        }
    }
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            var functionName = AstUtils_1.AstUtils.getFunctionName(node);
            if (ignoreParametersToFunctionRegex && ignoreParametersToFunctionRegex.test(functionName)) {
                node.arguments.forEach(function (argument) {
                    ignoreNodes.push(argument);
                });
            }
        }
        if (tsutils.isArrowFunction(node) ||
            tsutils.isMethodDeclaration(node) ||
            tsutils.isFunctionDeclaration(node) ||
            tsutils.isFunctionExpression(node) ||
            tsutils.isConstructorDeclaration(node)) {
            validate(node);
        }
        if (tsutils.isClassDeclaration(node)) {
            currentClassName = (node.name && node.name.text) || 'default';
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=maxFuncBodyLengthRule.js.map