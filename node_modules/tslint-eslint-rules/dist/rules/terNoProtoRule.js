"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-no-proto';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.FAILURE_STRING = 'The `__proto__` property is deprecated.';
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'disallow the use of `__proto__` property',
        rationale: '`__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn’t be used in the code. Use getPrototypeOf method instead.',
        optionsDescription: '',
        options: {},
        optionExamples: [Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      \"", "\": true\n      "], ["\n      \"", "\": true\n      "])), RULE_NAME)],
        typescriptOnly: false,
        type: 'functionality'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, cb);
    function cb(node) {
        if ((node.kind === ts.SyntaxKind.Identifier &&
            node.text === '__proto__' &&
            node.parent &&
            node.parent.kind === ts.SyntaxKind.PropertyAccessExpression) ||
            (node.kind === ts.SyntaxKind.StringLiteral &&
                node.text === '__proto__')) {
            return ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
        return ts.forEachChild(node, cb);
    }
}
var templateObject_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3Rlck5vUHJvdG9SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFFL0IsSUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBRWpDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUFxQkEsQ0FBQztJQUhRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQW5CYSxtQkFBYyxHQUFHLHlDQUF5QyxDQUFDO0lBRTNELGFBQVEsR0FBdUI7UUFDM0MsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLEtBQUs7UUFDYixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFDUCxxSUFBcUk7UUFDdkksa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwyR0FBQSxZQUM3QixFQUFTLGtCQUNYLEtBREUsU0FBUyxFQUNWO1FBQ0osY0FBYyxFQUFFLEtBQUs7UUFDckIsSUFBSSxFQUFFLGVBQWU7S0FDdEIsQ0FBQztJQUtKLFdBQUM7Q0FyQkQsQUFxQkMsQ0FyQnlCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQXFCaEQ7QUFyQlksb0JBQUk7QUF1QmpCLFNBQVMsSUFBSSxDQUFDLEdBQTJCO0lBQ3ZDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLFNBQVMsRUFBRSxDQUFDLElBQWE7UUFDdkIsSUFDRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVO1lBQ3BDLElBQXNCLENBQUMsSUFBSSxLQUFLLFdBQVc7WUFDNUMsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO1lBQzlELENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWE7Z0JBQ3ZDLElBQXlCLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUNsRDtZQUNBLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7QUFDSCxDQUFDIiwiZmlsZSI6InJ1bGVzL3Rlck5vUHJvdG9SdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWxvcGV6L3RzbGludC1lc2xpbnQtcnVsZXMvc3JjIn0=
