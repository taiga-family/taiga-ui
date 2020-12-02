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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var tsutils = require("tsutils");
var ts = require("typescript");
var AstUtils_1 = require("./utils/AstUtils");
var FORBIDDEN_IMPORT_FAILURE_STRING = 'Found child_process import';
var FOUND_EXEC_FAILURE_STRING = 'Found child_process.exec() with non-literal first argument';
var FORBIDDEN_MODULE_NAME = 'child_process';
var FORBIDDEN_FUNCTION_NAME = 'exec';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'detect-child-process',
        type: 'maintainability',
        description: 'Detects instances of child_process and child_process.exec',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            It is dangerous to pass a string constructed at runtime as the first argument to the child_process.exec().\n            <code>child_process.exec(cmd)</code> runs <code>cmd</code> as a shell command which allows attacker \n            to execute malicious code injected into <code>cmd</code> string.\n            Instead of <code>child_process.exec(cmd)</code> you should use <code>child_process.spawn(cmd)</code> \n            or specify the command as a literal, e.g. <code>child_process.exec('ls')</code>.\n        "], ["\n            It is dangerous to pass a string constructed at runtime as the first argument to the child_process.exec().\n            <code>child_process.exec(cmd)</code> runs <code>cmd</code> as a shell command which allows attacker \n            to execute malicious code injected into <code>cmd</code> string.\n            Instead of <code>child_process.exec(cmd)</code> you should use <code>child_process.spawn(cmd)</code> \n            or specify the command as a literal, e.g. <code>child_process.exec('ls')</code>.\n        "]))),
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Security',
        commonWeaknessEnumeration: '88'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function getProhibitedImportedNames(namedImports) {
    return namedImports.elements
        .filter(function (x) {
        var originalIdentifier;
        if (x.propertyName === undefined) {
            originalIdentifier = x.name;
        }
        else {
            originalIdentifier = x.propertyName;
        }
        return tsutils.getIdentifierText(originalIdentifier) === FORBIDDEN_FUNCTION_NAME;
    })
        .map(function (x) { return tsutils.getIdentifierText(x.name); });
}
function isNotUndefined(value) {
    return value !== undefined;
}
function getProhibitedBoundNames(namedBindings) {
    return namedBindings.elements
        .filter(function (x) {
        if (!ts.isIdentifier(x.name)) {
            return false;
        }
        var importedName;
        if (x.propertyName === undefined) {
            importedName = tsutils.getIdentifierText(x.name);
        }
        else {
            if (ts.isIdentifier(x.propertyName)) {
                importedName = tsutils.getIdentifierText(x.propertyName);
            }
            else if (ts.isStringLiteral(x.propertyName)) {
                importedName = x.propertyName.text;
            }
        }
        return importedName === FORBIDDEN_FUNCTION_NAME;
    })
        .map(function (x) {
        if (ts.isIdentifier(x.name)) {
            return tsutils.getIdentifierText(x.name);
        }
        return undefined;
    })
        .filter(isNotUndefined);
}
function walk(ctx) {
    var childProcessModuleAliases = new Set();
    var childProcessFunctionAliases = new Set();
    function processImport(node, moduleAlias, importedFunctionsAliases, importedModuleName) {
        if (importedModuleName === FORBIDDEN_MODULE_NAME) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FORBIDDEN_IMPORT_FAILURE_STRING);
            if (moduleAlias !== undefined) {
                childProcessModuleAliases.add(moduleAlias);
            }
            importedFunctionsAliases.forEach(function (x) { return childProcessFunctionAliases.add(x); });
        }
    }
    function processRequire(node) {
        var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
        if (functionTarget !== undefined || node.arguments.length === 0) {
            return;
        }
        var firstArg = node.arguments[0];
        if (tsutils.isStringLiteral(firstArg) && firstArg.text === FORBIDDEN_MODULE_NAME) {
            var alias = void 0;
            var importedNames = [];
            if (tsutils.isVariableDeclaration(node.parent)) {
                if (tsutils.isIdentifier(node.parent.name)) {
                    alias = tsutils.getIdentifierText(node.parent.name);
                }
                else if (tsutils.isObjectBindingPattern(node.parent.name)) {
                    importedNames = getProhibitedBoundNames(node.parent.name);
                }
            }
            processImport(node, alias, importedNames, firstArg.text);
        }
    }
    function isProhibitedCall(node) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        var functionTarget = AstUtils_1.AstUtils.getFunctionTarget(node);
        var hasNonStringLiteralFirstArgument = node.arguments.length > 0 && !tsutils.isStringLiteral(node.arguments[0]);
        if (functionTarget === undefined) {
            return childProcessFunctionAliases.has(functionName) && hasNonStringLiteralFirstArgument;
        }
        return (childProcessModuleAliases.has(functionTarget) && functionName === FORBIDDEN_FUNCTION_NAME && hasNonStringLiteralFirstArgument);
    }
    function processCallExpression(node) {
        var functionName = AstUtils_1.AstUtils.getFunctionName(node);
        if (functionName === 'require') {
            processRequire(node);
        }
        if (isProhibitedCall(node)) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), FOUND_EXEC_FAILURE_STRING);
        }
    }
    function processImportDeclaration(node) {
        if (!tsutils.isStringLiteral(node.moduleSpecifier)) {
            return;
        }
        var moduleName = node.moduleSpecifier.text;
        var alias;
        var importedNames = [];
        if (node.importClause !== undefined) {
            if (node.importClause.name !== undefined) {
                alias = tsutils.getIdentifierText(node.importClause.name);
            }
            if (node.importClause.namedBindings !== undefined) {
                if (tsutils.isNamespaceImport(node.importClause.namedBindings)) {
                    alias = tsutils.getIdentifierText(node.importClause.namedBindings.name);
                }
                else if (tsutils.isNamedImports(node.importClause.namedBindings)) {
                    importedNames = getProhibitedImportedNames(node.importClause.namedBindings);
                }
            }
        }
        processImport(node, alias, importedNames, moduleName);
    }
    function processImportEqualsDeclaration(node) {
        if (tsutils.isExternalModuleReference(node.moduleReference)) {
            var moduleRef = node.moduleReference;
            if (tsutils.isStringLiteral(moduleRef.expression)) {
                var moduleName = moduleRef.expression.text;
                var alias = node.name.text;
                processImport(node, alias, [], moduleName);
            }
        }
    }
    function cb(node) {
        if (tsutils.isImportEqualsDeclaration(node)) {
            processImportEqualsDeclaration(node);
        }
        if (tsutils.isImportDeclaration(node)) {
            processImportDeclaration(node);
        }
        if (tsutils.isCallExpression(node)) {
            processCallExpression(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
var templateObject_1;
//# sourceMappingURL=detectChildProcessRule.js.map