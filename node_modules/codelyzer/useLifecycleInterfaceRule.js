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
var rules_1 = require("tslint/lib/rules");
var typescript_1 = require("typescript");
var classDeclarationUtils_1 = require("./util/classDeclarationUtils");
var utils_1 = require("./util/utils");
var STYLE_GUIDE_LINK = 'https://angular.io/styleguide#style-09-01';
exports.getFailureMessage = function (failureParameters) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, failureParameters.interfaceName, failureParameters.methodName);
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
        description: 'Ensures classes implement lifecycle interfaces corresponding to the declared lifecycle methods.',
        descriptionDetails: "See more at " + STYLE_GUIDE_LINK,
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Interfaces prescribe typed method signatures. Use those signatures to flag spelling and syntax mistakes.',
        ruleName: 'use-lifecycle-interface',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Lifecycle interface %s should be implemented for method %s. (" + STYLE_GUIDE_LINK + ")";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var validateClassDeclaration = function (context, node) {
    var declaredLifecycleInterfaces = utils_1.getDeclaredAngularLifecycleInterfaces(node);
    var declaredMethods = classDeclarationUtils_1.getDeclaredMethods(node);
    for (var _i = 0, declaredMethods_1 = declaredMethods; _i < declaredMethods_1.length; _i++) {
        var method = declaredMethods_1[_i];
        var methodProperty = method.name;
        var methodName = methodProperty.getText();
        if (!utils_1.isAngularLifecycleMethod(methodName))
            continue;
        var interfaceName = utils_1.getLifecycleInterfaceByMethodName(methodName);
        var isMethodImplemented = declaredLifecycleInterfaces.includes(utils_1.AngularLifecycleInterfaces[interfaceName]);
        if (isMethodImplemented)
            continue;
        var failure = exports.getFailureMessage({ interfaceName: interfaceName, methodName: methodName });
        context.addFailureAtNode(methodProperty, failure);
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
