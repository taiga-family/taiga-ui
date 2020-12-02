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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var AstUtils_1 = require("./utils/AstUtils");
var TypeGuard_1 = require("./utils/TypeGuard");
var RESTRICTED_NAMESPACES = new Set([undefined, 'window', 'self', 'global', 'globalThis']);
function inRestrictedNamespace(node) {
    var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
    return RESTRICTED_NAMESPACES.has(functionTarget);
}
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithProgram(sourceFile, undefined);
    };
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()), program ? program.getTypeChecker() : undefined);
    };
    Rule.prototype.parseOptions = function (options) {
        var allowSizeArgument = false;
        var allowTypeParameters = false;
        var ruleOptions = [];
        if (options.ruleArguments instanceof Array) {
            ruleOptions = options.ruleArguments;
        }
        if (options instanceof Array) {
            ruleOptions = options;
        }
        ruleOptions.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                allowSizeArgument = opt['allow-size-argument'] === true;
                allowTypeParameters = opt['allow-type-parameters'] === true;
            }
        });
        return {
            allowSizeArgument: allowSizeArgument,
            allowTypeParameters: allowTypeParameters
        };
    };
    Rule.metadata = {
        ruleName: 'prefer-array-literal',
        type: 'maintainability',
        description: 'Use array literal syntax when declaring or instantiating array types.',
        options: {
            type: 'object',
            properties: {
                'allow-size-argument': {
                    type: 'boolean'
                },
                'allow-type-parameters': {
                    type: 'boolean'
                }
            },
            additionalProperties: false
        },
        optionsDescription: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            Rule accepts object with next boolean options:\n\n            - \"allow-size-argument\" - allows calls to Array constructor with a single element (to create empty array of a given length).\n            - \"allow-type-parameters\" - allow Array type parameters.\n        "], ["\n            Rule accepts object with next boolean options:\n\n            - \"allow-size-argument\" - allows calls to Array constructor with a single element (to create empty array of a given length).\n            - \"allow-type-parameters\" - allow Array type parameters.\n        "]))),
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    Rule.GENERICS_FAILURE_STRING = 'Replace generic-typed Array with array literal.';
    Rule.getReplaceFailureString = function (type) { return "Replace Array " + type + " with an array literal."; };
    Rule.getSizeParamFailureString = function (type) {
        return "To create an array of a given length you should use non-negative integer. Otherwise replace Array " + type + " with an array literal.";
    };
    return Rule;
}(Lint.Rules.OptionallyTypedRule));
exports.Rule = Rule;
function walk(ctx, checker) {
    var _a = ctx.options, allowTypeParameters = _a.allowTypeParameters, allowSizeArgument = _a.allowSizeArgument;
    function checkExpression(type, node) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        if (functionName === 'Array' && inRestrictedNamespace(node)) {
            var callArguments = node.arguments;
            if (!allowSizeArgument || !callArguments || callArguments.length !== 1) {
                var failureString = Rule.getReplaceFailureString(type);
                ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
            }
            else {
                if (checker) {
                    try {
                        var argument = callArguments[0];
                        var argumentType = checker.getTypeAtLocation(argument);
                        if (!tsutils.isTypeAssignableToNumber(checker, argumentType) || argument.kind === ts.SyntaxKind.SpreadElement) {
                            var failureString = Rule.getSizeParamFailureString(type);
                            ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
                        }
                    }
                    catch (_a) {
                    }
                }
            }
        }
    }
    function cb(node) {
        if (tsutils.isTypeReferenceNode(node)) {
            if (!allowTypeParameters) {
                if (node.typeName.text === 'Array') {
                    var failureString = Rule.GENERICS_FAILURE_STRING;
                    ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
                }
            }
        }
        if (tsutils.isNewExpression(node)) {
            checkExpression('constructor', node);
        }
        if (tsutils.isCallExpression(node)) {
            checkExpression('function', node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
var templateObject_1;
//# sourceMappingURL=preferArrayLiteralRule.js.map