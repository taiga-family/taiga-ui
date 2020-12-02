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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var DEFAULT_ANIMATIONS_LIMIT = 15;
var DEFAULT_STYLES_LIMIT = 3;
var DEFAULT_TEMPLATE_LIMIT = 3;
var OPTION_ANIMATIONS = 'animations';
var OPTION_STYLES = 'styles';
var OPTION_TEMPLATE = 'template';
var STYLE_GUIDE_LINK = 'https://angular.io/guide/styleguide#style-05-04.';
var generateFailure = function (type, limit, value) { return sprintf_js_1.sprintf(Rule.FAILURE_STRING, type, limit, value); };
exports.getAnimationsFailure = function (value, limit) {
    if (limit === void 0) { limit = DEFAULT_ANIMATIONS_LIMIT; }
    return generateFailure(OPTION_ANIMATIONS, limit, value);
};
exports.getStylesFailure = function (value, limit) {
    if (limit === void 0) { limit = DEFAULT_STYLES_LIMIT; }
    return generateFailure(OPTION_STYLES, limit, value);
};
exports.getTemplateFailure = function (value, limit) {
    if (limit === void 0) { limit = DEFAULT_TEMPLATE_LIMIT; }
    return generateFailure(OPTION_TEMPLATE, limit, value);
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.prototype.isEnabled = function () {
        var _a = Rule.metadata.options, maxLength = _a.maxLength, minLength = _a.minLength;
        var length = this.ruleArguments.length;
        return _super.prototype.isEnabled.call(this) && length >= minLength && length <= maxLength;
    };
    Rule.metadata = {
        description: 'Disallows having too many lines in inline template and styles. Forces separate template or styles file creation.',
        descriptionDetails: "See more at " + STYLE_GUIDE_LINK + ".",
        optionExamples: [true, [true, (_a = {}, _a[OPTION_ANIMATIONS] = 20, _a[OPTION_STYLES] = 8, _a[OPTION_TEMPLATE] = 5, _a)]],
        options: {
            items: {
                properties: (_b = {},
                    _b[OPTION_ANIMATIONS] = {
                        type: 'number'
                    },
                    _b[OPTION_STYLES] = {
                        type: 'number'
                    },
                    _b[OPTION_TEMPLATE] = {
                        type: 'number'
                    },
                    _b),
                type: 'object'
            },
            maxLength: 1,
            minLength: 0,
            type: 'array'
        },
        optionsDescription: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      It can take an optional object with the properties '", "', '", "' and '", "':\n      * `", "` - number > 0 defining the maximum allowed inline lines for animations. Defaults to ", ".\n      * `", "` - number > 0 defining the maximum allowed inline lines for styles. Defaults to ", ".\n      * `", "` - number > 0 defining the maximum allowed inline lines for template. Defaults to ", ".\n    "], ["\n      It can take an optional object with the properties '", "', '", "' and '", "':\n      * \\`", "\\` - number > 0 defining the maximum allowed inline lines for animations. Defaults to ", ".\n      * \\`", "\\` - number > 0 defining the maximum allowed inline lines for styles. Defaults to ", ".\n      * \\`", "\\` - number > 0 defining the maximum allowed inline lines for template. Defaults to ", ".\n    "])), OPTION_ANIMATIONS, OPTION_STYLES, OPTION_TEMPLATE, OPTION_ANIMATIONS, DEFAULT_ANIMATIONS_LIMIT, OPTION_STYLES, DEFAULT_STYLES_LIMIT, OPTION_TEMPLATE, DEFAULT_TEMPLATE_LIMIT),
        rationale: "Large, inline templates and styles obscure the component's purpose and implementation, reducing readability and maintainability.",
        ruleName: 'component-max-inline-declarations',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Exceeds the maximum allowed inline lines for %s. Defined limit: %s / total lines: %s (" + STYLE_GUIDE_LINK + ")";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.animationsLinesLimit = DEFAULT_ANIMATIONS_LIMIT;
        _this.stylesLinesLimit = DEFAULT_STYLES_LIMIT;
        _this.templateLinesLimit = DEFAULT_TEMPLATE_LIMIT;
        _this.newLineRegExp = /\r\n|\r|\n/;
        var _a = (options.ruleArguments[0] || []), _b = _a.animations, animations = _b === void 0 ? -1 : _b, _c = _a.styles, styles = _c === void 0 ? -1 : _c, _d = _a.template, template = _d === void 0 ? -1 : _d;
        _this.animationsLinesLimit = animations > -1 ? animations : _this.animationsLinesLimit;
        _this.stylesLinesLimit = styles > -1 ? styles : _this.stylesLinesLimit;
        _this.templateLinesLimit = template > -1 ? template : _this.templateLinesLimit;
        return _this;
    }
    Walker.prototype.visitNgComponent = function (metadata) {
        this.validateInlineAnimations(metadata);
        this.validateInlineStyles(metadata);
        this.validateInlineTemplate(metadata);
        _super.prototype.visitNgComponent.call(this, metadata);
    };
    Walker.prototype.getLinesCount = function (source) {
        return source.trim().split(this.newLineRegExp).length;
    };
    Walker.prototype.getInlineAnimationsLinesCount = function (metadata) {
        var _this = this;
        return (metadata.animations || []).reduce(function (previousValue, currentValue) {
            if (currentValue && currentValue.animation) {
                previousValue += _this.getLinesCount(currentValue.animation.source);
            }
            return previousValue;
        }, 0);
    };
    Walker.prototype.validateInlineAnimations = function (metadata) {
        var linesCount = this.getInlineAnimationsLinesCount(metadata);
        if (linesCount <= this.animationsLinesLimit)
            return;
        var failureMessage = exports.getAnimationsFailure(linesCount, this.animationsLinesLimit);
        for (var _i = 0, _a = metadata.animations; _i < _a.length; _i++) {
            var animation = _a[_i];
            this.addFailureAtNode(animation.node, failureMessage);
        }
    };
    Walker.prototype.getInlineStylesLinesCount = function (metadata) {
        var _this = this;
        return (metadata.styles || []).reduce(function (previousValue, currentValue) {
            if (currentValue && !currentValue.url) {
                previousValue += _this.getLinesCount(currentValue.style.source);
            }
            return previousValue;
        }, 0);
    };
    Walker.prototype.validateInlineStyles = function (metadata) {
        var linesCount = this.getInlineStylesLinesCount(metadata);
        if (linesCount <= this.stylesLinesLimit)
            return;
        var failureMessage = exports.getStylesFailure(linesCount, this.stylesLinesLimit);
        for (var _i = 0, _a = metadata.styles; _i < _a.length; _i++) {
            var style = _a[_i];
            this.addFailureAtNode(style.node, failureMessage);
        }
    };
    Walker.prototype.getTemplateLinesCount = function (metadata) {
        return this.hasInlineTemplate(metadata) ? this.getLinesCount(metadata.template.template.source) : 0;
    };
    Walker.prototype.hasInlineTemplate = function (metadata) {
        return !!(metadata.template && !metadata.template.url && metadata.template.template && metadata.template.template.source);
    };
    Walker.prototype.validateInlineTemplate = function (metadata) {
        var linesCount = this.getTemplateLinesCount(metadata);
        if (linesCount <= this.templateLinesLimit)
            return;
        var failureMessage = exports.getTemplateFailure(linesCount, this.templateLinesLimit);
        this.addFailureAtNode(metadata.template.node, failureMessage);
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;
