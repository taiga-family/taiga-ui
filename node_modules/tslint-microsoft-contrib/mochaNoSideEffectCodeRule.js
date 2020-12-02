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
var MochaUtils_1 = require("./utils/MochaUtils");
var Utils_1 = require("./utils/Utils");
var TypeGuard_1 = require("./utils/TypeGuard");
var FAILURE_STRING = 'Mocha test contains dangerous variable initialization. Move to before()/beforeEach(): ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {
            ignoreRegex: undefined
        };
        options.ruleArguments.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                if (opt.ignore !== undefined && (typeof opt.ignore === 'string' || opt.ignore instanceof RegExp)) {
                    parsed.ignoreRegex = new RegExp(opt.ignore);
                }
            }
        });
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'mocha-no-side-effect-code',
        type: 'maintainability',
        description: 'All test logic in a Mocha test case should be within Mocha lifecycle method.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Correctness'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var isInDescribe = false;
    function validateExpression(initializer, parentNode) {
        if (initializer === undefined) {
            return;
        }
        if (AstUtils_1.AstUtils.isConstant(initializer)) {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.FunctionExpression || initializer.kind === ts.SyntaxKind.ArrowFunction) {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.ArrayLiteralExpression) {
            var arrayLiteral = initializer;
            arrayLiteral.elements.forEach(function (expression) {
                validateExpression(expression, parentNode);
            });
            return;
        }
        if (initializer.kind === ts.SyntaxKind.FirstTemplateToken) {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.TypeAssertionExpression) {
            var assertion = initializer;
            validateExpression(assertion.expression, parentNode);
            return;
        }
        if (initializer.kind === ts.SyntaxKind.PropertyAccessExpression) {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.Identifier) {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.ObjectLiteralExpression) {
            var literal = initializer;
            literal.properties.forEach(function (element) {
                if (element.kind === ts.SyntaxKind.PropertyAssignment) {
                    var assignment = element;
                    validateExpression(assignment.initializer, parentNode);
                }
            });
            return;
        }
        if (/^this\.(retries|slow|timeout)\(.+\)$/.test(initializer.getText())) {
            return;
        }
        if (initializer.getText() === 'moment()') {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.CallExpression &&
            AstUtils_1.AstUtils.getFunctionTarget(initializer) === 'moment()') {
            return;
        }
        if (initializer.kind === ts.SyntaxKind.NewExpression) {
            if (AstUtils_1.AstUtils.getFunctionName(initializer) === 'Date') {
                return;
            }
        }
        if (initializer.kind === ts.SyntaxKind.CallExpression) {
            var callExp = initializer;
            if (callExp.expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
                var propExp = callExp.expression;
                if (propExp.expression.kind === ts.SyntaxKind.ArrayLiteralExpression) {
                    if (propExp.name.getText() === 'forEach') {
                        validateExpression(propExp.expression, parentNode);
                        callExp.arguments.forEach(function (arg) {
                            cb(arg);
                        });
                        return;
                    }
                }
            }
        }
        if (ctx.options.ignoreRegex !== undefined && ctx.options.ignoreRegex.test(initializer.getText())) {
            return;
        }
        if (AstUtils_1.AstUtils.isConstantExpression(initializer)) {
            return;
        }
        var message = FAILURE_STRING + Utils_1.Utils.trimTo(parentNode.getText(), 30);
        ctx.addFailureAt(parentNode.getStart(), parentNode.getWidth(), message);
    }
    function cb(node) {
        if (tsutils.isFunctionDeclaration(node) || tsutils.isClassDeclaration(node)) {
            return;
        }
        if (tsutils.isVariableDeclaration(node)) {
            if (isInDescribe === true && node.initializer !== undefined) {
                validateExpression(node.initializer, node);
            }
        }
        else if (tsutils.isCallExpression(node)) {
            if (MochaUtils_1.MochaUtils.isDescribe(node)) {
                var nestedSubscribe = isInDescribe;
                isInDescribe = true;
                ts.forEachChild(node, cb);
                if (nestedSubscribe === false) {
                    isInDescribe = false;
                }
            }
            else if (MochaUtils_1.MochaUtils.isLifecycleMethod(node)) {
                return;
            }
            else if (isInDescribe) {
                validateExpression(node, node);
            }
        }
        else {
            ts.forEachChild(node, cb);
        }
    }
    if (MochaUtils_1.MochaUtils.isMochaTest(ctx.sourceFile)) {
        ctx.sourceFile.statements.forEach(function (statement) {
            if (statement.kind === ts.SyntaxKind.VariableStatement) {
                var declarationList = statement.declarationList;
                declarationList.declarations.forEach(function (declaration) {
                    if (declaration.initializer !== undefined) {
                        validateExpression(declaration.initializer, declaration);
                    }
                });
            }
            if (MochaUtils_1.MochaUtils.isStatementDescribeCall(statement)) {
                var expression = statement.expression;
                var call = expression;
                cb(call);
            }
        });
    }
}
//# sourceMappingURL=mochaNoSideEffectCodeRule.js.map