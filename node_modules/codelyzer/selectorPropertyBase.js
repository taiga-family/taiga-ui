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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@angular/compiler");
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var typescript_1 = require("typescript");
var selectorValidator_1 = require("./util/selectorValidator");
var utils_2 = require("./util/utils");
exports.OPTION_STYLE_CAMEL_CASE = 'camelCase';
exports.OPTION_STYLE_KEBAB_CASE = 'kebab-case';
exports.OPTION_TYPE_ATTRIBUTE = 'attribute';
exports.OPTION_TYPE_ATTRS = 'attrs';
exports.OPTION_TYPE_ELEMENT = 'element';
var SELECTOR_TYPE_MAPPER = (_a = {},
    _a[exports.OPTION_TYPE_ATTRIBUTE] = exports.OPTION_TYPE_ATTRS,
    _a[exports.OPTION_TYPE_ELEMENT] = exports.OPTION_TYPE_ELEMENT,
    _a);
var SelectorPropertyBase = (function (_super) {
    __extends(SelectorPropertyBase, _super);
    function SelectorPropertyBase(options) {
        var _this = _super.call(this, options) || this;
        var ruleArguments = _this.getOptions().ruleArguments;
        _this.internalTypes = utils_1.arrayify(ruleArguments[0]);
        _this.prefixes = utils_1.arrayify(ruleArguments[1]);
        _this.style = ruleArguments[2];
        _this.types = utils_1.arrayify(ruleArguments[0] || [exports.OPTION_TYPE_ATTRIBUTE, exports.OPTION_TYPE_ELEMENT]).reduce(function (previousValue, currentValue) { return previousValue.concat(SELECTOR_TYPE_MAPPER[currentValue]); }, []);
        return _this;
    }
    SelectorPropertyBase.prototype.getValidSelectors = function (selectors) {
        var _this = this;
        return selectors.reduce(function (previousValue, currentValue) {
            var validSelectors = _this.types.reduce(function (accumulator, type) {
                var value = currentValue[type];
                return value ? accumulator.concat(value) : accumulator;
            }, []);
            return previousValue.concat(validSelectors);
        }, []);
    };
    SelectorPropertyBase.prototype.validatePrefixes = function (selectors) {
        var _this = this;
        return selectors.some(function (selector) { return _this.prefixes.some(function (prefix) { return selectorValidator_1.SelectorValidator.prefix(prefix, _this.style)(selector); }); });
    };
    SelectorPropertyBase.prototype.validateStyle = function (selectors) {
        var validator = this.style === exports.OPTION_STYLE_KEBAB_CASE ? selectorValidator_1.SelectorValidator.kebabCase : selectorValidator_1.SelectorValidator.camelCase;
        return selectors.some(function (selector) { return validator(selector); });
    };
    SelectorPropertyBase.prototype.validateTypes = function (selectors) {
        return selectors.length > 0;
    };
    SelectorPropertyBase.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this);
    };
    return SelectorPropertyBase;
}(rules_1.AbstractRule));
exports.SelectorPropertyBase = SelectorPropertyBase;
var validateClassDeclaration = function (context, node) {
    return typescript_1.createNodeArray(node.decorators).forEach(function (decorator) { return validateDecorator(context, decorator); });
};
var validateDecorator = function (context, decorator) {
    var selectorExpression = utils_2.getDecoratorPropertyInitializer(decorator, 'selector');
    var decoratorName = utils_2.getDecoratorName(decorator);
    if (!selectorExpression || !utils_2.isStringLiteralLike(selectorExpression) || context.options.handleType !== decoratorName) {
        return;
    }
    validateSelector(context, selectorExpression);
};
var validateSelector = function (context, expression) {
    var options = context.options;
    var selectors = compiler_1.CssSelector.parse(expression.text);
    var validSelectors = options.getValidSelectors(selectors);
    var failure;
    if (!options.validateTypes(validSelectors)) {
        failure = options.getTypeFailure(options.internalTypes);
    }
    else if (!options.validateStyle(validSelectors)) {
        failure = options.getStyleFailure(options.style);
    }
    else if (!options.validatePrefixes(validSelectors)) {
        failure = options.getPrefixFailure(options.prefixes);
    }
    if (failure) {
        context.addFailureAtNode(expression, failure);
    }
};
var walk = function (context) {
    var sourceFile = context.sourceFile;
    var callback = function (node) {
        if (typescript_1.isClassDeclaration(node))
            validateClassDeclaration(context, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};
