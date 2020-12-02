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
var Scope_1 = require("./utils/Scope");
var Utils_1 = require("./utils/Utils");
var TypeGuard_1 = require("./utils/TypeGuard");
var FAILURE_ANONYMOUS_LISTENER = 'A new instance of an anonymous method is passed as a JSX attribute: ';
var FAILURE_DOUBLE_BIND = "A function is having its 'this' reference bound twice in the constructor: ";
var FAILURE_UNBOUND_LISTENER = "A class method is passed as a JSX attribute without having the 'this' reference bound: ";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
        }
        return [];
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {
            allowAnonymousListeners: false,
            allowedDecorators: new Set()
        };
        options.ruleArguments.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                parsed.allowAnonymousListeners = opt['allow-anonymous-listeners'] === true;
                if (opt['bind-decorators']) {
                    var allowedDecorators = opt['bind-decorators'];
                    if (!Array.isArray(allowedDecorators) || allowedDecorators.some(function (decorator) { return typeof decorator !== 'string'; })) {
                        throw new Error('one or more members of bind-decorators is invalid, string required.');
                    }
                    parsed.allowedDecorators = new Set(allowedDecorators);
                }
            }
        });
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-this-binding-issue',
        type: 'maintainability',
        description: 'When using React components you must be careful to correctly bind the `this` reference ' +
            'on any methods that you pass off to child components as callbacks.',
        options: {
            type: 'object',
            properties: {
                'allow-anonymous-listeners': {
                    type: 'boolean'
                },
                'bind-decorators': {
                    type: 'list',
                    listType: {
                        anyOf: {
                            type: 'string'
                        }
                    }
                }
            }
        },
        optionExamples: [true, [true, { 'bind-decorators': ['autobind'] }]],
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Opportunity for Excellence',
        group: 'Correctness'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var boundListeners = new Set();
    var declaredMethods = new Set();
    var scope;
    function isMethodBoundWithDecorators(node, allowedDecorators) {
        if (!(allowedDecorators.size > 0 && node.decorators && node.decorators.length > 0)) {
            return false;
        }
        return node.decorators.some(function (decorator) {
            if (decorator.kind !== ts.SyntaxKind.Decorator) {
                return false;
            }
            var source = node.getSourceFile();
            var text = decorator.expression.getText(source);
            return ctx.options.allowedDecorators.has(text);
        });
    }
    function isAttributeAnonymousFunction(attributeLikeElement) {
        if (ctx.options.allowAnonymousListeners) {
            return false;
        }
        if (attributeLikeElement.kind === ts.SyntaxKind.JsxAttribute) {
            var attribute = attributeLikeElement;
            if (attribute.initializer !== undefined && attribute.initializer.kind === ts.SyntaxKind.JsxExpression) {
                return isExpressionAnonymousFunction(attribute.initializer.expression);
            }
        }
        return false;
    }
    function isExpressionAnonymousFunction(expression) {
        if (expression === undefined) {
            return false;
        }
        if (expression.kind === ts.SyntaxKind.ArrowFunction || expression.kind === ts.SyntaxKind.FunctionExpression) {
            return true;
        }
        if (expression.kind === ts.SyntaxKind.CallExpression) {
            var callExpression = expression;
            var functionName = AstUtils_1.AstUtils.getFunctionName(callExpression);
            if (functionName === 'bind') {
                return true;
            }
        }
        if (expression.kind === ts.SyntaxKind.Identifier && scope !== undefined) {
            var symbolText = expression.getText();
            return scope.isFunctionSymbol(symbolText);
        }
        return false;
    }
    function isUnboundListener(attributeLikeElement) {
        if (attributeLikeElement.kind === ts.SyntaxKind.JsxAttribute) {
            var attribute = attributeLikeElement;
            if (attribute.initializer !== undefined && attribute.initializer.kind === ts.SyntaxKind.JsxExpression) {
                var jsxExpression = attribute.initializer;
                if (jsxExpression.expression !== undefined && jsxExpression.expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
                    var propAccess = jsxExpression.expression;
                    if (propAccess.expression.getText() === 'this') {
                        var listenerText = propAccess.getText();
                        if (declaredMethods.has(listenerText) && !boundListeners.has(listenerText)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    function getSelfBoundListeners(node) {
        var result = new Set();
        if (node.body !== undefined && node.body.statements !== undefined) {
            node.body.statements.forEach(function (statement) {
                if (statement.kind === ts.SyntaxKind.ExpressionStatement) {
                    var expressionStatement = statement;
                    var expression = expressionStatement.expression;
                    if (expression.kind === ts.SyntaxKind.BinaryExpression) {
                        var binaryExpression = expression;
                        var operator = binaryExpression.operatorToken;
                        if (operator.kind === ts.SyntaxKind.EqualsToken) {
                            if (binaryExpression.left.kind === ts.SyntaxKind.PropertyAccessExpression) {
                                var leftPropText = binaryExpression.left.getText();
                                if (binaryExpression.right.kind === ts.SyntaxKind.CallExpression) {
                                    var callExpression = binaryExpression.right;
                                    if (AstUtils_1.AstUtils.getFunctionName(callExpression) === 'bind' &&
                                        callExpression.arguments !== undefined &&
                                        callExpression.arguments.length === 1 &&
                                        callExpression.arguments[0].getText() === 'this') {
                                        var rightPropText = AstUtils_1.AstUtils.getFunctionTarget(callExpression);
                                        if (leftPropText === rightPropText) {
                                            if (result.has(rightPropText)) {
                                                var start = binaryExpression.getStart();
                                                var width = binaryExpression.getWidth();
                                                var msg = FAILURE_DOUBLE_BIND + binaryExpression.getText();
                                                ctx.addFailureAt(start, width, msg);
                                            }
                                            result.add(rightPropText);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
        return result;
    }
    function visitJsxOpeningElement(node) {
        node.attributes.properties.forEach(function (attributeLikeElement) {
            if (isUnboundListener(attributeLikeElement)) {
                var attribute = attributeLikeElement;
                var jsxExpression = attribute.initializer;
                if (jsxExpression === undefined || jsxExpression.kind === ts.SyntaxKind.StringLiteral) {
                    return;
                }
                var propAccess = jsxExpression.expression;
                var listenerText = propAccess.getText();
                if (declaredMethods.has(listenerText) && !boundListeners.has(listenerText)) {
                    var start = propAccess.getStart();
                    var widget = propAccess.getWidth();
                    var message = FAILURE_UNBOUND_LISTENER + listenerText;
                    ctx.addFailureAt(start, widget, message);
                }
            }
            else if (isAttributeAnonymousFunction(attributeLikeElement)) {
                var attribute = attributeLikeElement;
                var jsxExpression = attribute.initializer;
                if (jsxExpression === undefined || jsxExpression.kind === ts.SyntaxKind.StringLiteral) {
                    return;
                }
                var expression = jsxExpression.expression;
                if (expression === undefined) {
                    return;
                }
                var start = expression.getStart();
                var widget = expression.getWidth();
                var message = FAILURE_ANONYMOUS_LISTENER + Utils_1.Utils.trimTo(expression.getText(), 30);
                ctx.addFailureAt(start, widget, message);
            }
        });
    }
    function visitClassMember(node) {
        if (tsutils.isConstructorDeclaration(node)) {
            boundListeners = getSelfBoundListeners(node);
        }
        else if (tsutils.isMethodDeclaration(node)) {
            if (isMethodBoundWithDecorators(node, ctx.options.allowedDecorators)) {
                boundListeners = boundListeners.add('this.' + node.name.getText());
            }
        }
    }
    function cb(node) {
        if (tsutils.isMethodDeclaration(node)) {
            scope = new Scope_1.Scope(undefined);
            ts.forEachChild(node, cb);
            scope = undefined;
            return;
        }
        if (tsutils.isArrowFunction(node)) {
            if (scope !== undefined) {
                scope = new Scope_1.Scope(scope);
            }
            ts.forEachChild(node, cb);
            if (scope !== undefined) {
                scope = scope.parent;
            }
            return;
        }
        if (tsutils.isFunctionExpression(node)) {
            if (scope !== undefined) {
                scope = new Scope_1.Scope(scope);
            }
            ts.forEachChild(node, cb);
            if (scope !== undefined) {
                scope = scope.parent;
            }
            return;
        }
        if (tsutils.isClassDeclaration(node)) {
            boundListeners = new Set();
            declaredMethods = new Set();
            AstUtils_1.AstUtils.getDeclaredMethodNames(node).forEach(function (methodName) {
                declaredMethods.add('this.' + methodName);
            });
            node.members.forEach(visitClassMember);
        }
        else if (tsutils.isJsxElement(node)) {
            visitJsxOpeningElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            visitJsxOpeningElement(node);
        }
        else if (tsutils.isVariableDeclaration(node)) {
            if (scope !== undefined) {
                if (node.name.kind === ts.SyntaxKind.Identifier) {
                    var variableName = node.name.text;
                    if (isExpressionAnonymousFunction(node.initializer)) {
                        scope.addFunctionSymbol(variableName);
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactThisBindingIssueRule.js.map