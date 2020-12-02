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
        return this.applyWithFunction(sourceFile, function (ctx) { return _this.walk(ctx, program); });
    };
    Rule.prototype.walk = function (ctx, program) {
        this.removePatchedOperatorImports(ctx);
        var sourceFile = ctx.sourceFile;
        var typeChecker = program.getTypeChecker();
        var insertionStart = utils_1.computeInsertionIndexForImports(sourceFile);
        var rxjsOperatorImports = findImportedRxjsOperators(sourceFile);
        function checkPatchableOperatorUsage(node) {
            if (!isRxjsInstanceOperatorCallExpression(node, typeChecker)) {
                return ts.forEachChild(node, checkPatchableOperatorUsage);
            }
            var immediateParent = node.expression;
            var preceedingNode = immediateParent.expression;
            if (isRxjsInstanceOperatorCallExpression(preceedingNode, typeChecker)) {
                return ts.forEachChild(node, checkPatchableOperatorUsage);
            }
            if (tsutils.isCallExpression(preceedingNode) || tsutils.isNewExpression(preceedingNode)) {
                if (!utils_1.returnsObservable(preceedingNode, typeChecker)) {
                    return ts.forEachChild(node, checkPatchableOperatorUsage);
                }
            }
            else if (!utils_1.isObservable(typeChecker.getTypeAtLocation(preceedingNode), typeChecker)) {
                return ts.forEachChild(node, checkPatchableOperatorUsage);
            }
            var failureStart = immediateParent.getStart(sourceFile) + immediateParent.getText(sourceFile).lastIndexOf('.');
            var lastNode = findLastObservableExpression(preceedingNode, typeChecker);
            var failureEnd = lastNode.getEnd();
            var pipeReplacement = Lint.Replacement.appendText(preceedingNode.getEnd(), '.pipe(');
            var operatorsToImport = new Set();
            var operatorReplacements = replaceWithPipeableOperators(preceedingNode, lastNode, operatorsToImport);
            var operatorsToAdd = utils_1.subtractSets(operatorsToImport, rxjsOperatorImports);
            var importReplacements = createImportReplacements(operatorsToAdd, insertionStart);
            rxjsOperatorImports = utils_1.concatSets(rxjsOperatorImports, operatorsToAdd);
            var allReplacements = [pipeReplacement].concat(operatorReplacements, importReplacements);
            ctx.addFailure(failureStart, failureEnd, Rule.FAILURE_STRING, allReplacements);
            return ts.forEachChild(node, checkPatchableOperatorUsage);
        }
        return ts.forEachChild(ctx.sourceFile, checkPatchableOperatorUsage);
    };
    Rule.prototype.removePatchedOperatorImports = function (ctx) {
        var sourceFile = ctx.sourceFile;
        for (var _i = 0, _a = sourceFile.statements.filter(tsutils.isImportDeclaration); _i < _a.length; _i++) {
            var importStatement = _a[_i];
            var moduleSpecifier = importStatement.moduleSpecifier.getText();
            if (!moduleSpecifier.startsWith("'rxjs/operator/") && !moduleSpecifier.startsWith("'rxjs/add/operator/")) {
                continue;
            }
            var importStatementStart = importStatement.getStart(sourceFile);
            var importStatementEnd = importStatement.getEnd();
            ctx.addFailure(importStatementStart, importStatementEnd, Rule.FAILURE_STRING, Lint.Replacement.deleteFromTo(importStatementStart, importStatementEnd));
        }
    };
    Rule.metadata = {
        ruleName: 'rxjs-pipeable-operators-only',
        description: "Pipeable operators offer a new way of composing observable chains and\n        they have advantages for both application developers and library\n        authors.",
        optionsDescription: '',
        options: null,
        typescriptOnly: true,
        type: 'functionality'
    };
    Rule.FAILURE_STRING = 'prefer pipeable operators.';
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
function isRxjsInstanceOperator(node) {
    return 'Observable' !== node.expression.getText() && RXJS_OPERATORS.has(node.name.getText());
}
function isRxjsInstanceOperatorCallExpression(node, typeChecker) {
    if (!tsutils.isCallExpression(node)) {
        return false;
    }
    if (!tsutils.isPropertyAccessExpression(node.expression)) {
        return false;
    }
    if (!isRxjsInstanceOperator(node.expression)) {
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
        if (!decl.moduleSpecifier.getText().startsWith("'rxjs/operators")) {
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
function createImportReplacements(operatorsToAdd, startIndex) {
    return Array.from(operatorsToAdd.values()).slice().map(function (operator) {
        return Lint.Replacement.appendText(startIndex, "\nimport {" + operator + "} from 'rxjs/operators/" + operator + "';\n");
    });
}
function findLastObservableExpression(node, typeChecker) {
    var currentNode = node;
    while (isAncestorRxjsOperatorCall(currentNode, typeChecker)) {
        currentNode = currentNode.parent.parent;
    }
    return currentNode;
}
function isAncestorRxjsOperatorCall(node, typeChecker) {
    if (!node.parent) {
        return false;
    }
    if (ts.isArrowFunction(node.parent)) {
        return false;
    }
    if (!node.parent.parent) {
        return false;
    }
    return isRxjsInstanceOperatorCallExpression(node.parent.parent, typeChecker);
}
function replaceWithPipeableOperators(currentNode, lastNode, operatorsToImport, notStart) {
    if (notStart === void 0) { notStart = false; }
    if (!currentNode.parent || !currentNode.parent.parent) {
        return [];
    }
    var immediateParent = currentNode.parent;
    var immediateParentText = immediateParent.getText();
    var identifierStart = immediateParentText.lastIndexOf('.');
    var identifierText = immediateParentText.slice(identifierStart + 1);
    var pipeableOperator = PIPEABLE_OPERATOR_MAPPING[identifierText];
    if (pipeableOperator === undefined) {
        pipeableOperator = identifierText;
    }
    if (identifierText !== 'let') {
        operatorsToImport.add(pipeableOperator);
    }
    var operatorReplacement = Lint.Replacement.replaceFromTo(immediateParent.getEnd() - identifierText.length - 1, immediateParent.getEnd(), pipeableOperator);
    var parentNode = currentNode.parent.parent;
    var moreReplacements = parentNode === lastNode
        ? [Lint.Replacement.appendText(parentNode.getEnd(), notStart ? ',)' : ')')]
        : replaceWithPipeableOperators(parentNode, lastNode, operatorsToImport, true);
    var separatorReplacements = notStart ? [Lint.Replacement.appendText(currentNode.getEnd(), ',')] : [];
    return [operatorReplacement].concat(separatorReplacements, moreReplacements);
}
var RXJS_OPERATORS = new Set([
    'audit',
    'auditTime',
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferToggle',
    'bufferWhen',
    'catchError',
    'combineAll',
    'combineLatest',
    'concat',
    'concatAll',
    'concatMap',
    'concatMapTo',
    'count',
    'debounce',
    'debounceTime',
    'defaultIfEmpty',
    'delay',
    'delayWhen',
    'dematerialize',
    'distinct',
    'distinctUntilChanged',
    'distinctUntilKeyChanged',
    'elementAt',
    'every',
    'exhaust',
    'exhaustMap',
    'expand',
    'filter',
    'finalize',
    'find',
    'findIndex',
    'first',
    'groupBy',
    'ignoreElements',
    'isEmpty',
    'last',
    'map',
    'mapTo',
    'materialize',
    'max',
    'merge',
    'mergeAll',
    'mergeMap',
    'mergeMapTo',
    'mergeScan',
    'min',
    'multicast',
    'observeOn',
    'onErrorResumeNext',
    'pairwise',
    'partition',
    'pluck',
    'publish',
    'publishBehavior',
    'publishLast',
    'publishReplay',
    'race',
    'reduce',
    'refCount',
    'repeat',
    'repeatWhen',
    'retry',
    'retryWhen',
    'sample',
    'sampleTime',
    'scan',
    'sequenceEqual',
    'share',
    'shareReplay',
    'single',
    'skip',
    'skipLast',
    'skipUntil',
    'skipWhile',
    'startWith',
    'subscribeOn',
    'switchAll',
    'switchMap',
    'switchMapTo',
    'take',
    'takeLast',
    'takeUntil',
    'takeWhile',
    'tap',
    'throttle',
    'throttleTime',
    'timeInterval',
    'timeout',
    'timeoutWith',
    'timestamp',
    'toArray',
    'window',
    'windowCount',
    'windowTime',
    'windowToggle',
    'windowWhen',
    'withLatestFrom',
    'zip',
    'zipAll',
    'do',
    'catch',
    'flatMap',
    'flatMapTo',
    'finally',
    'switch',
    'let'
]);
var PIPEABLE_OPERATOR_MAPPING = {
    let: '',
    do: 'tap',
    catch: 'catchError',
    flatMap: 'mergeMap',
    flatMapTo: 'mergeMapTo',
    finally: 'finalize',
    switch: 'switchAll'
};
