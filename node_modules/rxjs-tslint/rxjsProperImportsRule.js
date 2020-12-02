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
var ts = require("typescript");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new UpdateOutdatedImportsWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'rxjs-proper-imports',
        type: 'functionality',
        description: 'Updates the paths of the rxjs imports to the version 6',
        rationale: 'RxJS version 6 updated their API which requires changes in some of the import paths.',
        options: null,
        optionsDescription: 'Not configurable.',
        typescriptOnly: true
    };
    Rule.RuleFailure = 'outdated import path';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var UpdateOutdatedImportsWalker = (function (_super) {
    __extends(UpdateOutdatedImportsWalker, _super);
    function UpdateOutdatedImportsWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateOutdatedImportsWalker.prototype.visitImportDeclaration = function (node) {
        var _this = this;
        if (ts.isStringLiteral(node.moduleSpecifier) && node.importClause) {
            var specifier = node.moduleSpecifier;
            var path_1 = specifier.text;
            var start = specifier.getStart() + 1;
            var end = specifier.text.length;
            var replacementStart = start;
            var replacementEnd = specifier.text.length;
            var replacement = null;
            ImportReplacements.forEach(function (r) { return (r.path === path_1 ? _this._migrateExportedSymbols(r, node) : void 0); });
            if (ImportMap.has(path_1)) {
                replacement = ImportMap.get(path_1);
            }
            else if (OperatorsPathRe.test(path_1)) {
                replacement = NewOperatorsPath;
            }
            if (replacement !== null) {
                return this.addFailureAt(start, end, Rule.RuleFailure, this.createReplacement(replacementStart, replacementEnd, replacement));
            }
        }
    };
    UpdateOutdatedImportsWalker.prototype._migrateExportedSymbols = function (re, node) {
        var _this = this;
        var importClause = node.importClause;
        var bindings = importClause.namedBindings;
        if (!bindings || bindings.kind !== ts.SyntaxKind.NamedImports) {
            return;
        }
        bindings.elements.forEach(function (e) {
            if (!e || e.kind !== ts.SyntaxKind.ImportSpecifier) {
                return;
            }
            var toReplace = e.name;
            var replacement = re.newSymbol + " as " + re.symbol;
            if (e.propertyName) {
                toReplace = e.propertyName;
                replacement = re.newSymbol;
            }
            if (toReplace.getText() !== re.symbol) {
                return;
            }
            return _this.addFailureAt(toReplace.getStart(), toReplace.getWidth(), 'imported symbol no longer exists', _this.createReplacement(toReplace.getStart(), toReplace.getWidth(), replacement));
        });
    };
    return UpdateOutdatedImportsWalker;
}(Lint.RuleWalker));
var ImportMap = new Map([
    ['rxjs/util/', 'rxjs/internal/util/'],
    ['rxjs/util/pipe', 'rxjs'],
    ['rxjs/util/noop', 'rxjs'],
    ['rxjs/util/identity', 'rxjs'],
    ['rxjs/util/ArgumentOutOfRangeError', 'rxjs'],
    ['rxjs/util/EmptyError', 'rxjs'],
    ['rxjs/util/ObjectUnsubscribedError', 'rxjs'],
    ['rxjs/util/UnsubscriptionError', 'rxjs'],
    ['rxjs/util/TimeoutError', 'rxjs'],
    ['rxjs/testing/', 'rxjs/internal/testing/'],
    ['rxjs/scheduler/', 'rxjs/internal/scheduler/'],
    ['rxjs/interfaces', 'rxjs'],
    ['rxjs/AsyncSubject', 'rxjs'],
    ['rxjs/BehaviorSubject', 'rxjs'],
    ['rxjs/Notification', 'rxjs'],
    ['rxjs/Observable', 'rxjs'],
    ['rxjs/Observer', 'rxjs'],
    ['rxjs/Operator', 'rxjs'],
    ['rxjs/ReplaySubject', 'rxjs'],
    ['rxjs/Rx', 'rxjs'],
    ['rxjs/Subject', 'rxjs'],
    ['rxjs/Subscriber', 'rxjs'],
    ['rxjs/Scheduler', 'rxjs'],
    ['rxjs/Subscription', 'rxjs'],
    ['rxjs/observable/bindCallback', 'rxjs'],
    ['rxjs/observable/combineLatest', 'rxjs'],
    ['rxjs/observable/concat', 'rxjs'],
    ['rxjs/observable/ConnectableObservable', 'rxjs'],
    ['rxjs/observable/defer', 'rxjs'],
    ['rxjs/observable/forkJoin', 'rxjs'],
    ['rxjs/observable/from', 'rxjs'],
    ['rxjs/observable/fromEvent', 'rxjs'],
    ['rxjs/observable/fromEventPattern', 'rxjs'],
    ['rxjs/observable/interval', 'rxjs'],
    ['rxjs/observable/merge', 'rxjs'],
    ['rxjs/observable/of', 'rxjs'],
    ['rxjs/observable/race', 'rxjs'],
    ['rxjs/observable/range', 'rxjs'],
    ['rxjs/observable/timer', 'rxjs'],
    ['rxjs/observable/zip', 'rxjs'],
    ['rxjs/observable/fromPromise', 'rxjs'],
    ['rxjs/observable/if', 'rxjs'],
    ['rxjs/observable/throw', 'rxjs'],
    ['rxjs/observable/never', 'rxjs'],
    ['rxjs/observable/empty', 'rxjs'],
    ['rxjs/observable/FromEventObservable', 'rxjs/internal/observable/fromEvent']
]);
var OperatorsPathRe = /^rxjs\/operators\/.*$/;
var NewOperatorsPath = 'rxjs/operators';
var ImportReplacements = [
    {
        path: 'rxjs/observable/empty',
        symbol: 'empty',
        newPath: 'rxjs',
        newSymbol: 'EMPTY'
    },
    {
        path: 'rxjs/observable/never',
        symbol: 'never',
        newPath: 'rxjs',
        newSymbol: 'NEVER'
    },
    {
        path: 'rxjs/observable/fromPromise',
        symbol: 'fromPromise',
        newPath: 'rxjs',
        newSymbol: 'from'
    },
    {
        path: 'rxjs/observable/throw',
        symbol: '_throw',
        newPath: 'rxjs',
        newSymbol: 'throwError'
    },
    {
        path: 'rxjs/Subscription',
        symbol: 'AnonymousSubscription',
        newPath: 'rxjs',
        newSymbol: 'Unsubscribable'
    },
    {
        path: 'rxjs/Subscription',
        symbol: 'ISubscription',
        newPath: 'rxjs',
        newSymbol: 'SubscriptionLike'
    }
];
