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
var FAILURE_STRING = 'duplicate RxJS import';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'rxjs-collapse-imports',
        description: "In RxJS v6.0 most imports are just " +
            "\"import {...} from 'rxjs';\". This TSLint rule collapses the " +
            "duplicate imports of rxjs into one import statement.",
        rationale: '',
        options: null,
        optionsDescription: '',
        type: 'style',
        typescriptOnly: true
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var RXJS_IMPORTS = 'rxjs';
function walk(ctx) {
    var allRxjsImports = new Map();
    for (var _i = 0, _a = ctx.sourceFile.statements; _i < _a.length; _i++) {
        var statement = _a[_i];
        if (!tsutils.isImportDeclaration(statement)) {
            continue;
        }
        if (!statement.importClause) {
            continue;
        }
        if (!statement.importClause.namedBindings) {
            continue;
        }
        if (!tsutils.isNamedImports(statement.importClause.namedBindings)) {
            continue;
        }
        if (!tsutils.isLiteralExpression(statement.moduleSpecifier)) {
            continue;
        }
        var moduleSpecifier = statement.moduleSpecifier.text;
        if (!moduleSpecifier.startsWith(RXJS_IMPORTS)) {
            continue;
        }
        var existingImport = allRxjsImports.get(moduleSpecifier);
        var namedImports = statement.importClause.namedBindings.getText(ctx.sourceFile).slice(1, -1);
        if (!existingImport) {
            allRxjsImports.set(moduleSpecifier, {
                namedImports: namedImports,
                importStatements: [statement]
            });
        }
        else {
            existingImport.namedImports += ", " + namedImports;
            existingImport.importStatements.push(statement);
        }
    }
    var entries = allRxjsImports.entries();
    while (true) {
        var current = entries.next();
        if (current.done) {
            break;
        }
        var _b = current.value, path = _b[0], imports = _b[1];
        if (imports.importStatements.length === 1) {
            continue;
        }
        var fixes = [
            Lint.Replacement.replaceNode(imports.importStatements[0].importClause.namedBindings, "{" + imports.namedImports + "}")
        ];
        var _loop_1 = function (duplicateImport) {
            var end = duplicateImport.end;
            tsutils.forEachComment(duplicateImport, function (fullText, comment) {
                end = end < comment.end ? comment.end : end;
            }, ctx.sourceFile);
            fixes.push(Lint.Replacement.deleteFromTo(duplicateImport.getFullStart(), end));
        };
        for (var _c = 0, _d = imports.importStatements.slice(1); _c < _d.length; _c++) {
            var duplicateImport = _d[_c];
            _loop_1(duplicateImport);
        }
        ctx.addFailureAtNode(imports.importStatements[0], FAILURE_STRING, fixes);
    }
}
