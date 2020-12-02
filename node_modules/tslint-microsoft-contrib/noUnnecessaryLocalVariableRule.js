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
var FAILURE_STRING = 'Unnecessary local variable: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-unnecessary-local-variable',
        type: 'maintainability',
        description: 'Do not declare a variable only to return it from the function on the next line.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '563, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var variableUsages = tsutils.collectVariableUsage(ctx.sourceFile);
    function validateStatementArray(statements) {
        if (statements === undefined || statements.length < 2) {
            return;
        }
        var lastStatement = statements[statements.length - 1];
        var nextToLastStatement = statements[statements.length - 2];
        var returnedVariableName = tryToGetReturnedVariableName(lastStatement);
        var declaredVariableIdentifier = tryToGetDeclaredVariable(nextToLastStatement);
        if (declaredVariableIdentifier === undefined) {
            return;
        }
        var declaredVariableName = declaredVariableIdentifier.text;
        if (returnedVariableName !== undefined &&
            declaredVariableName !== undefined &&
            returnedVariableName === declaredVariableName &&
            variableIsOnlyUsedOnce(declaredVariableIdentifier)) {
            ctx.addFailureAt(nextToLastStatement.getStart(), nextToLastStatement.getWidth(), FAILURE_STRING + returnedVariableName);
        }
    }
    function tryToGetDeclaredVariable(statement) {
        if (statement !== undefined && tsutils.isVariableStatement(statement)) {
            if (statement.declarationList.declarations.length === 1) {
                var declaration = statement.declarationList.declarations[0];
                if (declaration.name && tsutils.isIdentifier(declaration.name)) {
                    return declaration.name;
                }
            }
        }
        return undefined;
    }
    function tryToGetReturnedVariableName(statement) {
        if (statement !== undefined && tsutils.isReturnStatement(statement)) {
            if (statement.expression && tsutils.isIdentifier(statement.expression)) {
                return statement.expression.text;
            }
        }
        return undefined;
    }
    function variableIsOnlyUsedOnce(declaredVariableIdentifier) {
        var usage = variableUsages.get(declaredVariableIdentifier);
        return usage !== undefined && usage.uses.length === 1;
    }
    function cb(node) {
        if (tsutils.isBlock(node) || tsutils.isSourceFile(node) || tsutils.isCaseClause(node) || tsutils.isDefaultClause(node)) {
            validateStatementArray(node.statements);
        }
        if (tsutils.isModuleDeclaration(node)) {
            if (node.body && tsutils.isModuleBlock(node.body)) {
                validateStatementArray(node.body.statements);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnnecessaryLocalVariableRule.js.map