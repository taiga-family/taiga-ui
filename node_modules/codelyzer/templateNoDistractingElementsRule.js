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
        description: 'Enforces that no distracting elements are used',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Elements that can be visually distracting can cause accessibility issues with visually impaired users.',
        ruleName: 'template-no-distracting-elements',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Avoid using <%s/> elements as they create visual accessibility issues.';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
function getFailureMessage(element) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, element);
}
exports.getFailureMessage = getFailureMessage;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitElement = function (prop, context) {
        this.validateElement(prop);
        _super.prototype.visitElement.call(this, prop, context);
    };
    TemplateVisitorCtrl.prototype.validateElement = function (el) {
        if (el.name === 'marquee' || el.name === 'blink') {
            var _a = el.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
            this.addFailureFromStartToEnd(startOffset, endOffset, getFailureMessage(el.name));
        }
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
