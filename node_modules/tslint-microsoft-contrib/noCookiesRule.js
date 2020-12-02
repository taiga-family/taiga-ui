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
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithFunction(sourceFile, walk, undefined, program);
    };
    Rule.metadata = {
        ruleName: 'no-cookies',
        type: 'maintainability',
        description: 'Do not use cookies',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '315, 539, 565, 614'
    };
    Rule.FAILURE_STRING = 'Forbidden call to document.cookie';
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
function walk(ctx, program) {
    var typeChecker = program.getTypeChecker();
    function cb(node) {
        if (tsutils.isPropertyAccessExpression(node)) {
            var propertyName = node.name.text;
            if (propertyName === 'cookie') {
                var leftSide = node.expression;
                try {
                    var leftSideType = typeChecker.getTypeAtLocation(leftSide);
                    var typeAsString = typeChecker.typeToString(leftSideType);
                    if (leftSideType.flags === ts.TypeFlags.Any || typeAsString === 'Document') {
                        ctx.addFailureAt(leftSide.getStart(), leftSide.getWidth(), Rule.FAILURE_STRING);
                    }
                }
                catch (e) {
                    if (leftSide.getFullText().trim() === 'document') {
                        ctx.addFailureAt(leftSide.getStart(), leftSide.getWidth(), Rule.FAILURE_STRING);
                    }
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noCookiesRule.js.map