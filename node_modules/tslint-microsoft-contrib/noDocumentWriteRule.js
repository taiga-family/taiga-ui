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
var AstUtils_1 = require("./utils/AstUtils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-document-write',
        type: 'maintainability',
        description: 'Do not use document.write',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '79, 85'
    };
    Rule.WRITE_FAILURE = 'Forbidden call to document.write';
    Rule.WRITELN_FAILURE = 'Forbidden call to document.writeln';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isCallExpression(node)) {
            var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
            if (functionTarget === 'document' || functionTarget === 'window.document') {
                if (node.arguments.length === 1) {
                    var functionName = AstUtils_1.AstUtils.getFunctionName(node);
                    if (functionName === 'write') {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.WRITE_FAILURE);
                    }
                    else if (functionName === 'writeln') {
                        ctx.addFailureAt(node.getStart(), node.getWidth(), Rule.WRITELN_FAILURE);
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noDocumentWriteRule.js.map