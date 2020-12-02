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
        description: 'Ensures that the Mouse Events mouseover and mouseout are accompanied with Key Events focus and blur',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Keyboard is important for users with physical disabilities who cannot use mouse.',
        ruleName: 'template-mouse-events-have-key-events',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING_MOUSE_OVER = 'mouseover must be accompanied by focus event for accessibility';
    Rule.FAILURE_STRING_MOUSE_OUT = 'mouseout must be accompanied by blur event for accessibility';
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
        var hasMouseOver = el.outputs.some(function (output) { return output.name === 'mouseover'; });
        var hasMouseOut = el.outputs.some(function (output) { return output.name === 'mouseout'; });
        var hasFocus = el.outputs.some(function (output) { return output.name === 'focus'; });
        var hasBlur = el.outputs.some(function (output) { return output.name === 'blur'; });
        if (!hasMouseOver && !hasMouseOut) {
            return;
        }
        var _a = el.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        if (hasMouseOver && !hasFocus) {
            this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING_MOUSE_OVER);
        }
        if (hasMouseOut && !hasBlur) {
            this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING_MOUSE_OUT);
        }
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
