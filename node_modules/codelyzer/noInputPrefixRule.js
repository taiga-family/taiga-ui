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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("./angular/ngWalker");
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
        var minLength = Rule.metadata.options.minLength;
        var length = this.ruleArguments.length;
        return _super.prototype.isEnabled.call(this) && length >= minLength;
    };
    Rule.metadata = {
        description: 'Input names should not be prefixed by the configured disallowed prefixes.',
        optionExamples: [[true, 'can', 'is', 'should']],
        options: {
            items: [
                {
                    type: 'string'
                }
            ],
            minLength: 1,
            type: 'array'
        },
        optionsDescription: 'Options accept a string array of disallowed input prefixes.',
        rationale: lib_1.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      HTML attributes are not prefixed. It's considered best not to prefix Inputs.\n      * Example: 'enabled' is prefered over 'isEnabled'.\n    "], ["\n      HTML attributes are not prefixed. It's considered best not to prefix Inputs.\n      * Example: 'enabled' is prefered over 'isEnabled'.\n    "]))),
        ruleName: 'no-input-prefix',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = '@Inputs should not be prefixed by %s';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
var getReadablePrefixes = function (prefixes) {
    var prefixesLength = prefixes.length;
    if (prefixesLength === 1) {
        return "\"" + prefixes[0] + "\"";
    }
    return prefixes
        .map(function (x) { return "\"" + x + "\""; })
        .slice(0, prefixesLength - 1)
        .join(', ') + " or \"" + __spreadArrays(prefixes).pop() + "\"";
};
exports.getFailureMessage = function (prefixes) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, getReadablePrefixes(prefixes));
};
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker(source, options) {
        var _this = _super.call(this, source, options) || this;
        _this.blacklistedPrefixes = options.ruleArguments;
        return _this;
    }
    Walker.prototype.visitNgInput = function (property, input, args) {
        this.validatePrefix(property);
        _super.prototype.visitNgInput.call(this, property, input, args);
    };
    Walker.prototype.validatePrefix = function (property) {
        var memberName = property.name.getText();
        var isBlackListedPrefix = this.blacklistedPrefixes.some(function (x) { return x === memberName || new RegExp("^" + x + "[^a-z]").test(memberName); });
        if (!isBlackListedPrefix) {
            return;
        }
        var failure = exports.getFailureMessage(this.blacklistedPrefixes);
        this.addFailureAtNode(property, failure);
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;
