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
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var utils_2 = require("./util/utils");
exports.getFailureMessage = function (failureParameters) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, failureParameters.methodName, failureParameters.className, failureParameters.decoratorName);
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
    Rule.metadata = {
        description: 'Ensures that classes use allowed lifecycle method in its body.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Some lifecycle methods can only be used in certain class types.\n      For example, ", "() method should not be used\n      in an @", " class.\n    "], ["\n      Some lifecycle methods can only be used in certain class types.\n      For example, ", "() method should not be used\n      in an @", " class.\n    "])), utils_2.AngularLifecycleMethods.ngOnInit, utils_2.AngularClassDecorators.Injectable),
        ruleName: 'contextual-lifecycle',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'The method "%s" is not allowed for class "%s" because it is decorated with "%s"';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgInjectable = function (metadata) {
        var injectableAllowedMethods = utils_2.ANGULAR_CLASS_DECORATOR_LIFECYCLE_METHOD_MAPPER.get(utils_2.AngularClassDecorators.Injectable);
        if (!injectableAllowedMethods)
            return;
        this.validateDecorator(metadata, injectableAllowedMethods);
        _super.prototype.visitNgInjectable.call(this, metadata);
    };
    Walker.prototype.visitNgModule = function (metadata) {
        var ngModuleAllowedMethods = utils_2.ANGULAR_CLASS_DECORATOR_LIFECYCLE_METHOD_MAPPER.get(utils_2.AngularClassDecorators.NgModule);
        if (!ngModuleAllowedMethods)
            return;
        this.validateDecorator(metadata, ngModuleAllowedMethods);
        _super.prototype.visitNgModule.call(this, metadata);
    };
    Walker.prototype.visitNgPipe = function (metadata) {
        var pipeAllowedMethods = utils_2.ANGULAR_CLASS_DECORATOR_LIFECYCLE_METHOD_MAPPER.get(utils_2.AngularClassDecorators.Pipe);
        if (!pipeAllowedMethods)
            return;
        this.validateDecorator(metadata, pipeAllowedMethods);
        _super.prototype.visitNgPipe.call(this, metadata);
    };
    Walker.prototype.validateDecorator = function (metadata, allowedMethods) {
        var className = utils_2.getClassName(metadata.controller);
        var decoratorName = utils_2.getDecoratorName(metadata.decorator);
        if (!decoratorName || !utils_2.isAngularClassDecorator(decoratorName))
            return;
        for (var _i = 0, _a = metadata.controller.members; _i < _a.length; _i++) {
            var member = _a[_i];
            var memberName = member.name;
            if (!memberName)
                continue;
            var methodName = memberName.getText();
            if (!utils_2.isAngularLifecycleMethod(methodName) || allowedMethods.has(methodName))
                continue;
            var failure = exports.getFailureMessage({ className: className, decoratorName: decoratorName, methodName: methodName });
            this.addFailureAtNode(member, failure);
        }
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;
