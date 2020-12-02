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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aria_query_1 = require("aria-query");
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var getSuggestion_1 = require("./util/getSuggestion");
var ariaAttributes = __spreadArrays(Array.from(aria_query_1.aria.keys()));
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
        description: 'Ensures that the correct ARIA attributes are used',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Elements should not use invalid aria attributes (AX_ARIA_11)',
        ruleName: 'template-accessibility-valid-aria',
        type: 'functionality',
        typescriptOnly: true
    };
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
exports.getFailureMessage = function (name) {
    var suggestions = getSuggestion_1.getSuggestion(name, ariaAttributes);
    var message = name + ": This attribute is an invalid ARIA attribute.";
    if (suggestions.length > 0) {
        return message + " Did you mean to use " + suggestions + "?";
    }
    return message;
};
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitAttr = function (ast, context) {
        this.validateAttribute(ast);
        _super.prototype.visitAttr.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.visitElementProperty = function (ast) {
        this.validateAttribute(ast);
        _super.prototype.visitElementProperty.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.validateAttribute = function (ast) {
        if (ast.name.indexOf('aria-') !== 0)
            return;
        var isValid = ariaAttributes.indexOf(ast.name) > -1;
        if (isValid)
            return;
        var _a = ast.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, exports.getFailureMessage(ast.name));
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
