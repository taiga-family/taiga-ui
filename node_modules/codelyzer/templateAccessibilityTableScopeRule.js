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
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (element.name === 'th') {
            return;
        }
        var hasScopeInput = element.inputs.some(function (input) { return input.name === 'scope'; });
        var hasScopeAttr = element.attrs.some(function (attr) { return attr.name === 'scope'; });
        if (hasScopeInput || hasScopeAttr) {
            var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
            this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_MESSAGE);
        }
    };
    return TemplateVisitorCtrl;
}(angular_1.BasicTemplateAstVisitor));
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
        description: 'Ensures that scope is not used on any element except th',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: lib_1.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    The scope attribute makes table navigation much easier for screen reader users, provided that it is used correctly.\n    If used incorrectly, it can make table navigation much harder and less efficient. (aXe)\n    "], ["\n    The scope attribute makes table navigation much easier for screen reader users, provided that it is used correctly.\n    If used incorrectly, it can make table navigation much harder and less efficient. (aXe)\n    "]))),
        ruleName: 'template-accessibility-table-scope',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_MESSAGE = 'Scope attribute can only be on <th> element';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
var templateObject_1;
