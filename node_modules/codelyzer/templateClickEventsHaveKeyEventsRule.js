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
var aria_query_1 = require("aria-query");
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var isHiddenFromScreenReader_1 = require("./util/isHiddenFromScreenReader");
var isInteractiveElement_1 = require("./util/isInteractiveElement");
var isPresentationRole_1 = require("./util/isPresentationRole");
var domElements = new Set(aria_query_1.dom.keys());
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
        description: 'Ensures that the click event is accompanied with at least one key event keyup, keydown or keypress',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Keyboard is important for users with physical disabilities who cannot use mouse.',
        ruleName: 'template-click-events-have-key-events',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'click must be accompanied by either keyup, keydown or keypress event for accessibility';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitElement = function (el, context) {
        this.validateElement(el);
        _super.prototype.visitElement.call(this, el, context);
    };
    TemplateVisitorCtrl.prototype.validateElement = function (el) {
        var hasClick = el.outputs.some(function (output) { return output.name === 'click'; });
        if (!hasClick) {
            return;
        }
        if (!domElements.has(el.name)) {
            return;
        }
        if (isPresentationRole_1.isPresentationRole(el) || isHiddenFromScreenReader_1.isHiddenFromScreenReader(el)) {
            return;
        }
        if (isInteractiveElement_1.isInteractiveElement(el)) {
            return;
        }
        var hasKeyEvent = el.outputs.some(function (output) { return output.name.startsWith('keyup') || output.name.startsWith('keydown') || output.name.startsWith('keypress'); });
        if (hasKeyEvent) {
            return;
        }
        var _a = el.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
