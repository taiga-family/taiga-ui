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
var compiler_1 = require("@angular/compiler");
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var isNotNullOrUndefined_1 = require("./util/isNotNullOrUndefined");
var OPTION_CHECK_ID = 'check-id';
var OPTION_CHECK_TEXT = 'check-text';
var generateFailure = function (failureParameters) {
    var _a = failureParameters.ast.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
    failureParameters.context.addFailureFromStartToEnd(startOffset, endOffset, failureParameters.message);
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
        var _a = Rule.metadata.options, enumItems = _a.items.enum, maxLength = _a.maxLength, minLength = _a.minLength;
        var argumentsLength = this.ruleArguments.length;
        var optionArgument = utils_1.arrayify(this.ruleArguments).filter(isNotNullOrUndefined_1.isNotNullOrUndefined);
        var argumentsLengthInRange = argumentsLength >= minLength && argumentsLength <= maxLength;
        var isOptionArgumentValid = optionArgument.length > 0 && optionArgument.every(function (argument) { return enumItems.indexOf(argument) !== -1; });
        return _super.prototype.isEnabled.call(this) && argumentsLengthInRange && isOptionArgumentValid;
    };
    Rule.metadata = {
        description: 'Ensures following best practices for i18n.',
        optionExamples: [[true, OPTION_CHECK_ID], [true, OPTION_CHECK_TEXT], [true, OPTION_CHECK_ID, OPTION_CHECK_TEXT]],
        options: {
            items: {
                enum: [OPTION_CHECK_ID, OPTION_CHECK_TEXT],
                type: 'string'
            },
            maxLength: 2,
            minLength: 1,
            type: 'array'
        },
        optionsDescription: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      One (or both) of the following arguments must be provided:\n      * `", "` Makes sure i18n attributes have ID specified\n      * `", "` Makes sure there are no elements with text content but no i18n attribute\n    "], ["\n      One (or both) of the following arguments must be provided:\n      * \\`", "\\` Makes sure i18n attributes have ID specified\n      * \\`", "\\` Makes sure there are no elements with text content but no i18n attribute\n    "])), OPTION_CHECK_ID, OPTION_CHECK_TEXT),
        rationale: 'Makes the code more maintainable in i18n sense.',
        ruleName: 'template-i18n',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING_ATTR = 'Missing custom message identifier. For more information visit https://angular.io/guide/i18n';
    Rule.FAILURE_STRING_TEXT = 'Each element containing text node should have an i18n attribute';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorAttrCtrl = (function (_super) {
    __extends(TemplateVisitorAttrCtrl, _super);
    function TemplateVisitorAttrCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorAttrCtrl.prototype.getCheckOption = function () {
        return OPTION_CHECK_ID;
    };
    TemplateVisitorAttrCtrl.prototype.visitAttr = function (ast, context) {
        this.validateAttr(ast, context);
        _super.prototype.visitAttr.call(this, ast, context);
    };
    TemplateVisitorAttrCtrl.prototype.validateAttr = function (ast, context) {
        if (ast.name !== 'i18n')
            return;
        var parts = ast.value.split('@@');
        if (parts.length > 1 && parts[1].length !== 0)
            return;
        generateFailure({ ast: ast, context: context, message: Rule.FAILURE_STRING_ATTR });
    };
    return TemplateVisitorAttrCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var TemplateVisitorTextCtrl = (function (_super) {
    __extends(TemplateVisitorTextCtrl, _super);
    function TemplateVisitorTextCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasI18n = false;
        _this.nestedElements = [];
        _this.visited = new Set();
        return _this;
    }
    TemplateVisitorTextCtrl.prototype.getCheckOption = function () {
        return OPTION_CHECK_TEXT;
    };
    TemplateVisitorTextCtrl.prototype.visitBoundText = function (text, context) {
        this.validateBoundText(text, context);
        _super.prototype.visitBoundText.call(this, text, context);
    };
    TemplateVisitorTextCtrl.prototype.visitElement = function (element, context) {
        var originalI18n = this.hasI18n;
        this.hasI18n = originalI18n || element.attrs.some(function (e) { return e.name === 'i18n'; });
        this.nestedElements.push(element.name);
        _super.prototype.visitElement.call(this, element, context);
        this.nestedElements.pop();
        this.hasI18n = originalI18n;
        _super.prototype.visitElement.call(this, element, context);
    };
    TemplateVisitorTextCtrl.prototype.visitText = function (text, context) {
        this.validateText(text, context);
        _super.prototype.visitText.call(this, text, context);
    };
    TemplateVisitorTextCtrl.prototype.validateBoundText = function (text, context) {
        if (this.visited.has(text))
            return;
        this.visited.add(text);
        var value = text.value;
        if (!(value instanceof compiler_1.ASTWithSource) || !(value.ast instanceof compiler_1.Interpolation) || this.hasI18n) {
            return;
        }
        var isTextEmpty = !value.ast.strings.some(function (s) { return /\w+/.test(s); });
        if (isTextEmpty)
            return;
        generateFailure({ ast: text, context: context, message: Rule.FAILURE_STRING_TEXT });
    };
    TemplateVisitorTextCtrl.prototype.validateText = function (text, context) {
        if (this.visited.has(text))
            return;
        this.visited.add(text);
        var isTextEmpty = text.value.trim().length === 0;
        if (isTextEmpty || (this.hasI18n && this.nestedElements.length > 0))
            return;
        generateFailure({ ast: text, context: context, message: Rule.FAILURE_STRING_TEXT });
    };
    return TemplateVisitorTextCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visitors = [
            new TemplateVisitorAttrCtrl(_this.getSourceFile(), _this.getOptions(), _this.context, _this.templateStart),
            new TemplateVisitorTextCtrl(_this.getSourceFile(), _this.getOptions(), _this.context, _this.templateStart)
        ];
        return _this;
    }
    TemplateVisitorCtrl.prototype.visit = function (node, context) {
        _super.prototype.visit.call(this, node, context);
    };
    TemplateVisitorCtrl.prototype.visitAttr = function (ast, context) {
        this.validateAttr(ast);
        _super.prototype.visitAttr.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.visitBoundText = function (text, context) {
        this.validateBoundText(text);
        _super.prototype.visitBoundText.call(this, text, context);
    };
    TemplateVisitorCtrl.prototype.visitElement = function (element, context) {
        this.validateElement(element);
        _super.prototype.visitElement.call(this, element, context);
    };
    TemplateVisitorCtrl.prototype.visitText = function (text, context) {
        this.validateText(text);
        _super.prototype.visitText.call(this, text, context);
    };
    TemplateVisitorCtrl.prototype.validateAttr = function (ast) {
        var _this = this;
        var options = this.getOptions();
        this.visitors
            .filter(function (v) { return options.indexOf(v.getCheckOption()) !== -1; })
            .map(function (v) { return v.visitAttr(ast, _this); })
            .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
            .forEach(function (f) {
            return _this.addFailureFromStartToEnd(f.getStartPosition().getPosition(), f.getEndPosition().getPosition(), f.getFailure(), f.getFix());
        });
    };
    TemplateVisitorCtrl.prototype.validateBoundText = function (text) {
        var _this = this;
        var options = this.getOptions();
        this.visitors
            .filter(function (v) { return options.indexOf(v.getCheckOption()) !== -1; })
            .map(function (v) { return v.visitBoundText(text, _this); })
            .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
            .forEach(function (f) {
            return _this.addFailureFromStartToEnd(f.getStartPosition().getPosition(), f.getEndPosition().getPosition(), f.getFailure(), f.getFix());
        });
    };
    TemplateVisitorCtrl.prototype.validateElement = function (element) {
        var _this = this;
        var options = this.getOptions();
        this.visitors
            .filter(function (v) { return options.indexOf(v.getCheckOption()) !== -1; })
            .map(function (v) { return v.visitElement(element, _this); })
            .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
            .forEach(function (f) {
            return _this.addFailureFromStartToEnd(f.getStartPosition().getPosition(), f.getEndPosition().getPosition(), f.getFailure(), f.getFix());
        });
    };
    TemplateVisitorCtrl.prototype.validateText = function (text) {
        var _this = this;
        var options = this.getOptions();
        this.visitors
            .filter(function (v) { return options.indexOf(v.getCheckOption()) !== -1; })
            .map(function (v) { return v.visitText(text, _this); })
            .filter(isNotNullOrUndefined_1.isNotNullOrUndefined)
            .forEach(function (f) {
            return _this.addFailureFromStartToEnd(f.getStartPosition().getPosition(), f.getEndPosition().getPosition(), f.getFailure(), f.getFix());
        });
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var templateObject_1;
