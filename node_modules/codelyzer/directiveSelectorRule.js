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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("tslint/lib/utils");
var selectorPropertyBase_1 = require("./selectorPropertyBase");
var isNotNullOrUndefined_1 = require("./util/isNotNullOrUndefined");
var STYLE_GUIDE_PREFIX_LINK = 'https://angular.io/guide/styleguide#style-02-08';
var STYLE_GUIDE_STYLE_TYPE_LINK = 'https://angular.io/guide/styleguide#style-02-06';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleType = 'Directive';
        return _this;
    }
    Rule.prototype.getPrefixFailure = function (prefixes) {
        var prefixStr = prefixes.length === 1 ? '' : ' one of the prefixes:';
        return "The selector should be prefixed by" + prefixStr + " \"" + prefixes.join(', ') + "\" (" + STYLE_GUIDE_PREFIX_LINK + ")";
    };
    Rule.prototype.getStyleFailure = function (style) {
        var styleStr = style === selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE ? selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE + "d and include a dash" : selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE + "d";
        return "The selector should be " + styleStr + " (" + STYLE_GUIDE_STYLE_TYPE_LINK + ")";
    };
    Rule.prototype.getTypeFailure = function (types) {
        return "The selector should be used as an " + types.join(' or ') + " (" + STYLE_GUIDE_STYLE_TYPE_LINK + ")";
    };
    Rule.prototype.isEnabled = function () {
        var _a = Rule.metadata.options, _b = _a.items, enumTypes = _b[0].enum, enumStyles = _b[2].enum, maxLength = _a.maxLength, minLength = _a.minLength;
        var argumentsLength = this.ruleArguments.length;
        var typeArgument = utils_1.arrayify(this.ruleArguments[0]);
        var prefixArgument = utils_1.arrayify(this.ruleArguments[1]).filter(isNotNullOrUndefined_1.isNotNullOrUndefined);
        var styleArgument = this.ruleArguments[2];
        var argumentsLengthInRange = argumentsLength >= minLength && argumentsLength <= maxLength;
        var isTypeArgumentValid = typeArgument.length > 0 && typeArgument.every(function (argument) { return enumTypes.indexOf(argument) !== -1; });
        var isPrefixArgumentValid = prefixArgument.length > 0;
        var isStyleArgumentValid = enumStyles.indexOf(styleArgument) !== -1;
        return _super.prototype.isEnabled.call(this) && argumentsLengthInRange && isTypeArgumentValid && isPrefixArgumentValid && isStyleArgumentValid;
    };
    Rule.metadata = {
        description: 'Directive selectors should follow given naming rules.',
        descriptionDetails: "See more at " + STYLE_GUIDE_STYLE_TYPE_LINK + " and " + STYLE_GUIDE_PREFIX_LINK,
        optionExamples: [
            [true, selectorPropertyBase_1.OPTION_TYPE_ELEMENT, 'my-prefix', selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE],
            [true, selectorPropertyBase_1.OPTION_TYPE_ELEMENT, ['ng', 'ngx'], selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE],
            [true, selectorPropertyBase_1.OPTION_TYPE_ATTRIBUTE, 'myPrefix', selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE],
            [true, [selectorPropertyBase_1.OPTION_TYPE_ELEMENT, selectorPropertyBase_1.OPTION_TYPE_ATTRIBUTE], 'myPrefix', selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE]
        ],
        options: {
            items: [
                {
                    enum: [selectorPropertyBase_1.OPTION_TYPE_ATTRIBUTE, selectorPropertyBase_1.OPTION_TYPE_ELEMENT]
                },
                {
                    oneOf: [
                        {
                            items: {
                                type: 'string'
                            },
                            type: 'array'
                        },
                        {
                            type: 'string'
                        }
                    ]
                },
                {
                    enum: [selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE, selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE]
                }
            ],
            maxLength: 3,
            minLength: 3,
            type: 'array'
        },
        optionsDescription: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Options accept three obligatory items as an array:\n      1. `", "` or `", "` forces directives to be used as either elements, attributes, or both (not recommended)\n      2. A single prefix (string) or array of prefixes (strings) which have to be used in directive selectors.\n      3. `", "` or `", "` allows you to pick a case.\n    "], ["\n      Options accept three obligatory items as an array:\n      1. \\`", "\\` or \\`", "\\` forces directives to be used as either elements, attributes, or both (not recommended)\n      2. A single prefix (string) or array of prefixes (strings) which have to be used in directive selectors.\n      3. \\`", "\\` or \\`", "\\` allows you to pick a case.\n    "])), selectorPropertyBase_1.OPTION_TYPE_ELEMENT, selectorPropertyBase_1.OPTION_TYPE_ATTRIBUTE, selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE, selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE),
        rationale: utils_1.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      * Consistent conventions make it easy to quickly identify and reference assets of different types.\n      * Makes it easier to promote and share the directive in other apps.\n      * Directives are easy to identify in the DOM.\n      * Keeps the element names consistent with the specification for Custom Elements.\n      * It is easier to recognize that a symbol is a directive by looking at the template's HTML.\n    "], ["\n      * Consistent conventions make it easy to quickly identify and reference assets of different types.\n      * Makes it easier to promote and share the directive in other apps.\n      * Directives are easy to identify in the DOM.\n      * Keeps the element names consistent with the specification for Custom Elements.\n      * It is easier to recognize that a symbol is a directive by looking at the template's HTML.\n    "]))),
        ruleName: 'directive-selector',
        type: 'style',
        typescriptOnly: true
    };
    return Rule;
}(selectorPropertyBase_1.SelectorPropertyBase));
exports.Rule = Rule;
var templateObject_1, templateObject_2;
