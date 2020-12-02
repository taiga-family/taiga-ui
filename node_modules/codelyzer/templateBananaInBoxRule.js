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
var tslint_1 = require("tslint");
var rules_1 = require("tslint/lib/rules");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var INVALID_PATTERN = /\[(.*)\]/;
var VALID_CLOSE_BOX = ')]';
var VALID_OPEN_BOX = '[(';
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
        description: 'Ensures that the two-way data binding syntax is correct.',
        hasFix: true,
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'The parentheses "()" should have been inside the brackets "[]".',
        ruleName: 'template-banana-in-box',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Invalid binding syntax. Use [(expr)] instead';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitEvent = function (ast, context) {
        this.validateEvent(ast);
        _super.prototype.visitEvent.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.validateEvent = function (ast) {
        var matches = ast.name.match(INVALID_PATTERN);
        if (!matches)
            return;
        var _a = ast.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        var text = matches[1];
        var absoluteStartPosition = this.getSourcePosition(startOffset);
        var absoluteEndPosition = absoluteStartPosition + VALID_OPEN_BOX.length + text.length + VALID_CLOSE_BOX.length;
        var newText = "" + VALID_OPEN_BOX + text + VALID_CLOSE_BOX;
        var fix = tslint_1.Replacement.replaceFromTo(absoluteStartPosition, absoluteEndPosition, newText);
        this.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING, fix);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
