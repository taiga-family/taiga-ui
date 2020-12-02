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
var METHOD_REGEX = 'method-regex';
var PRIVATE_METHOD_REGEX = 'private-method-regex';
var PROTECTED_METHOD_REGEX = 'protected-method-regex';
var STATIC_METHOD_REGEX = 'static-method-regex';
var FUNCTION_REGEX = 'function-regex';
var VALIDATE_PRIVATE_STATICS_AS_PRIVATE = 'validate-private-statics-as-private';
var VALIDATE_PRIVATE_STATICS_AS_STATIC = 'validate-private-statics-as-static';
var VALIDATE_PRIVATE_STATICS_AS_EITHER = 'validate-private-statics-as-either';
var VALID_ARGS = [VALIDATE_PRIVATE_STATICS_AS_PRIVATE, VALIDATE_PRIVATE_STATICS_AS_STATIC, VALIDATE_PRIVATE_STATICS_AS_EITHER];
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var _this = this;
        var methodRegex = /^[a-z][\w\d]+$/;
        var privateMethodRegex = methodRegex;
        var protectedMethodRegex = privateMethodRegex;
        var staticMethodRegex = /^[A-Z_\d]+$/;
        var functionRegex = /^[a-z][\w\d]+$/;
        var validateStatics = VALIDATE_PRIVATE_STATICS_AS_PRIVATE;
        var ruleArguments = options.ruleArguments;
        if (ruleArguments.length > 1) {
            var staticsValidateOption = ruleArguments[1];
            if (VALID_ARGS.indexOf(staticsValidateOption) > -1) {
                validateStatics = staticsValidateOption;
            }
        }
        ruleArguments.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                methodRegex = _this.getOptionOrDefault(opt, METHOD_REGEX, methodRegex);
                privateMethodRegex = _this.getOptionOrDefault(opt, PRIVATE_METHOD_REGEX, privateMethodRegex);
                protectedMethodRegex = _this.getOptionOrDefault(opt, PROTECTED_METHOD_REGEX, protectedMethodRegex);
                staticMethodRegex = _this.getOptionOrDefault(opt, STATIC_METHOD_REGEX, staticMethodRegex);
                functionRegex = _this.getOptionOrDefault(opt, FUNCTION_REGEX, functionRegex);
            }
        });
        return {
            validateStatics: validateStatics,
            methodRegex: methodRegex,
            privateMethodRegex: privateMethodRegex,
            protectedMethodRegex: protectedMethodRegex,
            staticMethodRegex: staticMethodRegex,
            functionRegex: functionRegex
        };
    };
    Rule.prototype.getOptionOrDefault = function (option, key, defaultValue) {
        try {
            var value = option[key];
            if (value !== undefined && (typeof value === 'string' || value instanceof RegExp)) {
                return new RegExp(value);
            }
        }
        catch (e) {
            console.error('Could not read ' + key + ' within function-name configuration');
        }
        return defaultValue;
    };
    Rule.metadata = {
        ruleName: 'function-name',
        type: 'maintainability',
        description: 'Applies a naming convention to function names and method names',
        optionsDescription: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            Function styles should be consistent throughout the code.\n            Users may want functions with multiple descriptors to be validated a certain way.\n            An optional argument specifies validation for private static methods:\n            * `", "` enforces validation as private.\n            * `", "` enforces validation as static.\n            * `", "` enforces validation as either.\n            "], ["\n            Function styles should be consistent throughout the code.\n            Users may want functions with multiple descriptors to be validated a certain way.\n            An optional argument specifies validation for private static methods:\n            * \\`", "\\` enforces validation as private.\n            * \\`", "\\` enforces validation as static.\n            * \\`", "\\` enforces validation as either.\n            "])), VALIDATE_PRIVATE_STATICS_AS_PRIVATE, VALIDATE_PRIVATE_STATICS_AS_STATIC, VALIDATE_PRIVATE_STATICS_AS_EITHER),
        options: {
            type: 'array',
            items: [
                {
                    type: 'string',
                    enum: [VALIDATE_PRIVATE_STATICS_AS_PRIVATE, VALIDATE_PRIVATE_STATICS_AS_STATIC, VALIDATE_PRIVATE_STATICS_AS_EITHER]
                }
            ],
            minLength: 0,
            maxLength: 2
        },
        optionExamples: [
            [true, VALIDATE_PRIVATE_STATICS_AS_EITHER],
            [true, VALIDATE_PRIVATE_STATICS_AS_PRIVATE],
            [true, VALIDATE_PRIVATE_STATICS_AS_STATIC],
            [true]
        ],
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var _a = ctx.options, validateStatics = _a.validateStatics, methodRegex = _a.methodRegex, privateMethodRegex = _a.privateMethodRegex, protectedMethodRegex = _a.protectedMethodRegex, staticMethodRegex = _a.staticMethodRegex, functionRegex = _a.functionRegex;
    function cb(node) {
        if (tsutils.isMethodDeclaration(node)) {
            var name_1 = node.name.getText();
            if (AstUtils_1.AstUtils.hasComputedName(node)) {
            }
            else if (AstUtils_1.AstUtils.isPrivate(node)) {
                if (!privateMethodRegex.test(name_1) && validateStatics === VALIDATE_PRIVATE_STATICS_AS_PRIVATE) {
                    ctx.addFailureAt(node.name.getStart(), node.name.getWidth(), "Private method name does not match " + privateMethodRegex + ": " + name_1);
                }
            }
            else if (AstUtils_1.AstUtils.isProtected(node)) {
                if (!protectedMethodRegex.test(name_1) && validateStatics === VALIDATE_PRIVATE_STATICS_AS_PRIVATE) {
                    ctx.addFailureAt(node.name.getStart(), node.name.getWidth(), "Protected method name does not match " + protectedMethodRegex + ": " + name_1);
                }
            }
            else if (AstUtils_1.AstUtils.isStatic(node)) {
                if (!staticMethodRegex.test(name_1)) {
                    ctx.addFailureAt(node.name.getStart(), node.name.getWidth(), "Static method name does not match " + staticMethodRegex + ": " + name_1);
                }
            }
            else if (!methodRegex.test(name_1)) {
                ctx.addFailureAt(node.name.getStart(), node.name.getWidth(), "Method name does not match " + methodRegex + ": " + name_1);
            }
        }
        if (tsutils.isFunctionDeclaration(node)) {
            if (node.name !== undefined) {
                var name_2 = node.name.text;
                if (!functionRegex.test(name_2)) {
                    ctx.addFailureAt(node.name.getStart(), node.name.getWidth(), "Function name does not match " + functionRegex + ": " + name_2);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
var templateObject_1;
//# sourceMappingURL=functionNameRule.js.map