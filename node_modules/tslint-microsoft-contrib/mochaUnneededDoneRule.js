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
var Utils_1 = require("./utils/Utils");
var MochaUtils_1 = require("./utils/MochaUtils");
var FAILURE_STRING = 'Unneeded Mocha Done. Parameter can be safely removed: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'mocha-unneeded-done',
        type: 'maintainability',
        description: 'A function declares a MochaDone parameter but only resolves it synchronously in the main function.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function validateMochaDoneUsage(node) {
        var doneIdentifier = maybeGetMochaDoneParameter(node);
        if (doneIdentifier === undefined) {
            return;
        }
        if (!isIdentifierInvokedDirectlyInBody(doneIdentifier, node)) {
            return;
        }
        var count = getReferenceCount(doneIdentifier, node.body);
        if (count === 1) {
            ctx.addFailureAt(doneIdentifier.getStart(), doneIdentifier.getWidth(), FAILURE_STRING + doneIdentifier.getText());
        }
    }
    function isIdentifierInvokedDirectlyInBody(doneIdentifier, node) {
        if (node.body === undefined || node.body.kind !== ts.SyntaxKind.Block) {
            return false;
        }
        var block = node.body;
        return Utils_1.Utils.exists(block.statements, function (statement) {
            if (statement.kind === ts.SyntaxKind.ExpressionStatement) {
                var expression = statement.expression;
                if (expression.kind === ts.SyntaxKind.CallExpression) {
                    var leftHandSideExpression = expression.expression;
                    return leftHandSideExpression.getText() === doneIdentifier.getText();
                }
            }
            return false;
        });
    }
    function maybeGetMochaDoneParameter(node) {
        if (node.parameters.length === 0) {
            return undefined;
        }
        var allDones = node.parameters.filter(function (parameter) {
            if (parameter.type !== undefined && parameter.type.getText() === 'MochaDone') {
                return true;
            }
            return parameter.name.getText() === 'done';
        });
        if (allDones.length === 0 || allDones[0].name.kind !== ts.SyntaxKind.Identifier) {
            return undefined;
        }
        return allDones[0].name;
    }
    function cb(node) {
        if (tsutils.isArrowFunction(node) || tsutils.isFunctionExpression(node)) {
            validateMochaDoneUsage(node);
        }
        return ts.forEachChild(node, cb);
    }
    if (MochaUtils_1.MochaUtils.isMochaTest(ctx.sourceFile)) {
        ts.forEachChild(ctx.sourceFile, cb);
    }
}
function getReferenceCount(identifier, body) {
    var count = 0;
    var identifierText = identifier.getText();
    function cb(node) {
        if (tsutils.isIdentifier(node)) {
            if (node.getText() === identifierText) {
                count += 1;
            }
        }
        ts.forEachChild(node, cb);
    }
    body.statements.forEach(cb);
    return count;
}
//# sourceMappingURL=mochaUnneededDoneRule.js.map