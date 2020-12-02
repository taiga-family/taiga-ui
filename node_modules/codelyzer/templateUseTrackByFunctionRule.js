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
var rules_1 = require("tslint/lib/rules");
var ngWalker_1 = require("./angular/ngWalker");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var PATTERN = /trackBy\s*:|\[ngForTrackBy\]\s*=\s*['"].*['"]/;
var currentOffset = 0;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        currentOffset = 0;
        var walkerConfig = { templateVisitorCtrl: TemplateVisitorCtrl };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: 'Ensures trackBy function is used.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: "The use of 'trackBy' is considered a good practice.",
        ruleName: 'template-use-track-by-function',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Missing trackBy function in ngFor directive';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var TemplateUseTrackByFunctionVisitor = (function (_super) {
    __extends(TemplateUseTrackByFunctionVisitor, _super);
    function TemplateUseTrackByFunctionVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateUseTrackByFunctionVisitor.prototype.visitDirectiveProperty = function (prop, context) {
        this.validateDirective(prop, context);
        _super.prototype.visitDirectiveProperty.call(this, prop, context);
    };
    TemplateUseTrackByFunctionVisitor.prototype.validateDirective = function (prop, context) {
        var templateName = prop.templateName;
        if (templateName !== 'ngForOf')
            return;
        var _a = prop.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        if (PATTERN.test((context.codeWithMap.source || '').substr(currentOffset))) {
            currentOffset = endOffset;
            return;
        }
        context.addFailureFromStartToEnd(startOffset, endOffset, Rule.FAILURE_STRING);
    };
    return TemplateUseTrackByFunctionVisitor;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visitors = new Set([
            new TemplateUseTrackByFunctionVisitor(_this.getSourceFile(), _this.getOptions(), _this.context, _this.templateStart)
        ]);
        return _this;
    }
    TemplateVisitorCtrl.prototype.visitDirectiveProperty = function (prop, context) {
        var _this = this;
        this.visitors.forEach(function (visitor) { return visitor.visitDirectiveProperty(prop, _this); });
        _super.prototype.visitDirectiveProperty.call(this, prop, context);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
