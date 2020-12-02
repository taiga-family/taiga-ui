"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'missing-optional-annotation',
        type: 'maintainability',
        description: 'Deprecated - This rule is now enforced by the TypeScript compiler',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Deprecated',
        recommendation: 'false'
    };
    Rule.FAILURE_STRING = 'Argument following optional argument missing optional annotation: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isMethodDeclaration(node) ||
            tsutils.isConstructorDeclaration(node) ||
            tsutils.isArrowFunction(node) ||
            tsutils.isFunctionDeclaration(node) ||
            tsutils.isFunctionExpression(node)) {
            validateParameters(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function validateParameters(node) {
        var optionalParameterFound = false;
        if (node.parameters === undefined) {
            return;
        }
        node.parameters.forEach(function (parameter) {
            if (parameter.questionToken !== undefined || parameter.initializer !== undefined) {
                optionalParameterFound = true;
            }
            else if (optionalParameterFound && parameter.initializer === undefined) {
                var msg = Rule.FAILURE_STRING + parameter.getFullText();
                ctx.addFailureAt(parameter.name.getStart(), parameter.name.getWidth(), msg);
            }
        });
    }
}
//# sourceMappingURL=missingOptionalAnnotationRule.js.map