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
        ruleName: 'no-document-domain',
        type: 'maintainability',
        description: 'Do not write to document.domain. Scripts setting document.domain to any value should be ' +
            'validated to ensure that the value is on a list of allowed sites.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security'
    };
    Rule.FAILURE_STRING = 'Forbidden write to document.domain: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isBinaryExpression(node) &&
            node.operatorToken.getText() === '=' &&
            tsutils.isPropertyAccessExpression(node.left) &&
            isDocumentDomainProperty(node.left)) {
            var msg = Rule.FAILURE_STRING + node.getFullText().trim();
            ctx.addFailureAt(node.getStart(), node.getWidth(), msg);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    function isDocumentDomainProperty(node) {
        if (node.name.text !== 'domain') {
            return false;
        }
        return node.expression.getText() === 'document' || node.expression.getText() === 'window.document';
    }
}
//# sourceMappingURL=noDocumentDomainRule.js.map