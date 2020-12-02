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
var utils_2 = require("./util/utils");
var LIFECYCLE_INTERFACES = [
    utils_2.AngularLifecycleInterfaces.DoCheck,
    utils_2.AngularLifecycleInterfaces.OnChanges
];
var LIFECYCLE_METHODS = [
    utils_2.AngularLifecycleMethods.ngDoCheck,
    utils_2.AngularLifecycleMethods.ngOnChanges
];
exports.getFailureMessage = function (failureParameters) { return sprintf_js_1.sprintf(failureParameters.message); };
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: 'Ensures that directives not implement conflicting lifecycle interfaces.',
        descriptionDetails: 'See more at https://angular.io/api/core/DoCheck#description.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      A directive typically should not use both ", " and ", " to respond\n      to changes on the same input, as ", " will continue to be called when the\n      default change detector detects changes.\n    "], ["\n      A directive typically should not use both ", " and ", " to respond\n      to changes on the same input, as ", " will continue to be called when the\n      default change detector detects changes.\n    "])), utils_2.AngularLifecycleInterfaces.DoCheck, utils_2.AngularLifecycleInterfaces.OnChanges, utils_2.AngularLifecycleMethods.ngOnChanges),
        ruleName: 'no-conflicting-lifecycle',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING_INTERFACE_HOOK = utils_1.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    Implementing ", " and ", " in a class is not recommended\n  "], ["\n    Implementing ", " and ", " in a class is not recommended\n  "])), utils_2.AngularLifecycleInterfaces.DoCheck, utils_2.AngularLifecycleInterfaces.OnChanges);
    Rule.FAILURE_STRING_METHOD_HOOK = utils_1.dedent(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    Declaring ", " and ", " method in a class is not recommended\n  "], ["\n    Declaring ", " and ", " method in a class is not recommended\n  "])), utils_2.AngularLifecycleMethods.ngDoCheck, utils_2.AngularLifecycleMethods.ngOnChanges);
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var validateClassDeclaration = function (context, node) {
    validateInterfaces(context, node);
    validateMethods(context, node);
};
var validateInterfaces = function (context, node) {
    var declaredAngularLifecycleInterfaces = utils_2.getDeclaredAngularLifecycleInterfaces(node);
    var hasConflictingLifecycle = LIFECYCLE_INTERFACES.every(function (lifecycleInterface) {
        return declaredAngularLifecycleInterfaces.includes(lifecycleInterface);
    });
    if (!hasConflictingLifecycle)
        return;
    var failure = exports.getFailureMessage({
        message: Rule.FAILURE_STRING_INTERFACE_HOOK
    });
    context.addFailureAtNode(node, failure);
};
var validateMethods = function (context, node) {
    var declaredAngularLifecycleMethods = utils_2.getDeclaredAngularLifecycleMethods(node);
    var hasConflictingLifecycle = LIFECYCLE_METHODS.every(function (lifecycleMethod) { return declaredAngularLifecycleMethods.includes(lifecycleMethod); });
    if (!hasConflictingLifecycle)
        return;
    var failure = exports.getFailureMessage({
        message: Rule.FAILURE_STRING_METHOD_HOOK
    });
    context.addFailureAtNode(node, failure);
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
var templateObject_1, templateObject_2, templateObject_3;
