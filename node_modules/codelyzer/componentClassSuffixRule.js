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
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
var Lint = require("tslint");
var function_1 = require("./util/function");
var walkerFactory_1 = require("./walkerFactory/walkerFactory");
var walkerFn_1 = require("./walkerFactory/walkerFn");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.validate = function (className, suffixList) {
        return suffixList.some(function (suffix) { return className.endsWith(suffix); });
    };
    Rule.prototype.apply = function (sourceFile) {
        var walker = Rule.walkerBuilder(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Classes decorated with @Component must have suffix "Component" (or custom) in their name.',
        descriptionDetails: 'See more at https://angular.io/styleguide#style-02-03.',
        optionExamples: [true, [true, 'Component', 'View']],
        options: {
            items: {
                type: 'string'
            },
            minLength: 0,
            type: 'array'
        },
        optionsDescription: 'Supply a list of allowed component suffixes. Defaults to "Component".',
        rationale: 'Consistent conventions make it easy to quickly identify and reference assets of different types.',
        ruleName: 'component-class-suffix',
        type: 'style',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'The name of the class %s should end with the suffix %s (https://angular.io/styleguide#style-02-03)';
    Rule.walkerBuilder = walkerFn_1.all(walkerFn_1.validateComponent(function (meta, suffixList) {
        if (suffixList === void 0) { suffixList = []; }
        return function_1.Maybe.lift(meta.controller)
            .fmap(function (controller) { return controller.name; })
            .fmap(function (name) {
            var text = name.text;
            var failures = [];
            var suffixes = suffixList.length > 0 ? suffixList : ['Component'];
            if (!Rule.validate(text, suffixes)) {
                failures.push(new walkerFactory_1.Failure(name, sprintf_js_1.sprintf(Rule.FAILURE_STRING, text, suffixes)));
            }
            return failures;
        });
    }));
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
