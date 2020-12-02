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
var COMPONENT_DIRECTIVE_PATTERN = /^(Component|Directive)$/;
var MetadataPropertyBase = (function (_super) {
    __extends(MetadataPropertyBase, _super);
    function MetadataPropertyBase(config, options) {
        var _this = _super.call(this, options) || this;
        _this.config = config;
        return _this;
    }
    MetadataPropertyBase.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.config);
    };
    return MetadataPropertyBase;
}(rules_1.AbstractRule));
exports.MetadataPropertyBase = MetadataPropertyBase;
var validateClassDeclaration = function (context, node) {
    return typescript_1.createNodeArray(node.decorators).forEach(function (decorator) { return validateDecorator(context, decorator); });
};
var validateDecorator = function (context, decorator) {
    var _a = context.options, errorMessage = _a.errorMessage, propertyName = _a.propertyName;
    var propertyExpression = utils_1.getDecoratorPropertyInitializer(decorator, propertyName);
    var decoratorName = utils_1.getDecoratorName(decorator);
    if (!decoratorName || !propertyExpression || !COMPONENT_DIRECTIVE_PATTERN.test(decoratorName)) {
        return;
    }
    context.addFailureAtNode(propertyExpression.parent, errorMessage);
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
