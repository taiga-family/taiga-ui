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
var angular_1 = require("./angular");
var ngWalker_1 = require("./angular/ngWalker");
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
        if (Rule.ELEMENTS.indexOf(element.name) === -1) {
            return;
        }
        var hasContent = element.children.length;
        var hasInnerContent = element.inputs.some(function (input) { return input.name === 'innerHTML' || input.name === 'innerText'; });
        if (hasContent || hasInnerContent) {
            return;
        }
        var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, exports.getErrorMessage(element.name));
    };
    return TemplateVisitorCtrl;
}(angular_1.BasicTemplateAstVisitor));
exports.getErrorMessage = function (element) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, element);
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
    Rule.metadata = {
        description: 'Ensures that the heading, anchor and button elements have content in it',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Heading, anchor and button elements should have content to be accessible by screen readers',
        ruleName: 'template-accessibility-elements-content',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = '<%s/> element should have content';
    Rule.ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button'];
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
