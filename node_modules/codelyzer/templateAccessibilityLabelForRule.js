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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var isChildNodeOf_1 = require("./util/isChildNodeOf");
var objectKeys_1 = require("./util/objectKeys");
var OPTION_CONTROL_COMPONENTS = 'controlComponents';
var OPTION_LABEL_ATTRIBUTES = 'labelAttributes';
var OPTION_LABEL_COMPONENTS = 'labelComponents';
var OPTION_SCHEMA_VALUE = {
    properties: {
        items: {
            type: 'string'
        },
        type: 'array',
        uniqueItems: true
    },
    type: 'object'
};
var DEFAULT_CONTROL_COMPONENTS = ['button', 'input', 'meter', 'output', 'progress', 'select', 'textarea'];
var DEFAULT_LABEL_ATTRIBUTES = ['for', 'htmlFor'];
var DEFAULT_LABEL_COMPONENTS = ['label'];
var getReadableItems = function (items) {
    var itemsLength = items.length;
    if (itemsLength === 1)
        return "\"" + items[0] + "\"";
    return items
        .map(function (x) { return "\"" + x + "\""; })
        .slice(0, itemsLength - 1)
        .join(', ') + " and \"" + __spreadArrays(items).pop() + "\"";
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = { templateVisitorCtrl: TemplateVisitorCtrl };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && this.areOptionsValid();
    };
    Rule.prototype.areOptionsValid = function () {
        var ruleArgumentsLength = this.ruleArguments.length;
        if (ruleArgumentsLength === 0)
            return true;
        if (ruleArgumentsLength > 1)
            return false;
        var ruleOptions = Rule.metadata.options;
        var ruleArgument = this.ruleArguments[0];
        var ruleArgumentsKeys = objectKeys_1.objectKeys(ruleArgument);
        var propertiesKeys = objectKeys_1.objectKeys(ruleOptions.properties);
        return (ruleArgumentsKeys.every(function (argumentKey) { return propertiesKeys.includes(argumentKey); }) &&
            ruleArgumentsKeys
                .map(function (argumentKey) { return ruleArgument[argumentKey]; })
                .every(function (argumentValue) { return Array.isArray(argumentValue) && argumentValue.length > 0; }));
    };
    Rule.metadata = {
        description: 'Checks if a label component is associated with a form element',
        optionExamples: [
            true,
            [
                true,
                (_a = {},
                    _a[OPTION_CONTROL_COMPONENTS] = ['app-input'],
                    _a)
            ],
            [
                true,
                (_b = {},
                    _b[OPTION_CONTROL_COMPONENTS] = ['app-input', 'app-select'],
                    _b[OPTION_LABEL_ATTRIBUTES] = ['id'],
                    _b[OPTION_LABEL_COMPONENTS] = ['app-label'],
                    _b)
            ]
        ],
        options: {
            additionalProperties: false,
            properties: (_c = {},
                _c[OPTION_CONTROL_COMPONENTS] = OPTION_SCHEMA_VALUE,
                _c[OPTION_LABEL_ATTRIBUTES] = OPTION_SCHEMA_VALUE,
                _c[OPTION_LABEL_COMPONENTS] = OPTION_SCHEMA_VALUE,
                _c),
            type: 'object'
        },
        optionsDescription: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      An optional object with optional `", "`, `", "` and `", "` properties.\n\n      * `", "` - components that must be inside a label component. Default and non overridable values are\n      ", ".\n      * `", "` - attributes that must be set on label components. Default and non overridable values are\n      ", ".\n      * `", "` - components that act like a label. Default and non overridable values are\n      ", ".\n    "], ["\n      An optional object with optional \\`", "\\`, \\`", "\\` and \\`", "\\` properties.\n\n      * \\`", "\\` - components that must be inside a label component. Default and non overridable values are\n      ", ".\n      * \\`", "\\` - attributes that must be set on label components. Default and non overridable values are\n      ", ".\n      * \\`", "\\` - components that act like a label. Default and non overridable values are\n      ", ".\n    "])), OPTION_CONTROL_COMPONENTS, OPTION_LABEL_ATTRIBUTES, OPTION_LABEL_COMPONENTS, OPTION_CONTROL_COMPONENTS, getReadableItems(DEFAULT_CONTROL_COMPONENTS), OPTION_LABEL_ATTRIBUTES, getReadableItems(DEFAULT_LABEL_ATTRIBUTES), OPTION_LABEL_COMPONENTS, getReadableItems(DEFAULT_LABEL_COMPONENTS)),
        ruleName: 'template-accessibility-label-for',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'A label component must be associated with a form element';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl(sourceFile, options, context, templateStart) {
        var _this = _super.call(this, sourceFile, options, context, templateStart) || this;
        var _a = (options.ruleArguments[0] || {}), controlComponents = _a.controlComponents, labelAttributes = _a.labelAttributes, labelComponents = _a.labelComponents;
        _this.controlComponents = new Set(__spreadArrays(DEFAULT_CONTROL_COMPONENTS.concat(controlComponents)));
        _this.labelAttributes = new Set(__spreadArrays(DEFAULT_LABEL_ATTRIBUTES.concat(labelAttributes)));
        _this.labelComponents = new Set(__spreadArrays(DEFAULT_LABEL_COMPONENTS.concat(labelComponents)));
        return _this;
    }
    TemplateVisitorCtrl.prototype.visitElement = function (element, context) {
        this.validateElement(element);
        _super.prototype.visitElement.call(this, element, context);
    };
    TemplateVisitorCtrl.prototype.hasControlComponentInsideElement = function (element) {
        return Array.from(this.controlComponents).some(function (controlComponentName) { return isChildNodeOf_1.isChildNodeOf(element, controlComponentName); });
    };
    TemplateVisitorCtrl.prototype.hasValidAttrOrInput = function (element) {
        var _this = this;
        return __spreadArrays(element.attrs, element.inputs).map(function (attrOrInput) { return attrOrInput.name; })
            .some(function (attrOrInputName) { return _this.labelAttributes.has(attrOrInputName); });
    };
    TemplateVisitorCtrl.prototype.isLabelComponent = function (element) {
        return this.labelComponents.has(element.name);
    };
    TemplateVisitorCtrl.prototype.validateElement = function (element) {
        if (!this.isLabelComponent(element) || this.hasValidAttrOrInput(element) || this.hasControlComponentInsideElement(element)) {
            return;
        }
        var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var templateObject_1;
