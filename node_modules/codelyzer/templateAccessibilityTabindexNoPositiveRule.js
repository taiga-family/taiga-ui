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
var getAttributeValue_1 = require("./util/getAttributeValue");
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
        description: 'Ensures that the tabindex attribute is not positive',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'positive values for tabindex attribute should be avoided because they mess up with the order of focus (AX_FOCUS_03)',
        ruleName: 'template-accessibility-tabindex-no-positive',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_MESSAGE = 'tabindex attribute cannot be positive';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
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
        var tabIndexValue = getAttributeValue_1.getAttributeValue(element, 'tabindex');
        if (tabIndexValue) {
            tabIndexValue = parseInt(tabIndexValue, 10);
            if (tabIndexValue > 0) {
                var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
                this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_MESSAGE);
            }
        }
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
