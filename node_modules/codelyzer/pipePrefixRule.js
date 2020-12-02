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
var sprintf_js_1 = require("sprintf-js");
var Lint = require("tslint");
var ts = require("typescript");
var ngWalker_1 = require("./angular/ngWalker");
var selectorValidator_1 = require("./util/selectorValidator");
var utils_1 = require("./util/utils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule(options) {
        var _this = _super.call(this, options) || this;
        var args = options.ruleArguments;
        if (!(args instanceof Array)) {
            args = [args];
        }
        _this.prefix = args.join(',');
        var prefixExpression = args.join('|');
        _this.prefixChecker = selectorValidator_1.SelectorValidator.prefix(prefixExpression, 'camelCase');
        return _this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this);
        return this.applyWithWalker(walker);
    };
    Rule.prototype.isEnabled = function () {
        var minLength = Rule.metadata.options.minLength;
        var length = this.ruleArguments.length;
        return _super.prototype.isEnabled.call(this) && length >= minLength;
    };
    Rule.prototype.validatePrefix = function (prefix) {
        return this.prefixChecker(prefix);
    };
    Rule.metadata = {
        description: 'Enforce consistent prefix for pipes.',
        optionExamples: [[true, 'myPrefix'], [true, 'myPrefix', 'myOtherPrefix']],
        options: {
            items: [
                {
                    type: 'string'
                }
            ],
            minLength: 1,
            type: 'array'
        },
        optionsDescription: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      * The list of arguments are supported prefixes (given as strings).\n    "], ["\n      * The list of arguments are supported prefixes (given as strings).\n    "]))),
        rationale: 'Consistent conventions make it easy to quickly identify and reference assets of different types.',
        ruleName: 'pipe-prefix',
        type: 'style',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "The name of the Pipe decorator of class %s should start with prefix %s, however its value is \"%s\"";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker(sourceFile, rule) {
        var _this = _super.call(this, sourceFile, rule.getOptions()) || this;
        _this.rule = rule;
        return _this;
    }
    Walker.prototype.visitNgPipe = function (metadata) {
        var className = metadata.controller.name.text;
        this.validateProperties(className, metadata.decorator);
        _super.prototype.visitNgPipe.call(this, metadata);
    };
    Walker.prototype.validateProperties = function (className, pipe) {
        var argument = utils_1.getDecoratorArgument(pipe);
        argument.properties
            .filter(function (p) { return p.name && ts.isIdentifier(p.name) && p.name.text === 'name'; })
            .forEach(this.validateProperty.bind(this, className));
    };
    Walker.prototype.validateProperty = function (className, property) {
        var initializer = ts.isPropertyAssignment(property) ? property.initializer : undefined;
        if (initializer && ts.isStringLiteral(initializer)) {
            var propName = initializer.text;
            var isValid = this.rule.validatePrefix(propName);
            if (!isValid) {
                this.addFailureAtNode(property, sprintf_js_1.sprintf(Rule.FAILURE_STRING, className, this.rule.prefix, propName));
            }
        }
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;
