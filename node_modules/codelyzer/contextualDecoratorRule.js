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
var typescript_1 = require("typescript");
var isNotNullOrUndefined_1 = require("./util/isNotNullOrUndefined");
var utils_2 = require("./util/utils");
exports.getFailureMessage = function (failureParameters) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, failureParameters.classDecoratorName);
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: 'Ensures that classes use contextual decorators in its body.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Some decorators should only be used in certain class types. For example,\n      the decorator @", "() should\n      not be used in a class decorated with @", "().\n    "], ["\n      Some decorators should only be used in certain class types. For example,\n      the decorator @", "() should\n      not be used in a class decorated with @", "().\n    "])), utils_2.AngularInnerClassDecorators.Input, utils_2.AngularClassDecorators.Injectable),
        ruleName: 'contextual-decorator',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Decorator out of context for "@%s()"';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var callbackHandler = function (walkContext, node) {
    if (isDeclarationLike(node))
        validateDeclaration(walkContext, node);
};
var getClassDecoratorName = function (klass) {
    return typescript_1.createNodeArray(klass.decorators)
        .map(utils_2.getDecoratorName)
        .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
        .find(utils_2.isAngularClassDecorator);
};
var isDeclarationLike = function (node) {
    return typescript_1.isAccessor(node) || typescript_1.isMethodDeclaration(node) || typescript_1.isParameterPropertyDeclaration(node, node.parent) || typescript_1.isPropertyDeclaration(node);
};
var validateDeclaration = function (walkContext, node) {
    var klass = utils_2.getNextToLastParentNode(node);
    var classDecoratorName = getClassDecoratorName(klass);
    if (!classDecoratorName)
        return;
    typescript_1.createNodeArray(node.decorators).forEach(function (decorator) { return validateDecorator(walkContext, decorator, classDecoratorName); });
};
var validateDecorator = function (walkContext, node, classDecoratorName) {
    var decoratorName = utils_2.getDecoratorName(node);
    if (!decoratorName || !utils_2.isAngularInnerClassDecorator(decoratorName))
        return;
    var allowedDecorators = utils_2.ANGULAR_CLASS_DECORATOR_MAPPER.get(classDecoratorName);
    if (!allowedDecorators || allowedDecorators.has(decoratorName))
        return;
    var failure = exports.getFailureMessage({ classDecoratorName: classDecoratorName });
    walkContext.addFailureAtNode(node, failure);
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
