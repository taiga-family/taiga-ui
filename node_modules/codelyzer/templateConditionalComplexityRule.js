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
var compiler_1 = require("@angular/compiler");
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
    Rule.prototype.isEnabled = function () {
        var _a = Rule.metadata.options, maxLength = _a.maxLength, minLength = _a.minLength;
        var _b = this.ruleArguments, length = _b.length, maxComplexity = _b[0];
        return _super.prototype.isEnabled.call(this) && length >= minLength && length <= maxLength && (maxComplexity === undefined || maxComplexity > 0);
    };
    Rule.metadata = {
        description: "The condition complexity shouldn't exceed a rational limit in a template.",
        optionExamples: [true, [true, 4]],
        options: {
            items: {
                type: 'string'
            },
            maxLength: 1,
            minLength: 0,
            type: 'array'
        },
        optionsDescription: 'Determine the maximum number of Boolean operators allowed.',
        rationale: 'An important complexity complicates the tests and the maintenance.',
        ruleName: 'template-conditional-complexity',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.DEFAULT_MAX_COMPLEXITY = 3;
    Rule.FAILURE_STRING = "The condition complexity (cost '%s') exceeded the defined limit (cost '%s'). The conditional expression should be moved into the component.";
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
exports.getFailureMessage = function (totalComplexity, maxComplexity) {
    if (maxComplexity === void 0) { maxComplexity = Rule.DEFAULT_MAX_COMPLEXITY; }
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, totalComplexity, maxComplexity);
};
var getTotalComplexity = function (ast) {
    var expr = (ast.source || '').replace(/\s/g, '');
    var expressionParser = new compiler_1.Parser(new compiler_1.Lexer());
    var astWithSource = expressionParser.parseAction(expr, null, 0);
    var conditions = [];
    var totalComplexity = 0;
    var condition = astWithSource.ast;
    if (condition.operation) {
        totalComplexity++;
        conditions.push(condition);
    }
    while (conditions.length > 0) {
        condition = conditions.pop();
        if (!condition.operation) {
            continue;
        }
        if (condition.left instanceof compiler_1.Binary) {
            totalComplexity++;
            conditions.push(condition.left);
        }
        if (condition.right instanceof compiler_1.Binary) {
            conditions.push(condition.right);
        }
    }
    return totalComplexity;
};
var TemplateVisitorCtrl = (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitDirectiveProperty = function (prop, context) {
        this.validateDirective(prop);
        _super.prototype.visitDirectiveProperty.call(this, prop, context);
    };
    TemplateVisitorCtrl.prototype.validateDirective = function (prop) {
        var templateName = prop.templateName, value = prop.value;
        if (templateName !== 'ngIf') {
            return;
        }
        var maxComplexity = this.getOptions()[0] || Rule.DEFAULT_MAX_COMPLEXITY;
        var totalComplexity = getTotalComplexity(value);
        if (totalComplexity <= maxComplexity) {
            return;
        }
        var _a = prop.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, exports.getFailureMessage(totalComplexity, maxComplexity));
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
