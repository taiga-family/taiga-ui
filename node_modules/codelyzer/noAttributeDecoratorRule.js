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
var rules_1 = require("tslint/lib/rules");
var typescript_1 = require("typescript");
var utils_1 = require("./util/utils");
var ATTRIBUTE = 'Attribute';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: "Disallows usage of @" + ATTRIBUTE + " decorator.",
        options: null,
        optionsDescription: 'Not configurable.',
        ruleName: 'no-attribute-decorator',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "@" + ATTRIBUTE + " is considered bad practice. Use @Input instead.";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var callbackHandler = function (walkContext, node) {
    if (typescript_1.isConstructorDeclaration(node))
        validateConstructor(walkContext, node);
};
var isAttributeDecorator = function (decorator) { return utils_1.getDecoratorName(decorator) === ATTRIBUTE; };
var validateConstructor = function (walkContext, node) {
    node.parameters.forEach(function (parameter) { return validateParameter(walkContext, parameter); });
};
var validateDecorator = function (walkContext, decorator) {
    if (!isAttributeDecorator(decorator))
        return;
    walkContext.addFailureAtNode(decorator, Rule.FAILURE_STRING);
};
var validateParameter = function (walkContext, node) {
    typescript_1.createNodeArray(node.decorators).forEach(function (decorator) { return validateDecorator(walkContext, decorator); });
};
var walk = function (walkContext) {
    var sourceFile = walkContext.sourceFile;
    var callback = function (node) {
        callbackHandler(walkContext, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};
