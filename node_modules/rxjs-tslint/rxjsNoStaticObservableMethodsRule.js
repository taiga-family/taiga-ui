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
var Lint = require("tslint");
var tsutils = require("tsutils");
var ts = require("typescript");
var utils_1 = require("./utils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        var _this = this;
        var failure = this.applyWithFunction(sourceFile, function (ctx) { return _this.walk(ctx, program); });
        return failure;
    };
    Rule.prototype.walk = function (ctx, program) {
        this.removePatchedOperatorImports(ctx);
        var sourceFile = ctx.sourceFile;
        var typeChecker = program.getTypeChecker();
        var insertionStart = utils_1.computeInsertionIndexForImports(sourceFile);
        var rxjsOperatorImports = new Set(Array.from(findImportedRxjsOperators(sourceFile)).map(function (o) { return OPERATOR_WITH_ALIAS_MAP[o]; }));
        function checkPatchableOperatorUsage(node) {
            if (!isRxjsStaticOperatorCallExpression(node, typeChecker)) {
                return ts.forEachChild(node, checkPatchableOperatorUsage);
            }
            var callExpr = node;
            if (!tsutils.isPropertyAccessExpression(callExpr.expression)) {
                return ts.forEachChild(node, checkPatchableOperatorUsage);
            }
            var propAccess = callExpr.expression;
            var name = propAccess.name.getText(sourceFile);
            var operatorName = OPERATOR_RENAMES[name] || name;
            var start = propAccess.getStart(sourceFile);
            var end = propAccess.getEnd();
            var operatorsToImport = new Set([OPERATOR_WITH_ALIAS_MAP[operatorName]]);
            var operatorsToAdd = utils_1.subtractSets(operatorsToImport, rxjsOperatorImports);
            var imports = createImportReplacements(operatorsToAdd, insertionStart);
            rxjsOperatorImports = utils_1.concatSets(rxjsOperatorImports, operatorsToAdd);
            ctx.addFailure(start, end, Rule.OBSERVABLE_FAILURE_STRING, [Lint.Replacement.replaceFromTo(start, end, operatorAlias(operatorName))].concat(imports));
            return ts.forEachChild(node, checkPatchableOperatorUsage);
        }
        return ts.forEachChild(ctx.sourceFile, checkPatchableOperatorUsage);
    };
    Rule.prototype.removePatchedOperatorImports = function (ctx) {
        var sourceFile = ctx.sourceFile;
        for (var _i = 0, _a = sourceFile.statements.filter(tsutils.isImportDeclaration); _i < _a.length; _i++) {
            var importStatement = _a[_i];
            var moduleSpecifier = importStatement.moduleSpecifier.getText();
            if (!moduleSpecifier.startsWith("'rxjs/add/observable/")) {
                continue;
            }
            var importStatementStart = importStatement.getStart(sourceFile);
            var importStatementEnd = importStatement.getEnd();
            ctx.addFailure(importStatementStart, importStatementEnd, Rule.IMPORT_FAILURE_STRING, Lint.Replacement.deleteFromTo(importStatementStart, importStatementEnd));
        }
    };
    Rule.metadata = {
        ruleName: 'rxjs-no-static-observable-methods',
        description: 'Updates the static methods of the Observable class.',
        optionsDescription: '',
        options: null,
        typescriptOnly: true,
        type: 'functionality'
    };
    Rule.IMPORT_FAILURE_STRING = 'prefer operator imports with no side-effects';
    Rule.OBSERVABLE_FAILURE_STRING = 'prefer function calls';
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
function isRxjsStaticOperator(node) {
    return 'Observable' === node.expression.getText() && RXJS_OPERATORS.has(node.name.getText());
}
function isRxjsStaticOperatorCallExpression(node, typeChecker) {
    if (!tsutils.isCallExpression(node)) {
        return false;
    }
    if (!tsutils.isPropertyAccessExpression(node.expression)) {
        return false;
    }
    if (!isRxjsStaticOperator(node.expression)) {
        return false;
    }
    if (!utils_1.returnsObservable(node, typeChecker)) {
        return false;
    }
    return true;
}
function findImportedRxjsOperators(sourceFile) {
    return new Set(sourceFile.statements.filter(tsutils.isImportDeclaration).reduce(function (current, decl) {
        if (!decl.importClause) {
            return current;
        }
        if (!decl.moduleSpecifier.getText().startsWith("'rxjs'")) {
            return current;
        }
        if (!decl.importClause.namedBindings) {
            return current;
        }
        var bindings = decl.importClause.namedBindings;
        if (ts.isNamedImports(bindings)) {
            return current.concat((Array.from(bindings.elements) || []).map(function (element) {
                return element.name.getText();
            }));
        }
        return current;
    }, []));
}
function operatorAlias(operator) {
    return 'observable' + operator[0].toUpperCase() + operator.substring(1, operator.length);
}
function createImportReplacements(operatorsToAdd, startIndex) {
    return Array.from(operatorsToAdd.values()).slice().map(function (tuple) {
        return Lint.Replacement.appendText(startIndex, "\nimport {" + tuple.operator + " as " + tuple.alias + "} from 'rxjs';\n");
    });
}
var RXJS_OPERATORS = new Set([
    'bindCallback',
    'bindNodeCallback',
    'combineLatest',
    'concat',
    'defer',
    'empty',
    'forkJoin',
    'from',
    'fromEvent',
    'fromEventPattern',
    'fromPromise',
    'generate',
    'if',
    'interval',
    'merge',
    'never',
    'of',
    'onErrorResumeNext',
    'pairs',
    'rase',
    'range',
    'throw',
    'timer',
    'using',
    'zip'
]);
var OPERATOR_RENAMES = {
    throw: 'throwError',
    if: 'iif',
    fromPromise: 'from'
};
var OPERATOR_WITH_ALIAS_MAP = Array.from(RXJS_OPERATORS).reduce(function (a, o) {
    var operatorName = OPERATOR_RENAMES[o] || o;
    a[operatorName] = {
        operator: operatorName,
        alias: operatorAlias(operatorName)
    };
    return a;
}, {});
