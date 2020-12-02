"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var typescript_1 = require("typescript");
var isNotNullOrUndefined_1 = require("./util/isNotNullOrUndefined");
var objectKeys_1 = require("./util/objectKeys");
var utils_2 = require("./util/utils");
var OPTION_GETTERS = 'getters';
var OPTION_METHODS = 'methods';
var OPTION_PARAMETER_PROPERTIES = 'parameter-properties';
var OPTION_PARAMETERS = 'parameters';
var OPTION_PROPERTIES = 'properties';
var OPTION_SETTERS = 'setters';
var OPTION_SAFELIST = 'safelist';
var OPTION_SCHEMA_VALUE = {
    oneOf: [
        {
            type: 'boolean'
        },
        {
            properties: {
                items: {
                    type: 'string'
                },
                type: 'array',
                uniqueItems: true
            },
            type: 'object'
        }
    ]
};
var DEFAULT_OPTIONS = (_a = {},
    _a[OPTION_GETTERS] = true,
    _a[OPTION_METHODS] = true,
    _a[OPTION_PARAMETER_PROPERTIES] = true,
    _a[OPTION_PARAMETERS] = true,
    _a[OPTION_PROPERTIES] = true,
    _a[OPTION_SETTERS] = true,
    _a);
var STYLE_GUIDE_LINK = 'https://angular.io/guide/styleguide#style-05-12';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var options = __assign(__assign({}, DEFAULT_OPTIONS), this.ruleArguments[0]);
        return this.applyWithFunction(sourceFile, walk, options);
    };
    Rule.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && this.areOptionsValid();
    };
    Rule.prototype.areOptionsValid = function () {
        var ruleArgumentsLength = this.ruleArguments.length;
        if (ruleArgumentsLength === 0)
            return true;
        if (ruleArgumentsLength > 1)
            return false;
        var ruleOptions = Rule.metadata.options;
        var ruleArgument = this.ruleArguments[0];
        var ruleArgumentsKeys = objectKeys_1.objectKeys(ruleArgument);
        var propertiesKeys = objectKeys_1.objectKeys(ruleOptions.properties);
        return (ruleArgumentsKeys.every(function (argumentKey) { return propertiesKeys.indexOf(argumentKey) !== -1; }) &&
            ruleArgumentsKeys
                .map(function (argumentKey) { return ruleArgument[argumentKey]; })
                .every(function (argumentValue) {
                if (typeof argumentValue === 'boolean')
                    return true;
                if (!argumentValue || typeof argumentValue !== 'object')
                    return false;
                var argumentValueKeys = objectKeys_1.objectKeys(argumentValue);
                if (argumentValueKeys.length !== 1)
                    return false;
                var safelist = argumentValue[argumentValueKeys[0]];
                return Array.isArray(safelist) && safelist.length > 0;
            }));
    };
    Rule.metadata = {
        description: 'Ensures that declarations are on the same line as its decorator(s).',
        descriptionDetails: "See more at " + STYLE_GUIDE_LINK + ".",
        optionExamples: [
            true,
            [true, (_b = {}, _b[OPTION_METHODS] = false, _b)],
            [
                true,
                (_c = {},
                    _c[OPTION_GETTERS] = (_d = {},
                        _d[OPTION_SAFELIST] = [utils_2.AngularInnerClassDecorators.Input],
                        _d),
                    _c[OPTION_METHODS] = true,
                    _c[OPTION_PARAMETER_PROPERTIES] = false,
                    _c[OPTION_PARAMETERS] = false,
                    _c[OPTION_PROPERTIES] = (_e = {},
                        _e[OPTION_SAFELIST] = [utils_2.AngularInnerClassDecorators.Output, 'MyCustomDecorator'],
                        _e),
                    _c[OPTION_SETTERS] = true,
                    _c)
            ]
        ],
        options: {
            additionalProperties: false,
            properties: (_f = {},
                _f[OPTION_GETTERS] = OPTION_SCHEMA_VALUE,
                _f[OPTION_METHODS] = OPTION_SCHEMA_VALUE,
                _f[OPTION_PARAMETER_PROPERTIES] = OPTION_SCHEMA_VALUE,
                _f[OPTION_PARAMETERS] = OPTION_SCHEMA_VALUE,
                _f[OPTION_PROPERTIES] = OPTION_SCHEMA_VALUE,
                _f[OPTION_SETTERS] = OPTION_SCHEMA_VALUE,
                _f),
            type: 'object'
        },
        optionsDescription: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      An optional object with optional `", "`, `", "`, `", "`, `", "`, `", "` and `", "` properties.\n\n      The properties can be specifed as booleans or as objects with the property `", "` containing the names of the decorators that should be ignored. Note that if a declaration is decorated with multiple decorators and at least one of them is present in `", "`, this declaration is ignored.\n\n      * `", "` - requires that ", " are on the same line as its decorator(s). Defaults to `true`.\n      * `", "` - requires that ", " are on the same line as its decorator(s). Defaults to `true`.\n      * `", "` - requires that parameter properties are on the same line as its decorator(s). Defaults to `true`.\n      * `", "` - requires that ", " are on the same line as its decorator(s). Defaults to `true`.\n      * `", "` - requires that ", " are on the same line as its decorator(s). Defaults to `true`.\n      * `", "` - requires that ", " are on the same line as its decorator(s). Defaults to `true`.\n    "], ["\n      An optional object with optional \\`", "\\`, \\`", "\\`, \\`", "\\`, \\`", "\\`, \\`", "\\` and \\`", "\\` properties.\n\n      The properties can be specifed as booleans or as objects with the property \\`", "\\` containing the names of the decorators that should be ignored. Note that if a declaration is decorated with multiple decorators and at least one of them is present in \\`", "\\`, this declaration is ignored.\n\n      * \\`", "\\` - requires that ", " are on the same line as its decorator(s). Defaults to \\`true\\`.\n      * \\`", "\\` - requires that ", " are on the same line as its decorator(s). Defaults to \\`true\\`.\n      * \\`", "\\` - requires that parameter properties are on the same line as its decorator(s). Defaults to \\`true\\`.\n      * \\`", "\\` - requires that ", " are on the same line as its decorator(s). Defaults to \\`true\\`.\n      * \\`", "\\` - requires that ", " are on the same line as its decorator(s). Defaults to \\`true\\`.\n      * \\`", "\\` - requires that ", " are on the same line as its decorator(s). Defaults to \\`true\\`.\n    "])), OPTION_GETTERS, OPTION_METHODS, OPTION_PARAMETER_PROPERTIES, OPTION_PARAMETERS, OPTION_PROPERTIES, OPTION_SETTERS, OPTION_SAFELIST, OPTION_SAFELIST, OPTION_GETTERS, OPTION_GETTERS, OPTION_METHODS, OPTION_METHODS, OPTION_PARAMETER_PROPERTIES, OPTION_PARAMETERS, OPTION_PARAMETERS, OPTION_PROPERTIES, OPTION_PROPERTIES, OPTION_SETTERS, OPTION_SETTERS),
        rationale: 'Placing the decorator on the same line usually makes for shorter code and still easily identifies the declarations.',
        ruleName: 'prefer-inline-decorator',
        type: 'style',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Place declarations on the same line as its decorator(s) (" + STYLE_GUIDE_LINK + ")";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var callbackHandler = function (walkContext, node) {
    var _a = walkContext, _b = _a.options, getters = _b.getters, methods = _b.methods, _c = OPTION_PARAMETER_PROPERTIES, parameterProperties = _b[_c], parameters = _b.parameters, properties = _b.properties, setters = _b.setters;
    if (getters && typescript_1.isGetAccessorDeclaration(node)) {
        validateGetAccessorDeclaration(walkContext, node);
    }
    else if (methods && typescript_1.isMethodDeclaration(node)) {
        validateMethodDeclaration(walkContext, node);
    }
    else if (parameters && typescript_1.isParameter(node) && !typescript_1.isParameterPropertyDeclaration(node, node.parent)) {
        validateParameterDeclaration(walkContext, node);
    }
    else if (parameterProperties && typescript_1.isParameterPropertyDeclaration(node, node.parent)) {
        validateParameterPropertyDeclaration(walkContext, node);
    }
    else if (properties && typescript_1.isPropertyDeclaration(node)) {
        validatePropertyDeclaration(walkContext, node);
    }
    else if (setters && typescript_1.isSetAccessorDeclaration(node)) {
        validateSetAccessorDeclaration(walkContext, node);
    }
};
var canIgnoreDecorator = function (walkContext, decoratorName, optionKey) {
    var _a = walkContext, _b = optionKey, optionValue = _a.options[_b];
    return optionValue && typeof optionValue === 'object' && optionValue.safelist.indexOf(decoratorName) !== -1;
};
var hasAnyIgnoredDecorator = function (walkContext, decorators, optionKey) {
    var nonIgnoredDecoratorNames = decorators
        .map(utils_2.getDecoratorName)
        .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
        .filter(function (decoratorName) { return !canIgnoreDecorator(walkContext, decoratorName, optionKey); });
    return decorators.length !== nonIgnoredDecoratorNames.length;
};
var validateDecorators = function (walkContext, decorators, declaration, optionKey) {
    if (decorators.length === 0 || hasAnyIgnoredDecorator(walkContext, decorators, optionKey))
        return;
    var firstDecorator = decorators[0];
    var firstDecoratorStartPos = firstDecorator.getStart();
    var declarationStartPos = declaration.name.getStart();
    if (utils_2.isSameLine(walkContext.sourceFile, firstDecoratorStartPos, declarationStartPos))
        return;
    walkContext.addFailureAt(firstDecoratorStartPos, declaration.getWidth(), Rule.FAILURE_STRING);
};
var validateDeclaration = function (walkContext, declaration, optionKey) {
    validateDecorators(walkContext, typescript_1.createNodeArray(declaration.decorators), declaration, optionKey);
};
var validateGetAccessorDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_GETTERS);
};
var validateMethodDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_METHODS);
};
var validateParameterDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_PARAMETERS);
};
var validateParameterPropertyDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_PARAMETER_PROPERTIES);
};
var validatePropertyDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_PROPERTIES);
};
var validateSetAccessorDeclaration = function (walkContext, node) {
    validateDeclaration(walkContext, node, OPTION_SETTERS);
};
var walk = function (walkContext) {
    var sourceFile = walkContext.sourceFile;
    var callback = function (node) {
        callbackHandler(walkContext, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};
var templateObject_1;
