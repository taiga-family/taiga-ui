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
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
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
    Rule.metadata = {
        description: 'Enforces alternate text for elements which require the alt, aria-label, aria-labelledby attributes',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Alternate text lets screen readers provide more information to end users.',
        ruleName: 'template-accessibility-alt-text',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = '%s element must have a text alternative.';
    Rule.DEFAULT_ELEMENTS = ['img', 'object', 'area', 'input[type="image"]'];
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
exports.getFailureMessage = function (name) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, name);
};
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitElement = function (ast, context) {
        this.validateElement(ast);
        _super.prototype.visitElement.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.validateElement = function (element) {
        var typesToValidate = Rule.DEFAULT_ELEMENTS.map(function (type) {
            if (type === 'input[type="image"]') {
                return 'input';
            }
            return type;
        });
        if (typesToValidate.indexOf(element.name) === -1) {
            return;
        }
        var isValid = this[element.name](element);
        if (isValid) {
            return;
        }
        var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, exports.getFailureMessage(element.name));
    };
    TemplateVisitorCtrl.prototype.img = function (element) {
        var hasAltAttr = element.attrs.some(function (attr) { return attr.name === 'alt'; });
        var hasAltInput = element.inputs.some(function (input) { return input.name === 'alt'; });
        return hasAltAttr || hasAltInput;
    };
    TemplateVisitorCtrl.prototype.object = function (element) {
        var elementHasText = '';
        var hasLabelAttr = element.attrs.some(function (attr) { return attr.name === 'aria-label' || attr.name === 'aria-labelledby'; });
        var hasLabelInput = element.inputs.some(function (input) { return input.name === 'aria-label' || input.name === 'aria-labelledby'; });
        var hasTitleAttr = element.attrs.some(function (attr) { return attr.name === 'title'; });
        var hasTitleInput = element.inputs.some(function (input) { return input.name === 'title'; });
        if (element.children.length) {
            elementHasText = element.children[0].value;
        }
        return hasLabelAttr || hasLabelInput || hasTitleAttr || hasTitleInput || elementHasText;
    };
    TemplateVisitorCtrl.prototype.area = function (element) {
        var hasLabelAttr = element.attrs.some(function (attr) { return attr.name === 'aria-label' || attr.name === 'aria-labelledby'; });
        var hasLabelInput = element.inputs.some(function (input) { return input.name === 'aria-label' || input.name === 'aria-labelledby'; });
        var hasAltAttr = element.attrs.some(function (attr) { return attr.name === 'alt'; });
        var hasAltInput = element.inputs.some(function (input) { return input.name === 'alt'; });
        return hasAltAttr || hasAltInput || hasLabelAttr || hasLabelInput;
    };
    TemplateVisitorCtrl.prototype.input = function (element) {
        var attrType = element.attrs.find(function (attr) { return attr.name === 'type'; }) || {};
        var inputType = element.inputs.find(function (input) { return input.name === 'type'; }) || {};
        var type = attrType.value || inputType.value;
        if (type !== 'image') {
            return true;
        }
        return this.area(element);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
